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
                    p = new o(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (o.fromRadians = function (e, r, a, i, u) {
                        a = t(a, 0);
                        var s = n(i) ? i.radiiSquared : p,
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
                        p = a.y,
                        E = a.z,
                        m = l * l * d * d,
                        y = f * f * p * p,
                        _ = h * h * E * E,
                        v = m + y + _,
                        T = Math.sqrt(1 / v),
                        R = e.multiplyByScalar(n, T, i);
                    if (v < s) return isFinite(T) ? e.clone(R, c) : void 0;
                    var A = u.x,
                        S = u.y,
                        g = u.z,
                        N = o;
                    (N.x = R.x * A * 2),
                        (N.y = R.y * S * 2),
                        (N.z = R.z * g * 2);
                    var O,
                        w,
                        I,
                        x,
                        M,
                        C,
                        P,
                        D,
                        U,
                        L,
                        b,
                        F = ((1 - T) * e.magnitude(n)) / (0.5 * e.magnitude(N)),
                        B = 0;
                    do {
                        (F -= B),
                            (I = 1 / (1 + F * A)),
                            (x = 1 / (1 + F * S)),
                            (M = 1 / (1 + F * g)),
                            (C = I * I),
                            (P = x * x),
                            (D = M * M),
                            (U = C * I),
                            (L = P * x),
                            (b = D * M),
                            (O = m * C + y * P + _ * D - 1),
                            (w = m * U * A + y * L * S + _ * b * g);
                        B = O / (-2 * w);
                    } while (Math.abs(O) > r.EPSILON12);
                    return t(c)
                        ? ((c.x = l * I), (c.y = f * x), (c.z = h * M), c)
                        : new e(l * I, f * x, h * M);
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
                        var p = r(n) ? n.oneOverRadii : f,
                            E = r(n) ? n.oneOverRadiiSquared : h,
                            m = r(n) ? n._centerToleranceSquared : d,
                            y = o(t, p, E, m, c);
                        if (r(y)) {
                            var _ = e.multiplyComponents(y, E, s);
                            _ = e.normalize(_, _);
                            var v = e.subtract(t, y, l),
                                T = Math.atan2(_.y, _.x),
                                R = Math.asin(_.z),
                                A = i.sign(e.dot(v, t)) * e.magnitude(v);
                            return r(a)
                                ? ((a.longitude = T),
                                  (a.latitude = R),
                                  (a.height = A),
                                  a)
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
                var p = new e(),
                    E = new e(),
                    m = new e();
                return (
                    (f.prototype.cartesianToCartographic = function (n, r) {
                        var i = this.scaleToGeodeticSurface(n, E);
                        if (a(i)) {
                            var o = this.geodeticSurfaceNormal(i, p),
                                u = e.subtract(n, i, m),
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
                            var p =
                                d.longitude >= 0
                                    ? d.longitude
                                    : d.longitude + u.TWO_PI;
                            (i = Math.min(i, p)), (o = Math.max(o, p));
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
                                p = 0,
                                E = e.length;
                            p < E;
                            p++
                        ) {
                            var m = t.cartesianToCartographic(e[p]);
                            (o = Math.min(o, m.longitude)),
                                (c = Math.max(c, m.longitude)),
                                (h = Math.min(h, m.latitude)),
                                (d = Math.max(d, m.latitude));
                            var y =
                                m.longitude >= 0
                                    ? m.longitude
                                    : m.longitude + u.TWO_PI;
                            (l = Math.min(l, y)), (f = Math.max(f, y));
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
                            p = e.west,
                            E = c;
                        (E.height = a),
                            (E.longitude = p),
                            (E.latitude = f),
                            (o[l] = t.cartographicToCartesian(E, o[l])),
                            l++,
                            (E.longitude = d),
                            (o[l] = t.cartographicToCartesian(E, o[l])),
                            l++,
                            (E.latitude = h),
                            (o[l] = t.cartographicToCartesian(E, o[l])),
                            l++,
                            (E.longitude = p),
                            (o[l] = t.cartographicToCartesian(E, o[l])),
                            l++,
                            (E.latitude = f < 0 ? f : h > 0 ? h : 0);
                        for (var m = 1; m < 8; ++m)
                            (E.longitude = -Math.PI + m * u.PI_OVER_TWO),
                                s.contains(e, E) &&
                                    ((o[l] = t.cartographicToCartesian(
                                        E,
                                        o[l],
                                    )),
                                    l++);
                        return (
                            0 === E.latitude &&
                                ((E.longitude = p),
                                (o[l] = t.cartographicToCartesian(E, o[l])),
                                l++,
                                (E.longitude = d),
                                (o[l] = t.cartographicToCartesian(E, o[l])),
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
            function (e, t, n, r, a, i, o, u) {
                'use strict';
                function s(e, t, n, a) {
                    (this.x = r(e, 0)),
                        (this.y = r(t, 0)),
                        (this.width = r(n, 0)),
                        (this.height = r(a, 0));
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
                            a(n) || (n = new s()),
                            (n.x = e[t++]),
                            (n.y = e[t++]),
                            (n.width = e[t++]),
                            (n.height = e[t]),
                            n
                        );
                    }),
                    (s.fromPoints = function (e, t) {
                        if ((a(t) || (t = new s()), !a(e) || 0 === e.length))
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
                                i = e[0].y,
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
                                (i = Math.min(h, i)),
                                (u = Math.max(h, u));
                        }
                        return (
                            (t.x = r),
                            (t.y = i),
                            (t.width = o - r),
                            (t.height = u - i),
                            t
                        );
                    });
                var c = new i(),
                    l = new t(),
                    f = new t();
                return (
                    (s.fromRectangle = function (t, n, i) {
                        if ((a(i) || (i = new s()), !a(t)))
                            return (
                                (i.x = 0),
                                (i.y = 0),
                                (i.width = 0),
                                (i.height = 0),
                                i
                            );
                        n = r(n, c);
                        var o = n.project(u.southwest(t, l)),
                            h = n.project(u.northeast(t, f));
                        return (
                            e.subtract(h, o, h),
                            (i.x = o.x),
                            (i.y = o.y),
                            (i.width = h.x),
                            (i.height = h.y),
                            i
                        );
                    }),
                    (s.clone = function (e, t) {
                        if (a(e))
                            return a(t)
                                ? ((t.x = e.x),
                                  (t.y = e.y),
                                  (t.width = e.width),
                                  (t.height = e.height),
                                  t)
                                : new s(e.x, e.y, e.width, e.height);
                    }),
                    (s.union = function (e, t, n) {
                        a(n) || (n = new s());
                        var r = Math.min(e.x, t.x),
                            i = Math.min(e.y, t.y),
                            o = Math.max(e.x + e.width, t.x + t.width),
                            u = Math.max(e.y + e.height, t.y + t.height);
                        return (
                            (n.x = r),
                            (n.y = i),
                            (n.width = o - r),
                            (n.height = u - i),
                            n
                        );
                    }),
                    (s.expand = function (e, t, n) {
                        n = s.clone(e, n);
                        var r = t.x - n.x,
                            a = t.y - n.y;
                        return (
                            r > n.width
                                ? (n.width = r)
                                : r < 0 && ((n.width -= r), (n.x = t.x)),
                            a > n.height
                                ? (n.height = a)
                                : a < 0 && ((n.height -= a), (n.y = t.y)),
                            n
                        );
                    }),
                    (s.intersect = function (e, t) {
                        var n = e.x,
                            r = e.y,
                            a = t.x,
                            i = t.y;
                        return n > a + t.width ||
                            n + e.width < a ||
                            r + e.height < i ||
                            r > i + t.height
                            ? o.OUTSIDE
                            : o.INTERSECTING;
                    }),
                    (s.equals = function (e, t) {
                        return (
                            e === t ||
                            (a(e) &&
                                a(t) &&
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
                        var r = e[s.getElementIndex(E[n], p[n])];
                        t += 2 * r * r;
                    }
                    return Math.sqrt(t);
                }
                function f(e, t) {
                    for (var n = u.EPSILON15, r = 0, a = 1, i = 0; i < 3; ++i) {
                        var o = Math.abs(e[s.getElementIndex(E[i], p[i])]);
                        o > r && ((a = i), (r = o));
                    }
                    var c = 1,
                        l = 0,
                        f = p[a],
                        h = E[a];
                    if (Math.abs(e[s.getElementIndex(h, f)]) > n) {
                        var d,
                            m = e[s.getElementIndex(h, h)],
                            y = e[s.getElementIndex(f, f)],
                            _ = e[s.getElementIndex(h, f)],
                            v = (m - y) / 2 / _;
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
                            p = n - u - f + d,
                            E = 2 * (a - h),
                            m = 2 * (i + l),
                            y = 2 * (a + h),
                            _ = -n + u - f + d,
                            v = 2 * (c - o),
                            T = 2 * (i - l),
                            R = 2 * (c + o),
                            A = -n - u + f + d;
                        return r(t)
                            ? ((t[0] = p),
                              (t[1] = y),
                              (t[2] = T),
                              (t[3] = E),
                              (t[4] = _),
                              (t[5] = R),
                              (t[6] = m),
                              (t[7] = v),
                              (t[8] = A),
                              t)
                            : new s(p, E, m, y, _, v, T, R, A);
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
                            p = i * a + c * o * u,
                            E = -c * a + i * o * u,
                            m = -o,
                            y = c * n,
                            _ = i * n;
                        return r(t)
                            ? ((t[0] = l),
                              (t[1] = d),
                              (t[2] = m),
                              (t[3] = f),
                              (t[4] = p),
                              (t[5] = y),
                              (t[6] = h),
                              (t[7] = E),
                              (t[8] = _),
                              t)
                            : new s(l, f, h, d, p, E, m, y, _);
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
                var p = [1, 0, 0],
                    E = [2, 2, 1],
                    m = new s(),
                    y = new s();
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
                            f(h, m),
                                s.transpose(m, y),
                                s.multiply(h, m, h),
                                s.multiply(y, h, h),
                                s.multiply(o, m, o),
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
                function l(e, t, n, a, i, o, u, s, c, l, f, h, d, p, E, m) {
                    (this[0] = r(e, 0)),
                        (this[1] = r(i, 0)),
                        (this[2] = r(c, 0)),
                        (this[3] = r(d, 0)),
                        (this[4] = r(t, 0)),
                        (this[5] = r(o, 0)),
                        (this[6] = r(l, 0)),
                        (this[7] = r(p, 0)),
                        (this[8] = r(n, 0)),
                        (this[9] = r(u, 0)),
                        (this[10] = r(f, 0)),
                        (this[11] = r(E, 0)),
                        (this[12] = r(a, 0)),
                        (this[13] = r(s, 0)),
                        (this[14] = r(h, 0)),
                        (this[15] = r(m, 0));
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
                            p = t.y * t.z,
                            E = t.y * t.w,
                            m = t.z * t.z,
                            y = t.z * t.w,
                            _ = t.w * t.w,
                            v = s - d - m + _,
                            T = 2 * (c - y),
                            R = 2 * (f + E),
                            A = 2 * (c + y),
                            S = -s + d - m + _,
                            g = 2 * (p - h),
                            N = 2 * (f - E),
                            O = 2 * (p + h),
                            w = -s - d + m + _;
                        return (
                            (r[0] = v * i),
                            (r[1] = A * i),
                            (r[2] = N * i),
                            (r[3] = 0),
                            (r[4] = T * o),
                            (r[5] = S * o),
                            (r[6] = O * o),
                            (r[7] = 0),
                            (r[8] = R * u),
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
                        p = f.x,
                        E = f.y,
                        m = f.z,
                        y = d.x,
                        _ = d.y,
                        v = d.z,
                        T = r.x,
                        R = r.y,
                        A = r.z,
                        S = u * -T + s * -R + c * -A,
                        g = y * -T + _ * -R + v * -A,
                        N = p * T + E * R + m * A;
                    return a(n)
                        ? ((n[0] = u),
                          (n[1] = y),
                          (n[2] = -p),
                          (n[3] = 0),
                          (n[4] = s),
                          (n[5] = _),
                          (n[6] = -E),
                          (n[7] = 0),
                          (n[8] = c),
                          (n[9] = v),
                          (n[10] = -m),
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
                              y,
                              _,
                              v,
                              g,
                              -p,
                              -E,
                              -m,
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
                            p = f,
                            E = i + c,
                            m = o + l,
                            y = t + f;
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
                            (a[10] = p),
                            (a[11] = 0),
                            (a[12] = E),
                            (a[13] = m),
                            (a[14] = y),
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
                var E = new e();
                (l.getMaximumScale = function (t) {
                    return l.getScale(t, E), e.maximumComponent(E);
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
                            p = e[11],
                            E = e[12],
                            m = e[13],
                            y = e[14],
                            _ = e[15],
                            v = t[0],
                            T = t[1],
                            R = t[2],
                            A = t[3],
                            S = t[4],
                            g = t[5],
                            N = t[6],
                            O = t[7],
                            w = t[8],
                            I = t[9],
                            x = t[10],
                            M = t[11],
                            C = t[12],
                            P = t[13],
                            D = t[14],
                            U = t[15],
                            L = r * v + u * T + f * R + E * A,
                            b = a * v + s * T + h * R + m * A,
                            F = i * v + c * T + d * R + y * A,
                            B = o * v + l * T + p * R + _ * A,
                            z = r * S + u * g + f * N + E * O,
                            q = a * S + s * g + h * N + m * O,
                            G = i * S + c * g + d * N + y * O,
                            V = o * S + l * g + p * N + _ * O,
                            W = r * w + u * I + f * x + E * M,
                            X = a * w + s * I + h * x + m * M,
                            H = i * w + c * I + d * x + y * M,
                            Y = o * w + l * I + p * x + _ * M,
                            k = r * C + u * P + f * D + E * U,
                            Z = a * C + s * P + h * D + m * U,
                            j = i * C + c * P + d * D + y * U,
                            K = o * C + l * P + p * D + _ * U;
                        return (
                            (n[0] = L),
                            (n[1] = b),
                            (n[2] = F),
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
                            p = e[14],
                            E = t[0],
                            m = t[1],
                            y = t[2],
                            _ = t[4],
                            v = t[5],
                            T = t[6],
                            R = t[8],
                            A = t[9],
                            S = t[10],
                            g = t[12],
                            N = t[13],
                            O = t[14],
                            w = r * E + o * m + c * y,
                            I = a * E + u * m + l * y,
                            x = i * E + s * m + f * y,
                            M = r * _ + o * v + c * T,
                            C = a * _ + u * v + l * T,
                            P = i * _ + s * v + f * T,
                            D = r * R + o * A + c * S,
                            U = a * R + u * A + l * S,
                            L = i * R + s * A + f * S,
                            b = r * g + o * N + c * O + h,
                            F = a * g + u * N + l * O + d,
                            B = i * g + s * N + f * O + p;
                        return (
                            (n[0] = w),
                            (n[1] = I),
                            (n[2] = x),
                            (n[3] = 0),
                            (n[4] = M),
                            (n[5] = C),
                            (n[6] = P),
                            (n[7] = 0),
                            (n[8] = D),
                            (n[9] = U),
                            (n[10] = L),
                            (n[11] = 0),
                            (n[12] = b),
                            (n[13] = F),
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
                            p = t[2],
                            E = t[3],
                            m = t[4],
                            y = t[5],
                            _ = t[6],
                            v = t[7],
                            T = t[8],
                            R = r * h + o * d + c * p,
                            A = a * h + u * d + l * p,
                            S = i * h + s * d + f * p,
                            g = r * E + o * m + c * y,
                            N = a * E + u * m + l * y,
                            O = i * E + s * m + f * y,
                            w = r * _ + o * v + c * T,
                            I = a * _ + u * v + l * T,
                            x = i * _ + s * v + f * T;
                        return (
                            (n[0] = R),
                            (n[1] = A),
                            (n[2] = S),
                            (n[3] = 0),
                            (n[4] = g),
                            (n[5] = N),
                            (n[6] = O),
                            (n[7] = 0),
                            (n[8] = w),
                            (n[9] = I),
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
                var m = new e();
                (l.multiplyByUniformScale = function (e, t, n) {
                    return (
                        (m.x = t),
                        (m.y = t),
                        (m.z = t),
                        l.multiplyByScale(e, m, n)
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
                            a = e[4],
                            i = e[8],
                            o = e[12],
                            f = e[1],
                            h = e[5],
                            d = e[9],
                            p = e[13],
                            E = e[2],
                            m = e[6],
                            R = e[10],
                            A = e[14],
                            S = e[3],
                            g = e[7],
                            N = e[11],
                            O = e[15],
                            w = R * O,
                            I = A * N,
                            x = m * O,
                            M = A * g,
                            C = m * N,
                            P = R * g,
                            D = E * O,
                            U = A * S,
                            L = E * N,
                            b = R * S,
                            F = E * g,
                            B = m * S,
                            z = w * h + M * d + C * p - (I * h + x * d + P * p),
                            q = I * f + D * d + b * p - (w * f + U * d + L * p),
                            G = x * f + U * h + F * p - (M * f + D * h + B * p),
                            V = P * f + L * h + B * d - (C * f + b * h + F * d),
                            W = I * a + x * i + P * o - (w * a + M * i + C * o),
                            X = w * r + U * i + L * o - (I * r + D * i + b * o),
                            H = M * r + D * a + B * o - (x * r + U * a + F * o),
                            Y = C * r + b * a + F * i - (P * r + L * a + B * i);
                        (w = i * p),
                            (I = o * d),
                            (x = a * p),
                            (M = o * h),
                            (C = a * d),
                            (P = i * h),
                            (D = r * p),
                            (U = o * f),
                            (L = r * d),
                            (b = i * f),
                            (F = r * h),
                            (B = a * f);
                        var k = w * g + M * N + C * O - (I * g + x * N + P * O),
                            Z = I * S + D * N + b * O - (w * S + U * N + L * O),
                            j = x * S + U * g + F * O - (M * S + D * g + B * O),
                            K = P * S + L * g + B * N - (C * S + b * g + F * N),
                            J = x * R + P * A + I * m - (C * A + w * m + M * R),
                            Q = L * A + w * E + U * R - (D * R + b * A + I * E),
                            $ = D * m + B * A + M * E - (F * A + x * E + U * m),
                            ee =
                                F * R + C * E + b * m - (L * m + B * R + P * E),
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
                            p = -n * f - r * h - a * d,
                            E = -i * f - o * h - u * d,
                            m = -s * f - c * h - l * d;
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
                            (t[12] = p),
                            (t[13] = E),
                            (t[14] = m),
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
            function (e, t, n, r, a, i, o, u, s, c, l, f) {
                'use strict';
                function h(t, n) {
                    (this.center = e.clone(r(t, e.ZERO))),
                        (this.radius = r(n, 0));
                }
                var d = new e(),
                    p = new e(),
                    E = new e(),
                    m = new e(),
                    y = new e(),
                    _ = new e(),
                    v = new e(),
                    T = new e(),
                    R = new e(),
                    A = new e(),
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
                        i = e.clone(t[0], v),
                        o = e.clone(i, d),
                        u = e.clone(i, p),
                        s = e.clone(i, E),
                        c = e.clone(i, m),
                        l = e.clone(i, y),
                        f = e.clone(i, _),
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
                    var x = e.magnitudeSquared(e.subtract(c, o, T)),
                        M = e.magnitudeSquared(e.subtract(l, u, T)),
                        C = e.magnitudeSquared(e.subtract(f, s, T)),
                        P = o,
                        D = c,
                        U = x;
                    M > U && ((U = M), (P = u), (D = l)),
                        C > U && ((U = C), (P = s), (D = f));
                    var L = R;
                    (L.x = 0.5 * (P.x + D.x)),
                        (L.y = 0.5 * (P.y + D.y)),
                        (L.z = 0.5 * (P.z + D.z));
                    var b = e.magnitudeSquared(e.subtract(D, L, T)),
                        F = Math.sqrt(b),
                        B = A;
                    (B.x = o.x), (B.y = u.y), (B.z = s.z);
                    var z = S;
                    (z.x = c.x), (z.y = l.y), (z.z = f.z);
                    var q = e.multiplyByScalar(e.add(B, z, T), 0.5, g),
                        G = 0;
                    for (r = 0; r < N; r++) {
                        e.clone(t[r], i);
                        var V = e.magnitude(e.subtract(i, q, T));
                        V > G && (G = V);
                        var W = e.magnitudeSquared(e.subtract(i, L, T));
                        if (W > b) {
                            var X = Math.sqrt(W);
                            (F = 0.5 * (F + X)), (b = F * F);
                            var H = X - F;
                            (L.x = (F * L.x + H * i.x) / X),
                                (L.y = (F * L.y + H * i.y) / X),
                                (L.z = (F * L.z + H * i.z) / X);
                        }
                    }
                    return (
                        F < G
                            ? (e.clone(L, n.center), (n.radius = F))
                            : (e.clone(q, n.center), (n.radius = G)),
                        n
                    );
                };
                var N = new o(),
                    O = new e(),
                    w = new e(),
                    I = new t(),
                    x = new t();
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
                            f.northeast(t, x),
                            (x.height = o);
                        var s = n.project(I, O),
                            c = n.project(x, w),
                            l = c.x - s.x,
                            d = c.y - s.y,
                            p = c.z - s.z;
                        u.radius = 0.5 * Math.sqrt(l * l + d * d + p * p);
                        var E = u.center;
                        return (
                            (E.x = s.x + 0.5 * l),
                            (E.y = s.y + 0.5 * d),
                            (E.z = s.z + 0.5 * p),
                            u
                        );
                    });
                var M = [];
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
                    var s = f.subsample(t, n, o, M);
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
                        var u = v;
                        (u.x = t[0] + n.x),
                            (u.y = t[1] + n.y),
                            (u.z = t[2] + n.z);
                        var s,
                            c = e.clone(u, d),
                            l = e.clone(u, p),
                            f = e.clone(u, E),
                            N = e.clone(u, m),
                            O = e.clone(u, y),
                            w = e.clone(u, _),
                            I = t.length;
                        for (s = 0; s < I; s += i) {
                            var x = t[s] + n.x,
                                M = t[s + 1] + n.y,
                                C = t[s + 2] + n.z;
                            (u.x = x),
                                (u.y = M),
                                (u.z = C),
                                x < c.x && e.clone(u, c),
                                x > N.x && e.clone(u, N),
                                M < l.y && e.clone(u, l),
                                M > O.y && e.clone(u, O),
                                C < f.z && e.clone(u, f),
                                C > w.z && e.clone(u, w);
                        }
                        var P = e.magnitudeSquared(e.subtract(N, c, T)),
                            D = e.magnitudeSquared(e.subtract(O, l, T)),
                            U = e.magnitudeSquared(e.subtract(w, f, T)),
                            L = c,
                            b = N,
                            F = P;
                        D > F && ((F = D), (L = l), (b = O)),
                            U > F && ((F = U), (L = f), (b = w));
                        var B = R;
                        (B.x = 0.5 * (L.x + b.x)),
                            (B.y = 0.5 * (L.y + b.y)),
                            (B.z = 0.5 * (L.z + b.z));
                        var z = e.magnitudeSquared(e.subtract(b, B, T)),
                            q = Math.sqrt(z),
                            G = A;
                        (G.x = c.x), (G.y = l.y), (G.z = f.z);
                        var V = S;
                        (V.x = N.x), (V.y = O.y), (V.z = w.z);
                        var W = e.multiplyByScalar(e.add(G, V, T), 0.5, g),
                            X = 0;
                        for (s = 0; s < I; s += i) {
                            (u.x = t[s] + n.x),
                                (u.y = t[s + 1] + n.y),
                                (u.z = t[s + 2] + n.z);
                            var H = e.magnitude(e.subtract(u, W, T));
                            H > X && (X = H);
                            var Y = e.magnitudeSquared(e.subtract(u, B, T));
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
                        var i = v;
                        (i.x = t[0] + n[0]),
                            (i.y = t[1] + n[1]),
                            (i.z = t[2] + n[2]);
                        var o,
                            u = e.clone(i, d),
                            s = e.clone(i, p),
                            c = e.clone(i, E),
                            l = e.clone(i, m),
                            f = e.clone(i, y),
                            N = e.clone(i, _),
                            O = t.length;
                        for (o = 0; o < O; o += 3) {
                            var w = t[o] + n[o],
                                I = t[o + 1] + n[o + 1],
                                x = t[o + 2] + n[o + 2];
                            (i.x = w),
                                (i.y = I),
                                (i.z = x),
                                w < u.x && e.clone(i, u),
                                w > l.x && e.clone(i, l),
                                I < s.y && e.clone(i, s),
                                I > f.y && e.clone(i, f),
                                x < c.z && e.clone(i, c),
                                x > N.z && e.clone(i, N);
                        }
                        var M = e.magnitudeSquared(e.subtract(l, u, T)),
                            C = e.magnitudeSquared(e.subtract(f, s, T)),
                            P = e.magnitudeSquared(e.subtract(N, c, T)),
                            D = u,
                            U = l,
                            L = M;
                        C > L && ((L = C), (D = s), (U = f)),
                            P > L && ((L = P), (D = c), (U = N));
                        var b = R;
                        (b.x = 0.5 * (D.x + U.x)),
                            (b.y = 0.5 * (D.y + U.y)),
                            (b.z = 0.5 * (D.z + U.z));
                        var F = e.magnitudeSquared(e.subtract(U, b, T)),
                            B = Math.sqrt(F),
                            z = A;
                        (z.x = u.x), (z.y = s.y), (z.z = c.z);
                        var q = S;
                        (q.x = l.x), (q.y = f.y), (q.z = N.z);
                        var G = e.multiplyByScalar(e.add(z, q, T), 0.5, g),
                            V = 0;
                        for (o = 0; o < O; o += 3) {
                            (i.x = t[o] + n[o]),
                                (i.y = t[o + 1] + n[o + 1]),
                                (i.z = t[o + 2] + n[o + 2]);
                            var W = e.magnitude(e.subtract(i, G, T));
                            W > V && (V = W);
                            var X = e.magnitudeSquared(e.subtract(i, b, T));
                            if (X > F) {
                                var H = Math.sqrt(X);
                                (B = 0.5 * (B + H)), (F = B * B);
                                var Y = H - B;
                                (b.x = (B * b.x + Y * i.x) / H),
                                    (b.y = (B * b.y + Y * i.y) / H),
                                    (b.z = (B * b.z + Y * i.z) / H);
                            }
                        }
                        return (
                            B < V
                                ? (e.clone(b, r.center), (r.radius = B))
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
                    b = new e();
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
                        d = e.multiplyByScalar(c, (-o + f) / l, b);
                    return (
                        e.add(d, i, d), e.clone(d, r.center), (r.radius = f), r
                    );
                };
                var F = new e();
                (h.expand = function (t, n, r) {
                    r = h.clone(t, r);
                    var a = e.magnitude(e.subtract(n, r.center, F));
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
                            p = Y,
                            E = p[0];
                        e.add(s, l, E),
                            e.add(E, c, E),
                            (E = p[1]),
                            e.add(s, l, E),
                            e.add(E, d, E),
                            (E = p[2]),
                            e.add(s, f, E),
                            e.add(E, d, E),
                            (E = p[3]),
                            e.add(s, f, E),
                            e.add(E, c, E),
                            e.negate(s, s),
                            (E = p[4]),
                            e.add(s, l, E),
                            e.add(E, c, E),
                            (E = p[5]),
                            e.add(s, l, E),
                            e.add(E, d, E),
                            (E = p[6]),
                            e.add(s, f, E),
                            e.add(E, d, E),
                            (E = p[7]),
                            e.add(s, f, E),
                            e.add(E, c, E);
                        for (var m = p.length, y = 0; y < m; ++y) {
                            var _ = p[y];
                            e.add(o, _, _);
                            var v = i.cartesianToCartographic(_, H);
                            n.project(v, _);
                        }
                        (a = h.fromPoints(p, a)), (o = a.center);
                        var T = o.x,
                            R = o.y,
                            A = o.z;
                        return (o.x = A), (o.y = T), (o.z = R), a;
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
                    if (!t(R) && ((R = !1), !h())) {
                        var e = / Chrome\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((R = !0), (A = r(e[1])));
                    }
                    return R;
                }
                function i() {
                    return a() && A;
                }
                function o() {
                    if (
                        !t(S) &&
                        ((S = !1),
                        !a() && !h() && / Safari\/[\.0-9]+/.test(T.userAgent))
                    ) {
                        var e = / Version\/([\.0-9]+)/.exec(T.userAgent);
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
                    if (!t(w)) {
                        w = !1;
                        var e;
                        'Microsoft Internet Explorer' === T.appName
                            ? null !==
                                  (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      T.userAgent,
                                  )) && ((w = !0), (I = r(e[1])))
                            : 'Netscape' === T.appName &&
                              null !==
                                  (e =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          T.userAgent,
                                      )) &&
                              ((w = !0), (I = r(e[1])));
                    }
                    return w;
                }
                function f() {
                    return l() && I;
                }
                function h() {
                    if (!t(x)) {
                        x = !1;
                        var e = / Edge\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((x = !0), (M = r(e[1])));
                    }
                    return x;
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
                function E() {
                    return t(D) || (D = /Windows/i.test(T.appVersion)), D;
                }
                function m() {
                    return p() && P;
                }
                function y() {
                    return (
                        t(U) ||
                            (U =
                                'undefined' != typeof PointerEvent &&
                                (!t(T.pointerEnabled) || T.pointerEnabled)),
                        U
                    );
                }
                function _() {
                    if (!t(b)) {
                        var e = document.createElement('canvas');
                        e.setAttribute(
                            'style',
                            'image-rendering: -moz-crisp-edges;image-rendering: pixelated;',
                        );
                        var n = e.style.imageRendering;
                        (b = t(n) && '' !== n), b && (L = n);
                    }
                    return b;
                }
                function v() {
                    return _() ? L : void 0;
                }
                var T;
                T = 'undefined' != typeof navigator ? navigator : {};
                var R,
                    A,
                    S,
                    g,
                    N,
                    O,
                    w,
                    I,
                    x,
                    M,
                    C,
                    P,
                    D,
                    U,
                    L,
                    b,
                    F = {
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
                        isFirefox: p,
                        firefoxVersion: m,
                        isWindows: E,
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
                    var f, h, d, p, E, m, y, _;
                    r(a.z)
                        ? ((f = t.subtract(s, a, i)),
                          (h = t.subtract(c, a, o)),
                          (d = t.subtract(n, a, u)),
                          (p = t.dot(f, f)),
                          (E = t.dot(f, h)),
                          (m = t.dot(f, d)),
                          (y = t.dot(h, h)),
                          (_ = t.dot(h, d)))
                        : ((f = e.subtract(s, a, i)),
                          (h = e.subtract(c, a, o)),
                          (d = e.subtract(n, a, u)),
                          (p = e.dot(f, f)),
                          (E = e.dot(f, h)),
                          (m = e.dot(f, d)),
                          (y = e.dot(h, h)),
                          (_ = e.dot(h, d)));
                    var v = 1 / (p * y - E * E);
                    return (
                        (l.y = (y * m - E * _) * v),
                        (l.z = (p * _ - E * m) * v),
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
                        p = o * s - h,
                        E = o * c - u * s,
                        m = u * c - d,
                        y = 4 * p * m - E * E;
                    if (y < 0) {
                        var _, v, T;
                        h * f >= l * d
                            ? ((_ = o), (v = p), (T = -2 * u * p + o * E))
                            : ((_ = c), (v = m), (T = -c * E + 2 * s * m));
                        var R = T < 0 ? -1 : 1,
                            A = -R * Math.abs(_) * Math.sqrt(-y);
                        i = -T + A;
                        var S = i / 2,
                            g =
                                S < 0
                                    ? -Math.pow(-S, 1 / 3)
                                    : Math.pow(S, 1 / 3),
                            N = i === A ? -g : -v / g;
                        return (
                            (a = v <= 0 ? g + N : -T / (g * g + N * N + v)),
                            h * f >= l * d ? [(a - u) / o] : [-c / (a + s)]
                        );
                    }
                    var O = p,
                        w = -2 * u * p + o * E,
                        I = m,
                        x = -c * E + 2 * s * m,
                        M = Math.sqrt(y),
                        C = Math.sqrt(3) / 2,
                        P = Math.abs(Math.atan2(o * M, -w) / 3);
                    a = 2 * Math.sqrt(-O);
                    var D = Math.cos(P);
                    i = a * D;
                    var U = a * (-D / 2 - C * Math.sin(P)),
                        L = i + U > 2 * u ? i - u : U - u,
                        b = o,
                        F = L / b;
                    (P = Math.abs(Math.atan2(c * M, -x) / 3)),
                        (a = 2 * Math.sqrt(-I)),
                        (D = Math.cos(P)),
                        (i = a * D),
                        (U = a * (-D / 2 - C * Math.sin(P)));
                    var B = -c,
                        z = i + U < 2 * s ? i + s : U + s,
                        q = B / z,
                        G = b * z,
                        V = -L * z - b * B,
                        W = L * B,
                        X = (s * V - u * W) / (-u * V + s * G);
                    return F <= X
                        ? F <= q
                            ? X <= q
                                ? [F, X, q]
                                : [F, q, X]
                            : [q, F, X]
                        : F <= q
                          ? [X, F, q]
                          : X <= q
                            ? [X, q, F]
                            : [q, X, F];
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
                            var p = r.computeRealRoots(1, s, l);
                            if (2 === p.length) {
                                var E,
                                    m = p[0],
                                    y = p[1];
                                if (m >= 0 && y >= 0) {
                                    var _ = Math.sqrt(m),
                                        v = Math.sqrt(y);
                                    return [h - v, h - _, h + _, h + v];
                                }
                                if (m >= 0 && y < 0)
                                    return (E = Math.sqrt(m)), [h - E, h + E];
                                if (m < 0 && y >= 0)
                                    return (E = Math.sqrt(y)), [h - E, h + E];
                            }
                            return [];
                        }
                        if (d > 0) {
                            var T = Math.sqrt(d),
                                R = (s + d - c / T) / 2,
                                A = (s + d + c / T) / 2,
                                S = r.computeRealRoots(1, T, R),
                                g = r.computeRealRoots(1, -T, A);
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
                        var p,
                            E,
                            m = d[0],
                            y = a - m,
                            _ = y * y,
                            v = t / 2,
                            T = y / 2,
                            R = _ - 4 * o,
                            A = _ + 4 * Math.abs(o),
                            S = c - 4 * m,
                            g = c + 4 * Math.abs(m);
                        if (m < 0 || R * g < S * A) {
                            var N = Math.sqrt(S);
                            (p = N / 2), (E = 0 === N ? 0 : (t * T - i) / N);
                        } else {
                            var O = Math.sqrt(R);
                            (p = 0 === O ? 0 : (t * T - i) / O), (E = O / 2);
                        }
                        var w, I;
                        0 === v && 0 === p
                            ? ((w = 0), (I = 0))
                            : n.sign(v) === n.sign(p)
                              ? ((w = v + p), (I = m / w))
                              : ((I = v - p), (w = m / I));
                        var x, M;
                        0 === T && 0 === E
                            ? ((x = 0), (M = 0))
                            : n.sign(T) === n.sign(E)
                              ? ((x = T + E), (M = o / x))
                              : ((M = T - E), (x = o / M));
                        var C = r.computeRealRoots(1, w, x),
                            P = r.computeRealRoots(1, I, M);
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
                        l = e.subtract(o, s, _),
                        h = e.dot(u, u),
                        d = 2 * e.dot(u, l),
                        p = e.magnitudeSquared(l) - c,
                        E = f(h, d, p, A);
                    if (r(E)) return (a.start = E.root0), (a.stop = E.root1), a;
                }
                function d(e, t, n) {
                    var r = e + t;
                    return o.sign(e) !== o.sign(t) &&
                        Math.abs(r / Math.max(Math.abs(e), Math.abs(t))) < n
                        ? 0
                        : r;
                }
                function p(t, n, r, a, i) {
                    var l,
                        f = a * a,
                        h = i * i,
                        p = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * h,
                        E =
                            i *
                            (a *
                                d(
                                    t[u.COLUMN1ROW0],
                                    t[u.COLUMN0ROW1],
                                    o.EPSILON15,
                                ) +
                                n.y),
                        m =
                            t[u.COLUMN0ROW0] * f +
                            t[u.COLUMN2ROW2] * h +
                            a * n.x +
                            r,
                        y =
                            h *
                            d(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                        _ =
                            i *
                            (a * d(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + n.z),
                        v = [];
                    if (0 === _ && 0 === y) {
                        if (((l = s.computeRealRoots(p, E, m)), 0 === l.length))
                            return v;
                        var T = l[0],
                            R = Math.sqrt(Math.max(1 - T * T, 0));
                        if (
                            (v.push(new e(a, i * T, i * -R)),
                            v.push(new e(a, i * T, i * R)),
                            2 === l.length)
                        ) {
                            var A = l[1],
                                S = Math.sqrt(Math.max(1 - A * A, 0));
                            v.push(new e(a, i * A, i * -S)),
                                v.push(new e(a, i * A, i * S));
                        }
                        return v;
                    }
                    var g = _ * _,
                        N = y * y,
                        O = p * p,
                        w = _ * y,
                        I = O + N,
                        x = 2 * (E * p + w),
                        M = 2 * m * p + E * E - N + g,
                        C = 2 * (m * E - w),
                        P = m * m - g;
                    if (0 === I && 0 === x && 0 === M && 0 === C) return v;
                    l = c.computeRealRoots(I, x, M, C, P);
                    var D = l.length;
                    if (0 === D) return v;
                    for (var U = 0; U < D; ++U) {
                        var L,
                            b = l[U],
                            F = b * b,
                            B = Math.max(1 - F, 0),
                            z = Math.sqrt(B);
                        L =
                            o.sign(p) === o.sign(m)
                                ? d(p * F + m, E * b, o.EPSILON12)
                                : o.sign(m) === o.sign(E * b)
                                  ? d(p * F, E * b + m, o.EPSILON12)
                                  : d(p * F + E * b, m, o.EPSILON12);
                        var q = d(y * b, _, o.EPSILON15),
                            G = L * q;
                        G < 0
                            ? v.push(new e(a, i * b, i * z))
                            : G > 0
                              ? v.push(new e(a, i * b, i * -z))
                              : 0 !== z
                                ? (v.push(new e(a, i * b, i * -z)),
                                  v.push(new e(a, i * b, i * z)),
                                  ++U)
                                : v.push(new e(a, i * b, i * z));
                    }
                    return v;
                }
                var E = {};
                E.rayPlane = function (t, n, a) {
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
                var m = new e(),
                    y = new e(),
                    _ = new e(),
                    v = new e(),
                    T = new e();
                (E.rayTriangleParametric = function (t, r, a, i, u) {
                    u = n(u, !1);
                    var s,
                        c,
                        l,
                        f,
                        h,
                        d = t.origin,
                        p = t.direction,
                        E = e.subtract(a, r, m),
                        R = e.subtract(i, r, y),
                        A = e.cross(p, R, _),
                        S = e.dot(E, A);
                    if (u) {
                        if (S < o.EPSILON6) return;
                        if (
                            ((s = e.subtract(d, r, v)),
                            (l = e.dot(s, A)) < 0 || l > S)
                        )
                            return;
                        if (
                            ((c = e.cross(s, E, T)),
                            (f = e.dot(p, c)) < 0 || l + f > S)
                        )
                            return;
                        h = e.dot(R, c) / S;
                    } else {
                        if (Math.abs(S) < o.EPSILON6) return;
                        var g = 1 / S;
                        if (
                            ((s = e.subtract(d, r, v)),
                            (l = e.dot(s, A) * g) < 0 || l > 1)
                        )
                            return;
                        if (
                            ((c = e.cross(s, E, T)),
                            (f = e.dot(p, c) * g) < 0 || l + f > 1)
                        )
                            return;
                        h = e.dot(R, c) * g;
                    }
                    return h;
                }),
                    (E.rayTriangle = function (t, n, a, i, o, u) {
                        var s = E.rayTriangleParametric(t, n, a, i, o);
                        if (r(s) && !(s < 0))
                            return (
                                r(u) || (u = new e()),
                                e.multiplyByScalar(t.direction, s, u),
                                e.add(t.origin, u, u)
                            );
                    });
                var R = new l();
                E.lineSegmentTriangle = function (t, n, a, i, o, u, s) {
                    var c = R;
                    e.clone(t, c.origin),
                        e.subtract(n, t, c.direction),
                        e.normalize(c.direction, c.direction);
                    var l = E.rayTriangleParametric(c, a, i, o, u);
                    if (!(!r(l) || l < 0 || l > e.distance(t, n)))
                        return (
                            r(s) || (s = new e()),
                            e.multiplyByScalar(c.direction, l, s),
                            e.add(c.origin, s, s)
                        );
                };
                var A = { root0: 0, root1: 0 };
                E.raySphere = function (e, t, n) {
                    if (((n = h(e, t, n)), r(n) && !(n.stop < 0)))
                        return (n.start = Math.max(n.start, 0)), n;
                };
                var S = new l();
                E.lineSegmentSphere = function (t, n, a, i) {
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
                E.rayEllipsoid = function (t, n) {
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
                        var p = d * d;
                        if (
                            ((r = h - 1),
                            (a = e.magnitudeSquared(f)),
                            (o = a * r),
                            p < o)
                        )
                            return;
                        if (p > o) {
                            (u = d * d - o), (s = -d + Math.sqrt(u));
                            var E = s / a,
                                m = r / s;
                            return E < m ? new i(E, m) : { start: m, stop: E };
                        }
                        var y = Math.sqrt(r / a);
                        return new i(y, y);
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
                    x = new e(),
                    M = new e(),
                    C = new u(),
                    P = new u(),
                    D = new u(),
                    U = new u(),
                    L = new u(),
                    b = new u(),
                    F = new u(),
                    B = new e(),
                    z = new e(),
                    q = new t();
                E.grazingAltitudeLocation = function (t, n) {
                    var a = t.origin,
                        i = t.direction;
                    if (!e.equals(a, e.ZERO)) {
                        var s = n.geodeticSurfaceNormal(a, O);
                        if (e.dot(i, s) >= 0) return a;
                    }
                    var c = r(this.rayEllipsoid(t, n)),
                        l = n.transformPositionToScaledSpace(i, O),
                        f = e.normalize(l, l),
                        h = e.mostOrthogonalAxis(l, x),
                        d = e.normalize(e.cross(h, f, w), w),
                        E = e.normalize(e.cross(f, d, I), I),
                        m = C;
                    (m[0] = f.x),
                        (m[1] = f.y),
                        (m[2] = f.z),
                        (m[3] = d.x),
                        (m[4] = d.y),
                        (m[5] = d.z),
                        (m[6] = E.x),
                        (m[7] = E.y),
                        (m[8] = E.z);
                    var y = u.transpose(m, P),
                        _ = u.fromScale(n.radii, D),
                        v = u.fromScale(n.oneOverRadii, U),
                        T = L;
                    (T[0] = 0),
                        (T[1] = -i.z),
                        (T[2] = i.y),
                        (T[3] = i.z),
                        (T[4] = 0),
                        (T[5] = -i.x),
                        (T[6] = -i.y),
                        (T[7] = i.x),
                        (T[8] = 0);
                    var R,
                        A,
                        S = u.multiply(u.multiply(y, v, b), T, b),
                        g = u.multiply(u.multiply(S, _, F), m, F),
                        N = u.multiplyByVector(S, a, M),
                        G = p(g, e.negate(N, O), 0, 0, 1),
                        V = G.length;
                    if (V > 0) {
                        for (
                            var W = e.clone(e.ZERO, z),
                                X = Number.NEGATIVE_INFINITY,
                                H = 0;
                            H < V;
                            ++H
                        ) {
                            R = u.multiplyByVector(
                                _,
                                u.multiplyByVector(m, G[H], B),
                                B,
                            );
                            var Y = e.normalize(e.subtract(R, a, x), x),
                                k = e.dot(Y, i);
                            k > X && ((X = k), (W = e.clone(R, W)));
                        }
                        var Z = n.cartesianToCartographic(W, q);
                        return (
                            (X = o.clamp(X, 0, 1)),
                            (A =
                                e.magnitude(e.subtract(W, a, x)) *
                                Math.sqrt(1 - X * X)),
                            (A = c ? -A : A),
                            (Z.height = A),
                            n.cartographicToCartesian(Z, new e())
                        );
                    }
                };
                var G = new e();
                return (
                    (E.lineSegmentPlane = function (t, n, a, i) {
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
                    (E.trianglePlaneIntersection = function (t, n, r, a) {
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
                                    E.lineSegmentPlane(t, n, a, f),
                                    E.lineSegmentPlane(t, r, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [0, 3, 4, 1, 2, 4, 1, 4, 3],
                                    }
                                );
                            if (s)
                                return (
                                    E.lineSegmentPlane(n, r, a, f),
                                    E.lineSegmentPlane(n, t, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [1, 3, 4, 2, 0, 4, 2, 4, 3],
                                    }
                                );
                            if (c)
                                return (
                                    E.lineSegmentPlane(r, t, a, f),
                                    E.lineSegmentPlane(r, n, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [2, 3, 4, 0, 1, 4, 0, 4, 3],
                                    }
                                );
                        } else if (2 === l) {
                            if (!u)
                                return (
                                    E.lineSegmentPlane(n, t, a, f),
                                    E.lineSegmentPlane(r, t, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [1, 2, 4, 1, 4, 3, 0, 3, 4],
                                    }
                                );
                            if (!s)
                                return (
                                    E.lineSegmentPlane(r, n, a, f),
                                    E.lineSegmentPlane(t, n, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [2, 0, 4, 2, 4, 3, 1, 3, 4],
                                    }
                                );
                            if (!c)
                                return (
                                    E.lineSegmentPlane(t, r, a, f),
                                    E.lineSegmentPlane(n, r, a, h),
                                    {
                                        positions: [t, n, r, f, h],
                                        indices: [0, 1, 4, 0, 4, 3, 2, 3, 4],
                                    }
                                );
                        }
                    }),
                    E
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
                        for (var f = i + 1, h = 0; h < o; ++h)
                            f - c[r[h]] > i && ((c[r[h]] = f), ++f);
                        return (f - i + 1) / (o / 3);
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
                            f = i[l],
                            h = s;
                        if (t(o)) c = o + 1;
                        else {
                            for (; l < h; ) f > c && (c = f), ++l, (f = i[l]);
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
                        for (var E = 0; l < h; )
                            p[i[l]].vertexTriangles.push(E),
                                ++p[i[l]].numLiveTriangles,
                                p[i[l + 1]].vertexTriangles.push(E),
                                ++p[i[l + 1]].numLiveTriangles,
                                p[i[l + 2]].vertexTriangles.push(E),
                                ++p[i[l + 2]].numLiveTriangles,
                                ++E,
                                (l += 3);
                        var m = 0,
                            y = u + 1;
                        a = 1;
                        var _,
                            v,
                            T = [],
                            R = [],
                            A = 0,
                            S = [],
                            g = s / 3,
                            N = [];
                        for (d = 0; d < g; d++) N[d] = !1;
                        for (var O, w; -1 !== m; ) {
                            (T = []),
                                (v = p[m]),
                                (w = v.vertexTriangles.length);
                            for (var I = 0; I < w; ++I)
                                if (((E = v.vertexTriangles[I]), !N[E])) {
                                    (N[E] = !0), (l = E + E + E);
                                    for (var x = 0; x < 3; ++x)
                                        (O = i[l]),
                                            T.push(O),
                                            R.push(O),
                                            (S[A] = O),
                                            ++A,
                                            (_ = p[O]),
                                            --_.numLiveTriangles,
                                            y - _.timeStamp > u &&
                                                ((_.timeStamp = y), ++y),
                                            ++l;
                                }
                            m = (function (e, t, n, a, i, o, u) {
                                for (
                                    var s, c = -1, l = -1, f = 0;
                                    f < n.length;

                                ) {
                                    var h = n[f];
                                    a[h].numLiveTriangles &&
                                        ((s = 0),
                                        i -
                                            a[h].timeStamp +
                                            2 * a[h].numLiveTriangles <=
                                            t && (s = i - a[h].timeStamp),
                                        (s > l || -1 === l) &&
                                            ((l = s), (c = h))),
                                        ++f;
                                }
                                return -1 === c ? r(a, o, e, u) : c;
                            })(i, u, T, p, y, R, c);
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
                f,
                h,
                d,
                p,
                E,
                m,
                y,
                _,
                v,
                T,
                R,
                A,
                S,
                g,
            ) {
                'use strict';
                function N(e, t, n, r, a) {
                    (e[t++] = n),
                        (e[t++] = r),
                        (e[t++] = r),
                        (e[t++] = a),
                        (e[t++] = a),
                        (e[t] = n);
                }
                function O(e) {
                    for (
                        var t = e.length,
                            n = (t / 3) * 6,
                            r = m.createTypedArray(t, n),
                            a = 0,
                            i = 0;
                        i < t;
                        i += 3, a += 6
                    )
                        N(r, a, e[i], e[i + 1], e[i + 2]);
                    return r;
                }
                function w(e) {
                    var t = e.length;
                    if (t >= 3) {
                        var n = 6 * (t - 2),
                            r = m.createTypedArray(t, n);
                        N(r, 0, e[0], e[1], e[2]);
                        for (var a = 6, i = 3; i < t; ++i, a += 6)
                            N(r, a, e[i - 1], e[i], e[i - 2]);
                        return r;
                    }
                    return new Uint16Array();
                }
                function I(e) {
                    if (e.length > 0) {
                        for (
                            var t = e.length - 1,
                                n = 6 * (t - 1),
                                r = m.createTypedArray(t, n),
                                a = e[0],
                                i = 0,
                                o = 1;
                            o < t;
                            ++o, i += 6
                        )
                            N(r, i, a, e[o], e[o + 1]);
                        return r;
                    }
                    return new Uint16Array();
                }
                function x(e) {
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
                                R.multiplyByPoint(e, ie, ie),
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
                                T.multiplyByVector(e, ie, ie),
                                (ie = a.normalize(ie, ie)),
                                a.pack(ie, n, i);
                }
                function D(e, t) {
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
                                (a[n] = new p({
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
                    var r,
                        i,
                        o,
                        u,
                        s,
                        l,
                        f,
                        h = e.length,
                        p = (e[0].modelMatrix, c(e[0][t].indices)),
                        E = e[0][t].primitiveType,
                        y = D(e, t);
                    for (r in y)
                        if (y.hasOwnProperty(r))
                            for (s = y[r].values, u = 0, i = 0; i < h; ++i)
                                for (
                                    l = e[i][t].attributes[r].values,
                                        f = l.length,
                                        o = 0;
                                    o < f;
                                    ++o
                                )
                                    s[u++] = l[o];
                    var _;
                    if (p) {
                        var v = 0;
                        for (i = 0; i < h; ++i) v += e[i][t].indices.length;
                        var T = d.computeNumberOfVertices(
                                new d({
                                    attributes: y,
                                    primitiveType: S.POINTS,
                                }),
                            ),
                            R = m.createTypedArray(T, v),
                            A = 0,
                            g = 0;
                        for (i = 0; i < h; ++i) {
                            var N = e[i][t].indices,
                                O = N.length;
                            for (u = 0; u < O; ++u) R[A++] = g + N[u];
                            g += d.computeNumberOfVertices(e[i][t]);
                        }
                        _ = R;
                    }
                    var w,
                        I = new a(),
                        x = 0;
                    for (i = 0; i < h; ++i) {
                        if (((w = e[i][t].boundingSphere), !c(w))) {
                            I = void 0;
                            break;
                        }
                        a.add(w.center, I, I);
                    }
                    if (c(I))
                        for (a.divideByScalar(I, h, I), i = 0; i < h; ++i) {
                            w = e[i][t].boundingSphere;
                            var M =
                                a.magnitude(a.subtract(w.center, I, se)) +
                                w.radius;
                            M > x && (x = M);
                        }
                    return new d({
                        attributes: y,
                        indices: _,
                        primitiveType: E,
                        boundingSphere: c(I) ? new n(I, x) : void 0,
                    });
                }
                function L(e) {
                    if (c(e.indices)) return e;
                    for (
                        var t = d.computeNumberOfVertices(e),
                            n = m.createTypedArray(t, t),
                            r = 0;
                        r < t;
                        ++r
                    )
                        n[r] = r;
                    return (e.indices = n), e;
                }
                function b(e) {
                    var t = d.computeNumberOfVertices(e),
                        n = m.createTypedArray(t, 3 * (t - 2));
                    (n[0] = 1), (n[1] = 0), (n[2] = 2);
                    for (var r = 3, a = 3; a < t; ++a)
                        (n[r++] = a - 1), (n[r++] = 0), (n[r++] = a);
                    return (e.indices = n), (e.primitiveType = S.TRIANGLES), e;
                }
                function F(e) {
                    var t = d.computeNumberOfVertices(e),
                        n = m.createTypedArray(t, 3 * (t - 2));
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
                        var t = d.computeNumberOfVertices(e),
                            n = m.createTypedArray(t, t),
                            r = 0;
                        r < t;
                        ++r
                    )
                        n[r] = r;
                    return (e.indices = n), e;
                }
                function z(e) {
                    var t = d.computeNumberOfVertices(e),
                        n = m.createTypedArray(t, 2 * (t - 1));
                    (n[0] = 0), (n[1] = 1);
                    for (var r = 2, a = 2; a < t; ++a)
                        (n[r++] = a - 1), (n[r++] = a);
                    return (e.indices = n), (e.primitiveType = S.LINES), e;
                }
                function q(e) {
                    var t = d.computeNumberOfVertices(e),
                        n = m.createTypedArray(t, 2 * t);
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
                function G(e) {
                    switch (e.primitiveType) {
                        case S.TRIANGLE_FAN:
                            return b(e);
                        case S.TRIANGLE_STRIP:
                            return F(e);
                        case S.TRIANGLES:
                            return L(e);
                        case S.LINE_STRIP:
                            return z(e);
                        case S.LINE_LOOP:
                            return q(e);
                        case S.LINES:
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
                        a = Math.abs(e.y),
                        i = Math.abs(t.y),
                        o = Math.abs(n.y);
                    r =
                        a > i
                            ? a > o
                                ? v.sign(e.y)
                                : v.sign(n.y)
                            : i > o
                              ? v.sign(t.y)
                              : v.sign(n.y);
                    var u = r < 0;
                    V(e, u), V(t, u), V(n, u);
                }
                function X(e, t, n, r) {
                    a.add(
                        e,
                        a.multiplyByScalar(
                            a.subtract(t, e, Re),
                            e.y / (e.y - t.y),
                            Re,
                        ),
                        n,
                    ),
                        a.clone(n, r),
                        V(n, !0),
                        V(r, !1);
                }
                function H(e, t, n) {
                    if (!(e.x >= 0 || t.x >= 0 || n.x >= 0)) {
                        W(e, t, n);
                        var r = e.y < 0,
                            a = t.y < 0,
                            i = n.y < 0,
                            o = 0;
                        (o += r ? 1 : 0), (o += a ? 1 : 0), (o += i ? 1 : 0);
                        var u = Oe.indices;
                        1 === o
                            ? ((u[1] = 3),
                              (u[2] = 4),
                              (u[5] = 6),
                              (u[7] = 6),
                              (u[8] = 5),
                              r
                                  ? (X(e, t, Ae, ge),
                                    X(e, n, Se, Ne),
                                    (u[0] = 0),
                                    (u[3] = 1),
                                    (u[4] = 2),
                                    (u[6] = 1))
                                  : a
                                    ? (X(t, n, Ae, ge),
                                      X(t, e, Se, Ne),
                                      (u[0] = 1),
                                      (u[3] = 2),
                                      (u[4] = 0),
                                      (u[6] = 2))
                                    : i &&
                                      (X(n, e, Ae, ge),
                                      X(n, t, Se, Ne),
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
                                        (X(n, e, Ae, ge),
                                        X(n, t, Se, Ne),
                                        (u[0] = 0),
                                        (u[1] = 1),
                                        (u[3] = 0),
                                        (u[6] = 2))
                                      : (X(t, n, Ae, ge),
                                        X(t, e, Se, Ne),
                                        (u[0] = 2),
                                        (u[1] = 0),
                                        (u[3] = 2),
                                        (u[6] = 1))
                                  : (X(e, t, Ae, ge),
                                    X(e, n, Se, Ne),
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
                                (s[4] = Se),
                                (s[5] = ge),
                                (s[6] = Ne),
                                (s.length = 7)),
                            Oe
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
                        var o = d.computeNumberOfVertices(e);
                        return (
                            (e.indices = m.createTypedArray(o, e.indices)),
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
                            n[r] = new p({
                                componentDatatype: a.componentDatatype,
                                componentsPerAttribute:
                                    a.componentsPerAttribute,
                                normalize: a.normalize,
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
                function j(e, n, i, o, u, s, l, f, h, d, p, E) {
                    if (c(s) || c(l) || c(f) || c(h) || c(d)) {
                        var m = a.fromArray(u, 3 * e, we),
                            y = a.fromArray(u, 3 * n, Ie),
                            _ = a.fromArray(u, 3 * i, xe),
                            v = t(o, m, y, _, Me);
                        if (c(s)) {
                            var T = a.fromArray(s, 3 * e, we),
                                R = a.fromArray(s, 3 * n, Ie),
                                A = a.fromArray(s, 3 * i, xe);
                            a.multiplyByScalar(T, v.x, T),
                                a.multiplyByScalar(R, v.y, R),
                                a.multiplyByScalar(A, v.z, A);
                            var S = a.add(T, R, T);
                            a.add(S, A, S),
                                a.normalize(S, S),
                                a.pack(S, p.normal.values, 3 * E);
                        }
                        if (c(d)) {
                            var g = a.fromArray(d, 3 * e, we),
                                N = a.fromArray(d, 3 * n, Ie),
                                O = a.fromArray(d, 3 * i, xe);
                            a.multiplyByScalar(g, v.x, g),
                                a.multiplyByScalar(N, v.y, N),
                                a.multiplyByScalar(O, v.z, O);
                            var w;
                            a.equals(g, a.ZERO) &&
                            a.equals(N, a.ZERO) &&
                            a.equals(O, a.ZERO)
                                ? ((w = we), (w.x = 0), (w.y = 0), (w.z = 0))
                                : ((w = a.add(g, N, g)),
                                  a.add(w, O, w),
                                  a.normalize(w, w)),
                                a.pack(w, p.extrudeDirection.values, 3 * E);
                        }
                        if (c(l)) {
                            var I = a.fromArray(l, 3 * e, we),
                                x = a.fromArray(l, 3 * n, Ie),
                                M = a.fromArray(l, 3 * i, xe);
                            a.multiplyByScalar(I, v.x, I),
                                a.multiplyByScalar(x, v.y, x),
                                a.multiplyByScalar(M, v.z, M);
                            var C = a.add(I, x, I);
                            a.add(C, M, C),
                                a.normalize(C, C),
                                a.pack(C, p.tangent.values, 3 * E);
                        }
                        if (c(f)) {
                            var P = a.fromArray(f, 3 * e, we),
                                D = a.fromArray(f, 3 * n, Ie),
                                U = a.fromArray(f, 3 * i, xe);
                            a.multiplyByScalar(P, v.x, P),
                                a.multiplyByScalar(D, v.y, D),
                                a.multiplyByScalar(U, v.z, U);
                            var L = a.add(P, D, P);
                            a.add(L, U, L),
                                a.normalize(L, L),
                                a.pack(L, p.bitangent.values, 3 * E);
                        }
                        if (c(h)) {
                            var b = r.fromArray(h, 2 * e, Ce),
                                F = r.fromArray(h, 2 * n, Pe),
                                B = r.fromArray(h, 2 * i, De);
                            r.multiplyByScalar(b, v.x, b),
                                r.multiplyByScalar(F, v.y, F),
                                r.multiplyByScalar(B, v.z, B);
                            var z = r.add(b, F, b);
                            r.add(z, B, z), r.pack(z, p.st.values, 2 * E);
                        }
                    }
                }
                function K(e, t, n, r, a, i) {
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
                function J(e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        u = e.geometry,
                        s = u.attributes,
                        l = s.position.values,
                        f = c(s.normal) ? s.normal.values : void 0,
                        h = c(s.bitangent) ? s.bitangent.values : void 0,
                        d = c(s.tangent) ? s.tangent.values : void 0,
                        p = c(s.st) ? s.st.values : void 0,
                        E = c(s.extrudeDirection)
                            ? s.extrudeDirection.values
                            : void 0,
                        m = u.indices,
                        y = k(u),
                        _ = k(u),
                        v = [];
                    v.length = l.length / 3;
                    var T = [];
                    for (T.length = l.length / 3, o = 0; o < v.length; ++o)
                        (v[o] = -1), (T[o] = -1);
                    var R = m.length;
                    for (o = 0; o < R; o += 3) {
                        var A = m[o],
                            S = m[o + 1],
                            g = m[o + 2],
                            N = a.fromArray(l, 3 * A),
                            O = a.fromArray(l, 3 * S),
                            w = a.fromArray(l, 3 * g),
                            I = H(N, O, w);
                        if (c(I) && I.positions.length > 3)
                            for (
                                var x = I.positions,
                                    M = I.indices,
                                    C = M.length,
                                    P = 0;
                                P < C;
                                ++P
                            ) {
                                var D = M[P],
                                    U = x[D];
                                U.y < 0
                                    ? ((t = _.attributes),
                                      (n = _.indices),
                                      (r = v))
                                    : ((t = y.attributes),
                                      (n = y.indices),
                                      (r = T)),
                                    (i = K(t, n, r, m, D < 3 ? o + D : -1, U)),
                                    j(A, S, g, U, l, f, d, h, p, E, t, i);
                            }
                        else
                            c(I) &&
                                ((N = I.positions[0]),
                                (O = I.positions[1]),
                                (w = I.positions[2])),
                                N.y < 0
                                    ? ((t = _.attributes),
                                      (n = _.indices),
                                      (r = v))
                                    : ((t = y.attributes),
                                      (n = y.indices),
                                      (r = T)),
                                (i = K(t, n, r, m, o, N)),
                                j(A, S, g, N, l, f, d, h, p, E, t, i),
                                (i = K(t, n, r, m, o + 1, O)),
                                j(A, S, g, O, l, f, d, h, p, E, t, i),
                                (i = K(t, n, r, m, o + 2, w)),
                                j(A, S, g, w, l, f, d, h, p, E, t, i);
                    }
                    Z(e, _, y);
                }
                function Q(e) {
                    var t,
                        n = e.geometry,
                        r = n.attributes,
                        i = r.position.values,
                        o = n.indices,
                        u = k(n),
                        s = k(n),
                        l = o.length,
                        f = [];
                    f.length = i.length / 3;
                    var h = [];
                    for (h.length = i.length / 3, t = 0; t < f.length; ++t)
                        (f[t] = -1), (h[t] = -1);
                    for (t = 0; t < l; t += 2) {
                        var d = o[t],
                            p = o[t + 1],
                            E = a.fromArray(i, 3 * d, we),
                            m = a.fromArray(i, 3 * p, Ie);
                        Math.abs(E.y) < v.EPSILON6 &&
                            (E.y < 0
                                ? (E.y = -v.EPSILON6)
                                : (E.y = v.EPSILON6)),
                            Math.abs(m.y) < v.EPSILON6 &&
                                (m.y < 0
                                    ? (m.y = -v.EPSILON6)
                                    : (m.y = v.EPSILON6));
                        var y = u.attributes,
                            T = u.indices,
                            R = h,
                            A = s.attributes,
                            S = s.indices,
                            g = f,
                            N = _.lineSegmentPlane(E, m, Ue, xe);
                        if (c(N)) {
                            var O = a.multiplyByScalar(
                                a.UNIT_Y,
                                5 * v.EPSILON9,
                                Le,
                            );
                            E.y < 0 &&
                                (a.negate(O, O),
                                (y = s.attributes),
                                (T = s.indices),
                                (R = f),
                                (A = u.attributes),
                                (S = u.indices),
                                (g = h));
                            var w = a.add(N, O, be);
                            K(y, T, R, o, t, E),
                                K(y, T, R, o, -1, w),
                                a.negate(O, O),
                                a.add(N, O, w),
                                K(A, S, g, o, -1, w),
                                K(A, S, g, o, t + 1, m);
                        } else {
                            var I, x, M;
                            E.y < 0
                                ? ((I = s.attributes), (x = s.indices), (M = f))
                                : ((I = u.attributes),
                                  (x = u.indices),
                                  (M = h)),
                                K(I, x, M, o, t, E),
                                K(I, x, M, o, t + 1, m);
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
                            var c = a.unpack(r, u, qe);
                            ((s.y < 0 && c.y > 0) || (s.y > 0 && c.y < 0)) &&
                                (u - 3 > 0
                                    ? ((r[u] = n[u - 3]),
                                      (r[u + 1] = n[u - 2]),
                                      (r[u + 2] = n[u - 1]))
                                    : a.pack(s, r, u));
                            var l = a.unpack(i, u, Ge);
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
                        f = s.prevPosition.values,
                        h = s.nextPosition.values,
                        d = s.expandAndWidth.values,
                        p = c(s.st) ? s.st.values : void 0,
                        E = c(s.color) ? s.color.values : void 0,
                        m = k(u),
                        y = k(u),
                        T = !1,
                        R = l.length / 3;
                    for (t = 0; t < R; t += 4) {
                        var A = t,
                            S = t + 2,
                            g = a.fromArray(l, 3 * A, ze),
                            N = a.fromArray(l, 3 * S, qe);
                        if (Math.abs(g.y) < ke)
                            for (
                                g.y = ke * (N.y < 0 ? -1 : 1),
                                    l[3 * t + 1] = g.y,
                                    l[3 * (t + 1) + 1] = g.y,
                                    n = 3 * A;
                                n < 3 * A + 12;
                                n += 3
                            )
                                (f[n] = l[3 * t]),
                                    (f[n + 1] = l[3 * t + 1]),
                                    (f[n + 2] = l[3 * t + 2]);
                        if (Math.abs(N.y) < ke)
                            for (
                                N.y = ke * (g.y < 0 ? -1 : 1),
                                    l[3 * (t + 2) + 1] = N.y,
                                    l[3 * (t + 3) + 1] = N.y,
                                    n = 3 * A;
                                n < 3 * A + 12;
                                n += 3
                            )
                                (h[n] = l[3 * (t + 2)]),
                                    (h[n + 1] = l[3 * (t + 2) + 1]),
                                    (h[n + 2] = l[3 * (t + 2) + 2]);
                        var O = m.attributes,
                            w = m.indices,
                            I = y.attributes,
                            x = y.indices,
                            M = _.lineSegmentPlane(g, N, Ue, Ve);
                        if (c(M)) {
                            T = !0;
                            var C = a.multiplyByScalar(a.UNIT_Y, Ye, We);
                            g.y < 0 &&
                                (a.negate(C, C),
                                (O = y.attributes),
                                (w = y.indices),
                                (I = m.attributes),
                                (x = m.indices));
                            var P = a.add(M, C, Xe);
                            O.position.values.push(
                                g.x,
                                g.y,
                                g.z,
                                g.x,
                                g.y,
                                g.z,
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
                                    g.x,
                                    g.y,
                                    g.z,
                                    g.x,
                                    g.y,
                                    g.z,
                                ),
                                O.nextPosition.values.push(P.x, P.y, P.z),
                                O.nextPosition.values.push(P.x, P.y, P.z),
                                O.nextPosition.values.push(P.x, P.y, P.z),
                                O.nextPosition.values.push(P.x, P.y, P.z),
                                a.negate(C, C),
                                a.add(M, C, P),
                                I.position.values.push(P.x, P.y, P.z),
                                I.position.values.push(P.x, P.y, P.z),
                                I.position.values.push(
                                    N.x,
                                    N.y,
                                    N.z,
                                    N.x,
                                    N.y,
                                    N.z,
                                ),
                                I.prevPosition.values.push(P.x, P.y, P.z),
                                I.prevPosition.values.push(P.x, P.y, P.z),
                                I.prevPosition.values.push(P.x, P.y, P.z),
                                I.prevPosition.values.push(P.x, P.y, P.z),
                                I.nextPosition.values.push(
                                    N.x,
                                    N.y,
                                    N.z,
                                    N.x,
                                    N.y,
                                    N.z,
                                ),
                                I.nextPosition.values.push(
                                    h[3 * S],
                                    h[3 * S + 1],
                                    h[3 * S + 2],
                                ),
                                I.nextPosition.values.push(
                                    h[3 * S + 3],
                                    h[3 * S + 4],
                                    h[3 * S + 5],
                                );
                            var D = r.fromArray(d, 2 * A, Fe),
                                U = Math.abs(D.y);
                            O.expandAndWidth.values.push(-1, U, 1, U),
                                O.expandAndWidth.values.push(-1, -U, 1, -U),
                                I.expandAndWidth.values.push(-1, U, 1, U),
                                I.expandAndWidth.values.push(-1, -U, 1, -U);
                            var L = a.magnitudeSquared(a.subtract(M, g, Ge));
                            if (
                                ((L /= a.magnitudeSquared(
                                    a.subtract(N, g, Ge),
                                )),
                                c(E))
                            ) {
                                var b = i.fromArray(E, 4 * A, He),
                                    F = i.fromArray(E, 4 * S, He),
                                    B = v.lerp(b.x, F.x, L),
                                    z = v.lerp(b.y, F.y, L),
                                    q = v.lerp(b.z, F.z, L),
                                    G = v.lerp(b.w, F.w, L);
                                for (n = 4 * A; n < 4 * A + 8; ++n)
                                    O.color.values.push(E[n]);
                                for (
                                    O.color.values.push(B, z, q, G),
                                        O.color.values.push(B, z, q, G),
                                        I.color.values.push(B, z, q, G),
                                        I.color.values.push(B, z, q, G),
                                        n = 4 * S;
                                    n < 4 * S + 8;
                                    ++n
                                )
                                    I.color.values.push(E[n]);
                            }
                            if (c(p)) {
                                var V = r.fromArray(p, 2 * A, Fe),
                                    W = r.fromArray(p, 2 * (t + 3), Be),
                                    X = v.lerp(V.x, W.x, L);
                                for (n = 2 * A; n < 2 * A + 4; ++n)
                                    O.st.values.push(p[n]);
                                for (
                                    O.st.values.push(X, V.y),
                                        O.st.values.push(X, W.y),
                                        I.st.values.push(X, V.y),
                                        I.st.values.push(X, W.y),
                                        n = 2 * S;
                                    n < 2 * S + 4;
                                    ++n
                                )
                                    I.st.values.push(p[n]);
                            }
                            (o = O.position.values.length / 3 - 4),
                                w.push(o, o + 2, o + 1),
                                w.push(o + 1, o + 2, o + 3),
                                (o = I.position.values.length / 3 - 4),
                                x.push(o, o + 2, o + 1),
                                x.push(o + 1, o + 2, o + 3);
                        } else {
                            var H, Y;
                            for (
                                g.y < 0
                                    ? ((H = y.attributes), (Y = y.indices))
                                    : ((H = m.attributes), (Y = m.indices)),
                                    H.position.values.push(g.x, g.y, g.z),
                                    H.position.values.push(g.x, g.y, g.z),
                                    H.position.values.push(N.x, N.y, N.z),
                                    H.position.values.push(N.x, N.y, N.z),
                                    n = 3 * t;
                                n < 3 * t + 12;
                                ++n
                            )
                                H.prevPosition.values.push(f[n]),
                                    H.nextPosition.values.push(h[n]);
                            for (n = 2 * t; n < 2 * t + 8; ++n)
                                H.expandAndWidth.values.push(d[n]),
                                    c(p) && H.st.values.push(p[n]);
                            if (c(E))
                                for (n = 4 * t; n < 4 * t + 16; ++n)
                                    H.color.values.push(E[n]);
                            (o = H.position.values.length / 3 - 4),
                                Y.push(o, o + 2, o + 1),
                                Y.push(o + 1, o + 2, o + 3);
                        }
                    }
                    T && ($(y), $(m)), Z(e, y, m);
                }
                var te = {};
                (te.toWireframe = function (e) {
                    var t = e.indices;
                    if (c(t)) {
                        switch (e.primitiveType) {
                            case S.TRIANGLES:
                                e.indices = O(t);
                                break;
                            case S.TRIANGLE_STRIP:
                                e.indices = w(t);
                                break;
                            case S.TRIANGLE_FAN:
                                e.indices = I(t);
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
                                f = 0,
                                h = 0;
                            h < o;
                            h += 3
                        )
                            (l[f++] = a[h]),
                                (l[f++] = a[h + 1]),
                                (l[f++] = a[h + 2]),
                                (l[f++] = a[h] + i[h] * r),
                                (l[f++] = a[h + 1] + i[h + 1] * r),
                                (l[f++] = a[h + 2] + i[h + 2] * r);
                        var E,
                            m = e.boundingSphere;
                        return (
                            c(m) && (E = new n(m.center, m.radius + r)),
                            new d({
                                attributes: {
                                    position: new p({
                                        componentDatatype: u.DOUBLE,
                                        componentsPerAttribute: 3,
                                        values: l,
                                    }),
                                },
                                primitiveType: S.LINES,
                                boundingSphere: E,
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
                        var t = d.computeNumberOfVertices(e),
                            n = e.indices;
                        if (c(n)) {
                            for (var r = new Int32Array(t), a = 0; a < t; a++)
                                r[a] = -1;
                            for (
                                var i,
                                    o = n,
                                    s = o.length,
                                    l = m.createTypedArray(t, s),
                                    f = 0,
                                    h = 0,
                                    p = 0;
                                f < s;

                            )
                                (i = r[o[f]]),
                                    -1 !== i
                                        ? (l[h] = i)
                                        : ((i = o[f]),
                                          (r[i] = p),
                                          (l[h] = p),
                                          ++p),
                                    ++f,
                                    ++h;
                            e.indices = l;
                            var E = e.attributes;
                            for (var y in E)
                                if (
                                    E.hasOwnProperty(y) &&
                                    c(E[y]) &&
                                    c(E[y].values)
                                ) {
                                    for (
                                        var _ = E[y],
                                            v = _.values,
                                            T = 0,
                                            R = _.componentsPerAttribute,
                                            A = u.createTypedArray(
                                                _.componentDatatype,
                                                p * R,
                                            );
                                        T < t;

                                    ) {
                                        var S = r[T];
                                        if (-1 !== S)
                                            for (var g = 0; g < R; g++)
                                                A[R * S + g] = v[R * T + g];
                                        ++T;
                                    }
                                    _.values = A;
                                }
                        }
                        return e;
                    }),
                    (te.reorderForPostVertexCache = function (e, t) {
                        var n = e.indices;
                        if (e.primitiveType === S.TRIANGLES && c(n)) {
                            for (var r = n.length, a = 0, i = 0; i < r; i++)
                                n[i] > a && (a = n[i]);
                            e.indices = g.tipsify({
                                indices: n,
                                maximumIndex: a,
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
                            for (var f = 0; f < l; f += r) {
                                for (var h = 0; h < r; ++h) {
                                    var p = s[f + h],
                                        E = a[p];
                                    c(E) ||
                                        ((E = o++),
                                        (a[p] = E),
                                        M(u, e.attributes, p)),
                                        i.push(E);
                                }
                                o + r >= v.SIXTY_FOUR_KILOBYTES &&
                                    (t.push(
                                        new d({
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
                                    new d({
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
                    i = c(i) ? i : new h();
                    for (
                        var s = i.ellipsoid,
                            l = o.values,
                            f = new Float64Array(l.length),
                            d = 0,
                            E = 0;
                        E < l.length;
                        E += 3
                    ) {
                        var m = a.fromArray(l, E, ne),
                            y = s.cartesianToCartographic(m, re),
                            _ = i.project(y, ne);
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
                        f.encode(i[l], ae), (s[l] = ae.high), (c[l] = ae.low);
                    var h = a.componentsPerAttribute;
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
                var ie = new a(),
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
                    var a = e.geometry.boundingSphere;
                    return (
                        c(a) &&
                            (e.geometry.boundingSphere = n.transform(a, t, a)),
                        (e.modelMatrix = R.clone(R.IDENTITY)),
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
                        t.length > 0 && o.push(U(t, 'geometry')),
                        n.length > 0 &&
                            (o.push(U(n, 'westHemisphereGeometry')),
                            o.push(U(n, 'eastHemisphereGeometry'))),
                        o
                    );
                };
                var ce = new a(),
                    le = new a(),
                    fe = new a(),
                    he = new a();
                te.computeNormal = function (e) {
                    var t,
                        n = e.indices,
                        r = e.attributes,
                        i = r.position.values,
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
                            E = n[t + 1],
                            m = n[t + 2],
                            y = 3 * d,
                            _ = 3 * E,
                            T = 3 * m;
                        (le.x = i[y]),
                            (le.y = i[y + 1]),
                            (le.z = i[y + 2]),
                            (fe.x = i[_]),
                            (fe.y = i[_ + 1]),
                            (fe.z = i[_ + 2]),
                            (he.x = i[T]),
                            (he.y = i[T + 1]),
                            (he.z = i[T + 2]),
                            c[d].count++,
                            c[E].count++,
                            c[m].count++,
                            a.subtract(fe, le, fe),
                            a.subtract(he, le, he),
                            (l[h] = a.cross(fe, he, new a())),
                            h++;
                    }
                    var R = 0;
                    for (t = 0; t < o; t++)
                        (c[t].indexOffset += R), (R += c[t].count);
                    h = 0;
                    var A;
                    for (t = 0; t < s; t += 3) {
                        A = c[n[t]];
                        var S = A.indexOffset + A.currentCount;
                        (f[S] = h),
                            A.currentCount++,
                            (A = c[n[t + 1]]),
                            (S = A.indexOffset + A.currentCount),
                            (f[S] = h),
                            A.currentCount++,
                            (A = c[n[t + 2]]),
                            (S = A.indexOffset + A.currentCount),
                            (f[S] = h),
                            A.currentCount++,
                            h++;
                    }
                    var g = new Float32Array(3 * o);
                    for (t = 0; t < o; t++) {
                        var N = 3 * t;
                        if (((A = c[t]), a.clone(a.ZERO, ce), A.count > 0)) {
                            for (h = 0; h < A.count; h++)
                                a.add(ce, l[f[A.indexOffset + h]], ce);
                            a.equalsEpsilon(a.ZERO, ce, v.EPSILON10) &&
                                a.clone(l[f[A.indexOffset]], ce);
                        }
                        a.equalsEpsilon(a.ZERO, ce, v.EPSILON10) && (ce.z = 1),
                            a.normalize(ce, ce),
                            (g[N] = ce.x),
                            (g[N + 1] = ce.y),
                            (g[N + 2] = ce.z);
                    }
                    return (
                        (e.attributes.normal = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: 3,
                            values: g,
                        })),
                        e
                    );
                };
                var de = new a(),
                    pe = new a(),
                    Ee = new a();
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
                    var f, h, d;
                    for (t = 0; t < c; t += 3) {
                        var E = n[t],
                            m = n[t + 1],
                            y = n[t + 2];
                        (f = 3 * E), (h = 3 * m), (d = 3 * y);
                        var _ = 2 * E,
                            v = 2 * m,
                            T = 2 * y,
                            R = r[f],
                            A = r[f + 1],
                            S = r[f + 2],
                            g = o[_],
                            N = o[_ + 1],
                            O = o[v + 1] - N,
                            w = o[T + 1] - N,
                            I = 1 / ((o[v] - g) * w - (o[T] - g) * O),
                            x = (w * (r[h] - R) - O * (r[d] - R)) * I,
                            M = (w * (r[h + 1] - A) - O * (r[d + 1] - A)) * I,
                            C = (w * (r[h + 2] - S) - O * (r[d + 2] - S)) * I;
                        (l[f] += x),
                            (l[f + 1] += M),
                            (l[f + 2] += C),
                            (l[h] += x),
                            (l[h + 1] += M),
                            (l[h + 2] += C),
                            (l[d] += x),
                            (l[d + 1] += M),
                            (l[d + 2] += C);
                    }
                    var P = new Float32Array(3 * s),
                        D = new Float32Array(3 * s);
                    for (t = 0; t < s; t++) {
                        (f = 3 * t), (h = f + 1), (d = f + 2);
                        var U = a.fromArray(i, f, de),
                            L = a.fromArray(l, f, Ee),
                            b = a.dot(U, L);
                        a.multiplyByScalar(U, b, pe),
                            a.normalize(a.subtract(L, pe, L), L),
                            (P[f] = L.x),
                            (P[h] = L.y),
                            (P[d] = L.z),
                            a.normalize(a.cross(U, L, L), L),
                            (D[f] = L.x),
                            (D[h] = L.y),
                            (D[d] = L.z);
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
                var me = new r(),
                    ye = new a(),
                    _e = new a(),
                    ve = new a(),
                    Te = new r();
                te.compressVertices = function (t) {
                    var n,
                        i,
                        o = t.attributes.extrudeDirection;
                    if (c(o)) {
                        var s = o.values;
                        i = s.length / 3;
                        var l = new Float32Array(2 * i),
                            f = 0;
                        for (n = 0; n < i; ++n)
                            a.fromArray(s, 3 * n, ye),
                                a.equals(ye, a.ZERO)
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
                        E = c(h),
                        m = c(d);
                    if (!E && !m) return t;
                    var y,
                        _,
                        v,
                        T,
                        R = t.attributes.tangent,
                        A = t.attributes.bitangent,
                        S = c(R),
                        g = c(A);
                    E && (y = h.values),
                        m && (_ = d.values),
                        S && (v = R.values),
                        g && (T = A.values),
                        (i = (E ? y.length : _.length) / (E ? 3 : 2));
                    var N = i,
                        O = m && E ? 2 : 1;
                    (O += S || g ? 1 : 0), (N *= O);
                    var w = new Float32Array(N),
                        I = 0;
                    for (n = 0; n < i; ++n) {
                        m &&
                            (r.fromArray(_, 2 * n, me),
                            (w[I++] = e.compressTextureCoordinates(me)));
                        var x = 3 * n;
                        E && c(v) && c(T)
                            ? (a.fromArray(y, x, ye),
                              a.fromArray(v, x, _e),
                              a.fromArray(T, x, ve),
                              e.octPack(ye, _e, ve, me),
                              (w[I++] = me.x),
                              (w[I++] = me.y))
                            : (E &&
                                  (a.fromArray(y, x, ye),
                                  (w[I++] = e.octEncodeFloat(ye))),
                              S &&
                                  (a.fromArray(v, x, ye),
                                  (w[I++] = e.octEncodeFloat(ye))),
                              g &&
                                  (a.fromArray(T, x, ye),
                                  (w[I++] = e.octEncodeFloat(ye))));
                    }
                    return (
                        (t.attributes.compressedAttributes = new p({
                            componentDatatype: u.FLOAT,
                            componentsPerAttribute: O,
                            values: w,
                        })),
                        E && delete t.attributes.normal,
                        m && delete t.attributes.st,
                        g && delete t.attributes.bitangent,
                        S && delete t.attributes.tangent,
                        t
                    );
                };
                var Re = new a(),
                    Ae = new a(),
                    Se = new a(),
                    ge = new a(),
                    Ne = new a(),
                    Oe = { positions: new Array(7), indices: new Array(9) },
                    we = new a(),
                    Ie = new a(),
                    xe = new a(),
                    Me = new a(),
                    Ce = new r(),
                    Pe = new r(),
                    De = new r(),
                    Ue = A.fromPointNormal(a.ZERO, a.UNIT_Y),
                    Le = new a(),
                    be = new a(),
                    Fe = new r(),
                    Be = new r(),
                    ze = new a(),
                    qe = new a(),
                    Ge = new a(),
                    Ve = new a(),
                    We = new a(),
                    Xe = new a(),
                    He = new i(),
                    Ye = 5 * v.EPSILON9,
                    ke = v.EPSILON6;
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
                        if (t.geometryType !== E.NONE)
                            switch (t.geometryType) {
                                case E.POLYLINES:
                                    ee(e);
                                    break;
                                case E.TRIANGLES:
                                    J(e);
                                    break;
                                case E.LINES:
                                    Q(e);
                            }
                        else
                            G(t),
                                t.primitiveType === S.TRIANGLES
                                    ? J(e)
                                    : t.primitiveType === S.LINES && Q(e);
                        return e;
                    }),
                    te
                );
            },
        ),
        define(
            'Core/oneTimeWarning',
            ['./defaultValue', './defined', './DeveloperError'],
            function (e, t, n) {
                'use strict';
                function r(n, r) {
                    t(a[n]) || ((a[n] = !0), console.warn(e(r, n)));
                }
                var a = {};
                return (
                    (r.geometryOutlines =
                        'Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.'),
                    r
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
                var l, f, h, d, p, E, m;
                if ((i && (u = s(e, n, u, a)), e.length > 80 * a)) {
                    (l = h = e[0]), (f = d = e[1]);
                    for (var y = a; y < o; y += a)
                        (p = e[y]),
                            (E = e[y + 1]),
                            p < l && (l = p),
                            E < f && (f = E),
                            p > h && (h = p),
                            E > d && (d = E);
                    m = Math.max(h - l, d - f);
                }
                return r(u, c, a, l, f, m), c;
            }
            function t(e, t, n, r, a) {
                var i, o;
                if (a === I(e, t, n, r) > 0)
                    for (i = t; i < n; i += r) o = N(i, e[i], e[i + 1], o);
                else
                    for (i = n - r; i >= t; i -= r) o = N(i, e[i], e[i + 1], o);
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
                    for (var p, E, m = e; e.prev !== e.next; )
                        if (
                            ((p = e.prev),
                            (E = e.next),
                            f ? i(e, c, l, f) : a(e))
                        )
                            t.push(p.i / s),
                                t.push(e.i / s),
                                t.push(E.i / s),
                                O(e),
                                (e = E.next),
                                (m = E.next);
                        else if ((e = E) === m) {
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
                if (_(t, n, r) >= 0) return !1;
                for (var a = e.next.next; a !== e.prev; ) {
                    if (
                        m(t.x, t.y, n.x, n.y, r.x, r.y, a.x, a.y) &&
                        _(a.prev, a, a.next) >= 0
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
                if (_(a, i, o) >= 0) return !1;
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
                        f = p(u, s, t, n, r),
                        h = p(c, l, t, n, r),
                        d = e.nextZ;
                    d && d.z <= h;

                ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        m(a.x, a.y, i.x, i.y, o.x, o.y, d.x, d.y) &&
                        _(d.prev, d, d.next) >= 0
                    )
                        return !1;
                    d = d.nextZ;
                }
                for (d = e.prevZ; d && d.z >= f; ) {
                    if (
                        d !== e.prev &&
                        d !== e.next &&
                        m(a.x, a.y, i.x, i.y, o.x, o.y, d.x, d.y) &&
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
                    var a = r.prev,
                        i = r.next.next;
                    !v(a, i) &&
                        T(a, r, r.next, i) &&
                        A(a, i) &&
                        A(i, a) &&
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
                        if (s.i !== c.i && y(s, c)) {
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
                        d.push(E(h));
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
                        m(i < f ? a : o, i, l, f, i < f ? o : a, i, r.x, r.y) &&
                        ((s = Math.abs(i - r.y) / (a - r.x)) < h ||
                            (s === h && r.x > n.x)) &&
                        A(r, e) &&
                        ((n = r), (h = s)),
                        (r = r.next);
                return n;
            }
            function h(e, t, n, r) {
                var a = e;
                do {
                    null === a.z && (a.z = p(a.x, a.y, t, n, r)),
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
            function p(e, t, n, r, a) {
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
            function E(e) {
                var t = e,
                    n = e;
                do {
                    t.x < n.x && (n = t), (t = t.next);
                } while (t !== e);
                return n;
            }
            function m(e, t, n, r, a, i, o, u) {
                return (
                    (a - o) * (t - u) - (e - o) * (i - u) >= 0 &&
                    (e - o) * (r - u) - (n - o) * (t - u) >= 0 &&
                    (n - o) * (i - u) - (a - o) * (r - u) >= 0
                );
            }
            function y(e, t) {
                return (
                    e.next.i !== t.i &&
                    e.prev.i !== t.i &&
                    !R(e, t) &&
                    A(e, t) &&
                    A(t, e) &&
                    S(e, t)
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
                    p = new n(),
                    E = {};
                (E.computeArea2D = function (e) {
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
                    (E.computeWindingOrder2D = function (e) {
                        return E.computeArea2D(e) > 0
                            ? h.COUNTER_CLOCKWISE
                            : h.CLOCKWISE;
                    }),
                    (E.triangulate = function (n, r) {
                        var a = t.packArray(n);
                        return e(a, r, 2);
                    });
                var m = new n(),
                    y = new n(),
                    _ = new n(),
                    v = new n(),
                    T = new n(),
                    R = new n(),
                    A = new n();
                return (
                    (E.computeSubdivision = function (e, t, r, u) {
                        u = i(u, l.RADIANS_PER_DEGREE);
                        var h,
                            d = r.slice(0),
                            p = t.length,
                            E = new Array(3 * p),
                            S = 0;
                        for (h = 0; h < p; h++) {
                            var g = t[h];
                            (E[S++] = g.x), (E[S++] = g.y), (E[S++] = g.z);
                        }
                        for (
                            var N = [],
                                O = {},
                                w = e.maximumRadius,
                                I = l.chordLength(u, w),
                                x = I * I;
                            d.length > 0;

                        ) {
                            var M,
                                C,
                                P = d.pop(),
                                D = d.pop(),
                                U = d.pop(),
                                L = n.fromArray(E, 3 * U, m),
                                b = n.fromArray(E, 3 * D, y),
                                F = n.fromArray(E, 3 * P, _),
                                B = n.multiplyByScalar(n.normalize(L, v), w, v),
                                z = n.multiplyByScalar(n.normalize(b, T), w, T),
                                q = n.multiplyByScalar(n.normalize(F, R), w, R),
                                G = n.magnitudeSquared(n.subtract(B, z, A)),
                                V = n.magnitudeSquared(n.subtract(z, q, A)),
                                W = n.magnitudeSquared(n.subtract(q, B, A)),
                                X = Math.max(G, V, W);
                            X > x
                                ? G === X
                                    ? ((M =
                                          Math.min(U, D) +
                                          ' ' +
                                          Math.max(U, D)),
                                      (h = O[M]),
                                      o(h) ||
                                          ((C = n.add(L, b, A)),
                                          n.multiplyByScalar(C, 0.5, C),
                                          E.push(C.x, C.y, C.z),
                                          (h = E.length / 3 - 1),
                                          (O[M] = h)),
                                      d.push(U, h, P),
                                      d.push(h, D, P))
                                    : V === X
                                      ? ((M =
                                            Math.min(D, P) +
                                            ' ' +
                                            Math.max(D, P)),
                                        (h = O[M]),
                                        o(h) ||
                                            ((C = n.add(b, F, A)),
                                            n.multiplyByScalar(C, 0.5, C),
                                            E.push(C.x, C.y, C.z),
                                            (h = E.length / 3 - 1),
                                            (O[M] = h)),
                                        d.push(D, h, U),
                                        d.push(h, P, U))
                                      : W === X &&
                                        ((M =
                                            Math.min(P, U) +
                                            ' ' +
                                            Math.max(P, U)),
                                        (h = O[M]),
                                        o(h) ||
                                            ((C = n.add(F, L, A)),
                                            n.multiplyByScalar(C, 0.5, C),
                                            E.push(C.x, C.y, C.z),
                                            (h = E.length / 3 - 1),
                                            (O[M] = h)),
                                        d.push(P, h, D),
                                        d.push(h, U, D))
                                : (N.push(U), N.push(D), N.push(P));
                        }
                        return new s({
                            attributes: {
                                position: new c({
                                    componentDatatype: a.DOUBLE,
                                    componentsPerAttribute: 3,
                                    values: E,
                                }),
                            },
                            indices: N,
                            primitiveType: f.TRIANGLES,
                        });
                    }),
                    (E.scaleToGeodeticHeight = function (e, t, r, a) {
                        r = i(r, u.WGS84);
                        var s = d,
                            c = p;
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
                    E
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
                            p = d.x,
                            E = d.y,
                            m = d.z;
                        (a = Math.min(p, a)),
                            (s = Math.max(p, s)),
                            (o = Math.min(E, o)),
                            (c = Math.max(E, c)),
                            (u = Math.min(m, u)),
                            (l = Math.max(m, l));
                    }
                    var y = n.minimum;
                    (y.x = a), (y.y = o), (y.z = u);
                    var _ = n.maximum;
                    (_.x = s), (_.y = c), (_.z = l);
                    var v = e.add(y, _, n.center);
                    return e.multiplyByScalar(v, 0.5, v), n;
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
                        return p(e);
                    }
                    function a(e) {
                        return p(i(e));
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
                            return E(f, e), e;
                        }),
                        (p = function (e) {
                            return (
                                (e = t(e)),
                                (h = e.then),
                                (p = t),
                                (d = y),
                                E(l, e),
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
                function s(t, n, r, a, i) {
                    return (
                        m(2, arguments),
                        e(t, function (t) {
                            function u(e) {
                                E(e);
                            }
                            function s(e) {
                                p(e);
                            }
                            var c, l, f, h, d, p, E, m, _, v;
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
                                    m = d.progress,
                                        E = function (e) {
                                            h.push(e),
                                                --l ||
                                                    ((p = E = y), d.reject(h));
                                        },
                                        p = function (e) {
                                            f.push(e),
                                                --c ||
                                                    ((p = E = y), d.resolve(f));
                                        },
                                        v = 0;
                                    v < _;
                                    ++v
                                )
                                    v in t && e(t[v], s, u, m);
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
                    return m(1, arguments), h(e, _).then(t, n, r);
                }
                function f() {
                    return h(arguments, _);
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
                    var r = T.call(arguments, 1);
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
                            v.apply(t, r)
                        );
                    });
                }
                function p(t, n, r) {
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
                function E(e, t) {
                    for (var n, r = 0; (n = e[r++]); ) n(t);
                }
                function m(e, t) {
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
                        var d, p, E, m, y;
                        if ('%%' == e) return '%';
                        for (
                            var _ = !1,
                                v = '',
                                T = !1,
                                R = !1,
                                A = ' ',
                                S = s.length,
                                g = 0;
                            s && g < S;
                            g++
                        )
                            switch (s.charAt(g)) {
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
                                    A = s.charAt(g + 1);
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
                                        p + a(String(Math.abs(d)), f, '0', !1)),
                                    i(y, p, _, c, T)
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
                                    (E = [
                                        'toExponential',
                                        'toFixed',
                                        'toPrecision',
                                    ]['efg'.indexOf(h.toLowerCase())]),
                                    (m = ['toString', 'toUpperCase'][
                                        'eEfFgG'.indexOf(h) % 2
                                    ]),
                                    (y = p + Math.abs(d)[E](f)),
                                    i(y, p, _, c, T)[m]()
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
                    return E.compare(e.julianDate, t.julianDate);
                }
                function f(e) {
                    _.julianDate = e;
                    var n = E.leapSeconds,
                        r = t(n, _, l);
                    r < 0 && (r = ~r), r >= n.length && (r = n.length - 1);
                    var a = n[r].offset;
                    if (r > 0) {
                        E.secondsDifference(n[r].julianDate, e) > a &&
                            (r--, (a = n[r].offset));
                    }
                    E.addSeconds(e, a, e);
                }
                function h(e, n) {
                    _.julianDate = e;
                    var r = E.leapSeconds,
                        a = t(r, _, l);
                    if ((a < 0 && (a = ~a), 0 === a))
                        return E.addSeconds(e, -r[0].offset, n);
                    if (a >= r.length)
                        return E.addSeconds(e, -r[a - 1].offset, n);
                    var i = E.secondsDifference(r[a].julianDate, e);
                    return 0 === i
                        ? E.addSeconds(e, -r[a].offset, n)
                        : i <= 1
                          ? void 0
                          : E.addSeconds(e, -r[--a].offset, n);
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
                function p(e, t, n, r, a, i, o) {
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
                function E(e, t, r) {
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
                var m = new i(),
                    y = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    _ = new u(),
                    v = /^(\d{4})$/,
                    T = /^(\d{4})-(\d{2})$/,
                    R = /^(\d{4})-?(\d{3})$/,
                    A = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                    S = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                    g = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                    N = /^(\d{2})(\.\d+)?/.source + g.source,
                    O = /^(\d{2}):?(\d{2})(\.\d+)?/.source + g.source,
                    w = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + g.source;
                (E.fromGregorianDate = function (e, t) {
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
                        : new E(n[0], n[1], c.UTC);
                }),
                    (E.fromDate = function (e, t) {
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
                            : new E(n[0], n[1], c.UTC);
                    }),
                    (E.fromIso8601 = function (e, t) {
                        e = e.replace(',', '.');
                        var n,
                            a,
                            i,
                            u = e.split('T'),
                            s = 1,
                            l = 1,
                            h = 0,
                            m = 0,
                            _ = 0,
                            g = 0,
                            I = u[0],
                            x = u[1];
                        if (null !== (u = I.match(S)))
                            (n = +u[1]), (s = +u[2]), (l = +u[3]);
                        else if (null !== (u = I.match(T)))
                            (n = +u[1]), (s = +u[2]);
                        else if (null !== (u = I.match(v))) n = +u[1];
                        else {
                            var M;
                            if (null !== (u = I.match(R)))
                                (n = +u[1]), (M = +u[2]), (i = o(n));
                            else if (null !== (u = I.match(A))) {
                                n = +u[1];
                                var C = +u[2],
                                    P = +u[3] || 0,
                                    D = new Date(Date.UTC(n, 0, 4));
                                M = 7 * C + P - D.getUTCDay() - 3;
                            }
                            (a = new Date(Date.UTC(n, 0, 1))),
                                a.setUTCDate(M),
                                (s = a.getUTCMonth() + 1),
                                (l = a.getUTCDate());
                        }
                        i = o(n);
                        var U;
                        if (r(x)) {
                            (u = x.match(w)),
                                null !== u
                                    ? ((h = +u[1]),
                                      (m = +u[2]),
                                      (_ = +u[3]),
                                      (g = 1e3 * +(u[4] || 0)),
                                      (U = 5))
                                    : ((u = x.match(O)),
                                      null !== u
                                          ? ((h = +u[1]),
                                            (m = +u[2]),
                                            (_ = 60 * +(u[3] || 0)),
                                            (U = 4))
                                          : null !== (u = x.match(N)) &&
                                            ((h = +u[1]),
                                            (m = 60 * +(u[2] || 0)),
                                            (U = 3)));
                            var L = u[U],
                                b = +u[U + 1],
                                F = +(u[U + 2] || 0);
                            switch (L) {
                                case '+':
                                    (h -= b), (m -= F);
                                    break;
                                case '-':
                                    (h += b), (m += F);
                                    break;
                                case 'Z':
                                    break;
                                default:
                                    m += new Date(
                                        Date.UTC(n, s - 1, l, h, m),
                                    ).getTimezoneOffset();
                            }
                        }
                        var B = 60 === _;
                        for (B && _--; m >= 60; ) (m -= 60), h++;
                        for (; h >= 24; ) (h -= 24), l++;
                        for (a = i && 2 === s ? 29 : y[s - 1]; l > a; )
                            (l -= a),
                                s++,
                                s > 12 && ((s -= 12), n++),
                                (a = i && 2 === s ? 29 : y[s - 1]);
                        for (; m < 0; ) (m += 60), h--;
                        for (; h < 0; ) (h += 24), l--;
                        for (; l < 1; )
                            s--,
                                s < 1 && ((s += 12), n--),
                                (a = i && 2 === s ? 29 : y[s - 1]),
                                (l += a);
                        var z = p(n, s, l, h, m, _, g);
                        return (
                            r(t)
                                ? (d(z[0], z[1], t), f(t))
                                : (t = new E(z[0], z[1], c.UTC)),
                            B && E.addSeconds(t, 1, t),
                            t
                        );
                    }),
                    (E.now = function (e) {
                        return E.fromDate(new Date(), e);
                    });
                var I = new E(0, 0, c.TAI);
                return (
                    (E.toGregorianDate = function (e, t) {
                        var n = !1,
                            a = h(e, I);
                        r(a) ||
                            (E.addSeconds(e, -1, I), (a = h(I, I)), (n = !0));
                        var o = a.dayNumber,
                            u = a.secondsOfDay;
                        u >= 43200 && (o += 1);
                        var c = (o + 68569) | 0,
                            l = ((4 * c) / 146097) | 0;
                        c = (c - (((146097 * l + 3) / 4) | 0)) | 0;
                        var f = ((4e3 * (c + 1)) / 1461001) | 0;
                        c = (c - (((1461 * f) / 4) | 0) + 31) | 0;
                        var d = ((80 * c) / 2447) | 0,
                            p = (c - (((2447 * d) / 80) | 0)) | 0;
                        c = (d / 11) | 0;
                        var m = (d + 2 - 12 * c) | 0,
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
                                  (t.month = m),
                                  (t.day = p),
                                  (t.hour = _),
                                  (t.minute = T),
                                  (t.second = R),
                                  (t.millisecond = A),
                                  (t.isLeapSecond = n),
                                  t)
                                : new i(y, m, p, _, T, R, A, n)
                        );
                    }),
                    (E.toDate = function (e) {
                        var t = E.toGregorianDate(e, m),
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
                    (E.toIso8601 = function (t, n) {
                        var a,
                            i = E.toGregorianDate(t, m);
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
                    (E.clone = function (e, t) {
                        if (r(e))
                            return r(t)
                                ? ((t.dayNumber = e.dayNumber),
                                  (t.secondsOfDay = e.secondsOfDay),
                                  t)
                                : new E(e.dayNumber, e.secondsOfDay, c.TAI);
                    }),
                    (E.compare = function (e, t) {
                        var n = e.dayNumber - t.dayNumber;
                        return 0 !== n ? n : e.secondsOfDay - t.secondsOfDay;
                    }),
                    (E.equals = function (e, t) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                e.dayNumber === t.dayNumber &&
                                e.secondsOfDay === t.secondsOfDay)
                        );
                    }),
                    (E.equalsEpsilon = function (e, t, n) {
                        return (
                            e === t ||
                            (r(e) &&
                                r(t) &&
                                Math.abs(E.secondsDifference(e, t)) <= n)
                        );
                    }),
                    (E.totalDays = function (e) {
                        return e.dayNumber + e.secondsOfDay / s.SECONDS_PER_DAY;
                    }),
                    (E.secondsDifference = function (e, t) {
                        return (
                            (e.dayNumber - t.dayNumber) * s.SECONDS_PER_DAY +
                            (e.secondsOfDay - t.secondsOfDay)
                        );
                    }),
                    (E.daysDifference = function (e, t) {
                        return (
                            e.dayNumber -
                            t.dayNumber +
                            (e.secondsOfDay - t.secondsOfDay) /
                                s.SECONDS_PER_DAY
                        );
                    }),
                    (E.computeTaiMinusUtc = function (e) {
                        _.julianDate = e;
                        var n = E.leapSeconds,
                            r = t(n, _, l);
                        return (
                            r < 0 && ((r = ~r), --r < 0 && (r = 0)), n[r].offset
                        );
                    }),
                    (E.addSeconds = function (e, t, n) {
                        return d(e.dayNumber, e.secondsOfDay + t, n);
                    }),
                    (E.addMinutes = function (e, t, n) {
                        var r = e.secondsOfDay + t * s.SECONDS_PER_MINUTE;
                        return d(e.dayNumber, r, n);
                    }),
                    (E.addHours = function (e, t, n) {
                        var r = e.secondsOfDay + t * s.SECONDS_PER_HOUR;
                        return d(e.dayNumber, r, n);
                    }),
                    (E.addDays = function (e, t, n) {
                        return d(e.dayNumber + t, e.secondsOfDay, n);
                    }),
                    (E.lessThan = function (e, t) {
                        return E.compare(e, t) < 0;
                    }),
                    (E.lessThanOrEquals = function (e, t) {
                        return E.compare(e, t) <= 0;
                    }),
                    (E.greaterThan = function (e, t) {
                        return E.compare(e, t) > 0;
                    }),
                    (E.greaterThanOrEquals = function (e, t) {
                        return E.compare(e, t) >= 0;
                    }),
                    (E.prototype.clone = function (e) {
                        return E.clone(this, e);
                    }),
                    (E.prototype.equals = function (e) {
                        return E.equals(this, e);
                    }),
                    (E.prototype.equalsEpsilon = function (e, t) {
                        return E.equalsEpsilon(this, e, t);
                    }),
                    (E.prototype.toString = function () {
                        return E.toIso8601(this);
                    }),
                    (E.leapSeconds = [
                        new u(new E(2441317, 43210, c.TAI), 10),
                        new u(new E(2441499, 43211, c.TAI), 11),
                        new u(new E(2441683, 43212, c.TAI), 12),
                        new u(new E(2442048, 43213, c.TAI), 13),
                        new u(new E(2442413, 43214, c.TAI), 14),
                        new u(new E(2442778, 43215, c.TAI), 15),
                        new u(new E(2443144, 43216, c.TAI), 16),
                        new u(new E(2443509, 43217, c.TAI), 17),
                        new u(new E(2443874, 43218, c.TAI), 18),
                        new u(new E(2444239, 43219, c.TAI), 19),
                        new u(new E(2444786, 43220, c.TAI), 20),
                        new u(new E(2445151, 43221, c.TAI), 21),
                        new u(new E(2445516, 43222, c.TAI), 22),
                        new u(new E(2446247, 43223, c.TAI), 23),
                        new u(new E(2447161, 43224, c.TAI), 24),
                        new u(new E(2447892, 43225, c.TAI), 25),
                        new u(new E(2448257, 43226, c.TAI), 26),
                        new u(new E(2448804, 43227, c.TAI), 27),
                        new u(new E(2449169, 43228, c.TAI), 28),
                        new u(new E(2449534, 43229, c.TAI), 29),
                        new u(new E(2450083, 43230, c.TAI), 30),
                        new u(new E(2450630, 43231, c.TAI), 31),
                        new u(new E(2451179, 43232, c.TAI), 32),
                        new u(new E(2453736, 43233, c.TAI), 33),
                        new u(new E(2454832, 43234, c.TAI), 34),
                        new u(new E(2456109, 43235, c.TAI), 35),
                        new u(new E(2457204, 43236, c.TAI), 36),
                        new u(new E(2457754, 43237, c.TAI), 37),
                    ]),
                    E
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
                function p(e) {
                    return (
                        e.state === c.UNISSUED &&
                            ((e.state = c.ISSUED), (e.deferred = t.defer())),
                        e.deferred.promise
                    );
                }
                function E(e) {
                    return function (t) {
                        e.state !== c.CANCELLED &&
                            (--R.numberOfActiveRequests,
                            --N[e.serverKey],
                            (e.state = c.RECEIVED),
                            e.deferred.resolve(t));
                    };
                }
                function m(e) {
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
                        g.push(e),
                        ++R.numberOfActiveRequests,
                        ++R.numberOfActiveRequestsEver,
                        ++N[e.serverKey],
                        e.requestFunction().then(E(e)).otherwise(m(e)),
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
                        a(e.cancelFunction) && e.cancelFunction();
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
                    S = new o({ comparator: l });
                (S.maximumLength = A), S.reserve(A);
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
                                return R;
                            },
                        },
                        priorityHeapLength: {
                            get: function () {
                                return A;
                            },
                            set: function (e) {
                                if (e < A)
                                    for (; S.length > e; ) {
                                        var t = S.pop();
                                        _(t);
                                    }
                                (A = e), (S.maximumLength = e), S.reserve(e);
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
                                t.cancelled && _(t),
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
                        var i = N[r];
                        return a(i) || (N[r] = 0), r;
                    }),
                    (f.request = function (e) {
                        if (s(e.url) || u(e.url))
                            return (e.state = c.RECEIVED), e.requestFunction();
                        if (
                            (++R.numberOfAttemptedRequests,
                            a(e.serverKey) ||
                                (e.serverKey = f.getServerKey(e.url)),
                            !f.throttleRequests || !e.throttle)
                        )
                            return y(e);
                        if (
                            !(g.length >= f.maximumRequests) &&
                            (!e.throttleByServer || d(e.serverKey))
                        ) {
                            h(e);
                            var t = S.insert(e);
                            if (a(t)) {
                                if (t === e) return;
                                _(t);
                            }
                            return p(e);
                        }
                    }),
                    (f.clearForSpecs = function () {
                        for (; S.length > 0; ) {
                            _(S.pop());
                        }
                        for (var e = g.length, t = 0; t < e; ++t) _(g[t]);
                        (g.length = 0),
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
                var p = /^data:(.*?)(;base64)?,(.*)$/;
                return (
                    (l.load = function (e, t, n, a, i, u, l) {
                        var f = p.exec(e);
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
                            for (var E in i)
                                i.hasOwnProperty(E) &&
                                    h.setRequestHeader(E, i[E]);
                        r(t) && (h.responseType = t);
                        var m = !1;
                        return (
                            'string' == typeof e &&
                                (m = 0 === e.indexOf('file://')),
                            (h.onload = function () {
                                if (
                                    (h.status < 200 || h.status >= 300) &&
                                    (!m || 0 !== h.status)
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
                        p(this, t.data);
                    else if (r(t.url)) {
                        var a = this;
                        this._downloadPromise = e(
                            s(t.url),
                            function (e) {
                                p(a, e);
                            },
                            function () {
                                a._dataError =
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
                    var a = n.columnNames.indexOf('modifiedJulianDateUtc'),
                        i = n.columnNames.indexOf('xPoleWanderRadians'),
                        s = n.columnNames.indexOf('yPoleWanderRadians'),
                        c = n.columnNames.indexOf('ut1MinusUtcSeconds'),
                        h = n.columnNames.indexOf(
                            'xCelestialPoleOffsetRadians',
                        ),
                        p = n.columnNames.indexOf(
                            'yCelestialPoleOffsetRadians',
                        ),
                        E = n.columnNames.indexOf('taiMinusUtcSeconds');
                    if (
                        a < 0 ||
                        i < 0 ||
                        s < 0 ||
                        c < 0 ||
                        h < 0 ||
                        p < 0 ||
                        E < 0
                    )
                        return void (e._dataError =
                            'Error in loaded EOP data: The columnNames property must include modifiedJulianDateUtc, xPoleWanderRadians, yPoleWanderRadians, ut1MinusUtcSeconds, xCelestialPoleOffsetRadians, yCelestialPoleOffsetRadians, and taiMinusUtcSeconds columns');
                    var m = (e._samples = n.samples),
                        y = (e._dates = []);
                    (e._dateColumn = a),
                        (e._xPoleWanderRadiansColumn = i),
                        (e._yPoleWanderRadiansColumn = s),
                        (e._ut1MinusUtcSecondsColumn = c),
                        (e._xCelestialPoleOffsetRadiansColumn = h),
                        (e._yCelestialPoleOffsetRadiansColumn = p),
                        (e._taiMinusUtcSecondsColumn = E),
                        (e._columnCount = n.columnNames.length),
                        (e._lastIndex = void 0);
                    for (
                        var _, v = e._addNewLeapSeconds, T = 0, R = m.length;
                        T < R;
                        T += e._columnCount
                    ) {
                        var A = m[T + a],
                            S = m[T + E],
                            g = A + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                            N = new o(g, S, f.TAI);
                        if ((y.push(N), v)) {
                            if (S !== _ && r(_)) {
                                var O = o.leapSeconds,
                                    w = t(O, N, d);
                                if (w < 0) {
                                    var I = new u(N, S);
                                    O.splice(~w, 0, I);
                                }
                            }
                            _ = S;
                        }
                    }
                }
                function E(e, t, n, r, a) {
                    var i = n * r;
                    (a.xPoleWander = t[i + e._xPoleWanderRadiansColumn]),
                        (a.yPoleWander = t[i + e._yPoleWanderRadiansColumn]),
                        (a.xPoleOffset =
                            t[i + e._xCelestialPoleOffsetRadiansColumn]),
                        (a.yPoleOffset =
                            t[i + e._yCelestialPoleOffsetRadiansColumn]),
                        (a.ut1MinusUtc = t[i + e._ut1MinusUtcSecondsColumn]);
                }
                function m(e, t, n) {
                    return t + e * (n - t);
                }
                function y(e, t, n, r, a, i, u) {
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
                    if (c.equals(l) || r.equals(c)) return E(e, n, a, s, u), u;
                    if (r.equals(l)) return E(e, n, i, s, u), u;
                    var f =
                            o.secondsDifference(r, c) /
                            o.secondsDifference(l, c),
                        h = a * s,
                        d = i * s,
                        p = n[h + e._ut1MinusUtcSecondsColumn],
                        y = n[d + e._ut1MinusUtcSecondsColumn],
                        _ = y - p;
                    if (_ > 0.5 || _ < -0.5) {
                        var v = n[h + e._taiMinusUtcSecondsColumn],
                            T = n[d + e._taiMinusUtcSecondsColumn];
                        v !== T && (l.equals(r) ? (p = y) : (y -= T - v));
                    }
                    return (
                        (u.xPoleWander = m(
                            f,
                            n[h + e._xPoleWanderRadiansColumn],
                            n[d + e._xPoleWanderRadiansColumn],
                        )),
                        (u.yPoleWander = m(
                            f,
                            n[h + e._yPoleWanderRadiansColumn],
                            n[d + e._yPoleWanderRadiansColumn],
                        )),
                        (u.xPoleOffset = m(
                            f,
                            n[h + e._xCelestialPoleOffsetRadiansColumn],
                            n[d + e._xCelestialPoleOffsetRadiansColumn],
                        )),
                        (u.yPoleOffset = m(
                            f,
                            n[h + e._yCelestialPoleOffsetRadiansColumn],
                            n[d + e._yCelestialPoleOffsetRadiansColumn],
                        )),
                        (u.ut1MinusUtc = m(f, p, y)),
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
                                    p = !r(h),
                                    E = p || o.greaterThanOrEquals(h, e);
                                if (d && E)
                                    return (
                                        (s = u),
                                        !p && h.equals(e) && ++s,
                                        (l = s + 1),
                                        y(this, i, this._samples, e, s, l, n),
                                        n
                                    );
                            }
                            var m = t(i, e, o.compare, this._dateColumn);
                            return (
                                m >= 0
                                    ? (m < i.length - 1 &&
                                          i[m + 1].equals(e) &&
                                          ++m,
                                      (s = m),
                                      (l = m))
                                    : ((l = ~m), (s = l - 1) < 0 && (s = 0)),
                                (this._lastIndex = s),
                                y(this, i, this._samples, e, s, l, n),
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
                            a = p.exec(r);
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
                                p = f;
                            p <= h;
                            ++p
                        )
                            d.push(l(this, p));
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
                                    var p,
                                        E,
                                        m = i - s * this._stepSizeDays,
                                        y = this._work,
                                        _ = this._denominators,
                                        v = this._coef,
                                        T = this._xTable;
                                    for (p = 0; p <= u; ++p) y[p] = m - T[p];
                                    for (p = 0; p <= u; ++p) {
                                        for (v[p] = 1, E = 0; E <= u; ++E)
                                            E !== p && (v[p] *= y[E]);
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
                        p = e[s.COLUMN2ROW2],
                        E = l + d + p;
                    if (E > 0)
                        (n = Math.sqrt(E + 1)),
                            (u = 0.5 * n),
                            (n = 0.5 / n),
                            (a = (e[s.COLUMN1ROW2] - e[s.COLUMN2ROW1]) * n),
                            (i = (e[s.COLUMN2ROW0] - e[s.COLUMN0ROW2]) * n),
                            (o = (e[s.COLUMN0ROW1] - e[s.COLUMN1ROW0]) * n);
                    else {
                        var m = f,
                            y = 0;
                        d > l && (y = 1), p > l && p > d && (y = 2);
                        var _ = m[y],
                            v = m[_];
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
                            (a = -T[0]),
                            (i = -T[1]),
                            (o = -T[2]);
                    }
                    return r(t)
                        ? ((t.x = a), (t.y = i), (t.z = o), (t.w = u), t)
                        : new c(a, i, o, u);
                };
                var d = new c(),
                    p = new c(),
                    E = new c(),
                    m = new c();
                c.fromHeadingPitchRoll = function (t, n) {
                    return (
                        (m = c.fromAxisAngle(e.UNIT_X, t.roll, d)),
                        (E = c.fromAxisAngle(e.UNIT_Y, -t.pitch, n)),
                        (n = c.multiply(E, m, E)),
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
                        c.unpack(e, 4 * n, R), c.conjugate(R, R);
                        for (var a = 0, i = n - t + 1; a < i; a++) {
                            var o = 3 * a;
                            c.unpack(e, 4 * (t + a), v),
                                c.multiply(v, R, v),
                                v.w < 0 && c.negate(v, v),
                                c.computeAxis(v, y);
                            var u = c.computeAngle(v);
                            (r[o] = y.x * u),
                                (r[o + 1] = y.y * u),
                                (r[o + 2] = y.z * u);
                        }
                    }),
                    (c.unpackInterpolationResult = function (t, n, a, i, o) {
                        r(o) || (o = new c()), e.fromArray(t, 0, _);
                        var u = e.magnitude(_);
                        return (
                            c.unpack(n, 4 * i, T),
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
                            p = o * l - r * u - a * s - i * c;
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
                    x = new c();
                (c.computeInnerQuadrangle = function (t, n, r, a) {
                    var i = c.conjugate(n, I);
                    c.multiply(i, r, x);
                    var o = c.log(x, O);
                    c.multiply(i, t, x);
                    var u = c.log(x, w);
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
                            u = c.slerp(n, r, a, x);
                        return c.slerp(o, u, 2 * a * (1 - a), i);
                    });
                for (
                    var M = new c(),
                        C = 1.9011074535173003,
                        P = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        D = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        U = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        L = a.supportsTypedArrays() ? new Float32Array(8) : [],
                        b = 0;
                    b < 7;
                    ++b
                ) {
                    var F = b + 1,
                        B = 2 * F + 1;
                    (P[b] = 1 / (F * B)), (D[b] = F / B);
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
                            p = c.multiplyByScalar(e, d, M);
                        return c.multiplyByScalar(t, h, r), c.add(p, r, r);
                    }),
                    (c.fastSquad = function (e, t, n, r, a, i) {
                        var o = c.fastSlerp(e, t, a, I),
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
                p,
                E,
                m,
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
                (T.localFrameToFixedFrameGenerator = function (e, t) {
                    if (!R.hasOwnProperty(e) || !R[e].hasOwnProperty(t))
                        throw new s(
                            'firstAxis and secondAxis must be east, north, up, west, south or down.',
                        );
                    var r,
                        a = R[e][t],
                        i = e + t;
                    return (
                        u(S[i])
                            ? (r = S[i])
                            : ((r = function (r, i, s) {
                                  if (
                                      (u(s) || (s = new y()),
                                      E.equalsEpsilon(r.x, 0, E.EPSILON14) &&
                                          E.equalsEpsilon(r.y, 0, E.EPSILON14))
                                  ) {
                                      var c = E.sign(r.z);
                                      n.unpack(A[e], 0, N),
                                          'east' !== e &&
                                              'west' !== e &&
                                              n.multiplyByScalar(N, c, N),
                                          n.unpack(A[t], 0, O),
                                          'east' !== t &&
                                              'west' !== t &&
                                              n.multiplyByScalar(O, c, O),
                                          n.unpack(A[a], 0, w),
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
                    (T.eastNorthUpToFixedFrame =
                        T.localFrameToFixedFrameGenerator('east', 'north')),
                    (T.northEastDownToFixedFrame =
                        T.localFrameToFixedFrameGenerator('north', 'east')),
                    (T.northUpEastToFixedFrame =
                        T.localFrameToFixedFrameGenerator('north', 'up')),
                    (T.northWestUpToFixedFrame =
                        T.localFrameToFixedFrameGenerator('north', 'west'));
                var I = new _(),
                    x = new n(1, 1, 1),
                    M = new y();
                T.headingPitchRollToFixedFrame = function (e, t, r, a, i) {
                    a = o(a, T.eastNorthUpToFixedFrame);
                    var u = _.fromHeadingPitchRoll(t, I),
                        s = y.fromTranslationQuaternionRotationScale(
                            n.ZERO,
                            u,
                            x,
                            M,
                        );
                    return (i = a(e, r, i)), y.multiply(i, s, i);
                };
                var C = new y(),
                    P = new m();
                T.headingPitchRollQuaternion = function (e, t, n, r, a) {
                    var i = T.headingPitchRollToFixedFrame(e, t, n, r, C),
                        o = y.getRotation(i, P);
                    return _.fromRotationMatrix(o, a);
                };
                var D = E.TWO_PI / 86400,
                    U = new p();
                (T.computeTemeToPseudoFixedMatrix = function (e, t) {
                    U = p.addSeconds(e, -p.computeTaiMinusUtc(e), U);
                    var n,
                        r = U.dayNumber,
                        a = U.secondsOfDay,
                        i = r - 2451545;
                    n =
                        a >= 43200
                            ? (i + 0.5) / v.DAYS_PER_JULIAN_CENTURY
                            : (i - 0.5) / v.DAYS_PER_JULIAN_CENTURY;
                    var o =
                            24110.54841 +
                            n * (8640184.812866 + n * (0.093104 + -62e-7 * n)),
                        s = (o * D) % E.TWO_PI,
                        c =
                            72921158553e-15 +
                            1.1772758384668e-19 * (r - 2451545.5),
                        l = (a + 0.5 * v.SECONDS_PER_DAY) % v.SECONDS_PER_DAY,
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
                        : new m(h, d, 0, -d, h, 0, 0, 0, 1);
                }),
                    (T.iau2006XysData = new h()),
                    (T.earthOrientationParameters = c.NONE);
                (T.preloadIcrfFixed = function (t) {
                    var n = t.start.dayNumber,
                        r = t.start.secondsOfDay + 32.184,
                        a = t.stop.dayNumber,
                        i = t.stop.secondsOfDay + 32.184,
                        o = T.iau2006XysData.preload(n, r, a, i),
                        u = T.earthOrientationParameters.getPromiseToLoad();
                    return e.all([o, u]);
                }),
                    (T.computeIcrfToFixedMatrix = function (e, t) {
                        u(t) || (t = new m());
                        var n = T.computeFixedToIcrfMatrix(e, t);
                        if (u(n)) return m.transpose(n, t);
                    });
                var L = new d(0, 0, 0),
                    b = new l(0, 0, 0, 0, 0, 0),
                    F = new m(),
                    B = new m();
                T.computeFixedToIcrfMatrix = function (e, t) {
                    u(t) || (t = new m());
                    var n = T.earthOrientationParameters.compute(e, b);
                    if (u(n)) {
                        var r = e.dayNumber,
                            a = e.secondsOfDay + 32.184,
                            i = T.iau2006XysData.computeXysRadians(r, a, L);
                        if (u(i)) {
                            var o = i.x + n.xPoleOffset,
                                s = i.y + n.yPoleOffset,
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
                            var f = m.fromRotationZ(-i.s, B),
                                h = m.multiply(l, f, F),
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
                            A = (A % 1) * E.TWO_PI;
                            var S = m.fromRotationZ(A, B),
                                g = m.multiply(h, S, F),
                                N = Math.cos(n.xPoleWander),
                                O = Math.cos(n.yPoleWander),
                                w = Math.sin(n.xPoleWander),
                                I = Math.sin(n.yPoleWander),
                                x = r - 2451545 + a / v.SECONDS_PER_DAY;
                            x /= 36525;
                            var M = (-47e-6 * x * E.RADIANS_PER_DEGREE) / 3600,
                                C = Math.cos(M),
                                P = Math.sin(M),
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
                                m.multiply(g, D, t)
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
                    (T.pointToGLWindowCoordinates = function (e, n, a, i) {
                        u(i) || (i = new t());
                        var o = z;
                        return (
                            y.multiplyByVector(
                                e,
                                r.fromElements(a.x, a.y, a.z, 1, o),
                                o,
                            ),
                            r.multiplyByScalar(o, 1 / o.w, o),
                            y.multiplyByVector(n, o, o),
                            t.fromCartesian4(o, i)
                        );
                    });
                var q = new n(),
                    G = new n(),
                    V = new n();
                T.rotationMatrixFromPositionVelocity = function (e, t, r, a) {
                    var i = o(r, f.WGS84).geodeticSurfaceNormal(e, q),
                        s = n.cross(t, i, G);
                    n.equalsEpsilon(s, n.ZERO, E.EPSILON6) &&
                        (s = n.clone(n.UNIT_X, s));
                    var c = n.cross(s, t, V);
                    return (
                        n.cross(t, c, s),
                        n.negate(s, s),
                        u(a) || (a = new m()),
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
                var W = new y(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
                    X = new a(),
                    H = new n(),
                    Y = new n(),
                    k = new m(),
                    Z = new y(),
                    j = new y();
                return (
                    (T.basisTo2D = function (e, t, r) {
                        var a = y.getTranslation(t, Y),
                            i = e.ellipsoid,
                            o = i.cartesianToCartographic(a, X),
                            u = e.project(o, H);
                        n.fromElements(u.z, u.x, u.y, u);
                        var s = T.eastNorthUpToFixedFrame(a, i, Z),
                            c = y.inverseTransformation(s, j),
                            l = y.getRotation(t, k),
                            f = y.multiplyByMatrix3(c, l, r);
                        return (
                            y.multiply(W, f, r), y.setTranslation(r, u, r), r
                        );
                    }),
                    (T.wgs84To2DModelMatrix = function (e, t, r) {
                        var a = e.ellipsoid,
                            i = T.eastNorthUpToFixedFrame(t, a, Z),
                            o = y.inverseTransformation(i, j),
                            u = a.cartesianToCartographic(t, X),
                            s = e.project(u, H);
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
            function (e, t, n, r, a, i, o, u, s, c, l, f, h, d) {
                'use strict';
                function p(e, t) {
                    (t = a(t, s.WGS84)), (e = t.scaleToGeodeticSurface(e));
                    var r = d.eastNorthUpToFixedFrame(e, t);
                    (this._ellipsoid = t),
                        (this._origin = e),
                        (this._xAxis = n.fromCartesian4(l.getColumn(r, 0, E))),
                        (this._yAxis = n.fromCartesian4(l.getColumn(r, 1, E)));
                    var i = n.fromCartesian4(l.getColumn(r, 2, E));
                    this._plane = f.fromPointNormal(e, i);
                }
                var E = new r();
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
                var m = new e();
                p.fromPoints = function (t, n) {
                    return new p(e.fromPoints(t, m).center, n);
                };
                var y = new h(),
                    _ = new n();
                (p.prototype.projectPointOntoPlane = function (e, r) {
                    var a = y;
                    (a.origin = e), n.normalize(e, a.direction);
                    var o = c.rayPlane(a, this._plane, _);
                    if (
                        (i(o) ||
                            (n.negate(a.direction, a.direction),
                            (o = c.rayPlane(a, this._plane, _))),
                        i(o))
                    ) {
                        var u = n.subtract(o, this._origin, o),
                            s = n.dot(this._xAxis, u),
                            l = n.dot(this._yAxis, u);
                        return i(r) ? ((r.x = s), (r.y = l), r) : new t(s, l);
                    }
                }),
                    (p.prototype.projectPointsOntoPlane = function (e, t) {
                        i(t) || (t = []);
                        for (var n = 0, r = e.length, a = 0; a < r; a++) {
                            var o = this.projectPointOntoPlane(e[a], t[n]);
                            i(o) && ((t[n] = o), n++);
                        }
                        return (t.length = n), t;
                    }),
                    (p.prototype.projectPointToNearestOnPlane = function (
                        e,
                        r,
                    ) {
                        i(r) || (r = new t());
                        var a = y;
                        (a.origin = e),
                            n.clone(this._plane.normal, a.direction);
                        var o = c.rayPlane(a, this._plane, _);
                        i(o) ||
                            (n.negate(a.direction, a.direction),
                            (o = c.rayPlane(a, this._plane, _)));
                        var u = n.subtract(o, this._origin, o),
                            s = n.dot(this._xAxis, u),
                            l = n.dot(this._yAxis, u);
                        return (r.x = s), (r.y = l), r;
                    }),
                    (p.prototype.projectPointsToNearestOnPlane = function (
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
                var v = new n();
                return (
                    (p.prototype.projectPointsOntoEllipsoid = function (e, t) {
                        var r = e.length;
                        i(t) ? (t.length = r) : (t = new Array(r));
                        for (
                            var a = this._ellipsoid,
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
                                i(t[l]) || (t[l] = new n());
                            var h = n.add(o, c, t[l]);
                            n.multiplyByScalar(s, f.y, c),
                                n.add(h, c, h),
                                a.scaleToGeocentricSurface(h, h);
                        }
                        return t;
                    }),
                    p
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
                        p = Math.sqrt(d),
                        E = t / 4,
                        m = E * E,
                        y = m * E,
                        _ = m * m,
                        v = 1 + E - (3 * m) / 4 + (5 * y) / 4 - (175 * _) / 64,
                        T = 1 - E + (15 * m) / 8 - (35 * y) / 8,
                        R = 1 - 3 * E + (35 * m) / 4,
                        A = 1 - 5 * E,
                        S =
                            v * l -
                            (T * Math.sin(2 * l) * E) / 2 -
                            (R * Math.sin(4 * l) * m) / 16 -
                            (A * Math.sin(6 * l) * y) / 48 -
                            (5 * Math.sin(8 * l) * _) / 512,
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
                        (g.cosineAlpha = p),
                        (g.u2Over4 = E),
                        (g.u4Over16 = m),
                        (g.u6Over64 = y),
                        (g.u8Over256 = _),
                        (g.a0 = v),
                        (g.a1 = T),
                        (g.a2 = R),
                        (g.a3 = A),
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
                        p = (t - n) / t,
                        E = i - r,
                        m = Math.atan((1 - p) * Math.tan(a)),
                        y = Math.atan((1 - p) * Math.tan(o)),
                        _ = Math.cos(m),
                        v = Math.sin(m),
                        T = Math.cos(y),
                        R = Math.sin(y),
                        A = _ * T,
                        S = _ * R,
                        g = v * R,
                        N = v * T,
                        O = E,
                        w = u.TWO_PI,
                        I = Math.cos(O),
                        x = Math.sin(O);
                    do {
                        (I = Math.cos(O)), (x = Math.sin(O));
                        var M = S - N * I;
                        (f = Math.sqrt(T * T * x * x + M * M)),
                            (c = g + A * I),
                            (s = Math.atan2(f, c));
                        var C;
                        0 === f
                            ? ((C = 0), (h = 1))
                            : ((C = (A * x) / f), (h = 1 - C * C)),
                            (w = O),
                            (d = c - (2 * g) / h),
                            isNaN(d) && (d = 0),
                            (O = E + l(p, C, h, s, f, c, d));
                    } while (Math.abs(O - w) > u.EPSILON12);
                    var P = (h * (t * t - n * n)) / (n * n),
                        D =
                            1 +
                            (P * (4096 + P * (P * (320 - 175 * P) - 768))) /
                                16384,
                        U = (P * (256 + P * (P * (74 - 47 * P) - 128))) / 1024,
                        L = d * d,
                        b =
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
                        F = n * D * (s - b),
                        B = Math.atan2(T * x, S - N * I),
                        z = Math.atan2(_ * x, S * I - N);
                    (e._distance = F),
                        (e._startHeading = B),
                        (e._endHeading = z),
                        (e._uSquared = P);
                }
                function h(n, r, a, i) {
                    e.normalize(i.cartographicToCartesian(r, E), p),
                        e.normalize(i.cartographicToCartesian(a, E), E);
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
                var p = new e(),
                    E = new e();
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
                            p = i * i,
                            E = i * p,
                            m = r.u8Over256,
                            y = r.u2Over4,
                            _ = r.u6Over64,
                            v = r.u4Over16,
                            T =
                                (2 * E * m * o) / 3 +
                                i *
                                    (1 -
                                        y +
                                        (7 * v) / 4 -
                                        (15 * _) / 4 +
                                        (579 * m) / 64 -
                                        (v - (15 * _) / 4 + (187 * m) / 16) *
                                            o -
                                        ((5 * _) / 4 - (115 * m) / 16) * u -
                                        (29 * m * s) / 16) +
                                (y / 2 - v + (71 * _) / 32 - (85 * m) / 16) *
                                    c +
                                ((5 * v) / 16 - (5 * _) / 4 + (383 * m) / 96) *
                                    f -
                                p * ((_ - (11 * m) / 2) * c + (5 * m * f) / 2) +
                                ((29 * _) / 96 - (29 * m) / 16) * h +
                                (539 * m * d) / 1536,
                            R = Math.asin(Math.sin(T) * r.cosineAlpha),
                            A = Math.atan((r.a / r.b) * Math.tan(R));
                        T -= r.sigma;
                        var S = Math.cos(2 * r.sigma + T),
                            g = Math.sin(T),
                            N = Math.cos(T),
                            O = r.cosineU * N,
                            w = r.sineU * g,
                            I = Math.atan2(
                                g * r.sineHeading,
                                O - w * r.cosineHeading,
                            ),
                            x =
                                I -
                                l(
                                    r.f,
                                    r.sineAlpha,
                                    r.cosineSquaredAlpha,
                                    T,
                                    g,
                                    N,
                                    S,
                                );
                        return a(n)
                            ? ((n.longitude = this._start.longitude + x),
                              (n.latitude = A),
                              (n.height = 0),
                              n)
                            : new t(this._start.longitude + x, A, 0);
                    }),
                    d
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
                        l = a.scaleToGeodeticSurface(n, x),
                        f = p.numberOfPoints(t, n, r),
                        d = a.cartesianToCartographic(c, N),
                        E = a.cartesianToCartographic(l, O),
                        m = h(f, i, o);
                    M.setEndPoints(d, E);
                    var y = M.surfaceDistance / f,
                        _ = s;
                    d.height = i;
                    var v = a.cartographicToCartesian(d, w);
                    e.pack(v, u, _), (_ += 3);
                    for (var T = 1; T < f; T++) {
                        var R = M.interpolateUsingSurfaceDistance(T * y, O);
                        (R.height = m[T]),
                            (v = a.cartographicToCartesian(R, w)),
                            e.pack(v, u, _),
                            (_ += 3);
                    }
                    return _;
                }
                var p = {};
                p.numberOfPoints = function (t, n, r) {
                    var a = e.distance(t, n);
                    return Math.ceil(a / r);
                };
                var E = new t();
                p.extractHeights = function (e, t) {
                    for (
                        var n = e.length, r = new Array(n), a = 0;
                        a < n;
                        a++
                    ) {
                        var i = e[a];
                        r[a] = t.cartesianToCartographic(i, E).height;
                    }
                    return r;
                };
                var m = new l(),
                    y = new e(),
                    _ = new e(),
                    v = new f(e.UNIT_X, 0),
                    T = new e(),
                    R = new f(e.UNIT_X, 0),
                    A = new e(),
                    S = new e(),
                    g = [],
                    N = new t(),
                    O = new t(),
                    w = new e(),
                    I = new e(),
                    x = new e(),
                    M = new o();
                return (
                    (p.wrapLongitude = function (t, a) {
                        var i = [],
                            o = [];
                        if (r(t) && t.length > 0) {
                            a = n(a, l.IDENTITY);
                            var s = l.inverseTransformation(a, m),
                                c = l.multiplyByPoint(s, e.ZERO, y),
                                h = e.normalize(
                                    l.multiplyByPointAsVector(s, e.UNIT_Y, _),
                                    _,
                                ),
                                d = f.fromPointNormal(c, h, v),
                                p = e.normalize(
                                    l.multiplyByPointAsVector(s, e.UNIT_X, T),
                                    T,
                                ),
                                E = f.fromPointNormal(c, p, R),
                                g = 1;
                            i.push(e.clone(t[0]));
                            for (
                                var N = i[0], O = t.length, w = 1;
                                w < O;
                                ++w
                            ) {
                                var I = t[w];
                                if (
                                    f.getPointDistance(E, N) < 0 ||
                                    f.getPointDistance(E, I) < 0
                                ) {
                                    var x = u.lineSegmentPlane(N, I, d, A);
                                    if (r(x)) {
                                        var M = e.multiplyByScalar(h, 5e-9, S);
                                        f.getPointDistance(d, N) < 0 &&
                                            e.negate(M, M),
                                            i.push(e.add(x, M, new e())),
                                            o.push(g + 1),
                                            e.negate(M, M),
                                            i.push(e.add(x, M, new e())),
                                            (g = 1);
                                    }
                                }
                                i.push(e.clone(t[w])), g++, (N = I);
                            }
                            o.push(g);
                        }
                        return { positions: i, lengths: o };
                    }),
                    (p.generateArc = function (t) {
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
                                var E = u.geodeticSurfaceNormal(h, w);
                                e.multiplyByScalar(E, l, E), e.add(h, E, h);
                            }
                            return [h.x, h.y, h.z];
                        }
                        var m = t.minDistance;
                        if (!r(m)) {
                            var y = n(t.granularity, c.RADIANS_PER_DEGREE);
                            m = c.chordLength(y, u.maximumRadius);
                        }
                        var _,
                            v = 0;
                        for (_ = 0; _ < o - 1; _++)
                            v += p.numberOfPoints(a[_], a[_ + 1], m);
                        var T = 3 * (v + 1),
                            R = new Array(T),
                            A = 0;
                        for (_ = 0; _ < o - 1; _++) {
                            A = d(
                                a[_],
                                a[_ + 1],
                                m,
                                u,
                                f ? l[_] : l,
                                f ? l[_ + 1] : l,
                                R,
                                A,
                            );
                        }
                        g.length = 0;
                        var S = a[o - 1],
                            O = u.cartesianToCartographic(S, N);
                        O.height = f ? l[o - 1] : l;
                        var x = u.cartographicToCartesian(O, w);
                        return e.pack(x, R, T - 3), R;
                    }),
                    (p.generateCartesianArc = function (t) {
                        for (
                            var n = p.generateArc(t),
                                r = n.length / 3,
                                a = new Array(r),
                                i = 0;
                            i < r;
                            i++
                        )
                            a[i] = e.unpack(n, 3 * i);
                        return a;
                    }),
                    p
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
                function p(n, r, a, o) {
                    var u = new i(a, o),
                        s = u.projectPointOntoPlane(t.add(a, n, U), U),
                        c = u.projectPointOntoPlane(t.add(a, r, L), L),
                        l = e.angleBetween(s, c);
                    return c.x * s.y - c.y * s.x >= 0 ? -l : l;
                }
                function E(e, n, r, a, i, o, c, l) {
                    var h = G,
                        d = V;
                    (F = f.eastNorthUpToFixedFrame(e, i, F)),
                        (h = s.multiplyByPointAsVector(F, b, h)),
                        (h = t.normalize(h, h));
                    var E = p(h, n, e, i);
                    (z = u.fromRotationZ(E, z)),
                        (W.z = o),
                        (F = s.multiplyTransformation(
                            F,
                            s.fromRotationTranslation(z, W, B),
                            F,
                        ));
                    var m = q;
                    m[0] = c;
                    for (var y = 0; y < l; y++)
                        for (var _ = 0; _ < r.length; _ += 3)
                            (d = t.fromArray(r, _, d)),
                                (d = u.multiplyByVector(m, d, d)),
                                (d = s.multiplyByPoint(F, d, d)),
                                a.push(d.x, d.y, d.z);
                    return a;
                }
                function m(e, n, r, a, i, o, u) {
                    for (var s = 0; s < e.length; s += 3) {
                        a = E(t.fromArray(e, s, X), n, r, a, i, o[s / 3], u, 1);
                    }
                    return a;
                }
                function y(e, t) {
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
                function _(e, t) {
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
                function v(e, n, r, i, s, c, f, h, d, p) {
                    var m,
                        y = t.angleBetween(
                            t.subtract(n, e, M),
                            t.subtract(r, e, C),
                        ),
                        _ = i === a.BEVELED ? 0 : Math.ceil(y / o.toRadians(5));
                    m = s
                        ? u.fromQuaternion(
                              l.fromAxisAngle(t.negate(e, M), y / (_ + 1), H),
                              k,
                          )
                        : u.fromQuaternion(
                              l.fromAxisAngle(e, y / (_ + 1), H),
                              k,
                          );
                    var v, T;
                    if (((n = t.clone(n, Y)), _ > 0))
                        for (var R = p ? 2 : 1, A = 0; A < _; A++)
                            (n = u.multiplyByVector(m, n, n)),
                                (v = t.subtract(n, e, M)),
                                (v = t.normalize(v, v)),
                                s || (v = t.negate(v, v)),
                                (T = c.scaleToGeodeticSurface(n, C)),
                                (f = E(T, v, h, f, c, d, 1, R));
                    else
                        (v = t.subtract(n, e, M)),
                            (v = t.normalize(v, v)),
                            s || (v = t.negate(v, v)),
                            (T = c.scaleToGeodeticSurface(n, C)),
                            (f = E(T, v, h, f, c, d, 1, 1)),
                            (r = t.clone(r, Y)),
                            (v = t.subtract(r, e, M)),
                            (v = t.normalize(v, v)),
                            s || (v = t.negate(v, v)),
                            (T = c.scaleToGeodeticSurface(r, C)),
                            (f = E(T, v, h, f, c, d, 1, 1));
                    return f;
                }
                var T = [new t(), new t()],
                    R = new t(),
                    A = new t(),
                    S = new t(),
                    g = new t(),
                    N = new t(),
                    O = new t(),
                    w = new t(),
                    I = new t(),
                    x = new t(),
                    M = new t(),
                    C = new t(),
                    P = {},
                    D = new r(),
                    U = new t(),
                    L = new t(),
                    b = new t(-1, 0, 0),
                    F = new s(),
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
                            p = i._cornerType,
                            C = u ? y(n, r) : _(n, r),
                            D = u ? _(n, r) : void 0,
                            U = r.height / 2,
                            L = r.width / 2,
                            b = e.length,
                            F = [],
                            B = u ? [] : void 0,
                            z = R,
                            q = A,
                            G = S,
                            V = g,
                            W = N,
                            X = O,
                            H = w,
                            Y = I,
                            k = x,
                            K = e[0],
                            J = e[1];
                        (V = s.geodeticSurfaceNormal(K, V)),
                            (z = t.subtract(J, K, z)),
                            (z = t.normalize(z, z)),
                            (Y = t.cross(V, z, Y)),
                            (Y = t.normalize(Y, Y));
                        var Q = l[0],
                            $ = l[1];
                        u && (B = E(K, Y, D, B, s, Q + U, 1, 1)),
                            (k = t.clone(K, k)),
                            (K = J),
                            (q = t.negate(z, q));
                        for (var ee, te, ne = 1; ne < b - 1; ne++) {
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
                                            t.magnitude(t.cross(G, q, M)),
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
                                      (T[0] = t.clone(k, T[0])),
                                      (T[1] = t.clone(X, T[1])),
                                      (ee = d(T, Q + U, $ + U, f)),
                                      (te = c.generateArc({
                                          positions: T,
                                          granularity: f,
                                          ellipsoid: s,
                                      })),
                                      (F = m(te, Y, C, F, s, ee, 1)),
                                      (Y = t.cross(V, z, Y)),
                                      (Y = t.normalize(Y, Y)),
                                      (H = t.add(
                                          W,
                                          t.multiplyByScalar(Y, L, H),
                                          H,
                                      )),
                                      p === a.ROUNDED || p === a.BEVELED
                                          ? v(W, X, H, p, ue, s, F, C, $ + U, u)
                                          : ((G = t.negate(G, G)),
                                            (F = E(
                                                K,
                                                G,
                                                C,
                                                F,
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
                                      (T[0] = t.clone(k, T[0])),
                                      (T[1] = t.clone(X, T[1])),
                                      (ee = d(T, Q + U, $ + U, f)),
                                      (te = c.generateArc({
                                          positions: T,
                                          granularity: f,
                                          ellipsoid: s,
                                      })),
                                      (F = m(te, Y, C, F, s, ee, 1)),
                                      (Y = t.cross(V, z, Y)),
                                      (Y = t.normalize(Y, Y)),
                                      (H = t.add(
                                          W,
                                          t.multiplyByScalar(Y, -L, H),
                                          H,
                                      )),
                                      p === a.ROUNDED || p === a.BEVELED
                                          ? v(W, X, H, p, ue, s, F, C, $ + U, u)
                                          : (F = E(
                                                K,
                                                G,
                                                C,
                                                F,
                                                s,
                                                $ + U,
                                                oe,
                                                re,
                                            )),
                                      (k = t.clone(H, k))),
                                    (q = t.negate(z, q));
                            } else (F = E(k, Y, C, F, s, Q + U, 1, 1)), (k = K);
                            (Q = $), ($ = l[ne + 1]), (K = J);
                        }
                        (T[0] = t.clone(k, T[0])),
                            (T[1] = t.clone(K, T[1])),
                            (ee = d(T, Q + U, $ + U, f)),
                            (te = c.generateArc({
                                positions: T,
                                granularity: f,
                                ellipsoid: s,
                            })),
                            (F = m(te, Y, C, F, s, ee, 1)),
                            u && (B = E(K, Y, D, B, s, $ + U, 1, 1)),
                            (b = F.length);
                        var se = u ? b + B.length : b,
                            ce = new Float64Array(se);
                        return ce.set(F), u && ce.set(B, b), ce;
                    }),
                    P
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
            'Core/PolylineVolumeGeometry',
            [
                './arrayRemoveDuplicates',
                './BoundingRectangle',
                './BoundingSphere',
                './Cartesian2',
                './Cartesian3',
                './ComponentDatatype',
                './CornerType',
                './defaultValue',
                './defined',
                './DeveloperError',
                './Ellipsoid',
                './Geometry',
                './GeometryAttribute',
                './GeometryAttributes',
                './GeometryPipeline',
                './IndexDatatype',
                './Math',
                './oneTimeWarning',
                './PolygonPipeline',
                './PolylineVolumeGeometryLibrary',
                './PrimitiveType',
                './VertexFormat',
                './WindingOrder',
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
                p,
                E,
                m,
                y,
                _,
                v,
                T,
                R,
                A,
            ) {
                'use strict';
                function S(e, t, r, a) {
                    var o = new d();
                    a.position &&
                        (o.position = new h({
                            componentDatatype: i.DOUBLE,
                            componentsPerAttribute: 3,
                            values: e,
                        }));
                    var u,
                        s,
                        c,
                        l,
                        m,
                        v,
                        R = t.length,
                        A = e.length / 3,
                        S = (A - 2 * R) / (2 * R),
                        g = _.triangulate(t),
                        N = (S - 1) * R * 6 + 2 * g.length,
                        O = E.createTypedArray(A, N),
                        w = 2 * R,
                        I = 0;
                    for (u = 0; u < S - 1; u++) {
                        for (s = 0; s < R - 1; s++)
                            (c = 2 * s + u * R * 2),
                                (v = c + w),
                                (l = c + 1),
                                (m = l + w),
                                (O[I++] = l),
                                (O[I++] = c),
                                (O[I++] = m),
                                (O[I++] = m),
                                (O[I++] = c),
                                (O[I++] = v);
                        (c = 2 * R - 2 + u * R * 2),
                            (l = c + 1),
                            (m = l + w),
                            (v = c + w),
                            (O[I++] = l),
                            (O[I++] = c),
                            (O[I++] = m),
                            (O[I++] = m),
                            (O[I++] = c),
                            (O[I++] = v);
                    }
                    if (a.st || a.tangent || a.bitangent) {
                        var x,
                            M,
                            C = new Float32Array(2 * A),
                            P = 1 / (S - 1),
                            D = 1 / r.height,
                            U = r.height / 2,
                            L = 0;
                        for (u = 0; u < S; u++) {
                            for (
                                x = u * P,
                                    M = D * (t[0].y + U),
                                    C[L++] = x,
                                    C[L++] = M,
                                    s = 1;
                                s < R;
                                s++
                            )
                                (M = D * (t[s].y + U)),
                                    (C[L++] = x),
                                    (C[L++] = M),
                                    (C[L++] = x),
                                    (C[L++] = M);
                            (M = D * (t[0].y + U)), (C[L++] = x), (C[L++] = M);
                        }
                        for (s = 0; s < R; s++)
                            (x = 0),
                                (M = D * (t[s].y + U)),
                                (C[L++] = x),
                                (C[L++] = M);
                        for (s = 0; s < R; s++)
                            (x = (S - 1) * P),
                                (M = D * (t[s].y + U)),
                                (C[L++] = x),
                                (C[L++] = M);
                        o.st = new h({
                            componentDatatype: i.FLOAT,
                            componentsPerAttribute: 2,
                            values: new Float32Array(C),
                        });
                    }
                    var b = A - 2 * R;
                    for (u = 0; u < g.length; u += 3) {
                        var F = g[u] + b,
                            B = g[u + 1] + b,
                            z = g[u + 2] + b;
                        (O[I++] = F),
                            (O[I++] = B),
                            (O[I++] = z),
                            (O[I++] = z + R),
                            (O[I++] = B + R),
                            (O[I++] = F + R);
                    }
                    var q = new f({
                        attributes: o,
                        indices: O,
                        boundingSphere: n.fromVertices(e),
                        primitiveType: T.TRIANGLES,
                    });
                    if (
                        (a.normal && (q = p.computeNormal(q)),
                        a.tangent || a.bitangent)
                    ) {
                        try {
                            q = p.computeTangentAndBitangent(q);
                        } catch (e) {
                            y(
                                'polyline-volume-tangent-bitangent',
                                'Unable to compute tangents and bitangents for polyline volume geometry',
                            );
                        }
                        a.tangent || (q.attributes.tangent = void 0),
                            a.bitangent || (q.attributes.bitangent = void 0),
                            a.st || (q.attributes.st = void 0);
                    }
                    return q;
                }
                function g(e) {
                    e = u(e, u.EMPTY_OBJECT);
                    var t = e.polylinePositions,
                        n = e.shapePositions;
                    (this._positions = t),
                        (this._shape = n),
                        (this._ellipsoid = l.clone(u(e.ellipsoid, l.WGS84))),
                        (this._cornerType = u(e.cornerType, o.ROUNDED)),
                        (this._vertexFormat = R.clone(
                            u(e.vertexFormat, R.DEFAULT),
                        )),
                        (this._granularity = u(
                            e.granularity,
                            m.RADIANS_PER_DEGREE,
                        )),
                        (this._workerName = 'createPolylineVolumeGeometry');
                    var i = 1 + t.length * a.packedLength;
                    (i += 1 + n.length * r.packedLength),
                        (this.packedLength =
                            i + l.packedLength + R.packedLength + 2);
                }
                g.pack = function (e, t, n) {
                    n = u(n, 0);
                    var i,
                        o = e._positions,
                        s = o.length;
                    for (t[n++] = s, i = 0; i < s; ++i, n += a.packedLength)
                        a.pack(o[i], t, n);
                    var c = e._shape;
                    for (
                        s = c.length, t[n++] = s, i = 0;
                        i < s;
                        ++i, n += r.packedLength
                    )
                        r.pack(c[i], t, n);
                    return (
                        l.pack(e._ellipsoid, t, n),
                        (n += l.packedLength),
                        R.pack(e._vertexFormat, t, n),
                        (n += R.packedLength),
                        (t[n++] = e._cornerType),
                        (t[n] = e._granularity),
                        t
                    );
                };
                var N = l.clone(l.UNIT_SPHERE),
                    O = new R(),
                    w = {
                        polylinePositions: void 0,
                        shapePositions: void 0,
                        ellipsoid: N,
                        vertexFormat: O,
                        cornerType: void 0,
                        granularity: void 0,
                    };
                g.unpack = function (e, t, n) {
                    t = u(t, 0);
                    var i,
                        o = e[t++],
                        c = new Array(o);
                    for (i = 0; i < o; ++i, t += a.packedLength)
                        c[i] = a.unpack(e, t);
                    o = e[t++];
                    var f = new Array(o);
                    for (i = 0; i < o; ++i, t += r.packedLength)
                        f[i] = r.unpack(e, t);
                    var h = l.unpack(e, t, N);
                    t += l.packedLength;
                    var d = R.unpack(e, t, O);
                    t += R.packedLength;
                    var p = e[t++],
                        E = e[t];
                    return s(n)
                        ? ((n._positions = c),
                          (n._shape = f),
                          (n._ellipsoid = l.clone(h, n._ellipsoid)),
                          (n._vertexFormat = R.clone(d, n._vertexFormat)),
                          (n._cornerType = p),
                          (n._granularity = E),
                          n)
                        : ((w.polylinePositions = c),
                          (w.shapePositions = f),
                          (w.cornerType = p),
                          (w.granularity = E),
                          new g(w));
                };
                var I = new t();
                return (
                    (g.createGeometry = function (n) {
                        var r = n._positions,
                            i = e(r, a.equalsEpsilon),
                            o = n._shape;
                        if (
                            ((o = v.removeDuplicatesFromShape(o)),
                            !(i.length < 2 || o.length < 3))
                        ) {
                            _.computeWindingOrder2D(o) === A.CLOCKWISE &&
                                o.reverse();
                            var u = t.fromPoints(o, I);
                            return S(
                                v.computePositions(i, o, u, n, !0),
                                o,
                                u,
                                n._vertexFormat,
                            );
                        }
                    }),
                    g
                );
            },
        ),
        define(
            'Workers/createPolylineVolumeGeometry',
            [
                '../Core/defined',
                '../Core/Ellipsoid',
                '../Core/PolylineVolumeGeometry',
            ],
            function (e, t, n) {
                'use strict';
                function r(r, a) {
                    return (
                        e(a) && (r = n.unpack(r, a)),
                        (r._ellipsoid = t.clone(r._ellipsoid)),
                        n.createGeometry(r)
                    );
                }
                return r;
            },
        );
})();
