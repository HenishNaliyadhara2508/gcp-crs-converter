import { useEffect, useRef, useState } from 'react';
import { PotreeView } from './potreeView';
import { EPSGSelector } from '../epsgSelector';
import FileUploadComponent from '../fileUpload';

export default function PotreeCanvas() {
    const potreeRenderRef = useRef(null);
    const potreeViewRef = useRef(null);

    const [clickedCoordinates, setClickedCoordinates] = useState(null);
    const [sourceEPSG, setSourceEPSG] = useState('32633');
    const [targetEPSG, setTargetEPSG] = useState('4326');
    const [fileData, setFileData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.name.endsWith('.txt') || file.name.endsWith('.csv')) {
                processFile(file);
            } else {
                // setError('Please upload a .txt or .csv file');
            }
        }
    };

    const processFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const rows = e.target.result.split('\n');
            const parsedData = rows
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
            setFileData(parsedData);
        };
        reader.readAsText(file);
    };

    useEffect(() => {
        const createPotree = async () => {
            potreeViewRef.current = new PotreeView({
                ele: potreeRenderRef.current,
            });
            await potreeViewRef.current.init();
            potreeRenderRef.current.addEventListener('click', async (e) => {
                const coords =
                    await potreeViewRef.current.handlePointClickWithCRS(
                        e,
                        sourceEPSG,
                        targetEPSG,
                    );
                if (coords) setClickedCoordinates(coords);
            });
        };
        createPotree();
    }, []);

    useEffect(() => {
        if (potreeViewRef.current) {
            potreeViewRef.current.fitToScreen();
        }
    }, []);

    useEffect(() => {
        if (fileData.length && potreeViewRef.current) {
            fileData.forEach((coord) => {
                // console.log('Adding Point:', coord);
            });
        }
    }, [fileData]);

    return (
        <div className="relative flex items-center justify-center h-screen bg-white">
            <div className="absolute top-5 right-5 z-10 bg-white rounded-lg shadow-md max-h-[80vh] overflow-y-auto p-4">
                <EPSGSelector
                    sourceEPSG={sourceEPSG}
                    setSourceEPSG={setSourceEPSG}
                    targetEPSG={targetEPSG}
                    setTargetEPSG={setTargetEPSG}
                />
            </div>
            <div className="absolute top-5 left-5 z-10 bg-white rounded-lg shadow-md max-h-[80vh] overflow-y-auto p-4">
                <FileUploadComponent onFileUpload={handleFileUpload} />
            </div>
            <div
                className="potree_render_area"
                style={{
                    width: '90vw',
                    height: '90vh',
                    border: 'none',
                    outline: 'none',
                }}
                ref={potreeRenderRef}></div>

            {clickedCoordinates && (
                <div
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        zIndex: 10,
                        backgroundColor: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                        userSelect: 'text',
                        minWidth: '240px',
                    }}>
                    <h4>Clicked Point Coordinates:</h4>
                    <p>
                        XYZ: ({clickedCoordinates.x.toFixed(2)},{' '}
                        {clickedCoordinates.y.toFixed(2)},{' '}
                        {clickedCoordinates.z.toFixed(2)})
                    </p>
                    <p>Lat: {clickedCoordinates.latDMS}</p>
                    <p>Lon: {clickedCoordinates.lonDMS}</p>
                    <p>Lat (DD): {clickedCoordinates.lat}</p>
                    <p>Lon (DD): {clickedCoordinates.lon}</p>
                </div>
            )}
        </div>
    );
}
