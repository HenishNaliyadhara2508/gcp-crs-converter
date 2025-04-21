import { useState } from 'react';
import { Button, message } from 'antd';
import ParsedDataTable from './GCPUtils/ParsedDataTable.jsx';
import TransformCoordinates from './GCPUtils/transformCoordinates.jsx';
import { calculateHelmert3D } from '../helpers/helmert.js';
import * as THREE from 'three';

const FileUploadComponent = ({ potreeViewRef }) => {
    const [error, setError] = useState('');
    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [parsedData, setParsedData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [transformationPreview, setTransformationPreview] = useState([]);
    const [transformationParams, setTransformationParams] = useState(null);
    const [gcpMarkerMappings, setGcpMarkerMappings] = useState({});

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.name.endsWith('.txt') || file.name.endsWith('.csv')) {
                processFile(file);
            } else {
                setError('Please upload a .txt or .csv file');
            }
        }
    };

    const processFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            const rows = text.split('\n');
            const data = rows
                .map((line) => {
                    const values = line.trim().split(';');
                    if (values.length === 4) {
                        const [id, x, y, z] = values;
                        return {
                            id,
                            x: parseFloat(x),
                            y: parseFloat(y),
                            z: parseFloat(z),
                        };
                    }
                    return null;
                })
                .filter(Boolean);

            setParsedData(data);
            setSelectedData(data);
            setIsFileLoaded(true);
            setError('');
        };
        reader.readAsText(file);
    };

    const handleCalculateTransformation = () => {
        const matched = parsedData.filter((gcp) => gcpMarkerMappings[gcp.id]);

        if (matched.length < 3) {
            message.error(
                'At least 3 matched GCPs are required for transformation.',
            );
            return;
        }

        const source = matched.map((gcp) => {
            const local = gcpMarkerMappings[gcp.id];
            return [local.source.x, local.source.y, local.source.z];
        });

        const target = matched.map((gcp) => {
            const local = gcpMarkerMappings[gcp.id];
            return [local.target.x, local.target.y, local.target.z];
        });

        const ids = matched.map((gcp) => gcp.id);

        const {
            scale: rawScale,
            rotation,
            translation,
            transformed,
        } = calculateHelmert3D(source, target, ids);
        const scale = Math.abs(rawScale);

        const transformedData = transformed.map((point) => ({
            id: point.id,
            dx: point.dx,
            dy: point.dy,
            dz: point.dz,
        }));

        setTransformationPreview(transformedData);
        setTransformationParams({ scale, rotation, translation });

        message.success('Transformation calculated successfully.');
    };

    const onApplyTransformation = () => {
        const { scale, translation } = transformationParams;

        const scaleMatrix = new THREE.Matrix4().makeScale(scale, scale, scale);
        const translationMatrix = new THREE.Matrix4().makeTranslation(
            translation[0],
            translation[1],
            translation[2],
        );

        const transformationMatrix = new THREE.Matrix4();
        transformationMatrix.multiply(translationMatrix);
        transformationMatrix.multiply(scaleMatrix);

        if (potreeViewRef.current && potreeViewRef.current.scene) {
            const pointCloud = potreeViewRef.current.scene.pointclouds[0];

            if (pointCloud) {
                pointCloud.matrixAutoUpdate = false;
                pointCloud.matrix.identity().multiply(transformationMatrix);
                pointCloud.updateMatrixWorld(true);
                pointCloud.matrixWorldNeedsUpdate = true;

                const box = new THREE.Box3().setFromObject(pointCloud);
                const center = new THREE.Vector3();
                box.getCenter(center);

                const camera = potreeViewRef.current.scene.getActiveCamera();
                camera.position.set(center.x, center.y, center.z + 50);
                // console.log(camera.position, 'camera position');
                // console.log(center, 'center');
                camera.lookAt(center);
                camera.updateProjectionMatrix();

                if (potreeViewRef.current) {
                    potreeViewRef.current.render();
                }
            }
        }

        message.success('Transformation applied successfully!');
    };

    return (
        <div className="p-4 border rounded-md space-y-4 w-80 bg-white text-black">
            <h3 className="font-medium text-lg">Upload and Parse File</h3>
            <input
                type="file"
                onChange={handleFileUpload}
                accept=".txt, .csv"
                className="border p-2 rounded w-full"
            />
            {error && <div className="text-red-500">{error}</div>}

            {isFileLoaded && parsedData.length > 0 && (
                <>
                    <h4 className="font-medium text-lg">Parsed Data</h4>
                    <ParsedDataTable
                        data={parsedData}
                        setSelectedData={setSelectedData}
                        potreeViewRef={potreeViewRef}
                        gcpMarkerMappings={gcpMarkerMappings}
                        setGcpMarkerMappings={setGcpMarkerMappings}
                    />
                    <div className="mx-auto flex justify-center items-center pt-4">
                        <Button
                            type="primary"
                            onClick={handleCalculateTransformation}>
                            Calculate Transformation
                        </Button>
                    </div>
                </>
            )}

            {transformationPreview.length > 0 && transformationParams && (
                <TransformCoordinates
                    transformedData={transformationPreview}
                    transformationParams={transformationParams}
                    onApply={onApplyTransformation}
                />
            )}
        </div>
    );
};

export default FileUploadComponent;
