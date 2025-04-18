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
                var i = {};
                return (
                    (i.typeOf = {}),
                    (i.defined = function (r, i) {
                        if (!e(i)) throw new t(n(r));
                    }),
                    (i.typeOf.func = function (e, n) {
                        if ('function' != typeof n)
                            throw new t(r(typeof n, 'function', e));
                    }),
                    (i.typeOf.string = function (e, n) {
                        if ('string' != typeof n)
                            throw new t(r(typeof n, 'string', e));
                    }),
                    (i.typeOf.number = function (e, n) {
                        if ('number' != typeof n)
                            throw new t(r(typeof n, 'number', e));
                    }),
                    (i.typeOf.number.lessThan = function (e, n, r) {
                        if ((i.typeOf.number(e, n), n >= r))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be less than ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (i.typeOf.number.lessThanOrEquals = function (e, n, r) {
                        if ((i.typeOf.number(e, n), n > r))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be less than or equal to ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (i.typeOf.number.greaterThan = function (e, n, r) {
                        if ((i.typeOf.number(e, n), n <= r))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be greater than ' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (i.typeOf.number.greaterThanOrEquals = function (e, n, r) {
                        if ((i.typeOf.number(e, n), n < r))
                            throw new t(
                                'Expected ' +
                                    e +
                                    ' to be greater than or equal to' +
                                    r +
                                    ', actual value was ' +
                                    n,
                            );
                    }),
                    (i.typeOf.object = function (e, n) {
                        if ('object' != typeof n)
                            throw new t(r(typeof n, 'object', e));
                    }),
                    (i.typeOf.bool = function (e, n) {
                        if ('boolean' != typeof n)
                            throw new t(r(typeof n, 'boolean', e));
                    }),
                    (i.typeOf.number.equals = function (e, n, r, a) {
                        if (
                            (i.typeOf.number(e, r),
                            i.typeOf.number(n, a),
                            r !== a)
                        )
                            throw new t(
                                e +
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
                    (i.sign = function (e) {
                        return e > 0 ? 1 : e < 0 ? -1 : 0;
                    }),
                    (i.signNotZero = function (e) {
                        return e < 0 ? -1 : 1;
                    }),
                    (i.toSNorm = function (e, n) {
                        return (
                            (n = t(n, 255)),
                            Math.round((0.5 * i.clamp(e, -1, 1) + 0.5) * n)
                        );
                    }),
                    (i.fromSNorm = function (e, n) {
                        return (n = t(n, 255)), (i.clamp(e, 0, n) / n) * 2 - 1;
                    }),
                    (i.sinh = function (e) {
                        return (
                            0.5 *
                            (Math.pow(Math.E, e) - Math.pow(Math.E, -1 * e))
                        );
                    }),
                    (i.cosh = function (e) {
                        return (
                            0.5 *
                            (Math.pow(Math.E, e) + Math.pow(Math.E, -1 * e))
                        );
                    }),
                    (i.lerp = function (e, t, n) {
                        return (1 - n) * e + n * t;
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
                    (i.toRadians = function (e) {
                        return e * i.RADIANS_PER_DEGREE;
                    }),
                    (i.toDegrees = function (e) {
                        return e * i.DEGREES_PER_RADIAN;
                    }),
                    (i.convertLongitudeRange = function (e) {
                        var t = i.TWO_PI,
                            n = e - Math.floor(e / t) * t;
                        return n < -Math.PI ? n + t : n >= Math.PI ? n - t : n;
                    }),
                    (i.clampToLatitudeRange = function (e) {
                        return i.clamp(e, -1 * i.PI_OVER_TWO, i.PI_OVER_TWO);
                    }),
                    (i.negativePiToPi = function (e) {
                        return i.zeroToTwoPi(e + i.PI) - i.PI;
                    }),
                    (i.zeroToTwoPi = function (e) {
                        var t = i.mod(e, i.TWO_PI);
                        return Math.abs(t) < i.EPSILON14 &&
                            Math.abs(e) > i.EPSILON14
                            ? i.TWO_PI
                            : t;
                    }),
                    (i.mod = function (e, t) {
                        return ((e % t) + t) % t;
                    }),
                    (i.equalsEpsilon = function (e, n, r, i) {
                        i = t(i, r);
                        var a = Math.abs(e - n);
                        return (
                            a <= i ||
                            a <= r * Math.max(Math.abs(e), Math.abs(n))
                        );
                    });
                var a = [1];
                (i.factorial = function (e) {
                    var t = a.length;
                    if (e >= t)
                        for (var n = a[t - 1], r = t; r <= e; r++)
                            a.push(n * r);
                    return a[e];
                }),
                    (i.incrementWrap = function (e, n, r) {
                        return (r = t(r, 0)), ++e, e > n && (e = r), e;
                    }),
                    (i.isPowerOfTwo = function (e) {
                        return 0 !== e && 0 == (e & (e - 1));
                    }),
                    (i.nextPowerOfTwo = function (e) {
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
                    (i.clamp = function (e, t, n) {
                        return e < t ? t : e > n ? n : e;
                    });
                var o = new e();
                return (
                    (i.setRandomNumberSeed = function (t) {
                        o = new e(t);
                    }),
                    (i.nextRandomNumber = function () {
                        return o.random();
                    }),
                    (i.randomBetween = function (e, t) {
                        return i.nextRandomNumber() * (t - e) + e;
                    }),
                    (i.acosClamped = function (e) {
                        return Math.acos(i.clamp(e, -1, 1));
                    }),
                    (i.asinClamped = function (e) {
                        return Math.asin(i.clamp(e, -1, 1));
                    }),
                    (i.chordLength = function (e, t) {
                        return 2 * t * Math.sin(0.5 * e);
                    }),
                    (i.logBase = function (e, t) {
                        return Math.log(e) / Math.log(t);
                    }),
                    (i.fog = function (e, t) {
                        var n = e * t;
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
            function (e, t, n, r, i, a) {
                'use strict';
                function o(e, n, r) {
                    (this.x = t(e, 0)), (this.y = t(n, 0)), (this.z = t(r, 0));
                }
                (o.fromSpherical = function (e, r) {
                    n(r) || (r = new o());
                    var i = e.clock,
                        a = e.cone,
                        u = t(e.magnitude, 1),
                        s = u * Math.sin(a);
                    return (
                        (r.x = s * Math.cos(i)),
                        (r.y = s * Math.sin(i)),
                        (r.z = u * Math.cos(a)),
                        r
                    );
                }),
                    (o.fromElements = function (e, t, r, i) {
                        return n(i)
                            ? ((i.x = e), (i.y = t), (i.z = r), i)
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
                    (o.unpack = function (e, r, i) {
                        return (
                            (r = t(r, 0)),
                            n(i) || (i = new o()),
                            (i.x = e[r++]),
                            (i.y = e[r++]),
                            (i.z = e[r]),
                            i
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = 3 * r) : (t = new Array(3 * r));
                        for (var i = 0; i < r; ++i) o.pack(e[i], t, 3 * i);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = r / 3) : (t = new Array(r / 3));
                        for (var i = 0; i < r; i += 3) {
                            var a = i / 3;
                            t[a] = o.unpack(e, i, t[a]);
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
                var E = new o(),
                    c = new o();
                o.angleBetween = function (e, t) {
                    o.normalize(e, E), o.normalize(t, c);
                    var n = o.dot(E, c),
                        r = o.magnitude(o.cross(E, c, E));
                    return Math.atan2(r, n);
                };
                var _ = new o();
                (o.mostOrthogonalAxis = function (e, t) {
                    var n = o.normalize(e, _);
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
                    (o.equalsEpsilon = function (e, t, r, i) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                a.equalsEpsilon(e.x, t.x, r, i) &&
                                a.equalsEpsilon(e.y, t.y, r, i) &&
                                a.equalsEpsilon(e.z, t.z, r, i))
                        );
                    }),
                    (o.cross = function (e, t, n) {
                        var r = e.x,
                            i = e.y,
                            a = e.z,
                            o = t.x,
                            u = t.y,
                            s = t.z,
                            E = i * s - a * u,
                            c = a * o - r * s,
                            _ = r * u - i * o;
                        return (n.x = E), (n.y = c), (n.z = _), n;
                    }),
                    (o.fromDegrees = function (e, t, n, r, i) {
                        return (
                            (e = a.toRadians(e)),
                            (t = a.toRadians(t)),
                            o.fromRadians(e, t, n, r, i)
                        );
                    });
                var l = new o(),
                    f = new o(),
                    T = new o(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (o.fromRadians = function (e, r, i, a, u) {
                        i = t(i, 0);
                        var s = n(a) ? a.radiiSquared : T,
                            E = Math.cos(r);
                        (l.x = E * Math.cos(e)),
                            (l.y = E * Math.sin(e)),
                            (l.z = Math.sin(r)),
                            (l = o.normalize(l, l)),
                            o.multiplyComponents(s, l, f);
                        var c = Math.sqrt(o.dot(l, f));
                        return (
                            (f = o.divideByScalar(f, c, f)),
                            (l = o.multiplyByScalar(l, i, l)),
                            n(u) || (u = new o()),
                            o.add(f, l, u)
                        );
                    }),
                    (o.fromDegreesArray = function (e, t, r) {
                        var i = e.length;
                        n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                        for (var a = 0; a < i; a += 2) {
                            var u = e[a],
                                s = e[a + 1],
                                E = a / 2;
                            r[E] = o.fromDegrees(u, s, 0, t, r[E]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArray = function (e, t, r) {
                        var i = e.length;
                        n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                        for (var a = 0; a < i; a += 2) {
                            var u = e[a],
                                s = e[a + 1],
                                E = a / 2;
                            r[E] = o.fromRadians(u, s, 0, t, r[E]);
                        }
                        return r;
                    }),
                    (o.fromDegreesArrayHeights = function (e, t, r) {
                        var i = e.length;
                        n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                        for (var a = 0; a < i; a += 3) {
                            var u = e[a],
                                s = e[a + 1],
                                E = e[a + 2],
                                c = a / 3;
                            r[c] = o.fromDegrees(u, s, E, t, r[c]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArrayHeights = function (e, t, r) {
                        var i = e.length;
                        n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                        for (var a = 0; a < i; a += 3) {
                            var u = e[a],
                                s = e[a + 1],
                                E = e[a + 2],
                                c = a / 3;
                            r[c] = o.fromRadians(u, s, E, t, r[c]);
                        }
                        return r;
                    }),
                    (o.ZERO = i(new o(0, 0, 0))),
                    (o.UNIT_X = i(new o(1, 0, 0))),
                    (o.UNIT_Y = i(new o(0, 1, 0))),
                    (o.UNIT_Z = i(new o(0, 0, 1))),
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
                function i(n, i, u, s, E) {
                    var c = n.x,
                        _ = n.y,
                        l = n.z,
                        f = i.x,
                        T = i.y,
                        R = i.z,
                        h = c * c * f * f,
                        d = _ * _ * T * T,
                        A = l * l * R * R,
                        N = h + d + A,
                        y = Math.sqrt(1 / N),
                        S = e.multiplyByScalar(n, y, a);
                    if (N < s) return isFinite(y) ? e.clone(S, E) : void 0;
                    var I = u.x,
                        p = u.y,
                        m = u.z,
                        M = o;
                    (M.x = S.x * I * 2),
                        (M.y = S.y * p * 2),
                        (M.z = S.z * m * 2);
                    var O,
                        x,
                        C,
                        g,
                        v,
                        U,
                        L,
                        w,
                        P,
                        F,
                        D,
                        B = ((1 - y) * e.magnitude(n)) / (0.5 * e.magnitude(M)),
                        z = 0;
                    do {
                        (B -= z),
                            (C = 1 / (1 + B * I)),
                            (g = 1 / (1 + B * p)),
                            (v = 1 / (1 + B * m)),
                            (U = C * C),
                            (L = g * g),
                            (w = v * v),
                            (P = U * C),
                            (F = L * g),
                            (D = w * v),
                            (O = h * U + d * L + A * w - 1),
                            (x = h * P * I + d * F * p + A * D * m);
                        z = O / (-2 * x);
                    } while (Math.abs(O) > r.EPSILON12);
                    return t(E)
                        ? ((E.x = c * C), (E.y = _ * g), (E.z = l * v), E)
                        : new e(c * C, _ * g, l * v);
                }
                var a = new e(),
                    o = new e();
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
            function (e, t, n, r, i, a, o) {
                'use strict';
                function u(e, t, r) {
                    (this.longitude = n(e, 0)),
                        (this.latitude = n(t, 0)),
                        (this.height = n(r, 0));
                }
                (u.fromRadians = function (e, t, i, a) {
                    return (
                        (i = n(i, 0)),
                        r(a)
                            ? ((a.longitude = e),
                              (a.latitude = t),
                              (a.height = i),
                              a)
                            : new u(e, t, i)
                    );
                }),
                    (u.fromDegrees = function (e, t, n, r) {
                        return (
                            (e = a.toRadians(e)),
                            (t = a.toRadians(t)),
                            u.fromRadians(e, t, n, r)
                        );
                    });
                var s = new e(),
                    E = new e(),
                    c = new e(),
                    _ = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                    l = new e(
                        1 / 40680631590769,
                        1 / 40680631590769,
                        1 / 40408299984661.445,
                    ),
                    f = a.EPSILON1;
                return (
                    (u.fromCartesian = function (t, n, i) {
                        var T = r(n) ? n.oneOverRadii : _,
                            R = r(n) ? n.oneOverRadiiSquared : l,
                            h = r(n) ? n._centerToleranceSquared : f,
                            d = o(t, T, R, h, E);
                        if (r(d)) {
                            var A = e.multiplyComponents(d, R, s);
                            A = e.normalize(A, A);
                            var N = e.subtract(t, d, c),
                                y = Math.atan2(A.y, A.x),
                                S = Math.asin(A.z),
                                I = a.sign(e.dot(N, t)) * e.magnitude(N);
                            return r(i)
                                ? ((i.longitude = y),
                                  (i.latitude = S),
                                  (i.height = I),
                                  i)
                                : new u(y, S, I);
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
                    (u.ZERO = i(new u(0, 0, 0))),
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
            function (e, t, n, r, i, a, o, u, s, E) {
                'use strict';
                function c(t, n, i, a) {
                    (n = r(n, 0)),
                        (i = r(i, 0)),
                        (a = r(a, 0)),
                        (t._radii = new e(n, i, a)),
                        (t._radiiSquared = new e(n * n, i * i, a * a)),
                        (t._radiiToTheFourth = new e(
                            n * n * n * n,
                            i * i * i * i,
                            a * a * a * a,
                        )),
                        (t._oneOverRadii = new e(
                            0 === n ? 0 : 1 / n,
                            0 === i ? 0 : 1 / i,
                            0 === a ? 0 : 1 / a,
                        )),
                        (t._oneOverRadiiSquared = new e(
                            0 === n ? 0 : 1 / (n * n),
                            0 === i ? 0 : 1 / (i * i),
                            0 === a ? 0 : 1 / (a * a),
                        )),
                        (t._minimumRadius = Math.min(n, i, a)),
                        (t._maximumRadius = Math.max(n, i, a)),
                        (t._centerToleranceSquared = s.EPSILON1),
                        0 !== t._radiiSquared.z &&
                            (t._squaredXOverSquaredZ =
                                t._radiiSquared.x / t._radiiSquared.z);
                }
                function _(e, t, n) {
                    (this._radii = void 0),
                        (this._radiiSquared = void 0),
                        (this._radiiToTheFourth = void 0),
                        (this._oneOverRadii = void 0),
                        (this._oneOverRadiiSquared = void 0),
                        (this._minimumRadius = void 0),
                        (this._maximumRadius = void 0),
                        (this._centerToleranceSquared = void 0),
                        (this._squaredXOverSquaredZ = void 0),
                        c(this, e, t, n);
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
                    (_.clone = function (t, n) {
                        if (i(t)) {
                            var r = t._radii;
                            return i(n)
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
                                : new _(r.x, r.y, r.z);
                        }
                    }),
                    (_.fromCartesian3 = function (e, t) {
                        return (
                            i(t) || (t = new _()),
                            i(e) ? (c(t, e.x, e.y, e.z), t) : t
                        );
                    }),
                    (_.WGS84 = u(new _(6378137, 6378137, 6356752.314245179))),
                    (_.UNIT_SPHERE = u(new _(1, 1, 1))),
                    (_.MOON = u(
                        new _(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS),
                    )),
                    (_.prototype.clone = function (e) {
                        return _.clone(this, e);
                    }),
                    (_.packedLength = e.packedLength),
                    (_.pack = function (t, n, i) {
                        return (i = r(i, 0)), e.pack(t._radii, n, i), n;
                    }),
                    (_.unpack = function (t, n, i) {
                        n = r(n, 0);
                        var a = e.unpack(t, n);
                        return _.fromCartesian3(a, i);
                    }),
                    (_.prototype.geocentricSurfaceNormal = e.normalize),
                    (_.prototype.geodeticSurfaceNormalCartographic = function (
                        t,
                        n,
                    ) {
                        var r = t.longitude,
                            a = t.latitude,
                            o = Math.cos(a),
                            u = o * Math.cos(r),
                            s = o * Math.sin(r),
                            E = Math.sin(a);
                        return (
                            i(n) || (n = new e()),
                            (n.x = u),
                            (n.y = s),
                            (n.z = E),
                            e.normalize(n, n)
                        );
                    }),
                    (_.prototype.geodeticSurfaceNormal = function (t, n) {
                        return (
                            i(n) || (n = new e()),
                            (n = e.multiplyComponents(
                                t,
                                this._oneOverRadiiSquared,
                                n,
                            )),
                            e.normalize(n, n)
                        );
                    });
                var l = new e(),
                    f = new e();
                (_.prototype.cartographicToCartesian = function (t, n) {
                    var r = l,
                        a = f;
                    this.geodeticSurfaceNormalCartographic(t, r),
                        e.multiplyComponents(this._radiiSquared, r, a);
                    var o = Math.sqrt(e.dot(r, a));
                    return (
                        e.divideByScalar(a, o, a),
                        e.multiplyByScalar(r, t.height, r),
                        i(n) || (n = new e()),
                        e.add(a, r, n)
                    );
                }),
                    (_.prototype.cartographicArrayToCartesianArray = function (
                        e,
                        t,
                    ) {
                        var n = e.length;
                        i(t) ? (t.length = n) : (t = new Array(n));
                        for (var r = 0; r < n; r++)
                            t[r] = this.cartographicToCartesian(e[r], t[r]);
                        return t;
                    });
                var T = new e(),
                    R = new e(),
                    h = new e();
                return (
                    (_.prototype.cartesianToCartographic = function (n, r) {
                        var a = this.scaleToGeodeticSurface(n, R);
                        if (i(a)) {
                            var o = this.geodeticSurfaceNormal(a, T),
                                u = e.subtract(n, a, h),
                                E = Math.atan2(o.y, o.x),
                                c = Math.asin(o.z),
                                _ = s.sign(e.dot(u, n)) * e.magnitude(u);
                            return i(r)
                                ? ((r.longitude = E),
                                  (r.latitude = c),
                                  (r.height = _),
                                  r)
                                : new t(E, c, _);
                        }
                    }),
                    (_.prototype.cartesianArrayToCartographicArray = function (
                        e,
                        t,
                    ) {
                        var n = e.length;
                        i(t) ? (t.length = n) : (t = new Array(n));
                        for (var r = 0; r < n; ++r)
                            t[r] = this.cartesianToCartographic(e[r], t[r]);
                        return t;
                    }),
                    (_.prototype.scaleToGeodeticSurface = function (e, t) {
                        return E(
                            e,
                            this._oneOverRadii,
                            this._oneOverRadiiSquared,
                            this._centerToleranceSquared,
                            t,
                        );
                    }),
                    (_.prototype.scaleToGeocentricSurface = function (t, n) {
                        i(n) || (n = new e());
                        var r = t.x,
                            a = t.y,
                            o = t.z,
                            u = this._oneOverRadiiSquared,
                            s =
                                1 /
                                Math.sqrt(
                                    r * r * u.x + a * a * u.y + o * o * u.z,
                                );
                        return e.multiplyByScalar(t, s, n);
                    }),
                    (_.prototype.transformPositionToScaledSpace = function (
                        t,
                        n,
                    ) {
                        return (
                            i(n) || (n = new e()),
                            e.multiplyComponents(t, this._oneOverRadii, n)
                        );
                    }),
                    (_.prototype.transformPositionFromScaledSpace = function (
                        t,
                        n,
                    ) {
                        return (
                            i(n) || (n = new e()),
                            e.multiplyComponents(t, this._radii, n)
                        );
                    }),
                    (_.prototype.equals = function (t) {
                        return (
                            this === t ||
                            (i(t) && e.equals(this._radii, t._radii))
                        );
                    }),
                    (_.prototype.toString = function () {
                        return this._radii.toString();
                    }),
                    (_.prototype.getSurfaceNormalIntersectionWithZAxis =
                        function (t, n, a) {
                            n = r(n, 0);
                            var o = this._squaredXOverSquaredZ;
                            if (
                                (i(a) || (a = new e()),
                                (a.x = 0),
                                (a.y = 0),
                                (a.z = t.z * (1 - o)),
                                !(Math.abs(a.z) >= this._radii.z - n))
                            )
                                return a;
                        }),
                    _
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
            function (e, t, n, r, i, a, o, u) {
                'use strict';
                function s(e, t, r, i) {
                    (this.west = n(e, 0)),
                        (this.south = n(t, 0)),
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
                    (s.unpack = function (e, t, i) {
                        return (
                            (t = n(t, 0)),
                            r(i) || (i = new s()),
                            (i.west = e[t++]),
                            (i.south = e[t++]),
                            (i.east = e[t++]),
                            (i.north = e[t]),
                            i
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
                    (s.fromDegrees = function (e, t, i, a, o) {
                        return (
                            (e = u.toRadians(n(e, 0))),
                            (t = u.toRadians(n(t, 0))),
                            (i = u.toRadians(n(i, 0))),
                            (a = u.toRadians(n(a, 0))),
                            r(o)
                                ? ((o.west = e),
                                  (o.south = t),
                                  (o.east = i),
                                  (o.north = a),
                                  o)
                                : new s(e, t, i, a)
                        );
                    }),
                    (s.fromRadians = function (e, t, i, a, o) {
                        return r(o)
                            ? ((o.west = n(e, 0)),
                              (o.south = n(t, 0)),
                              (o.east = n(i, 0)),
                              (o.north = n(a, 0)),
                              o)
                            : new s(e, t, i, a);
                    }),
                    (s.fromCartographicArray = function (e, t) {
                        for (
                            var n = Number.MAX_VALUE,
                                i = -Number.MAX_VALUE,
                                a = Number.MAX_VALUE,
                                o = -Number.MAX_VALUE,
                                E = Number.MAX_VALUE,
                                c = -Number.MAX_VALUE,
                                _ = 0,
                                l = e.length;
                            _ < l;
                            _++
                        ) {
                            var f = e[_];
                            (n = Math.min(n, f.longitude)),
                                (i = Math.max(i, f.longitude)),
                                (E = Math.min(E, f.latitude)),
                                (c = Math.max(c, f.latitude));
                            var T =
                                f.longitude >= 0
                                    ? f.longitude
                                    : f.longitude + u.TWO_PI;
                            (a = Math.min(a, T)), (o = Math.max(o, T));
                        }
                        return (
                            i - n > o - a &&
                                ((n = a),
                                (i = o),
                                i > u.PI && (i -= u.TWO_PI),
                                n > u.PI && (n -= u.TWO_PI)),
                            r(t)
                                ? ((t.west = n),
                                  (t.south = E),
                                  (t.east = i),
                                  (t.north = c),
                                  t)
                                : new s(n, E, i, c)
                        );
                    }),
                    (s.fromCartesianArray = function (e, t, i) {
                        t = n(t, a.WGS84);
                        for (
                            var o = Number.MAX_VALUE,
                                E = -Number.MAX_VALUE,
                                c = Number.MAX_VALUE,
                                _ = -Number.MAX_VALUE,
                                l = Number.MAX_VALUE,
                                f = -Number.MAX_VALUE,
                                T = 0,
                                R = e.length;
                            T < R;
                            T++
                        ) {
                            var h = t.cartesianToCartographic(e[T]);
                            (o = Math.min(o, h.longitude)),
                                (E = Math.max(E, h.longitude)),
                                (l = Math.min(l, h.latitude)),
                                (f = Math.max(f, h.latitude));
                            var d =
                                h.longitude >= 0
                                    ? h.longitude
                                    : h.longitude + u.TWO_PI;
                            (c = Math.min(c, d)), (_ = Math.max(_, d));
                        }
                        return (
                            E - o > _ - c &&
                                ((o = c),
                                (E = _),
                                E > u.PI && (E -= u.TWO_PI),
                                o > u.PI && (o -= u.TWO_PI)),
                            r(i)
                                ? ((i.west = o),
                                  (i.south = l),
                                  (i.east = E),
                                  (i.north = f),
                                  i)
                                : new s(o, l, E, f)
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
                        var i = t.east,
                            a = t.west;
                        i < a && (i += u.TWO_PI);
                        var o = u.negativePiToPi(0.5 * (a + i)),
                            s = 0.5 * (t.south + t.north);
                        return r(n)
                            ? ((n.longitude = o),
                              (n.latitude = s),
                              (n.height = 0),
                              n)
                            : new e(o, s);
                    }),
                    (s.intersection = function (e, t, n) {
                        var i = e.east,
                            a = e.west,
                            o = t.east,
                            E = t.west;
                        i < a && o > 0
                            ? (i += u.TWO_PI)
                            : o < E && i > 0 && (o += u.TWO_PI),
                            i < a && E < 0
                                ? (E += u.TWO_PI)
                                : o < E && a < 0 && (a += u.TWO_PI);
                        var c = u.negativePiToPi(Math.max(a, E)),
                            _ = u.negativePiToPi(Math.min(i, o));
                        if (!((e.west < e.east || t.west < t.east) && _ <= c)) {
                            var l = Math.max(e.south, t.south),
                                f = Math.min(e.north, t.north);
                            if (!(l >= f))
                                return r(n)
                                    ? ((n.west = c),
                                      (n.south = l),
                                      (n.east = _),
                                      (n.north = f),
                                      n)
                                    : new s(c, l, _, f);
                        }
                    }),
                    (s.simpleIntersection = function (e, t, n) {
                        var i = Math.max(e.west, t.west),
                            a = Math.max(e.south, t.south),
                            o = Math.min(e.east, t.east),
                            u = Math.min(e.north, t.north);
                        if (!(a >= u || i >= o))
                            return r(n)
                                ? ((n.west = i),
                                  (n.south = a),
                                  (n.east = o),
                                  (n.north = u),
                                  n)
                                : new s(i, a, o, u);
                    }),
                    (s.union = function (e, t, n) {
                        r(n) || (n = new s());
                        var i = e.east,
                            a = e.west,
                            o = t.east,
                            E = t.west;
                        i < a && o > 0
                            ? (i += u.TWO_PI)
                            : o < E && i > 0 && (o += u.TWO_PI),
                            i < a && E < 0
                                ? (E += u.TWO_PI)
                                : o < E && a < 0 && (a += u.TWO_PI);
                        var c = u.convertLongitudeRange(Math.min(a, E)),
                            _ = u.convertLongitudeRange(Math.max(i, o));
                        return (
                            (n.west = c),
                            (n.south = Math.min(e.south, t.south)),
                            (n.east = _),
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
                            i = e.west,
                            a = e.east;
                        return (
                            a < i &&
                                ((a += u.TWO_PI), n < 0 && (n += u.TWO_PI)),
                            (n > i || u.equalsEpsilon(n, i, u.EPSILON14)) &&
                                (n < a || u.equalsEpsilon(n, a, u.EPSILON14)) &&
                                r >= e.south &&
                                r <= e.north
                        );
                    });
                var E = new e();
                return (
                    (s.subsample = function (e, t, i, o) {
                        (t = n(t, a.WGS84)), (i = n(i, 0)), r(o) || (o = []);
                        var c = 0,
                            _ = e.north,
                            l = e.south,
                            f = e.east,
                            T = e.west,
                            R = E;
                        (R.height = i),
                            (R.longitude = T),
                            (R.latitude = _),
                            (o[c] = t.cartographicToCartesian(R, o[c])),
                            c++,
                            (R.longitude = f),
                            (o[c] = t.cartographicToCartesian(R, o[c])),
                            c++,
                            (R.latitude = l),
                            (o[c] = t.cartographicToCartesian(R, o[c])),
                            c++,
                            (R.longitude = T),
                            (o[c] = t.cartographicToCartesian(R, o[c])),
                            c++,
                            (R.latitude = _ < 0 ? _ : l > 0 ? l : 0);
                        for (var h = 1; h < 8; ++h)
                            (R.longitude = -Math.PI + h * u.PI_OVER_TWO),
                                s.contains(e, R) &&
                                    ((o[c] = t.cartographicToCartesian(
                                        R,
                                        o[c],
                                    )),
                                    c++);
                        return (
                            0 === R.latitude &&
                                ((R.longitude = T),
                                (o[c] = t.cartographicToCartesian(R, o[c])),
                                c++,
                                (R.longitude = f),
                                (o[c] = t.cartographicToCartesian(R, o[c])),
                                c++),
                            (o.length = c),
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
            function (e, t, n, r, i, a, o) {
                'use strict';
                function u(e) {
                    (this._ellipsoid = n(e, o.WGS84)),
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
                    (u.prototype.project = function (t, n) {
                        var i = this._semimajorAxis,
                            a = t.longitude * i,
                            o = t.latitude * i,
                            u = t.height;
                        return r(n)
                            ? ((n.x = a), (n.y = o), (n.z = u), n)
                            : new e(a, o, u);
                    }),
                    (u.prototype.unproject = function (e, n) {
                        var i = this._oneOverSemimajorAxis,
                            a = e.x * i,
                            o = e.y * i,
                            u = e.z;
                        return r(n)
                            ? ((n.longitude = a),
                              (n.latitude = o),
                              (n.height = u),
                              n)
                            : new t(a, o, u);
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
            function (e, t, n, r, i, a, o, u) {
                'use strict';
                function s(e, t, r, i, a, o, u, s, E) {
                    (this[0] = n(e, 0)),
                        (this[1] = n(i, 0)),
                        (this[2] = n(u, 0)),
                        (this[3] = n(t, 0)),
                        (this[4] = n(a, 0)),
                        (this[5] = n(s, 0)),
                        (this[6] = n(r, 0)),
                        (this[7] = n(o, 0)),
                        (this[8] = n(E, 0));
                }
                function E(e) {
                    for (var t = 0, n = 0; n < 9; ++n) {
                        var r = e[n];
                        t += r * r;
                    }
                    return Math.sqrt(t);
                }
                function c(e) {
                    for (var t = 0, n = 0; n < 3; ++n) {
                        var r = e[s.getElementIndex(R[n], T[n])];
                        t += 2 * r * r;
                    }
                    return Math.sqrt(t);
                }
                function _(e, t) {
                    for (var n = u.EPSILON15, r = 0, i = 1, a = 0; a < 3; ++a) {
                        var o = Math.abs(e[s.getElementIndex(R[a], T[a])]);
                        o > r && ((i = a), (r = o));
                    }
                    var E = 1,
                        c = 0,
                        _ = T[i],
                        l = R[i];
                    if (Math.abs(e[s.getElementIndex(l, _)]) > n) {
                        var f,
                            h = e[s.getElementIndex(l, l)],
                            d = e[s.getElementIndex(_, _)],
                            A = e[s.getElementIndex(l, _)],
                            N = (h - d) / 2 / A;
                        (f =
                            N < 0
                                ? -1 / (-N + Math.sqrt(1 + N * N))
                                : 1 / (N + Math.sqrt(1 + N * N))),
                            (E = 1 / Math.sqrt(1 + f * f)),
                            (c = f * E);
                    }
                    return (
                        (t = s.clone(s.IDENTITY, t)),
                        (t[s.getElementIndex(_, _)] = t[
                            s.getElementIndex(l, l)
                        ] =
                            E),
                        (t[s.getElementIndex(l, _)] = c),
                        (t[s.getElementIndex(_, l)] = -c),
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
                    (s.unpack = function (e, t, i) {
                        return (
                            (t = n(t, 0)),
                            r(i) || (i = new s()),
                            (i[0] = e[t++]),
                            (i[1] = e[t++]),
                            (i[2] = e[t++]),
                            (i[3] = e[t++]),
                            (i[4] = e[t++]),
                            (i[5] = e[t++]),
                            (i[6] = e[t++]),
                            (i[7] = e[t++]),
                            (i[8] = e[t++]),
                            i
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
                    (s.fromArray = function (e, t, i) {
                        return (
                            (t = n(t, 0)),
                            r(i) || (i = new s()),
                            (i[0] = e[t]),
                            (i[1] = e[t + 1]),
                            (i[2] = e[t + 2]),
                            (i[3] = e[t + 3]),
                            (i[4] = e[t + 4]),
                            (i[5] = e[t + 5]),
                            (i[6] = e[t + 6]),
                            (i[7] = e[t + 7]),
                            (i[8] = e[t + 8]),
                            i
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
                            i = e.x * e.y,
                            a = e.x * e.z,
                            o = e.x * e.w,
                            u = e.y * e.y,
                            E = e.y * e.z,
                            c = e.y * e.w,
                            _ = e.z * e.z,
                            l = e.z * e.w,
                            f = e.w * e.w,
                            T = n - u - _ + f,
                            R = 2 * (i - l),
                            h = 2 * (a + c),
                            d = 2 * (i + l),
                            A = -n + u - _ + f,
                            N = 2 * (E - o),
                            y = 2 * (a - c),
                            S = 2 * (E + o),
                            I = -n - u + _ + f;
                        return r(t)
                            ? ((t[0] = T),
                              (t[1] = d),
                              (t[2] = y),
                              (t[3] = R),
                              (t[4] = A),
                              (t[5] = S),
                              (t[6] = h),
                              (t[7] = N),
                              (t[8] = I),
                              t)
                            : new s(T, R, h, d, A, N, y, S, I);
                    }),
                    (s.fromHeadingPitchRoll = function (e, t) {
                        var n = Math.cos(-e.pitch),
                            i = Math.cos(-e.heading),
                            a = Math.cos(e.roll),
                            o = Math.sin(-e.pitch),
                            u = Math.sin(-e.heading),
                            E = Math.sin(e.roll),
                            c = n * i,
                            _ = -a * u + E * o * i,
                            l = E * u + a * o * i,
                            f = n * u,
                            T = a * i + E * o * u,
                            R = -E * i + a * o * u,
                            h = -o,
                            d = E * n,
                            A = a * n;
                        return r(t)
                            ? ((t[0] = c),
                              (t[1] = f),
                              (t[2] = h),
                              (t[3] = _),
                              (t[4] = T),
                              (t[5] = d),
                              (t[6] = l),
                              (t[7] = R),
                              (t[8] = A),
                              t)
                            : new s(c, _, l, f, T, R, h, d, A);
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
                            i = Math.sin(e);
                        return r(t)
                            ? ((t[0] = 1),
                              (t[1] = 0),
                              (t[2] = 0),
                              (t[3] = 0),
                              (t[4] = n),
                              (t[5] = i),
                              (t[6] = 0),
                              (t[7] = -i),
                              (t[8] = n),
                              t)
                            : new s(1, 0, 0, 0, n, -i, 0, i, n);
                    }),
                    (s.fromRotationY = function (e, t) {
                        var n = Math.cos(e),
                            i = Math.sin(e);
                        return r(t)
                            ? ((t[0] = n),
                              (t[1] = 0),
                              (t[2] = -i),
                              (t[3] = 0),
                              (t[4] = 1),
                              (t[5] = 0),
                              (t[6] = i),
                              (t[7] = 0),
                              (t[8] = n),
                              t)
                            : new s(n, 0, i, 0, 1, 0, -i, 0, n);
                    }),
                    (s.fromRotationZ = function (e, t) {
                        var n = Math.cos(e),
                            i = Math.sin(e);
                        return r(t)
                            ? ((t[0] = n),
                              (t[1] = i),
                              (t[2] = 0),
                              (t[3] = -i),
                              (t[4] = n),
                              (t[5] = 0),
                              (t[6] = 0),
                              (t[7] = 0),
                              (t[8] = 1),
                              t)
                            : new s(n, -i, 0, i, n, 0, 0, 0, 1);
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
                            i = e[r],
                            a = e[r + 1],
                            o = e[r + 2];
                        return (n.x = i), (n.y = a), (n.z = o), n;
                    }),
                    (s.setColumn = function (e, t, n, r) {
                        r = s.clone(e, r);
                        var i = 3 * t;
                        return (
                            (r[i] = n.x), (r[i + 1] = n.y), (r[i + 2] = n.z), r
                        );
                    }),
                    (s.getRow = function (e, t, n) {
                        var r = e[t],
                            i = e[t + 3],
                            a = e[t + 6];
                        return (n.x = r), (n.y = i), (n.z = a), n;
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
                var l = new e();
                s.getScale = function (t, n) {
                    return (
                        (n.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], l),
                        )),
                        (n.y = e.magnitude(
                            e.fromElements(t[3], t[4], t[5], l),
                        )),
                        (n.z = e.magnitude(
                            e.fromElements(t[6], t[7], t[8], l),
                        )),
                        n
                    );
                };
                var f = new e();
                (s.getMaximumScale = function (t) {
                    return s.getScale(t, f), e.maximumComponent(f);
                }),
                    (s.multiply = function (e, t, n) {
                        var r = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
                            i = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                            a = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                            o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                            u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                            s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                            E = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                            c = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                            _ = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                        return (
                            (n[0] = r),
                            (n[1] = i),
                            (n[2] = a),
                            (n[3] = o),
                            (n[4] = u),
                            (n[5] = s),
                            (n[6] = E),
                            (n[7] = c),
                            (n[8] = _),
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
                            i = t.y,
                            a = t.z,
                            o = e[0] * r + e[3] * i + e[6] * a,
                            u = e[1] * r + e[4] * i + e[7] * a,
                            s = e[2] * r + e[5] * i + e[8] * a;
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
                            i = e[6],
                            a = e[1],
                            o = e[4],
                            u = e[7],
                            s = e[2],
                            E = e[5],
                            c = e[8];
                        return (
                            (t[0] = n),
                            (t[1] = r),
                            (t[2] = i),
                            (t[3] = a),
                            (t[4] = o),
                            (t[5] = u),
                            (t[6] = s),
                            (t[7] = E),
                            (t[8] = c),
                            t
                        );
                    });
                var T = [1, 0, 0],
                    R = [2, 2, 1],
                    h = new s(),
                    d = new s();
                return (
                    (s.computeEigenDecomposition = function (e, t) {
                        var n = u.EPSILON20,
                            i = 0,
                            a = 0;
                        r(t) || (t = {});
                        for (
                            var o = (t.unitary = s.clone(
                                    s.IDENTITY,
                                    t.unitary,
                                )),
                                l = (t.diagonal = s.clone(e, t.diagonal)),
                                f = n * E(l);
                            a < 10 && c(l) > f;

                        )
                            _(l, h),
                                s.transpose(h, d),
                                s.multiply(l, h, l),
                                s.multiply(d, l, l),
                                s.multiply(o, h, o),
                                ++i > 2 && (++a, (i = 0));
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
                            i = e[1],
                            a = e[4],
                            o = e[7],
                            u = e[2],
                            s = e[5],
                            E = e[8];
                        return (
                            t * (a * E - s * o) +
                            i * (s * r - n * E) +
                            u * (n * o - a * r)
                        );
                    }),
                    (s.inverse = function (e, t) {
                        var n = e[0],
                            r = e[1],
                            i = e[2],
                            a = e[3],
                            o = e[4],
                            u = e[5],
                            E = e[6],
                            c = e[7],
                            _ = e[8],
                            l = s.determinant(e);
                        (t[0] = o * _ - c * u),
                            (t[1] = c * i - r * _),
                            (t[2] = r * u - o * i),
                            (t[3] = E * u - a * _),
                            (t[4] = n * _ - E * i),
                            (t[5] = a * i - n * u),
                            (t[6] = a * c - E * o),
                            (t[7] = E * r - n * c),
                            (t[8] = n * o - a * r);
                        var f = 1 / l;
                        return s.multiplyByScalar(t, f, t);
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
                    i(s.prototype, {
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
            function (e, t, n, r, i, a) {
                'use strict';
                function o(e, n, r, i) {
                    (this.x = t(e, 0)),
                        (this.y = t(n, 0)),
                        (this.z = t(r, 0)),
                        (this.w = t(i, 0));
                }
                (o.fromElements = function (e, t, r, i, a) {
                    return n(a)
                        ? ((a.x = e), (a.y = t), (a.z = r), (a.w = i), a)
                        : new o(e, t, r, i);
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
                    (o.unpack = function (e, r, i) {
                        return (
                            (r = t(r, 0)),
                            n(i) || (i = new o()),
                            (i.x = e[r++]),
                            (i.y = e[r++]),
                            (i.z = e[r++]),
                            (i.w = e[r]),
                            i
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = 4 * r) : (t = new Array(4 * r));
                        for (var i = 0; i < r; ++i) o.pack(e[i], t, 4 * i);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = r / 4) : (t = new Array(r / 4));
                        for (var i = 0; i < r; i += 4) {
                            var a = i / 4;
                            t[a] = o.unpack(e, i, t[a]);
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
                var E = new o();
                return (
                    (o.mostOrthogonalAxis = function (e, t) {
                        var n = o.normalize(e, E);
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
                    (o.equalsEpsilon = function (e, t, r, i) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                a.equalsEpsilon(e.x, t.x, r, i) &&
                                a.equalsEpsilon(e.y, t.y, r, i) &&
                                a.equalsEpsilon(e.z, t.z, r, i) &&
                                a.equalsEpsilon(e.w, t.w, r, i))
                        );
                    }),
                    (o.ZERO = i(new o(0, 0, 0, 0))),
                    (o.UNIT_X = i(new o(1, 0, 0, 0))),
                    (o.UNIT_Y = i(new o(0, 1, 0, 0))),
                    (o.UNIT_Z = i(new o(0, 0, 1, 0))),
                    (o.UNIT_W = i(new o(0, 0, 0, 1))),
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
            function (e, t, n, r, i, a, o, u, s, E) {
                'use strict';
                function c(e, t, n, i, a, o, u, s, E, c, _, l, f, T, R, h) {
                    (this[0] = r(e, 0)),
                        (this[1] = r(a, 0)),
                        (this[2] = r(E, 0)),
                        (this[3] = r(f, 0)),
                        (this[4] = r(t, 0)),
                        (this[5] = r(o, 0)),
                        (this[6] = r(c, 0)),
                        (this[7] = r(T, 0)),
                        (this[8] = r(n, 0)),
                        (this[9] = r(u, 0)),
                        (this[10] = r(_, 0)),
                        (this[11] = r(R, 0)),
                        (this[12] = r(i, 0)),
                        (this[13] = r(s, 0)),
                        (this[14] = r(l, 0)),
                        (this[15] = r(h, 0));
                }
                (c.packedLength = 16),
                    (c.pack = function (e, t, n) {
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
                    (c.unpack = function (e, t, n) {
                        return (
                            (t = r(t, 0)),
                            i(n) || (n = new c()),
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
                    (c.clone = function (e, t) {
                        if (i(e))
                            return i(t)
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
                        return i(t)
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
                    (c.fromRotationTranslation = function (t, n, a) {
                        return (
                            (n = r(n, e.ZERO)),
                            i(a)
                                ? ((a[0] = t[0]),
                                  (a[1] = t[1]),
                                  (a[2] = t[2]),
                                  (a[3] = 0),
                                  (a[4] = t[3]),
                                  (a[5] = t[4]),
                                  (a[6] = t[5]),
                                  (a[7] = 0),
                                  (a[8] = t[6]),
                                  (a[9] = t[7]),
                                  (a[10] = t[8]),
                                  (a[11] = 0),
                                  (a[12] = n.x),
                                  (a[13] = n.y),
                                  (a[14] = n.z),
                                  (a[15] = 1),
                                  a)
                                : new c(
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
                    (c.fromTranslationQuaternionRotationScale = function (
                        e,
                        t,
                        n,
                        r,
                    ) {
                        i(r) || (r = new c());
                        var a = n.x,
                            o = n.y,
                            u = n.z,
                            s = t.x * t.x,
                            E = t.x * t.y,
                            _ = t.x * t.z,
                            l = t.x * t.w,
                            f = t.y * t.y,
                            T = t.y * t.z,
                            R = t.y * t.w,
                            h = t.z * t.z,
                            d = t.z * t.w,
                            A = t.w * t.w,
                            N = s - f - h + A,
                            y = 2 * (E - d),
                            S = 2 * (_ + R),
                            I = 2 * (E + d),
                            p = -s + f - h + A,
                            m = 2 * (T - l),
                            M = 2 * (_ - R),
                            O = 2 * (T + l),
                            x = -s - f + h + A;
                        return (
                            (r[0] = N * a),
                            (r[1] = I * a),
                            (r[2] = M * a),
                            (r[3] = 0),
                            (r[4] = y * o),
                            (r[5] = p * o),
                            (r[6] = O * o),
                            (r[7] = 0),
                            (r[8] = S * u),
                            (r[9] = m * u),
                            (r[10] = x * u),
                            (r[11] = 0),
                            (r[12] = e.x),
                            (r[13] = e.y),
                            (r[14] = e.z),
                            (r[15] = 1),
                            r
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
                        return i(t)
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
                        return i(t)
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
                var _ = new e(),
                    l = new e(),
                    f = new e();
                (c.fromCamera = function (t, n) {
                    var r = t.position,
                        a = t.direction,
                        o = t.up;
                    e.normalize(a, _),
                        e.normalize(e.cross(_, o, l), l),
                        e.normalize(e.cross(l, _, f), f);
                    var u = l.x,
                        s = l.y,
                        E = l.z,
                        T = _.x,
                        R = _.y,
                        h = _.z,
                        d = f.x,
                        A = f.y,
                        N = f.z,
                        y = r.x,
                        S = r.y,
                        I = r.z,
                        p = u * -y + s * -S + E * -I,
                        m = d * -y + A * -S + N * -I,
                        M = T * y + R * S + h * I;
                    return i(n)
                        ? ((n[0] = u),
                          (n[1] = d),
                          (n[2] = -T),
                          (n[3] = 0),
                          (n[4] = s),
                          (n[5] = A),
                          (n[6] = -R),
                          (n[7] = 0),
                          (n[8] = E),
                          (n[9] = N),
                          (n[10] = -h),
                          (n[11] = 0),
                          (n[12] = p),
                          (n[13] = m),
                          (n[14] = M),
                          (n[15] = 1),
                          n)
                        : new c(
                              u,
                              s,
                              E,
                              p,
                              d,
                              A,
                              N,
                              m,
                              -T,
                              -R,
                              -h,
                              M,
                              0,
                              0,
                              0,
                              1,
                          );
                }),
                    (c.computePerspectiveFieldOfView = function (
                        e,
                        t,
                        n,
                        r,
                        i,
                    ) {
                        var a = Math.tan(0.5 * e),
                            o = 1 / a,
                            u = o / t,
                            s = (r + n) / (n - r),
                            E = (2 * r * n) / (n - r);
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
                            (i[14] = E),
                            (i[15] = 0),
                            i
                        );
                    }),
                    (c.computeOrthographicOffCenter = function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                    ) {
                        var u = 1 / (t - e),
                            s = 1 / (r - n),
                            E = 1 / (a - i),
                            c = -(t + e) * u,
                            _ = -(r + n) * s,
                            l = -(a + i) * E;
                        return (
                            (u *= 2),
                            (s *= 2),
                            (E *= -2),
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
                            (o[10] = E),
                            (o[11] = 0),
                            (o[12] = c),
                            (o[13] = _),
                            (o[14] = l),
                            (o[15] = 1),
                            o
                        );
                    }),
                    (c.computePerspectiveOffCenter = function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                        o,
                    ) {
                        var u = (2 * i) / (t - e),
                            s = (2 * i) / (r - n),
                            E = (t + e) / (t - e),
                            c = (r + n) / (r - n),
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
                            (o[8] = E),
                            (o[9] = c),
                            (o[10] = _),
                            (o[11] = -1),
                            (o[12] = 0),
                            (o[13] = 0),
                            (o[14] = l),
                            (o[15] = 0),
                            o
                        );
                    }),
                    (c.computeInfinitePerspectiveOffCenter = function (
                        e,
                        t,
                        n,
                        r,
                        i,
                        a,
                    ) {
                        var o = (2 * i) / (t - e),
                            u = (2 * i) / (r - n),
                            s = (t + e) / (t - e),
                            E = (r + n) / (r - n),
                            c = -2 * i;
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
                            (a[9] = E),
                            (a[10] = -1),
                            (a[11] = -1),
                            (a[12] = 0),
                            (a[13] = 0),
                            (a[14] = c),
                            (a[15] = 0),
                            a
                        );
                    }),
                    (c.computeViewportTransformation = function (e, t, n, i) {
                        e = r(e, r.EMPTY_OBJECT);
                        var a = r(e.x, 0),
                            o = r(e.y, 0),
                            u = r(e.width, 0),
                            s = r(e.height, 0);
                        (t = r(t, 0)), (n = r(n, 1));
                        var E = 0.5 * u,
                            c = 0.5 * s,
                            _ = 0.5 * (n - t),
                            l = E,
                            f = c,
                            T = _,
                            R = a + E,
                            h = o + c,
                            d = t + _;
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
                            (i[10] = T),
                            (i[11] = 0),
                            (i[12] = R),
                            (i[13] = h),
                            (i[14] = d),
                            (i[15] = 1),
                            i
                        );
                    }),
                    (c.computeView = function (t, n, r, i, a) {
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
                            (a[12] = -e.dot(i, t)),
                            (a[13] = -e.dot(r, t)),
                            (a[14] = e.dot(n, t)),
                            (a[15] = 1),
                            a
                        );
                    }),
                    (c.toArray = function (e, t) {
                        return i(t)
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
                    (c.getColumn = function (e, t, n) {
                        var r = 4 * t,
                            i = e[r],
                            a = e[r + 1],
                            o = e[r + 2],
                            u = e[r + 3];
                        return (n.x = i), (n.y = a), (n.z = o), (n.w = u), n;
                    }),
                    (c.setColumn = function (e, t, n, r) {
                        r = c.clone(e, r);
                        var i = 4 * t;
                        return (
                            (r[i] = n.x),
                            (r[i + 1] = n.y),
                            (r[i + 2] = n.z),
                            (r[i + 3] = n.w),
                            r
                        );
                    }),
                    (c.setTranslation = function (e, t, n) {
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
                    (c.getRow = function (e, t, n) {
                        var r = e[t],
                            i = e[t + 4],
                            a = e[t + 8],
                            o = e[t + 12];
                        return (n.x = r), (n.y = i), (n.z = a), (n.w = o), n;
                    }),
                    (c.setRow = function (e, t, n, r) {
                        return (
                            (r = c.clone(e, r)),
                            (r[t] = n.x),
                            (r[t + 4] = n.y),
                            (r[t + 8] = n.z),
                            (r[t + 12] = n.w),
                            r
                        );
                    });
                var T = new e();
                c.getScale = function (t, n) {
                    return (
                        (n.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], T),
                        )),
                        (n.y = e.magnitude(
                            e.fromElements(t[4], t[5], t[6], T),
                        )),
                        (n.z = e.magnitude(
                            e.fromElements(t[8], t[9], t[10], T),
                        )),
                        n
                    );
                };
                var R = new e();
                (c.getMaximumScale = function (t) {
                    return c.getScale(t, R), e.maximumComponent(R);
                }),
                    (c.multiply = function (e, t, n) {
                        var r = e[0],
                            i = e[1],
                            a = e[2],
                            o = e[3],
                            u = e[4],
                            s = e[5],
                            E = e[6],
                            c = e[7],
                            _ = e[8],
                            l = e[9],
                            f = e[10],
                            T = e[11],
                            R = e[12],
                            h = e[13],
                            d = e[14],
                            A = e[15],
                            N = t[0],
                            y = t[1],
                            S = t[2],
                            I = t[3],
                            p = t[4],
                            m = t[5],
                            M = t[6],
                            O = t[7],
                            x = t[8],
                            C = t[9],
                            g = t[10],
                            v = t[11],
                            U = t[12],
                            L = t[13],
                            w = t[14],
                            P = t[15],
                            F = r * N + u * y + _ * S + R * I,
                            D = i * N + s * y + l * S + h * I,
                            B = a * N + E * y + f * S + d * I,
                            z = o * N + c * y + T * S + A * I,
                            G = r * p + u * m + _ * M + R * O,
                            b = i * p + s * m + l * M + h * O,
                            X = a * p + E * m + f * M + d * O,
                            q = o * p + c * m + T * M + A * O,
                            V = r * x + u * C + _ * g + R * v,
                            H = i * x + s * C + l * g + h * v,
                            W = a * x + E * C + f * g + d * v,
                            Y = o * x + c * C + T * g + A * v,
                            k = r * U + u * L + _ * w + R * P,
                            Z = i * U + s * L + l * w + h * P,
                            K = a * U + E * L + f * w + d * P,
                            j = o * U + c * L + T * w + A * P;
                        return (
                            (n[0] = F),
                            (n[1] = D),
                            (n[2] = B),
                            (n[3] = z),
                            (n[4] = G),
                            (n[5] = b),
                            (n[6] = X),
                            (n[7] = q),
                            (n[8] = V),
                            (n[9] = H),
                            (n[10] = W),
                            (n[11] = Y),
                            (n[12] = k),
                            (n[13] = Z),
                            (n[14] = K),
                            (n[15] = j),
                            n
                        );
                    }),
                    (c.add = function (e, t, n) {
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
                    (c.subtract = function (e, t, n) {
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
                    (c.multiplyTransformation = function (e, t, n) {
                        var r = e[0],
                            i = e[1],
                            a = e[2],
                            o = e[4],
                            u = e[5],
                            s = e[6],
                            E = e[8],
                            c = e[9],
                            _ = e[10],
                            l = e[12],
                            f = e[13],
                            T = e[14],
                            R = t[0],
                            h = t[1],
                            d = t[2],
                            A = t[4],
                            N = t[5],
                            y = t[6],
                            S = t[8],
                            I = t[9],
                            p = t[10],
                            m = t[12],
                            M = t[13],
                            O = t[14],
                            x = r * R + o * h + E * d,
                            C = i * R + u * h + c * d,
                            g = a * R + s * h + _ * d,
                            v = r * A + o * N + E * y,
                            U = i * A + u * N + c * y,
                            L = a * A + s * N + _ * y,
                            w = r * S + o * I + E * p,
                            P = i * S + u * I + c * p,
                            F = a * S + s * I + _ * p,
                            D = r * m + o * M + E * O + l,
                            B = i * m + u * M + c * O + f,
                            z = a * m + s * M + _ * O + T;
                        return (
                            (n[0] = x),
                            (n[1] = C),
                            (n[2] = g),
                            (n[3] = 0),
                            (n[4] = v),
                            (n[5] = U),
                            (n[6] = L),
                            (n[7] = 0),
                            (n[8] = w),
                            (n[9] = P),
                            (n[10] = F),
                            (n[11] = 0),
                            (n[12] = D),
                            (n[13] = B),
                            (n[14] = z),
                            (n[15] = 1),
                            n
                        );
                    }),
                    (c.multiplyByMatrix3 = function (e, t, n) {
                        var r = e[0],
                            i = e[1],
                            a = e[2],
                            o = e[4],
                            u = e[5],
                            s = e[6],
                            E = e[8],
                            c = e[9],
                            _ = e[10],
                            l = t[0],
                            f = t[1],
                            T = t[2],
                            R = t[3],
                            h = t[4],
                            d = t[5],
                            A = t[6],
                            N = t[7],
                            y = t[8],
                            S = r * l + o * f + E * T,
                            I = i * l + u * f + c * T,
                            p = a * l + s * f + _ * T,
                            m = r * R + o * h + E * d,
                            M = i * R + u * h + c * d,
                            O = a * R + s * h + _ * d,
                            x = r * A + o * N + E * y,
                            C = i * A + u * N + c * y,
                            g = a * A + s * N + _ * y;
                        return (
                            (n[0] = S),
                            (n[1] = I),
                            (n[2] = p),
                            (n[3] = 0),
                            (n[4] = m),
                            (n[5] = M),
                            (n[6] = O),
                            (n[7] = 0),
                            (n[8] = x),
                            (n[9] = C),
                            (n[10] = g),
                            (n[11] = 0),
                            (n[12] = e[12]),
                            (n[13] = e[13]),
                            (n[14] = e[14]),
                            (n[15] = e[15]),
                            n
                        );
                    }),
                    (c.multiplyByTranslation = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = r * e[0] + i * e[4] + a * e[8] + e[12],
                            u = r * e[1] + i * e[5] + a * e[9] + e[13],
                            s = r * e[2] + i * e[6] + a * e[10] + e[14];
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
                var h = new e();
                (c.multiplyByUniformScale = function (e, t, n) {
                    return (
                        (h.x = t),
                        (h.y = t),
                        (h.z = t),
                        c.multiplyByScale(e, h, n)
                    );
                }),
                    (c.multiplyByScale = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z;
                        return 1 === r && 1 === i && 1 === a
                            ? c.clone(e, n)
                            : ((n[0] = r * e[0]),
                              (n[1] = r * e[1]),
                              (n[2] = r * e[2]),
                              (n[3] = 0),
                              (n[4] = i * e[4]),
                              (n[5] = i * e[5]),
                              (n[6] = i * e[6]),
                              (n[7] = 0),
                              (n[8] = a * e[8]),
                              (n[9] = a * e[9]),
                              (n[10] = a * e[10]),
                              (n[11] = 0),
                              (n[12] = e[12]),
                              (n[13] = e[13]),
                              (n[14] = e[14]),
                              (n[15] = 1),
                              n);
                    }),
                    (c.multiplyByVector = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = t.w,
                            u = e[0] * r + e[4] * i + e[8] * a + e[12] * o,
                            s = e[1] * r + e[5] * i + e[9] * a + e[13] * o,
                            E = e[2] * r + e[6] * i + e[10] * a + e[14] * o,
                            c = e[3] * r + e[7] * i + e[11] * a + e[15] * o;
                        return (n.x = u), (n.y = s), (n.z = E), (n.w = c), n;
                    }),
                    (c.multiplyByPointAsVector = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = e[0] * r + e[4] * i + e[8] * a,
                            u = e[1] * r + e[5] * i + e[9] * a,
                            s = e[2] * r + e[6] * i + e[10] * a;
                        return (n.x = o), (n.y = u), (n.z = s), n;
                    }),
                    (c.multiplyByPoint = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = e[0] * r + e[4] * i + e[8] * a + e[12],
                            u = e[1] * r + e[5] * i + e[9] * a + e[13],
                            s = e[2] * r + e[6] * i + e[10] * a + e[14];
                        return (n.x = o), (n.y = u), (n.z = s), n;
                    }),
                    (c.multiplyByScalar = function (e, t, n) {
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
                        var n = e[1],
                            r = e[2],
                            i = e[3],
                            a = e[6],
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
                            (t[9] = a),
                            (t[10] = e[10]),
                            (t[11] = e[14]),
                            (t[12] = i),
                            (t[13] = o),
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
                            (i(e) &&
                                i(t) &&
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
                    (c.equalsEpsilon = function (e, t, n) {
                        return (
                            e === t ||
                            (i(e) &&
                                i(t) &&
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
                var d = new s(),
                    A = new s(),
                    N = new t(),
                    y = new t(0, 0, 0, 1);
                return (
                    (c.inverse = function (e, n) {
                        if (
                            s.equalsEpsilon(
                                c.getRotation(e, d),
                                A,
                                u.EPSILON7,
                            ) &&
                            t.equals(c.getRow(e, 3, N), y)
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
                            i = e[4],
                            a = e[8],
                            o = e[12],
                            _ = e[1],
                            l = e[5],
                            f = e[9],
                            T = e[13],
                            R = e[2],
                            h = e[6],
                            S = e[10],
                            I = e[14],
                            p = e[3],
                            m = e[7],
                            M = e[11],
                            O = e[15],
                            x = S * O,
                            C = I * M,
                            g = h * O,
                            v = I * m,
                            U = h * M,
                            L = S * m,
                            w = R * O,
                            P = I * p,
                            F = R * M,
                            D = S * p,
                            B = R * m,
                            z = h * p,
                            G = x * l + v * f + U * T - (C * l + g * f + L * T),
                            b = C * _ + w * f + D * T - (x * _ + P * f + F * T),
                            X = g * _ + P * l + B * T - (v * _ + w * l + z * T),
                            q = L * _ + F * l + z * f - (U * _ + D * l + B * f),
                            V = C * i + g * a + L * o - (x * i + v * a + U * o),
                            H = x * r + P * a + F * o - (C * r + w * a + D * o),
                            W = v * r + w * i + z * o - (g * r + P * i + B * o),
                            Y = U * r + D * i + B * a - (L * r + F * i + z * a);
                        (x = a * T),
                            (C = o * f),
                            (g = i * T),
                            (v = o * l),
                            (U = i * f),
                            (L = a * l),
                            (w = r * T),
                            (P = o * _),
                            (F = r * f),
                            (D = a * _),
                            (B = r * l),
                            (z = i * _);
                        var k = x * m + v * M + U * O - (C * m + g * M + L * O),
                            Z = C * p + w * M + D * O - (x * p + P * M + F * O),
                            K = g * p + P * m + B * O - (v * p + w * m + z * O),
                            j = L * p + F * m + z * M - (U * p + D * m + B * M),
                            Q = g * S + L * I + C * h - (U * I + x * h + v * S),
                            J = F * I + x * R + P * S - (w * S + D * I + C * R),
                            $ = w * h + z * I + v * R - (B * I + g * R + P * h),
                            ee =
                                B * S + U * R + D * h - (F * h + z * S + L * R),
                            te = r * G + i * b + a * X + o * q;
                        if (Math.abs(te) < u.EPSILON20)
                            throw new E(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (te = 1 / te),
                            (n[0] = G * te),
                            (n[1] = b * te),
                            (n[2] = X * te),
                            (n[3] = q * te),
                            (n[4] = V * te),
                            (n[5] = H * te),
                            (n[6] = W * te),
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
                    (c.inverseTransformation = function (e, t) {
                        var n = e[0],
                            r = e[1],
                            i = e[2],
                            a = e[4],
                            o = e[5],
                            u = e[6],
                            s = e[8],
                            E = e[9],
                            c = e[10],
                            _ = e[12],
                            l = e[13],
                            f = e[14],
                            T = -n * _ - r * l - i * f,
                            R = -a * _ - o * l - u * f,
                            h = -s * _ - E * l - c * f;
                        return (
                            (t[0] = n),
                            (t[1] = a),
                            (t[2] = s),
                            (t[3] = 0),
                            (t[4] = r),
                            (t[5] = o),
                            (t[6] = E),
                            (t[7] = 0),
                            (t[8] = i),
                            (t[9] = u),
                            (t[10] = c),
                            (t[11] = 0),
                            (t[12] = T),
                            (t[13] = R),
                            (t[14] = h),
                            (t[15] = 1),
                            t
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
                    a(c.prototype, {
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
                    (c.equalsArray = function (e, t, n) {
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
            function (e, t, n, r, i, a, o, u, s, E, c, _) {
                'use strict';
                function l(t, n) {
                    (this.center = e.clone(r(t, e.ZERO))),
                        (this.radius = r(n, 0));
                }
                var f = new e(),
                    T = new e(),
                    R = new e(),
                    h = new e(),
                    d = new e(),
                    A = new e(),
                    N = new e(),
                    y = new e(),
                    S = new e(),
                    I = new e(),
                    p = new e(),
                    m = new e();
                l.fromPoints = function (t, n) {
                    if ((i(n) || (n = new l()), !i(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r,
                        a = e.clone(t[0], N),
                        o = e.clone(a, f),
                        u = e.clone(a, T),
                        s = e.clone(a, R),
                        E = e.clone(a, h),
                        c = e.clone(a, d),
                        _ = e.clone(a, A),
                        M = t.length;
                    for (r = 1; r < M; r++) {
                        e.clone(t[r], a);
                        var O = a.x,
                            x = a.y,
                            C = a.z;
                        O < o.x && e.clone(a, o),
                            O > E.x && e.clone(a, E),
                            x < u.y && e.clone(a, u),
                            x > c.y && e.clone(a, c),
                            C < s.z && e.clone(a, s),
                            C > _.z && e.clone(a, _);
                    }
                    var g = e.magnitudeSquared(e.subtract(E, o, y)),
                        v = e.magnitudeSquared(e.subtract(c, u, y)),
                        U = e.magnitudeSquared(e.subtract(_, s, y)),
                        L = o,
                        w = E,
                        P = g;
                    v > P && ((P = v), (L = u), (w = c)),
                        U > P && ((P = U), (L = s), (w = _));
                    var F = S;
                    (F.x = 0.5 * (L.x + w.x)),
                        (F.y = 0.5 * (L.y + w.y)),
                        (F.z = 0.5 * (L.z + w.z));
                    var D = e.magnitudeSquared(e.subtract(w, F, y)),
                        B = Math.sqrt(D),
                        z = I;
                    (z.x = o.x), (z.y = u.y), (z.z = s.z);
                    var G = p;
                    (G.x = E.x), (G.y = c.y), (G.z = _.z);
                    var b = e.multiplyByScalar(e.add(z, G, y), 0.5, m),
                        X = 0;
                    for (r = 0; r < M; r++) {
                        e.clone(t[r], a);
                        var q = e.magnitude(e.subtract(a, b, y));
                        q > X && (X = q);
                        var V = e.magnitudeSquared(e.subtract(a, F, y));
                        if (V > D) {
                            var H = Math.sqrt(V);
                            (B = 0.5 * (B + H)), (D = B * B);
                            var W = H - B;
                            (F.x = (B * F.x + W * a.x) / H),
                                (F.y = (B * F.y + W * a.y) / H),
                                (F.z = (B * F.z + W * a.z) / H);
                        }
                    }
                    return (
                        B < X
                            ? (e.clone(F, n.center), (n.radius = B))
                            : (e.clone(b, n.center), (n.radius = X)),
                        n
                    );
                };
                var M = new o(),
                    O = new e(),
                    x = new e(),
                    C = new t(),
                    g = new t();
                (l.fromRectangle2D = function (e, t, n) {
                    return l.fromRectangleWithHeights2D(e, t, 0, 0, n);
                }),
                    (l.fromRectangleWithHeights2D = function (t, n, a, o, u) {
                        if ((i(u) || (u = new l()), !i(t)))
                            return (
                                (u.center = e.clone(e.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (n = r(n, M)),
                            _.southwest(t, C),
                            (C.height = a),
                            _.northeast(t, g),
                            (g.height = o);
                        var s = n.project(C, O),
                            E = n.project(g, x),
                            c = E.x - s.x,
                            f = E.y - s.y,
                            T = E.z - s.z;
                        u.radius = 0.5 * Math.sqrt(c * c + f * f + T * T);
                        var R = u.center;
                        return (
                            (R.x = s.x + 0.5 * c),
                            (R.y = s.y + 0.5 * f),
                            (R.z = s.z + 0.5 * T),
                            u
                        );
                    });
                var v = [];
                (l.fromRectangle3D = function (t, n, o, u) {
                    if (
                        ((n = r(n, a.WGS84)),
                        (o = r(o, 0)),
                        i(u) || (u = new l()),
                        !i(t))
                    )
                        return (
                            (u.center = e.clone(e.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var s = _.subsample(t, n, o, v);
                    return l.fromPoints(s, u);
                }),
                    (l.fromVertices = function (t, n, a, o) {
                        if ((i(o) || (o = new l()), !i(t) || 0 === t.length))
                            return (
                                (o.center = e.clone(e.ZERO, o.center)),
                                (o.radius = 0),
                                o
                            );
                        (n = r(n, e.ZERO)), (a = r(a, 3));
                        var u = N;
                        (u.x = t[0] + n.x),
                            (u.y = t[1] + n.y),
                            (u.z = t[2] + n.z);
                        var s,
                            E = e.clone(u, f),
                            c = e.clone(u, T),
                            _ = e.clone(u, R),
                            M = e.clone(u, h),
                            O = e.clone(u, d),
                            x = e.clone(u, A),
                            C = t.length;
                        for (s = 0; s < C; s += a) {
                            var g = t[s] + n.x,
                                v = t[s + 1] + n.y,
                                U = t[s + 2] + n.z;
                            (u.x = g),
                                (u.y = v),
                                (u.z = U),
                                g < E.x && e.clone(u, E),
                                g > M.x && e.clone(u, M),
                                v < c.y && e.clone(u, c),
                                v > O.y && e.clone(u, O),
                                U < _.z && e.clone(u, _),
                                U > x.z && e.clone(u, x);
                        }
                        var L = e.magnitudeSquared(e.subtract(M, E, y)),
                            w = e.magnitudeSquared(e.subtract(O, c, y)),
                            P = e.magnitudeSquared(e.subtract(x, _, y)),
                            F = E,
                            D = M,
                            B = L;
                        w > B && ((B = w), (F = c), (D = O)),
                            P > B && ((B = P), (F = _), (D = x));
                        var z = S;
                        (z.x = 0.5 * (F.x + D.x)),
                            (z.y = 0.5 * (F.y + D.y)),
                            (z.z = 0.5 * (F.z + D.z));
                        var G = e.magnitudeSquared(e.subtract(D, z, y)),
                            b = Math.sqrt(G),
                            X = I;
                        (X.x = E.x), (X.y = c.y), (X.z = _.z);
                        var q = p;
                        (q.x = M.x), (q.y = O.y), (q.z = x.z);
                        var V = e.multiplyByScalar(e.add(X, q, y), 0.5, m),
                            H = 0;
                        for (s = 0; s < C; s += a) {
                            (u.x = t[s] + n.x),
                                (u.y = t[s + 1] + n.y),
                                (u.z = t[s + 2] + n.z);
                            var W = e.magnitude(e.subtract(u, V, y));
                            W > H && (H = W);
                            var Y = e.magnitudeSquared(e.subtract(u, z, y));
                            if (Y > G) {
                                var k = Math.sqrt(Y);
                                (b = 0.5 * (b + k)), (G = b * b);
                                var Z = k - b;
                                (z.x = (b * z.x + Z * u.x) / k),
                                    (z.y = (b * z.y + Z * u.y) / k),
                                    (z.z = (b * z.z + Z * u.z) / k);
                            }
                        }
                        return (
                            b < H
                                ? (e.clone(z, o.center), (o.radius = b))
                                : (e.clone(V, o.center), (o.radius = H)),
                            o
                        );
                    }),
                    (l.fromEncodedCartesianVertices = function (t, n, r) {
                        if (
                            (i(r) || (r = new l()),
                            !i(t) ||
                                !i(n) ||
                                t.length !== n.length ||
                                0 === t.length)
                        )
                            return (
                                (r.center = e.clone(e.ZERO, r.center)),
                                (r.radius = 0),
                                r
                            );
                        var a = N;
                        (a.x = t[0] + n[0]),
                            (a.y = t[1] + n[1]),
                            (a.z = t[2] + n[2]);
                        var o,
                            u = e.clone(a, f),
                            s = e.clone(a, T),
                            E = e.clone(a, R),
                            c = e.clone(a, h),
                            _ = e.clone(a, d),
                            M = e.clone(a, A),
                            O = t.length;
                        for (o = 0; o < O; o += 3) {
                            var x = t[o] + n[o],
                                C = t[o + 1] + n[o + 1],
                                g = t[o + 2] + n[o + 2];
                            (a.x = x),
                                (a.y = C),
                                (a.z = g),
                                x < u.x && e.clone(a, u),
                                x > c.x && e.clone(a, c),
                                C < s.y && e.clone(a, s),
                                C > _.y && e.clone(a, _),
                                g < E.z && e.clone(a, E),
                                g > M.z && e.clone(a, M);
                        }
                        var v = e.magnitudeSquared(e.subtract(c, u, y)),
                            U = e.magnitudeSquared(e.subtract(_, s, y)),
                            L = e.magnitudeSquared(e.subtract(M, E, y)),
                            w = u,
                            P = c,
                            F = v;
                        U > F && ((F = U), (w = s), (P = _)),
                            L > F && ((F = L), (w = E), (P = M));
                        var D = S;
                        (D.x = 0.5 * (w.x + P.x)),
                            (D.y = 0.5 * (w.y + P.y)),
                            (D.z = 0.5 * (w.z + P.z));
                        var B = e.magnitudeSquared(e.subtract(P, D, y)),
                            z = Math.sqrt(B),
                            G = I;
                        (G.x = u.x), (G.y = s.y), (G.z = E.z);
                        var b = p;
                        (b.x = c.x), (b.y = _.y), (b.z = M.z);
                        var X = e.multiplyByScalar(e.add(G, b, y), 0.5, m),
                            q = 0;
                        for (o = 0; o < O; o += 3) {
                            (a.x = t[o] + n[o]),
                                (a.y = t[o + 1] + n[o + 1]),
                                (a.z = t[o + 2] + n[o + 2]);
                            var V = e.magnitude(e.subtract(a, X, y));
                            V > q && (q = V);
                            var H = e.magnitudeSquared(e.subtract(a, D, y));
                            if (H > B) {
                                var W = Math.sqrt(H);
                                (z = 0.5 * (z + W)), (B = z * z);
                                var Y = W - z;
                                (D.x = (z * D.x + Y * a.x) / W),
                                    (D.y = (z * D.y + Y * a.y) / W),
                                    (D.z = (z * D.z + Y * a.z) / W);
                            }
                        }
                        return (
                            z < q
                                ? (e.clone(D, r.center), (r.radius = z))
                                : (e.clone(X, r.center), (r.radius = q)),
                            r
                        );
                    }),
                    (l.fromCornerPoints = function (t, n, r) {
                        i(r) || (r = new l());
                        var a = r.center;
                        return (
                            e.add(t, n, a),
                            e.multiplyByScalar(a, 0.5, a),
                            (r.radius = e.distance(a, n)),
                            r
                        );
                    }),
                    (l.fromEllipsoid = function (t, n) {
                        return (
                            i(n) || (n = new l()),
                            e.clone(e.ZERO, n.center),
                            (n.radius = t.maximumRadius),
                            n
                        );
                    });
                var U = new e();
                l.fromBoundingSpheres = function (t, n) {
                    if ((i(n) || (n = new l()), !i(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r = t.length;
                    if (1 === r) return l.clone(t[0], n);
                    if (2 === r) return l.union(t[0], t[1], n);
                    var a,
                        o = [];
                    for (a = 0; a < r; a++) o.push(t[a].center);
                    n = l.fromPoints(o, n);
                    var u = n.center,
                        s = n.radius;
                    for (a = 0; a < r; a++) {
                        var E = t[a];
                        s = Math.max(s, e.distance(u, E.center, U) + E.radius);
                    }
                    return (n.radius = s), n;
                };
                var L = new e(),
                    w = new e(),
                    P = new e();
                (l.fromOrientedBoundingBox = function (t, n) {
                    i(n) || (n = new l());
                    var r = t.halfAxes,
                        a = E.getColumn(r, 0, L),
                        o = E.getColumn(r, 1, w),
                        u = E.getColumn(r, 2, P);
                    return (
                        e.add(a, o, a),
                        e.add(a, u, a),
                        (n.center = e.clone(t.center, n.center)),
                        (n.radius = e.magnitude(a)),
                        n
                    );
                }),
                    (l.clone = function (t, n) {
                        if (i(t))
                            return i(n)
                                ? ((n.center = e.clone(t.center, n.center)),
                                  (n.radius = t.radius),
                                  n)
                                : new l(t.center, t.radius);
                    }),
                    (l.packedLength = 4),
                    (l.pack = function (e, t, n) {
                        n = r(n, 0);
                        var i = e.center;
                        return (
                            (t[n++] = i.x),
                            (t[n++] = i.y),
                            (t[n++] = i.z),
                            (t[n] = e.radius),
                            t
                        );
                    }),
                    (l.unpack = function (e, t, n) {
                        (t = r(t, 0)), i(n) || (n = new l());
                        var a = n.center;
                        return (
                            (a.x = e[t++]),
                            (a.y = e[t++]),
                            (a.z = e[t++]),
                            (n.radius = e[t]),
                            n
                        );
                    });
                var F = new e(),
                    D = new e();
                l.union = function (t, n, r) {
                    i(r) || (r = new l());
                    var a = t.center,
                        o = t.radius,
                        u = n.center,
                        s = n.radius,
                        E = e.subtract(u, a, F),
                        c = e.magnitude(E);
                    if (o >= c + s) return t.clone(r), r;
                    if (s >= c + o) return n.clone(r), r;
                    var _ = 0.5 * (o + c + s),
                        f = e.multiplyByScalar(E, (-o + _) / c, D);
                    return (
                        e.add(f, a, f), e.clone(f, r.center), (r.radius = _), r
                    );
                };
                var B = new e();
                (l.expand = function (t, n, r) {
                    r = l.clone(t, r);
                    var i = e.magnitude(e.subtract(n, r.center, B));
                    return i > r.radius && (r.radius = i), r;
                }),
                    (l.intersectPlane = function (t, n) {
                        var r = t.center,
                            i = t.radius,
                            a = n.normal,
                            o = e.dot(a, r) + n.distance;
                        return o < -i
                            ? u.OUTSIDE
                            : o < i
                              ? u.INTERSECTING
                              : u.INSIDE;
                    }),
                    (l.transform = function (e, t, n) {
                        return (
                            i(n) || (n = new l()),
                            (n.center = c.multiplyByPoint(
                                t,
                                e.center,
                                n.center,
                            )),
                            (n.radius = c.getMaximumScale(t) * e.radius),
                            n
                        );
                    });
                var z = new e();
                (l.distanceSquaredTo = function (t, n) {
                    var r = e.subtract(t.center, n, z);
                    return e.magnitudeSquared(r) - t.radius * t.radius;
                }),
                    (l.transformWithoutScale = function (e, t, n) {
                        return (
                            i(n) || (n = new l()),
                            (n.center = c.multiplyByPoint(
                                t,
                                e.center,
                                n.center,
                            )),
                            (n.radius = e.radius),
                            n
                        );
                    });
                var G = new e();
                l.computePlaneDistances = function (t, n, r, a) {
                    i(a) || (a = new s());
                    var o = e.subtract(t.center, n, G),
                        u = e.dot(r, o);
                    return (a.start = u - t.radius), (a.stop = u + t.radius), a;
                };
                for (
                    var b = new e(),
                        X = new e(),
                        q = new e(),
                        V = new e(),
                        H = new e(),
                        W = new t(),
                        Y = new Array(8),
                        k = 0;
                    k < 8;
                    ++k
                )
                    Y[k] = new e();
                var Z = new o();
                return (
                    (l.projectTo2D = function (t, n, i) {
                        n = r(n, Z);
                        var a = n.ellipsoid,
                            o = t.center,
                            u = t.radius,
                            s = a.geodeticSurfaceNormal(o, b),
                            E = e.cross(e.UNIT_Z, s, X);
                        e.normalize(E, E);
                        var c = e.cross(s, E, q);
                        e.normalize(c, c),
                            e.multiplyByScalar(s, u, s),
                            e.multiplyByScalar(c, u, c),
                            e.multiplyByScalar(E, u, E);
                        var _ = e.negate(c, H),
                            f = e.negate(E, V),
                            T = Y,
                            R = T[0];
                        e.add(s, c, R),
                            e.add(R, E, R),
                            (R = T[1]),
                            e.add(s, c, R),
                            e.add(R, f, R),
                            (R = T[2]),
                            e.add(s, _, R),
                            e.add(R, f, R),
                            (R = T[3]),
                            e.add(s, _, R),
                            e.add(R, E, R),
                            e.negate(s, s),
                            (R = T[4]),
                            e.add(s, c, R),
                            e.add(R, E, R),
                            (R = T[5]),
                            e.add(s, c, R),
                            e.add(R, f, R),
                            (R = T[6]),
                            e.add(s, _, R),
                            e.add(R, f, R),
                            (R = T[7]),
                            e.add(s, _, R),
                            e.add(R, E, R);
                        for (var h = T.length, d = 0; d < h; ++d) {
                            var A = T[d];
                            e.add(o, A, A);
                            var N = a.cartesianToCartographic(A, W);
                            n.project(N, A);
                        }
                        (i = l.fromPoints(T, i)), (o = i.center);
                        var y = o.x,
                            S = o.y,
                            I = o.z;
                        return (o.x = I), (o.y = y), (o.z = S), i;
                    }),
                    (l.isOccluded = function (e, t) {
                        return !t.isBoundingSphereVisible(e);
                    }),
                    (l.equals = function (t, n) {
                        return (
                            t === n ||
                            (i(t) &&
                                i(n) &&
                                e.equals(t.center, n.center) &&
                                t.radius === n.radius)
                        );
                    }),
                    (l.prototype.intersectPlane = function (e) {
                        return l.intersectPlane(this, e);
                    }),
                    (l.prototype.distanceSquaredTo = function (e) {
                        return l.distanceSquaredTo(this, e);
                    }),
                    (l.prototype.computePlaneDistances = function (e, t, n) {
                        return l.computePlaneDistances(this, e, t, n);
                    }),
                    (l.prototype.isOccluded = function (e) {
                        return l.isOccluded(this, e);
                    }),
                    (l.prototype.equals = function (e) {
                        return l.equals(this, e);
                    }),
                    (l.prototype.clone = function (e) {
                        return l.clone(this, e);
                    }),
                    l
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
                    i = {};
                return (
                    t(i, {
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
                            var i,
                                a = ['webkit', 'moz', 'o', 'ms', 'khtml'],
                                o = 0,
                                u = a.length;
                            o < u;
                            ++o
                        ) {
                            var s = a[o];
                            (i = s + 'RequestFullscreen'),
                                'function' == typeof t[i]
                                    ? ((r.requestFullscreen = i), (n = !0))
                                    : ((i = s + 'RequestFullScreen'),
                                      'function' == typeof t[i] &&
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
                    (i.requestFullscreen = function (e, t) {
                        i.supportsFullscreen() &&
                            e[r.requestFullscreen]({ vrDisplay: t });
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
            function (e, t, n) {
                'use strict';
                function r(e) {
                    for (var t = e.split('.'), n = 0, r = t.length; n < r; ++n)
                        t[n] = parseInt(t[n], 10);
                    return t;
                }
                function i() {
                    if (!t(S) && ((S = !1), !l())) {
                        var e = / Chrome\/([\.0-9]+)/.exec(y.userAgent);
                        null !== e && ((S = !0), (I = r(e[1])));
                    }
                    return S;
                }
                function a() {
                    return i() && I;
                }
                function o() {
                    if (
                        !t(p) &&
                        ((p = !1),
                        !i() && !l() && / Safari\/[\.0-9]+/.test(y.userAgent))
                    ) {
                        var e = / Version\/([\.0-9]+)/.exec(y.userAgent);
                        null !== e && ((p = !0), (m = r(e[1])));
                    }
                    return p;
                }
                function u() {
                    return o() && m;
                }
                function s() {
                    if (!t(M)) {
                        M = !1;
                        var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            y.userAgent,
                        );
                        null !== e &&
                            ((M = !0), (O = r(e[1])), (O.isNightly = !!e[2]));
                    }
                    return M;
                }
                function E() {
                    return s() && O;
                }
                function c() {
                    if (!t(x)) {
                        x = !1;
                        var e;
                        'Microsoft Internet Explorer' === y.appName
                            ? null !==
                                  (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      y.userAgent,
                                  )) && ((x = !0), (C = r(e[1])))
                            : 'Netscape' === y.appName &&
                              null !==
                                  (e =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          y.userAgent,
                                      )) &&
                              ((x = !0), (C = r(e[1])));
                    }
                    return x;
                }
                function _() {
                    return c() && C;
                }
                function l() {
                    if (!t(g)) {
                        g = !1;
                        var e = / Edge\/([\.0-9]+)/.exec(y.userAgent);
                        null !== e && ((g = !0), (v = r(e[1])));
                    }
                    return g;
                }
                function f() {
                    return l() && v;
                }
                function T() {
                    if (!t(U)) {
                        U = !1;
                        var e = /Firefox\/([\.0-9]+)/.exec(y.userAgent);
                        null !== e && ((U = !0), (L = r(e[1])));
                    }
                    return U;
                }
                function R() {
                    return t(w) || (w = /Windows/i.test(y.appVersion)), w;
                }
                function h() {
                    return T() && L;
                }
                function d() {
                    return (
                        t(P) ||
                            (P =
                                'undefined' != typeof PointerEvent &&
                                (!t(y.pointerEnabled) || y.pointerEnabled)),
                        P
                    );
                }
                function A() {
                    if (!t(D)) {
                        var e = document.createElement('canvas');
                        e.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var n = e.style.imageRendering;
                        (D = t(n) && '' !== n), D && (F = n);
                    }
                    return D;
                }
                function N() {
                    return A() ? F : void 0;
                }
                var y;
                y = 'undefined' != typeof navigator ? navigator : {};
                var S,
                    I,
                    p,
                    m,
                    M,
                    O,
                    x,
                    C,
                    g,
                    v,
                    U,
                    L,
                    w,
                    P,
                    F,
                    D,
                    B = {
                        isChrome: i,
                        chromeVersion: a,
                        isSafari: o,
                        safariVersion: u,
                        isWebkit: s,
                        webkitVersion: E,
                        isInternetExplorer: c,
                        internetExplorerVersion: _,
                        isEdge: l,
                        edgeVersion: f,
                        isFirefox: T,
                        firefoxVersion: h,
                        isWindows: R,
                        hardwareConcurrency: e(y.hardwareConcurrency, 3),
                        supportsPointerEvents: d,
                        supportsImageRenderingPixelated: A,
                        imageRenderingValue: N,
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
            function (e, t, n, r, i, a) {
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
                    (o.createArrayBufferView = function (t, n, r, i) {
                        switch (
                            ((r = e(r, 0)),
                            (i = e(
                                i,
                                (n.byteLength - r) / o.getSizeInBytes(t),
                            )),
                            t)
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
                    i(o)
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
            function (e, t, n, r, i, a) {
                'use strict';
                function o(e) {
                    (e = t(e, t.EMPTY_OBJECT)),
                        (this.attributes = e.attributes),
                        (this.indices = e.indices),
                        (this.primitiveType = t(e.primitiveType, a.TRIANGLES)),
                        (this.boundingSphere = e.boundingSphere),
                        (this.geometryType = t(e.geometryType, i.NONE)),
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
                                var i = e.attributes[r],
                                    a =
                                        i.values.length /
                                        i.componentsPerAttribute;
                                t = a;
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
            'Core/IndexDatatype',
            [
                './defined',
                './DeveloperError',
                './freezeObject',
                './Math',
                './WebGLConstants',
            ],
            function (e, t, n, r, i) {
                'use strict';
                var a = {
                    UNSIGNED_BYTE: i.UNSIGNED_BYTE,
                    UNSIGNED_SHORT: i.UNSIGNED_SHORT,
                    UNSIGNED_INT: i.UNSIGNED_INT,
                };
                return (
                    (a.getSizeInBytes = function (e) {
                        switch (e) {
                            case a.UNSIGNED_BYTE:
                                return Uint8Array.BYTES_PER_ELEMENT;
                            case a.UNSIGNED_SHORT:
                                return Uint16Array.BYTES_PER_ELEMENT;
                            case a.UNSIGNED_INT:
                                return Uint32Array.BYTES_PER_ELEMENT;
                        }
                    }),
                    (a.validate = function (t) {
                        return (
                            e(t) &&
                            (t === a.UNSIGNED_BYTE ||
                                t === a.UNSIGNED_SHORT ||
                                t === a.UNSIGNED_INT)
                        );
                    }),
                    (a.createTypedArray = function (e, t) {
                        return e >= r.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(t)
                            : new Uint16Array(t);
                    }),
                    (a.createTypedArrayFromArrayBuffer = function (e, t, n, i) {
                        return e >= r.SIXTY_FOUR_KILOBYTES
                            ? new Uint32Array(t, n, i)
                            : new Uint16Array(t, n, i);
                    }),
                    n(a)
                );
            },
        ),
        define('ThirdParty/earcut-2.1.1', [], function () {
            'use strict';
            function e(e, n, i) {
                i = i || 2;
                var a = n && n.length,
                    o = a ? n[0] * i : e.length,
                    u = t(e, 0, o, i, !0),
                    E = [];
                if (!u) return E;
                var c, _, l, f, T, R, h;
                if ((a && (u = s(e, n, u, i)), e.length > 80 * i)) {
                    (c = l = e[0]), (_ = f = e[1]);
                    for (var d = i; d < o; d += i)
                        (T = e[d]),
                            (R = e[d + 1]),
                            T < c && (c = T),
                            R < _ && (_ = R),
                            T > l && (l = T),
                            R > f && (f = R);
                    h = Math.max(l - c, f - _);
                }
                return r(u, E, i, c, _, h), E;
            }
            function t(e, t, n, r, i) {
                var a, o;
                if (i === C(e, t, n, r) > 0)
                    for (a = t; a < n; a += r) o = M(a, e[a], e[a + 1], o);
                else
                    for (a = n - r; a >= t; a -= r) o = M(a, e[a], e[a + 1], o);
                return o && N(o, o.next) && (O(o), (o = o.next)), o;
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
                            (!N(r, r.next) && 0 !== A(r.prev, r, r.next)))
                    )
                        r = r.next;
                    else {
                        if ((O(r), (r = t = r.prev) === r.next)) return null;
                        n = !0;
                    }
                } while (n || r !== t);
                return t;
            }
            function r(e, t, s, E, c, _, f) {
                if (e) {
                    !f && _ && l(e, E, c, _);
                    for (var T, R, h = e; e.prev !== e.next; )
                        if (
                            ((T = e.prev),
                            (R = e.next),
                            _ ? a(e, E, c, _) : i(e))
                        )
                            t.push(T.i / s),
                                t.push(e.i / s),
                                t.push(R.i / s),
                                O(e),
                                (e = R.next),
                                (h = R.next);
                        else if ((e = R) === h) {
                            f
                                ? 1 === f
                                    ? ((e = o(e, t, s)), r(e, t, s, E, c, _, 2))
                                    : 2 === f && u(e, t, s, E, c, _)
                                : r(n(e), t, s, E, c, _, 1);
                            break;
                        }
                }
            }
            function i(e) {
                var t = e.prev,
                    n = e,
                    r = e.next;
                if (A(t, n, r) >= 0) return !1;
                for (var i = e.next.next; i !== e.prev; ) {
                    if (
                        h(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) &&
                        A(i.prev, i, i.next) >= 0
                    )
                        return !1;
                    i = i.next;
                }
                return !0;
            }
            function a(e, t, n, r) {
                var i = e.prev,
                    a = e,
                    o = e.next;
                if (A(i, a, o) >= 0) return !1;
                for (
                    var u =
                            i.x < a.x
                                ? i.x < o.x
                                    ? i.x
                                    : o.x
                                : a.x < o.x
                                  ? a.x
                                  : o.x,
                        s =
                            i.y < a.y
                                ? i.y < o.y
                                    ? i.y
                                    : o.y
                                : a.y < o.y
                                  ? a.y
                                  : o.y,
                        E =
                            i.x > a.x
                                ? i.x > o.x
                                    ? i.x
                                    : o.x
                                : a.x > o.x
                                  ? a.x
                                  : o.x,
                        c =
                            i.y > a.y
                                ? i.y > o.y
                                    ? i.y
                                    : o.y
                                : a.y > o.y
                                  ? a.y
                                  : o.y,
                        _ = T(u, s, t, n, r),
                        l = T(E, c, t, n, r),
                        f = e.nextZ;
                    f && f.z <= l;

                ) {
                    if (
                        f !== e.prev &&
                        f !== e.next &&
                        h(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) &&
                        A(f.prev, f, f.next) >= 0
                    )
                        return !1;
                    f = f.nextZ;
                }
                for (f = e.prevZ; f && f.z >= _; ) {
                    if (
                        f !== e.prev &&
                        f !== e.next &&
                        h(i.x, i.y, a.x, a.y, o.x, o.y, f.x, f.y) &&
                        A(f.prev, f, f.next) >= 0
                    )
                        return !1;
                    f = f.prevZ;
                }
                return !0;
            }
            function o(e, t, n) {
                var r = e;
                do {
                    var i = r.prev,
                        a = r.next.next;
                    !N(i, a) &&
                        y(i, r, r.next, a) &&
                        I(i, a) &&
                        I(a, i) &&
                        (t.push(i.i / n),
                        t.push(r.i / n),
                        t.push(a.i / n),
                        O(r),
                        O(r.next),
                        (r = e = a)),
                        (r = r.next);
                } while (r !== e);
                return r;
            }
            function u(e, t, i, a, o, u) {
                var s = e;
                do {
                    for (var E = s.next.next; E !== s.prev; ) {
                        if (s.i !== E.i && d(s, E)) {
                            var c = m(s, E);
                            return (
                                (s = n(s, s.next)),
                                (c = n(c, c.next)),
                                r(s, t, i, a, o, u),
                                void r(c, t, i, a, o, u)
                            );
                        }
                        E = E.next;
                    }
                    s = s.next;
                } while (s !== e);
            }
            function s(e, r, i, a) {
                var o,
                    u,
                    s,
                    _,
                    l,
                    f = [];
                for (o = 0, u = r.length; o < u; o++)
                    (s = r[o] * a),
                        (_ = o < u - 1 ? r[o + 1] * a : e.length),
                        (l = t(e, s, _, a, !1)),
                        l === l.next && (l.steiner = !0),
                        f.push(R(l));
                for (f.sort(E), o = 0; o < f.length; o++)
                    c(f[o], i), (i = n(i, i.next));
                return i;
            }
            function E(e, t) {
                return e.x - t.x;
            }
            function c(e, t) {
                if ((t = _(e, t))) {
                    var r = m(t, e);
                    n(r, r.next);
                }
            }
            function _(e, t) {
                var n,
                    r = t,
                    i = e.x,
                    a = e.y,
                    o = -1 / 0;
                do {
                    if (a <= r.y && a >= r.next.y) {
                        var u =
                            r.x +
                            ((a - r.y) * (r.next.x - r.x)) / (r.next.y - r.y);
                        if (u <= i && u > o) {
                            if (((o = u), u === i)) {
                                if (a === r.y) return r;
                                if (a === r.next.y) return r.next;
                            }
                            n = r.x < r.next.x ? r : r.next;
                        }
                    }
                    r = r.next;
                } while (r !== t);
                if (!n) return null;
                if (i === o) return n.prev;
                var s,
                    E = n,
                    c = n.x,
                    _ = n.y,
                    l = 1 / 0;
                for (r = n.next; r !== E; )
                    i >= r.x &&
                        r.x >= c &&
                        h(a < _ ? i : o, a, c, _, a < _ ? o : i, a, r.x, r.y) &&
                        ((s = Math.abs(a - r.y) / (i - r.x)) < l ||
                            (s === l && r.x > n.x)) &&
                        I(r, e) &&
                        ((n = r), (l = s)),
                        (r = r.next);
                return n;
            }
            function l(e, t, n, r) {
                var i = e;
                do {
                    null === i.z && (i.z = T(i.x, i.y, t, n, r)),
                        (i.prevZ = i.prev),
                        (i.nextZ = i.next),
                        (i = i.next);
                } while (i !== e);
                (i.prevZ.nextZ = null), (i.prevZ = null), f(i);
            }
            function f(e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    u,
                    s,
                    E = 1;
                do {
                    for (n = e, e = null, a = null, o = 0; n; ) {
                        for (
                            o++, r = n, u = 0, t = 0;
                            t < E && (u++, (r = r.nextZ));
                            t++
                        );
                        for (s = E; u > 0 || (s > 0 && r); )
                            0 === u
                                ? ((i = r), (r = r.nextZ), s--)
                                : 0 !== s && r
                                  ? n.z <= r.z
                                      ? ((i = n), (n = n.nextZ), u--)
                                      : ((i = r), (r = r.nextZ), s--)
                                  : ((i = n), (n = n.nextZ), u--),
                                a ? (a.nextZ = i) : (e = i),
                                (i.prevZ = a),
                                (a = i);
                        n = r;
                    }
                    (a.nextZ = null), (E *= 2);
                } while (o > 1);
                return e;
            }
            function T(e, t, n, r, i) {
                return (
                    (e = (32767 * (e - n)) / i),
                    (t = (32767 * (t - r)) / i),
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
            function R(e) {
                var t = e,
                    n = e;
                do {
                    t.x < n.x && (n = t), (t = t.next);
                } while (t !== e);
                return n;
            }
            function h(e, t, n, r, i, a, o, u) {
                return (
                    (i - o) * (t - u) - (e - o) * (a - u) >= 0 &&
                    (e - o) * (r - u) - (n - o) * (t - u) >= 0 &&
                    (n - o) * (a - u) - (i - o) * (r - u) >= 0
                );
            }
            function d(e, t) {
                return (
                    e.next.i !== t.i &&
                    e.prev.i !== t.i &&
                    !S(e, t) &&
                    I(e, t) &&
                    I(t, e) &&
                    p(e, t)
                );
            }
            function A(e, t, n) {
                return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
            }
            function N(e, t) {
                return e.x === t.x && e.y === t.y;
            }
            function y(e, t, n, r) {
                return (
                    !!((N(e, t) && N(n, r)) || (N(e, r) && N(n, t))) ||
                    (A(e, t, n) > 0 != A(e, t, r) > 0 &&
                        A(n, r, e) > 0 != A(n, r, t) > 0)
                );
            }
            function S(e, t) {
                var n = e;
                do {
                    if (
                        n.i !== e.i &&
                        n.next.i !== e.i &&
                        n.i !== t.i &&
                        n.next.i !== t.i &&
                        y(n, n.next, e, t)
                    )
                        return !0;
                    n = n.next;
                } while (n !== e);
                return !1;
            }
            function I(e, t) {
                return A(e.prev, e, e.next) < 0
                    ? A(e, t, e.next) >= 0 && A(e, e.prev, t) >= 0
                    : A(e, t, e.prev) < 0 || A(e, e.next, t) < 0;
            }
            function p(e, t) {
                var n = e,
                    r = !1,
                    i = (e.x + t.x) / 2,
                    a = (e.y + t.y) / 2;
                do {
                    n.y > a != n.next.y > a &&
                        i <
                            ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) +
                                n.x &&
                        (r = !r),
                        (n = n.next);
                } while (n !== e);
                return r;
            }
            function m(e, t) {
                var n = new x(e.i, e.x, e.y),
                    r = new x(t.i, t.x, t.y),
                    i = e.next,
                    a = t.prev;
                return (
                    (e.next = t),
                    (t.prev = e),
                    (n.next = i),
                    (i.prev = n),
                    (r.next = n),
                    (n.prev = r),
                    (a.next = r),
                    (r.prev = a),
                    r
                );
            }
            function M(e, t, n, r) {
                var i = new x(e, t, n);
                return (
                    r
                        ? ((i.next = r.next),
                          (i.prev = r),
                          (r.next.prev = i),
                          (r.next = i))
                        : ((i.prev = i), (i.next = i)),
                    i
                );
            }
            function O(e) {
                (e.next.prev = e.prev),
                    (e.prev.next = e.next),
                    e.prevZ && (e.prevZ.nextZ = e.nextZ),
                    e.nextZ && (e.nextZ.prevZ = e.prevZ);
            }
            function x(e, t, n) {
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
            function C(e, t, n, r) {
                for (var i = 0, a = t, o = n - r; a < n; a += r)
                    (i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a);
                return i;
            }
            return (
                (e.deviation = function (e, t, n, r) {
                    var i = t && t.length,
                        a = i ? t[0] * n : e.length,
                        o = Math.abs(C(e, 0, a, n));
                    if (i)
                        for (var u = 0, s = t.length; u < s; u++) {
                            var E = t[u] * n,
                                c = u < s - 1 ? t[u + 1] * n : e.length;
                            o -= Math.abs(C(e, E, c, n));
                        }
                    var _ = 0;
                    for (u = 0; u < r.length; u += 3) {
                        var l = r[u] * n,
                            f = r[u + 1] * n,
                            T = r[u + 2] * n;
                        _ += Math.abs(
                            (e[l] - e[T]) * (e[f + 1] - e[l + 1]) -
                                (e[l] - e[f]) * (e[T + 1] - e[l + 1]),
                        );
                    }
                    return 0 === o && 0 === _ ? 0 : Math.abs((_ - o) / o);
                }),
                (e.flatten = function (e) {
                    for (
                        var t = e[0][0].length,
                            n = { vertices: [], holes: [], dimensions: t },
                            r = 0,
                            i = 0;
                        i < e.length;
                        i++
                    ) {
                        for (var a = 0; a < e[i].length; a++)
                            for (var o = 0; o < t; o++)
                                n.vertices.push(e[i][a][o]);
                        i > 0 && ((r += e[i - 1].length), n.holes.push(r));
                    }
                    return n;
                }),
                e
            );
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
            function (e, t, n, r, i, a) {
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
                    (o.unpack = function (e, r, i) {
                        return (
                            (r = t(r, 0)),
                            n(i) || (i = new o()),
                            (i.x = e[r++]),
                            (i.y = e[r]),
                            i
                        );
                    }),
                    (o.packArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = 2 * r) : (t = new Array(2 * r));
                        for (var i = 0; i < r; ++i) o.pack(e[i], t, 2 * i);
                        return t;
                    }),
                    (o.unpackArray = function (e, t) {
                        var r = e.length;
                        n(t) ? (t.length = r / 2) : (t = new Array(r / 2));
                        for (var i = 0; i < r; i += 2) {
                            var a = i / 2;
                            t[a] = o.unpack(e, i, t[a]);
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
                var E = new o(),
                    c = new o();
                o.angleBetween = function (e, t) {
                    return (
                        o.normalize(e, E),
                        o.normalize(t, c),
                        a.acosClamped(o.dot(E, c))
                    );
                };
                var _ = new o();
                return (
                    (o.mostOrthogonalAxis = function (e, t) {
                        var n = o.normalize(e, _);
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
                    (o.equalsEpsilon = function (e, t, r, i) {
                        return (
                            e === t ||
                            (n(e) &&
                                n(t) &&
                                a.equalsEpsilon(e.x, t.x, r, i) &&
                                a.equalsEpsilon(e.y, t.y, r, i))
                        );
                    }),
                    (o.ZERO = i(new o(0, 0))),
                    (o.UNIT_X = i(new o(1, 0))),
                    (o.UNIT_Y = i(new o(0, 1))),
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
            function (e, t, n, r, i, a, o, u, s, E, c, _, l) {
                'use strict';
                var f = new n(),
                    T = new n(),
                    R = {};
                (R.computeArea2D = function (e) {
                    for (
                        var t = e.length, n = 0, r = t - 1, i = 0;
                        i < t;
                        r = i++
                    ) {
                        var a = e[r],
                            o = e[i];
                        n += a.x * o.y - o.x * a.y;
                    }
                    return 0.5 * n;
                }),
                    (R.computeWindingOrder2D = function (e) {
                        return R.computeArea2D(e) > 0
                            ? l.COUNTER_CLOCKWISE
                            : l.CLOCKWISE;
                    }),
                    (R.triangulate = function (n, r) {
                        var i = t.packArray(n);
                        return e(i, r, 2);
                    });
                var h = new n(),
                    d = new n(),
                    A = new n(),
                    N = new n(),
                    y = new n(),
                    S = new n(),
                    I = new n();
                return (
                    (R.computeSubdivision = function (e, t, r, u) {
                        u = a(u, c.RADIANS_PER_DEGREE);
                        var l,
                            f = r.slice(0),
                            T = t.length,
                            R = new Array(3 * T),
                            p = 0;
                        for (l = 0; l < T; l++) {
                            var m = t[l];
                            (R[p++] = m.x), (R[p++] = m.y), (R[p++] = m.z);
                        }
                        for (
                            var M = [],
                                O = {},
                                x = e.maximumRadius,
                                C = c.chordLength(u, x),
                                g = C * C;
                            f.length > 0;

                        ) {
                            var v,
                                U,
                                L = f.pop(),
                                w = f.pop(),
                                P = f.pop(),
                                F = n.fromArray(R, 3 * P, h),
                                D = n.fromArray(R, 3 * w, d),
                                B = n.fromArray(R, 3 * L, A),
                                z = n.multiplyByScalar(n.normalize(F, N), x, N),
                                G = n.multiplyByScalar(n.normalize(D, y), x, y),
                                b = n.multiplyByScalar(n.normalize(B, S), x, S),
                                X = n.magnitudeSquared(n.subtract(z, G, I)),
                                q = n.magnitudeSquared(n.subtract(G, b, I)),
                                V = n.magnitudeSquared(n.subtract(b, z, I)),
                                H = Math.max(X, q, V);
                            H > g
                                ? X === H
                                    ? ((v =
                                          Math.min(P, w) +
                                          ' ' +
                                          Math.max(P, w)),
                                      (l = O[v]),
                                      o(l) ||
                                          ((U = n.add(F, D, I)),
                                          n.multiplyByScalar(U, 0.5, U),
                                          R.push(U.x, U.y, U.z),
                                          (l = R.length / 3 - 1),
                                          (O[v] = l)),
                                      f.push(P, l, L),
                                      f.push(l, w, L))
                                    : q === H
                                      ? ((v =
                                            Math.min(w, L) +
                                            ' ' +
                                            Math.max(w, L)),
                                        (l = O[v]),
                                        o(l) ||
                                            ((U = n.add(D, B, I)),
                                            n.multiplyByScalar(U, 0.5, U),
                                            R.push(U.x, U.y, U.z),
                                            (l = R.length / 3 - 1),
                                            (O[v] = l)),
                                        f.push(w, l, P),
                                        f.push(l, L, P))
                                      : V === H &&
                                        ((v =
                                            Math.min(L, P) +
                                            ' ' +
                                            Math.max(L, P)),
                                        (l = O[v]),
                                        o(l) ||
                                            ((U = n.add(B, F, I)),
                                            n.multiplyByScalar(U, 0.5, U),
                                            R.push(U.x, U.y, U.z),
                                            (l = R.length / 3 - 1),
                                            (O[v] = l)),
                                        f.push(L, l, w),
                                        f.push(l, P, w))
                                : (M.push(P), M.push(w), M.push(L));
                        }
                        return new s({
                            attributes: {
                                position: new E({
                                    componentDatatype: i.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: R,
                                }),
                            },
                            indices: M,
                            primitiveType: _.TRIANGLES,
                        });
                    }),
                    (R.scaleToGeodeticHeight = function (e, t, r, i) {
                        r = a(r, u.WGS84);
                        var s = f,
                            E = T;
                        if (((t = a(t, 0)), (i = a(i, !0)), o(e)))
                            for (var c = e.length, _ = 0; _ < c; _ += 3)
                                n.fromArray(e, _, E),
                                    i && (E = r.scaleToGeodeticSurface(E, E)),
                                    0 !== t &&
                                        ((s = r.geodeticSurfaceNormal(E, s)),
                                        n.multiplyByScalar(s, t, s),
                                        n.add(E, s, E)),
                                    (e[_] = E.x),
                                    (e[_ + 1] = E.y),
                                    (e[_ + 2] = E.z);
                        return e;
                    }),
                    R
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
            function (e, t, n, r, i, a) {
                'use strict';
                function o(e, t, r, i) {
                    (this[0] = n(e, 0)),
                        (this[1] = n(r, 0)),
                        (this[2] = n(t, 0)),
                        (this[3] = n(i, 0));
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
                    (o.unpack = function (e, t, i) {
                        return (
                            (t = n(t, 0)),
                            r(i) || (i = new o()),
                            (i[0] = e[t++]),
                            (i[1] = e[t++]),
                            (i[2] = e[t++]),
                            (i[3] = e[t++]),
                            i
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
                    (o.fromArray = function (e, t, i) {
                        return (
                            (t = n(t, 0)),
                            r(i) || (i = new o()),
                            (i[0] = e[t]),
                            (i[1] = e[t + 1]),
                            (i[2] = e[t + 2]),
                            (i[3] = e[t + 3]),
                            i
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
                            i = Math.sin(e);
                        return r(t)
                            ? ((t[0] = n),
                              (t[1] = i),
                              (t[2] = -i),
                              (t[3] = n),
                              t)
                            : new o(n, -i, i, n);
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
                            i = e[r],
                            a = e[r + 1];
                        return (n.x = i), (n.y = a), n;
                    }),
                    (o.setColumn = function (e, t, n, r) {
                        r = o.clone(e, r);
                        var i = 2 * t;
                        return (r[i] = n.x), (r[i + 1] = n.y), r;
                    }),
                    (o.getRow = function (e, t, n) {
                        var r = e[t],
                            i = e[t + 2];
                        return (n.x = r), (n.y = i), n;
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
                            i = e[0] * t[2] + e[2] * t[3],
                            a = e[1] * t[0] + e[3] * t[1],
                            o = e[1] * t[2] + e[3] * t[3];
                        return (
                            (n[0] = r), (n[1] = a), (n[2] = i), (n[3] = o), n
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
                            i = e[1] * t.x + e[3] * t.y;
                        return (n.x = r), (n.y = i), n;
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
                            i = e[1],
                            a = e[3];
                        return (
                            (t[0] = n), (t[1] = r), (t[2] = i), (t[3] = a), t
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
                    (o.IDENTITY = a(new o(1, 0, 0, 1))),
                    (o.ZERO = a(new o(0, 0, 0, 0))),
                    (o.COLUMN0ROW0 = 0),
                    (o.COLUMN0ROW1 = 1),
                    (o.COLUMN1ROW0 = 2),
                    (o.COLUMN1ROW1 = 3),
                    i(o.prototype, {
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
            function (e, t, n, r, i, a, o, u) {
                'use strict';
                function s(t, n, r, i, a, u, s) {
                    var E = Math.cos(n),
                        c = i * E,
                        _ = r * E,
                        l = Math.sin(n),
                        R = i * l,
                        A = r * l;
                    (T = d.project(t, T)), (T = e.subtract(T, h, T));
                    var N = o.fromRotation(n, f);
                    (T = o.multiplyByVector(N, T, T)),
                        (T = e.add(T, h, T)),
                        (t = d.unproject(T, t)),
                        (u -= 1),
                        (s -= 1);
                    var y = t.latitude,
                        S = y + u * A,
                        I = y - c * s,
                        p = y - c * s + u * A,
                        m = Math.max(y, S, I, p),
                        M = Math.min(y, S, I, p),
                        O = t.longitude,
                        x = O + u * _,
                        C = O + s * R,
                        g = O + s * R + u * _;
                    return {
                        north: m,
                        south: M,
                        east: Math.max(O, x, C, g),
                        west: Math.min(O, x, C, g),
                        granYCos: c,
                        granYSin: R,
                        granXCos: _,
                        granXSin: A,
                        nwCorner: t,
                    };
                }
                var E = Math.cos,
                    c = Math.sin,
                    _ = Math.sqrt,
                    l = {};
                l.computePosition = function (e, t, r, i, a) {
                    var o = e.ellipsoid.radiiSquared,
                        u = e.nwCorner,
                        s = e.rectangle,
                        l = u.latitude - e.granYCos * t + r * e.granXSin,
                        f = E(l),
                        T = c(l),
                        R = o.z * T,
                        h = u.longitude + t * e.granYSin + r * e.granXCos,
                        d = f * E(h),
                        A = f * c(h),
                        N = o.x * d,
                        y = o.y * A,
                        S = _(N * d + y * A + R * T);
                    if (
                        ((i.x = N / S),
                        (i.y = y / S),
                        (i.z = R / S),
                        n(e.vertexFormat) && e.vertexFormat.st)
                    ) {
                        var I = e.stNwCorner;
                        n(I)
                            ? ((l =
                                  I.latitude -
                                  e.stGranYCos * t +
                                  r * e.stGranXSin),
                              (h =
                                  I.longitude +
                                  t * e.stGranYSin +
                                  r * e.stGranXCos),
                              (a.x = (h - e.stWest) * e.lonScalar),
                              (a.y = (l - e.stSouth) * e.latScalar))
                            : ((a.x = (h - s.west) * e.lonScalar),
                              (a.y = (l - s.south) * e.latScalar));
                    }
                };
                var f = new o(),
                    T = new e(),
                    R = new t(),
                    h = new e(),
                    d = new i();
                return (
                    (l.computeOptions = function (e, t, n, r) {
                        var i,
                            o,
                            E,
                            c,
                            _,
                            l = e._granularity,
                            f = e._ellipsoid,
                            T = e._surfaceHeight,
                            A = e._rotation,
                            N = e._stRotation,
                            y = e._extrudedHeight,
                            S = t.east,
                            I = t.west,
                            p = t.north,
                            m = t.south,
                            M = p - m;
                        I > S
                            ? ((_ = a.TWO_PI - I + S),
                              (i = Math.ceil(_ / l) + 1),
                              (o = Math.ceil(M / l) + 1),
                              (E = _ / (i - 1)),
                              (c = M / (o - 1)))
                            : ((_ = S - I),
                              (i = Math.ceil(_ / l) + 1),
                              (o = Math.ceil(M / l) + 1),
                              (E = _ / (i - 1)),
                              (c = M / (o - 1))),
                            (n = u.northwest(t, n));
                        var O = u.center(t, R);
                        (0 === A && 0 === N) ||
                            (O.longitude < n.longitude &&
                                (O.longitude += a.TWO_PI),
                            (h = d.project(O, h)));
                        var x = c,
                            C = E,
                            g = {
                                granYCos: x,
                                granYSin: 0,
                                granXCos: C,
                                granXSin: 0,
                                ellipsoid: f,
                                surfaceHeight: T,
                                extrudedHeight: y,
                                nwCorner: n,
                                rectangle: t,
                                width: i,
                                height: o,
                            };
                        if (0 !== A) {
                            var v = s(n, A, E, c, O, i, o);
                            (p = v.north),
                                (m = v.south),
                                (S = v.east),
                                (I = v.west),
                                (g.granYCos = v.granYCos),
                                (g.granYSin = v.granYSin),
                                (g.granXCos = v.granXCos),
                                (g.granXSin = v.granXSin),
                                (t.north = p),
                                (t.south = m),
                                (t.east = S),
                                (t.west = I);
                        }
                        if (0 !== N) {
                            (A -= N), (r = u.northwest(t, r));
                            var U = s(r, A, E, c, O, i, o);
                            (g.stGranYCos = U.granYCos),
                                (g.stGranXCos = U.granXCos),
                                (g.stGranYSin = U.granYSin),
                                (g.stGranXSin = U.granXSin),
                                (g.stNwCorner = r),
                                (g.stWest = U.west),
                                (g.stSouth = U.south);
                        }
                        return g;
                    }),
                    l
                );
            },
        ),
        define(
            'Core/RectangleOutlineGeometry',
            [
                './BoundingSphere',
                './Cartesian3',
                './Cartographic',
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
                './PolygonPipeline',
                './PrimitiveType',
                './Rectangle',
                './RectangleGeometryLibrary',
            ],
            function (e, t, n, r, i, a, o, u, s, E, c, _, l, f, T, R, h) {
                'use strict';
                function d(e) {
                    var t,
                        n = e.size,
                        i = e.height,
                        a = e.width,
                        o = new Float64Array(3 * n),
                        u = 0,
                        l = 0,
                        f = I;
                    for (t = 0; t < a; t++)
                        h.computePosition(e, l, t, f),
                            (o[u++] = f.x),
                            (o[u++] = f.y),
                            (o[u++] = f.z);
                    for (t = a - 1, l = 1; l < i; l++)
                        h.computePosition(e, l, t, f),
                            (o[u++] = f.x),
                            (o[u++] = f.y),
                            (o[u++] = f.z);
                    for (l = i - 1, t = a - 2; t >= 0; t--)
                        h.computePosition(e, l, t, f),
                            (o[u++] = f.x),
                            (o[u++] = f.y),
                            (o[u++] = f.z);
                    for (t = 0, l = i - 2; l > 0; l--)
                        h.computePosition(e, l, t, f),
                            (o[u++] = f.x),
                            (o[u++] = f.y),
                            (o[u++] = f.z);
                    for (
                        var R = (o.length / 3) * 2,
                            d = _.createTypedArray(o.length / 3, R),
                            A = 0,
                            N = 0;
                        N < o.length / 3 - 1;
                        N++
                    )
                        (d[A++] = N), (d[A++] = N + 1);
                    (d[A++] = o.length / 3 - 1), (d[A++] = 0);
                    var y = new s({
                        attributes: new c(),
                        primitiveType: T.LINES,
                    });
                    return (
                        (y.attributes.position = new E({
                            componentDatatype: r.DOUBLE,
                            componentsPerAttribute: 3,
                            values: o,
                        })),
                        (y.indices = d),
                        y
                    );
                }
                function A(e) {
                    var t = e.surfaceHeight,
                        n = e.extrudedHeight,
                        r = e.ellipsoid,
                        i = Math.min(n, t),
                        a = Math.max(n, t),
                        o = d(e);
                    if (l.equalsEpsilon(i, a, l.EPSILON10)) return o;
                    var u = e.height,
                        s = e.width,
                        E = f.scaleToGeodeticHeight(
                            o.attributes.position.values,
                            a,
                            r,
                            !1,
                        ),
                        c = E.length,
                        T = new Float64Array(2 * c);
                    T.set(E);
                    var R = f.scaleToGeodeticHeight(
                        o.attributes.position.values,
                        i,
                        r,
                    );
                    T.set(R, c), (o.attributes.position.values = T);
                    var h = (T.length / 3) * 2 + 8,
                        A = _.createTypedArray(T.length / 3, h);
                    c = T.length / 6;
                    for (var N = 0, y = 0; y < c - 1; y++)
                        (A[N++] = y),
                            (A[N++] = y + 1),
                            (A[N++] = y + c),
                            (A[N++] = y + c + 1);
                    return (
                        (A[N++] = c - 1),
                        (A[N++] = 0),
                        (A[N++] = c + c - 1),
                        (A[N++] = c),
                        (A[N++] = 0),
                        (A[N++] = c),
                        (A[N++] = s - 1),
                        (A[N++] = c + s - 1),
                        (A[N++] = s + u - 2),
                        (A[N++] = s + u - 2 + c),
                        (A[N++] = 2 * s + u - 3),
                        (A[N++] = 2 * s + u - 3 + c),
                        (o.indices = A),
                        o
                    );
                }
                function N(e) {
                    e = i(e, i.EMPTY_OBJECT);
                    var t = e.rectangle,
                        n = i(e.granularity, l.RADIANS_PER_DEGREE),
                        r = i(e.ellipsoid, u.WGS84),
                        a = i(e.height, 0),
                        o = i(e.rotation, 0),
                        s = e.extrudedHeight;
                    (this._rectangle = t),
                        (this._granularity = n),
                        (this._ellipsoid = r),
                        (this._surfaceHeight = a),
                        (this._rotation = o),
                        (this._extrudedHeight = s),
                        (this._workerName = 'createRectangleOutlineGeometry');
                }
                var y = new e(),
                    S = new e(),
                    I = new t(),
                    p = new R();
                (N.packedLength = R.packedLength + u.packedLength + 5),
                    (N.pack = function (e, t, n) {
                        return (
                            (n = i(n, 0)),
                            R.pack(e._rectangle, t, n),
                            (n += R.packedLength),
                            u.pack(e._ellipsoid, t, n),
                            (n += u.packedLength),
                            (t[n++] = e._granularity),
                            (t[n++] = e._surfaceHeight),
                            (t[n++] = e._rotation),
                            (t[n++] = a(e._extrudedHeight) ? 1 : 0),
                            (t[n] = i(e._extrudedHeight, 0)),
                            t
                        );
                    });
                var m = new R(),
                    M = u.clone(u.UNIT_SPHERE),
                    O = {
                        rectangle: m,
                        ellipsoid: M,
                        granularity: void 0,
                        height: void 0,
                        rotation: void 0,
                        extrudedHeight: void 0,
                    };
                N.unpack = function (e, t, n) {
                    t = i(t, 0);
                    var r = R.unpack(e, t, m);
                    t += R.packedLength;
                    var o = u.unpack(e, t, M);
                    t += u.packedLength;
                    var s = e[t++],
                        E = e[t++],
                        c = e[t++],
                        _ = e[t++],
                        l = e[t];
                    return a(n)
                        ? ((n._rectangle = R.clone(r, n._rectangle)),
                          (n._ellipsoid = u.clone(o, n._ellipsoid)),
                          (n._surfaceHeight = E),
                          (n._rotation = c),
                          (n._extrudedHeight = _ ? l : void 0),
                          n)
                        : ((O.granularity = s),
                          (O.height = E),
                          (O.rotation = c),
                          (O.extrudedHeight = _ ? l : void 0),
                          new N(O));
                };
                var x = new n();
                return (
                    (N.createGeometry = function (t) {
                        var n = R.clone(t._rectangle, p),
                            r = t._ellipsoid,
                            i = t._surfaceHeight,
                            o = t._extrudedHeight,
                            u = h.computeOptions(t, n, x);
                        u.size = 2 * u.width + 2 * u.height - 4;
                        var E, c;
                        if (
                            ((n = t._rectangle),
                            !l.equalsEpsilon(n.north, n.south, l.EPSILON10) &&
                                !l.equalsEpsilon(n.east, n.west, l.EPSILON10))
                        ) {
                            if (a(o)) {
                                E = A(u);
                                var _ = e.fromRectangle3D(n, r, i, S),
                                    N = e.fromRectangle3D(n, r, o, y);
                                c = e.union(_, N);
                            } else
                                (E = d(u)),
                                    (E.attributes.position.values =
                                        f.scaleToGeodeticHeight(
                                            E.attributes.position.values,
                                            i,
                                            r,
                                            !1,
                                        )),
                                    (c = e.fromRectangle3D(n, r, i));
                            return new s({
                                attributes: E.attributes,
                                indices: E.indices,
                                primitiveType: T.LINES,
                                boundingSphere: c,
                            });
                        }
                    }),
                    N
                );
            },
        ),
        define(
            'Workers/createRectangleOutlineGeometry',
            [
                '../Core/defined',
                '../Core/Ellipsoid',
                '../Core/Rectangle',
                '../Core/RectangleOutlineGeometry',
            ],
            function (e, t, n, r) {
                'use strict';
                function i(i, a) {
                    return (
                        e(a) && (i = r.unpack(i, a)),
                        (i._ellipsoid = t.clone(i._ellipsoid)),
                        (i._rectangle = n.clone(i._rectangle)),
                        r.createGeometry(i)
                    );
                }
                return i;
            },
        );
})();
