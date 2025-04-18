import { useEffect, useRef, useState } from 'react';
import { Card, Typography } from 'antd';
import { PotreeView } from './potreeView';
import { EPSGSelector } from '../epsgSelector';
import FileUploadComponent from '../fileUpload';

const { Text } = Typography;

export default function PotreeCanvas() {
    const potreeRenderRef = useRef(null);
    const potreeViewRef = useRef(null);

    const [clickedCoordinates, setClickedCoordinates] = useState(null);
    const [sourceEPSG, setSourceEPSG] = useState('32633');
    const [targetEPSG, setTargetEPSG] = useState('4326');
    const [fileData, setFileData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (
            file &&
            (file.name.endsWith('.txt') || file.name.endsWith('.csv'))
        ) {
            processFile(file);
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
                // Add visual points if needed
            });
        }
    }, [fileData]);

    return (
        <div
            className="w-full h-screen relative"
            style={{ overflow: 'hidden' }}>
            {/* Potree Render Area - Fixed Left */}
            <div
                ref={potreeRenderRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '75vw',
                    height: '100vh',
                    zIndex: 1,
                    backgroundColor: '#f0faff',
                }}
            />

            {/* Control Panel - Fixed Right */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '25vw',
                    height: '100vh',
                    padding: '16px',
                    backgroundColor: '#ffffff',
                    borderLeft: '2px solid #1890ff',
                    overflowY: 'auto',
                    zIndex: 10,
                }}>
                <div className="space-y-4">
                    <EPSGSelector
                        sourceEPSG={sourceEPSG}
                        setSourceEPSG={setSourceEPSG}
                        targetEPSG={targetEPSG}
                        setTargetEPSG={setTargetEPSG}
                    />

                    <Card
                        size="small"
                        title={
                            <span style={{ color: '#52c41a' }}>
                                Upload GCP File
                            </span>
                        }
                        bordered
                        style={{
                            borderLeft: '4px solid #52c41a',
                            backgroundColor: '#f6ffed',
                        }}>
                        <FileUploadComponent onFileUpload={handleFileUpload} />
                    </Card>

                    {clickedCoordinates && (
                        <Card
                            size="small"
                            title={
                                <span style={{ color: '#1890ff' }}>
                                    Clicked Coordinates
                                </span>
                            }
                            bordered
                            style={{
                                borderLeft: '4px solid #1890ff',
                                backgroundColor: '#e6f7ff',
                            }}>
                            <p>
                                XYZ:{' '}
                                <Text
                                    code
                                    style={{ backgroundColor: '#f0f5ff' }}>
                                    ({clickedCoordinates.x.toFixed(2)},
                                    {clickedCoordinates.y.toFixed(2)},
                                    {clickedCoordinates.z.toFixed(2)})
                                </Text>
                            </p>
                            <p>
                                Lat (DMS):{' '}
                                <Text code>{clickedCoordinates.latDMS}</Text>
                            </p>
                            <p>
                                Lon (DMS):{' '}
                                <Text code>{clickedCoordinates.lonDMS}</Text>
                            </p>
                            <p>
                                Lat (DD):{' '}
                                <Text style={{ color: '#52c41a' }}>
                                    {clickedCoordinates.lat}
                                </Text>
                            </p>
                            <p>
                                Lon (DD):{' '}
                                <Text style={{ color: '#52c41a' }}>
                                    {clickedCoordinates.lon}
                                </Text>
                            </p>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
