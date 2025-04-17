// scripts/generateCountryEPSGMap.js
import fetch from 'node-fetch';
import bboxPolygon from '@turf/bbox-polygon';
import booleanIntersects from '@turf/boolean-intersects';
import fs from 'fs';
import path from 'path';

const epsgIndex = JSON.parse(
    fs.readFileSync(path.resolve('node_modules/epsg-index/all.json'), 'utf8'),
);

const COUNTRY_GEOJSON_URL =
    'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson';
const OUTPUT_PATH = path.resolve('public/country_epsg_map.json');

async function loadCountryGeoJSON() {
    const response = await fetch(COUNTRY_GEOJSON_URL);
    if (!response.ok) {
        throw new Error(
            `Failed to load country GeoJSON: ${response.statusText}`,
        );
    }
    return await response.json();
}

async function getCountryWiseEPSGMap() {
    const geojson = await loadCountryGeoJSON();
    const crsCountryMap = {};

    for (const [code, data] of Object.entries(epsgIndex)) {
        const bbox = data.bbox;
        if (!bbox || bbox.length !== 4) continue;

        const crsPoly = bboxPolygon(bbox);

        for (const feature of geojson.features) {
            const countryName =
                feature.properties.ADMIN ||
                feature.properties.NAME ||
                'Unknown';
            if (booleanIntersects(crsPoly, feature)) {
                if (!crsCountryMap[countryName])
                    crsCountryMap[countryName] = [];
                crsCountryMap[countryName].push({
                    code: `EPSG:${code}`,
                    name: data.name,
                    kind: data.kind,
                });
            }
        }
    }

    for (const country in crsCountryMap) {
        crsCountryMap[country].sort(
            (a, b) =>
                parseInt(a.code.split(':')[1]) - parseInt(b.code.split(':')[1]),
        );
    }

    return crsCountryMap;
}

async function saveEPSGDataToFile() {
    try {
        const data = await getCountryWiseEPSGMap();
        fs.writeFileSync(OUTPUT_PATH, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error('❌ Failed to generate EPSG data:', err.message);
    }
}

saveEPSGDataToFile();
