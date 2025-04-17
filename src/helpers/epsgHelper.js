// src/helpers/epsgHelpers.js

import all from 'epsg-index/all.json';

const HORIZONTAL_KINDS = ['CRS-PROJCRS', 'CRS-GEOGCRS'];
const VERTICAL_KINDS = ['CRS-VERTCRS'];
const COMPOUND_KINDS = ['CRS-COMPOUNDCRS', 'CRS-GCENCRS', 'CRS-GEOG3DCRS'];

export function getAllCRSByType() {
    const entries = Object.values(all);

    const horizontalList = [];
    const verticalList = [];
    const compound = [];

    for (const entry of entries) {
        if (HORIZONTAL_KINDS.includes(entry.kind)) {
            horizontalList.push(entry);
        } else if (VERTICAL_KINDS.includes(entry.kind)) {
            verticalList.push(entry);
        } else if (COMPOUND_KINDS.includes(entry.kind)) {
            // Compound entries go into both horizontal and compound
            horizontalList.push(entry);
            compound.push(entry);
        }
    }

    return {
        horizontalList,
        verticalList,
    };
}
