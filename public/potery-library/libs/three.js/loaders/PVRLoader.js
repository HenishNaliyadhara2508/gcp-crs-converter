import {
    CompressedTextureLoader,
    RGBA_PVRTC_2BPPV1_Format,
    RGBA_PVRTC_4BPPV1_Format,
    RGB_PVRTC_2BPPV1_Format,
    RGB_PVRTC_4BPPV1_Format,
} from '../../../build/three.module.js';

/*
 *	 PVR v2 (legacy) parser
 *   TODO : Add Support for PVR v3 format
 *   TODO : implement loadMipmaps option
 */

var PVRLoader = function (manager) {
    CompressedTextureLoader.call(this, manager);
};

PVRLoader.prototype = Object.assign(
    Object.create(CompressedTextureLoader.prototype),
    {
        constructor: PVRLoader,

        parse: function (buffer, loadMipmaps) {
            var headerLengthInt = 13;
            var header = new Uint32Array(buffer, 0, headerLengthInt);

            var pvrDatas = {
                buffer: buffer,
                header: header,
                loadMipmaps: loadMipmaps,
            };

            if (header[0] === 0x03525650) {
                // PVR v3

                return PVRLoader._parseV3(pvrDatas);
            } else if (header[11] === 0x21525650) {
                // PVR v2

                return PVRLoader._parseV2(pvrDatas);
            } else {
                console.error('THREE.PVRLoader: Unknown PVR format.');
            }
        },
    },
);

PVRLoader._parseV3 = function (pvrDatas) {
    var header = pvrDatas.header;
    var bpp, format;

    var metaLen = header[12],
        pixelFormat = header[2],
        height = header[6],
        width = header[7],
        // numSurfs = header[ 9 ],
        numFaces = header[10],
        numMipmaps = header[11];

    switch (pixelFormat) {
        case 0: // PVRTC 2bpp RGB
            bpp = 2;
            format = RGB_PVRTC_2BPPV1_Format;
            break;

        case 1: // PVRTC 2bpp RGBA
            bpp = 2;
            format = RGBA_PVRTC_2BPPV1_Format;
            break;

        case 2: // PVRTC 4bpp RGB
            bpp = 4;
            format = RGB_PVRTC_4BPPV1_Format;
            break;

        case 3: // PVRTC 4bpp RGBA
            bpp = 4;
            format = RGBA_PVRTC_4BPPV1_Format;
            break;

        default:
            console.error(
                'THREE.PVRLoader: Unsupported PVR format:',
                pixelFormat,
            );
    }

    pvrDatas.dataPtr = 52 + metaLen;
    pvrDatas.bpp = bpp;
    pvrDatas.format = format;
    pvrDatas.width = width;
    pvrDatas.height = height;
    pvrDatas.numSurfaces = numFaces;
    pvrDatas.numMipmaps = numMipmaps;
    pvrDatas.isCubemap = numFaces === 6;

    return PVRLoader._extract(pvrDatas);
};

PVRLoader._parseV2 = function (pvrDatas) {
    var header = pvrDatas.header;

    var headerLength = header[0],
        height = header[1],
        width = header[2],
        numMipmaps = header[3],
        flags = header[4],
        // dataLength = header[ 5 ],
        // bpp =  header[ 6 ],
        // bitmaskRed = header[ 7 ],
        // bitmaskGreen = header[ 8 ],
        // bitmaskBlue = header[ 9 ],
        bitmaskAlpha = header[10],
        // pvrTag = header[ 11 ],
        numSurfs = header[12];

    var TYPE_MASK = 0xff;
    var PVRTC_2 = 24,
        PVRTC_4 = 25;

    var formatFlags = flags & TYPE_MASK;

    var bpp, format;
    var _hasAlpha = bitmaskAlpha > 0;

    if (formatFlags === PVRTC_4) {
        format = _hasAlpha ? RGBA_PVRTC_4BPPV1_Format : RGB_PVRTC_4BPPV1_Format;
        bpp = 4;
    } else if (formatFlags === PVRTC_2) {
        format = _hasAlpha ? RGBA_PVRTC_2BPPV1_Format : RGB_PVRTC_2BPPV1_Format;
        bpp = 2;
    } else {
        console.error('THREE.PVRLoader: Unknown PVR format:', formatFlags);
    }

    pvrDatas.dataPtr = headerLength;
    pvrDatas.bpp = bpp;
    pvrDatas.format = format;
    pvrDatas.width = width;
    pvrDatas.height = height;
    pvrDatas.numSurfaces = numSurfs;
    pvrDatas.numMipmaps = numMipmaps + 1;

    // guess cubemap type seems tricky in v2
    // it juste a pvr containing 6 surface (no explicit cubemap type)
    pvrDatas.isCubemap = numSurfs === 6;

    return PVRLoader._extract(pvrDatas);
};

PVRLoader._extract = function (pvrDatas) {
    var pvr = {
        mipmaps: [],
        width: pvrDatas.width,
        height: pvrDatas.height,
        format: pvrDatas.format,
        mipmapCount: pvrDatas.numMipmaps,
        isCubemap: pvrDatas.isCubemap,
    };

    var buffer = pvrDatas.buffer;

    var dataOffset = pvrDatas.dataPtr,
        bpp = pvrDatas.bpp,
        numSurfs = pvrDatas.numSurfaces,
        dataSize = 0,
        blockSize = 0,
        blockWidth = 0,
        blockHeight = 0,
        widthBlocks = 0,
        heightBlocks = 0;

    if (bpp === 2) {
        blockWidth = 8;
        blockHeight = 4;
    } else {
        blockWidth = 4;
        blockHeight = 4;
    }

    blockSize = (blockWidth * blockHeight * bpp) / 8;

    pvr.mipmaps.length = pvrDatas.numMipmaps * numSurfs;

    var mipLevel = 0;

    while (mipLevel < pvrDatas.numMipmaps) {
        var sWidth = pvrDatas.width >> mipLevel,
            sHeight = pvrDatas.height >> mipLevel;

        widthBlocks = sWidth / blockWidth;
        heightBlocks = sHeight / blockHeight;

        // Clamp to minimum number of blocks
        if (widthBlocks < 2) widthBlocks = 2;
        if (heightBlocks < 2) heightBlocks = 2;

        dataSize = widthBlocks * heightBlocks * blockSize;

        for (var surfIndex = 0; surfIndex < numSurfs; surfIndex++) {
            var byteArray = new Uint8Array(buffer, dataOffset, dataSize);

            var mipmap = {
                data: byteArray,
                width: sWidth,
                height: sHeight,
            };

            pvr.mipmaps[surfIndex * pvrDatas.numMipmaps + mipLevel] = mipmap;

            dataOffset += dataSize;
        }

        mipLevel++;
    }

    return pvr;
};

export { PVRLoader };
