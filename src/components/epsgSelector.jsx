import { useEffect, useState } from 'react';
import { getAllCRSByType } from '../helpers/epsgHelper';

export const EPSGSelector = ({
    sourceEPSG,
    setSourceEPSG,
    targetEPSG,
    setTargetEPSG,
}) => {
    const [horizontal, setHorizontal] = useState([]);
    const [vertical, setVertical] = useState([]);

    useEffect(() => {
        const { horizontalList, verticalList } = getAllCRSByType();
        setHorizontal(horizontalList);
        setVertical(verticalList);
    }, []);

    return (
        <div className="p-4 border rounded-md space-y-4 w-0 bg-white text-black">
            <div>
                <label className="block font-medium mb-1">Horizontal CRS</label>
                <select
                    className="border px-2 py-1 rounded w-60 bg-white text-black"
                    value={sourceEPSG}
                    onChange={(e) => setSourceEPSG(e.target.value)}>
                    <option value="">Select HCRS</option>
                    {horizontal.map((crs) => (
                        <option key={crs.code} value={crs.code}>
                            {crs.name} (EPSG:{crs.code})
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block font-medium mb-1">Vertical CRS</label>
                <select
                    className="border px-2 py-1 rounded w-60 bg-white text-black"
                    value={targetEPSG}
                    onChange={(e) => setTargetEPSG(e.target.value)}>
                    <option value="">Select VCRS</option>
                    {vertical.map((crs) => (
                        <option key={crs.code} value={crs.code}>
                            {crs.name} (EPSG:{crs.code})
                        </option>
                    ))}
                </select>
            </div>

            {sourceEPSG && targetEPSG && (
                <div className="mt-4 bg-gray-100 p-2 rounded text-sm w-fit">
                    <strong>Selected EPSG Codes:</strong>
                    <br />
                    HCRS: EPSG:{sourceEPSG}
                    <br />
                    VCRS: EPSG:{targetEPSG}
                </div>
            )}
        </div>
    );
};
