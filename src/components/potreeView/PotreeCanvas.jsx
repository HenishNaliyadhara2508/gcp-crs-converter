import { useEffect, useRef } from 'react';
import { PotreeView } from './potreeView';

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
    }, [potreeViewRef]);

    return (
        <>
            <div style={{ position: 'relative' }}>
                <div
                    className="potree_render_area"
                    style={{ width: '100vw', height: '99vh' }}
                    ref={potreeRenderRef}></div>

                <div
                    style={{
                        position: 'absolute',
                        top: '10px',
                        textAlign: 'center',
                        gap: '10px',
                    }}>
                    <button
                        onClick={() =>
                            potreeViewRef.current?.startMeasurement('point')
                        }>
                        Measure Point
                    </button>
                    <button
                        onClick={() =>
                            potreeViewRef.current?.startMeasurement('distance')
                        }>
                        Measure Distance
                    </button>
                    <button
                        onClick={() =>
                            potreeViewRef.current?.startMeasurement('area')
                        }>
                        Measure Area
                    </button>
                    <button
                        onClick={() =>
                            potreeViewRef.current?.startMeasurement('height')
                        }>
                        Measure Height
                    </button>
                    <button
                        onClick={() =>
                            potreeViewRef.current?.startMeasurement('volume')
                        }>
                        Volume
                    </button>
                    <button
                        onClick={() =>
                            potreeViewRef.current?.startMeasurement(
                                'height-Profile',
                            )
                        }>
                        Height Profile
                    </button>
                    <button
                        onClick={() =>
                            potreeViewRef.current?.clearMeasurements()
                        }>
                        Clear Measurements
                    </button>
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '40px',
                        textAlign: 'center',
                        gap: '10px',
                    }}>
                    <button onClick={() => potreeViewRef.current?.setTopView()}>
                        Top View
                    </button>
                    <button
                        onClick={() => potreeViewRef.current?.setBottomView()}>
                        Bottom View
                    </button>
                    <button
                        onClick={() => potreeViewRef.current?.setLeftView()}>
                        Left View
                    </button>
                    <button
                        onClick={() => potreeViewRef.current?.setRightView()}>
                        Right View
                    </button>
                    <button
                        onClick={() => potreeViewRef.current?.setFrontView()}>
                        Front View
                    </button>
                    <button
                        onClick={() => potreeViewRef.current?.setBackView()}>
                        Rear View
                    </button>
                </div>
            </div>
        </>
    );
}
