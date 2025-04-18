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
                function n(e) {
                    return e + ' is required, actual value was undefined';
                }
                function r(e, t, n) {
                    return (
                        'Expected ' +
                        n +
                        ' to be typeof ' +
                        t +
                        ', actual typeof was ' +
                        e
                    );
                }
                var a = {};
                return (
                    (a.typeOf = {}),
                    (a.defined = function (r, a) {
                        if (!e(a)) throw new t(n(r));
                    }),
                    (a.typeOf.func = function (e, n) {
                        if ('function' != typeof n)
                            throw new t(r(typeof n, 'function', e));
                    }),
                    (a.typeOf.string = function (e, n) {
                        if ('string' != typeof n)
                            throw new t(r(typeof n, 'string', e));
                    }),
                    (a.typeOf.number = function (e, n) {
                        if ('number' != typeof n)
                            throw new t(r(typeof n, 'number', e));
                    }),
                    (a.typeOf.number.lessThan = function (e, n, r) {
                        if ((a.typeOf.number(e, n), n >= r))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be less than ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (a.typeOf.number.lessThanOrEquals = function (e, n, r) {
                        if ((a.typeOf.number(e, n), n > r))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be less than or equal to ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (a.typeOf.number.greaterThan = function (e, n, r) {
                        if ((a.typeOf.number(e, n), n <= r))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be greater than ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (a.typeOf.number.greaterThanOrEquals = function (e, n, r) {
                        if ((a.typeOf.number(e, n), n < r))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be greater than or equal to' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (a.typeOf.object = function (e, n) {
                        if ('object' != typeof n)
                            throw new t(r(typeof n, 'object', e));
                    }),
                    (a.typeOf.bool = function (e, n) {
                        if ('boolean' != typeof n)
                            throw new t(r(typeof n, 'boolean', e));
                    }),
                    (a.typeOf.number.equals = function (e, n, r, i) {
                        if (
                            (a.typeOf.number(e, r),
                            a.typeOf.number(n, i),
                            r !== i)
                        )
                            throw new t(
                                e +
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
                        var n;
                        for (
                            this.mti == this.N + 1 && this.init_genrand(5489),
                                n = 0;
                            n < this.N - this.M;
                            n++
                        )
                            (e =
                                (this.mt[n] & this.UPPER_MASK) |
                                (this.mt[n + 1] & this.LOWER_MASK)),
                                (this.mt[n] =
                                    this.mt[n + this.M] ^ (e >>> 1) ^ t[1 & e]);
                        for (; n < this.N - 1; n++)
                            (e =
                                (this.mt[n] & this.UPPER_MASK) |
                                (this.mt[n + 1] & this.LOWER_MASK)),
                                (this.mt[n] =
                                    this.mt[n + (this.M - this.N)] ^
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
            function (e, t, n, r) {
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
                    (a.toSNorm = function (e, n) {
                        return (
                            (n = t(n, 255)),
                            Math.round((0.5 * a.clamp(e, -1, 1) + 0.5) * n)
                        );
                    }),
                    (a.fromSNorm = function (e, n) {
                        return (n = t(n, 255)), (a.clamp(e, 0, n) / n) * 2 - 1;
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
                    (a.lerp = function (e, t, n) {
                        return (1 - n) * e + n * t;
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
                            n = e - Math.floor(e / t) * t;
                        return n < -Math.PI ? n + t : n >= Math.PI ? n - t : n;
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
                    (a.equalsEpsilon = function (e, n, r, a) {
                        a = t(a, r);
                        var i = Math.abs(e - n);
                        return (
                            i <= a ||
                            i <= r * Math.max(Math.abs(e), Math.abs(n))
                        );
                    });
                var i = [1];
                (a.factorial = function (e) {
                    var t = i.length;
                    if (e >= t)
                        for (var n = i[t - 1], r = t; r <= e; r++)
                            i.push(n * r);
                    return i[e];
                }),
                    (a.incrementWrap = function (e, n, r) {
                        return (r = t(r, 0)), ++e, e > n && (e = r), e;
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
                    (a.clamp = function (e, t, n) {
                        return e < t ? t : e > n ? n : e;
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
                        var n = e * t;
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
            function (e, t, n, r, a, i) {
                'use strict';
                function o(e, n, r) {
                    (this.x = t(e, 0)), (this.y = t(n, 0)), (this.z = t(r, 0));
                }
                (o.fromSpherical = function (e, r) {
                    n(r) || (r = new o());
                    var a = e.clock,
                        i = e.cone,
                        u = t(e.magnitude, 1),
                        s = u * Math.sin(i);
                    return (
                        (r.x = s * Math.cos(a)),
                        (r.y = s * Math.sin(a)),
                        (r.z = u * Math.cos(i)),
                        r
                    );
                }),
                    (o.fromElements = function (e, t, r, a) {
                        return n(a)
                            ? ((a.x = e), (a.y = t), (a.z = r), a)
                            : new o(e, t, r);
                    }),
                    (o.clone = function (e, t) {
                        if (n(e))
                            return n(t)
                                ? ((t.x = e.x), (t.y = e.y), (t.z = e.z), t)
                                : new o(e.x, e.y, e.z);
                    }),
                    (o.fromCartesian4 = o.clone),
                    (o.packedLength = 3),
                    (o.pack = function (e, n, r) {
                        return (
                            (r = t(r, 0)),
                            (n[r++] = e.x),
                            (n[r++] = e.y),
                            (n[r] = e.z),
                            n
                        );
                    }),
                    (o.unpack = function (e, r, a) {
                        return (
                            (r = t(r, 0)),
                            n(a) || (a = new o()),
                            (a.x = e[r++]),
                            (a.y = e[r++]),
                            (a.z = e[r]),
                            a
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = 3 * r) : (t = new Array(3 * r));
                        for (var a = 0; a < r; ++a) o.pack(e[a], t, 3 * a);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = r / 3) : (t = new Array(r / 3));
                        for (var a = 0; a < r; a += 3) {
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
                    (o.minimumByComponent = function (e, t, n) {
                        return (
                            (n.x = Math.min(e.x, t.x)),
                            (n.y = Math.min(e.y, t.y)),
                            (n.z = Math.min(e.z, t.z)),
                            n
                        );
                    }),
                    (o.maximumByComponent = function (e, t, n) {
                        return (
                            (n.x = Math.max(e.x, t.x)),
                            (n.y = Math.max(e.y, t.y)),
                            (n.z = Math.max(e.z, t.z)),
                            n
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
                        var n = o.magnitude(e);
                        return (
                            (t.x = e.x / n), (t.y = e.y / n), (t.z = e.z / n), t
                        );
                    }),
                    (o.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z;
                    }),
                    (o.multiplyComponents = function (e, t, n) {
                        return (
                            (n.x = e.x * t.x),
                            (n.y = e.y * t.y),
                            (n.z = e.z * t.z),
                            n
                        );
                    }),
                    (o.divideComponents = function (e, t, n) {
                        return (
                            (n.x = e.x / t.x),
                            (n.y = e.y / t.y),
                            (n.z = e.z / t.z),
                            n
                        );
                    }),
                    (o.add = function (e, t, n) {
                        return (
                            (n.x = e.x + t.x),
                            (n.y = e.y + t.y),
                            (n.z = e.z + t.z),
                            n
                        );
                    }),
                    (o.subtract = function (e, t, n) {
                        return (
                            (n.x = e.x - t.x),
                            (n.y = e.y - t.y),
                            (n.z = e.z - t.z),
                            n
                        );
                    }),
                    (o.multiplyByScalar = function (e, t, n) {
                        return (
                            (n.x = e.x * t), (n.y = e.y * t), (n.z = e.z * t), n
                        );
                    }),
                    (o.divideByScalar = function (e, t, n) {
                        return (
                            (n.x = e.x / t), (n.y = e.y / t), (n.z = e.z / t), n
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
                o.lerp = function (e, t, n, r) {
                    return (
                        o.multiplyByScalar(t, n, s),
                        (r = o.multiplyByScalar(e, 1 - n, r)),
                        o.add(s, r, r)
                    );
                };
                var c = new o(),
                    l = new o();
                o.angleBetween = function (e, t) {
                    o.normalize(e, c), o.normalize(t, l);
                    var n = o.dot(c, l),
                        r = o.magnitude(o.cross(c, l, c));
                    return Math.atan2(r, n);
                };
                var E = new o();
                (o.mostOrthogonalAxis = function (e, t) {
                    var n = o.normalize(e, E);
                    return (
                        o.abs(n, n),
                        (t =
                            n.x <= n.y
                                ? n.x <= n.z
                                    ? o.clone(o.UNIT_X, t)
                                    : o.clone(o.UNIT_Z, t)
                                : n.y <= n.z
                                  ? o.clone(o.UNIT_Y, t)
                                  : o.clone(o.UNIT_Z, t))
                    );
                }),
                    (o.equals = function (e, t) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                e.x === t.x &&
                                e.y === t.y &&
                                e.z === t.z)
                        );
                    }),
                    (o.equalsArray = function (e, t, n) {
                        return (
                            e.x === t[n] && e.y === t[n + 1] && e.z === t[n + 2]
                        );
                    }),
                    (o.equalsEpsilon = function (e, t, r, a) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                i.equalsEpsilon(e.x, t.x, r, a) &&
                                i.equalsEpsilon(e.y, t.y, r, a) &&
                                i.equalsEpsilon(e.z, t.z, r, a))
                        );
                    }),
                    (o.cross = function (e, t, n) {
                        var r = e.x,
                            a = e.y,
                            i = e.z,
                            o = t.x,
                            u = t.y,
                            s = t.z,
                            c = a * s - i * u,
                            l = i * o - r * s,
                            E = r * u - a * o;
                        return (n.x = c), (n.y = l), (n.z = E), n;
                    }),
                    (o.fromDegrees = function (e, t, n, r, a) {
                        return (
                            (e = i.toRadians(e)),
                            (t = i.toRadians(t)),
                            o.fromRadians(e, t, n, r, a)
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
                    (o.fromRadians = function (e, r, a, i, u) {
                        a = t(a, 0);
                        var s = n(i) ? i.radiiSquared : d,
                            c = Math.cos(r);
                        (f.x = c * Math.cos(e)),
                            (f.y = c * Math.sin(e)),
                            (f.z = Math.sin(r)),
                            (f = o.normalize(f, f)),
                            o.multiplyComponents(s, f, h);
                        var l = Math.sqrt(o.dot(f, h));
                        return (
                            (h = o.divideByScalar(h, l, h)),
                            (f = o.multiplyByScalar(f, a, f)),
                            n(u) || (u = new o()),
                            o.add(h, f, u)
                        );
                    }),
                    (o.fromDegreesArray = function (e, t, r) {
                        var a = e.length;
                        n(r) ? (r.length = a / 2) : (r = new Array(a / 2));
                        for (var i = 0; i < a; i += 2) {
                            var u = e[i],
                                s = e[i + 1],
                                c = i / 2;
                            r[c] = o.fromDegrees(u, s, 0, t, r[c]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArray = function (e, t, r) {
                        var a = e.length;
                        n(r) ? (r.length = a / 2) : (r = new Array(a / 2));
                        for (var i = 0; i < a; i += 2) {
                            var u = e[i],
                                s = e[i + 1],
                                c = i / 2;
                            r[c] = o.fromRadians(u, s, 0, t, r[c]);
                        }
                        return r;
                    }),
                    (o.fromDegreesArrayHeights = function (e, t, r) {
                        var a = e.length;
                        n(r) ? (r.length = a / 3) : (r = new Array(a / 3));
                        for (var i = 0; i < a; i += 3) {
                            var u = e[i],
                                s = e[i + 1],
                                c = e[i + 2],
                                l = i / 3;
                            r[l] = o.fromDegrees(u, s, c, t, r[l]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArrayHeights = function (e, t, r) {
                        var a = e.length;
                        n(r) ? (r.length = a / 3) : (r = new Array(a / 3));
                        for (var i = 0; i < a; i += 3) {
                            var u = e[i],
                                s = e[i + 1],
                                c = e[i + 2],
                                l = i / 3;
                            r[l] = o.fromRadians(u, s, c, t, r[l]);
                        }
                        return r;
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
                    (o.prototype.equalsEpsilon = function (e, t, n) {
                        return o.equalsEpsilon(this, e, t, n);
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
            function (e, t, n, r) {
                'use strict';
                function a(n, a, u, s, c) {
                    var l = n.x,
                        E = n.y,
                        f = n.z,
                        h = a.x,
                        d = a.y,
                        p = a.z,
                        y = l * l * h * h,
                        _ = E * E * d * d,
                        m = f * f * p * p,
                        T = y + _ + m,
                        R = Math.sqrt(1 / T),
                        A = e.multiplyByScalar(n, R, i);
                    if (T < s) return isFinite(R) ? e.clone(A, c) : void 0;
                    var v = u.x,
                        S = u.y,
                        N = u.z,
                        g = o;
                    (g.x = A.x * v * 2),
                        (g.y = A.y * S * 2),
                        (g.z = A.z * N * 2);
                    var I,
                        M,
                        O,
                        x,
                        w,
                        C,
                        P,
                        L,
                        b,
                        U,
                        F,
                        D = ((1 - R) * e.magnitude(n)) / (0.5 * e.magnitude(g)),
                        B = 0;
                    do {
                        (D -= B),
                            (O = 1 / (1 + D * v)),
                            (x = 1 / (1 + D * S)),
                            (w = 1 / (1 + D * N)),
                            (C = O * O),
                            (P = x * x),
                            (L = w * w),
                            (b = C * O),
                            (U = P * x),
                            (F = L * w),
                            (I = y * C + _ * P + m * L - 1),
                            (M = y * b * v + _ * U * S + m * F * N);
                        B = I / (-2 * M);
                    } while (Math.abs(I) > r.EPSILON12);
                    return t(c)
                        ? ((c.x = l * O), (c.y = E * x), (c.z = f * w), c)
                        : new e(l * O, E * x, f * w);
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
            function (e, t, n, r, a, i, o) {
                'use strict';
                function u(e, t, r) {
                    (this.longitude = n(e, 0)),
                        (this.latitude = n(t, 0)),
                        (this.height = n(r, 0));
                }
                (u.fromRadians = function (e, t, a, i) {
                    return (
                        (a = n(a, 0)),
                        r(i)
                            ? ((i.longitude = e),
                              (i.latitude = t),
                              (i.height = a),
                              i)
                            : new u(e, t, a)
                    );
                }),
                    (u.fromDegrees = function (e, t, n, r) {
                        return (
                            (e = i.toRadians(e)),
                            (t = i.toRadians(t)),
                            u.fromRadians(e, t, n, r)
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
                    (u.fromCartesian = function (t, n, a) {
                        var d = r(n) ? n.oneOverRadii : E,
                            p = r(n) ? n.oneOverRadiiSquared : f,
                            y = r(n) ? n._centerToleranceSquared : h,
                            _ = o(t, d, p, y, c);
                        if (r(_)) {
                            var m = e.multiplyComponents(_, p, s);
                            m = e.normalize(m, m);
                            var T = e.subtract(t, _, l),
                                R = Math.atan2(m.y, m.x),
                                A = Math.asin(m.z),
                                v = i.sign(e.dot(T, t)) * e.magnitude(T);
                            return r(a)
                                ? ((a.longitude = R),
                                  (a.latitude = A),
                                  (a.height = v),
                                  a)
                                : new u(R, A, v);
                        }
                    }),
                    (u.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.longitude = e.longitude),
                                  (t.latitude = e.latitude),
                                  (t.height = e.height),
                                  t)
                                : new u(e.longitude, e.latitude, e.height);
                    }),
                    (u.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                e.longitude === t.longitude &&
                                e.latitude === t.latitude &&
                                e.height === t.height)
                        );
                    }),
                    (u.equalsEpsilon = function (e, t, n) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                Math.abs(e.longitude - t.longitude) <= n &&
                                Math.abs(e.latitude - t.latitude) <= n &&
                                Math.abs(e.height - t.height) <= n)
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
                n = Object.defineProperties;
            return (
                (t && e(n)) ||
                    (n = function (e) {
                        return e;
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
            function (e, t, n, r, a, i, o, u, s, c) {
                'use strict';
                function l(t, n, a, i) {
                    (n = r(n, 0)),
                        (a = r(a, 0)),
                        (i = r(i, 0)),
                        (t._radii = new e(n, a, i)),
                        (t._radiiSquared = new e(n * n, a * a, i * i)),
                        (t._radiiToTheFourth = new e(
                            n * n * n * n,
                            a * a * a * a,
                            i * i * i * i,
                        )),
                        (t._oneOverRadii = new e(
                            0 === n ? 0 : 1 / n,
                            0 === a ? 0 : 1 / a,
                            0 === i ? 0 : 1 / i,
                        )),
                        (t._oneOverRadiiSquared = new e(
                            0 === n ? 0 : 1 / (n * n),
                            0 === a ? 0 : 1 / (a * a),
                            0 === i ? 0 : 1 / (i * i),
                        )),
                        (t._minimumRadius = Math.min(n, a, i)),
                        (t._maximumRadius = Math.max(n, a, i)),
                        (t._centerToleranceSquared = s.EPSILON1),
                        0 !== t._radiiSquared.z &&
                            (t._squaredXOverSquaredZ =
                                t._radiiSquared.x / t._radiiSquared.z);
                }
                function E(e, t, n) {
                    (this._radii = void 0),
                        (this._radiiSquared = void 0),
                        (this._radiiToTheFourth = void 0),
                        (this._oneOverRadii = void 0),
                        (this._oneOverRadiiSquared = void 0),
                        (this._minimumRadius = void 0),
                        (this._maximumRadius = void 0),
                        (this._centerToleranceSquared = void 0),
                        (this._squaredXOverSquaredZ = void 0),
                        l(this, e, t, n);
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
                    (E.clone = function (t, n) {
                        if (a(t)) {
                            var r = t._radii;
                            return a(n)
                                ? (e.clone(r, n._radii),
                                  e.clone(t._radiiSquared, n._radiiSquared),
                                  e.clone(
                                      t._radiiToTheFourth,
                                      n._radiiToTheFourth,
                                  ),
                                  e.clone(t._oneOverRadii, n._oneOverRadii),
                                  e.clone(
                                      t._oneOverRadiiSquared,
                                      n._oneOverRadiiSquared,
                                  ),
                                  (n._minimumRadius = t._minimumRadius),
                                  (n._maximumRadius = t._maximumRadius),
                                  (n._centerToleranceSquared =
                                      t._centerToleranceSquared),
                                  n)
                                : new E(r.x, r.y, r.z);
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
                    (E.pack = function (t, n, a) {
                        return (a = r(a, 0)), e.pack(t._radii, n, a), n;
                    }),
                    (E.unpack = function (t, n, a) {
                        n = r(n, 0);
                        var i = e.unpack(t, n);
                        return E.fromCartesian3(i, a);
                    }),
                    (E.prototype.geocentricSurfaceNormal = e.normalize),
                    (E.prototype.geodeticSurfaceNormalCartographic = function (
                        t,
                        n,
                    ) {
                        var r = t.longitude,
                            i = t.latitude,
                            o = Math.cos(i),
                            u = o * Math.cos(r),
                            s = o * Math.sin(r),
                            c = Math.sin(i);
                        return (
                            a(n) || (n = new e()),
                            (n.x = u),
                            (n.y = s),
                            (n.z = c),
                            e.normalize(n, n)
                        );
                    }),
                    (E.prototype.geodeticSurfaceNormal = function (t, n) {
                        return (
                            a(n) || (n = new e()),
                            (n = e.multiplyComponents(
                                t,
                                this._oneOverRadiiSquared,
                                n,
                            )),
                            e.normalize(n, n)
                        );
                    });
                var f = new e(),
                    h = new e();
                (E.prototype.cartographicToCartesian = function (t, n) {
                    var r = f,
                        i = h;
                    this.geodeticSurfaceNormalCartographic(t, r),
                        e.multiplyComponents(this._radiiSquared, r, i);
                    var o = Math.sqrt(e.dot(r, i));
                    return (
                        e.divideByScalar(i, o, i),
                        e.multiplyByScalar(r, t.height, r),
                        a(n) || (n = new e()),
                        e.add(i, r, n)
                    );
                }),
                    (E.prototype.cartographicArrayToCartesianArray = function (
                        e,
                        t,
                    ) {
                        var n = e.length;
                        a(t) ? (t.length = n) : (t = new Array(n));
                        for (var r = 0; r < n; r++)
                            t[r] = this.cartographicToCartesian(e[r], t[r]);
                        return t;
                    });
                var d = new e(),
                    p = new e(),
                    y = new e();
                return (
                    (E.prototype.cartesianToCartographic = function (n, r) {
                        var i = this.scaleToGeodeticSurface(n, p);
                        if (a(i)) {
                            var o = this.geodeticSurfaceNormal(i, d),
                                u = e.subtract(n, i, y),
                                c = Math.atan2(o.y, o.x),
                                l = Math.asin(o.z),
                                E = s.sign(e.dot(u, n)) * e.magnitude(u);
                            return a(r)
                                ? ((r.longitude = c),
                                  (r.latitude = l),
                                  (r.height = E),
                                  r)
                                : new t(c, l, E);
                        }
                    }),
                    (E.prototype.cartesianArrayToCartographicArray = function (
                        e,
                        t,
                    ) {
                        var n = e.length;
                        a(t) ? (t.length = n) : (t = new Array(n));
                        for (var r = 0; r < n; ++r)
                            t[r] = this.cartesianToCartographic(e[r], t[r]);
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
                    (E.prototype.scaleToGeocentricSurface = function (t, n) {
                        a(n) || (n = new e());
                        var r = t.x,
                            i = t.y,
                            o = t.z,
                            u = this._oneOverRadiiSquared,
                            s =
                                1 /
                                Math.sqrt(
                                    r * r * u.x + i * i * u.y + o * o * u.z,
                                );
                        return e.multiplyByScalar(t, s, n);
                    }),
                    (E.prototype.transformPositionToScaledSpace = function (
                        t,
                        n,
                    ) {
                        return (
                            a(n) || (n = new e()),
                            e.multiplyComponents(t, this._oneOverRadii, n)
                        );
                    }),
                    (E.prototype.transformPositionFromScaledSpace = function (
                        t,
                        n,
                    ) {
                        return (
                            a(n) || (n = new e()),
                            e.multiplyComponents(t, this._radii, n)
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
                        function (t, n, i) {
                            n = r(n, 0);
                            var o = this._squaredXOverSquaredZ;
                            if (
                                (a(i) || (i = new e()),
                                (i.x = 0),
                                (i.y = 0),
                                (i.z = t.z * (1 - o)),
                                !(Math.abs(i.z) >= this._radii.z - n))
                            )
                                return i;
                        }),
                    E
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
            function (e, t, n, r, a, i, o, u) {
                'use strict';
                function s(e, t, r, a) {
                    (this.west = n(e, 0)),
                        (this.south = n(t, 0)),
                        (this.east = n(r, 0)),
                        (this.north = n(a, 0));
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
                    (s.pack = function (e, t, r) {
                        return (
                            (r = n(r, 0)),
                            (t[r++] = e.west),
                            (t[r++] = e.south),
                            (t[r++] = e.east),
                            (t[r] = e.north),
                            t
                        );
                    }),
                    (s.unpack = function (e, t, a) {
                        return (
                            (t = n(t, 0)),
                            r(a) || (a = new s()),
                            (a.west = e[t++]),
                            (a.south = e[t++]),
                            (a.east = e[t++]),
                            (a.north = e[t]),
                            a
                        );
                    }),
                    (s.computeWidth = function (e) {
                        var t = e.east,
                            n = e.west;
                        return t < n && (t += u.TWO_PI), t - n;
                    }),
                    (s.computeHeight = function (e) {
                        return e.north - e.south;
                    }),
                    (s.fromDegrees = function (e, t, a, i, o) {
                        return (
                            (e = u.toRadians(n(e, 0))),
                            (t = u.toRadians(n(t, 0))),
                            (a = u.toRadians(n(a, 0))),
                            (i = u.toRadians(n(i, 0))),
                            r(o)
                                ? ((o.west = e),
                                  (o.south = t),
                                  (o.east = a),
                                  (o.north = i),
                                  o)
                                : new s(e, t, a, i)
                        );
                    }),
                    (s.fromRadians = function (e, t, a, i, o) {
                        return r(o)
                            ? ((o.west = n(e, 0)),
                              (o.south = n(t, 0)),
                              (o.east = n(a, 0)),
                              (o.north = n(i, 0)),
                              o)
                            : new s(e, t, a, i);
                    }),
                    (s.fromCartographicArray = function (e, t) {
                        for (
                            var n = Number.MAX_VALUE,
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
                            (n = Math.min(n, h.longitude)),
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
                            a - n > o - i &&
                                ((n = i),
                                (a = o),
                                a > u.PI && (a -= u.TWO_PI),
                                n > u.PI && (n -= u.TWO_PI)),
                            r(t)
                                ? ((t.west = n),
                                  (t.south = c),
                                  (t.east = a),
                                  (t.north = l),
                                  t)
                                : new s(n, c, a, l)
                        );
                    }),
                    (s.fromCartesianArray = function (e, t, a) {
                        t = n(t, i.WGS84);
                        for (
                            var o = Number.MAX_VALUE,
                                c = -Number.MAX_VALUE,
                                l = Number.MAX_VALUE,
                                E = -Number.MAX_VALUE,
                                f = Number.MAX_VALUE,
                                h = -Number.MAX_VALUE,
                                d = 0,
                                p = e.length;
                            d < p;
                            d++
                        ) {
                            var y = t.cartesianToCartographic(e[d]);
                            (o = Math.min(o, y.longitude)),
                                (c = Math.max(c, y.longitude)),
                                (f = Math.min(f, y.latitude)),
                                (h = Math.max(h, y.latitude));
                            var _ =
                                y.longitude >= 0
                                    ? y.longitude
                                    : y.longitude + u.TWO_PI;
                            (l = Math.min(l, _)), (E = Math.max(E, _));
                        }
                        return (
                            c - o > E - l &&
                                ((o = l),
                                (c = E),
                                c > u.PI && (c -= u.TWO_PI),
                                o > u.PI && (o -= u.TWO_PI)),
                            r(a)
                                ? ((a.west = o),
                                  (a.south = f),
                                  (a.east = c),
                                  (a.north = h),
                                  a)
                                : new s(o, f, c, h)
                        );
                    }),
                    (s.clone = function (e, t) {
                        if (r(e))
                            return r(t)
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
                            (r(e) &&
                                r(t) &&
                                e.west === t.west &&
                                e.south === t.south &&
                                e.east === t.east &&
                                e.north === t.north)
                        );
                    }),
                    (s.prototype.equalsEpsilon = function (e, t) {
                        return (
                            r(e) &&
                            Math.abs(this.west - e.west) <= t &&
                            Math.abs(this.south - e.south) <= t &&
                            Math.abs(this.east - e.east) <= t &&
                            Math.abs(this.north - e.north) <= t
                        );
                    }),
                    (s.validate = function (e) {}),
                    (s.southwest = function (t, n) {
                        return r(n)
                            ? ((n.longitude = t.west),
                              (n.latitude = t.south),
                              (n.height = 0),
                              n)
                            : new e(t.west, t.south);
                    }),
                    (s.northwest = function (t, n) {
                        return r(n)
                            ? ((n.longitude = t.west),
                              (n.latitude = t.north),
                              (n.height = 0),
                              n)
                            : new e(t.west, t.north);
                    }),
                    (s.northeast = function (t, n) {
                        return r(n)
                            ? ((n.longitude = t.east),
                              (n.latitude = t.north),
                              (n.height = 0),
                              n)
                            : new e(t.east, t.north);
                    }),
                    (s.southeast = function (t, n) {
                        return r(n)
                            ? ((n.longitude = t.east),
                              (n.latitude = t.south),
                              (n.height = 0),
                              n)
                            : new e(t.east, t.south);
                    }),
                    (s.center = function (t, n) {
                        var a = t.east,
                            i = t.west;
                        a < i && (a += u.TWO_PI);
                        var o = u.negativePiToPi(0.5 * (i + a)),
                            s = 0.5 * (t.south + t.north);
                        return r(n)
                            ? ((n.longitude = o),
                              (n.latitude = s),
                              (n.height = 0),
                              n)
                            : new e(o, s);
                    }),
                    (s.intersection = function (e, t, n) {
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
                                return r(n)
                                    ? ((n.west = l),
                                      (n.south = f),
                                      (n.east = E),
                                      (n.north = h),
                                      n)
                                    : new s(l, f, E, h);
                        }
                    }),
                    (s.simpleIntersection = function (e, t, n) {
                        var a = Math.max(e.west, t.west),
                            i = Math.max(e.south, t.south),
                            o = Math.min(e.east, t.east),
                            u = Math.min(e.north, t.north);
                        if (!(i >= u || a >= o))
                            return r(n)
                                ? ((n.west = a),
                                  (n.south = i),
                                  (n.east = o),
                                  (n.north = u),
                                  n)
                                : new s(a, i, o, u);
                    }),
                    (s.union = function (e, t, n) {
                        r(n) || (n = new s());
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
                            (n.west = l),
                            (n.south = Math.min(e.south, t.south)),
                            (n.east = E),
                            (n.north = Math.max(e.north, t.north)),
                            n
                        );
                    }),
                    (s.expand = function (e, t, n) {
                        return (
                            r(n) || (n = new s()),
                            (n.west = Math.min(e.west, t.longitude)),
                            (n.south = Math.min(e.south, t.latitude)),
                            (n.east = Math.max(e.east, t.longitude)),
                            (n.north = Math.max(e.north, t.latitude)),
                            n
                        );
                    }),
                    (s.contains = function (e, t) {
                        var n = t.longitude,
                            r = t.latitude,
                            a = e.west,
                            i = e.east;
                        return (
                            i < a &&
                                ((i += u.TWO_PI), n < 0 && (n += u.TWO_PI)),
                            (n > a || u.equalsEpsilon(n, a, u.EPSILON14)) &&
                                (n < i || u.equalsEpsilon(n, i, u.EPSILON14)) &&
                                r >= e.south &&
                                r <= e.north
                        );
                    });
                var c = new e();
                return (
                    (s.subsample = function (e, t, a, o) {
                        (t = n(t, i.WGS84)), (a = n(a, 0)), r(o) || (o = []);
                        var l = 0,
                            E = e.north,
                            f = e.south,
                            h = e.east,
                            d = e.west,
                            p = c;
                        (p.height = a),
                            (p.longitude = d),
                            (p.latitude = E),
                            (o[l] = t.cartographicToCartesian(p, o[l])),
                            l++,
                            (p.longitude = h),
                            (o[l] = t.cartographicToCartesian(p, o[l])),
                            l++,
                            (p.latitude = f),
                            (o[l] = t.cartographicToCartesian(p, o[l])),
                            l++,
                            (p.longitude = d),
                            (o[l] = t.cartographicToCartesian(p, o[l])),
                            l++,
                            (p.latitude = E < 0 ? E : f > 0 ? f : 0);
                        for (var y = 1; y < 8; ++y)
                            (p.longitude = -Math.PI + y * u.PI_OVER_TWO),
                                s.contains(e, p) &&
                                    ((o[l] = t.cartographicToCartesian(
                                        p,
                                        o[l],
                                    )),
                                    l++);
                        return (
                            0 === p.latitude &&
                                ((p.longitude = d),
                                (o[l] = t.cartographicToCartesian(p, o[l])),
                                l++,
                                (p.longitude = h),
                                (o[l] = t.cartographicToCartesian(p, o[l])),
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
            function (e, t, n, r, a, i, o) {
                'use strict';
                function u(e) {
                    (this._ellipsoid = n(e, o.WGS84)),
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
                    (u.prototype.project = function (t, n) {
                        var a = this._semimajorAxis,
                            i = t.longitude * a,
                            o = t.latitude * a,
                            u = t.height;
                        return r(n)
                            ? ((n.x = i), (n.y = o), (n.z = u), n)
                            : new e(i, o, u);
                    }),
                    (u.prototype.unproject = function (e, n) {
                        var a = this._oneOverSemimajorAxis,
                            i = e.x * a,
                            o = e.y * a,
                            u = e.z;
                        return r(n)
                            ? ((n.longitude = i),
                              (n.latitude = o),
                              (n.height = u),
                              n)
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
            function t(t, n) {
                (this.start = e(t, 0)), (this.stop = e(n, 0));
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
            function (e, t, n, r, a, i, o, u) {
                'use strict';
                function s(e, t, r, a, i, o, u, s, c) {
                    (this[0] = n(e, 0)),
                        (this[1] = n(a, 0)),
                        (this[2] = n(u, 0)),
                        (this[3] = n(t, 0)),
                        (this[4] = n(i, 0)),
                        (this[5] = n(s, 0)),
                        (this[6] = n(r, 0)),
                        (this[7] = n(o, 0)),
                        (this[8] = n(c, 0));
                }
                function c(e) {
                    for (var t = 0, n = 0; n < 9; ++n) {
                        var r = e[n];
                        t += r * r;
                    }
                    return Math.sqrt(t);
                }
                function l(e) {
                    for (var t = 0, n = 0; n < 3; ++n) {
                        var r = e[s.getElementIndex(p[n], d[n])];
                        t += 2 * r * r;
                    }
                    return Math.sqrt(t);
                }
                function E(e, t) {
                    for (var n = u.EPSILON15, r = 0, a = 1, i = 0; i < 3; ++i) {
                        var o = Math.abs(e[s.getElementIndex(p[i], d[i])]);
                        o > r && ((a = i), (r = o));
                    }
                    var c = 1,
                        l = 0,
                        E = d[a],
                        f = p[a];
                    if (Math.abs(e[s.getElementIndex(f, E)]) > n) {
                        var h,
                            y = e[s.getElementIndex(f, f)],
                            _ = e[s.getElementIndex(E, E)],
                            m = e[s.getElementIndex(f, E)],
                            T = (y - _) / 2 / m;
                        (h =
                            T < 0
                                ? -1 / (-T + Math.sqrt(1 + T * T))
                                : 1 / (T + Math.sqrt(1 + T * T))),
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
                    (s.pack = function (e, t, r) {
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
                            t
                        );
                    }),
                    (s.unpack = function (e, t, a) {
                        return (
                            (t = n(t, 0)),
                            r(a) || (a = new s()),
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
                        if (r(e))
                            return r(t)
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
                            (t = n(t, 0)),
                            r(a) || (a = new s()),
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
                        return r(t)
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
                        var n = e.x * e.x,
                            a = e.x * e.y,
                            i = e.x * e.z,
                            o = e.x * e.w,
                            u = e.y * e.y,
                            c = e.y * e.z,
                            l = e.y * e.w,
                            E = e.z * e.z,
                            f = e.z * e.w,
                            h = e.w * e.w,
                            d = n - u - E + h,
                            p = 2 * (a - f),
                            y = 2 * (i + l),
                            _ = 2 * (a + f),
                            m = -n + u - E + h,
                            T = 2 * (c - o),
                            R = 2 * (i - l),
                            A = 2 * (c + o),
                            v = -n - u + E + h;
                        return r(t)
                            ? ((t[0] = d),
                              (t[1] = _),
                              (t[2] = R),
                              (t[3] = p),
                              (t[4] = m),
                              (t[5] = A),
                              (t[6] = y),
                              (t[7] = T),
                              (t[8] = v),
                              t)
                            : new s(d, p, y, _, m, T, R, A, v);
                    }),
                    (s.fromHeadingPitchRoll = function (e, t) {
                        var n = Math.cos(-e.pitch),
                            a = Math.cos(-e.heading),
                            i = Math.cos(e.roll),
                            o = Math.sin(-e.pitch),
                            u = Math.sin(-e.heading),
                            c = Math.sin(e.roll),
                            l = n * a,
                            E = -i * u + c * o * a,
                            f = c * u + i * o * a,
                            h = n * u,
                            d = i * a + c * o * u,
                            p = -c * a + i * o * u,
                            y = -o,
                            _ = c * n,
                            m = i * n;
                        return r(t)
                            ? ((t[0] = l),
                              (t[1] = h),
                              (t[2] = y),
                              (t[3] = E),
                              (t[4] = d),
                              (t[5] = _),
                              (t[6] = f),
                              (t[7] = p),
                              (t[8] = m),
                              t)
                            : new s(l, E, f, h, d, p, y, _, m);
                    }),
                    (s.fromScale = function (e, t) {
                        return r(t)
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
                        return r(t)
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
                        return r(t)
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
                        var n = Math.cos(e),
                            a = Math.sin(e);
                        return r(t)
                            ? ((t[0] = 1),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = 0),
                              (t[4] = n),
                              (t[5] = a),
                              (t[6] = 0),
                              (t[7] = -a),
                              (t[8] = n),
                              t)
                            : new s(1, 0, 0, 0, n, -a, 0, a, n);
                    }),
                    (s.fromRotationY = function (e, t) {
                        var n = Math.cos(e),
                            a = Math.sin(e);
                        return r(t)
                            ? ((t[0] = n),
                              (t[1] = 0),
                              (t[2] = -a),
                              (t[3] = 0),
                              (t[4] = 1),
                              (t[5] = 0),
                              (t[6] = a),
                              (t[7] = 0),
                              (t[8] = n),
                              t)
                            : new s(n, 0, a, 0, 1, 0, -a, 0, n);
                    }),
                    (s.fromRotationZ = function (e, t) {
                        var n = Math.cos(e),
                            a = Math.sin(e);
                        return r(t)
                            ? ((t[0] = n),
                              (t[1] = a),
                              (t[2] = 0),
                              (t[3] = -a),
                              (t[4] = n),
                              (t[5] = 0),
                              (t[6] = 0),
                              (t[7] = 0),
                              (t[8] = 1),
                              t)
                            : new s(n, -a, 0, a, n, 0, 0, 0, 1);
                    }),
                    (s.toArray = function (e, t) {
                        return r(t)
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
                    (s.getColumn = function (e, t, n) {
                        var r = 3 * t,
                            a = e[r],
                            i = e[r + 1],
                            o = e[r + 2];
                        return (n.x = a), (n.y = i), (n.z = o), n;
                    }),
                    (s.setColumn = function (e, t, n, r) {
                        r = s.clone(e, r);
                        var a = 3 * t;
                        return (
                            (r[a] = n.x), (r[a + 1] = n.y), (r[a + 2] = n.z), r
                        );
                    }),
                    (s.getRow = function (e, t, n) {
                        var r = e[t],
                            a = e[t + 3],
                            i = e[t + 6];
                        return (n.x = r), (n.y = a), (n.z = i), n;
                    }),
                    (s.setRow = function (e, t, n, r) {
                        return (
                            (r = s.clone(e, r)),
                            (r[t] = n.x),
                            (r[t + 3] = n.y),
                            (r[t + 6] = n.z),
                            r
                        );
                    });
                var f = new e();
                s.getScale = function (t, n) {
                    return (
                        (n.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], f),
                        )),
                        (n.y = e.magnitude(
                            e.fromElements(t[3], t[4], t[5], f),
                        )),
                        (n.z = e.magnitude(
                            e.fromElements(t[6], t[7], t[8], f),
                        )),
                        n
                    );
                };
                var h = new e();
                (s.getMaximumScale = function (t) {
                    return s.getScale(t, h), e.maximumComponent(h);
                }),
                    (s.multiply = function (e, t, n) {
                        var r = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
                            a = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                            i = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                            o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                            u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                            s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                            c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                            l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                            E = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                        return (
                            (n[0] = r),
                            (n[1] = a),
                            (n[2] = i),
                            (n[3] = o),
                            (n[4] = u),
                            (n[5] = s),
                            (n[6] = c),
                            (n[7] = l),
                            (n[8] = E),
                            n
                        );
                    }),
                    (s.add = function (e, t, n) {
                        return (
                            (n[0] = e[0] + t[0]),
                            (n[1] = e[1] + t[1]),
                            (n[2] = e[2] + t[2]),
                            (n[3] = e[3] + t[3]),
                            (n[4] = e[4] + t[4]),
                            (n[5] = e[5] + t[5]),
                            (n[6] = e[6] + t[6]),
                            (n[7] = e[7] + t[7]),
                            (n[8] = e[8] + t[8]),
                            n
                        );
                    }),
                    (s.subtract = function (e, t, n) {
                        return (
                            (n[0] = e[0] - t[0]),
                            (n[1] = e[1] - t[1]),
                            (n[2] = e[2] - t[2]),
                            (n[3] = e[3] - t[3]),
                            (n[4] = e[4] - t[4]),
                            (n[5] = e[5] - t[5]),
                            (n[6] = e[6] - t[6]),
                            (n[7] = e[7] - t[7]),
                            (n[8] = e[8] - t[8]),
                            n
                        );
                    }),
                    (s.multiplyByVector = function (e, t, n) {
                        var r = t.x,
                            a = t.y,
                            i = t.z,
                            o = e[0] * r + e[3] * a + e[6] * i,
                            u = e[1] * r + e[4] * a + e[7] * i,
                            s = e[2] * r + e[5] * a + e[8] * i;
                        return (n.x = o), (n.y = u), (n.z = s), n;
                    }),
                    (s.multiplyByScalar = function (e, t, n) {
                        return (
                            (n[0] = e[0] * t),
                            (n[1] = e[1] * t),
                            (n[2] = e[2] * t),
                            (n[3] = e[3] * t),
                            (n[4] = e[4] * t),
                            (n[5] = e[5] * t),
                            (n[6] = e[6] * t),
                            (n[7] = e[7] * t),
                            (n[8] = e[8] * t),
                            n
                        );
                    }),
                    (s.multiplyByScale = function (e, t, n) {
                        return (
                            (n[0] = e[0] * t.x),
                            (n[1] = e[1] * t.x),
                            (n[2] = e[2] * t.x),
                            (n[3] = e[3] * t.y),
                            (n[4] = e[4] * t.y),
                            (n[5] = e[5] * t.y),
                            (n[6] = e[6] * t.z),
                            (n[7] = e[7] * t.z),
                            (n[8] = e[8] * t.z),
                            n
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
                        var n = e[0],
                            r = e[3],
                            a = e[6],
                            i = e[1],
                            o = e[4],
                            u = e[7],
                            s = e[2],
                            c = e[5],
                            l = e[8];
                        return (
                            (t[0] = n),
                            (t[1] = r),
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
                    p = [2, 2, 1],
                    y = new s(),
                    _ = new s();
                return (
                    (s.computeEigenDecomposition = function (e, t) {
                        var n = u.EPSILON20,
                            a = 0,
                            i = 0;
                        r(t) || (t = {});
                        for (
                            var o = (t.unitary = s.clone(
                                    s.IDENTITY,
                                    t.unitary,
                                )),
                                f = (t.diagonal = s.clone(e, t.diagonal)),
                                h = n * c(f);
                            i < 10 && l(f) > h;

                        )
                            E(f, y),
                                s.transpose(y, _),
                                s.multiply(f, y, f),
                                s.multiply(_, f, f),
                                s.multiply(o, y, o),
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
                            n = e[3],
                            r = e[6],
                            a = e[1],
                            i = e[4],
                            o = e[7],
                            u = e[2],
                            s = e[5],
                            c = e[8];
                        return (
                            t * (i * c - s * o) +
                            a * (s * r - n * c) +
                            u * (n * o - i * r)
                        );
                    }),
                    (s.inverse = function (e, t) {
                        var n = e[0],
                            r = e[1],
                            a = e[2],
                            i = e[3],
                            o = e[4],
                            u = e[5],
                            c = e[6],
                            l = e[7],
                            E = e[8],
                            f = s.determinant(e);
                        (t[0] = o * E - l * u),
                            (t[1] = l * a - r * E),
                            (t[2] = r * u - o * a),
                            (t[3] = c * u - i * E),
                            (t[4] = n * E - c * a),
                            (t[5] = i * a - n * u),
                            (t[6] = i * l - c * o),
                            (t[7] = c * r - n * l),
                            (t[8] = n * o - i * r);
                        var h = 1 / f;
                        return s.multiplyByScalar(t, h, t);
                    }),
                    (s.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
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
                    (s.equalsEpsilon = function (e, t, n) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                Math.abs(e[0] - t[0]) <= n &&
                                Math.abs(e[1] - t[1]) <= n &&
                                Math.abs(e[2] - t[2]) <= n &&
                                Math.abs(e[3] - t[3]) <= n &&
                                Math.abs(e[4] - t[4]) <= n &&
                                Math.abs(e[5] - t[5]) <= n &&
                                Math.abs(e[6] - t[6]) <= n &&
                                Math.abs(e[7] - t[7]) <= n &&
                                Math.abs(e[8] - t[8]) <= n)
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
                    (s.equalsArray = function (e, t, n) {
                        return (
                            e[0] === t[n] &&
                            e[1] === t[n + 1] &&
                            e[2] === t[n + 2] &&
                            e[3] === t[n + 3] &&
                            e[4] === t[n + 4] &&
                            e[5] === t[n + 5] &&
                            e[6] === t[n + 6] &&
                            e[7] === t[n + 7] &&
                            e[8] === t[n + 8]
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
            function (e, t, n, r, a, i) {
                'use strict';
                function o(e, n, r, a) {
                    (this.x = t(e, 0)),
                        (this.y = t(n, 0)),
                        (this.z = t(r, 0)),
                        (this.w = t(a, 0));
                }
                (o.fromElements = function (e, t, r, a, i) {
                    return n(i)
                        ? ((i.x = e), (i.y = t), (i.z = r), (i.w = a), i)
                        : new o(e, t, r, a);
                }),
                    (o.fromColor = function (e, t) {
                        return n(t)
                            ? ((t.x = e.red),
                              (t.y = e.green),
                              (t.z = e.blue),
                              (t.w = e.alpha),
                              t)
                            : new o(e.red, e.green, e.blue, e.alpha);
                    }),
                    (o.clone = function (e, t) {
                        if (n(e))
                            return n(t)
                                ? ((t.x = e.x),
                                  (t.y = e.y),
                                  (t.z = e.z),
                                  (t.w = e.w),
                                  t)
                                : new o(e.x, e.y, e.z, e.w);
                    }),
                    (o.packedLength = 4),
                    (o.pack = function (e, n, r) {
                        return (
                            (r = t(r, 0)),
                            (n[r++] = e.x),
                            (n[r++] = e.y),
                            (n[r++] = e.z),
                            (n[r] = e.w),
                            n
                        );
                    }),
                    (o.unpack = function (e, r, a) {
                        return (
                            (r = t(r, 0)),
                            n(a) || (a = new o()),
                            (a.x = e[r++]),
                            (a.y = e[r++]),
                            (a.z = e[r++]),
                            (a.w = e[r]),
                            a
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = 4 * r) : (t = new Array(4 * r));
                        for (var a = 0; a < r; ++a) o.pack(e[a], t, 4 * a);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = r / 4) : (t = new Array(r / 4));
                        for (var a = 0; a < r; a += 4) {
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
                    (o.minimumByComponent = function (e, t, n) {
                        return (
                            (n.x = Math.min(e.x, t.x)),
                            (n.y = Math.min(e.y, t.y)),
                            (n.z = Math.min(e.z, t.z)),
                            (n.w = Math.min(e.w, t.w)),
                            n
                        );
                    }),
                    (o.maximumByComponent = function (e, t, n) {
                        return (
                            (n.x = Math.max(e.x, t.x)),
                            (n.y = Math.max(e.y, t.y)),
                            (n.z = Math.max(e.z, t.z)),
                            (n.w = Math.max(e.w, t.w)),
                            n
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
                        var n = o.magnitude(e);
                        return (
                            (t.x = e.x / n),
                            (t.y = e.y / n),
                            (t.z = e.z / n),
                            (t.w = e.w / n),
                            t
                        );
                    }),
                    (o.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                    }),
                    (o.multiplyComponents = function (e, t, n) {
                        return (
                            (n.x = e.x * t.x),
                            (n.y = e.y * t.y),
                            (n.z = e.z * t.z),
                            (n.w = e.w * t.w),
                            n
                        );
                    }),
                    (o.divideComponents = function (e, t, n) {
                        return (
                            (n.x = e.x / t.x),
                            (n.y = e.y / t.y),
                            (n.z = e.z / t.z),
                            (n.w = e.w / t.w),
                            n
                        );
                    }),
                    (o.add = function (e, t, n) {
                        return (
                            (n.x = e.x + t.x),
                            (n.y = e.y + t.y),
                            (n.z = e.z + t.z),
                            (n.w = e.w + t.w),
                            n
                        );
                    }),
                    (o.subtract = function (e, t, n) {
                        return (
                            (n.x = e.x - t.x),
                            (n.y = e.y - t.y),
                            (n.z = e.z - t.z),
                            (n.w = e.w - t.w),
                            n
                        );
                    }),
                    (o.multiplyByScalar = function (e, t, n) {
                        return (
                            (n.x = e.x * t),
                            (n.y = e.y * t),
                            (n.z = e.z * t),
                            (n.w = e.w * t),
                            n
                        );
                    }),
                    (o.divideByScalar = function (e, t, n) {
                        return (
                            (n.x = e.x / t),
                            (n.y = e.y / t),
                            (n.z = e.z / t),
                            (n.w = e.w / t),
                            n
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
                o.lerp = function (e, t, n, r) {
                    return (
                        o.multiplyByScalar(t, n, s),
                        (r = o.multiplyByScalar(e, 1 - n, r)),
                        o.add(s, r, r)
                    );
                };
                var c = new o();
                return (
                    (o.mostOrthogonalAxis = function (e, t) {
                        var n = o.normalize(e, c);
                        return (
                            o.abs(n, n),
                            (t =
                                n.x <= n.y
                                    ? n.x <= n.z
                                        ? n.x <= n.w
                                            ? o.clone(o.UNIT_X, t)
                                            : o.clone(o.UNIT_W, t)
                                        : n.z <= n.w
                                          ? o.clone(o.UNIT_Z, t)
                                          : o.clone(o.UNIT_W, t)
                                    : n.y <= n.z
                                      ? n.y <= n.w
                                          ? o.clone(o.UNIT_Y, t)
                                          : o.clone(o.UNIT_W, t)
                                      : n.z <= n.w
                                        ? o.clone(o.UNIT_Z, t)
                                        : o.clone(o.UNIT_W, t))
                        );
                    }),
                    (o.equals = function (e, t) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                e.x === t.x &&
                                e.y === t.y &&
                                e.z === t.z &&
                                e.w === t.w)
                        );
                    }),
                    (o.equalsArray = function (e, t, n) {
                        return (
                            e.x === t[n] &&
                            e.y === t[n + 1] &&
                            e.z === t[n + 2] &&
                            e.w === t[n + 3]
                        );
                    }),
                    (o.equalsEpsilon = function (e, t, r, a) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                i.equalsEpsilon(e.x, t.x, r, a) &&
                                i.equalsEpsilon(e.y, t.y, r, a) &&
                                i.equalsEpsilon(e.z, t.z, r, a) &&
                                i.equalsEpsilon(e.w, t.w, r, a))
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
                    (o.prototype.equalsEpsilon = function (e, t, n) {
                        return o.equalsEpsilon(this, e, t, n);
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
            function (e, t, n, r, a, i, o, u, s, c) {
                'use strict';
                function l(e, t, n, a, i, o, u, s, c, l, E, f, h, d, p, y) {
                    (this[0] = r(e, 0)),
                        (this[1] = r(i, 0)),
                        (this[2] = r(c, 0)),
                        (this[3] = r(h, 0)),
                        (this[4] = r(t, 0)),
                        (this[5] = r(o, 0)),
                        (this[6] = r(l, 0)),
                        (this[7] = r(d, 0)),
                        (this[8] = r(n, 0)),
                        (this[9] = r(u, 0)),
                        (this[10] = r(E, 0)),
                        (this[11] = r(p, 0)),
                        (this[12] = r(a, 0)),
                        (this[13] = r(s, 0)),
                        (this[14] = r(f, 0)),
                        (this[15] = r(y, 0));
                }
                (l.packedLength = 16),
                    (l.pack = function (e, t, n) {
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
                            (t[n++] = e[9]),
                            (t[n++] = e[10]),
                            (t[n++] = e[11]),
                            (t[n++] = e[12]),
                            (t[n++] = e[13]),
                            (t[n++] = e[14]),
                            (t[n] = e[15]),
                            t
                        );
                    }),
                    (l.unpack = function (e, t, n) {
                        return (
                            (t = r(t, 0)),
                            a(n) || (n = new l()),
                            (n[0] = e[t++]),
                            (n[1] = e[t++]),
                            (n[2] = e[t++]),
                            (n[3] = e[t++]),
                            (n[4] = e[t++]),
                            (n[5] = e[t++]),
                            (n[6] = e[t++]),
                            (n[7] = e[t++]),
                            (n[8] = e[t++]),
                            (n[9] = e[t++]),
                            (n[10] = e[t++]),
                            (n[11] = e[t++]),
                            (n[12] = e[t++]),
                            (n[13] = e[t++]),
                            (n[14] = e[t++]),
                            (n[15] = e[t]),
                            n
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
                    (l.fromRotationTranslation = function (t, n, i) {
                        return (
                            (n = r(n, e.ZERO)),
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
                                  (i[12] = n.x),
                                  (i[13] = n.y),
                                  (i[14] = n.z),
                                  (i[15] = 1),
                                  i)
                                : new l(
                                      t[0],
                                      t[3],
                                      t[6],
                                      n.x,
                                      t[1],
                                      t[4],
                                      t[7],
                                      n.y,
                                      t[2],
                                      t[5],
                                      t[8],
                                      n.z,
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
                        n,
                        r,
                    ) {
                        a(r) || (r = new l());
                        var i = n.x,
                            o = n.y,
                            u = n.z,
                            s = t.x * t.x,
                            c = t.x * t.y,
                            E = t.x * t.z,
                            f = t.x * t.w,
                            h = t.y * t.y,
                            d = t.y * t.z,
                            p = t.y * t.w,
                            y = t.z * t.z,
                            _ = t.z * t.w,
                            m = t.w * t.w,
                            T = s - h - y + m,
                            R = 2 * (c - _),
                            A = 2 * (E + p),
                            v = 2 * (c + _),
                            S = -s + h - y + m,
                            N = 2 * (d - f),
                            g = 2 * (E - p),
                            I = 2 * (d + f),
                            M = -s - h + y + m;
                        return (
                            (r[0] = T * i),
                            (r[1] = v * i),
                            (r[2] = g * i),
                            (r[3] = 0),
                            (r[4] = R * o),
                            (r[5] = S * o),
                            (r[6] = I * o),
                            (r[7] = 0),
                            (r[8] = A * u),
                            (r[9] = N * u),
                            (r[10] = M * u),
                            (r[11] = 0),
                            (r[12] = e.x),
                            (r[13] = e.y),
                            (r[14] = e.z),
                            (r[15] = 1),
                            r
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
                (l.fromCamera = function (t, n) {
                    var r = t.position,
                        i = t.direction,
                        o = t.up;
                    e.normalize(i, E),
                        e.normalize(e.cross(E, o, f), f),
                        e.normalize(e.cross(f, E, h), h);
                    var u = f.x,
                        s = f.y,
                        c = f.z,
                        d = E.x,
                        p = E.y,
                        y = E.z,
                        _ = h.x,
                        m = h.y,
                        T = h.z,
                        R = r.x,
                        A = r.y,
                        v = r.z,
                        S = u * -R + s * -A + c * -v,
                        N = _ * -R + m * -A + T * -v,
                        g = d * R + p * A + y * v;
                    return a(n)
                        ? ((n[0] = u),
                          (n[1] = _),
                          (n[2] = -d),
                          (n[3] = 0),
                          (n[4] = s),
                          (n[5] = m),
                          (n[6] = -p),
                          (n[7] = 0),
                          (n[8] = c),
                          (n[9] = T),
                          (n[10] = -y),
                          (n[11] = 0),
                          (n[12] = S),
                          (n[13] = N),
                          (n[14] = g),
                          (n[15] = 1),
                          n)
                        : new l(
                              u,
                              s,
                              c,
                              S,
                              _,
                              m,
                              T,
                              N,
                              -d,
                              -p,
                              -y,
                              g,
                              0,
                              0,
                              0,
                              1,
                          );
                }),
                    (l.computePerspectiveFieldOfView = function (
                        e,
                        t,
                        n,
                        r,
                        a,
                    ) {
                        var i = Math.tan(0.5 * e),
                            o = 1 / i,
                            u = o / t,
                            s = (r + n) / (n - r),
                            c = (2 * r * n) / (n - r);
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
                        n,
                        r,
                        a,
                        i,
                        o,
                    ) {
                        var u = 1 / (t - e),
                            s = 1 / (r - n),
                            c = 1 / (i - a),
                            l = -(t + e) * u,
                            E = -(r + n) * s,
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
                        n,
                        r,
                        a,
                        i,
                        o,
                    ) {
                        var u = (2 * a) / (t - e),
                            s = (2 * a) / (r - n),
                            c = (t + e) / (t - e),
                            l = (r + n) / (r - n),
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
                        n,
                        r,
                        a,
                        i,
                    ) {
                        var o = (2 * a) / (t - e),
                            u = (2 * a) / (r - n),
                            s = (t + e) / (t - e),
                            c = (r + n) / (r - n),
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
                    (l.computeViewportTransformation = function (e, t, n, a) {
                        e = r(e, r.EMPTY_OBJECT);
                        var i = r(e.x, 0),
                            o = r(e.y, 0),
                            u = r(e.width, 0),
                            s = r(e.height, 0);
                        (t = r(t, 0)), (n = r(n, 1));
                        var c = 0.5 * u,
                            l = 0.5 * s,
                            E = 0.5 * (n - t),
                            f = c,
                            h = l,
                            d = E,
                            p = i + c,
                            y = o + l,
                            _ = t + E;
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
                            (a[12] = p),
                            (a[13] = y),
                            (a[14] = _),
                            (a[15] = 1),
                            a
                        );
                    }),
                    (l.computeView = function (t, n, r, a, i) {
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
                            (i[12] = -e.dot(a, t)),
                            (i[13] = -e.dot(r, t)),
                            (i[14] = e.dot(n, t)),
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
                    (l.getColumn = function (e, t, n) {
                        var r = 4 * t,
                            a = e[r],
                            i = e[r + 1],
                            o = e[r + 2],
                            u = e[r + 3];
                        return (n.x = a), (n.y = i), (n.z = o), (n.w = u), n;
                    }),
                    (l.setColumn = function (e, t, n, r) {
                        r = l.clone(e, r);
                        var a = 4 * t;
                        return (
                            (r[a] = n.x),
                            (r[a + 1] = n.y),
                            (r[a + 2] = n.z),
                            (r[a + 3] = n.w),
                            r
                        );
                    }),
                    (l.setTranslation = function (e, t, n) {
                        return (
                            (n[0] = e[0]),
                            (n[1] = e[1]),
                            (n[2] = e[2]),
                            (n[3] = e[3]),
                            (n[4] = e[4]),
                            (n[5] = e[5]),
                            (n[6] = e[6]),
                            (n[7] = e[7]),
                            (n[8] = e[8]),
                            (n[9] = e[9]),
                            (n[10] = e[10]),
                            (n[11] = e[11]),
                            (n[12] = t.x),
                            (n[13] = t.y),
                            (n[14] = t.z),
                            (n[15] = e[15]),
                            n
                        );
                    }),
                    (l.getRow = function (e, t, n) {
                        var r = e[t],
                            a = e[t + 4],
                            i = e[t + 8],
                            o = e[t + 12];
                        return (n.x = r), (n.y = a), (n.z = i), (n.w = o), n;
                    }),
                    (l.setRow = function (e, t, n, r) {
                        return (
                            (r = l.clone(e, r)),
                            (r[t] = n.x),
                            (r[t + 4] = n.y),
                            (r[t + 8] = n.z),
                            (r[t + 12] = n.w),
                            r
                        );
                    });
                var d = new e();
                l.getScale = function (t, n) {
                    return (
                        (n.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], d),
                        )),
                        (n.y = e.magnitude(
                            e.fromElements(t[4], t[5], t[6], d),
                        )),
                        (n.z = e.magnitude(
                            e.fromElements(t[8], t[9], t[10], d),
                        )),
                        n
                    );
                };
                var p = new e();
                (l.getMaximumScale = function (t) {
                    return l.getScale(t, p), e.maximumComponent(p);
                }),
                    (l.multiply = function (e, t, n) {
                        var r = e[0],
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
                            p = e[12],
                            y = e[13],
                            _ = e[14],
                            m = e[15],
                            T = t[0],
                            R = t[1],
                            A = t[2],
                            v = t[3],
                            S = t[4],
                            N = t[5],
                            g = t[6],
                            I = t[7],
                            M = t[8],
                            O = t[9],
                            x = t[10],
                            w = t[11],
                            C = t[12],
                            P = t[13],
                            L = t[14],
                            b = t[15],
                            U = r * T + u * R + E * A + p * v,
                            F = a * T + s * R + f * A + y * v,
                            D = i * T + c * R + h * A + _ * v,
                            B = o * T + l * R + d * A + m * v,
                            z = r * S + u * N + E * g + p * I,
                            G = a * S + s * N + f * g + y * I,
                            q = i * S + c * N + h * g + _ * I,
                            V = o * S + l * N + d * g + m * I,
                            X = r * M + u * O + E * x + p * w,
                            W = a * M + s * O + f * x + y * w,
                            H = i * M + c * O + h * x + _ * w,
                            Y = o * M + l * O + d * x + m * w,
                            k = r * C + u * P + E * L + p * b,
                            Z = a * C + s * P + f * L + y * b,
                            K = i * C + c * P + h * L + _ * b,
                            j = o * C + l * P + d * L + m * b;
                        return (
                            (n[0] = U),
                            (n[1] = F),
                            (n[2] = D),
                            (n[3] = B),
                            (n[4] = z),
                            (n[5] = G),
                            (n[6] = q),
                            (n[7] = V),
                            (n[8] = X),
                            (n[9] = W),
                            (n[10] = H),
                            (n[11] = Y),
                            (n[12] = k),
                            (n[13] = Z),
                            (n[14] = K),
                            (n[15] = j),
                            n
                        );
                    }),
                    (l.add = function (e, t, n) {
                        return (
                            (n[0] = e[0] + t[0]),
                            (n[1] = e[1] + t[1]),
                            (n[2] = e[2] + t[2]),
                            (n[3] = e[3] + t[3]),
                            (n[4] = e[4] + t[4]),
                            (n[5] = e[5] + t[5]),
                            (n[6] = e[6] + t[6]),
                            (n[7] = e[7] + t[7]),
                            (n[8] = e[8] + t[8]),
                            (n[9] = e[9] + t[9]),
                            (n[10] = e[10] + t[10]),
                            (n[11] = e[11] + t[11]),
                            (n[12] = e[12] + t[12]),
                            (n[13] = e[13] + t[13]),
                            (n[14] = e[14] + t[14]),
                            (n[15] = e[15] + t[15]),
                            n
                        );
                    }),
                    (l.subtract = function (e, t, n) {
                        return (
                            (n[0] = e[0] - t[0]),
                            (n[1] = e[1] - t[1]),
                            (n[2] = e[2] - t[2]),
                            (n[3] = e[3] - t[3]),
                            (n[4] = e[4] - t[4]),
                            (n[5] = e[5] - t[5]),
                            (n[6] = e[6] - t[6]),
                            (n[7] = e[7] - t[7]),
                            (n[8] = e[8] - t[8]),
                            (n[9] = e[9] - t[9]),
                            (n[10] = e[10] - t[10]),
                            (n[11] = e[11] - t[11]),
                            (n[12] = e[12] - t[12]),
                            (n[13] = e[13] - t[13]),
                            (n[14] = e[14] - t[14]),
                            (n[15] = e[15] - t[15]),
                            n
                        );
                    }),
                    (l.multiplyTransformation = function (e, t, n) {
                        var r = e[0],
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
                            p = t[0],
                            y = t[1],
                            _ = t[2],
                            m = t[4],
                            T = t[5],
                            R = t[6],
                            A = t[8],
                            v = t[9],
                            S = t[10],
                            N = t[12],
                            g = t[13],
                            I = t[14],
                            M = r * p + o * y + c * _,
                            O = a * p + u * y + l * _,
                            x = i * p + s * y + E * _,
                            w = r * m + o * T + c * R,
                            C = a * m + u * T + l * R,
                            P = i * m + s * T + E * R,
                            L = r * A + o * v + c * S,
                            b = a * A + u * v + l * S,
                            U = i * A + s * v + E * S,
                            F = r * N + o * g + c * I + f,
                            D = a * N + u * g + l * I + h,
                            B = i * N + s * g + E * I + d;
                        return (
                            (n[0] = M),
                            (n[1] = O),
                            (n[2] = x),
                            (n[3] = 0),
                            (n[4] = w),
                            (n[5] = C),
                            (n[6] = P),
                            (n[7] = 0),
                            (n[8] = L),
                            (n[9] = b),
                            (n[10] = U),
                            (n[11] = 0),
                            (n[12] = F),
                            (n[13] = D),
                            (n[14] = B),
                            (n[15] = 1),
                            n
                        );
                    }),
                    (l.multiplyByMatrix3 = function (e, t, n) {
                        var r = e[0],
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
                            p = t[3],
                            y = t[4],
                            _ = t[5],
                            m = t[6],
                            T = t[7],
                            R = t[8],
                            A = r * f + o * h + c * d,
                            v = a * f + u * h + l * d,
                            S = i * f + s * h + E * d,
                            N = r * p + o * y + c * _,
                            g = a * p + u * y + l * _,
                            I = i * p + s * y + E * _,
                            M = r * m + o * T + c * R,
                            O = a * m + u * T + l * R,
                            x = i * m + s * T + E * R;
                        return (
                            (n[0] = A),
                            (n[1] = v),
                            (n[2] = S),
                            (n[3] = 0),
                            (n[4] = N),
                            (n[5] = g),
                            (n[6] = I),
                            (n[7] = 0),
                            (n[8] = M),
                            (n[9] = O),
                            (n[10] = x),
                            (n[11] = 0),
                            (n[12] = e[12]),
                            (n[13] = e[13]),
                            (n[14] = e[14]),
                            (n[15] = e[15]),
                            n
                        );
                    }),
                    (l.multiplyByTranslation = function (e, t, n) {
                        var r = t.x,
                            a = t.y,
                            i = t.z,
                            o = r * e[0] + a * e[4] + i * e[8] + e[12],
                            u = r * e[1] + a * e[5] + i * e[9] + e[13],
                            s = r * e[2] + a * e[6] + i * e[10] + e[14];
                        return (
                            (n[0] = e[0]),
                            (n[1] = e[1]),
                            (n[2] = e[2]),
                            (n[3] = e[3]),
                            (n[4] = e[4]),
                            (n[5] = e[5]),
                            (n[6] = e[6]),
                            (n[7] = e[7]),
                            (n[8] = e[8]),
                            (n[9] = e[9]),
                            (n[10] = e[10]),
                            (n[11] = e[11]),
                            (n[12] = o),
                            (n[13] = u),
                            (n[14] = s),
                            (n[15] = e[15]),
                            n
                        );
                    });
                var y = new e();
                (l.multiplyByUniformScale = function (e, t, n) {
                    return (
                        (y.x = t),
                        (y.y = t),
                        (y.z = t),
                        l.multiplyByScale(e, y, n)
                    );
                }),
                    (l.multiplyByScale = function (e, t, n) {
                        var r = t.x,
                            a = t.y,
                            i = t.z;
                        return 1 === r && 1 === a && 1 === i
                            ? l.clone(e, n)
                            : ((n[0] = r * e[0]),
                              (n[1] = r * e[1]),
                              (n[2] = r * e[2]),
                              (n[3] = 0),
                              (n[4] = a * e[4]),
                              (n[5] = a * e[5]),
                              (n[6] = a * e[6]),
                              (n[7] = 0),
                              (n[8] = i * e[8]),
                              (n[9] = i * e[9]),
                              (n[10] = i * e[10]),
                              (n[11] = 0),
                              (n[12] = e[12]),
                              (n[13] = e[13]),
                              (n[14] = e[14]),
                              (n[15] = 1),
                              n);
                    }),
                    (l.multiplyByVector = function (e, t, n) {
                        var r = t.x,
                            a = t.y,
                            i = t.z,
                            o = t.w,
                            u = e[0] * r + e[4] * a + e[8] * i + e[12] * o,
                            s = e[1] * r + e[5] * a + e[9] * i + e[13] * o,
                            c = e[2] * r + e[6] * a + e[10] * i + e[14] * o,
                            l = e[3] * r + e[7] * a + e[11] * i + e[15] * o;
                        return (n.x = u), (n.y = s), (n.z = c), (n.w = l), n;
                    }),
                    (l.multiplyByPointAsVector = function (e, t, n) {
                        var r = t.x,
                            a = t.y,
                            i = t.z,
                            o = e[0] * r + e[4] * a + e[8] * i,
                            u = e[1] * r + e[5] * a + e[9] * i,
                            s = e[2] * r + e[6] * a + e[10] * i;
                        return (n.x = o), (n.y = u), (n.z = s), n;
                    }),
                    (l.multiplyByPoint = function (e, t, n) {
                        var r = t.x,
                            a = t.y,
                            i = t.z,
                            o = e[0] * r + e[4] * a + e[8] * i + e[12],
                            u = e[1] * r + e[5] * a + e[9] * i + e[13],
                            s = e[2] * r + e[6] * a + e[10] * i + e[14];
                        return (n.x = o), (n.y = u), (n.z = s), n;
                    }),
                    (l.multiplyByScalar = function (e, t, n) {
                        return (
                            (n[0] = e[0] * t),
                            (n[1] = e[1] * t),
                            (n[2] = e[2] * t),
                            (n[3] = e[3] * t),
                            (n[4] = e[4] * t),
                            (n[5] = e[5] * t),
                            (n[6] = e[6] * t),
                            (n[7] = e[7] * t),
                            (n[8] = e[8] * t),
                            (n[9] = e[9] * t),
                            (n[10] = e[10] * t),
                            (n[11] = e[11] * t),
                            (n[12] = e[12] * t),
                            (n[13] = e[13] * t),
                            (n[14] = e[14] * t),
                            (n[15] = e[15] * t),
                            n
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
                        var n = e[1],
                            r = e[2],
                            a = e[3],
                            i = e[6],
                            o = e[7],
                            u = e[11];
                        return (
                            (t[0] = e[0]),
                            (t[1] = e[4]),
                            (t[2] = e[8]),
                            (t[3] = e[12]),
                            (t[4] = n),
                            (t[5] = e[5]),
                            (t[6] = e[9]),
                            (t[7] = e[13]),
                            (t[8] = r),
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
                    (l.equalsEpsilon = function (e, t, n) {
                        return (
                            e === t ||
                            (a(e) &&
                                a(t) &&
                                Math.abs(e[0] - t[0]) <= n &&
                                Math.abs(e[1] - t[1]) <= n &&
                                Math.abs(e[2] - t[2]) <= n &&
                                Math.abs(e[3] - t[3]) <= n &&
                                Math.abs(e[4] - t[4]) <= n &&
                                Math.abs(e[5] - t[5]) <= n &&
                                Math.abs(e[6] - t[6]) <= n &&
                                Math.abs(e[7] - t[7]) <= n &&
                                Math.abs(e[8] - t[8]) <= n &&
                                Math.abs(e[9] - t[9]) <= n &&
                                Math.abs(e[10] - t[10]) <= n &&
                                Math.abs(e[11] - t[11]) <= n &&
                                Math.abs(e[12] - t[12]) <= n &&
                                Math.abs(e[13] - t[13]) <= n &&
                                Math.abs(e[14] - t[14]) <= n &&
                                Math.abs(e[15] - t[15]) <= n)
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
                var _ = new s(),
                    m = new s(),
                    T = new t(),
                    R = new t(0, 0, 0, 1);
                return (
                    (l.inverse = function (e, n) {
                        if (
                            s.equalsEpsilon(
                                l.getRotation(e, _),
                                m,
                                u.EPSILON7,
                            ) &&
                            t.equals(l.getRow(e, 3, T), R)
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
                                (n[12] = -e[12]),
                                (n[13] = -e[13]),
                                (n[14] = -e[14]),
                                (n[15] = 1),
                                n
                            );
                        var r = e[0],
                            a = e[4],
                            i = e[8],
                            o = e[12],
                            E = e[1],
                            f = e[5],
                            h = e[9],
                            d = e[13],
                            p = e[2],
                            y = e[6],
                            A = e[10],
                            v = e[14],
                            S = e[3],
                            N = e[7],
                            g = e[11],
                            I = e[15],
                            M = A * I,
                            O = v * g,
                            x = y * I,
                            w = v * N,
                            C = y * g,
                            P = A * N,
                            L = p * I,
                            b = v * S,
                            U = p * g,
                            F = A * S,
                            D = p * N,
                            B = y * S,
                            z = M * f + w * h + C * d - (O * f + x * h + P * d),
                            G = O * E + L * h + F * d - (M * E + b * h + U * d),
                            q = x * E + b * f + D * d - (w * E + L * f + B * d),
                            V = P * E + U * f + B * h - (C * E + F * f + D * h),
                            X = O * a + x * i + P * o - (M * a + w * i + C * o),
                            W = M * r + b * i + U * o - (O * r + L * i + F * o),
                            H = w * r + L * a + B * o - (x * r + b * a + D * o),
                            Y = C * r + F * a + D * i - (P * r + U * a + B * i);
                        (M = i * d),
                            (O = o * h),
                            (x = a * d),
                            (w = o * f),
                            (C = a * h),
                            (P = i * f),
                            (L = r * d),
                            (b = o * E),
                            (U = r * h),
                            (F = i * E),
                            (D = r * f),
                            (B = a * E);
                        var k = M * N + w * g + C * I - (O * N + x * g + P * I),
                            Z = O * S + L * g + F * I - (M * S + b * g + U * I),
                            K = x * S + b * N + D * I - (w * S + L * N + B * I),
                            j = P * S + U * N + B * g - (C * S + F * N + D * g),
                            Q = x * A + P * v + O * y - (C * v + M * y + w * A),
                            J = U * v + M * p + b * A - (L * A + F * v + O * p),
                            $ = L * y + B * v + w * p - (D * v + x * p + b * y),
                            ee =
                                D * A + C * p + F * y - (U * y + B * A + P * p),
                            te = r * z + a * G + i * q + o * V;
                        if (Math.abs(te) < u.EPSILON20)
                            throw new c(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (te = 1 / te),
                            (n[0] = z * te),
                            (n[1] = G * te),
                            (n[2] = q * te),
                            (n[3] = V * te),
                            (n[4] = X * te),
                            (n[5] = W * te),
                            (n[6] = H * te),
                            (n[7] = Y * te),
                            (n[8] = k * te),
                            (n[9] = Z * te),
                            (n[10] = K * te),
                            (n[11] = j * te),
                            (n[12] = Q * te),
                            (n[13] = J * te),
                            (n[14] = $ * te),
                            (n[15] = ee * te),
                            n
                        );
                    }),
                    (l.inverseTransformation = function (e, t) {
                        var n = e[0],
                            r = e[1],
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
                            d = -n * E - r * f - a * h,
                            p = -i * E - o * f - u * h,
                            y = -s * E - c * f - l * h;
                        return (
                            (t[0] = n),
                            (t[1] = i),
                            (t[2] = s),
                            (t[3] = 0),
                            (t[4] = r),
                            (t[5] = o),
                            (t[6] = c),
                            (t[7] = 0),
                            (t[8] = a),
                            (t[9] = u),
                            (t[10] = l),
                            (t[11] = 0),
                            (t[12] = d),
                            (t[13] = p),
                            (t[14] = y),
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
                    (l.equalsArray = function (e, t, n) {
                        return (
                            e[0] === t[n] &&
                            e[1] === t[n + 1] &&
                            e[2] === t[n + 2] &&
                            e[3] === t[n + 3] &&
                            e[4] === t[n + 4] &&
                            e[5] === t[n + 5] &&
                            e[6] === t[n + 6] &&
                            e[7] === t[n + 7] &&
                            e[8] === t[n + 8] &&
                            e[9] === t[n + 9] &&
                            e[10] === t[n + 10] &&
                            e[11] === t[n + 11] &&
                            e[12] === t[n + 12] &&
                            e[13] === t[n + 13] &&
                            e[14] === t[n + 14] &&
                            e[15] === t[n + 15]
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
            function (e, t, n, r, a, i, o, u, s, c, l, E) {
                'use strict';
                function f(t, n) {
                    (this.center = e.clone(r(t, e.ZERO))),
                        (this.radius = r(n, 0));
                }
                var h = new e(),
                    d = new e(),
                    p = new e(),
                    y = new e(),
                    _ = new e(),
                    m = new e(),
                    T = new e(),
                    R = new e(),
                    A = new e(),
                    v = new e(),
                    S = new e(),
                    N = new e();
                f.fromPoints = function (t, n) {
                    if ((a(n) || (n = new f()), !a(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r,
                        i = e.clone(t[0], T),
                        o = e.clone(i, h),
                        u = e.clone(i, d),
                        s = e.clone(i, p),
                        c = e.clone(i, y),
                        l = e.clone(i, _),
                        E = e.clone(i, m),
                        g = t.length;
                    for (r = 1; r < g; r++) {
                        e.clone(t[r], i);
                        var I = i.x,
                            M = i.y,
                            O = i.z;
                        I < o.x && e.clone(i, o),
                            I > c.x && e.clone(i, c),
                            M < u.y && e.clone(i, u),
                            M > l.y && e.clone(i, l),
                            O < s.z && e.clone(i, s),
                            O > E.z && e.clone(i, E);
                    }
                    var x = e.magnitudeSquared(e.subtract(c, o, R)),
                        w = e.magnitudeSquared(e.subtract(l, u, R)),
                        C = e.magnitudeSquared(e.subtract(E, s, R)),
                        P = o,
                        L = c,
                        b = x;
                    w > b && ((b = w), (P = u), (L = l)),
                        C > b && ((b = C), (P = s), (L = E));
                    var U = A;
                    (U.x = 0.5 * (P.x + L.x)),
                        (U.y = 0.5 * (P.y + L.y)),
                        (U.z = 0.5 * (P.z + L.z));
                    var F = e.magnitudeSquared(e.subtract(L, U, R)),
                        D = Math.sqrt(F),
                        B = v;
                    (B.x = o.x), (B.y = u.y), (B.z = s.z);
                    var z = S;
                    (z.x = c.x), (z.y = l.y), (z.z = E.z);
                    var G = e.multiplyByScalar(e.add(B, z, R), 0.5, N),
                        q = 0;
                    for (r = 0; r < g; r++) {
                        e.clone(t[r], i);
                        var V = e.magnitude(e.subtract(i, G, R));
                        V > q && (q = V);
                        var X = e.magnitudeSquared(e.subtract(i, U, R));
                        if (X > F) {
                            var W = Math.sqrt(X);
                            (D = 0.5 * (D + W)), (F = D * D);
                            var H = W - D;
                            (U.x = (D * U.x + H * i.x) / W),
                                (U.y = (D * U.y + H * i.y) / W),
                                (U.z = (D * U.z + H * i.z) / W);
                        }
                    }
                    return (
                        D < q
                            ? (e.clone(U, n.center), (n.radius = D))
                            : (e.clone(G, n.center), (n.radius = q)),
                        n
                    );
                };
                var g = new o(),
                    I = new e(),
                    M = new e(),
                    O = new t(),
                    x = new t();
                (f.fromRectangle2D = function (e, t, n) {
                    return f.fromRectangleWithHeights2D(e, t, 0, 0, n);
                }),
                    (f.fromRectangleWithHeights2D = function (t, n, i, o, u) {
                        if ((a(u) || (u = new f()), !a(t)))
                            return (
                                (u.center = e.clone(e.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (n = r(n, g)),
                            E.southwest(t, O),
                            (O.height = i),
                            E.northeast(t, x),
                            (x.height = o);
                        var s = n.project(O, I),
                            c = n.project(x, M),
                            l = c.x - s.x,
                            h = c.y - s.y,
                            d = c.z - s.z;
                        u.radius = 0.5 * Math.sqrt(l * l + h * h + d * d);
                        var p = u.center;
                        return (
                            (p.x = s.x + 0.5 * l),
                            (p.y = s.y + 0.5 * h),
                            (p.z = s.z + 0.5 * d),
                            u
                        );
                    });
                var w = [];
                (f.fromRectangle3D = function (t, n, o, u) {
                    if (
                        ((n = r(n, i.WGS84)),
                        (o = r(o, 0)),
                        a(u) || (u = new f()),
                        !a(t))
                    )
                        return (
                            (u.center = e.clone(e.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var s = E.subsample(t, n, o, w);
                    return f.fromPoints(s, u);
                }),
                    (f.fromVertices = function (t, n, i, o) {
                        if ((a(o) || (o = new f()), !a(t) || 0 === t.length))
                            return (
                                (o.center = e.clone(e.ZERO, o.center)),
                                (o.radius = 0),
                                o
                            );
                        (n = r(n, e.ZERO)), (i = r(i, 3));
                        var u = T;
                        (u.x = t[0] + n.x),
                            (u.y = t[1] + n.y),
                            (u.z = t[2] + n.z);
                        var s,
                            c = e.clone(u, h),
                            l = e.clone(u, d),
                            E = e.clone(u, p),
                            g = e.clone(u, y),
                            I = e.clone(u, _),
                            M = e.clone(u, m),
                            O = t.length;
                        for (s = 0; s < O; s += i) {
                            var x = t[s] + n.x,
                                w = t[s + 1] + n.y,
                                C = t[s + 2] + n.z;
                            (u.x = x),
                                (u.y = w),
                                (u.z = C),
                                x < c.x && e.clone(u, c),
                                x > g.x && e.clone(u, g),
                                w < l.y && e.clone(u, l),
                                w > I.y && e.clone(u, I),
                                C < E.z && e.clone(u, E),
                                C > M.z && e.clone(u, M);
                        }
                        var P = e.magnitudeSquared(e.subtract(g, c, R)),
                            L = e.magnitudeSquared(e.subtract(I, l, R)),
                            b = e.magnitudeSquared(e.subtract(M, E, R)),
                            U = c,
                            F = g,
                            D = P;
                        L > D && ((D = L), (U = l), (F = I)),
                            b > D && ((D = b), (U = E), (F = M));
                        var B = A;
                        (B.x = 0.5 * (U.x + F.x)),
                            (B.y = 0.5 * (U.y + F.y)),
                            (B.z = 0.5 * (U.z + F.z));
                        var z = e.magnitudeSquared(e.subtract(F, B, R)),
                            G = Math.sqrt(z),
                            q = v;
                        (q.x = c.x), (q.y = l.y), (q.z = E.z);
                        var V = S;
                        (V.x = g.x), (V.y = I.y), (V.z = M.z);
                        var X = e.multiplyByScalar(e.add(q, V, R), 0.5, N),
                            W = 0;
                        for (s = 0; s < O; s += i) {
                            (u.x = t[s] + n.x),
                                (u.y = t[s + 1] + n.y),
                                (u.z = t[s + 2] + n.z);
                            var H = e.magnitude(e.subtract(u, X, R));
                            H > W && (W = H);
                            var Y = e.magnitudeSquared(e.subtract(u, B, R));
                            if (Y > z) {
                                var k = Math.sqrt(Y);
                                (G = 0.5 * (G + k)), (z = G * G);
                                var Z = k - G;
                                (B.x = (G * B.x + Z * u.x) / k),
                                    (B.y = (G * B.y + Z * u.y) / k),
                                    (B.z = (G * B.z + Z * u.z) / k);
                            }
                        }
                        return (
                            G < W
                                ? (e.clone(B, o.center), (o.radius = G))
                                : (e.clone(X, o.center), (o.radius = W)),
                            o
                        );
                    }),
                    (f.fromEncodedCartesianVertices = function (t, n, r) {
                        if (
                            (a(r) || (r = new f()),
                            !a(t) ||
                                !a(n) ||
                                t.length !== n.length ||
                                0 === t.length)
                        )
                            return (
                                (r.center = e.clone(e.ZERO, r.center)),
                                (r.radius = 0),
                                r
                            );
                        var i = T;
                        (i.x = t[0] + n[0]),
                            (i.y = t[1] + n[1]),
                            (i.z = t[2] + n[2]);
                        var o,
                            u = e.clone(i, h),
                            s = e.clone(i, d),
                            c = e.clone(i, p),
                            l = e.clone(i, y),
                            E = e.clone(i, _),
                            g = e.clone(i, m),
                            I = t.length;
                        for (o = 0; o < I; o += 3) {
                            var M = t[o] + n[o],
                                O = t[o + 1] + n[o + 1],
                                x = t[o + 2] + n[o + 2];
                            (i.x = M),
                                (i.y = O),
                                (i.z = x),
                                M < u.x && e.clone(i, u),
                                M > l.x && e.clone(i, l),
                                O < s.y && e.clone(i, s),
                                O > E.y && e.clone(i, E),
                                x < c.z && e.clone(i, c),
                                x > g.z && e.clone(i, g);
                        }
                        var w = e.magnitudeSquared(e.subtract(l, u, R)),
                            C = e.magnitudeSquared(e.subtract(E, s, R)),
                            P = e.magnitudeSquared(e.subtract(g, c, R)),
                            L = u,
                            b = l,
                            U = w;
                        C > U && ((U = C), (L = s), (b = E)),
                            P > U && ((U = P), (L = c), (b = g));
                        var F = A;
                        (F.x = 0.5 * (L.x + b.x)),
                            (F.y = 0.5 * (L.y + b.y)),
                            (F.z = 0.5 * (L.z + b.z));
                        var D = e.magnitudeSquared(e.subtract(b, F, R)),
                            B = Math.sqrt(D),
                            z = v;
                        (z.x = u.x), (z.y = s.y), (z.z = c.z);
                        var G = S;
                        (G.x = l.x), (G.y = E.y), (G.z = g.z);
                        var q = e.multiplyByScalar(e.add(z, G, R), 0.5, N),
                            V = 0;
                        for (o = 0; o < I; o += 3) {
                            (i.x = t[o] + n[o]),
                                (i.y = t[o + 1] + n[o + 1]),
                                (i.z = t[o + 2] + n[o + 2]);
                            var X = e.magnitude(e.subtract(i, q, R));
                            X > V && (V = X);
                            var W = e.magnitudeSquared(e.subtract(i, F, R));
                            if (W > D) {
                                var H = Math.sqrt(W);
                                (B = 0.5 * (B + H)), (D = B * B);
                                var Y = H - B;
                                (F.x = (B * F.x + Y * i.x) / H),
                                    (F.y = (B * F.y + Y * i.y) / H),
                                    (F.z = (B * F.z + Y * i.z) / H);
                            }
                        }
                        return (
                            B < V
                                ? (e.clone(F, r.center), (r.radius = B))
                                : (e.clone(q, r.center), (r.radius = V)),
                            r
                        );
                    }),
                    (f.fromCornerPoints = function (t, n, r) {
                        a(r) || (r = new f());
                        var i = r.center;
                        return (
                            e.add(t, n, i),
                            e.multiplyByScalar(i, 0.5, i),
                            (r.radius = e.distance(i, n)),
                            r
                        );
                    }),
                    (f.fromEllipsoid = function (t, n) {
                        return (
                            a(n) || (n = new f()),
                            e.clone(e.ZERO, n.center),
                            (n.radius = t.maximumRadius),
                            n
                        );
                    });
                var C = new e();
                f.fromBoundingSpheres = function (t, n) {
                    if ((a(n) || (n = new f()), !a(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r = t.length;
                    if (1 === r) return f.clone(t[0], n);
                    if (2 === r) return f.union(t[0], t[1], n);
                    var i,
                        o = [];
                    for (i = 0; i < r; i++) o.push(t[i].center);
                    n = f.fromPoints(o, n);
                    var u = n.center,
                        s = n.radius;
                    for (i = 0; i < r; i++) {
                        var c = t[i];
                        s = Math.max(s, e.distance(u, c.center, C) + c.radius);
                    }
                    return (n.radius = s), n;
                };
                var P = new e(),
                    L = new e(),
                    b = new e();
                (f.fromOrientedBoundingBox = function (t, n) {
                    a(n) || (n = new f());
                    var r = t.halfAxes,
                        i = c.getColumn(r, 0, P),
                        o = c.getColumn(r, 1, L),
                        u = c.getColumn(r, 2, b);
                    return (
                        e.add(i, o, i),
                        e.add(i, u, i),
                        (n.center = e.clone(t.center, n.center)),
                        (n.radius = e.magnitude(i)),
                        n
                    );
                }),
                    (f.clone = function (t, n) {
                        if (a(t))
                            return a(n)
                                ? ((n.center = e.clone(t.center, n.center)),
                                  (n.radius = t.radius),
                                  n)
                                : new f(t.center, t.radius);
                    }),
                    (f.packedLength = 4),
                    (f.pack = function (e, t, n) {
                        n = r(n, 0);
                        var a = e.center;
                        return (
                            (t[n++] = a.x),
                            (t[n++] = a.y),
                            (t[n++] = a.z),
                            (t[n] = e.radius),
                            t
                        );
                    }),
                    (f.unpack = function (e, t, n) {
                        (t = r(t, 0)), a(n) || (n = new f());
                        var i = n.center;
                        return (
                            (i.x = e[t++]),
                            (i.y = e[t++]),
                            (i.z = e[t++]),
                            (n.radius = e[t]),
                            n
                        );
                    });
                var U = new e(),
                    F = new e();
                f.union = function (t, n, r) {
                    a(r) || (r = new f());
                    var i = t.center,
                        o = t.radius,
                        u = n.center,
                        s = n.radius,
                        c = e.subtract(u, i, U),
                        l = e.magnitude(c);
                    if (o >= l + s) return t.clone(r), r;
                    if (s >= l + o) return n.clone(r), r;
                    var E = 0.5 * (o + l + s),
                        h = e.multiplyByScalar(c, (-o + E) / l, F);
                    return (
                        e.add(h, i, h), e.clone(h, r.center), (r.radius = E), r
                    );
                };
                var D = new e();
                (f.expand = function (t, n, r) {
                    r = f.clone(t, r);
                    var a = e.magnitude(e.subtract(n, r.center, D));
                    return a > r.radius && (r.radius = a), r;
                }),
                    (f.intersectPlane = function (t, n) {
                        var r = t.center,
                            a = t.radius,
                            i = n.normal,
                            o = e.dot(i, r) + n.distance;
                        return o < -a
                            ? u.OUTSIDE
                            : o < a
                              ? u.INTERSECTING
                              : u.INSIDE;
                    }),
                    (f.transform = function (e, t, n) {
                        return (
                            a(n) || (n = new f()),
                            (n.center = l.multiplyByPoint(
                                t,
                                e.center,
                                n.center,
                            )),
                            (n.radius = l.getMaximumScale(t) * e.radius),
                            n
                        );
                    });
                var B = new e();
                (f.distanceSquaredTo = function (t, n) {
                    var r = e.subtract(t.center, n, B);
                    return e.magnitudeSquared(r) - t.radius * t.radius;
                }),
                    (f.transformWithoutScale = function (e, t, n) {
                        return (
                            a(n) || (n = new f()),
                            (n.center = l.multiplyByPoint(
                                t,
                                e.center,
                                n.center,
                            )),
                            (n.radius = e.radius),
                            n
                        );
                    });
                var z = new e();
                f.computePlaneDistances = function (t, n, r, i) {
                    a(i) || (i = new s());
                    var o = e.subtract(t.center, n, z),
                        u = e.dot(r, o);
                    return (i.start = u - t.radius), (i.stop = u + t.radius), i;
                };
                for (
                    var G = new e(),
                        q = new e(),
                        V = new e(),
                        X = new e(),
                        W = new e(),
                        H = new t(),
                        Y = new Array(8),
                        k = 0;
                    k < 8;
                    ++k
                )
                    Y[k] = new e();
                var Z = new o();
                return (
                    (f.projectTo2D = function (t, n, a) {
                        n = r(n, Z);
                        var i = n.ellipsoid,
                            o = t.center,
                            u = t.radius,
                            s = i.geodeticSurfaceNormal(o, G),
                            c = e.cross(e.UNIT_Z, s, q);
                        e.normalize(c, c);
                        var l = e.cross(s, c, V);
                        e.normalize(l, l),
                            e.multiplyByScalar(s, u, s),
                            e.multiplyByScalar(l, u, l),
                            e.multiplyByScalar(c, u, c);
                        var E = e.negate(l, W),
                            h = e.negate(c, X),
                            d = Y,
                            p = d[0];
                        e.add(s, l, p),
                            e.add(p, c, p),
                            (p = d[1]),
                            e.add(s, l, p),
                            e.add(p, h, p),
                            (p = d[2]),
                            e.add(s, E, p),
                            e.add(p, h, p),
                            (p = d[3]),
                            e.add(s, E, p),
                            e.add(p, c, p),
                            e.negate(s, s),
                            (p = d[4]),
                            e.add(s, l, p),
                            e.add(p, c, p),
                            (p = d[5]),
                            e.add(s, l, p),
                            e.add(p, h, p),
                            (p = d[6]),
                            e.add(s, E, p),
                            e.add(p, h, p),
                            (p = d[7]),
                            e.add(s, E, p),
                            e.add(p, c, p);
                        for (var y = d.length, _ = 0; _ < y; ++_) {
                            var m = d[_];
                            e.add(o, m, m);
                            var T = i.cartesianToCartographic(m, H);
                            n.project(T, m);
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
                    (f.equals = function (t, n) {
                        return (
                            t === n ||
                            (a(t) &&
                                a(n) &&
                                e.equals(t.center, n.center) &&
                                t.radius === n.radius)
                        );
                    }),
                    (f.prototype.intersectPlane = function (e) {
                        return f.intersectPlane(this, e);
                    }),
                    (f.prototype.distanceSquaredTo = function (e) {
                        return f.distanceSquaredTo(this, e);
                    }),
                    (f.prototype.computePlaneDistances = function (e, t, n) {
                        return f.computePlaneDistances(this, e, t, n);
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
            'Core/Cartesian2',
            [
                './Check',
                './defaultValue',
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
            ],
            function (e, t, n, r, a, i) {
                'use strict';
                function o(e, n) {
                    (this.x = t(e, 0)), (this.y = t(n, 0));
                }
                (o.fromElements = function (e, t, r) {
                    return n(r) ? ((r.x = e), (r.y = t), r) : new o(e, t);
                }),
                    (o.clone = function (e, t) {
                        if (n(e))
                            return n(t)
                                ? ((t.x = e.x), (t.y = e.y), t)
                                : new o(e.x, e.y);
                    }),
                    (o.fromCartesian3 = o.clone),
                    (o.fromCartesian4 = o.clone),
                    (o.packedLength = 2),
                    (o.pack = function (e, n, r) {
                        return (r = t(r, 0)), (n[r++] = e.x), (n[r] = e.y), n;
                    }),
                    (o.unpack = function (e, r, a) {
                        return (
                            (r = t(r, 0)),
                            n(a) || (a = new o()),
                            (a.x = e[r++]),
                            (a.y = e[r]),
                            a
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = 2 * r) : (t = new Array(2 * r));
                        for (var a = 0; a < r; ++a) o.pack(e[a], t, 2 * a);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = r / 2) : (t = new Array(r / 2));
                        for (var a = 0; a < r; a += 2) {
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
                    (o.minimumByComponent = function (e, t, n) {
                        return (
                            (n.x = Math.min(e.x, t.x)),
                            (n.y = Math.min(e.y, t.y)),
                            n
                        );
                    }),
                    (o.maximumByComponent = function (e, t, n) {
                        return (
                            (n.x = Math.max(e.x, t.x)),
                            (n.y = Math.max(e.y, t.y)),
                            n
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
                        var n = o.magnitude(e);
                        return (t.x = e.x / n), (t.y = e.y / n), t;
                    }),
                    (o.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y;
                    }),
                    (o.multiplyComponents = function (e, t, n) {
                        return (n.x = e.x * t.x), (n.y = e.y * t.y), n;
                    }),
                    (o.divideComponents = function (e, t, n) {
                        return (n.x = e.x / t.x), (n.y = e.y / t.y), n;
                    }),
                    (o.add = function (e, t, n) {
                        return (n.x = e.x + t.x), (n.y = e.y + t.y), n;
                    }),
                    (o.subtract = function (e, t, n) {
                        return (n.x = e.x - t.x), (n.y = e.y - t.y), n;
                    }),
                    (o.multiplyByScalar = function (e, t, n) {
                        return (n.x = e.x * t), (n.y = e.y * t), n;
                    }),
                    (o.divideByScalar = function (e, t, n) {
                        return (n.x = e.x / t), (n.y = e.y / t), n;
                    }),
                    (o.negate = function (e, t) {
                        return (t.x = -e.x), (t.y = -e.y), t;
                    }),
                    (o.abs = function (e, t) {
                        return (t.x = Math.abs(e.x)), (t.y = Math.abs(e.y)), t;
                    });
                var s = new o();
                o.lerp = function (e, t, n, r) {
                    return (
                        o.multiplyByScalar(t, n, s),
                        (r = o.multiplyByScalar(e, 1 - n, r)),
                        o.add(s, r, r)
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
                        var n = o.normalize(e, E);
                        return (
                            o.abs(n, n),
                            (t =
                                n.x <= n.y
                                    ? o.clone(o.UNIT_X, t)
                                    : o.clone(o.UNIT_Y, t))
                        );
                    }),
                    (o.equals = function (e, t) {
                        return (
                            e === t ||
                            (n(e) && n(t) && e.x === t.x && e.y === t.y)
                        );
                    }),
                    (o.equalsArray = function (e, t, n) {
                        return e.x === t[n] && e.y === t[n + 1];
                    }),
                    (o.equalsEpsilon = function (e, t, r, a) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                i.equalsEpsilon(e.x, t.x, r, a) &&
                                i.equalsEpsilon(e.y, t.y, r, a))
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
                    (o.prototype.equalsEpsilon = function (e, t, n) {
                        return o.equalsEpsilon(this, e, t, n);
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
            function (e, t) {
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
                    t(a, {
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
                        if (e(n)) return n;
                        n = !1;
                        var t = document.body;
                        if ('function' == typeof t.requestFullscreen)
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
                            var s = i[o];
                            (a = s + 'RequestFullscreen'),
                                'function' == typeof t[a]
                                    ? ((r.requestFullscreen = a), (n = !0))
                                    : ((a = s + 'RequestFullScreen'),
                                      'function' == typeof t[a] &&
                                          ((r.requestFullscreen = a),
                                          (n = !0))),
                                (a = s + 'ExitFullscreen'),
                                'function' == typeof document[a]
                                    ? (r.exitFullscreen = a)
                                    : ((a = s + 'CancelFullScreen'),
                                      'function' == typeof document[a] &&
                                          (r.exitFullscreen = a)),
                                (a = s + 'FullscreenEnabled'),
                                void 0 !== document[a]
                                    ? (r.fullscreenEnabled = a)
                                    : ((a = s + 'FullScreenEnabled'),
                                      void 0 !== document[a] &&
                                          (r.fullscreenEnabled = a)),
                                (a = s + 'FullscreenElement'),
                                void 0 !== document[a]
                                    ? (r.fullscreenElement = a)
                                    : ((a = s + 'FullScreenElement'),
                                      void 0 !== document[a] &&
                                          (r.fullscreenElement = a)),
                                (a = s + 'fullscreenchange'),
                                void 0 !== document['on' + a] &&
                                    ('ms' === s && (a = 'MSFullscreenChange'),
                                    (r.fullscreenchange = a)),
                                (a = s + 'fullscreenerror'),
                                void 0 !== document['on' + a] &&
                                    ('ms' === s && (a = 'MSFullscreenError'),
                                    (r.fullscreenerror = a));
                        }
                        return n;
                    }),
                    (a.requestFullscreen = function (e, t) {
                        a.supportsFullscreen() &&
                            e[r.requestFullscreen]({ vrDisplay: t });
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
            function (e, t, n) {
                'use strict';
                function r(e) {
                    for (var t = e.split('.'), n = 0, r = t.length; n < r; ++n)
                        t[n] = parseInt(t[n], 10);
                    return t;
                }
                function a() {
                    if (!t(A) && ((A = !1), !f())) {
                        var e = / Chrome\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((A = !0), (v = r(e[1])));
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
                        null !== e && ((S = !0), (N = r(e[1])));
                    }
                    return S;
                }
                function u() {
                    return o() && N;
                }
                function s() {
                    if (!t(g)) {
                        g = !1;
                        var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            R.userAgent,
                        );
                        null !== e &&
                            ((g = !0), (I = r(e[1])), (I.isNightly = !!e[2]));
                    }
                    return g;
                }
                function c() {
                    return s() && I;
                }
                function l() {
                    if (!t(M)) {
                        M = !1;
                        var e;
                        'Microsoft Internet Explorer' === R.appName
                            ? null !==
                                  (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      R.userAgent,
                                  )) && ((M = !0), (O = r(e[1])))
                            : 'Netscape' === R.appName &&
                              null !==
                                  (e =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          R.userAgent,
                                      )) &&
                              ((M = !0), (O = r(e[1])));
                    }
                    return M;
                }
                function E() {
                    return l() && O;
                }
                function f() {
                    if (!t(x)) {
                        x = !1;
                        var e = / Edge\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((x = !0), (w = r(e[1])));
                    }
                    return x;
                }
                function h() {
                    return f() && w;
                }
                function d() {
                    if (!t(C)) {
                        C = !1;
                        var e = /Firefox\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((C = !0), (P = r(e[1])));
                    }
                    return C;
                }
                function p() {
                    return t(L) || (L = /Windows/i.test(R.appVersion)), L;
                }
                function y() {
                    return d() && P;
                }
                function _() {
                    return (
                        t(b) ||
                            (b =
                                'undefined' != typeof PointerEvent &&
                                (!t(R.pointerEnabled) || R.pointerEnabled)),
                        b
                    );
                }
                function m() {
                    if (!t(F)) {
                        var e = document.createElement('canvas');
                        e.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var n = e.style.imageRendering;
                        (F = t(n) && '' !== n), F && (U = n);
                    }
                    return F;
                }
                function T() {
                    return m() ? U : void 0;
                }
                var R;
                R = 'undefined' != typeof navigator ? navigator : {};
                var A,
                    v,
                    S,
                    N,
                    g,
                    I,
                    M,
                    O,
                    x,
                    w,
                    C,
                    P,
                    L,
                    b,
                    U,
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
                        firefoxVersion: y,
                        isWindows: p,
                        hardwareConcurrency: e(R.hardwareConcurrency, 3),
                        supportsPointerEvents: _,
                        supportsImageRenderingPixelated: m,
                        imageRenderingValue: T,
                    };
                return (
                    (D.supportsFullscreen = function () {
                        return n.supportsFullscreen();
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
            function (e, t, n, r, a, i) {
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
                    (o.createArrayBufferView = function (t, n, r, a) {
                        switch (
                            ((r = e(r, 0)),
                            (a = e(
                                a,
                                (n.byteLength - r) / o.getSizeInBytes(t),
                            )),
                            t)
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
                var n = {
                    POINTS: t.POINTS,
                    LINES: t.LINES,
                    LINE_LOOP: t.LINE_LOOP,
                    LINE_STRIP: t.LINE_STRIP,
                    TRIANGLES: t.TRIANGLES,
                    TRIANGLE_STRIP: t.TRIANGLE_STRIP,
                    TRIANGLE_FAN: t.TRIANGLE_FAN,
                    validate: function (e) {
                        return (
                            e === n.POINTS ||
                            e === n.LINES ||
                            e === n.LINE_LOOP ||
                            e === n.LINE_STRIP ||
                            e === n.TRIANGLES ||
                            e === n.TRIANGLE_STRIP ||
                            e === n.TRIANGLE_FAN
                        );
                    },
                };
                return e(n);
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
            function (e, t, n, r, a, i) {
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
                        for (var r in e.attributes)
                            if (
                                e.attributes.hasOwnProperty(r) &&
                                n(e.attributes[r]) &&
                                n(e.attributes[r].values)
                            ) {
                                var a = e.attributes[r],
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
            function (e, t, n) {
                'use strict';
                function r(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this.componentDatatype = t.componentDatatype),
                        (this.componentsPerAttribute =
                            t.componentsPerAttribute),
                        (this.normalize = e(t.normalize, !1)),
                        (this.values = t.values);
                }
                return r;
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
            'Core/GeometryInstance',
            ['./defaultValue', './defined', './DeveloperError', './Matrix4'],
            function (e, t, n, r) {
                'use strict';
                function a(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this.geometry = t.geometry),
                        (this.modelMatrix = r.clone(
                            e(t.modelMatrix, r.IDENTITY),
                        )),
                        (this.id = t.id),
                        (this.pickPrimitive = t.pickPrimitive),
                        (this.attributes = e(t.attributes, {})),
                        (this.westHemisphereGeometry = void 0),
                        (this.eastHemisphereGeometry = void 0);
                }
                return a;
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
            function (e, t, n, r, a, i) {
                'use strict';
                var o = {};
                (o.octEncodeInRange = function (e, t, n) {
                    if (
                        ((n.x =
                            e.x /
                            (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
                        (n.y =
                            e.y /
                            (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z))),
                        e.z < 0)
                    ) {
                        var r = n.x,
                            a = n.y;
                        (n.x = (1 - Math.abs(a)) * i.signNotZero(r)),
                            (n.y = (1 - Math.abs(r)) * i.signNotZero(a));
                    }
                    return (
                        (n.x = i.toSNorm(n.x, t)), (n.y = i.toSNorm(n.y, t)), n
                    );
                }),
                    (o.octEncode = function (e, t) {
                        return o.octEncodeInRange(e, 255, t);
                    }),
                    (o.octDecodeInRange = function (e, n, r, a) {
                        if (
                            ((a.x = i.fromSNorm(e, r)),
                            (a.y = i.fromSNorm(n, r)),
                            (a.z = 1 - (Math.abs(a.x) + Math.abs(a.y))),
                            a.z < 0)
                        ) {
                            var o = a.x;
                            (a.x = (1 - Math.abs(a.y)) * i.signNotZero(o)),
                                (a.y = (1 - Math.abs(o)) * i.signNotZero(a.y));
                        }
                        return t.normalize(a, a);
                    }),
                    (o.octDecode = function (e, t, n) {
                        return o.octDecodeInRange(e, t, 255, n);
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
                        var n = e / 256,
                            r = Math.floor(n),
                            a = 256 * (n - r);
                        return o.octDecode(r, a, t);
                    }),
                    (o.octPack = function (e, t, n, r) {
                        var a = o.octEncodeFloat(e),
                            i = o.octEncodeFloat(t),
                            s = o.octEncode(n, u);
                        return (
                            (r.x = 65536 * s.x + a), (r.y = 65536 * s.y + i), r
                        );
                    }),
                    (o.octUnpack = function (e, t, n, r) {
                        var a = e.x / 65536,
                            i = Math.floor(a),
                            u = 65536 * (a - i);
                        a = e.y / 65536;
                        var s = Math.floor(a),
                            c = 65536 * (a - s);
                        o.octDecodeFloat(u, t),
                            o.octDecodeFloat(c, n),
                            o.octDecode(i, s, r);
                    }),
                    (o.compressTextureCoordinates = function (e) {
                        return 4096 * ((4095 * e.x) | 0) + ((4095 * e.y) | 0);
                    }),
                    (o.decompressTextureCoordinates = function (e, t) {
                        var n = e / 4096,
                            r = Math.floor(n);
                        return (
                            (t.x = r / 4095), (t.y = (e - 4096 * r) / 4095), t
                        );
                    }),
                    o
                );
            },
        ),
        define(
            'Core/barycentricCoordinates',
            ['./Cartesian2', './Cartesian3', './Check', './defined'],
            function (e, t, n, r) {
                'use strict';
                function a(n, a, s, c, l) {
                    r(l) || (l = new t());
                    var E, f, h, d, p, y, _, m;
                    r(a.z)
                        ? ((E = t.subtract(s, a, i)),
                          (f = t.subtract(c, a, o)),
                          (h = t.subtract(n, a, u)),
                          (d = t.dot(E, E)),
                          (p = t.dot(E, f)),
                          (y = t.dot(E, h)),
                          (_ = t.dot(f, f)),
                          (m = t.dot(f, h)))
                        : ((E = e.subtract(s, a, i)),
                          (f = e.subtract(c, a, o)),
                          (h = e.subtract(n, a, u)),
                          (d = e.dot(E, E)),
                          (p = e.dot(E, f)),
                          (y = e.dot(E, h)),
                          (_ = e.dot(f, f)),
                          (m = e.dot(f, h)));
                    var T = 1 / (d * _ - p * p);
                    return (
                        (l.y = (_ * y - p * m) * T),
                        (l.z = (d * m - p * y) * T),
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
            function (e, t, n) {
                'use strict';
                function r() {
                    (this.high = e.clone(e.ZERO)), (this.low = e.clone(e.ZERO));
                }
                r.encode = function (e, t) {
                    n(t) || (t = { high: 0, low: 0 });
                    var r;
                    return (
                        e >= 0
                            ? ((r = 65536 * Math.floor(e / 65536)),
                              (t.high = r),
                              (t.low = e - r))
                            : ((r = 65536 * Math.floor(-e / 65536)),
                              (t.high = -r),
                              (t.low = e + r)),
                        t
                    );
                };
                var a = { high: 0, low: 0 };
                r.fromCartesian = function (e, t) {
                    n(t) || (t = new r());
                    var i = t.high,
                        o = t.low;
                    return (
                        r.encode(e.x, a),
                        (i.x = a.high),
                        (o.x = a.low),
                        r.encode(e.y, a),
                        (i.y = a.high),
                        (o.y = a.low),
                        r.encode(e.z, a),
                        (i.z = a.high),
                        (o.z = a.low),
                        t
                    );
                };
                var i = new r();
                return (
                    (r.writeElements = function (e, t, n) {
                        r.fromCartesian(e, i);
                        var a = i.high,
                            o = i.low;
                        (t[n] = a.x),
                            (t[n + 1] = a.y),
                            (t[n + 2] = a.z),
                            (t[n + 3] = o.x),
                            (t[n + 4] = o.y),
                            (t[n + 5] = o.z);
                    }),
                    r
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
            function (e, t, n, r, a) {
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
                        return e >= r.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(t)
                            : new Uint16Array(t);
                    }),
                    (i.createTypedArrayFromArrayBuffer = function (e, t, n, a) {
                        return e >= r.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(t, n, a)
                            : new Uint16Array(t, n, a);
                    }),
                    n(i)
                );
            },
        ),
        define(
            'Core/QuadraticRealPolynomial',
            ['./DeveloperError', './Math'],
            function (e, t) {
                'use strict';
                function n(e, n, r) {
                    var a = e + n;
                    return t.sign(e) !== t.sign(n) &&
                        Math.abs(a / Math.max(Math.abs(e), Math.abs(n))) < r
                        ? 0
                        : a;
                }
                var r = {};
                return (
                    (r.computeDiscriminant = function (e, t, n) {
                        return t * t - 4 * e * n;
                    }),
                    (r.computeRealRoots = function (e, r, a) {
                        var i;
                        if (0 === e) return 0 === r ? [] : [-a / r];
                        if (0 === r) {
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
                            return (i = -r / e), i < 0 ? [i, 0] : [0, i];
                        var c = r * r,
                            l = 4 * e * a,
                            E = n(c, -l, t.EPSILON14);
                        if (E < 0) return [];
                        var f =
                            -0.5 * n(r, t.sign(r) * Math.sqrt(E), t.EPSILON14);
                        return r > 0 ? [f / e, a / f] : [a / f, f / e];
                    }),
                    r
                );
            },
        ),
        define(
            'Core/CubicRealPolynomial',
            ['./DeveloperError', './QuadraticRealPolynomial'],
            function (e, t) {
                'use strict';
                function n(e, t, n, r) {
                    var a,
                        i,
                        o = e,
                        u = t / 3,
                        s = n / 3,
                        c = r,
                        l = o * s,
                        E = u * c,
                        f = u * u,
                        h = s * s,
                        d = o * s - f,
                        p = o * c - u * s,
                        y = u * c - h,
                        _ = 4 * d * y - p * p;
                    if (_ < 0) {
                        var m, T, R;
                        f * E >= l * h
                            ? ((m = o), (T = d), (R = -2 * u * d + o * p))
                            : ((m = c), (T = y), (R = -c * p + 2 * s * y));
                        var A = R < 0 ? -1 : 1,
                            v = -A * Math.abs(m) * Math.sqrt(-_);
                        i = -R + v;
                        var S = i / 2,
                            N =
                                S < 0
                                    ? -Math.pow(-S, 1 / 3)
                                    : Math.pow(S, 1 / 3),
                            g = i === v ? -N : -T / N;
                        return (
                            (a = T <= 0 ? N + g : -R / (N * N + g * g + T)),
                            f * E >= l * h ? [(a - u) / o] : [-c / (a + s)]
                        );
                    }
                    var I = d,
                        M = -2 * u * d + o * p,
                        O = y,
                        x = -c * p + 2 * s * y,
                        w = Math.sqrt(_),
                        C = Math.sqrt(3) / 2,
                        P = Math.abs(Math.atan2(o * w, -M) / 3);
                    a = 2 * Math.sqrt(-I);
                    var L = Math.cos(P);
                    i = a * L;
                    var b = a * (-L / 2 - C * Math.sin(P)),
                        U = i + b > 2 * u ? i - u : b - u,
                        F = o,
                        D = U / F;
                    (P = Math.abs(Math.atan2(c * w, -x) / 3)),
                        (a = 2 * Math.sqrt(-O)),
                        (L = Math.cos(P)),
                        (i = a * L),
                        (b = a * (-L / 2 - C * Math.sin(P)));
                    var B = -c,
                        z = i + b < 2 * s ? i + s : b + s,
                        G = B / z,
                        q = F * z,
                        V = -U * z - F * B,
                        X = U * B,
                        W = (s * V - u * X) / (-u * V + s * q);
                    return D <= W
                        ? D <= G
                            ? W <= G
                                ? [D, W, G]
                                : [D, G, W]
                            : [G, D, W]
                        : D <= G
                          ? [W, D, G]
                          : W <= G
                            ? [W, G, D]
                            : [G, W, D];
                }
                var r = {};
                return (
                    (r.computeDiscriminant = function (e, t, n, r) {
                        var a = e * e,
                            i = t * t,
                            o = n * n;
                        return (
                            18 * e * t * n * r +
                            i * o -
                            27 * a * (r * r) -
                            4 * (e * o * n + i * t * r)
                        );
                    }),
                    (r.computeRealRoots = function (e, r, a, i) {
                        var o, u;
                        if (0 === e) return t.computeRealRoots(r, a, i);
                        if (0 === r) {
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
                                : n(e, 0, a, i);
                        }
                        return 0 === a
                            ? 0 === i
                                ? ((u = -r / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                                : n(e, r, 0, i)
                            : 0 === i
                              ? ((o = t.computeRealRoots(e, r, a)),
                                0 === o.length
                                    ? [0]
                                    : o[1] <= 0
                                      ? [o[0], o[1], 0]
                                      : o[0] >= 0
                                        ? [0, o[0], o[1]]
                                        : [o[0], 0, o[1]])
                              : n(e, r, a, i);
                    }),
                    r
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
            function (e, t, n, r) {
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
                        if (Math.abs(h) < n.EPSILON14) {
                            var d = r.computeRealRoots(1, s, l);
                            if (2 === d.length) {
                                var p,
                                    y = d[0],
                                    _ = d[1];
                                if (y >= 0 && _ >= 0) {
                                    var m = Math.sqrt(y),
                                        T = Math.sqrt(_);
                                    return [f - T, f - m, f + m, f + T];
                                }
                                if (y >= 0 && _ < 0)
                                    return (p = Math.sqrt(y)), [f - p, f + p];
                                if (y < 0 && _ >= 0)
                                    return (p = Math.sqrt(_)), [f - p, f + p];
                            }
                            return [];
                        }
                        if (h > 0) {
                            var R = Math.sqrt(h),
                                A = (s + h - c / R) / 2,
                                v = (s + h + c / R) / 2,
                                S = r.computeRealRoots(1, R, A),
                                N = r.computeRealRoots(1, -R, v);
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
                            p,
                            y = h[0],
                            _ = a - y,
                            m = _ * _,
                            T = t / 2,
                            R = _ / 2,
                            A = m - 4 * o,
                            v = m + 4 * Math.abs(o),
                            S = c - 4 * y,
                            N = c + 4 * Math.abs(y);
                        if (y < 0 || A * N < S * v) {
                            var g = Math.sqrt(S);
                            (d = g / 2), (p = 0 === g ? 0 : (t * R - i) / g);
                        } else {
                            var I = Math.sqrt(A);
                            (d = 0 === I ? 0 : (t * R - i) / I), (p = I / 2);
                        }
                        var M, O;
                        0 === T && 0 === d
                            ? ((M = 0), (O = 0))
                            : n.sign(T) === n.sign(d)
                              ? ((M = T + d), (O = y / M))
                              : ((O = T - d), (M = y / O));
                        var x, w;
                        0 === R && 0 === p
                            ? ((x = 0), (w = 0))
                            : n.sign(R) === n.sign(p)
                              ? ((x = R + p), (w = o / x))
                              : ((w = R - p), (x = o / w));
                        var C = r.computeRealRoots(1, M, x),
                            P = r.computeRealRoots(1, O, w);
                        if (0 !== C.length)
                            return 0 !== P.length
                                ? C[1] <= P[0]
                                    ? [C[0], C[1], P[0], P[1]]
                                    : P[1] <= C[0]
                                      ? [P[0], P[1], C[0], C[1]]
                                      : C[0] >= P[0] && C[1] <= P[1]
                                        ? [P[0], C[0], C[1], P[1]]
                                        : P[0] >= C[0] && P[1] <= C[1]
                                          ? [C[0], P[0], P[1], C[1]]
                                          : C[0] > P[0] && C[0] < P[1]
                                            ? [P[0], C[0], P[1], C[1]]
                                            : [C[0], P[0], C[1], P[1]]
                                : C;
                        if (0 !== P.length) return P;
                    }
                    return [];
                }
                var o = {};
                return (
                    (o.computeDiscriminant = function (e, t, n, r, a) {
                        var i = e * e,
                            o = i * e,
                            u = t * t,
                            s = u * t,
                            c = n * n,
                            l = c * n,
                            E = r * r,
                            f = E * r,
                            h = a * a;
                        return (
                            u * c * E -
                            4 * s * f -
                            4 * e * l * E +
                            18 * e * t * n * f -
                            27 * i * E * E +
                            256 * o * (h * a) +
                            a *
                                (18 * s * n * r -
                                    4 * u * l +
                                    16 * e * c * c -
                                    80 * e * t * c * r -
                                    6 * e * u * E +
                                    144 * i * n * E) +
                            h *
                                (144 * e * u * n -
                                    27 * u * u -
                                    128 * i * c -
                                    192 * i * t * r)
                        );
                    }),
                    (o.computeRealRoots = function (t, r, o, u, s) {
                        if (Math.abs(t) < n.EPSILON15)
                            return e.computeRealRoots(r, o, u, s);
                        var c = r / t,
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
            function (e, t, n, r) {
                'use strict';
                function a(n, r) {
                    (r = e.clone(t(r, e.ZERO))),
                        e.equals(r, e.ZERO) || e.normalize(r, r),
                        (this.origin = e.clone(t(n, e.ZERO))),
                        (this.direction = r);
                }
                return (
                    (a.getPoint = function (t, r, a) {
                        return (
                            n(a) || (a = new e()),
                            (a = e.multiplyByScalar(t.direction, r, a)),
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
            function (e, t, n, r, a, i, o, u, s, c, l) {
                'use strict';
                function E(e, t, n, r) {
                    var a = t * t - 4 * e * n;
                    if (!(a < 0)) {
                        if (a > 0) {
                            var i = 1 / (2 * e),
                                o = Math.sqrt(a),
                                u = (-t + o) * i,
                                s = (-t - o) * i;
                            return (
                                u < s
                                    ? ((r.root0 = u), (r.root1 = s))
                                    : ((r.root0 = s), (r.root1 = u)),
                                r
                            );
                        }
                        var c = -t / (2 * e);
                        if (0 !== c) return (r.root0 = r.root1 = c), r;
                    }
                }
                function f(t, n, a) {
                    r(a) || (a = new i());
                    var o = t.origin,
                        u = t.direction,
                        s = n.center,
                        c = n.radius * n.radius,
                        l = e.subtract(o, s, m),
                        f = e.dot(u, u),
                        h = 2 * e.dot(u, l),
                        d = e.magnitudeSquared(l) - c,
                        p = E(f, h, d, v);
                    if (r(p)) return (a.start = p.root0), (a.stop = p.root1), a;
                }
                function h(e, t, n) {
                    var r = e + t;
                    return o.sign(e) !== o.sign(t) &&
                        Math.abs(r / Math.max(Math.abs(e), Math.abs(t))) < n
                        ? 0
                        : r;
                }
                function d(t, n, r, a, i) {
                    var l,
                        E = a * a,
                        f = i * i,
                        d = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * f,
                        p =
                            i *
                            (a *
                                h(
                                    t[u.COLUMN1ROW0],
                                    t[u.COLUMN0ROW1],
                                    o.EPSILON15,
                                ) +
                                n.y),
                        y =
                            t[u.COLUMN0ROW0] * E +
                            t[u.COLUMN2ROW2] * f +
                            a * n.x +
                            r,
                        _ =
                            f *
                            h(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                        m =
                            i *
                            (a * h(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + n.z),
                        T = [];
                    if (0 === m && 0 === _) {
                        if (((l = s.computeRealRoots(d, p, y)), 0 === l.length))
                            return T;
                        var R = l[0],
                            A = Math.sqrt(Math.max(1 - R * R, 0));
                        if (
                            (T.push(new e(a, i * R, i * -A)),
                            T.push(new e(a, i * R, i * A)),
                            2 === l.length)
                        ) {
                            var v = l[1],
                                S = Math.sqrt(Math.max(1 - v * v, 0));
                            T.push(new e(a, i * v, i * -S)),
                                T.push(new e(a, i * v, i * S));
                        }
                        return T;
                    }
                    var N = m * m,
                        g = _ * _,
                        I = d * d,
                        M = m * _,
                        O = I + g,
                        x = 2 * (p * d + M),
                        w = 2 * y * d + p * p - g + N,
                        C = 2 * (y * p - M),
                        P = y * y - N;
                    if (0 === O && 0 === x && 0 === w && 0 === C) return T;
                    l = c.computeRealRoots(O, x, w, C, P);
                    var L = l.length;
                    if (0 === L) return T;
                    for (var b = 0; b < L; ++b) {
                        var U,
                            F = l[b],
                            D = F * F,
                            B = Math.max(1 - D, 0),
                            z = Math.sqrt(B);
                        U =
                            o.sign(d) === o.sign(y)
                                ? h(d * D + y, p * F, o.EPSILON12)
                                : o.sign(y) === o.sign(p * F)
                                  ? h(d * D, p * F + y, o.EPSILON12)
                                  : h(d * D + p * F, y, o.EPSILON12);
                        var G = h(_ * F, m, o.EPSILON15),
                            q = U * G;
                        q < 0
                            ? T.push(new e(a, i * F, i * z))
                            : q > 0
                              ? T.push(new e(a, i * F, i * -z))
                              : 0 !== z
                                ? (T.push(new e(a, i * F, i * -z)),
                                  T.push(new e(a, i * F, i * z)),
                                  ++b)
                                : T.push(new e(a, i * F, i * z));
                    }
                    return T;
                }
                var p = {};
                p.rayPlane = function (t, n, a) {
                    r(a) || (a = new e());
                    var i = t.origin,
                        u = t.direction,
                        s = n.normal,
                        c = e.dot(s, u);
                    if (!(Math.abs(c) < o.EPSILON15)) {
                        var l = (-n.distance - e.dot(s, i)) / c;
                        if (!(l < 0))
                            return (
                                (a = e.multiplyByScalar(u, l, a)),
                                e.add(i, a, a)
                            );
                    }
                };
                var y = new e(),
                    _ = new e(),
                    m = new e(),
                    T = new e(),
                    R = new e();
                (p.rayTriangleParametric = function (t, r, a, i, u) {
                    u = n(u, !1);
                    var s,
                        c,
                        l,
                        E,
                        f,
                        h = t.origin,
                        d = t.direction,
                        p = e.subtract(a, r, y),
                        A = e.subtract(i, r, _),
                        v = e.cross(d, A, m),
                        S = e.dot(p, v);
                    if (u) {
                        if (S < o.EPSILON6) return;
                        if (
                            ((s = e.subtract(h, r, T)),
                            (l = e.dot(s, v)) < 0 || l > S)
                        )
                            return;
                        if (
                            ((c = e.cross(s, p, R)),
                            (E = e.dot(d, c)) < 0 || l + E > S)
                        )
                            return;
                        f = e.dot(A, c) / S;
                    } else {
                        if (Math.abs(S) < o.EPSILON6) return;
                        var N = 1 / S;
                        if (
                            ((s = e.subtract(h, r, T)),
                            (l = e.dot(s, v) * N) < 0 || l > 1)
                        )
                            return;
                        if (
                            ((c = e.cross(s, p, R)),
                            (E = e.dot(d, c) * N) < 0 || l + E > 1)
                        )
                            return;
                        f = e.dot(A, c) * N;
                    }
                    return f;
                }),
                    (p.rayTriangle = function (t, n, a, i, o, u) {
                        var s = p.rayTriangleParametric(t, n, a, i, o);
                        if (r(s) && !(s < 0))
                            return (
                                r(u) || (u = new e()),
                                e.multiplyByScalar(t.direction, s, u),
                                e.add(t.origin, u, u)
                            );
                    });
                var A = new l();
                p.lineSegmentTriangle = function (t, n, a, i, o, u, s) {
                    var c = A;
                    e.clone(t, c.origin),
                        e.subtract(n, t, c.direction),
                        e.normalize(c.direction, c.direction);
                    var l = p.rayTriangleParametric(c, a, i, o, u);
                    if (!(!r(l) || l < 0 || l > e.distance(t, n)))
                        return (
                            r(s) || (s = new e()),
                            e.multiplyByScalar(c.direction, l, s),
                            e.add(c.origin, s, s)
                        );
                };
                var v = { root0: 0, root1: 0 };
                p.raySphere = function (e, t, n) {
                    if (((n = f(e, t, n)), r(n) && !(n.stop < 0)))
                        return (n.start = Math.max(n.start, 0)), n;
                };
                var S = new l();
                p.lineSegmentSphere = function (t, n, a, i) {
                    var o = S;
                    e.clone(t, o.origin);
                    var u = e.subtract(n, t, o.direction),
                        s = e.magnitude(u);
                    if (
                        (e.normalize(u, u),
                        (i = f(o, a, i)),
                        !(!r(i) || i.stop < 0 || i.start > s))
                    )
                        return (
                            (i.start = Math.max(i.start, 0)),
                            (i.stop = Math.min(i.stop, s)),
                            i
                        );
                };
                var N = new e(),
                    g = new e();
                p.rayEllipsoid = function (t, n) {
                    var r,
                        a,
                        o,
                        u,
                        s,
                        c = n.oneOverRadii,
                        l = e.multiplyComponents(c, t.origin, N),
                        E = e.multiplyComponents(c, t.direction, g),
                        f = e.magnitudeSquared(l),
                        h = e.dot(l, E);
                    if (f > 1) {
                        if (h >= 0) return;
                        var d = h * h;
                        if (
                            ((r = f - 1),
                            (a = e.magnitudeSquared(E)),
                            (o = a * r),
                            d < o)
                        )
                            return;
                        if (d > o) {
                            (u = h * h - o), (s = -h + Math.sqrt(u));
                            var p = s / a,
                                y = r / s;
                            return p < y ? new i(p, y) : { start: y, stop: p };
                        }
                        var _ = Math.sqrt(r / a);
                        return new i(_, _);
                    }
                    return f < 1
                        ? ((r = f - 1),
                          (a = e.magnitudeSquared(E)),
                          (o = a * r),
                          (u = h * h - o),
                          (s = -h + Math.sqrt(u)),
                          new i(0, s / a))
                        : h < 0
                          ? ((a = e.magnitudeSquared(E)), new i(0, -h / a))
                          : void 0;
                };
                var I = new e(),
                    M = new e(),
                    O = new e(),
                    x = new e(),
                    w = new e(),
                    C = new u(),
                    P = new u(),
                    L = new u(),
                    b = new u(),
                    U = new u(),
                    F = new u(),
                    D = new u(),
                    B = new e(),
                    z = new e(),
                    G = new t();
                p.grazingAltitudeLocation = function (t, n) {
                    var a = t.origin,
                        i = t.direction;
                    if (!e.equals(a, e.ZERO)) {
                        var s = n.geodeticSurfaceNormal(a, I);
                        if (e.dot(i, s) >= 0) return a;
                    }
                    var c = r(this.rayEllipsoid(t, n)),
                        l = n.transformPositionToScaledSpace(i, I),
                        E = e.normalize(l, l),
                        f = e.mostOrthogonalAxis(l, x),
                        h = e.normalize(e.cross(f, E, M), M),
                        p = e.normalize(e.cross(E, h, O), O),
                        y = C;
                    (y[0] = E.x),
                        (y[1] = E.y),
                        (y[2] = E.z),
                        (y[3] = h.x),
                        (y[4] = h.y),
                        (y[5] = h.z),
                        (y[6] = p.x),
                        (y[7] = p.y),
                        (y[8] = p.z);
                    var _ = u.transpose(y, P),
                        m = u.fromScale(n.radii, L),
                        T = u.fromScale(n.oneOverRadii, b),
                        R = U;
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
                        S = u.multiply(u.multiply(_, T, F), R, F),
                        N = u.multiply(u.multiply(S, m, D), y, D),
                        g = u.multiplyByVector(S, a, w),
                        q = d(N, e.negate(g, I), 0, 0, 1),
                        V = q.length;
                    if (V > 0) {
                        for (
                            var X = e.clone(e.ZERO, z),
                                W = Number.NEGATIVE_INFINITY,
                                H = 0;
                            H < V;
                            ++H
                        ) {
                            A = u.multiplyByVector(
                                m,
                                u.multiplyByVector(y, q[H], B),
                                B,
                            );
                            var Y = e.normalize(e.subtract(A, a, x), x),
                                k = e.dot(Y, i);
                            k > W && ((W = k), (X = e.clone(A, X)));
                        }
                        var Z = n.cartesianToCartographic(X, G);
                        return (
                            (W = o.clamp(W, 0, 1)),
                            (v =
                                e.magnitude(e.subtract(X, a, x)) *
                                Math.sqrt(1 - W * W)),
                            (v = c ? -v : v),
                            (Z.height = v),
                            n.cartographicToCartesian(Z, new e())
                        );
                    }
                };
                var q = new e();
                return (
                    (p.lineSegmentPlane = function (t, n, a, i) {
                        r(i) || (i = new e());
                        var u = e.subtract(n, t, q),
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
                    (p.trianglePlaneIntersection = function (t, n, r, a) {
                        var i = a.normal,
                            o = a.distance,
                            u = e.dot(i, t) + o < 0,
                            s = e.dot(i, n) + o < 0,
                            c = e.dot(i, r) + o < 0,
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
                                    p.lineSegmentPlane(t, n, a, E),
                                    p.lineSegmentPlane(t, r, a, f),
                                    {
                                        positions: [t, n, r, E, f],
                                        indices: [0, 3, 4, 1, 2, 4, 1, 4, 3],
                                    }
                                );
                            if (s)
                                return (
                                    p.lineSegmentPlane(n, r, a, E),
                                    p.lineSegmentPlane(n, t, a, f),
                                    {
                                        positions: [t, n, r, E, f],
                                        indices: [1, 3, 4, 2, 0, 4, 2, 4, 3],
                                    }
                                );
                            if (c)
                                return (
                                    p.lineSegmentPlane(r, t, a, E),
                                    p.lineSegmentPlane(r, n, a, f),
                                    {
                                        positions: [t, n, r, E, f],
                                        indices: [2, 3, 4, 0, 1, 4, 0, 4, 3],
                                    }
                                );
                        } else if (2 === l) {
                            if (!u)
                                return (
                                    p.lineSegmentPlane(n, t, a, E),
                                    p.lineSegmentPlane(r, t, a, f),
                                    {
                                        positions: [t, n, r, E, f],
                                        indices: [1, 2, 4, 1, 4, 3, 0, 3, 4],
                                    }
                                );
                            if (!s)
                                return (
                                    p.lineSegmentPlane(r, n, a, E),
                                    p.lineSegmentPlane(t, n, a, f),
                                    {
                                        positions: [t, n, r, E, f],
                                        indices: [2, 0, 4, 2, 4, 3, 1, 3, 4],
                                    }
                                );
                            if (!c)
                                return (
                                    p.lineSegmentPlane(t, r, a, E),
                                    p.lineSegmentPlane(n, r, a, f),
                                    {
                                        positions: [t, n, r, E, f],
                                        indices: [0, 1, 4, 0, 4, 3, 2, 3, 4],
                                    }
                                );
                        }
                    }),
                    p
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
            function (e, t, n, r, a) {
                'use strict';
                function i(t, n) {
                    (this.normal = e.clone(t)), (this.distance = n);
                }
                i.fromPointNormal = function (n, r, a) {
                    var o = -e.dot(r, n);
                    return t(a)
                        ? (e.clone(r, a.normal), (a.distance = o), a)
                        : new i(r, o);
                };
                var o = new e();
                return (
                    (i.fromCartesian4 = function (n, r) {
                        var a = e.fromCartesian4(n, o),
                            u = n.w;
                        return t(r)
                            ? (e.clone(a, r.normal), (r.distance = u), r)
                            : new i(a, u);
                    }),
                    (i.getPointDistance = function (t, n) {
                        return e.dot(t.normal, n) + t.distance;
                    }),
                    (i.ORIGIN_XY_PLANE = r(new i(e.UNIT_Z, 0))),
                    (i.ORIGIN_YZ_PLANE = r(new i(e.UNIT_X, 0))),
                    (i.ORIGIN_ZX_PLANE = r(new i(e.UNIT_Y, 0))),
                    i
                );
            },
        ),
        define(
            'Core/Tipsify',
            ['./defaultValue', './defined', './DeveloperError'],
            function (e, t, n) {
                'use strict';
                var r = {};
                return (
                    (r.calculateACMR = function (n) {
                        n = e(n, e.EMPTY_OBJECT);
                        var r = n.indices,
                            a = n.maximumIndex,
                            i = e(n.cacheSize, 24),
                            o = r.length;
                        if (!t(a)) {
                            a = 0;
                            for (var u = 0, s = r[u]; u < o; )
                                s > a && (a = s), ++u, (s = r[u]);
                        }
                        for (var c = [], l = 0; l < a + 1; l++) c[l] = 0;
                        for (var E = i + 1, f = 0; f < o; ++f)
                            E - c[r[f]] > i && ((c[r[f]] = E), ++E);
                        return (E - i + 1) / (o / 3);
                    }),
                    (r.tipsify = function (n) {
                        function r(e, t, n, r) {
                            for (; t.length >= 1; ) {
                                var i = t[t.length - 1];
                                if (
                                    (t.splice(t.length - 1, 1),
                                    e[i].numLiveTriangles > 0)
                                )
                                    return i;
                            }
                            for (; a < r; ) {
                                if (e[a].numLiveTriangles > 0) return ++a - 1;
                                ++a;
                            }
                            return -1;
                        }
                        n = e(n, e.EMPTY_OBJECT);
                        var a,
                            i = n.indices,
                            o = n.maximumIndex,
                            u = e(n.cacheSize, 24),
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
                        for (var p = 0; l < f; )
                            d[i[l]].vertexTriangles.push(p),
                                ++d[i[l]].numLiveTriangles,
                                d[i[l + 1]].vertexTriangles.push(p),
                                ++d[i[l + 1]].numLiveTriangles,
                                d[i[l + 2]].vertexTriangles.push(p),
                                ++d[i[l + 2]].numLiveTriangles,
                                ++p,
                                (l += 3);
                        var y = 0,
                            _ = u + 1;
                        a = 1;
                        var m,
                            T,
                            R = [],
                            A = [],
                            v = 0,
                            S = [],
                            N = s / 3,
                            g = [];
                        for (h = 0; h < N; h++) g[h] = !1;
                        for (var I, M; -1 !== y; ) {
                            (R = []),
                                (T = d[y]),
                                (M = T.vertexTriangles.length);
                            for (var O = 0; O < M; ++O)
                                if (((p = T.vertexTriangles[O]), !g[p])) {
                                    (g[p] = !0), (l = p + p + p);
                                    for (var x = 0; x < 3; ++x)
                                        (I = i[l]),
                                            R.push(I),
                                            A.push(I),
                                            (S[v] = I),
                                            ++v,
                                            (m = d[I]),
                                            --m.numLiveTriangles,
                                            _ - m.timeStamp > u &&
                                                ((m.timeStamp = _), ++_),
                                            ++l;
                                }
                            y = (function (e, t, n, a, i, o, u) {
                                for (
                                    var s, c = -1, l = -1, E = 0;
                                    E < n.length;

                                ) {
                                    var f = n[E];
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
                                return -1 === c ? r(a, o, e, u) : c;
                            })(i, u, R, d, _, A, c);
                        }
                        return S;
                    }),
                    r
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
                n,
                r,
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
                p,
                y,
                _,
                m,
                T,
                R,
                A,
                v,
                S,
                N,
            ) {
                'use strict';
                function g(e, t, n, r, a) {
                    (e[t++] = n),
                        (e[t++] = r),
                        (e[t++] = r),
                        (e[t++] = a),
                        (e[t++] = a),
                        (e[t] = n);
                }
                function I(e) {
                    for (
                        var t = e.length,
                            n = (t / 3) * 6,
                            r = y.createTypedArray(t, n),
                            a = 0,
                            i = 0;
                        i < t;
                        i += 3, a += 6
                    )
                        g(r, a, e[i], e[i + 1], e[i + 2]);
                    return r;
                }
                function M(e) {
                    var t = e.length;
                    if (t >= 3) {
                        var n = 6 * (t - 2),
                            r = y.createTypedArray(t, n);
                        g(r, 0, e[0], e[1], e[2]);
                        for (var a = 6, i = 3; i < t; ++i, a += 6)
                            g(r, a, e[i - 1], e[i], e[i - 2]);
                        return r;
                    }
                    return new Uint16Array();
                }
                function O(e) {
                    if (e.length > 0) {
                        for (
                            var t = e.length - 1,
                                n = 6 * (t - 1),
                                r = y.createTypedArray(t, n),
                                a = e[0],
                                i = 0,
                                o = 1;
                            o < t;
                            ++o, i += 6
                        )
                            g(r, i, a, e[o], e[o + 1]);
                        return r;
                    }
                    return new Uint16Array();
                }
                function x(e) {
                    var t = {};
                    for (var n in e)
                        if (e.hasOwnProperty(n) && c(e[n]) && c(e[n].values)) {
                            var r = e[n];
                            t[n] = new d({
                                componentDatatype: r.componentDatatype,
                                componentsPerAttribute:
                                    r.componentsPerAttribute,
                                normalize: r.normalize,
                                values: [],
                            });
                        }
                    return t;
                }
                function w(e, t, n) {
                    for (var r in t)
                        if (t.hasOwnProperty(r) && c(t[r]) && c(t[r].values))
                            for (
                                var a = t[r], i = 0;
                                i < a.componentsPerAttribute;
                                ++i
                            )
                                e[r].values.push(
                                    a.values[n * a.componentsPerAttribute + i],
                                );
                }
                function C(e, t) {
                    if (c(t))
                        for (
                            var n = t.values, r = n.length, i = 0;
                            i < r;
                            i += 3
                        )
                            a.unpack(n, i, ie),
                                A.multiplyByPoint(e, ie, ie),
                                a.pack(ie, n, i);
                }
                function P(e, t) {
                    if (c(t))
                        for (
                            var n = t.values, r = n.length, i = 0;
                            i < r;
                            i += 3
                        )
                            a.unpack(n, i, ie),
                                R.multiplyByVector(e, ie, ie),
                                (ie = a.normalize(ie, ie)),
                                a.pack(ie, n, i);
                }
                function L(e, t) {
                    var n,
                        r = e.length,
                        a = {},
                        i = e[0][t].attributes;
                    for (n in i)
                        if (i.hasOwnProperty(n) && c(i[n]) && c(i[n].values)) {
                            for (
                                var o = i[n],
                                    s = o.values.length,
                                    l = !0,
                                    E = 1;
                                E < r;
                                ++E
                            ) {
                                var f = e[E][t].attributes[n];
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
                                (a[n] = new d({
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
                function b(e, t) {
                    var r,
                        i,
                        o,
                        u,
                        s,
                        l,
                        E,
                        f = e.length,
                        d = (e[0].modelMatrix, c(e[0][t].indices)),
                        p = e[0][t].primitiveType,
                        _ = L(e, t);
                    for (r in _)
                        if (_.hasOwnProperty(r))
                            for (s = _[r].values, u = 0, i = 0; i < f; ++i)
                                for (
                                    l = e[i][t].attributes[r].values,
                                        E = l.length,
                                        o = 0;
                                    o < E;
                                    ++o
                                )
                                    s[u++] = l[o];
                    var m;
                    if (d) {
                        var T = 0;
                        for (i = 0; i < f; ++i) T += e[i][t].indices.length;
                        var R = h.computeNumberOfVertices(
                                new h({
                                    attributes: _,
                                    primitiveType: S.POINTS,
                                }),
                            ),
                            A = y.createTypedArray(R, T),
                            v = 0,
                            N = 0;
                        for (i = 0; i < f; ++i) {
                            var g = e[i][t].indices,
                                I = g.length;
                            for (u = 0; u < I; ++u) A[v++] = N + g[u];
                            N += h.computeNumberOfVertices(e[i][t]);
                        }
                        m = A;
                    }
                    var M,
                        O = new a(),
                        x = 0;
                    for (i = 0; i < f; ++i) {
                        if (((M = e[i][t].boundingSphere), !c(M))) {
                            O = void 0;
                            break;
                        }
                        a.add(M.center, O, O);
                    }
                    if (c(O))
                        for (a.divideByScalar(O, f, O), i = 0; i < f; ++i) {
                            M = e[i][t].boundingSphere;
                            var w =
                                a.magnitude(a.subtract(M.center, O, se)) +
                                M.radius;
                            w > x && (x = w);
                        }
                    return new h({
                        attributes: _,
                        indices: m,
                        primitiveType: p,
                        boundingSphere: c(O) ? new n(O, x) : void 0,
                    });
                }
                function U(e) {
                    if (c(e.indices)) return e;
                    for (
                        var t = h.computeNumberOfVertices(e),
                            n = y.createTypedArray(t, t),
                            r = 0;
                        r < t;
                        ++r
                    )
                        n[r] = r;
                    return (e.indices = n), e;
                }
                function F(e) {
                    var t = h.computeNumberOfVertices(e),
                        n = y.createTypedArray(t, 3 * (t - 2));
                    (n[0] = 1), (n[1] = 0), (n[2] = 2);
                    for (var r = 3, a = 3; a < t; ++a)
                        (n[r++] = a - 1), (n[r++] = 0), (n[r++] = a);
                    return (e.indices = n), (e.primitiveType = S.TRIANGLES), e;
                }
                function D(e) {
                    var t = h.computeNumberOfVertices(e),
                        n = y.createTypedArray(t, 3 * (t - 2));
                    (n[0] = 0),
                        (n[1] = 1),
                        (n[2] = 2),
                        t > 3 && ((n[3] = 0), (n[4] = 2), (n[5] = 3));
                    for (var r = 6, a = 3; a < t - 1; a += 2)
                        (n[r++] = a),
                            (n[r++] = a - 1),
                            (n[r++] = a + 1),
                            a + 2 < t &&
                                ((n[r++] = a),
                                (n[r++] = a + 1),
                                (n[r++] = a + 2));
                    return (e.indices = n), (e.primitiveType = S.TRIANGLES), e;
                }
                function B(e) {
                    if (c(e.indices)) return e;
                    for (
                        var t = h.computeNumberOfVertices(e),
                            n = y.createTypedArray(t, t),
                            r = 0;
                        r < t;
                        ++r
                    )
                        n[r] = r;
                    return (e.indices = n), e;
                }
                function z(e) {
                    var t = h.computeNumberOfVertices(e),
                        n = y.createTypedArray(t, 2 * (t - 1));
                    (n[0] = 0), (n[1] = 1);
                    for (var r = 2, a = 2; a < t; ++a)
                        (n[r++] = a - 1), (n[r++] = a);
                    return (e.indices = n), (e.primitiveType = S.LINES), e;
                }
                function G(e) {
                    var t = h.computeNumberOfVertices(e),
                        n = y.createTypedArray(t, 2 * t);
                    (n[0] = 0), (n[1] = 1);
                    for (var r = 2, a = 2; a < t; ++a)
                        (n[r++] = a - 1), (n[r++] = a);
                    return (
                        (n[r++] = t - 1),
                        (n[r] = 0),
                        (e.indices = n),
                        (e.primitiveType = S.LINES),
                        e
                    );
                }
                function q(e) {
                    switch (e.primitiveType) {
                        case S.TRIANGLE_FAN:
                            return F(e);
                        case S.TRIANGLE_STRIP:
                            return D(e);
                        case S.TRIANGLES:
                            return U(e);
                        case S.LINE_STRIP:
                            return z(e);
                        case S.LINE_LOOP:
                            return G(e);
                        case S.LINES:
                            return B(e);
                    }
                    return e;
                }
                function V(e, t) {
                    Math.abs(e.y) < T.EPSILON6 &&
                        (e.y = t ? -T.EPSILON6 : T.EPSILON6);
                }
                function X(e, t, n) {
                    if (0 !== e.y && 0 !== t.y && 0 !== n.y)
                        return V(e, e.y < 0), V(t, t.y < 0), void V(n, n.y < 0);
                    var r,
                        a = Math.abs(e.y),
                        i = Math.abs(t.y),
                        o = Math.abs(n.y);
                    r =
                        a > i
                            ? a > o
                                ? T.sign(e.y)
                                : T.sign(n.y)
                            : i > o
                              ? T.sign(t.y)
                              : T.sign(n.y);
                    var u = r < 0;
                    V(e, u), V(t, u), V(n, u);
                }
                function W(e, t, n, r) {
                    a.add(
                        e,
                        a.multiplyByScalar(
                            a.subtract(t, e, Ae),
                            e.y / (e.y - t.y),
                            Ae,
                        ),
                        n,
                    ),
                        a.clone(n, r),
                        V(n, !0),
                        V(r, !1);
                }
                function H(e, t, n) {
                    if (!(e.x >= 0 || t.x >= 0 || n.x >= 0)) {
                        X(e, t, n);
                        var r = e.y < 0,
                            a = t.y < 0,
                            i = n.y < 0,
                            o = 0;
                        (o += r ? 1 : 0), (o += a ? 1 : 0), (o += i ? 1 : 0);
                        var u = Ie.indices;
                        1 === o
                            ? ((u[1] = 3),
                              (u[2] = 4),
                              (u[5] = 6),
                              (u[7] = 6),
                              (u[8] = 5),
                              r
                                  ? (W(e, t, ve, Ne),
                                    W(e, n, Se, ge),
                                    (u[0] = 0),
                                    (u[3] = 1),
                                    (u[4] = 2),
                                    (u[6] = 1))
                                  : a
                                    ? (W(t, n, ve, Ne),
                                      W(t, e, Se, ge),
                                      (u[0] = 1),
                                      (u[3] = 2),
                                      (u[4] = 0),
                                      (u[6] = 2))
                                    : i &&
                                      (W(n, e, ve, Ne),
                                      W(n, t, Se, ge),
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
                              r
                                  ? a
                                      ? i ||
                                        (W(n, e, ve, Ne),
                                        W(n, t, Se, ge),
                                        (u[0] = 0),
                                        (u[1] = 1),
                                        (u[3] = 0),
                                        (u[6] = 2))
                                      : (W(t, n, ve, Ne),
                                        W(t, e, Se, ge),
                                        (u[0] = 2),
                                        (u[1] = 0),
                                        (u[3] = 2),
                                        (u[6] = 1))
                                  : (W(e, t, ve, Ne),
                                    W(e, n, Se, ge),
                                    (u[0] = 1),
                                    (u[1] = 2),
                                    (u[3] = 1),
                                    (u[6] = 0)));
                        var s = Ie.positions;
                        return (
                            (s[0] = e),
                            (s[1] = t),
                            (s[2] = n),
                            (s.length = 3),
                            (1 !== o && 2 !== o) ||
                                ((s[3] = ve),
                                (s[4] = Se),
                                (s[5] = Ne),
                                (s[6] = ge),
                                (s.length = 7)),
                            Ie
                        );
                    }
                }
                function Y(e, t) {
                    var r = e.attributes;
                    if (0 !== r.position.values.length) {
                        for (var a in r)
                            if (
                                r.hasOwnProperty(a) &&
                                c(r[a]) &&
                                c(r[a].values)
                            ) {
                                var i = r[a];
                                i.values = u.createTypedArray(
                                    i.componentDatatype,
                                    i.values,
                                );
                            }
                        var o = h.computeNumberOfVertices(e);
                        return (
                            (e.indices = y.createTypedArray(o, e.indices)),
                            t &&
                                (e.boundingSphere = n.fromVertices(
                                    r.position.values,
                                )),
                            e
                        );
                    }
                }
                function k(e) {
                    var t = e.attributes,
                        n = {};
                    for (var r in t)
                        if (t.hasOwnProperty(r) && c(t[r]) && c(t[r].values)) {
                            var a = t[r];
                            n[r] = new d({
                                componentDatatype: a.componentDatatype,
                                componentsPerAttribute:
                                    a.componentsPerAttribute,
                                normalize: a.normalize,
                                values: [],
                            });
                        }
                    return new h({
                        attributes: n,
                        indices: [],
                        primitiveType: e.primitiveType,
                    });
                }
                function Z(e, t, n) {
                    var r = c(e.geometry.boundingSphere);
                    (t = Y(t, r)),
                        (n = Y(n, r)),
                        c(n) && !c(t)
                            ? (e.geometry = n)
                            : !c(n) && c(t)
                              ? (e.geometry = t)
                              : ((e.westHemisphereGeometry = t),
                                (e.eastHemisphereGeometry = n),
                                (e.geometry = void 0));
                }
                function K(e, n, i, o, u, s, l, E, f, h, d, p) {
                    if (c(s) || c(l) || c(E) || c(f) || c(h)) {
                        var y = a.fromArray(u, 3 * e, Me),
                            _ = a.fromArray(u, 3 * n, Oe),
                            m = a.fromArray(u, 3 * i, xe),
                            T = t(o, y, _, m, we);
                        if (c(s)) {
                            var R = a.fromArray(s, 3 * e, Me),
                                A = a.fromArray(s, 3 * n, Oe),
                                v = a.fromArray(s, 3 * i, xe);
                            a.multiplyByScalar(R, T.x, R),
                                a.multiplyByScalar(A, T.y, A),
                                a.multiplyByScalar(v, T.z, v);
                            var S = a.add(R, A, R);
                            a.add(S, v, S),
                                a.normalize(S, S),
                                a.pack(S, d.normal.values, 3 * p);
                        }
                        if (c(h)) {
                            var N = a.fromArray(h, 3 * e, Me),
                                g = a.fromArray(h, 3 * n, Oe),
                                I = a.fromArray(h, 3 * i, xe);
                            a.multiplyByScalar(N, T.x, N),
                                a.multiplyByScalar(g, T.y, g),
                                a.multiplyByScalar(I, T.z, I);
                            var M;
                            a.equals(N, a.ZERO) &&
                            a.equals(g, a.ZERO) &&
                            a.equals(I, a.ZERO)
                                ? ((M = Me), (M.x = 0), (M.y = 0), (M.z = 0))
                                : ((M = a.add(N, g, N)),
                                  a.add(M, I, M),
                                  a.normalize(M, M)),
                                a.pack(M, d.extrudeDirection.values, 3 * p);
                        }
                        if (c(l)) {
                            var O = a.fromArray(l, 3 * e, Me),
                                x = a.fromArray(l, 3 * n, Oe),
                                w = a.fromArray(l, 3 * i, xe);
                            a.multiplyByScalar(O, T.x, O),
                                a.multiplyByScalar(x, T.y, x),
                                a.multiplyByScalar(w, T.z, w);
                            var C = a.add(O, x, O);
                            a.add(C, w, C),
                                a.normalize(C, C),
                                a.pack(C, d.tangent.values, 3 * p);
                        }
                        if (c(E)) {
                            var P = a.fromArray(E, 3 * e, Me),
                                L = a.fromArray(E, 3 * n, Oe),
                                b = a.fromArray(E, 3 * i, xe);
                            a.multiplyByScalar(P, T.x, P),
                                a.multiplyByScalar(L, T.y, L),
                                a.multiplyByScalar(b, T.z, b);
                            var U = a.add(P, L, P);
                            a.add(U, b, U),
                                a.normalize(U, U),
                                a.pack(U, d.bitangent.values, 3 * p);
                        }
                        if (c(f)) {
                            var F = r.fromArray(f, 2 * e, Ce),
                                D = r.fromArray(f, 2 * n, Pe),
                                B = r.fromArray(f, 2 * i, Le);
                            r.multiplyByScalar(F, T.x, F),
                                r.multiplyByScalar(D, T.y, D),
                                r.multiplyByScalar(B, T.z, B);
                            var z = r.add(F, D, F);
                            r.add(z, B, z), r.pack(z, d.st.values, 2 * p);
                        }
                    }
                }
                function j(e, t, n, r, a, i) {
                    var o = e.position.values.length / 3;
                    if (-1 !== a) {
                        var u = r[a],
                            s = n[u];
                        return -1 === s
                            ? ((n[u] = o),
                              e.position.values.push(i.x, i.y, i.z),
                              t.push(o),
                              o)
                            : (t.push(s), s);
                    }
                    return e.position.values.push(i.x, i.y, i.z), t.push(o), o;
                }
                function Q(e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        u = e.geometry,
                        s = u.attributes,
                        l = s.position.values,
                        E = c(s.normal) ? s.normal.values : void 0,
                        f = c(s.bitangent) ? s.bitangent.values : void 0,
                        h = c(s.tangent) ? s.tangent.values : void 0,
                        d = c(s.st) ? s.st.values : void 0,
                        p = c(s.extrudeDirection)
                            ? s.extrudeDirection.values
                            : void 0,
                        y = u.indices,
                        _ = k(u),
                        m = k(u),
                        T = [];
                    T.length = l.length / 3;
                    var R = [];
                    for (R.length = l.length / 3, o = 0; o < T.length; ++o)
                        (T[o] = -1), (R[o] = -1);
                    var A = y.length;
                    for (o = 0; o < A; o += 3) {
                        var v = y[o],
                            S = y[o + 1],
                            N = y[o + 2],
                            g = a.fromArray(l, 3 * v),
                            I = a.fromArray(l, 3 * S),
                            M = a.fromArray(l, 3 * N),
                            O = H(g, I, M);
                        if (c(O) && O.positions.length > 3)
                            for (
                                var x = O.positions,
                                    w = O.indices,
                                    C = w.length,
                                    P = 0;
                                P < C;
                                ++P
                            ) {
                                var L = w[P],
                                    b = x[L];
                                b.y < 0
                                    ? ((t = m.attributes),
                                      (n = m.indices),
                                      (r = T))
                                    : ((t = _.attributes),
                                      (n = _.indices),
                                      (r = R)),
                                    (i = j(t, n, r, y, L < 3 ? o + L : -1, b)),
                                    K(v, S, N, b, l, E, h, f, d, p, t, i);
                            }
                        else
                            c(O) &&
                                ((g = O.positions[0]),
                                (I = O.positions[1]),
                                (M = O.positions[2])),
                                g.y < 0
                                    ? ((t = m.attributes),
                                      (n = m.indices),
                                      (r = T))
                                    : ((t = _.attributes),
                                      (n = _.indices),
                                      (r = R)),
                                (i = j(t, n, r, y, o, g)),
                                K(v, S, N, g, l, E, h, f, d, p, t, i),
                                (i = j(t, n, r, y, o + 1, I)),
                                K(v, S, N, I, l, E, h, f, d, p, t, i),
                                (i = j(t, n, r, y, o + 2, M)),
                                K(v, S, N, M, l, E, h, f, d, p, t, i);
                    }
                    Z(e, m, _);
                }
                function J(e) {
                    var t,
                        n = e.geometry,
                        r = n.attributes,
                        i = r.position.values,
                        o = n.indices,
                        u = k(n),
                        s = k(n),
                        l = o.length,
                        E = [];
                    E.length = i.length / 3;
                    var f = [];
                    for (f.length = i.length / 3, t = 0; t < E.length; ++t)
                        (E[t] = -1), (f[t] = -1);
                    for (t = 0; t < l; t += 2) {
                        var h = o[t],
                            d = o[t + 1],
                            p = a.fromArray(i, 3 * h, Me),
                            y = a.fromArray(i, 3 * d, Oe);
                        Math.abs(p.y) < T.EPSILON6 &&
                            (p.y < 0
                                ? (p.y = -T.EPSILON6)
                                : (p.y = T.EPSILON6)),
                            Math.abs(y.y) < T.EPSILON6 &&
                                (y.y < 0
                                    ? (y.y = -T.EPSILON6)
                                    : (y.y = T.EPSILON6));
                        var _ = u.attributes,
                            R = u.indices,
                            A = f,
                            v = s.attributes,
                            S = s.indices,
                            N = E,
                            g = m.lineSegmentPlane(p, y, be, xe);
                        if (c(g)) {
                            var I = a.multiplyByScalar(
                                a.UNIT_Y,
                                5 * T.EPSILON9,
                                Ue,
                            );
                            p.y < 0 &&
                                (a.negate(I, I),
                                (_ = s.attributes),
                                (R = s.indices),
                                (A = E),
                                (v = u.attributes),
                                (S = u.indices),
                                (N = f));
                            var M = a.add(g, I, Fe);
                            j(_, R, A, o, t, p),
                                j(_, R, A, o, -1, M),
                                a.negate(I, I),
                                a.add(g, I, M),
                                j(v, S, N, o, -1, M),
                                j(v, S, N, o, t + 1, y);
                        } else {
                            var O, x, w;
                            p.y < 0
                                ? ((O = s.attributes), (x = s.indices), (w = E))
                                : ((O = u.attributes),
                                  (x = u.indices),
                                  (w = f)),
                                j(O, x, w, o, t, p),
                                j(O, x, w, o, t + 1, y);
                        }
                    }
                    Z(e, s, u);
                }
                function $(e) {
                    for (
                        var t = e.attributes,
                            n = t.position.values,
                            r = t.prevPosition.values,
                            i = t.nextPosition.values,
                            o = n.length,
                            u = 0;
                        u < o;
                        u += 3
                    ) {
                        var s = a.unpack(n, u, ze);
                        if (!(s.x > 0)) {
                            var c = a.unpack(r, u, Ge);
                            ((s.y < 0 && c.y > 0) || (s.y > 0 && c.y < 0)) &&
                                (u - 3 > 0
                                    ? ((r[u] = n[u - 3]),
                                      (r[u + 1] = n[u - 2]),
                                      (r[u + 2] = n[u - 1]))
                                    : a.pack(s, r, u));
                            var l = a.unpack(i, u, qe);
                            ((s.y < 0 && l.y > 0) || (s.y > 0 && l.y < 0)) &&
                                (u + 3 < o
                                    ? ((i[u] = n[u + 3]),
                                      (i[u + 1] = n[u + 4]),
                                      (i[u + 2] = n[u + 5]))
                                    : a.pack(s, i, u));
                        }
                    }
                }
                function ee(e) {
                    var t,
                        n,
                        o,
                        u = e.geometry,
                        s = u.attributes,
                        l = s.position.values,
                        E = s.prevPosition.values,
                        f = s.nextPosition.values,
                        h = s.expandAndWidth.values,
                        d = c(s.st) ? s.st.values : void 0,
                        p = c(s.color) ? s.color.values : void 0,
                        y = k(u),
                        _ = k(u),
                        R = !1,
                        A = l.length / 3;
                    for (t = 0; t < A; t += 4) {
                        var v = t,
                            S = t + 2,
                            N = a.fromArray(l, 3 * v, ze),
                            g = a.fromArray(l, 3 * S, Ge);
                        if (Math.abs(N.y) < ke)
                            for (
                                N.y = ke * (g.y < 0 ? -1 : 1),
                                    l[3 * t + 1] = N.y,
                                    l[3 * (t + 1) + 1] = N.y,
                                    n = 3 * v;
                                n < 3 * v + 12;
                                n += 3
                            )
                                (E[n] = l[3 * t]),
                                    (E[n + 1] = l[3 * t + 1]),
                                    (E[n + 2] = l[3 * t + 2]);
                        if (Math.abs(g.y) < ke)
                            for (
                                g.y = ke * (N.y < 0 ? -1 : 1),
                                    l[3 * (t + 2) + 1] = g.y,
                                    l[3 * (t + 3) + 1] = g.y,
                                    n = 3 * v;
                                n < 3 * v + 12;
                                n += 3
                            )
                                (f[n] = l[3 * (t + 2)]),
                                    (f[n + 1] = l[3 * (t + 2) + 1]),
                                    (f[n + 2] = l[3 * (t + 2) + 2]);
                        var I = y.attributes,
                            M = y.indices,
                            O = _.attributes,
                            x = _.indices,
                            w = m.lineSegmentPlane(N, g, be, Ve);
                        if (c(w)) {
                            R = !0;
                            var C = a.multiplyByScalar(a.UNIT_Y, Ye, Xe);
                            N.y < 0 &&
                                (a.negate(C, C),
                                (I = _.attributes),
                                (M = _.indices),
                                (O = y.attributes),
                                (x = y.indices));
                            var P = a.add(w, C, We);
                            I.position.values.push(
                                N.x,
                                N.y,
                                N.z,
                                N.x,
                                N.y,
                                N.z,
                            ),
                                I.position.values.push(P.x, P.y, P.z),
                                I.position.values.push(P.x, P.y, P.z),
                                I.prevPosition.values.push(
                                    E[3 * v],
                                    E[3 * v + 1],
                                    E[3 * v + 2],
                                ),
                                I.prevPosition.values.push(
                                    E[3 * v + 3],
                                    E[3 * v + 4],
                                    E[3 * v + 5],
                                ),
                                I.prevPosition.values.push(
                                    N.x,
                                    N.y,
                                    N.z,
                                    N.x,
                                    N.y,
                                    N.z,
                                ),
                                I.nextPosition.values.push(P.x, P.y, P.z),
                                I.nextPosition.values.push(P.x, P.y, P.z),
                                I.nextPosition.values.push(P.x, P.y, P.z),
                                I.nextPosition.values.push(P.x, P.y, P.z),
                                a.negate(C, C),
                                a.add(w, C, P),
                                O.position.values.push(P.x, P.y, P.z),
                                O.position.values.push(P.x, P.y, P.z),
                                O.position.values.push(
                                    g.x,
                                    g.y,
                                    g.z,
                                    g.x,
                                    g.y,
                                    g.z,
                                ),
                                O.prevPosition.values.push(P.x, P.y, P.z),
                                O.prevPosition.values.push(P.x, P.y, P.z),
                                O.prevPosition.values.push(P.x, P.y, P.z),
                                O.prevPosition.values.push(P.x, P.y, P.z),
                                O.nextPosition.values.push(
                                    g.x,
                                    g.y,
                                    g.z,
                                    g.x,
                                    g.y,
                                    g.z,
                                ),
                                O.nextPosition.values.push(
                                    f[3 * S],
                                    f[3 * S + 1],
                                    f[3 * S + 2],
                                ),
                                O.nextPosition.values.push(
                                    f[3 * S + 3],
                                    f[3 * S + 4],
                                    f[3 * S + 5],
                                );
                            var L = r.fromArray(h, 2 * v, De),
                                b = Math.abs(L.y);
                            I.expandAndWidth.values.push(-1, b, 1, b),
                                I.expandAndWidth.values.push(-1, -b, 1, -b),
                                O.expandAndWidth.values.push(-1, b, 1, b),
                                O.expandAndWidth.values.push(-1, -b, 1, -b);
                            var U = a.magnitudeSquared(a.subtract(w, N, qe));
                            if (
                                ((U /= a.magnitudeSquared(
                                    a.subtract(g, N, qe),
                                )),
                                c(p))
                            ) {
                                var F = i.fromArray(p, 4 * v, He),
                                    D = i.fromArray(p, 4 * S, He),
                                    B = T.lerp(F.x, D.x, U),
                                    z = T.lerp(F.y, D.y, U),
                                    G = T.lerp(F.z, D.z, U),
                                    q = T.lerp(F.w, D.w, U);
                                for (n = 4 * v; n < 4 * v + 8; ++n)
                                    I.color.values.push(p[n]);
                                for (
                                    I.color.values.push(B, z, G, q),
                                        I.color.values.push(B, z, G, q),
                                        O.color.values.push(B, z, G, q),
                                        O.color.values.push(B, z, G, q),
                                        n = 4 * S;
                                    n < 4 * S + 8;
                                    ++n
                                )
                                    O.color.values.push(p[n]);
                            }
                            if (c(d)) {
                                var V = r.fromArray(d, 2 * v, De),
                                    X = r.fromArray(d, 2 * (t + 3), Be),
                                    W = T.lerp(V.x, X.x, U);
                                for (n = 2 * v; n < 2 * v + 4; ++n)
                                    I.st.values.push(d[n]);
                                for (
                                    I.st.values.push(W, V.y),
                                        I.st.values.push(W, X.y),
                                        O.st.values.push(W, V.y),
                                        O.st.values.push(W, X.y),
                                        n = 2 * S;
                                    n < 2 * S + 4;
                                    ++n
                                )
                                    O.st.values.push(d[n]);
                            }
                            (o = I.position.values.length / 3 - 4),
                                M.push(o, o + 2, o + 1),
                                M.push(o + 1, o + 2, o + 3),
                                (o = O.position.values.length / 3 - 4),
                                x.push(o, o + 2, o + 1),
                                x.push(o + 1, o + 2, o + 3);
                        } else {
                            var H, Y;
                            for (
                                N.y < 0
                                    ? ((H = _.attributes), (Y = _.indices))
                                    : ((H = y.attributes), (Y = y.indices)),
                                    H.position.values.push(N.x, N.y, N.z),
                                    H.position.values.push(N.x, N.y, N.z),
                                    H.position.values.push(g.x, g.y, g.z),
                                    H.position.values.push(g.x, g.y, g.z),
                                    n = 3 * t;
                                n < 3 * t + 12;
                                ++n
                            )
                                H.prevPosition.values.push(E[n]),
                                    H.nextPosition.values.push(f[n]);
                            for (n = 2 * t; n < 2 * t + 8; ++n)
                                H.expandAndWidth.values.push(h[n]),
                                    c(d) && H.st.values.push(d[n]);
                            if (c(p))
                                for (n = 4 * t; n < 4 * t + 16; ++n)
                                    H.color.values.push(p[n]);
                            (o = H.position.values.length / 3 - 4),
                                Y.push(o, o + 2, o + 1),
                                Y.push(o + 1, o + 2, o + 3);
                        }
                    }
                    R && ($(_), $(y)), Z(e, _, y);
                }
                var te = {};
                (te.toWireframe = function (e) {
                    var t = e.indices;
                    if (c(t)) {
                        switch (e.primitiveType) {
                            case S.TRIANGLES:
                                e.indices = I(t);
                                break;
                            case S.TRIANGLE_STRIP:
                                e.indices = M(t);
                                break;
                            case S.TRIANGLE_FAN:
                                e.indices = O(t);
                        }
                        e.primitiveType = S.LINES;
                    }
                    return e;
                }),
                    (te.createLineSegmentsForVectors = function (e, t, r) {
                        (t = s(t, 'normal')), (r = s(r, 1e4));
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
                                (l[E++] = a[f] + i[f] * r),
                                (l[E++] = a[f + 1] + i[f + 1] * r),
                                (l[E++] = a[f + 2] + i[f + 2] * r);
                        var p,
                            y = e.boundingSphere;
                        return (
                            c(y) && (p = new n(y.center, y.radius + r)),
                            new h({
                                attributes: {
                                    position: new d({
                                        componentDatatype: u.DOUBLE,
                                        componentsPerAttribute: 3,
                                        values: l,
                                    }),
                                },
                                primitiveType: S.LINES,
                                boundingSphere: p,
                            })
                        );
                    }),
                    (te.createAttributeLocations = function (e) {
                        var t,
                            n = [
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
                            r = e.attributes,
                            a = {},
                            i = 0,
                            o = n.length;
                        for (t = 0; t < o; ++t) {
                            var u = n[t];
                            c(r[u]) && (a[u] = i++);
                        }
                        for (var s in r)
                            r.hasOwnProperty(s) && !c(a[s]) && (a[s] = i++);
                        return a;
                    }),
                    (te.reorderForPreVertexCache = function (e) {
                        var t = h.computeNumberOfVertices(e),
                            n = e.indices;
                        if (c(n)) {
                            for (var r = new Int32Array(t), a = 0; a < t; a++)
                                r[a] = -1;
                            for (
                                var i,
                                    o = n,
                                    s = o.length,
                                    l = y.createTypedArray(t, s),
                                    E = 0,
                                    f = 0,
                                    d = 0;
                                E < s;

                            )
                                (i = r[o[E]]),
                                    -1 !== i
                                        ? (l[f] = i)
                                        : ((i = o[E]),
                                          (r[i] = d),
                                          (l[f] = d),
                                          ++d),
                                    ++E,
                                    ++f;
                            e.indices = l;
                            var p = e.attributes;
                            for (var _ in p)
                                if (
                                    p.hasOwnProperty(_) &&
                                    c(p[_]) &&
                                    c(p[_].values)
                                ) {
                                    for (
                                        var m = p[_],
                                            T = m.values,
                                            R = 0,
                                            A = m.componentsPerAttribute,
                                            v = u.createTypedArray(
                                                m.componentDatatype,
                                                d * A,
                                            );
                                        R < t;

                                    ) {
                                        var S = r[R];
                                        if (-1 !== S)
                                            for (var N = 0; N < A; N++)
                                                v[A * S + N] = T[A * R + N];
                                        ++R;
                                    }
                                    m.values = v;
                                }
                        }
                        return e;
                    }),
                    (te.reorderForPostVertexCache = function (e, t) {
                        var n = e.indices;
                        if (e.primitiveType === S.TRIANGLES && c(n)) {
                            for (var r = n.length, a = 0, i = 0; i < r; i++)
                                n[i] > a && (a = n[i]);
                            e.indices = N.tipsify({
                                indices: n,
                                maximumIndex: a,
                                cacheSize: t,
                            });
                        }
                        return e;
                    }),
                    (te.fitToUnsignedShortIndices = function (e) {
                        var t = [],
                            n = h.computeNumberOfVertices(e);
                        if (c(e.indices) && n >= T.SIXTY_FOUR_KILOBYTES) {
                            var r,
                                a = [],
                                i = [],
                                o = 0,
                                u = x(e.attributes),
                                s = e.indices,
                                l = s.length;
                            e.primitiveType === S.TRIANGLES
                                ? (r = 3)
                                : e.primitiveType === S.LINES
                                  ? (r = 2)
                                  : e.primitiveType === S.POINTS && (r = 1);
                            for (var E = 0; E < l; E += r) {
                                for (var f = 0; f < r; ++f) {
                                    var d = s[E + f],
                                        p = a[d];
                                    c(p) ||
                                        ((p = o++),
                                        (a[d] = p),
                                        w(u, e.attributes, d)),
                                        i.push(p);
                                }
                                o + r >= T.SIXTY_FOUR_KILOBYTES &&
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
                                    (u = x(e.attributes)));
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
                var ne = new a(),
                    re = new o();
                te.projectTo2D = function (e, t, n, r, i) {
                    var o = e.attributes[t];
                    i = c(i) ? i : new f();
                    for (
                        var s = i.ellipsoid,
                            l = o.values,
                            E = new Float64Array(l.length),
                            h = 0,
                            p = 0;
                        p < l.length;
                        p += 3
                    ) {
                        var y = a.fromArray(l, p, ne),
                            _ = s.cartesianToCartographic(y, re),
                            m = i.project(_, ne);
                        (E[h++] = m.x), (E[h++] = m.y), (E[h++] = m.z);
                    }
                    return (
                        (e.attributes[n] = o),
                        (e.attributes[r] = new d({
                            componentDatatype: u.DOUBLE,
                            componentsPerAttribute: 3,
                            values: E,
                        })),
                        delete e.attributes[t],
                        e
                    );
                };
                var ae = { high: 0, low: 0 };
                te.encodeAttribute = function (e, t, n, r) {
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
                        (e.attributes[n] = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: f,
                            values: s,
                        })),
                        (e.attributes[r] = new d({
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
                    var r = e.geometry.attributes;
                    C(t, r.position),
                        C(t, r.prevPosition),
                        C(t, r.nextPosition),
                        (c(r.normal) || c(r.tangent) || c(r.bitangent)) &&
                            (A.inverse(t, oe),
                            A.transpose(oe, oe),
                            A.getRotation(oe, ue),
                            P(ue, r.normal),
                            P(ue, r.tangent),
                            P(ue, r.bitangent));
                    var a = e.geometry.boundingSphere;
                    return (
                        c(a) &&
                            (e.geometry.boundingSphere = n.transform(a, t, a)),
                        (e.modelMatrix = A.clone(A.IDENTITY)),
                        e
                    );
                };
                var se = new a();
                te.combineInstances = function (e) {
                    for (var t = [], n = [], r = e.length, a = 0; a < r; ++a) {
                        var i = e[a];
                        c(i.geometry)
                            ? t.push(i)
                            : c(i.westHemisphereGeometry) &&
                              c(i.eastHemisphereGeometry) &&
                              n.push(i);
                    }
                    var o = [];
                    return (
                        t.length > 0 && o.push(b(t, 'geometry')),
                        n.length > 0 &&
                            (o.push(b(n, 'westHemisphereGeometry')),
                            o.push(b(n, 'eastHemisphereGeometry'))),
                        o
                    );
                };
                var ce = new a(),
                    le = new a(),
                    Ee = new a(),
                    fe = new a();
                te.computeNormal = function (e) {
                    var t,
                        n = e.indices,
                        r = e.attributes,
                        i = r.position.values,
                        o = r.position.values.length / 3,
                        s = n.length,
                        c = new Array(o),
                        l = new Array(s / 3),
                        E = new Array(s);
                    for (t = 0; t < o; t++)
                        c[t] = { indexOffset: 0, count: 0, currentCount: 0 };
                    var f = 0;
                    for (t = 0; t < s; t += 3) {
                        var h = n[t],
                            p = n[t + 1],
                            y = n[t + 2],
                            _ = 3 * h,
                            m = 3 * p,
                            R = 3 * y;
                        (le.x = i[_]),
                            (le.y = i[_ + 1]),
                            (le.z = i[_ + 2]),
                            (Ee.x = i[m]),
                            (Ee.y = i[m + 1]),
                            (Ee.z = i[m + 2]),
                            (fe.x = i[R]),
                            (fe.y = i[R + 1]),
                            (fe.z = i[R + 2]),
                            c[h].count++,
                            c[p].count++,
                            c[y].count++,
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
                        v = c[n[t]];
                        var S = v.indexOffset + v.currentCount;
                        (E[S] = f),
                            v.currentCount++,
                            (v = c[n[t + 1]]),
                            (S = v.indexOffset + v.currentCount),
                            (E[S] = f),
                            v.currentCount++,
                            (v = c[n[t + 2]]),
                            (S = v.indexOffset + v.currentCount),
                            (E[S] = f),
                            v.currentCount++,
                            f++;
                    }
                    var N = new Float32Array(3 * o);
                    for (t = 0; t < o; t++) {
                        var g = 3 * t;
                        if (((v = c[t]), a.clone(a.ZERO, ce), v.count > 0)) {
                            for (f = 0; f < v.count; f++)
                                a.add(ce, l[E[v.indexOffset + f]], ce);
                            a.equalsEpsilon(a.ZERO, ce, T.EPSILON10) &&
                                a.clone(l[E[v.indexOffset]], ce);
                        }
                        a.equalsEpsilon(a.ZERO, ce, T.EPSILON10) && (ce.z = 1),
                            a.normalize(ce, ce),
                            (N[g] = ce.x),
                            (N[g + 1] = ce.y),
                            (N[g + 2] = ce.z);
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
                    pe = new a();
                te.computeTangentAndBitangent = function (e) {
                    var t,
                        n = (e.attributes, e.indices),
                        r = e.attributes.position.values,
                        i = e.attributes.normal.values,
                        o = e.attributes.st.values,
                        s = e.attributes.position.values.length / 3,
                        c = n.length,
                        l = new Array(3 * s);
                    for (t = 0; t < l.length; t++) l[t] = 0;
                    var E, f, h;
                    for (t = 0; t < c; t += 3) {
                        var p = n[t],
                            y = n[t + 1],
                            _ = n[t + 2];
                        (E = 3 * p), (f = 3 * y), (h = 3 * _);
                        var m = 2 * p,
                            T = 2 * y,
                            R = 2 * _,
                            A = r[E],
                            v = r[E + 1],
                            S = r[E + 2],
                            N = o[m],
                            g = o[m + 1],
                            I = o[T + 1] - g,
                            M = o[R + 1] - g,
                            O = 1 / ((o[T] - N) * M - (o[R] - N) * I),
                            x = (M * (r[f] - A) - I * (r[h] - A)) * O,
                            w = (M * (r[f + 1] - v) - I * (r[h + 1] - v)) * O,
                            C = (M * (r[f + 2] - S) - I * (r[h + 2] - S)) * O;
                        (l[E] += x),
                            (l[E + 1] += w),
                            (l[E + 2] += C),
                            (l[f] += x),
                            (l[f + 1] += w),
                            (l[f + 2] += C),
                            (l[h] += x),
                            (l[h + 1] += w),
                            (l[h + 2] += C);
                    }
                    var P = new Float32Array(3 * s),
                        L = new Float32Array(3 * s);
                    for (t = 0; t < s; t++) {
                        (E = 3 * t), (f = E + 1), (h = E + 2);
                        var b = a.fromArray(i, E, he),
                            U = a.fromArray(l, E, pe),
                            F = a.dot(b, U);
                        a.multiplyByScalar(b, F, de),
                            a.normalize(a.subtract(U, de, U), U),
                            (P[E] = U.x),
                            (P[f] = U.y),
                            (P[h] = U.z),
                            a.normalize(a.cross(b, U, U), U),
                            (L[E] = U.x),
                            (L[f] = U.y),
                            (L[h] = U.z);
                    }
                    return (
                        (e.attributes.tangent = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: P,
                        })),
                        (e.attributes.bitangent = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: L,
                        })),
                        e
                    );
                };
                var ye = new r(),
                    _e = new a(),
                    me = new a(),
                    Te = new a(),
                    Re = new r();
                te.compressVertices = function (t) {
                    var n,
                        i,
                        o = t.attributes.extrudeDirection;
                    if (c(o)) {
                        var s = o.values;
                        i = s.length / 3;
                        var l = new Float32Array(2 * i),
                            E = 0;
                        for (n = 0; n < i; ++n)
                            a.fromArray(s, 3 * n, _e),
                                a.equals(_e, a.ZERO)
                                    ? (E += 2)
                                    : ((Re = e.octEncodeInRange(_e, 65535, Re)),
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
                        p = c(f),
                        y = c(h);
                    if (!p && !y) return t;
                    var _,
                        m,
                        T,
                        R,
                        A = t.attributes.tangent,
                        v = t.attributes.bitangent,
                        S = c(A),
                        N = c(v);
                    p && (_ = f.values),
                        y && (m = h.values),
                        S && (T = A.values),
                        N && (R = v.values),
                        (i = (p ? _.length : m.length) / (p ? 3 : 2));
                    var g = i,
                        I = y && p ? 2 : 1;
                    (I += S || N ? 1 : 0), (g *= I);
                    var M = new Float32Array(g),
                        O = 0;
                    for (n = 0; n < i; ++n) {
                        y &&
                            (r.fromArray(m, 2 * n, ye),
                            (M[O++] = e.compressTextureCoordinates(ye)));
                        var x = 3 * n;
                        p && c(T) && c(R)
                            ? (a.fromArray(_, x, _e),
                              a.fromArray(T, x, me),
                              a.fromArray(R, x, Te),
                              e.octPack(_e, me, Te, ye),
                              (M[O++] = ye.x),
                              (M[O++] = ye.y))
                            : (p &&
                                  (a.fromArray(_, x, _e),
                                  (M[O++] = e.octEncodeFloat(_e))),
                              S &&
                                  (a.fromArray(T, x, _e),
                                  (M[O++] = e.octEncodeFloat(_e))),
                              N &&
                                  (a.fromArray(R, x, _e),
                                  (M[O++] = e.octEncodeFloat(_e))));
                    }
                    return (
                        (t.attributes.compressedAttributes = new d({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: I,
                            values: M,
                        })),
                        p && delete t.attributes.normal,
                        y && delete t.attributes.st,
                        N && delete t.attributes.bitangent,
                        S && delete t.attributes.tangent,
                        t
                    );
                };
                var Ae = new a(),
                    ve = new a(),
                    Se = new a(),
                    Ne = new a(),
                    ge = new a(),
                    Ie = { positions: new Array(7), indices: new Array(9) },
                    Me = new a(),
                    Oe = new a(),
                    xe = new a(),
                    we = new a(),
                    Ce = new r(),
                    Pe = new r(),
                    Le = new r(),
                    be = v.fromPointNormal(a.ZERO, a.UNIT_Y),
                    Ue = new a(),
                    Fe = new a(),
                    De = new r(),
                    Be = new r(),
                    ze = new a(),
                    Ge = new a(),
                    qe = new a(),
                    Ve = new a(),
                    Xe = new a(),
                    We = new a(),
                    He = new i(),
                    Ye = 5 * T.EPSILON9,
                    ke = T.EPSILON6;
                return (
                    (te.splitLongitude = function (e) {
                        var t = e.geometry,
                            r = t.boundingSphere;
                        if (c(r)) {
                            if (
                                r.center.x - r.radius > 0 ||
                                n.intersectPlane(r, v.ORIGIN_ZX_PLANE) !==
                                    _.INTERSECTING
                            )
                                return e;
                        }
                        if (t.geometryType !== p.NONE)
                            switch (t.geometryType) {
                                case p.POLYLINES:
                                    ee(e);
                                    break;
                                case p.TRIANGLES:
                                    Q(e);
                                    break;
                                case p.LINES:
                                    J(e);
                            }
                        else
                            q(t),
                                t.primitiveType === S.TRIANGLES
                                    ? Q(e)
                                    : t.primitiveType === S.LINES && J(e);
                        return e;
                    }),
                    te
                );
            },
        ),
        define('ThirdParty/earcut-2.1.1', [], function () {
            'use strict';
            function e(e, n, a) {
                a = a || 2;
                var i = n && n.length,
                    o = i ? n[0] * a : e.length,
                    u = t(e, 0, o, a, !0),
                    c = [];
                if (!u) return c;
                var l, E, f, h, d, p, y;
                if ((i && (u = s(e, n, u, a)), e.length > 80 * a)) {
                    (l = f = e[0]), (E = h = e[1]);
                    for (var _ = a; _ < o; _ += a)
                        (d = e[_]),
                            (p = e[_ + 1]),
                            d < l && (l = d),
                            p < E && (E = p),
                            d > f && (f = d),
                            p > h && (h = p);
                    y = Math.max(f - l, h - E);
                }
                return r(u, c, a, l, E, y), c;
            }
            function t(e, t, n, r, a) {
                var i, o;
                if (a === O(e, t, n, r) > 0)
                    for (i = t; i < n; i += r) o = g(i, e[i], e[i + 1], o);
                else
                    for (i = n - r; i >= t; i -= r) o = g(i, e[i], e[i + 1], o);
                return o && T(o, o.next) && (I(o), (o = o.next)), o;
            }
            function n(e, t) {
                if (!e) return e;
                t || (t = e);
                var n,
                    r = e;
                do {
                    if (
                        ((n = !1),
                        r.steiner ||
                            (!T(r, r.next) && 0 !== m(r.prev, r, r.next)))
                    )
                        r = r.next;
                    else {
                        if ((I(r), (r = t = r.prev) === r.next)) return null;
                        n = !0;
                    }
                } while (n || r !== t);
                return t;
            }
            function r(e, t, s, c, l, E, h) {
                if (e) {
                    !h && E && f(e, c, l, E);
                    for (var d, p, y = e; e.prev !== e.next; )
                        if (
                            ((d = e.prev),
                            (p = e.next),
                            E ? i(e, c, l, E) : a(e))
                        )
                            t.push(d.i / s),
                                t.push(e.i / s),
                                t.push(p.i / s),
                                I(e),
                                (e = p.next),
                                (y = p.next);
                        else if ((e = p) === y) {
                            h
                                ? 1 === h
                                    ? ((e = o(e, t, s)), r(e, t, s, c, l, E, 2))
                                    : 2 === h && u(e, t, s, c, l, E)
                                : r(n(e), t, s, c, l, E, 1);
                            break;
                        }
                }
            }
            function a(e) {
                var t = e.prev,
                    n = e,
                    r = e.next;
                if (m(t, n, r) >= 0) return !1;
                for (var a = e.next.next; a !== e.prev; ) {
                    if (
                        y(t.x, t.y, n.x, n.y, r.x, r.y, a.x, a.y) &&
                        m(a.prev, a, a.next) >= 0
                    )
                        return !1;
                    a = a.next;
                }
                return !0;
            }
            function i(e, t, n, r) {
                var a = e.prev,
                    i = e,
                    o = e.next;
                if (m(a, i, o) >= 0) return !1;
                for (
                    var u =
                            a.x < i.x
                                ? a.x < o.x
                                    ? a.x
                                    : o.x
                                : i.x < o.x
                                  ? i.x
                                  : o.x,
                        s =
                            a.y < i.y
                                ? a.y < o.y
                                    ? a.y
                                    : o.y
                                : i.y < o.y
                                  ? i.y
                                  : o.y,
                        c =
                            a.x > i.x
                                ? a.x > o.x
                                    ? a.x
                                    : o.x
                                : i.x > o.x
                                  ? i.x
                                  : o.x,
                        l =
                            a.y > i.y
                                ? a.y > o.y
                                    ? a.y
                                    : o.y
                                : i.y > o.y
                                  ? i.y
                                  : o.y,
                        E = d(u, s, t, n, r),
                        f = d(c, l, t, n, r),
                        h = e.nextZ;
                    h && h.z <= f;

                ) {
                    if (
                        h !== e.prev &&
                        h !== e.next &&
                        y(a.x, a.y, i.x, i.y, o.x, o.y, h.x, h.y) &&
                        m(h.prev, h, h.next) >= 0
                    )
                        return !1;
                    h = h.nextZ;
                }
                for (h = e.prevZ; h && h.z >= E; ) {
                    if (
                        h !== e.prev &&
                        h !== e.next &&
                        y(a.x, a.y, i.x, i.y, o.x, o.y, h.x, h.y) &&
                        m(h.prev, h, h.next) >= 0
                    )
                        return !1;
                    h = h.prevZ;
                }
                return !0;
            }
            function o(e, t, n) {
                var r = e;
                do {
                    var a = r.prev,
                        i = r.next.next;
                    !T(a, i) &&
                        R(a, r, r.next, i) &&
                        v(a, i) &&
                        v(i, a) &&
                        (t.push(a.i / n),
                        t.push(r.i / n),
                        t.push(i.i / n),
                        I(r),
                        I(r.next),
                        (r = e = i)),
                        (r = r.next);
                } while (r !== e);
                return r;
            }
            function u(e, t, a, i, o, u) {
                var s = e;
                do {
                    for (var c = s.next.next; c !== s.prev; ) {
                        if (s.i !== c.i && _(s, c)) {
                            var l = N(s, c);
                            return (
                                (s = n(s, s.next)),
                                (l = n(l, l.next)),
                                r(s, t, a, i, o, u),
                                void r(l, t, a, i, o, u)
                            );
                        }
                        c = c.next;
                    }
                    s = s.next;
                } while (s !== e);
            }
            function s(e, r, a, i) {
                var o,
                    u,
                    s,
                    E,
                    f,
                    h = [];
                for (o = 0, u = r.length; o < u; o++)
                    (s = r[o] * i),
                        (E = o < u - 1 ? r[o + 1] * i : e.length),
                        (f = t(e, s, E, i, !1)),
                        f === f.next && (f.steiner = !0),
                        h.push(p(f));
                for (h.sort(c), o = 0; o < h.length; o++)
                    l(h[o], a), (a = n(a, a.next));
                return a;
            }
            function c(e, t) {
                return e.x - t.x;
            }
            function l(e, t) {
                if ((t = E(e, t))) {
                    var r = N(t, e);
                    n(r, r.next);
                }
            }
            function E(e, t) {
                var n,
                    r = t,
                    a = e.x,
                    i = e.y,
                    o = -1 / 0;
                do {
                    if (i <= r.y && i >= r.next.y) {
                        var u =
                            r.x +
                            ((i - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
                        if (u <= a && u > o) {
                            if (((o = u), u === a)) {
                                if (i === r.y) return r;
                                if (i === r.next.y) return r.next;
                            }
                            n = r.x < r.next.x ? r : r.next;
                        }
                    }
                    r = r.next;
                } while (r !== t);
                if (!n) return null;
                if (a === o) return n.prev;
                var s,
                    c = n,
                    l = n.x,
                    E = n.y,
                    f = 1 / 0;
                for (r = n.next; r !== c; )
                    a >= r.x &&
                        r.x >= l &&
                        y(i < E ? a : o, i, l, E, i < E ? o : a, i, r.x, r.y) &&
                        ((s = Math.abs(i - r.y) / (a - r.x)) < f ||
                            (s === f && r.x > n.x)) &&
                        v(r, e) &&
                        ((n = r), (f = s)),
                        (r = r.next);
                return n;
            }
            function f(e, t, n, r) {
                var a = e;
                do {
                    null === a.z && (a.z = d(a.x, a.y, t, n, r)),
                        (a.prevZ = a.prev),
                        (a.nextZ = a.next),
                        (a = a.next);
                } while (a !== e);
                (a.prevZ.nextZ = null), (a.prevZ = null), h(a);
            }
            function h(e) {
                var t,
                    n,
                    r,
                    a,
                    i,
                    o,
                    u,
                    s,
                    c = 1;
                do {
                    for (n = e, e = null, i = null, o = 0; n; ) {
                        for (
                            o++, r = n, u = 0, t = 0;
                            t < c && (u++, (r = r.nextZ));
                            t++
                        );
                        for (s = c; u > 0 || (s > 0 && r); )
                            0 === u
                                ? ((a = r), (r = r.nextZ), s--)
                                : 0 !== s && r
                                  ? n.z <= r.z
                                      ? ((a = n), (n = n.nextZ), u--)
                                      : ((a = r), (r = r.nextZ), s--)
                                  : ((a = n), (n = n.nextZ), u--),
                                i ? (i.nextZ = a) : (e = a),
                                (a.prevZ = i),
                                (i = a);
                        n = r;
                    }
                    (i.nextZ = null), (c *= 2);
                } while (o > 1);
                return e;
            }
            function d(e, t, n, r, a) {
                return (
                    (e = (32767 * (e - n)) / a),
                    (t = (32767 * (t - r)) / a),
                    (e = 16711935 & (e | (e << 8))),
                    (e = 252645135 & (e | (e << 4))),
                    (e = 858993459 & (e | (e << 2))),
                    (e = 1431655765 & (e | (e << 1))),
                    (t = 16711935 & (t | (t << 8))),
                    (t = 252645135 & (t | (t << 4))),
                    (t = 858993459 & (t | (t << 2))),
                    (t = 1431655765 & (t | (t << 1))),
                    e | (t << 1)
                );
            }
            function p(e) {
                var t = e,
                    n = e;
                do {
                    t.x < n.x && (n = t), (t = t.next);
                } while (t !== e);
                return n;
            }
            function y(e, t, n, r, a, i, o, u) {
                return (
                    (a - o) * (t - u) - (e - o) * (i - u) >= 0 &&
                    (e - o) * (r - u) - (n - o) * (t - u) >= 0 &&
                    (n - o) * (i - u) - (a - o) * (r - u) >= 0
                );
            }
            function _(e, t) {
                return (
                    e.next.i !== t.i &&
                    e.prev.i !== t.i &&
                    !A(e, t) &&
                    v(e, t) &&
                    v(t, e) &&
                    S(e, t)
                );
            }
            function m(e, t, n) {
                return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
            }
            function T(e, t) {
                return e.x === t.x && e.y === t.y;
            }
            function R(e, t, n, r) {
                return (
                    !!((T(e, t) && T(n, r)) || (T(e, r) && T(n, t))) ||
                    (m(e, t, n) > 0 != m(e, t, r) > 0 &&
                        m(n, r, e) > 0 != m(n, r, t) > 0)
                );
            }
            function A(e, t) {
                var n = e;
                do {
                    if (
                        n.i !== e.i &&
                        n.next.i !== e.i &&
                        n.i !== t.i &&
                        n.next.i !== t.i &&
                        R(n, n.next, e, t)
                    )
                        return !0;
                    n = n.next;
                } while (n !== e);
                return !1;
            }
            function v(e, t) {
                return m(e.prev, e, e.next) < 0
                    ? m(e, t, e.next) >= 0 && m(e, e.prev, t) >= 0
                    : m(e, t, e.prev) < 0 || m(e, e.next, t) < 0;
            }
            function S(e, t) {
                var n = e,
                    r = !1,
                    a = (e.x + t.x) / 2,
                    i = (e.y + t.y) / 2;
                do {
                    n.y > i != n.next.y > i &&
                        a <
                            ((n.next.x - n.x) * (i - n.y)) / (n.next.y - n.y) +
                                n.x &&
                        (r = !r),
                        (n = n.next);
                } while (n !== e);
                return r;
            }
            function N(e, t) {
                var n = new M(e.i, e.x, e.y),
                    r = new M(t.i, t.x, t.y),
                    a = e.next,
                    i = t.prev;
                return (
                    (e.next = t),
                    (t.prev = e),
                    (n.next = a),
                    (a.prev = n),
                    (r.next = n),
                    (n.prev = r),
                    (i.next = r),
                    (r.prev = i),
                    r
                );
            }
            function g(e, t, n, r) {
                var a = new M(e, t, n);
                return (
                    r
                        ? ((a.next = r.next),
                          (a.prev = r),
                          (r.next.prev = a),
                          (r.next = a))
                        : ((a.prev = a), (a.next = a)),
                    a
                );
            }
            function I(e) {
                (e.next.prev = e.prev),
                    (e.prev.next = e.next),
                    e.prevZ && (e.prevZ.nextZ = e.nextZ),
                    e.nextZ && (e.nextZ.prevZ = e.prevZ);
            }
            function M(e, t, n) {
                (this.i = e),
                    (this.x = t),
                    (this.y = n),
                    (this.prev = null),
                    (this.next = null),
                    (this.z = null),
                    (this.prevZ = null),
                    (this.nextZ = null),
                    (this.steiner = !1);
            }
            function O(e, t, n, r) {
                for (var a = 0, i = t, o = n - r; i < n; i += r)
                    (a += (e[o] - e[i]) * (e[i + 1] + e[o + 1])), (o = i);
                return a;
            }
            return (
                (e.deviation = function (e, t, n, r) {
                    var a = t && t.length,
                        i = a ? t[0] * n : e.length,
                        o = Math.abs(O(e, 0, i, n));
                    if (a)
                        for (var u = 0, s = t.length; u < s; u++) {
                            var c = t[u] * n,
                                l = u < s - 1 ? t[u + 1] * n : e.length;
                            o -= Math.abs(O(e, c, l, n));
                        }
                    var E = 0;
                    for (u = 0; u < r.length; u += 3) {
                        var f = r[u] * n,
                            h = r[u + 1] * n,
                            d = r[u + 2] * n;
                        E += Math.abs(
                            (e[f] - e[d]) * (e[h + 1] - e[f + 1]) -
                                (e[f] - e[h]) * (e[d + 1] - e[f + 1]),
                        );
                    }
                    return 0 === o && 0 === E ? 0 : Math.abs((E - o) / o);
                }),
                (e.flatten = function (e) {
                    for (
                        var t = e[0][0].length,
                            n = { vertices: [], holes: [], dimensions: t },
                            r = 0,
                            a = 0;
                        a < e.length;
                        a++
                    ) {
                        for (var i = 0; i < e[a].length; i++)
                            for (var o = 0; o < t; o++)
                                n.vertices.push(e[a][i][o]);
                        a > 0 && ((r += e[a - 1].length), n.holes.push(r));
                    }
                    return n;
                }),
                e
            );
        }),
        define(
            'Core/WindingOrder',
            ['./freezeObject', './WebGLConstants'],
            function (e, t) {
                'use strict';
                var n = {
                    CLOCKWISE: t.CW,
                    COUNTER_CLOCKWISE: t.CCW,
                    validate: function (e) {
                        return e === n.CLOCKWISE || e === n.COUNTER_CLOCKWISE;
                    },
                };
                return e(n);
            },
        ),
        define(
            'Core/PolygonPipeline',
            [
                '../ThirdParty/earcut-2.1.1',
                './Cartesian2',
                './Cartesian3',
                './Check',
                './ComponentDatatype',
                './defaultValue',
                './defined',
                './Ellipsoid',
                './Geometry',
                './GeometryAttribute',
                './Math',
                './PrimitiveType',
                './WindingOrder',
            ],
            function (e, t, n, r, a, i, o, u, s, c, l, E, f) {
                'use strict';
                var h = new n(),
                    d = new n(),
                    p = {};
                (p.computeArea2D = function (e) {
                    for (
                        var t = e.length, n = 0, r = t - 1, a = 0;
                        a < t;
                        r = a++
                    ) {
                        var i = e[r],
                            o = e[a];
                        n += i.x * o.y - o.x * i.y;
                    }
                    return 0.5 * n;
                }),
                    (p.computeWindingOrder2D = function (e) {
                        return p.computeArea2D(e) > 0
                            ? f.COUNTER_CLOCKWISE
                            : f.CLOCKWISE;
                    }),
                    (p.triangulate = function (n, r) {
                        var a = t.packArray(n);
                        return e(a, r, 2);
                    });
                var y = new n(),
                    _ = new n(),
                    m = new n(),
                    T = new n(),
                    R = new n(),
                    A = new n(),
                    v = new n();
                return (
                    (p.computeSubdivision = function (e, t, r, u) {
                        u = i(u, l.RADIANS_PER_DEGREE);
                        var f,
                            h = r.slice(0),
                            d = t.length,
                            p = new Array(3 * d),
                            S = 0;
                        for (f = 0; f < d; f++) {
                            var N = t[f];
                            (p[S++] = N.x), (p[S++] = N.y), (p[S++] = N.z);
                        }
                        for (
                            var g = [],
                                I = {},
                                M = e.maximumRadius,
                                O = l.chordLength(u, M),
                                x = O * O;
                            h.length > 0;

                        ) {
                            var w,
                                C,
                                P = h.pop(),
                                L = h.pop(),
                                b = h.pop(),
                                U = n.fromArray(p, 3 * b, y),
                                F = n.fromArray(p, 3 * L, _),
                                D = n.fromArray(p, 3 * P, m),
                                B = n.multiplyByScalar(n.normalize(U, T), M, T),
                                z = n.multiplyByScalar(n.normalize(F, R), M, R),
                                G = n.multiplyByScalar(n.normalize(D, A), M, A),
                                q = n.magnitudeSquared(n.subtract(B, z, v)),
                                V = n.magnitudeSquared(n.subtract(z, G, v)),
                                X = n.magnitudeSquared(n.subtract(G, B, v)),
                                W = Math.max(q, V, X);
                            W > x
                                ? q === W
                                    ? ((w =
                                          Math.min(b, L) +
                                          ' ' +
                                          Math.max(b, L)),
                                      (f = I[w]),
                                      o(f) ||
                                          ((C = n.add(U, F, v)),
                                          n.multiplyByScalar(C, 0.5, C),
                                          p.push(C.x, C.y, C.z),
                                          (f = p.length / 3 - 1),
                                          (I[w] = f)),
                                      h.push(b, f, P),
                                      h.push(f, L, P))
                                    : V === W
                                      ? ((w =
                                            Math.min(L, P) +
                                            ' ' +
                                            Math.max(L, P)),
                                        (f = I[w]),
                                        o(f) ||
                                            ((C = n.add(F, D, v)),
                                            n.multiplyByScalar(C, 0.5, C),
                                            p.push(C.x, C.y, C.z),
                                            (f = p.length / 3 - 1),
                                            (I[w] = f)),
                                        h.push(L, f, b),
                                        h.push(f, P, b))
                                      : X === W &&
                                        ((w =
                                            Math.min(P, b) +
                                            ' ' +
                                            Math.max(P, b)),
                                        (f = I[w]),
                                        o(f) ||
                                            ((C = n.add(D, U, v)),
                                            n.multiplyByScalar(C, 0.5, C),
                                            p.push(C.x, C.y, C.z),
                                            (f = p.length / 3 - 1),
                                            (I[w] = f)),
                                        h.push(P, f, L),
                                        h.push(f, b, L))
                                : (g.push(b), g.push(L), g.push(P));
                        }
                        return new s({
                            attributes: {
                                position: new c({
                                    componentDatatype: a.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: p,
                                }),
                            },
                            indices: g,
                            primitiveType: E.TRIANGLES,
                        });
                    }),
                    (p.scaleToGeodeticHeight = function (e, t, r, a) {
                        r = i(r, u.WGS84);
                        var s = h,
                            c = d;
                        if (((t = i(t, 0)), (a = i(a, !0)), o(e)))
                            for (var l = e.length, E = 0; E < l; E += 3)
                                n.fromArray(e, E, c),
                                    a && (c = r.scaleToGeodeticSurface(c, c)),
                                    0 !== t &&
                                        ((s = r.geodeticSurfaceNormal(c, s)),
                                        n.multiplyByScalar(s, t, s),
                                        n.add(c, s, c)),
                                    (e[E] = c.x),
                                    (e[E + 1] = c.y),
                                    (e[E + 2] = c.z);
                        return e;
                    }),
                    p
                );
            },
        ),
        define(
            'Core/HeadingPitchRoll',
            ['./defaultValue', './defined', './DeveloperError', './Math'],
            function (e, t, n, r) {
                'use strict';
                function a(t, n, r) {
                    (this.heading = e(t, 0)),
                        (this.pitch = e(n, 0)),
                        (this.roll = e(r, 0));
                }
                return (
                    (a.fromQuaternion = function (e, n) {
                        t(n) || (n = new a());
                        var r = 2 * (e.w * e.y - e.z * e.x),
                            i = 1 - 2 * (e.x * e.x + e.y * e.y),
                            o = 2 * (e.w * e.x + e.y * e.z),
                            u = 1 - 2 * (e.y * e.y + e.z * e.z),
                            s = 2 * (e.w * e.z + e.x * e.y);
                        return (
                            (n.heading = -Math.atan2(s, u)),
                            (n.roll = Math.atan2(o, i)),
                            (n.pitch = -Math.asin(r)),
                            n
                        );
                    }),
                    (a.fromDegrees = function (e, n, i, o) {
                        return (
                            t(o) || (o = new a()),
                            (o.heading = e * r.RADIANS_PER_DEGREE),
                            (o.pitch = n * r.RADIANS_PER_DEGREE),
                            (o.roll = i * r.RADIANS_PER_DEGREE),
                            o
                        );
                    }),
                    (a.clone = function (e, n) {
                        if (t(e))
                            return t(n)
                                ? ((n.heading = e.heading),
                                  (n.pitch = e.pitch),
                                  (n.roll = e.roll),
                                  n)
                                : new a(e.heading, e.pitch, e.roll);
                    }),
                    (a.equals = function (e, n) {
                        return (
                            e === n ||
                            (t(e) &&
                                t(n) &&
                                e.heading === n.heading &&
                                e.pitch === n.pitch &&
                                e.roll === n.roll)
                        );
                    }),
                    (a.equalsEpsilon = function (e, n, a, i) {
                        return (
                            e === n ||
                            (t(e) &&
                                t(n) &&
                                r.equalsEpsilon(e.heading, n.heading, a, i) &&
                                r.equalsEpsilon(e.pitch, n.pitch, a, i) &&
                                r.equalsEpsilon(e.roll, n.roll, a, i))
                        );
                    }),
                    (a.prototype.clone = function (e) {
                        return a.clone(this, e);
                    }),
                    (a.prototype.equals = function (e) {
                        return a.equals(this, e);
                    }),
                    (a.prototype.equalsEpsilon = function (e, t, n) {
                        return a.equalsEpsilon(this, e, t, n);
                    }),
                    (a.prototype.toString = function () {
                        return (
                            '(' +
                            this.heading +
                            ', ' +
                            this.pitch +
                            ', ' +
                            this.roll +
                            ')'
                        );
                    }),
                    a
                );
            },
        ),
        define(
            'Core/Quaternion',
            [
                './Cartesian3',
                './Check',
                './defaultValue',
                './defined',
                './FeatureDetection',
                './freezeObject',
                './HeadingPitchRoll',
                './Math',
                './Matrix3',
            ],
            function (e, t, n, r, a, i, o, u, s) {
                'use strict';
                function c(e, t, r, a) {
                    (this.x = n(e, 0)),
                        (this.y = n(t, 0)),
                        (this.z = n(r, 0)),
                        (this.w = n(a, 0));
                }
                var l = new e();
                c.fromAxisAngle = function (t, n, a) {
                    var i = n / 2,
                        o = Math.sin(i);
                    l = e.normalize(t, l);
                    var u = l.x * o,
                        s = l.y * o,
                        E = l.z * o,
                        f = Math.cos(i);
                    return r(a)
                        ? ((a.x = u), (a.y = s), (a.z = E), (a.w = f), a)
                        : new c(u, s, E, f);
                };
                var E = [1, 2, 0],
                    f = new Array(3);
                c.fromRotationMatrix = function (e, t) {
                    var n,
                        a,
                        i,
                        o,
                        u,
                        l = e[s.COLUMN0ROW0],
                        h = e[s.COLUMN1ROW1],
                        d = e[s.COLUMN2ROW2],
                        p = l + h + d;
                    if (p > 0)
                        (n = Math.sqrt(p + 1)),
                            (u = 0.5 * n),
                            (n = 0.5 / n),
                            (a = (e[s.COLUMN1ROW2] - e[s.COLUMN2ROW1]) * n),
                            (i = (e[s.COLUMN2ROW0] - e[s.COLUMN0ROW2]) * n),
                            (o = (e[s.COLUMN0ROW1] - e[s.COLUMN1ROW0]) * n);
                    else {
                        var y = E,
                            _ = 0;
                        h > l && (_ = 1), d > l && d > h && (_ = 2);
                        var m = y[_],
                            T = y[m];
                        n = Math.sqrt(
                            e[s.getElementIndex(_, _)] -
                                e[s.getElementIndex(m, m)] -
                                e[s.getElementIndex(T, T)] +
                                1,
                        );
                        var R = f;
                        (R[_] = 0.5 * n),
                            (n = 0.5 / n),
                            (u =
                                (e[s.getElementIndex(T, m)] -
                                    e[s.getElementIndex(m, T)]) *
                                n),
                            (R[m] =
                                (e[s.getElementIndex(m, _)] +
                                    e[s.getElementIndex(_, m)]) *
                                n),
                            (R[T] =
                                (e[s.getElementIndex(T, _)] +
                                    e[s.getElementIndex(_, T)]) *
                                n),
                            (a = -R[0]),
                            (i = -R[1]),
                            (o = -R[2]);
                    }
                    return r(t)
                        ? ((t.x = a), (t.y = i), (t.z = o), (t.w = u), t)
                        : new c(a, i, o, u);
                };
                var h = new c(),
                    d = new c(),
                    p = new c(),
                    y = new c();
                c.fromHeadingPitchRoll = function (t, n) {
                    return (
                        (y = c.fromAxisAngle(e.UNIT_X, t.roll, h)),
                        (p = c.fromAxisAngle(e.UNIT_Y, -t.pitch, n)),
                        (n = c.multiply(p, y, p)),
                        (d = c.fromAxisAngle(e.UNIT_Z, -t.heading, h)),
                        c.multiply(d, n, n)
                    );
                };
                var _ = new e(),
                    m = new e(),
                    T = new c(),
                    R = new c(),
                    A = new c();
                (c.packedLength = 4),
                    (c.pack = function (e, t, r) {
                        return (
                            (r = n(r, 0)),
                            (t[r++] = e.x),
                            (t[r++] = e.y),
                            (t[r++] = e.z),
                            (t[r] = e.w),
                            t
                        );
                    }),
                    (c.unpack = function (e, t, a) {
                        return (
                            (t = n(t, 0)),
                            r(a) || (a = new c()),
                            (a.x = e[t]),
                            (a.y = e[t + 1]),
                            (a.z = e[t + 2]),
                            (a.w = e[t + 3]),
                            a
                        );
                    }),
                    (c.packedInterpolationLength = 3),
                    (c.convertPackedArrayForInterpolation = function (
                        e,
                        t,
                        n,
                        r,
                    ) {
                        c.unpack(e, 4 * n, A), c.conjugate(A, A);
                        for (var a = 0, i = n - t + 1; a < i; a++) {
                            var o = 3 * a;
                            c.unpack(e, 4 * (t + a), T),
                                c.multiply(T, A, T),
                                T.w < 0 && c.negate(T, T),
                                c.computeAxis(T, _);
                            var u = c.computeAngle(T);
                            (r[o] = _.x * u),
                                (r[o + 1] = _.y * u),
                                (r[o + 2] = _.z * u);
                        }
                    }),
                    (c.unpackInterpolationResult = function (t, n, a, i, o) {
                        r(o) || (o = new c()), e.fromArray(t, 0, m);
                        var u = e.magnitude(m);
                        return (
                            c.unpack(n, 4 * i, R),
                            0 === u
                                ? c.clone(c.IDENTITY, T)
                                : c.fromAxisAngle(m, u, T),
                            c.multiply(T, R, o)
                        );
                    }),
                    (c.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.x = e.x),
                                  (t.y = e.y),
                                  (t.z = e.z),
                                  (t.w = e.w),
                                  t)
                                : new c(e.x, e.y, e.z, e.w);
                    }),
                    (c.conjugate = function (e, t) {
                        return (
                            (t.x = -e.x),
                            (t.y = -e.y),
                            (t.z = -e.z),
                            (t.w = e.w),
                            t
                        );
                    }),
                    (c.magnitudeSquared = function (e) {
                        return e.x * e.x + e.y * e.y + e.z * e.z + e.w * e.w;
                    }),
                    (c.magnitude = function (e) {
                        return Math.sqrt(c.magnitudeSquared(e));
                    }),
                    (c.normalize = function (e, t) {
                        var n = 1 / c.magnitude(e),
                            r = e.x * n,
                            a = e.y * n,
                            i = e.z * n,
                            o = e.w * n;
                        return (t.x = r), (t.y = a), (t.z = i), (t.w = o), t;
                    }),
                    (c.inverse = function (e, t) {
                        var n = c.magnitudeSquared(e);
                        return (
                            (t = c.conjugate(e, t)),
                            c.multiplyByScalar(t, 1 / n, t)
                        );
                    }),
                    (c.add = function (e, t, n) {
                        return (
                            (n.x = e.x + t.x),
                            (n.y = e.y + t.y),
                            (n.z = e.z + t.z),
                            (n.w = e.w + t.w),
                            n
                        );
                    }),
                    (c.subtract = function (e, t, n) {
                        return (
                            (n.x = e.x - t.x),
                            (n.y = e.y - t.y),
                            (n.z = e.z - t.z),
                            (n.w = e.w - t.w),
                            n
                        );
                    }),
                    (c.negate = function (e, t) {
                        return (
                            (t.x = -e.x),
                            (t.y = -e.y),
                            (t.z = -e.z),
                            (t.w = -e.w),
                            t
                        );
                    }),
                    (c.dot = function (e, t) {
                        return e.x * t.x + e.y * t.y + e.z * t.z + e.w * t.w;
                    }),
                    (c.multiply = function (e, t, n) {
                        var r = e.x,
                            a = e.y,
                            i = e.z,
                            o = e.w,
                            u = t.x,
                            s = t.y,
                            c = t.z,
                            l = t.w,
                            E = o * u + r * l + a * c - i * s,
                            f = o * s - r * c + a * l + i * u,
                            h = o * c + r * s - a * u + i * l,
                            d = o * l - r * u - a * s - i * c;
                        return (n.x = E), (n.y = f), (n.z = h), (n.w = d), n;
                    }),
                    (c.multiplyByScalar = function (e, t, n) {
                        return (
                            (n.x = e.x * t),
                            (n.y = e.y * t),
                            (n.z = e.z * t),
                            (n.w = e.w * t),
                            n
                        );
                    }),
                    (c.divideByScalar = function (e, t, n) {
                        return (
                            (n.x = e.x / t),
                            (n.y = e.y / t),
                            (n.z = e.z / t),
                            (n.w = e.w / t),
                            n
                        );
                    }),
                    (c.computeAxis = function (e, t) {
                        var n = e.w;
                        if (Math.abs(n - 1) < u.EPSILON6)
                            return (t.x = t.y = t.z = 0), t;
                        var r = 1 / Math.sqrt(1 - n * n);
                        return (
                            (t.x = e.x * r), (t.y = e.y * r), (t.z = e.z * r), t
                        );
                    }),
                    (c.computeAngle = function (e) {
                        return Math.abs(e.w - 1) < u.EPSILON6
                            ? 0
                            : 2 * Math.acos(e.w);
                    });
                var v = new c();
                c.lerp = function (e, t, n, r) {
                    return (
                        (v = c.multiplyByScalar(t, n, v)),
                        (r = c.multiplyByScalar(e, 1 - n, r)),
                        c.add(v, r, r)
                    );
                };
                var S = new c(),
                    N = new c(),
                    g = new c();
                (c.slerp = function (e, t, n, r) {
                    var a = c.dot(e, t),
                        i = t;
                    if (
                        (a < 0 && ((a = -a), (i = S = c.negate(t, S))),
                        1 - a < u.EPSILON6)
                    )
                        return c.lerp(e, i, n, r);
                    var o = Math.acos(a);
                    return (
                        (N = c.multiplyByScalar(e, Math.sin((1 - n) * o), N)),
                        (g = c.multiplyByScalar(i, Math.sin(n * o), g)),
                        (r = c.add(N, g, r)),
                        c.multiplyByScalar(r, 1 / Math.sin(o), r)
                    );
                }),
                    (c.log = function (t, n) {
                        var r = u.acosClamped(t.w),
                            a = 0;
                        return (
                            0 !== r && (a = r / Math.sin(r)),
                            e.multiplyByScalar(t, a, n)
                        );
                    }),
                    (c.exp = function (t, n) {
                        var r = e.magnitude(t),
                            a = 0;
                        return (
                            0 !== r && (a = Math.sin(r) / r),
                            (n.x = t.x * a),
                            (n.y = t.y * a),
                            (n.z = t.z * a),
                            (n.w = Math.cos(r)),
                            n
                        );
                    });
                var I = new e(),
                    M = new e(),
                    O = new c(),
                    x = new c();
                (c.computeInnerQuadrangle = function (t, n, r, a) {
                    var i = c.conjugate(n, O);
                    c.multiply(i, r, x);
                    var o = c.log(x, I);
                    c.multiply(i, t, x);
                    var u = c.log(x, M);
                    return (
                        e.add(o, u, o),
                        e.multiplyByScalar(o, 0.25, o),
                        e.negate(o, o),
                        c.exp(o, O),
                        c.multiply(n, O, a)
                    );
                }),
                    (c.squad = function (e, t, n, r, a, i) {
                        var o = c.slerp(e, t, a, O),
                            u = c.slerp(n, r, a, x);
                        return c.slerp(o, u, 2 * a * (1 - a), i);
                    });
                for (
                    var w = new c(),
                        C = 1.9011074535173003,
                        P = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        L = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        b = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        U = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        F = 0;
                    F < 7;
                    ++F
                ) {
                    var D = F + 1,
                        B = 2 * D + 1;
                    (P[F] = 1 / (D * B)), (L[F] = D / B);
                }
                return (
                    (P[7] = C / 136),
                    (L[7] = (8 * C) / 17),
                    (c.fastSlerp = function (e, t, n, r) {
                        var a,
                            i = c.dot(e, t);
                        i >= 0 ? (a = 1) : ((a = -1), (i = -i));
                        for (
                            var o = i - 1,
                                u = 1 - n,
                                s = n * n,
                                l = u * u,
                                E = 7;
                            E >= 0;
                            --E
                        )
                            (b[E] = (P[E] * s - L[E]) * o),
                                (U[E] = (P[E] * l - L[E]) * o);
                        var f =
                                a *
                                n *
                                (1 +
                                    b[0] *
                                        (1 +
                                            b[1] *
                                                (1 +
                                                    b[2] *
                                                        (1 +
                                                            b[3] *
                                                                (1 +
                                                                    b[4] *
                                                                        (1 +
                                                                            b[5] *
                                                                                (1 +
                                                                                    b[6] *
                                                                                        (1 +
                                                                                            b[7])))))))),
                            h =
                                u *
                                (1 +
                                    U[0] *
                                        (1 +
                                            U[1] *
                                                (1 +
                                                    U[2] *
                                                        (1 +
                                                            U[3] *
                                                                (1 +
                                                                    U[4] *
                                                                        (1 +
                                                                            U[5] *
                                                                                (1 +
                                                                                    U[6] *
                                                                                        (1 +
                                                                                            U[7])))))))),
                            d = c.multiplyByScalar(e, h, w);
                        return c.multiplyByScalar(t, f, r), c.add(d, r, r);
                    }),
                    (c.fastSquad = function (e, t, n, r, a, i) {
                        var o = c.fastSlerp(e, t, a, O),
                            u = c.fastSlerp(n, r, a, x);
                        return c.fastSlerp(o, u, 2 * a * (1 - a), i);
                    }),
                    (c.equals = function (e, t) {
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
                    (c.equalsEpsilon = function (e, t, n) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                Math.abs(e.x - t.x) <= n &&
                                Math.abs(e.y - t.y) <= n &&
                                Math.abs(e.z - t.z) <= n &&
                                Math.abs(e.w - t.w) <= n)
                        );
                    }),
                    (c.ZERO = i(new c(0, 0, 0, 0))),
                    (c.IDENTITY = i(new c(0, 0, 0, 1))),
                    (c.prototype.clone = function (e) {
                        return c.clone(this, e);
                    }),
                    (c.prototype.equals = function (e) {
                        return c.equals(this, e);
                    }),
                    (c.prototype.equalsEpsilon = function (e, t) {
                        return c.equalsEpsilon(this, e, t);
                    }),
                    (c.prototype.toString = function () {
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
                    c
                );
            },
        ),
        define(
            'Core/Matrix2',
            [
                './Cartesian2',
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './freezeObject',
            ],
            function (e, t, n, r, a, i) {
                'use strict';
                function o(e, t, r, a) {
                    (this[0] = n(e, 0)),
                        (this[1] = n(r, 0)),
                        (this[2] = n(t, 0)),
                        (this[3] = n(a, 0));
                }
                (o.packedLength = 4),
                    (o.pack = function (e, t, r) {
                        return (
                            (r = n(r, 0)),
                            (t[r++] = e[0]),
                            (t[r++] = e[1]),
                            (t[r++] = e[2]),
                            (t[r++] = e[3]),
                            t
                        );
                    }),
                    (o.unpack = function (e, t, a) {
                        return (
                            (t = n(t, 0)),
                            r(a) || (a = new o()),
                            (a[0] = e[t++]),
                            (a[1] = e[t++]),
                            (a[2] = e[t++]),
                            (a[3] = e[t++]),
                            a
                        );
                    }),
                    (o.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t[0] = e[0]),
                                  (t[1] = e[1]),
                                  (t[2] = e[2]),
                                  (t[3] = e[3]),
                                  t)
                                : new o(e[0], e[2], e[1], e[3]);
                    }),
                    (o.fromArray = function (e, t, a) {
                        return (
                            (t = n(t, 0)),
                            r(a) || (a = new o()),
                            (a[0] = e[t]),
                            (a[1] = e[t + 1]),
                            (a[2] = e[t + 2]),
                            (a[3] = e[t + 3]),
                            a
                        );
                    }),
                    (o.fromColumnMajorArray = function (e, t) {
                        return o.clone(e, t);
                    }),
                    (o.fromRowMajorArray = function (e, t) {
                        return r(t)
                            ? ((t[0] = e[0]),
                              (t[1] = e[2]),
                              (t[2] = e[1]),
                              (t[3] = e[3]),
                              t)
                            : new o(e[0], e[1], e[2], e[3]);
                    }),
                    (o.fromScale = function (e, t) {
                        return r(t)
                            ? ((t[0] = e.x),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = e.y),
                              t)
                            : new o(e.x, 0, 0, e.y);
                    }),
                    (o.fromUniformScale = function (e, t) {
                        return r(t)
                            ? ((t[0] = e),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = e),
                              t)
                            : new o(e, 0, 0, e);
                    }),
                    (o.fromRotation = function (e, t) {
                        var n = Math.cos(e),
                            a = Math.sin(e);
                        return r(t)
                            ? ((t[0] = n),
                              (t[1] = a),
                              (t[2] = -a),
                              (t[3] = n),
                              t)
                            : new o(n, -a, a, n);
                    }),
                    (o.toArray = function (e, t) {
                        return r(t)
                            ? ((t[0] = e[0]),
                              (t[1] = e[1]),
                              (t[2] = e[2]),
                              (t[3] = e[3]),
                              t)
                            : [e[0], e[1], e[2], e[3]];
                    }),
                    (o.getElementIndex = function (e, t) {
                        return 2 * e + t;
                    }),
                    (o.getColumn = function (e, t, n) {
                        var r = 2 * t,
                            a = e[r],
                            i = e[r + 1];
                        return (n.x = a), (n.y = i), n;
                    }),
                    (o.setColumn = function (e, t, n, r) {
                        r = o.clone(e, r);
                        var a = 2 * t;
                        return (r[a] = n.x), (r[a + 1] = n.y), r;
                    }),
                    (o.getRow = function (e, t, n) {
                        var r = e[t],
                            a = e[t + 2];
                        return (n.x = r), (n.y = a), n;
                    }),
                    (o.setRow = function (e, t, n, r) {
                        return (
                            (r = o.clone(e, r)),
                            (r[t] = n.x),
                            (r[t + 2] = n.y),
                            r
                        );
                    });
                var u = new e();
                o.getScale = function (t, n) {
                    return (
                        (n.x = e.magnitude(e.fromElements(t[0], t[1], u))),
                        (n.y = e.magnitude(e.fromElements(t[2], t[3], u))),
                        n
                    );
                };
                var s = new e();
                return (
                    (o.getMaximumScale = function (t) {
                        return o.getScale(t, s), e.maximumComponent(s);
                    }),
                    (o.multiply = function (e, t, n) {
                        var r = e[0] * t[0] + e[2] * t[1],
                            a = e[0] * t[2] + e[2] * t[3],
                            i = e[1] * t[0] + e[3] * t[1],
                            o = e[1] * t[2] + e[3] * t[3];
                        return (
                            (n[0] = r), (n[1] = i), (n[2] = a), (n[3] = o), n
                        );
                    }),
                    (o.add = function (e, t, n) {
                        return (
                            (n[0] = e[0] + t[0]),
                            (n[1] = e[1] + t[1]),
                            (n[2] = e[2] + t[2]),
                            (n[3] = e[3] + t[3]),
                            n
                        );
                    }),
                    (o.subtract = function (e, t, n) {
                        return (
                            (n[0] = e[0] - t[0]),
                            (n[1] = e[1] - t[1]),
                            (n[2] = e[2] - t[2]),
                            (n[3] = e[3] - t[3]),
                            n
                        );
                    }),
                    (o.multiplyByVector = function (e, t, n) {
                        var r = e[0] * t.x + e[2] * t.y,
                            a = e[1] * t.x + e[3] * t.y;
                        return (n.x = r), (n.y = a), n;
                    }),
                    (o.multiplyByScalar = function (e, t, n) {
                        return (
                            (n[0] = e[0] * t),
                            (n[1] = e[1] * t),
                            (n[2] = e[2] * t),
                            (n[3] = e[3] * t),
                            n
                        );
                    }),
                    (o.multiplyByScale = function (e, t, n) {
                        return (
                            (n[0] = e[0] * t.x),
                            (n[1] = e[1] * t.x),
                            (n[2] = e[2] * t.y),
                            (n[3] = e[3] * t.y),
                            n
                        );
                    }),
                    (o.negate = function (e, t) {
                        return (
                            (t[0] = -e[0]),
                            (t[1] = -e[1]),
                            (t[2] = -e[2]),
                            (t[3] = -e[3]),
                            t
                        );
                    }),
                    (o.transpose = function (e, t) {
                        var n = e[0],
                            r = e[2],
                            a = e[1],
                            i = e[3];
                        return (
                            (t[0] = n), (t[1] = r), (t[2] = a), (t[3] = i), t
                        );
                    }),
                    (o.abs = function (e, t) {
                        return (
                            (t[0] = Math.abs(e[0])),
                            (t[1] = Math.abs(e[1])),
                            (t[2] = Math.abs(e[2])),
                            (t[3] = Math.abs(e[3])),
                            t
                        );
                    }),
                    (o.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                e[0] === t[0] &&
                                e[1] === t[1] &&
                                e[2] === t[2] &&
                                e[3] === t[3])
                        );
                    }),
                    (o.equalsArray = function (e, t, n) {
                        return (
                            e[0] === t[n] &&
                            e[1] === t[n + 1] &&
                            e[2] === t[n + 2] &&
                            e[3] === t[n + 3]
                        );
                    }),
                    (o.equalsEpsilon = function (e, t, n) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                Math.abs(e[0] - t[0]) <= n &&
                                Math.abs(e[1] - t[1]) <= n &&
                                Math.abs(e[2] - t[2]) <= n &&
                                Math.abs(e[3] - t[3]) <= n)
                        );
                    }),
                    (o.IDENTITY = i(new o(1, 0, 0, 1))),
                    (o.ZERO = i(new o(0, 0, 0, 0))),
                    (o.COLUMN0ROW0 = 0),
                    (o.COLUMN0ROW1 = 1),
                    (o.COLUMN1ROW0 = 2),
                    (o.COLUMN1ROW1 = 3),
                    a(o.prototype, {
                        length: {
                            get: function () {
                                return o.packedLength;
                            },
                        },
                    }),
                    (o.prototype.clone = function (e) {
                        return o.clone(this, e);
                    }),
                    (o.prototype.equals = function (e) {
                        return o.equals(this, e);
                    }),
                    (o.prototype.equalsEpsilon = function (e, t) {
                        return o.equalsEpsilon(this, e, t);
                    }),
                    (o.prototype.toString = function () {
                        return (
                            '(' +
                            this[0] +
                            ', ' +
                            this[2] +
                            ')\n(' +
                            this[1] +
                            ', ' +
                            this[3] +
                            ')'
                        );
                    }),
                    o
                );
            },
        ),
        define(
            'Core/RectangleGeometryLibrary',
            [
                './Cartesian3',
                './Cartographic',
                './defined',
                './DeveloperError',
                './GeographicProjection',
                './Math',
                './Matrix2',
                './Rectangle',
            ],
            function (e, t, n, r, a, i, o, u) {
                'use strict';
                function s(t, n, r, a, i, u, s) {
                    var c = Math.cos(n),
                        l = a * c,
                        E = r * c,
                        f = Math.sin(n),
                        p = a * f,
                        m = r * f;
                    (d = _.project(t, d)), (d = e.subtract(d, y, d));
                    var T = o.fromRotation(n, h);
                    (d = o.multiplyByVector(T, d, d)),
                        (d = e.add(d, y, d)),
                        (t = _.unproject(d, t)),
                        (u -= 1),
                        (s -= 1);
                    var R = t.latitude,
                        A = R + u * m,
                        v = R - l * s,
                        S = R - l * s + u * m,
                        N = Math.max(R, A, v, S),
                        g = Math.min(R, A, v, S),
                        I = t.longitude,
                        M = I + u * E,
                        O = I + s * p,
                        x = I + s * p + u * E;
                    return {
                        north: N,
                        south: g,
                        east: Math.max(I, M, O, x),
                        west: Math.min(I, M, O, x),
                        granYCos: l,
                        granYSin: p,
                        granXCos: E,
                        granXSin: m,
                        nwCorner: t,
                    };
                }
                var c = Math.cos,
                    l = Math.sin,
                    E = Math.sqrt,
                    f = {};
                f.computePosition = function (e, t, r, a, i) {
                    var o = e.ellipsoid.radiiSquared,
                        u = e.nwCorner,
                        s = e.rectangle,
                        f = u.latitude - e.granYCos * t + r * e.granXSin,
                        h = c(f),
                        d = l(f),
                        p = o.z * d,
                        y = u.longitude + t * e.granYSin + r * e.granXCos,
                        _ = h * c(y),
                        m = h * l(y),
                        T = o.x * _,
                        R = o.y * m,
                        A = E(T * _ + R * m + p * d);
                    if (
                        ((a.x = T / A),
                        (a.y = R / A),
                        (a.z = p / A),
                        n(e.vertexFormat) && e.vertexFormat.st)
                    ) {
                        var v = e.stNwCorner;
                        n(v)
                            ? ((f =
                                  v.latitude -
                                  e.stGranYCos * t +
                                  r * e.stGranXSin),
                              (y =
                                  v.longitude +
                                  t * e.stGranYSin +
                                  r * e.stGranXCos),
                              (i.x = (y - e.stWest) * e.lonScalar),
                              (i.y = (f - e.stSouth) * e.latScalar))
                            : ((i.x = (y - s.west) * e.lonScalar),
                              (i.y = (f - s.south) * e.latScalar));
                    }
                };
                var h = new o(),
                    d = new e(),
                    p = new t(),
                    y = new e(),
                    _ = new a();
                return (
                    (f.computeOptions = function (e, t, n, r) {
                        var a,
                            o,
                            c,
                            l,
                            E,
                            f = e._granularity,
                            h = e._ellipsoid,
                            d = e._surfaceHeight,
                            m = e._rotation,
                            T = e._stRotation,
                            R = e._extrudedHeight,
                            A = t.east,
                            v = t.west,
                            S = t.north,
                            N = t.south,
                            g = S - N;
                        v > A
                            ? ((E = i.TWO_PI - v + A),
                              (a = Math.ceil(E / f) + 1),
                              (o = Math.ceil(g / f) + 1),
                              (c = E / (a - 1)),
                              (l = g / (o - 1)))
                            : ((E = A - v),
                              (a = Math.ceil(E / f) + 1),
                              (o = Math.ceil(g / f) + 1),
                              (c = E / (a - 1)),
                              (l = g / (o - 1))),
                            (n = u.northwest(t, n));
                        var I = u.center(t, p);
                        (0 === m && 0 === T) ||
                            (I.longitude < n.longitude &&
                                (I.longitude += i.TWO_PI),
                            (y = _.project(I, y)));
                        var M = l,
                            O = c,
                            x = {
                                granYCos: M,
                                granYSin: 0,
                                granXCos: O,
                                granXSin: 0,
                                ellipsoid: h,
                                surfaceHeight: d,
                                extrudedHeight: R,
                                nwCorner: n,
                                rectangle: t,
                                width: a,
                                height: o,
                            };
                        if (0 !== m) {
                            var w = s(n, m, c, l, I, a, o);
                            (S = w.north),
                                (N = w.south),
                                (A = w.east),
                                (v = w.west),
                                (x.granYCos = w.granYCos),
                                (x.granYSin = w.granYSin),
                                (x.granXCos = w.granXCos),
                                (x.granXSin = w.granXSin),
                                (t.north = S),
                                (t.south = N),
                                (t.east = A),
                                (t.west = v);
                        }
                        if (0 !== T) {
                            (m -= T), (r = u.northwest(t, r));
                            var C = s(r, m, c, l, I, a, o);
                            (x.stGranYCos = C.granYCos),
                                (x.stGranXCos = C.granXCos),
                                (x.stGranYSin = C.granYSin),
                                (x.stGranXSin = C.granXSin),
                                (x.stNwCorner = r),
                                (x.stWest = C.west),
                                (x.stSouth = C.south);
                        }
                        return x;
                    }),
                    f
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
            function (e, t, n, r) {
                'use strict';
                function a(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this.position = e(t.position, !1)),
                        (this.normal = e(t.normal, !1)),
                        (this.st = e(t.st, !1)),
                        (this.bitangent = e(t.bitangent, !1)),
                        (this.tangent = e(t.tangent, !1)),
                        (this.color = e(t.color, !1));
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
                    (a.pack = function (t, n, r) {
                        return (
                            (r = e(r, 0)),
                            (n[r++] = t.position ? 1 : 0),
                            (n[r++] = t.normal ? 1 : 0),
                            (n[r++] = t.st ? 1 : 0),
                            (n[r++] = t.tangent ? 1 : 0),
                            (n[r++] = t.bitangent ? 1 : 0),
                            (n[r] = t.color ? 1 : 0),
                            n
                        );
                    }),
                    (a.unpack = function (n, r, i) {
                        return (
                            (r = e(r, 0)),
                            t(i) || (i = new a()),
                            (i.position = 1 === n[r++]),
                            (i.normal = 1 === n[r++]),
                            (i.st = 1 === n[r++]),
                            (i.tangent = 1 === n[r++]),
                            (i.bitangent = 1 === n[r++]),
                            (i.color = 1 === n[r]),
                            i
                        );
                    }),
                    (a.clone = function (e, n) {
                        if (t(e))
                            return (
                                t(n) || (n = new a()),
                                (n.position = e.position),
                                (n.normal = e.normal),
                                (n.st = e.st),
                                (n.tangent = e.tangent),
                                (n.bitangent = e.bitangent),
                                (n.color = e.color),
                                n
                            );
                    }),
                    a
                );
            },
        ),
        define(
            'Core/RectangleGeometry',
            [
                './BoundingSphere',
                './Cartesian2',
                './Cartesian3',
                './Cartographic',
                './Check',
                './ComponentDatatype',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './Ellipsoid',
                './Geometry',
                './GeometryAttribute',
                './GeometryAttributes',
                './GeometryInstance',
                './GeometryPipeline',
                './IndexDatatype',
                './Math',
                './Matrix3',
                './PolygonPipeline',
                './PrimitiveType',
                './Quaternion',
                './Rectangle',
                './RectangleGeometryLibrary',
                './VertexFormat',
            ],
            function (
                e,
                t,
                n,
                r,
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
                p,
                y,
                _,
                m,
                T,
                R,
                A,
                v,
                S,
                N,
            ) {
                'use strict';
                function g(e, t) {
                    var n = new E({
                        attributes: new h(),
                        primitiveType: R.TRIANGLES,
                    });
                    return (
                        (n.attributes.position = new f({
                            componentDatatype: i.DOUBLE,
                            componentsPerAttribute: 3,
                            values: t.positions,
                        })),
                        e.normal &&
                            (n.attributes.normal = new f({
                                componentDatatype: i.FLOAT,
                                componentsPerAttribute: 3,
                                values: t.normals,
                            })),
                        e.tangent &&
                            (n.attributes.tangent = new f({
                                componentDatatype: i.FLOAT,
                                componentsPerAttribute: 3,
                                values: t.tangents,
                            })),
                        e.bitangent &&
                            (n.attributes.bitangent = new f({
                                componentDatatype: i.FLOAT,
                                componentsPerAttribute: 3,
                                values: t.bitangents,
                            })),
                        n
                    );
                }
                function I(e, t, r, a) {
                    var i = e.length,
                        o = t.normal ? new Float32Array(i) : void 0,
                        u = t.tangent ? new Float32Array(i) : void 0,
                        s = t.bitangent ? new Float32Array(i) : void 0,
                        c = 0,
                        l = D,
                        E = F,
                        f = U;
                    if (t.normal || t.tangent || t.bitangent)
                        for (var h = 0; h < i; h += 3) {
                            var d = n.fromArray(e, h, b),
                                p = c + 1,
                                y = c + 2;
                            (f = r.geodeticSurfaceNormal(d, f)),
                                (t.tangent || t.bitangent) &&
                                    (n.cross(n.UNIT_Z, f, E),
                                    m.multiplyByVector(a, E, E),
                                    n.normalize(E, E),
                                    t.bitangent &&
                                        n.normalize(n.cross(f, E, l), l)),
                                t.normal &&
                                    ((o[c] = f.x), (o[p] = f.y), (o[y] = f.z)),
                                t.tangent &&
                                    ((u[c] = E.x), (u[p] = E.y), (u[y] = E.z)),
                                t.bitangent &&
                                    ((s[c] = l.x), (s[p] = l.y), (s[y] = l.z)),
                                (c += 3);
                        }
                    return g(t, {
                        positions: e,
                        normals: o,
                        tangents: u,
                        bitangents: s,
                    });
                }
                function M(e, t, r) {
                    var a = e.length,
                        i = t.normal ? new Float32Array(a) : void 0,
                        o = t.tangent ? new Float32Array(a) : void 0,
                        u = t.bitangent ? new Float32Array(a) : void 0,
                        s = 0,
                        c = 0,
                        l = 0,
                        E = !0,
                        f = D,
                        h = F,
                        d = U;
                    if (t.normal || t.tangent || t.bitangent)
                        for (var p = 0; p < a; p += 6) {
                            var y = n.fromArray(e, p, b),
                                m = n.fromArray(e, (p + 6) % a, V);
                            if (E) {
                                var T = n.fromArray(e, (p + 3) % a, X);
                                n.subtract(m, y, m),
                                    n.subtract(T, y, T),
                                    (d = n.normalize(n.cross(T, m, d), d)),
                                    (E = !1);
                            }
                            n.equalsEpsilon(m, y, _.EPSILON10) && (E = !0),
                                (t.tangent || t.bitangent) &&
                                    ((f = r.geodeticSurfaceNormal(y, f)),
                                    t.tangent &&
                                        (h = n.normalize(n.cross(f, d, h), h))),
                                t.normal &&
                                    ((i[s++] = d.x),
                                    (i[s++] = d.y),
                                    (i[s++] = d.z),
                                    (i[s++] = d.x),
                                    (i[s++] = d.y),
                                    (i[s++] = d.z)),
                                t.tangent &&
                                    ((o[c++] = h.x),
                                    (o[c++] = h.y),
                                    (o[c++] = h.z),
                                    (o[c++] = h.x),
                                    (o[c++] = h.y),
                                    (o[c++] = h.z)),
                                t.bitangent &&
                                    ((u[l++] = f.x),
                                    (u[l++] = f.y),
                                    (u[l++] = f.z),
                                    (u[l++] = f.x),
                                    (u[l++] = f.y),
                                    (u[l++] = f.z));
                        }
                    return g(t, {
                        positions: e,
                        normals: i,
                        tangents: o,
                        bitangents: u,
                    });
                }
                function O(e) {
                    for (
                        var t = e.vertexFormat,
                            n = e.ellipsoid,
                            r = e.size,
                            a = e.height,
                            o = e.width,
                            u = t.position ? new Float64Array(3 * r) : void 0,
                            s = t.st ? new Float32Array(2 * r) : void 0,
                            c = 0,
                            l = 0,
                            E = b,
                            h = z,
                            d = Number.MAX_VALUE,
                            p = Number.MAX_VALUE,
                            _ = -Number.MAX_VALUE,
                            m = -Number.MAX_VALUE,
                            T = 0;
                        T < a;
                        ++T
                    )
                        for (var R = 0; R < o; ++R)
                            S.computePosition(e, T, R, E, h),
                                (u[c++] = E.x),
                                (u[c++] = E.y),
                                (u[c++] = E.z),
                                t.st &&
                                    ((s[l++] = h.x),
                                    (s[l++] = h.y),
                                    (d = Math.min(d, h.x)),
                                    (p = Math.min(p, h.y)),
                                    (_ = Math.max(_, h.x)),
                                    (m = Math.max(m, h.y)));
                    if (t.st && (d < 0 || p < 0 || _ > 1 || m > 1))
                        for (var A = 0; A < s.length; A += 2)
                            (s[A] = (s[A] - d) / (_ - d)),
                                (s[A + 1] = (s[A + 1] - p) / (m - p));
                    for (
                        var v = I(u, t, n, e.tangentRotationMatrix),
                            N = 6 * (o - 1) * (a - 1),
                            g = y.createTypedArray(r, N),
                            M = 0,
                            O = 0,
                            x = 0;
                        x < a - 1;
                        ++x
                    ) {
                        for (var w = 0; w < o - 1; ++w) {
                            var C = M,
                                P = C + o,
                                L = P + 1,
                                U = C + 1;
                            (g[O++] = C),
                                (g[O++] = P),
                                (g[O++] = U),
                                (g[O++] = U),
                                (g[O++] = P),
                                (g[O++] = L),
                                ++M;
                        }
                        ++M;
                    }
                    return (
                        (v.indices = g),
                        t.st &&
                            (v.attributes.st = new f({
                                componentDatatype: i.FLOAT,
                                componentsPerAttribute: 2,
                                values: s,
                            })),
                        v
                    );
                }
                function x(e, t, n, r, a) {
                    return (
                        (e[t++] = r[n]),
                        (e[t++] = r[n + 1]),
                        (e[t++] = r[n + 2]),
                        (e[t++] = a[n]),
                        (e[t++] = a[n + 1]),
                        (e[t++] = a[n + 2]),
                        e
                    );
                }
                function w(e, t, n, r) {
                    return (
                        (e[t++] = r[n]),
                        (e[t++] = r[n + 1]),
                        (e[t++] = r[n]),
                        (e[t++] = r[n + 1]),
                        e
                    );
                }
                function C(e) {
                    var t,
                        r = e.shadowVolume,
                        a = e.vertexFormat,
                        o = e.surfaceHeight,
                        u = e.extrudedHeight,
                        s = Math.min(u, o),
                        c = Math.max(u, o),
                        l = e.height,
                        E = e.width,
                        h = e.ellipsoid;
                    r &&
                        ((e.vertexFormat = N.clone(a, W)),
                        (e.vertexFormat.normal = !0));
                    var m = O(e);
                    if (_.equalsEpsilon(s, c, _.EPSILON10)) return m;
                    var R = T.scaleToGeodeticHeight(
                        m.attributes.position.values,
                        c,
                        h,
                        !1,
                    );
                    R = new Float64Array(R);
                    var A = R.length,
                        v = 2 * A,
                        S = new Float64Array(v);
                    S.set(R);
                    var g = T.scaleToGeodeticHeight(
                        m.attributes.position.values,
                        s,
                        h,
                    );
                    S.set(g, A), (m.attributes.position.values = S);
                    var I,
                        C,
                        P = a.normal ? new Float32Array(v) : void 0,
                        L = a.tangent ? new Float32Array(v) : void 0,
                        b = a.bitangent ? new Float32Array(v) : void 0,
                        U = a.st ? new Float32Array((v / 3) * 2) : void 0;
                    if (a.normal) {
                        for (
                            C = m.attributes.normal.values, P.set(C), t = 0;
                            t < A;
                            t++
                        )
                            C[t] = -C[t];
                        P.set(C, A), (m.attributes.normal.values = P);
                    }
                    if (r) {
                        (C = m.attributes.normal.values),
                            a.normal || (m.attributes.normal = void 0);
                        var F = new Float32Array(v);
                        for (t = 0; t < A; t++) C[t] = -C[t];
                        F.set(C, A),
                            (m.attributes.extrudeDirection = new f({
                                componentDatatype: i.FLOAT,
                                componentsPerAttribute: 3,
                                values: F,
                            }));
                    }
                    if (a.tangent) {
                        var D = m.attributes.tangent.values;
                        for (L.set(D), t = 0; t < A; t++) D[t] = -D[t];
                        L.set(D, A), (m.attributes.tangent.values = L);
                    }
                    if (a.bitangent) {
                        var B = m.attributes.bitangent.values;
                        b.set(B),
                            b.set(B, A),
                            (m.attributes.bitangent.values = b);
                    }
                    a.st &&
                        ((I = m.attributes.st.values),
                        U.set(I),
                        U.set(I, (A / 3) * 2),
                        (m.attributes.st.values = U));
                    var z = m.indices,
                        G = z.length,
                        q = A / 3,
                        H = y.createTypedArray(v / 3, 2 * G);
                    for (H.set(z), t = 0; t < G; t += 3)
                        (H[t + G] = z[t + 2] + q),
                            (H[t + 1 + G] = z[t + 1] + q),
                            (H[t + 2 + G] = z[t] + q);
                    m.indices = H;
                    var Y,
                        k = 2 * E + 2 * l - 4,
                        Z = 2 * (k + 4),
                        K = new Float64Array(3 * Z),
                        j = r ? new Float32Array(3 * Z) : void 0,
                        Q = a.st ? new Float32Array(2 * Z) : void 0,
                        J = 0,
                        $ = 0,
                        ee = 0,
                        te = E * l;
                    for (t = 0; t < te; t += E)
                        (Y = 3 * t),
                            (K = x(K, J, Y, R, g)),
                            (J += 6),
                            a.st && ((Q = w(Q, $, 2 * t, I)), ($ += 4)),
                            r &&
                                ((ee += 3),
                                (j[ee++] = C[Y]),
                                (j[ee++] = C[Y + 1]),
                                (j[ee++] = C[Y + 2]));
                    for (t = te - E; t < te; t++)
                        (Y = 3 * t),
                            (K = x(K, J, Y, R, g)),
                            (J += 6),
                            a.st && ((Q = w(Q, $, 2 * t, I)), ($ += 4)),
                            r &&
                                ((ee += 3),
                                (j[ee++] = C[Y]),
                                (j[ee++] = C[Y + 1]),
                                (j[ee++] = C[Y + 2]));
                    for (t = te - 1; t > 0; t -= E)
                        (Y = 3 * t),
                            (K = x(K, J, Y, R, g)),
                            (J += 6),
                            a.st && ((Q = w(Q, $, 2 * t, I)), ($ += 4)),
                            r &&
                                ((ee += 3),
                                (j[ee++] = C[Y]),
                                (j[ee++] = C[Y + 1]),
                                (j[ee++] = C[Y + 2]));
                    for (t = E - 1; t >= 0; t--)
                        (Y = 3 * t),
                            (K = x(K, J, Y, R, g)),
                            (J += 6),
                            a.st && ((Q = w(Q, $, 2 * t, I)), ($ += 4)),
                            r &&
                                ((ee += 3),
                                (j[ee++] = C[Y]),
                                (j[ee++] = C[Y + 1]),
                                (j[ee++] = C[Y + 2]));
                    var ne = M(K, a, h);
                    a.st &&
                        (ne.attributes.st = new f({
                            componentDatatype: i.FLOAT,
                            componentsPerAttribute: 2,
                            values: Q,
                        })),
                        r &&
                            (ne.attributes.extrudeDirection = new f({
                                componentDatatype: i.FLOAT,
                                componentsPerAttribute: 3,
                                values: j,
                            }));
                    var re,
                        ae,
                        ie,
                        oe,
                        ue = y.createTypedArray(Z, 6 * k);
                    A = K.length / 3;
                    var se = 0;
                    for (t = 0; t < A - 1; t += 2) {
                        (re = t), (oe = (re + 2) % A);
                        var ce = n.fromArray(K, 3 * re, V),
                            le = n.fromArray(K, 3 * oe, X);
                        n.equalsEpsilon(ce, le, _.EPSILON10) ||
                            ((ae = (re + 1) % A),
                            (ie = (ae + 2) % A),
                            (ue[se++] = re),
                            (ue[se++] = ae),
                            (ue[se++] = oe),
                            (ue[se++] = oe),
                            (ue[se++] = ae),
                            (ue[se++] = ie));
                    }
                    return (
                        (ne.indices = ue),
                        (ne = p.combineInstances([
                            new d({ geometry: m }),
                            new d({ geometry: ne }),
                        ])),
                        ne[0]
                    );
                }
                function P(e, t, n) {
                    if (0 === n) return v.clone(e);
                    v.northeast(e, K[0]),
                        v.northwest(e, K[1]),
                        v.southeast(e, K[2]),
                        v.southwest(e, K[3]),
                        t.cartographicArrayToCartesianArray(K, Z);
                    var r = t.geodeticSurfaceNormalCartographic(v.center(e, Y));
                    A.fromAxisAngle(r, n, k), m.fromQuaternion(k, H);
                    for (var a = 0; a < 4; ++a)
                        m.multiplyByVector(H, Z[a], Z[a]);
                    return (
                        t.cartesianArrayToCartographicArray(Z, K),
                        v.fromCartographicArray(K)
                    );
                }
                function L(e) {
                    e = o(e, o.EMPTY_OBJECT);
                    var t = e.rectangle,
                        n = o(e.rotation, 0);
                    (this._rectangle = t),
                        (this._granularity = o(
                            e.granularity,
                            _.RADIANS_PER_DEGREE,
                        )),
                        (this._ellipsoid = l.clone(o(e.ellipsoid, l.WGS84))),
                        (this._surfaceHeight = o(e.height, 0)),
                        (this._rotation = n),
                        (this._stRotation = o(e.stRotation, 0)),
                        (this._vertexFormat = N.clone(
                            o(e.vertexFormat, N.DEFAULT),
                        )),
                        (this._extrudedHeight = o(e.extrudedHeight, 0)),
                        (this._extrude = u(e.extrudedHeight)),
                        (this._closeTop = o(e.closeTop, !0)),
                        (this._closeBottom = o(e.closeBottom, !0)),
                        (this._shadowVolume = o(e.shadowVolume, !1)),
                        (this._workerName = 'createRectangleGeometry'),
                        (this._rotatedRectangle = P(
                            this._rectangle,
                            this._ellipsoid,
                            n,
                        ));
                }
                var b = new n(),
                    U = new n(),
                    F = new n(),
                    D = new n(),
                    B = new v(),
                    z = new t(),
                    G = new e(),
                    q = new e(),
                    V = new n(),
                    X = new n(),
                    W = new N(),
                    H = new m(),
                    Y = new n(),
                    k = new A(),
                    Z = [new n(), new n(), new n(), new n()],
                    K = [new r(), new r(), new r(), new r()];
                (L.packedLength =
                    v.packedLength +
                    l.packedLength +
                    N.packedLength +
                    v.packedLength +
                    9),
                    (L.pack = function (e, t, n) {
                        return (
                            (n = o(n, 0)),
                            v.pack(e._rectangle, t, n),
                            (n += v.packedLength),
                            l.pack(e._ellipsoid, t, n),
                            (n += l.packedLength),
                            N.pack(e._vertexFormat, t, n),
                            (n += N.packedLength),
                            v.pack(e._rotatedRectangle, t, n),
                            (n += v.packedLength),
                            (t[n++] = e._granularity),
                            (t[n++] = e._surfaceHeight),
                            (t[n++] = e._rotation),
                            (t[n++] = e._stRotation),
                            (t[n++] = e._extrudedHeight),
                            (t[n++] = e._extrude ? 1 : 0),
                            (t[n++] = e._closeTop ? 1 : 0),
                            (t[n++] = e._closeBottom ? 1 : 0),
                            (t[n] = e._shadowVolume ? 1 : 0),
                            t
                        );
                    });
                var j = new v(),
                    Q = new v(),
                    J = l.clone(l.UNIT_SPHERE),
                    $ = {
                        rectangle: j,
                        ellipsoid: J,
                        vertexFormat: W,
                        granularity: void 0,
                        height: void 0,
                        rotation: void 0,
                        stRotation: void 0,
                        extrudedHeight: void 0,
                        closeTop: void 0,
                        closeBottom: void 0,
                        shadowVolume: void 0,
                    };
                L.unpack = function (e, t, n) {
                    t = o(t, 0);
                    var r = v.unpack(e, t, j);
                    t += v.packedLength;
                    var a = l.unpack(e, t, J);
                    t += l.packedLength;
                    var i = N.unpack(e, t, W);
                    t += N.packedLength;
                    var s = v.unpack(e, t, Q);
                    t += v.packedLength;
                    var c = e[t++],
                        E = e[t++],
                        f = e[t++],
                        h = e[t++],
                        d = e[t++],
                        p = 1 === e[t++],
                        y = 1 === e[t++],
                        _ = 1 === e[t++],
                        m = 1 === e[t];
                    return u(n)
                        ? ((n._rectangle = v.clone(r, n._rectangle)),
                          (n._ellipsoid = l.clone(a, n._ellipsoid)),
                          (n._vertexFormat = N.clone(i, n._vertexFormat)),
                          (n._granularity = c),
                          (n._surfaceHeight = E),
                          (n._rotation = f),
                          (n._stRotation = h),
                          (n._extrudedHeight = p ? d : void 0),
                          (n._extrude = p),
                          (n._closeTop = y),
                          (n._closeBottom = _),
                          (n._rotatedRectangle = s),
                          (n._shadowVolume = m),
                          n)
                        : (($.granularity = c),
                          ($.height = E),
                          ($.rotation = f),
                          ($.stRotation = h),
                          ($.extrudedHeight = p ? d : void 0),
                          ($.closeTop = y),
                          ($.closeBottom = _),
                          ($.shadowVolume = m),
                          new L($));
                };
                var ee = new m(),
                    te = new r(),
                    ne = new r(),
                    re = new A(),
                    ae = new r();
                return (
                    (L.createGeometry = function (t) {
                        if (
                            !_.equalsEpsilon(
                                t._rectangle.north,
                                t._rectangle.south,
                                _.EPSILON10,
                            ) &&
                            !_.equalsEpsilon(
                                t._rectangle.east,
                                t._rectangle.west,
                                _.EPSILON10,
                            )
                        ) {
                            var n = v.clone(t._rectangle, B),
                                r = t._ellipsoid,
                                a = t._surfaceHeight,
                                i = t._extrude,
                                o = t._extrudedHeight,
                                u = t._rotation,
                                s = t._stRotation,
                                c = t._vertexFormat,
                                l = S.computeOptions(t, n, te, ne),
                                f = ee;
                            if (0 !== s || 0 !== u) {
                                var h = v.center(n, ae),
                                    d = r.geodeticSurfaceNormalCartographic(
                                        h,
                                        V,
                                    );
                                A.fromAxisAngle(d, -s, re),
                                    m.fromQuaternion(re, f);
                            } else m.clone(m.IDENTITY, f);
                            (l.lonScalar = 1 / t._rectangle.width),
                                (l.latScalar = 1 / t._rectangle.height),
                                (l.vertexFormat = c),
                                (l.rotation = u),
                                (l.stRotation = s),
                                (l.tangentRotationMatrix = f),
                                (l.size = l.width * l.height);
                            var p, y;
                            if (((n = t._rectangle), i)) {
                                (l.shadowVolume = t._shadowVolume), (p = C(l));
                                var R = e.fromRectangle3D(n, r, a, q),
                                    N = e.fromRectangle3D(n, r, o, G);
                                y = e.union(R, N);
                            } else
                                (p = O(l)),
                                    (p.attributes.position.values =
                                        T.scaleToGeodeticHeight(
                                            p.attributes.position.values,
                                            a,
                                            r,
                                            !1,
                                        )),
                                    (y = e.fromRectangle3D(n, r, a));
                            return (
                                c.position || delete p.attributes.position,
                                new E({
                                    attributes: p.attributes,
                                    indices: p.indices,
                                    primitiveType: p.primitiveType,
                                    boundingSphere: y,
                                })
                            );
                        }
                    }),
                    (L.createShadowVolume = function (e, t, n) {
                        var r = e._granularity,
                            a = e._ellipsoid,
                            i = t(r, a),
                            o = n(r, a);
                        return new L({
                            rectangle: e._rectangle,
                            rotation: e._rotation,
                            ellipsoid: a,
                            stRotation: e._stRotation,
                            granularity: r,
                            extrudedHeight: o,
                            height: i,
                            closeTop: !0,
                            closeBottom: !0,
                            vertexFormat: N.POSITION_ONLY,
                            shadowVolume: !0,
                        });
                    }),
                    s(L.prototype, {
                        rectangle: {
                            get: function () {
                                return this._rotatedRectangle;
                            },
                        },
                    }),
                    L
                );
            },
        ),
        define(
            'Workers/createRectangleGeometry',
            [
                '../Core/defined',
                '../Core/Ellipsoid',
                '../Core/Rectangle',
                '../Core/RectangleGeometry',
            ],
            function (e, t, n, r) {
                'use strict';
                function a(a, i) {
                    return (
                        e(i) && (a = r.unpack(a, i)),
                        (a._ellipsoid = t.clone(a._ellipsoid)),
                        (a._rectangle = n.clone(a._rectangle)),
                        r.createGeometry(a)
                    );
                }
                return a;
            },
        );
})();
