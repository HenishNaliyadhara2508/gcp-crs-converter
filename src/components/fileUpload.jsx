import React, { useState } from 'react';

const FileUploadComponent = () => {
    const [fileData, setFileData] = useState([]);
    const [error, setError] = useState('');
    const [isFileLoaded, setIsFileLoaded] = useState(false);

    // Handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.name.endsWith('.txt') || file.name.endsWith('.csv')) {
                // Handle the file based on its extension
                processFile(file);
            } else {
                setError('Please upload a .txt or .csv file');
            }
        }
    };

    // Process the file (either .txt or .csv)
    const processFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const text = e.target.result;
            const rows = text.split('\n'); // Split file by line
            const parsedData = rows
                .map((line) => {
                    const values = line.trim().split(';'); // Split by semicolon
                    if (values.length === 4) {
                        const [id, x, y, z] = values;
                        return {
                            id,
                            x: parseFloat(x),
                            y: parseFloat(y),
                            z: parseFloat(z),
                        };
                    }
                    return null; // Return null if data doesn't match expected format
                })
                .filter(Boolean); // Remove any nulls from the result
            setFileData(parsedData);
            setIsFileLoaded(true);
            setError('');
        };
        reader.readAsText(file);
    };

    // Display the parsed data in tabular format
    const displayData = () => {
        return (
            <table className="table-auto w-full border-collapse mt-4">
                <thead>
                    <tr>
                        <th className="border p-2 text-left">ID</th>
                        <th className="border p-2 text-left">X</th>
                        <th className="border p-2 text-left">Y</th>
                        <th className="border p-2 text-left">Z</th>
                    </tr>
                </thead>
                <tbody>
                    {fileData.map((data, index) => (
                        <tr key={index}>
                            <td className="border p-2">{data.id}</td>
                            <td className="border p-2">{data.x.toFixed(2)}</td>
                            <td className="border p-2">{data.y.toFixed(2)}</td>
                            <td className="border p-2">{data.z.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div className="p-4 border rounded-md space-y-4 w-80 bg-white text-black">
            <h3 className="font-medium text-lg">Upload and Parse File</h3>

            <div>
                <input
                    type="file"
                    onChange={handleFileUpload}
                    accept=".txt, .csv"
                    className="border p-2 rounded w-full"
                />
            </div>

            {error && <div className="text-red-500">{error}</div>}

            {isFileLoaded && (
                <div className="mt-4">
                    <h4 className="font-medium">Parsed XYZ Coordinates:</h4>
                    {displayData()}
                </div>
            )}
        </div>
    );
};

export default FileUploadComponent;
