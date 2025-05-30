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
                    E = new o(
                        40680631590769,
                        40680631590769,
                        40408299984661.445,
                    );
                return (
                    (o.fromRadians = function (e, r, i, a, u) {
                        i = t(i, 0);
                        var s = n(a) ? a.radiiSquared : E,
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
            'Core/scaleToGeodeticSurface',
            ['./Cartesian3', './defined', './DeveloperError', './Math'],
            function (e, t, n, r) {
                'use strict';
                function i(n, i, u, s, c) {
                    var l = n.x,
                        f = n.y,
                        h = n.z,
                        d = i.x,
                        E = i.y,
                        m = i.z,
                        p = l * l * d * d,
                        _ = f * f * E * E,
                        y = h * h * m * m,
                        R = p + _ + y,
                        T = Math.sqrt(1 / R),
                        A = e.multiplyByScalar(n, T, a);
                    if (R < s) return isFinite(T) ? e.clone(A, c) : void 0;
                    var S = u.x,
                        N = u.y,
                        M = u.z,
                        O = o;
                    (O.x = A.x * S * 2),
                        (O.y = A.y * N * 2),
                        (O.z = A.z * M * 2);
                    var v,
                        I,
                        g,
                        w,
                        C,
                        x,
                        P,
                        U,
                        D,
                        L,
                        F,
                        B = ((1 - T) * e.magnitude(n)) / (0.5 * e.magnitude(O)),
                        b = 0;
                    do {
                        (B -= b),
                            (g = 1 / (1 + B * S)),
                            (w = 1 / (1 + B * N)),
                            (C = 1 / (1 + B * M)),
                            (x = g * g),
                            (P = w * w),
                            (U = C * C),
                            (D = x * g),
                            (L = P * w),
                            (F = U * C),
                            (v = p * x + _ * P + y * U - 1),
                            (I = p * D * S + _ * L * N + y * F * M);
                        b = v / (-2 * I);
                    } while (Math.abs(v) > r.EPSILON12);
                    return t(c)
                        ? ((c.x = l * g), (c.y = f * w), (c.z = h * C), c)
                        : new e(l * g, f * w, h * C);
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
                        var E = r(n) ? n.oneOverRadii : f,
                            m = r(n) ? n.oneOverRadiiSquared : h,
                            p = r(n) ? n._centerToleranceSquared : d,
                            _ = o(t, E, m, p, c);
                        if (r(_)) {
                            var y = e.multiplyComponents(_, m, s);
                            y = e.normalize(y, y);
                            var R = e.subtract(t, _, l),
                                T = Math.atan2(y.y, y.x),
                                A = Math.asin(y.z),
                                S = a.sign(e.dot(R, t)) * e.magnitude(R);
                            return r(i)
                                ? ((i.longitude = T),
                                  (i.latitude = A),
                                  (i.height = S),
                                  i)
                                : new u(T, A, S);
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
                var E = new e(),
                    m = new e(),
                    p = new e();
                return (
                    (f.prototype.cartesianToCartographic = function (n, r) {
                        var a = this.scaleToGeodeticSurface(n, m);
                        if (i(a)) {
                            var o = this.geodeticSurfaceNormal(a, E),
                                u = e.subtract(n, a, p),
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
                        var r = e[s.getElementIndex(m[n], E[n])];
                        t += 2 * r * r;
                    }
                    return Math.sqrt(t);
                }
                function f(e, t) {
                    for (var n = u.EPSILON15, r = 0, i = 1, a = 0; a < 3; ++a) {
                        var o = Math.abs(e[s.getElementIndex(m[a], E[a])]);
                        o > r && ((i = a), (r = o));
                    }
                    var c = 1,
                        l = 0,
                        f = E[i],
                        h = m[i];
                    if (Math.abs(e[s.getElementIndex(h, f)]) > n) {
                        var d,
                            p = e[s.getElementIndex(h, h)],
                            _ = e[s.getElementIndex(f, f)],
                            y = e[s.getElementIndex(h, f)],
                            R = (p - _) / 2 / y;
                        (d =
                            R < 0
                                ? -1 / (-R + Math.sqrt(1 + R * R))
                                : 1 / (R + Math.sqrt(1 + R * R))),
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
                            E = n - u - f + d,
                            m = 2 * (i - h),
                            p = 2 * (a + l),
                            _ = 2 * (i + h),
                            y = -n + u - f + d,
                            R = 2 * (c - o),
                            T = 2 * (a - l),
                            A = 2 * (c + o),
                            S = -n - u + f + d;
                        return r(t)
                            ? ((t[0] = E),
                              (t[1] = _),
                              (t[2] = T),
                              (t[3] = m),
                              (t[4] = y),
                              (t[5] = A),
                              (t[6] = p),
                              (t[7] = R),
                              (t[8] = S),
                              t)
                            : new s(E, m, p, _, y, R, T, A, S);
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
                            E = a * i + c * o * u,
                            m = -c * i + a * o * u,
                            p = -o,
                            _ = c * n,
                            y = a * n;
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
                var E = [1, 0, 0],
                    m = [2, 2, 1],
                    p = new s(),
                    _ = new s();
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
                            f(h, p),
                                s.transpose(p, _),
                                s.multiply(h, p, h),
                                s.multiply(_, h, h),
                                s.multiply(o, p, o),
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
                function l(e, t, n, i, a, o, u, s, c, l, f, h, d, E, m, p) {
                    (this[0] = r(e, 0)),
                        (this[1] = r(a, 0)),
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
                        (this[12] = r(i, 0)),
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
                            E = t.y * t.z,
                            m = t.y * t.w,
                            p = t.z * t.z,
                            _ = t.z * t.w,
                            y = t.w * t.w,
                            R = s - d - p + y,
                            T = 2 * (c - _),
                            A = 2 * (f + m),
                            S = 2 * (c + _),
                            N = -s + d - p + y,
                            M = 2 * (E - h),
                            O = 2 * (f - m),
                            v = 2 * (E + h),
                            I = -s - d + p + y;
                        return (
                            (r[0] = R * a),
                            (r[1] = S * a),
                            (r[2] = O * a),
                            (r[3] = 0),
                            (r[4] = T * o),
                            (r[5] = N * o),
                            (r[6] = v * o),
                            (r[7] = 0),
                            (r[8] = A * u),
                            (r[9] = M * u),
                            (r[10] = I * u),
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
                        E = f.x,
                        m = f.y,
                        p = f.z,
                        _ = d.x,
                        y = d.y,
                        R = d.z,
                        T = r.x,
                        A = r.y,
                        S = r.z,
                        N = u * -T + s * -A + c * -S,
                        M = _ * -T + y * -A + R * -S,
                        O = E * T + m * A + p * S;
                    return i(n)
                        ? ((n[0] = u),
                          (n[1] = _),
                          (n[2] = -E),
                          (n[3] = 0),
                          (n[4] = s),
                          (n[5] = y),
                          (n[6] = -m),
                          (n[7] = 0),
                          (n[8] = c),
                          (n[9] = R),
                          (n[10] = -p),
                          (n[11] = 0),
                          (n[12] = N),
                          (n[13] = M),
                          (n[14] = O),
                          (n[15] = 1),
                          n)
                        : new l(
                              u,
                              s,
                              c,
                              N,
                              _,
                              y,
                              R,
                              M,
                              -E,
                              -m,
                              -p,
                              O,
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
                            E = f,
                            m = a + c,
                            p = o + l,
                            _ = t + f;
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
                            (i[10] = E),
                            (i[11] = 0),
                            (i[12] = m),
                            (i[13] = p),
                            (i[14] = _),
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
                            E = e[11],
                            m = e[12],
                            p = e[13],
                            _ = e[14],
                            y = e[15],
                            R = t[0],
                            T = t[1],
                            A = t[2],
                            S = t[3],
                            N = t[4],
                            M = t[5],
                            O = t[6],
                            v = t[7],
                            I = t[8],
                            g = t[9],
                            w = t[10],
                            C = t[11],
                            x = t[12],
                            P = t[13],
                            U = t[14],
                            D = t[15],
                            L = r * R + u * T + f * A + m * S,
                            F = i * R + s * T + h * A + p * S,
                            B = a * R + c * T + d * A + _ * S,
                            b = o * R + l * T + E * A + y * S,
                            z = r * N + u * M + f * O + m * v,
                            q = i * N + s * M + h * O + p * v,
                            G = a * N + c * M + d * O + _ * v,
                            X = o * N + l * M + E * O + y * v,
                            W = r * I + u * g + f * w + m * C,
                            V = i * I + s * g + h * w + p * C,
                            H = a * I + c * g + d * w + _ * C,
                            Y = o * I + l * g + E * w + y * C,
                            k = r * x + u * P + f * U + m * D,
                            Z = i * x + s * P + h * U + p * D,
                            j = a * x + c * P + d * U + _ * D,
                            K = o * x + l * P + E * U + y * D;
                        return (
                            (n[0] = L),
                            (n[1] = F),
                            (n[2] = B),
                            (n[3] = b),
                            (n[4] = z),
                            (n[5] = q),
                            (n[6] = G),
                            (n[7] = X),
                            (n[8] = W),
                            (n[9] = V),
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
                            E = e[14],
                            m = t[0],
                            p = t[1],
                            _ = t[2],
                            y = t[4],
                            R = t[5],
                            T = t[6],
                            A = t[8],
                            S = t[9],
                            N = t[10],
                            M = t[12],
                            O = t[13],
                            v = t[14],
                            I = r * m + o * p + c * _,
                            g = i * m + u * p + l * _,
                            w = a * m + s * p + f * _,
                            C = r * y + o * R + c * T,
                            x = i * y + u * R + l * T,
                            P = a * y + s * R + f * T,
                            U = r * A + o * S + c * N,
                            D = i * A + u * S + l * N,
                            L = a * A + s * S + f * N,
                            F = r * M + o * O + c * v + h,
                            B = i * M + u * O + l * v + d,
                            b = a * M + s * O + f * v + E;
                        return (
                            (n[0] = I),
                            (n[1] = g),
                            (n[2] = w),
                            (n[3] = 0),
                            (n[4] = C),
                            (n[5] = x),
                            (n[6] = P),
                            (n[7] = 0),
                            (n[8] = U),
                            (n[9] = D),
                            (n[10] = L),
                            (n[11] = 0),
                            (n[12] = F),
                            (n[13] = B),
                            (n[14] = b),
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
                            E = t[2],
                            m = t[3],
                            p = t[4],
                            _ = t[5],
                            y = t[6],
                            R = t[7],
                            T = t[8],
                            A = r * h + o * d + c * E,
                            S = i * h + u * d + l * E,
                            N = a * h + s * d + f * E,
                            M = r * m + o * p + c * _,
                            O = i * m + u * p + l * _,
                            v = a * m + s * p + f * _,
                            I = r * y + o * R + c * T,
                            g = i * y + u * R + l * T,
                            w = a * y + s * R + f * T;
                        return (
                            (n[0] = A),
                            (n[1] = S),
                            (n[2] = N),
                            (n[3] = 0),
                            (n[4] = M),
                            (n[5] = O),
                            (n[6] = v),
                            (n[7] = 0),
                            (n[8] = I),
                            (n[9] = g),
                            (n[10] = w),
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
                var _ = new s(),
                    y = new s(),
                    R = new t(),
                    T = new t(0, 0, 0, 1);
                return (
                    (l.inverse = function (e, n) {
                        if (
                            s.equalsEpsilon(
                                l.getRotation(e, _),
                                y,
                                u.EPSILON7,
                            ) &&
                            t.equals(l.getRow(e, 3, R), T)
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
                            E = e[13],
                            m = e[2],
                            p = e[6],
                            A = e[10],
                            S = e[14],
                            N = e[3],
                            M = e[7],
                            O = e[11],
                            v = e[15],
                            I = A * v,
                            g = S * O,
                            w = p * v,
                            C = S * M,
                            x = p * O,
                            P = A * M,
                            U = m * v,
                            D = S * N,
                            L = m * O,
                            F = A * N,
                            B = m * M,
                            b = p * N,
                            z = I * h + C * d + x * E - (g * h + w * d + P * E),
                            q = g * f + U * d + F * E - (I * f + D * d + L * E),
                            G = w * f + D * h + B * E - (C * f + U * h + b * E),
                            X = P * f + L * h + b * d - (x * f + F * h + B * d),
                            W = g * i + w * a + P * o - (I * i + C * a + x * o),
                            V = I * r + D * a + L * o - (g * r + U * a + F * o),
                            H = C * r + U * i + b * o - (w * r + D * i + B * o),
                            Y = x * r + F * i + B * a - (P * r + L * i + b * a);
                        (I = a * E),
                            (g = o * d),
                            (w = i * E),
                            (C = o * h),
                            (x = i * d),
                            (P = a * h),
                            (U = r * E),
                            (D = o * f),
                            (L = r * d),
                            (F = a * f),
                            (B = r * h),
                            (b = i * f);
                        var k = I * M + C * O + x * v - (g * M + w * O + P * v),
                            Z = g * N + U * O + F * v - (I * N + D * O + L * v),
                            j = w * N + D * M + B * v - (C * N + U * M + b * v),
                            K = P * N + L * M + b * O - (x * N + F * M + B * O),
                            J = w * A + P * S + g * p - (x * S + I * p + C * A),
                            Q = L * S + I * m + D * A - (U * A + F * S + g * m),
                            $ = U * p + b * S + C * m - (B * S + w * m + D * p),
                            ee =
                                B * A + x * m + F * p - (L * p + b * A + P * m),
                            te = r * z + i * q + a * G + o * X;
                        if (Math.abs(te) < u.EPSILON20)
                            throw new c(
                                'matrix is not invertible because its determinate is zero.',
                            );
                        return (
                            (te = 1 / te),
                            (n[0] = z * te),
                            (n[1] = q * te),
                            (n[2] = G * te),
                            (n[3] = X * te),
                            (n[4] = W * te),
                            (n[5] = V * te),
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
                            E = -n * f - r * h - i * d,
                            m = -a * f - o * h - u * d,
                            p = -s * f - c * h - l * d;
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
                            var E =
                                d.longitude >= 0
                                    ? d.longitude
                                    : d.longitude + u.TWO_PI;
                            (a = Math.min(a, E)), (o = Math.max(o, E));
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
                            E = e.west,
                            m = c;
                        (m.height = i),
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
            function (e, t, n, r, i, a, o, u, s, c, l, f) {
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
                    R = new e(),
                    T = new e(),
                    A = new e(),
                    S = new e(),
                    N = new e(),
                    M = new e();
                h.fromPoints = function (t, n) {
                    if ((i(n) || (n = new h()), !i(t) || 0 === t.length))
                        return (
                            (n.center = e.clone(e.ZERO, n.center)),
                            (n.radius = 0),
                            n
                        );
                    var r,
                        a = e.clone(t[0], R),
                        o = e.clone(a, d),
                        u = e.clone(a, E),
                        s = e.clone(a, m),
                        c = e.clone(a, p),
                        l = e.clone(a, _),
                        f = e.clone(a, y),
                        O = t.length;
                    for (r = 1; r < O; r++) {
                        e.clone(t[r], a);
                        var v = a.x,
                            I = a.y,
                            g = a.z;
                        v < o.x && e.clone(a, o),
                            v > c.x && e.clone(a, c),
                            I < u.y && e.clone(a, u),
                            I > l.y && e.clone(a, l),
                            g < s.z && e.clone(a, s),
                            g > f.z && e.clone(a, f);
                    }
                    var w = e.magnitudeSquared(e.subtract(c, o, T)),
                        C = e.magnitudeSquared(e.subtract(l, u, T)),
                        x = e.magnitudeSquared(e.subtract(f, s, T)),
                        P = o,
                        U = c,
                        D = w;
                    C > D && ((D = C), (P = u), (U = l)),
                        x > D && ((D = x), (P = s), (U = f));
                    var L = A;
                    (L.x = 0.5 * (P.x + U.x)),
                        (L.y = 0.5 * (P.y + U.y)),
                        (L.z = 0.5 * (P.z + U.z));
                    var F = e.magnitudeSquared(e.subtract(U, L, T)),
                        B = Math.sqrt(F),
                        b = S;
                    (b.x = o.x), (b.y = u.y), (b.z = s.z);
                    var z = N;
                    (z.x = c.x), (z.y = l.y), (z.z = f.z);
                    var q = e.multiplyByScalar(e.add(b, z, T), 0.5, M),
                        G = 0;
                    for (r = 0; r < O; r++) {
                        e.clone(t[r], a);
                        var X = e.magnitude(e.subtract(a, q, T));
                        X > G && (G = X);
                        var W = e.magnitudeSquared(e.subtract(a, L, T));
                        if (W > F) {
                            var V = Math.sqrt(W);
                            (B = 0.5 * (B + V)), (F = B * B);
                            var H = V - B;
                            (L.x = (B * L.x + H * a.x) / V),
                                (L.y = (B * L.y + H * a.y) / V),
                                (L.z = (B * L.z + H * a.z) / V);
                        }
                    }
                    return (
                        B < G
                            ? (e.clone(L, n.center), (n.radius = B))
                            : (e.clone(q, n.center), (n.radius = G)),
                        n
                    );
                };
                var O = new o(),
                    v = new e(),
                    I = new e(),
                    g = new t(),
                    w = new t();
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
                        (n = r(n, O)),
                            f.southwest(t, g),
                            (g.height = a),
                            f.northeast(t, w),
                            (w.height = o);
                        var s = n.project(g, v),
                            c = n.project(w, I),
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
                var C = [];
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
                    var s = f.subsample(t, n, o, C);
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
                        var u = R;
                        (u.x = t[0] + n.x),
                            (u.y = t[1] + n.y),
                            (u.z = t[2] + n.z);
                        var s,
                            c = e.clone(u, d),
                            l = e.clone(u, E),
                            f = e.clone(u, m),
                            O = e.clone(u, p),
                            v = e.clone(u, _),
                            I = e.clone(u, y),
                            g = t.length;
                        for (s = 0; s < g; s += a) {
                            var w = t[s] + n.x,
                                C = t[s + 1] + n.y,
                                x = t[s + 2] + n.z;
                            (u.x = w),
                                (u.y = C),
                                (u.z = x),
                                w < c.x && e.clone(u, c),
                                w > O.x && e.clone(u, O),
                                C < l.y && e.clone(u, l),
                                C > v.y && e.clone(u, v),
                                x < f.z && e.clone(u, f),
                                x > I.z && e.clone(u, I);
                        }
                        var P = e.magnitudeSquared(e.subtract(O, c, T)),
                            U = e.magnitudeSquared(e.subtract(v, l, T)),
                            D = e.magnitudeSquared(e.subtract(I, f, T)),
                            L = c,
                            F = O,
                            B = P;
                        U > B && ((B = U), (L = l), (F = v)),
                            D > B && ((B = D), (L = f), (F = I));
                        var b = A;
                        (b.x = 0.5 * (L.x + F.x)),
                            (b.y = 0.5 * (L.y + F.y)),
                            (b.z = 0.5 * (L.z + F.z));
                        var z = e.magnitudeSquared(e.subtract(F, b, T)),
                            q = Math.sqrt(z),
                            G = S;
                        (G.x = c.x), (G.y = l.y), (G.z = f.z);
                        var X = N;
                        (X.x = O.x), (X.y = v.y), (X.z = I.z);
                        var W = e.multiplyByScalar(e.add(G, X, T), 0.5, M),
                            V = 0;
                        for (s = 0; s < g; s += a) {
                            (u.x = t[s] + n.x),
                                (u.y = t[s + 1] + n.y),
                                (u.z = t[s + 2] + n.z);
                            var H = e.magnitude(e.subtract(u, W, T));
                            H > V && (V = H);
                            var Y = e.magnitudeSquared(e.subtract(u, b, T));
                            if (Y > z) {
                                var k = Math.sqrt(Y);
                                (q = 0.5 * (q + k)), (z = q * q);
                                var Z = k - q;
                                (b.x = (q * b.x + Z * u.x) / k),
                                    (b.y = (q * b.y + Z * u.y) / k),
                                    (b.z = (q * b.z + Z * u.z) / k);
                            }
                        }
                        return (
                            q < V
                                ? (e.clone(b, o.center), (o.radius = q))
                                : (e.clone(W, o.center), (o.radius = V)),
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
                        var a = R;
                        (a.x = t[0] + n[0]),
                            (a.y = t[1] + n[1]),
                            (a.z = t[2] + n[2]);
                        var o,
                            u = e.clone(a, d),
                            s = e.clone(a, E),
                            c = e.clone(a, m),
                            l = e.clone(a, p),
                            f = e.clone(a, _),
                            O = e.clone(a, y),
                            v = t.length;
                        for (o = 0; o < v; o += 3) {
                            var I = t[o] + n[o],
                                g = t[o + 1] + n[o + 1],
                                w = t[o + 2] + n[o + 2];
                            (a.x = I),
                                (a.y = g),
                                (a.z = w),
                                I < u.x && e.clone(a, u),
                                I > l.x && e.clone(a, l),
                                g < s.y && e.clone(a, s),
                                g > f.y && e.clone(a, f),
                                w < c.z && e.clone(a, c),
                                w > O.z && e.clone(a, O);
                        }
                        var C = e.magnitudeSquared(e.subtract(l, u, T)),
                            x = e.magnitudeSquared(e.subtract(f, s, T)),
                            P = e.magnitudeSquared(e.subtract(O, c, T)),
                            U = u,
                            D = l,
                            L = C;
                        x > L && ((L = x), (U = s), (D = f)),
                            P > L && ((L = P), (U = c), (D = O));
                        var F = A;
                        (F.x = 0.5 * (U.x + D.x)),
                            (F.y = 0.5 * (U.y + D.y)),
                            (F.z = 0.5 * (U.z + D.z));
                        var B = e.magnitudeSquared(e.subtract(D, F, T)),
                            b = Math.sqrt(B),
                            z = S;
                        (z.x = u.x), (z.y = s.y), (z.z = c.z);
                        var q = N;
                        (q.x = l.x), (q.y = f.y), (q.z = O.z);
                        var G = e.multiplyByScalar(e.add(z, q, T), 0.5, M),
                            X = 0;
                        for (o = 0; o < v; o += 3) {
                            (a.x = t[o] + n[o]),
                                (a.y = t[o + 1] + n[o + 1]),
                                (a.z = t[o + 2] + n[o + 2]);
                            var W = e.magnitude(e.subtract(a, G, T));
                            W > X && (X = W);
                            var V = e.magnitudeSquared(e.subtract(a, F, T));
                            if (V > B) {
                                var H = Math.sqrt(V);
                                (b = 0.5 * (b + H)), (B = b * b);
                                var Y = H - b;
                                (F.x = (b * F.x + Y * a.x) / H),
                                    (F.y = (b * F.y + Y * a.y) / H),
                                    (F.z = (b * F.z + Y * a.z) / H);
                            }
                        }
                        return (
                            b < X
                                ? (e.clone(F, r.center), (r.radius = b))
                                : (e.clone(G, r.center), (r.radius = X)),
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
                var x = new e();
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
                        s = Math.max(s, e.distance(u, c.center, x) + c.radius);
                    }
                    return (n.radius = s), n;
                };
                var P = new e(),
                    U = new e(),
                    D = new e();
                (h.fromOrientedBoundingBox = function (t, n) {
                    i(n) || (n = new h());
                    var r = t.halfAxes,
                        a = c.getColumn(r, 0, P),
                        o = c.getColumn(r, 1, U),
                        u = c.getColumn(r, 2, D);
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
                var L = new e(),
                    F = new e();
                h.union = function (t, n, r) {
                    i(r) || (r = new h());
                    var a = t.center,
                        o = t.radius,
                        u = n.center,
                        s = n.radius,
                        c = e.subtract(u, a, L),
                        l = e.magnitude(c);
                    if (o >= l + s) return t.clone(r), r;
                    if (s >= l + o) return n.clone(r), r;
                    var f = 0.5 * (o + l + s),
                        d = e.multiplyByScalar(c, (-o + f) / l, F);
                    return (
                        e.add(d, a, d), e.clone(d, r.center), (r.radius = f), r
                    );
                };
                var B = new e();
                (h.expand = function (t, n, r) {
                    r = h.clone(t, r);
                    var i = e.magnitude(e.subtract(n, r.center, B));
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
                var b = new e();
                (h.distanceSquaredTo = function (t, n) {
                    var r = e.subtract(t.center, n, b);
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
                    var q = new e(),
                        G = new e(),
                        X = new e(),
                        W = new e(),
                        V = new e(),
                        H = new t(),
                        Y = new Array(8),
                        k = 0;
                    k < 8;
                    ++k
                )
                    Y[k] = new e();
                var Z = new o();
                return (
                    (h.projectTo2D = function (t, n, i) {
                        n = r(n, Z);
                        var a = n.ellipsoid,
                            o = t.center,
                            u = t.radius,
                            s = a.geodeticSurfaceNormal(o, q),
                            c = e.cross(e.UNIT_Z, s, G);
                        e.normalize(c, c);
                        var l = e.cross(s, c, X);
                        e.normalize(l, l),
                            e.multiplyByScalar(s, u, s),
                            e.multiplyByScalar(l, u, l),
                            e.multiplyByScalar(c, u, c);
                        var f = e.negate(l, V),
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
                            var R = a.cartesianToCartographic(y, H);
                            n.project(R, y);
                        }
                        (i = h.fromPoints(E, i)), (o = i.center);
                        var T = o.x,
                            A = o.y,
                            S = o.z;
                        return (o.x = S), (o.y = T), (o.z = A), i;
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
            'Core/EllipsoidalOccluder',
            [
                './BoundingSphere',
                './Cartesian3',
                './Check',
                './defaultValue',
                './defined',
                './defineProperties',
                './Rectangle',
            ],
            function (e, t, n, r, i, a, o) {
                'use strict';
                function u(e, n) {
                    (this._ellipsoid = e),
                        (this._cameraPosition = new t()),
                        (this._cameraPositionInScaledSpace = new t()),
                        (this._distanceToLimbInScaledSpaceSquared = 0),
                        i(n) && (this.cameraPosition = n);
                }
                function s(e, n, r) {
                    var i = e.transformPositionToScaledSpace(n, E),
                        a = t.magnitudeSquared(i),
                        o = Math.sqrt(a),
                        u = t.divideByScalar(i, o, m);
                    (a = Math.max(1, a)), (o = Math.max(1, o));
                    var s = t.dot(u, r),
                        c = t.magnitude(t.cross(u, r, u)),
                        l = 1 / o;
                    return 1 / (s * l - c * (Math.sqrt(a - 1) * l));
                }
                function c(e, n, r) {
                    if (!(n <= 0 || n === 1 / 0 || n !== n))
                        return t.multiplyByScalar(e, n, r);
                }
                function l(e, n) {
                    return t.equals(n, t.ZERO)
                        ? n
                        : (e.transformPositionToScaledSpace(n, p),
                          t.normalize(p, p));
                }
                a(u.prototype, {
                    ellipsoid: {
                        get: function () {
                            return this._ellipsoid;
                        },
                    },
                    cameraPosition: {
                        get: function () {
                            return this._cameraPosition;
                        },
                        set: function (e) {
                            var n = this._ellipsoid,
                                r = n.transformPositionToScaledSpace(
                                    e,
                                    this._cameraPositionInScaledSpace,
                                ),
                                i = t.magnitudeSquared(r) - 1;
                            t.clone(e, this._cameraPosition),
                                (this._cameraPositionInScaledSpace = r),
                                (this._distanceToLimbInScaledSpaceSquared = i);
                        },
                    },
                });
                var f = new t();
                (u.prototype.isPointVisible = function (e) {
                    var t = this._ellipsoid,
                        n = t.transformPositionToScaledSpace(e, f);
                    return this.isScaledSpacePointVisible(n);
                }),
                    (u.prototype.isScaledSpacePointVisible = function (e) {
                        var n = this._cameraPositionInScaledSpace,
                            r = this._distanceToLimbInScaledSpaceSquared,
                            i = t.subtract(e, n, f),
                            a = -t.dot(i, n);
                        return !(r < 0
                            ? a > 0
                            : a > r && (a * a) / t.magnitudeSquared(i) > r);
                    }),
                    (u.prototype.computeHorizonCullingPoint = function (
                        e,
                        n,
                        r,
                    ) {
                        i(r) || (r = new t());
                        for (
                            var a = this._ellipsoid,
                                o = l(a, e),
                                u = 0,
                                f = 0,
                                h = n.length;
                            f < h;
                            ++f
                        ) {
                            var d = n[f],
                                E = s(a, d, o);
                            u = Math.max(u, E);
                        }
                        return c(o, u, r);
                    });
                var h = new t();
                u.prototype.computeHorizonCullingPointFromVertices = function (
                    e,
                    n,
                    a,
                    o,
                    u,
                ) {
                    i(u) || (u = new t()), (o = r(o, t.ZERO));
                    for (
                        var f = this._ellipsoid,
                            d = l(f, e),
                            E = 0,
                            m = 0,
                            p = n.length;
                        m < p;
                        m += a
                    ) {
                        (h.x = n[m] + o.x),
                            (h.y = n[m + 1] + o.y),
                            (h.z = n[m + 2] + o.z);
                        var _ = s(f, h, d);
                        E = Math.max(E, _);
                    }
                    return c(d, E, u);
                };
                var d = [];
                u.prototype.computeHorizonCullingPointFromRectangle = function (
                    n,
                    r,
                    i,
                ) {
                    var a = o.subsample(n, r, 0, d),
                        u = e.fromPoints(a);
                    if (!(t.magnitude(u.center) < 0.1 * r.minimumRadius))
                        return this.computeHorizonCullingPoint(u.center, a, i);
                };
                var E = new t(),
                    m = new t(),
                    p = new t();
                return u;
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
            'Core/Intersections2D',
            ['./Cartesian3', './defined', './DeveloperError'],
            function (e, t, n) {
                'use strict';
                var r = {};
                return (
                    (r.clipTriangleAtAxisAlignedThreshold = function (
                        e,
                        n,
                        r,
                        i,
                        a,
                        o,
                    ) {
                        t(o) ? (o.length = 0) : (o = []);
                        var u, s, c;
                        n
                            ? ((u = r < e), (s = i < e), (c = a < e))
                            : ((u = r > e), (s = i > e), (c = a > e));
                        var l,
                            f,
                            h,
                            d,
                            E,
                            m,
                            p = u + s + c;
                        return (
                            1 === p
                                ? u
                                    ? ((l = (e - r) / (i - r)),
                                      (f = (e - r) / (a - r)),
                                      o.push(1),
                                      o.push(2),
                                      1 !== f &&
                                          (o.push(-1),
                                          o.push(0),
                                          o.push(2),
                                          o.push(f)),
                                      1 !== l &&
                                          (o.push(-1),
                                          o.push(0),
                                          o.push(1),
                                          o.push(l)))
                                    : s
                                      ? ((h = (e - i) / (a - i)),
                                        (d = (e - i) / (r - i)),
                                        o.push(2),
                                        o.push(0),
                                        1 !== d &&
                                            (o.push(-1),
                                            o.push(1),
                                            o.push(0),
                                            o.push(d)),
                                        1 !== h &&
                                            (o.push(-1),
                                            o.push(1),
                                            o.push(2),
                                            o.push(h)))
                                      : c &&
                                        ((E = (e - a) / (r - a)),
                                        (m = (e - a) / (i - a)),
                                        o.push(0),
                                        o.push(1),
                                        1 !== m &&
                                            (o.push(-1),
                                            o.push(2),
                                            o.push(1),
                                            o.push(m)),
                                        1 !== E &&
                                            (o.push(-1),
                                            o.push(2),
                                            o.push(0),
                                            o.push(E)))
                                : 2 === p
                                  ? u || r === e
                                      ? s || i === e
                                          ? c ||
                                            a === e ||
                                            ((f = (e - r) / (a - r)),
                                            (h = (e - i) / (a - i)),
                                            o.push(2),
                                            o.push(-1),
                                            o.push(0),
                                            o.push(2),
                                            o.push(f),
                                            o.push(-1),
                                            o.push(1),
                                            o.push(2),
                                            o.push(h))
                                          : ((m = (e - a) / (i - a)),
                                            (l = (e - r) / (i - r)),
                                            o.push(1),
                                            o.push(-1),
                                            o.push(2),
                                            o.push(1),
                                            o.push(m),
                                            o.push(-1),
                                            o.push(0),
                                            o.push(1),
                                            o.push(l))
                                      : ((d = (e - i) / (r - i)),
                                        (E = (e - a) / (r - a)),
                                        o.push(0),
                                        o.push(-1),
                                        o.push(1),
                                        o.push(0),
                                        o.push(d),
                                        o.push(-1),
                                        o.push(2),
                                        o.push(0),
                                        o.push(E))
                                  : 3 !== p &&
                                    (o.push(0), o.push(1), o.push(2)),
                            o
                        );
                    }),
                    (r.computeBarycentricCoordinates = function (
                        n,
                        r,
                        i,
                        a,
                        o,
                        u,
                        s,
                        c,
                        l,
                    ) {
                        var f = i - s,
                            h = s - o,
                            d = u - c,
                            E = a - c,
                            m = 1 / (d * f + h * E),
                            p = r - c,
                            _ = n - s,
                            y = (d * _ + h * p) * m,
                            R = (-E * _ + f * p) * m,
                            T = 1 - y - R;
                        return t(l)
                            ? ((l.x = y), (l.y = R), (l.z = T), l)
                            : new e(y, R, T);
                    }),
                    r
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
                            E = d.x,
                            m = d.y,
                            p = d.z;
                        (i = Math.min(E, i)),
                            (s = Math.max(E, s)),
                            (o = Math.min(m, o)),
                            (c = Math.max(m, c)),
                            (u = Math.min(p, u)),
                            (l = Math.max(p, l));
                    }
                    var _ = n.minimum;
                    (_.x = i), (_.y = o), (_.z = u);
                    var y = n.maximum;
                    (y.x = s), (y.y = c), (y.z = l);
                    var R = e.add(_, y, n.center);
                    return e.multiplyByScalar(R, 0.5, R), n;
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
                        E = o * s - h,
                        m = o * c - u * s,
                        p = u * c - d,
                        _ = 4 * E * p - m * m;
                    if (_ < 0) {
                        var y, R, T;
                        h * f >= l * d
                            ? ((y = o), (R = E), (T = -2 * u * E + o * m))
                            : ((y = c), (R = p), (T = -c * m + 2 * s * p));
                        var A = T < 0 ? -1 : 1,
                            S = -A * Math.abs(y) * Math.sqrt(-_);
                        a = -T + S;
                        var N = a / 2,
                            M =
                                N < 0
                                    ? -Math.pow(-N, 1 / 3)
                                    : Math.pow(N, 1 / 3),
                            O = a === S ? -M : -R / M;
                        return (
                            (i = R <= 0 ? M + O : -T / (M * M + O * O + R)),
                            h * f >= l * d ? [(i - u) / o] : [-c / (i + s)]
                        );
                    }
                    var v = E,
                        I = -2 * u * E + o * m,
                        g = p,
                        w = -c * m + 2 * s * p,
                        C = Math.sqrt(_),
                        x = Math.sqrt(3) / 2,
                        P = Math.abs(Math.atan2(o * C, -I) / 3);
                    i = 2 * Math.sqrt(-v);
                    var U = Math.cos(P);
                    a = i * U;
                    var D = i * (-U / 2 - x * Math.sin(P)),
                        L = a + D > 2 * u ? a - u : D - u,
                        F = o,
                        B = L / F;
                    (P = Math.abs(Math.atan2(c * C, -w) / 3)),
                        (i = 2 * Math.sqrt(-g)),
                        (U = Math.cos(P)),
                        (a = i * U),
                        (D = i * (-U / 2 - x * Math.sin(P)));
                    var b = -c,
                        z = a + D < 2 * s ? a + s : D + s,
                        q = b / z,
                        G = F * z,
                        X = -L * z - F * b,
                        W = L * b,
                        V = (s * X - u * W) / (-u * X + s * G);
                    return B <= V
                        ? B <= q
                            ? V <= q
                                ? [B, V, q]
                                : [B, q, V]
                            : [q, B, V]
                        : B <= q
                          ? [V, B, q]
                          : V <= q
                            ? [V, q, B]
                            : [q, V, B];
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
                            var E = r.computeRealRoots(1, s, l);
                            if (2 === E.length) {
                                var m,
                                    p = E[0],
                                    _ = E[1];
                                if (p >= 0 && _ >= 0) {
                                    var y = Math.sqrt(p),
                                        R = Math.sqrt(_);
                                    return [h - R, h - y, h + y, h + R];
                                }
                                if (p >= 0 && _ < 0)
                                    return (m = Math.sqrt(p)), [h - m, h + m];
                                if (p < 0 && _ >= 0)
                                    return (m = Math.sqrt(_)), [h - m, h + m];
                            }
                            return [];
                        }
                        if (d > 0) {
                            var T = Math.sqrt(d),
                                A = (s + d - c / T) / 2,
                                S = (s + d + c / T) / 2,
                                N = r.computeRealRoots(1, T, A),
                                M = r.computeRealRoots(1, -T, S);
                            return 0 !== N.length
                                ? ((N[0] += h),
                                  (N[1] += h),
                                  0 !== M.length
                                      ? ((M[0] += h),
                                        (M[1] += h),
                                        N[1] <= M[0]
                                            ? [N[0], N[1], M[0], M[1]]
                                            : M[1] <= N[0]
                                              ? [M[0], M[1], N[0], N[1]]
                                              : N[0] >= M[0] && N[1] <= M[1]
                                                ? [M[0], N[0], N[1], M[1]]
                                                : M[0] >= N[0] && M[1] <= N[1]
                                                  ? [N[0], M[0], M[1], N[1]]
                                                  : N[0] > M[0] && N[0] < M[1]
                                                    ? [M[0], N[0], M[1], N[1]]
                                                    : [N[0], M[0], N[1], M[1]])
                                      : N)
                                : 0 !== M.length
                                  ? ((M[0] += h), (M[1] += h), M)
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
                        var E,
                            m,
                            p = d[0],
                            _ = i - p,
                            y = _ * _,
                            R = t / 2,
                            T = _ / 2,
                            A = y - 4 * o,
                            S = y + 4 * Math.abs(o),
                            N = c - 4 * p,
                            M = c + 4 * Math.abs(p);
                        if (p < 0 || A * M < N * S) {
                            var O = Math.sqrt(N);
                            (E = O / 2), (m = 0 === O ? 0 : (t * T - a) / O);
                        } else {
                            var v = Math.sqrt(A);
                            (E = 0 === v ? 0 : (t * T - a) / v), (m = v / 2);
                        }
                        var I, g;
                        0 === R && 0 === E
                            ? ((I = 0), (g = 0))
                            : n.sign(R) === n.sign(E)
                              ? ((I = R + E), (g = p / I))
                              : ((g = R - E), (I = p / g));
                        var w, C;
                        0 === T && 0 === m
                            ? ((w = 0), (C = 0))
                            : n.sign(T) === n.sign(m)
                              ? ((w = T + m), (C = o / w))
                              : ((C = T - m), (w = o / C));
                        var x = r.computeRealRoots(1, I, w),
                            P = r.computeRealRoots(1, g, C);
                        if (0 !== x.length)
                            return 0 !== P.length
                                ? x[1] <= P[0]
                                    ? [x[0], x[1], P[0], P[1]]
                                    : P[1] <= x[0]
                                      ? [P[0], P[1], x[0], x[1]]
                                      : x[0] >= P[0] && x[1] <= P[1]
                                        ? [P[0], x[0], x[1], P[1]]
                                        : P[0] >= x[0] && P[1] <= x[1]
                                          ? [x[0], P[0], P[1], x[1]]
                                          : x[0] > P[0] && x[0] < P[1]
                                            ? [P[0], x[0], P[1], x[1]]
                                            : [x[0], P[0], x[1], P[1]]
                                : x;
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
                        l = e.subtract(o, s, y),
                        h = e.dot(u, u),
                        d = 2 * e.dot(u, l),
                        E = e.magnitudeSquared(l) - c,
                        m = f(h, d, E, S);
                    if (r(m)) return (i.start = m.root0), (i.stop = m.root1), i;
                }
                function d(e, t, n) {
                    var r = e + t;
                    return o.sign(e) !== o.sign(t) &&
                        Math.abs(r / Math.max(Math.abs(e), Math.abs(t))) < n
                        ? 0
                        : r;
                }
                function E(t, n, r, i, a) {
                    var l,
                        f = i * i,
                        h = a * a,
                        E = (t[u.COLUMN1ROW1] - t[u.COLUMN2ROW2]) * h,
                        m =
                            a *
                            (i *
                                d(
                                    t[u.COLUMN1ROW0],
                                    t[u.COLUMN0ROW1],
                                    o.EPSILON15,
                                ) +
                                n.y),
                        p =
                            t[u.COLUMN0ROW0] * f +
                            t[u.COLUMN2ROW2] * h +
                            i * n.x +
                            r,
                        _ =
                            h *
                            d(t[u.COLUMN2ROW1], t[u.COLUMN1ROW2], o.EPSILON15),
                        y =
                            a *
                            (i * d(t[u.COLUMN2ROW0], t[u.COLUMN0ROW2]) + n.z),
                        R = [];
                    if (0 === y && 0 === _) {
                        if (((l = s.computeRealRoots(E, m, p)), 0 === l.length))
                            return R;
                        var T = l[0],
                            A = Math.sqrt(Math.max(1 - T * T, 0));
                        if (
                            (R.push(new e(i, a * T, a * -A)),
                            R.push(new e(i, a * T, a * A)),
                            2 === l.length)
                        ) {
                            var S = l[1],
                                N = Math.sqrt(Math.max(1 - S * S, 0));
                            R.push(new e(i, a * S, a * -N)),
                                R.push(new e(i, a * S, a * N));
                        }
                        return R;
                    }
                    var M = y * y,
                        O = _ * _,
                        v = E * E,
                        I = y * _,
                        g = v + O,
                        w = 2 * (m * E + I),
                        C = 2 * p * E + m * m - O + M,
                        x = 2 * (p * m - I),
                        P = p * p - M;
                    if (0 === g && 0 === w && 0 === C && 0 === x) return R;
                    l = c.computeRealRoots(g, w, C, x, P);
                    var U = l.length;
                    if (0 === U) return R;
                    for (var D = 0; D < U; ++D) {
                        var L,
                            F = l[D],
                            B = F * F,
                            b = Math.max(1 - B, 0),
                            z = Math.sqrt(b);
                        L =
                            o.sign(E) === o.sign(p)
                                ? d(E * B + p, m * F, o.EPSILON12)
                                : o.sign(p) === o.sign(m * F)
                                  ? d(E * B, m * F + p, o.EPSILON12)
                                  : d(E * B + m * F, p, o.EPSILON12);
                        var q = d(_ * F, y, o.EPSILON15),
                            G = L * q;
                        G < 0
                            ? R.push(new e(i, a * F, a * z))
                            : G > 0
                              ? R.push(new e(i, a * F, a * -z))
                              : 0 !== z
                                ? (R.push(new e(i, a * F, a * -z)),
                                  R.push(new e(i, a * F, a * z)),
                                  ++D)
                                : R.push(new e(i, a * F, a * z));
                    }
                    return R;
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
                var p = new e(),
                    _ = new e(),
                    y = new e(),
                    R = new e(),
                    T = new e();
                (m.rayTriangleParametric = function (t, r, i, a, u) {
                    u = n(u, !1);
                    var s,
                        c,
                        l,
                        f,
                        h,
                        d = t.origin,
                        E = t.direction,
                        m = e.subtract(i, r, p),
                        A = e.subtract(a, r, _),
                        S = e.cross(E, A, y),
                        N = e.dot(m, S);
                    if (u) {
                        if (N < o.EPSILON6) return;
                        if (
                            ((s = e.subtract(d, r, R)),
                            (l = e.dot(s, S)) < 0 || l > N)
                        )
                            return;
                        if (
                            ((c = e.cross(s, m, T)),
                            (f = e.dot(E, c)) < 0 || l + f > N)
                        )
                            return;
                        h = e.dot(A, c) / N;
                    } else {
                        if (Math.abs(N) < o.EPSILON6) return;
                        var M = 1 / N;
                        if (
                            ((s = e.subtract(d, r, R)),
                            (l = e.dot(s, S) * M) < 0 || l > 1)
                        )
                            return;
                        if (
                            ((c = e.cross(s, m, T)),
                            (f = e.dot(E, c) * M) < 0 || l + f > 1)
                        )
                            return;
                        h = e.dot(A, c) * M;
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
                var A = new l();
                m.lineSegmentTriangle = function (t, n, i, a, o, u, s) {
                    var c = A;
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
                var S = { root0: 0, root1: 0 };
                m.raySphere = function (e, t, n) {
                    if (((n = h(e, t, n)), r(n) && !(n.stop < 0)))
                        return (n.start = Math.max(n.start, 0)), n;
                };
                var N = new l();
                m.lineSegmentSphere = function (t, n, i, a) {
                    var o = N;
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
                var M = new e(),
                    O = new e();
                m.rayEllipsoid = function (t, n) {
                    var r,
                        i,
                        o,
                        u,
                        s,
                        c = n.oneOverRadii,
                        l = e.multiplyComponents(c, t.origin, M),
                        f = e.multiplyComponents(c, t.direction, O),
                        h = e.magnitudeSquared(l),
                        d = e.dot(l, f);
                    if (h > 1) {
                        if (d >= 0) return;
                        var E = d * d;
                        if (
                            ((r = h - 1),
                            (i = e.magnitudeSquared(f)),
                            (o = i * r),
                            E < o)
                        )
                            return;
                        if (E > o) {
                            (u = d * d - o), (s = -d + Math.sqrt(u));
                            var m = s / i,
                                p = r / s;
                            return m < p ? new a(m, p) : { start: p, stop: m };
                        }
                        var _ = Math.sqrt(r / i);
                        return new a(_, _);
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
                var v = new e(),
                    I = new e(),
                    g = new e(),
                    w = new e(),
                    C = new e(),
                    x = new u(),
                    P = new u(),
                    U = new u(),
                    D = new u(),
                    L = new u(),
                    F = new u(),
                    B = new u(),
                    b = new e(),
                    z = new e(),
                    q = new t();
                m.grazingAltitudeLocation = function (t, n) {
                    var i = t.origin,
                        a = t.direction;
                    if (!e.equals(i, e.ZERO)) {
                        var s = n.geodeticSurfaceNormal(i, v);
                        if (e.dot(a, s) >= 0) return i;
                    }
                    var c = r(this.rayEllipsoid(t, n)),
                        l = n.transformPositionToScaledSpace(a, v),
                        f = e.normalize(l, l),
                        h = e.mostOrthogonalAxis(l, w),
                        d = e.normalize(e.cross(h, f, I), I),
                        m = e.normalize(e.cross(f, d, g), g),
                        p = x;
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
                        y = u.fromScale(n.radii, U),
                        R = u.fromScale(n.oneOverRadii, D),
                        T = L;
                    (T[0] = 0),
                        (T[1] = -a.z),
                        (T[2] = a.y),
                        (T[3] = a.z),
                        (T[4] = 0),
                        (T[5] = -a.x),
                        (T[6] = -a.y),
                        (T[7] = a.x),
                        (T[8] = 0);
                    var A,
                        S,
                        N = u.multiply(u.multiply(_, R, F), T, F),
                        M = u.multiply(u.multiply(N, y, B), p, B),
                        O = u.multiplyByVector(N, i, C),
                        G = E(M, e.negate(O, v), 0, 0, 1),
                        X = G.length;
                    if (X > 0) {
                        for (
                            var W = e.clone(e.ZERO, z),
                                V = Number.NEGATIVE_INFINITY,
                                H = 0;
                            H < X;
                            ++H
                        ) {
                            A = u.multiplyByVector(
                                y,
                                u.multiplyByVector(p, G[H], b),
                                b,
                            );
                            var Y = e.normalize(e.subtract(A, i, w), w),
                                k = e.dot(Y, a);
                            k > V && ((V = k), (W = e.clone(A, W)));
                        }
                        var Z = n.cartesianToCartographic(W, q);
                        return (
                            (V = o.clamp(V, 0, 1)),
                            (S =
                                e.magnitude(e.subtract(W, i, w)) *
                                Math.sqrt(1 - V * V)),
                            (S = c ? -S : S),
                            (Z.height = S),
                            n.cartographicToCartesian(Z, new e())
                        );
                    }
                };
                var G = new e();
                return (
                    (m.lineSegmentPlane = function (t, n, i, a) {
                        r(a) || (a = new e());
                        var u = e.subtract(n, t, G),
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
                        return E(e);
                    }
                    function i(e) {
                        return E(a(e));
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
                function s(t, n, r, i, a) {
                    return (
                        p(2, arguments),
                        e(t, function (t) {
                            function u(e) {
                                m(e);
                            }
                            function s(e) {
                                E(e);
                            }
                            var c, l, f, h, d, E, m, p, y, R;
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
                                        R = 0;
                                    R < y;
                                    ++R
                                )
                                    R in t && e(t[R], s, u, p);
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
                    return p(1, arguments), h(e, y).then(t, n, r);
                }
                function f() {
                    return h(arguments, y);
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
                            R.apply(t, r)
                        );
                    });
                }
                function E(t, n, r) {
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
                function p(e, t) {
                    for (var n, r = t.length; r > e; )
                        if (null != (n = t[--r]) && 'function' != typeof n)
                            throw new Error('arg ' + r + ' must be a function');
                }
                function _() {}
                function y(e) {
                    return e;
                }
                var R, T, A;
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
                    (T = [].slice),
                    (R =
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
                        var d, E, m, p, _;
                        if ('%%' == e) return '%';
                        for (
                            var y = !1,
                                R = '',
                                T = !1,
                                A = !1,
                                S = ' ',
                                N = s.length,
                                M = 0;
                            s && M < N;
                            M++
                        )
                            switch (s.charAt(M)) {
                                case ' ':
                                    R = ' ';
                                    break;
                                case '+':
                                    R = '+';
                                    break;
                                case '-':
                                    y = !0;
                                    break;
                                case "'":
                                    S = s.charAt(M + 1);
                                    break;
                                case '0':
                                    T = !0;
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
                                return u(String(_), y, c, f, T, S);
                            case 'c':
                                return u(String.fromCharCode(+_), y, c, f, T);
                            case 'b':
                                return o(_, 2, A, y, c, f, T);
                            case 'o':
                                return o(_, 8, A, y, c, f, T);
                            case 'x':
                                return o(_, 16, A, y, c, f, T);
                            case 'X':
                                return o(_, 16, A, y, c, f, T).toUpperCase();
                            case 'u':
                                return o(_, 10, A, y, c, f, T);
                            case 'i':
                            case 'd':
                                return (
                                    (d = +_ || 0),
                                    (d = Math.round(d - (d % 1))),
                                    (E = d < 0 ? '-' : R),
                                    (_ =
                                        E + i(String(Math.abs(d)), f, '0', !1)),
                                    a(_, E, y, c, T)
                                );
                            case 'e':
                            case 'E':
                            case 'f':
                            case 'F':
                            case 'g':
                            case 'G':
                                return (
                                    (d = +_),
                                    (E = d < 0 ? '-' : R),
                                    (m = [
                                        'toExponential',
                                        'toFixed',
                                        'toPrecision',
                                    ]['efg'.indexOf(h.toLowerCase())]),
                                    (p = ['toString', 'toUpperCase'][
                                        'eEfFgG'.indexOf(h) % 2
                                    ]),
                                    (_ = E + Math.abs(d)[m](f)),
                                    a(_, E, y, c, T)[p]()
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
                    y.julianDate = e;
                    var n = m.leapSeconds,
                        r = t(n, y, l);
                    r < 0 && (r = ~r), r >= n.length && (r = n.length - 1);
                    var i = n[r].offset;
                    if (r > 0) {
                        m.secondsDifference(n[r].julianDate, e) > i &&
                            (r--, (i = n[r].offset));
                    }
                    m.addSeconds(e, i, e);
                }
                function h(e, n) {
                    y.julianDate = e;
                    var r = m.leapSeconds,
                        i = t(r, y, l);
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
                function E(e, t, n, r, i, a, o) {
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
                var p = new a(),
                    _ = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                    y = new u(),
                    R = /^(\d{4})$/,
                    T = /^(\d{4})-(\d{2})$/,
                    A = /^(\d{4})-?(\d{3})$/,
                    S = /^(\d{4})-?W(\d{2})-?(\d{1})?$/,
                    N = /^(\d{4})-?(\d{2})-?(\d{2})$/,
                    M = /([Z+\-])?(\d{2})?:?(\d{2})?$/,
                    O = /^(\d{2})(\.\d+)?/.source + M.source,
                    v = /^(\d{2}):?(\d{2})(\.\d+)?/.source + M.source,
                    I = /^(\d{2}):?(\d{2}):?(\d{2})(\.\d+)?/.source + M.source;
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
                            i,
                            a,
                            u = e.split('T'),
                            s = 1,
                            l = 1,
                            h = 0,
                            p = 0,
                            y = 0,
                            M = 0,
                            g = u[0],
                            w = u[1];
                        if (null !== (u = g.match(N)))
                            (n = +u[1]), (s = +u[2]), (l = +u[3]);
                        else if (null !== (u = g.match(T)))
                            (n = +u[1]), (s = +u[2]);
                        else if (null !== (u = g.match(R))) n = +u[1];
                        else {
                            var C;
                            if (null !== (u = g.match(A)))
                                (n = +u[1]), (C = +u[2]), (a = o(n));
                            else if (null !== (u = g.match(S))) {
                                n = +u[1];
                                var x = +u[2],
                                    P = +u[3] || 0,
                                    U = new Date(Date.UTC(n, 0, 4));
                                C = 7 * x + P - U.getUTCDay() - 3;
                            }
                            (i = new Date(Date.UTC(n, 0, 1))),
                                i.setUTCDate(C),
                                (s = i.getUTCMonth() + 1),
                                (l = i.getUTCDate());
                        }
                        a = o(n);
                        var D;
                        if (r(w)) {
                            (u = w.match(I)),
                                null !== u
                                    ? ((h = +u[1]),
                                      (p = +u[2]),
                                      (y = +u[3]),
                                      (M = 1e3 * +(u[4] || 0)),
                                      (D = 5))
                                    : ((u = w.match(v)),
                                      null !== u
                                          ? ((h = +u[1]),
                                            (p = +u[2]),
                                            (y = 60 * +(u[3] || 0)),
                                            (D = 4))
                                          : null !== (u = w.match(O)) &&
                                            ((h = +u[1]),
                                            (p = 60 * +(u[2] || 0)),
                                            (D = 3)));
                            var L = u[D],
                                F = +u[D + 1],
                                B = +(u[D + 2] || 0);
                            switch (L) {
                                case '+':
                                    (h -= F), (p -= B);
                                    break;
                                case '-':
                                    (h += F), (p += B);
                                    break;
                                case 'Z':
                                    break;
                                default:
                                    p += new Date(
                                        Date.UTC(n, s - 1, l, h, p),
                                    ).getTimezoneOffset();
                            }
                        }
                        var b = 60 === y;
                        for (b && y--; p >= 60; ) (p -= 60), h++;
                        for (; h >= 24; ) (h -= 24), l++;
                        for (i = a && 2 === s ? 29 : _[s - 1]; l > i; )
                            (l -= i),
                                s++,
                                s > 12 && ((s -= 12), n++),
                                (i = a && 2 === s ? 29 : _[s - 1]);
                        for (; p < 0; ) (p += 60), h--;
                        for (; h < 0; ) (h += 24), l--;
                        for (; l < 1; )
                            s--,
                                s < 1 && ((s += 12), n--),
                                (i = a && 2 === s ? 29 : _[s - 1]),
                                (l += i);
                        var z = E(n, s, l, h, p, y, M);
                        return (
                            r(t)
                                ? (d(z[0], z[1], t), f(t))
                                : (t = new m(z[0], z[1], c.UTC)),
                            b && m.addSeconds(t, 1, t),
                            t
                        );
                    }),
                    (m.now = function (e) {
                        return m.fromDate(new Date(), e);
                    });
                var g = new m(0, 0, c.TAI);
                return (
                    (m.toGregorianDate = function (e, t) {
                        var n = !1,
                            i = h(e, g);
                        r(i) ||
                            (m.addSeconds(e, -1, g), (i = h(g, g)), (n = !0));
                        var o = i.dayNumber,
                            u = i.secondsOfDay;
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
                            R = u - y * s.SECONDS_PER_HOUR,
                            T = (R / s.SECONDS_PER_MINUTE) | 0;
                        R -= T * s.SECONDS_PER_MINUTE;
                        var A = 0 | R,
                            S = (R - A) / s.SECONDS_PER_MILLISECOND;
                        return (
                            (y += 12),
                            y > 23 && (y -= 24),
                            n && (A += 1),
                            r(t)
                                ? ((t.year = _),
                                  (t.month = p),
                                  (t.day = E),
                                  (t.hour = y),
                                  (t.minute = T),
                                  (t.second = A),
                                  (t.millisecond = S),
                                  (t.isLeapSecond = n),
                                  t)
                                : new a(_, p, E, y, T, A, S, n)
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
                        var i,
                            a = m.toGregorianDate(t, p);
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
                    return O[e] < f.maximumRequestsPerServer;
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
                            --O[e.serverKey],
                            (e.state = c.RECEIVED),
                            e.deferred.resolve(t));
                    };
                }
                function p(e) {
                    return function (t) {
                        e.state !== c.CANCELLED &&
                            (++A.numberOfFailedRequests,
                            --A.numberOfActiveRequests,
                            --O[e.serverKey],
                            (e.state = c.FAILED),
                            e.deferred.reject(t));
                    };
                }
                function _(e) {
                    var t = E(e);
                    return (
                        (e.state = c.ACTIVE),
                        M.push(e),
                        ++A.numberOfActiveRequests,
                        ++A.numberOfActiveRequestsEver,
                        ++O[e.serverKey],
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
                            --O[e.serverKey],
                            ++A.numberOfCancelledActiveRequests),
                        i(e.cancelFunction) && e.cancelFunction();
                }
                function R() {
                    (A.numberOfAttemptedRequests = 0),
                        (A.numberOfCancelledRequests = 0),
                        (A.numberOfCancelledActiveRequests = 0);
                }
                function T() {
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
                        R());
                }
                var A = {
                        numberOfAttemptedRequests: 0,
                        numberOfActiveRequests: 0,
                        numberOfCancelledRequests: 0,
                        numberOfCancelledActiveRequests: 0,
                        numberOfFailedRequests: 0,
                        numberOfActiveRequestsEver: 0,
                    },
                    S = 20,
                    N = new o({ comparator: l });
                (N.maximumLength = S), N.reserve(S);
                var M = [],
                    O = {},
                    v =
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
                                return A;
                            },
                        },
                        priorityHeapLength: {
                            get: function () {
                                return S;
                            },
                            set: function (e) {
                                if (e < S)
                                    for (; N.length > e; ) {
                                        var t = N.pop();
                                        y(t);
                                    }
                                (S = e), (N.maximumLength = e), N.reserve(e);
                            },
                        },
                    }),
                    (f.update = function () {
                        var e,
                            t,
                            n = 0,
                            r = M.length;
                        for (e = 0; e < r; ++e)
                            (t = M[e]),
                                t.cancelled && y(t),
                                t.state === c.ACTIVE
                                    ? n > 0 && (M[e - n] = t)
                                    : ++n;
                        M.length -= n;
                        var i = N.internalArray,
                            a = N.length;
                        for (e = 0; e < a; ++e) h(i[e]);
                        N.resort();
                        for (
                            var o = Math.max(f.maximumRequests - M.length, 0),
                                u = 0;
                            u < o && N.length > 0;

                        )
                            (t = N.pop()),
                                t.cancelled
                                    ? y(t)
                                    : !t.throttleByServer || d(t.serverKey)
                                      ? (_(t), ++u)
                                      : y(t);
                        T();
                    }),
                    (f.getServerKey = function (t) {
                        var n = new e(t).resolve(v);
                        n.normalize();
                        var r = n.authority;
                        /:/.test(r) ||
                            (r =
                                r +
                                ':' +
                                ('https' === n.scheme ? '443' : '80'));
                        var a = O[r];
                        return i(a) || (O[r] = 0), r;
                    }),
                    (f.request = function (e) {
                        if (s(e.url) || u(e.url))
                            return (e.state = c.RECEIVED), e.requestFunction();
                        if (
                            (++A.numberOfAttemptedRequests,
                            i(e.serverKey) ||
                                (e.serverKey = f.getServerKey(e.url)),
                            !f.throttleRequests || !e.throttle)
                        )
                            return _(e);
                        if (
                            !(M.length >= f.maximumRequests) &&
                            (!e.throttleByServer || d(e.serverKey))
                        ) {
                            h(e);
                            var t = N.insert(e);
                            if (i(t)) {
                                if (t === e) return;
                                y(t);
                            }
                            return E(e);
                        }
                    }),
                    (f.clearForSpecs = function () {
                        for (; N.length > 0; ) {
                            y(N.pop());
                        }
                        for (var e = M.length, t = 0; t < e; ++t) y(M[t]);
                        (M.length = 0),
                            (O = {}),
                            (A.numberOfAttemptedRequests = 0),
                            (A.numberOfActiveRequests = 0),
                            (A.numberOfCancelledRequests = 0),
                            (A.numberOfCancelledActiveRequests = 0),
                            (A.numberOfFailedRequests = 0),
                            (A.numberOfActiveRequestsEver = 0);
                    }),
                    (f.numberOfActiveRequestsByServer = function (e) {
                        return O[e];
                    }),
                    (f.requestHeap = N),
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
                var E = /^data:(.*?)(;base64)?,(.*)$/;
                return (
                    (l.load = function (e, t, n, i, a, u, l) {
                        var f = E.exec(e);
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
                        E(this, t.data);
                    else if (r(t.url)) {
                        var i = this;
                        this._downloadPromise = e(
                            s(t.url),
                            function (e) {
                                E(i, e);
                            },
                            function () {
                                i._dataError =
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
                    var i = n.columnNames.indexOf('modifiedJulianDateUtc'),
                        a = n.columnNames.indexOf('xPoleWanderRadians'),
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
                        i < 0 ||
                        a < 0 ||
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
                    (e._dateColumn = i),
                        (e._xPoleWanderRadiansColumn = a),
                        (e._yPoleWanderRadiansColumn = s),
                        (e._ut1MinusUtcSecondsColumn = c),
                        (e._xCelestialPoleOffsetRadiansColumn = h),
                        (e._yCelestialPoleOffsetRadiansColumn = E),
                        (e._taiMinusUtcSecondsColumn = m),
                        (e._columnCount = n.columnNames.length),
                        (e._lastIndex = void 0);
                    for (
                        var y, R = e._addNewLeapSeconds, T = 0, A = p.length;
                        T < A;
                        T += e._columnCount
                    ) {
                        var S = p[T + i],
                            N = p[T + m],
                            M = S + l.MODIFIED_JULIAN_DATE_DIFFERENCE,
                            O = new o(M, N, f.TAI);
                        if ((_.push(O), R)) {
                            if (N !== y && r(y)) {
                                var v = o.leapSeconds,
                                    I = t(v, O, d);
                                if (I < 0) {
                                    var g = new u(O, N);
                                    v.splice(~I, 0, g);
                                }
                            }
                            y = N;
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
                function p(e, t, n) {
                    return t + e * (n - t);
                }
                function _(e, t, n, r, i, a, u) {
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
                        E = n[h + e._ut1MinusUtcSecondsColumn],
                        _ = n[d + e._ut1MinusUtcSecondsColumn],
                        y = _ - E;
                    if (y > 0.5 || y < -0.5) {
                        var R = n[h + e._taiMinusUtcSecondsColumn],
                            T = n[d + e._taiMinusUtcSecondsColumn];
                        R !== T && (l.equals(r) ? (E = _) : (_ -= T - R));
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
                                    E = !r(h),
                                    m = E || o.greaterThanOrEquals(h, e);
                                if (d && m)
                                    return (
                                        (s = u),
                                        !E && h.equals(e) && ++s,
                                        (l = s + 1),
                                        _(this, a, this._samples, e, s, l, n),
                                        n
                                    );
                            }
                            var p = t(a, e, o.compare, this._dateColumn);
                            return (
                                p >= 0
                                    ? (p < a.length - 1 &&
                                          a[p + 1].equals(e) &&
                                          ++p,
                                      (s = p),
                                      (l = p))
                                    : ((l = ~p), (s = l - 1) < 0 && (s = 0)),
                                (this._lastIndex = s),
                                _(this, a, this._samples, e, s, l, n),
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
                            i = E.exec(r);
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
                                E = f;
                            E <= h;
                            ++E
                        )
                            d.push(l(this, E));
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
                                    var E,
                                        m,
                                        p = a - s * this._stepSizeDays,
                                        _ = this._work,
                                        y = this._denominators,
                                        R = this._coef,
                                        T = this._xTable;
                                    for (E = 0; E <= u; ++E) _[E] = p - T[E];
                                    for (E = 0; E <= u; ++E) {
                                        for (R[E] = 1, m = 0; m <= u; ++m)
                                            m !== E && (R[E] *= _[m]);
                                        R[E] *= y[E];
                                        var A = 3 * (s + E);
                                        (n.x += R[E] * d[A++]),
                                            (n.y += R[E] * d[A++]),
                                            (n.s += R[E] * d[A]);
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
                    if (!t(A) && ((A = !1), !h())) {
                        var e = / Chrome\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((A = !0), (S = r(e[1])));
                    }
                    return A;
                }
                function a() {
                    return i() && S;
                }
                function o() {
                    if (
                        !t(N) &&
                        ((N = !1),
                        !i() && !h() && / Safari\/[\.0-9]+/.test(T.userAgent))
                    ) {
                        var e = / Version\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((N = !0), (M = r(e[1])));
                    }
                    return N;
                }
                function u() {
                    return o() && M;
                }
                function s() {
                    if (!t(O)) {
                        O = !1;
                        var e = / AppleWebKit\/([\.0-9]+)(\+?)/.exec(
                            T.userAgent,
                        );
                        null !== e &&
                            ((O = !0), (v = r(e[1])), (v.isNightly = !!e[2]));
                    }
                    return O;
                }
                function c() {
                    return s() && v;
                }
                function l() {
                    if (!t(I)) {
                        I = !1;
                        var e;
                        'Microsoft Internet Explorer' === T.appName
                            ? null !==
                                  (e = /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(
                                      T.userAgent,
                                  )) && ((I = !0), (g = r(e[1])))
                            : 'Netscape' === T.appName &&
                              null !==
                                  (e =
                                      /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(
                                          T.userAgent,
                                      )) &&
                              ((I = !0), (g = r(e[1])));
                    }
                    return I;
                }
                function f() {
                    return l() && g;
                }
                function h() {
                    if (!t(w)) {
                        w = !1;
                        var e = / Edge\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((w = !0), (C = r(e[1])));
                    }
                    return w;
                }
                function d() {
                    return h() && C;
                }
                function E() {
                    if (!t(x)) {
                        x = !1;
                        var e = /Firefox\/([\.0-9]+)/.exec(T.userAgent);
                        null !== e && ((x = !0), (P = r(e[1])));
                    }
                    return x;
                }
                function m() {
                    return t(U) || (U = /Windows/i.test(T.appVersion)), U;
                }
                function p() {
                    return E() && P;
                }
                function _() {
                    return (
                        t(D) ||
                            (D =
                                'undefined' != typeof PointerEvent &&
                                (!t(T.pointerEnabled) || T.pointerEnabled)),
                        D
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
                function R() {
                    return y() ? L : void 0;
                }
                var T;
                T = 'undefined' != typeof navigator ? navigator : {};
                var A,
                    S,
                    N,
                    M,
                    O,
                    v,
                    I,
                    g,
                    w,
                    C,
                    x,
                    P,
                    U,
                    D,
                    L,
                    F,
                    B = {
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
                        isFirefox: E,
                        firefoxVersion: p,
                        isWindows: m,
                        hardwareConcurrency: e(T.hardwareConcurrency, 3),
                        supportsPointerEvents: _,
                        supportsImageRenderingPixelated: y,
                        imageRenderingValue: R,
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
                        E = e[s.COLUMN2ROW2],
                        m = l + d + E;
                    if (m > 0)
                        (n = Math.sqrt(m + 1)),
                            (u = 0.5 * n),
                            (n = 0.5 / n),
                            (i = (e[s.COLUMN1ROW2] - e[s.COLUMN2ROW1]) * n),
                            (a = (e[s.COLUMN2ROW0] - e[s.COLUMN0ROW2]) * n),
                            (o = (e[s.COLUMN0ROW1] - e[s.COLUMN1ROW0]) * n);
                    else {
                        var p = f,
                            _ = 0;
                        d > l && (_ = 1), E > l && E > d && (_ = 2);
                        var y = p[_],
                            R = p[y];
                        n = Math.sqrt(
                            e[s.getElementIndex(_, _)] -
                                e[s.getElementIndex(y, y)] -
                                e[s.getElementIndex(R, R)] +
                                1,
                        );
                        var T = h;
                        (T[_] = 0.5 * n),
                            (n = 0.5 / n),
                            (u =
                                (e[s.getElementIndex(R, y)] -
                                    e[s.getElementIndex(y, R)]) *
                                n),
                            (T[y] =
                                (e[s.getElementIndex(y, _)] +
                                    e[s.getElementIndex(_, y)]) *
                                n),
                            (T[R] =
                                (e[s.getElementIndex(R, _)] +
                                    e[s.getElementIndex(_, R)]) *
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
                    R = new c(),
                    T = new c(),
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
                        c.unpack(e, 4 * n, A), c.conjugate(A, A);
                        for (var i = 0, a = n - t + 1; i < a; i++) {
                            var o = 3 * i;
                            c.unpack(e, 4 * (t + i), R),
                                c.multiply(R, A, R),
                                R.w < 0 && c.negate(R, R),
                                c.computeAxis(R, _);
                            var u = c.computeAngle(R);
                            (r[o] = _.x * u),
                                (r[o + 1] = _.y * u),
                                (r[o + 2] = _.z * u);
                        }
                    }),
                    (c.unpackInterpolationResult = function (t, n, i, a, o) {
                        r(o) || (o = new c()), e.fromArray(t, 0, y);
                        var u = e.magnitude(y);
                        return (
                            c.unpack(n, 4 * a, T),
                            0 === u
                                ? c.clone(c.IDENTITY, R)
                                : c.fromAxisAngle(y, u, R),
                            c.multiply(R, T, o)
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
                            E = o * l - r * u - i * s - a * c;
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
                var S = new c();
                c.lerp = function (e, t, n, r) {
                    return (
                        (S = c.multiplyByScalar(t, n, S)),
                        (r = c.multiplyByScalar(e, 1 - n, r)),
                        c.add(S, r, r)
                    );
                };
                var N = new c(),
                    M = new c(),
                    O = new c();
                (c.slerp = function (e, t, n, r) {
                    var i = c.dot(e, t),
                        a = t;
                    if (
                        (i < 0 && ((i = -i), (a = N = c.negate(t, N))),
                        1 - i < u.EPSILON6)
                    )
                        return c.lerp(e, a, n, r);
                    var o = Math.acos(i);
                    return (
                        (M = c.multiplyByScalar(e, Math.sin((1 - n) * o), M)),
                        (O = c.multiplyByScalar(a, Math.sin(n * o), O)),
                        (r = c.add(M, O, r)),
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
                var v = new e(),
                    I = new e(),
                    g = new c(),
                    w = new c();
                (c.computeInnerQuadrangle = function (t, n, r, i) {
                    var a = c.conjugate(n, g);
                    c.multiply(a, r, w);
                    var o = c.log(w, v);
                    c.multiply(a, t, w);
                    var u = c.log(w, I);
                    return (
                        e.add(o, u, o),
                        e.multiplyByScalar(o, 0.25, o),
                        e.negate(o, o),
                        c.exp(o, g),
                        c.multiply(n, g, i)
                    );
                }),
                    (c.squad = function (e, t, n, r, i, a) {
                        var o = c.slerp(e, t, i, g),
                            u = c.slerp(n, r, i, w);
                        return c.slerp(o, u, 2 * i * (1 - i), a);
                    });
                for (
                    var C = new c(),
                        x = 1.9011074535173003,
                        P = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        U = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        D = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        L = i.supportsTypedArrays() ? new Float32Array(8) : [],
                        F = 0;
                    F < 7;
                    ++F
                ) {
                    var B = F + 1,
                        b = 2 * B + 1;
                    (P[F] = 1 / (B * b)), (U[F] = B / b);
                }
                return (
                    (P[7] = x / 136),
                    (U[7] = (8 * x) / 17),
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
                            (D[f] = (P[f] * s - U[f]) * o),
                                (L[f] = (P[f] * l - U[f]) * o);
                        var h =
                                i *
                                n *
                                (1 +
                                    D[0] *
                                        (1 +
                                            D[1] *
                                                (1 +
                                                    D[2] *
                                                        (1 +
                                                            D[3] *
                                                                (1 +
                                                                    D[4] *
                                                                        (1 +
                                                                            D[5] *
                                                                                (1 +
                                                                                    D[6] *
                                                                                        (1 +
                                                                                            D[7])))))))),
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
                            E = c.multiplyByScalar(e, d, C);
                        return c.multiplyByScalar(t, h, r), c.add(E, r, r);
                    }),
                    (c.fastSquad = function (e, t, n, r, i, a) {
                        var o = c.fastSlerp(e, t, i, g),
                            u = c.fastSlerp(n, r, i, w);
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
                E,
                m,
                p,
                _,
                y,
                R,
            ) {
                'use strict';
                var T = {},
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
                    S = {
                        north: [-1, 0, 0],
                        east: [0, 1, 0],
                        up: [0, 0, 1],
                        south: [1, 0, 0],
                        west: [0, -1, 0],
                        down: [0, 0, -1],
                    },
                    N = {},
                    M = {
                        east: new n(),
                        north: new n(),
                        up: new n(),
                        west: new n(),
                        south: new n(),
                        down: new n(),
                    },
                    O = new n(),
                    v = new n(),
                    I = new n();
                (T.localFrameToFixedFrameGenerator = function (e, t) {
                    if (!A.hasOwnProperty(e) || !A[e].hasOwnProperty(t))
                        throw new s(
                            'firstAxis and secondAxis must be east, north, up, west, south or down.',
                        );
                    var r,
                        i = A[e][t],
                        a = e + t;
                    return (
                        u(N[a])
                            ? (r = N[a])
                            : ((r = function (r, a, s) {
                                  if (
                                      (u(s) || (s = new _()),
                                      m.equalsEpsilon(r.x, 0, m.EPSILON14) &&
                                          m.equalsEpsilon(r.y, 0, m.EPSILON14))
                                  ) {
                                      var c = m.sign(r.z);
                                      n.unpack(S[e], 0, O),
                                          'east' !== e &&
                                              'west' !== e &&
                                              n.multiplyByScalar(O, c, O),
                                          n.unpack(S[t], 0, v),
                                          'east' !== t &&
                                              'west' !== t &&
                                              n.multiplyByScalar(v, c, v),
                                          n.unpack(S[i], 0, I),
                                          'east' !== i &&
                                              'west' !== i &&
                                              n.multiplyByScalar(I, c, I);
                                  } else {
                                      (a = o(a, f.WGS84)),
                                          a.geodeticSurfaceNormal(r, M.up);
                                      var l = M.up,
                                          h = M.east;
                                      (h.x = -r.y),
                                          (h.y = r.x),
                                          (h.z = 0),
                                          n.normalize(h, M.east),
                                          n.cross(l, h, M.north),
                                          n.multiplyByScalar(M.up, -1, M.down),
                                          n.multiplyByScalar(
                                              M.east,
                                              -1,
                                              M.west,
                                          ),
                                          n.multiplyByScalar(
                                              M.north,
                                              -1,
                                              M.south,
                                          ),
                                          (O = M[e]),
                                          (v = M[t]),
                                          (I = M[i]);
                                  }
                                  return (
                                      (s[0] = O.x),
                                      (s[1] = O.y),
                                      (s[2] = O.z),
                                      (s[3] = 0),
                                      (s[4] = v.x),
                                      (s[5] = v.y),
                                      (s[6] = v.z),
                                      (s[7] = 0),
                                      (s[8] = I.x),
                                      (s[9] = I.y),
                                      (s[10] = I.z),
                                      (s[11] = 0),
                                      (s[12] = r.x),
                                      (s[13] = r.y),
                                      (s[14] = r.z),
                                      (s[15] = 1),
                                      s
                                  );
                              }),
                              (N[a] = r)),
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
                var g = new y(),
                    w = new n(1, 1, 1),
                    C = new _();
                T.headingPitchRollToFixedFrame = function (e, t, r, i, a) {
                    i = o(i, T.eastNorthUpToFixedFrame);
                    var u = y.fromHeadingPitchRoll(t, g),
                        s = _.fromTranslationQuaternionRotationScale(
                            n.ZERO,
                            u,
                            w,
                            C,
                        );
                    return (a = i(e, r, a)), _.multiply(a, s, a);
                };
                var x = new _(),
                    P = new p();
                T.headingPitchRollQuaternion = function (e, t, n, r, i) {
                    var a = T.headingPitchRollToFixedFrame(e, t, n, r, x),
                        o = _.getRotation(a, P);
                    return y.fromRotationMatrix(o, i);
                };
                var U = m.TWO_PI / 86400,
                    D = new E();
                (T.computeTemeToPseudoFixedMatrix = function (e, t) {
                    D = E.addSeconds(e, -E.computeTaiMinusUtc(e), D);
                    var n,
                        r = D.dayNumber,
                        i = D.secondsOfDay,
                        a = r - 2451545;
                    n =
                        i >= 43200
                            ? (a + 0.5) / R.DAYS_PER_JULIAN_CENTURY
                            : (a - 0.5) / R.DAYS_PER_JULIAN_CENTURY;
                    var o =
                            24110.54841 +
                            n * (8640184.812866 + n * (0.093104 + -62e-7 * n)),
                        s = (o * U) % m.TWO_PI,
                        c =
                            72921158553e-15 +
                            1.1772758384668e-19 * (r - 2451545.5),
                        l = (i + 0.5 * R.SECONDS_PER_DAY) % R.SECONDS_PER_DAY,
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
                        u(t) || (t = new p());
                        var n = T.computeFixedToIcrfMatrix(e, t);
                        if (u(n)) return p.transpose(n, t);
                    });
                var L = new d(0, 0, 0),
                    F = new l(0, 0, 0, 0, 0, 0),
                    B = new p(),
                    b = new p();
                T.computeFixedToIcrfMatrix = function (e, t) {
                    u(t) || (t = new p());
                    var n = T.earthOrientationParameters.compute(e, F);
                    if (u(n)) {
                        var r = e.dayNumber,
                            i = e.secondsOfDay + 32.184,
                            a = T.iau2006XysData.computeXysRadians(r, i, L);
                        if (u(a)) {
                            var o = a.x + n.xPoleOffset,
                                s = a.y + n.yPoleOffset,
                                c = 1 / (1 + Math.sqrt(1 - o * o - s * s)),
                                l = B;
                            (l[0] = 1 - c * o * o),
                                (l[3] = -c * o * s),
                                (l[6] = o),
                                (l[1] = -c * o * s),
                                (l[4] = 1 - c * s * s),
                                (l[7] = s),
                                (l[2] = -o),
                                (l[5] = -s),
                                (l[8] = 1 - c * (o * o + s * s));
                            var f = p.fromRotationZ(-a.s, b),
                                h = p.multiply(l, f, B),
                                d = e.dayNumber,
                                _ =
                                    e.secondsOfDay -
                                    E.computeTaiMinusUtc(e) +
                                    n.ut1MinusUtc,
                                y = d - 2451545,
                                A = _ / R.SECONDS_PER_DAY,
                                S =
                                    0.779057273264 +
                                    A +
                                    0.00273781191135448 * (y + A);
                            S = (S % 1) * m.TWO_PI;
                            var N = p.fromRotationZ(S, b),
                                M = p.multiply(h, N, B),
                                O = Math.cos(n.xPoleWander),
                                v = Math.cos(n.yPoleWander),
                                I = Math.sin(n.xPoleWander),
                                g = Math.sin(n.yPoleWander),
                                w = r - 2451545 + i / R.SECONDS_PER_DAY;
                            w /= 36525;
                            var C = (-47e-6 * w * m.RADIANS_PER_DEGREE) / 3600,
                                x = Math.cos(C),
                                P = Math.sin(C),
                                U = b;
                            return (
                                (U[0] = O * x),
                                (U[1] = O * P),
                                (U[2] = I),
                                (U[3] = -v * P + g * I * x),
                                (U[4] = v * x + g * I * P),
                                (U[5] = -g * O),
                                (U[6] = -g * P - v * I * x),
                                (U[7] = g * x - v * I * P),
                                (U[8] = v * O),
                                p.multiply(M, U, t)
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
                            _.multiplyByVector(
                                e,
                                r.fromElements(i.x, i.y, i.z, 1, o),
                                o,
                            ),
                            r.multiplyByScalar(o, 1 / o.w, o),
                            _.multiplyByVector(n, o, o),
                            t.fromCartesian4(o, a)
                        );
                    });
                var q = new n(),
                    G = new n(),
                    X = new n();
                T.rotationMatrixFromPositionVelocity = function (e, t, r, i) {
                    var a = o(r, f.WGS84).geodeticSurfaceNormal(e, q),
                        s = n.cross(t, a, G);
                    n.equalsEpsilon(s, n.ZERO, m.EPSILON6) &&
                        (s = n.clone(n.UNIT_X, s));
                    var c = n.cross(s, t, X);
                    return (
                        n.cross(t, c, s),
                        n.negate(s, s),
                        u(i) || (i = new p()),
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
                var W = new _(0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1),
                    V = new i(),
                    H = new n(),
                    Y = new n(),
                    k = new p(),
                    Z = new _(),
                    j = new _();
                return (
                    (T.basisTo2D = function (e, t, r) {
                        var i = _.getTranslation(t, Y),
                            a = e.ellipsoid,
                            o = a.cartesianToCartographic(i, V),
                            u = e.project(o, H);
                        n.fromElements(u.z, u.x, u.y, u);
                        var s = T.eastNorthUpToFixedFrame(i, a, Z),
                            c = _.inverseTransformation(s, j),
                            l = _.getRotation(t, k),
                            f = _.multiplyByMatrix3(c, l, r);
                        return (
                            _.multiply(W, f, r), _.setTranslation(r, u, r), r
                        );
                    }),
                    (T.wgs84To2DModelMatrix = function (e, t, r) {
                        var i = e.ellipsoid,
                            a = T.eastNorthUpToFixedFrame(t, i, Z),
                            o = _.inverseTransformation(a, j),
                            u = i.cartesianToCartographic(t, V),
                            s = e.project(u, H);
                        n.fromElements(s.z, s.x, s.y, s);
                        var c = _.fromTranslation(s, Z);
                        return _.multiply(W, o, r), _.multiply(c, r, r), r;
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
                function E(e, t) {
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
                    var i = _;
                    (i.origin = e), n.normalize(e, i.direction);
                    var o = c.rayPlane(i, this._plane, y);
                    if (
                        (a(o) ||
                            (n.negate(i.direction, i.direction),
                            (o = c.rayPlane(i, this._plane, y))),
                        a(o))
                    ) {
                        var u = n.subtract(o, this._origin, o),
                            s = n.dot(this._xAxis, u),
                            l = n.dot(this._yAxis, u);
                        return a(r) ? ((r.x = s), (r.y = l), r) : new t(s, l);
                    }
                }),
                    (E.prototype.projectPointsOntoPlane = function (e, t) {
                        a(t) || (t = []);
                        for (var n = 0, r = e.length, i = 0; i < r; i++) {
                            var o = this.projectPointOntoPlane(e[i], t[n]);
                            a(o) && ((t[n] = o), n++);
                        }
                        return (t.length = n), t;
                    }),
                    (E.prototype.projectPointToNearestOnPlane = function (
                        e,
                        r,
                    ) {
                        a(r) || (r = new t());
                        var i = _;
                        (i.origin = e),
                            n.clone(this._plane.normal, i.direction);
                        var o = c.rayPlane(i, this._plane, y);
                        a(o) ||
                            (n.negate(i.direction, i.direction),
                            (o = c.rayPlane(i, this._plane, y)));
                        var u = n.subtract(o, this._origin, o),
                            s = n.dot(this._xAxis, u),
                            l = n.dot(this._yAxis, u);
                        return (r.x = s), (r.y = l), r;
                    }),
                    (E.prototype.projectPointsToNearestOnPlane = function (
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
                var R = new n();
                return (
                    (E.prototype.projectPointsOntoEllipsoid = function (e, t) {
                        var r = e.length;
                        a(t) ? (t.length = r) : (t = new Array(r));
                        for (
                            var i = this._ellipsoid,
                                o = this._origin,
                                u = this._xAxis,
                                s = this._yAxis,
                                c = R,
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
                    E
                );
            },
        ),
        define(
            'Core/OrientedBoundingBox',
            [
                './BoundingSphere',
                './Cartesian2',
                './Cartesian3',
                './Cartographic',
                './defaultValue',
                './defined',
                './DeveloperError',
                './Ellipsoid',
                './EllipsoidTangentPlane',
                './Intersect',
                './Interval',
                './Math',
                './Matrix3',
                './Plane',
                './Rectangle',
            ],
            function (e, t, n, r, i, a, o, u, s, c, l, f, h, d, E) {
                'use strict';
                function m(e, t) {
                    (this.center = n.clone(i(e, n.ZERO))),
                        (this.halfAxes = h.clone(i(t, h.ZERO)));
                }
                function p(e, t, r, i, o, u, s, c) {
                    a(c) || (c = new m());
                    var l = c.halfAxes;
                    h.setColumn(l, 0, e.xAxis, l),
                        h.setColumn(l, 1, e.yAxis, l),
                        h.setColumn(l, 2, e.zAxis, l);
                    var f = O;
                    (f.x = (t + r) / 2),
                        (f.y = (i + o) / 2),
                        (f.z = (u + s) / 2);
                    var d = v;
                    (d.x = (r - t) / 2),
                        (d.y = (o - i) / 2),
                        (d.z = (s - u) / 2);
                    var E = c.center;
                    return (
                        (f = h.multiplyByVector(l, f, f)),
                        n.add(e.origin, f, E),
                        h.multiplyByScale(l, d, l),
                        c
                    );
                }
                var _ = new n(),
                    y = new n(),
                    R = new n(),
                    T = new n(),
                    A = new n(),
                    S = new n(),
                    N = new h(),
                    M = { unitary: new h(), diagonal: new h() };
                m.fromPoints = function (e, t) {
                    if ((a(t) || (t = new m()), !a(e) || 0 === e.length))
                        return (t.halfAxes = h.ZERO), (t.center = n.ZERO), t;
                    var r,
                        i = e.length,
                        o = n.clone(e[0], _);
                    for (r = 1; r < i; r++) n.add(o, e[r], o);
                    var u = 1 / i;
                    n.multiplyByScalar(o, u, o);
                    var s,
                        c = 0,
                        l = 0,
                        f = 0,
                        d = 0,
                        E = 0,
                        p = 0;
                    for (r = 0; r < i; r++)
                        (s = n.subtract(e[r], o, y)),
                            (c += s.x * s.x),
                            (l += s.x * s.y),
                            (f += s.x * s.z),
                            (d += s.y * s.y),
                            (E += s.y * s.z),
                            (p += s.z * s.z);
                    (c *= u), (l *= u), (f *= u), (d *= u), (E *= u), (p *= u);
                    var O = N;
                    (O[0] = c),
                        (O[1] = l),
                        (O[2] = f),
                        (O[3] = l),
                        (O[4] = d),
                        (O[5] = E),
                        (O[6] = f),
                        (O[7] = E),
                        (O[8] = p);
                    var v = h.computeEigenDecomposition(O, M),
                        I = h.clone(v.unitary, t.halfAxes),
                        g = h.getColumn(I, 0, T),
                        w = h.getColumn(I, 1, A),
                        C = h.getColumn(I, 2, S),
                        x = -Number.MAX_VALUE,
                        P = -Number.MAX_VALUE,
                        U = -Number.MAX_VALUE,
                        D = Number.MAX_VALUE,
                        L = Number.MAX_VALUE,
                        F = Number.MAX_VALUE;
                    for (r = 0; r < i; r++)
                        (s = e[r]),
                            (x = Math.max(n.dot(g, s), x)),
                            (P = Math.max(n.dot(w, s), P)),
                            (U = Math.max(n.dot(C, s), U)),
                            (D = Math.min(n.dot(g, s), D)),
                            (L = Math.min(n.dot(w, s), L)),
                            (F = Math.min(n.dot(C, s), F));
                    (g = n.multiplyByScalar(g, 0.5 * (D + x), g)),
                        (w = n.multiplyByScalar(w, 0.5 * (L + P), w)),
                        (C = n.multiplyByScalar(C, 0.5 * (F + U), C));
                    var B = n.add(g, w, t.center);
                    n.add(B, C, B);
                    var b = R;
                    return (
                        (b.x = x - D),
                        (b.y = P - L),
                        (b.z = U - F),
                        n.multiplyByScalar(b, 0.5, b),
                        h.multiplyByScale(t.halfAxes, b, t.halfAxes),
                        t
                    );
                };
                var O = new n(),
                    v = new n(),
                    I = new r(),
                    g = new n(),
                    w = [
                        new r(),
                        new r(),
                        new r(),
                        new r(),
                        new r(),
                        new r(),
                        new r(),
                        new r(),
                    ],
                    C = [
                        new n(),
                        new n(),
                        new n(),
                        new n(),
                        new n(),
                        new n(),
                        new n(),
                        new n(),
                    ],
                    x = [
                        new t(),
                        new t(),
                        new t(),
                        new t(),
                        new t(),
                        new t(),
                        new t(),
                        new t(),
                    ];
                (m.fromRectangle = function (e, t, n, r, a) {
                    (t = i(t, 0)), (n = i(n, 0)), (r = i(r, u.WGS84));
                    var o = E.center(e, I),
                        c = r.cartographicToCartesian(o, g),
                        l = new s(c, r),
                        f = l.plane,
                        h = w[0],
                        m = w[1],
                        _ = w[2],
                        y = w[3],
                        R = w[4],
                        T = w[5],
                        A = w[6],
                        S = w[7],
                        N = o.longitude,
                        M = e.south < 0 && e.north > 0 ? 0 : o.latitude;
                    (A.latitude = T.latitude = R.latitude = e.south),
                        (S.latitude = y.latitude = M),
                        (h.latitude = m.latitude = _.latitude = e.north),
                        (A.longitude = S.longitude = h.longitude = e.west),
                        (T.longitude = m.longitude = N),
                        (R.longitude = y.longitude = _.longitude = e.east),
                        (_.height =
                            m.height =
                            h.height =
                            S.height =
                            A.height =
                            T.height =
                            R.height =
                            y.height =
                                n),
                        r.cartographicArrayToCartesianArray(w, C),
                        l.projectPointsToNearestOnPlane(C, x);
                    var O = Math.min(x[6].x, x[7].x, x[0].x),
                        v = Math.max(x[2].x, x[3].x, x[4].x),
                        P = Math.min(x[4].y, x[5].y, x[6].y),
                        U = Math.max(x[0].y, x[1].y, x[2].y);
                    return (
                        (_.height = h.height = R.height = A.height = t),
                        r.cartographicArrayToCartesianArray(w, C),
                        p(
                            l,
                            O,
                            v,
                            P,
                            U,
                            Math.min(
                                d.getPointDistance(f, C[0]),
                                d.getPointDistance(f, C[2]),
                                d.getPointDistance(f, C[4]),
                                d.getPointDistance(f, C[6]),
                            ),
                            n,
                            a,
                        )
                    );
                }),
                    (m.clone = function (e, t) {
                        if (a(e))
                            return a(t)
                                ? (n.clone(e.center, t.center),
                                  h.clone(e.halfAxes, t.halfAxes),
                                  t)
                                : new m(e.center, e.halfAxes);
                    }),
                    (m.intersectPlane = function (e, t) {
                        var r = e.center,
                            i = t.normal,
                            a = e.halfAxes,
                            o = i.x,
                            u = i.y,
                            s = i.z,
                            l =
                                Math.abs(
                                    o * a[h.COLUMN0ROW0] +
                                        u * a[h.COLUMN0ROW1] +
                                        s * a[h.COLUMN0ROW2],
                                ) +
                                Math.abs(
                                    o * a[h.COLUMN1ROW0] +
                                        u * a[h.COLUMN1ROW1] +
                                        s * a[h.COLUMN1ROW2],
                                ) +
                                Math.abs(
                                    o * a[h.COLUMN2ROW0] +
                                        u * a[h.COLUMN2ROW1] +
                                        s * a[h.COLUMN2ROW2],
                                ),
                            f = n.dot(i, r) + t.distance;
                        return f <= -l
                            ? c.OUTSIDE
                            : f >= l
                              ? c.INSIDE
                              : c.INTERSECTING;
                    });
                var P = new n(),
                    U = new n(),
                    D = new n(),
                    L = new n();
                m.distanceSquaredTo = function (e, t) {
                    var r = n.subtract(t, e.center, O),
                        i = e.halfAxes,
                        a = h.getColumn(i, 0, P),
                        o = h.getColumn(i, 1, U),
                        u = h.getColumn(i, 2, D),
                        s = n.magnitude(a),
                        c = n.magnitude(o),
                        l = n.magnitude(u);
                    n.normalize(a, a), n.normalize(o, o), n.normalize(u, u);
                    var f = L;
                    (f.x = n.dot(r, a)),
                        (f.y = n.dot(r, o)),
                        (f.z = n.dot(r, u));
                    var d,
                        E = 0;
                    return (
                        f.x < -s
                            ? ((d = f.x + s), (E += d * d))
                            : f.x > s && ((d = f.x - s), (E += d * d)),
                        f.y < -c
                            ? ((d = f.y + c), (E += d * d))
                            : f.y > c && ((d = f.y - c), (E += d * d)),
                        f.z < -l
                            ? ((d = f.z + l), (E += d * d))
                            : f.z > l && ((d = f.z - l), (E += d * d)),
                        E
                    );
                };
                var F = new n(),
                    B = new n();
                m.computePlaneDistances = function (e, t, r, i) {
                    a(i) || (i = new l());
                    var o = Number.POSITIVE_INFINITY,
                        u = Number.NEGATIVE_INFINITY,
                        s = e.center,
                        c = e.halfAxes,
                        f = h.getColumn(c, 0, P),
                        d = h.getColumn(c, 1, U),
                        E = h.getColumn(c, 2, D),
                        m = n.add(f, d, F);
                    n.add(m, E, m), n.add(m, s, m);
                    var p = n.subtract(m, t, B),
                        _ = n.dot(r, p);
                    return (
                        (o = Math.min(_, o)),
                        (u = Math.max(_, u)),
                        n.add(s, f, m),
                        n.add(m, d, m),
                        n.subtract(m, E, m),
                        n.subtract(m, t, p),
                        (_ = n.dot(r, p)),
                        (o = Math.min(_, o)),
                        (u = Math.max(_, u)),
                        n.add(s, f, m),
                        n.subtract(m, d, m),
                        n.add(m, E, m),
                        n.subtract(m, t, p),
                        (_ = n.dot(r, p)),
                        (o = Math.min(_, o)),
                        (u = Math.max(_, u)),
                        n.add(s, f, m),
                        n.subtract(m, d, m),
                        n.subtract(m, E, m),
                        n.subtract(m, t, p),
                        (_ = n.dot(r, p)),
                        (o = Math.min(_, o)),
                        (u = Math.max(_, u)),
                        n.subtract(s, f, m),
                        n.add(m, d, m),
                        n.add(m, E, m),
                        n.subtract(m, t, p),
                        (_ = n.dot(r, p)),
                        (o = Math.min(_, o)),
                        (u = Math.max(_, u)),
                        n.subtract(s, f, m),
                        n.add(m, d, m),
                        n.subtract(m, E, m),
                        n.subtract(m, t, p),
                        (_ = n.dot(r, p)),
                        (o = Math.min(_, o)),
                        (u = Math.max(_, u)),
                        n.subtract(s, f, m),
                        n.subtract(m, d, m),
                        n.add(m, E, m),
                        n.subtract(m, t, p),
                        (_ = n.dot(r, p)),
                        (o = Math.min(_, o)),
                        (u = Math.max(_, u)),
                        n.subtract(s, f, m),
                        n.subtract(m, d, m),
                        n.subtract(m, E, m),
                        n.subtract(m, t, p),
                        (_ = n.dot(r, p)),
                        (o = Math.min(_, o)),
                        (u = Math.max(_, u)),
                        (i.start = o),
                        (i.stop = u),
                        i
                    );
                };
                var b = new e();
                return (
                    (m.isOccluded = function (t, n) {
                        var r = e.fromOrientedBoundingBox(t, b);
                        return !n.isBoundingSphereVisible(r);
                    }),
                    (m.prototype.intersectPlane = function (e) {
                        return m.intersectPlane(this, e);
                    }),
                    (m.prototype.distanceSquaredTo = function (e) {
                        return m.distanceSquaredTo(this, e);
                    }),
                    (m.prototype.computePlaneDistances = function (e, t, n) {
                        return m.computePlaneDistances(this, e, t, n);
                    }),
                    (m.prototype.isOccluded = function (e) {
                        return m.isOccluded(this, e);
                    }),
                    (m.equals = function (e, t) {
                        return (
                            e === t ||
                            (a(e) &&
                                a(t) &&
                                n.equals(e.center, t.center) &&
                                h.equals(e.halfAxes, t.halfAxes))
                        );
                    }),
                    (m.prototype.clone = function (e) {
                        return m.clone(this, e);
                    }),
                    (m.prototype.equals = function (e) {
                        return m.equals(this, e);
                    }),
                    m
                );
            },
        ),
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
        define('Core/TerrainQuantization', ['./freezeObject'], function (e) {
            'use strict';
            return e({ NONE: 0, BITS12: 1 });
        }),
        define(
            'Core/TerrainEncoding',
            [
                './AttributeCompression',
                './Cartesian2',
                './Cartesian3',
                './ComponentDatatype',
                './defaultValue',
                './defined',
                './Math',
                './Matrix4',
                './TerrainQuantization',
            ],
            function (e, t, n, r, i, a, o, u, s) {
                'use strict';
                function c(e, t, r, o, c, h) {
                    var p, _, y, R;
                    if (a(e) && a(t) && a(r) && a(o)) {
                        var T = e.minimum,
                            A = e.maximum,
                            S = n.subtract(A, T, f),
                            N = r - t;
                        (p =
                            Math.max(n.maximumComponent(S), N) < m - 1
                                ? s.BITS12
                                : s.NONE),
                            (_ = e.center),
                            (y = u.inverseTransformation(o, new u()));
                        var M = n.negate(T, l);
                        u.multiply(u.fromTranslation(M, d), y, y);
                        var O = l;
                        (O.x = 1 / S.x),
                            (O.y = 1 / S.y),
                            (O.z = 1 / S.z),
                            u.multiply(u.fromScale(O, d), y, y),
                            (R = u.clone(o)),
                            u.setTranslation(R, n.ZERO, R),
                            (o = u.clone(o, new u()));
                        var v = u.fromTranslation(T, d),
                            I = u.fromScale(S, E),
                            g = u.multiply(v, I, d);
                        u.multiply(o, g, o), u.multiply(R, g, R);
                    }
                    (this.quantization = p),
                        (this.minimumHeight = t),
                        (this.maximumHeight = r),
                        (this.center = _),
                        (this.toScaledENU = y),
                        (this.fromScaledENU = o),
                        (this.matrix = R),
                        (this.hasVertexNormals = c),
                        (this.hasWebMercatorT = i(h, !1));
                }
                var l = new n(),
                    f = new n(),
                    h = new t(),
                    d = new u(),
                    E = new u(),
                    m = Math.pow(2, 12);
                (c.prototype.encode = function (r, i, a, c, f, d, E) {
                    var m = c.x,
                        p = c.y;
                    if (this.quantization === s.BITS12) {
                        (a = u.multiplyByPoint(this.toScaledENU, a, l)),
                            (a.x = o.clamp(a.x, 0, 1)),
                            (a.y = o.clamp(a.y, 0, 1)),
                            (a.z = o.clamp(a.z, 0, 1));
                        var _ = this.maximumHeight - this.minimumHeight,
                            y = o.clamp((f - this.minimumHeight) / _, 0, 1);
                        t.fromElements(a.x, a.y, h);
                        var R = e.compressTextureCoordinates(h);
                        t.fromElements(a.z, y, h);
                        var T = e.compressTextureCoordinates(h);
                        t.fromElements(m, p, h);
                        var A = e.compressTextureCoordinates(h);
                        if (
                            ((r[i++] = R),
                            (r[i++] = T),
                            (r[i++] = A),
                            this.hasWebMercatorT)
                        ) {
                            t.fromElements(E, 0, h);
                            var S = e.compressTextureCoordinates(h);
                            r[i++] = S;
                        }
                    } else
                        n.subtract(a, this.center, l),
                            (r[i++] = l.x),
                            (r[i++] = l.y),
                            (r[i++] = l.z),
                            (r[i++] = f),
                            (r[i++] = m),
                            (r[i++] = p),
                            this.hasWebMercatorT && (r[i++] = E);
                    return (
                        this.hasVertexNormals && (r[i++] = e.octPackFloat(d)), i
                    );
                }),
                    (c.prototype.decodePosition = function (t, r, i) {
                        if (
                            (a(i) || (i = new n()),
                            (r *= this.getStride()),
                            this.quantization === s.BITS12)
                        ) {
                            var o = e.decompressTextureCoordinates(t[r], h);
                            (i.x = o.x), (i.y = o.y);
                            var c = e.decompressTextureCoordinates(t[r + 1], h);
                            return (
                                (i.z = c.x),
                                u.multiplyByPoint(this.fromScaledENU, i, i)
                            );
                        }
                        return (
                            (i.x = t[r]),
                            (i.y = t[r + 1]),
                            (i.z = t[r + 2]),
                            n.add(i, this.center, i)
                        );
                    }),
                    (c.prototype.decodeTextureCoordinates = function (n, r, i) {
                        return (
                            a(i) || (i = new t()),
                            (r *= this.getStride()),
                            this.quantization === s.BITS12
                                ? e.decompressTextureCoordinates(n[r + 2], i)
                                : t.fromElements(n[r + 4], n[r + 5], i)
                        );
                    }),
                    (c.prototype.decodeHeight = function (t, n) {
                        if (
                            ((n *= this.getStride()),
                            this.quantization === s.BITS12)
                        ) {
                            return (
                                e.decompressTextureCoordinates(t[n + 1], h).y *
                                    (this.maximumHeight - this.minimumHeight) +
                                this.minimumHeight
                            );
                        }
                        return t[n + 3];
                    }),
                    (c.prototype.getOctEncodedNormal = function (e, n, r) {
                        n = (n + 1) * this.getStride() - 1;
                        var i = e[n] / 256,
                            a = Math.floor(i),
                            o = 256 * (i - a);
                        return t.fromElements(a, o, r);
                    }),
                    (c.prototype.getStride = function () {
                        var e;
                        switch (this.quantization) {
                            case s.BITS12:
                                e = 3;
                                break;
                            default:
                                e = 6;
                        }
                        return (
                            this.hasWebMercatorT && ++e,
                            this.hasVertexNormals && ++e,
                            e
                        );
                    });
                var p = {
                        position3DAndHeight: 0,
                        textureCoordAndEncodedNormals: 1,
                    },
                    _ = { compressed0: 0, compressed1: 1 };
                return (
                    (c.prototype.getAttributes = function (e) {
                        var t,
                            n = r.FLOAT,
                            i = r.getSizeInBytes(n);
                        if (this.quantization === s.NONE) {
                            var a = 2;
                            return (
                                this.hasWebMercatorT && ++a,
                                this.hasVertexNormals && ++a,
                                (t = (4 + a) * i),
                                [
                                    {
                                        index: p.position3DAndHeight,
                                        vertexBuffer: e,
                                        componentDatatype: n,
                                        componentsPerAttribute: 4,
                                        offsetInBytes: 0,
                                        strideInBytes: t,
                                    },
                                    {
                                        index: p.textureCoordAndEncodedNormals,
                                        vertexBuffer: e,
                                        componentDatatype: n,
                                        componentsPerAttribute: a,
                                        offsetInBytes: 4 * i,
                                        strideInBytes: t,
                                    },
                                ]
                            );
                        }
                        var o = 3,
                            u = 0;
                        return (
                            (this.hasWebMercatorT || this.hasVertexNormals) &&
                                ++o,
                            this.hasWebMercatorT && this.hasVertexNormals
                                ? (++u,
                                  (t = (o + u) * i),
                                  [
                                      {
                                          index: _.compressed0,
                                          vertexBuffer: e,
                                          componentDatatype: n,
                                          componentsPerAttribute: o,
                                          offsetInBytes: 0,
                                          strideInBytes: t,
                                      },
                                      {
                                          index: _.compressed1,
                                          vertexBuffer: e,
                                          componentDatatype: n,
                                          componentsPerAttribute: u,
                                          offsetInBytes: o * i,
                                          strideInBytes: t,
                                      },
                                  ])
                                : [
                                      {
                                          index: _.compressed0,
                                          vertexBuffer: e,
                                          componentDatatype: n,
                                          componentsPerAttribute: o,
                                      },
                                  ]
                        );
                    }),
                    (c.prototype.getAttributeLocations = function () {
                        return this.quantization === s.NONE ? p : _;
                    }),
                    (c.clone = function (e, t) {
                        return (
                            a(t) || (t = new c()),
                            (t.quantization = e.quantization),
                            (t.minimumHeight = e.minimumHeight),
                            (t.maximumHeight = e.maximumHeight),
                            (t.center = n.clone(e.center)),
                            (t.toScaledENU = u.clone(e.toScaledENU)),
                            (t.fromScaledENU = u.clone(e.fromScaledENU)),
                            (t.matrix = u.clone(e.matrix)),
                            (t.hasVertexNormals = e.hasVertexNormals),
                            (t.hasWebMercatorT = e.hasWebMercatorT),
                            t
                        );
                    }),
                    c
                );
            },
        ),
        define('Core/formatError', ['./defined'], function (e) {
            'use strict';
            function t(t) {
                var n,
                    r = t.name,
                    i = t.message;
                n = e(r) && e(i) ? r + ': ' + i : t.toString();
                var a = t.stack;
                return e(a) && (n += '\n' + a), n;
            }
            return t;
        }),
        define(
            'Workers/createTaskProcessorWorker',
            ['../Core/defaultValue', '../Core/defined', '../Core/formatError'],
            function (e, t, n) {
                'use strict';
                function r(r) {
                    var i,
                        a = [],
                        o = { id: void 0, result: void 0, error: void 0 };
                    return function (u) {
                        var s = u.data;
                        (a.length = 0),
                            (o.id = s.id),
                            (o.error = void 0),
                            (o.result = void 0);
                        try {
                            o.result = r(s.parameters, a);
                        } catch (e) {
                            e instanceof Error
                                ? (o.error = {
                                      name: e.name,
                                      message: e.message,
                                      stack: e.stack,
                                  })
                                : (o.error = e);
                        }
                        t(i) ||
                            (i = e(self.webkitPostMessage, self.postMessage)),
                            s.canTransferArrayBuffer || (a.length = 0);
                        try {
                            i(o, a);
                        } catch (e) {
                            (o.result = void 0),
                                (o.error =
                                    'postMessage failed with error: ' +
                                    n(e) +
                                    '\n  with responseMessage: ' +
                                    JSON.stringify(o)),
                                i(o);
                        }
                    };
                }
                return r;
            },
        ),
        define(
            'Workers/upsampleQuantizedTerrainMesh',
            [
                '../Core/AttributeCompression',
                '../Core/BoundingSphere',
                '../Core/Cartesian2',
                '../Core/Cartesian3',
                '../Core/Cartographic',
                '../Core/defined',
                '../Core/Ellipsoid',
                '../Core/EllipsoidalOccluder',
                '../Core/IndexDatatype',
                '../Core/Intersections2D',
                '../Core/Math',
                '../Core/OrientedBoundingBox',
                '../Core/TerrainEncoding',
                './createTaskProcessorWorker',
            ],
            function (e, t, n, r, i, a, o, u, s, c, l, f, h, d) {
                'use strict';
                function E(e, n) {
                    var i = e.isEastChild,
                        a = e.isNorthChild,
                        d = i ? R : 0,
                        E = i ? y : R,
                        p = a ? R : 0,
                        L = a ? y : R,
                        F = O,
                        B = v,
                        b = I,
                        z = w;
                    (F.length = 0),
                        (B.length = 0),
                        (b.length = 0),
                        (z.length = 0);
                    var q = g;
                    q.length = 0;
                    var G = {},
                        X = e.vertices,
                        W = e.indices;
                    W = W.subarray(0, e.skirtIndex);
                    var V,
                        H,
                        Y,
                        k = h.clone(e.encoding),
                        Z = k.hasVertexNormals,
                        j = e.exaggeration,
                        K = 0,
                        J = e.vertexCountWithoutSkirts,
                        Q = e.minimumHeight,
                        $ = e.maximumHeight,
                        ee = new Array(J),
                        te = new Array(J),
                        ne = new Array(J),
                        re = Z ? new Array(2 * J) : void 0;
                    for (H = 0, Y = 0; H < J; ++H, Y += 2) {
                        var ie = k.decodeTextureCoordinates(X, H, U);
                        if (
                            ((V = k.decodeHeight(X, H) / j),
                            (ee[H] = l.clamp((ie.x * y) | 0, 0, y)),
                            (te[H] = l.clamp((ie.y * y) | 0, 0, y)),
                            (ne[H] = l.clamp(
                                (((V - Q) / ($ - Q)) * y) | 0,
                                0,
                                y,
                            )),
                            ee[H] < 20 && (ee[H] = 0),
                            te[H] < 20 && (te[H] = 0),
                            y - ee[H] < 20 && (ee[H] = y),
                            y - te[H] < 20 && (te[H] = y),
                            Z)
                        ) {
                            var ae = k.getOctEncodedNormal(X, H, D);
                            (re[Y] = ae.x), (re[Y + 1] = ae.y);
                        }
                    }
                    var oe, ue;
                    for (H = 0, Y = 0; H < J; ++H, Y += 2)
                        (oe = ee[H]),
                            (ue = te[H]),
                            ((i && oe >= R) || (!i && oe <= R)) &&
                                ((a && ue >= R) || (!a && ue <= R)) &&
                                ((G[H] = K),
                                F.push(oe),
                                B.push(ue),
                                b.push(ne[H]),
                                Z && (z.push(re[Y]), z.push(re[Y + 1])),
                                ++K);
                    var se = [];
                    se.push(new m()), se.push(new m()), se.push(new m());
                    var ce = [];
                    ce.push(new m()), ce.push(new m()), ce.push(new m());
                    var le, fe;
                    for (H = 0; H < W.length; H += 3) {
                        var he = W[H],
                            de = W[H + 1],
                            Ee = W[H + 2],
                            me = ee[he],
                            pe = ee[de],
                            _e = ee[Ee];
                        se[0].initializeIndexed(ee, te, ne, re, he),
                            se[1].initializeIndexed(ee, te, ne, re, de),
                            se[2].initializeIndexed(ee, te, ne, re, Ee);
                        var ye = c.clipTriangleAtAxisAlignedThreshold(
                            R,
                            i,
                            me,
                            pe,
                            _e,
                            T,
                        );
                        (le = 0),
                            le >= ye.length ||
                                (le = ce[0].initializeFromClipResult(
                                    ye,
                                    le,
                                    se,
                                )) >= ye.length ||
                                (le = ce[1].initializeFromClipResult(
                                    ye,
                                    le,
                                    se,
                                )) >= ye.length ||
                                ((le = ce[2].initializeFromClipResult(
                                    ye,
                                    le,
                                    se,
                                )),
                                (fe = c.clipTriangleAtAxisAlignedThreshold(
                                    R,
                                    a,
                                    ce[0].getV(),
                                    ce[1].getV(),
                                    ce[2].getV(),
                                    A,
                                )),
                                _(F, B, b, z, q, G, fe, ce, Z),
                                le < ye.length &&
                                    (ce[2].clone(ce[1]),
                                    ce[2].initializeFromClipResult(ye, le, se),
                                    (fe = c.clipTriangleAtAxisAlignedThreshold(
                                        R,
                                        a,
                                        ce[0].getV(),
                                        ce[1].getV(),
                                        ce[2].getV(),
                                        A,
                                    )),
                                    _(F, B, b, z, q, G, fe, ce, Z)));
                    }
                    var Re = i ? -y : 0,
                        Te = a ? -y : 0,
                        Ae = [],
                        Se = [],
                        Ne = [],
                        Me = [],
                        Oe = Number.MAX_VALUE,
                        ve = -Oe,
                        Ie = S;
                    Ie.length = 0;
                    var ge = o.clone(e.ellipsoid),
                        we = e.childRectangle,
                        Ce = we.north,
                        xe = we.south,
                        Pe = we.east,
                        Ue = we.west;
                    for (Pe < Ue && (Pe += l.TWO_PI), H = 0; H < F.length; ++H)
                        (oe = Math.round(F[H])),
                            oe <= d
                                ? (Ae.push(H), (oe = 0))
                                : oe >= E
                                  ? (Ne.push(H), (oe = y))
                                  : (oe = 2 * oe + Re),
                            (F[H] = oe),
                            (ue = Math.round(B[H])),
                            ue <= p
                                ? (Se.push(H), (ue = 0))
                                : ue >= L
                                  ? (Me.push(H), (ue = y))
                                  : (ue = 2 * ue + Te),
                            (B[H] = ue),
                            (V = l.lerp(Q, $, b[H] / y)),
                            V < Oe && (Oe = V),
                            V > ve && (ve = V),
                            (b[H] = V),
                            (N.longitude = l.lerp(Ue, Pe, oe / y)),
                            (N.latitude = l.lerp(xe, Ce, ue / y)),
                            (N.height = V),
                            ge.cartographicToCartesian(N, M),
                            Ie.push(M.x),
                            Ie.push(M.y),
                            Ie.push(M.z);
                    var De = t.fromVertices(Ie, r.ZERO, 3, x),
                        Le = f.fromRectangle(we, Oe, ve, ge, P),
                        Fe = new u(ge),
                        Be = Fe.computeHorizonCullingPointFromVertices(
                            De.center,
                            Ie,
                            3,
                            De.center,
                            C,
                        ),
                        be = ve - Oe,
                        ze = new Uint16Array(F.length + B.length + b.length);
                    for (H = 0; H < F.length; ++H) ze[H] = F[H];
                    var qe = F.length;
                    for (H = 0; H < B.length; ++H) ze[qe + H] = B[H];
                    for (qe += B.length, H = 0; H < b.length; ++H)
                        ze[qe + H] = (y * (b[H] - Oe)) / be;
                    var Ge,
                        Xe = s.createTypedArray(F.length, q);
                    if (Z) {
                        var We = new Uint8Array(z);
                        n.push(ze.buffer, Xe.buffer, We.buffer),
                            (Ge = We.buffer);
                    } else n.push(ze.buffer, Xe.buffer);
                    return {
                        vertices: ze.buffer,
                        encodedNormals: Ge,
                        indices: Xe.buffer,
                        minimumHeight: Oe,
                        maximumHeight: ve,
                        westIndices: Ae,
                        southIndices: Se,
                        eastIndices: Ne,
                        northIndices: Me,
                        boundingSphere: De,
                        orientedBoundingBox: Le,
                        horizonOcclusionPoint: Be,
                    };
                }
                function m() {
                    (this.vertexBuffer = void 0),
                        (this.index = void 0),
                        (this.first = void 0),
                        (this.second = void 0),
                        (this.ratio = void 0);
                }
                function p(t, n) {
                    ++F;
                    var i = B[F],
                        a = b[F];
                    return (
                        (i = e.octDecode(
                            t.first.getNormalX(),
                            t.first.getNormalY(),
                            i,
                        )),
                        (a = e.octDecode(
                            t.second.getNormalX(),
                            t.second.getNormalY(),
                            a,
                        )),
                        (M = r.lerp(i, a, t.ratio, M)),
                        r.normalize(M, M),
                        e.octEncode(M, n),
                        --F,
                        n
                    );
                }
                function _(e, t, n, r, i, o, u, s, c) {
                    if (0 !== u.length) {
                        for (var l = 0, f = 0; f < u.length; )
                            f = z[l++].initializeFromClipResult(u, f, s);
                        for (var h = 0; h < l; ++h) {
                            var d = z[h];
                            if (d.isIndexed())
                                (d.newIndex = o[d.index]),
                                    (d.uBuffer = e),
                                    (d.vBuffer = t),
                                    (d.heightBuffer = n),
                                    c && (d.normalBuffer = r);
                            else {
                                var E = d.getKey();
                                if (a(o[E])) d.newIndex = o[E];
                                else {
                                    var m = e.length;
                                    e.push(d.getU()),
                                        t.push(d.getV()),
                                        n.push(d.getH()),
                                        c &&
                                            (r.push(d.getNormalX()),
                                            r.push(d.getNormalY())),
                                        (d.newIndex = m),
                                        (o[E] = m);
                                }
                            }
                        }
                        3 === l
                            ? (i.push(z[0].newIndex),
                              i.push(z[1].newIndex),
                              i.push(z[2].newIndex))
                            : 4 === l &&
                              (i.push(z[0].newIndex),
                              i.push(z[1].newIndex),
                              i.push(z[2].newIndex),
                              i.push(z[0].newIndex),
                              i.push(z[2].newIndex),
                              i.push(z[3].newIndex));
                    }
                }
                var y = 32767,
                    R = (y / 2) | 0,
                    T = [],
                    A = [],
                    S = [],
                    N = new i(),
                    M = new r(),
                    O = [],
                    v = [],
                    I = [],
                    g = [],
                    w = [],
                    C = new r(),
                    x = new t(),
                    P = new f(),
                    U = new n(),
                    D = new r();
                (m.prototype.clone = function (e) {
                    return (
                        a(e) || (e = new m()),
                        (e.uBuffer = this.uBuffer),
                        (e.vBuffer = this.vBuffer),
                        (e.heightBuffer = this.heightBuffer),
                        (e.normalBuffer = this.normalBuffer),
                        (e.index = this.index),
                        (e.first = this.first),
                        (e.second = this.second),
                        (e.ratio = this.ratio),
                        e
                    );
                }),
                    (m.prototype.initializeIndexed = function (e, t, n, r, i) {
                        (this.uBuffer = e),
                            (this.vBuffer = t),
                            (this.heightBuffer = n),
                            (this.normalBuffer = r),
                            (this.index = i),
                            (this.first = void 0),
                            (this.second = void 0),
                            (this.ratio = void 0);
                    }),
                    (m.prototype.initializeFromClipResult = function (e, t, n) {
                        var r = t + 1;
                        return (
                            -1 !== e[t]
                                ? n[e[t]].clone(this)
                                : ((this.vertexBuffer = void 0),
                                  (this.index = void 0),
                                  (this.first = n[e[r]]),
                                  ++r,
                                  (this.second = n[e[r]]),
                                  ++r,
                                  (this.ratio = e[r]),
                                  ++r),
                            r
                        );
                    }),
                    (m.prototype.getKey = function () {
                        return this.isIndexed()
                            ? this.index
                            : JSON.stringify({
                                  first: this.first.getKey(),
                                  second: this.second.getKey(),
                                  ratio: this.ratio,
                              });
                    }),
                    (m.prototype.isIndexed = function () {
                        return a(this.index);
                    }),
                    (m.prototype.getH = function () {
                        return a(this.index)
                            ? this.heightBuffer[this.index]
                            : l.lerp(
                                  this.first.getH(),
                                  this.second.getH(),
                                  this.ratio,
                              );
                    }),
                    (m.prototype.getU = function () {
                        return a(this.index)
                            ? this.uBuffer[this.index]
                            : l.lerp(
                                  this.first.getU(),
                                  this.second.getU(),
                                  this.ratio,
                              );
                    }),
                    (m.prototype.getV = function () {
                        return a(this.index)
                            ? this.vBuffer[this.index]
                            : l.lerp(
                                  this.first.getV(),
                                  this.second.getV(),
                                  this.ratio,
                              );
                    });
                var L = new n(),
                    F = -1,
                    B = [new r(), new r()],
                    b = [new r(), new r()];
                (m.prototype.getNormalX = function () {
                    return a(this.index)
                        ? this.normalBuffer[2 * this.index]
                        : ((L = p(this, L)), L.x);
                }),
                    (m.prototype.getNormalY = function () {
                        return a(this.index)
                            ? this.normalBuffer[2 * this.index + 1]
                            : ((L = p(this, L)), L.y);
                    });
                var z = [];
                return (
                    z.push(new m()),
                    z.push(new m()),
                    z.push(new m()),
                    z.push(new m()),
                    d(E)
                );
            },
        );
})();
