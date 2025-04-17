import * as THREE from 'three';
import { loadPotree } from './potreeUtils';
import proj4 from 'proj4'; // Import proj4 for CRS transformation

let defaultPotree = window.Potree;

export class PotreeView extends defaultPotree.Viewer {
    constructor(params) {
        super(params.ele);
        this.ele = params.ele;
        this.annotations = [];
        this.isPlacingButton = false;
    }

    async init() {
        let scope = this;
        this.defaultPotree = defaultPotree;

        scope.setEDLEnabled(false);
        scope.setFOV(60);
        scope.setPointBudget(1000000);
        scope.loadSettingsFromURL();
        scope.setBackground('white');

        this.potreeScene = scope.scene;

        if (!this.potreeScene) {
            console.error('Potree Scene is not initialized.');
            return;
        }

        this.threeScene = this.potreeScene.scene;

        // Load Retz point cloud instead of default pointCloud1
        try {
            this.retzPointCloud = await this.loadRetzPointCloud();
            this.fitToScreen();
        } catch (err) {
            console.error('Error loading Retz point cloud:', err);
            return;
        }

        if (this.potreeScene.view) {
            this.potreeScene.view.position.set(0, 12.5, 80); // Optional: update if needed
            this.potreeScene.view.lookAt(new THREE.Vector3(0, 12.5, 50));
        } else {
            console.error('Potree Scene View is not initialized.');
        }
    }

    async addPotree(url) {
        let p = await loadPotree(window.Potree, url);
        let material = p.pointCloud.material;
        material.size = 1;
        material.pointSizeType = window.Potree.PointSizeType.ADAPTIVE;
        material.shape = window.Potree.PointShape.SQUARE;
        return p;
    }

    addPoint(point) {
        this.sceneManager.measure.addMarker(point);
    }

    async importPotreeFile(url) {
        // this.pointCloud1.visible = true;
        // this.pointCloud2.visible = false;

        this.gyroPointCloud = await this.addPotree(url);
        this.gyroPointCloud = this.gyroPointCloud.pointCloud;
        this.potreeScene.addPointCloud(this.gyroPointCloud);
        this.moveCameraAtPattern(this.gyroPointCloud);
    }

    moveCameraAtPattern(pattern) {
        if (!pattern) return;

        var bbox = pattern.boundingBox;

        let size = new THREE.Vector3();

        bbox.getSize(size);

        let mostBig = Math.max(...Object.values(size));

        let cameraPos = pattern.position.clone();

        cameraPos.z += mostBig;

        this.potreeScene.view.yaw = pattern.rotation.z + Math.PI / 2;

        this.potreeScene.view.pitch = -Math.PI / 2;

        this.potreeScene.view.setView(cameraPos, pattern.position.clone());
    }

    convertLatLonToXY(lon, lat, sourceCRS, targetCRS) {
        const [x, y] = proj4(sourceCRS, targetCRS, [lon, lat]);
        return { x, y };
    }

    async loadRetzPointCloud() {
        return new Promise((resolve, reject) => {
            this.defaultPotree.loadPointCloud(
                'http://5.9.65.151/mschuetz/potree/resources/pointclouds/riegl/retz/cloud.js',
                'Retz',
                (e) => {
                    if (!e || !e.pointcloud) {
                        console.error('Failed to load Retz point cloud.');
                        reject();
                        return;
                    }

                    const pointcloud = e.pointcloud;

                    this.potreeScene.addPointCloud(pointcloud);

                    // Position and rotation
                    pointcloud.position.set(569277.402752, 5400050.599046, 0);
                    pointcloud.rotation.set(0, 0, -0.035);

                    // Material settings
                    const material = pointcloud.material;
                    material.pointSizeType =
                        this.defaultPotree.PointSizeType.ADAPTIVE;
                    material.size = 0.7;
                    material.elevationRange = [0, 70];
                    material.weightRGB = 1.0;
                    material.weightElevation = 1.0;

                    // Camera view
                    this.potreeScene.view.position.set(
                        570975.577,
                        5398630.521,
                        1659.311,
                    );
                    this.potreeScene.view.lookAt(
                        570115.285,
                        5400866.092,
                        30.009,
                    );

                    // Save reference
                    this.retzPointCloud = pointcloud;

                    // Coordinate conversion setup
                    const pointcloudProjection =
                        '+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs';
                    const mapProjection = proj4.defs('WGS84');
                    this.retzPointCloud.epsgCode = 'EPSG:32633';

                    window.toMap = proj4(pointcloudProjection, mapProjection);
                    window.toScene = proj4(mapProjection, pointcloudProjection);

                    resolve(pointcloud);
                },
            );
        });
    }

    async transformRetzToLatLon() {
        const transformedBatches = [];
        const pointCloudData = this.retzPointCloud.points; // Points from the Retz point cloud

        const batchSize = 10;
        const totalPoints = pointCloudData.length;

        const sourceEpsgCode = this.retzPointCloud.epsgCode || 'EPSG:4326'; // Default to EPSG:4326 if not found

        // Iterate through the point cloud data and transform the X, Y to lat, lon
        for (let i = 0; i < totalPoints; i += batchSize) {
            const batch = pointCloudData
                .slice(i, i + batchSize)
                .map((point) => {
                    const { lat, lon } = this.convertXYToLatLon(
                        point.x,
                        point.y,
                        sourceEpsgCode,
                    );
                    return { lat, lon };
                });

            transformedBatches.push(batch);
        }

        return transformedBatches;
    }

    // Utility: Convert decimal degrees to DMS format
    toDMS(deg) {
        const absolute = Math.abs(deg);
        const degrees = Math.floor(absolute);
        const minutesNotTruncated = (absolute - degrees) * 60;
        const minutes = Math.floor(minutesNotTruncated);
        const seconds = (minutesNotTruncated - minutes) * 60;

        return `${degrees}°${minutes}'${seconds.toFixed(3)}"`;
    }

    convertXYToLatLon(x, y, sourceEpsgCode) {
        const latLon = proj4(sourceEpsgCode, 'EPSG:4326', [x, y]);
        const [lon, lat] = latLon;
        return { lat, lon };
    }

    addPointCloudClickListener(onClickCallback) {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        window.addEventListener('click', (event) => {
            const rect = this.ele.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

            const camera = this.potreeScene.getActiveCamera();
            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(
                this.scene.pointclouds,
                true,
            );

            if (intersects.length > 0) {
                const intersectedPoint = intersects[0].point;
                const { x, y, z } = intersectedPoint;

                const { lat, lon } = this.convertXYToLatLon(x, y, 'EPSG:32633');

                const latDMS = this.toDMS(lat);
                const lonDMS = this.toDMS(lon);

                onClickCallback({ x, y, z, latDMS, lonDMS });
            }
        });
    }

    transformCRS(
        selectedEPSG,
        sourceEPSG = 'EPSG:4326',
        batchSize = 10,
        gapDistance = 50,
    ) {
        let transformedData = [];
        let batchData = [];

        if (
            this.retzPointCloud &&
            this.retzPointCloud.pcoGeometry &&
            this.retzPointCloud.pcoGeometry.root
        ) {
            const positions =
                this.retzPointCloud.pcoGeometry.root.geometry.attributes
                    .position.array;

            const scale = 1.0;
            const translation = { x: 100, y: 200, z: 300 };
            const rotation = {
                x: (Math.PI / 180) * 10,
                y: (Math.PI / 180) * 15,
                z: (Math.PI / 180) * 20,
            };

            let crsFrom = sourceEPSG;
            let crsTo = selectedEPSG;

            if (crsFrom !== crsTo) {
                for (let i = 0; i < positions.length; i += 3) {
                    let lon = positions[i];
                    let lat = positions[i + 1];
                    let z = positions[i + 2];

                    const { x, y } = this.convertLatLonToXY(
                        lon,
                        lat,
                        crsFrom,
                        crsTo,
                    );

                    transformedData.push({ lat, lon, x, y });

                    positions[i] = x;
                    positions[i + 1] = y;
                    positions[i + 2] = z;
                }
            }

            for (let i = 0; i < positions.length; i += 3) {
                let x = positions[i];
                let y = positions[i + 1];
                let z = positions[i + 2];

                x += translation.x;
                y += translation.y;
                z += translation.z;

                const x1 = x;
                const y1 = y * Math.cos(rotation.x) - z * Math.sin(rotation.x);
                const z1 = y * Math.sin(rotation.x) + z * Math.cos(rotation.x);

                const x2 =
                    x1 * Math.cos(rotation.y) + z1 * Math.sin(rotation.y);
                const y2 = y1;
                const z2 =
                    -x1 * Math.sin(rotation.y) + z1 * Math.cos(rotation.y);

                const x3 =
                    x2 * Math.cos(rotation.z) - y2 * Math.sin(rotation.z);
                const y3 =
                    x2 * Math.sin(rotation.z) + y2 * Math.cos(rotation.z);
                const z3 = z2;

                positions[i] = x3 * scale;
                positions[i + 1] = y3 * scale;
                positions[i + 2] = z3 * scale;
            }

            this.retzPointCloud.pcoGeometry.root.geometry.attributes.position.needsUpdate = true;
        } else {
            console.error(
                'Point cloud geometry is not fully loaded or missing.',
            );
        }

        for (let i = 0; i < transformedData.length; i += batchSize) {
            const batch = transformedData.slice(i, i + batchSize);
            batchData.push(batch);
        }

        return batchData;
    }
}
