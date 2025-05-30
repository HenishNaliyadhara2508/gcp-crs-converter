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
                var i = {};
                return (
                    (i.typeOf = {}),
                    (i.defined = function (r, i) {
                        if (!t(i)) throw new e(n(r));
                    }),
                    (i.typeOf.func = function (t, n) {
                        if ('function' != typeof n)
                            throw new e(r(typeof n, 'function', t));
                    }),
                    (i.typeOf.string = function (t, n) {
                        if ('string' != typeof n)
                            throw new e(r(typeof n, 'string', t));
                    }),
                    (i.typeOf.number = function (t, n) {
                        if ('number' != typeof n)
                            throw new e(r(typeof n, 'number', t));
                    }),
                    (i.typeOf.number.lessThan = function (t, n, r) {
                        if ((i.typeOf.number(t, n), n >= r))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be less than ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (i.typeOf.number.lessThanOrEquals = function (t, n, r) {
                        if ((i.typeOf.number(t, n), n > r))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be less than or equal to ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (i.typeOf.number.greaterThan = function (t, n, r) {
                        if ((i.typeOf.number(t, n), n <= r))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be greater than ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (i.typeOf.number.greaterThanOrEquals = function (t, n, r) {
                        if ((i.typeOf.number(t, n), n < r))
                            throw new e(
                                'Expected ' +
                                    t +
                                    ' to be greater than or equal to' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (i.typeOf.object = function (t, n) {
                        if ('object' != typeof n)
                            throw new e(r(typeof n, 'object', t));
                    }),
                    (i.typeOf.bool = function (t, n) {
                        if ('boolean' != typeof n)
                            throw new e(r(typeof n, 'boolean', t));
                    }),
                    (i.typeOf.number.equals = function (t, n, r, a) {
                        if (
                            (i.typeOf.number(t, r),
                            i.typeOf.number(n, a),
                            r !== a)
                        )
                            throw new e(
                                t +
                                    ' must be equal to ' +
                                    n +
                                    ', the actual values are ' +
                                    r +
                                    ' and ' +
                                    a,
                            );
                    }),
                    i
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
                var i = {};
                (i.EPSILON1 = 0.1),
                    (i.EPSILON2 = 0.01),
                    (i.EPSILON3 = 0.001),
                    (i.EPSILON4 = 1e-4),
                    (i.EPSILON5 = 1e-5),
                    (i.EPSILON6 = 1e-6),
                    (i.EPSILON7 = 1e-7),
                    (i.EPSILON8 = 1e-8),
                    (i.EPSILON9 = 1e-9),
                    (i.EPSILON10 = 1e-10),
                    (i.EPSILON11 = 1e-11),
                    (i.EPSILON12 = 1e-12),
                    (i.EPSILON13 = 1e-13),
                    (i.EPSILON14 = 1e-14),
                    (i.EPSILON15 = 1e-15),
                    (i.EPSILON16 = 1e-16),
                    (i.EPSILON17 = 1e-17),
                    (i.EPSILON18 = 1e-18),
                    (i.EPSILON19 = 1e-19),
                    (i.EPSILON20 = 1e-20),
                    (i.GRAVITATIONALPARAMETER = 3986004418e5),
                    (i.SOLAR_RADIUS = 6955e5),
                    (i.LUNAR_RADIUS = 1737400),
                    (i.SIXTY_FOUR_KILOBYTES = 65536),
                    (i.sign = function (t) {
                        return t > 0 ? 1 : t < 0 ? -1 : 0;
                    }),
                    (i.signNotZero = function (t) {
                        return t < 0 ? -1 : 1;
                    }),
                    (i.toSNorm = function (t, n) {
                        return (
                            (n = e(n, 255)),
                            Math.round((0.5 * i.clamp(t, -1, 1) + 0.5) * n)
                        );
                    }),
                    (i.fromSNorm = function (t, n) {
                        return (n = e(n, 255)), (i.clamp(t, 0, n) / n) * 2 - 1;
                    }),
                    (i.sinh = function (t) {
                        return (
                            0.5 *
                            (Math.pow(Math.E, t) - Math.pow(Math.E, -1 * t))
                        );
                    }),
                    (i.cosh = function (t) {
                        return (
                            0.5 *
                            (Math.pow(Math.E, t) + Math.pow(Math.E, -1 * t))
                        );
                    }),
                    (i.lerp = function (t, e, n) {
                        return (1 - n) * t + n * e;
                    }),
                    (i.PI = Math.PI),
                    (i.ONE_OVER_PI = 1 / Math.PI),
                    (i.PI_OVER_TWO = 0.5 * Math.PI),
                    (i.PI_OVER_THREE = Math.PI / 3),
                    (i.PI_OVER_FOUR = Math.PI / 4),
                    (i.PI_OVER_SIX = Math.PI / 6),
                    (i.THREE_PI_OVER_TWO = 3 * Math.PI * 0.5),
                    (i.TWO_PI = 2 * Math.PI),
                    (i.ONE_OVER_TWO_PI = 1 / (2 * Math.PI)),
                    (i.RADIANS_PER_DEGREE = Math.PI / 180),
                    (i.DEGREES_PER_RADIAN = 180 / Math.PI),
                    (i.RADIANS_PER_ARCSECOND = i.RADIANS_PER_DEGREE / 3600),
                    (i.toRadians = function (t) {
                        return t * i.RADIANS_PER_DEGREE;
                    }),
                    (i.toDegrees = function (t) {
                        return t * i.DEGREES_PER_RADIAN;
                    }),
                    (i.convertLongitudeRange = function (t) {
                        var e = i.TWO_PI,
                            n = t - Math.floor(t / e) * e;
                        return n < -Math.PI ? n + e : n >= Math.PI ? n - e : n;
                    }),
                    (i.clampToLatitudeRange = function (t) {
                        return i.clamp(t, -1 * i.PI_OVER_TWO, i.PI_OVER_TWO);
                    }),
                    (i.negativePiToPi = function (t) {
                        return i.zeroToTwoPi(t + i.PI) - i.PI;
                    }),
                    (i.zeroToTwoPi = function (t) {
                        var e = i.mod(t, i.TWO_PI);
                        return Math.abs(e) < i.EPSILON14 &&
                            Math.abs(t) > i.EPSILON14
                            ? i.TWO_PI
                            : e;
                    }),
                    (i.mod = function (t, e) {
                        return ((t % e) + e) % e;
                    }),
                    (i.equalsEpsilon = function (t, n, r, i) {
                        i = e(i, r);
                        var a = Math.abs(t - n);
                        return (
                            a <= i ||
                            a <= r * Math.max(Math.abs(t), Math.abs(n))
                        );
                    });
                var a = [1];
                (i.factorial = function (t) {
                    var e = a.length;
                    if (t >= e)
                        for (var n = a[e - 1], r = e; r <= t; r++)
                            a.push(n * r);
                    return a[t];
                }),
                    (i.incrementWrap = function (t, n, r) {
                        return (r = e(r, 0)), ++t, t > n && (t = r), t;
                    }),
                    (i.isPowerOfTwo = function (t) {
                        return 0 !== t && 0 == (t & (t - 1));
                    }),
                    (i.nextPowerOfTwo = function (t) {
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
                    (i.clamp = function (t, e, n) {
                        return t < e ? e : t > n ? n : t;
                    });
                var o = new t();
                return (
                    (i.setRandomNumberSeed = function (e) {
                        o = new t(e);
                    }),
                    (i.nextRandomNumber = function () {
                        return o.random();
                    }),
                    (i.randomBetween = function (t, e) {
                        return i.nextRandomNumber() * (e - t) + t;
                    }),
                    (i.acosClamped = function (t) {
                        return Math.acos(i.clamp(t, -1, 1));
                    }),
                    (i.asinClamped = function (t) {
                        return Math.asin(i.clamp(t, -1, 1));
                    }),
                    (i.chordLength = function (t, e) {
                        return 2 * e * Math.sin(0.5 * t);
                    }),
                    (i.logBase = function (t, e) {
                        return Math.log(t) / Math.log(e);
                    }),
                    (i.fog = function (t, e) {
                        var n = t * e;
                        return 1 - Math.exp(-n * n);
                    }),
                    i
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
            function (t, e, n, r, i, a) {
                'use strict';
                function o(t, n, r) {
                    (this.x = e(t, 0)), (this.y = e(n, 0)), (this.z = e(r, 0));
                }
                (o.fromSpherical = function (t, r) {
                    n(r) || (r = new o());
                    var i = t.clock,
                        a = t.cone,
                        u = e(t.magnitude, 1),
                        s = u * Math.sin(a);
                    return (
                        (r.x = s * Math.cos(i)),
                        (r.y = s * Math.sin(i)),
                        (r.z = u * Math.cos(a)),
                        r
                    );
                }),
                    (o.fromElements = function (t, e, r, i) {
                        return n(i)
                            ? ((i.x = t), (i.y = e), (i.z = r), i)
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
                    (o.unpack = function (t, r, i) {
                        return (
                            (r = e(r, 0)),
                            n(i) || (i = new o()),
                            (i.x = t[r++]),
                            (i.y = t[r++]),
                            (i.z = t[r]),
                            i
                        );
                    }),
                    (o.packArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = 3 * r) : (e = new Array(3 * r));
                        for (var i = 0; i < r; ++i) o.pack(t[i], e, 3 * i);
                        return e;
                    }),
                    (o.unpackArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = r / 3) : (e = new Array(r / 3));
                        for (var i = 0; i < r; i += 3) {
                            var a = i / 3;
                            e[a] = o.unpack(t, i, e[a]);
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
                var s = new o();
                o.lerp = function (t, e, n, r) {
                    return (
                        o.multiplyByScalar(e, n, s),
                        (r = o.multiplyByScalar(t, 1 - n, r)),
                        o.add(s, r, r)
                    );
                };
                var c = new o(),
                    E = new o();
                o.angleBetween = function (t, e) {
                    o.normalize(t, c), o.normalize(e, E);
                    var n = o.dot(c, E),
                        r = o.magnitude(o.cross(c, E, c));
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
                    (o.equalsEpsilon = function (t, e, r, i) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                a.equalsEpsilon(t.x, e.x, r, i) &&
                                a.equalsEpsilon(t.y, e.y, r, i) &&
                                a.equalsEpsilon(t.z, e.z, r, i))
                        );
                    }),
                    (o.cross = function (t, e, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = e.x,
                            u = e.y,
                            s = e.z,
                            c = i * s - a * u,
                            E = a * o - r * s,
                            _ = r * u - i * o;
                        return (n.x = c), (n.y = E), (n.z = _), n;
                    }),
                    (o.fromDegrees = function (t, e, n, r, i) {
                        return (
                            (t = a.toRadians(t)),
                            (e = a.toRadians(e)),
                            o.fromRadians(t, e, n, r, i)
                        );
                    });
                var l = new o(),
                    f = new o(),
                    h = new o(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (o.fromRadians = function (t, r, i, a, u) {
                        i = e(i, 0);
                        var s = n(a) ? a.radiiSquared : h,
                            c = Math.cos(r);
                        (l.x = c * Math.cos(t)),
                            (l.y = c * Math.sin(t)),
                            (l.z = Math.sin(r)),
                            (l = o.normalize(l, l)),
                            o.multiplyComponents(s, l, f);
                        var E = Math.sqrt(o.dot(l, f));
                        return (
                            (f = o.divideByScalar(f, E, f)),
                            (l = o.multiplyByScalar(l, i, l)),
                            n(u) || (u = new o()),
                            o.add(f, l, u)
                        );
                    }),
                    (o.fromDegreesArray = function (t, e, r) {
                        var i = t.length;
                        n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                        for (var a = 0; a < i; a += 2) {
                            var u = t[a],
                                s = t[a + 1],
                                c = a / 2;
                            r[c] = o.fromDegrees(u, s, 0, e, r[c]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArray = function (t, e, r) {
                        var i = t.length;
                        n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                        for (var a = 0; a < i; a += 2) {
                            var u = t[a],
                                s = t[a + 1],
                                c = a / 2;
                            r[c] = o.fromRadians(u, s, 0, e, r[c]);
                        }
                        return r;
                    }),
                    (o.fromDegreesArrayHeights = function (t, e, r) {
                        var i = t.length;
                        n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                        for (var a = 0; a < i; a += 3) {
                            var u = t[a],
                                s = t[a + 1],
                                c = t[a + 2],
                                E = a / 3;
                            r[E] = o.fromDegrees(u, s, c, e, r[E]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArrayHeights = function (t, e, r) {
                        var i = t.length;
                        n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                        for (var a = 0; a < i; a += 3) {
                            var u = t[a],
                                s = t[a + 1],
                                c = t[a + 2],
                                E = a / 3;
                            r[E] = o.fromRadians(u, s, c, e, r[E]);
                        }
                        return r;
                    }),
                    (o.ZERO = i(new o(0, 0, 0))),
                    (o.UNIT_X = i(new o(1, 0, 0))),
                    (o.UNIT_Y = i(new o(0, 1, 0))),
                    (o.UNIT_Z = i(new o(0, 0, 1))),
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
                function i(n, i, u, s, c) {
                    var E = n.x,
                        _ = n.y,
                        l = n.z,
                        f = i.x,
                        h = i.y,
                        R = i.z,
                        T = E * E * f * f,
                        d = _ * _ * h * h,
                        A = l * l * R * R,
                        p = T + d + A,
                        m = Math.sqrt(1 / p),
                        N = t.multiplyByScalar(n, m, a);
                    if (p < s) return isFinite(m) ? t.clone(N, c) : void 0;
                    var y = u.x,
                        I = u.y,
                        S = u.z,
                        O = o;
                    (O.x = N.x * y * 2),
                        (O.y = N.y * I * 2),
                        (O.z = N.z * S * 2);
                    var M,
                        C,
                        w,
                        g,
                        v,
                        P,
                        x,
                        F,
                        L,
                        U,
                        D,
                        B = ((1 - m) * t.magnitude(n)) / (0.5 * t.magnitude(O)),
                        z = 0;
                    do {
                        (B -= z),
                            (w = 1 / (1 + B * y)),
                            (g = 1 / (1 + B * I)),
                            (v = 1 / (1 + B * S)),
                            (P = w * w),
                            (x = g * g),
                            (F = v * v),
                            (L = P * w),
                            (U = x * g),
                            (D = F * v),
                            (M = T * P + d * x + A * F - 1),
                            (C = T * L * y + d * U * I + A * D * S);
                        z = M / (-2 * C);
                    } while (Math.abs(M) > r.EPSILON12);
                    return e(c)
                        ? ((c.x = E * w), (c.y = _ * g), (c.z = l * v), c)
                        : new t(E * w, _ * g, l * v);
                }
                var a = new t(),
                    o = new t();
                return i;
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
            function (t, e, n, r, i, a, o) {
                'use strict';
                function u(t, e, r) {
                    (this.longitude = n(t, 0)),
                        (this.latitude = n(e, 0)),
                        (this.height = n(r, 0));
                }
                (u.fromRadians = function (t, e, i, a) {
                    return (
                        (i = n(i, 0)),
                        r(a)
                            ? ((a.longitude = t),
                              (a.latitude = e),
                              (a.height = i),
                              a)
                            : new u(t, e, i)
                    );
                }),
                    (u.fromDegrees = function (t, e, n, r) {
                        return (
                            (t = a.toRadians(t)),
                            (e = a.toRadians(e)),
                            u.fromRadians(t, e, n, r)
                        );
                    });
                var s = new t(),
                    c = new t(),
                    E = new t(),
                    _ = new t(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                    l = new t(
                        1 / 40680631590769,
                        1 / 40680631590769,
                        1 / 40408299984661.445,
                    ),
                    f = a.EPSILON1;
                return (
                    (u.fromCartesian = function (e, n, i) {
                        var h = r(n) ? n.oneOverRadii : _,
                            R = r(n) ? n.oneOverRadiiSquared : l,
                            T = r(n) ? n._centerToleranceSquared : f,
                            d = o(e, h, R, T, c);
                        if (r(d)) {
                            var A = t.multiplyComponents(d, R, s);
                            A = t.normalize(A, A);
                            var p = t.subtract(e, d, E),
                                m = Math.atan2(A.y, A.x),
                                N = Math.asin(A.z),
                                y = a.sign(t.dot(p, e)) * t.magnitude(p);
                            return r(i)
                                ? ((i.longitude = m),
                                  (i.latitude = N),
                                  (i.height = y),
                                  i)
                                : new u(m, N, y);
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
                    (u.ZERO = i(new u(0, 0, 0))),
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
            function (t, e, n, r, i, a, o, u, s, c) {
                'use strict';
                function E(e, n, i, a) {
                    (n = r(n, 0)),
                        (i = r(i, 0)),
                        (a = r(a, 0)),
                        (e._radii = new t(n, i, a)),
                        (e._radiiSquared = new t(n * n, i * i, a * a)),
                        (e._radiiToTheFourth = new t(
                            n * n * n * n,
                            i * i * i * i,
                            a * a * a * a,
                        )),
                        (e._oneOverRadii = new t(
                            0 === n ? 0 : 1 / n,
                            0 === i ? 0 : 1 / i,
                            0 === a ? 0 : 1 / a,
                        )),
                        (e._oneOverRadiiSquared = new t(
                            0 === n ? 0 : 1 / (n * n),
                            0 === i ? 0 : 1 / (i * i),
                            0 === a ? 0 : 1 / (a * a),
                        )),
                        (e._minimumRadius = Math.min(n, i, a)),
                        (e._maximumRadius = Math.max(n, i, a)),
                        (e._centerToleranceSquared = s.EPSILON1),
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
                        E(this, t, e, n);
                }
                a(_.prototype, {
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
                        if (i(e)) {
                            var r = e._radii;
                            return i(n)
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
                            i(e) || (e = new _()),
                            i(t) ? (E(e, t.x, t.y, t.z), e) : e
                        );
                    }),
                    (_.WGS84 = u(new _(6378137, 6378137, 6356752.314245179))),
                    (_.UNIT_SPHERE = u(new _(1, 1, 1))),
                    (_.MOON = u(
                        new _(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS),
                    )),
                    (_.prototype.clone = function (t) {
                        return _.clone(this, t);
                    }),
                    (_.packedLength = t.packedLength),
                    (_.pack = function (e, n, i) {
                        return (i = r(i, 0)), t.pack(e._radii, n, i), n;
                    }),
                    (_.unpack = function (e, n, i) {
                        n = r(n, 0);
                        var a = t.unpack(e, n);
                        return _.fromCartesian3(a, i);
                    }),
                    (_.prototype.geocentricSurfaceNormal = t.normalize),
                    (_.prototype.geodeticSurfaceNormalCartographic = function (
                        e,
                        n,
                    ) {
                        var r = e.longitude,
                            a = e.latitude,
                            o = Math.cos(a),
                            u = o * Math.cos(r),
                            s = o * Math.sin(r),
                            c = Math.sin(a);
                        return (
                            i(n) || (n = new t()),
                            (n.x = u),
                            (n.y = s),
                            (n.z = c),
                            t.normalize(n, n)
                        );
                    }),
                    (_.prototype.geodeticSurfaceNormal = function (e, n) {
                        return (
                            i(n) || (n = new t()),
                            (n = t.multiplyComponents(
                                e,
                                this._oneOverRadiiSquared,
                                n,
                            )),
                            t.normalize(n, n)
                        );
                    });
                var l = new t(),
                    f = new t();
                (_.prototype.cartographicToCartesian = function (e, n) {
                    var r = l,
                        a = f;
                    this.geodeticSurfaceNormalCartographic(e, r),
                        t.multiplyComponents(this._radiiSquared, r, a);
                    var o = Math.sqrt(t.dot(r, a));
                    return (
                        t.divideByScalar(a, o, a),
                        t.multiplyByScalar(r, e.height, r),
                        i(n) || (n = new t()),
                        t.add(a, r, n)
                    );
                }),
                    (_.prototype.cartographicArrayToCartesianArray = function (
                        t,
                        e,
                    ) {
                        var n = t.length;
                        i(e) ? (e.length = n) : (e = new Array(n));
                        for (var r = 0; r < n; r++)
                            e[r] = this.cartographicToCartesian(t[r], e[r]);
                        return e;
                    });
                var h = new t(),
                    R = new t(),
                    T = new t();
                return (
                    (_.prototype.cartesianToCartographic = function (n, r) {
                        var a = this.scaleToGeodeticSurface(n, R);
                        if (i(a)) {
                            var o = this.geodeticSurfaceNormal(a, h),
                                u = t.subtract(n, a, T),
                                c = Math.atan2(o.y, o.x),
                                E = Math.asin(o.z),
                                _ = s.sign(t.dot(u, n)) * t.magnitude(u);
                            return i(r)
                                ? ((r.longitude = c),
                                  (r.latitude = E),
                                  (r.height = _),
                                  r)
                                : new e(c, E, _);
                        }
                    }),
                    (_.prototype.cartesianArrayToCartographicArray = function (
                        t,
                        e,
                    ) {
                        var n = t.length;
                        i(e) ? (e.length = n) : (e = new Array(n));
                        for (var r = 0; r < n; ++r)
                            e[r] = this.cartesianToCartographic(t[r], e[r]);
                        return e;
                    }),
                    (_.prototype.scaleToGeodeticSurface = function (t, e) {
                        return c(
                            t,
                            this._oneOverRadii,
                            this._oneOverRadiiSquared,
                            this._centerToleranceSquared,
                            e,
                        );
                    }),
                    (_.prototype.scaleToGeocentricSurface = function (e, n) {
                        i(n) || (n = new t());
                        var r = e.x,
                            a = e.y,
                            o = e.z,
                            u = this._oneOverRadiiSquared,
                            s =
                                1 /
                                Math.sqrt(
                                    r * r * u.x + a * a * u.y + o * o * u.z,
                                );
                        return t.multiplyByScalar(e, s, n);
                    }),
                    (_.prototype.transformPositionToScaledSpace = function (
                        e,
                        n,
                    ) {
                        return (
                            i(n) || (n = new t()),
                            t.multiplyComponents(e, this._oneOverRadii, n)
                        );
                    }),
                    (_.prototype.transformPositionFromScaledSpace = function (
                        e,
                        n,
                    ) {
                        return (
                            i(n) || (n = new t()),
                            t.multiplyComponents(e, this._radii, n)
                        );
                    }),
                    (_.prototype.equals = function (e) {
                        return (
                            this === e ||
                            (i(e) && t.equals(this._radii, e._radii))
                        );
                    }),
                    (_.prototype.toString = function () {
                        return this._radii.toString();
                    }),
                    (_.prototype.getSurfaceNormalIntersectionWithZAxis =
                        function (e, n, a) {
                            n = r(n, 0);
                            var o = this._squaredXOverSquaredZ;
                            if (
                                (i(a) || (a = new t()),
                                (a.x = 0),
                                (a.y = 0),
                                (a.z = e.z * (1 - o)),
                                !(Math.abs(a.z) >= this._radii.z - n))
                            )
                                return a;
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
            function (t, e, n, r, i, a, o) {
                'use strict';
                function u(t) {
                    (this._ellipsoid = n(t, o.WGS84)),
                        (this._semimajorAxis = this._ellipsoid.maximumRadius),
                        (this._oneOverSemimajorAxis = 1 / this._semimajorAxis);
                }
                return (
                    i(u.prototype, {
                        ellipsoid: {
                            get: function () {
                                return this._ellipsoid;
                            },
                        },
                    }),
                    (u.prototype.project = function (e, n) {
                        var i = this._semimajorAxis,
                            a = e.longitude * i,
                            o = e.latitude * i,
                            u = e.height;
                        return r(n)
                            ? ((n.x = a), (n.y = o), (n.z = u), n)
                            : new t(a, o, u);
                    }),
                    (u.prototype.unproject = function (t, n) {
                        var i = this._oneOverSemimajorAxis,
                            a = t.x * i,
                            o = t.y * i,
                            u = t.z;
                        return r(n)
                            ? ((n.longitude = a),
                              (n.latitude = o),
                              (n.height = u),
                              n)
                            : new e(a, o, u);
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
            function (t, e, n, r, i, a, o, u) {
                'use strict';
                function s(t, e, r, i, a, o, u, s, c) {
                    (this[0] = n(t, 0)),
                        (this[1] = n(i, 0)),
                        (this[2] = n(u, 0)),
                        (this[3] = n(e, 0)),
                        (this[4] = n(a, 0)),
                        (this[5] = n(s, 0)),
                        (this[6] = n(r, 0)),
                        (this[7] = n(o, 0)),
                        (this[8] = n(c, 0));
                }
                function c(t) {
                    for (var e = 0, n = 0; n < 9; ++n) {
                        var r = t[n];
                        e += r * r;
                    }
                    return Math.sqrt(e);
                }
                function E(t) {
                    for (var e = 0, n = 0; n < 3; ++n) {
                        var r = t[s.getElementIndex(R[n], h[n])];
                        e += 2 * r * r;
                    }
                    return Math.sqrt(e);
                }
                function _(t, e) {
                    for (var n = u.EPSILON15, r = 0, i = 1, a = 0; a < 3; ++a) {
                        var o = Math.abs(t[s.getElementIndex(R[a], h[a])]);
                        o > r && ((i = a), (r = o));
                    }
                    var c = 1,
                        E = 0,
                        _ = h[i],
                        l = R[i];
                    if (Math.abs(t[s.getElementIndex(l, _)]) > n) {
                        var f,
                            T = t[s.getElementIndex(l, l)],
                            d = t[s.getElementIndex(_, _)],
                            A = t[s.getElementIndex(l, _)],
                            p = (T - d) / 2 / A;
                        (f =
                            p < 0
                                ? -1 / (-p + Math.sqrt(1 + p * p))
                                : 1 / (p + Math.sqrt(1 + p * p))),
                            (c = 1 / Math.sqrt(1 + f * f)),
                            (E = f * c);
                    }
                    return (
                        (e = s.clone(s.IDENTITY, e)),
                        (e[s.getElementIndex(_, _)] = e[
                            s.getElementIndex(l, l)
                        ] =
                            c),
                        (e[s.getElementIndex(l, _)] = E),
                        (e[s.getElementIndex(_, l)] = -E),
                        e
                    );
                }
                (s.packedLength = 9),
                    (s.pack = function (t, e, r) {
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
                    (s.unpack = function (t, e, i) {
                        return (
                            (e = n(e, 0)),
                            r(i) || (i = new s()),
                            (i[0] = t[e++]),
                            (i[1] = t[e++]),
                            (i[2] = t[e++]),
                            (i[3] = t[e++]),
                            (i[4] = t[e++]),
                            (i[5] = t[e++]),
                            (i[6] = t[e++]),
                            (i[7] = t[e++]),
                            (i[8] = t[e++]),
                            i
                        );
                    }),
                    (s.clone = function (t, e) {
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
                    (s.fromArray = function (t, e, i) {
                        return (
                            (e = n(e, 0)),
                            r(i) || (i = new s()),
                            (i[0] = t[e]),
                            (i[1] = t[e + 1]),
                            (i[2] = t[e + 2]),
                            (i[3] = t[e + 3]),
                            (i[4] = t[e + 4]),
                            (i[5] = t[e + 5]),
                            (i[6] = t[e + 6]),
                            (i[7] = t[e + 7]),
                            (i[8] = t[e + 8]),
                            i
                        );
                    }),
                    (s.fromColumnMajorArray = function (t, e) {
                        return s.clone(t, e);
                    }),
                    (s.fromRowMajorArray = function (t, e) {
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
                        var n = t.x * t.x,
                            i = t.x * t.y,
                            a = t.x * t.z,
                            o = t.x * t.w,
                            u = t.y * t.y,
                            c = t.y * t.z,
                            E = t.y * t.w,
                            _ = t.z * t.z,
                            l = t.z * t.w,
                            f = t.w * t.w,
                            h = n - u - _ + f,
                            R = 2 * (i - l),
                            T = 2 * (a + E),
                            d = 2 * (i + l),
                            A = -n + u - _ + f,
                            p = 2 * (c - o),
                            m = 2 * (a - E),
                            N = 2 * (c + o),
                            y = -n - u + _ + f;
                        return r(e)
                            ? ((e[0] = h),
                              (e[1] = d),
                              (e[2] = m),
                              (e[3] = R),
                              (e[4] = A),
                              (e[5] = N),
                              (e[6] = T),
                              (e[7] = p),
                              (e[8] = y),
                              e)
                            : new s(h, R, T, d, A, p, m, N, y);
                    }),
                    (s.fromHeadingPitchRoll = function (t, e) {
                        var n = Math.cos(-t.pitch),
                            i = Math.cos(-t.heading),
                            a = Math.cos(t.roll),
                            o = Math.sin(-t.pitch),
                            u = Math.sin(-t.heading),
                            c = Math.sin(t.roll),
                            E = n * i,
                            _ = -a * u + c * o * i,
                            l = c * u + a * o * i,
                            f = n * u,
                            h = a * i + c * o * u,
                            R = -c * i + a * o * u,
                            T = -o,
                            d = c * n,
                            A = a * n;
                        return r(e)
                            ? ((e[0] = E),
                              (e[1] = f),
                              (e[2] = T),
                              (e[3] = _),
                              (e[4] = h),
                              (e[5] = d),
                              (e[6] = l),
                              (e[7] = R),
                              (e[8] = A),
                              e)
                            : new s(E, _, l, f, h, R, T, d, A);
                    }),
                    (s.fromScale = function (t, e) {
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
                            : new s(t.x, 0, 0, 0, t.y, 0, 0, 0, t.z);
                    }),
                    (s.fromUniformScale = function (t, e) {
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
                            : new s(t, 0, 0, 0, t, 0, 0, 0, t);
                    }),
                    (s.fromCrossProduct = function (t, e) {
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
                            : new s(0, -t.z, t.y, t.z, 0, -t.x, -t.y, t.x, 0);
                    }),
                    (s.fromRotationX = function (t, e) {
                        var n = Math.cos(t),
                            i = Math.sin(t);
                        return r(e)
                            ? ((e[0] = 1),
                              (e[1] = 0),
                              (e[2] = 0),
                              (e[3] = 0),
                              (e[4] = n),
                              (e[5] = i),
                              (e[6] = 0),
                              (e[7] = -i),
                              (e[8] = n),
                              e)
                            : new s(1, 0, 0, 0, n, -i, 0, i, n);
                    }),
                    (s.fromRotationY = function (t, e) {
                        var n = Math.cos(t),
                            i = Math.sin(t);
                        return r(e)
                            ? ((e[0] = n),
                              (e[1] = 0),
                              (e[2] = -i),
                              (e[3] = 0),
                              (e[4] = 1),
                              (e[5] = 0),
                              (e[6] = i),
                              (e[7] = 0),
                              (e[8] = n),
                              e)
                            : new s(n, 0, i, 0, 1, 0, -i, 0, n);
                    }),
                    (s.fromRotationZ = function (t, e) {
                        var n = Math.cos(t),
                            i = Math.sin(t);
                        return r(e)
                            ? ((e[0] = n),
                              (e[1] = i),
                              (e[2] = 0),
                              (e[3] = -i),
                              (e[4] = n),
                              (e[5] = 0),
                              (e[6] = 0),
                              (e[7] = 0),
                              (e[8] = 1),
                              e)
                            : new s(n, -i, 0, i, n, 0, 0, 0, 1);
                    }),
                    (s.toArray = function (t, e) {
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
                    (s.getElementIndex = function (t, e) {
                        return 3 * t + e;
                    }),
                    (s.getColumn = function (t, e, n) {
                        var r = 3 * e,
                            i = t[r],
                            a = t[r + 1],
                            o = t[r + 2];
                        return (n.x = i), (n.y = a), (n.z = o), n;
                    }),
                    (s.setColumn = function (t, e, n, r) {
                        r = s.clone(t, r);
                        var i = 3 * e;
                        return (
                            (r[i] = n.x), (r[i + 1] = n.y), (r[i + 2] = n.z), r
                        );
                    }),
                    (s.getRow = function (t, e, n) {
                        var r = t[e],
                            i = t[e + 3],
                            a = t[e + 6];
                        return (n.x = r), (n.y = i), (n.z = a), n;
                    }),
                    (s.setRow = function (t, e, n, r) {
                        return (
                            (r = s.clone(t, r)),
                            (r[e] = n.x),
                            (r[e + 3] = n.y),
                            (r[e + 6] = n.z),
                            r
                        );
                    });
                var l = new t();
                s.getScale = function (e, n) {
                    return (
                        (n.x = t.magnitude(
                            t.fromElements(e[0], e[1], e[2], l),
                        )),
                        (n.y = t.magnitude(
                            t.fromElements(e[3], e[4], e[5], l),
                        )),
                        (n.z = t.magnitude(
                            t.fromElements(e[6], e[7], e[8], l),
                        )),
                        n
                    );
                };
                var f = new t();
                (s.getMaximumScale = function (e) {
                    return s.getScale(e, f), t.maximumComponent(f);
                }),
                    (s.multiply = function (t, e, n) {
                        var r = t[0] * e[0] + t[3] * e[1] + t[6] * e[2],
                            i = t[1] * e[0] + t[4] * e[1] + t[7] * e[2],
                            a = t[2] * e[0] + t[5] * e[1] + t[8] * e[2],
                            o = t[0] * e[3] + t[3] * e[4] + t[6] * e[5],
                            u = t[1] * e[3] + t[4] * e[4] + t[7] * e[5],
                            s = t[2] * e[3] + t[5] * e[4] + t[8] * e[5],
                            c = t[0] * e[6] + t[3] * e[7] + t[6] * e[8],
                            E = t[1] * e[6] + t[4] * e[7] + t[7] * e[8],
                            _ = t[2] * e[6] + t[5] * e[7] + t[8] * e[8];
                        return (
                            (n[0] = r),
                            (n[1] = i),
                            (n[2] = a),
                            (n[3] = o),
                            (n[4] = u),
                            (n[5] = s),
                            (n[6] = c),
                            (n[7] = E),
                            (n[8] = _),
                            n
                        );
                    }),
                    (s.add = function (t, e, n) {
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
                    (s.subtract = function (t, e, n) {
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
                    (s.multiplyByVector = function (t, e, n) {
                        var r = e.x,
                            i = e.y,
                            a = e.z,
                            o = t[0] * r + t[3] * i + t[6] * a,
                            u = t[1] * r + t[4] * i + t[7] * a,
                            s = t[2] * r + t[5] * i + t[8] * a;
                        return (n.x = o), (n.y = u), (n.z = s), n;
                    }),
                    (s.multiplyByScalar = function (t, e, n) {
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
                    (s.multiplyByScale = function (t, e, n) {
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
                        var n = t[0],
                            r = t[3],
                            i = t[6],
                            a = t[1],
                            o = t[4],
                            u = t[7],
                            s = t[2],
                            c = t[5],
                            E = t[8];
                        return (
                            (e[0] = n),
                            (e[1] = r),
                            (e[2] = i),
                            (e[3] = a),
                            (e[4] = o),
                            (e[5] = u),
                            (e[6] = s),
                            (e[7] = c),
                            (e[8] = E),
                            e
                        );
                    });
                var h = [1, 0, 0],
                    R = [2, 2, 1],
                    T = new s(),
                    d = new s();
                return (
                    (s.computeEigenDecomposition = function (t, e) {
                        var n = u.EPSILON20,
                            i = 0,
                            a = 0;
                        r(e) || (e = {});
                        for (
                            var o = (e.unitary = s.clone(
                                    s.IDENTITY,
                                    e.unitary,
                                )),
                                l = (e.diagonal = s.clone(t, e.diagonal)),
                                f = n * c(l);
                            a < 10 && E(l) > f;

                        )
                            _(l, T),
                                s.transpose(T, d),
                                s.multiply(l, T, l),
                                s.multiply(d, l, l),
                                s.multiply(o, T, o),
                                ++i > 2 && (++a, (i = 0));
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
                            n = t[3],
                            r = t[6],
                            i = t[1],
                            a = t[4],
                            o = t[7],
                            u = t[2],
                            s = t[5],
                            c = t[8];
                        return (
                            e * (a * c - s * o) +
                            i * (s * r - n * c) +
                            u * (n * o - a * r)
                        );
                    }),
                    (s.inverse = function (t, e) {
                        var n = t[0],
                            r = t[1],
                            i = t[2],
                            a = t[3],
                            o = t[4],
                            u = t[5],
                            c = t[6],
                            E = t[7],
                            _ = t[8],
                            l = s.determinant(t);
                        (e[0] = o * _ - E * u),
                            (e[1] = E * i - r * _),
                            (e[2] = r * u - o * i),
                            (e[3] = c * u - a * _),
                            (e[4] = n * _ - c * i),
                            (e[5] = a * i - n * u),
                            (e[6] = a * E - c * o),
                            (e[7] = c * r - n * E),
                            (e[8] = n * o - a * r);
                        var f = 1 / l;
                        return s.multiplyByScalar(e, f, e);
                    }),
                    (s.equals = function (t, e) {
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
                    (s.equalsEpsilon = function (t, e, n) {
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
                    i(s.prototype, {
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
                    (s.equalsArray = function (t, e, n) {
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
            function (t, e, n, r, i, a) {
                'use strict';
                function o(t, n, r, i) {
                    (this.x = e(t, 0)),
                        (this.y = e(n, 0)),
                        (this.z = e(r, 0)),
                        (this.w = e(i, 0));
                }
                (o.fromElements = function (t, e, r, i, a) {
                    return n(a)
                        ? ((a.x = t), (a.y = e), (a.z = r), (a.w = i), a)
                        : new o(t, e, r, i);
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
                    (o.unpack = function (t, r, i) {
                        return (
                            (r = e(r, 0)),
                            n(i) || (i = new o()),
                            (i.x = t[r++]),
                            (i.y = t[r++]),
                            (i.z = t[r++]),
                            (i.w = t[r]),
                            i
                        );
                    }),
                    (o.packArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = 4 * r) : (e = new Array(4 * r));
                        for (var i = 0; i < r; ++i) o.pack(t[i], e, 4 * i);
                        return e;
                    }),
                    (o.unpackArray = function (t, e) {
                        var r = t.length;
                        n(e) ? (e.length = r / 4) : (e = new Array(r / 4));
                        for (var i = 0; i < r; i += 4) {
                            var a = i / 4;
                            e[a] = o.unpack(t, i, e[a]);
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
                var s = new o();
                o.lerp = function (t, e, n, r) {
                    return (
                        o.multiplyByScalar(e, n, s),
                        (r = o.multiplyByScalar(t, 1 - n, r)),
                        o.add(s, r, r)
                    );
                };
                var c = new o();
                return (
                    (o.mostOrthogonalAxis = function (t, e) {
                        var n = o.normalize(t, c);
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
                    (o.equalsEpsilon = function (t, e, r, i) {
                        return (
                            t === e ||
                            (n(t) &&
                                n(e) &&
                                a.equalsEpsilon(t.x, e.x, r, i) &&
                                a.equalsEpsilon(t.y, e.y, r, i) &&
                                a.equalsEpsilon(t.z, e.z, r, i) &&
                                a.equalsEpsilon(t.w, e.w, r, i))
                        );
                    }),
                    (o.ZERO = i(new o(0, 0, 0, 0))),
                    (o.UNIT_X = i(new o(1, 0, 0, 0))),
                    (o.UNIT_Y = i(new o(0, 1, 0, 0))),
                    (o.UNIT_Z = i(new o(0, 0, 1, 0))),
                    (o.UNIT_W = i(new o(0, 0, 0, 1))),
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
            function (t, e, n, r, i, a, o, u, s, c) {
                'use strict';
                function E(t, e, n, i, a, o, u, s, c, E, _, l, f, h, R, T) {
                    (this[0] = r(t, 0)),
                        (this[1] = r(a, 0)),
                        (this[2] = r(c, 0)),
                        (this[3] = r(f, 0)),
                        (this[4] = r(e, 0)),
                        (this[5] = r(o, 0)),
                        (this[6] = r(E, 0)),
                        (this[7] = r(h, 0)),
                        (this[8] = r(n, 0)),
                        (this[9] = r(u, 0)),
                        (this[10] = r(_, 0)),
                        (this[11] = r(R, 0)),
                        (this[12] = r(i, 0)),
                        (this[13] = r(s, 0)),
                        (this[14] = r(l, 0)),
                        (this[15] = r(T, 0));
                }
                (E.packedLength = 16),
                    (E.pack = function (t, e, n) {
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
                    (E.unpack = function (t, e, n) {
                        return (
                            (e = r(e, 0)),
                            i(n) || (n = new E()),
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
                    (E.clone = function (t, e) {
                        if (i(t))
                            return i(e)
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
                                : new E(
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
                    (E.fromArray = E.unpack),
                    (E.fromColumnMajorArray = function (t, e) {
                        return E.clone(t, e);
                    }),
                    (E.fromRowMajorArray = function (t, e) {
                        return i(e)
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
                                  t[9],
                                  t[10],
                                  t[11],
                                  t[12],
                                  t[13],
                                  t[14],
                                  t[15],
                              );
                    }),
                    (E.fromRotationTranslation = function (e, n, a) {
                        return (
                            (n = r(n, t.ZERO)),
                            i(a)
                                ? ((a[0] = e[0]),
                                  (a[1] = e[1]),
                                  (a[2] = e[2]),
                                  (a[3] = 0),
                                  (a[4] = e[3]),
                                  (a[5] = e[4]),
                                  (a[6] = e[5]),
                                  (a[7] = 0),
                                  (a[8] = e[6]),
                                  (a[9] = e[7]),
                                  (a[10] = e[8]),
                                  (a[11] = 0),
                                  (a[12] = n.x),
                                  (a[13] = n.y),
                                  (a[14] = n.z),
                                  (a[15] = 1),
                                  a)
                                : new E(
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
                    (E.fromTranslationQuaternionRotationScale = function (
                        t,
                        e,
                        n,
                        r,
                    ) {
                        i(r) || (r = new E());
                        var a = n.x,
                            o = n.y,
                            u = n.z,
                            s = e.x * e.x,
                            c = e.x * e.y,
                            _ = e.x * e.z,
                            l = e.x * e.w,
                            f = e.y * e.y,
                            h = e.y * e.z,
                            R = e.y * e.w,
                            T = e.z * e.z,
                            d = e.z * e.w,
                            A = e.w * e.w,
                            p = s - f - T + A,
                            m = 2 * (c - d),
                            N = 2 * (_ + R),
                            y = 2 * (c + d),
                            I = -s + f - T + A,
                            S = 2 * (h - l),
                            O = 2 * (_ - R),
                            M = 2 * (h + l),
                            C = -s - f + T + A;
                        return (
                            (r[0] = p * a),
                            (r[1] = y * a),
                            (r[2] = O * a),
                            (r[3] = 0),
                            (r[4] = m * o),
                            (r[5] = I * o),
                            (r[6] = M * o),
                            (r[7] = 0),
                            (r[8] = N * u),
                            (r[9] = S * u),
                            (r[10] = C * u),
                            (r[11] = 0),
                            (r[12] = t.x),
                            (r[13] = t.y),
                            (r[14] = t.z),
                            (r[15] = 1),
                            r
                        );
                    }),
                    (E.fromTranslationRotationScale = function (t, e) {
                        return E.fromTranslationQuaternionRotationScale(
                            t.translation,
                            t.rotation,
                            t.scale,
                            e,
                        );
                    }),
                    (E.fromTranslation = function (t, e) {
                        return E.fromRotationTranslation(s.IDENTITY, t, e);
                    }),
                    (E.fromScale = function (t, e) {
                        return i(e)
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
                            : new E(
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
                    (E.fromUniformScale = function (t, e) {
                        return i(e)
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
                            : new E(
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
                    l = new t(),
                    f = new t();
                (E.fromCamera = function (e, n) {
                    var r = e.position,
                        a = e.direction,
                        o = e.up;
                    t.normalize(a, _),
                        t.normalize(t.cross(_, o, l), l),
                        t.normalize(t.cross(l, _, f), f);
                    var u = l.x,
                        s = l.y,
                        c = l.z,
                        h = _.x,
                        R = _.y,
                        T = _.z,
                        d = f.x,
                        A = f.y,
                        p = f.z,
                        m = r.x,
                        N = r.y,
                        y = r.z,
                        I = u * -m + s * -N + c * -y,
                        S = d * -m + A * -N + p * -y,
                        O = h * m + R * N + T * y;
                    return i(n)
                        ? ((n[0] = u),
                          (n[1] = d),
                          (n[2] = -h),
                          (n[3] = 0),
                          (n[4] = s),
                          (n[5] = A),
                          (n[6] = -R),
                          (n[7] = 0),
                          (n[8] = c),
                          (n[9] = p),
                          (n[10] = -T),
                          (n[11] = 0),
                          (n[12] = I),
                          (n[13] = S),
                          (n[14] = O),
                          (n[15] = 1),
                          n)
                        : new E(
                              u,
                              s,
                              c,
                              I,
                              d,
                              A,
                              p,
                              S,
                              -h,
                              -R,
                              -T,
                              O,
                              0,
                              0,
                              0,
                              1,
                          );
                }),
                    (E.computePerspectiveFieldOfView = function (
                        t,
                        e,
                        n,
                        r,
                        i,
                    ) {
                        var a = Math.tan(0.5 * t),
                            o = 1 / a,
                            u = o / e,
                            s = (r + n) / (n - r),
                            c = (2 * r * n) / (n - r);
                        return (
                            (i[0] = u),
                            (i[1] = 0),
                            (i[2] = 0),
                            (i[3] = 0),
                            (i[4] = 0),
                            (i[5] = o),
                            (i[6] = 0),
                            (i[7] = 0),
                            (i[8] = 0),
                            (i[9] = 0),
                            (i[10] = s),
                            (i[11] = -1),
                            (i[12] = 0),
                            (i[13] = 0),
                            (i[14] = c),
                            (i[15] = 0),
                            i
                        );
                    }),
                    (E.computeOrthographicOffCenter = function (
                        t,
                        e,
                        n,
                        r,
                        i,
                        a,
                        o,
                    ) {
                        var u = 1 / (e - t),
                            s = 1 / (r - n),
                            c = 1 / (a - i),
                            E = -(e + t) * u,
                            _ = -(r + n) * s,
                            l = -(a + i) * c;
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
                            (o[12] = E),
                            (o[13] = _),
                            (o[14] = l),
                            (o[15] = 1),
                            o
                        );
                    }),
                    (E.computePerspectiveOffCenter = function (
                        t,
                        e,
                        n,
                        r,
                        i,
                        a,
                        o,
                    ) {
                        var u = (2 * i) / (e - t),
                            s = (2 * i) / (r - n),
                            c = (e + t) / (e - t),
                            E = (r + n) / (r - n),
                            _ = -(a + i) / (a - i),
                            l = (-2 * a * i) / (a - i);
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
                            (o[9] = E),
                            (o[10] = _),
                            (o[11] = -1),
                            (o[12] = 0),
                            (o[13] = 0),
                            (o[14] = l),
                            (o[15] = 0),
                            o
                        );
                    }),
                    (E.computeInfinitePerspectiveOffCenter = function (
                        t,
                        e,
                        n,
                        r,
                        i,
                        a,
                    ) {
                        var o = (2 * i) / (e - t),
                            u = (2 * i) / (r - n),
                            s = (e + t) / (e - t),
                            c = (r + n) / (r - n),
                            E = -2 * i;
                        return (
                            (a[0] = o),
                            (a[1] = 0),
                            (a[2] = 0),
                            (a[3] = 0),
                            (a[4] = 0),
                            (a[5] = u),
                            (a[6] = 0),
                            (a[7] = 0),
                            (a[8] = s),
                            (a[9] = c),
                            (a[10] = -1),
                            (a[11] = -1),
                            (a[12] = 0),
                            (a[13] = 0),
                            (a[14] = E),
                            (a[15] = 0),
                            a
                        );
                    }),
                    (E.computeViewportTransformation = function (t, e, n, i) {
                        t = r(t, r.EMPTY_OBJECT);
                        var a = r(t.x, 0),
                            o = r(t.y, 0),
                            u = r(t.width, 0),
                            s = r(t.height, 0);
                        (e = r(e, 0)), (n = r(n, 1));
                        var c = 0.5 * u,
                            E = 0.5 * s,
                            _ = 0.5 * (n - e),
                            l = c,
                            f = E,
                            h = _,
                            R = a + c,
                            T = o + E,
                            d = e + _;
                        return (
                            (i[0] = l),
                            (i[1] = 0),
                            (i[2] = 0),
                            (i[3] = 0),
                            (i[4] = 0),
                            (i[5] = f),
                            (i[6] = 0),
                            (i[7] = 0),
                            (i[8] = 0),
                            (i[9] = 0),
                            (i[10] = h),
                            (i[11] = 0),
                            (i[12] = R),
                            (i[13] = T),
                            (i[14] = d),
                            (i[15] = 1),
                            i
                        );
                    }),
                    (E.computeView = function (e, n, r, i, a) {
                        return (
                            (a[0] = i.x),
                            (a[1] = r.x),
                            (a[2] = -n.x),
                            (a[3] = 0),
                            (a[4] = i.y),
                            (a[5] = r.y),
                            (a[6] = -n.y),
                            (a[7] = 0),
                            (a[8] = i.z),
                            (a[9] = r.z),
                            (a[10] = -n.z),
                            (a[11] = 0),
                            (a[12] = -t.dot(i, e)),
                            (a[13] = -t.dot(r, e)),
                            (a[14] = t.dot(n, e)),
                            (a[15] = 1),
                            a
                        );
                    }),
                    (E.toArray = function (t, e) {
                        return i(e)
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
                    (E.getElementIndex = function (t, e) {
                        return 4 * t + e;
                    }),
                    (E.getColumn = function (t, e, n) {
                        var r = 4 * e,
                            i = t[r],
                            a = t[r + 1],
                            o = t[r + 2],
                            u = t[r + 3];
                        return (n.x = i), (n.y = a), (n.z = o), (n.w = u), n;
                    }),
                    (E.setColumn = function (t, e, n, r) {
                        r = E.clone(t, r);
                        var i = 4 * e;
                        return (
                            (r[i] = n.x),
                            (r[i + 1] = n.y),
                            (r[i + 2] = n.z),
                            (r[i + 3] = n.w),
                            r
                        );
                    }),
                    (E.setTranslation = function (t, e, n) {
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
                    (E.getRow = function (t, e, n) {
                        var r = t[e],
                            i = t[e + 4],
                            a = t[e + 8],
                            o = t[e + 12];
                        return (n.x = r), (n.y = i), (n.z = a), (n.w = o), n;
                    }),
                    (E.setRow = function (t, e, n, r) {
                        return (
                            (r = E.clone(t, r)),
                            (r[e] = n.x),
                            (r[e + 4] = n.y),
                            (r[e + 8] = n.z),
                            (r[e + 12] = n.w),
                            r
                        );
                    });
                var h = new t();
                E.getScale = function (e, n) {
                    return (
                        (n.x = t.magnitude(
                            t.fromElements(e[0], e[1], e[2], h),
                        )),
                        (n.y = t.magnitude(
                            t.fromElements(e[4], e[5], e[6], h),
                        )),
                        (n.z = t.magnitude(
                            t.fromElements(e[8], e[9], e[10], h),
                        )),
                        n
                    );
                };
                var R = new t();
                (E.getMaximumScale = function (e) {
                    return E.getScale(e, R), t.maximumComponent(R);
                }),
                    (E.multiply = function (t, e, n) {
                        var r = t[0],
                            i = t[1],
                            a = t[2],
                            o = t[3],
                            u = t[4],
                            s = t[5],
                            c = t[6],
                            E = t[7],
                            _ = t[8],
                            l = t[9],
                            f = t[10],
                            h = t[11],
                            R = t[12],
                            T = t[13],
                            d = t[14],
                            A = t[15],
                            p = e[0],
                            m = e[1],
                            N = e[2],
                            y = e[3],
                            I = e[4],
                            S = e[5],
                            O = e[6],
                            M = e[7],
                            C = e[8],
                            w = e[9],
                            g = e[10],
                            v = e[11],
                            P = e[12],
                            x = e[13],
                            F = e[14],
                            L = e[15],
                            U = r * p + u * m + _ * N + R * y,
                            D = i * p + s * m + l * N + T * y,
                            B = a * p + c * m + f * N + d * y,
                            z = o * p + E * m + h * N + A * y,
                            b = r * I + u * S + _ * O + R * M,
                            G = i * I + s * S + l * O + T * M,
                            V = a * I + c * S + f * O + d * M,
                            X = o * I + E * S + h * O + A * M,
                            q = r * C + u * w + _ * g + R * v,
                            W = i * C + s * w + l * g + T * v,
                            H = a * C + c * w + f * g + d * v,
                            Y = o * C + E * w + h * g + A * v,
                            k = r * P + u * x + _ * F + R * L,
                            K = i * P + s * x + l * F + T * L,
                            Z = a * P + c * x + f * F + d * L,
                            j = o * P + E * x + h * F + A * L;
                        return (
                            (n[0] = U),
                            (n[1] = D),
                            (n[2] = B),
                            (n[3] = z),
                            (n[4] = b),
                            (n[5] = G),
                            (n[6] = V),
                            (n[7] = X),
                            (n[8] = q),
                            (n[9] = W),
                            (n[10] = H),
                            (n[11] = Y),
                            (n[12] = k),
                            (n[13] = K),
                            (n[14] = Z),
                            (n[15] = j),
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
                    (E.multiplyTransformation = function (t, e, n) {
                        var r = t[0],
                            i = t[1],
                            a = t[2],
                            o = t[4],
                            u = t[5],
                            s = t[6],
                            c = t[8],
                            E = t[9],
                            _ = t[10],
                            l = t[12],
                            f = t[13],
                            h = t[14],
                            R = e[0],
                            T = e[1],
                            d = e[2],
                            A = e[4],
                            p = e[5],
                            m = e[6],
                            N = e[8],
                            y = e[9],
                            I = e[10],
                            S = e[12],
                            O = e[13],
                            M = e[14],
                            C = r * R + o * T + c * d,
                            w = i * R + u * T + E * d,
                            g = a * R + s * T + _ * d,
                            v = r * A + o * p + c * m,
                            P = i * A + u * p + E * m,
                            x = a * A + s * p + _ * m,
                            F = r * N + o * y + c * I,
                            L = i * N + u * y + E * I,
                            U = a * N + s * y + _ * I,
                            D = r * S + o * O + c * M + l,
                            B = i * S + u * O + E * M + f,
                            z = a * S + s * O + _ * M + h;
                        return (
                            (n[0] = C),
                            (n[1] = w),
                            (n[2] = g),
                            (n[3] = 0),
                            (n[4] = v),
                            (n[5] = P),
                            (n[6] = x),
                            (n[7] = 0),
                            (n[8] = F),
                            (n[9] = L),
                            (n[10] = U),
                            (n[11] = 0),
                            (n[12] = D),
                            (n[13] = B),
                            (n[14] = z),
                            (n[15] = 1),
                            n
                        );
                    }),
                    (E.multiplyByMatrix3 = function (t, e, n) {
                        var r = t[0],
                            i = t[1],
                            a = t[2],
                            o = t[4],
                            u = t[5],
                            s = t[6],
                            c = t[8],
                            E = t[9],
                            _ = t[10],
                            l = e[0],
                            f = e[1],
                            h = e[2],
                            R = e[3],
                            T = e[4],
                            d = e[5],
                            A = e[6],
                            p = e[7],
                            m = e[8],
                            N = r * l + o * f + c * h,
                            y = i * l + u * f + E * h,
                            I = a * l + s * f + _ * h,
                            S = r * R + o * T + c * d,
                            O = i * R + u * T + E * d,
                            M = a * R + s * T + _ * d,
                            C = r * A + o * p + c * m,
                            w = i * A + u * p + E * m,
                            g = a * A + s * p + _ * m;
                        return (
                            (n[0] = N),
                            (n[1] = y),
                            (n[2] = I),
                            (n[3] = 0),
                            (n[4] = S),
                            (n[5] = O),
                            (n[6] = M),
                            (n[7] = 0),
                            (n[8] = C),
                            (n[9] = w),
                            (n[10] = g),
                            (n[11] = 0),
                            (n[12] = t[12]),
                            (n[13] = t[13]),
                            (n[14] = t[14]),
                            (n[15] = t[15]),
                            n
                        );
                    }),
                    (E.multiplyByTranslation = function (t, e, n) {
                        var r = e.x,
                            i = e.y,
                            a = e.z,
                            o = r * t[0] + i * t[4] + a * t[8] + t[12],
                            u = r * t[1] + i * t[5] + a * t[9] + t[13],
                            s = r * t[2] + i * t[6] + a * t[10] + t[14];
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
                            (n[14] = s),
                            (n[15] = t[15]),
                            n
                        );
                    });
                var T = new t();
                (E.multiplyByUniformScale = function (t, e, n) {
                    return (
                        (T.x = e),
                        (T.y = e),
                        (T.z = e),
                        E.multiplyByScale(t, T, n)
                    );
                }),
                    (E.multiplyByScale = function (t, e, n) {
                        var r = e.x,
                            i = e.y,
                            a = e.z;
                        return 1 === r && 1 === i && 1 === a
                            ? E.clone(t, n)
                            : ((n[0] = r * t[0]),
                              (n[1] = r * t[1]),
                              (n[2] = r * t[2]),
                              (n[3] = 0),
                              (n[4] = i * t[4]),
                              (n[5] = i * t[5]),
                              (n[6] = i * t[6]),
                              (n[7] = 0),
                              (n[8] = a * t[8]),
                              (n[9] = a * t[9]),
                              (n[10] = a * t[10]),
                              (n[11] = 0),
                              (n[12] = t[12]),
                              (n[13] = t[13]),
                              (n[14] = t[14]),
                              (n[15] = 1),
                              n);
                    }),
                    (E.multiplyByVector = function (t, e, n) {
                        var r = e.x,
                            i = e.y,
                            a = e.z,
                            o = e.w,
                            u = t[0] * r + t[4] * i + t[8] * a + t[12] * o,
                            s = t[1] * r + t[5] * i + t[9] * a + t[13] * o,
                            c = t[2] * r + t[6] * i + t[10] * a + t[14] * o,
                            E = t[3] * r + t[7] * i + t[11] * a + t[15] * o;
                        return (n.x = u), (n.y = s), (n.z = c), (n.w = E), n;
                    }),
                    (E.multiplyByPointAsVector = function (t, e, n) {
                        var r = e.x,
                            i = e.y,
                            a = e.z,
                            o = t[0] * r + t[4] * i + t[8] * a,
                            u = t[1] * r + t[5] * i + t[9] * a,
                            s = t[2] * r + t[6] * i + t[10] * a;
                        return (n.x = o), (n.y = u), (n.z = s), n;
                    }),
                    (E.multiplyByPoint = function (t, e, n) {
                        var r = e.x,
                            i = e.y,
                            a = e.z,
                            o = t[0] * r + t[4] * i + t[8] * a + t[12],
                            u = t[1] * r + t[5] * i + t[9] * a + t[13],
                            s = t[2] * r + t[6] * i + t[10] * a + t[14];
                        return (n.x = o), (n.y = u), (n.z = s), n;
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
                    (E.transpose = function (t, e) {
                        var n = t[1],
                            r = t[2],
                            i = t[3],
                            a = t[6],
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
                            (e[9] = a),
                            (e[10] = t[10]),
                            (e[11] = t[14]),
                            (e[12] = i),
                            (e[13] = o),
                            (e[14] = u),
                            (e[15] = t[15]),
                            e
                        );
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
                    (E.equals = function (t, e) {
                        return (
                            t === e ||
                            (i(t) &&
                                i(e) &&
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
                    (E.equalsEpsilon = function (t, e, n) {
                        return (
                            t === e ||
                            (i(t) &&
                                i(e) &&
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
                    (E.getTranslation = function (t, e) {
                        return (e.x = t[12]), (e.y = t[13]), (e.z = t[14]), e;
                    }),
                    (E.getRotation = function (t, e) {
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
                var d = new s(),
                    A = new s(),
                    p = new e(),
                    m = new e(0, 0, 0, 1);
                return (
                    (E.inverse = function (t, n) {
                        if (
                            s.equalsEpsilon(
                                E.getRotation(t, d),
                                A,
                                u.EPSILON7,
                            ) &&
                            e.equals(E.getRow(t, 3, p), m)
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
                            i = t[4],
                            a = t[8],
                            o = t[12],
                            _ = t[1],
                            l = t[5],
                            f = t[9],
                            h = t[13],
                            R = t[2],
                            T = t[6],
                            N = t[10],
                            y = t[14],
                            I = t[3],
                            S = t[7],
                            O = t[11],
                            M = t[15],
                            C = N * M,
                            w = y * O,
                            g = T * M,
                            v = y * S,
                            P = T * O,
                            x = N * S,
                            F = R * M,
                            L = y * I,
                            U = R * O,
                            D = N * I,
                            B = R * S,
                            z = T * I,
                            b = C * l + v * f + P * h - (w * l + g * f + x * h),
                            G = w * _ + F * f + D * h - (C * _ + L * f + U * h),
                            V = g * _ + L * l + B * h - (v * _ + F * l + z * h),
                            X = x * _ + U * l + z * f - (P * _ + D * l + B * f),
                            q = w * i + g * a + x * o - (C * i + v * a + P * o),
                            W = C * r + L * a + U * o - (w * r + F * a + D * o),
                            H = v * r + F * i + z * o - (g * r + L * i + B * o),
                            Y = P * r + D * i + B * a - (x * r + U * i + z * a);
                        (C = a * h),
                            (w = o * f),
                            (g = i * h),
                            (v = o * l),
                            (P = i * f),
                            (x = a * l),
                            (F = r * h),
                            (L = o * _),
                            (U = r * f),
                            (D = a * _),
                            (B = r * l),
                            (z = i * _);
                        var k = C * S + v * O + P * M - (w * S + g * O + x * M),
                            K = w * I + F * O + D * M - (C * I + L * O + U * M),
                            Z = g * I + L * S + B * M - (v * I + F * S + z * M),
                            j = x * I + U * S + z * O - (P * I + D * S + B * O),
                            Q = g * N + x * y + w * T - (P * y + C * T + v * N),
                            J = U * y + C * R + L * N - (F * N + D * y + w * R),
                            $ = F * T + z * y + v * R - (B * y + g * R + L * T),
                            tt =
                                B * N + P * R + D * T - (U * T + z * N + x * R),
                            et = r * b + i * G + a * V + o * X;
                        if (Math.abs(et) < u.EPSILON20)
                            throw new c(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (et = 1 / et),
                            (n[0] = b * et),
                            (n[1] = G * et),
                            (n[2] = V * et),
                            (n[3] = X * et),
                            (n[4] = q * et),
                            (n[5] = W * et),
                            (n[6] = H * et),
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
                    (E.inverseTransformation = function (t, e) {
                        var n = t[0],
                            r = t[1],
                            i = t[2],
                            a = t[4],
                            o = t[5],
                            u = t[6],
                            s = t[8],
                            c = t[9],
                            E = t[10],
                            _ = t[12],
                            l = t[13],
                            f = t[14],
                            h = -n * _ - r * l - i * f,
                            R = -a * _ - o * l - u * f,
                            T = -s * _ - c * l - E * f;
                        return (
                            (e[0] = n),
                            (e[1] = a),
                            (e[2] = s),
                            (e[3] = 0),
                            (e[4] = r),
                            (e[5] = o),
                            (e[6] = c),
                            (e[7] = 0),
                            (e[8] = i),
                            (e[9] = u),
                            (e[10] = E),
                            (e[11] = 0),
                            (e[12] = h),
                            (e[13] = R),
                            (e[14] = T),
                            (e[15] = 1),
                            e
                        );
                    }),
                    (E.IDENTITY = o(
                        new E(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                    )),
                    (E.ZERO = o(
                        new E(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
                    )),
                    (E.COLUMN0ROW0 = 0),
                    (E.COLUMN0ROW1 = 1),
                    (E.COLUMN0ROW2 = 2),
                    (E.COLUMN0ROW3 = 3),
                    (E.COLUMN1ROW0 = 4),
                    (E.COLUMN1ROW1 = 5),
                    (E.COLUMN1ROW2 = 6),
                    (E.COLUMN1ROW3 = 7),
                    (E.COLUMN2ROW0 = 8),
                    (E.COLUMN2ROW1 = 9),
                    (E.COLUMN2ROW2 = 10),
                    (E.COLUMN2ROW3 = 11),
                    (E.COLUMN3ROW0 = 12),
                    (E.COLUMN3ROW1 = 13),
                    (E.COLUMN3ROW2 = 14),
                    (E.COLUMN3ROW3 = 15),
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
                    (E.prototype.equalsEpsilon = function (t, e) {
                        return E.equalsEpsilon(this, t, e);
                    }),
                    (E.prototype.toString = function () {
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
            function (t, e, n, r, i, a, o, u) {
                'use strict';
                function s(t, e, r, i) {
                    (this.west = n(t, 0)),
                        (this.south = n(e, 0)),
                        (this.east = n(r, 0)),
                        (this.north = n(i, 0));
                }
                i(s.prototype, {
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
                    (s.pack = function (t, e, r) {
                        return (
                            (r = n(r, 0)),
                            (e[r++] = t.west),
                            (e[r++] = t.south),
                            (e[r++] = t.east),
                            (e[r] = t.north),
                            e
                        );
                    }),
                    (s.unpack = function (t, e, i) {
                        return (
                            (e = n(e, 0)),
                            r(i) || (i = new s()),
                            (i.west = t[e++]),
                            (i.south = t[e++]),
                            (i.east = t[e++]),
                            (i.north = t[e]),
                            i
                        );
                    }),
                    (s.computeWidth = function (t) {
                        var e = t.east,
                            n = t.west;
                        return e < n && (e += u.TWO_PI), e - n;
                    }),
                    (s.computeHeight = function (t) {
                        return t.north - t.south;
                    }),
                    (s.fromDegrees = function (t, e, i, a, o) {
                        return (
                            (t = u.toRadians(n(t, 0))),
                            (e = u.toRadians(n(e, 0))),
                            (i = u.toRadians(n(i, 0))),
                            (a = u.toRadians(n(a, 0))),
                            r(o)
                                ? ((o.west = t),
                                  (o.south = e),
                                  (o.east = i),
                                  (o.north = a),
                                  o)
                                : new s(t, e, i, a)
                        );
                    }),
                    (s.fromRadians = function (t, e, i, a, o) {
                        return r(o)
                            ? ((o.west = n(t, 0)),
                              (o.south = n(e, 0)),
                              (o.east = n(i, 0)),
                              (o.north = n(a, 0)),
                              o)
                            : new s(t, e, i, a);
                    }),
                    (s.fromCartographicArray = function (t, e) {
                        for (
                            var n = Number.MAX_VALUE,
                                i = -Number.MAX_VALUE,
                                a = Number.MAX_VALUE,
                                o = -Number.MAX_VALUE,
                                c = Number.MAX_VALUE,
                                E = -Number.MAX_VALUE,
                                _ = 0,
                                l = t.length;
                            _ < l;
                            _++
                        ) {
                            var f = t[_];
                            (n = Math.min(n, f.longitude)),
                                (i = Math.max(i, f.longitude)),
                                (c = Math.min(c, f.latitude)),
                                (E = Math.max(E, f.latitude));
                            var h =
                                f.longitude >= 0
                                    ? f.longitude
                                    : f.longitude + u.TWO_PI;
                            (a = Math.min(a, h)), (o = Math.max(o, h));
                        }
                        return (
                            i - n > o - a &&
                                ((n = a),
                                (i = o),
                                i > u.PI && (i -= u.TWO_PI),
                                n > u.PI && (n -= u.TWO_PI)),
                            r(e)
                                ? ((e.west = n),
                                  (e.south = c),
                                  (e.east = i),
                                  (e.north = E),
                                  e)
                                : new s(n, c, i, E)
                        );
                    }),
                    (s.fromCartesianArray = function (t, e, i) {
                        e = n(e, a.WGS84);
                        for (
                            var o = Number.MAX_VALUE,
                                c = -Number.MAX_VALUE,
                                E = Number.MAX_VALUE,
                                _ = -Number.MAX_VALUE,
                                l = Number.MAX_VALUE,
                                f = -Number.MAX_VALUE,
                                h = 0,
                                R = t.length;
                            h < R;
                            h++
                        ) {
                            var T = e.cartesianToCartographic(t[h]);
                            (o = Math.min(o, T.longitude)),
                                (c = Math.max(c, T.longitude)),
                                (l = Math.min(l, T.latitude)),
                                (f = Math.max(f, T.latitude));
                            var d =
                                T.longitude >= 0
                                    ? T.longitude
                                    : T.longitude + u.TWO_PI;
                            (E = Math.min(E, d)), (_ = Math.max(_, d));
                        }
                        return (
                            c - o > _ - E &&
                                ((o = E),
                                (c = _),
                                c > u.PI && (c -= u.TWO_PI),
                                o > u.PI && (o -= u.TWO_PI)),
                            r(i)
                                ? ((i.west = o),
                                  (i.south = l),
                                  (i.east = c),
                                  (i.north = f),
                                  i)
                                : new s(o, l, c, f)
                        );
                    }),
                    (s.clone = function (t, e) {
                        if (r(t))
                            return r(e)
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
                            (r(t) &&
                                r(e) &&
                                t.west === e.west &&
                                t.south === e.south &&
                                t.east === e.east &&
                                t.north === e.north)
                        );
                    }),
                    (s.prototype.equalsEpsilon = function (t, e) {
                        return (
                            r(t) &&
                            Math.abs(this.west - t.west) <= e &&
                            Math.abs(this.south - t.south) <= e &&
                            Math.abs(this.east - t.east) <= e &&
                            Math.abs(this.north - t.north) <= e
                        );
                    }),
                    (s.validate = function (t) {}),
                    (s.southwest = function (e, n) {
                        return r(n)
                            ? ((n.longitude = e.west),
                              (n.latitude = e.south),
                              (n.height = 0),
                              n)
                            : new t(e.west, e.south);
                    }),
                    (s.northwest = function (e, n) {
                        return r(n)
                            ? ((n.longitude = e.west),
                              (n.latitude = e.north),
                              (n.height = 0),
                              n)
                            : new t(e.west, e.north);
                    }),
                    (s.northeast = function (e, n) {
                        return r(n)
                            ? ((n.longitude = e.east),
                              (n.latitude = e.north),
                              (n.height = 0),
                              n)
                            : new t(e.east, e.north);
                    }),
                    (s.southeast = function (e, n) {
                        return r(n)
                            ? ((n.longitude = e.east),
                              (n.latitude = e.south),
                              (n.height = 0),
                              n)
                            : new t(e.east, e.south);
                    }),
                    (s.center = function (e, n) {
                        var i = e.east,
                            a = e.west;
                        i < a && (i += u.TWO_PI);
                        var o = u.negativePiToPi(0.5 * (a + i)),
                            s = 0.5 * (e.south + e.north);
                        return r(n)
                            ? ((n.longitude = o),
                              (n.latitude = s),
                              (n.height = 0),
                              n)
                            : new t(o, s);
                    }),
                    (s.intersection = function (t, e, n) {
                        var i = t.east,
                            a = t.west,
                            o = e.east,
                            c = e.west;
                        i < a && o > 0
                            ? (i += u.TWO_PI)
                            : o < c && i > 0 && (o += u.TWO_PI),
                            i < a && c < 0
                                ? (c += u.TWO_PI)
                                : o < c && a < 0 && (a += u.TWO_PI);
                        var E = u.negativePiToPi(Math.max(a, c)),
                            _ = u.negativePiToPi(Math.min(i, o));
                        if (!((t.west < t.east || e.west < e.east) && _ <= E)) {
                            var l = Math.max(t.south, e.south),
                                f = Math.min(t.north, e.north);
                            if (!(l >= f))
                                return r(n)
                                    ? ((n.west = E),
                                      (n.south = l),
                                      (n.east = _),
                                      (n.north = f),
                                      n)
                                    : new s(E, l, _, f);
                        }
                    }),
                    (s.simpleIntersection = function (t, e, n) {
                        var i = Math.max(t.west, e.west),
                            a = Math.max(t.south, e.south),
                            o = Math.min(t.east, e.east),
                            u = Math.min(t.north, e.north);
                        if (!(a >= u || i >= o))
                            return r(n)
                                ? ((n.west = i),
                                  (n.south = a),
                                  (n.east = o),
                                  (n.north = u),
                                  n)
                                : new s(i, a, o, u);
                    }),
                    (s.union = function (t, e, n) {
                        r(n) || (n = new s());
                        var i = t.east,
                            a = t.west,
                            o = e.east,
                            c = e.west;
                        i < a && o > 0
                            ? (i += u.TWO_PI)
                            : o < c && i > 0 && (o += u.TWO_PI),
                            i < a && c < 0
                                ? (c += u.TWO_PI)
                                : o < c && a < 0 && (a += u.TWO_PI);
                        var E = u.convertLongitudeRange(Math.min(a, c)),
                            _ = u.convertLongitudeRange(Math.max(i, o));
                        return (
                            (n.west = E),
                            (n.south = Math.min(t.south, e.south)),
                            (n.east = _),
                            (n.north = Math.max(t.north, e.north)),
                            n
                        );
                    }),
                    (s.expand = function (t, e, n) {
                        return (
                            r(n) || (n = new s()),
                            (n.west = Math.min(t.west, e.longitude)),
                            (n.south = Math.min(t.south, e.latitude)),
                            (n.east = Math.max(t.east, e.longitude)),
                            (n.north = Math.max(t.north, e.latitude)),
                            n
                        );
                    }),
                    (s.contains = function (t, e) {
                        var n = e.longitude,
                            r = e.latitude,
                            i = t.west,
                            a = t.east;
                        return (
                            a < i &&
                                ((a += u.TWO_PI), n < 0 && (n += u.TWO_PI)),
                            (n > i || u.equalsEpsilon(n, i, u.EPSILON14)) &&
                                (n < a || u.equalsEpsilon(n, a, u.EPSILON14)) &&
                                r >= t.south &&
                                r <= t.north
                        );
                    });
                var c = new t();
                return (
                    (s.subsample = function (t, e, i, o) {
                        (e = n(e, a.WGS84)), (i = n(i, 0)), r(o) || (o = []);
                        var E = 0,
                            _ = t.north,
                            l = t.south,
                            f = t.east,
                            h = t.west,
                            R = c;
                        (R.height = i),
                            (R.longitude = h),
                            (R.latitude = _),
                            (o[E] = e.cartographicToCartesian(R, o[E])),
                            E++,
                            (R.longitude = f),
                            (o[E] = e.cartographicToCartesian(R, o[E])),
                            E++,
                            (R.latitude = l),
                            (o[E] = e.cartographicToCartesian(R, o[E])),
                            E++,
                            (R.longitude = h),
                            (o[E] = e.cartographicToCartesian(R, o[E])),
                            E++,
                            (R.latitude = _ < 0 ? _ : l > 0 ? l : 0);
                        for (var T = 1; T < 8; ++T)
                            (R.longitude = -Math.PI + T * u.PI_OVER_TWO),
                                s.contains(t, R) &&
                                    ((o[E] = e.cartographicToCartesian(
                                        R,
                                        o[E],
                                    )),
                                    E++);
                        return (
                            0 === R.latitude &&
                                ((R.longitude = h),
                                (o[E] = e.cartographicToCartesian(R, o[E])),
                                E++,
                                (R.longitude = f),
                                (o[E] = e.cartographicToCartesian(R, o[E])),
                                E++),
                            (o.length = E),
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
            function (t, e, n, r, i, a, o, u, s, c, E, _) {
                'use strict';
                function l(e, n) {
                    (this.center = t.clone(r(e, t.ZERO))),
                        (this.radius = r(n, 0));
                }
                var f = new t(),
                    h = new t(),
                    R = new t(),
                    T = new t(),
                    d = new t(),
                    A = new t(),
                    p = new t(),
                    m = new t(),
                    N = new t(),
                    y = new t(),
                    I = new t(),
                    S = new t();
                l.fromPoints = function (e, n) {
                    if ((i(n) || (n = new l()), !i(e) || 0 === e.length))
                        return (
                            (n.center = t.clone(t.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r,
                        a = t.clone(e[0], p),
                        o = t.clone(a, f),
                        u = t.clone(a, h),
                        s = t.clone(a, R),
                        c = t.clone(a, T),
                        E = t.clone(a, d),
                        _ = t.clone(a, A),
                        O = e.length;
                    for (r = 1; r < O; r++) {
                        t.clone(e[r], a);
                        var M = a.x,
                            C = a.y,
                            w = a.z;
                        M < o.x && t.clone(a, o),
                            M > c.x && t.clone(a, c),
                            C < u.y && t.clone(a, u),
                            C > E.y && t.clone(a, E),
                            w < s.z && t.clone(a, s),
                            w > _.z && t.clone(a, _);
                    }
                    var g = t.magnitudeSquared(t.subtract(c, o, m)),
                        v = t.magnitudeSquared(t.subtract(E, u, m)),
                        P = t.magnitudeSquared(t.subtract(_, s, m)),
                        x = o,
                        F = c,
                        L = g;
                    v > L && ((L = v), (x = u), (F = E)),
                        P > L && ((L = P), (x = s), (F = _));
                    var U = N;
                    (U.x = 0.5 * (x.x + F.x)),
                        (U.y = 0.5 * (x.y + F.y)),
                        (U.z = 0.5 * (x.z + F.z));
                    var D = t.magnitudeSquared(t.subtract(F, U, m)),
                        B = Math.sqrt(D),
                        z = y;
                    (z.x = o.x), (z.y = u.y), (z.z = s.z);
                    var b = I;
                    (b.x = c.x), (b.y = E.y), (b.z = _.z);
                    var G = t.multiplyByScalar(t.add(z, b, m), 0.5, S),
                        V = 0;
                    for (r = 0; r < O; r++) {
                        t.clone(e[r], a);
                        var X = t.magnitude(t.subtract(a, G, m));
                        X > V && (V = X);
                        var q = t.magnitudeSquared(t.subtract(a, U, m));
                        if (q > D) {
                            var W = Math.sqrt(q);
                            (B = 0.5 * (B + W)), (D = B * B);
                            var H = W - B;
                            (U.x = (B * U.x + H * a.x) / W),
                                (U.y = (B * U.y + H * a.y) / W),
                                (U.z = (B * U.z + H * a.z) / W);
                        }
                    }
                    return (
                        B < V
                            ? (t.clone(U, n.center), (n.radius = B))
                            : (t.clone(G, n.center), (n.radius = V)),
                        n
                    );
                };
                var O = new o(),
                    M = new t(),
                    C = new t(),
                    w = new e(),
                    g = new e();
                (l.fromRectangle2D = function (t, e, n) {
                    return l.fromRectangleWithHeights2D(t, e, 0, 0, n);
                }),
                    (l.fromRectangleWithHeights2D = function (e, n, a, o, u) {
                        if ((i(u) || (u = new l()), !i(e)))
                            return (
                                (u.center = t.clone(t.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (n = r(n, O)),
                            _.southwest(e, w),
                            (w.height = a),
                            _.northeast(e, g),
                            (g.height = o);
                        var s = n.project(w, M),
                            c = n.project(g, C),
                            E = c.x - s.x,
                            f = c.y - s.y,
                            h = c.z - s.z;
                        u.radius = 0.5 * Math.sqrt(E * E + f * f + h * h);
                        var R = u.center;
                        return (
                            (R.x = s.x + 0.5 * E),
                            (R.y = s.y + 0.5 * f),
                            (R.z = s.z + 0.5 * h),
                            u
                        );
                    });
                var v = [];
                (l.fromRectangle3D = function (e, n, o, u) {
                    if (
                        ((n = r(n, a.WGS84)),
                        (o = r(o, 0)),
                        i(u) || (u = new l()),
                        !i(e))
                    )
                        return (
                            (u.center = t.clone(t.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var s = _.subsample(e, n, o, v);
                    return l.fromPoints(s, u);
                }),
                    (l.fromVertices = function (e, n, a, o) {
                        if ((i(o) || (o = new l()), !i(e) || 0 === e.length))
                            return (
                                (o.center = t.clone(t.ZERO, o.center)),
                                (o.radius = 0),
                                o
                            );
                        (n = r(n, t.ZERO)), (a = r(a, 3));
                        var u = p;
                        (u.x = e[0] + n.x),
                            (u.y = e[1] + n.y),
                            (u.z = e[2] + n.z);
                        var s,
                            c = t.clone(u, f),
                            E = t.clone(u, h),
                            _ = t.clone(u, R),
                            O = t.clone(u, T),
                            M = t.clone(u, d),
                            C = t.clone(u, A),
                            w = e.length;
                        for (s = 0; s < w; s += a) {
                            var g = e[s] + n.x,
                                v = e[s + 1] + n.y,
                                P = e[s + 2] + n.z;
                            (u.x = g),
                                (u.y = v),
                                (u.z = P),
                                g < c.x && t.clone(u, c),
                                g > O.x && t.clone(u, O),
                                v < E.y && t.clone(u, E),
                                v > M.y && t.clone(u, M),
                                P < _.z && t.clone(u, _),
                                P > C.z && t.clone(u, C);
                        }
                        var x = t.magnitudeSquared(t.subtract(O, c, m)),
                            F = t.magnitudeSquared(t.subtract(M, E, m)),
                            L = t.magnitudeSquared(t.subtract(C, _, m)),
                            U = c,
                            D = O,
                            B = x;
                        F > B && ((B = F), (U = E), (D = M)),
                            L > B && ((B = L), (U = _), (D = C));
                        var z = N;
                        (z.x = 0.5 * (U.x + D.x)),
                            (z.y = 0.5 * (U.y + D.y)),
                            (z.z = 0.5 * (U.z + D.z));
                        var b = t.magnitudeSquared(t.subtract(D, z, m)),
                            G = Math.sqrt(b),
                            V = y;
                        (V.x = c.x), (V.y = E.y), (V.z = _.z);
                        var X = I;
                        (X.x = O.x), (X.y = M.y), (X.z = C.z);
                        var q = t.multiplyByScalar(t.add(V, X, m), 0.5, S),
                            W = 0;
                        for (s = 0; s < w; s += a) {
                            (u.x = e[s] + n.x),
                                (u.y = e[s + 1] + n.y),
                                (u.z = e[s + 2] + n.z);
                            var H = t.magnitude(t.subtract(u, q, m));
                            H > W && (W = H);
                            var Y = t.magnitudeSquared(t.subtract(u, z, m));
                            if (Y > b) {
                                var k = Math.sqrt(Y);
                                (G = 0.5 * (G + k)), (b = G * G);
                                var K = k - G;
                                (z.x = (G * z.x + K * u.x) / k),
                                    (z.y = (G * z.y + K * u.y) / k),
                                    (z.z = (G * z.z + K * u.z) / k);
                            }
                        }
                        return (
                            G < W
                                ? (t.clone(z, o.center), (o.radius = G))
                                : (t.clone(q, o.center), (o.radius = W)),
                            o
                        );
                    }),
                    (l.fromEncodedCartesianVertices = function (e, n, r) {
                        if (
                            (i(r) || (r = new l()),
                            !i(e) ||
                                !i(n) ||
                                e.length !== n.length ||
                                0 === e.length)
                        )
                            return (
                                (r.center = t.clone(t.ZERO, r.center)),
                                (r.radius = 0),
                                r
                            );
                        var a = p;
                        (a.x = e[0] + n[0]),
                            (a.y = e[1] + n[1]),
                            (a.z = e[2] + n[2]);
                        var o,
                            u = t.clone(a, f),
                            s = t.clone(a, h),
                            c = t.clone(a, R),
                            E = t.clone(a, T),
                            _ = t.clone(a, d),
                            O = t.clone(a, A),
                            M = e.length;
                        for (o = 0; o < M; o += 3) {
                            var C = e[o] + n[o],
                                w = e[o + 1] + n[o + 1],
                                g = e[o + 2] + n[o + 2];
                            (a.x = C),
                                (a.y = w),
                                (a.z = g),
                                C < u.x && t.clone(a, u),
                                C > E.x && t.clone(a, E),
                                w < s.y && t.clone(a, s),
                                w > _.y && t.clone(a, _),
                                g < c.z && t.clone(a, c),
                                g > O.z && t.clone(a, O);
                        }
                        var v = t.magnitudeSquared(t.subtract(E, u, m)),
                            P = t.magnitudeSquared(t.subtract(_, s, m)),
                            x = t.magnitudeSquared(t.subtract(O, c, m)),
                            F = u,
                            L = E,
                            U = v;
                        P > U && ((U = P), (F = s), (L = _)),
                            x > U && ((U = x), (F = c), (L = O));
                        var D = N;
                        (D.x = 0.5 * (F.x + L.x)),
                            (D.y = 0.5 * (F.y + L.y)),
                            (D.z = 0.5 * (F.z + L.z));
                        var B = t.magnitudeSquared(t.subtract(L, D, m)),
                            z = Math.sqrt(B),
                            b = y;
                        (b.x = u.x), (b.y = s.y), (b.z = c.z);
                        var G = I;
                        (G.x = E.x), (G.y = _.y), (G.z = O.z);
                        var V = t.multiplyByScalar(t.add(b, G, m), 0.5, S),
                            X = 0;
                        for (o = 0; o < M; o += 3) {
                            (a.x = e[o] + n[o]),
                                (a.y = e[o + 1] + n[o + 1]),
                                (a.z = e[o + 2] + n[o + 2]);
                            var q = t.magnitude(t.subtract(a, V, m));
                            q > X && (X = q);
                            var W = t.magnitudeSquared(t.subtract(a, D, m));
                            if (W > B) {
                                var H = Math.sqrt(W);
                                (z = 0.5 * (z + H)), (B = z * z);
                                var Y = H - z;
                                (D.x = (z * D.x + Y * a.x) / H),
                                    (D.y = (z * D.y + Y * a.y) / H),
                                    (D.z = (z * D.z + Y * a.z) / H);
                            }
                        }
                        return (
                            z < X
                                ? (t.clone(D, r.center), (r.radius = z))
                                : (t.clone(V, r.center), (r.radius = X)),
                            r
                        );
                    }),
                    (l.fromCornerPoints = function (e, n, r) {
                        i(r) || (r = new l());
                        var a = r.center;
                        return (
                            t.add(e, n, a),
                            t.multiplyByScalar(a, 0.5, a),
                            (r.radius = t.distance(a, n)),
                            r
                        );
                    }),
                    (l.fromEllipsoid = function (e, n) {
                        return (
                            i(n) || (n = new l()),
                            t.clone(t.ZERO, n.center),
                            (n.radius = e.maximumRadius),
                            n
                        );
                    });
                var P = new t();
                l.fromBoundingSpheres = function (e, n) {
                    if ((i(n) || (n = new l()), !i(e) || 0 === e.length))
                        return (
                            (n.center = t.clone(t.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r = e.length;
                    if (1 === r) return l.clone(e[0], n);
                    if (2 === r) return l.union(e[0], e[1], n);
                    var a,
                        o = [];
                    for (a = 0; a < r; a++) o.push(e[a].center);
                    n = l.fromPoints(o, n);
                    var u = n.center,
                        s = n.radius;
                    for (a = 0; a < r; a++) {
                        var c = e[a];
                        s = Math.max(s, t.distance(u, c.center, P) + c.radius);
                    }
                    return (n.radius = s), n;
                };
                var x = new t(),
                    F = new t(),
                    L = new t();
                (l.fromOrientedBoundingBox = function (e, n) {
                    i(n) || (n = new l());
                    var r = e.halfAxes,
                        a = c.getColumn(r, 0, x),
                        o = c.getColumn(r, 1, F),
                        u = c.getColumn(r, 2, L);
                    return (
                        t.add(a, o, a),
                        t.add(a, u, a),
                        (n.center = t.clone(e.center, n.center)),
                        (n.radius = t.magnitude(a)),
                        n
                    );
                }),
                    (l.clone = function (e, n) {
                        if (i(e))
                            return i(n)
                                ? ((n.center = t.clone(e.center, n.center)),
                                  (n.radius = e.radius),
                                  n)
                                : new l(e.center, e.radius);
                    }),
                    (l.packedLength = 4),
                    (l.pack = function (t, e, n) {
                        n = r(n, 0);
                        var i = t.center;
                        return (
                            (e[n++] = i.x),
                            (e[n++] = i.y),
                            (e[n++] = i.z),
                            (e[n] = t.radius),
                            e
                        );
                    }),
                    (l.unpack = function (t, e, n) {
                        (e = r(e, 0)), i(n) || (n = new l());
                        var a = n.center;
                        return (
                            (a.x = t[e++]),
                            (a.y = t[e++]),
                            (a.z = t[e++]),
                            (n.radius = t[e]),
                            n
                        );
                    });
                var U = new t(),
                    D = new t();
                l.union = function (e, n, r) {
                    i(r) || (r = new l());
                    var a = e.center,
                        o = e.radius,
                        u = n.center,
                        s = n.radius,
                        c = t.subtract(u, a, U),
                        E = t.magnitude(c);
                    if (o >= E + s) return e.clone(r), r;
                    if (s >= E + o) return n.clone(r), r;
                    var _ = 0.5 * (o + E + s),
                        f = t.multiplyByScalar(c, (-o + _) / E, D);
                    return (
                        t.add(f, a, f), t.clone(f, r.center), (r.radius = _), r
                    );
                };
                var B = new t();
                (l.expand = function (e, n, r) {
                    r = l.clone(e, r);
                    var i = t.magnitude(t.subtract(n, r.center, B));
                    return i > r.radius && (r.radius = i), r;
                }),
                    (l.intersectPlane = function (e, n) {
                        var r = e.center,
                            i = e.radius,
                            a = n.normal,
                            o = t.dot(a, r) + n.distance;
                        return o < -i
                            ? u.OUTSIDE
                            : o < i
                              ? u.INTERSECTING
                              : u.INSIDE;
                    }),
                    (l.transform = function (t, e, n) {
                        return (
                            i(n) || (n = new l()),
                            (n.center = E.multiplyByPoint(
                                e,
                                t.center,
                                n.center,
                            )),
                            (n.radius = E.getMaximumScale(e) * t.radius),
                            n
                        );
                    });
                var z = new t();
                (l.distanceSquaredTo = function (e, n) {
                    var r = t.subtract(e.center, n, z);
                    return t.magnitudeSquared(r) - e.radius * e.radius;
                }),
                    (l.transformWithoutScale = function (t, e, n) {
                        return (
                            i(n) || (n = new l()),
                            (n.center = E.multiplyByPoint(
                                e,
                                t.center,
                                n.center,
                            )),
                            (n.radius = t.radius),
                            n
                        );
                    });
                var b = new t();
                l.computePlaneDistances = function (e, n, r, a) {
                    i(a) || (a = new s());
                    var o = t.subtract(e.center, n, b),
                        u = t.dot(r, o);
                    return (a.start = u - e.radius), (a.stop = u + e.radius), a;
                };
                for (
                    var G = new t(),
                        V = new t(),
                        X = new t(),
                        q = new t(),
                        W = new t(),
                        H = new e(),
                        Y = new Array(8),
                        k = 0;
                    k < 8;
                    ++k
                )
                    Y[k] = new t();
                var K = new o();
                return (
                    (l.projectTo2D = function (e, n, i) {
                        n = r(n, K);
                        var a = n.ellipsoid,
                            o = e.center,
                            u = e.radius,
                            s = a.geodeticSurfaceNormal(o, G),
                            c = t.cross(t.UNIT_Z, s, V);
                        t.normalize(c, c);
                        var E = t.cross(s, c, X);
                        t.normalize(E, E),
                            t.multiplyByScalar(s, u, s),
                            t.multiplyByScalar(E, u, E),
                            t.multiplyByScalar(c, u, c);
                        var _ = t.negate(E, W),
                            f = t.negate(c, q),
                            h = Y,
                            R = h[0];
                        t.add(s, E, R),
                            t.add(R, c, R),
                            (R = h[1]),
                            t.add(s, E, R),
                            t.add(R, f, R),
                            (R = h[2]),
                            t.add(s, _, R),
                            t.add(R, f, R),
                            (R = h[3]),
                            t.add(s, _, R),
                            t.add(R, c, R),
                            t.negate(s, s),
                            (R = h[4]),
                            t.add(s, E, R),
                            t.add(R, c, R),
                            (R = h[5]),
                            t.add(s, E, R),
                            t.add(R, f, R),
                            (R = h[6]),
                            t.add(s, _, R),
                            t.add(R, f, R),
                            (R = h[7]),
                            t.add(s, _, R),
                            t.add(R, c, R);
                        for (var T = h.length, d = 0; d < T; ++d) {
                            var A = h[d];
                            t.add(o, A, A);
                            var p = a.cartesianToCartographic(A, H);
                            n.project(p, A);
                        }
                        (i = l.fromPoints(h, i)), (o = i.center);
                        var m = o.x,
                            N = o.y,
                            y = o.z;
                        return (o.x = y), (o.y = m), (o.z = N), i;
                    }),
                    (l.isOccluded = function (t, e) {
                        return !e.isBoundingSphereVisible(t);
                    }),
                    (l.equals = function (e, n) {
                        return (
                            e === n ||
                            (i(e) &&
                                i(n) &&
                                t.equals(e.center, n.center) &&
                                e.radius === n.radius)
                        );
                    }),
                    (l.prototype.intersectPlane = function (t) {
                        return l.intersectPlane(this, t);
                    }),
                    (l.prototype.distanceSquaredTo = function (t) {
                        return l.distanceSquaredTo(this, t);
                    }),
                    (l.prototype.computePlaneDistances = function (t, e, n) {
                        return l.computePlaneDistances(this, t, e, n);
                    }),
                    (l.prototype.isOccluded = function (t) {
                        return l.isOccluded(this, t);
                    }),
                    (l.prototype.equals = function (t) {
                        return l.equals(this, t);
                    }),
                    (l.prototype.clone = function (t) {
                        return l.clone(this, t);
                    }),
                    l
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
                    i = {};
                return (
                    e(i, {
                        element: {
                            get: function () {
                                if (i.supportsFullscreen())
                                    return document[r.fullscreenElement];
                            },
                        },
                        changeEventName: {
                            get: function () {
                                if (i.supportsFullscreen())
                                    return r.fullscreenchange;
                            },
                        },
                        errorEventName: {
                            get: function () {
                                if (i.supportsFullscreen())
                                    return r.fullscreenerror;
                            },
                        },
                        enabled: {
                            get: function () {
                                if (i.supportsFullscreen())
                                    return document[r.fullscreenEnabled];
                            },
                        },
                        fullscreen: {
                            get: function () {
                                if (i.supportsFullscreen())
                                    return null !== i.element;
                            },
                        },
                    }),
                    (i.supportsFullscreen = function () {
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
                            var i,
                                a = ['webkit', 'moz', 'o', 'ms', 'khtml'],
                                o = 0,
                                u = a.length;
                            o < u;
                            ++o
                        ) {
                            var s = a[o];
                            (i = s + 'RequestFullscreen'),
                                'function' == typeof e[i]
                                    ? ((r.requestFullscreen = i), (n = !0))
                                    : ((i = s + 'RequestFullScreen'),
                                      'function' == typeof e[i] &&
                                          ((r.requestFullscreen = i),
                                          (n = !0))),
                                (i = s + 'ExitFullscreen'),
                                'function' == typeof document[i]
                                    ? (r.exitFullscreen = i)
                                    : ((i = s + 'CancelFullScreen'),
                                      'function' == typeof document[i] &&
                                          (r.exitFullscreen = i)),
                                (i = s + 'FullscreenEnabled'),
                                void 0 !== document[i]
                                    ? (r.fullscreenEnabled = i)
                                    : ((i = s + 'FullScreenEnabled'),
                                      void 0 !== document[i] &&
                                          (r.fullscreenEnabled = i)),
                                (i = s + 'FullscreenElement'),
                                void 0 !== document[i]
                                    ? (r.fullscreenElement = i)
                                    : ((i = s + 'FullScreenElement'),
                                      void 0 !== document[i] &&
                                          (r.fullscreenElement = i)),
                                (i = s + 'fullscreenchange'),
                                void 0 !== document['on' + i] &&
                                    ('ms' === s && (i = 'MSFullscreenChange'),
                                    (r.fullscreenchange = i)),
                                (i = s + 'fullscreenerror'),
                                void 0 !== document['on' + i] &&
                                    ('ms' === s && (i = 'MSFullscreenError'),
                                    (r.fullscreenerror = i));
                        }
                        return n;
                    }),
                    (i.requestFullscreen = function (t, e) {
                        i.supportsFullscreen() &&
                            t[r.requestFullscreen]({ vrDisplay: e });
                    }),
                    (i.exitFullscreen = function () {
                        i.supportsFullscreen() && document[r.exitFullscreen]();
                    }),
                    i
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
                function i() {
                    if (!e(N) && ((N = !1), !l())) {
                        var t = / Chrome\/([\.0-9]+)/.exec(m.userAgent);
                        null !== t && ((N = !0), (y = r(t[1])));
                    }
                    return N;
                }
                function a() {
                    return i() && y;
                }
                function o() {
                    if (
                        !e(I) &&
                        ((I = !1),
                        !i() && !l() && / Safari\/[\.0-9]+/.test(m.userAgent))
                    ) {
                        var t = / Version\/([\.0-9]+)/.exec(m.userAgent);
                        null !== t && ((I = !0), (S = r(t[1])));
                    }
                    return I;
                }
                function u() {
                    return o() && S;
                }
                function s() {
                    if (!e(O)) {
                        O = !1;
                        var t = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            m.userAgent,
                        );
                        null !== t &&
                            ((O = !0), (M = r(t[1])), (M.isNightly = !!t[2]));
                    }
                    return O;
                }
                function c() {
                    return s() && M;
                }
                function E() {
                    if (!e(C)) {
                        C = !1;
                        var t;
                        'Microsoft Internet Explorer' === m.appName
                            ? null !==
                                  (t = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      m.userAgent,
                                  )) && ((C = !0), (w = r(t[1])))
                            : 'Netscape' === m.appName &&
                              null !==
                                  (t =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          m.userAgent,
                                      )) &&
                              ((C = !0), (w = r(t[1])));
                    }
                    return C;
                }
                function _() {
                    return E() && w;
                }
                function l() {
                    if (!e(g)) {
                        g = !1;
                        var t = / Edge\/([\.0-9]+)/.exec(m.userAgent);
                        null !== t && ((g = !0), (v = r(t[1])));
                    }
                    return g;
                }
                function f() {
                    return l() && v;
                }
                function h() {
                    if (!e(P)) {
                        P = !1;
                        var t = /Firefox\/([\.0-9]+)/.exec(m.userAgent);
                        null !== t && ((P = !0), (x = r(t[1])));
                    }
                    return P;
                }
                function R() {
                    return e(F) || (F = /Windows/i.test(m.appVersion)), F;
                }
                function T() {
                    return h() && x;
                }
                function d() {
                    return (
                        e(L) ||
                            (L =
                                'undefined' != typeof PointerEvent &&
                                (!e(m.pointerEnabled) || m.pointerEnabled)),
                        L
                    );
                }
                function A() {
                    if (!e(D)) {
                        var t = document.createElement('canvas');
                        t.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var n = t.style.imageRendering;
                        (D = e(n) && '' !== n), D && (U = n);
                    }
                    return D;
                }
                function p() {
                    return A() ? U : void 0;
                }
                var m;
                m = 'undefined' != typeof navigator ? navigator : {};
                var N,
                    y,
                    I,
                    S,
                    O,
                    M,
                    C,
                    w,
                    g,
                    v,
                    P,
                    x,
                    F,
                    L,
                    U,
                    D,
                    B = {
                        isChrome: i,
                        chromeVersion: a,
                        isSafari: o,
                        safariVersion: u,
                        isWebkit: s,
                        webkitVersion: c,
                        isInternetExplorer: E,
                        internetExplorerVersion: _,
                        isEdge: l,
                        edgeVersion: f,
                        isFirefox: h,
                        firefoxVersion: T,
                        isWindows: R,
                        hardwareConcurrency: t(m.hardwareConcurrency, 3),
                        supportsPointerEvents: d,
                        supportsImageRenderingPixelated: A,
                        imageRenderingValue: p,
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
            function (t, e, n, r, i, a) {
                'use strict';
                if (!r.supportsTypedArrays()) return {};
                var o = {
                    BYTE: a.BYTE,
                    UNSIGNED_BYTE: a.UNSIGNED_BYTE,
                    SHORT: a.SHORT,
                    UNSIGNED_SHORT: a.UNSIGNED_SHORT,
                    INT: a.INT,
                    UNSIGNED_INT: a.UNSIGNED_INT,
                    FLOAT: a.FLOAT,
                    DOUBLE: a.DOUBLE,
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
                    (o.createArrayBufferView = function (e, n, r, i) {
                        switch (
                            ((r = t(r, 0)),
                            (i = t(
                                i,
                                (n.byteLength - r) / o.getSizeInBytes(e),
                            )),
                            e)
                        ) {
                            case o.BYTE:
                                return new Int8Array(n, r, i);
                            case o.UNSIGNED_BYTE:
                                return new Uint8Array(n, r, i);
                            case o.SHORT:
                                return new Int16Array(n, r, i);
                            case o.UNSIGNED_SHORT:
                                return new Uint16Array(n, r, i);
                            case o.INT:
                                return new Int32Array(n, r, i);
                            case o.UNSIGNED_INT:
                                return new Uint32Array(n, r, i);
                            case o.FLOAT:
                                return new Float32Array(n, r, i);
                            case o.DOUBLE:
                                return new Float64Array(n, r, i);
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
                    i(o)
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
            function (t, e, n, r, i, a) {
                'use strict';
                function o(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this.attributes = t.attributes),
                        (this.indices = t.indices),
                        (this.primitiveType = e(t.primitiveType, a.TRIANGLES)),
                        (this.boundingSphere = t.boundingSphere),
                        (this.geometryType = e(t.geometryType, i.NONE)),
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
                                var i = t.attributes[r],
                                    a =
                                        i.values.length /
                                        i.componentsPerAttribute;
                                e = a;
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
            'Core/Plane',
            [
                './Cartesian3',
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
            ],
            function (t, e, n, r, i) {
                'use strict';
                function a(e, n) {
                    (this.normal = t.clone(e)), (this.distance = n);
                }
                a.fromPointNormal = function (n, r, i) {
                    var o = -t.dot(r, n);
                    return e(i)
                        ? (t.clone(r, i.normal), (i.distance = o), i)
                        : new a(r, o);
                };
                var o = new t();
                return (
                    (a.fromCartesian4 = function (n, r) {
                        var i = t.fromCartesian4(n, o),
                            u = n.w;
                        return e(r)
                            ? (t.clone(i, r.normal), (r.distance = u), r)
                            : new a(i, u);
                    }),
                    (a.getPointDistance = function (e, n) {
                        return t.dot(e.normal, n) + e.distance;
                    }),
                    (a.ORIGIN_XY_PLANE = r(new a(t.UNIT_Z, 0))),
                    (a.ORIGIN_YZ_PLANE = r(new a(t.UNIT_X, 0))),
                    (a.ORIGIN_ZX_PLANE = r(new a(t.UNIT_Y, 0))),
                    a
                );
            },
        ),
        define(
            'Core/CullingVolume',
            [
                './Cartesian3',
                './Cartesian4',
                './defaultValue',
                './defined',
                './DeveloperError',
                './Intersect',
                './Plane',
            ],
            function (t, e, n, r, i, a, o) {
                'use strict';
                function u(t) {
                    this.planes = n(t, []);
                }
                var s = [new t(), new t(), new t()];
                t.clone(t.UNIT_X, s[0]),
                    t.clone(t.UNIT_Y, s[1]),
                    t.clone(t.UNIT_Z, s[2]);
                var c = new t(),
                    E = new t(),
                    _ = new o(new t(1, 0, 0), 0);
                return (
                    (u.fromBoundingSphere = function (n, i) {
                        r(i) || (i = new u());
                        var a = s.length,
                            o = i.planes;
                        o.length = 2 * a;
                        for (
                            var _ = n.center, l = n.radius, f = 0, h = 0;
                            h < a;
                            ++h
                        ) {
                            var R = s[h],
                                T = o[f],
                                d = o[f + 1];
                            r(T) || (T = o[f] = new e()),
                                r(d) || (d = o[f + 1] = new e()),
                                t.multiplyByScalar(R, -l, c),
                                t.add(_, c, c),
                                (T.x = R.x),
                                (T.y = R.y),
                                (T.z = R.z),
                                (T.w = -t.dot(R, c)),
                                t.multiplyByScalar(R, l, c),
                                t.add(_, c, c),
                                (d.x = -R.x),
                                (d.y = -R.y),
                                (d.z = -R.z),
                                (d.w = -t.dot(t.negate(R, E), c)),
                                (f += 2);
                        }
                        return i;
                    }),
                    (u.prototype.computeVisibility = function (t) {
                        for (
                            var e = this.planes, n = !1, r = 0, i = e.length;
                            r < i;
                            ++r
                        ) {
                            var u = t.intersectPlane(o.fromCartesian4(e[r], _));
                            if (u === a.OUTSIDE) return a.OUTSIDE;
                            u === a.INTERSECTING && (n = !0);
                        }
                        return n ? a.INTERSECTING : a.INSIDE;
                    }),
                    (u.prototype.computeVisibilityWithPlaneMask = function (
                        t,
                        e,
                    ) {
                        if (e === u.MASK_OUTSIDE || e === u.MASK_INSIDE)
                            return e;
                        for (
                            var n = u.MASK_INSIDE,
                                r = this.planes,
                                i = 0,
                                s = r.length;
                            i < s;
                            ++i
                        ) {
                            var c = i < 31 ? 1 << i : 0;
                            if (!(i < 31 && 0 == (e & c))) {
                                var E = t.intersectPlane(
                                    o.fromCartesian4(r[i], _),
                                );
                                if (E === a.OUTSIDE) return u.MASK_OUTSIDE;
                                E === a.INTERSECTING && (n |= c);
                            }
                        }
                        return n;
                    }),
                    (u.MASK_OUTSIDE = 4294967295),
                    (u.MASK_INSIDE = 0),
                    (u.MASK_INDETERMINATE = 2147483647),
                    u
                );
            },
        ),
        define(
            'Core/OrthographicOffCenterFrustum',
            [
                './Cartesian3',
                './Cartesian4',
                './CullingVolume',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './Matrix4',
            ],
            function (t, e, n, r, i, a, o, u) {
                'use strict';
                function s(t) {
                    (t = r(t, r.EMPTY_OBJECT)),
                        (this.left = t.left),
                        (this._left = void 0),
                        (this.right = t.right),
                        (this._right = void 0),
                        (this.top = t.top),
                        (this._top = void 0),
                        (this.bottom = t.bottom),
                        (this._bottom = void 0),
                        (this.near = r(t.near, 1)),
                        (this._near = this.near),
                        (this.far = r(t.far, 5e8)),
                        (this._far = this.far),
                        (this._cullingVolume = new n()),
                        (this._orthographicMatrix = new u());
                }
                function c(t) {
                    (t.top === t._top &&
                        t.bottom === t._bottom &&
                        t.left === t._left &&
                        t.right === t._right &&
                        t.near === t._near &&
                        t.far === t._far) ||
                        ((t._left = t.left),
                        (t._right = t.right),
                        (t._top = t.top),
                        (t._bottom = t.bottom),
                        (t._near = t.near),
                        (t._far = t.far),
                        (t._orthographicMatrix = u.computeOrthographicOffCenter(
                            t.left,
                            t.right,
                            t.bottom,
                            t.top,
                            t.near,
                            t.far,
                            t._orthographicMatrix,
                        )));
                }
                a(s.prototype, {
                    projectionMatrix: {
                        get: function () {
                            return c(this), this._orthographicMatrix;
                        },
                    },
                });
                var E = new t(),
                    _ = new t(),
                    l = new t(),
                    f = new t();
                return (
                    (s.prototype.computeCullingVolume = function (n, r, a) {
                        var o = this._cullingVolume.planes,
                            u = this.top,
                            s = this.bottom,
                            c = this.right,
                            h = this.left,
                            R = this.near,
                            T = this.far,
                            d = t.cross(r, a, E);
                        t.normalize(d, d);
                        var A = _;
                        t.multiplyByScalar(r, R, A), t.add(n, A, A);
                        var p = l;
                        t.multiplyByScalar(d, h, p), t.add(A, p, p);
                        var m = o[0];
                        return (
                            i(m) || (m = o[0] = new e()),
                            (m.x = d.x),
                            (m.y = d.y),
                            (m.z = d.z),
                            (m.w = -t.dot(d, p)),
                            t.multiplyByScalar(d, c, p),
                            t.add(A, p, p),
                            (m = o[1]),
                            i(m) || (m = o[1] = new e()),
                            (m.x = -d.x),
                            (m.y = -d.y),
                            (m.z = -d.z),
                            (m.w = -t.dot(t.negate(d, f), p)),
                            t.multiplyByScalar(a, s, p),
                            t.add(A, p, p),
                            (m = o[2]),
                            i(m) || (m = o[2] = new e()),
                            (m.x = a.x),
                            (m.y = a.y),
                            (m.z = a.z),
                            (m.w = -t.dot(a, p)),
                            t.multiplyByScalar(a, u, p),
                            t.add(A, p, p),
                            (m = o[3]),
                            i(m) || (m = o[3] = new e()),
                            (m.x = -a.x),
                            (m.y = -a.y),
                            (m.z = -a.z),
                            (m.w = -t.dot(t.negate(a, f), p)),
                            (m = o[4]),
                            i(m) || (m = o[4] = new e()),
                            (m.x = r.x),
                            (m.y = r.y),
                            (m.z = r.z),
                            (m.w = -t.dot(r, A)),
                            t.multiplyByScalar(r, T, p),
                            t.add(n, p, p),
                            (m = o[5]),
                            i(m) || (m = o[5] = new e()),
                            (m.x = -r.x),
                            (m.y = -r.y),
                            (m.z = -r.z),
                            (m.w = -t.dot(t.negate(r, f), p)),
                            this._cullingVolume
                        );
                    }),
                    (s.prototype.getPixelDimensions = function (t, e, n, r) {
                        c(this);
                        var i = this.right - this.left,
                            a = this.top - this.bottom,
                            o = i / t,
                            u = a / e;
                        return (r.x = o), (r.y = u), r;
                    }),
                    (s.prototype.clone = function (t) {
                        return (
                            i(t) || (t = new s()),
                            (t.left = this.left),
                            (t.right = this.right),
                            (t.top = this.top),
                            (t.bottom = this.bottom),
                            (t.near = this.near),
                            (t.far = this.far),
                            (t._left = void 0),
                            (t._right = void 0),
                            (t._top = void 0),
                            (t._bottom = void 0),
                            (t._near = void 0),
                            (t._far = void 0),
                            t
                        );
                    }),
                    (s.prototype.equals = function (t) {
                        return (
                            i(t) &&
                            this.right === t.right &&
                            this.left === t.left &&
                            this.top === t.top &&
                            this.bottom === t.bottom &&
                            this.near === t.near &&
                            this.far === t.far
                        );
                    }),
                    s
                );
            },
        ),
        define(
            'Core/OrthographicFrustum',
            [
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './OrthographicOffCenterFrustum',
            ],
            function (t, e, n, r, i, a) {
                'use strict';
                function o(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this._offCenterFrustum = new a()),
                        (this.width = t.width),
                        (this._width = void 0),
                        (this.aspectRatio = t.aspectRatio),
                        (this._aspectRatio = void 0),
                        (this.near = e(t.near, 1)),
                        (this._near = this.near),
                        (this.far = e(t.far, 5e8)),
                        (this._far = this.far);
                }
                function u(t) {
                    var e = t._offCenterFrustum;
                    if (
                        t.width !== t._width ||
                        t.aspectRatio !== t._aspectRatio ||
                        t.near !== t._near ||
                        t.far !== t._far
                    ) {
                        (t._aspectRatio = t.aspectRatio),
                            (t._width = t.width),
                            (t._near = t.near),
                            (t._far = t.far);
                        var n = 1 / t.aspectRatio;
                        (e.right = 0.5 * t.width),
                            (e.left = -e.right),
                            (e.top = n * e.right),
                            (e.bottom = -e.top),
                            (e.near = t.near),
                            (e.far = t.far);
                    }
                }
                return (
                    (o.packedLength = 4),
                    (o.pack = function (t, n, r) {
                        return (
                            (r = e(r, 0)),
                            (n[r++] = t.width),
                            (n[r++] = t.aspectRatio),
                            (n[r++] = t.near),
                            (n[r] = t.far),
                            n
                        );
                    }),
                    (o.unpack = function (t, r, i) {
                        return (
                            (r = e(r, 0)),
                            n(i) || (i = new o()),
                            (i.width = t[r++]),
                            (i.aspectRatio = t[r++]),
                            (i.near = t[r++]),
                            (i.far = t[r]),
                            i
                        );
                    }),
                    r(o.prototype, {
                        projectionMatrix: {
                            get: function () {
                                return (
                                    u(this),
                                    this._offCenterFrustum.projectionMatrix
                                );
                            },
                        },
                    }),
                    (o.prototype.computeCullingVolume = function (t, e, n) {
                        return (
                            u(this),
                            this._offCenterFrustum.computeCullingVolume(t, e, n)
                        );
                    }),
                    (o.prototype.getPixelDimensions = function (t, e, n, r) {
                        return (
                            u(this),
                            this._offCenterFrustum.getPixelDimensions(
                                t,
                                e,
                                n,
                                r,
                            )
                        );
                    }),
                    (o.prototype.clone = function (t) {
                        return (
                            n(t) || (t = new o()),
                            (t.aspectRatio = this.aspectRatio),
                            (t.width = this.width),
                            (t.near = this.near),
                            (t.far = this.far),
                            (t._aspectRatio = void 0),
                            (t._width = void 0),
                            (t._near = void 0),
                            (t._far = void 0),
                            this._offCenterFrustum.clone(t._offCenterFrustum),
                            t
                        );
                    }),
                    (o.prototype.equals = function (t) {
                        return (
                            !!n(t) &&
                            (u(this),
                            u(t),
                            this.width === t.width &&
                                this.aspectRatio === t.aspectRatio &&
                                this.near === t.near &&
                                this.far === t.far &&
                                this._offCenterFrustum.equals(
                                    t._offCenterFrustum,
                                ))
                        );
                    }),
                    o
                );
            },
        ),
        define(
            'Core/PerspectiveOffCenterFrustum',
            [
                './Cartesian3',
                './Cartesian4',
                './CullingVolume',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './Matrix4',
            ],
            function (t, e, n, r, i, a, o, u) {
                'use strict';
                function s(t) {
                    (t = r(t, r.EMPTY_OBJECT)),
                        (this.left = t.left),
                        (this._left = void 0),
                        (this.right = t.right),
                        (this._right = void 0),
                        (this.top = t.top),
                        (this._top = void 0),
                        (this.bottom = t.bottom),
                        (this._bottom = void 0),
                        (this.near = r(t.near, 1)),
                        (this._near = this.near),
                        (this.far = r(t.far, 5e8)),
                        (this._far = this.far),
                        (this._cullingVolume = new n()),
                        (this._perspectiveMatrix = new u()),
                        (this._infinitePerspective = new u());
                }
                function c(t) {
                    var e = t.top,
                        n = t.bottom,
                        r = t.right,
                        i = t.left,
                        a = t.near,
                        o = t.far;
                    (e === t._top &&
                        n === t._bottom &&
                        i === t._left &&
                        r === t._right &&
                        a === t._near &&
                        o === t._far) ||
                        ((t._left = i),
                        (t._right = r),
                        (t._top = e),
                        (t._bottom = n),
                        (t._near = a),
                        (t._far = o),
                        (t._perspectiveMatrix = u.computePerspectiveOffCenter(
                            i,
                            r,
                            n,
                            e,
                            a,
                            o,
                            t._perspectiveMatrix,
                        )),
                        (t._infinitePerspective =
                            u.computeInfinitePerspectiveOffCenter(
                                i,
                                r,
                                n,
                                e,
                                a,
                                t._infinitePerspective,
                            )));
                }
                a(s.prototype, {
                    projectionMatrix: {
                        get: function () {
                            return c(this), this._perspectiveMatrix;
                        },
                    },
                    infiniteProjectionMatrix: {
                        get: function () {
                            return c(this), this._infinitePerspective;
                        },
                    },
                });
                var E = new t(),
                    _ = new t(),
                    l = new t(),
                    f = new t();
                return (
                    (s.prototype.computeCullingVolume = function (n, r, a) {
                        var o = this._cullingVolume.planes,
                            u = this.top,
                            s = this.bottom,
                            c = this.right,
                            h = this.left,
                            R = this.near,
                            T = this.far,
                            d = t.cross(r, a, E),
                            A = _;
                        t.multiplyByScalar(r, R, A), t.add(n, A, A);
                        var p = l;
                        t.multiplyByScalar(r, T, p), t.add(n, p, p);
                        var m = f;
                        t.multiplyByScalar(d, h, m),
                            t.add(A, m, m),
                            t.subtract(m, n, m),
                            t.normalize(m, m),
                            t.cross(m, a, m),
                            t.normalize(m, m);
                        var N = o[0];
                        return (
                            i(N) || (N = o[0] = new e()),
                            (N.x = m.x),
                            (N.y = m.y),
                            (N.z = m.z),
                            (N.w = -t.dot(m, n)),
                            t.multiplyByScalar(d, c, m),
                            t.add(A, m, m),
                            t.subtract(m, n, m),
                            t.cross(a, m, m),
                            t.normalize(m, m),
                            (N = o[1]),
                            i(N) || (N = o[1] = new e()),
                            (N.x = m.x),
                            (N.y = m.y),
                            (N.z = m.z),
                            (N.w = -t.dot(m, n)),
                            t.multiplyByScalar(a, s, m),
                            t.add(A, m, m),
                            t.subtract(m, n, m),
                            t.cross(d, m, m),
                            t.normalize(m, m),
                            (N = o[2]),
                            i(N) || (N = o[2] = new e()),
                            (N.x = m.x),
                            (N.y = m.y),
                            (N.z = m.z),
                            (N.w = -t.dot(m, n)),
                            t.multiplyByScalar(a, u, m),
                            t.add(A, m, m),
                            t.subtract(m, n, m),
                            t.cross(m, d, m),
                            t.normalize(m, m),
                            (N = o[3]),
                            i(N) || (N = o[3] = new e()),
                            (N.x = m.x),
                            (N.y = m.y),
                            (N.z = m.z),
                            (N.w = -t.dot(m, n)),
                            (N = o[4]),
                            i(N) || (N = o[4] = new e()),
                            (N.x = r.x),
                            (N.y = r.y),
                            (N.z = r.z),
                            (N.w = -t.dot(r, A)),
                            t.negate(r, m),
                            (N = o[5]),
                            i(N) || (N = o[5] = new e()),
                            (N.x = m.x),
                            (N.y = m.y),
                            (N.z = m.z),
                            (N.w = -t.dot(m, p)),
                            this._cullingVolume
                        );
                    }),
                    (s.prototype.getPixelDimensions = function (t, e, n, r) {
                        c(this);
                        var i = 1 / this.near,
                            a = this.top * i,
                            o = (2 * n * a) / e;
                        a = this.right * i;
                        var u = (2 * n * a) / t;
                        return (r.x = u), (r.y = o), r;
                    }),
                    (s.prototype.clone = function (t) {
                        return (
                            i(t) || (t = new s()),
                            (t.right = this.right),
                            (t.left = this.left),
                            (t.top = this.top),
                            (t.bottom = this.bottom),
                            (t.near = this.near),
                            (t.far = this.far),
                            (t._left = void 0),
                            (t._right = void 0),
                            (t._top = void 0),
                            (t._bottom = void 0),
                            (t._near = void 0),
                            (t._far = void 0),
                            t
                        );
                    }),
                    (s.prototype.equals = function (t) {
                        return (
                            i(t) &&
                            this.right === t.right &&
                            this.left === t.left &&
                            this.top === t.top &&
                            this.bottom === t.bottom &&
                            this.near === t.near &&
                            this.far === t.far
                        );
                    }),
                    s
                );
            },
        ),
        define(
            'Core/PerspectiveFrustum',
            [
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './PerspectiveOffCenterFrustum',
            ],
            function (t, e, n, r, i, a) {
                'use strict';
                function o(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this._offCenterFrustum = new a()),
                        (this.fov = t.fov),
                        (this._fov = void 0),
                        (this._fovy = void 0),
                        (this._sseDenominator = void 0),
                        (this.aspectRatio = t.aspectRatio),
                        (this._aspectRatio = void 0),
                        (this.near = e(t.near, 1)),
                        (this._near = this.near),
                        (this.far = e(t.far, 5e8)),
                        (this._far = this.far),
                        (this.xOffset = e(t.xOffset, 0)),
                        (this._xOffset = this.xOffset),
                        (this.yOffset = e(t.yOffset, 0)),
                        (this._yOffset = this.yOffset);
                }
                function u(t) {
                    var e = t._offCenterFrustum;
                    (t.fov === t._fov &&
                        t.aspectRatio === t._aspectRatio &&
                        t.near === t._near &&
                        t.far === t._far &&
                        t.xOffset === t._xOffset &&
                        t.yOffset === t._yOffset) ||
                        ((t._aspectRatio = t.aspectRatio),
                        (t._fov = t.fov),
                        (t._fovy =
                            t.aspectRatio <= 1
                                ? t.fov
                                : 2 *
                                  Math.atan(
                                      Math.tan(0.5 * t.fov) / t.aspectRatio,
                                  )),
                        (t._near = t.near),
                        (t._far = t.far),
                        (t._sseDenominator = 2 * Math.tan(0.5 * t._fovy)),
                        (t._xOffset = t.xOffset),
                        (t._yOffset = t.yOffset),
                        (e.top = t.near * Math.tan(0.5 * t._fovy)),
                        (e.bottom = -e.top),
                        (e.right = t.aspectRatio * e.top),
                        (e.left = -e.right),
                        (e.near = t.near),
                        (e.far = t.far),
                        (e.right += t.xOffset),
                        (e.left += t.xOffset),
                        (e.top += t.yOffset),
                        (e.bottom += t.yOffset));
                }
                return (
                    (o.packedLength = 6),
                    (o.pack = function (t, n, r) {
                        return (
                            (r = e(r, 0)),
                            (n[r++] = t.fov),
                            (n[r++] = t.aspectRatio),
                            (n[r++] = t.near),
                            (n[r++] = t.far),
                            (n[r++] = t.xOffset),
                            (n[r] = t.yOffset),
                            n
                        );
                    }),
                    (o.unpack = function (t, r, i) {
                        return (
                            (r = e(r, 0)),
                            n(i) || (i = new o()),
                            (i.fov = t[r++]),
                            (i.aspectRatio = t[r++]),
                            (i.near = t[r++]),
                            (i.far = t[r++]),
                            (i.xOffset = t[r++]),
                            (i.yOffset = t[r]),
                            i
                        );
                    }),
                    r(o.prototype, {
                        projectionMatrix: {
                            get: function () {
                                return (
                                    u(this),
                                    this._offCenterFrustum.projectionMatrix
                                );
                            },
                        },
                        infiniteProjectionMatrix: {
                            get: function () {
                                return (
                                    u(this),
                                    this._offCenterFrustum
                                        .infiniteProjectionMatrix
                                );
                            },
                        },
                        fovy: {
                            get: function () {
                                return u(this), this._fovy;
                            },
                        },
                        sseDenominator: {
                            get: function () {
                                return u(this), this._sseDenominator;
                            },
                        },
                    }),
                    (o.prototype.computeCullingVolume = function (t, e, n) {
                        return (
                            u(this),
                            this._offCenterFrustum.computeCullingVolume(t, e, n)
                        );
                    }),
                    (o.prototype.getPixelDimensions = function (t, e, n, r) {
                        return (
                            u(this),
                            this._offCenterFrustum.getPixelDimensions(
                                t,
                                e,
                                n,
                                r,
                            )
                        );
                    }),
                    (o.prototype.clone = function (t) {
                        return (
                            n(t) || (t = new o()),
                            (t.aspectRatio = this.aspectRatio),
                            (t.fov = this.fov),
                            (t.near = this.near),
                            (t.far = this.far),
                            (t._aspectRatio = void 0),
                            (t._fov = void 0),
                            (t._near = void 0),
                            (t._far = void 0),
                            this._offCenterFrustum.clone(t._offCenterFrustum),
                            t
                        );
                    }),
                    (o.prototype.equals = function (t) {
                        return (
                            !!n(t) &&
                            (u(this),
                            u(t),
                            this.fov === t.fov &&
                                this.aspectRatio === t.aspectRatio &&
                                this.near === t.near &&
                                this.far === t.far &&
                                this._offCenterFrustum.equals(
                                    t._offCenterFrustum,
                                ))
                        );
                    }),
                    o
                );
            },
        ),
        define(
            'Core/HeadingPitchRoll',
            ['./defaultValue', './defined', './DeveloperError', './Math'],
            function (t, e, n, r) {
                'use strict';
                function i(e, n, r) {
                    (this.heading = t(e, 0)),
                        (this.pitch = t(n, 0)),
                        (this.roll = t(r, 0));
                }
                return (
                    (i.fromQuaternion = function (t, n) {
                        e(n) || (n = new i());
                        var r = 2 * (t.w * t.y - t.z * t.x),
                            a = 1 - 2 * (t.x * t.x + t.y * t.y),
                            o = 2 * (t.w * t.x + t.y * t.z),
                            u = 1 - 2 * (t.y * t.y + t.z * t.z),
                            s = 2 * (t.w * t.z + t.x * t.y);
                        return (
                            (n.heading = -Math.atan2(s, u)),
                            (n.roll = Math.atan2(o, a)),
                            (n.pitch = -Math.asin(r)),
                            n
                        );
                    }),
                    (i.fromDegrees = function (t, n, a, o) {
                        return (
                            e(o) || (o = new i()),
                            (o.heading = t * r.RADIANS_PER_DEGREE),
                            (o.pitch = n * r.RADIANS_PER_DEGREE),
                            (o.roll = a * r.RADIANS_PER_DEGREE),
                            o
                        );
                    }),
                    (i.clone = function (t, n) {
                        if (e(t))
                            return e(n)
                                ? ((n.heading = t.heading),
                                  (n.pitch = t.pitch),
                                  (n.roll = t.roll),
                                  n)
                                : new i(t.heading, t.pitch, t.roll);
                    }),
                    (i.equals = function (t, n) {
                        return (
                            t === n ||
                            (e(t) &&
                                e(n) &&
                                t.heading === n.heading &&
                                t.pitch === n.pitch &&
                                t.roll === n.roll)
                        );
                    }),
                    (i.equalsEpsilon = function (t, n, i, a) {
                        return (
                            t === n ||
                            (e(t) &&
                                e(n) &&
                                r.equalsEpsilon(t.heading, n.heading, i, a) &&
                                r.equalsEpsilon(t.pitch, n.pitch, i, a) &&
                                r.equalsEpsilon(t.roll, n.roll, i, a))
                        );
                    }),
                    (i.prototype.clone = function (t) {
                        return i.clone(this, t);
                    }),
                    (i.prototype.equals = function (t) {
                        return i.equals(this, t);
                    }),
                    (i.prototype.equalsEpsilon = function (t, e, n) {
                        return i.equalsEpsilon(this, t, e, n);
                    }),
                    (i.prototype.toString = function () {
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
                    i
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
            function (t, e, n, r, i, a, o, u, s) {
                'use strict';
                function c(t, e, r, i) {
                    (this.x = n(t, 0)),
                        (this.y = n(e, 0)),
                        (this.z = n(r, 0)),
                        (this.w = n(i, 0));
                }
                var E = new t();
                c.fromAxisAngle = function (e, n, i) {
                    var a = n / 2,
                        o = Math.sin(a);
                    E = t.normalize(e, E);
                    var u = E.x * o,
                        s = E.y * o,
                        _ = E.z * o,
                        l = Math.cos(a);
                    return r(i)
                        ? ((i.x = u), (i.y = s), (i.z = _), (i.w = l), i)
                        : new c(u, s, _, l);
                };
                var _ = [1, 2, 0],
                    l = new Array(3);
                c.fromRotationMatrix = function (t, e) {
                    var n,
                        i,
                        a,
                        o,
                        u,
                        E = t[s.COLUMN0ROW0],
                        f = t[s.COLUMN1ROW1],
                        h = t[s.COLUMN2ROW2],
                        R = E + f + h;
                    if (R > 0)
                        (n = Math.sqrt(R + 1)),
                            (u = 0.5 * n),
                            (n = 0.5 / n),
                            (i = (t[s.COLUMN1ROW2] - t[s.COLUMN2ROW1]) * n),
                            (a = (t[s.COLUMN2ROW0] - t[s.COLUMN0ROW2]) * n),
                            (o = (t[s.COLUMN0ROW1] - t[s.COLUMN1ROW0]) * n);
                    else {
                        var T = _,
                            d = 0;
                        f > E && (d = 1), h > E && h > f && (d = 2);
                        var A = T[d],
                            p = T[A];
                        n = Math.sqrt(
                            t[s.getElementIndex(d, d)] -
                                t[s.getElementIndex(A, A)] -
                                t[s.getElementIndex(p, p)] +
                                1,
                        );
                        var m = l;
                        (m[d] = 0.5 * n),
                            (n = 0.5 / n),
                            (u =
                                (t[s.getElementIndex(p, A)] -
                                    t[s.getElementIndex(A, p)]) *
                                n),
                            (m[A] =
                                (t[s.getElementIndex(A, d)] +
                                    t[s.getElementIndex(d, A)]) *
                                n),
                            (m[p] =
                                (t[s.getElementIndex(p, d)] +
                                    t[s.getElementIndex(d, p)]) *
                                n),
                            (i = -m[0]),
                            (a = -m[1]),
                            (o = -m[2]);
                    }
                    return r(e)
                        ? ((e.x = i), (e.y = a), (e.z = o), (e.w = u), e)
                        : new c(i, a, o, u);
                };
                var f = new c(),
                    h = new c(),
                    R = new c(),
                    T = new c();
                c.fromHeadingPitchRoll = function (e, n) {
                    return (
                        (T = c.fromAxisAngle(t.UNIT_X, e.roll, f)),
                        (R = c.fromAxisAngle(t.UNIT_Y, -e.pitch, n)),
                        (n = c.multiply(R, T, R)),
                        (h = c.fromAxisAngle(t.UNIT_Z, -e.heading, f)),
                        c.multiply(h, n, n)
                    );
                };
                var d = new t(),
                    A = new t(),
                    p = new c(),
                    m = new c(),
                    N = new c();
                (c.packedLength = 4),
                    (c.pack = function (t, e, r) {
                        return (
                            (r = n(r, 0)),
                            (e[r++] = t.x),
                            (e[r++] = t.y),
                            (e[r++] = t.z),
                            (e[r] = t.w),
                            e
                        );
                    }),
                    (c.unpack = function (t, e, i) {
                        return (
                            (e = n(e, 0)),
                            r(i) || (i = new c()),
                            (i.x = t[e]),
                            (i.y = t[e + 1]),
                            (i.z = t[e + 2]),
                            (i.w = t[e + 3]),
                            i
                        );
                    }),
                    (c.packedInterpolationLength = 3),
                    (c.convertPackedArrayForInterpolation = function (
                        t,
                        e,
                        n,
                        r,
                    ) {
                        c.unpack(t, 4 * n, N), c.conjugate(N, N);
                        for (var i = 0, a = n - e + 1; i < a; i++) {
                            var o = 3 * i;
                            c.unpack(t, 4 * (e + i), p),
                                c.multiply(p, N, p),
                                p.w < 0 && c.negate(p, p),
                                c.computeAxis(p, d);
                            var u = c.computeAngle(p);
                            (r[o] = d.x * u),
                                (r[o + 1] = d.y * u),
                                (r[o + 2] = d.z * u);
                        }
                    }),
                    (c.unpackInterpolationResult = function (e, n, i, a, o) {
                        r(o) || (o = new c()), t.fromArray(e, 0, A);
                        var u = t.magnitude(A);
                        return (
                            c.unpack(n, 4 * a, m),
                            0 === u
                                ? c.clone(c.IDENTITY, p)
                                : c.fromAxisAngle(A, u, p),
                            c.multiply(p, m, o)
                        );
                    }),
                    (c.clone = function (t, e) {
                        if (r(t))
                            return r(e)
                                ? ((e.x = t.x),
                                  (e.y = t.y),
                                  (e.z = t.z),
                                  (e.w = t.w),
                                  e)
                                : new c(t.x, t.y, t.z, t.w);
                    }),
                    (c.conjugate = function (t, e) {
                        return (
                            (e.x = -t.x),
                            (e.y = -t.y),
                            (e.z = -t.z),
                            (e.w = t.w),
                            e
                        );
                    }),
                    (c.magnitudeSquared = function (t) {
                        return t.x * t.x + t.y * t.y + t.z * t.z + t.w * t.w;
                    }),
                    (c.magnitude = function (t) {
                        return Math.sqrt(c.magnitudeSquared(t));
                    }),
                    (c.normalize = function (t, e) {
                        var n = 1 / c.magnitude(t),
                            r = t.x * n,
                            i = t.y * n,
                            a = t.z * n,
                            o = t.w * n;
                        return (e.x = r), (e.y = i), (e.z = a), (e.w = o), e;
                    }),
                    (c.inverse = function (t, e) {
                        var n = c.magnitudeSquared(t);
                        return (
                            (e = c.conjugate(t, e)),
                            c.multiplyByScalar(e, 1 / n, e)
                        );
                    }),
                    (c.add = function (t, e, n) {
                        return (
                            (n.x = t.x + e.x),
                            (n.y = t.y + e.y),
                            (n.z = t.z + e.z),
                            (n.w = t.w + e.w),
                            n
                        );
                    }),
                    (c.subtract = function (t, e, n) {
                        return (
                            (n.x = t.x - e.x),
                            (n.y = t.y - e.y),
                            (n.z = t.z - e.z),
                            (n.w = t.w - e.w),
                            n
                        );
                    }),
                    (c.negate = function (t, e) {
                        return (
                            (e.x = -t.x),
                            (e.y = -t.y),
                            (e.z = -t.z),
                            (e.w = -t.w),
                            e
                        );
                    }),
                    (c.dot = function (t, e) {
                        return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w;
                    }),
                    (c.multiply = function (t, e, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = t.w,
                            u = e.x,
                            s = e.y,
                            c = e.z,
                            E = e.w,
                            _ = o * u + r * E + i * c - a * s,
                            l = o * s - r * c + i * E + a * u,
                            f = o * c + r * s - i * u + a * E,
                            h = o * E - r * u - i * s - a * c;
                        return (n.x = _), (n.y = l), (n.z = f), (n.w = h), n;
                    }),
                    (c.multiplyByScalar = function (t, e, n) {
                        return (
                            (n.x = t.x * e),
                            (n.y = t.y * e),
                            (n.z = t.z * e),
                            (n.w = t.w * e),
                            n
                        );
                    }),
                    (c.divideByScalar = function (t, e, n) {
                        return (
                            (n.x = t.x / e),
                            (n.y = t.y / e),
                            (n.z = t.z / e),
                            (n.w = t.w / e),
                            n
                        );
                    }),
                    (c.computeAxis = function (t, e) {
                        var n = t.w;
                        if (Math.abs(n - 1) < u.EPSILON6)
                            return (e.x = e.y = e.z = 0), e;
                        var r = 1 / Math.sqrt(1 - n * n);
                        return (
                            (e.x = t.x * r), (e.y = t.y * r), (e.z = t.z * r), e
                        );
                    }),
                    (c.computeAngle = function (t) {
                        return Math.abs(t.w - 1) < u.EPSILON6
                            ? 0
                            : 2 * Math.acos(t.w);
                    });
                var y = new c();
                c.lerp = function (t, e, n, r) {
                    return (
                        (y = c.multiplyByScalar(e, n, y)),
                        (r = c.multiplyByScalar(t, 1 - n, r)),
                        c.add(y, r, r)
                    );
                };
                var I = new c(),
                    S = new c(),
                    O = new c();
                (c.slerp = function (t, e, n, r) {
                    var i = c.dot(t, e),
                        a = e;
                    if (
                        (i < 0 && ((i = -i), (a = I = c.negate(e, I))),
                        1 - i < u.EPSILON6)
                    )
                        return c.lerp(t, a, n, r);
                    var o = Math.acos(i);
                    return (
                        (S = c.multiplyByScalar(t, Math.sin((1 - n) * o), S)),
                        (O = c.multiplyByScalar(a, Math.sin(n * o), O)),
                        (r = c.add(S, O, r)),
                        c.multiplyByScalar(r, 1 / Math.sin(o), r)
                    );
                }),
                    (c.log = function (e, n) {
                        var r = u.acosClamped(e.w),
                            i = 0;
                        return (
                            0 !== r && (i = r / Math.sin(r)),
                            t.multiplyByScalar(e, i, n)
                        );
                    }),
                    (c.exp = function (e, n) {
                        var r = t.magnitude(e),
                            i = 0;
                        return (
                            0 !== r && (i = Math.sin(r) / r),
                            (n.x = e.x * i),
                            (n.y = e.y * i),
                            (n.z = e.z * i),
                            (n.w = Math.cos(r)),
                            n
                        );
                    });
                var M = new t(),
                    C = new t(),
                    w = new c(),
                    g = new c();
                (c.computeInnerQuadrangle = function (e, n, r, i) {
                    var a = c.conjugate(n, w);
                    c.multiply(a, r, g);
                    var o = c.log(g, M);
                    c.multiply(a, e, g);
                    var u = c.log(g, C);
                    return (
                        t.add(o, u, o),
                        t.multiplyByScalar(o, 0.25, o),
                        t.negate(o, o),
                        c.exp(o, w),
                        c.multiply(n, w, i)
                    );
                }),
                    (c.squad = function (t, e, n, r, i, a) {
                        var o = c.slerp(t, e, i, w),
                            u = c.slerp(n, r, i, g);
                        return c.slerp(o, u, 2 * i * (1 - i), a);
                    });
                for (
                    var v = new c(),
                        P = 1.9011074535173003,
                        x = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        F = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        L = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        U = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        D = 0;
                    D < 7;
                    ++D
                ) {
                    var B = D + 1,
                        z = 2 * B + 1;
                    (x[D] = 1 / (B * z)), (F[D] = B / z);
                }
                return (
                    (x[7] = P / 136),
                    (F[7] = (8 * P) / 17),
                    (c.fastSlerp = function (t, e, n, r) {
                        var i,
                            a = c.dot(t, e);
                        a >= 0 ? (i = 1) : ((i = -1), (a = -a));
                        for (
                            var o = a - 1,
                                u = 1 - n,
                                s = n * n,
                                E = u * u,
                                _ = 7;
                            _ >= 0;
                            --_
                        )
                            (L[_] = (x[_] * s - F[_]) * o),
                                (U[_] = (x[_] * E - F[_]) * o);
                        var l =
                                i *
                                n *
                                (1 +
                                    L[0] *
                                        (1 +
                                            L[1] *
                                                (1 +
                                                    L[2] *
                                                        (1 +
                                                            L[3] *
                                                                (1 +
                                                                    L[4] *
                                                                        (1 +
                                                                            L[5] *
                                                                                (1 +
                                                                                    L[6] *
                                                                                        (1 +
                                                                                            L[7])))))))),
                            f =
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
                            h = c.multiplyByScalar(t, f, v);
                        return c.multiplyByScalar(e, l, r), c.add(h, r, r);
                    }),
                    (c.fastSquad = function (t, e, n, r, i, a) {
                        var o = c.fastSlerp(t, e, i, w),
                            u = c.fastSlerp(n, r, i, g);
                        return c.fastSlerp(o, u, 2 * i * (1 - i), a);
                    }),
                    (c.equals = function (t, e) {
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
                    (c.equalsEpsilon = function (t, e, n) {
                        return (
                            t === e ||
                            (r(t) &&
                                r(e) &&
                                Math.abs(t.x - e.x) <= n &&
                                Math.abs(t.y - e.y) <= n &&
                                Math.abs(t.z - e.z) <= n &&
                                Math.abs(t.w - e.w) <= n)
                        );
                    }),
                    (c.ZERO = a(new c(0, 0, 0, 0))),
                    (c.IDENTITY = a(new c(0, 0, 0, 1))),
                    (c.prototype.clone = function (t) {
                        return c.clone(this, t);
                    }),
                    (c.prototype.equals = function (t) {
                        return c.equals(this, t);
                    }),
                    (c.prototype.equalsEpsilon = function (t, e) {
                        return c.equalsEpsilon(this, t, e);
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
            'Core/VertexFormat',
            [
                './defaultValue',
                './defined',
                './DeveloperError',
                './freezeObject',
            ],
            function (t, e, n, r) {
                'use strict';
                function i(e) {
                    (e = t(e, t.EMPTY_OBJECT)),
                        (this.position = t(e.position, !1)),
                        (this.normal = t(e.normal, !1)),
                        (this.st = t(e.st, !1)),
                        (this.bitangent = t(e.bitangent, !1)),
                        (this.tangent = t(e.tangent, !1)),
                        (this.color = t(e.color, !1));
                }
                return (
                    (i.POSITION_ONLY = r(new i({ position: !0 }))),
                    (i.POSITION_AND_NORMAL = r(
                        new i({ position: !0, normal: !0 }),
                    )),
                    (i.POSITION_NORMAL_AND_ST = r(
                        new i({ position: !0, normal: !0, st: !0 }),
                    )),
                    (i.POSITION_AND_ST = r(new i({ position: !0, st: !0 }))),
                    (i.POSITION_AND_COLOR = r(
                        new i({ position: !0, color: !0 }),
                    )),
                    (i.ALL = r(
                        new i({
                            position: !0,
                            normal: !0,
                            st: !0,
                            tangent: !0,
                            bitangent: !0,
                        }),
                    )),
                    (i.DEFAULT = i.POSITION_NORMAL_AND_ST),
                    (i.packedLength = 6),
                    (i.pack = function (e, n, r) {
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
                    (i.unpack = function (n, r, a) {
                        return (
                            (r = t(r, 0)),
                            e(a) || (a = new i()),
                            (a.position = 1 === n[r++]),
                            (a.normal = 1 === n[r++]),
                            (a.st = 1 === n[r++]),
                            (a.tangent = 1 === n[r++]),
                            (a.bitangent = 1 === n[r++]),
                            (a.color = 1 === n[r]),
                            a
                        );
                    }),
                    (i.clone = function (t, n) {
                        if (e(t))
                            return (
                                e(n) || (n = new i()),
                                (n.position = t.position),
                                (n.normal = t.normal),
                                (n.st = t.st),
                                (n.tangent = t.tangent),
                                (n.bitangent = t.bitangent),
                                (n.color = t.color),
                                n
                            );
                    }),
                    i
                );
            },
        ),
        define(
            'Core/FrustumGeometry',
            [
                './BoundingSphere',
                './Cartesian3',
                './Cartesian4',
                './Check',
                './ComponentDatatype',
                './defaultValue',
                './defined',
                './Geometry',
                './GeometryAttribute',
                './GeometryAttributes',
                './Matrix3',
                './Matrix4',
                './OrthographicFrustum',
                './PerspectiveFrustum',
                './PrimitiveType',
                './Quaternion',
                './VertexFormat',
            ],
            function (t, e, n, r, i, a, o, u, s, c, E, _, l, f, h, R, T) {
                'use strict';
                function d(t) {
                    var n,
                        r,
                        i = t.frustum,
                        o = t.orientation,
                        u = t.origin,
                        s = a(t.vertexFormat, T.DEFAULT),
                        c = a(t._drawNearPlane, !0);
                    i instanceof f
                        ? ((n = p), (r = f.packedLength))
                        : i instanceof l && ((n = m), (r = l.packedLength)),
                        (this._frustumType = n),
                        (this._frustum = i.clone()),
                        (this._origin = e.clone(u)),
                        (this._orientation = R.clone(o)),
                        (this._drawNearPlane = c),
                        (this._vertexFormat = s),
                        (this._workerName = 'createFrustumGeometry'),
                        (this.packedLength =
                            2 +
                            r +
                            e.packedLength +
                            R.packedLength +
                            T.packedLength);
                }
                function A(t, e, n, r, i, a, u, s) {
                    for (var c = (t / 3) * 2, E = 0; E < 4; ++E)
                        o(e) &&
                            ((e[t] = a.x), (e[t + 1] = a.y), (e[t + 2] = a.z)),
                            o(n) &&
                                ((n[t] = u.x),
                                (n[t + 1] = u.y),
                                (n[t + 2] = u.z)),
                            o(r) &&
                                ((r[t] = s.x),
                                (r[t + 1] = s.y),
                                (r[t + 2] = s.z)),
                            (t += 3);
                    (i[c] = 0),
                        (i[c + 1] = 0),
                        (i[c + 2] = 1),
                        (i[c + 3] = 0),
                        (i[c + 4] = 1),
                        (i[c + 5] = 1),
                        (i[c + 6] = 0),
                        (i[c + 7] = 1);
                }
                var p = 0,
                    m = 1;
                d.pack = function (t, n, r) {
                    r = a(r, 0);
                    var i = t._frustumType,
                        o = t._frustum;
                    return (
                        (n[r++] = i),
                        i === p
                            ? (f.pack(o, n, r), (r += f.packedLength))
                            : (l.pack(o, n, r), (r += l.packedLength)),
                        e.pack(t._origin, n, r),
                        (r += e.packedLength),
                        R.pack(t._orientation, n, r),
                        (r += R.packedLength),
                        T.pack(t._vertexFormat, n, r),
                        (r += T.packedLength),
                        (n[r] = t._drawNearPlane ? 1 : 0),
                        n
                    );
                };
                var N = new f(),
                    y = new l(),
                    I = new R(),
                    S = new e(),
                    O = new T();
                d.unpack = function (t, n, r) {
                    n = a(n, 0);
                    var i,
                        u = t[n++];
                    u === p
                        ? ((i = f.unpack(t, n, N)), (n += f.packedLength))
                        : ((i = l.unpack(t, n, y)), (n += l.packedLength));
                    var s = e.unpack(t, n, S);
                    n += e.packedLength;
                    var c = R.unpack(t, n, I);
                    n += R.packedLength;
                    var E = T.unpack(t, n, O);
                    n += T.packedLength;
                    var _ = 1 === t[n];
                    if (!o(r))
                        return new d({
                            frustum: i,
                            origin: s,
                            orientation: c,
                            vertexFormat: E,
                            _drawNearPlane: _,
                        });
                    var h = u === r._frustumType ? r._frustum : void 0;
                    return (
                        (r._frustum = i.clone(h)),
                        (r._frustumType = u),
                        (r._origin = e.clone(s, r._origin)),
                        (r._orientation = R.clone(c, r._orientation)),
                        (r._vertexFormat = T.clone(E, r._vertexFormat)),
                        (r._drawNearPlane = _),
                        r
                    );
                };
                var M = new E(),
                    C = new _(),
                    w = new _(),
                    g = new e(),
                    v = new e(),
                    P = new e(),
                    x = new e(),
                    F = new e(),
                    L = new e(),
                    U = new Array(3),
                    D = new Array(4);
                (D[0] = new n(-1, -1, 1, 1)),
                    (D[1] = new n(1, -1, 1, 1)),
                    (D[2] = new n(1, 1, 1, 1)),
                    (D[3] = new n(-1, 1, 1, 1));
                for (var B = new Array(4), z = 0; z < 4; ++z) B[z] = new n();
                return (
                    (d._computeNearFarPlanes = function (
                        t,
                        r,
                        i,
                        u,
                        s,
                        c,
                        l,
                        f,
                    ) {
                        var h = E.fromQuaternion(r, M),
                            R = a(c, g),
                            T = a(l, v),
                            d = a(f, P);
                        (R = E.getColumn(h, 0, R)),
                            (T = E.getColumn(h, 1, T)),
                            (d = E.getColumn(h, 2, d)),
                            e.normalize(R, R),
                            e.normalize(T, T),
                            e.normalize(d, d),
                            e.negate(R, R);
                        var A,
                            m,
                            N = _.computeView(t, d, T, R, C);
                        if (i === p) {
                            var y = u.projectionMatrix,
                                I = _.multiply(y, N, w);
                            m = _.inverse(I, w);
                        } else A = _.inverseTransformation(N, w);
                        o(m)
                            ? ((U[0] = u.near), (U[1] = u.far))
                            : ((U[0] = 0), (U[1] = u.near), (U[2] = u.far));
                        for (var S = 0; S < 2; ++S)
                            for (var O = 0; O < 4; ++O) {
                                var x = n.clone(D[O], B[O]);
                                if (o(m)) {
                                    x = _.multiplyByVector(m, x, x);
                                    var F = 1 / x.w;
                                    e.multiplyByScalar(x, F, x),
                                        e.subtract(x, t, x),
                                        e.normalize(x, x);
                                    var L = e.dot(d, x);
                                    e.multiplyByScalar(x, U[S] / L, x),
                                        e.add(x, t, x);
                                } else {
                                    o(u._offCenterFrustum) &&
                                        (u = u._offCenterFrustum);
                                    var z = U[S],
                                        b = U[S + 1];
                                    (x.x =
                                        0.5 *
                                        (x.x * (u.right - u.left) +
                                            u.left +
                                            u.right)),
                                        (x.y =
                                            0.5 *
                                            (x.y * (u.top - u.bottom) +
                                                u.bottom +
                                                u.top)),
                                        (x.z = 0.5 * (x.z * (z - b) - z - b)),
                                        (x.w = 1),
                                        _.multiplyByVector(A, x, x);
                                }
                                (s[12 * S + 3 * O] = x.x),
                                    (s[12 * S + 3 * O + 1] = x.y),
                                    (s[12 * S + 3 * O + 2] = x.z);
                            }
                    }),
                    (d.createGeometry = function (n) {
                        var r = n._frustumType,
                            a = n._frustum,
                            E = n._origin,
                            _ = n._orientation,
                            l = n._drawNearPlane,
                            f = n._vertexFormat,
                            R = l ? 6 : 5,
                            T = new Float64Array(72);
                        d._computeNearFarPlanes(E, _, r, a, T);
                        var p = 24;
                        (T[p] = T[12]),
                            (T[p + 1] = T[13]),
                            (T[p + 2] = T[14]),
                            (T[p + 3] = T[0]),
                            (T[p + 4] = T[1]),
                            (T[p + 5] = T[2]),
                            (T[p + 6] = T[9]),
                            (T[p + 7] = T[10]),
                            (T[p + 8] = T[11]),
                            (T[p + 9] = T[21]),
                            (T[p + 10] = T[22]),
                            (T[p + 11] = T[23]),
                            (p += 12),
                            (T[p] = T[15]),
                            (T[p + 1] = T[16]),
                            (T[p + 2] = T[17]),
                            (T[p + 3] = T[3]),
                            (T[p + 4] = T[4]),
                            (T[p + 5] = T[5]),
                            (T[p + 6] = T[0]),
                            (T[p + 7] = T[1]),
                            (T[p + 8] = T[2]),
                            (T[p + 9] = T[12]),
                            (T[p + 10] = T[13]),
                            (T[p + 11] = T[14]),
                            (p += 12),
                            (T[p] = T[3]),
                            (T[p + 1] = T[4]),
                            (T[p + 2] = T[5]),
                            (T[p + 3] = T[15]),
                            (T[p + 4] = T[16]),
                            (T[p + 5] = T[17]),
                            (T[p + 6] = T[18]),
                            (T[p + 7] = T[19]),
                            (T[p + 8] = T[20]),
                            (T[p + 9] = T[6]),
                            (T[p + 10] = T[7]),
                            (T[p + 11] = T[8]),
                            (p += 12),
                            (T[p] = T[6]),
                            (T[p + 1] = T[7]),
                            (T[p + 2] = T[8]),
                            (T[p + 3] = T[18]),
                            (T[p + 4] = T[19]),
                            (T[p + 5] = T[20]),
                            (T[p + 6] = T[21]),
                            (T[p + 7] = T[22]),
                            (T[p + 8] = T[23]),
                            (T[p + 9] = T[9]),
                            (T[p + 10] = T[10]),
                            (T[p + 11] = T[11]),
                            l || (T = T.subarray(12));
                        var m = new c({
                            position: new s({
                                componentDatatype: i.DOUBLE,
                                componentsPerAttribute: 3,
                                values: T,
                            }),
                        });
                        if (
                            o(f.normal) ||
                            o(f.tangent) ||
                            o(f.bitangent) ||
                            o(f.st)
                        ) {
                            var N = o(f.normal)
                                    ? new Float32Array(12 * R)
                                    : void 0,
                                y = o(f.tangent)
                                    ? new Float32Array(12 * R)
                                    : void 0,
                                I = o(f.bitangent)
                                    ? new Float32Array(12 * R)
                                    : void 0,
                                S = o(f.st) ? new Float32Array(8 * R) : void 0,
                                O = g,
                                M = v,
                                C = P,
                                w = e.negate(O, x),
                                U = e.negate(M, F),
                                D = e.negate(C, L);
                            (p = 0),
                                l && (A(p, N, y, I, S, D, O, M), (p += 12)),
                                A(p, N, y, I, S, C, w, M),
                                (p += 12),
                                A(p, N, y, I, S, w, D, M),
                                (p += 12),
                                A(p, N, y, I, S, U, D, w),
                                (p += 12),
                                A(p, N, y, I, S, O, C, M),
                                (p += 12),
                                A(p, N, y, I, S, M, C, w),
                                o(N) &&
                                    (m.normal = new s({
                                        componentDatatype: i.FLOAT,
                                        componentsPerAttribute: 3,
                                        values: N,
                                    })),
                                o(y) &&
                                    (m.tangent = new s({
                                        componentDatatype: i.FLOAT,
                                        componentsPerAttribute: 3,
                                        values: y,
                                    })),
                                o(I) &&
                                    (m.bitangent = new s({
                                        componentDatatype: i.FLOAT,
                                        componentsPerAttribute: 3,
                                        values: I,
                                    })),
                                o(S) &&
                                    (m.st = new s({
                                        componentDatatype: i.FLOAT,
                                        componentsPerAttribute: 2,
                                        values: S,
                                    }));
                        }
                        for (
                            var B = new Uint16Array(6 * R), z = 0;
                            z < R;
                            ++z
                        ) {
                            var b = 6 * z,
                                G = 4 * z;
                            (B[b] = G),
                                (B[b + 1] = G + 1),
                                (B[b + 2] = G + 2),
                                (B[b + 3] = G),
                                (B[b + 4] = G + 2),
                                (B[b + 5] = G + 3);
                        }
                        return new u({
                            attributes: m,
                            indices: B,
                            primitiveType: h.TRIANGLES,
                            boundingSphere: t.fromVertices(T),
                        });
                    }),
                    d
                );
            },
        ),
        define(
            'Workers/createFrustumGeometry',
            ['../Core/defined', '../Core/FrustumGeometry'],
            function (t, e) {
                'use strict';
                function n(n, r) {
                    return t(r) && (n = e.unpack(n, r)), e.createGeometry(n);
                }
                return n;
            },
        );
})();
