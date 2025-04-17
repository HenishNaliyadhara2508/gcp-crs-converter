// import { EPSGSelector } from './components/epsgSelector';
import PotreeCanvas from './components/potreeView/PotreeCanvas';

export default function App() {
    return (
        <>
            <div className="bg-white relative flex flex-col items-center justify-center h-screen">
                <PotreeCanvas />
            </div>
        </>
    );
}
