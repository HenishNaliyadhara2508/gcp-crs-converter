import * as THREE from 'three';
import proj4 from 'proj4'; // Import proj4 for CRS transformation

let defaultPotree = window.Potree;

export class PotreeView extends defaultPotree.Viewer {
    constructor(params) {
        super(params.ele);
        this.ele = params.ele;
        this.annotations = [];
        this.isPlacingButton = false;
        this.clickedPoints = [];
        this.gcpData = [];
        this.markers = new Map();
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

        try {
            this.retzPointCloud = await this.loadRetzPointCloud();
            this.fitToScreen();
        } catch (err) {
            console.error('Error loading Retz point cloud:', err);
            return;
        }

        if (this.potreeScene.view) {
            this.potreeScene.view.position.set(0, 12.5, 80);
            this.potreeScene.view.lookAt(new THREE.Vector3(0, 12.5, 50));
        } else {
            console.error('Potree Scene View is not initialized.');
        }
    }

    async loadEPSGDefinition(epsgCode) {
        if (proj4.defs[epsgCode]) {
            delete proj4.defs[epsgCode];
        }

        try {
            const response = await fetch(`https://epsg.io/${epsgCode}.proj4`);
            if (!response.ok) {
                throw new Error(
                    `Failed to fetch EPSG definition for ${epsgCode}`,
                );
            }

            const projDefinition = await response.text();
            proj4.defs(epsgCode, projDefinition);
        } catch (error) {
            console.error(
                `Error loading EPSG definition for ${epsgCode}:`,
                error,
            );

            const fallbackDefs = {
                'EPSG:4326': '+proj=longlat +datum=WGS84 +no_defs',
                'EPSG:3857':
                    '+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs',
            };

            if (fallbackDefs[epsgCode]) {
                proj4.defs(epsgCode, fallbackDefs[epsgCode]);
            } else {
                console.error(`No fallback available for ${epsgCode}`);
            }
        }
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

                    pointcloud.position.set(569277.402752, 5400050.599046, 0);
                    pointcloud.rotation.set(0, 0, -0.035);

                    const material = pointcloud.material;
                    material.pointSizeType =
                        this.defaultPotree.PointSizeType.ADAPTIVE;
                    material.size = 0.7;
                    material.elevationRange = [0, 70];
                    material.weightRGB = 1.0;
                    material.weightElevation = 1.0;

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

                    this.retzPointCloud = pointcloud;

                    const pointcloudProjection =
                        '+proj=utm +zone=33 +ellps=WGS84 +datum=WGS84 +units=m +no_defs';
                    const mapProjection = proj4.defs('WGS84');
                    this.retzPointCloud.epsgCode = '32633';

                    window.toMap = proj4(pointcloudProjection, mapProjection);
                    window.toScene = proj4(mapProjection, pointcloudProjection);

                    resolve(pointcloud);
                },
            );
        });
    }

    toDM(deg) {
        const absolute = Math.abs(deg);
        const degrees = Math.floor(absolute);
        const minutes = (absolute - degrees) * 60;

        return `${degrees}°${minutes.toFixed(5)}'`;
    }

    convertXYToLatLon(x, y, sourceEpsgCode) {
        const latLon = proj4(sourceEpsgCode, 'EPSG:4326', [x, y]);
        const [lon, lat] = latLon;
        return { lat, lon };
    }

    async handlePointClickWithCRS(clickEvent, targetCRS) {
        const sourceCRS = this.retzPointCloud.epsgCode;
        if (!sourceCRS) {
            console.error('Retz point cloud not loaded.');
            return null;
        }
        await this.loadEPSGDefinition(sourceCRS);
        await this.loadEPSGDefinition(targetCRS);

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const rect = this.ele.getBoundingClientRect();

        mouse.x = ((clickEvent.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((clickEvent.clientY - rect.top) / rect.height) * 2 + 1;

        const camera = this.potreeScene.getActiveCamera();
        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(
            this.scene.pointclouds,
            true,
        );

        if (intersects.length > 0) {
            const { x, y, z } = intersects[0].point;

            const [lon, lat] = proj4(sourceCRS, targetCRS, [x, y]);

            return {
                x,
                y,
                z,
                lat,
                lon,
                latDMS: this.toDM(lat),
                lonDMS: this.toDM(lon),
            };
        }

        return null;
    }
    async addMarkerOnClick(event) {
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
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
            const { x, y, z } = intersects[0].point;

            const geometry = new THREE.SphereGeometry(10, 16, 16);
            const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
            const sphere = new THREE.Mesh(geometry, material);

            sphere.position.set(x, y, z);

            this.potreeScene.scene.add(sphere);

            const markerId = Date.now();

            this.markers.set(markerId, {
                mesh: sphere,
                data: { x, y, z },
            });

            return { markerId, position: { x, y, z } };
        } else {
            return null;
        }
    }

    placeMarkerForGCP(gcp) {
        return new Promise((resolve, reject) => {
            const handleClick = async (event) => {
                try {
                    const { markerId, position } =
                        await this.addMarkerOnClick(event);
                    window.removeEventListener('click', handleClick);
                    resolve({ markerId, position });
                } catch (err) {
                    window.removeEventListener('click', handleClick);
                    reject(err);
                }
            };

            window.addEventListener('click', handleClick, { once: true });
        });
    }

    calculateHelmertTransformation(localPoints, globalPoints) {
        const transformMatrix = new THREE.Matrix4();
        return transformMatrix;
    }

    applyHelmertTransformation() {
        if (this.clickedPoints.length !== this.gcpData.length) {
            alert('Number of clicked points does not match GCPs.');
            return;
        }

        const transformMatrix = this.calculateHelmertTransformation(
            this.clickedPoints,
            this.gcpData,
        );

        // Apply transformation to each clicked point
        this.clickedPoints.forEach((point, index) => {
            const gcp = this.gcpData[index];
            const transformedPoint = transformMatrix.multiplyVector3(
                new THREE.Vector3(gcp.x, gcp.y, gcp.z),
            );
            point.setPosition(
                transformedPoint.x,
                transformedPoint.y,
                transformedPoint.z,
            );
        });
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

                onClickCallback(x, y, z);
            }
        });
    }
}
