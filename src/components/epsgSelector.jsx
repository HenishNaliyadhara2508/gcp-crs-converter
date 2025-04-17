import { useEffect, useState } from 'react';
import all from 'epsg-index/all.json';

const knownCountries = [
    'India',
    'United States',
    'Germany',
    'France',
    'Australia',
    'Canada',
    'Brazil',
    'China',
    'Japan',
    'United Kingdom',
    'Netherlands',
    'Italy',
    'Spain',
    'Sweden',
    'Norway',
    'Russia',
    'South Africa',
    'New Zealand',
    'Switzerland',
    'Austria',
    'Denmark',
    'Finland',
    'Mexico',
    'Indonesia',
    'Thailand',
    'Malaysia',
    'South Korea',
    'Argentina',
    // You can extend this list as needed
];

function extractCountry(area) {
    if (!area || typeof area !== 'string') return null;
    return (
        knownCountries.find((country) =>
            area.toLowerCase().includes(country.toLowerCase()),
        ) || null
    );
}

export const EPSGSelector = () => {
    const [allEntries, setAllEntries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [horizontalCRS, setHorizontalCRS] = useState([]);
    const [verticalCRS, setVerticalCRS] = useState([]);
    const [selectedHCRS, setSelectedHCRS] = useState('');
    const [selectedVCRS, setSelectedVCRS] = useState('');

    useEffect(() => {
        const entriesArray = Object.values(all);
        setAllEntries(entriesArray);

        const detectedCountries = [];

        entriesArray.forEach((entry) => {
            const country = extractCountry(entry.area);
            if (country && !detectedCountries.includes(country)) {
                detectedCountries.push(country);
            }
        });

        setCountries(detectedCountries.sort());
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            const filtered = allEntries.filter(
                (entry) => extractCountry(entry.area) === selectedCountry,
            );

            const hcrs = filtered.filter(
                (entry) =>
                    entry.kind === 'geographic 2D' ||
                    entry.kind === 'projected',
            );

            const vcrs = filtered.filter((entry) => entry.kind === 'vertical');

            setHorizontalCRS(hcrs);
            setVerticalCRS(vcrs);
            setSelectedHCRS('');
            setSelectedVCRS('');
        }
    }, [selectedCountry, allEntries]);

    function getCRSByCountry(country) {
        return Object.values(all).filter(
            (entry) =>
                entry.area &&
                entry.area.toLowerCase().includes(country.toLowerCase()),
        );
    }

    const indiaCRS = getCRSByCountry('India');

    return (
        <div className="p-4 border rounded-md space-y-4 bg-white text-black">
            <div>
                <label className="block font-medium">Country</label>
                <select
                    className="border px-2 py-1 rounded w-full bg-white text-black"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}>
                    <option value="">Select a country</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>

            {selectedCountry && (
                <>
                    <div>
                        <label className="block font-medium">
                            Horizontal CRS
                        </label>
                        <select
                            className="border px-2 py-1 rounded w-full bg-white text-black"
                            value={selectedHCRS}
                            onChange={(e) => setSelectedHCRS(e.target.value)}>
                            <option value="">Select HCRS</option>
                            {horizontalCRS.map((crs) => (
                                <option key={crs.code} value={crs.code}>
                                    {crs.name} (EPSG:{crs.code})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block font-medium">
                            Vertical CRS
                        </label>
                        <select
                            className="border px-2 py-1 rounded w-full bg-white text-black"
                            value={selectedVCRS}
                            onChange={(e) => setSelectedVCRS(e.target.value)}>
                            <option value="">Select VCRS</option>
                            {verticalCRS.map((crs) => (
                                <option key={crs.code} value={crs.code}>
                                    {crs.name} (EPSG:{crs.code})
                                </option>
                            ))}
                        </select>
                    </div>
                </>
            )}

            {selectedHCRS && selectedVCRS && (
                <div className="mt-4 bg-gray-100 p-2 rounded text-sm">
                    <strong>Selected EPSG Codes:</strong>
                    <br />
                    HCRS: EPSG:{selectedHCRS}
                    <br />
                    VCRS: EPSG:{selectedVCRS}
                </div>
            )}
        </div>
    );
};
