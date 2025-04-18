import { useState } from 'react';
import { Button, message } from 'antd';
import ParsedDataTable from './GCPUtils/ParsedDataTable.jsx';
import TransformCoordinates from './GCPUtils/transformCoordinates.jsx';

const FileUploadComponent = ({ potreeViewRef, potreeRenderRef }) => {
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
            return [local.position.x, local.position.y, local.position.z]; // Local position (marker)
        });
        const target = matched.map((gcp) => {
            const local = gcpMarkerMappings[gcp.id];
            return [local.gcp.x, local.gcp.y, local.gcp.z]; // Local position (marker)
        });

        const { scale, rotation, translation } = calculateHelmertTransformation(
            source,
            target,
        );
        const preview = source.map(([x, y, z]) => {
            const rotated = rotatePoint([x, y, z], rotation);
            return {
                x: rotated[0] * scale + translation.x,
                y: rotated[1] * scale + translation.y,
                z: rotated[2] * scale + translation.z,
            };
        });

        const transformedData = matched.map((gcp, i) => ({
            id: gcp.id,
            x: preview[i].x,
            y: preview[i].y,
            z: preview[i].z,
        }));

        setTransformationPreview(transformedData);
        setTransformationParams({ scale, translation });
        message.success('Transformation calculated.');
    };

    const calculateHelmertTransformation = (source, target) => {
        const sourceCentroid = computeCentroid(source);
        const targetCentroid = computeCentroid(target);

        const sourceCentered = source.map((point) =>
            subtractPoints(point, sourceCentroid),
        );
        const targetCentered = target.map((point) =>
            subtractPoints(point, targetCentroid),
        );

        const scale = computeScale(sourceCentered, targetCentered);
        const rotation = computeRotation(sourceCentered, targetCentered);
        const translation = computeTranslation(
            scale,
            rotation,
            sourceCentroid,
            targetCentroid,
        );

        return { scale, rotation, translation };
    };

    const computeCentroid = (points) => {
        const sum = points.reduce(
            (acc, point) => {
                acc[0] += point[0];
                acc[1] += point[1];
                acc[2] += point[2];
                return acc;
            },
            [0, 0, 0],
        );
        return sum.map((coord) => coord / points.length);
    };

    const subtractPoints = (point, centroid) => {
        return point.map((coord, i) => coord - centroid[i]);
    };

    const computeScale = (sourceCentered, targetCentered) => {
        const dotProduct = sourceCentered.reduce(
            (acc, point, i) =>
                acc +
                point.reduce(
                    (dp, val, j) => dp + val * targetCentered[i][j],
                    0,
                ),
            0,
        );
        const normSource = sourceCentered.reduce(
            (acc, point) =>
                acc + point.reduce((sum, val) => sum + val * val, 0),
            0,
        );
        return dotProduct / normSource;
    };

    const computeRotation = (sourceCentered, targetCentered) => {
        // Placeholder for rotation matrix computation
        // In a real case, this would involve using singular value decomposition or another method
        return sourceCentered; // This is a dummy placeholder, replace with actual rotation logic
    };

    const computeTranslation = (
        scale,
        rotation,
        sourceCentroid,
        targetCentroid,
    ) => {
        const translation = targetCentroid.map(
            (coord, i) => coord - scale * rotation[i] * sourceCentroid[i],
        );
        return { x: translation[0], y: translation[1], z: translation[2] };
    };

    const rotatePoint = (point, rotation) => {
        // Dummy placeholder for actual rotation logic, apply the rotation matrix to the point
        return point; // Replace with actual rotated point
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
                        potreeRenderRef={potreeRenderRef}
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
                    onApply={() => {
                        message.success('Transformation applied!');
                        // You can apply it to your point cloud here if needed
                    }}
                />
            )}
        </div>
    );
};

export default FileUploadComponent;
