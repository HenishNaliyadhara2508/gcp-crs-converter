/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
/**
 * @licence
 *
 * crunch/crnlib v1.04 - Advanced DXTn texture compression library
 * Copyright (C) 2010-2016 Richard Geldreich, Jr. and Binomial LLC http://binomial.info
 */

/**
 * @license
 *
 * crunch_lib.cpp
 *
 * Copyright (c) 2013, Evan Parker, Brandon Jones. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *   * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *   * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @license
 *
 * Copyright (c) 2014, Brandon Jones. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation
 *  and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

!(function () {
    define('Core/defined', [], function () {
        'use strict';
        function e(e) {
            return void 0 !== e && null !== e;
        }
        return e;
    }),
        define('Core/defineProperties', ['./defined'], function (e) {
            'use strict';
            var r = (function () {
                    try {
                        return 'x' in Object.defineProperty({}, 'x', {});
                    } catch (e) {
                        return !1;
                    }
                })(),
                i = Object.defineProperties;
            return (
                (r && e(i)) ||
                    (i = function (e) {
                        return e;
                    }),
                i
            );
        }),
        define(
            'Core/CompressedTextureBuffer',
            ['./defined', './defineProperties'],
            function (e, r) {
                'use strict';
                function i(e, r, i, n) {
                    (this._format = e),
                        (this._width = r),
                        (this._height = i),
                        (this._buffer = n);
                }
                return (
                    r(i.prototype, {
                        internalFormat: {
                            get: function () {
                                return this._format;
                            },
                        },
                        width: {
                            get: function () {
                                return this._width;
                            },
                        },
                        height: {
                            get: function () {
                                return this._height;
                            },
                        },
                        bufferView: {
                            get: function () {
                                return this._buffer;
                            },
                        },
                    }),
                    (i.clone = function (r) {
                        if (e(r))
                            return new i(
                                r._format,
                                r._width,
                                r._height,
                                r._buffer,
                            );
                    }),
                    (i.prototype.clone = function () {
                        return i.clone(this);
                    }),
                    i
                );
            },
        ),
        define('Core/freezeObject', ['./defined'], function (e) {
            'use strict';
            var r = Object.freeze;
            return (
                e(r) ||
                    (r = function (e) {
                        return e;
                    }),
                r
            );
        }),
        define('Core/WebGLConstants', ['./freezeObject'], function (e) {
            'use strict';
            return e({
                DEPTH_BUFFER_BIT: 256,
                STENCIL_BUFFER_BIT: 1024,
                COLOR_BUFFER_BIT: 16384,
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6,
                ZERO: 0,
                ONE: 1,
                SRC_COLOR: 768,
                ONE_MINUS_SRC_COLOR: 769,
                SRC_ALPHA: 770,
                ONE_MINUS_SRC_ALPHA: 771,
                DST_ALPHA: 772,
                ONE_MINUS_DST_ALPHA: 773,
                DST_COLOR: 774,
                ONE_MINUS_DST_COLOR: 775,
                SRC_ALPHA_SATURATE: 776,
                FUNC_ADD: 32774,
                BLEND_EQUATION: 32777,
                BLEND_EQUATION_RGB: 32777,
                BLEND_EQUATION_ALPHA: 34877,
                FUNC_SUBTRACT: 32778,
                FUNC_REVERSE_SUBTRACT: 32779,
                BLEND_DST_RGB: 32968,
                BLEND_SRC_RGB: 32969,
                BLEND_DST_ALPHA: 32970,
                BLEND_SRC_ALPHA: 32971,
                CONSTANT_COLOR: 32769,
                ONE_MINUS_CONSTANT_COLOR: 32770,
                CONSTANT_ALPHA: 32771,
                ONE_MINUS_CONSTANT_ALPHA: 32772,
                BLEND_COLOR: 32773,
                ARRAY_BUFFER: 34962,
                ELEMENT_ARRAY_BUFFER: 34963,
                ARRAY_BUFFER_BINDING: 34964,
                ELEMENT_ARRAY_BUFFER_BINDING: 34965,
                STREAM_DRAW: 35040,
                STATIC_DRAW: 35044,
                DYNAMIC_DRAW: 35048,
                BUFFER_SIZE: 34660,
                BUFFER_USAGE: 34661,
                CURRENT_VERTEX_ATTRIB: 34342,
                FRONT: 1028,
                BACK: 1029,
                FRONT_AND_BACK: 1032,
                CULL_FACE: 2884,
                BLEND: 3042,
                DITHER: 3024,
                STENCIL_TEST: 2960,
                DEPTH_TEST: 2929,
                SCISSOR_TEST: 3089,
                POLYGON_OFFSET_FILL: 32823,
                SAMPLE_ALPHA_TO_COVERAGE: 32926,
                SAMPLE_COVERAGE: 32928,
                NO_ERROR: 0,
                INVALID_ENUM: 1280,
                INVALID_VALUE: 1281,
                INVALID_OPERATION: 1282,
                OUT_OF_MEMORY: 1285,
                CW: 2304,
                CCW: 2305,
                LINE_WIDTH: 2849,
                ALIASED_POINT_SIZE_RANGE: 33901,
                ALIASED_LINE_WIDTH_RANGE: 33902,
                CULL_FACE_MODE: 2885,
                FRONT_FACE: 2886,
                DEPTH_RANGE: 2928,
                DEPTH_WRITEMASK: 2930,
                DEPTH_CLEAR_VALUE: 2931,
                DEPTH_FUNC: 2932,
                STENCIL_CLEAR_VALUE: 2961,
                STENCIL_FUNC: 2962,
                STENCIL_FAIL: 2964,
                STENCIL_PASS_DEPTH_FAIL: 2965,
                STENCIL_PASS_DEPTH_PASS: 2966,
                STENCIL_REF: 2967,
                STENCIL_VALUE_MASK: 2963,
                STENCIL_WRITEMASK: 2968,
                STENCIL_BACK_FUNC: 34816,
                STENCIL_BACK_FAIL: 34817,
                STENCIL_BACK_PASS_DEPTH_FAIL: 34818,
                STENCIL_BACK_PASS_DEPTH_PASS: 34819,
                STENCIL_BACK_REF: 36003,
                STENCIL_BACK_VALUE_MASK: 36004,
                STENCIL_BACK_WRITEMASK: 36005,
                VIEWPORT: 2978,
                SCISSOR_BOX: 3088,
                COLOR_CLEAR_VALUE: 3106,
                COLOR_WRITEMASK: 3107,
                UNPACK_ALIGNMENT: 3317,
                PACK_ALIGNMENT: 3333,
                MAX_TEXTURE_SIZE: 3379,
                MAX_VIEWPORT_DIMS: 3386,
                SUBPIXEL_BITS: 3408,
                RED_BITS: 3410,
                GREEN_BITS: 3411,
                BLUE_BITS: 3412,
                ALPHA_BITS: 3413,
                DEPTH_BITS: 3414,
                STENCIL_BITS: 3415,
                POLYGON_OFFSET_UNITS: 10752,
                POLYGON_OFFSET_FACTOR: 32824,
                TEXTURE_BINDING_2D: 32873,
                SAMPLE_BUFFERS: 32936,
                SAMPLES: 32937,
                SAMPLE_COVERAGE_VALUE: 32938,
                SAMPLE_COVERAGE_INVERT: 32939,
                COMPRESSED_TEXTURE_FORMATS: 34467,
                DONT_CARE: 4352,
                FASTEST: 4353,
                NICEST: 4354,
                GENERATE_MIPMAP_HINT: 33170,
                BYTE: 5120,
                UNSIGNED_BYTE: 5121,
                SHORT: 5122,
                UNSIGNED_SHORT: 5123,
                INT: 5124,
                UNSIGNED_INT: 5125,
                FLOAT: 5126,
                DEPTH_COMPONENT: 6402,
                ALPHA: 6406,
                RGB: 6407,
                RGBA: 6408,
                LUMINANCE: 6409,
                LUMINANCE_ALPHA: 6410,
                UNSIGNED_SHORT_4_4_4_4: 32819,
                UNSIGNED_SHORT_5_5_5_1: 32820,
                UNSIGNED_SHORT_5_6_5: 33635,
                FRAGMENT_SHADER: 35632,
                VERTEX_SHADER: 35633,
                MAX_VERTEX_ATTRIBS: 34921,
                MAX_VERTEX_UNIFORM_VECTORS: 36347,
                MAX_VARYING_VECTORS: 36348,
                MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
                MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
                MAX_TEXTURE_IMAGE_UNITS: 34930,
                MAX_FRAGMENT_UNIFORM_VECTORS: 36349,
                SHADER_TYPE: 35663,
                DELETE_STATUS: 35712,
                LINK_STATUS: 35714,
                VALIDATE_STATUS: 35715,
                ATTACHED_SHADERS: 35717,
                ACTIVE_UNIFORMS: 35718,
                ACTIVE_ATTRIBUTES: 35721,
                SHADING_LANGUAGE_VERSION: 35724,
                CURRENT_PROGRAM: 35725,
                NEVER: 512,
                LESS: 513,
                EQUAL: 514,
                LEQUAL: 515,
                GREATER: 516,
                NOTEQUAL: 517,
                GEQUAL: 518,
                ALWAYS: 519,
                KEEP: 7680,
                REPLACE: 7681,
                INCR: 7682,
                DECR: 7683,
                INVERT: 5386,
                INCR_WRAP: 34055,
                DECR_WRAP: 34056,
                VENDOR: 7936,
                RENDERER: 7937,
                VERSION: 7938,
                NEAREST: 9728,
                LINEAR: 9729,
                NEAREST_MIPMAP_NEAREST: 9984,
                LINEAR_MIPMAP_NEAREST: 9985,
                NEAREST_MIPMAP_LINEAR: 9986,
                LINEAR_MIPMAP_LINEAR: 9987,
                TEXTURE_MAG_FILTER: 10240,
                TEXTURE_MIN_FILTER: 10241,
                TEXTURE_WRAP_S: 10242,
                TEXTURE_WRAP_T: 10243,
                TEXTURE_2D: 3553,
                TEXTURE: 5890,
                TEXTURE_CUBE_MAP: 34067,
                TEXTURE_BINDING_CUBE_MAP: 34068,
                TEXTURE_CUBE_MAP_POSITIVE_X: 34069,
                TEXTURE_CUBE_MAP_NEGATIVE_X: 34070,
                TEXTURE_CUBE_MAP_POSITIVE_Y: 34071,
                TEXTURE_CUBE_MAP_NEGATIVE_Y: 34072,
                TEXTURE_CUBE_MAP_POSITIVE_Z: 34073,
                TEXTURE_CUBE_MAP_NEGATIVE_Z: 34074,
                MAX_CUBE_MAP_TEXTURE_SIZE: 34076,
                TEXTURE0: 33984,
                TEXTURE1: 33985,
                TEXTURE2: 33986,
                TEXTURE3: 33987,
                TEXTURE4: 33988,
                TEXTURE5: 33989,
                TEXTURE6: 33990,
                TEXTURE7: 33991,
                TEXTURE8: 33992,
                TEXTURE9: 33993,
                TEXTURE10: 33994,
                TEXTURE11: 33995,
                TEXTURE12: 33996,
                TEXTURE13: 33997,
                TEXTURE14: 33998,
                TEXTURE15: 33999,
                TEXTURE16: 34e3,
                TEXTURE17: 34001,
                TEXTURE18: 34002,
                TEXTURE19: 34003,
                TEXTURE20: 34004,
                TEXTURE21: 34005,
                TEXTURE22: 34006,
                TEXTURE23: 34007,
                TEXTURE24: 34008,
                TEXTURE25: 34009,
                TEXTURE26: 34010,
                TEXTURE27: 34011,
                TEXTURE28: 34012,
                TEXTURE29: 34013,
                TEXTURE30: 34014,
                TEXTURE31: 34015,
                ACTIVE_TEXTURE: 34016,
                REPEAT: 10497,
                CLAMP_TO_EDGE: 33071,
                MIRRORED_REPEAT: 33648,
                FLOAT_VEC2: 35664,
                FLOAT_VEC3: 35665,
                FLOAT_VEC4: 35666,
                INT_VEC2: 35667,
                INT_VEC3: 35668,
                INT_VEC4: 35669,
                BOOL: 35670,
                BOOL_VEC2: 35671,
                BOOL_VEC3: 35672,
                BOOL_VEC4: 35673,
                FLOAT_MAT2: 35674,
                FLOAT_MAT3: 35675,
                FLOAT_MAT4: 35676,
                SAMPLER_2D: 35678,
                SAMPLER_CUBE: 35680,
                VERTEX_ATTRIB_ARRAY_ENABLED: 34338,
                VERTEX_ATTRIB_ARRAY_SIZE: 34339,
                VERTEX_ATTRIB_ARRAY_STRIDE: 34340,
                VERTEX_ATTRIB_ARRAY_TYPE: 34341,
                VERTEX_ATTRIB_ARRAY_NORMALIZED: 34922,
                VERTEX_ATTRIB_ARRAY_POINTER: 34373,
                VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 34975,
                IMPLEMENTATION_COLOR_READ_TYPE: 35738,
                IMPLEMENTATION_COLOR_READ_FORMAT: 35739,
                COMPILE_STATUS: 35713,
                LOW_FLOAT: 36336,
                MEDIUM_FLOAT: 36337,
                HIGH_FLOAT: 36338,
                LOW_INT: 36339,
                MEDIUM_INT: 36340,
                HIGH_INT: 36341,
                FRAMEBUFFER: 36160,
                RENDERBUFFER: 36161,
                RGBA4: 32854,
                RGB5_A1: 32855,
                RGB565: 36194,
                DEPTH_COMPONENT16: 33189,
                STENCIL_INDEX: 6401,
                STENCIL_INDEX8: 36168,
                DEPTH_STENCIL: 34041,
                RENDERBUFFER_WIDTH: 36162,
                RENDERBUFFER_HEIGHT: 36163,
                RENDERBUFFER_INTERNAL_FORMAT: 36164,
                RENDERBUFFER_RED_SIZE: 36176,
                RENDERBUFFER_GREEN_SIZE: 36177,
                RENDERBUFFER_BLUE_SIZE: 36178,
                RENDERBUFFER_ALPHA_SIZE: 36179,
                RENDERBUFFER_DEPTH_SIZE: 36180,
                RENDERBUFFER_STENCIL_SIZE: 36181,
                FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 36048,
                FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 36049,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 36050,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 36051,
                COLOR_ATTACHMENT0: 36064,
                DEPTH_ATTACHMENT: 36096,
                STENCIL_ATTACHMENT: 36128,
                DEPTH_STENCIL_ATTACHMENT: 33306,
                NONE: 0,
                FRAMEBUFFER_COMPLETE: 36053,
                FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 36054,
                FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 36055,
                FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 36057,
                FRAMEBUFFER_UNSUPPORTED: 36061,
                FRAMEBUFFER_BINDING: 36006,
                RENDERBUFFER_BINDING: 36007,
                MAX_RENDERBUFFER_SIZE: 34024,
                INVALID_FRAMEBUFFER_OPERATION: 1286,
                UNPACK_FLIP_Y_WEBGL: 37440,
                UNPACK_PREMULTIPLY_ALPHA_WEBGL: 37441,
                CONTEXT_LOST_WEBGL: 37442,
                UNPACK_COLORSPACE_CONVERSION_WEBGL: 37443,
                BROWSER_DEFAULT_WEBGL: 37444,
                COMPRESSED_RGB_S3TC_DXT1_EXT: 33776,
                COMPRESSED_RGBA_S3TC_DXT1_EXT: 33777,
                COMPRESSED_RGBA_S3TC_DXT3_EXT: 33778,
                COMPRESSED_RGBA_S3TC_DXT5_EXT: 33779,
                COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 35840,
                COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 35841,
                COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 35842,
                COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 35843,
                COMPRESSED_RGB_ETC1_WEBGL: 36196,
                DOUBLE: 5130,
                READ_BUFFER: 3074,
                UNPACK_ROW_LENGTH: 3314,
                UNPACK_SKIP_ROWS: 3315,
                UNPACK_SKIP_PIXELS: 3316,
                PACK_ROW_LENGTH: 3330,
                PACK_SKIP_ROWS: 3331,
                PACK_SKIP_PIXELS: 3332,
                COLOR: 6144,
                DEPTH: 6145,
                STENCIL: 6146,
                RED: 6403,
                RGB8: 32849,
                RGBA8: 32856,
                RGB10_A2: 32857,
                TEXTURE_BINDING_3D: 32874,
                UNPACK_SKIP_IMAGES: 32877,
                UNPACK_IMAGE_HEIGHT: 32878,
                TEXTURE_3D: 32879,
                TEXTURE_WRAP_R: 32882,
                MAX_3D_TEXTURE_SIZE: 32883,
                UNSIGNED_INT_2_10_10_10_REV: 33640,
                MAX_ELEMENTS_VERTICES: 33e3,
                MAX_ELEMENTS_INDICES: 33001,
                TEXTURE_MIN_LOD: 33082,
                TEXTURE_MAX_LOD: 33083,
                TEXTURE_BASE_LEVEL: 33084,
                TEXTURE_MAX_LEVEL: 33085,
                MIN: 32775,
                MAX: 32776,
                DEPTH_COMPONENT24: 33190,
                MAX_TEXTURE_LOD_BIAS: 34045,
                TEXTURE_COMPARE_MODE: 34892,
                TEXTURE_COMPARE_FUNC: 34893,
                CURRENT_QUERY: 34917,
                QUERY_RESULT: 34918,
                QUERY_RESULT_AVAILABLE: 34919,
                STREAM_READ: 35041,
                STREAM_COPY: 35042,
                STATIC_READ: 35045,
                STATIC_COPY: 35046,
                DYNAMIC_READ: 35049,
                DYNAMIC_COPY: 35050,
                MAX_DRAW_BUFFERS: 34852,
                DRAW_BUFFER0: 34853,
                DRAW_BUFFER1: 34854,
                DRAW_BUFFER2: 34855,
                DRAW_BUFFER3: 34856,
                DRAW_BUFFER4: 34857,
                DRAW_BUFFER5: 34858,
                DRAW_BUFFER6: 34859,
                DRAW_BUFFER7: 34860,
                DRAW_BUFFER8: 34861,
                DRAW_BUFFER9: 34862,
                DRAW_BUFFER10: 34863,
                DRAW_BUFFER11: 34864,
                DRAW_BUFFER12: 34865,
                DRAW_BUFFER13: 34866,
                DRAW_BUFFER14: 34867,
                DRAW_BUFFER15: 34868,
                MAX_FRAGMENT_UNIFORM_COMPONENTS: 35657,
                MAX_VERTEX_UNIFORM_COMPONENTS: 35658,
                SAMPLER_3D: 35679,
                SAMPLER_2D_SHADOW: 35682,
                FRAGMENT_SHADER_DERIVATIVE_HINT: 35723,
                PIXEL_PACK_BUFFER: 35051,
                PIXEL_UNPACK_BUFFER: 35052,
                PIXEL_PACK_BUFFER_BINDING: 35053,
                PIXEL_UNPACK_BUFFER_BINDING: 35055,
                FLOAT_MAT2x3: 35685,
                FLOAT_MAT2x4: 35686,
                FLOAT_MAT3x2: 35687,
                FLOAT_MAT3x4: 35688,
                FLOAT_MAT4x2: 35689,
                FLOAT_MAT4x3: 35690,
                SRGB: 35904,
                SRGB8: 35905,
                SRGB8_ALPHA8: 35907,
                COMPARE_REF_TO_TEXTURE: 34894,
                RGBA32F: 34836,
                RGB32F: 34837,
                RGBA16F: 34842,
                RGB16F: 34843,
                VERTEX_ATTRIB_ARRAY_INTEGER: 35069,
                MAX_ARRAY_TEXTURE_LAYERS: 35071,
                MIN_PROGRAM_TEXEL_OFFSET: 35076,
                MAX_PROGRAM_TEXEL_OFFSET: 35077,
                MAX_VARYING_COMPONENTS: 35659,
                TEXTURE_2D_ARRAY: 35866,
                TEXTURE_BINDING_2D_ARRAY: 35869,
                R11F_G11F_B10F: 35898,
                UNSIGNED_INT_10F_11F_11F_REV: 35899,
                RGB9_E5: 35901,
                UNSIGNED_INT_5_9_9_9_REV: 35902,
                TRANSFORM_FEEDBACK_BUFFER_MODE: 35967,
                MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 35968,
                TRANSFORM_FEEDBACK_VARYINGS: 35971,
                TRANSFORM_FEEDBACK_BUFFER_START: 35972,
                TRANSFORM_FEEDBACK_BUFFER_SIZE: 35973,
                TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 35976,
                RASTERIZER_DISCARD: 35977,
                MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 35978,
                MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 35979,
                INTERLEAVED_ATTRIBS: 35980,
                SEPARATE_ATTRIBS: 35981,
                TRANSFORM_FEEDBACK_BUFFER: 35982,
                TRANSFORM_FEEDBACK_BUFFER_BINDING: 35983,
                RGBA32UI: 36208,
                RGB32UI: 36209,
                RGBA16UI: 36214,
                RGB16UI: 36215,
                RGBA8UI: 36220,
                RGB8UI: 36221,
                RGBA32I: 36226,
                RGB32I: 36227,
                RGBA16I: 36232,
                RGB16I: 36233,
                RGBA8I: 36238,
                RGB8I: 36239,
                RED_INTEGER: 36244,
                RGB_INTEGER: 36248,
                RGBA_INTEGER: 36249,
                SAMPLER_2D_ARRAY: 36289,
                SAMPLER_2D_ARRAY_SHADOW: 36292,
                SAMPLER_CUBE_SHADOW: 36293,
                UNSIGNED_INT_VEC2: 36294,
                UNSIGNED_INT_VEC3: 36295,
                UNSIGNED_INT_VEC4: 36296,
                INT_SAMPLER_2D: 36298,
                INT_SAMPLER_3D: 36299,
                INT_SAMPLER_CUBE: 36300,
                INT_SAMPLER_2D_ARRAY: 36303,
                UNSIGNED_INT_SAMPLER_2D: 36306,
                UNSIGNED_INT_SAMPLER_3D: 36307,
                UNSIGNED_INT_SAMPLER_CUBE: 36308,
                UNSIGNED_INT_SAMPLER_2D_ARRAY: 36311,
                DEPTH_COMPONENT32F: 36012,
                DEPTH32F_STENCIL8: 36013,
                FLOAT_32_UNSIGNED_INT_24_8_REV: 36269,
                FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 33296,
                FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 33297,
                FRAMEBUFFER_ATTACHMENT_RED_SIZE: 33298,
                FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 33299,
                FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 33300,
                FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 33301,
                FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 33302,
                FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 33303,
                FRAMEBUFFER_DEFAULT: 33304,
                UNSIGNED_INT_24_8: 34042,
                DEPTH24_STENCIL8: 35056,
                UNSIGNED_NORMALIZED: 35863,
                DRAW_FRAMEBUFFER_BINDING: 36006,
                READ_FRAMEBUFFER: 36008,
                DRAW_FRAMEBUFFER: 36009,
                READ_FRAMEBUFFER_BINDING: 36010,
                RENDERBUFFER_SAMPLES: 36011,
                FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 36052,
                MAX_COLOR_ATTACHMENTS: 36063,
                COLOR_ATTACHMENT1: 36065,
                COLOR_ATTACHMENT2: 36066,
                COLOR_ATTACHMENT3: 36067,
                COLOR_ATTACHMENT4: 36068,
                COLOR_ATTACHMENT5: 36069,
                COLOR_ATTACHMENT6: 36070,
                COLOR_ATTACHMENT7: 36071,
                COLOR_ATTACHMENT8: 36072,
                COLOR_ATTACHMENT9: 36073,
                COLOR_ATTACHMENT10: 36074,
                COLOR_ATTACHMENT11: 36075,
                COLOR_ATTACHMENT12: 36076,
                COLOR_ATTACHMENT13: 36077,
                COLOR_ATTACHMENT14: 36078,
                COLOR_ATTACHMENT15: 36079,
                FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 36182,
                MAX_SAMPLES: 36183,
                HALF_FLOAT: 5131,
                RG: 33319,
                RG_INTEGER: 33320,
                R8: 33321,
                RG8: 33323,
                R16F: 33325,
                R32F: 33326,
                RG16F: 33327,
                RG32F: 33328,
                R8I: 33329,
                R8UI: 33330,
                R16I: 33331,
                R16UI: 33332,
                R32I: 33333,
                R32UI: 33334,
                RG8I: 33335,
                RG8UI: 33336,
                RG16I: 33337,
                RG16UI: 33338,
                RG32I: 33339,
                RG32UI: 33340,
                VERTEX_ARRAY_BINDING: 34229,
                R8_SNORM: 36756,
                RG8_SNORM: 36757,
                RGB8_SNORM: 36758,
                RGBA8_SNORM: 36759,
                SIGNED_NORMALIZED: 36764,
                COPY_READ_BUFFER: 36662,
                COPY_WRITE_BUFFER: 36663,
                COPY_READ_BUFFER_BINDING: 36662,
                COPY_WRITE_BUFFER_BINDING: 36663,
                UNIFORM_BUFFER: 35345,
                UNIFORM_BUFFER_BINDING: 35368,
                UNIFORM_BUFFER_START: 35369,
                UNIFORM_BUFFER_SIZE: 35370,
                MAX_VERTEX_UNIFORM_BLOCKS: 35371,
                MAX_FRAGMENT_UNIFORM_BLOCKS: 35373,
                MAX_COMBINED_UNIFORM_BLOCKS: 35374,
                MAX_UNIFORM_BUFFER_BINDINGS: 35375,
                MAX_UNIFORM_BLOCK_SIZE: 35376,
                MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 35377,
                MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 35379,
                UNIFORM_BUFFER_OFFSET_ALIGNMENT: 35380,
                ACTIVE_UNIFORM_BLOCKS: 35382,
                UNIFORM_TYPE: 35383,
                UNIFORM_SIZE: 35384,
                UNIFORM_BLOCK_INDEX: 35386,
                UNIFORM_OFFSET: 35387,
                UNIFORM_ARRAY_STRIDE: 35388,
                UNIFORM_MATRIX_STRIDE: 35389,
                UNIFORM_IS_ROW_MAJOR: 35390,
                UNIFORM_BLOCK_BINDING: 35391,
                UNIFORM_BLOCK_DATA_SIZE: 35392,
                UNIFORM_BLOCK_ACTIVE_UNIFORMS: 35394,
                UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 35395,
                UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 35396,
                UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 35398,
                INVALID_INDEX: 4294967295,
                MAX_VERTEX_OUTPUT_COMPONENTS: 37154,
                MAX_FRAGMENT_INPUT_COMPONENTS: 37157,
                MAX_SERVER_WAIT_TIMEOUT: 37137,
                OBJECT_TYPE: 37138,
                SYNC_CONDITION: 37139,
                SYNC_STATUS: 37140,
                SYNC_FLAGS: 37141,
                SYNC_FENCE: 37142,
                SYNC_GPU_COMMANDS_COMPLETE: 37143,
                UNSIGNALED: 37144,
                SIGNALED: 37145,
                ALREADY_SIGNALED: 37146,
                TIMEOUT_EXPIRED: 37147,
                CONDITION_SATISFIED: 37148,
                WAIT_FAILED: 37149,
                SYNC_FLUSH_COMMANDS_BIT: 1,
                VERTEX_ATTRIB_ARRAY_DIVISOR: 35070,
                ANY_SAMPLES_PASSED: 35887,
                ANY_SAMPLES_PASSED_CONSERVATIVE: 36202,
                SAMPLER_BINDING: 35097,
                RGB10_A2UI: 36975,
                INT_2_10_10_10_REV: 36255,
                TRANSFORM_FEEDBACK: 36386,
                TRANSFORM_FEEDBACK_PAUSED: 36387,
                TRANSFORM_FEEDBACK_ACTIVE: 36388,
                TRANSFORM_FEEDBACK_BINDING: 36389,
                COMPRESSED_R11_EAC: 37488,
                COMPRESSED_SIGNED_R11_EAC: 37489,
                COMPRESSED_RG11_EAC: 37490,
                COMPRESSED_SIGNED_RG11_EAC: 37491,
                COMPRESSED_RGB8_ETC2: 37492,
                COMPRESSED_SRGB8_ETC2: 37493,
                COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37494,
                COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 37495,
                COMPRESSED_RGBA8_ETC2_EAC: 37496,
                COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 37497,
                TEXTURE_IMMUTABLE_FORMAT: 37167,
                MAX_ELEMENT_INDEX: 36203,
                TEXTURE_IMMUTABLE_LEVELS: 33503,
                MAX_TEXTURE_MAX_ANISOTROPY_EXT: 34047,
            });
        }),
        define(
            'Renderer/PixelDatatype',
            ['../Core/freezeObject', '../Core/WebGLConstants'],
            function (e, r) {
                'use strict';
                var i = {
                    UNSIGNED_BYTE: r.UNSIGNED_BYTE,
                    UNSIGNED_SHORT: r.UNSIGNED_SHORT,
                    UNSIGNED_INT: r.UNSIGNED_INT,
                    FLOAT: r.FLOAT,
                    UNSIGNED_INT_24_8: r.UNSIGNED_INT_24_8,
                    UNSIGNED_SHORT_4_4_4_4: r.UNSIGNED_SHORT_4_4_4_4,
                    UNSIGNED_SHORT_5_5_5_1: r.UNSIGNED_SHORT_5_5_5_1,
                    UNSIGNED_SHORT_5_6_5: r.UNSIGNED_SHORT_5_6_5,
                    isPacked: function (e) {
                        return (
                            e === i.UNSIGNED_INT_24_8 ||
                            e === i.UNSIGNED_SHORT_4_4_4_4 ||
                            e === i.UNSIGNED_SHORT_5_5_5_1 ||
                            e === i.UNSIGNED_SHORT_5_6_5
                        );
                    },
                    sizeInBytes: function (e) {
                        switch (e) {
                            case i.UNSIGNED_BYTE:
                                return 1;
                            case i.UNSIGNED_SHORT:
                            case i.UNSIGNED_SHORT_4_4_4_4:
                            case i.UNSIGNED_SHORT_5_5_5_1:
                            case i.UNSIGNED_SHORT_5_6_5:
                                return 2;
                            case i.UNSIGNED_INT:
                            case i.FLOAT:
                            case i.UNSIGNED_INT_24_8:
                                return 4;
                        }
                    },
                    validate: function (e) {
                        return (
                            e === i.UNSIGNED_BYTE ||
                            e === i.UNSIGNED_SHORT ||
                            e === i.UNSIGNED_INT ||
                            e === i.FLOAT ||
                            e === i.UNSIGNED_INT_24_8 ||
                            e === i.UNSIGNED_SHORT_4_4_4_4 ||
                            e === i.UNSIGNED_SHORT_5_5_5_1 ||
                            e === i.UNSIGNED_SHORT_5_6_5
                        );
                    },
                };
                return e(i);
            },
        ),
        define(
            'Core/PixelFormat',
            ['../Renderer/PixelDatatype', './freezeObject', './WebGLConstants'],
            function (e, r, i) {
                'use strict';
                var n = {
                    DEPTH_COMPONENT: i.DEPTH_COMPONENT,
                    DEPTH_STENCIL: i.DEPTH_STENCIL,
                    ALPHA: i.ALPHA,
                    RGB: i.RGB,
                    RGBA: i.RGBA,
                    LUMINANCE: i.LUMINANCE,
                    LUMINANCE_ALPHA: i.LUMINANCE_ALPHA,
                    RGB_DXT1: i.COMPRESSED_RGB_S3TC_DXT1_EXT,
                    RGBA_DXT1: i.COMPRESSED_RGBA_S3TC_DXT1_EXT,
                    RGBA_DXT3: i.COMPRESSED_RGBA_S3TC_DXT3_EXT,
                    RGBA_DXT5: i.COMPRESSED_RGBA_S3TC_DXT5_EXT,
                    RGB_PVRTC_4BPPV1: i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,
                    RGB_PVRTC_2BPPV1: i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,
                    RGBA_PVRTC_4BPPV1: i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,
                    RGBA_PVRTC_2BPPV1: i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,
                    RGB_ETC1: i.COMPRESSED_RGB_ETC1_WEBGL,
                    componentsLength: function (e) {
                        switch (e) {
                            case n.RGB:
                            case n.RGBA:
                                return 4;
                            case n.LUMINANCE_ALPHA:
                                return 2;
                            case n.ALPHA:
                            case n.LUMINANCE:
                            default:
                                return 1;
                        }
                    },
                    validate: function (e) {
                        return (
                            e === n.DEPTH_COMPONENT ||
                            e === n.DEPTH_STENCIL ||
                            e === n.ALPHA ||
                            e === n.RGB ||
                            e === n.RGBA ||
                            e === n.LUMINANCE ||
                            e === n.LUMINANCE_ALPHA ||
                            e === n.RGB_DXT1 ||
                            e === n.RGBA_DXT1 ||
                            e === n.RGBA_DXT3 ||
                            e === n.RGBA_DXT5 ||
                            e === n.RGB_PVRTC_4BPPV1 ||
                            e === n.RGB_PVRTC_2BPPV1 ||
                            e === n.RGBA_PVRTC_4BPPV1 ||
                            e === n.RGBA_PVRTC_2BPPV1 ||
                            e === n.RGB_ETC1
                        );
                    },
                    isColorFormat: function (e) {
                        return (
                            e === n.ALPHA ||
                            e === n.RGB ||
                            e === n.RGBA ||
                            e === n.LUMINANCE ||
                            e === n.LUMINANCE_ALPHA
                        );
                    },
                    isDepthFormat: function (e) {
                        return e === n.DEPTH_COMPONENT || e === n.DEPTH_STENCIL;
                    },
                    isCompressedFormat: function (e) {
                        return (
                            e === n.RGB_DXT1 ||
                            e === n.RGBA_DXT1 ||
                            e === n.RGBA_DXT3 ||
                            e === n.RGBA_DXT5 ||
                            e === n.RGB_PVRTC_4BPPV1 ||
                            e === n.RGB_PVRTC_2BPPV1 ||
                            e === n.RGBA_PVRTC_4BPPV1 ||
                            e === n.RGBA_PVRTC_2BPPV1 ||
                            e === n.RGB_ETC1
                        );
                    },
                    isDXTFormat: function (e) {
                        return (
                            e === n.RGB_DXT1 ||
                            e === n.RGBA_DXT1 ||
                            e === n.RGBA_DXT3 ||
                            e === n.RGBA_DXT5
                        );
                    },
                    isPVRTCFormat: function (e) {
                        return (
                            e === n.RGB_PVRTC_4BPPV1 ||
                            e === n.RGB_PVRTC_2BPPV1 ||
                            e === n.RGBA_PVRTC_4BPPV1 ||
                            e === n.RGBA_PVRTC_2BPPV1
                        );
                    },
                    isETC1Format: function (e) {
                        return e === n.RGB_ETC1;
                    },
                    compressedTextureSizeInBytes: function (e, r, i) {
                        switch (e) {
                            case n.RGB_DXT1:
                            case n.RGBA_DXT1:
                            case n.RGB_ETC1:
                                return (
                                    Math.floor((r + 3) / 4) *
                                    Math.floor((i + 3) / 4) *
                                    8
                                );
                            case n.RGBA_DXT3:
                            case n.RGBA_DXT5:
                                return (
                                    Math.floor((r + 3) / 4) *
                                    Math.floor((i + 3) / 4) *
                                    16
                                );
                            case n.RGB_PVRTC_4BPPV1:
                            case n.RGBA_PVRTC_4BPPV1:
                                return Math.floor(
                                    (Math.max(r, 8) * Math.max(i, 8) * 4 + 7) /
                                        8,
                                );
                            case n.RGB_PVRTC_2BPPV1:
                            case n.RGBA_PVRTC_2BPPV1:
                                return Math.floor(
                                    (Math.max(r, 16) * Math.max(i, 8) * 2 + 7) /
                                        8,
                                );
                            default:
                                return 0;
                        }
                    },
                    textureSizeInBytes: function (r, i, t, o) {
                        var a = n.componentsLength(r);
                        return (
                            e.isPacked(i) && (a = 1),
                            a * e.sizeInBytes(i) * t * o
                        );
                    },
                };
                return r(n);
            },
        ),
        define('Core/RuntimeError', ['./defined'], function (e) {
            'use strict';
            function r(e) {
                (this.name = 'RuntimeError'), (this.message = e);
                var r;
                try {
                    throw new Error();
                } catch (e) {
                    r = e.stack;
                }
                this.stack = r;
            }
            return (
                e(Object.create) &&
                    ((r.prototype = Object.create(Error.prototype)),
                    (r.prototype.constructor = r)),
                (r.prototype.toString = function () {
                    var r = this.name + ': ' + this.message;
                    return (
                        e(this.stack) && (r += '\n' + this.stack.toString()), r
                    );
                }),
                r
            );
        }),
        define('ThirdParty/crunch', [], function () {
            function globalEval(e) {
                eval.call(null, e);
            }
            function assert(e, r) {
                e || abort('Assertion failed: ' + r);
            }
            function getCFunc(ident) {
                var func = Module['_' + ident];
                if (!func)
                    try {
                        func = eval('_' + ident);
                    } catch (e) {}
                return (
                    assert(
                        func,
                        'Cannot call unknown function ' +
                            ident +
                            ' (perhaps LLVM optimizations or closure removed it?)',
                    ),
                    func
                );
            }
            function setValue(e, r, i, n) {
                switch (
                    ((i = i || 'i8'),
                    '*' === i.charAt(i.length - 1) && (i = 'i32'),
                    i)
                ) {
                    case 'i1':
                    case 'i8':
                        HEAP8[e >> 0] = r;
                        break;
                    case 'i16':
                        HEAP16[e >> 1] = r;
                        break;
                    case 'i32':
                        HEAP32[e >> 2] = r;
                        break;
                    case 'i64':
                        (tempI64 = [
                            r >>> 0,
                            ((tempDouble = r),
                            +Math_abs(tempDouble) >= 1
                                ? tempDouble > 0
                                    ? (0 |
                                          Math_min(
                                              +Math_floor(
                                                  tempDouble / 4294967296,
                                              ),
                                              4294967295,
                                          )) >>>
                                      0
                                    : ~~+Math_ceil(
                                          (tempDouble - +(~~tempDouble >>> 0)) /
                                              4294967296,
                                      ) >>> 0
                                : 0),
                        ]),
                            (HEAP32[e >> 2] = tempI64[0]),
                            (HEAP32[(e + 4) >> 2] = tempI64[1]);
                        break;
                    case 'float':
                        HEAPF32[e >> 2] = r;
                        break;
                    case 'double':
                        HEAPF64[e >> 3] = r;
                        break;
                    default:
                        abort('invalid type for setValue: ' + i);
                }
            }
            function getValue(e, r, i) {
                switch (
                    ((r = r || 'i8'),
                    '*' === r.charAt(r.length - 1) && (r = 'i32'),
                    r)
                ) {
                    case 'i1':
                    case 'i8':
                        return HEAP8[e >> 0];
                    case 'i16':
                        return HEAP16[e >> 1];
                    case 'i32':
                    case 'i64':
                        return HEAP32[e >> 2];
                    case 'float':
                        return HEAPF32[e >> 2];
                    case 'double':
                        return HEAPF64[e >> 3];
                    default:
                        abort('invalid type for setValue: ' + r);
                }
                return null;
            }
            function allocate(e, r, i, n) {
                var t, o;
                'number' == typeof e
                    ? ((t = !0), (o = e))
                    : ((t = !1), (o = e.length));
                var a,
                    u = 'string' == typeof r ? r : null;
                if (
                    ((a =
                        i == ALLOC_NONE
                            ? n
                            : [
                                  _malloc,
                                  Runtime.stackAlloc,
                                  Runtime.staticAlloc,
                                  Runtime.dynamicAlloc,
                              ][void 0 === i ? ALLOC_STATIC : i](
                                  Math.max(o, u ? 1 : r.length),
                              )),
                    t)
                ) {
                    var s,
                        n = a;
                    for (assert(0 == (3 & a)), s = a + (-4 & o); n < s; n += 4)
                        HEAP32[n >> 2] = 0;
                    for (s = a + o; n < s; ) HEAP8[n++ >> 0] = 0;
                    return a;
                }
                if ('i8' === u)
                    return (
                        e.subarray || e.slice
                            ? HEAPU8.set(e, a)
                            : HEAPU8.set(new Uint8Array(e), a),
                        a
                    );
                for (var l, f, _, c = 0; c < o; ) {
                    var E = e[c];
                    'function' == typeof E && (E = Runtime.getFunctionIndex(E)),
                        (l = u || r[c]),
                        0 !== l
                            ? ('i64' == l && (l = 'i32'),
                              setValue(a + c, E, l),
                              _ !== l &&
                                  ((f = Runtime.getNativeTypeSize(l)), (_ = l)),
                              (c += f))
                            : c++;
                }
                return a;
            }
            function getMemory(e) {
                return staticSealed
                    ? (void 0 !== _sbrk && !_sbrk.called) || !runtimeInitialized
                        ? Runtime.dynamicAlloc(e)
                        : _malloc(e)
                    : Runtime.staticAlloc(e);
            }
            function Pointer_stringify(e, r) {
                if (0 === r || !e) return '';
                for (var i, n = 0, t = 0; ; ) {
                    if (((i = HEAPU8[(e + t) >> 0]), (n |= i), 0 == i && !r))
                        break;
                    if ((t++, r && t == r)) break;
                }
                r || (r = t);
                var o = '';
                if (n < 128) {
                    for (var a; r > 0; )
                        (a = String.fromCharCode.apply(
                            String,
                            HEAPU8.subarray(e, e + Math.min(r, 1024)),
                        )),
                            (o = o ? o + a : a),
                            (e += 1024),
                            (r -= 1024);
                    return o;
                }
                return Module.UTF8ToString(e);
            }
            function AsciiToString(e) {
                for (var r = ''; ; ) {
                    var i = HEAP8[e++ >> 0];
                    if (!i) return r;
                    r += String.fromCharCode(i);
                }
            }
            function stringToAscii(e, r) {
                return writeAsciiToMemory(e, r, !1);
            }
            function UTF8ArrayToString(e, r) {
                for (var i, n, t, o, a, u, s = ''; ; ) {
                    if (!(i = e[r++])) return s;
                    if (128 & i)
                        if (((n = 63 & e[r++]), 192 != (224 & i)))
                            if (
                                ((t = 63 & e[r++]),
                                224 == (240 & i)
                                    ? (i = ((15 & i) << 12) | (n << 6) | t)
                                    : ((o = 63 & e[r++]),
                                      240 == (248 & i)
                                          ? (i =
                                                ((7 & i) << 18) |
                                                (n << 12) |
                                                (t << 6) |
                                                o)
                                          : ((a = 63 & e[r++]),
                                            248 == (252 & i)
                                                ? (i =
                                                      ((3 & i) << 24) |
                                                      (n << 18) |
                                                      (t << 12) |
                                                      (o << 6) |
                                                      a)
                                                : ((u = 63 & e[r++]),
                                                  (i =
                                                      ((1 & i) << 30) |
                                                      (n << 24) |
                                                      (t << 18) |
                                                      (o << 12) |
                                                      (a << 6) |
                                                      u)))),
                                i < 65536)
                            )
                                s += String.fromCharCode(i);
                            else {
                                var l = i - 65536;
                                s += String.fromCharCode(
                                    55296 | (l >> 10),
                                    56320 | (1023 & l),
                                );
                            }
                        else s += String.fromCharCode(((31 & i) << 6) | n);
                    else s += String.fromCharCode(i);
                }
            }
            function UTF8ToString(e) {
                return UTF8ArrayToString(HEAPU8, e);
            }
            function stringToUTF8Array(e, r, i, n) {
                if (!(n > 0)) return 0;
                for (var t = i, o = i + n - 1, a = 0; a < e.length; ++a) {
                    var u = e.charCodeAt(a);
                    if (
                        (u >= 55296 &&
                            u <= 57343 &&
                            (u =
                                (65536 + ((1023 & u) << 10)) |
                                (1023 & e.charCodeAt(++a))),
                        u <= 127)
                    ) {
                        if (i >= o) break;
                        r[i++] = u;
                    } else if (u <= 2047) {
                        if (i + 1 >= o) break;
                        (r[i++] = 192 | (u >> 6)), (r[i++] = 128 | (63 & u));
                    } else if (u <= 65535) {
                        if (i + 2 >= o) break;
                        (r[i++] = 224 | (u >> 12)),
                            (r[i++] = 128 | ((u >> 6) & 63)),
                            (r[i++] = 128 | (63 & u));
                    } else if (u <= 2097151) {
                        if (i + 3 >= o) break;
                        (r[i++] = 240 | (u >> 18)),
                            (r[i++] = 128 | ((u >> 12) & 63)),
                            (r[i++] = 128 | ((u >> 6) & 63)),
                            (r[i++] = 128 | (63 & u));
                    } else if (u <= 67108863) {
                        if (i + 4 >= o) break;
                        (r[i++] = 248 | (u >> 24)),
                            (r[i++] = 128 | ((u >> 18) & 63)),
                            (r[i++] = 128 | ((u >> 12) & 63)),
                            (r[i++] = 128 | ((u >> 6) & 63)),
                            (r[i++] = 128 | (63 & u));
                    } else {
                        if (i + 5 >= o) break;
                        (r[i++] = 252 | (u >> 30)),
                            (r[i++] = 128 | ((u >> 24) & 63)),
                            (r[i++] = 128 | ((u >> 18) & 63)),
                            (r[i++] = 128 | ((u >> 12) & 63)),
                            (r[i++] = 128 | ((u >> 6) & 63)),
                            (r[i++] = 128 | (63 & u));
                    }
                }
                return (r[i] = 0), i - t;
            }
            function stringToUTF8(e, r, i) {
                return stringToUTF8Array(e, HEAPU8, r, i);
            }
            function lengthBytesUTF8(e) {
                for (var r = 0, i = 0; i < e.length; ++i) {
                    var n = e.charCodeAt(i);
                    n >= 55296 &&
                        n <= 57343 &&
                        (n =
                            (65536 + ((1023 & n) << 10)) |
                            (1023 & e.charCodeAt(++i))),
                        n <= 127
                            ? ++r
                            : (r +=
                                  n <= 2047
                                      ? 2
                                      : n <= 65535
                                        ? 3
                                        : n <= 2097151
                                          ? 4
                                          : n <= 67108863
                                            ? 5
                                            : 6);
                }
                return r;
            }
            function UTF16ToString(e) {
                for (var r = 0, i = ''; ; ) {
                    var n = HEAP16[(e + 2 * r) >> 1];
                    if (0 == n) return i;
                    ++r, (i += String.fromCharCode(n));
                }
            }
            function stringToUTF16(e, r, i) {
                if ((void 0 === i && (i = 2147483647), i < 2)) return 0;
                i -= 2;
                for (
                    var n = r, t = i < 2 * e.length ? i / 2 : e.length, o = 0;
                    o < t;
                    ++o
                ) {
                    var a = e.charCodeAt(o);
                    (HEAP16[r >> 1] = a), (r += 2);
                }
                return (HEAP16[r >> 1] = 0), r - n;
            }
            function lengthBytesUTF16(e) {
                return 2 * e.length;
            }
            function UTF32ToString(e) {
                for (var r = 0, i = ''; ; ) {
                    var n = HEAP32[(e + 4 * r) >> 2];
                    if (0 == n) return i;
                    if ((++r, n >= 65536)) {
                        var t = n - 65536;
                        i += String.fromCharCode(
                            55296 | (t >> 10),
                            56320 | (1023 & t),
                        );
                    } else i += String.fromCharCode(n);
                }
            }
            function stringToUTF32(e, r, i) {
                if ((void 0 === i && (i = 2147483647), i < 4)) return 0;
                for (var n = r, t = n + i - 4, o = 0; o < e.length; ++o) {
                    var a = e.charCodeAt(o);
                    if (a >= 55296 && a <= 57343) {
                        a =
                            (65536 + ((1023 & a) << 10)) |
                            (1023 & e.charCodeAt(++o));
                    }
                    if (((HEAP32[r >> 2] = a), (r += 4) + 4 > t)) break;
                }
                return (HEAP32[r >> 2] = 0), r - n;
            }
            function lengthBytesUTF32(e) {
                for (var r = 0, i = 0; i < e.length; ++i) {
                    var n = e.charCodeAt(i);
                    n >= 55296 && n <= 57343 && ++i, (r += 4);
                }
                return r;
            }
            function demangle(e) {
                function r() {
                    u++, 'K' === e[u] && u++;
                    for (var r = []; 'E' !== e[u]; )
                        if ('S' !== e[u])
                            if ('C' !== e[u]) {
                                var i = parseInt(e.substr(u)),
                                    n = i.toString().length;
                                if (!i || !n) {
                                    u--;
                                    break;
                                }
                                var t = e.substr(u + n, i);
                                r.push(t), l.push(t), (u += n + i);
                            } else r.push(r[r.length - 1]), (u += 2);
                        else {
                            u++;
                            var o = e.indexOf('_', u),
                                a = e.substring(u, o) || 0;
                            r.push(l[a] || '?'), (u = o + 1);
                        }
                    return u++, r;
                }
                function i(n, t, o) {
                    t = t || 1 / 0;
                    var a,
                        l = '',
                        _ = [];
                    if ('N' === e[u]) {
                        if (((a = r().join('::')), 0 === --t))
                            return n ? [a] : a;
                    } else {
                        ('K' === e[u] || (f && 'L' === e[u])) && u++;
                        var c = parseInt(e.substr(u));
                        if (c) {
                            var E = c.toString().length;
                            (a = e.substr(u + E, c)), (u += E + c);
                        }
                    }
                    if (((f = !1), 'I' === e[u])) {
                        u++;
                        var T = i(!0);
                        l +=
                            i(!0, 1, !0)[0] +
                            ' ' +
                            a +
                            '<' +
                            T.join(', ') +
                            '>';
                    } else l = a;
                    e: for (; u < e.length && t-- > 0; ) {
                        var d = e[u++];
                        if (d in s) _.push(s[d]);
                        else
                            switch (d) {
                                case 'P':
                                    _.push(i(!0, 1, !0)[0] + '*');
                                    break;
                                case 'R':
                                    _.push(i(!0, 1, !0)[0] + '&');
                                    break;
                                case 'L':
                                    u++;
                                    var A = e.indexOf('E', u),
                                        c = A - u;
                                    _.push(e.substr(u, c)), (u += c + 2);
                                    break;
                                case 'A':
                                    var c = parseInt(e.substr(u));
                                    if (
                                        ((u += c.toString().length),
                                        '_' !== e[u])
                                    )
                                        throw '?';
                                    u++,
                                        _.push(
                                            i(!0, 1, !0)[0] + ' [' + c + ']',
                                        );
                                    break;
                                case 'E':
                                    break e;
                                default:
                                    l += '?' + d;
                                    break e;
                            }
                    }
                    return (
                        o || 1 !== _.length || 'void' !== _[0] || (_ = []),
                        n
                            ? (l && _.push(l + '?'), _)
                            : l +
                              (function () {
                                  return '(' + _.join(', ') + ')';
                              })()
                    );
                }
                var n = !!Module.___cxa_demangle;
                if (n)
                    try {
                        var t = _malloc(e.length);
                        writeStringToMemory(e.substr(1), t);
                        var o = _malloc(4),
                            a = Module.___cxa_demangle(t, 0, 0, o);
                        if (0 === getValue(o, 'i32') && a)
                            return Pointer_stringify(a);
                    } catch (e) {
                    } finally {
                        t && _free(t), o && _free(o), a && _free(a);
                    }
                var u = 3,
                    s = {
                        v: 'void',
                        b: 'bool',
                        c: 'char',
                        s: 'short',
                        i: 'int',
                        l: 'long',
                        f: 'float',
                        d: 'double',
                        w: 'wchar_t',
                        a: 'signed char',
                        h: 'unsigned char',
                        t: 'unsigned short',
                        j: 'unsigned int',
                        m: 'unsigned long',
                        x: 'long long',
                        y: 'unsigned long long',
                        z: '...',
                    },
                    l = [],
                    f = !0,
                    _ = e;
                try {
                    if ('Object._main' == e || '_main' == e) return 'main()';
                    if (
                        ('number' == typeof e && (e = Pointer_stringify(e)),
                        '_' !== e[0])
                    )
                        return e;
                    if ('_' !== e[1]) return e;
                    if ('Z' !== e[2]) return e;
                    switch (e[3]) {
                        case 'n':
                            return 'operator new()';
                        case 'd':
                            return 'operator delete()';
                    }
                    _ = i();
                } catch (e) {
                    _ += '?';
                }
                return (
                    _.indexOf('?') >= 0 &&
                        !n &&
                        Runtime.warnOnce(
                            'warning: a problem occurred in builtin C++ name demangling; build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling',
                        ),
                    _
                );
            }
            function demangleAll(e) {
                return e.replace(/__Z[\w\d_]+/g, function (e) {
                    var r = demangle(e);
                    return e === r ? e : e + ' [' + r + ']';
                });
            }
            function jsStackTrace() {
                var e = new Error();
                if (!e.stack) {
                    try {
                        throw new Error(0);
                    } catch (r) {
                        e = r;
                    }
                    if (!e.stack) return '(no stack trace available)';
                }
                return e.stack.toString();
            }
            function stackTrace() {
                return demangleAll(jsStackTrace());
            }
            function alignMemoryPage(e) {
                return e % 4096 > 0 && (e += 4096 - (e % 4096)), e;
            }
            function enlargeMemory() {
                var e = Math.pow(2, 31);
                if (DYNAMICTOP >= e) return !1;
                for (; TOTAL_MEMORY <= DYNAMICTOP; )
                    if (TOTAL_MEMORY < e / 2)
                        TOTAL_MEMORY = alignMemoryPage(2 * TOTAL_MEMORY);
                    else {
                        var r = TOTAL_MEMORY;
                        if (
                            (TOTAL_MEMORY = alignMemoryPage(
                                (3 * TOTAL_MEMORY + e) / 4,
                            )) <= r
                        )
                            return !1;
                    }
                if ((TOTAL_MEMORY = Math.max(TOTAL_MEMORY, 16777216)) >= e)
                    return !1;
                try {
                    if (ArrayBuffer.transfer)
                        buffer = ArrayBuffer.transfer(buffer, TOTAL_MEMORY);
                    else {
                        var i = HEAP8;
                        buffer = new ArrayBuffer(TOTAL_MEMORY);
                    }
                } catch (e) {
                    return !1;
                }
                return (
                    !!_emscripten_replace_memory(buffer) &&
                    ((Module.buffer = buffer),
                    (Module.HEAP8 = HEAP8 = new Int8Array(buffer)),
                    (Module.HEAP16 = HEAP16 = new Int16Array(buffer)),
                    (Module.HEAP32 = HEAP32 = new Int32Array(buffer)),
                    (Module.HEAPU8 = HEAPU8 = new Uint8Array(buffer)),
                    (Module.HEAPU16 = HEAPU16 = new Uint16Array(buffer)),
                    (Module.HEAPU32 = HEAPU32 = new Uint32Array(buffer)),
                    (Module.HEAPF32 = HEAPF32 = new Float32Array(buffer)),
                    (Module.HEAPF64 = HEAPF64 = new Float64Array(buffer)),
                    ArrayBuffer.transfer || HEAP8.set(i),
                    !0)
                );
            }
            function callRuntimeCallbacks(e) {
                for (; e.length > 0; ) {
                    var r = e.shift();
                    if ('function' != typeof r) {
                        var i = r.func;
                        'number' == typeof i
                            ? void 0 === r.arg
                                ? Runtime.dynCall('v', i)
                                : Runtime.dynCall('vi', i, [r.arg])
                            : i(void 0 === r.arg ? null : r.arg);
                    } else r();
                }
            }
            function preRun() {
                if (Module.preRun)
                    for (
                        'function' == typeof Module.preRun &&
                        (Module.preRun = [Module.preRun]);
                        Module.preRun.length;

                    )
                        addOnPreRun(Module.preRun.shift());
                callRuntimeCallbacks(__ATPRERUN__);
            }
            function ensureInitRuntime() {
                runtimeInitialized ||
                    ((runtimeInitialized = !0),
                    callRuntimeCallbacks(__ATINIT__));
            }
            function preMain() {
                callRuntimeCallbacks(__ATMAIN__);
            }
            function exitRuntime() {
                callRuntimeCallbacks(__ATEXIT__), (runtimeExited = !0);
            }
            function postRun() {
                if (Module.postRun)
                    for (
                        'function' == typeof Module.postRun &&
                        (Module.postRun = [Module.postRun]);
                        Module.postRun.length;

                    )
                        addOnPostRun(Module.postRun.shift());
                callRuntimeCallbacks(__ATPOSTRUN__);
            }
            function addOnPreRun(e) {
                __ATPRERUN__.unshift(e);
            }
            function addOnInit(e) {
                __ATINIT__.unshift(e);
            }
            function addOnPreMain(e) {
                __ATMAIN__.unshift(e);
            }
            function addOnExit(e) {
                __ATEXIT__.unshift(e);
            }
            function addOnPostRun(e) {
                __ATPOSTRUN__.unshift(e);
            }
            function intArrayFromString(e, r, i) {
                var n = i > 0 ? i : lengthBytesUTF8(e) + 1,
                    t = new Array(n),
                    o = stringToUTF8Array(e, t, 0, t.length);
                return r && (t.length = o), t;
            }
            function intArrayToString(e) {
                for (var r = [], i = 0; i < e.length; i++) {
                    var n = e[i];
                    n > 255 && (n &= 255), r.push(String.fromCharCode(n));
                }
                return r.join('');
            }
            function writeStringToMemory(e, r, i) {
                for (var n = intArrayFromString(e, i), t = 0; t < n.length; ) {
                    var o = n[t];
                    (HEAP8[(r + t) >> 0] = o), (t += 1);
                }
            }
            function writeArrayToMemory(e, r) {
                for (var i = 0; i < e.length; i++) HEAP8[r++ >> 0] = e[i];
            }
            function writeAsciiToMemory(e, r, i) {
                for (var n = 0; n < e.length; ++n)
                    HEAP8[r++ >> 0] = e.charCodeAt(n);
                i || (HEAP8[r >> 0] = 0);
            }
            function unSign(e, r, i) {
                return e >= 0
                    ? e
                    : r <= 32
                      ? 2 * Math.abs(1 << (r - 1)) + e
                      : Math.pow(2, r) + e;
            }
            function reSign(e, r, i) {
                if (e <= 0) return e;
                var n = r <= 32 ? Math.abs(1 << (r - 1)) : Math.pow(2, r - 1);
                return e >= n && (r <= 32 || e > n) && (e = -2 * n + e), e;
            }
            function getUniqueRunDependency(e) {
                return e;
            }
            function addRunDependency(e) {
                runDependencies++,
                    Module.monitorRunDependencies &&
                        Module.monitorRunDependencies(runDependencies);
            }
            function removeRunDependency(e) {
                if (
                    (runDependencies--,
                    Module.monitorRunDependencies &&
                        Module.monitorRunDependencies(runDependencies),
                    0 == runDependencies &&
                        (null !== runDependencyWatcher &&
                            (clearInterval(runDependencyWatcher),
                            (runDependencyWatcher = null)),
                        dependenciesFulfilled))
                ) {
                    var r = dependenciesFulfilled;
                    (dependenciesFulfilled = null), r();
                }
            }
            function copyTempFloat(e) {
                (HEAP8[tempDoublePtr] = HEAP8[e]),
                    (HEAP8[tempDoublePtr + 1] = HEAP8[e + 1]),
                    (HEAP8[tempDoublePtr + 2] = HEAP8[e + 2]),
                    (HEAP8[tempDoublePtr + 3] = HEAP8[e + 3]);
            }
            function copyTempDouble(e) {
                (HEAP8[tempDoublePtr] = HEAP8[e]),
                    (HEAP8[tempDoublePtr + 1] = HEAP8[e + 1]),
                    (HEAP8[tempDoublePtr + 2] = HEAP8[e + 2]),
                    (HEAP8[tempDoublePtr + 3] = HEAP8[e + 3]),
                    (HEAP8[tempDoublePtr + 4] = HEAP8[e + 4]),
                    (HEAP8[tempDoublePtr + 5] = HEAP8[e + 5]),
                    (HEAP8[tempDoublePtr + 6] = HEAP8[e + 6]),
                    (HEAP8[tempDoublePtr + 7] = HEAP8[e + 7]);
            }
            function _pthread_cleanup_push(e, r) {
                __ATEXIT__.push(function () {
                    Runtime.dynCall('vi', e, [r]);
                }),
                    (_pthread_cleanup_push.level = __ATEXIT__.length);
            }
            function _pthread_cleanup_pop() {
                assert(
                    _pthread_cleanup_push.level == __ATEXIT__.length,
                    'cannot pop if something else added meanwhile!',
                ),
                    __ATEXIT__.pop(),
                    (_pthread_cleanup_push.level = __ATEXIT__.length);
            }
            function _abort() {
                Module.abort();
            }
            function __ZSt18uncaught_exceptionv() {
                return !!__ZSt18uncaught_exceptionv.uncaught_exception;
            }
            function ___cxa_begin_catch(e) {
                return (
                    __ZSt18uncaught_exceptionv.uncaught_exception--,
                    EXCEPTIONS.caught.push(e),
                    EXCEPTIONS.addRef(EXCEPTIONS.deAdjust(e)),
                    e
                );
            }
            function _pthread_once(e, r) {
                _pthread_once.seen || (_pthread_once.seen = {}),
                    e in _pthread_once.seen ||
                        (Runtime.dynCall('v', r), (_pthread_once.seen[e] = 1));
            }
            function _emscripten_memcpy_big(e, r, i) {
                return HEAPU8.set(HEAPU8.subarray(r, r + i), e), e;
            }
            function ___syscall6(e, r) {
                SYSCALLS.varargs = r;
                try {
                    var i = SYSCALLS.getStreamFromFD();
                    return FS.close(i), 0;
                } catch (e) {
                    return (
                        ('undefined' != typeof FS &&
                            e instanceof FS.ErrnoError) ||
                            abort(e),
                        -e.errno
                    );
                }
            }
            function _pthread_getspecific(e) {
                return PTHREAD_SPECIFIC[e] || 0;
            }
            function ___setErrNo(e) {
                return (
                    Module.___errno_location &&
                        (HEAP32[Module.___errno_location() >> 2] = e),
                    e
                );
            }
            function _sysconf(e) {
                switch (e) {
                    case 30:
                        return PAGE_SIZE;
                    case 85:
                        return totalMemory / PAGE_SIZE;
                    case 132:
                    case 133:
                    case 12:
                    case 137:
                    case 138:
                    case 15:
                    case 235:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 149:
                    case 13:
                    case 10:
                    case 236:
                    case 153:
                    case 9:
                    case 21:
                    case 22:
                    case 159:
                    case 154:
                    case 14:
                    case 77:
                    case 78:
                    case 139:
                    case 80:
                    case 81:
                    case 82:
                    case 68:
                    case 67:
                    case 164:
                    case 11:
                    case 29:
                    case 47:
                    case 48:
                    case 95:
                    case 52:
                    case 51:
                    case 46:
                        return 200809;
                    case 79:
                        return 0;
                    case 27:
                    case 246:
                    case 127:
                    case 128:
                    case 23:
                    case 24:
                    case 160:
                    case 161:
                    case 181:
                    case 182:
                    case 242:
                    case 183:
                    case 184:
                    case 243:
                    case 244:
                    case 245:
                    case 165:
                    case 178:
                    case 179:
                    case 49:
                    case 50:
                    case 168:
                    case 169:
                    case 175:
                    case 170:
                    case 171:
                    case 172:
                    case 97:
                    case 76:
                    case 32:
                    case 173:
                    case 35:
                        return -1;
                    case 176:
                    case 177:
                    case 7:
                    case 155:
                    case 8:
                    case 157:
                    case 125:
                    case 126:
                    case 92:
                    case 93:
                    case 129:
                    case 130:
                    case 131:
                    case 94:
                    case 91:
                        return 1;
                    case 74:
                    case 60:
                    case 69:
                    case 70:
                    case 4:
                        return 1024;
                    case 31:
                    case 42:
                    case 72:
                        return 32;
                    case 87:
                    case 26:
                    case 33:
                        return 2147483647;
                    case 34:
                    case 1:
                        return 47839;
                    case 38:
                    case 36:
                        return 99;
                    case 43:
                    case 37:
                        return 2048;
                    case 0:
                        return 2097152;
                    case 3:
                        return 65536;
                    case 28:
                        return 32768;
                    case 44:
                        return 32767;
                    case 75:
                        return 16384;
                    case 39:
                        return 1e3;
                    case 89:
                        return 700;
                    case 71:
                        return 256;
                    case 40:
                        return 255;
                    case 2:
                        return 100;
                    case 180:
                        return 64;
                    case 25:
                        return 20;
                    case 5:
                        return 16;
                    case 6:
                        return 6;
                    case 73:
                        return 4;
                    case 84:
                        return 'object' == typeof navigator
                            ? navigator.hardwareConcurrency || 1
                            : 1;
                }
                return ___setErrNo(ERRNO_CODES.EINVAL), -1;
            }
            function _sbrk(e) {
                var r = _sbrk;
                r.called ||
                    ((DYNAMICTOP = alignMemoryPage(DYNAMICTOP)),
                    (r.called = !0),
                    assert(Runtime.dynamicAlloc),
                    (r.alloc = Runtime.dynamicAlloc),
                    (Runtime.dynamicAlloc = function () {
                        abort(
                            'cannot dynamically allocate, sbrk now has control',
                        );
                    }));
                var i = DYNAMICTOP;
                if (0 != e) {
                    if (!r.alloc(e)) return -1 >>> 0;
                }
                return i;
            }
            function _pthread_key_create(e, r) {
                return 0 == e
                    ? ERRNO_CODES.EINVAL
                    : ((HEAP32[e >> 2] = PTHREAD_SPECIFIC_NEXT_KEY),
                      (PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY] = 0),
                      PTHREAD_SPECIFIC_NEXT_KEY++,
                      0);
            }
            function _emscripten_set_main_loop_timing(e, r) {
                function i(e) {
                    e.source === window &&
                        e.data === t &&
                        (e.stopPropagation(), n.shift()());
                }
                if (
                    ((Browser.mainLoop.timingMode = e),
                    (Browser.mainLoop.timingValue = r),
                    !Browser.mainLoop.func)
                )
                    return 1;
                if (0 == e)
                    (Browser.mainLoop.scheduler = function () {
                        setTimeout(Browser.mainLoop.runner, r);
                    }),
                        (Browser.mainLoop.method = 'timeout');
                else if (1 == e)
                    (Browser.mainLoop.scheduler = function () {
                        Browser.requestAnimationFrame(Browser.mainLoop.runner);
                    }),
                        (Browser.mainLoop.method = 'rAF');
                else if (2 == e) {
                    if (!window.setImmediate) {
                        var n = [],
                            t = '__emcc';
                        window.addEventListener('message', i, !0),
                            (window.setImmediate = function (e) {
                                n.push(e), window.postMessage(t, '*');
                            });
                    }
                    (Browser.mainLoop.scheduler = function () {
                        window.setImmediate(Browser.mainLoop.runner);
                    }),
                        (Browser.mainLoop.method = 'immediate');
                }
                return 0;
            }
            function _emscripten_set_main_loop(e, r, i, n, t) {
                (Module.noExitRuntime = !0),
                    assert(
                        !Browser.mainLoop.func,
                        'emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.',
                    ),
                    (Browser.mainLoop.func = e),
                    (Browser.mainLoop.arg = n);
                var o = Browser.mainLoop.currentlyRunningMainloop;
                if (
                    ((Browser.mainLoop.runner = function () {
                        if (!ABORT) {
                            if (Browser.mainLoop.queue.length > 0) {
                                var r = Date.now(),
                                    i = Browser.mainLoop.queue.shift();
                                if (
                                    (i.func(i.arg),
                                    Browser.mainLoop.remainingBlockers)
                                ) {
                                    var t = Browser.mainLoop.remainingBlockers,
                                        a = t % 1 == 0 ? t - 1 : Math.floor(t);
                                    i.counted
                                        ? (Browser.mainLoop.remainingBlockers =
                                              a)
                                        : ((a += 0.5),
                                          (Browser.mainLoop.remainingBlockers =
                                              (8 * t + a) / 9));
                                }
                                return (
                                    console.log(
                                        'main loop blocker "' +
                                            i.name +
                                            '" took ' +
                                            (Date.now() - r) +
                                            ' ms',
                                    ),
                                    Browser.mainLoop.updateStatus(),
                                    void setTimeout(Browser.mainLoop.runner, 0)
                                );
                            }
                            if (
                                !(o < Browser.mainLoop.currentlyRunningMainloop)
                            ) {
                                if (
                                    ((Browser.mainLoop.currentFrameNumber =
                                        (Browser.mainLoop.currentFrameNumber +
                                            1) |
                                        0),
                                    1 == Browser.mainLoop.timingMode &&
                                        Browser.mainLoop.timingValue > 1 &&
                                        Browser.mainLoop.currentFrameNumber %
                                            Browser.mainLoop.timingValue !=
                                            0)
                                )
                                    return void Browser.mainLoop.scheduler();
                                'timeout' === Browser.mainLoop.method &&
                                    Module.ctx &&
                                    (Module.printErr(
                                        'Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!',
                                    ),
                                    (Browser.mainLoop.method = '')),
                                    Browser.mainLoop.runIter(function () {
                                        void 0 !== n
                                            ? Runtime.dynCall('vi', e, [n])
                                            : Runtime.dynCall('v', e);
                                    }),
                                    o <
                                        Browser.mainLoop
                                            .currentlyRunningMainloop ||
                                        ('object' == typeof SDL &&
                                            SDL.audio &&
                                            SDL.audio.queueNewAudioData &&
                                            SDL.audio.queueNewAudioData(),
                                        Browser.mainLoop.scheduler());
                            }
                        }
                    }),
                    t ||
                        (r && r > 0
                            ? _emscripten_set_main_loop_timing(0, 1e3 / r)
                            : _emscripten_set_main_loop_timing(1, 1),
                        Browser.mainLoop.scheduler()),
                    i)
                )
                    throw 'SimulateInfiniteLoop';
            }
            function _pthread_setspecific(e, r) {
                return e in PTHREAD_SPECIFIC
                    ? ((PTHREAD_SPECIFIC[e] = r), 0)
                    : ERRNO_CODES.EINVAL;
            }
            function _time(e) {
                var r = (Date.now() / 1e3) | 0;
                return e && (HEAP32[e >> 2] = r), r;
            }
            function _pthread_self() {
                return 0;
            }
            function ___syscall140(e, r) {
                SYSCALLS.varargs = r;
                try {
                    var i = SYSCALLS.getStreamFromFD(),
                        n = SYSCALLS.get(),
                        t = SYSCALLS.get(),
                        o = SYSCALLS.get(),
                        a = SYSCALLS.get(),
                        u = t;
                    return (
                        assert(0 === n),
                        FS.llseek(i, u, a),
                        (HEAP32[o >> 2] = i.position),
                        i.getdents && 0 === u && 0 === a && (i.getdents = null),
                        0
                    );
                } catch (e) {
                    return (
                        ('undefined' != typeof FS &&
                            e instanceof FS.ErrnoError) ||
                            abort(e),
                        -e.errno
                    );
                }
            }
            function ___syscall146(e, r) {
                SYSCALLS.varargs = r;
                try {
                    var i = (SYSCALLS.get(), SYSCALLS.get()),
                        n = SYSCALLS.get(),
                        t = 0;
                    ___syscall146.buffer || (___syscall146.buffer = []);
                    for (var o = ___syscall146.buffer, a = 0; a < n; a++) {
                        for (
                            var u = HEAP32[(i + 8 * a) >> 2],
                                s = HEAP32[(i + (8 * a + 4)) >> 2],
                                l = 0;
                            l < s;
                            l++
                        ) {
                            var f = HEAPU8[u + l];
                            0 === f || 10 === f
                                ? (Module.print(UTF8ArrayToString(o, 0)),
                                  (o.length = 0))
                                : o.push(f);
                        }
                        t += s;
                    }
                    return t;
                } catch (e) {
                    return (
                        ('undefined' != typeof FS &&
                            e instanceof FS.ErrnoError) ||
                            abort(e),
                        -e.errno
                    );
                }
            }
            function ___syscall54(e, r) {
                SYSCALLS.varargs = r;
                try {
                    return 0;
                } catch (e) {
                    return (
                        ('undefined' != typeof FS &&
                            e instanceof FS.ErrnoError) ||
                            abort(e),
                        -e.errno
                    );
                }
            }
            function invoke_iiii(e, r, i, n) {
                try {
                    return Module.dynCall_iiii(e, r, i, n);
                } catch (e) {
                    if ('number' != typeof e && 'longjmp' !== e) throw e;
                    asm.setThrew(1, 0);
                }
            }
            function invoke_viiiii(e, r, i, n, t, o) {
                try {
                    Module.dynCall_viiiii(e, r, i, n, t, o);
                } catch (e) {
                    if ('number' != typeof e && 'longjmp' !== e) throw e;
                    asm.setThrew(1, 0);
                }
            }
            function invoke_vi(e, r) {
                try {
                    Module.dynCall_vi(e, r);
                } catch (e) {
                    if ('number' != typeof e && 'longjmp' !== e) throw e;
                    asm.setThrew(1, 0);
                }
            }
            function invoke_ii(e, r) {
                try {
                    return Module.dynCall_ii(e, r);
                } catch (e) {
                    if ('number' != typeof e && 'longjmp' !== e) throw e;
                    asm.setThrew(1, 0);
                }
            }
            function invoke_viii(e, r, i, n) {
                try {
                    Module.dynCall_viii(e, r, i, n);
                } catch (e) {
                    if ('number' != typeof e && 'longjmp' !== e) throw e;
                    asm.setThrew(1, 0);
                }
            }
            function invoke_v(e) {
                try {
                    Module.dynCall_v(e);
                } catch (e) {
                    if ('number' != typeof e && 'longjmp' !== e) throw e;
                    asm.setThrew(1, 0);
                }
            }
            function invoke_viiiiii(e, r, i, n, t, o, a) {
                try {
                    Module.dynCall_viiiiii(e, r, i, n, t, o, a);
                } catch (e) {
                    if ('number' != typeof e && 'longjmp' !== e) throw e;
                    asm.setThrew(1, 0);
                }
            }
            function invoke_viiii(e, r, i, n, t) {
                try {
                    Module.dynCall_viiii(e, r, i, n, t);
                } catch (e) {
                    if ('number' != typeof e && 'longjmp' !== e) throw e;
                    asm.setThrew(1, 0);
                }
            }
            function ExitStatus(e) {
                (this.name = 'ExitStatus'),
                    (this.message = 'Program terminated with exit(' + e + ')'),
                    (this.status = e);
            }
            function run(e) {
                function r() {
                    Module.calledRun ||
                        ((Module.calledRun = !0),
                        ABORT ||
                            (ensureInitRuntime(),
                            preMain(),
                            Module.onRuntimeInitialized &&
                                Module.onRuntimeInitialized(),
                            Module._main && shouldRunNow && Module.callMain(e),
                            postRun()));
                }
                (e = e || Module.arguments),
                    null === preloadStartTime &&
                        (preloadStartTime = Date.now()),
                    runDependencies > 0 ||
                        (preRun(),
                        runDependencies > 0 ||
                            Module.calledRun ||
                            (Module.setStatus
                                ? (Module.setStatus('Running...'),
                                  setTimeout(function () {
                                      setTimeout(function () {
                                          Module.setStatus('');
                                      }, 1),
                                          r();
                                  }, 1))
                                : r()));
            }
            function exit(e, r) {
                if (!r || !Module.noExitRuntime)
                    throw (
                        (Module.noExitRuntime ||
                            ((ABORT = !0),
                            (EXITSTATUS = e),
                            (STACKTOP = initialStackTop),
                            exitRuntime(),
                            Module.onExit && Module.onExit(e)),
                        ENVIRONMENT_IS_NODE
                            ? (process.stdout.once('drain', function () {
                                  process.exit(e);
                              }),
                              console.log(' '),
                              setTimeout(function () {
                                  process.exit(e);
                              }, 500))
                            : ENVIRONMENT_IS_SHELL &&
                              'function' == typeof quit &&
                              quit(e),
                        new ExitStatus(e))
                    );
            }
            function abort(e) {
                void 0 !== e
                    ? (Module.print(e),
                      Module.printErr(e),
                      (e = JSON.stringify(e)))
                    : (e = ''),
                    (ABORT = !0),
                    (EXITSTATUS = 1);
                var r =
                    'abort(' +
                    e +
                    ') at ' +
                    stackTrace() +
                    '\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.';
                throw (
                    (abortDecorators &&
                        abortDecorators.forEach(function (i) {
                            r = i(r, e);
                        }),
                    r)
                );
            }
            var Module;
            Module || (Module = (void 0 !== Module ? Module : null) || {});
            var moduleOverrides = {};
            for (var key in Module)
                Module.hasOwnProperty(key) &&
                    (moduleOverrides[key] = Module[key]);
            var ENVIRONMENT_IS_WEB = 'object' == typeof window,
                ENVIRONMENT_IS_WORKER = 'function' == typeof importScripts,
                ENVIRONMENT_IS_NODE =
                    'object' == typeof process &&
                    'function' == typeof require &&
                    !ENVIRONMENT_IS_WEB &&
                    !ENVIRONMENT_IS_WORKER,
                ENVIRONMENT_IS_SHELL =
                    !ENVIRONMENT_IS_WEB &&
                    !ENVIRONMENT_IS_NODE &&
                    !ENVIRONMENT_IS_WORKER;
            if (ENVIRONMENT_IS_NODE) {
                Module.print ||
                    (Module.print = function (e) {
                        process.stdout.write(e + '\n');
                    }),
                    Module.printErr ||
                        (Module.printErr = function (e) {
                            process.stderr.write(e + '\n');
                        });
                var nodeFS = require('fs'),
                    nodePath = require('path');
                (Module.read = function (e, r) {
                    e = nodePath.normalize(e);
                    var i = nodeFS.readFileSync(e);
                    return (
                        i ||
                            e == nodePath.resolve(e) ||
                            ((e = path.join(__dirname, '..', 'src', e)),
                            (i = nodeFS.readFileSync(e))),
                        i && !r && (i = i.toString()),
                        i
                    );
                }),
                    (Module.readBinary = function (e) {
                        var r = Module.read(e, !0);
                        return (
                            r.buffer || (r = new Uint8Array(r)),
                            assert(r.buffer),
                            r
                        );
                    }),
                    (Module.load = function (e) {
                        globalEval(read(e));
                    }),
                    Module.thisProgram ||
                        (process.argv.length > 1
                            ? (Module.thisProgram = process.argv[1].replace(
                                  /\\/g,
                                  '/',
                              ))
                            : (Module.thisProgram = 'unknown-program')),
                    (Module.arguments = process.argv.slice(2)),
                    'undefined' != typeof module && (module.exports = Module),
                    process.on('uncaughtException', function (e) {
                        if (!(e instanceof ExitStatus)) throw e;
                    }),
                    (Module.inspect = function () {
                        return '[Emscripten Module object]';
                    });
            } else if (ENVIRONMENT_IS_SHELL)
                Module.print || (Module.print = print),
                    'undefined' != typeof printErr &&
                        (Module.printErr = printErr),
                    'undefined' != typeof read
                        ? (Module.read = read)
                        : (Module.read = function () {
                              throw 'no read() available (jsc?)';
                          }),
                    (Module.readBinary = function (e) {
                        if ('function' == typeof readbuffer)
                            return new Uint8Array(readbuffer(e));
                        var r = read(e, 'binary');
                        return assert('object' == typeof r), r;
                    }),
                    'undefined' != typeof scriptArgs
                        ? (Module.arguments = scriptArgs)
                        : void 0 !== arguments &&
                          (Module.arguments = arguments);
            else {
                if (!ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER)
                    throw 'Unknown runtime environment. Where are we?';
                if (
                    ((Module.read = function (e) {
                        var r = new XMLHttpRequest();
                        return (
                            r.open('GET', e, !1), r.send(null), r.responseText
                        );
                    }),
                    void 0 !== arguments && (Module.arguments = arguments),
                    'undefined' != typeof console)
                )
                    Module.print ||
                        (Module.print = function (e) {
                            console.log(e);
                        }),
                        Module.printErr ||
                            (Module.printErr = function (e) {
                                console.log(e);
                            });
                else {
                    var TRY_USE_DUMP = !1;
                    Module.print ||
                        (Module.print =
                            TRY_USE_DUMP && 'undefined' != typeof dump
                                ? function (e) {
                                      dump(e);
                                  }
                                : function (e) {});
                }
                ENVIRONMENT_IS_WORKER && (Module.load = importScripts),
                    void 0 === Module.setWindowTitle &&
                        (Module.setWindowTitle = function (e) {
                            document.title = e;
                        });
            }
            !Module.load &&
                Module.read &&
                (Module.load = function (e) {
                    globalEval(Module.read(e));
                }),
                Module.print || (Module.print = function () {}),
                Module.printErr || (Module.printErr = Module.print),
                Module.arguments || (Module.arguments = []),
                Module.thisProgram || (Module.thisProgram = './this.program'),
                (Module.print = Module.print),
                (Module.printErr = Module.printErr),
                (Module.preRun = []),
                (Module.postRun = []);
            for (var key in moduleOverrides)
                moduleOverrides.hasOwnProperty(key) &&
                    (Module[key] = moduleOverrides[key]);
            var Runtime = {
                setTempRet0: function (e) {
                    tempRet0 = e;
                },
                getTempRet0: function () {
                    return tempRet0;
                },
                stackSave: function () {
                    return STACKTOP;
                },
                stackRestore: function (e) {
                    STACKTOP = e;
                },
                getNativeTypeSize: function (e) {
                    switch (e) {
                        case 'i1':
                        case 'i8':
                            return 1;
                        case 'i16':
                            return 2;
                        case 'i32':
                            return 4;
                        case 'i64':
                            return 8;
                        case 'float':
                            return 4;
                        case 'double':
                            return 8;
                        default:
                            if ('*' === e[e.length - 1])
                                return Runtime.QUANTUM_SIZE;
                            if ('i' === e[0]) {
                                var r = parseInt(e.substr(1));
                                return assert(r % 8 == 0), r / 8;
                            }
                            return 0;
                    }
                },
                getNativeFieldSize: function (e) {
                    return Math.max(
                        Runtime.getNativeTypeSize(e),
                        Runtime.QUANTUM_SIZE,
                    );
                },
                STACK_ALIGN: 16,
                prepVararg: function (e, r) {
                    return (
                        'double' === r || 'i64' === r
                            ? 7 & e && (assert(4 == (7 & e)), (e += 4))
                            : assert(0 == (3 & e)),
                        e
                    );
                },
                getAlignSize: function (e, r, i) {
                    return i || ('i64' != e && 'double' != e)
                        ? e
                            ? Math.min(
                                  r || (e ? Runtime.getNativeFieldSize(e) : 0),
                                  Runtime.QUANTUM_SIZE,
                              )
                            : Math.min(r, 8)
                        : 8;
                },
                dynCall: function (e, r, i) {
                    return i && i.length
                        ? (i.splice || (i = Array.prototype.slice.call(i)),
                          i.splice(0, 0, r),
                          Module['dynCall_' + e].apply(null, i))
                        : Module['dynCall_' + e].call(null, r);
                },
                functionPointers: [],
                addFunction: function (e) {
                    for (var r = 0; r < Runtime.functionPointers.length; r++)
                        if (!Runtime.functionPointers[r])
                            return (
                                (Runtime.functionPointers[r] = e), 2 * (1 + r)
                            );
                    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
                },
                removeFunction: function (e) {
                    Runtime.functionPointers[(e - 2) / 2] = null;
                },
                warnOnce: function (e) {
                    Runtime.warnOnce.shown || (Runtime.warnOnce.shown = {}),
                        Runtime.warnOnce.shown[e] ||
                            ((Runtime.warnOnce.shown[e] = 1),
                            Module.printErr(e));
                },
                funcWrappers: {},
                getFuncWrapper: function (e, r) {
                    assert(r),
                        Runtime.funcWrappers[r] ||
                            (Runtime.funcWrappers[r] = {});
                    var i = Runtime.funcWrappers[r];
                    return (
                        i[e] ||
                            (i[e] = function () {
                                return Runtime.dynCall(r, e, arguments);
                            }),
                        i[e]
                    );
                },
                getCompilerSetting: function (e) {
                    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
                },
                stackAlloc: function (e) {
                    var r = STACKTOP;
                    return (
                        (STACKTOP = (STACKTOP + e) | 0),
                        (STACKTOP = (STACKTOP + 15) & -16),
                        r
                    );
                },
                staticAlloc: function (e) {
                    var r = STATICTOP;
                    return (
                        (STATICTOP = (STATICTOP + e) | 0),
                        (STATICTOP = (STATICTOP + 15) & -16),
                        r
                    );
                },
                dynamicAlloc: function (e) {
                    var r = DYNAMICTOP;
                    if (
                        ((DYNAMICTOP = (DYNAMICTOP + e) | 0),
                        (DYNAMICTOP = (DYNAMICTOP + 15) & -16) >= TOTAL_MEMORY)
                    ) {
                        if (!enlargeMemory()) return (DYNAMICTOP = r), 0;
                    }
                    return r;
                },
                alignMemory: function (e, r) {
                    return (e = Math.ceil(e / (r || 16)) * (r || 16));
                },
                makeBigInt: function (e, r, i) {
                    return i
                        ? +(e >>> 0) + 4294967296 * +(r >>> 0)
                        : +(e >>> 0) + 4294967296 * +(0 | r);
                },
                GLOBAL_BASE: 8,
                QUANTUM_SIZE: 4,
                __dummy__: 0,
            };
            Module.Runtime = Runtime;
            var __THREW__ = 0,
                ABORT = !1,
                EXITSTATUS = 0,
                undef = 0,
                tempValue,
                tempInt,
                tempBigInt,
                tempInt2,
                tempBigInt2,
                tempPair,
                tempBigIntI,
                tempBigIntR,
                tempBigIntS,
                tempBigIntP,
                tempBigIntD,
                tempDouble,
                tempFloat,
                tempI64,
                tempI64b,
                tempRet0,
                tempRet1,
                tempRet2,
                tempRet3,
                tempRet4,
                tempRet5,
                tempRet6,
                tempRet7,
                tempRet8,
                tempRet9,
                globalScope = this,
                cwrap,
                ccall;
            !(function () {
                function parseJSFunc(e) {
                    var r = e.toString().match(sourceRegex).slice(1);
                    return { arguments: r[0], body: r[1], returnValue: r[2] };
                }
                var JSfuncs = {
                        stackSave: function () {
                            Runtime.stackSave();
                        },
                        stackRestore: function () {
                            Runtime.stackRestore();
                        },
                        arrayToC: function (e) {
                            var r = Runtime.stackAlloc(e.length);
                            return writeArrayToMemory(e, r), r;
                        },
                        stringToC: function (e) {
                            var r = 0;
                            return (
                                null !== e &&
                                    void 0 !== e &&
                                    0 !== e &&
                                    ((r = Runtime.stackAlloc(
                                        1 + (e.length << 2),
                                    )),
                                    writeStringToMemory(e, r)),
                                r
                            );
                        },
                    },
                    toC = {
                        string: JSfuncs.stringToC,
                        array: JSfuncs.arrayToC,
                    };
                ccall = function (e, r, i, n, t) {
                    var o = getCFunc(e),
                        a = [],
                        u = 0;
                    if (n)
                        for (var s = 0; s < n.length; s++) {
                            var l = toC[i[s]];
                            l
                                ? (0 === u && (u = Runtime.stackSave()),
                                  (a[s] = l(n[s])))
                                : (a[s] = n[s]);
                        }
                    var f = o.apply(null, a);
                    if (
                        ('string' === r && (f = Pointer_stringify(f)), 0 !== u)
                    ) {
                        if (t && t.async)
                            return void EmterpreterAsync.asyncFinalizers.push(
                                function () {
                                    Runtime.stackRestore(u);
                                },
                            );
                        Runtime.stackRestore(u);
                    }
                    return f;
                };
                var sourceRegex =
                        /^function\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/,
                    JSsource = {};
                for (var fun in JSfuncs)
                    JSfuncs.hasOwnProperty(fun) &&
                        (JSsource[fun] = parseJSFunc(JSfuncs[fun]));
                cwrap = function cwrap(ident, returnType, argTypes) {
                    argTypes = argTypes || [];
                    var cfunc = getCFunc(ident),
                        numericArgs = argTypes.every(function (e) {
                            return 'number' === e;
                        }),
                        numericRet = 'string' !== returnType;
                    if (numericRet && numericArgs) return cfunc;
                    var argNames = argTypes.map(function (e, r) {
                            return '$' + r;
                        }),
                        funcstr = '(function(' + argNames.join(',') + ') {',
                        nargs = argTypes.length;
                    if (!numericArgs) {
                        funcstr +=
                            'var stack = ' + JSsource.stackSave.body + ';';
                        for (var i = 0; i < nargs; i++) {
                            var arg = argNames[i],
                                type = argTypes[i];
                            if ('number' !== type) {
                                var convertCode = JSsource[type + 'ToC'];
                                (funcstr +=
                                    'var ' +
                                    convertCode.arguments +
                                    ' = ' +
                                    arg +
                                    ';'),
                                    (funcstr += convertCode.body + ';'),
                                    (funcstr +=
                                        arg +
                                        '=' +
                                        convertCode.returnValue +
                                        ';');
                            }
                        }
                    }
                    var cfuncname = parseJSFunc(function () {
                        return cfunc;
                    }).returnValue;
                    if (
                        ((funcstr +=
                            'var ret = ' +
                            cfuncname +
                            '(' +
                            argNames.join(',') +
                            ');'),
                        !numericRet)
                    ) {
                        var strgfy = parseJSFunc(function () {
                            return Pointer_stringify;
                        }).returnValue;
                        funcstr += 'ret = ' + strgfy + '(ret);';
                    }
                    return (
                        numericArgs ||
                            (funcstr +=
                                JSsource.stackRestore.body.replace(
                                    '()',
                                    '(stack)',
                                ) + ';'),
                        (funcstr += 'return ret})'),
                        eval(funcstr)
                    );
                };
            })(),
                (Module.ccall = ccall),
                (Module.cwrap = cwrap),
                (Module.setValue = setValue),
                (Module.getValue = getValue);
            var ALLOC_NORMAL = 0,
                ALLOC_STACK = 1,
                ALLOC_STATIC = 2,
                ALLOC_DYNAMIC = 3,
                ALLOC_NONE = 4;
            (Module.ALLOC_NORMAL = ALLOC_NORMAL),
                (Module.ALLOC_STACK = ALLOC_STACK),
                (Module.ALLOC_STATIC = ALLOC_STATIC),
                (Module.ALLOC_DYNAMIC = ALLOC_DYNAMIC),
                (Module.ALLOC_NONE = ALLOC_NONE),
                (Module.allocate = allocate),
                (Module.getMemory = getMemory),
                (Module.Pointer_stringify = Pointer_stringify),
                (Module.AsciiToString = AsciiToString),
                (Module.stringToAscii = stringToAscii),
                (Module.UTF8ArrayToString = UTF8ArrayToString),
                (Module.UTF8ToString = UTF8ToString),
                (Module.stringToUTF8Array = stringToUTF8Array),
                (Module.stringToUTF8 = stringToUTF8),
                (Module.lengthBytesUTF8 = lengthBytesUTF8),
                (Module.UTF16ToString = UTF16ToString),
                (Module.stringToUTF16 = stringToUTF16),
                (Module.lengthBytesUTF16 = lengthBytesUTF16),
                (Module.UTF32ToString = UTF32ToString),
                (Module.stringToUTF32 = stringToUTF32),
                (Module.lengthBytesUTF32 = lengthBytesUTF32),
                (Module.stackTrace = stackTrace);
            var PAGE_SIZE = 4096,
                HEAP,
                HEAP8,
                HEAPU8,
                HEAP16,
                HEAPU16,
                HEAP32,
                HEAPU32,
                HEAPF32,
                HEAPF64,
                STATIC_BASE = 0,
                STATICTOP = 0,
                staticSealed = !1,
                STACK_BASE = 0,
                STACKTOP = 0,
                STACK_MAX = 0,
                DYNAMIC_BASE = 0,
                DYNAMICTOP = 0,
                byteLength;
            try {
                (byteLength = Function.prototype.call.bind(
                    Object.getOwnPropertyDescriptor(
                        ArrayBuffer.prototype,
                        'byteLength',
                    ).get,
                )),
                    byteLength(new ArrayBuffer(4));
            } catch (e) {
                byteLength = function (e) {
                    return e.byteLength;
                };
            }
            for (
                var TOTAL_STACK = Module.TOTAL_STACK || 5242880,
                    TOTAL_MEMORY = Module.TOTAL_MEMORY || 16777216,
                    totalMemory = 65536;
                totalMemory < TOTAL_MEMORY || totalMemory < 2 * TOTAL_STACK;

            )
                totalMemory < 16777216
                    ? (totalMemory *= 2)
                    : (totalMemory += 16777216);
            (totalMemory = Math.max(totalMemory, 16777216)),
                totalMemory !== TOTAL_MEMORY && (TOTAL_MEMORY = totalMemory),
                assert(
                    'undefined' != typeof Int32Array &&
                        'undefined' != typeof Float64Array &&
                        !!new Int32Array(1).subarray &&
                        !!new Int32Array(1).set,
                    'JS engine does not provide full typed array support',
                );
            var buffer;
            (buffer = new ArrayBuffer(TOTAL_MEMORY)),
                (HEAP8 = new Int8Array(buffer)),
                (HEAP16 = new Int16Array(buffer)),
                (HEAP32 = new Int32Array(buffer)),
                (HEAPU8 = new Uint8Array(buffer)),
                (HEAPU16 = new Uint16Array(buffer)),
                (HEAPU32 = new Uint32Array(buffer)),
                (HEAPF32 = new Float32Array(buffer)),
                (HEAPF64 = new Float64Array(buffer)),
                (HEAP32[0] = 255),
                assert(
                    255 === HEAPU8[0] && 0 === HEAPU8[3],
                    'Typed arrays 2 must be run on a little-endian system',
                ),
                (Module.HEAP = HEAP),
                (Module.buffer = buffer),
                (Module.HEAP8 = HEAP8),
                (Module.HEAP16 = HEAP16),
                (Module.HEAP32 = HEAP32),
                (Module.HEAPU8 = HEAPU8),
                (Module.HEAPU16 = HEAPU16),
                (Module.HEAPU32 = HEAPU32),
                (Module.HEAPF32 = HEAPF32),
                (Module.HEAPF64 = HEAPF64);
            var __ATPRERUN__ = [],
                __ATINIT__ = [],
                __ATMAIN__ = [],
                __ATEXIT__ = [],
                __ATPOSTRUN__ = [],
                runtimeInitialized = !1,
                runtimeExited = !1;
            (Module.addOnPreRun = addOnPreRun),
                (Module.addOnInit = addOnInit),
                (Module.addOnPreMain = addOnPreMain),
                (Module.addOnExit = addOnExit),
                (Module.addOnPostRun = addOnPostRun),
                (Module.intArrayFromString = intArrayFromString),
                (Module.intArrayToString = intArrayToString),
                (Module.writeStringToMemory = writeStringToMemory),
                (Module.writeArrayToMemory = writeArrayToMemory),
                (Module.writeAsciiToMemory = writeAsciiToMemory),
                (Math.imul && -5 === Math.imul(4294967295, 5)) ||
                    (Math.imul = function (e, r) {
                        var i = e >>> 16,
                            n = 65535 & e,
                            t = r >>> 16,
                            o = 65535 & r;
                        return (n * o + ((i * o + n * t) << 16)) | 0;
                    }),
                (Math.imul = Math.imul),
                Math.clz32 ||
                    (Math.clz32 = function (e) {
                        e >>>= 0;
                        for (var r = 0; r < 32; r++)
                            if (e & (1 << (31 - r))) return r;
                        return 32;
                    }),
                (Math.clz32 = Math.clz32);
            var Math_abs = Math.abs,
                Math_cos = Math.cos,
                Math_sin = Math.sin,
                Math_tan = Math.tan,
                Math_acos = Math.acos,
                Math_asin = Math.asin,
                Math_atan = Math.atan,
                Math_atan2 = Math.atan2,
                Math_exp = Math.exp,
                Math_log = Math.log,
                Math_sqrt = Math.sqrt,
                Math_ceil = Math.ceil,
                Math_floor = Math.floor,
                Math_pow = Math.pow,
                Math_imul = Math.imul,
                Math_fround = Math.fround,
                Math_min = Math.min,
                Math_clz32 = Math.clz32,
                runDependencies = 0,
                runDependencyWatcher = null,
                dependenciesFulfilled = null;
            (Module.addRunDependency = addRunDependency),
                (Module.removeRunDependency = removeRunDependency),
                (Module.preloadedImages = {}),
                (Module.preloadedAudios = {});
            var memoryInitializer = null,
                ASM_CONSTS = [];
            (STATIC_BASE = 8),
                (STATICTOP = STATIC_BASE + 5888),
                __ATINIT__.push(),
                allocate(
                    [
                        116, 0, 0, 0, 86, 7, 0, 0, 116, 0, 0, 0, 99, 7, 0, 0,
                        156, 0, 0, 0, 112, 7, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0,
                        156, 0, 0, 0, 145, 7, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0,
                        156, 0, 0, 0, 215, 7, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0,
                        156, 0, 0, 0, 179, 7, 0, 0, 56, 0, 0, 0, 0, 0, 0, 0,
                        156, 0, 0, 0, 249, 7, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 1,
                        0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0,
                        0, 3, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0,
                        0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 0, 1, 0, 0, 0,
                        5, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0,
                        0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 108, 1, 0, 0, 220, 1, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255,
                        255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                        0, 0, 0, 4, 0, 0, 0, 227, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 255, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 219, 16, 0, 0, 0, 4, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 10, 255, 255, 255, 255, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 37, 115, 40, 37, 117, 41, 58,
                        32, 65, 115, 115, 101, 114, 116, 105, 111, 110, 32, 102,
                        97, 105, 108, 117, 114, 101, 58, 32, 34, 37, 115, 34,
                        10, 0, 109, 95, 115, 105, 122, 101, 32, 60, 61, 32, 109,
                        95, 99, 97, 112, 97, 99, 105, 116, 121, 0, 46, 47, 105,
                        110, 99, 92, 99, 114, 110, 95, 100, 101, 99, 111, 109,
                        112, 46, 104, 0, 109, 105, 110, 95, 110, 101, 119, 95,
                        99, 97, 112, 97, 99, 105, 116, 121, 32, 60, 32, 40, 48,
                        120, 55, 70, 70, 70, 48, 48, 48, 48, 85, 32, 47, 32,
                        101, 108, 101, 109, 101, 110, 116, 95, 115, 105, 122,
                        101, 41, 0, 110, 101, 119, 95, 99, 97, 112, 97, 99, 105,
                        116, 121, 32, 38, 38, 32, 40, 110, 101, 119, 95, 99, 97,
                        112, 97, 99, 105, 116, 121, 32, 62, 32, 109, 95, 99, 97,
                        112, 97, 99, 105, 116, 121, 41, 0, 110, 117, 109, 95,
                        99, 111, 100, 101, 115, 91, 99, 93, 0, 115, 111, 114,
                        116, 101, 100, 95, 112, 111, 115, 32, 60, 32, 116, 111,
                        116, 97, 108, 95, 117, 115, 101, 100, 95, 115, 121, 109,
                        115, 0, 112, 67, 111, 100, 101, 115, 105, 122, 101, 115,
                        91, 115, 121, 109, 95, 105, 110, 100, 101, 120, 93, 32,
                        61, 61, 32, 99, 111, 100, 101, 115, 105, 122, 101, 0,
                        116, 32, 60, 32, 40, 49, 85, 32, 60, 60, 32, 116, 97,
                        98, 108, 101, 95, 98, 105, 116, 115, 41, 0, 109, 95,
                        108, 111, 111, 107, 117, 112, 91, 116, 93, 32, 61, 61,
                        32, 99, 85, 73, 78, 84, 51, 50, 95, 77, 65, 88, 0, 99,
                        114, 110, 100, 95, 109, 97, 108, 108, 111, 99, 58, 32,
                        115, 105, 122, 101, 32, 116, 111, 111, 32, 98, 105, 103,
                        0, 99, 114, 110, 100, 95, 109, 97, 108, 108, 111, 99,
                        58, 32, 111, 117, 116, 32, 111, 102, 32, 109, 101, 109,
                        111, 114, 121, 0, 40, 40, 117, 105, 110, 116, 51, 50,
                        41, 112, 95, 110, 101, 119, 32, 38, 32, 40, 67, 82, 78,
                        68, 95, 77, 73, 78, 95, 65, 76, 76, 79, 67, 95, 65, 76,
                        73, 71, 78, 77, 69, 78, 84, 32, 45, 32, 49, 41, 41, 32,
                        61, 61, 32, 48, 0, 99, 114, 110, 100, 95, 114, 101, 97,
                        108, 108, 111, 99, 58, 32, 98, 97, 100, 32, 112, 116,
                        114, 0, 99, 114, 110, 100, 95, 102, 114, 101, 101, 58,
                        32, 98, 97, 100, 32, 112, 116, 114, 0, 102, 97, 108,
                        115, 101, 0, 40, 116, 111, 116, 97, 108, 95, 115, 121,
                        109, 115, 32, 62, 61, 32, 49, 41, 32, 38, 38, 32, 40,
                        116, 111, 116, 97, 108, 95, 115, 121, 109, 115, 32, 60,
                        61, 32, 112, 114, 101, 102, 105, 120, 95, 99, 111, 100,
                        105, 110, 103, 58, 58, 99, 77, 97, 120, 83, 117, 112,
                        112, 111, 114, 116, 101, 100, 83, 121, 109, 115, 41, 0,
                        17, 18, 19, 20, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13,
                        2, 14, 1, 15, 16, 48, 0, 110, 117, 109, 95, 98, 105,
                        116, 115, 32, 60, 61, 32, 51, 50, 85, 0, 109, 95, 98,
                        105, 116, 95, 99, 111, 117, 110, 116, 32, 60, 61, 32,
                        99, 66, 105, 116, 66, 117, 102, 83, 105, 122, 101, 0,
                        116, 32, 33, 61, 32, 99, 85, 73, 78, 84, 51, 50, 95, 77,
                        65, 88, 0, 109, 111, 100, 101, 108, 46, 109, 95, 99,
                        111, 100, 101, 95, 115, 105, 122, 101, 115, 91, 115,
                        121, 109, 93, 32, 61, 61, 32, 108, 101, 110, 0, 0, 2, 3,
                        1, 0, 2, 3, 4, 5, 6, 7, 1, 40, 108, 101, 110, 32, 62,
                        61, 32, 49, 41, 32, 38, 38, 32, 40, 108, 101, 110, 32,
                        60, 61, 32, 99, 77, 97, 120, 69, 120, 112, 101, 99, 116,
                        101, 100, 67, 111, 100, 101, 83, 105, 122, 101, 41, 0,
                        105, 32, 60, 32, 109, 95, 115, 105, 122, 101, 0, 110,
                        101, 120, 116, 95, 108, 101, 118, 101, 108, 95, 111,
                        102, 115, 32, 62, 32, 99, 117, 114, 95, 108, 101, 118,
                        101, 108, 95, 111, 102, 115, 0, 1, 2, 2, 3, 3, 3, 3, 4,
                        0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 2, 1, 2, 0,
                        0, 0, 1, 0, 2, 1, 0, 2, 0, 0, 1, 2, 3, 110, 117, 109,
                        32, 38, 38, 32, 40, 110, 117, 109, 32, 61, 61, 32, 126,
                        110, 117, 109, 95, 99, 104, 101, 99, 107, 41, 0, 83,
                        116, 57, 101, 120, 99, 101, 112, 116, 105, 111, 110, 0,
                        83, 116, 57, 116, 121, 112, 101, 95, 105, 110, 102, 111,
                        0, 78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118,
                        49, 49, 54, 95, 95, 115, 104, 105, 109, 95, 116, 121,
                        112, 101, 95, 105, 110, 102, 111, 69, 0, 78, 49, 48, 95,
                        95, 99, 120, 120, 97, 98, 105, 118, 49, 49, 55, 95, 95,
                        99, 108, 97, 115, 115, 95, 116, 121, 112, 101, 95, 105,
                        110, 102, 111, 69, 0, 78, 49, 48, 95, 95, 99, 120, 120,
                        97, 98, 105, 118, 49, 49, 57, 95, 95, 112, 111, 105,
                        110, 116, 101, 114, 95, 116, 121, 112, 101, 95, 105,
                        110, 102, 111, 69, 0, 78, 49, 48, 95, 95, 99, 120, 120,
                        97, 98, 105, 118, 49, 49, 55, 95, 95, 112, 98, 97, 115,
                        101, 95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69,
                        0, 78, 49, 48, 95, 95, 99, 120, 120, 97, 98, 105, 118,
                        49, 50, 48, 95, 95, 115, 105, 95, 99, 108, 97, 115, 115,
                        95, 116, 121, 112, 101, 95, 105, 110, 102, 111, 69, 0,
                        112, 116, 104, 114, 101, 97, 100, 95, 111, 110, 99, 101,
                        32, 102, 97, 105, 108, 117, 114, 101, 32, 105, 110, 32,
                        95, 95, 99, 120, 97, 95, 103, 101, 116, 95, 103, 108,
                        111, 98, 97, 108, 115, 95, 102, 97, 115, 116, 40, 41, 0,
                        116, 101, 114, 109, 105, 110, 97, 116, 101, 95, 104, 97,
                        110, 100, 108, 101, 114, 32, 117, 110, 101, 120, 112,
                        101, 99, 116, 101, 100, 108, 121, 32, 114, 101, 116,
                        117, 114, 110, 101, 100, 0, 99, 97, 110, 110, 111, 116,
                        32, 99, 114, 101, 97, 116, 101, 32, 112, 116, 104, 114,
                        101, 97, 100, 32, 107, 101, 121, 32, 102, 111, 114, 32,
                        95, 95, 99, 120, 97, 95, 103, 101, 116, 95, 103, 108,
                        111, 98, 97, 108, 115, 40, 41, 0, 99, 97, 110, 110, 111,
                        116, 32, 122, 101, 114, 111, 32, 111, 117, 116, 32, 116,
                        104, 114, 101, 97, 100, 32, 118, 97, 108, 117, 101, 32,
                        102, 111, 114, 32, 95, 95, 99, 120, 97, 95, 103, 101,
                        116, 95, 103, 108, 111, 98, 97, 108, 115, 40, 41, 0,
                        116, 101, 114, 109, 105, 110, 97, 116, 105, 110, 103,
                        32, 119, 105, 116, 104, 32, 37, 115, 32, 101, 120, 99,
                        101, 112, 116, 105, 111, 110, 32, 111, 102, 32, 116,
                        121, 112, 101, 32, 37, 115, 58, 32, 37, 115, 0, 116,
                        101, 114, 109, 105, 110, 97, 116, 105, 110, 103, 32,
                        119, 105, 116, 104, 32, 37, 115, 32, 101, 120, 99, 101,
                        112, 116, 105, 111, 110, 32, 111, 102, 32, 116, 121,
                        112, 101, 32, 37, 115, 0, 116, 101, 114, 109, 105, 110,
                        97, 116, 105, 110, 103, 32, 119, 105, 116, 104, 32, 37,
                        115, 32, 102, 111, 114, 101, 105, 103, 110, 32, 101,
                        120, 99, 101, 112, 116, 105, 111, 110, 0, 116, 101, 114,
                        109, 105, 110, 97, 116, 105, 110, 103, 0, 117, 110, 99,
                        97, 117, 103, 104, 116, 0, 84, 33, 34, 25, 13, 1, 2, 3,
                        17, 75, 28, 12, 16, 4, 11, 29, 18, 30, 39, 104, 110,
                        111, 112, 113, 98, 32, 5, 6, 15, 19, 20, 21, 26, 8, 22,
                        7, 40, 36, 23, 24, 9, 10, 14, 27, 31, 37, 35, 131, 130,
                        125, 38, 42, 43, 60, 61, 62, 63, 67, 71, 74, 77, 88, 89,
                        90, 91, 92, 93, 94, 95, 96, 97, 99, 100, 101, 102, 103,
                        105, 106, 107, 108, 114, 115, 116, 121, 122, 123, 124,
                        0, 73, 108, 108, 101, 103, 97, 108, 32, 98, 121, 116,
                        101, 32, 115, 101, 113, 117, 101, 110, 99, 101, 0, 68,
                        111, 109, 97, 105, 110, 32, 101, 114, 114, 111, 114, 0,
                        82, 101, 115, 117, 108, 116, 32, 110, 111, 116, 32, 114,
                        101, 112, 114, 101, 115, 101, 110, 116, 97, 98, 108,
                        101, 0, 78, 111, 116, 32, 97, 32, 116, 116, 121, 0, 80,
                        101, 114, 109, 105, 115, 115, 105, 111, 110, 32, 100,
                        101, 110, 105, 101, 100, 0, 79, 112, 101, 114, 97, 116,
                        105, 111, 110, 32, 110, 111, 116, 32, 112, 101, 114,
                        109, 105, 116, 116, 101, 100, 0, 78, 111, 32, 115, 117,
                        99, 104, 32, 102, 105, 108, 101, 32, 111, 114, 32, 100,
                        105, 114, 101, 99, 116, 111, 114, 121, 0, 78, 111, 32,
                        115, 117, 99, 104, 32, 112, 114, 111, 99, 101, 115, 115,
                        0, 70, 105, 108, 101, 32, 101, 120, 105, 115, 116, 115,
                        0, 86, 97, 108, 117, 101, 32, 116, 111, 111, 32, 108,
                        97, 114, 103, 101, 32, 102, 111, 114, 32, 100, 97, 116,
                        97, 32, 116, 121, 112, 101, 0, 78, 111, 32, 115, 112,
                        97, 99, 101, 32, 108, 101, 102, 116, 32, 111, 110, 32,
                        100, 101, 118, 105, 99, 101, 0, 79, 117, 116, 32, 111,
                        102, 32, 109, 101, 109, 111, 114, 121, 0, 82, 101, 115,
                        111, 117, 114, 99, 101, 32, 98, 117, 115, 121, 0, 73,
                        110, 116, 101, 114, 114, 117, 112, 116, 101, 100, 32,
                        115, 121, 115, 116, 101, 109, 32, 99, 97, 108, 108, 0,
                        82, 101, 115, 111, 117, 114, 99, 101, 32, 116, 101, 109,
                        112, 111, 114, 97, 114, 105, 108, 121, 32, 117, 110, 97,
                        118, 97, 105, 108, 97, 98, 108, 101, 0, 73, 110, 118,
                        97, 108, 105, 100, 32, 115, 101, 101, 107, 0, 67, 114,
                        111, 115, 115, 45, 100, 101, 118, 105, 99, 101, 32, 108,
                        105, 110, 107, 0, 82, 101, 97, 100, 45, 111, 110, 108,
                        121, 32, 102, 105, 108, 101, 32, 115, 121, 115, 116,
                        101, 109, 0, 68, 105, 114, 101, 99, 116, 111, 114, 121,
                        32, 110, 111, 116, 32, 101, 109, 112, 116, 121, 0, 67,
                        111, 110, 110, 101, 99, 116, 105, 111, 110, 32, 114,
                        101, 115, 101, 116, 32, 98, 121, 32, 112, 101, 101, 114,
                        0, 79, 112, 101, 114, 97, 116, 105, 111, 110, 32, 116,
                        105, 109, 101, 100, 32, 111, 117, 116, 0, 67, 111, 110,
                        110, 101, 99, 116, 105, 111, 110, 32, 114, 101, 102,
                        117, 115, 101, 100, 0, 72, 111, 115, 116, 32, 105, 115,
                        32, 100, 111, 119, 110, 0, 72, 111, 115, 116, 32, 105,
                        115, 32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108,
                        101, 0, 65, 100, 100, 114, 101, 115, 115, 32, 105, 110,
                        32, 117, 115, 101, 0, 66, 114, 111, 107, 101, 110, 32,
                        112, 105, 112, 101, 0, 73, 47, 79, 32, 101, 114, 114,
                        111, 114, 0, 78, 111, 32, 115, 117, 99, 104, 32, 100,
                        101, 118, 105, 99, 101, 32, 111, 114, 32, 97, 100, 100,
                        114, 101, 115, 115, 0, 66, 108, 111, 99, 107, 32, 100,
                        101, 118, 105, 99, 101, 32, 114, 101, 113, 117, 105,
                        114, 101, 100, 0, 78, 111, 32, 115, 117, 99, 104, 32,
                        100, 101, 118, 105, 99, 101, 0, 78, 111, 116, 32, 97,
                        32, 100, 105, 114, 101, 99, 116, 111, 114, 121, 0, 73,
                        115, 32, 97, 32, 100, 105, 114, 101, 99, 116, 111, 114,
                        121, 0, 84, 101, 120, 116, 32, 102, 105, 108, 101, 32,
                        98, 117, 115, 121, 0, 69, 120, 101, 99, 32, 102, 111,
                        114, 109, 97, 116, 32, 101, 114, 114, 111, 114, 0, 73,
                        110, 118, 97, 108, 105, 100, 32, 97, 114, 103, 117, 109,
                        101, 110, 116, 0, 65, 114, 103, 117, 109, 101, 110, 116,
                        32, 108, 105, 115, 116, 32, 116, 111, 111, 32, 108, 111,
                        110, 103, 0, 83, 121, 109, 98, 111, 108, 105, 99, 32,
                        108, 105, 110, 107, 32, 108, 111, 111, 112, 0, 70, 105,
                        108, 101, 110, 97, 109, 101, 32, 116, 111, 111, 32, 108,
                        111, 110, 103, 0, 84, 111, 111, 32, 109, 97, 110, 121,
                        32, 111, 112, 101, 110, 32, 102, 105, 108, 101, 115, 32,
                        105, 110, 32, 115, 121, 115, 116, 101, 109, 0, 78, 111,
                        32, 102, 105, 108, 101, 32, 100, 101, 115, 99, 114, 105,
                        112, 116, 111, 114, 115, 32, 97, 118, 97, 105, 108, 97,
                        98, 108, 101, 0, 66, 97, 100, 32, 102, 105, 108, 101,
                        32, 100, 101, 115, 99, 114, 105, 112, 116, 111, 114, 0,
                        78, 111, 32, 99, 104, 105, 108, 100, 32, 112, 114, 111,
                        99, 101, 115, 115, 0, 66, 97, 100, 32, 97, 100, 100,
                        114, 101, 115, 115, 0, 70, 105, 108, 101, 32, 116, 111,
                        111, 32, 108, 97, 114, 103, 101, 0, 84, 111, 111, 32,
                        109, 97, 110, 121, 32, 108, 105, 110, 107, 115, 0, 78,
                        111, 32, 108, 111, 99, 107, 115, 32, 97, 118, 97, 105,
                        108, 97, 98, 108, 101, 0, 82, 101, 115, 111, 117, 114,
                        99, 101, 32, 100, 101, 97, 100, 108, 111, 99, 107, 32,
                        119, 111, 117, 108, 100, 32, 111, 99, 99, 117, 114, 0,
                        83, 116, 97, 116, 101, 32, 110, 111, 116, 32, 114, 101,
                        99, 111, 118, 101, 114, 97, 98, 108, 101, 0, 80, 114,
                        101, 118, 105, 111, 117, 115, 32, 111, 119, 110, 101,
                        114, 32, 100, 105, 101, 100, 0, 79, 112, 101, 114, 97,
                        116, 105, 111, 110, 32, 99, 97, 110, 99, 101, 108, 101,
                        100, 0, 70, 117, 110, 99, 116, 105, 111, 110, 32, 110,
                        111, 116, 32, 105, 109, 112, 108, 101, 109, 101, 110,
                        116, 101, 100, 0, 78, 111, 32, 109, 101, 115, 115, 97,
                        103, 101, 32, 111, 102, 32, 100, 101, 115, 105, 114,
                        101, 100, 32, 116, 121, 112, 101, 0, 73, 100, 101, 110,
                        116, 105, 102, 105, 101, 114, 32, 114, 101, 109, 111,
                        118, 101, 100, 0, 68, 101, 118, 105, 99, 101, 32, 110,
                        111, 116, 32, 97, 32, 115, 116, 114, 101, 97, 109, 0,
                        78, 111, 32, 100, 97, 116, 97, 32, 97, 118, 97, 105,
                        108, 97, 98, 108, 101, 0, 68, 101, 118, 105, 99, 101,
                        32, 116, 105, 109, 101, 111, 117, 116, 0, 79, 117, 116,
                        32, 111, 102, 32, 115, 116, 114, 101, 97, 109, 115, 32,
                        114, 101, 115, 111, 117, 114, 99, 101, 115, 0, 76, 105,
                        110, 107, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32,
                        115, 101, 118, 101, 114, 101, 100, 0, 80, 114, 111, 116,
                        111, 99, 111, 108, 32, 101, 114, 114, 111, 114, 0, 66,
                        97, 100, 32, 109, 101, 115, 115, 97, 103, 101, 0, 70,
                        105, 108, 101, 32, 100, 101, 115, 99, 114, 105, 112,
                        116, 111, 114, 32, 105, 110, 32, 98, 97, 100, 32, 115,
                        116, 97, 116, 101, 0, 78, 111, 116, 32, 97, 32, 115,
                        111, 99, 107, 101, 116, 0, 68, 101, 115, 116, 105, 110,
                        97, 116, 105, 111, 110, 32, 97, 100, 100, 114, 101, 115,
                        115, 32, 114, 101, 113, 117, 105, 114, 101, 100, 0, 77,
                        101, 115, 115, 97, 103, 101, 32, 116, 111, 111, 32, 108,
                        97, 114, 103, 101, 0, 80, 114, 111, 116, 111, 99, 111,
                        108, 32, 119, 114, 111, 110, 103, 32, 116, 121, 112,
                        101, 32, 102, 111, 114, 32, 115, 111, 99, 107, 101, 116,
                        0, 80, 114, 111, 116, 111, 99, 111, 108, 32, 110, 111,
                        116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101, 0, 80,
                        114, 111, 116, 111, 99, 111, 108, 32, 110, 111, 116, 32,
                        115, 117, 112, 112, 111, 114, 116, 101, 100, 0, 83, 111,
                        99, 107, 101, 116, 32, 116, 121, 112, 101, 32, 110, 111,
                        116, 32, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0,
                        78, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116,
                        101, 100, 0, 80, 114, 111, 116, 111, 99, 111, 108, 32,
                        102, 97, 109, 105, 108, 121, 32, 110, 111, 116, 32, 115,
                        117, 112, 112, 111, 114, 116, 101, 100, 0, 65, 100, 100,
                        114, 101, 115, 115, 32, 102, 97, 109, 105, 108, 121, 32,
                        110, 111, 116, 32, 115, 117, 112, 112, 111, 114, 116,
                        101, 100, 32, 98, 121, 32, 112, 114, 111, 116, 111, 99,
                        111, 108, 0, 65, 100, 100, 114, 101, 115, 115, 32, 110,
                        111, 116, 32, 97, 118, 97, 105, 108, 97, 98, 108, 101,
                        0, 78, 101, 116, 119, 111, 114, 107, 32, 105, 115, 32,
                        100, 111, 119, 110, 0, 78, 101, 116, 119, 111, 114, 107,
                        32, 117, 110, 114, 101, 97, 99, 104, 97, 98, 108, 101,
                        0, 67, 111, 110, 110, 101, 99, 116, 105, 111, 110, 32,
                        114, 101, 115, 101, 116, 32, 98, 121, 32, 110, 101, 116,
                        119, 111, 114, 107, 0, 67, 111, 110, 110, 101, 99, 116,
                        105, 111, 110, 32, 97, 98, 111, 114, 116, 101, 100, 0,
                        78, 111, 32, 98, 117, 102, 102, 101, 114, 32, 115, 112,
                        97, 99, 101, 32, 97, 118, 97, 105, 108, 97, 98, 108,
                        101, 0, 83, 111, 99, 107, 101, 116, 32, 105, 115, 32,
                        99, 111, 110, 110, 101, 99, 116, 101, 100, 0, 83, 111,
                        99, 107, 101, 116, 32, 110, 111, 116, 32, 99, 111, 110,
                        110, 101, 99, 116, 101, 100, 0, 67, 97, 110, 110, 111,
                        116, 32, 115, 101, 110, 100, 32, 97, 102, 116, 101, 114,
                        32, 115, 111, 99, 107, 101, 116, 32, 115, 104, 117, 116,
                        100, 111, 119, 110, 0, 79, 112, 101, 114, 97, 116, 105,
                        111, 110, 32, 97, 108, 114, 101, 97, 100, 121, 32, 105,
                        110, 32, 112, 114, 111, 103, 114, 101, 115, 115, 0, 79,
                        112, 101, 114, 97, 116, 105, 111, 110, 32, 105, 110, 32,
                        112, 114, 111, 103, 114, 101, 115, 115, 0, 83, 116, 97,
                        108, 101, 32, 102, 105, 108, 101, 32, 104, 97, 110, 100,
                        108, 101, 0, 82, 101, 109, 111, 116, 101, 32, 73, 47,
                        79, 32, 101, 114, 114, 111, 114, 0, 81, 117, 111, 116,
                        97, 32, 101, 120, 99, 101, 101, 100, 101, 100, 0, 78,
                        111, 32, 109, 101, 100, 105, 117, 109, 32, 102, 111,
                        117, 110, 100, 0, 87, 114, 111, 110, 103, 32, 109, 101,
                        100, 105, 117, 109, 32, 116, 121, 112, 101, 0, 78, 111,
                        32, 101, 114, 114, 111, 114, 32, 105, 110, 102, 111,
                        114, 109, 97, 116, 105, 111, 110, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 10, 0, 17, 17, 17, 0,
                        0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 11, 0, 0,
                        0, 0, 0, 0, 0, 0, 17, 0, 15, 10, 17, 17, 17, 3, 10, 7,
                        0, 1, 19, 9, 11, 11, 0, 0, 9, 6, 11, 0, 0, 11, 0, 6, 17,
                        0, 0, 0, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 10, 10,
                        17, 17, 17, 0, 10, 0, 0, 2, 0, 9, 11, 0, 0, 0, 9, 0, 11,
                        0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9, 12, 0, 0,
                        0, 0, 0, 12, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 13, 0, 0, 0, 4, 13, 0, 0, 0, 0,
                        9, 14, 0, 0, 0, 0, 0, 14, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 15,
                        0, 0, 0, 0, 9, 16, 0, 0, 0, 0, 0, 16, 0, 0, 16, 0, 0,
                        18, 0, 0, 0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0,
                        0, 18, 18, 18, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 10, 0, 0, 0, 0, 10, 0, 0, 0, 0, 9, 11, 0, 0, 0,
                        0, 0, 11, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0,
                        0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 12, 0, 0, 0, 0, 9,
                        12, 0, 0, 0, 0, 0, 12, 0, 0, 12, 0, 0, 48, 49, 50, 51,
                        52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 45, 43,
                        32, 32, 32, 48, 88, 48, 120, 0, 40, 110, 117, 108, 108,
                        41, 0, 45, 48, 88, 43, 48, 88, 32, 48, 88, 45, 48, 120,
                        43, 48, 120, 32, 48, 120, 0, 105, 110, 102, 0, 73, 78,
                        70, 0, 110, 97, 110, 0, 78, 65, 78, 0, 46, 0,
                    ],
                    'i8',
                    ALLOC_NONE,
                    Runtime.GLOBAL_BASE,
                );
            var tempDoublePtr = Runtime.alignMemory(
                allocate(12, 'i8', ALLOC_STATIC),
                8,
            );
            assert(tempDoublePtr % 8 == 0);
            var _BDtoIHigh = !0;
            (Module._i64Subtract = _i64Subtract),
                (Module._i64Add = _i64Add),
                (Module._memset = _memset);
            var _BDtoILow = !0;
            (Module._bitshift64Lshr = _bitshift64Lshr),
                (Module._bitshift64Shl = _bitshift64Shl);
            var EXCEPTIONS = {
                last: 0,
                caught: [],
                infos: {},
                deAdjust: function (e) {
                    if (!e || EXCEPTIONS.infos[e]) return e;
                    for (var r in EXCEPTIONS.infos) {
                        if (EXCEPTIONS.infos[r].adjusted === e) return r;
                    }
                    return e;
                },
                addRef: function (e) {
                    if (e) {
                        EXCEPTIONS.infos[e].refcount++;
                    }
                },
                decRef: function (e) {
                    if (e) {
                        var r = EXCEPTIONS.infos[e];
                        assert(r.refcount > 0),
                            r.refcount--,
                            0 === r.refcount &&
                                (r.destructor &&
                                    Runtime.dynCall('vi', r.destructor, [e]),
                                delete EXCEPTIONS.infos[e],
                                ___cxa_free_exception(e));
                    }
                },
                clearRef: function (e) {
                    if (e) {
                        EXCEPTIONS.infos[e].refcount = 0;
                    }
                },
            };
            Module._memcpy = _memcpy;
            var SYSCALLS = {
                    varargs: 0,
                    get: function (e) {
                        return (
                            (SYSCALLS.varargs += 4),
                            HEAP32[(SYSCALLS.varargs - 4) >> 2]
                        );
                    },
                    getStr: function () {
                        return Pointer_stringify(SYSCALLS.get());
                    },
                    get64: function () {
                        var e = SYSCALLS.get(),
                            r = SYSCALLS.get();
                        return assert(e >= 0 ? 0 === r : -1 === r), e;
                    },
                    getZero: function () {
                        assert(0 === SYSCALLS.get());
                    },
                },
                PTHREAD_SPECIFIC = {},
                ERRNO_CODES = {
                    EPERM: 1,
                    ENOENT: 2,
                    ESRCH: 3,
                    EINTR: 4,
                    EIO: 5,
                    ENXIO: 6,
                    E2BIG: 7,
                    ENOEXEC: 8,
                    EBADF: 9,
                    ECHILD: 10,
                    EAGAIN: 11,
                    EWOULDBLOCK: 11,
                    ENOMEM: 12,
                    EACCES: 13,
                    EFAULT: 14,
                    ENOTBLK: 15,
                    EBUSY: 16,
                    EEXIST: 17,
                    EXDEV: 18,
                    ENODEV: 19,
                    ENOTDIR: 20,
                    EISDIR: 21,
                    EINVAL: 22,
                    ENFILE: 23,
                    EMFILE: 24,
                    ENOTTY: 25,
                    ETXTBSY: 26,
                    EFBIG: 27,
                    ENOSPC: 28,
                    ESPIPE: 29,
                    EROFS: 30,
                    EMLINK: 31,
                    EPIPE: 32,
                    EDOM: 33,
                    ERANGE: 34,
                    ENOMSG: 42,
                    EIDRM: 43,
                    ECHRNG: 44,
                    EL2NSYNC: 45,
                    EL3HLT: 46,
                    EL3RST: 47,
                    ELNRNG: 48,
                    EUNATCH: 49,
                    ENOCSI: 50,
                    EL2HLT: 51,
                    EDEADLK: 35,
                    ENOLCK: 37,
                    EBADE: 52,
                    EBADR: 53,
                    EXFULL: 54,
                    ENOANO: 55,
                    EBADRQC: 56,
                    EBADSLT: 57,
                    EDEADLOCK: 35,
                    EBFONT: 59,
                    ENOSTR: 60,
                    ENODATA: 61,
                    ETIME: 62,
                    ENOSR: 63,
                    ENONET: 64,
                    ENOPKG: 65,
                    EREMOTE: 66,
                    ENOLINK: 67,
                    EADV: 68,
                    ESRMNT: 69,
                    ECOMM: 70,
                    EPROTO: 71,
                    EMULTIHOP: 72,
                    EDOTDOT: 73,
                    EBADMSG: 74,
                    ENOTUNIQ: 76,
                    EBADFD: 77,
                    EREMCHG: 78,
                    ELIBACC: 79,
                    ELIBBAD: 80,
                    ELIBSCN: 81,
                    ELIBMAX: 82,
                    ELIBEXEC: 83,
                    ENOSYS: 38,
                    ENOTEMPTY: 39,
                    ENAMETOOLONG: 36,
                    ELOOP: 40,
                    EOPNOTSUPP: 95,
                    EPFNOSUPPORT: 96,
                    ECONNRESET: 104,
                    ENOBUFS: 105,
                    EAFNOSUPPORT: 97,
                    EPROTOTYPE: 91,
                    ENOTSOCK: 88,
                    ENOPROTOOPT: 92,
                    ESHUTDOWN: 108,
                    ECONNREFUSED: 111,
                    EADDRINUSE: 98,
                    ECONNABORTED: 103,
                    ENETUNREACH: 101,
                    ENETDOWN: 100,
                    ETIMEDOUT: 110,
                    EHOSTDOWN: 112,
                    EHOSTUNREACH: 113,
                    EINPROGRESS: 115,
                    EALREADY: 114,
                    EDESTADDRREQ: 89,
                    EMSGSIZE: 90,
                    EPROTONOSUPPORT: 93,
                    ESOCKTNOSUPPORT: 94,
                    EADDRNOTAVAIL: 99,
                    ENETRESET: 102,
                    EISCONN: 106,
                    ENOTCONN: 107,
                    ETOOMANYREFS: 109,
                    EUSERS: 87,
                    EDQUOT: 122,
                    ESTALE: 116,
                    ENOTSUP: 95,
                    ENOMEDIUM: 123,
                    EILSEQ: 84,
                    EOVERFLOW: 75,
                    ECANCELED: 125,
                    ENOTRECOVERABLE: 131,
                    EOWNERDEAD: 130,
                    ESTRPIPE: 86,
                },
                PTHREAD_SPECIFIC_NEXT_KEY = 1,
                _BItoD = !0,
                PATH = void 0,
                Browser = {
                    mainLoop: {
                        scheduler: null,
                        method: '',
                        currentlyRunningMainloop: 0,
                        func: null,
                        arg: 0,
                        timingMode: 0,
                        timingValue: 0,
                        currentFrameNumber: 0,
                        queue: [],
                        pause: function () {
                            (Browser.mainLoop.scheduler = null),
                                Browser.mainLoop.currentlyRunningMainloop++;
                        },
                        resume: function () {
                            Browser.mainLoop.currentlyRunningMainloop++;
                            var e = Browser.mainLoop.timingMode,
                                r = Browser.mainLoop.timingValue,
                                i = Browser.mainLoop.func;
                            (Browser.mainLoop.func = null),
                                _emscripten_set_main_loop(
                                    i,
                                    0,
                                    !1,
                                    Browser.mainLoop.arg,
                                    !0,
                                ),
                                _emscripten_set_main_loop_timing(e, r),
                                Browser.mainLoop.scheduler();
                        },
                        updateStatus: function () {
                            if (Module.setStatus) {
                                var e =
                                        Module.statusMessage ||
                                        'Please wait...',
                                    r = Browser.mainLoop.remainingBlockers,
                                    i = Browser.mainLoop.expectedBlockers;
                                r
                                    ? r < i
                                        ? Module.setStatus(
                                              e +
                                                  ' (' +
                                                  (i - r) +
                                                  '/' +
                                                  i +
                                                  ')',
                                          )
                                        : Module.setStatus(e)
                                    : Module.setStatus('');
                            }
                        },
                        runIter: function (e) {
                            if (!ABORT) {
                                if (Module.preMainLoop) {
                                    if (!1 === Module.preMainLoop()) return;
                                }
                                try {
                                    e();
                                } catch (e) {
                                    if (e instanceof ExitStatus) return;
                                    throw (
                                        (e &&
                                            'object' == typeof e &&
                                            e.stack &&
                                            Module.printErr(
                                                'exception thrown: ' +
                                                    [e, e.stack],
                                            ),
                                        e)
                                    );
                                }
                                Module.postMainLoop && Module.postMainLoop();
                            }
                        },
                    },
                    isFullScreen: !1,
                    pointerLock: !1,
                    moduleContextCreatedCallbacks: [],
                    workers: [],
                    init: function () {
                        function e() {
                            Browser.pointerLock =
                                document.pointerLockElement === n ||
                                document.mozPointerLockElement === n ||
                                document.webkitPointerLockElement === n ||
                                document.msPointerLockElement === n;
                        }
                        if (
                            (Module.preloadPlugins ||
                                (Module.preloadPlugins = []),
                            !Browser.initted)
                        ) {
                            Browser.initted = !0;
                            try {
                                new Blob(), (Browser.hasBlobConstructor = !0);
                            } catch (e) {
                                (Browser.hasBlobConstructor = !1),
                                    console.log(
                                        'warning: no blob constructor, cannot create blobs with mimetypes',
                                    );
                            }
                            (Browser.BlobBuilder =
                                'undefined' != typeof MozBlobBuilder
                                    ? MozBlobBuilder
                                    : 'undefined' != typeof WebKitBlobBuilder
                                      ? WebKitBlobBuilder
                                      : Browser.hasBlobConstructor
                                        ? null
                                        : console.log(
                                              'warning: no BlobBuilder',
                                          )),
                                (Browser.URLObject =
                                    'undefined' != typeof window
                                        ? window.URL
                                            ? window.URL
                                            : window.webkitURL
                                        : void 0),
                                Module.noImageDecoding ||
                                    void 0 !== Browser.URLObject ||
                                    (console.log(
                                        'warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.',
                                    ),
                                    (Module.noImageDecoding = !0));
                            var r = {};
                            (r.canHandle = function (e) {
                                return (
                                    !Module.noImageDecoding &&
                                    /\.(jpg|jpeg|png|bmp)$/i.test(e)
                                );
                            }),
                                (r.handle = function (e, r, i, n) {
                                    var t = null;
                                    if (Browser.hasBlobConstructor)
                                        try {
                                            (t = new Blob([e], {
                                                type: Browser.getMimetype(r),
                                            })),
                                                t.size !== e.length &&
                                                    (t = new Blob(
                                                        [
                                                            new Uint8Array(e)
                                                                .buffer,
                                                        ],
                                                        {
                                                            type: Browser.getMimetype(
                                                                r,
                                                            ),
                                                        },
                                                    ));
                                        } catch (e) {
                                            Runtime.warnOnce(
                                                'Blob constructor present but fails: ' +
                                                    e +
                                                    '; falling back to blob builder',
                                            );
                                        }
                                    if (!t) {
                                        var o = new Browser.BlobBuilder();
                                        o.append(new Uint8Array(e).buffer),
                                            (t = o.getBlob());
                                    }
                                    var a =
                                            Browser.URLObject.createObjectURL(
                                                t,
                                            ),
                                        u = new Image();
                                    (u.onload = function () {
                                        assert(
                                            u.complete,
                                            'Image ' +
                                                r +
                                                ' could not be decoded',
                                        );
                                        var n =
                                            document.createElement('canvas');
                                        (n.width = u.width),
                                            (n.height = u.height),
                                            n
                                                .getContext('2d')
                                                .drawImage(u, 0, 0),
                                            (Module.preloadedImages[r] = n),
                                            Browser.URLObject.revokeObjectURL(
                                                a,
                                            ),
                                            i && i(e);
                                    }),
                                        (u.onerror = function (e) {
                                            console.log(
                                                'Image ' +
                                                    a +
                                                    ' could not be decoded',
                                            ),
                                                n && n();
                                        }),
                                        (u.src = a);
                                }),
                                Module.preloadPlugins.push(r);
                            var i = {};
                            (i.canHandle = function (e) {
                                return (
                                    !Module.noAudioDecoding &&
                                    e.substr(-4) in
                                        { '.ogg': 1, '.wav': 1, '.mp3': 1 }
                                );
                            }),
                                (i.handle = function (e, r, i, n) {
                                    function t(n) {
                                        a ||
                                            ((a = !0),
                                            (Module.preloadedAudios[r] = n),
                                            i && i(e));
                                    }
                                    function o() {
                                        a ||
                                            ((a = !0),
                                            (Module.preloadedAudios[r] =
                                                new Audio()),
                                            n && n());
                                    }
                                    var a = !1;
                                    if (!Browser.hasBlobConstructor) return o();
                                    try {
                                        var u = new Blob([e], {
                                            type: Browser.getMimetype(r),
                                        });
                                    } catch (e) {
                                        return o();
                                    }
                                    var s =
                                            Browser.URLObject.createObjectURL(
                                                u,
                                            ),
                                        l = new Audio();
                                    l.addEventListener(
                                        'canplaythrough',
                                        function () {
                                            t(l);
                                        },
                                        !1,
                                    ),
                                        (l.onerror = function (i) {
                                            a ||
                                                (console.log(
                                                    'warning: browser could not fully decode audio ' +
                                                        r +
                                                        ', trying slower base64 approach',
                                                ),
                                                (l.src =
                                                    'data:audio/x-' +
                                                    r.substr(-3) +
                                                    ';base64,' +
                                                    (function (e) {
                                                        for (
                                                            var r =
                                                                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
                                                                i = '',
                                                                n = 0,
                                                                t = 0,
                                                                o = 0;
                                                            o < e.length;
                                                            o++
                                                        )
                                                            for (
                                                                n =
                                                                    (n << 8) |
                                                                    e[o],
                                                                    t += 8;
                                                                t >= 6;

                                                            ) {
                                                                var a =
                                                                    (n >>
                                                                        (t -
                                                                            6)) &
                                                                    63;
                                                                (t -= 6),
                                                                    (i += r[a]);
                                                            }
                                                        return (
                                                            2 == t
                                                                ? ((i +=
                                                                      r[
                                                                          (3 &
                                                                              n) <<
                                                                              4
                                                                      ]),
                                                                  (i += '=='))
                                                                : 4 == t &&
                                                                  ((i +=
                                                                      r[
                                                                          (15 &
                                                                              n) <<
                                                                              2
                                                                      ]),
                                                                  (i += '=')),
                                                            i
                                                        );
                                                    })(e)),
                                                t(l));
                                        }),
                                        (l.src = s),
                                        Browser.safeSetTimeout(function () {
                                            t(l);
                                        }, 1e4);
                                }),
                                Module.preloadPlugins.push(i);
                            var n = Module.canvas;
                            n &&
                                ((n.requestPointerLock =
                                    n.requestPointerLock ||
                                    n.mozRequestPointerLock ||
                                    n.webkitRequestPointerLock ||
                                    n.msRequestPointerLock ||
                                    function () {}),
                                (n.exitPointerLock =
                                    document.exitPointerLock ||
                                    document.mozExitPointerLock ||
                                    document.webkitExitPointerLock ||
                                    document.msExitPointerLock ||
                                    function () {}),
                                (n.exitPointerLock =
                                    n.exitPointerLock.bind(document)),
                                document.addEventListener(
                                    'pointerlockchange',
                                    e,
                                    !1,
                                ),
                                document.addEventListener(
                                    'mozpointerlockchange',
                                    e,
                                    !1,
                                ),
                                document.addEventListener(
                                    'webkitpointerlockchange',
                                    e,
                                    !1,
                                ),
                                document.addEventListener(
                                    'mspointerlockchange',
                                    e,
                                    !1,
                                ),
                                Module.elementPointerLock &&
                                    n.addEventListener(
                                        'click',
                                        function (e) {
                                            !Browser.pointerLock &&
                                                n.requestPointerLock &&
                                                (n.requestPointerLock(),
                                                e.preventDefault());
                                        },
                                        !1,
                                    ));
                        }
                    },
                    createContext: function (e, r, i, n) {
                        if (r && Module.ctx && e == Module.canvas)
                            return Module.ctx;
                        var t, o;
                        if (r) {
                            var a = { antialias: !1, alpha: !1 };
                            if (n) for (var u in n) a[u] = n[u];
                            (o = GL.createContext(e, a)),
                                o && (t = GL.getContext(o).GLctx),
                                (e.style.backgroundColor = 'black');
                        } else t = e.getContext('2d');
                        return t
                            ? (i &&
                                  (r ||
                                      assert(
                                          'undefined' == typeof GLctx,
                                          'cannot set in module if GLctx is used, but we are a non-GL context that would replace it',
                                      ),
                                  (Module.ctx = t),
                                  r && GL.makeContextCurrent(o),
                                  (Module.useWebGL = r),
                                  Browser.moduleContextCreatedCallbacks.forEach(
                                      function (e) {
                                          e();
                                      },
                                  ),
                                  Browser.init()),
                              t)
                            : null;
                    },
                    destroyContext: function (e, r, i) {},
                    fullScreenHandlersInstalled: !1,
                    lockPointer: void 0,
                    resizeCanvas: void 0,
                    requestFullScreen: function (e, r, i) {
                        function n() {
                            Browser.isFullScreen = !1;
                            var e = t.parentNode;
                            (document.webkitFullScreenElement ||
                                document.webkitFullscreenElement ||
                                document.mozFullScreenElement ||
                                document.mozFullscreenElement ||
                                document.fullScreenElement ||
                                document.fullscreenElement ||
                                document.msFullScreenElement ||
                                document.msFullscreenElement ||
                                document.webkitCurrentFullScreenElement) === e
                                ? ((t.cancelFullScreen =
                                      document.cancelFullScreen ||
                                      document.mozCancelFullScreen ||
                                      document.webkitCancelFullScreen ||
                                      document.msExitFullscreen ||
                                      document.exitFullscreen ||
                                      function () {}),
                                  (t.cancelFullScreen =
                                      t.cancelFullScreen.bind(document)),
                                  Browser.lockPointer && t.requestPointerLock(),
                                  (Browser.isFullScreen = !0),
                                  Browser.resizeCanvas &&
                                      Browser.setFullScreenCanvasSize())
                                : (e.parentNode.insertBefore(t, e),
                                  e.parentNode.removeChild(e),
                                  Browser.resizeCanvas &&
                                      Browser.setWindowedCanvasSize()),
                                Module.onFullScreen &&
                                    Module.onFullScreen(Browser.isFullScreen),
                                Browser.updateCanvasDimensions(t);
                        }
                        (Browser.lockPointer = e),
                            (Browser.resizeCanvas = r),
                            (Browser.vrDevice = i),
                            void 0 === Browser.lockPointer &&
                                (Browser.lockPointer = !0),
                            void 0 === Browser.resizeCanvas &&
                                (Browser.resizeCanvas = !1),
                            void 0 === Browser.vrDevice &&
                                (Browser.vrDevice = null);
                        var t = Module.canvas;
                        Browser.fullScreenHandlersInstalled ||
                            ((Browser.fullScreenHandlersInstalled = !0),
                            document.addEventListener(
                                'fullscreenchange',
                                n,
                                !1,
                            ),
                            document.addEventListener(
                                'mozfullscreenchange',
                                n,
                                !1,
                            ),
                            document.addEventListener(
                                'webkitfullscreenchange',
                                n,
                                !1,
                            ),
                            document.addEventListener(
                                'MSFullscreenChange',
                                n,
                                !1,
                            ));
                        var o = document.createElement('div');
                        t.parentNode.insertBefore(o, t),
                            o.appendChild(t),
                            (o.requestFullScreen =
                                o.requestFullScreen ||
                                o.mozRequestFullScreen ||
                                o.msRequestFullscreen ||
                                (o.webkitRequestFullScreen
                                    ? function () {
                                          o.webkitRequestFullScreen(
                                              Element.ALLOW_KEYBOARD_INPUT,
                                          );
                                      }
                                    : null)),
                            i
                                ? o.requestFullScreen({ vrDisplay: i })
                                : o.requestFullScreen();
                    },
                    nextRAF: 0,
                    fakeRequestAnimationFrame: function (e) {
                        var r = Date.now();
                        if (0 === Browser.nextRAF)
                            Browser.nextRAF = r + 1e3 / 60;
                        else
                            for (; r + 2 >= Browser.nextRAF; )
                                Browser.nextRAF += 1e3 / 60;
                        var i = Math.max(Browser.nextRAF - r, 0);
                        setTimeout(e, i);
                    },
                    requestAnimationFrame: function (e) {
                        'undefined' == typeof window
                            ? Browser.fakeRequestAnimationFrame(e)
                            : (window.requestAnimationFrame ||
                                  (window.requestAnimationFrame =
                                      window.requestAnimationFrame ||
                                      window.mozRequestAnimationFrame ||
                                      window.webkitRequestAnimationFrame ||
                                      window.msRequestAnimationFrame ||
                                      window.oRequestAnimationFrame ||
                                      Browser.fakeRequestAnimationFrame),
                              window.requestAnimationFrame(e));
                    },
                    safeCallback: function (e) {
                        return function () {
                            if (!ABORT) return e.apply(null, arguments);
                        };
                    },
                    allowAsyncCallbacks: !0,
                    queuedAsyncCallbacks: [],
                    pauseAsyncCallbacks: function () {
                        Browser.allowAsyncCallbacks = !1;
                    },
                    resumeAsyncCallbacks: function () {
                        if (
                            ((Browser.allowAsyncCallbacks = !0),
                            Browser.queuedAsyncCallbacks.length > 0)
                        ) {
                            var e = Browser.queuedAsyncCallbacks;
                            (Browser.queuedAsyncCallbacks = []),
                                e.forEach(function (e) {
                                    e();
                                });
                        }
                    },
                    safeRequestAnimationFrame: function (e) {
                        return Browser.requestAnimationFrame(function () {
                            ABORT ||
                                (Browser.allowAsyncCallbacks
                                    ? e()
                                    : Browser.queuedAsyncCallbacks.push(e));
                        });
                    },
                    safeSetTimeout: function (e, r) {
                        return (
                            (Module.noExitRuntime = !0),
                            setTimeout(function () {
                                ABORT ||
                                    (Browser.allowAsyncCallbacks
                                        ? e()
                                        : Browser.queuedAsyncCallbacks.push(e));
                            }, r)
                        );
                    },
                    safeSetInterval: function (e, r) {
                        return (
                            (Module.noExitRuntime = !0),
                            setInterval(function () {
                                ABORT || (Browser.allowAsyncCallbacks && e());
                            }, r)
                        );
                    },
                    getMimetype: function (e) {
                        return {
                            jpg: 'image/jpeg',
                            jpeg: 'image/jpeg',
                            png: 'image/png',
                            bmp: 'image/bmp',
                            ogg: 'audio/ogg',
                            wav: 'audio/wav',
                            mp3: 'audio/mpeg',
                        }[e.substr(e.lastIndexOf('.') + 1)];
                    },
                    getUserMedia: function (e) {
                        window.getUserMedia ||
                            (window.getUserMedia =
                                navigator.getUserMedia ||
                                navigator.mozGetUserMedia),
                            window.getUserMedia(e);
                    },
                    getMovementX: function (e) {
                        return (
                            e.movementX ||
                            e.mozMovementX ||
                            e.webkitMovementX ||
                            0
                        );
                    },
                    getMovementY: function (e) {
                        return (
                            e.movementY ||
                            e.mozMovementY ||
                            e.webkitMovementY ||
                            0
                        );
                    },
                    getMouseWheelDelta: function (e) {
                        var r = 0;
                        switch (e.type) {
                            case 'DOMMouseScroll':
                                r = e.detail;
                                break;
                            case 'mousewheel':
                                r = e.wheelDelta;
                                break;
                            case 'wheel':
                                r = e.deltaY;
                                break;
                            default:
                                throw (
                                    'unrecognized mouse wheel event: ' + e.type
                                );
                        }
                        return r;
                    },
                    mouseX: 0,
                    mouseY: 0,
                    mouseMovementX: 0,
                    mouseMovementY: 0,
                    touches: {},
                    lastTouches: {},
                    calculateMouseEvent: function (e) {
                        if (Browser.pointerLock)
                            'mousemove' != e.type && 'mozMovementX' in e
                                ? (Browser.mouseMovementX =
                                      Browser.mouseMovementY =
                                          0)
                                : ((Browser.mouseMovementX =
                                      Browser.getMovementX(e)),
                                  (Browser.mouseMovementY =
                                      Browser.getMovementY(e))),
                                'undefined' != typeof SDL
                                    ? ((Browser.mouseX =
                                          SDL.mouseX + Browser.mouseMovementX),
                                      (Browser.mouseY =
                                          SDL.mouseY + Browser.mouseMovementY))
                                    : ((Browser.mouseX +=
                                          Browser.mouseMovementX),
                                      (Browser.mouseY +=
                                          Browser.mouseMovementY));
                        else {
                            var r = Module.canvas.getBoundingClientRect(),
                                i = Module.canvas.width,
                                n = Module.canvas.height,
                                t =
                                    void 0 !== window.scrollX
                                        ? window.scrollX
                                        : window.pageXOffset,
                                o =
                                    void 0 !== window.scrollY
                                        ? window.scrollY
                                        : window.pageYOffset;
                            if (
                                'touchstart' === e.type ||
                                'touchend' === e.type ||
                                'touchmove' === e.type
                            ) {
                                var a = e.touch;
                                if (void 0 === a) return;
                                var u = a.pageX - (t + r.left),
                                    s = a.pageY - (o + r.top);
                                (u *= i / r.width), (s *= n / r.height);
                                var l = { x: u, y: s };
                                if ('touchstart' === e.type)
                                    (Browser.lastTouches[a.identifier] = l),
                                        (Browser.touches[a.identifier] = l);
                                else if (
                                    'touchend' === e.type ||
                                    'touchmove' === e.type
                                ) {
                                    var f = Browser.touches[a.identifier];
                                    f || (f = l),
                                        (Browser.lastTouches[a.identifier] = f),
                                        (Browser.touches[a.identifier] = l);
                                }
                                return;
                            }
                            var _ = e.pageX - (t + r.left),
                                c = e.pageY - (o + r.top);
                            (_ *= i / r.width),
                                (c *= n / r.height),
                                (Browser.mouseMovementX = _ - Browser.mouseX),
                                (Browser.mouseMovementY = c - Browser.mouseY),
                                (Browser.mouseX = _),
                                (Browser.mouseY = c);
                        }
                    },
                    xhrLoad: function (e, r, i) {
                        var n = new XMLHttpRequest();
                        n.open('GET', e, !0),
                            (n.responseType = 'arraybuffer'),
                            (n.onload = function () {
                                200 == n.status || (0 == n.status && n.response)
                                    ? r(n.response)
                                    : i();
                            }),
                            (n.onerror = i),
                            n.send(null);
                    },
                    asyncLoad: function (e, r, i, n) {
                        Browser.xhrLoad(
                            e,
                            function (i) {
                                assert(
                                    i,
                                    'Loading data file "' +
                                        e +
                                        '" failed (no arrayBuffer).',
                                ),
                                    r(new Uint8Array(i)),
                                    n || removeRunDependency('al ' + e);
                            },
                            function (r) {
                                if (!i)
                                    throw (
                                        'Loading data file "' + e + '" failed.'
                                    );
                                i();
                            },
                        ),
                            n || addRunDependency('al ' + e);
                    },
                    resizeListeners: [],
                    updateResizeListeners: function () {
                        var e = Module.canvas;
                        Browser.resizeListeners.forEach(function (r) {
                            r(e.width, e.height);
                        });
                    },
                    setCanvasSize: function (e, r, i) {
                        var n = Module.canvas;
                        Browser.updateCanvasDimensions(n, e, r),
                            i || Browser.updateResizeListeners();
                    },
                    windowedWidth: 0,
                    windowedHeight: 0,
                    setFullScreenCanvasSize: function () {
                        if ('undefined' != typeof SDL) {
                            var e =
                                HEAPU32[
                                    (SDL.screen + 0 * Runtime.QUANTUM_SIZE) >> 2
                                ];
                            (e |= 8388608),
                                (HEAP32[
                                    (SDL.screen + 0 * Runtime.QUANTUM_SIZE) >> 2
                                ] = e);
                        }
                        Browser.updateResizeListeners();
                    },
                    setWindowedCanvasSize: function () {
                        if ('undefined' != typeof SDL) {
                            var e =
                                HEAPU32[
                                    (SDL.screen + 0 * Runtime.QUANTUM_SIZE) >> 2
                                ];
                            (e &= -8388609),
                                (HEAP32[
                                    (SDL.screen + 0 * Runtime.QUANTUM_SIZE) >> 2
                                ] = e);
                        }
                        Browser.updateResizeListeners();
                    },
                    updateCanvasDimensions: function (e, r, i) {
                        r && i
                            ? ((e.widthNative = r), (e.heightNative = i))
                            : ((r = e.widthNative), (i = e.heightNative));
                        var n = r,
                            t = i;
                        if (
                            (Module.forcedAspectRatio &&
                                Module.forcedAspectRatio > 0 &&
                                (n / t < Module.forcedAspectRatio
                                    ? (n = Math.round(
                                          t * Module.forcedAspectRatio,
                                      ))
                                    : (t = Math.round(
                                          n / Module.forcedAspectRatio,
                                      ))),
                            (document.webkitFullScreenElement ||
                                document.webkitFullscreenElement ||
                                document.mozFullScreenElement ||
                                document.mozFullscreenElement ||
                                document.fullScreenElement ||
                                document.fullscreenElement ||
                                document.msFullScreenElement ||
                                document.msFullscreenElement ||
                                document.webkitCurrentFullScreenElement) ===
                                e.parentNode && 'undefined' != typeof screen)
                        ) {
                            var o = Math.min(
                                screen.width / n,
                                screen.height / t,
                            );
                            (n = Math.round(n * o)), (t = Math.round(t * o));
                        }
                        Browser.resizeCanvas
                            ? (e.width != n && (e.width = n),
                              e.height != t && (e.height = t),
                              void 0 !== e.style &&
                                  (e.style.removeProperty('width'),
                                  e.style.removeProperty('height')))
                            : (e.width != r && (e.width = r),
                              e.height != i && (e.height = i),
                              void 0 !== e.style &&
                                  (n != r || t != i
                                      ? (e.style.setProperty(
                                            'width',
                                            n + 'px',
                                            'important',
                                        ),
                                        e.style.setProperty(
                                            'height',
                                            t + 'px',
                                            'important',
                                        ))
                                      : (e.style.removeProperty('width'),
                                        e.style.removeProperty('height'))));
                    },
                    wgetRequests: {},
                    nextWgetRequestHandle: 0,
                    getNextWgetRequestHandle: function () {
                        var e = Browser.nextWgetRequestHandle;
                        return Browser.nextWgetRequestHandle++, e;
                    },
                };
            (Module.requestFullScreen = function (e, r, i) {
                Browser.requestFullScreen(e, r, i);
            }),
                (Module.requestAnimationFrame = function (e) {
                    Browser.requestAnimationFrame(e);
                }),
                (Module.setCanvasSize = function (e, r, i) {
                    Browser.setCanvasSize(e, r, i);
                }),
                (Module.pauseMainLoop = function () {
                    Browser.mainLoop.pause();
                }),
                (Module.resumeMainLoop = function () {
                    Browser.mainLoop.resume();
                }),
                (Module.getUserMedia = function () {
                    Browser.getUserMedia();
                }),
                (Module.createContext = function (e, r, i, n) {
                    return Browser.createContext(e, r, i, n);
                }),
                (STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP)),
                (staticSealed = !0),
                (STACK_MAX = STACK_BASE + TOTAL_STACK),
                (DYNAMIC_BASE = DYNAMICTOP = Runtime.alignMemory(STACK_MAX)),
                assert(
                    DYNAMIC_BASE < TOTAL_MEMORY,
                    'TOTAL_MEMORY not big enough for stack',
                );
            var cttz_i8 = allocate(
                [
                    8, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0,
                    2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0,
                    3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0,
                    2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
                    4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 5, 0, 1, 0,
                    2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0,
                    3, 0, 1, 0, 2, 0, 1, 0, 7, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0,
                    2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
                    5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0,
                    2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0, 6, 0, 1, 0, 2, 0, 1, 0,
                    3, 0, 1, 0, 2, 0, 1, 0, 4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0,
                    2, 0, 1, 0, 5, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
                    4, 0, 1, 0, 2, 0, 1, 0, 3, 0, 1, 0, 2, 0, 1, 0,
                ],
                'i8',
                ALLOC_DYNAMIC,
            );
            (Module.asmGlobalArg = {
                Math: Math,
                Int8Array: Int8Array,
                Int16Array: Int16Array,
                Int32Array: Int32Array,
                Uint8Array: Uint8Array,
                Uint16Array: Uint16Array,
                Uint32Array: Uint32Array,
                Float32Array: Float32Array,
                Float64Array: Float64Array,
                NaN: NaN,
                Infinity: 1 / 0,
                byteLength: byteLength,
            }),
                (Module.asmLibraryArg = {
                    abort: abort,
                    assert: assert,
                    invoke_iiii: invoke_iiii,
                    invoke_viiiii: invoke_viiiii,
                    invoke_vi: invoke_vi,
                    invoke_ii: invoke_ii,
                    invoke_viii: invoke_viii,
                    invoke_v: invoke_v,
                    invoke_viiiiii: invoke_viiiiii,
                    invoke_viiii: invoke_viiii,
                    _pthread_cleanup_pop: _pthread_cleanup_pop,
                    _pthread_getspecific: _pthread_getspecific,
                    _pthread_setspecific: _pthread_setspecific,
                    __ZSt18uncaught_exceptionv: __ZSt18uncaught_exceptionv,
                    _emscripten_set_main_loop: _emscripten_set_main_loop,
                    _pthread_self: _pthread_self,
                    _abort: _abort,
                    _pthread_cleanup_push: _pthread_cleanup_push,
                    ___syscall6: ___syscall6,
                    _sbrk: _sbrk,
                    _time: _time,
                    _pthread_key_create: _pthread_key_create,
                    ___setErrNo: ___setErrNo,
                    _emscripten_memcpy_big: _emscripten_memcpy_big,
                    ___syscall54: ___syscall54,
                    ___syscall140: ___syscall140,
                    _pthread_once: _pthread_once,
                    _emscripten_set_main_loop_timing:
                        _emscripten_set_main_loop_timing,
                    _sysconf: _sysconf,
                    ___syscall146: ___syscall146,
                    ___cxa_begin_catch: ___cxa_begin_catch,
                    STACKTOP: STACKTOP,
                    STACK_MAX: STACK_MAX,
                    tempDoublePtr: tempDoublePtr,
                    ABORT: ABORT,
                    cttz_i8: cttz_i8,
                });
            var asm = (function (e, r, i) {
                    'use asm';
                    var n = e.Int8Array;
                    var t = e.Int16Array;
                    var o = e.Int32Array;
                    var a = e.Uint8Array;
                    var u = e.Uint16Array;
                    var s = e.Uint32Array;
                    var l = e.Float32Array;
                    var f = e.Float64Array;
                    var _ = new n(i);
                    var c = new t(i);
                    var E = new o(i);
                    var T = new a(i);
                    var d = new u(i);
                    var A = new s(i);
                    var R = new l(i);
                    var M = new f(i);
                    var S = e.byteLength;
                    var m = r.STACKTOP | 0;
                    var h = r.STACK_MAX | 0;
                    var N = r.tempDoublePtr | 0;
                    var C = r.ABORT | 0;
                    var I = r.cttz_i8 | 0;
                    var p = 0;
                    var w = 0;
                    var b = 0;
                    var O = 0;
                    var P = e.NaN,
                        v = e.Infinity;
                    var B = 0,
                        L = 0,
                        k = 0,
                        F = 0,
                        g = 0,
                        U = 0,
                        D = 0,
                        y = 0,
                        G = 0;
                    var H = 0;
                    var X = 0;
                    var V = 0;
                    var Y = 0;
                    var x = 0;
                    var K = 0;
                    var W = 0;
                    var z = 0;
                    var q = 0;
                    var j = 0;
                    var Z = e.Math.floor;
                    var J = e.Math.abs;
                    var Q = e.Math.sqrt;
                    var $ = e.Math.pow;
                    var ee = e.Math.cos;
                    var re = e.Math.sin;
                    var ie = e.Math.tan;
                    var ne = e.Math.acos;
                    var te = e.Math.asin;
                    var oe = e.Math.atan;
                    var ae = e.Math.atan2;
                    var ue = e.Math.exp;
                    var se = e.Math.log;
                    var le = e.Math.ceil;
                    var fe = e.Math.imul;
                    var _e = e.Math.min;
                    var ce = e.Math.clz32;
                    var Ee = r.abort;
                    var Te = r.assert;
                    var de = r.invoke_iiii;
                    var Ae = r.invoke_viiiii;
                    var Re = r.invoke_vi;
                    var Me = r.invoke_ii;
                    var Se = r.invoke_viii;
                    var me = r.invoke_v;
                    var he = r.invoke_viiiiii;
                    var Ne = r.invoke_viiii;
                    var Ce = r._pthread_cleanup_pop;
                    var Ie = r._pthread_getspecific;
                    var pe = r._pthread_setspecific;
                    var we = r.__ZSt18uncaught_exceptionv;
                    var be = r._emscripten_set_main_loop;
                    var Oe = r._pthread_self;
                    var Pe = r._abort;
                    var ve = r._pthread_cleanup_push;
                    var Be = r.___syscall6;
                    var Le = r._sbrk;
                    var ke = r._time;
                    var Fe = r._pthread_key_create;
                    var ge = r.___setErrNo;
                    var Ue = r._emscripten_memcpy_big;
                    var De = r.___syscall54;
                    var ye = r.___syscall140;
                    var Ge = r._pthread_once;
                    var He = r._emscripten_set_main_loop_timing;
                    var Xe = r._sysconf;
                    var Ve = r.___syscall146;
                    var Ye = r.___cxa_begin_catch;
                    var xe = 0;
                    function Ke(e) {
                        if (
                            S(e) & 16777215 ||
                            S(e) <= 16777215 ||
                            S(e) > 2147483648
                        )
                            return false;
                        _ = new n(e);
                        c = new t(e);
                        E = new o(e);
                        T = new a(e);
                        d = new u(e);
                        A = new s(e);
                        R = new l(e);
                        M = new f(e);
                        i = e;
                        return true;
                    }
                    function We(e) {
                        e = e | 0;
                        var r = 0;
                        r = m;
                        m = (m + e) | 0;
                        m = (m + 15) & -16;
                        return r | 0;
                    }
                    function ze() {
                        return m | 0;
                    }
                    function qe(e) {
                        e = e | 0;
                        m = e;
                    }
                    function je(e, r) {
                        e = e | 0;
                        r = r | 0;
                        m = e;
                        h = r;
                    }
                    function Ze(e, r) {
                        e = e | 0;
                        r = r | 0;
                        if (!p) {
                            p = e;
                            w = r;
                        }
                    }
                    function Je(e) {
                        e = e | 0;
                        _[N >> 0] = _[e >> 0];
                        _[(N + 1) >> 0] = _[(e + 1) >> 0];
                        _[(N + 2) >> 0] = _[(e + 2) >> 0];
                        _[(N + 3) >> 0] = _[(e + 3) >> 0];
                    }
                    function Qe(e) {
                        e = e | 0;
                        _[N >> 0] = _[e >> 0];
                        _[(N + 1) >> 0] = _[(e + 1) >> 0];
                        _[(N + 2) >> 0] = _[(e + 2) >> 0];
                        _[(N + 3) >> 0] = _[(e + 3) >> 0];
                        _[(N + 4) >> 0] = _[(e + 4) >> 0];
                        _[(N + 5) >> 0] = _[(e + 5) >> 0];
                        _[(N + 6) >> 0] = _[(e + 6) >> 0];
                        _[(N + 7) >> 0] = _[(e + 7) >> 0];
                    }
                    function $e(e) {
                        e = e | 0;
                        H = e;
                    }
                    function er() {
                        return H | 0;
                    }
                    function rr(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        var o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            T = 0;
                        T = m;
                        m = (m + 576) | 0;
                        f = (T + 48) | 0;
                        u = (T + 32) | 0;
                        a = (T + 16) | 0;
                        o = T;
                        l = (T + 64) | 0;
                        _ = (T + 60) | 0;
                        s = (e + 4) | 0;
                        c = (e + 8) | 0;
                        if ((E[s >> 2] | 0) >>> 0 > (E[c >> 2] | 0) >>> 0) {
                            E[o >> 2] = 1138;
                            E[(o + 4) >> 2] = 2119;
                            E[(o + 8) >> 2] = 1117;
                            Si(l, 1084, o) | 0;
                            Mi(l) | 0;
                        }
                        if (((2147418112 / (n >>> 0)) | 0) >>> 0 <= r >>> 0) {
                            E[a >> 2] = 1138;
                            E[(a + 4) >> 2] = 2120;
                            E[(a + 8) >> 2] = 1157;
                            Si(l, 1084, a) | 0;
                            Mi(l) | 0;
                        }
                        a = E[c >> 2] | 0;
                        if (a >>> 0 >= r >>> 0) {
                            c = 1;
                            m = T;
                            return c | 0;
                        }
                        do {
                            if (i) {
                                if (r) {
                                    o = (r + -1) | 0;
                                    if (!(o & r)) {
                                        o = 11;
                                        break;
                                    } else r = o;
                                } else r = -1;
                                r = (r >>> 16) | r;
                                r = (r >>> 8) | r;
                                r = (r >>> 4) | r;
                                r = (r >>> 2) | r;
                                r = (((r >>> 1) | r) + 1) | 0;
                                o = 10;
                            } else o = 10;
                        } while (0);
                        if ((o | 0) == 10)
                            if (!r) {
                                r = 0;
                                o = 12;
                            } else o = 11;
                        if ((o | 0) == 11) if (r >>> 0 <= a >>> 0) o = 12;
                        if ((o | 0) == 12) {
                            E[u >> 2] = 1138;
                            E[(u + 4) >> 2] = 2129;
                            E[(u + 8) >> 2] = 1205;
                            Si(l, 1084, u) | 0;
                            Mi(l) | 0;
                        }
                        i = fe(r, n) | 0;
                        do {
                            if (!t) {
                                o = ir(E[e >> 2] | 0, i, _, 1) | 0;
                                if (!o) {
                                    c = 0;
                                    m = T;
                                    return c | 0;
                                } else {
                                    E[e >> 2] = o;
                                    break;
                                }
                            } else {
                                a = nr(i, _) | 0;
                                if (!a) {
                                    c = 0;
                                    m = T;
                                    return c | 0;
                                }
                                On[t & 0](a, E[e >> 2] | 0, E[s >> 2] | 0);
                                o = E[e >> 2] | 0;
                                do {
                                    if (o)
                                        if (!(o & 7)) {
                                            or(o, 0, 0, 1, 0) | 0;
                                            break;
                                        } else {
                                            E[f >> 2] = 1138;
                                            E[(f + 4) >> 2] = 2502;
                                            E[(f + 8) >> 2] = 1504;
                                            Si(l, 1084, f) | 0;
                                            Mi(l) | 0;
                                            break;
                                        }
                                } while (0);
                                E[e >> 2] = a;
                            }
                        } while (0);
                        o = E[_ >> 2] | 0;
                        if (o >>> 0 > i >>> 0) r = ((o >>> 0) / (n >>> 0)) | 0;
                        E[c >> 2] = r;
                        c = 1;
                        m = T;
                        return c | 0;
                    }
                    function ir(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0;
                        l = m;
                        m = (m + 560) | 0;
                        s = (l + 32) | 0;
                        o = (l + 16) | 0;
                        t = l;
                        u = (l + 48) | 0;
                        a = (l + 44) | 0;
                        if (e & 7) {
                            E[t >> 2] = 1138;
                            E[(t + 4) >> 2] = 2502;
                            E[(t + 8) >> 2] = 1482;
                            Si(u, 1084, t) | 0;
                            Mi(u) | 0;
                            s = 0;
                            m = l;
                            return s | 0;
                        }
                        if (r >>> 0 > 2147418112) {
                            E[o >> 2] = 1138;
                            E[(o + 4) >> 2] = 2502;
                            E[(o + 8) >> 2] = 1375;
                            Si(u, 1084, o) | 0;
                            Mi(u) | 0;
                            s = 0;
                            m = l;
                            return s | 0;
                        }
                        E[a >> 2] = r;
                        n = or(e, r, a, n, 0) | 0;
                        if (i) E[i >> 2] = E[a >> 2];
                        if (!(n & 7)) {
                            s = n;
                            m = l;
                            return s | 0;
                        }
                        E[s >> 2] = 1138;
                        E[(s + 4) >> 2] = 2554;
                        E[(s + 8) >> 2] = 1428;
                        Si(u, 1084, s) | 0;
                        Mi(u) | 0;
                        s = n;
                        m = l;
                        return s | 0;
                    }
                    function nr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0;
                        s = m;
                        m = (m + 560) | 0;
                        u = (s + 32) | 0;
                        a = (s + 16) | 0;
                        i = s;
                        o = (s + 48) | 0;
                        t = (s + 44) | 0;
                        n = (e + 3) & -4;
                        n = (n | 0) != 0 ? n : 4;
                        if (n >>> 0 > 2147418112) {
                            E[i >> 2] = 1138;
                            E[(i + 4) >> 2] = 2502;
                            E[(i + 8) >> 2] = 1375;
                            Si(o, 1084, i) | 0;
                            Mi(o) | 0;
                            u = 0;
                            m = s;
                            return u | 0;
                        }
                        E[t >> 2] = n;
                        i = or(0, n, t, 1, 0) | 0;
                        e = E[t >> 2] | 0;
                        if (r) E[r >> 2] = e;
                        if (((i | 0) == 0) | (e >>> 0 < n >>> 0)) {
                            E[a >> 2] = 1138;
                            E[(a + 4) >> 2] = 2502;
                            E[(a + 8) >> 2] = 1401;
                            Si(o, 1084, a) | 0;
                            Mi(o) | 0;
                            u = 0;
                            m = s;
                            return u | 0;
                        }
                        if (!(i & 7)) {
                            u = i;
                            m = s;
                            return u | 0;
                        }
                        E[u >> 2] = 1138;
                        E[(u + 4) >> 2] = 2529;
                        E[(u + 8) >> 2] = 1428;
                        Si(o, 1084, u) | 0;
                        Mi(o) | 0;
                        u = i;
                        m = s;
                        return u | 0;
                    }
                    function tr(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0,
                            L = 0,
                            k = 0,
                            F = 0,
                            g = 0,
                            U = 0,
                            D = 0;
                        D = m;
                        m = (m + 880) | 0;
                        F = (D + 144) | 0;
                        k = (D + 128) | 0;
                        L = (D + 112) | 0;
                        B = (D + 96) | 0;
                        O = (D + 80) | 0;
                        N = (D + 64) | 0;
                        S = (D + 48) | 0;
                        h = (D + 32) | 0;
                        A = (D + 16) | 0;
                        f = D;
                        v = (D + 360) | 0;
                        g = (D + 296) | 0;
                        U = (D + 224) | 0;
                        M = (D + 156) | 0;
                        if (((r | 0) == 0) | (n >>> 0 > 11)) {
                            e = 0;
                            m = D;
                            return e | 0;
                        }
                        E[e >> 2] = r;
                        t = U;
                        o = (t + 68) | 0;
                        do {
                            E[t >> 2] = 0;
                            t = (t + 4) | 0;
                        } while ((t | 0) < (o | 0));
                        o = 0;
                        do {
                            t = _[(i + o) >> 0] | 0;
                            if ((t << 24) >> 24) {
                                P = (U + ((t & 255) << 2)) | 0;
                                E[P >> 2] = (E[P >> 2] | 0) + 1;
                            }
                            o = (o + 1) | 0;
                        } while ((o | 0) != (r | 0));
                        o = 0;
                        l = 1;
                        a = 0;
                        u = -1;
                        s = 0;
                        while (1) {
                            t = E[(U + (l << 2)) >> 2] | 0;
                            if (!t) E[(e + 28 + ((l + -1) << 2)) >> 2] = 0;
                            else {
                                P = (l + -1) | 0;
                                E[(g + (P << 2)) >> 2] = o;
                                o = (t + o) | 0;
                                b = (16 - l) | 0;
                                E[(e + 28 + (P << 2)) >> 2] =
                                    (((o + -1) << b) | ((1 << b) + -1)) + 1;
                                E[(e + 96 + (P << 2)) >> 2] = s;
                                E[(M + (l << 2)) >> 2] = s;
                                a = a >>> 0 > l >>> 0 ? a : l;
                                u = u >>> 0 < l >>> 0 ? u : l;
                                s = (t + s) | 0;
                            }
                            l = (l + 1) | 0;
                            if ((l | 0) == 17) {
                                P = a;
                                break;
                            } else o = o << 1;
                        }
                        E[(e + 4) >> 2] = s;
                        o = (e + 172) | 0;
                        do {
                            if (s >>> 0 > (E[o >> 2] | 0) >>> 0) {
                                E[o >> 2] = s;
                                if (s) {
                                    t = (s + -1) | 0;
                                    if (t & s) R = 14;
                                } else {
                                    t = -1;
                                    R = 14;
                                }
                                if ((R | 0) == 14) {
                                    b = (t >>> 16) | t;
                                    b = (b >>> 8) | b;
                                    b = (b >>> 4) | b;
                                    b = (b >>> 2) | b;
                                    b = (((b >>> 1) | b) + 1) | 0;
                                    E[o >> 2] = b >>> 0 > r >>> 0 ? r : b;
                                }
                                a = (e + 176) | 0;
                                t = E[a >> 2] | 0;
                                do {
                                    if (t) {
                                        b = E[(t + -4) >> 2] | 0;
                                        t = (t + -8) | 0;
                                        if (
                                            !((b | 0) != 0
                                                ? (b | 0) == (~E[t >> 2] | 0)
                                                : 0)
                                        ) {
                                            E[f >> 2] = 1138;
                                            E[(f + 4) >> 2] = 647;
                                            E[(f + 8) >> 2] = 1851;
                                            Si(v, 1084, f) | 0;
                                            Mi(v) | 0;
                                        }
                                        if (!(t & 7)) {
                                            or(t, 0, 0, 1, 0) | 0;
                                            break;
                                        } else {
                                            E[A >> 2] = 1138;
                                            E[(A + 4) >> 2] = 2502;
                                            E[(A + 8) >> 2] = 1504;
                                            Si(v, 1084, A) | 0;
                                            Mi(v) | 0;
                                            break;
                                        }
                                    }
                                } while (0);
                                o = E[o >> 2] | 0;
                                o = (o | 0) != 0 ? o : 1;
                                t = nr(((o << 1) + 8) | 0, 0) | 0;
                                if (!t) {
                                    E[a >> 2] = 0;
                                    t = 0;
                                    break;
                                } else {
                                    E[(t + 4) >> 2] = o;
                                    E[t >> 2] = ~o;
                                    E[a >> 2] = t + 8;
                                    R = 25;
                                    break;
                                }
                            } else R = 25;
                        } while (0);
                        e: do {
                            if ((R | 0) == 25) {
                                b = (e + 24) | 0;
                                _[b >> 0] = u;
                                _[(e + 25) >> 0] = P;
                                o = (e + 176) | 0;
                                a = 0;
                                do {
                                    w = _[(i + a) >> 0] | 0;
                                    t = w & 255;
                                    if ((w << 24) >> 24) {
                                        if (!(E[(U + (t << 2)) >> 2] | 0)) {
                                            E[h >> 2] = 1138;
                                            E[(h + 4) >> 2] = 2272;
                                            E[(h + 8) >> 2] = 1249;
                                            Si(v, 1084, h) | 0;
                                            Mi(v) | 0;
                                        }
                                        w = (M + (t << 2)) | 0;
                                        t = E[w >> 2] | 0;
                                        E[w >> 2] = t + 1;
                                        if (t >>> 0 >= s >>> 0) {
                                            E[S >> 2] = 1138;
                                            E[(S + 4) >> 2] = 2276;
                                            E[(S + 8) >> 2] = 1262;
                                            Si(v, 1084, S) | 0;
                                            Mi(v) | 0;
                                        }
                                        c[((E[o >> 2] | 0) + (t << 1)) >> 1] =
                                            a;
                                    }
                                    a = (a + 1) | 0;
                                } while ((a | 0) != (r | 0));
                                t = _[b >> 0] | 0;
                                p = (t & 255) >>> 0 < n >>> 0 ? n : 0;
                                w = (e + 8) | 0;
                                E[w >> 2] = p;
                                I = (p | 0) != 0;
                                if (I) {
                                    C = 1 << p;
                                    t = (e + 164) | 0;
                                    do {
                                        if (C >>> 0 > (E[t >> 2] | 0) >>> 0) {
                                            E[t >> 2] = C;
                                            a = (e + 168) | 0;
                                            t = E[a >> 2] | 0;
                                            do {
                                                if (t) {
                                                    h = E[(t + -4) >> 2] | 0;
                                                    t = (t + -8) | 0;
                                                    if (
                                                        !((h | 0) != 0
                                                            ? (h | 0) ==
                                                              (~E[t >> 2] | 0)
                                                            : 0)
                                                    ) {
                                                        E[N >> 2] = 1138;
                                                        E[(N + 4) >> 2] = 647;
                                                        E[(N + 8) >> 2] = 1851;
                                                        Si(v, 1084, N) | 0;
                                                        Mi(v) | 0;
                                                    }
                                                    if (!(t & 7)) {
                                                        or(t, 0, 0, 1, 0) | 0;
                                                        break;
                                                    } else {
                                                        E[O >> 2] = 1138;
                                                        E[(O + 4) >> 2] = 2502;
                                                        E[(O + 8) >> 2] = 1504;
                                                        Si(v, 1084, O) | 0;
                                                        Mi(v) | 0;
                                                        break;
                                                    }
                                                }
                                            } while (0);
                                            t = C << 2;
                                            o = nr((t + 8) | 0, 0) | 0;
                                            if (!o) {
                                                E[a >> 2] = 0;
                                                t = 0;
                                                break e;
                                            } else {
                                                O = (o + 8) | 0;
                                                E[(o + 4) >> 2] = C;
                                                E[o >> 2] = ~C;
                                                E[a >> 2] = O;
                                                o = O;
                                                break;
                                            }
                                        } else {
                                            o = (e + 168) | 0;
                                            t = C << 2;
                                            a = o;
                                            o = E[o >> 2] | 0;
                                        }
                                    } while (0);
                                    qi(o | 0, -1, t | 0) | 0;
                                    M = (e + 176) | 0;
                                    N = 1;
                                    do {
                                        if (E[(U + (N << 2)) >> 2] | 0) {
                                            S = (p - N) | 0;
                                            h = 1 << S;
                                            o = (N + -1) | 0;
                                            u = E[(g + (o << 2)) >> 2] | 0;
                                            if (o >>> 0 >= 16) {
                                                E[B >> 2] = 1138;
                                                E[(B + 4) >> 2] = 1956;
                                                E[(B + 8) >> 2] = 1725;
                                                Si(v, 1084, B) | 0;
                                                Mi(v) | 0;
                                            }
                                            t = E[(e + 28 + (o << 2)) >> 2] | 0;
                                            if (!t) r = -1;
                                            else
                                                r =
                                                    ((t + -1) | 0) >>>
                                                    ((16 - N) | 0);
                                            if (u >>> 0 <= r >>> 0) {
                                                A =
                                                    ((E[
                                                        (e + 96 + (o << 2)) >> 2
                                                    ] |
                                                        0) -
                                                        u) |
                                                    0;
                                                R = N << 16;
                                                do {
                                                    t =
                                                        d[
                                                            ((E[M >> 2] | 0) +
                                                                ((A + u) <<
                                                                    1)) >>
                                                                1
                                                        ] | 0;
                                                    if (
                                                        (T[(i + t) >> 0] |
                                                            0 |
                                                            0) !=
                                                        (N | 0)
                                                    ) {
                                                        E[L >> 2] = 1138;
                                                        E[(L + 4) >> 2] = 2318;
                                                        E[(L + 8) >> 2] = 1291;
                                                        Si(v, 1084, L) | 0;
                                                        Mi(v) | 0;
                                                    }
                                                    f = u << S;
                                                    o = t | R;
                                                    l = 0;
                                                    do {
                                                        s = (l + f) | 0;
                                                        if (
                                                            s >>> 0 >=
                                                            C >>> 0
                                                        ) {
                                                            E[k >> 2] = 1138;
                                                            E[(k + 4) >> 2] =
                                                                2324;
                                                            E[(k + 8) >> 2] =
                                                                1325;
                                                            Si(v, 1084, k) | 0;
                                                            Mi(v) | 0;
                                                        }
                                                        t = E[a >> 2] | 0;
                                                        if (
                                                            (E[
                                                                (t +
                                                                    (s << 2)) >>
                                                                    2
                                                            ] |
                                                                0) !=
                                                            -1
                                                        ) {
                                                            E[F >> 2] = 1138;
                                                            E[(F + 4) >> 2] =
                                                                2326;
                                                            E[(F + 8) >> 2] =
                                                                1348;
                                                            Si(v, 1084, F) | 0;
                                                            Mi(v) | 0;
                                                            t = E[a >> 2] | 0;
                                                        }
                                                        E[(t + (s << 2)) >> 2] =
                                                            o;
                                                        l = (l + 1) | 0;
                                                    } while (l >>> 0 < h >>> 0);
                                                    u = (u + 1) | 0;
                                                } while (u >>> 0 <= r >>> 0);
                                            }
                                        }
                                        N = (N + 1) | 0;
                                    } while (p >>> 0 >= N >>> 0);
                                    t = _[b >> 0] | 0;
                                }
                                o = (e + 96) | 0;
                                E[o >> 2] = (E[o >> 2] | 0) - (E[g >> 2] | 0);
                                o = (e + 100) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 4) >> 2] | 0);
                                o = (e + 104) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 8) >> 2] | 0);
                                o = (e + 108) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 12) >> 2] | 0);
                                o = (e + 112) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 16) >> 2] | 0);
                                o = (e + 116) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 20) >> 2] | 0);
                                o = (e + 120) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 24) >> 2] | 0);
                                o = (e + 124) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 28) >> 2] | 0);
                                o = (e + 128) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 32) >> 2] | 0);
                                o = (e + 132) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 36) >> 2] | 0);
                                o = (e + 136) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 40) >> 2] | 0);
                                o = (e + 140) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 44) >> 2] | 0);
                                o = (e + 144) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 48) >> 2] | 0);
                                o = (e + 148) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 52) >> 2] | 0);
                                o = (e + 152) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 56) >> 2] | 0);
                                o = (e + 156) | 0;
                                E[o >> 2] =
                                    (E[o >> 2] | 0) - (E[(g + 60) >> 2] | 0);
                                o = (e + 16) | 0;
                                E[o >> 2] = 0;
                                a = (e + 20) | 0;
                                E[a >> 2] = t & 255;
                                r: do {
                                    if (I) {
                                        while (1) {
                                            if (!n) break r;
                                            t = (n + -1) | 0;
                                            if (!(E[(U + (n << 2)) >> 2] | 0))
                                                n = t;
                                            else break;
                                        }
                                        E[o >> 2] = E[(e + 28 + (t << 2)) >> 2];
                                        t = (p + 1) | 0;
                                        E[a >> 2] = t;
                                        if (t >>> 0 <= P >>> 0) {
                                            while (1) {
                                                if (E[(U + (t << 2)) >> 2] | 0)
                                                    break;
                                                t = (t + 1) | 0;
                                                if (t >>> 0 > P >>> 0) break r;
                                            }
                                            E[a >> 2] = t;
                                        }
                                    }
                                } while (0);
                                E[(e + 92) >> 2] = -1;
                                E[(e + 160) >> 2] = 1048575;
                                E[(e + 12) >> 2] = 32 - (E[w >> 2] | 0);
                                t = 1;
                            }
                        } while (0);
                        e = t;
                        m = D;
                        return e | 0;
                    }
                    function or(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        do {
                            if (!e) {
                                n = Gi(r) | 0;
                                if (i) {
                                    if (!n) e = 0;
                                    else e = Vi(n) | 0;
                                    E[i >> 2] = e;
                                }
                            } else {
                                if (!r) {
                                    Hi(e);
                                    if (!i) {
                                        n = 0;
                                        break;
                                    }
                                    E[i >> 2] = 0;
                                    n = 0;
                                    break;
                                }
                                if (n) {
                                    n = Xi(e, r) | 0;
                                    e = (n | 0) == 0 ? e : n;
                                } else n = 0;
                                if (i) {
                                    r = Vi(e) | 0;
                                    E[i >> 2] = r;
                                }
                            }
                        } while (0);
                        return n | 0;
                    }
                    function ar(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0;
                        if (
                            !(((e | 0) != 0) & (r >>> 0 > 73) & ((i | 0) != 0))
                        ) {
                            i = 0;
                            return i | 0;
                        }
                        if (((E[i >> 2] | 0) != 40) | (r >>> 0 < 74)) {
                            i = 0;
                            return i | 0;
                        }
                        if (
                            (((T[e >> 0] | 0) << 8) |
                                (T[(e + 1) >> 0] | 0) |
                                0) !=
                            18552
                        ) {
                            i = 0;
                            return i | 0;
                        }
                        if (
                            (((T[(e + 2) >> 0] | 0) << 8) |
                                (T[(e + 3) >> 0] | 0)) >>>
                                0 <
                            74
                        ) {
                            i = 0;
                            return i | 0;
                        }
                        if (
                            (((T[(e + 7) >> 0] | 0) << 16) |
                                ((T[(e + 6) >> 0] | 0) << 24) |
                                ((T[(e + 8) >> 0] | 0) << 8) |
                                (T[(e + 9) >> 0] | 0)) >>>
                                0 >
                            r >>> 0
                        ) {
                            i = 0;
                            return i | 0;
                        }
                        E[(i + 4) >> 2] =
                            ((T[(e + 12) >> 0] | 0) << 8) |
                            (T[(e + 13) >> 0] | 0);
                        E[(i + 8) >> 2] =
                            ((T[(e + 14) >> 0] | 0) << 8) |
                            (T[(e + 15) >> 0] | 0);
                        E[(i + 12) >> 2] = T[(e + 16) >> 0];
                        E[(i + 16) >> 2] = T[(e + 17) >> 0];
                        r = (e + 18) | 0;
                        n = (i + 32) | 0;
                        E[n >> 2] = T[r >> 0];
                        E[(n + 4) >> 2] = 0;
                        r = _[r >> 0] | 0;
                        E[(i + 20) >> 2] =
                            ((r << 24) >> 24 == 0) | ((r << 24) >> 24 == 9)
                                ? 8
                                : 16;
                        E[(i + 24) >> 2] =
                            ((T[(e + 26) >> 0] | 0) << 16) |
                            ((T[(e + 25) >> 0] | 0) << 24) |
                            ((T[(e + 27) >> 0] | 0) << 8) |
                            (T[(e + 28) >> 0] | 0);
                        E[(i + 28) >> 2] =
                            ((T[(e + 30) >> 0] | 0) << 16) |
                            ((T[(e + 29) >> 0] | 0) << 24) |
                            ((T[(e + 31) >> 0] | 0) << 8) |
                            (T[(e + 32) >> 0] | 0);
                        i = 1;
                        return i | 0;
                    }
                    function ur(e) {
                        e = e | 0;
                        Ye(e | 0) | 0;
                        Gr();
                    }
                    function sr(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0;
                        o = m;
                        m = (m + 528) | 0;
                        t = o;
                        n = (o + 16) | 0;
                        r = E[(e + 20) >> 2] | 0;
                        if (r) lr(r);
                        r = (e + 4) | 0;
                        i = E[r >> 2] | 0;
                        if (!i) {
                            t = (e + 16) | 0;
                            _[t >> 0] = 0;
                            m = o;
                            return;
                        }
                        if (!(i & 7)) or(i, 0, 0, 1, 0) | 0;
                        else {
                            E[t >> 2] = 1138;
                            E[(t + 4) >> 2] = 2502;
                            E[(t + 8) >> 2] = 1504;
                            Si(n, 1084, t) | 0;
                            Mi(n) | 0;
                        }
                        E[r >> 2] = 0;
                        E[(e + 8) >> 2] = 0;
                        E[(e + 12) >> 2] = 0;
                        t = (e + 16) | 0;
                        _[t >> 0] = 0;
                        m = o;
                        return;
                    }
                    function lr(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0;
                        s = m;
                        m = (m + 592) | 0;
                        a = (s + 64) | 0;
                        o = (s + 48) | 0;
                        u = (s + 32) | 0;
                        n = (s + 16) | 0;
                        i = s;
                        t = (s + 80) | 0;
                        if (!e) {
                            m = s;
                            return;
                        }
                        r = E[(e + 168) >> 2] | 0;
                        do {
                            if (r) {
                                l = E[(r + -4) >> 2] | 0;
                                r = (r + -8) | 0;
                                if (
                                    !((l | 0) != 0
                                        ? (l | 0) == (~E[r >> 2] | 0)
                                        : 0)
                                ) {
                                    E[i >> 2] = 1138;
                                    E[(i + 4) >> 2] = 647;
                                    E[(i + 8) >> 2] = 1851;
                                    Si(t, 1084, i) | 0;
                                    Mi(t) | 0;
                                }
                                if (!(r & 7)) {
                                    or(r, 0, 0, 1, 0) | 0;
                                    break;
                                } else {
                                    E[n >> 2] = 1138;
                                    E[(n + 4) >> 2] = 2502;
                                    E[(n + 8) >> 2] = 1504;
                                    Si(t, 1084, n) | 0;
                                    Mi(t) | 0;
                                    break;
                                }
                            }
                        } while (0);
                        r = E[(e + 176) >> 2] | 0;
                        do {
                            if (r) {
                                l = E[(r + -4) >> 2] | 0;
                                r = (r + -8) | 0;
                                if (
                                    !((l | 0) != 0
                                        ? (l | 0) == (~E[r >> 2] | 0)
                                        : 0)
                                ) {
                                    E[u >> 2] = 1138;
                                    E[(u + 4) >> 2] = 647;
                                    E[(u + 8) >> 2] = 1851;
                                    Si(t, 1084, u) | 0;
                                    Mi(t) | 0;
                                }
                                if (!(r & 7)) {
                                    or(r, 0, 0, 1, 0) | 0;
                                    break;
                                } else {
                                    E[o >> 2] = 1138;
                                    E[(o + 4) >> 2] = 2502;
                                    E[(o + 8) >> 2] = 1504;
                                    Si(t, 1084, o) | 0;
                                    Mi(t) | 0;
                                    break;
                                }
                            }
                        } while (0);
                        if (!(e & 7)) {
                            or(e, 0, 0, 1, 0) | 0;
                            m = s;
                            return;
                        } else {
                            E[a >> 2] = 1138;
                            E[(a + 4) >> 2] = 2502;
                            E[(a + 8) >> 2] = 1504;
                            Si(t, 1084, a) | 0;
                            Mi(t) | 0;
                            m = s;
                            return;
                        }
                    }
                    function fr(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0;
                        s = m;
                        m = (m + 544) | 0;
                        a = (s + 16) | 0;
                        r = s;
                        o = (s + 32) | 0;
                        t = (e + 8) | 0;
                        i = E[t >> 2] | 0;
                        if (((i + -1) | 0) >>> 0 >= 8192) {
                            E[r >> 2] = 1138;
                            E[(r + 4) >> 2] = 3002;
                            E[(r + 8) >> 2] = 1529;
                            Si(o, 1084, r) | 0;
                            Mi(o) | 0;
                        }
                        E[e >> 2] = i;
                        n = (e + 20) | 0;
                        r = E[n >> 2] | 0;
                        if (!r) {
                            r = nr(180, 0) | 0;
                            if (!r) r = 0;
                            else {
                                u = (r + 164) | 0;
                                E[u >> 2] = 0;
                                E[(u + 4) >> 2] = 0;
                                E[(u + 8) >> 2] = 0;
                                E[(u + 12) >> 2] = 0;
                            }
                            E[n >> 2] = r;
                            u = E[e >> 2] | 0;
                        } else u = i;
                        if (!(E[t >> 2] | 0)) {
                            E[a >> 2] = 1138;
                            E[(a + 4) >> 2] = 906;
                            E[(a + 8) >> 2] = 1769;
                            Si(o, 1084, a) | 0;
                            Mi(o) | 0;
                            a = E[e >> 2] | 0;
                        } else a = u;
                        o = E[(e + 4) >> 2] | 0;
                        if (a >>> 0 > 16) {
                            n = a;
                            i = 0;
                        } else {
                            e = 0;
                            e = tr(r, u, o, e) | 0;
                            m = s;
                            return e | 0;
                        }
                        while (1) {
                            t = (i + 1) | 0;
                            if (n >>> 0 > 3) {
                                n = n >>> 1;
                                i = t;
                            } else {
                                n = t;
                                break;
                            }
                        }
                        e =
                            (i +
                                2 +
                                (((n | 0) != 32) &
                                    ((1 << n) >>> 0 < a >>> 0) &
                                    1)) |
                            0;
                        e = e >>> 0 < 11 ? e & 255 : 11;
                        e = tr(r, u, o, e) | 0;
                        m = s;
                        return e | 0;
                    }
                    function _r(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0;
                        v = m;
                        m = (m + 720) | 0;
                        p = (v + 160) | 0;
                        I = (v + 144) | 0;
                        C = (v + 128) | 0;
                        N = (v + 112) | 0;
                        h = (v + 96) | 0;
                        S = (v + 80) | 0;
                        M = (v + 64) | 0;
                        R = (v + 48) | 0;
                        f = (v + 32) | 0;
                        u = (v + 16) | 0;
                        t = v;
                        O = (v + 200) | 0;
                        P = (v + 176) | 0;
                        w = cr(e, 14) | 0;
                        if (!w) {
                            E[r >> 2] = 0;
                            i = (r + 4) | 0;
                            n = E[i >> 2] | 0;
                            if (n) {
                                if (!(n & 7)) or(n, 0, 0, 1, 0) | 0;
                                else {
                                    E[t >> 2] = 1138;
                                    E[(t + 4) >> 2] = 2502;
                                    E[(t + 8) >> 2] = 1504;
                                    Si(O, 1084, t) | 0;
                                    Mi(O) | 0;
                                }
                                E[i >> 2] = 0;
                                E[(r + 8) >> 2] = 0;
                                E[(r + 12) >> 2] = 0;
                            }
                            _[(r + 16) >> 0] = 0;
                            i = (r + 20) | 0;
                            n = E[i >> 2] | 0;
                            if (!n) {
                                r = 1;
                                m = v;
                                return r | 0;
                            }
                            lr(n);
                            E[i >> 2] = 0;
                            r = 1;
                            m = v;
                            return r | 0;
                        }
                        d = (r + 4) | 0;
                        A = (r + 8) | 0;
                        i = E[A >> 2] | 0;
                        if ((i | 0) != (w | 0)) {
                            if (i >>> 0 <= w >>> 0) {
                                do {
                                    if (
                                        (E[(r + 12) >> 2] | 0) >>> 0 <
                                        w >>> 0
                                    ) {
                                        if (
                                            rr(
                                                d,
                                                w,
                                                ((i + 1) | 0) == (w | 0),
                                                1,
                                                0,
                                            ) | 0
                                        ) {
                                            i = E[A >> 2] | 0;
                                            break;
                                        }
                                        _[(r + 16) >> 0] = 1;
                                        r = 0;
                                        m = v;
                                        return r | 0;
                                    }
                                } while (0);
                                qi(((E[d >> 2] | 0) + i) | 0, 0, (w - i) | 0) |
                                    0;
                            }
                            E[A >> 2] = w;
                        }
                        qi(E[d >> 2] | 0, 0, w | 0) | 0;
                        c = (e + 20) | 0;
                        i = E[c >> 2] | 0;
                        if ((i | 0) < 5) {
                            o = (e + 4) | 0;
                            a = (e + 8) | 0;
                            t = (e + 16) | 0;
                            do {
                                n = E[o >> 2] | 0;
                                if ((n | 0) == (E[a >> 2] | 0)) n = 0;
                                else {
                                    E[o >> 2] = n + 1;
                                    n = T[n >> 0] | 0;
                                }
                                i = (i + 8) | 0;
                                E[c >> 2] = i;
                                if ((i | 0) >= 33) {
                                    E[u >> 2] = 1138;
                                    E[(u + 4) >> 2] = 3204;
                                    E[(u + 8) >> 2] = 1638;
                                    Si(O, 1084, u) | 0;
                                    Mi(O) | 0;
                                    i = E[c >> 2] | 0;
                                }
                                n = (n << (32 - i)) | E[t >> 2];
                                E[t >> 2] = n;
                            } while ((i | 0) < 5);
                        } else {
                            n = (e + 16) | 0;
                            t = n;
                            n = E[n >> 2] | 0;
                        }
                        l = n >>> 27;
                        E[t >> 2] = n << 5;
                        E[c >> 2] = i + -5;
                        if (((l + -1) | 0) >>> 0 > 20) {
                            r = 0;
                            m = v;
                            return r | 0;
                        }
                        E[(P + 20) >> 2] = 0;
                        E[P >> 2] = 0;
                        E[(P + 4) >> 2] = 0;
                        E[(P + 8) >> 2] = 0;
                        E[(P + 12) >> 2] = 0;
                        _[(P + 16) >> 0] = 0;
                        i = (P + 4) | 0;
                        n = (P + 8) | 0;
                        e: do {
                            if (rr(i, 21, 0, 1, 0) | 0) {
                                u = E[n >> 2] | 0;
                                s = E[i >> 2] | 0;
                                qi((s + u) | 0, 0, (21 - u) | 0) | 0;
                                E[n >> 2] = 21;
                                if (l) {
                                    t = (e + 4) | 0;
                                    o = (e + 8) | 0;
                                    a = (e + 16) | 0;
                                    u = 0;
                                    do {
                                        i = E[c >> 2] | 0;
                                        if ((i | 0) < 3)
                                            do {
                                                n = E[t >> 2] | 0;
                                                if ((n | 0) == (E[o >> 2] | 0))
                                                    n = 0;
                                                else {
                                                    E[t >> 2] = n + 1;
                                                    n = T[n >> 0] | 0;
                                                }
                                                i = (i + 8) | 0;
                                                E[c >> 2] = i;
                                                if ((i | 0) >= 33) {
                                                    E[f >> 2] = 1138;
                                                    E[(f + 4) >> 2] = 3204;
                                                    E[(f + 8) >> 2] = 1638;
                                                    Si(O, 1084, f) | 0;
                                                    Mi(O) | 0;
                                                    i = E[c >> 2] | 0;
                                                }
                                                n = (n << (32 - i)) | E[a >> 2];
                                                E[a >> 2] = n;
                                            } while ((i | 0) < 3);
                                        else n = E[a >> 2] | 0;
                                        E[a >> 2] = n << 3;
                                        E[c >> 2] = i + -3;
                                        _[(s + (T[(1599 + u) >> 0] | 0)) >> 0] =
                                            n >>> 29;
                                        u = (u + 1) | 0;
                                    } while ((u | 0) != (l | 0));
                                }
                                if (fr(P) | 0) {
                                    l = (e + 4) | 0;
                                    u = (e + 8) | 0;
                                    s = (e + 16) | 0;
                                    n = 0;
                                    r: while (1) {
                                        a = (w - n) | 0;
                                        i = Er(e, P) | 0;
                                        i: do {
                                            if (i >>> 0 < 17) {
                                                if (
                                                    (E[A >> 2] | 0) >>> 0 <=
                                                    n >>> 0
                                                ) {
                                                    E[R >> 2] = 1138;
                                                    E[(R + 4) >> 2] = 906;
                                                    E[(R + 8) >> 2] = 1769;
                                                    Si(O, 1084, R) | 0;
                                                    Mi(O) | 0;
                                                }
                                                _[((E[d >> 2] | 0) + n) >> 0] =
                                                    i;
                                                i = (n + 1) | 0;
                                            } else
                                                switch (i | 0) {
                                                    case 17: {
                                                        i = E[c >> 2] | 0;
                                                        if ((i | 0) < 3)
                                                            do {
                                                                t =
                                                                    E[l >> 2] |
                                                                    0;
                                                                if (
                                                                    (t | 0) ==
                                                                    (E[u >> 2] |
                                                                        0)
                                                                )
                                                                    t = 0;
                                                                else {
                                                                    E[l >> 2] =
                                                                        t + 1;
                                                                    t =
                                                                        T[
                                                                            t >>
                                                                                0
                                                                        ] | 0;
                                                                }
                                                                i = (i + 8) | 0;
                                                                E[c >> 2] = i;
                                                                if (
                                                                    (i | 0) >=
                                                                    33
                                                                ) {
                                                                    E[M >> 2] =
                                                                        1138;
                                                                    E[
                                                                        (M +
                                                                            4) >>
                                                                            2
                                                                    ] = 3204;
                                                                    E[
                                                                        (M +
                                                                            8) >>
                                                                            2
                                                                    ] = 1638;
                                                                    Si(
                                                                        O,
                                                                        1084,
                                                                        M,
                                                                    ) | 0;
                                                                    Mi(O) | 0;
                                                                    i =
                                                                        E[
                                                                            c >>
                                                                                2
                                                                        ] | 0;
                                                                }
                                                                t =
                                                                    (t <<
                                                                        (32 -
                                                                            i)) |
                                                                    E[s >> 2];
                                                                E[s >> 2] = t;
                                                            } while (
                                                                (i | 0) <
                                                                3
                                                            );
                                                        else t = E[s >> 2] | 0;
                                                        E[s >> 2] = t << 3;
                                                        E[c >> 2] = i + -3;
                                                        i =
                                                            ((t >>> 29) + 3) |
                                                            0;
                                                        if (i >>> 0 > a >>> 0) {
                                                            i = 0;
                                                            break e;
                                                        }
                                                        i = (i + n) | 0;
                                                        break i;
                                                    }
                                                    case 18: {
                                                        i = E[c >> 2] | 0;
                                                        if ((i | 0) < 7)
                                                            do {
                                                                t =
                                                                    E[l >> 2] |
                                                                    0;
                                                                if (
                                                                    (t | 0) ==
                                                                    (E[u >> 2] |
                                                                        0)
                                                                )
                                                                    t = 0;
                                                                else {
                                                                    E[l >> 2] =
                                                                        t + 1;
                                                                    t =
                                                                        T[
                                                                            t >>
                                                                                0
                                                                        ] | 0;
                                                                }
                                                                i = (i + 8) | 0;
                                                                E[c >> 2] = i;
                                                                if (
                                                                    (i | 0) >=
                                                                    33
                                                                ) {
                                                                    E[S >> 2] =
                                                                        1138;
                                                                    E[
                                                                        (S +
                                                                            4) >>
                                                                            2
                                                                    ] = 3204;
                                                                    E[
                                                                        (S +
                                                                            8) >>
                                                                            2
                                                                    ] = 1638;
                                                                    Si(
                                                                        O,
                                                                        1084,
                                                                        S,
                                                                    ) | 0;
                                                                    Mi(O) | 0;
                                                                    i =
                                                                        E[
                                                                            c >>
                                                                                2
                                                                        ] | 0;
                                                                }
                                                                t =
                                                                    (t <<
                                                                        (32 -
                                                                            i)) |
                                                                    E[s >> 2];
                                                                E[s >> 2] = t;
                                                            } while (
                                                                (i | 0) <
                                                                7
                                                            );
                                                        else t = E[s >> 2] | 0;
                                                        E[s >> 2] = t << 7;
                                                        E[c >> 2] = i + -7;
                                                        i =
                                                            ((t >>> 25) + 11) |
                                                            0;
                                                        if (i >>> 0 > a >>> 0) {
                                                            i = 0;
                                                            break e;
                                                        }
                                                        i = (i + n) | 0;
                                                        break i;
                                                    }
                                                    default: {
                                                        if (
                                                            ((i + -19) | 0) >>>
                                                                0 >=
                                                            2
                                                        ) {
                                                            b = 90;
                                                            break r;
                                                        }
                                                        o = E[c >> 2] | 0;
                                                        if ((i | 0) == 19) {
                                                            if ((o | 0) < 2) {
                                                                t = o;
                                                                while (1) {
                                                                    i =
                                                                        E[
                                                                            l >>
                                                                                2
                                                                        ] | 0;
                                                                    if (
                                                                        (i |
                                                                            0) ==
                                                                        (E[
                                                                            u >>
                                                                                2
                                                                        ] |
                                                                            0)
                                                                    )
                                                                        o = 0;
                                                                    else {
                                                                        E[
                                                                            l >>
                                                                                2
                                                                        ] =
                                                                            i +
                                                                            1;
                                                                        o =
                                                                            T[
                                                                                i >>
                                                                                    0
                                                                            ] |
                                                                            0;
                                                                    }
                                                                    i =
                                                                        (t +
                                                                            8) |
                                                                        0;
                                                                    E[c >> 2] =
                                                                        i;
                                                                    if (
                                                                        (i |
                                                                            0) >=
                                                                        33
                                                                    ) {
                                                                        E[
                                                                            h >>
                                                                                2
                                                                        ] =
                                                                            1138;
                                                                        E[
                                                                            (h +
                                                                                4) >>
                                                                                2
                                                                        ] =
                                                                            3204;
                                                                        E[
                                                                            (h +
                                                                                8) >>
                                                                                2
                                                                        ] =
                                                                            1638;
                                                                        Si(
                                                                            O,
                                                                            1084,
                                                                            h,
                                                                        ) | 0;
                                                                        Mi(O) |
                                                                            0;
                                                                        i =
                                                                            E[
                                                                                c >>
                                                                                    2
                                                                            ] |
                                                                            0;
                                                                    }
                                                                    t =
                                                                        (o <<
                                                                            (32 -
                                                                                i)) |
                                                                        E[
                                                                            s >>
                                                                                2
                                                                        ];
                                                                    E[s >> 2] =
                                                                        t;
                                                                    if (
                                                                        (i |
                                                                            0) <
                                                                        2
                                                                    )
                                                                        t = i;
                                                                    else break;
                                                                }
                                                            } else {
                                                                t =
                                                                    E[s >> 2] |
                                                                    0;
                                                                i = o;
                                                            }
                                                            E[s >> 2] = t << 2;
                                                            E[c >> 2] = i + -2;
                                                            o =
                                                                ((t >>> 30) +
                                                                    3) |
                                                                0;
                                                        } else {
                                                            if ((o | 0) < 6) {
                                                                t = o;
                                                                while (1) {
                                                                    i =
                                                                        E[
                                                                            l >>
                                                                                2
                                                                        ] | 0;
                                                                    if (
                                                                        (i |
                                                                            0) ==
                                                                        (E[
                                                                            u >>
                                                                                2
                                                                        ] |
                                                                            0)
                                                                    )
                                                                        o = 0;
                                                                    else {
                                                                        E[
                                                                            l >>
                                                                                2
                                                                        ] =
                                                                            i +
                                                                            1;
                                                                        o =
                                                                            T[
                                                                                i >>
                                                                                    0
                                                                            ] |
                                                                            0;
                                                                    }
                                                                    i =
                                                                        (t +
                                                                            8) |
                                                                        0;
                                                                    E[c >> 2] =
                                                                        i;
                                                                    if (
                                                                        (i |
                                                                            0) >=
                                                                        33
                                                                    ) {
                                                                        E[
                                                                            N >>
                                                                                2
                                                                        ] =
                                                                            1138;
                                                                        E[
                                                                            (N +
                                                                                4) >>
                                                                                2
                                                                        ] =
                                                                            3204;
                                                                        E[
                                                                            (N +
                                                                                8) >>
                                                                                2
                                                                        ] =
                                                                            1638;
                                                                        Si(
                                                                            O,
                                                                            1084,
                                                                            N,
                                                                        ) | 0;
                                                                        Mi(O) |
                                                                            0;
                                                                        i =
                                                                            E[
                                                                                c >>
                                                                                    2
                                                                            ] |
                                                                            0;
                                                                    }
                                                                    t =
                                                                        (o <<
                                                                            (32 -
                                                                                i)) |
                                                                        E[
                                                                            s >>
                                                                                2
                                                                        ];
                                                                    E[s >> 2] =
                                                                        t;
                                                                    if (
                                                                        (i |
                                                                            0) <
                                                                        6
                                                                    )
                                                                        t = i;
                                                                    else break;
                                                                }
                                                            } else {
                                                                t =
                                                                    E[s >> 2] |
                                                                    0;
                                                                i = o;
                                                            }
                                                            E[s >> 2] = t << 6;
                                                            E[c >> 2] = i + -6;
                                                            o =
                                                                ((t >>> 26) +
                                                                    7) |
                                                                0;
                                                        }
                                                        if (
                                                            ((n | 0) == 0) |
                                                            (o >>> 0 > a >>> 0)
                                                        ) {
                                                            i = 0;
                                                            break e;
                                                        }
                                                        i = (n + -1) | 0;
                                                        if (
                                                            (E[A >> 2] | 0) >>>
                                                                0 <=
                                                            i >>> 0
                                                        ) {
                                                            E[C >> 2] = 1138;
                                                            E[(C + 4) >> 2] =
                                                                906;
                                                            E[(C + 8) >> 2] =
                                                                1769;
                                                            Si(O, 1084, C) | 0;
                                                            Mi(O) | 0;
                                                        }
                                                        t =
                                                            _[
                                                                ((E[d >> 2] |
                                                                    0) +
                                                                    i) >>
                                                                    0
                                                            ] | 0;
                                                        if (
                                                            !((t << 24) >> 24)
                                                        ) {
                                                            i = 0;
                                                            break e;
                                                        }
                                                        i = (o + n) | 0;
                                                        if (
                                                            n >>> 0 >=
                                                            i >>> 0
                                                        ) {
                                                            i = n;
                                                            break i;
                                                        }
                                                        do {
                                                            if (
                                                                (E[A >> 2] |
                                                                    0) >>>
                                                                    0 <=
                                                                n >>> 0
                                                            ) {
                                                                E[I >> 2] =
                                                                    1138;
                                                                E[
                                                                    (I + 4) >> 2
                                                                ] = 906;
                                                                E[
                                                                    (I + 8) >> 2
                                                                ] = 1769;
                                                                Si(O, 1084, I) |
                                                                    0;
                                                                Mi(O) | 0;
                                                            }
                                                            _[
                                                                ((E[d >> 2] |
                                                                    0) +
                                                                    n) >>
                                                                    0
                                                            ] = t;
                                                            n = (n + 1) | 0;
                                                        } while (
                                                            (n | 0) !=
                                                            (i | 0)
                                                        );
                                                    }
                                                }
                                        } while (0);
                                        if (w >>> 0 > i >>> 0) n = i;
                                        else break;
                                    }
                                    if ((b | 0) == 90) {
                                        E[p >> 2] = 1138;
                                        E[(p + 4) >> 2] = 3145;
                                        E[(p + 8) >> 2] = 1620;
                                        Si(O, 1084, p) | 0;
                                        Mi(O) | 0;
                                        i = 0;
                                        break;
                                    }
                                    if ((w | 0) == (i | 0)) i = fr(r) | 0;
                                    else i = 0;
                                } else i = 0;
                            } else {
                                _[(P + 16) >> 0] = 1;
                                i = 0;
                            }
                        } while (0);
                        sr(P);
                        r = i;
                        m = v;
                        return r | 0;
                    }
                    function cr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0;
                        l = m;
                        m = (m + 528) | 0;
                        a = l;
                        o = (l + 16) | 0;
                        if (!r) {
                            s = 0;
                            m = l;
                            return s | 0;
                        }
                        if (r >>> 0 <= 16) {
                            s = Tr(e, r) | 0;
                            m = l;
                            return s | 0;
                        }
                        u = Tr(e, (r + -16) | 0) | 0;
                        s = (e + 20) | 0;
                        r = E[s >> 2] | 0;
                        if ((r | 0) < 16) {
                            n = (e + 4) | 0;
                            t = (e + 8) | 0;
                            i = (e + 16) | 0;
                            do {
                                e = E[n >> 2] | 0;
                                if ((e | 0) == (E[t >> 2] | 0)) e = 0;
                                else {
                                    E[n >> 2] = e + 1;
                                    e = T[e >> 0] | 0;
                                }
                                r = (r + 8) | 0;
                                E[s >> 2] = r;
                                if ((r | 0) >= 33) {
                                    E[a >> 2] = 1138;
                                    E[(a + 4) >> 2] = 3204;
                                    E[(a + 8) >> 2] = 1638;
                                    Si(o, 1084, a) | 0;
                                    Mi(o) | 0;
                                    r = E[s >> 2] | 0;
                                }
                                e = (e << (32 - r)) | E[i >> 2];
                                E[i >> 2] = e;
                            } while ((r | 0) < 16);
                        } else {
                            e = (e + 16) | 0;
                            i = e;
                            e = E[e >> 2] | 0;
                        }
                        E[i >> 2] = e << 16;
                        E[s >> 2] = r + -16;
                        s = (e >>> 16) | (u << 16);
                        m = l;
                        return s | 0;
                    }
                    function Er(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            A = 0,
                            R = 0,
                            M = 0;
                        M = m;
                        m = (m + 576) | 0;
                        _ = (M + 48) | 0;
                        f = (M + 32) | 0;
                        l = (M + 16) | 0;
                        s = M;
                        A = (M + 64) | 0;
                        c = E[(r + 20) >> 2] | 0;
                        R = (e + 20) | 0;
                        u = E[R >> 2] | 0;
                        do {
                            if ((u | 0) < 24) {
                                a = (e + 4) | 0;
                                n = E[a >> 2] | 0;
                                t = E[(e + 8) >> 2] | 0;
                                i = n >>> 0 < t >>> 0;
                                if ((u | 0) >= 16) {
                                    if (i) {
                                        E[a >> 2] = n + 1;
                                        i = T[n >> 0] | 0;
                                    } else i = 0;
                                    E[R >> 2] = u + 8;
                                    a = (e + 16) | 0;
                                    o = (i << (24 - u)) | E[a >> 2];
                                    E[a >> 2] = o;
                                    break;
                                }
                                if (i) {
                                    o = (T[n >> 0] | 0) << 8;
                                    i = (n + 1) | 0;
                                } else {
                                    o = 0;
                                    i = n;
                                }
                                if (i >>> 0 < t >>> 0) {
                                    n = T[i >> 0] | 0;
                                    i = (i + 1) | 0;
                                } else n = 0;
                                E[a >> 2] = i;
                                E[R >> 2] = u + 16;
                                a = (e + 16) | 0;
                                o = ((n | o) << (16 - u)) | E[a >> 2];
                                E[a >> 2] = o;
                            } else {
                                o = (e + 16) | 0;
                                a = o;
                                o = E[o >> 2] | 0;
                            }
                        } while (0);
                        t = ((o >>> 16) + 1) | 0;
                        do {
                            if (t >>> 0 <= (E[(c + 16) >> 2] | 0) >>> 0) {
                                n =
                                    E[
                                        ((E[(c + 168) >> 2] | 0) +
                                            ((o >>>
                                                ((32 - (E[(c + 8) >> 2] | 0)) |
                                                    0)) <<
                                                2)) >>
                                            2
                                    ] | 0;
                                if ((n | 0) == -1) {
                                    E[s >> 2] = 1138;
                                    E[(s + 4) >> 2] = 3249;
                                    E[(s + 8) >> 2] = 1665;
                                    Si(A, 1084, s) | 0;
                                    Mi(A) | 0;
                                }
                                i = n & 65535;
                                n = n >>> 16;
                                if ((E[(r + 8) >> 2] | 0) >>> 0 <= i >>> 0) {
                                    E[l >> 2] = 1138;
                                    E[(l + 4) >> 2] = 905;
                                    E[(l + 8) >> 2] = 1769;
                                    Si(A, 1084, l) | 0;
                                    Mi(A) | 0;
                                }
                                if (
                                    (T[((E[(r + 4) >> 2] | 0) + i) >> 0] |
                                        0 |
                                        0) !=
                                    (n | 0)
                                ) {
                                    E[f >> 2] = 1138;
                                    E[(f + 4) >> 2] = 3253;
                                    E[(f + 8) >> 2] = 1682;
                                    Si(A, 1084, f) | 0;
                                    Mi(A) | 0;
                                }
                            } else {
                                n = E[(c + 20) >> 2] | 0;
                                while (1) {
                                    i = (n + -1) | 0;
                                    if (
                                        t >>> 0 >
                                        (E[(c + 28 + (i << 2)) >> 2] | 0) >>> 0
                                    )
                                        n = (n + 1) | 0;
                                    else break;
                                }
                                i =
                                    ((o >>> ((32 - n) | 0)) +
                                        (E[(c + 96 + (i << 2)) >> 2] | 0)) |
                                    0;
                                if (i >>> 0 < (E[r >> 2] | 0) >>> 0) {
                                    i =
                                        d[
                                            ((E[(c + 176) >> 2] | 0) +
                                                (i << 1)) >>
                                                1
                                        ] | 0;
                                    break;
                                }
                                E[_ >> 2] = 1138;
                                E[(_ + 4) >> 2] = 3271;
                                E[(_ + 8) >> 2] = 1620;
                                Si(A, 1084, _) | 0;
                                Mi(A) | 0;
                                R = 0;
                                m = M;
                                return R | 0;
                            }
                        } while (0);
                        E[a >> 2] = E[a >> 2] << n;
                        E[R >> 2] = (E[R >> 2] | 0) - n;
                        R = i;
                        m = M;
                        return R | 0;
                    }
                    function Tr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0;
                        l = m;
                        m = (m + 544) | 0;
                        u = (l + 16) | 0;
                        i = l;
                        a = (l + 32) | 0;
                        if (r >>> 0 >= 33) {
                            E[i >> 2] = 1138;
                            E[(i + 4) >> 2] = 3195;
                            E[(i + 8) >> 2] = 1622;
                            Si(a, 1084, i) | 0;
                            Mi(a) | 0;
                        }
                        s = (e + 20) | 0;
                        i = E[s >> 2] | 0;
                        if ((i | 0) >= (r | 0)) {
                            t = (e + 16) | 0;
                            o = t;
                            t = E[t >> 2] | 0;
                            a = i;
                            u = (32 - r) | 0;
                            u = t >>> u;
                            t = t << r;
                            E[o >> 2] = t;
                            r = (a - r) | 0;
                            E[s >> 2] = r;
                            m = l;
                            return u | 0;
                        }
                        t = (e + 4) | 0;
                        o = (e + 8) | 0;
                        n = (e + 16) | 0;
                        do {
                            e = E[t >> 2] | 0;
                            if ((e | 0) == (E[o >> 2] | 0)) e = 0;
                            else {
                                E[t >> 2] = e + 1;
                                e = T[e >> 0] | 0;
                            }
                            i = (i + 8) | 0;
                            E[s >> 2] = i;
                            if ((i | 0) >= 33) {
                                E[u >> 2] = 1138;
                                E[(u + 4) >> 2] = 3204;
                                E[(u + 8) >> 2] = 1638;
                                Si(a, 1084, u) | 0;
                                Mi(a) | 0;
                                i = E[s >> 2] | 0;
                            }
                            e = (e << (32 - i)) | E[n >> 2];
                            E[n >> 2] = e;
                        } while ((i | 0) < (r | 0));
                        u = (32 - r) | 0;
                        u = e >>> u;
                        a = e << r;
                        E[n >> 2] = a;
                        r = (i - r) | 0;
                        E[s >> 2] = r;
                        m = l;
                        return u | 0;
                    }
                    function dr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            M = 0;
                        A = m;
                        m = (m + 528) | 0;
                        c = A;
                        f = (A + 16) | 0;
                        if (((e | 0) == 0) | (r >>> 0 < 62)) {
                            d = 0;
                            m = A;
                            return d | 0;
                        }
                        l = nr(300, 0) | 0;
                        if (!l) {
                            d = 0;
                            m = A;
                            return d | 0;
                        }
                        E[l >> 2] = 519686845;
                        i = (l + 4) | 0;
                        E[i >> 2] = 0;
                        n = (l + 8) | 0;
                        E[n >> 2] = 0;
                        s = (l + 88) | 0;
                        t = (l + 136) | 0;
                        o = (l + 160) | 0;
                        a = s;
                        u = (a + 44) | 0;
                        do {
                            E[a >> 2] = 0;
                            a = (a + 4) | 0;
                        } while ((a | 0) < (u | 0));
                        _[(s + 44) >> 0] = 0;
                        R = (l + 184) | 0;
                        a = (l + 208) | 0;
                        u = (l + 232) | 0;
                        M = (l + 252) | 0;
                        E[M >> 2] = 0;
                        E[(M + 4) >> 2] = 0;
                        E[(M + 8) >> 2] = 0;
                        _[(M + 12) >> 0] = 0;
                        M = (l + 268) | 0;
                        E[M >> 2] = 0;
                        E[(M + 4) >> 2] = 0;
                        E[(M + 8) >> 2] = 0;
                        _[(M + 12) >> 0] = 0;
                        M = (l + 284) | 0;
                        E[M >> 2] = 0;
                        E[(M + 4) >> 2] = 0;
                        E[(M + 8) >> 2] = 0;
                        _[(M + 12) >> 0] = 0;
                        E[t >> 2] = 0;
                        E[(t + 4) >> 2] = 0;
                        E[(t + 8) >> 2] = 0;
                        E[(t + 12) >> 2] = 0;
                        E[(t + 16) >> 2] = 0;
                        _[(t + 20) >> 0] = 0;
                        E[o >> 2] = 0;
                        E[(o + 4) >> 2] = 0;
                        E[(o + 8) >> 2] = 0;
                        E[(o + 12) >> 2] = 0;
                        E[(o + 16) >> 2] = 0;
                        _[(o + 20) >> 0] = 0;
                        E[R >> 2] = 0;
                        E[(R + 4) >> 2] = 0;
                        E[(R + 8) >> 2] = 0;
                        E[(R + 12) >> 2] = 0;
                        E[(R + 16) >> 2] = 0;
                        _[(R + 20) >> 0] = 0;
                        E[a >> 2] = 0;
                        E[(a + 4) >> 2] = 0;
                        E[(a + 8) >> 2] = 0;
                        E[(a + 12) >> 2] = 0;
                        E[(a + 16) >> 2] = 0;
                        _[(a + 20) >> 0] = 0;
                        E[u >> 2] = 0;
                        E[(u + 4) >> 2] = 0;
                        E[(u + 8) >> 2] = 0;
                        E[(u + 12) >> 2] = 0;
                        _[(u + 16) >> 0] = 0;
                        do {
                            if (
                                (
                                    (
                                        r >>> 0 >= 74
                                            ? (((T[e >> 0] | 0) << 8) |
                                                  (T[(e + 1) >> 0] | 0) |
                                                  0) ==
                                              18552
                                            : 0
                                    )
                                        ? (((T[(e + 2) >> 0] | 0) << 8) |
                                              (T[(e + 3) >> 0] | 0)) >>>
                                              0 >=
                                          74
                                        : 0
                                )
                                    ? (((T[(e + 7) >> 0] | 0) << 16) |
                                          ((T[(e + 6) >> 0] | 0) << 24) |
                                          ((T[(e + 8) >> 0] | 0) << 8) |
                                          (T[(e + 9) >> 0] | 0)) >>>
                                          0 <=
                                      r >>> 0
                                    : 0
                            ) {
                                E[s >> 2] = e;
                                E[i >> 2] = e;
                                E[n >> 2] = r;
                                if (pr(l) | 0) {
                                    i = E[s >> 2] | 0;
                                    if (
                                        ((T[(i + 39) >> 0] | 0) << 8) |
                                        (T[(i + 40) >> 0] | 0)
                                    ) {
                                        if (!(wr(l) | 0)) break;
                                        if (!(br(l) | 0)) break;
                                        i = E[s >> 2] | 0;
                                    }
                                    if (
                                        !(
                                            ((T[(i + 55) >> 0] | 0) << 8) |
                                            (T[(i + 56) >> 0] | 0)
                                        )
                                    ) {
                                        M = l;
                                        m = A;
                                        return M | 0;
                                    }
                                    if (Or(l) | 0 ? Pr(l) | 0 : 0) {
                                        M = l;
                                        m = A;
                                        return M | 0;
                                    }
                                }
                            } else d = 7;
                        } while (0);
                        if ((d | 0) == 7) E[s >> 2] = 0;
                        Fr(l);
                        if (!(l & 7)) {
                            or(l, 0, 0, 1, 0) | 0;
                            M = 0;
                            m = A;
                            return M | 0;
                        } else {
                            E[c >> 2] = 1138;
                            E[(c + 4) >> 2] = 2502;
                            E[(c + 8) >> 2] = 1504;
                            Si(f, 1084, c) | 0;
                            Mi(f) | 0;
                            M = 0;
                            m = A;
                            return M | 0;
                        }
                        return 0;
                    }
                    function Ar(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        var o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0;
                        f = m;
                        m = (m + 528) | 0;
                        l = f;
                        s = (f + 16) | 0;
                        o = E[(e + 88) >> 2] | 0;
                        u =
                            ((T[(o + 70 + (t << 2) + 1) >> 0] | 0) << 16) |
                            ((T[(o + 70 + (t << 2)) >> 0] | 0) << 24) |
                            ((T[(o + 70 + (t << 2) + 2) >> 0] | 0) << 8) |
                            (T[(o + 70 + (t << 2) + 3) >> 0] | 0);
                        a = (t + 1) | 0;
                        if (a >>> 0 < (T[(o + 16) >> 0] | 0) >>> 0)
                            o =
                                ((T[(o + 70 + (a << 2) + 1) >> 0] | 0) << 16) |
                                ((T[(o + 70 + (a << 2)) >> 0] | 0) << 24) |
                                ((T[(o + 70 + (a << 2) + 2) >> 0] | 0) << 8) |
                                (T[(o + 70 + (a << 2) + 3) >> 0] | 0);
                        else o = E[(e + 8) >> 2] | 0;
                        if (o >>> 0 > u >>> 0) {
                            s = (e + 4) | 0;
                            s = E[s >> 2] | 0;
                            s = (s + u) | 0;
                            l = (o - u) | 0;
                            l = Rr(e, s, l, r, i, n, t) | 0;
                            m = f;
                            return l | 0;
                        }
                        E[l >> 2] = 1138;
                        E[(l + 4) >> 2] = 3690;
                        E[(l + 8) >> 2] = 1780;
                        Si(s, 1084, l) | 0;
                        Mi(s) | 0;
                        s = (e + 4) | 0;
                        s = E[s >> 2] | 0;
                        s = (s + u) | 0;
                        l = (o - u) | 0;
                        l = Rr(e, s, l, r, i, n, t) | 0;
                        m = f;
                        return l | 0;
                    }
                    function Rr(e, r, i, n, t, o, a) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        a = a | 0;
                        var u = 0,
                            s = 0,
                            l = 0,
                            f = 0;
                        f = E[(e + 88) >> 2] | 0;
                        s =
                            (((T[(f + 12) >> 0] | 0) << 8) |
                                (T[(f + 13) >> 0] | 0)) >>>
                            a;
                        l =
                            (((T[(f + 14) >> 0] | 0) << 8) |
                                (T[(f + 15) >> 0] | 0)) >>>
                            a;
                        s = s >>> 0 > 1 ? ((s + 3) | 0) >>> 2 : 1;
                        l = l >>> 0 > 1 ? ((l + 3) | 0) >>> 2 : 1;
                        f = (f + 18) | 0;
                        a = _[f >> 0] | 0;
                        a =
                            fe(
                                ((a << 24) >> 24 == 0) | ((a << 24) >> 24 == 9)
                                    ? 8
                                    : 16,
                                s,
                            ) | 0;
                        if (o)
                            if ((((o & 3) | 0) == 0) & (a >>> 0 <= o >>> 0))
                                a = o;
                            else {
                                e = 0;
                                return e | 0;
                            }
                        if ((fe(a, l) | 0) >>> 0 > t >>> 0) {
                            e = 0;
                            return e | 0;
                        }
                        o = ((s + 1) | 0) >>> 1;
                        u = ((l + 1) | 0) >>> 1;
                        if (!i) {
                            e = 0;
                            return e | 0;
                        }
                        E[(e + 92) >> 2] = r;
                        E[(e + 96) >> 2] = r;
                        E[(e + 104) >> 2] = i;
                        E[(e + 100) >> 2] = r + i;
                        E[(e + 108) >> 2] = 0;
                        E[(e + 112) >> 2] = 0;
                        switch (T[f >> 0] | 0 | 0) {
                            case 0: {
                                vr(e, n, t, a, s, l, o, u) | 0;
                                e = 1;
                                return e | 0;
                            }
                            case 4:
                            case 6:
                            case 5:
                            case 3:
                            case 2: {
                                Br(e, n, t, a, s, l, o, u) | 0;
                                e = 1;
                                return e | 0;
                            }
                            case 9: {
                                Lr(e, n, t, a, s, l, o, u) | 0;
                                e = 1;
                                return e | 0;
                            }
                            case 8:
                            case 7: {
                                kr(e, n, t, a, s, l, o, u) | 0;
                                e = 1;
                                return e | 0;
                            }
                            default: {
                                e = 0;
                                return e | 0;
                            }
                        }
                        return 0;
                    }
                    function Mr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0;
                        n = m;
                        m = (m + 48) | 0;
                        i = n;
                        E[i >> 2] = 40;
                        ar(e, r, i) | 0;
                        m = n;
                        return E[(i + 4) >> 2] | 0;
                    }
                    function Sr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0;
                        n = m;
                        m = (m + 48) | 0;
                        i = n;
                        E[i >> 2] = 40;
                        ar(e, r, i) | 0;
                        m = n;
                        return E[(i + 8) >> 2] | 0;
                    }
                    function mr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0;
                        n = m;
                        m = (m + 48) | 0;
                        i = n;
                        E[i >> 2] = 40;
                        ar(e, r, i) | 0;
                        m = n;
                        return E[(i + 12) >> 2] | 0;
                    }
                    function hr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0;
                        n = m;
                        m = (m + 48) | 0;
                        i = n;
                        E[i >> 2] = 40;
                        ar(e, r, i) | 0;
                        m = n;
                        return E[(i + 32) >> 2] | 0;
                    }
                    function Nr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0;
                        t = m;
                        m = (m + 576) | 0;
                        n = (t + 40) | 0;
                        i = (t + 56) | 0;
                        o = t;
                        E[o >> 2] = 40;
                        ar(e, r, o) | 0;
                        r = (o + 32) | 0;
                        e = E[(r + 4) >> 2] | 0;
                        do {
                            switch (E[r >> 2] | 0) {
                                case 0: {
                                    if (!e) {
                                        o = 8;
                                        m = t;
                                        return o | 0;
                                    } else e = 14;
                                    break;
                                }
                                case 1: {
                                    if (!e) e = 13;
                                    else e = 14;
                                    break;
                                }
                                case 2: {
                                    if (!e) e = 13;
                                    else e = 14;
                                    break;
                                }
                                case 3: {
                                    if (!e) e = 13;
                                    else e = 14;
                                    break;
                                }
                                case 4: {
                                    if (!e) e = 13;
                                    else e = 14;
                                    break;
                                }
                                case 5: {
                                    if (!e) e = 13;
                                    else e = 14;
                                    break;
                                }
                                case 6: {
                                    if (!e) e = 13;
                                    else e = 14;
                                    break;
                                }
                                case 7: {
                                    if (!e) e = 13;
                                    else e = 14;
                                    break;
                                }
                                case 8: {
                                    if (!e) e = 13;
                                    else e = 14;
                                    break;
                                }
                                case 9: {
                                    if (!e) {
                                        o = 8;
                                        m = t;
                                        return o | 0;
                                    } else e = 14;
                                    break;
                                }
                                case 10: {
                                    if (!e) {
                                        o = 8;
                                        m = t;
                                        return o | 0;
                                    } else e = 14;
                                    break;
                                }
                                default:
                                    e = 14;
                            }
                        } while (0);
                        if ((e | 0) == 13) {
                            o = 16;
                            m = t;
                            return o | 0;
                        } else if ((e | 0) == 14) {
                            E[n >> 2] = 1138;
                            E[(n + 4) >> 2] = 2668;
                            E[(n + 8) >> 2] = 1523;
                            Si(i, 1084, n) | 0;
                            Mi(i) | 0;
                            o = 0;
                            m = t;
                            return o | 0;
                        }
                        return 0;
                    }
                    function Cr(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0;
                        u = m;
                        m = (m + 576) | 0;
                        o = (u + 40) | 0;
                        t = (u + 56) | 0;
                        s = u;
                        E[s >> 2] = 40;
                        ar(e, r, s) | 0;
                        n = ((((E[(s + 4) >> 2] | 0) >>> i) + 3) | 0) >>> 2;
                        r = ((((E[(s + 8) >> 2] | 0) >>> i) + 3) | 0) >>> 2;
                        i = (s + 32) | 0;
                        e = E[(i + 4) >> 2] | 0;
                        do {
                            switch (E[i >> 2] | 0) {
                                case 0: {
                                    if (!e) e = 8;
                                    else a = 14;
                                    break;
                                }
                                case 1: {
                                    if (!e) a = 13;
                                    else a = 14;
                                    break;
                                }
                                case 2: {
                                    if (!e) a = 13;
                                    else a = 14;
                                    break;
                                }
                                case 3: {
                                    if (!e) a = 13;
                                    else a = 14;
                                    break;
                                }
                                case 4: {
                                    if (!e) a = 13;
                                    else a = 14;
                                    break;
                                }
                                case 5: {
                                    if (!e) a = 13;
                                    else a = 14;
                                    break;
                                }
                                case 6: {
                                    if (!e) a = 13;
                                    else a = 14;
                                    break;
                                }
                                case 7: {
                                    if (!e) a = 13;
                                    else a = 14;
                                    break;
                                }
                                case 8: {
                                    if (!e) a = 13;
                                    else a = 14;
                                    break;
                                }
                                case 9: {
                                    if (!e) e = 8;
                                    else a = 14;
                                    break;
                                }
                                case 10: {
                                    if (!e) e = 8;
                                    else a = 14;
                                    break;
                                }
                                default:
                                    a = 14;
                            }
                        } while (0);
                        if ((a | 0) == 13) e = 16;
                        else if ((a | 0) == 14) {
                            E[o >> 2] = 1138;
                            E[(o + 4) >> 2] = 2668;
                            E[(o + 8) >> 2] = 1523;
                            Si(t, 1084, o) | 0;
                            Mi(t) | 0;
                            e = 0;
                        }
                        s = fe(fe(r, n) | 0, e) | 0;
                        m = u;
                        return s | 0;
                    }
                    function Ir(e, r, i, n, t, o) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        var a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            T = 0,
                            d = 0,
                            A = 0;
                        A = m;
                        m = (m + 592) | 0;
                        d = (A + 56) | 0;
                        a = (A + 40) | 0;
                        c = (A + 72) | 0;
                        _ = A;
                        T = (A + 68) | 0;
                        E[_ >> 2] = 40;
                        ar(e, r, _) | 0;
                        u = (E[(_ + 4) >> 2] | 0) >>> t;
                        s = (E[(_ + 8) >> 2] | 0) >>> t;
                        _ = (_ + 32) | 0;
                        n = E[(_ + 4) >> 2] | 0;
                        do {
                            switch (E[_ >> 2] | 0) {
                                case 0: {
                                    if (!n) _ = 8;
                                    else l = 14;
                                    break;
                                }
                                case 1: {
                                    if (!n) l = 13;
                                    else l = 14;
                                    break;
                                }
                                case 2: {
                                    if (!n) l = 13;
                                    else l = 14;
                                    break;
                                }
                                case 3: {
                                    if (!n) l = 13;
                                    else l = 14;
                                    break;
                                }
                                case 4: {
                                    if (!n) l = 13;
                                    else l = 14;
                                    break;
                                }
                                case 5: {
                                    if (!n) l = 13;
                                    else l = 14;
                                    break;
                                }
                                case 6: {
                                    if (!n) l = 13;
                                    else l = 14;
                                    break;
                                }
                                case 7: {
                                    if (!n) l = 13;
                                    else l = 14;
                                    break;
                                }
                                case 8: {
                                    if (!n) l = 13;
                                    else l = 14;
                                    break;
                                }
                                case 9: {
                                    if (!n) _ = 8;
                                    else l = 14;
                                    break;
                                }
                                case 10: {
                                    if (!n) _ = 8;
                                    else l = 14;
                                    break;
                                }
                                default:
                                    l = 14;
                            }
                        } while (0);
                        if ((l | 0) == 13) _ = 16;
                        else if ((l | 0) == 14) {
                            E[a >> 2] = 1138;
                            E[(a + 4) >> 2] = 2668;
                            E[(a + 8) >> 2] = 1523;
                            Si(c, 1084, a) | 0;
                            Mi(c) | 0;
                            _ = 0;
                        }
                        E[T >> 2] = i;
                        f = dr(e, r) | 0;
                        r = (o + t) | 0;
                        if (r >>> 0 > t >>> 0) {
                            l = (f | 0) == 0;
                            e = i;
                            while (1) {
                                n = fe(((u + 3) | 0) >>> 2, _) | 0;
                                a = fe(n, ((s + 3) | 0) >>> 2) | 0;
                                if (
                                    !((t >>> 0 > 15) | (l | (a >>> 0 < 8)))
                                        ? (E[f >> 2] | 0) == 519686845
                                        : 0
                                )
                                    Ar(f, T, a, n, t) | 0;
                                e = (e + a) | 0;
                                E[T >> 2] = e;
                                t = (t + 1) | 0;
                                if ((t | 0) == (r | 0)) break;
                                else {
                                    s = s >>> 1;
                                    u = u >>> 1;
                                }
                            }
                        }
                        if (!f) {
                            m = A;
                            return;
                        }
                        if ((E[f >> 2] | 0) != 519686845) {
                            m = A;
                            return;
                        }
                        Fr(f);
                        if (!(f & 7)) {
                            or(f, 0, 0, 1, 0) | 0;
                            m = A;
                            return;
                        } else {
                            E[d >> 2] = 1138;
                            E[(d + 4) >> 2] = 2502;
                            E[(d + 8) >> 2] = 1504;
                            Si(c, 1084, d) | 0;
                            Mi(c) | 0;
                            m = A;
                            return;
                        }
                    }
                    function pr(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0;
                        a = (e + 92) | 0;
                        n = E[(e + 4) >> 2] | 0;
                        o = (e + 88) | 0;
                        t = E[o >> 2] | 0;
                        r =
                            ((T[(t + 68) >> 0] | 0) << 8) |
                            ((T[(t + 67) >> 0] | 0) << 16) |
                            (T[(t + 69) >> 0] | 0);
                        i = (n + r) | 0;
                        t =
                            ((T[(t + 65) >> 0] | 0) << 8) |
                            (T[(t + 66) >> 0] | 0);
                        if (!t) {
                            e = 0;
                            return e | 0;
                        }
                        E[a >> 2] = i;
                        E[(e + 96) >> 2] = i;
                        E[(e + 104) >> 2] = t;
                        E[(e + 100) >> 2] = n + (t + r);
                        E[(e + 108) >> 2] = 0;
                        E[(e + 112) >> 2] = 0;
                        if (!(_r(a, (e + 116) | 0) | 0)) {
                            e = 0;
                            return e | 0;
                        }
                        r = E[o >> 2] | 0;
                        do {
                            if (
                                !(
                                    ((T[(r + 39) >> 0] | 0) << 8) |
                                    (T[(r + 40) >> 0] | 0)
                                )
                            ) {
                                if (
                                    !(
                                        ((T[(r + 55) >> 0] | 0) << 8) |
                                        (T[(r + 56) >> 0] | 0)
                                    )
                                ) {
                                    e = 0;
                                    return e | 0;
                                }
                            } else {
                                if (!(_r(a, (e + 140) | 0) | 0)) {
                                    e = 0;
                                    return e | 0;
                                }
                                if (_r(a, (e + 188) | 0) | 0) {
                                    r = E[o >> 2] | 0;
                                    break;
                                } else {
                                    e = 0;
                                    return e | 0;
                                }
                            }
                        } while (0);
                        if (
                            ((T[(r + 55) >> 0] | 0) << 8) |
                            (T[(r + 56) >> 0] | 0)
                        ) {
                            if (!(_r(a, (e + 164) | 0) | 0)) {
                                e = 0;
                                return e | 0;
                            }
                            if (!(_r(a, (e + 212) | 0) | 0)) {
                                e = 0;
                                return e | 0;
                            }
                        }
                        e = 1;
                        return e | 0;
                    }
                    function wr(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            d = 0,
                            A = 0;
                        A = m;
                        m = (m + 576) | 0;
                        u = A;
                        a = (A + 64) | 0;
                        d = (A + 16) | 0;
                        n = (e + 88) | 0;
                        r = E[n >> 2] | 0;
                        c =
                            ((T[(r + 39) >> 0] | 0) << 8) |
                            (T[(r + 40) >> 0] | 0);
                        l = (e + 236) | 0;
                        o = (e + 240) | 0;
                        i = E[o >> 2] | 0;
                        if ((i | 0) != (c | 0)) {
                            if (i >>> 0 <= c >>> 0) {
                                do {
                                    if (
                                        (E[(e + 244) >> 2] | 0) >>> 0 <
                                        c >>> 0
                                    ) {
                                        if (
                                            rr(
                                                l,
                                                c,
                                                ((i + 1) | 0) == (c | 0),
                                                4,
                                                0,
                                            ) | 0
                                        ) {
                                            r = E[o >> 2] | 0;
                                            break;
                                        }
                                        _[(e + 248) >> 0] = 1;
                                        d = 0;
                                        m = A;
                                        return d | 0;
                                    } else r = i;
                                } while (0);
                                qi(
                                    ((E[l >> 2] | 0) + (r << 2)) | 0,
                                    0,
                                    ((c - r) << 2) | 0,
                                ) | 0;
                                r = E[n >> 2] | 0;
                            }
                            E[o >> 2] = c;
                        }
                        s = (e + 92) | 0;
                        i = E[(e + 4) >> 2] | 0;
                        n =
                            ((T[(r + 34) >> 0] | 0) << 8) |
                            ((T[(r + 33) >> 0] | 0) << 16) |
                            (T[(r + 35) >> 0] | 0);
                        t = (i + n) | 0;
                        r =
                            ((T[(r + 37) >> 0] | 0) << 8) |
                            ((T[(r + 36) >> 0] | 0) << 16) |
                            (T[(r + 38) >> 0] | 0);
                        if (!r) {
                            d = 0;
                            m = A;
                            return d | 0;
                        }
                        E[s >> 2] = t;
                        E[(e + 96) >> 2] = t;
                        E[(e + 104) >> 2] = r;
                        E[(e + 100) >> 2] = i + (r + n);
                        E[(e + 108) >> 2] = 0;
                        E[(e + 112) >> 2] = 0;
                        E[(d + 20) >> 2] = 0;
                        E[d >> 2] = 0;
                        E[(d + 4) >> 2] = 0;
                        E[(d + 8) >> 2] = 0;
                        E[(d + 12) >> 2] = 0;
                        _[(d + 16) >> 0] = 0;
                        e = (d + 24) | 0;
                        E[(d + 44) >> 2] = 0;
                        E[e >> 2] = 0;
                        E[(e + 4) >> 2] = 0;
                        E[(e + 8) >> 2] = 0;
                        E[(e + 12) >> 2] = 0;
                        _[(e + 16) >> 0] = 0;
                        if (
                            _r(s, d) | 0
                                ? ((f = (d + 24) | 0), _r(s, f) | 0)
                                : 0
                        ) {
                            if (!(E[o >> 2] | 0)) {
                                E[u >> 2] = 1138;
                                E[(u + 4) >> 2] = 906;
                                E[(u + 8) >> 2] = 1769;
                                Si(a, 1084, u) | 0;
                                Mi(a) | 0;
                            }
                            if (!c) r = 1;
                            else {
                                n = 0;
                                t = 0;
                                o = 0;
                                r = 0;
                                a = 0;
                                e = 0;
                                u = 0;
                                i = E[l >> 2] | 0;
                                while (1) {
                                    n = ((Er(s, d) | 0) + n) & 31;
                                    t = ((Er(s, f) | 0) + t) & 63;
                                    o = ((Er(s, d) | 0) + o) & 31;
                                    r = ((Er(s, d) | 0) + r) | 0;
                                    a = ((Er(s, f) | 0) + a) & 63;
                                    e = ((Er(s, d) | 0) + e) & 31;
                                    E[i >> 2] =
                                        (t << 5) |
                                        (n << 11) |
                                        o |
                                        (r << 27) |
                                        (a << 21) |
                                        (e << 16);
                                    u = (u + 1) | 0;
                                    if ((u | 0) == (c | 0)) {
                                        r = 1;
                                        break;
                                    } else {
                                        r = r & 31;
                                        i = (i + 4) | 0;
                                    }
                                }
                            }
                        } else r = 0;
                        sr((d + 24) | 0);
                        sr(d);
                        d = r;
                        m = A;
                        return d | 0;
                    }
                    function br(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0;
                        P = m;
                        m = (m + 1008) | 0;
                        a = P;
                        o = (P + 496) | 0;
                        O = (P + 472) | 0;
                        w = (P + 276) | 0;
                        b = (P + 80) | 0;
                        p = (P + 16) | 0;
                        t = E[(e + 88) >> 2] | 0;
                        I =
                            ((T[(t + 47) >> 0] | 0) << 8) |
                            (T[(t + 48) >> 0] | 0);
                        C = (e + 92) | 0;
                        r = E[(e + 4) >> 2] | 0;
                        i =
                            ((T[(t + 42) >> 0] | 0) << 8) |
                            ((T[(t + 41) >> 0] | 0) << 16) |
                            (T[(t + 43) >> 0] | 0);
                        n = (r + i) | 0;
                        t =
                            ((T[(t + 45) >> 0] | 0) << 8) |
                            ((T[(t + 44) >> 0] | 0) << 16) |
                            (T[(t + 46) >> 0] | 0);
                        if (!t) {
                            O = 0;
                            m = P;
                            return O | 0;
                        }
                        E[C >> 2] = n;
                        E[(e + 96) >> 2] = n;
                        E[(e + 104) >> 2] = t;
                        E[(e + 100) >> 2] = r + (t + i);
                        E[(e + 108) >> 2] = 0;
                        E[(e + 112) >> 2] = 0;
                        E[(O + 20) >> 2] = 0;
                        E[O >> 2] = 0;
                        E[(O + 4) >> 2] = 0;
                        E[(O + 8) >> 2] = 0;
                        E[(O + 12) >> 2] = 0;
                        _[(O + 16) >> 0] = 0;
                        if (_r(C, O) | 0) {
                            i = 0;
                            n = -3;
                            t = -3;
                            while (1) {
                                E[(w + (i << 2)) >> 2] = n;
                                E[(b + (i << 2)) >> 2] = t;
                                r = (n | 0) > 2;
                                i = (i + 1) | 0;
                                if ((i | 0) == 49) break;
                                else {
                                    n = r ? -3 : (n + 1) | 0;
                                    t = ((r & 1) + t) | 0;
                                }
                            }
                            r = p;
                            i = (r + 64) | 0;
                            do {
                                E[r >> 2] = 0;
                                r = (r + 4) | 0;
                            } while ((r | 0) < (i | 0));
                            N = (e + 252) | 0;
                            i = (e + 256) | 0;
                            r = E[i >> 2] | 0;
                            e: do {
                                if ((r | 0) == (I | 0)) u = 13;
                                else {
                                    if (r >>> 0 <= I >>> 0) {
                                        do {
                                            if (
                                                (E[(e + 260) >> 2] | 0) >>> 0 <
                                                I >>> 0
                                            )
                                                if (
                                                    rr(
                                                        N,
                                                        I,
                                                        ((r + 1) | 0) ==
                                                            (I | 0),
                                                        4,
                                                        0,
                                                    ) | 0
                                                ) {
                                                    r = E[i >> 2] | 0;
                                                    break;
                                                } else {
                                                    _[(e + 264) >> 0] = 1;
                                                    r = 0;
                                                    break e;
                                                }
                                        } while (0);
                                        qi(
                                            ((E[N >> 2] | 0) + (r << 2)) | 0,
                                            0,
                                            ((I - r) << 2) | 0,
                                        ) | 0;
                                    }
                                    E[i >> 2] = I;
                                    u = 13;
                                }
                            } while (0);
                            do {
                                if ((u | 0) == 13) {
                                    if (!I) {
                                        E[a >> 2] = 1138;
                                        E[(a + 4) >> 2] = 906;
                                        E[(a + 8) >> 2] = 1769;
                                        Si(o, 1084, a) | 0;
                                        Mi(o) | 0;
                                        r = 1;
                                        break;
                                    }
                                    n = (p + 4) | 0;
                                    t = (p + 8) | 0;
                                    e = (p + 12) | 0;
                                    o = (p + 16) | 0;
                                    a = (p + 20) | 0;
                                    u = (p + 24) | 0;
                                    s = (p + 28) | 0;
                                    l = (p + 32) | 0;
                                    f = (p + 36) | 0;
                                    c = (p + 40) | 0;
                                    d = (p + 44) | 0;
                                    A = (p + 48) | 0;
                                    R = (p + 52) | 0;
                                    M = (p + 56) | 0;
                                    S = (p + 60) | 0;
                                    h = 0;
                                    i = E[N >> 2] | 0;
                                    while (1) {
                                        r = 0;
                                        do {
                                            v = Er(C, O) | 0;
                                            N = r << 1;
                                            B = (p + (N << 2)) | 0;
                                            E[B >> 2] =
                                                ((E[B >> 2] | 0) +
                                                    (E[(w + (v << 2)) >> 2] |
                                                        0)) &
                                                3;
                                            N = (p + ((N | 1) << 2)) | 0;
                                            E[N >> 2] =
                                                ((E[N >> 2] | 0) +
                                                    (E[(b + (v << 2)) >> 2] |
                                                        0)) &
                                                3;
                                            r = (r + 1) | 0;
                                        } while ((r | 0) != 8);
                                        E[i >> 2] =
                                            ((T[(1713 + (E[n >> 2] | 0)) >> 0] |
                                                0) <<
                                                2) |
                                            (T[(1713 + (E[p >> 2] | 0)) >> 0] |
                                                0) |
                                            ((T[(1713 + (E[t >> 2] | 0)) >> 0] |
                                                0) <<
                                                4) |
                                            ((T[(1713 + (E[e >> 2] | 0)) >> 0] |
                                                0) <<
                                                6) |
                                            ((T[(1713 + (E[o >> 2] | 0)) >> 0] |
                                                0) <<
                                                8) |
                                            ((T[(1713 + (E[a >> 2] | 0)) >> 0] |
                                                0) <<
                                                10) |
                                            ((T[(1713 + (E[u >> 2] | 0)) >> 0] |
                                                0) <<
                                                12) |
                                            ((T[(1713 + (E[s >> 2] | 0)) >> 0] |
                                                0) <<
                                                14) |
                                            ((T[(1713 + (E[l >> 2] | 0)) >> 0] |
                                                0) <<
                                                16) |
                                            ((T[(1713 + (E[f >> 2] | 0)) >> 0] |
                                                0) <<
                                                18) |
                                            ((T[(1713 + (E[c >> 2] | 0)) >> 0] |
                                                0) <<
                                                20) |
                                            ((T[(1713 + (E[d >> 2] | 0)) >> 0] |
                                                0) <<
                                                22) |
                                            ((T[(1713 + (E[A >> 2] | 0)) >> 0] |
                                                0) <<
                                                24) |
                                            ((T[(1713 + (E[R >> 2] | 0)) >> 0] |
                                                0) <<
                                                26) |
                                            ((T[(1713 + (E[M >> 2] | 0)) >> 0] |
                                                0) <<
                                                28) |
                                            ((T[(1713 + (E[S >> 2] | 0)) >> 0] |
                                                0) <<
                                                30);
                                        h = (h + 1) | 0;
                                        if ((h | 0) == (I | 0)) {
                                            r = 1;
                                            break;
                                        } else i = (i + 4) | 0;
                                    }
                                }
                            } while (0);
                        } else r = 0;
                        sr(O);
                        B = r;
                        m = P;
                        return B | 0;
                    }
                    function Or(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            d = 0;
                        d = m;
                        m = (m + 560) | 0;
                        u = d;
                        a = (d + 40) | 0;
                        f = (d + 16) | 0;
                        t = E[(e + 88) >> 2] | 0;
                        l =
                            ((T[(t + 55) >> 0] | 0) << 8) |
                            (T[(t + 56) >> 0] | 0);
                        s = (e + 92) | 0;
                        r = E[(e + 4) >> 2] | 0;
                        i =
                            ((T[(t + 50) >> 0] | 0) << 8) |
                            ((T[(t + 49) >> 0] | 0) << 16) |
                            (T[(t + 51) >> 0] | 0);
                        n = (r + i) | 0;
                        t =
                            ((T[(t + 53) >> 0] | 0) << 8) |
                            ((T[(t + 52) >> 0] | 0) << 16) |
                            (T[(t + 54) >> 0] | 0);
                        if (!t) {
                            f = 0;
                            m = d;
                            return f | 0;
                        }
                        E[s >> 2] = n;
                        E[(e + 96) >> 2] = n;
                        E[(e + 104) >> 2] = t;
                        E[(e + 100) >> 2] = r + (t + i);
                        E[(e + 108) >> 2] = 0;
                        E[(e + 112) >> 2] = 0;
                        E[(f + 20) >> 2] = 0;
                        E[f >> 2] = 0;
                        E[(f + 4) >> 2] = 0;
                        E[(f + 8) >> 2] = 0;
                        E[(f + 12) >> 2] = 0;
                        _[(f + 16) >> 0] = 0;
                        e: do {
                            if (_r(s, f) | 0) {
                                o = (e + 268) | 0;
                                i = (e + 272) | 0;
                                r = E[i >> 2] | 0;
                                if ((r | 0) != (l | 0)) {
                                    if (r >>> 0 <= l >>> 0) {
                                        do {
                                            if (
                                                (E[(e + 276) >> 2] | 0) >>> 0 <
                                                l >>> 0
                                            )
                                                if (
                                                    rr(
                                                        o,
                                                        l,
                                                        ((r + 1) | 0) ==
                                                            (l | 0),
                                                        2,
                                                        0,
                                                    ) | 0
                                                ) {
                                                    r = E[i >> 2] | 0;
                                                    break;
                                                } else {
                                                    _[(e + 280) >> 0] = 1;
                                                    r = 0;
                                                    break e;
                                                }
                                        } while (0);
                                        qi(
                                            ((E[o >> 2] | 0) + (r << 1)) | 0,
                                            0,
                                            ((l - r) << 1) | 0,
                                        ) | 0;
                                    }
                                    E[i >> 2] = l;
                                }
                                if (!l) {
                                    E[u >> 2] = 1138;
                                    E[(u + 4) >> 2] = 906;
                                    E[(u + 8) >> 2] = 1769;
                                    Si(a, 1084, u) | 0;
                                    Mi(a) | 0;
                                    r = 1;
                                    break;
                                }
                                i = 0;
                                n = 0;
                                t = 0;
                                r = E[o >> 2] | 0;
                                while (1) {
                                    u = Er(s, f) | 0;
                                    i = (u + i) & 255;
                                    n = ((Er(s, f) | 0) + n) & 255;
                                    c[r >> 1] = (n << 8) | i;
                                    t = (t + 1) | 0;
                                    if ((t | 0) == (l | 0)) {
                                        r = 1;
                                        break;
                                    } else r = (r + 2) | 0;
                                }
                            } else r = 0;
                        } while (0);
                        sr(f);
                        f = r;
                        m = d;
                        return f | 0;
                    }
                    function Pr(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0,
                            L = 0;
                        v = m;
                        m = (m + 2416) | 0;
                        a = v;
                        o = (v + 1904) | 0;
                        P = (v + 1880) | 0;
                        b = (v + 980) | 0;
                        O = (v + 80) | 0;
                        w = (v + 16) | 0;
                        t = E[(e + 88) >> 2] | 0;
                        p =
                            ((T[(t + 63) >> 0] | 0) << 8) |
                            (T[(t + 64) >> 0] | 0);
                        I = (e + 92) | 0;
                        r = E[(e + 4) >> 2] | 0;
                        i =
                            ((T[(t + 58) >> 0] | 0) << 8) |
                            ((T[(t + 57) >> 0] | 0) << 16) |
                            (T[(t + 59) >> 0] | 0);
                        n = (r + i) | 0;
                        t =
                            ((T[(t + 61) >> 0] | 0) << 8) |
                            ((T[(t + 60) >> 0] | 0) << 16) |
                            (T[(t + 62) >> 0] | 0);
                        if (!t) {
                            P = 0;
                            m = v;
                            return P | 0;
                        }
                        E[I >> 2] = n;
                        E[(e + 96) >> 2] = n;
                        E[(e + 104) >> 2] = t;
                        E[(e + 100) >> 2] = r + (t + i);
                        E[(e + 108) >> 2] = 0;
                        E[(e + 112) >> 2] = 0;
                        E[(P + 20) >> 2] = 0;
                        E[P >> 2] = 0;
                        E[(P + 4) >> 2] = 0;
                        E[(P + 8) >> 2] = 0;
                        E[(P + 12) >> 2] = 0;
                        _[(P + 16) >> 0] = 0;
                        if (_r(I, P) | 0) {
                            i = 0;
                            n = -7;
                            t = -7;
                            while (1) {
                                E[(b + (i << 2)) >> 2] = n;
                                E[(O + (i << 2)) >> 2] = t;
                                r = (n | 0) > 6;
                                i = (i + 1) | 0;
                                if ((i | 0) == 225) break;
                                else {
                                    n = r ? -7 : (n + 1) | 0;
                                    t = ((r & 1) + t) | 0;
                                }
                            }
                            r = w;
                            i = (r + 64) | 0;
                            do {
                                E[r >> 2] = 0;
                                r = (r + 4) | 0;
                            } while ((r | 0) < (i | 0));
                            C = (e + 284) | 0;
                            i = (p * 3) | 0;
                            n = (e + 288) | 0;
                            r = E[n >> 2] | 0;
                            e: do {
                                if ((r | 0) == (i | 0)) u = 13;
                                else {
                                    if (r >>> 0 <= i >>> 0) {
                                        do {
                                            if (
                                                (E[(e + 292) >> 2] | 0) >>> 0 <
                                                i >>> 0
                                            )
                                                if (
                                                    rr(
                                                        C,
                                                        i,
                                                        ((r + 1) | 0) ==
                                                            (i | 0),
                                                        2,
                                                        0,
                                                    ) | 0
                                                ) {
                                                    r = E[n >> 2] | 0;
                                                    break;
                                                } else {
                                                    _[(e + 296) >> 0] = 1;
                                                    r = 0;
                                                    break e;
                                                }
                                        } while (0);
                                        qi(
                                            ((E[C >> 2] | 0) + (r << 1)) | 0,
                                            0,
                                            ((i - r) << 1) | 0,
                                        ) | 0;
                                    }
                                    E[n >> 2] = i;
                                    u = 13;
                                }
                            } while (0);
                            do {
                                if ((u | 0) == 13) {
                                    if (!p) {
                                        E[a >> 2] = 1138;
                                        E[(a + 4) >> 2] = 906;
                                        E[(a + 8) >> 2] = 1769;
                                        Si(o, 1084, a) | 0;
                                        Mi(o) | 0;
                                        r = 1;
                                        break;
                                    }
                                    n = (w + 4) | 0;
                                    t = (w + 8) | 0;
                                    e = (w + 12) | 0;
                                    o = (w + 16) | 0;
                                    a = (w + 20) | 0;
                                    u = (w + 24) | 0;
                                    s = (w + 28) | 0;
                                    l = (w + 32) | 0;
                                    f = (w + 36) | 0;
                                    d = (w + 40) | 0;
                                    A = (w + 44) | 0;
                                    R = (w + 48) | 0;
                                    M = (w + 52) | 0;
                                    S = (w + 56) | 0;
                                    h = (w + 60) | 0;
                                    N = 0;
                                    i = E[C >> 2] | 0;
                                    while (1) {
                                        r = 0;
                                        do {
                                            B = Er(I, P) | 0;
                                            C = r << 1;
                                            L = (w + (C << 2)) | 0;
                                            E[L >> 2] =
                                                ((E[L >> 2] | 0) +
                                                    (E[(b + (B << 2)) >> 2] |
                                                        0)) &
                                                7;
                                            C = (w + ((C | 1) << 2)) | 0;
                                            E[C >> 2] =
                                                ((E[C >> 2] | 0) +
                                                    (E[(O + (B << 2)) >> 2] |
                                                        0)) &
                                                7;
                                            r = (r + 1) | 0;
                                        } while ((r | 0) != 8);
                                        B =
                                            T[(1717 + (E[a >> 2] | 0)) >> 0] |
                                            0;
                                        c[i >> 1] =
                                            ((T[(1717 + (E[n >> 2] | 0)) >> 0] |
                                                0) <<
                                                3) |
                                            (T[(1717 + (E[w >> 2] | 0)) >> 0] |
                                                0) |
                                            ((T[(1717 + (E[t >> 2] | 0)) >> 0] |
                                                0) <<
                                                6) |
                                            ((T[(1717 + (E[e >> 2] | 0)) >> 0] |
                                                0) <<
                                                9) |
                                            ((T[(1717 + (E[o >> 2] | 0)) >> 0] |
                                                0) <<
                                                12) |
                                            (B << 15);
                                        L =
                                            T[(1717 + (E[d >> 2] | 0)) >> 0] |
                                            0;
                                        c[(i + 2) >> 1] =
                                            ((T[(1717 + (E[u >> 2] | 0)) >> 0] |
                                                0) <<
                                                2) |
                                            (B >>> 1) |
                                            ((T[(1717 + (E[s >> 2] | 0)) >> 0] |
                                                0) <<
                                                5) |
                                            ((T[(1717 + (E[l >> 2] | 0)) >> 0] |
                                                0) <<
                                                8) |
                                            ((T[(1717 + (E[f >> 2] | 0)) >> 0] |
                                                0) <<
                                                11) |
                                            (L << 14);
                                        c[(i + 4) >> 1] =
                                            ((T[(1717 + (E[A >> 2] | 0)) >> 0] |
                                                0) <<
                                                1) |
                                            (L >>> 2) |
                                            ((T[(1717 + (E[R >> 2] | 0)) >> 0] |
                                                0) <<
                                                4) |
                                            ((T[(1717 + (E[M >> 2] | 0)) >> 0] |
                                                0) <<
                                                7) |
                                            ((T[(1717 + (E[S >> 2] | 0)) >> 0] |
                                                0) <<
                                                10) |
                                            ((T[(1717 + (E[h >> 2] | 0)) >> 0] |
                                                0) <<
                                                13);
                                        N = (N + 1) | 0;
                                        if ((N | 0) == (p | 0)) {
                                            r = 1;
                                            break;
                                        } else i = (i + 6) | 0;
                                    }
                                }
                            } while (0);
                        } else r = 0;
                        sr(P);
                        L = r;
                        m = v;
                        return L | 0;
                    }
                    function vr(e, r, i, n, t, o, a, u) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        a = a | 0;
                        u = u | 0;
                        var s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0,
                            L = 0,
                            k = 0,
                            F = 0,
                            g = 0,
                            U = 0,
                            D = 0,
                            y = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            z = 0,
                            q = 0,
                            j = 0,
                            Z = 0,
                            J = 0,
                            Q = 0,
                            $ = 0,
                            ee = 0,
                            re = 0,
                            ie = 0,
                            ne = 0,
                            te = 0,
                            oe = 0,
                            ae = 0,
                            ue = 0,
                            se = 0;
                        ae = m;
                        m = (m + 656) | 0;
                        te = (ae + 112) | 0;
                        ie = (ae + 96) | 0;
                        re = (ae + 80) | 0;
                        ee = (ae + 64) | 0;
                        $ = (ae + 48) | 0;
                        oe = (ae + 32) | 0;
                        ne = (ae + 16) | 0;
                        Q = ae;
                        Z = (ae + 144) | 0;
                        J = (ae + 128) | 0;
                        Y = (e + 240) | 0;
                        x = E[Y >> 2] | 0;
                        z = (e + 256) | 0;
                        q = E[z >> 2] | 0;
                        i = _[((E[(e + 88) >> 2] | 0) + 17) >> 0] | 0;
                        j = n >>> 2;
                        if (!((i << 24) >> 24)) {
                            m = ae;
                            return 1;
                        }
                        K = (u | 0) == 0;
                        W = (u + -1) | 0;
                        U = ((o & 1) | 0) != 0;
                        D = n << 1;
                        y = (e + 92) | 0;
                        G = (e + 116) | 0;
                        H = (e + 140) | 0;
                        X = (e + 236) | 0;
                        V = (a + -1) | 0;
                        g = ((t & 1) | 0) != 0;
                        F = (e + 188) | 0;
                        P = (e + 252) | 0;
                        v = (j + 1) | 0;
                        B = (j + 2) | 0;
                        L = (j + 3) | 0;
                        k = V << 4;
                        b = i & 255;
                        i = 0;
                        o = 0;
                        t = 1;
                        O = 0;
                        do {
                            if (!K) {
                                p = E[(r + (O << 2)) >> 2] | 0;
                                w = 0;
                                while (1) {
                                    N = w & 1;
                                    s = (N | 0) == 0;
                                    h = (((N << 5) ^ 32) + -16) | 0;
                                    N = (((N << 1) ^ 2) + -1) | 0;
                                    I = s ? a : -1;
                                    l = s ? 0 : V;
                                    e = (w | 0) == (W | 0);
                                    C = U & e;
                                    if ((l | 0) != (I | 0)) {
                                        S = (U & e) ^ 1;
                                        M = s ? p : (p + k) | 0;
                                        while (1) {
                                            if ((t | 0) == 1)
                                                t = Er(y, G) | 0 | 512;
                                            R = t & 7;
                                            t = t >>> 3;
                                            s = T[(1811 + R) >> 0] | 0;
                                            e = 0;
                                            do {
                                                d = ((Er(y, H) | 0) + o) | 0;
                                                A = (d - x) | 0;
                                                o = A >> 31;
                                                o = (o & d) | (A & ~o);
                                                if (
                                                    (E[Y >> 2] | 0) >>> 0 <=
                                                    o >>> 0
                                                ) {
                                                    E[Q >> 2] = 1138;
                                                    E[(Q + 4) >> 2] = 906;
                                                    E[(Q + 8) >> 2] = 1769;
                                                    Si(Z, 1084, Q) | 0;
                                                    Mi(Z) | 0;
                                                }
                                                E[(J + (e << 2)) >> 2] =
                                                    E[
                                                        ((E[X >> 2] | 0) +
                                                            (o << 2)) >>
                                                            2
                                                    ];
                                                e = (e + 1) | 0;
                                            } while (e >>> 0 < s >>> 0);
                                            A = g & ((l | 0) == (V | 0));
                                            if (C | A) {
                                                d = 0;
                                                do {
                                                    f = fe(d, n) | 0;
                                                    e = (M + f) | 0;
                                                    s = ((d | 0) == 0) | S;
                                                    c = d << 1;
                                                    se =
                                                        ((Er(y, F) | 0) + i) |
                                                        0;
                                                    ue = (se - q) | 0;
                                                    i = ue >> 31;
                                                    i = (i & se) | (ue & ~i);
                                                    do {
                                                        if (A) {
                                                            if (!s) {
                                                                ue =
                                                                    ((Er(y, F) |
                                                                        0) +
                                                                        i) |
                                                                    0;
                                                                se =
                                                                    (ue - q) |
                                                                    0;
                                                                i = se >> 31;
                                                                i =
                                                                    (i & ue) |
                                                                    (se & ~i);
                                                                break;
                                                            }
                                                            E[e >> 2] =
                                                                E[
                                                                    (J +
                                                                        ((T[
                                                                            (1819 +
                                                                                (R <<
                                                                                    2) +
                                                                                c) >>
                                                                                0
                                                                        ] |
                                                                            0) <<
                                                                            2)) >>
                                                                        2
                                                                ];
                                                            if (
                                                                (E[z >> 2] |
                                                                    0) >>>
                                                                    0 <=
                                                                i >>> 0
                                                            ) {
                                                                E[ie >> 2] =
                                                                    1138;
                                                                E[
                                                                    (ie + 4) >>
                                                                        2
                                                                ] = 906;
                                                                E[
                                                                    (ie + 8) >>
                                                                        2
                                                                ] = 1769;
                                                                Si(
                                                                    Z,
                                                                    1084,
                                                                    ie,
                                                                ) | 0;
                                                                Mi(Z) | 0;
                                                            }
                                                            E[
                                                                (M + (f + 4)) >>
                                                                    2
                                                            ] =
                                                                E[
                                                                    ((E[
                                                                        P >> 2
                                                                    ] |
                                                                        0) +
                                                                        (i <<
                                                                            2)) >>
                                                                        2
                                                                ];
                                                            ue =
                                                                ((Er(y, F) |
                                                                    0) +
                                                                    i) |
                                                                0;
                                                            se = (ue - q) | 0;
                                                            i = se >> 31;
                                                            i =
                                                                (i & ue) |
                                                                (se & ~i);
                                                        } else {
                                                            if (!s) {
                                                                ue =
                                                                    ((Er(y, F) |
                                                                        0) +
                                                                        i) |
                                                                    0;
                                                                se =
                                                                    (ue - q) |
                                                                    0;
                                                                i = se >> 31;
                                                                i =
                                                                    (i & ue) |
                                                                    (se & ~i);
                                                                break;
                                                            }
                                                            E[e >> 2] =
                                                                E[
                                                                    (J +
                                                                        ((T[
                                                                            (1819 +
                                                                                (R <<
                                                                                    2) +
                                                                                c) >>
                                                                                0
                                                                        ] |
                                                                            0) <<
                                                                            2)) >>
                                                                        2
                                                                ];
                                                            if (
                                                                (E[z >> 2] |
                                                                    0) >>>
                                                                    0 <=
                                                                i >>> 0
                                                            ) {
                                                                E[re >> 2] =
                                                                    1138;
                                                                E[
                                                                    (re + 4) >>
                                                                        2
                                                                ] = 906;
                                                                E[
                                                                    (re + 8) >>
                                                                        2
                                                                ] = 1769;
                                                                Si(
                                                                    Z,
                                                                    1084,
                                                                    re,
                                                                ) | 0;
                                                                Mi(Z) | 0;
                                                            }
                                                            E[
                                                                (M + (f + 4)) >>
                                                                    2
                                                            ] =
                                                                E[
                                                                    ((E[
                                                                        P >> 2
                                                                    ] |
                                                                        0) +
                                                                        (i <<
                                                                            2)) >>
                                                                        2
                                                                ];
                                                            ue =
                                                                ((Er(y, F) |
                                                                    0) +
                                                                    i) |
                                                                0;
                                                            se = (ue - q) | 0;
                                                            i = se >> 31;
                                                            i =
                                                                (i & ue) |
                                                                (se & ~i);
                                                            E[
                                                                (M + (f + 8)) >>
                                                                    2
                                                            ] =
                                                                E[
                                                                    (J +
                                                                        ((T[
                                                                            ((c |
                                                                                1) +
                                                                                (1819 +
                                                                                    (R <<
                                                                                        2))) >>
                                                                                0
                                                                        ] |
                                                                            0) <<
                                                                            2)) >>
                                                                        2
                                                                ];
                                                            if (
                                                                (E[z >> 2] |
                                                                    0) >>>
                                                                    0 <=
                                                                i >>> 0
                                                            ) {
                                                                E[te >> 2] =
                                                                    1138;
                                                                E[
                                                                    (te + 4) >>
                                                                        2
                                                                ] = 906;
                                                                E[
                                                                    (te + 8) >>
                                                                        2
                                                                ] = 1769;
                                                                Si(
                                                                    Z,
                                                                    1084,
                                                                    te,
                                                                ) | 0;
                                                                Mi(Z) | 0;
                                                            }
                                                            E[
                                                                (M +
                                                                    (f + 12)) >>
                                                                    2
                                                            ] =
                                                                E[
                                                                    ((E[
                                                                        P >> 2
                                                                    ] |
                                                                        0) +
                                                                        (i <<
                                                                            2)) >>
                                                                        2
                                                                ];
                                                        }
                                                    } while (0);
                                                    d = (d + 1) | 0;
                                                } while ((d | 0) != 2);
                                            } else {
                                                E[M >> 2] =
                                                    E[
                                                        (J +
                                                            ((T[
                                                                (1819 +
                                                                    (R << 2)) >>
                                                                    0
                                                            ] |
                                                                0) <<
                                                                2)) >>
                                                            2
                                                    ];
                                                ue = ((Er(y, F) | 0) + i) | 0;
                                                se = (ue - q) | 0;
                                                i = se >> 31;
                                                i = (i & ue) | (se & ~i);
                                                if (
                                                    (E[z >> 2] | 0) >>> 0 <=
                                                    i >>> 0
                                                ) {
                                                    E[ne >> 2] = 1138;
                                                    E[(ne + 4) >> 2] = 906;
                                                    E[(ne + 8) >> 2] = 1769;
                                                    Si(Z, 1084, ne) | 0;
                                                    Mi(Z) | 0;
                                                }
                                                E[(M + 4) >> 2] =
                                                    E[
                                                        ((E[P >> 2] | 0) +
                                                            (i << 2)) >>
                                                            2
                                                    ];
                                                E[(M + 8) >> 2] =
                                                    E[
                                                        (J +
                                                            ((T[
                                                                (1819 +
                                                                    (R << 2) +
                                                                    1) >>
                                                                    0
                                                            ] |
                                                                0) <<
                                                                2)) >>
                                                            2
                                                    ];
                                                ue = ((Er(y, F) | 0) + i) | 0;
                                                se = (ue - q) | 0;
                                                i = se >> 31;
                                                i = (i & ue) | (se & ~i);
                                                if (
                                                    (E[z >> 2] | 0) >>> 0 <=
                                                    i >>> 0
                                                ) {
                                                    E[oe >> 2] = 1138;
                                                    E[(oe + 4) >> 2] = 906;
                                                    E[(oe + 8) >> 2] = 1769;
                                                    Si(Z, 1084, oe) | 0;
                                                    Mi(Z) | 0;
                                                }
                                                E[(M + 12) >> 2] =
                                                    E[
                                                        ((E[P >> 2] | 0) +
                                                            (i << 2)) >>
                                                            2
                                                    ];
                                                E[(M + (j << 2)) >> 2] =
                                                    E[
                                                        (J +
                                                            ((T[
                                                                (1819 +
                                                                    (R << 2) +
                                                                    2) >>
                                                                    0
                                                            ] |
                                                                0) <<
                                                                2)) >>
                                                            2
                                                    ];
                                                ue = ((Er(y, F) | 0) + i) | 0;
                                                se = (ue - q) | 0;
                                                i = se >> 31;
                                                i = (i & ue) | (se & ~i);
                                                if (
                                                    (E[z >> 2] | 0) >>> 0 <=
                                                    i >>> 0
                                                ) {
                                                    E[$ >> 2] = 1138;
                                                    E[($ + 4) >> 2] = 906;
                                                    E[($ + 8) >> 2] = 1769;
                                                    Si(Z, 1084, $) | 0;
                                                    Mi(Z) | 0;
                                                }
                                                E[(M + (v << 2)) >> 2] =
                                                    E[
                                                        ((E[P >> 2] | 0) +
                                                            (i << 2)) >>
                                                            2
                                                    ];
                                                E[(M + (B << 2)) >> 2] =
                                                    E[
                                                        (J +
                                                            ((T[
                                                                (1819 +
                                                                    (R << 2) +
                                                                    3) >>
                                                                    0
                                                            ] |
                                                                0) <<
                                                                2)) >>
                                                            2
                                                    ];
                                                ue = ((Er(y, F) | 0) + i) | 0;
                                                se = (ue - q) | 0;
                                                i = se >> 31;
                                                i = (i & ue) | (se & ~i);
                                                if (
                                                    (E[z >> 2] | 0) >>> 0 <=
                                                    i >>> 0
                                                ) {
                                                    E[ee >> 2] = 1138;
                                                    E[(ee + 4) >> 2] = 906;
                                                    E[(ee + 8) >> 2] = 1769;
                                                    Si(Z, 1084, ee) | 0;
                                                    Mi(Z) | 0;
                                                }
                                                E[(M + (L << 2)) >> 2] =
                                                    E[
                                                        ((E[P >> 2] | 0) +
                                                            (i << 2)) >>
                                                            2
                                                    ];
                                            }
                                            l = (l + N) | 0;
                                            if ((l | 0) == (I | 0)) break;
                                            else M = (M + h) | 0;
                                        }
                                    }
                                    w = (w + 1) | 0;
                                    if ((w | 0) == (u | 0)) break;
                                    else p = (p + D) | 0;
                                }
                            }
                            O = (O + 1) | 0;
                        } while ((O | 0) != (b | 0));
                        m = ae;
                        return 1;
                    }
                    function Br(e, r, i, n, t, o, a, u) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        a = a | 0;
                        u = u | 0;
                        var s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0,
                            L = 0,
                            k = 0,
                            F = 0,
                            g = 0,
                            U = 0,
                            D = 0,
                            y = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            z = 0,
                            q = 0,
                            j = 0,
                            Z = 0,
                            J = 0,
                            Q = 0,
                            $ = 0,
                            ee = 0,
                            re = 0,
                            ie = 0,
                            ne = 0,
                            te = 0,
                            oe = 0,
                            ae = 0,
                            ue = 0,
                            se = 0,
                            le = 0,
                            fe = 0,
                            _e = 0,
                            ce = 0,
                            Ee = 0;
                        ce = m;
                        m = (m + 608) | 0;
                        le = (ce + 48) | 0;
                        _e = (ce + 32) | 0;
                        fe = (ce + 16) | 0;
                        se = ce;
                        ae = (ce + 96) | 0;
                        ue = (ce + 80) | 0;
                        oe = (ce + 64) | 0;
                        x = (e + 240) | 0;
                        K = E[x >> 2] | 0;
                        q = (e + 256) | 0;
                        ie = E[q >> 2] | 0;
                        ne = (e + 272) | 0;
                        te = E[ne >> 2] | 0;
                        i = E[(e + 88) >> 2] | 0;
                        W =
                            ((T[(i + 63) >> 0] | 0) << 8) |
                            (T[(i + 64) >> 0] | 0);
                        i = _[(i + 17) >> 0] | 0;
                        if (!((i << 24) >> 24)) {
                            m = ce;
                            return 1;
                        }
                        z = (u | 0) == 0;
                        j = (u + -1) | 0;
                        Z = n << 1;
                        J = (e + 92) | 0;
                        Q = (e + 116) | 0;
                        $ = (a + -1) | 0;
                        ee = (e + 212) | 0;
                        re = (e + 188) | 0;
                        Y = ((t & 1) | 0) == 0;
                        V = ((o & 1) | 0) == 0;
                        U = (e + 288) | 0;
                        D = (e + 284) | 0;
                        y = (e + 252) | 0;
                        G = (e + 140) | 0;
                        H = (e + 236) | 0;
                        X = (e + 164) | 0;
                        F = (e + 268) | 0;
                        g = $ << 5;
                        L = i & 255;
                        i = 0;
                        t = 0;
                        o = 0;
                        e = 0;
                        s = 1;
                        k = 0;
                        do {
                            if (!z) {
                                v = E[(r + (k << 2)) >> 2] | 0;
                                B = 0;
                                while (1) {
                                    O = B & 1;
                                    l = (O | 0) == 0;
                                    b = (((O << 6) ^ 64) + -32) | 0;
                                    O = (((O << 1) ^ 2) + -1) | 0;
                                    P = l ? a : -1;
                                    f = l ? 0 : $;
                                    if ((f | 0) != (P | 0)) {
                                        w = V | ((B | 0) != (j | 0));
                                        p = l ? v : (v + g) | 0;
                                        while (1) {
                                            if ((s | 0) == 1)
                                                s = Er(J, Q) | 0 | 512;
                                            I = s & 7;
                                            s = s >>> 3;
                                            c = T[(1811 + I) >> 0] | 0;
                                            l = 0;
                                            do {
                                                N = ((Er(J, X) | 0) + t) | 0;
                                                C = (N - te) | 0;
                                                t = C >> 31;
                                                t = (t & N) | (C & ~t);
                                                if (
                                                    (E[ne >> 2] | 0) >>> 0 <=
                                                    t >>> 0
                                                ) {
                                                    E[se >> 2] = 1138;
                                                    E[(se + 4) >> 2] = 906;
                                                    E[(se + 8) >> 2] = 1769;
                                                    Si(ae, 1084, se) | 0;
                                                    Mi(ae) | 0;
                                                }
                                                E[(oe + (l << 2)) >> 2] =
                                                    d[
                                                        ((E[F >> 2] | 0) +
                                                            (t << 1)) >>
                                                            1
                                                    ];
                                                l = (l + 1) | 0;
                                            } while (l >>> 0 < c >>> 0);
                                            l = 0;
                                            do {
                                                N = ((Er(J, G) | 0) + e) | 0;
                                                C = (N - K) | 0;
                                                e = C >> 31;
                                                e = (e & N) | (C & ~e);
                                                if (
                                                    (E[x >> 2] | 0) >>> 0 <=
                                                    e >>> 0
                                                ) {
                                                    E[fe >> 2] = 1138;
                                                    E[(fe + 4) >> 2] = 906;
                                                    E[(fe + 8) >> 2] = 1769;
                                                    Si(ae, 1084, fe) | 0;
                                                    Mi(ae) | 0;
                                                }
                                                E[(ue + (l << 2)) >> 2] =
                                                    E[
                                                        ((E[H >> 2] | 0) +
                                                            (e << 2)) >>
                                                            2
                                                    ];
                                                l = (l + 1) | 0;
                                            } while (l >>> 0 < c >>> 0);
                                            C = Y | ((f | 0) != ($ | 0));
                                            h = 0;
                                            N = p;
                                            while (1) {
                                                S = w | ((h | 0) == 0);
                                                M = h << 1;
                                                A = 0;
                                                R = N;
                                                while (1) {
                                                    c =
                                                        ((Er(J, ee) | 0) + i) |
                                                        0;
                                                    l = (c - W) | 0;
                                                    i = l >> 31;
                                                    i = (i & c) | (l & ~i);
                                                    l =
                                                        ((Er(J, re) | 0) + o) |
                                                        0;
                                                    c = (l - ie) | 0;
                                                    o = c >> 31;
                                                    o = (o & l) | (c & ~o);
                                                    if (
                                                        (C | ((A | 0) == 0)) &
                                                        S
                                                    ) {
                                                        l =
                                                            T[
                                                                (A +
                                                                    M +
                                                                    (1819 +
                                                                        (I <<
                                                                            2))) >>
                                                                    0
                                                            ] | 0;
                                                        c = (i * 3) | 0;
                                                        if (
                                                            (E[U >> 2] | 0) >>>
                                                                0 <=
                                                            c >>> 0
                                                        ) {
                                                            E[_e >> 2] = 1138;
                                                            E[(_e + 4) >> 2] =
                                                                906;
                                                            E[(_e + 8) >> 2] =
                                                                1769;
                                                            Si(ae, 1084, _e) |
                                                                0;
                                                            Mi(ae) | 0;
                                                        }
                                                        Ee = E[D >> 2] | 0;
                                                        E[R >> 2] =
                                                            ((d[
                                                                (Ee +
                                                                    (c << 1)) >>
                                                                    1
                                                            ] |
                                                                0) <<
                                                                16) |
                                                            E[
                                                                (oe +
                                                                    (l << 2)) >>
                                                                    2
                                                            ];
                                                        E[(R + 4) >> 2] =
                                                            ((d[
                                                                (Ee +
                                                                    ((c + 2) <<
                                                                        1)) >>
                                                                    1
                                                            ] |
                                                                0) <<
                                                                16) |
                                                            (d[
                                                                (Ee +
                                                                    ((c + 1) <<
                                                                        1)) >>
                                                                    1
                                                            ] |
                                                                0);
                                                        E[(R + 8) >> 2] =
                                                            E[
                                                                (ue +
                                                                    (l << 2)) >>
                                                                    2
                                                            ];
                                                        if (
                                                            (E[q >> 2] | 0) >>>
                                                                0 <=
                                                            o >>> 0
                                                        ) {
                                                            E[le >> 2] = 1138;
                                                            E[(le + 4) >> 2] =
                                                                906;
                                                            E[(le + 8) >> 2] =
                                                                1769;
                                                            Si(ae, 1084, le) |
                                                                0;
                                                            Mi(ae) | 0;
                                                        }
                                                        E[(R + 12) >> 2] =
                                                            E[
                                                                ((E[y >> 2] |
                                                                    0) +
                                                                    (o << 2)) >>
                                                                    2
                                                            ];
                                                    }
                                                    A = (A + 1) | 0;
                                                    if ((A | 0) == 2) break;
                                                    else R = (R + 16) | 0;
                                                }
                                                h = (h + 1) | 0;
                                                if ((h | 0) == 2) break;
                                                else N = (N + n) | 0;
                                            }
                                            f = (f + O) | 0;
                                            if ((f | 0) == (P | 0)) break;
                                            else p = (p + b) | 0;
                                        }
                                    }
                                    B = (B + 1) | 0;
                                    if ((B | 0) == (u | 0)) break;
                                    else v = (v + Z) | 0;
                                }
                            }
                            k = (k + 1) | 0;
                        } while ((k | 0) != (L | 0));
                        m = ce;
                        return 1;
                    }
                    function Lr(e, r, i, n, t, o, a, u) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        a = a | 0;
                        u = u | 0;
                        var s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0,
                            L = 0,
                            k = 0,
                            F = 0,
                            g = 0,
                            U = 0,
                            D = 0,
                            y = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            z = 0,
                            q = 0,
                            j = 0,
                            Z = 0,
                            J = 0,
                            Q = 0,
                            $ = 0;
                        $ = m;
                        m = (m + 576) | 0;
                        Q = ($ + 32) | 0;
                        J = ($ + 16) | 0;
                        Z = $;
                        j = ($ + 64) | 0;
                        q = ($ + 48) | 0;
                        y = (e + 272) | 0;
                        G = E[y >> 2] | 0;
                        i = E[(e + 88) >> 2] | 0;
                        H =
                            ((T[(i + 63) >> 0] | 0) << 8) |
                            (T[(i + 64) >> 0] | 0);
                        i = _[(i + 17) >> 0] | 0;
                        if (!((i << 24) >> 24)) {
                            m = $;
                            return 1;
                        }
                        X = (u | 0) == 0;
                        V = (u + -1) | 0;
                        Y = n << 1;
                        x = (e + 92) | 0;
                        K = (e + 116) | 0;
                        W = (a + -1) | 0;
                        z = (e + 212) | 0;
                        D = ((o & 1) | 0) == 0;
                        F = (e + 288) | 0;
                        g = (e + 284) | 0;
                        U = (e + 164) | 0;
                        L = (e + 268) | 0;
                        k = W << 4;
                        B = i & 255;
                        v = ((t & 1) | 0) != 0;
                        i = 0;
                        o = 0;
                        e = 1;
                        P = 0;
                        do {
                            if (!X) {
                                b = E[(r + (P << 2)) >> 2] | 0;
                                O = 0;
                                while (1) {
                                    p = O & 1;
                                    t = (p | 0) == 0;
                                    I = (((p << 5) ^ 32) + -16) | 0;
                                    p = (((p << 1) ^ 2) + -1) | 0;
                                    w = t ? a : -1;
                                    s = t ? 0 : W;
                                    if ((s | 0) != (w | 0)) {
                                        C = D | ((O | 0) != (V | 0));
                                        N = t ? b : (b + k) | 0;
                                        while (1) {
                                            if ((e | 0) == 1)
                                                e = Er(x, K) | 0 | 512;
                                            h = e & 7;
                                            e = e >>> 3;
                                            l = T[(1811 + h) >> 0] | 0;
                                            t = 0;
                                            do {
                                                M = ((Er(x, U) | 0) + o) | 0;
                                                S = (M - G) | 0;
                                                o = S >> 31;
                                                o = (o & M) | (S & ~o);
                                                if (
                                                    (E[y >> 2] | 0) >>> 0 <=
                                                    o >>> 0
                                                ) {
                                                    E[Z >> 2] = 1138;
                                                    E[(Z + 4) >> 2] = 906;
                                                    E[(Z + 8) >> 2] = 1769;
                                                    Si(j, 1084, Z) | 0;
                                                    Mi(j) | 0;
                                                }
                                                E[(q + (t << 2)) >> 2] =
                                                    d[
                                                        ((E[L >> 2] | 0) +
                                                            (o << 1)) >>
                                                            1
                                                    ];
                                                t = (t + 1) | 0;
                                            } while (t >>> 0 < l >>> 0);
                                            S = ((s | 0) == (W | 0)) & v;
                                            R = 0;
                                            M = N;
                                            while (1) {
                                                A = C | ((R | 0) == 0);
                                                c = R << 1;
                                                t = ((Er(x, z) | 0) + i) | 0;
                                                f = (t - H) | 0;
                                                l = f >> 31;
                                                l = (l & t) | (f & ~l);
                                                if (A) {
                                                    i =
                                                        T[
                                                            (1819 +
                                                                (h << 2) +
                                                                c) >>
                                                                0
                                                        ] | 0;
                                                    t = (l * 3) | 0;
                                                    if (
                                                        (E[F >> 2] | 0) >>> 0 <=
                                                        t >>> 0
                                                    ) {
                                                        E[J >> 2] = 1138;
                                                        E[(J + 4) >> 2] = 906;
                                                        E[(J + 8) >> 2] = 1769;
                                                        Si(j, 1084, J) | 0;
                                                        Mi(j) | 0;
                                                    }
                                                    f = E[g >> 2] | 0;
                                                    E[M >> 2] =
                                                        ((d[
                                                            (f + (t << 1)) >> 1
                                                        ] |
                                                            0) <<
                                                            16) |
                                                        E[(q + (i << 2)) >> 2];
                                                    E[(M + 4) >> 2] =
                                                        ((d[
                                                            (f +
                                                                ((t + 2) <<
                                                                    1)) >>
                                                                1
                                                        ] |
                                                            0) <<
                                                            16) |
                                                        (d[
                                                            (f +
                                                                ((t + 1) <<
                                                                    1)) >>
                                                                1
                                                        ] |
                                                            0);
                                                }
                                                f = (M + 8) | 0;
                                                t = ((Er(x, z) | 0) + l) | 0;
                                                l = (t - H) | 0;
                                                i = l >> 31;
                                                i = (i & t) | (l & ~i);
                                                if (!(S | (A ^ 1))) {
                                                    t =
                                                        T[
                                                            ((c | 1) +
                                                                (1819 +
                                                                    (h <<
                                                                        2))) >>
                                                                0
                                                        ] | 0;
                                                    l = (i * 3) | 0;
                                                    if (
                                                        (E[F >> 2] | 0) >>> 0 <=
                                                        l >>> 0
                                                    ) {
                                                        E[Q >> 2] = 1138;
                                                        E[(Q + 4) >> 2] = 906;
                                                        E[(Q + 8) >> 2] = 1769;
                                                        Si(j, 1084, Q) | 0;
                                                        Mi(j) | 0;
                                                    }
                                                    A = E[g >> 2] | 0;
                                                    E[f >> 2] =
                                                        ((d[
                                                            (A + (l << 1)) >> 1
                                                        ] |
                                                            0) <<
                                                            16) |
                                                        E[(q + (t << 2)) >> 2];
                                                    E[(M + 12) >> 2] =
                                                        ((d[
                                                            (A +
                                                                ((l + 2) <<
                                                                    1)) >>
                                                                1
                                                        ] |
                                                            0) <<
                                                            16) |
                                                        (d[
                                                            (A +
                                                                ((l + 1) <<
                                                                    1)) >>
                                                                1
                                                        ] |
                                                            0);
                                                }
                                                R = (R + 1) | 0;
                                                if ((R | 0) == 2) break;
                                                else M = (M + n) | 0;
                                            }
                                            s = (s + p) | 0;
                                            if ((s | 0) == (w | 0)) break;
                                            else N = (N + I) | 0;
                                        }
                                    }
                                    O = (O + 1) | 0;
                                    if ((O | 0) == (u | 0)) break;
                                    else b = (b + Y) | 0;
                                }
                            }
                            P = (P + 1) | 0;
                        } while ((P | 0) != (B | 0));
                        m = $;
                        return 1;
                    }
                    function kr(e, r, i, n, t, o, a, u) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        a = a | 0;
                        u = u | 0;
                        var s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0,
                            L = 0,
                            k = 0,
                            F = 0,
                            g = 0,
                            U = 0,
                            D = 0,
                            y = 0,
                            G = 0,
                            H = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            z = 0,
                            q = 0,
                            j = 0,
                            Z = 0,
                            J = 0,
                            Q = 0,
                            $ = 0,
                            ee = 0,
                            re = 0,
                            ie = 0,
                            ne = 0,
                            te = 0,
                            oe = 0,
                            ae = 0,
                            ue = 0;
                        ue = m;
                        m = (m + 608) | 0;
                        te = (ue + 48) | 0;
                        ae = (ue + 32) | 0;
                        oe = (ue + 16) | 0;
                        ne = ue;
                        ie = (ue + 96) | 0;
                        ee = (ue + 80) | 0;
                        re = (ue + 64) | 0;
                        x = (e + 272) | 0;
                        K = E[x >> 2] | 0;
                        i = E[(e + 88) >> 2] | 0;
                        W =
                            ((T[(i + 63) >> 0] | 0) << 8) |
                            (T[(i + 64) >> 0] | 0);
                        i = _[(i + 17) >> 0] | 0;
                        if (!((i << 24) >> 24)) {
                            m = ue;
                            return 1;
                        }
                        z = (u | 0) == 0;
                        q = (u + -1) | 0;
                        j = n << 1;
                        Z = (e + 92) | 0;
                        J = (e + 116) | 0;
                        Q = (a + -1) | 0;
                        $ = (e + 212) | 0;
                        Y = ((t & 1) | 0) == 0;
                        V = ((o & 1) | 0) == 0;
                        G = (e + 288) | 0;
                        H = (e + 284) | 0;
                        X = (e + 164) | 0;
                        D = (e + 268) | 0;
                        y = Q << 5;
                        g = i & 255;
                        i = 0;
                        t = 0;
                        o = 0;
                        e = 0;
                        s = 1;
                        U = 0;
                        do {
                            if (!z) {
                                k = E[(r + (U << 2)) >> 2] | 0;
                                F = 0;
                                while (1) {
                                    B = F & 1;
                                    l = (B | 0) == 0;
                                    v = (((B << 6) ^ 64) + -32) | 0;
                                    B = (((B << 1) ^ 2) + -1) | 0;
                                    L = l ? a : -1;
                                    f = l ? 0 : Q;
                                    if ((f | 0) != (L | 0)) {
                                        P = V | ((F | 0) != (q | 0));
                                        O = l ? k : (k + y) | 0;
                                        while (1) {
                                            if ((s | 0) == 1)
                                                s = Er(Z, J) | 0 | 512;
                                            b = s & 7;
                                            s = s >>> 3;
                                            c = T[(1811 + b) >> 0] | 0;
                                            l = 0;
                                            do {
                                                p = ((Er(Z, X) | 0) + e) | 0;
                                                w = (p - K) | 0;
                                                e = w >> 31;
                                                e = (e & p) | (w & ~e);
                                                if (
                                                    (E[x >> 2] | 0) >>> 0 <=
                                                    e >>> 0
                                                ) {
                                                    E[ne >> 2] = 1138;
                                                    E[(ne + 4) >> 2] = 906;
                                                    E[(ne + 8) >> 2] = 1769;
                                                    Si(ie, 1084, ne) | 0;
                                                    Mi(ie) | 0;
                                                }
                                                E[(ee + (l << 2)) >> 2] =
                                                    d[
                                                        ((E[D >> 2] | 0) +
                                                            (e << 1)) >>
                                                            1
                                                    ];
                                                l = (l + 1) | 0;
                                            } while (l >>> 0 < c >>> 0);
                                            l = 0;
                                            do {
                                                p = ((Er(Z, X) | 0) + t) | 0;
                                                w = (p - K) | 0;
                                                t = w >> 31;
                                                t = (t & p) | (w & ~t);
                                                if (
                                                    (E[x >> 2] | 0) >>> 0 <=
                                                    t >>> 0
                                                ) {
                                                    E[oe >> 2] = 1138;
                                                    E[(oe + 4) >> 2] = 906;
                                                    E[(oe + 8) >> 2] = 1769;
                                                    Si(ie, 1084, oe) | 0;
                                                    Mi(ie) | 0;
                                                }
                                                E[(re + (l << 2)) >> 2] =
                                                    d[
                                                        ((E[D >> 2] | 0) +
                                                            (t << 1)) >>
                                                            1
                                                    ];
                                                l = (l + 1) | 0;
                                            } while (l >>> 0 < c >>> 0);
                                            w = Y | ((f | 0) != (Q | 0));
                                            I = 0;
                                            p = O;
                                            while (1) {
                                                C = P | ((I | 0) == 0);
                                                N = I << 1;
                                                S = 0;
                                                h = p;
                                                while (1) {
                                                    M =
                                                        ((Er(Z, $) | 0) + o) |
                                                        0;
                                                    R = (M - W) | 0;
                                                    o = R >> 31;
                                                    o = (o & M) | (R & ~o);
                                                    R =
                                                        ((Er(Z, $) | 0) + i) |
                                                        0;
                                                    M = (R - W) | 0;
                                                    i = M >> 31;
                                                    i = (i & R) | (M & ~i);
                                                    if (
                                                        (w | ((S | 0) == 0)) &
                                                        C
                                                    ) {
                                                        R =
                                                            T[
                                                                (S +
                                                                    N +
                                                                    (1819 +
                                                                        (b <<
                                                                            2))) >>
                                                                    0
                                                            ] | 0;
                                                        M = (o * 3) | 0;
                                                        l = E[G >> 2] | 0;
                                                        if (
                                                            l >>> 0 <=
                                                            M >>> 0
                                                        ) {
                                                            E[ae >> 2] = 1138;
                                                            E[(ae + 4) >> 2] =
                                                                906;
                                                            E[(ae + 8) >> 2] =
                                                                1769;
                                                            Si(ie, 1084, ae) |
                                                                0;
                                                            Mi(ie) | 0;
                                                            l = E[G >> 2] | 0;
                                                        }
                                                        c = E[H >> 2] | 0;
                                                        A = (i * 3) | 0;
                                                        if (l >>> 0 > A >>> 0)
                                                            l = c;
                                                        else {
                                                            E[te >> 2] = 1138;
                                                            E[(te + 4) >> 2] =
                                                                906;
                                                            E[(te + 8) >> 2] =
                                                                1769;
                                                            Si(ie, 1084, te) |
                                                                0;
                                                            Mi(ie) | 0;
                                                            l = E[H >> 2] | 0;
                                                        }
                                                        E[h >> 2] =
                                                            ((d[
                                                                (c +
                                                                    (M << 1)) >>
                                                                    1
                                                            ] |
                                                                0) <<
                                                                16) |
                                                            E[
                                                                (ee +
                                                                    (R << 2)) >>
                                                                    2
                                                            ];
                                                        E[(h + 4) >> 2] =
                                                            ((d[
                                                                (c +
                                                                    ((M + 2) <<
                                                                        1)) >>
                                                                    1
                                                            ] |
                                                                0) <<
                                                                16) |
                                                            (d[
                                                                (c +
                                                                    ((M + 1) <<
                                                                        1)) >>
                                                                    1
                                                            ] |
                                                                0);
                                                        E[(h + 8) >> 2] =
                                                            ((d[
                                                                (l +
                                                                    (A << 1)) >>
                                                                    1
                                                            ] |
                                                                0) <<
                                                                16) |
                                                            E[
                                                                (re +
                                                                    (R << 2)) >>
                                                                    2
                                                            ];
                                                        E[(h + 12) >> 2] =
                                                            ((d[
                                                                (l +
                                                                    ((A + 2) <<
                                                                        1)) >>
                                                                    1
                                                            ] |
                                                                0) <<
                                                                16) |
                                                            (d[
                                                                (l +
                                                                    ((A + 1) <<
                                                                        1)) >>
                                                                    1
                                                            ] |
                                                                0);
                                                    }
                                                    S = (S + 1) | 0;
                                                    if ((S | 0) == 2) break;
                                                    else h = (h + 16) | 0;
                                                }
                                                I = (I + 1) | 0;
                                                if ((I | 0) == 2) break;
                                                else p = (p + n) | 0;
                                            }
                                            f = (f + B) | 0;
                                            if ((f | 0) == (L | 0)) break;
                                            else O = (O + v) | 0;
                                        }
                                    }
                                    F = (F + 1) | 0;
                                    if ((F | 0) == (u | 0)) break;
                                    else k = (k + j) | 0;
                                }
                            }
                            U = (U + 1) | 0;
                        } while ((U | 0) != (g | 0));
                        m = ue;
                        return 1;
                    }
                    function Fr(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0;
                        s = m;
                        m = (m + 576) | 0;
                        u = (s + 48) | 0;
                        o = (s + 32) | 0;
                        t = (s + 16) | 0;
                        n = s;
                        a = (s + 64) | 0;
                        E[e >> 2] = 0;
                        r = (e + 284) | 0;
                        i = E[r >> 2] | 0;
                        if (i) {
                            if (!(i & 7)) or(i, 0, 0, 1, 0) | 0;
                            else {
                                E[n >> 2] = 1138;
                                E[(n + 4) >> 2] = 2502;
                                E[(n + 8) >> 2] = 1504;
                                Si(a, 1084, n) | 0;
                                Mi(a) | 0;
                            }
                            E[r >> 2] = 0;
                            E[(e + 288) >> 2] = 0;
                            E[(e + 292) >> 2] = 0;
                        }
                        _[(e + 296) >> 0] = 0;
                        i = (e + 268) | 0;
                        r = E[i >> 2] | 0;
                        if (r) {
                            if (!(r & 7)) or(r, 0, 0, 1, 0) | 0;
                            else {
                                E[t >> 2] = 1138;
                                E[(t + 4) >> 2] = 2502;
                                E[(t + 8) >> 2] = 1504;
                                Si(a, 1084, t) | 0;
                                Mi(a) | 0;
                            }
                            E[i >> 2] = 0;
                            E[(e + 272) >> 2] = 0;
                            E[(e + 276) >> 2] = 0;
                        }
                        _[(e + 280) >> 0] = 0;
                        r = (e + 252) | 0;
                        i = E[r >> 2] | 0;
                        if (i) {
                            if (!(i & 7)) or(i, 0, 0, 1, 0) | 0;
                            else {
                                E[o >> 2] = 1138;
                                E[(o + 4) >> 2] = 2502;
                                E[(o + 8) >> 2] = 1504;
                                Si(a, 1084, o) | 0;
                                Mi(a) | 0;
                            }
                            E[r >> 2] = 0;
                            E[(e + 256) >> 2] = 0;
                            E[(e + 260) >> 2] = 0;
                        }
                        _[(e + 264) >> 0] = 0;
                        r = (e + 236) | 0;
                        i = E[r >> 2] | 0;
                        if (!i) {
                            u = (e + 248) | 0;
                            _[u >> 0] = 0;
                            u = (e + 212) | 0;
                            sr(u);
                            u = (e + 188) | 0;
                            sr(u);
                            u = (e + 164) | 0;
                            sr(u);
                            u = (e + 140) | 0;
                            sr(u);
                            u = (e + 116) | 0;
                            sr(u);
                            m = s;
                            return;
                        }
                        if (!(i & 7)) or(i, 0, 0, 1, 0) | 0;
                        else {
                            E[u >> 2] = 1138;
                            E[(u + 4) >> 2] = 2502;
                            E[(u + 8) >> 2] = 1504;
                            Si(a, 1084, u) | 0;
                            Mi(a) | 0;
                        }
                        E[r >> 2] = 0;
                        E[(e + 240) >> 2] = 0;
                        E[(e + 244) >> 2] = 0;
                        u = (e + 248) | 0;
                        _[u >> 0] = 0;
                        u = (e + 212) | 0;
                        sr(u);
                        u = (e + 188) | 0;
                        sr(u);
                        u = (e + 164) | 0;
                        sr(u);
                        u = (e + 140) | 0;
                        sr(u);
                        u = (e + 116) | 0;
                        sr(u);
                        m = s;
                        return;
                    }
                    function gr(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0;
                        i = m;
                        m = (m + 16) | 0;
                        E[i >> 2] = r;
                        r = E[60] | 0;
                        mi(r, e, i) | 0;
                        Ti(10, r) | 0;
                        Pe();
                    }
                    function Ur() {
                        var e = 0,
                            r = 0;
                        e = m;
                        m = (m + 16) | 0;
                        if (!(Ge(192, 2) | 0)) {
                            r = Ie(E[47] | 0) | 0;
                            m = e;
                            return r | 0;
                        } else gr(2078, e);
                        return 0;
                    }
                    function Dr(e) {
                        e = e | 0;
                        Hi(e);
                        return;
                    }
                    function yr(e) {
                        e = e | 0;
                        var r = 0;
                        r = m;
                        m = (m + 16) | 0;
                        Pn[e & 3]();
                        gr(2127, r);
                    }
                    function Gr() {
                        var e = 0,
                            r = 0;
                        e = Ur() | 0;
                        if (
                            (
                                (e | 0) != 0
                                    ? ((r = E[e >> 2] | 0), (r | 0) != 0)
                                    : 0
                            )
                                ? ((e = (r + 48) | 0),
                                  ((E[e >> 2] & -256) | 0) == 1126902528
                                      ? (E[(e + 4) >> 2] | 0) == 1129074247
                                      : 0)
                                : 0
                        )
                            yr(E[(r + 12) >> 2] | 0);
                        r = E[26] | 0;
                        E[26] = r + 0;
                        yr(r);
                    }
                    function Hr(e) {
                        e = e | 0;
                        return;
                    }
                    function Xr(e) {
                        e = e | 0;
                        return;
                    }
                    function Vr(e) {
                        e = e | 0;
                        return;
                    }
                    function Yr(e) {
                        e = e | 0;
                        return;
                    }
                    function xr(e) {
                        e = e | 0;
                        Dr(e);
                        return;
                    }
                    function Kr(e) {
                        e = e | 0;
                        Dr(e);
                        return;
                    }
                    function Wr(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0,
                            a = 0;
                        a = m;
                        m = (m + 64) | 0;
                        o = a;
                        if ((e | 0) != (r | 0))
                            if (
                                (r | 0) != 0
                                    ? ((t = Zr(r, 24, 40, 0) | 0), (t | 0) != 0)
                                    : 0
                            ) {
                                r = o;
                                n = (r + 56) | 0;
                                do {
                                    E[r >> 2] = 0;
                                    r = (r + 4) | 0;
                                } while ((r | 0) < (n | 0));
                                E[o >> 2] = t;
                                E[(o + 8) >> 2] = e;
                                E[(o + 12) >> 2] = -1;
                                E[(o + 48) >> 2] = 1;
                                Bn[E[((E[t >> 2] | 0) + 28) >> 2] & 3](
                                    t,
                                    o,
                                    E[i >> 2] | 0,
                                    1,
                                );
                                if ((E[(o + 24) >> 2] | 0) == 1) {
                                    E[i >> 2] = E[(o + 16) >> 2];
                                    r = 1;
                                } else r = 0;
                            } else r = 0;
                        else r = 1;
                        m = a;
                        return r | 0;
                    }
                    function zr(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0;
                        e = (r + 16) | 0;
                        t = E[e >> 2] | 0;
                        do {
                            if (t) {
                                if ((t | 0) != (i | 0)) {
                                    n = (r + 36) | 0;
                                    E[n >> 2] = (E[n >> 2] | 0) + 1;
                                    E[(r + 24) >> 2] = 2;
                                    _[(r + 54) >> 0] = 1;
                                    break;
                                }
                                e = (r + 24) | 0;
                                if ((E[e >> 2] | 0) == 2) E[e >> 2] = n;
                            } else {
                                E[e >> 2] = i;
                                E[(r + 24) >> 2] = n;
                                E[(r + 36) >> 2] = 1;
                            }
                        } while (0);
                        return;
                    }
                    function qr(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        if ((e | 0) == (E[(r + 8) >> 2] | 0)) zr(0, r, i, n);
                        return;
                    }
                    function jr(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        if ((e | 0) == (E[(r + 8) >> 2] | 0)) zr(0, r, i, n);
                        else {
                            e = E[(e + 8) >> 2] | 0;
                            Bn[E[((E[e >> 2] | 0) + 28) >> 2] & 3](e, r, i, n);
                        }
                        return;
                    }
                    function Zr(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            T = 0,
                            d = 0,
                            A = 0;
                        A = m;
                        m = (m + 64) | 0;
                        d = A;
                        T = E[e >> 2] | 0;
                        f = (e + (E[(T + -8) >> 2] | 0)) | 0;
                        T = E[(T + -4) >> 2] | 0;
                        E[d >> 2] = i;
                        E[(d + 4) >> 2] = e;
                        E[(d + 8) >> 2] = r;
                        E[(d + 12) >> 2] = n;
                        n = (d + 16) | 0;
                        e = (d + 20) | 0;
                        r = (d + 24) | 0;
                        t = (d + 28) | 0;
                        o = (d + 32) | 0;
                        a = (d + 40) | 0;
                        u = (T | 0) == (i | 0);
                        s = n;
                        l = (s + 36) | 0;
                        do {
                            E[s >> 2] = 0;
                            s = (s + 4) | 0;
                        } while ((s | 0) < (l | 0));
                        c[(n + 36) >> 1] = 0;
                        _[(n + 38) >> 0] = 0;
                        e: do {
                            if (u) {
                                E[(d + 48) >> 2] = 1;
                                vn[E[((E[i >> 2] | 0) + 20) >> 2] & 3](
                                    i,
                                    d,
                                    f,
                                    f,
                                    1,
                                    0,
                                );
                                n = (E[r >> 2] | 0) == 1 ? f : 0;
                            } else {
                                pn[E[((E[T >> 2] | 0) + 24) >> 2] & 3](
                                    T,
                                    d,
                                    f,
                                    1,
                                    0,
                                );
                                switch (E[(d + 36) >> 2] | 0) {
                                    case 0: {
                                        n =
                                            ((E[a >> 2] | 0) == 1) &
                                            ((E[t >> 2] | 0) == 1) &
                                            ((E[o >> 2] | 0) == 1)
                                                ? E[e >> 2] | 0
                                                : 0;
                                        break e;
                                    }
                                    case 1:
                                        break;
                                    default: {
                                        n = 0;
                                        break e;
                                    }
                                }
                                if (
                                    (E[r >> 2] | 0) != 1
                                        ? !(
                                              ((E[a >> 2] | 0) == 0) &
                                              ((E[t >> 2] | 0) == 1) &
                                              ((E[o >> 2] | 0) == 1)
                                          )
                                        : 0
                                ) {
                                    n = 0;
                                    break;
                                }
                                n = E[n >> 2] | 0;
                            }
                        } while (0);
                        m = A;
                        return n | 0;
                    }
                    function Jr(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        _[(r + 53) >> 0] = 1;
                        do {
                            if ((E[(r + 4) >> 2] | 0) == (n | 0)) {
                                _[(r + 52) >> 0] = 1;
                                n = (r + 16) | 0;
                                e = E[n >> 2] | 0;
                                if (!e) {
                                    E[n >> 2] = i;
                                    E[(r + 24) >> 2] = t;
                                    E[(r + 36) >> 2] = 1;
                                    if (
                                        !((t | 0) == 1
                                            ? (E[(r + 48) >> 2] | 0) == 1
                                            : 0)
                                    )
                                        break;
                                    _[(r + 54) >> 0] = 1;
                                    break;
                                }
                                if ((e | 0) != (i | 0)) {
                                    t = (r + 36) | 0;
                                    E[t >> 2] = (E[t >> 2] | 0) + 1;
                                    _[(r + 54) >> 0] = 1;
                                    break;
                                }
                                e = (r + 24) | 0;
                                n = E[e >> 2] | 0;
                                if ((n | 0) == 2) {
                                    E[e >> 2] = t;
                                    n = t;
                                }
                                if (
                                    (n | 0) == 1
                                        ? (E[(r + 48) >> 2] | 0) == 1
                                        : 0
                                )
                                    _[(r + 54) >> 0] = 1;
                            }
                        } while (0);
                        return;
                    }
                    function Qr(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        var o = 0,
                            a = 0,
                            u = 0,
                            s = 0;
                        e: do {
                            if ((e | 0) == (E[(r + 8) >> 2] | 0)) {
                                if (
                                    (E[(r + 4) >> 2] | 0) == (i | 0)
                                        ? ((o = (r + 28) | 0),
                                          (E[o >> 2] | 0) != 1)
                                        : 0
                                )
                                    E[o >> 2] = n;
                            } else {
                                if ((e | 0) != (E[r >> 2] | 0)) {
                                    u = E[(e + 8) >> 2] | 0;
                                    pn[E[((E[u >> 2] | 0) + 24) >> 2] & 3](
                                        u,
                                        r,
                                        i,
                                        n,
                                        t,
                                    );
                                    break;
                                }
                                if (
                                    (E[(r + 16) >> 2] | 0) != (i | 0)
                                        ? ((a = (r + 20) | 0),
                                          (E[a >> 2] | 0) != (i | 0))
                                        : 0
                                ) {
                                    E[(r + 32) >> 2] = n;
                                    n = (r + 44) | 0;
                                    if ((E[n >> 2] | 0) == 4) break;
                                    o = (r + 52) | 0;
                                    _[o >> 0] = 0;
                                    s = (r + 53) | 0;
                                    _[s >> 0] = 0;
                                    e = E[(e + 8) >> 2] | 0;
                                    vn[E[((E[e >> 2] | 0) + 20) >> 2] & 3](
                                        e,
                                        r,
                                        i,
                                        i,
                                        1,
                                        t,
                                    );
                                    if (_[s >> 0] | 0) {
                                        if (!(_[o >> 0] | 0)) {
                                            o = 1;
                                            u = 13;
                                        }
                                    } else {
                                        o = 0;
                                        u = 13;
                                    }
                                    do {
                                        if ((u | 0) == 13) {
                                            E[a >> 2] = i;
                                            s = (r + 40) | 0;
                                            E[s >> 2] = (E[s >> 2] | 0) + 1;
                                            if (
                                                (E[(r + 36) >> 2] | 0) == 1
                                                    ? (E[(r + 24) >> 2] | 0) ==
                                                      2
                                                    : 0
                                            ) {
                                                _[(r + 54) >> 0] = 1;
                                                if (o) break;
                                            } else u = 16;
                                            if ((u | 0) == 16 ? o : 0) break;
                                            E[n >> 2] = 4;
                                            break e;
                                        }
                                    } while (0);
                                    E[n >> 2] = 3;
                                    break;
                                }
                                if ((n | 0) == 1) E[(r + 32) >> 2] = 1;
                            }
                        } while (0);
                        return;
                    }
                    function $r(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        var o = 0,
                            a = 0;
                        do {
                            if ((e | 0) == (E[(r + 8) >> 2] | 0)) {
                                if (
                                    (E[(r + 4) >> 2] | 0) == (i | 0)
                                        ? ((a = (r + 28) | 0),
                                          (E[a >> 2] | 0) != 1)
                                        : 0
                                )
                                    E[a >> 2] = n;
                            } else if ((e | 0) == (E[r >> 2] | 0)) {
                                if (
                                    (E[(r + 16) >> 2] | 0) != (i | 0)
                                        ? ((o = (r + 20) | 0),
                                          (E[o >> 2] | 0) != (i | 0))
                                        : 0
                                ) {
                                    E[(r + 32) >> 2] = n;
                                    E[o >> 2] = i;
                                    t = (r + 40) | 0;
                                    E[t >> 2] = (E[t >> 2] | 0) + 1;
                                    if (
                                        (E[(r + 36) >> 2] | 0) == 1
                                            ? (E[(r + 24) >> 2] | 0) == 2
                                            : 0
                                    )
                                        _[(r + 54) >> 0] = 1;
                                    E[(r + 44) >> 2] = 4;
                                    break;
                                }
                                if ((n | 0) == 1) E[(r + 32) >> 2] = 1;
                            }
                        } while (0);
                        return;
                    }
                    function ei(e, r, i, n, t, o) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        if ((e | 0) == (E[(r + 8) >> 2] | 0)) Jr(0, r, i, n, t);
                        else {
                            e = E[(e + 8) >> 2] | 0;
                            vn[E[((E[e >> 2] | 0) + 20) >> 2] & 3](
                                e,
                                r,
                                i,
                                n,
                                t,
                                o,
                            );
                        }
                        return;
                    }
                    function ri(e, r, i, n, t, o) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        if ((e | 0) == (E[(r + 8) >> 2] | 0)) Jr(0, r, i, n, t);
                        return;
                    }
                    function ii(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0;
                        t = m;
                        m = (m + 16) | 0;
                        n = t;
                        E[n >> 2] = E[i >> 2];
                        e = In[E[((E[e >> 2] | 0) + 16) >> 2] & 7](e, r, n) | 0;
                        if (e) E[i >> 2] = E[n >> 2];
                        m = t;
                        return (e & 1) | 0;
                    }
                    function ni(e) {
                        e = e | 0;
                        if (!e) e = 0;
                        else e = (Zr(e, 24, 72, 0) | 0) != 0;
                        return (e & 1) | 0;
                    }
                    function ti() {
                        var e = 0,
                            r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0;
                        t = m;
                        m = (m + 48) | 0;
                        a = (t + 32) | 0;
                        i = (t + 24) | 0;
                        u = (t + 16) | 0;
                        o = t;
                        t = (t + 36) | 0;
                        e = Ur() | 0;
                        if (
                            (e | 0) != 0
                                ? ((n = E[e >> 2] | 0), (n | 0) != 0)
                                : 0
                        ) {
                            e = (n + 48) | 0;
                            r = E[e >> 2] | 0;
                            e = E[(e + 4) >> 2] | 0;
                            if (
                                !(
                                    (((r & -256) | 0) == 1126902528) &
                                    ((e | 0) == 1129074247)
                                )
                            ) {
                                E[i >> 2] = 2406;
                                gr(2356, i);
                            }
                            if (
                                ((r | 0) == 1126902529) &
                                ((e | 0) == 1129074247)
                            )
                                e = E[(n + 44) >> 2] | 0;
                            else e = (n + 80) | 0;
                            E[t >> 2] = e;
                            n = E[n >> 2] | 0;
                            e = E[(n + 4) >> 2] | 0;
                            if (
                                In[E[((E[8 >> 2] | 0) + 16) >> 2] & 7](
                                    8,
                                    n,
                                    t,
                                ) | 0
                            ) {
                                u = E[t >> 2] | 0;
                                u =
                                    bn[E[((E[u >> 2] | 0) + 8) >> 2] & 1](u) |
                                    0;
                                E[o >> 2] = 2406;
                                E[(o + 4) >> 2] = e;
                                E[(o + 8) >> 2] = u;
                                gr(2270, o);
                            } else {
                                E[u >> 2] = 2406;
                                E[(u + 4) >> 2] = e;
                                gr(2315, u);
                            }
                        }
                        gr(2394, a);
                    }
                    function oi() {
                        var e = 0;
                        e = m;
                        m = (m + 16) | 0;
                        if (!(Fe(188, 6) | 0)) {
                            m = e;
                            return;
                        } else gr(2167, e);
                    }
                    function ai(e) {
                        e = e | 0;
                        var r = 0;
                        r = m;
                        m = (m + 16) | 0;
                        Hi(e);
                        if (!(pe(E[47] | 0, 0) | 0)) {
                            m = r;
                            return;
                        } else gr(2217, r);
                    }
                    function ui(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0;
                        r = 0;
                        while (1) {
                            if ((T[(2415 + r) >> 0] | 0) == (e | 0)) {
                                i = 2;
                                break;
                            }
                            r = (r + 1) | 0;
                            if ((r | 0) == 87) {
                                r = 87;
                                e = 2503;
                                i = 5;
                                break;
                            }
                        }
                        if ((i | 0) == 2)
                            if (!r) e = 2503;
                            else {
                                e = 2503;
                                i = 5;
                            }
                        if ((i | 0) == 5)
                            while (1) {
                                i = e;
                                while (1) {
                                    e = (i + 1) | 0;
                                    if (!(_[i >> 0] | 0)) break;
                                    else i = e;
                                }
                                r = (r + -1) | 0;
                                if (!r) break;
                                else i = 5;
                            }
                        return e | 0;
                    }
                    function si() {
                        var e = 0;
                        if (!0) e = 248;
                        else {
                            e = ((Oe() | 0) + 60) | 0;
                            e = E[e >> 2] | 0;
                        }
                        return e | 0;
                    }
                    function li(e) {
                        e = e | 0;
                        var r = 0;
                        if (e >>> 0 > 4294963200) {
                            r = si() | 0;
                            E[r >> 2] = 0 - e;
                            e = -1;
                        }
                        return e | 0;
                    }
                    function fi(e, r) {
                        e = +e;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0;
                        M[N >> 3] = e;
                        i = E[N >> 2] | 0;
                        n = E[(N + 4) >> 2] | 0;
                        t = ji(i | 0, n | 0, 52) | 0;
                        t = t & 2047;
                        switch (t | 0) {
                            case 0: {
                                if (e != 0) {
                                    e = +fi(e * 0x10000000000000000, r);
                                    i = ((E[r >> 2] | 0) + -64) | 0;
                                } else i = 0;
                                E[r >> 2] = i;
                                break;
                            }
                            case 2047:
                                break;
                            default: {
                                E[r >> 2] = t + -1022;
                                E[N >> 2] = i;
                                E[(N + 4) >> 2] =
                                    (n & -2146435073) | 1071644672;
                                e = +M[N >> 3];
                            }
                        }
                        return +e;
                    }
                    function _i(e, r) {
                        e = +e;
                        r = r | 0;
                        return +(+fi(e, r));
                    }
                    function ci(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        do {
                            if (e) {
                                if (r >>> 0 < 128) {
                                    _[e >> 0] = r;
                                    e = 1;
                                    break;
                                }
                                if (r >>> 0 < 2048) {
                                    _[e >> 0] = (r >>> 6) | 192;
                                    _[(e + 1) >> 0] = (r & 63) | 128;
                                    e = 2;
                                    break;
                                }
                                if (
                                    (r >>> 0 < 55296) |
                                    (((r & -8192) | 0) == 57344)
                                ) {
                                    _[e >> 0] = (r >>> 12) | 224;
                                    _[(e + 1) >> 0] = ((r >>> 6) & 63) | 128;
                                    _[(e + 2) >> 0] = (r & 63) | 128;
                                    e = 3;
                                    break;
                                }
                                if (((r + -65536) | 0) >>> 0 < 1048576) {
                                    _[e >> 0] = (r >>> 18) | 240;
                                    _[(e + 1) >> 0] = ((r >>> 12) & 63) | 128;
                                    _[(e + 2) >> 0] = ((r >>> 6) & 63) | 128;
                                    _[(e + 3) >> 0] = (r & 63) | 128;
                                    e = 4;
                                    break;
                                } else {
                                    e = si() | 0;
                                    E[e >> 2] = 84;
                                    e = -1;
                                    break;
                                }
                            } else e = 1;
                        } while (0);
                        return e | 0;
                    }
                    function Ei(e, r) {
                        e = e | 0;
                        r = r | 0;
                        if (!e) e = 0;
                        else e = ci(e, r, 0) | 0;
                        return e | 0;
                    }
                    function Ti(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0;
                        if (
                            (E[(r + 76) >> 2] | 0) >= 0 ? (Ci(r) | 0) != 0 : 0
                        ) {
                            if (
                                (_[(r + 75) >> 0] | 0) != (e | 0)
                                    ? ((n = (r + 20) | 0),
                                      (t = E[n >> 2] | 0),
                                      t >>> 0 < (E[(r + 16) >> 2] | 0) >>> 0)
                                    : 0
                            ) {
                                E[n >> 2] = t + 1;
                                _[t >> 0] = e;
                                i = e & 255;
                            } else i = pi(r, e) | 0;
                            Ii(r);
                        } else a = 3;
                        do {
                            if ((a | 0) == 3) {
                                if (
                                    (_[(r + 75) >> 0] | 0) != (e | 0)
                                        ? ((o = (r + 20) | 0),
                                          (i = E[o >> 2] | 0),
                                          i >>> 0 <
                                              (E[(r + 16) >> 2] | 0) >>> 0)
                                        : 0
                                ) {
                                    E[o >> 2] = i + 1;
                                    _[i >> 0] = e;
                                    i = e & 255;
                                    break;
                                }
                                i = pi(r, e) | 0;
                            }
                        } while (0);
                        return i | 0;
                    }
                    function di(e, r) {
                        e = e | 0;
                        r = r | 0;
                        return ((Ri(e, Li(e) | 0, 1, r) | 0) + -1) | 0;
                    }
                    function Ai(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0,
                            a = 0;
                        n = (i + 16) | 0;
                        t = E[n >> 2] | 0;
                        if (!t)
                            if (!(vi(i) | 0)) {
                                t = E[n >> 2] | 0;
                                o = 4;
                            } else n = 0;
                        else o = 4;
                        e: do {
                            if ((o | 0) == 4) {
                                a = (i + 20) | 0;
                                o = E[a >> 2] | 0;
                                if (((t - o) | 0) >>> 0 < r >>> 0) {
                                    n = In[E[(i + 36) >> 2] & 7](i, e, r) | 0;
                                    break;
                                }
                                r: do {
                                    if ((_[(i + 75) >> 0] | 0) > -1) {
                                        n = r;
                                        while (1) {
                                            if (!n) {
                                                t = o;
                                                n = 0;
                                                break r;
                                            }
                                            t = (n + -1) | 0;
                                            if ((_[(e + t) >> 0] | 0) == 10)
                                                break;
                                            else n = t;
                                        }
                                        if (
                                            (In[E[(i + 36) >> 2] & 7](i, e, n) |
                                                0) >>>
                                                0 <
                                            n >>> 0
                                        )
                                            break e;
                                        r = (r - n) | 0;
                                        e = (e + n) | 0;
                                        t = E[a >> 2] | 0;
                                    } else {
                                        t = o;
                                        n = 0;
                                    }
                                } while (0);
                                Ji(t | 0, e | 0, r | 0) | 0;
                                E[a >> 2] = (E[a >> 2] | 0) + r;
                                n = (n + r) | 0;
                            }
                        } while (0);
                        return n | 0;
                    }
                    function Ri(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0;
                        t = fe(i, r) | 0;
                        if ((E[(n + 76) >> 2] | 0) > -1) {
                            o = (Ci(n) | 0) == 0;
                            e = Ai(e, t, n) | 0;
                            if (!o) Ii(n);
                        } else e = Ai(e, t, n) | 0;
                        if ((e | 0) != (t | 0)) i = ((e >>> 0) / (r >>> 0)) | 0;
                        return i | 0;
                    }
                    function Mi(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0;
                        n = E[61] | 0;
                        if ((E[(n + 76) >> 2] | 0) > -1) t = Ci(n) | 0;
                        else t = 0;
                        do {
                            if ((di(e, n) | 0) < 0) r = 1;
                            else {
                                if (
                                    (_[(n + 75) >> 0] | 0) != 10
                                        ? ((r = (n + 20) | 0),
                                          (i = E[r >> 2] | 0),
                                          i >>> 0 <
                                              (E[(n + 16) >> 2] | 0) >>> 0)
                                        : 0
                                ) {
                                    E[r >> 2] = i + 1;
                                    _[i >> 0] = 10;
                                    r = 0;
                                    break;
                                }
                                r = (pi(n, 10) | 0) < 0;
                            }
                        } while (0);
                        if (t) Ii(n);
                        return ((r << 31) >> 31) | 0;
                    }
                    function Si(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0;
                        n = m;
                        m = (m + 16) | 0;
                        t = n;
                        E[t >> 2] = i;
                        i = Ni(e, r, t) | 0;
                        m = n;
                        return i | 0;
                    }
                    function mi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            c = 0,
                            T = 0,
                            d = 0,
                            A = 0,
                            R = 0;
                        R = m;
                        m = (m + 224) | 0;
                        c = (R + 120) | 0;
                        A = (R + 80) | 0;
                        d = R;
                        T = (R + 136) | 0;
                        n = A;
                        t = (n + 40) | 0;
                        do {
                            E[n >> 2] = 0;
                            n = (n + 4) | 0;
                        } while ((n | 0) < (t | 0));
                        E[c >> 2] = E[i >> 2];
                        if ((ki(0, r, c, d, A) | 0) < 0) i = -1;
                        else {
                            if ((E[(e + 76) >> 2] | 0) > -1) l = Ci(e) | 0;
                            else l = 0;
                            i = E[e >> 2] | 0;
                            f = i & 32;
                            if ((_[(e + 74) >> 0] | 0) < 1) E[e >> 2] = i & -33;
                            i = (e + 48) | 0;
                            if (!(E[i >> 2] | 0)) {
                                t = (e + 44) | 0;
                                o = E[t >> 2] | 0;
                                E[t >> 2] = T;
                                a = (e + 28) | 0;
                                E[a >> 2] = T;
                                u = (e + 20) | 0;
                                E[u >> 2] = T;
                                E[i >> 2] = 80;
                                s = (e + 16) | 0;
                                E[s >> 2] = T + 80;
                                n = ki(e, r, c, d, A) | 0;
                                if (o) {
                                    In[E[(e + 36) >> 2] & 7](e, 0, 0) | 0;
                                    n = (E[u >> 2] | 0) == 0 ? -1 : n;
                                    E[t >> 2] = o;
                                    E[i >> 2] = 0;
                                    E[s >> 2] = 0;
                                    E[a >> 2] = 0;
                                    E[u >> 2] = 0;
                                }
                            } else n = ki(e, r, c, d, A) | 0;
                            i = E[e >> 2] | 0;
                            E[e >> 2] = i | f;
                            if (l) Ii(e);
                            i = ((i & 32) | 0) == 0 ? n : -1;
                        }
                        m = R;
                        return i | 0;
                    }
                    function hi(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0;
                        f = m;
                        m = (m + 128) | 0;
                        t = (f + 112) | 0;
                        l = f;
                        o = l;
                        a = 252;
                        u = (o + 112) | 0;
                        do {
                            E[o >> 2] = E[a >> 2];
                            o = (o + 4) | 0;
                            a = (a + 4) | 0;
                        } while ((o | 0) < (u | 0));
                        if (((r + -1) | 0) >>> 0 > 2147483646)
                            if (!r) {
                                r = 1;
                                s = 4;
                            } else {
                                r = si() | 0;
                                E[r >> 2] = 75;
                                r = -1;
                            }
                        else {
                            t = e;
                            s = 4;
                        }
                        if ((s | 0) == 4) {
                            s = (-2 - t) | 0;
                            s = r >>> 0 > s >>> 0 ? s : r;
                            E[(l + 48) >> 2] = s;
                            e = (l + 20) | 0;
                            E[e >> 2] = t;
                            E[(l + 44) >> 2] = t;
                            r = (t + s) | 0;
                            t = (l + 16) | 0;
                            E[t >> 2] = r;
                            E[(l + 28) >> 2] = r;
                            r = mi(l, i, n) | 0;
                            if (s) {
                                i = E[e >> 2] | 0;
                                _[
                                    (i +
                                        ((((i | 0) == (E[t >> 2] | 0)) << 31) >>
                                            31)) >>
                                        0
                                ] = 0;
                            }
                        }
                        m = f;
                        return r | 0;
                    }
                    function Ni(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        return hi(e, 2147483647, r, i) | 0;
                    }
                    function Ci(e) {
                        e = e | 0;
                        return 0;
                    }
                    function Ii(e) {
                        e = e | 0;
                        return;
                    }
                    function pi(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0;
                        s = m;
                        m = (m + 16) | 0;
                        u = s;
                        a = r & 255;
                        _[u >> 0] = a;
                        n = (e + 16) | 0;
                        t = E[n >> 2] | 0;
                        if (!t)
                            if (!(vi(e) | 0)) {
                                t = E[n >> 2] | 0;
                                o = 4;
                            } else i = -1;
                        else o = 4;
                        do {
                            if ((o | 0) == 4) {
                                n = (e + 20) | 0;
                                o = E[n >> 2] | 0;
                                if (
                                    o >>> 0 < t >>> 0
                                        ? ((i = r & 255),
                                          (i | 0) != (_[(e + 75) >> 0] | 0))
                                        : 0
                                ) {
                                    E[n >> 2] = o + 1;
                                    _[o >> 0] = a;
                                    break;
                                }
                                if (
                                    (In[E[(e + 36) >> 2] & 7](e, u, 1) | 0) ==
                                    1
                                )
                                    i = T[u >> 0] | 0;
                                else i = -1;
                            }
                        } while (0);
                        m = s;
                        return i | 0;
                    }
                    function wi(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0;
                        r = m;
                        m = (m + 16) | 0;
                        i = r;
                        E[i >> 2] = E[(e + 60) >> 2];
                        e = li(Be(6, i | 0) | 0) | 0;
                        m = r;
                        return e | 0;
                    }
                    function bi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0;
                        t = m;
                        m = (m + 32) | 0;
                        o = t;
                        n = (t + 20) | 0;
                        E[o >> 2] = E[(e + 60) >> 2];
                        E[(o + 4) >> 2] = 0;
                        E[(o + 8) >> 2] = r;
                        E[(o + 12) >> 2] = n;
                        E[(o + 16) >> 2] = i;
                        if ((li(ye(140, o | 0) | 0) | 0) < 0) {
                            E[n >> 2] = -1;
                            e = -1;
                        } else e = E[n >> 2] | 0;
                        m = t;
                        return e | 0;
                    }
                    function Oi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            T = 0,
                            d = 0;
                        d = m;
                        m = (m + 48) | 0;
                        _ = (d + 16) | 0;
                        f = d;
                        n = (d + 32) | 0;
                        c = (e + 28) | 0;
                        t = E[c >> 2] | 0;
                        E[n >> 2] = t;
                        T = (e + 20) | 0;
                        t = ((E[T >> 2] | 0) - t) | 0;
                        E[(n + 4) >> 2] = t;
                        E[(n + 8) >> 2] = r;
                        E[(n + 12) >> 2] = i;
                        s = (e + 60) | 0;
                        l = (e + 44) | 0;
                        r = 2;
                        t = (t + i) | 0;
                        while (1) {
                            if (!(E[49] | 0)) {
                                E[_ >> 2] = E[s >> 2];
                                E[(_ + 4) >> 2] = n;
                                E[(_ + 8) >> 2] = r;
                                a = li(Ve(146, _ | 0) | 0) | 0;
                            } else {
                                ve(7, e | 0);
                                E[f >> 2] = E[s >> 2];
                                E[(f + 4) >> 2] = n;
                                E[(f + 8) >> 2] = r;
                                a = li(Ve(146, f | 0) | 0) | 0;
                                Ce(0);
                            }
                            if ((t | 0) == (a | 0)) {
                                t = 6;
                                break;
                            }
                            if ((a | 0) < 0) {
                                t = 8;
                                break;
                            }
                            t = (t - a) | 0;
                            o = E[(n + 4) >> 2] | 0;
                            if (a >>> 0 <= o >>> 0)
                                if ((r | 0) == 2) {
                                    E[c >> 2] = (E[c >> 2] | 0) + a;
                                    u = o;
                                    r = 2;
                                } else u = o;
                            else {
                                u = E[l >> 2] | 0;
                                E[c >> 2] = u;
                                E[T >> 2] = u;
                                u = E[(n + 12) >> 2] | 0;
                                a = (a - o) | 0;
                                n = (n + 8) | 0;
                                r = (r + -1) | 0;
                            }
                            E[n >> 2] = (E[n >> 2] | 0) + a;
                            E[(n + 4) >> 2] = u - a;
                        }
                        if ((t | 0) == 6) {
                            _ = E[l >> 2] | 0;
                            E[(e + 16) >> 2] = _ + (E[(e + 48) >> 2] | 0);
                            e = _;
                            E[c >> 2] = e;
                            E[T >> 2] = e;
                        } else if ((t | 0) == 8) {
                            E[(e + 16) >> 2] = 0;
                            E[c >> 2] = 0;
                            E[T >> 2] = 0;
                            E[e >> 2] = E[e >> 2] | 32;
                            if ((r | 0) == 2) i = 0;
                            else i = (i - (E[(n + 4) >> 2] | 0)) | 0;
                        }
                        m = d;
                        return i | 0;
                    }
                    function Pi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0;
                        t = m;
                        m = (m + 80) | 0;
                        n = t;
                        E[(e + 36) >> 2] = 3;
                        if (
                            ((E[e >> 2] & 64) | 0) == 0
                                ? ((E[n >> 2] = E[(e + 60) >> 2]),
                                  (E[(n + 4) >> 2] = 21505),
                                  (E[(n + 8) >> 2] = t + 12),
                                  (De(54, n | 0) | 0) != 0)
                                : 0
                        )
                            _[(e + 75) >> 0] = -1;
                        n = Oi(e, r, i) | 0;
                        m = t;
                        return n | 0;
                    }
                    function vi(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0;
                        r = (e + 74) | 0;
                        i = _[r >> 0] | 0;
                        _[r >> 0] = (i + 255) | i;
                        r = E[e >> 2] | 0;
                        if (!(r & 8)) {
                            E[(e + 8) >> 2] = 0;
                            E[(e + 4) >> 2] = 0;
                            r = E[(e + 44) >> 2] | 0;
                            E[(e + 28) >> 2] = r;
                            E[(e + 20) >> 2] = r;
                            E[(e + 16) >> 2] = r + (E[(e + 48) >> 2] | 0);
                            r = 0;
                        } else {
                            E[e >> 2] = r | 32;
                            r = -1;
                        }
                        return r | 0;
                    }
                    function Bi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0,
                            a = 0;
                        o = r & 255;
                        n = (i | 0) != 0;
                        e: do {
                            if (n & (((e & 3) | 0) != 0)) {
                                t = r & 255;
                                while (1) {
                                    if ((_[e >> 0] | 0) == (t << 24) >> 24) {
                                        a = 6;
                                        break e;
                                    }
                                    e = (e + 1) | 0;
                                    i = (i + -1) | 0;
                                    n = (i | 0) != 0;
                                    if (!(n & (((e & 3) | 0) != 0))) {
                                        a = 5;
                                        break;
                                    }
                                }
                            } else a = 5;
                        } while (0);
                        if ((a | 0) == 5)
                            if (n) a = 6;
                            else i = 0;
                        e: do {
                            if ((a | 0) == 6) {
                                t = r & 255;
                                if ((_[e >> 0] | 0) != (t << 24) >> 24) {
                                    n = fe(o, 16843009) | 0;
                                    r: do {
                                        if (i >>> 0 > 3)
                                            while (1) {
                                                o = E[e >> 2] ^ n;
                                                if (
                                                    ((o & -2139062144) ^
                                                        -2139062144) &
                                                    (o + -16843009)
                                                )
                                                    break;
                                                e = (e + 4) | 0;
                                                i = (i + -4) | 0;
                                                if (i >>> 0 <= 3) {
                                                    a = 11;
                                                    break r;
                                                }
                                            }
                                        else a = 11;
                                    } while (0);
                                    if ((a | 0) == 11)
                                        if (!i) {
                                            i = 0;
                                            break;
                                        }
                                    while (1) {
                                        if ((_[e >> 0] | 0) == (t << 24) >> 24)
                                            break e;
                                        e = (e + 1) | 0;
                                        i = (i + -1) | 0;
                                        if (!i) {
                                            i = 0;
                                            break;
                                        }
                                    }
                                }
                            }
                        } while (0);
                        return ((i | 0) != 0 ? e : 0) | 0;
                    }
                    function Li(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0;
                        n = e;
                        e: do {
                            if (!(n & 3)) i = 4;
                            else {
                                r = e;
                                e = n;
                                while (1) {
                                    if (!(_[r >> 0] | 0)) break e;
                                    r = (r + 1) | 0;
                                    e = r;
                                    if (!(e & 3)) {
                                        e = r;
                                        i = 4;
                                        break;
                                    }
                                }
                            }
                        } while (0);
                        if ((i | 0) == 4) {
                            while (1) {
                                r = E[e >> 2] | 0;
                                if (
                                    !(
                                        ((r & -2139062144) ^ -2139062144) &
                                        (r + -16843009)
                                    )
                                )
                                    e = (e + 4) | 0;
                                else break;
                            }
                            if (((r & 255) << 24) >> 24)
                                do {
                                    e = (e + 1) | 0;
                                } while ((_[e >> 0] | 0) != 0);
                        }
                        return (e - n) | 0;
                    }
                    function ki(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        var o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            S = 0,
                            h = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0,
                            L = 0,
                            k = 0,
                            F = 0,
                            g = 0,
                            U = 0,
                            D = 0,
                            y = 0,
                            G = 0,
                            X = 0,
                            V = 0,
                            Y = 0,
                            x = 0,
                            K = 0,
                            W = 0,
                            z = 0,
                            q = 0,
                            j = 0,
                            Z = 0,
                            J = 0,
                            Q = 0,
                            $ = 0,
                            ee = 0,
                            re = 0,
                            ie = 0,
                            ne = 0,
                            te = 0,
                            oe = 0,
                            ae = 0;
                        ae = m;
                        m = (m + 624) | 0;
                        re = (ae + 24) | 0;
                        ne = (ae + 16) | 0;
                        ie = (ae + 588) | 0;
                        Z = (ae + 576) | 0;
                        ee = ae;
                        z = (ae + 536) | 0;
                        oe = (ae + 8) | 0;
                        te = (ae + 528) | 0;
                        D = (e | 0) != 0;
                        y = (z + 40) | 0;
                        W = y;
                        z = (z + 39) | 0;
                        q = (oe + 4) | 0;
                        j = (Z + 12) | 0;
                        Z = (Z + 11) | 0;
                        J = ie;
                        Q = j;
                        $ = (Q - J) | 0;
                        G = (-2 - J) | 0;
                        X = (Q + 2) | 0;
                        V = (re + 288) | 0;
                        Y = (ie + 9) | 0;
                        x = Y;
                        K = (ie + 8) | 0;
                        o = 0;
                        h = r;
                        a = 0;
                        r = 0;
                        e: while (1) {
                            do {
                                if ((o | 0) > -1)
                                    if ((a | 0) > ((2147483647 - o) | 0)) {
                                        o = si() | 0;
                                        E[o >> 2] = 75;
                                        o = -1;
                                        break;
                                    } else {
                                        o = (a + o) | 0;
                                        break;
                                    }
                            } while (0);
                            a = _[h >> 0] | 0;
                            if (!((a << 24) >> 24)) {
                                U = 245;
                                break;
                            } else u = h;
                            r: while (1) {
                                switch ((a << 24) >> 24) {
                                    case 37: {
                                        a = u;
                                        U = 9;
                                        break r;
                                    }
                                    case 0: {
                                        a = u;
                                        break r;
                                    }
                                    default: {
                                    }
                                }
                                g = (u + 1) | 0;
                                a = _[g >> 0] | 0;
                                u = g;
                            }
                            r: do {
                                if ((U | 0) == 9)
                                    while (1) {
                                        U = 0;
                                        if ((_[(a + 1) >> 0] | 0) != 37)
                                            break r;
                                        u = (u + 1) | 0;
                                        a = (a + 2) | 0;
                                        if ((_[a >> 0] | 0) == 37) U = 9;
                                        else break;
                                    }
                            } while (0);
                            I = (u - h) | 0;
                            if (D ? ((E[e >> 2] & 32) | 0) == 0 : 0)
                                Ai(h, I, e) | 0;
                            if ((u | 0) != (h | 0)) {
                                h = a;
                                a = I;
                                continue;
                            }
                            f = (a + 1) | 0;
                            u = _[f >> 0] | 0;
                            s = (((u << 24) >> 24) + -48) | 0;
                            if (s >>> 0 < 10) {
                                g = (_[(a + 2) >> 0] | 0) == 36;
                                f = g ? (a + 3) | 0 : f;
                                u = _[f >> 0] | 0;
                                R = g ? s : -1;
                                r = g ? 1 : r;
                            } else R = -1;
                            a = (u << 24) >> 24;
                            r: do {
                                if (((a & -32) | 0) == 32) {
                                    s = 0;
                                    while (1) {
                                        if (!((1 << (a + -32)) & 75913)) {
                                            d = s;
                                            a = f;
                                            break r;
                                        }
                                        s =
                                            (1 << (((u << 24) >> 24) + -32)) |
                                            s;
                                        f = (f + 1) | 0;
                                        u = _[f >> 0] | 0;
                                        a = (u << 24) >> 24;
                                        if (((a & -32) | 0) != 32) {
                                            d = s;
                                            a = f;
                                            break;
                                        }
                                    }
                                } else {
                                    d = 0;
                                    a = f;
                                }
                            } while (0);
                            do {
                                if ((u << 24) >> 24 == 42) {
                                    s = (a + 1) | 0;
                                    u = ((_[s >> 0] | 0) + -48) | 0;
                                    if (
                                        u >>> 0 < 10
                                            ? (_[(a + 2) >> 0] | 0) == 36
                                            : 0
                                    ) {
                                        E[(t + (u << 2)) >> 2] = 10;
                                        r = 1;
                                        a = (a + 3) | 0;
                                        u =
                                            E[
                                                (n +
                                                    (((_[s >> 0] | 0) + -48) <<
                                                        3)) >>
                                                    2
                                            ] | 0;
                                    } else {
                                        if (r) {
                                            o = -1;
                                            break e;
                                        }
                                        if (!D) {
                                            C = d;
                                            a = s;
                                            r = 0;
                                            g = 0;
                                            break;
                                        }
                                        r =
                                            ((E[i >> 2] | 0) + (4 - 1)) &
                                            ~(4 - 1);
                                        u = E[r >> 2] | 0;
                                        E[i >> 2] = r + 4;
                                        r = 0;
                                        a = s;
                                    }
                                    if ((u | 0) < 0) {
                                        C = d | 8192;
                                        g = (0 - u) | 0;
                                    } else {
                                        C = d;
                                        g = u;
                                    }
                                } else {
                                    s = (((u << 24) >> 24) + -48) | 0;
                                    if (s >>> 0 < 10) {
                                        u = 0;
                                        do {
                                            u = (((u * 10) | 0) + s) | 0;
                                            a = (a + 1) | 0;
                                            s = ((_[a >> 0] | 0) + -48) | 0;
                                        } while (s >>> 0 < 10);
                                        if ((u | 0) < 0) {
                                            o = -1;
                                            break e;
                                        } else {
                                            C = d;
                                            g = u;
                                        }
                                    } else {
                                        C = d;
                                        g = 0;
                                    }
                                }
                            } while (0);
                            r: do {
                                if ((_[a >> 0] | 0) == 46) {
                                    s = (a + 1) | 0;
                                    u = _[s >> 0] | 0;
                                    if ((u << 24) >> 24 != 42) {
                                        f = (((u << 24) >> 24) + -48) | 0;
                                        if (f >>> 0 < 10) {
                                            a = s;
                                            u = 0;
                                        } else {
                                            a = s;
                                            f = 0;
                                            break;
                                        }
                                        while (1) {
                                            u = (((u * 10) | 0) + f) | 0;
                                            a = (a + 1) | 0;
                                            f = ((_[a >> 0] | 0) + -48) | 0;
                                            if (f >>> 0 >= 10) {
                                                f = u;
                                                break r;
                                            }
                                        }
                                    }
                                    s = (a + 2) | 0;
                                    u = ((_[s >> 0] | 0) + -48) | 0;
                                    if (
                                        u >>> 0 < 10
                                            ? (_[(a + 3) >> 0] | 0) == 36
                                            : 0
                                    ) {
                                        E[(t + (u << 2)) >> 2] = 10;
                                        a = (a + 4) | 0;
                                        f =
                                            E[
                                                (n +
                                                    (((_[s >> 0] | 0) + -48) <<
                                                        3)) >>
                                                    2
                                            ] | 0;
                                        break;
                                    }
                                    if (r) {
                                        o = -1;
                                        break e;
                                    }
                                    if (D) {
                                        a =
                                            ((E[i >> 2] | 0) + (4 - 1)) &
                                            ~(4 - 1);
                                        f = E[a >> 2] | 0;
                                        E[i >> 2] = a + 4;
                                        a = s;
                                    } else {
                                        a = s;
                                        f = 0;
                                    }
                                } else f = -1;
                            } while (0);
                            A = 0;
                            while (1) {
                                u = ((_[a >> 0] | 0) + -65) | 0;
                                if (u >>> 0 > 57) {
                                    o = -1;
                                    break e;
                                }
                                s = (a + 1) | 0;
                                u = _[(5347 + ((A * 58) | 0) + u) >> 0] | 0;
                                d = u & 255;
                                if (((d + -1) | 0) >>> 0 < 8) {
                                    a = s;
                                    A = d;
                                } else {
                                    F = s;
                                    break;
                                }
                            }
                            if (!((u << 24) >> 24)) {
                                o = -1;
                                break;
                            }
                            s = (R | 0) > -1;
                            do {
                                if ((u << 24) >> 24 == 19)
                                    if (s) {
                                        o = -1;
                                        break e;
                                    } else U = 52;
                                else {
                                    if (s) {
                                        E[(t + (R << 2)) >> 2] = d;
                                        L = (n + (R << 3)) | 0;
                                        k = E[(L + 4) >> 2] | 0;
                                        U = ee;
                                        E[U >> 2] = E[L >> 2];
                                        E[(U + 4) >> 2] = k;
                                        U = 52;
                                        break;
                                    }
                                    if (!D) {
                                        o = 0;
                                        break e;
                                    }
                                    Ui(ee, d, i);
                                }
                            } while (0);
                            if ((U | 0) == 52 ? ((U = 0), !D) : 0) {
                                h = F;
                                a = I;
                                continue;
                            }
                            R = _[a >> 0] | 0;
                            R =
                                ((A | 0) != 0) & (((R & 15) | 0) == 3)
                                    ? R & -33
                                    : R;
                            s = C & -65537;
                            k = ((C & 8192) | 0) == 0 ? C : s;
                            r: do {
                                switch (R | 0) {
                                    case 110:
                                        switch (A | 0) {
                                            case 0: {
                                                E[E[ee >> 2] >> 2] = o;
                                                h = F;
                                                a = I;
                                                continue e;
                                            }
                                            case 1: {
                                                E[E[ee >> 2] >> 2] = o;
                                                h = F;
                                                a = I;
                                                continue e;
                                            }
                                            case 2: {
                                                h = E[ee >> 2] | 0;
                                                E[h >> 2] = o;
                                                E[(h + 4) >> 2] =
                                                    (((o | 0) < 0) << 31) >> 31;
                                                h = F;
                                                a = I;
                                                continue e;
                                            }
                                            case 3: {
                                                c[E[ee >> 2] >> 1] = o;
                                                h = F;
                                                a = I;
                                                continue e;
                                            }
                                            case 4: {
                                                _[E[ee >> 2] >> 0] = o;
                                                h = F;
                                                a = I;
                                                continue e;
                                            }
                                            case 6: {
                                                E[E[ee >> 2] >> 2] = o;
                                                h = F;
                                                a = I;
                                                continue e;
                                            }
                                            case 7: {
                                                h = E[ee >> 2] | 0;
                                                E[h >> 2] = o;
                                                E[(h + 4) >> 2] =
                                                    (((o | 0) < 0) << 31) >> 31;
                                                h = F;
                                                a = I;
                                                continue e;
                                            }
                                            default: {
                                                h = F;
                                                a = I;
                                                continue e;
                                            }
                                        }
                                    case 112: {
                                        A = k | 8;
                                        f = f >>> 0 > 8 ? f : 8;
                                        R = 120;
                                        U = 64;
                                        break;
                                    }
                                    case 88:
                                    case 120: {
                                        A = k;
                                        U = 64;
                                        break;
                                    }
                                    case 111: {
                                        s = ee;
                                        u = E[s >> 2] | 0;
                                        s = E[(s + 4) >> 2] | 0;
                                        if (((u | 0) == 0) & ((s | 0) == 0))
                                            a = y;
                                        else {
                                            a = y;
                                            do {
                                                a = (a + -1) | 0;
                                                _[a >> 0] = (u & 7) | 48;
                                                u = ji(u | 0, s | 0, 3) | 0;
                                                s = H;
                                            } while (
                                                !(
                                                    ((u | 0) == 0) &
                                                    ((s | 0) == 0)
                                                )
                                            );
                                        }
                                        if (!(k & 8)) {
                                            u = k;
                                            A = 0;
                                            d = 5827;
                                            U = 77;
                                        } else {
                                            A = (W - a + 1) | 0;
                                            u = k;
                                            f = (f | 0) < (A | 0) ? A : f;
                                            A = 0;
                                            d = 5827;
                                            U = 77;
                                        }
                                        break;
                                    }
                                    case 105:
                                    case 100: {
                                        u = ee;
                                        a = E[u >> 2] | 0;
                                        u = E[(u + 4) >> 2] | 0;
                                        if ((u | 0) < 0) {
                                            a = Wi(0, 0, a | 0, u | 0) | 0;
                                            u = H;
                                            s = ee;
                                            E[s >> 2] = a;
                                            E[(s + 4) >> 2] = u;
                                            s = 1;
                                            d = 5827;
                                            U = 76;
                                            break r;
                                        }
                                        if (!(k & 2048)) {
                                            d = k & 1;
                                            s = d;
                                            d = (d | 0) == 0 ? 5827 : 5829;
                                            U = 76;
                                        } else {
                                            s = 1;
                                            d = 5828;
                                            U = 76;
                                        }
                                        break;
                                    }
                                    case 117: {
                                        u = ee;
                                        a = E[u >> 2] | 0;
                                        u = E[(u + 4) >> 2] | 0;
                                        s = 0;
                                        d = 5827;
                                        U = 76;
                                        break;
                                    }
                                    case 99: {
                                        _[z >> 0] = E[ee >> 2];
                                        h = z;
                                        u = 1;
                                        A = 0;
                                        R = 5827;
                                        a = y;
                                        break;
                                    }
                                    case 109: {
                                        a = si() | 0;
                                        a = ui(E[a >> 2] | 0) | 0;
                                        U = 82;
                                        break;
                                    }
                                    case 115: {
                                        a = E[ee >> 2] | 0;
                                        a = (a | 0) != 0 ? a : 5837;
                                        U = 82;
                                        break;
                                    }
                                    case 67: {
                                        E[oe >> 2] = E[ee >> 2];
                                        E[q >> 2] = 0;
                                        E[ee >> 2] = oe;
                                        f = -1;
                                        U = 86;
                                        break;
                                    }
                                    case 83: {
                                        if (!f) {
                                            yi(e, 32, g, 0, k);
                                            a = 0;
                                            U = 98;
                                        } else U = 86;
                                        break;
                                    }
                                    case 65:
                                    case 71:
                                    case 70:
                                    case 69:
                                    case 97:
                                    case 103:
                                    case 102:
                                    case 101: {
                                        l = +M[ee >> 3];
                                        E[ne >> 2] = 0;
                                        M[N >> 3] = l;
                                        if ((E[(N + 4) >> 2] | 0) >= 0)
                                            if (!(k & 2048)) {
                                                L = k & 1;
                                                B = L;
                                                L = (L | 0) == 0 ? 5845 : 5850;
                                            } else {
                                                B = 1;
                                                L = 5847;
                                            }
                                        else {
                                            l = -l;
                                            B = 1;
                                            L = 5844;
                                        }
                                        M[N >> 3] = l;
                                        v = E[(N + 4) >> 2] & 2146435072;
                                        do {
                                            if (
                                                (v >>> 0 < 2146435072) |
                                                (((v | 0) == 2146435072) &
                                                    (0 < 0))
                                            ) {
                                                S = +_i(l, ne) * 2;
                                                u = S != 0;
                                                if (u)
                                                    E[ne >> 2] =
                                                        (E[ne >> 2] | 0) + -1;
                                                O = R | 32;
                                                if ((O | 0) == 97) {
                                                    h = R & 32;
                                                    I =
                                                        (h | 0) == 0
                                                            ? L
                                                            : (L + 9) | 0;
                                                    C = B | 2;
                                                    a = (12 - f) | 0;
                                                    do {
                                                        if (
                                                            !(
                                                                (f >>> 0 > 11) |
                                                                ((a | 0) == 0)
                                                            )
                                                        ) {
                                                            l = 8;
                                                            do {
                                                                a =
                                                                    (a + -1) |
                                                                    0;
                                                                l = l * 16;
                                                            } while (
                                                                (a | 0) !=
                                                                0
                                                            );
                                                            if (
                                                                (_[I >> 0] |
                                                                    0) ==
                                                                45
                                                            ) {
                                                                l = -(
                                                                    l +
                                                                    (-S - l)
                                                                );
                                                                break;
                                                            } else {
                                                                l = S + l - l;
                                                                break;
                                                            }
                                                        } else l = S;
                                                    } while (0);
                                                    u = E[ne >> 2] | 0;
                                                    a =
                                                        (u | 0) < 0
                                                            ? (0 - u) | 0
                                                            : u;
                                                    a =
                                                        Di(
                                                            a,
                                                            (((a | 0) < 0) <<
                                                                31) >>
                                                                31,
                                                            j,
                                                        ) | 0;
                                                    if ((a | 0) == (j | 0)) {
                                                        _[Z >> 0] = 48;
                                                        a = Z;
                                                    }
                                                    _[(a + -1) >> 0] =
                                                        ((u >> 31) & 2) + 43;
                                                    A = (a + -2) | 0;
                                                    _[A >> 0] = R + 15;
                                                    d = (f | 0) < 1;
                                                    s = ((k & 8) | 0) == 0;
                                                    u = ie;
                                                    while (1) {
                                                        L = ~~l;
                                                        a = (u + 1) | 0;
                                                        _[u >> 0] =
                                                            T[(5811 + L) >> 0] |
                                                            h;
                                                        l = (l - +(L | 0)) * 16;
                                                        do {
                                                            if (
                                                                ((a - J) | 0) ==
                                                                1
                                                            ) {
                                                                if (
                                                                    s &
                                                                    (d &
                                                                        (l ==
                                                                            0))
                                                                )
                                                                    break;
                                                                _[a >> 0] = 46;
                                                                a = (u + 2) | 0;
                                                            }
                                                        } while (0);
                                                        if (!(l != 0)) break;
                                                        else u = a;
                                                    }
                                                    f =
                                                        ((f | 0) != 0) &
                                                        (((G + a) | 0) <
                                                            (f | 0))
                                                            ? (X + f - A) | 0
                                                            : ($ - A + a) | 0;
                                                    s = (f + C) | 0;
                                                    yi(e, 32, g, s, k);
                                                    if (!(E[e >> 2] & 32))
                                                        Ai(I, C, e) | 0;
                                                    yi(e, 48, g, s, k ^ 65536);
                                                    a = (a - J) | 0;
                                                    if (!(E[e >> 2] & 32))
                                                        Ai(ie, a, e) | 0;
                                                    u = (Q - A) | 0;
                                                    yi(
                                                        e,
                                                        48,
                                                        (f - (a + u)) | 0,
                                                        0,
                                                        0,
                                                    );
                                                    if (!(E[e >> 2] & 32))
                                                        Ai(A, u, e) | 0;
                                                    yi(e, 32, g, s, k ^ 8192);
                                                    a =
                                                        (s | 0) < (g | 0)
                                                            ? g
                                                            : s;
                                                    break;
                                                }
                                                a = (f | 0) < 0 ? 6 : f;
                                                if (u) {
                                                    u =
                                                        ((E[ne >> 2] | 0) +
                                                            -28) |
                                                        0;
                                                    E[ne >> 2] = u;
                                                    l = S * 268435456;
                                                } else {
                                                    l = S;
                                                    u = E[ne >> 2] | 0;
                                                }
                                                v = (u | 0) < 0 ? re : V;
                                                P = v;
                                                u = v;
                                                do {
                                                    b = ~~l >>> 0;
                                                    E[u >> 2] = b;
                                                    u = (u + 4) | 0;
                                                    l = (l - +(b >>> 0)) * 1e9;
                                                } while (l != 0);
                                                s = u;
                                                u = E[ne >> 2] | 0;
                                                if ((u | 0) > 0) {
                                                    d = v;
                                                    while (1) {
                                                        A =
                                                            (u | 0) > 29
                                                                ? 29
                                                                : u;
                                                        f = (s + -4) | 0;
                                                        do {
                                                            if (
                                                                f >>> 0 <
                                                                d >>> 0
                                                            )
                                                                f = d;
                                                            else {
                                                                u = 0;
                                                                do {
                                                                    b =
                                                                        Zi(
                                                                            E[
                                                                                f >>
                                                                                    2
                                                                            ] |
                                                                                0,
                                                                            0,
                                                                            A |
                                                                                0,
                                                                        ) | 0;
                                                                    b =
                                                                        zi(
                                                                            b |
                                                                                0,
                                                                            H |
                                                                                0,
                                                                            u |
                                                                                0,
                                                                            0,
                                                                        ) | 0;
                                                                    u = H;
                                                                    w =
                                                                        an(
                                                                            b |
                                                                                0,
                                                                            u |
                                                                                0,
                                                                            1e9,
                                                                            0,
                                                                        ) | 0;
                                                                    E[f >> 2] =
                                                                        w;
                                                                    u =
                                                                        on(
                                                                            b |
                                                                                0,
                                                                            u |
                                                                                0,
                                                                            1e9,
                                                                            0,
                                                                        ) | 0;
                                                                    f =
                                                                        (f +
                                                                            -4) |
                                                                        0;
                                                                } while (
                                                                    f >>> 0 >=
                                                                    d >>> 0
                                                                );
                                                                if (!u) {
                                                                    f = d;
                                                                    break;
                                                                }
                                                                f =
                                                                    (d + -4) |
                                                                    0;
                                                                E[f >> 2] = u;
                                                            }
                                                        } while (0);
                                                        while (1) {
                                                            if (
                                                                s >>> 0 <=
                                                                f >>> 0
                                                            )
                                                                break;
                                                            u = (s + -4) | 0;
                                                            if (
                                                                !(E[u >> 2] | 0)
                                                            )
                                                                s = u;
                                                            else break;
                                                        }
                                                        u =
                                                            ((E[ne >> 2] | 0) -
                                                                A) |
                                                            0;
                                                        E[ne >> 2] = u;
                                                        if ((u | 0) > 0) d = f;
                                                        else break;
                                                    }
                                                } else f = v;
                                                if ((u | 0) < 0) {
                                                    I =
                                                        (((((a + 25) | 0) / 9) |
                                                            0) +
                                                            1) |
                                                        0;
                                                    p = (O | 0) == 102;
                                                    h = f;
                                                    while (1) {
                                                        C = (0 - u) | 0;
                                                        C = (C | 0) > 9 ? 9 : C;
                                                        do {
                                                            if (
                                                                h >>> 0 <
                                                                s >>> 0
                                                            ) {
                                                                u =
                                                                    ((1 << C) +
                                                                        -1) |
                                                                    0;
                                                                d = 1e9 >>> C;
                                                                f = 0;
                                                                A = h;
                                                                do {
                                                                    b =
                                                                        E[
                                                                            A >>
                                                                                2
                                                                        ] | 0;
                                                                    E[A >> 2] =
                                                                        (b >>>
                                                                            C) +
                                                                        f;
                                                                    f =
                                                                        fe(
                                                                            b &
                                                                                u,
                                                                            d,
                                                                        ) | 0;
                                                                    A =
                                                                        (A +
                                                                            4) |
                                                                        0;
                                                                } while (
                                                                    A >>> 0 <
                                                                    s >>> 0
                                                                );
                                                                u =
                                                                    (E[h >> 2] |
                                                                        0) ==
                                                                    0
                                                                        ? (h +
                                                                              4) |
                                                                          0
                                                                        : h;
                                                                if (!f) {
                                                                    f = u;
                                                                    break;
                                                                }
                                                                E[s >> 2] = f;
                                                                f = u;
                                                                s = (s + 4) | 0;
                                                            } else
                                                                f =
                                                                    (E[h >> 2] |
                                                                        0) ==
                                                                    0
                                                                        ? (h +
                                                                              4) |
                                                                          0
                                                                        : h;
                                                        } while (0);
                                                        u = p ? v : f;
                                                        s =
                                                            (((s - u) >> 2) |
                                                                0) >
                                                            (I | 0)
                                                                ? (u +
                                                                      (I <<
                                                                          2)) |
                                                                  0
                                                                : s;
                                                        u =
                                                            ((E[ne >> 2] | 0) +
                                                                C) |
                                                            0;
                                                        E[ne >> 2] = u;
                                                        if ((u | 0) >= 0) {
                                                            h = f;
                                                            break;
                                                        } else h = f;
                                                    }
                                                } else h = f;
                                                do {
                                                    if (h >>> 0 < s >>> 0) {
                                                        u =
                                                            (((P - h) >> 2) *
                                                                9) |
                                                            0;
                                                        d = E[h >> 2] | 0;
                                                        if (d >>> 0 < 10) break;
                                                        else f = 10;
                                                        do {
                                                            f = (f * 10) | 0;
                                                            u = (u + 1) | 0;
                                                        } while (
                                                            d >>> 0 >=
                                                            f >>> 0
                                                        );
                                                    } else u = 0;
                                                } while (0);
                                                w = (O | 0) == 103;
                                                b = (a | 0) != 0;
                                                f =
                                                    (a -
                                                        ((O | 0) != 102
                                                            ? u
                                                            : 0) +
                                                        (((b & w) << 31) >>
                                                            31)) |
                                                    0;
                                                if (
                                                    (f | 0) <
                                                    ((((((s - P) >> 2) * 9) |
                                                        0) +
                                                        -9) |
                                                        0)
                                                ) {
                                                    A = (f + 9216) | 0;
                                                    p = ((A | 0) / 9) | 0;
                                                    f =
                                                        (v +
                                                            ((p + -1023) <<
                                                                2)) |
                                                        0;
                                                    A =
                                                        (((A | 0) % 9 | 0) +
                                                            1) |
                                                        0;
                                                    if ((A | 0) < 9) {
                                                        d = 10;
                                                        do {
                                                            d = (d * 10) | 0;
                                                            A = (A + 1) | 0;
                                                        } while ((A | 0) != 9);
                                                    } else d = 10;
                                                    C = E[f >> 2] | 0;
                                                    I =
                                                        (C >>> 0) % (d >>> 0) |
                                                        0;
                                                    if (
                                                        (I | 0) == 0
                                                            ? ((v +
                                                                  ((p +
                                                                      -1022) <<
                                                                      2)) |
                                                                  0) ==
                                                              (s | 0)
                                                            : 0
                                                    )
                                                        d = h;
                                                    else U = 163;
                                                    do {
                                                        if ((U | 0) == 163) {
                                                            U = 0;
                                                            S =
                                                                (((((C >>> 0) /
                                                                    (d >>> 0)) |
                                                                    0) &
                                                                    1) |
                                                                    0) ==
                                                                0
                                                                    ? 9007199254740992
                                                                    : 9007199254740994;
                                                            A =
                                                                ((d | 0) / 2) |
                                                                0;
                                                            do {
                                                                if (
                                                                    I >>> 0 <
                                                                    A >>> 0
                                                                )
                                                                    l = 0.5;
                                                                else {
                                                                    if (
                                                                        (I |
                                                                            0) ==
                                                                        (A | 0)
                                                                            ? ((v +
                                                                                  ((p +
                                                                                      -1022) <<
                                                                                      2)) |
                                                                                  0) ==
                                                                              (s |
                                                                                  0)
                                                                            : 0
                                                                    ) {
                                                                        l = 1;
                                                                        break;
                                                                    }
                                                                    l = 1.5;
                                                                }
                                                            } while (0);
                                                            do {
                                                                if (B) {
                                                                    if (
                                                                        (_[
                                                                            L >>
                                                                                0
                                                                        ] |
                                                                            0) !=
                                                                        45
                                                                    )
                                                                        break;
                                                                    S = -S;
                                                                    l = -l;
                                                                }
                                                            } while (0);
                                                            A = (C - I) | 0;
                                                            E[f >> 2] = A;
                                                            if (!(S + l != S)) {
                                                                d = h;
                                                                break;
                                                            }
                                                            O = (A + d) | 0;
                                                            E[f >> 2] = O;
                                                            if (
                                                                O >>> 0 >
                                                                999999999
                                                            ) {
                                                                u = h;
                                                                while (1) {
                                                                    d =
                                                                        (f +
                                                                            -4) |
                                                                        0;
                                                                    E[f >> 2] =
                                                                        0;
                                                                    if (
                                                                        d >>>
                                                                            0 <
                                                                        u >>> 0
                                                                    ) {
                                                                        u =
                                                                            (u +
                                                                                -4) |
                                                                            0;
                                                                        E[
                                                                            u >>
                                                                                2
                                                                        ] = 0;
                                                                    }
                                                                    O =
                                                                        ((E[
                                                                            d >>
                                                                                2
                                                                        ] |
                                                                            0) +
                                                                            1) |
                                                                        0;
                                                                    E[d >> 2] =
                                                                        O;
                                                                    if (
                                                                        O >>>
                                                                            0 >
                                                                        999999999
                                                                    )
                                                                        f = d;
                                                                    else {
                                                                        h = u;
                                                                        f = d;
                                                                        break;
                                                                    }
                                                                }
                                                            }
                                                            u =
                                                                (((P - h) >>
                                                                    2) *
                                                                    9) |
                                                                0;
                                                            A = E[h >> 2] | 0;
                                                            if (A >>> 0 < 10) {
                                                                d = h;
                                                                break;
                                                            } else d = 10;
                                                            do {
                                                                d =
                                                                    (d * 10) |
                                                                    0;
                                                                u = (u + 1) | 0;
                                                            } while (
                                                                A >>> 0 >=
                                                                d >>> 0
                                                            );
                                                            d = h;
                                                        }
                                                    } while (0);
                                                    O = (f + 4) | 0;
                                                    h = d;
                                                    s =
                                                        s >>> 0 > O >>> 0
                                                            ? O
                                                            : s;
                                                }
                                                I = (0 - u) | 0;
                                                while (1) {
                                                    if (s >>> 0 <= h >>> 0) {
                                                        p = 0;
                                                        O = s;
                                                        break;
                                                    }
                                                    f = (s + -4) | 0;
                                                    if (!(E[f >> 2] | 0)) s = f;
                                                    else {
                                                        p = 1;
                                                        O = s;
                                                        break;
                                                    }
                                                }
                                                do {
                                                    if (w) {
                                                        a =
                                                            (((b & 1) ^ 1) +
                                                                a) |
                                                            0;
                                                        if (
                                                            ((a | 0) >
                                                                (u | 0)) &
                                                            ((u | 0) > -5)
                                                        ) {
                                                            R = (R + -1) | 0;
                                                            a =
                                                                (a + -1 - u) |
                                                                0;
                                                        } else {
                                                            R = (R + -2) | 0;
                                                            a = (a + -1) | 0;
                                                        }
                                                        s = k & 8;
                                                        if (s) break;
                                                        do {
                                                            if (p) {
                                                                s =
                                                                    E[
                                                                        (O +
                                                                            -4) >>
                                                                            2
                                                                    ] | 0;
                                                                if (!s) {
                                                                    f = 9;
                                                                    break;
                                                                }
                                                                if (
                                                                    !(
                                                                        (s >>>
                                                                            0) %
                                                                            10 |
                                                                        0
                                                                    )
                                                                ) {
                                                                    d = 10;
                                                                    f = 0;
                                                                } else {
                                                                    f = 0;
                                                                    break;
                                                                }
                                                                do {
                                                                    d =
                                                                        (d *
                                                                            10) |
                                                                        0;
                                                                    f =
                                                                        (f +
                                                                            1) |
                                                                        0;
                                                                } while (
                                                                    ((s >>> 0) %
                                                                        (d >>>
                                                                            0) |
                                                                        0 |
                                                                        0) ==
                                                                    0
                                                                );
                                                            } else f = 9;
                                                        } while (0);
                                                        s =
                                                            (((((O - P) >> 2) *
                                                                9) |
                                                                0) +
                                                                -9) |
                                                            0;
                                                        if (
                                                            (R | 32 | 0) ==
                                                            102
                                                        ) {
                                                            s = (s - f) | 0;
                                                            s =
                                                                (s | 0) < 0
                                                                    ? 0
                                                                    : s;
                                                            a =
                                                                (a | 0) <
                                                                (s | 0)
                                                                    ? a
                                                                    : s;
                                                            s = 0;
                                                            break;
                                                        } else {
                                                            s = (s + u - f) | 0;
                                                            s =
                                                                (s | 0) < 0
                                                                    ? 0
                                                                    : s;
                                                            a =
                                                                (a | 0) <
                                                                (s | 0)
                                                                    ? a
                                                                    : s;
                                                            s = 0;
                                                            break;
                                                        }
                                                    } else s = k & 8;
                                                } while (0);
                                                C = a | s;
                                                d = ((C | 0) != 0) & 1;
                                                A = (R | 32 | 0) == 102;
                                                if (A) {
                                                    u = (u | 0) > 0 ? u : 0;
                                                    R = 0;
                                                } else {
                                                    f = (u | 0) < 0 ? I : u;
                                                    f =
                                                        Di(
                                                            f,
                                                            (((f | 0) < 0) <<
                                                                31) >>
                                                                31,
                                                            j,
                                                        ) | 0;
                                                    if (((Q - f) | 0) < 2)
                                                        do {
                                                            f = (f + -1) | 0;
                                                            _[f >> 0] = 48;
                                                        } while (
                                                            ((Q - f) | 0) <
                                                            2
                                                        );
                                                    _[(f + -1) >> 0] =
                                                        ((u >> 31) & 2) + 43;
                                                    P = (f + -2) | 0;
                                                    _[P >> 0] = R;
                                                    u = (Q - P) | 0;
                                                    R = P;
                                                }
                                                I = (B + 1 + a + d + u) | 0;
                                                yi(e, 32, g, I, k);
                                                if (!(E[e >> 2] & 32))
                                                    Ai(L, B, e) | 0;
                                                yi(e, 48, g, I, k ^ 65536);
                                                do {
                                                    if (A) {
                                                        f =
                                                            h >>> 0 > v >>> 0
                                                                ? v
                                                                : h;
                                                        u = f;
                                                        do {
                                                            s =
                                                                Di(
                                                                    E[u >> 2] |
                                                                        0,
                                                                    0,
                                                                    Y,
                                                                ) | 0;
                                                            do {
                                                                if (
                                                                    (u | 0) ==
                                                                    (f | 0)
                                                                ) {
                                                                    if (
                                                                        (s |
                                                                            0) !=
                                                                        (Y | 0)
                                                                    )
                                                                        break;
                                                                    _[K >> 0] =
                                                                        48;
                                                                    s = K;
                                                                } else {
                                                                    if (
                                                                        s >>>
                                                                            0 <=
                                                                        ie >>> 0
                                                                    )
                                                                        break;
                                                                    do {
                                                                        s =
                                                                            (s +
                                                                                -1) |
                                                                            0;
                                                                        _[
                                                                            s >>
                                                                                0
                                                                        ] = 48;
                                                                    } while (
                                                                        s >>>
                                                                            0 >
                                                                        ie >>> 0
                                                                    );
                                                                }
                                                            } while (0);
                                                            if (
                                                                !(
                                                                    E[e >> 2] &
                                                                    32
                                                                )
                                                            )
                                                                Ai(
                                                                    s,
                                                                    (x - s) | 0,
                                                                    e,
                                                                ) | 0;
                                                            u = (u + 4) | 0;
                                                        } while (
                                                            u >>> 0 <=
                                                            v >>> 0
                                                        );
                                                        do {
                                                            if (C) {
                                                                if (
                                                                    E[e >> 2] &
                                                                    32
                                                                )
                                                                    break;
                                                                Ai(5879, 1, e) |
                                                                    0;
                                                            }
                                                        } while (0);
                                                        if (
                                                            ((a | 0) > 0) &
                                                            (u >>> 0 < O >>> 0)
                                                        ) {
                                                            s = u;
                                                            while (1) {
                                                                u =
                                                                    Di(
                                                                        E[
                                                                            s >>
                                                                                2
                                                                        ] | 0,
                                                                        0,
                                                                        Y,
                                                                    ) | 0;
                                                                if (
                                                                    u >>> 0 >
                                                                    ie >>> 0
                                                                )
                                                                    do {
                                                                        u =
                                                                            (u +
                                                                                -1) |
                                                                            0;
                                                                        _[
                                                                            u >>
                                                                                0
                                                                        ] = 48;
                                                                    } while (
                                                                        u >>>
                                                                            0 >
                                                                        ie >>> 0
                                                                    );
                                                                if (
                                                                    !(
                                                                        E[
                                                                            e >>
                                                                                2
                                                                        ] & 32
                                                                    )
                                                                )
                                                                    Ai(
                                                                        u,
                                                                        (a |
                                                                            0) >
                                                                            9
                                                                            ? 9
                                                                            : a,
                                                                        e,
                                                                    ) | 0;
                                                                s = (s + 4) | 0;
                                                                u =
                                                                    (a + -9) |
                                                                    0;
                                                                if (
                                                                    !(
                                                                        ((a |
                                                                            0) >
                                                                            9) &
                                                                        (s >>>
                                                                            0 <
                                                                            O >>>
                                                                                0)
                                                                    )
                                                                ) {
                                                                    a = u;
                                                                    break;
                                                                } else a = u;
                                                            }
                                                        }
                                                        yi(
                                                            e,
                                                            48,
                                                            (a + 9) | 0,
                                                            9,
                                                            0,
                                                        );
                                                    } else {
                                                        A = p ? O : (h + 4) | 0;
                                                        if ((a | 0) > -1) {
                                                            d = (s | 0) == 0;
                                                            f = h;
                                                            do {
                                                                u =
                                                                    Di(
                                                                        E[
                                                                            f >>
                                                                                2
                                                                        ] | 0,
                                                                        0,
                                                                        Y,
                                                                    ) | 0;
                                                                if (
                                                                    (u | 0) ==
                                                                    (Y | 0)
                                                                ) {
                                                                    _[K >> 0] =
                                                                        48;
                                                                    u = K;
                                                                }
                                                                do {
                                                                    if (
                                                                        (f |
                                                                            0) ==
                                                                        (h | 0)
                                                                    ) {
                                                                        s =
                                                                            (u +
                                                                                1) |
                                                                            0;
                                                                        if (
                                                                            !(
                                                                                E[
                                                                                    e >>
                                                                                        2
                                                                                ] &
                                                                                32
                                                                            )
                                                                        )
                                                                            Ai(
                                                                                u,
                                                                                1,
                                                                                e,
                                                                            ) |
                                                                                0;
                                                                        if (
                                                                            d &
                                                                            ((a |
                                                                                0) <
                                                                                1)
                                                                        ) {
                                                                            u =
                                                                                s;
                                                                            break;
                                                                        }
                                                                        if (
                                                                            E[
                                                                                e >>
                                                                                    2
                                                                            ] &
                                                                            32
                                                                        ) {
                                                                            u =
                                                                                s;
                                                                            break;
                                                                        }
                                                                        Ai(
                                                                            5879,
                                                                            1,
                                                                            e,
                                                                        ) | 0;
                                                                        u = s;
                                                                    } else {
                                                                        if (
                                                                            u >>>
                                                                                0 <=
                                                                            ie >>>
                                                                                0
                                                                        )
                                                                            break;
                                                                        do {
                                                                            u =
                                                                                (u +
                                                                                    -1) |
                                                                                0;
                                                                            _[
                                                                                u >>
                                                                                    0
                                                                            ] =
                                                                                48;
                                                                        } while (
                                                                            u >>>
                                                                                0 >
                                                                            ie >>>
                                                                                0
                                                                        );
                                                                    }
                                                                } while (0);
                                                                s = (x - u) | 0;
                                                                if (
                                                                    !(
                                                                        E[
                                                                            e >>
                                                                                2
                                                                        ] & 32
                                                                    )
                                                                )
                                                                    Ai(
                                                                        u,
                                                                        (a |
                                                                            0) >
                                                                            (s |
                                                                                0)
                                                                            ? s
                                                                            : a,
                                                                        e,
                                                                    ) | 0;
                                                                a = (a - s) | 0;
                                                                f = (f + 4) | 0;
                                                            } while (
                                                                (f >>> 0 <
                                                                    A >>> 0) &
                                                                ((a | 0) > -1)
                                                            );
                                                        }
                                                        yi(
                                                            e,
                                                            48,
                                                            (a + 18) | 0,
                                                            18,
                                                            0,
                                                        );
                                                        if (E[e >> 2] & 32)
                                                            break;
                                                        Ai(R, (Q - R) | 0, e) |
                                                            0;
                                                    }
                                                } while (0);
                                                yi(e, 32, g, I, k ^ 8192);
                                                a = (I | 0) < (g | 0) ? g : I;
                                            } else {
                                                A = ((R & 32) | 0) != 0;
                                                d = (l != l) | (0 != 0);
                                                u = d ? 0 : B;
                                                f = (u + 3) | 0;
                                                yi(e, 32, g, f, s);
                                                a = E[e >> 2] | 0;
                                                if (!(a & 32)) {
                                                    Ai(L, u, e) | 0;
                                                    a = E[e >> 2] | 0;
                                                }
                                                if (!(a & 32))
                                                    Ai(
                                                        d
                                                            ? A
                                                                ? 5871
                                                                : 5875
                                                            : A
                                                              ? 5863
                                                              : 5867,
                                                        3,
                                                        e,
                                                    ) | 0;
                                                yi(e, 32, g, f, k ^ 8192);
                                                a = (f | 0) < (g | 0) ? g : f;
                                            }
                                        } while (0);
                                        h = F;
                                        continue e;
                                    }
                                    default: {
                                        s = k;
                                        u = f;
                                        A = 0;
                                        R = 5827;
                                        a = y;
                                    }
                                }
                            } while (0);
                            r: do {
                                if ((U | 0) == 64) {
                                    s = ee;
                                    u = E[s >> 2] | 0;
                                    s = E[(s + 4) >> 2] | 0;
                                    d = R & 32;
                                    if (!(((u | 0) == 0) & ((s | 0) == 0))) {
                                        a = y;
                                        do {
                                            a = (a + -1) | 0;
                                            _[a >> 0] =
                                                T[(5811 + (u & 15)) >> 0] | d;
                                            u = ji(u | 0, s | 0, 4) | 0;
                                            s = H;
                                        } while (
                                            !(((u | 0) == 0) & ((s | 0) == 0))
                                        );
                                        U = ee;
                                        if (
                                            (((A & 8) | 0) == 0) |
                                            (((E[U >> 2] | 0) == 0) &
                                                ((E[(U + 4) >> 2] | 0) == 0))
                                        ) {
                                            u = A;
                                            A = 0;
                                            d = 5827;
                                            U = 77;
                                        } else {
                                            u = A;
                                            A = 2;
                                            d = (5827 + (R >> 4)) | 0;
                                            U = 77;
                                        }
                                    } else {
                                        a = y;
                                        u = A;
                                        A = 0;
                                        d = 5827;
                                        U = 77;
                                    }
                                } else if ((U | 0) == 76) {
                                    a = Di(a, u, y) | 0;
                                    u = k;
                                    A = s;
                                    U = 77;
                                } else if ((U | 0) == 82) {
                                    U = 0;
                                    k = Bi(a, 0, f) | 0;
                                    L = (k | 0) == 0;
                                    h = a;
                                    u = L ? f : (k - a) | 0;
                                    A = 0;
                                    R = 5827;
                                    a = L ? (a + f) | 0 : k;
                                } else if ((U | 0) == 86) {
                                    U = 0;
                                    u = 0;
                                    a = 0;
                                    d = E[ee >> 2] | 0;
                                    while (1) {
                                        s = E[d >> 2] | 0;
                                        if (!s) break;
                                        a = Ei(te, s) | 0;
                                        if (
                                            ((a | 0) < 0) |
                                            (a >>> 0 > ((f - u) | 0) >>> 0)
                                        )
                                            break;
                                        u = (a + u) | 0;
                                        if (f >>> 0 > u >>> 0) d = (d + 4) | 0;
                                        else break;
                                    }
                                    if ((a | 0) < 0) {
                                        o = -1;
                                        break e;
                                    }
                                    yi(e, 32, g, u, k);
                                    if (!u) {
                                        a = 0;
                                        U = 98;
                                    } else {
                                        s = 0;
                                        f = E[ee >> 2] | 0;
                                        while (1) {
                                            a = E[f >> 2] | 0;
                                            if (!a) {
                                                a = u;
                                                U = 98;
                                                break r;
                                            }
                                            a = Ei(te, a) | 0;
                                            s = (a + s) | 0;
                                            if ((s | 0) > (u | 0)) {
                                                a = u;
                                                U = 98;
                                                break r;
                                            }
                                            if (!(E[e >> 2] & 32))
                                                Ai(te, a, e) | 0;
                                            if (s >>> 0 >= u >>> 0) {
                                                a = u;
                                                U = 98;
                                                break;
                                            } else f = (f + 4) | 0;
                                        }
                                    }
                                }
                            } while (0);
                            if ((U | 0) == 98) {
                                U = 0;
                                yi(e, 32, g, a, k ^ 8192);
                                h = F;
                                a = (g | 0) > (a | 0) ? g : a;
                                continue;
                            }
                            if ((U | 0) == 77) {
                                U = 0;
                                s = (f | 0) > -1 ? u & -65537 : u;
                                u = ee;
                                u =
                                    ((E[u >> 2] | 0) != 0) |
                                    ((E[(u + 4) >> 2] | 0) != 0);
                                if (((f | 0) != 0) | u) {
                                    u = (((u & 1) ^ 1) + (W - a)) | 0;
                                    h = a;
                                    u = (f | 0) > (u | 0) ? f : u;
                                    R = d;
                                    a = y;
                                } else {
                                    h = y;
                                    u = 0;
                                    R = d;
                                    a = y;
                                }
                            }
                            d = (a - h) | 0;
                            u = (u | 0) < (d | 0) ? d : u;
                            f = (A + u) | 0;
                            a = (g | 0) < (f | 0) ? f : g;
                            yi(e, 32, a, f, s);
                            if (!(E[e >> 2] & 32)) Ai(R, A, e) | 0;
                            yi(e, 48, a, f, s ^ 65536);
                            yi(e, 48, u, d, 0);
                            if (!(E[e >> 2] & 32)) Ai(h, d, e) | 0;
                            yi(e, 32, a, f, s ^ 8192);
                            h = F;
                        }
                        e: do {
                            if ((U | 0) == 245)
                                if (!e)
                                    if (r) {
                                        o = 1;
                                        while (1) {
                                            r = E[(t + (o << 2)) >> 2] | 0;
                                            if (!r) break;
                                            Ui((n + (o << 3)) | 0, r, i);
                                            o = (o + 1) | 0;
                                            if ((o | 0) >= 10) {
                                                o = 1;
                                                break e;
                                            }
                                        }
                                        if ((o | 0) < 10)
                                            while (1) {
                                                if (
                                                    E[(t + (o << 2)) >> 2] | 0
                                                ) {
                                                    o = -1;
                                                    break e;
                                                }
                                                o = (o + 1) | 0;
                                                if ((o | 0) >= 10) {
                                                    o = 1;
                                                    break;
                                                }
                                            }
                                        else o = 1;
                                    } else o = 0;
                        } while (0);
                        m = ae;
                        return o | 0;
                    }
                    function Fi(e) {
                        e = e | 0;
                        if (!(E[(e + 68) >> 2] | 0)) Ii(e);
                        return;
                    }
                    function gi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0;
                        n = (e + 20) | 0;
                        t = E[n >> 2] | 0;
                        e = ((E[(e + 16) >> 2] | 0) - t) | 0;
                        e = e >>> 0 > i >>> 0 ? i : e;
                        Ji(t | 0, r | 0, e | 0) | 0;
                        E[n >> 2] = (E[n >> 2] | 0) + e;
                        return i | 0;
                    }
                    function Ui(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0;
                        e: do {
                            if (r >>> 0 <= 20)
                                do {
                                    switch (r | 0) {
                                        case 9: {
                                            n =
                                                ((E[i >> 2] | 0) + (4 - 1)) &
                                                ~(4 - 1);
                                            r = E[n >> 2] | 0;
                                            E[i >> 2] = n + 4;
                                            E[e >> 2] = r;
                                            break e;
                                        }
                                        case 10: {
                                            n =
                                                ((E[i >> 2] | 0) + (4 - 1)) &
                                                ~(4 - 1);
                                            r = E[n >> 2] | 0;
                                            E[i >> 2] = n + 4;
                                            n = e;
                                            E[n >> 2] = r;
                                            E[(n + 4) >> 2] =
                                                (((r | 0) < 0) << 31) >> 31;
                                            break e;
                                        }
                                        case 11: {
                                            n =
                                                ((E[i >> 2] | 0) + (4 - 1)) &
                                                ~(4 - 1);
                                            r = E[n >> 2] | 0;
                                            E[i >> 2] = n + 4;
                                            n = e;
                                            E[n >> 2] = r;
                                            E[(n + 4) >> 2] = 0;
                                            break e;
                                        }
                                        case 12: {
                                            n =
                                                ((E[i >> 2] | 0) + (8 - 1)) &
                                                ~(8 - 1);
                                            r = n;
                                            t = E[r >> 2] | 0;
                                            r = E[(r + 4) >> 2] | 0;
                                            E[i >> 2] = n + 8;
                                            n = e;
                                            E[n >> 2] = t;
                                            E[(n + 4) >> 2] = r;
                                            break e;
                                        }
                                        case 13: {
                                            t =
                                                ((E[i >> 2] | 0) + (4 - 1)) &
                                                ~(4 - 1);
                                            n = E[t >> 2] | 0;
                                            E[i >> 2] = t + 4;
                                            n = ((n & 65535) << 16) >> 16;
                                            t = e;
                                            E[t >> 2] = n;
                                            E[(t + 4) >> 2] =
                                                (((n | 0) < 0) << 31) >> 31;
                                            break e;
                                        }
                                        case 14: {
                                            t =
                                                ((E[i >> 2] | 0) + (4 - 1)) &
                                                ~(4 - 1);
                                            n = E[t >> 2] | 0;
                                            E[i >> 2] = t + 4;
                                            t = e;
                                            E[t >> 2] = n & 65535;
                                            E[(t + 4) >> 2] = 0;
                                            break e;
                                        }
                                        case 15: {
                                            t =
                                                ((E[i >> 2] | 0) + (4 - 1)) &
                                                ~(4 - 1);
                                            n = E[t >> 2] | 0;
                                            E[i >> 2] = t + 4;
                                            n = ((n & 255) << 24) >> 24;
                                            t = e;
                                            E[t >> 2] = n;
                                            E[(t + 4) >> 2] =
                                                (((n | 0) < 0) << 31) >> 31;
                                            break e;
                                        }
                                        case 16: {
                                            t =
                                                ((E[i >> 2] | 0) + (4 - 1)) &
                                                ~(4 - 1);
                                            n = E[t >> 2] | 0;
                                            E[i >> 2] = t + 4;
                                            t = e;
                                            E[t >> 2] = n & 255;
                                            E[(t + 4) >> 2] = 0;
                                            break e;
                                        }
                                        case 17: {
                                            t =
                                                ((E[i >> 2] | 0) + (8 - 1)) &
                                                ~(8 - 1);
                                            o = +M[t >> 3];
                                            E[i >> 2] = t + 8;
                                            M[e >> 3] = o;
                                            break e;
                                        }
                                        case 18: {
                                            t =
                                                ((E[i >> 2] | 0) + (8 - 1)) &
                                                ~(8 - 1);
                                            o = +M[t >> 3];
                                            E[i >> 2] = t + 8;
                                            M[e >> 3] = o;
                                            break e;
                                        }
                                        default:
                                            break e;
                                    }
                                } while (0);
                        } while (0);
                        return;
                    }
                    function Di(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0;
                        if (
                            (r >>> 0 > 0) |
                            (((r | 0) == 0) & (e >>> 0 > 4294967295))
                        )
                            while (1) {
                                n = an(e | 0, r | 0, 10, 0) | 0;
                                i = (i + -1) | 0;
                                _[i >> 0] = n | 48;
                                n = on(e | 0, r | 0, 10, 0) | 0;
                                if (
                                    (r >>> 0 > 9) |
                                    (((r | 0) == 9) & (e >>> 0 > 4294967295))
                                ) {
                                    e = n;
                                    r = H;
                                } else {
                                    e = n;
                                    break;
                                }
                            }
                        if (e)
                            while (1) {
                                i = (i + -1) | 0;
                                _[i >> 0] = (e >>> 0) % 10 | 0 | 48;
                                if (e >>> 0 < 10) break;
                                else e = ((e >>> 0) / 10) | 0;
                            }
                        return i | 0;
                    }
                    function yi(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        var o = 0,
                            a = 0,
                            u = 0;
                        u = m;
                        m = (m + 256) | 0;
                        a = u;
                        do {
                            if (
                                ((i | 0) > (n | 0)) &
                                (((t & 73728) | 0) == 0)
                            ) {
                                t = (i - n) | 0;
                                qi(
                                    a | 0,
                                    r | 0,
                                    (t >>> 0 > 256 ? 256 : t) | 0,
                                ) | 0;
                                r = E[e >> 2] | 0;
                                o = ((r & 32) | 0) == 0;
                                if (t >>> 0 > 255) {
                                    n = (i - n) | 0;
                                    do {
                                        if (o) {
                                            Ai(a, 256, e) | 0;
                                            r = E[e >> 2] | 0;
                                        }
                                        t = (t + -256) | 0;
                                        o = ((r & 32) | 0) == 0;
                                    } while (t >>> 0 > 255);
                                    if (o) t = n & 255;
                                    else break;
                                } else if (!o) break;
                                Ai(a, t, e) | 0;
                            }
                        } while (0);
                        m = u;
                        return;
                    }
                    function Gi(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            T = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            m = 0,
                            h = 0,
                            N = 0,
                            C = 0,
                            I = 0,
                            p = 0,
                            w = 0,
                            b = 0,
                            O = 0,
                            P = 0,
                            v = 0,
                            B = 0,
                            L = 0,
                            k = 0,
                            F = 0,
                            g = 0,
                            U = 0,
                            D = 0,
                            y = 0;
                        do {
                            if (e >>> 0 < 245) {
                                T = e >>> 0 < 11 ? 16 : (e + 11) & -8;
                                e = T >>> 3;
                                u = E[147] | 0;
                                i = u >>> e;
                                if (i & 3) {
                                    e = (((i & 1) ^ 1) + e) | 0;
                                    n = e << 1;
                                    i = (628 + (n << 2)) | 0;
                                    n = (628 + ((n + 2) << 2)) | 0;
                                    t = E[n >> 2] | 0;
                                    o = (t + 8) | 0;
                                    a = E[o >> 2] | 0;
                                    do {
                                        if ((i | 0) != (a | 0)) {
                                            if (a >>> 0 < (E[151] | 0) >>> 0)
                                                Pe();
                                            r = (a + 12) | 0;
                                            if ((E[r >> 2] | 0) == (t | 0)) {
                                                E[r >> 2] = i;
                                                E[n >> 2] = a;
                                                break;
                                            } else Pe();
                                        } else E[147] = u & ~(1 << e);
                                    } while (0);
                                    y = e << 3;
                                    E[(t + 4) >> 2] = y | 3;
                                    y = (t + (y | 4)) | 0;
                                    E[y >> 2] = E[y >> 2] | 1;
                                    y = o;
                                    return y | 0;
                                }
                                a = E[149] | 0;
                                if (T >>> 0 > a >>> 0) {
                                    if (i) {
                                        n = 2 << e;
                                        n = (i << e) & (n | (0 - n));
                                        n = ((n & (0 - n)) + -1) | 0;
                                        s = (n >>> 12) & 16;
                                        n = n >>> s;
                                        t = (n >>> 5) & 8;
                                        n = n >>> t;
                                        o = (n >>> 2) & 4;
                                        n = n >>> o;
                                        i = (n >>> 1) & 2;
                                        n = n >>> i;
                                        e = (n >>> 1) & 1;
                                        e =
                                            ((t | s | o | i | e) + (n >>> e)) |
                                            0;
                                        n = e << 1;
                                        i = (628 + (n << 2)) | 0;
                                        n = (628 + ((n + 2) << 2)) | 0;
                                        o = E[n >> 2] | 0;
                                        s = (o + 8) | 0;
                                        t = E[s >> 2] | 0;
                                        do {
                                            if ((i | 0) != (t | 0)) {
                                                if (
                                                    t >>> 0 <
                                                    (E[151] | 0) >>> 0
                                                )
                                                    Pe();
                                                r = (t + 12) | 0;
                                                if (
                                                    (E[r >> 2] | 0) ==
                                                    (o | 0)
                                                ) {
                                                    E[r >> 2] = i;
                                                    E[n >> 2] = t;
                                                    l = E[149] | 0;
                                                    break;
                                                } else Pe();
                                            } else {
                                                E[147] = u & ~(1 << e);
                                                l = a;
                                            }
                                        } while (0);
                                        y = e << 3;
                                        a = (y - T) | 0;
                                        E[(o + 4) >> 2] = T | 3;
                                        u = (o + T) | 0;
                                        E[(o + (T | 4)) >> 2] = a | 1;
                                        E[(o + y) >> 2] = a;
                                        if (l) {
                                            t = E[152] | 0;
                                            i = l >>> 3;
                                            r = i << 1;
                                            n = (628 + (r << 2)) | 0;
                                            e = E[147] | 0;
                                            i = 1 << i;
                                            if (e & i) {
                                                e = (628 + ((r + 2) << 2)) | 0;
                                                r = E[e >> 2] | 0;
                                                if (
                                                    r >>> 0 <
                                                    (E[151] | 0) >>> 0
                                                )
                                                    Pe();
                                                else {
                                                    f = e;
                                                    _ = r;
                                                }
                                            } else {
                                                E[147] = e | i;
                                                f = (628 + ((r + 2) << 2)) | 0;
                                                _ = n;
                                            }
                                            E[f >> 2] = t;
                                            E[(_ + 12) >> 2] = t;
                                            E[(t + 8) >> 2] = _;
                                            E[(t + 12) >> 2] = n;
                                        }
                                        E[149] = a;
                                        E[152] = u;
                                        y = s;
                                        return y | 0;
                                    }
                                    e = E[148] | 0;
                                    if (e) {
                                        i = ((e & (0 - e)) + -1) | 0;
                                        D = (i >>> 12) & 16;
                                        i = i >>> D;
                                        U = (i >>> 5) & 8;
                                        i = i >>> U;
                                        y = (i >>> 2) & 4;
                                        i = i >>> y;
                                        e = (i >>> 1) & 2;
                                        i = i >>> e;
                                        n = (i >>> 1) & 1;
                                        n =
                                            E[
                                                (892 +
                                                    (((U | D | y | e | n) +
                                                        (i >>> n)) <<
                                                        2)) >>
                                                    2
                                            ] | 0;
                                        i = ((E[(n + 4) >> 2] & -8) - T) | 0;
                                        e = n;
                                        while (1) {
                                            r = E[(e + 16) >> 2] | 0;
                                            if (!r) {
                                                r = E[(e + 20) >> 2] | 0;
                                                if (!r) {
                                                    s = i;
                                                    break;
                                                }
                                            }
                                            e =
                                                ((E[(r + 4) >> 2] & -8) - T) |
                                                0;
                                            y = e >>> 0 < i >>> 0;
                                            i = y ? e : i;
                                            e = r;
                                            n = y ? r : n;
                                        }
                                        o = E[151] | 0;
                                        if (n >>> 0 < o >>> 0) Pe();
                                        u = (n + T) | 0;
                                        if (n >>> 0 >= u >>> 0) Pe();
                                        a = E[(n + 24) >> 2] | 0;
                                        i = E[(n + 12) >> 2] | 0;
                                        do {
                                            if ((i | 0) == (n | 0)) {
                                                e = (n + 20) | 0;
                                                r = E[e >> 2] | 0;
                                                if (!r) {
                                                    e = (n + 16) | 0;
                                                    r = E[e >> 2] | 0;
                                                    if (!r) {
                                                        c = 0;
                                                        break;
                                                    }
                                                }
                                                while (1) {
                                                    i = (r + 20) | 0;
                                                    t = E[i >> 2] | 0;
                                                    if (t) {
                                                        r = t;
                                                        e = i;
                                                        continue;
                                                    }
                                                    i = (r + 16) | 0;
                                                    t = E[i >> 2] | 0;
                                                    if (!t) break;
                                                    else {
                                                        r = t;
                                                        e = i;
                                                    }
                                                }
                                                if (e >>> 0 < o >>> 0) Pe();
                                                else {
                                                    E[e >> 2] = 0;
                                                    c = r;
                                                    break;
                                                }
                                            } else {
                                                t = E[(n + 8) >> 2] | 0;
                                                if (t >>> 0 < o >>> 0) Pe();
                                                r = (t + 12) | 0;
                                                if ((E[r >> 2] | 0) != (n | 0))
                                                    Pe();
                                                e = (i + 8) | 0;
                                                if (
                                                    (E[e >> 2] | 0) ==
                                                    (n | 0)
                                                ) {
                                                    E[r >> 2] = i;
                                                    E[e >> 2] = t;
                                                    c = i;
                                                    break;
                                                } else Pe();
                                            }
                                        } while (0);
                                        do {
                                            if (a) {
                                                r = E[(n + 28) >> 2] | 0;
                                                e = (892 + (r << 2)) | 0;
                                                if (
                                                    (n | 0) ==
                                                    (E[e >> 2] | 0)
                                                ) {
                                                    E[e >> 2] = c;
                                                    if (!c) {
                                                        E[148] =
                                                            E[148] & ~(1 << r);
                                                        break;
                                                    }
                                                } else {
                                                    if (
                                                        a >>> 0 <
                                                        (E[151] | 0) >>> 0
                                                    )
                                                        Pe();
                                                    r = (a + 16) | 0;
                                                    if (
                                                        (E[r >> 2] | 0) ==
                                                        (n | 0)
                                                    )
                                                        E[r >> 2] = c;
                                                    else E[(a + 20) >> 2] = c;
                                                    if (!c) break;
                                                }
                                                e = E[151] | 0;
                                                if (c >>> 0 < e >>> 0) Pe();
                                                E[(c + 24) >> 2] = a;
                                                r = E[(n + 16) >> 2] | 0;
                                                do {
                                                    if (r)
                                                        if (r >>> 0 < e >>> 0)
                                                            Pe();
                                                        else {
                                                            E[(c + 16) >> 2] =
                                                                r;
                                                            E[(r + 24) >> 2] =
                                                                c;
                                                            break;
                                                        }
                                                } while (0);
                                                r = E[(n + 20) >> 2] | 0;
                                                if (r)
                                                    if (
                                                        r >>> 0 <
                                                        (E[151] | 0) >>> 0
                                                    )
                                                        Pe();
                                                    else {
                                                        E[(c + 20) >> 2] = r;
                                                        E[(r + 24) >> 2] = c;
                                                        break;
                                                    }
                                            }
                                        } while (0);
                                        if (s >>> 0 < 16) {
                                            y = (s + T) | 0;
                                            E[(n + 4) >> 2] = y | 3;
                                            y = (n + (y + 4)) | 0;
                                            E[y >> 2] = E[y >> 2] | 1;
                                        } else {
                                            E[(n + 4) >> 2] = T | 3;
                                            E[(n + (T | 4)) >> 2] = s | 1;
                                            E[(n + (s + T)) >> 2] = s;
                                            r = E[149] | 0;
                                            if (r) {
                                                o = E[152] | 0;
                                                i = r >>> 3;
                                                r = i << 1;
                                                t = (628 + (r << 2)) | 0;
                                                e = E[147] | 0;
                                                i = 1 << i;
                                                if (e & i) {
                                                    r =
                                                        (628 + ((r + 2) << 2)) |
                                                        0;
                                                    e = E[r >> 2] | 0;
                                                    if (
                                                        e >>> 0 <
                                                        (E[151] | 0) >>> 0
                                                    )
                                                        Pe();
                                                    else {
                                                        d = r;
                                                        A = e;
                                                    }
                                                } else {
                                                    E[147] = e | i;
                                                    d =
                                                        (628 + ((r + 2) << 2)) |
                                                        0;
                                                    A = t;
                                                }
                                                E[d >> 2] = o;
                                                E[(A + 12) >> 2] = o;
                                                E[(o + 8) >> 2] = A;
                                                E[(o + 12) >> 2] = t;
                                            }
                                            E[149] = s;
                                            E[152] = u;
                                        }
                                        y = (n + 8) | 0;
                                        return y | 0;
                                    } else A = T;
                                } else A = T;
                            } else if (e >>> 0 <= 4294967231) {
                                e = (e + 11) | 0;
                                _ = e & -8;
                                f = E[148] | 0;
                                if (f) {
                                    i = (0 - _) | 0;
                                    e = e >>> 8;
                                    if (e)
                                        if (_ >>> 0 > 16777215) l = 31;
                                        else {
                                            A =
                                                (((e + 1048320) | 0) >>> 16) &
                                                8;
                                            h = e << A;
                                            d = (((h + 520192) | 0) >>> 16) & 4;
                                            h = h << d;
                                            l = (((h + 245760) | 0) >>> 16) & 2;
                                            l =
                                                (14 -
                                                    (d | A | l) +
                                                    ((h << l) >>> 15)) |
                                                0;
                                            l =
                                                ((_ >>> ((l + 7) | 0)) & 1) |
                                                (l << 1);
                                        }
                                    else l = 0;
                                    e = E[(892 + (l << 2)) >> 2] | 0;
                                    e: do {
                                        if (!e) {
                                            t = 0;
                                            e = 0;
                                            h = 86;
                                        } else {
                                            a = i;
                                            t = 0;
                                            u =
                                                _ <<
                                                ((l | 0) == 31
                                                    ? 0
                                                    : (25 - (l >>> 1)) | 0);
                                            s = e;
                                            e = 0;
                                            while (1) {
                                                o = E[(s + 4) >> 2] & -8;
                                                i = (o - _) | 0;
                                                if (i >>> 0 < a >>> 0)
                                                    if ((o | 0) == (_ | 0)) {
                                                        o = s;
                                                        e = s;
                                                        h = 90;
                                                        break e;
                                                    } else e = s;
                                                else i = a;
                                                h = E[(s + 20) >> 2] | 0;
                                                s =
                                                    E[
                                                        (s +
                                                            16 +
                                                            ((u >>> 31) <<
                                                                2)) >>
                                                            2
                                                    ] | 0;
                                                t =
                                                    ((h | 0) == 0) |
                                                    ((h | 0) == (s | 0))
                                                        ? t
                                                        : h;
                                                if (!s) {
                                                    h = 86;
                                                    break;
                                                } else {
                                                    a = i;
                                                    u = u << 1;
                                                }
                                            }
                                        }
                                    } while (0);
                                    if ((h | 0) == 86) {
                                        if (((t | 0) == 0) & ((e | 0) == 0)) {
                                            e = 2 << l;
                                            e = f & (e | (0 - e));
                                            if (!e) {
                                                A = _;
                                                break;
                                            }
                                            e = ((e & (0 - e)) + -1) | 0;
                                            c = (e >>> 12) & 16;
                                            e = e >>> c;
                                            f = (e >>> 5) & 8;
                                            e = e >>> f;
                                            d = (e >>> 2) & 4;
                                            e = e >>> d;
                                            A = (e >>> 1) & 2;
                                            e = e >>> A;
                                            t = (e >>> 1) & 1;
                                            t =
                                                E[
                                                    (892 +
                                                        (((f | c | d | A | t) +
                                                            (e >>> t)) <<
                                                            2)) >>
                                                        2
                                                ] | 0;
                                            e = 0;
                                        }
                                        if (!t) {
                                            u = i;
                                            s = e;
                                        } else {
                                            o = t;
                                            h = 90;
                                        }
                                    }
                                    if ((h | 0) == 90)
                                        while (1) {
                                            h = 0;
                                            A =
                                                ((E[(o + 4) >> 2] & -8) - _) |
                                                0;
                                            t = A >>> 0 < i >>> 0;
                                            i = t ? A : i;
                                            e = t ? o : e;
                                            t = E[(o + 16) >> 2] | 0;
                                            if (t) {
                                                o = t;
                                                h = 90;
                                                continue;
                                            }
                                            o = E[(o + 20) >> 2] | 0;
                                            if (!o) {
                                                u = i;
                                                s = e;
                                                break;
                                            } else h = 90;
                                        }
                                    if (
                                        (s | 0) != 0
                                            ? u >>> 0 <
                                              (((E[149] | 0) - _) | 0) >>> 0
                                            : 0
                                    ) {
                                        t = E[151] | 0;
                                        if (s >>> 0 < t >>> 0) Pe();
                                        a = (s + _) | 0;
                                        if (s >>> 0 >= a >>> 0) Pe();
                                        o = E[(s + 24) >> 2] | 0;
                                        i = E[(s + 12) >> 2] | 0;
                                        do {
                                            if ((i | 0) == (s | 0)) {
                                                e = (s + 20) | 0;
                                                r = E[e >> 2] | 0;
                                                if (!r) {
                                                    e = (s + 16) | 0;
                                                    r = E[e >> 2] | 0;
                                                    if (!r) {
                                                        T = 0;
                                                        break;
                                                    }
                                                }
                                                while (1) {
                                                    i = (r + 20) | 0;
                                                    n = E[i >> 2] | 0;
                                                    if (n) {
                                                        r = n;
                                                        e = i;
                                                        continue;
                                                    }
                                                    i = (r + 16) | 0;
                                                    n = E[i >> 2] | 0;
                                                    if (!n) break;
                                                    else {
                                                        r = n;
                                                        e = i;
                                                    }
                                                }
                                                if (e >>> 0 < t >>> 0) Pe();
                                                else {
                                                    E[e >> 2] = 0;
                                                    T = r;
                                                    break;
                                                }
                                            } else {
                                                n = E[(s + 8) >> 2] | 0;
                                                if (n >>> 0 < t >>> 0) Pe();
                                                r = (n + 12) | 0;
                                                if ((E[r >> 2] | 0) != (s | 0))
                                                    Pe();
                                                e = (i + 8) | 0;
                                                if (
                                                    (E[e >> 2] | 0) ==
                                                    (s | 0)
                                                ) {
                                                    E[r >> 2] = i;
                                                    E[e >> 2] = n;
                                                    T = i;
                                                    break;
                                                } else Pe();
                                            }
                                        } while (0);
                                        do {
                                            if (o) {
                                                r = E[(s + 28) >> 2] | 0;
                                                e = (892 + (r << 2)) | 0;
                                                if (
                                                    (s | 0) ==
                                                    (E[e >> 2] | 0)
                                                ) {
                                                    E[e >> 2] = T;
                                                    if (!T) {
                                                        E[148] =
                                                            E[148] & ~(1 << r);
                                                        break;
                                                    }
                                                } else {
                                                    if (
                                                        o >>> 0 <
                                                        (E[151] | 0) >>> 0
                                                    )
                                                        Pe();
                                                    r = (o + 16) | 0;
                                                    if (
                                                        (E[r >> 2] | 0) ==
                                                        (s | 0)
                                                    )
                                                        E[r >> 2] = T;
                                                    else E[(o + 20) >> 2] = T;
                                                    if (!T) break;
                                                }
                                                e = E[151] | 0;
                                                if (T >>> 0 < e >>> 0) Pe();
                                                E[(T + 24) >> 2] = o;
                                                r = E[(s + 16) >> 2] | 0;
                                                do {
                                                    if (r)
                                                        if (r >>> 0 < e >>> 0)
                                                            Pe();
                                                        else {
                                                            E[(T + 16) >> 2] =
                                                                r;
                                                            E[(r + 24) >> 2] =
                                                                T;
                                                            break;
                                                        }
                                                } while (0);
                                                r = E[(s + 20) >> 2] | 0;
                                                if (r)
                                                    if (
                                                        r >>> 0 <
                                                        (E[151] | 0) >>> 0
                                                    )
                                                        Pe();
                                                    else {
                                                        E[(T + 20) >> 2] = r;
                                                        E[(r + 24) >> 2] = T;
                                                        break;
                                                    }
                                            }
                                        } while (0);
                                        e: do {
                                            if (u >>> 0 >= 16) {
                                                E[(s + 4) >> 2] = _ | 3;
                                                E[(s + (_ | 4)) >> 2] = u | 1;
                                                E[(s + (u + _)) >> 2] = u;
                                                r = u >>> 3;
                                                if (u >>> 0 < 256) {
                                                    e = r << 1;
                                                    n = (628 + (e << 2)) | 0;
                                                    i = E[147] | 0;
                                                    r = 1 << r;
                                                    if (i & r) {
                                                        r =
                                                            (628 +
                                                                ((e + 2) <<
                                                                    2)) |
                                                            0;
                                                        e = E[r >> 2] | 0;
                                                        if (
                                                            e >>> 0 <
                                                            (E[151] | 0) >>> 0
                                                        )
                                                            Pe();
                                                        else {
                                                            M = r;
                                                            S = e;
                                                        }
                                                    } else {
                                                        E[147] = i | r;
                                                        M =
                                                            (628 +
                                                                ((e + 2) <<
                                                                    2)) |
                                                            0;
                                                        S = n;
                                                    }
                                                    E[M >> 2] = a;
                                                    E[(S + 12) >> 2] = a;
                                                    E[(s + (_ + 8)) >> 2] = S;
                                                    E[(s + (_ + 12)) >> 2] = n;
                                                    break;
                                                }
                                                r = u >>> 8;
                                                if (r)
                                                    if (u >>> 0 > 16777215)
                                                        n = 31;
                                                    else {
                                                        D =
                                                            (((r + 1048320) |
                                                                0) >>>
                                                                16) &
                                                            8;
                                                        y = r << D;
                                                        U =
                                                            (((y + 520192) |
                                                                0) >>>
                                                                16) &
                                                            4;
                                                        y = y << U;
                                                        n =
                                                            (((y + 245760) |
                                                                0) >>>
                                                                16) &
                                                            2;
                                                        n =
                                                            (14 -
                                                                (U | D | n) +
                                                                ((y << n) >>>
                                                                    15)) |
                                                            0;
                                                        n =
                                                            ((u >>>
                                                                ((n + 7) | 0)) &
                                                                1) |
                                                            (n << 1);
                                                    }
                                                else n = 0;
                                                r = (892 + (n << 2)) | 0;
                                                E[(s + (_ + 28)) >> 2] = n;
                                                E[(s + (_ + 20)) >> 2] = 0;
                                                E[(s + (_ + 16)) >> 2] = 0;
                                                e = E[148] | 0;
                                                i = 1 << n;
                                                if (!(e & i)) {
                                                    E[148] = e | i;
                                                    E[r >> 2] = a;
                                                    E[(s + (_ + 24)) >> 2] = r;
                                                    E[(s + (_ + 12)) >> 2] = a;
                                                    E[(s + (_ + 8)) >> 2] = a;
                                                    break;
                                                }
                                                r = E[r >> 2] | 0;
                                                r: do {
                                                    if (
                                                        ((E[(r + 4) >> 2] &
                                                            -8) |
                                                            0) !=
                                                        (u | 0)
                                                    ) {
                                                        n =
                                                            u <<
                                                            ((n | 0) == 31
                                                                ? 0
                                                                : (25 -
                                                                      (n >>>
                                                                          1)) |
                                                                  0);
                                                        while (1) {
                                                            e =
                                                                (r +
                                                                    16 +
                                                                    ((n >>>
                                                                        31) <<
                                                                        2)) |
                                                                0;
                                                            i = E[e >> 2] | 0;
                                                            if (!i) break;
                                                            if (
                                                                ((E[
                                                                    (i + 4) >> 2
                                                                ] &
                                                                    -8) |
                                                                    0) ==
                                                                (u | 0)
                                                            ) {
                                                                I = i;
                                                                break r;
                                                            } else {
                                                                n = n << 1;
                                                                r = i;
                                                            }
                                                        }
                                                        if (
                                                            e >>> 0 <
                                                            (E[151] | 0) >>> 0
                                                        )
                                                            Pe();
                                                        else {
                                                            E[e >> 2] = a;
                                                            E[
                                                                (s +
                                                                    (_ + 24)) >>
                                                                    2
                                                            ] = r;
                                                            E[
                                                                (s +
                                                                    (_ + 12)) >>
                                                                    2
                                                            ] = a;
                                                            E[
                                                                (s + (_ + 8)) >>
                                                                    2
                                                            ] = a;
                                                            break e;
                                                        }
                                                    } else I = r;
                                                } while (0);
                                                r = (I + 8) | 0;
                                                e = E[r >> 2] | 0;
                                                y = E[151] | 0;
                                                if (
                                                    (e >>> 0 >= y >>> 0) &
                                                    (I >>> 0 >= y >>> 0)
                                                ) {
                                                    E[(e + 12) >> 2] = a;
                                                    E[r >> 2] = a;
                                                    E[(s + (_ + 8)) >> 2] = e;
                                                    E[(s + (_ + 12)) >> 2] = I;
                                                    E[(s + (_ + 24)) >> 2] = 0;
                                                    break;
                                                } else Pe();
                                            } else {
                                                y = (u + _) | 0;
                                                E[(s + 4) >> 2] = y | 3;
                                                y = (s + (y + 4)) | 0;
                                                E[y >> 2] = E[y >> 2] | 1;
                                            }
                                        } while (0);
                                        y = (s + 8) | 0;
                                        return y | 0;
                                    } else A = _;
                                } else A = _;
                            } else A = -1;
                        } while (0);
                        i = E[149] | 0;
                        if (i >>> 0 >= A >>> 0) {
                            r = (i - A) | 0;
                            e = E[152] | 0;
                            if (r >>> 0 > 15) {
                                E[152] = e + A;
                                E[149] = r;
                                E[(e + (A + 4)) >> 2] = r | 1;
                                E[(e + i) >> 2] = r;
                                E[(e + 4) >> 2] = A | 3;
                            } else {
                                E[149] = 0;
                                E[152] = 0;
                                E[(e + 4) >> 2] = i | 3;
                                y = (e + (i + 4)) | 0;
                                E[y >> 2] = E[y >> 2] | 1;
                            }
                            y = (e + 8) | 0;
                            return y | 0;
                        }
                        e = E[150] | 0;
                        if (e >>> 0 > A >>> 0) {
                            D = (e - A) | 0;
                            E[150] = D;
                            y = E[153] | 0;
                            E[153] = y + A;
                            E[(y + (A + 4)) >> 2] = D | 1;
                            E[(y + 4) >> 2] = A | 3;
                            y = (y + 8) | 0;
                            return y | 0;
                        }
                        do {
                            if (!(E[265] | 0)) {
                                e = Xe(30) | 0;
                                if (!((e + -1) & e)) {
                                    E[267] = e;
                                    E[266] = e;
                                    E[268] = -1;
                                    E[269] = -1;
                                    E[270] = 0;
                                    E[258] = 0;
                                    I = ((ke(0) | 0) & -16) ^ 1431655768;
                                    E[265] = I;
                                    break;
                                } else Pe();
                            }
                        } while (0);
                        s = (A + 48) | 0;
                        u = E[267] | 0;
                        l = (A + 47) | 0;
                        a = (u + l) | 0;
                        u = (0 - u) | 0;
                        f = a & u;
                        if (f >>> 0 <= A >>> 0) {
                            y = 0;
                            return y | 0;
                        }
                        e = E[257] | 0;
                        if (
                            (e | 0) != 0
                                ? ((S = E[255] | 0),
                                  (I = (S + f) | 0),
                                  (I >>> 0 <= S >>> 0) | (I >>> 0 > e >>> 0))
                                : 0
                        ) {
                            y = 0;
                            return y | 0;
                        }
                        e: do {
                            if (!(E[258] & 4)) {
                                e = E[153] | 0;
                                r: do {
                                    if (e) {
                                        t = 1036;
                                        while (1) {
                                            i = E[t >> 2] | 0;
                                            if (
                                                i >>> 0 <= e >>> 0
                                                    ? ((R = (t + 4) | 0),
                                                      ((i + (E[R >> 2] | 0)) |
                                                          0) >>>
                                                          0 >
                                                          e >>> 0)
                                                    : 0
                                            ) {
                                                o = t;
                                                e = R;
                                                break;
                                            }
                                            t = E[(t + 8) >> 2] | 0;
                                            if (!t) {
                                                h = 174;
                                                break r;
                                            }
                                        }
                                        i = (a - (E[150] | 0)) & u;
                                        if (i >>> 0 < 2147483647) {
                                            t = Le(i | 0) | 0;
                                            I =
                                                (t | 0) ==
                                                (((E[o >> 2] | 0) +
                                                    (E[e >> 2] | 0)) |
                                                    0);
                                            e = I ? i : 0;
                                            if (I) {
                                                if ((t | 0) != (-1 | 0)) {
                                                    N = t;
                                                    d = e;
                                                    h = 194;
                                                    break e;
                                                }
                                            } else h = 184;
                                        } else e = 0;
                                    } else h = 174;
                                } while (0);
                                do {
                                    if ((h | 0) == 174) {
                                        o = Le(0) | 0;
                                        if ((o | 0) != (-1 | 0)) {
                                            e = o;
                                            i = E[266] | 0;
                                            t = (i + -1) | 0;
                                            if (!(t & e)) i = f;
                                            else
                                                i =
                                                    (f -
                                                        e +
                                                        ((t + e) & (0 - i))) |
                                                    0;
                                            e = E[255] | 0;
                                            t = (e + i) | 0;
                                            if (
                                                (i >>> 0 > A >>> 0) &
                                                (i >>> 0 < 2147483647)
                                            ) {
                                                I = E[257] | 0;
                                                if (
                                                    (I | 0) != 0
                                                        ? (t >>> 0 <= e >>> 0) |
                                                          (t >>> 0 > I >>> 0)
                                                        : 0
                                                ) {
                                                    e = 0;
                                                    break;
                                                }
                                                t = Le(i | 0) | 0;
                                                I = (t | 0) == (o | 0);
                                                e = I ? i : 0;
                                                if (I) {
                                                    N = o;
                                                    d = e;
                                                    h = 194;
                                                    break e;
                                                } else h = 184;
                                            } else e = 0;
                                        } else e = 0;
                                    }
                                } while (0);
                                r: do {
                                    if ((h | 0) == 184) {
                                        o = (0 - i) | 0;
                                        do {
                                            if (
                                                (s >>> 0 > i >>> 0) &
                                                ((i >>> 0 < 2147483647) &
                                                    ((t | 0) != (-1 | 0)))
                                                    ? ((m = E[267] | 0),
                                                      (m =
                                                          (l - i + m) &
                                                          (0 - m)),
                                                      m >>> 0 < 2147483647)
                                                    : 0
                                            )
                                                if (
                                                    (Le(m | 0) | 0) ==
                                                    (-1 | 0)
                                                ) {
                                                    Le(o | 0) | 0;
                                                    break r;
                                                } else {
                                                    i = (m + i) | 0;
                                                    break;
                                                }
                                        } while (0);
                                        if ((t | 0) != (-1 | 0)) {
                                            N = t;
                                            d = i;
                                            h = 194;
                                            break e;
                                        }
                                    }
                                } while (0);
                                E[258] = E[258] | 4;
                                h = 191;
                            } else {
                                e = 0;
                                h = 191;
                            }
                        } while (0);
                        if (
                            (
                                ((h | 0) == 191 ? f >>> 0 < 2147483647 : 0)
                                    ? ((N = Le(f | 0) | 0),
                                      (C = Le(0) | 0),
                                      (N >>> 0 < C >>> 0) &
                                          (((N | 0) != (-1 | 0)) &
                                              ((C | 0) != (-1 | 0))))
                                    : 0
                            )
                                ? ((p = (C - N) | 0),
                                  (w = p >>> 0 > ((A + 40) | 0) >>> 0),
                                  w)
                                : 0
                        ) {
                            d = w ? p : e;
                            h = 194;
                        }
                        if ((h | 0) == 194) {
                            e = ((E[255] | 0) + d) | 0;
                            E[255] = e;
                            if (e >>> 0 > (E[256] | 0) >>> 0) E[256] = e;
                            a = E[153] | 0;
                            e: do {
                                if (a) {
                                    o = 1036;
                                    do {
                                        e = E[o >> 2] | 0;
                                        i = (o + 4) | 0;
                                        t = E[i >> 2] | 0;
                                        if ((N | 0) == ((e + t) | 0)) {
                                            b = e;
                                            O = i;
                                            P = t;
                                            v = o;
                                            h = 204;
                                            break;
                                        }
                                        o = E[(o + 8) >> 2] | 0;
                                    } while ((o | 0) != 0);
                                    if (
                                        (
                                            (h | 0) == 204
                                                ? ((E[(v + 12) >> 2] & 8) |
                                                      0) ==
                                                  0
                                                : 0
                                        )
                                            ? (a >>> 0 < N >>> 0) &
                                              (a >>> 0 >= b >>> 0)
                                            : 0
                                    ) {
                                        E[O >> 2] = P + d;
                                        y = ((E[150] | 0) + d) | 0;
                                        D = (a + 8) | 0;
                                        D =
                                            ((D & 7) | 0) == 0
                                                ? 0
                                                : (0 - D) & 7;
                                        U = (y - D) | 0;
                                        E[153] = a + D;
                                        E[150] = U;
                                        E[(a + (D + 4)) >> 2] = U | 1;
                                        E[(a + (y + 4)) >> 2] = 40;
                                        E[154] = E[269];
                                        break;
                                    }
                                    e = E[151] | 0;
                                    if (N >>> 0 < e >>> 0) {
                                        E[151] = N;
                                        e = N;
                                    }
                                    i = (N + d) | 0;
                                    o = 1036;
                                    while (1) {
                                        if ((E[o >> 2] | 0) == (i | 0)) {
                                            t = o;
                                            i = o;
                                            h = 212;
                                            break;
                                        }
                                        o = E[(o + 8) >> 2] | 0;
                                        if (!o) {
                                            i = 1036;
                                            break;
                                        }
                                    }
                                    if ((h | 0) == 212)
                                        if (!(E[(i + 12) >> 2] & 8)) {
                                            E[t >> 2] = N;
                                            c = (i + 4) | 0;
                                            E[c >> 2] = (E[c >> 2] | 0) + d;
                                            c = (N + 8) | 0;
                                            c =
                                                ((c & 7) | 0) == 0
                                                    ? 0
                                                    : (0 - c) & 7;
                                            l = (N + (d + 8)) | 0;
                                            l =
                                                ((l & 7) | 0) == 0
                                                    ? 0
                                                    : (0 - l) & 7;
                                            r = (N + (l + d)) | 0;
                                            _ = (c + A) | 0;
                                            T = (N + _) | 0;
                                            f = (r - (N + c) - A) | 0;
                                            E[(N + (c + 4)) >> 2] = A | 3;
                                            r: do {
                                                if ((r | 0) != (a | 0)) {
                                                    if (
                                                        (r | 0) ==
                                                        (E[152] | 0)
                                                    ) {
                                                        y =
                                                            ((E[149] | 0) + f) |
                                                            0;
                                                        E[149] = y;
                                                        E[152] = T;
                                                        E[(N + (_ + 4)) >> 2] =
                                                            y | 1;
                                                        E[(N + (y + _)) >> 2] =
                                                            y;
                                                        break;
                                                    }
                                                    u = (d + 4) | 0;
                                                    i =
                                                        E[(N + (u + l)) >> 2] |
                                                        0;
                                                    if (((i & 3) | 0) == 1) {
                                                        s = i & -8;
                                                        o = i >>> 3;
                                                        i: do {
                                                            if (
                                                                i >>> 0 >=
                                                                256
                                                            ) {
                                                                a =
                                                                    E[
                                                                        (N +
                                                                            ((l |
                                                                                24) +
                                                                                d)) >>
                                                                            2
                                                                    ] | 0;
                                                                n =
                                                                    E[
                                                                        (N +
                                                                            (d +
                                                                                12 +
                                                                                l)) >>
                                                                            2
                                                                    ] | 0;
                                                                do {
                                                                    if (
                                                                        (n |
                                                                            0) ==
                                                                        (r | 0)
                                                                    ) {
                                                                        t =
                                                                            l |
                                                                            16;
                                                                        n =
                                                                            (N +
                                                                                (u +
                                                                                    t)) |
                                                                            0;
                                                                        i =
                                                                            E[
                                                                                n >>
                                                                                    2
                                                                            ] |
                                                                            0;
                                                                        if (
                                                                            !i
                                                                        ) {
                                                                            n =
                                                                                (N +
                                                                                    (t +
                                                                                        d)) |
                                                                                0;
                                                                            i =
                                                                                E[
                                                                                    n >>
                                                                                        2
                                                                                ] |
                                                                                0;
                                                                            if (
                                                                                !i
                                                                            ) {
                                                                                g = 0;
                                                                                break;
                                                                            }
                                                                        }
                                                                        while (
                                                                            1
                                                                        ) {
                                                                            t =
                                                                                (i +
                                                                                    20) |
                                                                                0;
                                                                            o =
                                                                                E[
                                                                                    t >>
                                                                                        2
                                                                                ] |
                                                                                0;
                                                                            if (
                                                                                o
                                                                            ) {
                                                                                i =
                                                                                    o;
                                                                                n =
                                                                                    t;
                                                                                continue;
                                                                            }
                                                                            t =
                                                                                (i +
                                                                                    16) |
                                                                                0;
                                                                            o =
                                                                                E[
                                                                                    t >>
                                                                                        2
                                                                                ] |
                                                                                0;
                                                                            if (
                                                                                !o
                                                                            )
                                                                                break;
                                                                            else {
                                                                                i =
                                                                                    o;
                                                                                n =
                                                                                    t;
                                                                            }
                                                                        }
                                                                        if (
                                                                            n >>>
                                                                                0 <
                                                                            e >>>
                                                                                0
                                                                        )
                                                                            Pe();
                                                                        else {
                                                                            E[
                                                                                n >>
                                                                                    2
                                                                            ] =
                                                                                0;
                                                                            g =
                                                                                i;
                                                                            break;
                                                                        }
                                                                    } else {
                                                                        t =
                                                                            E[
                                                                                (N +
                                                                                    ((l |
                                                                                        8) +
                                                                                        d)) >>
                                                                                    2
                                                                            ] |
                                                                            0;
                                                                        if (
                                                                            t >>>
                                                                                0 <
                                                                            e >>>
                                                                                0
                                                                        )
                                                                            Pe();
                                                                        e =
                                                                            (t +
                                                                                12) |
                                                                            0;
                                                                        if (
                                                                            (E[
                                                                                e >>
                                                                                    2
                                                                            ] |
                                                                                0) !=
                                                                            (r |
                                                                                0)
                                                                        )
                                                                            Pe();
                                                                        i =
                                                                            (n +
                                                                                8) |
                                                                            0;
                                                                        if (
                                                                            (E[
                                                                                i >>
                                                                                    2
                                                                            ] |
                                                                                0) ==
                                                                            (r |
                                                                                0)
                                                                        ) {
                                                                            E[
                                                                                e >>
                                                                                    2
                                                                            ] =
                                                                                n;
                                                                            E[
                                                                                i >>
                                                                                    2
                                                                            ] =
                                                                                t;
                                                                            g =
                                                                                n;
                                                                            break;
                                                                        } else
                                                                            Pe();
                                                                    }
                                                                } while (0);
                                                                if (!a) break;
                                                                e =
                                                                    E[
                                                                        (N +
                                                                            (d +
                                                                                28 +
                                                                                l)) >>
                                                                            2
                                                                    ] | 0;
                                                                i =
                                                                    (892 +
                                                                        (e <<
                                                                            2)) |
                                                                    0;
                                                                do {
                                                                    if (
                                                                        (r |
                                                                            0) !=
                                                                        (E[
                                                                            i >>
                                                                                2
                                                                        ] |
                                                                            0)
                                                                    ) {
                                                                        if (
                                                                            a >>>
                                                                                0 <
                                                                            (E[151] |
                                                                                0) >>>
                                                                                0
                                                                        )
                                                                            Pe();
                                                                        e =
                                                                            (a +
                                                                                16) |
                                                                            0;
                                                                        if (
                                                                            (E[
                                                                                e >>
                                                                                    2
                                                                            ] |
                                                                                0) ==
                                                                            (r |
                                                                                0)
                                                                        )
                                                                            E[
                                                                                e >>
                                                                                    2
                                                                            ] =
                                                                                g;
                                                                        else
                                                                            E[
                                                                                (a +
                                                                                    20) >>
                                                                                    2
                                                                            ] =
                                                                                g;
                                                                        if (!g)
                                                                            break i;
                                                                    } else {
                                                                        E[
                                                                            i >>
                                                                                2
                                                                        ] = g;
                                                                        if (g)
                                                                            break;
                                                                        E[148] =
                                                                            E[148] &
                                                                            ~(
                                                                                1 <<
                                                                                e
                                                                            );
                                                                        break i;
                                                                    }
                                                                } while (0);
                                                                i = E[151] | 0;
                                                                if (
                                                                    g >>> 0 <
                                                                    i >>> 0
                                                                )
                                                                    Pe();
                                                                E[
                                                                    (g + 24) >>
                                                                        2
                                                                ] = a;
                                                                r = l | 16;
                                                                e =
                                                                    E[
                                                                        (N +
                                                                            (r +
                                                                                d)) >>
                                                                            2
                                                                    ] | 0;
                                                                do {
                                                                    if (e)
                                                                        if (
                                                                            e >>>
                                                                                0 <
                                                                            i >>>
                                                                                0
                                                                        )
                                                                            Pe();
                                                                        else {
                                                                            E[
                                                                                (g +
                                                                                    16) >>
                                                                                    2
                                                                            ] =
                                                                                e;
                                                                            E[
                                                                                (e +
                                                                                    24) >>
                                                                                    2
                                                                            ] =
                                                                                g;
                                                                            break;
                                                                        }
                                                                } while (0);
                                                                r =
                                                                    E[
                                                                        (N +
                                                                            (u +
                                                                                r)) >>
                                                                            2
                                                                    ] | 0;
                                                                if (!r) break;
                                                                if (
                                                                    r >>> 0 <
                                                                    (E[151] |
                                                                        0) >>>
                                                                        0
                                                                )
                                                                    Pe();
                                                                else {
                                                                    E[
                                                                        (g +
                                                                            20) >>
                                                                            2
                                                                    ] = r;
                                                                    E[
                                                                        (r +
                                                                            24) >>
                                                                            2
                                                                    ] = g;
                                                                    break;
                                                                }
                                                            } else {
                                                                n =
                                                                    E[
                                                                        (N +
                                                                            ((l |
                                                                                8) +
                                                                                d)) >>
                                                                            2
                                                                    ] | 0;
                                                                t =
                                                                    E[
                                                                        (N +
                                                                            (d +
                                                                                12 +
                                                                                l)) >>
                                                                            2
                                                                    ] | 0;
                                                                i =
                                                                    (628 +
                                                                        ((o <<
                                                                            1) <<
                                                                            2)) |
                                                                    0;
                                                                do {
                                                                    if (
                                                                        (n |
                                                                            0) !=
                                                                        (i | 0)
                                                                    ) {
                                                                        if (
                                                                            n >>>
                                                                                0 <
                                                                            e >>>
                                                                                0
                                                                        )
                                                                            Pe();
                                                                        if (
                                                                            (E[
                                                                                (n +
                                                                                    12) >>
                                                                                    2
                                                                            ] |
                                                                                0) ==
                                                                            (r |
                                                                                0)
                                                                        )
                                                                            break;
                                                                        Pe();
                                                                    }
                                                                } while (0);
                                                                if (
                                                                    (t | 0) ==
                                                                    (n | 0)
                                                                ) {
                                                                    E[147] =
                                                                        E[147] &
                                                                        ~(
                                                                            1 <<
                                                                            o
                                                                        );
                                                                    break;
                                                                }
                                                                do {
                                                                    if (
                                                                        (t |
                                                                            0) ==
                                                                        (i | 0)
                                                                    )
                                                                        B =
                                                                            (t +
                                                                                8) |
                                                                            0;
                                                                    else {
                                                                        if (
                                                                            t >>>
                                                                                0 <
                                                                            e >>>
                                                                                0
                                                                        )
                                                                            Pe();
                                                                        e =
                                                                            (t +
                                                                                8) |
                                                                            0;
                                                                        if (
                                                                            (E[
                                                                                e >>
                                                                                    2
                                                                            ] |
                                                                                0) ==
                                                                            (r |
                                                                                0)
                                                                        ) {
                                                                            B =
                                                                                e;
                                                                            break;
                                                                        }
                                                                        Pe();
                                                                    }
                                                                } while (0);
                                                                E[
                                                                    (n + 12) >>
                                                                        2
                                                                ] = t;
                                                                E[B >> 2] = n;
                                                            }
                                                        } while (0);
                                                        r =
                                                            (N +
                                                                ((s | l) + d)) |
                                                            0;
                                                        t = (s + f) | 0;
                                                    } else t = f;
                                                    r = (r + 4) | 0;
                                                    E[r >> 2] = E[r >> 2] & -2;
                                                    E[(N + (_ + 4)) >> 2] =
                                                        t | 1;
                                                    E[(N + (t + _)) >> 2] = t;
                                                    r = t >>> 3;
                                                    if (t >>> 0 < 256) {
                                                        e = r << 1;
                                                        n =
                                                            (628 + (e << 2)) |
                                                            0;
                                                        i = E[147] | 0;
                                                        r = 1 << r;
                                                        do {
                                                            if (!(i & r)) {
                                                                E[147] = i | r;
                                                                U =
                                                                    (628 +
                                                                        ((e +
                                                                            2) <<
                                                                            2)) |
                                                                    0;
                                                                D = n;
                                                            } else {
                                                                r =
                                                                    (628 +
                                                                        ((e +
                                                                            2) <<
                                                                            2)) |
                                                                    0;
                                                                e =
                                                                    E[r >> 2] |
                                                                    0;
                                                                if (
                                                                    e >>> 0 >=
                                                                    (E[151] |
                                                                        0) >>>
                                                                        0
                                                                ) {
                                                                    U = r;
                                                                    D = e;
                                                                    break;
                                                                }
                                                                Pe();
                                                            }
                                                        } while (0);
                                                        E[U >> 2] = T;
                                                        E[(D + 12) >> 2] = T;
                                                        E[(N + (_ + 8)) >> 2] =
                                                            D;
                                                        E[(N + (_ + 12)) >> 2] =
                                                            n;
                                                        break;
                                                    }
                                                    r = t >>> 8;
                                                    do {
                                                        if (!r) n = 0;
                                                        else {
                                                            if (
                                                                t >>> 0 >
                                                                16777215
                                                            ) {
                                                                n = 31;
                                                                break;
                                                            }
                                                            U =
                                                                (((r +
                                                                    1048320) |
                                                                    0) >>>
                                                                    16) &
                                                                8;
                                                            D = r << U;
                                                            g =
                                                                (((D + 520192) |
                                                                    0) >>>
                                                                    16) &
                                                                4;
                                                            D = D << g;
                                                            n =
                                                                (((D + 245760) |
                                                                    0) >>>
                                                                    16) &
                                                                2;
                                                            n =
                                                                (14 -
                                                                    (g |
                                                                        U |
                                                                        n) +
                                                                    ((D <<
                                                                        n) >>>
                                                                        15)) |
                                                                0;
                                                            n =
                                                                ((t >>>
                                                                    ((n + 7) |
                                                                        0)) &
                                                                    1) |
                                                                (n << 1);
                                                        }
                                                    } while (0);
                                                    r = (892 + (n << 2)) | 0;
                                                    E[(N + (_ + 28)) >> 2] = n;
                                                    E[(N + (_ + 20)) >> 2] = 0;
                                                    E[(N + (_ + 16)) >> 2] = 0;
                                                    e = E[148] | 0;
                                                    i = 1 << n;
                                                    if (!(e & i)) {
                                                        E[148] = e | i;
                                                        E[r >> 2] = T;
                                                        E[(N + (_ + 24)) >> 2] =
                                                            r;
                                                        E[(N + (_ + 12)) >> 2] =
                                                            T;
                                                        E[(N + (_ + 8)) >> 2] =
                                                            T;
                                                        break;
                                                    }
                                                    r = E[r >> 2] | 0;
                                                    i: do {
                                                        if (
                                                            ((E[(r + 4) >> 2] &
                                                                -8) |
                                                                0) !=
                                                            (t | 0)
                                                        ) {
                                                            n =
                                                                t <<
                                                                ((n | 0) == 31
                                                                    ? 0
                                                                    : (25 -
                                                                          (n >>>
                                                                              1)) |
                                                                      0);
                                                            while (1) {
                                                                e =
                                                                    (r +
                                                                        16 +
                                                                        ((n >>>
                                                                            31) <<
                                                                            2)) |
                                                                    0;
                                                                i =
                                                                    E[e >> 2] |
                                                                    0;
                                                                if (!i) break;
                                                                if (
                                                                    ((E[
                                                                        (i +
                                                                            4) >>
                                                                            2
                                                                    ] &
                                                                        -8) |
                                                                        0) ==
                                                                    (t | 0)
                                                                ) {
                                                                    y = i;
                                                                    break i;
                                                                } else {
                                                                    n = n << 1;
                                                                    r = i;
                                                                }
                                                            }
                                                            if (
                                                                e >>> 0 <
                                                                (E[151] | 0) >>>
                                                                    0
                                                            )
                                                                Pe();
                                                            else {
                                                                E[e >> 2] = T;
                                                                E[
                                                                    (N +
                                                                        (_ +
                                                                            24)) >>
                                                                        2
                                                                ] = r;
                                                                E[
                                                                    (N +
                                                                        (_ +
                                                                            12)) >>
                                                                        2
                                                                ] = T;
                                                                E[
                                                                    (N +
                                                                        (_ +
                                                                            8)) >>
                                                                        2
                                                                ] = T;
                                                                break r;
                                                            }
                                                        } else y = r;
                                                    } while (0);
                                                    r = (y + 8) | 0;
                                                    e = E[r >> 2] | 0;
                                                    D = E[151] | 0;
                                                    if (
                                                        (e >>> 0 >= D >>> 0) &
                                                        (y >>> 0 >= D >>> 0)
                                                    ) {
                                                        E[(e + 12) >> 2] = T;
                                                        E[r >> 2] = T;
                                                        E[(N + (_ + 8)) >> 2] =
                                                            e;
                                                        E[(N + (_ + 12)) >> 2] =
                                                            y;
                                                        E[(N + (_ + 24)) >> 2] =
                                                            0;
                                                        break;
                                                    } else Pe();
                                                } else {
                                                    y = ((E[150] | 0) + f) | 0;
                                                    E[150] = y;
                                                    E[153] = T;
                                                    E[(N + (_ + 4)) >> 2] =
                                                        y | 1;
                                                }
                                            } while (0);
                                            y = (N + (c | 8)) | 0;
                                            return y | 0;
                                        } else i = 1036;
                                    while (1) {
                                        e = E[i >> 2] | 0;
                                        if (
                                            e >>> 0 <= a >>> 0
                                                ? ((r = E[(i + 4) >> 2] | 0),
                                                  (n = (e + r) | 0),
                                                  n >>> 0 > a >>> 0)
                                                : 0
                                        )
                                            break;
                                        i = E[(i + 8) >> 2] | 0;
                                    }
                                    t = (e + (r + -39)) | 0;
                                    e =
                                        (e +
                                            (r +
                                                -47 +
                                                (((t & 7) | 0) == 0
                                                    ? 0
                                                    : (0 - t) & 7))) |
                                        0;
                                    t = (a + 16) | 0;
                                    e = e >>> 0 < t >>> 0 ? a : e;
                                    r = (e + 8) | 0;
                                    i = (N + 8) | 0;
                                    i = ((i & 7) | 0) == 0 ? 0 : (0 - i) & 7;
                                    y = (d + -40 - i) | 0;
                                    E[153] = N + i;
                                    E[150] = y;
                                    E[(N + (i + 4)) >> 2] = y | 1;
                                    E[(N + (d + -36)) >> 2] = 40;
                                    E[154] = E[269];
                                    i = (e + 4) | 0;
                                    E[i >> 2] = 27;
                                    E[r >> 2] = E[259];
                                    E[(r + 4) >> 2] = E[260];
                                    E[(r + 8) >> 2] = E[261];
                                    E[(r + 12) >> 2] = E[262];
                                    E[259] = N;
                                    E[260] = d;
                                    E[262] = 0;
                                    E[261] = r;
                                    r = (e + 28) | 0;
                                    E[r >> 2] = 7;
                                    if (((e + 32) | 0) >>> 0 < n >>> 0)
                                        do {
                                            y = r;
                                            r = (r + 4) | 0;
                                            E[r >> 2] = 7;
                                        } while (((y + 8) | 0) >>> 0 < n >>> 0);
                                    if ((e | 0) != (a | 0)) {
                                        o = (e - a) | 0;
                                        E[i >> 2] = E[i >> 2] & -2;
                                        E[(a + 4) >> 2] = o | 1;
                                        E[e >> 2] = o;
                                        r = o >>> 3;
                                        if (o >>> 0 < 256) {
                                            e = r << 1;
                                            n = (628 + (e << 2)) | 0;
                                            i = E[147] | 0;
                                            r = 1 << r;
                                            if (i & r) {
                                                r = (628 + ((e + 2) << 2)) | 0;
                                                e = E[r >> 2] | 0;
                                                if (
                                                    e >>> 0 <
                                                    (E[151] | 0) >>> 0
                                                )
                                                    Pe();
                                                else {
                                                    L = r;
                                                    k = e;
                                                }
                                            } else {
                                                E[147] = i | r;
                                                L = (628 + ((e + 2) << 2)) | 0;
                                                k = n;
                                            }
                                            E[L >> 2] = a;
                                            E[(k + 12) >> 2] = a;
                                            E[(a + 8) >> 2] = k;
                                            E[(a + 12) >> 2] = n;
                                            break;
                                        }
                                        r = o >>> 8;
                                        if (r)
                                            if (o >>> 0 > 16777215) n = 31;
                                            else {
                                                D =
                                                    (((r + 1048320) | 0) >>>
                                                        16) &
                                                    8;
                                                y = r << D;
                                                U =
                                                    (((y + 520192) | 0) >>>
                                                        16) &
                                                    4;
                                                y = y << U;
                                                n =
                                                    (((y + 245760) | 0) >>>
                                                        16) &
                                                    2;
                                                n =
                                                    (14 -
                                                        (U | D | n) +
                                                        ((y << n) >>> 15)) |
                                                    0;
                                                n =
                                                    ((o >>> ((n + 7) | 0)) &
                                                        1) |
                                                    (n << 1);
                                            }
                                        else n = 0;
                                        i = (892 + (n << 2)) | 0;
                                        E[(a + 28) >> 2] = n;
                                        E[(a + 20) >> 2] = 0;
                                        E[t >> 2] = 0;
                                        r = E[148] | 0;
                                        e = 1 << n;
                                        if (!(r & e)) {
                                            E[148] = r | e;
                                            E[i >> 2] = a;
                                            E[(a + 24) >> 2] = i;
                                            E[(a + 12) >> 2] = a;
                                            E[(a + 8) >> 2] = a;
                                            break;
                                        }
                                        r = E[i >> 2] | 0;
                                        r: do {
                                            if (
                                                ((E[(r + 4) >> 2] & -8) | 0) !=
                                                (o | 0)
                                            ) {
                                                n =
                                                    o <<
                                                    ((n | 0) == 31
                                                        ? 0
                                                        : (25 - (n >>> 1)) | 0);
                                                while (1) {
                                                    e =
                                                        (r +
                                                            16 +
                                                            ((n >>> 31) << 2)) |
                                                        0;
                                                    i = E[e >> 2] | 0;
                                                    if (!i) break;
                                                    if (
                                                        ((E[(i + 4) >> 2] &
                                                            -8) |
                                                            0) ==
                                                        (o | 0)
                                                    ) {
                                                        F = i;
                                                        break r;
                                                    } else {
                                                        n = n << 1;
                                                        r = i;
                                                    }
                                                }
                                                if (
                                                    e >>> 0 <
                                                    (E[151] | 0) >>> 0
                                                )
                                                    Pe();
                                                else {
                                                    E[e >> 2] = a;
                                                    E[(a + 24) >> 2] = r;
                                                    E[(a + 12) >> 2] = a;
                                                    E[(a + 8) >> 2] = a;
                                                    break e;
                                                }
                                            } else F = r;
                                        } while (0);
                                        r = (F + 8) | 0;
                                        e = E[r >> 2] | 0;
                                        y = E[151] | 0;
                                        if (
                                            (e >>> 0 >= y >>> 0) &
                                            (F >>> 0 >= y >>> 0)
                                        ) {
                                            E[(e + 12) >> 2] = a;
                                            E[r >> 2] = a;
                                            E[(a + 8) >> 2] = e;
                                            E[(a + 12) >> 2] = F;
                                            E[(a + 24) >> 2] = 0;
                                            break;
                                        } else Pe();
                                    }
                                } else {
                                    y = E[151] | 0;
                                    if (((y | 0) == 0) | (N >>> 0 < y >>> 0))
                                        E[151] = N;
                                    E[259] = N;
                                    E[260] = d;
                                    E[262] = 0;
                                    E[156] = E[265];
                                    E[155] = -1;
                                    r = 0;
                                    do {
                                        y = r << 1;
                                        D = (628 + (y << 2)) | 0;
                                        E[(628 + ((y + 3) << 2)) >> 2] = D;
                                        E[(628 + ((y + 2) << 2)) >> 2] = D;
                                        r = (r + 1) | 0;
                                    } while ((r | 0) != 32);
                                    y = (N + 8) | 0;
                                    y = ((y & 7) | 0) == 0 ? 0 : (0 - y) & 7;
                                    D = (d + -40 - y) | 0;
                                    E[153] = N + y;
                                    E[150] = D;
                                    E[(N + (y + 4)) >> 2] = D | 1;
                                    E[(N + (d + -36)) >> 2] = 40;
                                    E[154] = E[269];
                                }
                            } while (0);
                            r = E[150] | 0;
                            if (r >>> 0 > A >>> 0) {
                                D = (r - A) | 0;
                                E[150] = D;
                                y = E[153] | 0;
                                E[153] = y + A;
                                E[(y + (A + 4)) >> 2] = D | 1;
                                E[(y + 4) >> 2] = A | 3;
                                y = (y + 8) | 0;
                                return y | 0;
                            }
                        }
                        y = si() | 0;
                        E[y >> 2] = 12;
                        y = 0;
                        return y | 0;
                    }
                    function Hi(e) {
                        e = e | 0;
                        var r = 0,
                            i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            T = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0,
                            m = 0;
                        if (!e) return;
                        r = (e + -8) | 0;
                        u = E[151] | 0;
                        if (r >>> 0 < u >>> 0) Pe();
                        i = E[(e + -4) >> 2] | 0;
                        n = i & 3;
                        if ((n | 0) == 1) Pe();
                        T = i & -8;
                        A = (e + (T + -8)) | 0;
                        do {
                            if (!(i & 1)) {
                                r = E[r >> 2] | 0;
                                if (!n) return;
                                s = (-8 - r) | 0;
                                f = (e + s) | 0;
                                _ = (r + T) | 0;
                                if (f >>> 0 < u >>> 0) Pe();
                                if ((f | 0) == (E[152] | 0)) {
                                    r = (e + (T + -4)) | 0;
                                    i = E[r >> 2] | 0;
                                    if (((i & 3) | 0) != 3) {
                                        m = f;
                                        o = _;
                                        break;
                                    }
                                    E[149] = _;
                                    E[r >> 2] = i & -2;
                                    E[(e + (s + 4)) >> 2] = _ | 1;
                                    E[A >> 2] = _;
                                    return;
                                }
                                t = r >>> 3;
                                if (r >>> 0 < 256) {
                                    n = E[(e + (s + 8)) >> 2] | 0;
                                    i = E[(e + (s + 12)) >> 2] | 0;
                                    r = (628 + ((t << 1) << 2)) | 0;
                                    if ((n | 0) != (r | 0)) {
                                        if (n >>> 0 < u >>> 0) Pe();
                                        if ((E[(n + 12) >> 2] | 0) != (f | 0))
                                            Pe();
                                    }
                                    if ((i | 0) == (n | 0)) {
                                        E[147] = E[147] & ~(1 << t);
                                        m = f;
                                        o = _;
                                        break;
                                    }
                                    if ((i | 0) != (r | 0)) {
                                        if (i >>> 0 < u >>> 0) Pe();
                                        r = (i + 8) | 0;
                                        if ((E[r >> 2] | 0) == (f | 0)) a = r;
                                        else Pe();
                                    } else a = (i + 8) | 0;
                                    E[(n + 12) >> 2] = i;
                                    E[a >> 2] = n;
                                    m = f;
                                    o = _;
                                    break;
                                }
                                a = E[(e + (s + 24)) >> 2] | 0;
                                n = E[(e + (s + 12)) >> 2] | 0;
                                do {
                                    if ((n | 0) == (f | 0)) {
                                        i = (e + (s + 20)) | 0;
                                        r = E[i >> 2] | 0;
                                        if (!r) {
                                            i = (e + (s + 16)) | 0;
                                            r = E[i >> 2] | 0;
                                            if (!r) {
                                                l = 0;
                                                break;
                                            }
                                        }
                                        while (1) {
                                            n = (r + 20) | 0;
                                            t = E[n >> 2] | 0;
                                            if (t) {
                                                r = t;
                                                i = n;
                                                continue;
                                            }
                                            n = (r + 16) | 0;
                                            t = E[n >> 2] | 0;
                                            if (!t) break;
                                            else {
                                                r = t;
                                                i = n;
                                            }
                                        }
                                        if (i >>> 0 < u >>> 0) Pe();
                                        else {
                                            E[i >> 2] = 0;
                                            l = r;
                                            break;
                                        }
                                    } else {
                                        t = E[(e + (s + 8)) >> 2] | 0;
                                        if (t >>> 0 < u >>> 0) Pe();
                                        r = (t + 12) | 0;
                                        if ((E[r >> 2] | 0) != (f | 0)) Pe();
                                        i = (n + 8) | 0;
                                        if ((E[i >> 2] | 0) == (f | 0)) {
                                            E[r >> 2] = n;
                                            E[i >> 2] = t;
                                            l = n;
                                            break;
                                        } else Pe();
                                    }
                                } while (0);
                                if (a) {
                                    r = E[(e + (s + 28)) >> 2] | 0;
                                    i = (892 + (r << 2)) | 0;
                                    if ((f | 0) == (E[i >> 2] | 0)) {
                                        E[i >> 2] = l;
                                        if (!l) {
                                            E[148] = E[148] & ~(1 << r);
                                            m = f;
                                            o = _;
                                            break;
                                        }
                                    } else {
                                        if (a >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        r = (a + 16) | 0;
                                        if ((E[r >> 2] | 0) == (f | 0))
                                            E[r >> 2] = l;
                                        else E[(a + 20) >> 2] = l;
                                        if (!l) {
                                            m = f;
                                            o = _;
                                            break;
                                        }
                                    }
                                    i = E[151] | 0;
                                    if (l >>> 0 < i >>> 0) Pe();
                                    E[(l + 24) >> 2] = a;
                                    r = E[(e + (s + 16)) >> 2] | 0;
                                    do {
                                        if (r)
                                            if (r >>> 0 < i >>> 0) Pe();
                                            else {
                                                E[(l + 16) >> 2] = r;
                                                E[(r + 24) >> 2] = l;
                                                break;
                                            }
                                    } while (0);
                                    r = E[(e + (s + 20)) >> 2] | 0;
                                    if (r)
                                        if (r >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        else {
                                            E[(l + 20) >> 2] = r;
                                            E[(r + 24) >> 2] = l;
                                            m = f;
                                            o = _;
                                            break;
                                        }
                                    else {
                                        m = f;
                                        o = _;
                                    }
                                } else {
                                    m = f;
                                    o = _;
                                }
                            } else {
                                m = r;
                                o = T;
                            }
                        } while (0);
                        if (m >>> 0 >= A >>> 0) Pe();
                        r = (e + (T + -4)) | 0;
                        i = E[r >> 2] | 0;
                        if (!(i & 1)) Pe();
                        if (!(i & 2)) {
                            if ((A | 0) == (E[153] | 0)) {
                                S = ((E[150] | 0) + o) | 0;
                                E[150] = S;
                                E[153] = m;
                                E[(m + 4) >> 2] = S | 1;
                                if ((m | 0) != (E[152] | 0)) return;
                                E[152] = 0;
                                E[149] = 0;
                                return;
                            }
                            if ((A | 0) == (E[152] | 0)) {
                                S = ((E[149] | 0) + o) | 0;
                                E[149] = S;
                                E[152] = m;
                                E[(m + 4) >> 2] = S | 1;
                                E[(m + S) >> 2] = S;
                                return;
                            }
                            o = ((i & -8) + o) | 0;
                            t = i >>> 3;
                            do {
                                if (i >>> 0 >= 256) {
                                    a = E[(e + (T + 16)) >> 2] | 0;
                                    r = E[(e + (T | 4)) >> 2] | 0;
                                    do {
                                        if ((r | 0) == (A | 0)) {
                                            i = (e + (T + 12)) | 0;
                                            r = E[i >> 2] | 0;
                                            if (!r) {
                                                i = (e + (T + 8)) | 0;
                                                r = E[i >> 2] | 0;
                                                if (!r) {
                                                    d = 0;
                                                    break;
                                                }
                                            }
                                            while (1) {
                                                n = (r + 20) | 0;
                                                t = E[n >> 2] | 0;
                                                if (t) {
                                                    r = t;
                                                    i = n;
                                                    continue;
                                                }
                                                n = (r + 16) | 0;
                                                t = E[n >> 2] | 0;
                                                if (!t) break;
                                                else {
                                                    r = t;
                                                    i = n;
                                                }
                                            }
                                            if (i >>> 0 < (E[151] | 0) >>> 0)
                                                Pe();
                                            else {
                                                E[i >> 2] = 0;
                                                d = r;
                                                break;
                                            }
                                        } else {
                                            i = E[(e + T) >> 2] | 0;
                                            if (i >>> 0 < (E[151] | 0) >>> 0)
                                                Pe();
                                            n = (i + 12) | 0;
                                            if ((E[n >> 2] | 0) != (A | 0))
                                                Pe();
                                            t = (r + 8) | 0;
                                            if ((E[t >> 2] | 0) == (A | 0)) {
                                                E[n >> 2] = r;
                                                E[t >> 2] = i;
                                                d = r;
                                                break;
                                            } else Pe();
                                        }
                                    } while (0);
                                    if (a) {
                                        r = E[(e + (T + 20)) >> 2] | 0;
                                        i = (892 + (r << 2)) | 0;
                                        if ((A | 0) == (E[i >> 2] | 0)) {
                                            E[i >> 2] = d;
                                            if (!d) {
                                                E[148] = E[148] & ~(1 << r);
                                                break;
                                            }
                                        } else {
                                            if (a >>> 0 < (E[151] | 0) >>> 0)
                                                Pe();
                                            r = (a + 16) | 0;
                                            if ((E[r >> 2] | 0) == (A | 0))
                                                E[r >> 2] = d;
                                            else E[(a + 20) >> 2] = d;
                                            if (!d) break;
                                        }
                                        i = E[151] | 0;
                                        if (d >>> 0 < i >>> 0) Pe();
                                        E[(d + 24) >> 2] = a;
                                        r = E[(e + (T + 8)) >> 2] | 0;
                                        do {
                                            if (r)
                                                if (r >>> 0 < i >>> 0) Pe();
                                                else {
                                                    E[(d + 16) >> 2] = r;
                                                    E[(r + 24) >> 2] = d;
                                                    break;
                                                }
                                        } while (0);
                                        r = E[(e + (T + 12)) >> 2] | 0;
                                        if (r)
                                            if (r >>> 0 < (E[151] | 0) >>> 0)
                                                Pe();
                                            else {
                                                E[(d + 20) >> 2] = r;
                                                E[(r + 24) >> 2] = d;
                                                break;
                                            }
                                    }
                                } else {
                                    n = E[(e + T) >> 2] | 0;
                                    i = E[(e + (T | 4)) >> 2] | 0;
                                    r = (628 + ((t << 1) << 2)) | 0;
                                    if ((n | 0) != (r | 0)) {
                                        if (n >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        if ((E[(n + 12) >> 2] | 0) != (A | 0))
                                            Pe();
                                    }
                                    if ((i | 0) == (n | 0)) {
                                        E[147] = E[147] & ~(1 << t);
                                        break;
                                    }
                                    if ((i | 0) != (r | 0)) {
                                        if (i >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        r = (i + 8) | 0;
                                        if ((E[r >> 2] | 0) == (A | 0)) c = r;
                                        else Pe();
                                    } else c = (i + 8) | 0;
                                    E[(n + 12) >> 2] = i;
                                    E[c >> 2] = n;
                                }
                            } while (0);
                            E[(m + 4) >> 2] = o | 1;
                            E[(m + o) >> 2] = o;
                            if ((m | 0) == (E[152] | 0)) {
                                E[149] = o;
                                return;
                            }
                        } else {
                            E[r >> 2] = i & -2;
                            E[(m + 4) >> 2] = o | 1;
                            E[(m + o) >> 2] = o;
                        }
                        r = o >>> 3;
                        if (o >>> 0 < 256) {
                            i = r << 1;
                            t = (628 + (i << 2)) | 0;
                            n = E[147] | 0;
                            r = 1 << r;
                            if (n & r) {
                                r = (628 + ((i + 2) << 2)) | 0;
                                i = E[r >> 2] | 0;
                                if (i >>> 0 < (E[151] | 0) >>> 0) Pe();
                                else {
                                    R = r;
                                    M = i;
                                }
                            } else {
                                E[147] = n | r;
                                R = (628 + ((i + 2) << 2)) | 0;
                                M = t;
                            }
                            E[R >> 2] = m;
                            E[(M + 12) >> 2] = m;
                            E[(m + 8) >> 2] = M;
                            E[(m + 12) >> 2] = t;
                            return;
                        }
                        r = o >>> 8;
                        if (r)
                            if (o >>> 0 > 16777215) t = 31;
                            else {
                                R = (((r + 1048320) | 0) >>> 16) & 8;
                                M = r << R;
                                A = (((M + 520192) | 0) >>> 16) & 4;
                                M = M << A;
                                t = (((M + 245760) | 0) >>> 16) & 2;
                                t = (14 - (A | R | t) + ((M << t) >>> 15)) | 0;
                                t = ((o >>> ((t + 7) | 0)) & 1) | (t << 1);
                            }
                        else t = 0;
                        r = (892 + (t << 2)) | 0;
                        E[(m + 28) >> 2] = t;
                        E[(m + 20) >> 2] = 0;
                        E[(m + 16) >> 2] = 0;
                        i = E[148] | 0;
                        n = 1 << t;
                        e: do {
                            if (i & n) {
                                r = E[r >> 2] | 0;
                                r: do {
                                    if (
                                        ((E[(r + 4) >> 2] & -8) | 0) !=
                                        (o | 0)
                                    ) {
                                        t =
                                            o <<
                                            ((t | 0) == 31
                                                ? 0
                                                : (25 - (t >>> 1)) | 0);
                                        while (1) {
                                            i =
                                                (r + 16 + ((t >>> 31) << 2)) |
                                                0;
                                            n = E[i >> 2] | 0;
                                            if (!n) break;
                                            if (
                                                ((E[(n + 4) >> 2] & -8) | 0) ==
                                                (o | 0)
                                            ) {
                                                S = n;
                                                break r;
                                            } else {
                                                t = t << 1;
                                                r = n;
                                            }
                                        }
                                        if (i >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        else {
                                            E[i >> 2] = m;
                                            E[(m + 24) >> 2] = r;
                                            E[(m + 12) >> 2] = m;
                                            E[(m + 8) >> 2] = m;
                                            break e;
                                        }
                                    } else S = r;
                                } while (0);
                                r = (S + 8) | 0;
                                i = E[r >> 2] | 0;
                                M = E[151] | 0;
                                if (
                                    (i >>> 0 >= M >>> 0) &
                                    (S >>> 0 >= M >>> 0)
                                ) {
                                    E[(i + 12) >> 2] = m;
                                    E[r >> 2] = m;
                                    E[(m + 8) >> 2] = i;
                                    E[(m + 12) >> 2] = S;
                                    E[(m + 24) >> 2] = 0;
                                    break;
                                } else Pe();
                            } else {
                                E[148] = i | n;
                                E[r >> 2] = m;
                                E[(m + 24) >> 2] = r;
                                E[(m + 12) >> 2] = m;
                                E[(m + 8) >> 2] = m;
                            }
                        } while (0);
                        m = ((E[155] | 0) + -1) | 0;
                        E[155] = m;
                        if (!m) r = 1044;
                        else return;
                        while (1) {
                            r = E[r >> 2] | 0;
                            if (!r) break;
                            else r = (r + 8) | 0;
                        }
                        E[155] = -1;
                        return;
                    }
                    function Xi(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0;
                        if (!e) {
                            e = Gi(r) | 0;
                            return e | 0;
                        }
                        if (r >>> 0 > 4294967231) {
                            e = si() | 0;
                            E[e >> 2] = 12;
                            e = 0;
                            return e | 0;
                        }
                        i =
                            Yi(
                                (e + -8) | 0,
                                r >>> 0 < 11 ? 16 : (r + 11) & -8,
                            ) | 0;
                        if (i) {
                            e = (i + 8) | 0;
                            return e | 0;
                        }
                        i = Gi(r) | 0;
                        if (!i) {
                            e = 0;
                            return e | 0;
                        }
                        n = E[(e + -4) >> 2] | 0;
                        n = ((n & -8) - (((n & 3) | 0) == 0 ? 8 : 4)) | 0;
                        Ji(i | 0, e | 0, (n >>> 0 < r >>> 0 ? n : r) | 0) | 0;
                        Hi(e);
                        e = i;
                        return e | 0;
                    }
                    function Vi(e) {
                        e = e | 0;
                        var r = 0;
                        if (!e) {
                            r = 0;
                            return r | 0;
                        }
                        e = E[(e + -4) >> 2] | 0;
                        r = e & 3;
                        if ((r | 0) == 1) {
                            r = 0;
                            return r | 0;
                        }
                        r = ((e & -8) - ((r | 0) == 0 ? 8 : 4)) | 0;
                        return r | 0;
                    }
                    function Yi(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            T = 0,
                            d = 0;
                        T = (e + 4) | 0;
                        d = E[T >> 2] | 0;
                        s = d & -8;
                        f = (e + s) | 0;
                        u = E[151] | 0;
                        i = d & 3;
                        if (
                            !(
                                ((i | 0) != 1) &
                                (e >>> 0 >= u >>> 0) &
                                (e >>> 0 < f >>> 0)
                            )
                        )
                            Pe();
                        n = (e + (s | 4)) | 0;
                        t = E[n >> 2] | 0;
                        if (!(t & 1)) Pe();
                        if (!i) {
                            if (r >>> 0 < 256) {
                                e = 0;
                                return e | 0;
                            }
                            if (
                                s >>> 0 >= ((r + 4) | 0) >>> 0
                                    ? ((s - r) | 0) >>> 0 <= (E[267] << 1) >>> 0
                                    : 0
                            )
                                return e | 0;
                            e = 0;
                            return e | 0;
                        }
                        if (s >>> 0 >= r >>> 0) {
                            i = (s - r) | 0;
                            if (i >>> 0 <= 15) return e | 0;
                            E[T >> 2] = (d & 1) | r | 2;
                            E[(e + (r + 4)) >> 2] = i | 3;
                            E[n >> 2] = E[n >> 2] | 1;
                            xi((e + r) | 0, i);
                            return e | 0;
                        }
                        if ((f | 0) == (E[153] | 0)) {
                            i = ((E[150] | 0) + s) | 0;
                            if (i >>> 0 <= r >>> 0) {
                                e = 0;
                                return e | 0;
                            }
                            c = (i - r) | 0;
                            E[T >> 2] = (d & 1) | r | 2;
                            E[(e + (r + 4)) >> 2] = c | 1;
                            E[153] = e + r;
                            E[150] = c;
                            return e | 0;
                        }
                        if ((f | 0) == (E[152] | 0)) {
                            n = ((E[149] | 0) + s) | 0;
                            if (n >>> 0 < r >>> 0) {
                                e = 0;
                                return e | 0;
                            }
                            i = (n - r) | 0;
                            if (i >>> 0 > 15) {
                                E[T >> 2] = (d & 1) | r | 2;
                                E[(e + (r + 4)) >> 2] = i | 1;
                                E[(e + n) >> 2] = i;
                                n = (e + (n + 4)) | 0;
                                E[n >> 2] = E[n >> 2] & -2;
                                n = (e + r) | 0;
                            } else {
                                E[T >> 2] = (d & 1) | n | 2;
                                n = (e + (n + 4)) | 0;
                                E[n >> 2] = E[n >> 2] | 1;
                                n = 0;
                                i = 0;
                            }
                            E[149] = i;
                            E[152] = n;
                            return e | 0;
                        }
                        if (t & 2) {
                            e = 0;
                            return e | 0;
                        }
                        _ = ((t & -8) + s) | 0;
                        if (_ >>> 0 < r >>> 0) {
                            e = 0;
                            return e | 0;
                        }
                        c = (_ - r) | 0;
                        o = t >>> 3;
                        do {
                            if (t >>> 0 >= 256) {
                                a = E[(e + (s + 24)) >> 2] | 0;
                                o = E[(e + (s + 12)) >> 2] | 0;
                                do {
                                    if ((o | 0) == (f | 0)) {
                                        n = (e + (s + 20)) | 0;
                                        i = E[n >> 2] | 0;
                                        if (!i) {
                                            n = (e + (s + 16)) | 0;
                                            i = E[n >> 2] | 0;
                                            if (!i) {
                                                l = 0;
                                                break;
                                            }
                                        }
                                        while (1) {
                                            t = (i + 20) | 0;
                                            o = E[t >> 2] | 0;
                                            if (o) {
                                                i = o;
                                                n = t;
                                                continue;
                                            }
                                            t = (i + 16) | 0;
                                            o = E[t >> 2] | 0;
                                            if (!o) break;
                                            else {
                                                i = o;
                                                n = t;
                                            }
                                        }
                                        if (n >>> 0 < u >>> 0) Pe();
                                        else {
                                            E[n >> 2] = 0;
                                            l = i;
                                            break;
                                        }
                                    } else {
                                        t = E[(e + (s + 8)) >> 2] | 0;
                                        if (t >>> 0 < u >>> 0) Pe();
                                        i = (t + 12) | 0;
                                        if ((E[i >> 2] | 0) != (f | 0)) Pe();
                                        n = (o + 8) | 0;
                                        if ((E[n >> 2] | 0) == (f | 0)) {
                                            E[i >> 2] = o;
                                            E[n >> 2] = t;
                                            l = o;
                                            break;
                                        } else Pe();
                                    }
                                } while (0);
                                if (a) {
                                    i = E[(e + (s + 28)) >> 2] | 0;
                                    n = (892 + (i << 2)) | 0;
                                    if ((f | 0) == (E[n >> 2] | 0)) {
                                        E[n >> 2] = l;
                                        if (!l) {
                                            E[148] = E[148] & ~(1 << i);
                                            break;
                                        }
                                    } else {
                                        if (a >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        i = (a + 16) | 0;
                                        if ((E[i >> 2] | 0) == (f | 0))
                                            E[i >> 2] = l;
                                        else E[(a + 20) >> 2] = l;
                                        if (!l) break;
                                    }
                                    n = E[151] | 0;
                                    if (l >>> 0 < n >>> 0) Pe();
                                    E[(l + 24) >> 2] = a;
                                    i = E[(e + (s + 16)) >> 2] | 0;
                                    do {
                                        if (i)
                                            if (i >>> 0 < n >>> 0) Pe();
                                            else {
                                                E[(l + 16) >> 2] = i;
                                                E[(i + 24) >> 2] = l;
                                                break;
                                            }
                                    } while (0);
                                    i = E[(e + (s + 20)) >> 2] | 0;
                                    if (i)
                                        if (i >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        else {
                                            E[(l + 20) >> 2] = i;
                                            E[(i + 24) >> 2] = l;
                                            break;
                                        }
                                }
                            } else {
                                t = E[(e + (s + 8)) >> 2] | 0;
                                n = E[(e + (s + 12)) >> 2] | 0;
                                i = (628 + ((o << 1) << 2)) | 0;
                                if ((t | 0) != (i | 0)) {
                                    if (t >>> 0 < u >>> 0) Pe();
                                    if ((E[(t + 12) >> 2] | 0) != (f | 0)) Pe();
                                }
                                if ((n | 0) == (t | 0)) {
                                    E[147] = E[147] & ~(1 << o);
                                    break;
                                }
                                if ((n | 0) != (i | 0)) {
                                    if (n >>> 0 < u >>> 0) Pe();
                                    i = (n + 8) | 0;
                                    if ((E[i >> 2] | 0) == (f | 0)) a = i;
                                    else Pe();
                                } else a = (n + 8) | 0;
                                E[(t + 12) >> 2] = n;
                                E[a >> 2] = t;
                            }
                        } while (0);
                        if (c >>> 0 < 16) {
                            E[T >> 2] = _ | (d & 1) | 2;
                            r = (e + (_ | 4)) | 0;
                            E[r >> 2] = E[r >> 2] | 1;
                            return e | 0;
                        } else {
                            E[T >> 2] = (d & 1) | r | 2;
                            E[(e + (r + 4)) >> 2] = c | 3;
                            d = (e + (_ | 4)) | 0;
                            E[d >> 2] = E[d >> 2] | 1;
                            xi((e + r) | 0, c);
                            return e | 0;
                        }
                        return 0;
                    }
                    function xi(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            T = 0,
                            d = 0,
                            A = 0,
                            R = 0,
                            M = 0,
                            S = 0;
                        A = (e + r) | 0;
                        i = E[(e + 4) >> 2] | 0;
                        do {
                            if (!(i & 1)) {
                                l = E[e >> 2] | 0;
                                if (!(i & 3)) return;
                                c = (e + (0 - l)) | 0;
                                _ = (l + r) | 0;
                                s = E[151] | 0;
                                if (c >>> 0 < s >>> 0) Pe();
                                if ((c | 0) == (E[152] | 0)) {
                                    n = (e + (r + 4)) | 0;
                                    i = E[n >> 2] | 0;
                                    if (((i & 3) | 0) != 3) {
                                        S = c;
                                        a = _;
                                        break;
                                    }
                                    E[149] = _;
                                    E[n >> 2] = i & -2;
                                    E[(e + (4 - l)) >> 2] = _ | 1;
                                    E[A >> 2] = _;
                                    return;
                                }
                                o = l >>> 3;
                                if (l >>> 0 < 256) {
                                    t = E[(e + (8 - l)) >> 2] | 0;
                                    n = E[(e + (12 - l)) >> 2] | 0;
                                    i = (628 + ((o << 1) << 2)) | 0;
                                    if ((t | 0) != (i | 0)) {
                                        if (t >>> 0 < s >>> 0) Pe();
                                        if ((E[(t + 12) >> 2] | 0) != (c | 0))
                                            Pe();
                                    }
                                    if ((n | 0) == (t | 0)) {
                                        E[147] = E[147] & ~(1 << o);
                                        S = c;
                                        a = _;
                                        break;
                                    }
                                    if ((n | 0) != (i | 0)) {
                                        if (n >>> 0 < s >>> 0) Pe();
                                        i = (n + 8) | 0;
                                        if ((E[i >> 2] | 0) == (c | 0)) u = i;
                                        else Pe();
                                    } else u = (n + 8) | 0;
                                    E[(t + 12) >> 2] = n;
                                    E[u >> 2] = t;
                                    S = c;
                                    a = _;
                                    break;
                                }
                                u = E[(e + (24 - l)) >> 2] | 0;
                                t = E[(e + (12 - l)) >> 2] | 0;
                                do {
                                    if ((t | 0) == (c | 0)) {
                                        t = (16 - l) | 0;
                                        n = (e + (t + 4)) | 0;
                                        i = E[n >> 2] | 0;
                                        if (!i) {
                                            n = (e + t) | 0;
                                            i = E[n >> 2] | 0;
                                            if (!i) {
                                                f = 0;
                                                break;
                                            }
                                        }
                                        while (1) {
                                            t = (i + 20) | 0;
                                            o = E[t >> 2] | 0;
                                            if (o) {
                                                i = o;
                                                n = t;
                                                continue;
                                            }
                                            t = (i + 16) | 0;
                                            o = E[t >> 2] | 0;
                                            if (!o) break;
                                            else {
                                                i = o;
                                                n = t;
                                            }
                                        }
                                        if (n >>> 0 < s >>> 0) Pe();
                                        else {
                                            E[n >> 2] = 0;
                                            f = i;
                                            break;
                                        }
                                    } else {
                                        o = E[(e + (8 - l)) >> 2] | 0;
                                        if (o >>> 0 < s >>> 0) Pe();
                                        i = (o + 12) | 0;
                                        if ((E[i >> 2] | 0) != (c | 0)) Pe();
                                        n = (t + 8) | 0;
                                        if ((E[n >> 2] | 0) == (c | 0)) {
                                            E[i >> 2] = t;
                                            E[n >> 2] = o;
                                            f = t;
                                            break;
                                        } else Pe();
                                    }
                                } while (0);
                                if (u) {
                                    i = E[(e + (28 - l)) >> 2] | 0;
                                    n = (892 + (i << 2)) | 0;
                                    if ((c | 0) == (E[n >> 2] | 0)) {
                                        E[n >> 2] = f;
                                        if (!f) {
                                            E[148] = E[148] & ~(1 << i);
                                            S = c;
                                            a = _;
                                            break;
                                        }
                                    } else {
                                        if (u >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        i = (u + 16) | 0;
                                        if ((E[i >> 2] | 0) == (c | 0))
                                            E[i >> 2] = f;
                                        else E[(u + 20) >> 2] = f;
                                        if (!f) {
                                            S = c;
                                            a = _;
                                            break;
                                        }
                                    }
                                    t = E[151] | 0;
                                    if (f >>> 0 < t >>> 0) Pe();
                                    E[(f + 24) >> 2] = u;
                                    i = (16 - l) | 0;
                                    n = E[(e + i) >> 2] | 0;
                                    do {
                                        if (n)
                                            if (n >>> 0 < t >>> 0) Pe();
                                            else {
                                                E[(f + 16) >> 2] = n;
                                                E[(n + 24) >> 2] = f;
                                                break;
                                            }
                                    } while (0);
                                    i = E[(e + (i + 4)) >> 2] | 0;
                                    if (i)
                                        if (i >>> 0 < (E[151] | 0) >>> 0) Pe();
                                        else {
                                            E[(f + 20) >> 2] = i;
                                            E[(i + 24) >> 2] = f;
                                            S = c;
                                            a = _;
                                            break;
                                        }
                                    else {
                                        S = c;
                                        a = _;
                                    }
                                } else {
                                    S = c;
                                    a = _;
                                }
                            } else {
                                S = e;
                                a = r;
                            }
                        } while (0);
                        s = E[151] | 0;
                        if (A >>> 0 < s >>> 0) Pe();
                        i = (e + (r + 4)) | 0;
                        n = E[i >> 2] | 0;
                        if (!(n & 2)) {
                            if ((A | 0) == (E[153] | 0)) {
                                M = ((E[150] | 0) + a) | 0;
                                E[150] = M;
                                E[153] = S;
                                E[(S + 4) >> 2] = M | 1;
                                if ((S | 0) != (E[152] | 0)) return;
                                E[152] = 0;
                                E[149] = 0;
                                return;
                            }
                            if ((A | 0) == (E[152] | 0)) {
                                M = ((E[149] | 0) + a) | 0;
                                E[149] = M;
                                E[152] = S;
                                E[(S + 4) >> 2] = M | 1;
                                E[(S + M) >> 2] = M;
                                return;
                            }
                            a = ((n & -8) + a) | 0;
                            o = n >>> 3;
                            do {
                                if (n >>> 0 >= 256) {
                                    u = E[(e + (r + 24)) >> 2] | 0;
                                    t = E[(e + (r + 12)) >> 2] | 0;
                                    do {
                                        if ((t | 0) == (A | 0)) {
                                            n = (e + (r + 20)) | 0;
                                            i = E[n >> 2] | 0;
                                            if (!i) {
                                                n = (e + (r + 16)) | 0;
                                                i = E[n >> 2] | 0;
                                                if (!i) {
                                                    d = 0;
                                                    break;
                                                }
                                            }
                                            while (1) {
                                                t = (i + 20) | 0;
                                                o = E[t >> 2] | 0;
                                                if (o) {
                                                    i = o;
                                                    n = t;
                                                    continue;
                                                }
                                                t = (i + 16) | 0;
                                                o = E[t >> 2] | 0;
                                                if (!o) break;
                                                else {
                                                    i = o;
                                                    n = t;
                                                }
                                            }
                                            if (n >>> 0 < s >>> 0) Pe();
                                            else {
                                                E[n >> 2] = 0;
                                                d = i;
                                                break;
                                            }
                                        } else {
                                            o = E[(e + (r + 8)) >> 2] | 0;
                                            if (o >>> 0 < s >>> 0) Pe();
                                            i = (o + 12) | 0;
                                            if ((E[i >> 2] | 0) != (A | 0))
                                                Pe();
                                            n = (t + 8) | 0;
                                            if ((E[n >> 2] | 0) == (A | 0)) {
                                                E[i >> 2] = t;
                                                E[n >> 2] = o;
                                                d = t;
                                                break;
                                            } else Pe();
                                        }
                                    } while (0);
                                    if (u) {
                                        i = E[(e + (r + 28)) >> 2] | 0;
                                        n = (892 + (i << 2)) | 0;
                                        if ((A | 0) == (E[n >> 2] | 0)) {
                                            E[n >> 2] = d;
                                            if (!d) {
                                                E[148] = E[148] & ~(1 << i);
                                                break;
                                            }
                                        } else {
                                            if (u >>> 0 < (E[151] | 0) >>> 0)
                                                Pe();
                                            i = (u + 16) | 0;
                                            if ((E[i >> 2] | 0) == (A | 0))
                                                E[i >> 2] = d;
                                            else E[(u + 20) >> 2] = d;
                                            if (!d) break;
                                        }
                                        n = E[151] | 0;
                                        if (d >>> 0 < n >>> 0) Pe();
                                        E[(d + 24) >> 2] = u;
                                        i = E[(e + (r + 16)) >> 2] | 0;
                                        do {
                                            if (i)
                                                if (i >>> 0 < n >>> 0) Pe();
                                                else {
                                                    E[(d + 16) >> 2] = i;
                                                    E[(i + 24) >> 2] = d;
                                                    break;
                                                }
                                        } while (0);
                                        i = E[(e + (r + 20)) >> 2] | 0;
                                        if (i)
                                            if (i >>> 0 < (E[151] | 0) >>> 0)
                                                Pe();
                                            else {
                                                E[(d + 20) >> 2] = i;
                                                E[(i + 24) >> 2] = d;
                                                break;
                                            }
                                    }
                                } else {
                                    t = E[(e + (r + 8)) >> 2] | 0;
                                    n = E[(e + (r + 12)) >> 2] | 0;
                                    i = (628 + ((o << 1) << 2)) | 0;
                                    if ((t | 0) != (i | 0)) {
                                        if (t >>> 0 < s >>> 0) Pe();
                                        if ((E[(t + 12) >> 2] | 0) != (A | 0))
                                            Pe();
                                    }
                                    if ((n | 0) == (t | 0)) {
                                        E[147] = E[147] & ~(1 << o);
                                        break;
                                    }
                                    if ((n | 0) != (i | 0)) {
                                        if (n >>> 0 < s >>> 0) Pe();
                                        i = (n + 8) | 0;
                                        if ((E[i >> 2] | 0) == (A | 0)) T = i;
                                        else Pe();
                                    } else T = (n + 8) | 0;
                                    E[(t + 12) >> 2] = n;
                                    E[T >> 2] = t;
                                }
                            } while (0);
                            E[(S + 4) >> 2] = a | 1;
                            E[(S + a) >> 2] = a;
                            if ((S | 0) == (E[152] | 0)) {
                                E[149] = a;
                                return;
                            }
                        } else {
                            E[i >> 2] = n & -2;
                            E[(S + 4) >> 2] = a | 1;
                            E[(S + a) >> 2] = a;
                        }
                        i = a >>> 3;
                        if (a >>> 0 < 256) {
                            n = i << 1;
                            o = (628 + (n << 2)) | 0;
                            t = E[147] | 0;
                            i = 1 << i;
                            if (t & i) {
                                i = (628 + ((n + 2) << 2)) | 0;
                                n = E[i >> 2] | 0;
                                if (n >>> 0 < (E[151] | 0) >>> 0) Pe();
                                else {
                                    R = i;
                                    M = n;
                                }
                            } else {
                                E[147] = t | i;
                                R = (628 + ((n + 2) << 2)) | 0;
                                M = o;
                            }
                            E[R >> 2] = S;
                            E[(M + 12) >> 2] = S;
                            E[(S + 8) >> 2] = M;
                            E[(S + 12) >> 2] = o;
                            return;
                        }
                        i = a >>> 8;
                        if (i)
                            if (a >>> 0 > 16777215) o = 31;
                            else {
                                R = (((i + 1048320) | 0) >>> 16) & 8;
                                M = i << R;
                                A = (((M + 520192) | 0) >>> 16) & 4;
                                M = M << A;
                                o = (((M + 245760) | 0) >>> 16) & 2;
                                o = (14 - (A | R | o) + ((M << o) >>> 15)) | 0;
                                o = ((a >>> ((o + 7) | 0)) & 1) | (o << 1);
                            }
                        else o = 0;
                        i = (892 + (o << 2)) | 0;
                        E[(S + 28) >> 2] = o;
                        E[(S + 20) >> 2] = 0;
                        E[(S + 16) >> 2] = 0;
                        n = E[148] | 0;
                        t = 1 << o;
                        if (!(n & t)) {
                            E[148] = n | t;
                            E[i >> 2] = S;
                            E[(S + 24) >> 2] = i;
                            E[(S + 12) >> 2] = S;
                            E[(S + 8) >> 2] = S;
                            return;
                        }
                        i = E[i >> 2] | 0;
                        e: do {
                            if (((E[(i + 4) >> 2] & -8) | 0) != (a | 0)) {
                                o =
                                    a <<
                                    ((o | 0) == 31 ? 0 : (25 - (o >>> 1)) | 0);
                                while (1) {
                                    n = (i + 16 + ((o >>> 31) << 2)) | 0;
                                    t = E[n >> 2] | 0;
                                    if (!t) break;
                                    if (
                                        ((E[(t + 4) >> 2] & -8) | 0) ==
                                        (a | 0)
                                    ) {
                                        i = t;
                                        break e;
                                    } else {
                                        o = o << 1;
                                        i = t;
                                    }
                                }
                                if (n >>> 0 < (E[151] | 0) >>> 0) Pe();
                                E[n >> 2] = S;
                                E[(S + 24) >> 2] = i;
                                E[(S + 12) >> 2] = S;
                                E[(S + 8) >> 2] = S;
                                return;
                            }
                        } while (0);
                        n = (i + 8) | 0;
                        t = E[n >> 2] | 0;
                        M = E[151] | 0;
                        if (!((t >>> 0 >= M >>> 0) & (i >>> 0 >= M >>> 0)))
                            Pe();
                        E[(t + 12) >> 2] = S;
                        E[n >> 2] = S;
                        E[(S + 8) >> 2] = t;
                        E[(S + 12) >> 2] = i;
                        E[(S + 24) >> 2] = 0;
                        return;
                    }
                    function Ki() {}
                    function Wi(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        n = (r - n - ((i >>> 0 > e >>> 0) | 0)) >>> 0;
                        return ((H = n), ((e - i) >>> 0) | 0) | 0;
                    }
                    function zi(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        i = (e + i) >>> 0;
                        return (
                            ((H = (r + n + ((i >>> 0 < e >>> 0) | 0)) >>> 0),
                            i | 0) | 0
                        );
                    }
                    function qi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0,
                            t = 0,
                            o = 0,
                            a = 0;
                        n = (e + i) | 0;
                        if ((i | 0) >= 20) {
                            r = r & 255;
                            o = e & 3;
                            a = r | (r << 8) | (r << 16) | (r << 24);
                            t = n & ~3;
                            if (o) {
                                o = (e + 4 - o) | 0;
                                while ((e | 0) < (o | 0)) {
                                    _[e >> 0] = r;
                                    e = (e + 1) | 0;
                                }
                            }
                            while ((e | 0) < (t | 0)) {
                                E[e >> 2] = a;
                                e = (e + 4) | 0;
                            }
                        }
                        while ((e | 0) < (n | 0)) {
                            _[e >> 0] = r;
                            e = (e + 1) | 0;
                        }
                        return (e - i) | 0;
                    }
                    function ji(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        if ((i | 0) < 32) {
                            H = r >>> i;
                            return (
                                (e >>> i) | ((r & ((1 << i) - 1)) << (32 - i))
                            );
                        }
                        H = 0;
                        return (r >>> (i - 32)) | 0;
                    }
                    function Zi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        if ((i | 0) < 32) {
                            H =
                                (r << i) |
                                ((e & (((1 << i) - 1) << (32 - i))) >>>
                                    (32 - i));
                            return e << i;
                        }
                        H = e << (i - 32);
                        return 0;
                    }
                    function Ji(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        var n = 0;
                        if ((i | 0) >= 4096) return Ue(e | 0, r | 0, i | 0) | 0;
                        n = e | 0;
                        if ((e & 3) == (r & 3)) {
                            while (e & 3) {
                                if (!i) return n | 0;
                                _[e >> 0] = _[r >> 0] | 0;
                                e = (e + 1) | 0;
                                r = (r + 1) | 0;
                                i = (i - 1) | 0;
                            }
                            while ((i | 0) >= 4) {
                                E[e >> 2] = E[r >> 2];
                                e = (e + 4) | 0;
                                r = (r + 4) | 0;
                                i = (i - 4) | 0;
                            }
                        }
                        while ((i | 0) > 0) {
                            _[e >> 0] = _[r >> 0] | 0;
                            e = (e + 1) | 0;
                            r = (r + 1) | 0;
                            i = (i - 1) | 0;
                        }
                        return n | 0;
                    }
                    function Qi(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        if ((i | 0) < 32) {
                            H = r >> i;
                            return (
                                (e >>> i) | ((r & ((1 << i) - 1)) << (32 - i))
                            );
                        }
                        H = (r | 0) < 0 ? -1 : 0;
                        return (r >> (i - 32)) | 0;
                    }
                    function $i(e) {
                        e = e | 0;
                        var r = 0;
                        r = _[(I + (e & 255)) >> 0] | 0;
                        if ((r | 0) < 8) return r | 0;
                        r = _[(I + ((e >> 8) & 255)) >> 0] | 0;
                        if ((r | 0) < 8) return (r + 8) | 0;
                        r = _[(I + ((e >> 16) & 255)) >> 0] | 0;
                        if ((r | 0) < 8) return (r + 16) | 0;
                        return ((_[(I + (e >>> 24)) >> 0] | 0) + 24) | 0;
                    }
                    function en(e, r) {
                        e = e | 0;
                        r = r | 0;
                        var i = 0,
                            n = 0,
                            t = 0,
                            o = 0;
                        o = e & 65535;
                        t = r & 65535;
                        i = fe(t, o) | 0;
                        n = e >>> 16;
                        e = ((i >>> 16) + (fe(t, n) | 0)) | 0;
                        t = r >>> 16;
                        r = fe(t, o) | 0;
                        return (
                            ((H =
                                ((e >>> 16) +
                                    (fe(t, n) | 0) +
                                    ((((e & 65535) + r) | 0) >>> 16)) |
                                0),
                            ((e + r) << 16) | (i & 65535) | 0) | 0
                        );
                    }
                    function rn(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0;
                        l = (r >> 31) | (((r | 0) < 0 ? -1 : 0) << 1);
                        s =
                            (((r | 0) < 0 ? -1 : 0) >> 31) |
                            (((r | 0) < 0 ? -1 : 0) << 1);
                        o = (n >> 31) | (((n | 0) < 0 ? -1 : 0) << 1);
                        t =
                            (((n | 0) < 0 ? -1 : 0) >> 31) |
                            (((n | 0) < 0 ? -1 : 0) << 1);
                        u = Wi(l ^ e, s ^ r, l, s) | 0;
                        a = H;
                        e = o ^ l;
                        r = t ^ s;
                        return (
                            Wi(
                                (un(u, a, Wi(o ^ i, t ^ n, o, t) | 0, H, 0) |
                                    0) ^
                                    e,
                                H ^ r,
                                e,
                                r,
                            ) | 0
                        );
                    }
                    function nn(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0;
                        t = m;
                        m = (m + 16) | 0;
                        u = t | 0;
                        a = (r >> 31) | (((r | 0) < 0 ? -1 : 0) << 1);
                        o =
                            (((r | 0) < 0 ? -1 : 0) >> 31) |
                            (((r | 0) < 0 ? -1 : 0) << 1);
                        l = (n >> 31) | (((n | 0) < 0 ? -1 : 0) << 1);
                        s =
                            (((n | 0) < 0 ? -1 : 0) >> 31) |
                            (((n | 0) < 0 ? -1 : 0) << 1);
                        e = Wi(a ^ e, o ^ r, a, o) | 0;
                        r = H;
                        un(e, r, Wi(l ^ i, s ^ n, l, s) | 0, H, u) | 0;
                        n = Wi(E[u >> 2] ^ a, E[(u + 4) >> 2] ^ o, a, o) | 0;
                        i = H;
                        m = t;
                        return ((H = i), n) | 0;
                    }
                    function tn(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0;
                        t = e;
                        o = i;
                        i = en(t, o) | 0;
                        e = H;
                        return (
                            ((H =
                                ((fe(r, o) | 0) + (fe(n, t) | 0) + e) |
                                (e & 0)),
                            i | 0 | 0) | 0
                        );
                    }
                    function on(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        return un(e, r, i, n, 0) | 0;
                    }
                    function an(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        var t = 0,
                            o = 0;
                        o = m;
                        m = (m + 16) | 0;
                        t = o | 0;
                        un(e, r, i, n, t) | 0;
                        m = o;
                        return ((H = E[(t + 4) >> 2] | 0), E[t >> 2] | 0) | 0;
                    }
                    function un(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        var o = 0,
                            a = 0,
                            u = 0,
                            s = 0,
                            l = 0,
                            f = 0,
                            _ = 0,
                            c = 0,
                            T = 0,
                            d = 0;
                        f = e;
                        s = r;
                        l = s;
                        a = i;
                        c = n;
                        u = c;
                        if (!l) {
                            o = (t | 0) != 0;
                            if (!u) {
                                if (o) {
                                    E[t >> 2] = (f >>> 0) % (a >>> 0);
                                    E[(t + 4) >> 2] = 0;
                                }
                                c = 0;
                                t = ((f >>> 0) / (a >>> 0)) >>> 0;
                                return ((H = c), t) | 0;
                            } else {
                                if (!o) {
                                    c = 0;
                                    t = 0;
                                    return ((H = c), t) | 0;
                                }
                                E[t >> 2] = e | 0;
                                E[(t + 4) >> 2] = r & 0;
                                c = 0;
                                t = 0;
                                return ((H = c), t) | 0;
                            }
                        }
                        o = (u | 0) == 0;
                        do {
                            if (a) {
                                if (!o) {
                                    o = ((ce(u | 0) | 0) - (ce(l | 0) | 0)) | 0;
                                    if (o >>> 0 <= 31) {
                                        _ = (o + 1) | 0;
                                        u = (31 - o) | 0;
                                        r = (o - 31) >> 31;
                                        a = _;
                                        e = ((f >>> (_ >>> 0)) & r) | (l << u);
                                        r = (l >>> (_ >>> 0)) & r;
                                        o = 0;
                                        u = f << u;
                                        break;
                                    }
                                    if (!t) {
                                        c = 0;
                                        t = 0;
                                        return ((H = c), t) | 0;
                                    }
                                    E[t >> 2] = e | 0;
                                    E[(t + 4) >> 2] = s | (r & 0);
                                    c = 0;
                                    t = 0;
                                    return ((H = c), t) | 0;
                                }
                                o = (a - 1) | 0;
                                if (o & a) {
                                    u =
                                        ((ce(a | 0) | 0) +
                                            33 -
                                            (ce(l | 0) | 0)) |
                                        0;
                                    d = (64 - u) | 0;
                                    _ = (32 - u) | 0;
                                    s = _ >> 31;
                                    T = (u - 32) | 0;
                                    r = T >> 31;
                                    a = u;
                                    e =
                                        (((_ - 1) >> 31) & (l >>> (T >>> 0))) |
                                        (((l << _) | (f >>> (u >>> 0))) & r);
                                    r = r & (l >>> (u >>> 0));
                                    o = (f << d) & s;
                                    u =
                                        (((l << d) | (f >>> (T >>> 0))) & s) |
                                        ((f << _) & ((u - 33) >> 31));
                                    break;
                                }
                                if (t) {
                                    E[t >> 2] = o & f;
                                    E[(t + 4) >> 2] = 0;
                                }
                                if ((a | 0) == 1) {
                                    T = s | (r & 0);
                                    d = e | 0 | 0;
                                    return ((H = T), d) | 0;
                                } else {
                                    d = $i(a | 0) | 0;
                                    T = (l >>> (d >>> 0)) | 0;
                                    d = (l << (32 - d)) | (f >>> (d >>> 0)) | 0;
                                    return ((H = T), d) | 0;
                                }
                            } else {
                                if (o) {
                                    if (t) {
                                        E[t >> 2] = (l >>> 0) % (a >>> 0);
                                        E[(t + 4) >> 2] = 0;
                                    }
                                    T = 0;
                                    d = ((l >>> 0) / (a >>> 0)) >>> 0;
                                    return ((H = T), d) | 0;
                                }
                                if (!f) {
                                    if (t) {
                                        E[t >> 2] = 0;
                                        E[(t + 4) >> 2] = (l >>> 0) % (u >>> 0);
                                    }
                                    T = 0;
                                    d = ((l >>> 0) / (u >>> 0)) >>> 0;
                                    return ((H = T), d) | 0;
                                }
                                o = (u - 1) | 0;
                                if (!(o & u)) {
                                    if (t) {
                                        E[t >> 2] = e | 0;
                                        E[(t + 4) >> 2] = (o & l) | (r & 0);
                                    }
                                    T = 0;
                                    d = l >>> (($i(u | 0) | 0) >>> 0);
                                    return ((H = T), d) | 0;
                                }
                                o = ((ce(u | 0) | 0) - (ce(l | 0) | 0)) | 0;
                                if (o >>> 0 <= 30) {
                                    r = (o + 1) | 0;
                                    u = (31 - o) | 0;
                                    a = r;
                                    e = (l << u) | (f >>> (r >>> 0));
                                    r = l >>> (r >>> 0);
                                    o = 0;
                                    u = f << u;
                                    break;
                                }
                                if (!t) {
                                    T = 0;
                                    d = 0;
                                    return ((H = T), d) | 0;
                                }
                                E[t >> 2] = e | 0;
                                E[(t + 4) >> 2] = s | (r & 0);
                                T = 0;
                                d = 0;
                                return ((H = T), d) | 0;
                            }
                        } while (0);
                        if (!a) {
                            l = u;
                            s = 0;
                            u = 0;
                        } else {
                            _ = i | 0 | 0;
                            f = c | (n & 0);
                            l = zi(_ | 0, f | 0, -1, -1) | 0;
                            i = H;
                            s = u;
                            u = 0;
                            do {
                                n = s;
                                s = (o >>> 31) | (s << 1);
                                o = u | (o << 1);
                                n = (e << 1) | (n >>> 31) | 0;
                                c = (e >>> 31) | (r << 1) | 0;
                                Wi(l, i, n, c) | 0;
                                d = H;
                                T = (d >> 31) | (((d | 0) < 0 ? -1 : 0) << 1);
                                u = T & 1;
                                e =
                                    Wi(
                                        n,
                                        c,
                                        T & _,
                                        ((((d | 0) < 0 ? -1 : 0) >> 31) |
                                            (((d | 0) < 0 ? -1 : 0) << 1)) &
                                            f,
                                    ) | 0;
                                r = H;
                                a = (a - 1) | 0;
                            } while ((a | 0) != 0);
                            l = s;
                            s = 0;
                        }
                        a = 0;
                        if (t) {
                            E[t >> 2] = e;
                            E[(t + 4) >> 2] = r;
                        }
                        T =
                            ((o | 0) >>> 31) |
                            ((l | a) << 1) |
                            (((a << 1) | (o >>> 31)) & 0) |
                            s;
                        d = (((o << 1) | (0 >>> 31)) & -2) | u;
                        return ((H = T), d) | 0;
                    }
                    function sn(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        return In[e & 7](r | 0, i | 0, n | 0) | 0;
                    }
                    function ln(e, r, i, n, t, o) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        pn[e & 3](r | 0, i | 0, n | 0, t | 0, o | 0);
                    }
                    function fn(e, r) {
                        e = e | 0;
                        r = r | 0;
                        wn[e & 7](r | 0);
                    }
                    function _n(e, r) {
                        e = e | 0;
                        r = r | 0;
                        return bn[e & 1](r | 0) | 0;
                    }
                    function cn(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        On[e & 0](r | 0, i | 0, n | 0);
                    }
                    function En(e) {
                        e = e | 0;
                        Pn[e & 3]();
                    }
                    function Tn(e, r, i, n, t, o, a) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        a = a | 0;
                        vn[e & 3](r | 0, i | 0, n | 0, t | 0, o | 0, a | 0);
                    }
                    function dn(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        Bn[e & 3](r | 0, i | 0, n | 0, t | 0);
                    }
                    function An(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        Ee(0);
                        return 0;
                    }
                    function Rn(e, r, i, n, t) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        Ee(1);
                    }
                    function Mn(e) {
                        e = e | 0;
                        Ee(2);
                    }
                    function Sn(e) {
                        e = e | 0;
                        Ee(3);
                        return 0;
                    }
                    function mn(e, r, i) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        Ee(4);
                    }
                    function hn() {
                        Ee(5);
                    }
                    function Nn(e, r, i, n, t, o) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        t = t | 0;
                        o = o | 0;
                        Ee(6);
                    }
                    function Cn(e, r, i, n) {
                        e = e | 0;
                        r = r | 0;
                        i = i | 0;
                        n = n | 0;
                        Ee(7);
                    }
                    var In = [An, Wr, gi, Oi, bi, Pi, An, An];
                    var pn = [Rn, $r, Qr, Rn];
                    var wn = [Mn, Xr, xr, Vr, Yr, Kr, ai, Fi];
                    var bn = [Sn, wi];
                    var On = [mn];
                    var Pn = [hn, ti, oi, hn];
                    var vn = [Nn, ri, ei, Nn];
                    var Bn = [Cn, qr, jr, Cn];
                    return {
                        ___cxa_can_catch: ii,
                        _crn_get_levels: mr,
                        _crn_get_uncompressed_size: Cr,
                        _crn_decompress: Ir,
                        _i64Add: zi,
                        _crn_get_width: Mr,
                        ___cxa_is_pointer_type: ni,
                        _crn_get_bytes_per_block: Nr,
                        _memset: qi,
                        _malloc: Gi,
                        _memcpy: Ji,
                        _i64Subtract: Wi,
                        _bitshift64Lshr: ji,
                        _free: Hi,
                        _bitshift64Shl: Zi,
                        _crn_get_height: Sr,
                        _crn_get_dxt_format: hr,
                        runPostSets: Ki,
                        _emscripten_replace_memory: Ke,
                        stackAlloc: We,
                        stackSave: ze,
                        stackRestore: qe,
                        establishStackSpace: je,
                        setThrew: Ze,
                        setTempRet0: $e,
                        getTempRet0: er,
                        dynCall_iiii: sn,
                        dynCall_viiiii: ln,
                        dynCall_vi: fn,
                        dynCall_ii: _n,
                        dynCall_viii: cn,
                        dynCall_v: En,
                        dynCall_viiiiii: Tn,
                        dynCall_viiii: dn,
                    };
                })(Module.asmGlobalArg, Module.asmLibraryArg, buffer),
                ___cxa_can_catch = (Module.___cxa_can_catch =
                    asm.___cxa_can_catch),
                _crn_get_levels = (Module._crn_get_levels =
                    asm._crn_get_levels),
                runPostSets = (Module.runPostSets = asm.runPostSets),
                _crn_get_uncompressed_size =
                    (Module._crn_get_uncompressed_size =
                        asm._crn_get_uncompressed_size),
                _crn_decompress = (Module._crn_decompress =
                    asm._crn_decompress),
                _i64Add = (Module._i64Add = asm._i64Add),
                _crn_get_height = (Module._crn_get_height =
                    asm._crn_get_height),
                ___cxa_is_pointer_type = (Module.___cxa_is_pointer_type =
                    asm.___cxa_is_pointer_type),
                _crn_get_bytes_per_block = (Module._crn_get_bytes_per_block =
                    asm._crn_get_bytes_per_block),
                _memset = (Module._memset = asm._memset),
                _malloc = (Module._malloc = asm._malloc),
                _memcpy = (Module._memcpy = asm._memcpy),
                _emscripten_replace_memory =
                    (Module._emscripten_replace_memory =
                        asm._emscripten_replace_memory),
                _i64Subtract = (Module._i64Subtract = asm._i64Subtract),
                _bitshift64Lshr = (Module._bitshift64Lshr =
                    asm._bitshift64Lshr),
                _free = (Module._free = asm._free),
                _crn_get_dxt_format = (Module._crn_get_dxt_format =
                    asm._crn_get_dxt_format),
                _crn_get_width = (Module._crn_get_width = asm._crn_get_width),
                _bitshift64Shl = (Module._bitshift64Shl = asm._bitshift64Shl),
                dynCall_iiii = (Module.dynCall_iiii = asm.dynCall_iiii),
                dynCall_viiiii = (Module.dynCall_viiiii = asm.dynCall_viiiii),
                dynCall_vi = (Module.dynCall_vi = asm.dynCall_vi),
                dynCall_ii = (Module.dynCall_ii = asm.dynCall_ii),
                dynCall_viii = (Module.dynCall_viii = asm.dynCall_viii),
                dynCall_v = (Module.dynCall_v = asm.dynCall_v),
                dynCall_viiiiii = (Module.dynCall_viiiiii =
                    asm.dynCall_viiiiii),
                dynCall_viiii = (Module.dynCall_viiii = asm.dynCall_viiii);
            (Runtime.stackAlloc = asm.stackAlloc),
                (Runtime.stackSave = asm.stackSave),
                (Runtime.stackRestore = asm.stackRestore),
                (Runtime.establishStackSpace = asm.establishStackSpace),
                (Runtime.setTempRet0 = asm.setTempRet0),
                (Runtime.getTempRet0 = asm.getTempRet0),
                (ExitStatus.prototype = new Error()),
                (ExitStatus.prototype.constructor = ExitStatus);
            var initialStackTop,
                preloadStartTime = null,
                calledMain = !1;
            (dependenciesFulfilled = function e() {
                Module.calledRun || run(),
                    Module.calledRun || (dependenciesFulfilled = e);
            }),
                (Module.callMain = Module.callMain =
                    function (e) {
                        function r() {
                            for (var e = 0; e < 3; e++) n.push(0);
                        }
                        assert(
                            0 == runDependencies,
                            'cannot call main when async dependencies remain! (listen on __ATMAIN__)',
                        ),
                            assert(
                                0 == __ATPRERUN__.length,
                                'cannot call main when preRun functions remain to be called',
                            ),
                            (e = e || []),
                            ensureInitRuntime();
                        var i = e.length + 1,
                            n = [
                                allocate(
                                    intArrayFromString(Module.thisProgram),
                                    'i8',
                                    ALLOC_NORMAL,
                                ),
                            ];
                        r();
                        for (var t = 0; t < i - 1; t += 1)
                            n.push(
                                allocate(
                                    intArrayFromString(e[t]),
                                    'i8',
                                    ALLOC_NORMAL,
                                ),
                            ),
                                r();
                        n.push(0), (n = allocate(n, 'i32', ALLOC_NORMAL));
                        try {
                            exit(Module._main(i, n, 0), !0);
                        } catch (e) {
                            if (e instanceof ExitStatus) return;
                            if ('SimulateInfiniteLoop' == e)
                                return void (Module.noExitRuntime = !0);
                            throw (
                                (e &&
                                    'object' == typeof e &&
                                    e.stack &&
                                    Module.printErr(
                                        'exception thrown: ' + [e, e.stack],
                                    ),
                                e)
                            );
                        } finally {
                            calledMain = !0;
                        }
                    }),
                (Module.run = Module.run = run),
                (Module.exit = Module.exit = exit);
            var abortDecorators = [];
            if (((Module.abort = Module.abort = abort), Module.preInit))
                for (
                    'function' == typeof Module.preInit &&
                    (Module.preInit = [Module.preInit]);
                    Module.preInit.length > 0;

                )
                    Module.preInit.pop()();
            var shouldRunNow = !0;
            return (
                Module.noInitialRun && (shouldRunNow = !1),
                (Module.noExitRuntime = !0),
                run(),
                Module
            );
        }),
        define('Core/defaultValue', ['./freezeObject'], function (e) {
            'use strict';
            function r(e, r) {
                return void 0 !== e && null !== e ? e : r;
            }
            return (r.EMPTY_OBJECT = e({})), r;
        }),
        define('Core/formatError', ['./defined'], function (e) {
            'use strict';
            function r(r) {
                var i,
                    n = r.name,
                    t = r.message;
                i = e(n) && e(t) ? n + ': ' + t : r.toString();
                var o = r.stack;
                return e(o) && (i += '\n' + o), i;
            }
            return r;
        }),
        define(
            'Workers/createTaskProcessorWorker',
            ['../Core/defaultValue', '../Core/defined', '../Core/formatError'],
            function (e, r, i) {
                'use strict';
                function n(n) {
                    var t,
                        o = [],
                        a = { id: void 0, result: void 0, error: void 0 };
                    return function (u) {
                        var s = u.data;
                        (o.length = 0),
                            (a.id = s.id),
                            (a.error = void 0),
                            (a.result = void 0);
                        try {
                            a.result = n(s.parameters, o);
                        } catch (e) {
                            e instanceof Error
                                ? (a.error = {
                                      name: e.name,
                                      message: e.message,
                                      stack: e.stack,
                                  })
                                : (a.error = e);
                        }
                        r(t) ||
                            (t = e(self.webkitPostMessage, self.postMessage)),
                            s.canTransferArrayBuffer || (o.length = 0);
                        try {
                            t(a, o);
                        } catch (e) {
                            (a.result = void 0),
                                (a.error =
                                    'postMessage failed with error: ' +
                                    i(e) +
                                    '\n  with responseMessage: ' +
                                    JSON.stringify(a)),
                                t(a);
                        }
                    };
                }
                return n;
            },
        ),
        define(
            'Workers/transcodeCRNToDXT',
            [
                '../Core/CompressedTextureBuffer',
                '../Core/defined',
                '../Core/PixelFormat',
                '../Core/RuntimeError',
                '../ThirdParty/crunch',
                './createTaskProcessorWorker',
            ],
            function (e, r, i, n, t, o) {
                'use strict';
                function a(e, r, i, n) {
                    var t,
                        o = i / 4,
                        a = n % 4,
                        u = new Uint32Array(e.buffer, 0, (n - a) / 4),
                        s = new Uint32Array(r.buffer);
                    for (t = 0; t < u.length; t++) s[o + t] = u[t];
                    for (t = n - a; t < n; t++) r[i + t] = e[t];
                }
                function u(o, u) {
                    var s = o.byteLength,
                        E = new Uint8Array(o),
                        T = t._malloc(s);
                    a(E, t.HEAPU8, T, s);
                    var d = t._crn_get_dxt_format(T, s),
                        A = l[d];
                    if (!r(A)) throw new n('Unsupported compressed format.');
                    var R,
                        M = t._crn_get_levels(T, s),
                        S = t._crn_get_width(T, s),
                        m = t._crn_get_height(T, s),
                        h = 0;
                    for (R = 0; R < M; ++R)
                        h += i.compressedTextureSizeInBytes(A, S >> R, m >> R);
                    c < h &&
                        (r(f) && t._free(f),
                        (f = t._malloc(h)),
                        (_ = new Uint8Array(t.HEAPU8.buffer, f, h)),
                        (c = h)),
                        t._crn_decompress(T, s, f, h, 0, M),
                        t._free(T);
                    var N = i.compressedTextureSizeInBytes(A, S, m),
                        C = _.subarray(0, N),
                        I = new Uint8Array(N);
                    return I.set(C, 0), u.push(I.buffer), new e(A, S, m, I);
                }
                var s = {
                        cCRNFmtInvalid: -1,
                        cCRNFmtDXT1: 0,
                        cCRNFmtDXT3: 1,
                        cCRNFmtDXT5: 2,
                    },
                    l = {};
                (l[s.cCRNFmtDXT1] = i.RGB_DXT1),
                    (l[s.cCRNFmtDXT3] = i.RGBA_DXT3),
                    (l[s.cCRNFmtDXT5] = i.RGBA_DXT5);
                var f,
                    _,
                    c = 0;
                return o(u);
            },
        );
})();
