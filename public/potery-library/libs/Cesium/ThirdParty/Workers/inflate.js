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
/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

!(function (i) {
    function e() {
        function i(i, e, t, n, s, o, b, x, c, v, h) {
            var k, m, y, g, p, I, E, S, U, z, D, M, L, P, j;
            (z = 0), (p = t);
            do {
                a[i[e + z]]++, z++, p--;
            } while (0 !== p);
            if (a[0] == t) return (b[0] = -1), (x[0] = 0), l;
            for (S = x[0], I = 1; I <= A && 0 === a[I]; I++);
            for (E = I, S < I && (S = I), p = A; 0 !== p && 0 === a[p]; p--);
            for (
                y = p, S > p && (S = p), x[0] = S, P = 1 << I;
                I < p;
                I++, P <<= 1
            )
                if ((P -= a[I]) < 0) return f;
            if ((P -= a[p]) < 0) return f;
            for (a[p] += P, d[1] = I = 0, z = 1, L = 2; 0 != --p; )
                (d[L] = I += a[z]), L++, z++;
            (p = 0), (z = 0);
            do {
                0 !== (I = i[e + z]) && (h[d[I]++] = p), z++;
            } while (++p < t);
            for (
                t = d[y],
                    d[0] = p = 0,
                    z = 0,
                    g = -1,
                    M = -S,
                    _[0] = 0,
                    D = 0,
                    j = 0;
                E <= y;
                E++
            )
                for (k = a[E]; 0 != k--; ) {
                    for (; E > M + S; ) {
                        if (
                            (g++,
                            (M += S),
                            (j = y - M),
                            (j = j > S ? S : j),
                            (m = 1 << (I = E - M)) > k + 1 &&
                                ((m -= k + 1), (L = E), I < j))
                        )
                            for (; ++I < j && !((m <<= 1) <= a[++L]); )
                                m -= a[L];
                        if (((j = 1 << I), v[0] + j > w)) return f;
                        (_[g] = D = v[0]),
                            (v[0] += j),
                            0 !== g
                                ? ((d[g] = p),
                                  (r[0] = I),
                                  (r[1] = S),
                                  (I = p >>> (M - S)),
                                  (r[2] = D - _[g - 1] - I),
                                  c.set(r, 3 * (_[g - 1] + I)))
                                : (b[0] = D);
                    }
                    for (
                        r[1] = E - M,
                            z >= t
                                ? (r[0] = 192)
                                : h[z] < n
                                  ? ((r[0] = h[z] < 256 ? 0 : 96),
                                    (r[2] = h[z++]))
                                  : ((r[0] = o[h[z] - n] + 16 + 64),
                                    (r[2] = s[h[z++] - n])),
                            m = 1 << (E - M),
                            I = p >>> M;
                        I < j;
                        I += m
                    )
                        c.set(r, 3 * (D + I));
                    for (I = 1 << (E - 1); 0 != (p & I); I >>>= 1) p ^= I;
                    for (p ^= I, U = (1 << M) - 1; (p & U) != d[g]; )
                        g--, (M -= S), (U = (1 << M) - 1);
                }
            return 0 !== P && 1 != y ? u : l;
        }
        function e(i) {
            var e;
            for (
                t ||
                    ((t = []),
                    (n = []),
                    (a = new Int32Array(A + 1)),
                    (r = []),
                    (_ = new Int32Array(A)),
                    (d = new Int32Array(A + 1))),
                    n.length < i && (n = []),
                    e = 0;
                e < i;
                e++
            )
                n[e] = 0;
            for (e = 0; e < A + 1; e++) a[e] = 0;
            for (e = 0; e < 3; e++) r[e] = 0;
            _.set(a.subarray(0, A), 0), d.set(a.subarray(0, A + 1), 0);
        }
        var t,
            n,
            a,
            r,
            _,
            d,
            s = this;
        (s.inflate_trees_bits = function (a, r, _, l, d) {
            var s;
            return (
                e(19),
                (t[0] = 0),
                (s = i(a, 0, 19, 19, null, null, _, r, l, t, n)),
                s == f
                    ? (d.msg = 'oversubscribed dynamic bit lengths tree')
                    : (s != u && 0 !== r[0]) ||
                      ((d.msg = 'incomplete dynamic bit lengths tree'),
                      (s = f)),
                s
            );
        }),
            (s.inflate_trees_dynamic = function (a, r, _, d, s, o, x, w, c) {
                var v;
                return (
                    e(288),
                    (t[0] = 0),
                    (v = i(_, 0, a, 257, m, y, o, d, w, t, n)) != l ||
                    0 === d[0]
                        ? (v == f
                              ? (c.msg = 'oversubscribed literal/length tree')
                              : v != b &&
                                ((c.msg = 'incomplete literal/length tree'),
                                (v = f)),
                          v)
                        : (e(288),
                          (v = i(_, a, r, 0, g, p, x, s, w, t, n)),
                          v != l || (0 === s[0] && a > 257)
                              ? (v == f
                                    ? (c.msg = 'oversubscribed distance tree')
                                    : v == u
                                      ? ((c.msg = 'incomplete distance tree'),
                                        (v = f))
                                      : v != b &&
                                        ((c.msg =
                                            'empty distance tree with lengths'),
                                        (v = f)),
                                v)
                              : l)
                );
            });
    }
    function t() {
        function i(i, e, t, n, a, r, _, s) {
            var o, b, u, w, c, v, h, k, m, y, g, p, A, I, E, S;
            (h = s.next_in_index),
                (k = s.avail_in),
                (c = _.bitb),
                (v = _.bitk),
                (m = _.write),
                (y = m < _.read ? _.read - m - 1 : _.end - m),
                (g = x[i]),
                (p = x[e]);
            do {
                for (; v < 20; )
                    k--, (c |= (255 & s.read_byte(h++)) << v), (v += 8);
                if (
                    ((o = c & g),
                    (b = t),
                    (u = n),
                    (S = 3 * (u + o)),
                    0 !== (w = b[S]))
                )
                    for (;;) {
                        if (
                            ((c >>= b[S + 1]), (v -= b[S + 1]), 0 != (16 & w))
                        ) {
                            for (
                                w &= 15,
                                    A = b[S + 2] + (c & x[w]),
                                    c >>= w,
                                    v -= w;
                                v < 15;

                            )
                                k--,
                                    (c |= (255 & s.read_byte(h++)) << v),
                                    (v += 8);
                            for (
                                o = c & p,
                                    b = a,
                                    u = r,
                                    S = 3 * (u + o),
                                    w = b[S];
                                ;

                            ) {
                                if (
                                    ((c >>= b[S + 1]),
                                    (v -= b[S + 1]),
                                    0 != (16 & w))
                                ) {
                                    for (w &= 15; v < w; )
                                        k--,
                                            (c |=
                                                (255 & s.read_byte(h++)) << v),
                                            (v += 8);
                                    if (
                                        ((I = b[S + 2] + (c & x[w])),
                                        (c >>= w),
                                        (v -= w),
                                        (y -= A),
                                        m >= I)
                                    )
                                        (E = m - I),
                                            m - E > 0 && 2 > m - E
                                                ? ((_.window[m++] =
                                                      _.window[E++]),
                                                  (_.window[m++] =
                                                      _.window[E++]),
                                                  (A -= 2))
                                                : (_.window.set(
                                                      _.window.subarray(
                                                          E,
                                                          E + 2,
                                                      ),
                                                      m,
                                                  ),
                                                  (m += 2),
                                                  (E += 2),
                                                  (A -= 2));
                                    else {
                                        E = m - I;
                                        do {
                                            E += _.end;
                                        } while (E < 0);
                                        if (((w = _.end - E), A > w)) {
                                            if (
                                                ((A -= w),
                                                m - E > 0 && w > m - E)
                                            )
                                                do {
                                                    _.window[m++] =
                                                        _.window[E++];
                                                } while (0 != --w);
                                            else
                                                _.window.set(
                                                    _.window.subarray(E, E + w),
                                                    m,
                                                ),
                                                    (m += w),
                                                    (E += w),
                                                    (w = 0);
                                            E = 0;
                                        }
                                    }
                                    if (m - E > 0 && A > m - E)
                                        do {
                                            _.window[m++] = _.window[E++];
                                        } while (0 != --A);
                                    else
                                        _.window.set(
                                            _.window.subarray(E, E + A),
                                            m,
                                        ),
                                            (m += A),
                                            (E += A),
                                            (A = 0);
                                    break;
                                }
                                if (0 != (64 & w))
                                    return (
                                        (s.msg = 'invalid distance code'),
                                        (A = s.avail_in - k),
                                        (A = v >> 3 < A ? v >> 3 : A),
                                        (k += A),
                                        (h -= A),
                                        (v -= A << 3),
                                        (_.bitb = c),
                                        (_.bitk = v),
                                        (s.avail_in = k),
                                        (s.total_in += h - s.next_in_index),
                                        (s.next_in_index = h),
                                        (_.write = m),
                                        f
                                    );
                                (o += b[S + 2]),
                                    (o += c & x[w]),
                                    (S = 3 * (u + o)),
                                    (w = b[S]);
                            }
                            break;
                        }
                        if (0 != (64 & w))
                            return 0 != (32 & w)
                                ? ((A = s.avail_in - k),
                                  (A = v >> 3 < A ? v >> 3 : A),
                                  (k += A),
                                  (h -= A),
                                  (v -= A << 3),
                                  (_.bitb = c),
                                  (_.bitk = v),
                                  (s.avail_in = k),
                                  (s.total_in += h - s.next_in_index),
                                  (s.next_in_index = h),
                                  (_.write = m),
                                  d)
                                : ((s.msg = 'invalid literal/length code'),
                                  (A = s.avail_in - k),
                                  (A = v >> 3 < A ? v >> 3 : A),
                                  (k += A),
                                  (h -= A),
                                  (v -= A << 3),
                                  (_.bitb = c),
                                  (_.bitk = v),
                                  (s.avail_in = k),
                                  (s.total_in += h - s.next_in_index),
                                  (s.next_in_index = h),
                                  (_.write = m),
                                  f);
                        if (
                            ((o += b[S + 2]),
                            (o += c & x[w]),
                            (S = 3 * (u + o)),
                            0 === (w = b[S]))
                        ) {
                            (c >>= b[S + 1]),
                                (v -= b[S + 1]),
                                (_.window[m++] = b[S + 2]),
                                y--;
                            break;
                        }
                    }
                else
                    (c >>= b[S + 1]),
                        (v -= b[S + 1]),
                        (_.window[m++] = b[S + 2]),
                        y--;
            } while (y >= 258 && k >= 10);
            return (
                (A = s.avail_in - k),
                (A = v >> 3 < A ? v >> 3 : A),
                (k += A),
                (h -= A),
                (v -= A << 3),
                (_.bitb = c),
                (_.bitk = v),
                (s.avail_in = k),
                (s.total_in += h - s.next_in_index),
                (s.next_in_index = h),
                (_.write = m),
                l
            );
        }
        var e,
            t,
            n,
            a,
            r = this,
            _ = 0,
            s = 0,
            b = 0,
            u = 0,
            w = 0,
            c = 0,
            v = 0,
            h = 0,
            k = 0,
            m = 0;
        (r.init = function (i, r, _, l, d, s) {
            (e = I),
                (v = i),
                (h = r),
                (n = _),
                (k = l),
                (a = d),
                (m = s),
                (t = null);
        }),
            (r.proc = function (r, y, g) {
                var p,
                    A,
                    q,
                    B,
                    C,
                    F,
                    G,
                    H = 0,
                    J = 0,
                    K = 0;
                for (
                    K = y.next_in_index,
                        B = y.avail_in,
                        H = r.bitb,
                        J = r.bitk,
                        C = r.write,
                        F = C < r.read ? r.read - C - 1 : r.end - C;
                    ;

                )
                    switch (e) {
                        case I:
                            if (
                                F >= 258 &&
                                B >= 10 &&
                                ((r.bitb = H),
                                (r.bitk = J),
                                (y.avail_in = B),
                                (y.total_in += K - y.next_in_index),
                                (y.next_in_index = K),
                                (r.write = C),
                                (g = i(v, h, n, k, a, m, r, y)),
                                (K = y.next_in_index),
                                (B = y.avail_in),
                                (H = r.bitb),
                                (J = r.bitk),
                                (C = r.write),
                                (F = C < r.read ? r.read - C - 1 : r.end - C),
                                g != l)
                            ) {
                                e = g == d ? L : j;
                                break;
                            }
                            (b = v), (t = n), (s = k), (e = E);
                        case E:
                            for (p = b; J < p; ) {
                                if (0 === B)
                                    return (
                                        (r.bitb = H),
                                        (r.bitk = J),
                                        (y.avail_in = B),
                                        (y.total_in += K - y.next_in_index),
                                        (y.next_in_index = K),
                                        (r.write = C),
                                        r.inflate_flush(y, g)
                                    );
                                (g = l),
                                    B--,
                                    (H |= (255 & y.read_byte(K++)) << J),
                                    (J += 8);
                            }
                            if (
                                ((A = 3 * (s + (H & x[p]))),
                                (H >>>= t[A + 1]),
                                (J -= t[A + 1]),
                                0 === (q = t[A]))
                            ) {
                                (u = t[A + 2]), (e = M);
                                break;
                            }
                            if (0 != (16 & q)) {
                                (w = 15 & q), (_ = t[A + 2]), (e = S);
                                break;
                            }
                            if (0 == (64 & q)) {
                                (b = q), (s = A / 3 + t[A + 2]);
                                break;
                            }
                            if (0 != (32 & q)) {
                                e = L;
                                break;
                            }
                            return (
                                (e = j),
                                (y.msg = 'invalid literal/length code'),
                                (g = f),
                                (r.bitb = H),
                                (r.bitk = J),
                                (y.avail_in = B),
                                (y.total_in += K - y.next_in_index),
                                (y.next_in_index = K),
                                (r.write = C),
                                r.inflate_flush(y, g)
                            );
                        case S:
                            for (p = w; J < p; ) {
                                if (0 === B)
                                    return (
                                        (r.bitb = H),
                                        (r.bitk = J),
                                        (y.avail_in = B),
                                        (y.total_in += K - y.next_in_index),
                                        (y.next_in_index = K),
                                        (r.write = C),
                                        r.inflate_flush(y, g)
                                    );
                                (g = l),
                                    B--,
                                    (H |= (255 & y.read_byte(K++)) << J),
                                    (J += 8);
                            }
                            (_ += H & x[p]),
                                (H >>= p),
                                (J -= p),
                                (b = h),
                                (t = a),
                                (s = m),
                                (e = U);
                        case U:
                            for (p = b; J < p; ) {
                                if (0 === B)
                                    return (
                                        (r.bitb = H),
                                        (r.bitk = J),
                                        (y.avail_in = B),
                                        (y.total_in += K - y.next_in_index),
                                        (y.next_in_index = K),
                                        (r.write = C),
                                        r.inflate_flush(y, g)
                                    );
                                (g = l),
                                    B--,
                                    (H |= (255 & y.read_byte(K++)) << J),
                                    (J += 8);
                            }
                            if (
                                ((A = 3 * (s + (H & x[p]))),
                                (H >>= t[A + 1]),
                                (J -= t[A + 1]),
                                0 != (16 & (q = t[A])))
                            ) {
                                (w = 15 & q), (c = t[A + 2]), (e = z);
                                break;
                            }
                            if (0 == (64 & q)) {
                                (b = q), (s = A / 3 + t[A + 2]);
                                break;
                            }
                            return (
                                (e = j),
                                (y.msg = 'invalid distance code'),
                                (g = f),
                                (r.bitb = H),
                                (r.bitk = J),
                                (y.avail_in = B),
                                (y.total_in += K - y.next_in_index),
                                (y.next_in_index = K),
                                (r.write = C),
                                r.inflate_flush(y, g)
                            );
                        case z:
                            for (p = w; J < p; ) {
                                if (0 === B)
                                    return (
                                        (r.bitb = H),
                                        (r.bitk = J),
                                        (y.avail_in = B),
                                        (y.total_in += K - y.next_in_index),
                                        (y.next_in_index = K),
                                        (r.write = C),
                                        r.inflate_flush(y, g)
                                    );
                                (g = l),
                                    B--,
                                    (H |= (255 & y.read_byte(K++)) << J),
                                    (J += 8);
                            }
                            (c += H & x[p]), (H >>= p), (J -= p), (e = D);
                        case D:
                            for (G = C - c; G < 0; ) G += r.end;
                            for (; 0 !== _; ) {
                                if (
                                    0 === F &&
                                    (C == r.end &&
                                        0 !== r.read &&
                                        ((C = 0),
                                        (F =
                                            C < r.read
                                                ? r.read - C - 1
                                                : r.end - C)),
                                    0 === F &&
                                        ((r.write = C),
                                        (g = r.inflate_flush(y, g)),
                                        (C = r.write),
                                        (F =
                                            C < r.read
                                                ? r.read - C - 1
                                                : r.end - C),
                                        C == r.end &&
                                            0 !== r.read &&
                                            ((C = 0),
                                            (F =
                                                C < r.read
                                                    ? r.read - C - 1
                                                    : r.end - C)),
                                        0 === F))
                                )
                                    return (
                                        (r.bitb = H),
                                        (r.bitk = J),
                                        (y.avail_in = B),
                                        (y.total_in += K - y.next_in_index),
                                        (y.next_in_index = K),
                                        (r.write = C),
                                        r.inflate_flush(y, g)
                                    );
                                (r.window[C++] = r.window[G++]),
                                    F--,
                                    G == r.end && (G = 0),
                                    _--;
                            }
                            e = I;
                            break;
                        case M:
                            if (
                                0 === F &&
                                (C == r.end &&
                                    0 !== r.read &&
                                    ((C = 0),
                                    (F =
                                        C < r.read
                                            ? r.read - C - 1
                                            : r.end - C)),
                                0 === F &&
                                    ((r.write = C),
                                    (g = r.inflate_flush(y, g)),
                                    (C = r.write),
                                    (F =
                                        C < r.read
                                            ? r.read - C - 1
                                            : r.end - C),
                                    C == r.end &&
                                        0 !== r.read &&
                                        ((C = 0),
                                        (F =
                                            C < r.read
                                                ? r.read - C - 1
                                                : r.end - C)),
                                    0 === F))
                            )
                                return (
                                    (r.bitb = H),
                                    (r.bitk = J),
                                    (y.avail_in = B),
                                    (y.total_in += K - y.next_in_index),
                                    (y.next_in_index = K),
                                    (r.write = C),
                                    r.inflate_flush(y, g)
                                );
                            (g = l), (r.window[C++] = u), F--, (e = I);
                            break;
                        case L:
                            if (
                                (J > 7 && ((J -= 8), B++, K--),
                                (r.write = C),
                                (g = r.inflate_flush(y, g)),
                                (C = r.write),
                                (F = C < r.read ? r.read - C - 1 : r.end - C),
                                r.read != r.write)
                            )
                                return (
                                    (r.bitb = H),
                                    (r.bitk = J),
                                    (y.avail_in = B),
                                    (y.total_in += K - y.next_in_index),
                                    (y.next_in_index = K),
                                    (r.write = C),
                                    r.inflate_flush(y, g)
                                );
                            e = P;
                        case P:
                            return (
                                (g = d),
                                (r.bitb = H),
                                (r.bitk = J),
                                (y.avail_in = B),
                                (y.total_in += K - y.next_in_index),
                                (y.next_in_index = K),
                                (r.write = C),
                                r.inflate_flush(y, g)
                            );
                        case j:
                            return (
                                (g = f),
                                (r.bitb = H),
                                (r.bitk = J),
                                (y.avail_in = B),
                                (y.total_in += K - y.next_in_index),
                                (y.next_in_index = K),
                                (r.write = C),
                                r.inflate_flush(y, g)
                            );
                        default:
                            return (
                                (g = o),
                                (r.bitb = H),
                                (r.bitk = J),
                                (y.avail_in = B),
                                (y.total_in += K - y.next_in_index),
                                (y.next_in_index = K),
                                (r.write = C),
                                r.inflate_flush(y, g)
                            );
                    }
            }),
            (r.free = function () {});
    }
    function n(i, n) {
        var a,
            r = this,
            _ = B,
            s = 0,
            b = 0,
            c = 0,
            v = [0],
            h = [0],
            k = new t(),
            m = 0,
            y = new Int32Array(3 * w),
            g = new e();
        (r.bitk = 0),
            (r.bitb = 0),
            (r.window = new Uint8Array(n)),
            (r.end = n),
            (r.read = 0),
            (r.write = 0),
            (r.reset = function (i, e) {
                e && (e[0] = 0),
                    _ == K && k.free(i),
                    (_ = B),
                    (r.bitk = 0),
                    (r.bitb = 0),
                    (r.read = r.write = 0);
            }),
            r.reset(i, null),
            (r.inflate_flush = function (i, e) {
                var t, n, a;
                return (
                    (n = i.next_out_index),
                    (a = r.read),
                    (t = (a <= r.write ? r.write : r.end) - a),
                    t > i.avail_out && (t = i.avail_out),
                    0 !== t && e == u && (e = l),
                    (i.avail_out -= t),
                    (i.total_out += t),
                    i.next_out.set(r.window.subarray(a, a + t), n),
                    (n += t),
                    (a += t),
                    a == r.end &&
                        ((a = 0),
                        r.write == r.end && (r.write = 0),
                        (t = r.write - a),
                        t > i.avail_out && (t = i.avail_out),
                        0 !== t && e == u && (e = l),
                        (i.avail_out -= t),
                        (i.total_out += t),
                        i.next_out.set(r.window.subarray(a, a + t), n),
                        (n += t),
                        (a += t)),
                    (i.next_out_index = n),
                    (r.read = a),
                    e
                );
            }),
            (r.proc = function (i, t) {
                var n, u, w, p, A, I, E, S;
                for (
                    p = i.next_in_index,
                        A = i.avail_in,
                        u = r.bitb,
                        w = r.bitk,
                        I = r.write,
                        E = I < r.read ? r.read - I - 1 : r.end - I;
                    ;

                )
                    switch (_) {
                        case B:
                            for (; w < 3; ) {
                                if (0 === A)
                                    return (
                                        (r.bitb = u),
                                        (r.bitk = w),
                                        (i.avail_in = A),
                                        (i.total_in += p - i.next_in_index),
                                        (i.next_in_index = p),
                                        (r.write = I),
                                        r.inflate_flush(i, t)
                                    );
                                (t = l),
                                    A--,
                                    (u |= (255 & i.read_byte(p++)) << w),
                                    (w += 8);
                            }
                            switch (((n = 7 & u), (m = 1 & n), n >>> 1)) {
                                case 0:
                                    (u >>>= 3),
                                        (w -= 3),
                                        (n = 7 & w),
                                        (u >>>= n),
                                        (w -= n),
                                        (_ = C);
                                    break;
                                case 1:
                                    var U = [],
                                        z = [],
                                        D = [[]],
                                        M = [[]];
                                    e.inflate_trees_fixed(U, z, D, M),
                                        k.init(U[0], z[0], D[0], 0, M[0], 0),
                                        (u >>>= 3),
                                        (w -= 3),
                                        (_ = K);
                                    break;
                                case 2:
                                    (u >>>= 3), (w -= 3), (_ = G);
                                    break;
                                case 3:
                                    return (
                                        (u >>>= 3),
                                        (w -= 3),
                                        (_ = Q),
                                        (i.msg = 'invalid block type'),
                                        (t = f),
                                        (r.bitb = u),
                                        (r.bitk = w),
                                        (i.avail_in = A),
                                        (i.total_in += p - i.next_in_index),
                                        (i.next_in_index = p),
                                        (r.write = I),
                                        r.inflate_flush(i, t)
                                    );
                            }
                            break;
                        case C:
                            for (; w < 32; ) {
                                if (0 === A)
                                    return (
                                        (r.bitb = u),
                                        (r.bitk = w),
                                        (i.avail_in = A),
                                        (i.total_in += p - i.next_in_index),
                                        (i.next_in_index = p),
                                        (r.write = I),
                                        r.inflate_flush(i, t)
                                    );
                                (t = l),
                                    A--,
                                    (u |= (255 & i.read_byte(p++)) << w),
                                    (w += 8);
                            }
                            if (((~u >>> 16) & 65535) != (65535 & u))
                                return (
                                    (_ = Q),
                                    (i.msg = 'invalid stored block lengths'),
                                    (t = f),
                                    (r.bitb = u),
                                    (r.bitk = w),
                                    (i.avail_in = A),
                                    (i.total_in += p - i.next_in_index),
                                    (i.next_in_index = p),
                                    (r.write = I),
                                    r.inflate_flush(i, t)
                                );
                            (s = 65535 & u),
                                (u = w = 0),
                                (_ = 0 !== s ? F : 0 !== m ? N : B);
                            break;
                        case F:
                            if (0 === A)
                                return (
                                    (r.bitb = u),
                                    (r.bitk = w),
                                    (i.avail_in = A),
                                    (i.total_in += p - i.next_in_index),
                                    (i.next_in_index = p),
                                    (r.write = I),
                                    r.inflate_flush(i, t)
                                );
                            if (
                                0 === E &&
                                (I == r.end &&
                                    0 !== r.read &&
                                    ((I = 0),
                                    (E =
                                        I < r.read
                                            ? r.read - I - 1
                                            : r.end - I)),
                                0 === E &&
                                    ((r.write = I),
                                    (t = r.inflate_flush(i, t)),
                                    (I = r.write),
                                    (E =
                                        I < r.read
                                            ? r.read - I - 1
                                            : r.end - I),
                                    I == r.end &&
                                        0 !== r.read &&
                                        ((I = 0),
                                        (E =
                                            I < r.read
                                                ? r.read - I - 1
                                                : r.end - I)),
                                    0 === E))
                            )
                                return (
                                    (r.bitb = u),
                                    (r.bitk = w),
                                    (i.avail_in = A),
                                    (i.total_in += p - i.next_in_index),
                                    (i.next_in_index = p),
                                    (r.write = I),
                                    r.inflate_flush(i, t)
                                );
                            if (
                                ((t = l),
                                (n = s),
                                n > A && (n = A),
                                n > E && (n = E),
                                r.window.set(i.read_buf(p, n), I),
                                (p += n),
                                (A -= n),
                                (I += n),
                                (E -= n),
                                0 != (s -= n))
                            )
                                break;
                            _ = 0 !== m ? N : B;
                            break;
                        case G:
                            for (; w < 14; ) {
                                if (0 === A)
                                    return (
                                        (r.bitb = u),
                                        (r.bitk = w),
                                        (i.avail_in = A),
                                        (i.total_in += p - i.next_in_index),
                                        (i.next_in_index = p),
                                        (r.write = I),
                                        r.inflate_flush(i, t)
                                    );
                                (t = l),
                                    A--,
                                    (u |= (255 & i.read_byte(p++)) << w),
                                    (w += 8);
                            }
                            if (
                                ((b = n = 16383 & u),
                                (31 & n) > 29 || ((n >> 5) & 31) > 29)
                            )
                                return (
                                    (_ = Q),
                                    (i.msg =
                                        'too many length or distance symbols'),
                                    (t = f),
                                    (r.bitb = u),
                                    (r.bitk = w),
                                    (i.avail_in = A),
                                    (i.total_in += p - i.next_in_index),
                                    (i.next_in_index = p),
                                    (r.write = I),
                                    r.inflate_flush(i, t)
                                );
                            if (
                                ((n = 258 + (31 & n) + ((n >> 5) & 31)),
                                !a || a.length < n)
                            )
                                a = [];
                            else for (S = 0; S < n; S++) a[S] = 0;
                            (u >>>= 14), (w -= 14), (c = 0), (_ = H);
                        case H:
                            for (; c < 4 + (b >>> 10); ) {
                                for (; w < 3; ) {
                                    if (0 === A)
                                        return (
                                            (r.bitb = u),
                                            (r.bitk = w),
                                            (i.avail_in = A),
                                            (i.total_in += p - i.next_in_index),
                                            (i.next_in_index = p),
                                            (r.write = I),
                                            r.inflate_flush(i, t)
                                        );
                                    (t = l),
                                        A--,
                                        (u |= (255 & i.read_byte(p++)) << w),
                                        (w += 8);
                                }
                                (a[q[c++]] = 7 & u), (u >>>= 3), (w -= 3);
                            }
                            for (; c < 19; ) a[q[c++]] = 0;
                            if (
                                ((v[0] = 7),
                                (n = g.inflate_trees_bits(a, v, h, y, i)) != l)
                            )
                                return (
                                    (t = n),
                                    t == f && ((a = null), (_ = Q)),
                                    (r.bitb = u),
                                    (r.bitk = w),
                                    (i.avail_in = A),
                                    (i.total_in += p - i.next_in_index),
                                    (i.next_in_index = p),
                                    (r.write = I),
                                    r.inflate_flush(i, t)
                                );
                            (c = 0), (_ = J);
                        case J:
                            for (;;) {
                                if (
                                    ((n = b),
                                    !(c < 258 + (31 & n) + ((n >> 5) & 31)))
                                )
                                    break;
                                var L, P;
                                for (n = v[0]; w < n; ) {
                                    if (0 === A)
                                        return (
                                            (r.bitb = u),
                                            (r.bitk = w),
                                            (i.avail_in = A),
                                            (i.total_in += p - i.next_in_index),
                                            (i.next_in_index = p),
                                            (r.write = I),
                                            r.inflate_flush(i, t)
                                        );
                                    (t = l),
                                        A--,
                                        (u |= (255 & i.read_byte(p++)) << w),
                                        (w += 8);
                                }
                                if (
                                    ((n = y[3 * (h[0] + (u & x[n])) + 1]),
                                    (P = y[3 * (h[0] + (u & x[n])) + 2]) < 16)
                                )
                                    (u >>>= n), (w -= n), (a[c++] = P);
                                else {
                                    for (
                                        S = 18 == P ? 7 : P - 14,
                                            L = 18 == P ? 11 : 3;
                                        w < n + S;

                                    ) {
                                        if (0 === A)
                                            return (
                                                (r.bitb = u),
                                                (r.bitk = w),
                                                (i.avail_in = A),
                                                (i.total_in +=
                                                    p - i.next_in_index),
                                                (i.next_in_index = p),
                                                (r.write = I),
                                                r.inflate_flush(i, t)
                                            );
                                        (t = l),
                                            A--,
                                            (u |=
                                                (255 & i.read_byte(p++)) << w),
                                            (w += 8);
                                    }
                                    if (
                                        ((u >>>= n),
                                        (w -= n),
                                        (L += u & x[S]),
                                        (u >>>= S),
                                        (w -= S),
                                        (S = c),
                                        (n = b),
                                        S + L >
                                            258 + (31 & n) + ((n >> 5) & 31) ||
                                            (16 == P && S < 1))
                                    )
                                        return (
                                            (a = null),
                                            (_ = Q),
                                            (i.msg =
                                                'invalid bit length repeat'),
                                            (t = f),
                                            (r.bitb = u),
                                            (r.bitk = w),
                                            (i.avail_in = A),
                                            (i.total_in += p - i.next_in_index),
                                            (i.next_in_index = p),
                                            (r.write = I),
                                            r.inflate_flush(i, t)
                                        );
                                    P = 16 == P ? a[S - 1] : 0;
                                    do {
                                        a[S++] = P;
                                    } while (0 != --L);
                                    c = S;
                                }
                            }
                            h[0] = -1;
                            var j = [],
                                R = [],
                                T = [],
                                V = [];
                            if (
                                ((j[0] = 9),
                                (R[0] = 6),
                                (n = b),
                                (n = g.inflate_trees_dynamic(
                                    257 + (31 & n),
                                    1 + ((n >> 5) & 31),
                                    a,
                                    j,
                                    R,
                                    T,
                                    V,
                                    y,
                                    i,
                                )) != l)
                            )
                                return (
                                    n == f && ((a = null), (_ = Q)),
                                    (t = n),
                                    (r.bitb = u),
                                    (r.bitk = w),
                                    (i.avail_in = A),
                                    (i.total_in += p - i.next_in_index),
                                    (i.next_in_index = p),
                                    (r.write = I),
                                    r.inflate_flush(i, t)
                                );
                            k.init(j[0], R[0], y, T[0], y, V[0]), (_ = K);
                        case K:
                            if (
                                ((r.bitb = u),
                                (r.bitk = w),
                                (i.avail_in = A),
                                (i.total_in += p - i.next_in_index),
                                (i.next_in_index = p),
                                (r.write = I),
                                (t = k.proc(r, i, t)) != d)
                            )
                                return r.inflate_flush(i, t);
                            if (
                                ((t = l),
                                k.free(i),
                                (p = i.next_in_index),
                                (A = i.avail_in),
                                (u = r.bitb),
                                (w = r.bitk),
                                (I = r.write),
                                (E = I < r.read ? r.read - I - 1 : r.end - I),
                                0 === m)
                            ) {
                                _ = B;
                                break;
                            }
                            _ = N;
                        case N:
                            if (
                                ((r.write = I),
                                (t = r.inflate_flush(i, t)),
                                (I = r.write),
                                (E = I < r.read ? r.read - I - 1 : r.end - I),
                                r.read != r.write)
                            )
                                return (
                                    (r.bitb = u),
                                    (r.bitk = w),
                                    (i.avail_in = A),
                                    (i.total_in += p - i.next_in_index),
                                    (i.next_in_index = p),
                                    (r.write = I),
                                    r.inflate_flush(i, t)
                                );
                            _ = O;
                        case O:
                            return (
                                (t = d),
                                (r.bitb = u),
                                (r.bitk = w),
                                (i.avail_in = A),
                                (i.total_in += p - i.next_in_index),
                                (i.next_in_index = p),
                                (r.write = I),
                                r.inflate_flush(i, t)
                            );
                        case Q:
                            return (
                                (t = f),
                                (r.bitb = u),
                                (r.bitk = w),
                                (i.avail_in = A),
                                (i.total_in += p - i.next_in_index),
                                (i.next_in_index = p),
                                (r.write = I),
                                r.inflate_flush(i, t)
                            );
                        default:
                            return (
                                (t = o),
                                (r.bitb = u),
                                (r.bitk = w),
                                (i.avail_in = A),
                                (i.total_in += p - i.next_in_index),
                                (i.next_in_index = p),
                                (r.write = I),
                                r.inflate_flush(i, t)
                            );
                    }
            }),
            (r.free = function (i) {
                r.reset(i, null), (r.window = null), (y = null);
            }),
            (r.set_dictionary = function (i, e, t) {
                r.window.set(i.subarray(e, e + t), 0), (r.read = r.write = t);
            }),
            (r.sync_point = function () {
                return _ == C ? 1 : 0;
            });
    }
    function a() {
        function i(i) {
            return i && i.istate
                ? ((i.total_in = i.total_out = 0),
                  (i.msg = null),
                  (i.istate.mode = ei),
                  i.istate.blocks.reset(i, null),
                  l)
                : o;
        }
        var e = this;
        (e.mode = 0),
            (e.method = 0),
            (e.was = [0]),
            (e.need = 0),
            (e.marker = 0),
            (e.wbits = 0),
            (e.inflateEnd = function (i) {
                return e.blocks && e.blocks.free(i), (e.blocks = null), l;
            }),
            (e.inflateInit = function (t, a) {
                return (
                    (t.msg = null),
                    (e.blocks = null),
                    a < 8 || a > 15
                        ? (e.inflateEnd(t), o)
                        : ((e.wbits = a),
                          (t.istate.blocks = new n(t, 1 << a)),
                          i(t),
                          l)
                );
            }),
            (e.inflate = function (i, e) {
                var t, n;
                if (!i || !i.istate || !i.next_in) return o;
                for (e = e == v ? u : l, t = u; ; )
                    switch (i.istate.mode) {
                        case V:
                            if (0 === i.avail_in) return t;
                            if (
                                ((t = e),
                                i.avail_in--,
                                i.total_in++,
                                (15 &
                                    (i.istate.method = i.read_byte(
                                        i.next_in_index++,
                                    ))) !=
                                    T)
                            ) {
                                (i.istate.mode = ni),
                                    (i.msg = 'unknown compression method'),
                                    (i.istate.marker = 5);
                                break;
                            }
                            if (8 + (i.istate.method >> 4) > i.istate.wbits) {
                                (i.istate.mode = ni),
                                    (i.msg = 'invalid window size'),
                                    (i.istate.marker = 5);
                                break;
                            }
                            i.istate.mode = W;
                        case W:
                            if (0 === i.avail_in) return t;
                            if (
                                ((t = e),
                                i.avail_in--,
                                i.total_in++,
                                (n = 255 & i.read_byte(i.next_in_index++)),
                                ((i.istate.method << 8) + n) % 31 != 0)
                            ) {
                                (i.istate.mode = ni),
                                    (i.msg = 'incorrect header check'),
                                    (i.istate.marker = 5);
                                break;
                            }
                            if (0 == (n & R)) {
                                i.istate.mode = ei;
                                break;
                            }
                            i.istate.mode = X;
                        case X:
                            if (0 === i.avail_in) return t;
                            (t = e),
                                i.avail_in--,
                                i.total_in++,
                                (i.istate.need =
                                    ((255 & i.read_byte(i.next_in_index++)) <<
                                        24) &
                                    4278190080),
                                (i.istate.mode = Y);
                        case Y:
                            if (0 === i.avail_in) return t;
                            (t = e),
                                i.avail_in--,
                                i.total_in++,
                                (i.istate.need +=
                                    ((255 & i.read_byte(i.next_in_index++)) <<
                                        16) &
                                    16711680),
                                (i.istate.mode = Z);
                        case Z:
                            if (0 === i.avail_in) return t;
                            (t = e),
                                i.avail_in--,
                                i.total_in++,
                                (i.istate.need +=
                                    ((255 & i.read_byte(i.next_in_index++)) <<
                                        8) &
                                    65280),
                                (i.istate.mode = $);
                        case $:
                            return 0 === i.avail_in
                                ? t
                                : ((t = e),
                                  i.avail_in--,
                                  i.total_in++,
                                  (i.istate.need +=
                                      255 & i.read_byte(i.next_in_index++)),
                                  (i.istate.mode = ii),
                                  s);
                        case ii:
                            return (
                                (i.istate.mode = ni),
                                (i.msg = 'need dictionary'),
                                (i.istate.marker = 0),
                                o
                            );
                        case ei:
                            if ((t = i.istate.blocks.proc(i, t)) == f) {
                                (i.istate.mode = ni), (i.istate.marker = 0);
                                break;
                            }
                            if ((t == l && (t = e), t != d)) return t;
                            (t = e),
                                i.istate.blocks.reset(i, i.istate.was),
                                (i.istate.mode = ti);
                        case ti:
                            return d;
                        case ni:
                            return f;
                        default:
                            return o;
                    }
            }),
            (e.inflateSetDictionary = function (i, e, t) {
                var n = 0,
                    a = t;
                return i && i.istate && i.istate.mode == ii
                    ? (a >= 1 << i.istate.wbits &&
                          ((a = (1 << i.istate.wbits) - 1), (n = t - a)),
                      i.istate.blocks.set_dictionary(e, n, a),
                      (i.istate.mode = ei),
                      l)
                    : o;
            }),
            (e.inflateSync = function (e) {
                var t, n, a, r, _;
                if (!e || !e.istate) return o;
                if (
                    (e.istate.mode != ni &&
                        ((e.istate.mode = ni), (e.istate.marker = 0)),
                    0 === (t = e.avail_in))
                )
                    return u;
                for (
                    n = e.next_in_index, a = e.istate.marker;
                    0 !== t && a < 4;

                )
                    e.read_byte(n) == ai[a]
                        ? a++
                        : (a = 0 !== e.read_byte(n) ? 0 : 4 - a),
                        n++,
                        t--;
                return (
                    (e.total_in += n - e.next_in_index),
                    (e.next_in_index = n),
                    (e.avail_in = t),
                    (e.istate.marker = a),
                    4 != a
                        ? f
                        : ((r = e.total_in),
                          (_ = e.total_out),
                          i(e),
                          (e.total_in = r),
                          (e.total_out = _),
                          (e.istate.mode = ei),
                          l)
                );
            }),
            (e.inflateSyncPoint = function (i) {
                return i && i.istate && i.istate.blocks
                    ? i.istate.blocks.sync_point()
                    : o;
            });
    }
    function r() {}
    function _() {
        var i = this,
            e = new r(),
            t = c,
            n = new Uint8Array(512),
            a = !1;
        e.inflateInit(),
            (e.next_out = n),
            (i.append = function (i, r) {
                var _,
                    s,
                    o = [],
                    f = 0,
                    b = 0,
                    x = 0;
                if (0 !== i.length) {
                    (e.next_in_index = 0),
                        (e.next_in = i),
                        (e.avail_in = i.length);
                    do {
                        if (
                            ((e.next_out_index = 0),
                            (e.avail_out = 512),
                            0 !== e.avail_in ||
                                a ||
                                ((e.next_in_index = 0), (a = !0)),
                            (_ = e.inflate(t)),
                            a && _ == u)
                        )
                            return -1;
                        if (_ != l && _ != d) throw 'inflating: ' + e.msg;
                        if ((a || _ == d) && e.avail_in == i.length) return -1;
                        e.next_out_index &&
                            (512 == e.next_out_index
                                ? o.push(new Uint8Array(n))
                                : o.push(
                                      new Uint8Array(
                                          n.subarray(0, e.next_out_index),
                                      ),
                                  )),
                            (x += e.next_out_index),
                            r &&
                                e.next_in_index > 0 &&
                                e.next_in_index != f &&
                                (r(e.next_in_index), (f = e.next_in_index));
                    } while (e.avail_in > 0 || 0 === e.avail_out);
                    return (
                        (s = new Uint8Array(x)),
                        o.forEach(function (i) {
                            s.set(i, b), (b += i.length);
                        }),
                        s
                    );
                }
            }),
            (i.flush = function () {
                e.inflateEnd();
            });
    }
    var l = 0,
        d = 1,
        s = 2,
        o = -2,
        f = -3,
        b = -4,
        u = -5,
        x = [
            0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191,
            16383, 32767, 65535,
        ],
        w = 1440,
        c = 0,
        v = 4,
        h = [
            96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0,
            8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0,
            0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9,
            144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8,
            104, 0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240,
            80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0,
            8, 52, 0, 9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8,
            4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0,
            9, 152, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8,
            108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248,
            80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0,
            8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2,
            0, 8, 130, 0, 8, 66, 0, 9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9,
            148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8,
            106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 244,
            80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8,
            54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 172, 0, 8, 6,
            0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9,
            156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7, 27, 0, 8,
            110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252,
            96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0,
            8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1,
            0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9,
            146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8,
            105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242,
            80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0,
            8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8,
            5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0,
            9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8,
            109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250,
            80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0,
            8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3,
            0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9,
            150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8,
            107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246,
            80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8,
            55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7,
            0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9,
            158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8,
            111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254,
            96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0,
            8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0,
            0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9,
            145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8,
            104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241,
            80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0,
            8, 52, 0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8,
            4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0,
            9, 153, 84, 7, 83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8,
            108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249,
            80, 7, 3, 0, 8, 82, 0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0,
            8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2,
            0, 8, 130, 0, 8, 66, 0, 9, 229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9,
            149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8,
            106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8, 138, 0, 8, 74, 0, 9, 245,
            80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8,
            54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38, 0, 9, 173, 0, 8, 6,
            0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9,
            157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221, 82, 7, 27, 0, 8,
            110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253,
            96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8, 113, 0,
            8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1,
            0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0, 9,
            147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8,
            105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243,
            80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0,
            8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8,
            5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0,
            9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8,
            109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251,
            80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0,
            8, 51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3,
            0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9,
            151, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8,
            107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247,
            80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8,
            55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7,
            0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9,
            159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8,
            111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
        ],
        k = [
            80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025,
            85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5,
            8193, 82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2,
            87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5,
            97, 93, 5, 24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82,
            5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577,
        ],
        m = [
            3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
            59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ],
        y = [
            0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
            4, 5, 5, 5, 5, 0, 112, 112,
        ],
        g = [
            1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
            513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
            24577,
        ],
        p = [
            0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
            10, 10, 11, 11, 12, 12, 13, 13,
        ],
        A = 15;
    e.inflate_trees_fixed = function (i, e, t, n) {
        return (i[0] = 9), (e[0] = 5), (t[0] = h), (n[0] = k), l;
    };
    var I = 0,
        E = 1,
        S = 2,
        U = 3,
        z = 4,
        D = 5,
        M = 6,
        L = 7,
        P = 8,
        j = 9,
        q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        B = 0,
        C = 1,
        F = 2,
        G = 3,
        H = 4,
        J = 5,
        K = 6,
        N = 7,
        O = 8,
        Q = 9,
        R = 32,
        T = 8,
        V = 0,
        W = 1,
        X = 2,
        Y = 3,
        Z = 4,
        $ = 5,
        ii = 6,
        ei = 7,
        ti = 12,
        ni = 13,
        ai = [0, 0, 255, 255];
    r.prototype = {
        inflateInit: function (i) {
            var e = this;
            return (
                (e.istate = new a()), i || (i = 15), e.istate.inflateInit(e, i)
            );
        },
        inflate: function (i) {
            var e = this;
            return e.istate ? e.istate.inflate(e, i) : o;
        },
        inflateEnd: function () {
            var i = this;
            if (!i.istate) return o;
            var e = i.istate.inflateEnd(i);
            return (i.istate = null), e;
        },
        inflateSync: function () {
            var i = this;
            return i.istate ? i.istate.inflateSync(i) : o;
        },
        inflateSetDictionary: function (i, e) {
            var t = this;
            return t.istate ? t.istate.inflateSetDictionary(t, i, e) : o;
        },
        read_byte: function (i) {
            return this.next_in.subarray(i, i + 1)[0];
        },
        read_buf: function (i, e) {
            return this.next_in.subarray(i, i + e);
        },
    };
    var ri;
    i.zip
        ? (i.zip.Inflater = _)
        : ((ri = new _()),
          i.addEventListener(
              'message',
              function (e) {
                  var t = e.data;
                  t.append &&
                      i.postMessage({
                          onappend: !0,
                          data: ri.append(t.data, function (e) {
                              i.postMessage({ progress: !0, current: e });
                          }),
                      }),
                      t.flush && (ri.flush(), i.postMessage({ onflush: !0 }));
              },
              !1,
          ));
})(this);
