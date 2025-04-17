// PotreeCanvas.js
import { useEffect, useRef, useState } from 'react';
import { PotreeView } from './potreeView';

export default function PotreeCanvas() {
    const potreeRenderRef = useRef(null);
    const potreeViewRef = useRef(null);
    const [clickedCoordinates, setClickedCoordinates] = useState(null); // Store clicked coordinates

    useEffect(() => {
        const createPotree = async () => {
            potreeViewRef.current = new PotreeView({
                ele: potreeRenderRef.current,
            });

            await potreeViewRef.current.init();
            potreeViewRef.current.addPointCloudClickListener(
                handlePointCloudClick,
            ); // Pass the callback here
        };

        createPotree();
    }, []);

    useEffect(() => {
        if (potreeViewRef.current) {
            potreeViewRef.current.fitToScreen();
        }
    }, [potreeViewRef]);

    // Function to handle point cloud click and display coordinates
    const handlePointCloudClick = (coordinates) => {
        setClickedCoordinates(coordinates);
    };

    return (
        <div style={{ position: 'relative' }}>
            <div
                className="potree_render_area"
                style={{ width: '100vw', height: '90vh' }}
                ref={potreeRenderRef}></div>

            {clickedCoordinates && (
                <div
                    style={{
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        zIndex: 10,
                        backgroundColor: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                    }}>
                    <h4>Clicked Point Coordinates:</h4>
                    <p>
                        XYZ: ({clickedCoordinates.x.toFixed(2)},{' '}
                        {clickedCoordinates.y.toFixed(2)},{' '}
                        {clickedCoordinates.z.toFixed(2)})
                    </p>
                    <p>
                        Lat: {clickedCoordinates.latDMS}, Lon:{' '}
                        {clickedCoordinates.lonDMS}
                    </p>
                </div>
            )}
        </div>
    );
}
