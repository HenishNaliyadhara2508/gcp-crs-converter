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
        if (selectedData.length === 0) {
            message.warning('Please select data points first.');
            return;
        }

        const translation = { x: 10, y: 5, z: 2 }; // Example values
        const scale = 1.0;

        const preview = selectedData.map((point) => ({
            id: point.id,
            x: scale * point.x + translation.x,
            y: scale * point.y + translation.y,
            z: scale * point.z + translation.z,
        }));

        setTransformationPreview(preview);
        setTransformationParams({ translation, scale });

        message.success('Transformation calculated.');
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
                <div className="mt-4">
                    <h4 className="font-medium text-lg">
                        Parsed Data (Select points for transformation)
                    </h4>
                    <ParsedDataTable
                        data={parsedData}
                        setSelectedData={setSelectedData}
                        potreeViewRef={potreeViewRef}
                        potreeRenderRef={potreeRenderRef}
                    />
                </div>
            )}

            {isFileLoaded && selectedData.length > 0 && (
                <div className="mx-auto flex justify-ce items-center">
                    <Button
                        type="primary"
                        onClick={handleCalculateTransformation}
                        disabled={selectedData.length === 0}>
                        Calculate Transformation
                    </Button>
                </div>
            )}

            {/* Show transformed data and parameters */}
            {transformationPreview.length > 0 && transformationParams && (
                <TransformCoordinates
                    transformedData={transformationPreview}
                    transformationParams={transformationParams}
                />
            )}
        </div>
    );
};

export default FileUploadComponent;
