// Store for managing transformations and point data (MobX store)
import { makeAutoObservable } from 'mobx';

class PotreeManager {
    pointCloudData = null;
    transformationParams = {
        dx: 0,
        dy: 0,
        dz: 0,
        rx: 0,
        ry: 0,
        rz: 0,
        scale: 1,
    };
    selectedGCPs = [];
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    setPointCloudData(data) {
        this.pointCloudData = data;
    }

    setTransformationParams(params) {
        this.transformationParams = params;
    }

    setSelectedGCPs(gcpData) {
        this.selectedGCPs = gcpData;
    }

    setError(error) {
        this.error = error;
    }

    // Apply Helmert transformation to a local point
    helmertTransformation(localPoint) {
        const { dx, dy, dz, rx, ry, rz, scale } = this.transformationParams;

        // Convert rotation angles from degrees to radians
        const radRx = (Math.PI / 180) * rx;
        const radRy = (Math.PI / 180) * ry;
        const radRz = (Math.PI / 180) * rz;

        // Perform rotation (using simplified matrix)
        const transformedPoint = {
            x: scale * localPoint.x + dx,
            y: scale * localPoint.y + dy,
            z: scale * localPoint.z + dz,
        };

        transformedPoint.x += transformedPoint.x * radRx;
        transformedPoint.y += transformedPoint.y * radRy;
        transformedPoint.z += transformedPoint.z * radRz;

        return transformedPoint;
    }

    // Calculate the deviation (Euclidean distance)
    calculateDeviation(transformedGCP, selectedPoint) {
        const dx = selectedPoint.x - transformedGCP.x;
        const dy = selectedPoint.y - transformedGCP.y;
        const dz = selectedPoint.z - transformedGCP.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

const potreeManager = new PotreeManager();
export default potreeManager;
