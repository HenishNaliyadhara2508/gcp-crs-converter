// We are modularizing this manually because the current modularize setting in Emscripten has some issues:
// https://github.com/kripken/emscripten/issues/5820
// In addition, When you use emcc's modularization, it still expects to export a global object called `Module`,
// which is able to be used/called before the WASM is loaded.
// The modularization below exports a promise that loads and resolves to the actual sql.js module.
// That way, this module can't be used before the WASM is finished loading.

// We are going to define a function that a user will call to start loading initializing our Sql.js library
// However, that function might be called multiple times, and on subsequent calls, we don't actually want it to instantiate a new instance of the Module
// Instead, we want to return the previously loaded module

// TODO: Make this not declare a global if used in the browser
var initSqlJsPromise = undefined;

var initSqlJs = function (moduleConfig) {
    if (initSqlJsPromise) {
        return initSqlJsPromise;
    }
    // If we're here, we've never called this function before
    initSqlJsPromise = new Promise((resolveModule, reject) => {
        // We are modularizing this manually because the current modularize setting in Emscripten has some issues:
        // https://github.com/kripken/emscripten/issues/5820

        // The way to affect the loading of emcc compiled modules is to create a variable called `Module` and add
        // properties to it, like `preRun`, `postRun`, etc
        // We are using that to get notified when the WASM has finished loading.
        // Only then will we return our promise

        // If they passed in a moduleConfig object, use that
        // Otherwise, initialize Module to the empty object
        var Module = typeof moduleConfig !== 'undefined' ? moduleConfig : {};

        // EMCC only allows for a single onAbort function (not an array of functions)
        // So if the user defined their own onAbort function, we remember it and call it
        var originalOnAbortFunction = Module['onAbort'];
        Module['onAbort'] = function (errorThatCausedAbort) {
            reject(new Error(errorThatCausedAbort));
            if (originalOnAbortFunction) {
                originalOnAbortFunction(errorThatCausedAbort);
            }
        };

        Module['postRun'] = Module['postRun'] || [];
        Module['postRun'].push(function () {
            // When Emscripted calls postRun, this promise resolves with the built Module
            resolveModule(Module);
        });

        // There is a section of code in the emcc-generated code below that looks like this:
        // (Note that this is lowercase `module`)
        // if (typeof module !== 'undefined') {
        //     module['exports'] = Module;
        // }
        // When that runs, it's going to overwrite our own modularization export efforts in shell-post.js!
        // The only way to tell emcc not to emit it is to pass the MODULARIZE=1 or MODULARIZE_INSTANCE=1 flags,
        // but that carries with it additional unnecessary baggage/bugs we don't want either.
        // So, we have three options:
        // 1) We undefine `module`
        // 2) We remember what `module['exports']` was at the beginning of this function and we restore it later
        // 3) We write a script to remove those lines of code as part of the Make process.
        //
        // Since those are the only lines of code that care about module, we will undefine it. It's the most straightforward
        // of the options, and has the side effect of reducing emcc's efforts to modify the module if its output were to change in the future.
        // That's a nice side effect since we're handling the modularization efforts ourselves
        module = undefined;

        // The emcc-generated code and shell-post.js code goes below,
        // meaning that all of it runs inside of this promise. If anything throws an exception, our promise will abort
        var aa;
        var f;
        f || (f = typeof Module !== 'undefined' ? Module : {});
        var va = function () {
            var a;
            var b = h(4);
            var c = {};
            var d = (function () {
                function a(a, b) {
                    this.fb = a;
                    this.db = b;
                    this.nb = 1;
                    this.Eb = [];
                }
                a.prototype.bind = function (a) {
                    if (!this.fb) throw 'Statement closed';
                    this.reset();
                    return Array.isArray(a) ? this.lc(a) : this.mc(a);
                };
                a.prototype.step = function () {
                    var a;
                    if (!this.fb) throw 'Statement closed';
                    this.nb = 1;
                    switch ((a = Tb(this.fb))) {
                        case c.hc:
                            return !0;
                        case c.DONE:
                            return !1;
                        default:
                            return this.db.handleError(a);
                    }
                };
                a.prototype.sc = function (a) {
                    null == a && (a = this.nb++);
                    return Ub(this.fb, a);
                };
                a.prototype.tc = function (a) {
                    null == a && (a = this.nb++);
                    return Vb(this.fb, a);
                };
                a.prototype.getBlob = function (a) {
                    var b;
                    null == a && (a = this.nb++);
                    var c = Wb(this.fb, a);
                    var d = Xb(this.fb, a);
                    var e = new Uint8Array(c);
                    for (
                        a = b = 0;
                        0 <= c ? b < c : b > c;
                        a = 0 <= c ? ++b : --b
                    )
                        e[a] = l[d + a];
                    return e;
                };
                a.prototype.get = function (a) {
                    var b, d;
                    null != a && this.bind(a) && this.step();
                    var e = [];
                    a = b = 0;
                    for (
                        d = ib(this.fb);
                        0 <= d ? b < d : b > d;
                        a = 0 <= d ? ++b : --b
                    )
                        switch (Yb(this.fb, a)) {
                            case c.fc:
                            case c.FLOAT:
                                e.push(this.sc(a));
                                break;
                            case c.ic:
                                e.push(this.tc(a));
                                break;
                            case c.Zb:
                                e.push(this.getBlob(a));
                                break;
                            default:
                                e.push(null);
                        }
                    return e;
                };
                a.prototype.getColumnNames = function () {
                    var a, b;
                    var c = [];
                    var d = (a = 0);
                    for (
                        b = ib(this.fb);
                        0 <= b ? a < b : a > b;
                        d = 0 <= b ? ++a : --a
                    )
                        c.push(Zb(this.fb, d));
                    return c;
                };
                a.prototype.getAsObject = function (a) {
                    var b, c;
                    var d = this.get(a);
                    var e = this.getColumnNames();
                    var g = {};
                    a = b = 0;
                    for (c = e.length; b < c; a = ++b) {
                        var Sb = e[a];
                        g[Sb] = d[a];
                    }
                    return g;
                };
                a.prototype.run = function (a) {
                    null != a && this.bind(a);
                    this.step();
                    return this.reset();
                };
                a.prototype.pc = function (a, b) {
                    var c;
                    null == b && (b = this.nb++);
                    a = ba(a);
                    this.Eb.push((c = ea(a)));
                    this.db.handleError(ca(this.fb, b, c, a.length - 1, 0));
                };
                a.prototype.kc = function (a, b) {
                    var c;
                    null == b && (b = this.nb++);
                    this.Eb.push((c = ea(a)));
                    this.db.handleError(Ia(this.fb, b, c, a.length, 0));
                };
                a.prototype.oc = function (a, b) {
                    null == b && (b = this.nb++);
                    this.db.handleError(
                        (a === (a | 0) ? $b : ac)(this.fb, b, a),
                    );
                };
                a.prototype.nc = function (a) {
                    null == a && (a = this.nb++);
                    Ia(this.fb, a, 0, 0, 0);
                };
                a.prototype.Qb = function (a, b) {
                    null == b && (b = this.nb++);
                    switch (typeof a) {
                        case 'string':
                            this.pc(a, b);
                            break;
                        case 'number':
                        case 'boolean':
                            this.oc(a + 0, b);
                            break;
                        case 'object':
                            if (null === a) this.nc(b);
                            else if (null != a.length) this.kc(a, b);
                            else
                                throw (
                                    'Wrong API use : tried to bind a value of an unknown type (' +
                                    a +
                                    ').'
                                );
                    }
                };
                a.prototype.mc = function (a) {
                    var b;
                    for (b in a) {
                        var c = a[b];
                        var d = bc(this.fb, b);
                        0 !== d && this.Qb(c, d);
                    }
                    return !0;
                };
                a.prototype.lc = function (a) {
                    var b, c;
                    var d = (b = 0);
                    for (c = a.length; b < c; d = ++b) {
                        var e = a[d];
                        this.Qb(e, d + 1);
                    }
                    return !0;
                };
                a.prototype.reset = function () {
                    this.freemem();
                    return cc(this.fb) === c.xb && dc(this.fb) === c.xb;
                };
                a.prototype.freemem = function () {
                    for (var a; (a = this.Eb.pop()); ) ha(a);
                    return null;
                };
                a.prototype.free = function () {
                    this.freemem();
                    var a = ec(this.fb) === c.xb;
                    delete this.db.Bb[this.fb];
                    this.fb = da;
                    return a;
                };
                return a;
            })();
            var e = (function () {
                function a(a) {
                    this.filename =
                        'dbfile_' + ((4294967295 * Math.random()) >>> 0);
                    if (null != a) {
                        var c = this.filename,
                            d = c ? n('/', c) : '/';
                        c = ia(!0, !0);
                        d = ja(d, ((void 0 !== c ? c : 438) & 4095) | 32768, 0);
                        if (a) {
                            if ('string' === typeof a) {
                                for (
                                    var e = Array(a.length),
                                        k = 0,
                                        m = a.length;
                                    k < m;
                                    ++k
                                )
                                    e[k] = a.charCodeAt(k);
                                a = e;
                            }
                            ka(d, c | 146);
                            e = p(d, 'w');
                            la(e, a, 0, a.length, 0, void 0);
                            ma(e);
                            ka(d, c);
                        }
                    }
                    this.handleError(g(this.filename, b));
                    this.db = q(b, 'i32');
                    fc(this.db);
                    this.Bb = {};
                }
                a.prototype.run = function (a, c) {
                    if (!this.db) throw 'Database closed';
                    c
                        ? ((a = this.prepare(a, c)), a.step(), a.free())
                        : this.handleError(m(this.db, a, 0, 0, b));
                    return this;
                };
                a.prototype.exec = function (a) {
                    if (!this.db) throw 'Database closed';
                    var c = na();
                    var e = oa(a) + 1;
                    var g = h(e);
                    r(a, l, g, e);
                    a = g;
                    e = h(4);
                    for (g = []; q(a, 'i8') !== da; ) {
                        pa(b);
                        pa(e);
                        this.handleError(fa(this.db, a, -1, b, e));
                        var k = q(b, 'i32');
                        a = q(e, 'i32');
                        if (k !== da) {
                            var m = new d(k, this);
                            for (k = null; m.step(); )
                                null === k &&
                                    ((k = {
                                        columns: m.getColumnNames(),
                                        values: [],
                                    }),
                                    g.push(k)),
                                    k.values.push(m.get());
                            m.free();
                        }
                    }
                    qa(c);
                    return g;
                };
                a.prototype.each = function (a, b, c, d) {
                    'function' === typeof b && ((d = c), (c = b), (b = void 0));
                    for (a = this.prepare(a, b); a.step(); ) c(a.getAsObject());
                    a.free();
                    if ('function' === typeof d) return d();
                };
                a.prototype.prepare = function (a, c) {
                    pa(b);
                    this.handleError(z(this.db, a, -1, b, da));
                    a = q(b, 'i32');
                    if (a === da) throw 'Nothing to prepare';
                    var e = new d(a, this);
                    null != c && e.bind(c);
                    return (this.Bb[a] = e);
                };
                a.prototype['export'] = function () {
                    var a;
                    var c = this.Bb;
                    for (e in c) {
                        var d = c[e];
                        d.free();
                    }
                    this.handleError(k(this.db));
                    d = this.filename;
                    var e = (e = { encoding: 'binary' });
                    e.flags = e.flags || 'r';
                    e.encoding = e.encoding || 'binary';
                    if ('utf8' !== e.encoding && 'binary' !== e.encoding)
                        throw Error(
                            'Invalid encoding type "' + e.encoding + '"',
                        );
                    c = p(d, e.flags);
                    d = ra(d).size;
                    var m = new Uint8Array(d);
                    sa(c, m, 0, d, 0);
                    'utf8' === e.encoding
                        ? (a = t(m, 0))
                        : 'binary' === e.encoding && (a = m);
                    ma(c);
                    this.handleError(g(this.filename, b));
                    this.db = q(b, 'i32');
                    return a;
                };
                a.prototype.close = function () {
                    var a;
                    var b = this.Bb;
                    for (a in b) {
                        var c = b[a];
                        c.free();
                    }
                    this.handleError(k(this.db));
                    ta('/' + this.filename);
                    return (this.db = null);
                };
                a.prototype.handleError = function (a) {
                    if (a === c.xb) return null;
                    a = hc(this.db);
                    throw Error(a);
                };
                a.prototype.getRowsModified = function () {
                    return y(this.db);
                };
                a.prototype.create_function = function (a, b) {
                    var d = ua(function (a, c, d) {
                        var e, g;
                        var k = [];
                        for (
                            e = g = 0;
                            0 <= c ? g < c : g > c;
                            e = 0 <= c ? ++g : --g
                        ) {
                            var m = q(d + 4 * e, 'i32');
                            var z = jc(m);
                            e = (function () {
                                switch (!1) {
                                    case 1 !== z:
                                        return kc;
                                    case 2 !== z:
                                        return lc;
                                    case 3 !== z:
                                        return mc;
                                    case 4 !== z:
                                        return function (a) {
                                            var b, c;
                                            var d = nc(a);
                                            var e = oc(a);
                                            a = new Uint8Array(d);
                                            for (
                                                b = c = 0;
                                                0 <= d ? c < d : c > d;
                                                b = 0 <= d ? ++c : --c
                                            )
                                                a[b] = l[e + b];
                                            return a;
                                        };
                                    default:
                                        return function () {
                                            return null;
                                        };
                                }
                            })();
                            e = e(m);
                            k.push(e);
                        }
                        if ((c = b.apply(null, k)))
                            switch (typeof c) {
                                case 'number':
                                    return pc(a, c);
                                case 'string':
                                    return qc(a, c, -1, -1);
                            }
                        else return rc(a);
                    });
                    this.handleError(
                        sc(this.db, a, b.length, c.jc, 0, d, 0, 0, 0),
                    );
                    return this;
                };
                return a;
            })();
            var g = f.cwrap('sqlite3_open', 'number', ['string', 'number']);
            var k = f.cwrap('sqlite3_close_v2', 'number', ['number']);
            var m = f.cwrap('sqlite3_exec', 'number', [
                'number',
                'string',
                'number',
                'number',
                'number',
            ]);
            f.cwrap('sqlite3_free', '', ['number']);
            var y = f.cwrap('sqlite3_changes', 'number', ['number']);
            var z = f.cwrap('sqlite3_prepare_v2', 'number', [
                'number',
                'string',
                'number',
                'number',
                'number',
            ]);
            var fa = f.cwrap('sqlite3_prepare_v2', 'number', [
                'number',
                'number',
                'number',
                'number',
                'number',
            ]);
            var ca = f.cwrap('sqlite3_bind_text', 'number', [
                'number',
                'number',
                'number',
                'number',
                'number',
            ]);
            var Ia = f.cwrap('sqlite3_bind_blob', 'number', [
                'number',
                'number',
                'number',
                'number',
                'number',
            ]);
            var ac = f.cwrap('sqlite3_bind_double', 'number', [
                'number',
                'number',
                'number',
            ]);
            var $b = f.cwrap('sqlite3_bind_int', 'number', [
                'number',
                'number',
                'number',
            ]);
            var bc = f.cwrap('sqlite3_bind_parameter_index', 'number', [
                'number',
                'string',
            ]);
            var Tb = f.cwrap('sqlite3_step', 'number', ['number']);
            var hc = f.cwrap('sqlite3_errmsg', 'string', ['number']);
            var ib = f.cwrap('sqlite3_data_count', 'number', ['number']);
            var Ub = f.cwrap('sqlite3_column_double', 'number', [
                'number',
                'number',
            ]);
            var Vb = f.cwrap('sqlite3_column_text', 'string', [
                'number',
                'number',
            ]);
            var Xb = f.cwrap('sqlite3_column_blob', 'number', [
                'number',
                'number',
            ]);
            var Wb = f.cwrap('sqlite3_column_bytes', 'number', [
                'number',
                'number',
            ]);
            var Yb = f.cwrap('sqlite3_column_type', 'number', [
                'number',
                'number',
            ]);
            var Zb = f.cwrap('sqlite3_column_name', 'string', [
                'number',
                'number',
            ]);
            var dc = f.cwrap('sqlite3_reset', 'number', ['number']);
            var cc = f.cwrap('sqlite3_clear_bindings', 'number', ['number']);
            var ec = f.cwrap('sqlite3_finalize', 'number', ['number']);
            var sc = f.cwrap(
                'sqlite3_create_function_v2',
                'number',
                'number string number number number number number number number'.split(
                    ' ',
                ),
            );
            var jc = f.cwrap('sqlite3_value_type', 'number', ['number']);
            var nc = f.cwrap('sqlite3_value_bytes', 'number', ['number']);
            var mc = f.cwrap('sqlite3_value_text', 'string', ['number']);
            var kc = f.cwrap('sqlite3_value_int', 'number', ['number']);
            var oc = f.cwrap('sqlite3_value_blob', 'number', ['number']);
            var lc = f.cwrap('sqlite3_value_double', 'number', ['number']);
            var pc = f.cwrap('sqlite3_result_double', '', ['number', 'number']);
            var rc = f.cwrap('sqlite3_result_null', '', ['number']);
            var qc = f.cwrap('sqlite3_result_text', '', [
                'number',
                'string',
                'number',
                'number',
            ]);
            var fc = f.cwrap('RegisterExtensionFunctions', 'number', [
                'number',
            ]);
            this.SQL = { Database: e };
            for (a in this.SQL) f[a] = this.SQL[a];
            var da = 0;
            c.xb = 0;
            c.we = 1;
            c.Pe = 2;
            c.Ze = 3;
            c.Cc = 4;
            c.Ec = 5;
            c.Se = 6;
            c.NOMEM = 7;
            c.bf = 8;
            c.Qe = 9;
            c.Re = 10;
            c.Hc = 11;
            c.NOTFOUND = 12;
            c.Oe = 13;
            c.Fc = 14;
            c.$e = 15;
            c.EMPTY = 16;
            c.cf = 17;
            c.df = 18;
            c.Gc = 19;
            c.Te = 20;
            c.Ue = 21;
            c.Ve = 22;
            c.Dc = 23;
            c.Ne = 24;
            c.af = 25;
            c.We = 26;
            c.Xe = 27;
            c.ef = 28;
            c.hc = 100;
            c.DONE = 101;
            c.fc = 1;
            c.FLOAT = 2;
            c.ic = 3;
            c.Zb = 4;
            c.Ye = 5;
            c.jc = 1;
        }.bind(this);
        f.preRun = f.preRun || [];
        f.preRun.push(va);
        var wa = {},
            u;
        for (u in f) f.hasOwnProperty(u) && (wa[u] = f[u]);
        f.arguments = [];
        f.thisProgram = './this.program';
        f.quit = function (a, b) {
            throw b;
        };
        f.preRun = [];
        f.postRun = [];
        var v = !1,
            w = !1,
            x = !1,
            xa = !1;
        v = 'object' === typeof window;
        w = 'function' === typeof importScripts;
        x =
            'object' === typeof process &&
            'function' === typeof require &&
            !v &&
            !w;
        xa = !v && !x && !w;
        var A = '';
        if (x) {
            A = __dirname + '/';
            var ya, za;
            f.read = function (a, b) {
                ya || (ya = require('fs'));
                za || (za = require('path'));
                a = za.normalize(a);
                a = ya.readFileSync(a);
                return b ? a : a.toString();
            };
            f.readBinary = function (a) {
                a = f.read(a, !0);
                a.buffer || (a = new Uint8Array(a));
                assert(a.buffer);
                return a;
            };
            1 < process.argv.length &&
                (f.thisProgram = process.argv[1].replace(/\\/g, '/'));
            f.arguments = process.argv.slice(2);
            'undefined' !== typeof module && (module.exports = f);
            process.on('unhandledRejection', B);
            f.quit = function (a) {
                process.exit(a);
            };
            f.inspect = function () {
                return '[Emscripten Module object]';
            };
        } else if (xa)
            'undefined' != typeof read &&
                (f.read = function (a) {
                    return read(a);
                }),
                (f.readBinary = function (a) {
                    if ('function' === typeof readbuffer)
                        return new Uint8Array(readbuffer(a));
                    a = read(a, 'binary');
                    assert('object' === typeof a);
                    return a;
                }),
                'undefined' != typeof scriptArgs
                    ? (f.arguments = scriptArgs)
                    : 'undefined' != typeof arguments &&
                      (f.arguments = arguments),
                'function' === typeof quit &&
                    (f.quit = function (a) {
                        quit(a);
                    });
        else if (v || w)
            w
                ? (A = self.location.href)
                : document.currentScript && (A = document.currentScript.src),
                (A =
                    0 !== A.indexOf('blob:')
                        ? A.substr(0, A.lastIndexOf('/') + 1)
                        : ''),
                (f.read = function (a) {
                    var b = new XMLHttpRequest();
                    b.open('GET', a, !1);
                    b.send(null);
                    return b.responseText;
                }),
                w &&
                    (f.readBinary = function (a) {
                        var b = new XMLHttpRequest();
                        b.open('GET', a, !1);
                        b.responseType = 'arraybuffer';
                        b.send(null);
                        return new Uint8Array(b.response);
                    }),
                (f.readAsync = function (a, b, c) {
                    var d = new XMLHttpRequest();
                    d.open('GET', a, !0);
                    d.responseType = 'arraybuffer';
                    d.onload = function () {
                        200 == d.status || (0 == d.status && d.response)
                            ? b(d.response)
                            : c();
                    };
                    d.onerror = c;
                    d.send(null);
                }),
                (f.setWindowTitle = function (a) {
                    document.title = a;
                });
        var Aa =
                f.print ||
                ('undefined' !== typeof console
                    ? console.log.bind(console)
                    : 'undefined' !== typeof print
                      ? print
                      : null),
            C =
                f.printErr ||
                ('undefined' !== typeof printErr
                    ? printErr
                    : ('undefined' !== typeof console &&
                          console.warn.bind(console)) ||
                      Aa);
        for (u in wa) wa.hasOwnProperty(u) && (f[u] = wa[u]);
        wa = void 0;
        function Ba(a) {
            var b = D[Ca >> 2];
            a = (b + a + 15) & -16;
            if (a <= Da()) D[Ca >> 2] = a;
            else if (!Ea(a)) return 0;
            return b;
        }
        var Fa = {
                'f64-rem': function (a, b) {
                    return a % b;
                },
                debugger: function () {
                    debugger;
                },
            },
            Ga = 1,
            E = Array(64);
        function ua(a) {
            for (var b = 0; 64 > b; b++) if (!E[b]) return (E[b] = a), Ga + b;
            throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
        }
        'object' !== typeof WebAssembly && C('no native wasm support detected');
        function q(a, b) {
            b = b || 'i8';
            '*' === b.charAt(b.length - 1) && (b = 'i32');
            switch (b) {
                case 'i1':
                    return l[a >> 0];
                case 'i8':
                    return l[a >> 0];
                case 'i16':
                    return Ha[a >> 1];
                case 'i32':
                    return D[a >> 2];
                case 'i64':
                    return D[a >> 2];
                case 'float':
                    return Ja[a >> 2];
                case 'double':
                    return Ka[a >> 3];
                default:
                    B('invalid type for getValue: ' + b);
            }
            return null;
        }
        var La,
            Ma = !1;
        function assert(a, b) {
            a || B('Assertion failed: ' + b);
        }
        function Na(a) {
            var b = f['_' + a];
            assert(
                b,
                'Cannot call unknown function ' +
                    a +
                    ', make sure it is exported',
            );
            return b;
        }
        function Oa(a, b, c, d) {
            var e = {
                    string: function (a) {
                        var b = 0;
                        if (null !== a && void 0 !== a && 0 !== a) {
                            var c = (a.length << 2) + 1;
                            b = h(c);
                            r(a, F, b, c);
                        }
                        return b;
                    },
                    array: function (a) {
                        var b = h(a.length);
                        l.set(a, b);
                        return b;
                    },
                },
                g = Na(a),
                k = [];
            a = 0;
            if (d)
                for (var m = 0; m < d.length; m++) {
                    var y = e[c[m]];
                    y
                        ? (0 === a && (a = na()), (k[m] = y(d[m])))
                        : (k[m] = d[m]);
                }
            c = g.apply(null, k);
            c = (function (a) {
                return 'string' === b ? G(a) : 'boolean' === b ? !!a : a;
            })(c);
            0 !== a && qa(a);
            return c;
        }
        function pa(a) {
            var b = 'i32';
            '*' === b.charAt(b.length - 1) && (b = 'i32');
            switch (b) {
                case 'i1':
                    l[a >> 0] = 0;
                    break;
                case 'i8':
                    l[a >> 0] = 0;
                    break;
                case 'i16':
                    Ha[a >> 1] = 0;
                    break;
                case 'i32':
                    D[a >> 2] = 0;
                    break;
                case 'i64':
                    aa = [0, 1 <= +Pa(0) ? ~~+Qa(0) >>> 0 : 0];
                    D[a >> 2] = aa[0];
                    D[(a + 4) >> 2] = aa[1];
                    break;
                case 'float':
                    Ja[a >> 2] = 0;
                    break;
                case 'double':
                    Ka[a >> 3] = 0;
                    break;
                default:
                    B('invalid type for setValue: ' + b);
            }
        }
        var Ra = 0,
            Sa = 3;
        function ea(a) {
            var b = Ra;
            if ('number' === typeof a) {
                var c = !0;
                var d = a;
            } else (c = !1), (d = a.length);
            b = b == Sa ? e : [Ta, h, Ba][b](Math.max(d, 1));
            if (c) {
                var e = b;
                assert(0 == (b & 3));
                for (a = b + (d & -4); e < a; e += 4) D[e >> 2] = 0;
                for (a = b + d; e < a; ) l[e++ >> 0] = 0;
                return b;
            }
            a.subarray || a.slice ? F.set(a, b) : F.set(new Uint8Array(a), b);
            return b;
        }
        var Ua =
            'undefined' !== typeof TextDecoder
                ? new TextDecoder('utf8')
                : void 0;
        function t(a, b, c) {
            var d = b + c;
            for (c = b; a[c] && !(c >= d); ) ++c;
            if (16 < c - b && a.subarray && Ua)
                return Ua.decode(a.subarray(b, c));
            for (d = ''; b < c; ) {
                var e = a[b++];
                if (e & 128) {
                    var g = a[b++] & 63;
                    if (192 == (e & 224))
                        d += String.fromCharCode(((e & 31) << 6) | g);
                    else {
                        var k = a[b++] & 63;
                        e =
                            224 == (e & 240)
                                ? ((e & 15) << 12) | (g << 6) | k
                                : ((e & 7) << 18) |
                                  (g << 12) |
                                  (k << 6) |
                                  (a[b++] & 63);
                        65536 > e
                            ? (d += String.fromCharCode(e))
                            : ((e -= 65536),
                              (d += String.fromCharCode(
                                  55296 | (e >> 10),
                                  56320 | (e & 1023),
                              )));
                    }
                } else d += String.fromCharCode(e);
            }
            return d;
        }
        function G(a) {
            return a ? t(F, a, void 0) : '';
        }
        function r(a, b, c, d) {
            if (!(0 < d)) return 0;
            var e = c;
            d = c + d - 1;
            for (var g = 0; g < a.length; ++g) {
                var k = a.charCodeAt(g);
                if (55296 <= k && 57343 >= k) {
                    var m = a.charCodeAt(++g);
                    k = (65536 + ((k & 1023) << 10)) | (m & 1023);
                }
                if (127 >= k) {
                    if (c >= d) break;
                    b[c++] = k;
                } else {
                    if (2047 >= k) {
                        if (c + 1 >= d) break;
                        b[c++] = 192 | (k >> 6);
                    } else {
                        if (65535 >= k) {
                            if (c + 2 >= d) break;
                            b[c++] = 224 | (k >> 12);
                        } else {
                            if (c + 3 >= d) break;
                            b[c++] = 240 | (k >> 18);
                            b[c++] = 128 | ((k >> 12) & 63);
                        }
                        b[c++] = 128 | ((k >> 6) & 63);
                    }
                    b[c++] = 128 | (k & 63);
                }
            }
            b[c] = 0;
            return c - e;
        }
        function oa(a) {
            for (var b = 0, c = 0; c < a.length; ++c) {
                var d = a.charCodeAt(c);
                55296 <= d &&
                    57343 >= d &&
                    (d =
                        (65536 + ((d & 1023) << 10)) |
                        (a.charCodeAt(++c) & 1023));
                127 >= d
                    ? ++b
                    : (b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4);
            }
            return b;
        }
        'undefined' !== typeof TextDecoder && new TextDecoder('utf-16le');
        function Va(a) {
            return a.replace(/__Z[\w\d_]+/g, function (a) {
                return a === a ? a : a + ' [' + a + ']';
            });
        }
        function Wa(a) {
            0 < a % 65536 && (a += 65536 - (a % 65536));
            return a;
        }
        var buffer, l, F, Ha, D, Ja, Ka;
        function Xa() {
            f.HEAP8 = l = new Int8Array(buffer);
            f.HEAP16 = Ha = new Int16Array(buffer);
            f.HEAP32 = D = new Int32Array(buffer);
            f.HEAPU8 = F = new Uint8Array(buffer);
            f.HEAPU16 = new Uint16Array(buffer);
            f.HEAPU32 = new Uint32Array(buffer);
            f.HEAPF32 = Ja = new Float32Array(buffer);
            f.HEAPF64 = Ka = new Float64Array(buffer);
        }
        var Ca = 60128,
            Ya = f.TOTAL_MEMORY || 16777216;
        5242880 > Ya &&
            C(
                'TOTAL_MEMORY should be larger than TOTAL_STACK, was ' +
                    Ya +
                    '! (TOTAL_STACK=5242880)',
            );
        f.buffer
            ? (buffer = f.buffer)
            : 'object' === typeof WebAssembly &&
                'function' === typeof WebAssembly.Memory
              ? ((La = new WebAssembly.Memory({ initial: Ya / 65536 })),
                (buffer = La.buffer))
              : (buffer = new ArrayBuffer(Ya));
        Xa();
        D[Ca >> 2] = 5303264;
        function Za(a) {
            for (; 0 < a.length; ) {
                var b = a.shift();
                if ('function' == typeof b) b();
                else {
                    var c = b.rc;
                    'number' === typeof c
                        ? void 0 === b.Fb
                            ? f.dynCall_v(c)
                            : f.dynCall_vi(c, b.Fb)
                        : c(void 0 === b.Fb ? null : b.Fb);
                }
            }
        }
        var $a = [],
            ab = [],
            bb = [],
            cb = [],
            db = !1;
        function eb() {
            var a = f.preRun.shift();
            $a.unshift(a);
        }
        var Pa = Math.abs,
            Qa = Math.ceil,
            H = 0,
            fb = null,
            gb = null;
        f.preloadedImages = {};
        f.preloadedAudios = {};
        function hb() {
            var a = I;
            return String.prototype.startsWith
                ? a.startsWith('data:application/octet-stream;base64,')
                : 0 === a.indexOf('data:application/octet-stream;base64,');
        }
        var I = 'sql-wasm.wasm';
        if (!hb()) {
            var jb = I;
            I = f.locateFile ? f.locateFile(jb, A) : A + jb;
        }
        function kb() {
            try {
                if (f.wasmBinary) return new Uint8Array(f.wasmBinary);
                if (f.readBinary) return f.readBinary(I);
                throw 'both async and sync fetching of the wasm failed';
            } catch (a) {
                B(a);
            }
        }
        function lb() {
            return f.wasmBinary || (!v && !w) || 'function' !== typeof fetch
                ? new Promise(function (a) {
                      a(kb());
                  })
                : fetch(I, { credentials: 'same-origin' })
                      .then(function (a) {
                          if (!a.ok)
                              throw (
                                  "failed to load wasm binary file at '" +
                                  I +
                                  "'"
                              );
                          return a.arrayBuffer();
                      })
                      .catch(function () {
                          return kb();
                      });
        }
        function mb(a) {
            function b(a) {
                f.asm = a.exports;
                H--;
                f.monitorRunDependencies && f.monitorRunDependencies(H);
                0 == H &&
                    (null !== fb && (clearInterval(fb), (fb = null)),
                    gb && ((a = gb), (gb = null), a()));
            }
            function c(a) {
                b(a.instance);
            }
            function d(a) {
                lb()
                    .then(function (a) {
                        return WebAssembly.instantiate(a, e);
                    })
                    .then(a, function (a) {
                        C('failed to asynchronously prepare wasm: ' + a);
                        B(a);
                    });
            }
            var e = {
                env: a,
                global: { NaN: NaN, Infinity: Infinity },
                'global.Math': Math,
                asm2wasm: Fa,
            };
            H++;
            f.monitorRunDependencies && f.monitorRunDependencies(H);
            if (f.instantiateWasm)
                try {
                    return f.instantiateWasm(e, b);
                } catch (g) {
                    return (
                        C(
                            'Module.instantiateWasm callback failed with error: ' +
                                g,
                        ),
                        !1
                    );
                }
            f.wasmBinary ||
            'function' !== typeof WebAssembly.instantiateStreaming ||
            hb() ||
            'function' !== typeof fetch
                ? d(c)
                : WebAssembly.instantiateStreaming(
                      fetch(I, { credentials: 'same-origin' }),
                      e,
                  ).then(c, function (a) {
                      C('wasm streaming compile failed: ' + a);
                      C('falling back to ArrayBuffer instantiation');
                      d(c);
                  });
            return {};
        }
        f.asm = function (a, b) {
            b.memory = La;
            b.table = new WebAssembly.Table({
                initial: 2560,
                maximum: 2560,
                element: 'anyfunc',
            });
            b.__memory_base = 1024;
            b.__table_base = 0;
            return mb(b);
        };
        ab.push({
            rc: function () {
                nb();
            },
        });
        var J = {};
        function ob(a) {
            if (ob.rb) {
                var b = D[a >> 2];
                var c = D[b >> 2];
            } else
                (ob.rb = !0),
                    (J.USER = J.LOGNAME = 'web_user'),
                    (J.PATH = '/'),
                    (J.PWD = '/'),
                    (J.HOME = '/home/web_user'),
                    (J.LANG = 'C.UTF-8'),
                    (J._ = f.thisProgram),
                    (c = db ? Ta(1024) : Ba(1024)),
                    (b = db ? Ta(256) : Ba(256)),
                    (D[b >> 2] = c),
                    (D[a >> 2] = b);
            a = [];
            var d = 0,
                e;
            for (e in J)
                if ('string' === typeof J[e]) {
                    var g = e + '=' + J[e];
                    a.push(g);
                    d += g.length;
                }
            if (1024 < d)
                throw Error('Environment size exceeded TOTAL_ENV_SIZE!');
            for (e = 0; e < a.length; e++) {
                d = g = a[e];
                for (var k = c, m = 0; m < d.length; ++m)
                    l[k++ >> 0] = d.charCodeAt(m);
                l[k >> 0] = 0;
                D[(b + 4 * e) >> 2] = c;
                c += g.length + 1;
            }
            D[(b + 4 * a.length) >> 2] = 0;
        }
        function pb(a) {
            f.___errno_location && (D[f.___errno_location() >> 2] = a);
            return a;
        }
        function qb(a, b) {
            for (var c = 0, d = a.length - 1; 0 <= d; d--) {
                var e = a[d];
                '.' === e
                    ? a.splice(d, 1)
                    : '..' === e
                      ? (a.splice(d, 1), c++)
                      : c && (a.splice(d, 1), c--);
            }
            if (b) for (; c; c--) a.unshift('..');
            return a;
        }
        function rb(a) {
            var b = '/' === a.charAt(0),
                c = '/' === a.substr(-1);
            (a = qb(
                a.split('/').filter(function (a) {
                    return !!a;
                }),
                !b,
            ).join('/')) ||
                b ||
                (a = '.');
            a && c && (a += '/');
            return (b ? '/' : '') + a;
        }
        function sb(a) {
            var b =
                /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                    .exec(a)
                    .slice(1);
            a = b[0];
            b = b[1];
            if (!a && !b) return '.';
            b && (b = b.substr(0, b.length - 1));
            return a + b;
        }
        function tb(a) {
            if ('/' === a) return '/';
            var b = a.lastIndexOf('/');
            return -1 === b ? a : a.substr(b + 1);
        }
        function ub() {
            var a = Array.prototype.slice.call(arguments, 0);
            return rb(a.join('/'));
        }
        function n(a, b) {
            return rb(a + '/' + b);
        }
        function vb() {
            for (
                var a = '', b = !1, c = arguments.length - 1;
                -1 <= c && !b;
                c--
            ) {
                b = 0 <= c ? arguments[c] : '/';
                if ('string' !== typeof b)
                    throw new TypeError(
                        'Arguments to path.resolve must be strings',
                    );
                if (!b) return '';
                a = b + '/' + a;
                b = '/' === b.charAt(0);
            }
            a = qb(
                a.split('/').filter(function (a) {
                    return !!a;
                }),
                !b,
            ).join('/');
            return (b ? '/' : '') + a || '.';
        }
        var wb = [];
        function xb(a, b) {
            wb[a] = { input: [], output: [], ub: b };
            yb(a, zb);
        }
        var zb = {
                open: function (a) {
                    var b = wb[a.node.rdev];
                    if (!b) throw new K(L.Cb);
                    a.tty = b;
                    a.seekable = !1;
                },
                close: function (a) {
                    a.tty.ub.flush(a.tty);
                },
                flush: function (a) {
                    a.tty.ub.flush(a.tty);
                },
                read: function (a, b, c, d) {
                    if (!a.tty || !a.tty.ub.Xb) throw new K(L.Ob);
                    for (var e = 0, g = 0; g < d; g++) {
                        try {
                            var k = a.tty.ub.Xb(a.tty);
                        } catch (m) {
                            throw new K(L.Lb);
                        }
                        if (void 0 === k && 0 === e) throw new K(L.ac);
                        if (null === k || void 0 === k) break;
                        e++;
                        b[c + g] = k;
                    }
                    e && (a.node.timestamp = Date.now());
                    return e;
                },
                write: function (a, b, c, d) {
                    if (!a.tty || !a.tty.ub.Ib) throw new K(L.Ob);
                    try {
                        for (var e = 0; e < d; e++)
                            a.tty.ub.Ib(a.tty, b[c + e]);
                    } catch (g) {
                        throw new K(L.Lb);
                    }
                    d && (a.node.timestamp = Date.now());
                    return e;
                },
            },
            Ab = {
                Xb: function (a) {
                    if (!a.input.length) {
                        var b = null;
                        if (x) {
                            var c = new Buffer(256),
                                d = 0,
                                e = process.stdin.fd;
                            if ('win32' != process.platform) {
                                var g = !1;
                                try {
                                    (e = fs.openSync('/dev/stdin', 'r')),
                                        (g = !0);
                                } catch (k) {}
                            }
                            try {
                                d = fs.readSync(e, c, 0, 256, null);
                            } catch (k) {
                                if (-1 != k.toString().indexOf('EOF')) d = 0;
                                else throw k;
                            }
                            g && fs.closeSync(e);
                            0 < d
                                ? (b = c.slice(0, d).toString('utf-8'))
                                : (b = null);
                        } else
                            'undefined' != typeof window &&
                            'function' == typeof window.prompt
                                ? ((b = window.prompt('Input: ')),
                                  null !== b && (b += '\n'))
                                : 'function' == typeof readline &&
                                  ((b = readline()), null !== b && (b += '\n'));
                        if (!b) return null;
                        a.input = ba(b, !0);
                    }
                    return a.input.shift();
                },
                Ib: function (a, b) {
                    null === b || 10 === b
                        ? (Aa(t(a.output, 0)), (a.output = []))
                        : 0 != b && a.output.push(b);
                },
                flush: function (a) {
                    a.output &&
                        0 < a.output.length &&
                        (Aa(t(a.output, 0)), (a.output = []));
                },
            },
            Bb = {
                Ib: function (a, b) {
                    null === b || 10 === b
                        ? (C(t(a.output, 0)), (a.output = []))
                        : 0 != b && a.output.push(b);
                },
                flush: function (a) {
                    a.output &&
                        0 < a.output.length &&
                        (C(t(a.output, 0)), (a.output = []));
                },
            },
            M = {
                mb: null,
                jb: function () {
                    return M.createNode(null, '/', 16895, 0);
                },
                createNode: function (a, b, c, d) {
                    if (24576 === (c & 61440) || 4096 === (c & 61440))
                        throw new K(L.dc);
                    M.mb ||
                        (M.mb = {
                            dir: {
                                node: {
                                    lb: M.ab.lb,
                                    hb: M.ab.hb,
                                    lookup: M.ab.lookup,
                                    vb: M.ab.vb,
                                    rename: M.ab.rename,
                                    unlink: M.ab.unlink,
                                    rmdir: M.ab.rmdir,
                                    readdir: M.ab.readdir,
                                    symlink: M.ab.symlink,
                                },
                                stream: { ob: M.cb.ob },
                            },
                            file: {
                                node: { lb: M.ab.lb, hb: M.ab.hb },
                                stream: {
                                    ob: M.cb.ob,
                                    read: M.cb.read,
                                    write: M.cb.write,
                                    Pb: M.cb.Pb,
                                    zb: M.cb.zb,
                                    Ab: M.cb.Ab,
                                },
                            },
                            link: {
                                node: {
                                    lb: M.ab.lb,
                                    hb: M.ab.hb,
                                    readlink: M.ab.readlink,
                                },
                                stream: {},
                            },
                            Sb: {
                                node: { lb: M.ab.lb, hb: M.ab.hb },
                                stream: Cb,
                            },
                        });
                    c = Db(a, b, c, d);
                    N(c.mode)
                        ? ((c.ab = M.mb.dir.node),
                          (c.cb = M.mb.dir.stream),
                          (c.bb = {}))
                        : 32768 === (c.mode & 61440)
                          ? ((c.ab = M.mb.file.node),
                            (c.cb = M.mb.file.stream),
                            (c.gb = 0),
                            (c.bb = null))
                          : 40960 === (c.mode & 61440)
                            ? ((c.ab = M.mb.link.node),
                              (c.cb = M.mb.link.stream))
                            : 8192 === (c.mode & 61440) &&
                              ((c.ab = M.mb.Sb.node), (c.cb = M.mb.Sb.stream));
                    c.timestamp = Date.now();
                    a && (a.bb[b] = c);
                    return c;
                },
                ff: function (a) {
                    if (a.bb && a.bb.subarray) {
                        for (var b = [], c = 0; c < a.gb; ++c) b.push(a.bb[c]);
                        return b;
                    }
                    return a.bb;
                },
                gf: function (a) {
                    return a.bb
                        ? a.bb.subarray
                            ? a.bb.subarray(0, a.gb)
                            : new Uint8Array(a.bb)
                        : new Uint8Array();
                },
                Tb: function (a, b) {
                    var c = a.bb ? a.bb.length : 0;
                    c >= b ||
                        ((b = Math.max(b, (c * (1048576 > c ? 2 : 1.125)) | 0)),
                        0 != c && (b = Math.max(b, 256)),
                        (c = a.bb),
                        (a.bb = new Uint8Array(b)),
                        0 < a.gb && a.bb.set(c.subarray(0, a.gb), 0));
                },
                yc: function (a, b) {
                    if (a.gb != b)
                        if (0 == b) (a.bb = null), (a.gb = 0);
                        else {
                            if (!a.bb || a.bb.subarray) {
                                var c = a.bb;
                                a.bb = new Uint8Array(new ArrayBuffer(b));
                                c && a.bb.set(c.subarray(0, Math.min(b, a.gb)));
                            } else if ((a.bb || (a.bb = []), a.bb.length > b))
                                a.bb.length = b;
                            else for (; a.bb.length < b; ) a.bb.push(0);
                            a.gb = b;
                        }
                },
                ab: {
                    lb: function (a) {
                        var b = {};
                        b.dev = 8192 === (a.mode & 61440) ? a.id : 1;
                        b.ino = a.id;
                        b.mode = a.mode;
                        b.nlink = 1;
                        b.uid = 0;
                        b.gid = 0;
                        b.rdev = a.rdev;
                        N(a.mode)
                            ? (b.size = 4096)
                            : 32768 === (a.mode & 61440)
                              ? (b.size = a.gb)
                              : 40960 === (a.mode & 61440)
                                ? (b.size = a.link.length)
                                : (b.size = 0);
                        b.atime = new Date(a.timestamp);
                        b.mtime = new Date(a.timestamp);
                        b.ctime = new Date(a.timestamp);
                        b.pb = 4096;
                        b.blocks = Math.ceil(b.size / b.pb);
                        return b;
                    },
                    hb: function (a, b) {
                        void 0 !== b.mode && (a.mode = b.mode);
                        void 0 !== b.timestamp && (a.timestamp = b.timestamp);
                        void 0 !== b.size && M.yc(a, b.size);
                    },
                    lookup: function () {
                        throw Eb[L.bc];
                    },
                    vb: function (a, b, c, d) {
                        return M.createNode(a, b, c, d);
                    },
                    rename: function (a, b, c) {
                        if (N(a.mode)) {
                            try {
                                var d = O(b, c);
                            } catch (g) {}
                            if (d) for (var e in d.bb) throw new K(L.Nb);
                        }
                        delete a.parent.bb[a.name];
                        a.name = c;
                        b.bb[c] = a;
                        a.parent = b;
                    },
                    unlink: function (a, b) {
                        delete a.bb[b];
                    },
                    rmdir: function (a, b) {
                        var c = O(a, b),
                            d;
                        for (d in c.bb) throw new K(L.Nb);
                        delete a.bb[b];
                    },
                    readdir: function (a) {
                        var b = ['.', '..'],
                            c;
                        for (c in a.bb) a.bb.hasOwnProperty(c) && b.push(c);
                        return b;
                    },
                    symlink: function (a, b, c) {
                        a = M.createNode(a, b, 41471, 0);
                        a.link = c;
                        return a;
                    },
                    readlink: function (a) {
                        if (40960 !== (a.mode & 61440)) throw new K(L.ib);
                        return a.link;
                    },
                },
                cb: {
                    read: function (a, b, c, d, e) {
                        var g = a.node.bb;
                        if (e >= a.node.gb) return 0;
                        a = Math.min(a.node.gb - e, d);
                        if (8 < a && g.subarray) b.set(g.subarray(e, e + a), c);
                        else for (d = 0; d < a; d++) b[c + d] = g[e + d];
                        return a;
                    },
                    write: function (a, b, c, d, e, g) {
                        g = !1;
                        if (!d) return 0;
                        a = a.node;
                        a.timestamp = Date.now();
                        if (b.subarray && (!a.bb || a.bb.subarray)) {
                            if (g)
                                return (
                                    (a.bb = b.subarray(c, c + d)), (a.gb = d)
                                );
                            if (0 === a.gb && 0 === e)
                                return (
                                    (a.bb = new Uint8Array(
                                        b.subarray(c, c + d),
                                    )),
                                    (a.gb = d)
                                );
                            if (e + d <= a.gb)
                                return a.bb.set(b.subarray(c, c + d), e), d;
                        }
                        M.Tb(a, e + d);
                        if (a.bb.subarray && b.subarray)
                            a.bb.set(b.subarray(c, c + d), e);
                        else for (g = 0; g < d; g++) a.bb[e + g] = b[c + g];
                        a.gb = Math.max(a.gb, e + d);
                        return d;
                    },
                    ob: function (a, b, c) {
                        1 === c
                            ? (b += a.position)
                            : 2 === c &&
                              32768 === (a.node.mode & 61440) &&
                              (b += a.node.gb);
                        if (0 > b) throw new K(L.ib);
                        return b;
                    },
                    Pb: function (a, b, c) {
                        M.Tb(a.node, b + c);
                        a.node.gb = Math.max(a.node.gb, b + c);
                    },
                    zb: function (a, b, c, d, e, g, k) {
                        if (32768 !== (a.node.mode & 61440)) throw new K(L.Cb);
                        c = a.node.bb;
                        if (
                            k & 2 ||
                            (c.buffer !== b && c.buffer !== b.buffer)
                        ) {
                            if (0 < e || e + d < a.node.gb)
                                c.subarray
                                    ? (c = c.subarray(e, e + d))
                                    : (c = Array.prototype.slice.call(
                                          c,
                                          e,
                                          e + d,
                                      ));
                            a = !0;
                            d = Ta(d);
                            if (!d) throw new K(L.Mb);
                            b.set(c, d);
                        } else (a = !1), (d = c.byteOffset);
                        return { xc: d, Db: a };
                    },
                    Ab: function (a, b, c, d, e) {
                        if (32768 !== (a.node.mode & 61440)) throw new K(L.Cb);
                        if (e & 2) return 0;
                        M.cb.write(a, b, 0, d, c, !1);
                        return 0;
                    },
                },
            },
            P = {
                yb: !1,
                Ac: function () {
                    P.yb = !!process.platform.match(/^win/);
                    var a = process.binding('constants');
                    a.fs && (a = a.fs);
                    P.Ub = {
                        1024: a.O_APPEND,
                        64: a.O_CREAT,
                        128: a.O_EXCL,
                        0: a.O_RDONLY,
                        2: a.O_RDWR,
                        4096: a.O_SYNC,
                        512: a.O_TRUNC,
                        1: a.O_WRONLY,
                    };
                },
                Rb: function (a) {
                    return Buffer.rb ? Buffer.from(a) : new Buffer(a);
                },
                jb: function (a) {
                    assert(x);
                    return P.createNode(null, '/', P.Wb(a.Hb.root), 0);
                },
                createNode: function (a, b, c) {
                    if (!N(c) && 32768 !== (c & 61440) && 40960 !== (c & 61440))
                        throw new K(L.ib);
                    a = Db(a, b, c);
                    a.ab = P.ab;
                    a.cb = P.cb;
                    return a;
                },
                Wb: function (a) {
                    try {
                        var b = fs.lstatSync(a);
                        P.yb && (b.mode = b.mode | ((b.mode & 292) >> 2));
                    } catch (c) {
                        if (!c.code) throw c;
                        throw new K(L[c.code]);
                    }
                    return b.mode;
                },
                kb: function (a) {
                    for (var b = []; a.parent !== a; )
                        b.push(a.name), (a = a.parent);
                    b.push(a.jb.Hb.root);
                    b.reverse();
                    return ub.apply(null, b);
                },
                qc: function (a) {
                    a &= -2656257;
                    var b = 0,
                        c;
                    for (c in P.Ub) a & c && ((b |= P.Ub[c]), (a ^= c));
                    if (a) throw new K(L.ib);
                    return b;
                },
                ab: {
                    lb: function (a) {
                        a = P.kb(a);
                        try {
                            var b = fs.lstatSync(a);
                        } catch (c) {
                            if (!c.code) throw c;
                            throw new K(L[c.code]);
                        }
                        P.yb && !b.pb && (b.pb = 4096);
                        P.yb &&
                            !b.blocks &&
                            (b.blocks = ((b.size + b.pb - 1) / b.pb) | 0);
                        return {
                            dev: b.dev,
                            ino: b.ino,
                            mode: b.mode,
                            nlink: b.nlink,
                            uid: b.uid,
                            gid: b.gid,
                            rdev: b.rdev,
                            size: b.size,
                            atime: b.atime,
                            mtime: b.mtime,
                            ctime: b.ctime,
                            pb: b.pb,
                            blocks: b.blocks,
                        };
                    },
                    hb: function (a, b) {
                        var c = P.kb(a);
                        try {
                            void 0 !== b.mode &&
                                (fs.chmodSync(c, b.mode), (a.mode = b.mode)),
                                void 0 !== b.size && fs.truncateSync(c, b.size);
                        } catch (d) {
                            if (!d.code) throw d;
                            throw new K(L[d.code]);
                        }
                    },
                    lookup: function (a, b) {
                        var c = n(P.kb(a), b);
                        c = P.Wb(c);
                        return P.createNode(a, b, c);
                    },
                    vb: function (a, b, c, d) {
                        a = P.createNode(a, b, c, d);
                        b = P.kb(a);
                        try {
                            N(a.mode)
                                ? fs.mkdirSync(b, a.mode)
                                : fs.writeFileSync(b, '', { mode: a.mode });
                        } catch (e) {
                            if (!e.code) throw e;
                            throw new K(L[e.code]);
                        }
                        return a;
                    },
                    rename: function (a, b, c) {
                        a = P.kb(a);
                        b = n(P.kb(b), c);
                        try {
                            fs.renameSync(a, b);
                        } catch (d) {
                            if (!d.code) throw d;
                            throw new K(L[d.code]);
                        }
                    },
                    unlink: function (a, b) {
                        a = n(P.kb(a), b);
                        try {
                            fs.unlinkSync(a);
                        } catch (c) {
                            if (!c.code) throw c;
                            throw new K(L[c.code]);
                        }
                    },
                    rmdir: function (a, b) {
                        a = n(P.kb(a), b);
                        try {
                            fs.rmdirSync(a);
                        } catch (c) {
                            if (!c.code) throw c;
                            throw new K(L[c.code]);
                        }
                    },
                    readdir: function (a) {
                        a = P.kb(a);
                        try {
                            return fs.readdirSync(a);
                        } catch (b) {
                            if (!b.code) throw b;
                            throw new K(L[b.code]);
                        }
                    },
                    symlink: function (a, b, c) {
                        a = n(P.kb(a), b);
                        try {
                            fs.symlinkSync(c, a);
                        } catch (d) {
                            if (!d.code) throw d;
                            throw new K(L[d.code]);
                        }
                    },
                    readlink: function (a) {
                        var b = P.kb(a);
                        try {
                            return (
                                (b = fs.readlinkSync(b)),
                                (b = Fb.relative(Fb.resolve(a.jb.Hb.root), b))
                            );
                        } catch (c) {
                            if (!c.code) throw c;
                            throw new K(L[c.code]);
                        }
                    },
                },
                cb: {
                    open: function (a) {
                        var b = P.kb(a.node);
                        try {
                            32768 === (a.node.mode & 61440) &&
                                (a.wb = fs.openSync(b, P.qc(a.flags)));
                        } catch (c) {
                            if (!c.code) throw c;
                            throw new K(L[c.code]);
                        }
                    },
                    close: function (a) {
                        try {
                            32768 === (a.node.mode & 61440) &&
                                a.wb &&
                                fs.closeSync(a.wb);
                        } catch (b) {
                            if (!b.code) throw b;
                            throw new K(L[b.code]);
                        }
                    },
                    read: function (a, b, c, d, e) {
                        if (0 === d) return 0;
                        try {
                            return fs.readSync(a.wb, P.Rb(b.buffer), c, d, e);
                        } catch (g) {
                            throw new K(L[g.code]);
                        }
                    },
                    write: function (a, b, c, d, e) {
                        try {
                            return fs.writeSync(a.wb, P.Rb(b.buffer), c, d, e);
                        } catch (g) {
                            throw new K(L[g.code]);
                        }
                    },
                    ob: function (a, b, c) {
                        if (1 === c) b += a.position;
                        else if (2 === c && 32768 === (a.node.mode & 61440))
                            try {
                                b += fs.fstatSync(a.wb).size;
                            } catch (d) {
                                throw new K(L[d.code]);
                            }
                        if (0 > b) throw new K(L.ib);
                        return b;
                    },
                },
            },
            Gb = null,
            Hb = {},
            Q = [],
            Ib = 1,
            R = null,
            Jb = !0,
            S = {},
            K = null,
            Eb = {};
        function T(a, b) {
            a = vb('/', a);
            b = b || {};
            if (!a) return { path: '', node: null };
            var c = { Vb: !0, Jb: 0 },
                d;
            for (d in c) void 0 === b[d] && (b[d] = c[d]);
            if (8 < b.Jb) throw new K(40);
            a = qb(
                a.split('/').filter(function (a) {
                    return !!a;
                }),
                !1,
            );
            var e = Gb;
            c = '/';
            for (d = 0; d < a.length; d++) {
                var g = d === a.length - 1;
                if (g && b.parent) break;
                e = O(e, a[d]);
                c = n(c, a[d]);
                e.sb && (!g || (g && b.Vb)) && (e = e.sb.root);
                if (!g || b.qb)
                    for (g = 0; 40960 === (e.mode & 61440); )
                        if (
                            ((e = Kb(c)),
                            (c = vb(sb(c), e)),
                            (e = T(c, { Jb: b.Jb }).node),
                            40 < g++)
                        )
                            throw new K(40);
            }
            return { path: c, node: e };
        }
        function Lb(a) {
            for (var b; ; ) {
                if (a === a.parent)
                    return (
                        (a = a.jb.Yb),
                        b ? ('/' !== a[a.length - 1] ? a + '/' + b : a + b) : a
                    );
                b = b ? a.name + '/' + b : a.name;
                a = a.parent;
            }
        }
        function Mb(a, b) {
            for (var c = 0, d = 0; d < b.length; d++)
                c = ((c << 5) - c + b.charCodeAt(d)) | 0;
            return ((a + c) >>> 0) % R.length;
        }
        function Nb(a) {
            var b = Mb(a.parent.id, a.name);
            a.tb = R[b];
            R[b] = a;
        }
        function Ob(a) {
            var b = Mb(a.parent.id, a.name);
            if (R[b] === a) R[b] = a.tb;
            else
                for (b = R[b]; b; ) {
                    if (b.tb === a) {
                        b.tb = a.tb;
                        break;
                    }
                    b = b.tb;
                }
        }
        function O(a, b) {
            var c;
            if ((c = (c = Pb(a, 'x')) ? c : a.ab.lookup ? 0 : 13))
                throw new K(c, a);
            for (c = R[Mb(a.id, b)]; c; c = c.tb) {
                var d = c.name;
                if (c.parent.id === a.id && d === b) return c;
            }
            return a.ab.lookup(a, b);
        }
        function Db(a, b, c, d) {
            Qb ||
                ((Qb = function (a, b, c, d) {
                    a || (a = this);
                    this.parent = a;
                    this.jb = a.jb;
                    this.sb = null;
                    this.id = Ib++;
                    this.name = b;
                    this.mode = c;
                    this.ab = {};
                    this.cb = {};
                    this.rdev = d;
                }),
                (Qb.prototype = {}),
                Object.defineProperties(Qb.prototype, {
                    read: {
                        get: function () {
                            return 365 === (this.mode & 365);
                        },
                        set: function (a) {
                            a ? (this.mode |= 365) : (this.mode &= -366);
                        },
                    },
                    write: {
                        get: function () {
                            return 146 === (this.mode & 146);
                        },
                        set: function (a) {
                            a ? (this.mode |= 146) : (this.mode &= -147);
                        },
                    },
                }));
            a = new Qb(a, b, c, d);
            Nb(a);
            return a;
        }
        function N(a) {
            return 16384 === (a & 61440);
        }
        var Rb = {
            r: 0,
            rs: 1052672,
            'r+': 2,
            w: 577,
            wx: 705,
            xw: 705,
            'w+': 578,
            'wx+': 706,
            'xw+': 706,
            a: 1089,
            ax: 1217,
            xa: 1217,
            'a+': 1090,
            'ax+': 1218,
            'xa+': 1218,
        };
        function ic(a) {
            var b = ['r', 'w', 'rw'][a & 3];
            a & 512 && (b += 'w');
            return b;
        }
        function Pb(a, b) {
            if (Jb) return 0;
            if (-1 === b.indexOf('r') || a.mode & 292) {
                if (
                    (-1 !== b.indexOf('w') && !(a.mode & 146)) ||
                    (-1 !== b.indexOf('x') && !(a.mode & 73))
                )
                    return 13;
            } else return 13;
            return 0;
        }
        function tc(a, b) {
            try {
                return O(a, b), 17;
            } catch (c) {}
            return Pb(a, 'wx');
        }
        function uc(a, b, c) {
            try {
                var d = O(a, b);
            } catch (e) {
                return e.eb;
            }
            if ((a = Pb(a, 'wx'))) return a;
            if (c) {
                if (!N(d.mode)) return 20;
                if (d === d.parent || '/' === Lb(d)) return 16;
            } else if (N(d.mode)) return 21;
            return 0;
        }
        function vc(a) {
            var b = 4096;
            for (a = a || 0; a <= b; a++) if (!Q[a]) return a;
            throw new K(24);
        }
        function wc(a, b) {
            xc ||
                ((xc = function () {}),
                (xc.prototype = {}),
                Object.defineProperties(xc.prototype, {
                    object: {
                        get: function () {
                            return this.node;
                        },
                        set: function (a) {
                            this.node = a;
                        },
                    },
                }));
            var c = new xc(),
                d;
            for (d in a) c[d] = a[d];
            a = c;
            b = vc(b);
            a.fd = b;
            return (Q[b] = a);
        }
        var Cb = {
            open: function (a) {
                a.cb = Hb[a.node.rdev].cb;
                a.cb.open && a.cb.open(a);
            },
            ob: function () {
                throw new K(29);
            },
        };
        function yb(a, b) {
            Hb[a] = { cb: b };
        }
        function yc(a, b) {
            var c = '/' === b,
                d = !b;
            if (c && Gb) throw new K(16);
            if (!c && !d) {
                var e = T(b, { Vb: !1 });
                b = e.path;
                e = e.node;
                if (e.sb) throw new K(16);
                if (!N(e.mode)) throw new K(20);
            }
            b = { type: a, Hb: {}, Yb: b, wc: [] };
            a = a.jb(b);
            a.jb = b;
            b.root = a;
            c ? (Gb = a) : e && ((e.sb = b), e.jb && e.jb.wc.push(b));
        }
        function ja(a, b, c) {
            var d = T(a, { parent: !0 }).node;
            a = tb(a);
            if (!a || '.' === a || '..' === a) throw new K(22);
            var e = tc(d, a);
            if (e) throw new K(e);
            if (!d.ab.vb) throw new K(1);
            return d.ab.vb(d, a, b, c);
        }
        function U(a, b) {
            ja(a, ((void 0 !== b ? b : 511) & 1023) | 16384, 0);
        }
        function zc(a, b, c) {
            'undefined' === typeof c && ((c = b), (b = 438));
            ja(a, b | 8192, c);
        }
        function Ac(a, b) {
            if (!vb(a)) throw new K(2);
            var c = T(b, { parent: !0 }).node;
            if (!c) throw new K(2);
            b = tb(b);
            var d = tc(c, b);
            if (d) throw new K(d);
            if (!c.ab.symlink) throw new K(1);
            c.ab.symlink(c, b, a);
        }
        function ta(a) {
            var b = T(a, { parent: !0 }).node,
                c = tb(a),
                d = O(b, c),
                e = uc(b, c, !1);
            if (e) throw new K(e);
            if (!b.ab.unlink) throw new K(1);
            if (d.sb) throw new K(16);
            try {
                S.willDeletePath && S.willDeletePath(a);
            } catch (g) {
                console.log(
                    "FS.trackingDelegate['willDeletePath']('" +
                        a +
                        "') threw an exception: " +
                        g.message,
                );
            }
            b.ab.unlink(b, c);
            Ob(d);
            try {
                if (S.onDeletePath) S.onDeletePath(a);
            } catch (g) {
                console.log(
                    "FS.trackingDelegate['onDeletePath']('" +
                        a +
                        "') threw an exception: " +
                        g.message,
                );
            }
        }
        function Kb(a) {
            a = T(a).node;
            if (!a) throw new K(2);
            if (!a.ab.readlink) throw new K(22);
            return vb(Lb(a.parent), a.ab.readlink(a));
        }
        function ra(a, b) {
            a = T(a, { qb: !b }).node;
            if (!a) throw new K(2);
            if (!a.ab.lb) throw new K(1);
            return a.ab.lb(a);
        }
        function Bc(a) {
            return ra(a, !0);
        }
        function ka(a, b) {
            var c;
            'string' === typeof a ? (c = T(a, { qb: !0 }).node) : (c = a);
            if (!c.ab.hb) throw new K(1);
            c.ab.hb(c, {
                mode: (b & 4095) | (c.mode & -4096),
                timestamp: Date.now(),
            });
        }
        function Cc(a) {
            var b;
            'string' === typeof a ? (b = T(a, { qb: !0 }).node) : (b = a);
            if (!b.ab.hb) throw new K(1);
            b.ab.hb(b, { timestamp: Date.now() });
        }
        function Dc(a, b) {
            if (0 > b) throw new K(22);
            var c;
            'string' === typeof a ? (c = T(a, { qb: !0 }).node) : (c = a);
            if (!c.ab.hb) throw new K(1);
            if (N(c.mode)) throw new K(21);
            if (32768 !== (c.mode & 61440)) throw new K(22);
            if ((a = Pb(c, 'w'))) throw new K(a);
            c.ab.hb(c, { size: b, timestamp: Date.now() });
        }
        function p(a, b, c, d) {
            if ('' === a) throw new K(2);
            if ('string' === typeof b) {
                var e = Rb[b];
                if ('undefined' === typeof e)
                    throw Error('Unknown file open mode: ' + b);
                b = e;
            }
            c =
                b & 64
                    ? (('undefined' === typeof c ? 438 : c) & 4095) | 32768
                    : 0;
            if ('object' === typeof a) var g = a;
            else {
                a = rb(a);
                try {
                    g = T(a, { qb: !(b & 131072) }).node;
                } catch (k) {}
            }
            e = !1;
            if (b & 64)
                if (g) {
                    if (b & 128) throw new K(17);
                } else (g = ja(a, c, 0)), (e = !0);
            if (!g) throw new K(2);
            8192 === (g.mode & 61440) && (b &= -513);
            if (b & 65536 && !N(g.mode)) throw new K(20);
            if (
                !e &&
                (c = g
                    ? 40960 === (g.mode & 61440)
                        ? 40
                        : N(g.mode) && ('r' !== ic(b) || b & 512)
                          ? 21
                          : Pb(g, ic(b))
                    : 2)
            )
                throw new K(c);
            b & 512 && Dc(g, 0);
            b &= -641;
            d = wc(
                {
                    node: g,
                    path: Lb(g),
                    flags: b,
                    seekable: !0,
                    position: 0,
                    cb: g.cb,
                    Bc: [],
                    error: !1,
                },
                d,
            );
            d.cb.open && d.cb.open(d);
            !f.logReadFiles ||
                b & 1 ||
                (Ec || (Ec = {}),
                a in Ec ||
                    ((Ec[a] = 1),
                    console.log(
                        'FS.trackingDelegate error on read file: ' + a,
                    )));
            try {
                S.onOpenFile &&
                    ((g = 0),
                    1 !== (b & 2097155) && (g |= 1),
                    0 !== (b & 2097155) && (g |= 2),
                    S.onOpenFile(a, g));
            } catch (k) {
                console.log(
                    "FS.trackingDelegate['onOpenFile']('" +
                        a +
                        "', flags) threw an exception: " +
                        k.message,
                );
            }
            return d;
        }
        function ma(a) {
            if (null === a.fd) throw new K(9);
            a.Gb && (a.Gb = null);
            try {
                a.cb.close && a.cb.close(a);
            } catch (b) {
                throw b;
            } finally {
                Q[a.fd] = null;
            }
            a.fd = null;
        }
        function Fc(a, b, c) {
            if (null === a.fd) throw new K(9);
            if (!a.seekable || !a.cb.ob) throw new K(29);
            if (0 != c && 1 != c && 2 != c) throw new K(22);
            a.position = a.cb.ob(a, b, c);
            a.Bc = [];
        }
        function sa(a, b, c, d, e) {
            if (0 > d || 0 > e) throw new K(22);
            if (null === a.fd) throw new K(9);
            if (1 === (a.flags & 2097155)) throw new K(9);
            if (N(a.node.mode)) throw new K(21);
            if (!a.cb.read) throw new K(22);
            var g = 'undefined' !== typeof e;
            if (!g) e = a.position;
            else if (!a.seekable) throw new K(29);
            b = a.cb.read(a, b, c, d, e);
            g || (a.position += b);
            return b;
        }
        function la(a, b, c, d, e, g) {
            if (0 > d || 0 > e) throw new K(22);
            if (null === a.fd) throw new K(9);
            if (0 === (a.flags & 2097155)) throw new K(9);
            if (N(a.node.mode)) throw new K(21);
            if (!a.cb.write) throw new K(22);
            a.flags & 1024 && Fc(a, 0, 2);
            var k = 'undefined' !== typeof e;
            if (!k) e = a.position;
            else if (!a.seekable) throw new K(29);
            b = a.cb.write(a, b, c, d, e, g);
            k || (a.position += b);
            try {
                if (a.path && S.onWriteToFile) S.onWriteToFile(a.path);
            } catch (m) {
                console.log(
                    "FS.trackingDelegate['onWriteToFile']('" +
                        a.path +
                        "') threw an exception: " +
                        m.message,
                );
            }
            return b;
        }
        function Gc() {
            K ||
                ((K = function (a, b) {
                    this.node = b;
                    this.zc = function (a) {
                        this.eb = a;
                    };
                    this.zc(a);
                    this.message = 'FS error';
                    this.stack &&
                        Object.defineProperty(this, 'stack', {
                            value: Error().stack,
                            writable: !0,
                        });
                }),
                (K.prototype = Error()),
                (K.prototype.constructor = K),
                [2].forEach(function (a) {
                    Eb[a] = new K(a);
                    Eb[a].stack = '<generic error, no stack>';
                }));
        }
        var Hc;
        function ia(a, b) {
            var c = 0;
            a && (c |= 365);
            b && (c |= 146);
            return c;
        }
        function Ic(a, b, c) {
            a = n('/dev', a);
            var d = ia(!!b, !!c);
            Jc || (Jc = 64);
            var e = (Jc++ << 8) | 0;
            yb(e, {
                open: function (a) {
                    a.seekable = !1;
                },
                close: function () {
                    c && c.buffer && c.buffer.length && c(10);
                },
                read: function (a, c, d, e) {
                    for (var g = 0, k = 0; k < e; k++) {
                        try {
                            var m = b();
                        } catch (Ia) {
                            throw new K(5);
                        }
                        if (void 0 === m && 0 === g) throw new K(11);
                        if (null === m || void 0 === m) break;
                        g++;
                        c[d + k] = m;
                    }
                    g && (a.node.timestamp = Date.now());
                    return g;
                },
                write: function (a, b, d, e) {
                    for (var g = 0; g < e; g++)
                        try {
                            c(b[d + g]);
                        } catch (fa) {
                            throw new K(5);
                        }
                    e && (a.node.timestamp = Date.now());
                    return g;
                },
            });
            zc(a, d, e);
        }
        var Jc,
            V = {},
            Qb,
            xc,
            Ec,
            L = {
                dc: 1,
                bc: 2,
                Ae: 3,
                sd: 4,
                Lb: 5,
                Ob: 6,
                Ic: 7,
                Td: 8,
                Kb: 9,
                Xc: 10,
                ac: 11,
                Ke: 11,
                Mb: 12,
                $b: 13,
                ld: 14,
                ee: 15,
                Vc: 16,
                kd: 17,
                Le: 18,
                Cb: 19,
                cc: 20,
                ud: 21,
                ib: 22,
                Od: 23,
                Gd: 24,
                je: 25,
                He: 26,
                md: 27,
                ae: 28,
                ze: 29,
                ve: 30,
                Hd: 31,
                pe: 32,
                gd: 33,
                ec: 34,
                Xd: 42,
                pd: 43,
                Yc: 44,
                wd: 45,
                xd: 46,
                yd: 47,
                Ed: 48,
                Ie: 49,
                Rd: 50,
                vd: 51,
                cd: 35,
                Ud: 37,
                Oc: 52,
                Rc: 53,
                Me: 54,
                Pd: 55,
                Sc: 56,
                Tc: 57,
                dd: 35,
                Uc: 59,
                ce: 60,
                Sd: 61,
                Ee: 62,
                be: 63,
                Yd: 64,
                Zd: 65,
                ue: 66,
                Vd: 67,
                Lc: 68,
                Be: 69,
                Zc: 70,
                qe: 71,
                Jd: 72,
                hd: 73,
                Qc: 74,
                ke: 76,
                Pc: 77,
                te: 78,
                zd: 79,
                Ad: 80,
                Dd: 81,
                Cd: 82,
                Bd: 83,
                de: 38,
                Nb: 39,
                Kd: 36,
                Fd: 40,
                le: 95,
                oe: 96,
                bd: 104,
                Qd: 105,
                Mc: 97,
                se: 91,
                he: 88,
                $d: 92,
                xe: 108,
                ad: 111,
                Jc: 98,
                $c: 103,
                Nd: 101,
                Ld: 100,
                Fe: 110,
                nd: 112,
                od: 113,
                rd: 115,
                Nc: 114,
                ed: 89,
                Id: 90,
                re: 93,
                ye: 94,
                Kc: 99,
                Md: 102,
                td: 106,
                fe: 107,
                Ge: 109,
                Je: 87,
                jd: 122,
                Ce: 116,
                ie: 95,
                Wd: 123,
                qd: 84,
                me: 75,
                Wc: 125,
                ge: 131,
                ne: 130,
                De: 86,
            },
            Kc = {};
        function Lc(a, b, c) {
            try {
                var d = a(b);
            } catch (e) {
                if (e && e.node && rb(b) !== rb(Lb(e.node))) return -L.cc;
                throw e;
            }
            D[c >> 2] = d.dev;
            D[(c + 4) >> 2] = 0;
            D[(c + 8) >> 2] = d.ino;
            D[(c + 12) >> 2] = d.mode;
            D[(c + 16) >> 2] = d.nlink;
            D[(c + 20) >> 2] = d.uid;
            D[(c + 24) >> 2] = d.gid;
            D[(c + 28) >> 2] = d.rdev;
            D[(c + 32) >> 2] = 0;
            D[(c + 36) >> 2] = d.size;
            D[(c + 40) >> 2] = 4096;
            D[(c + 44) >> 2] = d.blocks;
            D[(c + 48) >> 2] = (d.atime.getTime() / 1e3) | 0;
            D[(c + 52) >> 2] = 0;
            D[(c + 56) >> 2] = (d.mtime.getTime() / 1e3) | 0;
            D[(c + 60) >> 2] = 0;
            D[(c + 64) >> 2] = (d.ctime.getTime() / 1e3) | 0;
            D[(c + 68) >> 2] = 0;
            D[(c + 72) >> 2] = d.ino;
            return 0;
        }
        var W = 0;
        function X() {
            W += 4;
            return D[(W - 4) >> 2];
        }
        function Y() {
            return G(X());
        }
        function Z() {
            var a = Q[X()];
            if (!a) throw new K(L.Kb);
            return a;
        }
        function Da() {
            return l.length;
        }
        function Ea(a) {
            if (2147418112 < a) return !1;
            for (var b = Math.max(Da(), 16777216); b < a; )
                536870912 >= b
                    ? (b = Wa(2 * b))
                    : (b = Math.min(Wa((3 * b + 2147483648) / 4), 2147418112));
            a = Wa(b);
            var c = buffer.byteLength;
            try {
                var d =
                    -1 !== La.grow((a - c) / 65536)
                        ? (buffer = La.buffer)
                        : null;
            } catch (e) {
                d = null;
            }
            if (!d || d.byteLength != b) return !1;
            Xa();
            return !0;
        }
        function Mc(a) {
            if (0 === a) return 0;
            a = G(a);
            if (!J.hasOwnProperty(a)) return 0;
            Mc.rb && ha(Mc.rb);
            a = J[a];
            var b = oa(a) + 1,
                c = Ta(b);
            c && r(a, l, c, b);
            Mc.rb = c;
            return Mc.rb;
        }
        r('GMT', F, 60272, 4);
        function Nc() {
            function a(a) {
                return (a = a.toTimeString().match(/\(([A-Za-z ]+)\)$/))
                    ? a[1]
                    : 'GMT';
            }
            if (!Oc) {
                Oc = !0;
                D[Pc() >> 2] = 60 * new Date().getTimezoneOffset();
                var b = new Date(2e3, 0, 1),
                    c = new Date(2e3, 6, 1);
                D[Qc() >> 2] = Number(
                    b.getTimezoneOffset() != c.getTimezoneOffset(),
                );
                var d = a(b),
                    e = a(c);
                d = ea(ba(d));
                e = ea(ba(e));
                c.getTimezoneOffset() < b.getTimezoneOffset()
                    ? ((D[Rc() >> 2] = d), (D[(Rc() + 4) >> 2] = e))
                    : ((D[Rc() >> 2] = e), (D[(Rc() + 4) >> 2] = d));
            }
        }
        var Oc;
        function Sc(a) {
            a /= 1e3;
            if ((v || w) && self.performance && self.performance.now)
                for (
                    var b = self.performance.now();
                    self.performance.now() - b < a;

                );
            else for (b = Date.now(); Date.now() - b < a; );
            return 0;
        }
        f._usleep = Sc;
        Gc();
        R = Array(4096);
        yc(M, '/');
        U('/tmp');
        U('/home');
        U('/home/web_user');
        (function () {
            U('/dev');
            yb(259, {
                read: function () {
                    return 0;
                },
                write: function (a, b, c, k) {
                    return k;
                },
            });
            zc('/dev/null', 259);
            xb(1280, Ab);
            xb(1536, Bb);
            zc('/dev/tty', 1280);
            zc('/dev/tty1', 1536);
            if (
                'object' === typeof crypto &&
                'function' === typeof crypto.getRandomValues
            ) {
                var a = new Uint8Array(1);
                var b = function () {
                    crypto.getRandomValues(a);
                    return a[0];
                };
            } else if (x)
                try {
                    var c = require('crypto');
                    b = function () {
                        return c.randomBytes(1)[0];
                    };
                } catch (d) {}
            b ||
                (b = function () {
                    B('random_device');
                });
            Ic('random', b);
            Ic('urandom', b);
            U('/dev/shm');
            U('/dev/shm/tmp');
        })();
        U('/proc');
        U('/proc/self');
        U('/proc/self/fd');
        yc(
            {
                jb: function () {
                    var a = Db('/proc/self', 'fd', 16895, 73);
                    a.ab = {
                        lookup: function (a, c) {
                            var b = Q[+c];
                            if (!b) throw new K(9);
                            a = {
                                parent: null,
                                jb: { Yb: 'fake' },
                                ab: {
                                    readlink: function () {
                                        return b.path;
                                    },
                                },
                            };
                            return (a.parent = a);
                        },
                    };
                    return a;
                },
            },
            '/proc/self/fd',
        );
        if (x) {
            var fs = require('fs'),
                Fb = require('path');
            P.Ac();
        }
        function ba(a, b) {
            var c = Array(oa(a) + 1);
            a = r(a, c, 0, c.length);
            b && (c.length = a);
            return c;
        }
        var Vc = f.asm(
            {},
            {
                n: B,
                l: function (a) {
                    return E[a]();
                },
                i: function (a, b) {
                    return E[a](b);
                },
                h: function (a, b, c) {
                    return E[a](b, c);
                },
                g: function (a, b, c, d) {
                    return E[a](b, c, d);
                },
                f: function (a, b, c, d, e) {
                    return E[a](b, c, d, e);
                },
                e: function (a, b, c, d, e, g) {
                    return E[a](b, c, d, e, g);
                },
                d: function (a, b, c, d, e, g, k) {
                    return E[a](b, c, d, e, g, k);
                },
                B: function (a, b, c, d, e) {
                    return E[a](b, c, d, e);
                },
                A: function (a, b, c) {
                    return E[a](b, c);
                },
                z: function (a, b, c, d) {
                    return E[a](b, c, d);
                },
                y: function (a, b, c, d, e) {
                    return E[a](b, c, d, e);
                },
                c: function (a, b) {
                    E[a](b);
                },
                b: function (a, b, c) {
                    E[a](b, c);
                },
                k: function (a, b, c, d) {
                    E[a](b, c, d);
                },
                j: function (a, b, c, d, e) {
                    E[a](b, c, d, e);
                },
                x: function (a, b, c, d, e, g) {
                    E[a](b, c, d, e, g);
                },
                w: function (a, b, c, d) {
                    E[a](b, c, d);
                },
                v: function (a, b, c, d) {
                    E[a](b, c, d);
                },
                m: function (a, b, c, d) {
                    B(
                        'Assertion failed: ' +
                            G(a) +
                            ', at: ' +
                            [
                                b ? G(b) : 'unknown filename',
                                c,
                                d ? G(d) : 'unknown function',
                            ],
                    );
                },
                ga: ob,
                u: pb,
                fa: function (a, b) {
                    W = b;
                    try {
                        var c = Y();
                        ta(c);
                        return 0;
                    } catch (d) {
                        return (
                            ('undefined' !== typeof V && d instanceof K) ||
                                B(d),
                            -d.eb
                        );
                    }
                },
                ea: function (a, b) {
                    W = b;
                    try {
                        return Z(), 0;
                    } catch (c) {
                        return (
                            ('undefined' !== typeof V && c instanceof K) ||
                                B(c),
                            -c.eb
                        );
                    }
                },
                da: function (a, b) {
                    W = b;
                    try {
                        var c = Z();
                        X();
                        var d = X(),
                            e = X(),
                            g = X();
                        Fc(c, d, g);
                        D[e >> 2] = c.position;
                        c.Gb && 0 === d && 0 === g && (c.Gb = null);
                        return 0;
                    } catch (k) {
                        return (
                            ('undefined' !== typeof V && k instanceof K) ||
                                B(k),
                            -k.eb
                        );
                    }
                },
                ca: function (a, b) {
                    W = b;
                    try {
                        var c = Y(),
                            d = X();
                        ka(c, d);
                        return 0;
                    } catch (e) {
                        return (
                            ('undefined' !== typeof V && e instanceof K) ||
                                B(e),
                            -e.eb
                        );
                    }
                },
                ba: function (a, b) {
                    W = b;
                    try {
                        var c = X(),
                            d = X();
                        if (0 === d) return -L.ib;
                        if (d < oa('/') + 1) return -L.ec;
                        r('/', F, c, d);
                        return c;
                    } catch (e) {
                        return (
                            ('undefined' !== typeof V && e instanceof K) ||
                                B(e),
                            -e.eb
                        );
                    }
                },
                aa: function (a, b) {
                    W = b;
                    try {
                        var c = X(),
                            d = X(),
                            e = X(),
                            g = X(),
                            k = X(),
                            m = X();
                        m <<= 12;
                        a = !1;
                        if (-1 === k) {
                            var y = Tc(16384, d);
                            if (!y) return -L.Mb;
                            Uc(y, 0, d);
                            a = !0;
                        } else {
                            var z = Q[k];
                            if (!z) return -L.Kb;
                            b = F;
                            if (1 === (z.flags & 2097155)) throw new K(13);
                            if (!z.cb.zb) throw new K(19);
                            var fa = z.cb.zb(z, b, c, d, m, e, g);
                            y = fa.xc;
                            a = fa.Db;
                        }
                        Kc[y] = { vc: y, uc: d, Db: a, fd: k, flags: g };
                        return y;
                    } catch (ca) {
                        return (
                            ('undefined' !== typeof V && ca instanceof K) ||
                                B(ca),
                            -ca.eb
                        );
                    }
                },
                $: function (a, b) {
                    W = b;
                    try {
                        var c = X();
                        X();
                        var d = X();
                        X();
                        var e = Q[c];
                        if (!e) throw new K(9);
                        if (0 === (e.flags & 2097155)) throw new K(22);
                        Dc(e.node, d);
                        return 0;
                    } catch (g) {
                        return (
                            ('undefined' !== typeof V && g instanceof K) ||
                                B(g),
                            -g.eb
                        );
                    }
                },
                t: function (a, b) {
                    W = b;
                    try {
                        var c = Y(),
                            d = X();
                        return Lc(ra, c, d);
                    } catch (e) {
                        return (
                            ('undefined' !== typeof V && e instanceof K) ||
                                B(e),
                            -e.eb
                        );
                    }
                },
                _: function (a, b) {
                    W = b;
                    try {
                        var c = Y(),
                            d = X();
                        return Lc(Bc, c, d);
                    } catch (e) {
                        return (
                            ('undefined' !== typeof V && e instanceof K) ||
                                B(e),
                            -e.eb
                        );
                    }
                },
                Z: function (a, b) {
                    W = b;
                    try {
                        var c = Z(),
                            d = X();
                        return Lc(ra, c.path, d);
                    } catch (e) {
                        return (
                            ('undefined' !== typeof V && e instanceof K) ||
                                B(e),
                            -e.eb
                        );
                    }
                },
                Y: function (a, b) {
                    W = b;
                    return 42;
                },
                X: function (a, b) {
                    W = b;
                    return 0;
                },
                W: function (a, b) {
                    W = b;
                    try {
                        var c = X();
                        X();
                        X();
                        var d = Q[c];
                        if (!d) throw new K(9);
                        Cc(d.node);
                        return 0;
                    } catch (e) {
                        return (
                            ('undefined' !== typeof V && e instanceof K) ||
                                B(e),
                            -e.eb
                        );
                    }
                },
                V: function (a, b) {
                    W = b;
                    try {
                        var c = Y();
                        X();
                        X();
                        Cc(c);
                        return 0;
                    } catch (d) {
                        return (
                            ('undefined' !== typeof V && d instanceof K) ||
                                B(d),
                            -d.eb
                        );
                    }
                },
                o: function (a, b) {
                    W = b;
                    try {
                        var c = Z();
                        switch (X()) {
                            case 0:
                                var d = X();
                                return 0 > d
                                    ? -L.ib
                                    : p(c.path, c.flags, 0, d).fd;
                            case 1:
                            case 2:
                                return 0;
                            case 3:
                                return c.flags;
                            case 4:
                                return (d = X()), (c.flags |= d), 0;
                            case 12:
                                return (d = X()), (Ha[(d + 0) >> 1] = 2), 0;
                            case 13:
                            case 14:
                                return 0;
                            case 16:
                            case 8:
                                return -L.ib;
                            case 9:
                                return pb(L.ib), -1;
                            default:
                                return -L.ib;
                        }
                    } catch (e) {
                        return (
                            ('undefined' !== typeof V && e instanceof K) ||
                                B(e),
                            -e.eb
                        );
                    }
                },
                U: function (a, b) {
                    W = b;
                    try {
                        var c = Z(),
                            d = X(),
                            e = X();
                        return sa(c, l, d, e);
                    } catch (g) {
                        return (
                            ('undefined' !== typeof V && g instanceof K) ||
                                B(g),
                            -g.eb
                        );
                    }
                },
                T: function (a, b) {
                    W = b;
                    try {
                        var c = Y();
                        var d = X();
                        if (d & -8) var e = -L.ib;
                        else {
                            var g = T(c, { qb: !0 }).node;
                            a = '';
                            d & 4 && (a += 'r');
                            d & 2 && (a += 'w');
                            d & 1 && (a += 'x');
                            e = a && Pb(g, a) ? -L.$b : 0;
                        }
                        return e;
                    } catch (k) {
                        return (
                            ('undefined' !== typeof V && k instanceof K) ||
                                B(k),
                            -k.eb
                        );
                    }
                },
                S: function (a, b) {
                    W = b;
                    try {
                        var c = Y(),
                            d = X();
                        a = c;
                        a = rb(a);
                        '/' === a[a.length - 1] &&
                            (a = a.substr(0, a.length - 1));
                        U(a, d);
                        return 0;
                    } catch (e) {
                        return (
                            ('undefined' !== typeof V && e instanceof K) ||
                                B(e),
                            -e.eb
                        );
                    }
                },
                R: function (a, b) {
                    W = b;
                    try {
                        var c = Z(),
                            d = X(),
                            e = X();
                        return la(c, l, d, e);
                    } catch (g) {
                        return (
                            ('undefined' !== typeof V && g instanceof K) ||
                                B(g),
                            -g.eb
                        );
                    }
                },
                Q: function (a, b) {
                    W = b;
                    try {
                        var c = Y(),
                            d = T(c, { parent: !0 }).node,
                            e = tb(c),
                            g = O(d, e),
                            k = uc(d, e, !0);
                        if (k) throw new K(k);
                        if (!d.ab.rmdir) throw new K(1);
                        if (g.sb) throw new K(16);
                        try {
                            S.willDeletePath && S.willDeletePath(c);
                        } catch (m) {
                            console.log(
                                "FS.trackingDelegate['willDeletePath']('" +
                                    c +
                                    "') threw an exception: " +
                                    m.message,
                            );
                        }
                        d.ab.rmdir(d, e);
                        Ob(g);
                        try {
                            if (S.onDeletePath) S.onDeletePath(c);
                        } catch (m) {
                            console.log(
                                "FS.trackingDelegate['onDeletePath']('" +
                                    c +
                                    "') threw an exception: " +
                                    m.message,
                            );
                        }
                        return 0;
                    } catch (m) {
                        return (
                            ('undefined' !== typeof V && m instanceof K) ||
                                B(m),
                            -m.eb
                        );
                    }
                },
                P: function (a, b) {
                    W = b;
                    try {
                        var c = Y(),
                            d = X(),
                            e = X();
                        return p(c, d, e).fd;
                    } catch (g) {
                        return (
                            ('undefined' !== typeof V && g instanceof K) ||
                                B(g),
                            -g.eb
                        );
                    }
                },
                s: function (a, b) {
                    W = b;
                    try {
                        var c = Z();
                        ma(c);
                        return 0;
                    } catch (d) {
                        return (
                            ('undefined' !== typeof V && d instanceof K) ||
                                B(d),
                            -d.eb
                        );
                    }
                },
                O: function (a, b) {
                    W = b;
                    try {
                        var c = Y(),
                            d = X();
                        var e = X();
                        if (0 >= e) var g = -L.ib;
                        else {
                            var k = Kb(c),
                                m = Math.min(e, oa(k)),
                                y = l[d + m];
                            r(k, F, d, e + 1);
                            l[d + m] = y;
                            g = m;
                        }
                        return g;
                    } catch (z) {
                        return (
                            ('undefined' !== typeof V && z instanceof K) ||
                                B(z),
                            -z.eb
                        );
                    }
                },
                N: function (a, b) {
                    W = b;
                    try {
                        var c = X(),
                            d = X(),
                            e = Kc[c];
                        if (!e) return 0;
                        if (d === e.uc) {
                            var g = Q[e.fd],
                                k = e.flags,
                                m = new Uint8Array(F.subarray(c, c + d));
                            g && g.cb.Ab && g.cb.Ab(g, m, 0, d, k);
                            Kc[c] = null;
                            e.Db && ha(e.vc);
                        }
                        return 0;
                    } catch (y) {
                        return (
                            ('undefined' !== typeof V && y instanceof K) ||
                                B(y),
                            -y.eb
                        );
                    }
                },
                M: function (a, b) {
                    W = b;
                    try {
                        var c = X(),
                            d = X(),
                            e = Q[c];
                        if (!e) throw new K(9);
                        ka(e.node, d);
                        return 0;
                    } catch (g) {
                        return (
                            ('undefined' !== typeof V && g instanceof K) ||
                                B(g),
                            -g.eb
                        );
                    }
                },
                L: Da,
                K: function (a, b, c) {
                    F.set(F.subarray(b, b + c), a);
                },
                J: Ea,
                r: Mc,
                q: function (a) {
                    var b = Date.now();
                    D[a >> 2] = (b / 1e3) | 0;
                    D[(a + 4) >> 2] = ((b % 1e3) * 1e3) | 0;
                    return 0;
                },
                I: function (a) {
                    return Math.log(a) / Math.LN10;
                },
                p: function () {
                    B('trap!');
                },
                H: function (a) {
                    Nc();
                    a = new Date(1e3 * D[a >> 2]);
                    D[15056] = a.getSeconds();
                    D[15057] = a.getMinutes();
                    D[15058] = a.getHours();
                    D[15059] = a.getDate();
                    D[15060] = a.getMonth();
                    D[15061] = a.getFullYear() - 1900;
                    D[15062] = a.getDay();
                    var b = new Date(a.getFullYear(), 0, 1);
                    D[15063] = ((a.getTime() - b.getTime()) / 864e5) | 0;
                    D[15065] = -(60 * a.getTimezoneOffset());
                    var c = new Date(2e3, 6, 1).getTimezoneOffset();
                    b = b.getTimezoneOffset();
                    a = (c != b && a.getTimezoneOffset() == Math.min(b, c)) | 0;
                    D[15064] = a;
                    a = D[(Rc() + (a ? 4 : 0)) >> 2];
                    D[15066] = a;
                    return 60224;
                },
                G: function (a, b) {
                    var c = D[a >> 2];
                    a = D[(a + 4) >> 2];
                    0 !== b && ((D[b >> 2] = 0), (D[(b + 4) >> 2] = 0));
                    return Sc(1e6 * c + a / 1e3);
                },
                F: function (a) {
                    switch (a) {
                        case 30:
                            return 16384;
                        case 85:
                            return 131068;
                        case 132:
                        case 133:
                        case 12:
                        case 137:
                        case 138:
                        case 15:
                        case 235:
                        case 16:
                        case 17:
                        case 18:
                        case 19:
                        case 20:
                        case 149:
                        case 13:
                        case 10:
                        case 236:
                        case 153:
                        case 9:
                        case 21:
                        case 22:
                        case 159:
                        case 154:
                        case 14:
                        case 77:
                        case 78:
                        case 139:
                        case 80:
                        case 81:
                        case 82:
                        case 68:
                        case 67:
                        case 164:
                        case 11:
                        case 29:
                        case 47:
                        case 48:
                        case 95:
                        case 52:
                        case 51:
                        case 46:
                            return 200809;
                        case 79:
                            return 0;
                        case 27:
                        case 246:
                        case 127:
                        case 128:
                        case 23:
                        case 24:
                        case 160:
                        case 161:
                        case 181:
                        case 182:
                        case 242:
                        case 183:
                        case 184:
                        case 243:
                        case 244:
                        case 245:
                        case 165:
                        case 178:
                        case 179:
                        case 49:
                        case 50:
                        case 168:
                        case 169:
                        case 175:
                        case 170:
                        case 171:
                        case 172:
                        case 97:
                        case 76:
                        case 32:
                        case 173:
                        case 35:
                            return -1;
                        case 176:
                        case 177:
                        case 7:
                        case 155:
                        case 8:
                        case 157:
                        case 125:
                        case 126:
                        case 92:
                        case 93:
                        case 129:
                        case 130:
                        case 131:
                        case 94:
                        case 91:
                            return 1;
                        case 74:
                        case 60:
                        case 69:
                        case 70:
                        case 4:
                            return 1024;
                        case 31:
                        case 42:
                        case 72:
                            return 32;
                        case 87:
                        case 26:
                        case 33:
                            return 2147483647;
                        case 34:
                        case 1:
                            return 47839;
                        case 38:
                        case 36:
                            return 99;
                        case 43:
                        case 37:
                            return 2048;
                        case 0:
                            return 2097152;
                        case 3:
                            return 65536;
                        case 28:
                            return 32768;
                        case 44:
                            return 32767;
                        case 75:
                            return 16384;
                        case 39:
                            return 1e3;
                        case 89:
                            return 700;
                        case 71:
                            return 256;
                        case 40:
                            return 255;
                        case 2:
                            return 100;
                        case 180:
                            return 64;
                        case 25:
                            return 20;
                        case 5:
                            return 16;
                        case 6:
                            return 6;
                        case 73:
                            return 4;
                        case 84:
                            return 'object' === typeof navigator
                                ? navigator.hardwareConcurrency || 1
                                : 1;
                    }
                    pb(22);
                    return -1;
                },
                E: function (a) {
                    var b = (Date.now() / 1e3) | 0;
                    a && (D[a >> 2] = b);
                    return b;
                },
                D: function (a, b) {
                    if (b) {
                        var c = 1e3 * D[(b + 8) >> 2];
                        c += D[(b + 12) >> 2] / 1e3;
                    } else c = Date.now();
                    a = G(a);
                    try {
                        b = c;
                        var d = T(a, { qb: !0 }).node;
                        d.ab.hb(d, { timestamp: Math.max(b, c) });
                        return 0;
                    } catch (e) {
                        a = e;
                        if (!(a instanceof K)) {
                            a += ' : ';
                            a: {
                                d = Error();
                                if (!d.stack) {
                                    try {
                                        throw Error(0);
                                    } catch (g) {
                                        d = g;
                                    }
                                    if (!d.stack) {
                                        d = '(no stack trace available)';
                                        break a;
                                    }
                                }
                                d = d.stack.toString();
                            }
                            f.extraStackTrace &&
                                (d += '\n' + f.extraStackTrace());
                            d = Va(d);
                            throw a + d;
                        }
                        pb(a.eb);
                        return -1;
                    }
                },
                C: function () {
                    B('OOM');
                },
                a: Ca,
            },
            buffer,
        );
        f.asm = Vc;
        f._RegisterExtensionFunctions = function () {
            return f.asm.ha.apply(null, arguments);
        };
        var nb = (f.___emscripten_environ_constructor = function () {
            return f.asm.ia.apply(null, arguments);
        });
        f.___errno_location = function () {
            return f.asm.ja.apply(null, arguments);
        };
        var Qc = (f.__get_daylight = function () {
                return f.asm.ka.apply(null, arguments);
            }),
            Pc = (f.__get_timezone = function () {
                return f.asm.la.apply(null, arguments);
            }),
            Rc = (f.__get_tzname = function () {
                return f.asm.ma.apply(null, arguments);
            }),
            ha = (f._free = function () {
                return f.asm.na.apply(null, arguments);
            }),
            Ta = (f._malloc = function () {
                return f.asm.oa.apply(null, arguments);
            }),
            Tc = (f._memalign = function () {
                return f.asm.pa.apply(null, arguments);
            }),
            Uc = (f._memset = function () {
                return f.asm.qa.apply(null, arguments);
            });
        f._sqlite3_bind_blob = function () {
            return f.asm.ra.apply(null, arguments);
        };
        f._sqlite3_bind_double = function () {
            return f.asm.sa.apply(null, arguments);
        };
        f._sqlite3_bind_int = function () {
            return f.asm.ta.apply(null, arguments);
        };
        f._sqlite3_bind_parameter_index = function () {
            return f.asm.ua.apply(null, arguments);
        };
        f._sqlite3_bind_text = function () {
            return f.asm.va.apply(null, arguments);
        };
        f._sqlite3_changes = function () {
            return f.asm.wa.apply(null, arguments);
        };
        f._sqlite3_clear_bindings = function () {
            return f.asm.xa.apply(null, arguments);
        };
        f._sqlite3_close_v2 = function () {
            return f.asm.ya.apply(null, arguments);
        };
        f._sqlite3_column_blob = function () {
            return f.asm.za.apply(null, arguments);
        };
        f._sqlite3_column_bytes = function () {
            return f.asm.Aa.apply(null, arguments);
        };
        f._sqlite3_column_double = function () {
            return f.asm.Ba.apply(null, arguments);
        };
        f._sqlite3_column_name = function () {
            return f.asm.Ca.apply(null, arguments);
        };
        f._sqlite3_column_text = function () {
            return f.asm.Da.apply(null, arguments);
        };
        f._sqlite3_column_type = function () {
            return f.asm.Ea.apply(null, arguments);
        };
        f._sqlite3_create_function_v2 = function () {
            return f.asm.Fa.apply(null, arguments);
        };
        f._sqlite3_data_count = function () {
            return f.asm.Ga.apply(null, arguments);
        };
        f._sqlite3_errmsg = function () {
            return f.asm.Ha.apply(null, arguments);
        };
        f._sqlite3_exec = function () {
            return f.asm.Ia.apply(null, arguments);
        };
        f._sqlite3_finalize = function () {
            return f.asm.Ja.apply(null, arguments);
        };
        f._sqlite3_free = function () {
            return f.asm.Ka.apply(null, arguments);
        };
        f._sqlite3_open = function () {
            return f.asm.La.apply(null, arguments);
        };
        f._sqlite3_prepare_v2 = function () {
            return f.asm.Ma.apply(null, arguments);
        };
        f._sqlite3_reset = function () {
            return f.asm.Na.apply(null, arguments);
        };
        f._sqlite3_result_double = function () {
            return f.asm.Oa.apply(null, arguments);
        };
        f._sqlite3_result_null = function () {
            return f.asm.Pa.apply(null, arguments);
        };
        f._sqlite3_result_text = function () {
            return f.asm.Qa.apply(null, arguments);
        };
        f._sqlite3_step = function () {
            return f.asm.Ra.apply(null, arguments);
        };
        f._sqlite3_value_blob = function () {
            return f.asm.Sa.apply(null, arguments);
        };
        f._sqlite3_value_bytes = function () {
            return f.asm.Ta.apply(null, arguments);
        };
        f._sqlite3_value_double = function () {
            return f.asm.Ua.apply(null, arguments);
        };
        f._sqlite3_value_int = function () {
            return f.asm.Va.apply(null, arguments);
        };
        f._sqlite3_value_text = function () {
            return f.asm.Wa.apply(null, arguments);
        };
        f._sqlite3_value_type = function () {
            return f.asm.Xa.apply(null, arguments);
        };
        var h = (f.stackAlloc = function () {
                return f.asm.Za.apply(null, arguments);
            }),
            qa = (f.stackRestore = function () {
                return f.asm._a.apply(null, arguments);
            }),
            na = (f.stackSave = function () {
                return f.asm.$a.apply(null, arguments);
            });
        f.dynCall_vi = function () {
            return f.asm.Ya.apply(null, arguments);
        };
        f.asm = Vc;
        f.cwrap = function (a, b, c, d) {
            c = c || [];
            var e = c.every(function (a) {
                return 'number' === a;
            });
            return 'string' !== b && e && !d
                ? Na(a)
                : function () {
                      return Oa(a, b, c, arguments);
                  };
        };
        f.stackSave = na;
        f.stackRestore = qa;
        f.stackAlloc = h;
        function Wc(a) {
            this.name = 'ExitStatus';
            this.message = 'Program terminated with exit(' + a + ')';
            this.status = a;
        }
        Wc.prototype = Error();
        Wc.prototype.constructor = Wc;
        gb = function Xc() {
            f.calledRun || Yc();
            f.calledRun || (gb = Xc);
        };
        function Yc() {
            function a() {
                if (!f.calledRun && ((f.calledRun = !0), !Ma)) {
                    db ||
                        ((db = !0),
                        f.noFSInit ||
                            Hc ||
                            ((Hc = !0),
                            Gc(),
                            (f.stdin = f.stdin),
                            (f.stdout = f.stdout),
                            (f.stderr = f.stderr),
                            f.stdin
                                ? Ic('stdin', f.stdin)
                                : Ac('/dev/tty', '/dev/stdin'),
                            f.stdout
                                ? Ic('stdout', null, f.stdout)
                                : Ac('/dev/tty', '/dev/stdout'),
                            f.stderr
                                ? Ic('stderr', null, f.stderr)
                                : Ac('/dev/tty1', '/dev/stderr'),
                            p('/dev/stdin', 'r'),
                            p('/dev/stdout', 'w'),
                            p('/dev/stderr', 'w')),
                        Za(ab));
                    Jb = !1;
                    Za(bb);
                    if (f.onRuntimeInitialized) f.onRuntimeInitialized();
                    if (f.postRun)
                        for (
                            'function' == typeof f.postRun &&
                            (f.postRun = [f.postRun]);
                            f.postRun.length;

                        ) {
                            var a = f.postRun.shift();
                            cb.unshift(a);
                        }
                    Za(cb);
                }
            }
            if (!(0 < H)) {
                if (f.preRun)
                    for (
                        'function' == typeof f.preRun &&
                        (f.preRun = [f.preRun]);
                        f.preRun.length;

                    )
                        eb();
                Za($a);
                0 < H ||
                    f.calledRun ||
                    (f.setStatus
                        ? (f.setStatus('Running...'),
                          setTimeout(function () {
                              setTimeout(function () {
                                  f.setStatus('');
                              }, 1);
                              a();
                          }, 1))
                        : a());
            }
        }
        f.run = Yc;
        function B(a) {
            if (f.onAbort) f.onAbort(a);
            void 0 !== a ? (Aa(a), C(a), (a = JSON.stringify(a))) : (a = '');
            Ma = !0;
            throw 'abort(' + a + '). Build with -s ASSERTIONS=1 for more info.';
        }
        f.abort = B;
        if (f.preInit)
            for (
                'function' == typeof f.preInit && (f.preInit = [f.preInit]);
                0 < f.preInit.length;

            )
                f.preInit.pop()();
        f.noExitRuntime = !0;
        Yc();

        // The shell-pre.js and emcc-generated code goes above
        return Module;
    }); // The end of the promise being returned

    return initSqlJsPromise;
}; // The end of our initSqlJs function

// This bit below is copied almost exactly from what you get when you use the MODULARIZE=1 flag with emcc
// However, we don't want to use the emcc modularization. See shell-pre.js
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = initSqlJs;
    // This will allow the module to be used in ES6 or CommonJS
    module.exports.default = initSqlJs;
} else if (typeof define === 'function' && define['amd']) {
    define([], function () {
        return initSqlJs;
    });
} else if (typeof exports === 'object') {
    exports['Module'] = initSqlJs;
}
