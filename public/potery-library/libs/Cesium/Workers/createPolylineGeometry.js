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
@license
mersenne-twister.js - https://gist.github.com/banksean/300494

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

!(function () {
    define('Core/defined', [], function () {
        'use strict';
        function t(t) {
            return void 0 !== t && null !== t;
        }
        return t;
    }),
        define('Core/DeveloperError', ['./defined'], function (t) {
            'use strict';
            function e(t) {
                (this.name = 'DeveloperError'), (this.message = t);
                var e;
                try {
                    throw new Error();
                } catch (t) {
                    e = t.stack;
                }
                this.stack = e;
            }
            return (
                t(Object.create) &&
                    ((e.prototype = Object.create(Error.prototype)),
                    (e.prototype.constructor = e)),
                (e.prototype.toString = function () {
                    var e = this.name + ': ' + this.message;
                    return (
                        t(this.stack) && (e += '\n' + this.stack.toString()), e
                    );
                }),
                (e.throwInstantiationError = function () {
                    throw new e(
                        'This function defines an interface and should not be called directly.',
                    );
                }),
                e
            );
        }),
        define(
            'Core/Check',
            ['./defined', './DeveloperError'],
            function (t, e) {
                'use strict';
                function r(t) {
                    return t + ' is required, actual value was undefined';
                }
                function n(t, e, r) {
                    return (
                        'Expected ' +
                        r +
                        ' to be typeof ' +
                        e +
                        ', actual typeof was ' +
                        t
                    );
                }
                var a = {};
                return (
                    (a.typeOf = {}),
                    (a.defined = function (n, a) {
                        if (!t(a)) throw new e(r(n));
                    }),
                    (a.typeOf.func = function (t, r) {
                        if ('function' != typeof r)
                            throw new e(n(typeof r, 'function', t));
                    }),
                    (a.typeOf.string = function (t, r) {
                        if ('string' != typeof r)
                            throw new e(n(typeof r, 'string', t));
                    }),
                    (a.typeOf.number = function (t, r) {
                        if ('number' != typeof r)
                            throw new e(n(typeof r, 'number', t));
                    }),
                    (a.typeOf.number.lessThan = function (t, r, n) {
                        if ((a.typeOf.number(t, r), r >= n))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be less than ' +
                                    n +
                                    ', actual value was ' +
                                    r,
                            );
                    }),
                    (a.typeOf.number.lessThanOrEquals = function (t, r, n) {
                        if ((a.typeOf.number(t, r), r > n))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be less than or equal to ' +
                                    n +
                                    ', actual value was ' +
                                    r,
                            );
                    }),
                    (a.typeOf.number.greaterThan = function (t, r, n) {
                        if ((a.typeOf.number(t, r), r <= n))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be greater than ' +
                                    n +
                                    ', actual value was ' +
                                    r,
                            );
                    }),
                    (a.typeOf.number.greaterThanOrEquals = function (t, r, n) {
                        if ((a.typeOf.number(t, r), r < n))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be greater than or equal to' +
                                    n +
                                    ', actual value was ' +
                                    r,
                            );
                    }),
                    (a.typeOf.object = function (t, r) {
                        if ('object' != typeof r)
                            throw new e(n(typeof r, 'object', t));
                    }),
                    (a.typeOf.bool = function (t, r) {
                        if ('boolean' != typeof r)
                            throw new e(n(typeof r, 'boolean', t));
                    }),
                    (a.typeOf.number.equals = function (t, r, n, o) {
                        if (
                            (a.typeOf.number(t, n),
                            a.typeOf.number(r, o),
                            n !== o)
                        )
                            throw new e(
                                t +
                                    ' must be equal to ' +
                                    r +
                                    ', the actual values are ' +
                                    n +
                                    ' and ' +
                                    o,
                            );
                    }),
                    a
                );
            },
        ),
        define('Core/freezeObject', ['./defined'], function (t) {
            'use strict';
            var e = Object.freeze;
            return (
                t(e) ||
                    (e = function (t) {
                        return t;
                    }),
                e
            );
        }),
        define('Core/defaultValue', ['./freezeObject'], function (t) {
            'use strict';
            function e(t, e) {
                return void 0 !== t && null !== t ? t : e;
            }
            return (e.EMPTY_OBJECT = t({})), e;
        }),
        define('ThirdParty/mersenne-twister', [], function () {
            var t = function (t) {
                void 0 == t && (t = new Date().getTime()),
                    (this.N = 624),
                    (this.M = 397),
                    (this.MATRIX_A = 2567483615),
                    (this.UPPER_MASK = 2147483648),
                    (this.LOWER_MASK = 2147483647),
                    (this.mt = new Array(this.N)),
                    (this.mti = this.N + 1),
                    this.init_genrand(t);
            };
            return (
                (t.prototype.init_genrand = function (t) {
                    for (
                        this.mt[0] = t >>> 0, this.mti = 1;
                        this.mti < this.N;
                        this.mti++
                    ) {
                        var t =
                            this.mt[this.mti - 1] ^
                            (this.mt[this.mti - 1] >>> 30);
                        (this.mt[this.mti] =
                            ((1812433253 * ((4294901760 & t) >>> 16)) << 16) +
                            1812433253 * (65535 & t) +
                            this.mti),
                            (this.mt[this.mti] >>>= 0);
                    }
                }),
                (t.prototype.genrand_int32 = function () {
                    var t,
                        e = new Array(0, this.MATRIX_A);
                    if (this.mti >= this.N) {
                        var r;
                        for (
                            this.mti == this.N + 1 && this.init_genrand(5489),
                                r = 0;
                            r < this.N - this.M;
                            r++
                        )
                            (t =
                                (this.mt[r] & this.UPPER_MASK) |
                                (this.mt[r + 1] & this.LOWER_MASK)),
                                (this.mt[r] =
                                    this.mt[r + this.M] ^ (t >>> 1) ^ e[1 & t]);
                        for (; r < this.N - 1; r++)
                            (t =
                                (this.mt[r] & this.UPPER_MASK) |
                                (this.mt[r + 1] & this.LOWER_MASK)),
                                (this.mt[r] =
                                    this.mt[r + (this.M - this.N)] ^
                                    (t >>> 1) ^
                                    e[1 & t]);
                        (t =
                            (this.mt[this.N - 1] & this.UPPER_MASK) |
                            (this.mt[0] & this.LOWER_MASK)),
                            (this.mt[this.N - 1] =
                                this.mt[this.M - 1] ^ (t >>> 1) ^ e[1 & t]),
                            (this.mti = 0);
                    }
                    return (
                        (t = this.mt[this.mti++]),
                        (t ^= t >>> 11),
                        (t ^= (t << 7) & 2636928640),
                        (t ^= (t << 15) & 4022730752),
                        (t ^= t >>> 18) >>> 0
                    );
                }),
                (t.prototype.random = function () {
                    return this.genrand_int32() * (1 / 4294967296);
                }),
                t
            );
        }),
        define(
            'Core/Math',
            [
                '../ThirdParty/mersenne-twister',
                './defaultValue',
                './defined',
                './DeveloperError',
            ],
            function (t, e, r, n) {
                'use strict';
                var a = {};
                (a.EPSILON1 = 0.1),
                    (a.EPSILON2 = 0.01),
                    (a.EPSILON3 = 0.001),
                    (a.EPSILON4 = 1e-4),
                    (a.EPSILON5 = 1e-5),
                    (a.EPSILON6 = 1e-6),
                    (a.EPSILON7 = 1e-7),
                    (a.EPSILON8 = 1e-8),
                    (a.EPSILON9 = 1e-9),
                    (a.EPSILON10 = 1e-10),
                    (a.EPSILON11 = 1e-11),
                    (a.EPSILON12 = 1e-12),
                    (a.EPSILON13 = 1e-13),
                    (a.EPSILON14 = 1e-14),
                    (a.EPSILON15 = 1e-15),
                    (a.EPSILON16 = 1e-16),
                    (a.EPSILON17 = 1e-17),
                    (a.EPSILON18 = 1e-18),
                    (a.EPSILON19 = 1e-19),
                    (a.EPSILON20 = 1e-20),
                    (a.GRAVITATIONALPARAMETER = 3986004418e5),
                    (a.SOLAR_RADIUS = 6955e5),
                    (a.LUNAR_RADIUS = 1737400),
                    (a.SIXTY_FOUR_KILOBYTES = 65536),
                    (a.sign = function (t) {
                        return t > 0 ? 1 : t < 0 ? -1 : 0;
                    }),
                    (a.signNotZero = function (t) {
                        return t < 0 ? -1 : 1;
                    }),
                    (a.toSNorm = function (t, r) {
                        return (
                            (r = e(r, 255)),
                            Math.round((0.5 * a.clamp(t, -1, 1) + 0.5) * r)
                        );
                    }),
                    (a.fromSNorm = function (t, r) {
                        return (r = e(r, 255)), (a.clamp(t, 0, r) / r) * 2 - 1;
                    }),
                    (a.sinh = function (t) {
                        return (
                            0.5 *
                            (Math.pow(Math.E, t) - Math.pow(Math.E, -1 * t))
                        );
                    }),
                    (a.cosh = function (t) {
                        return (
                            0.5 *
                            (Math.pow(Math.E, t) + Math.pow(Math.E, -1 * t))
                        );
                    }),
                    (a.lerp = function (t, e, r) {
                        return (1 - r) * t + r * e;
                    }),
                    (a.PI = Math.PI),
                    (a.ONE_OVER_PI = 1 / Math.PI),
                    (a.PI_OVER_TWO = 0.5 * Math.PI),
                    (a.PI_OVER_THREE = Math.PI / 3),
                    (a.PI_OVER_FOUR = Math.PI / 4),
                    (a.PI_OVER_SIX = Math.PI / 6),
                    (a.THREE_PI_OVER_TWO = 3 * Math.PI * 0.5),
                    (a.TWO_PI = 2 * Math.PI),
                    (a.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
                    (a.RADIANS_PER_DEGREE = Math.PI / 180),
                    (a.DEGREES_PER_RADIAN = 180 / Math.PI),
                    (a.RADIANS_PER_ARCSECOND = a.RADIANS_PER_DEGREE / 3600),
                    (a.toRadians = function (t) {
                        return t * a.RADIANS_PER_DEGREE;
                    }),
                    (a.toDegrees = function (t) {
                        return t * a.DEGREES_PER_RADIAN;
                    }),
                    (a.convertLongitudeRange = function (t) {
                        var e = a.TWO_PI,
                            r = t - Math.floor(t / e) * e;
                        return r < -Math.PI ? r + e : r >= Math.PI ? r - e : r;
                    }),
                    (a.clampToLatitudeRange = function (t) {
                        return a.clamp(t, -1 * a.PI_OVER_TWO, a.PI_OVER_TWO);
                    }),
                    (a.negativePiToPi = function (t) {
                        return a.zeroToTwoPi(t + a.PI) - a.PI;
                    }),
                    (a.zeroToTwoPi = function (t) {
                        var e = a.mod(t, a.TWO_PI);
                        return Math.abs(e) < a.EPSILON14 &&
                            Math.abs(t) > a.EPSILON14
                            ? a.TWO_PI
                            : e;
                    }),
                    (a.mod = function (t, e) {
                        return ((t % e) + e) % e;
                    }),
                    (a.equalsEpsilon = function (t, r, n, a) {
                        a = e(a, n);
                        var o = Math.abs(t - r);
                        return (
                            o <= a ||
                            o <= n * Math.max(Math.abs(t), Math.abs(r))
                        );
                    });
                var o = [1];
                (a.factorial = function (t) {
                    var e = o.length;
                    if (t >= e)
                        for (var r = o[e - 1], n = e; n <= t; n++)
                            o.push(r * n);
                    return o[t];
                }),
                    (a.incrementWrap = function (t, r, n) {
                        return (n = e(n, 0)), ++t, t > r && (t = n), t;
                    }),
                    (a.isPowerOfTwo = function (t) {
                        return 0 !== t && 0 == (t & (t - 1));
                    }),
                    (a.nextPowerOfTwo = function (t) {
                        return (
                            --t,
                            (t |= t >> 1),
                            (t |= t >> 2),
                            (t |= t >> 4),
                            (t |= t >> 8),
                            (t |= t >> 16),
                            ++t
                        );
                    }),
                    (a.clamp = function (t, e, r) {
                        return t < e ? e : t > r ? r : t;
                    });
                var i = new t();
                return (
                    (a.setRandomNumberSeed = function (e) {
                        i = new t(e);
                    }),
                    (a.nextRandomNumber = function () {
                        return i.random();
                    }),
                    (a.randomBetween = function (t, e) {
                        return a.nextRandomNumber() * (e - t) + t;
                    }),
                    (a.acosClamped = function (t) {
                        return Math.acos(a.clamp(t, -1, 1));
                    }),
                    (a.asinClamped = function (t) {
                        return Math.asin(a.clamp(t, -1, 1));
                    }),
                    (a.chordLength = function (t, e) {
                        return 2 * e * Math.sin(0.5 * t);
                    }),
                    (a.logBase = function (t, e) {
                        return Math.log(t) / Math.log(e);
                    }),
                    (a.fog = function (t, e) {
                        var r = t * e;
                        return 1 - Math.exp(-r * r);
                    }),
                    a
                );
            },
        ),
        define(
            'Core/Cartesian3',
            [
                './Check',
                './defaultValue',
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
            ],
            function (t, e, r, n, a, o) {
                'use strict';
                function i(t, r, n) {
                    (this.x = e(t, 0)), (this.y = e(r, 0)), (this.z = e(n, 0));
                }
                (i.fromSpherical = function (t, n) {
                    r(n) || (n = new i());
                    var a = t.clock,
                        o = t.cone,
                        u = e(t.magnitude, 1),
                        s = u * Math.sin(o);
                    return (
                        (n.x = s * Math.cos(a)),
                        (n.y = s * Math.sin(a)),
                        (n.z = u * Math.cos(o)),
                        n
                    );
                }),
                    (i.fromElements = function (t, e, n, a) {
                        return r(a)
                            ? ((a.x = t), (a.y = e), (a.z = n), a)
                            : new i(t, e, n);
                    }),
                    (i.clone = function (t, e) {
                        if (r(t))
                            return r(e)
                                ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), e)
                                : new i(t.x, t.y, t.z);
                    }),
                    (i.fromCartesian4 = i.clone),
                    (i.packedLength = 3),
                    (i.pack = function (t, r, n) {
                        return (
                            (n = e(n, 0)),
                            (r[n++] = t.x),
                            (r[n++] = t.y),
                            (r[n] = t.z),
                            r
                        );
                    }),
                    (i.unpack = function (t, n, a) {
                        return (
                            (n = e(n, 0)),
                            r(a) || (a = new i()),
                            (a.x = t[n++]),
                            (a.y = t[n++]),
                            (a.z = t[n]),
                            a
                        );
                    }),
                    (i.packArray = function (t, e) {
                        var n = t.length;
                        r(e) ? (e.length = 3 * n) : (e = new Array(3 * n));
                        for (var a = 0; a < n; ++a) i.pack(t[a], e, 3 * a);
                        return e;
                    }),
                    (i.unpackArray = function (t, e) {
                        var n = t.length;
                        r(e) ? (e.length = n / 3) : (e = new Array(n / 3));
                        for (var a = 0; a < n; a += 3) {
                            var o = a / 3;
                            e[o] = i.unpack(t, a, e[o]);
                        }
                        return e;
                    }),
                    (i.fromArray = i.unpack),
                    (i.maximumComponent = function (t) {
                        return Math.max(t.x, t.y, t.z);
                    }),
                    (i.minimumComponent = function (t) {
                        return Math.min(t.x, t.y, t.z);
                    }),
                    (i.minimumByComponent = function (t, e, r) {
                        return (
                            (r.x = Math.min(t.x, e.x)),
                            (r.y = Math.min(t.y, e.y)),
                            (r.z = Math.min(t.z, e.z)),
                            r
                        );
                    }),
                    (i.maximumByComponent = function (t, e, r) {
                        return (
                            (r.x = Math.max(t.x, e.x)),
                            (r.y = Math.max(t.y, e.y)),
                            (r.z = Math.max(t.z, e.z)),
                            r
                        );
                    }),
                    (i.magnitudeSquared = function (t) {
                        return t.x * t.x + t.y * t.y + t.z * t.z;
                    }),
                    (i.magnitude = function (t) {
                        return Math.sqrt(i.magnitudeSquared(t));
                    });
                var u = new i();
                (i.distance = function (t, e) {
                    return i.subtract(t, e, u), i.magnitude(u);
                }),
                    (i.distanceSquared = function (t, e) {
                        return i.subtract(t, e, u), i.magnitudeSquared(u);
                    }),
                    (i.normalize = function (t, e) {
                        var r = i.magnitude(t);
                        return (
                            (e.x = t.x / r), (e.y = t.y / r), (e.z = t.z / r), e
                        );
                    }),
                    (i.dot = function (t, e) {
                        return t.x * e.x + t.y * e.y + t.z * e.z;
                    }),
                    (i.multiplyComponents = function (t, e, r) {
                        return (
                            (r.x = t.x * e.x),
                            (r.y = t.y * e.y),
                            (r.z = t.z * e.z),
                            r
                        );
                    }),
                    (i.divideComponents = function (t, e, r) {
                        return (
                            (r.x = t.x / e.x),
                            (r.y = t.y / e.y),
                            (r.z = t.z / e.z),
                            r
                        );
                    }),
                    (i.add = function (t, e, r) {
                        return (
                            (r.x = t.x + e.x),
                            (r.y = t.y + e.y),
                            (r.z = t.z + e.z),
                            r
                        );
                    }),
                    (i.subtract = function (t, e, r) {
                        return (
                            (r.x = t.x - e.x),
                            (r.y = t.y - e.y),
                            (r.z = t.z - e.z),
                            r
                        );
                    }),
                    (i.multiplyByScalar = function (t, e, r) {
                        return (
                            (r.x = t.x * e), (r.y = t.y * e), (r.z = t.z * e), r
                        );
                    }),
                    (i.divideByScalar = function (t, e, r) {
                        return (
                            (r.x = t.x / e), (r.y = t.y / e), (r.z = t.z / e), r
                        );
                    }),
                    (i.negate = function (t, e) {
                        return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), e;
                    }),
                    (i.abs = function (t, e) {
                        return (
                            (e.x = Math.abs(t.x)),
                            (e.y = Math.abs(t.y)),
                            (e.z = Math.abs(t.z)),
                            e
                        );
                    });
                var s = new i();
                i.lerp = function (t, e, r, n) {
                    return (
                        i.multiplyByScalar(e, r, s),
                        (n = i.multiplyByScalar(t, 1 - r, n)),
                        i.add(s, n, n)
                    );
                };
                var E = new i(),
                    c = new i();
                i.angleBetween = function (t, e) {
                    i.normalize(t, E), i.normalize(e, c);
                    var r = i.dot(E, c),
                        n = i.magnitude(i.cross(E, c, E));
                    return Math.atan2(n, r);
                };
                var l = new i();
                (i.mostOrthogonalAxis = function (t, e) {
                    var r = i.normalize(t, l);
                    return (
                        i.abs(r, r),
                        (e =
                            r.x <= r.y
                                ? r.x <= r.z
                                    ? i.clone(i.UNIT_X, e)
                                    : i.clone(i.UNIT_Z, e)
                                : r.y <= r.z
                                  ? i.clone(i.UNIT_Y, e)
                                  : i.clone(i.UNIT_Z, e))
                    );
                }),
                    (i.equals = function (t, e) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                t.x === e.x &&
                                t.y === e.y &&
                                t.z === e.z)
                        );
                    }),
                    (i.equalsArray = function (t, e, r) {
                        return (
                            t.x === e[r] && t.y === e[r + 1] && t.z === e[r + 2]
                        );
                    }),
                    (i.equalsEpsilon = function (t, e, n, a) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                o.equalsEpsilon(t.x, e.x, n, a) &&
                                o.equalsEpsilon(t.y, e.y, n, a) &&
                                o.equalsEpsilon(t.z, e.z, n, a))
                        );
                    }),
                    (i.cross = function (t, e, r) {
                        var n = t.x,
                            a = t.y,
                            o = t.z,
                            i = e.x,
                            u = e.y,
                            s = e.z,
                            E = a * s - o * u,
                            c = o * i - n * s,
                            l = n * u - a * i;
                        return (r.x = E), (r.y = c), (r.z = l), r;
                    }),
                    (i.fromDegrees = function (t, e, r, n, a) {
                        return (
                            (t = o.toRadians(t)),
                            (e = o.toRadians(e)),
                            i.fromRadians(t, e, r, n, a)
                        );
                    });
                var f = new i(),
                    _ = new i(),
                    R = new i(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (i.fromRadians = function (t, n, a, o, u) {
                        a = e(a, 0);
                        var s = r(o) ? o.radiiSquared : R,
                            E = Math.cos(n);
                        (f.x = E * Math.cos(t)),
                            (f.y = E * Math.sin(t)),
                            (f.z = Math.sin(n)),
                            (f = i.normalize(f, f)),
                            i.multiplyComponents(s, f, _);
                        var c = Math.sqrt(i.dot(f, _));
                        return (
                            (_ = i.divideByScalar(_, c, _)),
                            (f = i.multiplyByScalar(f, a, f)),
                            r(u) || (u = new i()),
                            i.add(_, f, u)
                        );
                    }),
                    (i.fromDegreesArray = function (t, e, n) {
                        var a = t.length;
                        r(n) ? (n.length = a / 2) : (n = new Array(a / 2));
                        for (var o = 0; o < a; o += 2) {
                            var u = t[o],
                                s = t[o + 1],
                                E = o / 2;
                            n[E] = i.fromDegrees(u, s, 0, e, n[E]);
                        }
                        return n;
                    }),
                    (i.fromRadiansArray = function (t, e, n) {
                        var a = t.length;
                        r(n) ? (n.length = a / 2) : (n = new Array(a / 2));
                        for (var o = 0; o < a; o += 2) {
                            var u = t[o],
                                s = t[o + 1],
                                E = o / 2;
                            n[E] = i.fromRadians(u, s, 0, e, n[E]);
                        }
                        return n;
                    }),
                    (i.fromDegreesArrayHeights = function (t, e, n) {
                        var a = t.length;
                        r(n) ? (n.length = a / 3) : (n = new Array(a / 3));
                        for (var o = 0; o < a; o += 3) {
                            var u = t[o],
                                s = t[o + 1],
                                E = t[o + 2],
                                c = o / 3;
                            n[c] = i.fromDegrees(u, s, E, e, n[c]);
                        }
                        return n;
                    }),
                    (i.fromRadiansArrayHeights = function (t, e, n) {
                        var a = t.length;
                        r(n) ? (n.length = a / 3) : (n = new Array(a / 3));
                        for (var o = 0; o < a; o += 3) {
                            var u = t[o],
                                s = t[o + 1],
                                E = t[o + 2],
                                c = o / 3;
                            n[c] = i.fromRadians(u, s, E, e, n[c]);
                        }
                        return n;
                    }),
                    (i.ZERO = a(new i(0, 0, 0))),
                    (i.UNIT_X = a(new i(1, 0, 0))),
                    (i.UNIT_Y = a(new i(0, 1, 0))),
                    (i.UNIT_Z = a(new i(0, 0, 1))),
                    (i.prototype.clone = function (t) {
                        return i.clone(this, t);
                    }),
                    (i.prototype.equals = function (t) {
                        return i.equals(this, t);
                    }),
                    (i.prototype.equalsEpsilon = function (t, e, r) {
                        return i.equalsEpsilon(this, t, e, r);
                    }),
                    (i.prototype.toString = function () {
                        return (
                            '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
                        );
                    }),
                    i
                );
            },
        ),
        define(
            'Core/scaleToGeodeticSurface',
            ['./Cartesian3', './defined', './DeveloperError', './Math'],
            function (t, e, r, n) {
                'use strict';
                function a(r, a, u, s, E) {
                    var c = r.x,
                        l = r.y,
                        f = r.z,
                        _ = a.x,
                        R = a.y,
                        h = a.z,
                        T = c * c * _ * _,
                        A = l * l * R * R,
                        d = f * f * h * h,
                        S = T + A + d,
                        m = Math.sqrt(1 / S),
                        N = t.multiplyByScalar(r, m, o);
                    if (S < s) return isFinite(m) ? t.clone(N, E) : void 0;
                    var C = u.x,
                        I = u.y,
                        p = u.z,
                        M = i;
                    (M.x = N.x * C * 2),
                        (M.y = N.y * I * 2),
                        (M.z = N.z * p * 2);
                    var O,
                        g,
                        y,
                        F,
                        L,
                        v,
                        U,
                        D,
                        P,
                        w,
                        B,
                        x = ((1 - m) * t.magnitude(r)) / (0.5 * t.magnitude(M)),
                        G = 0;
                    do {
                        (x -= G),
                            (y = 1 / (1 + x * C)),
                            (F = 1 / (1 + x * I)),
                            (L = 1 / (1 + x * p)),
                            (v = y * y),
                            (U = F * F),
                            (D = L * L),
                            (P = v * y),
                            (w = U * F),
                            (B = D * L),
                            (O = T * v + A * U + d * D - 1),
                            (g = T * P * C + A * w * I + d * B * p);
                        G = O / (-2 * g);
                    } while (Math.abs(O) > n.EPSILON12);
                    return e(E)
                        ? ((E.x = c * y), (E.y = l * F), (E.z = f * L), E)
                        : new t(c * y, l * F, f * L);
                }
                var o = new t(),
                    i = new t();
                return a;
            },
        ),
        define(
            'Core/Cartographic',
            [
                './Cartesian3',
                './Check',
                './defaultValue',
                './defined',
                './freezeObject',
                './Math',
                './scaleToGeodeticSurface',
            ],
            function (t, e, r, n, a, o, i) {
                'use strict';
                function u(t, e, n) {
                    (this.longitude = r(t, 0)),
                        (this.latitude = r(e, 0)),
                        (this.height = r(n, 0));
                }
                (u.fromRadians = function (t, e, a, o) {
                    return (
                        (a = r(a, 0)),
                        n(o)
                            ? ((o.longitude = t),
                              (o.latitude = e),
                              (o.height = a),
                              o)
                            : new u(t, e, a)
                    );
                }),
                    (u.fromDegrees = function (t, e, r, n) {
                        return (
                            (t = o.toRadians(t)),
                            (e = o.toRadians(e)),
                            u.fromRadians(t, e, r, n)
                        );
                    });
                var s = new t(),
                    E = new t(),
                    c = new t(),
                    l = new t(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                    f = new t(
                        1 / 40680631590769,
                        1 / 40680631590769,
                        1 / 40408299984661.445,
                    ),
                    _ = o.EPSILON1;
                return (
                    (u.fromCartesian = function (e, r, a) {
                        var R = n(r) ? r.oneOverRadii : l,
                            h = n(r) ? r.oneOverRadiiSquared : f,
                            T = n(r) ? r._centerToleranceSquared : _,
                            A = i(e, R, h, T, E);
                        if (n(A)) {
                            var d = t.multiplyComponents(A, h, s);
                            d = t.normalize(d, d);
                            var S = t.subtract(e, A, c),
                                m = Math.atan2(d.y, d.x),
                                N = Math.asin(d.z),
                                C = o.sign(t.dot(S, e)) * t.magnitude(S);
                            return n(a)
                                ? ((a.longitude = m),
                                  (a.latitude = N),
                                  (a.height = C),
                                  a)
                                : new u(m, N, C);
                        }
                    }),
                    (u.clone = function (t, e) {
                        if (n(t))
                            return n(e)
                                ? ((e.longitude = t.longitude),
                                  (e.latitude = t.latitude),
                                  (e.height = t.height),
                                  e)
                                : new u(t.longitude, t.latitude, t.height);
                    }),
                    (u.equals = function (t, e) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                t.longitude === e.longitude &&
                                t.latitude === e.latitude &&
                                t.height === e.height)
                        );
                    }),
                    (u.equalsEpsilon = function (t, e, r) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                Math.abs(t.longitude - e.longitude) <= r &&
                                Math.abs(t.latitude - e.latitude) <= r &&
                                Math.abs(t.height - e.height) <= r)
                        );
                    }),
                    (u.ZERO = a(new u(0, 0, 0))),
                    (u.prototype.clone = function (t) {
                        return u.clone(this, t);
                    }),
                    (u.prototype.equals = function (t) {
                        return u.equals(this, t);
                    }),
                    (u.prototype.equalsEpsilon = function (t, e) {
                        return u.equalsEpsilon(this, t, e);
                    }),
                    (u.prototype.toString = function () {
                        return (
                            '(' +
                            this.longitude +
                            ', ' +
                            this.latitude +
                            ', ' +
                            this.height +
                            ')'
                        );
                    }),
                    u
                );
            },
        ),
        define('Core/defineProperties', ['./defined'], function (t) {
            'use strict';
            var e = (function () {
                    try {
                        return 'x' in Object.defineProperty({}, 'x', {});
                    } catch (t) {
                        return !1;
                    }
                })(),
                r = Object.defineProperties;
            return (
                (e && t(r)) ||
                    (r = function (t) {
                        return t;
                    }),
                r
            );
        }),
        define(
            'Core/Ellipsoid',
            [
                './Cartesian3',
                './Cartographic',
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './freezeObject',
                './Math',
                './scaleToGeodeticSurface',
            ],
            function (t, e, r, n, a, o, i, u, s, E) {
                'use strict';
                function c(e, r, a, o) {
                    (r = n(r, 0)),
                        (a = n(a, 0)),
                        (o = n(o, 0)),
                        (e._radii = new t(r, a, o)),
                        (e._radiiSquared = new t(r * r, a * a, o * o)),
                        (e._radiiToTheFourth = new t(
                            r * r * r * r,
                            a * a * a * a,
                            o * o * o * o,
                        )),
                        (e._oneOverRadii = new t(
                            0 === r ? 0 : 1 / r,
                            0 === a ? 0 : 1 / a,
                            0 === o ? 0 : 1 / o,
                        )),
                        (e._oneOverRadiiSquared = new t(
                            0 === r ? 0 : 1 / (r * r),
                            0 === a ? 0 : 1 / (a * a),
                            0 === o ? 0 : 1 / (o * o),
                        )),
                        (e._minimumRadius = Math.min(r, a, o)),
                        (e._maximumRadius = Math.max(r, a, o)),
                        (e._centerToleranceSquared = s.EPSILON1),
                        0 !== e._radiiSquared.z &&
                            (e._squaredXOverSquaredZ =
                                e._radiiSquared.x / e._radiiSquared.z);
                }
                function l(t, e, r) {
                    (this._radii = void 0),
                        (this._radiiSquared = void 0),
                        (this._radiiToTheFourth = void 0),
                        (this._oneOverRadii = void 0),
                        (this._oneOverRadiiSquared = void 0),
                        (this._minimumRadius = void 0),
                        (this._maximumRadius = void 0),
                        (this._centerToleranceSquared = void 0),
                        (this._squaredXOverSquaredZ = void 0),
                        c(this, t, e, r);
                }
                o(l.prototype, {
                    radii: {
                        get: function () {
                            return this._radii;
                        },
                    },
                    radiiSquared: {
                        get: function () {
                            return this._radiiSquared;
                        },
                    },
                    radiiToTheFourth: {
                        get: function () {
                            return this._radiiToTheFourth;
                        },
                    },
                    oneOverRadii: {
                        get: function () {
                            return this._oneOverRadii;
                        },
                    },
                    oneOverRadiiSquared: {
                        get: function () {
                            return this._oneOverRadiiSquared;
                        },
                    },
                    minimumRadius: {
                        get: function () {
                            return this._minimumRadius;
                        },
                    },
                    maximumRadius: {
                        get: function () {
                            return this._maximumRadius;
                        },
                    },
                }),
                    (l.clone = function (e, r) {
                        if (a(e)) {
                            var n = e._radii;
                            return a(r)
                                ? (t.clone(n, r._radii),
                                  t.clone(e._radiiSquared, r._radiiSquared),
                                  t.clone(
                                      e._radiiToTheFourth,
                                      r._radiiToTheFourth,
                                  ),
                                  t.clone(e._oneOverRadii, r._oneOverRadii),
                                  t.clone(
                                      e._oneOverRadiiSquared,
                                      r._oneOverRadiiSquared,
                                  ),
                                  (r._minimumRadius = e._minimumRadius),
                                  (r._maximumRadius = e._maximumRadius),
                                  (r._centerToleranceSquared =
                                      e._centerToleranceSquared),
                                  r)
                                : new l(n.x, n.y, n.z);
                        }
                    }),
                    (l.fromCartesian3 = function (t, e) {
                        return (
                            a(e) || (e = new l()),
                            a(t) ? (c(e, t.x, t.y, t.z), e) : e
                        );
                    }),
                    (l.WGS84 = u(new l(6378137, 6378137, 6356752.314245179))),
                    (l.UNIT_SPHERE = u(new l(1, 1, 1))),
                    (l.MOON = u(
                        new l(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS),
                    )),
                    (l.prototype.clone = function (t) {
                        return l.clone(this, t);
                    }),
                    (l.packedLength = t.packedLength),
                    (l.pack = function (e, r, a) {
                        return (a = n(a, 0)), t.pack(e._radii, r, a), r;
                    }),
                    (l.unpack = function (e, r, a) {
                        r = n(r, 0);
                        var o = t.unpack(e, r);
                        return l.fromCartesian3(o, a);
                    }),
                    (l.prototype.geocentricSurfaceNormal = t.normalize),
                    (l.prototype.geodeticSurfaceNormalCartographic = function (
                        e,
                        r,
                    ) {
                        var n = e.longitude,
                            o = e.latitude,
                            i = Math.cos(o),
                            u = i * Math.cos(n),
                            s = i * Math.sin(n),
                            E = Math.sin(o);
                        return (
                            a(r) || (r = new t()),
                            (r.x = u),
                            (r.y = s),
                            (r.z = E),
                            t.normalize(r, r)
                        );
                    }),
                    (l.prototype.geodeticSurfaceNormal = function (e, r) {
                        return (
                            a(r) || (r = new t()),
                            (r = t.multiplyComponents(
                                e,
                                this._oneOverRadiiSquared,
                                r,
                            )),
                            t.normalize(r, r)
                        );
                    });
                var f = new t(),
                    _ = new t();
                (l.prototype.cartographicToCartesian = function (e, r) {
                    var n = f,
                        o = _;
                    this.geodeticSurfaceNormalCartographic(e, n),
                        t.multiplyComponents(this._radiiSquared, n, o);
                    var i = Math.sqrt(t.dot(n, o));
                    return (
                        t.divideByScalar(o, i, o),
                        t.multiplyByScalar(n, e.height, n),
                        a(r) || (r = new t()),
                        t.add(o, n, r)
                    );
                }),
                    (l.prototype.cartographicArrayToCartesianArray = function (
                        t,
                        e,
                    ) {
                        var r = t.length;
                        a(e) ? (e.length = r) : (e = new Array(r));
                        for (var n = 0; n < r; n++)
                            e[n] = this.cartographicToCartesian(t[n], e[n]);
                        return e;
                    });
                var R = new t(),
                    h = new t(),
                    T = new t();
                return (
                    (l.prototype.cartesianToCartographic = function (r, n) {
                        var o = this.scaleToGeodeticSurface(r, h);
                        if (a(o)) {
                            var i = this.geodeticSurfaceNormal(o, R),
                                u = t.subtract(r, o, T),
                                E = Math.atan2(i.y, i.x),
                                c = Math.asin(i.z),
                                l = s.sign(t.dot(u, r)) * t.magnitude(u);
                            return a(n)
                                ? ((n.longitude = E),
                                  (n.latitude = c),
                                  (n.height = l),
                                  n)
                                : new e(E, c, l);
                        }
                    }),
                    (l.prototype.cartesianArrayToCartographicArray = function (
                        t,
                        e,
                    ) {
                        var r = t.length;
                        a(e) ? (e.length = r) : (e = new Array(r));
                        for (var n = 0; n < r; ++n)
                            e[n] = this.cartesianToCartographic(t[n], e[n]);
                        return e;
                    }),
                    (l.prototype.scaleToGeodeticSurface = function (t, e) {
                        return E(
                            t,
                            this._oneOverRadii,
                            this._oneOverRadiiSquared,
                            this._centerToleranceSquared,
                            e,
                        );
                    }),
                    (l.prototype.scaleToGeocentricSurface = function (e, r) {
                        a(r) || (r = new t());
                        var n = e.x,
                            o = e.y,
                            i = e.z,
                            u = this._oneOverRadiiSquared,
                            s =
                                1 /
                                Math.sqrt(
                                    n * n * u.x + o * o * u.y + i * i * u.z,
                                );
                        return t.multiplyByScalar(e, s, r);
                    }),
                    (l.prototype.transformPositionToScaledSpace = function (
                        e,
                        r,
                    ) {
                        return (
                            a(r) || (r = new t()),
                            t.multiplyComponents(e, this._oneOverRadii, r)
                        );
                    }),
                    (l.prototype.transformPositionFromScaledSpace = function (
                        e,
                        r,
                    ) {
                        return (
                            a(r) || (r = new t()),
                            t.multiplyComponents(e, this._radii, r)
                        );
                    }),
                    (l.prototype.equals = function (e) {
                        return (
                            this === e ||
                            (a(e) && t.equals(this._radii, e._radii))
                        );
                    }),
                    (l.prototype.toString = function () {
                        return this._radii.toString();
                    }),
                    (l.prototype.getSurfaceNormalIntersectionWithZAxis =
                        function (e, r, o) {
                            r = n(r, 0);
                            var i = this._squaredXOverSquaredZ;
                            if (
                                (a(o) || (o = new t()),
                                (o.x = 0),
                                (o.y = 0),
                                (o.z = e.z * (1 - i)),
                                !(Math.abs(o.z) >= this._radii.z - r))
                            )
                                return o;
                        }),
                    l
                );
            },
        ),
        define(
            'Core/arrayRemoveDuplicates',
            ['./Check', './defaultValue', './defined', './Math'],
            function (t, e, r, n) {
                'use strict';
                function a(t, n, a) {
                    if (r(t)) {
                        a = e(a, !1);
                        var i = t.length;
                        if (i < 2) return t;
                        var u, s, E;
                        for (
                            u = 1;
                            u < i && ((s = t[u - 1]), (E = t[u]), !n(s, E, o));
                            ++u
                        );
                        if (u === i)
                            return a && n(t[0], t[t.length - 1], o)
                                ? t.slice(1)
                                : t;
                        for (var c = t.slice(0, u); u < i; ++u)
                            (E = t[u]), n(s, E, o) || (c.push(E), (s = E));
                        return (
                            a &&
                                c.length > 1 &&
                                n(c[0], c[c.length - 1], o) &&
                                c.shift(),
                            c
                        );
                    }
                }
                var o = n.EPSILON10;
                return a;
            },
        ),
        define(
            'Core/GeographicProjection',
            [
                './Cartesian3',
                './Cartographic',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './Ellipsoid',
            ],
            function (t, e, r, n, a, o, i) {
                'use strict';
                function u(t) {
                    (this._ellipsoid = r(t, i.WGS84)),
                        (this._semimajorAxis = this._ellipsoid.maximumRadius),
                        (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
                }
                return (
                    a(u.prototype, {
                        ellipsoid: {
                            get: function () {
                                return this._ellipsoid;
                            },
                        },
                    }),
                    (u.prototype.project = function (e, r) {
                        var a = this._semimajorAxis,
                            o = e.longitude * a,
                            i = e.latitude * a,
                            u = e.height;
                        return n(r)
                            ? ((r.x = o), (r.y = i), (r.z = u), r)
                            : new t(o, i, u);
                    }),
                    (u.prototype.unproject = function (t, r) {
                        var a = this._oneOverSemimajorAxis,
                            o = t.x * a,
                            i = t.y * a,
                            u = t.z;
                        return n(r)
                            ? ((r.longitude = o),
                              (r.latitude = i),
                              (r.height = u),
                              r)
                            : new e(o, i, u);
                    }),
                    u
                );
            },
        ),
        define('Core/Intersect', ['./freezeObject'], function (t) {
            'use strict';
            return t({ OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 });
        }),
        define('Core/Interval', ['./defaultValue'], function (t) {
            'use strict';
            function e(e, r) {
                (this.start = t(e, 0)), (this.stop = t(r, 0));
            }
            return e;
        }),
        define(
            'Core/Matrix3',
            [
                './Cartesian3',
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './freezeObject',
                './Math',
            ],
            function (t, e, r, n, a, o, i, u) {
                'use strict';
                function s(t, e, n, a, o, i, u, s, E) {
                    (this[0] = r(t, 0)),
                        (this[1] = r(a, 0)),
                        (this[2] = r(u, 0)),
                        (this[3] = r(e, 0)),
                        (this[4] = r(o, 0)),
                        (this[5] = r(s, 0)),
                        (this[6] = r(n, 0)),
                        (this[7] = r(i, 0)),
                        (this[8] = r(E, 0));
                }
                function E(t) {
                    for (var e = 0, r = 0; r < 9; ++r) {
                        var n = t[r];
                        e += n * n;
                    }
                    return Math.sqrt(e);
                }
                function c(t) {
                    for (var e = 0, r = 0; r < 3; ++r) {
                        var n = t[s.getElementIndex(h[r], R[r])];
                        e += 2 * n * n;
                    }
                    return Math.sqrt(e);
                }
                function l(t, e) {
                    for (var r = u.EPSILON15, n = 0, a = 1, o = 0; o < 3; ++o) {
                        var i = Math.abs(t[s.getElementIndex(h[o], R[o])]);
                        i > n && ((a = o), (n = i));
                    }
                    var E = 1,
                        c = 0,
                        l = R[a],
                        f = h[a];
                    if (Math.abs(t[s.getElementIndex(f, l)]) > r) {
                        var _,
                            T = t[s.getElementIndex(f, f)],
                            A = t[s.getElementIndex(l, l)],
                            d = t[s.getElementIndex(f, l)],
                            S = (T - A) / 2 / d;
                        (_ =
                            S < 0
                                ? -1 / (-S + Math.sqrt(1 + S * S))
                                : 1 / (S + Math.sqrt(1 + S * S))),
                            (E = 1 / Math.sqrt(1 + _ * _)),
                            (c = _ * E);
                    }
                    return (
                        (e = s.clone(s.IDENTITY, e)),
                        (e[s.getElementIndex(l, l)] = e[
                            s.getElementIndex(f, f)
                        ] =
                            E),
                        (e[s.getElementIndex(f, l)] = c),
                        (e[s.getElementIndex(l, f)] = -c),
                        e
                    );
                }
                (s.packedLength = 9),
                    (s.pack = function (t, e, n) {
                        return (
                            (n = r(n, 0)),
                            (e[n++] = t[0]),
                            (e[n++] = t[1]),
                            (e[n++] = t[2]),
                            (e[n++] = t[3]),
                            (e[n++] = t[4]),
                            (e[n++] = t[5]),
                            (e[n++] = t[6]),
                            (e[n++] = t[7]),
                            (e[n++] = t[8]),
                            e
                        );
                    }),
                    (s.unpack = function (t, e, a) {
                        return (
                            (e = r(e, 0)),
                            n(a) || (a = new s()),
                            (a[0] = t[e++]),
                            (a[1] = t[e++]),
                            (a[2] = t[e++]),
                            (a[3] = t[e++]),
                            (a[4] = t[e++]),
                            (a[5] = t[e++]),
                            (a[6] = t[e++]),
                            (a[7] = t[e++]),
                            (a[8] = t[e++]),
                            a
                        );
                    }),
                    (s.clone = function (t, e) {
                        if (n(t))
                            return n(e)
                                ? ((e[0] = t[0]),
                                  (e[1] = t[1]),
                                  (e[2] = t[2]),
                                  (e[3] = t[3]),
                                  (e[4] = t[4]),
                                  (e[5] = t[5]),
                                  (e[6] = t[6]),
                                  (e[7] = t[7]),
                                  (e[8] = t[8]),
                                  e)
                                : new s(
                                      t[0],
                                      t[3],
                                      t[6],
                                      t[1],
                                      t[4],
                                      t[7],
                                      t[2],
                                      t[5],
                                      t[8],
                                  );
                    }),
                    (s.fromArray = function (t, e, a) {
                        return (
                            (e = r(e, 0)),
                            n(a) || (a = new s()),
                            (a[0] = t[e]),
                            (a[1] = t[e + 1]),
                            (a[2] = t[e + 2]),
                            (a[3] = t[e + 3]),
                            (a[4] = t[e + 4]),
                            (a[5] = t[e + 5]),
                            (a[6] = t[e + 6]),
                            (a[7] = t[e + 7]),
                            (a[8] = t[e + 8]),
                            a
                        );
                    }),
                    (s.fromColumnMajorArray = function (t, e) {
                        return s.clone(t, e);
                    }),
                    (s.fromRowMajorArray = function (t, e) {
                        return n(e)
                            ? ((e[0] = t[0]),
                              (e[1] = t[3]),
                              (e[2] = t[6]),
                              (e[3] = t[1]),
                              (e[4] = t[4]),
                              (e[5] = t[7]),
                              (e[6] = t[2]),
                              (e[7] = t[5]),
                              (e[8] = t[8]),
                              e)
                            : new s(
                                  t[0],
                                  t[1],
                                  t[2],
                                  t[3],
                                  t[4],
                                  t[5],
                                  t[6],
                                  t[7],
                                  t[8],
                              );
                    }),
                    (s.fromQuaternion = function (t, e) {
                        var r = t.x * t.x,
                            a = t.x * t.y,
                            o = t.x * t.z,
                            i = t.x * t.w,
                            u = t.y * t.y,
                            E = t.y * t.z,
                            c = t.y * t.w,
                            l = t.z * t.z,
                            f = t.z * t.w,
                            _ = t.w * t.w,
                            R = r - u - l + _,
                            h = 2 * (a - f),
                            T = 2 * (o + c),
                            A = 2 * (a + f),
                            d = -r + u - l + _,
                            S = 2 * (E - i),
                            m = 2 * (o - c),
                            N = 2 * (E + i),
                            C = -r - u + l + _;
                        return n(e)
                            ? ((e[0] = R),
                              (e[1] = A),
                              (e[2] = m),
                              (e[3] = h),
                              (e[4] = d),
                              (e[5] = N),
                              (e[6] = T),
                              (e[7] = S),
                              (e[8] = C),
                              e)
                            : new s(R, h, T, A, d, S, m, N, C);
                    }),
                    (s.fromHeadingPitchRoll = function (t, e) {
                        var r = Math.cos(-t.pitch),
                            a = Math.cos(-t.heading),
                            o = Math.cos(t.roll),
                            i = Math.sin(-t.pitch),
                            u = Math.sin(-t.heading),
                            E = Math.sin(t.roll),
                            c = r * a,
                            l = -o * u + E * i * a,
                            f = E * u + o * i * a,
                            _ = r * u,
                            R = o * a + E * i * u,
                            h = -E * a + o * i * u,
                            T = -i,
                            A = E * r,
                            d = o * r;
                        return n(e)
                            ? ((e[0] = c),
                              (e[1] = _),
                              (e[2] = T),
                              (e[3] = l),
                              (e[4] = R),
                              (e[5] = A),
                              (e[6] = f),
                              (e[7] = h),
                              (e[8] = d),
                              e)
                            : new s(c, l, f, _, R, h, T, A, d);
                    }),
                    (s.fromScale = function (t, e) {
                        return n(e)
                            ? ((e[0] = t.x),
                              (e[1] = 0),
                              (e[2] = 0),
                              (e[3] = 0),
                              (e[4] = t.y),
                              (e[5] = 0),
                              (e[6] = 0),
                              (e[7] = 0),
                              (e[8] = t.z),
                              e)
                            : new s(t.x, 0, 0, 0, t.y, 0, 0, 0, t.z);
                    }),
                    (s.fromUniformScale = function (t, e) {
                        return n(e)
                            ? ((e[0] = t),
                              (e[1] = 0),
                              (e[2] = 0),
                              (e[3] = 0),
                              (e[4] = t),
                              (e[5] = 0),
                              (e[6] = 0),
                              (e[7] = 0),
                              (e[8] = t),
                              e)
                            : new s(t, 0, 0, 0, t, 0, 0, 0, t);
                    }),
                    (s.fromCrossProduct = function (t, e) {
                        return n(e)
                            ? ((e[0] = 0),
                              (e[1] = t.z),
                              (e[2] = -t.y),
                              (e[3] = -t.z),
                              (e[4] = 0),
                              (e[5] = t.x),
                              (e[6] = t.y),
                              (e[7] = -t.x),
                              (e[8] = 0),
                              e)
                            : new s(0, -t.z, t.y, t.z, 0, -t.x, -t.y, t.x, 0);
                    }),
                    (s.fromRotationX = function (t, e) {
                        var r = Math.cos(t),
                            a = Math.sin(t);
                        return n(e)
                            ? ((e[0] = 1),
                              (e[1] = 0),
                              (e[2] = 0),
                              (e[3] = 0),
                              (e[4] = r),
                              (e[5] = a),
                              (e[6] = 0),
                              (e[7] = -a),
                              (e[8] = r),
                              e)
                            : new s(1, 0, 0, 0, r, -a, 0, a, r);
                    }),
                    (s.fromRotationY = function (t, e) {
                        var r = Math.cos(t),
                            a = Math.sin(t);
                        return n(e)
                            ? ((e[0] = r),
                              (e[1] = 0),
                              (e[2] = -a),
                              (e[3] = 0),
                              (e[4] = 1),
                              (e[5] = 0),
                              (e[6] = a),
                              (e[7] = 0),
                              (e[8] = r),
                              e)
                            : new s(r, 0, a, 0, 1, 0, -a, 0, r);
                    }),
                    (s.fromRotationZ = function (t, e) {
                        var r = Math.cos(t),
                            a = Math.sin(t);
                        return n(e)
                            ? ((e[0] = r),
                              (e[1] = a),
                              (e[2] = 0),
                              (e[3] = -a),
                              (e[4] = r),
                              (e[5] = 0),
                              (e[6] = 0),
                              (e[7] = 0),
                              (e[8] = 1),
                              e)
                            : new s(r, -a, 0, a, r, 0, 0, 0, 1);
                    }),
                    (s.toArray = function (t, e) {
                        return n(e)
                            ? ((e[0] = t[0]),
                              (e[1] = t[1]),
                              (e[2] = t[2]),
                              (e[3] = t[3]),
                              (e[4] = t[4]),
                              (e[5] = t[5]),
                              (e[6] = t[6]),
                              (e[7] = t[7]),
                              (e[8] = t[8]),
                              e)
                            : [
                                  t[0],
                                  t[1],
                                  t[2],
                                  t[3],
                                  t[4],
                                  t[5],
                                  t[6],
                                  t[7],
                                  t[8],
                              ];
                    }),
                    (s.getElementIndex = function (t, e) {
                        return 3 * t + e;
                    }),
                    (s.getColumn = function (t, e, r) {
                        var n = 3 * e,
                            a = t[n],
                            o = t[n + 1],
                            i = t[n + 2];
                        return (r.x = a), (r.y = o), (r.z = i), r;
                    }),
                    (s.setColumn = function (t, e, r, n) {
                        n = s.clone(t, n);
                        var a = 3 * e;
                        return (
                            (n[a] = r.x), (n[a + 1] = r.y), (n[a + 2] = r.z), n
                        );
                    }),
                    (s.getRow = function (t, e, r) {
                        var n = t[e],
                            a = t[e + 3],
                            o = t[e + 6];
                        return (r.x = n), (r.y = a), (r.z = o), r;
                    }),
                    (s.setRow = function (t, e, r, n) {
                        return (
                            (n = s.clone(t, n)),
                            (n[e] = r.x),
                            (n[e + 3] = r.y),
                            (n[e + 6] = r.z),
                            n
                        );
                    });
                var f = new t();
                s.getScale = function (e, r) {
                    return (
                        (r.x = t.magnitude(
                            t.fromElements(e[0], e[1], e[2], f),
                        )),
                        (r.y = t.magnitude(
                            t.fromElements(e[3], e[4], e[5], f),
                        )),
                        (r.z = t.magnitude(
                            t.fromElements(e[6], e[7], e[8], f),
                        )),
                        r
                    );
                };
                var _ = new t();
                (s.getMaximumScale = function (e) {
                    return s.getScale(e, _), t.maximumComponent(_);
                }),
                    (s.multiply = function (t, e, r) {
                        var n = t[0] * e[0] + t[3] * e[1] + t[6] * e[2],
                            a = t[1] * e[0] + t[4] * e[1] + t[7] * e[2],
                            o = t[2] * e[0] + t[5] * e[1] + t[8] * e[2],
                            i = t[0] * e[3] + t[3] * e[4] + t[6] * e[5],
                            u = t[1] * e[3] + t[4] * e[4] + t[7] * e[5],
                            s = t[2] * e[3] + t[5] * e[4] + t[8] * e[5],
                            E = t[0] * e[6] + t[3] * e[7] + t[6] * e[8],
                            c = t[1] * e[6] + t[4] * e[7] + t[7] * e[8],
                            l = t[2] * e[6] + t[5] * e[7] + t[8] * e[8];
                        return (
                            (r[0] = n),
                            (r[1] = a),
                            (r[2] = o),
                            (r[3] = i),
                            (r[4] = u),
                            (r[5] = s),
                            (r[6] = E),
                            (r[7] = c),
                            (r[8] = l),
                            r
                        );
                    }),
                    (s.add = function (t, e, r) {
                        return (
                            (r[0] = t[0] + e[0]),
                            (r[1] = t[1] + e[1]),
                            (r[2] = t[2] + e[2]),
                            (r[3] = t[3] + e[3]),
                            (r[4] = t[4] + e[4]),
                            (r[5] = t[5] + e[5]),
                            (r[6] = t[6] + e[6]),
                            (r[7] = t[7] + e[7]),
                            (r[8] = t[8] + e[8]),
                            r
                        );
                    }),
                    (s.subtract = function (t, e, r) {
                        return (
                            (r[0] = t[0] - e[0]),
                            (r[1] = t[1] - e[1]),
                            (r[2] = t[2] - e[2]),
                            (r[3] = t[3] - e[3]),
                            (r[4] = t[4] - e[4]),
                            (r[5] = t[5] - e[5]),
                            (r[6] = t[6] - e[6]),
                            (r[7] = t[7] - e[7]),
                            (r[8] = t[8] - e[8]),
                            r
                        );
                    }),
                    (s.multiplyByVector = function (t, e, r) {
                        var n = e.x,
                            a = e.y,
                            o = e.z,
                            i = t[0] * n + t[3] * a + t[6] * o,
                            u = t[1] * n + t[4] * a + t[7] * o,
                            s = t[2] * n + t[5] * a + t[8] * o;
                        return (r.x = i), (r.y = u), (r.z = s), r;
                    }),
                    (s.multiplyByScalar = function (t, e, r) {
                        return (
                            (r[0] = t[0] * e),
                            (r[1] = t[1] * e),
                            (r[2] = t[2] * e),
                            (r[3] = t[3] * e),
                            (r[4] = t[4] * e),
                            (r[5] = t[5] * e),
                            (r[6] = t[6] * e),
                            (r[7] = t[7] * e),
                            (r[8] = t[8] * e),
                            r
                        );
                    }),
                    (s.multiplyByScale = function (t, e, r) {
                        return (
                            (r[0] = t[0] * e.x),
                            (r[1] = t[1] * e.x),
                            (r[2] = t[2] * e.x),
                            (r[3] = t[3] * e.y),
                            (r[4] = t[4] * e.y),
                            (r[5] = t[5] * e.y),
                            (r[6] = t[6] * e.z),
                            (r[7] = t[7] * e.z),
                            (r[8] = t[8] * e.z),
                            r
                        );
                    }),
                    (s.negate = function (t, e) {
                        return (
                            (e[0] = -t[0]),
                            (e[1] = -t[1]),
                            (e[2] = -t[2]),
                            (e[3] = -t[3]),
                            (e[4] = -t[4]),
                            (e[5] = -t[5]),
                            (e[6] = -t[6]),
                            (e[7] = -t[7]),
                            (e[8] = -t[8]),
                            e
                        );
                    }),
                    (s.transpose = function (t, e) {
                        var r = t[0],
                            n = t[3],
                            a = t[6],
                            o = t[1],
                            i = t[4],
                            u = t[7],
                            s = t[2],
                            E = t[5],
                            c = t[8];
                        return (
                            (e[0] = r),
                            (e[1] = n),
                            (e[2] = a),
                            (e[3] = o),
                            (e[4] = i),
                            (e[5] = u),
                            (e[6] = s),
                            (e[7] = E),
                            (e[8] = c),
                            e
                        );
                    });
                var R = [1, 0, 0],
                    h = [2, 2, 1],
                    T = new s(),
                    A = new s();
                return (
                    (s.computeEigenDecomposition = function (t, e) {
                        var r = u.EPSILON20,
                            a = 0,
                            o = 0;
                        n(e) || (e = {});
                        for (
                            var i = (e.unitary = s.clone(
                                    s.IDENTITY,
                                    e.unitary,
                                )),
                                f = (e.diagonal = s.clone(t, e.diagonal)),
                                _ = r * E(f);
                            o < 10 && c(f) > _;

                        )
                            l(f, T),
                                s.transpose(T, A),
                                s.multiply(f, T, f),
                                s.multiply(A, f, f),
                                s.multiply(i, T, i),
                                ++a > 2 && (++o, (a = 0));
                        return e;
                    }),
                    (s.abs = function (t, e) {
                        return (
                            (e[0] = Math.abs(t[0])),
                            (e[1] = Math.abs(t[1])),
                            (e[2] = Math.abs(t[2])),
                            (e[3] = Math.abs(t[3])),
                            (e[4] = Math.abs(t[4])),
                            (e[5] = Math.abs(t[5])),
                            (e[6] = Math.abs(t[6])),
                            (e[7] = Math.abs(t[7])),
                            (e[8] = Math.abs(t[8])),
                            e
                        );
                    }),
                    (s.determinant = function (t) {
                        var e = t[0],
                            r = t[3],
                            n = t[6],
                            a = t[1],
                            o = t[4],
                            i = t[7],
                            u = t[2],
                            s = t[5],
                            E = t[8];
                        return (
                            e * (o * E - s * i) +
                            a * (s * n - r * E) +
                            u * (r * i - o * n)
                        );
                    }),
                    (s.inverse = function (t, e) {
                        var r = t[0],
                            n = t[1],
                            a = t[2],
                            o = t[3],
                            i = t[4],
                            u = t[5],
                            E = t[6],
                            c = t[7],
                            l = t[8],
                            f = s.determinant(t);
                        (e[0] = i * l - c * u),
                            (e[1] = c * a - n * l),
                            (e[2] = n * u - i * a),
                            (e[3] = E * u - o * l),
                            (e[4] = r * l - E * a),
                            (e[5] = o * a - r * u),
                            (e[6] = o * c - E * i),
                            (e[7] = E * n - r * c),
                            (e[8] = r * i - o * n);
                        var _ = 1 / f;
                        return s.multiplyByScalar(e, _, e);
                    }),
                    (s.equals = function (t, e) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                t[0] === e[0] &&
                                t[1] === e[1] &&
                                t[2] === e[2] &&
                                t[3] === e[3] &&
                                t[4] === e[4] &&
                                t[5] === e[5] &&
                                t[6] === e[6] &&
                                t[7] === e[7] &&
                                t[8] === e[8])
                        );
                    }),
                    (s.equalsEpsilon = function (t, e, r) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                Math.abs(t[0] - e[0]) <= r &&
                                Math.abs(t[1] - e[1]) <= r &&
                                Math.abs(t[2] - e[2]) <= r &&
                                Math.abs(t[3] - e[3]) <= r &&
                                Math.abs(t[4] - e[4]) <= r &&
                                Math.abs(t[5] - e[5]) <= r &&
                                Math.abs(t[6] - e[6]) <= r &&
                                Math.abs(t[7] - e[7]) <= r &&
                                Math.abs(t[8] - e[8]) <= r)
                        );
                    }),
                    (s.IDENTITY = i(new s(1, 0, 0, 0, 1, 0, 0, 0, 1))),
                    (s.ZERO = i(new s(0, 0, 0, 0, 0, 0, 0, 0, 0))),
                    (s.COLUMN0ROW0 = 0),
                    (s.COLUMN0ROW1 = 1),
                    (s.COLUMN0ROW2 = 2),
                    (s.COLUMN1ROW0 = 3),
                    (s.COLUMN1ROW1 = 4),
                    (s.COLUMN1ROW2 = 5),
                    (s.COLUMN2ROW0 = 6),
                    (s.COLUMN2ROW1 = 7),
                    (s.COLUMN2ROW2 = 8),
                    a(s.prototype, {
                        length: {
                            get: function () {
                                return s.packedLength;
                            },
                        },
                    }),
                    (s.prototype.clone = function (t) {
                        return s.clone(this, t);
                    }),
                    (s.prototype.equals = function (t) {
                        return s.equals(this, t);
                    }),
                    (s.equalsArray = function (t, e, r) {
                        return (
                            t[0] === e[r] &&
                            t[1] === e[r + 1] &&
                            t[2] === e[r + 2] &&
                            t[3] === e[r + 3] &&
                            t[4] === e[r + 4] &&
                            t[5] === e[r + 5] &&
                            t[6] === e[r + 6] &&
                            t[7] === e[r + 7] &&
                            t[8] === e[r + 8]
                        );
                    }),
                    (s.prototype.equalsEpsilon = function (t, e) {
                        return s.equalsEpsilon(this, t, e);
                    }),
                    (s.prototype.toString = function () {
                        return (
                            '(' +
                            this[0] +
                            ', ' +
                            this[3] +
                            ', ' +
                            this[6] +
                            ')\n(' +
                            this[1] +
                            ', ' +
                            this[4] +
                            ', ' +
                            this[7] +
                            ')\n(' +
                            this[2] +
                            ', ' +
                            this[5] +
                            ', ' +
                            this[8] +
                            ')'
                        );
                    }),
                    s
                );
            },
        ),
        define(
            'Core/Cartesian4',
            [
                './Check',
                './defaultValue',
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
            ],
            function (t, e, r, n, a, o) {
                'use strict';
                function i(t, r, n, a) {
                    (this.x = e(t, 0)),
                        (this.y = e(r, 0)),
                        (this.z = e(n, 0)),
                        (this.w = e(a, 0));
                }
                (i.fromElements = function (t, e, n, a, o) {
                    return r(o)
                        ? ((o.x = t), (o.y = e), (o.z = n), (o.w = a), o)
                        : new i(t, e, n, a);
                }),
                    (i.fromColor = function (t, e) {
                        return r(e)
                            ? ((e.x = t.red),
                              (e.y = t.green),
                              (e.z = t.blue),
                              (e.w = t.alpha),
                              e)
                            : new i(t.red, t.green, t.blue, t.alpha);
                    }),
                    (i.clone = function (t, e) {
                        if (r(t))
                            return r(e)
                                ? ((e.x = t.x),
                                  (e.y = t.y),
                                  (e.z = t.z),
                                  (e.w = t.w),
                                  e)
                                : new i(t.x, t.y, t.z, t.w);
                    }),
                    (i.packedLength = 4),
                    (i.pack = function (t, r, n) {
                        return (
                            (n = e(n, 0)),
                            (r[n++] = t.x),
                            (r[n++] = t.y),
                            (r[n++] = t.z),
                            (r[n] = t.w),
                            r
                        );
                    }),
                    (i.unpack = function (t, n, a) {
                        return (
                            (n = e(n, 0)),
                            r(a) || (a = new i()),
                            (a.x = t[n++]),
                            (a.y = t[n++]),
                            (a.z = t[n++]),
                            (a.w = t[n]),
                            a
                        );
                    }),
                    (i.packArray = function (t, e) {
                        var n = t.length;
                        r(e) ? (e.length = 4 * n) : (e = new Array(4 * n));
                        for (var a = 0; a < n; ++a) i.pack(t[a], e, 4 * a);
                        return e;
                    }),
                    (i.unpackArray = function (t, e) {
                        var n = t.length;
                        r(e) ? (e.length = n / 4) : (e = new Array(n / 4));
                        for (var a = 0; a < n; a += 4) {
                            var o = a / 4;
                            e[o] = i.unpack(t, a, e[o]);
                        }
                        return e;
                    }),
                    (i.fromArray = i.unpack),
                    (i.maximumComponent = function (t) {
                        return Math.max(t.x, t.y, t.z, t.w);
                    }),
                    (i.minimumComponent = function (t) {
                        return Math.min(t.x, t.y, t.z, t.w);
                    }),
                    (i.minimumByComponent = function (t, e, r) {
                        return (
                            (r.x = Math.min(t.x, e.x)),
                            (r.y = Math.min(t.y, e.y)),
                            (r.z = Math.min(t.z, e.z)),
                            (r.w = Math.min(t.w, e.w)),
                            r
                        );
                    }),
                    (i.maximumByComponent = function (t, e, r) {
                        return (
                            (r.x = Math.max(t.x, e.x)),
                            (r.y = Math.max(t.y, e.y)),
                            (r.z = Math.max(t.z, e.z)),
                            (r.w = Math.max(t.w, e.w)),
                            r
                        );
                    }),
                    (i.magnitudeSquared = function (t) {
                        return t.x * t.x + t.y * t.y + t.z * t.z + t.w * t.w;
                    }),
                    (i.magnitude = function (t) {
                        return Math.sqrt(i.magnitudeSquared(t));
                    });
                var u = new i();
                (i.distance = function (t, e) {
                    return i.subtract(t, e, u), i.magnitude(u);
                }),
                    (i.distanceSquared = function (t, e) {
                        return i.subtract(t, e, u), i.magnitudeSquared(u);
                    }),
                    (i.normalize = function (t, e) {
                        var r = i.magnitude(t);
                        return (
                            (e.x = t.x / r),
                            (e.y = t.y / r),
                            (e.z = t.z / r),
                            (e.w = t.w / r),
                            e
                        );
                    }),
                    (i.dot = function (t, e) {
                        return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w;
                    }),
                    (i.multiplyComponents = function (t, e, r) {
                        return (
                            (r.x = t.x * e.x),
                            (r.y = t.y * e.y),
                            (r.z = t.z * e.z),
                            (r.w = t.w * e.w),
                            r
                        );
                    }),
                    (i.divideComponents = function (t, e, r) {
                        return (
                            (r.x = t.x / e.x),
                            (r.y = t.y / e.y),
                            (r.z = t.z / e.z),
                            (r.w = t.w / e.w),
                            r
                        );
                    }),
                    (i.add = function (t, e, r) {
                        return (
                            (r.x = t.x + e.x),
                            (r.y = t.y + e.y),
                            (r.z = t.z + e.z),
                            (r.w = t.w + e.w),
                            r
                        );
                    }),
                    (i.subtract = function (t, e, r) {
                        return (
                            (r.x = t.x - e.x),
                            (r.y = t.y - e.y),
                            (r.z = t.z - e.z),
                            (r.w = t.w - e.w),
                            r
                        );
                    }),
                    (i.multiplyByScalar = function (t, e, r) {
                        return (
                            (r.x = t.x * e),
                            (r.y = t.y * e),
                            (r.z = t.z * e),
                            (r.w = t.w * e),
                            r
                        );
                    }),
                    (i.divideByScalar = function (t, e, r) {
                        return (
                            (r.x = t.x / e),
                            (r.y = t.y / e),
                            (r.z = t.z / e),
                            (r.w = t.w / e),
                            r
                        );
                    }),
                    (i.negate = function (t, e) {
                        return (
                            (e.x = -t.x),
                            (e.y = -t.y),
                            (e.z = -t.z),
                            (e.w = -t.w),
                            e
                        );
                    }),
                    (i.abs = function (t, e) {
                        return (
                            (e.x = Math.abs(t.x)),
                            (e.y = Math.abs(t.y)),
                            (e.z = Math.abs(t.z)),
                            (e.w = Math.abs(t.w)),
                            e
                        );
                    });
                var s = new i();
                i.lerp = function (t, e, r, n) {
                    return (
                        i.multiplyByScalar(e, r, s),
                        (n = i.multiplyByScalar(t, 1 - r, n)),
                        i.add(s, n, n)
                    );
                };
                var E = new i();
                return (
                    (i.mostOrthogonalAxis = function (t, e) {
                        var r = i.normalize(t, E);
                        return (
                            i.abs(r, r),
                            (e =
                                r.x <= r.y
                                    ? r.x <= r.z
                                        ? r.x <= r.w
                                            ? i.clone(i.UNIT_X, e)
                                            : i.clone(i.UNIT_W, e)
                                        : r.z <= r.w
                                          ? i.clone(i.UNIT_Z, e)
                                          : i.clone(i.UNIT_W, e)
                                    : r.y <= r.z
                                      ? r.y <= r.w
                                          ? i.clone(i.UNIT_Y, e)
                                          : i.clone(i.UNIT_W, e)
                                      : r.z <= r.w
                                        ? i.clone(i.UNIT_Z, e)
                                        : i.clone(i.UNIT_W, e))
                        );
                    }),
                    (i.equals = function (t, e) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                t.x === e.x &&
                                t.y === e.y &&
                                t.z === e.z &&
                                t.w === e.w)
                        );
                    }),
                    (i.equalsArray = function (t, e, r) {
                        return (
                            t.x === e[r] &&
                            t.y === e[r + 1] &&
                            t.z === e[r + 2] &&
                            t.w === e[r + 3]
                        );
                    }),
                    (i.equalsEpsilon = function (t, e, n, a) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                o.equalsEpsilon(t.x, e.x, n, a) &&
                                o.equalsEpsilon(t.y, e.y, n, a) &&
                                o.equalsEpsilon(t.z, e.z, n, a) &&
                                o.equalsEpsilon(t.w, e.w, n, a))
                        );
                    }),
                    (i.ZERO = a(new i(0, 0, 0, 0))),
                    (i.UNIT_X = a(new i(1, 0, 0, 0))),
                    (i.UNIT_Y = a(new i(0, 1, 0, 0))),
                    (i.UNIT_Z = a(new i(0, 0, 1, 0))),
                    (i.UNIT_W = a(new i(0, 0, 0, 1))),
                    (i.prototype.clone = function (t) {
                        return i.clone(this, t);
                    }),
                    (i.prototype.equals = function (t) {
                        return i.equals(this, t);
                    }),
                    (i.prototype.equalsEpsilon = function (t, e, r) {
                        return i.equalsEpsilon(this, t, e, r);
                    }),
                    (i.prototype.toString = function () {
                        return (
                            '(' +
                            this.x +
                            ', ' +
                            this.y +
                            ', ' +
                            this.z +
                            ', ' +
                            this.w +
                            ')'
                        );
                    }),
                    i
                );
            },
        ),
        define('Core/RuntimeError', ['./defined'], function (t) {
            'use strict';
            function e(t) {
                (this.name = 'RuntimeError'), (this.message = t);
                var e;
                try {
                    throw new Error();
                } catch (t) {
                    e = t.stack;
                }
                this.stack = e;
            }
            return (
                t(Object.create) &&
                    ((e.prototype = Object.create(Error.prototype)),
                    (e.prototype.constructor = e)),
                (e.prototype.toString = function () {
                    var e = this.name + ': ' + this.message;
                    return (
                        t(this.stack) && (e += '\n' + this.stack.toString()), e
                    );
                }),
                e
            );
        }),
        define(
            'Core/Matrix4',
            [
                './Cartesian3',
                './Cartesian4',
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './freezeObject',
                './Math',
                './Matrix3',
                './RuntimeError',
            ],
            function (t, e, r, n, a, o, i, u, s, E) {
                'use strict';
                function c(t, e, r, a, o, i, u, s, E, c, l, f, _, R, h, T) {
                    (this[0] = n(t, 0)),
                        (this[1] = n(o, 0)),
                        (this[2] = n(E, 0)),
                        (this[3] = n(_, 0)),
                        (this[4] = n(e, 0)),
                        (this[5] = n(i, 0)),
                        (this[6] = n(c, 0)),
                        (this[7] = n(R, 0)),
                        (this[8] = n(r, 0)),
                        (this[9] = n(u, 0)),
                        (this[10] = n(l, 0)),
                        (this[11] = n(h, 0)),
                        (this[12] = n(a, 0)),
                        (this[13] = n(s, 0)),
                        (this[14] = n(f, 0)),
                        (this[15] = n(T, 0));
                }
                (c.packedLength = 16),
                    (c.pack = function (t, e, r) {
                        return (
                            (r = n(r, 0)),
                            (e[r++] = t[0]),
                            (e[r++] = t[1]),
                            (e[r++] = t[2]),
                            (e[r++] = t[3]),
                            (e[r++] = t[4]),
                            (e[r++] = t[5]),
                            (e[r++] = t[6]),
                            (e[r++] = t[7]),
                            (e[r++] = t[8]),
                            (e[r++] = t[9]),
                            (e[r++] = t[10]),
                            (e[r++] = t[11]),
                            (e[r++] = t[12]),
                            (e[r++] = t[13]),
                            (e[r++] = t[14]),
                            (e[r] = t[15]),
                            e
                        );
                    }),
                    (c.unpack = function (t, e, r) {
                        return (
                            (e = n(e, 0)),
                            a(r) || (r = new c()),
                            (r[0] = t[e++]),
                            (r[1] = t[e++]),
                            (r[2] = t[e++]),
                            (r[3] = t[e++]),
                            (r[4] = t[e++]),
                            (r[5] = t[e++]),
                            (r[6] = t[e++]),
                            (r[7] = t[e++]),
                            (r[8] = t[e++]),
                            (r[9] = t[e++]),
                            (r[10] = t[e++]),
                            (r[11] = t[e++]),
                            (r[12] = t[e++]),
                            (r[13] = t[e++]),
                            (r[14] = t[e++]),
                            (r[15] = t[e]),
                            r
                        );
                    }),
                    (c.clone = function (t, e) {
                        if (a(t))
                            return a(e)
                                ? ((e[0] = t[0]),
                                  (e[1] = t[1]),
                                  (e[2] = t[2]),
                                  (e[3] = t[3]),
                                  (e[4] = t[4]),
                                  (e[5] = t[5]),
                                  (e[6] = t[6]),
                                  (e[7] = t[7]),
                                  (e[8] = t[8]),
                                  (e[9] = t[9]),
                                  (e[10] = t[10]),
                                  (e[11] = t[11]),
                                  (e[12] = t[12]),
                                  (e[13] = t[13]),
                                  (e[14] = t[14]),
                                  (e[15] = t[15]),
                                  e)
                                : new c(
                                      t[0],
                                      t[4],
                                      t[8],
                                      t[12],
                                      t[1],
                                      t[5],
                                      t[9],
                                      t[13],
                                      t[2],
                                      t[6],
                                      t[10],
                                      t[14],
                                      t[3],
                                      t[7],
                                      t[11],
                                      t[15],
                                  );
                    }),
                    (c.fromArray = c.unpack),
                    (c.fromColumnMajorArray = function (t, e) {
                        return c.clone(t, e);
                    }),
                    (c.fromRowMajorArray = function (t, e) {
                        return a(e)
                            ? ((e[0] = t[0]),
                              (e[1] = t[4]),
                              (e[2] = t[8]),
                              (e[3] = t[12]),
                              (e[4] = t[1]),
                              (e[5] = t[5]),
                              (e[6] = t[9]),
                              (e[7] = t[13]),
                              (e[8] = t[2]),
                              (e[9] = t[6]),
                              (e[10] = t[10]),
                              (e[11] = t[14]),
                              (e[12] = t[3]),
                              (e[13] = t[7]),
                              (e[14] = t[11]),
                              (e[15] = t[15]),
                              e)
                            : new c(
                                  t[0],
                                  t[1],
                                  t[2],
                                  t[3],
                                  t[4],
                                  t[5],
                                  t[6],
                                  t[7],
                                  t[8],
                                  t[9],
                                  t[10],
                                  t[11],
                                  t[12],
                                  t[13],
                                  t[14],
                                  t[15],
                              );
                    }),
                    (c.fromRotationTranslation = function (e, r, o) {
                        return (
                            (r = n(r, t.ZERO)),
                            a(o)
                                ? ((o[0] = e[0]),
                                  (o[1] = e[1]),
                                  (o[2] = e[2]),
                                  (o[3] = 0),
                                  (o[4] = e[3]),
                                  (o[5] = e[4]),
                                  (o[6] = e[5]),
                                  (o[7] = 0),
                                  (o[8] = e[6]),
                                  (o[9] = e[7]),
                                  (o[10] = e[8]),
                                  (o[11] = 0),
                                  (o[12] = r.x),
                                  (o[13] = r.y),
                                  (o[14] = r.z),
                                  (o[15] = 1),
                                  o)
                                : new c(
                                      e[0],
                                      e[3],
                                      e[6],
                                      r.x,
                                      e[1],
                                      e[4],
                                      e[7],
                                      r.y,
                                      e[2],
                                      e[5],
                                      e[8],
                                      r.z,
                                      0,
                                      0,
                                      0,
                                      1,
                                  )
                        );
                    }),
                    (c.fromTranslationQuaternionRotationScale = function (
                        t,
                        e,
                        r,
                        n,
                    ) {
                        a(n) || (n = new c());
                        var o = r.x,
                            i = r.y,
                            u = r.z,
                            s = e.x * e.x,
                            E = e.x * e.y,
                            l = e.x * e.z,
                            f = e.x * e.w,
                            _ = e.y * e.y,
                            R = e.y * e.z,
                            h = e.y * e.w,
                            T = e.z * e.z,
                            A = e.z * e.w,
                            d = e.w * e.w,
                            S = s - _ - T + d,
                            m = 2 * (E - A),
                            N = 2 * (l + h),
                            C = 2 * (E + A),
                            I = -s + _ - T + d,
                            p = 2 * (R - f),
                            M = 2 * (l - h),
                            O = 2 * (R + f),
                            g = -s - _ + T + d;
                        return (
                            (n[0] = S * o),
                            (n[1] = C * o),
                            (n[2] = M * o),
                            (n[3] = 0),
                            (n[4] = m * i),
                            (n[5] = I * i),
                            (n[6] = O * i),
                            (n[7] = 0),
                            (n[8] = N * u),
                            (n[9] = p * u),
                            (n[10] = g * u),
                            (n[11] = 0),
                            (n[12] = t.x),
                            (n[13] = t.y),
                            (n[14] = t.z),
                            (n[15] = 1),
                            n
                        );
                    }),
                    (c.fromTranslationRotationScale = function (t, e) {
                        return c.fromTranslationQuaternionRotationScale(
                            t.translation,
                            t.rotation,
                            t.scale,
                            e,
                        );
                    }),
                    (c.fromTranslation = function (t, e) {
                        return c.fromRotationTranslation(s.IDENTITY, t, e);
                    }),
                    (c.fromScale = function (t, e) {
                        return a(e)
                            ? ((e[0] = t.x),
                              (e[1] = 0),
                              (e[2] = 0),
                              (e[3] = 0),
                              (e[4] = 0),
                              (e[5] = t.y),
                              (e[6] = 0),
                              (e[7] = 0),
                              (e[8] = 0),
                              (e[9] = 0),
                              (e[10] = t.z),
                              (e[11] = 0),
                              (e[12] = 0),
                              (e[13] = 0),
                              (e[14] = 0),
                              (e[15] = 1),
                              e)
                            : new c(
                                  t.x,
                                  0,
                                  0,
                                  0,
                                  0,
                                  t.y,
                                  0,
                                  0,
                                  0,
                                  0,
                                  t.z,
                                  0,
                                  0,
                                  0,
                                  0,
                                  1,
                              );
                    }),
                    (c.fromUniformScale = function (t, e) {
                        return a(e)
                            ? ((e[0] = t),
                              (e[1] = 0),
                              (e[2] = 0),
                              (e[3] = 0),
                              (e[4] = 0),
                              (e[5] = t),
                              (e[6] = 0),
                              (e[7] = 0),
                              (e[8] = 0),
                              (e[9] = 0),
                              (e[10] = t),
                              (e[11] = 0),
                              (e[12] = 0),
                              (e[13] = 0),
                              (e[14] = 0),
                              (e[15] = 1),
                              e)
                            : new c(
                                  t,
                                  0,
                                  0,
                                  0,
                                  0,
                                  t,
                                  0,
                                  0,
                                  0,
                                  0,
                                  t,
                                  0,
                                  0,
                                  0,
                                  0,
                                  1,
                              );
                    });
                var l = new t(),
                    f = new t(),
                    _ = new t();
                (c.fromCamera = function (e, r) {
                    var n = e.position,
                        o = e.direction,
                        i = e.up;
                    t.normalize(o, l),
                        t.normalize(t.cross(l, i, f), f),
                        t.normalize(t.cross(f, l, _), _);
                    var u = f.x,
                        s = f.y,
                        E = f.z,
                        R = l.x,
                        h = l.y,
                        T = l.z,
                        A = _.x,
                        d = _.y,
                        S = _.z,
                        m = n.x,
                        N = n.y,
                        C = n.z,
                        I = u * -m + s * -N + E * -C,
                        p = A * -m + d * -N + S * -C,
                        M = R * m + h * N + T * C;
                    return a(r)
                        ? ((r[0] = u),
                          (r[1] = A),
                          (r[2] = -R),
                          (r[3] = 0),
                          (r[4] = s),
                          (r[5] = d),
                          (r[6] = -h),
                          (r[7] = 0),
                          (r[8] = E),
                          (r[9] = S),
                          (r[10] = -T),
                          (r[11] = 0),
                          (r[12] = I),
                          (r[13] = p),
                          (r[14] = M),
                          (r[15] = 1),
                          r)
                        : new c(
                              u,
                              s,
                              E,
                              I,
                              A,
                              d,
                              S,
                              p,
                              -R,
                              -h,
                              -T,
                              M,
                              0,
                              0,
                              0,
                              1,
                          );
                }),
                    (c.computePerspectiveFieldOfView = function (
                        t,
                        e,
                        r,
                        n,
                        a,
                    ) {
                        var o = Math.tan(0.5 * t),
                            i = 1 / o,
                            u = i / e,
                            s = (n + r) / (r - n),
                            E = (2 * n * r) / (r - n);
                        return (
                            (a[0] = u),
                            (a[1] = 0),
                            (a[2] = 0),
                            (a[3] = 0),
                            (a[4] = 0),
                            (a[5] = i),
                            (a[6] = 0),
                            (a[7] = 0),
                            (a[8] = 0),
                            (a[9] = 0),
                            (a[10] = s),
                            (a[11] = -1),
                            (a[12] = 0),
                            (a[13] = 0),
                            (a[14] = E),
                            (a[15] = 0),
                            a
                        );
                    }),
                    (c.computeOrthographicOffCenter = function (
                        t,
                        e,
                        r,
                        n,
                        a,
                        o,
                        i,
                    ) {
                        var u = 1 / (e - t),
                            s = 1 / (n - r),
                            E = 1 / (o - a),
                            c = -(e + t) * u,
                            l = -(n + r) * s,
                            f = -(o + a) * E;
                        return (
                            (u *= 2),
                            (s *= 2),
                            (E *= -2),
                            (i[0] = u),
                            (i[1] = 0),
                            (i[2] = 0),
                            (i[3] = 0),
                            (i[4] = 0),
                            (i[5] = s),
                            (i[6] = 0),
                            (i[7] = 0),
                            (i[8] = 0),
                            (i[9] = 0),
                            (i[10] = E),
                            (i[11] = 0),
                            (i[12] = c),
                            (i[13] = l),
                            (i[14] = f),
                            (i[15] = 1),
                            i
                        );
                    }),
                    (c.computePerspectiveOffCenter = function (
                        t,
                        e,
                        r,
                        n,
                        a,
                        o,
                        i,
                    ) {
                        var u = (2 * a) / (e - t),
                            s = (2 * a) / (n - r),
                            E = (e + t) / (e - t),
                            c = (n + r) / (n - r),
                            l = -(o + a) / (o - a),
                            f = (-2 * o * a) / (o - a);
                        return (
                            (i[0] = u),
                            (i[1] = 0),
                            (i[2] = 0),
                            (i[3] = 0),
                            (i[4] = 0),
                            (i[5] = s),
                            (i[6] = 0),
                            (i[7] = 0),
                            (i[8] = E),
                            (i[9] = c),
                            (i[10] = l),
                            (i[11] = -1),
                            (i[12] = 0),
                            (i[13] = 0),
                            (i[14] = f),
                            (i[15] = 0),
                            i
                        );
                    }),
                    (c.computeInfinitePerspectiveOffCenter = function (
                        t,
                        e,
                        r,
                        n,
                        a,
                        o,
                    ) {
                        var i = (2 * a) / (e - t),
                            u = (2 * a) / (n - r),
                            s = (e + t) / (e - t),
                            E = (n + r) / (n - r),
                            c = -2 * a;
                        return (
                            (o[0] = i),
                            (o[1] = 0),
                            (o[2] = 0),
                            (o[3] = 0),
                            (o[4] = 0),
                            (o[5] = u),
                            (o[6] = 0),
                            (o[7] = 0),
                            (o[8] = s),
                            (o[9] = E),
                            (o[10] = -1),
                            (o[11] = -1),
                            (o[12] = 0),
                            (o[13] = 0),
                            (o[14] = c),
                            (o[15] = 0),
                            o
                        );
                    }),
                    (c.computeViewportTransformation = function (t, e, r, a) {
                        t = n(t, n.EMPTY_OBJECT);
                        var o = n(t.x, 0),
                            i = n(t.y, 0),
                            u = n(t.width, 0),
                            s = n(t.height, 0);
                        (e = n(e, 0)), (r = n(r, 1));
                        var E = 0.5 * u,
                            c = 0.5 * s,
                            l = 0.5 * (r - e),
                            f = E,
                            _ = c,
                            R = l,
                            h = o + E,
                            T = i + c,
                            A = e + l;
                        return (
                            (a[0] = f),
                            (a[1] = 0),
                            (a[2] = 0),
                            (a[3] = 0),
                            (a[4] = 0),
                            (a[5] = _),
                            (a[6] = 0),
                            (a[7] = 0),
                            (a[8] = 0),
                            (a[9] = 0),
                            (a[10] = R),
                            (a[11] = 0),
                            (a[12] = h),
                            (a[13] = T),
                            (a[14] = A),
                            (a[15] = 1),
                            a
                        );
                    }),
                    (c.computeView = function (e, r, n, a, o) {
                        return (
                            (o[0] = a.x),
                            (o[1] = n.x),
                            (o[2] = -r.x),
                            (o[3] = 0),
                            (o[4] = a.y),
                            (o[5] = n.y),
                            (o[6] = -r.y),
                            (o[7] = 0),
                            (o[8] = a.z),
                            (o[9] = n.z),
                            (o[10] = -r.z),
                            (o[11] = 0),
                            (o[12] = -t.dot(a, e)),
                            (o[13] = -t.dot(n, e)),
                            (o[14] = t.dot(r, e)),
                            (o[15] = 1),
                            o
                        );
                    }),
                    (c.toArray = function (t, e) {
                        return a(e)
                            ? ((e[0] = t[0]),
                              (e[1] = t[1]),
                              (e[2] = t[2]),
                              (e[3] = t[3]),
                              (e[4] = t[4]),
                              (e[5] = t[5]),
                              (e[6] = t[6]),
                              (e[7] = t[7]),
                              (e[8] = t[8]),
                              (e[9] = t[9]),
                              (e[10] = t[10]),
                              (e[11] = t[11]),
                              (e[12] = t[12]),
                              (e[13] = t[13]),
                              (e[14] = t[14]),
                              (e[15] = t[15]),
                              e)
                            : [
                                  t[0],
                                  t[1],
                                  t[2],
                                  t[3],
                                  t[4],
                                  t[5],
                                  t[6],
                                  t[7],
                                  t[8],
                                  t[9],
                                  t[10],
                                  t[11],
                                  t[12],
                                  t[13],
                                  t[14],
                                  t[15],
                              ];
                    }),
                    (c.getElementIndex = function (t, e) {
                        return 4 * t + e;
                    }),
                    (c.getColumn = function (t, e, r) {
                        var n = 4 * e,
                            a = t[n],
                            o = t[n + 1],
                            i = t[n + 2],
                            u = t[n + 3];
                        return (r.x = a), (r.y = o), (r.z = i), (r.w = u), r;
                    }),
                    (c.setColumn = function (t, e, r, n) {
                        n = c.clone(t, n);
                        var a = 4 * e;
                        return (
                            (n[a] = r.x),
                            (n[a + 1] = r.y),
                            (n[a + 2] = r.z),
                            (n[a + 3] = r.w),
                            n
                        );
                    }),
                    (c.setTranslation = function (t, e, r) {
                        return (
                            (r[0] = t[0]),
                            (r[1] = t[1]),
                            (r[2] = t[2]),
                            (r[3] = t[3]),
                            (r[4] = t[4]),
                            (r[5] = t[5]),
                            (r[6] = t[6]),
                            (r[7] = t[7]),
                            (r[8] = t[8]),
                            (r[9] = t[9]),
                            (r[10] = t[10]),
                            (r[11] = t[11]),
                            (r[12] = e.x),
                            (r[13] = e.y),
                            (r[14] = e.z),
                            (r[15] = t[15]),
                            r
                        );
                    }),
                    (c.getRow = function (t, e, r) {
                        var n = t[e],
                            a = t[e + 4],
                            o = t[e + 8],
                            i = t[e + 12];
                        return (r.x = n), (r.y = a), (r.z = o), (r.w = i), r;
                    }),
                    (c.setRow = function (t, e, r, n) {
                        return (
                            (n = c.clone(t, n)),
                            (n[e] = r.x),
                            (n[e + 4] = r.y),
                            (n[e + 8] = r.z),
                            (n[e + 12] = r.w),
                            n
                        );
                    });
                var R = new t();
                c.getScale = function (e, r) {
                    return (
                        (r.x = t.magnitude(
                            t.fromElements(e[0], e[1], e[2], R),
                        )),
                        (r.y = t.magnitude(
                            t.fromElements(e[4], e[5], e[6], R),
                        )),
                        (r.z = t.magnitude(
                            t.fromElements(e[8], e[9], e[10], R),
                        )),
                        r
                    );
                };
                var h = new t();
                (c.getMaximumScale = function (e) {
                    return c.getScale(e, h), t.maximumComponent(h);
                }),
                    (c.multiply = function (t, e, r) {
                        var n = t[0],
                            a = t[1],
                            o = t[2],
                            i = t[3],
                            u = t[4],
                            s = t[5],
                            E = t[6],
                            c = t[7],
                            l = t[8],
                            f = t[9],
                            _ = t[10],
                            R = t[11],
                            h = t[12],
                            T = t[13],
                            A = t[14],
                            d = t[15],
                            S = e[0],
                            m = e[1],
                            N = e[2],
                            C = e[3],
                            I = e[4],
                            p = e[5],
                            M = e[6],
                            O = e[7],
                            g = e[8],
                            y = e[9],
                            F = e[10],
                            L = e[11],
                            v = e[12],
                            U = e[13],
                            D = e[14],
                            P = e[15],
                            w = n * S + u * m + l * N + h * C,
                            B = a * S + s * m + f * N + T * C,
                            x = o * S + E * m + _ * N + A * C,
                            G = i * S + c * m + R * N + d * C,
                            b = n * I + u * p + l * M + h * O,
                            z = a * I + s * p + f * M + T * O,
                            H = o * I + E * p + _ * M + A * O,
                            V = i * I + c * p + R * M + d * O,
                            X = n * g + u * y + l * F + h * L,
                            q = a * g + s * y + f * F + T * L,
                            W = o * g + E * y + _ * F + A * L,
                            Y = i * g + c * y + R * F + d * L,
                            K = n * v + u * U + l * D + h * P,
                            k = a * v + s * U + f * D + T * P,
                            Z = o * v + E * U + _ * D + A * P,
                            j = i * v + c * U + R * D + d * P;
                        return (
                            (r[0] = w),
                            (r[1] = B),
                            (r[2] = x),
                            (r[3] = G),
                            (r[4] = b),
                            (r[5] = z),
                            (r[6] = H),
                            (r[7] = V),
                            (r[8] = X),
                            (r[9] = q),
                            (r[10] = W),
                            (r[11] = Y),
                            (r[12] = K),
                            (r[13] = k),
                            (r[14] = Z),
                            (r[15] = j),
                            r
                        );
                    }),
                    (c.add = function (t, e, r) {
                        return (
                            (r[0] = t[0] + e[0]),
                            (r[1] = t[1] + e[1]),
                            (r[2] = t[2] + e[2]),
                            (r[3] = t[3] + e[3]),
                            (r[4] = t[4] + e[4]),
                            (r[5] = t[5] + e[5]),
                            (r[6] = t[6] + e[6]),
                            (r[7] = t[7] + e[7]),
                            (r[8] = t[8] + e[8]),
                            (r[9] = t[9] + e[9]),
                            (r[10] = t[10] + e[10]),
                            (r[11] = t[11] + e[11]),
                            (r[12] = t[12] + e[12]),
                            (r[13] = t[13] + e[13]),
                            (r[14] = t[14] + e[14]),
                            (r[15] = t[15] + e[15]),
                            r
                        );
                    }),
                    (c.subtract = function (t, e, r) {
                        return (
                            (r[0] = t[0] - e[0]),
                            (r[1] = t[1] - e[1]),
                            (r[2] = t[2] - e[2]),
                            (r[3] = t[3] - e[3]),
                            (r[4] = t[4] - e[4]),
                            (r[5] = t[5] - e[5]),
                            (r[6] = t[6] - e[6]),
                            (r[7] = t[7] - e[7]),
                            (r[8] = t[8] - e[8]),
                            (r[9] = t[9] - e[9]),
                            (r[10] = t[10] - e[10]),
                            (r[11] = t[11] - e[11]),
                            (r[12] = t[12] - e[12]),
                            (r[13] = t[13] - e[13]),
                            (r[14] = t[14] - e[14]),
                            (r[15] = t[15] - e[15]),
                            r
                        );
                    }),
                    (c.multiplyTransformation = function (t, e, r) {
                        var n = t[0],
                            a = t[1],
                            o = t[2],
                            i = t[4],
                            u = t[5],
                            s = t[6],
                            E = t[8],
                            c = t[9],
                            l = t[10],
                            f = t[12],
                            _ = t[13],
                            R = t[14],
                            h = e[0],
                            T = e[1],
                            A = e[2],
                            d = e[4],
                            S = e[5],
                            m = e[6],
                            N = e[8],
                            C = e[9],
                            I = e[10],
                            p = e[12],
                            M = e[13],
                            O = e[14],
                            g = n * h + i * T + E * A,
                            y = a * h + u * T + c * A,
                            F = o * h + s * T + l * A,
                            L = n * d + i * S + E * m,
                            v = a * d + u * S + c * m,
                            U = o * d + s * S + l * m,
                            D = n * N + i * C + E * I,
                            P = a * N + u * C + c * I,
                            w = o * N + s * C + l * I,
                            B = n * p + i * M + E * O + f,
                            x = a * p + u * M + c * O + _,
                            G = o * p + s * M + l * O + R;
                        return (
                            (r[0] = g),
                            (r[1] = y),
                            (r[2] = F),
                            (r[3] = 0),
                            (r[4] = L),
                            (r[5] = v),
                            (r[6] = U),
                            (r[7] = 0),
                            (r[8] = D),
                            (r[9] = P),
                            (r[10] = w),
                            (r[11] = 0),
                            (r[12] = B),
                            (r[13] = x),
                            (r[14] = G),
                            (r[15] = 1),
                            r
                        );
                    }),
                    (c.multiplyByMatrix3 = function (t, e, r) {
                        var n = t[0],
                            a = t[1],
                            o = t[2],
                            i = t[4],
                            u = t[5],
                            s = t[6],
                            E = t[8],
                            c = t[9],
                            l = t[10],
                            f = e[0],
                            _ = e[1],
                            R = e[2],
                            h = e[3],
                            T = e[4],
                            A = e[5],
                            d = e[6],
                            S = e[7],
                            m = e[8],
                            N = n * f + i * _ + E * R,
                            C = a * f + u * _ + c * R,
                            I = o * f + s * _ + l * R,
                            p = n * h + i * T + E * A,
                            M = a * h + u * T + c * A,
                            O = o * h + s * T + l * A,
                            g = n * d + i * S + E * m,
                            y = a * d + u * S + c * m,
                            F = o * d + s * S + l * m;
                        return (
                            (r[0] = N),
                            (r[1] = C),
                            (r[2] = I),
                            (r[3] = 0),
                            (r[4] = p),
                            (r[5] = M),
                            (r[6] = O),
                            (r[7] = 0),
                            (r[8] = g),
                            (r[9] = y),
                            (r[10] = F),
                            (r[11] = 0),
                            (r[12] = t[12]),
                            (r[13] = t[13]),
                            (r[14] = t[14]),
                            (r[15] = t[15]),
                            r
                        );
                    }),
                    (c.multiplyByTranslation = function (t, e, r) {
                        var n = e.x,
                            a = e.y,
                            o = e.z,
                            i = n * t[0] + a * t[4] + o * t[8] + t[12],
                            u = n * t[1] + a * t[5] + o * t[9] + t[13],
                            s = n * t[2] + a * t[6] + o * t[10] + t[14];
                        return (
                            (r[0] = t[0]),
                            (r[1] = t[1]),
                            (r[2] = t[2]),
                            (r[3] = t[3]),
                            (r[4] = t[4]),
                            (r[5] = t[5]),
                            (r[6] = t[6]),
                            (r[7] = t[7]),
                            (r[8] = t[8]),
                            (r[9] = t[9]),
                            (r[10] = t[10]),
                            (r[11] = t[11]),
                            (r[12] = i),
                            (r[13] = u),
                            (r[14] = s),
                            (r[15] = t[15]),
                            r
                        );
                    });
                var T = new t();
                (c.multiplyByUniformScale = function (t, e, r) {
                    return (
                        (T.x = e),
                        (T.y = e),
                        (T.z = e),
                        c.multiplyByScale(t, T, r)
                    );
                }),
                    (c.multiplyByScale = function (t, e, r) {
                        var n = e.x,
                            a = e.y,
                            o = e.z;
                        return 1 === n && 1 === a && 1 === o
                            ? c.clone(t, r)
                            : ((r[0] = n * t[0]),
                              (r[1] = n * t[1]),
                              (r[2] = n * t[2]),
                              (r[3] = 0),
                              (r[4] = a * t[4]),
                              (r[5] = a * t[5]),
                              (r[6] = a * t[6]),
                              (r[7] = 0),
                              (r[8] = o * t[8]),
                              (r[9] = o * t[9]),
                              (r[10] = o * t[10]),
                              (r[11] = 0),
                              (r[12] = t[12]),
                              (r[13] = t[13]),
                              (r[14] = t[14]),
                              (r[15] = 1),
                              r);
                    }),
                    (c.multiplyByVector = function (t, e, r) {
                        var n = e.x,
                            a = e.y,
                            o = e.z,
                            i = e.w,
                            u = t[0] * n + t[4] * a + t[8] * o + t[12] * i,
                            s = t[1] * n + t[5] * a + t[9] * o + t[13] * i,
                            E = t[2] * n + t[6] * a + t[10] * o + t[14] * i,
                            c = t[3] * n + t[7] * a + t[11] * o + t[15] * i;
                        return (r.x = u), (r.y = s), (r.z = E), (r.w = c), r;
                    }),
                    (c.multiplyByPointAsVector = function (t, e, r) {
                        var n = e.x,
                            a = e.y,
                            o = e.z,
                            i = t[0] * n + t[4] * a + t[8] * o,
                            u = t[1] * n + t[5] * a + t[9] * o,
                            s = t[2] * n + t[6] * a + t[10] * o;
                        return (r.x = i), (r.y = u), (r.z = s), r;
                    }),
                    (c.multiplyByPoint = function (t, e, r) {
                        var n = e.x,
                            a = e.y,
                            o = e.z,
                            i = t[0] * n + t[4] * a + t[8] * o + t[12],
                            u = t[1] * n + t[5] * a + t[9] * o + t[13],
                            s = t[2] * n + t[6] * a + t[10] * o + t[14];
                        return (r.x = i), (r.y = u), (r.z = s), r;
                    }),
                    (c.multiplyByScalar = function (t, e, r) {
                        return (
                            (r[0] = t[0] * e),
                            (r[1] = t[1] * e),
                            (r[2] = t[2] * e),
                            (r[3] = t[3] * e),
                            (r[4] = t[4] * e),
                            (r[5] = t[5] * e),
                            (r[6] = t[6] * e),
                            (r[7] = t[7] * e),
                            (r[8] = t[8] * e),
                            (r[9] = t[9] * e),
                            (r[10] = t[10] * e),
                            (r[11] = t[11] * e),
                            (r[12] = t[12] * e),
                            (r[13] = t[13] * e),
                            (r[14] = t[14] * e),
                            (r[15] = t[15] * e),
                            r
                        );
                    }),
                    (c.negate = function (t, e) {
                        return (
                            (e[0] = -t[0]),
                            (e[1] = -t[1]),
                            (e[2] = -t[2]),
                            (e[3] = -t[3]),
                            (e[4] = -t[4]),
                            (e[5] = -t[5]),
                            (e[6] = -t[6]),
                            (e[7] = -t[7]),
                            (e[8] = -t[8]),
                            (e[9] = -t[9]),
                            (e[10] = -t[10]),
                            (e[11] = -t[11]),
                            (e[12] = -t[12]),
                            (e[13] = -t[13]),
                            (e[14] = -t[14]),
                            (e[15] = -t[15]),
                            e
                        );
                    }),
                    (c.transpose = function (t, e) {
                        var r = t[1],
                            n = t[2],
                            a = t[3],
                            o = t[6],
                            i = t[7],
                            u = t[11];
                        return (
                            (e[0] = t[0]),
                            (e[1] = t[4]),
                            (e[2] = t[8]),
                            (e[3] = t[12]),
                            (e[4] = r),
                            (e[5] = t[5]),
                            (e[6] = t[9]),
                            (e[7] = t[13]),
                            (e[8] = n),
                            (e[9] = o),
                            (e[10] = t[10]),
                            (e[11] = t[14]),
                            (e[12] = a),
                            (e[13] = i),
                            (e[14] = u),
                            (e[15] = t[15]),
                            e
                        );
                    }),
                    (c.abs = function (t, e) {
                        return (
                            (e[0] = Math.abs(t[0])),
                            (e[1] = Math.abs(t[1])),
                            (e[2] = Math.abs(t[2])),
                            (e[3] = Math.abs(t[3])),
                            (e[4] = Math.abs(t[4])),
                            (e[5] = Math.abs(t[5])),
                            (e[6] = Math.abs(t[6])),
                            (e[7] = Math.abs(t[7])),
                            (e[8] = Math.abs(t[8])),
                            (e[9] = Math.abs(t[9])),
                            (e[10] = Math.abs(t[10])),
                            (e[11] = Math.abs(t[11])),
                            (e[12] = Math.abs(t[12])),
                            (e[13] = Math.abs(t[13])),
                            (e[14] = Math.abs(t[14])),
                            (e[15] = Math.abs(t[15])),
                            e
                        );
                    }),
                    (c.equals = function (t, e) {
                        return (
                            t === e ||
                            (a(t) &&
                                a(e) &&
                                t[12] === e[12] &&
                                t[13] === e[13] &&
                                t[14] === e[14] &&
                                t[0] === e[0] &&
                                t[1] === e[1] &&
                                t[2] === e[2] &&
                                t[4] === e[4] &&
                                t[5] === e[5] &&
                                t[6] === e[6] &&
                                t[8] === e[8] &&
                                t[9] === e[9] &&
                                t[10] === e[10] &&
                                t[3] === e[3] &&
                                t[7] === e[7] &&
                                t[11] === e[11] &&
                                t[15] === e[15])
                        );
                    }),
                    (c.equalsEpsilon = function (t, e, r) {
                        return (
                            t === e ||
                            (a(t) &&
                                a(e) &&
                                Math.abs(t[0] - e[0]) <= r &&
                                Math.abs(t[1] - e[1]) <= r &&
                                Math.abs(t[2] - e[2]) <= r &&
                                Math.abs(t[3] - e[3]) <= r &&
                                Math.abs(t[4] - e[4]) <= r &&
                                Math.abs(t[5] - e[5]) <= r &&
                                Math.abs(t[6] - e[6]) <= r &&
                                Math.abs(t[7] - e[7]) <= r &&
                                Math.abs(t[8] - e[8]) <= r &&
                                Math.abs(t[9] - e[9]) <= r &&
                                Math.abs(t[10] - e[10]) <= r &&
                                Math.abs(t[11] - e[11]) <= r &&
                                Math.abs(t[12] - e[12]) <= r &&
                                Math.abs(t[13] - e[13]) <= r &&
                                Math.abs(t[14] - e[14]) <= r &&
                                Math.abs(t[15] - e[15]) <= r)
                        );
                    }),
                    (c.getTranslation = function (t, e) {
                        return (e.x = t[12]), (e.y = t[13]), (e.z = t[14]), e;
                    }),
                    (c.getRotation = function (t, e) {
                        return (
                            (e[0] = t[0]),
                            (e[1] = t[1]),
                            (e[2] = t[2]),
                            (e[3] = t[4]),
                            (e[4] = t[5]),
                            (e[5] = t[6]),
                            (e[6] = t[8]),
                            (e[7] = t[9]),
                            (e[8] = t[10]),
                            e
                        );
                    });
                var A = new s(),
                    d = new s(),
                    S = new e(),
                    m = new e(0, 0, 0, 1);
                return (
                    (c.inverse = function (t, r) {
                        if (
                            s.equalsEpsilon(
                                c.getRotation(t, A),
                                d,
                                u.EPSILON7,
                            ) &&
                            e.equals(c.getRow(t, 3, S), m)
                        )
                            return (
                                (r[0] = 0),
                                (r[1] = 0),
                                (r[2] = 0),
                                (r[3] = 0),
                                (r[4] = 0),
                                (r[5] = 0),
                                (r[6] = 0),
                                (r[7] = 0),
                                (r[8] = 0),
                                (r[9] = 0),
                                (r[10] = 0),
                                (r[11] = 0),
                                (r[12] = -t[12]),
                                (r[13] = -t[13]),
                                (r[14] = -t[14]),
                                (r[15] = 1),
                                r
                            );
                        var n = t[0],
                            a = t[4],
                            o = t[8],
                            i = t[12],
                            l = t[1],
                            f = t[5],
                            _ = t[9],
                            R = t[13],
                            h = t[2],
                            T = t[6],
                            N = t[10],
                            C = t[14],
                            I = t[3],
                            p = t[7],
                            M = t[11],
                            O = t[15],
                            g = N * O,
                            y = C * M,
                            F = T * O,
                            L = C * p,
                            v = T * M,
                            U = N * p,
                            D = h * O,
                            P = C * I,
                            w = h * M,
                            B = N * I,
                            x = h * p,
                            G = T * I,
                            b = g * f + L * _ + v * R - (y * f + F * _ + U * R),
                            z = y * l + D * _ + B * R - (g * l + P * _ + w * R),
                            H = F * l + P * f + x * R - (L * l + D * f + G * R),
                            V = U * l + w * f + G * _ - (v * l + B * f + x * _),
                            X = y * a + F * o + U * i - (g * a + L * o + v * i),
                            q = g * n + P * o + w * i - (y * n + D * o + B * i),
                            W = L * n + D * a + G * i - (F * n + P * a + x * i),
                            Y = v * n + B * a + x * o - (U * n + w * a + G * o);
                        (g = o * R),
                            (y = i * _),
                            (F = a * R),
                            (L = i * f),
                            (v = a * _),
                            (U = o * f),
                            (D = n * R),
                            (P = i * l),
                            (w = n * _),
                            (B = o * l),
                            (x = n * f),
                            (G = a * l);
                        var K = g * p + L * M + v * O - (y * p + F * M + U * O),
                            k = y * I + D * M + B * O - (g * I + P * M + w * O),
                            Z = F * I + P * p + x * O - (L * I + D * p + G * O),
                            j = U * I + w * p + G * M - (v * I + B * p + x * M),
                            Q = F * N + U * C + y * T - (v * C + g * T + L * N),
                            J = w * C + g * h + P * N - (D * N + B * C + y * h),
                            $ = D * T + G * C + L * h - (x * C + F * h + P * T),
                            tt =
                                x * N + v * h + B * T - (w * T + G * N + U * h),
                            et = n * b + a * z + o * H + i * V;
                        if (Math.abs(et) < u.EPSILON20)
                            throw new E(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (et = 1 / et),
                            (r[0] = b * et),
                            (r[1] = z * et),
                            (r[2] = H * et),
                            (r[3] = V * et),
                            (r[4] = X * et),
                            (r[5] = q * et),
                            (r[6] = W * et),
                            (r[7] = Y * et),
                            (r[8] = K * et),
                            (r[9] = k * et),
                            (r[10] = Z * et),
                            (r[11] = j * et),
                            (r[12] = Q * et),
                            (r[13] = J * et),
                            (r[14] = $ * et),
                            (r[15] = tt * et),
                            r
                        );
                    }),
                    (c.inverseTransformation = function (t, e) {
                        var r = t[0],
                            n = t[1],
                            a = t[2],
                            o = t[4],
                            i = t[5],
                            u = t[6],
                            s = t[8],
                            E = t[9],
                            c = t[10],
                            l = t[12],
                            f = t[13],
                            _ = t[14],
                            R = -r * l - n * f - a * _,
                            h = -o * l - i * f - u * _,
                            T = -s * l - E * f - c * _;
                        return (
                            (e[0] = r),
                            (e[1] = o),
                            (e[2] = s),
                            (e[3] = 0),
                            (e[4] = n),
                            (e[5] = i),
                            (e[6] = E),
                            (e[7] = 0),
                            (e[8] = a),
                            (e[9] = u),
                            (e[10] = c),
                            (e[11] = 0),
                            (e[12] = R),
                            (e[13] = h),
                            (e[14] = T),
                            (e[15] = 1),
                            e
                        );
                    }),
                    (c.IDENTITY = i(
                        new c(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                    )),
                    (c.ZERO = i(
                        new c(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
                    )),
                    (c.COLUMN0ROW0 = 0),
                    (c.COLUMN0ROW1 = 1),
                    (c.COLUMN0ROW2 = 2),
                    (c.COLUMN0ROW3 = 3),
                    (c.COLUMN1ROW0 = 4),
                    (c.COLUMN1ROW1 = 5),
                    (c.COLUMN1ROW2 = 6),
                    (c.COLUMN1ROW3 = 7),
                    (c.COLUMN2ROW0 = 8),
                    (c.COLUMN2ROW1 = 9),
                    (c.COLUMN2ROW2 = 10),
                    (c.COLUMN2ROW3 = 11),
                    (c.COLUMN3ROW0 = 12),
                    (c.COLUMN3ROW1 = 13),
                    (c.COLUMN3ROW2 = 14),
                    (c.COLUMN3ROW3 = 15),
                    o(c.prototype, {
                        length: {
                            get: function () {
                                return c.packedLength;
                            },
                        },
                    }),
                    (c.prototype.clone = function (t) {
                        return c.clone(this, t);
                    }),
                    (c.prototype.equals = function (t) {
                        return c.equals(this, t);
                    }),
                    (c.equalsArray = function (t, e, r) {
                        return (
                            t[0] === e[r] &&
                            t[1] === e[r + 1] &&
                            t[2] === e[r + 2] &&
                            t[3] === e[r + 3] &&
                            t[4] === e[r + 4] &&
                            t[5] === e[r + 5] &&
                            t[6] === e[r + 6] &&
                            t[7] === e[r + 7] &&
                            t[8] === e[r + 8] &&
                            t[9] === e[r + 9] &&
                            t[10] === e[r + 10] &&
                            t[11] === e[r + 11] &&
                            t[12] === e[r + 12] &&
                            t[13] === e[r + 13] &&
                            t[14] === e[r + 14] &&
                            t[15] === e[r + 15]
                        );
                    }),
                    (c.prototype.equalsEpsilon = function (t, e) {
                        return c.equalsEpsilon(this, t, e);
                    }),
                    (c.prototype.toString = function () {
                        return (
                            '(' +
                            this[0] +
                            ', ' +
                            this[4] +
                            ', ' +
                            this[8] +
                            ', ' +
                            this[12] +
                            ')\n(' +
                            this[1] +
                            ', ' +
                            this[5] +
                            ', ' +
                            this[9] +
                            ', ' +
                            this[13] +
                            ')\n(' +
                            this[2] +
                            ', ' +
                            this[6] +
                            ', ' +
                            this[10] +
                            ', ' +
                            this[14] +
                            ')\n(' +
                            this[3] +
                            ', ' +
                            this[7] +
                            ', ' +
                            this[11] +
                            ', ' +
                            this[15] +
                            ')'
                        );
                    }),
                    c
                );
            },
        ),
        define(
            'Core/Rectangle',
            [
                './Cartographic',
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './Ellipsoid',
                './freezeObject',
                './Math',
            ],
            function (t, e, r, n, a, o, i, u) {
                'use strict';
                function s(t, e, n, a) {
                    (this.west = r(t, 0)),
                        (this.south = r(e, 0)),
                        (this.east = r(n, 0)),
                        (this.north = r(a, 0));
                }
                a(s.prototype, {
                    width: {
                        get: function () {
                            return s.computeWidth(this);
                        },
                    },
                    height: {
                        get: function () {
                            return s.computeHeight(this);
                        },
                    },
                }),
                    (s.packedLength = 4),
                    (s.pack = function (t, e, n) {
                        return (
                            (n = r(n, 0)),
                            (e[n++] = t.west),
                            (e[n++] = t.south),
                            (e[n++] = t.east),
                            (e[n] = t.north),
                            e
                        );
                    }),
                    (s.unpack = function (t, e, a) {
                        return (
                            (e = r(e, 0)),
                            n(a) || (a = new s()),
                            (a.west = t[e++]),
                            (a.south = t[e++]),
                            (a.east = t[e++]),
                            (a.north = t[e]),
                            a
                        );
                    }),
                    (s.computeWidth = function (t) {
                        var e = t.east,
                            r = t.west;
                        return e < r && (e += u.TWO_PI), e - r;
                    }),
                    (s.computeHeight = function (t) {
                        return t.north - t.south;
                    }),
                    (s.fromDegrees = function (t, e, a, o, i) {
                        return (
                            (t = u.toRadians(r(t, 0))),
                            (e = u.toRadians(r(e, 0))),
                            (a = u.toRadians(r(a, 0))),
                            (o = u.toRadians(r(o, 0))),
                            n(i)
                                ? ((i.west = t),
                                  (i.south = e),
                                  (i.east = a),
                                  (i.north = o),
                                  i)
                                : new s(t, e, a, o)
                        );
                    }),
                    (s.fromRadians = function (t, e, a, o, i) {
                        return n(i)
                            ? ((i.west = r(t, 0)),
                              (i.south = r(e, 0)),
                              (i.east = r(a, 0)),
                              (i.north = r(o, 0)),
                              i)
                            : new s(t, e, a, o);
                    }),
                    (s.fromCartographicArray = function (t, e) {
                        for (
                            var r = Number.MAX_VALUE,
                                a = -Number.MAX_VALUE,
                                o = Number.MAX_VALUE,
                                i = -Number.MAX_VALUE,
                                E = Number.MAX_VALUE,
                                c = -Number.MAX_VALUE,
                                l = 0,
                                f = t.length;
                            l < f;
                            l++
                        ) {
                            var _ = t[l];
                            (r = Math.min(r, _.longitude)),
                                (a = Math.max(a, _.longitude)),
                                (E = Math.min(E, _.latitude)),
                                (c = Math.max(c, _.latitude));
                            var R =
                                _.longitude >= 0
                                    ? _.longitude
                                    : _.longitude + u.TWO_PI;
                            (o = Math.min(o, R)), (i = Math.max(i, R));
                        }
                        return (
                            a - r > i - o &&
                                ((r = o),
                                (a = i),
                                a > u.PI && (a -= u.TWO_PI),
                                r > u.PI && (r -= u.TWO_PI)),
                            n(e)
                                ? ((e.west = r),
                                  (e.south = E),
                                  (e.east = a),
                                  (e.north = c),
                                  e)
                                : new s(r, E, a, c)
                        );
                    }),
                    (s.fromCartesianArray = function (t, e, a) {
                        e = r(e, o.WGS84);
                        for (
                            var i = Number.MAX_VALUE,
                                E = -Number.MAX_VALUE,
                                c = Number.MAX_VALUE,
                                l = -Number.MAX_VALUE,
                                f = Number.MAX_VALUE,
                                _ = -Number.MAX_VALUE,
                                R = 0,
                                h = t.length;
                            R < h;
                            R++
                        ) {
                            var T = e.cartesianToCartographic(t[R]);
                            (i = Math.min(i, T.longitude)),
                                (E = Math.max(E, T.longitude)),
                                (f = Math.min(f, T.latitude)),
                                (_ = Math.max(_, T.latitude));
                            var A =
                                T.longitude >= 0
                                    ? T.longitude
                                    : T.longitude + u.TWO_PI;
                            (c = Math.min(c, A)), (l = Math.max(l, A));
                        }
                        return (
                            E - i > l - c &&
                                ((i = c),
                                (E = l),
                                E > u.PI && (E -= u.TWO_PI),
                                i > u.PI && (i -= u.TWO_PI)),
                            n(a)
                                ? ((a.west = i),
                                  (a.south = f),
                                  (a.east = E),
                                  (a.north = _),
                                  a)
                                : new s(i, f, E, _)
                        );
                    }),
                    (s.clone = function (t, e) {
                        if (n(t))
                            return n(e)
                                ? ((e.west = t.west),
                                  (e.south = t.south),
                                  (e.east = t.east),
                                  (e.north = t.north),
                                  e)
                                : new s(t.west, t.south, t.east, t.north);
                    }),
                    (s.prototype.clone = function (t) {
                        return s.clone(this, t);
                    }),
                    (s.prototype.equals = function (t) {
                        return s.equals(this, t);
                    }),
                    (s.equals = function (t, e) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                t.west === e.west &&
                                t.south === e.south &&
                                t.east === e.east &&
                                t.north === e.north)
                        );
                    }),
                    (s.prototype.equalsEpsilon = function (t, e) {
                        return (
                            n(t) &&
                            Math.abs(this.west - t.west) <= e &&
                            Math.abs(this.south - t.south) <= e &&
                            Math.abs(this.east - t.east) <= e &&
                            Math.abs(this.north - t.north) <= e
                        );
                    }),
                    (s.validate = function (t) {}),
                    (s.southwest = function (e, r) {
                        return n(r)
                            ? ((r.longitude = e.west),
                              (r.latitude = e.south),
                              (r.height = 0),
                              r)
                            : new t(e.west, e.south);
                    }),
                    (s.northwest = function (e, r) {
                        return n(r)
                            ? ((r.longitude = e.west),
                              (r.latitude = e.north),
                              (r.height = 0),
                              r)
                            : new t(e.west, e.north);
                    }),
                    (s.northeast = function (e, r) {
                        return n(r)
                            ? ((r.longitude = e.east),
                              (r.latitude = e.north),
                              (r.height = 0),
                              r)
                            : new t(e.east, e.north);
                    }),
                    (s.southeast = function (e, r) {
                        return n(r)
                            ? ((r.longitude = e.east),
                              (r.latitude = e.south),
                              (r.height = 0),
                              r)
                            : new t(e.east, e.south);
                    }),
                    (s.center = function (e, r) {
                        var a = e.east,
                            o = e.west;
                        a < o && (a += u.TWO_PI);
                        var i = u.negativePiToPi(0.5 * (o + a)),
                            s = 0.5 * (e.south + e.north);
                        return n(r)
                            ? ((r.longitude = i),
                              (r.latitude = s),
                              (r.height = 0),
                              r)
                            : new t(i, s);
                    }),
                    (s.intersection = function (t, e, r) {
                        var a = t.east,
                            o = t.west,
                            i = e.east,
                            E = e.west;
                        a < o && i > 0
                            ? (a += u.TWO_PI)
                            : i < E && a > 0 && (i += u.TWO_PI),
                            a < o && E < 0
                                ? (E += u.TWO_PI)
                                : i < E && o < 0 && (o += u.TWO_PI);
                        var c = u.negativePiToPi(Math.max(o, E)),
                            l = u.negativePiToPi(Math.min(a, i));
                        if (!((t.west < t.east || e.west < e.east) && l <= c)) {
                            var f = Math.max(t.south, e.south),
                                _ = Math.min(t.north, e.north);
                            if (!(f >= _))
                                return n(r)
                                    ? ((r.west = c),
                                      (r.south = f),
                                      (r.east = l),
                                      (r.north = _),
                                      r)
                                    : new s(c, f, l, _);
                        }
                    }),
                    (s.simpleIntersection = function (t, e, r) {
                        var a = Math.max(t.west, e.west),
                            o = Math.max(t.south, e.south),
                            i = Math.min(t.east, e.east),
                            u = Math.min(t.north, e.north);
                        if (!(o >= u || a >= i))
                            return n(r)
                                ? ((r.west = a),
                                  (r.south = o),
                                  (r.east = i),
                                  (r.north = u),
                                  r)
                                : new s(a, o, i, u);
                    }),
                    (s.union = function (t, e, r) {
                        n(r) || (r = new s());
                        var a = t.east,
                            o = t.west,
                            i = e.east,
                            E = e.west;
                        a < o && i > 0
                            ? (a += u.TWO_PI)
                            : i < E && a > 0 && (i += u.TWO_PI),
                            a < o && E < 0
                                ? (E += u.TWO_PI)
                                : i < E && o < 0 && (o += u.TWO_PI);
                        var c = u.convertLongitudeRange(Math.min(o, E)),
                            l = u.convertLongitudeRange(Math.max(a, i));
                        return (
                            (r.west = c),
                            (r.south = Math.min(t.south, e.south)),
                            (r.east = l),
                            (r.north = Math.max(t.north, e.north)),
                            r
                        );
                    }),
                    (s.expand = function (t, e, r) {
                        return (
                            n(r) || (r = new s()),
                            (r.west = Math.min(t.west, e.longitude)),
                            (r.south = Math.min(t.south, e.latitude)),
                            (r.east = Math.max(t.east, e.longitude)),
                            (r.north = Math.max(t.north, e.latitude)),
                            r
                        );
                    }),
                    (s.contains = function (t, e) {
                        var r = e.longitude,
                            n = e.latitude,
                            a = t.west,
                            o = t.east;
                        return (
                            o < a &&
                                ((o += u.TWO_PI), r < 0 && (r += u.TWO_PI)),
                            (r > a || u.equalsEpsilon(r, a, u.EPSILON14)) &&
                                (r < o || u.equalsEpsilon(r, o, u.EPSILON14)) &&
                                n >= t.south &&
                                n <= t.north
                        );
                    });
                var E = new t();
                return (
                    (s.subsample = function (t, e, a, i) {
                        (e = r(e, o.WGS84)), (a = r(a, 0)), n(i) || (i = []);
                        var c = 0,
                            l = t.north,
                            f = t.south,
                            _ = t.east,
                            R = t.west,
                            h = E;
                        (h.height = a),
                            (h.longitude = R),
                            (h.latitude = l),
                            (i[c] = e.cartographicToCartesian(h, i[c])),
                            c++,
                            (h.longitude = _),
                            (i[c] = e.cartographicToCartesian(h, i[c])),
                            c++,
                            (h.latitude = f),
                            (i[c] = e.cartographicToCartesian(h, i[c])),
                            c++,
                            (h.longitude = R),
                            (i[c] = e.cartographicToCartesian(h, i[c])),
                            c++,
                            (h.latitude = l < 0 ? l : f > 0 ? f : 0);
                        for (var T = 1; T < 8; ++T)
                            (h.longitude = -Math.PI + T * u.PI_OVER_TWO),
                                s.contains(t, h) &&
                                    ((i[c] = e.cartographicToCartesian(
                                        h,
                                        i[c],
                                    )),
                                    c++);
                        return (
                            0 === h.latitude &&
                                ((h.longitude = R),
                                (i[c] = e.cartographicToCartesian(h, i[c])),
                                c++,
                                (h.longitude = _),
                                (i[c] = e.cartographicToCartesian(h, i[c])),
                                c++),
                            (i.length = c),
                            i
                        );
                    }),
                    (s.MAX_VALUE = i(
                        new s(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO),
                    )),
                    s
                );
            },
        ),
        define(
            'Core/BoundingSphere',
            [
                './Cartesian3',
                './Cartographic',
                './Check',
                './defaultValue',
                './defined',
                './Ellipsoid',
                './GeographicProjection',
                './Intersect',
                './Interval',
                './Matrix3',
                './Matrix4',
                './Rectangle',
            ],
            function (t, e, r, n, a, o, i, u, s, E, c, l) {
                'use strict';
                function f(e, r) {
                    (this.center = t.clone(n(e, t.ZERO))),
                        (this.radius = n(r, 0));
                }
                var _ = new t(),
                    R = new t(),
                    h = new t(),
                    T = new t(),
                    A = new t(),
                    d = new t(),
                    S = new t(),
                    m = new t(),
                    N = new t(),
                    C = new t(),
                    I = new t(),
                    p = new t();
                f.fromPoints = function (e, r) {
                    if ((a(r) || (r = new f()), !a(e) || 0 === e.length))
                        return (
                            (r.center = t.clone(t.ZERO, r.center)),
                            (r.radius = 0),
                            r
                        );
                    var n,
                        o = t.clone(e[0], S),
                        i = t.clone(o, _),
                        u = t.clone(o, R),
                        s = t.clone(o, h),
                        E = t.clone(o, T),
                        c = t.clone(o, A),
                        l = t.clone(o, d),
                        M = e.length;
                    for (n = 1; n < M; n++) {
                        t.clone(e[n], o);
                        var O = o.x,
                            g = o.y,
                            y = o.z;
                        O < i.x && t.clone(o, i),
                            O > E.x && t.clone(o, E),
                            g < u.y && t.clone(o, u),
                            g > c.y && t.clone(o, c),
                            y < s.z && t.clone(o, s),
                            y > l.z && t.clone(o, l);
                    }
                    var F = t.magnitudeSquared(t.subtract(E, i, m)),
                        L = t.magnitudeSquared(t.subtract(c, u, m)),
                        v = t.magnitudeSquared(t.subtract(l, s, m)),
                        U = i,
                        D = E,
                        P = F;
                    L > P && ((P = L), (U = u), (D = c)),
                        v > P && ((P = v), (U = s), (D = l));
                    var w = N;
                    (w.x = 0.5 * (U.x + D.x)),
                        (w.y = 0.5 * (U.y + D.y)),
                        (w.z = 0.5 * (U.z + D.z));
                    var B = t.magnitudeSquared(t.subtract(D, w, m)),
                        x = Math.sqrt(B),
                        G = C;
                    (G.x = i.x), (G.y = u.y), (G.z = s.z);
                    var b = I;
                    (b.x = E.x), (b.y = c.y), (b.z = l.z);
                    var z = t.multiplyByScalar(t.add(G, b, m), 0.5, p),
                        H = 0;
                    for (n = 0; n < M; n++) {
                        t.clone(e[n], o);
                        var V = t.magnitude(t.subtract(o, z, m));
                        V > H && (H = V);
                        var X = t.magnitudeSquared(t.subtract(o, w, m));
                        if (X > B) {
                            var q = Math.sqrt(X);
                            (x = 0.5 * (x + q)), (B = x * x);
                            var W = q - x;
                            (w.x = (x * w.x + W * o.x) / q),
                                (w.y = (x * w.y + W * o.y) / q),
                                (w.z = (x * w.z + W * o.z) / q);
                        }
                    }
                    return (
                        x < H
                            ? (t.clone(w, r.center), (r.radius = x))
                            : (t.clone(z, r.center), (r.radius = H)),
                        r
                    );
                };
                var M = new i(),
                    O = new t(),
                    g = new t(),
                    y = new e(),
                    F = new e();
                (f.fromRectangle2D = function (t, e, r) {
                    return f.fromRectangleWithHeights2D(t, e, 0, 0, r);
                }),
                    (f.fromRectangleWithHeights2D = function (e, r, o, i, u) {
                        if ((a(u) || (u = new f()), !a(e)))
                            return (
                                (u.center = t.clone(t.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (r = n(r, M)),
                            l.southwest(e, y),
                            (y.height = o),
                            l.northeast(e, F),
                            (F.height = i);
                        var s = r.project(y, O),
                            E = r.project(F, g),
                            c = E.x - s.x,
                            _ = E.y - s.y,
                            R = E.z - s.z;
                        u.radius = 0.5 * Math.sqrt(c * c + _ * _ + R * R);
                        var h = u.center;
                        return (
                            (h.x = s.x + 0.5 * c),
                            (h.y = s.y + 0.5 * _),
                            (h.z = s.z + 0.5 * R),
                            u
                        );
                    });
                var L = [];
                (f.fromRectangle3D = function (e, r, i, u) {
                    if (
                        ((r = n(r, o.WGS84)),
                        (i = n(i, 0)),
                        a(u) || (u = new f()),
                        !a(e))
                    )
                        return (
                            (u.center = t.clone(t.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var s = l.subsample(e, r, i, L);
                    return f.fromPoints(s, u);
                }),
                    (f.fromVertices = function (e, r, o, i) {
                        if ((a(i) || (i = new f()), !a(e) || 0 === e.length))
                            return (
                                (i.center = t.clone(t.ZERO, i.center)),
                                (i.radius = 0),
                                i
                            );
                        (r = n(r, t.ZERO)), (o = n(o, 3));
                        var u = S;
                        (u.x = e[0] + r.x),
                            (u.y = e[1] + r.y),
                            (u.z = e[2] + r.z);
                        var s,
                            E = t.clone(u, _),
                            c = t.clone(u, R),
                            l = t.clone(u, h),
                            M = t.clone(u, T),
                            O = t.clone(u, A),
                            g = t.clone(u, d),
                            y = e.length;
                        for (s = 0; s < y; s += o) {
                            var F = e[s] + r.x,
                                L = e[s + 1] + r.y,
                                v = e[s + 2] + r.z;
                            (u.x = F),
                                (u.y = L),
                                (u.z = v),
                                F < E.x && t.clone(u, E),
                                F > M.x && t.clone(u, M),
                                L < c.y && t.clone(u, c),
                                L > O.y && t.clone(u, O),
                                v < l.z && t.clone(u, l),
                                v > g.z && t.clone(u, g);
                        }
                        var U = t.magnitudeSquared(t.subtract(M, E, m)),
                            D = t.magnitudeSquared(t.subtract(O, c, m)),
                            P = t.magnitudeSquared(t.subtract(g, l, m)),
                            w = E,
                            B = M,
                            x = U;
                        D > x && ((x = D), (w = c), (B = O)),
                            P > x && ((x = P), (w = l), (B = g));
                        var G = N;
                        (G.x = 0.5 * (w.x + B.x)),
                            (G.y = 0.5 * (w.y + B.y)),
                            (G.z = 0.5 * (w.z + B.z));
                        var b = t.magnitudeSquared(t.subtract(B, G, m)),
                            z = Math.sqrt(b),
                            H = C;
                        (H.x = E.x), (H.y = c.y), (H.z = l.z);
                        var V = I;
                        (V.x = M.x), (V.y = O.y), (V.z = g.z);
                        var X = t.multiplyByScalar(t.add(H, V, m), 0.5, p),
                            q = 0;
                        for (s = 0; s < y; s += o) {
                            (u.x = e[s] + r.x),
                                (u.y = e[s + 1] + r.y),
                                (u.z = e[s + 2] + r.z);
                            var W = t.magnitude(t.subtract(u, X, m));
                            W > q && (q = W);
                            var Y = t.magnitudeSquared(t.subtract(u, G, m));
                            if (Y > b) {
                                var K = Math.sqrt(Y);
                                (z = 0.5 * (z + K)), (b = z * z);
                                var k = K - z;
                                (G.x = (z * G.x + k * u.x) / K),
                                    (G.y = (z * G.y + k * u.y) / K),
                                    (G.z = (z * G.z + k * u.z) / K);
                            }
                        }
                        return (
                            z < q
                                ? (t.clone(G, i.center), (i.radius = z))
                                : (t.clone(X, i.center), (i.radius = q)),
                            i
                        );
                    }),
                    (f.fromEncodedCartesianVertices = function (e, r, n) {
                        if (
                            (a(n) || (n = new f()),
                            !a(e) ||
                                !a(r) ||
                                e.length !== r.length ||
                                0 === e.length)
                        )
                            return (
                                (n.center = t.clone(t.ZERO, n.center)),
                                (n.radius = 0),
                                n
                            );
                        var o = S;
                        (o.x = e[0] + r[0]),
                            (o.y = e[1] + r[1]),
                            (o.z = e[2] + r[2]);
                        var i,
                            u = t.clone(o, _),
                            s = t.clone(o, R),
                            E = t.clone(o, h),
                            c = t.clone(o, T),
                            l = t.clone(o, A),
                            M = t.clone(o, d),
                            O = e.length;
                        for (i = 0; i < O; i += 3) {
                            var g = e[i] + r[i],
                                y = e[i + 1] + r[i + 1],
                                F = e[i + 2] + r[i + 2];
                            (o.x = g),
                                (o.y = y),
                                (o.z = F),
                                g < u.x && t.clone(o, u),
                                g > c.x && t.clone(o, c),
                                y < s.y && t.clone(o, s),
                                y > l.y && t.clone(o, l),
                                F < E.z && t.clone(o, E),
                                F > M.z && t.clone(o, M);
                        }
                        var L = t.magnitudeSquared(t.subtract(c, u, m)),
                            v = t.magnitudeSquared(t.subtract(l, s, m)),
                            U = t.magnitudeSquared(t.subtract(M, E, m)),
                            D = u,
                            P = c,
                            w = L;
                        v > w && ((w = v), (D = s), (P = l)),
                            U > w && ((w = U), (D = E), (P = M));
                        var B = N;
                        (B.x = 0.5 * (D.x + P.x)),
                            (B.y = 0.5 * (D.y + P.y)),
                            (B.z = 0.5 * (D.z + P.z));
                        var x = t.magnitudeSquared(t.subtract(P, B, m)),
                            G = Math.sqrt(x),
                            b = C;
                        (b.x = u.x), (b.y = s.y), (b.z = E.z);
                        var z = I;
                        (z.x = c.x), (z.y = l.y), (z.z = M.z);
                        var H = t.multiplyByScalar(t.add(b, z, m), 0.5, p),
                            V = 0;
                        for (i = 0; i < O; i += 3) {
                            (o.x = e[i] + r[i]),
                                (o.y = e[i + 1] + r[i + 1]),
                                (o.z = e[i + 2] + r[i + 2]);
                            var X = t.magnitude(t.subtract(o, H, m));
                            X > V && (V = X);
                            var q = t.magnitudeSquared(t.subtract(o, B, m));
                            if (q > x) {
                                var W = Math.sqrt(q);
                                (G = 0.5 * (G + W)), (x = G * G);
                                var Y = W - G;
                                (B.x = (G * B.x + Y * o.x) / W),
                                    (B.y = (G * B.y + Y * o.y) / W),
                                    (B.z = (G * B.z + Y * o.z) / W);
                            }
                        }
                        return (
                            G < V
                                ? (t.clone(B, n.center), (n.radius = G))
                                : (t.clone(H, n.center), (n.radius = V)),
                            n
                        );
                    }),
                    (f.fromCornerPoints = function (e, r, n) {
                        a(n) || (n = new f());
                        var o = n.center;
                        return (
                            t.add(e, r, o),
                            t.multiplyByScalar(o, 0.5, o),
                            (n.radius = t.distance(o, r)),
                            n
                        );
                    }),
                    (f.fromEllipsoid = function (e, r) {
                        return (
                            a(r) || (r = new f()),
                            t.clone(t.ZERO, r.center),
                            (r.radius = e.maximumRadius),
                            r
                        );
                    });
                var v = new t();
                f.fromBoundingSpheres = function (e, r) {
                    if ((a(r) || (r = new f()), !a(e) || 0 === e.length))
                        return (
                            (r.center = t.clone(t.ZERO, r.center)),
                            (r.radius = 0),
                            r
                        );
                    var n = e.length;
                    if (1 === n) return f.clone(e[0], r);
                    if (2 === n) return f.union(e[0], e[1], r);
                    var o,
                        i = [];
                    for (o = 0; o < n; o++) i.push(e[o].center);
                    r = f.fromPoints(i, r);
                    var u = r.center,
                        s = r.radius;
                    for (o = 0; o < n; o++) {
                        var E = e[o];
                        s = Math.max(s, t.distance(u, E.center, v) + E.radius);
                    }
                    return (r.radius = s), r;
                };
                var U = new t(),
                    D = new t(),
                    P = new t();
                (f.fromOrientedBoundingBox = function (e, r) {
                    a(r) || (r = new f());
                    var n = e.halfAxes,
                        o = E.getColumn(n, 0, U),
                        i = E.getColumn(n, 1, D),
                        u = E.getColumn(n, 2, P);
                    return (
                        t.add(o, i, o),
                        t.add(o, u, o),
                        (r.center = t.clone(e.center, r.center)),
                        (r.radius = t.magnitude(o)),
                        r
                    );
                }),
                    (f.clone = function (e, r) {
                        if (a(e))
                            return a(r)
                                ? ((r.center = t.clone(e.center, r.center)),
                                  (r.radius = e.radius),
                                  r)
                                : new f(e.center, e.radius);
                    }),
                    (f.packedLength = 4),
                    (f.pack = function (t, e, r) {
                        r = n(r, 0);
                        var a = t.center;
                        return (
                            (e[r++] = a.x),
                            (e[r++] = a.y),
                            (e[r++] = a.z),
                            (e[r] = t.radius),
                            e
                        );
                    }),
                    (f.unpack = function (t, e, r) {
                        (e = n(e, 0)), a(r) || (r = new f());
                        var o = r.center;
                        return (
                            (o.x = t[e++]),
                            (o.y = t[e++]),
                            (o.z = t[e++]),
                            (r.radius = t[e]),
                            r
                        );
                    });
                var w = new t(),
                    B = new t();
                f.union = function (e, r, n) {
                    a(n) || (n = new f());
                    var o = e.center,
                        i = e.radius,
                        u = r.center,
                        s = r.radius,
                        E = t.subtract(u, o, w),
                        c = t.magnitude(E);
                    if (i >= c + s) return e.clone(n), n;
                    if (s >= c + i) return r.clone(n), n;
                    var l = 0.5 * (i + c + s),
                        _ = t.multiplyByScalar(E, (-i + l) / c, B);
                    return (
                        t.add(_, o, _), t.clone(_, n.center), (n.radius = l), n
                    );
                };
                var x = new t();
                (f.expand = function (e, r, n) {
                    n = f.clone(e, n);
                    var a = t.magnitude(t.subtract(r, n.center, x));
                    return a > n.radius && (n.radius = a), n;
                }),
                    (f.intersectPlane = function (e, r) {
                        var n = e.center,
                            a = e.radius,
                            o = r.normal,
                            i = t.dot(o, n) + r.distance;
                        return i < -a
                            ? u.OUTSIDE
                            : i < a
                              ? u.INTERSECTING
                              : u.INSIDE;
                    }),
                    (f.transform = function (t, e, r) {
                        return (
                            a(r) || (r = new f()),
                            (r.center = c.multiplyByPoint(
                                e,
                                t.center,
                                r.center,
                            )),
                            (r.radius = c.getMaximumScale(e) * t.radius),
                            r
                        );
                    });
                var G = new t();
                (f.distanceSquaredTo = function (e, r) {
                    var n = t.subtract(e.center, r, G);
                    return t.magnitudeSquared(n) - e.radius * e.radius;
                }),
                    (f.transformWithoutScale = function (t, e, r) {
                        return (
                            a(r) || (r = new f()),
                            (r.center = c.multiplyByPoint(
                                e,
                                t.center,
                                r.center,
                            )),
                            (r.radius = t.radius),
                            r
                        );
                    });
                var b = new t();
                f.computePlaneDistances = function (e, r, n, o) {
                    a(o) || (o = new s());
                    var i = t.subtract(e.center, r, b),
                        u = t.dot(n, i);
                    return (o.start = u - e.radius), (o.stop = u + e.radius), o;
                };
                for (
                    var z = new t(),
                        H = new t(),
                        V = new t(),
                        X = new t(),
                        q = new t(),
                        W = new e(),
                        Y = new Array(8),
                        K = 0;
                    K < 8;
                    ++K
                )
                    Y[K] = new t();
                var k = new i();
                return (
                    (f.projectTo2D = function (e, r, a) {
                        r = n(r, k);
                        var o = r.ellipsoid,
                            i = e.center,
                            u = e.radius,
                            s = o.geodeticSurfaceNormal(i, z),
                            E = t.cross(t.UNIT_Z, s, H);
                        t.normalize(E, E);
                        var c = t.cross(s, E, V);
                        t.normalize(c, c),
                            t.multiplyByScalar(s, u, s),
                            t.multiplyByScalar(c, u, c),
                            t.multiplyByScalar(E, u, E);
                        var l = t.negate(c, q),
                            _ = t.negate(E, X),
                            R = Y,
                            h = R[0];
                        t.add(s, c, h),
                            t.add(h, E, h),
                            (h = R[1]),
                            t.add(s, c, h),
                            t.add(h, _, h),
                            (h = R[2]),
                            t.add(s, l, h),
                            t.add(h, _, h),
                            (h = R[3]),
                            t.add(s, l, h),
                            t.add(h, E, h),
                            t.negate(s, s),
                            (h = R[4]),
                            t.add(s, c, h),
                            t.add(h, E, h),
                            (h = R[5]),
                            t.add(s, c, h),
                            t.add(h, _, h),
                            (h = R[6]),
                            t.add(s, l, h),
                            t.add(h, _, h),
                            (h = R[7]),
                            t.add(s, l, h),
                            t.add(h, E, h);
                        for (var T = R.length, A = 0; A < T; ++A) {
                            var d = R[A];
                            t.add(i, d, d);
                            var S = o.cartesianToCartographic(d, W);
                            r.project(S, d);
                        }
                        (a = f.fromPoints(R, a)), (i = a.center);
                        var m = i.x,
                            N = i.y,
                            C = i.z;
                        return (i.x = C), (i.y = m), (i.z = N), a;
                    }),
                    (f.isOccluded = function (t, e) {
                        return !e.isBoundingSphereVisible(t);
                    }),
                    (f.equals = function (e, r) {
                        return (
                            e === r ||
                            (a(e) &&
                                a(r) &&
                                t.equals(e.center, r.center) &&
                                e.radius === r.radius)
                        );
                    }),
                    (f.prototype.intersectPlane = function (t) {
                        return f.intersectPlane(this, t);
                    }),
                    (f.prototype.distanceSquaredTo = function (t) {
                        return f.distanceSquaredTo(this, t);
                    }),
                    (f.prototype.computePlaneDistances = function (t, e, r) {
                        return f.computePlaneDistances(this, t, e, r);
                    }),
                    (f.prototype.isOccluded = function (t) {
                        return f.isOccluded(this, t);
                    }),
                    (f.prototype.equals = function (t) {
                        return f.equals(this, t);
                    }),
                    (f.prototype.clone = function (t) {
                        return f.clone(this, t);
                    }),
                    f
                );
            },
        ),
        define(
            'Core/Fullscreen',
            ['./defined', './defineProperties'],
            function (t, e) {
                'use strict';
                var r,
                    n = {
                        requestFullscreen: void 0,
                        exitFullscreen: void 0,
                        fullscreenEnabled: void 0,
                        fullscreenElement: void 0,
                        fullscreenchange: void 0,
                        fullscreenerror: void 0,
                    },
                    a = {};
                return (
                    e(a, {
                        element: {
                            get: function () {
                                if (a.supportsFullscreen())
                                    return document[n.fullscreenElement];
                            },
                        },
                        changeEventName: {
                            get: function () {
                                if (a.supportsFullscreen())
                                    return n.fullscreenchange;
                            },
                        },
                        errorEventName: {
                            get: function () {
                                if (a.supportsFullscreen())
                                    return n.fullscreenerror;
                            },
                        },
                        enabled: {
                            get: function () {
                                if (a.supportsFullscreen())
                                    return document[n.fullscreenEnabled];
                            },
                        },
                        fullscreen: {
                            get: function () {
                                if (a.supportsFullscreen())
                                    return null !== a.element;
                            },
                        },
                    }),
                    (a.supportsFullscreen = function () {
                        if (t(r)) return r;
                        r = !1;
                        var e = document.body;
                        if ('function' == typeof e.requestFullscreen)
                            return (
                                (n.requestFullscreen = 'requestFullscreen'),
                                (n.exitFullscreen = 'exitFullscreen'),
                                (n.fullscreenEnabled = 'fullscreenEnabled'),
                                (n.fullscreenElement = 'fullscreenElement'),
                                (n.fullscreenchange = 'fullscreenchange'),
                                (n.fullscreenerror = 'fullscreenerror'),
                                (r = !0)
                            );
                        for (
                            var a,
                                o = ['webkit', 'moz', 'o', 'ms', 'khtml'],
                                i = 0,
                                u = o.length;
                            i < u;
                            ++i
                        ) {
                            var s = o[i];
                            (a = s + 'RequestFullscreen'),
                                'function' == typeof e[a]
                                    ? ((n.requestFullscreen = a), (r = !0))
                                    : ((a = s + 'RequestFullScreen'),
                                      'function' == typeof e[a] &&
                                          ((n.requestFullscreen = a),
                                          (r = !0))),
                                (a = s + 'ExitFullscreen'),
                                'function' == typeof document[a]
                                    ? (n.exitFullscreen = a)
                                    : ((a = s + 'CancelFullScreen'),
                                      'function' == typeof document[a] &&
                                          (n.exitFullscreen = a)),
                                (a = s + 'FullscreenEnabled'),
                                void 0 !== document[a]
                                    ? (n.fullscreenEnabled = a)
                                    : ((a = s + 'FullScreenEnabled'),
                                      void 0 !== document[a] &&
                                          (n.fullscreenEnabled = a)),
                                (a = s + 'FullscreenElement'),
                                void 0 !== document[a]
                                    ? (n.fullscreenElement = a)
                                    : ((a = s + 'FullScreenElement'),
                                      void 0 !== document[a] &&
                                          (n.fullscreenElement = a)),
                                (a = s + 'fullscreenchange'),
                                void 0 !== document['on' + a] &&
                                    ('ms' === s && (a = 'MSFullscreenChange'),
                                    (n.fullscreenchange = a)),
                                (a = s + 'fullscreenerror'),
                                void 0 !== document['on' + a] &&
                                    ('ms' === s && (a = 'MSFullscreenError'),
                                    (n.fullscreenerror = a));
                        }
                        return r;
                    }),
                    (a.requestFullscreen = function (t, e) {
                        a.supportsFullscreen() &&
                            t[n.requestFullscreen]({ vrDisplay: e });
                    }),
                    (a.exitFullscreen = function () {
                        a.supportsFullscreen() && document[n.exitFullscreen]();
                    }),
                    a
                );
            },
        ),
        define(
            'Core/FeatureDetection',
            ['./defaultValue', './defined', './Fullscreen'],
            function (t, e, r) {
                'use strict';
                function n(t) {
                    for (var e = t.split('.'), r = 0, n = e.length; r < n; ++r)
                        e[r] = parseInt(e[r], 10);
                    return e;
                }
                function a() {
                    if (!e(N) && ((N = !1), !f())) {
                        var t = / Chrome\/([\.0-9]+)/.exec(m.userAgent);
                        null !== t && ((N = !0), (C = n(t[1])));
                    }
                    return N;
                }
                function o() {
                    return a() && C;
                }
                function i() {
                    if (
                        !e(I) &&
                        ((I = !1),
                        !a() && !f() && / Safari\/[\.0-9]+/.test(m.userAgent))
                    ) {
                        var t = / Version\/([\.0-9]+)/.exec(m.userAgent);
                        null !== t && ((I = !0), (p = n(t[1])));
                    }
                    return I;
                }
                function u() {
                    return i() && p;
                }
                function s() {
                    if (!e(M)) {
                        M = !1;
                        var t = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            m.userAgent,
                        );
                        null !== t &&
                            ((M = !0), (O = n(t[1])), (O.isNightly = !!t[2]));
                    }
                    return M;
                }
                function E() {
                    return s() && O;
                }
                function c() {
                    if (!e(g)) {
                        g = !1;
                        var t;
                        'Microsoft Internet Explorer' === m.appName
                            ? null !==
                                  (t = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      m.userAgent,
                                  )) && ((g = !0), (y = n(t[1])))
                            : 'Netscape' === m.appName &&
                              null !==
                                  (t =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          m.userAgent,
                                      )) &&
                              ((g = !0), (y = n(t[1])));
                    }
                    return g;
                }
                function l() {
                    return c() && y;
                }
                function f() {
                    if (!e(F)) {
                        F = !1;
                        var t = / Edge\/([\.0-9]+)/.exec(m.userAgent);
                        null !== t && ((F = !0), (L = n(t[1])));
                    }
                    return F;
                }
                function _() {
                    return f() && L;
                }
                function R() {
                    if (!e(v)) {
                        v = !1;
                        var t = /Firefox\/([\.0-9]+)/.exec(m.userAgent);
                        null !== t && ((v = !0), (U = n(t[1])));
                    }
                    return v;
                }
                function h() {
                    return e(D) || (D = /Windows/i.test(m.appVersion)), D;
                }
                function T() {
                    return R() && U;
                }
                function A() {
                    return (
                        e(P) ||
                            (P =
                                'undefined' != typeof PointerEvent &&
                                (!e(m.pointerEnabled) || m.pointerEnabled)),
                        P
                    );
                }
                function d() {
                    if (!e(B)) {
                        var t = document.createElement('canvas');
                        t.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var r = t.style.imageRendering;
                        (B = e(r) && '' !== r), B && (w = r);
                    }
                    return B;
                }
                function S() {
                    return d() ? w : void 0;
                }
                var m;
                m = 'undefined' != typeof navigator ? navigator : {};
                var N,
                    C,
                    I,
                    p,
                    M,
                    O,
                    g,
                    y,
                    F,
                    L,
                    v,
                    U,
                    D,
                    P,
                    w,
                    B,
                    x = {
                        isChrome: a,
                        chromeVersion: o,
                        isSafari: i,
                        safariVersion: u,
                        isWebkit: s,
                        webkitVersion: E,
                        isInternetExplorer: c,
                        internetExplorerVersion: l,
                        isEdge: f,
                        edgeVersion: _,
                        isFirefox: R,
                        firefoxVersion: T,
                        isWindows: h,
                        hardwareConcurrency: t(m.hardwareConcurrency, 3),
                        supportsPointerEvents: A,
                        supportsImageRenderingPixelated: d,
                        imageRenderingValue: S,
                    };
                return (
                    (x.supportsFullscreen = function () {
                        return r.supportsFullscreen();
                    }),
                    (x.supportsTypedArrays = function () {
                        return 'undefined' != typeof ArrayBuffer;
                    }),
                    (x.supportsWebWorkers = function () {
                        return 'undefined' != typeof Worker;
                    }),
                    x
                );
            },
        ),
        define(
            'Core/Color',
            [
                './Check',
                './defaultValue',
                './defined',
                './FeatureDetection',
                './freezeObject',
                './Math',
            ],
            function (t, e, r, n, a, o) {
                'use strict';
                function i(t, e, r) {
                    return (
                        r < 0 && (r += 1),
                        r > 1 && (r -= 1),
                        6 * r < 1
                            ? t + 6 * (e - t) * r
                            : 2 * r < 1
                              ? e
                              : 3 * r < 2
                                ? t + (e - t) * (2 / 3 - r) * 6
                                : t
                    );
                }
                function u(t, r, n, a) {
                    (this.red = e(t, 1)),
                        (this.green = e(r, 1)),
                        (this.blue = e(n, 1)),
                        (this.alpha = e(a, 1));
                }
                (u.fromCartesian4 = function (t, e) {
                    return r(e)
                        ? ((e.red = t.x),
                          (e.green = t.y),
                          (e.blue = t.z),
                          (e.alpha = t.w),
                          e)
                        : new u(t.x, t.y, t.z, t.w);
                }),
                    (u.fromBytes = function (t, n, a, o, i) {
                        return (
                            (t = u.byteToFloat(e(t, 255))),
                            (n = u.byteToFloat(e(n, 255))),
                            (a = u.byteToFloat(e(a, 255))),
                            (o = u.byteToFloat(e(o, 255))),
                            r(i)
                                ? ((i.red = t),
                                  (i.green = n),
                                  (i.blue = a),
                                  (i.alpha = o),
                                  i)
                                : new u(t, n, a, o)
                        );
                    }),
                    (u.fromAlpha = function (t, e, n) {
                        return r(n)
                            ? ((n.red = t.red),
                              (n.green = t.green),
                              (n.blue = t.blue),
                              (n.alpha = e),
                              n)
                            : new u(t.red, t.green, t.blue, e);
                    });
                var s, E, c;
                n.supportsTypedArrays() &&
                    ((s = new ArrayBuffer(4)),
                    (E = new Uint32Array(s)),
                    (c = new Uint8Array(s))),
                    (u.fromRgba = function (t, e) {
                        return (
                            (E[0] = t), u.fromBytes(c[0], c[1], c[2], c[3], e)
                        );
                    }),
                    (u.fromHsl = function (t, n, a, o, s) {
                        (t = e(t, 0) % 1),
                            (n = e(n, 0)),
                            (a = e(a, 0)),
                            (o = e(o, 1));
                        var E = a,
                            c = a,
                            l = a;
                        if (0 !== n) {
                            var f;
                            f = a < 0.5 ? a * (1 + n) : a + n - a * n;
                            var _ = 2 * a - f;
                            (E = i(_, f, t + 1 / 3)),
                                (c = i(_, f, t)),
                                (l = i(_, f, t - 1 / 3));
                        }
                        return r(s)
                            ? ((s.red = E),
                              (s.green = c),
                              (s.blue = l),
                              (s.alpha = o),
                              s)
                            : new u(E, c, l, o);
                    }),
                    (u.fromRandom = function (t, n) {
                        t = e(t, e.EMPTY_OBJECT);
                        var a = t.red;
                        if (!r(a)) {
                            var i = e(t.minimumRed, 0),
                                s = e(t.maximumRed, 1);
                            a = i + o.nextRandomNumber() * (s - i);
                        }
                        var E = t.green;
                        if (!r(E)) {
                            var c = e(t.minimumGreen, 0),
                                l = e(t.maximumGreen, 1);
                            E = c + o.nextRandomNumber() * (l - c);
                        }
                        var f = t.blue;
                        if (!r(f)) {
                            var _ = e(t.minimumBlue, 0),
                                R = e(t.maximumBlue, 1);
                            f = _ + o.nextRandomNumber() * (R - _);
                        }
                        var h = t.alpha;
                        if (!r(h)) {
                            var T = e(t.minimumAlpha, 0),
                                A = e(t.maximumAlpha, 1);
                            h = T + o.nextRandomNumber() * (A - T);
                        }
                        return r(n)
                            ? ((n.red = a),
                              (n.green = E),
                              (n.blue = f),
                              (n.alpha = h),
                              n)
                            : new u(a, E, f, h);
                    });
                var l = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i,
                    f = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
                    _ =
                        /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
                    R =
                        /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
                return (
                    (u.fromCssColorString = function (t, n) {
                        r(n) || (n = new u());
                        var a = u[t.toUpperCase()];
                        if (r(a)) return u.clone(a, n), n;
                        var o = l.exec(t);
                        return null !== o
                            ? ((n.red = parseInt(o[1], 16) / 15),
                              (n.green = parseInt(o[2], 16) / 15),
                              (n.blue = parseInt(o[3], 16) / 15),
                              (n.alpha = 1),
                              n)
                            : null !== (o = f.exec(t))
                              ? ((n.red = parseInt(o[1], 16) / 255),
                                (n.green = parseInt(o[2], 16) / 255),
                                (n.blue = parseInt(o[3], 16) / 255),
                                (n.alpha = 1),
                                n)
                              : null !== (o = _.exec(t))
                                ? ((n.red =
                                      parseFloat(o[1]) /
                                      ('%' === o[1].substr(-1) ? 100 : 255)),
                                  (n.green =
                                      parseFloat(o[2]) /
                                      ('%' === o[2].substr(-1) ? 100 : 255)),
                                  (n.blue =
                                      parseFloat(o[3]) /
                                      ('%' === o[3].substr(-1) ? 100 : 255)),
                                  (n.alpha = parseFloat(e(o[4], '1.0'))),
                                  n)
                                : null !== (o = R.exec(t))
                                  ? u.fromHsl(
                                        parseFloat(o[1]) / 360,
                                        parseFloat(o[2]) / 100,
                                        parseFloat(o[3]) / 100,
                                        parseFloat(e(o[4], '1.0')),
                                        n,
                                    )
                                  : (n = void 0);
                    }),
                    (u.packedLength = 4),
                    (u.pack = function (t, r, n) {
                        return (
                            (n = e(n, 0)),
                            (r[n++] = t.red),
                            (r[n++] = t.green),
                            (r[n++] = t.blue),
                            (r[n] = t.alpha),
                            r
                        );
                    }),
                    (u.unpack = function (t, n, a) {
                        return (
                            (n = e(n, 0)),
                            r(a) || (a = new u()),
                            (a.red = t[n++]),
                            (a.green = t[n++]),
                            (a.blue = t[n++]),
                            (a.alpha = t[n]),
                            a
                        );
                    }),
                    (u.byteToFloat = function (t) {
                        return t / 255;
                    }),
                    (u.floatToByte = function (t) {
                        return 1 === t ? 255 : (256 * t) | 0;
                    }),
                    (u.clone = function (t, e) {
                        if (r(t))
                            return r(e)
                                ? ((e.red = t.red),
                                  (e.green = t.green),
                                  (e.blue = t.blue),
                                  (e.alpha = t.alpha),
                                  e)
                                : new u(t.red, t.green, t.blue, t.alpha);
                    }),
                    (u.equals = function (t, e) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                t.red === e.red &&
                                t.green === e.green &&
                                t.blue === e.blue &&
                                t.alpha === e.alpha)
                        );
                    }),
                    (u.equalsArray = function (t, e, r) {
                        return (
                            t.red === e[r] &&
                            t.green === e[r + 1] &&
                            t.blue === e[r + 2] &&
                            t.alpha === e[r + 3]
                        );
                    }),
                    (u.prototype.clone = function (t) {
                        return u.clone(this, t);
                    }),
                    (u.prototype.equals = function (t) {
                        return u.equals(this, t);
                    }),
                    (u.prototype.equalsEpsilon = function (t, e) {
                        return (
                            this === t ||
                            (r(t) &&
                                Math.abs(this.red - t.red) <= e &&
                                Math.abs(this.green - t.green) <= e &&
                                Math.abs(this.blue - t.blue) <= e &&
                                Math.abs(this.alpha - t.alpha) <= e)
                        );
                    }),
                    (u.prototype.toString = function () {
                        return (
                            '(' +
                            this.red +
                            ', ' +
                            this.green +
                            ', ' +
                            this.blue +
                            ', ' +
                            this.alpha +
                            ')'
                        );
                    }),
                    (u.prototype.toCssColorString = function () {
                        var t = u.floatToByte(this.red),
                            e = u.floatToByte(this.green),
                            r = u.floatToByte(this.blue);
                        return 1 === this.alpha
                            ? 'rgb(' + t + ',' + e + ',' + r + ')'
                            : 'rgba(' +
                                  t +
                                  ',' +
                                  e +
                                  ',' +
                                  r +
                                  ',' +
                                  this.alpha +
                                  ')';
                    }),
                    (u.prototype.toBytes = function (t) {
                        var e = u.floatToByte(this.red),
                            n = u.floatToByte(this.green),
                            a = u.floatToByte(this.blue),
                            o = u.floatToByte(this.alpha);
                        return r(t)
                            ? ((t[0] = e),
                              (t[1] = n),
                              (t[2] = a),
                              (t[3] = o),
                              t)
                            : [e, n, a, o];
                    }),
                    (u.prototype.toRgba = function () {
                        return (
                            (c[0] = u.floatToByte(this.red)),
                            (c[1] = u.floatToByte(this.green)),
                            (c[2] = u.floatToByte(this.blue)),
                            (c[3] = u.floatToByte(this.alpha)),
                            E[0]
                        );
                    }),
                    (u.prototype.brighten = function (t, e) {
                        return (
                            (t = 1 - t),
                            (e.red = 1 - (1 - this.red) * t),
                            (e.green = 1 - (1 - this.green) * t),
                            (e.blue = 1 - (1 - this.blue) * t),
                            (e.alpha = this.alpha),
                            e
                        );
                    }),
                    (u.prototype.darken = function (t, e) {
                        return (
                            (t = 1 - t),
                            (e.red = this.red * t),
                            (e.green = this.green * t),
                            (e.blue = this.blue * t),
                            (e.alpha = this.alpha),
                            e
                        );
                    }),
                    (u.prototype.withAlpha = function (t, e) {
                        return u.fromAlpha(this, t, e);
                    }),
                    (u.add = function (t, e, r) {
                        return (
                            (r.red = t.red + e.red),
                            (r.green = t.green + e.green),
                            (r.blue = t.blue + e.blue),
                            (r.alpha = t.alpha + e.alpha),
                            r
                        );
                    }),
                    (u.subtract = function (t, e, r) {
                        return (
                            (r.red = t.red - e.red),
                            (r.green = t.green - e.green),
                            (r.blue = t.blue - e.blue),
                            (r.alpha = t.alpha - e.alpha),
                            r
                        );
                    }),
                    (u.multiply = function (t, e, r) {
                        return (
                            (r.red = t.red * e.red),
                            (r.green = t.green * e.green),
                            (r.blue = t.blue * e.blue),
                            (r.alpha = t.alpha * e.alpha),
                            r
                        );
                    }),
                    (u.divide = function (t, e, r) {
                        return (
                            (r.red = t.red / e.red),
                            (r.green = t.green / e.green),
                            (r.blue = t.blue / e.blue),
                            (r.alpha = t.alpha / e.alpha),
                            r
                        );
                    }),
                    (u.mod = function (t, e, r) {
                        return (
                            (r.red = t.red % e.red),
                            (r.green = t.green % e.green),
                            (r.blue = t.blue % e.blue),
                            (r.alpha = t.alpha % e.alpha),
                            r
                        );
                    }),
                    (u.multiplyByScalar = function (t, e, r) {
                        return (
                            (r.red = t.red * e),
                            (r.green = t.green * e),
                            (r.blue = t.blue * e),
                            (r.alpha = t.alpha * e),
                            r
                        );
                    }),
                    (u.divideByScalar = function (t, e, r) {
                        return (
                            (r.red = t.red / e),
                            (r.green = t.green / e),
                            (r.blue = t.blue / e),
                            (r.alpha = t.alpha / e),
                            r
                        );
                    }),
                    (u.ALICEBLUE = a(u.fromCssColorString('#F0F8FF'))),
                    (u.ANTIQUEWHITE = a(u.fromCssColorString('#FAEBD7'))),
                    (u.AQUA = a(u.fromCssColorString('#00FFFF'))),
                    (u.AQUAMARINE = a(u.fromCssColorString('#7FFFD4'))),
                    (u.AZURE = a(u.fromCssColorString('#F0FFFF'))),
                    (u.BEIGE = a(u.fromCssColorString('#F5F5DC'))),
                    (u.BISQUE = a(u.fromCssColorString('#FFE4C4'))),
                    (u.BLACK = a(u.fromCssColorString('#000000'))),
                    (u.BLANCHEDALMOND = a(u.fromCssColorString('#FFEBCD'))),
                    (u.BLUE = a(u.fromCssColorString('#0000FF'))),
                    (u.BLUEVIOLET = a(u.fromCssColorString('#8A2BE2'))),
                    (u.BROWN = a(u.fromCssColorString('#A52A2A'))),
                    (u.BURLYWOOD = a(u.fromCssColorString('#DEB887'))),
                    (u.CADETBLUE = a(u.fromCssColorString('#5F9EA0'))),
                    (u.CHARTREUSE = a(u.fromCssColorString('#7FFF00'))),
                    (u.CHOCOLATE = a(u.fromCssColorString('#D2691E'))),
                    (u.CORAL = a(u.fromCssColorString('#FF7F50'))),
                    (u.CORNFLOWERBLUE = a(u.fromCssColorString('#6495ED'))),
                    (u.CORNSILK = a(u.fromCssColorString('#FFF8DC'))),
                    (u.CRIMSON = a(u.fromCssColorString('#DC143C'))),
                    (u.CYAN = a(u.fromCssColorString('#00FFFF'))),
                    (u.DARKBLUE = a(u.fromCssColorString('#00008B'))),
                    (u.DARKCYAN = a(u.fromCssColorString('#008B8B'))),
                    (u.DARKGOLDENROD = a(u.fromCssColorString('#B8860B'))),
                    (u.DARKGRAY = a(u.fromCssColorString('#A9A9A9'))),
                    (u.DARKGREEN = a(u.fromCssColorString('#006400'))),
                    (u.DARKGREY = u.DARKGRAY),
                    (u.DARKKHAKI = a(u.fromCssColorString('#BDB76B'))),
                    (u.DARKMAGENTA = a(u.fromCssColorString('#8B008B'))),
                    (u.DARKOLIVEGREEN = a(u.fromCssColorString('#556B2F'))),
                    (u.DARKORANGE = a(u.fromCssColorString('#FF8C00'))),
                    (u.DARKORCHID = a(u.fromCssColorString('#9932CC'))),
                    (u.DARKRED = a(u.fromCssColorString('#8B0000'))),
                    (u.DARKSALMON = a(u.fromCssColorString('#E9967A'))),
                    (u.DARKSEAGREEN = a(u.fromCssColorString('#8FBC8F'))),
                    (u.DARKSLATEBLUE = a(u.fromCssColorString('#483D8B'))),
                    (u.DARKSLATEGRAY = a(u.fromCssColorString('#2F4F4F'))),
                    (u.DARKSLATEGREY = u.DARKSLATEGRAY),
                    (u.DARKTURQUOISE = a(u.fromCssColorString('#00CED1'))),
                    (u.DARKVIOLET = a(u.fromCssColorString('#9400D3'))),
                    (u.DEEPPINK = a(u.fromCssColorString('#FF1493'))),
                    (u.DEEPSKYBLUE = a(u.fromCssColorString('#00BFFF'))),
                    (u.DIMGRAY = a(u.fromCssColorString('#696969'))),
                    (u.DIMGREY = u.DIMGRAY),
                    (u.DODGERBLUE = a(u.fromCssColorString('#1E90FF'))),
                    (u.FIREBRICK = a(u.fromCssColorString('#B22222'))),
                    (u.FLORALWHITE = a(u.fromCssColorString('#FFFAF0'))),
                    (u.FORESTGREEN = a(u.fromCssColorString('#228B22'))),
                    (u.FUCHSIA = a(u.fromCssColorString('#FF00FF'))),
                    (u.GAINSBORO = a(u.fromCssColorString('#DCDCDC'))),
                    (u.GHOSTWHITE = a(u.fromCssColorString('#F8F8FF'))),
                    (u.GOLD = a(u.fromCssColorString('#FFD700'))),
                    (u.GOLDENROD = a(u.fromCssColorString('#DAA520'))),
                    (u.GRAY = a(u.fromCssColorString('#808080'))),
                    (u.GREEN = a(u.fromCssColorString('#008000'))),
                    (u.GREENYELLOW = a(u.fromCssColorString('#ADFF2F'))),
                    (u.GREY = u.GRAY),
                    (u.HONEYDEW = a(u.fromCssColorString('#F0FFF0'))),
                    (u.HOTPINK = a(u.fromCssColorString('#FF69B4'))),
                    (u.INDIANRED = a(u.fromCssColorString('#CD5C5C'))),
                    (u.INDIGO = a(u.fromCssColorString('#4B0082'))),
                    (u.IVORY = a(u.fromCssColorString('#FFFFF0'))),
                    (u.KHAKI = a(u.fromCssColorString('#F0E68C'))),
                    (u.LAVENDER = a(u.fromCssColorString('#E6E6FA'))),
                    (u.LAVENDAR_BLUSH = a(u.fromCssColorString('#FFF0F5'))),
                    (u.LAWNGREEN = a(u.fromCssColorString('#7CFC00'))),
                    (u.LEMONCHIFFON = a(u.fromCssColorString('#FFFACD'))),
                    (u.LIGHTBLUE = a(u.fromCssColorString('#ADD8E6'))),
                    (u.LIGHTCORAL = a(u.fromCssColorString('#F08080'))),
                    (u.LIGHTCYAN = a(u.fromCssColorString('#E0FFFF'))),
                    (u.LIGHTGOLDENRODYELLOW = a(
                        u.fromCssColorString('#FAFAD2'),
                    )),
                    (u.LIGHTGRAY = a(u.fromCssColorString('#D3D3D3'))),
                    (u.LIGHTGREEN = a(u.fromCssColorString('#90EE90'))),
                    (u.LIGHTGREY = u.LIGHTGRAY),
                    (u.LIGHTPINK = a(u.fromCssColorString('#FFB6C1'))),
                    (u.LIGHTSEAGREEN = a(u.fromCssColorString('#20B2AA'))),
                    (u.LIGHTSKYBLUE = a(u.fromCssColorString('#87CEFA'))),
                    (u.LIGHTSLATEGRAY = a(u.fromCssColorString('#778899'))),
                    (u.LIGHTSLATEGREY = u.LIGHTSLATEGRAY),
                    (u.LIGHTSTEELBLUE = a(u.fromCssColorString('#B0C4DE'))),
                    (u.LIGHTYELLOW = a(u.fromCssColorString('#FFFFE0'))),
                    (u.LIME = a(u.fromCssColorString('#00FF00'))),
                    (u.LIMEGREEN = a(u.fromCssColorString('#32CD32'))),
                    (u.LINEN = a(u.fromCssColorString('#FAF0E6'))),
                    (u.MAGENTA = a(u.fromCssColorString('#FF00FF'))),
                    (u.MAROON = a(u.fromCssColorString('#800000'))),
                    (u.MEDIUMAQUAMARINE = a(u.fromCssColorString('#66CDAA'))),
                    (u.MEDIUMBLUE = a(u.fromCssColorString('#0000CD'))),
                    (u.MEDIUMORCHID = a(u.fromCssColorString('#BA55D3'))),
                    (u.MEDIUMPURPLE = a(u.fromCssColorString('#9370DB'))),
                    (u.MEDIUMSEAGREEN = a(u.fromCssColorString('#3CB371'))),
                    (u.MEDIUMSLATEBLUE = a(u.fromCssColorString('#7B68EE'))),
                    (u.MEDIUMSPRINGGREEN = a(u.fromCssColorString('#00FA9A'))),
                    (u.MEDIUMTURQUOISE = a(u.fromCssColorString('#48D1CC'))),
                    (u.MEDIUMVIOLETRED = a(u.fromCssColorString('#C71585'))),
                    (u.MIDNIGHTBLUE = a(u.fromCssColorString('#191970'))),
                    (u.MINTCREAM = a(u.fromCssColorString('#F5FFFA'))),
                    (u.MISTYROSE = a(u.fromCssColorString('#FFE4E1'))),
                    (u.MOCCASIN = a(u.fromCssColorString('#FFE4B5'))),
                    (u.NAVAJOWHITE = a(u.fromCssColorString('#FFDEAD'))),
                    (u.NAVY = a(u.fromCssColorString('#000080'))),
                    (u.OLDLACE = a(u.fromCssColorString('#FDF5E6'))),
                    (u.OLIVE = a(u.fromCssColorString('#808000'))),
                    (u.OLIVEDRAB = a(u.fromCssColorString('#6B8E23'))),
                    (u.ORANGE = a(u.fromCssColorString('#FFA500'))),
                    (u.ORANGERED = a(u.fromCssColorString('#FF4500'))),
                    (u.ORCHID = a(u.fromCssColorString('#DA70D6'))),
                    (u.PALEGOLDENROD = a(u.fromCssColorString('#EEE8AA'))),
                    (u.PALEGREEN = a(u.fromCssColorString('#98FB98'))),
                    (u.PALETURQUOISE = a(u.fromCssColorString('#AFEEEE'))),
                    (u.PALEVIOLETRED = a(u.fromCssColorString('#DB7093'))),
                    (u.PAPAYAWHIP = a(u.fromCssColorString('#FFEFD5'))),
                    (u.PEACHPUFF = a(u.fromCssColorString('#FFDAB9'))),
                    (u.PERU = a(u.fromCssColorString('#CD853F'))),
                    (u.PINK = a(u.fromCssColorString('#FFC0CB'))),
                    (u.PLUM = a(u.fromCssColorString('#DDA0DD'))),
                    (u.POWDERBLUE = a(u.fromCssColorString('#B0E0E6'))),
                    (u.PURPLE = a(u.fromCssColorString('#800080'))),
                    (u.RED = a(u.fromCssColorString('#FF0000'))),
                    (u.ROSYBROWN = a(u.fromCssColorString('#BC8F8F'))),
                    (u.ROYALBLUE = a(u.fromCssColorString('#4169E1'))),
                    (u.SADDLEBROWN = a(u.fromCssColorString('#8B4513'))),
                    (u.SALMON = a(u.fromCssColorString('#FA8072'))),
                    (u.SANDYBROWN = a(u.fromCssColorString('#F4A460'))),
                    (u.SEAGREEN = a(u.fromCssColorString('#2E8B57'))),
                    (u.SEASHELL = a(u.fromCssColorString('#FFF5EE'))),
                    (u.SIENNA = a(u.fromCssColorString('#A0522D'))),
                    (u.SILVER = a(u.fromCssColorString('#C0C0C0'))),
                    (u.SKYBLUE = a(u.fromCssColorString('#87CEEB'))),
                    (u.SLATEBLUE = a(u.fromCssColorString('#6A5ACD'))),
                    (u.SLATEGRAY = a(u.fromCssColorString('#708090'))),
                    (u.SLATEGREY = u.SLATEGRAY),
                    (u.SNOW = a(u.fromCssColorString('#FFFAFA'))),
                    (u.SPRINGGREEN = a(u.fromCssColorString('#00FF7F'))),
                    (u.STEELBLUE = a(u.fromCssColorString('#4682B4'))),
                    (u.TAN = a(u.fromCssColorString('#D2B48C'))),
                    (u.TEAL = a(u.fromCssColorString('#008080'))),
                    (u.THISTLE = a(u.fromCssColorString('#D8BFD8'))),
                    (u.TOMATO = a(u.fromCssColorString('#FF6347'))),
                    (u.TURQUOISE = a(u.fromCssColorString('#40E0D0'))),
                    (u.VIOLET = a(u.fromCssColorString('#EE82EE'))),
                    (u.WHEAT = a(u.fromCssColorString('#F5DEB3'))),
                    (u.WHITE = a(u.fromCssColorString('#FFFFFF'))),
                    (u.WHITESMOKE = a(u.fromCssColorString('#F5F5F5'))),
                    (u.YELLOW = a(u.fromCssColorString('#FFFF00'))),
                    (u.YELLOWGREEN = a(u.fromCssColorString('#9ACD32'))),
                    (u.TRANSPARENT = a(new u(0, 0, 0, 0))),
                    u
                );
            },
        ),
        define('Core/WebGLConstants', ['./freezeObject'], function (t) {
            'use strict';
            return t({
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
            'Core/ComponentDatatype',
            [
                './defaultValue',
                './defined',
                './DeveloperError',
                './FeatureDetection',
                './freezeObject',
                './WebGLConstants',
            ],
            function (t, e, r, n, a, o) {
                'use strict';
                if (!n.supportsTypedArrays()) return {};
                var i = {
                    BYTE: o.BYTE,
                    UNSIGNED_BYTE: o.UNSIGNED_BYTE,
                    SHORT: o.SHORT,
                    UNSIGNED_SHORT: o.UNSIGNED_SHORT,
                    INT: o.INT,
                    UNSIGNED_INT: o.UNSIGNED_INT,
                    FLOAT: o.FLOAT,
                    DOUBLE: o.DOUBLE,
                };
                return (
                    (i.getSizeInBytes = function (t) {
                        switch (t) {
                            case i.BYTE:
                                return Int8Array.BYTES_PER_ELEMENT;
                            case i.UNSIGNED_BYTE:
                                return Uint8Array.BYTES_PER_ELEMENT;
                            case i.SHORT:
                                return Int16Array.BYTES_PER_ELEMENT;
                            case i.UNSIGNED_SHORT:
                                return Uint16Array.BYTES_PER_ELEMENT;
                            case i.INT:
                                return Int32Array.BYTES_PER_ELEMENT;
                            case i.UNSIGNED_INT:
                                return Uint32Array.BYTES_PER_ELEMENT;
                            case i.FLOAT:
                                return Float32Array.BYTES_PER_ELEMENT;
                            case i.DOUBLE:
                                return Float64Array.BYTES_PER_ELEMENT;
                        }
                    }),
                    (i.fromTypedArray = function (t) {
                        return t instanceof Int8Array
                            ? i.BYTE
                            : t instanceof Uint8Array
                              ? i.UNSIGNED_BYTE
                              : t instanceof Int16Array
                                ? i.SHORT
                                : t instanceof Uint16Array
                                  ? i.UNSIGNED_SHORT
                                  : t instanceof Int32Array
                                    ? i.INT
                                    : t instanceof Uint32Array
                                      ? i.UNSIGNED_INT
                                      : t instanceof Float32Array
                                        ? i.FLOAT
                                        : t instanceof Float64Array
                                          ? i.DOUBLE
                                          : void 0;
                    }),
                    (i.validate = function (t) {
                        return (
                            e(t) &&
                            (t === i.BYTE ||
                                t === i.UNSIGNED_BYTE ||
                                t === i.SHORT ||
                                t === i.UNSIGNED_SHORT ||
                                t === i.INT ||
                                t === i.UNSIGNED_INT ||
                                t === i.FLOAT ||
                                t === i.DOUBLE)
                        );
                    }),
                    (i.createTypedArray = function (t, e) {
                        switch (t) {
                            case i.BYTE:
                                return new Int8Array(e);
                            case i.UNSIGNED_BYTE:
                                return new Uint8Array(e);
                            case i.SHORT:
                                return new Int16Array(e);
                            case i.UNSIGNED_SHORT:
                                return new Uint16Array(e);
                            case i.INT:
                                return new Int32Array(e);
                            case i.UNSIGNED_INT:
                                return new Uint32Array(e);
                            case i.FLOAT:
                                return new Float32Array(e);
                            case i.DOUBLE:
                                return new Float64Array(e);
                        }
                    }),
                    (i.createArrayBufferView = function (e, r, n, a) {
                        switch (
                            ((n = t(n, 0)),
                            (a = t(
                                a,
                                (r.byteLength - n) / i.getSizeInBytes(e),
                            )),
                            e)
                        ) {
                            case i.BYTE:
                                return new Int8Array(r, n, a);
                            case i.UNSIGNED_BYTE:
                                return new Uint8Array(r, n, a);
                            case i.SHORT:
                                return new Int16Array(r, n, a);
                            case i.UNSIGNED_SHORT:
                                return new Uint16Array(r, n, a);
                            case i.INT:
                                return new Int32Array(r, n, a);
                            case i.UNSIGNED_INT:
                                return new Uint32Array(r, n, a);
                            case i.FLOAT:
                                return new Float32Array(r, n, a);
                            case i.DOUBLE:
                                return new Float64Array(r, n, a);
                        }
                    }),
                    (i.fromName = function (t) {
                        switch (t) {
                            case 'BYTE':
                                return i.BYTE;
                            case 'UNSIGNED_BYTE':
                                return i.UNSIGNED_BYTE;
                            case 'SHORT':
                                return i.SHORT;
                            case 'UNSIGNED_SHORT':
                                return i.UNSIGNED_SHORT;
                            case 'INT':
                                return i.INT;
                            case 'UNSIGNED_INT':
                                return i.UNSIGNED_INT;
                            case 'FLOAT':
                                return i.FLOAT;
                            case 'DOUBLE':
                                return i.DOUBLE;
                        }
                    }),
                    a(i)
                );
            },
        ),
        define('Core/GeometryType', ['./freezeObject'], function (t) {
            'use strict';
            return t({ NONE: 0, TRIANGLES: 1, LINES: 2, POLYLINES: 3 });
        }),
        define(
            'Core/PrimitiveType',
            ['./freezeObject', './WebGLConstants'],
            function (t, e) {
                'use strict';
                var r = {
                    POINTS: e.POINTS,
                    LINES: e.LINES,
                    LINE_LOOP: e.LINE_LOOP,
                    LINE_STRIP: e.LINE_STRIP,
                    TRIANGLES: e.TRIANGLES,
                    TRIANGLE_STRIP: e.TRIANGLE_STRIP,
                    TRIANGLE_FAN: e.TRIANGLE_FAN,
                    validate: function (t) {
                        return (
                            t === r.POINTS ||
                            t === r.LINES ||
                            t === r.LINE_LOOP ||
                            t === r.LINE_STRIP ||
                            t === r.TRIANGLES ||
                            t === r.TRIANGLE_STRIP ||
                            t === r.TRIANGLE_FAN
                        );
                    },
                };
                return t(r);
            },
        ),
        define(
            'Core/Geometry',
            [
                './Check',
                './defaultValue',
                './defined',
                './DeveloperError',
                './GeometryType',
                './PrimitiveType',
            ],
            function (t, e, r, n, a, o) {
                'use strict';
                function i(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this.attributes = t.attributes),
                        (this.indices = t.indices),
                        (this.primitiveType = e(t.primitiveType, o.TRIANGLES)),
                        (this.boundingSphere = t.boundingSphere),
                        (this.geometryType = e(t.geometryType, a.NONE)),
                        (this.boundingSphereCV = t.boundingSphereCV);
                }
                return (
                    (i.computeNumberOfVertices = function (t) {
                        var e = -1;
                        for (var n in t.attributes)
                            if (
                                t.attributes.hasOwnProperty(n) &&
                                r(t.attributes[n]) &&
                                r(t.attributes[n].values)
                            ) {
                                var a = t.attributes[n],
                                    o =
                                        a.values.length /
                                        a.componentsPerAttribute;
                                e = o;
                            }
                        return e;
                    }),
                    i
                );
            },
        ),
        define(
            'Core/GeometryAttribute',
            ['./defaultValue', './defined', './DeveloperError'],
            function (t, e, r) {
                'use strict';
                function n(e) {
                    (e = t(e, t.EMPTY_OBJECT)),
                        (this.componentDatatype = e.componentDatatype),
                        (this.componentsPerAttribute =
                            e.componentsPerAttribute),
                        (this.normalize = t(e.normalize, !1)),
                        (this.values = e.values);
                }
                return n;
            },
        ),
        define('Core/GeometryAttributes', ['./defaultValue'], function (t) {
            'use strict';
            function e(e) {
                (e = t(e, t.EMPTY_OBJECT)),
                    (this.position = e.position),
                    (this.normal = e.normal),
                    (this.st = e.st),
                    (this.bitangent = e.bitangent),
                    (this.tangent = e.tangent),
                    (this.color = e.color);
            }
            return e;
        }),
        define(
            'Core/IndexDatatype',
            [
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
                './WebGLConstants',
            ],
            function (t, e, r, n, a) {
                'use strict';
                var o = {
                    UNSIGNED_BYTE: a.UNSIGNED_BYTE,
                    UNSIGNED_SHORT: a.UNSIGNED_SHORT,
                    UNSIGNED_INT: a.UNSIGNED_INT,
                };
                return (
                    (o.getSizeInBytes = function (t) {
                        switch (t) {
                            case o.UNSIGNED_BYTE:
                                return Uint8Array.BYTES_PER_ELEMENT;
                            case o.UNSIGNED_SHORT:
                                return Uint16Array.BYTES_PER_ELEMENT;
                            case o.UNSIGNED_INT:
                                return Uint32Array.BYTES_PER_ELEMENT;
                        }
                    }),
                    (o.validate = function (e) {
                        return (
                            t(e) &&
                            (e === o.UNSIGNED_BYTE ||
                                e === o.UNSIGNED_SHORT ||
                                e === o.UNSIGNED_INT)
                        );
                    }),
                    (o.createTypedArray = function (t, e) {
                        return t >= n.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(e)
                            : new Uint16Array(e);
                    }),
                    (o.createTypedArrayFromArrayBuffer = function (t, e, r, a) {
                        return t >= n.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(e, r, a)
                            : new Uint16Array(e, r, a);
                    }),
                    r(o)
                );
            },
        ),
        define(
            'Core/EllipsoidGeodesic',
            [
                './Cartesian3',
                './Cartographic',
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './Ellipsoid',
                './Math',
            ],
            function (t, e, r, n, a, o, i, u) {
                'use strict';
                function s(t) {
                    var e = t._uSquared,
                        r = t._ellipsoid.maximumRadius,
                        n = t._ellipsoid.minimumRadius,
                        a = (r - n) / r,
                        o = Math.cos(t._startHeading),
                        i = Math.sin(t._startHeading),
                        u = (1 - a) * Math.tan(t._start.latitude),
                        s = 1 / Math.sqrt(1 + u * u),
                        E = s * u,
                        c = Math.atan2(u, o),
                        l = s * i,
                        f = l * l,
                        _ = 1 - f,
                        R = Math.sqrt(_),
                        h = e / 4,
                        T = h * h,
                        A = T * h,
                        d = T * T,
                        S = 1 + h - (3 * T) / 4 + (5 * A) / 4 - (175 * d) / 64,
                        m = 1 - h + (15 * T) / 8 - (35 * A) / 8,
                        N = 1 - 3 * h + (35 * T) / 4,
                        C = 1 - 5 * h,
                        I =
                            S * c -
                            (m * Math.sin(2 * c) * h) / 2 -
                            (N * Math.sin(4 * c) * T) / 16 -
                            (C * Math.sin(6 * c) * A) / 48 -
                            (5 * Math.sin(8 * c) * d) / 512,
                        p = t._constants;
                    (p.a = r),
                        (p.b = n),
                        (p.f = a),
                        (p.cosineHeading = o),
                        (p.sineHeading = i),
                        (p.tanU = u),
                        (p.cosineU = s),
                        (p.sineU = E),
                        (p.sigma = c),
                        (p.sineAlpha = l),
                        (p.sineSquaredAlpha = f),
                        (p.cosineSquaredAlpha = _),
                        (p.cosineAlpha = R),
                        (p.u2Over4 = h),
                        (p.u4Over16 = T),
                        (p.u6Over64 = A),
                        (p.u8Over256 = d),
                        (p.a0 = S),
                        (p.a1 = m),
                        (p.a2 = N),
                        (p.a3 = C),
                        (p.distanceRatio = I);
                }
                function E(t, e) {
                    return (t * e * (4 + t * (4 - 3 * e))) / 16;
                }
                function c(t, e, r, n, a, o, i) {
                    var u = E(t, r);
                    return (
                        (1 - u) *
                        t *
                        e *
                        (n + u * a * (i + u * o * (2 * i * i - 1)))
                    );
                }
                function l(t, e, r, n, a, o, i) {
                    var s,
                        E,
                        l,
                        f,
                        _,
                        R = (e - r) / e,
                        h = o - n,
                        T = Math.atan((1 - R) * Math.tan(a)),
                        A = Math.atan((1 - R) * Math.tan(i)),
                        d = Math.cos(T),
                        S = Math.sin(T),
                        m = Math.cos(A),
                        N = Math.sin(A),
                        C = d * m,
                        I = d * N,
                        p = S * N,
                        M = S * m,
                        O = h,
                        g = u.TWO_PI,
                        y = Math.cos(O),
                        F = Math.sin(O);
                    do {
                        (y = Math.cos(O)), (F = Math.sin(O));
                        var L = I - M * y;
                        (l = Math.sqrt(m * m * F * F + L * L)),
                            (E = p + C * y),
                            (s = Math.atan2(l, E));
                        var v;
                        0 === l
                            ? ((v = 0), (f = 1))
                            : ((v = (C * F) / l), (f = 1 - v * v)),
                            (g = O),
                            (_ = E - (2 * p) / f),
                            isNaN(_) && (_ = 0),
                            (O = h + c(R, v, f, s, l, E, _));
                    } while (Math.abs(O - g) > u.EPSILON12);
                    var U = (f * (e * e - r * r)) / (r * r),
                        D =
                            1 +
                            (U * (4096 + U * (U * (320 - 175 * U) - 768))) /
                                16384,
                        P = (U * (256 + U * (U * (74 - 47 * U) - 128))) / 1024,
                        w = _ * _,
                        B =
                            P *
                            l *
                            (_ +
                                (P *
                                    (E * (2 * w - 1) -
                                        (P *
                                            _ *
                                            (4 * l * l - 3) *
                                            (4 * w - 3)) /
                                            6)) /
                                    4),
                        x = r * D * (s - B),
                        G = Math.atan2(m * F, I - M * y),
                        b = Math.atan2(d * F, I * y - M);
                    (t._distance = x),
                        (t._startHeading = G),
                        (t._endHeading = b),
                        (t._uSquared = U);
                }
                function f(r, n, a, o) {
                    t.normalize(o.cartographicToCartesian(n, h), R),
                        t.normalize(o.cartographicToCartesian(a, h), h);
                    l(
                        r,
                        o.maximumRadius,
                        o.minimumRadius,
                        n.longitude,
                        n.latitude,
                        a.longitude,
                        a.latitude,
                    ),
                        (r._start = e.clone(n, r._start)),
                        (r._end = e.clone(a, r._end)),
                        (r._start.height = 0),
                        (r._end.height = 0),
                        s(r);
                }
                function _(t, r, o) {
                    var u = n(o, i.WGS84);
                    (this._ellipsoid = u),
                        (this._start = new e()),
                        (this._end = new e()),
                        (this._constants = {}),
                        (this._startHeading = void 0),
                        (this._endHeading = void 0),
                        (this._distance = void 0),
                        (this._uSquared = void 0),
                        a(t) && a(r) && f(this, t, r, u);
                }
                var R = new t(),
                    h = new t();
                return (
                    o(_.prototype, {
                        ellipsoid: {
                            get: function () {
                                return this._ellipsoid;
                            },
                        },
                        surfaceDistance: {
                            get: function () {
                                return this._distance;
                            },
                        },
                        start: {
                            get: function () {
                                return this._start;
                            },
                        },
                        end: {
                            get: function () {
                                return this._end;
                            },
                        },
                        startHeading: {
                            get: function () {
                                return this._startHeading;
                            },
                        },
                        endHeading: {
                            get: function () {
                                return this._endHeading;
                            },
                        },
                    }),
                    (_.prototype.setEndPoints = function (t, e) {
                        f(this, t, e, this._ellipsoid);
                    }),
                    (_.prototype.interpolateUsingFraction = function (t, e) {
                        return this.interpolateUsingSurfaceDistance(
                            this._distance * t,
                            e,
                        );
                    }),
                    (_.prototype.interpolateUsingSurfaceDistance = function (
                        t,
                        r,
                    ) {
                        var n = this._constants,
                            o = n.distanceRatio + t / n.b,
                            i = Math.cos(2 * o),
                            u = Math.cos(4 * o),
                            s = Math.cos(6 * o),
                            E = Math.sin(2 * o),
                            l = Math.sin(4 * o),
                            f = Math.sin(6 * o),
                            _ = Math.sin(8 * o),
                            R = o * o,
                            h = o * R,
                            T = n.u8Over256,
                            A = n.u2Over4,
                            d = n.u6Over64,
                            S = n.u4Over16,
                            m =
                                (2 * h * T * i) / 3 +
                                o *
                                    (1 -
                                        A +
                                        (7 * S) / 4 -
                                        (15 * d) / 4 +
                                        (579 * T) / 64 -
                                        (S - (15 * d) / 4 + (187 * T) / 16) *
                                            i -
                                        ((5 * d) / 4 - (115 * T) / 16) * u -
                                        (29 * T * s) / 16) +
                                (A / 2 - S + (71 * d) / 32 - (85 * T) / 16) *
                                    E +
                                ((5 * S) / 16 - (5 * d) / 4 + (383 * T) / 96) *
                                    l -
                                R * ((d - (11 * T) / 2) * E + (5 * T * l) / 2) +
                                ((29 * d) / 96 - (29 * T) / 16) * f +
                                (539 * T * _) / 1536,
                            N = Math.asin(Math.sin(m) * n.cosineAlpha),
                            C = Math.atan((n.a / n.b) * Math.tan(N));
                        m -= n.sigma;
                        var I = Math.cos(2 * n.sigma + m),
                            p = Math.sin(m),
                            M = Math.cos(m),
                            O = n.cosineU * M,
                            g = n.sineU * p,
                            y = Math.atan2(
                                p * n.sineHeading,
                                O - g * n.cosineHeading,
                            ),
                            F =
                                y -
                                c(
                                    n.f,
                                    n.sineAlpha,
                                    n.cosineSquaredAlpha,
                                    m,
                                    p,
                                    M,
                                    I,
                                );
                        return a(r)
                            ? ((r.longitude = this._start.longitude + F),
                              (r.latitude = C),
                              (r.height = 0),
                              r)
                            : new e(this._start.longitude + F, C, 0);
                    }),
                    _
                );
            },
        ),
        define(
            'Core/QuadraticRealPolynomial',
            ['./DeveloperError', './Math'],
            function (t, e) {
                'use strict';
                function r(t, r, n) {
                    var a = t + r;
                    return e.sign(t) !== e.sign(r) &&
                        Math.abs(a / Math.max(Math.abs(t), Math.abs(r))) < n
                        ? 0
                        : a;
                }
                var n = {};
                return (
                    (n.computeDiscriminant = function (t, e, r) {
                        return e * e - 4 * t * r;
                    }),
                    (n.computeRealRoots = function (t, n, a) {
                        var o;
                        if (0 === t) return 0 === n ? [] : [-a / n];
                        if (0 === n) {
                            if (0 === a) return [0, 0];
                            var i = Math.abs(a),
                                u = Math.abs(t);
                            if (i < u && i / u < e.EPSILON14) return [0, 0];
                            if (i > u && u / i < e.EPSILON14) return [];
                            if ((o = -a / t) < 0) return [];
                            var s = Math.sqrt(o);
                            return [-s, s];
                        }
                        if (0 === a)
                            return (o = -n / t), o < 0 ? [o, 0] : [0, o];
                        var E = n * n,
                            c = 4 * t * a,
                            l = r(E, -c, e.EPSILON14);
                        if (l < 0) return [];
                        var f =
                            -0.5 * r(n, e.sign(n) * Math.sqrt(l), e.EPSILON14);
                        return n > 0 ? [f / t, a / f] : [a / f, f / t];
                    }),
                    n
                );
            },
        ),
        define(
            'Core/CubicRealPolynomial',
            ['./DeveloperError', './QuadraticRealPolynomial'],
            function (t, e) {
                'use strict';
                function r(t, e, r, n) {
                    var a,
                        o,
                        i = t,
                        u = e / 3,
                        s = r / 3,
                        E = n,
                        c = i * s,
                        l = u * E,
                        f = u * u,
                        _ = s * s,
                        R = i * s - f,
                        h = i * E - u * s,
                        T = u * E - _,
                        A = 4 * R * T - h * h;
                    if (A < 0) {
                        var d, S, m;
                        f * l >= c * _
                            ? ((d = i), (S = R), (m = -2 * u * R + i * h))
                            : ((d = E), (S = T), (m = -E * h + 2 * s * T));
                        var N = m < 0 ? -1 : 1,
                            C = -N * Math.abs(d) * Math.sqrt(-A);
                        o = -m + C;
                        var I = o / 2,
                            p =
                                I < 0
                                    ? -Math.pow(-I, 1 / 3)
                                    : Math.pow(I, 1 / 3),
                            M = o === C ? -p : -S / p;
                        return (
                            (a = S <= 0 ? p + M : -m / (p * p + M * M + S)),
                            f * l >= c * _ ? [(a - u) / i] : [-E / (a + s)]
                        );
                    }
                    var O = R,
                        g = -2 * u * R + i * h,
                        y = T,
                        F = -E * h + 2 * s * T,
                        L = Math.sqrt(A),
                        v = Math.sqrt(3) / 2,
                        U = Math.abs(Math.atan2(i * L, -g) / 3);
                    a = 2 * Math.sqrt(-O);
                    var D = Math.cos(U);
                    o = a * D;
                    var P = a * (-D / 2 - v * Math.sin(U)),
                        w = o + P > 2 * u ? o - u : P - u,
                        B = i,
                        x = w / B;
                    (U = Math.abs(Math.atan2(E * L, -F) / 3)),
                        (a = 2 * Math.sqrt(-y)),
                        (D = Math.cos(U)),
                        (o = a * D),
                        (P = a * (-D / 2 - v * Math.sin(U)));
                    var G = -E,
                        b = o + P < 2 * s ? o + s : P + s,
                        z = G / b,
                        H = B * b,
                        V = -w * b - B * G,
                        X = w * G,
                        q = (s * V - u * X) / (-u * V + s * H);
                    return x <= q
                        ? x <= z
                            ? q <= z
                                ? [x, q, z]
                                : [x, z, q]
                            : [z, x, q]
                        : x <= z
                          ? [q, x, z]
                          : q <= z
                            ? [q, z, x]
                            : [z, q, x];
                }
                var n = {};
                return (
                    (n.computeDiscriminant = function (t, e, r, n) {
                        var a = t * t,
                            o = e * e,
                            i = r * r;
                        return (
                            18 * t * e * r * n +
                            o * i -
                            27 * a * (n * n) -
                            4 * (t * i * r + o * e * n)
                        );
                    }),
                    (n.computeRealRoots = function (t, n, a, o) {
                        var i, u;
                        if (0 === t) return e.computeRealRoots(n, a, o);
                        if (0 === n) {
                            if (0 === a) {
                                if (0 === o) return [0, 0, 0];
                                u = -o / t;
                                var s =
                                    u < 0
                                        ? -Math.pow(-u, 1 / 3)
                                        : Math.pow(u, 1 / 3);
                                return [s, s, s];
                            }
                            return 0 === o
                                ? ((i = e.computeRealRoots(t, 0, a)),
                                  0 === i.Length ? [0] : [i[0], 0, i[1]])
                                : r(t, 0, a, o);
                        }
                        return 0 === a
                            ? 0 === o
                                ? ((u = -n / t), u < 0 ? [u, 0, 0] : [0, 0, u])
                                : r(t, n, 0, o)
                            : 0 === o
                              ? ((i = e.computeRealRoots(t, n, a)),
                                0 === i.length
                                    ? [0]
                                    : i[1] <= 0
                                      ? [i[0], i[1], 0]
                                      : i[0] >= 0
                                        ? [0, i[0], i[1]]
                                        : [i[0], 0, i[1]])
                              : r(t, n, a, o);
                    }),
                    n
                );
            },
        ),
        define(
            'Core/QuarticRealPolynomial',
            [
                './CubicRealPolynomial',
                './DeveloperError',
                './Math',
                './QuadraticRealPolynomial',
            ],
            function (t, e, r, n) {
                'use strict';
                function a(e, a, o, i) {
                    var u = e * e,
                        s = a - (3 * u) / 8,
                        E = o - (a * e) / 2 + (u * e) / 8,
                        c = i - (o * e) / 4 + (a * u) / 16 - (3 * u * u) / 256,
                        l = t.computeRealRoots(1, 2 * s, s * s - 4 * c, -E * E);
                    if (l.length > 0) {
                        var f = -e / 4,
                            _ = l[l.length - 1];
                        if (Math.abs(_) < r.EPSILON14) {
                            var R = n.computeRealRoots(1, s, c);
                            if (2 === R.length) {
                                var h,
                                    T = R[0],
                                    A = R[1];
                                if (T >= 0 && A >= 0) {
                                    var d = Math.sqrt(T),
                                        S = Math.sqrt(A);
                                    return [f - S, f - d, f + d, f + S];
                                }
                                if (T >= 0 && A < 0)
                                    return (h = Math.sqrt(T)), [f - h, f + h];
                                if (T < 0 && A >= 0)
                                    return (h = Math.sqrt(A)), [f - h, f + h];
                            }
                            return [];
                        }
                        if (_ > 0) {
                            var m = Math.sqrt(_),
                                N = (s + _ - E / m) / 2,
                                C = (s + _ + E / m) / 2,
                                I = n.computeRealRoots(1, m, N),
                                p = n.computeRealRoots(1, -m, C);
                            return 0 !== I.length
                                ? ((I[0] += f),
                                  (I[1] += f),
                                  0 !== p.length
                                      ? ((p[0] += f),
                                        (p[1] += f),
                                        I[1] <= p[0]
                                            ? [I[0], I[1], p[0], p[1]]
                                            : p[1] <= I[0]
                                              ? [p[0], p[1], I[0], I[1]]
                                              : I[0] >= p[0] && I[1] <= p[1]
                                                ? [p[0], I[0], I[1], p[1]]
                                                : p[0] >= I[0] && p[1] <= I[1]
                                                  ? [I[0], p[0], p[1], I[1]]
                                                  : I[0] > p[0] && I[0] < p[1]
                                                    ? [p[0], I[0], p[1], I[1]]
                                                    : [I[0], p[0], I[1], p[1]])
                                      : I)
                                : 0 !== p.length
                                  ? ((p[0] += f), (p[1] += f), p)
                                  : [];
                        }
                    }
                    return [];
                }
                function o(e, a, o, i) {
                    var u = o * o,
                        s = a * a,
                        E = e * e,
                        c = -2 * a,
                        l = o * e + s - 4 * i,
                        f = E * i - o * a * e + u,
                        _ = t.computeRealRoots(1, c, l, f);
                    if (_.length > 0) {
                        var R,
                            h,
                            T = _[0],
                            A = a - T,
                            d = A * A,
                            S = e / 2,
                            m = A / 2,
                            N = d - 4 * i,
                            C = d + 4 * Math.abs(i),
                            I = E - 4 * T,
                            p = E + 4 * Math.abs(T);
                        if (T < 0 || N * p < I * C) {
                            var M = Math.sqrt(I);
                            (R = M / 2), (h = 0 === M ? 0 : (e * m - o) / M);
                        } else {
                            var O = Math.sqrt(N);
                            (R = 0 === O ? 0 : (e * m - o) / O), (h = O / 2);
                        }
                        var g, y;
                        0 === S && 0 === R
                            ? ((g = 0), (y = 0))
                            : r.sign(S) === r.sign(R)
                              ? ((g = S + R), (y = T / g))
                              : ((y = S - R), (g = T / y));
                        var F, L;
                        0 === m && 0 === h
                            ? ((F = 0), (L = 0))
                            : r.sign(m) === r.sign(h)
                              ? ((F = m + h), (L = i / F))
                              : ((L = m - h), (F = i / L));
                        var v = n.computeRealRoots(1, g, F),
                            U = n.computeRealRoots(1, y, L);
                        if (0 !== v.length)
                            return 0 !== U.length
                                ? v[1] <= U[0]
                                    ? [v[0], v[1], U[0], U[1]]
                                    : U[1] <= v[0]
                                      ? [U[0], U[1], v[0], v[1]]
                                      : v[0] >= U[0] && v[1] <= U[1]
                                        ? [U[0], v[0], v[1], U[1]]
                                        : U[0] >= v[0] && U[1] <= v[1]
                                          ? [v[0], U[0], U[1], v[1]]
                                          : v[0] > U[0] && v[0] < U[1]
                                            ? [U[0], v[0], U[1], v[1]]
                                            : [v[0], U[0], v[1], U[1]]
                                : v;
                        if (0 !== U.length) return U;
                    }
                    return [];
                }
                var i = {};
                return (
                    (i.computeDiscriminant = function (t, e, r, n, a) {
                        var o = t * t,
                            i = o * t,
                            u = e * e,
                            s = u * e,
                            E = r * r,
                            c = E * r,
                            l = n * n,
                            f = l * n,
                            _ = a * a;
                        return (
                            u * E * l -
                            4 * s * f -
                            4 * t * c * l +
                            18 * t * e * r * f -
                            27 * o * l * l +
                            256 * i * (_ * a) +
                            a *
                                (18 * s * r * n -
                                    4 * u * c +
                                    16 * t * E * E -
                                    80 * t * e * E * n -
                                    6 * t * u * l +
                                    144 * o * r * l) +
                            _ *
                                (144 * t * u * r -
                                    27 * u * u -
                                    128 * o * E -
                                    192 * o * e * n)
                        );
                    }),
                    (i.computeRealRoots = function (e, n, i, u, s) {
                        if (Math.abs(e) < r.EPSILON15)
                            return t.computeRealRoots(n, i, u, s);
                        var E = n / e,
                            c = i / e,
                            l = u / e,
                            f = s / e,
                            _ = E < 0 ? 1 : 0;
                        switch (
                            ((_ += c < 0 ? _ + 1 : _),
                            (_ += l < 0 ? _ + 1 : _),
                            (_ += f < 0 ? _ + 1 : _))
                        ) {
                            case 0:
                                return a(E, c, l, f);
                            case 1:
                            case 2:
                                return o(E, c, l, f);
                            case 3:
                            case 4:
                                return a(E, c, l, f);
                            case 5:
                                return o(E, c, l, f);
                            case 6:
                            case 7:
                                return a(E, c, l, f);
                            case 8:
                                return o(E, c, l, f);
                            case 9:
                            case 10:
                                return a(E, c, l, f);
                            case 11:
                                return o(E, c, l, f);
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                                return a(E, c, l, f);
                            default:
                                return;
                        }
                    }),
                    i
                );
            },
        ),
        define(
            'Core/Ray',
            ['./Cartesian3', './defaultValue', './defined', './DeveloperError'],
            function (t, e, r, n) {
                'use strict';
                function a(r, n) {
                    (n = t.clone(e(n, t.ZERO))),
                        t.equals(n, t.ZERO) || t.normalize(n, n),
                        (this.origin = t.clone(e(r, t.ZERO))),
                        (this.direction = n);
                }
                return (
                    (a.getPoint = function (e, n, a) {
                        return (
                            r(a) || (a = new t()),
                            (a = t.multiplyByScalar(e.direction, n, a)),
                            t.add(e.origin, a, a)
                        );
                    }),
                    a
                );
            },
        ),
        define(
            'Core/IntersectionTests',
            [
                './Cartesian3',
                './Cartographic',
                './defaultValue',
                './defined',
                './DeveloperError',
                './Interval',
                './Math',
                './Matrix3',
                './QuadraticRealPolynomial',
                './QuarticRealPolynomial',
                './Ray',
            ],
            function (t, e, r, n, a, o, i, u, s, E, c) {
                'use strict';
                function l(t, e, r, n) {
                    var a = e * e - 4 * t * r;
                    if (!(a < 0)) {
                        if (a > 0) {
                            var o = 1 / (2 * t),
                                i = Math.sqrt(a),
                                u = (-e + i) * o,
                                s = (-e - i) * o;
                            return (
                                u < s
                                    ? ((n.root0 = u), (n.root1 = s))
                                    : ((n.root0 = s), (n.root1 = u)),
                                n
                            );
                        }
                        var E = -e / (2 * t);
                        if (0 !== E) return (n.root0 = n.root1 = E), n;
                    }
                }
                function f(e, r, a) {
                    n(a) || (a = new o());
                    var i = e.origin,
                        u = e.direction,
                        s = r.center,
                        E = r.radius * r.radius,
                        c = t.subtract(i, s, d),
                        f = t.dot(u, u),
                        _ = 2 * t.dot(u, c),
                        R = t.magnitudeSquared(c) - E,
                        h = l(f, _, R, C);
                    if (n(h)) return (a.start = h.root0), (a.stop = h.root1), a;
                }
                function _(t, e, r) {
                    var n = t + e;
                    return i.sign(t) !== i.sign(e) &&
                        Math.abs(n / Math.max(Math.abs(t), Math.abs(e))) < r
                        ? 0
                        : n;
                }
                function R(e, r, n, a, o) {
                    var c,
                        l = a * a,
                        f = o * o,
                        R = (e[u.COLUMN1ROW1] - e[u.COLUMN2ROW2]) * f,
                        h =
                            o *
                            (a *
                                _(
                                    e[u.COLUMN1ROW0],
                                    e[u.COLUMN0ROW1],
                                    i.EPSILON15,
                                ) +
                                r.y),
                        T =
                            e[u.COLUMN0ROW0] * l +
                            e[u.COLUMN2ROW2] * f +
                            a * r.x +
                            n,
                        A =
                            f *
                            _(e[u.COLUMN2ROW1], e[u.COLUMN1ROW2], i.EPSILON15),
                        d =
                            o *
                            (a * _(e[u.COLUMN2ROW0], e[u.COLUMN0ROW2]) + r.z),
                        S = [];
                    if (0 === d && 0 === A) {
                        if (((c = s.computeRealRoots(R, h, T)), 0 === c.length))
                            return S;
                        var m = c[0],
                            N = Math.sqrt(Math.max(1 - m * m, 0));
                        if (
                            (S.push(new t(a, o * m, o * -N)),
                            S.push(new t(a, o * m, o * N)),
                            2 === c.length)
                        ) {
                            var C = c[1],
                                I = Math.sqrt(Math.max(1 - C * C, 0));
                            S.push(new t(a, o * C, o * -I)),
                                S.push(new t(a, o * C, o * I));
                        }
                        return S;
                    }
                    var p = d * d,
                        M = A * A,
                        O = R * R,
                        g = d * A,
                        y = O + M,
                        F = 2 * (h * R + g),
                        L = 2 * T * R + h * h - M + p,
                        v = 2 * (T * h - g),
                        U = T * T - p;
                    if (0 === y && 0 === F && 0 === L && 0 === v) return S;
                    c = E.computeRealRoots(y, F, L, v, U);
                    var D = c.length;
                    if (0 === D) return S;
                    for (var P = 0; P < D; ++P) {
                        var w,
                            B = c[P],
                            x = B * B,
                            G = Math.max(1 - x, 0),
                            b = Math.sqrt(G);
                        w =
                            i.sign(R) === i.sign(T)
                                ? _(R * x + T, h * B, i.EPSILON12)
                                : i.sign(T) === i.sign(h * B)
                                  ? _(R * x, h * B + T, i.EPSILON12)
                                  : _(R * x + h * B, T, i.EPSILON12);
                        var z = _(A * B, d, i.EPSILON15),
                            H = w * z;
                        H < 0
                            ? S.push(new t(a, o * B, o * b))
                            : H > 0
                              ? S.push(new t(a, o * B, o * -b))
                              : 0 !== b
                                ? (S.push(new t(a, o * B, o * -b)),
                                  S.push(new t(a, o * B, o * b)),
                                  ++P)
                                : S.push(new t(a, o * B, o * b));
                    }
                    return S;
                }
                var h = {};
                h.rayPlane = function (e, r, a) {
                    n(a) || (a = new t());
                    var o = e.origin,
                        u = e.direction,
                        s = r.normal,
                        E = t.dot(s, u);
                    if (!(Math.abs(E) < i.EPSILON15)) {
                        var c = (-r.distance - t.dot(s, o)) / E;
                        if (!(c < 0))
                            return (
                                (a = t.multiplyByScalar(u, c, a)),
                                t.add(o, a, a)
                            );
                    }
                };
                var T = new t(),
                    A = new t(),
                    d = new t(),
                    S = new t(),
                    m = new t();
                (h.rayTriangleParametric = function (e, n, a, o, u) {
                    u = r(u, !1);
                    var s,
                        E,
                        c,
                        l,
                        f,
                        _ = e.origin,
                        R = e.direction,
                        h = t.subtract(a, n, T),
                        N = t.subtract(o, n, A),
                        C = t.cross(R, N, d),
                        I = t.dot(h, C);
                    if (u) {
                        if (I < i.EPSILON6) return;
                        if (
                            ((s = t.subtract(_, n, S)),
                            (c = t.dot(s, C)) < 0 || c > I)
                        )
                            return;
                        if (
                            ((E = t.cross(s, h, m)),
                            (l = t.dot(R, E)) < 0 || c + l > I)
                        )
                            return;
                        f = t.dot(N, E) / I;
                    } else {
                        if (Math.abs(I) < i.EPSILON6) return;
                        var p = 1 / I;
                        if (
                            ((s = t.subtract(_, n, S)),
                            (c = t.dot(s, C) * p) < 0 || c > 1)
                        )
                            return;
                        if (
                            ((E = t.cross(s, h, m)),
                            (l = t.dot(R, E) * p) < 0 || c + l > 1)
                        )
                            return;
                        f = t.dot(N, E) * p;
                    }
                    return f;
                }),
                    (h.rayTriangle = function (e, r, a, o, i, u) {
                        var s = h.rayTriangleParametric(e, r, a, o, i);
                        if (n(s) && !(s < 0))
                            return (
                                n(u) || (u = new t()),
                                t.multiplyByScalar(e.direction, s, u),
                                t.add(e.origin, u, u)
                            );
                    });
                var N = new c();
                h.lineSegmentTriangle = function (e, r, a, o, i, u, s) {
                    var E = N;
                    t.clone(e, E.origin),
                        t.subtract(r, e, E.direction),
                        t.normalize(E.direction, E.direction);
                    var c = h.rayTriangleParametric(E, a, o, i, u);
                    if (!(!n(c) || c < 0 || c > t.distance(e, r)))
                        return (
                            n(s) || (s = new t()),
                            t.multiplyByScalar(E.direction, c, s),
                            t.add(E.origin, s, s)
                        );
                };
                var C = { root0: 0, root1: 0 };
                h.raySphere = function (t, e, r) {
                    if (((r = f(t, e, r)), n(r) && !(r.stop < 0)))
                        return (r.start = Math.max(r.start, 0)), r;
                };
                var I = new c();
                h.lineSegmentSphere = function (e, r, a, o) {
                    var i = I;
                    t.clone(e, i.origin);
                    var u = t.subtract(r, e, i.direction),
                        s = t.magnitude(u);
                    if (
                        (t.normalize(u, u),
                        (o = f(i, a, o)),
                        !(!n(o) || o.stop < 0 || o.start > s))
                    )
                        return (
                            (o.start = Math.max(o.start, 0)),
                            (o.stop = Math.min(o.stop, s)),
                            o
                        );
                };
                var p = new t(),
                    M = new t();
                h.rayEllipsoid = function (e, r) {
                    var n,
                        a,
                        i,
                        u,
                        s,
                        E = r.oneOverRadii,
                        c = t.multiplyComponents(E, e.origin, p),
                        l = t.multiplyComponents(E, e.direction, M),
                        f = t.magnitudeSquared(c),
                        _ = t.dot(c, l);
                    if (f > 1) {
                        if (_ >= 0) return;
                        var R = _ * _;
                        if (
                            ((n = f - 1),
                            (a = t.magnitudeSquared(l)),
                            (i = a * n),
                            R < i)
                        )
                            return;
                        if (R > i) {
                            (u = _ * _ - i), (s = -_ + Math.sqrt(u));
                            var h = s / a,
                                T = n / s;
                            return h < T ? new o(h, T) : { start: T, stop: h };
                        }
                        var A = Math.sqrt(n / a);
                        return new o(A, A);
                    }
                    return f < 1
                        ? ((n = f - 1),
                          (a = t.magnitudeSquared(l)),
                          (i = a * n),
                          (u = _ * _ - i),
                          (s = -_ + Math.sqrt(u)),
                          new o(0, s / a))
                        : _ < 0
                          ? ((a = t.magnitudeSquared(l)), new o(0, -_ / a))
                          : void 0;
                };
                var O = new t(),
                    g = new t(),
                    y = new t(),
                    F = new t(),
                    L = new t(),
                    v = new u(),
                    U = new u(),
                    D = new u(),
                    P = new u(),
                    w = new u(),
                    B = new u(),
                    x = new u(),
                    G = new t(),
                    b = new t(),
                    z = new e();
                h.grazingAltitudeLocation = function (e, r) {
                    var a = e.origin,
                        o = e.direction;
                    if (!t.equals(a, t.ZERO)) {
                        var s = r.geodeticSurfaceNormal(a, O);
                        if (t.dot(o, s) >= 0) return a;
                    }
                    var E = n(this.rayEllipsoid(e, r)),
                        c = r.transformPositionToScaledSpace(o, O),
                        l = t.normalize(c, c),
                        f = t.mostOrthogonalAxis(c, F),
                        _ = t.normalize(t.cross(f, l, g), g),
                        h = t.normalize(t.cross(l, _, y), y),
                        T = v;
                    (T[0] = l.x),
                        (T[1] = l.y),
                        (T[2] = l.z),
                        (T[3] = _.x),
                        (T[4] = _.y),
                        (T[5] = _.z),
                        (T[6] = h.x),
                        (T[7] = h.y),
                        (T[8] = h.z);
                    var A = u.transpose(T, U),
                        d = u.fromScale(r.radii, D),
                        S = u.fromScale(r.oneOverRadii, P),
                        m = w;
                    (m[0] = 0),
                        (m[1] = -o.z),
                        (m[2] = o.y),
                        (m[3] = o.z),
                        (m[4] = 0),
                        (m[5] = -o.x),
                        (m[6] = -o.y),
                        (m[7] = o.x),
                        (m[8] = 0);
                    var N,
                        C,
                        I = u.multiply(u.multiply(A, S, B), m, B),
                        p = u.multiply(u.multiply(I, d, x), T, x),
                        M = u.multiplyByVector(I, a, L),
                        H = R(p, t.negate(M, O), 0, 0, 1),
                        V = H.length;
                    if (V > 0) {
                        for (
                            var X = t.clone(t.ZERO, b),
                                q = Number.NEGATIVE_INFINITY,
                                W = 0;
                            W < V;
                            ++W
                        ) {
                            N = u.multiplyByVector(
                                d,
                                u.multiplyByVector(T, H[W], G),
                                G,
                            );
                            var Y = t.normalize(t.subtract(N, a, F), F),
                                K = t.dot(Y, o);
                            K > q && ((q = K), (X = t.clone(N, X)));
                        }
                        var k = r.cartesianToCartographic(X, z);
                        return (
                            (q = i.clamp(q, 0, 1)),
                            (C =
                                t.magnitude(t.subtract(X, a, F)) *
                                Math.sqrt(1 - q * q)),
                            (C = E ? -C : C),
                            (k.height = C),
                            r.cartographicToCartesian(k, new t())
                        );
                    }
                };
                var H = new t();
                return (
                    (h.lineSegmentPlane = function (e, r, a, o) {
                        n(o) || (o = new t());
                        var u = t.subtract(r, e, H),
                            s = a.normal,
                            E = t.dot(s, u);
                        if (!(Math.abs(E) < i.EPSILON6)) {
                            var c = t.dot(s, e),
                                l = -(a.distance + c) / E;
                            if (!(l < 0 || l > 1))
                                return (
                                    t.multiplyByScalar(u, l, o),
                                    t.add(e, o, o),
                                    o
                                );
                        }
                    }),
                    (h.trianglePlaneIntersection = function (e, r, n, a) {
                        var o = a.normal,
                            i = a.distance,
                            u = t.dot(o, e) + i < 0,
                            s = t.dot(o, r) + i < 0,
                            E = t.dot(o, n) + i < 0,
                            c = 0;
                        (c += u ? 1 : 0), (c += s ? 1 : 0), (c += E ? 1 : 0);
                        var l, f;
                        if (
                            ((1 !== c && 2 !== c) ||
                                ((l = new t()), (f = new t())),
                            1 === c)
                        ) {
                            if (u)
                                return (
                                    h.lineSegmentPlane(e, r, a, l),
                                    h.lineSegmentPlane(e, n, a, f),
                                    {
                                        positions: [e, r, n, l, f],
                                        indices: [0, 3, 4, 1, 2, 4, 1, 4, 3],
                                    }
                                );
                            if (s)
                                return (
                                    h.lineSegmentPlane(r, n, a, l),
                                    h.lineSegmentPlane(r, e, a, f),
                                    {
                                        positions: [e, r, n, l, f],
                                        indices: [1, 3, 4, 2, 0, 4, 2, 4, 3],
                                    }
                                );
                            if (E)
                                return (
                                    h.lineSegmentPlane(n, e, a, l),
                                    h.lineSegmentPlane(n, r, a, f),
                                    {
                                        positions: [e, r, n, l, f],
                                        indices: [2, 3, 4, 0, 1, 4, 0, 4, 3],
                                    }
                                );
                        } else if (2 === c) {
                            if (!u)
                                return (
                                    h.lineSegmentPlane(r, e, a, l),
                                    h.lineSegmentPlane(n, e, a, f),
                                    {
                                        positions: [e, r, n, l, f],
                                        indices: [1, 2, 4, 1, 4, 3, 0, 3, 4],
                                    }
                                );
                            if (!s)
                                return (
                                    h.lineSegmentPlane(n, r, a, l),
                                    h.lineSegmentPlane(e, r, a, f),
                                    {
                                        positions: [e, r, n, l, f],
                                        indices: [2, 0, 4, 2, 4, 3, 1, 3, 4],
                                    }
                                );
                            if (!E)
                                return (
                                    h.lineSegmentPlane(e, n, a, l),
                                    h.lineSegmentPlane(r, n, a, f),
                                    {
                                        positions: [e, r, n, l, f],
                                        indices: [0, 1, 4, 0, 4, 3, 2, 3, 4],
                                    }
                                );
                        }
                    }),
                    h
                );
            },
        ),
        define('Core/isArray', ['./defined'], function (t) {
            'use strict';
            var e = Array.isArray;
            return (
                t(e) ||
                    (e = function (t) {
                        return (
                            '[object Array]' ===
                            Object.prototype.toString.call(t)
                        );
                    }),
                e
            );
        }),
        define(
            'Core/Plane',
            [
                './Cartesian3',
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
            ],
            function (t, e, r, n, a) {
                'use strict';
                function o(e, r) {
                    (this.normal = t.clone(e)), (this.distance = r);
                }
                o.fromPointNormal = function (r, n, a) {
                    var i = -t.dot(n, r);
                    return e(a)
                        ? (t.clone(n, a.normal), (a.distance = i), a)
                        : new o(n, i);
                };
                var i = new t();
                return (
                    (o.fromCartesian4 = function (r, n) {
                        var a = t.fromCartesian4(r, i),
                            u = r.w;
                        return e(n)
                            ? (t.clone(a, n.normal), (n.distance = u), n)
                            : new o(a, u);
                    }),
                    (o.getPointDistance = function (e, r) {
                        return t.dot(e.normal, r) + e.distance;
                    }),
                    (o.ORIGIN_XY_PLANE = n(new o(t.UNIT_Z, 0))),
                    (o.ORIGIN_YZ_PLANE = n(new o(t.UNIT_X, 0))),
                    (o.ORIGIN_ZX_PLANE = n(new o(t.UNIT_Y, 0))),
                    o
                );
            },
        ),
        define(
            'Core/PolylinePipeline',
            [
                './Cartesian3',
                './Cartographic',
                './defaultValue',
                './defined',
                './DeveloperError',
                './Ellipsoid',
                './EllipsoidGeodesic',
                './IntersectionTests',
                './isArray',
                './Math',
                './Matrix4',
                './Plane',
            ],
            function (t, e, r, n, a, o, i, u, s, E, c, l) {
                'use strict';
                function f(t, e, r) {
                    var n = p;
                    n.length = t;
                    var a;
                    if (e === r) {
                        for (a = 0; a < t; a++) n[a] = e;
                        return n;
                    }
                    var o = r - e,
                        i = o / t;
                    for (a = 0; a < t; a++) {
                        var u = e + a * i;
                        n[a] = u;
                    }
                    return n;
                }
                function _(e, r, n, a, o, i, u, s) {
                    var E = a.scaleToGeodeticSurface(e, y),
                        c = a.scaleToGeodeticSurface(r, F),
                        l = R.numberOfPoints(e, r, n),
                        _ = a.cartesianToCartographic(E, M),
                        h = a.cartesianToCartographic(c, O),
                        T = f(l, o, i);
                    L.setEndPoints(_, h);
                    var A = L.surfaceDistance / l,
                        d = s;
                    _.height = o;
                    var S = a.cartographicToCartesian(_, g);
                    t.pack(S, u, d), (d += 3);
                    for (var m = 1; m < l; m++) {
                        var N = L.interpolateUsingSurfaceDistance(m * A, O);
                        (N.height = T[m]),
                            (S = a.cartographicToCartesian(N, g)),
                            t.pack(S, u, d),
                            (d += 3);
                    }
                    return d;
                }
                var R = {};
                R.numberOfPoints = function (e, r, n) {
                    var a = t.distance(e, r);
                    return Math.ceil(a / n);
                };
                var h = new e();
                R.extractHeights = function (t, e) {
                    for (
                        var r = t.length, n = new Array(r), a = 0;
                        a < r;
                        a++
                    ) {
                        var o = t[a];
                        n[a] = e.cartesianToCartographic(o, h).height;
                    }
                    return n;
                };
                var T = new c(),
                    A = new t(),
                    d = new t(),
                    S = new l(t.UNIT_X, 0),
                    m = new t(),
                    N = new l(t.UNIT_X, 0),
                    C = new t(),
                    I = new t(),
                    p = [],
                    M = new e(),
                    O = new e(),
                    g = new t(),
                    y = new t(),
                    F = new t(),
                    L = new i();
                return (
                    (R.wrapLongitude = function (e, a) {
                        var o = [],
                            i = [];
                        if (n(e) && e.length > 0) {
                            a = r(a, c.IDENTITY);
                            var s = c.inverseTransformation(a, T),
                                E = c.multiplyByPoint(s, t.ZERO, A),
                                f = t.normalize(
                                    c.multiplyByPointAsVector(s, t.UNIT_Y, d),
                                    d,
                                ),
                                _ = l.fromPointNormal(E, f, S),
                                R = t.normalize(
                                    c.multiplyByPointAsVector(s, t.UNIT_X, m),
                                    m,
                                ),
                                h = l.fromPointNormal(E, R, N),
                                p = 1;
                            o.push(t.clone(e[0]));
                            for (
                                var M = o[0], O = e.length, g = 1;
                                g < O;
                                ++g
                            ) {
                                var y = e[g];
                                if (
                                    l.getPointDistance(h, M) < 0 ||
                                    l.getPointDistance(h, y) < 0
                                ) {
                                    var F = u.lineSegmentPlane(M, y, _, C);
                                    if (n(F)) {
                                        var L = t.multiplyByScalar(f, 5e-9, I);
                                        l.getPointDistance(_, M) < 0 &&
                                            t.negate(L, L),
                                            o.push(t.add(F, L, new t())),
                                            i.push(p + 1),
                                            t.negate(L, L),
                                            o.push(t.add(F, L, new t())),
                                            (p = 1);
                                    }
                                }
                                o.push(t.clone(e[g])), p++, (M = y);
                            }
                            i.push(p);
                        }
                        return { positions: o, lengths: i };
                    }),
                    (R.generateArc = function (e) {
                        n(e) || (e = {});
                        var a = e.positions,
                            i = a.length,
                            u = r(e.ellipsoid, o.WGS84),
                            c = r(e.height, 0),
                            l = s(c);
                        if (i < 1) return [];
                        if (1 === i) {
                            var f = u.scaleToGeodeticSurface(a[0], y);
                            if (0 !== (c = l ? c[0] : c)) {
                                var h = u.geodeticSurfaceNormal(f, g);
                                t.multiplyByScalar(h, c, h), t.add(f, h, f);
                            }
                            return [f.x, f.y, f.z];
                        }
                        var T = e.minDistance;
                        if (!n(T)) {
                            var A = r(e.granularity, E.RADIANS_PER_DEGREE);
                            T = E.chordLength(A, u.maximumRadius);
                        }
                        var d,
                            S = 0;
                        for (d = 0; d < i - 1; d++)
                            S += R.numberOfPoints(a[d], a[d + 1], T);
                        var m = 3 * (S + 1),
                            N = new Array(m),
                            C = 0;
                        for (d = 0; d < i - 1; d++) {
                            C = _(
                                a[d],
                                a[d + 1],
                                T,
                                u,
                                l ? c[d] : c,
                                l ? c[d + 1] : c,
                                N,
                                C,
                            );
                        }
                        p.length = 0;
                        var I = a[i - 1],
                            O = u.cartesianToCartographic(I, M);
                        O.height = l ? c[i - 1] : c;
                        var F = u.cartographicToCartesian(O, g);
                        return t.pack(F, N, m - 3), N;
                    }),
                    (R.generateCartesianArc = function (e) {
                        for (
                            var r = R.generateArc(e),
                                n = r.length / 3,
                                a = new Array(n),
                                o = 0;
                            o < n;
                            o++
                        )
                            a[o] = t.unpack(r, 3 * o);
                        return a;
                    }),
                    R
                );
            },
        ),
        define(
            'Core/VertexFormat',
            [
                './defaultValue',
                './defined',
                './DeveloperError',
                './freezeObject',
            ],
            function (t, e, r, n) {
                'use strict';
                function a(e) {
                    (e = t(e, t.EMPTY_OBJECT)),
                        (this.position = t(e.position, !1)),
                        (this.normal = t(e.normal, !1)),
                        (this.st = t(e.st, !1)),
                        (this.bitangent = t(e.bitangent, !1)),
                        (this.tangent = t(e.tangent, !1)),
                        (this.color = t(e.color, !1));
                }
                return (
                    (a.POSITION_ONLY = n(new a({ position: !0 }))),
                    (a.POSITION_AND_NORMAL = n(
                        new a({ position: !0, normal: !0 }),
                    )),
                    (a.POSITION_NORMAL_AND_ST = n(
                        new a({ position: !0, normal: !0, st: !0 }),
                    )),
                    (a.POSITION_AND_ST = n(new a({ position: !0, st: !0 }))),
                    (a.POSITION_AND_COLOR = n(
                        new a({ position: !0, color: !0 }),
                    )),
                    (a.ALL = n(
                        new a({
                            position: !0,
                            normal: !0,
                            st: !0,
                            tangent: !0,
                            bitangent: !0,
                        }),
                    )),
                    (a.DEFAULT = a.POSITION_NORMAL_AND_ST),
                    (a.packedLength = 6),
                    (a.pack = function (e, r, n) {
                        return (
                            (n = t(n, 0)),
                            (r[n++] = e.position ? 1 : 0),
                            (r[n++] = e.normal ? 1 : 0),
                            (r[n++] = e.st ? 1 : 0),
                            (r[n++] = e.tangent ? 1 : 0),
                            (r[n++] = e.bitangent ? 1 : 0),
                            (r[n] = e.color ? 1 : 0),
                            r
                        );
                    }),
                    (a.unpack = function (r, n, o) {
                        return (
                            (n = t(n, 0)),
                            e(o) || (o = new a()),
                            (o.position = 1 === r[n++]),
                            (o.normal = 1 === r[n++]),
                            (o.st = 1 === r[n++]),
                            (o.tangent = 1 === r[n++]),
                            (o.bitangent = 1 === r[n++]),
                            (o.color = 1 === r[n]),
                            o
                        );
                    }),
                    (a.clone = function (t, r) {
                        if (e(t))
                            return (
                                e(r) || (r = new a()),
                                (r.position = t.position),
                                (r.normal = t.normal),
                                (r.st = t.st),
                                (r.tangent = t.tangent),
                                (r.bitangent = t.bitangent),
                                (r.color = t.color),
                                r
                            );
                    }),
                    a
                );
            },
        ),
        define(
            'Core/PolylineGeometry',
            [
                './arrayRemoveDuplicates',
                './BoundingSphere',
                './Cartesian3',
                './Color',
                './ComponentDatatype',
                './defaultValue',
                './defined',
                './DeveloperError',
                './Ellipsoid',
                './Geometry',
                './GeometryAttribute',
                './GeometryAttributes',
                './GeometryType',
                './IndexDatatype',
                './Math',
                './PolylinePipeline',
                './PrimitiveType',
                './VertexFormat',
            ],
            function (t, e, r, n, a, o, i, u, s, E, c, l, f, _, R, h, T, A) {
                'use strict';
                function d(t, e, r, a, o) {
                    var i = m;
                    i.length = o;
                    var u,
                        s = r.red,
                        E = r.green,
                        c = r.blue,
                        l = r.alpha,
                        f = a.red,
                        _ = a.green,
                        R = a.blue,
                        h = a.alpha;
                    if (n.equals(r, a)) {
                        for (u = 0; u < o; u++) i[u] = n.clone(r);
                        return i;
                    }
                    var T = (f - s) / o,
                        A = (_ - E) / o,
                        d = (R - c) / o,
                        S = (h - l) / o;
                    for (u = 0; u < o; u++)
                        i[u] = new n(
                            s + u * T,
                            E + u * A,
                            c + u * d,
                            l + u * S,
                        );
                    return i;
                }
                function S(t) {
                    t = o(t, o.EMPTY_OBJECT);
                    var e = t.positions,
                        a = t.colors,
                        u = o(t.width, 1),
                        E = o(t.colorsPerVertex, !1);
                    (this._positions = e),
                        (this._colors = a),
                        (this._width = u),
                        (this._colorsPerVertex = E),
                        (this._vertexFormat = A.clone(
                            o(t.vertexFormat, A.DEFAULT),
                        )),
                        (this._followSurface = o(t.followSurface, !0)),
                        (this._granularity = o(
                            t.granularity,
                            R.RADIANS_PER_DEGREE,
                        )),
                        (this._ellipsoid = s.clone(o(t.ellipsoid, s.WGS84))),
                        (this._workerName = 'createPolylineGeometry');
                    var c = 1 + e.length * r.packedLength;
                    (c += i(a) ? 1 + a.length * n.packedLength : 1),
                        (this.packedLength =
                            c + s.packedLength + A.packedLength + 4);
                }
                var m = [];
                S.pack = function (t, e, a) {
                    a = o(a, 0);
                    var u,
                        E = t._positions,
                        c = E.length;
                    for (e[a++] = c, u = 0; u < c; ++u, a += r.packedLength)
                        r.pack(E[u], e, a);
                    var l = t._colors;
                    for (
                        c = i(l) ? l.length : 0, e[a++] = c, u = 0;
                        u < c;
                        ++u, a += n.packedLength
                    )
                        n.pack(l[u], e, a);
                    return (
                        s.pack(t._ellipsoid, e, a),
                        (a += s.packedLength),
                        A.pack(t._vertexFormat, e, a),
                        (a += A.packedLength),
                        (e[a++] = t._width),
                        (e[a++] = t._colorsPerVertex ? 1 : 0),
                        (e[a++] = t._followSurface ? 1 : 0),
                        (e[a] = t._granularity),
                        e
                    );
                };
                var N = s.clone(s.UNIT_SPHERE),
                    C = new A(),
                    I = {
                        positions: void 0,
                        colors: void 0,
                        ellipsoid: N,
                        vertexFormat: C,
                        width: void 0,
                        colorsPerVertex: void 0,
                        followSurface: void 0,
                        granularity: void 0,
                    };
                S.unpack = function (t, e, a) {
                    e = o(e, 0);
                    var u,
                        E = t[e++],
                        c = new Array(E);
                    for (u = 0; u < E; ++u, e += r.packedLength)
                        c[u] = r.unpack(t, e);
                    E = t[e++];
                    var l = E > 0 ? new Array(E) : void 0;
                    for (u = 0; u < E; ++u, e += n.packedLength)
                        l[u] = n.unpack(t, e);
                    var f = s.unpack(t, e, N);
                    e += s.packedLength;
                    var _ = A.unpack(t, e, C);
                    e += A.packedLength;
                    var R = t[e++],
                        h = 1 === t[e++],
                        T = 1 === t[e++],
                        d = t[e];
                    return i(a)
                        ? ((a._positions = c),
                          (a._colors = l),
                          (a._ellipsoid = s.clone(f, a._ellipsoid)),
                          (a._vertexFormat = A.clone(_, a._vertexFormat)),
                          (a._width = R),
                          (a._colorsPerVertex = h),
                          (a._followSurface = T),
                          (a._granularity = d),
                          a)
                        : ((I.positions = c),
                          (I.colors = l),
                          (I.width = R),
                          (I.colorsPerVertex = h),
                          (I.followSurface = T),
                          (I.granularity = d),
                          new S(I));
                };
                var p = new r(),
                    M = new r(),
                    O = new r(),
                    g = new r();
                return (
                    (S.createGeometry = function (o) {
                        var u,
                            s,
                            A,
                            S = o._width,
                            N = o._vertexFormat,
                            C = o._colors,
                            I = o._colorsPerVertex,
                            y = o._followSurface,
                            F = o._granularity,
                            L = o._ellipsoid,
                            v = t(o._positions, r.equalsEpsilon),
                            U = v.length;
                        if (!(U < 2 || S <= 0)) {
                            if (y) {
                                var D = h.extractHeights(v, L),
                                    P = R.chordLength(F, L.maximumRadius);
                                if (i(C)) {
                                    var w = 1;
                                    for (u = 0; u < U - 1; ++u)
                                        w += h.numberOfPoints(
                                            v[u],
                                            v[u + 1],
                                            P,
                                        );
                                    var B = new Array(w),
                                        x = 0;
                                    for (u = 0; u < U - 1; ++u) {
                                        var G = v[u],
                                            b = v[u + 1],
                                            z = C[u],
                                            H = h.numberOfPoints(G, b, P);
                                        if (I && u < w) {
                                            var V = C[u + 1],
                                                X = d(G, b, z, V, H),
                                                q = X.length;
                                            for (s = 0; s < q; ++s)
                                                B[x++] = X[s];
                                        } else
                                            for (s = 0; s < H; ++s)
                                                B[x++] = n.clone(z);
                                    }
                                    (B[x] = n.clone(C[C.length - 1])),
                                        (C = B),
                                        (m.length = 0);
                                }
                                v = h.generateCartesianArc({
                                    positions: v,
                                    minDistance: P,
                                    ellipsoid: L,
                                    height: D,
                                });
                            }
                            U = v.length;
                            var W,
                                Y = 4 * U - 4,
                                K = new Float64Array(3 * Y),
                                k = new Float64Array(3 * Y),
                                Z = new Float64Array(3 * Y),
                                j = new Float32Array(2 * Y),
                                Q = N.st ? new Float32Array(2 * Y) : void 0,
                                J = i(C) ? new Uint8Array(4 * Y) : void 0,
                                $ = 0,
                                tt = 0,
                                et = 0,
                                rt = 0;
                            for (s = 0; s < U; ++s) {
                                0 === s
                                    ? ((W = p),
                                      r.subtract(v[0], v[1], W),
                                      r.add(v[0], W, W))
                                    : (W = v[s - 1]),
                                    r.clone(W, O),
                                    r.clone(v[s], M),
                                    s === U - 1
                                        ? ((W = p),
                                          r.subtract(v[U - 1], v[U - 2], W),
                                          r.add(v[U - 1], W, W))
                                        : (W = v[s + 1]),
                                    r.clone(W, g);
                                var nt, at;
                                i(J) &&
                                    ((nt = 0 === s || I ? C[s] : C[s - 1]),
                                    s !== U - 1 && (at = C[s]));
                                var ot = 0 === s ? 2 : 0,
                                    it = s === U - 1 ? 2 : 4;
                                for (A = ot; A < it; ++A) {
                                    r.pack(M, K, $),
                                        r.pack(O, k, $),
                                        r.pack(g, Z, $),
                                        ($ += 3);
                                    var ut = A - 2 < 0 ? -1 : 1;
                                    if (
                                        ((j[tt++] = (A % 2) * 2 - 1),
                                        (j[tt++] = ut * S),
                                        N.st &&
                                            ((Q[et++] = s / (U - 1)),
                                            (Q[et++] = Math.max(j[tt - 2], 0))),
                                        i(J))
                                    ) {
                                        var st = A < 2 ? nt : at;
                                        (J[rt++] = n.floatToByte(st.red)),
                                            (J[rt++] = n.floatToByte(st.green)),
                                            (J[rt++] = n.floatToByte(st.blue)),
                                            (J[rt++] = n.floatToByte(st.alpha));
                                    }
                                }
                            }
                            var Et = new l();
                            (Et.position = new c({
                                componentDatatype: a.DOUBLE,
                                componentsPerAttribute: 3,
                                values: K,
                            })),
                                (Et.prevPosition = new c({
                                    componentDatatype: a.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: k,
                                })),
                                (Et.nextPosition = new c({
                                    componentDatatype: a.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: Z,
                                })),
                                (Et.expandAndWidth = new c({
                                    componentDatatype: a.FLOAT,
                                    componentsPerAttribute: 2,
                                    values: j,
                                })),
                                N.st &&
                                    (Et.st = new c({
                                        componentDatatype: a.FLOAT,
                                        componentsPerAttribute: 2,
                                        values: Q,
                                    })),
                                i(J) &&
                                    (Et.color = new c({
                                        componentDatatype: a.UNSIGNED_BYTE,
                                        componentsPerAttribute: 4,
                                        values: J,
                                        normalize: !0,
                                    }));
                            var ct = _.createTypedArray(Y, 6 * U - 6),
                                lt = 0,
                                ft = 0,
                                _t = U - 1;
                            for (s = 0; s < _t; ++s)
                                (ct[ft++] = lt),
                                    (ct[ft++] = lt + 2),
                                    (ct[ft++] = lt + 1),
                                    (ct[ft++] = lt + 1),
                                    (ct[ft++] = lt + 2),
                                    (ct[ft++] = lt + 3),
                                    (lt += 4);
                            return new E({
                                attributes: Et,
                                indices: ct,
                                primitiveType: T.TRIANGLES,
                                boundingSphere: e.fromPoints(v),
                                geometryType: f.POLYLINES,
                            });
                        }
                    }),
                    S
                );
            },
        ),
        define(
            'Workers/createPolylineGeometry',
            [
                '../Core/defined',
                '../Core/Ellipsoid',
                '../Core/PolylineGeometry',
            ],
            function (t, e, r) {
                'use strict';
                function n(n, a) {
                    return (
                        t(a) && (n = r.unpack(n, a)),
                        (n._ellipsoid = e.clone(n._ellipsoid)),
                        r.createGeometry(n)
                    );
                }
                return n;
            },
        );
})();
