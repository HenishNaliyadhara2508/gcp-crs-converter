import React, { useState } from 'react';

const FileUploadComponent = ({ onParsedData }) => {
    const [error, setError] = useState('');
    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [parsedData, setParsedData] = useState([]);

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
            setIsFileLoaded(true);
            setError('');
            if (onParsedData) onParsedData(data);
        };
        reader.readAsText(file);
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
            {isFileLoaded && (
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
                        {parsedData.map((data, index) => (
                            <tr key={index}>
                                <td className="border p-2">{data.id}</td>
                                <td className="border p-2">
                                    {data.x.toFixed(2)}
                                </td>
                                <td className="border p-2">
                                    {data.y.toFixed(2)}
                                </td>
                                <td className="border p-2">
                                    {data.z.toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default FileUploadComponent;
