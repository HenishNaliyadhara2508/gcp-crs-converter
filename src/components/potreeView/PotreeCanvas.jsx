import { useEffect, useRef } from 'react';
import { PotreeView } from './potreeView';

export default function PotreeCanvas() {
    const potreeRenderRef = useRef(null);
    useEffect(() => {
        const createPotree = async () => {
            const potreeView = new PotreeView({
                ele: potreeRenderRef.current,
            });
            await potreeView.init();
        };

        createPotree();
    }, []);
    return (
        <>
            <div
                className="potree_render_area"
                style={{ width: '500px', height: '500px' }}
                ref={potreeRenderRef}></div>
        </>
    );
}