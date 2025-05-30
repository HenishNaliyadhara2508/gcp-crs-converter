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
                function n(t) {
                    return t + ' is required, actual value was undefined';
                }
                function r(t, e, n) {
                    return (
                        'Expected ' +
                        n +
                        ' to be typeof ' +
                        e +
                        ', actual typeof was ' +
                        t
                    );
                }
                var a = {};
                return (
                    (a.typeOf = {}),
                    (a.defined = function (r, a) {
                        if (!t(a)) throw new e(n(r));
                    }),
                    (a.typeOf.func = function (t, n) {
                        if ('function' != typeof n)
                            throw new e(r(typeof n, 'function', t));
                    }),
                    (a.typeOf.string = function (t, n) {
                        if ('string' != typeof n)
                            throw new e(r(typeof n, 'string', t));
                    }),
                    (a.typeOf.number = function (t, n) {
                        if ('number' != typeof n)
                            throw new e(r(typeof n, 'number', t));
                    }),
                    (a.typeOf.number.lessThan = function (t, n, r) {
                        if ((a.typeOf.number(t, n), n >= r))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be less than ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (a.typeOf.number.lessThanOrEquals = function (t, n, r) {
                        if ((a.typeOf.number(t, n), n > r))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be less than or equal to ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (a.typeOf.number.greaterThan = function (t, n, r) {
                        if ((a.typeOf.number(t, n), n <= r))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be greater than ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (a.typeOf.number.greaterThanOrEquals = function (t, n, r) {
                        if ((a.typeOf.number(t, n), n < r))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be greater than or equal to' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (a.typeOf.object = function (t, n) {
                        if ('object' != typeof n)
                            throw new e(r(typeof n, 'object', t));
                    }),
                    (a.typeOf.bool = function (t, n) {
                        if ('boolean' != typeof n)
                            throw new e(r(typeof n, 'boolean', t));
                    }),
                    (a.typeOf.number.equals = function (t, n, r, i) {
                        if (
                            (a.typeOf.number(t, r),
                            a.typeOf.number(n, i),
                            r !== i)
                        )
                            throw new e(
                                t +
                                    ' must be equal to ' +
                                    n +
                                    ', the actual values are ' +
                                    r +
                                    ' and ' +
                                    i,
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
                        var n;
                        for (
                            this.mti == this.N + 1 && this.init_genrand(5489),
                                n = 0;
                            n < this.N - this.M;
                            n++
                        )
                            (t =
                                (this.mt[n] & this.UPPER_MASK) |
                                (this.mt[n + 1] & this.LOWER_MASK)),
                                (this.mt[n] =
                                    this.mt[n + this.M] ^ (t >>> 1) ^ e[1 & t]);
                        for (; n < this.N - 1; n++)
                            (t =
                                (this.mt[n] & this.UPPER_MASK) |
                                (this.mt[n + 1] & this.LOWER_MASK)),
                                (this.mt[n] =
                                    this.mt[n + (this.M - this.N)] ^
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
            function (t, e, n, r) {
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
                    (a.toSNorm = function (t, n) {
                        return (
                            (n = e(n, 255)),
                            Math.round((0.5 * a.clamp(t, -1, 1) + 0.5) * n)
                        );
                    }),
                    (a.fromSNorm = function (t, n) {
                        return (n = e(n, 255)), (a.clamp(t, 0, n) / n) * 2 - 1;
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
                    (a.lerp = function (t, e, n) {
                        return (1 - n) * t + n * e;
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
                            n = t - Math.floor(t / e) * e;
                        return n < -Math.PI ? n + e : n >= Math.PI ? n - e : n;
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
                    (a.equalsEpsilon = function (t, n, r, a) {
                        a = e(a, r);
                        var i = Math.abs(t - n);
                        return (
                            i <= a ||
                            i <= r * Math.max(Math.abs(t), Math.abs(n))
                        );
                    });
                var i = [1];
                (a.factorial = function (t) {
                    var e = i.length;
                    if (t >= e)
                        for (var n = i[e - 1], r = e; r <= t; r++)
                            i.push(n * r);
                    return i[t];
                }),
                    (a.incrementWrap = function (t, n, r) {
                        return (r = e(r, 0)), ++t, t > n && (t = r), t;
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
                    (a.clamp = function (t, e, n) {
                        return t < e ? e : t > n ? n : t;
                    });
                var o = new t();
                return (
                    (a.setRandomNumberSeed = function (e) {
                        o = new t(e);
                    }),
                    (a.nextRandomNumber = function () {
                        return o.random();
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
                        var n = t * e;
                        return 1 - Math.exp(-n * n);
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
            function (t, e, n, r, a, i) {
                'use strict';
                function o(t, n, r) {
                    (this.x = e(t, 0)), (this.y = e(n, 0)), (this.z = e(r, 0));
                }
                (o.fromSpherical = function (t, r) {
                    n(r) || (r = new o());
                    var a = t.clock,
                        i = t.cone,
                        u = e(t.magnitude, 1),
                        E = u * Math.sin(i);
                    return (
                        (r.x = E * Math.cos(a)),
                        (r.y = E * Math.sin(a)),
                        (r.z = u * Math.cos(i)),
                        r
                    );
                }),
                    (o.fromElements = function (t, e, r, a) {
                        return n(a)
                            ? ((a.x = t), (a.y = e), (a.z = r), a)
                            : new o(t, e, r);
                    }),
                    (o.clone = function (t, e) {
                        if (n(t))
                            return n(e)
                                ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), e)
                                : new o(t.x, t.y, t.z);
                    }),
                    (o.fromCartesian4 = o.clone),
                    (o.packedLength = 3),
                    (o.pack = function (t, n, r) {
                        return (
                            (r = e(r, 0)),
                            (n[r++] = t.x),
                            (n[r++] = t.y),
                            (n[r] = t.z),
                            n
                        );
                    }),
                    (o.unpack = function (t, r, a) {
                        return (
                            (r = e(r, 0)),
                            n(a) || (a = new o()),
                            (a.x = t[r++]),
                            (a.y = t[r++]),
                            (a.z = t[r]),
                            a
                        );
                    }),
                    (o.packArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = 3 * r) : (e = new Array(3 * r));
                        for (var a = 0; a < r; ++a) o.pack(t[a], e, 3 * a);
                        return e;
                    }),
                    (o.unpackArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = r / 3) : (e = new Array(r / 3));
                        for (var a = 0; a < r; a += 3) {
                            var i = a / 3;
                            e[i] = o.unpack(t, a, e[i]);
                        }
                        return e;
                    }),
                    (o.fromArray = o.unpack),
                    (o.maximumComponent = function (t) {
                        return Math.max(t.x, t.y, t.z);
                    }),
                    (o.minimumComponent = function (t) {
                        return Math.min(t.x, t.y, t.z);
                    }),
                    (o.minimumByComponent = function (t, e, n) {
                        return (
                            (n.x = Math.min(t.x, e.x)),
                            (n.y = Math.min(t.y, e.y)),
                            (n.z = Math.min(t.z, e.z)),
                            n
                        );
                    }),
                    (o.maximumByComponent = function (t, e, n) {
                        return (
                            (n.x = Math.max(t.x, e.x)),
                            (n.y = Math.max(t.y, e.y)),
                            (n.z = Math.max(t.z, e.z)),
                            n
                        );
                    }),
                    (o.magnitudeSquared = function (t) {
                        return t.x * t.x + t.y * t.y + t.z * t.z;
                    }),
                    (o.magnitude = function (t) {
                        return Math.sqrt(o.magnitudeSquared(t));
                    });
                var u = new o();
                (o.distance = function (t, e) {
                    return o.subtract(t, e, u), o.magnitude(u);
                }),
                    (o.distanceSquared = function (t, e) {
                        return o.subtract(t, e, u), o.magnitudeSquared(u);
                    }),
                    (o.normalize = function (t, e) {
                        var n = o.magnitude(t);
                        return (
                            (e.x = t.x / n), (e.y = t.y / n), (e.z = t.z / n), e
                        );
                    }),
                    (o.dot = function (t, e) {
                        return t.x * e.x + t.y * e.y + t.z * e.z;
                    }),
                    (o.multiplyComponents = function (t, e, n) {
                        return (
                            (n.x = t.x * e.x),
                            (n.y = t.y * e.y),
                            (n.z = t.z * e.z),
                            n
                        );
                    }),
                    (o.divideComponents = function (t, e, n) {
                        return (
                            (n.x = t.x / e.x),
                            (n.y = t.y / e.y),
                            (n.z = t.z / e.z),
                            n
                        );
                    }),
                    (o.add = function (t, e, n) {
                        return (
                            (n.x = t.x + e.x),
                            (n.y = t.y + e.y),
                            (n.z = t.z + e.z),
                            n
                        );
                    }),
                    (o.subtract = function (t, e, n) {
                        return (
                            (n.x = t.x - e.x),
                            (n.y = t.y - e.y),
                            (n.z = t.z - e.z),
                            n
                        );
                    }),
                    (o.multiplyByScalar = function (t, e, n) {
                        return (
                            (n.x = t.x * e), (n.y = t.y * e), (n.z = t.z * e), n
                        );
                    }),
                    (o.divideByScalar = function (t, e, n) {
                        return (
                            (n.x = t.x / e), (n.y = t.y / e), (n.z = t.z / e), n
                        );
                    }),
                    (o.negate = function (t, e) {
                        return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), e;
                    }),
                    (o.abs = function (t, e) {
                        return (
                            (e.x = Math.abs(t.x)),
                            (e.y = Math.abs(t.y)),
                            (e.z = Math.abs(t.z)),
                            e
                        );
                    });
                var E = new o();
                o.lerp = function (t, e, n, r) {
                    return (
                        o.multiplyByScalar(e, n, E),
                        (r = o.multiplyByScalar(t, 1 - n, r)),
                        o.add(E, r, r)
                    );
                };
                var s = new o(),
                    c = new o();
                o.angleBetween = function (t, e) {
                    o.normalize(t, s), o.normalize(e, c);
                    var n = o.dot(s, c),
                        r = o.magnitude(o.cross(s, c, s));
                    return Math.atan2(r, n);
                };
                var _ = new o();
                (o.mostOrthogonalAxis = function (t, e) {
                    var n = o.normalize(t, _);
                    return (
                        o.abs(n, n),
                        (e =
                            n.x <= n.y
                                ? n.x <= n.z
                                    ? o.clone(o.UNIT_X, e)
                                    : o.clone(o.UNIT_Z, e)
                                : n.y <= n.z
                                  ? o.clone(o.UNIT_Y, e)
                                  : o.clone(o.UNIT_Z, e))
                    );
                }),
                    (o.equals = function (t, e) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                t.x === e.x &&
                                t.y === e.y &&
                                t.z === e.z)
                        );
                    }),
                    (o.equalsArray = function (t, e, n) {
                        return (
                            t.x === e[n] && t.y === e[n + 1] && t.z === e[n + 2]
                        );
                    }),
                    (o.equalsEpsilon = function (t, e, r, a) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                i.equalsEpsilon(t.x, e.x, r, a) &&
                                i.equalsEpsilon(t.y, e.y, r, a) &&
                                i.equalsEpsilon(t.z, e.z, r, a))
                        );
                    }),
                    (o.cross = function (t, e, n) {
                        var r = t.x,
                            a = t.y,
                            i = t.z,
                            o = e.x,
                            u = e.y,
                            E = e.z,
                            s = a * E - i * u,
                            c = i * o - r * E,
                            _ = r * u - a * o;
                        return (n.x = s), (n.y = c), (n.z = _), n;
                    }),
                    (o.fromDegrees = function (t, e, n, r, a) {
                        return (
                            (t = i.toRadians(t)),
                            (e = i.toRadians(e)),
                            o.fromRadians(t, e, n, r, a)
                        );
                    });
                var T = new o(),
                    R = new o(),
                    l = new o(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (o.fromRadians = function (t, r, a, i, u) {
                        a = e(a, 0);
                        var E = n(i) ? i.radiiSquared : l,
                            s = Math.cos(r);
                        (T.x = s * Math.cos(t)),
                            (T.y = s * Math.sin(t)),
                            (T.z = Math.sin(r)),
                            (T = o.normalize(T, T)),
                            o.multiplyComponents(E, T, R);
                        var c = Math.sqrt(o.dot(T, R));
                        return (
                            (R = o.divideByScalar(R, c, R)),
                            (T = o.multiplyByScalar(T, a, T)),
                            n(u) || (u = new o()),
                            o.add(R, T, u)
                        );
                    }),
                    (o.fromDegreesArray = function (t, e, r) {
                        var a = t.length;
                        n(r) ? (r.length = a / 2) : (r = new Array(a / 2));
                        for (var i = 0; i < a; i += 2) {
                            var u = t[i],
                                E = t[i + 1],
                                s = i / 2;
                            r[s] = o.fromDegrees(u, E, 0, e, r[s]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArray = function (t, e, r) {
                        var a = t.length;
                        n(r) ? (r.length = a / 2) : (r = new Array(a / 2));
                        for (var i = 0; i < a; i += 2) {
                            var u = t[i],
                                E = t[i + 1],
                                s = i / 2;
                            r[s] = o.fromRadians(u, E, 0, e, r[s]);
                        }
                        return r;
                    }),
                    (o.fromDegreesArrayHeights = function (t, e, r) {
                        var a = t.length;
                        n(r) ? (r.length = a / 3) : (r = new Array(a / 3));
                        for (var i = 0; i < a; i += 3) {
                            var u = t[i],
                                E = t[i + 1],
                                s = t[i + 2],
                                c = i / 3;
                            r[c] = o.fromDegrees(u, E, s, e, r[c]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArrayHeights = function (t, e, r) {
                        var a = t.length;
                        n(r) ? (r.length = a / 3) : (r = new Array(a / 3));
                        for (var i = 0; i < a; i += 3) {
                            var u = t[i],
                                E = t[i + 1],
                                s = t[i + 2],
                                c = i / 3;
                            r[c] = o.fromRadians(u, E, s, e, r[c]);
                        }
                        return r;
                    }),
                    (o.ZERO = a(new o(0, 0, 0))),
                    (o.UNIT_X = a(new o(1, 0, 0))),
                    (o.UNIT_Y = a(new o(0, 1, 0))),
                    (o.UNIT_Z = a(new o(0, 0, 1))),
                    (o.prototype.clone = function (t) {
                        return o.clone(this, t);
                    }),
                    (o.prototype.equals = function (t) {
                        return o.equals(this, t);
                    }),
                    (o.prototype.equalsEpsilon = function (t, e, n) {
                        return o.equalsEpsilon(this, t, e, n);
                    }),
                    (o.prototype.toString = function () {
                        return (
                            '(' + this.x + ', ' + this.y + ', ' + this.z + ')'
                        );
                    }),
                    o
                );
            },
        ),
        define(
            'Core/scaleToGeodeticSurface',
            ['./Cartesian3', './defined', './DeveloperError', './Math'],
            function (t, e, n, r) {
                'use strict';
                function a(n, a, u, E, s) {
                    var c = n.x,
                        _ = n.y,
                        T = n.z,
                        R = a.x,
                        l = a.y,
                        f = a.z,
                        A = c * c * R * R,
                        h = _ * _ * l * l,
                        N = T * T * f * f,
                        d = A + h + N,
                        I = Math.sqrt(1 / d),
                        S = t.multiplyByScalar(n, I, i);
                    if (d < E) return isFinite(I) ? t.clone(S, s) : void 0;
                    var m = u.x,
                        O = u.y,
                        M = u.z,
                        y = o;
                    (y.x = S.x * m * 2),
                        (y.y = S.y * O * 2),
                        (y.z = S.z * M * 2);
                    var p,
                        C,
                        U,
                        L,
                        F,
                        P,
                        g,
                        w,
                        v,
                        x,
                        D,
                        B = ((1 - I) * t.magnitude(n)) / (0.5 * t.magnitude(y)),
                        z = 0;
                    do {
                        (B -= z),
                            (U = 1 / (1 + B * m)),
                            (L = 1 / (1 + B * O)),
                            (F = 1 / (1 + B * M)),
                            (P = U * U),
                            (g = L * L),
                            (w = F * F),
                            (v = P * U),
                            (x = g * L),
                            (D = w * F),
                            (p = A * P + h * g + N * w - 1),
                            (C = A * v * m + h * x * O + N * D * M);
                        z = p / (-2 * C);
                    } while (Math.abs(p) > r.EPSILON12);
                    return e(s)
                        ? ((s.x = c * U), (s.y = _ * L), (s.z = T * F), s)
                        : new t(c * U, _ * L, T * F);
                }
                var i = new t(),
                    o = new t();
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
            function (t, e, n, r, a, i, o) {
                'use strict';
                function u(t, e, r) {
                    (this.longitude = n(t, 0)),
                        (this.latitude = n(e, 0)),
                        (this.height = n(r, 0));
                }
                (u.fromRadians = function (t, e, a, i) {
                    return (
                        (a = n(a, 0)),
                        r(i)
                            ? ((i.longitude = t),
                              (i.latitude = e),
                              (i.height = a),
                              i)
                            : new u(t, e, a)
                    );
                }),
                    (u.fromDegrees = function (t, e, n, r) {
                        return (
                            (t = i.toRadians(t)),
                            (e = i.toRadians(e)),
                            u.fromRadians(t, e, n, r)
                        );
                    });
                var E = new t(),
                    s = new t(),
                    c = new t(),
                    _ = new t(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                    T = new t(
                        1 / 40680631590769,
                        1 / 40680631590769,
                        1 / 40408299984661.445,
                    ),
                    R = i.EPSILON1;
                return (
                    (u.fromCartesian = function (e, n, a) {
                        var l = r(n) ? n.oneOverRadii : _,
                            f = r(n) ? n.oneOverRadiiSquared : T,
                            A = r(n) ? n._centerToleranceSquared : R,
                            h = o(e, l, f, A, s);
                        if (r(h)) {
                            var N = t.multiplyComponents(h, f, E);
                            N = t.normalize(N, N);
                            var d = t.subtract(e, h, c),
                                I = Math.atan2(N.y, N.x),
                                S = Math.asin(N.z),
                                m = i.sign(t.dot(d, e)) * t.magnitude(d);
                            return r(a)
                                ? ((a.longitude = I),
                                  (a.latitude = S),
                                  (a.height = m),
                                  a)
                                : new u(I, S, m);
                        }
                    }),
                    (u.clone = function (t, e) {
                        if (r(t))
                            return r(e)
                                ? ((e.longitude = t.longitude),
                                  (e.latitude = t.latitude),
                                  (e.height = t.height),
                                  e)
                                : new u(t.longitude, t.latitude, t.height);
                    }),
                    (u.equals = function (t, e) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                t.longitude === e.longitude &&
                                t.latitude === e.latitude &&
                                t.height === e.height)
                        );
                    }),
                    (u.equalsEpsilon = function (t, e, n) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                Math.abs(t.longitude - e.longitude) <= n &&
                                Math.abs(t.latitude - e.latitude) <= n &&
                                Math.abs(t.height - e.height) <= n)
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
                n = Object.defineProperties;
            return (
                (e && t(n)) ||
                    (n = function (t) {
                        return t;
                    }),
                n
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
            function (t, e, n, r, a, i, o, u, E, s) {
                'use strict';
                function c(e, n, a, i) {
                    (n = r(n, 0)),
                        (a = r(a, 0)),
                        (i = r(i, 0)),
                        (e._radii = new t(n, a, i)),
                        (e._radiiSquared = new t(n * n, a * a, i * i)),
                        (e._radiiToTheFourth = new t(
                            n * n * n * n,
                            a * a * a * a,
                            i * i * i * i,
                        )),
                        (e._oneOverRadii = new t(
                            0 === n ? 0 : 1 / n,
                            0 === a ? 0 : 1 / a,
                            0 === i ? 0 : 1 / i,
                        )),
                        (e._oneOverRadiiSquared = new t(
                            0 === n ? 0 : 1 / (n * n),
                            0 === a ? 0 : 1 / (a * a),
                            0 === i ? 0 : 1 / (i * i),
                        )),
                        (e._minimumRadius = Math.min(n, a, i)),
                        (e._maximumRadius = Math.max(n, a, i)),
                        (e._centerToleranceSquared = E.EPSILON1),
                        0 !== e._radiiSquared.z &&
                            (e._squaredXOverSquaredZ =
                                e._radiiSquared.x / e._radiiSquared.z);
                }
                function _(t, e, n) {
                    (this._radii = void 0),
                        (this._radiiSquared = void 0),
                        (this._radiiToTheFourth = void 0),
                        (this._oneOverRadii = void 0),
                        (this._oneOverRadiiSquared = void 0),
                        (this._minimumRadius = void 0),
                        (this._maximumRadius = void 0),
                        (this._centerToleranceSquared = void 0),
                        (this._squaredXOverSquaredZ = void 0),
                        c(this, t, e, n);
                }
                i(_.prototype, {
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
                    (_.clone = function (e, n) {
                        if (a(e)) {
                            var r = e._radii;
                            return a(n)
                                ? (t.clone(r, n._radii),
                                  t.clone(e._radiiSquared, n._radiiSquared),
                                  t.clone(
                                      e._radiiToTheFourth,
                                      n._radiiToTheFourth,
                                  ),
                                  t.clone(e._oneOverRadii, n._oneOverRadii),
                                  t.clone(
                                      e._oneOverRadiiSquared,
                                      n._oneOverRadiiSquared,
                                  ),
                                  (n._minimumRadius = e._minimumRadius),
                                  (n._maximumRadius = e._maximumRadius),
                                  (n._centerToleranceSquared =
                                      e._centerToleranceSquared),
                                  n)
                                : new _(r.x, r.y, r.z);
                        }
                    }),
                    (_.fromCartesian3 = function (t, e) {
                        return (
                            a(e) || (e = new _()),
                            a(t) ? (c(e, t.x, t.y, t.z), e) : e
                        );
                    }),
                    (_.WGS84 = u(new _(6378137, 6378137, 6356752.314245179))),
                    (_.UNIT_SPHERE = u(new _(1, 1, 1))),
                    (_.MOON = u(
                        new _(E.LUNAR_RADIUS, E.LUNAR_RADIUS, E.LUNAR_RADIUS),
                    )),
                    (_.prototype.clone = function (t) {
                        return _.clone(this, t);
                    }),
                    (_.packedLength = t.packedLength),
                    (_.pack = function (e, n, a) {
                        return (a = r(a, 0)), t.pack(e._radii, n, a), n;
                    }),
                    (_.unpack = function (e, n, a) {
                        n = r(n, 0);
                        var i = t.unpack(e, n);
                        return _.fromCartesian3(i, a);
                    }),
                    (_.prototype.geocentricSurfaceNormal = t.normalize),
                    (_.prototype.geodeticSurfaceNormalCartographic = function (
                        e,
                        n,
                    ) {
                        var r = e.longitude,
                            i = e.latitude,
                            o = Math.cos(i),
                            u = o * Math.cos(r),
                            E = o * Math.sin(r),
                            s = Math.sin(i);
                        return (
                            a(n) || (n = new t()),
                            (n.x = u),
                            (n.y = E),
                            (n.z = s),
                            t.normalize(n, n)
                        );
                    }),
                    (_.prototype.geodeticSurfaceNormal = function (e, n) {
                        return (
                            a(n) || (n = new t()),
                            (n = t.multiplyComponents(
                                e,
                                this._oneOverRadiiSquared,
                                n,
                            )),
                            t.normalize(n, n)
                        );
                    });
                var T = new t(),
                    R = new t();
                (_.prototype.cartographicToCartesian = function (e, n) {
                    var r = T,
                        i = R;
                    this.geodeticSurfaceNormalCartographic(e, r),
                        t.multiplyComponents(this._radiiSquared, r, i);
                    var o = Math.sqrt(t.dot(r, i));
                    return (
                        t.divideByScalar(i, o, i),
                        t.multiplyByScalar(r, e.height, r),
                        a(n) || (n = new t()),
                        t.add(i, r, n)
                    );
                }),
                    (_.prototype.cartographicArrayToCartesianArray = function (
                        t,
                        e,
                    ) {
                        var n = t.length;
                        a(e) ? (e.length = n) : (e = new Array(n));
                        for (var r = 0; r < n; r++)
                            e[r] = this.cartographicToCartesian(t[r], e[r]);
                        return e;
                    });
                var l = new t(),
                    f = new t(),
                    A = new t();
                return (
                    (_.prototype.cartesianToCartographic = function (n, r) {
                        var i = this.scaleToGeodeticSurface(n, f);
                        if (a(i)) {
                            var o = this.geodeticSurfaceNormal(i, l),
                                u = t.subtract(n, i, A),
                                s = Math.atan2(o.y, o.x),
                                c = Math.asin(o.z),
                                _ = E.sign(t.dot(u, n)) * t.magnitude(u);
                            return a(r)
                                ? ((r.longitude = s),
                                  (r.latitude = c),
                                  (r.height = _),
                                  r)
                                : new e(s, c, _);
                        }
                    }),
                    (_.prototype.cartesianArrayToCartographicArray = function (
                        t,
                        e,
                    ) {
                        var n = t.length;
                        a(e) ? (e.length = n) : (e = new Array(n));
                        for (var r = 0; r < n; ++r)
                            e[r] = this.cartesianToCartographic(t[r], e[r]);
                        return e;
                    }),
                    (_.prototype.scaleToGeodeticSurface = function (t, e) {
                        return s(
                            t,
                            this._oneOverRadii,
                            this._oneOverRadiiSquared,
                            this._centerToleranceSquared,
                            e,
                        );
                    }),
                    (_.prototype.scaleToGeocentricSurface = function (e, n) {
                        a(n) || (n = new t());
                        var r = e.x,
                            i = e.y,
                            o = e.z,
                            u = this._oneOverRadiiSquared,
                            E =
                                1 /
                                Math.sqrt(
                                    r * r * u.x + i * i * u.y + o * o * u.z,
                                );
                        return t.multiplyByScalar(e, E, n);
                    }),
                    (_.prototype.transformPositionToScaledSpace = function (
                        e,
                        n,
                    ) {
                        return (
                            a(n) || (n = new t()),
                            t.multiplyComponents(e, this._oneOverRadii, n)
                        );
                    }),
                    (_.prototype.transformPositionFromScaledSpace = function (
                        e,
                        n,
                    ) {
                        return (
                            a(n) || (n = new t()),
                            t.multiplyComponents(e, this._radii, n)
                        );
                    }),
                    (_.prototype.equals = function (e) {
                        return (
                            this === e ||
                            (a(e) && t.equals(this._radii, e._radii))
                        );
                    }),
                    (_.prototype.toString = function () {
                        return this._radii.toString();
                    }),
                    (_.prototype.getSurfaceNormalIntersectionWithZAxis =
                        function (e, n, i) {
                            n = r(n, 0);
                            var o = this._squaredXOverSquaredZ;
                            if (
                                (a(i) || (i = new t()),
                                (i.x = 0),
                                (i.y = 0),
                                (i.z = e.z * (1 - o)),
                                !(Math.abs(i.z) >= this._radii.z - n))
                            )
                                return i;
                        }),
                    _
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
            function (t, e, n, r, a, i, o) {
                'use strict';
                function u(t) {
                    (this._ellipsoid = n(t, o.WGS84)),
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
                    (u.prototype.project = function (e, n) {
                        var a = this._semimajorAxis,
                            i = e.longitude * a,
                            o = e.latitude * a,
                            u = e.height;
                        return r(n)
                            ? ((n.x = i), (n.y = o), (n.z = u), n)
                            : new t(i, o, u);
                    }),
                    (u.prototype.unproject = function (t, n) {
                        var a = this._oneOverSemimajorAxis,
                            i = t.x * a,
                            o = t.y * a,
                            u = t.z;
                        return r(n)
                            ? ((n.longitude = i),
                              (n.latitude = o),
                              (n.height = u),
                              n)
                            : new e(i, o, u);
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
            function e(e, n) {
                (this.start = t(e, 0)), (this.stop = t(n, 0));
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
            function (t, e, n, r, a, i, o, u) {
                'use strict';
                function E(t, e, r, a, i, o, u, E, s) {
                    (this[0] = n(t, 0)),
                        (this[1] = n(a, 0)),
                        (this[2] = n(u, 0)),
                        (this[3] = n(e, 0)),
                        (this[4] = n(i, 0)),
                        (this[5] = n(E, 0)),
                        (this[6] = n(r, 0)),
                        (this[7] = n(o, 0)),
                        (this[8] = n(s, 0));
                }
                function s(t) {
                    for (var e = 0, n = 0; n < 9; ++n) {
                        var r = t[n];
                        e += r * r;
                    }
                    return Math.sqrt(e);
                }
                function c(t) {
                    for (var e = 0, n = 0; n < 3; ++n) {
                        var r = t[E.getElementIndex(f[n], l[n])];
                        e += 2 * r * r;
                    }
                    return Math.sqrt(e);
                }
                function _(t, e) {
                    for (var n = u.EPSILON15, r = 0, a = 1, i = 0; i < 3; ++i) {
                        var o = Math.abs(t[E.getElementIndex(f[i], l[i])]);
                        o > r && ((a = i), (r = o));
                    }
                    var s = 1,
                        c = 0,
                        _ = l[a],
                        T = f[a];
                    if (Math.abs(t[E.getElementIndex(T, _)]) > n) {
                        var R,
                            A = t[E.getElementIndex(T, T)],
                            h = t[E.getElementIndex(_, _)],
                            N = t[E.getElementIndex(T, _)],
                            d = (A - h) / 2 / N;
                        (R =
                            d < 0
                                ? -1 / (-d + Math.sqrt(1 + d * d))
                                : 1 / (d + Math.sqrt(1 + d * d))),
                            (s = 1 / Math.sqrt(1 + R * R)),
                            (c = R * s);
                    }
                    return (
                        (e = E.clone(E.IDENTITY, e)),
                        (e[E.getElementIndex(_, _)] = e[
                            E.getElementIndex(T, T)
                        ] =
                            s),
                        (e[E.getElementIndex(T, _)] = c),
                        (e[E.getElementIndex(_, T)] = -c),
                        e
                    );
                }
                (E.packedLength = 9),
                    (E.pack = function (t, e, r) {
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
                            e
                        );
                    }),
                    (E.unpack = function (t, e, a) {
                        return (
                            (e = n(e, 0)),
                            r(a) || (a = new E()),
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
                    (E.clone = function (t, e) {
                        if (r(t))
                            return r(e)
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
                                : new E(
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
                    (E.fromArray = function (t, e, a) {
                        return (
                            (e = n(e, 0)),
                            r(a) || (a = new E()),
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
                    (E.fromColumnMajorArray = function (t, e) {
                        return E.clone(t, e);
                    }),
                    (E.fromRowMajorArray = function (t, e) {
                        return r(e)
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
                            : new E(
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
                    (E.fromQuaternion = function (t, e) {
                        var n = t.x * t.x,
                            a = t.x * t.y,
                            i = t.x * t.z,
                            o = t.x * t.w,
                            u = t.y * t.y,
                            s = t.y * t.z,
                            c = t.y * t.w,
                            _ = t.z * t.z,
                            T = t.z * t.w,
                            R = t.w * t.w,
                            l = n - u - _ + R,
                            f = 2 * (a - T),
                            A = 2 * (i + c),
                            h = 2 * (a + T),
                            N = -n + u - _ + R,
                            d = 2 * (s - o),
                            I = 2 * (i - c),
                            S = 2 * (s + o),
                            m = -n - u + _ + R;
                        return r(e)
                            ? ((e[0] = l),
                              (e[1] = h),
                              (e[2] = I),
                              (e[3] = f),
                              (e[4] = N),
                              (e[5] = S),
                              (e[6] = A),
                              (e[7] = d),
                              (e[8] = m),
                              e)
                            : new E(l, f, A, h, N, d, I, S, m);
                    }),
                    (E.fromHeadingPitchRoll = function (t, e) {
                        var n = Math.cos(-t.pitch),
                            a = Math.cos(-t.heading),
                            i = Math.cos(t.roll),
                            o = Math.sin(-t.pitch),
                            u = Math.sin(-t.heading),
                            s = Math.sin(t.roll),
                            c = n * a,
                            _ = -i * u + s * o * a,
                            T = s * u + i * o * a,
                            R = n * u,
                            l = i * a + s * o * u,
                            f = -s * a + i * o * u,
                            A = -o,
                            h = s * n,
                            N = i * n;
                        return r(e)
                            ? ((e[0] = c),
                              (e[1] = R),
                              (e[2] = A),
                              (e[3] = _),
                              (e[4] = l),
                              (e[5] = h),
                              (e[6] = T),
                              (e[7] = f),
                              (e[8] = N),
                              e)
                            : new E(c, _, T, R, l, f, A, h, N);
                    }),
                    (E.fromScale = function (t, e) {
                        return r(e)
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
                            : new E(t.x, 0, 0, 0, t.y, 0, 0, 0, t.z);
                    }),
                    (E.fromUniformScale = function (t, e) {
                        return r(e)
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
                            : new E(t, 0, 0, 0, t, 0, 0, 0, t);
                    }),
                    (E.fromCrossProduct = function (t, e) {
                        return r(e)
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
                            : new E(0, -t.z, t.y, t.z, 0, -t.x, -t.y, t.x, 0);
                    }),
                    (E.fromRotationX = function (t, e) {
                        var n = Math.cos(t),
                            a = Math.sin(t);
                        return r(e)
                            ? ((e[0] = 1),
                              (e[1] = 0),
                              (e[2] = 0),
                              (e[3] = 0),
                              (e[4] = n),
                              (e[5] = a),
                              (e[6] = 0),
                              (e[7] = -a),
                              (e[8] = n),
                              e)
                            : new E(1, 0, 0, 0, n, -a, 0, a, n);
                    }),
                    (E.fromRotationY = function (t, e) {
                        var n = Math.cos(t),
                            a = Math.sin(t);
                        return r(e)
                            ? ((e[0] = n),
                              (e[1] = 0),
                              (e[2] = -a),
                              (e[3] = 0),
                              (e[4] = 1),
                              (e[5] = 0),
                              (e[6] = a),
                              (e[7] = 0),
                              (e[8] = n),
                              e)
                            : new E(n, 0, a, 0, 1, 0, -a, 0, n);
                    }),
                    (E.fromRotationZ = function (t, e) {
                        var n = Math.cos(t),
                            a = Math.sin(t);
                        return r(e)
                            ? ((e[0] = n),
                              (e[1] = a),
                              (e[2] = 0),
                              (e[3] = -a),
                              (e[4] = n),
                              (e[5] = 0),
                              (e[6] = 0),
                              (e[7] = 0),
                              (e[8] = 1),
                              e)
                            : new E(n, -a, 0, a, n, 0, 0, 0, 1);
                    }),
                    (E.toArray = function (t, e) {
                        return r(e)
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
                    (E.getElementIndex = function (t, e) {
                        return 3 * t + e;
                    }),
                    (E.getColumn = function (t, e, n) {
                        var r = 3 * e,
                            a = t[r],
                            i = t[r + 1],
                            o = t[r + 2];
                        return (n.x = a), (n.y = i), (n.z = o), n;
                    }),
                    (E.setColumn = function (t, e, n, r) {
                        r = E.clone(t, r);
                        var a = 3 * e;
                        return (
                            (r[a] = n.x), (r[a + 1] = n.y), (r[a + 2] = n.z), r
                        );
                    }),
                    (E.getRow = function (t, e, n) {
                        var r = t[e],
                            a = t[e + 3],
                            i = t[e + 6];
                        return (n.x = r), (n.y = a), (n.z = i), n;
                    }),
                    (E.setRow = function (t, e, n, r) {
                        return (
                            (r = E.clone(t, r)),
                            (r[e] = n.x),
                            (r[e + 3] = n.y),
                            (r[e + 6] = n.z),
                            r
                        );
                    });
                var T = new t();
                E.getScale = function (e, n) {
                    return (
                        (n.x = t.magnitude(
                            t.fromElements(e[0], e[1], e[2], T),
                        )),
                        (n.y = t.magnitude(
                            t.fromElements(e[3], e[4], e[5], T),
                        )),
                        (n.z = t.magnitude(
                            t.fromElements(e[6], e[7], e[8], T),
                        )),
                        n
                    );
                };
                var R = new t();
                (E.getMaximumScale = function (e) {
                    return E.getScale(e, R), t.maximumComponent(R);
                }),
                    (E.multiply = function (t, e, n) {
                        var r = t[0] * e[0] + t[3] * e[1] + t[6] * e[2],
                            a = t[1] * e[0] + t[4] * e[1] + t[7] * e[2],
                            i = t[2] * e[0] + t[5] * e[1] + t[8] * e[2],
                            o = t[0] * e[3] + t[3] * e[4] + t[6] * e[5],
                            u = t[1] * e[3] + t[4] * e[4] + t[7] * e[5],
                            E = t[2] * e[3] + t[5] * e[4] + t[8] * e[5],
                            s = t[0] * e[6] + t[3] * e[7] + t[6] * e[8],
                            c = t[1] * e[6] + t[4] * e[7] + t[7] * e[8],
                            _ = t[2] * e[6] + t[5] * e[7] + t[8] * e[8];
                        return (
                            (n[0] = r),
                            (n[1] = a),
                            (n[2] = i),
                            (n[3] = o),
                            (n[4] = u),
                            (n[5] = E),
                            (n[6] = s),
                            (n[7] = c),
                            (n[8] = _),
                            n
                        );
                    }),
                    (E.add = function (t, e, n) {
                        return (
                            (n[0] = t[0] + e[0]),
                            (n[1] = t[1] + e[1]),
                            (n[2] = t[2] + e[2]),
                            (n[3] = t[3] + e[3]),
                            (n[4] = t[4] + e[4]),
                            (n[5] = t[5] + e[5]),
                            (n[6] = t[6] + e[6]),
                            (n[7] = t[7] + e[7]),
                            (n[8] = t[8] + e[8]),
                            n
                        );
                    }),
                    (E.subtract = function (t, e, n) {
                        return (
                            (n[0] = t[0] - e[0]),
                            (n[1] = t[1] - e[1]),
                            (n[2] = t[2] - e[2]),
                            (n[3] = t[3] - e[3]),
                            (n[4] = t[4] - e[4]),
                            (n[5] = t[5] - e[5]),
                            (n[6] = t[6] - e[6]),
                            (n[7] = t[7] - e[7]),
                            (n[8] = t[8] - e[8]),
                            n
                        );
                    }),
                    (E.multiplyByVector = function (t, e, n) {
                        var r = e.x,
                            a = e.y,
                            i = e.z,
                            o = t[0] * r + t[3] * a + t[6] * i,
                            u = t[1] * r + t[4] * a + t[7] * i,
                            E = t[2] * r + t[5] * a + t[8] * i;
                        return (n.x = o), (n.y = u), (n.z = E), n;
                    }),
                    (E.multiplyByScalar = function (t, e, n) {
                        return (
                            (n[0] = t[0] * e),
                            (n[1] = t[1] * e),
                            (n[2] = t[2] * e),
                            (n[3] = t[3] * e),
                            (n[4] = t[4] * e),
                            (n[5] = t[5] * e),
                            (n[6] = t[6] * e),
                            (n[7] = t[7] * e),
                            (n[8] = t[8] * e),
                            n
                        );
                    }),
                    (E.multiplyByScale = function (t, e, n) {
                        return (
                            (n[0] = t[0] * e.x),
                            (n[1] = t[1] * e.x),
                            (n[2] = t[2] * e.x),
                            (n[3] = t[3] * e.y),
                            (n[4] = t[4] * e.y),
                            (n[5] = t[5] * e.y),
                            (n[6] = t[6] * e.z),
                            (n[7] = t[7] * e.z),
                            (n[8] = t[8] * e.z),
                            n
                        );
                    }),
                    (E.negate = function (t, e) {
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
                    (E.transpose = function (t, e) {
                        var n = t[0],
                            r = t[3],
                            a = t[6],
                            i = t[1],
                            o = t[4],
                            u = t[7],
                            E = t[2],
                            s = t[5],
                            c = t[8];
                        return (
                            (e[0] = n),
                            (e[1] = r),
                            (e[2] = a),
                            (e[3] = i),
                            (e[4] = o),
                            (e[5] = u),
                            (e[6] = E),
                            (e[7] = s),
                            (e[8] = c),
                            e
                        );
                    });
                var l = [1, 0, 0],
                    f = [2, 2, 1],
                    A = new E(),
                    h = new E();
                return (
                    (E.computeEigenDecomposition = function (t, e) {
                        var n = u.EPSILON20,
                            a = 0,
                            i = 0;
                        r(e) || (e = {});
                        for (
                            var o = (e.unitary = E.clone(
                                    E.IDENTITY,
                                    e.unitary,
                                )),
                                T = (e.diagonal = E.clone(t, e.diagonal)),
                                R = n * s(T);
                            i < 10 && c(T) > R;

                        )
                            _(T, A),
                                E.transpose(A, h),
                                E.multiply(T, A, T),
                                E.multiply(h, T, T),
                                E.multiply(o, A, o),
                                ++a > 2 && (++i, (a = 0));
                        return e;
                    }),
                    (E.abs = function (t, e) {
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
                    (E.determinant = function (t) {
                        var e = t[0],
                            n = t[3],
                            r = t[6],
                            a = t[1],
                            i = t[4],
                            o = t[7],
                            u = t[2],
                            E = t[5],
                            s = t[8];
                        return (
                            e * (i * s - E * o) +
                            a * (E * r - n * s) +
                            u * (n * o - i * r)
                        );
                    }),
                    (E.inverse = function (t, e) {
                        var n = t[0],
                            r = t[1],
                            a = t[2],
                            i = t[3],
                            o = t[4],
                            u = t[5],
                            s = t[6],
                            c = t[7],
                            _ = t[8],
                            T = E.determinant(t);
                        (e[0] = o * _ - c * u),
                            (e[1] = c * a - r * _),
                            (e[2] = r * u - o * a),
                            (e[3] = s * u - i * _),
                            (e[4] = n * _ - s * a),
                            (e[5] = i * a - n * u),
                            (e[6] = i * c - s * o),
                            (e[7] = s * r - n * c),
                            (e[8] = n * o - i * r);
                        var R = 1 / T;
                        return E.multiplyByScalar(e, R, e);
                    }),
                    (E.equals = function (t, e) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
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
                    (E.equalsEpsilon = function (t, e, n) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                Math.abs(t[0] - e[0]) <= n &&
                                Math.abs(t[1] - e[1]) <= n &&
                                Math.abs(t[2] - e[2]) <= n &&
                                Math.abs(t[3] - e[3]) <= n &&
                                Math.abs(t[4] - e[4]) <= n &&
                                Math.abs(t[5] - e[5]) <= n &&
                                Math.abs(t[6] - e[6]) <= n &&
                                Math.abs(t[7] - e[7]) <= n &&
                                Math.abs(t[8] - e[8]) <= n)
                        );
                    }),
                    (E.IDENTITY = o(new E(1, 0, 0, 0, 1, 0, 0, 0, 1))),
                    (E.ZERO = o(new E(0, 0, 0, 0, 0, 0, 0, 0, 0))),
                    (E.COLUMN0ROW0 = 0),
                    (E.COLUMN0ROW1 = 1),
                    (E.COLUMN0ROW2 = 2),
                    (E.COLUMN1ROW0 = 3),
                    (E.COLUMN1ROW1 = 4),
                    (E.COLUMN1ROW2 = 5),
                    (E.COLUMN2ROW0 = 6),
                    (E.COLUMN2ROW1 = 7),
                    (E.COLUMN2ROW2 = 8),
                    a(E.prototype, {
                        length: {
                            get: function () {
                                return E.packedLength;
                            },
                        },
                    }),
                    (E.prototype.clone = function (t) {
                        return E.clone(this, t);
                    }),
                    (E.prototype.equals = function (t) {
                        return E.equals(this, t);
                    }),
                    (E.equalsArray = function (t, e, n) {
                        return (
                            t[0] === e[n] &&
                            t[1] === e[n + 1] &&
                            t[2] === e[n + 2] &&
                            t[3] === e[n + 3] &&
                            t[4] === e[n + 4] &&
                            t[5] === e[n + 5] &&
                            t[6] === e[n + 6] &&
                            t[7] === e[n + 7] &&
                            t[8] === e[n + 8]
                        );
                    }),
                    (E.prototype.equalsEpsilon = function (t, e) {
                        return E.equalsEpsilon(this, t, e);
                    }),
                    (E.prototype.toString = function () {
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
                    E
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
            function (t, e, n, r, a, i) {
                'use strict';
                function o(t, n, r, a) {
                    (this.x = e(t, 0)),
                        (this.y = e(n, 0)),
                        (this.z = e(r, 0)),
                        (this.w = e(a, 0));
                }
                (o.fromElements = function (t, e, r, a, i) {
                    return n(i)
                        ? ((i.x = t), (i.y = e), (i.z = r), (i.w = a), i)
                        : new o(t, e, r, a);
                }),
                    (o.fromColor = function (t, e) {
                        return n(e)
                            ? ((e.x = t.red),
                              (e.y = t.green),
                              (e.z = t.blue),
                              (e.w = t.alpha),
                              e)
                            : new o(t.red, t.green, t.blue, t.alpha);
                    }),
                    (o.clone = function (t, e) {
                        if (n(t))
                            return n(e)
                                ? ((e.x = t.x),
                                  (e.y = t.y),
                                  (e.z = t.z),
                                  (e.w = t.w),
                                  e)
                                : new o(t.x, t.y, t.z, t.w);
                    }),
                    (o.packedLength = 4),
                    (o.pack = function (t, n, r) {
                        return (
                            (r = e(r, 0)),
                            (n[r++] = t.x),
                            (n[r++] = t.y),
                            (n[r++] = t.z),
                            (n[r] = t.w),
                            n
                        );
                    }),
                    (o.unpack = function (t, r, a) {
                        return (
                            (r = e(r, 0)),
                            n(a) || (a = new o()),
                            (a.x = t[r++]),
                            (a.y = t[r++]),
                            (a.z = t[r++]),
                            (a.w = t[r]),
                            a
                        );
                    }),
                    (o.packArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = 4 * r) : (e = new Array(4 * r));
                        for (var a = 0; a < r; ++a) o.pack(t[a], e, 4 * a);
                        return e;
                    }),
                    (o.unpackArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = r / 4) : (e = new Array(r / 4));
                        for (var a = 0; a < r; a += 4) {
                            var i = a / 4;
                            e[i] = o.unpack(t, a, e[i]);
                        }
                        return e;
                    }),
                    (o.fromArray = o.unpack),
                    (o.maximumComponent = function (t) {
                        return Math.max(t.x, t.y, t.z, t.w);
                    }),
                    (o.minimumComponent = function (t) {
                        return Math.min(t.x, t.y, t.z, t.w);
                    }),
                    (o.minimumByComponent = function (t, e, n) {
                        return (
                            (n.x = Math.min(t.x, e.x)),
                            (n.y = Math.min(t.y, e.y)),
                            (n.z = Math.min(t.z, e.z)),
                            (n.w = Math.min(t.w, e.w)),
                            n
                        );
                    }),
                    (o.maximumByComponent = function (t, e, n) {
                        return (
                            (n.x = Math.max(t.x, e.x)),
                            (n.y = Math.max(t.y, e.y)),
                            (n.z = Math.max(t.z, e.z)),
                            (n.w = Math.max(t.w, e.w)),
                            n
                        );
                    }),
                    (o.magnitudeSquared = function (t) {
                        return t.x * t.x + t.y * t.y + t.z * t.z + t.w * t.w;
                    }),
                    (o.magnitude = function (t) {
                        return Math.sqrt(o.magnitudeSquared(t));
                    });
                var u = new o();
                (o.distance = function (t, e) {
                    return o.subtract(t, e, u), o.magnitude(u);
                }),
                    (o.distanceSquared = function (t, e) {
                        return o.subtract(t, e, u), o.magnitudeSquared(u);
                    }),
                    (o.normalize = function (t, e) {
                        var n = o.magnitude(t);
                        return (
                            (e.x = t.x / n),
                            (e.y = t.y / n),
                            (e.z = t.z / n),
                            (e.w = t.w / n),
                            e
                        );
                    }),
                    (o.dot = function (t, e) {
                        return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w;
                    }),
                    (o.multiplyComponents = function (t, e, n) {
                        return (
                            (n.x = t.x * e.x),
                            (n.y = t.y * e.y),
                            (n.z = t.z * e.z),
                            (n.w = t.w * e.w),
                            n
                        );
                    }),
                    (o.divideComponents = function (t, e, n) {
                        return (
                            (n.x = t.x / e.x),
                            (n.y = t.y / e.y),
                            (n.z = t.z / e.z),
                            (n.w = t.w / e.w),
                            n
                        );
                    }),
                    (o.add = function (t, e, n) {
                        return (
                            (n.x = t.x + e.x),
                            (n.y = t.y + e.y),
                            (n.z = t.z + e.z),
                            (n.w = t.w + e.w),
                            n
                        );
                    }),
                    (o.subtract = function (t, e, n) {
                        return (
                            (n.x = t.x - e.x),
                            (n.y = t.y - e.y),
                            (n.z = t.z - e.z),
                            (n.w = t.w - e.w),
                            n
                        );
                    }),
                    (o.multiplyByScalar = function (t, e, n) {
                        return (
                            (n.x = t.x * e),
                            (n.y = t.y * e),
                            (n.z = t.z * e),
                            (n.w = t.w * e),
                            n
                        );
                    }),
                    (o.divideByScalar = function (t, e, n) {
                        return (
                            (n.x = t.x / e),
                            (n.y = t.y / e),
                            (n.z = t.z / e),
                            (n.w = t.w / e),
                            n
                        );
                    }),
                    (o.negate = function (t, e) {
                        return (
                            (e.x = -t.x),
                            (e.y = -t.y),
                            (e.z = -t.z),
                            (e.w = -t.w),
                            e
                        );
                    }),
                    (o.abs = function (t, e) {
                        return (
                            (e.x = Math.abs(t.x)),
                            (e.y = Math.abs(t.y)),
                            (e.z = Math.abs(t.z)),
                            (e.w = Math.abs(t.w)),
                            e
                        );
                    });
                var E = new o();
                o.lerp = function (t, e, n, r) {
                    return (
                        o.multiplyByScalar(e, n, E),
                        (r = o.multiplyByScalar(t, 1 - n, r)),
                        o.add(E, r, r)
                    );
                };
                var s = new o();
                return (
                    (o.mostOrthogonalAxis = function (t, e) {
                        var n = o.normalize(t, s);
                        return (
                            o.abs(n, n),
                            (e =
                                n.x <= n.y
                                    ? n.x <= n.z
                                        ? n.x <= n.w
                                            ? o.clone(o.UNIT_X, e)
                                            : o.clone(o.UNIT_W, e)
                                        : n.z <= n.w
                                          ? o.clone(o.UNIT_Z, e)
                                          : o.clone(o.UNIT_W, e)
                                    : n.y <= n.z
                                      ? n.y <= n.w
                                          ? o.clone(o.UNIT_Y, e)
                                          : o.clone(o.UNIT_W, e)
                                      : n.z <= n.w
                                        ? o.clone(o.UNIT_Z, e)
                                        : o.clone(o.UNIT_W, e))
                        );
                    }),
                    (o.equals = function (t, e) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                t.x === e.x &&
                                t.y === e.y &&
                                t.z === e.z &&
                                t.w === e.w)
                        );
                    }),
                    (o.equalsArray = function (t, e, n) {
                        return (
                            t.x === e[n] &&
                            t.y === e[n + 1] &&
                            t.z === e[n + 2] &&
                            t.w === e[n + 3]
                        );
                    }),
                    (o.equalsEpsilon = function (t, e, r, a) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                i.equalsEpsilon(t.x, e.x, r, a) &&
                                i.equalsEpsilon(t.y, e.y, r, a) &&
                                i.equalsEpsilon(t.z, e.z, r, a) &&
                                i.equalsEpsilon(t.w, e.w, r, a))
                        );
                    }),
                    (o.ZERO = a(new o(0, 0, 0, 0))),
                    (o.UNIT_X = a(new o(1, 0, 0, 0))),
                    (o.UNIT_Y = a(new o(0, 1, 0, 0))),
                    (o.UNIT_Z = a(new o(0, 0, 1, 0))),
                    (o.UNIT_W = a(new o(0, 0, 0, 1))),
                    (o.prototype.clone = function (t) {
                        return o.clone(this, t);
                    }),
                    (o.prototype.equals = function (t) {
                        return o.equals(this, t);
                    }),
                    (o.prototype.equalsEpsilon = function (t, e, n) {
                        return o.equalsEpsilon(this, t, e, n);
                    }),
                    (o.prototype.toString = function () {
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
                    o
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
            function (t, e, n, r, a, i, o, u, E, s) {
                'use strict';
                function c(t, e, n, a, i, o, u, E, s, c, _, T, R, l, f, A) {
                    (this[0] = r(t, 0)),
                        (this[1] = r(i, 0)),
                        (this[2] = r(s, 0)),
                        (this[3] = r(R, 0)),
                        (this[4] = r(e, 0)),
                        (this[5] = r(o, 0)),
                        (this[6] = r(c, 0)),
                        (this[7] = r(l, 0)),
                        (this[8] = r(n, 0)),
                        (this[9] = r(u, 0)),
                        (this[10] = r(_, 0)),
                        (this[11] = r(f, 0)),
                        (this[12] = r(a, 0)),
                        (this[13] = r(E, 0)),
                        (this[14] = r(T, 0)),
                        (this[15] = r(A, 0));
                }
                (c.packedLength = 16),
                    (c.pack = function (t, e, n) {
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
                            (e[n++] = t[9]),
                            (e[n++] = t[10]),
                            (e[n++] = t[11]),
                            (e[n++] = t[12]),
                            (e[n++] = t[13]),
                            (e[n++] = t[14]),
                            (e[n] = t[15]),
                            e
                        );
                    }),
                    (c.unpack = function (t, e, n) {
                        return (
                            (e = r(e, 0)),
                            a(n) || (n = new c()),
                            (n[0] = t[e++]),
                            (n[1] = t[e++]),
                            (n[2] = t[e++]),
                            (n[3] = t[e++]),
                            (n[4] = t[e++]),
                            (n[5] = t[e++]),
                            (n[6] = t[e++]),
                            (n[7] = t[e++]),
                            (n[8] = t[e++]),
                            (n[9] = t[e++]),
                            (n[10] = t[e++]),
                            (n[11] = t[e++]),
                            (n[12] = t[e++]),
                            (n[13] = t[e++]),
                            (n[14] = t[e++]),
                            (n[15] = t[e]),
                            n
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
                    (c.fromRotationTranslation = function (e, n, i) {
                        return (
                            (n = r(n, t.ZERO)),
                            a(i)
                                ? ((i[0] = e[0]),
                                  (i[1] = e[1]),
                                  (i[2] = e[2]),
                                  (i[3] = 0),
                                  (i[4] = e[3]),
                                  (i[5] = e[4]),
                                  (i[6] = e[5]),
                                  (i[7] = 0),
                                  (i[8] = e[6]),
                                  (i[9] = e[7]),
                                  (i[10] = e[8]),
                                  (i[11] = 0),
                                  (i[12] = n.x),
                                  (i[13] = n.y),
                                  (i[14] = n.z),
                                  (i[15] = 1),
                                  i)
                                : new c(
                                      e[0],
                                      e[3],
                                      e[6],
                                      n.x,
                                      e[1],
                                      e[4],
                                      e[7],
                                      n.y,
                                      e[2],
                                      e[5],
                                      e[8],
                                      n.z,
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
                        n,
                        r,
                    ) {
                        a(r) || (r = new c());
                        var i = n.x,
                            o = n.y,
                            u = n.z,
                            E = e.x * e.x,
                            s = e.x * e.y,
                            _ = e.x * e.z,
                            T = e.x * e.w,
                            R = e.y * e.y,
                            l = e.y * e.z,
                            f = e.y * e.w,
                            A = e.z * e.z,
                            h = e.z * e.w,
                            N = e.w * e.w,
                            d = E - R - A + N,
                            I = 2 * (s - h),
                            S = 2 * (_ + f),
                            m = 2 * (s + h),
                            O = -E + R - A + N,
                            M = 2 * (l - T),
                            y = 2 * (_ - f),
                            p = 2 * (l + T),
                            C = -E - R + A + N;
                        return (
                            (r[0] = d * i),
                            (r[1] = m * i),
                            (r[2] = y * i),
                            (r[3] = 0),
                            (r[4] = I * o),
                            (r[5] = O * o),
                            (r[6] = p * o),
                            (r[7] = 0),
                            (r[8] = S * u),
                            (r[9] = M * u),
                            (r[10] = C * u),
                            (r[11] = 0),
                            (r[12] = t.x),
                            (r[13] = t.y),
                            (r[14] = t.z),
                            (r[15] = 1),
                            r
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
                        return c.fromRotationTranslation(E.IDENTITY, t, e);
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
                var _ = new t(),
                    T = new t(),
                    R = new t();
                (c.fromCamera = function (e, n) {
                    var r = e.position,
                        i = e.direction,
                        o = e.up;
                    t.normalize(i, _),
                        t.normalize(t.cross(_, o, T), T),
                        t.normalize(t.cross(T, _, R), R);
                    var u = T.x,
                        E = T.y,
                        s = T.z,
                        l = _.x,
                        f = _.y,
                        A = _.z,
                        h = R.x,
                        N = R.y,
                        d = R.z,
                        I = r.x,
                        S = r.y,
                        m = r.z,
                        O = u * -I + E * -S + s * -m,
                        M = h * -I + N * -S + d * -m,
                        y = l * I + f * S + A * m;
                    return a(n)
                        ? ((n[0] = u),
                          (n[1] = h),
                          (n[2] = -l),
                          (n[3] = 0),
                          (n[4] = E),
                          (n[5] = N),
                          (n[6] = -f),
                          (n[7] = 0),
                          (n[8] = s),
                          (n[9] = d),
                          (n[10] = -A),
                          (n[11] = 0),
                          (n[12] = O),
                          (n[13] = M),
                          (n[14] = y),
                          (n[15] = 1),
                          n)
                        : new c(
                              u,
                              E,
                              s,
                              O,
                              h,
                              N,
                              d,
                              M,
                              -l,
                              -f,
                              -A,
                              y,
                              0,
                              0,
                              0,
                              1,
                          );
                }),
                    (c.computePerspectiveFieldOfView = function (
                        t,
                        e,
                        n,
                        r,
                        a,
                    ) {
                        var i = Math.tan(0.5 * t),
                            o = 1 / i,
                            u = o / e,
                            E = (r + n) / (n - r),
                            s = (2 * r * n) / (n - r);
                        return (
                            (a[0] = u),
                            (a[1] = 0),
                            (a[2] = 0),
                            (a[3] = 0),
                            (a[4] = 0),
                            (a[5] = o),
                            (a[6] = 0),
                            (a[7] = 0),
                            (a[8] = 0),
                            (a[9] = 0),
                            (a[10] = E),
                            (a[11] = -1),
                            (a[12] = 0),
                            (a[13] = 0),
                            (a[14] = s),
                            (a[15] = 0),
                            a
                        );
                    }),
                    (c.computeOrthographicOffCenter = function (
                        t,
                        e,
                        n,
                        r,
                        a,
                        i,
                        o,
                    ) {
                        var u = 1 / (e - t),
                            E = 1 / (r - n),
                            s = 1 / (i - a),
                            c = -(e + t) * u,
                            _ = -(r + n) * E,
                            T = -(i + a) * s;
                        return (
                            (u *= 2),
                            (E *= 2),
                            (s *= -2),
                            (o[0] = u),
                            (o[1] = 0),
                            (o[2] = 0),
                            (o[3] = 0),
                            (o[4] = 0),
                            (o[5] = E),
                            (o[6] = 0),
                            (o[7] = 0),
                            (o[8] = 0),
                            (o[9] = 0),
                            (o[10] = s),
                            (o[11] = 0),
                            (o[12] = c),
                            (o[13] = _),
                            (o[14] = T),
                            (o[15] = 1),
                            o
                        );
                    }),
                    (c.computePerspectiveOffCenter = function (
                        t,
                        e,
                        n,
                        r,
                        a,
                        i,
                        o,
                    ) {
                        var u = (2 * a) / (e - t),
                            E = (2 * a) / (r - n),
                            s = (e + t) / (e - t),
                            c = (r + n) / (r - n),
                            _ = -(i + a) / (i - a),
                            T = (-2 * i * a) / (i - a);
                        return (
                            (o[0] = u),
                            (o[1] = 0),
                            (o[2] = 0),
                            (o[3] = 0),
                            (o[4] = 0),
                            (o[5] = E),
                            (o[6] = 0),
                            (o[7] = 0),
                            (o[8] = s),
                            (o[9] = c),
                            (o[10] = _),
                            (o[11] = -1),
                            (o[12] = 0),
                            (o[13] = 0),
                            (o[14] = T),
                            (o[15] = 0),
                            o
                        );
                    }),
                    (c.computeInfinitePerspectiveOffCenter = function (
                        t,
                        e,
                        n,
                        r,
                        a,
                        i,
                    ) {
                        var o = (2 * a) / (e - t),
                            u = (2 * a) / (r - n),
                            E = (e + t) / (e - t),
                            s = (r + n) / (r - n),
                            c = -2 * a;
                        return (
                            (i[0] = o),
                            (i[1] = 0),
                            (i[2] = 0),
                            (i[3] = 0),
                            (i[4] = 0),
                            (i[5] = u),
                            (i[6] = 0),
                            (i[7] = 0),
                            (i[8] = E),
                            (i[9] = s),
                            (i[10] = -1),
                            (i[11] = -1),
                            (i[12] = 0),
                            (i[13] = 0),
                            (i[14] = c),
                            (i[15] = 0),
                            i
                        );
                    }),
                    (c.computeViewportTransformation = function (t, e, n, a) {
                        t = r(t, r.EMPTY_OBJECT);
                        var i = r(t.x, 0),
                            o = r(t.y, 0),
                            u = r(t.width, 0),
                            E = r(t.height, 0);
                        (e = r(e, 0)), (n = r(n, 1));
                        var s = 0.5 * u,
                            c = 0.5 * E,
                            _ = 0.5 * (n - e),
                            T = s,
                            R = c,
                            l = _,
                            f = i + s,
                            A = o + c,
                            h = e + _;
                        return (
                            (a[0] = T),
                            (a[1] = 0),
                            (a[2] = 0),
                            (a[3] = 0),
                            (a[4] = 0),
                            (a[5] = R),
                            (a[6] = 0),
                            (a[7] = 0),
                            (a[8] = 0),
                            (a[9] = 0),
                            (a[10] = l),
                            (a[11] = 0),
                            (a[12] = f),
                            (a[13] = A),
                            (a[14] = h),
                            (a[15] = 1),
                            a
                        );
                    }),
                    (c.computeView = function (e, n, r, a, i) {
                        return (
                            (i[0] = a.x),
                            (i[1] = r.x),
                            (i[2] = -n.x),
                            (i[3] = 0),
                            (i[4] = a.y),
                            (i[5] = r.y),
                            (i[6] = -n.y),
                            (i[7] = 0),
                            (i[8] = a.z),
                            (i[9] = r.z),
                            (i[10] = -n.z),
                            (i[11] = 0),
                            (i[12] = -t.dot(a, e)),
                            (i[13] = -t.dot(r, e)),
                            (i[14] = t.dot(n, e)),
                            (i[15] = 1),
                            i
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
                    (c.getColumn = function (t, e, n) {
                        var r = 4 * e,
                            a = t[r],
                            i = t[r + 1],
                            o = t[r + 2],
                            u = t[r + 3];
                        return (n.x = a), (n.y = i), (n.z = o), (n.w = u), n;
                    }),
                    (c.setColumn = function (t, e, n, r) {
                        r = c.clone(t, r);
                        var a = 4 * e;
                        return (
                            (r[a] = n.x),
                            (r[a + 1] = n.y),
                            (r[a + 2] = n.z),
                            (r[a + 3] = n.w),
                            r
                        );
                    }),
                    (c.setTranslation = function (t, e, n) {
                        return (
                            (n[0] = t[0]),
                            (n[1] = t[1]),
                            (n[2] = t[2]),
                            (n[3] = t[3]),
                            (n[4] = t[4]),
                            (n[5] = t[5]),
                            (n[6] = t[6]),
                            (n[7] = t[7]),
                            (n[8] = t[8]),
                            (n[9] = t[9]),
                            (n[10] = t[10]),
                            (n[11] = t[11]),
                            (n[12] = e.x),
                            (n[13] = e.y),
                            (n[14] = e.z),
                            (n[15] = t[15]),
                            n
                        );
                    }),
                    (c.getRow = function (t, e, n) {
                        var r = t[e],
                            a = t[e + 4],
                            i = t[e + 8],
                            o = t[e + 12];
                        return (n.x = r), (n.y = a), (n.z = i), (n.w = o), n;
                    }),
                    (c.setRow = function (t, e, n, r) {
                        return (
                            (r = c.clone(t, r)),
                            (r[e] = n.x),
                            (r[e + 4] = n.y),
                            (r[e + 8] = n.z),
                            (r[e + 12] = n.w),
                            r
                        );
                    });
                var l = new t();
                c.getScale = function (e, n) {
                    return (
                        (n.x = t.magnitude(
                            t.fromElements(e[0], e[1], e[2], l),
                        )),
                        (n.y = t.magnitude(
                            t.fromElements(e[4], e[5], e[6], l),
                        )),
                        (n.z = t.magnitude(
                            t.fromElements(e[8], e[9], e[10], l),
                        )),
                        n
                    );
                };
                var f = new t();
                (c.getMaximumScale = function (e) {
                    return c.getScale(e, f), t.maximumComponent(f);
                }),
                    (c.multiply = function (t, e, n) {
                        var r = t[0],
                            a = t[1],
                            i = t[2],
                            o = t[3],
                            u = t[4],
                            E = t[5],
                            s = t[6],
                            c = t[7],
                            _ = t[8],
                            T = t[9],
                            R = t[10],
                            l = t[11],
                            f = t[12],
                            A = t[13],
                            h = t[14],
                            N = t[15],
                            d = e[0],
                            I = e[1],
                            S = e[2],
                            m = e[3],
                            O = e[4],
                            M = e[5],
                            y = e[6],
                            p = e[7],
                            C = e[8],
                            U = e[9],
                            L = e[10],
                            F = e[11],
                            P = e[12],
                            g = e[13],
                            w = e[14],
                            v = e[15],
                            x = r * d + u * I + _ * S + f * m,
                            D = a * d + E * I + T * S + A * m,
                            B = i * d + s * I + R * S + h * m,
                            z = o * d + c * I + l * S + N * m,
                            G = r * O + u * M + _ * y + f * p,
                            b = a * O + E * M + T * y + A * p,
                            X = i * O + s * M + R * y + h * p,
                            V = o * O + c * M + l * y + N * p,
                            q = r * C + u * U + _ * L + f * F,
                            H = a * C + E * U + T * L + A * F,
                            W = i * C + s * U + R * L + h * F,
                            Y = o * C + c * U + l * L + N * F,
                            k = r * P + u * g + _ * w + f * v,
                            K = a * P + E * g + T * w + A * v,
                            Z = i * P + s * g + R * w + h * v,
                            j = o * P + c * g + l * w + N * v;
                        return (
                            (n[0] = x),
                            (n[1] = D),
                            (n[2] = B),
                            (n[3] = z),
                            (n[4] = G),
                            (n[5] = b),
                            (n[6] = X),
                            (n[7] = V),
                            (n[8] = q),
                            (n[9] = H),
                            (n[10] = W),
                            (n[11] = Y),
                            (n[12] = k),
                            (n[13] = K),
                            (n[14] = Z),
                            (n[15] = j),
                            n
                        );
                    }),
                    (c.add = function (t, e, n) {
                        return (
                            (n[0] = t[0] + e[0]),
                            (n[1] = t[1] + e[1]),
                            (n[2] = t[2] + e[2]),
                            (n[3] = t[3] + e[3]),
                            (n[4] = t[4] + e[4]),
                            (n[5] = t[5] + e[5]),
                            (n[6] = t[6] + e[6]),
                            (n[7] = t[7] + e[7]),
                            (n[8] = t[8] + e[8]),
                            (n[9] = t[9] + e[9]),
                            (n[10] = t[10] + e[10]),
                            (n[11] = t[11] + e[11]),
                            (n[12] = t[12] + e[12]),
                            (n[13] = t[13] + e[13]),
                            (n[14] = t[14] + e[14]),
                            (n[15] = t[15] + e[15]),
                            n
                        );
                    }),
                    (c.subtract = function (t, e, n) {
                        return (
                            (n[0] = t[0] - e[0]),
                            (n[1] = t[1] - e[1]),
                            (n[2] = t[2] - e[2]),
                            (n[3] = t[3] - e[3]),
                            (n[4] = t[4] - e[4]),
                            (n[5] = t[5] - e[5]),
                            (n[6] = t[6] - e[6]),
                            (n[7] = t[7] - e[7]),
                            (n[8] = t[8] - e[8]),
                            (n[9] = t[9] - e[9]),
                            (n[10] = t[10] - e[10]),
                            (n[11] = t[11] - e[11]),
                            (n[12] = t[12] - e[12]),
                            (n[13] = t[13] - e[13]),
                            (n[14] = t[14] - e[14]),
                            (n[15] = t[15] - e[15]),
                            n
                        );
                    }),
                    (c.multiplyTransformation = function (t, e, n) {
                        var r = t[0],
                            a = t[1],
                            i = t[2],
                            o = t[4],
                            u = t[5],
                            E = t[6],
                            s = t[8],
                            c = t[9],
                            _ = t[10],
                            T = t[12],
                            R = t[13],
                            l = t[14],
                            f = e[0],
                            A = e[1],
                            h = e[2],
                            N = e[4],
                            d = e[5],
                            I = e[6],
                            S = e[8],
                            m = e[9],
                            O = e[10],
                            M = e[12],
                            y = e[13],
                            p = e[14],
                            C = r * f + o * A + s * h,
                            U = a * f + u * A + c * h,
                            L = i * f + E * A + _ * h,
                            F = r * N + o * d + s * I,
                            P = a * N + u * d + c * I,
                            g = i * N + E * d + _ * I,
                            w = r * S + o * m + s * O,
                            v = a * S + u * m + c * O,
                            x = i * S + E * m + _ * O,
                            D = r * M + o * y + s * p + T,
                            B = a * M + u * y + c * p + R,
                            z = i * M + E * y + _ * p + l;
                        return (
                            (n[0] = C),
                            (n[1] = U),
                            (n[2] = L),
                            (n[3] = 0),
                            (n[4] = F),
                            (n[5] = P),
                            (n[6] = g),
                            (n[7] = 0),
                            (n[8] = w),
                            (n[9] = v),
                            (n[10] = x),
                            (n[11] = 0),
                            (n[12] = D),
                            (n[13] = B),
                            (n[14] = z),
                            (n[15] = 1),
                            n
                        );
                    }),
                    (c.multiplyByMatrix3 = function (t, e, n) {
                        var r = t[0],
                            a = t[1],
                            i = t[2],
                            o = t[4],
                            u = t[5],
                            E = t[6],
                            s = t[8],
                            c = t[9],
                            _ = t[10],
                            T = e[0],
                            R = e[1],
                            l = e[2],
                            f = e[3],
                            A = e[4],
                            h = e[5],
                            N = e[6],
                            d = e[7],
                            I = e[8],
                            S = r * T + o * R + s * l,
                            m = a * T + u * R + c * l,
                            O = i * T + E * R + _ * l,
                            M = r * f + o * A + s * h,
                            y = a * f + u * A + c * h,
                            p = i * f + E * A + _ * h,
                            C = r * N + o * d + s * I,
                            U = a * N + u * d + c * I,
                            L = i * N + E * d + _ * I;
                        return (
                            (n[0] = S),
                            (n[1] = m),
                            (n[2] = O),
                            (n[3] = 0),
                            (n[4] = M),
                            (n[5] = y),
                            (n[6] = p),
                            (n[7] = 0),
                            (n[8] = C),
                            (n[9] = U),
                            (n[10] = L),
                            (n[11] = 0),
                            (n[12] = t[12]),
                            (n[13] = t[13]),
                            (n[14] = t[14]),
                            (n[15] = t[15]),
                            n
                        );
                    }),
                    (c.multiplyByTranslation = function (t, e, n) {
                        var r = e.x,
                            a = e.y,
                            i = e.z,
                            o = r * t[0] + a * t[4] + i * t[8] + t[12],
                            u = r * t[1] + a * t[5] + i * t[9] + t[13],
                            E = r * t[2] + a * t[6] + i * t[10] + t[14];
                        return (
                            (n[0] = t[0]),
                            (n[1] = t[1]),
                            (n[2] = t[2]),
                            (n[3] = t[3]),
                            (n[4] = t[4]),
                            (n[5] = t[5]),
                            (n[6] = t[6]),
                            (n[7] = t[7]),
                            (n[8] = t[8]),
                            (n[9] = t[9]),
                            (n[10] = t[10]),
                            (n[11] = t[11]),
                            (n[12] = o),
                            (n[13] = u),
                            (n[14] = E),
                            (n[15] = t[15]),
                            n
                        );
                    });
                var A = new t();
                (c.multiplyByUniformScale = function (t, e, n) {
                    return (
                        (A.x = e),
                        (A.y = e),
                        (A.z = e),
                        c.multiplyByScale(t, A, n)
                    );
                }),
                    (c.multiplyByScale = function (t, e, n) {
                        var r = e.x,
                            a = e.y,
                            i = e.z;
                        return 1 === r && 1 === a && 1 === i
                            ? c.clone(t, n)
                            : ((n[0] = r * t[0]),
                              (n[1] = r * t[1]),
                              (n[2] = r * t[2]),
                              (n[3] = 0),
                              (n[4] = a * t[4]),
                              (n[5] = a * t[5]),
                              (n[6] = a * t[6]),
                              (n[7] = 0),
                              (n[8] = i * t[8]),
                              (n[9] = i * t[9]),
                              (n[10] = i * t[10]),
                              (n[11] = 0),
                              (n[12] = t[12]),
                              (n[13] = t[13]),
                              (n[14] = t[14]),
                              (n[15] = 1),
                              n);
                    }),
                    (c.multiplyByVector = function (t, e, n) {
                        var r = e.x,
                            a = e.y,
                            i = e.z,
                            o = e.w,
                            u = t[0] * r + t[4] * a + t[8] * i + t[12] * o,
                            E = t[1] * r + t[5] * a + t[9] * i + t[13] * o,
                            s = t[2] * r + t[6] * a + t[10] * i + t[14] * o,
                            c = t[3] * r + t[7] * a + t[11] * i + t[15] * o;
                        return (n.x = u), (n.y = E), (n.z = s), (n.w = c), n;
                    }),
                    (c.multiplyByPointAsVector = function (t, e, n) {
                        var r = e.x,
                            a = e.y,
                            i = e.z,
                            o = t[0] * r + t[4] * a + t[8] * i,
                            u = t[1] * r + t[5] * a + t[9] * i,
                            E = t[2] * r + t[6] * a + t[10] * i;
                        return (n.x = o), (n.y = u), (n.z = E), n;
                    }),
                    (c.multiplyByPoint = function (t, e, n) {
                        var r = e.x,
                            a = e.y,
                            i = e.z,
                            o = t[0] * r + t[4] * a + t[8] * i + t[12],
                            u = t[1] * r + t[5] * a + t[9] * i + t[13],
                            E = t[2] * r + t[6] * a + t[10] * i + t[14];
                        return (n.x = o), (n.y = u), (n.z = E), n;
                    }),
                    (c.multiplyByScalar = function (t, e, n) {
                        return (
                            (n[0] = t[0] * e),
                            (n[1] = t[1] * e),
                            (n[2] = t[2] * e),
                            (n[3] = t[3] * e),
                            (n[4] = t[4] * e),
                            (n[5] = t[5] * e),
                            (n[6] = t[6] * e),
                            (n[7] = t[7] * e),
                            (n[8] = t[8] * e),
                            (n[9] = t[9] * e),
                            (n[10] = t[10] * e),
                            (n[11] = t[11] * e),
                            (n[12] = t[12] * e),
                            (n[13] = t[13] * e),
                            (n[14] = t[14] * e),
                            (n[15] = t[15] * e),
                            n
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
                        var n = t[1],
                            r = t[2],
                            a = t[3],
                            i = t[6],
                            o = t[7],
                            u = t[11];
                        return (
                            (e[0] = t[0]),
                            (e[1] = t[4]),
                            (e[2] = t[8]),
                            (e[3] = t[12]),
                            (e[4] = n),
                            (e[5] = t[5]),
                            (e[6] = t[9]),
                            (e[7] = t[13]),
                            (e[8] = r),
                            (e[9] = i),
                            (e[10] = t[10]),
                            (e[11] = t[14]),
                            (e[12] = a),
                            (e[13] = o),
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
                    (c.equalsEpsilon = function (t, e, n) {
                        return (
                            t === e ||
                            (a(t) &&
                                a(e) &&
                                Math.abs(t[0] - e[0]) <= n &&
                                Math.abs(t[1] - e[1]) <= n &&
                                Math.abs(t[2] - e[2]) <= n &&
                                Math.abs(t[3] - e[3]) <= n &&
                                Math.abs(t[4] - e[4]) <= n &&
                                Math.abs(t[5] - e[5]) <= n &&
                                Math.abs(t[6] - e[6]) <= n &&
                                Math.abs(t[7] - e[7]) <= n &&
                                Math.abs(t[8] - e[8]) <= n &&
                                Math.abs(t[9] - e[9]) <= n &&
                                Math.abs(t[10] - e[10]) <= n &&
                                Math.abs(t[11] - e[11]) <= n &&
                                Math.abs(t[12] - e[12]) <= n &&
                                Math.abs(t[13] - e[13]) <= n &&
                                Math.abs(t[14] - e[14]) <= n &&
                                Math.abs(t[15] - e[15]) <= n)
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
                var h = new E(),
                    N = new E(),
                    d = new e(),
                    I = new e(0, 0, 0, 1);
                return (
                    (c.inverse = function (t, n) {
                        if (
                            E.equalsEpsilon(
                                c.getRotation(t, h),
                                N,
                                u.EPSILON7,
                            ) &&
                            e.equals(c.getRow(t, 3, d), I)
                        )
                            return (
                                (n[0] = 0),
                                (n[1] = 0),
                                (n[2] = 0),
                                (n[3] = 0),
                                (n[4] = 0),
                                (n[5] = 0),
                                (n[6] = 0),
                                (n[7] = 0),
                                (n[8] = 0),
                                (n[9] = 0),
                                (n[10] = 0),
                                (n[11] = 0),
                                (n[12] = -t[12]),
                                (n[13] = -t[13]),
                                (n[14] = -t[14]),
                                (n[15] = 1),
                                n
                            );
                        var r = t[0],
                            a = t[4],
                            i = t[8],
                            o = t[12],
                            _ = t[1],
                            T = t[5],
                            R = t[9],
                            l = t[13],
                            f = t[2],
                            A = t[6],
                            S = t[10],
                            m = t[14],
                            O = t[3],
                            M = t[7],
                            y = t[11],
                            p = t[15],
                            C = S * p,
                            U = m * y,
                            L = A * p,
                            F = m * M,
                            P = A * y,
                            g = S * M,
                            w = f * p,
                            v = m * O,
                            x = f * y,
                            D = S * O,
                            B = f * M,
                            z = A * O,
                            G = C * T + F * R + P * l - (U * T + L * R + g * l),
                            b = U * _ + w * R + D * l - (C * _ + v * R + x * l),
                            X = L * _ + v * T + B * l - (F * _ + w * T + z * l),
                            V = g * _ + x * T + z * R - (P * _ + D * T + B * R),
                            q = U * a + L * i + g * o - (C * a + F * i + P * o),
                            H = C * r + v * i + x * o - (U * r + w * i + D * o),
                            W = F * r + w * a + z * o - (L * r + v * a + B * o),
                            Y = P * r + D * a + B * i - (g * r + x * a + z * i);
                        (C = i * l),
                            (U = o * R),
                            (L = a * l),
                            (F = o * T),
                            (P = a * R),
                            (g = i * T),
                            (w = r * l),
                            (v = o * _),
                            (x = r * R),
                            (D = i * _),
                            (B = r * T),
                            (z = a * _);
                        var k = C * M + F * y + P * p - (U * M + L * y + g * p),
                            K = U * O + w * y + D * p - (C * O + v * y + x * p),
                            Z = L * O + v * M + B * p - (F * O + w * M + z * p),
                            j = g * O + x * M + z * y - (P * O + D * M + B * y),
                            Q = L * S + g * m + U * A - (P * m + C * A + F * S),
                            J = x * m + C * f + v * S - (w * S + D * m + U * f),
                            $ = w * A + z * m + F * f - (B * m + L * f + v * A),
                            tt =
                                B * S + P * f + D * A - (x * A + z * S + g * f),
                            et = r * G + a * b + i * X + o * V;
                        if (Math.abs(et) < u.EPSILON20)
                            throw new s(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (et = 1 / et),
                            (n[0] = G * et),
                            (n[1] = b * et),
                            (n[2] = X * et),
                            (n[3] = V * et),
                            (n[4] = q * et),
                            (n[5] = H * et),
                            (n[6] = W * et),
                            (n[7] = Y * et),
                            (n[8] = k * et),
                            (n[9] = K * et),
                            (n[10] = Z * et),
                            (n[11] = j * et),
                            (n[12] = Q * et),
                            (n[13] = J * et),
                            (n[14] = $ * et),
                            (n[15] = tt * et),
                            n
                        );
                    }),
                    (c.inverseTransformation = function (t, e) {
                        var n = t[0],
                            r = t[1],
                            a = t[2],
                            i = t[4],
                            o = t[5],
                            u = t[6],
                            E = t[8],
                            s = t[9],
                            c = t[10],
                            _ = t[12],
                            T = t[13],
                            R = t[14],
                            l = -n * _ - r * T - a * R,
                            f = -i * _ - o * T - u * R,
                            A = -E * _ - s * T - c * R;
                        return (
                            (e[0] = n),
                            (e[1] = i),
                            (e[2] = E),
                            (e[3] = 0),
                            (e[4] = r),
                            (e[5] = o),
                            (e[6] = s),
                            (e[7] = 0),
                            (e[8] = a),
                            (e[9] = u),
                            (e[10] = c),
                            (e[11] = 0),
                            (e[12] = l),
                            (e[13] = f),
                            (e[14] = A),
                            (e[15] = 1),
                            e
                        );
                    }),
                    (c.IDENTITY = o(
                        new c(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                    )),
                    (c.ZERO = o(
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
                    i(c.prototype, {
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
                    (c.equalsArray = function (t, e, n) {
                        return (
                            t[0] === e[n] &&
                            t[1] === e[n + 1] &&
                            t[2] === e[n + 2] &&
                            t[3] === e[n + 3] &&
                            t[4] === e[n + 4] &&
                            t[5] === e[n + 5] &&
                            t[6] === e[n + 6] &&
                            t[7] === e[n + 7] &&
                            t[8] === e[n + 8] &&
                            t[9] === e[n + 9] &&
                            t[10] === e[n + 10] &&
                            t[11] === e[n + 11] &&
                            t[12] === e[n + 12] &&
                            t[13] === e[n + 13] &&
                            t[14] === e[n + 14] &&
                            t[15] === e[n + 15]
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
            function (t, e, n, r, a, i, o, u) {
                'use strict';
                function E(t, e, r, a) {
                    (this.west = n(t, 0)),
                        (this.south = n(e, 0)),
                        (this.east = n(r, 0)),
                        (this.north = n(a, 0));
                }
                a(E.prototype, {
                    width: {
                        get: function () {
                            return E.computeWidth(this);
                        },
                    },
                    height: {
                        get: function () {
                            return E.computeHeight(this);
                        },
                    },
                }),
                    (E.packedLength = 4),
                    (E.pack = function (t, e, r) {
                        return (
                            (r = n(r, 0)),
                            (e[r++] = t.west),
                            (e[r++] = t.south),
                            (e[r++] = t.east),
                            (e[r] = t.north),
                            e
                        );
                    }),
                    (E.unpack = function (t, e, a) {
                        return (
                            (e = n(e, 0)),
                            r(a) || (a = new E()),
                            (a.west = t[e++]),
                            (a.south = t[e++]),
                            (a.east = t[e++]),
                            (a.north = t[e]),
                            a
                        );
                    }),
                    (E.computeWidth = function (t) {
                        var e = t.east,
                            n = t.west;
                        return e < n && (e += u.TWO_PI), e - n;
                    }),
                    (E.computeHeight = function (t) {
                        return t.north - t.south;
                    }),
                    (E.fromDegrees = function (t, e, a, i, o) {
                        return (
                            (t = u.toRadians(n(t, 0))),
                            (e = u.toRadians(n(e, 0))),
                            (a = u.toRadians(n(a, 0))),
                            (i = u.toRadians(n(i, 0))),
                            r(o)
                                ? ((o.west = t),
                                  (o.south = e),
                                  (o.east = a),
                                  (o.north = i),
                                  o)
                                : new E(t, e, a, i)
                        );
                    }),
                    (E.fromRadians = function (t, e, a, i, o) {
                        return r(o)
                            ? ((o.west = n(t, 0)),
                              (o.south = n(e, 0)),
                              (o.east = n(a, 0)),
                              (o.north = n(i, 0)),
                              o)
                            : new E(t, e, a, i);
                    }),
                    (E.fromCartographicArray = function (t, e) {
                        for (
                            var n = Number.MAX_VALUE,
                                a = -Number.MAX_VALUE,
                                i = Number.MAX_VALUE,
                                o = -Number.MAX_VALUE,
                                s = Number.MAX_VALUE,
                                c = -Number.MAX_VALUE,
                                _ = 0,
                                T = t.length;
                            _ < T;
                            _++
                        ) {
                            var R = t[_];
                            (n = Math.min(n, R.longitude)),
                                (a = Math.max(a, R.longitude)),
                                (s = Math.min(s, R.latitude)),
                                (c = Math.max(c, R.latitude));
                            var l =
                                R.longitude >= 0
                                    ? R.longitude
                                    : R.longitude + u.TWO_PI;
                            (i = Math.min(i, l)), (o = Math.max(o, l));
                        }
                        return (
                            a - n > o - i &&
                                ((n = i),
                                (a = o),
                                a > u.PI && (a -= u.TWO_PI),
                                n > u.PI && (n -= u.TWO_PI)),
                            r(e)
                                ? ((e.west = n),
                                  (e.south = s),
                                  (e.east = a),
                                  (e.north = c),
                                  e)
                                : new E(n, s, a, c)
                        );
                    }),
                    (E.fromCartesianArray = function (t, e, a) {
                        e = n(e, i.WGS84);
                        for (
                            var o = Number.MAX_VALUE,
                                s = -Number.MAX_VALUE,
                                c = Number.MAX_VALUE,
                                _ = -Number.MAX_VALUE,
                                T = Number.MAX_VALUE,
                                R = -Number.MAX_VALUE,
                                l = 0,
                                f = t.length;
                            l < f;
                            l++
                        ) {
                            var A = e.cartesianToCartographic(t[l]);
                            (o = Math.min(o, A.longitude)),
                                (s = Math.max(s, A.longitude)),
                                (T = Math.min(T, A.latitude)),
                                (R = Math.max(R, A.latitude));
                            var h =
                                A.longitude >= 0
                                    ? A.longitude
                                    : A.longitude + u.TWO_PI;
                            (c = Math.min(c, h)), (_ = Math.max(_, h));
                        }
                        return (
                            s - o > _ - c &&
                                ((o = c),
                                (s = _),
                                s > u.PI && (s -= u.TWO_PI),
                                o > u.PI && (o -= u.TWO_PI)),
                            r(a)
                                ? ((a.west = o),
                                  (a.south = T),
                                  (a.east = s),
                                  (a.north = R),
                                  a)
                                : new E(o, T, s, R)
                        );
                    }),
                    (E.clone = function (t, e) {
                        if (r(t))
                            return r(e)
                                ? ((e.west = t.west),
                                  (e.south = t.south),
                                  (e.east = t.east),
                                  (e.north = t.north),
                                  e)
                                : new E(t.west, t.south, t.east, t.north);
                    }),
                    (E.prototype.clone = function (t) {
                        return E.clone(this, t);
                    }),
                    (E.prototype.equals = function (t) {
                        return E.equals(this, t);
                    }),
                    (E.equals = function (t, e) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                t.west === e.west &&
                                t.south === e.south &&
                                t.east === e.east &&
                                t.north === e.north)
                        );
                    }),
                    (E.prototype.equalsEpsilon = function (t, e) {
                        return (
                            r(t) &&
                            Math.abs(this.west - t.west) <= e &&
                            Math.abs(this.south - t.south) <= e &&
                            Math.abs(this.east - t.east) <= e &&
                            Math.abs(this.north - t.north) <= e
                        );
                    }),
                    (E.validate = function (t) {}),
                    (E.southwest = function (e, n) {
                        return r(n)
                            ? ((n.longitude = e.west),
                              (n.latitude = e.south),
                              (n.height = 0),
                              n)
                            : new t(e.west, e.south);
                    }),
                    (E.northwest = function (e, n) {
                        return r(n)
                            ? ((n.longitude = e.west),
                              (n.latitude = e.north),
                              (n.height = 0),
                              n)
                            : new t(e.west, e.north);
                    }),
                    (E.northeast = function (e, n) {
                        return r(n)
                            ? ((n.longitude = e.east),
                              (n.latitude = e.north),
                              (n.height = 0),
                              n)
                            : new t(e.east, e.north);
                    }),
                    (E.southeast = function (e, n) {
                        return r(n)
                            ? ((n.longitude = e.east),
                              (n.latitude = e.south),
                              (n.height = 0),
                              n)
                            : new t(e.east, e.south);
                    }),
                    (E.center = function (e, n) {
                        var a = e.east,
                            i = e.west;
                        a < i && (a += u.TWO_PI);
                        var o = u.negativePiToPi(0.5 * (i + a)),
                            E = 0.5 * (e.south + e.north);
                        return r(n)
                            ? ((n.longitude = o),
                              (n.latitude = E),
                              (n.height = 0),
                              n)
                            : new t(o, E);
                    }),
                    (E.intersection = function (t, e, n) {
                        var a = t.east,
                            i = t.west,
                            o = e.east,
                            s = e.west;
                        a < i && o > 0
                            ? (a += u.TWO_PI)
                            : o < s && a > 0 && (o += u.TWO_PI),
                            a < i && s < 0
                                ? (s += u.TWO_PI)
                                : o < s && i < 0 && (i += u.TWO_PI);
                        var c = u.negativePiToPi(Math.max(i, s)),
                            _ = u.negativePiToPi(Math.min(a, o));
                        if (!((t.west < t.east || e.west < e.east) && _ <= c)) {
                            var T = Math.max(t.south, e.south),
                                R = Math.min(t.north, e.north);
                            if (!(T >= R))
                                return r(n)
                                    ? ((n.west = c),
                                      (n.south = T),
                                      (n.east = _),
                                      (n.north = R),
                                      n)
                                    : new E(c, T, _, R);
                        }
                    }),
                    (E.simpleIntersection = function (t, e, n) {
                        var a = Math.max(t.west, e.west),
                            i = Math.max(t.south, e.south),
                            o = Math.min(t.east, e.east),
                            u = Math.min(t.north, e.north);
                        if (!(i >= u || a >= o))
                            return r(n)
                                ? ((n.west = a),
                                  (n.south = i),
                                  (n.east = o),
                                  (n.north = u),
                                  n)
                                : new E(a, i, o, u);
                    }),
                    (E.union = function (t, e, n) {
                        r(n) || (n = new E());
                        var a = t.east,
                            i = t.west,
                            o = e.east,
                            s = e.west;
                        a < i && o > 0
                            ? (a += u.TWO_PI)
                            : o < s && a > 0 && (o += u.TWO_PI),
                            a < i && s < 0
                                ? (s += u.TWO_PI)
                                : o < s && i < 0 && (i += u.TWO_PI);
                        var c = u.convertLongitudeRange(Math.min(i, s)),
                            _ = u.convertLongitudeRange(Math.max(a, o));
                        return (
                            (n.west = c),
                            (n.south = Math.min(t.south, e.south)),
                            (n.east = _),
                            (n.north = Math.max(t.north, e.north)),
                            n
                        );
                    }),
                    (E.expand = function (t, e, n) {
                        return (
                            r(n) || (n = new E()),
                            (n.west = Math.min(t.west, e.longitude)),
                            (n.south = Math.min(t.south, e.latitude)),
                            (n.east = Math.max(t.east, e.longitude)),
                            (n.north = Math.max(t.north, e.latitude)),
                            n
                        );
                    }),
                    (E.contains = function (t, e) {
                        var n = e.longitude,
                            r = e.latitude,
                            a = t.west,
                            i = t.east;
                        return (
                            i < a &&
                                ((i += u.TWO_PI), n < 0 && (n += u.TWO_PI)),
                            (n > a || u.equalsEpsilon(n, a, u.EPSILON14)) &&
                                (n < i || u.equalsEpsilon(n, i, u.EPSILON14)) &&
                                r >= t.south &&
                                r <= t.north
                        );
                    });
                var s = new t();
                return (
                    (E.subsample = function (t, e, a, o) {
                        (e = n(e, i.WGS84)), (a = n(a, 0)), r(o) || (o = []);
                        var c = 0,
                            _ = t.north,
                            T = t.south,
                            R = t.east,
                            l = t.west,
                            f = s;
                        (f.height = a),
                            (f.longitude = l),
                            (f.latitude = _),
                            (o[c] = e.cartographicToCartesian(f, o[c])),
                            c++,
                            (f.longitude = R),
                            (o[c] = e.cartographicToCartesian(f, o[c])),
                            c++,
                            (f.latitude = T),
                            (o[c] = e.cartographicToCartesian(f, o[c])),
                            c++,
                            (f.longitude = l),
                            (o[c] = e.cartographicToCartesian(f, o[c])),
                            c++,
                            (f.latitude = _ < 0 ? _ : T > 0 ? T : 0);
                        for (var A = 1; A < 8; ++A)
                            (f.longitude = -Math.PI + A * u.PI_OVER_TWO),
                                E.contains(t, f) &&
                                    ((o[c] = e.cartographicToCartesian(
                                        f,
                                        o[c],
                                    )),
                                    c++);
                        return (
                            0 === f.latitude &&
                                ((f.longitude = l),
                                (o[c] = e.cartographicToCartesian(f, o[c])),
                                c++,
                                (f.longitude = R),
                                (o[c] = e.cartographicToCartesian(f, o[c])),
                                c++),
                            (o.length = c),
                            o
                        );
                    }),
                    (E.MAX_VALUE = o(
                        new E(-Math.PI, -u.PI_OVER_TWO, Math.PI, u.PI_OVER_TWO),
                    )),
                    E
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
            function (t, e, n, r, a, i, o, u, E, s, c, _) {
                'use strict';
                function T(e, n) {
                    (this.center = t.clone(r(e, t.ZERO))),
                        (this.radius = r(n, 0));
                }
                var R = new t(),
                    l = new t(),
                    f = new t(),
                    A = new t(),
                    h = new t(),
                    N = new t(),
                    d = new t(),
                    I = new t(),
                    S = new t(),
                    m = new t(),
                    O = new t(),
                    M = new t();
                T.fromPoints = function (e, n) {
                    if ((a(n) || (n = new T()), !a(e) || 0 === e.length))
                        return (
                            (n.center = t.clone(t.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r,
                        i = t.clone(e[0], d),
                        o = t.clone(i, R),
                        u = t.clone(i, l),
                        E = t.clone(i, f),
                        s = t.clone(i, A),
                        c = t.clone(i, h),
                        _ = t.clone(i, N),
                        y = e.length;
                    for (r = 1; r < y; r++) {
                        t.clone(e[r], i);
                        var p = i.x,
                            C = i.y,
                            U = i.z;
                        p < o.x && t.clone(i, o),
                            p > s.x && t.clone(i, s),
                            C < u.y && t.clone(i, u),
                            C > c.y && t.clone(i, c),
                            U < E.z && t.clone(i, E),
                            U > _.z && t.clone(i, _);
                    }
                    var L = t.magnitudeSquared(t.subtract(s, o, I)),
                        F = t.magnitudeSquared(t.subtract(c, u, I)),
                        P = t.magnitudeSquared(t.subtract(_, E, I)),
                        g = o,
                        w = s,
                        v = L;
                    F > v && ((v = F), (g = u), (w = c)),
                        P > v && ((v = P), (g = E), (w = _));
                    var x = S;
                    (x.x = 0.5 * (g.x + w.x)),
                        (x.y = 0.5 * (g.y + w.y)),
                        (x.z = 0.5 * (g.z + w.z));
                    var D = t.magnitudeSquared(t.subtract(w, x, I)),
                        B = Math.sqrt(D),
                        z = m;
                    (z.x = o.x), (z.y = u.y), (z.z = E.z);
                    var G = O;
                    (G.x = s.x), (G.y = c.y), (G.z = _.z);
                    var b = t.multiplyByScalar(t.add(z, G, I), 0.5, M),
                        X = 0;
                    for (r = 0; r < y; r++) {
                        t.clone(e[r], i);
                        var V = t.magnitude(t.subtract(i, b, I));
                        V > X && (X = V);
                        var q = t.magnitudeSquared(t.subtract(i, x, I));
                        if (q > D) {
                            var H = Math.sqrt(q);
                            (B = 0.5 * (B + H)), (D = B * B);
                            var W = H - B;
                            (x.x = (B * x.x + W * i.x) / H),
                                (x.y = (B * x.y + W * i.y) / H),
                                (x.z = (B * x.z + W * i.z) / H);
                        }
                    }
                    return (
                        B < X
                            ? (t.clone(x, n.center), (n.radius = B))
                            : (t.clone(b, n.center), (n.radius = X)),
                        n
                    );
                };
                var y = new o(),
                    p = new t(),
                    C = new t(),
                    U = new e(),
                    L = new e();
                (T.fromRectangle2D = function (t, e, n) {
                    return T.fromRectangleWithHeights2D(t, e, 0, 0, n);
                }),
                    (T.fromRectangleWithHeights2D = function (e, n, i, o, u) {
                        if ((a(u) || (u = new T()), !a(e)))
                            return (
                                (u.center = t.clone(t.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (n = r(n, y)),
                            _.southwest(e, U),
                            (U.height = i),
                            _.northeast(e, L),
                            (L.height = o);
                        var E = n.project(U, p),
                            s = n.project(L, C),
                            c = s.x - E.x,
                            R = s.y - E.y,
                            l = s.z - E.z;
                        u.radius = 0.5 * Math.sqrt(c * c + R * R + l * l);
                        var f = u.center;
                        return (
                            (f.x = E.x + 0.5 * c),
                            (f.y = E.y + 0.5 * R),
                            (f.z = E.z + 0.5 * l),
                            u
                        );
                    });
                var F = [];
                (T.fromRectangle3D = function (e, n, o, u) {
                    if (
                        ((n = r(n, i.WGS84)),
                        (o = r(o, 0)),
                        a(u) || (u = new T()),
                        !a(e))
                    )
                        return (
                            (u.center = t.clone(t.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var E = _.subsample(e, n, o, F);
                    return T.fromPoints(E, u);
                }),
                    (T.fromVertices = function (e, n, i, o) {
                        if ((a(o) || (o = new T()), !a(e) || 0 === e.length))
                            return (
                                (o.center = t.clone(t.ZERO, o.center)),
                                (o.radius = 0),
                                o
                            );
                        (n = r(n, t.ZERO)), (i = r(i, 3));
                        var u = d;
                        (u.x = e[0] + n.x),
                            (u.y = e[1] + n.y),
                            (u.z = e[2] + n.z);
                        var E,
                            s = t.clone(u, R),
                            c = t.clone(u, l),
                            _ = t.clone(u, f),
                            y = t.clone(u, A),
                            p = t.clone(u, h),
                            C = t.clone(u, N),
                            U = e.length;
                        for (E = 0; E < U; E += i) {
                            var L = e[E] + n.x,
                                F = e[E + 1] + n.y,
                                P = e[E + 2] + n.z;
                            (u.x = L),
                                (u.y = F),
                                (u.z = P),
                                L < s.x && t.clone(u, s),
                                L > y.x && t.clone(u, y),
                                F < c.y && t.clone(u, c),
                                F > p.y && t.clone(u, p),
                                P < _.z && t.clone(u, _),
                                P > C.z && t.clone(u, C);
                        }
                        var g = t.magnitudeSquared(t.subtract(y, s, I)),
                            w = t.magnitudeSquared(t.subtract(p, c, I)),
                            v = t.magnitudeSquared(t.subtract(C, _, I)),
                            x = s,
                            D = y,
                            B = g;
                        w > B && ((B = w), (x = c), (D = p)),
                            v > B && ((B = v), (x = _), (D = C));
                        var z = S;
                        (z.x = 0.5 * (x.x + D.x)),
                            (z.y = 0.5 * (x.y + D.y)),
                            (z.z = 0.5 * (x.z + D.z));
                        var G = t.magnitudeSquared(t.subtract(D, z, I)),
                            b = Math.sqrt(G),
                            X = m;
                        (X.x = s.x), (X.y = c.y), (X.z = _.z);
                        var V = O;
                        (V.x = y.x), (V.y = p.y), (V.z = C.z);
                        var q = t.multiplyByScalar(t.add(X, V, I), 0.5, M),
                            H = 0;
                        for (E = 0; E < U; E += i) {
                            (u.x = e[E] + n.x),
                                (u.y = e[E + 1] + n.y),
                                (u.z = e[E + 2] + n.z);
                            var W = t.magnitude(t.subtract(u, q, I));
                            W > H && (H = W);
                            var Y = t.magnitudeSquared(t.subtract(u, z, I));
                            if (Y > G) {
                                var k = Math.sqrt(Y);
                                (b = 0.5 * (b + k)), (G = b * b);
                                var K = k - b;
                                (z.x = (b * z.x + K * u.x) / k),
                                    (z.y = (b * z.y + K * u.y) / k),
                                    (z.z = (b * z.z + K * u.z) / k);
                            }
                        }
                        return (
                            b < H
                                ? (t.clone(z, o.center), (o.radius = b))
                                : (t.clone(q, o.center), (o.radius = H)),
                            o
                        );
                    }),
                    (T.fromEncodedCartesianVertices = function (e, n, r) {
                        if (
                            (a(r) || (r = new T()),
                            !a(e) ||
                                !a(n) ||
                                e.length !== n.length ||
                                0 === e.length)
                        )
                            return (
                                (r.center = t.clone(t.ZERO, r.center)),
                                (r.radius = 0),
                                r
                            );
                        var i = d;
                        (i.x = e[0] + n[0]),
                            (i.y = e[1] + n[1]),
                            (i.z = e[2] + n[2]);
                        var o,
                            u = t.clone(i, R),
                            E = t.clone(i, l),
                            s = t.clone(i, f),
                            c = t.clone(i, A),
                            _ = t.clone(i, h),
                            y = t.clone(i, N),
                            p = e.length;
                        for (o = 0; o < p; o += 3) {
                            var C = e[o] + n[o],
                                U = e[o + 1] + n[o + 1],
                                L = e[o + 2] + n[o + 2];
                            (i.x = C),
                                (i.y = U),
                                (i.z = L),
                                C < u.x && t.clone(i, u),
                                C > c.x && t.clone(i, c),
                                U < E.y && t.clone(i, E),
                                U > _.y && t.clone(i, _),
                                L < s.z && t.clone(i, s),
                                L > y.z && t.clone(i, y);
                        }
                        var F = t.magnitudeSquared(t.subtract(c, u, I)),
                            P = t.magnitudeSquared(t.subtract(_, E, I)),
                            g = t.magnitudeSquared(t.subtract(y, s, I)),
                            w = u,
                            v = c,
                            x = F;
                        P > x && ((x = P), (w = E), (v = _)),
                            g > x && ((x = g), (w = s), (v = y));
                        var D = S;
                        (D.x = 0.5 * (w.x + v.x)),
                            (D.y = 0.5 * (w.y + v.y)),
                            (D.z = 0.5 * (w.z + v.z));
                        var B = t.magnitudeSquared(t.subtract(v, D, I)),
                            z = Math.sqrt(B),
                            G = m;
                        (G.x = u.x), (G.y = E.y), (G.z = s.z);
                        var b = O;
                        (b.x = c.x), (b.y = _.y), (b.z = y.z);
                        var X = t.multiplyByScalar(t.add(G, b, I), 0.5, M),
                            V = 0;
                        for (o = 0; o < p; o += 3) {
                            (i.x = e[o] + n[o]),
                                (i.y = e[o + 1] + n[o + 1]),
                                (i.z = e[o + 2] + n[o + 2]);
                            var q = t.magnitude(t.subtract(i, X, I));
                            q > V && (V = q);
                            var H = t.magnitudeSquared(t.subtract(i, D, I));
                            if (H > B) {
                                var W = Math.sqrt(H);
                                (z = 0.5 * (z + W)), (B = z * z);
                                var Y = W - z;
                                (D.x = (z * D.x + Y * i.x) / W),
                                    (D.y = (z * D.y + Y * i.y) / W),
                                    (D.z = (z * D.z + Y * i.z) / W);
                            }
                        }
                        return (
                            z < V
                                ? (t.clone(D, r.center), (r.radius = z))
                                : (t.clone(X, r.center), (r.radius = V)),
                            r
                        );
                    }),
                    (T.fromCornerPoints = function (e, n, r) {
                        a(r) || (r = new T());
                        var i = r.center;
                        return (
                            t.add(e, n, i),
                            t.multiplyByScalar(i, 0.5, i),
                            (r.radius = t.distance(i, n)),
                            r
                        );
                    }),
                    (T.fromEllipsoid = function (e, n) {
                        return (
                            a(n) || (n = new T()),
                            t.clone(t.ZERO, n.center),
                            (n.radius = e.maximumRadius),
                            n
                        );
                    });
                var P = new t();
                T.fromBoundingSpheres = function (e, n) {
                    if ((a(n) || (n = new T()), !a(e) || 0 === e.length))
                        return (
                            (n.center = t.clone(t.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r = e.length;
                    if (1 === r) return T.clone(e[0], n);
                    if (2 === r) return T.union(e[0], e[1], n);
                    var i,
                        o = [];
                    for (i = 0; i < r; i++) o.push(e[i].center);
                    n = T.fromPoints(o, n);
                    var u = n.center,
                        E = n.radius;
                    for (i = 0; i < r; i++) {
                        var s = e[i];
                        E = Math.max(E, t.distance(u, s.center, P) + s.radius);
                    }
                    return (n.radius = E), n;
                };
                var g = new t(),
                    w = new t(),
                    v = new t();
                (T.fromOrientedBoundingBox = function (e, n) {
                    a(n) || (n = new T());
                    var r = e.halfAxes,
                        i = s.getColumn(r, 0, g),
                        o = s.getColumn(r, 1, w),
                        u = s.getColumn(r, 2, v);
                    return (
                        t.add(i, o, i),
                        t.add(i, u, i),
                        (n.center = t.clone(e.center, n.center)),
                        (n.radius = t.magnitude(i)),
                        n
                    );
                }),
                    (T.clone = function (e, n) {
                        if (a(e))
                            return a(n)
                                ? ((n.center = t.clone(e.center, n.center)),
                                  (n.radius = e.radius),
                                  n)
                                : new T(e.center, e.radius);
                    }),
                    (T.packedLength = 4),
                    (T.pack = function (t, e, n) {
                        n = r(n, 0);
                        var a = t.center;
                        return (
                            (e[n++] = a.x),
                            (e[n++] = a.y),
                            (e[n++] = a.z),
                            (e[n] = t.radius),
                            e
                        );
                    }),
                    (T.unpack = function (t, e, n) {
                        (e = r(e, 0)), a(n) || (n = new T());
                        var i = n.center;
                        return (
                            (i.x = t[e++]),
                            (i.y = t[e++]),
                            (i.z = t[e++]),
                            (n.radius = t[e]),
                            n
                        );
                    });
                var x = new t(),
                    D = new t();
                T.union = function (e, n, r) {
                    a(r) || (r = new T());
                    var i = e.center,
                        o = e.radius,
                        u = n.center,
                        E = n.radius,
                        s = t.subtract(u, i, x),
                        c = t.magnitude(s);
                    if (o >= c + E) return e.clone(r), r;
                    if (E >= c + o) return n.clone(r), r;
                    var _ = 0.5 * (o + c + E),
                        R = t.multiplyByScalar(s, (-o + _) / c, D);
                    return (
                        t.add(R, i, R), t.clone(R, r.center), (r.radius = _), r
                    );
                };
                var B = new t();
                (T.expand = function (e, n, r) {
                    r = T.clone(e, r);
                    var a = t.magnitude(t.subtract(n, r.center, B));
                    return a > r.radius && (r.radius = a), r;
                }),
                    (T.intersectPlane = function (e, n) {
                        var r = e.center,
                            a = e.radius,
                            i = n.normal,
                            o = t.dot(i, r) + n.distance;
                        return o < -a
                            ? u.OUTSIDE
                            : o < a
                              ? u.INTERSECTING
                              : u.INSIDE;
                    }),
                    (T.transform = function (t, e, n) {
                        return (
                            a(n) || (n = new T()),
                            (n.center = c.multiplyByPoint(
                                e,
                                t.center,
                                n.center,
                            )),
                            (n.radius = c.getMaximumScale(e) * t.radius),
                            n
                        );
                    });
                var z = new t();
                (T.distanceSquaredTo = function (e, n) {
                    var r = t.subtract(e.center, n, z);
                    return t.magnitudeSquared(r) - e.radius * e.radius;
                }),
                    (T.transformWithoutScale = function (t, e, n) {
                        return (
                            a(n) || (n = new T()),
                            (n.center = c.multiplyByPoint(
                                e,
                                t.center,
                                n.center,
                            )),
                            (n.radius = t.radius),
                            n
                        );
                    });
                var G = new t();
                T.computePlaneDistances = function (e, n, r, i) {
                    a(i) || (i = new E());
                    var o = t.subtract(e.center, n, G),
                        u = t.dot(r, o);
                    return (i.start = u - e.radius), (i.stop = u + e.radius), i;
                };
                for (
                    var b = new t(),
                        X = new t(),
                        V = new t(),
                        q = new t(),
                        H = new t(),
                        W = new e(),
                        Y = new Array(8),
                        k = 0;
                    k < 8;
                    ++k
                )
                    Y[k] = new t();
                var K = new o();
                return (
                    (T.projectTo2D = function (e, n, a) {
                        n = r(n, K);
                        var i = n.ellipsoid,
                            o = e.center,
                            u = e.radius,
                            E = i.geodeticSurfaceNormal(o, b),
                            s = t.cross(t.UNIT_Z, E, X);
                        t.normalize(s, s);
                        var c = t.cross(E, s, V);
                        t.normalize(c, c),
                            t.multiplyByScalar(E, u, E),
                            t.multiplyByScalar(c, u, c),
                            t.multiplyByScalar(s, u, s);
                        var _ = t.negate(c, H),
                            R = t.negate(s, q),
                            l = Y,
                            f = l[0];
                        t.add(E, c, f),
                            t.add(f, s, f),
                            (f = l[1]),
                            t.add(E, c, f),
                            t.add(f, R, f),
                            (f = l[2]),
                            t.add(E, _, f),
                            t.add(f, R, f),
                            (f = l[3]),
                            t.add(E, _, f),
                            t.add(f, s, f),
                            t.negate(E, E),
                            (f = l[4]),
                            t.add(E, c, f),
                            t.add(f, s, f),
                            (f = l[5]),
                            t.add(E, c, f),
                            t.add(f, R, f),
                            (f = l[6]),
                            t.add(E, _, f),
                            t.add(f, R, f),
                            (f = l[7]),
                            t.add(E, _, f),
                            t.add(f, s, f);
                        for (var A = l.length, h = 0; h < A; ++h) {
                            var N = l[h];
                            t.add(o, N, N);
                            var d = i.cartesianToCartographic(N, W);
                            n.project(d, N);
                        }
                        (a = T.fromPoints(l, a)), (o = a.center);
                        var I = o.x,
                            S = o.y,
                            m = o.z;
                        return (o.x = m), (o.y = I), (o.z = S), a;
                    }),
                    (T.isOccluded = function (t, e) {
                        return !e.isBoundingSphereVisible(t);
                    }),
                    (T.equals = function (e, n) {
                        return (
                            e === n ||
                            (a(e) &&
                                a(n) &&
                                t.equals(e.center, n.center) &&
                                e.radius === n.radius)
                        );
                    }),
                    (T.prototype.intersectPlane = function (t) {
                        return T.intersectPlane(this, t);
                    }),
                    (T.prototype.distanceSquaredTo = function (t) {
                        return T.distanceSquaredTo(this, t);
                    }),
                    (T.prototype.computePlaneDistances = function (t, e, n) {
                        return T.computePlaneDistances(this, t, e, n);
                    }),
                    (T.prototype.isOccluded = function (t) {
                        return T.isOccluded(this, t);
                    }),
                    (T.prototype.equals = function (t) {
                        return T.equals(this, t);
                    }),
                    (T.prototype.clone = function (t) {
                        return T.clone(this, t);
                    }),
                    T
                );
            },
        ),
        define(
            'Core/Cartesian2',
            [
                './Check',
                './defaultValue',
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
            ],
            function (t, e, n, r, a, i) {
                'use strict';
                function o(t, n) {
                    (this.x = e(t, 0)), (this.y = e(n, 0));
                }
                (o.fromElements = function (t, e, r) {
                    return n(r) ? ((r.x = t), (r.y = e), r) : new o(t, e);
                }),
                    (o.clone = function (t, e) {
                        if (n(t))
                            return n(e)
                                ? ((e.x = t.x), (e.y = t.y), e)
                                : new o(t.x, t.y);
                    }),
                    (o.fromCartesian3 = o.clone),
                    (o.fromCartesian4 = o.clone),
                    (o.packedLength = 2),
                    (o.pack = function (t, n, r) {
                        return (r = e(r, 0)), (n[r++] = t.x), (n[r] = t.y), n;
                    }),
                    (o.unpack = function (t, r, a) {
                        return (
                            (r = e(r, 0)),
                            n(a) || (a = new o()),
                            (a.x = t[r++]),
                            (a.y = t[r]),
                            a
                        );
                    }),
                    (o.packArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = 2 * r) : (e = new Array(2 * r));
                        for (var a = 0; a < r; ++a) o.pack(t[a], e, 2 * a);
                        return e;
                    }),
                    (o.unpackArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = r / 2) : (e = new Array(r / 2));
                        for (var a = 0; a < r; a += 2) {
                            var i = a / 2;
                            e[i] = o.unpack(t, a, e[i]);
                        }
                        return e;
                    }),
                    (o.fromArray = o.unpack),
                    (o.maximumComponent = function (t) {
                        return Math.max(t.x, t.y);
                    }),
                    (o.minimumComponent = function (t) {
                        return Math.min(t.x, t.y);
                    }),
                    (o.minimumByComponent = function (t, e, n) {
                        return (
                            (n.x = Math.min(t.x, e.x)),
                            (n.y = Math.min(t.y, e.y)),
                            n
                        );
                    }),
                    (o.maximumByComponent = function (t, e, n) {
                        return (
                            (n.x = Math.max(t.x, e.x)),
                            (n.y = Math.max(t.y, e.y)),
                            n
                        );
                    }),
                    (o.magnitudeSquared = function (t) {
                        return t.x * t.x + t.y * t.y;
                    }),
                    (o.magnitude = function (t) {
                        return Math.sqrt(o.magnitudeSquared(t));
                    });
                var u = new o();
                (o.distance = function (t, e) {
                    return o.subtract(t, e, u), o.magnitude(u);
                }),
                    (o.distanceSquared = function (t, e) {
                        return o.subtract(t, e, u), o.magnitudeSquared(u);
                    }),
                    (o.normalize = function (t, e) {
                        var n = o.magnitude(t);
                        return (e.x = t.x / n), (e.y = t.y / n), e;
                    }),
                    (o.dot = function (t, e) {
                        return t.x * e.x + t.y * e.y;
                    }),
                    (o.multiplyComponents = function (t, e, n) {
                        return (n.x = t.x * e.x), (n.y = t.y * e.y), n;
                    }),
                    (o.divideComponents = function (t, e, n) {
                        return (n.x = t.x / e.x), (n.y = t.y / e.y), n;
                    }),
                    (o.add = function (t, e, n) {
                        return (n.x = t.x + e.x), (n.y = t.y + e.y), n;
                    }),
                    (o.subtract = function (t, e, n) {
                        return (n.x = t.x - e.x), (n.y = t.y - e.y), n;
                    }),
                    (o.multiplyByScalar = function (t, e, n) {
                        return (n.x = t.x * e), (n.y = t.y * e), n;
                    }),
                    (o.divideByScalar = function (t, e, n) {
                        return (n.x = t.x / e), (n.y = t.y / e), n;
                    }),
                    (o.negate = function (t, e) {
                        return (e.x = -t.x), (e.y = -t.y), e;
                    }),
                    (o.abs = function (t, e) {
                        return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), e;
                    });
                var E = new o();
                o.lerp = function (t, e, n, r) {
                    return (
                        o.multiplyByScalar(e, n, E),
                        (r = o.multiplyByScalar(t, 1 - n, r)),
                        o.add(E, r, r)
                    );
                };
                var s = new o(),
                    c = new o();
                o.angleBetween = function (t, e) {
                    return (
                        o.normalize(t, s),
                        o.normalize(e, c),
                        i.acosClamped(o.dot(s, c))
                    );
                };
                var _ = new o();
                return (
                    (o.mostOrthogonalAxis = function (t, e) {
                        var n = o.normalize(t, _);
                        return (
                            o.abs(n, n),
                            (e =
                                n.x <= n.y
                                    ? o.clone(o.UNIT_X, e)
                                    : o.clone(o.UNIT_Y, e))
                        );
                    }),
                    (o.equals = function (t, e) {
                        return (
                            t === e ||
                            (n(t) && n(e) && t.x === e.x && t.y === e.y)
                        );
                    }),
                    (o.equalsArray = function (t, e, n) {
                        return t.x === e[n] && t.y === e[n + 1];
                    }),
                    (o.equalsEpsilon = function (t, e, r, a) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                i.equalsEpsilon(t.x, e.x, r, a) &&
                                i.equalsEpsilon(t.y, e.y, r, a))
                        );
                    }),
                    (o.ZERO = a(new o(0, 0))),
                    (o.UNIT_X = a(new o(1, 0))),
                    (o.UNIT_Y = a(new o(0, 1))),
                    (o.prototype.clone = function (t) {
                        return o.clone(this, t);
                    }),
                    (o.prototype.equals = function (t) {
                        return o.equals(this, t);
                    }),
                    (o.prototype.equalsEpsilon = function (t, e, n) {
                        return o.equalsEpsilon(this, t, e, n);
                    }),
                    (o.prototype.toString = function () {
                        return '(' + this.x + ', ' + this.y + ')';
                    }),
                    o
                );
            },
        ),
        define(
            'Core/Fullscreen',
            ['./defined', './defineProperties'],
            function (t, e) {
                'use strict';
                var n,
                    r = {
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
                                    return document[r.fullscreenElement];
                            },
                        },
                        changeEventName: {
                            get: function () {
                                if (a.supportsFullscreen())
                                    return r.fullscreenchange;
                            },
                        },
                        errorEventName: {
                            get: function () {
                                if (a.supportsFullscreen())
                                    return r.fullscreenerror;
                            },
                        },
                        enabled: {
                            get: function () {
                                if (a.supportsFullscreen())
                                    return document[r.fullscreenEnabled];
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
                        if (t(n)) return n;
                        n = !1;
                        var e = document.body;
                        if ('function' == typeof e.requestFullscreen)
                            return (
                                (r.requestFullscreen = 'requestFullscreen'),
                                (r.exitFullscreen = 'exitFullscreen'),
                                (r.fullscreenEnabled = 'fullscreenEnabled'),
                                (r.fullscreenElement = 'fullscreenElement'),
                                (r.fullscreenchange = 'fullscreenchange'),
                                (r.fullscreenerror = 'fullscreenerror'),
                                (n = !0)
                            );
                        for (
                            var a,
                                i = ['webkit', 'moz', 'o', 'ms', 'khtml'],
                                o = 0,
                                u = i.length;
                            o < u;
                            ++o
                        ) {
                            var E = i[o];
                            (a = E + 'RequestFullscreen'),
                                'function' == typeof e[a]
                                    ? ((r.requestFullscreen = a), (n = !0))
                                    : ((a = E + 'RequestFullScreen'),
                                      'function' == typeof e[a] &&
                                          ((r.requestFullscreen = a),
                                          (n = !0))),
                                (a = E + 'ExitFullscreen'),
                                'function' == typeof document[a]
                                    ? (r.exitFullscreen = a)
                                    : ((a = E + 'CancelFullScreen'),
                                      'function' == typeof document[a] &&
                                          (r.exitFullscreen = a)),
                                (a = E + 'FullscreenEnabled'),
                                void 0 !== document[a]
                                    ? (r.fullscreenEnabled = a)
                                    : ((a = E + 'FullScreenEnabled'),
                                      void 0 !== document[a] &&
                                          (r.fullscreenEnabled = a)),
                                (a = E + 'FullscreenElement'),
                                void 0 !== document[a]
                                    ? (r.fullscreenElement = a)
                                    : ((a = E + 'FullScreenElement'),
                                      void 0 !== document[a] &&
                                          (r.fullscreenElement = a)),
                                (a = E + 'fullscreenchange'),
                                void 0 !== document['on' + a] &&
                                    ('ms' === E && (a = 'MSFullscreenChange'),
                                    (r.fullscreenchange = a)),
                                (a = E + 'fullscreenerror'),
                                void 0 !== document['on' + a] &&
                                    ('ms' === E && (a = 'MSFullscreenError'),
                                    (r.fullscreenerror = a));
                        }
                        return n;
                    }),
                    (a.requestFullscreen = function (t, e) {
                        a.supportsFullscreen() &&
                            t[r.requestFullscreen]({ vrDisplay: e });
                    }),
                    (a.exitFullscreen = function () {
                        a.supportsFullscreen() && document[r.exitFullscreen]();
                    }),
                    a
                );
            },
        ),
        define(
            'Core/FeatureDetection',
            ['./defaultValue', './defined', './Fullscreen'],
            function (t, e, n) {
                'use strict';
                function r(t) {
                    for (var e = t.split('.'), n = 0, r = e.length; n < r; ++n)
                        e[n] = parseInt(e[n], 10);
                    return e;
                }
                function a() {
                    if (!e(S) && ((S = !1), !T())) {
                        var t = / Chrome\/([\.0-9]+)/.exec(I.userAgent);
                        null !== t && ((S = !0), (m = r(t[1])));
                    }
                    return S;
                }
                function i() {
                    return a() && m;
                }
                function o() {
                    if (
                        !e(O) &&
                        ((O = !1),
                        !a() && !T() && / Safari\/[\.0-9]+/.test(I.userAgent))
                    ) {
                        var t = / Version\/([\.0-9]+)/.exec(I.userAgent);
                        null !== t && ((O = !0), (M = r(t[1])));
                    }
                    return O;
                }
                function u() {
                    return o() && M;
                }
                function E() {
                    if (!e(y)) {
                        y = !1;
                        var t = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            I.userAgent,
                        );
                        null !== t &&
                            ((y = !0), (p = r(t[1])), (p.isNightly = !!t[2]));
                    }
                    return y;
                }
                function s() {
                    return E() && p;
                }
                function c() {
                    if (!e(C)) {
                        C = !1;
                        var t;
                        'Microsoft Internet Explorer' === I.appName
                            ? null !==
                                  (t = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      I.userAgent,
                                  )) && ((C = !0), (U = r(t[1])))
                            : 'Netscape' === I.appName &&
                              null !==
                                  (t =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          I.userAgent,
                                      )) &&
                              ((C = !0), (U = r(t[1])));
                    }
                    return C;
                }
                function _() {
                    return c() && U;
                }
                function T() {
                    if (!e(L)) {
                        L = !1;
                        var t = / Edge\/([\.0-9]+)/.exec(I.userAgent);
                        null !== t && ((L = !0), (F = r(t[1])));
                    }
                    return L;
                }
                function R() {
                    return T() && F;
                }
                function l() {
                    if (!e(P)) {
                        P = !1;
                        var t = /Firefox\/([\.0-9]+)/.exec(I.userAgent);
                        null !== t && ((P = !0), (g = r(t[1])));
                    }
                    return P;
                }
                function f() {
                    return e(w) || (w = /Windows/i.test(I.appVersion)), w;
                }
                function A() {
                    return l() && g;
                }
                function h() {
                    return (
                        e(v) ||
                            (v =
                                'undefined' != typeof PointerEvent &&
                                (!e(I.pointerEnabled) || I.pointerEnabled)),
                        v
                    );
                }
                function N() {
                    if (!e(D)) {
                        var t = document.createElement('canvas');
                        t.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var n = t.style.imageRendering;
                        (D = e(n) && '' !== n), D && (x = n);
                    }
                    return D;
                }
                function d() {
                    return N() ? x : void 0;
                }
                var I;
                I = 'undefined' != typeof navigator ? navigator : {};
                var S,
                    m,
                    O,
                    M,
                    y,
                    p,
                    C,
                    U,
                    L,
                    F,
                    P,
                    g,
                    w,
                    v,
                    x,
                    D,
                    B = {
                        isChrome: a,
                        chromeVersion: i,
                        isSafari: o,
                        safariVersion: u,
                        isWebkit: E,
                        webkitVersion: s,
                        isInternetExplorer: c,
                        internetExplorerVersion: _,
                        isEdge: T,
                        edgeVersion: R,
                        isFirefox: l,
                        firefoxVersion: A,
                        isWindows: f,
                        hardwareConcurrency: t(I.hardwareConcurrency, 3),
                        supportsPointerEvents: h,
                        supportsImageRenderingPixelated: N,
                        imageRenderingValue: d,
                    };
                return (
                    (B.supportsFullscreen = function () {
                        return n.supportsFullscreen();
                    }),
                    (B.supportsTypedArrays = function () {
                        return 'undefined' != typeof ArrayBuffer;
                    }),
                    (B.supportsWebWorkers = function () {
                        return 'undefined' != typeof Worker;
                    }),
                    B
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
            function (t, e, n, r, a, i) {
                'use strict';
                if (!r.supportsTypedArrays()) return {};
                var o = {
                    BYTE: i.BYTE,
                    UNSIGNED_BYTE: i.UNSIGNED_BYTE,
                    SHORT: i.SHORT,
                    UNSIGNED_SHORT: i.UNSIGNED_SHORT,
                    INT: i.INT,
                    UNSIGNED_INT: i.UNSIGNED_INT,
                    FLOAT: i.FLOAT,
                    DOUBLE: i.DOUBLE,
                };
                return (
                    (o.getSizeInBytes = function (t) {
                        switch (t) {
                            case o.BYTE:
                                return Int8Array.BYTES_PER_ELEMENT;
                            case o.UNSIGNED_BYTE:
                                return Uint8Array.BYTES_PER_ELEMENT;
                            case o.SHORT:
                                return Int16Array.BYTES_PER_ELEMENT;
                            case o.UNSIGNED_SHORT:
                                return Uint16Array.BYTES_PER_ELEMENT;
                            case o.INT:
                                return Int32Array.BYTES_PER_ELEMENT;
                            case o.UNSIGNED_INT:
                                return Uint32Array.BYTES_PER_ELEMENT;
                            case o.FLOAT:
                                return Float32Array.BYTES_PER_ELEMENT;
                            case o.DOUBLE:
                                return Float64Array.BYTES_PER_ELEMENT;
                        }
                    }),
                    (o.fromTypedArray = function (t) {
                        return t instanceof Int8Array
                            ? o.BYTE
                            : t instanceof Uint8Array
                              ? o.UNSIGNED_BYTE
                              : t instanceof Int16Array
                                ? o.SHORT
                                : t instanceof Uint16Array
                                  ? o.UNSIGNED_SHORT
                                  : t instanceof Int32Array
                                    ? o.INT
                                    : t instanceof Uint32Array
                                      ? o.UNSIGNED_INT
                                      : t instanceof Float32Array
                                        ? o.FLOAT
                                        : t instanceof Float64Array
                                          ? o.DOUBLE
                                          : void 0;
                    }),
                    (o.validate = function (t) {
                        return (
                            e(t) &&
                            (t === o.BYTE ||
                                t === o.UNSIGNED_BYTE ||
                                t === o.SHORT ||
                                t === o.UNSIGNED_SHORT ||
                                t === o.INT ||
                                t === o.UNSIGNED_INT ||
                                t === o.FLOAT ||
                                t === o.DOUBLE)
                        );
                    }),
                    (o.createTypedArray = function (t, e) {
                        switch (t) {
                            case o.BYTE:
                                return new Int8Array(e);
                            case o.UNSIGNED_BYTE:
                                return new Uint8Array(e);
                            case o.SHORT:
                                return new Int16Array(e);
                            case o.UNSIGNED_SHORT:
                                return new Uint16Array(e);
                            case o.INT:
                                return new Int32Array(e);
                            case o.UNSIGNED_INT:
                                return new Uint32Array(e);
                            case o.FLOAT:
                                return new Float32Array(e);
                            case o.DOUBLE:
                                return new Float64Array(e);
                        }
                    }),
                    (o.createArrayBufferView = function (e, n, r, a) {
                        switch (
                            ((r = t(r, 0)),
                            (a = t(
                                a,
                                (n.byteLength - r) / o.getSizeInBytes(e),
                            )),
                            e)
                        ) {
                            case o.BYTE:
                                return new Int8Array(n, r, a);
                            case o.UNSIGNED_BYTE:
                                return new Uint8Array(n, r, a);
                            case o.SHORT:
                                return new Int16Array(n, r, a);
                            case o.UNSIGNED_SHORT:
                                return new Uint16Array(n, r, a);
                            case o.INT:
                                return new Int32Array(n, r, a);
                            case o.UNSIGNED_INT:
                                return new Uint32Array(n, r, a);
                            case o.FLOAT:
                                return new Float32Array(n, r, a);
                            case o.DOUBLE:
                                return new Float64Array(n, r, a);
                        }
                    }),
                    (o.fromName = function (t) {
                        switch (t) {
                            case 'BYTE':
                                return o.BYTE;
                            case 'UNSIGNED_BYTE':
                                return o.UNSIGNED_BYTE;
                            case 'SHORT':
                                return o.SHORT;
                            case 'UNSIGNED_SHORT':
                                return o.UNSIGNED_SHORT;
                            case 'INT':
                                return o.INT;
                            case 'UNSIGNED_INT':
                                return o.UNSIGNED_INT;
                            case 'FLOAT':
                                return o.FLOAT;
                            case 'DOUBLE':
                                return o.DOUBLE;
                        }
                    }),
                    a(o)
                );
            },
        ),
        define('Core/CylinderGeometryLibrary', ['./Math'], function (t) {
            'use strict';
            var e = {};
            return (
                (e.computePositions = function (e, n, r, a, i) {
                    var o,
                        u = 0.5 * e,
                        E = -u,
                        s = a + a,
                        c = i ? 2 * s : s,
                        _ = new Float64Array(3 * c),
                        T = 0,
                        R = 0,
                        l = i ? 3 * s : 0,
                        f = i ? 3 * (s + a) : 3 * a;
                    for (o = 0; o < a; o++) {
                        var A = (o / a) * t.TWO_PI,
                            h = Math.cos(A),
                            N = Math.sin(A),
                            d = h * r,
                            I = N * r,
                            S = h * n,
                            m = N * n;
                        (_[R + l] = d),
                            (_[R + l + 1] = I),
                            (_[R + l + 2] = E),
                            (_[R + f] = S),
                            (_[R + f + 1] = m),
                            (_[R + f + 2] = u),
                            (R += 3),
                            i &&
                                ((_[T++] = d),
                                (_[T++] = I),
                                (_[T++] = E),
                                (_[T++] = S),
                                (_[T++] = m),
                                (_[T++] = u));
                    }
                    return _;
                }),
                e
            );
        }),
        define('Core/GeometryType', ['./freezeObject'], function (t) {
            'use strict';
            return t({ NONE: 0, TRIANGLES: 1, LINES: 2, POLYLINES: 3 });
        }),
        define(
            'Core/PrimitiveType',
            ['./freezeObject', './WebGLConstants'],
            function (t, e) {
                'use strict';
                var n = {
                    POINTS: e.POINTS,
                    LINES: e.LINES,
                    LINE_LOOP: e.LINE_LOOP,
                    LINE_STRIP: e.LINE_STRIP,
                    TRIANGLES: e.TRIANGLES,
                    TRIANGLE_STRIP: e.TRIANGLE_STRIP,
                    TRIANGLE_FAN: e.TRIANGLE_FAN,
                    validate: function (t) {
                        return (
                            t === n.POINTS ||
                            t === n.LINES ||
                            t === n.LINE_LOOP ||
                            t === n.LINE_STRIP ||
                            t === n.TRIANGLES ||
                            t === n.TRIANGLE_STRIP ||
                            t === n.TRIANGLE_FAN
                        );
                    },
                };
                return t(n);
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
            function (t, e, n, r, a, i) {
                'use strict';
                function o(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this.attributes = t.attributes),
                        (this.indices = t.indices),
                        (this.primitiveType = e(t.primitiveType, i.TRIANGLES)),
                        (this.boundingSphere = t.boundingSphere),
                        (this.geometryType = e(t.geometryType, a.NONE)),
                        (this.boundingSphereCV = t.boundingSphereCV);
                }
                return (
                    (o.computeNumberOfVertices = function (t) {
                        var e = -1;
                        for (var r in t.attributes)
                            if (
                                t.attributes.hasOwnProperty(r) &&
                                n(t.attributes[r]) &&
                                n(t.attributes[r].values)
                            ) {
                                var a = t.attributes[r],
                                    i =
                                        a.values.length /
                                        a.componentsPerAttribute;
                                e = i;
                            }
                        return e;
                    }),
                    o
                );
            },
        ),
        define(
            'Core/GeometryAttribute',
            ['./defaultValue', './defined', './DeveloperError'],
            function (t, e, n) {
                'use strict';
                function r(e) {
                    (e = t(e, t.EMPTY_OBJECT)),
                        (this.componentDatatype = e.componentDatatype),
                        (this.componentsPerAttribute =
                            e.componentsPerAttribute),
                        (this.normalize = t(e.normalize, !1)),
                        (this.values = e.values);
                }
                return r;
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
            function (t, e, n, r, a) {
                'use strict';
                var i = {
                    UNSIGNED_BYTE: a.UNSIGNED_BYTE,
                    UNSIGNED_SHORT: a.UNSIGNED_SHORT,
                    UNSIGNED_INT: a.UNSIGNED_INT,
                };
                return (
                    (i.getSizeInBytes = function (t) {
                        switch (t) {
                            case i.UNSIGNED_BYTE:
                                return Uint8Array.BYTES_PER_ELEMENT;
                            case i.UNSIGNED_SHORT:
                                return Uint16Array.BYTES_PER_ELEMENT;
                            case i.UNSIGNED_INT:
                                return Uint32Array.BYTES_PER_ELEMENT;
                        }
                    }),
                    (i.validate = function (e) {
                        return (
                            t(e) &&
                            (e === i.UNSIGNED_BYTE ||
                                e === i.UNSIGNED_SHORT ||
                                e === i.UNSIGNED_INT)
                        );
                    }),
                    (i.createTypedArray = function (t, e) {
                        return t >= r.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(e)
                            : new Uint16Array(e);
                    }),
                    (i.createTypedArrayFromArrayBuffer = function (t, e, n, a) {
                        return t >= r.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(e, n, a)
                            : new Uint16Array(e, n, a);
                    }),
                    n(i)
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
            function (t, e, n, r) {
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
                    (a.POSITION_ONLY = r(new a({ position: !0 }))),
                    (a.POSITION_AND_NORMAL = r(
                        new a({ position: !0, normal: !0 }),
                    )),
                    (a.POSITION_NORMAL_AND_ST = r(
                        new a({ position: !0, normal: !0, st: !0 }),
                    )),
                    (a.POSITION_AND_ST = r(new a({ position: !0, st: !0 }))),
                    (a.POSITION_AND_COLOR = r(
                        new a({ position: !0, color: !0 }),
                    )),
                    (a.ALL = r(
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
                    (a.pack = function (e, n, r) {
                        return (
                            (r = t(r, 0)),
                            (n[r++] = e.position ? 1 : 0),
                            (n[r++] = e.normal ? 1 : 0),
                            (n[r++] = e.st ? 1 : 0),
                            (n[r++] = e.tangent ? 1 : 0),
                            (n[r++] = e.bitangent ? 1 : 0),
                            (n[r] = e.color ? 1 : 0),
                            n
                        );
                    }),
                    (a.unpack = function (n, r, i) {
                        return (
                            (r = t(r, 0)),
                            e(i) || (i = new a()),
                            (i.position = 1 === n[r++]),
                            (i.normal = 1 === n[r++]),
                            (i.st = 1 === n[r++]),
                            (i.tangent = 1 === n[r++]),
                            (i.bitangent = 1 === n[r++]),
                            (i.color = 1 === n[r]),
                            i
                        );
                    }),
                    (a.clone = function (t, n) {
                        if (e(t))
                            return (
                                e(n) || (n = new a()),
                                (n.position = t.position),
                                (n.normal = t.normal),
                                (n.st = t.st),
                                (n.tangent = t.tangent),
                                (n.bitangent = t.bitangent),
                                (n.color = t.color),
                                n
                            );
                    }),
                    a
                );
            },
        ),
        define(
            'Core/CylinderGeometry',
            [
                './BoundingSphere',
                './Cartesian2',
                './Cartesian3',
                './ComponentDatatype',
                './CylinderGeometryLibrary',
                './defaultValue',
                './defined',
                './DeveloperError',
                './Geometry',
                './GeometryAttribute',
                './GeometryAttributes',
                './IndexDatatype',
                './Math',
                './PrimitiveType',
                './VertexFormat',
            ],
            function (t, e, n, r, a, i, o, u, E, s, c, _, T, R, l) {
                'use strict';
                function f(t) {
                    t = i(t, i.EMPTY_OBJECT);
                    var e = t.length,
                        n = t.topRadius,
                        r = t.bottomRadius,
                        a = i(t.vertexFormat, l.DEFAULT),
                        o = i(t.slices, 128);
                    (this._length = e),
                        (this._topRadius = n),
                        (this._bottomRadius = r),
                        (this._vertexFormat = l.clone(a)),
                        (this._slices = o),
                        (this._workerName = 'createCylinderGeometry');
                }
                var A = new e(),
                    h = new n(),
                    N = new n(),
                    d = new n(),
                    I = new n();
                (f.packedLength = l.packedLength + 4),
                    (f.pack = function (t, e, n) {
                        return (
                            (n = i(n, 0)),
                            l.pack(t._vertexFormat, e, n),
                            (n += l.packedLength),
                            (e[n++] = t._length),
                            (e[n++] = t._topRadius),
                            (e[n++] = t._bottomRadius),
                            (e[n] = t._slices),
                            e
                        );
                    });
                var S = new l(),
                    m = {
                        vertexFormat: S,
                        length: void 0,
                        topRadius: void 0,
                        bottomRadius: void 0,
                        slices: void 0,
                    };
                return (
                    (f.unpack = function (t, e, n) {
                        e = i(e, 0);
                        var r = l.unpack(t, e, S);
                        e += l.packedLength;
                        var a = t[e++],
                            u = t[e++],
                            E = t[e++],
                            s = t[e];
                        return o(n)
                            ? ((n._vertexFormat = l.clone(r, n._vertexFormat)),
                              (n._length = a),
                              (n._topRadius = u),
                              (n._bottomRadius = E),
                              (n._slices = s),
                              n)
                            : ((m.length = a),
                              (m.topRadius = u),
                              (m.bottomRadius = E),
                              (m.slices = s),
                              new f(m));
                    }),
                    (f.createGeometry = function (i) {
                        var o = i._length,
                            u = i._topRadius,
                            l = i._bottomRadius,
                            f = i._vertexFormat,
                            S = i._slices;
                        if (
                            !(o <= 0 || u < 0 || l < 0 || (0 === u && 0 === l))
                        ) {
                            var m,
                                O = S + S,
                                M = S + O,
                                y = O + O,
                                p = a.computePositions(o, u, l, S, !0),
                                C = f.st ? new Float32Array(2 * y) : void 0,
                                U = f.normal ? new Float32Array(3 * y) : void 0,
                                L = f.tangent
                                    ? new Float32Array(3 * y)
                                    : void 0,
                                F = f.bitangent
                                    ? new Float32Array(3 * y)
                                    : void 0,
                                P = f.normal || f.tangent || f.bitangent;
                            if (P) {
                                var g = f.tangent || f.bitangent,
                                    w = 0,
                                    v = 0,
                                    x = 0,
                                    D = h;
                                D.z = 0;
                                var B = d,
                                    z = N;
                                for (m = 0; m < S; m++) {
                                    var G = (m / S) * T.TWO_PI,
                                        b = Math.cos(G),
                                        X = Math.sin(G);
                                    P &&
                                        ((D.x = b),
                                        (D.y = X),
                                        g &&
                                            (B = n.normalize(
                                                n.cross(n.UNIT_Z, D, B),
                                                B,
                                            )),
                                        f.normal &&
                                            ((U[w++] = b),
                                            (U[w++] = X),
                                            (U[w++] = 0),
                                            (U[w++] = b),
                                            (U[w++] = X),
                                            (U[w++] = 0)),
                                        f.tangent &&
                                            ((L[v++] = B.x),
                                            (L[v++] = B.y),
                                            (L[v++] = B.z),
                                            (L[v++] = B.x),
                                            (L[v++] = B.y),
                                            (L[v++] = B.z)),
                                        f.bitangent &&
                                            ((z = n.normalize(
                                                n.cross(D, B, z),
                                                z,
                                            )),
                                            (F[x++] = z.x),
                                            (F[x++] = z.y),
                                            (F[x++] = z.z),
                                            (F[x++] = z.x),
                                            (F[x++] = z.y),
                                            (F[x++] = z.z)));
                                }
                                for (m = 0; m < S; m++)
                                    f.normal &&
                                        ((U[w++] = 0),
                                        (U[w++] = 0),
                                        (U[w++] = -1)),
                                        f.tangent &&
                                            ((L[v++] = 1),
                                            (L[v++] = 0),
                                            (L[v++] = 0)),
                                        f.bitangent &&
                                            ((F[x++] = 0),
                                            (F[x++] = -1),
                                            (F[x++] = 0));
                                for (m = 0; m < S; m++)
                                    f.normal &&
                                        ((U[w++] = 0),
                                        (U[w++] = 0),
                                        (U[w++] = 1)),
                                        f.tangent &&
                                            ((L[v++] = 1),
                                            (L[v++] = 0),
                                            (L[v++] = 0)),
                                        f.bitangent &&
                                            ((F[x++] = 0),
                                            (F[x++] = 1),
                                            (F[x++] = 0));
                            }
                            var V = 12 * S - 12,
                                q = _.createTypedArray(y, V),
                                H = 0,
                                W = 0;
                            for (m = 0; m < S - 1; m++)
                                (q[H++] = W),
                                    (q[H++] = W + 2),
                                    (q[H++] = W + 3),
                                    (q[H++] = W),
                                    (q[H++] = W + 3),
                                    (q[H++] = W + 1),
                                    (W += 2);
                            for (
                                q[H++] = O - 2,
                                    q[H++] = 0,
                                    q[H++] = 1,
                                    q[H++] = O - 2,
                                    q[H++] = 1,
                                    q[H++] = O - 1,
                                    m = 1;
                                m < S - 1;
                                m++
                            )
                                (q[H++] = O + m + 1),
                                    (q[H++] = O + m),
                                    (q[H++] = O);
                            for (m = 1; m < S - 1; m++)
                                (q[H++] = M),
                                    (q[H++] = M + m),
                                    (q[H++] = M + m + 1);
                            var Y = 0;
                            if (f.st) {
                                var k = Math.max(u, l);
                                for (m = 0; m < y; m++) {
                                    var K = n.fromArray(p, 3 * m, I);
                                    (C[Y++] = (K.x + k) / (2 * k)),
                                        (C[Y++] = (K.y + k) / (2 * k));
                                }
                            }
                            var Z = new c();
                            f.position &&
                                (Z.position = new s({
                                    componentDatatype: r.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: p,
                                })),
                                f.normal &&
                                    (Z.normal = new s({
                                        componentDatatype: r.FLOAT,
                                        componentsPerAttribute: 3,
                                        values: U,
                                    })),
                                f.tangent &&
                                    (Z.tangent = new s({
                                        componentDatatype: r.FLOAT,
                                        componentsPerAttribute: 3,
                                        values: L,
                                    })),
                                f.bitangent &&
                                    (Z.bitangent = new s({
                                        componentDatatype: r.FLOAT,
                                        componentsPerAttribute: 3,
                                        values: F,
                                    })),
                                f.st &&
                                    (Z.st = new s({
                                        componentDatatype: r.FLOAT,
                                        componentsPerAttribute: 2,
                                        values: C,
                                    })),
                                (A.x = 0.5 * o),
                                (A.y = Math.max(l, u));
                            var j = new t(n.ZERO, e.magnitude(A));
                            return new E({
                                attributes: Z,
                                indices: q,
                                primitiveType: R.TRIANGLES,
                                boundingSphere: j,
                            });
                        }
                    }),
                    f
                );
            },
        ),
        define(
            'Workers/createCylinderGeometry',
            ['../Core/CylinderGeometry', '../Core/defined'],
            function (t, e) {
                'use strict';
                return function (n, r) {
                    return e(r) && (n = t.unpack(n, r)), t.createGeometry(n);
                };
            },
        );
})();
