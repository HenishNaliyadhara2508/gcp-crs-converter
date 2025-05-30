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
        function e(e) {
            return void 0 !== e && null !== e;
        }
        return e;
    }),
        define('Core/DeveloperError', ['./defined'], function (e) {
            'use strict';
            function t(e) {
                (this.name = 'DeveloperError'), (this.message = e);
                var t;
                try {
                    throw new Error();
                } catch (e) {
                    t = e.stack;
                }
                this.stack = t;
            }
            return (
                e(Object.create) &&
                    ((t.prototype = Object.create(Error.prototype)),
                    (t.prototype.constructor = t)),
                (t.prototype.toString = function () {
                    var t = this.name + ': ' + this.message;
                    return (
                        e(this.stack) && (t += '\n' + this.stack.toString()), t
                    );
                }),
                (t.throwInstantiationError = function () {
                    throw new t(
                        'This function defines an interface and should not be called directly.',
                    );
                }),
                t
            );
        }),
        define(
            'Core/Check',
            ['./defined', './DeveloperError'],
            function (e, t) {
                'use strict';
                function r(e) {
                    return e + ' is required, actual value was undefined';
                }
                function n(e, t, r) {
                    return (
                        'Expected ' +
                        r +
                        ' to be typeof ' +
                        t +
                        ', actual typeof was ' +
                        e
                    );
                }
                var a = {};
                return (
                    (a.typeOf = {}),
                    (a.defined = function (n, a) {
                        if (!e(a)) throw new t(r(n));
                    }),
                    (a.typeOf.func = function (e, r) {
                        if ('function' != typeof r)
                            throw new t(n(typeof r, 'function', e));
                    }),
                    (a.typeOf.string = function (e, r) {
                        if ('string' != typeof r)
                            throw new t(n(typeof r, 'string', e));
                    }),
                    (a.typeOf.number = function (e, r) {
                        if ('number' != typeof r)
                            throw new t(n(typeof r, 'number', e));
                    }),
                    (a.typeOf.number.lessThan = function (e, r, n) {
                        if ((a.typeOf.number(e, r), r >= n))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be less than ' +
                                    n +
                                    ', actual value was ' +
                                    r,
                            );
                    }),
                    (a.typeOf.number.lessThanOrEquals = function (e, r, n) {
                        if ((a.typeOf.number(e, r), r > n))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be less than or equal to ' +
                                    n +
                                    ', actual value was ' +
                                    r,
                            );
                    }),
                    (a.typeOf.number.greaterThan = function (e, r, n) {
                        if ((a.typeOf.number(e, r), r <= n))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be greater than ' +
                                    n +
                                    ', actual value was ' +
                                    r,
                            );
                    }),
                    (a.typeOf.number.greaterThanOrEquals = function (e, r, n) {
                        if ((a.typeOf.number(e, r), r < n))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be greater than or equal to' +
                                    n +
                                    ', actual value was ' +
                                    r,
                            );
                    }),
                    (a.typeOf.object = function (e, r) {
                        if ('object' != typeof r)
                            throw new t(n(typeof r, 'object', e));
                    }),
                    (a.typeOf.bool = function (e, r) {
                        if ('boolean' != typeof r)
                            throw new t(n(typeof r, 'boolean', e));
                    }),
                    (a.typeOf.number.equals = function (e, r, n, o) {
                        if (
                            (a.typeOf.number(e, n),
                            a.typeOf.number(r, o),
                            n !== o)
                        )
                            throw new t(
                                e +
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
        define('Core/freezeObject', ['./defined'], function (e) {
            'use strict';
            var t = Object.freeze;
            return (
                e(t) ||
                    (t = function (e) {
                        return e;
                    }),
                t
            );
        }),
        define('Core/defaultValue', ['./freezeObject'], function (e) {
            'use strict';
            function t(e, t) {
                return void 0 !== e && null !== e ? e : t;
            }
            return (t.EMPTY_OBJECT = e({})), t;
        }),
        define('ThirdParty/mersenne-twister', [], function () {
            var e = function (e) {
                void 0 == e && (e = new Date().getTime()),
                    (this.N = 624),
                    (this.M = 397),
                    (this.MATRIX_A = 2567483615),
                    (this.UPPER_MASK = 2147483648),
                    (this.LOWER_MASK = 2147483647),
                    (this.mt = new Array(this.N)),
                    (this.mti = this.N + 1),
                    this.init_genrand(e);
            };
            return (
                (e.prototype.init_genrand = function (e) {
                    for (
                        this.mt[0] = e >>> 0, this.mti = 1;
                        this.mti < this.N;
                        this.mti++
                    ) {
                        var e =
                            this.mt[this.mti - 1] ^
                            (this.mt[this.mti - 1] >>> 30);
                        (this.mt[this.mti] =
                            ((1812433253 * ((4294901760 & e) >>> 16)) << 16) +
                            1812433253 * (65535 & e) +
                            this.mti),
                            (this.mt[this.mti] >>>= 0);
                    }
                }),
                (e.prototype.genrand_int32 = function () {
                    var e,
                        t = new Array(0, this.MATRIX_A);
                    if (this.mti >= this.N) {
                        var r;
                        for (
                            this.mti == this.N + 1 && this.init_genrand(5489),
                                r = 0;
                            r < this.N - this.M;
                            r++
                        )
                            (e =
                                (this.mt[r] & this.UPPER_MASK) |
                                (this.mt[r + 1] & this.LOWER_MASK)),
                                (this.mt[r] =
                                    this.mt[r + this.M] ^ (e >>> 1) ^ t[1 & e]);
                        for (; r < this.N - 1; r++)
                            (e =
                                (this.mt[r] & this.UPPER_MASK) |
                                (this.mt[r + 1] & this.LOWER_MASK)),
                                (this.mt[r] =
                                    this.mt[r + (this.M - this.N)] ^
                                    (e >>> 1) ^
                                    t[1 & e]);
                        (e =
                            (this.mt[this.N - 1] & this.UPPER_MASK) |
                            (this.mt[0] & this.LOWER_MASK)),
                            (this.mt[this.N - 1] =
                                this.mt[this.M - 1] ^ (e >>> 1) ^ t[1 & e]),
                            (this.mti = 0);
                    }
                    return (
                        (e = this.mt[this.mti++]),
                        (e ^= e >>> 11),
                        (e ^= (e << 7) & 2636928640),
                        (e ^= (e << 15) & 4022730752),
                        (e ^= e >>> 18) >>> 0
                    );
                }),
                (e.prototype.random = function () {
                    return this.genrand_int32() * (1 / 4294967296);
                }),
                e
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
            function (e, t, r, n) {
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
                    (a.sign = function (e) {
                        return e > 0 ? 1 : e < 0 ? -1 : 0;
                    }),
                    (a.signNotZero = function (e) {
                        return e < 0 ? -1 : 1;
                    }),
                    (a.toSNorm = function (e, r) {
                        return (
                            (r = t(r, 255)),
                            Math.round((0.5 * a.clamp(e, -1, 1) + 0.5) * r)
                        );
                    }),
                    (a.fromSNorm = function (e, r) {
                        return (r = t(r, 255)), (a.clamp(e, 0, r) / r) * 2 - 1;
                    }),
                    (a.sinh = function (e) {
                        return (
                            0.5 *
                            (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e))
                        );
                    }),
                    (a.cosh = function (e) {
                        return (
                            0.5 *
                            (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e))
                        );
                    }),
                    (a.lerp = function (e, t, r) {
                        return (1 - r) * e + r * t;
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
                    (a.toRadians = function (e) {
                        return e * a.RADIANS_PER_DEGREE;
                    }),
                    (a.toDegrees = function (e) {
                        return e * a.DEGREES_PER_RADIAN;
                    }),
                    (a.convertLongitudeRange = function (e) {
                        var t = a.TWO_PI,
                            r = e - Math.floor(e / t) * t;
                        return r < -Math.PI ? r + t : r >= Math.PI ? r - t : r;
                    }),
                    (a.clampToLatitudeRange = function (e) {
                        return a.clamp(e, -1 * a.PI_OVER_TWO, a.PI_OVER_TWO);
                    }),
                    (a.negativePiToPi = function (e) {
                        return a.zeroToTwoPi(e + a.PI) - a.PI;
                    }),
                    (a.zeroToTwoPi = function (e) {
                        var t = a.mod(e, a.TWO_PI);
                        return Math.abs(t) < a.EPSILON14 &&
                            Math.abs(e) > a.EPSILON14
                            ? a.TWO_PI
                            : t;
                    }),
                    (a.mod = function (e, t) {
                        return ((e % t) + t) % t;
                    }),
                    (a.equalsEpsilon = function (e, r, n, a) {
                        a = t(a, n);
                        var o = Math.abs(e - r);
                        return (
                            o <= a ||
                            o <= n * Math.max(Math.abs(e), Math.abs(r))
                        );
                    });
                var o = [1];
                (a.factorial = function (e) {
                    var t = o.length;
                    if (e >= t)
                        for (var r = o[t - 1], n = t; n <= e; n++)
                            o.push(r * n);
                    return o[e];
                }),
                    (a.incrementWrap = function (e, r, n) {
                        return (n = t(n, 0)), ++e, e > r && (e = n), e;
                    }),
                    (a.isPowerOfTwo = function (e) {
                        return 0 !== e && 0 == (e & (e - 1));
                    }),
                    (a.nextPowerOfTwo = function (e) {
                        return (
                            --e,
                            (e |= e >> 1),
                            (e |= e >> 2),
                            (e |= e >> 4),
                            (e |= e >> 8),
                            (e |= e >> 16),
                            ++e
                        );
                    }),
                    (a.clamp = function (e, t, r) {
                        return e < t ? t : e > r ? r : e;
                    });
                var i = new e();
                return (
                    (a.setRandomNumberSeed = function (t) {
                        i = new e(t);
                    }),
                    (a.nextRandomNumber = function () {
                        return i.random();
                    }),
                    (a.randomBetween = function (e, t) {
                        return a.nextRandomNumber() * (t - e) + e;
                    }),
                    (a.acosClamped = function (e) {
                        return Math.acos(a.clamp(e, -1, 1));
                    }),
                    (a.asinClamped = function (e) {
                        return Math.asin(a.clamp(e, -1, 1));
                    }),
                    (a.chordLength = function (e, t) {
                        return 2 * t * Math.sin(0.5 * e);
                    }),
                    (a.logBase = function (e, t) {
                        return Math.log(e) / Math.log(t);
                    }),
                    (a.fog = function (e, t) {
                        var r = e * t;
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
            function (e, t, r, n, a, o) {
                'use strict';
                function i(e, r, n) {
                    (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0));
                }
                (i.fromSpherical = function (e, n) {
                    r(n) || (n = new i());
                    var a = e.clock,
                        o = e.cone,
                        u = t(e.magnitude, 1),
                        s = u * Math.sin(o);
                    return (
                        (n.x = s * Math.cos(a)),
                        (n.y = s * Math.sin(a)),
                        (n.z = u * Math.cos(o)),
                        n
                    );
                }),
                    (i.fromElements = function (e, t, n, a) {
                        return r(a)
                            ? ((a.x = e), (a.y = t), (a.z = n), a)
                            : new i(e, t, n);
                    }),
                    (i.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                                : new i(e.x, e.y, e.z);
                    }),
                    (i.fromCartesian4 = i.clone),
                    (i.packedLength = 3),
                    (i.pack = function (e, r, n) {
                        return (
                            (n = t(n, 0)),
                            (r[n++] = e.x),
                            (r[n++] = e.y),
                            (r[n] = e.z),
                            r
                        );
                    }),
                    (i.unpack = function (e, n, a) {
                        return (
                            (n = t(n, 0)),
                            r(a) || (a = new i()),
                            (a.x = e[n++]),
                            (a.y = e[n++]),
                            (a.z = e[n]),
                            a
                        );
                    }),
                    (i.packArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = 3 * n) : (t = new Array(3 * n));
                        for (var a = 0; a < n; ++a) i.pack(e[a], t, 3 * a);
                        return t;
                    }),
                    (i.unpackArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = n / 3) : (t = new Array(n / 3));
                        for (var a = 0; a < n; a += 3) {
                            var o = a / 3;
                            t[o] = i.unpack(e, a, t[o]);
                        }
                        return t;
                    }),
                    (i.fromArray = i.unpack),
                    (i.maximumComponent = function (e) {
                        return Math.max(e.x, e.y, e.z);
                    }),
                    (i.minimumComponent = function (e) {
                        return Math.min(e.x, e.y, e.z);
                    }),
                    (i.minimumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.min(e.x, t.x)),
                            (r.y = Math.min(e.y, t.y)),
                            (r.z = Math.min(e.z, t.z)),
                            r
                        );
                    }),
                    (i.maximumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.max(e.x, t.x)),
                            (r.y = Math.max(e.y, t.y)),
                            (r.z = Math.max(e.z, t.z)),
                            r
                        );
                    }),
                    (i.magnitudeSquared = function (e) {
                        return e.x * e.x + e.y * e.y + e.z * e.z;
                    }),
                    (i.magnitude = function (e) {
                        return Math.sqrt(i.magnitudeSquared(e));
                    });
                var u = new i();
                (i.distance = function (e, t) {
                    return i.subtract(e, t, u), i.magnitude(u);
                }),
                    (i.distanceSquared = function (e, t) {
                        return i.subtract(e, t, u), i.magnitudeSquared(u);
                    }),
                    (i.normalize = function (e, t) {
                        var r = i.magnitude(e);
                        return (
                            (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), t
                        );
                    }),
                    (i.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z;
                    }),
                    (i.multiplyComponents = function (e, t, r) {
                        return (
                            (r.x = e.x * t.x),
                            (r.y = e.y * t.y),
                            (r.z = e.z * t.z),
                            r
                        );
                    }),
                    (i.divideComponents = function (e, t, r) {
                        return (
                            (r.x = e.x / t.x),
                            (r.y = e.y / t.y),
                            (r.z = e.z / t.z),
                            r
                        );
                    }),
                    (i.add = function (e, t, r) {
                        return (
                            (r.x = e.x + t.x),
                            (r.y = e.y + t.y),
                            (r.z = e.z + t.z),
                            r
                        );
                    }),
                    (i.subtract = function (e, t, r) {
                        return (
                            (r.x = e.x - t.x),
                            (r.y = e.y - t.y),
                            (r.z = e.z - t.z),
                            r
                        );
                    }),
                    (i.multiplyByScalar = function (e, t, r) {
                        return (
                            (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), r
                        );
                    }),
                    (i.divideByScalar = function (e, t, r) {
                        return (
                            (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), r
                        );
                    }),
                    (i.negate = function (e, t) {
                        return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
                    }),
                    (i.abs = function (e, t) {
                        return (
                            (t.x = Math.abs(e.x)),
                            (t.y = Math.abs(e.y)),
                            (t.z = Math.abs(e.z)),
                            t
                        );
                    });
                var s = new i();
                i.lerp = function (e, t, r, n) {
                    return (
                        i.multiplyByScalar(t, r, s),
                        (n = i.multiplyByScalar(e, 1 - r, n)),
                        i.add(s, n, n)
                    );
                };
                var E = new i(),
                    c = new i();
                i.angleBetween = function (e, t) {
                    i.normalize(e, E), i.normalize(t, c);
                    var r = i.dot(E, c),
                        n = i.magnitude(i.cross(E, c, E));
                    return Math.atan2(n, r);
                };
                var l = new i();
                (i.mostOrthogonalAxis = function (e, t) {
                    var r = i.normalize(e, l);
                    return (
                        i.abs(r, r),
                        (t =
                            r.x <= r.y
                                ? r.x <= r.z
                                    ? i.clone(i.UNIT_X, t)
                                    : i.clone(i.UNIT_Z, t)
                                : r.y <= r.z
                                  ? i.clone(i.UNIT_Y, t)
                                  : i.clone(i.UNIT_Z, t))
                    );
                }),
                    (i.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                e.x === t.x &&
                                e.y === t.y &&
                                e.z === t.z)
                        );
                    }),
                    (i.equalsArray = function (e, t, r) {
                        return (
                            e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2]
                        );
                    }),
                    (i.equalsEpsilon = function (e, t, n, a) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                o.equalsEpsilon(e.x, t.x, n, a) &&
                                o.equalsEpsilon(e.y, t.y, n, a) &&
                                o.equalsEpsilon(e.z, t.z, n, a))
                        );
                    }),
                    (i.cross = function (e, t, r) {
                        var n = e.x,
                            a = e.y,
                            o = e.z,
                            i = t.x,
                            u = t.y,
                            s = t.z,
                            E = a * s - o * u,
                            c = o * i - n * s,
                            l = n * u - a * i;
                        return (r.x = E), (r.y = c), (r.z = l), r;
                    }),
                    (i.fromDegrees = function (e, t, r, n, a) {
                        return (
                            (e = o.toRadians(e)),
                            (t = o.toRadians(t)),
                            i.fromRadians(e, t, r, n, a)
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
                    (i.fromRadians = function (e, n, a, o, u) {
                        a = t(a, 0);
                        var s = r(o) ? o.radiiSquared : R,
                            E = Math.cos(n);
                        (f.x = E * Math.cos(e)),
                            (f.y = E * Math.sin(e)),
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
                    (i.fromDegreesArray = function (e, t, n) {
                        var a = e.length;
                        r(n) ? (n.length = a / 2) : (n = new Array(a / 2));
                        for (var o = 0; o < a; o += 2) {
                            var u = e[o],
                                s = e[o + 1],
                                E = o / 2;
                            n[E] = i.fromDegrees(u, s, 0, t, n[E]);
                        }
                        return n;
                    }),
                    (i.fromRadiansArray = function (e, t, n) {
                        var a = e.length;
                        r(n) ? (n.length = a / 2) : (n = new Array(a / 2));
                        for (var o = 0; o < a; o += 2) {
                            var u = e[o],
                                s = e[o + 1],
                                E = o / 2;
                            n[E] = i.fromRadians(u, s, 0, t, n[E]);
                        }
                        return n;
                    }),
                    (i.fromDegreesArrayHeights = function (e, t, n) {
                        var a = e.length;
                        r(n) ? (n.length = a / 3) : (n = new Array(a / 3));
                        for (var o = 0; o < a; o += 3) {
                            var u = e[o],
                                s = e[o + 1],
                                E = e[o + 2],
                                c = o / 3;
                            n[c] = i.fromDegrees(u, s, E, t, n[c]);
                        }
                        return n;
                    }),
                    (i.fromRadiansArrayHeights = function (e, t, n) {
                        var a = e.length;
                        r(n) ? (n.length = a / 3) : (n = new Array(a / 3));
                        for (var o = 0; o < a; o += 3) {
                            var u = e[o],
                                s = e[o + 1],
                                E = e[o + 2],
                                c = o / 3;
                            n[c] = i.fromRadians(u, s, E, t, n[c]);
                        }
                        return n;
                    }),
                    (i.ZERO = a(new i(0, 0, 0))),
                    (i.UNIT_X = a(new i(1, 0, 0))),
                    (i.UNIT_Y = a(new i(0, 1, 0))),
                    (i.UNIT_Z = a(new i(0, 0, 1))),
                    (i.prototype.clone = function (e) {
                        return i.clone(this, e);
                    }),
                    (i.prototype.equals = function (e) {
                        return i.equals(this, e);
                    }),
                    (i.prototype.equalsEpsilon = function (e, t, r) {
                        return i.equalsEpsilon(this, e, t, r);
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
            function (e, t, r, n) {
                'use strict';
                function a(r, a, u, s, E) {
                    var c = r.x,
                        l = r.y,
                        f = r.z,
                        _ = a.x,
                        R = a.y,
                        T = a.z,
                        h = c * c * _ * _,
                        A = l * l * R * R,
                        d = f * f * T * T,
                        S = h + A + d,
                        m = Math.sqrt(1 / S),
                        C = e.multiplyByScalar(r, m, o);
                    if (S < s) return isFinite(m) ? e.clone(C, E) : void 0;
                    var N = u.x,
                        I = u.y,
                        M = u.z,
                        p = i;
                    (p.x = C.x * N * 2),
                        (p.y = C.y * I * 2),
                        (p.z = C.z * M * 2);
                    var O,
                        g,
                        y,
                        F,
                        L,
                        U,
                        v,
                        D,
                        P,
                        B,
                        w,
                        x = ((1 - m) * e.magnitude(r)) / (0.5 * e.magnitude(p)),
                        G = 0;
                    do {
                        (x -= G),
                            (y = 1 / (1 + x * N)),
                            (F = 1 / (1 + x * I)),
                            (L = 1 / (1 + x * M)),
                            (U = y * y),
                            (v = F * F),
                            (D = L * L),
                            (P = U * y),
                            (B = v * F),
                            (w = D * L),
                            (O = h * U + A * v + d * D - 1),
                            (g = h * P * N + A * B * I + d * w * M);
                        G = O / (-2 * g);
                    } while (Math.abs(O) > n.EPSILON12);
                    return t(E)
                        ? ((E.x = c * y), (E.y = l * F), (E.z = f * L), E)
                        : new e(c * y, l * F, f * L);
                }
                var o = new e(),
                    i = new e();
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
            function (e, t, r, n, a, o, i) {
                'use strict';
                function u(e, t, n) {
                    (this.longitude = r(e, 0)),
                        (this.latitude = r(t, 0)),
                        (this.height = r(n, 0));
                }
                (u.fromRadians = function (e, t, a, o) {
                    return (
                        (a = r(a, 0)),
                        n(o)
                            ? ((o.longitude = e),
                              (o.latitude = t),
                              (o.height = a),
                              o)
                            : new u(e, t, a)
                    );
                }),
                    (u.fromDegrees = function (e, t, r, n) {
                        return (
                            (e = o.toRadians(e)),
                            (t = o.toRadians(t)),
                            u.fromRadians(e, t, r, n)
                        );
                    });
                var s = new e(),
                    E = new e(),
                    c = new e(),
                    l = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                    f = new e(
                        1 / 40680631590769,
                        1 / 40680631590769,
                        1 / 40408299984661.445,
                    ),
                    _ = o.EPSILON1;
                return (
                    (u.fromCartesian = function (t, r, a) {
                        var R = n(r) ? r.oneOverRadii : l,
                            T = n(r) ? r.oneOverRadiiSquared : f,
                            h = n(r) ? r._centerToleranceSquared : _,
                            A = i(t, R, T, h, E);
                        if (n(A)) {
                            var d = e.multiplyComponents(A, T, s);
                            d = e.normalize(d, d);
                            var S = e.subtract(t, A, c),
                                m = Math.atan2(d.y, d.x),
                                C = Math.asin(d.z),
                                N = o.sign(e.dot(S, t)) * e.magnitude(S);
                            return n(a)
                                ? ((a.longitude = m),
                                  (a.latitude = C),
                                  (a.height = N),
                                  a)
                                : new u(m, C, N);
                        }
                    }),
                    (u.clone = function (e, t) {
                        if (n(e))
                            return n(t)
                                ? ((t.longitude = e.longitude),
                                  (t.latitude = e.latitude),
                                  (t.height = e.height),
                                  t)
                                : new u(e.longitude, e.latitude, e.height);
                    }),
                    (u.equals = function (e, t) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                e.longitude === t.longitude &&
                                e.latitude === t.latitude &&
                                e.height === t.height)
                        );
                    }),
                    (u.equalsEpsilon = function (e, t, r) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                Math.abs(e.longitude - t.longitude) <= r &&
                                Math.abs(e.latitude - t.latitude) <= r &&
                                Math.abs(e.height - t.height) <= r)
                        );
                    }),
                    (u.ZERO = a(new u(0, 0, 0))),
                    (u.prototype.clone = function (e) {
                        return u.clone(this, e);
                    }),
                    (u.prototype.equals = function (e) {
                        return u.equals(this, e);
                    }),
                    (u.prototype.equalsEpsilon = function (e, t) {
                        return u.equalsEpsilon(this, e, t);
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
        define('Core/defineProperties', ['./defined'], function (e) {
            'use strict';
            var t = (function () {
                    try {
                        return 'x' in Object.defineProperty({}, 'x', {});
                    } catch (e) {
                        return !1;
                    }
                })(),
                r = Object.defineProperties;
            return (
                (t && e(r)) ||
                    (r = function (e) {
                        return e;
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
            function (e, t, r, n, a, o, i, u, s, E) {
                'use strict';
                function c(t, r, a, o) {
                    (r = n(r, 0)),
                        (a = n(a, 0)),
                        (o = n(o, 0)),
                        (t._radii = new e(r, a, o)),
                        (t._radiiSquared = new e(r * r, a * a, o * o)),
                        (t._radiiToTheFourth = new e(
                            r * r * r * r,
                            a * a * a * a,
                            o * o * o * o,
                        )),
                        (t._oneOverRadii = new e(
                            0 === r ? 0 : 1 / r,
                            0 === a ? 0 : 1 / a,
                            0 === o ? 0 : 1 / o,
                        )),
                        (t._oneOverRadiiSquared = new e(
                            0 === r ? 0 : 1 / (r * r),
                            0 === a ? 0 : 1 / (a * a),
                            0 === o ? 0 : 1 / (o * o),
                        )),
                        (t._minimumRadius = Math.min(r, a, o)),
                        (t._maximumRadius = Math.max(r, a, o)),
                        (t._centerToleranceSquared = s.EPSILON1),
                        0 !== t._radiiSquared.z &&
                            (t._squaredXOverSquaredZ =
                                t._radiiSquared.x / t._radiiSquared.z);
                }
                function l(e, t, r) {
                    (this._radii = void 0),
                        (this._radiiSquared = void 0),
                        (this._radiiToTheFourth = void 0),
                        (this._oneOverRadii = void 0),
                        (this._oneOverRadiiSquared = void 0),
                        (this._minimumRadius = void 0),
                        (this._maximumRadius = void 0),
                        (this._centerToleranceSquared = void 0),
                        (this._squaredXOverSquaredZ = void 0),
                        c(this, e, t, r);
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
                    (l.clone = function (t, r) {
                        if (a(t)) {
                            var n = t._radii;
                            return a(r)
                                ? (e.clone(n, r._radii),
                                  e.clone(t._radiiSquared, r._radiiSquared),
                                  e.clone(
                                      t._radiiToTheFourth,
                                      r._radiiToTheFourth,
                                  ),
                                  e.clone(t._oneOverRadii, r._oneOverRadii),
                                  e.clone(
                                      t._oneOverRadiiSquared,
                                      r._oneOverRadiiSquared,
                                  ),
                                  (r._minimumRadius = t._minimumRadius),
                                  (r._maximumRadius = t._maximumRadius),
                                  (r._centerToleranceSquared =
                                      t._centerToleranceSquared),
                                  r)
                                : new l(n.x, n.y, n.z);
                        }
                    }),
                    (l.fromCartesian3 = function (e, t) {
                        return (
                            a(t) || (t = new l()),
                            a(e) ? (c(t, e.x, e.y, e.z), t) : t
                        );
                    }),
                    (l.WGS84 = u(new l(6378137, 6378137, 6356752.314245179))),
                    (l.UNIT_SPHERE = u(new l(1, 1, 1))),
                    (l.MOON = u(
                        new l(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS),
                    )),
                    (l.prototype.clone = function (e) {
                        return l.clone(this, e);
                    }),
                    (l.packedLength = e.packedLength),
                    (l.pack = function (t, r, a) {
                        return (a = n(a, 0)), e.pack(t._radii, r, a), r;
                    }),
                    (l.unpack = function (t, r, a) {
                        r = n(r, 0);
                        var o = e.unpack(t, r);
                        return l.fromCartesian3(o, a);
                    }),
                    (l.prototype.geocentricSurfaceNormal = e.normalize),
                    (l.prototype.geodeticSurfaceNormalCartographic = function (
                        t,
                        r,
                    ) {
                        var n = t.longitude,
                            o = t.latitude,
                            i = Math.cos(o),
                            u = i * Math.cos(n),
                            s = i * Math.sin(n),
                            E = Math.sin(o);
                        return (
                            a(r) || (r = new e()),
                            (r.x = u),
                            (r.y = s),
                            (r.z = E),
                            e.normalize(r, r)
                        );
                    }),
                    (l.prototype.geodeticSurfaceNormal = function (t, r) {
                        return (
                            a(r) || (r = new e()),
                            (r = e.multiplyComponents(
                                t,
                                this._oneOverRadiiSquared,
                                r,
                            )),
                            e.normalize(r, r)
                        );
                    });
                var f = new e(),
                    _ = new e();
                (l.prototype.cartographicToCartesian = function (t, r) {
                    var n = f,
                        o = _;
                    this.geodeticSurfaceNormalCartographic(t, n),
                        e.multiplyComponents(this._radiiSquared, n, o);
                    var i = Math.sqrt(e.dot(n, o));
                    return (
                        e.divideByScalar(o, i, o),
                        e.multiplyByScalar(n, t.height, n),
                        a(r) || (r = new e()),
                        e.add(o, n, r)
                    );
                }),
                    (l.prototype.cartographicArrayToCartesianArray = function (
                        e,
                        t,
                    ) {
                        var r = e.length;
                        a(t) ? (t.length = r) : (t = new Array(r));
                        for (var n = 0; n < r; n++)
                            t[n] = this.cartographicToCartesian(e[n], t[n]);
                        return t;
                    });
                var R = new e(),
                    T = new e(),
                    h = new e();
                return (
                    (l.prototype.cartesianToCartographic = function (r, n) {
                        var o = this.scaleToGeodeticSurface(r, T);
                        if (a(o)) {
                            var i = this.geodeticSurfaceNormal(o, R),
                                u = e.subtract(r, o, h),
                                E = Math.atan2(i.y, i.x),
                                c = Math.asin(i.z),
                                l = s.sign(e.dot(u, r)) * e.magnitude(u);
                            return a(n)
                                ? ((n.longitude = E),
                                  (n.latitude = c),
                                  (n.height = l),
                                  n)
                                : new t(E, c, l);
                        }
                    }),
                    (l.prototype.cartesianArrayToCartographicArray = function (
                        e,
                        t,
                    ) {
                        var r = e.length;
                        a(t) ? (t.length = r) : (t = new Array(r));
                        for (var n = 0; n < r; ++n)
                            t[n] = this.cartesianToCartographic(e[n], t[n]);
                        return t;
                    }),
                    (l.prototype.scaleToGeodeticSurface = function (e, t) {
                        return E(
                            e,
                            this._oneOverRadii,
                            this._oneOverRadiiSquared,
                            this._centerToleranceSquared,
                            t,
                        );
                    }),
                    (l.prototype.scaleToGeocentricSurface = function (t, r) {
                        a(r) || (r = new e());
                        var n = t.x,
                            o = t.y,
                            i = t.z,
                            u = this._oneOverRadiiSquared,
                            s =
                                1 /
                                Math.sqrt(
                                    n * n * u.x + o * o * u.y + i * i * u.z,
                                );
                        return e.multiplyByScalar(t, s, r);
                    }),
                    (l.prototype.transformPositionToScaledSpace = function (
                        t,
                        r,
                    ) {
                        return (
                            a(r) || (r = new e()),
                            e.multiplyComponents(t, this._oneOverRadii, r)
                        );
                    }),
                    (l.prototype.transformPositionFromScaledSpace = function (
                        t,
                        r,
                    ) {
                        return (
                            a(r) || (r = new e()),
                            e.multiplyComponents(t, this._radii, r)
                        );
                    }),
                    (l.prototype.equals = function (t) {
                        return (
                            this === t ||
                            (a(t) && e.equals(this._radii, t._radii))
                        );
                    }),
                    (l.prototype.toString = function () {
                        return this._radii.toString();
                    }),
                    (l.prototype.getSurfaceNormalIntersectionWithZAxis =
                        function (t, r, o) {
                            r = n(r, 0);
                            var i = this._squaredXOverSquaredZ;
                            if (
                                (a(o) || (o = new e()),
                                (o.x = 0),
                                (o.y = 0),
                                (o.z = t.z * (1 - i)),
                                !(Math.abs(o.z) >= this._radii.z - r))
                            )
                                return o;
                        }),
                    l
                );
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
            function (e, t, r, n, a, o, i) {
                'use strict';
                function u(e) {
                    (this._ellipsoid = r(e, i.WGS84)),
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
                    (u.prototype.project = function (t, r) {
                        var a = this._semimajorAxis,
                            o = t.longitude * a,
                            i = t.latitude * a,
                            u = t.height;
                        return n(r)
                            ? ((r.x = o), (r.y = i), (r.z = u), r)
                            : new e(o, i, u);
                    }),
                    (u.prototype.unproject = function (e, r) {
                        var a = this._oneOverSemimajorAxis,
                            o = e.x * a,
                            i = e.y * a,
                            u = e.z;
                        return n(r)
                            ? ((r.longitude = o),
                              (r.latitude = i),
                              (r.height = u),
                              r)
                            : new t(o, i, u);
                    }),
                    u
                );
            },
        ),
        define('Core/Intersect', ['./freezeObject'], function (e) {
            'use strict';
            return e({ OUTSIDE: -1, INTERSECTING: 0, INSIDE: 1 });
        }),
        define('Core/Interval', ['./defaultValue'], function (e) {
            'use strict';
            function t(t, r) {
                (this.start = e(t, 0)), (this.stop = e(r, 0));
            }
            return t;
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
            function (e, t, r, n, a, o, i, u) {
                'use strict';
                function s(e, t, n, a, o, i, u, s, E) {
                    (this[0] = r(e, 0)),
                        (this[1] = r(a, 0)),
                        (this[2] = r(u, 0)),
                        (this[3] = r(t, 0)),
                        (this[4] = r(o, 0)),
                        (this[5] = r(s, 0)),
                        (this[6] = r(n, 0)),
                        (this[7] = r(i, 0)),
                        (this[8] = r(E, 0));
                }
                function E(e) {
                    for (var t = 0, r = 0; r < 9; ++r) {
                        var n = e[r];
                        t += n * n;
                    }
                    return Math.sqrt(t);
                }
                function c(e) {
                    for (var t = 0, r = 0; r < 3; ++r) {
                        var n = e[s.getElementIndex(T[r], R[r])];
                        t += 2 * n * n;
                    }
                    return Math.sqrt(t);
                }
                function l(e, t) {
                    for (var r = u.EPSILON15, n = 0, a = 1, o = 0; o < 3; ++o) {
                        var i = Math.abs(e[s.getElementIndex(T[o], R[o])]);
                        i > n && ((a = o), (n = i));
                    }
                    var E = 1,
                        c = 0,
                        l = R[a],
                        f = T[a];
                    if (Math.abs(e[s.getElementIndex(f, l)]) > r) {
                        var _,
                            h = e[s.getElementIndex(f, f)],
                            A = e[s.getElementIndex(l, l)],
                            d = e[s.getElementIndex(f, l)],
                            S = (h - A) / 2 / d;
                        (_ =
                            S < 0
                                ? -1 / (-S + Math.sqrt(1 + S * S))
                                : 1 / (S + Math.sqrt(1 + S * S))),
                            (E = 1 / Math.sqrt(1 + _ * _)),
                            (c = _ * E);
                    }
                    return (
                        (t = s.clone(s.IDENTITY, t)),
                        (t[s.getElementIndex(l, l)] = t[
                            s.getElementIndex(f, f)
                        ] =
                            E),
                        (t[s.getElementIndex(f, l)] = c),
                        (t[s.getElementIndex(l, f)] = -c),
                        t
                    );
                }
                (s.packedLength = 9),
                    (s.pack = function (e, t, n) {
                        return (
                            (n = r(n, 0)),
                            (t[n++] = e[0]),
                            (t[n++] = e[1]),
                            (t[n++] = e[2]),
                            (t[n++] = e[3]),
                            (t[n++] = e[4]),
                            (t[n++] = e[5]),
                            (t[n++] = e[6]),
                            (t[n++] = e[7]),
                            (t[n++] = e[8]),
                            t
                        );
                    }),
                    (s.unpack = function (e, t, a) {
                        return (
                            (t = r(t, 0)),
                            n(a) || (a = new s()),
                            (a[0] = e[t++]),
                            (a[1] = e[t++]),
                            (a[2] = e[t++]),
                            (a[3] = e[t++]),
                            (a[4] = e[t++]),
                            (a[5] = e[t++]),
                            (a[6] = e[t++]),
                            (a[7] = e[t++]),
                            (a[8] = e[t++]),
                            a
                        );
                    }),
                    (s.clone = function (e, t) {
                        if (n(e))
                            return n(t)
                                ? ((t[0] = e[0]),
                                  (t[1] = e[1]),
                                  (t[2] = e[2]),
                                  (t[3] = e[3]),
                                  (t[4] = e[4]),
                                  (t[5] = e[5]),
                                  (t[6] = e[6]),
                                  (t[7] = e[7]),
                                  (t[8] = e[8]),
                                  t)
                                : new s(
                                      e[0],
                                      e[3],
                                      e[6],
                                      e[1],
                                      e[4],
                                      e[7],
                                      e[2],
                                      e[5],
                                      e[8],
                                  );
                    }),
                    (s.fromArray = function (e, t, a) {
                        return (
                            (t = r(t, 0)),
                            n(a) || (a = new s()),
                            (a[0] = e[t]),
                            (a[1] = e[t + 1]),
                            (a[2] = e[t + 2]),
                            (a[3] = e[t + 3]),
                            (a[4] = e[t + 4]),
                            (a[5] = e[t + 5]),
                            (a[6] = e[t + 6]),
                            (a[7] = e[t + 7]),
                            (a[8] = e[t + 8]),
                            a
                        );
                    }),
                    (s.fromColumnMajorArray = function (e, t) {
                        return s.clone(e, t);
                    }),
                    (s.fromRowMajorArray = function (e, t) {
                        return n(t)
                            ? ((t[0] = e[0]),
                              (t[1] = e[3]),
                              (t[2] = e[6]),
                              (t[3] = e[1]),
                              (t[4] = e[4]),
                              (t[5] = e[7]),
                              (t[6] = e[2]),
                              (t[7] = e[5]),
                              (t[8] = e[8]),
                              t)
                            : new s(
                                  e[0],
                                  e[1],
                                  e[2],
                                  e[3],
                                  e[4],
                                  e[5],
                                  e[6],
                                  e[7],
                                  e[8],
                              );
                    }),
                    (s.fromQuaternion = function (e, t) {
                        var r = e.x * e.x,
                            a = e.x * e.y,
                            o = e.x * e.z,
                            i = e.x * e.w,
                            u = e.y * e.y,
                            E = e.y * e.z,
                            c = e.y * e.w,
                            l = e.z * e.z,
                            f = e.z * e.w,
                            _ = e.w * e.w,
                            R = r - u - l + _,
                            T = 2 * (a - f),
                            h = 2 * (o + c),
                            A = 2 * (a + f),
                            d = -r + u - l + _,
                            S = 2 * (E - i),
                            m = 2 * (o - c),
                            C = 2 * (E + i),
                            N = -r - u + l + _;
                        return n(t)
                            ? ((t[0] = R),
                              (t[1] = A),
                              (t[2] = m),
                              (t[3] = T),
                              (t[4] = d),
                              (t[5] = C),
                              (t[6] = h),
                              (t[7] = S),
                              (t[8] = N),
                              t)
                            : new s(R, T, h, A, d, S, m, C, N);
                    }),
                    (s.fromHeadingPitchRoll = function (e, t) {
                        var r = Math.cos(-e.pitch),
                            a = Math.cos(-e.heading),
                            o = Math.cos(e.roll),
                            i = Math.sin(-e.pitch),
                            u = Math.sin(-e.heading),
                            E = Math.sin(e.roll),
                            c = r * a,
                            l = -o * u + E * i * a,
                            f = E * u + o * i * a,
                            _ = r * u,
                            R = o * a + E * i * u,
                            T = -E * a + o * i * u,
                            h = -i,
                            A = E * r,
                            d = o * r;
                        return n(t)
                            ? ((t[0] = c),
                              (t[1] = _),
                              (t[2] = h),
                              (t[3] = l),
                              (t[4] = R),
                              (t[5] = A),
                              (t[6] = f),
                              (t[7] = T),
                              (t[8] = d),
                              t)
                            : new s(c, l, f, _, R, T, h, A, d);
                    }),
                    (s.fromScale = function (e, t) {
                        return n(t)
                            ? ((t[0] = e.x),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = 0),
                              (t[4] = e.y),
                              (t[5] = 0),
                              (t[6] = 0),
                              (t[7] = 0),
                              (t[8] = e.z),
                              t)
                            : new s(e.x, 0, 0, 0, e.y, 0, 0, 0, e.z);
                    }),
                    (s.fromUniformScale = function (e, t) {
                        return n(t)
                            ? ((t[0] = e),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = 0),
                              (t[4] = e),
                              (t[5] = 0),
                              (t[6] = 0),
                              (t[7] = 0),
                              (t[8] = e),
                              t)
                            : new s(e, 0, 0, 0, e, 0, 0, 0, e);
                    }),
                    (s.fromCrossProduct = function (e, t) {
                        return n(t)
                            ? ((t[0] = 0),
                              (t[1] = e.z),
                              (t[2] = -e.y),
                              (t[3] = -e.z),
                              (t[4] = 0),
                              (t[5] = e.x),
                              (t[6] = e.y),
                              (t[7] = -e.x),
                              (t[8] = 0),
                              t)
                            : new s(0, -e.z, e.y, e.z, 0, -e.x, -e.y, e.x, 0);
                    }),
                    (s.fromRotationX = function (e, t) {
                        var r = Math.cos(e),
                            a = Math.sin(e);
                        return n(t)
                            ? ((t[0] = 1),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = 0),
                              (t[4] = r),
                              (t[5] = a),
                              (t[6] = 0),
                              (t[7] = -a),
                              (t[8] = r),
                              t)
                            : new s(1, 0, 0, 0, r, -a, 0, a, r);
                    }),
                    (s.fromRotationY = function (e, t) {
                        var r = Math.cos(e),
                            a = Math.sin(e);
                        return n(t)
                            ? ((t[0] = r),
                              (t[1] = 0),
                              (t[2] = -a),
                              (t[3] = 0),
                              (t[4] = 1),
                              (t[5] = 0),
                              (t[6] = a),
                              (t[7] = 0),
                              (t[8] = r),
                              t)
                            : new s(r, 0, a, 0, 1, 0, -a, 0, r);
                    }),
                    (s.fromRotationZ = function (e, t) {
                        var r = Math.cos(e),
                            a = Math.sin(e);
                        return n(t)
                            ? ((t[0] = r),
                              (t[1] = a),
                              (t[2] = 0),
                              (t[3] = -a),
                              (t[4] = r),
                              (t[5] = 0),
                              (t[6] = 0),
                              (t[7] = 0),
                              (t[8] = 1),
                              t)
                            : new s(r, -a, 0, a, r, 0, 0, 0, 1);
                    }),
                    (s.toArray = function (e, t) {
                        return n(t)
                            ? ((t[0] = e[0]),
                              (t[1] = e[1]),
                              (t[2] = e[2]),
                              (t[3] = e[3]),
                              (t[4] = e[4]),
                              (t[5] = e[5]),
                              (t[6] = e[6]),
                              (t[7] = e[7]),
                              (t[8] = e[8]),
                              t)
                            : [
                                  e[0],
                                  e[1],
                                  e[2],
                                  e[3],
                                  e[4],
                                  e[5],
                                  e[6],
                                  e[7],
                                  e[8],
                              ];
                    }),
                    (s.getElementIndex = function (e, t) {
                        return 3 * e + t;
                    }),
                    (s.getColumn = function (e, t, r) {
                        var n = 3 * t,
                            a = e[n],
                            o = e[n + 1],
                            i = e[n + 2];
                        return (r.x = a), (r.y = o), (r.z = i), r;
                    }),
                    (s.setColumn = function (e, t, r, n) {
                        n = s.clone(e, n);
                        var a = 3 * t;
                        return (
                            (n[a] = r.x), (n[a + 1] = r.y), (n[a + 2] = r.z), n
                        );
                    }),
                    (s.getRow = function (e, t, r) {
                        var n = e[t],
                            a = e[t + 3],
                            o = e[t + 6];
                        return (r.x = n), (r.y = a), (r.z = o), r;
                    }),
                    (s.setRow = function (e, t, r, n) {
                        return (
                            (n = s.clone(e, n)),
                            (n[t] = r.x),
                            (n[t + 3] = r.y),
                            (n[t + 6] = r.z),
                            n
                        );
                    });
                var f = new e();
                s.getScale = function (t, r) {
                    return (
                        (r.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], f),
                        )),
                        (r.y = e.magnitude(
                            e.fromElements(t[3], t[4], t[5], f),
                        )),
                        (r.z = e.magnitude(
                            e.fromElements(t[6], t[7], t[8], f),
                        )),
                        r
                    );
                };
                var _ = new e();
                (s.getMaximumScale = function (t) {
                    return s.getScale(t, _), e.maximumComponent(_);
                }),
                    (s.multiply = function (e, t, r) {
                        var n = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
                            a = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                            o = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                            i = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                            u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                            s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                            E = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                            c = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                            l = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
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
                    (s.add = function (e, t, r) {
                        return (
                            (r[0] = e[0] + t[0]),
                            (r[1] = e[1] + t[1]),
                            (r[2] = e[2] + t[2]),
                            (r[3] = e[3] + t[3]),
                            (r[4] = e[4] + t[4]),
                            (r[5] = e[5] + t[5]),
                            (r[6] = e[6] + t[6]),
                            (r[7] = e[7] + t[7]),
                            (r[8] = e[8] + t[8]),
                            r
                        );
                    }),
                    (s.subtract = function (e, t, r) {
                        return (
                            (r[0] = e[0] - t[0]),
                            (r[1] = e[1] - t[1]),
                            (r[2] = e[2] - t[2]),
                            (r[3] = e[3] - t[3]),
                            (r[4] = e[4] - t[4]),
                            (r[5] = e[5] - t[5]),
                            (r[6] = e[6] - t[6]),
                            (r[7] = e[7] - t[7]),
                            (r[8] = e[8] - t[8]),
                            r
                        );
                    }),
                    (s.multiplyByVector = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            o = t.z,
                            i = e[0] * n + e[3] * a + e[6] * o,
                            u = e[1] * n + e[4] * a + e[7] * o,
                            s = e[2] * n + e[5] * a + e[8] * o;
                        return (r.x = i), (r.y = u), (r.z = s), r;
                    }),
                    (s.multiplyByScalar = function (e, t, r) {
                        return (
                            (r[0] = e[0] * t),
                            (r[1] = e[1] * t),
                            (r[2] = e[2] * t),
                            (r[3] = e[3] * t),
                            (r[4] = e[4] * t),
                            (r[5] = e[5] * t),
                            (r[6] = e[6] * t),
                            (r[7] = e[7] * t),
                            (r[8] = e[8] * t),
                            r
                        );
                    }),
                    (s.multiplyByScale = function (e, t, r) {
                        return (
                            (r[0] = e[0] * t.x),
                            (r[1] = e[1] * t.x),
                            (r[2] = e[2] * t.x),
                            (r[3] = e[3] * t.y),
                            (r[4] = e[4] * t.y),
                            (r[5] = e[5] * t.y),
                            (r[6] = e[6] * t.z),
                            (r[7] = e[7] * t.z),
                            (r[8] = e[8] * t.z),
                            r
                        );
                    }),
                    (s.negate = function (e, t) {
                        return (
                            (t[0] = -e[0]),
                            (t[1] = -e[1]),
                            (t[2] = -e[2]),
                            (t[3] = -e[3]),
                            (t[4] = -e[4]),
                            (t[5] = -e[5]),
                            (t[6] = -e[6]),
                            (t[7] = -e[7]),
                            (t[8] = -e[8]),
                            t
                        );
                    }),
                    (s.transpose = function (e, t) {
                        var r = e[0],
                            n = e[3],
                            a = e[6],
                            o = e[1],
                            i = e[4],
                            u = e[7],
                            s = e[2],
                            E = e[5],
                            c = e[8];
                        return (
                            (t[0] = r),
                            (t[1] = n),
                            (t[2] = a),
                            (t[3] = o),
                            (t[4] = i),
                            (t[5] = u),
                            (t[6] = s),
                            (t[7] = E),
                            (t[8] = c),
                            t
                        );
                    });
                var R = [1, 0, 0],
                    T = [2, 2, 1],
                    h = new s(),
                    A = new s();
                return (
                    (s.computeEigenDecomposition = function (e, t) {
                        var r = u.EPSILON20,
                            a = 0,
                            o = 0;
                        n(t) || (t = {});
                        for (
                            var i = (t.unitary = s.clone(
                                    s.IDENTITY,
                                    t.unitary,
                                )),
                                f = (t.diagonal = s.clone(e, t.diagonal)),
                                _ = r * E(f);
                            o < 10 && c(f) > _;

                        )
                            l(f, h),
                                s.transpose(h, A),
                                s.multiply(f, h, f),
                                s.multiply(A, f, f),
                                s.multiply(i, h, i),
                                ++a > 2 && (++o, (a = 0));
                        return t;
                    }),
                    (s.abs = function (e, t) {
                        return (
                            (t[0] = Math.abs(e[0])),
                            (t[1] = Math.abs(e[1])),
                            (t[2] = Math.abs(e[2])),
                            (t[3] = Math.abs(e[3])),
                            (t[4] = Math.abs(e[4])),
                            (t[5] = Math.abs(e[5])),
                            (t[6] = Math.abs(e[6])),
                            (t[7] = Math.abs(e[7])),
                            (t[8] = Math.abs(e[8])),
                            t
                        );
                    }),
                    (s.determinant = function (e) {
                        var t = e[0],
                            r = e[3],
                            n = e[6],
                            a = e[1],
                            o = e[4],
                            i = e[7],
                            u = e[2],
                            s = e[5],
                            E = e[8];
                        return (
                            t * (o * E - s * i) +
                            a * (s * n - r * E) +
                            u * (r * i - o * n)
                        );
                    }),
                    (s.inverse = function (e, t) {
                        var r = e[0],
                            n = e[1],
                            a = e[2],
                            o = e[3],
                            i = e[4],
                            u = e[5],
                            E = e[6],
                            c = e[7],
                            l = e[8],
                            f = s.determinant(e);
                        (t[0] = i * l - c * u),
                            (t[1] = c * a - n * l),
                            (t[2] = n * u - i * a),
                            (t[3] = E * u - o * l),
                            (t[4] = r * l - E * a),
                            (t[5] = o * a - r * u),
                            (t[6] = o * c - E * i),
                            (t[7] = E * n - r * c),
                            (t[8] = r * i - o * n);
                        var _ = 1 / f;
                        return s.multiplyByScalar(t, _, t);
                    }),
                    (s.equals = function (e, t) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                e[0] === t[0] &&
                                e[1] === t[1] &&
                                e[2] === t[2] &&
                                e[3] === t[3] &&
                                e[4] === t[4] &&
                                e[5] === t[5] &&
                                e[6] === t[6] &&
                                e[7] === t[7] &&
                                e[8] === t[8])
                        );
                    }),
                    (s.equalsEpsilon = function (e, t, r) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                Math.abs(e[0] - t[0]) <= r &&
                                Math.abs(e[1] - t[1]) <= r &&
                                Math.abs(e[2] - t[2]) <= r &&
                                Math.abs(e[3] - t[3]) <= r &&
                                Math.abs(e[4] - t[4]) <= r &&
                                Math.abs(e[5] - t[5]) <= r &&
                                Math.abs(e[6] - t[6]) <= r &&
                                Math.abs(e[7] - t[7]) <= r &&
                                Math.abs(e[8] - t[8]) <= r)
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
                    (s.prototype.clone = function (e) {
                        return s.clone(this, e);
                    }),
                    (s.prototype.equals = function (e) {
                        return s.equals(this, e);
                    }),
                    (s.equalsArray = function (e, t, r) {
                        return (
                            e[0] === t[r] &&
                            e[1] === t[r + 1] &&
                            e[2] === t[r + 2] &&
                            e[3] === t[r + 3] &&
                            e[4] === t[r + 4] &&
                            e[5] === t[r + 5] &&
                            e[6] === t[r + 6] &&
                            e[7] === t[r + 7] &&
                            e[8] === t[r + 8]
                        );
                    }),
                    (s.prototype.equalsEpsilon = function (e, t) {
                        return s.equalsEpsilon(this, e, t);
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
            function (e, t, r, n, a, o) {
                'use strict';
                function i(e, r, n, a) {
                    (this.x = t(e, 0)),
                        (this.y = t(r, 0)),
                        (this.z = t(n, 0)),
                        (this.w = t(a, 0));
                }
                (i.fromElements = function (e, t, n, a, o) {
                    return r(o)
                        ? ((o.x = e), (o.y = t), (o.z = n), (o.w = a), o)
                        : new i(e, t, n, a);
                }),
                    (i.fromColor = function (e, t) {
                        return r(t)
                            ? ((t.x = e.red),
                              (t.y = e.green),
                              (t.z = e.blue),
                              (t.w = e.alpha),
                              t)
                            : new i(e.red, e.green, e.blue, e.alpha);
                    }),
                    (i.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.x = e.x),
                                  (t.y = e.y),
                                  (t.z = e.z),
                                  (t.w = e.w),
                                  t)
                                : new i(e.x, e.y, e.z, e.w);
                    }),
                    (i.packedLength = 4),
                    (i.pack = function (e, r, n) {
                        return (
                            (n = t(n, 0)),
                            (r[n++] = e.x),
                            (r[n++] = e.y),
                            (r[n++] = e.z),
                            (r[n] = e.w),
                            r
                        );
                    }),
                    (i.unpack = function (e, n, a) {
                        return (
                            (n = t(n, 0)),
                            r(a) || (a = new i()),
                            (a.x = e[n++]),
                            (a.y = e[n++]),
                            (a.z = e[n++]),
                            (a.w = e[n]),
                            a
                        );
                    }),
                    (i.packArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = 4 * n) : (t = new Array(4 * n));
                        for (var a = 0; a < n; ++a) i.pack(e[a], t, 4 * a);
                        return t;
                    }),
                    (i.unpackArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = n / 4) : (t = new Array(n / 4));
                        for (var a = 0; a < n; a += 4) {
                            var o = a / 4;
                            t[o] = i.unpack(e, a, t[o]);
                        }
                        return t;
                    }),
                    (i.fromArray = i.unpack),
                    (i.maximumComponent = function (e) {
                        return Math.max(e.x, e.y, e.z, e.w);
                    }),
                    (i.minimumComponent = function (e) {
                        return Math.min(e.x, e.y, e.z, e.w);
                    }),
                    (i.minimumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.min(e.x, t.x)),
                            (r.y = Math.min(e.y, t.y)),
                            (r.z = Math.min(e.z, t.z)),
                            (r.w = Math.min(e.w, t.w)),
                            r
                        );
                    }),
                    (i.maximumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.max(e.x, t.x)),
                            (r.y = Math.max(e.y, t.y)),
                            (r.z = Math.max(e.z, t.z)),
                            (r.w = Math.max(e.w, t.w)),
                            r
                        );
                    }),
                    (i.magnitudeSquared = function (e) {
                        return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                    }),
                    (i.magnitude = function (e) {
                        return Math.sqrt(i.magnitudeSquared(e));
                    });
                var u = new i();
                (i.distance = function (e, t) {
                    return i.subtract(e, t, u), i.magnitude(u);
                }),
                    (i.distanceSquared = function (e, t) {
                        return i.subtract(e, t, u), i.magnitudeSquared(u);
                    }),
                    (i.normalize = function (e, t) {
                        var r = i.magnitude(e);
                        return (
                            (t.x = e.x / r),
                            (t.y = e.y / r),
                            (t.z = e.z / r),
                            (t.w = e.w / r),
                            t
                        );
                    }),
                    (i.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                    }),
                    (i.multiplyComponents = function (e, t, r) {
                        return (
                            (r.x = e.x * t.x),
                            (r.y = e.y * t.y),
                            (r.z = e.z * t.z),
                            (r.w = e.w * t.w),
                            r
                        );
                    }),
                    (i.divideComponents = function (e, t, r) {
                        return (
                            (r.x = e.x / t.x),
                            (r.y = e.y / t.y),
                            (r.z = e.z / t.z),
                            (r.w = e.w / t.w),
                            r
                        );
                    }),
                    (i.add = function (e, t, r) {
                        return (
                            (r.x = e.x + t.x),
                            (r.y = e.y + t.y),
                            (r.z = e.z + t.z),
                            (r.w = e.w + t.w),
                            r
                        );
                    }),
                    (i.subtract = function (e, t, r) {
                        return (
                            (r.x = e.x - t.x),
                            (r.y = e.y - t.y),
                            (r.z = e.z - t.z),
                            (r.w = e.w - t.w),
                            r
                        );
                    }),
                    (i.multiplyByScalar = function (e, t, r) {
                        return (
                            (r.x = e.x * t),
                            (r.y = e.y * t),
                            (r.z = e.z * t),
                            (r.w = e.w * t),
                            r
                        );
                    }),
                    (i.divideByScalar = function (e, t, r) {
                        return (
                            (r.x = e.x / t),
                            (r.y = e.y / t),
                            (r.z = e.z / t),
                            (r.w = e.w / t),
                            r
                        );
                    }),
                    (i.negate = function (e, t) {
                        return (
                            (t.x = -e.x),
                            (t.y = -e.y),
                            (t.z = -e.z),
                            (t.w = -e.w),
                            t
                        );
                    }),
                    (i.abs = function (e, t) {
                        return (
                            (t.x = Math.abs(e.x)),
                            (t.y = Math.abs(e.y)),
                            (t.z = Math.abs(e.z)),
                            (t.w = Math.abs(e.w)),
                            t
                        );
                    });
                var s = new i();
                i.lerp = function (e, t, r, n) {
                    return (
                        i.multiplyByScalar(t, r, s),
                        (n = i.multiplyByScalar(e, 1 - r, n)),
                        i.add(s, n, n)
                    );
                };
                var E = new i();
                return (
                    (i.mostOrthogonalAxis = function (e, t) {
                        var r = i.normalize(e, E);
                        return (
                            i.abs(r, r),
                            (t =
                                r.x <= r.y
                                    ? r.x <= r.z
                                        ? r.x <= r.w
                                            ? i.clone(i.UNIT_X, t)
                                            : i.clone(i.UNIT_W, t)
                                        : r.z <= r.w
                                          ? i.clone(i.UNIT_Z, t)
                                          : i.clone(i.UNIT_W, t)
                                    : r.y <= r.z
                                      ? r.y <= r.w
                                          ? i.clone(i.UNIT_Y, t)
                                          : i.clone(i.UNIT_W, t)
                                      : r.z <= r.w
                                        ? i.clone(i.UNIT_Z, t)
                                        : i.clone(i.UNIT_W, t))
                        );
                    }),
                    (i.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                e.x === t.x &&
                                e.y === t.y &&
                                e.z === t.z &&
                                e.w === t.w)
                        );
                    }),
                    (i.equalsArray = function (e, t, r) {
                        return (
                            e.x === t[r] &&
                            e.y === t[r + 1] &&
                            e.z === t[r + 2] &&
                            e.w === t[r + 3]
                        );
                    }),
                    (i.equalsEpsilon = function (e, t, n, a) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                o.equalsEpsilon(e.x, t.x, n, a) &&
                                o.equalsEpsilon(e.y, t.y, n, a) &&
                                o.equalsEpsilon(e.z, t.z, n, a) &&
                                o.equalsEpsilon(e.w, t.w, n, a))
                        );
                    }),
                    (i.ZERO = a(new i(0, 0, 0, 0))),
                    (i.UNIT_X = a(new i(1, 0, 0, 0))),
                    (i.UNIT_Y = a(new i(0, 1, 0, 0))),
                    (i.UNIT_Z = a(new i(0, 0, 1, 0))),
                    (i.UNIT_W = a(new i(0, 0, 0, 1))),
                    (i.prototype.clone = function (e) {
                        return i.clone(this, e);
                    }),
                    (i.prototype.equals = function (e) {
                        return i.equals(this, e);
                    }),
                    (i.prototype.equalsEpsilon = function (e, t, r) {
                        return i.equalsEpsilon(this, e, t, r);
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
        define('Core/RuntimeError', ['./defined'], function (e) {
            'use strict';
            function t(e) {
                (this.name = 'RuntimeError'), (this.message = e);
                var t;
                try {
                    throw new Error();
                } catch (e) {
                    t = e.stack;
                }
                this.stack = t;
            }
            return (
                e(Object.create) &&
                    ((t.prototype = Object.create(Error.prototype)),
                    (t.prototype.constructor = t)),
                (t.prototype.toString = function () {
                    var t = this.name + ': ' + this.message;
                    return (
                        e(this.stack) && (t += '\n' + this.stack.toString()), t
                    );
                }),
                t
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
            function (e, t, r, n, a, o, i, u, s, E) {
                'use strict';
                function c(e, t, r, a, o, i, u, s, E, c, l, f, _, R, T, h) {
                    (this[0] = n(e, 0)),
                        (this[1] = n(o, 0)),
                        (this[2] = n(E, 0)),
                        (this[3] = n(_, 0)),
                        (this[4] = n(t, 0)),
                        (this[5] = n(i, 0)),
                        (this[6] = n(c, 0)),
                        (this[7] = n(R, 0)),
                        (this[8] = n(r, 0)),
                        (this[9] = n(u, 0)),
                        (this[10] = n(l, 0)),
                        (this[11] = n(T, 0)),
                        (this[12] = n(a, 0)),
                        (this[13] = n(s, 0)),
                        (this[14] = n(f, 0)),
                        (this[15] = n(h, 0));
                }
                (c.packedLength = 16),
                    (c.pack = function (e, t, r) {
                        return (
                            (r = n(r, 0)),
                            (t[r++] = e[0]),
                            (t[r++] = e[1]),
                            (t[r++] = e[2]),
                            (t[r++] = e[3]),
                            (t[r++] = e[4]),
                            (t[r++] = e[5]),
                            (t[r++] = e[6]),
                            (t[r++] = e[7]),
                            (t[r++] = e[8]),
                            (t[r++] = e[9]),
                            (t[r++] = e[10]),
                            (t[r++] = e[11]),
                            (t[r++] = e[12]),
                            (t[r++] = e[13]),
                            (t[r++] = e[14]),
                            (t[r] = e[15]),
                            t
                        );
                    }),
                    (c.unpack = function (e, t, r) {
                        return (
                            (t = n(t, 0)),
                            a(r) || (r = new c()),
                            (r[0] = e[t++]),
                            (r[1] = e[t++]),
                            (r[2] = e[t++]),
                            (r[3] = e[t++]),
                            (r[4] = e[t++]),
                            (r[5] = e[t++]),
                            (r[6] = e[t++]),
                            (r[7] = e[t++]),
                            (r[8] = e[t++]),
                            (r[9] = e[t++]),
                            (r[10] = e[t++]),
                            (r[11] = e[t++]),
                            (r[12] = e[t++]),
                            (r[13] = e[t++]),
                            (r[14] = e[t++]),
                            (r[15] = e[t]),
                            r
                        );
                    }),
                    (c.clone = function (e, t) {
                        if (a(e))
                            return a(t)
                                ? ((t[0] = e[0]),
                                  (t[1] = e[1]),
                                  (t[2] = e[2]),
                                  (t[3] = e[3]),
                                  (t[4] = e[4]),
                                  (t[5] = e[5]),
                                  (t[6] = e[6]),
                                  (t[7] = e[7]),
                                  (t[8] = e[8]),
                                  (t[9] = e[9]),
                                  (t[10] = e[10]),
                                  (t[11] = e[11]),
                                  (t[12] = e[12]),
                                  (t[13] = e[13]),
                                  (t[14] = e[14]),
                                  (t[15] = e[15]),
                                  t)
                                : new c(
                                      e[0],
                                      e[4],
                                      e[8],
                                      e[12],
                                      e[1],
                                      e[5],
                                      e[9],
                                      e[13],
                                      e[2],
                                      e[6],
                                      e[10],
                                      e[14],
                                      e[3],
                                      e[7],
                                      e[11],
                                      e[15],
                                  );
                    }),
                    (c.fromArray = c.unpack),
                    (c.fromColumnMajorArray = function (e, t) {
                        return c.clone(e, t);
                    }),
                    (c.fromRowMajorArray = function (e, t) {
                        return a(t)
                            ? ((t[0] = e[0]),
                              (t[1] = e[4]),
                              (t[2] = e[8]),
                              (t[3] = e[12]),
                              (t[4] = e[1]),
                              (t[5] = e[5]),
                              (t[6] = e[9]),
                              (t[7] = e[13]),
                              (t[8] = e[2]),
                              (t[9] = e[6]),
                              (t[10] = e[10]),
                              (t[11] = e[14]),
                              (t[12] = e[3]),
                              (t[13] = e[7]),
                              (t[14] = e[11]),
                              (t[15] = e[15]),
                              t)
                            : new c(
                                  e[0],
                                  e[1],
                                  e[2],
                                  e[3],
                                  e[4],
                                  e[5],
                                  e[6],
                                  e[7],
                                  e[8],
                                  e[9],
                                  e[10],
                                  e[11],
                                  e[12],
                                  e[13],
                                  e[14],
                                  e[15],
                              );
                    }),
                    (c.fromRotationTranslation = function (t, r, o) {
                        return (
                            (r = n(r, e.ZERO)),
                            a(o)
                                ? ((o[0] = t[0]),
                                  (o[1] = t[1]),
                                  (o[2] = t[2]),
                                  (o[3] = 0),
                                  (o[4] = t[3]),
                                  (o[5] = t[4]),
                                  (o[6] = t[5]),
                                  (o[7] = 0),
                                  (o[8] = t[6]),
                                  (o[9] = t[7]),
                                  (o[10] = t[8]),
                                  (o[11] = 0),
                                  (o[12] = r.x),
                                  (o[13] = r.y),
                                  (o[14] = r.z),
                                  (o[15] = 1),
                                  o)
                                : new c(
                                      t[0],
                                      t[3],
                                      t[6],
                                      r.x,
                                      t[1],
                                      t[4],
                                      t[7],
                                      r.y,
                                      t[2],
                                      t[5],
                                      t[8],
                                      r.z,
                                      0,
                                      0,
                                      0,
                                      1,
                                  )
                        );
                    }),
                    (c.fromTranslationQuaternionRotationScale = function (
                        e,
                        t,
                        r,
                        n,
                    ) {
                        a(n) || (n = new c());
                        var o = r.x,
                            i = r.y,
                            u = r.z,
                            s = t.x * t.x,
                            E = t.x * t.y,
                            l = t.x * t.z,
                            f = t.x * t.w,
                            _ = t.y * t.y,
                            R = t.y * t.z,
                            T = t.y * t.w,
                            h = t.z * t.z,
                            A = t.z * t.w,
                            d = t.w * t.w,
                            S = s - _ - h + d,
                            m = 2 * (E - A),
                            C = 2 * (l + T),
                            N = 2 * (E + A),
                            I = -s + _ - h + d,
                            M = 2 * (R - f),
                            p = 2 * (l - T),
                            O = 2 * (R + f),
                            g = -s - _ + h + d;
                        return (
                            (n[0] = S * o),
                            (n[1] = N * o),
                            (n[2] = p * o),
                            (n[3] = 0),
                            (n[4] = m * i),
                            (n[5] = I * i),
                            (n[6] = O * i),
                            (n[7] = 0),
                            (n[8] = C * u),
                            (n[9] = M * u),
                            (n[10] = g * u),
                            (n[11] = 0),
                            (n[12] = e.x),
                            (n[13] = e.y),
                            (n[14] = e.z),
                            (n[15] = 1),
                            n
                        );
                    }),
                    (c.fromTranslationRotationScale = function (e, t) {
                        return c.fromTranslationQuaternionRotationScale(
                            e.translation,
                            e.rotation,
                            e.scale,
                            t,
                        );
                    }),
                    (c.fromTranslation = function (e, t) {
                        return c.fromRotationTranslation(s.IDENTITY, e, t);
                    }),
                    (c.fromScale = function (e, t) {
                        return a(t)
                            ? ((t[0] = e.x),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = 0),
                              (t[4] = 0),
                              (t[5] = e.y),
                              (t[6] = 0),
                              (t[7] = 0),
                              (t[8] = 0),
                              (t[9] = 0),
                              (t[10] = e.z),
                              (t[11] = 0),
                              (t[12] = 0),
                              (t[13] = 0),
                              (t[14] = 0),
                              (t[15] = 1),
                              t)
                            : new c(
                                  e.x,
                                  0,
                                  0,
                                  0,
                                  0,
                                  e.y,
                                  0,
                                  0,
                                  0,
                                  0,
                                  e.z,
                                  0,
                                  0,
                                  0,
                                  0,
                                  1,
                              );
                    }),
                    (c.fromUniformScale = function (e, t) {
                        return a(t)
                            ? ((t[0] = e),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = 0),
                              (t[4] = 0),
                              (t[5] = e),
                              (t[6] = 0),
                              (t[7] = 0),
                              (t[8] = 0),
                              (t[9] = 0),
                              (t[10] = e),
                              (t[11] = 0),
                              (t[12] = 0),
                              (t[13] = 0),
                              (t[14] = 0),
                              (t[15] = 1),
                              t)
                            : new c(
                                  e,
                                  0,
                                  0,
                                  0,
                                  0,
                                  e,
                                  0,
                                  0,
                                  0,
                                  0,
                                  e,
                                  0,
                                  0,
                                  0,
                                  0,
                                  1,
                              );
                    });
                var l = new e(),
                    f = new e(),
                    _ = new e();
                (c.fromCamera = function (t, r) {
                    var n = t.position,
                        o = t.direction,
                        i = t.up;
                    e.normalize(o, l),
                        e.normalize(e.cross(l, i, f), f),
                        e.normalize(e.cross(f, l, _), _);
                    var u = f.x,
                        s = f.y,
                        E = f.z,
                        R = l.x,
                        T = l.y,
                        h = l.z,
                        A = _.x,
                        d = _.y,
                        S = _.z,
                        m = n.x,
                        C = n.y,
                        N = n.z,
                        I = u * -m + s * -C + E * -N,
                        M = A * -m + d * -C + S * -N,
                        p = R * m + T * C + h * N;
                    return a(r)
                        ? ((r[0] = u),
                          (r[1] = A),
                          (r[2] = -R),
                          (r[3] = 0),
                          (r[4] = s),
                          (r[5] = d),
                          (r[6] = -T),
                          (r[7] = 0),
                          (r[8] = E),
                          (r[9] = S),
                          (r[10] = -h),
                          (r[11] = 0),
                          (r[12] = I),
                          (r[13] = M),
                          (r[14] = p),
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
                              M,
                              -R,
                              -T,
                              -h,
                              p,
                              0,
                              0,
                              0,
                              1,
                          );
                }),
                    (c.computePerspectiveFieldOfView = function (
                        e,
                        t,
                        r,
                        n,
                        a,
                    ) {
                        var o = Math.tan(0.5 * e),
                            i = 1 / o,
                            u = i / t,
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
                        e,
                        t,
                        r,
                        n,
                        a,
                        o,
                        i,
                    ) {
                        var u = 1 / (t - e),
                            s = 1 / (n - r),
                            E = 1 / (o - a),
                            c = -(t + e) * u,
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
                        e,
                        t,
                        r,
                        n,
                        a,
                        o,
                        i,
                    ) {
                        var u = (2 * a) / (t - e),
                            s = (2 * a) / (n - r),
                            E = (t + e) / (t - e),
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
                        e,
                        t,
                        r,
                        n,
                        a,
                        o,
                    ) {
                        var i = (2 * a) / (t - e),
                            u = (2 * a) / (n - r),
                            s = (t + e) / (t - e),
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
                    (c.computeViewportTransformation = function (e, t, r, a) {
                        e = n(e, n.EMPTY_OBJECT);
                        var o = n(e.x, 0),
                            i = n(e.y, 0),
                            u = n(e.width, 0),
                            s = n(e.height, 0);
                        (t = n(t, 0)), (r = n(r, 1));
                        var E = 0.5 * u,
                            c = 0.5 * s,
                            l = 0.5 * (r - t),
                            f = E,
                            _ = c,
                            R = l,
                            T = o + E,
                            h = i + c,
                            A = t + l;
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
                            (a[12] = T),
                            (a[13] = h),
                            (a[14] = A),
                            (a[15] = 1),
                            a
                        );
                    }),
                    (c.computeView = function (t, r, n, a, o) {
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
                            (o[12] = -e.dot(a, t)),
                            (o[13] = -e.dot(n, t)),
                            (o[14] = e.dot(r, t)),
                            (o[15] = 1),
                            o
                        );
                    }),
                    (c.toArray = function (e, t) {
                        return a(t)
                            ? ((t[0] = e[0]),
                              (t[1] = e[1]),
                              (t[2] = e[2]),
                              (t[3] = e[3]),
                              (t[4] = e[4]),
                              (t[5] = e[5]),
                              (t[6] = e[6]),
                              (t[7] = e[7]),
                              (t[8] = e[8]),
                              (t[9] = e[9]),
                              (t[10] = e[10]),
                              (t[11] = e[11]),
                              (t[12] = e[12]),
                              (t[13] = e[13]),
                              (t[14] = e[14]),
                              (t[15] = e[15]),
                              t)
                            : [
                                  e[0],
                                  e[1],
                                  e[2],
                                  e[3],
                                  e[4],
                                  e[5],
                                  e[6],
                                  e[7],
                                  e[8],
                                  e[9],
                                  e[10],
                                  e[11],
                                  e[12],
                                  e[13],
                                  e[14],
                                  e[15],
                              ];
                    }),
                    (c.getElementIndex = function (e, t) {
                        return 4 * e + t;
                    }),
                    (c.getColumn = function (e, t, r) {
                        var n = 4 * t,
                            a = e[n],
                            o = e[n + 1],
                            i = e[n + 2],
                            u = e[n + 3];
                        return (r.x = a), (r.y = o), (r.z = i), (r.w = u), r;
                    }),
                    (c.setColumn = function (e, t, r, n) {
                        n = c.clone(e, n);
                        var a = 4 * t;
                        return (
                            (n[a] = r.x),
                            (n[a + 1] = r.y),
                            (n[a + 2] = r.z),
                            (n[a + 3] = r.w),
                            n
                        );
                    }),
                    (c.setTranslation = function (e, t, r) {
                        return (
                            (r[0] = e[0]),
                            (r[1] = e[1]),
                            (r[2] = e[2]),
                            (r[3] = e[3]),
                            (r[4] = e[4]),
                            (r[5] = e[5]),
                            (r[6] = e[6]),
                            (r[7] = e[7]),
                            (r[8] = e[8]),
                            (r[9] = e[9]),
                            (r[10] = e[10]),
                            (r[11] = e[11]),
                            (r[12] = t.x),
                            (r[13] = t.y),
                            (r[14] = t.z),
                            (r[15] = e[15]),
                            r
                        );
                    }),
                    (c.getRow = function (e, t, r) {
                        var n = e[t],
                            a = e[t + 4],
                            o = e[t + 8],
                            i = e[t + 12];
                        return (r.x = n), (r.y = a), (r.z = o), (r.w = i), r;
                    }),
                    (c.setRow = function (e, t, r, n) {
                        return (
                            (n = c.clone(e, n)),
                            (n[t] = r.x),
                            (n[t + 4] = r.y),
                            (n[t + 8] = r.z),
                            (n[t + 12] = r.w),
                            n
                        );
                    });
                var R = new e();
                c.getScale = function (t, r) {
                    return (
                        (r.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], R),
                        )),
                        (r.y = e.magnitude(
                            e.fromElements(t[4], t[5], t[6], R),
                        )),
                        (r.z = e.magnitude(
                            e.fromElements(t[8], t[9], t[10], R),
                        )),
                        r
                    );
                };
                var T = new e();
                (c.getMaximumScale = function (t) {
                    return c.getScale(t, T), e.maximumComponent(T);
                }),
                    (c.multiply = function (e, t, r) {
                        var n = e[0],
                            a = e[1],
                            o = e[2],
                            i = e[3],
                            u = e[4],
                            s = e[5],
                            E = e[6],
                            c = e[7],
                            l = e[8],
                            f = e[9],
                            _ = e[10],
                            R = e[11],
                            T = e[12],
                            h = e[13],
                            A = e[14],
                            d = e[15],
                            S = t[0],
                            m = t[1],
                            C = t[2],
                            N = t[3],
                            I = t[4],
                            M = t[5],
                            p = t[6],
                            O = t[7],
                            g = t[8],
                            y = t[9],
                            F = t[10],
                            L = t[11],
                            U = t[12],
                            v = t[13],
                            D = t[14],
                            P = t[15],
                            B = n * S + u * m + l * C + T * N,
                            w = a * S + s * m + f * C + h * N,
                            x = o * S + E * m + _ * C + A * N,
                            G = i * S + c * m + R * C + d * N,
                            b = n * I + u * M + l * p + T * O,
                            z = a * I + s * M + f * p + h * O,
                            H = o * I + E * M + _ * p + A * O,
                            V = i * I + c * M + R * p + d * O,
                            X = n * g + u * y + l * F + T * L,
                            q = a * g + s * y + f * F + h * L,
                            W = o * g + E * y + _ * F + A * L,
                            Y = i * g + c * y + R * F + d * L,
                            K = n * U + u * v + l * D + T * P,
                            k = a * U + s * v + f * D + h * P,
                            Z = o * U + E * v + _ * D + A * P,
                            j = i * U + c * v + R * D + d * P;
                        return (
                            (r[0] = B),
                            (r[1] = w),
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
                    (c.add = function (e, t, r) {
                        return (
                            (r[0] = e[0] + t[0]),
                            (r[1] = e[1] + t[1]),
                            (r[2] = e[2] + t[2]),
                            (r[3] = e[3] + t[3]),
                            (r[4] = e[4] + t[4]),
                            (r[5] = e[5] + t[5]),
                            (r[6] = e[6] + t[6]),
                            (r[7] = e[7] + t[7]),
                            (r[8] = e[8] + t[8]),
                            (r[9] = e[9] + t[9]),
                            (r[10] = e[10] + t[10]),
                            (r[11] = e[11] + t[11]),
                            (r[12] = e[12] + t[12]),
                            (r[13] = e[13] + t[13]),
                            (r[14] = e[14] + t[14]),
                            (r[15] = e[15] + t[15]),
                            r
                        );
                    }),
                    (c.subtract = function (e, t, r) {
                        return (
                            (r[0] = e[0] - t[0]),
                            (r[1] = e[1] - t[1]),
                            (r[2] = e[2] - t[2]),
                            (r[3] = e[3] - t[3]),
                            (r[4] = e[4] - t[4]),
                            (r[5] = e[5] - t[5]),
                            (r[6] = e[6] - t[6]),
                            (r[7] = e[7] - t[7]),
                            (r[8] = e[8] - t[8]),
                            (r[9] = e[9] - t[9]),
                            (r[10] = e[10] - t[10]),
                            (r[11] = e[11] - t[11]),
                            (r[12] = e[12] - t[12]),
                            (r[13] = e[13] - t[13]),
                            (r[14] = e[14] - t[14]),
                            (r[15] = e[15] - t[15]),
                            r
                        );
                    }),
                    (c.multiplyTransformation = function (e, t, r) {
                        var n = e[0],
                            a = e[1],
                            o = e[2],
                            i = e[4],
                            u = e[5],
                            s = e[6],
                            E = e[8],
                            c = e[9],
                            l = e[10],
                            f = e[12],
                            _ = e[13],
                            R = e[14],
                            T = t[0],
                            h = t[1],
                            A = t[2],
                            d = t[4],
                            S = t[5],
                            m = t[6],
                            C = t[8],
                            N = t[9],
                            I = t[10],
                            M = t[12],
                            p = t[13],
                            O = t[14],
                            g = n * T + i * h + E * A,
                            y = a * T + u * h + c * A,
                            F = o * T + s * h + l * A,
                            L = n * d + i * S + E * m,
                            U = a * d + u * S + c * m,
                            v = o * d + s * S + l * m,
                            D = n * C + i * N + E * I,
                            P = a * C + u * N + c * I,
                            B = o * C + s * N + l * I,
                            w = n * M + i * p + E * O + f,
                            x = a * M + u * p + c * O + _,
                            G = o * M + s * p + l * O + R;
                        return (
                            (r[0] = g),
                            (r[1] = y),
                            (r[2] = F),
                            (r[3] = 0),
                            (r[4] = L),
                            (r[5] = U),
                            (r[6] = v),
                            (r[7] = 0),
                            (r[8] = D),
                            (r[9] = P),
                            (r[10] = B),
                            (r[11] = 0),
                            (r[12] = w),
                            (r[13] = x),
                            (r[14] = G),
                            (r[15] = 1),
                            r
                        );
                    }),
                    (c.multiplyByMatrix3 = function (e, t, r) {
                        var n = e[0],
                            a = e[1],
                            o = e[2],
                            i = e[4],
                            u = e[5],
                            s = e[6],
                            E = e[8],
                            c = e[9],
                            l = e[10],
                            f = t[0],
                            _ = t[1],
                            R = t[2],
                            T = t[3],
                            h = t[4],
                            A = t[5],
                            d = t[6],
                            S = t[7],
                            m = t[8],
                            C = n * f + i * _ + E * R,
                            N = a * f + u * _ + c * R,
                            I = o * f + s * _ + l * R,
                            M = n * T + i * h + E * A,
                            p = a * T + u * h + c * A,
                            O = o * T + s * h + l * A,
                            g = n * d + i * S + E * m,
                            y = a * d + u * S + c * m,
                            F = o * d + s * S + l * m;
                        return (
                            (r[0] = C),
                            (r[1] = N),
                            (r[2] = I),
                            (r[3] = 0),
                            (r[4] = M),
                            (r[5] = p),
                            (r[6] = O),
                            (r[7] = 0),
                            (r[8] = g),
                            (r[9] = y),
                            (r[10] = F),
                            (r[11] = 0),
                            (r[12] = e[12]),
                            (r[13] = e[13]),
                            (r[14] = e[14]),
                            (r[15] = e[15]),
                            r
                        );
                    }),
                    (c.multiplyByTranslation = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            o = t.z,
                            i = n * e[0] + a * e[4] + o * e[8] + e[12],
                            u = n * e[1] + a * e[5] + o * e[9] + e[13],
                            s = n * e[2] + a * e[6] + o * e[10] + e[14];
                        return (
                            (r[0] = e[0]),
                            (r[1] = e[1]),
                            (r[2] = e[2]),
                            (r[3] = e[3]),
                            (r[4] = e[4]),
                            (r[5] = e[5]),
                            (r[6] = e[6]),
                            (r[7] = e[7]),
                            (r[8] = e[8]),
                            (r[9] = e[9]),
                            (r[10] = e[10]),
                            (r[11] = e[11]),
                            (r[12] = i),
                            (r[13] = u),
                            (r[14] = s),
                            (r[15] = e[15]),
                            r
                        );
                    });
                var h = new e();
                (c.multiplyByUniformScale = function (e, t, r) {
                    return (
                        (h.x = t),
                        (h.y = t),
                        (h.z = t),
                        c.multiplyByScale(e, h, r)
                    );
                }),
                    (c.multiplyByScale = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            o = t.z;
                        return 1 === n && 1 === a && 1 === o
                            ? c.clone(e, r)
                            : ((r[0] = n * e[0]),
                              (r[1] = n * e[1]),
                              (r[2] = n * e[2]),
                              (r[3] = 0),
                              (r[4] = a * e[4]),
                              (r[5] = a * e[5]),
                              (r[6] = a * e[6]),
                              (r[7] = 0),
                              (r[8] = o * e[8]),
                              (r[9] = o * e[9]),
                              (r[10] = o * e[10]),
                              (r[11] = 0),
                              (r[12] = e[12]),
                              (r[13] = e[13]),
                              (r[14] = e[14]),
                              (r[15] = 1),
                              r);
                    }),
                    (c.multiplyByVector = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            o = t.z,
                            i = t.w,
                            u = e[0] * n + e[4] * a + e[8] * o + e[12] * i,
                            s = e[1] * n + e[5] * a + e[9] * o + e[13] * i,
                            E = e[2] * n + e[6] * a + e[10] * o + e[14] * i,
                            c = e[3] * n + e[7] * a + e[11] * o + e[15] * i;
                        return (r.x = u), (r.y = s), (r.z = E), (r.w = c), r;
                    }),
                    (c.multiplyByPointAsVector = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            o = t.z,
                            i = e[0] * n + e[4] * a + e[8] * o,
                            u = e[1] * n + e[5] * a + e[9] * o,
                            s = e[2] * n + e[6] * a + e[10] * o;
                        return (r.x = i), (r.y = u), (r.z = s), r;
                    }),
                    (c.multiplyByPoint = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            o = t.z,
                            i = e[0] * n + e[4] * a + e[8] * o + e[12],
                            u = e[1] * n + e[5] * a + e[9] * o + e[13],
                            s = e[2] * n + e[6] * a + e[10] * o + e[14];
                        return (r.x = i), (r.y = u), (r.z = s), r;
                    }),
                    (c.multiplyByScalar = function (e, t, r) {
                        return (
                            (r[0] = e[0] * t),
                            (r[1] = e[1] * t),
                            (r[2] = e[2] * t),
                            (r[3] = e[3] * t),
                            (r[4] = e[4] * t),
                            (r[5] = e[5] * t),
                            (r[6] = e[6] * t),
                            (r[7] = e[7] * t),
                            (r[8] = e[8] * t),
                            (r[9] = e[9] * t),
                            (r[10] = e[10] * t),
                            (r[11] = e[11] * t),
                            (r[12] = e[12] * t),
                            (r[13] = e[13] * t),
                            (r[14] = e[14] * t),
                            (r[15] = e[15] * t),
                            r
                        );
                    }),
                    (c.negate = function (e, t) {
                        return (
                            (t[0] = -e[0]),
                            (t[1] = -e[1]),
                            (t[2] = -e[2]),
                            (t[3] = -e[3]),
                            (t[4] = -e[4]),
                            (t[5] = -e[5]),
                            (t[6] = -e[6]),
                            (t[7] = -e[7]),
                            (t[8] = -e[8]),
                            (t[9] = -e[9]),
                            (t[10] = -e[10]),
                            (t[11] = -e[11]),
                            (t[12] = -e[12]),
                            (t[13] = -e[13]),
                            (t[14] = -e[14]),
                            (t[15] = -e[15]),
                            t
                        );
                    }),
                    (c.transpose = function (e, t) {
                        var r = e[1],
                            n = e[2],
                            a = e[3],
                            o = e[6],
                            i = e[7],
                            u = e[11];
                        return (
                            (t[0] = e[0]),
                            (t[1] = e[4]),
                            (t[2] = e[8]),
                            (t[3] = e[12]),
                            (t[4] = r),
                            (t[5] = e[5]),
                            (t[6] = e[9]),
                            (t[7] = e[13]),
                            (t[8] = n),
                            (t[9] = o),
                            (t[10] = e[10]),
                            (t[11] = e[14]),
                            (t[12] = a),
                            (t[13] = i),
                            (t[14] = u),
                            (t[15] = e[15]),
                            t
                        );
                    }),
                    (c.abs = function (e, t) {
                        return (
                            (t[0] = Math.abs(e[0])),
                            (t[1] = Math.abs(e[1])),
                            (t[2] = Math.abs(e[2])),
                            (t[3] = Math.abs(e[3])),
                            (t[4] = Math.abs(e[4])),
                            (t[5] = Math.abs(e[5])),
                            (t[6] = Math.abs(e[6])),
                            (t[7] = Math.abs(e[7])),
                            (t[8] = Math.abs(e[8])),
                            (t[9] = Math.abs(e[9])),
                            (t[10] = Math.abs(e[10])),
                            (t[11] = Math.abs(e[11])),
                            (t[12] = Math.abs(e[12])),
                            (t[13] = Math.abs(e[13])),
                            (t[14] = Math.abs(e[14])),
                            (t[15] = Math.abs(e[15])),
                            t
                        );
                    }),
                    (c.equals = function (e, t) {
                        return (
                            e === t ||
                            (a(e) &&
                                a(t) &&
                                e[12] === t[12] &&
                                e[13] === t[13] &&
                                e[14] === t[14] &&
                                e[0] === t[0] &&
                                e[1] === t[1] &&
                                e[2] === t[2] &&
                                e[4] === t[4] &&
                                e[5] === t[5] &&
                                e[6] === t[6] &&
                                e[8] === t[8] &&
                                e[9] === t[9] &&
                                e[10] === t[10] &&
                                e[3] === t[3] &&
                                e[7] === t[7] &&
                                e[11] === t[11] &&
                                e[15] === t[15])
                        );
                    }),
                    (c.equalsEpsilon = function (e, t, r) {
                        return (
                            e === t ||
                            (a(e) &&
                                a(t) &&
                                Math.abs(e[0] - t[0]) <= r &&
                                Math.abs(e[1] - t[1]) <= r &&
                                Math.abs(e[2] - t[2]) <= r &&
                                Math.abs(e[3] - t[3]) <= r &&
                                Math.abs(e[4] - t[4]) <= r &&
                                Math.abs(e[5] - t[5]) <= r &&
                                Math.abs(e[6] - t[6]) <= r &&
                                Math.abs(e[7] - t[7]) <= r &&
                                Math.abs(e[8] - t[8]) <= r &&
                                Math.abs(e[9] - t[9]) <= r &&
                                Math.abs(e[10] - t[10]) <= r &&
                                Math.abs(e[11] - t[11]) <= r &&
                                Math.abs(e[12] - t[12]) <= r &&
                                Math.abs(e[13] - t[13]) <= r &&
                                Math.abs(e[14] - t[14]) <= r &&
                                Math.abs(e[15] - t[15]) <= r)
                        );
                    }),
                    (c.getTranslation = function (e, t) {
                        return (t.x = e[12]), (t.y = e[13]), (t.z = e[14]), t;
                    }),
                    (c.getRotation = function (e, t) {
                        return (
                            (t[0] = e[0]),
                            (t[1] = e[1]),
                            (t[2] = e[2]),
                            (t[3] = e[4]),
                            (t[4] = e[5]),
                            (t[5] = e[6]),
                            (t[6] = e[8]),
                            (t[7] = e[9]),
                            (t[8] = e[10]),
                            t
                        );
                    });
                var A = new s(),
                    d = new s(),
                    S = new t(),
                    m = new t(0, 0, 0, 1);
                return (
                    (c.inverse = function (e, r) {
                        if (
                            s.equalsEpsilon(
                                c.getRotation(e, A),
                                d,
                                u.EPSILON7,
                            ) &&
                            t.equals(c.getRow(e, 3, S), m)
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
                                (r[12] = -e[12]),
                                (r[13] = -e[13]),
                                (r[14] = -e[14]),
                                (r[15] = 1),
                                r
                            );
                        var n = e[0],
                            a = e[4],
                            o = e[8],
                            i = e[12],
                            l = e[1],
                            f = e[5],
                            _ = e[9],
                            R = e[13],
                            T = e[2],
                            h = e[6],
                            C = e[10],
                            N = e[14],
                            I = e[3],
                            M = e[7],
                            p = e[11],
                            O = e[15],
                            g = C * O,
                            y = N * p,
                            F = h * O,
                            L = N * M,
                            U = h * p,
                            v = C * M,
                            D = T * O,
                            P = N * I,
                            B = T * p,
                            w = C * I,
                            x = T * M,
                            G = h * I,
                            b = g * f + L * _ + U * R - (y * f + F * _ + v * R),
                            z = y * l + D * _ + w * R - (g * l + P * _ + B * R),
                            H = F * l + P * f + x * R - (L * l + D * f + G * R),
                            V = v * l + B * f + G * _ - (U * l + w * f + x * _),
                            X = y * a + F * o + v * i - (g * a + L * o + U * i),
                            q = g * n + P * o + B * i - (y * n + D * o + w * i),
                            W = L * n + D * a + G * i - (F * n + P * a + x * i),
                            Y = U * n + w * a + x * o - (v * n + B * a + G * o);
                        (g = o * R),
                            (y = i * _),
                            (F = a * R),
                            (L = i * f),
                            (U = a * _),
                            (v = o * f),
                            (D = n * R),
                            (P = i * l),
                            (B = n * _),
                            (w = o * l),
                            (x = n * f),
                            (G = a * l);
                        var K = g * M + L * p + U * O - (y * M + F * p + v * O),
                            k = y * I + D * p + w * O - (g * I + P * p + B * O),
                            Z = F * I + P * M + x * O - (L * I + D * M + G * O),
                            j = v * I + B * M + G * p - (U * I + w * M + x * p),
                            Q = F * C + v * N + y * h - (U * N + g * h + L * C),
                            J = B * N + g * T + P * C - (D * C + w * N + y * T),
                            $ = D * h + G * N + L * T - (x * N + F * T + P * h),
                            ee =
                                x * C + U * T + w * h - (B * h + G * C + v * T),
                            te = n * b + a * z + o * H + i * V;
                        if (Math.abs(te) < u.EPSILON20)
                            throw new E(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (te = 1 / te),
                            (r[0] = b * te),
                            (r[1] = z * te),
                            (r[2] = H * te),
                            (r[3] = V * te),
                            (r[4] = X * te),
                            (r[5] = q * te),
                            (r[6] = W * te),
                            (r[7] = Y * te),
                            (r[8] = K * te),
                            (r[9] = k * te),
                            (r[10] = Z * te),
                            (r[11] = j * te),
                            (r[12] = Q * te),
                            (r[13] = J * te),
                            (r[14] = $ * te),
                            (r[15] = ee * te),
                            r
                        );
                    }),
                    (c.inverseTransformation = function (e, t) {
                        var r = e[0],
                            n = e[1],
                            a = e[2],
                            o = e[4],
                            i = e[5],
                            u = e[6],
                            s = e[8],
                            E = e[9],
                            c = e[10],
                            l = e[12],
                            f = e[13],
                            _ = e[14],
                            R = -r * l - n * f - a * _,
                            T = -o * l - i * f - u * _,
                            h = -s * l - E * f - c * _;
                        return (
                            (t[0] = r),
                            (t[1] = o),
                            (t[2] = s),
                            (t[3] = 0),
                            (t[4] = n),
                            (t[5] = i),
                            (t[6] = E),
                            (t[7] = 0),
                            (t[8] = a),
                            (t[9] = u),
                            (t[10] = c),
                            (t[11] = 0),
                            (t[12] = R),
                            (t[13] = T),
                            (t[14] = h),
                            (t[15] = 1),
                            t
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
                    (c.prototype.clone = function (e) {
                        return c.clone(this, e);
                    }),
                    (c.prototype.equals = function (e) {
                        return c.equals(this, e);
                    }),
                    (c.equalsArray = function (e, t, r) {
                        return (
                            e[0] === t[r] &&
                            e[1] === t[r + 1] &&
                            e[2] === t[r + 2] &&
                            e[3] === t[r + 3] &&
                            e[4] === t[r + 4] &&
                            e[5] === t[r + 5] &&
                            e[6] === t[r + 6] &&
                            e[7] === t[r + 7] &&
                            e[8] === t[r + 8] &&
                            e[9] === t[r + 9] &&
                            e[10] === t[r + 10] &&
                            e[11] === t[r + 11] &&
                            e[12] === t[r + 12] &&
                            e[13] === t[r + 13] &&
                            e[14] === t[r + 14] &&
                            e[15] === t[r + 15]
                        );
                    }),
                    (c.prototype.equalsEpsilon = function (e, t) {
                        return c.equalsEpsilon(this, e, t);
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
            function (e, t, r, n, a, o, i, u) {
                'use strict';
                function s(e, t, n, a) {
                    (this.west = r(e, 0)),
                        (this.south = r(t, 0)),
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
                    (s.pack = function (e, t, n) {
                        return (
                            (n = r(n, 0)),
                            (t[n++] = e.west),
                            (t[n++] = e.south),
                            (t[n++] = e.east),
                            (t[n] = e.north),
                            t
                        );
                    }),
                    (s.unpack = function (e, t, a) {
                        return (
                            (t = r(t, 0)),
                            n(a) || (a = new s()),
                            (a.west = e[t++]),
                            (a.south = e[t++]),
                            (a.east = e[t++]),
                            (a.north = e[t]),
                            a
                        );
                    }),
                    (s.computeWidth = function (e) {
                        var t = e.east,
                            r = e.west;
                        return t < r && (t += u.TWO_PI), t - r;
                    }),
                    (s.computeHeight = function (e) {
                        return e.north - e.south;
                    }),
                    (s.fromDegrees = function (e, t, a, o, i) {
                        return (
                            (e = u.toRadians(r(e, 0))),
                            (t = u.toRadians(r(t, 0))),
                            (a = u.toRadians(r(a, 0))),
                            (o = u.toRadians(r(o, 0))),
                            n(i)
                                ? ((i.west = e),
                                  (i.south = t),
                                  (i.east = a),
                                  (i.north = o),
                                  i)
                                : new s(e, t, a, o)
                        );
                    }),
                    (s.fromRadians = function (e, t, a, o, i) {
                        return n(i)
                            ? ((i.west = r(e, 0)),
                              (i.south = r(t, 0)),
                              (i.east = r(a, 0)),
                              (i.north = r(o, 0)),
                              i)
                            : new s(e, t, a, o);
                    }),
                    (s.fromCartographicArray = function (e, t) {
                        for (
                            var r = Number.MAX_VALUE,
                                a = -Number.MAX_VALUE,
                                o = Number.MAX_VALUE,
                                i = -Number.MAX_VALUE,
                                E = Number.MAX_VALUE,
                                c = -Number.MAX_VALUE,
                                l = 0,
                                f = e.length;
                            l < f;
                            l++
                        ) {
                            var _ = e[l];
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
                            n(t)
                                ? ((t.west = r),
                                  (t.south = E),
                                  (t.east = a),
                                  (t.north = c),
                                  t)
                                : new s(r, E, a, c)
                        );
                    }),
                    (s.fromCartesianArray = function (e, t, a) {
                        t = r(t, o.WGS84);
                        for (
                            var i = Number.MAX_VALUE,
                                E = -Number.MAX_VALUE,
                                c = Number.MAX_VALUE,
                                l = -Number.MAX_VALUE,
                                f = Number.MAX_VALUE,
                                _ = -Number.MAX_VALUE,
                                R = 0,
                                T = e.length;
                            R < T;
                            R++
                        ) {
                            var h = t.cartesianToCartographic(e[R]);
                            (i = Math.min(i, h.longitude)),
                                (E = Math.max(E, h.longitude)),
                                (f = Math.min(f, h.latitude)),
                                (_ = Math.max(_, h.latitude));
                            var A =
                                h.longitude >= 0
                                    ? h.longitude
                                    : h.longitude + u.TWO_PI;
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
                    (s.clone = function (e, t) {
                        if (n(e))
                            return n(t)
                                ? ((t.west = e.west),
                                  (t.south = e.south),
                                  (t.east = e.east),
                                  (t.north = e.north),
                                  t)
                                : new s(e.west, e.south, e.east, e.north);
                    }),
                    (s.prototype.clone = function (e) {
                        return s.clone(this, e);
                    }),
                    (s.prototype.equals = function (e) {
                        return s.equals(this, e);
                    }),
                    (s.equals = function (e, t) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                e.west === t.west &&
                                e.south === t.south &&
                                e.east === t.east &&
                                e.north === t.north)
                        );
                    }),
                    (s.prototype.equalsEpsilon = function (e, t) {
                        return (
                            n(e) &&
                            Math.abs(this.west - e.west) <= t &&
                            Math.abs(this.south - e.south) <= t &&
                            Math.abs(this.east - e.east) <= t &&
                            Math.abs(this.north - e.north) <= t
                        );
                    }),
                    (s.validate = function (e) {}),
                    (s.southwest = function (t, r) {
                        return n(r)
                            ? ((r.longitude = t.west),
                              (r.latitude = t.south),
                              (r.height = 0),
                              r)
                            : new e(t.west, t.south);
                    }),
                    (s.northwest = function (t, r) {
                        return n(r)
                            ? ((r.longitude = t.west),
                              (r.latitude = t.north),
                              (r.height = 0),
                              r)
                            : new e(t.west, t.north);
                    }),
                    (s.northeast = function (t, r) {
                        return n(r)
                            ? ((r.longitude = t.east),
                              (r.latitude = t.north),
                              (r.height = 0),
                              r)
                            : new e(t.east, t.north);
                    }),
                    (s.southeast = function (t, r) {
                        return n(r)
                            ? ((r.longitude = t.east),
                              (r.latitude = t.south),
                              (r.height = 0),
                              r)
                            : new e(t.east, t.south);
                    }),
                    (s.center = function (t, r) {
                        var a = t.east,
                            o = t.west;
                        a < o && (a += u.TWO_PI);
                        var i = u.negativePiToPi(0.5 * (o + a)),
                            s = 0.5 * (t.south + t.north);
                        return n(r)
                            ? ((r.longitude = i),
                              (r.latitude = s),
                              (r.height = 0),
                              r)
                            : new e(i, s);
                    }),
                    (s.intersection = function (e, t, r) {
                        var a = e.east,
                            o = e.west,
                            i = t.east,
                            E = t.west;
                        a < o && i > 0
                            ? (a += u.TWO_PI)
                            : i < E && a > 0 && (i += u.TWO_PI),
                            a < o && E < 0
                                ? (E += u.TWO_PI)
                                : i < E && o < 0 && (o += u.TWO_PI);
                        var c = u.negativePiToPi(Math.max(o, E)),
                            l = u.negativePiToPi(Math.min(a, i));
                        if (!((e.west < e.east || t.west < t.east) && l <= c)) {
                            var f = Math.max(e.south, t.south),
                                _ = Math.min(e.north, t.north);
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
                    (s.simpleIntersection = function (e, t, r) {
                        var a = Math.max(e.west, t.west),
                            o = Math.max(e.south, t.south),
                            i = Math.min(e.east, t.east),
                            u = Math.min(e.north, t.north);
                        if (!(o >= u || a >= i))
                            return n(r)
                                ? ((r.west = a),
                                  (r.south = o),
                                  (r.east = i),
                                  (r.north = u),
                                  r)
                                : new s(a, o, i, u);
                    }),
                    (s.union = function (e, t, r) {
                        n(r) || (r = new s());
                        var a = e.east,
                            o = e.west,
                            i = t.east,
                            E = t.west;
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
                            (r.south = Math.min(e.south, t.south)),
                            (r.east = l),
                            (r.north = Math.max(e.north, t.north)),
                            r
                        );
                    }),
                    (s.expand = function (e, t, r) {
                        return (
                            n(r) || (r = new s()),
                            (r.west = Math.min(e.west, t.longitude)),
                            (r.south = Math.min(e.south, t.latitude)),
                            (r.east = Math.max(e.east, t.longitude)),
                            (r.north = Math.max(e.north, t.latitude)),
                            r
                        );
                    }),
                    (s.contains = function (e, t) {
                        var r = t.longitude,
                            n = t.latitude,
                            a = e.west,
                            o = e.east;
                        return (
                            o < a &&
                                ((o += u.TWO_PI), r < 0 && (r += u.TWO_PI)),
                            (r > a || u.equalsEpsilon(r, a, u.EPSILON14)) &&
                                (r < o || u.equalsEpsilon(r, o, u.EPSILON14)) &&
                                n >= e.south &&
                                n <= e.north
                        );
                    });
                var E = new e();
                return (
                    (s.subsample = function (e, t, a, i) {
                        (t = r(t, o.WGS84)), (a = r(a, 0)), n(i) || (i = []);
                        var c = 0,
                            l = e.north,
                            f = e.south,
                            _ = e.east,
                            R = e.west,
                            T = E;
                        (T.height = a),
                            (T.longitude = R),
                            (T.latitude = l),
                            (i[c] = t.cartographicToCartesian(T, i[c])),
                            c++,
                            (T.longitude = _),
                            (i[c] = t.cartographicToCartesian(T, i[c])),
                            c++,
                            (T.latitude = f),
                            (i[c] = t.cartographicToCartesian(T, i[c])),
                            c++,
                            (T.longitude = R),
                            (i[c] = t.cartographicToCartesian(T, i[c])),
                            c++,
                            (T.latitude = l < 0 ? l : f > 0 ? f : 0);
                        for (var h = 1; h < 8; ++h)
                            (T.longitude = -Math.PI + h * u.PI_OVER_TWO),
                                s.contains(e, T) &&
                                    ((i[c] = t.cartographicToCartesian(
                                        T,
                                        i[c],
                                    )),
                                    c++);
                        return (
                            0 === T.latitude &&
                                ((T.longitude = R),
                                (i[c] = t.cartographicToCartesian(T, i[c])),
                                c++,
                                (T.longitude = _),
                                (i[c] = t.cartographicToCartesian(T, i[c])),
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
            function (e, t, r, n, a, o, i, u, s, E, c, l) {
                'use strict';
                function f(t, r) {
                    (this.center = e.clone(n(t, e.ZERO))),
                        (this.radius = n(r, 0));
                }
                var _ = new e(),
                    R = new e(),
                    T = new e(),
                    h = new e(),
                    A = new e(),
                    d = new e(),
                    S = new e(),
                    m = new e(),
                    C = new e(),
                    N = new e(),
                    I = new e(),
                    M = new e();
                f.fromPoints = function (t, r) {
                    if ((a(r) || (r = new f()), !a(t) || 0 === t.length))
                        return (
                            (r.center = e.clone(e.ZERO, r.center)),
                            (r.radius = 0),
                            r
                        );
                    var n,
                        o = e.clone(t[0], S),
                        i = e.clone(o, _),
                        u = e.clone(o, R),
                        s = e.clone(o, T),
                        E = e.clone(o, h),
                        c = e.clone(o, A),
                        l = e.clone(o, d),
                        p = t.length;
                    for (n = 1; n < p; n++) {
                        e.clone(t[n], o);
                        var O = o.x,
                            g = o.y,
                            y = o.z;
                        O < i.x && e.clone(o, i),
                            O > E.x && e.clone(o, E),
                            g < u.y && e.clone(o, u),
                            g > c.y && e.clone(o, c),
                            y < s.z && e.clone(o, s),
                            y > l.z && e.clone(o, l);
                    }
                    var F = e.magnitudeSquared(e.subtract(E, i, m)),
                        L = e.magnitudeSquared(e.subtract(c, u, m)),
                        U = e.magnitudeSquared(e.subtract(l, s, m)),
                        v = i,
                        D = E,
                        P = F;
                    L > P && ((P = L), (v = u), (D = c)),
                        U > P && ((P = U), (v = s), (D = l));
                    var B = C;
                    (B.x = 0.5 * (v.x + D.x)),
                        (B.y = 0.5 * (v.y + D.y)),
                        (B.z = 0.5 * (v.z + D.z));
                    var w = e.magnitudeSquared(e.subtract(D, B, m)),
                        x = Math.sqrt(w),
                        G = N;
                    (G.x = i.x), (G.y = u.y), (G.z = s.z);
                    var b = I;
                    (b.x = E.x), (b.y = c.y), (b.z = l.z);
                    var z = e.multiplyByScalar(e.add(G, b, m), 0.5, M),
                        H = 0;
                    for (n = 0; n < p; n++) {
                        e.clone(t[n], o);
                        var V = e.magnitude(e.subtract(o, z, m));
                        V > H && (H = V);
                        var X = e.magnitudeSquared(e.subtract(o, B, m));
                        if (X > w) {
                            var q = Math.sqrt(X);
                            (x = 0.5 * (x + q)), (w = x * x);
                            var W = q - x;
                            (B.x = (x * B.x + W * o.x) / q),
                                (B.y = (x * B.y + W * o.y) / q),
                                (B.z = (x * B.z + W * o.z) / q);
                        }
                    }
                    return (
                        x < H
                            ? (e.clone(B, r.center), (r.radius = x))
                            : (e.clone(z, r.center), (r.radius = H)),
                        r
                    );
                };
                var p = new i(),
                    O = new e(),
                    g = new e(),
                    y = new t(),
                    F = new t();
                (f.fromRectangle2D = function (e, t, r) {
                    return f.fromRectangleWithHeights2D(e, t, 0, 0, r);
                }),
                    (f.fromRectangleWithHeights2D = function (t, r, o, i, u) {
                        if ((a(u) || (u = new f()), !a(t)))
                            return (
                                (u.center = e.clone(e.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (r = n(r, p)),
                            l.southwest(t, y),
                            (y.height = o),
                            l.northeast(t, F),
                            (F.height = i);
                        var s = r.project(y, O),
                            E = r.project(F, g),
                            c = E.x - s.x,
                            _ = E.y - s.y,
                            R = E.z - s.z;
                        u.radius = 0.5 * Math.sqrt(c * c + _ * _ + R * R);
                        var T = u.center;
                        return (
                            (T.x = s.x + 0.5 * c),
                            (T.y = s.y + 0.5 * _),
                            (T.z = s.z + 0.5 * R),
                            u
                        );
                    });
                var L = [];
                (f.fromRectangle3D = function (t, r, i, u) {
                    if (
                        ((r = n(r, o.WGS84)),
                        (i = n(i, 0)),
                        a(u) || (u = new f()),
                        !a(t))
                    )
                        return (
                            (u.center = e.clone(e.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var s = l.subsample(t, r, i, L);
                    return f.fromPoints(s, u);
                }),
                    (f.fromVertices = function (t, r, o, i) {
                        if ((a(i) || (i = new f()), !a(t) || 0 === t.length))
                            return (
                                (i.center = e.clone(e.ZERO, i.center)),
                                (i.radius = 0),
                                i
                            );
                        (r = n(r, e.ZERO)), (o = n(o, 3));
                        var u = S;
                        (u.x = t[0] + r.x),
                            (u.y = t[1] + r.y),
                            (u.z = t[2] + r.z);
                        var s,
                            E = e.clone(u, _),
                            c = e.clone(u, R),
                            l = e.clone(u, T),
                            p = e.clone(u, h),
                            O = e.clone(u, A),
                            g = e.clone(u, d),
                            y = t.length;
                        for (s = 0; s < y; s += o) {
                            var F = t[s] + r.x,
                                L = t[s + 1] + r.y,
                                U = t[s + 2] + r.z;
                            (u.x = F),
                                (u.y = L),
                                (u.z = U),
                                F < E.x && e.clone(u, E),
                                F > p.x && e.clone(u, p),
                                L < c.y && e.clone(u, c),
                                L > O.y && e.clone(u, O),
                                U < l.z && e.clone(u, l),
                                U > g.z && e.clone(u, g);
                        }
                        var v = e.magnitudeSquared(e.subtract(p, E, m)),
                            D = e.magnitudeSquared(e.subtract(O, c, m)),
                            P = e.magnitudeSquared(e.subtract(g, l, m)),
                            B = E,
                            w = p,
                            x = v;
                        D > x && ((x = D), (B = c), (w = O)),
                            P > x && ((x = P), (B = l), (w = g));
                        var G = C;
                        (G.x = 0.5 * (B.x + w.x)),
                            (G.y = 0.5 * (B.y + w.y)),
                            (G.z = 0.5 * (B.z + w.z));
                        var b = e.magnitudeSquared(e.subtract(w, G, m)),
                            z = Math.sqrt(b),
                            H = N;
                        (H.x = E.x), (H.y = c.y), (H.z = l.z);
                        var V = I;
                        (V.x = p.x), (V.y = O.y), (V.z = g.z);
                        var X = e.multiplyByScalar(e.add(H, V, m), 0.5, M),
                            q = 0;
                        for (s = 0; s < y; s += o) {
                            (u.x = t[s] + r.x),
                                (u.y = t[s + 1] + r.y),
                                (u.z = t[s + 2] + r.z);
                            var W = e.magnitude(e.subtract(u, X, m));
                            W > q && (q = W);
                            var Y = e.magnitudeSquared(e.subtract(u, G, m));
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
                                ? (e.clone(G, i.center), (i.radius = z))
                                : (e.clone(X, i.center), (i.radius = q)),
                            i
                        );
                    }),
                    (f.fromEncodedCartesianVertices = function (t, r, n) {
                        if (
                            (a(n) || (n = new f()),
                            !a(t) ||
                                !a(r) ||
                                t.length !== r.length ||
                                0 === t.length)
                        )
                            return (
                                (n.center = e.clone(e.ZERO, n.center)),
                                (n.radius = 0),
                                n
                            );
                        var o = S;
                        (o.x = t[0] + r[0]),
                            (o.y = t[1] + r[1]),
                            (o.z = t[2] + r[2]);
                        var i,
                            u = e.clone(o, _),
                            s = e.clone(o, R),
                            E = e.clone(o, T),
                            c = e.clone(o, h),
                            l = e.clone(o, A),
                            p = e.clone(o, d),
                            O = t.length;
                        for (i = 0; i < O; i += 3) {
                            var g = t[i] + r[i],
                                y = t[i + 1] + r[i + 1],
                                F = t[i + 2] + r[i + 2];
                            (o.x = g),
                                (o.y = y),
                                (o.z = F),
                                g < u.x && e.clone(o, u),
                                g > c.x && e.clone(o, c),
                                y < s.y && e.clone(o, s),
                                y > l.y && e.clone(o, l),
                                F < E.z && e.clone(o, E),
                                F > p.z && e.clone(o, p);
                        }
                        var L = e.magnitudeSquared(e.subtract(c, u, m)),
                            U = e.magnitudeSquared(e.subtract(l, s, m)),
                            v = e.magnitudeSquared(e.subtract(p, E, m)),
                            D = u,
                            P = c,
                            B = L;
                        U > B && ((B = U), (D = s), (P = l)),
                            v > B && ((B = v), (D = E), (P = p));
                        var w = C;
                        (w.x = 0.5 * (D.x + P.x)),
                            (w.y = 0.5 * (D.y + P.y)),
                            (w.z = 0.5 * (D.z + P.z));
                        var x = e.magnitudeSquared(e.subtract(P, w, m)),
                            G = Math.sqrt(x),
                            b = N;
                        (b.x = u.x), (b.y = s.y), (b.z = E.z);
                        var z = I;
                        (z.x = c.x), (z.y = l.y), (z.z = p.z);
                        var H = e.multiplyByScalar(e.add(b, z, m), 0.5, M),
                            V = 0;
                        for (i = 0; i < O; i += 3) {
                            (o.x = t[i] + r[i]),
                                (o.y = t[i + 1] + r[i + 1]),
                                (o.z = t[i + 2] + r[i + 2]);
                            var X = e.magnitude(e.subtract(o, H, m));
                            X > V && (V = X);
                            var q = e.magnitudeSquared(e.subtract(o, w, m));
                            if (q > x) {
                                var W = Math.sqrt(q);
                                (G = 0.5 * (G + W)), (x = G * G);
                                var Y = W - G;
                                (w.x = (G * w.x + Y * o.x) / W),
                                    (w.y = (G * w.y + Y * o.y) / W),
                                    (w.z = (G * w.z + Y * o.z) / W);
                            }
                        }
                        return (
                            G < V
                                ? (e.clone(w, n.center), (n.radius = G))
                                : (e.clone(H, n.center), (n.radius = V)),
                            n
                        );
                    }),
                    (f.fromCornerPoints = function (t, r, n) {
                        a(n) || (n = new f());
                        var o = n.center;
                        return (
                            e.add(t, r, o),
                            e.multiplyByScalar(o, 0.5, o),
                            (n.radius = e.distance(o, r)),
                            n
                        );
                    }),
                    (f.fromEllipsoid = function (t, r) {
                        return (
                            a(r) || (r = new f()),
                            e.clone(e.ZERO, r.center),
                            (r.radius = t.maximumRadius),
                            r
                        );
                    });
                var U = new e();
                f.fromBoundingSpheres = function (t, r) {
                    if ((a(r) || (r = new f()), !a(t) || 0 === t.length))
                        return (
                            (r.center = e.clone(e.ZERO, r.center)),
                            (r.radius = 0),
                            r
                        );
                    var n = t.length;
                    if (1 === n) return f.clone(t[0], r);
                    if (2 === n) return f.union(t[0], t[1], r);
                    var o,
                        i = [];
                    for (o = 0; o < n; o++) i.push(t[o].center);
                    r = f.fromPoints(i, r);
                    var u = r.center,
                        s = r.radius;
                    for (o = 0; o < n; o++) {
                        var E = t[o];
                        s = Math.max(s, e.distance(u, E.center, U) + E.radius);
                    }
                    return (r.radius = s), r;
                };
                var v = new e(),
                    D = new e(),
                    P = new e();
                (f.fromOrientedBoundingBox = function (t, r) {
                    a(r) || (r = new f());
                    var n = t.halfAxes,
                        o = E.getColumn(n, 0, v),
                        i = E.getColumn(n, 1, D),
                        u = E.getColumn(n, 2, P);
                    return (
                        e.add(o, i, o),
                        e.add(o, u, o),
                        (r.center = e.clone(t.center, r.center)),
                        (r.radius = e.magnitude(o)),
                        r
                    );
                }),
                    (f.clone = function (t, r) {
                        if (a(t))
                            return a(r)
                                ? ((r.center = e.clone(t.center, r.center)),
                                  (r.radius = t.radius),
                                  r)
                                : new f(t.center, t.radius);
                    }),
                    (f.packedLength = 4),
                    (f.pack = function (e, t, r) {
                        r = n(r, 0);
                        var a = e.center;
                        return (
                            (t[r++] = a.x),
                            (t[r++] = a.y),
                            (t[r++] = a.z),
                            (t[r] = e.radius),
                            t
                        );
                    }),
                    (f.unpack = function (e, t, r) {
                        (t = n(t, 0)), a(r) || (r = new f());
                        var o = r.center;
                        return (
                            (o.x = e[t++]),
                            (o.y = e[t++]),
                            (o.z = e[t++]),
                            (r.radius = e[t]),
                            r
                        );
                    });
                var B = new e(),
                    w = new e();
                f.union = function (t, r, n) {
                    a(n) || (n = new f());
                    var o = t.center,
                        i = t.radius,
                        u = r.center,
                        s = r.radius,
                        E = e.subtract(u, o, B),
                        c = e.magnitude(E);
                    if (i >= c + s) return t.clone(n), n;
                    if (s >= c + i) return r.clone(n), n;
                    var l = 0.5 * (i + c + s),
                        _ = e.multiplyByScalar(E, (-i + l) / c, w);
                    return (
                        e.add(_, o, _), e.clone(_, n.center), (n.radius = l), n
                    );
                };
                var x = new e();
                (f.expand = function (t, r, n) {
                    n = f.clone(t, n);
                    var a = e.magnitude(e.subtract(r, n.center, x));
                    return a > n.radius && (n.radius = a), n;
                }),
                    (f.intersectPlane = function (t, r) {
                        var n = t.center,
                            a = t.radius,
                            o = r.normal,
                            i = e.dot(o, n) + r.distance;
                        return i < -a
                            ? u.OUTSIDE
                            : i < a
                              ? u.INTERSECTING
                              : u.INSIDE;
                    }),
                    (f.transform = function (e, t, r) {
                        return (
                            a(r) || (r = new f()),
                            (r.center = c.multiplyByPoint(
                                t,
                                e.center,
                                r.center,
                            )),
                            (r.radius = c.getMaximumScale(t) * e.radius),
                            r
                        );
                    });
                var G = new e();
                (f.distanceSquaredTo = function (t, r) {
                    var n = e.subtract(t.center, r, G);
                    return e.magnitudeSquared(n) - t.radius * t.radius;
                }),
                    (f.transformWithoutScale = function (e, t, r) {
                        return (
                            a(r) || (r = new f()),
                            (r.center = c.multiplyByPoint(
                                t,
                                e.center,
                                r.center,
                            )),
                            (r.radius = e.radius),
                            r
                        );
                    });
                var b = new e();
                f.computePlaneDistances = function (t, r, n, o) {
                    a(o) || (o = new s());
                    var i = e.subtract(t.center, r, b),
                        u = e.dot(n, i);
                    return (o.start = u - t.radius), (o.stop = u + t.radius), o;
                };
                for (
                    var z = new e(),
                        H = new e(),
                        V = new e(),
                        X = new e(),
                        q = new e(),
                        W = new t(),
                        Y = new Array(8),
                        K = 0;
                    K < 8;
                    ++K
                )
                    Y[K] = new e();
                var k = new i();
                return (
                    (f.projectTo2D = function (t, r, a) {
                        r = n(r, k);
                        var o = r.ellipsoid,
                            i = t.center,
                            u = t.radius,
                            s = o.geodeticSurfaceNormal(i, z),
                            E = e.cross(e.UNIT_Z, s, H);
                        e.normalize(E, E);
                        var c = e.cross(s, E, V);
                        e.normalize(c, c),
                            e.multiplyByScalar(s, u, s),
                            e.multiplyByScalar(c, u, c),
                            e.multiplyByScalar(E, u, E);
                        var l = e.negate(c, q),
                            _ = e.negate(E, X),
                            R = Y,
                            T = R[0];
                        e.add(s, c, T),
                            e.add(T, E, T),
                            (T = R[1]),
                            e.add(s, c, T),
                            e.add(T, _, T),
                            (T = R[2]),
                            e.add(s, l, T),
                            e.add(T, _, T),
                            (T = R[3]),
                            e.add(s, l, T),
                            e.add(T, E, T),
                            e.negate(s, s),
                            (T = R[4]),
                            e.add(s, c, T),
                            e.add(T, E, T),
                            (T = R[5]),
                            e.add(s, c, T),
                            e.add(T, _, T),
                            (T = R[6]),
                            e.add(s, l, T),
                            e.add(T, _, T),
                            (T = R[7]),
                            e.add(s, l, T),
                            e.add(T, E, T);
                        for (var h = R.length, A = 0; A < h; ++A) {
                            var d = R[A];
                            e.add(i, d, d);
                            var S = o.cartesianToCartographic(d, W);
                            r.project(S, d);
                        }
                        (a = f.fromPoints(R, a)), (i = a.center);
                        var m = i.x,
                            C = i.y,
                            N = i.z;
                        return (i.x = N), (i.y = m), (i.z = C), a;
                    }),
                    (f.isOccluded = function (e, t) {
                        return !t.isBoundingSphereVisible(e);
                    }),
                    (f.equals = function (t, r) {
                        return (
                            t === r ||
                            (a(t) &&
                                a(r) &&
                                e.equals(t.center, r.center) &&
                                t.radius === r.radius)
                        );
                    }),
                    (f.prototype.intersectPlane = function (e) {
                        return f.intersectPlane(this, e);
                    }),
                    (f.prototype.distanceSquaredTo = function (e) {
                        return f.distanceSquaredTo(this, e);
                    }),
                    (f.prototype.computePlaneDistances = function (e, t, r) {
                        return f.computePlaneDistances(this, e, t, r);
                    }),
                    (f.prototype.isOccluded = function (e) {
                        return f.isOccluded(this, e);
                    }),
                    (f.prototype.equals = function (e) {
                        return f.equals(this, e);
                    }),
                    (f.prototype.clone = function (e) {
                        return f.clone(this, e);
                    }),
                    f
                );
            },
        ),
        define(
            'Core/Fullscreen',
            ['./defined', './defineProperties'],
            function (e, t) {
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
                    t(a, {
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
                        if (e(r)) return r;
                        r = !1;
                        var t = document.body;
                        if ('function' == typeof t.requestFullscreen)
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
                                'function' == typeof t[a]
                                    ? ((n.requestFullscreen = a), (r = !0))
                                    : ((a = s + 'RequestFullScreen'),
                                      'function' == typeof t[a] &&
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
                    (a.requestFullscreen = function (e, t) {
                        a.supportsFullscreen() &&
                            e[n.requestFullscreen]({ vrDisplay: t });
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
            function (e, t, r) {
                'use strict';
                function n(e) {
                    for (var t = e.split('.'), r = 0, n = t.length; r < n; ++r)
                        t[r] = parseInt(t[r], 10);
                    return t;
                }
                function a() {
                    if (!t(C) && ((C = !1), !f())) {
                        var e = / Chrome\/([\.0-9]+)/.exec(m.userAgent);
                        null !== e && ((C = !0), (N = n(e[1])));
                    }
                    return C;
                }
                function o() {
                    return a() && N;
                }
                function i() {
                    if (
                        !t(I) &&
                        ((I = !1),
                        !a() && !f() && / Safari\/[\.0-9]+/.test(m.userAgent))
                    ) {
                        var e = / Version\/([\.0-9]+)/.exec(m.userAgent);
                        null !== e && ((I = !0), (M = n(e[1])));
                    }
                    return I;
                }
                function u() {
                    return i() && M;
                }
                function s() {
                    if (!t(p)) {
                        p = !1;
                        var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            m.userAgent,
                        );
                        null !== e &&
                            ((p = !0), (O = n(e[1])), (O.isNightly = !!e[2]));
                    }
                    return p;
                }
                function E() {
                    return s() && O;
                }
                function c() {
                    if (!t(g)) {
                        g = !1;
                        var e;
                        'Microsoft Internet Explorer' === m.appName
                            ? null !==
                                  (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      m.userAgent,
                                  )) && ((g = !0), (y = n(e[1])))
                            : 'Netscape' === m.appName &&
                              null !==
                                  (e =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          m.userAgent,
                                      )) &&
                              ((g = !0), (y = n(e[1])));
                    }
                    return g;
                }
                function l() {
                    return c() && y;
                }
                function f() {
                    if (!t(F)) {
                        F = !1;
                        var e = / Edge\/([\.0-9]+)/.exec(m.userAgent);
                        null !== e && ((F = !0), (L = n(e[1])));
                    }
                    return F;
                }
                function _() {
                    return f() && L;
                }
                function R() {
                    if (!t(U)) {
                        U = !1;
                        var e = /Firefox\/([\.0-9]+)/.exec(m.userAgent);
                        null !== e && ((U = !0), (v = n(e[1])));
                    }
                    return U;
                }
                function T() {
                    return t(D) || (D = /Windows/i.test(m.appVersion)), D;
                }
                function h() {
                    return R() && v;
                }
                function A() {
                    return (
                        t(P) ||
                            (P =
                                'undefined' != typeof PointerEvent &&
                                (!t(m.pointerEnabled) || m.pointerEnabled)),
                        P
                    );
                }
                function d() {
                    if (!t(w)) {
                        var e = document.createElement('canvas');
                        e.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var r = e.style.imageRendering;
                        (w = t(r) && '' !== r), w && (B = r);
                    }
                    return w;
                }
                function S() {
                    return d() ? B : void 0;
                }
                var m;
                m = 'undefined' != typeof navigator ? navigator : {};
                var C,
                    N,
                    I,
                    M,
                    p,
                    O,
                    g,
                    y,
                    F,
                    L,
                    U,
                    v,
                    D,
                    P,
                    B,
                    w,
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
                        firefoxVersion: h,
                        isWindows: T,
                        hardwareConcurrency: e(m.hardwareConcurrency, 3),
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
            function (e, t, r, n, a, o) {
                'use strict';
                function i(e, t, r) {
                    return (
                        r < 0 && (r += 1),
                        r > 1 && (r -= 1),
                        6 * r < 1
                            ? e + 6 * (t - e) * r
                            : 2 * r < 1
                              ? t
                              : 3 * r < 2
                                ? e + (t - e) * (2 / 3 - r) * 6
                                : e
                    );
                }
                function u(e, r, n, a) {
                    (this.red = t(e, 1)),
                        (this.green = t(r, 1)),
                        (this.blue = t(n, 1)),
                        (this.alpha = t(a, 1));
                }
                (u.fromCartesian4 = function (e, t) {
                    return r(t)
                        ? ((t.red = e.x),
                          (t.green = e.y),
                          (t.blue = e.z),
                          (t.alpha = e.w),
                          t)
                        : new u(e.x, e.y, e.z, e.w);
                }),
                    (u.fromBytes = function (e, n, a, o, i) {
                        return (
                            (e = u.byteToFloat(t(e, 255))),
                            (n = u.byteToFloat(t(n, 255))),
                            (a = u.byteToFloat(t(a, 255))),
                            (o = u.byteToFloat(t(o, 255))),
                            r(i)
                                ? ((i.red = e),
                                  (i.green = n),
                                  (i.blue = a),
                                  (i.alpha = o),
                                  i)
                                : new u(e, n, a, o)
                        );
                    }),
                    (u.fromAlpha = function (e, t, n) {
                        return r(n)
                            ? ((n.red = e.red),
                              (n.green = e.green),
                              (n.blue = e.blue),
                              (n.alpha = t),
                              n)
                            : new u(e.red, e.green, e.blue, t);
                    });
                var s, E, c;
                n.supportsTypedArrays() &&
                    ((s = new ArrayBuffer(4)),
                    (E = new Uint32Array(s)),
                    (c = new Uint8Array(s))),
                    (u.fromRgba = function (e, t) {
                        return (
                            (E[0] = e), u.fromBytes(c[0], c[1], c[2], c[3], t)
                        );
                    }),
                    (u.fromHsl = function (e, n, a, o, s) {
                        (e = t(e, 0) % 1),
                            (n = t(n, 0)),
                            (a = t(a, 0)),
                            (o = t(o, 1));
                        var E = a,
                            c = a,
                            l = a;
                        if (0 !== n) {
                            var f;
                            f = a < 0.5 ? a * (1 + n) : a + n - a * n;
                            var _ = 2 * a - f;
                            (E = i(_, f, e + 1 / 3)),
                                (c = i(_, f, e)),
                                (l = i(_, f, e - 1 / 3));
                        }
                        return r(s)
                            ? ((s.red = E),
                              (s.green = c),
                              (s.blue = l),
                              (s.alpha = o),
                              s)
                            : new u(E, c, l, o);
                    }),
                    (u.fromRandom = function (e, n) {
                        e = t(e, t.EMPTY_OBJECT);
                        var a = e.red;
                        if (!r(a)) {
                            var i = t(e.minimumRed, 0),
                                s = t(e.maximumRed, 1);
                            a = i + o.nextRandomNumber() * (s - i);
                        }
                        var E = e.green;
                        if (!r(E)) {
                            var c = t(e.minimumGreen, 0),
                                l = t(e.maximumGreen, 1);
                            E = c + o.nextRandomNumber() * (l - c);
                        }
                        var f = e.blue;
                        if (!r(f)) {
                            var _ = t(e.minimumBlue, 0),
                                R = t(e.maximumBlue, 1);
                            f = _ + o.nextRandomNumber() * (R - _);
                        }
                        var T = e.alpha;
                        if (!r(T)) {
                            var h = t(e.minimumAlpha, 0),
                                A = t(e.maximumAlpha, 1);
                            T = h + o.nextRandomNumber() * (A - h);
                        }
                        return r(n)
                            ? ((n.red = a),
                              (n.green = E),
                              (n.blue = f),
                              (n.alpha = T),
                              n)
                            : new u(a, E, f, T);
                    });
                var l = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i,
                    f = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
                    _ =
                        /^rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)(?:\s*,\s*([0-9.]+))?\s*\)$/i,
                    R =
                        /^hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+%)\s*,\s*([0-9.]+%)(?:\s*,\s*([0-9.]+))?\s*\)$/i;
                return (
                    (u.fromCssColorString = function (e, n) {
                        r(n) || (n = new u());
                        var a = u[e.toUpperCase()];
                        if (r(a)) return u.clone(a, n), n;
                        var o = l.exec(e);
                        return null !== o
                            ? ((n.red = parseInt(o[1], 16) / 15),
                              (n.green = parseInt(o[2], 16) / 15),
                              (n.blue = parseInt(o[3], 16) / 15),
                              (n.alpha = 1),
                              n)
                            : null !== (o = f.exec(e))
                              ? ((n.red = parseInt(o[1], 16) / 255),
                                (n.green = parseInt(o[2], 16) / 255),
                                (n.blue = parseInt(o[3], 16) / 255),
                                (n.alpha = 1),
                                n)
                              : null !== (o = _.exec(e))
                                ? ((n.red =
                                      parseFloat(o[1]) /
                                      ('%' === o[1].substr(-1) ? 100 : 255)),
                                  (n.green =
                                      parseFloat(o[2]) /
                                      ('%' === o[2].substr(-1) ? 100 : 255)),
                                  (n.blue =
                                      parseFloat(o[3]) /
                                      ('%' === o[3].substr(-1) ? 100 : 255)),
                                  (n.alpha = parseFloat(t(o[4], '1.0'))),
                                  n)
                                : null !== (o = R.exec(e))
                                  ? u.fromHsl(
                                        parseFloat(o[1]) / 360,
                                        parseFloat(o[2]) / 100,
                                        parseFloat(o[3]) / 100,
                                        parseFloat(t(o[4], '1.0')),
                                        n,
                                    )
                                  : (n = void 0);
                    }),
                    (u.packedLength = 4),
                    (u.pack = function (e, r, n) {
                        return (
                            (n = t(n, 0)),
                            (r[n++] = e.red),
                            (r[n++] = e.green),
                            (r[n++] = e.blue),
                            (r[n] = e.alpha),
                            r
                        );
                    }),
                    (u.unpack = function (e, n, a) {
                        return (
                            (n = t(n, 0)),
                            r(a) || (a = new u()),
                            (a.red = e[n++]),
                            (a.green = e[n++]),
                            (a.blue = e[n++]),
                            (a.alpha = e[n]),
                            a
                        );
                    }),
                    (u.byteToFloat = function (e) {
                        return e / 255;
                    }),
                    (u.floatToByte = function (e) {
                        return 1 === e ? 255 : (256 * e) | 0;
                    }),
                    (u.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.red = e.red),
                                  (t.green = e.green),
                                  (t.blue = e.blue),
                                  (t.alpha = e.alpha),
                                  t)
                                : new u(e.red, e.green, e.blue, e.alpha);
                    }),
                    (u.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                e.red === t.red &&
                                e.green === t.green &&
                                e.blue === t.blue &&
                                e.alpha === t.alpha)
                        );
                    }),
                    (u.equalsArray = function (e, t, r) {
                        return (
                            e.red === t[r] &&
                            e.green === t[r + 1] &&
                            e.blue === t[r + 2] &&
                            e.alpha === t[r + 3]
                        );
                    }),
                    (u.prototype.clone = function (e) {
                        return u.clone(this, e);
                    }),
                    (u.prototype.equals = function (e) {
                        return u.equals(this, e);
                    }),
                    (u.prototype.equalsEpsilon = function (e, t) {
                        return (
                            this === e ||
                            (r(e) &&
                                Math.abs(this.red - e.red) <= t &&
                                Math.abs(this.green - e.green) <= t &&
                                Math.abs(this.blue - e.blue) <= t &&
                                Math.abs(this.alpha - e.alpha) <= t)
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
                        var e = u.floatToByte(this.red),
                            t = u.floatToByte(this.green),
                            r = u.floatToByte(this.blue);
                        return 1 === this.alpha
                            ? 'rgb(' + e + ',' + t + ',' + r + ')'
                            : 'rgba(' +
                                  e +
                                  ',' +
                                  t +
                                  ',' +
                                  r +
                                  ',' +
                                  this.alpha +
                                  ')';
                    }),
                    (u.prototype.toBytes = function (e) {
                        var t = u.floatToByte(this.red),
                            n = u.floatToByte(this.green),
                            a = u.floatToByte(this.blue),
                            o = u.floatToByte(this.alpha);
                        return r(e)
                            ? ((e[0] = t),
                              (e[1] = n),
                              (e[2] = a),
                              (e[3] = o),
                              e)
                            : [t, n, a, o];
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
                    (u.prototype.brighten = function (e, t) {
                        return (
                            (e = 1 - e),
                            (t.red = 1 - (1 - this.red) * e),
                            (t.green = 1 - (1 - this.green) * e),
                            (t.blue = 1 - (1 - this.blue) * e),
                            (t.alpha = this.alpha),
                            t
                        );
                    }),
                    (u.prototype.darken = function (e, t) {
                        return (
                            (e = 1 - e),
                            (t.red = this.red * e),
                            (t.green = this.green * e),
                            (t.blue = this.blue * e),
                            (t.alpha = this.alpha),
                            t
                        );
                    }),
                    (u.prototype.withAlpha = function (e, t) {
                        return u.fromAlpha(this, e, t);
                    }),
                    (u.add = function (e, t, r) {
                        return (
                            (r.red = e.red + t.red),
                            (r.green = e.green + t.green),
                            (r.blue = e.blue + t.blue),
                            (r.alpha = e.alpha + t.alpha),
                            r
                        );
                    }),
                    (u.subtract = function (e, t, r) {
                        return (
                            (r.red = e.red - t.red),
                            (r.green = e.green - t.green),
                            (r.blue = e.blue - t.blue),
                            (r.alpha = e.alpha - t.alpha),
                            r
                        );
                    }),
                    (u.multiply = function (e, t, r) {
                        return (
                            (r.red = e.red * t.red),
                            (r.green = e.green * t.green),
                            (r.blue = e.blue * t.blue),
                            (r.alpha = e.alpha * t.alpha),
                            r
                        );
                    }),
                    (u.divide = function (e, t, r) {
                        return (
                            (r.red = e.red / t.red),
                            (r.green = e.green / t.green),
                            (r.blue = e.blue / t.blue),
                            (r.alpha = e.alpha / t.alpha),
                            r
                        );
                    }),
                    (u.mod = function (e, t, r) {
                        return (
                            (r.red = e.red % t.red),
                            (r.green = e.green % t.green),
                            (r.blue = e.blue % t.blue),
                            (r.alpha = e.alpha % t.alpha),
                            r
                        );
                    }),
                    (u.multiplyByScalar = function (e, t, r) {
                        return (
                            (r.red = e.red * t),
                            (r.green = e.green * t),
                            (r.blue = e.blue * t),
                            (r.alpha = e.alpha * t),
                            r
                        );
                    }),
                    (u.divideByScalar = function (e, t, r) {
                        return (
                            (r.red = e.red / t),
                            (r.green = e.green / t),
                            (r.blue = e.blue / t),
                            (r.alpha = e.alpha / t),
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
            'Core/ComponentDatatype',
            [
                './defaultValue',
                './defined',
                './DeveloperError',
                './FeatureDetection',
                './freezeObject',
                './WebGLConstants',
            ],
            function (e, t, r, n, a, o) {
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
                    (i.getSizeInBytes = function (e) {
                        switch (e) {
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
                    (i.fromTypedArray = function (e) {
                        return e instanceof Int8Array
                            ? i.BYTE
                            : e instanceof Uint8Array
                              ? i.UNSIGNED_BYTE
                              : e instanceof Int16Array
                                ? i.SHORT
                                : e instanceof Uint16Array
                                  ? i.UNSIGNED_SHORT
                                  : e instanceof Int32Array
                                    ? i.INT
                                    : e instanceof Uint32Array
                                      ? i.UNSIGNED_INT
                                      : e instanceof Float32Array
                                        ? i.FLOAT
                                        : e instanceof Float64Array
                                          ? i.DOUBLE
                                          : void 0;
                    }),
                    (i.validate = function (e) {
                        return (
                            t(e) &&
                            (e === i.BYTE ||
                                e === i.UNSIGNED_BYTE ||
                                e === i.SHORT ||
                                e === i.UNSIGNED_SHORT ||
                                e === i.INT ||
                                e === i.UNSIGNED_INT ||
                                e === i.FLOAT ||
                                e === i.DOUBLE)
                        );
                    }),
                    (i.createTypedArray = function (e, t) {
                        switch (e) {
                            case i.BYTE:
                                return new Int8Array(t);
                            case i.UNSIGNED_BYTE:
                                return new Uint8Array(t);
                            case i.SHORT:
                                return new Int16Array(t);
                            case i.UNSIGNED_SHORT:
                                return new Uint16Array(t);
                            case i.INT:
                                return new Int32Array(t);
                            case i.UNSIGNED_INT:
                                return new Uint32Array(t);
                            case i.FLOAT:
                                return new Float32Array(t);
                            case i.DOUBLE:
                                return new Float64Array(t);
                        }
                    }),
                    (i.createArrayBufferView = function (t, r, n, a) {
                        switch (
                            ((n = e(n, 0)),
                            (a = e(
                                a,
                                (r.byteLength - n) / i.getSizeInBytes(t),
                            )),
                            t)
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
                    (i.fromName = function (e) {
                        switch (e) {
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
        define('Core/GeometryType', ['./freezeObject'], function (e) {
            'use strict';
            return e({ NONE: 0, TRIANGLES: 1, LINES: 2, POLYLINES: 3 });
        }),
        define(
            'Core/PrimitiveType',
            ['./freezeObject', './WebGLConstants'],
            function (e, t) {
                'use strict';
                var r = {
                    POINTS: t.POINTS,
                    LINES: t.LINES,
                    LINE_LOOP: t.LINE_LOOP,
                    LINE_STRIP: t.LINE_STRIP,
                    TRIANGLES: t.TRIANGLES,
                    TRIANGLE_STRIP: t.TRIANGLE_STRIP,
                    TRIANGLE_FAN: t.TRIANGLE_FAN,
                    validate: function (e) {
                        return (
                            e === r.POINTS ||
                            e === r.LINES ||
                            e === r.LINE_LOOP ||
                            e === r.LINE_STRIP ||
                            e === r.TRIANGLES ||
                            e === r.TRIANGLE_STRIP ||
                            e === r.TRIANGLE_FAN
                        );
                    },
                };
                return e(r);
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
            function (e, t, r, n, a, o) {
                'use strict';
                function i(e) {
                    (e = t(e, t.EMPTY_OBJECT)),
                        (this.attributes = e.attributes),
                        (this.indices = e.indices),
                        (this.primitiveType = t(e.primitiveType, o.TRIANGLES)),
                        (this.boundingSphere = e.boundingSphere),
                        (this.geometryType = t(e.geometryType, a.NONE)),
                        (this.boundingSphereCV = e.boundingSphereCV);
                }
                return (
                    (i.computeNumberOfVertices = function (e) {
                        var t = -1;
                        for (var n in e.attributes)
                            if (
                                e.attributes.hasOwnProperty(n) &&
                                r(e.attributes[n]) &&
                                r(e.attributes[n].values)
                            ) {
                                var a = e.attributes[n],
                                    o =
                                        a.values.length /
                                        a.componentsPerAttribute;
                                t = o;
                            }
                        return t;
                    }),
                    i
                );
            },
        ),
        define(
            'Core/GeometryAttribute',
            ['./defaultValue', './defined', './DeveloperError'],
            function (e, t, r) {
                'use strict';
                function n(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this.componentDatatype = t.componentDatatype),
                        (this.componentsPerAttribute =
                            t.componentsPerAttribute),
                        (this.normalize = e(t.normalize, !1)),
                        (this.values = t.values);
                }
                return n;
            },
        ),
        define('Core/GeometryAttributes', ['./defaultValue'], function (e) {
            'use strict';
            function t(t) {
                (t = e(t, e.EMPTY_OBJECT)),
                    (this.position = t.position),
                    (this.normal = t.normal),
                    (this.st = t.st),
                    (this.bitangent = t.bitangent),
                    (this.tangent = t.tangent),
                    (this.color = t.color);
            }
            return t;
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
            function (e, t, r, n, a) {
                'use strict';
                var o = {
                    UNSIGNED_BYTE: a.UNSIGNED_BYTE,
                    UNSIGNED_SHORT: a.UNSIGNED_SHORT,
                    UNSIGNED_INT: a.UNSIGNED_INT,
                };
                return (
                    (o.getSizeInBytes = function (e) {
                        switch (e) {
                            case o.UNSIGNED_BYTE:
                                return Uint8Array.BYTES_PER_ELEMENT;
                            case o.UNSIGNED_SHORT:
                                return Uint16Array.BYTES_PER_ELEMENT;
                            case o.UNSIGNED_INT:
                                return Uint32Array.BYTES_PER_ELEMENT;
                        }
                    }),
                    (o.validate = function (t) {
                        return (
                            e(t) &&
                            (t === o.UNSIGNED_BYTE ||
                                t === o.UNSIGNED_SHORT ||
                                t === o.UNSIGNED_INT)
                        );
                    }),
                    (o.createTypedArray = function (e, t) {
                        return e >= n.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(t)
                            : new Uint16Array(t);
                    }),
                    (o.createTypedArrayFromArrayBuffer = function (e, t, r, a) {
                        return e >= n.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(t, r, a)
                            : new Uint16Array(t, r, a);
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
            function (e, t, r, n, a, o, i, u) {
                'use strict';
                function s(e) {
                    var t = e._uSquared,
                        r = e._ellipsoid.maximumRadius,
                        n = e._ellipsoid.minimumRadius,
                        a = (r - n) / r,
                        o = Math.cos(e._startHeading),
                        i = Math.sin(e._startHeading),
                        u = (1 - a) * Math.tan(e._start.latitude),
                        s = 1 / Math.sqrt(1 + u * u),
                        E = s * u,
                        c = Math.atan2(u, o),
                        l = s * i,
                        f = l * l,
                        _ = 1 - f,
                        R = Math.sqrt(_),
                        T = t / 4,
                        h = T * T,
                        A = h * T,
                        d = h * h,
                        S = 1 + T - (3 * h) / 4 + (5 * A) / 4 - (175 * d) / 64,
                        m = 1 - T + (15 * h) / 8 - (35 * A) / 8,
                        C = 1 - 3 * T + (35 * h) / 4,
                        N = 1 - 5 * T,
                        I =
                            S * c -
                            (m * Math.sin(2 * c) * T) / 2 -
                            (C * Math.sin(4 * c) * h) / 16 -
                            (N * Math.sin(6 * c) * A) / 48 -
                            (5 * Math.sin(8 * c) * d) / 512,
                        M = e._constants;
                    (M.a = r),
                        (M.b = n),
                        (M.f = a),
                        (M.cosineHeading = o),
                        (M.sineHeading = i),
                        (M.tanU = u),
                        (M.cosineU = s),
                        (M.sineU = E),
                        (M.sigma = c),
                        (M.sineAlpha = l),
                        (M.sineSquaredAlpha = f),
                        (M.cosineSquaredAlpha = _),
                        (M.cosineAlpha = R),
                        (M.u2Over4 = T),
                        (M.u4Over16 = h),
                        (M.u6Over64 = A),
                        (M.u8Over256 = d),
                        (M.a0 = S),
                        (M.a1 = m),
                        (M.a2 = C),
                        (M.a3 = N),
                        (M.distanceRatio = I);
                }
                function E(e, t) {
                    return (e * t * (4 + e * (4 - 3 * t))) / 16;
                }
                function c(e, t, r, n, a, o, i) {
                    var u = E(e, r);
                    return (
                        (1 - u) *
                        e *
                        t *
                        (n + u * a * (i + u * o * (2 * i * i - 1)))
                    );
                }
                function l(e, t, r, n, a, o, i) {
                    var s,
                        E,
                        l,
                        f,
                        _,
                        R = (t - r) / t,
                        T = o - n,
                        h = Math.atan((1 - R) * Math.tan(a)),
                        A = Math.atan((1 - R) * Math.tan(i)),
                        d = Math.cos(h),
                        S = Math.sin(h),
                        m = Math.cos(A),
                        C = Math.sin(A),
                        N = d * m,
                        I = d * C,
                        M = S * C,
                        p = S * m,
                        O = T,
                        g = u.TWO_PI,
                        y = Math.cos(O),
                        F = Math.sin(O);
                    do {
                        (y = Math.cos(O)), (F = Math.sin(O));
                        var L = I - p * y;
                        (l = Math.sqrt(m * m * F * F + L * L)),
                            (E = M + N * y),
                            (s = Math.atan2(l, E));
                        var U;
                        0 === l
                            ? ((U = 0), (f = 1))
                            : ((U = (N * F) / l), (f = 1 - U * U)),
                            (g = O),
                            (_ = E - (2 * M) / f),
                            isNaN(_) && (_ = 0),
                            (O = T + c(R, U, f, s, l, E, _));
                    } while (Math.abs(O - g) > u.EPSILON12);
                    var v = (f * (t * t - r * r)) / (r * r),
                        D =
                            1 +
                            (v * (4096 + v * (v * (320 - 175 * v) - 768))) /
                                16384,
                        P = (v * (256 + v * (v * (74 - 47 * v) - 128))) / 1024,
                        B = _ * _,
                        w =
                            P *
                            l *
                            (_ +
                                (P *
                                    (E * (2 * B - 1) -
                                        (P *
                                            _ *
                                            (4 * l * l - 3) *
                                            (4 * B - 3)) /
                                            6)) /
                                    4),
                        x = r * D * (s - w),
                        G = Math.atan2(m * F, I - p * y),
                        b = Math.atan2(d * F, I * y - p);
                    (e._distance = x),
                        (e._startHeading = G),
                        (e._endHeading = b),
                        (e._uSquared = v);
                }
                function f(r, n, a, o) {
                    e.normalize(o.cartographicToCartesian(n, T), R),
                        e.normalize(o.cartographicToCartesian(a, T), T);
                    l(
                        r,
                        o.maximumRadius,
                        o.minimumRadius,
                        n.longitude,
                        n.latitude,
                        a.longitude,
                        a.latitude,
                    ),
                        (r._start = t.clone(n, r._start)),
                        (r._end = t.clone(a, r._end)),
                        (r._start.height = 0),
                        (r._end.height = 0),
                        s(r);
                }
                function _(e, r, o) {
                    var u = n(o, i.WGS84);
                    (this._ellipsoid = u),
                        (this._start = new t()),
                        (this._end = new t()),
                        (this._constants = {}),
                        (this._startHeading = void 0),
                        (this._endHeading = void 0),
                        (this._distance = void 0),
                        (this._uSquared = void 0),
                        a(e) && a(r) && f(this, e, r, u);
                }
                var R = new e(),
                    T = new e();
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
                    (_.prototype.setEndPoints = function (e, t) {
                        f(this, e, t, this._ellipsoid);
                    }),
                    (_.prototype.interpolateUsingFraction = function (e, t) {
                        return this.interpolateUsingSurfaceDistance(
                            this._distance * e,
                            t,
                        );
                    }),
                    (_.prototype.interpolateUsingSurfaceDistance = function (
                        e,
                        r,
                    ) {
                        var n = this._constants,
                            o = n.distanceRatio + e / n.b,
                            i = Math.cos(2 * o),
                            u = Math.cos(4 * o),
                            s = Math.cos(6 * o),
                            E = Math.sin(2 * o),
                            l = Math.sin(4 * o),
                            f = Math.sin(6 * o),
                            _ = Math.sin(8 * o),
                            R = o * o,
                            T = o * R,
                            h = n.u8Over256,
                            A = n.u2Over4,
                            d = n.u6Over64,
                            S = n.u4Over16,
                            m =
                                (2 * T * h * i) / 3 +
                                o *
                                    (1 -
                                        A +
                                        (7 * S) / 4 -
                                        (15 * d) / 4 +
                                        (579 * h) / 64 -
                                        (S - (15 * d) / 4 + (187 * h) / 16) *
                                            i -
                                        ((5 * d) / 4 - (115 * h) / 16) * u -
                                        (29 * h * s) / 16) +
                                (A / 2 - S + (71 * d) / 32 - (85 * h) / 16) *
                                    E +
                                ((5 * S) / 16 - (5 * d) / 4 + (383 * h) / 96) *
                                    l -
                                R * ((d - (11 * h) / 2) * E + (5 * h * l) / 2) +
                                ((29 * d) / 96 - (29 * h) / 16) * f +
                                (539 * h * _) / 1536,
                            C = Math.asin(Math.sin(m) * n.cosineAlpha),
                            N = Math.atan((n.a / n.b) * Math.tan(C));
                        m -= n.sigma;
                        var I = Math.cos(2 * n.sigma + m),
                            M = Math.sin(m),
                            p = Math.cos(m),
                            O = n.cosineU * p,
                            g = n.sineU * M,
                            y = Math.atan2(
                                M * n.sineHeading,
                                O - g * n.cosineHeading,
                            ),
                            F =
                                y -
                                c(
                                    n.f,
                                    n.sineAlpha,
                                    n.cosineSquaredAlpha,
                                    m,
                                    M,
                                    p,
                                    I,
                                );
                        return a(r)
                            ? ((r.longitude = this._start.longitude + F),
                              (r.latitude = N),
                              (r.height = 0),
                              r)
                            : new t(this._start.longitude + F, N, 0);
                    }),
                    _
                );
            },
        ),
        define(
            'Core/QuadraticRealPolynomial',
            ['./DeveloperError', './Math'],
            function (e, t) {
                'use strict';
                function r(e, r, n) {
                    var a = e + r;
                    return t.sign(e) !== t.sign(r) &&
                        Math.abs(a / Math.max(Math.abs(e), Math.abs(r))) < n
                        ? 0
                        : a;
                }
                var n = {};
                return (
                    (n.computeDiscriminant = function (e, t, r) {
                        return t * t - 4 * e * r;
                    }),
                    (n.computeRealRoots = function (e, n, a) {
                        var o;
                        if (0 === e) return 0 === n ? [] : [-a / n];
                        if (0 === n) {
                            if (0 === a) return [0, 0];
                            var i = Math.abs(a),
                                u = Math.abs(e);
                            if (i < u && i / u < t.EPSILON14) return [0, 0];
                            if (i > u && u / i < t.EPSILON14) return [];
                            if ((o = -a / e) < 0) return [];
                            var s = Math.sqrt(o);
                            return [-s, s];
                        }
                        if (0 === a)
                            return (o = -n / e), o < 0 ? [o, 0] : [0, o];
                        var E = n * n,
                            c = 4 * e * a,
                            l = r(E, -c, t.EPSILON14);
                        if (l < 0) return [];
                        var f =
                            -0.5 * r(n, t.sign(n) * Math.sqrt(l), t.EPSILON14);
                        return n > 0 ? [f / e, a / f] : [a / f, f / e];
                    }),
                    n
                );
            },
        ),
        define(
            'Core/CubicRealPolynomial',
            ['./DeveloperError', './QuadraticRealPolynomial'],
            function (e, t) {
                'use strict';
                function r(e, t, r, n) {
                    var a,
                        o,
                        i = e,
                        u = t / 3,
                        s = r / 3,
                        E = n,
                        c = i * s,
                        l = u * E,
                        f = u * u,
                        _ = s * s,
                        R = i * s - f,
                        T = i * E - u * s,
                        h = u * E - _,
                        A = 4 * R * h - T * T;
                    if (A < 0) {
                        var d, S, m;
                        f * l >= c * _
                            ? ((d = i), (S = R), (m = -2 * u * R + i * T))
                            : ((d = E), (S = h), (m = -E * T + 2 * s * h));
                        var C = m < 0 ? -1 : 1,
                            N = -C * Math.abs(d) * Math.sqrt(-A);
                        o = -m + N;
                        var I = o / 2,
                            M =
                                I < 0
                                    ? -Math.pow(-I, 1 / 3)
                                    : Math.pow(I, 1 / 3),
                            p = o === N ? -M : -S / M;
                        return (
                            (a = S <= 0 ? M + p : -m / (M * M + p * p + S)),
                            f * l >= c * _ ? [(a - u) / i] : [-E / (a + s)]
                        );
                    }
                    var O = R,
                        g = -2 * u * R + i * T,
                        y = h,
                        F = -E * T + 2 * s * h,
                        L = Math.sqrt(A),
                        U = Math.sqrt(3) / 2,
                        v = Math.abs(Math.atan2(i * L, -g) / 3);
                    a = 2 * Math.sqrt(-O);
                    var D = Math.cos(v);
                    o = a * D;
                    var P = a * (-D / 2 - U * Math.sin(v)),
                        B = o + P > 2 * u ? o - u : P - u,
                        w = i,
                        x = B / w;
                    (v = Math.abs(Math.atan2(E * L, -F) / 3)),
                        (a = 2 * Math.sqrt(-y)),
                        (D = Math.cos(v)),
                        (o = a * D),
                        (P = a * (-D / 2 - U * Math.sin(v)));
                    var G = -E,
                        b = o + P < 2 * s ? o + s : P + s,
                        z = G / b,
                        H = w * b,
                        V = -B * b - w * G,
                        X = B * G,
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
                    (n.computeDiscriminant = function (e, t, r, n) {
                        var a = e * e,
                            o = t * t,
                            i = r * r;
                        return (
                            18 * e * t * r * n +
                            o * i -
                            27 * a * (n * n) -
                            4 * (e * i * r + o * t * n)
                        );
                    }),
                    (n.computeRealRoots = function (e, n, a, o) {
                        var i, u;
                        if (0 === e) return t.computeRealRoots(n, a, o);
                        if (0 === n) {
                            if (0 === a) {
                                if (0 === o) return [0, 0, 0];
                                u = -o / e;
                                var s =
                                    u < 0
                                        ? -Math.pow(-u, 1 / 3)
                                        : Math.pow(u, 1 / 3);
                                return [s, s, s];
                            }
                            return 0 === o
                                ? ((i = t.computeRealRoots(e, 0, a)),
                                  0 === i.Length ? [0] : [i[0], 0, i[1]])
                                : r(e, 0, a, o);
                        }
                        return 0 === a
                            ? 0 === o
                                ? ((u = -n / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                                : r(e, n, 0, o)
                            : 0 === o
                              ? ((i = t.computeRealRoots(e, n, a)),
                                0 === i.length
                                    ? [0]
                                    : i[1] <= 0
                                      ? [i[0], i[1], 0]
                                      : i[0] >= 0
                                        ? [0, i[0], i[1]]
                                        : [i[0], 0, i[1]])
                              : r(e, n, a, o);
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
            function (e, t, r, n) {
                'use strict';
                function a(t, a, o, i) {
                    var u = t * t,
                        s = a - (3 * u) / 8,
                        E = o - (a * t) / 2 + (u * t) / 8,
                        c = i - (o * t) / 4 + (a * u) / 16 - (3 * u * u) / 256,
                        l = e.computeRealRoots(1, 2 * s, s * s - 4 * c, -E * E);
                    if (l.length > 0) {
                        var f = -t / 4,
                            _ = l[l.length - 1];
                        if (Math.abs(_) < r.EPSILON14) {
                            var R = n.computeRealRoots(1, s, c);
                            if (2 === R.length) {
                                var T,
                                    h = R[0],
                                    A = R[1];
                                if (h >= 0 && A >= 0) {
                                    var d = Math.sqrt(h),
                                        S = Math.sqrt(A);
                                    return [f - S, f - d, f + d, f + S];
                                }
                                if (h >= 0 && A < 0)
                                    return (T = Math.sqrt(h)), [f - T, f + T];
                                if (h < 0 && A >= 0)
                                    return (T = Math.sqrt(A)), [f - T, f + T];
                            }
                            return [];
                        }
                        if (_ > 0) {
                            var m = Math.sqrt(_),
                                C = (s + _ - E / m) / 2,
                                N = (s + _ + E / m) / 2,
                                I = n.computeRealRoots(1, m, C),
                                M = n.computeRealRoots(1, -m, N);
                            return 0 !== I.length
                                ? ((I[0] += f),
                                  (I[1] += f),
                                  0 !== M.length
                                      ? ((M[0] += f),
                                        (M[1] += f),
                                        I[1] <= M[0]
                                            ? [I[0], I[1], M[0], M[1]]
                                            : M[1] <= I[0]
                                              ? [M[0], M[1], I[0], I[1]]
                                              : I[0] >= M[0] && I[1] <= M[1]
                                                ? [M[0], I[0], I[1], M[1]]
                                                : M[0] >= I[0] && M[1] <= I[1]
                                                  ? [I[0], M[0], M[1], I[1]]
                                                  : I[0] > M[0] && I[0] < M[1]
                                                    ? [M[0], I[0], M[1], I[1]]
                                                    : [I[0], M[0], I[1], M[1]])
                                      : I)
                                : 0 !== M.length
                                  ? ((M[0] += f), (M[1] += f), M)
                                  : [];
                        }
                    }
                    return [];
                }
                function o(t, a, o, i) {
                    var u = o * o,
                        s = a * a,
                        E = t * t,
                        c = -2 * a,
                        l = o * t + s - 4 * i,
                        f = E * i - o * a * t + u,
                        _ = e.computeRealRoots(1, c, l, f);
                    if (_.length > 0) {
                        var R,
                            T,
                            h = _[0],
                            A = a - h,
                            d = A * A,
                            S = t / 2,
                            m = A / 2,
                            C = d - 4 * i,
                            N = d + 4 * Math.abs(i),
                            I = E - 4 * h,
                            M = E + 4 * Math.abs(h);
                        if (h < 0 || C * M < I * N) {
                            var p = Math.sqrt(I);
                            (R = p / 2), (T = 0 === p ? 0 : (t * m - o) / p);
                        } else {
                            var O = Math.sqrt(C);
                            (R = 0 === O ? 0 : (t * m - o) / O), (T = O / 2);
                        }
                        var g, y;
                        0 === S && 0 === R
                            ? ((g = 0), (y = 0))
                            : r.sign(S) === r.sign(R)
                              ? ((g = S + R), (y = h / g))
                              : ((y = S - R), (g = h / y));
                        var F, L;
                        0 === m && 0 === T
                            ? ((F = 0), (L = 0))
                            : r.sign(m) === r.sign(T)
                              ? ((F = m + T), (L = i / F))
                              : ((L = m - T), (F = i / L));
                        var U = n.computeRealRoots(1, g, F),
                            v = n.computeRealRoots(1, y, L);
                        if (0 !== U.length)
                            return 0 !== v.length
                                ? U[1] <= v[0]
                                    ? [U[0], U[1], v[0], v[1]]
                                    : v[1] <= U[0]
                                      ? [v[0], v[1], U[0], U[1]]
                                      : U[0] >= v[0] && U[1] <= v[1]
                                        ? [v[0], U[0], U[1], v[1]]
                                        : v[0] >= U[0] && v[1] <= U[1]
                                          ? [U[0], v[0], v[1], U[1]]
                                          : U[0] > v[0] && U[0] < v[1]
                                            ? [v[0], U[0], v[1], U[1]]
                                            : [U[0], v[0], U[1], v[1]]
                                : U;
                        if (0 !== v.length) return v;
                    }
                    return [];
                }
                var i = {};
                return (
                    (i.computeDiscriminant = function (e, t, r, n, a) {
                        var o = e * e,
                            i = o * e,
                            u = t * t,
                            s = u * t,
                            E = r * r,
                            c = E * r,
                            l = n * n,
                            f = l * n,
                            _ = a * a;
                        return (
                            u * E * l -
                            4 * s * f -
                            4 * e * c * l +
                            18 * e * t * r * f -
                            27 * o * l * l +
                            256 * i * (_ * a) +
                            a *
                                (18 * s * r * n -
                                    4 * u * c +
                                    16 * e * E * E -
                                    80 * e * t * E * n -
                                    6 * e * u * l +
                                    144 * o * r * l) +
                            _ *
                                (144 * e * u * r -
                                    27 * u * u -
                                    128 * o * E -
                                    192 * o * t * n)
                        );
                    }),
                    (i.computeRealRoots = function (t, n, i, u, s) {
                        if (Math.abs(t) < r.EPSILON15)
                            return e.computeRealRoots(n, i, u, s);
                        var E = n / t,
                            c = i / t,
                            l = u / t,
                            f = s / t,
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
            function (e, t, r, n) {
                'use strict';
                function a(r, n) {
                    (n = e.clone(t(n, e.ZERO))),
                        e.equals(n, e.ZERO) || e.normalize(n, n),
                        (this.origin = e.clone(t(r, e.ZERO))),
                        (this.direction = n);
                }
                return (
                    (a.getPoint = function (t, n, a) {
                        return (
                            r(a) || (a = new e()),
                            (a = e.multiplyByScalar(t.direction, n, a)),
                            e.add(t.origin, a, a)
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
            function (e, t, r, n, a, o, i, u, s, E, c) {
                'use strict';
                function l(e, t, r, n) {
                    var a = t * t - 4 * e * r;
                    if (!(a < 0)) {
                        if (a > 0) {
                            var o = 1 / (2 * e),
                                i = Math.sqrt(a),
                                u = (-t + i) * o,
                                s = (-t - i) * o;
                            return (
                                u < s
                                    ? ((n.root0 = u), (n.root1 = s))
                                    : ((n.root0 = s), (n.root1 = u)),
                                n
                            );
                        }
                        var E = -t / (2 * e);
                        if (0 !== E) return (n.root0 = n.root1 = E), n;
                    }
                }
                function f(t, r, a) {
                    n(a) || (a = new o());
                    var i = t.origin,
                        u = t.direction,
                        s = r.center,
                        E = r.radius * r.radius,
                        c = e.subtract(i, s, d),
                        f = e.dot(u, u),
                        _ = 2 * e.dot(u, c),
                        R = e.magnitudeSquared(c) - E,
                        T = l(f, _, R, N);
                    if (n(T)) return (a.start = T.root0), (a.stop = T.root1), a;
                }
                function _(e, t, r) {
                    var n = e + t;
                    return i.sign(e) !== i.sign(t) &&
                        Math.abs(n / Math.max(Math.abs(e), Math.abs(t))) < r
                        ? 0
                        : n;
                }
                function R(t, r, n, a, o) {
                    var c,
                        l = a * a,
                        f = o * o,
                        R = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * f,
                        T =
                            o *
                            (a *
                                _(
                                    t[u.COLUMN1ROW0],
                                    t[u.COLUMN0ROW1],
                                    i.EPSILON15,
                                ) +
                                r.y),
                        h =
                            t[u.COLUMN0ROW0] * l +
                            t[u.COLUMN2ROW2] * f +
                            a * r.x +
                            n,
                        A =
                            f *
                            _(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], i.EPSILON15),
                        d =
                            o *
                            (a * _(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + r.z),
                        S = [];
                    if (0 === d && 0 === A) {
                        if (((c = s.computeRealRoots(R, T, h)), 0 === c.length))
                            return S;
                        var m = c[0],
                            C = Math.sqrt(Math.max(1 - m * m, 0));
                        if (
                            (S.push(new e(a, o * m, o * -C)),
                            S.push(new e(a, o * m, o * C)),
                            2 === c.length)
                        ) {
                            var N = c[1],
                                I = Math.sqrt(Math.max(1 - N * N, 0));
                            S.push(new e(a, o * N, o * -I)),
                                S.push(new e(a, o * N, o * I));
                        }
                        return S;
                    }
                    var M = d * d,
                        p = A * A,
                        O = R * R,
                        g = d * A,
                        y = O + p,
                        F = 2 * (T * R + g),
                        L = 2 * h * R + T * T - p + M,
                        U = 2 * (h * T - g),
                        v = h * h - M;
                    if (0 === y && 0 === F && 0 === L && 0 === U) return S;
                    c = E.computeRealRoots(y, F, L, U, v);
                    var D = c.length;
                    if (0 === D) return S;
                    for (var P = 0; P < D; ++P) {
                        var B,
                            w = c[P],
                            x = w * w,
                            G = Math.max(1 - x, 0),
                            b = Math.sqrt(G);
                        B =
                            i.sign(R) === i.sign(h)
                                ? _(R * x + h, T * w, i.EPSILON12)
                                : i.sign(h) === i.sign(T * w)
                                  ? _(R * x, T * w + h, i.EPSILON12)
                                  : _(R * x + T * w, h, i.EPSILON12);
                        var z = _(A * w, d, i.EPSILON15),
                            H = B * z;
                        H < 0
                            ? S.push(new e(a, o * w, o * b))
                            : H > 0
                              ? S.push(new e(a, o * w, o * -b))
                              : 0 !== b
                                ? (S.push(new e(a, o * w, o * -b)),
                                  S.push(new e(a, o * w, o * b)),
                                  ++P)
                                : S.push(new e(a, o * w, o * b));
                    }
                    return S;
                }
                var T = {};
                T.rayPlane = function (t, r, a) {
                    n(a) || (a = new e());
                    var o = t.origin,
                        u = t.direction,
                        s = r.normal,
                        E = e.dot(s, u);
                    if (!(Math.abs(E) < i.EPSILON15)) {
                        var c = (-r.distance - e.dot(s, o)) / E;
                        if (!(c < 0))
                            return (
                                (a = e.multiplyByScalar(u, c, a)),
                                e.add(o, a, a)
                            );
                    }
                };
                var h = new e(),
                    A = new e(),
                    d = new e(),
                    S = new e(),
                    m = new e();
                (T.rayTriangleParametric = function (t, n, a, o, u) {
                    u = r(u, !1);
                    var s,
                        E,
                        c,
                        l,
                        f,
                        _ = t.origin,
                        R = t.direction,
                        T = e.subtract(a, n, h),
                        C = e.subtract(o, n, A),
                        N = e.cross(R, C, d),
                        I = e.dot(T, N);
                    if (u) {
                        if (I < i.EPSILON6) return;
                        if (
                            ((s = e.subtract(_, n, S)),
                            (c = e.dot(s, N)) < 0 || c > I)
                        )
                            return;
                        if (
                            ((E = e.cross(s, T, m)),
                            (l = e.dot(R, E)) < 0 || c + l > I)
                        )
                            return;
                        f = e.dot(C, E) / I;
                    } else {
                        if (Math.abs(I) < i.EPSILON6) return;
                        var M = 1 / I;
                        if (
                            ((s = e.subtract(_, n, S)),
                            (c = e.dot(s, N) * M) < 0 || c > 1)
                        )
                            return;
                        if (
                            ((E = e.cross(s, T, m)),
                            (l = e.dot(R, E) * M) < 0 || c + l > 1)
                        )
                            return;
                        f = e.dot(C, E) * M;
                    }
                    return f;
                }),
                    (T.rayTriangle = function (t, r, a, o, i, u) {
                        var s = T.rayTriangleParametric(t, r, a, o, i);
                        if (n(s) && !(s < 0))
                            return (
                                n(u) || (u = new e()),
                                e.multiplyByScalar(t.direction, s, u),
                                e.add(t.origin, u, u)
                            );
                    });
                var C = new c();
                T.lineSegmentTriangle = function (t, r, a, o, i, u, s) {
                    var E = C;
                    e.clone(t, E.origin),
                        e.subtract(r, t, E.direction),
                        e.normalize(E.direction, E.direction);
                    var c = T.rayTriangleParametric(E, a, o, i, u);
                    if (!(!n(c) || c < 0 || c > e.distance(t, r)))
                        return (
                            n(s) || (s = new e()),
                            e.multiplyByScalar(E.direction, c, s),
                            e.add(E.origin, s, s)
                        );
                };
                var N = { root0: 0, root1: 0 };
                T.raySphere = function (e, t, r) {
                    if (((r = f(e, t, r)), n(r) && !(r.stop < 0)))
                        return (r.start = Math.max(r.start, 0)), r;
                };
                var I = new c();
                T.lineSegmentSphere = function (t, r, a, o) {
                    var i = I;
                    e.clone(t, i.origin);
                    var u = e.subtract(r, t, i.direction),
                        s = e.magnitude(u);
                    if (
                        (e.normalize(u, u),
                        (o = f(i, a, o)),
                        !(!n(o) || o.stop < 0 || o.start > s))
                    )
                        return (
                            (o.start = Math.max(o.start, 0)),
                            (o.stop = Math.min(o.stop, s)),
                            o
                        );
                };
                var M = new e(),
                    p = new e();
                T.rayEllipsoid = function (t, r) {
                    var n,
                        a,
                        i,
                        u,
                        s,
                        E = r.oneOverRadii,
                        c = e.multiplyComponents(E, t.origin, M),
                        l = e.multiplyComponents(E, t.direction, p),
                        f = e.magnitudeSquared(c),
                        _ = e.dot(c, l);
                    if (f > 1) {
                        if (_ >= 0) return;
                        var R = _ * _;
                        if (
                            ((n = f - 1),
                            (a = e.magnitudeSquared(l)),
                            (i = a * n),
                            R < i)
                        )
                            return;
                        if (R > i) {
                            (u = _ * _ - i), (s = -_ + Math.sqrt(u));
                            var T = s / a,
                                h = n / s;
                            return T < h ? new o(T, h) : { start: h, stop: T };
                        }
                        var A = Math.sqrt(n / a);
                        return new o(A, A);
                    }
                    return f < 1
                        ? ((n = f - 1),
                          (a = e.magnitudeSquared(l)),
                          (i = a * n),
                          (u = _ * _ - i),
                          (s = -_ + Math.sqrt(u)),
                          new o(0, s / a))
                        : _ < 0
                          ? ((a = e.magnitudeSquared(l)), new o(0, -_ / a))
                          : void 0;
                };
                var O = new e(),
                    g = new e(),
                    y = new e(),
                    F = new e(),
                    L = new e(),
                    U = new u(),
                    v = new u(),
                    D = new u(),
                    P = new u(),
                    B = new u(),
                    w = new u(),
                    x = new u(),
                    G = new e(),
                    b = new e(),
                    z = new t();
                T.grazingAltitudeLocation = function (t, r) {
                    var a = t.origin,
                        o = t.direction;
                    if (!e.equals(a, e.ZERO)) {
                        var s = r.geodeticSurfaceNormal(a, O);
                        if (e.dot(o, s) >= 0) return a;
                    }
                    var E = n(this.rayEllipsoid(t, r)),
                        c = r.transformPositionToScaledSpace(o, O),
                        l = e.normalize(c, c),
                        f = e.mostOrthogonalAxis(c, F),
                        _ = e.normalize(e.cross(f, l, g), g),
                        T = e.normalize(e.cross(l, _, y), y),
                        h = U;
                    (h[0] = l.x),
                        (h[1] = l.y),
                        (h[2] = l.z),
                        (h[3] = _.x),
                        (h[4] = _.y),
                        (h[5] = _.z),
                        (h[6] = T.x),
                        (h[7] = T.y),
                        (h[8] = T.z);
                    var A = u.transpose(h, v),
                        d = u.fromScale(r.radii, D),
                        S = u.fromScale(r.oneOverRadii, P),
                        m = B;
                    (m[0] = 0),
                        (m[1] = -o.z),
                        (m[2] = o.y),
                        (m[3] = o.z),
                        (m[4] = 0),
                        (m[5] = -o.x),
                        (m[6] = -o.y),
                        (m[7] = o.x),
                        (m[8] = 0);
                    var C,
                        N,
                        I = u.multiply(u.multiply(A, S, w), m, w),
                        M = u.multiply(u.multiply(I, d, x), h, x),
                        p = u.multiplyByVector(I, a, L),
                        H = R(M, e.negate(p, O), 0, 0, 1),
                        V = H.length;
                    if (V > 0) {
                        for (
                            var X = e.clone(e.ZERO, b),
                                q = Number.NEGATIVE_INFINITY,
                                W = 0;
                            W < V;
                            ++W
                        ) {
                            C = u.multiplyByVector(
                                d,
                                u.multiplyByVector(h, H[W], G),
                                G,
                            );
                            var Y = e.normalize(e.subtract(C, a, F), F),
                                K = e.dot(Y, o);
                            K > q && ((q = K), (X = e.clone(C, X)));
                        }
                        var k = r.cartesianToCartographic(X, z);
                        return (
                            (q = i.clamp(q, 0, 1)),
                            (N =
                                e.magnitude(e.subtract(X, a, F)) *
                                Math.sqrt(1 - q * q)),
                            (N = E ? -N : N),
                            (k.height = N),
                            r.cartographicToCartesian(k, new e())
                        );
                    }
                };
                var H = new e();
                return (
                    (T.lineSegmentPlane = function (t, r, a, o) {
                        n(o) || (o = new e());
                        var u = e.subtract(r, t, H),
                            s = a.normal,
                            E = e.dot(s, u);
                        if (!(Math.abs(E) < i.EPSILON6)) {
                            var c = e.dot(s, t),
                                l = -(a.distance + c) / E;
                            if (!(l < 0 || l > 1))
                                return (
                                    e.multiplyByScalar(u, l, o),
                                    e.add(t, o, o),
                                    o
                                );
                        }
                    }),
                    (T.trianglePlaneIntersection = function (t, r, n, a) {
                        var o = a.normal,
                            i = a.distance,
                            u = e.dot(o, t) + i < 0,
                            s = e.dot(o, r) + i < 0,
                            E = e.dot(o, n) + i < 0,
                            c = 0;
                        (c += u ? 1 : 0), (c += s ? 1 : 0), (c += E ? 1 : 0);
                        var l, f;
                        if (
                            ((1 !== c && 2 !== c) ||
                                ((l = new e()), (f = new e())),
                            1 === c)
                        ) {
                            if (u)
                                return (
                                    T.lineSegmentPlane(t, r, a, l),
                                    T.lineSegmentPlane(t, n, a, f),
                                    {
                                        positions: [t, r, n, l, f],
                                        indices: [0, 3, 4, 1, 2, 4, 1, 4, 3],
                                    }
                                );
                            if (s)
                                return (
                                    T.lineSegmentPlane(r, n, a, l),
                                    T.lineSegmentPlane(r, t, a, f),
                                    {
                                        positions: [t, r, n, l, f],
                                        indices: [1, 3, 4, 2, 0, 4, 2, 4, 3],
                                    }
                                );
                            if (E)
                                return (
                                    T.lineSegmentPlane(n, t, a, l),
                                    T.lineSegmentPlane(n, r, a, f),
                                    {
                                        positions: [t, r, n, l, f],
                                        indices: [2, 3, 4, 0, 1, 4, 0, 4, 3],
                                    }
                                );
                        } else if (2 === c) {
                            if (!u)
                                return (
                                    T.lineSegmentPlane(r, t, a, l),
                                    T.lineSegmentPlane(n, t, a, f),
                                    {
                                        positions: [t, r, n, l, f],
                                        indices: [1, 2, 4, 1, 4, 3, 0, 3, 4],
                                    }
                                );
                            if (!s)
                                return (
                                    T.lineSegmentPlane(n, r, a, l),
                                    T.lineSegmentPlane(t, r, a, f),
                                    {
                                        positions: [t, r, n, l, f],
                                        indices: [2, 0, 4, 2, 4, 3, 1, 3, 4],
                                    }
                                );
                            if (!E)
                                return (
                                    T.lineSegmentPlane(t, n, a, l),
                                    T.lineSegmentPlane(r, n, a, f),
                                    {
                                        positions: [t, r, n, l, f],
                                        indices: [0, 1, 4, 0, 4, 3, 2, 3, 4],
                                    }
                                );
                        }
                    }),
                    T
                );
            },
        ),
        define('Core/isArray', ['./defined'], function (e) {
            'use strict';
            var t = Array.isArray;
            return (
                e(t) ||
                    (t = function (e) {
                        return (
                            '[object Array]' ===
                            Object.prototype.toString.call(e)
                        );
                    }),
                t
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
            function (e, t, r, n, a) {
                'use strict';
                function o(t, r) {
                    (this.normal = e.clone(t)), (this.distance = r);
                }
                o.fromPointNormal = function (r, n, a) {
                    var i = -e.dot(n, r);
                    return t(a)
                        ? (e.clone(n, a.normal), (a.distance = i), a)
                        : new o(n, i);
                };
                var i = new e();
                return (
                    (o.fromCartesian4 = function (r, n) {
                        var a = e.fromCartesian4(r, i),
                            u = r.w;
                        return t(n)
                            ? (e.clone(a, n.normal), (n.distance = u), n)
                            : new o(a, u);
                    }),
                    (o.getPointDistance = function (t, r) {
                        return e.dot(t.normal, r) + t.distance;
                    }),
                    (o.ORIGIN_XY_PLANE = n(new o(e.UNIT_Z, 0))),
                    (o.ORIGIN_YZ_PLANE = n(new o(e.UNIT_X, 0))),
                    (o.ORIGIN_ZX_PLANE = n(new o(e.UNIT_Y, 0))),
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
            function (e, t, r, n, a, o, i, u, s, E, c, l) {
                'use strict';
                function f(e, t, r) {
                    var n = M;
                    n.length = e;
                    var a;
                    if (t === r) {
                        for (a = 0; a < e; a++) n[a] = t;
                        return n;
                    }
                    var o = r - t,
                        i = o / e;
                    for (a = 0; a < e; a++) {
                        var u = t + a * i;
                        n[a] = u;
                    }
                    return n;
                }
                function _(t, r, n, a, o, i, u, s) {
                    var E = a.scaleToGeodeticSurface(t, y),
                        c = a.scaleToGeodeticSurface(r, F),
                        l = R.numberOfPoints(t, r, n),
                        _ = a.cartesianToCartographic(E, p),
                        T = a.cartesianToCartographic(c, O),
                        h = f(l, o, i);
                    L.setEndPoints(_, T);
                    var A = L.surfaceDistance / l,
                        d = s;
                    _.height = o;
                    var S = a.cartographicToCartesian(_, g);
                    e.pack(S, u, d), (d += 3);
                    for (var m = 1; m < l; m++) {
                        var C = L.interpolateUsingSurfaceDistance(m * A, O);
                        (C.height = h[m]),
                            (S = a.cartographicToCartesian(C, g)),
                            e.pack(S, u, d),
                            (d += 3);
                    }
                    return d;
                }
                var R = {};
                R.numberOfPoints = function (t, r, n) {
                    var a = e.distance(t, r);
                    return Math.ceil(a / n);
                };
                var T = new t();
                R.extractHeights = function (e, t) {
                    for (
                        var r = e.length, n = new Array(r), a = 0;
                        a < r;
                        a++
                    ) {
                        var o = e[a];
                        n[a] = t.cartesianToCartographic(o, T).height;
                    }
                    return n;
                };
                var h = new c(),
                    A = new e(),
                    d = new e(),
                    S = new l(e.UNIT_X, 0),
                    m = new e(),
                    C = new l(e.UNIT_X, 0),
                    N = new e(),
                    I = new e(),
                    M = [],
                    p = new t(),
                    O = new t(),
                    g = new e(),
                    y = new e(),
                    F = new e(),
                    L = new i();
                return (
                    (R.wrapLongitude = function (t, a) {
                        var o = [],
                            i = [];
                        if (n(t) && t.length > 0) {
                            a = r(a, c.IDENTITY);
                            var s = c.inverseTransformation(a, h),
                                E = c.multiplyByPoint(s, e.ZERO, A),
                                f = e.normalize(
                                    c.multiplyByPointAsVector(s, e.UNIT_Y, d),
                                    d,
                                ),
                                _ = l.fromPointNormal(E, f, S),
                                R = e.normalize(
                                    c.multiplyByPointAsVector(s, e.UNIT_X, m),
                                    m,
                                ),
                                T = l.fromPointNormal(E, R, C),
                                M = 1;
                            o.push(e.clone(t[0]));
                            for (
                                var p = o[0], O = t.length, g = 1;
                                g < O;
                                ++g
                            ) {
                                var y = t[g];
                                if (
                                    l.getPointDistance(T, p) < 0 ||
                                    l.getPointDistance(T, y) < 0
                                ) {
                                    var F = u.lineSegmentPlane(p, y, _, N);
                                    if (n(F)) {
                                        var L = e.multiplyByScalar(f, 5e-9, I);
                                        l.getPointDistance(_, p) < 0 &&
                                            e.negate(L, L),
                                            o.push(e.add(F, L, new e())),
                                            i.push(M + 1),
                                            e.negate(L, L),
                                            o.push(e.add(F, L, new e())),
                                            (M = 1);
                                    }
                                }
                                o.push(e.clone(t[g])), M++, (p = y);
                            }
                            i.push(M);
                        }
                        return { positions: o, lengths: i };
                    }),
                    (R.generateArc = function (t) {
                        n(t) || (t = {});
                        var a = t.positions,
                            i = a.length,
                            u = r(t.ellipsoid, o.WGS84),
                            c = r(t.height, 0),
                            l = s(c);
                        if (i < 1) return [];
                        if (1 === i) {
                            var f = u.scaleToGeodeticSurface(a[0], y);
                            if (0 !== (c = l ? c[0] : c)) {
                                var T = u.geodeticSurfaceNormal(f, g);
                                e.multiplyByScalar(T, c, T), e.add(f, T, f);
                            }
                            return [f.x, f.y, f.z];
                        }
                        var h = t.minDistance;
                        if (!n(h)) {
                            var A = r(t.granularity, E.RADIANS_PER_DEGREE);
                            h = E.chordLength(A, u.maximumRadius);
                        }
                        var d,
                            S = 0;
                        for (d = 0; d < i - 1; d++)
                            S += R.numberOfPoints(a[d], a[d + 1], h);
                        var m = 3 * (S + 1),
                            C = new Array(m),
                            N = 0;
                        for (d = 0; d < i - 1; d++) {
                            N = _(
                                a[d],
                                a[d + 1],
                                h,
                                u,
                                l ? c[d] : c,
                                l ? c[d + 1] : c,
                                C,
                                N,
                            );
                        }
                        M.length = 0;
                        var I = a[i - 1],
                            O = u.cartesianToCartographic(I, p);
                        O.height = l ? c[i - 1] : c;
                        var F = u.cartographicToCartesian(O, g);
                        return e.pack(F, C, m - 3), C;
                    }),
                    (R.generateCartesianArc = function (t) {
                        for (
                            var r = R.generateArc(t),
                                n = r.length / 3,
                                a = new Array(n),
                                o = 0;
                            o < n;
                            o++
                        )
                            a[o] = e.unpack(r, 3 * o);
                        return a;
                    }),
                    R
                );
            },
        ),
        define(
            'Core/SimplePolylineGeometry',
            [
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
                './IndexDatatype',
                './Math',
                './PolylinePipeline',
                './PrimitiveType',
            ],
            function (e, t, r, n, a, o, i, u, s, E, c, l, f, _, R) {
                'use strict';
                function T(e, t, n, a, o, i, u) {
                    var s,
                        E = _.numberOfPoints(e, t, o),
                        c = n.red,
                        l = n.green,
                        f = n.blue,
                        R = n.alpha,
                        T = a.red,
                        h = a.green,
                        A = a.blue,
                        d = a.alpha;
                    if (r.equals(n, a)) {
                        for (s = 0; s < E; s++)
                            (i[u++] = r.floatToByte(c)),
                                (i[u++] = r.floatToByte(l)),
                                (i[u++] = r.floatToByte(f)),
                                (i[u++] = r.floatToByte(R));
                        return u;
                    }
                    var S = (T - c) / E,
                        m = (h - l) / E,
                        C = (A - f) / E,
                        N = (d - R) / E,
                        I = u;
                    for (s = 0; s < E; s++)
                        (i[I++] = r.floatToByte(c + s * S)),
                            (i[I++] = r.floatToByte(l + s * m)),
                            (i[I++] = r.floatToByte(f + s * C)),
                            (i[I++] = r.floatToByte(R + s * N));
                    return I;
                }
                function h(e) {
                    e = a(e, a.EMPTY_OBJECT);
                    var n = e.positions,
                        i = e.colors,
                        s = a(e.colorsPerVertex, !1);
                    (this._positions = n),
                        (this._colors = i),
                        (this._colorsPerVertex = s),
                        (this._followSurface = a(e.followSurface, !0)),
                        (this._granularity = a(
                            e.granularity,
                            f.RADIANS_PER_DEGREE,
                        )),
                        (this._ellipsoid = a(e.ellipsoid, u.WGS84)),
                        (this._workerName = 'createSimplePolylineGeometry');
                    var E = 1 + n.length * t.packedLength;
                    (E += o(i) ? 1 + i.length * r.packedLength : 1),
                        (this.packedLength = E + u.packedLength + 3);
                }
                (h.pack = function (e, n, i) {
                    i = a(i, 0);
                    var s,
                        E = e._positions,
                        c = E.length;
                    for (n[i++] = c, s = 0; s < c; ++s, i += t.packedLength)
                        t.pack(E[s], n, i);
                    var l = e._colors;
                    for (
                        c = o(l) ? l.length : 0, n[i++] = c, s = 0;
                        s < c;
                        ++s, i += r.packedLength
                    )
                        r.pack(l[s], n, i);
                    return (
                        u.pack(e._ellipsoid, n, i),
                        (i += u.packedLength),
                        (n[i++] = e._colorsPerVertex ? 1 : 0),
                        (n[i++] = e._followSurface ? 1 : 0),
                        (n[i] = e._granularity),
                        n
                    );
                }),
                    (h.unpack = function (e, n, i) {
                        n = a(n, 0);
                        var s,
                            E = e[n++],
                            c = new Array(E);
                        for (s = 0; s < E; ++s, n += t.packedLength)
                            c[s] = t.unpack(e, n);
                        E = e[n++];
                        var l = E > 0 ? new Array(E) : void 0;
                        for (s = 0; s < E; ++s, n += r.packedLength)
                            l[s] = r.unpack(e, n);
                        var f = u.unpack(e, n);
                        n += u.packedLength;
                        var _ = 1 === e[n++],
                            R = 1 === e[n++],
                            T = e[n];
                        return o(i)
                            ? ((i._positions = c),
                              (i._colors = l),
                              (i._ellipsoid = f),
                              (i._colorsPerVertex = _),
                              (i._followSurface = R),
                              (i._granularity = T),
                              i)
                            : new h({
                                  positions: c,
                                  colors: l,
                                  ellipsoid: f,
                                  colorsPerVertex: _,
                                  followSurface: R,
                                  granularity: T,
                              });
                    });
                var A = new Array(2),
                    d = new Array(2),
                    S = {
                        positions: A,
                        height: d,
                        ellipsoid: void 0,
                        minDistance: void 0,
                    };
                return (
                    (h.createGeometry = function (a) {
                        var i,
                            u,
                            h,
                            m,
                            C,
                            N = a._positions,
                            I = a._colors,
                            M = a._colorsPerVertex,
                            p = a._followSurface,
                            O = a._granularity,
                            g = a._ellipsoid,
                            y = f.chordLength(O, g.maximumRadius),
                            F = o(I) && !M,
                            L = N.length,
                            U = 0;
                        if (p) {
                            var v = _.extractHeights(N, g),
                                D = S;
                            if (((D.minDistance = y), (D.ellipsoid = g), F)) {
                                var P = 0;
                                for (i = 0; i < L - 1; i++)
                                    P +=
                                        _.numberOfPoints(N[i], N[i + 1], y) + 1;
                                (u = new Float64Array(3 * P)),
                                    (m = new Uint8Array(4 * P)),
                                    (D.positions = A),
                                    (D.height = d);
                                var B = 0;
                                for (i = 0; i < L - 1; ++i) {
                                    (A[0] = N[i]),
                                        (A[1] = N[i + 1]),
                                        (d[0] = v[i]),
                                        (d[1] = v[i + 1]);
                                    var w = _.generateArc(D);
                                    if (o(I)) {
                                        var x = w.length / 3;
                                        C = I[i];
                                        for (var G = 0; G < x; ++G)
                                            (m[B++] = r.floatToByte(C.red)),
                                                (m[B++] = r.floatToByte(
                                                    C.green,
                                                )),
                                                (m[B++] = r.floatToByte(
                                                    C.blue,
                                                )),
                                                (m[B++] = r.floatToByte(
                                                    C.alpha,
                                                ));
                                    }
                                    u.set(w, U), (U += w.length);
                                }
                            } else if (
                                ((D.positions = N),
                                (D.height = v),
                                (u = new Float64Array(_.generateArc(D))),
                                o(I))
                            ) {
                                for (
                                    m = new Uint8Array((u.length / 3) * 4),
                                        i = 0;
                                    i < L - 1;
                                    ++i
                                ) {
                                    var b = N[i],
                                        z = N[i + 1],
                                        H = I[i],
                                        V = I[i + 1];
                                    U = T(b, z, H, V, y, m, U);
                                }
                                var X = I[L - 1];
                                (m[U++] = r.floatToByte(X.red)),
                                    (m[U++] = r.floatToByte(X.green)),
                                    (m[U++] = r.floatToByte(X.blue)),
                                    (m[U++] = r.floatToByte(X.alpha));
                            }
                        } else {
                            (h = F ? 2 * L - 2 : L),
                                (u = new Float64Array(3 * h)),
                                (m = o(I) ? new Uint8Array(4 * h) : void 0);
                            var q = 0,
                                W = 0;
                            for (i = 0; i < L; ++i) {
                                var Y = N[i];
                                if (
                                    (F &&
                                        i > 0 &&
                                        (t.pack(Y, u, q),
                                        (q += 3),
                                        (C = I[i - 1]),
                                        (m[W++] = r.floatToByte(C.red)),
                                        (m[W++] = r.floatToByte(C.green)),
                                        (m[W++] = r.floatToByte(C.blue)),
                                        (m[W++] = r.floatToByte(C.alpha))),
                                    F && i === L - 1)
                                )
                                    break;
                                t.pack(Y, u, q),
                                    (q += 3),
                                    o(I) &&
                                        ((C = I[i]),
                                        (m[W++] = r.floatToByte(C.red)),
                                        (m[W++] = r.floatToByte(C.green)),
                                        (m[W++] = r.floatToByte(C.blue)),
                                        (m[W++] = r.floatToByte(C.alpha)));
                            }
                        }
                        var K = new c();
                        (K.position = new E({
                            componentDatatype: n.DOUBLE,
                            componentsPerAttribute: 3,
                            values: u,
                        })),
                            o(I) &&
                                (K.color = new E({
                                    componentDatatype: n.UNSIGNED_BYTE,
                                    componentsPerAttribute: 4,
                                    values: m,
                                    normalize: !0,
                                })),
                            (h = u.length / 3);
                        var k = 2 * (h - 1),
                            Z = l.createTypedArray(h, k),
                            j = 0;
                        for (i = 0; i < h - 1; ++i)
                            (Z[j++] = i), (Z[j++] = i + 1);
                        return new s({
                            attributes: K,
                            indices: Z,
                            primitiveType: R.LINES,
                            boundingSphere: e.fromPoints(N),
                        });
                    }),
                    h
                );
            },
        ),
        define(
            'Workers/createSimplePolylineGeometry',
            [
                '../Core/defined',
                '../Core/Ellipsoid',
                '../Core/SimplePolylineGeometry',
            ],
            function (e, t, r) {
                'use strict';
                function n(n, a) {
                    return (
                        e(a) && (n = r.unpack(n, a)),
                        (n._ellipsoid = t.clone(n._ellipsoid)),
                        r.createGeometry(n)
                    );
                }
                return n;
            },
        );
})();
