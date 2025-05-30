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
                    (a.typeOf.number.equals = function (e, r, n, i) {
                        if (
                            (a.typeOf.number(e, n),
                            a.typeOf.number(r, i),
                            n !== i)
                        )
                            throw new t(
                                e +
                                    ' must be equal to ' +
                                    r +
                                    ', the actual values are ' +
                                    n +
                                    ' and ' +
                                    i,
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
                        var i = Math.abs(e - r);
                        return (
                            i <= a ||
                            i <= n * Math.max(Math.abs(e), Math.abs(r))
                        );
                    });
                var i = [1];
                (a.factorial = function (e) {
                    var t = i.length;
                    if (e >= t)
                        for (var r = i[t - 1], n = t; n <= e; n++)
                            i.push(r * n);
                    return i[e];
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
                var o = new e();
                return (
                    (a.setRandomNumberSeed = function (t) {
                        o = new e(t);
                    }),
                    (a.nextRandomNumber = function () {
                        return o.random();
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
            function (e, t, r, n, a, i) {
                'use strict';
                function o(e, r, n) {
                    (this.x = t(e, 0)), (this.y = t(r, 0)), (this.z = t(n, 0));
                }
                (o.fromSpherical = function (e, n) {
                    r(n) || (n = new o());
                    var a = e.clock,
                        i = e.cone,
                        u = t(e.magnitude, 1),
                        s = u * Math.sin(i);
                    return (
                        (n.x = s * Math.cos(a)),
                        (n.y = s * Math.sin(a)),
                        (n.z = u * Math.cos(i)),
                        n
                    );
                }),
                    (o.fromElements = function (e, t, n, a) {
                        return r(a)
                            ? ((a.x = e), (a.y = t), (a.z = n), a)
                            : new o(e, t, n);
                    }),
                    (o.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                                : new o(e.x, e.y, e.z);
                    }),
                    (o.fromCartesian4 = o.clone),
                    (o.packedLength = 3),
                    (o.pack = function (e, r, n) {
                        return (
                            (n = t(n, 0)),
                            (r[n++] = e.x),
                            (r[n++] = e.y),
                            (r[n] = e.z),
                            r
                        );
                    }),
                    (o.unpack = function (e, n, a) {
                        return (
                            (n = t(n, 0)),
                            r(a) || (a = new o()),
                            (a.x = e[n++]),
                            (a.y = e[n++]),
                            (a.z = e[n]),
                            a
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = 3 * n) : (t = new Array(3 * n));
                        for (var a = 0; a < n; ++a) o.pack(e[a], t, 3 * a);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = n / 3) : (t = new Array(n / 3));
                        for (var a = 0; a < n; a += 3) {
                            var i = a / 3;
                            t[i] = o.unpack(e, a, t[i]);
                        }
                        return t;
                    }),
                    (o.fromArray = o.unpack),
                    (o.maximumComponent = function (e) {
                        return Math.max(e.x, e.y, e.z);
                    }),
                    (o.minimumComponent = function (e) {
                        return Math.min(e.x, e.y, e.z);
                    }),
                    (o.minimumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.min(e.x, t.x)),
                            (r.y = Math.min(e.y, t.y)),
                            (r.z = Math.min(e.z, t.z)),
                            r
                        );
                    }),
                    (o.maximumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.max(e.x, t.x)),
                            (r.y = Math.max(e.y, t.y)),
                            (r.z = Math.max(e.z, t.z)),
                            r
                        );
                    }),
                    (o.magnitudeSquared = function (e) {
                        return e.x * e.x + e.y * e.y + e.z * e.z;
                    }),
                    (o.magnitude = function (e) {
                        return Math.sqrt(o.magnitudeSquared(e));
                    });
                var u = new o();
                (o.distance = function (e, t) {
                    return o.subtract(e, t, u), o.magnitude(u);
                }),
                    (o.distanceSquared = function (e, t) {
                        return o.subtract(e, t, u), o.magnitudeSquared(u);
                    }),
                    (o.normalize = function (e, t) {
                        var r = o.magnitude(e);
                        return (
                            (t.x = e.x / r), (t.y = e.y / r), (t.z = e.z / r), t
                        );
                    }),
                    (o.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z;
                    }),
                    (o.multiplyComponents = function (e, t, r) {
                        return (
                            (r.x = e.x * t.x),
                            (r.y = e.y * t.y),
                            (r.z = e.z * t.z),
                            r
                        );
                    }),
                    (o.divideComponents = function (e, t, r) {
                        return (
                            (r.x = e.x / t.x),
                            (r.y = e.y / t.y),
                            (r.z = e.z / t.z),
                            r
                        );
                    }),
                    (o.add = function (e, t, r) {
                        return (
                            (r.x = e.x + t.x),
                            (r.y = e.y + t.y),
                            (r.z = e.z + t.z),
                            r
                        );
                    }),
                    (o.subtract = function (e, t, r) {
                        return (
                            (r.x = e.x - t.x),
                            (r.y = e.y - t.y),
                            (r.z = e.z - t.z),
                            r
                        );
                    }),
                    (o.multiplyByScalar = function (e, t, r) {
                        return (
                            (r.x = e.x * t), (r.y = e.y * t), (r.z = e.z * t), r
                        );
                    }),
                    (o.divideByScalar = function (e, t, r) {
                        return (
                            (r.x = e.x / t), (r.y = e.y / t), (r.z = e.z / t), r
                        );
                    }),
                    (o.negate = function (e, t) {
                        return (t.x = -e.x), (t.y = -e.y), (t.z = -e.z), t;
                    }),
                    (o.abs = function (e, t) {
                        return (
                            (t.x = Math.abs(e.x)),
                            (t.y = Math.abs(e.y)),
                            (t.z = Math.abs(e.z)),
                            t
                        );
                    });
                var s = new o();
                o.lerp = function (e, t, r, n) {
                    return (
                        o.multiplyByScalar(t, r, s),
                        (n = o.multiplyByScalar(e, 1 - r, n)),
                        o.add(s, n, n)
                    );
                };
                var c = new o(),
                    l = new o();
                o.angleBetween = function (e, t) {
                    o.normalize(e, c), o.normalize(t, l);
                    var r = o.dot(c, l),
                        n = o.magnitude(o.cross(c, l, c));
                    return Math.atan2(n, r);
                };
                var E = new o();
                (o.mostOrthogonalAxis = function (e, t) {
                    var r = o.normalize(e, E);
                    return (
                        o.abs(r, r),
                        (t =
                            r.x <= r.y
                                ? r.x <= r.z
                                    ? o.clone(o.UNIT_X, t)
                                    : o.clone(o.UNIT_Z, t)
                                : r.y <= r.z
                                  ? o.clone(o.UNIT_Y, t)
                                  : o.clone(o.UNIT_Z, t))
                    );
                }),
                    (o.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                e.x === t.x &&
                                e.y === t.y &&
                                e.z === t.z)
                        );
                    }),
                    (o.equalsArray = function (e, t, r) {
                        return (
                            e.x === t[r] && e.y === t[r + 1] && e.z === t[r + 2]
                        );
                    }),
                    (o.equalsEpsilon = function (e, t, n, a) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                i.equalsEpsilon(e.x, t.x, n, a) &&
                                i.equalsEpsilon(e.y, t.y, n, a) &&
                                i.equalsEpsilon(e.z, t.z, n, a))
                        );
                    }),
                    (o.cross = function (e, t, r) {
                        var n = e.x,
                            a = e.y,
                            i = e.z,
                            o = t.x,
                            u = t.y,
                            s = t.z,
                            c = a * s - i * u,
                            l = i * o - n * s,
                            E = n * u - a * o;
                        return (r.x = c), (r.y = l), (r.z = E), r;
                    }),
                    (o.fromDegrees = function (e, t, r, n, a) {
                        return (
                            (e = i.toRadians(e)),
                            (t = i.toRadians(t)),
                            o.fromRadians(e, t, r, n, a)
                        );
                    });
                var f = new o(),
                    h = new o(),
                    d = new o(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (o.fromRadians = function (e, n, a, i, u) {
                        a = t(a, 0);
                        var s = r(i) ? i.radiiSquared : d,
                            c = Math.cos(n);
                        (f.x = c * Math.cos(e)),
                            (f.y = c * Math.sin(e)),
                            (f.z = Math.sin(n)),
                            (f = o.normalize(f, f)),
                            o.multiplyComponents(s, f, h);
                        var l = Math.sqrt(o.dot(f, h));
                        return (
                            (h = o.divideByScalar(h, l, h)),
                            (f = o.multiplyByScalar(f, a, f)),
                            r(u) || (u = new o()),
                            o.add(h, f, u)
                        );
                    }),
                    (o.fromDegreesArray = function (e, t, n) {
                        var a = e.length;
                        r(n) ? (n.length = a / 2) : (n = new Array(a / 2));
                        for (var i = 0; i < a; i += 2) {
                            var u = e[i],
                                s = e[i + 1],
                                c = i / 2;
                            n[c] = o.fromDegrees(u, s, 0, t, n[c]);
                        }
                        return n;
                    }),
                    (o.fromRadiansArray = function (e, t, n) {
                        var a = e.length;
                        r(n) ? (n.length = a / 2) : (n = new Array(a / 2));
                        for (var i = 0; i < a; i += 2) {
                            var u = e[i],
                                s = e[i + 1],
                                c = i / 2;
                            n[c] = o.fromRadians(u, s, 0, t, n[c]);
                        }
                        return n;
                    }),
                    (o.fromDegreesArrayHeights = function (e, t, n) {
                        var a = e.length;
                        r(n) ? (n.length = a / 3) : (n = new Array(a / 3));
                        for (var i = 0; i < a; i += 3) {
                            var u = e[i],
                                s = e[i + 1],
                                c = e[i + 2],
                                l = i / 3;
                            n[l] = o.fromDegrees(u, s, c, t, n[l]);
                        }
                        return n;
                    }),
                    (o.fromRadiansArrayHeights = function (e, t, n) {
                        var a = e.length;
                        r(n) ? (n.length = a / 3) : (n = new Array(a / 3));
                        for (var i = 0; i < a; i += 3) {
                            var u = e[i],
                                s = e[i + 1],
                                c = e[i + 2],
                                l = i / 3;
                            n[l] = o.fromRadians(u, s, c, t, n[l]);
                        }
                        return n;
                    }),
                    (o.ZERO = a(new o(0, 0, 0))),
                    (o.UNIT_X = a(new o(1, 0, 0))),
                    (o.UNIT_Y = a(new o(0, 1, 0))),
                    (o.UNIT_Z = a(new o(0, 0, 1))),
                    (o.prototype.clone = function (e) {
                        return o.clone(this, e);
                    }),
                    (o.prototype.equals = function (e) {
                        return o.equals(this, e);
                    }),
                    (o.prototype.equalsEpsilon = function (e, t, r) {
                        return o.equalsEpsilon(this, e, t, r);
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
            function (e, t, r, n) {
                'use strict';
                function a(r, a, u, s, c) {
                    var l = r.x,
                        E = r.y,
                        f = r.z,
                        h = a.x,
                        d = a.y,
                        _ = a.z,
                        p = l * l * h * h,
                        m = E * E * d * d,
                        T = f * f * _ * _,
                        y = p + m + T,
                        R = Math.sqrt(1 / y),
                        A = e.multiplyByScalar(r, R, i);
                    if (y < s) return isFinite(R) ? e.clone(A, c) : void 0;
                    var v = u.x,
                        S = u.y,
                        N = u.z,
                        I = o;
                    (I.x = A.x * v * 2),
                        (I.y = A.y * S * 2),
                        (I.z = A.z * N * 2);
                    var M,
                        O,
                        g,
                        C,
                        w,
                        P,
                        x,
                        L,
                        U,
                        b,
                        F,
                        D = ((1 - R) * e.magnitude(r)) / (0.5 * e.magnitude(I)),
                        B = 0;
                    do {
                        (D -= B),
                            (g = 1 / (1 + D * v)),
                            (C = 1 / (1 + D * S)),
                            (w = 1 / (1 + D * N)),
                            (P = g * g),
                            (x = C * C),
                            (L = w * w),
                            (U = P * g),
                            (b = x * C),
                            (F = L * w),
                            (M = p * P + m * x + T * L - 1),
                            (O = p * U * v + m * b * S + T * F * N);
                        B = M / (-2 * O);
                    } while (Math.abs(M) > n.EPSILON12);
                    return t(c)
                        ? ((c.x = l * g), (c.y = E * C), (c.z = f * w), c)
                        : new e(l * g, E * C, f * w);
                }
                var i = new e(),
                    o = new e();
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
            function (e, t, r, n, a, i, o) {
                'use strict';
                function u(e, t, n) {
                    (this.longitude = r(e, 0)),
                        (this.latitude = r(t, 0)),
                        (this.height = r(n, 0));
                }
                (u.fromRadians = function (e, t, a, i) {
                    return (
                        (a = r(a, 0)),
                        n(i)
                            ? ((i.longitude = e),
                              (i.latitude = t),
                              (i.height = a),
                              i)
                            : new u(e, t, a)
                    );
                }),
                    (u.fromDegrees = function (e, t, r, n) {
                        return (
                            (e = i.toRadians(e)),
                            (t = i.toRadians(t)),
                            u.fromRadians(e, t, r, n)
                        );
                    });
                var s = new e(),
                    c = new e(),
                    l = new e(),
                    E = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                    f = new e(
                        1 / 40680631590769,
                        1 / 40680631590769,
                        1 / 40408299984661.445,
                    ),
                    h = i.EPSILON1;
                return (
                    (u.fromCartesian = function (t, r, a) {
                        var d = n(r) ? r.oneOverRadii : E,
                            _ = n(r) ? r.oneOverRadiiSquared : f,
                            p = n(r) ? r._centerToleranceSquared : h,
                            m = o(t, d, _, p, c);
                        if (n(m)) {
                            var T = e.multiplyComponents(m, _, s);
                            T = e.normalize(T, T);
                            var y = e.subtract(t, m, l),
                                R = Math.atan2(T.y, T.x),
                                A = Math.asin(T.z),
                                v = i.sign(e.dot(y, t)) * e.magnitude(y);
                            return n(a)
                                ? ((a.longitude = R),
                                  (a.latitude = A),
                                  (a.height = v),
                                  a)
                                : new u(R, A, v);
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
            function (e, t, r, n, a, i, o, u, s, c) {
                'use strict';
                function l(t, r, a, i) {
                    (r = n(r, 0)),
                        (a = n(a, 0)),
                        (i = n(i, 0)),
                        (t._radii = new e(r, a, i)),
                        (t._radiiSquared = new e(r * r, a * a, i * i)),
                        (t._radiiToTheFourth = new e(
                            r * r * r * r,
                            a * a * a * a,
                            i * i * i * i,
                        )),
                        (t._oneOverRadii = new e(
                            0 === r ? 0 : 1 / r,
                            0 === a ? 0 : 1 / a,
                            0 === i ? 0 : 1 / i,
                        )),
                        (t._oneOverRadiiSquared = new e(
                            0 === r ? 0 : 1 / (r * r),
                            0 === a ? 0 : 1 / (a * a),
                            0 === i ? 0 : 1 / (i * i),
                        )),
                        (t._minimumRadius = Math.min(r, a, i)),
                        (t._maximumRadius = Math.max(r, a, i)),
                        (t._centerToleranceSquared = s.EPSILON1),
                        0 !== t._radiiSquared.z &&
                            (t._squaredXOverSquaredZ =
                                t._radiiSquared.x / t._radiiSquared.z);
                }
                function E(e, t, r) {
                    (this._radii = void 0),
                        (this._radiiSquared = void 0),
                        (this._radiiToTheFourth = void 0),
                        (this._oneOverRadii = void 0),
                        (this._oneOverRadiiSquared = void 0),
                        (this._minimumRadius = void 0),
                        (this._maximumRadius = void 0),
                        (this._centerToleranceSquared = void 0),
                        (this._squaredXOverSquaredZ = void 0),
                        l(this, e, t, r);
                }
                i(E.prototype, {
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
                    (E.clone = function (t, r) {
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
                                : new E(n.x, n.y, n.z);
                        }
                    }),
                    (E.fromCartesian3 = function (e, t) {
                        return (
                            a(t) || (t = new E()),
                            a(e) ? (l(t, e.x, e.y, e.z), t) : t
                        );
                    }),
                    (E.WGS84 = u(new E(6378137, 6378137, 6356752.314245179))),
                    (E.UNIT_SPHERE = u(new E(1, 1, 1))),
                    (E.MOON = u(
                        new E(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS),
                    )),
                    (E.prototype.clone = function (e) {
                        return E.clone(this, e);
                    }),
                    (E.packedLength = e.packedLength),
                    (E.pack = function (t, r, a) {
                        return (a = n(a, 0)), e.pack(t._radii, r, a), r;
                    }),
                    (E.unpack = function (t, r, a) {
                        r = n(r, 0);
                        var i = e.unpack(t, r);
                        return E.fromCartesian3(i, a);
                    }),
                    (E.prototype.geocentricSurfaceNormal = e.normalize),
                    (E.prototype.geodeticSurfaceNormalCartographic = function (
                        t,
                        r,
                    ) {
                        var n = t.longitude,
                            i = t.latitude,
                            o = Math.cos(i),
                            u = o * Math.cos(n),
                            s = o * Math.sin(n),
                            c = Math.sin(i);
                        return (
                            a(r) || (r = new e()),
                            (r.x = u),
                            (r.y = s),
                            (r.z = c),
                            e.normalize(r, r)
                        );
                    }),
                    (E.prototype.geodeticSurfaceNormal = function (t, r) {
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
                    h = new e();
                (E.prototype.cartographicToCartesian = function (t, r) {
                    var n = f,
                        i = h;
                    this.geodeticSurfaceNormalCartographic(t, n),
                        e.multiplyComponents(this._radiiSquared, n, i);
                    var o = Math.sqrt(e.dot(n, i));
                    return (
                        e.divideByScalar(i, o, i),
                        e.multiplyByScalar(n, t.height, n),
                        a(r) || (r = new e()),
                        e.add(i, n, r)
                    );
                }),
                    (E.prototype.cartographicArrayToCartesianArray = function (
                        e,
                        t,
                    ) {
                        var r = e.length;
                        a(t) ? (t.length = r) : (t = new Array(r));
                        for (var n = 0; n < r; n++)
                            t[n] = this.cartographicToCartesian(e[n], t[n]);
                        return t;
                    });
                var d = new e(),
                    _ = new e(),
                    p = new e();
                return (
                    (E.prototype.cartesianToCartographic = function (r, n) {
                        var i = this.scaleToGeodeticSurface(r, _);
                        if (a(i)) {
                            var o = this.geodeticSurfaceNormal(i, d),
                                u = e.subtract(r, i, p),
                                c = Math.atan2(o.y, o.x),
                                l = Math.asin(o.z),
                                E = s.sign(e.dot(u, r)) * e.magnitude(u);
                            return a(n)
                                ? ((n.longitude = c),
                                  (n.latitude = l),
                                  (n.height = E),
                                  n)
                                : new t(c, l, E);
                        }
                    }),
                    (E.prototype.cartesianArrayToCartographicArray = function (
                        e,
                        t,
                    ) {
                        var r = e.length;
                        a(t) ? (t.length = r) : (t = new Array(r));
                        for (var n = 0; n < r; ++n)
                            t[n] = this.cartesianToCartographic(e[n], t[n]);
                        return t;
                    }),
                    (E.prototype.scaleToGeodeticSurface = function (e, t) {
                        return c(
                            e,
                            this._oneOverRadii,
                            this._oneOverRadiiSquared,
                            this._centerToleranceSquared,
                            t,
                        );
                    }),
                    (E.prototype.scaleToGeocentricSurface = function (t, r) {
                        a(r) || (r = new e());
                        var n = t.x,
                            i = t.y,
                            o = t.z,
                            u = this._oneOverRadiiSquared,
                            s =
                                1 /
                                Math.sqrt(
                                    n * n * u.x + i * i * u.y + o * o * u.z,
                                );
                        return e.multiplyByScalar(t, s, r);
                    }),
                    (E.prototype.transformPositionToScaledSpace = function (
                        t,
                        r,
                    ) {
                        return (
                            a(r) || (r = new e()),
                            e.multiplyComponents(t, this._oneOverRadii, r)
                        );
                    }),
                    (E.prototype.transformPositionFromScaledSpace = function (
                        t,
                        r,
                    ) {
                        return (
                            a(r) || (r = new e()),
                            e.multiplyComponents(t, this._radii, r)
                        );
                    }),
                    (E.prototype.equals = function (t) {
                        return (
                            this === t ||
                            (a(t) && e.equals(this._radii, t._radii))
                        );
                    }),
                    (E.prototype.toString = function () {
                        return this._radii.toString();
                    }),
                    (E.prototype.getSurfaceNormalIntersectionWithZAxis =
                        function (t, r, i) {
                            r = n(r, 0);
                            var o = this._squaredXOverSquaredZ;
                            if (
                                (a(i) || (i = new e()),
                                (i.x = 0),
                                (i.y = 0),
                                (i.z = t.z * (1 - o)),
                                !(Math.abs(i.z) >= this._radii.z - r))
                            )
                                return i;
                        }),
                    E
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
            function (e, t, r, n, a, i, o) {
                'use strict';
                function u(e) {
                    (this._ellipsoid = r(e, o.WGS84)),
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
                            i = t.longitude * a,
                            o = t.latitude * a,
                            u = t.height;
                        return n(r)
                            ? ((r.x = i), (r.y = o), (r.z = u), r)
                            : new e(i, o, u);
                    }),
                    (u.prototype.unproject = function (e, r) {
                        var a = this._oneOverSemimajorAxis,
                            i = e.x * a,
                            o = e.y * a,
                            u = e.z;
                        return n(r)
                            ? ((r.longitude = i),
                              (r.latitude = o),
                              (r.height = u),
                              r)
                            : new t(i, o, u);
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
            function (e, t, r, n, a, i, o, u) {
                'use strict';
                function s(e, t, n, a, i, o, u, s, c) {
                    (this[0] = r(e, 0)),
                        (this[1] = r(a, 0)),
                        (this[2] = r(u, 0)),
                        (this[3] = r(t, 0)),
                        (this[4] = r(i, 0)),
                        (this[5] = r(s, 0)),
                        (this[6] = r(n, 0)),
                        (this[7] = r(o, 0)),
                        (this[8] = r(c, 0));
                }
                function c(e) {
                    for (var t = 0, r = 0; r < 9; ++r) {
                        var n = e[r];
                        t += n * n;
                    }
                    return Math.sqrt(t);
                }
                function l(e) {
                    for (var t = 0, r = 0; r < 3; ++r) {
                        var n = e[s.getElementIndex(_[r], d[r])];
                        t += 2 * n * n;
                    }
                    return Math.sqrt(t);
                }
                function E(e, t) {
                    for (var r = u.EPSILON15, n = 0, a = 1, i = 0; i < 3; ++i) {
                        var o = Math.abs(e[s.getElementIndex(_[i], d[i])]);
                        o > n && ((a = i), (n = o));
                    }
                    var c = 1,
                        l = 0,
                        E = d[a],
                        f = _[a];
                    if (Math.abs(e[s.getElementIndex(f, E)]) > r) {
                        var h,
                            p = e[s.getElementIndex(f, f)],
                            m = e[s.getElementIndex(E, E)],
                            T = e[s.getElementIndex(f, E)],
                            y = (p - m) / 2 / T;
                        (h =
                            y < 0
                                ? -1 / (-y + Math.sqrt(1 + y * y))
                                : 1 / (y + Math.sqrt(1 + y * y))),
                            (c = 1 / Math.sqrt(1 + h * h)),
                            (l = h * c);
                    }
                    return (
                        (t = s.clone(s.IDENTITY, t)),
                        (t[s.getElementIndex(E, E)] = t[
                            s.getElementIndex(f, f)
                        ] =
                            c),
                        (t[s.getElementIndex(f, E)] = l),
                        (t[s.getElementIndex(E, f)] = -l),
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
                            i = e.x * e.z,
                            o = e.x * e.w,
                            u = e.y * e.y,
                            c = e.y * e.z,
                            l = e.y * e.w,
                            E = e.z * e.z,
                            f = e.z * e.w,
                            h = e.w * e.w,
                            d = r - u - E + h,
                            _ = 2 * (a - f),
                            p = 2 * (i + l),
                            m = 2 * (a + f),
                            T = -r + u - E + h,
                            y = 2 * (c - o),
                            R = 2 * (i - l),
                            A = 2 * (c + o),
                            v = -r - u + E + h;
                        return n(t)
                            ? ((t[0] = d),
                              (t[1] = m),
                              (t[2] = R),
                              (t[3] = _),
                              (t[4] = T),
                              (t[5] = A),
                              (t[6] = p),
                              (t[7] = y),
                              (t[8] = v),
                              t)
                            : new s(d, _, p, m, T, y, R, A, v);
                    }),
                    (s.fromHeadingPitchRoll = function (e, t) {
                        var r = Math.cos(-e.pitch),
                            a = Math.cos(-e.heading),
                            i = Math.cos(e.roll),
                            o = Math.sin(-e.pitch),
                            u = Math.sin(-e.heading),
                            c = Math.sin(e.roll),
                            l = r * a,
                            E = -i * u + c * o * a,
                            f = c * u + i * o * a,
                            h = r * u,
                            d = i * a + c * o * u,
                            _ = -c * a + i * o * u,
                            p = -o,
                            m = c * r,
                            T = i * r;
                        return n(t)
                            ? ((t[0] = l),
                              (t[1] = h),
                              (t[2] = p),
                              (t[3] = E),
                              (t[4] = d),
                              (t[5] = m),
                              (t[6] = f),
                              (t[7] = _),
                              (t[8] = T),
                              t)
                            : new s(l, E, f, h, d, _, p, m, T);
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
                            i = e[n + 1],
                            o = e[n + 2];
                        return (r.x = a), (r.y = i), (r.z = o), r;
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
                            i = e[t + 6];
                        return (r.x = n), (r.y = a), (r.z = i), r;
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
                var h = new e();
                (s.getMaximumScale = function (t) {
                    return s.getScale(t, h), e.maximumComponent(h);
                }),
                    (s.multiply = function (e, t, r) {
                        var n = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
                            a = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                            i = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                            o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                            u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                            s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                            c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                            l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                            E = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                        return (
                            (r[0] = n),
                            (r[1] = a),
                            (r[2] = i),
                            (r[3] = o),
                            (r[4] = u),
                            (r[5] = s),
                            (r[6] = c),
                            (r[7] = l),
                            (r[8] = E),
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
                            i = t.z,
                            o = e[0] * n + e[3] * a + e[6] * i,
                            u = e[1] * n + e[4] * a + e[7] * i,
                            s = e[2] * n + e[5] * a + e[8] * i;
                        return (r.x = o), (r.y = u), (r.z = s), r;
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
                            i = e[1],
                            o = e[4],
                            u = e[7],
                            s = e[2],
                            c = e[5],
                            l = e[8];
                        return (
                            (t[0] = r),
                            (t[1] = n),
                            (t[2] = a),
                            (t[3] = i),
                            (t[4] = o),
                            (t[5] = u),
                            (t[6] = s),
                            (t[7] = c),
                            (t[8] = l),
                            t
                        );
                    });
                var d = [1, 0, 0],
                    _ = [2, 2, 1],
                    p = new s(),
                    m = new s();
                return (
                    (s.computeEigenDecomposition = function (e, t) {
                        var r = u.EPSILON20,
                            a = 0,
                            i = 0;
                        n(t) || (t = {});
                        for (
                            var o = (t.unitary = s.clone(
                                    s.IDENTITY,
                                    t.unitary,
                                )),
                                f = (t.diagonal = s.clone(e, t.diagonal)),
                                h = r * c(f);
                            i < 10 && l(f) > h;

                        )
                            E(f, p),
                                s.transpose(p, m),
                                s.multiply(f, p, f),
                                s.multiply(m, f, f),
                                s.multiply(o, p, o),
                                ++a > 2 && (++i, (a = 0));
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
                            i = e[4],
                            o = e[7],
                            u = e[2],
                            s = e[5],
                            c = e[8];
                        return (
                            t * (i * c - s * o) +
                            a * (s * n - r * c) +
                            u * (r * o - i * n)
                        );
                    }),
                    (s.inverse = function (e, t) {
                        var r = e[0],
                            n = e[1],
                            a = e[2],
                            i = e[3],
                            o = e[4],
                            u = e[5],
                            c = e[6],
                            l = e[7],
                            E = e[8],
                            f = s.determinant(e);
                        (t[0] = o * E - l * u),
                            (t[1] = l * a - n * E),
                            (t[2] = n * u - o * a),
                            (t[3] = c * u - i * E),
                            (t[4] = r * E - c * a),
                            (t[5] = i * a - r * u),
                            (t[6] = i * l - c * o),
                            (t[7] = c * n - r * l),
                            (t[8] = r * o - i * n);
                        var h = 1 / f;
                        return s.multiplyByScalar(t, h, t);
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
                    (s.IDENTITY = o(new s(1, 0, 0, 0, 1, 0, 0, 0, 1))),
                    (s.ZERO = o(new s(0, 0, 0, 0, 0, 0, 0, 0, 0))),
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
            function (e, t, r, n, a, i) {
                'use strict';
                function o(e, r, n, a) {
                    (this.x = t(e, 0)),
                        (this.y = t(r, 0)),
                        (this.z = t(n, 0)),
                        (this.w = t(a, 0));
                }
                (o.fromElements = function (e, t, n, a, i) {
                    return r(i)
                        ? ((i.x = e), (i.y = t), (i.z = n), (i.w = a), i)
                        : new o(e, t, n, a);
                }),
                    (o.fromColor = function (e, t) {
                        return r(t)
                            ? ((t.x = e.red),
                              (t.y = e.green),
                              (t.z = e.blue),
                              (t.w = e.alpha),
                              t)
                            : new o(e.red, e.green, e.blue, e.alpha);
                    }),
                    (o.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.x = e.x),
                                  (t.y = e.y),
                                  (t.z = e.z),
                                  (t.w = e.w),
                                  t)
                                : new o(e.x, e.y, e.z, e.w);
                    }),
                    (o.packedLength = 4),
                    (o.pack = function (e, r, n) {
                        return (
                            (n = t(n, 0)),
                            (r[n++] = e.x),
                            (r[n++] = e.y),
                            (r[n++] = e.z),
                            (r[n] = e.w),
                            r
                        );
                    }),
                    (o.unpack = function (e, n, a) {
                        return (
                            (n = t(n, 0)),
                            r(a) || (a = new o()),
                            (a.x = e[n++]),
                            (a.y = e[n++]),
                            (a.z = e[n++]),
                            (a.w = e[n]),
                            a
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = 4 * n) : (t = new Array(4 * n));
                        for (var a = 0; a < n; ++a) o.pack(e[a], t, 4 * a);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = n / 4) : (t = new Array(n / 4));
                        for (var a = 0; a < n; a += 4) {
                            var i = a / 4;
                            t[i] = o.unpack(e, a, t[i]);
                        }
                        return t;
                    }),
                    (o.fromArray = o.unpack),
                    (o.maximumComponent = function (e) {
                        return Math.max(e.x, e.y, e.z, e.w);
                    }),
                    (o.minimumComponent = function (e) {
                        return Math.min(e.x, e.y, e.z, e.w);
                    }),
                    (o.minimumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.min(e.x, t.x)),
                            (r.y = Math.min(e.y, t.y)),
                            (r.z = Math.min(e.z, t.z)),
                            (r.w = Math.min(e.w, t.w)),
                            r
                        );
                    }),
                    (o.maximumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.max(e.x, t.x)),
                            (r.y = Math.max(e.y, t.y)),
                            (r.z = Math.max(e.z, t.z)),
                            (r.w = Math.max(e.w, t.w)),
                            r
                        );
                    }),
                    (o.magnitudeSquared = function (e) {
                        return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                    }),
                    (o.magnitude = function (e) {
                        return Math.sqrt(o.magnitudeSquared(e));
                    });
                var u = new o();
                (o.distance = function (e, t) {
                    return o.subtract(e, t, u), o.magnitude(u);
                }),
                    (o.distanceSquared = function (e, t) {
                        return o.subtract(e, t, u), o.magnitudeSquared(u);
                    }),
                    (o.normalize = function (e, t) {
                        var r = o.magnitude(e);
                        return (
                            (t.x = e.x / r),
                            (t.y = e.y / r),
                            (t.z = e.z / r),
                            (t.w = e.w / r),
                            t
                        );
                    }),
                    (o.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                    }),
                    (o.multiplyComponents = function (e, t, r) {
                        return (
                            (r.x = e.x * t.x),
                            (r.y = e.y * t.y),
                            (r.z = e.z * t.z),
                            (r.w = e.w * t.w),
                            r
                        );
                    }),
                    (o.divideComponents = function (e, t, r) {
                        return (
                            (r.x = e.x / t.x),
                            (r.y = e.y / t.y),
                            (r.z = e.z / t.z),
                            (r.w = e.w / t.w),
                            r
                        );
                    }),
                    (o.add = function (e, t, r) {
                        return (
                            (r.x = e.x + t.x),
                            (r.y = e.y + t.y),
                            (r.z = e.z + t.z),
                            (r.w = e.w + t.w),
                            r
                        );
                    }),
                    (o.subtract = function (e, t, r) {
                        return (
                            (r.x = e.x - t.x),
                            (r.y = e.y - t.y),
                            (r.z = e.z - t.z),
                            (r.w = e.w - t.w),
                            r
                        );
                    }),
                    (o.multiplyByScalar = function (e, t, r) {
                        return (
                            (r.x = e.x * t),
                            (r.y = e.y * t),
                            (r.z = e.z * t),
                            (r.w = e.w * t),
                            r
                        );
                    }),
                    (o.divideByScalar = function (e, t, r) {
                        return (
                            (r.x = e.x / t),
                            (r.y = e.y / t),
                            (r.z = e.z / t),
                            (r.w = e.w / t),
                            r
                        );
                    }),
                    (o.negate = function (e, t) {
                        return (
                            (t.x = -e.x),
                            (t.y = -e.y),
                            (t.z = -e.z),
                            (t.w = -e.w),
                            t
                        );
                    }),
                    (o.abs = function (e, t) {
                        return (
                            (t.x = Math.abs(e.x)),
                            (t.y = Math.abs(e.y)),
                            (t.z = Math.abs(e.z)),
                            (t.w = Math.abs(e.w)),
                            t
                        );
                    });
                var s = new o();
                o.lerp = function (e, t, r, n) {
                    return (
                        o.multiplyByScalar(t, r, s),
                        (n = o.multiplyByScalar(e, 1 - r, n)),
                        o.add(s, n, n)
                    );
                };
                var c = new o();
                return (
                    (o.mostOrthogonalAxis = function (e, t) {
                        var r = o.normalize(e, c);
                        return (
                            o.abs(r, r),
                            (t =
                                r.x <= r.y
                                    ? r.x <= r.z
                                        ? r.x <= r.w
                                            ? o.clone(o.UNIT_X, t)
                                            : o.clone(o.UNIT_W, t)
                                        : r.z <= r.w
                                          ? o.clone(o.UNIT_Z, t)
                                          : o.clone(o.UNIT_W, t)
                                    : r.y <= r.z
                                      ? r.y <= r.w
                                          ? o.clone(o.UNIT_Y, t)
                                          : o.clone(o.UNIT_W, t)
                                      : r.z <= r.w
                                        ? o.clone(o.UNIT_Z, t)
                                        : o.clone(o.UNIT_W, t))
                        );
                    }),
                    (o.equals = function (e, t) {
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
                    (o.equalsArray = function (e, t, r) {
                        return (
                            e.x === t[r] &&
                            e.y === t[r + 1] &&
                            e.z === t[r + 2] &&
                            e.w === t[r + 3]
                        );
                    }),
                    (o.equalsEpsilon = function (e, t, n, a) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                i.equalsEpsilon(e.x, t.x, n, a) &&
                                i.equalsEpsilon(e.y, t.y, n, a) &&
                                i.equalsEpsilon(e.z, t.z, n, a) &&
                                i.equalsEpsilon(e.w, t.w, n, a))
                        );
                    }),
                    (o.ZERO = a(new o(0, 0, 0, 0))),
                    (o.UNIT_X = a(new o(1, 0, 0, 0))),
                    (o.UNIT_Y = a(new o(0, 1, 0, 0))),
                    (o.UNIT_Z = a(new o(0, 0, 1, 0))),
                    (o.UNIT_W = a(new o(0, 0, 0, 1))),
                    (o.prototype.clone = function (e) {
                        return o.clone(this, e);
                    }),
                    (o.prototype.equals = function (e) {
                        return o.equals(this, e);
                    }),
                    (o.prototype.equalsEpsilon = function (e, t, r) {
                        return o.equalsEpsilon(this, e, t, r);
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
            function (e, t, r, n, a, i, o, u, s, c) {
                'use strict';
                function l(e, t, r, a, i, o, u, s, c, l, E, f, h, d, _, p) {
                    (this[0] = n(e, 0)),
                        (this[1] = n(i, 0)),
                        (this[2] = n(c, 0)),
                        (this[3] = n(h, 0)),
                        (this[4] = n(t, 0)),
                        (this[5] = n(o, 0)),
                        (this[6] = n(l, 0)),
                        (this[7] = n(d, 0)),
                        (this[8] = n(r, 0)),
                        (this[9] = n(u, 0)),
                        (this[10] = n(E, 0)),
                        (this[11] = n(_, 0)),
                        (this[12] = n(a, 0)),
                        (this[13] = n(s, 0)),
                        (this[14] = n(f, 0)),
                        (this[15] = n(p, 0));
                }
                (l.packedLength = 16),
                    (l.pack = function (e, t, r) {
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
                    (l.unpack = function (e, t, r) {
                        return (
                            (t = n(t, 0)),
                            a(r) || (r = new l()),
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
                    (l.clone = function (e, t) {
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
                                : new l(
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
                    (l.fromArray = l.unpack),
                    (l.fromColumnMajorArray = function (e, t) {
                        return l.clone(e, t);
                    }),
                    (l.fromRowMajorArray = function (e, t) {
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
                            : new l(
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
                    (l.fromRotationTranslation = function (t, r, i) {
                        return (
                            (r = n(r, e.ZERO)),
                            a(i)
                                ? ((i[0] = t[0]),
                                  (i[1] = t[1]),
                                  (i[2] = t[2]),
                                  (i[3] = 0),
                                  (i[4] = t[3]),
                                  (i[5] = t[4]),
                                  (i[6] = t[5]),
                                  (i[7] = 0),
                                  (i[8] = t[6]),
                                  (i[9] = t[7]),
                                  (i[10] = t[8]),
                                  (i[11] = 0),
                                  (i[12] = r.x),
                                  (i[13] = r.y),
                                  (i[14] = r.z),
                                  (i[15] = 1),
                                  i)
                                : new l(
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
                    (l.fromTranslationQuaternionRotationScale = function (
                        e,
                        t,
                        r,
                        n,
                    ) {
                        a(n) || (n = new l());
                        var i = r.x,
                            o = r.y,
                            u = r.z,
                            s = t.x * t.x,
                            c = t.x * t.y,
                            E = t.x * t.z,
                            f = t.x * t.w,
                            h = t.y * t.y,
                            d = t.y * t.z,
                            _ = t.y * t.w,
                            p = t.z * t.z,
                            m = t.z * t.w,
                            T = t.w * t.w,
                            y = s - h - p + T,
                            R = 2 * (c - m),
                            A = 2 * (E + _),
                            v = 2 * (c + m),
                            S = -s + h - p + T,
                            N = 2 * (d - f),
                            I = 2 * (E - _),
                            M = 2 * (d + f),
                            O = -s - h + p + T;
                        return (
                            (n[0] = y * i),
                            (n[1] = v * i),
                            (n[2] = I * i),
                            (n[3] = 0),
                            (n[4] = R * o),
                            (n[5] = S * o),
                            (n[6] = M * o),
                            (n[7] = 0),
                            (n[8] = A * u),
                            (n[9] = N * u),
                            (n[10] = O * u),
                            (n[11] = 0),
                            (n[12] = e.x),
                            (n[13] = e.y),
                            (n[14] = e.z),
                            (n[15] = 1),
                            n
                        );
                    }),
                    (l.fromTranslationRotationScale = function (e, t) {
                        return l.fromTranslationQuaternionRotationScale(
                            e.translation,
                            e.rotation,
                            e.scale,
                            t,
                        );
                    }),
                    (l.fromTranslation = function (e, t) {
                        return l.fromRotationTranslation(s.IDENTITY, e, t);
                    }),
                    (l.fromScale = function (e, t) {
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
                            : new l(
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
                    (l.fromUniformScale = function (e, t) {
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
                            : new l(
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
                var E = new e(),
                    f = new e(),
                    h = new e();
                (l.fromCamera = function (t, r) {
                    var n = t.position,
                        i = t.direction,
                        o = t.up;
                    e.normalize(i, E),
                        e.normalize(e.cross(E, o, f), f),
                        e.normalize(e.cross(f, E, h), h);
                    var u = f.x,
                        s = f.y,
                        c = f.z,
                        d = E.x,
                        _ = E.y,
                        p = E.z,
                        m = h.x,
                        T = h.y,
                        y = h.z,
                        R = n.x,
                        A = n.y,
                        v = n.z,
                        S = u * -R + s * -A + c * -v,
                        N = m * -R + T * -A + y * -v,
                        I = d * R + _ * A + p * v;
                    return a(r)
                        ? ((r[0] = u),
                          (r[1] = m),
                          (r[2] = -d),
                          (r[3] = 0),
                          (r[4] = s),
                          (r[5] = T),
                          (r[6] = -_),
                          (r[7] = 0),
                          (r[8] = c),
                          (r[9] = y),
                          (r[10] = -p),
                          (r[11] = 0),
                          (r[12] = S),
                          (r[13] = N),
                          (r[14] = I),
                          (r[15] = 1),
                          r)
                        : new l(
                              u,
                              s,
                              c,
                              S,
                              m,
                              T,
                              y,
                              N,
                              -d,
                              -_,
                              -p,
                              I,
                              0,
                              0,
                              0,
                              1,
                          );
                }),
                    (l.computePerspectiveFieldOfView = function (
                        e,
                        t,
                        r,
                        n,
                        a,
                    ) {
                        var i = Math.tan(0.5 * e),
                            o = 1 / i,
                            u = o / t,
                            s = (n + r) / (r - n),
                            c = (2 * n * r) / (r - n);
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
                            (a[10] = s),
                            (a[11] = -1),
                            (a[12] = 0),
                            (a[13] = 0),
                            (a[14] = c),
                            (a[15] = 0),
                            a
                        );
                    }),
                    (l.computeOrthographicOffCenter = function (
                        e,
                        t,
                        r,
                        n,
                        a,
                        i,
                        o,
                    ) {
                        var u = 1 / (t - e),
                            s = 1 / (n - r),
                            c = 1 / (i - a),
                            l = -(t + e) * u,
                            E = -(n + r) * s,
                            f = -(i + a) * c;
                        return (
                            (u *= 2),
                            (s *= 2),
                            (c *= -2),
                            (o[0] = u),
                            (o[1] = 0),
                            (o[2] = 0),
                            (o[3] = 0),
                            (o[4] = 0),
                            (o[5] = s),
                            (o[6] = 0),
                            (o[7] = 0),
                            (o[8] = 0),
                            (o[9] = 0),
                            (o[10] = c),
                            (o[11] = 0),
                            (o[12] = l),
                            (o[13] = E),
                            (o[14] = f),
                            (o[15] = 1),
                            o
                        );
                    }),
                    (l.computePerspectiveOffCenter = function (
                        e,
                        t,
                        r,
                        n,
                        a,
                        i,
                        o,
                    ) {
                        var u = (2 * a) / (t - e),
                            s = (2 * a) / (n - r),
                            c = (t + e) / (t - e),
                            l = (n + r) / (n - r),
                            E = -(i + a) / (i - a),
                            f = (-2 * i * a) / (i - a);
                        return (
                            (o[0] = u),
                            (o[1] = 0),
                            (o[2] = 0),
                            (o[3] = 0),
                            (o[4] = 0),
                            (o[5] = s),
                            (o[6] = 0),
                            (o[7] = 0),
                            (o[8] = c),
                            (o[9] = l),
                            (o[10] = E),
                            (o[11] = -1),
                            (o[12] = 0),
                            (o[13] = 0),
                            (o[14] = f),
                            (o[15] = 0),
                            o
                        );
                    }),
                    (l.computeInfinitePerspectiveOffCenter = function (
                        e,
                        t,
                        r,
                        n,
                        a,
                        i,
                    ) {
                        var o = (2 * a) / (t - e),
                            u = (2 * a) / (n - r),
                            s = (t + e) / (t - e),
                            c = (n + r) / (n - r),
                            l = -2 * a;
                        return (
                            (i[0] = o),
                            (i[1] = 0),
                            (i[2] = 0),
                            (i[3] = 0),
                            (i[4] = 0),
                            (i[5] = u),
                            (i[6] = 0),
                            (i[7] = 0),
                            (i[8] = s),
                            (i[9] = c),
                            (i[10] = -1),
                            (i[11] = -1),
                            (i[12] = 0),
                            (i[13] = 0),
                            (i[14] = l),
                            (i[15] = 0),
                            i
                        );
                    }),
                    (l.computeViewportTransformation = function (e, t, r, a) {
                        e = n(e, n.EMPTY_OBJECT);
                        var i = n(e.x, 0),
                            o = n(e.y, 0),
                            u = n(e.width, 0),
                            s = n(e.height, 0);
                        (t = n(t, 0)), (r = n(r, 1));
                        var c = 0.5 * u,
                            l = 0.5 * s,
                            E = 0.5 * (r - t),
                            f = c,
                            h = l,
                            d = E,
                            _ = i + c,
                            p = o + l,
                            m = t + E;
                        return (
                            (a[0] = f),
                            (a[1] = 0),
                            (a[2] = 0),
                            (a[3] = 0),
                            (a[4] = 0),
                            (a[5] = h),
                            (a[6] = 0),
                            (a[7] = 0),
                            (a[8] = 0),
                            (a[9] = 0),
                            (a[10] = d),
                            (a[11] = 0),
                            (a[12] = _),
                            (a[13] = p),
                            (a[14] = m),
                            (a[15] = 1),
                            a
                        );
                    }),
                    (l.computeView = function (t, r, n, a, i) {
                        return (
                            (i[0] = a.x),
                            (i[1] = n.x),
                            (i[2] = -r.x),
                            (i[3] = 0),
                            (i[4] = a.y),
                            (i[5] = n.y),
                            (i[6] = -r.y),
                            (i[7] = 0),
                            (i[8] = a.z),
                            (i[9] = n.z),
                            (i[10] = -r.z),
                            (i[11] = 0),
                            (i[12] = -e.dot(a, t)),
                            (i[13] = -e.dot(n, t)),
                            (i[14] = e.dot(r, t)),
                            (i[15] = 1),
                            i
                        );
                    }),
                    (l.toArray = function (e, t) {
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
                    (l.getElementIndex = function (e, t) {
                        return 4 * e + t;
                    }),
                    (l.getColumn = function (e, t, r) {
                        var n = 4 * t,
                            a = e[n],
                            i = e[n + 1],
                            o = e[n + 2],
                            u = e[n + 3];
                        return (r.x = a), (r.y = i), (r.z = o), (r.w = u), r;
                    }),
                    (l.setColumn = function (e, t, r, n) {
                        n = l.clone(e, n);
                        var a = 4 * t;
                        return (
                            (n[a] = r.x),
                            (n[a + 1] = r.y),
                            (n[a + 2] = r.z),
                            (n[a + 3] = r.w),
                            n
                        );
                    }),
                    (l.setTranslation = function (e, t, r) {
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
                    (l.getRow = function (e, t, r) {
                        var n = e[t],
                            a = e[t + 4],
                            i = e[t + 8],
                            o = e[t + 12];
                        return (r.x = n), (r.y = a), (r.z = i), (r.w = o), r;
                    }),
                    (l.setRow = function (e, t, r, n) {
                        return (
                            (n = l.clone(e, n)),
                            (n[t] = r.x),
                            (n[t + 4] = r.y),
                            (n[t + 8] = r.z),
                            (n[t + 12] = r.w),
                            n
                        );
                    });
                var d = new e();
                l.getScale = function (t, r) {
                    return (
                        (r.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], d),
                        )),
                        (r.y = e.magnitude(
                            e.fromElements(t[4], t[5], t[6], d),
                        )),
                        (r.z = e.magnitude(
                            e.fromElements(t[8], t[9], t[10], d),
                        )),
                        r
                    );
                };
                var _ = new e();
                (l.getMaximumScale = function (t) {
                    return l.getScale(t, _), e.maximumComponent(_);
                }),
                    (l.multiply = function (e, t, r) {
                        var n = e[0],
                            a = e[1],
                            i = e[2],
                            o = e[3],
                            u = e[4],
                            s = e[5],
                            c = e[6],
                            l = e[7],
                            E = e[8],
                            f = e[9],
                            h = e[10],
                            d = e[11],
                            _ = e[12],
                            p = e[13],
                            m = e[14],
                            T = e[15],
                            y = t[0],
                            R = t[1],
                            A = t[2],
                            v = t[3],
                            S = t[4],
                            N = t[5],
                            I = t[6],
                            M = t[7],
                            O = t[8],
                            g = t[9],
                            C = t[10],
                            w = t[11],
                            P = t[12],
                            x = t[13],
                            L = t[14],
                            U = t[15],
                            b = n * y + u * R + E * A + _ * v,
                            F = a * y + s * R + f * A + p * v,
                            D = i * y + c * R + h * A + m * v,
                            B = o * y + l * R + d * A + T * v,
                            z = n * S + u * N + E * I + _ * M,
                            G = a * S + s * N + f * I + p * M,
                            V = i * S + c * N + h * I + m * M,
                            q = o * S + l * N + d * I + T * M,
                            X = n * O + u * g + E * C + _ * w,
                            H = a * O + s * g + f * C + p * w,
                            W = i * O + c * g + h * C + m * w,
                            k = o * O + l * g + d * C + T * w,
                            Y = n * P + u * x + E * L + _ * U,
                            Z = a * P + s * x + f * L + p * U,
                            K = i * P + c * x + h * L + m * U,
                            j = o * P + l * x + d * L + T * U;
                        return (
                            (r[0] = b),
                            (r[1] = F),
                            (r[2] = D),
                            (r[3] = B),
                            (r[4] = z),
                            (r[5] = G),
                            (r[6] = V),
                            (r[7] = q),
                            (r[8] = X),
                            (r[9] = H),
                            (r[10] = W),
                            (r[11] = k),
                            (r[12] = Y),
                            (r[13] = Z),
                            (r[14] = K),
                            (r[15] = j),
                            r
                        );
                    }),
                    (l.add = function (e, t, r) {
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
                    (l.subtract = function (e, t, r) {
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
                    (l.multiplyTransformation = function (e, t, r) {
                        var n = e[0],
                            a = e[1],
                            i = e[2],
                            o = e[4],
                            u = e[5],
                            s = e[6],
                            c = e[8],
                            l = e[9],
                            E = e[10],
                            f = e[12],
                            h = e[13],
                            d = e[14],
                            _ = t[0],
                            p = t[1],
                            m = t[2],
                            T = t[4],
                            y = t[5],
                            R = t[6],
                            A = t[8],
                            v = t[9],
                            S = t[10],
                            N = t[12],
                            I = t[13],
                            M = t[14],
                            O = n * _ + o * p + c * m,
                            g = a * _ + u * p + l * m,
                            C = i * _ + s * p + E * m,
                            w = n * T + o * y + c * R,
                            P = a * T + u * y + l * R,
                            x = i * T + s * y + E * R,
                            L = n * A + o * v + c * S,
                            U = a * A + u * v + l * S,
                            b = i * A + s * v + E * S,
                            F = n * N + o * I + c * M + f,
                            D = a * N + u * I + l * M + h,
                            B = i * N + s * I + E * M + d;
                        return (
                            (r[0] = O),
                            (r[1] = g),
                            (r[2] = C),
                            (r[3] = 0),
                            (r[4] = w),
                            (r[5] = P),
                            (r[6] = x),
                            (r[7] = 0),
                            (r[8] = L),
                            (r[9] = U),
                            (r[10] = b),
                            (r[11] = 0),
                            (r[12] = F),
                            (r[13] = D),
                            (r[14] = B),
                            (r[15] = 1),
                            r
                        );
                    }),
                    (l.multiplyByMatrix3 = function (e, t, r) {
                        var n = e[0],
                            a = e[1],
                            i = e[2],
                            o = e[4],
                            u = e[5],
                            s = e[6],
                            c = e[8],
                            l = e[9],
                            E = e[10],
                            f = t[0],
                            h = t[1],
                            d = t[2],
                            _ = t[3],
                            p = t[4],
                            m = t[5],
                            T = t[6],
                            y = t[7],
                            R = t[8],
                            A = n * f + o * h + c * d,
                            v = a * f + u * h + l * d,
                            S = i * f + s * h + E * d,
                            N = n * _ + o * p + c * m,
                            I = a * _ + u * p + l * m,
                            M = i * _ + s * p + E * m,
                            O = n * T + o * y + c * R,
                            g = a * T + u * y + l * R,
                            C = i * T + s * y + E * R;
                        return (
                            (r[0] = A),
                            (r[1] = v),
                            (r[2] = S),
                            (r[3] = 0),
                            (r[4] = N),
                            (r[5] = I),
                            (r[6] = M),
                            (r[7] = 0),
                            (r[8] = O),
                            (r[9] = g),
                            (r[10] = C),
                            (r[11] = 0),
                            (r[12] = e[12]),
                            (r[13] = e[13]),
                            (r[14] = e[14]),
                            (r[15] = e[15]),
                            r
                        );
                    }),
                    (l.multiplyByTranslation = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            i = t.z,
                            o = n * e[0] + a * e[4] + i * e[8] + e[12],
                            u = n * e[1] + a * e[5] + i * e[9] + e[13],
                            s = n * e[2] + a * e[6] + i * e[10] + e[14];
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
                            (r[12] = o),
                            (r[13] = u),
                            (r[14] = s),
                            (r[15] = e[15]),
                            r
                        );
                    });
                var p = new e();
                (l.multiplyByUniformScale = function (e, t, r) {
                    return (
                        (p.x = t),
                        (p.y = t),
                        (p.z = t),
                        l.multiplyByScale(e, p, r)
                    );
                }),
                    (l.multiplyByScale = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            i = t.z;
                        return 1 === n && 1 === a && 1 === i
                            ? l.clone(e, r)
                            : ((r[0] = n * e[0]),
                              (r[1] = n * e[1]),
                              (r[2] = n * e[2]),
                              (r[3] = 0),
                              (r[4] = a * e[4]),
                              (r[5] = a * e[5]),
                              (r[6] = a * e[6]),
                              (r[7] = 0),
                              (r[8] = i * e[8]),
                              (r[9] = i * e[9]),
                              (r[10] = i * e[10]),
                              (r[11] = 0),
                              (r[12] = e[12]),
                              (r[13] = e[13]),
                              (r[14] = e[14]),
                              (r[15] = 1),
                              r);
                    }),
                    (l.multiplyByVector = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            i = t.z,
                            o = t.w,
                            u = e[0] * n + e[4] * a + e[8] * i + e[12] * o,
                            s = e[1] * n + e[5] * a + e[9] * i + e[13] * o,
                            c = e[2] * n + e[6] * a + e[10] * i + e[14] * o,
                            l = e[3] * n + e[7] * a + e[11] * i + e[15] * o;
                        return (r.x = u), (r.y = s), (r.z = c), (r.w = l), r;
                    }),
                    (l.multiplyByPointAsVector = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            i = t.z,
                            o = e[0] * n + e[4] * a + e[8] * i,
                            u = e[1] * n + e[5] * a + e[9] * i,
                            s = e[2] * n + e[6] * a + e[10] * i;
                        return (r.x = o), (r.y = u), (r.z = s), r;
                    }),
                    (l.multiplyByPoint = function (e, t, r) {
                        var n = t.x,
                            a = t.y,
                            i = t.z,
                            o = e[0] * n + e[4] * a + e[8] * i + e[12],
                            u = e[1] * n + e[5] * a + e[9] * i + e[13],
                            s = e[2] * n + e[6] * a + e[10] * i + e[14];
                        return (r.x = o), (r.y = u), (r.z = s), r;
                    }),
                    (l.multiplyByScalar = function (e, t, r) {
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
                    (l.negate = function (e, t) {
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
                    (l.transpose = function (e, t) {
                        var r = e[1],
                            n = e[2],
                            a = e[3],
                            i = e[6],
                            o = e[7],
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
                            (t[9] = i),
                            (t[10] = e[10]),
                            (t[11] = e[14]),
                            (t[12] = a),
                            (t[13] = o),
                            (t[14] = u),
                            (t[15] = e[15]),
                            t
                        );
                    }),
                    (l.abs = function (e, t) {
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
                    (l.equals = function (e, t) {
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
                    (l.equalsEpsilon = function (e, t, r) {
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
                    (l.getTranslation = function (e, t) {
                        return (t.x = e[12]), (t.y = e[13]), (t.z = e[14]), t;
                    }),
                    (l.getRotation = function (e, t) {
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
                var m = new s(),
                    T = new s(),
                    y = new t(),
                    R = new t(0, 0, 0, 1);
                return (
                    (l.inverse = function (e, r) {
                        if (
                            s.equalsEpsilon(
                                l.getRotation(e, m),
                                T,
                                u.EPSILON7,
                            ) &&
                            t.equals(l.getRow(e, 3, y), R)
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
                            i = e[8],
                            o = e[12],
                            E = e[1],
                            f = e[5],
                            h = e[9],
                            d = e[13],
                            _ = e[2],
                            p = e[6],
                            A = e[10],
                            v = e[14],
                            S = e[3],
                            N = e[7],
                            I = e[11],
                            M = e[15],
                            O = A * M,
                            g = v * I,
                            C = p * M,
                            w = v * N,
                            P = p * I,
                            x = A * N,
                            L = _ * M,
                            U = v * S,
                            b = _ * I,
                            F = A * S,
                            D = _ * N,
                            B = p * S,
                            z = O * f + w * h + P * d - (g * f + C * h + x * d),
                            G = g * E + L * h + F * d - (O * E + U * h + b * d),
                            V = C * E + U * f + D * d - (w * E + L * f + B * d),
                            q = x * E + b * f + B * h - (P * E + F * f + D * h),
                            X = g * a + C * i + x * o - (O * a + w * i + P * o),
                            H = O * n + U * i + b * o - (g * n + L * i + F * o),
                            W = w * n + L * a + B * o - (C * n + U * a + D * o),
                            k = P * n + F * a + D * i - (x * n + b * a + B * i);
                        (O = i * d),
                            (g = o * h),
                            (C = a * d),
                            (w = o * f),
                            (P = a * h),
                            (x = i * f),
                            (L = n * d),
                            (U = o * E),
                            (b = n * h),
                            (F = i * E),
                            (D = n * f),
                            (B = a * E);
                        var Y = O * N + w * I + P * M - (g * N + C * I + x * M),
                            Z = g * S + L * I + F * M - (O * S + U * I + b * M),
                            K = C * S + U * N + D * M - (w * S + L * N + B * M),
                            j = x * S + b * N + B * I - (P * S + F * N + D * I),
                            Q = C * A + x * v + g * p - (P * v + O * p + w * A),
                            J = b * v + O * _ + U * A - (L * A + F * v + g * _),
                            $ = L * p + B * v + w * _ - (D * v + C * _ + U * p),
                            ee =
                                D * A + P * _ + F * p - (b * p + B * A + x * _),
                            te = n * z + a * G + i * V + o * q;
                        if (Math.abs(te) < u.EPSILON20)
                            throw new c(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (te = 1 / te),
                            (r[0] = z * te),
                            (r[1] = G * te),
                            (r[2] = V * te),
                            (r[3] = q * te),
                            (r[4] = X * te),
                            (r[5] = H * te),
                            (r[6] = W * te),
                            (r[7] = k * te),
                            (r[8] = Y * te),
                            (r[9] = Z * te),
                            (r[10] = K * te),
                            (r[11] = j * te),
                            (r[12] = Q * te),
                            (r[13] = J * te),
                            (r[14] = $ * te),
                            (r[15] = ee * te),
                            r
                        );
                    }),
                    (l.inverseTransformation = function (e, t) {
                        var r = e[0],
                            n = e[1],
                            a = e[2],
                            i = e[4],
                            o = e[5],
                            u = e[6],
                            s = e[8],
                            c = e[9],
                            l = e[10],
                            E = e[12],
                            f = e[13],
                            h = e[14],
                            d = -r * E - n * f - a * h,
                            _ = -i * E - o * f - u * h,
                            p = -s * E - c * f - l * h;
                        return (
                            (t[0] = r),
                            (t[1] = i),
                            (t[2] = s),
                            (t[3] = 0),
                            (t[4] = n),
                            (t[5] = o),
                            (t[6] = c),
                            (t[7] = 0),
                            (t[8] = a),
                            (t[9] = u),
                            (t[10] = l),
                            (t[11] = 0),
                            (t[12] = d),
                            (t[13] = _),
                            (t[14] = p),
                            (t[15] = 1),
                            t
                        );
                    }),
                    (l.IDENTITY = o(
                        new l(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                    )),
                    (l.ZERO = o(
                        new l(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
                    )),
                    (l.COLUMN0ROW0 = 0),
                    (l.COLUMN0ROW1 = 1),
                    (l.COLUMN0ROW2 = 2),
                    (l.COLUMN0ROW3 = 3),
                    (l.COLUMN1ROW0 = 4),
                    (l.COLUMN1ROW1 = 5),
                    (l.COLUMN1ROW2 = 6),
                    (l.COLUMN1ROW3 = 7),
                    (l.COLUMN2ROW0 = 8),
                    (l.COLUMN2ROW1 = 9),
                    (l.COLUMN2ROW2 = 10),
                    (l.COLUMN2ROW3 = 11),
                    (l.COLUMN3ROW0 = 12),
                    (l.COLUMN3ROW1 = 13),
                    (l.COLUMN3ROW2 = 14),
                    (l.COLUMN3ROW3 = 15),
                    i(l.prototype, {
                        length: {
                            get: function () {
                                return l.packedLength;
                            },
                        },
                    }),
                    (l.prototype.clone = function (e) {
                        return l.clone(this, e);
                    }),
                    (l.prototype.equals = function (e) {
                        return l.equals(this, e);
                    }),
                    (l.equalsArray = function (e, t, r) {
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
                    (l.prototype.equalsEpsilon = function (e, t) {
                        return l.equalsEpsilon(this, e, t);
                    }),
                    (l.prototype.toString = function () {
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
                    l
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
            function (e, t, r, n, a, i, o, u) {
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
                    (s.fromDegrees = function (e, t, a, i, o) {
                        return (
                            (e = u.toRadians(r(e, 0))),
                            (t = u.toRadians(r(t, 0))),
                            (a = u.toRadians(r(a, 0))),
                            (i = u.toRadians(r(i, 0))),
                            n(o)
                                ? ((o.west = e),
                                  (o.south = t),
                                  (o.east = a),
                                  (o.north = i),
                                  o)
                                : new s(e, t, a, i)
                        );
                    }),
                    (s.fromRadians = function (e, t, a, i, o) {
                        return n(o)
                            ? ((o.west = r(e, 0)),
                              (o.south = r(t, 0)),
                              (o.east = r(a, 0)),
                              (o.north = r(i, 0)),
                              o)
                            : new s(e, t, a, i);
                    }),
                    (s.fromCartographicArray = function (e, t) {
                        for (
                            var r = Number.MAX_VALUE,
                                a = -Number.MAX_VALUE,
                                i = Number.MAX_VALUE,
                                o = -Number.MAX_VALUE,
                                c = Number.MAX_VALUE,
                                l = -Number.MAX_VALUE,
                                E = 0,
                                f = e.length;
                            E < f;
                            E++
                        ) {
                            var h = e[E];
                            (r = Math.min(r, h.longitude)),
                                (a = Math.max(a, h.longitude)),
                                (c = Math.min(c, h.latitude)),
                                (l = Math.max(l, h.latitude));
                            var d =
                                h.longitude >= 0
                                    ? h.longitude
                                    : h.longitude + u.TWO_PI;
                            (i = Math.min(i, d)), (o = Math.max(o, d));
                        }
                        return (
                            a - r > o - i &&
                                ((r = i),
                                (a = o),
                                a > u.PI && (a -= u.TWO_PI),
                                r > u.PI && (r -= u.TWO_PI)),
                            n(t)
                                ? ((t.west = r),
                                  (t.south = c),
                                  (t.east = a),
                                  (t.north = l),
                                  t)
                                : new s(r, c, a, l)
                        );
                    }),
                    (s.fromCartesianArray = function (e, t, a) {
                        t = r(t, i.WGS84);
                        for (
                            var o = Number.MAX_VALUE,
                                c = -Number.MAX_VALUE,
                                l = Number.MAX_VALUE,
                                E = -Number.MAX_VALUE,
                                f = Number.MAX_VALUE,
                                h = -Number.MAX_VALUE,
                                d = 0,
                                _ = e.length;
                            d < _;
                            d++
                        ) {
                            var p = t.cartesianToCartographic(e[d]);
                            (o = Math.min(o, p.longitude)),
                                (c = Math.max(c, p.longitude)),
                                (f = Math.min(f, p.latitude)),
                                (h = Math.max(h, p.latitude));
                            var m =
                                p.longitude >= 0
                                    ? p.longitude
                                    : p.longitude + u.TWO_PI;
                            (l = Math.min(l, m)), (E = Math.max(E, m));
                        }
                        return (
                            c - o > E - l &&
                                ((o = l),
                                (c = E),
                                c > u.PI && (c -= u.TWO_PI),
                                o > u.PI && (o -= u.TWO_PI)),
                            n(a)
                                ? ((a.west = o),
                                  (a.south = f),
                                  (a.east = c),
                                  (a.north = h),
                                  a)
                                : new s(o, f, c, h)
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
                            i = t.west;
                        a < i && (a += u.TWO_PI);
                        var o = u.negativePiToPi(0.5 * (i + a)),
                            s = 0.5 * (t.south + t.north);
                        return n(r)
                            ? ((r.longitude = o),
                              (r.latitude = s),
                              (r.height = 0),
                              r)
                            : new e(o, s);
                    }),
                    (s.intersection = function (e, t, r) {
                        var a = e.east,
                            i = e.west,
                            o = t.east,
                            c = t.west;
                        a < i && o > 0
                            ? (a += u.TWO_PI)
                            : o < c && a > 0 && (o += u.TWO_PI),
                            a < i && c < 0
                                ? (c += u.TWO_PI)
                                : o < c && i < 0 && (i += u.TWO_PI);
                        var l = u.negativePiToPi(Math.max(i, c)),
                            E = u.negativePiToPi(Math.min(a, o));
                        if (!((e.west < e.east || t.west < t.east) && E <= l)) {
                            var f = Math.max(e.south, t.south),
                                h = Math.min(e.north, t.north);
                            if (!(f >= h))
                                return n(r)
                                    ? ((r.west = l),
                                      (r.south = f),
                                      (r.east = E),
                                      (r.north = h),
                                      r)
                                    : new s(l, f, E, h);
                        }
                    }),
                    (s.simpleIntersection = function (e, t, r) {
                        var a = Math.max(e.west, t.west),
                            i = Math.max(e.south, t.south),
                            o = Math.min(e.east, t.east),
                            u = Math.min(e.north, t.north);
                        if (!(i >= u || a >= o))
                            return n(r)
                                ? ((r.west = a),
                                  (r.south = i),
                                  (r.east = o),
                                  (r.north = u),
                                  r)
                                : new s(a, i, o, u);
                    }),
                    (s.union = function (e, t, r) {
                        n(r) || (r = new s());
                        var a = e.east,
                            i = e.west,
                            o = t.east,
                            c = t.west;
                        a < i && o > 0
                            ? (a += u.TWO_PI)
                            : o < c && a > 0 && (o += u.TWO_PI),
                            a < i && c < 0
                                ? (c += u.TWO_PI)
                                : o < c && i < 0 && (i += u.TWO_PI);
                        var l = u.convertLongitudeRange(Math.min(i, c)),
                            E = u.convertLongitudeRange(Math.max(a, o));
                        return (
                            (r.west = l),
                            (r.south = Math.min(e.south, t.south)),
                            (r.east = E),
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
                            i = e.east;
                        return (
                            i < a &&
                                ((i += u.TWO_PI), r < 0 && (r += u.TWO_PI)),
                            (r > a || u.equalsEpsilon(r, a, u.EPSILON14)) &&
                                (r < i || u.equalsEpsilon(r, i, u.EPSILON14)) &&
                                n >= e.south &&
                                n <= e.north
                        );
                    });
                var c = new e();
                return (
                    (s.subsample = function (e, t, a, o) {
                        (t = r(t, i.WGS84)), (a = r(a, 0)), n(o) || (o = []);
                        var l = 0,
                            E = e.north,
                            f = e.south,
                            h = e.east,
                            d = e.west,
                            _ = c;
                        (_.height = a),
                            (_.longitude = d),
                            (_.latitude = E),
                            (o[l] = t.cartographicToCartesian(_, o[l])),
                            l++,
                            (_.longitude = h),
                            (o[l] = t.cartographicToCartesian(_, o[l])),
                            l++,
                            (_.latitude = f),
                            (o[l] = t.cartographicToCartesian(_, o[l])),
                            l++,
                            (_.longitude = d),
                            (o[l] = t.cartographicToCartesian(_, o[l])),
                            l++,
                            (_.latitude = E < 0 ? E : f > 0 ? f : 0);
                        for (var p = 1; p < 8; ++p)
                            (_.longitude = -Math.PI + p * u.PI_OVER_TWO),
                                s.contains(e, _) &&
                                    ((o[l] = t.cartographicToCartesian(
                                        _,
                                        o[l],
                                    )),
                                    l++);
                        return (
                            0 === _.latitude &&
                                ((_.longitude = d),
                                (o[l] = t.cartographicToCartesian(_, o[l])),
                                l++,
                                (_.longitude = h),
                                (o[l] = t.cartographicToCartesian(_, o[l])),
                                l++),
                            (o.length = l),
                            o
                        );
                    }),
                    (s.MAX_VALUE = o(
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
            function (e, t, r, n, a, i, o, u, s, c, l, E) {
                'use strict';
                function f(t, r) {
                    (this.center = e.clone(n(t, e.ZERO))),
                        (this.radius = n(r, 0));
                }
                var h = new e(),
                    d = new e(),
                    _ = new e(),
                    p = new e(),
                    m = new e(),
                    T = new e(),
                    y = new e(),
                    R = new e(),
                    A = new e(),
                    v = new e(),
                    S = new e(),
                    N = new e();
                f.fromPoints = function (t, r) {
                    if ((a(r) || (r = new f()), !a(t) || 0 === t.length))
                        return (
                            (r.center = e.clone(e.ZERO, r.center)),
                            (r.radius = 0),
                            r
                        );
                    var n,
                        i = e.clone(t[0], y),
                        o = e.clone(i, h),
                        u = e.clone(i, d),
                        s = e.clone(i, _),
                        c = e.clone(i, p),
                        l = e.clone(i, m),
                        E = e.clone(i, T),
                        I = t.length;
                    for (n = 1; n < I; n++) {
                        e.clone(t[n], i);
                        var M = i.x,
                            O = i.y,
                            g = i.z;
                        M < o.x && e.clone(i, o),
                            M > c.x && e.clone(i, c),
                            O < u.y && e.clone(i, u),
                            O > l.y && e.clone(i, l),
                            g < s.z && e.clone(i, s),
                            g > E.z && e.clone(i, E);
                    }
                    var C = e.magnitudeSquared(e.subtract(c, o, R)),
                        w = e.magnitudeSquared(e.subtract(l, u, R)),
                        P = e.magnitudeSquared(e.subtract(E, s, R)),
                        x = o,
                        L = c,
                        U = C;
                    w > U && ((U = w), (x = u), (L = l)),
                        P > U && ((U = P), (x = s), (L = E));
                    var b = A;
                    (b.x = 0.5 * (x.x + L.x)),
                        (b.y = 0.5 * (x.y + L.y)),
                        (b.z = 0.5 * (x.z + L.z));
                    var F = e.magnitudeSquared(e.subtract(L, b, R)),
                        D = Math.sqrt(F),
                        B = v;
                    (B.x = o.x), (B.y = u.y), (B.z = s.z);
                    var z = S;
                    (z.x = c.x), (z.y = l.y), (z.z = E.z);
                    var G = e.multiplyByScalar(e.add(B, z, R), 0.5, N),
                        V = 0;
                    for (n = 0; n < I; n++) {
                        e.clone(t[n], i);
                        var q = e.magnitude(e.subtract(i, G, R));
                        q > V && (V = q);
                        var X = e.magnitudeSquared(e.subtract(i, b, R));
                        if (X > F) {
                            var H = Math.sqrt(X);
                            (D = 0.5 * (D + H)), (F = D * D);
                            var W = H - D;
                            (b.x = (D * b.x + W * i.x) / H),
                                (b.y = (D * b.y + W * i.y) / H),
                                (b.z = (D * b.z + W * i.z) / H);
                        }
                    }
                    return (
                        D < V
                            ? (e.clone(b, r.center), (r.radius = D))
                            : (e.clone(G, r.center), (r.radius = V)),
                        r
                    );
                };
                var I = new o(),
                    M = new e(),
                    O = new e(),
                    g = new t(),
                    C = new t();
                (f.fromRectangle2D = function (e, t, r) {
                    return f.fromRectangleWithHeights2D(e, t, 0, 0, r);
                }),
                    (f.fromRectangleWithHeights2D = function (t, r, i, o, u) {
                        if ((a(u) || (u = new f()), !a(t)))
                            return (
                                (u.center = e.clone(e.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (r = n(r, I)),
                            E.southwest(t, g),
                            (g.height = i),
                            E.northeast(t, C),
                            (C.height = o);
                        var s = r.project(g, M),
                            c = r.project(C, O),
                            l = c.x - s.x,
                            h = c.y - s.y,
                            d = c.z - s.z;
                        u.radius = 0.5 * Math.sqrt(l * l + h * h + d * d);
                        var _ = u.center;
                        return (
                            (_.x = s.x + 0.5 * l),
                            (_.y = s.y + 0.5 * h),
                            (_.z = s.z + 0.5 * d),
                            u
                        );
                    });
                var w = [];
                (f.fromRectangle3D = function (t, r, o, u) {
                    if (
                        ((r = n(r, i.WGS84)),
                        (o = n(o, 0)),
                        a(u) || (u = new f()),
                        !a(t))
                    )
                        return (
                            (u.center = e.clone(e.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var s = E.subsample(t, r, o, w);
                    return f.fromPoints(s, u);
                }),
                    (f.fromVertices = function (t, r, i, o) {
                        if ((a(o) || (o = new f()), !a(t) || 0 === t.length))
                            return (
                                (o.center = e.clone(e.ZERO, o.center)),
                                (o.radius = 0),
                                o
                            );
                        (r = n(r, e.ZERO)), (i = n(i, 3));
                        var u = y;
                        (u.x = t[0] + r.x),
                            (u.y = t[1] + r.y),
                            (u.z = t[2] + r.z);
                        var s,
                            c = e.clone(u, h),
                            l = e.clone(u, d),
                            E = e.clone(u, _),
                            I = e.clone(u, p),
                            M = e.clone(u, m),
                            O = e.clone(u, T),
                            g = t.length;
                        for (s = 0; s < g; s += i) {
                            var C = t[s] + r.x,
                                w = t[s + 1] + r.y,
                                P = t[s + 2] + r.z;
                            (u.x = C),
                                (u.y = w),
                                (u.z = P),
                                C < c.x && e.clone(u, c),
                                C > I.x && e.clone(u, I),
                                w < l.y && e.clone(u, l),
                                w > M.y && e.clone(u, M),
                                P < E.z && e.clone(u, E),
                                P > O.z && e.clone(u, O);
                        }
                        var x = e.magnitudeSquared(e.subtract(I, c, R)),
                            L = e.magnitudeSquared(e.subtract(M, l, R)),
                            U = e.magnitudeSquared(e.subtract(O, E, R)),
                            b = c,
                            F = I,
                            D = x;
                        L > D && ((D = L), (b = l), (F = M)),
                            U > D && ((D = U), (b = E), (F = O));
                        var B = A;
                        (B.x = 0.5 * (b.x + F.x)),
                            (B.y = 0.5 * (b.y + F.y)),
                            (B.z = 0.5 * (b.z + F.z));
                        var z = e.magnitudeSquared(e.subtract(F, B, R)),
                            G = Math.sqrt(z),
                            V = v;
                        (V.x = c.x), (V.y = l.y), (V.z = E.z);
                        var q = S;
                        (q.x = I.x), (q.y = M.y), (q.z = O.z);
                        var X = e.multiplyByScalar(e.add(V, q, R), 0.5, N),
                            H = 0;
                        for (s = 0; s < g; s += i) {
                            (u.x = t[s] + r.x),
                                (u.y = t[s + 1] + r.y),
                                (u.z = t[s + 2] + r.z);
                            var W = e.magnitude(e.subtract(u, X, R));
                            W > H && (H = W);
                            var k = e.magnitudeSquared(e.subtract(u, B, R));
                            if (k > z) {
                                var Y = Math.sqrt(k);
                                (G = 0.5 * (G + Y)), (z = G * G);
                                var Z = Y - G;
                                (B.x = (G * B.x + Z * u.x) / Y),
                                    (B.y = (G * B.y + Z * u.y) / Y),
                                    (B.z = (G * B.z + Z * u.z) / Y);
                            }
                        }
                        return (
                            G < H
                                ? (e.clone(B, o.center), (o.radius = G))
                                : (e.clone(X, o.center), (o.radius = H)),
                            o
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
                        var i = y;
                        (i.x = t[0] + r[0]),
                            (i.y = t[1] + r[1]),
                            (i.z = t[2] + r[2]);
                        var o,
                            u = e.clone(i, h),
                            s = e.clone(i, d),
                            c = e.clone(i, _),
                            l = e.clone(i, p),
                            E = e.clone(i, m),
                            I = e.clone(i, T),
                            M = t.length;
                        for (o = 0; o < M; o += 3) {
                            var O = t[o] + r[o],
                                g = t[o + 1] + r[o + 1],
                                C = t[o + 2] + r[o + 2];
                            (i.x = O),
                                (i.y = g),
                                (i.z = C),
                                O < u.x && e.clone(i, u),
                                O > l.x && e.clone(i, l),
                                g < s.y && e.clone(i, s),
                                g > E.y && e.clone(i, E),
                                C < c.z && e.clone(i, c),
                                C > I.z && e.clone(i, I);
                        }
                        var w = e.magnitudeSquared(e.subtract(l, u, R)),
                            P = e.magnitudeSquared(e.subtract(E, s, R)),
                            x = e.magnitudeSquared(e.subtract(I, c, R)),
                            L = u,
                            U = l,
                            b = w;
                        P > b && ((b = P), (L = s), (U = E)),
                            x > b && ((b = x), (L = c), (U = I));
                        var F = A;
                        (F.x = 0.5 * (L.x + U.x)),
                            (F.y = 0.5 * (L.y + U.y)),
                            (F.z = 0.5 * (L.z + U.z));
                        var D = e.magnitudeSquared(e.subtract(U, F, R)),
                            B = Math.sqrt(D),
                            z = v;
                        (z.x = u.x), (z.y = s.y), (z.z = c.z);
                        var G = S;
                        (G.x = l.x), (G.y = E.y), (G.z = I.z);
                        var V = e.multiplyByScalar(e.add(z, G, R), 0.5, N),
                            q = 0;
                        for (o = 0; o < M; o += 3) {
                            (i.x = t[o] + r[o]),
                                (i.y = t[o + 1] + r[o + 1]),
                                (i.z = t[o + 2] + r[o + 2]);
                            var X = e.magnitude(e.subtract(i, V, R));
                            X > q && (q = X);
                            var H = e.magnitudeSquared(e.subtract(i, F, R));
                            if (H > D) {
                                var W = Math.sqrt(H);
                                (B = 0.5 * (B + W)), (D = B * B);
                                var k = W - B;
                                (F.x = (B * F.x + k * i.x) / W),
                                    (F.y = (B * F.y + k * i.y) / W),
                                    (F.z = (B * F.z + k * i.z) / W);
                            }
                        }
                        return (
                            B < q
                                ? (e.clone(F, n.center), (n.radius = B))
                                : (e.clone(V, n.center), (n.radius = q)),
                            n
                        );
                    }),
                    (f.fromCornerPoints = function (t, r, n) {
                        a(n) || (n = new f());
                        var i = n.center;
                        return (
                            e.add(t, r, i),
                            e.multiplyByScalar(i, 0.5, i),
                            (n.radius = e.distance(i, r)),
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
                var P = new e();
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
                    var i,
                        o = [];
                    for (i = 0; i < n; i++) o.push(t[i].center);
                    r = f.fromPoints(o, r);
                    var u = r.center,
                        s = r.radius;
                    for (i = 0; i < n; i++) {
                        var c = t[i];
                        s = Math.max(s, e.distance(u, c.center, P) + c.radius);
                    }
                    return (r.radius = s), r;
                };
                var x = new e(),
                    L = new e(),
                    U = new e();
                (f.fromOrientedBoundingBox = function (t, r) {
                    a(r) || (r = new f());
                    var n = t.halfAxes,
                        i = c.getColumn(n, 0, x),
                        o = c.getColumn(n, 1, L),
                        u = c.getColumn(n, 2, U);
                    return (
                        e.add(i, o, i),
                        e.add(i, u, i),
                        (r.center = e.clone(t.center, r.center)),
                        (r.radius = e.magnitude(i)),
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
                        var i = r.center;
                        return (
                            (i.x = e[t++]),
                            (i.y = e[t++]),
                            (i.z = e[t++]),
                            (r.radius = e[t]),
                            r
                        );
                    });
                var b = new e(),
                    F = new e();
                f.union = function (t, r, n) {
                    a(n) || (n = new f());
                    var i = t.center,
                        o = t.radius,
                        u = r.center,
                        s = r.radius,
                        c = e.subtract(u, i, b),
                        l = e.magnitude(c);
                    if (o >= l + s) return t.clone(n), n;
                    if (s >= l + o) return r.clone(n), n;
                    var E = 0.5 * (o + l + s),
                        h = e.multiplyByScalar(c, (-o + E) / l, F);
                    return (
                        e.add(h, i, h), e.clone(h, n.center), (n.radius = E), n
                    );
                };
                var D = new e();
                (f.expand = function (t, r, n) {
                    n = f.clone(t, n);
                    var a = e.magnitude(e.subtract(r, n.center, D));
                    return a > n.radius && (n.radius = a), n;
                }),
                    (f.intersectPlane = function (t, r) {
                        var n = t.center,
                            a = t.radius,
                            i = r.normal,
                            o = e.dot(i, n) + r.distance;
                        return o < -a
                            ? u.OUTSIDE
                            : o < a
                              ? u.INTERSECTING
                              : u.INSIDE;
                    }),
                    (f.transform = function (e, t, r) {
                        return (
                            a(r) || (r = new f()),
                            (r.center = l.multiplyByPoint(
                                t,
                                e.center,
                                r.center,
                            )),
                            (r.radius = l.getMaximumScale(t) * e.radius),
                            r
                        );
                    });
                var B = new e();
                (f.distanceSquaredTo = function (t, r) {
                    var n = e.subtract(t.center, r, B);
                    return e.magnitudeSquared(n) - t.radius * t.radius;
                }),
                    (f.transformWithoutScale = function (e, t, r) {
                        return (
                            a(r) || (r = new f()),
                            (r.center = l.multiplyByPoint(
                                t,
                                e.center,
                                r.center,
                            )),
                            (r.radius = e.radius),
                            r
                        );
                    });
                var z = new e();
                f.computePlaneDistances = function (t, r, n, i) {
                    a(i) || (i = new s());
                    var o = e.subtract(t.center, r, z),
                        u = e.dot(n, o);
                    return (i.start = u - t.radius), (i.stop = u + t.radius), i;
                };
                for (
                    var G = new e(),
                        V = new e(),
                        q = new e(),
                        X = new e(),
                        H = new e(),
                        W = new t(),
                        k = new Array(8),
                        Y = 0;
                    Y < 8;
                    ++Y
                )
                    k[Y] = new e();
                var Z = new o();
                return (
                    (f.projectTo2D = function (t, r, a) {
                        r = n(r, Z);
                        var i = r.ellipsoid,
                            o = t.center,
                            u = t.radius,
                            s = i.geodeticSurfaceNormal(o, G),
                            c = e.cross(e.UNIT_Z, s, V);
                        e.normalize(c, c);
                        var l = e.cross(s, c, q);
                        e.normalize(l, l),
                            e.multiplyByScalar(s, u, s),
                            e.multiplyByScalar(l, u, l),
                            e.multiplyByScalar(c, u, c);
                        var E = e.negate(l, H),
                            h = e.negate(c, X),
                            d = k,
                            _ = d[0];
                        e.add(s, l, _),
                            e.add(_, c, _),
                            (_ = d[1]),
                            e.add(s, l, _),
                            e.add(_, h, _),
                            (_ = d[2]),
                            e.add(s, E, _),
                            e.add(_, h, _),
                            (_ = d[3]),
                            e.add(s, E, _),
                            e.add(_, c, _),
                            e.negate(s, s),
                            (_ = d[4]),
                            e.add(s, l, _),
                            e.add(_, c, _),
                            (_ = d[5]),
                            e.add(s, l, _),
                            e.add(_, h, _),
                            (_ = d[6]),
                            e.add(s, E, _),
                            e.add(_, h, _),
                            (_ = d[7]),
                            e.add(s, E, _),
                            e.add(_, c, _);
                        for (var p = d.length, m = 0; m < p; ++m) {
                            var T = d[m];
                            e.add(o, T, T);
                            var y = i.cartesianToCartographic(T, W);
                            r.project(y, T);
                        }
                        (a = f.fromPoints(d, a)), (o = a.center);
                        var R = o.x,
                            A = o.y,
                            v = o.z;
                        return (o.x = v), (o.y = R), (o.z = A), a;
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
                                i = ['webkit', 'moz', 'o', 'ms', 'khtml'],
                                o = 0,
                                u = i.length;
                            o < u;
                            ++o
                        ) {
                            var s = i[o];
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
                    if (!t(A) && ((A = !1), !f())) {
                        var e = / Chrome\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((A = !0), (v = n(e[1])));
                    }
                    return A;
                }
                function i() {
                    return a() && v;
                }
                function o() {
                    if (
                        !t(S) &&
                        ((S = !1),
                        !a() && !f() && / Safari\/[\.0-9]+/.test(R.userAgent))
                    ) {
                        var e = / Version\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((S = !0), (N = n(e[1])));
                    }
                    return S;
                }
                function u() {
                    return o() && N;
                }
                function s() {
                    if (!t(I)) {
                        I = !1;
                        var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            R.userAgent,
                        );
                        null !== e &&
                            ((I = !0), (M = n(e[1])), (M.isNightly = !!e[2]));
                    }
                    return I;
                }
                function c() {
                    return s() && M;
                }
                function l() {
                    if (!t(O)) {
                        O = !1;
                        var e;
                        'Microsoft Internet Explorer' === R.appName
                            ? null !==
                                  (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      R.userAgent,
                                  )) && ((O = !0), (g = n(e[1])))
                            : 'Netscape' === R.appName &&
                              null !==
                                  (e =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          R.userAgent,
                                      )) &&
                              ((O = !0), (g = n(e[1])));
                    }
                    return O;
                }
                function E() {
                    return l() && g;
                }
                function f() {
                    if (!t(C)) {
                        C = !1;
                        var e = / Edge\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((C = !0), (w = n(e[1])));
                    }
                    return C;
                }
                function h() {
                    return f() && w;
                }
                function d() {
                    if (!t(P)) {
                        P = !1;
                        var e = /Firefox\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((P = !0), (x = n(e[1])));
                    }
                    return P;
                }
                function _() {
                    return t(L) || (L = /Windows/i.test(R.appVersion)), L;
                }
                function p() {
                    return d() && x;
                }
                function m() {
                    return (
                        t(U) ||
                            (U =
                                'undefined' != typeof PointerEvent &&
                                (!t(R.pointerEnabled) || R.pointerEnabled)),
                        U
                    );
                }
                function T() {
                    if (!t(F)) {
                        var e = document.createElement('canvas');
                        e.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var r = e.style.imageRendering;
                        (F = t(r) && '' !== r), F && (b = r);
                    }
                    return F;
                }
                function y() {
                    return T() ? b : void 0;
                }
                var R;
                R = 'undefined' != typeof navigator ? navigator : {};
                var A,
                    v,
                    S,
                    N,
                    I,
                    M,
                    O,
                    g,
                    C,
                    w,
                    P,
                    x,
                    L,
                    U,
                    b,
                    F,
                    D = {
                        isChrome: a,
                        chromeVersion: i,
                        isSafari: o,
                        safariVersion: u,
                        isWebkit: s,
                        webkitVersion: c,
                        isInternetExplorer: l,
                        internetExplorerVersion: E,
                        isEdge: f,
                        edgeVersion: h,
                        isFirefox: d,
                        firefoxVersion: p,
                        isWindows: _,
                        hardwareConcurrency: e(R.hardwareConcurrency, 3),
                        supportsPointerEvents: m,
                        supportsImageRenderingPixelated: T,
                        imageRenderingValue: y,
                    };
                return (
                    (D.supportsFullscreen = function () {
                        return r.supportsFullscreen();
                    }),
                    (D.supportsTypedArrays = function () {
                        return 'undefined' != typeof ArrayBuffer;
                    }),
                    (D.supportsWebWorkers = function () {
                        return 'undefined' != typeof Worker;
                    }),
                    D
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
            function (e, t, r, n, a, i) {
                'use strict';
                if (!n.supportsTypedArrays()) return {};
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
                    (o.getSizeInBytes = function (e) {
                        switch (e) {
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
                    (o.fromTypedArray = function (e) {
                        return e instanceof Int8Array
                            ? o.BYTE
                            : e instanceof Uint8Array
                              ? o.UNSIGNED_BYTE
                              : e instanceof Int16Array
                                ? o.SHORT
                                : e instanceof Uint16Array
                                  ? o.UNSIGNED_SHORT
                                  : e instanceof Int32Array
                                    ? o.INT
                                    : e instanceof Uint32Array
                                      ? o.UNSIGNED_INT
                                      : e instanceof Float32Array
                                        ? o.FLOAT
                                        : e instanceof Float64Array
                                          ? o.DOUBLE
                                          : void 0;
                    }),
                    (o.validate = function (e) {
                        return (
                            t(e) &&
                            (e === o.BYTE ||
                                e === o.UNSIGNED_BYTE ||
                                e === o.SHORT ||
                                e === o.UNSIGNED_SHORT ||
                                e === o.INT ||
                                e === o.UNSIGNED_INT ||
                                e === o.FLOAT ||
                                e === o.DOUBLE)
                        );
                    }),
                    (o.createTypedArray = function (e, t) {
                        switch (e) {
                            case o.BYTE:
                                return new Int8Array(t);
                            case o.UNSIGNED_BYTE:
                                return new Uint8Array(t);
                            case o.SHORT:
                                return new Int16Array(t);
                            case o.UNSIGNED_SHORT:
                                return new Uint16Array(t);
                            case o.INT:
                                return new Int32Array(t);
                            case o.UNSIGNED_INT:
                                return new Uint32Array(t);
                            case o.FLOAT:
                                return new Float32Array(t);
                            case o.DOUBLE:
                                return new Float64Array(t);
                        }
                    }),
                    (o.createArrayBufferView = function (t, r, n, a) {
                        switch (
                            ((n = e(n, 0)),
                            (a = e(
                                a,
                                (r.byteLength - n) / o.getSizeInBytes(t),
                            )),
                            t)
                        ) {
                            case o.BYTE:
                                return new Int8Array(r, n, a);
                            case o.UNSIGNED_BYTE:
                                return new Uint8Array(r, n, a);
                            case o.SHORT:
                                return new Int16Array(r, n, a);
                            case o.UNSIGNED_SHORT:
                                return new Uint16Array(r, n, a);
                            case o.INT:
                                return new Int32Array(r, n, a);
                            case o.UNSIGNED_INT:
                                return new Uint32Array(r, n, a);
                            case o.FLOAT:
                                return new Float32Array(r, n, a);
                            case o.DOUBLE:
                                return new Float64Array(r, n, a);
                        }
                    }),
                    (o.fromName = function (e) {
                        switch (e) {
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
            function (e, t, r, n, a, i) {
                'use strict';
                function o(e) {
                    (e = t(e, t.EMPTY_OBJECT)),
                        (this.attributes = e.attributes),
                        (this.indices = e.indices),
                        (this.primitiveType = t(e.primitiveType, i.TRIANGLES)),
                        (this.boundingSphere = e.boundingSphere),
                        (this.geometryType = t(e.geometryType, a.NONE)),
                        (this.boundingSphereCV = e.boundingSphereCV);
                }
                return (
                    (o.computeNumberOfVertices = function (e) {
                        var t = -1;
                        for (var n in e.attributes)
                            if (
                                e.attributes.hasOwnProperty(n) &&
                                r(e.attributes[n]) &&
                                r(e.attributes[n].values)
                            ) {
                                var a = e.attributes[n],
                                    i =
                                        a.values.length /
                                        a.componentsPerAttribute;
                                t = i;
                            }
                        return t;
                    }),
                    o
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
            'Core/Cartesian2',
            [
                './Check',
                './defaultValue',
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
            ],
            function (e, t, r, n, a, i) {
                'use strict';
                function o(e, r) {
                    (this.x = t(e, 0)), (this.y = t(r, 0));
                }
                (o.fromElements = function (e, t, n) {
                    return r(n) ? ((n.x = e), (n.y = t), n) : new o(e, t);
                }),
                    (o.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.x = e.x), (t.y = e.y), t)
                                : new o(e.x, e.y);
                    }),
                    (o.fromCartesian3 = o.clone),
                    (o.fromCartesian4 = o.clone),
                    (o.packedLength = 2),
                    (o.pack = function (e, r, n) {
                        return (n = t(n, 0)), (r[n++] = e.x), (r[n] = e.y), r;
                    }),
                    (o.unpack = function (e, n, a) {
                        return (
                            (n = t(n, 0)),
                            r(a) || (a = new o()),
                            (a.x = e[n++]),
                            (a.y = e[n]),
                            a
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = 2 * n) : (t = new Array(2 * n));
                        for (var a = 0; a < n; ++a) o.pack(e[a], t, 2 * a);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var n = e.length;
                        r(t) ? (t.length = n / 2) : (t = new Array(n / 2));
                        for (var a = 0; a < n; a += 2) {
                            var i = a / 2;
                            t[i] = o.unpack(e, a, t[i]);
                        }
                        return t;
                    }),
                    (o.fromArray = o.unpack),
                    (o.maximumComponent = function (e) {
                        return Math.max(e.x, e.y);
                    }),
                    (o.minimumComponent = function (e) {
                        return Math.min(e.x, e.y);
                    }),
                    (o.minimumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.min(e.x, t.x)),
                            (r.y = Math.min(e.y, t.y)),
                            r
                        );
                    }),
                    (o.maximumByComponent = function (e, t, r) {
                        return (
                            (r.x = Math.max(e.x, t.x)),
                            (r.y = Math.max(e.y, t.y)),
                            r
                        );
                    }),
                    (o.magnitudeSquared = function (e) {
                        return e.x * e.x + e.y * e.y;
                    }),
                    (o.magnitude = function (e) {
                        return Math.sqrt(o.magnitudeSquared(e));
                    });
                var u = new o();
                (o.distance = function (e, t) {
                    return o.subtract(e, t, u), o.magnitude(u);
                }),
                    (o.distanceSquared = function (e, t) {
                        return o.subtract(e, t, u), o.magnitudeSquared(u);
                    }),
                    (o.normalize = function (e, t) {
                        var r = o.magnitude(e);
                        return (t.x = e.x / r), (t.y = e.y / r), t;
                    }),
                    (o.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y;
                    }),
                    (o.multiplyComponents = function (e, t, r) {
                        return (r.x = e.x * t.x), (r.y = e.y * t.y), r;
                    }),
                    (o.divideComponents = function (e, t, r) {
                        return (r.x = e.x / t.x), (r.y = e.y / t.y), r;
                    }),
                    (o.add = function (e, t, r) {
                        return (r.x = e.x + t.x), (r.y = e.y + t.y), r;
                    }),
                    (o.subtract = function (e, t, r) {
                        return (r.x = e.x - t.x), (r.y = e.y - t.y), r;
                    }),
                    (o.multiplyByScalar = function (e, t, r) {
                        return (r.x = e.x * t), (r.y = e.y * t), r;
                    }),
                    (o.divideByScalar = function (e, t, r) {
                        return (r.x = e.x / t), (r.y = e.y / t), r;
                    }),
                    (o.negate = function (e, t) {
                        return (t.x = -e.x), (t.y = -e.y), t;
                    }),
                    (o.abs = function (e, t) {
                        return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
                    });
                var s = new o();
                o.lerp = function (e, t, r, n) {
                    return (
                        o.multiplyByScalar(t, r, s),
                        (n = o.multiplyByScalar(e, 1 - r, n)),
                        o.add(s, n, n)
                    );
                };
                var c = new o(),
                    l = new o();
                o.angleBetween = function (e, t) {
                    return (
                        o.normalize(e, c),
                        o.normalize(t, l),
                        i.acosClamped(o.dot(c, l))
                    );
                };
                var E = new o();
                return (
                    (o.mostOrthogonalAxis = function (e, t) {
                        var r = o.normalize(e, E);
                        return (
                            o.abs(r, r),
                            (t =
                                r.x <= r.y
                                    ? o.clone(o.UNIT_X, t)
                                    : o.clone(o.UNIT_Y, t))
                        );
                    }),
                    (o.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) && r(t) && e.x === t.x && e.y === t.y)
                        );
                    }),
                    (o.equalsArray = function (e, t, r) {
                        return e.x === t[r] && e.y === t[r + 1];
                    }),
                    (o.equalsEpsilon = function (e, t, n, a) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                i.equalsEpsilon(e.x, t.x, n, a) &&
                                i.equalsEpsilon(e.y, t.y, n, a))
                        );
                    }),
                    (o.ZERO = a(new o(0, 0))),
                    (o.UNIT_X = a(new o(1, 0))),
                    (o.UNIT_Y = a(new o(0, 1))),
                    (o.prototype.clone = function (e) {
                        return o.clone(this, e);
                    }),
                    (o.prototype.equals = function (e) {
                        return o.equals(this, e);
                    }),
                    (o.prototype.equalsEpsilon = function (e, t, r) {
                        return o.equalsEpsilon(this, e, t, r);
                    }),
                    (o.prototype.toString = function () {
                        return '(' + this.x + ', ' + this.y + ')';
                    }),
                    o
                );
            },
        ),
        define(
            'Core/AttributeCompression',
            [
                './Cartesian2',
                './Cartesian3',
                './Check',
                './defined',
                './DeveloperError',
                './Math',
            ],
            function (e, t, r, n, a, i) {
                'use strict';
                var o = {};
                (o.octEncodeInRange = function (e, t, r) {
                    if (
                        ((r.x =
                            e.x /
                            (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
                        (r.y =
                            e.y /
                            (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
                        e.z < 0)
                    ) {
                        var n = r.x,
                            a = r.y;
                        (r.x = (1 - Math.abs(a)) * i.signNotZero(n)),
                            (r.y = (1 - Math.abs(n)) * i.signNotZero(a));
                    }
                    return (
                        (r.x = i.toSNorm(r.x, t)), (r.y = i.toSNorm(r.y, t)), r
                    );
                }),
                    (o.octEncode = function (e, t) {
                        return o.octEncodeInRange(e, 255, t);
                    }),
                    (o.octDecodeInRange = function (e, r, n, a) {
                        if (
                            ((a.x = i.fromSNorm(e, n)),
                            (a.y = i.fromSNorm(r, n)),
                            (a.z = 1 - (Math.abs(a.x) + Math.abs(a.y))),
                            a.z < 0)
                        ) {
                            var o = a.x;
                            (a.x = (1 - Math.abs(a.y)) * i.signNotZero(o)),
                                (a.y = (1 - Math.abs(o)) * i.signNotZero(a.y));
                        }
                        return t.normalize(a, a);
                    }),
                    (o.octDecode = function (e, t, r) {
                        return o.octDecodeInRange(e, t, 255, r);
                    }),
                    (o.octPackFloat = function (e) {
                        return 256 * e.x + e.y;
                    });
                var u = new e();
                return (
                    (o.octEncodeFloat = function (e) {
                        return o.octEncode(e, u), o.octPackFloat(u);
                    }),
                    (o.octDecodeFloat = function (e, t) {
                        var r = e / 256,
                            n = Math.floor(r),
                            a = 256 * (r - n);
                        return o.octDecode(n, a, t);
                    }),
                    (o.octPack = function (e, t, r, n) {
                        var a = o.octEncodeFloat(e),
                            i = o.octEncodeFloat(t),
                            s = o.octEncode(r, u);
                        return (
                            (n.x = 65536 * s.x + a), (n.y = 65536 * s.y + i), n
                        );
                    }),
                    (o.octUnpack = function (e, t, r, n) {
                        var a = e.x / 65536,
                            i = Math.floor(a),
                            u = 65536 * (a - i);
                        a = e.y / 65536;
                        var s = Math.floor(a),
                            c = 65536 * (a - s);
                        o.octDecodeFloat(u, t),
                            o.octDecodeFloat(c, r),
                            o.octDecode(i, s, n);
                    }),
                    (o.compressTextureCoordinates = function (e) {
                        return 4096 * ((4095 * e.x) | 0) + ((4095 * e.y) | 0);
                    }),
                    (o.decompressTextureCoordinates = function (e, t) {
                        var r = e / 4096,
                            n = Math.floor(r);
                        return (
                            (t.x = n / 4095), (t.y = (e - 4096 * n) / 4095), t
                        );
                    }),
                    o
                );
            },
        ),
        define(
            'Core/barycentricCoordinates',
            ['./Cartesian2', './Cartesian3', './Check', './defined'],
            function (e, t, r, n) {
                'use strict';
                function a(r, a, s, c, l) {
                    n(l) || (l = new t());
                    var E, f, h, d, _, p, m, T;
                    n(a.z)
                        ? ((E = t.subtract(s, a, i)),
                          (f = t.subtract(c, a, o)),
                          (h = t.subtract(r, a, u)),
                          (d = t.dot(E, E)),
                          (_ = t.dot(E, f)),
                          (p = t.dot(E, h)),
                          (m = t.dot(f, f)),
                          (T = t.dot(f, h)))
                        : ((E = e.subtract(s, a, i)),
                          (f = e.subtract(c, a, o)),
                          (h = e.subtract(r, a, u)),
                          (d = e.dot(E, E)),
                          (_ = e.dot(E, f)),
                          (p = e.dot(E, h)),
                          (m = e.dot(f, f)),
                          (T = e.dot(f, h)));
                    var y = 1 / (d * m - _ * _);
                    return (
                        (l.y = (m * p - _ * T) * y),
                        (l.z = (d * T - _ * p) * y),
                        (l.x = 1 - l.y - l.z),
                        l
                    );
                }
                var i = new t(),
                    o = new t(),
                    u = new t();
                return a;
            },
        ),
        define(
            'Core/EncodedCartesian3',
            ['./Cartesian3', './Check', './defined'],
            function (e, t, r) {
                'use strict';
                function n() {
                    (this.high = e.clone(e.ZERO)), (this.low = e.clone(e.ZERO));
                }
                n.encode = function (e, t) {
                    r(t) || (t = { high: 0, low: 0 });
                    var n;
                    return (
                        e >= 0
                            ? ((n = 65536 * Math.floor(e / 65536)),
                              (t.high = n),
                              (t.low = e - n))
                            : ((n = 65536 * Math.floor(-e / 65536)),
                              (t.high = -n),
                              (t.low = e + n)),
                        t
                    );
                };
                var a = { high: 0, low: 0 };
                n.fromCartesian = function (e, t) {
                    r(t) || (t = new n());
                    var i = t.high,
                        o = t.low;
                    return (
                        n.encode(e.x, a),
                        (i.x = a.high),
                        (o.x = a.low),
                        n.encode(e.y, a),
                        (i.y = a.high),
                        (o.y = a.low),
                        n.encode(e.z, a),
                        (i.z = a.high),
                        (o.z = a.low),
                        t
                    );
                };
                var i = new n();
                return (
                    (n.writeElements = function (e, t, r) {
                        n.fromCartesian(e, i);
                        var a = i.high,
                            o = i.low;
                        (t[r] = a.x),
                            (t[r + 1] = a.y),
                            (t[r + 2] = a.z),
                            (t[r + 3] = o.x),
                            (t[r + 4] = o.y),
                            (t[r + 5] = o.z);
                    }),
                    n
                );
            },
        ),
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
                var i = {
                    UNSIGNED_BYTE: a.UNSIGNED_BYTE,
                    UNSIGNED_SHORT: a.UNSIGNED_SHORT,
                    UNSIGNED_INT: a.UNSIGNED_INT,
                };
                return (
                    (i.getSizeInBytes = function (e) {
                        switch (e) {
                            case i.UNSIGNED_BYTE:
                                return Uint8Array.BYTES_PER_ELEMENT;
                            case i.UNSIGNED_SHORT:
                                return Uint16Array.BYTES_PER_ELEMENT;
                            case i.UNSIGNED_INT:
                                return Uint32Array.BYTES_PER_ELEMENT;
                        }
                    }),
                    (i.validate = function (t) {
                        return (
                            e(t) &&
                            (t === i.UNSIGNED_BYTE ||
                                t === i.UNSIGNED_SHORT ||
                                t === i.UNSIGNED_INT)
                        );
                    }),
                    (i.createTypedArray = function (e, t) {
                        return e >= n.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(t)
                            : new Uint16Array(t);
                    }),
                    (i.createTypedArrayFromArrayBuffer = function (e, t, r, a) {
                        return e >= n.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(t, r, a)
                            : new Uint16Array(t, r, a);
                    }),
                    r(i)
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
                        var i;
                        if (0 === e) return 0 === n ? [] : [-a / n];
                        if (0 === n) {
                            if (0 === a) return [0, 0];
                            var o = Math.abs(a),
                                u = Math.abs(e);
                            if (o < u && o / u < t.EPSILON14) return [0, 0];
                            if (o > u && u / o < t.EPSILON14) return [];
                            if ((i = -a / e) < 0) return [];
                            var s = Math.sqrt(i);
                            return [-s, s];
                        }
                        if (0 === a)
                            return (i = -n / e), i < 0 ? [i, 0] : [0, i];
                        var c = n * n,
                            l = 4 * e * a,
                            E = r(c, -l, t.EPSILON14);
                        if (E < 0) return [];
                        var f =
                            -0.5 * r(n, t.sign(n) * Math.sqrt(E), t.EPSILON14);
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
                        i,
                        o = e,
                        u = t / 3,
                        s = r / 3,
                        c = n,
                        l = o * s,
                        E = u * c,
                        f = u * u,
                        h = s * s,
                        d = o * s - f,
                        _ = o * c - u * s,
                        p = u * c - h,
                        m = 4 * d * p - _ * _;
                    if (m < 0) {
                        var T, y, R;
                        f * E >= l * h
                            ? ((T = o), (y = d), (R = -2 * u * d + o * _))
                            : ((T = c), (y = p), (R = -c * _ + 2 * s * p));
                        var A = R < 0 ? -1 : 1,
                            v = -A * Math.abs(T) * Math.sqrt(-m);
                        i = -R + v;
                        var S = i / 2,
                            N =
                                S < 0
                                    ? -Math.pow(-S, 1 / 3)
                                    : Math.pow(S, 1 / 3),
                            I = i === v ? -N : -y / N;
                        return (
                            (a = y <= 0 ? N + I : -R / (N * N + I * I + y)),
                            f * E >= l * h ? [(a - u) / o] : [-c / (a + s)]
                        );
                    }
                    var M = d,
                        O = -2 * u * d + o * _,
                        g = p,
                        C = -c * _ + 2 * s * p,
                        w = Math.sqrt(m),
                        P = Math.sqrt(3) / 2,
                        x = Math.abs(Math.atan2(o * w, -O) / 3);
                    a = 2 * Math.sqrt(-M);
                    var L = Math.cos(x);
                    i = a * L;
                    var U = a * (-L / 2 - P * Math.sin(x)),
                        b = i + U > 2 * u ? i - u : U - u,
                        F = o,
                        D = b / F;
                    (x = Math.abs(Math.atan2(c * w, -C) / 3)),
                        (a = 2 * Math.sqrt(-g)),
                        (L = Math.cos(x)),
                        (i = a * L),
                        (U = a * (-L / 2 - P * Math.sin(x)));
                    var B = -c,
                        z = i + U < 2 * s ? i + s : U + s,
                        G = B / z,
                        V = F * z,
                        q = -b * z - F * B,
                        X = b * B,
                        H = (s * q - u * X) / (-u * q + s * V);
                    return D <= H
                        ? D <= G
                            ? H <= G
                                ? [D, H, G]
                                : [D, G, H]
                            : [G, D, H]
                        : D <= G
                          ? [H, D, G]
                          : H <= G
                            ? [H, G, D]
                            : [G, H, D];
                }
                var n = {};
                return (
                    (n.computeDiscriminant = function (e, t, r, n) {
                        var a = e * e,
                            i = t * t,
                            o = r * r;
                        return (
                            18 * e * t * r * n +
                            i * o -
                            27 * a * (n * n) -
                            4 * (e * o * r + i * t * n)
                        );
                    }),
                    (n.computeRealRoots = function (e, n, a, i) {
                        var o, u;
                        if (0 === e) return t.computeRealRoots(n, a, i);
                        if (0 === n) {
                            if (0 === a) {
                                if (0 === i) return [0, 0, 0];
                                u = -i / e;
                                var s =
                                    u < 0
                                        ? -Math.pow(-u, 1 / 3)
                                        : Math.pow(u, 1 / 3);
                                return [s, s, s];
                            }
                            return 0 === i
                                ? ((o = t.computeRealRoots(e, 0, a)),
                                  0 === o.Length ? [0] : [o[0], 0, o[1]])
                                : r(e, 0, a, i);
                        }
                        return 0 === a
                            ? 0 === i
                                ? ((u = -n / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                                : r(e, n, 0, i)
                            : 0 === i
                              ? ((o = t.computeRealRoots(e, n, a)),
                                0 === o.length
                                    ? [0]
                                    : o[1] <= 0
                                      ? [o[0], o[1], 0]
                                      : o[0] >= 0
                                        ? [0, o[0], o[1]]
                                        : [o[0], 0, o[1]])
                              : r(e, n, a, i);
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
                function a(t, a, i, o) {
                    var u = t * t,
                        s = a - (3 * u) / 8,
                        c = i - (a * t) / 2 + (u * t) / 8,
                        l = o - (i * t) / 4 + (a * u) / 16 - (3 * u * u) / 256,
                        E = e.computeRealRoots(1, 2 * s, s * s - 4 * l, -c * c);
                    if (E.length > 0) {
                        var f = -t / 4,
                            h = E[E.length - 1];
                        if (Math.abs(h) < r.EPSILON14) {
                            var d = n.computeRealRoots(1, s, l);
                            if (2 === d.length) {
                                var _,
                                    p = d[0],
                                    m = d[1];
                                if (p >= 0 && m >= 0) {
                                    var T = Math.sqrt(p),
                                        y = Math.sqrt(m);
                                    return [f - y, f - T, f + T, f + y];
                                }
                                if (p >= 0 && m < 0)
                                    return (_ = Math.sqrt(p)), [f - _, f + _];
                                if (p < 0 && m >= 0)
                                    return (_ = Math.sqrt(m)), [f - _, f + _];
                            }
                            return [];
                        }
                        if (h > 0) {
                            var R = Math.sqrt(h),
                                A = (s + h - c / R) / 2,
                                v = (s + h + c / R) / 2,
                                S = n.computeRealRoots(1, R, A),
                                N = n.computeRealRoots(1, -R, v);
                            return 0 !== S.length
                                ? ((S[0] += f),
                                  (S[1] += f),
                                  0 !== N.length
                                      ? ((N[0] += f),
                                        (N[1] += f),
                                        S[1] <= N[0]
                                            ? [S[0], S[1], N[0], N[1]]
                                            : N[1] <= S[0]
                                              ? [N[0], N[1], S[0], S[1]]
                                              : S[0] >= N[0] && S[1] <= N[1]
                                                ? [N[0], S[0], S[1], N[1]]
                                                : N[0] >= S[0] && N[1] <= S[1]
                                                  ? [S[0], N[0], N[1], S[1]]
                                                  : S[0] > N[0] && S[0] < N[1]
                                                    ? [N[0], S[0], N[1], S[1]]
                                                    : [S[0], N[0], S[1], N[1]])
                                      : S)
                                : 0 !== N.length
                                  ? ((N[0] += f), (N[1] += f), N)
                                  : [];
                        }
                    }
                    return [];
                }
                function i(t, a, i, o) {
                    var u = i * i,
                        s = a * a,
                        c = t * t,
                        l = -2 * a,
                        E = i * t + s - 4 * o,
                        f = c * o - i * a * t + u,
                        h = e.computeRealRoots(1, l, E, f);
                    if (h.length > 0) {
                        var d,
                            _,
                            p = h[0],
                            m = a - p,
                            T = m * m,
                            y = t / 2,
                            R = m / 2,
                            A = T - 4 * o,
                            v = T + 4 * Math.abs(o),
                            S = c - 4 * p,
                            N = c + 4 * Math.abs(p);
                        if (p < 0 || A * N < S * v) {
                            var I = Math.sqrt(S);
                            (d = I / 2), (_ = 0 === I ? 0 : (t * R - i) / I);
                        } else {
                            var M = Math.sqrt(A);
                            (d = 0 === M ? 0 : (t * R - i) / M), (_ = M / 2);
                        }
                        var O, g;
                        0 === y && 0 === d
                            ? ((O = 0), (g = 0))
                            : r.sign(y) === r.sign(d)
                              ? ((O = y + d), (g = p / O))
                              : ((g = y - d), (O = p / g));
                        var C, w;
                        0 === R && 0 === _
                            ? ((C = 0), (w = 0))
                            : r.sign(R) === r.sign(_)
                              ? ((C = R + _), (w = o / C))
                              : ((w = R - _), (C = o / w));
                        var P = n.computeRealRoots(1, O, C),
                            x = n.computeRealRoots(1, g, w);
                        if (0 !== P.length)
                            return 0 !== x.length
                                ? P[1] <= x[0]
                                    ? [P[0], P[1], x[0], x[1]]
                                    : x[1] <= P[0]
                                      ? [x[0], x[1], P[0], P[1]]
                                      : P[0] >= x[0] && P[1] <= x[1]
                                        ? [x[0], P[0], P[1], x[1]]
                                        : x[0] >= P[0] && x[1] <= P[1]
                                          ? [P[0], x[0], x[1], P[1]]
                                          : P[0] > x[0] && P[0] < x[1]
                                            ? [x[0], P[0], x[1], P[1]]
                                            : [P[0], x[0], P[1], x[1]]
                                : P;
                        if (0 !== x.length) return x;
                    }
                    return [];
                }
                var o = {};
                return (
                    (o.computeDiscriminant = function (e, t, r, n, a) {
                        var i = e * e,
                            o = i * e,
                            u = t * t,
                            s = u * t,
                            c = r * r,
                            l = c * r,
                            E = n * n,
                            f = E * n,
                            h = a * a;
                        return (
                            u * c * E -
                            4 * s * f -
                            4 * e * l * E +
                            18 * e * t * r * f -
                            27 * i * E * E +
                            256 * o * (h * a) +
                            a *
                                (18 * s * r * n -
                                    4 * u * l +
                                    16 * e * c * c -
                                    80 * e * t * c * n -
                                    6 * e * u * E +
                                    144 * i * r * E) +
                            h *
                                (144 * e * u * r -
                                    27 * u * u -
                                    128 * i * c -
                                    192 * i * t * n)
                        );
                    }),
                    (o.computeRealRoots = function (t, n, o, u, s) {
                        if (Math.abs(t) < r.EPSILON15)
                            return e.computeRealRoots(n, o, u, s);
                        var c = n / t,
                            l = o / t,
                            E = u / t,
                            f = s / t,
                            h = c < 0 ? 1 : 0;
                        switch (
                            ((h += l < 0 ? h + 1 : h),
                            (h += E < 0 ? h + 1 : h),
                            (h += f < 0 ? h + 1 : h))
                        ) {
                            case 0:
                                return a(c, l, E, f);
                            case 1:
                            case 2:
                                return i(c, l, E, f);
                            case 3:
                            case 4:
                                return a(c, l, E, f);
                            case 5:
                                return i(c, l, E, f);
                            case 6:
                            case 7:
                                return a(c, l, E, f);
                            case 8:
                                return i(c, l, E, f);
                            case 9:
                            case 10:
                                return a(c, l, E, f);
                            case 11:
                                return i(c, l, E, f);
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                                return a(c, l, E, f);
                            default:
                                return;
                        }
                    }),
                    o
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
            function (e, t, r, n, a, i, o, u, s, c, l) {
                'use strict';
                function E(e, t, r, n) {
                    var a = t * t - 4 * e * r;
                    if (!(a < 0)) {
                        if (a > 0) {
                            var i = 1 / (2 * e),
                                o = Math.sqrt(a),
                                u = (-t + o) * i,
                                s = (-t - o) * i;
                            return (
                                u < s
                                    ? ((n.root0 = u), (n.root1 = s))
                                    : ((n.root0 = s), (n.root1 = u)),
                                n
                            );
                        }
                        var c = -t / (2 * e);
                        if (0 !== c) return (n.root0 = n.root1 = c), n;
                    }
                }
                function f(t, r, a) {
                    n(a) || (a = new i());
                    var o = t.origin,
                        u = t.direction,
                        s = r.center,
                        c = r.radius * r.radius,
                        l = e.subtract(o, s, T),
                        f = e.dot(u, u),
                        h = 2 * e.dot(u, l),
                        d = e.magnitudeSquared(l) - c,
                        _ = E(f, h, d, v);
                    if (n(_)) return (a.start = _.root0), (a.stop = _.root1), a;
                }
                function h(e, t, r) {
                    var n = e + t;
                    return o.sign(e) !== o.sign(t) &&
                        Math.abs(n / Math.max(Math.abs(e), Math.abs(t))) < r
                        ? 0
                        : n;
                }
                function d(t, r, n, a, i) {
                    var l,
                        E = a * a,
                        f = i * i,
                        d = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * f,
                        _ =
                            i *
                            (a *
                                h(
                                    t[u.COLUMN1ROW0],
                                    t[u.COLUMN0ROW1],
                                    o.EPSILON15,
                                ) +
                                r.y),
                        p =
                            t[u.COLUMN0ROW0] * E +
                            t[u.COLUMN2ROW2] * f +
                            a * r.x +
                            n,
                        m =
                            f *
                            h(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                        T =
                            i *
                            (a * h(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + r.z),
                        y = [];
                    if (0 === T && 0 === m) {
                        if (((l = s.computeRealRoots(d, _, p)), 0 === l.length))
                            return y;
                        var R = l[0],
                            A = Math.sqrt(Math.max(1 - R * R, 0));
                        if (
                            (y.push(new e(a, i * R, i * -A)),
                            y.push(new e(a, i * R, i * A)),
                            2 === l.length)
                        ) {
                            var v = l[1],
                                S = Math.sqrt(Math.max(1 - v * v, 0));
                            y.push(new e(a, i * v, i * -S)),
                                y.push(new e(a, i * v, i * S));
                        }
                        return y;
                    }
                    var N = T * T,
                        I = m * m,
                        M = d * d,
                        O = T * m,
                        g = M + I,
                        C = 2 * (_ * d + O),
                        w = 2 * p * d + _ * _ - I + N,
                        P = 2 * (p * _ - O),
                        x = p * p - N;
                    if (0 === g && 0 === C && 0 === w && 0 === P) return y;
                    l = c.computeRealRoots(g, C, w, P, x);
                    var L = l.length;
                    if (0 === L) return y;
                    for (var U = 0; U < L; ++U) {
                        var b,
                            F = l[U],
                            D = F * F,
                            B = Math.max(1 - D, 0),
                            z = Math.sqrt(B);
                        b =
                            o.sign(d) === o.sign(p)
                                ? h(d * D + p, _ * F, o.EPSILON12)
                                : o.sign(p) === o.sign(_ * F)
                                  ? h(d * D, _ * F + p, o.EPSILON12)
                                  : h(d * D + _ * F, p, o.EPSILON12);
                        var G = h(m * F, T, o.EPSILON15),
                            V = b * G;
                        V < 0
                            ? y.push(new e(a, i * F, i * z))
                            : V > 0
                              ? y.push(new e(a, i * F, i * -z))
                              : 0 !== z
                                ? (y.push(new e(a, i * F, i * -z)),
                                  y.push(new e(a, i * F, i * z)),
                                  ++U)
                                : y.push(new e(a, i * F, i * z));
                    }
                    return y;
                }
                var _ = {};
                _.rayPlane = function (t, r, a) {
                    n(a) || (a = new e());
                    var i = t.origin,
                        u = t.direction,
                        s = r.normal,
                        c = e.dot(s, u);
                    if (!(Math.abs(c) < o.EPSILON15)) {
                        var l = (-r.distance - e.dot(s, i)) / c;
                        if (!(l < 0))
                            return (
                                (a = e.multiplyByScalar(u, l, a)),
                                e.add(i, a, a)
                            );
                    }
                };
                var p = new e(),
                    m = new e(),
                    T = new e(),
                    y = new e(),
                    R = new e();
                (_.rayTriangleParametric = function (t, n, a, i, u) {
                    u = r(u, !1);
                    var s,
                        c,
                        l,
                        E,
                        f,
                        h = t.origin,
                        d = t.direction,
                        _ = e.subtract(a, n, p),
                        A = e.subtract(i, n, m),
                        v = e.cross(d, A, T),
                        S = e.dot(_, v);
                    if (u) {
                        if (S < o.EPSILON6) return;
                        if (
                            ((s = e.subtract(h, n, y)),
                            (l = e.dot(s, v)) < 0 || l > S)
                        )
                            return;
                        if (
                            ((c = e.cross(s, _, R)),
                            (E = e.dot(d, c)) < 0 || l + E > S)
                        )
                            return;
                        f = e.dot(A, c) / S;
                    } else {
                        if (Math.abs(S) < o.EPSILON6) return;
                        var N = 1 / S;
                        if (
                            ((s = e.subtract(h, n, y)),
                            (l = e.dot(s, v) * N) < 0 || l > 1)
                        )
                            return;
                        if (
                            ((c = e.cross(s, _, R)),
                            (E = e.dot(d, c) * N) < 0 || l + E > 1)
                        )
                            return;
                        f = e.dot(A, c) * N;
                    }
                    return f;
                }),
                    (_.rayTriangle = function (t, r, a, i, o, u) {
                        var s = _.rayTriangleParametric(t, r, a, i, o);
                        if (n(s) && !(s < 0))
                            return (
                                n(u) || (u = new e()),
                                e.multiplyByScalar(t.direction, s, u),
                                e.add(t.origin, u, u)
                            );
                    });
                var A = new l();
                _.lineSegmentTriangle = function (t, r, a, i, o, u, s) {
                    var c = A;
                    e.clone(t, c.origin),
                        e.subtract(r, t, c.direction),
                        e.normalize(c.direction, c.direction);
                    var l = _.rayTriangleParametric(c, a, i, o, u);
                    if (!(!n(l) || l < 0 || l > e.distance(t, r)))
                        return (
                            n(s) || (s = new e()),
                            e.multiplyByScalar(c.direction, l, s),
                            e.add(c.origin, s, s)
                        );
                };
                var v = { root0: 0, root1: 0 };
                _.raySphere = function (e, t, r) {
                    if (((r = f(e, t, r)), n(r) && !(r.stop < 0)))
                        return (r.start = Math.max(r.start, 0)), r;
                };
                var S = new l();
                _.lineSegmentSphere = function (t, r, a, i) {
                    var o = S;
                    e.clone(t, o.origin);
                    var u = e.subtract(r, t, o.direction),
                        s = e.magnitude(u);
                    if (
                        (e.normalize(u, u),
                        (i = f(o, a, i)),
                        !(!n(i) || i.stop < 0 || i.start > s))
                    )
                        return (
                            (i.start = Math.max(i.start, 0)),
                            (i.stop = Math.min(i.stop, s)),
                            i
                        );
                };
                var N = new e(),
                    I = new e();
                _.rayEllipsoid = function (t, r) {
                    var n,
                        a,
                        o,
                        u,
                        s,
                        c = r.oneOverRadii,
                        l = e.multiplyComponents(c, t.origin, N),
                        E = e.multiplyComponents(c, t.direction, I),
                        f = e.magnitudeSquared(l),
                        h = e.dot(l, E);
                    if (f > 1) {
                        if (h >= 0) return;
                        var d = h * h;
                        if (
                            ((n = f - 1),
                            (a = e.magnitudeSquared(E)),
                            (o = a * n),
                            d < o)
                        )
                            return;
                        if (d > o) {
                            (u = h * h - o), (s = -h + Math.sqrt(u));
                            var _ = s / a,
                                p = n / s;
                            return _ < p ? new i(_, p) : { start: p, stop: _ };
                        }
                        var m = Math.sqrt(n / a);
                        return new i(m, m);
                    }
                    return f < 1
                        ? ((n = f - 1),
                          (a = e.magnitudeSquared(E)),
                          (o = a * n),
                          (u = h * h - o),
                          (s = -h + Math.sqrt(u)),
                          new i(0, s / a))
                        : h < 0
                          ? ((a = e.magnitudeSquared(E)), new i(0, -h / a))
                          : void 0;
                };
                var M = new e(),
                    O = new e(),
                    g = new e(),
                    C = new e(),
                    w = new e(),
                    P = new u(),
                    x = new u(),
                    L = new u(),
                    U = new u(),
                    b = new u(),
                    F = new u(),
                    D = new u(),
                    B = new e(),
                    z = new e(),
                    G = new t();
                _.grazingAltitudeLocation = function (t, r) {
                    var a = t.origin,
                        i = t.direction;
                    if (!e.equals(a, e.ZERO)) {
                        var s = r.geodeticSurfaceNormal(a, M);
                        if (e.dot(i, s) >= 0) return a;
                    }
                    var c = n(this.rayEllipsoid(t, r)),
                        l = r.transformPositionToScaledSpace(i, M),
                        E = e.normalize(l, l),
                        f = e.mostOrthogonalAxis(l, C),
                        h = e.normalize(e.cross(f, E, O), O),
                        _ = e.normalize(e.cross(E, h, g), g),
                        p = P;
                    (p[0] = E.x),
                        (p[1] = E.y),
                        (p[2] = E.z),
                        (p[3] = h.x),
                        (p[4] = h.y),
                        (p[5] = h.z),
                        (p[6] = _.x),
                        (p[7] = _.y),
                        (p[8] = _.z);
                    var m = u.transpose(p, x),
                        T = u.fromScale(r.radii, L),
                        y = u.fromScale(r.oneOverRadii, U),
                        R = b;
                    (R[0] = 0),
                        (R[1] = -i.z),
                        (R[2] = i.y),
                        (R[3] = i.z),
                        (R[4] = 0),
                        (R[5] = -i.x),
                        (R[6] = -i.y),
                        (R[7] = i.x),
                        (R[8] = 0);
                    var A,
                        v,
                        S = u.multiply(u.multiply(m, y, F), R, F),
                        N = u.multiply(u.multiply(S, T, D), p, D),
                        I = u.multiplyByVector(S, a, w),
                        V = d(N, e.negate(I, M), 0, 0, 1),
                        q = V.length;
                    if (q > 0) {
                        for (
                            var X = e.clone(e.ZERO, z),
                                H = Number.NEGATIVE_INFINITY,
                                W = 0;
                            W < q;
                            ++W
                        ) {
                            A = u.multiplyByVector(
                                T,
                                u.multiplyByVector(p, V[W], B),
                                B,
                            );
                            var k = e.normalize(e.subtract(A, a, C), C),
                                Y = e.dot(k, i);
                            Y > H && ((H = Y), (X = e.clone(A, X)));
                        }
                        var Z = r.cartesianToCartographic(X, G);
                        return (
                            (H = o.clamp(H, 0, 1)),
                            (v =
                                e.magnitude(e.subtract(X, a, C)) *
                                Math.sqrt(1 - H * H)),
                            (v = c ? -v : v),
                            (Z.height = v),
                            r.cartographicToCartesian(Z, new e())
                        );
                    }
                };
                var V = new e();
                return (
                    (_.lineSegmentPlane = function (t, r, a, i) {
                        n(i) || (i = new e());
                        var u = e.subtract(r, t, V),
                            s = a.normal,
                            c = e.dot(s, u);
                        if (!(Math.abs(c) < o.EPSILON6)) {
                            var l = e.dot(s, t),
                                E = -(a.distance + l) / c;
                            if (!(E < 0 || E > 1))
                                return (
                                    e.multiplyByScalar(u, E, i),
                                    e.add(t, i, i),
                                    i
                                );
                        }
                    }),
                    (_.trianglePlaneIntersection = function (t, r, n, a) {
                        var i = a.normal,
                            o = a.distance,
                            u = e.dot(i, t) + o < 0,
                            s = e.dot(i, r) + o < 0,
                            c = e.dot(i, n) + o < 0,
                            l = 0;
                        (l += u ? 1 : 0), (l += s ? 1 : 0), (l += c ? 1 : 0);
                        var E, f;
                        if (
                            ((1 !== l && 2 !== l) ||
                                ((E = new e()), (f = new e())),
                            1 === l)
                        ) {
                            if (u)
                                return (
                                    _.lineSegmentPlane(t, r, a, E),
                                    _.lineSegmentPlane(t, n, a, f),
                                    {
                                        positions: [t, r, n, E, f],
                                        indices: [0, 3, 4, 1, 2, 4, 1, 4, 3],
                                    }
                                );
                            if (s)
                                return (
                                    _.lineSegmentPlane(r, n, a, E),
                                    _.lineSegmentPlane(r, t, a, f),
                                    {
                                        positions: [t, r, n, E, f],
                                        indices: [1, 3, 4, 2, 0, 4, 2, 4, 3],
                                    }
                                );
                            if (c)
                                return (
                                    _.lineSegmentPlane(n, t, a, E),
                                    _.lineSegmentPlane(n, r, a, f),
                                    {
                                        positions: [t, r, n, E, f],
                                        indices: [2, 3, 4, 0, 1, 4, 0, 4, 3],
                                    }
                                );
                        } else if (2 === l) {
                            if (!u)
                                return (
                                    _.lineSegmentPlane(r, t, a, E),
                                    _.lineSegmentPlane(n, t, a, f),
                                    {
                                        positions: [t, r, n, E, f],
                                        indices: [1, 2, 4, 1, 4, 3, 0, 3, 4],
                                    }
                                );
                            if (!s)
                                return (
                                    _.lineSegmentPlane(n, r, a, E),
                                    _.lineSegmentPlane(t, r, a, f),
                                    {
                                        positions: [t, r, n, E, f],
                                        indices: [2, 0, 4, 2, 4, 3, 1, 3, 4],
                                    }
                                );
                            if (!c)
                                return (
                                    _.lineSegmentPlane(t, n, a, E),
                                    _.lineSegmentPlane(r, n, a, f),
                                    {
                                        positions: [t, r, n, E, f],
                                        indices: [0, 1, 4, 0, 4, 3, 2, 3, 4],
                                    }
                                );
                        }
                    }),
                    _
                );
            },
        ),
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
                function i(t, r) {
                    (this.normal = e.clone(t)), (this.distance = r);
                }
                i.fromPointNormal = function (r, n, a) {
                    var o = -e.dot(n, r);
                    return t(a)
                        ? (e.clone(n, a.normal), (a.distance = o), a)
                        : new i(n, o);
                };
                var o = new e();
                return (
                    (i.fromCartesian4 = function (r, n) {
                        var a = e.fromCartesian4(r, o),
                            u = r.w;
                        return t(n)
                            ? (e.clone(a, n.normal), (n.distance = u), n)
                            : new i(a, u);
                    }),
                    (i.getPointDistance = function (t, r) {
                        return e.dot(t.normal, r) + t.distance;
                    }),
                    (i.ORIGIN_XY_PLANE = n(new i(e.UNIT_Z, 0))),
                    (i.ORIGIN_YZ_PLANE = n(new i(e.UNIT_X, 0))),
                    (i.ORIGIN_ZX_PLANE = n(new i(e.UNIT_Y, 0))),
                    i
                );
            },
        ),
        define(
            'Core/Tipsify',
            ['./defaultValue', './defined', './DeveloperError'],
            function (e, t, r) {
                'use strict';
                var n = {};
                return (
                    (n.calculateACMR = function (r) {
                        r = e(r, e.EMPTY_OBJECT);
                        var n = r.indices,
                            a = r.maximumIndex,
                            i = e(r.cacheSize, 24),
                            o = n.length;
                        if (!t(a)) {
                            a = 0;
                            for (var u = 0, s = n[u]; u < o; )
                                s > a && (a = s), ++u, (s = n[u]);
                        }
                        for (var c = [], l = 0; l < a + 1; l++) c[l] = 0;
                        for (var E = i + 1, f = 0; f < o; ++f)
                            E - c[n[f]] > i && ((c[n[f]] = E), ++E);
                        return (E - i + 1) / (o / 3);
                    }),
                    (n.tipsify = function (r) {
                        function n(e, t, r, n) {
                            for (; t.length >= 1; ) {
                                var i = t[t.length - 1];
                                if (
                                    (t.splice(t.length - 1, 1),
                                    e[i].numLiveTriangles > 0)
                                )
                                    return i;
                            }
                            for (; a < n; ) {
                                if (e[a].numLiveTriangles > 0) return ++a - 1;
                                ++a;
                            }
                            return -1;
                        }
                        r = e(r, e.EMPTY_OBJECT);
                        var a,
                            i = r.indices,
                            o = r.maximumIndex,
                            u = e(r.cacheSize, 24),
                            s = i.length,
                            c = 0,
                            l = 0,
                            E = i[l],
                            f = s;
                        if (t(o)) c = o + 1;
                        else {
                            for (; l < f; ) E > c && (c = E), ++l, (E = i[l]);
                            if (-1 === c) return 0;
                            ++c;
                        }
                        var h,
                            d = [];
                        for (h = 0; h < c; h++)
                            d[h] = {
                                numLiveTriangles: 0,
                                timeStamp: 0,
                                vertexTriangles: [],
                            };
                        l = 0;
                        for (var _ = 0; l < f; )
                            d[i[l]].vertexTriangles.push(_),
                                ++d[i[l]].numLiveTriangles,
                                d[i[l + 1]].vertexTriangles.push(_),
                                ++d[i[l + 1]].numLiveTriangles,
                                d[i[l + 2]].vertexTriangles.push(_),
                                ++d[i[l + 2]].numLiveTriangles,
                                ++_,
                                (l += 3);
                        var p = 0,
                            m = u + 1;
                        a = 1;
                        var T,
                            y,
                            R = [],
                            A = [],
                            v = 0,
                            S = [],
                            N = s / 3,
                            I = [];
                        for (h = 0; h < N; h++) I[h] = !1;
                        for (var M, O; -1 !== p; ) {
                            (R = []),
                                (y = d[p]),
                                (O = y.vertexTriangles.length);
                            for (var g = 0; g < O; ++g)
                                if (((_ = y.vertexTriangles[g]), !I[_])) {
                                    (I[_] = !0), (l = _ + _ + _);
                                    for (var C = 0; C < 3; ++C)
                                        (M = i[l]),
                                            R.push(M),
                                            A.push(M),
                                            (S[v] = M),
                                            ++v,
                                            (T = d[M]),
                                            --T.numLiveTriangles,
                                            m - T.timeStamp > u &&
                                                ((T.timeStamp = m), ++m),
                                            ++l;
                                }
                            p = (function (e, t, r, a, i, o, u) {
                                for (
                                    var s, c = -1, l = -1, E = 0;
                                    E < r.length;

                                ) {
                                    var f = r[E];
                                    a[f].numLiveTriangles &&
                                        ((s = 0),
                                        i -
                                            a[f].timeStamp +
                                            2 * a[f].numLiveTriangles <=
                                            t && (s = i - a[f].timeStamp),
                                        (s > l || -1 === l) &&
                                            ((l = s), (c = f))),
                                        ++E;
                                }
                                return -1 === c ? n(a, o, e, u) : c;
                            })(i, u, R, d, m, A, c);
                        }
                        return S;
                    }),
                    n
                );
            },
        ),
        define(
            'Core/GeometryPipeline',
            [
                './AttributeCompression',
                './barycentricCoordinates',
                './BoundingSphere',
                './Cartesian2',
                './Cartesian3',
                './Cartesian4',
                './Cartographic',
                './ComponentDatatype',
                './defaultValue',
                './defined',
                './DeveloperError',
                './EncodedCartesian3',
                './GeographicProjection',
                './Geometry',
                './GeometryAttribute',
                './GeometryType',
                './IndexDatatype',
                './Intersect',
                './IntersectionTests',
                './Math',
                './Matrix3',
                './Matrix4',
                './Plane',
                './PrimitiveType',
                './Tipsify',
            ],
            function (
                e,
                t,
                r,
                n,
                a,
                i,
                o,
                u,
                s,
                c,
                l,
                E,
                f,
                h,
                d,
                _,
                p,
                m,
                T,
                y,
                R,
                A,
                v,
                S,
                N,
            ) {
                'use strict';
                function I(e, t, r, n, a) {
                    (e[t++] = r),
                        (e[t++] = n),
                        (e[t++] = n),
                        (e[t++] = a),
                        (e[t++] = a),
                        (e[t] = r);
                }
                function M(e) {
                    for (
                        var t = e.length,
                            r = (t / 3) * 6,
                            n = p.createTypedArray(t, r),
                            a = 0,
                            i = 0;
                        i < t;
                        i += 3, a += 6
                    )
                        I(n, a, e[i], e[i + 1], e[i + 2]);
                    return n;
                }
                function O(e) {
                    var t = e.length;
                    if (t >= 3) {
                        var r = 6 * (t - 2),
                            n = p.createTypedArray(t, r);
                        I(n, 0, e[0], e[1], e[2]);
                        for (var a = 6, i = 3; i < t; ++i, a += 6)
                            I(n, a, e[i - 1], e[i], e[i - 2]);
                        return n;
                    }
                    return new Uint16Array();
                }
                function g(e) {
                    if (e.length > 0) {
                        for (
                            var t = e.length - 1,
                                r = 6 * (t - 1),
                                n = p.createTypedArray(t, r),
                                a = e[0],
                                i = 0,
                                o = 1;
                            o < t;
                            ++o, i += 6
                        )
                            I(n, i, a, e[o], e[o + 1]);
                        return n;
                    }
                    return new Uint16Array();
                }
                function C(e) {
                    var t = {};
                    for (var r in e)
                        if (e.hasOwnProperty(r) && c(e[r]) && c(e[r].values)) {
                            var n = e[r];
                            t[r] = new d({
                                componentDatatype: n.componentDatatype,
                                componentsPerAttribute:
                                    n.componentsPerAttribute,
                                normalize: n.normalize,
                                values: [],
                            });
                        }
                    return t;
                }
                function w(e, t, r) {
                    for (var n in t)
                        if (t.hasOwnProperty(n) && c(t[n]) && c(t[n].values))
                            for (
                                var a = t[n], i = 0;
                                i < a.componentsPerAttribute;
                                ++i
                            )
                                e[n].values.push(
                                    a.values[r * a.componentsPerAttribute + i],
                                );
                }
                function P(e, t) {
                    if (c(t))
                        for (
                            var r = t.values, n = r.length, i = 0;
                            i < n;
                            i += 3
                        )
                            a.unpack(r, i, ie),
                                A.multiplyByPoint(e, ie, ie),
                                a.pack(ie, r, i);
                }
                function x(e, t) {
                    if (c(t))
                        for (
                            var r = t.values, n = r.length, i = 0;
                            i < n;
                            i += 3
                        )
                            a.unpack(r, i, ie),
                                R.multiplyByVector(e, ie, ie),
                                (ie = a.normalize(ie, ie)),
                                a.pack(ie, r, i);
                }
                function L(e, t) {
                    var r,
                        n = e.length,
                        a = {},
                        i = e[0][t].attributes;
                    for (r in i)
                        if (i.hasOwnProperty(r) && c(i[r]) && c(i[r].values)) {
                            for (
                                var o = i[r],
                                    s = o.values.length,
                                    l = !0,
                                    E = 1;
                                E < n;
                                ++E
                            ) {
                                var f = e[E][t].attributes[r];
                                if (
                                    !c(f) ||
                                    o.componentDatatype !==
                                        f.componentDatatype ||
                                    o.componentsPerAttribute !==
                                        f.componentsPerAttribute ||
                                    o.normalize !== f.normalize
                                ) {
                                    l = !1;
                                    break;
                                }
                                s += f.values.length;
                            }
                            l &&
                                (a[r] = new d({
                                    componentDatatype: o.componentDatatype,
                                    componentsPerAttribute:
                                        o.componentsPerAttribute,
                                    normalize: o.normalize,
                                    values: u.createTypedArray(
                                        o.componentDatatype,
                                        s,
                                    ),
                                }));
                        }
                    return a;
                }
                function U(e, t) {
                    var n,
                        i,
                        o,
                        u,
                        s,
                        l,
                        E,
                        f = e.length,
                        d = (e[0].modelMatrix, c(e[0][t].indices)),
                        _ = e[0][t].primitiveType,
                        m = L(e, t);
                    for (n in m)
                        if (m.hasOwnProperty(n))
                            for (s = m[n].values, u = 0, i = 0; i < f; ++i)
                                for (
                                    l = e[i][t].attributes[n].values,
                                        E = l.length,
                                        o = 0;
                                    o < E;
                                    ++o
                                )
                                    s[u++] = l[o];
                    var T;
                    if (d) {
                        var y = 0;
                        for (i = 0; i < f; ++i) y += e[i][t].indices.length;
                        var R = h.computeNumberOfVertices(
                                new h({
                                    attributes: m,
                                    primitiveType: S.POINTS,
                                }),
                            ),
                            A = p.createTypedArray(R, y),
                            v = 0,
                            N = 0;
                        for (i = 0; i < f; ++i) {
                            var I = e[i][t].indices,
                                M = I.length;
                            for (u = 0; u < M; ++u) A[v++] = N + I[u];
                            N += h.computeNumberOfVertices(e[i][t]);
                        }
                        T = A;
                    }
                    var O,
                        g = new a(),
                        C = 0;
                    for (i = 0; i < f; ++i) {
                        if (((O = e[i][t].boundingSphere), !c(O))) {
                            g = void 0;
                            break;
                        }
                        a.add(O.center, g, g);
                    }
                    if (c(g))
                        for (a.divideByScalar(g, f, g), i = 0; i < f; ++i) {
                            O = e[i][t].boundingSphere;
                            var w =
                                a.magnitude(a.subtract(O.center, g, se)) +
                                O.radius;
                            w > C && (C = w);
                        }
                    return new h({
                        attributes: m,
                        indices: T,
                        primitiveType: _,
                        boundingSphere: c(g) ? new r(g, C) : void 0,
                    });
                }
                function b(e) {
                    if (c(e.indices)) return e;
                    for (
                        var t = h.computeNumberOfVertices(e),
                            r = p.createTypedArray(t, t),
                            n = 0;
                        n < t;
                        ++n
                    )
                        r[n] = n;
                    return (e.indices = r), e;
                }
                function F(e) {
                    var t = h.computeNumberOfVertices(e),
                        r = p.createTypedArray(t, 3 * (t - 2));
                    (r[0] = 1), (r[1] = 0), (r[2] = 2);
                    for (var n = 3, a = 3; a < t; ++a)
                        (r[n++] = a - 1), (r[n++] = 0), (r[n++] = a);
                    return (e.indices = r), (e.primitiveType = S.TRIANGLES), e;
                }
                function D(e) {
                    var t = h.computeNumberOfVertices(e),
                        r = p.createTypedArray(t, 3 * (t - 2));
                    (r[0] = 0),
                        (r[1] = 1),
                        (r[2] = 2),
                        t > 3 && ((r[3] = 0), (r[4] = 2), (r[5] = 3));
                    for (var n = 6, a = 3; a < t - 1; a += 2)
                        (r[n++] = a),
                            (r[n++] = a - 1),
                            (r[n++] = a + 1),
                            a + 2 < t &&
                                ((r[n++] = a),
                                (r[n++] = a + 1),
                                (r[n++] = a + 2));
                    return (e.indices = r), (e.primitiveType = S.TRIANGLES), e;
                }
                function B(e) {
                    if (c(e.indices)) return e;
                    for (
                        var t = h.computeNumberOfVertices(e),
                            r = p.createTypedArray(t, t),
                            n = 0;
                        n < t;
                        ++n
                    )
                        r[n] = n;
                    return (e.indices = r), e;
                }
                function z(e) {
                    var t = h.computeNumberOfVertices(e),
                        r = p.createTypedArray(t, 2 * (t - 1));
                    (r[0] = 0), (r[1] = 1);
                    for (var n = 2, a = 2; a < t; ++a)
                        (r[n++] = a - 1), (r[n++] = a);
                    return (e.indices = r), (e.primitiveType = S.LINES), e;
                }
                function G(e) {
                    var t = h.computeNumberOfVertices(e),
                        r = p.createTypedArray(t, 2 * t);
                    (r[0] = 0), (r[1] = 1);
                    for (var n = 2, a = 2; a < t; ++a)
                        (r[n++] = a - 1), (r[n++] = a);
                    return (
                        (r[n++] = t - 1),
                        (r[n] = 0),
                        (e.indices = r),
                        (e.primitiveType = S.LINES),
                        e
                    );
                }
                function V(e) {
                    switch (e.primitiveType) {
                        case S.TRIANGLE_FAN:
                            return F(e);
                        case S.TRIANGLE_STRIP:
                            return D(e);
                        case S.TRIANGLES:
                            return b(e);
                        case S.LINE_STRIP:
                            return z(e);
                        case S.LINE_LOOP:
                            return G(e);
                        case S.LINES:
                            return B(e);
                    }
                    return e;
                }
                function q(e, t) {
                    Math.abs(e.y) < y.EPSILON6 &&
                        (e.y = t ? -y.EPSILON6 : y.EPSILON6);
                }
                function X(e, t, r) {
                    if (0 !== e.y && 0 !== t.y && 0 !== r.y)
                        return q(e, e.y < 0), q(t, t.y < 0), void q(r, r.y < 0);
                    var n,
                        a = Math.abs(e.y),
                        i = Math.abs(t.y),
                        o = Math.abs(r.y);
                    n =
                        a > i
                            ? a > o
                                ? y.sign(e.y)
                                : y.sign(r.y)
                            : i > o
                              ? y.sign(t.y)
                              : y.sign(r.y);
                    var u = n < 0;
                    q(e, u), q(t, u), q(r, u);
                }
                function H(e, t, r, n) {
                    a.add(
                        e,
                        a.multiplyByScalar(
                            a.subtract(t, e, Ae),
                            e.y / (e.y - t.y),
                            Ae,
                        ),
                        r,
                    ),
                        a.clone(r, n),
                        q(r, !0),
                        q(n, !1);
                }
                function W(e, t, r) {
                    if (!(e.x >= 0 || t.x >= 0 || r.x >= 0)) {
                        X(e, t, r);
                        var n = e.y < 0,
                            a = t.y < 0,
                            i = r.y < 0,
                            o = 0;
                        (o += n ? 1 : 0), (o += a ? 1 : 0), (o += i ? 1 : 0);
                        var u = Me.indices;
                        1 === o
                            ? ((u[1] = 3),
                              (u[2] = 4),
                              (u[5] = 6),
                              (u[7] = 6),
                              (u[8] = 5),
                              n
                                  ? (H(e, t, ve, Ne),
                                    H(e, r, Se, Ie),
                                    (u[0] = 0),
                                    (u[3] = 1),
                                    (u[4] = 2),
                                    (u[6] = 1))
                                  : a
                                    ? (H(t, r, ve, Ne),
                                      H(t, e, Se, Ie),
                                      (u[0] = 1),
                                      (u[3] = 2),
                                      (u[4] = 0),
                                      (u[6] = 2))
                                    : i &&
                                      (H(r, e, ve, Ne),
                                      H(r, t, Se, Ie),
                                      (u[0] = 2),
                                      (u[3] = 0),
                                      (u[4] = 1),
                                      (u[6] = 0)))
                            : 2 === o &&
                              ((u[2] = 4),
                              (u[4] = 4),
                              (u[5] = 3),
                              (u[7] = 5),
                              (u[8] = 6),
                              n
                                  ? a
                                      ? i ||
                                        (H(r, e, ve, Ne),
                                        H(r, t, Se, Ie),
                                        (u[0] = 0),
                                        (u[1] = 1),
                                        (u[3] = 0),
                                        (u[6] = 2))
                                      : (H(t, r, ve, Ne),
                                        H(t, e, Se, Ie),
                                        (u[0] = 2),
                                        (u[1] = 0),
                                        (u[3] = 2),
                                        (u[6] = 1))
                                  : (H(e, t, ve, Ne),
                                    H(e, r, Se, Ie),
                                    (u[0] = 1),
                                    (u[1] = 2),
                                    (u[3] = 1),
                                    (u[6] = 0)));
                        var s = Me.positions;
                        return (
                            (s[0] = e),
                            (s[1] = t),
                            (s[2] = r),
                            (s.length = 3),
                            (1 !== o && 2 !== o) ||
                                ((s[3] = ve),
                                (s[4] = Se),
                                (s[5] = Ne),
                                (s[6] = Ie),
                                (s.length = 7)),
                            Me
                        );
                    }
                }
                function k(e, t) {
                    var n = e.attributes;
                    if (0 !== n.position.values.length) {
                        for (var a in n)
                            if (
                                n.hasOwnProperty(a) &&
                                c(n[a]) &&
                                c(n[a].values)
                            ) {
                                var i = n[a];
                                i.values = u.createTypedArray(
                                    i.componentDatatype,
                                    i.values,
                                );
                            }
                        var o = h.computeNumberOfVertices(e);
                        return (
                            (e.indices = p.createTypedArray(o, e.indices)),
                            t &&
                                (e.boundingSphere = r.fromVertices(
                                    n.position.values,
                                )),
                            e
                        );
                    }
                }
                function Y(e) {
                    var t = e.attributes,
                        r = {};
                    for (var n in t)
                        if (t.hasOwnProperty(n) && c(t[n]) && c(t[n].values)) {
                            var a = t[n];
                            r[n] = new d({
                                componentDatatype: a.componentDatatype,
                                componentsPerAttribute:
                                    a.componentsPerAttribute,
                                normalize: a.normalize,
                                values: [],
                            });
                        }
                    return new h({
                        attributes: r,
                        indices: [],
                        primitiveType: e.primitiveType,
                    });
                }
                function Z(e, t, r) {
                    var n = c(e.geometry.boundingSphere);
                    (t = k(t, n)),
                        (r = k(r, n)),
                        c(r) && !c(t)
                            ? (e.geometry = r)
                            : !c(r) && c(t)
                              ? (e.geometry = t)
                              : ((e.westHemisphereGeometry = t),
                                (e.eastHemisphereGeometry = r),
                                (e.geometry = void 0));
                }
                function K(e, r, i, o, u, s, l, E, f, h, d, _) {
                    if (c(s) || c(l) || c(E) || c(f) || c(h)) {
                        var p = a.fromArray(u, 3 * e, Oe),
                            m = a.fromArray(u, 3 * r, ge),
                            T = a.fromArray(u, 3 * i, Ce),
                            y = t(o, p, m, T, we);
                        if (c(s)) {
                            var R = a.fromArray(s, 3 * e, Oe),
                                A = a.fromArray(s, 3 * r, ge),
                                v = a.fromArray(s, 3 * i, Ce);
                            a.multiplyByScalar(R, y.x, R),
                                a.multiplyByScalar(A, y.y, A),
                                a.multiplyByScalar(v, y.z, v);
                            var S = a.add(R, A, R);
                            a.add(S, v, S),
                                a.normalize(S, S),
                                a.pack(S, d.normal.values, 3 * _);
                        }
                        if (c(h)) {
                            var N = a.fromArray(h, 3 * e, Oe),
                                I = a.fromArray(h, 3 * r, ge),
                                M = a.fromArray(h, 3 * i, Ce);
                            a.multiplyByScalar(N, y.x, N),
                                a.multiplyByScalar(I, y.y, I),
                                a.multiplyByScalar(M, y.z, M);
                            var O;
                            a.equals(N, a.ZERO) &&
                            a.equals(I, a.ZERO) &&
                            a.equals(M, a.ZERO)
                                ? ((O = Oe), (O.x = 0), (O.y = 0), (O.z = 0))
                                : ((O = a.add(N, I, N)),
                                  a.add(O, M, O),
                                  a.normalize(O, O)),
                                a.pack(O, d.extrudeDirection.values, 3 * _);
                        }
                        if (c(l)) {
                            var g = a.fromArray(l, 3 * e, Oe),
                                C = a.fromArray(l, 3 * r, ge),
                                w = a.fromArray(l, 3 * i, Ce);
                            a.multiplyByScalar(g, y.x, g),
                                a.multiplyByScalar(C, y.y, C),
                                a.multiplyByScalar(w, y.z, w);
                            var P = a.add(g, C, g);
                            a.add(P, w, P),
                                a.normalize(P, P),
                                a.pack(P, d.tangent.values, 3 * _);
                        }
                        if (c(E)) {
                            var x = a.fromArray(E, 3 * e, Oe),
                                L = a.fromArray(E, 3 * r, ge),
                                U = a.fromArray(E, 3 * i, Ce);
                            a.multiplyByScalar(x, y.x, x),
                                a.multiplyByScalar(L, y.y, L),
                                a.multiplyByScalar(U, y.z, U);
                            var b = a.add(x, L, x);
                            a.add(b, U, b),
                                a.normalize(b, b),
                                a.pack(b, d.bitangent.values, 3 * _);
                        }
                        if (c(f)) {
                            var F = n.fromArray(f, 2 * e, Pe),
                                D = n.fromArray(f, 2 * r, xe),
                                B = n.fromArray(f, 2 * i, Le);
                            n.multiplyByScalar(F, y.x, F),
                                n.multiplyByScalar(D, y.y, D),
                                n.multiplyByScalar(B, y.z, B);
                            var z = n.add(F, D, F);
                            n.add(z, B, z), n.pack(z, d.st.values, 2 * _);
                        }
                    }
                }
                function j(e, t, r, n, a, i) {
                    var o = e.position.values.length / 3;
                    if (-1 !== a) {
                        var u = n[a],
                            s = r[u];
                        return -1 === s
                            ? ((r[u] = o),
                              e.position.values.push(i.x, i.y, i.z),
                              t.push(o),
                              o)
                            : (t.push(s), s);
                    }
                    return e.position.values.push(i.x, i.y, i.z), t.push(o), o;
                }
                function Q(e) {
                    var t,
                        r,
                        n,
                        i,
                        o,
                        u = e.geometry,
                        s = u.attributes,
                        l = s.position.values,
                        E = c(s.normal) ? s.normal.values : void 0,
                        f = c(s.bitangent) ? s.bitangent.values : void 0,
                        h = c(s.tangent) ? s.tangent.values : void 0,
                        d = c(s.st) ? s.st.values : void 0,
                        _ = c(s.extrudeDirection)
                            ? s.extrudeDirection.values
                            : void 0,
                        p = u.indices,
                        m = Y(u),
                        T = Y(u),
                        y = [];
                    y.length = l.length / 3;
                    var R = [];
                    for (R.length = l.length / 3, o = 0; o < y.length; ++o)
                        (y[o] = -1), (R[o] = -1);
                    var A = p.length;
                    for (o = 0; o < A; o += 3) {
                        var v = p[o],
                            S = p[o + 1],
                            N = p[o + 2],
                            I = a.fromArray(l, 3 * v),
                            M = a.fromArray(l, 3 * S),
                            O = a.fromArray(l, 3 * N),
                            g = W(I, M, O);
                        if (c(g) && g.positions.length > 3)
                            for (
                                var C = g.positions,
                                    w = g.indices,
                                    P = w.length,
                                    x = 0;
                                x < P;
                                ++x
                            ) {
                                var L = w[x],
                                    U = C[L];
                                U.y < 0
                                    ? ((t = T.attributes),
                                      (r = T.indices),
                                      (n = y))
                                    : ((t = m.attributes),
                                      (r = m.indices),
                                      (n = R)),
                                    (i = j(t, r, n, p, L < 3 ? o + L : -1, U)),
                                    K(v, S, N, U, l, E, h, f, d, _, t, i);
                            }
                        else
                            c(g) &&
                                ((I = g.positions[0]),
                                (M = g.positions[1]),
                                (O = g.positions[2])),
                                I.y < 0
                                    ? ((t = T.attributes),
                                      (r = T.indices),
                                      (n = y))
                                    : ((t = m.attributes),
                                      (r = m.indices),
                                      (n = R)),
                                (i = j(t, r, n, p, o, I)),
                                K(v, S, N, I, l, E, h, f, d, _, t, i),
                                (i = j(t, r, n, p, o + 1, M)),
                                K(v, S, N, M, l, E, h, f, d, _, t, i),
                                (i = j(t, r, n, p, o + 2, O)),
                                K(v, S, N, O, l, E, h, f, d, _, t, i);
                    }
                    Z(e, T, m);
                }
                function J(e) {
                    var t,
                        r = e.geometry,
                        n = r.attributes,
                        i = n.position.values,
                        o = r.indices,
                        u = Y(r),
                        s = Y(r),
                        l = o.length,
                        E = [];
                    E.length = i.length / 3;
                    var f = [];
                    for (f.length = i.length / 3, t = 0; t < E.length; ++t)
                        (E[t] = -1), (f[t] = -1);
                    for (t = 0; t < l; t += 2) {
                        var h = o[t],
                            d = o[t + 1],
                            _ = a.fromArray(i, 3 * h, Oe),
                            p = a.fromArray(i, 3 * d, ge);
                        Math.abs(_.y) < y.EPSILON6 &&
                            (_.y < 0
                                ? (_.y = -y.EPSILON6)
                                : (_.y = y.EPSILON6)),
                            Math.abs(p.y) < y.EPSILON6 &&
                                (p.y < 0
                                    ? (p.y = -y.EPSILON6)
                                    : (p.y = y.EPSILON6));
                        var m = u.attributes,
                            R = u.indices,
                            A = f,
                            v = s.attributes,
                            S = s.indices,
                            N = E,
                            I = T.lineSegmentPlane(_, p, Ue, Ce);
                        if (c(I)) {
                            var M = a.multiplyByScalar(
                                a.UNIT_Y,
                                5 * y.EPSILON9,
                                be,
                            );
                            _.y < 0 &&
                                (a.negate(M, M),
                                (m = s.attributes),
                                (R = s.indices),
                                (A = E),
                                (v = u.attributes),
                                (S = u.indices),
                                (N = f));
                            var O = a.add(I, M, Fe);
                            j(m, R, A, o, t, _),
                                j(m, R, A, o, -1, O),
                                a.negate(M, M),
                                a.add(I, M, O),
                                j(v, S, N, o, -1, O),
                                j(v, S, N, o, t + 1, p);
                        } else {
                            var g, C, w;
                            _.y < 0
                                ? ((g = s.attributes), (C = s.indices), (w = E))
                                : ((g = u.attributes),
                                  (C = u.indices),
                                  (w = f)),
                                j(g, C, w, o, t, _),
                                j(g, C, w, o, t + 1, p);
                        }
                    }
                    Z(e, s, u);
                }
                function $(e) {
                    for (
                        var t = e.attributes,
                            r = t.position.values,
                            n = t.prevPosition.values,
                            i = t.nextPosition.values,
                            o = r.length,
                            u = 0;
                        u < o;
                        u += 3
                    ) {
                        var s = a.unpack(r, u, ze);
                        if (!(s.x > 0)) {
                            var c = a.unpack(n, u, Ge);
                            ((s.y < 0 && c.y > 0) || (s.y > 0 && c.y < 0)) &&
                                (u - 3 > 0
                                    ? ((n[u] = r[u - 3]),
                                      (n[u + 1] = r[u - 2]),
                                      (n[u + 2] = r[u - 1]))
                                    : a.pack(s, n, u));
                            var l = a.unpack(i, u, Ve);
                            ((s.y < 0 && l.y > 0) || (s.y > 0 && l.y < 0)) &&
                                (u + 3 < o
                                    ? ((i[u] = r[u + 3]),
                                      (i[u + 1] = r[u + 4]),
                                      (i[u + 2] = r[u + 5]))
                                    : a.pack(s, i, u));
                        }
                    }
                }
                function ee(e) {
                    var t,
                        r,
                        o,
                        u = e.geometry,
                        s = u.attributes,
                        l = s.position.values,
                        E = s.prevPosition.values,
                        f = s.nextPosition.values,
                        h = s.expandAndWidth.values,
                        d = c(s.st) ? s.st.values : void 0,
                        _ = c(s.color) ? s.color.values : void 0,
                        p = Y(u),
                        m = Y(u),
                        R = !1,
                        A = l.length / 3;
                    for (t = 0; t < A; t += 4) {
                        var v = t,
                            S = t + 2,
                            N = a.fromArray(l, 3 * v, ze),
                            I = a.fromArray(l, 3 * S, Ge);
                        if (Math.abs(N.y) < Ye)
                            for (
                                N.y = Ye * (I.y < 0 ? -1 : 1),
                                    l[3 * t + 1] = N.y,
                                    l[3 * (t + 1) + 1] = N.y,
                                    r = 3 * v;
                                r < 3 * v + 12;
                                r += 3
                            )
                                (E[r] = l[3 * t]),
                                    (E[r + 1] = l[3 * t + 1]),
                                    (E[r + 2] = l[3 * t + 2]);
                        if (Math.abs(I.y) < Ye)
                            for (
                                I.y = Ye * (N.y < 0 ? -1 : 1),
                                    l[3 * (t + 2) + 1] = I.y,
                                    l[3 * (t + 3) + 1] = I.y,
                                    r = 3 * v;
                                r < 3 * v + 12;
                                r += 3
                            )
                                (f[r] = l[3 * (t + 2)]),
                                    (f[r + 1] = l[3 * (t + 2) + 1]),
                                    (f[r + 2] = l[3 * (t + 2) + 2]);
                        var M = p.attributes,
                            O = p.indices,
                            g = m.attributes,
                            C = m.indices,
                            w = T.lineSegmentPlane(N, I, Ue, qe);
                        if (c(w)) {
                            R = !0;
                            var P = a.multiplyByScalar(a.UNIT_Y, ke, Xe);
                            N.y < 0 &&
                                (a.negate(P, P),
                                (M = m.attributes),
                                (O = m.indices),
                                (g = p.attributes),
                                (C = p.indices));
                            var x = a.add(w, P, He);
                            M.position.values.push(
                                N.x,
                                N.y,
                                N.z,
                                N.x,
                                N.y,
                                N.z,
                            ),
                                M.position.values.push(x.x, x.y, x.z),
                                M.position.values.push(x.x, x.y, x.z),
                                M.prevPosition.values.push(
                                    E[3 * v],
                                    E[3 * v + 1],
                                    E[3 * v + 2],
                                ),
                                M.prevPosition.values.push(
                                    E[3 * v + 3],
                                    E[3 * v + 4],
                                    E[3 * v + 5],
                                ),
                                M.prevPosition.values.push(
                                    N.x,
                                    N.y,
                                    N.z,
                                    N.x,
                                    N.y,
                                    N.z,
                                ),
                                M.nextPosition.values.push(x.x, x.y, x.z),
                                M.nextPosition.values.push(x.x, x.y, x.z),
                                M.nextPosition.values.push(x.x, x.y, x.z),
                                M.nextPosition.values.push(x.x, x.y, x.z),
                                a.negate(P, P),
                                a.add(w, P, x),
                                g.position.values.push(x.x, x.y, x.z),
                                g.position.values.push(x.x, x.y, x.z),
                                g.position.values.push(
                                    I.x,
                                    I.y,
                                    I.z,
                                    I.x,
                                    I.y,
                                    I.z,
                                ),
                                g.prevPosition.values.push(x.x, x.y, x.z),
                                g.prevPosition.values.push(x.x, x.y, x.z),
                                g.prevPosition.values.push(x.x, x.y, x.z),
                                g.prevPosition.values.push(x.x, x.y, x.z),
                                g.nextPosition.values.push(
                                    I.x,
                                    I.y,
                                    I.z,
                                    I.x,
                                    I.y,
                                    I.z,
                                ),
                                g.nextPosition.values.push(
                                    f[3 * S],
                                    f[3 * S + 1],
                                    f[3 * S + 2],
                                ),
                                g.nextPosition.values.push(
                                    f[3 * S + 3],
                                    f[3 * S + 4],
                                    f[3 * S + 5],
                                );
                            var L = n.fromArray(h, 2 * v, De),
                                U = Math.abs(L.y);
                            M.expandAndWidth.values.push(-1, U, 1, U),
                                M.expandAndWidth.values.push(-1, -U, 1, -U),
                                g.expandAndWidth.values.push(-1, U, 1, U),
                                g.expandAndWidth.values.push(-1, -U, 1, -U);
                            var b = a.magnitudeSquared(a.subtract(w, N, Ve));
                            if (
                                ((b /= a.magnitudeSquared(
                                    a.subtract(I, N, Ve),
                                )),
                                c(_))
                            ) {
                                var F = i.fromArray(_, 4 * v, We),
                                    D = i.fromArray(_, 4 * S, We),
                                    B = y.lerp(F.x, D.x, b),
                                    z = y.lerp(F.y, D.y, b),
                                    G = y.lerp(F.z, D.z, b),
                                    V = y.lerp(F.w, D.w, b);
                                for (r = 4 * v; r < 4 * v + 8; ++r)
                                    M.color.values.push(_[r]);
                                for (
                                    M.color.values.push(B, z, G, V),
                                        M.color.values.push(B, z, G, V),
                                        g.color.values.push(B, z, G, V),
                                        g.color.values.push(B, z, G, V),
                                        r = 4 * S;
                                    r < 4 * S + 8;
                                    ++r
                                )
                                    g.color.values.push(_[r]);
                            }
                            if (c(d)) {
                                var q = n.fromArray(d, 2 * v, De),
                                    X = n.fromArray(d, 2 * (t + 3), Be),
                                    H = y.lerp(q.x, X.x, b);
                                for (r = 2 * v; r < 2 * v + 4; ++r)
                                    M.st.values.push(d[r]);
                                for (
                                    M.st.values.push(H, q.y),
                                        M.st.values.push(H, X.y),
                                        g.st.values.push(H, q.y),
                                        g.st.values.push(H, X.y),
                                        r = 2 * S;
                                    r < 2 * S + 4;
                                    ++r
                                )
                                    g.st.values.push(d[r]);
                            }
                            (o = M.position.values.length / 3 - 4),
                                O.push(o, o + 2, o + 1),
                                O.push(o + 1, o + 2, o + 3),
                                (o = g.position.values.length / 3 - 4),
                                C.push(o, o + 2, o + 1),
                                C.push(o + 1, o + 2, o + 3);
                        } else {
                            var W, k;
                            for (
                                N.y < 0
                                    ? ((W = m.attributes), (k = m.indices))
                                    : ((W = p.attributes), (k = p.indices)),
                                    W.position.values.push(N.x, N.y, N.z),
                                    W.position.values.push(N.x, N.y, N.z),
                                    W.position.values.push(I.x, I.y, I.z),
                                    W.position.values.push(I.x, I.y, I.z),
                                    r = 3 * t;
                                r < 3 * t + 12;
                                ++r
                            )
                                W.prevPosition.values.push(E[r]),
                                    W.nextPosition.values.push(f[r]);
                            for (r = 2 * t; r < 2 * t + 8; ++r)
                                W.expandAndWidth.values.push(h[r]),
                                    c(d) && W.st.values.push(d[r]);
                            if (c(_))
                                for (r = 4 * t; r < 4 * t + 16; ++r)
                                    W.color.values.push(_[r]);
                            (o = W.position.values.length / 3 - 4),
                                k.push(o, o + 2, o + 1),
                                k.push(o + 1, o + 2, o + 3);
                        }
                    }
                    R && ($(m), $(p)), Z(e, m, p);
                }
                var te = {};
                (te.toWireframe = function (e) {
                    var t = e.indices;
                    if (c(t)) {
                        switch (e.primitiveType) {
                            case S.TRIANGLES:
                                e.indices = M(t);
                                break;
                            case S.TRIANGLE_STRIP:
                                e.indices = O(t);
                                break;
                            case S.TRIANGLE_FAN:
                                e.indices = g(t);
                        }
                        e.primitiveType = S.LINES;
                    }
                    return e;
                }),
                    (te.createLineSegmentsForVectors = function (e, t, n) {
                        (t = s(t, 'normal')), (n = s(n, 1e4));
                        for (
                            var a = e.attributes.position.values,
                                i = e.attributes[t].values,
                                o = a.length,
                                l = new Float64Array(2 * o),
                                E = 0,
                                f = 0;
                            f < o;
                            f += 3
                        )
                            (l[E++] = a[f]),
                                (l[E++] = a[f + 1]),
                                (l[E++] = a[f + 2]),
                                (l[E++] = a[f] + i[f] * n),
                                (l[E++] = a[f + 1] + i[f + 1] * n),
                                (l[E++] = a[f + 2] + i[f + 2] * n);
                        var _,
                            p = e.boundingSphere;
                        return (
                            c(p) && (_ = new r(p.center, p.radius + n)),
                            new h({
                                attributes: {
                                    position: new d({
                                        componentDatatype: u.DOUBLE,
                                        componentsPerAttribute: 3,
                                        values: l,
                                    }),
                                },
                                primitiveType: S.LINES,
                                boundingSphere: _,
                            })
                        );
                    }),
                    (te.createAttributeLocations = function (e) {
                        var t,
                            r = [
                                'position',
                                'positionHigh',
                                'positionLow',
                                'position3DHigh',
                                'position3DLow',
                                'position2DHigh',
                                'position2DLow',
                                'pickColor',
                                'normal',
                                'st',
                                'tangent',
                                'bitangent',
                                'extrudeDirection',
                                'compressedAttributes',
                            ],
                            n = e.attributes,
                            a = {},
                            i = 0,
                            o = r.length;
                        for (t = 0; t < o; ++t) {
                            var u = r[t];
                            c(n[u]) && (a[u] = i++);
                        }
                        for (var s in n)
                            n.hasOwnProperty(s) && !c(a[s]) && (a[s] = i++);
                        return a;
                    }),
                    (te.reorderForPreVertexCache = function (e) {
                        var t = h.computeNumberOfVertices(e),
                            r = e.indices;
                        if (c(r)) {
                            for (var n = new Int32Array(t), a = 0; a < t; a++)
                                n[a] = -1;
                            for (
                                var i,
                                    o = r,
                                    s = o.length,
                                    l = p.createTypedArray(t, s),
                                    E = 0,
                                    f = 0,
                                    d = 0;
                                E < s;

                            )
                                (i = n[o[E]]),
                                    -1 !== i
                                        ? (l[f] = i)
                                        : ((i = o[E]),
                                          (n[i] = d),
                                          (l[f] = d),
                                          ++d),
                                    ++E,
                                    ++f;
                            e.indices = l;
                            var _ = e.attributes;
                            for (var m in _)
                                if (
                                    _.hasOwnProperty(m) &&
                                    c(_[m]) &&
                                    c(_[m].values)
                                ) {
                                    for (
                                        var T = _[m],
                                            y = T.values,
                                            R = 0,
                                            A = T.componentsPerAttribute,
                                            v = u.createTypedArray(
                                                T.componentDatatype,
                                                d * A,
                                            );
                                        R < t;

                                    ) {
                                        var S = n[R];
                                        if (-1 !== S)
                                            for (var N = 0; N < A; N++)
                                                v[A * S + N] = y[A * R + N];
                                        ++R;
                                    }
                                    T.values = v;
                                }
                        }
                        return e;
                    }),
                    (te.reorderForPostVertexCache = function (e, t) {
                        var r = e.indices;
                        if (e.primitiveType === S.TRIANGLES && c(r)) {
                            for (var n = r.length, a = 0, i = 0; i < n; i++)
                                r[i] > a && (a = r[i]);
                            e.indices = N.tipsify({
                                indices: r,
                                maximumIndex: a,
                                cacheSize: t,
                            });
                        }
                        return e;
                    }),
                    (te.fitToUnsignedShortIndices = function (e) {
                        var t = [],
                            r = h.computeNumberOfVertices(e);
                        if (c(e.indices) && r >= y.SIXTY_FOUR_KILOBYTES) {
                            var n,
                                a = [],
                                i = [],
                                o = 0,
                                u = C(e.attributes),
                                s = e.indices,
                                l = s.length;
                            e.primitiveType === S.TRIANGLES
                                ? (n = 3)
                                : e.primitiveType === S.LINES
                                  ? (n = 2)
                                  : e.primitiveType === S.POINTS && (n = 1);
                            for (var E = 0; E < l; E += n) {
                                for (var f = 0; f < n; ++f) {
                                    var d = s[E + f],
                                        _ = a[d];
                                    c(_) ||
                                        ((_ = o++),
                                        (a[d] = _),
                                        w(u, e.attributes, d)),
                                        i.push(_);
                                }
                                o + n >= y.SIXTY_FOUR_KILOBYTES &&
                                    (t.push(
                                        new h({
                                            attributes: u,
                                            indices: i,
                                            primitiveType: e.primitiveType,
                                            boundingSphere: e.boundingSphere,
                                            boundingSphereCV:
                                                e.boundingSphereCV,
                                        }),
                                    ),
                                    (a = []),
                                    (i = []),
                                    (o = 0),
                                    (u = C(e.attributes)));
                            }
                            0 !== i.length &&
                                t.push(
                                    new h({
                                        attributes: u,
                                        indices: i,
                                        primitiveType: e.primitiveType,
                                        boundingSphere: e.boundingSphere,
                                        boundingSphereCV: e.boundingSphereCV,
                                    }),
                                );
                        } else t.push(e);
                        return t;
                    });
                var re = new a(),
                    ne = new o();
                te.projectTo2D = function (e, t, r, n, i) {
                    var o = e.attributes[t];
                    i = c(i) ? i : new f();
                    for (
                        var s = i.ellipsoid,
                            l = o.values,
                            E = new Float64Array(l.length),
                            h = 0,
                            _ = 0;
                        _ < l.length;
                        _ += 3
                    ) {
                        var p = a.fromArray(l, _, re),
                            m = s.cartesianToCartographic(p, ne),
                            T = i.project(m, re);
                        (E[h++] = T.x), (E[h++] = T.y), (E[h++] = T.z);
                    }
                    return (
                        (e.attributes[r] = o),
                        (e.attributes[n] = new d({
                            componentDatatype: u.DOUBLE,
                            componentsPerAttribute: 3,
                            values: E,
                        })),
                        delete e.attributes[t],
                        e
                    );
                };
                var ae = { high: 0, low: 0 };
                te.encodeAttribute = function (e, t, r, n) {
                    for (
                        var a = e.attributes[t],
                            i = a.values,
                            o = i.length,
                            s = new Float32Array(o),
                            c = new Float32Array(o),
                            l = 0;
                        l < o;
                        ++l
                    )
                        E.encode(i[l], ae), (s[l] = ae.high), (c[l] = ae.low);
                    var f = a.componentsPerAttribute;
                    return (
                        (e.attributes[r] = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: f,
                            values: s,
                        })),
                        (e.attributes[n] = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: f,
                            values: c,
                        })),
                        delete e.attributes[t],
                        e
                    );
                };
                var ie = new a(),
                    oe = new A(),
                    ue = new R();
                te.transformToWorldCoordinates = function (e) {
                    var t = e.modelMatrix;
                    if (A.equals(t, A.IDENTITY)) return e;
                    var n = e.geometry.attributes;
                    P(t, n.position),
                        P(t, n.prevPosition),
                        P(t, n.nextPosition),
                        (c(n.normal) || c(n.tangent) || c(n.bitangent)) &&
                            (A.inverse(t, oe),
                            A.transpose(oe, oe),
                            A.getRotation(oe, ue),
                            x(ue, n.normal),
                            x(ue, n.tangent),
                            x(ue, n.bitangent));
                    var a = e.geometry.boundingSphere;
                    return (
                        c(a) &&
                            (e.geometry.boundingSphere = r.transform(a, t, a)),
                        (e.modelMatrix = A.clone(A.IDENTITY)),
                        e
                    );
                };
                var se = new a();
                te.combineInstances = function (e) {
                    for (var t = [], r = [], n = e.length, a = 0; a < n; ++a) {
                        var i = e[a];
                        c(i.geometry)
                            ? t.push(i)
                            : c(i.westHemisphereGeometry) &&
                              c(i.eastHemisphereGeometry) &&
                              r.push(i);
                    }
                    var o = [];
                    return (
                        t.length > 0 && o.push(U(t, 'geometry')),
                        r.length > 0 &&
                            (o.push(U(r, 'westHemisphereGeometry')),
                            o.push(U(r, 'eastHemisphereGeometry'))),
                        o
                    );
                };
                var ce = new a(),
                    le = new a(),
                    Ee = new a(),
                    fe = new a();
                te.computeNormal = function (e) {
                    var t,
                        r = e.indices,
                        n = e.attributes,
                        i = n.position.values,
                        o = n.position.values.length / 3,
                        s = r.length,
                        c = new Array(o),
                        l = new Array(s / 3),
                        E = new Array(s);
                    for (t = 0; t < o; t++)
                        c[t] = { indexOffset: 0, count: 0, currentCount: 0 };
                    var f = 0;
                    for (t = 0; t < s; t += 3) {
                        var h = r[t],
                            _ = r[t + 1],
                            p = r[t + 2],
                            m = 3 * h,
                            T = 3 * _,
                            R = 3 * p;
                        (le.x = i[m]),
                            (le.y = i[m + 1]),
                            (le.z = i[m + 2]),
                            (Ee.x = i[T]),
                            (Ee.y = i[T + 1]),
                            (Ee.z = i[T + 2]),
                            (fe.x = i[R]),
                            (fe.y = i[R + 1]),
                            (fe.z = i[R + 2]),
                            c[h].count++,
                            c[_].count++,
                            c[p].count++,
                            a.subtract(Ee, le, Ee),
                            a.subtract(fe, le, fe),
                            (l[f] = a.cross(Ee, fe, new a())),
                            f++;
                    }
                    var A = 0;
                    for (t = 0; t < o; t++)
                        (c[t].indexOffset += A), (A += c[t].count);
                    f = 0;
                    var v;
                    for (t = 0; t < s; t += 3) {
                        v = c[r[t]];
                        var S = v.indexOffset + v.currentCount;
                        (E[S] = f),
                            v.currentCount++,
                            (v = c[r[t + 1]]),
                            (S = v.indexOffset + v.currentCount),
                            (E[S] = f),
                            v.currentCount++,
                            (v = c[r[t + 2]]),
                            (S = v.indexOffset + v.currentCount),
                            (E[S] = f),
                            v.currentCount++,
                            f++;
                    }
                    var N = new Float32Array(3 * o);
                    for (t = 0; t < o; t++) {
                        var I = 3 * t;
                        if (((v = c[t]), a.clone(a.ZERO, ce), v.count > 0)) {
                            for (f = 0; f < v.count; f++)
                                a.add(ce, l[E[v.indexOffset + f]], ce);
                            a.equalsEpsilon(a.ZERO, ce, y.EPSILON10) &&
                                a.clone(l[E[v.indexOffset]], ce);
                        }
                        a.equalsEpsilon(a.ZERO, ce, y.EPSILON10) && (ce.z = 1),
                            a.normalize(ce, ce),
                            (N[I] = ce.x),
                            (N[I + 1] = ce.y),
                            (N[I + 2] = ce.z);
                    }
                    return (
                        (e.attributes.normal = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: N,
                        })),
                        e
                    );
                };
                var he = new a(),
                    de = new a(),
                    _e = new a();
                te.computeTangentAndBitangent = function (e) {
                    var t,
                        r = (e.attributes, e.indices),
                        n = e.attributes.position.values,
                        i = e.attributes.normal.values,
                        o = e.attributes.st.values,
                        s = e.attributes.position.values.length / 3,
                        c = r.length,
                        l = new Array(3 * s);
                    for (t = 0; t < l.length; t++) l[t] = 0;
                    var E, f, h;
                    for (t = 0; t < c; t += 3) {
                        var _ = r[t],
                            p = r[t + 1],
                            m = r[t + 2];
                        (E = 3 * _), (f = 3 * p), (h = 3 * m);
                        var T = 2 * _,
                            y = 2 * p,
                            R = 2 * m,
                            A = n[E],
                            v = n[E + 1],
                            S = n[E + 2],
                            N = o[T],
                            I = o[T + 1],
                            M = o[y + 1] - I,
                            O = o[R + 1] - I,
                            g = 1 / ((o[y] - N) * O - (o[R] - N) * M),
                            C = (O * (n[f] - A) - M * (n[h] - A)) * g,
                            w = (O * (n[f + 1] - v) - M * (n[h + 1] - v)) * g,
                            P = (O * (n[f + 2] - S) - M * (n[h + 2] - S)) * g;
                        (l[E] += C),
                            (l[E + 1] += w),
                            (l[E + 2] += P),
                            (l[f] += C),
                            (l[f + 1] += w),
                            (l[f + 2] += P),
                            (l[h] += C),
                            (l[h + 1] += w),
                            (l[h + 2] += P);
                    }
                    var x = new Float32Array(3 * s),
                        L = new Float32Array(3 * s);
                    for (t = 0; t < s; t++) {
                        (E = 3 * t), (f = E + 1), (h = E + 2);
                        var U = a.fromArray(i, E, he),
                            b = a.fromArray(l, E, _e),
                            F = a.dot(U, b);
                        a.multiplyByScalar(U, F, de),
                            a.normalize(a.subtract(b, de, b), b),
                            (x[E] = b.x),
                            (x[f] = b.y),
                            (x[h] = b.z),
                            a.normalize(a.cross(U, b, b), b),
                            (L[E] = b.x),
                            (L[f] = b.y),
                            (L[h] = b.z);
                    }
                    return (
                        (e.attributes.tangent = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: x,
                        })),
                        (e.attributes.bitangent = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: L,
                        })),
                        e
                    );
                };
                var pe = new n(),
                    me = new a(),
                    Te = new a(),
                    ye = new a(),
                    Re = new n();
                te.compressVertices = function (t) {
                    var r,
                        i,
                        o = t.attributes.extrudeDirection;
                    if (c(o)) {
                        var s = o.values;
                        i = s.length / 3;
                        var l = new Float32Array(2 * i),
                            E = 0;
                        for (r = 0; r < i; ++r)
                            a.fromArray(s, 3 * r, me),
                                a.equals(me, a.ZERO)
                                    ? (E += 2)
                                    : ((Re = e.octEncodeInRange(me, 65535, Re)),
                                      (l[E++] = Re.x),
                                      (l[E++] = Re.y));
                        return (
                            (t.attributes.compressedAttributes = new d({
                                componentDatatype: u.FLOAT,
                                componentsPerAttribute: 2,
                                values: l,
                            })),
                            delete t.attributes.extrudeDirection,
                            t
                        );
                    }
                    var f = t.attributes.normal,
                        h = t.attributes.st,
                        _ = c(f),
                        p = c(h);
                    if (!_ && !p) return t;
                    var m,
                        T,
                        y,
                        R,
                        A = t.attributes.tangent,
                        v = t.attributes.bitangent,
                        S = c(A),
                        N = c(v);
                    _ && (m = f.values),
                        p && (T = h.values),
                        S && (y = A.values),
                        N && (R = v.values),
                        (i = (_ ? m.length : T.length) / (_ ? 3 : 2));
                    var I = i,
                        M = p && _ ? 2 : 1;
                    (M += S || N ? 1 : 0), (I *= M);
                    var O = new Float32Array(I),
                        g = 0;
                    for (r = 0; r < i; ++r) {
                        p &&
                            (n.fromArray(T, 2 * r, pe),
                            (O[g++] = e.compressTextureCoordinates(pe)));
                        var C = 3 * r;
                        _ && c(y) && c(R)
                            ? (a.fromArray(m, C, me),
                              a.fromArray(y, C, Te),
                              a.fromArray(R, C, ye),
                              e.octPack(me, Te, ye, pe),
                              (O[g++] = pe.x),
                              (O[g++] = pe.y))
                            : (_ &&
                                  (a.fromArray(m, C, me),
                                  (O[g++] = e.octEncodeFloat(me))),
                              S &&
                                  (a.fromArray(y, C, me),
                                  (O[g++] = e.octEncodeFloat(me))),
                              N &&
                                  (a.fromArray(R, C, me),
                                  (O[g++] = e.octEncodeFloat(me))));
                    }
                    return (
                        (t.attributes.compressedAttributes = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: M,
                            values: O,
                        })),
                        _ && delete t.attributes.normal,
                        p && delete t.attributes.st,
                        N && delete t.attributes.bitangent,
                        S && delete t.attributes.tangent,
                        t
                    );
                };
                var Ae = new a(),
                    ve = new a(),
                    Se = new a(),
                    Ne = new a(),
                    Ie = new a(),
                    Me = { positions: new Array(7), indices: new Array(9) },
                    Oe = new a(),
                    ge = new a(),
                    Ce = new a(),
                    we = new a(),
                    Pe = new n(),
                    xe = new n(),
                    Le = new n(),
                    Ue = v.fromPointNormal(a.ZERO, a.UNIT_Y),
                    be = new a(),
                    Fe = new a(),
                    De = new n(),
                    Be = new n(),
                    ze = new a(),
                    Ge = new a(),
                    Ve = new a(),
                    qe = new a(),
                    Xe = new a(),
                    He = new a(),
                    We = new i(),
                    ke = 5 * y.EPSILON9,
                    Ye = y.EPSILON6;
                return (
                    (te.splitLongitude = function (e) {
                        var t = e.geometry,
                            n = t.boundingSphere;
                        if (c(n)) {
                            if (
                                n.center.x - n.radius > 0 ||
                                r.intersectPlane(n, v.ORIGIN_ZX_PLANE) !==
                                    m.INTERSECTING
                            )
                                return e;
                        }
                        if (t.geometryType !== _.NONE)
                            switch (t.geometryType) {
                                case _.POLYLINES:
                                    ee(e);
                                    break;
                                case _.TRIANGLES:
                                    Q(e);
                                    break;
                                case _.LINES:
                                    J(e);
                            }
                        else
                            V(t),
                                t.primitiveType === S.TRIANGLES
                                    ? Q(e)
                                    : t.primitiveType === S.LINES && J(e);
                        return e;
                    }),
                    te
                );
            },
        ),
        define(
            'Core/WebMercatorProjection',
            [
                './Cartesian3',
                './Cartographic',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './Ellipsoid',
                './Math',
            ],
            function (e, t, r, n, a, i, o, u) {
                'use strict';
                function s(e) {
                    (this._ellipsoid = r(e, o.WGS84)),
                        (this._semimajorAxis = this._ellipsoid.maximumRadius),
                        (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
                }
                return (
                    a(s.prototype, {
                        ellipsoid: {
                            get: function () {
                                return this._ellipsoid;
                            },
                        },
                    }),
                    (s.mercatorAngleToGeodeticLatitude = function (e) {
                        return u.PI_OVER_TWO - 2 * Math.atan(Math.exp(-e));
                    }),
                    (s.geodeticLatitudeToMercatorAngle = function (e) {
                        e > s.MaximumLatitude
                            ? (e = s.MaximumLatitude)
                            : e < -s.MaximumLatitude &&
                              (e = -s.MaximumLatitude);
                        var t = Math.sin(e);
                        return 0.5 * Math.log((1 + t) / (1 - t));
                    }),
                    (s.MaximumLatitude = s.mercatorAngleToGeodeticLatitude(
                        Math.PI,
                    )),
                    (s.prototype.project = function (t, r) {
                        var a = this._semimajorAxis,
                            i = t.longitude * a,
                            o =
                                s.geodeticLatitudeToMercatorAngle(t.latitude) *
                                a,
                            u = t.height;
                        return n(r)
                            ? ((r.x = i), (r.y = o), (r.z = u), r)
                            : new e(i, o, u);
                    }),
                    (s.prototype.unproject = function (e, r) {
                        var a = this._oneOverSemimajorAxis,
                            i = e.x * a,
                            o = s.mercatorAngleToGeodeticLatitude(e.y * a),
                            u = e.z;
                        return n(r)
                            ? ((r.longitude = i),
                              (r.latitude = o),
                              (r.height = u),
                              r)
                            : new t(i, o, u);
                    }),
                    s
                );
            },
        ),
        define(
            'Scene/PrimitivePipeline',
            [
                '../Core/BoundingSphere',
                '../Core/ComponentDatatype',
                '../Core/defined',
                '../Core/DeveloperError',
                '../Core/Ellipsoid',
                '../Core/FeatureDetection',
                '../Core/GeographicProjection',
                '../Core/Geometry',
                '../Core/GeometryAttribute',
                '../Core/GeometryAttributes',
                '../Core/GeometryPipeline',
                '../Core/IndexDatatype',
                '../Core/Matrix4',
                '../Core/WebMercatorProjection',
            ],
            function (e, t, r, n, a, i, o, u, s, c, l, E, f, h) {
                'use strict';
                function d(e, t, n) {
                    var a,
                        i = !n,
                        o = e.length;
                    if (!i && o > 1) {
                        var u = e[0].modelMatrix;
                        for (a = 1; a < o; ++a)
                            if (!f.equals(u, e[a].modelMatrix)) {
                                i = !0;
                                break;
                            }
                    }
                    if (i)
                        for (a = 0; a < o; ++a)
                            r(e[a].geometry) &&
                                l.transformToWorldCoordinates(e[a]);
                    else f.multiplyTransformation(t, e[0].modelMatrix, t);
                }
                function _(e, r) {
                    var n = e.attributes,
                        a = n.position,
                        i = a.values.length / a.componentsPerAttribute;
                    n.batchId = new s({
                        componentDatatype: t.FLOAT,
                        componentsPerAttribute: 1,
                        values: new Float32Array(i),
                    });
                    for (var o = n.batchId.values, u = 0; u < i; ++u) o[u] = r;
                }
                function p(e) {
                    for (var t = e.length, n = 0; n < t; ++n) {
                        var a = e[n];
                        r(a.geometry)
                            ? _(a.geometry, n)
                            : r(a.westHemisphereGeometry) &&
                              r(a.eastHemisphereGeometry) &&
                              (_(a.westHemisphereGeometry, n),
                              _(a.eastHemisphereGeometry, n));
                    }
                }
                function m(n) {
                    var a,
                        i,
                        o = n.instances,
                        u = n.projection,
                        s = n.elementIndexUintSupported,
                        c = n.scene3DOnly,
                        E = n.vertexCacheOptimize,
                        f = n.compressVertices,
                        h = n.modelMatrix,
                        _ = o.length;
                    for (a = 0; a < _; ++a)
                        if (r(o[a].geometry)) {
                            o[a].geometry.primitiveType;
                            break;
                        }
                    if ((d(o, h, c), !c))
                        for (a = 0; a < _; ++a)
                            r(o[a].geometry) && l.splitLongitude(o[a]);
                    if ((p(o), E))
                        for (a = 0; a < _; ++a) {
                            var m = o[a];
                            r(m.geometry)
                                ? (l.reorderForPostVertexCache(m.geometry),
                                  l.reorderForPreVertexCache(m.geometry))
                                : r(m.westHemisphereGeometry) &&
                                  r(m.eastHemisphereGeometry) &&
                                  (l.reorderForPostVertexCache(
                                      m.westHemisphereGeometry,
                                  ),
                                  l.reorderForPreVertexCache(
                                      m.westHemisphereGeometry,
                                  ),
                                  l.reorderForPostVertexCache(
                                      m.eastHemisphereGeometry,
                                  ),
                                  l.reorderForPreVertexCache(
                                      m.eastHemisphereGeometry,
                                  ));
                        }
                    var T = l.combineInstances(o);
                    for (_ = T.length, a = 0; a < _; ++a) {
                        i = T[a];
                        var y,
                            R = i.attributes;
                        if (c)
                            for (y in R)
                                R.hasOwnProperty(y) &&
                                    R[y].componentDatatype === t.DOUBLE &&
                                    l.encodeAttribute(
                                        i,
                                        y,
                                        y + '3DHigh',
                                        y + '3DLow',
                                    );
                        else
                            for (y in R)
                                if (
                                    R.hasOwnProperty(y) &&
                                    R[y].componentDatatype === t.DOUBLE
                                ) {
                                    var A = y + '3D',
                                        v = y + '2D';
                                    l.projectTo2D(i, y, A, v, u),
                                        r(i.boundingSphere) &&
                                            'position' === y &&
                                            (i.boundingSphereCV =
                                                e.fromVertices(
                                                    i.attributes.position2D
                                                        .values,
                                                )),
                                        l.encodeAttribute(
                                            i,
                                            A,
                                            A + 'High',
                                            A + 'Low',
                                        ),
                                        l.encodeAttribute(
                                            i,
                                            v,
                                            v + 'High',
                                            v + 'Low',
                                        );
                                }
                        f && l.compressVertices(i);
                    }
                    if (!s) {
                        var S = [];
                        for (_ = T.length, a = 0; a < _; ++a)
                            (i = T[a]),
                                (S = S.concat(l.fitToUnsignedShortIndices(i)));
                        T = S;
                    }
                    return T;
                }
                function T(e, t, n, a) {
                    var i,
                        o,
                        u,
                        s = a.length - 1;
                    if (s >= 0) {
                        var c = a[s];
                        (i = c.offset + c.count),
                            (u = c.index),
                            (o = n[u].indices.length);
                    } else (i = 0), (u = 0), (o = n[u].indices.length);
                    for (var l = e.length, E = 0; E < l; ++E) {
                        var f = e[E],
                            h = f[t];
                        if (r(h)) {
                            var d = h.indices.length;
                            i + d > o && ((i = 0), (o = n[++u].indices.length)),
                                a.push({ index: u, offset: i, count: d }),
                                (i += d);
                        }
                    }
                }
                function y(e, t) {
                    var r = [];
                    return (
                        T(e, 'geometry', t, r),
                        T(e, 'westHemisphereGeometry', t, r),
                        T(e, 'eastHemisphereGeometry', t, r),
                        r
                    );
                }
                function R(e, t) {
                    var n = e.attributes;
                    for (var a in n)
                        if (n.hasOwnProperty(a)) {
                            var i = n[a];
                            r(i) && r(i.values) && t.push(i.values.buffer);
                        }
                    r(e.indices) && t.push(e.indices.buffer);
                }
                function A(e, t) {
                    for (var r = e.length, n = 0; n < r; ++n) R(e[n], t);
                }
                function v(t) {
                    for (var n = 1, a = t.length, i = 0; i < a; i++) {
                        var o = t[i];
                        if ((++n, r(o))) {
                            var u = o.attributes;
                            n +=
                                6 +
                                2 * e.packedLength +
                                (r(o.indices) ? o.indices.length : 0);
                            for (var s in u)
                                if (u.hasOwnProperty(s) && r(u[s])) {
                                    var c = u[s];
                                    n += 5 + c.values.length;
                                }
                        }
                    }
                    return n;
                }
                function S(e, t) {
                    var r = e.length,
                        n = new Float64Array(1 + 16 * r),
                        a = 0;
                    n[a++] = r;
                    for (var i = 0; i < r; i++) {
                        var o = e[i];
                        f.pack(o.modelMatrix, n, a), (a += f.packedLength);
                    }
                    return t.push(n.buffer), n;
                }
                function N(e) {
                    for (
                        var t = e, r = new Array(t[0]), n = 0, a = 1;
                        a < t.length;

                    ) {
                        var i = f.unpack(t, a);
                        (a += f.packedLength), (r[n++] = { modelMatrix: i });
                    }
                    return r;
                }
                function I(t) {
                    var n = t.length,
                        a = 1 + (e.packedLength + 1) * n,
                        i = new Float32Array(a),
                        o = 0;
                    i[o++] = n;
                    for (var u = 0; u < n; ++u) {
                        var s = t[u];
                        r(s)
                            ? ((i[o++] = 1), e.pack(t[u], i, o))
                            : (i[o++] = 0),
                            (o += e.packedLength);
                    }
                    return i;
                }
                function M(t) {
                    for (var r = new Array(t[0]), n = 0, a = 1; a < t.length; )
                        1 === t[a++] && (r[n] = e.unpack(t, a)),
                            ++n,
                            (a += e.packedLength);
                    return r;
                }
                if (!i.supportsTypedArrays()) return {};
                var O = {};
                return (
                    (O.combineGeometry = function (t) {
                        var n,
                            a,
                            i,
                            o = t.instances,
                            u = o.length;
                        u > 0 &&
                            ((n = m(t)),
                            n.length > 0 &&
                                ((a = l.createAttributeLocations(n[0])),
                                t.createPickOffsets && (i = y(o, n))));
                        for (
                            var s = new Array(u), c = new Array(u), E = 0;
                            E < u;
                            ++E
                        ) {
                            var f = o[E],
                                h = f.geometry;
                            r(h) &&
                                ((s[E] = h.boundingSphere),
                                (c[E] = h.boundingSphereCV));
                            var d = f.eastHemisphereGeometry,
                                _ = f.westHemisphereGeometry;
                            r(d) &&
                                r(_) &&
                                (r(d.boundingSphere) &&
                                    r(_.boundingSphere) &&
                                    (s[E] = e.union(
                                        d.boundingSphere,
                                        _.boundingSphere,
                                    )),
                                r(d.boundingSphereCV) &&
                                    r(_.boundingSphereCV) &&
                                    (c[E] = e.union(
                                        d.boundingSphereCV,
                                        _.boundingSphereCV,
                                    )));
                        }
                        return {
                            geometries: n,
                            modelMatrix: t.modelMatrix,
                            attributeLocations: a,
                            pickOffsets: i,
                            boundingSpheres: s,
                            boundingSpheresCV: c,
                        };
                    }),
                    (O.packCreateGeometryResults = function (t, n) {
                        var a = new Float64Array(v(t)),
                            i = [],
                            o = {},
                            u = t.length,
                            s = 0;
                        a[s++] = u;
                        for (var c = 0; c < u; c++) {
                            var l = t[c],
                                E = r(l);
                            if (((a[s++] = E ? 1 : 0), E)) {
                                (a[s++] = l.primitiveType),
                                    (a[s++] = l.geometryType);
                                var f = r(l.boundingSphere) ? 1 : 0;
                                (a[s++] = f),
                                    f && e.pack(l.boundingSphere, a, s),
                                    (s += e.packedLength);
                                var h = r(l.boundingSphereCV) ? 1 : 0;
                                (a[s++] = h),
                                    h && e.pack(l.boundingSphereCV, a, s),
                                    (s += e.packedLength);
                                var d = l.attributes,
                                    _ = [];
                                for (var p in d)
                                    d.hasOwnProperty(p) &&
                                        r(d[p]) &&
                                        (_.push(p),
                                        r(o[p]) ||
                                            ((o[p] = i.length), i.push(p)));
                                a[s++] = _.length;
                                for (var m = 0; m < _.length; m++) {
                                    var T = _[m],
                                        y = d[T];
                                    (a[s++] = o[T]),
                                        (a[s++] = y.componentDatatype),
                                        (a[s++] = y.componentsPerAttribute),
                                        (a[s++] = y.normalize ? 1 : 0),
                                        (a[s++] = y.values.length),
                                        a.set(y.values, s),
                                        (s += y.values.length);
                                }
                                var R = r(l.indices) ? l.indices.length : 0;
                                (a[s++] = R),
                                    R > 0 && (a.set(l.indices, s), (s += R));
                            }
                        }
                        return (
                            n.push(a.buffer), { stringTable: i, packedData: a }
                        );
                    }),
                    (O.unpackCreateGeometryResults = function (r) {
                        for (
                            var n,
                                a = r.stringTable,
                                i = r.packedData,
                                o = new Array(i[0]),
                                l = 0,
                                f = 1;
                            f < i.length;

                        ) {
                            if (1 === i[f++]) {
                                var h,
                                    d,
                                    _ = i[f++],
                                    p = i[f++];
                                1 === i[f++] && (h = e.unpack(i, f)),
                                    (f += e.packedLength);
                                1 === i[f++] && (d = e.unpack(i, f)),
                                    (f += e.packedLength);
                                var m,
                                    T,
                                    y,
                                    R = new c(),
                                    A = i[f++];
                                for (n = 0; n < A; n++) {
                                    var v = a[i[f++]],
                                        S = i[f++];
                                    y = i[f++];
                                    var N = 0 !== i[f++];
                                    (m = i[f++]),
                                        (T = t.createTypedArray(S, m));
                                    for (var I = 0; I < m; I++) T[I] = i[f++];
                                    R[v] = new s({
                                        componentDatatype: S,
                                        componentsPerAttribute: y,
                                        normalize: N,
                                        values: T,
                                    });
                                }
                                var M;
                                if ((m = i[f++]) > 0) {
                                    var O = T.length / y;
                                    for (
                                        M = E.createTypedArray(O, m), n = 0;
                                        n < m;
                                        n++
                                    )
                                        M[n] = i[f++];
                                }
                                o[l++] = new u({
                                    primitiveType: _,
                                    geometryType: p,
                                    boundingSphere: h,
                                    boundingSphereCV: d,
                                    indices: M,
                                    attributes: R,
                                });
                            } else o[l++] = void 0;
                        }
                        return o;
                    }),
                    (O.packCombineGeometryParameters = function (e, t) {
                        for (
                            var r = e.createGeometryResults,
                                n = r.length,
                                a = 0;
                            a < n;
                            a++
                        )
                            t.push(r[a].packedData.buffer);
                        return {
                            createGeometryResults: e.createGeometryResults,
                            packedInstances: S(e.instances, t),
                            ellipsoid: e.ellipsoid,
                            isGeographic: e.projection instanceof o,
                            elementIndexUintSupported:
                                e.elementIndexUintSupported,
                            scene3DOnly: e.scene3DOnly,
                            vertexCacheOptimize: e.vertexCacheOptimize,
                            compressVertices: e.compressVertices,
                            modelMatrix: e.modelMatrix,
                            createPickOffsets: e.createPickOffsets,
                        };
                    }),
                    (O.unpackCombineGeometryParameters = function (e) {
                        for (
                            var t = N(e.packedInstances),
                                r = e.createGeometryResults,
                                n = r.length,
                                i = 0,
                                u = 0;
                            u < n;
                            u++
                        )
                            for (
                                var s = O.unpackCreateGeometryResults(r[u]),
                                    c = s.length,
                                    l = 0;
                                l < c;
                                l++
                            ) {
                                var E = s[l],
                                    d = t[i];
                                (d.geometry = E), ++i;
                            }
                        var _ = a.clone(e.ellipsoid);
                        return {
                            instances: t,
                            ellipsoid: _,
                            projection: e.isGeographic ? new o(_) : new h(_),
                            elementIndexUintSupported:
                                e.elementIndexUintSupported,
                            scene3DOnly: e.scene3DOnly,
                            vertexCacheOptimize: e.vertexCacheOptimize,
                            compressVertices: e.compressVertices,
                            modelMatrix: f.clone(e.modelMatrix),
                            createPickOffsets: e.createPickOffsets,
                        };
                    }),
                    (O.packCombineGeometryResults = function (e, t) {
                        r(e.geometries) && A(e.geometries, t);
                        var n = I(e.boundingSpheres),
                            a = I(e.boundingSpheresCV);
                        return (
                            t.push(n.buffer, a.buffer),
                            {
                                geometries: e.geometries,
                                attributeLocations: e.attributeLocations,
                                modelMatrix: e.modelMatrix,
                                pickOffsets: e.pickOffsets,
                                boundingSpheres: n,
                                boundingSpheresCV: a,
                            }
                        );
                    }),
                    (O.unpackCombineGeometryResults = function (e) {
                        return {
                            geometries: e.geometries,
                            attributeLocations: e.attributeLocations,
                            modelMatrix: e.modelMatrix,
                            pickOffsets: e.pickOffsets,
                            boundingSpheres: M(e.boundingSpheres),
                            boundingSpheresCV: M(e.boundingSpheresCV),
                        };
                    }),
                    O
                );
            },
        ),
        define('Core/formatError', ['./defined'], function (e) {
            'use strict';
            function t(t) {
                var r,
                    n = t.name,
                    a = t.message;
                r = e(n) && e(a) ? n + ': ' + a : t.toString();
                var i = t.stack;
                return e(i) && (r += '\n' + i), r;
            }
            return t;
        }),
        define(
            'Workers/createTaskProcessorWorker',
            ['../Core/defaultValue', '../Core/defined', '../Core/formatError'],
            function (e, t, r) {
                'use strict';
                function n(n) {
                    var a,
                        i = [],
                        o = { id: void 0, result: void 0, error: void 0 };
                    return function (u) {
                        var s = u.data;
                        (i.length = 0),
                            (o.id = s.id),
                            (o.error = void 0),
                            (o.result = void 0);
                        try {
                            o.result = n(s.parameters, i);
                        } catch (e) {
                            e instanceof Error
                                ? (o.error = {
                                      name: e.name,
                                      message: e.message,
                                      stack: e.stack,
                                  })
                                : (o.error = e);
                        }
                        t(a) ||
                            (a = e(self.webkitPostMessage, self.postMessage)),
                            s.canTransferArrayBuffer || (i.length = 0);
                        try {
                            a(o, i);
                        } catch (e) {
                            (o.result = void 0),
                                (o.error =
                                    'postMessage failed with error: ' +
                                    r(e) +
                                    '\n  with responseMessage: ' +
                                    JSON.stringify(o)),
                                a(o);
                        }
                    };
                }
                return n;
            },
        ),
        define(
            'Workers/combineGeometry',
            ['../Scene/PrimitivePipeline', './createTaskProcessorWorker'],
            function (e, t) {
                'use strict';
                function r(t, r) {
                    var n = e.unpackCombineGeometryParameters(t),
                        a = e.combineGeometry(n);
                    return e.packCombineGeometryResults(a, r);
                }
                return t(r);
            },
        );
})();
