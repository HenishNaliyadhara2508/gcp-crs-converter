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
            'Core/arrayRemoveDuplicates',
            ['./Check', './defaultValue', './defined', './Math'],
            function (e, t, n, r) {
                'use strict';
                function a(e, r, a) {
                    if (n(e)) {
                        a = t(a, !1);
                        var o = e.length;
                        if (o < 2) return e;
                        var u, s, c;
                        for (
                            u = 1;
                            u < o && ((s = e[u - 1]), (c = e[u]), !r(s, c, i));
                            ++u
                        );
                        if (u === o)
                            return a && r(e[0], e[e.length - 1], i)
                                ? e.slice(1)
                                : e;
                        for (var l = e.slice(0, u); u < o; ++u)
                            (c = e[u]), r(s, c, i) || (l.push(c), (s = c));
                        return (
                            a &&
                                l.length > 1 &&
                                r(l[0], l[l.length - 1], i) &&
                                l.shift(),
                            l
                        );
                    }
                }
                var i = r.EPSILON10;
                return a;
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
                            f = r * u - a * o;
                        return (n.x = c), (n.y = l), (n.z = f), n;
                    }),
                    (o.fromDegrees = function (e, t, n, r, a) {
                        return (
                            (e = i.toRadians(e)),
                            (t = i.toRadians(t)),
                            o.fromRadians(e, t, n, r, a)
                        );
                    });
                var h = new o(),
                    d = new o(),
                    E = new o(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (o.fromRadians = function (e, r, a, i, u) {
                        a = t(a, 0);
                        var s = n(i) ? i.radiiSquared : E,
                            c = Math.cos(r);
                        (h.x = c * Math.cos(e)),
                            (h.y = c * Math.sin(e)),
                            (h.z = Math.sin(r)),
                            (h = o.normalize(h, h)),
                            o.multiplyComponents(s, h, d);
                        var l = Math.sqrt(o.dot(h, d));
                        return (
                            (d = o.divideByScalar(d, l, d)),
                            (h = o.multiplyByScalar(h, a, h)),
                            n(u) || (u = new o()),
                            o.add(d, h, u)
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
                        f = n.y,
                        h = n.z,
                        d = a.x,
                        E = a.y,
                        m = a.z,
                        p = l * l * d * d,
                        _ = f * f * E * E,
                        y = h * h * m * m,
                        T = p + _ + y,
                        R = Math.sqrt(1 / T),
                        A = e.multiplyByScalar(n, R, i);
                    if (T < s) return isFinite(R) ? e.clone(A, c) : void 0;
                    var v = u.x,
                        S = u.y,
                        g = u.z,
                        N = o;
                    (N.x = A.x * v * 2),
                        (N.y = A.y * S * 2),
                        (N.z = A.z * g * 2);
                    var O,
                        w,
                        I,
                        M,
                        x,
                        C,
                        P,
                        D,
                        U,
                        L,
                        F,
                        b = ((1 - R) * e.magnitude(n)) / (0.5 * e.magnitude(N)),
                        B = 0;
                    do {
                        (b -= B),
                            (I = 1 / (1 + b * v)),
                            (M = 1 / (1 + b * S)),
                            (x = 1 / (1 + b * g)),
                            (C = I * I),
                            (P = M * M),
                            (D = x * x),
                            (U = C * I),
                            (L = P * M),
                            (F = D * x),
                            (O = p * C + _ * P + y * D - 1),
                            (w = p * U * v + _ * L * S + y * F * g);
                        B = O / (-2 * w);
                    } while (Math.abs(O) > r.EPSILON12);
                    return t(c)
                        ? ((c.x = l * I), (c.y = f * M), (c.z = h * x), c)
                        : new e(l * I, f * M, h * x);
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
                    f = new e(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
                    h = new e(
                        1 / 40680631590769,
                        1 / 40680631590769,
                        1 / 40408299984661.445,
                    ),
                    d = i.EPSILON1;
                return (
                    (u.fromCartesian = function (t, n, a) {
                        var E = r(n) ? n.oneOverRadii : f,
                            m = r(n) ? n.oneOverRadiiSquared : h,
                            p = r(n) ? n._centerToleranceSquared : d,
                            _ = o(t, E, m, p, c);
                        if (r(_)) {
                            var y = e.multiplyComponents(_, m, s);
                            y = e.normalize(y, y);
                            var T = e.subtract(t, _, l),
                                R = Math.atan2(y.y, y.x),
                                A = Math.asin(y.z),
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
                i(f.prototype, {
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
                                : new f(r.x, r.y, r.z);
                        }
                    }),
                    (f.fromCartesian3 = function (e, t) {
                        return (
                            a(t) || (t = new f()),
                            a(e) ? (l(t, e.x, e.y, e.z), t) : t
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
                    (f.pack = function (t, n, a) {
                        return (a = r(a, 0)), e.pack(t._radii, n, a), n;
                    }),
                    (f.unpack = function (t, n, a) {
                        n = r(n, 0);
                        var i = e.unpack(t, n);
                        return f.fromCartesian3(i, a);
                    }),
                    (f.prototype.geocentricSurfaceNormal = e.normalize),
                    (f.prototype.geodeticSurfaceNormalCartographic = function (
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
                    (f.prototype.geodeticSurfaceNormal = function (t, n) {
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
                var h = new e(),
                    d = new e();
                (f.prototype.cartographicToCartesian = function (t, n) {
                    var r = h,
                        i = d;
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
                    (f.prototype.cartographicArrayToCartesianArray = function (
                        e,
                        t,
                    ) {
                        var n = e.length;
                        a(t) ? (t.length = n) : (t = new Array(n));
                        for (var r = 0; r < n; r++)
                            t[r] = this.cartographicToCartesian(e[r], t[r]);
                        return t;
                    });
                var E = new e(),
                    m = new e(),
                    p = new e();
                return (
                    (f.prototype.cartesianToCartographic = function (n, r) {
                        var i = this.scaleToGeodeticSurface(n, m);
                        if (a(i)) {
                            var o = this.geodeticSurfaceNormal(i, E),
                                u = e.subtract(n, i, p),
                                c = Math.atan2(o.y, o.x),
                                l = Math.asin(o.z),
                                f = s.sign(e.dot(u, n)) * e.magnitude(u);
                            return a(r)
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
                        a(t) ? (t.length = n) : (t = new Array(n));
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
                    (f.prototype.transformPositionToScaledSpace = function (
                        t,
                        n,
                    ) {
                        return (
                            a(n) || (n = new e()),
                            e.multiplyComponents(t, this._oneOverRadii, n)
                        );
                    }),
                    (f.prototype.transformPositionFromScaledSpace = function (
                        t,
                        n,
                    ) {
                        return (
                            a(n) || (n = new e()),
                            e.multiplyComponents(t, this._radii, n)
                        );
                    }),
                    (f.prototype.equals = function (t) {
                        return (
                            this === t ||
                            (a(t) && e.equals(this._radii, t._radii))
                        );
                    }),
                    (f.prototype.toString = function () {
                        return this._radii.toString();
                    }),
                    (f.prototype.getSurfaceNormalIntersectionWithZAxis =
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
                    f
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
                        var r = e[s.getElementIndex(m[n], E[n])];
                        t += 2 * r * r;
                    }
                    return Math.sqrt(t);
                }
                function f(e, t) {
                    for (var n = u.EPSILON15, r = 0, a = 1, i = 0; i < 3; ++i) {
                        var o = Math.abs(e[s.getElementIndex(m[i], E[i])]);
                        o > r && ((a = i), (r = o));
                    }
                    var c = 1,
                        l = 0,
                        f = E[a],
                        h = m[a];
                    if (Math.abs(e[s.getElementIndex(h, f)]) > n) {
                        var d,
                            p = e[s.getElementIndex(h, h)],
                            _ = e[s.getElementIndex(f, f)],
                            y = e[s.getElementIndex(h, f)],
                            T = (p - _) / 2 / y;
                        (d =
                            T < 0
                                ? -1 / (-T + Math.sqrt(1 + T * T))
                                : 1 / (T + Math.sqrt(1 + T * T))),
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
                            f = e.z * e.z,
                            h = e.z * e.w,
                            d = e.w * e.w,
                            E = n - u - f + d,
                            m = 2 * (a - h),
                            p = 2 * (i + l),
                            _ = 2 * (a + h),
                            y = -n + u - f + d,
                            T = 2 * (c - o),
                            R = 2 * (i - l),
                            A = 2 * (c + o),
                            v = -n - u + f + d;
                        return r(t)
                            ? ((t[0] = E),
                              (t[1] = _),
                              (t[2] = R),
                              (t[3] = m),
                              (t[4] = y),
                              (t[5] = A),
                              (t[6] = p),
                              (t[7] = T),
                              (t[8] = v),
                              t)
                            : new s(E, m, p, _, y, T, R, A, v);
                    }),
                    (s.fromHeadingPitchRoll = function (e, t) {
                        var n = Math.cos(-e.pitch),
                            a = Math.cos(-e.heading),
                            i = Math.cos(e.roll),
                            o = Math.sin(-e.pitch),
                            u = Math.sin(-e.heading),
                            c = Math.sin(e.roll),
                            l = n * a,
                            f = -i * u + c * o * a,
                            h = c * u + i * o * a,
                            d = n * u,
                            E = i * a + c * o * u,
                            m = -c * a + i * o * u,
                            p = -o,
                            _ = c * n,
                            y = i * n;
                        return r(t)
                            ? ((t[0] = l),
                              (t[1] = d),
                              (t[2] = p),
                              (t[3] = f),
                              (t[4] = E),
                              (t[5] = _),
                              (t[6] = h),
                              (t[7] = m),
                              (t[8] = y),
                              t)
                            : new s(l, f, h, d, E, m, p, _, y);
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
                            a = e[1] * t[0] + e[4] * t[1] + e[7] * t[2],
                            i = e[2] * t[0] + e[5] * t[1] + e[8] * t[2],
                            o = e[0] * t[3] + e[3] * t[4] + e[6] * t[5],
                            u = e[1] * t[3] + e[4] * t[4] + e[7] * t[5],
                            s = e[2] * t[3] + e[5] * t[4] + e[8] * t[5],
                            c = e[0] * t[6] + e[3] * t[7] + e[6] * t[8],
                            l = e[1] * t[6] + e[4] * t[7] + e[7] * t[8],
                            f = e[2] * t[6] + e[5] * t[7] + e[8] * t[8];
                        return (
                            (n[0] = r),
                            (n[1] = a),
                            (n[2] = i),
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
                var E = [1, 0, 0],
                    m = [2, 2, 1],
                    p = new s(),
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
                                h = (t.diagonal = s.clone(e, t.diagonal)),
                                d = n * c(h);
                            i < 10 && l(h) > d;

                        )
                            f(h, p),
                                s.transpose(p, _),
                                s.multiply(h, p, h),
                                s.multiply(_, h, h),
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
                            f = e[8],
                            h = s.determinant(e);
                        (t[0] = o * f - l * u),
                            (t[1] = l * a - r * f),
                            (t[2] = r * u - o * a),
                            (t[3] = c * u - i * f),
                            (t[4] = n * f - c * a),
                            (t[5] = i * a - n * u),
                            (t[6] = i * l - c * o),
                            (t[7] = c * r - n * l),
                            (t[8] = n * o - i * r);
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
                function l(e, t, n, a, i, o, u, s, c, l, f, h, d, E, m, p) {
                    (this[0] = r(e, 0)),
                        (this[1] = r(i, 0)),
                        (this[2] = r(c, 0)),
                        (this[3] = r(d, 0)),
                        (this[4] = r(t, 0)),
                        (this[5] = r(o, 0)),
                        (this[6] = r(l, 0)),
                        (this[7] = r(E, 0)),
                        (this[8] = r(n, 0)),
                        (this[9] = r(u, 0)),
                        (this[10] = r(f, 0)),
                        (this[11] = r(m, 0)),
                        (this[12] = r(a, 0)),
                        (this[13] = r(s, 0)),
                        (this[14] = r(h, 0)),
                        (this[15] = r(p, 0));
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
                            f = t.x * t.z,
                            h = t.x * t.w,
                            d = t.y * t.y,
                            E = t.y * t.z,
                            m = t.y * t.w,
                            p = t.z * t.z,
                            _ = t.z * t.w,
                            y = t.w * t.w,
                            T = s - d - p + y,
                            R = 2 * (c - _),
                            A = 2 * (f + m),
                            v = 2 * (c + _),
                            S = -s + d - p + y,
                            g = 2 * (E - h),
                            N = 2 * (f - m),
                            O = 2 * (E + h),
                            w = -s - d + p + y;
                        return (
                            (r[0] = T * i),
                            (r[1] = v * i),
                            (r[2] = N * i),
                            (r[3] = 0),
                            (r[4] = R * o),
                            (r[5] = S * o),
                            (r[6] = O * o),
                            (r[7] = 0),
                            (r[8] = A * u),
                            (r[9] = g * u),
                            (r[10] = w * u),
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
                var f = new e(),
                    h = new e(),
                    d = new e();
                (l.fromCamera = function (t, n) {
                    var r = t.position,
                        i = t.direction,
                        o = t.up;
                    e.normalize(i, f),
                        e.normalize(e.cross(f, o, h), h),
                        e.normalize(e.cross(h, f, d), d);
                    var u = h.x,
                        s = h.y,
                        c = h.z,
                        E = f.x,
                        m = f.y,
                        p = f.z,
                        _ = d.x,
                        y = d.y,
                        T = d.z,
                        R = r.x,
                        A = r.y,
                        v = r.z,
                        S = u * -R + s * -A + c * -v,
                        g = _ * -R + y * -A + T * -v,
                        N = E * R + m * A + p * v;
                    return a(n)
                        ? ((n[0] = u),
                          (n[1] = _),
                          (n[2] = -E),
                          (n[3] = 0),
                          (n[4] = s),
                          (n[5] = y),
                          (n[6] = -m),
                          (n[7] = 0),
                          (n[8] = c),
                          (n[9] = T),
                          (n[10] = -p),
                          (n[11] = 0),
                          (n[12] = S),
                          (n[13] = g),
                          (n[14] = N),
                          (n[15] = 1),
                          n)
                        : new l(
                              u,
                              s,
                              c,
                              S,
                              _,
                              y,
                              T,
                              g,
                              -E,
                              -m,
                              -p,
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
                            f = -(r + n) * s,
                            h = -(i + a) * c;
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
                        a,
                        i,
                        o,
                    ) {
                        var u = (2 * a) / (t - e),
                            s = (2 * a) / (r - n),
                            c = (t + e) / (t - e),
                            l = (r + n) / (r - n),
                            f = -(i + a) / (i - a),
                            h = (-2 * i * a) / (i - a);
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
                            f = 0.5 * (n - t),
                            h = c,
                            d = l,
                            E = f,
                            m = i + c,
                            p = o + l,
                            _ = t + f;
                        return (
                            (a[0] = h),
                            (a[1] = 0),
                            (a[2] = 0),
                            (a[3] = 0),
                            (a[4] = 0),
                            (a[5] = d),
                            (a[6] = 0),
                            (a[7] = 0),
                            (a[8] = 0),
                            (a[9] = 0),
                            (a[10] = E),
                            (a[11] = 0),
                            (a[12] = m),
                            (a[13] = p),
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
                var E = new e();
                l.getScale = function (t, n) {
                    return (
                        (n.x = e.magnitude(
                            e.fromElements(t[0], t[1], t[2], E),
                        )),
                        (n.y = e.magnitude(
                            e.fromElements(t[4], t[5], t[6], E),
                        )),
                        (n.z = e.magnitude(
                            e.fromElements(t[8], t[9], t[10], E),
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
                            a = e[1],
                            i = e[2],
                            o = e[3],
                            u = e[4],
                            s = e[5],
                            c = e[6],
                            l = e[7],
                            f = e[8],
                            h = e[9],
                            d = e[10],
                            E = e[11],
                            m = e[12],
                            p = e[13],
                            _ = e[14],
                            y = e[15],
                            T = t[0],
                            R = t[1],
                            A = t[2],
                            v = t[3],
                            S = t[4],
                            g = t[5],
                            N = t[6],
                            O = t[7],
                            w = t[8],
                            I = t[9],
                            M = t[10],
                            x = t[11],
                            C = t[12],
                            P = t[13],
                            D = t[14],
                            U = t[15],
                            L = r * T + u * R + f * A + m * v,
                            F = a * T + s * R + h * A + p * v,
                            b = i * T + c * R + d * A + _ * v,
                            B = o * T + l * R + E * A + y * v,
                            z = r * S + u * g + f * N + m * O,
                            q = a * S + s * g + h * N + p * O,
                            G = i * S + c * g + d * N + _ * O,
                            V = o * S + l * g + E * N + y * O,
                            W = r * w + u * I + f * M + m * x,
                            X = a * w + s * I + h * M + p * x,
                            H = i * w + c * I + d * M + _ * x,
                            Y = o * w + l * I + E * M + y * x,
                            k = r * C + u * P + f * D + m * U,
                            Z = a * C + s * P + h * D + p * U,
                            j = i * C + c * P + d * D + _ * U,
                            K = o * C + l * P + E * D + y * U;
                        return (
                            (n[0] = L),
                            (n[1] = F),
                            (n[2] = b),
                            (n[3] = B),
                            (n[4] = z),
                            (n[5] = q),
                            (n[6] = G),
                            (n[7] = V),
                            (n[8] = W),
                            (n[9] = X),
                            (n[10] = H),
                            (n[11] = Y),
                            (n[12] = k),
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
                            a = e[1],
                            i = e[2],
                            o = e[4],
                            u = e[5],
                            s = e[6],
                            c = e[8],
                            l = e[9],
                            f = e[10],
                            h = e[12],
                            d = e[13],
                            E = e[14],
                            m = t[0],
                            p = t[1],
                            _ = t[2],
                            y = t[4],
                            T = t[5],
                            R = t[6],
                            A = t[8],
                            v = t[9],
                            S = t[10],
                            g = t[12],
                            N = t[13],
                            O = t[14],
                            w = r * m + o * p + c * _,
                            I = a * m + u * p + l * _,
                            M = i * m + s * p + f * _,
                            x = r * y + o * T + c * R,
                            C = a * y + u * T + l * R,
                            P = i * y + s * T + f * R,
                            D = r * A + o * v + c * S,
                            U = a * A + u * v + l * S,
                            L = i * A + s * v + f * S,
                            F = r * g + o * N + c * O + h,
                            b = a * g + u * N + l * O + d,
                            B = i * g + s * N + f * O + E;
                        return (
                            (n[0] = w),
                            (n[1] = I),
                            (n[2] = M),
                            (n[3] = 0),
                            (n[4] = x),
                            (n[5] = C),
                            (n[6] = P),
                            (n[7] = 0),
                            (n[8] = D),
                            (n[9] = U),
                            (n[10] = L),
                            (n[11] = 0),
                            (n[12] = F),
                            (n[13] = b),
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
                            f = e[10],
                            h = t[0],
                            d = t[1],
                            E = t[2],
                            m = t[3],
                            p = t[4],
                            _ = t[5],
                            y = t[6],
                            T = t[7],
                            R = t[8],
                            A = r * h + o * d + c * E,
                            v = a * h + u * d + l * E,
                            S = i * h + s * d + f * E,
                            g = r * m + o * p + c * _,
                            N = a * m + u * p + l * _,
                            O = i * m + s * p + f * _,
                            w = r * y + o * T + c * R,
                            I = a * y + u * T + l * R,
                            M = i * y + s * T + f * R;
                        return (
                            (n[0] = A),
                            (n[1] = v),
                            (n[2] = S),
                            (n[3] = 0),
                            (n[4] = g),
                            (n[5] = N),
                            (n[6] = O),
                            (n[7] = 0),
                            (n[8] = w),
                            (n[9] = I),
                            (n[10] = M),
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
                var p = new e();
                (l.multiplyByUniformScale = function (e, t, n) {
                    return (
                        (p.x = t),
                        (p.y = t),
                        (p.z = t),
                        l.multiplyByScale(e, p, n)
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
                    y = new s(),
                    T = new t(),
                    R = new t(0, 0, 0, 1);
                return (
                    (l.inverse = function (e, n) {
                        if (
                            s.equalsEpsilon(
                                l.getRotation(e, _),
                                y,
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
                            f = e[1],
                            h = e[5],
                            d = e[9],
                            E = e[13],
                            m = e[2],
                            p = e[6],
                            A = e[10],
                            v = e[14],
                            S = e[3],
                            g = e[7],
                            N = e[11],
                            O = e[15],
                            w = A * O,
                            I = v * N,
                            M = p * O,
                            x = v * g,
                            C = p * N,
                            P = A * g,
                            D = m * O,
                            U = v * S,
                            L = m * N,
                            F = A * S,
                            b = m * g,
                            B = p * S,
                            z = w * h + x * d + C * E - (I * h + M * d + P * E),
                            q = I * f + D * d + F * E - (w * f + U * d + L * E),
                            G = M * f + U * h + b * E - (x * f + D * h + B * E),
                            V = P * f + L * h + B * d - (C * f + F * h + b * d),
                            W = I * a + M * i + P * o - (w * a + x * i + C * o),
                            X = w * r + U * i + L * o - (I * r + D * i + F * o),
                            H = x * r + D * a + B * o - (M * r + U * a + b * o),
                            Y = C * r + F * a + b * i - (P * r + L * a + B * i);
                        (w = i * E),
                            (I = o * d),
                            (M = a * E),
                            (x = o * h),
                            (C = a * d),
                            (P = i * h),
                            (D = r * E),
                            (U = o * f),
                            (L = r * d),
                            (F = i * f),
                            (b = r * h),
                            (B = a * f);
                        var k = w * g + x * N + C * O - (I * g + M * N + P * O),
                            Z = I * S + D * N + F * O - (w * S + U * N + L * O),
                            j = M * S + U * g + b * O - (x * S + D * g + B * O),
                            K = P * S + L * g + B * N - (C * S + F * g + b * N),
                            J = M * A + P * v + I * p - (C * v + w * p + x * A),
                            Q = L * v + w * m + U * A - (D * A + F * v + I * m),
                            $ = D * p + B * v + x * m - (b * v + M * m + U * p),
                            ee =
                                b * A + C * m + F * p - (L * p + B * A + P * m),
                            te = r * z + a * q + i * G + o * V;
                        if (Math.abs(te) < u.EPSILON20)
                            throw new c(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (te = 1 / te),
                            (n[0] = z * te),
                            (n[1] = q * te),
                            (n[2] = G * te),
                            (n[3] = V * te),
                            (n[4] = W * te),
                            (n[5] = X * te),
                            (n[6] = H * te),
                            (n[7] = Y * te),
                            (n[8] = k * te),
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
                            a = e[2],
                            i = e[4],
                            o = e[5],
                            u = e[6],
                            s = e[8],
                            c = e[9],
                            l = e[10],
                            f = e[12],
                            h = e[13],
                            d = e[14],
                            E = -n * f - r * h - a * d,
                            m = -i * f - o * h - u * d,
                            p = -s * f - c * h - l * d;
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
                            (t[12] = E),
                            (t[13] = m),
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
                                f = 0,
                                h = e.length;
                            f < h;
                            f++
                        ) {
                            var d = e[f];
                            (n = Math.min(n, d.longitude)),
                                (a = Math.max(a, d.longitude)),
                                (c = Math.min(c, d.latitude)),
                                (l = Math.max(l, d.latitude));
                            var E =
                                d.longitude >= 0
                                    ? d.longitude
                                    : d.longitude + u.TWO_PI;
                            (i = Math.min(i, E)), (o = Math.max(o, E));
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
                                f = -Number.MAX_VALUE,
                                h = Number.MAX_VALUE,
                                d = -Number.MAX_VALUE,
                                E = 0,
                                m = e.length;
                            E < m;
                            E++
                        ) {
                            var p = t.cartesianToCartographic(e[E]);
                            (o = Math.min(o, p.longitude)),
                                (c = Math.max(c, p.longitude)),
                                (h = Math.min(h, p.latitude)),
                                (d = Math.max(d, p.latitude));
                            var _ =
                                p.longitude >= 0
                                    ? p.longitude
                                    : p.longitude + u.TWO_PI;
                            (l = Math.min(l, _)), (f = Math.max(f, _));
                        }
                        return (
                            c - o > f - l &&
                                ((o = l),
                                (c = f),
                                c > u.PI && (c -= u.TWO_PI),
                                o > u.PI && (o -= u.TWO_PI)),
                            r(a)
                                ? ((a.west = o),
                                  (a.south = h),
                                  (a.east = c),
                                  (a.north = d),
                                  a)
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
                            f = u.negativePiToPi(Math.min(a, o));
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
                            f = u.convertLongitudeRange(Math.max(a, o));
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
                            f = e.north,
                            h = e.south,
                            d = e.east,
                            E = e.west,
                            m = c;
                        (m.height = a),
                            (m.longitude = E),
                            (m.latitude = f),
                            (o[l] = t.cartographicToCartesian(m, o[l])),
                            l++,
                            (m.longitude = d),
                            (o[l] = t.cartographicToCartesian(m, o[l])),
                            l++,
                            (m.latitude = h),
                            (o[l] = t.cartographicToCartesian(m, o[l])),
                            l++,
                            (m.longitude = E),
                            (o[l] = t.cartographicToCartesian(m, o[l])),
                            l++,
                            (m.latitude = f < 0 ? f : h > 0 ? h : 0);
                        for (var p = 1; p < 8; ++p)
                            (m.longitude = -Math.PI + p * u.PI_OVER_TWO),
                                s.contains(e, m) &&
                                    ((o[l] = t.cartographicToCartesian(
                                        m,
                                        o[l],
                                    )),
                                    l++);
                        return (
                            0 === m.latitude &&
                                ((m.longitude = E),
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
            function (e, t, n, r, a, i, o, u, s, c, l, f) {
                'use strict';
                function h(t, n) {
                    (this.center = e.clone(r(t, e.ZERO))),
                        (this.radius = r(n, 0));
                }
                var d = new e(),
                    E = new e(),
                    m = new e(),
                    p = new e(),
                    _ = new e(),
                    y = new e(),
                    T = new e(),
                    R = new e(),
                    A = new e(),
                    v = new e(),
                    S = new e(),
                    g = new e();
                h.fromPoints = function (t, n) {
                    if ((a(n) || (n = new h()), !a(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r,
                        i = e.clone(t[0], T),
                        o = e.clone(i, d),
                        u = e.clone(i, E),
                        s = e.clone(i, m),
                        c = e.clone(i, p),
                        l = e.clone(i, _),
                        f = e.clone(i, y),
                        N = t.length;
                    for (r = 1; r < N; r++) {
                        e.clone(t[r], i);
                        var O = i.x,
                            w = i.y,
                            I = i.z;
                        O < o.x && e.clone(i, o),
                            O > c.x && e.clone(i, c),
                            w < u.y && e.clone(i, u),
                            w > l.y && e.clone(i, l),
                            I < s.z && e.clone(i, s),
                            I > f.z && e.clone(i, f);
                    }
                    var M = e.magnitudeSquared(e.subtract(c, o, R)),
                        x = e.magnitudeSquared(e.subtract(l, u, R)),
                        C = e.magnitudeSquared(e.subtract(f, s, R)),
                        P = o,
                        D = c,
                        U = M;
                    x > U && ((U = x), (P = u), (D = l)),
                        C > U && ((U = C), (P = s), (D = f));
                    var L = A;
                    (L.x = 0.5 * (P.x + D.x)),
                        (L.y = 0.5 * (P.y + D.y)),
                        (L.z = 0.5 * (P.z + D.z));
                    var F = e.magnitudeSquared(e.subtract(D, L, R)),
                        b = Math.sqrt(F),
                        B = v;
                    (B.x = o.x), (B.y = u.y), (B.z = s.z);
                    var z = S;
                    (z.x = c.x), (z.y = l.y), (z.z = f.z);
                    var q = e.multiplyByScalar(e.add(B, z, R), 0.5, g),
                        G = 0;
                    for (r = 0; r < N; r++) {
                        e.clone(t[r], i);
                        var V = e.magnitude(e.subtract(i, q, R));
                        V > G && (G = V);
                        var W = e.magnitudeSquared(e.subtract(i, L, R));
                        if (W > F) {
                            var X = Math.sqrt(W);
                            (b = 0.5 * (b + X)), (F = b * b);
                            var H = X - b;
                            (L.x = (b * L.x + H * i.x) / X),
                                (L.y = (b * L.y + H * i.y) / X),
                                (L.z = (b * L.z + H * i.z) / X);
                        }
                    }
                    return (
                        b < G
                            ? (e.clone(L, n.center), (n.radius = b))
                            : (e.clone(q, n.center), (n.radius = G)),
                        n
                    );
                };
                var N = new o(),
                    O = new e(),
                    w = new e(),
                    I = new t(),
                    M = new t();
                (h.fromRectangle2D = function (e, t, n) {
                    return h.fromRectangleWithHeights2D(e, t, 0, 0, n);
                }),
                    (h.fromRectangleWithHeights2D = function (t, n, i, o, u) {
                        if ((a(u) || (u = new h()), !a(t)))
                            return (
                                (u.center = e.clone(e.ZERO, u.center)),
                                (u.radius = 0),
                                u
                            );
                        (n = r(n, N)),
                            f.southwest(t, I),
                            (I.height = i),
                            f.northeast(t, M),
                            (M.height = o);
                        var s = n.project(I, O),
                            c = n.project(M, w),
                            l = c.x - s.x,
                            d = c.y - s.y,
                            E = c.z - s.z;
                        u.radius = 0.5 * Math.sqrt(l * l + d * d + E * E);
                        var m = u.center;
                        return (
                            (m.x = s.x + 0.5 * l),
                            (m.y = s.y + 0.5 * d),
                            (m.z = s.z + 0.5 * E),
                            u
                        );
                    });
                var x = [];
                (h.fromRectangle3D = function (t, n, o, u) {
                    if (
                        ((n = r(n, i.WGS84)),
                        (o = r(o, 0)),
                        a(u) || (u = new h()),
                        !a(t))
                    )
                        return (
                            (u.center = e.clone(e.ZERO, u.center)),
                            (u.radius = 0),
                            u
                        );
                    var s = f.subsample(t, n, o, x);
                    return h.fromPoints(s, u);
                }),
                    (h.fromVertices = function (t, n, i, o) {
                        if ((a(o) || (o = new h()), !a(t) || 0 === t.length))
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
                            c = e.clone(u, d),
                            l = e.clone(u, E),
                            f = e.clone(u, m),
                            N = e.clone(u, p),
                            O = e.clone(u, _),
                            w = e.clone(u, y),
                            I = t.length;
                        for (s = 0; s < I; s += i) {
                            var M = t[s] + n.x,
                                x = t[s + 1] + n.y,
                                C = t[s + 2] + n.z;
                            (u.x = M),
                                (u.y = x),
                                (u.z = C),
                                M < c.x && e.clone(u, c),
                                M > N.x && e.clone(u, N),
                                x < l.y && e.clone(u, l),
                                x > O.y && e.clone(u, O),
                                C < f.z && e.clone(u, f),
                                C > w.z && e.clone(u, w);
                        }
                        var P = e.magnitudeSquared(e.subtract(N, c, R)),
                            D = e.magnitudeSquared(e.subtract(O, l, R)),
                            U = e.magnitudeSquared(e.subtract(w, f, R)),
                            L = c,
                            F = N,
                            b = P;
                        D > b && ((b = D), (L = l), (F = O)),
                            U > b && ((b = U), (L = f), (F = w));
                        var B = A;
                        (B.x = 0.5 * (L.x + F.x)),
                            (B.y = 0.5 * (L.y + F.y)),
                            (B.z = 0.5 * (L.z + F.z));
                        var z = e.magnitudeSquared(e.subtract(F, B, R)),
                            q = Math.sqrt(z),
                            G = v;
                        (G.x = c.x), (G.y = l.y), (G.z = f.z);
                        var V = S;
                        (V.x = N.x), (V.y = O.y), (V.z = w.z);
                        var W = e.multiplyByScalar(e.add(G, V, R), 0.5, g),
                            X = 0;
                        for (s = 0; s < I; s += i) {
                            (u.x = t[s] + n.x),
                                (u.y = t[s + 1] + n.y),
                                (u.z = t[s + 2] + n.z);
                            var H = e.magnitude(e.subtract(u, W, R));
                            H > X && (X = H);
                            var Y = e.magnitudeSquared(e.subtract(u, B, R));
                            if (Y > z) {
                                var k = Math.sqrt(Y);
                                (q = 0.5 * (q + k)), (z = q * q);
                                var Z = k - q;
                                (B.x = (q * B.x + Z * u.x) / k),
                                    (B.y = (q * B.y + Z * u.y) / k),
                                    (B.z = (q * B.z + Z * u.z) / k);
                            }
                        }
                        return (
                            q < X
                                ? (e.clone(B, o.center), (o.radius = q))
                                : (e.clone(W, o.center), (o.radius = X)),
                            o
                        );
                    }),
                    (h.fromEncodedCartesianVertices = function (t, n, r) {
                        if (
                            (a(r) || (r = new h()),
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
                            u = e.clone(i, d),
                            s = e.clone(i, E),
                            c = e.clone(i, m),
                            l = e.clone(i, p),
                            f = e.clone(i, _),
                            N = e.clone(i, y),
                            O = t.length;
                        for (o = 0; o < O; o += 3) {
                            var w = t[o] + n[o],
                                I = t[o + 1] + n[o + 1],
                                M = t[o + 2] + n[o + 2];
                            (i.x = w),
                                (i.y = I),
                                (i.z = M),
                                w < u.x && e.clone(i, u),
                                w > l.x && e.clone(i, l),
                                I < s.y && e.clone(i, s),
                                I > f.y && e.clone(i, f),
                                M < c.z && e.clone(i, c),
                                M > N.z && e.clone(i, N);
                        }
                        var x = e.magnitudeSquared(e.subtract(l, u, R)),
                            C = e.magnitudeSquared(e.subtract(f, s, R)),
                            P = e.magnitudeSquared(e.subtract(N, c, R)),
                            D = u,
                            U = l,
                            L = x;
                        C > L && ((L = C), (D = s), (U = f)),
                            P > L && ((L = P), (D = c), (U = N));
                        var F = A;
                        (F.x = 0.5 * (D.x + U.x)),
                            (F.y = 0.5 * (D.y + U.y)),
                            (F.z = 0.5 * (D.z + U.z));
                        var b = e.magnitudeSquared(e.subtract(U, F, R)),
                            B = Math.sqrt(b),
                            z = v;
                        (z.x = u.x), (z.y = s.y), (z.z = c.z);
                        var q = S;
                        (q.x = l.x), (q.y = f.y), (q.z = N.z);
                        var G = e.multiplyByScalar(e.add(z, q, R), 0.5, g),
                            V = 0;
                        for (o = 0; o < O; o += 3) {
                            (i.x = t[o] + n[o]),
                                (i.y = t[o + 1] + n[o + 1]),
                                (i.z = t[o + 2] + n[o + 2]);
                            var W = e.magnitude(e.subtract(i, G, R));
                            W > V && (V = W);
                            var X = e.magnitudeSquared(e.subtract(i, F, R));
                            if (X > b) {
                                var H = Math.sqrt(X);
                                (B = 0.5 * (B + H)), (b = B * B);
                                var Y = H - B;
                                (F.x = (B * F.x + Y * i.x) / H),
                                    (F.y = (B * F.y + Y * i.y) / H),
                                    (F.z = (B * F.z + Y * i.z) / H);
                            }
                        }
                        return (
                            B < V
                                ? (e.clone(F, r.center), (r.radius = B))
                                : (e.clone(G, r.center), (r.radius = V)),
                            r
                        );
                    }),
                    (h.fromCornerPoints = function (t, n, r) {
                        a(r) || (r = new h());
                        var i = r.center;
                        return (
                            e.add(t, n, i),
                            e.multiplyByScalar(i, 0.5, i),
                            (r.radius = e.distance(i, n)),
                            r
                        );
                    }),
                    (h.fromEllipsoid = function (t, n) {
                        return (
                            a(n) || (n = new h()),
                            e.clone(e.ZERO, n.center),
                            (n.radius = t.maximumRadius),
                            n
                        );
                    });
                var C = new e();
                h.fromBoundingSpheres = function (t, n) {
                    if ((a(n) || (n = new h()), !a(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r = t.length;
                    if (1 === r) return h.clone(t[0], n);
                    if (2 === r) return h.union(t[0], t[1], n);
                    var i,
                        o = [];
                    for (i = 0; i < r; i++) o.push(t[i].center);
                    n = h.fromPoints(o, n);
                    var u = n.center,
                        s = n.radius;
                    for (i = 0; i < r; i++) {
                        var c = t[i];
                        s = Math.max(s, e.distance(u, c.center, C) + c.radius);
                    }
                    return (n.radius = s), n;
                };
                var P = new e(),
                    D = new e(),
                    U = new e();
                (h.fromOrientedBoundingBox = function (t, n) {
                    a(n) || (n = new h());
                    var r = t.halfAxes,
                        i = c.getColumn(r, 0, P),
                        o = c.getColumn(r, 1, D),
                        u = c.getColumn(r, 2, U);
                    return (
                        e.add(i, o, i),
                        e.add(i, u, i),
                        (n.center = e.clone(t.center, n.center)),
                        (n.radius = e.magnitude(i)),
                        n
                    );
                }),
                    (h.clone = function (t, n) {
                        if (a(t))
                            return a(n)
                                ? ((n.center = e.clone(t.center, n.center)),
                                  (n.radius = t.radius),
                                  n)
                                : new h(t.center, t.radius);
                    }),
                    (h.packedLength = 4),
                    (h.pack = function (e, t, n) {
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
                    (h.unpack = function (e, t, n) {
                        (t = r(t, 0)), a(n) || (n = new h());
                        var i = n.center;
                        return (
                            (i.x = e[t++]),
                            (i.y = e[t++]),
                            (i.z = e[t++]),
                            (n.radius = e[t]),
                            n
                        );
                    });
                var L = new e(),
                    F = new e();
                h.union = function (t, n, r) {
                    a(r) || (r = new h());
                    var i = t.center,
                        o = t.radius,
                        u = n.center,
                        s = n.radius,
                        c = e.subtract(u, i, L),
                        l = e.magnitude(c);
                    if (o >= l + s) return t.clone(r), r;
                    if (s >= l + o) return n.clone(r), r;
                    var f = 0.5 * (o + l + s),
                        d = e.multiplyByScalar(c, (-o + f) / l, F);
                    return (
                        e.add(d, i, d), e.clone(d, r.center), (r.radius = f), r
                    );
                };
                var b = new e();
                (h.expand = function (t, n, r) {
                    r = h.clone(t, r);
                    var a = e.magnitude(e.subtract(n, r.center, b));
                    return a > r.radius && (r.radius = a), r;
                }),
                    (h.intersectPlane = function (t, n) {
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
                    (h.transform = function (e, t, n) {
                        return (
                            a(n) || (n = new h()),
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
                            a(n) || (n = new h()),
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
                h.computePlaneDistances = function (t, n, r, i) {
                    a(i) || (i = new s());
                    var o = e.subtract(t.center, n, z),
                        u = e.dot(r, o);
                    return (i.start = u - t.radius), (i.stop = u + t.radius), i;
                };
                for (
                    var q = new e(),
                        G = new e(),
                        V = new e(),
                        W = new e(),
                        X = new e(),
                        H = new t(),
                        Y = new Array(8),
                        k = 0;
                    k < 8;
                    ++k
                )
                    Y[k] = new e();
                var Z = new o();
                return (
                    (h.projectTo2D = function (t, n, a) {
                        n = r(n, Z);
                        var i = n.ellipsoid,
                            o = t.center,
                            u = t.radius,
                            s = i.geodeticSurfaceNormal(o, q),
                            c = e.cross(e.UNIT_Z, s, G);
                        e.normalize(c, c);
                        var l = e.cross(s, c, V);
                        e.normalize(l, l),
                            e.multiplyByScalar(s, u, s),
                            e.multiplyByScalar(l, u, l),
                            e.multiplyByScalar(c, u, c);
                        var f = e.negate(l, X),
                            d = e.negate(c, W),
                            E = Y,
                            m = E[0];
                        e.add(s, l, m),
                            e.add(m, c, m),
                            (m = E[1]),
                            e.add(s, l, m),
                            e.add(m, d, m),
                            (m = E[2]),
                            e.add(s, f, m),
                            e.add(m, d, m),
                            (m = E[3]),
                            e.add(s, f, m),
                            e.add(m, c, m),
                            e.negate(s, s),
                            (m = E[4]),
                            e.add(s, l, m),
                            e.add(m, c, m),
                            (m = E[5]),
                            e.add(s, l, m),
                            e.add(m, d, m),
                            (m = E[6]),
                            e.add(s, f, m),
                            e.add(m, d, m),
                            (m = E[7]),
                            e.add(s, f, m),
                            e.add(m, c, m);
                        for (var p = E.length, _ = 0; _ < p; ++_) {
                            var y = E[_];
                            e.add(o, y, y);
                            var T = i.cartesianToCartographic(y, H);
                            n.project(T, y);
                        }
                        (a = h.fromPoints(E, a)), (o = a.center);
                        var R = o.x,
                            A = o.y,
                            v = o.z;
                        return (o.x = v), (o.y = R), (o.z = A), a;
                    }),
                    (h.isOccluded = function (e, t) {
                        return !t.isBoundingSphereVisible(e);
                    }),
                    (h.equals = function (t, n) {
                        return (
                            t === n ||
                            (a(t) &&
                                a(n) &&
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
                    if (!t(A) && ((A = !1), !h())) {
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
                        !a() && !h() && / Safari\/[\.0-9]+/.test(R.userAgent))
                    ) {
                        var e = / Version\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((S = !0), (g = r(e[1])));
                    }
                    return S;
                }
                function u() {
                    return o() && g;
                }
                function s() {
                    if (!t(N)) {
                        N = !1;
                        var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            R.userAgent,
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
                    if (!t(w)) {
                        w = !1;
                        var e;
                        'Microsoft Internet Explorer' === R.appName
                            ? null !==
                                  (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      R.userAgent,
                                  )) && ((w = !0), (I = r(e[1])))
                            : 'Netscape' === R.appName &&
                              null !==
                                  (e =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          R.userAgent,
                                      )) &&
                              ((w = !0), (I = r(e[1])));
                    }
                    return w;
                }
                function f() {
                    return l() && I;
                }
                function h() {
                    if (!t(M)) {
                        M = !1;
                        var e = / Edge\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((M = !0), (x = r(e[1])));
                    }
                    return M;
                }
                function d() {
                    return h() && x;
                }
                function E() {
                    if (!t(C)) {
                        C = !1;
                        var e = /Firefox\/([\.0-9]+)/.exec(R.userAgent);
                        null !== e && ((C = !0), (P = r(e[1])));
                    }
                    return C;
                }
                function m() {
                    return t(D) || (D = /Windows/i.test(R.appVersion)), D;
                }
                function p() {
                    return E() && P;
                }
                function _() {
                    return (
                        t(U) ||
                            (U =
                                'undefined' != typeof PointerEvent &&
                                (!t(R.pointerEnabled) || R.pointerEnabled)),
                        U
                    );
                }
                function y() {
                    if (!t(F)) {
                        var e = document.createElement('canvas');
                        e.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var n = e.style.imageRendering;
                        (F = t(n) && '' !== n), F && (L = n);
                    }
                    return F;
                }
                function T() {
                    return y() ? L : void 0;
                }
                var R;
                R = 'undefined' != typeof navigator ? navigator : {};
                var A,
                    v,
                    S,
                    g,
                    N,
                    O,
                    w,
                    I,
                    M,
                    x,
                    C,
                    P,
                    D,
                    U,
                    L,
                    F,
                    b = {
                        isChrome: a,
                        chromeVersion: i,
                        isSafari: o,
                        safariVersion: u,
                        isWebkit: s,
                        webkitVersion: c,
                        isInternetExplorer: l,
                        internetExplorerVersion: f,
                        isEdge: h,
                        edgeVersion: d,
                        isFirefox: E,
                        firefoxVersion: p,
                        isWindows: m,
                        hardwareConcurrency: e(R.hardwareConcurrency, 3),
                        supportsPointerEvents: _,
                        supportsImageRenderingPixelated: y,
                        imageRenderingValue: T,
                    };
                return (
                    (b.supportsFullscreen = function () {
                        return n.supportsFullscreen();
                    }),
                    (b.supportsTypedArrays = function () {
                        return 'undefined' != typeof ArrayBuffer;
                    }),
                    (b.supportsWebWorkers = function () {
                        return 'undefined' != typeof Worker;
                    }),
                    b
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
        define('Core/CornerType', ['./freezeObject'], function (e) {
            'use strict';
            return e({ ROUNDED: 0, MITERED: 1, BEVELED: 2 });
        }),
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
            function (e, t, n, r, a, i, o, u) {
                'use strict';
                function s(e) {
                    var t = e._uSquared,
                        n = e._ellipsoid.maximumRadius,
                        r = e._ellipsoid.minimumRadius,
                        a = (n - r) / n,
                        i = Math.cos(e._startHeading),
                        o = Math.sin(e._startHeading),
                        u = (1 - a) * Math.tan(e._start.latitude),
                        s = 1 / Math.sqrt(1 + u * u),
                        c = s * u,
                        l = Math.atan2(u, i),
                        f = s * o,
                        h = f * f,
                        d = 1 - h,
                        E = Math.sqrt(d),
                        m = t / 4,
                        p = m * m,
                        _ = p * m,
                        y = p * p,
                        T = 1 + m - (3 * p) / 4 + (5 * _) / 4 - (175 * y) / 64,
                        R = 1 - m + (15 * p) / 8 - (35 * _) / 8,
                        A = 1 - 3 * m + (35 * p) / 4,
                        v = 1 - 5 * m,
                        S =
                            T * l -
                            (R * Math.sin(2 * l) * m) / 2 -
                            (A * Math.sin(4 * l) * p) / 16 -
                            (v * Math.sin(6 * l) * _) / 48 -
                            (5 * Math.sin(8 * l) * y) / 512,
                        g = e._constants;
                    (g.a = n),
                        (g.b = r),
                        (g.f = a),
                        (g.cosineHeading = i),
                        (g.sineHeading = o),
                        (g.tanU = u),
                        (g.cosineU = s),
                        (g.sineU = c),
                        (g.sigma = l),
                        (g.sineAlpha = f),
                        (g.sineSquaredAlpha = h),
                        (g.cosineSquaredAlpha = d),
                        (g.cosineAlpha = E),
                        (g.u2Over4 = m),
                        (g.u4Over16 = p),
                        (g.u6Over64 = _),
                        (g.u8Over256 = y),
                        (g.a0 = T),
                        (g.a1 = R),
                        (g.a2 = A),
                        (g.a3 = v),
                        (g.distanceRatio = S);
                }
                function c(e, t) {
                    return (e * t * (4 + e * (4 - 3 * t))) / 16;
                }
                function l(e, t, n, r, a, i, o) {
                    var u = c(e, n);
                    return (
                        (1 - u) *
                        e *
                        t *
                        (r + u * a * (o + u * i * (2 * o * o - 1)))
                    );
                }
                function f(e, t, n, r, a, i, o) {
                    var s,
                        c,
                        f,
                        h,
                        d,
                        E = (t - n) / t,
                        m = i - r,
                        p = Math.atan((1 - E) * Math.tan(a)),
                        _ = Math.atan((1 - E) * Math.tan(o)),
                        y = Math.cos(p),
                        T = Math.sin(p),
                        R = Math.cos(_),
                        A = Math.sin(_),
                        v = y * R,
                        S = y * A,
                        g = T * A,
                        N = T * R,
                        O = m,
                        w = u.TWO_PI,
                        I = Math.cos(O),
                        M = Math.sin(O);
                    do {
                        (I = Math.cos(O)), (M = Math.sin(O));
                        var x = S - N * I;
                        (f = Math.sqrt(R * R * M * M + x * x)),
                            (c = g + v * I),
                            (s = Math.atan2(f, c));
                        var C;
                        0 === f
                            ? ((C = 0), (h = 1))
                            : ((C = (v * M) / f), (h = 1 - C * C)),
                            (w = O),
                            (d = c - (2 * g) / h),
                            isNaN(d) && (d = 0),
                            (O = m + l(E, C, h, s, f, c, d));
                    } while (Math.abs(O - w) > u.EPSILON12);
                    var P = (h * (t * t - n * n)) / (n * n),
                        D =
                            1 +
                            (P * (4096 + P * (P * (320 - 175 * P) - 768))) /
                                16384,
                        U = (P * (256 + P * (P * (74 - 47 * P) - 128))) / 1024,
                        L = d * d,
                        F =
                            U *
                            f *
                            (d +
                                (U *
                                    (c * (2 * L - 1) -
                                        (U *
                                            d *
                                            (4 * f * f - 3) *
                                            (4 * L - 3)) /
                                            6)) /
                                    4),
                        b = n * D * (s - F),
                        B = Math.atan2(R * M, S - N * I),
                        z = Math.atan2(y * M, S * I - N);
                    (e._distance = b),
                        (e._startHeading = B),
                        (e._endHeading = z),
                        (e._uSquared = P);
                }
                function h(n, r, a, i) {
                    e.normalize(i.cartographicToCartesian(r, m), E),
                        e.normalize(i.cartographicToCartesian(a, m), m);
                    f(
                        n,
                        i.maximumRadius,
                        i.minimumRadius,
                        r.longitude,
                        r.latitude,
                        a.longitude,
                        a.latitude,
                    ),
                        (n._start = t.clone(r, n._start)),
                        (n._end = t.clone(a, n._end)),
                        (n._start.height = 0),
                        (n._end.height = 0),
                        s(n);
                }
                function d(e, n, i) {
                    var u = r(i, o.WGS84);
                    (this._ellipsoid = u),
                        (this._start = new t()),
                        (this._end = new t()),
                        (this._constants = {}),
                        (this._startHeading = void 0),
                        (this._endHeading = void 0),
                        (this._distance = void 0),
                        (this._uSquared = void 0),
                        a(e) && a(n) && h(this, e, n, u);
                }
                var E = new e(),
                    m = new e();
                return (
                    i(d.prototype, {
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
                    (d.prototype.setEndPoints = function (e, t) {
                        h(this, e, t, this._ellipsoid);
                    }),
                    (d.prototype.interpolateUsingFraction = function (e, t) {
                        return this.interpolateUsingSurfaceDistance(
                            this._distance * e,
                            t,
                        );
                    }),
                    (d.prototype.interpolateUsingSurfaceDistance = function (
                        e,
                        n,
                    ) {
                        var r = this._constants,
                            i = r.distanceRatio + e / r.b,
                            o = Math.cos(2 * i),
                            u = Math.cos(4 * i),
                            s = Math.cos(6 * i),
                            c = Math.sin(2 * i),
                            f = Math.sin(4 * i),
                            h = Math.sin(6 * i),
                            d = Math.sin(8 * i),
                            E = i * i,
                            m = i * E,
                            p = r.u8Over256,
                            _ = r.u2Over4,
                            y = r.u6Over64,
                            T = r.u4Over16,
                            R =
                                (2 * m * p * o) / 3 +
                                i *
                                    (1 -
                                        _ +
                                        (7 * T) / 4 -
                                        (15 * y) / 4 +
                                        (579 * p) / 64 -
                                        (T - (15 * y) / 4 + (187 * p) / 16) *
                                            o -
                                        ((5 * y) / 4 - (115 * p) / 16) * u -
                                        (29 * p * s) / 16) +
                                (_ / 2 - T + (71 * y) / 32 - (85 * p) / 16) *
                                    c +
                                ((5 * T) / 16 - (5 * y) / 4 + (383 * p) / 96) *
                                    f -
                                E * ((y - (11 * p) / 2) * c + (5 * p * f) / 2) +
                                ((29 * y) / 96 - (29 * p) / 16) * h +
                                (539 * p * d) / 1536,
                            A = Math.asin(Math.sin(R) * r.cosineAlpha),
                            v = Math.atan((r.a / r.b) * Math.tan(A));
                        R -= r.sigma;
                        var S = Math.cos(2 * r.sigma + R),
                            g = Math.sin(R),
                            N = Math.cos(R),
                            O = r.cosineU * N,
                            w = r.sineU * g,
                            I = Math.atan2(
                                g * r.sineHeading,
                                O - w * r.cosineHeading,
                            ),
                            M =
                                I -
                                l(
                                    r.f,
                                    r.sineAlpha,
                                    r.cosineSquaredAlpha,
                                    R,
                                    g,
                                    N,
                                    S,
                                );
                        return a(n)
                            ? ((n.longitude = this._start.longitude + M),
                              (n.latitude = v),
                              (n.height = 0),
                              n)
                            : new t(this._start.longitude + M, v, 0);
                    }),
                    d
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
                            f = n(c, -l, t.EPSILON14);
                        if (f < 0) return [];
                        var h =
                            -0.5 * n(r, t.sign(r) * Math.sqrt(f), t.EPSILON14);
                        return r > 0 ? [h / e, a / h] : [a / h, h / e];
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
                        f = u * c,
                        h = u * u,
                        d = s * s,
                        E = o * s - h,
                        m = o * c - u * s,
                        p = u * c - d,
                        _ = 4 * E * p - m * m;
                    if (_ < 0) {
                        var y, T, R;
                        h * f >= l * d
                            ? ((y = o), (T = E), (R = -2 * u * E + o * m))
                            : ((y = c), (T = p), (R = -c * m + 2 * s * p));
                        var A = R < 0 ? -1 : 1,
                            v = -A * Math.abs(y) * Math.sqrt(-_);
                        i = -R + v;
                        var S = i / 2,
                            g =
                                S < 0
                                    ? -Math.pow(-S, 1 / 3)
                                    : Math.pow(S, 1 / 3),
                            N = i === v ? -g : -T / g;
                        return (
                            (a = T <= 0 ? g + N : -R / (g * g + N * N + T)),
                            h * f >= l * d ? [(a - u) / o] : [-c / (a + s)]
                        );
                    }
                    var O = E,
                        w = -2 * u * E + o * m,
                        I = p,
                        M = -c * m + 2 * s * p,
                        x = Math.sqrt(_),
                        C = Math.sqrt(3) / 2,
                        P = Math.abs(Math.atan2(o * x, -w) / 3);
                    a = 2 * Math.sqrt(-O);
                    var D = Math.cos(P);
                    i = a * D;
                    var U = a * (-D / 2 - C * Math.sin(P)),
                        L = i + U > 2 * u ? i - u : U - u,
                        F = o,
                        b = L / F;
                    (P = Math.abs(Math.atan2(c * x, -M) / 3)),
                        (a = 2 * Math.sqrt(-I)),
                        (D = Math.cos(P)),
                        (i = a * D),
                        (U = a * (-D / 2 - C * Math.sin(P)));
                    var B = -c,
                        z = i + U < 2 * s ? i + s : U + s,
                        q = B / z,
                        G = F * z,
                        V = -L * z - F * B,
                        W = L * B,
                        X = (s * V - u * W) / (-u * V + s * G);
                    return b <= X
                        ? b <= q
                            ? X <= q
                                ? [b, X, q]
                                : [b, q, X]
                            : [q, b, X]
                        : b <= q
                          ? [X, b, q]
                          : X <= q
                            ? [X, q, b]
                            : [q, X, b];
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
                        f = e.computeRealRoots(1, 2 * s, s * s - 4 * l, -c * c);
                    if (f.length > 0) {
                        var h = -t / 4,
                            d = f[f.length - 1];
                        if (Math.abs(d) < n.EPSILON14) {
                            var E = r.computeRealRoots(1, s, l);
                            if (2 === E.length) {
                                var m,
                                    p = E[0],
                                    _ = E[1];
                                if (p >= 0 && _ >= 0) {
                                    var y = Math.sqrt(p),
                                        T = Math.sqrt(_);
                                    return [h - T, h - y, h + y, h + T];
                                }
                                if (p >= 0 && _ < 0)
                                    return (m = Math.sqrt(p)), [h - m, h + m];
                                if (p < 0 && _ >= 0)
                                    return (m = Math.sqrt(_)), [h - m, h + m];
                            }
                            return [];
                        }
                        if (d > 0) {
                            var R = Math.sqrt(d),
                                A = (s + d - c / R) / 2,
                                v = (s + d + c / R) / 2,
                                S = r.computeRealRoots(1, R, A),
                                g = r.computeRealRoots(1, -R, v);
                            return 0 !== S.length
                                ? ((S[0] += h),
                                  (S[1] += h),
                                  0 !== g.length
                                      ? ((g[0] += h),
                                        (g[1] += h),
                                        S[1] <= g[0]
                                            ? [S[0], S[1], g[0], g[1]]
                                            : g[1] <= S[0]
                                              ? [g[0], g[1], S[0], S[1]]
                                              : S[0] >= g[0] && S[1] <= g[1]
                                                ? [g[0], S[0], S[1], g[1]]
                                                : g[0] >= S[0] && g[1] <= S[1]
                                                  ? [S[0], g[0], g[1], S[1]]
                                                  : S[0] > g[0] && S[0] < g[1]
                                                    ? [g[0], S[0], g[1], S[1]]
                                                    : [S[0], g[0], S[1], g[1]])
                                      : S)
                                : 0 !== g.length
                                  ? ((g[0] += h), (g[1] += h), g)
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
                        f = i * t + s - 4 * o,
                        h = c * o - i * a * t + u,
                        d = e.computeRealRoots(1, l, f, h);
                    if (d.length > 0) {
                        var E,
                            m,
                            p = d[0],
                            _ = a - p,
                            y = _ * _,
                            T = t / 2,
                            R = _ / 2,
                            A = y - 4 * o,
                            v = y + 4 * Math.abs(o),
                            S = c - 4 * p,
                            g = c + 4 * Math.abs(p);
                        if (p < 0 || A * g < S * v) {
                            var N = Math.sqrt(S);
                            (E = N / 2), (m = 0 === N ? 0 : (t * R - i) / N);
                        } else {
                            var O = Math.sqrt(A);
                            (E = 0 === O ? 0 : (t * R - i) / O), (m = O / 2);
                        }
                        var w, I;
                        0 === T && 0 === E
                            ? ((w = 0), (I = 0))
                            : n.sign(T) === n.sign(E)
                              ? ((w = T + E), (I = p / w))
                              : ((I = T - E), (w = p / I));
                        var M, x;
                        0 === R && 0 === m
                            ? ((M = 0), (x = 0))
                            : n.sign(R) === n.sign(m)
                              ? ((M = R + m), (x = o / M))
                              : ((x = R - m), (M = o / x));
                        var C = r.computeRealRoots(1, w, M),
                            P = r.computeRealRoots(1, I, x);
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
                            f = r * r,
                            h = f * r,
                            d = a * a;
                        return (
                            u * c * f -
                            4 * s * h -
                            4 * e * l * f +
                            18 * e * t * n * h -
                            27 * i * f * f +
                            256 * o * (d * a) +
                            a *
                                (18 * s * n * r -
                                    4 * u * l +
                                    16 * e * c * c -
                                    80 * e * t * c * r -
                                    6 * e * u * f +
                                    144 * i * n * f) +
                            d *
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
                            f = u / t,
                            h = s / t,
                            d = c < 0 ? 1 : 0;
                        switch (
                            ((d += l < 0 ? d + 1 : d),
                            (d += f < 0 ? d + 1 : d),
                            (d += h < 0 ? d + 1 : d))
                        ) {
                            case 0:
                                return a(c, l, f, h);
                            case 1:
                            case 2:
                                return i(c, l, f, h);
                            case 3:
                            case 4:
                                return a(c, l, f, h);
                            case 5:
                                return i(c, l, f, h);
                            case 6:
                            case 7:
                                return a(c, l, f, h);
                            case 8:
                                return i(c, l, f, h);
                            case 9:
                            case 10:
                                return a(c, l, f, h);
                            case 11:
                                return i(c, l, f, h);
                            case 12:
                            case 13:
                            case 14:
                            case 15:
                                return a(c, l, f, h);
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
                function f(e, t, n, r) {
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
                function h(t, n, a) {
                    r(a) || (a = new i());
                    var o = t.origin,
                        u = t.direction,
                        s = n.center,
                        c = n.radius * n.radius,
                        l = e.subtract(o, s, y),
                        h = e.dot(u, u),
                        d = 2 * e.dot(u, l),
                        E = e.magnitudeSquared(l) - c,
                        m = f(h, d, E, v);
                    if (r(m)) return (a.start = m.root0), (a.stop = m.root1), a;
                }
                function d(e, t, n) {
                    var r = e + t;
                    return o.sign(e) !== o.sign(t) &&
                        Math.abs(r / Math.max(Math.abs(e), Math.abs(t))) < n
                        ? 0
                        : r;
                }
                function E(t, n, r, a, i) {
                    var l,
                        f = a * a,
                        h = i * i,
                        E = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * h,
                        m =
                            i *
                            (a *
                                d(
                                    t[u.COLUMN1ROW0],
                                    t[u.COLUMN0ROW1],
                                    o.EPSILON15,
                                ) +
                                n.y),
                        p =
                            t[u.COLUMN0ROW0] * f +
                            t[u.COLUMN2ROW2] * h +
                            a * n.x +
                            r,
                        _ =
                            h *
                            d(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                        y =
                            i *
                            (a * d(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + n.z),
                        T = [];
                    if (0 === y && 0 === _) {
                        if (((l = s.computeRealRoots(E, m, p)), 0 === l.length))
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
                    var g = y * y,
                        N = _ * _,
                        O = E * E,
                        w = y * _,
                        I = O + N,
                        M = 2 * (m * E + w),
                        x = 2 * p * E + m * m - N + g,
                        C = 2 * (p * m - w),
                        P = p * p - g;
                    if (0 === I && 0 === M && 0 === x && 0 === C) return T;
                    l = c.computeRealRoots(I, M, x, C, P);
                    var D = l.length;
                    if (0 === D) return T;
                    for (var U = 0; U < D; ++U) {
                        var L,
                            F = l[U],
                            b = F * F,
                            B = Math.max(1 - b, 0),
                            z = Math.sqrt(B);
                        L =
                            o.sign(E) === o.sign(p)
                                ? d(E * b + p, m * F, o.EPSILON12)
                                : o.sign(p) === o.sign(m * F)
                                  ? d(E * b, m * F + p, o.EPSILON12)
                                  : d(E * b + m * F, p, o.EPSILON12);
                        var q = d(_ * F, y, o.EPSILON15),
                            G = L * q;
                        G < 0
                            ? T.push(new e(a, i * F, i * z))
                            : G > 0
                              ? T.push(new e(a, i * F, i * -z))
                              : 0 !== z
                                ? (T.push(new e(a, i * F, i * -z)),
                                  T.push(new e(a, i * F, i * z)),
                                  ++U)
                                : T.push(new e(a, i * F, i * z));
                    }
                    return T;
                }
                var m = {};
                m.rayPlane = function (t, n, a) {
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
                var p = new e(),
                    _ = new e(),
                    y = new e(),
                    T = new e(),
                    R = new e();
                (m.rayTriangleParametric = function (t, r, a, i, u) {
                    u = n(u, !1);
                    var s,
                        c,
                        l,
                        f,
                        h,
                        d = t.origin,
                        E = t.direction,
                        m = e.subtract(a, r, p),
                        A = e.subtract(i, r, _),
                        v = e.cross(E, A, y),
                        S = e.dot(m, v);
                    if (u) {
                        if (S < o.EPSILON6) return;
                        if (
                            ((s = e.subtract(d, r, T)),
                            (l = e.dot(s, v)) < 0 || l > S)
                        )
                            return;
                        if (
                            ((c = e.cross(s, m, R)),
                            (f = e.dot(E, c)) < 0 || l + f > S)
                        )
                            return;
                        h = e.dot(A, c) / S;
                    } else {
                        if (Math.abs(S) < o.EPSILON6) return;
                        var g = 1 / S;
                        if (
                            ((s = e.subtract(d, r, T)),
                            (l = e.dot(s, v) * g) < 0 || l > 1)
                        )
                            return;
                        if (
                            ((c = e.cross(s, m, R)),
                            (f = e.dot(E, c) * g) < 0 || l + f > 1)
                        )
                            return;
                        h = e.dot(A, c) * g;
                    }
                    return h;
                }),
                    (m.rayTriangle = function (t, n, a, i, o, u) {
                        var s = m.rayTriangleParametric(t, n, a, i, o);
                        if (r(s) && !(s < 0))
                            return (
                                r(u) || (u = new e()),
                                e.multiplyByScalar(t.direction, s, u),
                                e.add(t.origin, u, u)
                            );
                    });
                var A = new l();
                m.lineSegmentTriangle = function (t, n, a, i, o, u, s) {
                    var c = A;
                    e.clone(t, c.origin),
                        e.subtract(n, t, c.direction),
                        e.normalize(c.direction, c.direction);
                    var l = m.rayTriangleParametric(c, a, i, o, u);
                    if (!(!r(l) || l < 0 || l > e.distance(t, n)))
                        return (
                            r(s) || (s = new e()),
                            e.multiplyByScalar(c.direction, l, s),
                            e.add(c.origin, s, s)
                        );
                };
                var v = { root0: 0, root1: 0 };
                m.raySphere = function (e, t, n) {
                    if (((n = h(e, t, n)), r(n) && !(n.stop < 0)))
                        return (n.start = Math.max(n.start, 0)), n;
                };
                var S = new l();
                m.lineSegmentSphere = function (t, n, a, i) {
                    var o = S;
                    e.clone(t, o.origin);
                    var u = e.subtract(n, t, o.direction),
                        s = e.magnitude(u);
                    if (
                        (e.normalize(u, u),
                        (i = h(o, a, i)),
                        !(!r(i) || i.stop < 0 || i.start > s))
                    )
                        return (
                            (i.start = Math.max(i.start, 0)),
                            (i.stop = Math.min(i.stop, s)),
                            i
                        );
                };
                var g = new e(),
                    N = new e();
                m.rayEllipsoid = function (t, n) {
                    var r,
                        a,
                        o,
                        u,
                        s,
                        c = n.oneOverRadii,
                        l = e.multiplyComponents(c, t.origin, g),
                        f = e.multiplyComponents(c, t.direction, N),
                        h = e.magnitudeSquared(l),
                        d = e.dot(l, f);
                    if (h > 1) {
                        if (d >= 0) return;
                        var E = d * d;
                        if (
                            ((r = h - 1),
                            (a = e.magnitudeSquared(f)),
                            (o = a * r),
                            E < o)
                        )
                            return;
                        if (E > o) {
                            (u = d * d - o), (s = -d + Math.sqrt(u));
                            var m = s / a,
                                p = r / s;
                            return m < p ? new i(m, p) : { start: p, stop: m };
                        }
                        var _ = Math.sqrt(r / a);
                        return new i(_, _);
                    }
                    return h < 1
                        ? ((r = h - 1),
                          (a = e.magnitudeSquared(f)),
                          (o = a * r),
                          (u = d * d - o),
                          (s = -d + Math.sqrt(u)),
                          new i(0, s / a))
                        : d < 0
                          ? ((a = e.magnitudeSquared(f)), new i(0, -d / a))
                          : void 0;
                };
                var O = new e(),
                    w = new e(),
                    I = new e(),
                    M = new e(),
                    x = new e(),
                    C = new u(),
                    P = new u(),
                    D = new u(),
                    U = new u(),
                    L = new u(),
                    F = new u(),
                    b = new u(),
                    B = new e(),
                    z = new e(),
                    q = new t();
                m.grazingAltitudeLocation = function (t, n) {
                    var a = t.origin,
                        i = t.direction;
                    if (!e.equals(a, e.ZERO)) {
                        var s = n.geodeticSurfaceNormal(a, O);
                        if (e.dot(i, s) >= 0) return a;
                    }
                    var c = r(this.rayEllipsoid(t, n)),
                        l = n.transformPositionToScaledSpace(i, O),
                        f = e.normalize(l, l),
                        h = e.mostOrthogonalAxis(l, M),
                        d = e.normalize(e.cross(h, f, w), w),
                        m = e.normalize(e.cross(f, d, I), I),
                        p = C;
                    (p[0] = f.x),
                        (p[1] = f.y),
                        (p[2] = f.z),
                        (p[3] = d.x),
                        (p[4] = d.y),
                        (p[5] = d.z),
                        (p[6] = m.x),
                        (p[7] = m.y),
                        (p[8] = m.z);
                    var _ = u.transpose(p, P),
                        y = u.fromScale(n.radii, D),
                        T = u.fromScale(n.oneOverRadii, U),
                        R = L;
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
                        g = u.multiply(u.multiply(S, y, b), p, b),
                        N = u.multiplyByVector(S, a, x),
                        G = E(g, e.negate(N, O), 0, 0, 1),
                        V = G.length;
                    if (V > 0) {
                        for (
                            var W = e.clone(e.ZERO, z),
                                X = Number.NEGATIVE_INFINITY,
                                H = 0;
                            H < V;
                            ++H
                        ) {
                            A = u.multiplyByVector(
                                y,
                                u.multiplyByVector(p, G[H], B),
                                B,
                            );
                            var Y = e.normalize(e.subtract(A, a, M), M),
                                k = e.dot(Y, i);
                            k > X && ((X = k), (W = e.clone(A, W)));
                        }
                        var Z = n.cartesianToCartographic(W, q);
                        return (
                            (X = o.clamp(X, 0, 1)),
                            (v =
                                e.magnitude(e.subtract(W, a, M)) *
                                Math.sqrt(1 - X * X)),
                            (v = c ? -v : v),
                            (Z.height = v),
                            n.cartographicToCartesian(Z, new e())
                        );
                    }
                };
                var G = new e();
                return (
                    (m.lineSegmentPlane = function (t, n, a, i) {
                        r(i) || (i = new e());
                        var u = e.subtract(n, t, G),
                            s = a.normal,
                            c = e.dot(s, u);
                        if (!(Math.abs(c) < o.EPSILON6)) {
                            var l = e.dot(s, t),
                                f = -(a.distance + l) / c;
                            if (!(f < 0 || f > 1))
                                return (
                                    e.multiplyByScalar(u, f, i),
                                    e.add(t, i, i),
                                    i
                                );
                        }
                    }),
                    (m.trianglePlaneIntersection = function (t, n, r, a) {
                        var i = a.normal,
                            o = a.distance,
                            u = e.dot(i, t) + o < 0,
                            s = e.dot(i, n) + o < 0,
                            c = e.dot(i, r) + o < 0,
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
                                    m.lineSegmentPlane(t, n, a, f),
                                    m.lineSegmentPlane(t, r, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [0, 3, 4, 1, 2, 4, 1, 4, 3],
                                    }
                                );
                            if (s)
                                return (
                                    m.lineSegmentPlane(n, r, a, f),
                                    m.lineSegmentPlane(n, t, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [1, 3, 4, 2, 0, 4, 2, 4, 3],
                                    }
                                );
                            if (c)
                                return (
                                    m.lineSegmentPlane(r, t, a, f),
                                    m.lineSegmentPlane(r, n, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [2, 3, 4, 0, 1, 4, 0, 4, 3],
                                    }
                                );
                        } else if (2 === l) {
                            if (!u)
                                return (
                                    m.lineSegmentPlane(n, t, a, f),
                                    m.lineSegmentPlane(r, t, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [1, 2, 4, 1, 4, 3, 0, 3, 4],
                                    }
                                );
                            if (!s)
                                return (
                                    m.lineSegmentPlane(r, n, a, f),
                                    m.lineSegmentPlane(t, n, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [2, 0, 4, 2, 4, 3, 1, 3, 4],
                                    }
                                );
                            if (!c)
                                return (
                                    m.lineSegmentPlane(t, r, a, f),
                                    m.lineSegmentPlane(n, r, a, h),
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
            function (e, t, n, r, a, i, o, u, s, c, l, f) {
                'use strict';
                function h(e, t, n) {
                    var r = g;
                    r.length = e;
                    var a;
                    if (t === n) {
                        for (a = 0; a < e; a++) r[a] = t;
                        return r;
                    }
                    var i = n - t,
                        o = i / e;
                    for (a = 0; a < e; a++) {
                        var u = t + a * o;
                        r[a] = u;
                    }
                    return r;
                }
                function d(t, n, r, a, i, o, u, s) {
                    var c = a.scaleToGeodeticSurface(t, I),
                        l = a.scaleToGeodeticSurface(n, M),
                        f = E.numberOfPoints(t, n, r),
                        d = a.cartesianToCartographic(c, N),
                        m = a.cartesianToCartographic(l, O),
                        p = h(f, i, o);
                    x.setEndPoints(d, m);
                    var _ = x.surfaceDistance / f,
                        y = s;
                    d.height = i;
                    var T = a.cartographicToCartesian(d, w);
                    e.pack(T, u, y), (y += 3);
                    for (var R = 1; R < f; R++) {
                        var A = x.interpolateUsingSurfaceDistance(R * _, O);
                        (A.height = p[R]),
                            (T = a.cartographicToCartesian(A, w)),
                            e.pack(T, u, y),
                            (y += 3);
                    }
                    return y;
                }
                var E = {};
                E.numberOfPoints = function (t, n, r) {
                    var a = e.distance(t, n);
                    return Math.ceil(a / r);
                };
                var m = new t();
                E.extractHeights = function (e, t) {
                    for (
                        var n = e.length, r = new Array(n), a = 0;
                        a < n;
                        a++
                    ) {
                        var i = e[a];
                        r[a] = t.cartesianToCartographic(i, m).height;
                    }
                    return r;
                };
                var p = new l(),
                    _ = new e(),
                    y = new e(),
                    T = new f(e.UNIT_X, 0),
                    R = new e(),
                    A = new f(e.UNIT_X, 0),
                    v = new e(),
                    S = new e(),
                    g = [],
                    N = new t(),
                    O = new t(),
                    w = new e(),
                    I = new e(),
                    M = new e(),
                    x = new o();
                return (
                    (E.wrapLongitude = function (t, a) {
                        var i = [],
                            o = [];
                        if (r(t) && t.length > 0) {
                            a = n(a, l.IDENTITY);
                            var s = l.inverseTransformation(a, p),
                                c = l.multiplyByPoint(s, e.ZERO, _),
                                h = e.normalize(
                                    l.multiplyByPointAsVector(s, e.UNIT_Y, y),
                                    y,
                                ),
                                d = f.fromPointNormal(c, h, T),
                                E = e.normalize(
                                    l.multiplyByPointAsVector(s, e.UNIT_X, R),
                                    R,
                                ),
                                m = f.fromPointNormal(c, E, A),
                                g = 1;
                            i.push(e.clone(t[0]));
                            for (
                                var N = i[0], O = t.length, w = 1;
                                w < O;
                                ++w
                            ) {
                                var I = t[w];
                                if (
                                    f.getPointDistance(m, N) < 0 ||
                                    f.getPointDistance(m, I) < 0
                                ) {
                                    var M = u.lineSegmentPlane(N, I, d, v);
                                    if (r(M)) {
                                        var x = e.multiplyByScalar(h, 5e-9, S);
                                        f.getPointDistance(d, N) < 0 &&
                                            e.negate(x, x),
                                            i.push(e.add(M, x, new e())),
                                            o.push(g + 1),
                                            e.negate(x, x),
                                            i.push(e.add(M, x, new e())),
                                            (g = 1);
                                    }
                                }
                                i.push(e.clone(t[w])), g++, (N = I);
                            }
                            o.push(g);
                        }
                        return { positions: i, lengths: o };
                    }),
                    (E.generateArc = function (t) {
                        r(t) || (t = {});
                        var a = t.positions,
                            o = a.length,
                            u = n(t.ellipsoid, i.WGS84),
                            l = n(t.height, 0),
                            f = s(l);
                        if (o < 1) return [];
                        if (1 === o) {
                            var h = u.scaleToGeodeticSurface(a[0], I);
                            if (0 !== (l = f ? l[0] : l)) {
                                var m = u.geodeticSurfaceNormal(h, w);
                                e.multiplyByScalar(m, l, m), e.add(h, m, h);
                            }
                            return [h.x, h.y, h.z];
                        }
                        var p = t.minDistance;
                        if (!r(p)) {
                            var _ = n(t.granularity, c.RADIANS_PER_DEGREE);
                            p = c.chordLength(_, u.maximumRadius);
                        }
                        var y,
                            T = 0;
                        for (y = 0; y < o - 1; y++)
                            T += E.numberOfPoints(a[y], a[y + 1], p);
                        var R = 3 * (T + 1),
                            A = new Array(R),
                            v = 0;
                        for (y = 0; y < o - 1; y++) {
                            v = d(
                                a[y],
                                a[y + 1],
                                p,
                                u,
                                f ? l[y] : l,
                                f ? l[y + 1] : l,
                                A,
                                v,
                            );
                        }
                        g.length = 0;
                        var S = a[o - 1],
                            O = u.cartesianToCartographic(S, N);
                        O.height = f ? l[o - 1] : l;
                        var M = u.cartographicToCartesian(O, w);
                        return e.pack(M, A, R - 3), A;
                    }),
                    (E.generateCartesianArc = function (t) {
                        for (
                            var n = E.generateArc(t),
                                r = n.length / 3,
                                a = new Array(r),
                                i = 0;
                            i < r;
                            i++
                        )
                            a[i] = e.unpack(n, 3 * i);
                        return a;
                    }),
                    E
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
            'Core/AxisAlignedBoundingBox',
            [
                './Cartesian3',
                './Check',
                './defaultValue',
                './defined',
                './Intersect',
            ],
            function (e, t, n, r, a) {
                'use strict';
                function i(t, a, i) {
                    (this.minimum = e.clone(n(t, e.ZERO))),
                        (this.maximum = e.clone(n(a, e.ZERO))),
                        r(i)
                            ? (i = e.clone(i))
                            : ((i = e.add(this.minimum, this.maximum, new e())),
                              e.multiplyByScalar(i, 0.5, i)),
                        (this.center = i);
                }
                (i.fromPoints = function (t, n) {
                    if ((r(n) || (n = new i()), !r(t) || 0 === t.length))
                        return (
                            (n.minimum = e.clone(e.ZERO, n.minimum)),
                            (n.maximum = e.clone(e.ZERO, n.maximum)),
                            (n.center = e.clone(e.ZERO, n.center)),
                            n
                        );
                    for (
                        var a = t[0].x,
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
                            E = d.x,
                            m = d.y,
                            p = d.z;
                        (a = Math.min(E, a)),
                            (s = Math.max(E, s)),
                            (o = Math.min(m, o)),
                            (c = Math.max(m, c)),
                            (u = Math.min(p, u)),
                            (l = Math.max(p, l));
                    }
                    var _ = n.minimum;
                    (_.x = a), (_.y = o), (_.z = u);
                    var y = n.maximum;
                    (y.x = s), (y.y = c), (y.z = l);
                    var T = e.add(_, y, n.center);
                    return e.multiplyByScalar(T, 0.5, T), n;
                }),
                    (i.clone = function (t, n) {
                        if (r(t))
                            return r(n)
                                ? ((n.minimum = e.clone(t.minimum, n.minimum)),
                                  (n.maximum = e.clone(t.maximum, n.maximum)),
                                  (n.center = e.clone(t.center, n.center)),
                                  n)
                                : new i(t.minimum, t.maximum);
                    }),
                    (i.equals = function (t, n) {
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
                    (i.intersectPlane = function (t, n) {
                        o = e.subtract(t.maximum, t.minimum, o);
                        var r = e.multiplyByScalar(o, 0.5, o),
                            i = n.normal,
                            u =
                                r.x * Math.abs(i.x) +
                                r.y * Math.abs(i.y) +
                                r.z * Math.abs(i.z),
                            s = e.dot(t.center, i) + n.distance;
                        return s - u > 0
                            ? a.INSIDE
                            : s + u < 0
                              ? a.OUTSIDE
                              : a.INTERSECTING;
                    }),
                    (i.prototype.clone = function (e) {
                        return i.clone(this, e);
                    }),
                    (i.prototype.intersectPlane = function (e) {
                        return i.intersectPlane(this, e);
                    }),
                    (i.prototype.equals = function (e) {
                        return i.equals(this, e);
                    }),
                    i
                );
            },
        ),
        (function (e) {
            'use strict';
            e('ThirdParty/when', [], function () {
                function e(e, n, r, a) {
                    return t(e).then(n, r, a);
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
                              : (t = a(e)),
                        t
                    );
                }
                function n(t) {
                    return e(t, i);
                }
                function r(e) {
                    this.then = e;
                }
                function a(e) {
                    return new r(function (n) {
                        try {
                            return t(n ? n(e) : e);
                        } catch (e) {
                            return i(e);
                        }
                    });
                }
                function i(e) {
                    return new r(function (n, r) {
                        try {
                            return r ? t(r(e)) : i(e);
                        } catch (e) {
                            return i(e);
                        }
                    });
                }
                function o() {
                    function e(e, t, n) {
                        return h(e, t, n);
                    }
                    function n(e) {
                        return E(e);
                    }
                    function a(e) {
                        return E(i(e));
                    }
                    function u(e) {
                        return d(e);
                    }
                    var s, c, l, f, h, d, E;
                    return (
                        (c = new r(e)),
                        (s = {
                            then: e,
                            resolve: n,
                            reject: a,
                            progress: u,
                            promise: c,
                            resolver: { resolve: n, reject: a, progress: u },
                        }),
                        (l = []),
                        (f = []),
                        (h = function (e, t, n) {
                            var r, a;
                            return (
                                (r = o()),
                                (a =
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
                                    n.then(e, t).then(r.resolve, r.reject, a);
                                }),
                                f.push(a),
                                r.promise
                            );
                        }),
                        (d = function (e) {
                            return m(f, e), e;
                        }),
                        (E = function (e) {
                            return (
                                (e = t(e)),
                                (h = e.then),
                                (E = t),
                                (d = _),
                                m(l, e),
                                (f = l = A),
                                e
                            );
                        }),
                        s
                    );
                }
                function u(e) {
                    return e && 'function' == typeof e.then;
                }
                function s(t, n, r, a, i) {
                    return (
                        p(2, arguments),
                        e(t, function (t) {
                            function u(e) {
                                m(e);
                            }
                            function s(e) {
                                E(e);
                            }
                            var c, l, f, h, d, E, m, p, y, T;
                            if (
                                ((y = t.length >>> 0),
                                (c = Math.max(0, Math.min(n, y))),
                                (f = []),
                                (l = y - c + 1),
                                (h = []),
                                (d = o()),
                                c)
                            )
                                for (
                                    p = d.progress,
                                        m = function (e) {
                                            h.push(e),
                                                --l ||
                                                    ((E = m = _), d.reject(h));
                                        },
                                        E = function (e) {
                                            f.push(e),
                                                --c ||
                                                    ((E = m = _), d.resolve(f));
                                        },
                                        T = 0;
                                    T < y;
                                    ++T
                                )
                                    T in t && e(t[T], s, u, p);
                            else d.resolve(f);
                            return d.then(r, a, i);
                        })
                    );
                }
                function c(e, t, n, r) {
                    function a(e) {
                        return t ? t(e[0]) : e[0];
                    }
                    return s(e, 1, a, n, r);
                }
                function l(e, t, n, r) {
                    return p(1, arguments), h(e, y).then(t, n, r);
                }
                function f() {
                    return h(arguments, y);
                }
                function h(t, n) {
                    return e(t, function (t) {
                        var r, a, i, u, s, c;
                        if (((i = a = t.length >>> 0), (r = []), (c = o()), i))
                            for (
                                u = function (t, a) {
                                    e(t, n).then(function (e) {
                                        (r[a] = e), --i || c.resolve(r);
                                    }, c.reject);
                                },
                                    s = 0;
                                s < a;
                                s++
                            )
                                s in t ? u(t[s], s) : --i;
                        else c.resolve(r);
                        return c.promise;
                    });
                }
                function d(t, n) {
                    var r = R.call(arguments, 1);
                    return e(t, function (t) {
                        var a;
                        return (
                            (a = t.length),
                            (r[0] = function (t, r, i) {
                                return e(t, function (t) {
                                    return e(r, function (e) {
                                        return n(t, e, i, a);
                                    });
                                });
                            }),
                            T.apply(t, r)
                        );
                    });
                }
                function E(t, n, r) {
                    var a = arguments.length > 2;
                    return e(
                        t,
                        function (e) {
                            return (e = a ? r : e), n.resolve(e), e;
                        },
                        function (e) {
                            return n.reject(e), i(e);
                        },
                        n.progress,
                    );
                }
                function m(e, t) {
                    for (var n, r = 0; (n = e[r++]); ) n(t);
                }
                function p(e, t) {
                    for (var n, r = t.length; r > e; )
                        if (null != (n = t[--r]) && 'function' != typeof n)
                            throw new Error('arg ' + r + ' must be a function');
                }
                function _() {}
                function y(e) {
                    return e;
                }
                var T, R, A;
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
                    (e.chain = E),
                    (e.isPromise = u),
                    (r.prototype = {
                        always: function (e, t) {
                            return this.then(e, e, t);
                        },
                        otherwise: function (e) {
                            return this.then(A, e);
                        },
                        yield: function (e) {
                            return this.then(function () {
                                return e;
                            });
                        },
                        spread: function (e) {
                            return this.then(function (t) {
                                return l(t, function (t) {
                                    return e.apply(A, t);
                                });
                            });
                        },
                    }),
                    (R = [].slice),
                    (T =
                        [].reduce ||
                        function (e) {
                            var t, n, r, a, i;
                            if (
                                ((i = 0),
                                (t = Object(this)),
                                (a = t.length >>> 0),
                                (n = arguments),
                                n.length <= 1)
                            )
                                for (;;) {
                                    if (i in t) {
                                        r = t[i++];
                                        break;
                                    }
                                    if (++i >= a) throw new TypeError();
                                }
                            else r = n[1];
                            for (; i < a; ++i) i in t && (r = e(r, t[i], i, t));
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
                for (var r, a, i = 0, o = e.length - 1; i <= o; )
                    if (((r = ~~((i + o) / 2)), (a = n(e[r], t)) < 0))
                        i = r + 1;
                    else {
                        if (!(a > 0)) return r;
                        o = r - 1;
                    }
                return ~(o + 1);
            }
            return n;
        }),
        define('Core/EarthOrientationParametersSample', [], function () {
            'use strict';
            function e(e, t, n, r, a) {
                (this.xPoleWander = e),
                    (this.yPoleWander = t),
                    (this.xPoleOffset = n),
                    (this.yPoleOffset = r),
                    (this.ut1MinusUtc = a);
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
                    a = function (e, t, n, r) {
                        n || (n = ' ');
                        var a =
                            e.length >= t
                                ? ''
                                : Array((1 + t - e.length) >>> 0).join(n);
                        return r ? e + a : a + e;
                    },
                    i = function (e, t, n, r, i, o) {
                        var u = r - e.length;
                        return (
                            u > 0 &&
                                (e =
                                    n || !i
                                        ? a(e, r, o, n)
                                        : e.slice(0, t.length) +
                                          a('', u, '0', !0) +
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
                            (e = n + a(c.toString(t), u || 0, '0', !1)),
                            i(e, n, r, o, s)
                        );
                    },
                    u = function (e, t, n, r, a, o) {
                        return (
                            null != r && (e = e.slice(0, r)),
                            i(e, '', t, n, a, o)
                        );
                    },
                    s = function (e, r, s, c, l, f, h) {
                        var d, E, m, p, _;
                        if ('%%' == e) return '%';
                        for (
                            var y = !1,
                                T = '',
                                R = !1,
                                A = !1,
                                v = ' ',
                                S = s.length,
                                g = 0;
                            s && g < S;
                            g++
                        )
                            switch (s.charAt(g)) {
                                case ' ':
                                    T = ' ';
                                    break;
                                case '+':
                                    T = '+';
                                    break;
                                case '-':
                                    y = !0;
                                    break;
                                case "'":
                                    v = s.charAt(g + 1);
                                    break;
                                case '0':
                                    R = !0;
                                    break;
                                case '#':
                                    A = !0;
                            }
                        if (
                            ((c = c
                                ? '*' == c
                                    ? +t[n++]
                                    : '*' == c.charAt(0)
                                      ? +t[c.slice(1, -1)]
                                      : +c
                                : 0),
                            c < 0 && ((c = -c), (y = !0)),
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
                            (_ = r ? t[r.slice(0, -1)] : t[n++]),
                            h)
                        ) {
                            case 's':
                                return u(String(_), y, c, f, R, v);
                            case 'c':
                                return u(String.fromCharCode(+_), y, c, f, R);
                            case 'b':
                                return o(_, 2, A, y, c, f, R);
                            case 'o':
                                return o(_, 8, A, y, c, f, R);
                            case 'x':
                                return o(_, 16, A, y, c, f, R);
                            case 'X':
                                return o(_, 16, A, y, c, f, R).toUpperCase();
                            case 'u':
                                return o(_, 10, A, y, c, f, R);
                            case 'i':
                            case 'd':
                                return (
                                    (d = +_ || 0),
                                    (d = Math.round(d - (d % 1))),
                                    (E = d < 0 ? '-' : T),
                                    (_ =
                                        E + a(String(Math.abs(d)), f, '0', !1)),
                                    i(_, E, y, c, R)
                                );
                            case 'e':
                            case 'E':
                            case 'f':
                            case 'F':
                            case 'g':
                            case 'G':
                                return (
                                    (d = +_),
                                    (E = d < 0 ? '-' : T),
                                    (m = [
                                        'toExponential',
                                        'toFixed',
                                        'toPrecision',
                                    ]['efg'.indexOf(h.toLowerCase())]),
                                    (p = ['toString', 'toUpperCase'][
                                        'eEfFgG'.indexOf(h) % 2
                                    ]),
                                    (_ = E + Math.abs(d)[m](f)),
                                    i(_, E, y, c, R)[p]()
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
            function e(e, t, n, r, a, i, o, u) {
                (this.year = e),
                    (this.month = t),
                    (this.day = n),
                    (this.hour = r),
                    (this.minute = a),
                    (this.second = i),
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
            function (e, t, n, r, a, i, o, u, s, c) {
                'use strict';
                function l(e, t) {
                    return m.compare(e.julianDate, t.julianDate);
                }
                function f(e) {
                    y.julianDate = e;
                    var n = m.leapSeconds,
                        r = t(n, y, l);
                    r < 0 && (r = ~r), r >= n.length && (r = n.length - 1);
                    var a = n[r].offset;
                    if (r > 0) {
                        m.secondsDifference(n[r].julianDate, e) > a &&
                            (r--, (a = n[r].offset));
                    }
                    m.addSeconds(e, a, e);
                }
                function h(e, n) {
                    y.julianDate = e;
                    var r = m.leapSeconds,
                        a = t(r, y, l);
                    if ((a < 0 && (a = ~a), 0 === a))
                        return m.addSeconds(e, -r[0].offset, n);
                    if (a >= r.length)
                        return m.addSeconds(e, -r[a - 1].offset, n);
                    var i = m.secondsDifference(r[a].julianDate, e);
                    return 0 === i
                        ? m.addSeconds(e, -r[a].offset, n)
                        : i <= 1
                          ? void 0
                          : m.addSeconds(e, -r[--a].offset, n);
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
                function E(e, t, n, r, a, i, o) {
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
                        i +
                        (r * s.SECONDS_PER_HOUR +
                            a * s.SECONDS_PER_MINUTE +
                            o * s.SECONDS_PER_MILLISECOND);
                    return f >= 43200 && (l -= 1), [l, f];
                }
                function m(e, t, r) {
                    (this.dayNumber = void 0),
                        (this.secondsOfDay = void 0),
                        (e = n(e, 0)),
                        (t = n(t, 0)),
                        (r = n(r, c.UTC));
                    var a = 0 | e;
                    (t += (e - a) * s.SECONDS_PER_DAY),
                        d(a, t, this),
                        r === c.UTC && f(this);
                }
                var p = new i(),
                    _ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    y = new u(),
                    T = /^(\d{4})$/,
                    R = /^(\d{4})-(\d{2})$/,
                    A = /^(\d{4})-?(\d{3})$/,
                    v = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                    S = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                    g = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                    N = /^(\d{2})(\.\d+)?/.source + g.source,
                    O = /^(\d{2}):?(\d{2})(\.\d+)?/.source + g.source,
                    w = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + g.source;
                (m.fromGregorianDate = function (e, t) {
                    var n = E(
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
                        var n = E(
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
                            a,
                            i,
                            u = e.split('T'),
                            s = 1,
                            l = 1,
                            h = 0,
                            p = 0,
                            y = 0,
                            g = 0,
                            I = u[0],
                            M = u[1];
                        if (null !== (u = I.match(S)))
                            (n = +u[1]), (s = +u[2]), (l = +u[3]);
                        else if (null !== (u = I.match(R)))
                            (n = +u[1]), (s = +u[2]);
                        else if (null !== (u = I.match(T))) n = +u[1];
                        else {
                            var x;
                            if (null !== (u = I.match(A)))
                                (n = +u[1]), (x = +u[2]), (i = o(n));
                            else if (null !== (u = I.match(v))) {
                                n = +u[1];
                                var C = +u[2],
                                    P = +u[3] || 0,
                                    D = new Date(Date.UTC(n, 0, 4));
                                x = 7 * C + P - D.getUTCDay() - 3;
                            }
                            (a = new Date(Date.UTC(n, 0, 1))),
                                a.setUTCDate(x),
                                (s = a.getUTCMonth() + 1),
                                (l = a.getUTCDate());
                        }
                        i = o(n);
                        var U;
                        if (r(M)) {
                            (u = M.match(w)),
                                null !== u
                                    ? ((h = +u[1]),
                                      (p = +u[2]),
                                      (y = +u[3]),
                                      (g = 1e3 * +(u[4] || 0)),
                                      (U = 5))
                                    : ((u = M.match(O)),
                                      null !== u
                                          ? ((h = +u[1]),
                                            (p = +u[2]),
                                            (y = 60 * +(u[3] || 0)),
                                            (U = 4))
                                          : null !== (u = M.match(N)) &&
                                            ((h = +u[1]),
                                            (p = 60 * +(u[2] || 0)),
                                            (U = 3)));
                            var L = u[U],
                                F = +u[U + 1],
                                b = +(u[U + 2] || 0);
                            switch (L) {
                                case '+':
                                    (h -= F), (p -= b);
                                    break;
                                case '-':
                                    (h += F), (p += b);
                                    break;
                                case 'Z':
                                    break;
                                default:
                                    p += new Date(
                                        Date.UTC(n, s - 1, l, h, p),
                                    ).getTimezoneOffset();
                            }
                        }
                        var B = 60 === y;
                        for (B && y--; p >= 60; ) (p -= 60), h++;
                        for (; h >= 24; ) (h -= 24), l++;
                        for (a = i && 2 === s ? 29 : _[s - 1]; l > a; )
                            (l -= a),
                                s++,
                                s > 12 && ((s -= 12), n++),
                                (a = i && 2 === s ? 29 : _[s - 1]);
                        for (; p < 0; ) (p += 60), h--;
                        for (; h < 0; ) (h += 24), l--;
                        for (; l < 1; )
                            s--,
                                s < 1 && ((s += 12), n--),
                                (a = i && 2 === s ? 29 : _[s - 1]),
                                (l += a);
                        var z = E(n, s, l, h, p, y, g);
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
                var I = new m(0, 0, c.TAI);
                return (
                    (m.toGregorianDate = function (e, t) {
                        var n = !1,
                            a = h(e, I);
                        r(a) ||
                            (m.addSeconds(e, -1, I), (a = h(I, I)), (n = !0));
                        var o = a.dayNumber,
                            u = a.secondsOfDay;
                        u >= 43200 && (o += 1);
                        var c = (o + 68569) | 0,
                            l = ((4 * c) / 146097) | 0;
                        c = (c - (((146097 * l + 3) / 4) | 0)) | 0;
                        var f = ((4e3 * (c + 1)) / 1461001) | 0;
                        c = (c - (((1461 * f) / 4) | 0) + 31) | 0;
                        var d = ((80 * c) / 2447) | 0,
                            E = (c - (((2447 * d) / 80) | 0)) | 0;
                        c = (d / 11) | 0;
                        var p = (d + 2 - 12 * c) | 0,
                            _ = (100 * (l - 49) + f + c) | 0,
                            y = (u / s.SECONDS_PER_HOUR) | 0,
                            T = u - y * s.SECONDS_PER_HOUR,
                            R = (T / s.SECONDS_PER_MINUTE) | 0;
                        T -= R * s.SECONDS_PER_MINUTE;
                        var A = 0 | T,
                            v = (T - A) / s.SECONDS_PER_MILLISECOND;
                        return (
                            (y += 12),
                            y > 23 && (y -= 24),
                            n && (A += 1),
                            r(t)
                                ? ((t.year = _),
                                  (t.month = p),
                                  (t.day = E),
                                  (t.hour = y),
                                  (t.minute = R),
                                  (t.second = A),
                                  (t.millisecond = v),
                                  (t.isLeapSecond = n),
                                  t)
                                : new i(_, p, E, y, R, A, v, n)
                        );
                    }),
                    (m.toDate = function (e) {
                        var t = m.toGregorianDate(e, p),
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
                        var a,
                            i = m.toGregorianDate(t, p);
                        return r(n) || 0 === i.millisecond
                            ? r(n) && 0 !== n
                                ? ((a = (0.01 * i.millisecond)
                                      .toFixed(n)
                                      .replace('.', '')
                                      .slice(0, n)),
                                  e(
                                      '%04d-%02d-%02dT%02d:%02d:%02d.%sZ',
                                      i.year,
                                      i.month,
                                      i.day,
                                      i.hour,
                                      i.minute,
                                      i.second,
                                      a,
                                  ))
                                : e(
                                      '%04d-%02d-%02dT%02d:%02d:%02dZ',
                                      i.year,
                                      i.month,
                                      i.day,
                                      i.hour,
                                      i.minute,
                                      i.second,
                                  )
                            : ((a = (0.01 * i.millisecond)
                                  .toString()
                                  .replace('.', '')),
                              e(
                                  '%04d-%02d-%02dT%02d:%02d:%02d.%sZ',
                                  i.year,
                                  i.month,
                                  i.day,
                                  i.hour,
                                  i.minute,
                                  i.second,
                                  a,
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
                        y.julianDate = e;
                        var n = m.leapSeconds,
                            r = t(n, y, l);
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
                var a = new n.constructor();
                for (var i in n)
                    if (n.hasOwnProperty(i)) {
                        var o = n[i];
                        r && (o = t(o, r)), (a[i] = o);
                    }
                return a;
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
            function (e, t, n, r, a) {
                'use strict';
                function i(t) {
                    t = e(t, e.EMPTY_OBJECT);
                    var n = e(t.throttleByServer, !1),
                        i = n || e(t.throttle, !1);
                    (this.url = t.url),
                        (this.requestFunction = t.requestFunction),
                        (this.cancelFunction = t.cancelFunction),
                        (this.priorityFunction = t.priorityFunction),
                        (this.priority = e(t.priority, 0)),
                        (this.throttle = i),
                        (this.throttleByServer = n),
                        (this.type = e(t.type, a.OTHER)),
                        (this.serverKey = void 0),
                        (this.state = r.UNISSUED),
                        (this.deferred = void 0),
                        (this.cancelled = !1);
                }
                return (
                    (i.prototype.cancel = function () {
                        this.cancelled = !0;
                    }),
                    i
                );
            },
        ),
        define('Core/parseResponseHeaders', [], function () {
            'use strict';
            function e(e) {
                var t = {};
                if (!e) return t;
                for (var n = e.split('\r\n'), r = 0; r < n.length; ++r) {
                    var a = n[r],
                        i = a.indexOf(': ');
                    if (i > 0) {
                        var o = a.substring(0, i),
                            u = a.substring(i + 2);
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
                return i.test(t) ? t : e.toUpperCase();
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
                                .replace(a, t)),
                        this.path && (this.path = this.path.replace(a, t)),
                        this.query && (this.query = this.query.replace(a, t)),
                        this.fragment &&
                            (this.fragment = this.fragment.replace(a, t));
                });
            var a = /%[0-9a-z]{2}/gi,
                i = /[a-zA-Z0-9\-\._~]/,
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
                function a(e) {
                    (this._comparator = e.comparator),
                        (this._array = []),
                        (this._length = 0),
                        (this._maximumLength = void 0);
                }
                function i(e, t, n) {
                    var r = e[t];
                    (e[t] = e[n]), (e[n] = r);
                }
                return (
                    r(a.prototype, {
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
                    (a.prototype.reserve = function (e) {
                        (e = t(e, this._length)), (this._array.length = e);
                    }),
                    (a.prototype.heapify = function (e) {
                        e = t(e, 0);
                        for (
                            var n = this._length,
                                r = this._comparator,
                                a = this._array,
                                o = -1,
                                u = !0;
                            u;

                        ) {
                            var s = 2 * (e + 1),
                                c = s - 1;
                            (o = c < n && r(a[c], a[e]) < 0 ? c : e),
                                s < n && r(a[s], a[o]) < 0 && (o = s),
                                o !== e ? (i(a, o, e), (e = o)) : (u = !1);
                        }
                    }),
                    (a.prototype.resort = function () {
                        for (
                            var e = this._length, t = Math.ceil(e / 2);
                            t >= 0;
                            --t
                        )
                            this.heapify(t);
                    }),
                    (a.prototype.insert = function (e) {
                        var t = this._array,
                            r = this._comparator,
                            a = this._maximumLength,
                            o = this._length++;
                        for (o < t.length ? (t[o] = e) : t.push(e); 0 !== o; ) {
                            var u = Math.floor((o - 1) / 2);
                            if (!(r(t[o], t[u]) < 0)) break;
                            i(t, o, u), (o = u);
                        }
                        var s;
                        return (
                            n(a) &&
                                this._length > a &&
                                ((s = t[a]), (this._length = a)),
                            s
                        );
                    }),
                    (a.prototype.pop = function (e) {
                        if (((e = t(e, 0)), 0 !== this._length)) {
                            var n = this._array,
                                r = n[e];
                            return i(n, e, --this._length), this.heapify(e), r;
                        }
                    }),
                    a
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
            function (e, t, n, r, a, i, o, u, s, c) {
                'use strict';
                function l(e, t) {
                    return e.priority - t.priority;
                }
                function f() {}
                function h(e) {
                    a(e.priorityFunction) &&
                        (e.priority = e.priorityFunction());
                }
                function d(e) {
                    return N[e] < f.maximumRequestsPerServer;
                }
                function E(e) {
                    return (
                        e.state === c.UNISSUED &&
                            ((e.state = c.ISSUED), (e.deferred = t.defer())),
                        e.deferred.promise
                    );
                }
                function m(e) {
                    return function (t) {
                        e.state !== c.CANCELLED &&
                            (--A.numberOfActiveRequests,
                            --N[e.serverKey],
                            (e.state = c.RECEIVED),
                            e.deferred.resolve(t));
                    };
                }
                function p(e) {
                    return function (t) {
                        e.state !== c.CANCELLED &&
                            (++A.numberOfFailedRequests,
                            --A.numberOfActiveRequests,
                            --N[e.serverKey],
                            (e.state = c.FAILED),
                            e.deferred.reject(t));
                    };
                }
                function _(e) {
                    var t = E(e);
                    return (
                        (e.state = c.ACTIVE),
                        g.push(e),
                        ++A.numberOfActiveRequests,
                        ++A.numberOfActiveRequestsEver,
                        ++N[e.serverKey],
                        e.requestFunction().then(m(e)).otherwise(p(e)),
                        t
                    );
                }
                function y(e) {
                    var t = e.state === c.ACTIVE;
                    (e.state = c.CANCELLED),
                        ++A.numberOfCancelledRequests,
                        e.deferred.reject(),
                        t &&
                            (--A.numberOfActiveRequests,
                            --N[e.serverKey],
                            ++A.numberOfCancelledActiveRequests),
                        a(e.cancelFunction) && e.cancelFunction();
                }
                function T() {
                    (A.numberOfAttemptedRequests = 0),
                        (A.numberOfCancelledRequests = 0),
                        (A.numberOfCancelledActiveRequests = 0);
                }
                function R() {
                    f.debugShowStatistics &&
                        (A.numberOfAttemptedRequests > 0 &&
                            console.log(
                                'Number of attempted requests: ' +
                                    A.numberOfAttemptedRequests,
                            ),
                        A.numberOfActiveRequests > 0 &&
                            console.log(
                                'Number of active requests: ' +
                                    A.numberOfActiveRequests,
                            ),
                        A.numberOfCancelledRequests > 0 &&
                            console.log(
                                'Number of cancelled requests: ' +
                                    A.numberOfCancelledRequests,
                            ),
                        A.numberOfCancelledActiveRequests > 0 &&
                            console.log(
                                'Number of cancelled active requests: ' +
                                    A.numberOfCancelledActiveRequests,
                            ),
                        A.numberOfFailedRequests > 0 &&
                            console.log(
                                'Number of failed requests: ' +
                                    A.numberOfFailedRequests,
                            ),
                        T());
                }
                var A = {
                        numberOfAttemptedRequests: 0,
                        numberOfActiveRequests: 0,
                        numberOfCancelledRequests: 0,
                        numberOfCancelledActiveRequests: 0,
                        numberOfFailedRequests: 0,
                        numberOfActiveRequestsEver: 0,
                    },
                    v = 20,
                    S = new o({ comparator: l });
                (S.maximumLength = v), S.reserve(v);
                var g = [],
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
                    i(f, {
                        statistics: {
                            get: function () {
                                return A;
                            },
                        },
                        priorityHeapLength: {
                            get: function () {
                                return v;
                            },
                            set: function (e) {
                                if (e < v)
                                    for (; S.length > e; ) {
                                        var t = S.pop();
                                        y(t);
                                    }
                                (v = e), (S.maximumLength = e), S.reserve(e);
                            },
                        },
                    }),
                    (f.update = function () {
                        var e,
                            t,
                            n = 0,
                            r = g.length;
                        for (e = 0; e < r; ++e)
                            (t = g[e]),
                                t.cancelled && y(t),
                                t.state === c.ACTIVE
                                    ? n > 0 && (g[e - n] = t)
                                    : ++n;
                        g.length -= n;
                        var a = S.internalArray,
                            i = S.length;
                        for (e = 0; e < i; ++e) h(a[e]);
                        S.resort();
                        for (
                            var o = Math.max(f.maximumRequests - g.length, 0),
                                u = 0;
                            u < o && S.length > 0;

                        )
                            (t = S.pop()),
                                t.cancelled
                                    ? y(t)
                                    : !t.throttleByServer || d(t.serverKey)
                                      ? (_(t), ++u)
                                      : y(t);
                        R();
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
                        var i = N[r];
                        return a(i) || (N[r] = 0), r;
                    }),
                    (f.request = function (e) {
                        if (s(e.url) || u(e.url))
                            return (e.state = c.RECEIVED), e.requestFunction();
                        if (
                            (++A.numberOfAttemptedRequests,
                            a(e.serverKey) ||
                                (e.serverKey = f.getServerKey(e.url)),
                            !f.throttleRequests || !e.throttle)
                        )
                            return _(e);
                        if (
                            !(g.length >= f.maximumRequests) &&
                            (!e.throttleByServer || d(e.serverKey))
                        ) {
                            h(e);
                            var t = S.insert(e);
                            if (a(t)) {
                                if (t === e) return;
                                y(t);
                            }
                            return E(e);
                        }
                    }),
                    (f.clearForSpecs = function () {
                        for (; S.length > 0; ) {
                            y(S.pop());
                        }
                        for (var e = g.length, t = 0; t < e; ++t) y(g[t]);
                        (g.length = 0),
                            (N = {}),
                            (A.numberOfAttemptedRequests = 0),
                            (A.numberOfActiveRequests = 0),
                            (A.numberOfCancelledRequests = 0),
                            (A.numberOfCancelledActiveRequests = 0),
                            (A.numberOfFailedRequests = 0),
                            (A.numberOfActiveRequestsEver = 0);
                    }),
                    (f.numberOfActiveRequestsByServer = function (e) {
                        return N[e];
                    }),
                    (f.requestHeap = S),
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
                    var a = r.getAuthority();
                    if (t(a)) {
                        if (-1 !== a.indexOf('@')) {
                            a = a.split('@')[1];
                        }
                        if (-1 === a.indexOf(':')) {
                            var i = r.getScheme();
                            if (
                                (t(i) ||
                                    ((i = window.location.protocol),
                                    (i = i.substring(0, i.length - 1))),
                                'http' === i)
                            )
                                a += ':80';
                            else {
                                if ('https' !== i) return;
                                a += ':443';
                            }
                        }
                        return a;
                    }
                }
                var a = {},
                    i = {};
                return (
                    (a.add = function (e, n) {
                        var r = e.toLowerCase() + ':' + n;
                        t(i[r]) || (i[r] = !0);
                    }),
                    (a.remove = function (e, n) {
                        var r = e.toLowerCase() + ':' + n;
                        t(i[r]) && delete i[r];
                    }),
                    (a.contains = function (e) {
                        var n = r(e);
                        return !(!t(n) || !t(i[n]));
                    }),
                    (a.clear = function () {
                        i = {};
                    }),
                    a
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
            function (e, t, n, r, a, i, o, u, s, c) {
                'use strict';
                function l(t) {
                    t = n(t, n.EMPTY_OBJECT);
                    var a = t.url,
                        o = t.responseType,
                        s = n(t.method, 'GET'),
                        c = t.data,
                        f = t.headers,
                        h = t.overrideMimeType;
                    a = n(a, t.url);
                    var d = r(t.request) ? t.request : new i();
                    return (
                        (d.url = a),
                        (d.requestFunction = function () {
                            var t = e.defer(),
                                n = l.load(a, o, s, c, f, t, h);
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
                            a = new Uint8Array(r),
                            i = 0;
                        i < n.length;
                        i++
                    )
                        a[i] = n.charCodeAt(i);
                    return r;
                }
                function d(e, t) {
                    t = n(t, '');
                    var r = e[1],
                        a = !!e[2],
                        i = e[3];
                    switch (t) {
                        case '':
                        case 'text':
                            return f(a, i);
                        case 'arraybuffer':
                            return h(a, i);
                        case 'blob':
                            var o = h(a, i);
                            return new Blob([o], { type: r });
                        case 'document':
                            return new DOMParser().parseFromString(f(a, i), r);
                        case 'json':
                            return JSON.parse(f(a, i));
                    }
                }
                var E = /^data:(.*?)(;base64)?,(.*)$/;
                return (
                    (l.load = function (e, t, n, a, i, u, l) {
                        var f = E.exec(e);
                        if (null !== f) return void u.resolve(d(f, t));
                        var h = new XMLHttpRequest();
                        if (
                            (c.contains(e) && (h.withCredentials = !0),
                            r(l) &&
                                r(h.overrideMimeType) &&
                                h.overrideMimeType(l),
                            h.open(n, e, !0),
                            r(i))
                        )
                            for (var m in i)
                                i.hasOwnProperty(m) &&
                                    h.setRequestHeader(m, i[m]);
                        r(t) && (h.responseType = t);
                        var p = !1;
                        return (
                            'string' == typeof e &&
                                (p = 0 === e.indexOf('file://')),
                            (h.onload = function () {
                                if (
                                    (h.status < 200 || h.status >= 300) &&
                                    (!p || 0 !== h.status)
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
                            h.send(a),
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
                function a(n, a, o) {
                    t(a)
                        ? t(a.Accept) || ((a = e(a)), (a.Accept = i.Accept))
                        : (a = i);
                    var u = r(n, a, o);
                    if (t(u))
                        return u.then(function (e) {
                            return JSON.parse(e);
                        });
                }
                var i = { Accept: 'application/json,*/*;q=0.01' };
                return a;
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
            function (e, t, n, r, a, i, o, u, s, c, l, f) {
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
                        E(this, t.data);
                    else if (r(t.url)) {
                        var a = this;
                        this._downloadPromise = e(
                            s(t.url),
                            function (e) {
                                E(a, e);
                            },
                            function () {
                                a._dataError =
                                    'An error occurred while retrieving the EOP data from the URL ' +
                                    t.url +
                                    '.';
                            },
                        );
                    } else
                        E(this, {
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
                function E(e, n) {
                    if (!r(n.columnNames))
                        return void (e._dataError =
                            'Error in loaded EOP data: The columnNames property is required.');
                    if (!r(n.samples))
                        return void (e._dataError =
                            'Error in loaded EOP data: The samples property is required.');
                    var a = n.columnNames.indexOf('modifiedJulianDateUtc'),
                        i = n.columnNames.indexOf('xPoleWanderRadians'),
                        s = n.columnNames.indexOf('yPoleWanderRadians'),
                        c = n.columnNames.indexOf('ut1MinusUtcSeconds'),
                        h = n.columnNames.indexOf(
                            'xCelestialPoleOffsetRadians',
                        ),
                        E = n.columnNames.indexOf(
                            'yCelestialPoleOffsetRadians',
                        ),
                        m = n.columnNames.indexOf('taiMinusUtcSeconds');
                    if (
                        a < 0 ||
                        i < 0 ||
                        s < 0 ||
                        c < 0 ||
                        h < 0 ||
                        E < 0 ||
                        m < 0
                    )
                        return void (e._dataError =
                            'Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns');
                    var p = (e._samples = n.samples),
                        _ = (e._dates = []);
                    (e._dateColumn = a),
                        (e._xPoleWanderRadiansColumn = i),
                        (e._yPoleWanderRadiansColumn = s),
                        (e._ut1MinusUtcSecondsColumn = c),
                        (e._xCelestialPoleOffsetRadiansColumn = h),
                        (e._yCelestialPoleOffsetRadiansColumn = E),
                        (e._taiMinusUtcSecondsColumn = m),
                        (e._columnCount = n.columnNames.length),
                        (e._lastIndex = void 0);
                    for (
                        var y, T = e._addNewLeapSeconds, R = 0, A = p.length;
                        R < A;
                        R += e._columnCount
                    ) {
                        var v = p[R + a],
                            S = p[R + m],
                            g = v + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                            N = new o(g, S, f.TAI);
                        if ((_.push(N), T)) {
                            if (S !== y && r(y)) {
                                var O = o.leapSeconds,
                                    w = t(O, N, d);
                                if (w < 0) {
                                    var I = new u(N, S);
                                    O.splice(~w, 0, I);
                                }
                            }
                            y = S;
                        }
                    }
                }
                function m(e, t, n, r, a) {
                    var i = n * r;
                    (a.xPoleWander = t[i + e._xPoleWanderRadiansColumn]),
                        (a.yPoleWander = t[i + e._yPoleWanderRadiansColumn]),
                        (a.xPoleOffset =
                            t[i + e._xCelestialPoleOffsetRadiansColumn]),
                        (a.yPoleOffset =
                            t[i + e._yCelestialPoleOffsetRadiansColumn]),
                        (a.ut1MinusUtc = t[i + e._ut1MinusUtcSecondsColumn]);
                }
                function p(e, t, n) {
                    return t + e * (n - t);
                }
                function _(e, t, n, r, a, i, u) {
                    var s = e._columnCount;
                    if (i > t.length - 1)
                        return (
                            (u.xPoleWander = 0),
                            (u.yPoleWander = 0),
                            (u.xPoleOffset = 0),
                            (u.yPoleOffset = 0),
                            (u.ut1MinusUtc = 0),
                            u
                        );
                    var c = t[a],
                        l = t[i];
                    if (c.equals(l) || r.equals(c)) return m(e, n, a, s, u), u;
                    if (r.equals(l)) return m(e, n, i, s, u), u;
                    var f =
                            o.secondsDifference(r, c) /
                            o.secondsDifference(l, c),
                        h = a * s,
                        d = i * s,
                        E = n[h + e._ut1MinusUtcSecondsColumn],
                        _ = n[d + e._ut1MinusUtcSecondsColumn],
                        y = _ - E;
                    if (y > 0.5 || y < -0.5) {
                        var T = n[h + e._taiMinusUtcSecondsColumn],
                            R = n[d + e._taiMinusUtcSecondsColumn];
                        T !== R && (l.equals(r) ? (E = _) : (_ -= R - T));
                    }
                    return (
                        (u.xPoleWander = p(
                            f,
                            n[h + e._xPoleWanderRadiansColumn],
                            n[d + e._xPoleWanderRadiansColumn],
                        )),
                        (u.yPoleWander = p(
                            f,
                            n[h + e._yPoleWanderRadiansColumn],
                            n[d + e._yPoleWanderRadiansColumn],
                        )),
                        (u.xPoleOffset = p(
                            f,
                            n[h + e._xCelestialPoleOffsetRadiansColumn],
                            n[d + e._xCelestialPoleOffsetRadiansColumn],
                        )),
                        (u.yPoleOffset = p(
                            f,
                            n[h + e._yCelestialPoleOffsetRadiansColumn],
                            n[d + e._yCelestialPoleOffsetRadiansColumn],
                        )),
                        (u.ut1MinusUtc = p(f, E, _)),
                        u
                    );
                }
                return (
                    (h.NONE = i({
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
                                    : (t = new a(0, 0, 0, 0, 0)),
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
                                (r(n) || (n = new a(0, 0, 0, 0, 0)),
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
                            var i = this._dates,
                                u = this._lastIndex,
                                s = 0,
                                l = 0;
                            if (r(u)) {
                                var f = i[u],
                                    h = i[u + 1],
                                    d = o.lessThanOrEquals(f, e),
                                    E = !r(h),
                                    m = E || o.greaterThanOrEquals(h, e);
                                if (d && m)
                                    return (
                                        (s = u),
                                        !E && h.equals(e) && ++s,
                                        (l = s + 1),
                                        _(this, i, this._samples, e, s, l, n),
                                        n
                                    );
                            }
                            var p = t(i, e, o.compare, this._dateColumn);
                            return (
                                p >= 0
                                    ? (p < i.length - 1 &&
                                          i[p + 1].equals(e) &&
                                          ++p,
                                      (s = p),
                                      (l = p))
                                    : ((l = ~p), (s = l - 1) < 0 && (s = 0)),
                                (this._lastIndex = s),
                                _(this, i, this._samples, e, s, l, n),
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
                function a(n, r) {
                    r = t(r, document.location.href);
                    var a = new e(r);
                    return new e(n).resolve(a).toString();
                }
                return a;
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
                function a(r, a, i) {
                    if (
                        ((i = t(i, !0)),
                        r instanceof e || (r = new e(r)),
                        a instanceof e || (a = new e(a)),
                        'data' === r.scheme)
                    )
                        return r.toString();
                    if ('data' === a.scheme) return a.toString();
                    n(a.authority) &&
                        !n(a.scheme) &&
                        ('undefined' != typeof document &&
                        n(document.location) &&
                        n(document.location.href)
                            ? (a.scheme = new e(document.location.href).scheme)
                            : (a.scheme = r.scheme));
                    var o = r;
                    a.isAbsolute() && (o = a);
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
                                ? i
                                    ? r.path.replace(/\/?$/, '/') +
                                      a.path.replace(/^\/?/g, '')
                                    : r.path + a.path
                                : a.path);
                    var s = n(r.query),
                        c = n(a.query);
                    s && c
                        ? (u += '?' + r.query + '&' + a.query)
                        : s && !c
                          ? (u += '?' + r.query)
                          : !s && c && (u += '?' + a.query);
                    var l = n(a.fragment);
                    return (
                        n(r.fragment) && !l
                            ? (u += '#' + r.fragment)
                            : l && (u += '#' + a.fragment),
                        u
                    );
                }
                return a;
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
            function (e, t, n, r, a, i) {
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
                            a = E.exec(r);
                        if (null !== a) return a[1];
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
                    return i.toUrl('../' + e);
                }
                function c(e) {
                    return a(u(), e);
                }
                function l(e) {
                    t(h) ||
                        (h =
                            t(define.amd) &&
                            !define.amd.toUrlUndefined &&
                            t(i.toUrl)
                                ? s
                                : c),
                        t(d) || (d = document.createElement('a'));
                    var n = h(e);
                    return (d.href = n), (d.href = d.href), d.href;
                }
                var f,
                    h,
                    d,
                    E = /((?:.*\/)|^)cesium[\w-]*\.js(?:\W|$)/i;
                return (
                    (l._cesiumScriptRegex = E),
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
            function (e, t, n, r, a, i, o, u) {
                'use strict';
                function s(e) {
                    (e = n(e, n.EMPTY_OBJECT)),
                        (this._xysFileUrlTemplate = e.xysFileUrlTemplate),
                        (this._interpolationOrder = n(e.interpolationOrder, 9)),
                        (this._sampleZeroJulianEphemerisDate = n(
                            e.sampleZeroJulianEphemerisDate,
                            2442396.5,
                        )),
                        (this._sampleZeroDateTT = new i(
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
                            a = (this._xTable = new Array(t + 1)),
                            o = Math.pow(this._stepSizeDays, t),
                            s = 0;
                        s <= t;
                        ++s
                    ) {
                        (r[s] = o), (a[s] = s * this._stepSizeDays);
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
                        i.daysDifference(r, e._sampleZeroDateTT)
                    );
                }
                function l(n, a) {
                    if (n._chunkDownloadsInProgress[a])
                        return n._chunkDownloadsInProgress[a];
                    var i = e.defer();
                    n._chunkDownloadsInProgress[a] = i;
                    var u,
                        s = n._xysFileUrlTemplate;
                    return (
                        (u = r(s)
                            ? s.replace('{0}', a)
                            : t(
                                  'Assets/IAU2006_XYS/IAU2006_XYS_' +
                                      a +
                                      '.json',
                              )),
                        e(o(u), function (e) {
                            n._chunkDownloadsInProgress[a] = !1;
                            for (
                                var t = n._samples,
                                    r = e.samples,
                                    o = a * n._samplesPerXysFile * 3,
                                    u = 0,
                                    s = r.length;
                                u < s;
                                ++u
                            )
                                t[o + u] = r[u];
                            i.resolve();
                        }),
                        i.promise
                    );
                }
                var f = new i(0, 0, u.TAI);
                return (
                    (s.prototype.preload = function (t, n, r, a) {
                        var i = c(this, t, n),
                            o = c(this, r, a),
                            u =
                                (i / this._stepSizeDays -
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
                                E = f;
                            E <= h;
                            ++E
                        )
                            d.push(l(this, E));
                        return e.all(d);
                    }),
                    (s.prototype.computeXysRadians = function (e, t, n) {
                        var i = c(this, e, t);
                        if (!(i < 0)) {
                            var o = (i / this._stepSizeDays) | 0;
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
                                        : (n = new a(0, 0, 0));
                                    var E,
                                        m,
                                        p = i - s * this._stepSizeDays,
                                        _ = this._work,
                                        y = this._denominators,
                                        T = this._coef,
                                        R = this._xTable;
                                    for (E = 0; E <= u; ++E) _[E] = p - R[E];
                                    for (E = 0; E <= u; ++E) {
                                        for (T[E] = 1, m = 0; m <= u; ++m)
                                            m !== E && (T[E] *= _[m]);
                                        T[E] *= y[E];
                                        var A = 3 * (s + E);
                                        (n.x += T[E] * d[A++]),
                                            (n.y += T[E] * d[A++]),
                                            (n.s += T[E] * d[A]);
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
                        f = l.z * o,
                        h = Math.cos(i);
                    return r(a)
                        ? ((a.x = u), (a.y = s), (a.z = f), (a.w = h), a)
                        : new c(u, s, f, h);
                };
                var f = [1, 2, 0],
                    h = new Array(3);
                c.fromRotationMatrix = function (e, t) {
                    var n,
                        a,
                        i,
                        o,
                        u,
                        l = e[s.COLUMN0ROW0],
                        d = e[s.COLUMN1ROW1],
                        E = e[s.COLUMN2ROW2],
                        m = l + d + E;
                    if (m > 0)
                        (n = Math.sqrt(m + 1)),
                            (u = 0.5 * n),
                            (n = 0.5 / n),
                            (a = (e[s.COLUMN1ROW2] - e[s.COLUMN2ROW1]) * n),
                            (i = (e[s.COLUMN2ROW0] - e[s.COLUMN0ROW2]) * n),
                            (o = (e[s.COLUMN0ROW1] - e[s.COLUMN1ROW0]) * n);
                    else {
                        var p = f,
                            _ = 0;
                        d > l && (_ = 1), E > l && E > d && (_ = 2);
                        var y = p[_],
                            T = p[y];
                        n = Math.sqrt(
                            e[s.getElementIndex(_, _)] -
                                e[s.getElementIndex(y, y)] -
                                e[s.getElementIndex(T, T)] +
                                1,
                        );
                        var R = h;
                        (R[_] = 0.5 * n),
                            (n = 0.5 / n),
                            (u =
                                (e[s.getElementIndex(T, y)] -
                                    e[s.getElementIndex(y, T)]) *
                                n),
                            (R[y] =
                                (e[s.getElementIndex(y, _)] +
                                    e[s.getElementIndex(_, y)]) *
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
                var d = new c(),
                    E = new c(),
                    m = new c(),
                    p = new c();
                c.fromHeadingPitchRoll = function (t, n) {
                    return (
                        (p = c.fromAxisAngle(e.UNIT_X, t.roll, d)),
                        (m = c.fromAxisAngle(e.UNIT_Y, -t.pitch, n)),
                        (n = c.multiply(m, p, m)),
                        (E = c.fromAxisAngle(e.UNIT_Z, -t.heading, d)),
                        c.multiply(E, n, n)
                    );
                };
                var _ = new e(),
                    y = new e(),
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
                        r(o) || (o = new c()), e.fromArray(t, 0, y);
                        var u = e.magnitude(y);
                        return (
                            c.unpack(n, 4 * i, R),
                            0 === u
                                ? c.clone(c.IDENTITY, T)
                                : c.fromAxisAngle(y, u, T),
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
                            f = o * u + r * l + a * c - i * s,
                            h = o * s - r * c + a * l + i * u,
                            d = o * c + r * s - a * u + i * l,
                            E = o * l - r * u - a * s - i * c;
                        return (n.x = f), (n.y = h), (n.z = d), (n.w = E), n;
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
                    g = new c(),
                    N = new c();
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
                        (g = c.multiplyByScalar(e, Math.sin((1 - n) * o), g)),
                        (N = c.multiplyByScalar(i, Math.sin(n * o), N)),
                        (r = c.add(g, N, r)),
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
                var O = new e(),
                    w = new e(),
                    I = new c(),
                    M = new c();
                (c.computeInnerQuadrangle = function (t, n, r, a) {
                    var i = c.conjugate(n, I);
                    c.multiply(i, r, M);
                    var o = c.log(M, O);
                    c.multiply(i, t, M);
                    var u = c.log(M, w);
                    return (
                        e.add(o, u, o),
                        e.multiplyByScalar(o, 0.25, o),
                        e.negate(o, o),
                        c.exp(o, I),
                        c.multiply(n, I, a)
                    );
                }),
                    (c.squad = function (e, t, n, r, a, i) {
                        var o = c.slerp(e, t, a, I),
                            u = c.slerp(n, r, a, M);
                        return c.slerp(o, u, 2 * a * (1 - a), i);
                    });
                for (
                    var x = new c(),
                        C = 1.9011074535173003,
                        P = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        D = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        U = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        L = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        F = 0;
                    F < 7;
                    ++F
                ) {
                    var b = F + 1,
                        B = 2 * b + 1;
                    (P[F] = 1 / (b * B)), (D[F] = b / B);
                }
                return (
                    (P[7] = C / 136),
                    (D[7] = (8 * C) / 17),
                    (c.fastSlerp = function (e, t, n, r) {
                        var a,
                            i = c.dot(e, t);
                        i >= 0 ? (a = 1) : ((a = -1), (i = -i));
                        for (
                            var o = i - 1,
                                u = 1 - n,
                                s = n * n,
                                l = u * u,
                                f = 7;
                            f >= 0;
                            --f
                        )
                            (U[f] = (P[f] * s - D[f]) * o),
                                (L[f] = (P[f] * l - D[f]) * o);
                        var h =
                                a *
                                n *
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
                            d =
                                u *
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
                            E = c.multiplyByScalar(e, d, x);
                        return c.multiplyByScalar(t, h, r), c.add(E, r, r);
                    }),
                    (c.fastSquad = function (e, t, n, r, a, i) {
                        var o = c.fastSlerp(e, t, a, I),
                            u = c.fastSlerp(n, r, a, M);
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
                a,
                i,
                o,
                u,
                s,
                c,
                l,
                f,
                h,
                d,
                E,
                m,
                p,
                _,
                y,
                T,
            ) {
                'use strict';
                var R = {},
                    A = {
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
                    v = {
                        north: [-1, 0, 0],
                        east: [0, 1, 0],
                        up: [0, 0, 1],
                        south: [1, 0, 0],
                        west: [0, -1, 0],
                        down: [0, 0, -1],
                    },
                    S = {},
                    g = {
                        east: new n(),
                        north: new n(),
                        up: new n(),
                        west: new n(),
                        south: new n(),
                        down: new n(),
                    },
                    N = new n(),
                    O = new n(),
                    w = new n();
                (R.localFrameToFixedFrameGenerator = function (e, t) {
                    if (!A.hasOwnProperty(e) || !A[e].hasOwnProperty(t))
                        throw new s(
                            'firstAxis and secondAxis must be east, north, up, west, south or down.',
                        );
                    var r,
                        a = A[e][t],
                        i = e + t;
                    return (
                        u(S[i])
                            ? (r = S[i])
                            : ((r = function (r, i, s) {
                                  if (
                                      (u(s) || (s = new _()),
                                      m.equalsEpsilon(r.x, 0, m.EPSILON14) &&
                                          m.equalsEpsilon(r.y, 0, m.EPSILON14))
                                  ) {
                                      var c = m.sign(r.z);
                                      n.unpack(v[e], 0, N),
                                          'east' !== e &&
                                              'west' !== e &&
                                              n.multiplyByScalar(N, c, N),
                                          n.unpack(v[t], 0, O),
                                          'east' !== t &&
                                              'west' !== t &&
                                              n.multiplyByScalar(O, c, O),
                                          n.unpack(v[a], 0, w),
                                          'east' !== a &&
                                              'west' !== a &&
                                              n.multiplyByScalar(w, c, w);
                                  } else {
                                      (i = o(i, f.WGS84)),
                                          i.geodeticSurfaceNormal(r, g.up);
                                      var l = g.up,
                                          h = g.east;
                                      (h.x = -r.y),
                                          (h.y = r.x),
                                          (h.z = 0),
                                          n.normalize(h, g.east),
                                          n.cross(l, h, g.north),
                                          n.multiplyByScalar(g.up, -1, g.down),
                                          n.multiplyByScalar(
                                              g.east,
                                              -1,
                                              g.west,
                                          ),
                                          n.multiplyByScalar(
                                              g.north,
                                              -1,
                                              g.south,
                                          ),
                                          (N = g[e]),
                                          (O = g[t]),
                                          (w = g[a]);
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
                                      (s[8] = w.x),
                                      (s[9] = w.y),
                                      (s[10] = w.z),
                                      (s[11] = 0),
                                      (s[12] = r.x),
                                      (s[13] = r.y),
                                      (s[14] = r.z),
                                      (s[15] = 1),
                                      s
                                  );
                              }),
                              (S[i] = r)),
                        r
                    );
                }),
                    (R.eastNorthUpToFixedFrame =
                        R.localFrameToFixedFrameGenerator('east', 'north')),
                    (R.northEastDownToFixedFrame =
                        R.localFrameToFixedFrameGenerator('north', 'east')),
                    (R.northUpEastToFixedFrame =
                        R.localFrameToFixedFrameGenerator('north', 'up')),
                    (R.northWestUpToFixedFrame =
                        R.localFrameToFixedFrameGenerator('north', 'west'));
                var I = new y(),
                    M = new n(1, 1, 1),
                    x = new _();
                R.headingPitchRollToFixedFrame = function (e, t, r, a, i) {
                    a = o(a, R.eastNorthUpToFixedFrame);
                    var u = y.fromHeadingPitchRoll(t, I),
                        s = _.fromTranslationQuaternionRotationScale(
                            n.ZERO,
                            u,
                            M,
                            x,
                        );
                    return (i = a(e, r, i)), _.multiply(i, s, i);
                };
                var C = new _(),
                    P = new p();
                R.headingPitchRollQuaternion = function (e, t, n, r, a) {
                    var i = R.headingPitchRollToFixedFrame(e, t, n, r, C),
                        o = _.getRotation(i, P);
                    return y.fromRotationMatrix(o, a);
                };
                var D = m.TWO_PI / 86400,
                    U = new E();
                (R.computeTemeToPseudoFixedMatrix = function (e, t) {
                    U = E.addSeconds(e, -E.computeTaiMinusUtc(e), U);
                    var n,
                        r = U.dayNumber,
                        a = U.secondsOfDay,
                        i = r - 2451545;
                    n =
                        a >= 43200
                            ? (i + 0.5) / T.DAYS_PER_JULIAN_CENTURY
                            : (i - 0.5) / T.DAYS_PER_JULIAN_CENTURY;
                    var o =
                            24110.54841 +
                            n * (8640184.812866 + n * (0.093104 + -62e-7 * n)),
                        s = (o * D) % m.TWO_PI,
                        c =
                            72921158553e-15 +
                            1.1772758384668e-19 * (r - 2451545.5),
                        l = (a + 0.5 * T.SECONDS_PER_DAY) % T.SECONDS_PER_DAY,
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
                        : new p(h, d, 0, -d, h, 0, 0, 0, 1);
                }),
                    (R.iau2006XysData = new h()),
                    (R.earthOrientationParameters = c.NONE);
                (R.preloadIcrfFixed = function (t) {
                    var n = t.start.dayNumber,
                        r = t.start.secondsOfDay + 32.184,
                        a = t.stop.dayNumber,
                        i = t.stop.secondsOfDay + 32.184,
                        o = R.iau2006XysData.preload(n, r, a, i),
                        u = R.earthOrientationParameters.getPromiseToLoad();
                    return e.all([o, u]);
                }),
                    (R.computeIcrfToFixedMatrix = function (e, t) {
                        u(t) || (t = new p());
                        var n = R.computeFixedToIcrfMatrix(e, t);
                        if (u(n)) return p.transpose(n, t);
                    });
                var L = new d(0, 0, 0),
                    F = new l(0, 0, 0, 0, 0, 0),
                    b = new p(),
                    B = new p();
                R.computeFixedToIcrfMatrix = function (e, t) {
                    u(t) || (t = new p());
                    var n = R.earthOrientationParameters.compute(e, F);
                    if (u(n)) {
                        var r = e.dayNumber,
                            a = e.secondsOfDay + 32.184,
                            i = R.iau2006XysData.computeXysRadians(r, a, L);
                        if (u(i)) {
                            var o = i.x + n.xPoleOffset,
                                s = i.y + n.yPoleOffset,
                                c = 1 / (1 + Math.sqrt(1 - o * o - s * s)),
                                l = b;
                            (l[0] = 1 - c * o * o),
                                (l[3] = -c * o * s),
                                (l[6] = o),
                                (l[1] = -c * o * s),
                                (l[4] = 1 - c * s * s),
                                (l[7] = s),
                                (l[2] = -o),
                                (l[5] = -s),
                                (l[8] = 1 - c * (o * o + s * s));
                            var f = p.fromRotationZ(-i.s, B),
                                h = p.multiply(l, f, b),
                                d = e.dayNumber,
                                _ =
                                    e.secondsOfDay -
                                    E.computeTaiMinusUtc(e) +
                                    n.ut1MinusUtc,
                                y = d - 2451545,
                                A = _ / T.SECONDS_PER_DAY,
                                v =
                                    0.779057273264 +
                                    A +
                                    0.00273781191135448 * (y + A);
                            v = (v % 1) * m.TWO_PI;
                            var S = p.fromRotationZ(v, B),
                                g = p.multiply(h, S, b),
                                N = Math.cos(n.xPoleWander),
                                O = Math.cos(n.yPoleWander),
                                w = Math.sin(n.xPoleWander),
                                I = Math.sin(n.yPoleWander),
                                M = r - 2451545 + a / T.SECONDS_PER_DAY;
                            M /= 36525;
                            var x = (-47e-6 * M * m.RADIANS_PER_DEGREE) / 3600,
                                C = Math.cos(x),
                                P = Math.sin(x),
                                D = B;
                            return (
                                (D[0] = N * C),
                                (D[1] = N * P),
                                (D[2] = w),
                                (D[3] = -O * P + I * w * C),
                                (D[4] = O * C + I * w * P),
                                (D[5] = -I * N),
                                (D[6] = -I * P - O * w * C),
                                (D[7] = I * C - O * w * P),
                                (D[8] = O * N),
                                p.multiply(g, D, t)
                            );
                        }
                    }
                };
                var z = new r();
                (R.pointToWindowCoordinates = function (e, t, n, r) {
                    return (
                        (r = R.pointToGLWindowCoordinates(e, t, n, r)),
                        (r.y = 2 * t[5] - r.y),
                        r
                    );
                }),
                    (R.pointToGLWindowCoordinates = function (e, n, a, i) {
                        u(i) || (i = new t());
                        var o = z;
                        return (
                            _.multiplyByVector(
                                e,
                                r.fromElements(a.x, a.y, a.z, 1, o),
                                o,
                            ),
                            r.multiplyByScalar(o, 1 / o.w, o),
                            _.multiplyByVector(n, o, o),
                            t.fromCartesian4(o, i)
                        );
                    });
                var q = new n(),
                    G = new n(),
                    V = new n();
                R.rotationMatrixFromPositionVelocity = function (e, t, r, a) {
                    var i = o(r, f.WGS84).geodeticSurfaceNormal(e, q),
                        s = n.cross(t, i, G);
                    n.equalsEpsilon(s, n.ZERO, m.EPSILON6) &&
                        (s = n.clone(n.UNIT_X, s));
                    var c = n.cross(s, t, V);
                    return (
                        n.cross(t, c, s),
                        n.negate(s, s),
                        u(a) || (a = new p()),
                        (a[0] = t.x),
                        (a[1] = t.y),
                        (a[2] = t.z),
                        (a[3] = s.x),
                        (a[4] = s.y),
                        (a[5] = s.z),
                        (a[6] = c.x),
                        (a[7] = c.y),
                        (a[8] = c.z),
                        a
                    );
                };
                var W = new _(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
                    X = new a(),
                    H = new n(),
                    Y = new n(),
                    k = new p(),
                    Z = new _(),
                    j = new _();
                return (
                    (R.basisTo2D = function (e, t, r) {
                        var a = _.getTranslation(t, Y),
                            i = e.ellipsoid,
                            o = i.cartesianToCartographic(a, X),
                            u = e.project(o, H);
                        n.fromElements(u.z, u.x, u.y, u);
                        var s = R.eastNorthUpToFixedFrame(a, i, Z),
                            c = _.inverseTransformation(s, j),
                            l = _.getRotation(t, k),
                            f = _.multiplyByMatrix3(c, l, r);
                        return (
                            _.multiply(W, f, r), _.setTranslation(r, u, r), r
                        );
                    }),
                    (R.wgs84To2DModelMatrix = function (e, t, r) {
                        var a = e.ellipsoid,
                            i = R.eastNorthUpToFixedFrame(t, a, Z),
                            o = _.inverseTransformation(i, j),
                            u = a.cartesianToCartographic(t, X),
                            s = e.project(u, H);
                        n.fromElements(s.z, s.x, s.y, s);
                        var c = _.fromTranslation(s, Z);
                        return _.multiply(W, o, r), _.multiply(c, r, r), r;
                    }),
                    R
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
            function (e, t, n, r, a, i, o, u, s, c, l, f, h, d) {
                'use strict';
                function E(e, t) {
                    (t = a(t, s.WGS84)), (e = t.scaleToGeodeticSurface(e));
                    var r = d.eastNorthUpToFixedFrame(e, t);
                    (this._ellipsoid = t),
                        (this._origin = e),
                        (this._xAxis = n.fromCartesian4(l.getColumn(r, 0, m))),
                        (this._yAxis = n.fromCartesian4(l.getColumn(r, 1, m)));
                    var i = n.fromCartesian4(l.getColumn(r, 2, m));
                    this._plane = f.fromPointNormal(e, i);
                }
                var m = new r();
                o(E.prototype, {
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
                var p = new e();
                E.fromPoints = function (t, n) {
                    return new E(e.fromPoints(t, p).center, n);
                };
                var _ = new h(),
                    y = new n();
                (E.prototype.projectPointOntoPlane = function (e, r) {
                    var a = _;
                    (a.origin = e), n.normalize(e, a.direction);
                    var o = c.rayPlane(a, this._plane, y);
                    if (
                        (i(o) ||
                            (n.negate(a.direction, a.direction),
                            (o = c.rayPlane(a, this._plane, y))),
                        i(o))
                    ) {
                        var u = n.subtract(o, this._origin, o),
                            s = n.dot(this._xAxis, u),
                            l = n.dot(this._yAxis, u);
                        return i(r) ? ((r.x = s), (r.y = l), r) : new t(s, l);
                    }
                }),
                    (E.prototype.projectPointsOntoPlane = function (e, t) {
                        i(t) || (t = []);
                        for (var n = 0, r = e.length, a = 0; a < r; a++) {
                            var o = this.projectPointOntoPlane(e[a], t[n]);
                            i(o) && ((t[n] = o), n++);
                        }
                        return (t.length = n), t;
                    }),
                    (E.prototype.projectPointToNearestOnPlane = function (
                        e,
                        r,
                    ) {
                        i(r) || (r = new t());
                        var a = _;
                        (a.origin = e),
                            n.clone(this._plane.normal, a.direction);
                        var o = c.rayPlane(a, this._plane, y);
                        i(o) ||
                            (n.negate(a.direction, a.direction),
                            (o = c.rayPlane(a, this._plane, y)));
                        var u = n.subtract(o, this._origin, o),
                            s = n.dot(this._xAxis, u),
                            l = n.dot(this._yAxis, u);
                        return (r.x = s), (r.y = l), r;
                    }),
                    (E.prototype.projectPointsToNearestOnPlane = function (
                        e,
                        t,
                    ) {
                        i(t) || (t = []);
                        var n = e.length;
                        t.length = n;
                        for (var r = 0; r < n; r++)
                            t[r] = this.projectPointToNearestOnPlane(
                                e[r],
                                t[r],
                            );
                        return t;
                    });
                var T = new n();
                return (
                    (E.prototype.projectPointsOntoEllipsoid = function (e, t) {
                        var r = e.length;
                        i(t) ? (t.length = r) : (t = new Array(r));
                        for (
                            var a = this._ellipsoid,
                                o = this._origin,
                                u = this._xAxis,
                                s = this._yAxis,
                                c = T,
                                l = 0;
                            l < r;
                            ++l
                        ) {
                            var f = e[l];
                            n.multiplyByScalar(u, f.x, c),
                                i(t[l]) || (t[l] = new n());
                            var h = n.add(o, c, t[l]);
                            n.multiplyByScalar(s, f.y, c),
                                n.add(h, c, h),
                                a.scaleToGeocentricSurface(h, h);
                        }
                        return t;
                    }),
                    E
                );
            },
        ),
        define(
            'Core/PolylineVolumeGeometryLibrary',
            [
                './Cartesian2',
                './Cartesian3',
                './Cartesian4',
                './Cartographic',
                './CornerType',
                './EllipsoidTangentPlane',
                './Math',
                './Matrix3',
                './Matrix4',
                './PolylinePipeline',
                './Quaternion',
                './Transforms',
            ],
            function (e, t, n, r, a, i, o, u, s, c, l, f) {
                'use strict';
                function h(e, t) {
                    for (
                        var n = new Array(e.length), r = 0;
                        r < e.length;
                        r++
                    ) {
                        var a = e[r];
                        (D = t.cartesianToCartographic(a, D)),
                            (n[r] = D.height),
                            (e[r] = t.scaleToGeodeticSurface(a, a));
                    }
                    return n;
                }
                function d(e, n, r, a) {
                    var i,
                        o = e[0],
                        u = e[1],
                        s = t.angleBetween(o, u),
                        c = Math.ceil(s / a),
                        l = new Array(c);
                    if (n === r) {
                        for (i = 0; i < c; i++) l[i] = n;
                        return l.push(r), l;
                    }
                    var f = r - n,
                        h = f / c;
                    for (i = 1; i < c; i++) {
                        var d = n + i * h;
                        l[i] = d;
                    }
                    return (l[0] = n), l.push(r), l;
                }
                function E(n, r, a, o) {
                    var u = new i(a, o),
                        s = u.projectPointOntoPlane(t.add(a, n, U), U),
                        c = u.projectPointOntoPlane(t.add(a, r, L), L),
                        l = e.angleBetween(s, c);
                    return c.x * s.y - c.y * s.x >= 0 ? -l : l;
                }
                function m(e, n, r, a, i, o, c, l) {
                    var h = G,
                        d = V;
                    (b = f.eastNorthUpToFixedFrame(e, i, b)),
                        (h = s.multiplyByPointAsVector(b, F, h)),
                        (h = t.normalize(h, h));
                    var m = E(h, n, e, i);
                    (z = u.fromRotationZ(m, z)),
                        (W.z = o),
                        (b = s.multiplyTransformation(
                            b,
                            s.fromRotationTranslation(z, W, B),
                            b,
                        ));
                    var p = q;
                    p[0] = c;
                    for (var _ = 0; _ < l; _++)
                        for (var y = 0; y < r.length; y += 3)
                            (d = t.fromArray(r, y, d)),
                                (d = u.multiplyByVector(p, d, d)),
                                (d = s.multiplyByPoint(b, d, d)),
                                a.push(d.x, d.y, d.z);
                    return a;
                }
                function p(e, n, r, a, i, o, u) {
                    for (var s = 0; s < e.length; s += 3) {
                        a = m(t.fromArray(e, s, X), n, r, a, i, o[s / 3], u, 1);
                    }
                    return a;
                }
                function _(e, t) {
                    var n = e.length,
                        r = new Array(6 * n),
                        a = 0,
                        i = t.x + t.width / 2,
                        o = t.y + t.height / 2,
                        u = e[0];
                    (r[a++] = u.x - i), (r[a++] = 0), (r[a++] = u.y - o);
                    for (var s = 1; s < n; s++) {
                        u = e[s];
                        var c = u.x - i,
                            l = u.y - o;
                        (r[a++] = c),
                            (r[a++] = 0),
                            (r[a++] = l),
                            (r[a++] = c),
                            (r[a++] = 0),
                            (r[a++] = l);
                    }
                    return (
                        (u = e[0]),
                        (r[a++] = u.x - i),
                        (r[a++] = 0),
                        (r[a++] = u.y - o),
                        r
                    );
                }
                function y(e, t) {
                    for (
                        var n = e.length,
                            r = new Array(3 * n),
                            a = 0,
                            i = t.x + t.width / 2,
                            o = t.y + t.height / 2,
                            u = 0;
                        u < n;
                        u++
                    )
                        (r[a++] = e[u].x - i),
                            (r[a++] = 0),
                            (r[a++] = e[u].y - o);
                    return r;
                }
                function T(e, n, r, i, s, c, f, h, d, E) {
                    var p,
                        _ = t.angleBetween(
                            t.subtract(n, e, x),
                            t.subtract(r, e, C),
                        ),
                        y = i === a.BEVELED ? 0 : Math.ceil(_ / o.toRadians(5));
                    p = s
                        ? u.fromQuaternion(
                              l.fromAxisAngle(t.negate(e, x), _ / (y + 1), H),
                              k,
                          )
                        : u.fromQuaternion(
                              l.fromAxisAngle(e, _ / (y + 1), H),
                              k,
                          );
                    var T, R;
                    if (((n = t.clone(n, Y)), y > 0))
                        for (var A = E ? 2 : 1, v = 0; v < y; v++)
                            (n = u.multiplyByVector(p, n, n)),
                                (T = t.subtract(n, e, x)),
                                (T = t.normalize(T, T)),
                                s || (T = t.negate(T, T)),
                                (R = c.scaleToGeodeticSurface(n, C)),
                                (f = m(R, T, h, f, c, d, 1, A));
                    else
                        (T = t.subtract(n, e, x)),
                            (T = t.normalize(T, T)),
                            s || (T = t.negate(T, T)),
                            (R = c.scaleToGeodeticSurface(n, C)),
                            (f = m(R, T, h, f, c, d, 1, 1)),
                            (r = t.clone(r, Y)),
                            (T = t.subtract(r, e, x)),
                            (T = t.normalize(T, T)),
                            s || (T = t.negate(T, T)),
                            (R = c.scaleToGeodeticSurface(r, C)),
                            (f = m(R, T, h, f, c, d, 1, 1));
                    return f;
                }
                var R = [new t(), new t()],
                    A = new t(),
                    v = new t(),
                    S = new t(),
                    g = new t(),
                    N = new t(),
                    O = new t(),
                    w = new t(),
                    I = new t(),
                    M = new t(),
                    x = new t(),
                    C = new t(),
                    P = {},
                    D = new r(),
                    U = new t(),
                    L = new t(),
                    F = new t(-1, 0, 0),
                    b = new s(),
                    B = new s(),
                    z = new u(),
                    q = u.IDENTITY.clone(),
                    G = new t(),
                    V = new n(),
                    W = new t(),
                    X = new t(),
                    H = new l(),
                    Y = new t(),
                    k = new u();
                (P.removeDuplicatesFromShape = function (t) {
                    for (
                        var n = t.length, r = [], a = n - 1, i = 0;
                        i < n;
                        a = i++
                    ) {
                        var o = t[a],
                            u = t[i];
                        e.equals(o, u) || r.push(u);
                    }
                    return r;
                }),
                    (P.angleIsGreaterThanPi = function (e, n, r, a) {
                        var o = new i(r, a),
                            u = o.projectPointOntoPlane(t.add(r, e, U), U),
                            s = o.projectPointOntoPlane(t.add(r, n, L), L);
                        return s.x * u.y - s.y * u.x >= 0;
                    });
                var Z = new t(),
                    j = new t();
                return (
                    (P.computePositions = function (e, n, r, i, u) {
                        var s = i._ellipsoid,
                            l = h(e, s),
                            f = i._granularity,
                            E = i._cornerType,
                            C = u ? _(n, r) : y(n, r),
                            D = u ? y(n, r) : void 0,
                            U = r.height / 2,
                            L = r.width / 2,
                            F = e.length,
                            b = [],
                            B = u ? [] : void 0,
                            z = A,
                            q = v,
                            G = S,
                            V = g,
                            W = N,
                            X = O,
                            H = w,
                            Y = I,
                            k = M,
                            K = e[0],
                            J = e[1];
                        (V = s.geodeticSurfaceNormal(K, V)),
                            (z = t.subtract(J, K, z)),
                            (z = t.normalize(z, z)),
                            (Y = t.cross(V, z, Y)),
                            (Y = t.normalize(Y, Y));
                        var Q = l[0],
                            $ = l[1];
                        u && (B = m(K, Y, D, B, s, Q + U, 1, 1)),
                            (k = t.clone(K, k)),
                            (K = J),
                            (q = t.negate(z, q));
                        for (var ee, te, ne = 1; ne < F - 1; ne++) {
                            var re = u ? 2 : 1;
                            (J = e[ne + 1]),
                                (z = t.subtract(J, K, z)),
                                (z = t.normalize(z, z)),
                                (G = t.add(z, q, G)),
                                (G = t.normalize(G, G)),
                                (V = s.geodeticSurfaceNormal(K, V));
                            var ae = t.multiplyByScalar(V, t.dot(z, V), Z);
                            t.subtract(z, ae, ae), t.normalize(ae, ae);
                            var ie = t.multiplyByScalar(V, t.dot(q, V), j);
                            t.subtract(q, ie, ie), t.normalize(ie, ie);
                            if (
                                !o.equalsEpsilon(
                                    Math.abs(t.dot(ae, ie)),
                                    1,
                                    o.EPSILON7,
                                )
                            ) {
                                (G = t.cross(G, V, G)),
                                    (G = t.cross(V, G, G)),
                                    (G = t.normalize(G, G));
                                var oe =
                                        1 /
                                        Math.max(
                                            0.25,
                                            t.magnitude(t.cross(G, q, x)),
                                        ),
                                    ue = P.angleIsGreaterThanPi(z, q, K, s);
                                ue
                                    ? ((W = t.add(
                                          K,
                                          t.multiplyByScalar(G, oe * L, G),
                                          W,
                                      )),
                                      (X = t.add(
                                          W,
                                          t.multiplyByScalar(Y, L, X),
                                          X,
                                      )),
                                      (R[0] = t.clone(k, R[0])),
                                      (R[1] = t.clone(X, R[1])),
                                      (ee = d(R, Q + U, $ + U, f)),
                                      (te = c.generateArc({
                                          positions: R,
                                          granularity: f,
                                          ellipsoid: s,
                                      })),
                                      (b = p(te, Y, C, b, s, ee, 1)),
                                      (Y = t.cross(V, z, Y)),
                                      (Y = t.normalize(Y, Y)),
                                      (H = t.add(
                                          W,
                                          t.multiplyByScalar(Y, L, H),
                                          H,
                                      )),
                                      E === a.ROUNDED || E === a.BEVELED
                                          ? T(W, X, H, E, ue, s, b, C, $ + U, u)
                                          : ((G = t.negate(G, G)),
                                            (b = m(
                                                K,
                                                G,
                                                C,
                                                b,
                                                s,
                                                $ + U,
                                                oe,
                                                re,
                                            ))),
                                      (k = t.clone(H, k)))
                                    : ((W = t.add(
                                          K,
                                          t.multiplyByScalar(G, oe * L, G),
                                          W,
                                      )),
                                      (X = t.add(
                                          W,
                                          t.multiplyByScalar(Y, -L, X),
                                          X,
                                      )),
                                      (R[0] = t.clone(k, R[0])),
                                      (R[1] = t.clone(X, R[1])),
                                      (ee = d(R, Q + U, $ + U, f)),
                                      (te = c.generateArc({
                                          positions: R,
                                          granularity: f,
                                          ellipsoid: s,
                                      })),
                                      (b = p(te, Y, C, b, s, ee, 1)),
                                      (Y = t.cross(V, z, Y)),
                                      (Y = t.normalize(Y, Y)),
                                      (H = t.add(
                                          W,
                                          t.multiplyByScalar(Y, -L, H),
                                          H,
                                      )),
                                      E === a.ROUNDED || E === a.BEVELED
                                          ? T(W, X, H, E, ue, s, b, C, $ + U, u)
                                          : (b = m(
                                                K,
                                                G,
                                                C,
                                                b,
                                                s,
                                                $ + U,
                                                oe,
                                                re,
                                            )),
                                      (k = t.clone(H, k))),
                                    (q = t.negate(z, q));
                            } else (b = m(k, Y, C, b, s, Q + U, 1, 1)), (k = K);
                            (Q = $), ($ = l[ne + 1]), (K = J);
                        }
                        (R[0] = t.clone(k, R[0])),
                            (R[1] = t.clone(K, R[1])),
                            (ee = d(R, Q + U, $ + U, f)),
                            (te = c.generateArc({
                                positions: R,
                                granularity: f,
                                ellipsoid: s,
                            })),
                            (b = p(te, Y, C, b, s, ee, 1)),
                            u && (B = m(K, Y, D, B, s, $ + U, 1, 1)),
                            (F = b.length);
                        var se = u ? F + B.length : F,
                            ce = new Float64Array(se);
                        return ce.set(b), u && ce.set(B, F), ce;
                    }),
                    P
                );
            },
        ),
        define(
            'Core/CorridorGeometryLibrary',
            [
                './Cartesian3',
                './CornerType',
                './defined',
                './Math',
                './Matrix3',
                './PolylinePipeline',
                './PolylineVolumeGeometryLibrary',
                './Quaternion',
            ],
            function (e, t, n, r, a, i, o, u) {
                'use strict';
                function s(n, i, o, s, c) {
                    var l = e.angleBetween(
                            e.subtract(i, n, d),
                            e.subtract(o, n, E),
                        ),
                        f =
                            s === t.BEVELED
                                ? 1
                                : Math.ceil(l / r.toRadians(5)) + 1,
                        h = 3 * f,
                        m = new Array(h);
                    (m[h - 3] = o.x), (m[h - 2] = o.y), (m[h - 1] = o.z);
                    var p;
                    p = c
                        ? a.fromQuaternion(
                              u.fromAxisAngle(e.negate(n, d), l / f, I),
                              M,
                          )
                        : a.fromQuaternion(u.fromAxisAngle(n, l / f, I), M);
                    var _ = 0;
                    i = e.clone(i, d);
                    for (var y = 0; y < f; y++)
                        (i = a.multiplyByVector(p, i, i)),
                            (m[_++] = i.x),
                            (m[_++] = i.y),
                            (m[_++] = i.z);
                    return m;
                }
                function c(n) {
                    var r = y,
                        a = T,
                        i = R,
                        o = n[1];
                    (a = e.fromArray(n[1], o.length - 3, a)),
                        (i = e.fromArray(n[0], 0, i)),
                        (r = e.multiplyByScalar(e.add(a, i, r), 0.5, r));
                    var u = s(r, a, i, t.ROUNDED, !1),
                        c = n.length - 1,
                        l = n[c - 1];
                    return (
                        (o = n[c]),
                        (a = e.fromArray(l, l.length - 3, a)),
                        (i = e.fromArray(o, 0, i)),
                        (r = e.multiplyByScalar(e.add(a, i, r), 0.5, r)),
                        [u, s(r, a, i, t.ROUNDED, !1)]
                    );
                }
                function l(t, n, r, a) {
                    var i = d;
                    return (
                        a
                            ? (i = e.add(t, n, i))
                            : ((n = e.negate(n, n)), (i = e.add(t, n, i))),
                        [i.x, i.y, i.z, r.x, r.y, r.z]
                    );
                }
                function f(t, n, r, a) {
                    for (
                        var i = new Array(t.length),
                            o = new Array(t.length),
                            u = e.multiplyByScalar(n, r, d),
                            s = e.negate(u, E),
                            c = 0,
                            l = t.length - 1,
                            f = 0;
                        f < t.length;
                        f += 3
                    ) {
                        var h = e.fromArray(t, f, m),
                            _ = e.add(h, s, p);
                        (i[c++] = _.x), (i[c++] = _.y), (i[c++] = _.z);
                        var y = e.add(h, u, p);
                        (o[l--] = y.z), (o[l--] = y.y), (o[l--] = y.x);
                    }
                    return a.push(i, o), a;
                }
                var h = {},
                    d = new e(),
                    E = new e(),
                    m = new e(),
                    p = new e(),
                    _ = [new e(), new e()],
                    y = new e(),
                    T = new e(),
                    R = new e(),
                    A = new e(),
                    v = new e(),
                    S = new e(),
                    g = new e(),
                    N = new e(),
                    O = new e(),
                    w = new e(),
                    I = new u(),
                    M = new a();
                h.addAttribute = function (e, t, r, a) {
                    var i = t.x,
                        o = t.y,
                        u = t.z;
                    n(r) && ((e[r] = i), (e[r + 1] = o), (e[r + 2] = u)),
                        n(a) && ((e[a] = u), (e[a - 1] = o), (e[a - 2] = i));
                };
                var x = new e(),
                    C = new e();
                return (
                    (h.computePositions = function (n) {
                        var a = n.granularity,
                            u = n.positions,
                            h = n.ellipsoid,
                            E = n.width / 2,
                            m = n.cornerType,
                            p = n.saveAttributes,
                            I = y,
                            M = T,
                            P = R,
                            D = A,
                            U = v,
                            L = S,
                            F = g,
                            b = N,
                            B = O,
                            z = w,
                            q = [],
                            G = p ? [] : void 0,
                            V = p ? [] : void 0,
                            W = u[0],
                            X = u[1];
                        (M = e.normalize(e.subtract(X, W, M), M)),
                            (I = h.geodeticSurfaceNormal(W, I)),
                            (D = e.normalize(e.cross(I, M, D), D)),
                            p && (G.push(D.x, D.y, D.z), V.push(I.x, I.y, I.z)),
                            (F = e.clone(W, F)),
                            (W = X),
                            (P = e.negate(M, P));
                        var H,
                            Y,
                            k = [],
                            Z = u.length;
                        for (Y = 1; Y < Z - 1; Y++) {
                            (I = h.geodeticSurfaceNormal(W, I)),
                                (X = u[Y + 1]),
                                (M = e.normalize(e.subtract(X, W, M), M)),
                                (U = e.normalize(e.add(M, P, U), U));
                            var j = e.multiplyByScalar(I, e.dot(M, I), x);
                            e.subtract(M, j, j), e.normalize(j, j);
                            var K = e.multiplyByScalar(I, e.dot(P, I), C);
                            e.subtract(P, K, K), e.normalize(K, K);
                            if (
                                !r.equalsEpsilon(
                                    Math.abs(e.dot(j, K)),
                                    1,
                                    r.EPSILON7,
                                )
                            ) {
                                (U = e.cross(U, I, U)),
                                    (U = e.cross(I, U, U)),
                                    (U = e.normalize(U, U));
                                var J =
                                        E /
                                        Math.max(
                                            0.25,
                                            e.magnitude(e.cross(U, P, d)),
                                        ),
                                    Q = o.angleIsGreaterThanPi(M, P, W, h);
                                (U = e.multiplyByScalar(U, J, U)),
                                    Q
                                        ? ((b = e.add(W, U, b)),
                                          (z = e.add(
                                              b,
                                              e.multiplyByScalar(D, E, z),
                                              z,
                                          )),
                                          (B = e.add(
                                              b,
                                              e.multiplyByScalar(D, 2 * E, B),
                                              B,
                                          )),
                                          (_[0] = e.clone(F, _[0])),
                                          (_[1] = e.clone(z, _[1])),
                                          (H = i.generateArc({
                                              positions: _,
                                              granularity: a,
                                              ellipsoid: h,
                                          })),
                                          (q = f(H, D, E, q)),
                                          p &&
                                              (G.push(D.x, D.y, D.z),
                                              V.push(I.x, I.y, I.z)),
                                          (L = e.clone(B, L)),
                                          (D = e.normalize(
                                              e.cross(I, M, D),
                                              D,
                                          )),
                                          (B = e.add(
                                              b,
                                              e.multiplyByScalar(D, 2 * E, B),
                                              B,
                                          )),
                                          (F = e.add(
                                              b,
                                              e.multiplyByScalar(D, E, F),
                                              F,
                                          )),
                                          m === t.ROUNDED || m === t.BEVELED
                                              ? k.push({
                                                    leftPositions: s(
                                                        b,
                                                        L,
                                                        B,
                                                        m,
                                                        Q,
                                                    ),
                                                })
                                              : k.push({
                                                    leftPositions: l(
                                                        W,
                                                        e.negate(U, U),
                                                        B,
                                                        Q,
                                                    ),
                                                }))
                                        : ((B = e.add(W, U, B)),
                                          (z = e.add(
                                              B,
                                              e.negate(
                                                  e.multiplyByScalar(D, E, z),
                                                  z,
                                              ),
                                              z,
                                          )),
                                          (b = e.add(
                                              B,
                                              e.negate(
                                                  e.multiplyByScalar(
                                                      D,
                                                      2 * E,
                                                      b,
                                                  ),
                                                  b,
                                              ),
                                              b,
                                          )),
                                          (_[0] = e.clone(F, _[0])),
                                          (_[1] = e.clone(z, _[1])),
                                          (H = i.generateArc({
                                              positions: _,
                                              granularity: a,
                                              ellipsoid: h,
                                          })),
                                          (q = f(H, D, E, q)),
                                          p &&
                                              (G.push(D.x, D.y, D.z),
                                              V.push(I.x, I.y, I.z)),
                                          (L = e.clone(b, L)),
                                          (D = e.normalize(
                                              e.cross(I, M, D),
                                              D,
                                          )),
                                          (b = e.add(
                                              B,
                                              e.negate(
                                                  e.multiplyByScalar(
                                                      D,
                                                      2 * E,
                                                      b,
                                                  ),
                                                  b,
                                              ),
                                              b,
                                          )),
                                          (F = e.add(
                                              B,
                                              e.negate(
                                                  e.multiplyByScalar(D, E, F),
                                                  F,
                                              ),
                                              F,
                                          )),
                                          m === t.ROUNDED || m === t.BEVELED
                                              ? k.push({
                                                    rightPositions: s(
                                                        B,
                                                        L,
                                                        b,
                                                        m,
                                                        Q,
                                                    ),
                                                })
                                              : k.push({
                                                    rightPositions: l(
                                                        W,
                                                        U,
                                                        b,
                                                        Q,
                                                    ),
                                                })),
                                    (P = e.negate(M, P));
                            }
                            W = X;
                        }
                        (I = h.geodeticSurfaceNormal(W, I)),
                            (_[0] = e.clone(F, _[0])),
                            (_[1] = e.clone(W, _[1])),
                            (H = i.generateArc({
                                positions: _,
                                granularity: a,
                                ellipsoid: h,
                            })),
                            (q = f(H, D, E, q)),
                            p && (G.push(D.x, D.y, D.z), V.push(I.x, I.y, I.z));
                        var $;
                        return (
                            m === t.ROUNDED && ($ = c(q)),
                            {
                                positions: q,
                                corners: k,
                                lefts: G,
                                normals: V,
                                endPositions: $,
                            }
                        );
                    }),
                    h
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
        define('ThirdParty/earcut-2.1.1', [], function () {
            'use strict';
            function e(e, n, a) {
                a = a || 2;
                var i = n && n.length,
                    o = i ? n[0] * a : e.length,
                    u = t(e, 0, o, a, !0),
                    c = [];
                if (!u) return c;
                var l, f, h, d, E, m, p;
                if ((i && (u = s(e, n, u, a)), e.length > 80 * a)) {
                    (l = h = e[0]), (f = d = e[1]);
                    for (var _ = a; _ < o; _ += a)
                        (E = e[_]),
                            (m = e[_ + 1]),
                            E < l && (l = E),
                            m < f && (f = m),
                            E > h && (h = E),
                            m > d && (d = m);
                    p = Math.max(h - l, d - f);
                }
                return r(u, c, a, l, f, p), c;
            }
            function t(e, t, n, r, a) {
                var i, o;
                if (a === I(e, t, n, r) > 0)
                    for (i = t; i < n; i += r) o = N(i, e[i], e[i + 1], o);
                else
                    for (i = n - r; i >= t; i -= r) o = N(i, e[i], e[i + 1], o);
                return o && T(o, o.next) && (O(o), (o = o.next)), o;
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
                            (!T(r, r.next) && 0 !== y(r.prev, r, r.next)))
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
                    for (var E, m, p = e; e.prev !== e.next; )
                        if (
                            ((E = e.prev),
                            (m = e.next),
                            f ? i(e, c, l, f) : a(e))
                        )
                            t.push(E.i / s),
                                t.push(e.i / s),
                                t.push(m.i / s),
                                O(e),
                                (e = m.next),
                                (p = m.next);
                        else if ((e = m) === p) {
                            d
                                ? 1 === d
                                    ? ((e = o(e, t, s)), r(e, t, s, c, l, f, 2))
                                    : 2 === d && u(e, t, s, c, l, f)
                                : r(n(e), t, s, c, l, f, 1);
                            break;
                        }
                }
            }
            function a(e) {
                var t = e.prev,
                    n = e,
                    r = e.next;
                if (y(t, n, r) >= 0) return !1;
                for (var a = e.next.next; a !== e.prev; ) {
                    if (
                        p(t.x, t.y, n.x, n.y, r.x, r.y, a.x, a.y) &&
                        y(a.prev, a, a.next) >= 0
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
                if (y(a, i, o) >= 0) return !1;
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
                        f = E(u, s, t, n, r),
                        h = E(c, l, t, n, r),
                        d = e.nextZ;
                    d && d.z <= h;

                ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        p(a.x, a.y, i.x, i.y, o.x, o.y, d.x, d.y) &&
                        y(d.prev, d, d.next) >= 0
                    )
                        return !1;
                    d = d.nextZ;
                }
                for (d = e.prevZ; d && d.z >= f; ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        p(a.x, a.y, i.x, i.y, o.x, o.y, d.x, d.y) &&
                        y(d.prev, d, d.next) >= 0
                    )
                        return !1;
                    d = d.prevZ;
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
                        O(r),
                        O(r.next),
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
                            var l = g(s, c);
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
                    f,
                    h,
                    d = [];
                for (o = 0, u = r.length; o < u; o++)
                    (s = r[o] * i),
                        (f = o < u - 1 ? r[o + 1] * i : e.length),
                        (h = t(e, s, f, i, !1)),
                        h === h.next && (h.steiner = !0),
                        d.push(m(h));
                for (d.sort(c), o = 0; o < d.length; o++)
                    l(d[o], a), (a = n(a, a.next));
                return a;
            }
            function c(e, t) {
                return e.x - t.x;
            }
            function l(e, t) {
                if ((t = f(e, t))) {
                    var r = g(t, e);
                    n(r, r.next);
                }
            }
            function f(e, t) {
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
                    f = n.y,
                    h = 1 / 0;
                for (r = n.next; r !== c; )
                    a >= r.x &&
                        r.x >= l &&
                        p(i < f ? a : o, i, l, f, i < f ? o : a, i, r.x, r.y) &&
                        ((s = Math.abs(i - r.y) / (a - r.x)) < h ||
                            (s === h && r.x > n.x)) &&
                        v(r, e) &&
                        ((n = r), (h = s)),
                        (r = r.next);
                return n;
            }
            function h(e, t, n, r) {
                var a = e;
                do {
                    null === a.z && (a.z = E(a.x, a.y, t, n, r)),
                        (a.prevZ = a.prev),
                        (a.nextZ = a.next),
                        (a = a.next);
                } while (a !== e);
                (a.prevZ.nextZ = null), (a.prevZ = null), d(a);
            }
            function d(e) {
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
            function E(e, t, n, r, a) {
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
            function m(e) {
                var t = e,
                    n = e;
                do {
                    t.x < n.x && (n = t), (t = t.next);
                } while (t !== e);
                return n;
            }
            function p(e, t, n, r, a, i, o, u) {
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
            function y(e, t, n) {
                return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
            }
            function T(e, t) {
                return e.x === t.x && e.y === t.y;
            }
            function R(e, t, n, r) {
                return (
                    !!((T(e, t) && T(n, r)) || (T(e, r) && T(n, t))) ||
                    (y(e, t, n) > 0 != y(e, t, r) > 0 &&
                        y(n, r, e) > 0 != y(n, r, t) > 0)
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
                return y(e.prev, e, e.next) < 0
                    ? y(e, t, e.next) >= 0 && y(e, e.prev, t) >= 0
                    : y(e, t, e.prev) < 0 || y(e, e.next, t) < 0;
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
            function g(e, t) {
                var n = new w(e.i, e.x, e.y),
                    r = new w(t.i, t.x, t.y),
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
            function N(e, t, n, r) {
                var a = new w(e, t, n);
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
            function O(e) {
                (e.next.prev = e.prev),
                    (e.prev.next = e.next),
                    e.prevZ && (e.prevZ.nextZ = e.nextZ),
                    e.nextZ && (e.nextZ.prevZ = e.prevZ);
            }
            function w(e, t, n) {
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
            function I(e, t, n, r) {
                for (var a = 0, i = t, o = n - r; i < n; i += r)
                    (a += (e[o] - e[i]) * (e[i + 1] + e[o + 1])), (o = i);
                return a;
            }
            return (
                (e.deviation = function (e, t, n, r) {
                    var a = t && t.length,
                        i = a ? t[0] * n : e.length,
                        o = Math.abs(I(e, 0, i, n));
                    if (a)
                        for (var u = 0, s = t.length; u < s; u++) {
                            var c = t[u] * n,
                                l = u < s - 1 ? t[u + 1] * n : e.length;
                            o -= Math.abs(I(e, c, l, n));
                        }
                    var f = 0;
                    for (u = 0; u < r.length; u += 3) {
                        var h = r[u] * n,
                            d = r[u + 1] * n,
                            E = r[u + 2] * n;
                        f += Math.abs(
                            (e[h] - e[E]) * (e[d + 1] - e[h + 1]) -
                                (e[h] - e[d]) * (e[E + 1] - e[h + 1]),
                        );
                    }
                    return 0 === o && 0 === f ? 0 : Math.abs((f - o) / o);
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
            function (e, t, n, r, a, i, o, u, s, c, l, f, h) {
                'use strict';
                var d = new n(),
                    E = new n(),
                    m = {};
                (m.computeArea2D = function (e) {
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
                    (m.computeWindingOrder2D = function (e) {
                        return m.computeArea2D(e) > 0
                            ? h.COUNTER_CLOCKWISE
                            : h.CLOCKWISE;
                    }),
                    (m.triangulate = function (n, r) {
                        var a = t.packArray(n);
                        return e(a, r, 2);
                    });
                var p = new n(),
                    _ = new n(),
                    y = new n(),
                    T = new n(),
                    R = new n(),
                    A = new n(),
                    v = new n();
                return (
                    (m.computeSubdivision = function (e, t, r, u) {
                        u = i(u, l.RADIANS_PER_DEGREE);
                        var h,
                            d = r.slice(0),
                            E = t.length,
                            m = new Array(3 * E),
                            S = 0;
                        for (h = 0; h < E; h++) {
                            var g = t[h];
                            (m[S++] = g.x), (m[S++] = g.y), (m[S++] = g.z);
                        }
                        for (
                            var N = [],
                                O = {},
                                w = e.maximumRadius,
                                I = l.chordLength(u, w),
                                M = I * I;
                            d.length > 0;

                        ) {
                            var x,
                                C,
                                P = d.pop(),
                                D = d.pop(),
                                U = d.pop(),
                                L = n.fromArray(m, 3 * U, p),
                                F = n.fromArray(m, 3 * D, _),
                                b = n.fromArray(m, 3 * P, y),
                                B = n.multiplyByScalar(n.normalize(L, T), w, T),
                                z = n.multiplyByScalar(n.normalize(F, R), w, R),
                                q = n.multiplyByScalar(n.normalize(b, A), w, A),
                                G = n.magnitudeSquared(n.subtract(B, z, v)),
                                V = n.magnitudeSquared(n.subtract(z, q, v)),
                                W = n.magnitudeSquared(n.subtract(q, B, v)),
                                X = Math.max(G, V, W);
                            X > M
                                ? G === X
                                    ? ((x =
                                          Math.min(U, D) +
                                          ' ' +
                                          Math.max(U, D)),
                                      (h = O[x]),
                                      o(h) ||
                                          ((C = n.add(L, F, v)),
                                          n.multiplyByScalar(C, 0.5, C),
                                          m.push(C.x, C.y, C.z),
                                          (h = m.length / 3 - 1),
                                          (O[x] = h)),
                                      d.push(U, h, P),
                                      d.push(h, D, P))
                                    : V === X
                                      ? ((x =
                                            Math.min(D, P) +
                                            ' ' +
                                            Math.max(D, P)),
                                        (h = O[x]),
                                        o(h) ||
                                            ((C = n.add(F, b, v)),
                                            n.multiplyByScalar(C, 0.5, C),
                                            m.push(C.x, C.y, C.z),
                                            (h = m.length / 3 - 1),
                                            (O[x] = h)),
                                        d.push(D, h, U),
                                        d.push(h, P, U))
                                      : W === X &&
                                        ((x =
                                            Math.min(P, U) +
                                            ' ' +
                                            Math.max(P, U)),
                                        (h = O[x]),
                                        o(h) ||
                                            ((C = n.add(b, L, v)),
                                            n.multiplyByScalar(C, 0.5, C),
                                            m.push(C.x, C.y, C.z),
                                            (h = m.length / 3 - 1),
                                            (O[x] = h)),
                                        d.push(P, h, D),
                                        d.push(h, U, D))
                                : (N.push(U), N.push(D), N.push(P));
                        }
                        return new s({
                            attributes: {
                                position: new c({
                                    componentDatatype: a.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: m,
                                }),
                            },
                            indices: N,
                            primitiveType: f.TRIANGLES,
                        });
                    }),
                    (m.scaleToGeodeticHeight = function (e, t, r, a) {
                        r = i(r, u.WGS84);
                        var s = d,
                            c = E;
                        if (((t = i(t, 0)), (a = i(a, !0)), o(e)))
                            for (var l = e.length, f = 0; f < l; f += 3)
                                n.fromArray(e, f, c),
                                    a && (c = r.scaleToGeodeticSurface(c, c)),
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
            'Core/CorridorGeometry',
            [
                './arrayRemoveDuplicates',
                './BoundingSphere',
                './Cartesian3',
                './Cartographic',
                './ComponentDatatype',
                './CornerType',
                './CorridorGeometryLibrary',
                './defaultValue',
                './defined',
                './defineProperties',
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
                f,
                h,
                d,
                E,
                m,
                p,
                _,
                y,
                T,
                R,
            ) {
                'use strict';
                function A(e, t) {
                    for (var n = 0; n < e.length; n++)
                        e[n] = t.scaleToGeodeticSurface(e[n], e[n]);
                    return e;
                }
                function v(e, t, r, a, i, u) {
                    var s = e.normals,
                        c = e.tangents,
                        l = e.bitangents,
                        f = n.normalize(n.cross(r, t, F), F);
                    u.normal && o.addAttribute(s, t, a, i),
                        u.tangent && o.addAttribute(c, f, a, i),
                        u.bitangent && o.addAttribute(l, r, a, i);
                }
                function S(e, t, r) {
                    var i,
                        u,
                        c,
                        l = e.positions,
                        f = e.corners,
                        h = e.endPositions,
                        _ = e.lefts,
                        y = e.normals,
                        T = new E(),
                        R = 0,
                        A = 0,
                        S = 0;
                    for (u = 0; u < l.length; u += 2)
                        (c = l[u].length - 3),
                            (R += c),
                            (S += 2 * c),
                            (A += l[u + 1].length - 3);
                    for (R += 3, A += 3, u = 0; u < f.length; u++) {
                        i = f[u];
                        var g = f[u].leftPositions;
                        s(g)
                            ? ((c = g.length), (R += c), (S += c))
                            : ((c = f[u].rightPositions.length),
                              (A += c),
                              (S += c));
                    }
                    var N,
                        O = s(h);
                    O &&
                        ((N = h[0].length - 3),
                        (R += N),
                        (A += N),
                        (N /= 3),
                        (S += 6 * N));
                    var w,
                        I,
                        M,
                        U,
                        B,
                        z,
                        q = R + A,
                        G = new Float64Array(q),
                        V = t.normal ? new Float32Array(q) : void 0,
                        W = t.tangent ? new Float32Array(q) : void 0,
                        X = t.bitangent ? new Float32Array(q) : void 0,
                        H = { normals: V, tangents: W, bitangents: X },
                        Y = 0,
                        k = q - 1,
                        Z = x,
                        j = C,
                        K = N / 2,
                        J = m.createTypedArray(q / 3, S),
                        Q = 0;
                    if (O) {
                        (z = P), (B = D);
                        var $ = h[0];
                        for (
                            Z = n.fromArray(y, 0, Z),
                                j = n.fromArray(_, 0, j),
                                u = 0;
                            u < K;
                            u++
                        )
                            (z = n.fromArray($, 3 * (K - 1 - u), z)),
                                (B = n.fromArray($, 3 * (K + u), B)),
                                o.addAttribute(G, B, Y),
                                o.addAttribute(G, z, void 0, k),
                                v(H, Z, j, Y, k, t),
                                (I = Y / 3),
                                (U = I + 1),
                                (w = (k - 2) / 3),
                                (M = w - 1),
                                (J[Q++] = w),
                                (J[Q++] = I),
                                (J[Q++] = M),
                                (J[Q++] = M),
                                (J[Q++] = I),
                                (J[Q++] = U),
                                (Y += 3),
                                (k -= 3);
                    }
                    var ee = 0,
                        te = 0,
                        ne = l[ee++],
                        re = l[ee++];
                    G.set(ne, Y),
                        G.set(re, k - re.length + 1),
                        (j = n.fromArray(_, te, j));
                    var ae, ie;
                    for (c = re.length - 3, u = 0; u < c; u += 3)
                        (ae = r.geodeticSurfaceNormal(
                            n.fromArray(ne, u, F),
                            F,
                        )),
                            (ie = r.geodeticSurfaceNormal(
                                n.fromArray(re, c - u, b),
                                b,
                            )),
                            (Z = n.normalize(n.add(ae, ie, Z), Z)),
                            v(H, Z, j, Y, k, t),
                            (I = Y / 3),
                            (U = I + 1),
                            (w = (k - 2) / 3),
                            (M = w - 1),
                            (J[Q++] = w),
                            (J[Q++] = I),
                            (J[Q++] = M),
                            (J[Q++] = M),
                            (J[Q++] = I),
                            (J[Q++] = U),
                            (Y += 3),
                            (k -= 3);
                    for (
                        ae = r.geodeticSurfaceNormal(n.fromArray(ne, c, F), F),
                            ie = r.geodeticSurfaceNormal(
                                n.fromArray(re, c, b),
                                b,
                            ),
                            Z = n.normalize(n.add(ae, ie, Z), Z),
                            te += 3,
                            u = 0;
                        u < f.length;
                        u++
                    ) {
                        var oe;
                        i = f[u];
                        var ue,
                            se,
                            ce = i.leftPositions,
                            le = i.rightPositions,
                            fe = L,
                            he = P,
                            de = D;
                        if (((Z = n.fromArray(y, te, Z)), s(ce))) {
                            for (
                                v(H, Z, j, void 0, k, t),
                                    k -= 3,
                                    ue = U,
                                    se = M,
                                    oe = 0;
                                oe < ce.length / 3;
                                oe++
                            )
                                (fe = n.fromArray(ce, 3 * oe, fe)),
                                    (J[Q++] = ue),
                                    (J[Q++] = se - oe - 1),
                                    (J[Q++] = se - oe),
                                    o.addAttribute(G, fe, void 0, k),
                                    (he = n.fromArray(
                                        G,
                                        3 * (se - oe - 1),
                                        he,
                                    )),
                                    (de = n.fromArray(G, 3 * ue, de)),
                                    (j = n.normalize(n.subtract(he, de, j), j)),
                                    v(H, Z, j, void 0, k, t),
                                    (k -= 3);
                            (fe = n.fromArray(G, 3 * ue, fe)),
                                (he = n.subtract(
                                    n.fromArray(G, 3 * se, he),
                                    fe,
                                    he,
                                )),
                                (de = n.subtract(
                                    n.fromArray(G, 3 * (se - oe), de),
                                    fe,
                                    de,
                                )),
                                (j = n.normalize(n.add(he, de, j), j)),
                                v(H, Z, j, Y, void 0, t),
                                (Y += 3);
                        } else {
                            for (
                                v(H, Z, j, Y, void 0, t),
                                    Y += 3,
                                    ue = M,
                                    se = U,
                                    oe = 0;
                                oe < le.length / 3;
                                oe++
                            )
                                (fe = n.fromArray(le, 3 * oe, fe)),
                                    (J[Q++] = ue),
                                    (J[Q++] = se + oe),
                                    (J[Q++] = se + oe + 1),
                                    o.addAttribute(G, fe, Y),
                                    (he = n.fromArray(G, 3 * ue, he)),
                                    (de = n.fromArray(G, 3 * (se + oe), de)),
                                    (j = n.normalize(n.subtract(he, de, j), j)),
                                    v(H, Z, j, Y, void 0, t),
                                    (Y += 3);
                            (fe = n.fromArray(G, 3 * ue, fe)),
                                (he = n.subtract(
                                    n.fromArray(G, 3 * (se + oe), he),
                                    fe,
                                    he,
                                )),
                                (de = n.subtract(
                                    n.fromArray(G, 3 * se, de),
                                    fe,
                                    de,
                                )),
                                (j = n.normalize(
                                    n.negate(n.add(de, he, j), j),
                                    j,
                                )),
                                v(H, Z, j, void 0, k, t),
                                (k -= 3);
                        }
                        for (
                            ne = l[ee++],
                                re = l[ee++],
                                ne.splice(0, 3),
                                re.splice(re.length - 3, 3),
                                G.set(ne, Y),
                                G.set(re, k - re.length + 1),
                                c = re.length - 3,
                                te += 3,
                                j = n.fromArray(_, te, j),
                                oe = 0;
                            oe < re.length;
                            oe += 3
                        )
                            (ae = r.geodeticSurfaceNormal(
                                n.fromArray(ne, oe, F),
                                F,
                            )),
                                (ie = r.geodeticSurfaceNormal(
                                    n.fromArray(re, c - oe, b),
                                    b,
                                )),
                                (Z = n.normalize(n.add(ae, ie, Z), Z)),
                                v(H, Z, j, Y, k, t),
                                (U = Y / 3),
                                (I = U - 1),
                                (M = (k - 2) / 3),
                                (w = M + 1),
                                (J[Q++] = w),
                                (J[Q++] = I),
                                (J[Q++] = M),
                                (J[Q++] = M),
                                (J[Q++] = I),
                                (J[Q++] = U),
                                (Y += 3),
                                (k -= 3);
                        (Y -= 3), (k += 3);
                    }
                    if (
                        ((Z = n.fromArray(y, y.length - 3, Z)),
                        v(H, Z, j, Y, k, t),
                        O)
                    ) {
                        (Y += 3), (k -= 3), (z = P), (B = D);
                        var Ee = h[1];
                        for (u = 0; u < K; u++)
                            (z = n.fromArray(Ee, 3 * (N - u - 1), z)),
                                (B = n.fromArray(Ee, 3 * u, B)),
                                o.addAttribute(G, z, void 0, k),
                                o.addAttribute(G, B, Y),
                                v(H, Z, j, Y, k, t),
                                (U = Y / 3),
                                (I = U - 1),
                                (M = (k - 2) / 3),
                                (w = M + 1),
                                (J[Q++] = w),
                                (J[Q++] = I),
                                (J[Q++] = M),
                                (J[Q++] = M),
                                (J[Q++] = I),
                                (J[Q++] = U),
                                (Y += 3),
                                (k -= 3);
                    }
                    if (
                        ((T.position = new d({
                            componentDatatype: a.DOUBLE,
                            componentsPerAttribute: 3,
                            values: G,
                        })),
                        t.st)
                    ) {
                        var me,
                            pe,
                            _e = new Float32Array((q / 3) * 2),
                            ye = 0;
                        if (O) {
                            (R /= 3), (A /= 3);
                            var Te = Math.PI / (N + 1);
                            (pe = 1 / (R - N + 1)), (me = 1 / (A - N + 1));
                            var Re,
                                Ae = N / 2;
                            for (u = Ae + 1; u < N + 1; u++)
                                (Re = p.PI_OVER_TWO + Te * u),
                                    (_e[ye++] = me * (1 + Math.cos(Re))),
                                    (_e[ye++] = 0.5 * (1 + Math.sin(Re)));
                            for (u = 1; u < A - N + 1; u++)
                                (_e[ye++] = u * me), (_e[ye++] = 0);
                            for (u = N; u > Ae; u--)
                                (Re = p.PI_OVER_TWO - u * Te),
                                    (_e[ye++] = 1 - me * (1 + Math.cos(Re))),
                                    (_e[ye++] = 0.5 * (1 + Math.sin(Re)));
                            for (u = Ae; u > 0; u--)
                                (Re = p.PI_OVER_TWO - Te * u),
                                    (_e[ye++] = 1 - pe * (1 + Math.cos(Re))),
                                    (_e[ye++] = 0.5 * (1 + Math.sin(Re)));
                            for (u = R - N; u > 0; u--)
                                (_e[ye++] = u * pe), (_e[ye++] = 1);
                            for (u = 1; u < Ae + 1; u++)
                                (Re = p.PI_OVER_TWO + Te * u),
                                    (_e[ye++] = pe * (1 + Math.cos(Re))),
                                    (_e[ye++] = 0.5 * (1 + Math.sin(Re)));
                        } else {
                            for (
                                R /= 3,
                                    A /= 3,
                                    pe = 1 / (R - 1),
                                    me = 1 / (A - 1),
                                    u = 0;
                                u < A;
                                u++
                            )
                                (_e[ye++] = u * me), (_e[ye++] = 0);
                            for (u = R; u > 0; u--)
                                (_e[ye++] = (u - 1) * pe), (_e[ye++] = 1);
                        }
                        T.st = new d({
                            componentDatatype: a.FLOAT,
                            componentsPerAttribute: 2,
                            values: _e,
                        });
                    }
                    return (
                        t.normal &&
                            (T.normal = new d({
                                componentDatatype: a.FLOAT,
                                componentsPerAttribute: 3,
                                values: H.normals,
                            })),
                        t.tangent &&
                            (T.tangent = new d({
                                componentDatatype: a.FLOAT,
                                componentsPerAttribute: 3,
                                values: H.tangents,
                            })),
                        t.bitangent &&
                            (T.bitangent = new d({
                                componentDatatype: a.FLOAT,
                                componentsPerAttribute: 3,
                                values: H.bitangents,
                            })),
                        { attributes: T, indices: J }
                    );
                }
                function g(e, t) {
                    if (!(t.normal || t.tangent || t.bitangent || t.st))
                        return e;
                    var r,
                        a,
                        i = e.position.values;
                    (t.normal || t.bitangent) &&
                        ((r = e.normal.values), (a = e.bitangent.values));
                    var u,
                        s = e.position.values.length / 18,
                        c = 3 * s,
                        l = 2 * s,
                        f = 2 * c;
                    if (t.normal || t.bitangent || t.tangent) {
                        var h = t.normal ? new Float32Array(6 * c) : void 0,
                            d = t.tangent ? new Float32Array(6 * c) : void 0,
                            E = t.bitangent ? new Float32Array(6 * c) : void 0,
                            m = x,
                            p = C,
                            _ = P,
                            y = D,
                            T = U,
                            R = L,
                            A = f;
                        for (u = 0; u < c; u += 3) {
                            var v = A + f;
                            (m = n.fromArray(i, u, m)),
                                (p = n.fromArray(i, u + c, p)),
                                (_ = n.fromArray(i, (u + 3) % c, _)),
                                (p = n.subtract(p, m, p)),
                                (_ = n.subtract(_, m, _)),
                                (y = n.normalize(n.cross(p, _, y), y)),
                                t.normal &&
                                    (o.addAttribute(h, y, v),
                                    o.addAttribute(h, y, v + 3),
                                    o.addAttribute(h, y, A),
                                    o.addAttribute(h, y, A + 3)),
                                (t.tangent || t.bitangent) &&
                                    ((R = n.fromArray(r, u, R)),
                                    t.bitangent &&
                                        (o.addAttribute(E, R, v),
                                        o.addAttribute(E, R, v + 3),
                                        o.addAttribute(E, R, A),
                                        o.addAttribute(E, R, A + 3)),
                                    t.tangent &&
                                        ((T = n.normalize(n.cross(R, y, T), T)),
                                        o.addAttribute(d, T, v),
                                        o.addAttribute(d, T, v + 3),
                                        o.addAttribute(d, T, A),
                                        o.addAttribute(d, T, A + 3))),
                                (A += 6);
                        }
                        if (t.normal) {
                            for (h.set(r), u = 0; u < c; u += 3)
                                (h[u + c] = -r[u]),
                                    (h[u + c + 1] = -r[u + 1]),
                                    (h[u + c + 2] = -r[u + 2]);
                            e.normal.values = h;
                        } else e.normal = void 0;
                        if (
                            (t.bitangent
                                ? (E.set(a),
                                  E.set(a, c),
                                  (e.bitangent.values = E))
                                : (e.bitangent = void 0),
                            t.tangent)
                        ) {
                            var S = e.tangent.values;
                            d.set(S), d.set(S, c), (e.tangent.values = d);
                        }
                    }
                    if (t.st) {
                        var g = e.st.values,
                            N = new Float32Array(6 * l);
                        N.set(g), N.set(g, l);
                        for (var O = 2 * l, w = 0; w < 2; w++) {
                            for (
                                N[O++] = g[0], N[O++] = g[1], u = 2;
                                u < l;
                                u += 2
                            ) {
                                var I = g[u],
                                    M = g[u + 1];
                                (N[O++] = I),
                                    (N[O++] = M),
                                    (N[O++] = I),
                                    (N[O++] = M);
                            }
                            (N[O++] = g[0]), (N[O++] = g[1]);
                        }
                        e.st.values = N;
                    }
                    return e;
                }
                function N(e, t, n) {
                    (n[t++] = e[0]), (n[t++] = e[1]), (n[t++] = e[2]);
                    for (var r = 3; r < e.length; r += 3) {
                        var a = e[r],
                            i = e[r + 1],
                            o = e[r + 2];
                        (n[t++] = a),
                            (n[t++] = i),
                            (n[t++] = o),
                            (n[t++] = a),
                            (n[t++] = i),
                            (n[t++] = o);
                    }
                    return (n[t++] = e[0]), (n[t++] = e[1]), (n[t++] = e[2]), n;
                }
                function O(e, t) {
                    var n = new R({
                            position: t.position,
                            normal: t.normal || t.bitangent || e.shadowVolume,
                            tangent: t.tangent,
                            bitangent: t.normal || t.bitangent,
                            st: t.st,
                        }),
                        r = e.ellipsoid,
                        i = o.computePositions(e),
                        u = S(i, n, r),
                        s = e.height,
                        c = e.extrudedHeight,
                        l = u.attributes,
                        f = u.indices,
                        h = l.position.values,
                        E = h.length,
                        p = new Float64Array(6 * E),
                        y = new Float64Array(E);
                    y.set(h);
                    var T = new Float64Array(4 * E);
                    (h = _.scaleToGeodeticHeight(h, s, r)),
                        (T = N(h, 0, T)),
                        (y = _.scaleToGeodeticHeight(y, c, r)),
                        (T = N(y, 2 * E, T)),
                        p.set(h),
                        p.set(y, E),
                        p.set(T, 2 * E),
                        (l.position.values = p),
                        (l = g(l, t));
                    var A,
                        v = E / 3;
                    if (e.shadowVolume) {
                        var O = l.normal.values;
                        E = O.length;
                        var w = new Float32Array(6 * E);
                        for (A = 0; A < E; A++) O[A] = -O[A];
                        w.set(O, E),
                            (w = N(O, 4 * E, w)),
                            (l.extrudeDirection = new d({
                                componentDatatype: a.FLOAT,
                                componentsPerAttribute: 3,
                                values: w,
                            })),
                            t.normal || (l.normal = void 0);
                    }
                    var I = f.length,
                        M = v + v,
                        x = m.createTypedArray(p.length / 3, 2 * I + 3 * M);
                    x.set(f);
                    var C = I;
                    for (A = 0; A < I; A += 3) {
                        var P = f[A],
                            D = f[A + 1],
                            U = f[A + 2];
                        (x[C++] = U + v), (x[C++] = D + v), (x[C++] = P + v);
                    }
                    var L, F, b, B;
                    for (A = 0; A < M; A += 2)
                        (L = A + M),
                            (F = L + M),
                            (b = L + 1),
                            (B = F + 1),
                            (x[C++] = L),
                            (x[C++] = F),
                            (x[C++] = b),
                            (x[C++] = b),
                            (x[C++] = F),
                            (x[C++] = B);
                    return { attributes: l, indices: x };
                }
                function w(e, t, r, a, i, o) {
                    var u = n.subtract(t, e, B);
                    n.normalize(u, u);
                    var s = r.geodeticSurfaceNormal(e, z),
                        c = n.cross(u, s, B);
                    n.multiplyByScalar(c, a, c);
                    var l = i.latitude,
                        f = i.longitude,
                        h = o.latitude,
                        d = o.longitude;
                    n.add(e, c, z), r.cartesianToCartographic(z, q);
                    var E = q.latitude,
                        m = q.longitude;
                    (l = Math.min(l, E)),
                        (f = Math.min(f, m)),
                        (h = Math.max(h, E)),
                        (d = Math.max(d, m)),
                        n.subtract(e, c, z),
                        r.cartesianToCartographic(z, q),
                        (E = q.latitude),
                        (m = q.longitude),
                        (l = Math.min(l, E)),
                        (f = Math.min(f, m)),
                        (h = Math.max(h, E)),
                        (d = Math.max(d, m)),
                        (i.latitude = l),
                        (i.longitude = f),
                        (o.latitude = h),
                        (o.longitude = d);
                }
                function I(t, r, a, o) {
                    t = A(t, r);
                    var u = e(t, n.equalsEpsilon),
                        s = u.length;
                    if (s < 2 || a <= 0) return new T();
                    var c = 0.5 * a;
                    (W.latitude = Number.POSITIVE_INFINITY),
                        (W.longitude = Number.POSITIVE_INFINITY),
                        (X.latitude = Number.NEGATIVE_INFINITY),
                        (X.longitude = Number.NEGATIVE_INFINITY);
                    var l, f;
                    if (o === i.ROUNDED) {
                        var h = u[0];
                        n.subtract(h, u[1], G),
                            n.normalize(G, G),
                            n.multiplyByScalar(G, c, G),
                            n.add(h, G, V),
                            r.cartesianToCartographic(V, q),
                            (l = q.latitude),
                            (f = q.longitude),
                            (W.latitude = Math.min(W.latitude, l)),
                            (W.longitude = Math.min(W.longitude, f)),
                            (X.latitude = Math.max(X.latitude, l)),
                            (X.longitude = Math.max(X.longitude, f));
                    }
                    for (var d = 0; d < s - 1; ++d)
                        w(u[d], u[d + 1], r, c, W, X);
                    var E = u[s - 1];
                    n.subtract(E, u[s - 2], G),
                        n.normalize(G, G),
                        n.multiplyByScalar(G, c, G),
                        n.add(E, G, V),
                        w(E, V, r, c, W, X),
                        o === i.ROUNDED &&
                            (r.cartesianToCartographic(V, q),
                            (l = q.latitude),
                            (f = q.longitude),
                            (W.latitude = Math.min(W.latitude, l)),
                            (W.longitude = Math.min(W.longitude, f)),
                            (X.latitude = Math.max(X.latitude, l)),
                            (X.longitude = Math.max(X.longitude, f)));
                    var m = new T();
                    return (
                        (m.north = X.latitude),
                        (m.south = W.latitude),
                        (m.east = X.longitude),
                        (m.west = W.longitude),
                        m
                    );
                }
                function M(e) {
                    e = u(e, u.EMPTY_OBJECT);
                    var t = e.positions,
                        r = e.width;
                    (this._positions = t),
                        (this._ellipsoid = f.clone(u(e.ellipsoid, f.WGS84))),
                        (this._vertexFormat = R.clone(
                            u(e.vertexFormat, R.DEFAULT),
                        )),
                        (this._width = r),
                        (this._height = u(e.height, 0)),
                        (this._extrudedHeight = u(
                            e.extrudedHeight,
                            this._height,
                        )),
                        (this._cornerType = u(e.cornerType, i.ROUNDED)),
                        (this._granularity = u(
                            e.granularity,
                            p.RADIANS_PER_DEGREE,
                        )),
                        (this._shadowVolume = u(e.shadowVolume, !1)),
                        (this._workerName = 'createCorridorGeometry'),
                        (this._rectangle = I(
                            t,
                            this._ellipsoid,
                            r,
                            this._cornerType,
                        )),
                        (this.packedLength =
                            1 +
                            t.length * n.packedLength +
                            f.packedLength +
                            R.packedLength +
                            T.packedLength +
                            6);
                }
                var x = new n(),
                    C = new n(),
                    P = new n(),
                    D = new n(),
                    U = new n(),
                    L = new n(),
                    F = new n(),
                    b = new n(),
                    B = new n(),
                    z = new n(),
                    q = new r(),
                    G = new n(),
                    V = new n(),
                    W = new r(),
                    X = new r();
                M.pack = function (e, t, r) {
                    r = u(r, 0);
                    var a = e._positions,
                        i = a.length;
                    t[r++] = i;
                    for (var o = 0; o < i; ++o, r += n.packedLength)
                        n.pack(a[o], t, r);
                    return (
                        f.pack(e._ellipsoid, t, r),
                        (r += f.packedLength),
                        R.pack(e._vertexFormat, t, r),
                        (r += R.packedLength),
                        T.pack(e._rectangle, t, r),
                        (r += T.packedLength),
                        (t[r++] = e._width),
                        (t[r++] = e._height),
                        (t[r++] = e._extrudedHeight),
                        (t[r++] = e._cornerType),
                        (t[r++] = e._granularity),
                        (t[r] = e._shadowVolume ? 1 : 0),
                        t
                    );
                };
                var H = f.clone(f.UNIT_SPHERE),
                    Y = new R(),
                    k = new T(),
                    Z = {
                        positions: void 0,
                        ellipsoid: H,
                        vertexFormat: Y,
                        width: void 0,
                        height: void 0,
                        extrudedHeight: void 0,
                        cornerType: void 0,
                        granularity: void 0,
                        shadowVolume: void 0,
                    };
                return (
                    (M.unpack = function (e, t, r) {
                        t = u(t, 0);
                        for (
                            var a = e[t++], i = new Array(a), o = 0;
                            o < a;
                            ++o, t += n.packedLength
                        )
                            i[o] = n.unpack(e, t);
                        var c = f.unpack(e, t, H);
                        t += f.packedLength;
                        var l = R.unpack(e, t, Y);
                        t += R.packedLength;
                        var h = T.unpack(e, t, k);
                        t += T.packedLength;
                        var d = e[t++],
                            E = e[t++],
                            m = e[t++],
                            p = e[t++],
                            _ = e[t++],
                            y = 1 === e[t];
                        return s(r)
                            ? ((r._positions = i),
                              (r._ellipsoid = f.clone(c, r._ellipsoid)),
                              (r._vertexFormat = R.clone(l, r._vertexFormat)),
                              (r._width = d),
                              (r._height = E),
                              (r._extrudedHeight = m),
                              (r._cornerType = p),
                              (r._granularity = _),
                              (r._rectangle = T.clone(h)),
                              (r._shadowVolume = y),
                              r)
                            : ((Z.positions = i),
                              (Z.width = d),
                              (Z.height = E),
                              (Z.extrudedHeight = m),
                              (Z.cornerType = p),
                              (Z.granularity = _),
                              (Z.shadowVolume = y),
                              new M(Z));
                    }),
                    (M.createGeometry = function (r) {
                        var a = r._positions,
                            i = r._height,
                            u = r._width,
                            s = r._extrudedHeight,
                            c = i !== s,
                            l = r._ellipsoid;
                        a = A(a, l);
                        var f = e(a, n.equalsEpsilon);
                        if (!(f.length < 2 || u <= 0)) {
                            var d,
                                E = r._vertexFormat,
                                m = {
                                    ellipsoid: l,
                                    positions: f,
                                    width: u,
                                    cornerType: r._cornerType,
                                    granularity: r._granularity,
                                    saveAttributes: !0,
                                };
                            if (c) {
                                var p = Math.max(i, s);
                                (s = Math.min(i, s)),
                                    (i = p),
                                    (m.height = i),
                                    (m.extrudedHeight = s),
                                    (m.shadowVolume = r._shadowVolume),
                                    (d = O(m, E));
                            } else {
                                (d = S(o.computePositions(m), E, l)),
                                    (d.attributes.position.values =
                                        _.scaleToGeodeticHeight(
                                            d.attributes.position.values,
                                            i,
                                            l,
                                        ));
                            }
                            var T = d.attributes,
                                R = t.fromVertices(
                                    T.position.values,
                                    void 0,
                                    3,
                                );
                            return (
                                E.position ||
                                    (d.attributes.position.values = void 0),
                                new h({
                                    attributes: T,
                                    indices: d.indices,
                                    primitiveType: y.TRIANGLES,
                                    boundingSphere: R,
                                })
                            );
                        }
                    }),
                    (M.createShadowVolume = function (e, t, n) {
                        var r = e._granularity,
                            a = e._ellipsoid,
                            i = t(r, a),
                            o = n(r, a);
                        return new M({
                            positions: e._positions,
                            width: e._width,
                            cornerType: e._cornerType,
                            ellipsoid: a,
                            granularity: r,
                            extrudedHeight: i,
                            height: o,
                            vertexFormat: R.POSITION_ONLY,
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
            'Workers/createCorridorGeometry',
            [
                '../Core/CorridorGeometry',
                '../Core/defined',
                '../Core/Ellipsoid',
            ],
            function (e, t, n) {
                'use strict';
                function r(r, a) {
                    return (
                        t(a) && (r = e.unpack(r, a)),
                        (r._ellipsoid = n.clone(r._ellipsoid)),
                        e.createGeometry(r)
                    );
                }
                return r;
            },
        );
})();
