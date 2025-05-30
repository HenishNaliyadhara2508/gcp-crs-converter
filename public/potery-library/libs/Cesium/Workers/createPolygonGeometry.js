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

/**
  @license
  when.js - https://github.com/cujojs/when

  MIT License (c) copyright B Cavalier & J Hann

 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 1.7.1
 */

/**
@license
sprintf.js from the php.js project - https://github.com/kvz/phpjs
Directly from https://github.com/kvz/phpjs/blob/master/functions/strings/sprintf.js

php.js is copyright 2012 Kevin van Zonneveld.

Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
(http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
(http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jack, Jonas
Raoni Soares Silva (http://www.jsfromhell.com), Philip Peterson, Legaev
Andrey, Ates Goral (http://magnetiq.com), Alex, Ratheous, Martijn Wieringa,
Rafa? Kukawski (http://blog.kukawski.pl), lmeyrick
(https://sourceforge.net/projects/bcmath-js/), Nate, Philippe Baumann,
Enrique Gonzalez, Webtoolkit.info (http://www.webtoolkit.info/), Carlos R.
L. Rodrigues (http://www.jsfromhell.com), Ash Searle
(http://hexmen.com/blog/), Jani Hartikainen, travc, Ole Vrijenhoek,
Erkekjetter, Michael Grier, Rafa? Kukawski (http://kukawski.pl), Johnny
Mast (http://www.phpvrouwen.nl), T.Wild, d3x,
http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
Rafa? Kukawski (http://blog.kukawski.pl/), stag019, pilus, WebDevHobo
(http://webdevhobo.blogspot.com/), marrtins, GeekFG
(http://geekfg.blogspot.com), Andrea Giammarchi
(http://webreflection.blogspot.com), Arpad Ray (mailto:arpad@php.net),
gorthaur, Paul Smith, Tim de Koning (http://www.kingsquare.nl), Joris, Oleg
Eremeev, Steve Hilder, majak, gettimeofday, KELAN, Josh Fraser
(http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
Marc Palau, Martin
(http://www.erlenwiese.de/), Breaking Par Consulting Inc
(http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
Chris, Mirek Slugen, saulius, Alfonso Jimenez
(http://www.alfonsojimenez.com), Diplom@t (http://difane.com/), felix,
Mailfaker (http://www.weedem.fr/), Tyler Akins (http://rumkin.com), Caio
Ariede (http://caioariede.com), Robin, Kankrelune
(http://www.webfaktory.info/), Karol Kowalski, Imgen Tata
(http://www.myipdf.com/), mdsjack (http://www.mdsjack.bo.it), Dreamer,
Felix Geisendoerfer (http://www.debuggable.com/felix), Lars Fischer, AJ,
David, Aman Gupta, Michael White, Public Domain
(http://www.json.org/json2.js), Steven Levithan
(http://blog.stevenlevithan.com), Sakimori, Pellentesque Malesuada,
Thunder.m, Dj (http://phpjs.org/functions/htmlentities:425#comment_134018),
Steve Clay, David James, Francois, class_exists, nobbler, T. Wild, Itsacon
(http://www.itsacon.net/), date, Ole Vrijenhoek (http://www.nervous.nl/),
Fox, Raphael (Ao RUDLER), Marco, noname, Mateusz "loonquawl" Zalega, Frank
Forte, Arno, ger, mktime, john (http://www.jd-tech.net), Nick Kolosov
(http://sammy.ru), marc andreu, Scott Cariss, Douglas Crockford
(http://javascript.crockford.com), madipta, Slawomir Kaniecki,
ReverseSyntax, Nathan, Alex Wilson, kenneth, Bayron Guevara, Adam Wallner
(http://web2.bitbaro.hu/), paulo kuong, jmweb, Lincoln Ramsay, djmix,
Pyerre, Jon Hohle, Thiago Mata (http://thiagomata.blog.com), lmeyrick
(https://sourceforge.net/projects/bcmath-js/this.), Linuxworld, duncan,
Gilbert, Sanjoy Roy, Shingo, sankai, Oskar Larsson H?gfeldt
(http://oskar-lh.name/), Denny Wardhana, 0m3r, Everlasto, Subhasis Deb,
josh, jd, Pier Paolo Ramon (http://www.mastersoup.com/), P, merabi, Soren
Hansen, Eugene Bulkin (http://doubleaw.com/), Der Simon
(http://innerdom.sourceforge.net/), echo is bad, Ozh, XoraX
(http://www.xorax.info), EdorFaus, JB, J A R, Marc Jansen, Francesco, LH,
Stoyan Kyosev (http://www.svest.org/), nord_ua, omid
(http://phpjs.org/functions/380:380#comment_137122), Brad Touesnard, MeEtc
(http://yass.meetcweb.com), Peter-Paul Koch
(http://www.quirksmode.org/js/beat.html), Olivier Louvignes
(http://mg-crea.com/), T0bsn, Tim Wiel, Bryan Elliott, Jalal Berrami,
Martin, JT, David Randall, Thomas Beaucourt (http://www.webapp.fr), taith,
vlado houba, Pierre-Luc Paour, Kristof Coomans (SCK-CEN Belgian Nucleair
Research Centre), Martin Pool, Kirk Strobeck, Rick Waldron, Brant Messenger
(http://www.brantmessenger.com/), Devan Penner-Woelk, Saulo Vallory, Wagner
B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
(http://carrot.org/), Christoph, Daniel Esteban, strftime, Mick@el, rezna,
Simon Willison (http://simonwillison.net), Anton Ongson, Gabriel Paderni,
Marco van Oort, penutbutterjelly, Philipp Lenssen, Bjorn Roesbeke
(http://www.bjornroesbeke.be/), Bug?, Eric Nagel, Tomasz Wesolowski,
Evertjan Garretsen, Bobby Drake, Blues (http://tech.bluesmoon.info/), Luke
Godfrey, Pul, uestla, Alan C, Ulrich, Rafal Kukawski, Yves Sucaet,
sowberry, Norman "zEh" Fuchs, hitwork, Zahlii, johnrembo, Nick Callen,
Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Brian Tafoya
(http://www.premasolutions.com/), Philippe Jausions
(http://pear.php.net/user/jausions), Aidan Lister
(http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
strcmp, Taras Bogach, jpfle, Alexander Ermolaev
(http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
(http://www.pedrotainha.com), James, Arnout Kazemier
(http://www.3rd-Eden.com), Chris McMacken, gabriel paderni, Yannoo,
FGFEmperor, baris ozdil, Tod Gentille, Greg Frazier, jakes, 3D-GRAF, Allan
Jensen (http://www.winternet.no), Howard Yeend, Benjamin Lupton, davook,
daniel airton wermann (http://wermann.com.br), Atli T¨®r, Maximusya, Ryan
W Tenney (http://ryan.10e.us), Alexander M Beedie, fearphage
(http://http/my.opera.com/fearphage/), Nathan Sepulveda, Victor, Matteo,
Billy, stensi, Cord, Manish, T.J. Leahy, Riddler
(http://www.frontierwebdev.com/), Rafa? Kukawski, FremyCompany, Matt
Bradley, Tim de Koning, Luis Salazar (http://www.freaky-media.com/), Diogo
Resende, Rival, Andrej Pavlovic, Garagoth, Le Torbi
(http://www.letorbi.de/), Dino, Josep Sanz (http://www.ws3.es/), rem,
Russell Walker (http://www.nbill.co.uk/), Jamie Beck
(http://www.terabit.ca/), setcookie, Michael, YUI Library:
http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Blues at
http://hacks.bluesmoon.info/strftime/strftime.js, Ben
(http://benblume.co.uk/), DtTvB
(http://dt.in.th/2008-09-16.string-length-in-bytes.html), Andreas, William,
meo, incidence, Cagri Ekin, Amirouche, Amir Habibi
(http://www.residence-mixte.com/), Luke Smith (http://lucassmith.name),
Kheang Hok Chin (http://www.distantia.ca/), Jay Klehr, Lorenzo Pisani,
Tony, Yen-Wei Liu, Greenseed, mk.keck, Leslie Hoare, dude, booeyOH, Ben
Bryan

Licensed under the MIT (MIT-LICENSE.txt) license.

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * @license
 *
 * Grauw URI utilities
 *
 * See: http://hg.grauw.nl/grauw-lib/file/tip/src/uri.js
 *
 * @author Laurens Holst (http://www.grauw.nl/)
 *
 *   Copyright 2012 Laurens Holst
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 *
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
                var c = new o(),
                    l = new o();
                o.angleBetween = function (e, t) {
                    o.normalize(e, c), o.normalize(t, l);
                    var n = o.dot(c, l),
                        r = o.magnitude(o.cross(c, l, c));
                    return Math.atan2(r, n);
                };
                var f = new o();
                (o.mostOrthogonalAxis = function (e, t) {
                    var n = o.normalize(e, f);
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
                            c = i * s - a * u,
                            l = a * o - r * s,
                            f = r * u - i * o;
                        return (n.x = c), (n.y = l), (n.z = f), n;
                    }),
                    (o.fromDegrees = function (e, t, n, r, i) {
                        return (
                            (e = a.toRadians(e)),
                            (t = a.toRadians(t)),
                            o.fromRadians(e, t, n, r, i)
                        );
                    });
                var h = new o(),
                    d = new o(),
                    p = new o(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (o.fromRadians = function (e, r, i, a, u) {
                        i = t(i, 0);
                        var s = n(a) ? a.radiiSquared : p,
                            c = Math.cos(r);
                        (h.x = c * Math.cos(e)),
                            (h.y = c * Math.sin(e)),
                            (h.z = Math.sin(r)),
                            (h = o.normalize(h, h)),
                            o.multiplyComponents(s, h, d);
                        var l = Math.sqrt(o.dot(h, d));
                        return (
                            (d = o.divideByScalar(d, l, d)),
                            (h = o.multiplyByScalar(h, i, h)),
                            n(u) || (u = new o()),
                            o.add(d, h, u)
                        );
                    }),
                    (o.fromDegreesArray = function (e, t, r) {
                        var i = e.length;
                        n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                        for (var a = 0; a < i; a += 2) {
                            var u = e[a],
                                s = e[a + 1],
                                c = a / 2;
                            r[c] = o.fromDegrees(u, s, 0, t, r[c]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArray = function (e, t, r) {
                        var i = e.length;
                        n(r) ? (r.length = i / 2) : (r = new Array(i / 2));
                        for (var a = 0; a < i; a += 2) {
                            var u = e[a],
                                s = e[a + 1],
                                c = a / 2;
                            r[c] = o.fromRadians(u, s, 0, t, r[c]);
                        }
                        return r;
                    }),
                    (o.fromDegreesArrayHeights = function (e, t, r) {
                        var i = e.length;
                        n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                        for (var a = 0; a < i; a += 3) {
                            var u = e[a],
                                s = e[a + 1],
                                c = e[a + 2],
                                l = a / 3;
                            r[l] = o.fromDegrees(u, s, c, t, r[l]);
                        }
                        return r;
                    }),
                    (o.fromRadiansArrayHeights = function (e, t, r) {
                        var i = e.length;
                        n(r) ? (r.length = i / 3) : (r = new Array(i / 3));
                        for (var a = 0; a < i; a += 3) {
                            var u = e[a],
                                s = e[a + 1],
                                c = e[a + 2],
                                l = a / 3;
                            r[l] = o.fromRadians(u, s, c, t, r[l]);
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
                function i(n, i, u, s, c) {
                    var l = n.x,
                        f = n.y,
                        h = n.z,
                        d = i.x,
                        p = i.y,
                        m = i.z,
                        E = l * l * d * d,
                        y = f * f * p * p,
                        _ = h * h * m * m,
                        v = E + y + _,
                        T = Math.sqrt(1 / v),
                        R = e.multiplyByScalar(n, T, a);
                    if (v < s) return isFinite(T) ? e.clone(R, c) : void 0;
                    var A = u.x,
                        g = u.y,
                        S = u.z,
                        N = o;
                    (N.x = R.x * A * 2),
                        (N.y = R.y * g * 2),
                        (N.z = R.z * S * 2);
                    var O,
                        x,
                        w,
                        I,
                        M,
                        C,
                        P,
                        D,
                        L,
                        b,
                        U,
                        F = ((1 - T) * e.magnitude(n)) / (0.5 * e.magnitude(N)),
                        B = 0;
                    do {
                        (F -= B),
                            (w = 1 / (1 + F * A)),
                            (I = 1 / (1 + F * g)),
                            (M = 1 / (1 + F * S)),
                            (C = w * w),
                            (P = I * I),
                            (D = M * M),
                            (L = C * w),
                            (b = P * I),
                            (U = D * M),
                            (O = E * C + y * P + _ * D - 1),
                            (x = E * L * A + y * b * g + _ * U * S);
                        B = O / (-2 * x);
                    } while (Math.abs(O) > r.EPSILON12);
                    return t(c)
                        ? ((c.x = l * w), (c.y = f * I), (c.z = h * M), c)
                        : new e(l * w, f * I, h * M);
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
                    c = new e(),
                    l = new e(),
                    f = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                    h = new e(
                        1 / 40680631590769,
                        1 / 40680631590769,
                        1 / 40408299984661.445,
                    ),
                    d = a.EPSILON1;
                return (
                    (u.fromCartesian = function (t, n, i) {
                        var p = r(n) ? n.oneOverRadii : f,
                            m = r(n) ? n.oneOverRadiiSquared : h,
                            E = r(n) ? n._centerToleranceSquared : d,
                            y = o(t, p, m, E, c);
                        if (r(y)) {
                            var _ = e.multiplyComponents(y, m, s);
                            _ = e.normalize(_, _);
                            var v = e.subtract(t, y, l),
                                T = Math.atan2(_.y, _.x),
                                R = Math.asin(_.z),
                                A = a.sign(e.dot(v, t)) * e.magnitude(v);
                            return r(i)
                                ? ((i.longitude = T),
                                  (i.latitude = R),
                                  (i.height = A),
                                  i)
                                : new u(T, R, A);
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
            function (e, t, n, r, i, a, o, u, s, c) {
                'use strict';
                function l(t, n, i, a) {
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
                function f(e, t, n) {
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
                a(f.prototype, {
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
                    (f.clone = function (t, n) {
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
                                : new f(r.x, r.y, r.z);
                        }
                    }),
                    (f.fromCartesian3 = function (e, t) {
                        return (
                            i(t) || (t = new f()),
                            i(e) ? (l(t, e.x, e.y, e.z), t) : t
                        );
                    }),
                    (f.WGS84 = u(new f(6378137, 6378137, 6356752.314245179))),
                    (f.UNIT_SPHERE = u(new f(1, 1, 1))),
                    (f.MOON = u(
                        new f(s.LUNAR_RADIUS, s.LUNAR_RADIUS, s.LUNAR_RADIUS),
                    )),
                    (f.prototype.clone = function (e) {
                        return f.clone(this, e);
                    }),
                    (f.packedLength = e.packedLength),
                    (f.pack = function (t, n, i) {
                        return (i = r(i, 0)), e.pack(t._radii, n, i), n;
                    }),
                    (f.unpack = function (t, n, i) {
                        n = r(n, 0);
                        var a = e.unpack(t, n);
                        return f.fromCartesian3(a, i);
                    }),
                    (f.prototype.geocentricSurfaceNormal = e.normalize),
                    (f.prototype.geodeticSurfaceNormalCartographic = function (
                        t,
                        n,
                    ) {
                        var r = t.longitude,
                            a = t.latitude,
                            o = Math.cos(a),
                            u = o * Math.cos(r),
                            s = o * Math.sin(r),
                            c = Math.sin(a);
                        return (
                            i(n) || (n = new e()),
                            (n.x = u),
                            (n.y = s),
                            (n.z = c),
                            e.normalize(n, n)
                        );
                    }),
                    (f.prototype.geodeticSurfaceNormal = function (t, n) {
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
                var h = new e(),
                    d = new e();
                (f.prototype.cartographicToCartesian = function (t, n) {
                    var r = h,
                        a = d;
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
                    (f.prototype.cartographicArrayToCartesianArray = function (
                        e,
                        t,
                    ) {
                        var n = e.length;
                        i(t) ? (t.length = n) : (t = new Array(n));
                        for (var r = 0; r < n; r++)
                            t[r] = this.cartographicToCartesian(e[r], t[r]);
                        return t;
                    });
                var p = new e(),
                    m = new e(),
                    E = new e();
                return (
                    (f.prototype.cartesianToCartographic = function (n, r) {
                        var a = this.scaleToGeodeticSurface(n, m);
                        if (i(a)) {
                            var o = this.geodeticSurfaceNormal(a, p),
                                u = e.subtract(n, a, E),
                                c = Math.atan2(o.y, o.x),
                                l = Math.asin(o.z),
                                f = s.sign(e.dot(u, n)) * e.magnitude(u);
                            return i(r)
                                ? ((r.longitude = c),
                                  (r.latitude = l),
                                  (r.height = f),
                                  r)
                                : new t(c, l, f);
                        }
                    }),
                    (f.prototype.cartesianArrayToCartographicArray = function (
                        e,
                        t,
                    ) {
                        var n = e.length;
                        i(t) ? (t.length = n) : (t = new Array(n));
                        for (var r = 0; r < n; ++r)
                            t[r] = this.cartesianToCartographic(e[r], t[r]);
                        return t;
                    }),
                    (f.prototype.scaleToGeodeticSurface = function (e, t) {
                        return c(
                            e,
                            this._oneOverRadii,
                            this._oneOverRadiiSquared,
                            this._centerToleranceSquared,
                            t,
                        );
                    }),
                    (f.prototype.scaleToGeocentricSurface = function (t, n) {
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
                    (f.prototype.transformPositionToScaledSpace = function (
                        t,
                        n,
                    ) {
                        return (
                            i(n) || (n = new e()),
                            e.multiplyComponents(t, this._oneOverRadii, n)
                        );
                    }),
                    (f.prototype.transformPositionFromScaledSpace = function (
                        t,
                        n,
                    ) {
                        return (
                            i(n) || (n = new e()),
                            e.multiplyComponents(t, this._radii, n)
                        );
                    }),
                    (f.prototype.equals = function (t) {
                        return (
                            this === t ||
                            (i(t) && e.equals(this._radii, t._radii))
                        );
                    }),
                    (f.prototype.toString = function () {
                        return this._radii.toString();
                    }),
                    (f.prototype.getSurfaceNormalIntersectionWithZAxis =
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
                var c = new o(),
                    l = new o();
                o.angleBetween = function (e, t) {
                    return (
                        o.normalize(e, c),
                        o.normalize(t, l),
                        a.acosClamped(o.dot(c, l))
                    );
                };
                var f = new o();
                return (
                    (o.mostOrthogonalAxis = function (e, t) {
                        var n = o.normalize(e, f);
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
                                c = Number.MAX_VALUE,
                                l = -Number.MAX_VALUE,
                                f = 0,
                                h = e.length;
                            f < h;
                            f++
                        ) {
                            var d = e[f];
                            (n = Math.min(n, d.longitude)),
                                (i = Math.max(i, d.longitude)),
                                (c = Math.min(c, d.latitude)),
                                (l = Math.max(l, d.latitude));
                            var p =
                                d.longitude >= 0
                                    ? d.longitude
                                    : d.longitude + u.TWO_PI;
                            (a = Math.min(a, p)), (o = Math.max(o, p));
                        }
                        return (
                            i - n > o - a &&
                                ((n = a),
                                (i = o),
                                i > u.PI && (i -= u.TWO_PI),
                                n > u.PI && (n -= u.TWO_PI)),
                            r(t)
                                ? ((t.west = n),
                                  (t.south = c),
                                  (t.east = i),
                                  (t.north = l),
                                  t)
                                : new s(n, c, i, l)
                        );
                    }),
                    (s.fromCartesianArray = function (e, t, i) {
                        t = n(t, a.WGS84);
                        for (
                            var o = Number.MAX_VALUE,
                                c = -Number.MAX_VALUE,
                                l = Number.MAX_VALUE,
                                f = -Number.MAX_VALUE,
                                h = Number.MAX_VALUE,
                                d = -Number.MAX_VALUE,
                                p = 0,
                                m = e.length;
                            p < m;
                            p++
                        ) {
                            var E = t.cartesianToCartographic(e[p]);
                            (o = Math.min(o, E.longitude)),
                                (c = Math.max(c, E.longitude)),
                                (h = Math.min(h, E.latitude)),
                                (d = Math.max(d, E.latitude));
                            var y =
                                E.longitude >= 0
                                    ? E.longitude
                                    : E.longitude + u.TWO_PI;
                            (l = Math.min(l, y)), (f = Math.max(f, y));
                        }
                        return (
                            c - o > f - l &&
                                ((o = l),
                                (c = f),
                                c > u.PI && (c -= u.TWO_PI),
                                o > u.PI && (o -= u.TWO_PI)),
                            r(i)
                                ? ((i.west = o),
                                  (i.south = h),
                                  (i.east = c),
                                  (i.north = d),
                                  i)
                                : new s(o, h, c, d)
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
                            c = t.west;
                        i < a && o > 0
                            ? (i += u.TWO_PI)
                            : o < c && i > 0 && (o += u.TWO_PI),
                            i < a && c < 0
                                ? (c += u.TWO_PI)
                                : o < c && a < 0 && (a += u.TWO_PI);
                        var l = u.negativePiToPi(Math.max(a, c)),
                            f = u.negativePiToPi(Math.min(i, o));
                        if (!((e.west < e.east || t.west < t.east) && f <= l)) {
                            var h = Math.max(e.south, t.south),
                                d = Math.min(e.north, t.north);
                            if (!(h >= d))
                                return r(n)
                                    ? ((n.west = l),
                                      (n.south = h),
                                      (n.east = f),
                                      (n.north = d),
                                      n)
                                    : new s(l, h, f, d);
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
                            c = t.west;
                        i < a && o > 0
                            ? (i += u.TWO_PI)
                            : o < c && i > 0 && (o += u.TWO_PI),
                            i < a && c < 0
                                ? (c += u.TWO_PI)
                                : o < c && a < 0 && (a += u.TWO_PI);
                        var l = u.convertLongitudeRange(Math.min(a, c)),
                            f = u.convertLongitudeRange(Math.max(i, o));
                        return (
                            (n.west = l),
                            (n.south = Math.min(e.south, t.south)),
                            (n.east = f),
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
                var c = new e();
                return (
                    (s.subsample = function (e, t, i, o) {
                        (t = n(t, a.WGS84)), (i = n(i, 0)), r(o) || (o = []);
                        var l = 0,
                            f = e.north,
                            h = e.south,
                            d = e.east,
                            p = e.west,
                            m = c;
                        (m.height = i),
                            (m.longitude = p),
                            (m.latitude = f),
                            (o[l] = t.cartographicToCartesian(m, o[l])),
                            l++,
                            (m.longitude = d),
                            (o[l] = t.cartographicToCartesian(m, o[l])),
                            l++,
                            (m.latitude = h),
                            (o[l] = t.cartographicToCartesian(m, o[l])),
                            l++,
                            (m.longitude = p),
                            (o[l] = t.cartographicToCartesian(m, o[l])),
                            l++,
                            (m.latitude = f < 0 ? f : h > 0 ? h : 0);
                        for (var E = 1; E < 8; ++E)
                            (m.longitude = -Math.PI + E * u.PI_OVER_TWO),
                                s.contains(e, m) &&
                                    ((o[l] = t.cartographicToCartesian(
                                        m,
                                        o[l],
                                    )),
                                    l++);
                        return (
                            0 === m.latitude &&
                                ((m.longitude = p),
                                (o[l] = t.cartographicToCartesian(m, o[l])),
                                l++,
                                (m.longitude = d),
                                (o[l] = t.cartographicToCartesian(m, o[l])),
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
            'Core/BoundingRectangle',
            [
                './Cartesian2',
                './Cartographic',
                './Check',
                './defaultValue',
                './defined',
                './GeographicProjection',
                './Intersect',
                './Rectangle',
            ],
            function (e, t, n, r, i, a, o, u) {
                'use strict';
                function s(e, t, n, i) {
                    (this.x = r(e, 0)),
                        (this.y = r(t, 0)),
                        (this.width = r(n, 0)),
                        (this.height = r(i, 0));
                }
                (s.packedLength = 4),
                    (s.pack = function (e, t, n) {
                        return (
                            (n = r(n, 0)),
                            (t[n++] = e.x),
                            (t[n++] = e.y),
                            (t[n++] = e.width),
                            (t[n] = e.height),
                            t
                        );
                    }),
                    (s.unpack = function (e, t, n) {
                        return (
                            (t = r(t, 0)),
                            i(n) || (n = new s()),
                            (n.x = e[t++]),
                            (n.y = e[t++]),
                            (n.width = e[t++]),
                            (n.height = e[t]),
                            n
                        );
                    }),
                    (s.fromPoints = function (e, t) {
                        if ((i(t) || (t = new s()), !i(e) || 0 === e.length))
                            return (
                                (t.x = 0),
                                (t.y = 0),
                                (t.width = 0),
                                (t.height = 0),
                                t
                            );
                        for (
                            var n = e.length,
                                r = e[0].x,
                                a = e[0].y,
                                o = e[0].x,
                                u = e[0].y,
                                c = 1;
                            c < n;
                            c++
                        ) {
                            var l = e[c],
                                f = l.x,
                                h = l.y;
                            (r = Math.min(f, r)),
                                (o = Math.max(f, o)),
                                (a = Math.min(h, a)),
                                (u = Math.max(h, u));
                        }
                        return (
                            (t.x = r),
                            (t.y = a),
                            (t.width = o - r),
                            (t.height = u - a),
                            t
                        );
                    });
                var c = new a(),
                    l = new t(),
                    f = new t();
                return (
                    (s.fromRectangle = function (t, n, a) {
                        if ((i(a) || (a = new s()), !i(t)))
                            return (
                                (a.x = 0),
                                (a.y = 0),
                                (a.width = 0),
                                (a.height = 0),
                                a
                            );
                        n = r(n, c);
                        var o = n.project(u.southwest(t, l)),
                            h = n.project(u.northeast(t, f));
                        return (
                            e.subtract(h, o, h),
                            (a.x = o.x),
                            (a.y = o.y),
                            (a.width = h.x),
                            (a.height = h.y),
                            a
                        );
                    }),
                    (s.clone = function (e, t) {
                        if (i(e))
                            return i(t)
                                ? ((t.x = e.x),
                                  (t.y = e.y),
                                  (t.width = e.width),
                                  (t.height = e.height),
                                  t)
                                : new s(e.x, e.y, e.width, e.height);
                    }),
                    (s.union = function (e, t, n) {
                        i(n) || (n = new s());
                        var r = Math.min(e.x, t.x),
                            a = Math.min(e.y, t.y),
                            o = Math.max(e.x + e.width, t.x + t.width),
                            u = Math.max(e.y + e.height, t.y + t.height);
                        return (
                            (n.x = r),
                            (n.y = a),
                            (n.width = o - r),
                            (n.height = u - a),
                            n
                        );
                    }),
                    (s.expand = function (e, t, n) {
                        n = s.clone(e, n);
                        var r = t.x - n.x,
                            i = t.y - n.y;
                        return (
                            r > n.width
                                ? (n.width = r)
                                : r < 0 && ((n.width -= r), (n.x = t.x)),
                            i > n.height
                                ? (n.height = i)
                                : i < 0 && ((n.height -= i), (n.y = t.y)),
                            n
                        );
                    }),
                    (s.intersect = function (e, t) {
                        var n = e.x,
                            r = e.y,
                            i = t.x,
                            a = t.y;
                        return n > i + t.width ||
                            n + e.width < i ||
                            r + e.height < a ||
                            r > a + t.height
                            ? o.OUTSIDE
                            : o.INTERSECTING;
                    }),
                    (s.equals = function (e, t) {
                        return (
                            e === t ||
                            (i(e) &&
                                i(t) &&
                                e.x === t.x &&
                                e.y === t.y &&
                                e.width === t.width &&
                                e.height === t.height)
                        );
                    }),
                    (s.prototype.clone = function (e) {
                        return s.clone(this, e);
                    }),
                    (s.prototype.intersect = function (e) {
                        return s.intersect(this, e);
                    }),
                    (s.prototype.equals = function (e) {
                        return s.equals(this, e);
                    }),
                    s
                );
            },
        ),
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
                function s(e, t, r, i, a, o, u, s, c) {
                    (this[0] = n(e, 0)),
                        (this[1] = n(i, 0)),
                        (this[2] = n(u, 0)),
                        (this[3] = n(t, 0)),
                        (this[4] = n(a, 0)),
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
                        var r = e[s.getElementIndex(m[n], p[n])];
                        t += 2 * r * r;
                    }
                    return Math.sqrt(t);
                }
                function f(e, t) {
                    for (var n = u.EPSILON15, r = 0, i = 1, a = 0; a < 3; ++a) {
                        var o = Math.abs(e[s.getElementIndex(m[a], p[a])]);
                        o > r && ((i = a), (r = o));
                    }
                    var c = 1,
                        l = 0,
                        f = p[i],
                        h = m[i];
                    if (Math.abs(e[s.getElementIndex(h, f)]) > n) {
                        var d,
                            E = e[s.getElementIndex(h, h)],
                            y = e[s.getElementIndex(f, f)],
                            _ = e[s.getElementIndex(h, f)],
                            v = (E - y) / 2 / _;
                        (d =
                            v < 0
                                ? -1 / (-v + Math.sqrt(1 + v * v))
                                : 1 / (v + Math.sqrt(1 + v * v))),
                            (c = 1 / Math.sqrt(1 + d * d)),
                            (l = d * c);
                    }
                    return (
                        (t = s.clone(s.IDENTITY, t)),
                        (t[s.getElementIndex(f, f)] = t[
                            s.getElementIndex(h, h)
                        ] =
                            c),
                        (t[s.getElementIndex(h, f)] = l),
                        (t[s.getElementIndex(f, h)] = -l),
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
                            c = e.y * e.z,
                            l = e.y * e.w,
                            f = e.z * e.z,
                            h = e.z * e.w,
                            d = e.w * e.w,
                            p = n - u - f + d,
                            m = 2 * (i - h),
                            E = 2 * (a + l),
                            y = 2 * (i + h),
                            _ = -n + u - f + d,
                            v = 2 * (c - o),
                            T = 2 * (a - l),
                            R = 2 * (c + o),
                            A = -n - u + f + d;
                        return r(t)
                            ? ((t[0] = p),
                              (t[1] = y),
                              (t[2] = T),
                              (t[3] = m),
                              (t[4] = _),
                              (t[5] = R),
                              (t[6] = E),
                              (t[7] = v),
                              (t[8] = A),
                              t)
                            : new s(p, m, E, y, _, v, T, R, A);
                    }),
                    (s.fromHeadingPitchRoll = function (e, t) {
                        var n = Math.cos(-e.pitch),
                            i = Math.cos(-e.heading),
                            a = Math.cos(e.roll),
                            o = Math.sin(-e.pitch),
                            u = Math.sin(-e.heading),
                            c = Math.sin(e.roll),
                            l = n * i,
                            f = -a * u + c * o * i,
                            h = c * u + a * o * i,
                            d = n * u,
                            p = a * i + c * o * u,
                            m = -c * i + a * o * u,
                            E = -o,
                            y = c * n,
                            _ = a * n;
                        return r(t)
                            ? ((t[0] = l),
                              (t[1] = d),
                              (t[2] = E),
                              (t[3] = f),
                              (t[4] = p),
                              (t[5] = y),
                              (t[6] = h),
                              (t[7] = m),
                              (t[8] = _),
                              t)
                            : new s(l, f, h, d, p, m, E, y, _);
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
                var h = new e();
                s.getScale = function (t, n) {
                    return (
                        (n.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], h),
                        )),
                        (n.y = e.magnitude(
                            e.fromElements(t[3], t[4], t[5], h),
                        )),
                        (n.z = e.magnitude(
                            e.fromElements(t[6], t[7], t[8], h),
                        )),
                        n
                    );
                };
                var d = new e();
                (s.getMaximumScale = function (t) {
                    return s.getScale(t, d), e.maximumComponent(d);
                }),
                    (s.multiply = function (e, t, n) {
                        var r = e[0] * t[0] + e[3] * t[1] + e[6] * t[2],
                            i = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                            a = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                            o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                            u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                            s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                            c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                            l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                            f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                        return (
                            (n[0] = r),
                            (n[1] = i),
                            (n[2] = a),
                            (n[3] = o),
                            (n[4] = u),
                            (n[5] = s),
                            (n[6] = c),
                            (n[7] = l),
                            (n[8] = f),
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
                            c = e[5],
                            l = e[8];
                        return (
                            (t[0] = n),
                            (t[1] = r),
                            (t[2] = i),
                            (t[3] = a),
                            (t[4] = o),
                            (t[5] = u),
                            (t[6] = s),
                            (t[7] = c),
                            (t[8] = l),
                            t
                        );
                    });
                var p = [1, 0, 0],
                    m = [2, 2, 1],
                    E = new s(),
                    y = new s();
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
                                h = (t.diagonal = s.clone(e, t.diagonal)),
                                d = n * c(h);
                            a < 10 && l(h) > d;

                        )
                            f(h, E),
                                s.transpose(E, y),
                                s.multiply(h, E, h),
                                s.multiply(y, h, h),
                                s.multiply(o, E, o),
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
                            c = e[8];
                        return (
                            t * (a * c - s * o) +
                            i * (s * r - n * c) +
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
                            c = e[6],
                            l = e[7],
                            f = e[8],
                            h = s.determinant(e);
                        (t[0] = o * f - l * u),
                            (t[1] = l * i - r * f),
                            (t[2] = r * u - o * i),
                            (t[3] = c * u - a * f),
                            (t[4] = n * f - c * i),
                            (t[5] = a * i - n * u),
                            (t[6] = a * l - c * o),
                            (t[7] = c * r - n * l),
                            (t[8] = n * o - a * r);
                        var d = 1 / h;
                        return s.multiplyByScalar(t, d, t);
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
            function (e, t, n, r, i, a, o, u, s, c) {
                'use strict';
                function l(e, t, n, i, a, o, u, s, c, l, f, h, d, p, m, E) {
                    (this[0] = r(e, 0)),
                        (this[1] = r(a, 0)),
                        (this[2] = r(c, 0)),
                        (this[3] = r(d, 0)),
                        (this[4] = r(t, 0)),
                        (this[5] = r(o, 0)),
                        (this[6] = r(l, 0)),
                        (this[7] = r(p, 0)),
                        (this[8] = r(n, 0)),
                        (this[9] = r(u, 0)),
                        (this[10] = r(f, 0)),
                        (this[11] = r(m, 0)),
                        (this[12] = r(i, 0)),
                        (this[13] = r(s, 0)),
                        (this[14] = r(h, 0)),
                        (this[15] = r(E, 0));
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
                            i(n) || (n = new l()),
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
                    (l.fromRotationTranslation = function (t, n, a) {
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
                        i(r) || (r = new l());
                        var a = n.x,
                            o = n.y,
                            u = n.z,
                            s = t.x * t.x,
                            c = t.x * t.y,
                            f = t.x * t.z,
                            h = t.x * t.w,
                            d = t.y * t.y,
                            p = t.y * t.z,
                            m = t.y * t.w,
                            E = t.z * t.z,
                            y = t.z * t.w,
                            _ = t.w * t.w,
                            v = s - d - E + _,
                            T = 2 * (c - y),
                            R = 2 * (f + m),
                            A = 2 * (c + y),
                            g = -s + d - E + _,
                            S = 2 * (p - h),
                            N = 2 * (f - m),
                            O = 2 * (p + h),
                            x = -s - d + E + _;
                        return (
                            (r[0] = v * a),
                            (r[1] = A * a),
                            (r[2] = N * a),
                            (r[3] = 0),
                            (r[4] = T * o),
                            (r[5] = g * o),
                            (r[6] = O * o),
                            (r[7] = 0),
                            (r[8] = R * u),
                            (r[9] = S * u),
                            (r[10] = x * u),
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
                var f = new e(),
                    h = new e(),
                    d = new e();
                (l.fromCamera = function (t, n) {
                    var r = t.position,
                        a = t.direction,
                        o = t.up;
                    e.normalize(a, f),
                        e.normalize(e.cross(f, o, h), h),
                        e.normalize(e.cross(h, f, d), d);
                    var u = h.x,
                        s = h.y,
                        c = h.z,
                        p = f.x,
                        m = f.y,
                        E = f.z,
                        y = d.x,
                        _ = d.y,
                        v = d.z,
                        T = r.x,
                        R = r.y,
                        A = r.z,
                        g = u * -T + s * -R + c * -A,
                        S = y * -T + _ * -R + v * -A,
                        N = p * T + m * R + E * A;
                    return i(n)
                        ? ((n[0] = u),
                          (n[1] = y),
                          (n[2] = -p),
                          (n[3] = 0),
                          (n[4] = s),
                          (n[5] = _),
                          (n[6] = -m),
                          (n[7] = 0),
                          (n[8] = c),
                          (n[9] = v),
                          (n[10] = -E),
                          (n[11] = 0),
                          (n[12] = g),
                          (n[13] = S),
                          (n[14] = N),
                          (n[15] = 1),
                          n)
                        : new l(
                              u,
                              s,
                              c,
                              g,
                              y,
                              _,
                              v,
                              S,
                              -p,
                              -m,
                              -E,
                              N,
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
                        i,
                    ) {
                        var a = Math.tan(0.5 * e),
                            o = 1 / a,
                            u = o / t,
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
                    (l.computeOrthographicOffCenter = function (
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
                            c = 1 / (a - i),
                            l = -(t + e) * u,
                            f = -(r + n) * s,
                            h = -(a + i) * c;
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
                            (o[13] = f),
                            (o[14] = h),
                            (o[15] = 1),
                            o
                        );
                    }),
                    (l.computePerspectiveOffCenter = function (
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
                            c = (t + e) / (t - e),
                            l = (r + n) / (r - n),
                            f = -(a + i) / (a - i),
                            h = (-2 * a * i) / (a - i);
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
                            (o[10] = f),
                            (o[11] = -1),
                            (o[12] = 0),
                            (o[13] = 0),
                            (o[14] = h),
                            (o[15] = 0),
                            o
                        );
                    }),
                    (l.computeInfinitePerspectiveOffCenter = function (
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
                            c = (r + n) / (r - n),
                            l = -2 * i;
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
                            (a[14] = l),
                            (a[15] = 0),
                            a
                        );
                    }),
                    (l.computeViewportTransformation = function (e, t, n, i) {
                        e = r(e, r.EMPTY_OBJECT);
                        var a = r(e.x, 0),
                            o = r(e.y, 0),
                            u = r(e.width, 0),
                            s = r(e.height, 0);
                        (t = r(t, 0)), (n = r(n, 1));
                        var c = 0.5 * u,
                            l = 0.5 * s,
                            f = 0.5 * (n - t),
                            h = c,
                            d = l,
                            p = f,
                            m = a + c,
                            E = o + l,
                            y = t + f;
                        return (
                            (i[0] = h),
                            (i[1] = 0),
                            (i[2] = 0),
                            (i[3] = 0),
                            (i[4] = 0),
                            (i[5] = d),
                            (i[6] = 0),
                            (i[7] = 0),
                            (i[8] = 0),
                            (i[9] = 0),
                            (i[10] = p),
                            (i[11] = 0),
                            (i[12] = m),
                            (i[13] = E),
                            (i[14] = y),
                            (i[15] = 1),
                            i
                        );
                    }),
                    (l.computeView = function (t, n, r, i, a) {
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
                    (l.toArray = function (e, t) {
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
                    (l.getElementIndex = function (e, t) {
                        return 4 * e + t;
                    }),
                    (l.getColumn = function (e, t, n) {
                        var r = 4 * t,
                            i = e[r],
                            a = e[r + 1],
                            o = e[r + 2],
                            u = e[r + 3];
                        return (n.x = i), (n.y = a), (n.z = o), (n.w = u), n;
                    }),
                    (l.setColumn = function (e, t, n, r) {
                        r = l.clone(e, r);
                        var i = 4 * t;
                        return (
                            (r[i] = n.x),
                            (r[i + 1] = n.y),
                            (r[i + 2] = n.z),
                            (r[i + 3] = n.w),
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
                            i = e[t + 4],
                            a = e[t + 8],
                            o = e[t + 12];
                        return (n.x = r), (n.y = i), (n.z = a), (n.w = o), n;
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
                var p = new e();
                l.getScale = function (t, n) {
                    return (
                        (n.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], p),
                        )),
                        (n.y = e.magnitude(
                            e.fromElements(t[4], t[5], t[6], p),
                        )),
                        (n.z = e.magnitude(
                            e.fromElements(t[8], t[9], t[10], p),
                        )),
                        n
                    );
                };
                var m = new e();
                (l.getMaximumScale = function (t) {
                    return l.getScale(t, m), e.maximumComponent(m);
                }),
                    (l.multiply = function (e, t, n) {
                        var r = e[0],
                            i = e[1],
                            a = e[2],
                            o = e[3],
                            u = e[4],
                            s = e[5],
                            c = e[6],
                            l = e[7],
                            f = e[8],
                            h = e[9],
                            d = e[10],
                            p = e[11],
                            m = e[12],
                            E = e[13],
                            y = e[14],
                            _ = e[15],
                            v = t[0],
                            T = t[1],
                            R = t[2],
                            A = t[3],
                            g = t[4],
                            S = t[5],
                            N = t[6],
                            O = t[7],
                            x = t[8],
                            w = t[9],
                            I = t[10],
                            M = t[11],
                            C = t[12],
                            P = t[13],
                            D = t[14],
                            L = t[15],
                            b = r * v + u * T + f * R + m * A,
                            U = i * v + s * T + h * R + E * A,
                            F = a * v + c * T + d * R + y * A,
                            B = o * v + l * T + p * R + _ * A,
                            z = r * g + u * S + f * N + m * O,
                            G = i * g + s * S + h * N + E * O,
                            q = a * g + c * S + d * N + y * O,
                            V = o * g + l * S + p * N + _ * O,
                            W = r * x + u * w + f * I + m * M,
                            H = i * x + s * w + h * I + E * M,
                            X = a * x + c * w + d * I + y * M,
                            k = o * x + l * w + p * I + _ * M,
                            Y = r * C + u * P + f * D + m * L,
                            Z = i * C + s * P + h * D + E * L,
                            j = a * C + c * P + d * D + y * L,
                            K = o * C + l * P + p * D + _ * L;
                        return (
                            (n[0] = b),
                            (n[1] = U),
                            (n[2] = F),
                            (n[3] = B),
                            (n[4] = z),
                            (n[5] = G),
                            (n[6] = q),
                            (n[7] = V),
                            (n[8] = W),
                            (n[9] = H),
                            (n[10] = X),
                            (n[11] = k),
                            (n[12] = Y),
                            (n[13] = Z),
                            (n[14] = j),
                            (n[15] = K),
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
                            i = e[1],
                            a = e[2],
                            o = e[4],
                            u = e[5],
                            s = e[6],
                            c = e[8],
                            l = e[9],
                            f = e[10],
                            h = e[12],
                            d = e[13],
                            p = e[14],
                            m = t[0],
                            E = t[1],
                            y = t[2],
                            _ = t[4],
                            v = t[5],
                            T = t[6],
                            R = t[8],
                            A = t[9],
                            g = t[10],
                            S = t[12],
                            N = t[13],
                            O = t[14],
                            x = r * m + o * E + c * y,
                            w = i * m + u * E + l * y,
                            I = a * m + s * E + f * y,
                            M = r * _ + o * v + c * T,
                            C = i * _ + u * v + l * T,
                            P = a * _ + s * v + f * T,
                            D = r * R + o * A + c * g,
                            L = i * R + u * A + l * g,
                            b = a * R + s * A + f * g,
                            U = r * S + o * N + c * O + h,
                            F = i * S + u * N + l * O + d,
                            B = a * S + s * N + f * O + p;
                        return (
                            (n[0] = x),
                            (n[1] = w),
                            (n[2] = I),
                            (n[3] = 0),
                            (n[4] = M),
                            (n[5] = C),
                            (n[6] = P),
                            (n[7] = 0),
                            (n[8] = D),
                            (n[9] = L),
                            (n[10] = b),
                            (n[11] = 0),
                            (n[12] = U),
                            (n[13] = F),
                            (n[14] = B),
                            (n[15] = 1),
                            n
                        );
                    }),
                    (l.multiplyByMatrix3 = function (e, t, n) {
                        var r = e[0],
                            i = e[1],
                            a = e[2],
                            o = e[4],
                            u = e[5],
                            s = e[6],
                            c = e[8],
                            l = e[9],
                            f = e[10],
                            h = t[0],
                            d = t[1],
                            p = t[2],
                            m = t[3],
                            E = t[4],
                            y = t[5],
                            _ = t[6],
                            v = t[7],
                            T = t[8],
                            R = r * h + o * d + c * p,
                            A = i * h + u * d + l * p,
                            g = a * h + s * d + f * p,
                            S = r * m + o * E + c * y,
                            N = i * m + u * E + l * y,
                            O = a * m + s * E + f * y,
                            x = r * _ + o * v + c * T,
                            w = i * _ + u * v + l * T,
                            I = a * _ + s * v + f * T;
                        return (
                            (n[0] = R),
                            (n[1] = A),
                            (n[2] = g),
                            (n[3] = 0),
                            (n[4] = S),
                            (n[5] = N),
                            (n[6] = O),
                            (n[7] = 0),
                            (n[8] = x),
                            (n[9] = w),
                            (n[10] = I),
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
                var E = new e();
                (l.multiplyByUniformScale = function (e, t, n) {
                    return (
                        (E.x = t),
                        (E.y = t),
                        (E.z = t),
                        l.multiplyByScale(e, E, n)
                    );
                }),
                    (l.multiplyByScale = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z;
                        return 1 === r && 1 === i && 1 === a
                            ? l.clone(e, n)
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
                    (l.multiplyByVector = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = t.w,
                            u = e[0] * r + e[4] * i + e[8] * a + e[12] * o,
                            s = e[1] * r + e[5] * i + e[9] * a + e[13] * o,
                            c = e[2] * r + e[6] * i + e[10] * a + e[14] * o,
                            l = e[3] * r + e[7] * i + e[11] * a + e[15] * o;
                        return (n.x = u), (n.y = s), (n.z = c), (n.w = l), n;
                    }),
                    (l.multiplyByPointAsVector = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = e[0] * r + e[4] * i + e[8] * a,
                            u = e[1] * r + e[5] * i + e[9] * a,
                            s = e[2] * r + e[6] * i + e[10] * a;
                        return (n.x = o), (n.y = u), (n.z = s), n;
                    }),
                    (l.multiplyByPoint = function (e, t, n) {
                        var r = t.x,
                            i = t.y,
                            a = t.z,
                            o = e[0] * r + e[4] * i + e[8] * a + e[12],
                            u = e[1] * r + e[5] * i + e[9] * a + e[13],
                            s = e[2] * r + e[6] * i + e[10] * a + e[14];
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
                    (l.equalsEpsilon = function (e, t, n) {
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
                var y = new s(),
                    _ = new s(),
                    v = new t(),
                    T = new t(0, 0, 0, 1);
                return (
                    (l.inverse = function (e, n) {
                        if (
                            s.equalsEpsilon(
                                l.getRotation(e, y),
                                _,
                                u.EPSILON7,
                            ) &&
                            t.equals(l.getRow(e, 3, v), T)
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
                            f = e[1],
                            h = e[5],
                            d = e[9],
                            p = e[13],
                            m = e[2],
                            E = e[6],
                            R = e[10],
                            A = e[14],
                            g = e[3],
                            S = e[7],
                            N = e[11],
                            O = e[15],
                            x = R * O,
                            w = A * N,
                            I = E * O,
                            M = A * S,
                            C = E * N,
                            P = R * S,
                            D = m * O,
                            L = A * g,
                            b = m * N,
                            U = R * g,
                            F = m * S,
                            B = E * g,
                            z = x * h + M * d + C * p - (w * h + I * d + P * p),
                            G = w * f + D * d + U * p - (x * f + L * d + b * p),
                            q = I * f + L * h + F * p - (M * f + D * h + B * p),
                            V = P * f + b * h + B * d - (C * f + U * h + F * d),
                            W = w * i + I * a + P * o - (x * i + M * a + C * o),
                            H = x * r + L * a + b * o - (w * r + D * a + U * o),
                            X = M * r + D * i + B * o - (I * r + L * i + F * o),
                            k = C * r + U * i + F * a - (P * r + b * i + B * a);
                        (x = a * p),
                            (w = o * d),
                            (I = i * p),
                            (M = o * h),
                            (C = i * d),
                            (P = a * h),
                            (D = r * p),
                            (L = o * f),
                            (b = r * d),
                            (U = a * f),
                            (F = r * h),
                            (B = i * f);
                        var Y = x * S + M * N + C * O - (w * S + I * N + P * O),
                            Z = w * g + D * N + U * O - (x * g + L * N + b * O),
                            j = I * g + L * S + F * O - (M * g + D * S + B * O),
                            K = P * g + b * S + B * N - (C * g + U * S + F * N),
                            J = I * R + P * A + w * E - (C * A + x * E + M * R),
                            Q = b * A + x * m + L * R - (D * R + U * A + w * m),
                            $ = D * E + B * A + M * m - (F * A + I * m + L * E),
                            ee =
                                F * R + C * m + U * E - (b * E + B * R + P * m),
                            te = r * z + i * G + a * q + o * V;
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
                            (n[4] = W * te),
                            (n[5] = H * te),
                            (n[6] = X * te),
                            (n[7] = k * te),
                            (n[8] = Y * te),
                            (n[9] = Z * te),
                            (n[10] = j * te),
                            (n[11] = K * te),
                            (n[12] = J * te),
                            (n[13] = Q * te),
                            (n[14] = $ * te),
                            (n[15] = ee * te),
                            n
                        );
                    }),
                    (l.inverseTransformation = function (e, t) {
                        var n = e[0],
                            r = e[1],
                            i = e[2],
                            a = e[4],
                            o = e[5],
                            u = e[6],
                            s = e[8],
                            c = e[9],
                            l = e[10],
                            f = e[12],
                            h = e[13],
                            d = e[14],
                            p = -n * f - r * h - i * d,
                            m = -a * f - o * h - u * d,
                            E = -s * f - c * h - l * d;
                        return (
                            (t[0] = n),
                            (t[1] = a),
                            (t[2] = s),
                            (t[3] = 0),
                            (t[4] = r),
                            (t[5] = o),
                            (t[6] = c),
                            (t[7] = 0),
                            (t[8] = i),
                            (t[9] = u),
                            (t[10] = l),
                            (t[11] = 0),
                            (t[12] = p),
                            (t[13] = m),
                            (t[14] = E),
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
                    a(l.prototype, {
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
            function (e, t, n, r, i, a, o, u, s, c, l, f) {
                'use strict';
                function h(t, n) {
                    (this.center = e.clone(r(t, e.ZERO))),
                        (this.radius = r(n, 0));
                }
                var d = new e(),
                    p = new e(),
                    m = new e(),
                    E = new e(),
                    y = new e(),
                    _ = new e(),
                    v = new e(),
                    T = new e(),
                    R = new e(),
                    A = new e(),
                    g = new e(),
                    S = new e();
                h.fromPoints = function (t, n) {
                    if ((i(n) || (n = new h()), !i(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r,
                        a = e.clone(t[0], v),
                        o = e.clone(a, d),
                        u = e.clone(a, p),
                        s = e.clone(a, m),
                        c = e.clone(a, E),
                        l = e.clone(a, y),
                        f = e.clone(a, _),
                        N = t.length;
                    for (r = 1; r < N; r++) {
                        e.clone(t[r], a);
                        var O = a.x,
                            x = a.y,
                            w = a.z;
                        O < o.x && e.clone(a, o),
                            O > c.x && e.clone(a, c),
                            x < u.y && e.clone(a, u),
                            x > l.y && e.clone(a, l),
                            w < s.z && e.clone(a, s),
                            w > f.z && e.clone(a, f);
                    }
                    var I = e.magnitudeSquared(e.subtract(c, o, T)),
                        M = e.magnitudeSquared(e.subtract(l, u, T)),
                        C = e.magnitudeSquared(e.subtract(f, s, T)),
                        P = o,
                        D = c,
                        L = I;
                    M > L && ((L = M), (P = u), (D = l)),
                        C > L && ((L = C), (P = s), (D = f));
                    var b = R;
                    (b.x = 0.5 * (P.x + D.x)),
                        (b.y = 0.5 * (P.y + D.y)),
                        (b.z = 0.5 * (P.z + D.z));
                    var U = e.magnitudeSquared(e.subtract(D, b, T)),
                        F = Math.sqrt(U),
                        B = A;
                    (B.x = o.x), (B.y = u.y), (B.z = s.z);
                    var z = g;
                    (z.x = c.x), (z.y = l.y), (z.z = f.z);
                    var G = e.multiplyByScalar(e.add(B, z, T), 0.5, S),
                        q = 0;
                    for (r = 0; r < N; r++) {
                        e.clone(t[r], a);
                        var V = e.magnitude(e.subtract(a, G, T));
                        V > q && (q = V);
                        var W = e.magnitudeSquared(e.subtract(a, b, T));
                        if (W > U) {
                            var H = Math.sqrt(W);
                            (F = 0.5 * (F + H)), (U = F * F);
                            var X = H - F;
                            (b.x = (F * b.x + X * a.x) / H),
                                (b.y = (F * b.y + X * a.y) / H),
                                (b.z = (F * b.z + X * a.z) / H);
                        }
                    }
                    return (
                        F < q
                            ? (e.clone(b, n.center), (n.radius = F))
                            : (e.clone(G, n.center), (n.radius = q)),
                        n
                    );
                };
                var N = new o(),
                    O = new e(),
                    x = new e(),
                    w = new t(),
                    I = new t();
                (h.fromRectangle2D = function (e, t, n) {
                    return h.fromRectangleWithHeights2D(e, t, 0, 0, n);
                }),
                    (h.fromRectangleWithHeights2D = function (t, n, a, o, u) {
                        if ((i(u) || (u = new h()), !i(t)))
                            return (
                                (u.center = e.clone(e.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (n = r(n, N)),
                            f.southwest(t, w),
                            (w.height = a),
                            f.northeast(t, I),
                            (I.height = o);
                        var s = n.project(w, O),
                            c = n.project(I, x),
                            l = c.x - s.x,
                            d = c.y - s.y,
                            p = c.z - s.z;
                        u.radius = 0.5 * Math.sqrt(l * l + d * d + p * p);
                        var m = u.center;
                        return (
                            (m.x = s.x + 0.5 * l),
                            (m.y = s.y + 0.5 * d),
                            (m.z = s.z + 0.5 * p),
                            u
                        );
                    });
                var M = [];
                (h.fromRectangle3D = function (t, n, o, u) {
                    if (
                        ((n = r(n, a.WGS84)),
                        (o = r(o, 0)),
                        i(u) || (u = new h()),
                        !i(t))
                    )
                        return (
                            (u.center = e.clone(e.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var s = f.subsample(t, n, o, M);
                    return h.fromPoints(s, u);
                }),
                    (h.fromVertices = function (t, n, a, o) {
                        if ((i(o) || (o = new h()), !i(t) || 0 === t.length))
                            return (
                                (o.center = e.clone(e.ZERO, o.center)),
                                (o.radius = 0),
                                o
                            );
                        (n = r(n, e.ZERO)), (a = r(a, 3));
                        var u = v;
                        (u.x = t[0] + n.x),
                            (u.y = t[1] + n.y),
                            (u.z = t[2] + n.z);
                        var s,
                            c = e.clone(u, d),
                            l = e.clone(u, p),
                            f = e.clone(u, m),
                            N = e.clone(u, E),
                            O = e.clone(u, y),
                            x = e.clone(u, _),
                            w = t.length;
                        for (s = 0; s < w; s += a) {
                            var I = t[s] + n.x,
                                M = t[s + 1] + n.y,
                                C = t[s + 2] + n.z;
                            (u.x = I),
                                (u.y = M),
                                (u.z = C),
                                I < c.x && e.clone(u, c),
                                I > N.x && e.clone(u, N),
                                M < l.y && e.clone(u, l),
                                M > O.y && e.clone(u, O),
                                C < f.z && e.clone(u, f),
                                C > x.z && e.clone(u, x);
                        }
                        var P = e.magnitudeSquared(e.subtract(N, c, T)),
                            D = e.magnitudeSquared(e.subtract(O, l, T)),
                            L = e.magnitudeSquared(e.subtract(x, f, T)),
                            b = c,
                            U = N,
                            F = P;
                        D > F && ((F = D), (b = l), (U = O)),
                            L > F && ((F = L), (b = f), (U = x));
                        var B = R;
                        (B.x = 0.5 * (b.x + U.x)),
                            (B.y = 0.5 * (b.y + U.y)),
                            (B.z = 0.5 * (b.z + U.z));
                        var z = e.magnitudeSquared(e.subtract(U, B, T)),
                            G = Math.sqrt(z),
                            q = A;
                        (q.x = c.x), (q.y = l.y), (q.z = f.z);
                        var V = g;
                        (V.x = N.x), (V.y = O.y), (V.z = x.z);
                        var W = e.multiplyByScalar(e.add(q, V, T), 0.5, S),
                            H = 0;
                        for (s = 0; s < w; s += a) {
                            (u.x = t[s] + n.x),
                                (u.y = t[s + 1] + n.y),
                                (u.z = t[s + 2] + n.z);
                            var X = e.magnitude(e.subtract(u, W, T));
                            X > H && (H = X);
                            var k = e.magnitudeSquared(e.subtract(u, B, T));
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
                                : (e.clone(W, o.center), (o.radius = H)),
                            o
                        );
                    }),
                    (h.fromEncodedCartesianVertices = function (t, n, r) {
                        if (
                            (i(r) || (r = new h()),
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
                        var a = v;
                        (a.x = t[0] + n[0]),
                            (a.y = t[1] + n[1]),
                            (a.z = t[2] + n[2]);
                        var o,
                            u = e.clone(a, d),
                            s = e.clone(a, p),
                            c = e.clone(a, m),
                            l = e.clone(a, E),
                            f = e.clone(a, y),
                            N = e.clone(a, _),
                            O = t.length;
                        for (o = 0; o < O; o += 3) {
                            var x = t[o] + n[o],
                                w = t[o + 1] + n[o + 1],
                                I = t[o + 2] + n[o + 2];
                            (a.x = x),
                                (a.y = w),
                                (a.z = I),
                                x < u.x && e.clone(a, u),
                                x > l.x && e.clone(a, l),
                                w < s.y && e.clone(a, s),
                                w > f.y && e.clone(a, f),
                                I < c.z && e.clone(a, c),
                                I > N.z && e.clone(a, N);
                        }
                        var M = e.magnitudeSquared(e.subtract(l, u, T)),
                            C = e.magnitudeSquared(e.subtract(f, s, T)),
                            P = e.magnitudeSquared(e.subtract(N, c, T)),
                            D = u,
                            L = l,
                            b = M;
                        C > b && ((b = C), (D = s), (L = f)),
                            P > b && ((b = P), (D = c), (L = N));
                        var U = R;
                        (U.x = 0.5 * (D.x + L.x)),
                            (U.y = 0.5 * (D.y + L.y)),
                            (U.z = 0.5 * (D.z + L.z));
                        var F = e.magnitudeSquared(e.subtract(L, U, T)),
                            B = Math.sqrt(F),
                            z = A;
                        (z.x = u.x), (z.y = s.y), (z.z = c.z);
                        var G = g;
                        (G.x = l.x), (G.y = f.y), (G.z = N.z);
                        var q = e.multiplyByScalar(e.add(z, G, T), 0.5, S),
                            V = 0;
                        for (o = 0; o < O; o += 3) {
                            (a.x = t[o] + n[o]),
                                (a.y = t[o + 1] + n[o + 1]),
                                (a.z = t[o + 2] + n[o + 2]);
                            var W = e.magnitude(e.subtract(a, q, T));
                            W > V && (V = W);
                            var H = e.magnitudeSquared(e.subtract(a, U, T));
                            if (H > F) {
                                var X = Math.sqrt(H);
                                (B = 0.5 * (B + X)), (F = B * B);
                                var k = X - B;
                                (U.x = (B * U.x + k * a.x) / X),
                                    (U.y = (B * U.y + k * a.y) / X),
                                    (U.z = (B * U.z + k * a.z) / X);
                            }
                        }
                        return (
                            B < V
                                ? (e.clone(U, r.center), (r.radius = B))
                                : (e.clone(q, r.center), (r.radius = V)),
                            r
                        );
                    }),
                    (h.fromCornerPoints = function (t, n, r) {
                        i(r) || (r = new h());
                        var a = r.center;
                        return (
                            e.add(t, n, a),
                            e.multiplyByScalar(a, 0.5, a),
                            (r.radius = e.distance(a, n)),
                            r
                        );
                    }),
                    (h.fromEllipsoid = function (t, n) {
                        return (
                            i(n) || (n = new h()),
                            e.clone(e.ZERO, n.center),
                            (n.radius = t.maximumRadius),
                            n
                        );
                    });
                var C = new e();
                h.fromBoundingSpheres = function (t, n) {
                    if ((i(n) || (n = new h()), !i(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r = t.length;
                    if (1 === r) return h.clone(t[0], n);
                    if (2 === r) return h.union(t[0], t[1], n);
                    var a,
                        o = [];
                    for (a = 0; a < r; a++) o.push(t[a].center);
                    n = h.fromPoints(o, n);
                    var u = n.center,
                        s = n.radius;
                    for (a = 0; a < r; a++) {
                        var c = t[a];
                        s = Math.max(s, e.distance(u, c.center, C) + c.radius);
                    }
                    return (n.radius = s), n;
                };
                var P = new e(),
                    D = new e(),
                    L = new e();
                (h.fromOrientedBoundingBox = function (t, n) {
                    i(n) || (n = new h());
                    var r = t.halfAxes,
                        a = c.getColumn(r, 0, P),
                        o = c.getColumn(r, 1, D),
                        u = c.getColumn(r, 2, L);
                    return (
                        e.add(a, o, a),
                        e.add(a, u, a),
                        (n.center = e.clone(t.center, n.center)),
                        (n.radius = e.magnitude(a)),
                        n
                    );
                }),
                    (h.clone = function (t, n) {
                        if (i(t))
                            return i(n)
                                ? ((n.center = e.clone(t.center, n.center)),
                                  (n.radius = t.radius),
                                  n)
                                : new h(t.center, t.radius);
                    }),
                    (h.packedLength = 4),
                    (h.pack = function (e, t, n) {
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
                    (h.unpack = function (e, t, n) {
                        (t = r(t, 0)), i(n) || (n = new h());
                        var a = n.center;
                        return (
                            (a.x = e[t++]),
                            (a.y = e[t++]),
                            (a.z = e[t++]),
                            (n.radius = e[t]),
                            n
                        );
                    });
                var b = new e(),
                    U = new e();
                h.union = function (t, n, r) {
                    i(r) || (r = new h());
                    var a = t.center,
                        o = t.radius,
                        u = n.center,
                        s = n.radius,
                        c = e.subtract(u, a, b),
                        l = e.magnitude(c);
                    if (o >= l + s) return t.clone(r), r;
                    if (s >= l + o) return n.clone(r), r;
                    var f = 0.5 * (o + l + s),
                        d = e.multiplyByScalar(c, (-o + f) / l, U);
                    return (
                        e.add(d, a, d), e.clone(d, r.center), (r.radius = f), r
                    );
                };
                var F = new e();
                (h.expand = function (t, n, r) {
                    r = h.clone(t, r);
                    var i = e.magnitude(e.subtract(n, r.center, F));
                    return i > r.radius && (r.radius = i), r;
                }),
                    (h.intersectPlane = function (t, n) {
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
                    (h.transform = function (e, t, n) {
                        return (
                            i(n) || (n = new h()),
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
                (h.distanceSquaredTo = function (t, n) {
                    var r = e.subtract(t.center, n, B);
                    return e.magnitudeSquared(r) - t.radius * t.radius;
                }),
                    (h.transformWithoutScale = function (e, t, n) {
                        return (
                            i(n) || (n = new h()),
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
                h.computePlaneDistances = function (t, n, r, a) {
                    i(a) || (a = new s());
                    var o = e.subtract(t.center, n, z),
                        u = e.dot(r, o);
                    return (a.start = u - t.radius), (a.stop = u + t.radius), a;
                };
                for (
                    var G = new e(),
                        q = new e(),
                        V = new e(),
                        W = new e(),
                        H = new e(),
                        X = new t(),
                        k = new Array(8),
                        Y = 0;
                    Y < 8;
                    ++Y
                )
                    k[Y] = new e();
                var Z = new o();
                return (
                    (h.projectTo2D = function (t, n, i) {
                        n = r(n, Z);
                        var a = n.ellipsoid,
                            o = t.center,
                            u = t.radius,
                            s = a.geodeticSurfaceNormal(o, G),
                            c = e.cross(e.UNIT_Z, s, q);
                        e.normalize(c, c);
                        var l = e.cross(s, c, V);
                        e.normalize(l, l),
                            e.multiplyByScalar(s, u, s),
                            e.multiplyByScalar(l, u, l),
                            e.multiplyByScalar(c, u, c);
                        var f = e.negate(l, H),
                            d = e.negate(c, W),
                            p = k,
                            m = p[0];
                        e.add(s, l, m),
                            e.add(m, c, m),
                            (m = p[1]),
                            e.add(s, l, m),
                            e.add(m, d, m),
                            (m = p[2]),
                            e.add(s, f, m),
                            e.add(m, d, m),
                            (m = p[3]),
                            e.add(s, f, m),
                            e.add(m, c, m),
                            e.negate(s, s),
                            (m = p[4]),
                            e.add(s, l, m),
                            e.add(m, c, m),
                            (m = p[5]),
                            e.add(s, l, m),
                            e.add(m, d, m),
                            (m = p[6]),
                            e.add(s, f, m),
                            e.add(m, d, m),
                            (m = p[7]),
                            e.add(s, f, m),
                            e.add(m, c, m);
                        for (var E = p.length, y = 0; y < E; ++y) {
                            var _ = p[y];
                            e.add(o, _, _);
                            var v = a.cartesianToCartographic(_, X);
                            n.project(v, _);
                        }
                        (i = h.fromPoints(p, i)), (o = i.center);
                        var T = o.x,
                            R = o.y,
                            A = o.z;
                        return (o.x = A), (o.y = T), (o.z = R), i;
                    }),
                    (h.isOccluded = function (e, t) {
                        return !t.isBoundingSphereVisible(e);
                    }),
                    (h.equals = function (t, n) {
                        return (
                            t === n ||
                            (i(t) &&
                                i(n) &&
                                e.equals(t.center, n.center) &&
                                t.radius === n.radius)
                        );
                    }),
                    (h.prototype.intersectPlane = function (e) {
                        return h.intersectPlane(this, e);
                    }),
                    (h.prototype.distanceSquaredTo = function (e) {
                        return h.distanceSquaredTo(this, e);
                    }),
                    (h.prototype.computePlaneDistances = function (e, t, n) {
                        return h.computePlaneDistances(this, e, t, n);
                    }),
                    (h.prototype.isOccluded = function (e) {
                        return h.isOccluded(this, e);
                    }),
                    (h.prototype.equals = function (e) {
                        return h.equals(this, e);
                    }),
                    (h.prototype.clone = function (e) {
                        return h.clone(this, e);
                    }),
                    h
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
                    if (!t(R) && ((R = !1), !h())) {
                        var e = / Chrome\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((R = !0), (A = r(e[1])));
                    }
                    return R;
                }
                function a() {
                    return i() && A;
                }
                function o() {
                    if (
                        !t(g) &&
                        ((g = !1),
                        !i() && !h() && / Safari\/[\.0-9]+/.test(T.userAgent))
                    ) {
                        var e = / Version\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((g = !0), (S = r(e[1])));
                    }
                    return g;
                }
                function u() {
                    return o() && S;
                }
                function s() {
                    if (!t(N)) {
                        N = !1;
                        var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            T.userAgent,
                        );
                        null !== e &&
                            ((N = !0), (O = r(e[1])), (O.isNightly = !!e[2]));
                    }
                    return N;
                }
                function c() {
                    return s() && O;
                }
                function l() {
                    if (!t(x)) {
                        x = !1;
                        var e;
                        'Microsoft Internet Explorer' === T.appName
                            ? null !==
                                  (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      T.userAgent,
                                  )) && ((x = !0), (w = r(e[1])))
                            : 'Netscape' === T.appName &&
                              null !==
                                  (e =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          T.userAgent,
                                      )) &&
                              ((x = !0), (w = r(e[1])));
                    }
                    return x;
                }
                function f() {
                    return l() && w;
                }
                function h() {
                    if (!t(I)) {
                        I = !1;
                        var e = / Edge\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((I = !0), (M = r(e[1])));
                    }
                    return I;
                }
                function d() {
                    return h() && M;
                }
                function p() {
                    if (!t(C)) {
                        C = !1;
                        var e = /Firefox\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((C = !0), (P = r(e[1])));
                    }
                    return C;
                }
                function m() {
                    return t(D) || (D = /Windows/i.test(T.appVersion)), D;
                }
                function E() {
                    return p() && P;
                }
                function y() {
                    return (
                        t(L) ||
                            (L =
                                'undefined' != typeof PointerEvent &&
                                (!t(T.pointerEnabled) || T.pointerEnabled)),
                        L
                    );
                }
                function _() {
                    if (!t(U)) {
                        var e = document.createElement('canvas');
                        e.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var n = e.style.imageRendering;
                        (U = t(n) && '' !== n), U && (b = n);
                    }
                    return U;
                }
                function v() {
                    return _() ? b : void 0;
                }
                var T;
                T = 'undefined' != typeof navigator ? navigator : {};
                var R,
                    A,
                    g,
                    S,
                    N,
                    O,
                    x,
                    w,
                    I,
                    M,
                    C,
                    P,
                    D,
                    L,
                    b,
                    U,
                    F = {
                        isChrome: i,
                        chromeVersion: a,
                        isSafari: o,
                        safariVersion: u,
                        isWebkit: s,
                        webkitVersion: c,
                        isInternetExplorer: l,
                        internetExplorerVersion: f,
                        isEdge: h,
                        edgeVersion: d,
                        isFirefox: p,
                        firefoxVersion: E,
                        isWindows: m,
                        hardwareConcurrency: e(T.hardwareConcurrency, 3),
                        supportsPointerEvents: y,
                        supportsImageRenderingPixelated: _,
                        imageRenderingValue: v,
                    };
                return (
                    (F.supportsFullscreen = function () {
                        return n.supportsFullscreen();
                    }),
                    (F.supportsTypedArrays = function () {
                        return 'undefined' != typeof ArrayBuffer;
                    }),
                    (F.supportsWebWorkers = function () {
                        return 'undefined' != typeof Worker;
                    }),
                    F
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
        define(
            'Core/AxisAlignedBoundingBox',
            [
                './Cartesian3',
                './Check',
                './defaultValue',
                './defined',
                './Intersect',
            ],
            function (e, t, n, r, i) {
                'use strict';
                function a(t, i, a) {
                    (this.minimum = e.clone(n(t, e.ZERO))),
                        (this.maximum = e.clone(n(i, e.ZERO))),
                        r(a)
                            ? (a = e.clone(a))
                            : ((a = e.add(this.minimum, this.maximum, new e())),
                              e.multiplyByScalar(a, 0.5, a)),
                        (this.center = a);
                }
                (a.fromPoints = function (t, n) {
                    if ((r(n) || (n = new a()), !r(t) || 0 === t.length))
                        return (
                            (n.minimum = e.clone(e.ZERO, n.minimum)),
                            (n.maximum = e.clone(e.ZERO, n.maximum)),
                            (n.center = e.clone(e.ZERO, n.center)),
                            n
                        );
                    for (
                        var i = t[0].x,
                            o = t[0].y,
                            u = t[0].z,
                            s = t[0].x,
                            c = t[0].y,
                            l = t[0].z,
                            f = t.length,
                            h = 1;
                        h < f;
                        h++
                    ) {
                        var d = t[h],
                            p = d.x,
                            m = d.y,
                            E = d.z;
                        (i = Math.min(p, i)),
                            (s = Math.max(p, s)),
                            (o = Math.min(m, o)),
                            (c = Math.max(m, c)),
                            (u = Math.min(E, u)),
                            (l = Math.max(E, l));
                    }
                    var y = n.minimum;
                    (y.x = i), (y.y = o), (y.z = u);
                    var _ = n.maximum;
                    (_.x = s), (_.y = c), (_.z = l);
                    var v = e.add(y, _, n.center);
                    return e.multiplyByScalar(v, 0.5, v), n;
                }),
                    (a.clone = function (t, n) {
                        if (r(t))
                            return r(n)
                                ? ((n.minimum = e.clone(t.minimum, n.minimum)),
                                  (n.maximum = e.clone(t.maximum, n.maximum)),
                                  (n.center = e.clone(t.center, n.center)),
                                  n)
                                : new a(t.minimum, t.maximum);
                    }),
                    (a.equals = function (t, n) {
                        return (
                            t === n ||
                            (r(t) &&
                                r(n) &&
                                e.equals(t.center, n.center) &&
                                e.equals(t.minimum, n.minimum) &&
                                e.equals(t.maximum, n.maximum))
                        );
                    });
                var o = new e();
                return (
                    (a.intersectPlane = function (t, n) {
                        o = e.subtract(t.maximum, t.minimum, o);
                        var r = e.multiplyByScalar(o, 0.5, o),
                            a = n.normal,
                            u =
                                r.x * Math.abs(a.x) +
                                r.y * Math.abs(a.y) +
                                r.z * Math.abs(a.z),
                            s = e.dot(t.center, a) + n.distance;
                        return s - u > 0
                            ? i.INSIDE
                            : s + u < 0
                              ? i.OUTSIDE
                              : i.INTERSECTING;
                    }),
                    (a.prototype.clone = function (e) {
                        return a.clone(this, e);
                    }),
                    (a.prototype.intersectPlane = function (e) {
                        return a.intersectPlane(this, e);
                    }),
                    (a.prototype.equals = function (e) {
                        return a.equals(this, e);
                    }),
                    a
                );
            },
        ),
        define(
            'Core/QuadraticRealPolynomial',
            ['./DeveloperError', './Math'],
            function (e, t) {
                'use strict';
                function n(e, n, r) {
                    var i = e + n;
                    return t.sign(e) !== t.sign(n) &&
                        Math.abs(i / Math.max(Math.abs(e), Math.abs(n))) < r
                        ? 0
                        : i;
                }
                var r = {};
                return (
                    (r.computeDiscriminant = function (e, t, n) {
                        return t * t - 4 * e * n;
                    }),
                    (r.computeRealRoots = function (e, r, i) {
                        var a;
                        if (0 === e) return 0 === r ? [] : [-i / r];
                        if (0 === r) {
                            if (0 === i) return [0, 0];
                            var o = Math.abs(i),
                                u = Math.abs(e);
                            if (o < u && o / u < t.EPSILON14) return [0, 0];
                            if (o > u && u / o < t.EPSILON14) return [];
                            if ((a = -i / e) < 0) return [];
                            var s = Math.sqrt(a);
                            return [-s, s];
                        }
                        if (0 === i)
                            return (a = -r / e), a < 0 ? [a, 0] : [0, a];
                        var c = r * r,
                            l = 4 * e * i,
                            f = n(c, -l, t.EPSILON14);
                        if (f < 0) return [];
                        var h =
                            -0.5 * n(r, t.sign(r) * Math.sqrt(f), t.EPSILON14);
                        return r > 0 ? [h / e, i / h] : [i / h, h / e];
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
                    var i,
                        a,
                        o = e,
                        u = t / 3,
                        s = n / 3,
                        c = r,
                        l = o * s,
                        f = u * c,
                        h = u * u,
                        d = s * s,
                        p = o * s - h,
                        m = o * c - u * s,
                        E = u * c - d,
                        y = 4 * p * E - m * m;
                    if (y < 0) {
                        var _, v, T;
                        h * f >= l * d
                            ? ((_ = o), (v = p), (T = -2 * u * p + o * m))
                            : ((_ = c), (v = E), (T = -c * m + 2 * s * E));
                        var R = T < 0 ? -1 : 1,
                            A = -R * Math.abs(_) * Math.sqrt(-y);
                        a = -T + A;
                        var g = a / 2,
                            S =
                                g < 0
                                    ? -Math.pow(-g, 1 / 3)
                                    : Math.pow(g, 1 / 3),
                            N = a === A ? -S : -v / S;
                        return (
                            (i = v <= 0 ? S + N : -T / (S * S + N * N + v)),
                            h * f >= l * d ? [(i - u) / o] : [-c / (i + s)]
                        );
                    }
                    var O = p,
                        x = -2 * u * p + o * m,
                        w = E,
                        I = -c * m + 2 * s * E,
                        M = Math.sqrt(y),
                        C = Math.sqrt(3) / 2,
                        P = Math.abs(Math.atan2(o * M, -x) / 3);
                    i = 2 * Math.sqrt(-O);
                    var D = Math.cos(P);
                    a = i * D;
                    var L = i * (-D / 2 - C * Math.sin(P)),
                        b = a + L > 2 * u ? a - u : L - u,
                        U = o,
                        F = b / U;
                    (P = Math.abs(Math.atan2(c * M, -I) / 3)),
                        (i = 2 * Math.sqrt(-w)),
                        (D = Math.cos(P)),
                        (a = i * D),
                        (L = i * (-D / 2 - C * Math.sin(P)));
                    var B = -c,
                        z = a + L < 2 * s ? a + s : L + s,
                        G = B / z,
                        q = U * z,
                        V = -b * z - U * B,
                        W = b * B,
                        H = (s * V - u * W) / (-u * V + s * q);
                    return F <= H
                        ? F <= G
                            ? H <= G
                                ? [F, H, G]
                                : [F, G, H]
                            : [G, F, H]
                        : F <= G
                          ? [H, F, G]
                          : H <= G
                            ? [H, G, F]
                            : [G, H, F];
                }
                var r = {};
                return (
                    (r.computeDiscriminant = function (e, t, n, r) {
                        var i = e * e,
                            a = t * t,
                            o = n * n;
                        return (
                            18 * e * t * n * r +
                            a * o -
                            27 * i * (r * r) -
                            4 * (e * o * n + a * t * r)
                        );
                    }),
                    (r.computeRealRoots = function (e, r, i, a) {
                        var o, u;
                        if (0 === e) return t.computeRealRoots(r, i, a);
                        if (0 === r) {
                            if (0 === i) {
                                if (0 === a) return [0, 0, 0];
                                u = -a / e;
                                var s =
                                    u < 0
                                        ? -Math.pow(-u, 1 / 3)
                                        : Math.pow(u, 1 / 3);
                                return [s, s, s];
                            }
                            return 0 === a
                                ? ((o = t.computeRealRoots(e, 0, i)),
                                  0 === o.Length ? [0] : [o[0], 0, o[1]])
                                : n(e, 0, i, a);
                        }
                        return 0 === i
                            ? 0 === a
                                ? ((u = -r / e), u < 0 ? [u, 0, 0] : [0, 0, u])
                                : n(e, r, 0, a)
                            : 0 === a
                              ? ((o = t.computeRealRoots(e, r, i)),
                                0 === o.length
                                    ? [0]
                                    : o[1] <= 0
                                      ? [o[0], o[1], 0]
                                      : o[0] >= 0
                                        ? [0, o[0], o[1]]
                                        : [o[0], 0, o[1]])
                              : n(e, r, i, a);
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
                function i(t, i, a, o) {
                    var u = t * t,
                        s = i - (3 * u) / 8,
                        c = a - (i * t) / 2 + (u * t) / 8,
                        l = o - (a * t) / 4 + (i * u) / 16 - (3 * u * u) / 256,
                        f = e.computeRealRoots(1, 2 * s, s * s - 4 * l, -c * c);
                    if (f.length > 0) {
                        var h = -t / 4,
                            d = f[f.length - 1];
                        if (Math.abs(d) < n.EPSILON14) {
                            var p = r.computeRealRoots(1, s, l);
                            if (2 === p.length) {
                                var m,
                                    E = p[0],
                                    y = p[1];
                                if (E >= 0 && y >= 0) {
                                    var _ = Math.sqrt(E),
                                        v = Math.sqrt(y);
                                    return [h - v, h - _, h + _, h + v];
                                }
                                if (E >= 0 && y < 0)
                                    return (m = Math.sqrt(E)), [h - m, h + m];
                                if (E < 0 && y >= 0)
                                    return (m = Math.sqrt(y)), [h - m, h + m];
                            }
                            return [];
                        }
                        if (d > 0) {
                            var T = Math.sqrt(d),
                                R = (s + d - c / T) / 2,
                                A = (s + d + c / T) / 2,
                                g = r.computeRealRoots(1, T, R),
                                S = r.computeRealRoots(1, -T, A);
                            return 0 !== g.length
                                ? ((g[0] += h),
                                  (g[1] += h),
                                  0 !== S.length
                                      ? ((S[0] += h),
                                        (S[1] += h),
                                        g[1] <= S[0]
                                            ? [g[0], g[1], S[0], S[1]]
                                            : S[1] <= g[0]
                                              ? [S[0], S[1], g[0], g[1]]
                                              : g[0] >= S[0] && g[1] <= S[1]
                                                ? [S[0], g[0], g[1], S[1]]
                                                : S[0] >= g[0] && S[1] <= g[1]
                                                  ? [g[0], S[0], S[1], g[1]]
                                                  : g[0] > S[0] && g[0] < S[1]
                                                    ? [S[0], g[0], S[1], g[1]]
                                                    : [g[0], S[0], g[1], S[1]])
                                      : g)
                                : 0 !== S.length
                                  ? ((S[0] += h), (S[1] += h), S)
                                  : [];
                        }
                    }
                    return [];
                }
                function a(t, i, a, o) {
                    var u = a * a,
                        s = i * i,
                        c = t * t,
                        l = -2 * i,
                        f = a * t + s - 4 * o,
                        h = c * o - a * i * t + u,
                        d = e.computeRealRoots(1, l, f, h);
                    if (d.length > 0) {
                        var p,
                            m,
                            E = d[0],
                            y = i - E,
                            _ = y * y,
                            v = t / 2,
                            T = y / 2,
                            R = _ - 4 * o,
                            A = _ + 4 * Math.abs(o),
                            g = c - 4 * E,
                            S = c + 4 * Math.abs(E);
                        if (E < 0 || R * S < g * A) {
                            var N = Math.sqrt(g);
                            (p = N / 2), (m = 0 === N ? 0 : (t * T - a) / N);
                        } else {
                            var O = Math.sqrt(R);
                            (p = 0 === O ? 0 : (t * T - a) / O), (m = O / 2);
                        }
                        var x, w;
                        0 === v && 0 === p
                            ? ((x = 0), (w = 0))
                            : n.sign(v) === n.sign(p)
                              ? ((x = v + p), (w = E / x))
                              : ((w = v - p), (x = E / w));
                        var I, M;
                        0 === T && 0 === m
                            ? ((I = 0), (M = 0))
                            : n.sign(T) === n.sign(m)
                              ? ((I = T + m), (M = o / I))
                              : ((M = T - m), (I = o / M));
                        var C = r.computeRealRoots(1, x, I),
                            P = r.computeRealRoots(1, w, M);
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
                    (o.computeDiscriminant = function (e, t, n, r, i) {
                        var a = e * e,
                            o = a * e,
                            u = t * t,
                            s = u * t,
                            c = n * n,
                            l = c * n,
                            f = r * r,
                            h = f * r,
                            d = i * i;
                        return (
                            u * c * f -
                            4 * s * h -
                            4 * e * l * f +
                            18 * e * t * n * h -
                            27 * a * f * f +
                            256 * o * (d * i) +
                            i *
                                (18 * s * n * r -
                                    4 * u * l +
                                    16 * e * c * c -
                                    80 * e * t * c * r -
                                    6 * e * u * f +
                                    144 * a * n * f) +
                            d *
                                (144 * e * u * n -
                                    27 * u * u -
                                    128 * a * c -
                                    192 * a * t * r)
                        );
                    }),
                    (o.computeRealRoots = function (t, r, o, u, s) {
                        if (Math.abs(t) < n.EPSILON15)
                            return e.computeRealRoots(r, o, u, s);
                        var c = r / t,
                            l = o / t,
                            f = u / t,
                            h = s / t,
                            d = c < 0 ? 1 : 0;
                        switch (
                            ((d += l < 0 ? d + 1 : d),
                            (d += f < 0 ? d + 1 : d),
                            (d += h < 0 ? d + 1 : d))
                        ) {
                            case 0:
                                return i(c, l, f, h);
                            case 1:
                            case 2:
                                return a(c, l, f, h);
                            case 3:
                            case 4:
                                return i(c, l, f, h);
                            case 5:
                                return a(c, l, f, h);
                            case 6:
                            case 7:
                                return i(c, l, f, h);
                            case 8:
                                return a(c, l, f, h);
                            case 9:
                            case 10:
                                return i(c, l, f, h);
                            case 11:
                                return a(c, l, f, h);
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                                return i(c, l, f, h);
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
                function i(n, r) {
                    (r = e.clone(t(r, e.ZERO))),
                        e.equals(r, e.ZERO) || e.normalize(r, r),
                        (this.origin = e.clone(t(n, e.ZERO))),
                        (this.direction = r);
                }
                return (
                    (i.getPoint = function (t, r, i) {
                        return (
                            n(i) || (i = new e()),
                            (i = e.multiplyByScalar(t.direction, r, i)),
                            e.add(t.origin, i, i)
                        );
                    }),
                    i
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
            function (e, t, n, r, i, a, o, u, s, c, l) {
                'use strict';
                function f(e, t, n, r) {
                    var i = t * t - 4 * e * n;
                    if (!(i < 0)) {
                        if (i > 0) {
                            var a = 1 / (2 * e),
                                o = Math.sqrt(i),
                                u = (-t + o) * a,
                                s = (-t - o) * a;
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
                function h(t, n, i) {
                    r(i) || (i = new a());
                    var o = t.origin,
                        u = t.direction,
                        s = n.center,
                        c = n.radius * n.radius,
                        l = e.subtract(o, s, _),
                        h = e.dot(u, u),
                        d = 2 * e.dot(u, l),
                        p = e.magnitudeSquared(l) - c,
                        m = f(h, d, p, A);
                    if (r(m)) return (i.start = m.root0), (i.stop = m.root1), i;
                }
                function d(e, t, n) {
                    var r = e + t;
                    return o.sign(e) !== o.sign(t) &&
                        Math.abs(r / Math.max(Math.abs(e), Math.abs(t))) < n
                        ? 0
                        : r;
                }
                function p(t, n, r, i, a) {
                    var l,
                        f = i * i,
                        h = a * a,
                        p = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * h,
                        m =
                            a *
                            (i *
                                d(
                                    t[u.COLUMN1ROW0],
                                    t[u.COLUMN0ROW1],
                                    o.EPSILON15,
                                ) +
                                n.y),
                        E =
                            t[u.COLUMN0ROW0] * f +
                            t[u.COLUMN2ROW2] * h +
                            i * n.x +
                            r,
                        y =
                            h *
                            d(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                        _ =
                            a *
                            (i * d(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + n.z),
                        v = [];
                    if (0 === _ && 0 === y) {
                        if (((l = s.computeRealRoots(p, m, E)), 0 === l.length))
                            return v;
                        var T = l[0],
                            R = Math.sqrt(Math.max(1 - T * T, 0));
                        if (
                            (v.push(new e(i, a * T, a * -R)),
                            v.push(new e(i, a * T, a * R)),
                            2 === l.length)
                        ) {
                            var A = l[1],
                                g = Math.sqrt(Math.max(1 - A * A, 0));
                            v.push(new e(i, a * A, a * -g)),
                                v.push(new e(i, a * A, a * g));
                        }
                        return v;
                    }
                    var S = _ * _,
                        N = y * y,
                        O = p * p,
                        x = _ * y,
                        w = O + N,
                        I = 2 * (m * p + x),
                        M = 2 * E * p + m * m - N + S,
                        C = 2 * (E * m - x),
                        P = E * E - S;
                    if (0 === w && 0 === I && 0 === M && 0 === C) return v;
                    l = c.computeRealRoots(w, I, M, C, P);
                    var D = l.length;
                    if (0 === D) return v;
                    for (var L = 0; L < D; ++L) {
                        var b,
                            U = l[L],
                            F = U * U,
                            B = Math.max(1 - F, 0),
                            z = Math.sqrt(B);
                        b =
                            o.sign(p) === o.sign(E)
                                ? d(p * F + E, m * U, o.EPSILON12)
                                : o.sign(E) === o.sign(m * U)
                                  ? d(p * F, m * U + E, o.EPSILON12)
                                  : d(p * F + m * U, E, o.EPSILON12);
                        var G = d(y * U, _, o.EPSILON15),
                            q = b * G;
                        q < 0
                            ? v.push(new e(i, a * U, a * z))
                            : q > 0
                              ? v.push(new e(i, a * U, a * -z))
                              : 0 !== z
                                ? (v.push(new e(i, a * U, a * -z)),
                                  v.push(new e(i, a * U, a * z)),
                                  ++L)
                                : v.push(new e(i, a * U, a * z));
                    }
                    return v;
                }
                var m = {};
                m.rayPlane = function (t, n, i) {
                    r(i) || (i = new e());
                    var a = t.origin,
                        u = t.direction,
                        s = n.normal,
                        c = e.dot(s, u);
                    if (!(Math.abs(c) < o.EPSILON15)) {
                        var l = (-n.distance - e.dot(s, a)) / c;
                        if (!(l < 0))
                            return (
                                (i = e.multiplyByScalar(u, l, i)),
                                e.add(a, i, i)
                            );
                    }
                };
                var E = new e(),
                    y = new e(),
                    _ = new e(),
                    v = new e(),
                    T = new e();
                (m.rayTriangleParametric = function (t, r, i, a, u) {
                    u = n(u, !1);
                    var s,
                        c,
                        l,
                        f,
                        h,
                        d = t.origin,
                        p = t.direction,
                        m = e.subtract(i, r, E),
                        R = e.subtract(a, r, y),
                        A = e.cross(p, R, _),
                        g = e.dot(m, A);
                    if (u) {
                        if (g < o.EPSILON6) return;
                        if (
                            ((s = e.subtract(d, r, v)),
                            (l = e.dot(s, A)) < 0 || l > g)
                        )
                            return;
                        if (
                            ((c = e.cross(s, m, T)),
                            (f = e.dot(p, c)) < 0 || l + f > g)
                        )
                            return;
                        h = e.dot(R, c) / g;
                    } else {
                        if (Math.abs(g) < o.EPSILON6) return;
                        var S = 1 / g;
                        if (
                            ((s = e.subtract(d, r, v)),
                            (l = e.dot(s, A) * S) < 0 || l > 1)
                        )
                            return;
                        if (
                            ((c = e.cross(s, m, T)),
                            (f = e.dot(p, c) * S) < 0 || l + f > 1)
                        )
                            return;
                        h = e.dot(R, c) * S;
                    }
                    return h;
                }),
                    (m.rayTriangle = function (t, n, i, a, o, u) {
                        var s = m.rayTriangleParametric(t, n, i, a, o);
                        if (r(s) && !(s < 0))
                            return (
                                r(u) || (u = new e()),
                                e.multiplyByScalar(t.direction, s, u),
                                e.add(t.origin, u, u)
                            );
                    });
                var R = new l();
                m.lineSegmentTriangle = function (t, n, i, a, o, u, s) {
                    var c = R;
                    e.clone(t, c.origin),
                        e.subtract(n, t, c.direction),
                        e.normalize(c.direction, c.direction);
                    var l = m.rayTriangleParametric(c, i, a, o, u);
                    if (!(!r(l) || l < 0 || l > e.distance(t, n)))
                        return (
                            r(s) || (s = new e()),
                            e.multiplyByScalar(c.direction, l, s),
                            e.add(c.origin, s, s)
                        );
                };
                var A = { root0: 0, root1: 0 };
                m.raySphere = function (e, t, n) {
                    if (((n = h(e, t, n)), r(n) && !(n.stop < 0)))
                        return (n.start = Math.max(n.start, 0)), n;
                };
                var g = new l();
                m.lineSegmentSphere = function (t, n, i, a) {
                    var o = g;
                    e.clone(t, o.origin);
                    var u = e.subtract(n, t, o.direction),
                        s = e.magnitude(u);
                    if (
                        (e.normalize(u, u),
                        (a = h(o, i, a)),
                        !(!r(a) || a.stop < 0 || a.start > s))
                    )
                        return (
                            (a.start = Math.max(a.start, 0)),
                            (a.stop = Math.min(a.stop, s)),
                            a
                        );
                };
                var S = new e(),
                    N = new e();
                m.rayEllipsoid = function (t, n) {
                    var r,
                        i,
                        o,
                        u,
                        s,
                        c = n.oneOverRadii,
                        l = e.multiplyComponents(c, t.origin, S),
                        f = e.multiplyComponents(c, t.direction, N),
                        h = e.magnitudeSquared(l),
                        d = e.dot(l, f);
                    if (h > 1) {
                        if (d >= 0) return;
                        var p = d * d;
                        if (
                            ((r = h - 1),
                            (i = e.magnitudeSquared(f)),
                            (o = i * r),
                            p < o)
                        )
                            return;
                        if (p > o) {
                            (u = d * d - o), (s = -d + Math.sqrt(u));
                            var m = s / i,
                                E = r / s;
                            return m < E ? new a(m, E) : { start: E, stop: m };
                        }
                        var y = Math.sqrt(r / i);
                        return new a(y, y);
                    }
                    return h < 1
                        ? ((r = h - 1),
                          (i = e.magnitudeSquared(f)),
                          (o = i * r),
                          (u = d * d - o),
                          (s = -d + Math.sqrt(u)),
                          new a(0, s / i))
                        : d < 0
                          ? ((i = e.magnitudeSquared(f)), new a(0, -d / i))
                          : void 0;
                };
                var O = new e(),
                    x = new e(),
                    w = new e(),
                    I = new e(),
                    M = new e(),
                    C = new u(),
                    P = new u(),
                    D = new u(),
                    L = new u(),
                    b = new u(),
                    U = new u(),
                    F = new u(),
                    B = new e(),
                    z = new e(),
                    G = new t();
                m.grazingAltitudeLocation = function (t, n) {
                    var i = t.origin,
                        a = t.direction;
                    if (!e.equals(i, e.ZERO)) {
                        var s = n.geodeticSurfaceNormal(i, O);
                        if (e.dot(a, s) >= 0) return i;
                    }
                    var c = r(this.rayEllipsoid(t, n)),
                        l = n.transformPositionToScaledSpace(a, O),
                        f = e.normalize(l, l),
                        h = e.mostOrthogonalAxis(l, I),
                        d = e.normalize(e.cross(h, f, x), x),
                        m = e.normalize(e.cross(f, d, w), w),
                        E = C;
                    (E[0] = f.x),
                        (E[1] = f.y),
                        (E[2] = f.z),
                        (E[3] = d.x),
                        (E[4] = d.y),
                        (E[5] = d.z),
                        (E[6] = m.x),
                        (E[7] = m.y),
                        (E[8] = m.z);
                    var y = u.transpose(E, P),
                        _ = u.fromScale(n.radii, D),
                        v = u.fromScale(n.oneOverRadii, L),
                        T = b;
                    (T[0] = 0),
                        (T[1] = -a.z),
                        (T[2] = a.y),
                        (T[3] = a.z),
                        (T[4] = 0),
                        (T[5] = -a.x),
                        (T[6] = -a.y),
                        (T[7] = a.x),
                        (T[8] = 0);
                    var R,
                        A,
                        g = u.multiply(u.multiply(y, v, U), T, U),
                        S = u.multiply(u.multiply(g, _, F), E, F),
                        N = u.multiplyByVector(g, i, M),
                        q = p(S, e.negate(N, O), 0, 0, 1),
                        V = q.length;
                    if (V > 0) {
                        for (
                            var W = e.clone(e.ZERO, z),
                                H = Number.NEGATIVE_INFINITY,
                                X = 0;
                            X < V;
                            ++X
                        ) {
                            R = u.multiplyByVector(
                                _,
                                u.multiplyByVector(E, q[X], B),
                                B,
                            );
                            var k = e.normalize(e.subtract(R, i, I), I),
                                Y = e.dot(k, a);
                            Y > H && ((H = Y), (W = e.clone(R, W)));
                        }
                        var Z = n.cartesianToCartographic(W, G);
                        return (
                            (H = o.clamp(H, 0, 1)),
                            (A =
                                e.magnitude(e.subtract(W, i, I)) *
                                Math.sqrt(1 - H * H)),
                            (A = c ? -A : A),
                            (Z.height = A),
                            n.cartographicToCartesian(Z, new e())
                        );
                    }
                };
                var q = new e();
                return (
                    (m.lineSegmentPlane = function (t, n, i, a) {
                        r(a) || (a = new e());
                        var u = e.subtract(n, t, q),
                            s = i.normal,
                            c = e.dot(s, u);
                        if (!(Math.abs(c) < o.EPSILON6)) {
                            var l = e.dot(s, t),
                                f = -(i.distance + l) / c;
                            if (!(f < 0 || f > 1))
                                return (
                                    e.multiplyByScalar(u, f, a),
                                    e.add(t, a, a),
                                    a
                                );
                        }
                    }),
                    (m.trianglePlaneIntersection = function (t, n, r, i) {
                        var a = i.normal,
                            o = i.distance,
                            u = e.dot(a, t) + o < 0,
                            s = e.dot(a, n) + o < 0,
                            c = e.dot(a, r) + o < 0,
                            l = 0;
                        (l += u ? 1 : 0), (l += s ? 1 : 0), (l += c ? 1 : 0);
                        var f, h;
                        if (
                            ((1 !== l && 2 !== l) ||
                                ((f = new e()), (h = new e())),
                            1 === l)
                        ) {
                            if (u)
                                return (
                                    m.lineSegmentPlane(t, n, i, f),
                                    m.lineSegmentPlane(t, r, i, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [0, 3, 4, 1, 2, 4, 1, 4, 3],
                                    }
                                );
                            if (s)
                                return (
                                    m.lineSegmentPlane(n, r, i, f),
                                    m.lineSegmentPlane(n, t, i, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [1, 3, 4, 2, 0, 4, 2, 4, 3],
                                    }
                                );
                            if (c)
                                return (
                                    m.lineSegmentPlane(r, t, i, f),
                                    m.lineSegmentPlane(r, n, i, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [2, 3, 4, 0, 1, 4, 0, 4, 3],
                                    }
                                );
                        } else if (2 === l) {
                            if (!u)
                                return (
                                    m.lineSegmentPlane(n, t, i, f),
                                    m.lineSegmentPlane(r, t, i, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [1, 2, 4, 1, 4, 3, 0, 3, 4],
                                    }
                                );
                            if (!s)
                                return (
                                    m.lineSegmentPlane(r, n, i, f),
                                    m.lineSegmentPlane(t, n, i, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [2, 0, 4, 2, 4, 3, 1, 3, 4],
                                    }
                                );
                            if (!c)
                                return (
                                    m.lineSegmentPlane(t, r, i, f),
                                    m.lineSegmentPlane(n, r, i, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [0, 1, 4, 0, 4, 3, 2, 3, 4],
                                    }
                                );
                        }
                    }),
                    m
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
            function (e, t, n, r, i) {
                'use strict';
                function a(t, n) {
                    (this.normal = e.clone(t)), (this.distance = n);
                }
                a.fromPointNormal = function (n, r, i) {
                    var o = -e.dot(r, n);
                    return t(i)
                        ? (e.clone(r, i.normal), (i.distance = o), i)
                        : new a(r, o);
                };
                var o = new e();
                return (
                    (a.fromCartesian4 = function (n, r) {
                        var i = e.fromCartesian4(n, o),
                            u = n.w;
                        return t(r)
                            ? (e.clone(i, r.normal), (r.distance = u), r)
                            : new a(i, u);
                    }),
                    (a.getPointDistance = function (t, n) {
                        return e.dot(t.normal, n) + t.distance;
                    }),
                    (a.ORIGIN_XY_PLANE = r(new a(e.UNIT_Z, 0))),
                    (a.ORIGIN_YZ_PLANE = r(new a(e.UNIT_X, 0))),
                    (a.ORIGIN_ZX_PLANE = r(new a(e.UNIT_Y, 0))),
                    a
                );
            },
        ),
        (function (e) {
            'use strict';
            e('ThirdParty/when', [], function () {
                function e(e, n, r, i) {
                    return t(e).then(n, r, i);
                }
                function t(e) {
                    var t, n;
                    return (
                        e instanceof r
                            ? (t = e)
                            : u(e)
                              ? ((n = o()),
                                e.then(
                                    function (e) {
                                        n.resolve(e);
                                    },
                                    function (e) {
                                        n.reject(e);
                                    },
                                    function (e) {
                                        n.progress(e);
                                    },
                                ),
                                (t = n.promise))
                              : (t = i(e)),
                        t
                    );
                }
                function n(t) {
                    return e(t, a);
                }
                function r(e) {
                    this.then = e;
                }
                function i(e) {
                    return new r(function (n) {
                        try {
                            return t(n ? n(e) : e);
                        } catch (e) {
                            return a(e);
                        }
                    });
                }
                function a(e) {
                    return new r(function (n, r) {
                        try {
                            return r ? t(r(e)) : a(e);
                        } catch (e) {
                            return a(e);
                        }
                    });
                }
                function o() {
                    function e(e, t, n) {
                        return h(e, t, n);
                    }
                    function n(e) {
                        return p(e);
                    }
                    function i(e) {
                        return p(a(e));
                    }
                    function u(e) {
                        return d(e);
                    }
                    var s, c, l, f, h, d, p;
                    return (
                        (c = new r(e)),
                        (s = {
                            then: e,
                            resolve: n,
                            reject: i,
                            progress: u,
                            promise: c,
                            resolver: { resolve: n, reject: i, progress: u },
                        }),
                        (l = []),
                        (f = []),
                        (h = function (e, t, n) {
                            var r, i;
                            return (
                                (r = o()),
                                (i =
                                    'function' == typeof n
                                        ? function (e) {
                                              try {
                                                  r.progress(n(e));
                                              } catch (e) {
                                                  r.progress(e);
                                              }
                                          }
                                        : function (e) {
                                              r.progress(e);
                                          }),
                                l.push(function (n) {
                                    n.then(e, t).then(r.resolve, r.reject, i);
                                }),
                                f.push(i),
                                r.promise
                            );
                        }),
                        (d = function (e) {
                            return m(f, e), e;
                        }),
                        (p = function (e) {
                            return (
                                (e = t(e)),
                                (h = e.then),
                                (p = t),
                                (d = y),
                                m(l, e),
                                (f = l = R),
                                e
                            );
                        }),
                        s
                    );
                }
                function u(e) {
                    return e && 'function' == typeof e.then;
                }
                function s(t, n, r, i, a) {
                    return (
                        E(2, arguments),
                        e(t, function (t) {
                            function u(e) {
                                m(e);
                            }
                            function s(e) {
                                p(e);
                            }
                            var c, l, f, h, d, p, m, E, _, v;
                            if (
                                ((_ = t.length >>> 0),
                                (c = Math.max(0, Math.min(n, _))),
                                (f = []),
                                (l = _ - c + 1),
                                (h = []),
                                (d = o()),
                                c)
                            )
                                for (
                                    E = d.progress,
                                        m = function (e) {
                                            h.push(e),
                                                --l ||
                                                    ((p = m = y), d.reject(h));
                                        },
                                        p = function (e) {
                                            f.push(e),
                                                --c ||
                                                    ((p = m = y), d.resolve(f));
                                        },
                                        v = 0;
                                    v < _;
                                    ++v
                                )
                                    v in t && e(t[v], s, u, E);
                            else d.resolve(f);
                            return d.then(r, i, a);
                        })
                    );
                }
                function c(e, t, n, r) {
                    function i(e) {
                        return t ? t(e[0]) : e[0];
                    }
                    return s(e, 1, i, n, r);
                }
                function l(e, t, n, r) {
                    return E(1, arguments), h(e, _).then(t, n, r);
                }
                function f() {
                    return h(arguments, _);
                }
                function h(t, n) {
                    return e(t, function (t) {
                        var r, i, a, u, s, c;
                        if (((a = i = t.length >>> 0), (r = []), (c = o()), a))
                            for (
                                u = function (t, i) {
                                    e(t, n).then(function (e) {
                                        (r[i] = e), --a || c.resolve(r);
                                    }, c.reject);
                                },
                                    s = 0;
                                s < i;
                                s++
                            )
                                s in t ? u(t[s], s) : --a;
                        else c.resolve(r);
                        return c.promise;
                    });
                }
                function d(t, n) {
                    var r = T.call(arguments, 1);
                    return e(t, function (t) {
                        var i;
                        return (
                            (i = t.length),
                            (r[0] = function (t, r, a) {
                                return e(t, function (t) {
                                    return e(r, function (e) {
                                        return n(t, e, a, i);
                                    });
                                });
                            }),
                            v.apply(t, r)
                        );
                    });
                }
                function p(t, n, r) {
                    var i = arguments.length > 2;
                    return e(
                        t,
                        function (e) {
                            return (e = i ? r : e), n.resolve(e), e;
                        },
                        function (e) {
                            return n.reject(e), a(e);
                        },
                        n.progress,
                    );
                }
                function m(e, t) {
                    for (var n, r = 0; (n = e[r++]); ) n(t);
                }
                function E(e, t) {
                    for (var n, r = t.length; r > e; )
                        if (null != (n = t[--r]) && 'function' != typeof n)
                            throw new Error('arg ' + r + ' must be a function');
                }
                function y() {}
                function _(e) {
                    return e;
                }
                var v, T, R;
                return (
                    (e.defer = o),
                    (e.resolve = t),
                    (e.reject = n),
                    (e.join = f),
                    (e.all = l),
                    (e.map = h),
                    (e.reduce = d),
                    (e.any = c),
                    (e.some = s),
                    (e.chain = p),
                    (e.isPromise = u),
                    (r.prototype = {
                        always: function (e, t) {
                            return this.then(e, e, t);
                        },
                        otherwise: function (e) {
                            return this.then(R, e);
                        },
                        yield: function (e) {
                            return this.then(function () {
                                return e;
                            });
                        },
                        spread: function (e) {
                            return this.then(function (t) {
                                return l(t, function (t) {
                                    return e.apply(R, t);
                                });
                            });
                        },
                    }),
                    (T = [].slice),
                    (v =
                        [].reduce ||
                        function (e) {
                            var t, n, r, i, a;
                            if (
                                ((a = 0),
                                (t = Object(this)),
                                (i = t.length >>> 0),
                                (n = arguments),
                                n.length <= 1)
                            )
                                for (;;) {
                                    if (a in t) {
                                        r = t[a++];
                                        break;
                                    }
                                    if (++a >= i) throw new TypeError();
                                }
                            else r = n[1];
                            for (; a < i; ++a) a in t && (r = e(r, t[a], a, t));
                            return r;
                        }),
                    e
                );
            });
        })(
            'function' == typeof define && define.amd
                ? define
                : function (e) {
                      'object' == typeof exports
                          ? (module.exports = e())
                          : (this.when = e());
                  },
        ),
        define('Core/binarySearch', ['./Check', './defined'], function (e, t) {
            'use strict';
            function n(e, t, n) {
                for (var r, i, a = 0, o = e.length - 1; a <= o; )
                    if (((r = ~~((a + o) / 2)), (i = n(e[r], t)) < 0))
                        a = r + 1;
                    else {
                        if (!(i > 0)) return r;
                        o = r - 1;
                    }
                return ~(o + 1);
            }
            return n;
        }),
        define('Core/EarthOrientationParametersSample', [], function () {
            'use strict';
            function e(e, t, n, r, i) {
                (this.xPoleWander = e),
                    (this.yPoleWander = t),
                    (this.xPoleOffset = n),
                    (this.yPoleOffset = r),
                    (this.ut1MinusUtc = i);
            }
            return e;
        }),
        define('ThirdParty/sprintf', [], function () {
            function e() {
                var e =
                        /%%|%(\d+\$)?([-+\'#0 ]*)(\*\d+\$|\*|\d+)?(\.(\*\d+\$|\*|\d+))?([scboxXuideEfFgG])/g,
                    t = arguments,
                    n = 0,
                    r = t[n++],
                    i = function (e, t, n, r) {
                        n || (n = ' ');
                        var i =
                            e.length >= t
                                ? ''
                                : Array((1 + t - e.length) >>> 0).join(n);
                        return r ? e + i : i + e;
                    },
                    a = function (e, t, n, r, a, o) {
                        var u = r - e.length;
                        return (
                            u > 0 &&
                                (e =
                                    n || !a
                                        ? i(e, r, o, n)
                                        : e.slice(0, t.length) +
                                          i('', u, '0', !0) +
                                          e.slice(t.length)),
                            e
                        );
                    },
                    o = function (e, t, n, r, o, u, s) {
                        var c = e >>> 0;
                        return (
                            (n =
                                (n && c && { 2: '0b', 8: '0', 16: '0x' }[t]) ||
                                ''),
                            (e = n + i(c.toString(t), u || 0, '0', !1)),
                            a(e, n, r, o, s)
                        );
                    },
                    u = function (e, t, n, r, i, o) {
                        return (
                            null != r && (e = e.slice(0, r)),
                            a(e, '', t, n, i, o)
                        );
                    },
                    s = function (e, r, s, c, l, f, h) {
                        var d, p, m, E, y;
                        if ('%%' == e) return '%';
                        for (
                            var _ = !1,
                                v = '',
                                T = !1,
                                R = !1,
                                A = ' ',
                                g = s.length,
                                S = 0;
                            s && S < g;
                            S++
                        )
                            switch (s.charAt(S)) {
                                case ' ':
                                    v = ' ';
                                    break;
                                case '+':
                                    v = '+';
                                    break;
                                case '-':
                                    _ = !0;
                                    break;
                                case "'":
                                    A = s.charAt(S + 1);
                                    break;
                                case '0':
                                    T = !0;
                                    break;
                                case '#':
                                    R = !0;
                            }
                        if (
                            ((c = c
                                ? '*' == c
                                    ? +t[n++]
                                    : '*' == c.charAt(0)
                                      ? +t[c.slice(1, -1)]
                                      : +c
                                : 0),
                            c < 0 && ((c = -c), (_ = !0)),
                            !isFinite(c))
                        )
                            throw new Error(
                                'sprintf: (minimum-)width must be finite',
                            );
                        switch (
                            ((f = f
                                ? '*' == f
                                    ? +t[n++]
                                    : '*' == f.charAt(0)
                                      ? +t[f.slice(1, -1)]
                                      : +f
                                : 'fFeE'.indexOf(h) > -1
                                  ? 6
                                  : 'd' == h
                                    ? 0
                                    : void 0),
                            (y = r ? t[r.slice(0, -1)] : t[n++]),
                            h)
                        ) {
                            case 's':
                                return u(String(y), _, c, f, T, A);
                            case 'c':
                                return u(String.fromCharCode(+y), _, c, f, T);
                            case 'b':
                                return o(y, 2, R, _, c, f, T);
                            case 'o':
                                return o(y, 8, R, _, c, f, T);
                            case 'x':
                                return o(y, 16, R, _, c, f, T);
                            case 'X':
                                return o(y, 16, R, _, c, f, T).toUpperCase();
                            case 'u':
                                return o(y, 10, R, _, c, f, T);
                            case 'i':
                            case 'd':
                                return (
                                    (d = +y || 0),
                                    (d = Math.round(d - (d % 1))),
                                    (p = d < 0 ? '-' : v),
                                    (y =
                                        p + i(String(Math.abs(d)), f, '0', !1)),
                                    a(y, p, _, c, T)
                                );
                            case 'e':
                            case 'E':
                            case 'f':
                            case 'F':
                            case 'g':
                            case 'G':
                                return (
                                    (d = +y),
                                    (p = d < 0 ? '-' : v),
                                    (m = [
                                        'toExponential',
                                        'toFixed',
                                        'toPrecision',
                                    ]['efg'.indexOf(h.toLowerCase())]),
                                    (E = ['toString', 'toUpperCase'][
                                        'eEfFgG'.indexOf(h) % 2
                                    ]),
                                    (y = p + Math.abs(d)[m](f)),
                                    a(y, p, _, c, T)[E]()
                                );
                            default:
                                return e;
                        }
                    };
                return r.replace(e, s);
            }
            return e;
        }),
        define('Core/GregorianDate', [], function () {
            'use strict';
            function e(e, t, n, r, i, a, o, u) {
                (this.year = e),
                    (this.month = t),
                    (this.day = n),
                    (this.hour = r),
                    (this.minute = i),
                    (this.second = a),
                    (this.millisecond = o),
                    (this.isLeapSecond = u);
            }
            return e;
        }),
        define('Core/isLeapYear', ['./DeveloperError'], function (e) {
            'use strict';
            function t(e) {
                return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
            }
            return t;
        }),
        define('Core/LeapSecond', [], function () {
            'use strict';
            function e(e, t) {
                (this.julianDate = e), (this.offset = t);
            }
            return e;
        }),
        define('Core/TimeConstants', ['./freezeObject'], function (e) {
            'use strict';
            return e({
                SECONDS_PER_MILLISECOND: 0.001,
                SECONDS_PER_MINUTE: 60,
                MINUTES_PER_HOUR: 60,
                HOURS_PER_DAY: 24,
                SECONDS_PER_HOUR: 3600,
                MINUTES_PER_DAY: 1440,
                SECONDS_PER_DAY: 86400,
                DAYS_PER_JULIAN_CENTURY: 36525,
                PICOSECOND: 1e-9,
                MODIFIED_JULIAN_DATE_DIFFERENCE: 2400000.5,
            });
        }),
        define('Core/TimeStandard', ['./freezeObject'], function (e) {
            'use strict';
            return e({ UTC: 0, TAI: 1 });
        }),
        define(
            'Core/JulianDate',
            [
                '../ThirdParty/sprintf',
                './binarySearch',
                './defaultValue',
                './defined',
                './DeveloperError',
                './GregorianDate',
                './isLeapYear',
                './LeapSecond',
                './TimeConstants',
                './TimeStandard',
            ],
            function (e, t, n, r, i, a, o, u, s, c) {
                'use strict';
                function l(e, t) {
                    return m.compare(e.julianDate, t.julianDate);
                }
                function f(e) {
                    _.julianDate = e;
                    var n = m.leapSeconds,
                        r = t(n, _, l);
                    r < 0 && (r = ~r), r >= n.length && (r = n.length - 1);
                    var i = n[r].offset;
                    if (r > 0) {
                        m.secondsDifference(n[r].julianDate, e) > i &&
                            (r--, (i = n[r].offset));
                    }
                    m.addSeconds(e, i, e);
                }
                function h(e, n) {
                    _.julianDate = e;
                    var r = m.leapSeconds,
                        i = t(r, _, l);
                    if ((i < 0 && (i = ~i), 0 === i))
                        return m.addSeconds(e, -r[0].offset, n);
                    if (i >= r.length)
                        return m.addSeconds(e, -r[i - 1].offset, n);
                    var a = m.secondsDifference(r[i].julianDate, e);
                    return 0 === a
                        ? m.addSeconds(e, -r[i].offset, n)
                        : a <= 1
                          ? void 0
                          : m.addSeconds(e, -r[--i].offset, n);
                }
                function d(e, t, n) {
                    var r = (t / s.SECONDS_PER_DAY) | 0;
                    return (
                        (e += r),
                        (t -= s.SECONDS_PER_DAY * r),
                        t < 0 && (e--, (t += s.SECONDS_PER_DAY)),
                        (n.dayNumber = e),
                        (n.secondsOfDay = t),
                        n
                    );
                }
                function p(e, t, n, r, i, a, o) {
                    var u = ((t - 14) / 12) | 0,
                        c = e + 4800 + u,
                        l =
                            (((1461 * c) / 4) | 0) +
                            (((367 * (t - 2 - 12 * u)) / 12) | 0) -
                            (((3 * (((c + 100) / 100) | 0)) / 4) | 0) +
                            n -
                            32075;
                    (r -= 12) < 0 && (r += 24);
                    var f =
                        a +
                        (r * s.SECONDS_PER_HOUR +
                            i * s.SECONDS_PER_MINUTE +
                            o * s.SECONDS_PER_MILLISECOND);
                    return f >= 43200 && (l -= 1), [l, f];
                }
                function m(e, t, r) {
                    (this.dayNumber = void 0),
                        (this.secondsOfDay = void 0),
                        (e = n(e, 0)),
                        (t = n(t, 0)),
                        (r = n(r, c.UTC));
                    var i = 0 | e;
                    (t += (e - i) * s.SECONDS_PER_DAY),
                        d(i, t, this),
                        r === c.UTC && f(this);
                }
                var E = new a(),
                    y = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    _ = new u(),
                    v = /^(\d{4})$/,
                    T = /^(\d{4})-(\d{2})$/,
                    R = /^(\d{4})-?(\d{3})$/,
                    A = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                    g = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                    S = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                    N = /^(\d{2})(\.\d+)?/.source + S.source,
                    O = /^(\d{2}):?(\d{2})(\.\d+)?/.source + S.source,
                    x = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + S.source;
                (m.fromGregorianDate = function (e, t) {
                    var n = p(
                        e.year,
                        e.month,
                        e.day,
                        e.hour,
                        e.minute,
                        e.second,
                        e.millisecond,
                    );
                    return r(t)
                        ? (d(n[0], n[1], t), f(t), t)
                        : new m(n[0], n[1], c.UTC);
                }),
                    (m.fromDate = function (e, t) {
                        var n = p(
                            e.getUTCFullYear(),
                            e.getUTCMonth() + 1,
                            e.getUTCDate(),
                            e.getUTCHours(),
                            e.getUTCMinutes(),
                            e.getUTCSeconds(),
                            e.getUTCMilliseconds(),
                        );
                        return r(t)
                            ? (d(n[0], n[1], t), f(t), t)
                            : new m(n[0], n[1], c.UTC);
                    }),
                    (m.fromIso8601 = function (e, t) {
                        e = e.replace(',', '.');
                        var n,
                            i,
                            a,
                            u = e.split('T'),
                            s = 1,
                            l = 1,
                            h = 0,
                            E = 0,
                            _ = 0,
                            S = 0,
                            w = u[0],
                            I = u[1];
                        if (null !== (u = w.match(g)))
                            (n = +u[1]), (s = +u[2]), (l = +u[3]);
                        else if (null !== (u = w.match(T)))
                            (n = +u[1]), (s = +u[2]);
                        else if (null !== (u = w.match(v))) n = +u[1];
                        else {
                            var M;
                            if (null !== (u = w.match(R)))
                                (n = +u[1]), (M = +u[2]), (a = o(n));
                            else if (null !== (u = w.match(A))) {
                                n = +u[1];
                                var C = +u[2],
                                    P = +u[3] || 0,
                                    D = new Date(Date.UTC(n, 0, 4));
                                M = 7 * C + P - D.getUTCDay() - 3;
                            }
                            (i = new Date(Date.UTC(n, 0, 1))),
                                i.setUTCDate(M),
                                (s = i.getUTCMonth() + 1),
                                (l = i.getUTCDate());
                        }
                        a = o(n);
                        var L;
                        if (r(I)) {
                            (u = I.match(x)),
                                null !== u
                                    ? ((h = +u[1]),
                                      (E = +u[2]),
                                      (_ = +u[3]),
                                      (S = 1e3 * +(u[4] || 0)),
                                      (L = 5))
                                    : ((u = I.match(O)),
                                      null !== u
                                          ? ((h = +u[1]),
                                            (E = +u[2]),
                                            (_ = 60 * +(u[3] || 0)),
                                            (L = 4))
                                          : null !== (u = I.match(N)) &&
                                            ((h = +u[1]),
                                            (E = 60 * +(u[2] || 0)),
                                            (L = 3)));
                            var b = u[L],
                                U = +u[L + 1],
                                F = +(u[L + 2] || 0);
                            switch (b) {
                                case '+':
                                    (h -= U), (E -= F);
                                    break;
                                case '-':
                                    (h += U), (E += F);
                                    break;
                                case 'Z':
                                    break;
                                default:
                                    E += new Date(
                                        Date.UTC(n, s - 1, l, h, E),
                                    ).getTimezoneOffset();
                            }
                        }
                        var B = 60 === _;
                        for (B && _--; E >= 60; ) (E -= 60), h++;
                        for (; h >= 24; ) (h -= 24), l++;
                        for (i = a && 2 === s ? 29 : y[s - 1]; l > i; )
                            (l -= i),
                                s++,
                                s > 12 && ((s -= 12), n++),
                                (i = a && 2 === s ? 29 : y[s - 1]);
                        for (; E < 0; ) (E += 60), h--;
                        for (; h < 0; ) (h += 24), l--;
                        for (; l < 1; )
                            s--,
                                s < 1 && ((s += 12), n--),
                                (i = a && 2 === s ? 29 : y[s - 1]),
                                (l += i);
                        var z = p(n, s, l, h, E, _, S);
                        return (
                            r(t)
                                ? (d(z[0], z[1], t), f(t))
                                : (t = new m(z[0], z[1], c.UTC)),
                            B && m.addSeconds(t, 1, t),
                            t
                        );
                    }),
                    (m.now = function (e) {
                        return m.fromDate(new Date(), e);
                    });
                var w = new m(0, 0, c.TAI);
                return (
                    (m.toGregorianDate = function (e, t) {
                        var n = !1,
                            i = h(e, w);
                        r(i) ||
                            (m.addSeconds(e, -1, w), (i = h(w, w)), (n = !0));
                        var o = i.dayNumber,
                            u = i.secondsOfDay;
                        u >= 43200 && (o += 1);
                        var c = (o + 68569) | 0,
                            l = ((4 * c) / 146097) | 0;
                        c = (c - (((146097 * l + 3) / 4) | 0)) | 0;
                        var f = ((4e3 * (c + 1)) / 1461001) | 0;
                        c = (c - (((1461 * f) / 4) | 0) + 31) | 0;
                        var d = ((80 * c) / 2447) | 0,
                            p = (c - (((2447 * d) / 80) | 0)) | 0;
                        c = (d / 11) | 0;
                        var E = (d + 2 - 12 * c) | 0,
                            y = (100 * (l - 49) + f + c) | 0,
                            _ = (u / s.SECONDS_PER_HOUR) | 0,
                            v = u - _ * s.SECONDS_PER_HOUR,
                            T = (v / s.SECONDS_PER_MINUTE) | 0;
                        v -= T * s.SECONDS_PER_MINUTE;
                        var R = 0 | v,
                            A = (v - R) / s.SECONDS_PER_MILLISECOND;
                        return (
                            (_ += 12),
                            _ > 23 && (_ -= 24),
                            n && (R += 1),
                            r(t)
                                ? ((t.year = y),
                                  (t.month = E),
                                  (t.day = p),
                                  (t.hour = _),
                                  (t.minute = T),
                                  (t.second = R),
                                  (t.millisecond = A),
                                  (t.isLeapSecond = n),
                                  t)
                                : new a(y, E, p, _, T, R, A, n)
                        );
                    }),
                    (m.toDate = function (e) {
                        var t = m.toGregorianDate(e, E),
                            n = t.second;
                        return (
                            t.isLeapSecond && (n -= 1),
                            new Date(
                                Date.UTC(
                                    t.year,
                                    t.month - 1,
                                    t.day,
                                    t.hour,
                                    t.minute,
                                    n,
                                    t.millisecond,
                                ),
                            )
                        );
                    }),
                    (m.toIso8601 = function (t, n) {
                        var i,
                            a = m.toGregorianDate(t, E);
                        return r(n) || 0 === a.millisecond
                            ? r(n) && 0 !== n
                                ? ((i = (0.01 * a.millisecond)
                                      .toFixed(n)
                                      .replace('.', '')
                                      .slice(0, n)),
                                  e(
                                      '%04d-%02d-%02dT%02d:%02d:%02d.%sZ',
                                      a.year,
                                      a.month,
                                      a.day,
                                      a.hour,
                                      a.minute,
                                      a.second,
                                      i,
                                  ))
                                : e(
                                      '%04d-%02d-%02dT%02d:%02d:%02dZ',
                                      a.year,
                                      a.month,
                                      a.day,
                                      a.hour,
                                      a.minute,
                                      a.second,
                                  )
                            : ((i = (0.01 * a.millisecond)
                                  .toString()
                                  .replace('.', '')),
                              e(
                                  '%04d-%02d-%02dT%02d:%02d:%02d.%sZ',
                                  a.year,
                                  a.month,
                                  a.day,
                                  a.hour,
                                  a.minute,
                                  a.second,
                                  i,
                              ));
                    }),
                    (m.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.dayNumber = e.dayNumber),
                                  (t.secondsOfDay = e.secondsOfDay),
                                  t)
                                : new m(e.dayNumber, e.secondsOfDay, c.TAI);
                    }),
                    (m.compare = function (e, t) {
                        var n = e.dayNumber - t.dayNumber;
                        return 0 !== n ? n : e.secondsOfDay - t.secondsOfDay;
                    }),
                    (m.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                e.dayNumber === t.dayNumber &&
                                e.secondsOfDay === t.secondsOfDay)
                        );
                    }),
                    (m.equalsEpsilon = function (e, t, n) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                Math.abs(m.secondsDifference(e, t)) <= n)
                        );
                    }),
                    (m.totalDays = function (e) {
                        return e.dayNumber + e.secondsOfDay / s.SECONDS_PER_DAY;
                    }),
                    (m.secondsDifference = function (e, t) {
                        return (
                            (e.dayNumber - t.dayNumber) * s.SECONDS_PER_DAY +
                            (e.secondsOfDay - t.secondsOfDay)
                        );
                    }),
                    (m.daysDifference = function (e, t) {
                        return (
                            e.dayNumber -
                            t.dayNumber +
                            (e.secondsOfDay - t.secondsOfDay) /
                                s.SECONDS_PER_DAY
                        );
                    }),
                    (m.computeTaiMinusUtc = function (e) {
                        _.julianDate = e;
                        var n = m.leapSeconds,
                            r = t(n, _, l);
                        return (
                            r < 0 && ((r = ~r), --r < 0 && (r = 0)), n[r].offset
                        );
                    }),
                    (m.addSeconds = function (e, t, n) {
                        return d(e.dayNumber, e.secondsOfDay + t, n);
                    }),
                    (m.addMinutes = function (e, t, n) {
                        var r = e.secondsOfDay + t * s.SECONDS_PER_MINUTE;
                        return d(e.dayNumber, r, n);
                    }),
                    (m.addHours = function (e, t, n) {
                        var r = e.secondsOfDay + t * s.SECONDS_PER_HOUR;
                        return d(e.dayNumber, r, n);
                    }),
                    (m.addDays = function (e, t, n) {
                        return d(e.dayNumber + t, e.secondsOfDay, n);
                    }),
                    (m.lessThan = function (e, t) {
                        return m.compare(e, t) < 0;
                    }),
                    (m.lessThanOrEquals = function (e, t) {
                        return m.compare(e, t) <= 0;
                    }),
                    (m.greaterThan = function (e, t) {
                        return m.compare(e, t) > 0;
                    }),
                    (m.greaterThanOrEquals = function (e, t) {
                        return m.compare(e, t) >= 0;
                    }),
                    (m.prototype.clone = function (e) {
                        return m.clone(this, e);
                    }),
                    (m.prototype.equals = function (e) {
                        return m.equals(this, e);
                    }),
                    (m.prototype.equalsEpsilon = function (e, t) {
                        return m.equalsEpsilon(this, e, t);
                    }),
                    (m.prototype.toString = function () {
                        return m.toIso8601(this);
                    }),
                    (m.leapSeconds = [
                        new u(new m(2441317, 43210, c.TAI), 10),
                        new u(new m(2441499, 43211, c.TAI), 11),
                        new u(new m(2441683, 43212, c.TAI), 12),
                        new u(new m(2442048, 43213, c.TAI), 13),
                        new u(new m(2442413, 43214, c.TAI), 14),
                        new u(new m(2442778, 43215, c.TAI), 15),
                        new u(new m(2443144, 43216, c.TAI), 16),
                        new u(new m(2443509, 43217, c.TAI), 17),
                        new u(new m(2443874, 43218, c.TAI), 18),
                        new u(new m(2444239, 43219, c.TAI), 19),
                        new u(new m(2444786, 43220, c.TAI), 20),
                        new u(new m(2445151, 43221, c.TAI), 21),
                        new u(new m(2445516, 43222, c.TAI), 22),
                        new u(new m(2446247, 43223, c.TAI), 23),
                        new u(new m(2447161, 43224, c.TAI), 24),
                        new u(new m(2447892, 43225, c.TAI), 25),
                        new u(new m(2448257, 43226, c.TAI), 26),
                        new u(new m(2448804, 43227, c.TAI), 27),
                        new u(new m(2449169, 43228, c.TAI), 28),
                        new u(new m(2449534, 43229, c.TAI), 29),
                        new u(new m(2450083, 43230, c.TAI), 30),
                        new u(new m(2450630, 43231, c.TAI), 31),
                        new u(new m(2451179, 43232, c.TAI), 32),
                        new u(new m(2453736, 43233, c.TAI), 33),
                        new u(new m(2454832, 43234, c.TAI), 34),
                        new u(new m(2456109, 43235, c.TAI), 35),
                        new u(new m(2457204, 43236, c.TAI), 36),
                        new u(new m(2457754, 43237, c.TAI), 37),
                    ]),
                    m
                );
            },
        ),
        define('Core/clone', ['./defaultValue'], function (e) {
            'use strict';
            function t(n, r) {
                if (null === n || 'object' != typeof n) return n;
                r = e(r, !1);
                var i = new n.constructor();
                for (var a in n)
                    if (n.hasOwnProperty(a)) {
                        var o = n[a];
                        r && (o = t(o, r)), (i[a] = o);
                    }
                return i;
            }
            return t;
        }),
        define('Core/RequestState', ['../Core/freezeObject'], function (e) {
            'use strict';
            return e({
                UNISSUED: 0,
                ISSUED: 1,
                ACTIVE: 2,
                RECEIVED: 3,
                CANCELLED: 4,
                FAILED: 5,
            });
        }),
        define('Core/RequestType', ['../Core/freezeObject'], function (e) {
            'use strict';
            return e({ TERRAIN: 0, IMAGERY: 1, TILES3D: 2, OTHER: 3 });
        }),
        define(
            'Core/Request',
            [
                './defaultValue',
                './defined',
                './defineProperties',
                './RequestState',
                './RequestType',
            ],
            function (e, t, n, r, i) {
                'use strict';
                function a(t) {
                    t = e(t, e.EMPTY_OBJECT);
                    var n = e(t.throttleByServer, !1),
                        a = n || e(t.throttle, !1);
                    (this.url = t.url),
                        (this.requestFunction = t.requestFunction),
                        (this.cancelFunction = t.cancelFunction),
                        (this.priorityFunction = t.priorityFunction),
                        (this.priority = e(t.priority, 0)),
                        (this.throttle = a),
                        (this.throttleByServer = n),
                        (this.type = e(t.type, i.OTHER)),
                        (this.serverKey = void 0),
                        (this.state = r.UNISSUED),
                        (this.deferred = void 0),
                        (this.cancelled = !1);
                }
                return (
                    (a.prototype.cancel = function () {
                        this.cancelled = !0;
                    }),
                    a
                );
            },
        ),
        define('Core/parseResponseHeaders', [], function () {
            'use strict';
            function e(e) {
                var t = {};
                if (!e) return t;
                for (var n = e.split('\r\n'), r = 0; r < n.length; ++r) {
                    var i = n[r],
                        a = i.indexOf(': ');
                    if (a > 0) {
                        var o = i.substring(0, a),
                            u = i.substring(a + 2);
                        t[o] = u;
                    }
                }
                return t;
            }
            return e;
        }),
        define(
            'Core/RequestErrorEvent',
            ['./defined', './parseResponseHeaders'],
            function (e, t) {
                'use strict';
                function n(e, n, r) {
                    (this.statusCode = e),
                        (this.response = n),
                        (this.responseHeaders = r),
                        'string' == typeof this.responseHeaders &&
                            (this.responseHeaders = t(this.responseHeaders));
                }
                return (
                    (n.prototype.toString = function () {
                        var t = 'Request has failed.';
                        return (
                            e(this.statusCode) &&
                                (t += ' Status Code: ' + this.statusCode),
                            t
                        );
                    }),
                    n
                );
            },
        ),
        define('ThirdParty/Uri', [], function () {
            function e(t) {
                if (t instanceof e)
                    (this.scheme = t.scheme),
                        (this.authority = t.authority),
                        (this.path = t.path),
                        (this.query = t.query),
                        (this.fragment = t.fragment);
                else if (t) {
                    var n = r.exec(t);
                    (this.scheme = n[1]),
                        (this.authority = n[2]),
                        (this.path = n[3]),
                        (this.query = n[4]),
                        (this.fragment = n[5]);
                }
            }
            function t(e) {
                var t = unescape(e);
                return a.test(t) ? t : e.toUpperCase();
            }
            function n(e, t, n, r) {
                return (t || '') + n.toLowerCase() + (r || '');
            }
            (e.prototype.scheme = null),
                (e.prototype.authority = null),
                (e.prototype.path = ''),
                (e.prototype.query = null),
                (e.prototype.fragment = null);
            var r = new RegExp(
                '^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$',
            );
            (e.prototype.getScheme = function () {
                return this.scheme;
            }),
                (e.prototype.getAuthority = function () {
                    return this.authority;
                }),
                (e.prototype.getPath = function () {
                    return this.path;
                }),
                (e.prototype.getQuery = function () {
                    return this.query;
                }),
                (e.prototype.getFragment = function () {
                    return this.fragment;
                }),
                (e.prototype.isAbsolute = function () {
                    return !!this.scheme && !this.fragment;
                }),
                (e.prototype.isSameDocumentAs = function (e) {
                    return (
                        e.scheme == this.scheme &&
                        e.authority == this.authority &&
                        e.path == this.path &&
                        e.query == this.query
                    );
                }),
                (e.prototype.equals = function (e) {
                    return (
                        this.isSameDocumentAs(e) && e.fragment == this.fragment
                    );
                }),
                (e.prototype.normalize = function () {
                    this.removeDotSegments(),
                        this.scheme &&
                            (this.scheme = this.scheme.toLowerCase()),
                        this.authority &&
                            (this.authority = this.authority
                                .replace(o, n)
                                .replace(i, t)),
                        this.path && (this.path = this.path.replace(i, t)),
                        this.query && (this.query = this.query.replace(i, t)),
                        this.fragment &&
                            (this.fragment = this.fragment.replace(i, t));
                });
            var i = /%[0-9a-z]{2}/gi,
                a = /[a-zA-Z0-9\-\._~]/,
                o = /(.*@)?([^@:]*)(:.*)?/;
            return (
                (e.prototype.resolve = function (t) {
                    var n = new e();
                    return (
                        this.scheme
                            ? ((n.scheme = this.scheme),
                              (n.authority = this.authority),
                              (n.path = this.path),
                              (n.query = this.query))
                            : ((n.scheme = t.scheme),
                              this.authority
                                  ? ((n.authority = this.authority),
                                    (n.path = this.path),
                                    (n.query = this.query))
                                  : ((n.authority = t.authority),
                                    '' == this.path
                                        ? ((n.path = t.path),
                                          (n.query = this.query || t.query))
                                        : ('/' == this.path.charAt(0)
                                              ? ((n.path = this.path),
                                                n.removeDotSegments())
                                              : (t.authority && '' == t.path
                                                    ? (n.path = '/' + this.path)
                                                    : (n.path =
                                                          t.path.substring(
                                                              0,
                                                              t.path.lastIndexOf(
                                                                  '/',
                                                              ) + 1,
                                                          ) + this.path),
                                                n.removeDotSegments()),
                                          (n.query = this.query)))),
                        (n.fragment = this.fragment),
                        n
                    );
                }),
                (e.prototype.removeDotSegments = function () {
                    var e,
                        t = this.path.split('/'),
                        n = [],
                        r = '' == t[0];
                    r && t.shift();
                    for ('' == t[0] && t.shift(); t.length; )
                        (e = t.shift()),
                            '..' == e ? n.pop() : '.' != e && n.push(e);
                    ('.' != e && '..' != e) || n.push(''),
                        r && n.unshift(''),
                        (this.path = n.join('/'));
                }),
                (e.prototype.toString = function () {
                    var e = '';
                    return (
                        this.scheme && (e += this.scheme + ':'),
                        this.authority && (e += '//' + this.authority),
                        (e += this.path),
                        this.query && (e += '?' + this.query),
                        this.fragment && (e += '#' + this.fragment),
                        e
                    );
                }),
                e
            );
        }),
        define(
            'Core/Heap',
            ['./Check', './defaultValue', './defined', './defineProperties'],
            function (e, t, n, r) {
                'use strict';
                function i(e) {
                    (this._comparator = e.comparator),
                        (this._array = []),
                        (this._length = 0),
                        (this._maximumLength = void 0);
                }
                function a(e, t, n) {
                    var r = e[t];
                    (e[t] = e[n]), (e[n] = r);
                }
                return (
                    r(i.prototype, {
                        length: {
                            get: function () {
                                return this._length;
                            },
                        },
                        internalArray: {
                            get: function () {
                                return this._array;
                            },
                        },
                        maximumLength: {
                            get: function () {
                                return this._maximumLength;
                            },
                            set: function (e) {
                                (this._maximumLength = e),
                                    this._length > e &&
                                        e > 0 &&
                                        ((this._length = e),
                                        (this._array.length = e));
                            },
                        },
                        comparator: {
                            get: function () {
                                return this._comparator;
                            },
                        },
                    }),
                    (i.prototype.reserve = function (e) {
                        (e = t(e, this._length)), (this._array.length = e);
                    }),
                    (i.prototype.heapify = function (e) {
                        e = t(e, 0);
                        for (
                            var n = this._length,
                                r = this._comparator,
                                i = this._array,
                                o = -1,
                                u = !0;
                            u;

                        ) {
                            var s = 2 * (e + 1),
                                c = s - 1;
                            (o = c < n && r(i[c], i[e]) < 0 ? c : e),
                                s < n && r(i[s], i[o]) < 0 && (o = s),
                                o !== e ? (a(i, o, e), (e = o)) : (u = !1);
                        }
                    }),
                    (i.prototype.resort = function () {
                        for (
                            var e = this._length, t = Math.ceil(e / 2);
                            t >= 0;
                            --t
                        )
                            this.heapify(t);
                    }),
                    (i.prototype.insert = function (e) {
                        var t = this._array,
                            r = this._comparator,
                            i = this._maximumLength,
                            o = this._length++;
                        for (o < t.length ? (t[o] = e) : t.push(e); 0 !== o; ) {
                            var u = Math.floor((o - 1) / 2);
                            if (!(r(t[o], t[u]) < 0)) break;
                            a(t, o, u), (o = u);
                        }
                        var s;
                        return (
                            n(i) &&
                                this._length > i &&
                                ((s = t[i]), (this._length = i)),
                            s
                        );
                    }),
                    (i.prototype.pop = function (e) {
                        if (((e = t(e, 0)), 0 !== this._length)) {
                            var n = this._array,
                                r = n[e];
                            return a(n, e, --this._length), this.heapify(e), r;
                        }
                    }),
                    i
                );
            },
        ),
        define('Core/isBlobUri', ['./Check'], function (e) {
            'use strict';
            function t(e) {
                return n.test(e);
            }
            var n = /^blob:/i;
            return t;
        }),
        define('Core/isDataUri', ['./Check'], function (e) {
            'use strict';
            function t(e) {
                return n.test(e);
            }
            var n = /^data:/i;
            return t;
        }),
        define(
            'Core/RequestScheduler',
            [
                '../ThirdParty/Uri',
                '../ThirdParty/when',
                './Check',
                './clone',
                './defined',
                './defineProperties',
                './Heap',
                './isBlobUri',
                './isDataUri',
                './RequestState',
            ],
            function (e, t, n, r, i, a, o, u, s, c) {
                'use strict';
                function l(e, t) {
                    return e.priority - t.priority;
                }
                function f() {}
                function h(e) {
                    i(e.priorityFunction) &&
                        (e.priority = e.priorityFunction());
                }
                function d(e) {
                    return N[e] < f.maximumRequestsPerServer;
                }
                function p(e) {
                    return (
                        e.state === c.UNISSUED &&
                            ((e.state = c.ISSUED), (e.deferred = t.defer())),
                        e.deferred.promise
                    );
                }
                function m(e) {
                    return function (t) {
                        e.state !== c.CANCELLED &&
                            (--R.numberOfActiveRequests,
                            --N[e.serverKey],
                            (e.state = c.RECEIVED),
                            e.deferred.resolve(t));
                    };
                }
                function E(e) {
                    return function (t) {
                        e.state !== c.CANCELLED &&
                            (++R.numberOfFailedRequests,
                            --R.numberOfActiveRequests,
                            --N[e.serverKey],
                            (e.state = c.FAILED),
                            e.deferred.reject(t));
                    };
                }
                function y(e) {
                    var t = p(e);
                    return (
                        (e.state = c.ACTIVE),
                        S.push(e),
                        ++R.numberOfActiveRequests,
                        ++R.numberOfActiveRequestsEver,
                        ++N[e.serverKey],
                        e.requestFunction().then(m(e)).otherwise(E(e)),
                        t
                    );
                }
                function _(e) {
                    var t = e.state === c.ACTIVE;
                    (e.state = c.CANCELLED),
                        ++R.numberOfCancelledRequests,
                        e.deferred.reject(),
                        t &&
                            (--R.numberOfActiveRequests,
                            --N[e.serverKey],
                            ++R.numberOfCancelledActiveRequests),
                        i(e.cancelFunction) && e.cancelFunction();
                }
                function v() {
                    (R.numberOfAttemptedRequests = 0),
                        (R.numberOfCancelledRequests = 0),
                        (R.numberOfCancelledActiveRequests = 0);
                }
                function T() {
                    f.debugShowStatistics &&
                        (R.numberOfAttemptedRequests > 0 &&
                            console.log(
                                'Number of attempted requests: ' +
                                    R.numberOfAttemptedRequests,
                            ),
                        R.numberOfActiveRequests > 0 &&
                            console.log(
                                'Number of active requests: ' +
                                    R.numberOfActiveRequests,
                            ),
                        R.numberOfCancelledRequests > 0 &&
                            console.log(
                                'Number of cancelled requests: ' +
                                    R.numberOfCancelledRequests,
                            ),
                        R.numberOfCancelledActiveRequests > 0 &&
                            console.log(
                                'Number of cancelled active requests: ' +
                                    R.numberOfCancelledActiveRequests,
                            ),
                        R.numberOfFailedRequests > 0 &&
                            console.log(
                                'Number of failed requests: ' +
                                    R.numberOfFailedRequests,
                            ),
                        v());
                }
                var R = {
                        numberOfAttemptedRequests: 0,
                        numberOfActiveRequests: 0,
                        numberOfCancelledRequests: 0,
                        numberOfCancelledActiveRequests: 0,
                        numberOfFailedRequests: 0,
                        numberOfActiveRequestsEver: 0,
                    },
                    A = 20,
                    g = new o({ comparator: l });
                (g.maximumLength = A), g.reserve(A);
                var S = [],
                    N = {},
                    O =
                        'undefined' != typeof document
                            ? new e(document.location.href)
                            : new e();
                return (
                    (f.maximumRequests = 50),
                    (f.maximumRequestsPerServer = 6),
                    (f.throttleRequests = !0),
                    (f.debugShowStatistics = !1),
                    a(f, {
                        statistics: {
                            get: function () {
                                return R;
                            },
                        },
                        priorityHeapLength: {
                            get: function () {
                                return A;
                            },
                            set: function (e) {
                                if (e < A)
                                    for (; g.length > e; ) {
                                        var t = g.pop();
                                        _(t);
                                    }
                                (A = e), (g.maximumLength = e), g.reserve(e);
                            },
                        },
                    }),
                    (f.update = function () {
                        var e,
                            t,
                            n = 0,
                            r = S.length;
                        for (e = 0; e < r; ++e)
                            (t = S[e]),
                                t.cancelled && _(t),
                                t.state === c.ACTIVE
                                    ? n > 0 && (S[e - n] = t)
                                    : ++n;
                        S.length -= n;
                        var i = g.internalArray,
                            a = g.length;
                        for (e = 0; e < a; ++e) h(i[e]);
                        g.resort();
                        for (
                            var o = Math.max(f.maximumRequests - S.length, 0),
                                u = 0;
                            u < o && g.length > 0;

                        )
                            (t = g.pop()),
                                t.cancelled
                                    ? _(t)
                                    : !t.throttleByServer || d(t.serverKey)
                                      ? (y(t), ++u)
                                      : _(t);
                        T();
                    }),
                    (f.getServerKey = function (t) {
                        var n = new e(t).resolve(O);
                        n.normalize();
                        var r = n.authority;
                        /:/.test(r) ||
                            (r =
                                r +
                                ':' +
                                ('https' === n.scheme ? '443' : '80'));
                        var a = N[r];
                        return i(a) || (N[r] = 0), r;
                    }),
                    (f.request = function (e) {
                        if (s(e.url) || u(e.url))
                            return (e.state = c.RECEIVED), e.requestFunction();
                        if (
                            (++R.numberOfAttemptedRequests,
                            i(e.serverKey) ||
                                (e.serverKey = f.getServerKey(e.url)),
                            !f.throttleRequests || !e.throttle)
                        )
                            return y(e);
                        if (
                            !(S.length >= f.maximumRequests) &&
                            (!e.throttleByServer || d(e.serverKey))
                        ) {
                            h(e);
                            var t = g.insert(e);
                            if (i(t)) {
                                if (t === e) return;
                                _(t);
                            }
                            return p(e);
                        }
                    }),
                    (f.clearForSpecs = function () {
                        for (; g.length > 0; ) {
                            _(g.pop());
                        }
                        for (var e = S.length, t = 0; t < e; ++t) _(S[t]);
                        (S.length = 0),
                            (N = {}),
                            (R.numberOfAttemptedRequests = 0),
                            (R.numberOfActiveRequests = 0),
                            (R.numberOfCancelledRequests = 0),
                            (R.numberOfCancelledActiveRequests = 0),
                            (R.numberOfFailedRequests = 0),
                            (R.numberOfActiveRequestsEver = 0);
                    }),
                    (f.numberOfActiveRequestsByServer = function (e) {
                        return N[e];
                    }),
                    (f.requestHeap = g),
                    f
                );
            },
        ),
        define(
            'Core/TrustedServers',
            ['../ThirdParty/Uri', './defined', './DeveloperError'],
            function (e, t, n) {
                'use strict';
                function r(n) {
                    var r = new e(n);
                    r.normalize();
                    var i = r.getAuthority();
                    if (t(i)) {
                        if (-1 !== i.indexOf('@')) {
                            i = i.split('@')[1];
                        }
                        if (-1 === i.indexOf(':')) {
                            var a = r.getScheme();
                            if (
                                (t(a) ||
                                    ((a = window.location.protocol),
                                    (a = a.substring(0, a.length - 1))),
                                'http' === a)
                            )
                                i += ':80';
                            else {
                                if ('https' !== a) return;
                                i += ':443';
                            }
                        }
                        return i;
                    }
                }
                var i = {},
                    a = {};
                return (
                    (i.add = function (e, n) {
                        var r = e.toLowerCase() + ':' + n;
                        t(a[r]) || (a[r] = !0);
                    }),
                    (i.remove = function (e, n) {
                        var r = e.toLowerCase() + ':' + n;
                        t(a[r]) && delete a[r];
                    }),
                    (i.contains = function (e) {
                        var n = r(e);
                        return !(!t(n) || !t(a[n]));
                    }),
                    (i.clear = function () {
                        a = {};
                    }),
                    i
                );
            },
        ),
        define(
            'Core/loadWithXhr',
            [
                '../ThirdParty/when',
                './Check',
                './defaultValue',
                './defined',
                './DeveloperError',
                './Request',
                './RequestErrorEvent',
                './RequestScheduler',
                './RuntimeError',
                './TrustedServers',
            ],
            function (e, t, n, r, i, a, o, u, s, c) {
                'use strict';
                function l(t) {
                    t = n(t, n.EMPTY_OBJECT);
                    var i = t.url,
                        o = t.responseType,
                        s = n(t.method, 'GET'),
                        c = t.data,
                        f = t.headers,
                        h = t.overrideMimeType;
                    i = n(i, t.url);
                    var d = r(t.request) ? t.request : new a();
                    return (
                        (d.url = i),
                        (d.requestFunction = function () {
                            var t = e.defer(),
                                n = l.load(i, o, s, c, f, t, h);
                            return (
                                r(n) &&
                                    r(n.abort) &&
                                    (d.cancelFunction = function () {
                                        n.abort();
                                    }),
                                t.promise
                            );
                        }),
                        u.request(d)
                    );
                }
                function f(e, t) {
                    var n = decodeURIComponent(t);
                    return e ? atob(n) : n;
                }
                function h(e, t) {
                    for (
                        var n = f(e, t),
                            r = new ArrayBuffer(n.length),
                            i = new Uint8Array(r),
                            a = 0;
                        a < n.length;
                        a++
                    )
                        i[a] = n.charCodeAt(a);
                    return r;
                }
                function d(e, t) {
                    t = n(t, '');
                    var r = e[1],
                        i = !!e[2],
                        a = e[3];
                    switch (t) {
                        case '':
                        case 'text':
                            return f(i, a);
                        case 'arraybuffer':
                            return h(i, a);
                        case 'blob':
                            var o = h(i, a);
                            return new Blob([o], { type: r });
                        case 'document':
                            return new DOMParser().parseFromString(f(i, a), r);
                        case 'json':
                            return JSON.parse(f(i, a));
                    }
                }
                var p = /^data:(.*?)(;base64)?,(.*)$/;
                return (
                    (l.load = function (e, t, n, i, a, u, l) {
                        var f = p.exec(e);
                        if (null !== f) return void u.resolve(d(f, t));
                        var h = new XMLHttpRequest();
                        if (
                            (c.contains(e) && (h.withCredentials = !0),
                            r(l) &&
                                r(h.overrideMimeType) &&
                                h.overrideMimeType(l),
                            h.open(n, e, !0),
                            r(a))
                        )
                            for (var m in a)
                                a.hasOwnProperty(m) &&
                                    h.setRequestHeader(m, a[m]);
                        r(t) && (h.responseType = t);
                        var E = !1;
                        return (
                            'string' == typeof e &&
                                (E = 0 === e.indexOf('file://')),
                            (h.onload = function () {
                                if (
                                    (h.status < 200 || h.status >= 300) &&
                                    (!E || 0 !== h.status)
                                )
                                    return void u.reject(
                                        new o(
                                            h.status,
                                            h.response,
                                            h.getAllResponseHeaders(),
                                        ),
                                    );
                                var e = h.response,
                                    n = h.responseType;
                                if (!r(e) || (r(t) && n !== t))
                                    if ('json' === t && 'string' == typeof e)
                                        try {
                                            u.resolve(JSON.parse(e));
                                        } catch (e) {
                                            u.reject(e);
                                        }
                                    else
                                        ('' === n || 'document' === n) &&
                                        r(h.responseXML) &&
                                        h.responseXML.hasChildNodes()
                                            ? u.resolve(h.responseXML)
                                            : ('' !== n && 'text' !== n) ||
                                                !r(h.responseText)
                                              ? u.reject(
                                                    new s(
                                                        'Invalid XMLHttpRequest response type.',
                                                    ),
                                                )
                                              : u.resolve(h.responseText);
                                else u.resolve(e);
                            }),
                            (h.onerror = function (e) {
                                u.reject(new o());
                            }),
                            h.send(i),
                            h
                        );
                    }),
                    (l.defaultLoad = l.load),
                    l
                );
            },
        ),
        define('Core/loadText', ['./loadWithXhr'], function (e) {
            'use strict';
            function t(t, n, r) {
                return e({ url: t, headers: n, request: r });
            }
            return t;
        }),
        define(
            'Core/loadJson',
            ['./clone', './defined', './DeveloperError', './loadText'],
            function (e, t, n, r) {
                'use strict';
                function i(n, i, o) {
                    t(i)
                        ? t(i.Accept) || ((i = e(i)), (i.Accept = a.Accept))
                        : (i = a);
                    var u = r(n, i, o);
                    if (t(u))
                        return u.then(function (e) {
                            return JSON.parse(e);
                        });
                }
                var a = { Accept: 'application/json,*/*;q=0.01' };
                return i;
            },
        ),
        define(
            'Core/EarthOrientationParameters',
            [
                '../ThirdParty/when',
                './binarySearch',
                './defaultValue',
                './defined',
                './EarthOrientationParametersSample',
                './freezeObject',
                './JulianDate',
                './LeapSecond',
                './loadJson',
                './RuntimeError',
                './TimeConstants',
                './TimeStandard',
            ],
            function (e, t, n, r, i, a, o, u, s, c, l, f) {
                'use strict';
                function h(t) {
                    if (
                        ((t = n(t, n.EMPTY_OBJECT)),
                        (this._dates = void 0),
                        (this._samples = void 0),
                        (this._dateColumn = -1),
                        (this._xPoleWanderRadiansColumn = -1),
                        (this._yPoleWanderRadiansColumn = -1),
                        (this._ut1MinusUtcSecondsColumn = -1),
                        (this._xCelestialPoleOffsetRadiansColumn = -1),
                        (this._yCelestialPoleOffsetRadiansColumn = -1),
                        (this._taiMinusUtcSecondsColumn = -1),
                        (this._columnCount = 0),
                        (this._lastIndex = -1),
                        (this._downloadPromise = void 0),
                        (this._dataError = void 0),
                        (this._addNewLeapSeconds = n(t.addNewLeapSeconds, !0)),
                        r(t.data))
                    )
                        p(this, t.data);
                    else if (r(t.url)) {
                        var i = this;
                        this._downloadPromise = e(
                            s(t.url),
                            function (e) {
                                p(i, e);
                            },
                            function () {
                                i._dataError =
                                    'An error occurred while retrieving the EOP data from the URL ' +
                                    t.url +
                                    '.';
                            },
                        );
                    } else
                        p(this, {
                            columnNames: [
                                'dateIso8601',
                                'modifiedJulianDateUtc',
                                'xPoleWanderRadians',
                                'yPoleWanderRadians',
                                'ut1MinusUtcSeconds',
                                'lengthOfDayCorrectionSeconds',
                                'xCelestialPoleOffsetRadians',
                                'yCelestialPoleOffsetRadians',
                                'taiMinusUtcSeconds',
                            ],
                            samples: [],
                        });
                }
                function d(e, t) {
                    return o.compare(e.julianDate, t);
                }
                function p(e, n) {
                    if (!r(n.columnNames))
                        return void (e._dataError =
                            'Error in loaded EOP data: The columnNames property is required.');
                    if (!r(n.samples))
                        return void (e._dataError =
                            'Error in loaded EOP data: The samples property is required.');
                    var i = n.columnNames.indexOf('modifiedJulianDateUtc'),
                        a = n.columnNames.indexOf('xPoleWanderRadians'),
                        s = n.columnNames.indexOf('yPoleWanderRadians'),
                        c = n.columnNames.indexOf('ut1MinusUtcSeconds'),
                        h = n.columnNames.indexOf(
                            'xCelestialPoleOffsetRadians',
                        ),
                        p = n.columnNames.indexOf(
                            'yCelestialPoleOffsetRadians',
                        ),
                        m = n.columnNames.indexOf('taiMinusUtcSeconds');
                    if (
                        i < 0 ||
                        a < 0 ||
                        s < 0 ||
                        c < 0 ||
                        h < 0 ||
                        p < 0 ||
                        m < 0
                    )
                        return void (e._dataError =
                            'Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns');
                    var E = (e._samples = n.samples),
                        y = (e._dates = []);
                    (e._dateColumn = i),
                        (e._xPoleWanderRadiansColumn = a),
                        (e._yPoleWanderRadiansColumn = s),
                        (e._ut1MinusUtcSecondsColumn = c),
                        (e._xCelestialPoleOffsetRadiansColumn = h),
                        (e._yCelestialPoleOffsetRadiansColumn = p),
                        (e._taiMinusUtcSecondsColumn = m),
                        (e._columnCount = n.columnNames.length),
                        (e._lastIndex = void 0);
                    for (
                        var _, v = e._addNewLeapSeconds, T = 0, R = E.length;
                        T < R;
                        T += e._columnCount
                    ) {
                        var A = E[T + i],
                            g = E[T + m],
                            S = A + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                            N = new o(S, g, f.TAI);
                        if ((y.push(N), v)) {
                            if (g !== _ && r(_)) {
                                var O = o.leapSeconds,
                                    x = t(O, N, d);
                                if (x < 0) {
                                    var w = new u(N, g);
                                    O.splice(~x, 0, w);
                                }
                            }
                            _ = g;
                        }
                    }
                }
                function m(e, t, n, r, i) {
                    var a = n * r;
                    (i.xPoleWander = t[a + e._xPoleWanderRadiansColumn]),
                        (i.yPoleWander = t[a + e._yPoleWanderRadiansColumn]),
                        (i.xPoleOffset =
                            t[a + e._xCelestialPoleOffsetRadiansColumn]),
                        (i.yPoleOffset =
                            t[a + e._yCelestialPoleOffsetRadiansColumn]),
                        (i.ut1MinusUtc = t[a + e._ut1MinusUtcSecondsColumn]);
                }
                function E(e, t, n) {
                    return t + e * (n - t);
                }
                function y(e, t, n, r, i, a, u) {
                    var s = e._columnCount;
                    if (a > t.length - 1)
                        return (
                            (u.xPoleWander = 0),
                            (u.yPoleWander = 0),
                            (u.xPoleOffset = 0),
                            (u.yPoleOffset = 0),
                            (u.ut1MinusUtc = 0),
                            u
                        );
                    var c = t[i],
                        l = t[a];
                    if (c.equals(l) || r.equals(c)) return m(e, n, i, s, u), u;
                    if (r.equals(l)) return m(e, n, a, s, u), u;
                    var f =
                            o.secondsDifference(r, c) /
                            o.secondsDifference(l, c),
                        h = i * s,
                        d = a * s,
                        p = n[h + e._ut1MinusUtcSecondsColumn],
                        y = n[d + e._ut1MinusUtcSecondsColumn],
                        _ = y - p;
                    if (_ > 0.5 || _ < -0.5) {
                        var v = n[h + e._taiMinusUtcSecondsColumn],
                            T = n[d + e._taiMinusUtcSecondsColumn];
                        v !== T && (l.equals(r) ? (p = y) : (y -= T - v));
                    }
                    return (
                        (u.xPoleWander = E(
                            f,
                            n[h + e._xPoleWanderRadiansColumn],
                            n[d + e._xPoleWanderRadiansColumn],
                        )),
                        (u.yPoleWander = E(
                            f,
                            n[h + e._yPoleWanderRadiansColumn],
                            n[d + e._yPoleWanderRadiansColumn],
                        )),
                        (u.xPoleOffset = E(
                            f,
                            n[h + e._xCelestialPoleOffsetRadiansColumn],
                            n[d + e._xCelestialPoleOffsetRadiansColumn],
                        )),
                        (u.yPoleOffset = E(
                            f,
                            n[h + e._yCelestialPoleOffsetRadiansColumn],
                            n[d + e._yCelestialPoleOffsetRadiansColumn],
                        )),
                        (u.ut1MinusUtc = E(f, p, y)),
                        u
                    );
                }
                return (
                    (h.NONE = a({
                        getPromiseToLoad: function () {
                            return e();
                        },
                        compute: function (e, t) {
                            return (
                                r(t)
                                    ? ((t.xPoleWander = 0),
                                      (t.yPoleWander = 0),
                                      (t.xPoleOffset = 0),
                                      (t.yPoleOffset = 0),
                                      (t.ut1MinusUtc = 0))
                                    : (t = new i(0, 0, 0, 0, 0)),
                                t
                            );
                        },
                    })),
                    (h.prototype.getPromiseToLoad = function () {
                        return e(this._downloadPromise);
                    }),
                    (h.prototype.compute = function (e, n) {
                        if (r(this._samples)) {
                            if (
                                (r(n) || (n = new i(0, 0, 0, 0, 0)),
                                0 === this._samples.length)
                            )
                                return (
                                    (n.xPoleWander = 0),
                                    (n.yPoleWander = 0),
                                    (n.xPoleOffset = 0),
                                    (n.yPoleOffset = 0),
                                    (n.ut1MinusUtc = 0),
                                    n
                                );
                            var a = this._dates,
                                u = this._lastIndex,
                                s = 0,
                                l = 0;
                            if (r(u)) {
                                var f = a[u],
                                    h = a[u + 1],
                                    d = o.lessThanOrEquals(f, e),
                                    p = !r(h),
                                    m = p || o.greaterThanOrEquals(h, e);
                                if (d && m)
                                    return (
                                        (s = u),
                                        !p && h.equals(e) && ++s,
                                        (l = s + 1),
                                        y(this, a, this._samples, e, s, l, n),
                                        n
                                    );
                            }
                            var E = t(a, e, o.compare, this._dateColumn);
                            return (
                                E >= 0
                                    ? (E < a.length - 1 &&
                                          a[E + 1].equals(e) &&
                                          ++E,
                                      (s = E),
                                      (l = E))
                                    : ((l = ~E), (s = l - 1) < 0 && (s = 0)),
                                (this._lastIndex = s),
                                y(this, a, this._samples, e, s, l, n),
                                n
                            );
                        }
                        if (r(this._dataError)) throw new c(this._dataError);
                    }),
                    h
                );
            },
        ),
        define(
            'Core/getAbsoluteUri',
            [
                '../ThirdParty/Uri',
                './defaultValue',
                './defined',
                './DeveloperError',
            ],
            function (e, t, n, r) {
                'use strict';
                function i(n, r) {
                    r = t(r, document.location.href);
                    var i = new e(r);
                    return new e(n).resolve(i).toString();
                }
                return i;
            },
        ),
        define(
            'Core/joinUrls',
            [
                '../ThirdParty/Uri',
                './defaultValue',
                './defined',
                './DeveloperError',
            ],
            function (e, t, n, r) {
                'use strict';
                function i(r, i, a) {
                    if (
                        ((a = t(a, !0)),
                        r instanceof e || (r = new e(r)),
                        i instanceof e || (i = new e(i)),
                        'data' === r.scheme)
                    )
                        return r.toString();
                    if ('data' === i.scheme) return i.toString();
                    n(i.authority) &&
                        !n(i.scheme) &&
                        ('undefined' != typeof document &&
                        n(document.location) &&
                        n(document.location.href)
                            ? (i.scheme = new e(document.location.href).scheme)
                            : (i.scheme = r.scheme));
                    var o = r;
                    i.isAbsolute() && (o = i);
                    var u = '';
                    n(o.scheme) && (u += o.scheme + ':'),
                        n(o.authority) &&
                            ((u += '//' + o.authority),
                            '' !== o.path &&
                                '/' !== o.path &&
                                ((u = u.replace(/\/?$/, '/')),
                                (o.path = o.path.replace(/^\/?/g, '')))),
                        (u +=
                            o === r
                                ? a
                                    ? r.path.replace(/\/?$/, '/') +
                                      i.path.replace(/^\/?/g, '')
                                    : r.path + i.path
                                : i.path);
                    var s = n(r.query),
                        c = n(i.query);
                    s && c
                        ? (u += '?' + r.query + '&' + i.query)
                        : s && !c
                          ? (u += '?' + r.query)
                          : !s && c && (u += '?' + i.query);
                    var l = n(i.fragment);
                    return (
                        n(r.fragment) && !l
                            ? (u += '#' + r.fragment)
                            : l && (u += '#' + i.fragment),
                        u
                    );
                }
                return i;
            },
        ),
        define(
            'Core/buildModuleUrl',
            [
                '../ThirdParty/Uri',
                './defined',
                './DeveloperError',
                './getAbsoluteUri',
                './joinUrls',
                'require',
            ],
            function (e, t, n, r, i, a) {
                'use strict';
                function o() {
                    for (
                        var e = document.getElementsByTagName('script'),
                            t = 0,
                            n = e.length;
                        t < n;
                        ++t
                    ) {
                        var r = e[t].getAttribute('src'),
                            i = p.exec(r);
                        if (null !== i) return i[1];
                    }
                }
                function u() {
                    if (t(f)) return f;
                    var n;
                    return (
                        (n =
                            'undefined' != typeof CESIUM_BASE_URL
                                ? CESIUM_BASE_URL
                                : o()),
                        (f = new e(r(n)))
                    );
                }
                function s(e) {
                    return a.toUrl('../' + e);
                }
                function c(e) {
                    return i(u(), e);
                }
                function l(e) {
                    t(h) ||
                        (h =
                            t(define.amd) &&
                            !define.amd.toUrlUndefined &&
                            t(a.toUrl)
                                ? s
                                : c),
                        t(d) || (d = document.createElement('a'));
                    var n = h(e);
                    return (d.href = n), (d.href = d.href), d.href;
                }
                var f,
                    h,
                    d,
                    p = /((?:.*\/)|^)cesium[\w-]*\.js(?:\W|$)/i;
                return (
                    (l._cesiumScriptRegex = p),
                    (l.setBaseUrl = function (t) {
                        f = new e(t).resolve(new e(document.location.href));
                    }),
                    l
                );
            },
        ),
        define('Core/Iau2006XysSample', [], function () {
            'use strict';
            function e(e, t, n) {
                (this.x = e), (this.y = t), (this.s = n);
            }
            return e;
        }),
        define(
            'Core/Iau2006XysData',
            [
                '../ThirdParty/when',
                './buildModuleUrl',
                './defaultValue',
                './defined',
                './Iau2006XysSample',
                './JulianDate',
                './loadJson',
                './TimeStandard',
            ],
            function (e, t, n, r, i, a, o, u) {
                'use strict';
                function s(e) {
                    (e = n(e, n.EMPTY_OBJECT)),
                        (this._xysFileUrlTemplate = e.xysFileUrlTemplate),
                        (this._interpolationOrder = n(e.interpolationOrder, 9)),
                        (this._sampleZeroJulianEphemerisDate = n(
                            e.sampleZeroJulianEphemerisDate,
                            2442396.5,
                        )),
                        (this._sampleZeroDateTT = new a(
                            this._sampleZeroJulianEphemerisDate,
                            0,
                            u.TAI,
                        )),
                        (this._stepSizeDays = n(e.stepSizeDays, 1)),
                        (this._samplesPerXysFile = n(e.samplesPerXysFile, 1e3)),
                        (this._totalSamples = n(e.totalSamples, 27426)),
                        (this._samples = new Array(3 * this._totalSamples)),
                        (this._chunkDownloadsInProgress = []);
                    for (
                        var t = this._interpolationOrder,
                            r = (this._denominators = new Array(t + 1)),
                            i = (this._xTable = new Array(t + 1)),
                            o = Math.pow(this._stepSizeDays, t),
                            s = 0;
                        s <= t;
                        ++s
                    ) {
                        (r[s] = o), (i[s] = s * this._stepSizeDays);
                        for (var c = 0; c <= t; ++c) c !== s && (r[s] *= s - c);
                        r[s] = 1 / r[s];
                    }
                    (this._work = new Array(t + 1)),
                        (this._coef = new Array(t + 1));
                }
                function c(e, t, n) {
                    var r = f;
                    return (
                        (r.dayNumber = t),
                        (r.secondsOfDay = n),
                        a.daysDifference(r, e._sampleZeroDateTT)
                    );
                }
                function l(n, i) {
                    if (n._chunkDownloadsInProgress[i])
                        return n._chunkDownloadsInProgress[i];
                    var a = e.defer();
                    n._chunkDownloadsInProgress[i] = a;
                    var u,
                        s = n._xysFileUrlTemplate;
                    return (
                        (u = r(s)
                            ? s.replace('{0}', i)
                            : t(
                                  'Assets/IAU2006_XYS/IAU2006_XYS_' +
                                      i +
                                      '.json',
                              )),
                        e(o(u), function (e) {
                            n._chunkDownloadsInProgress[i] = !1;
                            for (
                                var t = n._samples,
                                    r = e.samples,
                                    o = i * n._samplesPerXysFile * 3,
                                    u = 0,
                                    s = r.length;
                                u < s;
                                ++u
                            )
                                t[o + u] = r[u];
                            a.resolve();
                        }),
                        a.promise
                    );
                }
                var f = new a(0, 0, u.TAI);
                return (
                    (s.prototype.preload = function (t, n, r, i) {
                        var a = c(this, t, n),
                            o = c(this, r, i),
                            u =
                                (a / this._stepSizeDays -
                                    this._interpolationOrder / 2) |
                                0;
                        u < 0 && (u = 0);
                        var s =
                            (o / this._stepSizeDays -
                                this._interpolationOrder / 2) |
                            (0 + this._interpolationOrder);
                        s >= this._totalSamples && (s = this._totalSamples - 1);
                        for (
                            var f = (u / this._samplesPerXysFile) | 0,
                                h = (s / this._samplesPerXysFile) | 0,
                                d = [],
                                p = f;
                            p <= h;
                            ++p
                        )
                            d.push(l(this, p));
                        return e.all(d);
                    }),
                    (s.prototype.computeXysRadians = function (e, t, n) {
                        var a = c(this, e, t);
                        if (!(a < 0)) {
                            var o = (a / this._stepSizeDays) | 0;
                            if (!(o >= this._totalSamples)) {
                                var u = this._interpolationOrder,
                                    s = o - ((u / 2) | 0);
                                s < 0 && (s = 0);
                                var f = s + u;
                                f >= this._totalSamples &&
                                    ((f = this._totalSamples - 1),
                                    (s = f - u) < 0 && (s = 0));
                                var h = !1,
                                    d = this._samples;
                                if (
                                    (r(d[3 * s]) ||
                                        (l(
                                            this,
                                            (s / this._samplesPerXysFile) | 0,
                                        ),
                                        (h = !0)),
                                    r(d[3 * f]) ||
                                        (l(
                                            this,
                                            (f / this._samplesPerXysFile) | 0,
                                        ),
                                        (h = !0)),
                                    !h)
                                ) {
                                    r(n)
                                        ? ((n.x = 0), (n.y = 0), (n.s = 0))
                                        : (n = new i(0, 0, 0));
                                    var p,
                                        m,
                                        E = a - s * this._stepSizeDays,
                                        y = this._work,
                                        _ = this._denominators,
                                        v = this._coef,
                                        T = this._xTable;
                                    for (p = 0; p <= u; ++p) y[p] = E - T[p];
                                    for (p = 0; p <= u; ++p) {
                                        for (v[p] = 1, m = 0; m <= u; ++m)
                                            m !== p && (v[p] *= y[m]);
                                        v[p] *= _[p];
                                        var R = 3 * (s + p);
                                        (n.x += v[p] * d[R++]),
                                            (n.y += v[p] * d[R++]),
                                            (n.s += v[p] * d[R]);
                                    }
                                    return n;
                                }
                            }
                        }
                    }),
                    s
                );
            },
        ),
        define(
            'Core/HeadingPitchRoll',
            ['./defaultValue', './defined', './DeveloperError', './Math'],
            function (e, t, n, r) {
                'use strict';
                function i(t, n, r) {
                    (this.heading = e(t, 0)),
                        (this.pitch = e(n, 0)),
                        (this.roll = e(r, 0));
                }
                return (
                    (i.fromQuaternion = function (e, n) {
                        t(n) || (n = new i());
                        var r = 2 * (e.w * e.y - e.z * e.x),
                            a = 1 - 2 * (e.x * e.x + e.y * e.y),
                            o = 2 * (e.w * e.x + e.y * e.z),
                            u = 1 - 2 * (e.y * e.y + e.z * e.z),
                            s = 2 * (e.w * e.z + e.x * e.y);
                        return (
                            (n.heading = -Math.atan2(s, u)),
                            (n.roll = Math.atan2(o, a)),
                            (n.pitch = -Math.asin(r)),
                            n
                        );
                    }),
                    (i.fromDegrees = function (e, n, a, o) {
                        return (
                            t(o) || (o = new i()),
                            (o.heading = e * r.RADIANS_PER_DEGREE),
                            (o.pitch = n * r.RADIANS_PER_DEGREE),
                            (o.roll = a * r.RADIANS_PER_DEGREE),
                            o
                        );
                    }),
                    (i.clone = function (e, n) {
                        if (t(e))
                            return t(n)
                                ? ((n.heading = e.heading),
                                  (n.pitch = e.pitch),
                                  (n.roll = e.roll),
                                  n)
                                : new i(e.heading, e.pitch, e.roll);
                    }),
                    (i.equals = function (e, n) {
                        return (
                            e === n ||
                            (t(e) &&
                                t(n) &&
                                e.heading === n.heading &&
                                e.pitch === n.pitch &&
                                e.roll === n.roll)
                        );
                    }),
                    (i.equalsEpsilon = function (e, n, i, a) {
                        return (
                            e === n ||
                            (t(e) &&
                                t(n) &&
                                r.equalsEpsilon(e.heading, n.heading, i, a) &&
                                r.equalsEpsilon(e.pitch, n.pitch, i, a) &&
                                r.equalsEpsilon(e.roll, n.roll, i, a))
                        );
                    }),
                    (i.prototype.clone = function (e) {
                        return i.clone(this, e);
                    }),
                    (i.prototype.equals = function (e) {
                        return i.equals(this, e);
                    }),
                    (i.prototype.equalsEpsilon = function (e, t, n) {
                        return i.equalsEpsilon(this, e, t, n);
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
            function (e, t, n, r, i, a, o, u, s) {
                'use strict';
                function c(e, t, r, i) {
                    (this.x = n(e, 0)),
                        (this.y = n(t, 0)),
                        (this.z = n(r, 0)),
                        (this.w = n(i, 0));
                }
                var l = new e();
                c.fromAxisAngle = function (t, n, i) {
                    var a = n / 2,
                        o = Math.sin(a);
                    l = e.normalize(t, l);
                    var u = l.x * o,
                        s = l.y * o,
                        f = l.z * o,
                        h = Math.cos(a);
                    return r(i)
                        ? ((i.x = u), (i.y = s), (i.z = f), (i.w = h), i)
                        : new c(u, s, f, h);
                };
                var f = [1, 2, 0],
                    h = new Array(3);
                c.fromRotationMatrix = function (e, t) {
                    var n,
                        i,
                        a,
                        o,
                        u,
                        l = e[s.COLUMN0ROW0],
                        d = e[s.COLUMN1ROW1],
                        p = e[s.COLUMN2ROW2],
                        m = l + d + p;
                    if (m > 0)
                        (n = Math.sqrt(m + 1)),
                            (u = 0.5 * n),
                            (n = 0.5 / n),
                            (i = (e[s.COLUMN1ROW2] - e[s.COLUMN2ROW1]) * n),
                            (a = (e[s.COLUMN2ROW0] - e[s.COLUMN0ROW2]) * n),
                            (o = (e[s.COLUMN0ROW1] - e[s.COLUMN1ROW0]) * n);
                    else {
                        var E = f,
                            y = 0;
                        d > l && (y = 1), p > l && p > d && (y = 2);
                        var _ = E[y],
                            v = E[_];
                        n = Math.sqrt(
                            e[s.getElementIndex(y, y)] -
                                e[s.getElementIndex(_, _)] -
                                e[s.getElementIndex(v, v)] +
                                1,
                        );
                        var T = h;
                        (T[y] = 0.5 * n),
                            (n = 0.5 / n),
                            (u =
                                (e[s.getElementIndex(v, _)] -
                                    e[s.getElementIndex(_, v)]) *
                                n),
                            (T[_] =
                                (e[s.getElementIndex(_, y)] +
                                    e[s.getElementIndex(y, _)]) *
                                n),
                            (T[v] =
                                (e[s.getElementIndex(v, y)] +
                                    e[s.getElementIndex(y, v)]) *
                                n),
                            (i = -T[0]),
                            (a = -T[1]),
                            (o = -T[2]);
                    }
                    return r(t)
                        ? ((t.x = i), (t.y = a), (t.z = o), (t.w = u), t)
                        : new c(i, a, o, u);
                };
                var d = new c(),
                    p = new c(),
                    m = new c(),
                    E = new c();
                c.fromHeadingPitchRoll = function (t, n) {
                    return (
                        (E = c.fromAxisAngle(e.UNIT_X, t.roll, d)),
                        (m = c.fromAxisAngle(e.UNIT_Y, -t.pitch, n)),
                        (n = c.multiply(m, E, m)),
                        (p = c.fromAxisAngle(e.UNIT_Z, -t.heading, d)),
                        c.multiply(p, n, n)
                    );
                };
                var y = new e(),
                    _ = new e(),
                    v = new c(),
                    T = new c(),
                    R = new c();
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
                    (c.unpack = function (e, t, i) {
                        return (
                            (t = n(t, 0)),
                            r(i) || (i = new c()),
                            (i.x = e[t]),
                            (i.y = e[t + 1]),
                            (i.z = e[t + 2]),
                            (i.w = e[t + 3]),
                            i
                        );
                    }),
                    (c.packedInterpolationLength = 3),
                    (c.convertPackedArrayForInterpolation = function (
                        e,
                        t,
                        n,
                        r,
                    ) {
                        c.unpack(e, 4 * n, R), c.conjugate(R, R);
                        for (var i = 0, a = n - t + 1; i < a; i++) {
                            var o = 3 * i;
                            c.unpack(e, 4 * (t + i), v),
                                c.multiply(v, R, v),
                                v.w < 0 && c.negate(v, v),
                                c.computeAxis(v, y);
                            var u = c.computeAngle(v);
                            (r[o] = y.x * u),
                                (r[o + 1] = y.y * u),
                                (r[o + 2] = y.z * u);
                        }
                    }),
                    (c.unpackInterpolationResult = function (t, n, i, a, o) {
                        r(o) || (o = new c()), e.fromArray(t, 0, _);
                        var u = e.magnitude(_);
                        return (
                            c.unpack(n, 4 * a, T),
                            0 === u
                                ? c.clone(c.IDENTITY, v)
                                : c.fromAxisAngle(_, u, v),
                            c.multiply(v, T, o)
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
                            i = e.y * n,
                            a = e.z * n,
                            o = e.w * n;
                        return (t.x = r), (t.y = i), (t.z = a), (t.w = o), t;
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
                            i = e.y,
                            a = e.z,
                            o = e.w,
                            u = t.x,
                            s = t.y,
                            c = t.z,
                            l = t.w,
                            f = o * u + r * l + i * c - a * s,
                            h = o * s - r * c + i * l + a * u,
                            d = o * c + r * s - i * u + a * l,
                            p = o * l - r * u - i * s - a * c;
                        return (n.x = f), (n.y = h), (n.z = d), (n.w = p), n;
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
                var A = new c();
                c.lerp = function (e, t, n, r) {
                    return (
                        (A = c.multiplyByScalar(t, n, A)),
                        (r = c.multiplyByScalar(e, 1 - n, r)),
                        c.add(A, r, r)
                    );
                };
                var g = new c(),
                    S = new c(),
                    N = new c();
                (c.slerp = function (e, t, n, r) {
                    var i = c.dot(e, t),
                        a = t;
                    if (
                        (i < 0 && ((i = -i), (a = g = c.negate(t, g))),
                        1 - i < u.EPSILON6)
                    )
                        return c.lerp(e, a, n, r);
                    var o = Math.acos(i);
                    return (
                        (S = c.multiplyByScalar(e, Math.sin((1 - n) * o), S)),
                        (N = c.multiplyByScalar(a, Math.sin(n * o), N)),
                        (r = c.add(S, N, r)),
                        c.multiplyByScalar(r, 1 / Math.sin(o), r)
                    );
                }),
                    (c.log = function (t, n) {
                        var r = u.acosClamped(t.w),
                            i = 0;
                        return (
                            0 !== r && (i = r / Math.sin(r)),
                            e.multiplyByScalar(t, i, n)
                        );
                    }),
                    (c.exp = function (t, n) {
                        var r = e.magnitude(t),
                            i = 0;
                        return (
                            0 !== r && (i = Math.sin(r) / r),
                            (n.x = t.x * i),
                            (n.y = t.y * i),
                            (n.z = t.z * i),
                            (n.w = Math.cos(r)),
                            n
                        );
                    });
                var O = new e(),
                    x = new e(),
                    w = new c(),
                    I = new c();
                (c.computeInnerQuadrangle = function (t, n, r, i) {
                    var a = c.conjugate(n, w);
                    c.multiply(a, r, I);
                    var o = c.log(I, O);
                    c.multiply(a, t, I);
                    var u = c.log(I, x);
                    return (
                        e.add(o, u, o),
                        e.multiplyByScalar(o, 0.25, o),
                        e.negate(o, o),
                        c.exp(o, w),
                        c.multiply(n, w, i)
                    );
                }),
                    (c.squad = function (e, t, n, r, i, a) {
                        var o = c.slerp(e, t, i, w),
                            u = c.slerp(n, r, i, I);
                        return c.slerp(o, u, 2 * i * (1 - i), a);
                    });
                for (
                    var M = new c(),
                        C = 1.9011074535173003,
                        P = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        D = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        L = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        b = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        U = 0;
                    U < 7;
                    ++U
                ) {
                    var F = U + 1,
                        B = 2 * F + 1;
                    (P[U] = 1 / (F * B)), (D[U] = F / B);
                }
                return (
                    (P[7] = C / 136),
                    (D[7] = (8 * C) / 17),
                    (c.fastSlerp = function (e, t, n, r) {
                        var i,
                            a = c.dot(e, t);
                        a >= 0 ? (i = 1) : ((i = -1), (a = -a));
                        for (
                            var o = a - 1,
                                u = 1 - n,
                                s = n * n,
                                l = u * u,
                                f = 7;
                            f >= 0;
                            --f
                        )
                            (L[f] = (P[f] * s - D[f]) * o),
                                (b[f] = (P[f] * l - D[f]) * o);
                        var h =
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
                            d =
                                u *
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
                            p = c.multiplyByScalar(e, d, M);
                        return c.multiplyByScalar(t, h, r), c.add(p, r, r);
                    }),
                    (c.fastSquad = function (e, t, n, r, i, a) {
                        var o = c.fastSlerp(e, t, i, w),
                            u = c.fastSlerp(n, r, i, I);
                        return c.fastSlerp(o, u, 2 * i * (1 - i), a);
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
                    (c.ZERO = a(new c(0, 0, 0, 0))),
                    (c.IDENTITY = a(new c(0, 0, 0, 1))),
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
            'Core/Transforms',
            [
                '../ThirdParty/when',
                './Cartesian2',
                './Cartesian3',
                './Cartesian4',
                './Cartographic',
                './Check',
                './defaultValue',
                './defined',
                './DeveloperError',
                './EarthOrientationParameters',
                './EarthOrientationParametersSample',
                './Ellipsoid',
                './Iau2006XysData',
                './Iau2006XysSample',
                './JulianDate',
                './Math',
                './Matrix3',
                './Matrix4',
                './Quaternion',
                './TimeConstants',
            ],
            function (
                e,
                t,
                n,
                r,
                i,
                a,
                o,
                u,
                s,
                c,
                l,
                f,
                h,
                d,
                p,
                m,
                E,
                y,
                _,
                v,
            ) {
                'use strict';
                var T = {},
                    R = {
                        up: {
                            south: 'east',
                            north: 'west',
                            west: 'south',
                            east: 'north',
                        },
                        down: {
                            south: 'west',
                            north: 'east',
                            west: 'north',
                            east: 'south',
                        },
                        south: {
                            up: 'west',
                            down: 'east',
                            west: 'down',
                            east: 'up',
                        },
                        north: {
                            up: 'east',
                            down: 'west',
                            west: 'up',
                            east: 'down',
                        },
                        west: {
                            up: 'north',
                            down: 'south',
                            north: 'down',
                            south: 'up',
                        },
                        east: {
                            up: 'south',
                            down: 'north',
                            north: 'up',
                            south: 'down',
                        },
                    },
                    A = {
                        north: [-1, 0, 0],
                        east: [0, 1, 0],
                        up: [0, 0, 1],
                        south: [1, 0, 0],
                        west: [0, -1, 0],
                        down: [0, 0, -1],
                    },
                    g = {},
                    S = {
                        east: new n(),
                        north: new n(),
                        up: new n(),
                        west: new n(),
                        south: new n(),
                        down: new n(),
                    },
                    N = new n(),
                    O = new n(),
                    x = new n();
                (T.localFrameToFixedFrameGenerator = function (e, t) {
                    if (!R.hasOwnProperty(e) || !R[e].hasOwnProperty(t))
                        throw new s(
                            'firstAxis and secondAxis must be east, north, up, west, south or down.',
                        );
                    var r,
                        i = R[e][t],
                        a = e + t;
                    return (
                        u(g[a])
                            ? (r = g[a])
                            : ((r = function (r, a, s) {
                                  if (
                                      (u(s) || (s = new y()),
                                      m.equalsEpsilon(r.x, 0, m.EPSILON14) &&
                                          m.equalsEpsilon(r.y, 0, m.EPSILON14))
                                  ) {
                                      var c = m.sign(r.z);
                                      n.unpack(A[e], 0, N),
                                          'east' !== e &&
                                              'west' !== e &&
                                              n.multiplyByScalar(N, c, N),
                                          n.unpack(A[t], 0, O),
                                          'east' !== t &&
                                              'west' !== t &&
                                              n.multiplyByScalar(O, c, O),
                                          n.unpack(A[i], 0, x),
                                          'east' !== i &&
                                              'west' !== i &&
                                              n.multiplyByScalar(x, c, x);
                                  } else {
                                      (a = o(a, f.WGS84)),
                                          a.geodeticSurfaceNormal(r, S.up);
                                      var l = S.up,
                                          h = S.east;
                                      (h.x = -r.y),
                                          (h.y = r.x),
                                          (h.z = 0),
                                          n.normalize(h, S.east),
                                          n.cross(l, h, S.north),
                                          n.multiplyByScalar(S.up, -1, S.down),
                                          n.multiplyByScalar(
                                              S.east,
                                              -1,
                                              S.west,
                                          ),
                                          n.multiplyByScalar(
                                              S.north,
                                              -1,
                                              S.south,
                                          ),
                                          (N = S[e]),
                                          (O = S[t]),
                                          (x = S[i]);
                                  }
                                  return (
                                      (s[0] = N.x),
                                      (s[1] = N.y),
                                      (s[2] = N.z),
                                      (s[3] = 0),
                                      (s[4] = O.x),
                                      (s[5] = O.y),
                                      (s[6] = O.z),
                                      (s[7] = 0),
                                      (s[8] = x.x),
                                      (s[9] = x.y),
                                      (s[10] = x.z),
                                      (s[11] = 0),
                                      (s[12] = r.x),
                                      (s[13] = r.y),
                                      (s[14] = r.z),
                                      (s[15] = 1),
                                      s
                                  );
                              }),
                              (g[a] = r)),
                        r
                    );
                }),
                    (T.eastNorthUpToFixedFrame =
                        T.localFrameToFixedFrameGenerator('east', 'north')),
                    (T.northEastDownToFixedFrame =
                        T.localFrameToFixedFrameGenerator('north', 'east')),
                    (T.northUpEastToFixedFrame =
                        T.localFrameToFixedFrameGenerator('north', 'up')),
                    (T.northWestUpToFixedFrame =
                        T.localFrameToFixedFrameGenerator('north', 'west'));
                var w = new _(),
                    I = new n(1, 1, 1),
                    M = new y();
                T.headingPitchRollToFixedFrame = function (e, t, r, i, a) {
                    i = o(i, T.eastNorthUpToFixedFrame);
                    var u = _.fromHeadingPitchRoll(t, w),
                        s = y.fromTranslationQuaternionRotationScale(
                            n.ZERO,
                            u,
                            I,
                            M,
                        );
                    return (a = i(e, r, a)), y.multiply(a, s, a);
                };
                var C = new y(),
                    P = new E();
                T.headingPitchRollQuaternion = function (e, t, n, r, i) {
                    var a = T.headingPitchRollToFixedFrame(e, t, n, r, C),
                        o = y.getRotation(a, P);
                    return _.fromRotationMatrix(o, i);
                };
                var D = m.TWO_PI / 86400,
                    L = new p();
                (T.computeTemeToPseudoFixedMatrix = function (e, t) {
                    L = p.addSeconds(e, -p.computeTaiMinusUtc(e), L);
                    var n,
                        r = L.dayNumber,
                        i = L.secondsOfDay,
                        a = r - 2451545;
                    n =
                        i >= 43200
                            ? (a + 0.5) / v.DAYS_PER_JULIAN_CENTURY
                            : (a - 0.5) / v.DAYS_PER_JULIAN_CENTURY;
                    var o =
                            24110.54841 +
                            n * (8640184.812866 + n * (0.093104 + -62e-7 * n)),
                        s = (o * D) % m.TWO_PI,
                        c =
                            72921158553e-15 +
                            1.1772758384668e-19 * (r - 2451545.5),
                        l = (i + 0.5 * v.SECONDS_PER_DAY) % v.SECONDS_PER_DAY,
                        f = s + c * l,
                        h = Math.cos(f),
                        d = Math.sin(f);
                    return u(t)
                        ? ((t[0] = h),
                          (t[1] = -d),
                          (t[2] = 0),
                          (t[3] = d),
                          (t[4] = h),
                          (t[5] = 0),
                          (t[6] = 0),
                          (t[7] = 0),
                          (t[8] = 1),
                          t)
                        : new E(h, d, 0, -d, h, 0, 0, 0, 1);
                }),
                    (T.iau2006XysData = new h()),
                    (T.earthOrientationParameters = c.NONE);
                (T.preloadIcrfFixed = function (t) {
                    var n = t.start.dayNumber,
                        r = t.start.secondsOfDay + 32.184,
                        i = t.stop.dayNumber,
                        a = t.stop.secondsOfDay + 32.184,
                        o = T.iau2006XysData.preload(n, r, i, a),
                        u = T.earthOrientationParameters.getPromiseToLoad();
                    return e.all([o, u]);
                }),
                    (T.computeIcrfToFixedMatrix = function (e, t) {
                        u(t) || (t = new E());
                        var n = T.computeFixedToIcrfMatrix(e, t);
                        if (u(n)) return E.transpose(n, t);
                    });
                var b = new d(0, 0, 0),
                    U = new l(0, 0, 0, 0, 0, 0),
                    F = new E(),
                    B = new E();
                T.computeFixedToIcrfMatrix = function (e, t) {
                    u(t) || (t = new E());
                    var n = T.earthOrientationParameters.compute(e, U);
                    if (u(n)) {
                        var r = e.dayNumber,
                            i = e.secondsOfDay + 32.184,
                            a = T.iau2006XysData.computeXysRadians(r, i, b);
                        if (u(a)) {
                            var o = a.x + n.xPoleOffset,
                                s = a.y + n.yPoleOffset,
                                c = 1 / (1 + Math.sqrt(1 - o * o - s * s)),
                                l = F;
                            (l[0] = 1 - c * o * o),
                                (l[3] = -c * o * s),
                                (l[6] = o),
                                (l[1] = -c * o * s),
                                (l[4] = 1 - c * s * s),
                                (l[7] = s),
                                (l[2] = -o),
                                (l[5] = -s),
                                (l[8] = 1 - c * (o * o + s * s));
                            var f = E.fromRotationZ(-a.s, B),
                                h = E.multiply(l, f, F),
                                d = e.dayNumber,
                                y =
                                    e.secondsOfDay -
                                    p.computeTaiMinusUtc(e) +
                                    n.ut1MinusUtc,
                                _ = d - 2451545,
                                R = y / v.SECONDS_PER_DAY,
                                A =
                                    0.779057273264 +
                                    R +
                                    0.00273781191135448 * (_ + R);
                            A = (A % 1) * m.TWO_PI;
                            var g = E.fromRotationZ(A, B),
                                S = E.multiply(h, g, F),
                                N = Math.cos(n.xPoleWander),
                                O = Math.cos(n.yPoleWander),
                                x = Math.sin(n.xPoleWander),
                                w = Math.sin(n.yPoleWander),
                                I = r - 2451545 + i / v.SECONDS_PER_DAY;
                            I /= 36525;
                            var M = (-47e-6 * I * m.RADIANS_PER_DEGREE) / 3600,
                                C = Math.cos(M),
                                P = Math.sin(M),
                                D = B;
                            return (
                                (D[0] = N * C),
                                (D[1] = N * P),
                                (D[2] = x),
                                (D[3] = -O * P + w * x * C),
                                (D[4] = O * C + w * x * P),
                                (D[5] = -w * N),
                                (D[6] = -w * P - O * x * C),
                                (D[7] = w * C - O * x * P),
                                (D[8] = O * N),
                                E.multiply(S, D, t)
                            );
                        }
                    }
                };
                var z = new r();
                (T.pointToWindowCoordinates = function (e, t, n, r) {
                    return (
                        (r = T.pointToGLWindowCoordinates(e, t, n, r)),
                        (r.y = 2 * t[5] - r.y),
                        r
                    );
                }),
                    (T.pointToGLWindowCoordinates = function (e, n, i, a) {
                        u(a) || (a = new t());
                        var o = z;
                        return (
                            y.multiplyByVector(
                                e,
                                r.fromElements(i.x, i.y, i.z, 1, o),
                                o,
                            ),
                            r.multiplyByScalar(o, 1 / o.w, o),
                            y.multiplyByVector(n, o, o),
                            t.fromCartesian4(o, a)
                        );
                    });
                var G = new n(),
                    q = new n(),
                    V = new n();
                T.rotationMatrixFromPositionVelocity = function (e, t, r, i) {
                    var a = o(r, f.WGS84).geodeticSurfaceNormal(e, G),
                        s = n.cross(t, a, q);
                    n.equalsEpsilon(s, n.ZERO, m.EPSILON6) &&
                        (s = n.clone(n.UNIT_X, s));
                    var c = n.cross(s, t, V);
                    return (
                        n.cross(t, c, s),
                        n.negate(s, s),
                        u(i) || (i = new E()),
                        (i[0] = t.x),
                        (i[1] = t.y),
                        (i[2] = t.z),
                        (i[3] = s.x),
                        (i[4] = s.y),
                        (i[5] = s.z),
                        (i[6] = c.x),
                        (i[7] = c.y),
                        (i[8] = c.z),
                        i
                    );
                };
                var W = new y(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
                    H = new i(),
                    X = new n(),
                    k = new n(),
                    Y = new E(),
                    Z = new y(),
                    j = new y();
                return (
                    (T.basisTo2D = function (e, t, r) {
                        var i = y.getTranslation(t, k),
                            a = e.ellipsoid,
                            o = a.cartesianToCartographic(i, H),
                            u = e.project(o, X);
                        n.fromElements(u.z, u.x, u.y, u);
                        var s = T.eastNorthUpToFixedFrame(i, a, Z),
                            c = y.inverseTransformation(s, j),
                            l = y.getRotation(t, Y),
                            f = y.multiplyByMatrix3(c, l, r);
                        return (
                            y.multiply(W, f, r), y.setTranslation(r, u, r), r
                        );
                    }),
                    (T.wgs84To2DModelMatrix = function (e, t, r) {
                        var i = e.ellipsoid,
                            a = T.eastNorthUpToFixedFrame(t, i, Z),
                            o = y.inverseTransformation(a, j),
                            u = i.cartesianToCartographic(t, H),
                            s = e.project(u, X);
                        n.fromElements(s.z, s.x, s.y, s);
                        var c = y.fromTranslation(s, Z);
                        return y.multiply(W, o, r), y.multiply(c, r, r), r;
                    }),
                    T
                );
            },
        ),
        define(
            'Core/EllipsoidTangentPlane',
            [
                './AxisAlignedBoundingBox',
                './Cartesian2',
                './Cartesian3',
                './Cartesian4',
                './defaultValue',
                './defined',
                './defineProperties',
                './DeveloperError',
                './Ellipsoid',
                './IntersectionTests',
                './Matrix4',
                './Plane',
                './Ray',
                './Transforms',
            ],
            function (e, t, n, r, i, a, o, u, s, c, l, f, h, d) {
                'use strict';
                function p(e, t) {
                    (t = i(t, s.WGS84)), (e = t.scaleToGeodeticSurface(e));
                    var r = d.eastNorthUpToFixedFrame(e, t);
                    (this._ellipsoid = t),
                        (this._origin = e),
                        (this._xAxis = n.fromCartesian4(l.getColumn(r, 0, m))),
                        (this._yAxis = n.fromCartesian4(l.getColumn(r, 1, m)));
                    var a = n.fromCartesian4(l.getColumn(r, 2, m));
                    this._plane = f.fromPointNormal(e, a);
                }
                var m = new r();
                o(p.prototype, {
                    ellipsoid: {
                        get: function () {
                            return this._ellipsoid;
                        },
                    },
                    origin: {
                        get: function () {
                            return this._origin;
                        },
                    },
                    plane: {
                        get: function () {
                            return this._plane;
                        },
                    },
                    xAxis: {
                        get: function () {
                            return this._xAxis;
                        },
                    },
                    yAxis: {
                        get: function () {
                            return this._yAxis;
                        },
                    },
                    zAxis: {
                        get: function () {
                            return this._plane.normal;
                        },
                    },
                });
                var E = new e();
                p.fromPoints = function (t, n) {
                    return new p(e.fromPoints(t, E).center, n);
                };
                var y = new h(),
                    _ = new n();
                (p.prototype.projectPointOntoPlane = function (e, r) {
                    var i = y;
                    (i.origin = e), n.normalize(e, i.direction);
                    var o = c.rayPlane(i, this._plane, _);
                    if (
                        (a(o) ||
                            (n.negate(i.direction, i.direction),
                            (o = c.rayPlane(i, this._plane, _))),
                        a(o))
                    ) {
                        var u = n.subtract(o, this._origin, o),
                            s = n.dot(this._xAxis, u),
                            l = n.dot(this._yAxis, u);
                        return a(r) ? ((r.x = s), (r.y = l), r) : new t(s, l);
                    }
                }),
                    (p.prototype.projectPointsOntoPlane = function (e, t) {
                        a(t) || (t = []);
                        for (var n = 0, r = e.length, i = 0; i < r; i++) {
                            var o = this.projectPointOntoPlane(e[i], t[n]);
                            a(o) && ((t[n] = o), n++);
                        }
                        return (t.length = n), t;
                    }),
                    (p.prototype.projectPointToNearestOnPlane = function (
                        e,
                        r,
                    ) {
                        a(r) || (r = new t());
                        var i = y;
                        (i.origin = e),
                            n.clone(this._plane.normal, i.direction);
                        var o = c.rayPlane(i, this._plane, _);
                        a(o) ||
                            (n.negate(i.direction, i.direction),
                            (o = c.rayPlane(i, this._plane, _)));
                        var u = n.subtract(o, this._origin, o),
                            s = n.dot(this._xAxis, u),
                            l = n.dot(this._yAxis, u);
                        return (r.x = s), (r.y = l), r;
                    }),
                    (p.prototype.projectPointsToNearestOnPlane = function (
                        e,
                        t,
                    ) {
                        a(t) || (t = []);
                        var n = e.length;
                        t.length = n;
                        for (var r = 0; r < n; r++)
                            t[r] = this.projectPointToNearestOnPlane(
                                e[r],
                                t[r],
                            );
                        return t;
                    });
                var v = new n();
                return (
                    (p.prototype.projectPointsOntoEllipsoid = function (e, t) {
                        var r = e.length;
                        a(t) ? (t.length = r) : (t = new Array(r));
                        for (
                            var i = this._ellipsoid,
                                o = this._origin,
                                u = this._xAxis,
                                s = this._yAxis,
                                c = v,
                                l = 0;
                            l < r;
                            ++l
                        ) {
                            var f = e[l];
                            n.multiplyByScalar(u, f.x, c),
                                a(t[l]) || (t[l] = new n());
                            var h = n.add(o, c, t[l]);
                            n.multiplyByScalar(s, f.y, c),
                                n.add(h, c, h),
                                i.scaleToGeocentricSurface(h, h);
                        }
                        return t;
                    }),
                    p
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
        define(
            'Core/GeometryInstance',
            ['./defaultValue', './defined', './DeveloperError', './Matrix4'],
            function (e, t, n, r) {
                'use strict';
                function i(t) {
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
                return i;
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
            function (e, t, n, r, i, a) {
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
                            i = n.y;
                        (n.x = (1 - Math.abs(i)) * a.signNotZero(r)),
                            (n.y = (1 - Math.abs(r)) * a.signNotZero(i));
                    }
                    return (
                        (n.x = a.toSNorm(n.x, t)), (n.y = a.toSNorm(n.y, t)), n
                    );
                }),
                    (o.octEncode = function (e, t) {
                        return o.octEncodeInRange(e, 255, t);
                    }),
                    (o.octDecodeInRange = function (e, n, r, i) {
                        if (
                            ((i.x = a.fromSNorm(e, r)),
                            (i.y = a.fromSNorm(n, r)),
                            (i.z = 1 - (Math.abs(i.x) + Math.abs(i.y))),
                            i.z < 0)
                        ) {
                            var o = i.x;
                            (i.x = (1 - Math.abs(i.y)) * a.signNotZero(o)),
                                (i.y = (1 - Math.abs(o)) * a.signNotZero(i.y));
                        }
                        return t.normalize(i, i);
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
                            i = 256 * (n - r);
                        return o.octDecode(r, i, t);
                    }),
                    (o.octPack = function (e, t, n, r) {
                        var i = o.octEncodeFloat(e),
                            a = o.octEncodeFloat(t),
                            s = o.octEncode(n, u);
                        return (
                            (r.x = 65536 * s.x + i), (r.y = 65536 * s.y + a), r
                        );
                    }),
                    (o.octUnpack = function (e, t, n, r) {
                        var i = e.x / 65536,
                            a = Math.floor(i),
                            u = 65536 * (i - a);
                        i = e.y / 65536;
                        var s = Math.floor(i),
                            c = 65536 * (i - s);
                        o.octDecodeFloat(u, t),
                            o.octDecodeFloat(c, n),
                            o.octDecode(a, s, r);
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
                function i(n, i, s, c, l) {
                    r(l) || (l = new t());
                    var f, h, d, p, m, E, y, _;
                    r(i.z)
                        ? ((f = t.subtract(s, i, a)),
                          (h = t.subtract(c, i, o)),
                          (d = t.subtract(n, i, u)),
                          (p = t.dot(f, f)),
                          (m = t.dot(f, h)),
                          (E = t.dot(f, d)),
                          (y = t.dot(h, h)),
                          (_ = t.dot(h, d)))
                        : ((f = e.subtract(s, i, a)),
                          (h = e.subtract(c, i, o)),
                          (d = e.subtract(n, i, u)),
                          (p = e.dot(f, f)),
                          (m = e.dot(f, h)),
                          (E = e.dot(f, d)),
                          (y = e.dot(h, h)),
                          (_ = e.dot(h, d)));
                    var v = 1 / (p * y - m * m);
                    return (
                        (l.y = (y * E - m * _) * v),
                        (l.z = (p * _ - m * E) * v),
                        (l.x = 1 - l.y - l.z),
                        l
                    );
                }
                var a = new t(),
                    o = new t(),
                    u = new t();
                return i;
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
                var i = { high: 0, low: 0 };
                r.fromCartesian = function (e, t) {
                    n(t) || (t = new r());
                    var a = t.high,
                        o = t.low;
                    return (
                        r.encode(e.x, i),
                        (a.x = i.high),
                        (o.x = i.low),
                        r.encode(e.y, i),
                        (a.y = i.high),
                        (o.y = i.low),
                        r.encode(e.z, i),
                        (a.z = i.high),
                        (o.z = i.low),
                        t
                    );
                };
                var a = new r();
                return (
                    (r.writeElements = function (e, t, n) {
                        r.fromCartesian(e, a);
                        var i = a.high,
                            o = a.low;
                        (t[n] = i.x),
                            (t[n + 1] = i.y),
                            (t[n + 2] = i.z),
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
                            i = n.maximumIndex,
                            a = e(n.cacheSize, 24),
                            o = r.length;
                        if (!t(i)) {
                            i = 0;
                            for (var u = 0, s = r[u]; u < o; )
                                s > i && (i = s), ++u, (s = r[u]);
                        }
                        for (var c = [], l = 0; l < i + 1; l++) c[l] = 0;
                        for (var f = a + 1, h = 0; h < o; ++h)
                            f - c[r[h]] > a && ((c[r[h]] = f), ++f);
                        return (f - a + 1) / (o / 3);
                    }),
                    (r.tipsify = function (n) {
                        function r(e, t, n, r) {
                            for (; t.length >= 1; ) {
                                var a = t[t.length - 1];
                                if (
                                    (t.splice(t.length - 1, 1),
                                    e[a].numLiveTriangles > 0)
                                )
                                    return a;
                            }
                            for (; i < r; ) {
                                if (e[i].numLiveTriangles > 0) return ++i - 1;
                                ++i;
                            }
                            return -1;
                        }
                        n = e(n, e.EMPTY_OBJECT);
                        var i,
                            a = n.indices,
                            o = n.maximumIndex,
                            u = e(n.cacheSize, 24),
                            s = a.length,
                            c = 0,
                            l = 0,
                            f = a[l],
                            h = s;
                        if (t(o)) c = o + 1;
                        else {
                            for (; l < h; ) f > c && (c = f), ++l, (f = a[l]);
                            if (-1 === c) return 0;
                            ++c;
                        }
                        var d,
                            p = [];
                        for (d = 0; d < c; d++)
                            p[d] = {
                                numLiveTriangles: 0,
                                timeStamp: 0,
                                vertexTriangles: [],
                            };
                        l = 0;
                        for (var m = 0; l < h; )
                            p[a[l]].vertexTriangles.push(m),
                                ++p[a[l]].numLiveTriangles,
                                p[a[l + 1]].vertexTriangles.push(m),
                                ++p[a[l + 1]].numLiveTriangles,
                                p[a[l + 2]].vertexTriangles.push(m),
                                ++p[a[l + 2]].numLiveTriangles,
                                ++m,
                                (l += 3);
                        var E = 0,
                            y = u + 1;
                        i = 1;
                        var _,
                            v,
                            T = [],
                            R = [],
                            A = 0,
                            g = [],
                            S = s / 3,
                            N = [];
                        for (d = 0; d < S; d++) N[d] = !1;
                        for (var O, x; -1 !== E; ) {
                            (T = []),
                                (v = p[E]),
                                (x = v.vertexTriangles.length);
                            for (var w = 0; w < x; ++w)
                                if (((m = v.vertexTriangles[w]), !N[m])) {
                                    (N[m] = !0), (l = m + m + m);
                                    for (var I = 0; I < 3; ++I)
                                        (O = a[l]),
                                            T.push(O),
                                            R.push(O),
                                            (g[A] = O),
                                            ++A,
                                            (_ = p[O]),
                                            --_.numLiveTriangles,
                                            y - _.timeStamp > u &&
                                                ((_.timeStamp = y), ++y),
                                            ++l;
                                }
                            E = (function (e, t, n, i, a, o, u) {
                                for (
                                    var s, c = -1, l = -1, f = 0;
                                    f < n.length;

                                ) {
                                    var h = n[f];
                                    i[h].numLiveTriangles &&
                                        ((s = 0),
                                        a -
                                            i[h].timeStamp +
                                            2 * i[h].numLiveTriangles <=
                                            t && (s = a - i[h].timeStamp),
                                        (s > l || -1 === l) &&
                                            ((l = s), (c = h))),
                                        ++f;
                                }
                                return -1 === c ? r(i, o, e, u) : c;
                            })(a, u, T, p, y, R, c);
                        }
                        return g;
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
                i,
                a,
                o,
                u,
                s,
                c,
                l,
                f,
                h,
                d,
                p,
                m,
                E,
                y,
                _,
                v,
                T,
                R,
                A,
                g,
                S,
            ) {
                'use strict';
                function N(e, t, n, r, i) {
                    (e[t++] = n),
                        (e[t++] = r),
                        (e[t++] = r),
                        (e[t++] = i),
                        (e[t++] = i),
                        (e[t] = n);
                }
                function O(e) {
                    for (
                        var t = e.length,
                            n = (t / 3) * 6,
                            r = E.createTypedArray(t, n),
                            i = 0,
                            a = 0;
                        a < t;
                        a += 3, i += 6
                    )
                        N(r, i, e[a], e[a + 1], e[a + 2]);
                    return r;
                }
                function x(e) {
                    var t = e.length;
                    if (t >= 3) {
                        var n = 6 * (t - 2),
                            r = E.createTypedArray(t, n);
                        N(r, 0, e[0], e[1], e[2]);
                        for (var i = 6, a = 3; a < t; ++a, i += 6)
                            N(r, i, e[a - 1], e[a], e[a - 2]);
                        return r;
                    }
                    return new Uint16Array();
                }
                function w(e) {
                    if (e.length > 0) {
                        for (
                            var t = e.length - 1,
                                n = 6 * (t - 1),
                                r = E.createTypedArray(t, n),
                                i = e[0],
                                a = 0,
                                o = 1;
                            o < t;
                            ++o, a += 6
                        )
                            N(r, a, i, e[o], e[o + 1]);
                        return r;
                    }
                    return new Uint16Array();
                }
                function I(e) {
                    var t = {};
                    for (var n in e)
                        if (e.hasOwnProperty(n) && c(e[n]) && c(e[n].values)) {
                            var r = e[n];
                            t[n] = new p({
                                componentDatatype: r.componentDatatype,
                                componentsPerAttribute:
                                    r.componentsPerAttribute,
                                normalize: r.normalize,
                                values: [],
                            });
                        }
                    return t;
                }
                function M(e, t, n) {
                    for (var r in t)
                        if (t.hasOwnProperty(r) && c(t[r]) && c(t[r].values))
                            for (
                                var i = t[r], a = 0;
                                a < i.componentsPerAttribute;
                                ++a
                            )
                                e[r].values.push(
                                    i.values[n * i.componentsPerAttribute + a],
                                );
                }
                function C(e, t) {
                    if (c(t))
                        for (
                            var n = t.values, r = n.length, a = 0;
                            a < r;
                            a += 3
                        )
                            i.unpack(n, a, ae),
                                R.multiplyByPoint(e, ae, ae),
                                i.pack(ae, n, a);
                }
                function P(e, t) {
                    if (c(t))
                        for (
                            var n = t.values, r = n.length, a = 0;
                            a < r;
                            a += 3
                        )
                            i.unpack(n, a, ae),
                                T.multiplyByVector(e, ae, ae),
                                (ae = i.normalize(ae, ae)),
                                i.pack(ae, n, a);
                }
                function D(e, t) {
                    var n,
                        r = e.length,
                        i = {},
                        a = e[0][t].attributes;
                    for (n in a)
                        if (a.hasOwnProperty(n) && c(a[n]) && c(a[n].values)) {
                            for (
                                var o = a[n],
                                    s = o.values.length,
                                    l = !0,
                                    f = 1;
                                f < r;
                                ++f
                            ) {
                                var h = e[f][t].attributes[n];
                                if (
                                    !c(h) ||
                                    o.componentDatatype !==
                                        h.componentDatatype ||
                                    o.componentsPerAttribute !==
                                        h.componentsPerAttribute ||
                                    o.normalize !== h.normalize
                                ) {
                                    l = !1;
                                    break;
                                }
                                s += h.values.length;
                            }
                            l &&
                                (i[n] = new p({
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
                    return i;
                }
                function L(e, t) {
                    var r,
                        a,
                        o,
                        u,
                        s,
                        l,
                        f,
                        h = e.length,
                        p = (e[0].modelMatrix, c(e[0][t].indices)),
                        m = e[0][t].primitiveType,
                        y = D(e, t);
                    for (r in y)
                        if (y.hasOwnProperty(r))
                            for (s = y[r].values, u = 0, a = 0; a < h; ++a)
                                for (
                                    l = e[a][t].attributes[r].values,
                                        f = l.length,
                                        o = 0;
                                    o < f;
                                    ++o
                                )
                                    s[u++] = l[o];
                    var _;
                    if (p) {
                        var v = 0;
                        for (a = 0; a < h; ++a) v += e[a][t].indices.length;
                        var T = d.computeNumberOfVertices(
                                new d({
                                    attributes: y,
                                    primitiveType: g.POINTS,
                                }),
                            ),
                            R = E.createTypedArray(T, v),
                            A = 0,
                            S = 0;
                        for (a = 0; a < h; ++a) {
                            var N = e[a][t].indices,
                                O = N.length;
                            for (u = 0; u < O; ++u) R[A++] = S + N[u];
                            S += d.computeNumberOfVertices(e[a][t]);
                        }
                        _ = R;
                    }
                    var x,
                        w = new i(),
                        I = 0;
                    for (a = 0; a < h; ++a) {
                        if (((x = e[a][t].boundingSphere), !c(x))) {
                            w = void 0;
                            break;
                        }
                        i.add(x.center, w, w);
                    }
                    if (c(w))
                        for (i.divideByScalar(w, h, w), a = 0; a < h; ++a) {
                            x = e[a][t].boundingSphere;
                            var M =
                                i.magnitude(i.subtract(x.center, w, se)) +
                                x.radius;
                            M > I && (I = M);
                        }
                    return new d({
                        attributes: y,
                        indices: _,
                        primitiveType: m,
                        boundingSphere: c(w) ? new n(w, I) : void 0,
                    });
                }
                function b(e) {
                    if (c(e.indices)) return e;
                    for (
                        var t = d.computeNumberOfVertices(e),
                            n = E.createTypedArray(t, t),
                            r = 0;
                        r < t;
                        ++r
                    )
                        n[r] = r;
                    return (e.indices = n), e;
                }
                function U(e) {
                    var t = d.computeNumberOfVertices(e),
                        n = E.createTypedArray(t, 3 * (t - 2));
                    (n[0] = 1), (n[1] = 0), (n[2] = 2);
                    for (var r = 3, i = 3; i < t; ++i)
                        (n[r++] = i - 1), (n[r++] = 0), (n[r++] = i);
                    return (e.indices = n), (e.primitiveType = g.TRIANGLES), e;
                }
                function F(e) {
                    var t = d.computeNumberOfVertices(e),
                        n = E.createTypedArray(t, 3 * (t - 2));
                    (n[0] = 0),
                        (n[1] = 1),
                        (n[2] = 2),
                        t > 3 && ((n[3] = 0), (n[4] = 2), (n[5] = 3));
                    for (var r = 6, i = 3; i < t - 1; i += 2)
                        (n[r++] = i),
                            (n[r++] = i - 1),
                            (n[r++] = i + 1),
                            i + 2 < t &&
                                ((n[r++] = i),
                                (n[r++] = i + 1),
                                (n[r++] = i + 2));
                    return (e.indices = n), (e.primitiveType = g.TRIANGLES), e;
                }
                function B(e) {
                    if (c(e.indices)) return e;
                    for (
                        var t = d.computeNumberOfVertices(e),
                            n = E.createTypedArray(t, t),
                            r = 0;
                        r < t;
                        ++r
                    )
                        n[r] = r;
                    return (e.indices = n), e;
                }
                function z(e) {
                    var t = d.computeNumberOfVertices(e),
                        n = E.createTypedArray(t, 2 * (t - 1));
                    (n[0] = 0), (n[1] = 1);
                    for (var r = 2, i = 2; i < t; ++i)
                        (n[r++] = i - 1), (n[r++] = i);
                    return (e.indices = n), (e.primitiveType = g.LINES), e;
                }
                function G(e) {
                    var t = d.computeNumberOfVertices(e),
                        n = E.createTypedArray(t, 2 * t);
                    (n[0] = 0), (n[1] = 1);
                    for (var r = 2, i = 2; i < t; ++i)
                        (n[r++] = i - 1), (n[r++] = i);
                    return (
                        (n[r++] = t - 1),
                        (n[r] = 0),
                        (e.indices = n),
                        (e.primitiveType = g.LINES),
                        e
                    );
                }
                function q(e) {
                    switch (e.primitiveType) {
                        case g.TRIANGLE_FAN:
                            return U(e);
                        case g.TRIANGLE_STRIP:
                            return F(e);
                        case g.TRIANGLES:
                            return b(e);
                        case g.LINE_STRIP:
                            return z(e);
                        case g.LINE_LOOP:
                            return G(e);
                        case g.LINES:
                            return B(e);
                    }
                    return e;
                }
                function V(e, t) {
                    Math.abs(e.y) < v.EPSILON6 &&
                        (e.y = t ? -v.EPSILON6 : v.EPSILON6);
                }
                function W(e, t, n) {
                    if (0 !== e.y && 0 !== t.y && 0 !== n.y)
                        return V(e, e.y < 0), V(t, t.y < 0), void V(n, n.y < 0);
                    var r,
                        i = Math.abs(e.y),
                        a = Math.abs(t.y),
                        o = Math.abs(n.y);
                    r =
                        i > a
                            ? i > o
                                ? v.sign(e.y)
                                : v.sign(n.y)
                            : a > o
                              ? v.sign(t.y)
                              : v.sign(n.y);
                    var u = r < 0;
                    V(e, u), V(t, u), V(n, u);
                }
                function H(e, t, n, r) {
                    i.add(
                        e,
                        i.multiplyByScalar(
                            i.subtract(t, e, Re),
                            e.y / (e.y - t.y),
                            Re,
                        ),
                        n,
                    ),
                        i.clone(n, r),
                        V(n, !0),
                        V(r, !1);
                }
                function X(e, t, n) {
                    if (!(e.x >= 0 || t.x >= 0 || n.x >= 0)) {
                        W(e, t, n);
                        var r = e.y < 0,
                            i = t.y < 0,
                            a = n.y < 0,
                            o = 0;
                        (o += r ? 1 : 0), (o += i ? 1 : 0), (o += a ? 1 : 0);
                        var u = Oe.indices;
                        1 === o
                            ? ((u[1] = 3),
                              (u[2] = 4),
                              (u[5] = 6),
                              (u[7] = 6),
                              (u[8] = 5),
                              r
                                  ? (H(e, t, Ae, Se),
                                    H(e, n, ge, Ne),
                                    (u[0] = 0),
                                    (u[3] = 1),
                                    (u[4] = 2),
                                    (u[6] = 1))
                                  : i
                                    ? (H(t, n, Ae, Se),
                                      H(t, e, ge, Ne),
                                      (u[0] = 1),
                                      (u[3] = 2),
                                      (u[4] = 0),
                                      (u[6] = 2))
                                    : a &&
                                      (H(n, e, Ae, Se),
                                      H(n, t, ge, Ne),
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
                                  ? i
                                      ? a ||
                                        (H(n, e, Ae, Se),
                                        H(n, t, ge, Ne),
                                        (u[0] = 0),
                                        (u[1] = 1),
                                        (u[3] = 0),
                                        (u[6] = 2))
                                      : (H(t, n, Ae, Se),
                                        H(t, e, ge, Ne),
                                        (u[0] = 2),
                                        (u[1] = 0),
                                        (u[3] = 2),
                                        (u[6] = 1))
                                  : (H(e, t, Ae, Se),
                                    H(e, n, ge, Ne),
                                    (u[0] = 1),
                                    (u[1] = 2),
                                    (u[3] = 1),
                                    (u[6] = 0)));
                        var s = Oe.positions;
                        return (
                            (s[0] = e),
                            (s[1] = t),
                            (s[2] = n),
                            (s.length = 3),
                            (1 !== o && 2 !== o) ||
                                ((s[3] = Ae),
                                (s[4] = ge),
                                (s[5] = Se),
                                (s[6] = Ne),
                                (s.length = 7)),
                            Oe
                        );
                    }
                }
                function k(e, t) {
                    var r = e.attributes;
                    if (0 !== r.position.values.length) {
                        for (var i in r)
                            if (
                                r.hasOwnProperty(i) &&
                                c(r[i]) &&
                                c(r[i].values)
                            ) {
                                var a = r[i];
                                a.values = u.createTypedArray(
                                    a.componentDatatype,
                                    a.values,
                                );
                            }
                        var o = d.computeNumberOfVertices(e);
                        return (
                            (e.indices = E.createTypedArray(o, e.indices)),
                            t &&
                                (e.boundingSphere = n.fromVertices(
                                    r.position.values,
                                )),
                            e
                        );
                    }
                }
                function Y(e) {
                    var t = e.attributes,
                        n = {};
                    for (var r in t)
                        if (t.hasOwnProperty(r) && c(t[r]) && c(t[r].values)) {
                            var i = t[r];
                            n[r] = new p({
                                componentDatatype: i.componentDatatype,
                                componentsPerAttribute:
                                    i.componentsPerAttribute,
                                normalize: i.normalize,
                                values: [],
                            });
                        }
                    return new d({
                        attributes: n,
                        indices: [],
                        primitiveType: e.primitiveType,
                    });
                }
                function Z(e, t, n) {
                    var r = c(e.geometry.boundingSphere);
                    (t = k(t, r)),
                        (n = k(n, r)),
                        c(n) && !c(t)
                            ? (e.geometry = n)
                            : !c(n) && c(t)
                              ? (e.geometry = t)
                              : ((e.westHemisphereGeometry = t),
                                (e.eastHemisphereGeometry = n),
                                (e.geometry = void 0));
                }
                function j(e, n, a, o, u, s, l, f, h, d, p, m) {
                    if (c(s) || c(l) || c(f) || c(h) || c(d)) {
                        var E = i.fromArray(u, 3 * e, xe),
                            y = i.fromArray(u, 3 * n, we),
                            _ = i.fromArray(u, 3 * a, Ie),
                            v = t(o, E, y, _, Me);
                        if (c(s)) {
                            var T = i.fromArray(s, 3 * e, xe),
                                R = i.fromArray(s, 3 * n, we),
                                A = i.fromArray(s, 3 * a, Ie);
                            i.multiplyByScalar(T, v.x, T),
                                i.multiplyByScalar(R, v.y, R),
                                i.multiplyByScalar(A, v.z, A);
                            var g = i.add(T, R, T);
                            i.add(g, A, g),
                                i.normalize(g, g),
                                i.pack(g, p.normal.values, 3 * m);
                        }
                        if (c(d)) {
                            var S = i.fromArray(d, 3 * e, xe),
                                N = i.fromArray(d, 3 * n, we),
                                O = i.fromArray(d, 3 * a, Ie);
                            i.multiplyByScalar(S, v.x, S),
                                i.multiplyByScalar(N, v.y, N),
                                i.multiplyByScalar(O, v.z, O);
                            var x;
                            i.equals(S, i.ZERO) &&
                            i.equals(N, i.ZERO) &&
                            i.equals(O, i.ZERO)
                                ? ((x = xe), (x.x = 0), (x.y = 0), (x.z = 0))
                                : ((x = i.add(S, N, S)),
                                  i.add(x, O, x),
                                  i.normalize(x, x)),
                                i.pack(x, p.extrudeDirection.values, 3 * m);
                        }
                        if (c(l)) {
                            var w = i.fromArray(l, 3 * e, xe),
                                I = i.fromArray(l, 3 * n, we),
                                M = i.fromArray(l, 3 * a, Ie);
                            i.multiplyByScalar(w, v.x, w),
                                i.multiplyByScalar(I, v.y, I),
                                i.multiplyByScalar(M, v.z, M);
                            var C = i.add(w, I, w);
                            i.add(C, M, C),
                                i.normalize(C, C),
                                i.pack(C, p.tangent.values, 3 * m);
                        }
                        if (c(f)) {
                            var P = i.fromArray(f, 3 * e, xe),
                                D = i.fromArray(f, 3 * n, we),
                                L = i.fromArray(f, 3 * a, Ie);
                            i.multiplyByScalar(P, v.x, P),
                                i.multiplyByScalar(D, v.y, D),
                                i.multiplyByScalar(L, v.z, L);
                            var b = i.add(P, D, P);
                            i.add(b, L, b),
                                i.normalize(b, b),
                                i.pack(b, p.bitangent.values, 3 * m);
                        }
                        if (c(h)) {
                            var U = r.fromArray(h, 2 * e, Ce),
                                F = r.fromArray(h, 2 * n, Pe),
                                B = r.fromArray(h, 2 * a, De);
                            r.multiplyByScalar(U, v.x, U),
                                r.multiplyByScalar(F, v.y, F),
                                r.multiplyByScalar(B, v.z, B);
                            var z = r.add(U, F, U);
                            r.add(z, B, z), r.pack(z, p.st.values, 2 * m);
                        }
                    }
                }
                function K(e, t, n, r, i, a) {
                    var o = e.position.values.length / 3;
                    if (-1 !== i) {
                        var u = r[i],
                            s = n[u];
                        return -1 === s
                            ? ((n[u] = o),
                              e.position.values.push(a.x, a.y, a.z),
                              t.push(o),
                              o)
                            : (t.push(s), s);
                    }
                    return e.position.values.push(a.x, a.y, a.z), t.push(o), o;
                }
                function J(e) {
                    var t,
                        n,
                        r,
                        a,
                        o,
                        u = e.geometry,
                        s = u.attributes,
                        l = s.position.values,
                        f = c(s.normal) ? s.normal.values : void 0,
                        h = c(s.bitangent) ? s.bitangent.values : void 0,
                        d = c(s.tangent) ? s.tangent.values : void 0,
                        p = c(s.st) ? s.st.values : void 0,
                        m = c(s.extrudeDirection)
                            ? s.extrudeDirection.values
                            : void 0,
                        E = u.indices,
                        y = Y(u),
                        _ = Y(u),
                        v = [];
                    v.length = l.length / 3;
                    var T = [];
                    for (T.length = l.length / 3, o = 0; o < v.length; ++o)
                        (v[o] = -1), (T[o] = -1);
                    var R = E.length;
                    for (o = 0; o < R; o += 3) {
                        var A = E[o],
                            g = E[o + 1],
                            S = E[o + 2],
                            N = i.fromArray(l, 3 * A),
                            O = i.fromArray(l, 3 * g),
                            x = i.fromArray(l, 3 * S),
                            w = X(N, O, x);
                        if (c(w) && w.positions.length > 3)
                            for (
                                var I = w.positions,
                                    M = w.indices,
                                    C = M.length,
                                    P = 0;
                                P < C;
                                ++P
                            ) {
                                var D = M[P],
                                    L = I[D];
                                L.y < 0
                                    ? ((t = _.attributes),
                                      (n = _.indices),
                                      (r = v))
                                    : ((t = y.attributes),
                                      (n = y.indices),
                                      (r = T)),
                                    (a = K(t, n, r, E, D < 3 ? o + D : -1, L)),
                                    j(A, g, S, L, l, f, d, h, p, m, t, a);
                            }
                        else
                            c(w) &&
                                ((N = w.positions[0]),
                                (O = w.positions[1]),
                                (x = w.positions[2])),
                                N.y < 0
                                    ? ((t = _.attributes),
                                      (n = _.indices),
                                      (r = v))
                                    : ((t = y.attributes),
                                      (n = y.indices),
                                      (r = T)),
                                (a = K(t, n, r, E, o, N)),
                                j(A, g, S, N, l, f, d, h, p, m, t, a),
                                (a = K(t, n, r, E, o + 1, O)),
                                j(A, g, S, O, l, f, d, h, p, m, t, a),
                                (a = K(t, n, r, E, o + 2, x)),
                                j(A, g, S, x, l, f, d, h, p, m, t, a);
                    }
                    Z(e, _, y);
                }
                function Q(e) {
                    var t,
                        n = e.geometry,
                        r = n.attributes,
                        a = r.position.values,
                        o = n.indices,
                        u = Y(n),
                        s = Y(n),
                        l = o.length,
                        f = [];
                    f.length = a.length / 3;
                    var h = [];
                    for (h.length = a.length / 3, t = 0; t < f.length; ++t)
                        (f[t] = -1), (h[t] = -1);
                    for (t = 0; t < l; t += 2) {
                        var d = o[t],
                            p = o[t + 1],
                            m = i.fromArray(a, 3 * d, xe),
                            E = i.fromArray(a, 3 * p, we);
                        Math.abs(m.y) < v.EPSILON6 &&
                            (m.y < 0
                                ? (m.y = -v.EPSILON6)
                                : (m.y = v.EPSILON6)),
                            Math.abs(E.y) < v.EPSILON6 &&
                                (E.y < 0
                                    ? (E.y = -v.EPSILON6)
                                    : (E.y = v.EPSILON6));
                        var y = u.attributes,
                            T = u.indices,
                            R = h,
                            A = s.attributes,
                            g = s.indices,
                            S = f,
                            N = _.lineSegmentPlane(m, E, Le, Ie);
                        if (c(N)) {
                            var O = i.multiplyByScalar(
                                i.UNIT_Y,
                                5 * v.EPSILON9,
                                be,
                            );
                            m.y < 0 &&
                                (i.negate(O, O),
                                (y = s.attributes),
                                (T = s.indices),
                                (R = f),
                                (A = u.attributes),
                                (g = u.indices),
                                (S = h));
                            var x = i.add(N, O, Ue);
                            K(y, T, R, o, t, m),
                                K(y, T, R, o, -1, x),
                                i.negate(O, O),
                                i.add(N, O, x),
                                K(A, g, S, o, -1, x),
                                K(A, g, S, o, t + 1, E);
                        } else {
                            var w, I, M;
                            m.y < 0
                                ? ((w = s.attributes), (I = s.indices), (M = f))
                                : ((w = u.attributes),
                                  (I = u.indices),
                                  (M = h)),
                                K(w, I, M, o, t, m),
                                K(w, I, M, o, t + 1, E);
                        }
                    }
                    Z(e, s, u);
                }
                function $(e) {
                    for (
                        var t = e.attributes,
                            n = t.position.values,
                            r = t.prevPosition.values,
                            a = t.nextPosition.values,
                            o = n.length,
                            u = 0;
                        u < o;
                        u += 3
                    ) {
                        var s = i.unpack(n, u, ze);
                        if (!(s.x > 0)) {
                            var c = i.unpack(r, u, Ge);
                            ((s.y < 0 && c.y > 0) || (s.y > 0 && c.y < 0)) &&
                                (u - 3 > 0
                                    ? ((r[u] = n[u - 3]),
                                      (r[u + 1] = n[u - 2]),
                                      (r[u + 2] = n[u - 1]))
                                    : i.pack(s, r, u));
                            var l = i.unpack(a, u, qe);
                            ((s.y < 0 && l.y > 0) || (s.y > 0 && l.y < 0)) &&
                                (u + 3 < o
                                    ? ((a[u] = n[u + 3]),
                                      (a[u + 1] = n[u + 4]),
                                      (a[u + 2] = n[u + 5]))
                                    : i.pack(s, a, u));
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
                        f = s.prevPosition.values,
                        h = s.nextPosition.values,
                        d = s.expandAndWidth.values,
                        p = c(s.st) ? s.st.values : void 0,
                        m = c(s.color) ? s.color.values : void 0,
                        E = Y(u),
                        y = Y(u),
                        T = !1,
                        R = l.length / 3;
                    for (t = 0; t < R; t += 4) {
                        var A = t,
                            g = t + 2,
                            S = i.fromArray(l, 3 * A, ze),
                            N = i.fromArray(l, 3 * g, Ge);
                        if (Math.abs(S.y) < Ye)
                            for (
                                S.y = Ye * (N.y < 0 ? -1 : 1),
                                    l[3 * t + 1] = S.y,
                                    l[3 * (t + 1) + 1] = S.y,
                                    n = 3 * A;
                                n < 3 * A + 12;
                                n += 3
                            )
                                (f[n] = l[3 * t]),
                                    (f[n + 1] = l[3 * t + 1]),
                                    (f[n + 2] = l[3 * t + 2]);
                        if (Math.abs(N.y) < Ye)
                            for (
                                N.y = Ye * (S.y < 0 ? -1 : 1),
                                    l[3 * (t + 2) + 1] = N.y,
                                    l[3 * (t + 3) + 1] = N.y,
                                    n = 3 * A;
                                n < 3 * A + 12;
                                n += 3
                            )
                                (h[n] = l[3 * (t + 2)]),
                                    (h[n + 1] = l[3 * (t + 2) + 1]),
                                    (h[n + 2] = l[3 * (t + 2) + 2]);
                        var O = E.attributes,
                            x = E.indices,
                            w = y.attributes,
                            I = y.indices,
                            M = _.lineSegmentPlane(S, N, Le, Ve);
                        if (c(M)) {
                            T = !0;
                            var C = i.multiplyByScalar(i.UNIT_Y, ke, We);
                            S.y < 0 &&
                                (i.negate(C, C),
                                (O = y.attributes),
                                (x = y.indices),
                                (w = E.attributes),
                                (I = E.indices));
                            var P = i.add(M, C, He);
                            O.position.values.push(
                                S.x,
                                S.y,
                                S.z,
                                S.x,
                                S.y,
                                S.z,
                            ),
                                O.position.values.push(P.x, P.y, P.z),
                                O.position.values.push(P.x, P.y, P.z),
                                O.prevPosition.values.push(
                                    f[3 * A],
                                    f[3 * A + 1],
                                    f[3 * A + 2],
                                ),
                                O.prevPosition.values.push(
                                    f[3 * A + 3],
                                    f[3 * A + 4],
                                    f[3 * A + 5],
                                ),
                                O.prevPosition.values.push(
                                    S.x,
                                    S.y,
                                    S.z,
                                    S.x,
                                    S.y,
                                    S.z,
                                ),
                                O.nextPosition.values.push(P.x, P.y, P.z),
                                O.nextPosition.values.push(P.x, P.y, P.z),
                                O.nextPosition.values.push(P.x, P.y, P.z),
                                O.nextPosition.values.push(P.x, P.y, P.z),
                                i.negate(C, C),
                                i.add(M, C, P),
                                w.position.values.push(P.x, P.y, P.z),
                                w.position.values.push(P.x, P.y, P.z),
                                w.position.values.push(
                                    N.x,
                                    N.y,
                                    N.z,
                                    N.x,
                                    N.y,
                                    N.z,
                                ),
                                w.prevPosition.values.push(P.x, P.y, P.z),
                                w.prevPosition.values.push(P.x, P.y, P.z),
                                w.prevPosition.values.push(P.x, P.y, P.z),
                                w.prevPosition.values.push(P.x, P.y, P.z),
                                w.nextPosition.values.push(
                                    N.x,
                                    N.y,
                                    N.z,
                                    N.x,
                                    N.y,
                                    N.z,
                                ),
                                w.nextPosition.values.push(
                                    h[3 * g],
                                    h[3 * g + 1],
                                    h[3 * g + 2],
                                ),
                                w.nextPosition.values.push(
                                    h[3 * g + 3],
                                    h[3 * g + 4],
                                    h[3 * g + 5],
                                );
                            var D = r.fromArray(d, 2 * A, Fe),
                                L = Math.abs(D.y);
                            O.expandAndWidth.values.push(-1, L, 1, L),
                                O.expandAndWidth.values.push(-1, -L, 1, -L),
                                w.expandAndWidth.values.push(-1, L, 1, L),
                                w.expandAndWidth.values.push(-1, -L, 1, -L);
                            var b = i.magnitudeSquared(i.subtract(M, S, qe));
                            if (
                                ((b /= i.magnitudeSquared(
                                    i.subtract(N, S, qe),
                                )),
                                c(m))
                            ) {
                                var U = a.fromArray(m, 4 * A, Xe),
                                    F = a.fromArray(m, 4 * g, Xe),
                                    B = v.lerp(U.x, F.x, b),
                                    z = v.lerp(U.y, F.y, b),
                                    G = v.lerp(U.z, F.z, b),
                                    q = v.lerp(U.w, F.w, b);
                                for (n = 4 * A; n < 4 * A + 8; ++n)
                                    O.color.values.push(m[n]);
                                for (
                                    O.color.values.push(B, z, G, q),
                                        O.color.values.push(B, z, G, q),
                                        w.color.values.push(B, z, G, q),
                                        w.color.values.push(B, z, G, q),
                                        n = 4 * g;
                                    n < 4 * g + 8;
                                    ++n
                                )
                                    w.color.values.push(m[n]);
                            }
                            if (c(p)) {
                                var V = r.fromArray(p, 2 * A, Fe),
                                    W = r.fromArray(p, 2 * (t + 3), Be),
                                    H = v.lerp(V.x, W.x, b);
                                for (n = 2 * A; n < 2 * A + 4; ++n)
                                    O.st.values.push(p[n]);
                                for (
                                    O.st.values.push(H, V.y),
                                        O.st.values.push(H, W.y),
                                        w.st.values.push(H, V.y),
                                        w.st.values.push(H, W.y),
                                        n = 2 * g;
                                    n < 2 * g + 4;
                                    ++n
                                )
                                    w.st.values.push(p[n]);
                            }
                            (o = O.position.values.length / 3 - 4),
                                x.push(o, o + 2, o + 1),
                                x.push(o + 1, o + 2, o + 3),
                                (o = w.position.values.length / 3 - 4),
                                I.push(o, o + 2, o + 1),
                                I.push(o + 1, o + 2, o + 3);
                        } else {
                            var X, k;
                            for (
                                S.y < 0
                                    ? ((X = y.attributes), (k = y.indices))
                                    : ((X = E.attributes), (k = E.indices)),
                                    X.position.values.push(S.x, S.y, S.z),
                                    X.position.values.push(S.x, S.y, S.z),
                                    X.position.values.push(N.x, N.y, N.z),
                                    X.position.values.push(N.x, N.y, N.z),
                                    n = 3 * t;
                                n < 3 * t + 12;
                                ++n
                            )
                                X.prevPosition.values.push(f[n]),
                                    X.nextPosition.values.push(h[n]);
                            for (n = 2 * t; n < 2 * t + 8; ++n)
                                X.expandAndWidth.values.push(d[n]),
                                    c(p) && X.st.values.push(p[n]);
                            if (c(m))
                                for (n = 4 * t; n < 4 * t + 16; ++n)
                                    X.color.values.push(m[n]);
                            (o = X.position.values.length / 3 - 4),
                                k.push(o, o + 2, o + 1),
                                k.push(o + 1, o + 2, o + 3);
                        }
                    }
                    T && ($(y), $(E)), Z(e, y, E);
                }
                var te = {};
                (te.toWireframe = function (e) {
                    var t = e.indices;
                    if (c(t)) {
                        switch (e.primitiveType) {
                            case g.TRIANGLES:
                                e.indices = O(t);
                                break;
                            case g.TRIANGLE_STRIP:
                                e.indices = x(t);
                                break;
                            case g.TRIANGLE_FAN:
                                e.indices = w(t);
                        }
                        e.primitiveType = g.LINES;
                    }
                    return e;
                }),
                    (te.createLineSegmentsForVectors = function (e, t, r) {
                        (t = s(t, 'normal')), (r = s(r, 1e4));
                        for (
                            var i = e.attributes.position.values,
                                a = e.attributes[t].values,
                                o = i.length,
                                l = new Float64Array(2 * o),
                                f = 0,
                                h = 0;
                            h < o;
                            h += 3
                        )
                            (l[f++] = i[h]),
                                (l[f++] = i[h + 1]),
                                (l[f++] = i[h + 2]),
                                (l[f++] = i[h] + a[h] * r),
                                (l[f++] = i[h + 1] + a[h + 1] * r),
                                (l[f++] = i[h + 2] + a[h + 2] * r);
                        var m,
                            E = e.boundingSphere;
                        return (
                            c(E) && (m = new n(E.center, E.radius + r)),
                            new d({
                                attributes: {
                                    position: new p({
                                        componentDatatype: u.DOUBLE,
                                        componentsPerAttribute: 3,
                                        values: l,
                                    }),
                                },
                                primitiveType: g.LINES,
                                boundingSphere: m,
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
                            i = {},
                            a = 0,
                            o = n.length;
                        for (t = 0; t < o; ++t) {
                            var u = n[t];
                            c(r[u]) && (i[u] = a++);
                        }
                        for (var s in r)
                            r.hasOwnProperty(s) && !c(i[s]) && (i[s] = a++);
                        return i;
                    }),
                    (te.reorderForPreVertexCache = function (e) {
                        var t = d.computeNumberOfVertices(e),
                            n = e.indices;
                        if (c(n)) {
                            for (var r = new Int32Array(t), i = 0; i < t; i++)
                                r[i] = -1;
                            for (
                                var a,
                                    o = n,
                                    s = o.length,
                                    l = E.createTypedArray(t, s),
                                    f = 0,
                                    h = 0,
                                    p = 0;
                                f < s;

                            )
                                (a = r[o[f]]),
                                    -1 !== a
                                        ? (l[h] = a)
                                        : ((a = o[f]),
                                          (r[a] = p),
                                          (l[h] = p),
                                          ++p),
                                    ++f,
                                    ++h;
                            e.indices = l;
                            var m = e.attributes;
                            for (var y in m)
                                if (
                                    m.hasOwnProperty(y) &&
                                    c(m[y]) &&
                                    c(m[y].values)
                                ) {
                                    for (
                                        var _ = m[y],
                                            v = _.values,
                                            T = 0,
                                            R = _.componentsPerAttribute,
                                            A = u.createTypedArray(
                                                _.componentDatatype,
                                                p * R,
                                            );
                                        T < t;

                                    ) {
                                        var g = r[T];
                                        if (-1 !== g)
                                            for (var S = 0; S < R; S++)
                                                A[R * g + S] = v[R * T + S];
                                        ++T;
                                    }
                                    _.values = A;
                                }
                        }
                        return e;
                    }),
                    (te.reorderForPostVertexCache = function (e, t) {
                        var n = e.indices;
                        if (e.primitiveType === g.TRIANGLES && c(n)) {
                            for (var r = n.length, i = 0, a = 0; a < r; a++)
                                n[a] > i && (i = n[a]);
                            e.indices = S.tipsify({
                                indices: n,
                                maximumIndex: i,
                                cacheSize: t,
                            });
                        }
                        return e;
                    }),
                    (te.fitToUnsignedShortIndices = function (e) {
                        var t = [],
                            n = d.computeNumberOfVertices(e);
                        if (c(e.indices) && n >= v.SIXTY_FOUR_KILOBYTES) {
                            var r,
                                i = [],
                                a = [],
                                o = 0,
                                u = I(e.attributes),
                                s = e.indices,
                                l = s.length;
                            e.primitiveType === g.TRIANGLES
                                ? (r = 3)
                                : e.primitiveType === g.LINES
                                  ? (r = 2)
                                  : e.primitiveType === g.POINTS && (r = 1);
                            for (var f = 0; f < l; f += r) {
                                for (var h = 0; h < r; ++h) {
                                    var p = s[f + h],
                                        m = i[p];
                                    c(m) ||
                                        ((m = o++),
                                        (i[p] = m),
                                        M(u, e.attributes, p)),
                                        a.push(m);
                                }
                                o + r >= v.SIXTY_FOUR_KILOBYTES &&
                                    (t.push(
                                        new d({
                                            attributes: u,
                                            indices: a,
                                            primitiveType: e.primitiveType,
                                            boundingSphere: e.boundingSphere,
                                            boundingSphereCV:
                                                e.boundingSphereCV,
                                        }),
                                    ),
                                    (i = []),
                                    (a = []),
                                    (o = 0),
                                    (u = I(e.attributes)));
                            }
                            0 !== a.length &&
                                t.push(
                                    new d({
                                        attributes: u,
                                        indices: a,
                                        primitiveType: e.primitiveType,
                                        boundingSphere: e.boundingSphere,
                                        boundingSphereCV: e.boundingSphereCV,
                                    }),
                                );
                        } else t.push(e);
                        return t;
                    });
                var ne = new i(),
                    re = new o();
                te.projectTo2D = function (e, t, n, r, a) {
                    var o = e.attributes[t];
                    a = c(a) ? a : new h();
                    for (
                        var s = a.ellipsoid,
                            l = o.values,
                            f = new Float64Array(l.length),
                            d = 0,
                            m = 0;
                        m < l.length;
                        m += 3
                    ) {
                        var E = i.fromArray(l, m, ne),
                            y = s.cartesianToCartographic(E, re),
                            _ = a.project(y, ne);
                        (f[d++] = _.x), (f[d++] = _.y), (f[d++] = _.z);
                    }
                    return (
                        (e.attributes[n] = o),
                        (e.attributes[r] = new p({
                            componentDatatype: u.DOUBLE,
                            componentsPerAttribute: 3,
                            values: f,
                        })),
                        delete e.attributes[t],
                        e
                    );
                };
                var ie = { high: 0, low: 0 };
                te.encodeAttribute = function (e, t, n, r) {
                    for (
                        var i = e.attributes[t],
                            a = i.values,
                            o = a.length,
                            s = new Float32Array(o),
                            c = new Float32Array(o),
                            l = 0;
                        l < o;
                        ++l
                    )
                        f.encode(a[l], ie), (s[l] = ie.high), (c[l] = ie.low);
                    var h = i.componentsPerAttribute;
                    return (
                        (e.attributes[n] = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: h,
                            values: s,
                        })),
                        (e.attributes[r] = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: h,
                            values: c,
                        })),
                        delete e.attributes[t],
                        e
                    );
                };
                var ae = new i(),
                    oe = new R(),
                    ue = new T();
                te.transformToWorldCoordinates = function (e) {
                    var t = e.modelMatrix;
                    if (R.equals(t, R.IDENTITY)) return e;
                    var r = e.geometry.attributes;
                    C(t, r.position),
                        C(t, r.prevPosition),
                        C(t, r.nextPosition),
                        (c(r.normal) || c(r.tangent) || c(r.bitangent)) &&
                            (R.inverse(t, oe),
                            R.transpose(oe, oe),
                            R.getRotation(oe, ue),
                            P(ue, r.normal),
                            P(ue, r.tangent),
                            P(ue, r.bitangent));
                    var i = e.geometry.boundingSphere;
                    return (
                        c(i) &&
                            (e.geometry.boundingSphere = n.transform(i, t, i)),
                        (e.modelMatrix = R.clone(R.IDENTITY)),
                        e
                    );
                };
                var se = new i();
                te.combineInstances = function (e) {
                    for (var t = [], n = [], r = e.length, i = 0; i < r; ++i) {
                        var a = e[i];
                        c(a.geometry)
                            ? t.push(a)
                            : c(a.westHemisphereGeometry) &&
                              c(a.eastHemisphereGeometry) &&
                              n.push(a);
                    }
                    var o = [];
                    return (
                        t.length > 0 && o.push(L(t, 'geometry')),
                        n.length > 0 &&
                            (o.push(L(n, 'westHemisphereGeometry')),
                            o.push(L(n, 'eastHemisphereGeometry'))),
                        o
                    );
                };
                var ce = new i(),
                    le = new i(),
                    fe = new i(),
                    he = new i();
                te.computeNormal = function (e) {
                    var t,
                        n = e.indices,
                        r = e.attributes,
                        a = r.position.values,
                        o = r.position.values.length / 3,
                        s = n.length,
                        c = new Array(o),
                        l = new Array(s / 3),
                        f = new Array(s);
                    for (t = 0; t < o; t++)
                        c[t] = { indexOffset: 0, count: 0, currentCount: 0 };
                    var h = 0;
                    for (t = 0; t < s; t += 3) {
                        var d = n[t],
                            m = n[t + 1],
                            E = n[t + 2],
                            y = 3 * d,
                            _ = 3 * m,
                            T = 3 * E;
                        (le.x = a[y]),
                            (le.y = a[y + 1]),
                            (le.z = a[y + 2]),
                            (fe.x = a[_]),
                            (fe.y = a[_ + 1]),
                            (fe.z = a[_ + 2]),
                            (he.x = a[T]),
                            (he.y = a[T + 1]),
                            (he.z = a[T + 2]),
                            c[d].count++,
                            c[m].count++,
                            c[E].count++,
                            i.subtract(fe, le, fe),
                            i.subtract(he, le, he),
                            (l[h] = i.cross(fe, he, new i())),
                            h++;
                    }
                    var R = 0;
                    for (t = 0; t < o; t++)
                        (c[t].indexOffset += R), (R += c[t].count);
                    h = 0;
                    var A;
                    for (t = 0; t < s; t += 3) {
                        A = c[n[t]];
                        var g = A.indexOffset + A.currentCount;
                        (f[g] = h),
                            A.currentCount++,
                            (A = c[n[t + 1]]),
                            (g = A.indexOffset + A.currentCount),
                            (f[g] = h),
                            A.currentCount++,
                            (A = c[n[t + 2]]),
                            (g = A.indexOffset + A.currentCount),
                            (f[g] = h),
                            A.currentCount++,
                            h++;
                    }
                    var S = new Float32Array(3 * o);
                    for (t = 0; t < o; t++) {
                        var N = 3 * t;
                        if (((A = c[t]), i.clone(i.ZERO, ce), A.count > 0)) {
                            for (h = 0; h < A.count; h++)
                                i.add(ce, l[f[A.indexOffset + h]], ce);
                            i.equalsEpsilon(i.ZERO, ce, v.EPSILON10) &&
                                i.clone(l[f[A.indexOffset]], ce);
                        }
                        i.equalsEpsilon(i.ZERO, ce, v.EPSILON10) && (ce.z = 1),
                            i.normalize(ce, ce),
                            (S[N] = ce.x),
                            (S[N + 1] = ce.y),
                            (S[N + 2] = ce.z);
                    }
                    return (
                        (e.attributes.normal = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: S,
                        })),
                        e
                    );
                };
                var de = new i(),
                    pe = new i(),
                    me = new i();
                te.computeTangentAndBitangent = function (e) {
                    var t,
                        n = (e.attributes, e.indices),
                        r = e.attributes.position.values,
                        a = e.attributes.normal.values,
                        o = e.attributes.st.values,
                        s = e.attributes.position.values.length / 3,
                        c = n.length,
                        l = new Array(3 * s);
                    for (t = 0; t < l.length; t++) l[t] = 0;
                    var f, h, d;
                    for (t = 0; t < c; t += 3) {
                        var m = n[t],
                            E = n[t + 1],
                            y = n[t + 2];
                        (f = 3 * m), (h = 3 * E), (d = 3 * y);
                        var _ = 2 * m,
                            v = 2 * E,
                            T = 2 * y,
                            R = r[f],
                            A = r[f + 1],
                            g = r[f + 2],
                            S = o[_],
                            N = o[_ + 1],
                            O = o[v + 1] - N,
                            x = o[T + 1] - N,
                            w = 1 / ((o[v] - S) * x - (o[T] - S) * O),
                            I = (x * (r[h] - R) - O * (r[d] - R)) * w,
                            M = (x * (r[h + 1] - A) - O * (r[d + 1] - A)) * w,
                            C = (x * (r[h + 2] - g) - O * (r[d + 2] - g)) * w;
                        (l[f] += I),
                            (l[f + 1] += M),
                            (l[f + 2] += C),
                            (l[h] += I),
                            (l[h + 1] += M),
                            (l[h + 2] += C),
                            (l[d] += I),
                            (l[d + 1] += M),
                            (l[d + 2] += C);
                    }
                    var P = new Float32Array(3 * s),
                        D = new Float32Array(3 * s);
                    for (t = 0; t < s; t++) {
                        (f = 3 * t), (h = f + 1), (d = f + 2);
                        var L = i.fromArray(a, f, de),
                            b = i.fromArray(l, f, me),
                            U = i.dot(L, b);
                        i.multiplyByScalar(L, U, pe),
                            i.normalize(i.subtract(b, pe, b), b),
                            (P[f] = b.x),
                            (P[h] = b.y),
                            (P[d] = b.z),
                            i.normalize(i.cross(L, b, b), b),
                            (D[f] = b.x),
                            (D[h] = b.y),
                            (D[d] = b.z);
                    }
                    return (
                        (e.attributes.tangent = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: P,
                        })),
                        (e.attributes.bitangent = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: D,
                        })),
                        e
                    );
                };
                var Ee = new r(),
                    ye = new i(),
                    _e = new i(),
                    ve = new i(),
                    Te = new r();
                te.compressVertices = function (t) {
                    var n,
                        a,
                        o = t.attributes.extrudeDirection;
                    if (c(o)) {
                        var s = o.values;
                        a = s.length / 3;
                        var l = new Float32Array(2 * a),
                            f = 0;
                        for (n = 0; n < a; ++n)
                            i.fromArray(s, 3 * n, ye),
                                i.equals(ye, i.ZERO)
                                    ? (f += 2)
                                    : ((Te = e.octEncodeInRange(ye, 65535, Te)),
                                      (l[f++] = Te.x),
                                      (l[f++] = Te.y));
                        return (
                            (t.attributes.compressedAttributes = new p({
                                componentDatatype: u.FLOAT,
                                componentsPerAttribute: 2,
                                values: l,
                            })),
                            delete t.attributes.extrudeDirection,
                            t
                        );
                    }
                    var h = t.attributes.normal,
                        d = t.attributes.st,
                        m = c(h),
                        E = c(d);
                    if (!m && !E) return t;
                    var y,
                        _,
                        v,
                        T,
                        R = t.attributes.tangent,
                        A = t.attributes.bitangent,
                        g = c(R),
                        S = c(A);
                    m && (y = h.values),
                        E && (_ = d.values),
                        g && (v = R.values),
                        S && (T = A.values),
                        (a = (m ? y.length : _.length) / (m ? 3 : 2));
                    var N = a,
                        O = E && m ? 2 : 1;
                    (O += g || S ? 1 : 0), (N *= O);
                    var x = new Float32Array(N),
                        w = 0;
                    for (n = 0; n < a; ++n) {
                        E &&
                            (r.fromArray(_, 2 * n, Ee),
                            (x[w++] = e.compressTextureCoordinates(Ee)));
                        var I = 3 * n;
                        m && c(v) && c(T)
                            ? (i.fromArray(y, I, ye),
                              i.fromArray(v, I, _e),
                              i.fromArray(T, I, ve),
                              e.octPack(ye, _e, ve, Ee),
                              (x[w++] = Ee.x),
                              (x[w++] = Ee.y))
                            : (m &&
                                  (i.fromArray(y, I, ye),
                                  (x[w++] = e.octEncodeFloat(ye))),
                              g &&
                                  (i.fromArray(v, I, ye),
                                  (x[w++] = e.octEncodeFloat(ye))),
                              S &&
                                  (i.fromArray(T, I, ye),
                                  (x[w++] = e.octEncodeFloat(ye))));
                    }
                    return (
                        (t.attributes.compressedAttributes = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: O,
                            values: x,
                        })),
                        m && delete t.attributes.normal,
                        E && delete t.attributes.st,
                        S && delete t.attributes.bitangent,
                        g && delete t.attributes.tangent,
                        t
                    );
                };
                var Re = new i(),
                    Ae = new i(),
                    ge = new i(),
                    Se = new i(),
                    Ne = new i(),
                    Oe = { positions: new Array(7), indices: new Array(9) },
                    xe = new i(),
                    we = new i(),
                    Ie = new i(),
                    Me = new i(),
                    Ce = new r(),
                    Pe = new r(),
                    De = new r(),
                    Le = A.fromPointNormal(i.ZERO, i.UNIT_Y),
                    be = new i(),
                    Ue = new i(),
                    Fe = new r(),
                    Be = new r(),
                    ze = new i(),
                    Ge = new i(),
                    qe = new i(),
                    Ve = new i(),
                    We = new i(),
                    He = new i(),
                    Xe = new a(),
                    ke = 5 * v.EPSILON9,
                    Ye = v.EPSILON6;
                return (
                    (te.splitLongitude = function (e) {
                        var t = e.geometry,
                            r = t.boundingSphere;
                        if (c(r)) {
                            if (
                                r.center.x - r.radius > 0 ||
                                n.intersectPlane(r, A.ORIGIN_ZX_PLANE) !==
                                    y.INTERSECTING
                            )
                                return e;
                        }
                        if (t.geometryType !== m.NONE)
                            switch (t.geometryType) {
                                case m.POLYLINES:
                                    ee(e);
                                    break;
                                case m.TRIANGLES:
                                    J(e);
                                    break;
                                case m.LINES:
                                    Q(e);
                            }
                        else
                            q(t),
                                t.primitiveType === g.TRIANGLES
                                    ? J(e)
                                    : t.primitiveType === g.LINES && Q(e);
                        return e;
                    }),
                    te
                );
            },
        ),
        define(
            'Core/arrayRemoveDuplicates',
            ['./Check', './defaultValue', './defined', './Math'],
            function (e, t, n, r) {
                'use strict';
                function i(e, r, i) {
                    if (n(e)) {
                        i = t(i, !1);
                        var o = e.length;
                        if (o < 2) return e;
                        var u, s, c;
                        for (
                            u = 1;
                            u < o && ((s = e[u - 1]), (c = e[u]), !r(s, c, a));
                            ++u
                        );
                        if (u === o)
                            return i && r(e[0], e[e.length - 1], a)
                                ? e.slice(1)
                                : e;
                        for (var l = e.slice(0, u); u < o; ++u)
                            (c = e[u]), r(s, c, a) || (l.push(c), (s = c));
                        return (
                            i &&
                                l.length > 1 &&
                                r(l[0], l[l.length - 1], a) &&
                                l.shift(),
                            l
                        );
                    }
                }
                var a = r.EPSILON10;
                return i;
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
        define('ThirdParty/earcut-2.1.1', [], function () {
            'use strict';
            function e(e, n, i) {
                i = i || 2;
                var a = n && n.length,
                    o = a ? n[0] * i : e.length,
                    u = t(e, 0, o, i, !0),
                    c = [];
                if (!u) return c;
                var l, f, h, d, p, m, E;
                if ((a && (u = s(e, n, u, i)), e.length > 80 * i)) {
                    (l = h = e[0]), (f = d = e[1]);
                    for (var y = i; y < o; y += i)
                        (p = e[y]),
                            (m = e[y + 1]),
                            p < l && (l = p),
                            m < f && (f = m),
                            p > h && (h = p),
                            m > d && (d = m);
                    E = Math.max(h - l, d - f);
                }
                return r(u, c, i, l, f, E), c;
            }
            function t(e, t, n, r, i) {
                var a, o;
                if (i === w(e, t, n, r) > 0)
                    for (a = t; a < n; a += r) o = N(a, e[a], e[a + 1], o);
                else
                    for (a = n - r; a >= t; a -= r) o = N(a, e[a], e[a + 1], o);
                return o && v(o, o.next) && (O(o), (o = o.next)), o;
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
                            (!v(r, r.next) && 0 !== _(r.prev, r, r.next)))
                    )
                        r = r.next;
                    else {
                        if ((O(r), (r = t = r.prev) === r.next)) return null;
                        n = !0;
                    }
                } while (n || r !== t);
                return t;
            }
            function r(e, t, s, c, l, f, d) {
                if (e) {
                    !d && f && h(e, c, l, f);
                    for (var p, m, E = e; e.prev !== e.next; )
                        if (
                            ((p = e.prev),
                            (m = e.next),
                            f ? a(e, c, l, f) : i(e))
                        )
                            t.push(p.i / s),
                                t.push(e.i / s),
                                t.push(m.i / s),
                                O(e),
                                (e = m.next),
                                (E = m.next);
                        else if ((e = m) === E) {
                            d
                                ? 1 === d
                                    ? ((e = o(e, t, s)), r(e, t, s, c, l, f, 2))
                                    : 2 === d && u(e, t, s, c, l, f)
                                : r(n(e), t, s, c, l, f, 1);
                            break;
                        }
                }
            }
            function i(e) {
                var t = e.prev,
                    n = e,
                    r = e.next;
                if (_(t, n, r) >= 0) return !1;
                for (var i = e.next.next; i !== e.prev; ) {
                    if (
                        E(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) &&
                        _(i.prev, i, i.next) >= 0
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
                if (_(i, a, o) >= 0) return !1;
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
                        c =
                            i.x > a.x
                                ? i.x > o.x
                                    ? i.x
                                    : o.x
                                : a.x > o.x
                                  ? a.x
                                  : o.x,
                        l =
                            i.y > a.y
                                ? i.y > o.y
                                    ? i.y
                                    : o.y
                                : a.y > o.y
                                  ? a.y
                                  : o.y,
                        f = p(u, s, t, n, r),
                        h = p(c, l, t, n, r),
                        d = e.nextZ;
                    d && d.z <= h;

                ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        E(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) &&
                        _(d.prev, d, d.next) >= 0
                    )
                        return !1;
                    d = d.nextZ;
                }
                for (d = e.prevZ; d && d.z >= f; ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        E(i.x, i.y, a.x, a.y, o.x, o.y, d.x, d.y) &&
                        _(d.prev, d, d.next) >= 0
                    )
                        return !1;
                    d = d.prevZ;
                }
                return !0;
            }
            function o(e, t, n) {
                var r = e;
                do {
                    var i = r.prev,
                        a = r.next.next;
                    !v(i, a) &&
                        T(i, r, r.next, a) &&
                        A(i, a) &&
                        A(a, i) &&
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
                    for (var c = s.next.next; c !== s.prev; ) {
                        if (s.i !== c.i && y(s, c)) {
                            var l = S(s, c);
                            return (
                                (s = n(s, s.next)),
                                (l = n(l, l.next)),
                                r(s, t, i, a, o, u),
                                void r(l, t, i, a, o, u)
                            );
                        }
                        c = c.next;
                    }
                    s = s.next;
                } while (s !== e);
            }
            function s(e, r, i, a) {
                var o,
                    u,
                    s,
                    f,
                    h,
                    d = [];
                for (o = 0, u = r.length; o < u; o++)
                    (s = r[o] * a),
                        (f = o < u - 1 ? r[o + 1] * a : e.length),
                        (h = t(e, s, f, a, !1)),
                        h === h.next && (h.steiner = !0),
                        d.push(m(h));
                for (d.sort(c), o = 0; o < d.length; o++)
                    l(d[o], i), (i = n(i, i.next));
                return i;
            }
            function c(e, t) {
                return e.x - t.x;
            }
            function l(e, t) {
                if ((t = f(e, t))) {
                    var r = S(t, e);
                    n(r, r.next);
                }
            }
            function f(e, t) {
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
                    c = n,
                    l = n.x,
                    f = n.y,
                    h = 1 / 0;
                for (r = n.next; r !== c; )
                    i >= r.x &&
                        r.x >= l &&
                        E(a < f ? i : o, a, l, f, a < f ? o : i, a, r.x, r.y) &&
                        ((s = Math.abs(a - r.y) / (i - r.x)) < h ||
                            (s === h && r.x > n.x)) &&
                        A(r, e) &&
                        ((n = r), (h = s)),
                        (r = r.next);
                return n;
            }
            function h(e, t, n, r) {
                var i = e;
                do {
                    null === i.z && (i.z = p(i.x, i.y, t, n, r)),
                        (i.prevZ = i.prev),
                        (i.nextZ = i.next),
                        (i = i.next);
                } while (i !== e);
                (i.prevZ.nextZ = null), (i.prevZ = null), d(i);
            }
            function d(e) {
                var t,
                    n,
                    r,
                    i,
                    a,
                    o,
                    u,
                    s,
                    c = 1;
                do {
                    for (n = e, e = null, a = null, o = 0; n; ) {
                        for (
                            o++, r = n, u = 0, t = 0;
                            t < c && (u++, (r = r.nextZ));
                            t++
                        );
                        for (s = c; u > 0 || (s > 0 && r); )
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
                    (a.nextZ = null), (c *= 2);
                } while (o > 1);
                return e;
            }
            function p(e, t, n, r, i) {
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
            function m(e) {
                var t = e,
                    n = e;
                do {
                    t.x < n.x && (n = t), (t = t.next);
                } while (t !== e);
                return n;
            }
            function E(e, t, n, r, i, a, o, u) {
                return (
                    (i - o) * (t - u) - (e - o) * (a - u) >= 0 &&
                    (e - o) * (r - u) - (n - o) * (t - u) >= 0 &&
                    (n - o) * (a - u) - (i - o) * (r - u) >= 0
                );
            }
            function y(e, t) {
                return (
                    e.next.i !== t.i &&
                    e.prev.i !== t.i &&
                    !R(e, t) &&
                    A(e, t) &&
                    A(t, e) &&
                    g(e, t)
                );
            }
            function _(e, t, n) {
                return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
            }
            function v(e, t) {
                return e.x === t.x && e.y === t.y;
            }
            function T(e, t, n, r) {
                return (
                    !!((v(e, t) && v(n, r)) || (v(e, r) && v(n, t))) ||
                    (_(e, t, n) > 0 != _(e, t, r) > 0 &&
                        _(n, r, e) > 0 != _(n, r, t) > 0)
                );
            }
            function R(e, t) {
                var n = e;
                do {
                    if (
                        n.i !== e.i &&
                        n.next.i !== e.i &&
                        n.i !== t.i &&
                        n.next.i !== t.i &&
                        T(n, n.next, e, t)
                    )
                        return !0;
                    n = n.next;
                } while (n !== e);
                return !1;
            }
            function A(e, t) {
                return _(e.prev, e, e.next) < 0
                    ? _(e, t, e.next) >= 0 && _(e, e.prev, t) >= 0
                    : _(e, t, e.prev) < 0 || _(e, e.next, t) < 0;
            }
            function g(e, t) {
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
            function S(e, t) {
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
            function N(e, t, n, r) {
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
            function w(e, t, n, r) {
                for (var i = 0, a = t, o = n - r; a < n; a += r)
                    (i += (e[o] - e[a]) * (e[a + 1] + e[o + 1])), (o = a);
                return i;
            }
            return (
                (e.deviation = function (e, t, n, r) {
                    var i = t && t.length,
                        a = i ? t[0] * n : e.length,
                        o = Math.abs(w(e, 0, a, n));
                    if (i)
                        for (var u = 0, s = t.length; u < s; u++) {
                            var c = t[u] * n,
                                l = u < s - 1 ? t[u + 1] * n : e.length;
                            o -= Math.abs(w(e, c, l, n));
                        }
                    var f = 0;
                    for (u = 0; u < r.length; u += 3) {
                        var h = r[u] * n,
                            d = r[u + 1] * n,
                            p = r[u + 2] * n;
                        f += Math.abs(
                            (e[h] - e[p]) * (e[d + 1] - e[h + 1]) -
                                (e[h] - e[d]) * (e[p + 1] - e[h + 1]),
                        );
                    }
                    return 0 === o && 0 === f ? 0 : Math.abs((f - o) / o);
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
            function (e, t, n, r, i, a, o, u, s, c, l, f, h) {
                'use strict';
                var d = new n(),
                    p = new n(),
                    m = {};
                (m.computeArea2D = function (e) {
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
                    (m.computeWindingOrder2D = function (e) {
                        return m.computeArea2D(e) > 0
                            ? h.COUNTER_CLOCKWISE
                            : h.CLOCKWISE;
                    }),
                    (m.triangulate = function (n, r) {
                        var i = t.packArray(n);
                        return e(i, r, 2);
                    });
                var E = new n(),
                    y = new n(),
                    _ = new n(),
                    v = new n(),
                    T = new n(),
                    R = new n(),
                    A = new n();
                return (
                    (m.computeSubdivision = function (e, t, r, u) {
                        u = a(u, l.RADIANS_PER_DEGREE);
                        var h,
                            d = r.slice(0),
                            p = t.length,
                            m = new Array(3 * p),
                            g = 0;
                        for (h = 0; h < p; h++) {
                            var S = t[h];
                            (m[g++] = S.x), (m[g++] = S.y), (m[g++] = S.z);
                        }
                        for (
                            var N = [],
                                O = {},
                                x = e.maximumRadius,
                                w = l.chordLength(u, x),
                                I = w * w;
                            d.length > 0;

                        ) {
                            var M,
                                C,
                                P = d.pop(),
                                D = d.pop(),
                                L = d.pop(),
                                b = n.fromArray(m, 3 * L, E),
                                U = n.fromArray(m, 3 * D, y),
                                F = n.fromArray(m, 3 * P, _),
                                B = n.multiplyByScalar(n.normalize(b, v), x, v),
                                z = n.multiplyByScalar(n.normalize(U, T), x, T),
                                G = n.multiplyByScalar(n.normalize(F, R), x, R),
                                q = n.magnitudeSquared(n.subtract(B, z, A)),
                                V = n.magnitudeSquared(n.subtract(z, G, A)),
                                W = n.magnitudeSquared(n.subtract(G, B, A)),
                                H = Math.max(q, V, W);
                            H > I
                                ? q === H
                                    ? ((M =
                                          Math.min(L, D) +
                                          ' ' +
                                          Math.max(L, D)),
                                      (h = O[M]),
                                      o(h) ||
                                          ((C = n.add(b, U, A)),
                                          n.multiplyByScalar(C, 0.5, C),
                                          m.push(C.x, C.y, C.z),
                                          (h = m.length / 3 - 1),
                                          (O[M] = h)),
                                      d.push(L, h, P),
                                      d.push(h, D, P))
                                    : V === H
                                      ? ((M =
                                            Math.min(D, P) +
                                            ' ' +
                                            Math.max(D, P)),
                                        (h = O[M]),
                                        o(h) ||
                                            ((C = n.add(U, F, A)),
                                            n.multiplyByScalar(C, 0.5, C),
                                            m.push(C.x, C.y, C.z),
                                            (h = m.length / 3 - 1),
                                            (O[M] = h)),
                                        d.push(D, h, L),
                                        d.push(h, P, L))
                                      : W === H &&
                                        ((M =
                                            Math.min(P, L) +
                                            ' ' +
                                            Math.max(P, L)),
                                        (h = O[M]),
                                        o(h) ||
                                            ((C = n.add(F, b, A)),
                                            n.multiplyByScalar(C, 0.5, C),
                                            m.push(C.x, C.y, C.z),
                                            (h = m.length / 3 - 1),
                                            (O[M] = h)),
                                        d.push(P, h, D),
                                        d.push(h, L, D))
                                : (N.push(L), N.push(D), N.push(P));
                        }
                        return new s({
                            attributes: {
                                position: new c({
                                    componentDatatype: i.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: m,
                                }),
                            },
                            indices: N,
                            primitiveType: f.TRIANGLES,
                        });
                    }),
                    (m.scaleToGeodeticHeight = function (e, t, r, i) {
                        r = a(r, u.WGS84);
                        var s = d,
                            c = p;
                        if (((t = a(t, 0)), (i = a(i, !0)), o(e)))
                            for (var l = e.length, f = 0; f < l; f += 3)
                                n.fromArray(e, f, c),
                                    i && (c = r.scaleToGeodeticSurface(c, c)),
                                    0 !== t &&
                                        ((s = r.geodeticSurfaceNormal(c, s)),
                                        n.multiplyByScalar(s, t, s),
                                        n.add(c, s, c)),
                                    (e[f] = c.x),
                                    (e[f + 1] = c.y),
                                    (e[f + 2] = c.z);
                        return e;
                    }),
                    m
                );
            },
        ),
        define('Core/Queue', ['./defineProperties'], function (e) {
            'use strict';
            function t() {
                (this._array = []), (this._offset = 0), (this._length = 0);
            }
            return (
                e(t.prototype, {
                    length: {
                        get: function () {
                            return this._length;
                        },
                    },
                }),
                (t.prototype.enqueue = function (e) {
                    this._array.push(e), this._length++;
                }),
                (t.prototype.dequeue = function () {
                    if (0 !== this._length) {
                        var e = this._array,
                            t = this._offset,
                            n = e[t];
                        return (
                            (e[t] = void 0),
                            t++,
                            t > 10 &&
                                2 * t > e.length &&
                                ((this._array = e.slice(t)), (t = 0)),
                            (this._offset = t),
                            this._length--,
                            n
                        );
                    }
                }),
                (t.prototype.peek = function () {
                    if (0 !== this._length) return this._array[this._offset];
                }),
                (t.prototype.contains = function (e) {
                    return -1 !== this._array.indexOf(e);
                }),
                (t.prototype.clear = function () {
                    this._array.length = this._offset = this._length = 0;
                }),
                (t.prototype.sort = function (e) {
                    this._offset > 0 &&
                        ((this._array = this._array.slice(this._offset)),
                        (this._offset = 0)),
                        this._array.sort(e);
                }),
                t
            );
        }),
        define(
            'Core/PolygonGeometryLibrary',
            [
                './arrayRemoveDuplicates',
                './Cartesian3',
                './ComponentDatatype',
                './defaultValue',
                './defined',
                './Ellipsoid',
                './Geometry',
                './GeometryAttribute',
                './GeometryAttributes',
                './GeometryPipeline',
                './IndexDatatype',
                './Math',
                './PolygonPipeline',
                './PrimitiveType',
                './Queue',
                './WindingOrder',
            ],
            function (e, t, n, r, i, a, o, u, s, c, l, f, h, d, p, m) {
                'use strict';
                function E(e, n, r, i) {
                    return (
                        t.subtract(n, e, _),
                        t.multiplyByScalar(_, r / i, _),
                        t.add(e, _, _),
                        [_.x, _.y, _.z]
                    );
                }
                var y = {};
                (y.computeHierarchyPackedLength = function (e) {
                    for (var n = 0, r = [e]; r.length > 0; ) {
                        var a = r.pop();
                        if (i(a)) {
                            n += 2;
                            var o = a.positions,
                                u = a.holes;
                            if (
                                (i(o) && (n += o.length * t.packedLength), i(u))
                            )
                                for (var s = u.length, c = 0; c < s; ++c)
                                    r.push(u[c]);
                        }
                    }
                    return n;
                }),
                    (y.packPolygonHierarchy = function (e, n, r) {
                        for (var a = [e]; a.length > 0; ) {
                            var o = a.pop();
                            if (i(o)) {
                                var u = o.positions,
                                    s = o.holes;
                                if (
                                    ((n[r++] = i(u) ? u.length : 0),
                                    (n[r++] = i(s) ? s.length : 0),
                                    i(u))
                                )
                                    for (
                                        var c = u.length, l = 0;
                                        l < c;
                                        ++l, r += 3
                                    )
                                        t.pack(u[l], n, r);
                                if (i(s))
                                    for (var f = s.length, h = 0; h < f; ++h)
                                        a.push(s[h]);
                            }
                        }
                        return r;
                    }),
                    (y.unpackPolygonHierarchy = function (e, n) {
                        for (
                            var r = e[n++],
                                i = e[n++],
                                a = new Array(r),
                                o = i > 0 ? new Array(i) : void 0,
                                u = 0;
                            u < r;
                            ++u, n += t.packedLength
                        )
                            a[u] = t.unpack(e, n);
                        for (var s = 0; s < i; ++s)
                            (o[s] = y.unpackPolygonHierarchy(e, n)),
                                (n = o[s].startingIndex),
                                delete o[s].startingIndex;
                        return { positions: a, holes: o, startingIndex: n };
                    });
                var _ = new t();
                (y.subdivideLineCount = function (e, n, r) {
                    var i = t.distance(e, n),
                        a = i / r,
                        o = Math.max(0, Math.ceil(Math.log(a) / Math.log(2)));
                    return Math.pow(2, o);
                }),
                    (y.subdivideLine = function (e, n, r, a) {
                        var o = y.subdivideLineCount(e, n, r),
                            u = t.distance(e, n),
                            s = u / o;
                        i(a) || (a = []);
                        var c = a;
                        c.length = 3 * o;
                        for (var l = 0, f = 0; f < o; f++) {
                            var h = E(e, n, f * s, u);
                            (c[l++] = h[0]), (c[l++] = h[1]), (c[l++] = h[2]);
                        }
                        return c;
                    });
                var v = new t(),
                    T = new t(),
                    R = new t(),
                    A = new t();
                (y.scaleToGeodeticHeightExtruded = function (e, n, o, u, s) {
                    u = r(u, a.WGS84);
                    var c = v,
                        l = T,
                        f = R,
                        h = A;
                    if (i(e) && i(e.attributes) && i(e.attributes.position))
                        for (
                            var d = e.attributes.position.values,
                                p = d.length / 2,
                                m = 0;
                            m < p;
                            m += 3
                        )
                            t.fromArray(d, m, f),
                                u.geodeticSurfaceNormal(f, c),
                                (h = u.scaleToGeodeticSurface(f, h)),
                                (l = t.multiplyByScalar(c, o, l)),
                                (l = t.add(h, l, l)),
                                (d[m + p] = l.x),
                                (d[m + 1 + p] = l.y),
                                (d[m + 2 + p] = l.z),
                                s && (h = t.clone(f, h)),
                                (l = t.multiplyByScalar(c, n, l)),
                                (l = t.add(h, l, l)),
                                (d[m] = l.x),
                                (d[m + 1] = l.y),
                                (d[m + 2] = l.z);
                    return e;
                }),
                    (y.polygonsFromHierarchy = function (n, r, a, o) {
                        var u = [],
                            s = [],
                            c = new p();
                        for (c.enqueue(n); 0 !== c.length; ) {
                            var l = c.dequeue(),
                                f = l.positions,
                                d = l.holes;
                            if (
                                ((f = e(f, t.equalsEpsilon, !0)),
                                !(f.length < 3))
                            ) {
                                var E = a.projectPointsOntoPlane(f),
                                    y = [],
                                    _ = h.computeWindingOrder2D(E);
                                _ === m.CLOCKWISE &&
                                    (E.reverse(), (f = f.slice().reverse()));
                                var v,
                                    T,
                                    R = f.slice(),
                                    A = i(d) ? d.length : 0,
                                    g = [];
                                for (v = 0; v < A; v++) {
                                    var S = d[v],
                                        N = e(S.positions, t.equalsEpsilon, !0);
                                    if (!(N.length < 3)) {
                                        var O = a.projectPointsOntoPlane(N);
                                        (_ = h.computeWindingOrder2D(O)),
                                            _ === m.CLOCKWISE &&
                                                (O.reverse(),
                                                (N = N.slice().reverse())),
                                            g.push(N),
                                            y.push(R.length),
                                            (R = R.concat(N)),
                                            (E = E.concat(O));
                                        var x = 0;
                                        for (
                                            i(S.holes) && (x = S.holes.length),
                                                T = 0;
                                            T < x;
                                            T++
                                        )
                                            c.enqueue(S.holes[T]);
                                    }
                                }
                                if (!r) {
                                    for (v = 0; v < f.length; v++)
                                        o.scaleToGeodeticSurface(f[v], f[v]);
                                    for (v = 0; v < g.length; v++) {
                                        var w = g[v];
                                        for (T = 0; T < w.length; ++T)
                                            o.scaleToGeodeticSurface(
                                                w[T],
                                                w[T],
                                            );
                                    }
                                }
                                u.push({ outerRing: f, holes: g }),
                                    s.push({
                                        positions: R,
                                        positions2D: E,
                                        holes: y,
                                    });
                            }
                        }
                        return { hierarchy: u, polygons: s };
                    }),
                    (y.createGeometryFromPositions = function (e, t, r, i, a) {
                        var s = h.triangulate(t.positions2D, t.holes);
                        s.length < 3 && (s = [0, 1, 2]);
                        var l = t.positions;
                        if (i) {
                            for (
                                var f = l.length,
                                    p = new Array(3 * f),
                                    m = 0,
                                    E = 0;
                                E < f;
                                E++
                            ) {
                                var y = l[E];
                                (p[m++] = y.x), (p[m++] = y.y), (p[m++] = y.z);
                            }
                            var _ = new o({
                                attributes: {
                                    position: new u({
                                        componentDatatype: n.DOUBLE,
                                        componentsPerAttribute: 3,
                                        values: p,
                                    }),
                                },
                                indices: s,
                                primitiveType: d.TRIANGLES,
                            });
                            return a.normal ? c.computeNormal(_) : _;
                        }
                        return h.computeSubdivision(e, l, s, r);
                    });
                var g = [],
                    S = new t(),
                    N = new t();
                return (
                    (y.computeWallGeometry = function (e, r, i, a) {
                        var c,
                            h,
                            p,
                            m,
                            E,
                            _ = e.length,
                            v = 0;
                        if (a)
                            for (
                                h = 3 * _ * 2, c = new Array(2 * h), p = 0;
                                p < _;
                                p++
                            )
                                (m = e[p]),
                                    (E = e[(p + 1) % _]),
                                    (c[v] = c[v + h] = m.x),
                                    ++v,
                                    (c[v] = c[v + h] = m.y),
                                    ++v,
                                    (c[v] = c[v + h] = m.z),
                                    ++v,
                                    (c[v] = c[v + h] = E.x),
                                    ++v,
                                    (c[v] = c[v + h] = E.y),
                                    ++v,
                                    (c[v] = c[v + h] = E.z),
                                    ++v;
                        else {
                            var T = f.chordLength(i, r.maximumRadius),
                                R = 0;
                            for (p = 0; p < _; p++)
                                R += y.subdivideLineCount(
                                    e[p],
                                    e[(p + 1) % _],
                                    T,
                                );
                            for (
                                h = 3 * (R + _), c = new Array(2 * h), p = 0;
                                p < _;
                                p++
                            ) {
                                (m = e[p]), (E = e[(p + 1) % _]);
                                for (
                                    var A = y.subdivideLine(m, E, T, g),
                                        O = A.length,
                                        x = 0;
                                    x < O;
                                    ++x, ++v
                                )
                                    (c[v] = A[x]), (c[v + h] = A[x]);
                                (c[v] = E.x),
                                    (c[v + h] = E.x),
                                    ++v,
                                    (c[v] = E.y),
                                    (c[v + h] = E.y),
                                    ++v,
                                    (c[v] = E.z),
                                    (c[v + h] = E.z),
                                    ++v;
                            }
                        }
                        _ = c.length;
                        var w = l.createTypedArray(_ / 3, _ - 6 * e.length),
                            I = 0;
                        for (_ /= 6, p = 0; p < _; p++) {
                            var M = p,
                                C = M + 1,
                                P = M + _,
                                D = P + 1;
                            (m = t.fromArray(c, 3 * M, S)),
                                (E = t.fromArray(c, 3 * C, N)),
                                t.equalsEpsilon(m, E, f.EPSILON14) ||
                                    ((w[I++] = M),
                                    (w[I++] = P),
                                    (w[I++] = C),
                                    (w[I++] = C),
                                    (w[I++] = P),
                                    (w[I++] = D));
                        }
                        return new o({
                            attributes: new s({
                                position: new u({
                                    componentDatatype: n.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: c,
                                }),
                            }),
                            indices: w,
                            primitiveType: d.TRIANGLES,
                        });
                    }),
                    y
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
                function i(t) {
                    (t = e(t, e.EMPTY_OBJECT)),
                        (this.position = e(t.position, !1)),
                        (this.normal = e(t.normal, !1)),
                        (this.st = e(t.st, !1)),
                        (this.bitangent = e(t.bitangent, !1)),
                        (this.tangent = e(t.tangent, !1)),
                        (this.color = e(t.color, !1));
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
                    (i.pack = function (t, n, r) {
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
                    (i.unpack = function (n, r, a) {
                        return (
                            (r = e(r, 0)),
                            t(a) || (a = new i()),
                            (a.position = 1 === n[r++]),
                            (a.normal = 1 === n[r++]),
                            (a.st = 1 === n[r++]),
                            (a.tangent = 1 === n[r++]),
                            (a.bitangent = 1 === n[r++]),
                            (a.color = 1 === n[r]),
                            a
                        );
                    }),
                    (i.clone = function (e, n) {
                        if (t(e))
                            return (
                                t(n) || (n = new i()),
                                (n.position = e.position),
                                (n.normal = e.normal),
                                (n.st = e.st),
                                (n.tangent = e.tangent),
                                (n.bitangent = e.bitangent),
                                (n.color = e.color),
                                n
                            );
                    }),
                    i
                );
            },
        ),
        define(
            'Core/PolygonGeometry',
            [
                './BoundingRectangle',
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
                './EllipsoidTangentPlane',
                './Geometry',
                './GeometryAttribute',
                './GeometryInstance',
                './GeometryPipeline',
                './IndexDatatype',
                './Math',
                './Matrix3',
                './PolygonGeometryLibrary',
                './PolygonPipeline',
                './Quaternion',
                './Rectangle',
                './VertexFormat',
                './WindingOrder',
            ],
            function (
                e,
                t,
                n,
                r,
                i,
                a,
                o,
                u,
                s,
                c,
                l,
                f,
                h,
                d,
                p,
                m,
                E,
                y,
                _,
                v,
                T,
                R,
                A,
                g,
                S,
                N,
            ) {
                'use strict';
                function O(e, t, n, i) {
                    for (
                        var a = A.fromAxisAngle(e._plane.normal, n, D),
                            o = v.fromQuaternion(a, L),
                            u = Number.POSITIVE_INFINITY,
                            c = Number.NEGATIVE_INFINITY,
                            l = Number.POSITIVE_INFINITY,
                            f = Number.NEGATIVE_INFINITY,
                            h = t.length,
                            d = 0;
                        d < h;
                        ++d
                    ) {
                        var p = r.clone(t[d], P);
                        v.multiplyByVector(o, p, p);
                        var m = e.projectPointOntoPlane(p, C);
                        s(m) &&
                            ((u = Math.min(u, m.x)),
                            (c = Math.max(c, m.x)),
                            (l = Math.min(l, m.y)),
                            (f = Math.max(f, m.y)));
                    }
                    return (
                        (i.x = u),
                        (i.y = l),
                        (i.width = c - u),
                        (i.height = f - l),
                        i
                    );
                }
                function x(e, t, n, r) {
                    var i = r.cartesianToCartographic(e, b),
                        a = i.height,
                        o = r.cartesianToCartographic(t, U);
                    (o.height = a), r.cartographicToCartesian(o, t);
                    var u = r.cartesianToCartographic(n, U);
                    (u.height = a - 100), r.cartographicToCartesian(u, n);
                }
                function w(e) {
                    var t = e.vertexFormat,
                        i = e.geometry,
                        a = e.shadowVolume;
                    if (t.st || t.normal || t.tangent || t.bitangent || a) {
                        var u = e.boundingRectangle,
                            s = e.tangentPlane,
                            c = e.ellipsoid,
                            l = e.stRotation,
                            f = e.wall,
                            h = e.top || f,
                            d = e.bottom || f,
                            m = e.perPositionHeight,
                            E = Y;
                        (E.x = u.x), (E.y = u.y);
                        var y,
                            T = i.attributes.position.values,
                            R = T.length,
                            g = t.st ? new Float32Array((R / 3) * 2) : void 0;
                        t.normal &&
                            (y =
                                m && h && !f
                                    ? i.attributes.normal.values
                                    : new Float32Array(R));
                        var S = t.tangent ? new Float32Array(R) : void 0,
                            N = t.bitangent ? new Float32Array(R) : void 0,
                            O = a ? new Float32Array(R) : void 0,
                            w = 0,
                            I = 0,
                            M = z,
                            C = G,
                            P = q,
                            D = !0,
                            L = A.fromAxisAngle(s._plane.normal, l, K),
                            b = v.fromQuaternion(L, J),
                            U = 0,
                            F = 0;
                        h && d && ((U = R / 2), (F = R / 3), (R /= 2));
                        for (var Q = 0; Q < R; Q += 3) {
                            var $ = r.fromArray(T, Q, j);
                            if (t.st) {
                                var ee = v.multiplyByVector(b, $, B);
                                ee = c.scaleToGeodeticSurface(ee, ee);
                                var te = s.projectPointOntoPlane(ee, Z);
                                n.subtract(te, E, te);
                                var ne = _.clamp(te.x / u.width, 0, 1),
                                    re = _.clamp(te.y / u.height, 0, 1);
                                d && ((g[w + F] = ne), (g[w + 1 + F] = re)),
                                    h && ((g[w] = ne), (g[w + 1] = re)),
                                    (w += 2);
                            }
                            if (t.normal || t.tangent || t.bitangent || a) {
                                var ie = I + 1,
                                    ae = I + 2;
                                if (f) {
                                    if (Q + 3 < R) {
                                        var oe = r.fromArray(T, Q + 3, V);
                                        if (D) {
                                            var ue = r.fromArray(T, Q + R, W);
                                            m && x($, oe, ue, c),
                                                r.subtract(oe, $, oe),
                                                r.subtract(ue, $, ue),
                                                (M = r.normalize(
                                                    r.cross(ue, oe, M),
                                                    M,
                                                )),
                                                (D = !1);
                                        }
                                        r.equalsEpsilon(oe, $, _.EPSILON10) &&
                                            (D = !0);
                                    }
                                    (t.tangent || t.bitangent) &&
                                        ((P = c.geodeticSurfaceNormal($, P)),
                                        t.tangent &&
                                            (C = r.normalize(
                                                r.cross(P, M, C),
                                                C,
                                            )));
                                } else
                                    (M = c.geodeticSurfaceNormal($, M)),
                                        (t.tangent || t.bitangent) &&
                                            (m &&
                                                ((H = r.fromArray(y, I, H)),
                                                (X = r.cross(r.UNIT_Z, H, X)),
                                                (X = r.normalize(
                                                    v.multiplyByVector(b, X, X),
                                                    X,
                                                )),
                                                t.bitangent &&
                                                    (k = r.normalize(
                                                        r.cross(H, X, k),
                                                        k,
                                                    ))),
                                            (C = r.cross(r.UNIT_Z, M, C)),
                                            (C = r.normalize(
                                                v.multiplyByVector(b, C, C),
                                                C,
                                            )),
                                            t.bitangent &&
                                                (P = r.normalize(
                                                    r.cross(M, C, P),
                                                    P,
                                                )));
                                t.normal &&
                                    (e.wall
                                        ? ((y[I + U] = M.x),
                                          (y[ie + U] = M.y),
                                          (y[ae + U] = M.z))
                                        : d &&
                                          ((y[I + U] = -M.x),
                                          (y[ie + U] = -M.y),
                                          (y[ae + U] = -M.z)),
                                    ((h && !m) || f) &&
                                        ((y[I] = M.x),
                                        (y[ie] = M.y),
                                        (y[ae] = M.z))),
                                    a &&
                                        (f &&
                                            (M = c.geodeticSurfaceNormal($, M)),
                                        (O[I + U] = -M.x),
                                        (O[ie + U] = -M.y),
                                        (O[ae + U] = -M.z)),
                                    t.tangent &&
                                        (e.wall
                                            ? ((S[I + U] = C.x),
                                              (S[ie + U] = C.y),
                                              (S[ae + U] = C.z))
                                            : d &&
                                              ((S[I + U] = -C.x),
                                              (S[ie + U] = -C.y),
                                              (S[ae + U] = -C.z)),
                                        h &&
                                            (m
                                                ? ((S[I] = X.x),
                                                  (S[ie] = X.y),
                                                  (S[ae] = X.z))
                                                : ((S[I] = C.x),
                                                  (S[ie] = C.y),
                                                  (S[ae] = C.z)))),
                                    t.bitangent &&
                                        (d &&
                                            ((N[I + U] = P.x),
                                            (N[ie + U] = P.y),
                                            (N[ae + U] = P.z)),
                                        h &&
                                            (m
                                                ? ((N[I] = k.x),
                                                  (N[ie] = k.y),
                                                  (N[ae] = k.z))
                                                : ((N[I] = P.x),
                                                  (N[ie] = P.y),
                                                  (N[ae] = P.z)))),
                                    (I += 3);
                            }
                        }
                        t.st &&
                            (i.attributes.st = new p({
                                componentDatatype: o.FLOAT,
                                componentsPerAttribute: 2,
                                values: g,
                            })),
                            t.normal &&
                                (i.attributes.normal = new p({
                                    componentDatatype: o.FLOAT,
                                    componentsPerAttribute: 3,
                                    values: y,
                                })),
                            t.tangent &&
                                (i.attributes.tangent = new p({
                                    componentDatatype: o.FLOAT,
                                    componentsPerAttribute: 3,
                                    values: S,
                                })),
                            t.bitangent &&
                                (i.attributes.bitangent = new p({
                                    componentDatatype: o.FLOAT,
                                    componentsPerAttribute: 3,
                                    values: N,
                                })),
                            a &&
                                (i.attributes.extrudeDirection = new p({
                                    componentDatatype: o.FLOAT,
                                    componentsPerAttribute: 3,
                                    values: O,
                                }));
                    }
                    return i;
                }
                function I(e, t, n, r, i, a, o, u) {
                    var s,
                        c = { walls: [] };
                    if (a || o) {
                        var l,
                            f,
                            d = T.createGeometryFromPositions(e, t, n, i, u),
                            p = d.attributes.position.values,
                            E = d.indices;
                        if (a && o) {
                            var _ = p.concat(p);
                            (l = _.length / 3),
                                (f = y.createTypedArray(l, 2 * E.length)),
                                f.set(E);
                            var v = E.length,
                                A = l / 2;
                            for (s = 0; s < v; s += 3) {
                                var g = f[s] + A,
                                    S = f[s + 1] + A,
                                    O = f[s + 2] + A;
                                (f[s + v] = O),
                                    (f[s + 1 + v] = S),
                                    (f[s + 2 + v] = g);
                            }
                            if (((d.attributes.position.values = _), i)) {
                                var x = d.attributes.normal.values;
                                (d.attributes.normal.values = new Float32Array(
                                    _.length,
                                )),
                                    d.attributes.normal.values.set(x);
                            }
                            d.indices = f;
                        } else if (o) {
                            for (
                                l = p.length / 3,
                                    f = y.createTypedArray(l, E.length),
                                    s = 0;
                                s < E.length;
                                s += 3
                            )
                                (f[s] = E[s + 2]),
                                    (f[s + 1] = E[s + 1]),
                                    (f[s + 2] = E[s]);
                            d.indices = f;
                        }
                        c.topAndBottom = new m({ geometry: d });
                    }
                    var w = r.outerRing,
                        I = h.fromPoints(w, e),
                        M = I.projectPointsOntoPlane(w, Q),
                        C = R.computeWindingOrder2D(M);
                    C === N.CLOCKWISE && (w = w.slice().reverse());
                    var P = T.computeWallGeometry(w, e, n, i);
                    c.walls.push(new m({ geometry: P }));
                    var D = r.holes;
                    for (s = 0; s < D.length; s++) {
                        var L = D[s];
                        (I = h.fromPoints(L, e)),
                            (M = I.projectPointsOntoPlane(L, Q)),
                            (C = R.computeWindingOrder2D(M)),
                            C === N.COUNTER_CLOCKWISE &&
                                (L = L.slice().reverse()),
                            (P = T.computeWallGeometry(L, e, n)),
                            c.walls.push(new m({ geometry: P }));
                    }
                    return c;
                }
                function M(e) {
                    var t = e.polygonHierarchy,
                        n = u(e.vertexFormat, S.DEFAULT),
                        r = u(e.ellipsoid, f.WGS84),
                        i = u(e.granularity, _.RADIANS_PER_DEGREE),
                        a = u(e.stRotation, 0),
                        o = u(e.height, 0),
                        c = u(e.perPositionHeight, !1),
                        l = e.extrudedHeight,
                        h = s(l);
                    if (!c && h)
                        if (_.equalsEpsilon(o, l, _.EPSILON10))
                            (l = void 0), (h = !1);
                        else {
                            var d = l;
                            (l = Math.min(d, o)), (o = Math.max(d, o));
                        }
                    (this._vertexFormat = S.clone(n)),
                        (this._ellipsoid = f.clone(r)),
                        (this._granularity = i),
                        (this._stRotation = a),
                        (this._height = o),
                        (this._extrudedHeight = u(l, 0)),
                        (this._extrude = h),
                        (this._closeTop = u(e.closeTop, !0)),
                        (this._closeBottom = u(e.closeBottom, !0)),
                        (this._polygonHierarchy = t),
                        (this._perPositionHeight = c),
                        (this._shadowVolume = u(e.shadowVolume, !1)),
                        (this._workerName = 'createPolygonGeometry');
                    var p = t.positions;
                    !s(p) || p.length < 3
                        ? (this._rectangle = new g())
                        : (this._rectangle = g.fromCartesianArray(p, r)),
                        (this.packedLength =
                            T.computeHierarchyPackedLength(t) +
                            f.packedLength +
                            S.packedLength +
                            g.packedLength +
                            10);
                }
                var C = new n(),
                    P = new r(),
                    D = new A(),
                    L = new v(),
                    b = new i(),
                    U = new i(),
                    F = new e(),
                    B = new r(),
                    z = new r(),
                    G = new r(),
                    q = new r(),
                    V = new r(),
                    W = new r(),
                    H = new r(),
                    X = new r(),
                    k = new r(),
                    Y = new n(),
                    Z = new n(),
                    j = new r(),
                    K = new A(),
                    J = new v(),
                    Q = [];
                (M.fromPositions = function (e) {
                    return (
                        (e = u(e, u.EMPTY_OBJECT)),
                        new M({
                            polygonHierarchy: { positions: e.positions },
                            height: e.height,
                            extrudedHeight: e.extrudedHeight,
                            vertexFormat: e.vertexFormat,
                            stRotation: e.stRotation,
                            ellipsoid: e.ellipsoid,
                            granularity: e.granularity,
                            perPositionHeight: e.perPositionHeight,
                            closeTop: e.closeTop,
                            closeBottom: e.closeBottom,
                        })
                    );
                }),
                    (M.pack = function (e, t, n) {
                        return (
                            (n = u(n, 0)),
                            (n = T.packPolygonHierarchy(
                                e._polygonHierarchy,
                                t,
                                n,
                            )),
                            f.pack(e._ellipsoid, t, n),
                            (n += f.packedLength),
                            S.pack(e._vertexFormat, t, n),
                            (n += S.packedLength),
                            g.pack(e._rectangle, t, n),
                            (n += g.packedLength),
                            (t[n++] = e._height),
                            (t[n++] = e._extrudedHeight),
                            (t[n++] = e._granularity),
                            (t[n++] = e._stRotation),
                            (t[n++] = e._extrude ? 1 : 0),
                            (t[n++] = e._perPositionHeight ? 1 : 0),
                            (t[n++] = e._closeTop ? 1 : 0),
                            (t[n++] = e._closeBottom ? 1 : 0),
                            (t[n++] = e._shadowVolume ? 1 : 0),
                            (t[n] = e.packedLength),
                            t
                        );
                    });
                var $ = f.clone(f.UNIT_SPHERE),
                    ee = new S(),
                    te = new g(),
                    ne = { polygonHierarchy: {} };
                return (
                    (M.unpack = function (e, t, n) {
                        t = u(t, 0);
                        var r = T.unpackPolygonHierarchy(e, t);
                        (t = r.startingIndex), delete r.startingIndex;
                        var i = f.unpack(e, t, $);
                        t += f.packedLength;
                        var a = S.unpack(e, t, ee);
                        t += S.packedLength;
                        var o = g.unpack(e, t, te);
                        t += g.packedLength;
                        var c = e[t++],
                            l = e[t++],
                            h = e[t++],
                            d = e[t++],
                            p = 1 === e[t++],
                            m = 1 === e[t++],
                            E = 1 === e[t++],
                            y = 1 === e[t++],
                            _ = 1 === e[t++],
                            v = e[t];
                        return (
                            s(n) || (n = new M(ne)),
                            (n._polygonHierarchy = r),
                            (n._ellipsoid = f.clone(i, n._ellipsoid)),
                            (n._vertexFormat = S.clone(a, n._vertexFormat)),
                            (n._height = c),
                            (n._extrudedHeight = l),
                            (n._granularity = h),
                            (n._stRotation = d),
                            (n._extrude = p),
                            (n._perPositionHeight = m),
                            (n._closeTop = E),
                            (n._closeBottom = y),
                            (n._rectangle = g.clone(o)),
                            (n._shadowVolume = _),
                            (n.packedLength = v),
                            n
                        );
                    }),
                    (M.createGeometry = function (e) {
                        var n = e._vertexFormat,
                            r = e._ellipsoid,
                            i = e._granularity,
                            a = e._stRotation,
                            o = e._height,
                            u = e._extrudedHeight,
                            s = e._extrude,
                            c = e._polygonHierarchy,
                            l = e._perPositionHeight,
                            f = e._closeTop,
                            p = e._closeBottom,
                            _ = c.positions;
                        if (!(_.length < 3)) {
                            var v = h.fromPoints(_, r),
                                A = T.polygonsFromHierarchy(c, l, v, r),
                                g = A.hierarchy,
                                S = A.polygons;
                            if (0 !== g.length) {
                                _ = g[0].outerRing;
                                var N,
                                    x,
                                    M = O(v, _, a, F),
                                    C = [],
                                    P = {
                                        perPositionHeight: l,
                                        vertexFormat: n,
                                        geometry: void 0,
                                        tangentPlane: v,
                                        boundingRectangle: M,
                                        ellipsoid: r,
                                        stRotation: a,
                                        bottom: !1,
                                        top: !0,
                                        wall: !1,
                                    };
                                if (s)
                                    for (
                                        P.top = f,
                                            P.bottom = p,
                                            P.shadowVolume = e._shadowVolume,
                                            x = 0;
                                        x < S.length;
                                        x++
                                    ) {
                                        N = I(r, S[x], i, g[x], l, f, p, n);
                                        var D;
                                        f && p
                                            ? ((D = N.topAndBottom),
                                              (P.geometry =
                                                  T.scaleToGeodeticHeightExtruded(
                                                      D.geometry,
                                                      o,
                                                      u,
                                                      r,
                                                      l,
                                                  )))
                                            : f
                                              ? ((D = N.topAndBottom),
                                                (D.geometry.attributes.position.values =
                                                    R.scaleToGeodeticHeight(
                                                        D.geometry.attributes
                                                            .position.values,
                                                        o,
                                                        r,
                                                        !l,
                                                    )),
                                                (P.geometry = D.geometry))
                                              : p &&
                                                ((D = N.topAndBottom),
                                                (D.geometry.attributes.position.values =
                                                    R.scaleToGeodeticHeight(
                                                        D.geometry.attributes
                                                            .position.values,
                                                        u,
                                                        r,
                                                        !0,
                                                    )),
                                                (P.geometry = D.geometry)),
                                            (f || p) &&
                                                ((P.wall = !1),
                                                (D.geometry = w(P)),
                                                C.push(D));
                                        var L = N.walls;
                                        P.wall = !0;
                                        for (var b = 0; b < L.length; b++) {
                                            var U = L[b];
                                            (P.geometry =
                                                T.scaleToGeodeticHeightExtruded(
                                                    U.geometry,
                                                    o,
                                                    u,
                                                    r,
                                                    l,
                                                )),
                                                (U.geometry = w(P)),
                                                C.push(U);
                                        }
                                    }
                                else
                                    for (x = 0; x < S.length; x++)
                                        (N = new m({
                                            geometry:
                                                T.createGeometryFromPositions(
                                                    r,
                                                    S[x],
                                                    i,
                                                    l,
                                                    n,
                                                ),
                                        })),
                                            (N.geometry.attributes.position.values =
                                                R.scaleToGeodeticHeight(
                                                    N.geometry.attributes
                                                        .position.values,
                                                    o,
                                                    r,
                                                    !l,
                                                )),
                                            (P.geometry = N.geometry),
                                            (N.geometry = w(P)),
                                            C.push(N);
                                (N = E.combineInstances(C)[0]),
                                    (N.attributes.position.values =
                                        new Float64Array(
                                            N.attributes.position.values,
                                        )),
                                    (N.indices = y.createTypedArray(
                                        N.attributes.position.values.length / 3,
                                        N.indices,
                                    ));
                                var B = N.attributes,
                                    z = t.fromVertices(B.position.values);
                                return (
                                    n.position || delete B.position,
                                    new d({
                                        attributes: B,
                                        indices: N.indices,
                                        primitiveType: N.primitiveType,
                                        boundingSphere: z,
                                    })
                                );
                            }
                        }
                    }),
                    (M.createShadowVolume = function (e, t, n) {
                        var r = e._granularity,
                            i = e._ellipsoid,
                            a = t(r, i),
                            o = n(r, i);
                        return new M({
                            polygonHierarchy: e._polygonHierarchy,
                            ellipsoid: i,
                            stRotation: e._stRotation,
                            granularity: r,
                            perPositionHeight: !1,
                            extrudedHeight: a,
                            height: o,
                            vertexFormat: S.POSITION_ONLY,
                            shadowVolume: !0,
                        });
                    }),
                    c(M.prototype, {
                        rectangle: {
                            get: function () {
                                return this._rectangle;
                            },
                        },
                    }),
                    M
                );
            },
        ),
        define(
            'Workers/createPolygonGeometry',
            ['../Core/defined', '../Core/Ellipsoid', '../Core/PolygonGeometry'],
            function (e, t, n) {
                'use strict';
                function r(r, i) {
                    return (
                        e(i) && (r = n.unpack(r, i)),
                        (r._ellipsoid = t.clone(r._ellipsoid)),
                        n.createGeometry(r)
                    );
                }
                return r;
            },
        );
})();
