import { useEffect, useRef, useState } from 'react';
import { Card, Typography } from 'antd';
import { PotreeView } from './potreeView';
import { EPSGSelector } from '../epsgSelector';
import FileUploadComponent from '../fileUpload';

const { Text } = Typography;

export default function PotreeCanvas() {
    const potreeRenderRef = useRef(null);
    const potreeViewRef = useRef(null);

    useEffect(() => {
        const createPotree = async () => {
            potreeViewRef.current = new PotreeView({
                ele: potreeRenderRef.current,
            });
            await potreeViewRef.current.init();
        };
        createPotree();
    }, []);

    useEffect(() => {
        if (potreeViewRef.current) {
            potreeViewRef.current.fitToScreen();
        }
    }, []);

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
                    width: '70vw',
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
                    width: '30vw',
                    height: '100vh',
                    padding: '16px',
                    backgroundColor: '#ffffff',
                    borderLeft: '2px solid #1890ff',
                    overflowY: 'auto',
                    zIndex: 10,
                }}>
                <div className="space-y-4">
                    <EPSGSelector />

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
                        <FileUploadComponent
                            potreeViewRef={potreeViewRef}
                            potreeRenderRef={potreeRenderRef}
                        />
                    </Card>
                </div>
            </div>
        </div>
    );
}
