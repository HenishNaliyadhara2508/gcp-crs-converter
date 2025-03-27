import * as THREE from 'three';
import { loadPotree } from './potreeUtils';
let defaultPotree = window.Potree;
const publicUrl = import.meta.env.VITE_APP_BASE_URL;

export class PotreeView extends defaultPotree.Viewer {
    constructor(params) {
        super(params.ele);
        this.ele = params.ele;
    }
    async init() {
        let scope = this;
        this.defaultPotree = defaultPotree;

        scope.setEDLEnabled(false);
        scope.setFOV(60);
        scope.setPointBudget(1000000);
        scope.loadSettingsFromURL();
        scope.setBackground('null');

        this.pointCloud1 = undefined;
        this.potreeScene = scope.scene;
        this.threeScene = this.potreeScene.scene;
        this.pointCloud1 = await this.addPotree(
            publicUrl +
                '/three-files/1687783496486/postprocessfiles/lasFile/metadata.json',
        );
        this.pointCloud1 = this.pointCloud1.pointCloud;
        this.potreeScene.addPointCloud(this.pointCloud1);
        scope.fitToScreen();

        // this.pointCloud2 = await this.addPotree(
        //   getDomain() + "/OreXyz/postprocessfiles/lasFile/metadata.json"
        // );

        // this.pointCloud2 = this.pointCloud2.pointCloud;

        this.potreeScene.view.position = new THREE.Vector3(0, 12.5, 80);
        this.potreeScene.view.lookAt(new THREE.Vector3(0, 12.5, 50));
        // this.potreeScene.addPointCloud(this.pointCloud2);
    }

    async addPotree(url) {
        let p = await loadPotree(defaultPotree, url);
        let material = p.pointCloud.material;
        material.size = 1;
        material.pointSizeType = defaultPotree.PointSizeType.ADAPTIVE;
        material.shape = defaultPotree.PointShape.SQUARE;
        return p;
    }

    addPoint(point) {
        this.sceneManager.measure.addMarker(point);
    }

    async importPotreeFile(url) {
        this.pointCloud1.visible = false;
        this.pointCloud2.visible = false;

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
    resetCameraPosition() {
        this.potreeScene.view.position = new THREE.Vector3(0, 12.5, 80);
        this.potreeScene.view.lookAt(new THREE.Vector3(0, 12.5, 50));
    }
}
