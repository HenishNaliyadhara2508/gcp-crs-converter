// import EPSGSelector from './components/epsgSelector';
import PotreeCanvas from './components/potreeView/PotreeCanvas';

export default function App() {
    return (
        <>
            <div className="bg-white relative flex flex-col items-center justify-center h-screen">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50">
                    {/* <EPSGSelector /> */}
                </div>
                <PotreeCanvas />
            </div>
        </>
    );
}
