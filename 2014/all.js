/**
 * @license
 * Lo-Dash 2.4.1 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.11
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(a) {
    "use strict";
    var b, c = this;
    if (this.trackingClick=!1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = a, !a ||!a.nodeType)
        throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(c, arguments)
    }, this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(c, arguments)
    }, this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(c, arguments)
    }, this.onTouchMove = function() {
        return FastClick.prototype.onTouchMove.apply(c, arguments)
    }, this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(c, arguments)
    }, this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(c, arguments)
    }, FastClick.notNeeded(a) || (this.deviceIsAndroid && (a.addEventListener("mouseover", this.onMouse, !0), a.addEventListener("mousedown", this.onMouse, !0), a.addEventListener("mouseup", this.onMouse, !0)), a.addEventListener("click", this.onClick, !0), a.addEventListener("touchstart", this.onTouchStart, !1), a.addEventListener("touchmove", this.onTouchMove, !1), a.addEventListener("touchend", this.onTouchEnd, !1), a.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (a.removeEventListener = function(b, c, d) {
        var e = Node.prototype.removeEventListener;
        "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d)
    }, a.addEventListener = function(b, c, d) {
        var e = Node.prototype.addEventListener;
        "click" === b ? e.call(a, b, c.hijacked || (c.hijacked = function(a) {
            a.propagationStopped || c(a)
        }), d) : e.call(a, b, c, d)
    }), "function" == typeof a.onclick && (b = a.onclick, a.addEventListener("click", function(a) {
        b(a)
    }, !1), a.onclick = null))
}
function initializeMaps() {
    {
        var a = {
            zoom: 11,
            center: new google.maps.LatLng(40.67, -73.94),
            styles: [{
                featureType: "water",
                stylers: [{
                    visibility: "on"
                }, {
                    color: "#acbcc9"
                }
                ]
            }, {
                featureType: "landscape",
                stylers: [{
                    color: "#f2e5d4"
                }
                ]
            }, {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{
                    color: "#c5c6c6"
                }
                ]
            }, {
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [{
                    color: "#e4d7c6"
                }
                ]
            }, {
                featureType: "road.local",
                elementType: "geometry",
                stylers: [{
                    color: "#fbfaf7"
                }
                ]
            }, {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{
                    color: "#c5dac6"
                }
                ]
            }, {
                featureType: "administrative",
                stylers: [{
                    visibility: "on"
                }, {
                    lightness: 33
                }
                ]
            }, {
                featureType: "road"
            }, {
                featureType: "poi.park",
                elementType: "labels",
                stylers: [{
                    visibility: "on"
                }, {
                    lightness: 20
                }
                ]
            }, {}, {
                featureType: "road",
                stylers: [{
                    lightness: 20
                }
                ]
            }
            ]
        }, b = document.getElementById("map");
        new google.maps.Map(b, a)
    }
}(function() {
    function a(a, b, c) {
        c = (c || 0)-1;
        for (var d = a ? a.length : 0; ++c < d;)
            if (a[c] === b)
                return c;
        return -1
    }
    function b(b, c) {
        var d = typeof c;
        if (b = b.l, "boolean" == d || null == c)
            return b[c] ? 0 : -1;
        "number" != d && "string" != d && (d = "object");
        var e = "number" == d ? c: r + c;
        return b = (b = b[d]) && b[e], "object" == d ? b&&-1 < a(b, c) ? 0 : -1 : b ? 0 : -1
    }
    function c(a) {
        var b = this.l, c = typeof a;
        if ("boolean" == c || null == a)
            b[a]=!0;
        else {
            "number" != c && "string" != c && (c = "object");
            var d = "number" == c ? a: r + a, b = b[c] || (b[c] = {});
            "object" == c ? (b[d] || (b[d] = [])).push(a) : b[d]=!0
        }
    }
    function d(a) {
        return a.charCodeAt(0)
    }
    function e(a, b) {
        for (var c = a.m, d = b.m, e =- 1, f = c.length; ++e < f;) {
            var g = c[e], h = d[e];
            if (g !== h) {
                if (g > h || "undefined" == typeof g)
                    return 1;
                if (h > g || "undefined" == typeof h)
                    return -1
            }
        }
        return a.n - b.n
    }
    function f(a) {
        var b =- 1, d = a.length, e = a[0], f = a[d / 2 | 0], g = a[d-1];
        if (e && "object" == typeof e && f && "object" == typeof f && g && "object" == typeof g)
            return !1;
        for (e = i(), e["false"] = e["null"] = e["true"] = e.undefined=!1, f = i()
            , f.k = a, f.l = e, f.push = c;
        ++b < d;
        )f.push(a[b]);
        return f
    }
    function g(a) {
        return "\\" + U[a]
    }
    function h() {
        return o.pop() || []
    }
    function i() {
        return p.pop() || {
            k: null,
            l: null,
            m: null,
            "false": !1,
            n: 0,
            "null": !1,
            number: null,
            object: null,
            push: null,
            string: null,
            "true": !1,
            undefined: !1,
            o: null
        }
    }
    function j(a) {
        a.length = 0, o.length < t && o.push(a)
    }
    function k(a) {
        var b = a.l;
        b && k(b), a.k = a.l = a.m = a.object = a.number = a.string = a.o = null, p.length < t && p.push(a)
    }
    function l(a, b, c) {
        b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
        var d =- 1;
        c = c - b || 0;
        for (var e = Array(0 > c ? 0 : c); ++d < c;)
            e[d] = a[b + d];
        return e
    }
    function m(c) {
        function o(a, b, c) {
            if (!a ||!T[typeof a])
                return a;
            b = b && "undefined" == typeof c ? b : bb(b, c, 3);
            for (var d =- 1, e = T[typeof a] && Kc(a)
                , f = e ? e.length : 0;
            ++d < f && (c = e[d], !1 !== b(a[c], c, a));
            );
            return a
        }
        function p(a, b, c) {
            var d;
            if (!a ||!T[typeof a])
                return a;
            b = b && "undefined" == typeof c ? b : bb(b, c, 3);
            for (d in a)
                if (!1 === b(a[d], d, a))
                    break;
            return a
        }
        function t(a, b, c) {
            var d, e = a, f = e;
            if (!e)
                return f;
            for (var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length; ++h < i;)
                if ((e = g[h]) && T[typeof e])
                    for (var j =- 1, k = T[typeof e] && Kc(e)
                        , l = k ? k.length : 0;
            ++j < l;
            )d = k[j], "undefined" == typeof f[d] && (f[d] = e[d]);
            return f
        }
        function U(a, b, c) {
            var d, e = a, f = e;
            if (!e)
                return f;
            var g = arguments, h = 0, i = "number" == typeof c ? 2: g.length;
            if (i > 3 && "function" == typeof g[i-2])
                var j = bb(g[--i-1], g[i--], 2);
            else 
                i > 2 && "function" == typeof g[i-1] && (j = g[--i]);
            for (; ++h < i;)
                if ((e = g[h]) && T[typeof e])
                    for (var k =- 1, l = T[typeof e] && Kc(e)
                        , m = l ? l.length : 0;
            ++k < m;
            )d = l[k], f[d] = j ? j(f[d], e[d]) : e[d];
            return f
        }
        function W(a) {
            var b, c = [];
            if (!a ||!T[typeof a])
                return c;
            for (b in a)
                rc.call(a, b) && c.push(b);
            return c
        }
        function X(a) {
            return a && "object" == typeof a&&!Jc(a) && rc.call(a, "__wrapped__") ? a : new Y(a)
        }
        function Y(a, b) {
            this.__chain__=!!b, this.__wrapped__ = a
        }
        function Z(a) {
            function b() {
                if (d) {
                    var a = l(d);
                    sc.apply(a, arguments)
                }
                if (this instanceof b) {
                    var f = ab(c.prototype), a = c.apply(f, a || arguments);
                    return vb(a) ? a : f
                }
                return c.apply(e, a || arguments)
            }
            var c = a[0], d = a[2], e = a[4];
            return Ic(b, a), b
        }
        function _(a, b, c, d, e) {
            if (c) {
                var f = c(a);
                if ("undefined" != typeof f)
                    return f
            }
            if (!vb(a))
                return a;
            var g = kc.call(a);
            if (!Q[g])
                return a;
            var i = Gc[g];
            switch (g) {
            case J:
            case K:
                return new i( + a);
            case M:
            case P:
                return new i(a);
            case O:
                return f = i(a.source, z.exec(a)), f.lastIndex = a.lastIndex, f
            }
            if (g = Jc(a), b) {
                var k=!d;
                d || (d = h()), e || (e = h());
                for (var m = d.length; m--;)
                    if (d[m] == a)
                        return e[m];
                f = g ? i(a.length) : {}
            } else 
                f = g ? l(a) : U({}, a);
            return g && (rc.call(a, "index") && (f.index = a.index), rc.call(a, "input") && (f.input = a.input)), b ? (d.push(a), e.push(f), (g ? Db : o)(a, function(a, g) {
                f[g] = _(a, b, c, d, e)
            }), k && (j(d), j(e)), f) : f
        }
        function ab(a) {
            return vb(a) ? xc(a) : {}
        }
        function bb(a, b, c) {
            if ("function" != typeof a)
                return Ub;
            if ("undefined" == typeof b ||!("prototype"in a))
                return a;
            var d = a.__bindData__;
            if ("undefined" == typeof d && (Hc.funcNames && (d=!a.name), d = d ||!Hc.funcDecomp, !d)) {
                var e = pc.call(a);
                Hc.funcNames || (d=!A.test(e)), d || (d = E.test(e), Ic(a, d))
            }
            if (!1 === d ||!0 !== d && 1 & d[1])
                return a;
            switch (c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                };
            case 2:
                return function(c, d) {
                    return a.call(b, c, d)
                };
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                };
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
            }
            return Sb(a, b)
        }
        function cb(a) {
            function b() {
                var a = i ? g: this;
                if (e) {
                    var o = l(e);
                    sc.apply(o, arguments)
                }
                return (f || k) && (o || (o = l(arguments)), f && sc.apply(o, f), k && o.length < h) ? (d|=16, cb([c, m ? d : -4 & d, o, null, g, h])) : (o || (o = arguments), j && (c = a[n]), this instanceof b ? (a = ab(c.prototype), o = c.apply(a, o), vb(o) ? o : a) : c.apply(a, o))
            }
            var c = a[0], d = a[1], e = a[2], f = a[3], g = a[4], h = a[5], i = 1 & d, j = 2 & d, k = 4 & d, m = 8 & d, n = c;
            return Ic(b, a), b
        }
        function db(c, d) {
            var e =- 1, g = mb(), h = c ? c.length : 0, i = h >= s && g === a, j = [];
            if (i) {
                var l = f(d);
                l ? (g = b, d = l) : i=!1
            }
            for (; ++e < h;)
                l = c[e], 0 > g(d, l) && j.push(l);
            return i && k(d), j
        }
        function eb(a, b, c, d) {
            d = (d || 0)-1;
            for (var e = a ? a.length : 0, f = []; ++d < e;) {
                var g = a[d];
                if (g && "object" == typeof g && "number" == typeof g.length && (Jc(g) || qb(g))) {
                    b || (g = eb(g, b, c));
                    var h =- 1, i = g.length, j = f.length;
                    for (f.length += i; ++h < i;)
                        f[j++] = g[h]
                } else 
                    c || f.push(g)
            }
            return f
        }
        function fb(a, b, c, d, e, f) {
            if (c) {
                var g = c(a, b);
                if ("undefined" != typeof g)
                    return !!g
            }
            if (a === b)
                return 0 !== a || 1 / a == 1 / b;
            if (a === a&&!(a && T[typeof a] || b && T[typeof b]))
                return !1;
            if (null == a || null == b)
                return a === b;
            var i = kc.call(a), k = kc.call(b);
            if (i == H && (i = N), k == H && (k = N)
                , i != k)return !1;
            switch (i) {
            case J:
            case K:
                return + a ==+ b;
            case M:
                return a!=+a ? b!=+b : 0 == a ? 1 / a == 1 / b : a ==+ b;
            case O:
            case P:
                return a == fc(b)
            }
            if (k = i == I, !k) {
                var l = rc.call(a, "__wrapped__"), m = rc.call(b, "__wrapped__");
                if (l || m)
                    return fb(l ? a.__wrapped__ : a, m ? b.__wrapped__ : b, c, d, e, f);
                if (i != N)
                    return !1;
                if (i = a.constructor, l = b.constructor, i != l&&!(ub(i) && i instanceof i && ub(l) && l instanceof l) && "constructor"in a && "constructor"in b)return !1
            }
            for (i=!e, e || (e = h()
                ), f || (f = h()), l = e.length;
            l--;
            )if (e[l] == a)
                return f[l] == b;
            var n = 0, g=!0;
            if (e.push(a), f.push(b)
                , k) {
                if (l = a.length, n = b.length, (g = n == l) || d)for (; n--;)
                    if (k = l, m = b[n], d)
                        for (; k--&&!(g = fb(a[k], m, c, d, e, f)););
                    else if (!(g = fb(a[n], m, c, d, e, f)))
                        break
            } else 
                p(b, function(b, h, i) {
                    return rc.call(i, h) ? (n++, g = rc.call(a, h) && fb(a[h], b, c, d, e, f)) : void 0
                }), g&&!d && p(a, function(a, b, c) {
                return rc.call(c, b) ? g =- 1<--n : void 0
            });
            return e.pop(), f.pop(), i && (j(e), j(f)), g
        }
        function gb(a, b, c, d, e) {
            (Jc(b) ? Db : o)(b, function(b, f) {
                var g, h, i = b, j = a[f];
                if (b && ((h = Jc(b)) || Pc(b))) {
                    for (i = d.length; i--;)
                        if (g = d[i] == b) {
                            j = e[i];
                            break
                        }
                    if (!g) {
                        var k;
                        c && (i = c(j, b), k = "undefined" != typeof i) && (j = i), k || (j = h ? Jc(j) ? j : [] : Pc(j) ? j : {}), d.push(b), e.push(j), k || gb(j, b, c, d, e)
                    }
                } else 
                    c && (i = c(j, b), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
                a[f] = j
            })
        }
        function hb(a, b) {
            return a + oc(Fc() * (b - a + 1))
        }
        function ib(c, d, e) {
            var g =- 1, i = mb(), l = c ? c.length : 0, m = [], n=!d && l >= s && i === a, o = e || n ? h() : m;
            for (n && (o = f(o), i = b); ++g < l;) {
                var p = c[g], q = e ? e(p, g, c): p;
                (d?!g || o[o.length-1] !== q : 0 > i(o, q)) && ((e || n) && o.push(q), m.push(p))
            }
            return n ? (j(o.k), k(o)) : e && j(o), m
        }
        function jb(a) {
            return function(b, c, d) {
                var e = {};
                c = X.createCallback(c, d, 3), d =- 1;
                var f = b ? b.length: 0;
                if ("number" == typeof f)
                    for (; ++d < f;) {
                        var g = b[d];
                        a(e, g, c(g, d, b), b)
                    } else 
                        o(b, function(b, d, f) {
                            a(e, b, c(b, d, f), f)
                        });
                return e
            }
        }
        function kb(a, b, c, d, e, f) {
            var g = 1 & b, h = 4 & b, i = 16 & b, j = 32 & b;
            if (!(2 & b || ub(a)))
                throw new gc;
            i&&!c.length && (b&=-17, i = c=!1), j&&!d.length && (b&=-33, j = d=!1);
            var k = a && a.__bindData__;
            return k&&!0 !== k ? (k = l(k), k[2] && (k[2] = l(k[2])), k[3] && (k[3] = l(k[3])), !g || 1 & k[1] || (k[4] = e), !g && 1 & k[1] && (b|=8), !h || 4 & k[1] || (k[5] = f), i && sc.apply(k[2] || (k[2] = []), c), j && vc.apply(k[3] || (k[3] = []), d), k[1]|=b, kb.apply(null, k)) : (1 == b || 17 === b ? Z : cb)([a, b, c, d, e, f])
        }
        function lb(a) {
            return Lc[a]
        }
        function mb() {
            var b = (b = X.indexOf) === Mb ? a: b;
            return b
        }
        function nb(a) {
            return "function" == typeof a && lc.test(a)
        }
        function ob(a) {
            var b, c;
            return a && kc.call(a) == N && (b = a.constructor, !ub(b) || b instanceof b) ? (p(a, function(a, b) {
                c = b
            }), "undefined" == typeof c || rc.call(a, c)) : !1
        }
        function pb(a) {
            return Mc[a]
        }
        function qb(a) {
            return a && "object" == typeof a && "number" == typeof a.length && kc.call(a) == H ||!1
        }
        function rb(a, b, c) {
            var d = Kc(a), e = d.length;
            for (b = bb(b, c, 3); e--&&(c = d[e], !1 !== b(a[c], c, a)););
            return a
        }
        function sb(a) {
            var b = [];
            return p(a, function(a, c) {
                ub(a) && b.push(c)
            }), b.sort()
        }
        function tb(a) {
            for (var b =- 1, c = Kc(a)
                , d = c.length, e = {};
            ++b < d;
            ) {
                var f = c[b];
                e[a[f]] = f
            }
            return e
        }
        function ub(a) {
            return "function" == typeof a
        }
        function vb(a) {
            return !(!a ||!T[typeof a])
        }
        function wb(a) {
            return "number" == typeof a || a && "object" == typeof a && kc.call(a) == M ||!1
        }
        function xb(a) {
            return "string" == typeof a || a && "object" == typeof a && kc.call(a) == P ||!1
        }
        function yb(a) {
            for (var b =- 1, c = Kc(a)
                , d = c.length, e = Zb(d);
            ++b < d;
            )e[b] = a[c[b]];
            return e
        }
        function zb(a, b, c) {
            var d =- 1, e = mb(), f = a ? a.length : 0, g=!1;
            return c = (0 > c ? Cc(0, f + c) : c) || 0, Jc(a) ? g =- 1 < e(a, b, c) : "number" == typeof f ? g =- 1 < (xb(a) ? a.indexOf(b, c) : e(a, b, c)) : o(a, function(a) {
                return ++d < c ? void 0 : !(g = a === b)
            }), g
        }
        function Ab(a, b, c) {
            var d=!0;
            b = X.createCallback(b, c, 3), c =- 1;
            var e = a ? a.length: 0;
            if ("number" == typeof e)
                for (; ++c < e && (d=!!b(a[c], c, a)););
            else 
                o(a, function(a, c, e) {
                    return d=!!b(a, c, e)
                });
            return d
        }
        function Bb(a, b, c) {
            var d = [];
            b = X.createCallback(b, c, 3), c =- 1;
            var e = a ? a.length: 0;
            if ("number" == typeof e)
                for (; ++c < e;) {
                    var f = a[c];
                    b(f, c, a) && d.push(f)
                } else 
                    o(a, function(a, c, e) {
                        b(a, c, e) && d.push(a)
                    });
            return d
        }
        function Cb(a, b, c) {
            b = X.createCallback(b, c, 3), c =- 1;
            var d = a ? a.length: 0;
            if ("number" != typeof d) {
                var e;
                return o(a, function(a, c, d) {
                    return b(a, c, d) ? (e = a, !1) : void 0
                }), e
            }
            for (; ++c < d;) {
                var f = a[c];
                if (b(f, c, a))
                    return f
            }
        }
        function Db(a, b, c) {
            var d =- 1, e = a ? a.length : 0;
            if (b = b && "undefined" == typeof c ? b : bb(b, c, 3), "number" == typeof e)
                for (; ++d < e&&!1 !== b(a[d], d, a););
            else 
                o(a, b);
            return a
        }
        function Eb(a, b, c) {
            var d = a ? a.length: 0;
            if (b = b && "undefined" == typeof c ? b : bb(b, c, 3), "number" == typeof d)
                for (; d--&&!1 !== b(a[d], d, a););
            else {
                var e = Kc(a), d = e.length;
                o(a, function(a, c, f) {
                    return c = e ? e[--d] : --d, b(f[c], c, f)
                })
            }
            return a
        }
        function Fb(a, b, c) {
            var d =- 1, e = a ? a.length : 0;
            if (b = X.createCallback(b, c, 3), "number" == typeof e)
                for (var f = Zb(e); ++d < e;)
                    f[d] = b(a[d], d, a);
            else 
                f = [], o(a, function(a, c, e) {
                f[++d] = b(a, c, e)
            });
            return f
        }
        function Gb(a, b, c) {
            var e =- 1 / 0, f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Jc(a)
                ) {
                c =- 1;
                for (var g = a.length; ++c < g;) {
                    var h = a[c];
                    h > f && (f = h)
                }
            } else 
                b = null == b && xb(a) ? d : X.createCallback(b, c, 3), Db(a, function(a, c, d) {
                c = b(a, c, d), c > e && (e = c, f = a)
            });
            return f
        }
        function Hb(a, b, c, d) {
            if (!a)
                return c;
            var e = 3 > arguments.length;
            b = X.createCallback(b, d, 4);
            var f =- 1, g = a.length;
            if ("number" == typeof g)
                for (e && (c = a[++f]); ++f < g;)
                    c = b(c, a[f], f, a);
            else 
                o(a, function(a, d, f) {
                    c = e ? (e=!1, a) : b(c, a, d, f)
                });
            return c
        }
        function Ib(a, b, c, d) {
            var e = 3 > arguments.length;
            return b = X.createCallback(b, d, 4), Eb(a, function(a, d, f) {
                c = e ? (e=!1, a) : b(c, a, d, f)
            }), c
        }
        function Jb(a) {
            var b =- 1, c = a ? a.length : 0, d = Zb("number" == typeof c ? c : 0);
            return Db(a, function(a) {
                var c = hb(0, ++b);
                d[b] = d[c], d[c] = a
            }), d
        }
        function Kb(a, b, c) {
            var d;
            b = X.createCallback(b, c, 3), c =- 1;
            var e = a ? a.length: 0;
            if ("number" == typeof e)
                for (; ++c < e&&!(d = b(a[c], c, a)););
            else 
                o(a, function(a, c, e) {
                    return !(d = b(a, c, e))
                });
            return !!d
        }
        function Lb(a, b, c) {
            var d = 0, e = a ? a.length: 0;
            if ("number" != typeof b && null != b) {
                var f =- 1;
                for (b = X.createCallback(b, c, 3); ++f < e && b(a[f], f, a);)
                    d++
            } else if (d = b, null == d || c)
                return a ? a[0] : n;
            return l(a, 0, Dc(Cc(0, d), e))
        }
        function Mb(b, c, d) {
            if ("number" == typeof d) {
                var e = b ? b.length: 0;
                d = 0 > d ? Cc(0, e + d) : d || 0
            } else if (d)
                return d = Ob(b, c), b[d] === c ? d : -1;
            return a(b, c, d)
        }
        function Nb(a, b, c) {
            if ("number" != typeof b && null != b) {
                var d = 0, e =- 1, f = a ? a.length : 0;
                for (b = X.createCallback(b, c, 3); ++e < f && b(a[e], e, a);)
                    d++
            } else 
                d = null == b || c ? 1 : Cc(0, b);
            return l(a, d)
        }
        function Ob(a, b, c, d) {
            var e = 0, f = a ? a.length: e;
            for (c = c ? X.createCallback(c, d, 1) : Ub, b = c(b);
            f > e;
            )d = e + f>>>1, c(a[d]) < b ? e = d + 1 : f = d;
            return e
        }
        function Pb(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b=!1), null != c && (c = X.createCallback(c, d, 3)), ib(a, b, c)
        }
        function Qb() {
            for (var a = 1 < arguments.length ? arguments : arguments[0], b =- 1, c = a ? Gb(Tc(a, "length")
                ) : 0, d = Zb(0 > c ? 0 : c);
            ++b < c;
            )d[b] = Tc(a, b);
            return d
        }
        function Rb(a, b) {
            var c =- 1, d = a ? a.length : 0, e = {};
            for (b ||!d || Jc(a[0]) || (b = []); ++c < d;) {
                var f = a[c];
                b ? e[f] = b[c] : f && (e[f[0]] = f[1])
            }
            return e
        }
        function Sb(a, b) {
            return 2 < arguments.length ? kb(a, 17, l(arguments, 2), null, b) : kb(a, 1, null, null, b)
        }
        function Tb(a, b, c) {
            function d() {
                k && nc(k), g = k = l = n, (p || o !== b) && (m = Uc(), h = a.apply(j, f), k || g || (f = j = null))
            }
            function e() {
                var c = b - (Uc() - i);
                c > 0 ? k = tc(e, c) : (g && nc(g), c = l, g = k = l = n, c && (m = Uc(), h = a.apply(j, f), k || g || (f = j = null)))
            }
            var f, g, h, i, j, k, l, m = 0, o=!1, p=!0;
            if (!ub(a))
                throw new gc;
            if (b = Cc(0, b) || 0, !0 === c)
                var q=!0, p=!1;
            else 
                vb(c) && (q = c.leading, o = "maxWait"in c && (Cc(b, c.maxWait) || 0), p = "trailing"in c ? c.trailing : p);
            return function() {
                if (f = arguments, i = Uc()
                    , j = this, l = p && (k ||!q), !1 === o)var c = q&&!k;
                else {
                    g || q || (m = i);
                    var n = o - (i - m), r = 0 >= n;
                    r ? (g && (g = nc(g)), m = i, h = a.apply(j, f)) : g || (g = tc(d, n))
                }
                return r && k ? k = nc(k) : k || b === o || (k = tc(e, b)), c && (r=!0, h = a.apply(j, f)), !r || k || g || (f = j = null), h
            }
        }
        function Ub(a) {
            return a
        }
        function Vb(a, b, c) {
            var d=!0, e = b && sb(b);
            b && (c || e.length) || (null == c && (c = b), f = Y, b = a, a = X, e = sb(b)), !1 === c ? d=!1 : vb(c) && "chain"in c && (d = c.chain);
            var f = a, g = ub(f);
            Db(e, function(c) {
                var e = a[c] = b[c];
                g && (f.prototype[c] = function() {
                    var b = this.__chain__, c = this.__wrapped__, g = [c];
                    if (sc.apply(g, arguments), g = e.apply(a, g)
                        , d || b) {
                        if (c === g && vb(g))
                            return this;
                        g = new f(g), g.__chain__ = b
                    }
                    return g
                })
            })
        }
        function Wb() {}
        function Xb(a) {
            return function(b) {
                return b[a]
            }
        }
        function Yb() {
            return this.__wrapped__
        }
        c = c ? $.defaults(V.Object(), c, $.pick(V, G)) : V;
        var Zb = c.Array, $b = c.Boolean, _b = c.Date, ac = c.Function, bc = c.Math, cc = c.Number, dc = c.Object, ec = c.RegExp, fc = c.String, gc = c.TypeError, hc = [], ic = dc.prototype, jc = c._, kc = ic.toString, lc = ec("^" + fc(kc).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), mc = bc.ceil, nc = c.clearTimeout, oc = bc.floor, pc = ac.prototype.toString, qc = nb(qc = dc.getPrototypeOf) && qc, rc = ic.hasOwnProperty, sc = hc.push, tc = c.setTimeout, uc = hc.splice, vc = hc.unshift, wc = function() {
            try {
                var a = {}, b = nb(b = dc.defineProperty) && b, c = b(a, a, a) && b
            } catch (d) {}
            return c
        }(), xc = nb(xc = dc.create) && xc, yc = nb(yc = Zb.isArray) && yc, zc = c.isFinite, Ac = c.isNaN, Bc = nb(Bc = dc.keys) && Bc, Cc = bc.max, Dc = bc.min, Ec = c.parseInt, Fc = bc.random, Gc = {};
        Gc[I] = Zb, Gc[J] = $b, Gc[K] = _b, Gc[L] = ac, Gc[N] = dc, Gc[M] = cc, Gc[O] = ec, Gc[P] = fc, Y.prototype = X.prototype;
        var Hc = X.support = {};
        Hc.funcDecomp=!nb(c.a) && E.test(m), Hc.funcNames = "string" == typeof ac.name, X.templateSettings = {
            escape: /<%-([\s\S]+?)%>/g,
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: B,
            variable: "",
            imports: {
                _: X
            }
        }, xc || (ab = function() {
            function a() {}
            return function(b) {
                if (vb(b)) {
                    a.prototype = b;
                    var d = new a;
                    a.prototype = null
                }
                return d || c.Object()
            }
        }());
        var Ic = wc ? function(a, b) {
            S.value = b, wc(a, "__bindData__", S)
        }
        : Wb, Jc = yc || function(a) {
            return a && "object" == typeof a && "number" == typeof a.length && kc.call(a) == I ||!1
        }, Kc = Bc ? function(a) {
            return vb(a) ? Bc(a) : []
        }
        : W, Lc = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }, Mc = tb(Lc), Nc = ec("(" + Kc(Mc).join("|") + ")", "g"), Oc = ec("[" + Kc(Lc).join("") + "]", "g"), Pc = qc ? function(a) {
            if (!a || kc.call(a) != N)
                return !1;
            var b = a.valueOf, c = nb(b) && (c = qc(b)) && qc(c);
            return c ? a == c || qc(a) == c : ob(a)
        }
        : ob, Qc = jb(function(a, b, c) {
            rc.call(a, c) ? a[c]++ : a[c] = 1
        }), Rc = jb(function(a, b, c) {
            (rc.call(a, c) ? a[c] : a[c] = []).push(b)
        }), Sc = jb(function(a, b, c) {
            a[c] = b
        }), Tc = Fb, Uc = nb(Uc = _b.now) && Uc || function() {
            return (new _b).getTime()
        }, Vc = 8 == Ec(u + "08") ? Ec: function(a, b) {
            return Ec(xb(a) ? a.replace(C, "") : a, b || 0)
        };
        return X.after = function(a, b) {
            if (!ub(b))
                throw new gc;
            return function() {
                return 1>--a ? b.apply(this, arguments) : void 0
            }
        }, X.assign = U, X.at = function(a) {
            for (var b = arguments, c =- 1, d = eb(b, !0, !1, 1)
                , b = b[2] && b[2][b[1]] === a ? 1 : d.length, e = Zb(b);
            ++c < b;
            )e[c] = a[d[c]];
            return e
        }, X.bind = Sb, X.bindAll = function(a) {
            for (var b = 1 < arguments.length ? eb(arguments, !0, !1, 1) : sb(a), c =- 1, d = b.length; ++c < d;) {
                var e = b[c];
                a[e] = kb(a[e], 1, null, null, a)
            }
            return a
        }, X.bindKey = function(a, b) {
            return 2 < arguments.length ? kb(b, 19, l(arguments, 2), null, a) : kb(b, 3, null, null, a)
        }, X.chain = function(a) {
            return a = new Y(a), a.__chain__=!0, a
        }, X.compact = function(a) {
            for (var b =- 1, c = a ? a.length : 0, d = []; ++b < c;) {
                var e = a[b];
                e && d.push(e)
            }
            return d
        }, X.compose = function() {
            for (var a = arguments, b = a.length; b--;)
                if (!ub(a[b]))
                    throw new gc;
            return function() {
                for (var b = arguments, c = a.length; c--;)
                    b = [a[c].apply(this, b)];
                return b[0]
            }
        }, X.constant = function(a) {
            return function() {
                return a
            }
        }, X.countBy = Qc, X.create = function(a, b) {
            var c = ab(a);
            return b ? U(c, b) : c
        }, X.createCallback = function(a, b, c) {
            var d = typeof a;
            if (null == a || "function" == d)
                return bb(a, b, c);
            if ("object" != d)
                return Xb(a);
            var e = Kc(a), f = e[0], g = a[f];
            return 1 != e.length || g !== g || vb(g) ? function(b) {
                for (var c = e.length, d=!1; c--&&(d = fb(b[e[c]], a[e[c]], null, !0)););
                return d
            } : function(a) {
                return a = a[f], g === a && (0 !== g || 1 / g == 1 / a)
            }
        }, X.curry = function(a, b) {
            return b = "number" == typeof b ? b : + b || a.length, kb(a, 4, null, null, null, b)
        }, X.debounce = Tb, X.defaults = t, X.defer = function(a) {
            if (!ub(a))
                throw new gc;
            var b = l(arguments, 1);
            return tc(function() {
                a.apply(n, b)
            }, 1)
        }, X.delay = function(a, b) {
            if (!ub(a))
                throw new gc;
            var c = l(arguments, 2);
            return tc(function() {
                a.apply(n, c)
            }, b)
        }, X.difference = function(a) {
            return db(a, eb(arguments, !0, !0, 1))
        }, X.filter = Bb, X.flatten = function(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = "function" != typeof b && d && d[b] === a ? null : b, b=!1), null != c && (a = Fb(a, c, d)), eb(a, b)
        }, X.forEach = Db, X.forEachRight = Eb, X.forIn = p, X.forInRight = function(a, b, c) {
            var d = [];
            p(a, function(a, b) {
                d.push(b, a)
            });
            var e = d.length;
            for (b = bb(b, c, 3); e--&&!1 !== b(d[e--], d[e], a);
            );
            return a
        }, X.forOwn = o, X.forOwnRight = rb, X.functions = sb, X.groupBy = Rc, X.indexBy = Sc, X.initial = function(a, b, c) {
            var d = 0, e = a ? a.length: 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = X.createCallback(b, c, 3); f--&&b(a[f], f, a);
                )d++
            } else 
                d = null == b || c ? 1 : b || d;
            return l(a, 0, Dc(Cc(0, e - d), e))
        }, X.intersection = function() {
            for (var c = [], d =- 1, e = arguments.length, g = h()
                , i = mb(), l = i === a, m = h();
            ++d < e;
            ) {
                var n = arguments[d];
                (Jc(n) || qb(n)) && (c.push(n), g.push(l && n.length >= s && f(d ? c[d] : m)))
            }
            var l = c[0], o =- 1, p = l ? l.length : 0, q = [];
            a: for (; ++o < p;) {
                var r = g[0], n = l[o];
                if (0 > (r ? b(r, n) : i(m, n))) {
                    for (d = e, (r || m)
                        .push(n);
                    --d;
                    )if (r = g[d], 0 > (r ? b(r, n) 
                        : i(c[d], n)))continue a;
                    q.push(n)
                }
            }
            for (; e--;)(r = g[e]) 
                && k(r);
            return j(g), j(m), q
        }, X.invert = tb, X.invoke = function(a, b) {
            var c = l(arguments, 2), d =- 1, e = "function" == typeof b, f = a ? a.length : 0, g = Zb("number" == typeof f ? f : 0);
            return Db(a, function(a) {
                g[++d] = (e ? b : a[b]).apply(a, c)
            }), g
        }, X.keys = Kc, X.map = Fb, X.mapValues = function(a, b, c) {
            var d = {};
            return b = X.createCallback(b, c, 3), o(a, function(a, c, e) {
                d[c] = b(a, c, e)
            }), d
        }, X.max = Gb, X.memoize = function(a, b) {
            function c() {
                var d = c.cache, e = b ? b.apply(this, arguments): r + arguments[0];
                return rc.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
            }
            if (!ub(a))
                throw new gc;
            return c.cache = {}, c
        }, X.merge = function(a) {
            var b = arguments, c = 2;
            if (!vb(a))
                return a;
            if ("number" != typeof b[2] && (c = b.length), c > 3 && "function" == typeof b[c-2])
                var d = bb(b[--c-1], b[c--], 2);
            else 
                c > 2 && "function" == typeof b[c-1] && (d = b[--c]);
            for (var b = l(arguments, 1, c), e =- 1, f = h()
                , g = h();
            ++e < c;
            )gb(a, b[e], d, f, g);
            return j(f), j(g), a
        }, X.min = function(a, b, c) {
            var e = 1 / 0, f = e;
            if ("function" != typeof b && c && c[b] === a && (b = null), null == b && Jc(a)
                ) {
                c =- 1;
                for (var g = a.length; ++c < g;) {
                    var h = a[c];
                    f > h && (f = h)
                }
            } else 
                b = null == b && xb(a) ? d : X.createCallback(b, c, 3), Db(a, function(a, c, d) {
                c = b(a, c, d), e > c && (e = c, f = a)
            });
            return f
        }, X.omit = function(a, b, c) {
            var d = {};
            if ("function" != typeof b) {
                var e = [];
                p(a, function(a, b) {
                    e.push(b)
                });
                for (var e = db(e, eb(arguments, !0, !1, 1)), f =- 1, g = e.length; ++f < g;) {
                    var h = e[f];
                    d[h] = a[h]
                }
            } else 
                b = X.createCallback(b, c, 3), p(a, function(a, c, e) {
                b(a, c, e) || (d[c] = a)
            });
            return d
        }, X.once = function(a) {
            var b, c;
            if (!ub(a))
                throw new gc;
            return function() {
                return b ? c : (b=!0, c = a.apply(this, arguments), a = null, c)
            }
        }, X.pairs = function(a) {
            for (var b =- 1, c = Kc(a)
                , d = c.length, e = Zb(d);
            ++b < d;
            ) {
                var f = c[b];
                e[b] = [f, a[f]]
            }
            return e
        }, X.partial = function(a) {
            return kb(a, 16, l(arguments, 1))
        }, X.partialRight = function(a) {
            return kb(a, 32, null, l(arguments, 1))
        }, X.pick = function(a, b, c) {
            var d = {};
            if ("function" != typeof b)
                for (var e =- 1, f = eb(arguments, !0, !1, 1)
                    , g = vb(a) ? f.length : 0;
            ++e < g;
            ) {
                var h = f[e];
                h in a && (d[h] = a[h])
            } else 
                b = X.createCallback(b, c, 3), p(a, function(a, c, e) {
                b(a, c, e) && (d[c] = a)
            });
            return d
        }, X.pluck = Tc, X.property = Xb, X.pull = function(a) {
            for (var b = arguments, c = 0, d = b.length, e = a ? a.length : 0; ++c < d;)
                for (var f =- 1, g = b[c]; ++f < e;)
                    a[f] === g && (uc.call(a, f--, 1), e--);
            return a
        }, X.range = function(a, b, c) {
            a =+ a || 0, c = "number" == typeof c ? c : + c || 1, null == b && (b = a, a = 0);
            var d =- 1;
            b = Cc(0, mc((b - a) / (c || 1)));
            for (var e = Zb(b); ++d < b;)
                e[d] = a, a += c;
            return e
        }, X.reject = function(a, b, c) {
            return b = X.createCallback(b, c, 3), Bb(a, function(a, c, d) {
                return !b(a, c, d)
            })
        }, X.remove = function(a, b, c) {
            var d =- 1, e = a ? a.length : 0, f = [];
            for (b = X.createCallback(b, c, 3); ++d < e;)
                c = a[d], b(c, d, a) && (f.push(c), uc.call(a, d--, 1), e--);
            return f
        }, X.rest = Nb, X.shuffle = Jb, X.sortBy = function(a, b, c) {
            var d =- 1, f = Jc(b), g = a ? a.length : 0, l = Zb("number" == typeof g ? g : 0);
            for (f || (b = X.createCallback(b, c, 3)), Db(a, function(a, c, e) {
                var g = l[++d] = i();
                f ? g.m = Fb(b, function(b) {
                    return a[b]
                }) : (g.m = h())[0] = b(a, c, e), g.n = d, g.o = a
            }), g = l.length, l.sort(e);
            g--;
            )a = l[g], l[g] = a.o, f || j(a.m), k(a);
            return l
        }, X.tap = function(a, b) {
            return b(a), a
        }, X.throttle = function(a, b, c) {
            var d=!0, e=!0;
            if (!ub(a))
                throw new gc;
            return !1 === c ? d=!1 : vb(c) && (d = "leading"in c ? c.leading : d, e = "trailing"in c ? c.trailing : e), R.leading = d, R.maxWait = b, R.trailing = e, Tb(a, b, R)
        }, X.times = function(a, b, c) {
            a =- 1 < (a =+ a) ? a : 0;
            var d =- 1, e = Zb(a);
            for (b = bb(b, c, 1); ++d < a;)
                e[d] = b(d);
            return e
        }, X.toArray = function(a) {
            return a && "number" == typeof a.length ? l(a) : yb(a)
        }, X.transform = function(a, b, c, d) {
            var e = Jc(a);
            if (null == c)
                if (e)
                    c = [];
                else {
                    var f = a && a.constructor;
                    c = ab(f && f.prototype)
                }
            return b && (b = X.createCallback(b, d, 4), (e ? Db : o)(a, function(a, d, e) {
                return b(c, a, d, e)
            })), c
        }, X.union = function() {
            return ib(eb(arguments, !0, !0))
        }, X.uniq = Pb, X.values = yb, X.where = Bb, X.without = function(a) {
            return db(a, l(arguments, 1))
        }, X.wrap = function(a, b) {
            return kb(b, 16, [a])
        }, X.xor = function() {
            for (var a =- 1, b = arguments.length; ++a < b;) {
                var c = arguments[a];
                if (Jc(c) || qb(c))
                    var d = d ? ib(db(d, c).concat(db(c, d))): c
            }
            return d || []
        }, X.zip = Qb, X.zipObject = Rb, X.collect = Fb, X.drop = Nb, X.each = Db, X.eachRight = Eb, X.extend = U, X.methods = sb, X.object = Rb, X.select = Bb, X.tail = Nb, X.unique = Pb, X.unzip = Qb, Vb(X), X.clone = function(a, b, c, d) {
            return "boolean" != typeof b && null != b && (d = c, c = b, b=!1), _(a, b, "function" == typeof c && bb(c, d, 1))
        }, X.cloneDeep = function(a, b, c) {
            return _(a, !0, "function" == typeof b && bb(b, c, 1))
        }, X.contains = zb, X.escape = function(a) {
            return null == a ? "" : fc(a).replace(Oc, lb)
        }, X.every = Ab, X.find = Cb, X.findIndex = function(a, b, c) {
            var d =- 1, e = a ? a.length : 0;
            for (b = X.createCallback(b, c, 3); ++d < e;)
                if (b(a[d], d, a))
                    return d;
            return -1
        }, X.findKey = function(a, b, c) {
            var d;
            return b = X.createCallback(b, c, 3), o(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }, X.findLast = function(a, b, c) {
            var d;
            return b = X.createCallback(b, c, 3), Eb(a, function(a, c, e) {
                return b(a, c, e) ? (d = a, !1) : void 0
            }), d
        }, X.findLastIndex = function(a, b, c) {
            var d = a ? a.length: 0;
            for (b = X.createCallback(b, c, 3); d--;)
                if (b(a[d], d, a))
                    return d;
            return -1
        }, X.findLastKey = function(a, b, c) {
            var d;
            return b = X.createCallback(b, c, 3), rb(a, function(a, c, e) {
                return b(a, c, e) ? (d = c, !1) : void 0
            }), d
        }, X.has = function(a, b) {
            return a ? rc.call(a, b) : !1
        }, X.identity = Ub, X.indexOf = Mb, X.isArguments = qb, X.isArray = Jc, X.isBoolean = function(a) {
            return !0 === a ||!1 === a || a && "object" == typeof a && kc.call(a) == J ||!1
        }, X.isDate = function(a) {
            return a && "object" == typeof a && kc.call(a) == K ||!1
        }, X.isElement = function(a) {
            return a && 1 === a.nodeType ||!1
        }, X.isEmpty = function(a) {
            var b=!0;
            if (!a)
                return b;
            var c = kc.call(a), d = a.length;
            return c == I || c == P || c == H || c == N && "number" == typeof d && ub(a.splice)?!d : (o(a, function() {
                return b=!1
            }), b)
        }, X.isEqual = function(a, b, c, d) {
            return fb(a, b, "function" == typeof c && bb(c, d, 2))
        }, X.isFinite = function(a) {
            return zc(a)&&!Ac(parseFloat(a))
        }, X.isFunction = ub, X.isNaN = function(a) {
            return wb(a) && a!=+a
        }, X.isNull = function(a) {
            return null === a
        }, X.isNumber = wb, X.isObject = vb, X.isPlainObject = Pc, X.isRegExp = function(a) {
            return a && "object" == typeof a && kc.call(a) == O ||!1
        }, X.isString = xb, X.isUndefined = function(a) {
            return "undefined" == typeof a
        }, X.lastIndexOf = function(a, b, c) {
            var d = a ? a.length: 0;
            for ("number" == typeof c && (d = (0 > c ? Cc(0, d + c) : Dc(c, d-1)) + 1); d--;)
                if (a[d] === b)
                    return d;
            return -1
        }, X.mixin = Vb, X.noConflict = function() {
            return c._ = jc, this
        }, X.noop = Wb, X.now = Uc, X.parseInt = Vc, X.random = function(a, b, c) {
            var d = null == a, e = null == b;
            return null == c && ("boolean" == typeof a && e ? (c = a, a = 1) : e || "boolean" != typeof b || (c = b, e=!0)), d && e && (b = 1), a =+ a || 0, e ? (b = a, a = 0) : b =+ b || 0, c || a%1 || b%1 ? (c = Fc(), Dc(a + c * (b - a + parseFloat("1e-" + ((c + "").length-1))), b)) : hb(a, b)
        }, X.reduce = Hb, X.reduceRight = Ib, X.result = function(a, b) {
            if (a) {
                var c = a[b];
                return ub(c) ? a[b]() : c
            }
        }, X.runInContext = m, X.size = function(a) {
            var b = a ? a.length: 0;
            return "number" == typeof b ? b : Kc(a).length
        }, X.some = Kb, X.sortedIndex = Ob, X.template = function(a, b, c) {
            var d = X.templateSettings;
            a = fc(a || ""), c = t({}, c, d);
            var e, f = t({}, c.imports, d.imports), d = Kc(f), f = yb(f), h = 0, i = c.interpolate || D, j = "__p+='", i = ec((c.escape || D).source + "|" + i.source + "|" + (i === B ? y : D).source + "|" + (c.evaluate || D).source + "|$", "g");
            a.replace(i, function(b, c, d, f, i, k) {
                return d || (d = f), j += a.slice(h, k).replace(F, g), c && (j += "'+__e(" + c + ")+'"), i && (e=!0, j += "';" + i + ";\n__p+='"), d && (j += "'+((__t=(" + d + "))==null?'':__t)+'"), h = k + b.length, b
            }), j += "';", i = c = c.variable, i || (c = "obj", j = "with(" + c + "){" + j + "}"), j = (e ? j.replace(v, "") : j).replace(w, "$1").replace(x, "$1;"), j = "function(" + c + "){" + (i ? "" : c + "||(" + c + "={});") + "var __t,__p='',__e=_.escape" + (e ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + j + "return __p}";
            try {
                var k = ac(d, "return " + j).apply(n, f)
            } catch (l) {
                throw l.source = j, l
            }
            return b ? k(b) : (k.source = j, k)
        }, X.unescape = function(a) {
            return null == a ? "" : fc(a).replace(Nc, pb)
        }, X.uniqueId = function(a) {
            var b=++q;
            return fc(null == a ? "" : a) + b
        }, X.all = Ab, X.any = Kb, X.detect = Cb, X.findWhere = Cb, X.foldl = Hb, X.foldr = Ib, X.include = zb, X.inject = Hb, Vb(function() {
            var a = {};
            return o(X, function(b, c) {
                X.prototype[c] || (a[c] = b)
            }), a
        }(), !1), X.first = Lb, X.last = function(a, b, c) {
            var d = 0, e = a ? a.length: 0;
            if ("number" != typeof b && null != b) {
                var f = e;
                for (b = X.createCallback(b, c, 3); f--&&b(a[f], f, a);
                )d++
            } else if (d = b, null == d || c)
                return a ? a[e-1] : n;
            return l(a, Cc(0, e - d))
        }, X.sample = function(a, b, c) {
            return a && "number" != typeof a.length && (a = yb(a)), null == b || c ? a ? a[hb(0, a.length-1)] : n : (a = Jb(a), a.length = Dc(Cc(0, b), a.length), a)
        }, X.take = Lb, X.head = Lb, o(X, function(a, b) {
            var c = "sample" !== b;
            X.prototype[b] || (X.prototype[b] = function(b, d) {
                var e = this.__chain__, f = a(this.__wrapped__, b, d);
                return e || null != b && (!d || c && "function" == typeof b) ? new Y(f, e) : f
            })
        }), X.VERSION = "2.4.1", X.prototype.chain = function() {
            return this.__chain__=!0, this
        }, X.prototype.toString = function() {
            return fc(this.__wrapped__)
        }, X.prototype.value = Yb, X.prototype.valueOf = Yb, Db(["join", "pop", "shift"], function(a) {
            var b = hc[a];
            X.prototype[a] = function() {
                var a = this.__chain__, c = b.apply(this.__wrapped__, arguments);
                return a ? new Y(c, a) : c
            }
        }), Db(["push", "reverse", "sort", "unshift"], function(a) {
            var b = hc[a];
            X.prototype[a] = function() {
                return b.apply(this.__wrapped__, arguments), this
            }
        }), Db(["concat", "slice", "splice"], function(a) {
            var b = hc[a];
            X.prototype[a] = function() {
                return new Y(b.apply(this.__wrapped__, arguments), this.__chain__)
            }
        }), X
    }
    var n, o = [], p = [], q = 0, r =+ new Date + "", s = 75, t = 40, u = " 	\fÂ ï»¿\n\r\u2028\u2029áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€", v = /\b__p\+='';/g, w = /\b(__p\+=)''\+/g, x = /(__e\(.*?\)|\b__t\))\+'';/g, y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, z = /\w*$/, A = /^\s*function[ \n\r\t]+\w/, B = /<%=([\s\S]+?)%>/g, C = RegExp("^[" + u + "]*0+(?=.$)"), D = /($^)/, E = /\bthis\b/, F = /['\n\r\t\u2028\u2029\\]/g, G = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "), H = "[object Arguments]", I = "[object Array]", J = "[object Boolean]", K = "[object Date]", L = "[object Function]", M = "[object Number]", N = "[object Object]", O = "[object RegExp]", P = "[object String]", Q = {};
    Q[L]=!1, Q[H] = Q[I] = Q[J] = Q[K] = Q[M] = Q[N] = Q[O] = Q[P]=!0;
    var R = {
        leading: !1,
        maxWait: 0,
        trailing: !1
    }, S = {
        configurable: !1,
        enumerable: !1,
        value: null,
        writable: !1
    }, T = {
        "boolean": !1,
        "function": !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1
    }, U = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, V = T[typeof window] && window || this, W = T[typeof exports] && exports&&!exports.nodeType && exports, X = T[typeof module] && module&&!module.nodeType && module, Y = X && X.exports === W && W, Z = T[typeof global] && global;
    !Z || Z.global !== Z && Z.window !== Z || (V = Z);
    var $ = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (V._ = $, define(function() {
        return $
    })) : W && X ? Y ? (X.exports = $)._ = $ : W._ = $ : V._ = $
}).call(this), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
    case"button":
    case"select":
    case"textarea":
        if (a.disabled)
            return !0;
        break;
    case"input":
        if (this.deviceIsIOS && "file" === a.type || a.disabled)
            return !0;
        break;
    case"label":
    case"video":
        return !0
    }
    return /\bneedsclick\b/.test(a.className)
}, FastClick.prototype.needsFocus = function(a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
    case"textarea":
        return !0;
    case"select":
        return !this.deviceIsAndroid;
    case"input":
        switch (a.type) {
        case"button":
        case"checkbox":
        case"file":
        case"image":
        case"radio":
        case"submit":
            return !1
        }
        return !a.disabled&&!a.readOnly;
    default:
        return /\bneedsfocus\b/.test(a.className)
    }
}, FastClick.prototype.sendClick = function(a, b) {
    "use strict";
    var c, d;
    document.activeElement && document.activeElement !== a && document.activeElement.blur(), d = b.changedTouches[0], c = document.createEvent("MouseEvents"), c.initMouseEvent(this.determineEventType(a), !0, !0, window, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), c.forwardedTouchEvent=!0, a.dispatchEvent(c)
}, FastClick.prototype.determineEventType = function(a) {
    "use strict";
    return this.deviceIsAndroid && "select" === a.tagName.toLowerCase() ? "mousedown" : "click"
}, FastClick.prototype.focus = function(a) {
    "use strict";
    var b;
    this.deviceIsIOS && a.setSelectionRange && 0 !== a.type.indexOf("date") && "time" !== a.type ? (b = a.value.length, a.setSelectionRange(b, b)) : a.focus()
}, FastClick.prototype.updateScrollParent = function(a) {
    "use strict";
    var b, c;
    if (b = a.fastClickScrollParent, !b ||!b.contains(a)
        ) {
        c = a;
        do {
            if (c.scrollHeight > c.offsetHeight) {
                b = c, a.fastClickScrollParent = c;
                break
            }
            c = c.parentElement
        }
        while (c)
        }
    b && (b.fastClickLastScrollTop = b.scrollTop)
}, FastClick.prototype.getTargetElementFromEventTarget = function(a) {
    "use strict";
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a
}, FastClick.prototype.onTouchStart = function(a) {
    "use strict";
    var b, c, d;
    if (a.targetTouches.length > 1)
        return !0;
    if (b = this.getTargetElementFromEventTarget(a.target), c = a.targetTouches[0], this.deviceIsIOS) {
        if (d = window.getSelection(), d.rangeCount&&!d.isCollapsed)
            return !0;
        if (!this.deviceIsIOS4) {
            if (c.identifier === this.lastTouchIdentifier)
                return a.preventDefault(), !1;
            this.lastTouchIdentifier = c.identifier, this.updateScrollParent(b)
        }
    }
    return this.trackingClick=!0, this.trackingClickStart = a.timeStamp, this.targetElement = b, this.touchStartX = c.pageX, this.touchStartY = c.pageY, a.timeStamp - this.lastClickTime < 200 && a.preventDefault(), !0
}, FastClick.prototype.touchHasMoved = function(a) {
    "use strict";
    var b = a.changedTouches[0], c = this.touchBoundary;
    return Math.abs(b.pageX - this.touchStartX) > c || Math.abs(b.pageY - this.touchStartY) > c?!0 : !1
}, FastClick.prototype.onTouchMove = function(a) {
    "use strict";
    return this.trackingClick ? ((this.targetElement !== this.getTargetElementFromEventTarget(a.target) || this.touchHasMoved(a)) && (this.trackingClick=!1, this.targetElement = null), !0) : !0
}, FastClick.prototype.findControl = function(a) {
    "use strict";
    return void 0 !== a.control ? a.control : a.htmlFor ? document.getElementById(a.htmlFor) : a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
}, FastClick.prototype.onTouchEnd = function(a) {
    "use strict";
    var b, c, d, e, f, g = this.targetElement;
    if (!this.trackingClick)
        return !0;
    if (a.timeStamp - this.lastClickTime < 200)
        return this.cancelNextClick=!0, !0;
    if (this.cancelNextClick=!1, this.lastClickTime = a.timeStamp, c = this.trackingClickStart, this.trackingClick=!1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (f = a.changedTouches[0], g = document.elementFromPoint(f.pageX - window.pageXOffset, f.pageY - window.pageYOffset) || g, g.fastClickScrollParent = this.targetElement.fastClickScrollParent), d = g.tagName.toLowerCase(), "label" === d) {
        if (b = this.findControl(g)) {
            if (this.focus(g), this.deviceIsAndroid)
                return !1;
            g = b
        }
    } else if (this.needsFocus(g))
        return a.timeStamp - c > 100 || this.deviceIsIOS && window.top !== window && "input" === d ? (this.targetElement = null, !1) : (this.focus(g), this.deviceIsIOS4 && "select" === d || (this.targetElement = null, a.preventDefault()), !1);
    return this.deviceIsIOS&&!this.deviceIsIOS4 && (e = g.fastClickScrollParent, e && e.fastClickLastScrollTop !== e.scrollTop)?!0 : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1)
}, FastClick.prototype.onTouchCancel = function() {
    "use strict";
    this.trackingClick=!1, this.targetElement = null
}, FastClick.prototype.onMouse = function(a) {
    "use strict";
    return this.targetElement ? a.forwardedTouchEvent?!0 : a.cancelable?!this.needsClick(this.targetElement) || this.cancelNextClick ? (a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.propagationStopped=!0, a.stopPropagation(), a.preventDefault(), !1) : !0 : !0 : !0
}, FastClick.prototype.onClick = function(a) {
    "use strict";
    var b;
    return this.trackingClick ? (this.targetElement = null, this.trackingClick=!1, !0) : "submit" === a.target.type && 0 === a.detail?!0 : (b = this.onMouse(a), b || (this.targetElement = null), b)
}, FastClick.prototype.destroy = function() {
    "use strict";
    var a = this.layer;
    this.deviceIsAndroid && (a.removeEventListener("mouseover", this.onMouse, !0), a.removeEventListener("mousedown", this.onMouse, !0), a.removeEventListener("mouseup", this.onMouse, !0)), a.removeEventListener("click", this.onClick, !0), a.removeEventListener("touchstart", this.onTouchStart, !1), a.removeEventListener("touchmove", this.onTouchMove, !1), a.removeEventListener("touchend", this.onTouchEnd, !1), a.removeEventListener("touchcancel", this.onTouchCancel, !1)
}, FastClick.notNeeded = function(a) {
    "use strict";
    var b, c;
    if ("undefined" == typeof window.ontouchstart)
        return !0;
    if (c =+ (/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
        if (!FastClick.prototype.deviceIsAndroid)
            return !0;
        if (b = document.querySelector("meta[name=viewport]")) {
            if (-1 !== b.content.indexOf("user-scalable=no"))
                return !0;
            if (c > 31 && window.innerWidth <= window.screen.width)
                return !0
        }
    }
    return "none" === a.style.msTouchAction?!0 : !1
}, FastClick.attach = function(a) {
    "use strict";
    return new FastClick(a)
}, "undefined" != typeof define && define.amd ? define(function() {
    "use strict";
    return FastClick
}) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    "use strict";
    function b(c, d) {
        var e = function() {}, f = this, g = {
            autoSelectFirst: !1,
            appendTo: "body",
            serviceUrl: null,
            lookup: null,
            onSelect: null,
            width: "auto",
            minChars: 1,
            maxHeight: 300,
            deferRequestBy: 0,
            params: {},
            formatResult: b.formatResult,
            delimiter: null,
            zIndex: 9999,
            type: "GET",
            noCache: !1,
            onSearchStart: e,
            onSearchComplete: e,
            containerClass: "autocomplete-suggestions",
            tabDisabled: !1,
            dataType: "text",
            lookupFilter: function(a, b, c) {
                return -1 !== a.value.toLowerCase().indexOf(c)
            },
            paramName: "query",
            transformResult: function(b) {
                return "string" == typeof b ? a.parseJSON(b) : b
            }
        };
        f.element = c, f.el = a(c), f.suggestions = [], f.badQueries = [], f.selectedIndex =- 1, f.currentValue = f.element.value, f.intervalId = 0, f.cachedResponse = [], f.onChangeInterval = null, f.onChange = null, f.ignoreValueChange=!1, f.isLocal=!1, f.suggestionsContainer = null, f.options = a.extend({}, g, d), f.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        }, f.initialize(), f.setOptions(d)
    }
    var c = function() {
        return {
            extend: function(b, c) {
                return a.extend(b, c)
            },
            createNode: function(a) {
                var b = document.createElement("div");
                return b.innerHTML = a, b.firstChild
            }
        }
    }(), d = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        UP: 38,
        DOWN: 40
    };
    b.utils = c, a.Autocomplete = b, b.formatResult = function(a, b) {
        var c = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\"].join("|\\") + ")", "g"), d = "(" + b.replace(c, "\\$1") + ")";
        return a.value.replace(new RegExp(d, "gi"), "<strong>$1</strong>")
    }, b.prototype = {
        killerFn: null,
        initialize: function() {
            var c, d = this, e = "." + d.classes.suggestion, f = d.classes.selected, g = d.options;
            d.element.setAttribute("autocomplete", "off"), d.killerFn = function(b) {
                0 === a(b.target).closest("." + d.options.containerClass).length && (d.killSuggestions(), d.disableKillerFn())
            }, g.width && "auto" !== g.width || (g.width = d.el.outerWidth()), d.suggestionsContainer = b.utils.createNode('<div class="' + g.containerClass + '" style="position: absolute; display: none;"></div>'), c = a(d.suggestionsContainer), c.appendTo(g.appendTo).width(g.width), c.on("mouseover.autocomplete", e, function() {
                d.activate(a(this).data("index"))
            }), c.on("mouseout.autocomplete", function() {
                d.selectedIndex =- 1, c.children("." + f).removeClass(f)
            }), c.on("click.autocomplete", e, function() {
                d.select(a(this).data("index"), !1)
            }), d.fixPosition(), window.opera ? d.el.on("keypress.autocomplete", function(a) {
                d.onKeyPress(a)
            }) : d.el.on("keydown.autocomplete", function(a) {
                d.onKeyPress(a)
            }), d.el.on("keyup.autocomplete", function(a) {
                d.onKeyUp(a)
            }), d.el.on("blur.autocomplete", function() {
                d.onBlur()
            }), d.el.on("focus.autocomplete", function() {
                d.fixPosition()
            })
        },
        onBlur: function() {
            this.enableKillerFn()
        },
        setOptions: function(b) {
            var d = this, e = d.options;
            c.extend(e, b), d.isLocal = a.isArray(e.lookup), d.isLocal && (e.lookup = d.verifySuggestionsFormat(e.lookup)), a(d.suggestionsContainer).css({
                "max-height": e.maxHeight + "px",
                width: e.width + "px",
                "z-index": e.zIndex
            })
        },
        clearCache: function() {
            this.cachedResponse = [], this.badQueries = []
        },
        clear: function() {
            this.clearCache(), this.currentValue = null, this.suggestions = []
        },
        disable: function() {
            this.disabled=!0
        },
        enable: function() {
            this.disabled=!1
        },
        fixPosition: function() {
            var b, c = this;
            "body" === c.options.appendTo && (b = c.el.offset(), a(c.suggestionsContainer).css({
                top: b.top + c.el.outerHeight() + "px",
                left: b.left + "px"
            }))
        },
        enableKillerFn: function() {
            var b = this;
            a(document).on("click.autocomplete", b.killerFn)
        },
        disableKillerFn: function() {
            var b = this;
            a(document).off("click.autocomplete", b.killerFn)
        },
        killSuggestions: function() {
            var a = this;
            a.stopKillSuggestions(), a.intervalId = window.setInterval(function() {
                a.hide(), a.stopKillSuggestions()
            }, 300)
        },
        stopKillSuggestions: function() {
            window.clearInterval(this.intervalId)
        },
        onKeyPress: function(a) {
            var b = this;
            if (!b.disabled&&!b.visible && a.keyCode === d.DOWN && b.currentValue)
                return b.suggest(), void 0;
            if (!b.disabled && b.visible) {
                switch (a.keyCode) {
                case d.ESC:
                    b.el.val(b.currentValue), b.hide();
                    break;
                case d.TAB:
                case d.RETURN:
                    if (-1 === b.selectedIndex)
                        return b.hide(), void 0;
                    if (b.select(b.selectedIndex, a.keyCode === d.RETURN), a.keyCode === d.TAB && this.options.tabDisabled===!1)
                        return;
                    break;
                case d.UP:
                    b.moveUp();
                    break;
                case d.DOWN:
                    b.moveDown();
                    break;
                default:
                    return 
                }
                a.stopImmediatePropagation(), a.preventDefault()
            }
        },
        onKeyUp: function(a) {
            var b = this;
            if (!b.disabled) {
                switch (a.keyCode) {
                case d.UP:
                case d.DOWN:
                    return 
                }
                clearInterval(b.onChangeInterval), b.currentValue !== b.el.val() && (b.options.deferRequestBy > 0 ? b.onChangeInterval = setInterval(function() {
                    b.onValueChange()
                }, b.options.deferRequestBy) : b.onValueChange())
            }
        },
        onValueChange: function() {
            var a, b = this;
            return clearInterval(b.onChangeInterval), b.currentValue = b.element.value, a = b.getQuery(b.currentValue), b.selectedIndex =- 1, b.ignoreValueChange ? (b.ignoreValueChange=!1, void 0) : (a.length < b.options.minChars ? b.hide() : b.getSuggestions(a), void 0)
        },
        getQuery: function(b) {
            var c, d = this.options.delimiter;
            return d ? (c = b.split(d), a.trim(c[c.length-1])) : a.trim(b)
        },
        getSuggestionsLocal: function(b) {
            var c = this, d = b.toLowerCase(), e = c.options.lookupFilter;
            return {
                suggestions: a.grep(c.options.lookup, function(a) {
                    return e(a, b, d)
                })
            }
        },
        getSuggestions: function(b) {
            var c, d = this, e = d.options, f = e.serviceUrl;
            if (c = d.isLocal ? d.getSuggestionsLocal(b) : d.cachedResponse[b], c && a.isArray(c.suggestions)
                )d.suggestions = c.suggestions, d.suggest();
            else if (!d.isBadQuery(b)) {
                if (e.params[e.paramName] = b, e.onSearchStart.call(d.element, e.params)===!1)return;
                a.isFunction(e.serviceUrl) && (f = e.serviceUrl.call(d.element, b)), a.ajax({
                    url: f,
                    data: e.ignoreParams ? null: e.params,
                    type: e.type,
                    dataType: e.dataType
                }).done(function(a) {
                    d.processResponse(a, b), e.onSearchComplete.call(d.element, b)
                })
            }
        },
        isBadQuery: function(a) {
            for (var b = this.badQueries, c = b.length; c--;)
                if (0 === a.indexOf(b[c]))
                    return !0;
            return !1
        },
        hide: function() {
            var b = this;
            b.visible=!1, b.selectedIndex =- 1, a(b.suggestionsContainer).hide()
        },
        suggest: function() {
            if (0 === this.suggestions.length)
                return this.hide(), void 0;
            var b = this, c = b.options.formatResult, d = b.getQuery(b.currentValue), e = b.classes.suggestion, f = b.classes.selected, g = a(b.suggestionsContainer), h = "";
            a.each(b.suggestions, function(a, b) {
                h += '<div class="' + e + '" data-index="' + a + '">' + c(b, d) + "</div>"
            }), g.html(h).show(), b.visible=!0, b.options.autoSelectFirst && (b.selectedIndex = 0, g.children().first().addClass(f))
        },
        verifySuggestionsFormat: function(b) {
            return b.length && "string" == typeof b[0] ? a.map(b, function(a) {
                return {
                    value: a,
                    data: null
                }
            }) : b
        },
        processResponse: function(a, b) {
            var c = this, d = c.options, e = d.transformResult(a, b);
            e.suggestions = c.verifySuggestionsFormat(e.suggestions), d.noCache || (c.cachedResponse[e[d.paramName]] = e, 0 === e.suggestions.length && c.badQueries.push(e[d.paramName])), b === c.getQuery(c.currentValue) && (c.suggestions = e.suggestions, c.suggest())
        },
        activate: function(b) {
            var c, d = this, e = d.classes.selected, f = a(d.suggestionsContainer), g = f.children();
            return f.children("." + e).removeClass(e), d.selectedIndex = b, -1 !== d.selectedIndex && g.length > d.selectedIndex ? (c = g.get(d.selectedIndex), a(c).addClass(e), c) : null
        },
        select: function(a, b) {
            var c = this, d = c.suggestions[a];
            d && (c.el.val(d), c.ignoreValueChange = b, c.hide(), c.onSelect(a))
        },
        moveUp: function() {
            var b = this;
            if (-1 !== b.selectedIndex)
                return 0 === b.selectedIndex ? (a(b.suggestionsContainer).children().first().removeClass(b.classes.selected), b.selectedIndex =- 1, b.el.val(b.currentValue), void 0) : (b.adjustScroll(b.selectedIndex-1), void 0)
        },
        moveDown: function() {
            var a = this;
            a.selectedIndex !== a.suggestions.length-1 && a.adjustScroll(a.selectedIndex + 1)
        },
        adjustScroll: function(b) {
            var c, d, e, f = this, g = f.activate(b), h = 25;
            g && (c = g.offsetTop, d = a(f.suggestionsContainer).scrollTop(), e = d + f.options.maxHeight - h, d > c ? a(f.suggestionsContainer).scrollTop(c) : c > e && a(f.suggestionsContainer).scrollTop(c - f.options.maxHeight + h), f.el.val(f.getValue(f.suggestions[b].value)))
        },
        onSelect: function(b) {
            var c = this, d = c.options.onSelect, e = c.suggestions[b];
            c.el.val(c.getValue(e.value)), a.isFunction(d) && d.call(c.element, e)
        },
        getValue: function(a) {
            var b, c, d = this, e = d.options.delimiter;
            return e ? (b = d.currentValue, c = b.split(e), 1 === c.length ? a : b.substr(0, b.length - c[c.length-1].length) + a) : a
        },
        dispose: function() {
            var b = this;
            b.el.off(".autocomplete").removeData("autocomplete"), b.disableKillerFn(), a(b.suggestionsContainer).remove()
        }
    }, a.fn.autocomplete = function(c, d) {
        var e = "autocomplete";
        return 0 === arguments.length ? this.first().data(e) : this.each(function() {
            var f = a(this), g = f.data(e);
            "string" == typeof c ? g && "function" == typeof g[c] && g[c](d) : (g && g.dispose && g.dispose(), g = new b(this, c), f.data(e, g))
        })
    }
}), function(a, b, c, d) {
    "use strict";
    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^[\\/'"]+|(;\s?})+|[\\/'"]+$/g,"")),a}0===a("head").has(".foundation - mq - small").length&&a("head").append('<meta class="foundation - mq - small">'),0===a("head").has(".foundation - mq - medium").length&&a("head").append('<meta class="foundation - mq - medium">'),0===a("head").has(".foundation - mq - large").length&&a("head").append('<meta class="foundation - mq - large">'),0===a("head").has(".foundation - mq - xlarge").length&&a("head").append('<meta class="foundation - mq - xlarge">'),0===a("head").has(".foundation - mq - xxlarge").length&&a("head").append('<meta class="foundation - mq - xxlarge">'),a(function(){"undefined"!=typeof FastClick&&"undefined"!=typeof c.body&&FastClick.attach(c.body)});var f=function(b,d){return"string"==typeof b?d?a(d.querySelectorAll(b)):a(c.querySelectorAll(b)):a(b,d)};b.matchMedia=b.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq - test-1",f.style.cssText="position : absolute; top : -100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(c),function(){function a(){c&&(f(a),jQuery.fx.tick())}for(var c,d=0,e=["webkit","moz"],f=b.requestAnimationFrame,g=b.cancelAnimationFrame;d<e.length&&!f;d++)f=b[e[d]+"RequestAnimationFrame"],g=g||b[e[d]+"CancelAnimationFrame"]||b[e[d]+"CancelRequestAnimationFrame"];f?(b.requestAnimationFrame=f,b.cancelAnimationFrame=g,jQuery.fx.timer=function(b){b()&&jQuery.timers.push(b)&&!c&&(c=!0,a())},jQuery.fx.stop=function(){c=!1}):(b.requestAnimationFrame=function(a){var c=(new Date).getTime(),e=Math.max(0,16-(c-d)),f=b.setTimeout(function(){a(c+e)},e);return d=c+e,f},b.cancelAnimationFrame=function(a){clearTimeout(a)})}(jQuery),b.Foundation={name:"Foundation",version:"5.0.3",media_queries:{small:f(".foundation - mq - small").css("font - family").replace(/^[\/\\'"]+|(; \s ? 
    })+|[\ / \\'"]+$/g,""),medium:f(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"] + $ / g, ""), large: f(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xlarge: f(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""), xxlarge: f(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
}, stylesheet: a("<style></style>").appendTo("head")[0].sheet, init: function(a, b, c, d, e) {
    var g = [a, c, d, e], h = [];
    if (this.rtl = /rtl/i.test(f("html").attr("dir")), this.scope = a || this.scope, b && "string" == typeof b&&!/reflow/i.test(b)
        )this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, g));
    else 
        for (var i in this.libs)
            h.push(this.init_lib(i, b));
    return a
}, init_lib: function(a, b) {
    return this.libs.hasOwnProperty(a) ? (this.patch(this.libs[a]), b && b.hasOwnProperty(a) ? this.libs[a].init.apply(this.libs[a], [this.scope, b[a]]) : (b = b instanceof Array ? b : Array(b), this.libs[a].init.apply(this.libs[a], b))) : function() {}
}, patch: function(a) {
    a.scope = this.scope, a.data_options = this.lib_methods.data_options, a.bindings = this.lib_methods.bindings, a.S = f, a.rtl = this.rtl
}, inherit: function(a, b) {
    for (var c = b.split(" "), d = c.length-1; d >= 0; d--)
        this.lib_methods.hasOwnProperty(c[d]) && (this.libs[a.name][c[d]] = this.lib_methods[c[d]])
}, random_str: function(a) {
    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    a || (a = Math.floor(Math.random() * b.length));
    for (var c = "", d = 0; a > d; d++)
        c += b[Math.floor(Math.random() * b.length)];
    return c
}, libs: {}, lib_methods: {
    throttle: function(a, b) {
        var c = null;
        return function() {
            var d = this, e = arguments;
            clearTimeout(c), c = setTimeout(function() {
                a.apply(d, e)
            }, b)
        }
    }, data_options: function(b) {
        function c(a) {
            return !isNaN(a-0) && null !== a && "" !== a && a!==!1 && a!==!0
        }
        function d(b) {
            return "string" == typeof b ? a.trim(b) : b
        }
        var e, f, g, h, i = {}, j = b.data("options");
        if ("object" == typeof j)
            return j;
        for (g = (j || ":").split(";"), h = g.length, e = h-1; e >= 0; e--)
            f = g[e].split(":"), /true/i.test(f[1]) && (f[1]=!0), /false/i.test(f[1]) && (f[1]=!1), c(f[1]) && (f[1] = parseInt(f[1], 10)), 2 === f.length && f[0].length > 0 && (i[d(f[0])] = d(f[1]));
        return i
    }, delay: function(a, b) {
        return setTimeout(a, b)
    }, empty: function(a) {
        if (a.length && a.length > 0)
            return !1;
        if (a.length && 0 === a.length)
            return !0;
        for (var b in a)
            if (hasOwnProperty.call(a, b))
                return !1;
        return !0
    }, register_media: function(b, c) {
        Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '">'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
    }, addCustomRule: function(a, b) {
        if (b === d)
            Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
        else {
            var c = Foundation.media_queries[b];
            c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
        }
    }, loaded: function(a, b) {
        function c() {
            b(a[0])
        }
        function d() {
            if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)
                ) {
                var a = this.attr("src"), b = a.match(/\?/) ? "&": "?";
                b += "random=" + (new Date).getTime(), this.attr("src", a + b)
            }
        }
        return a.attr("src") ? (a[0].complete || 4 === a[0].readyState ? c() : d.call(a), void 0) : (c(), void 0)
    }, bindings: function(b, c) {
        var d = this, e=!f(this).data(this.name + "-init");
        return "string" == typeof b ? this[b].call(this, c) : (f(this.scope).is("[data-" + this.name + "]") ? (f(this.scope).data(this.name + "-init", a.extend({}, this.settings, c || b, this.data_options(f(this.scope)))), e && this.events(this.scope)) : f("[data-" + this.name + "]", this.scope).each(function() {
            var e=!f(this).data(d.name + "-init");
            f(this).data(d.name + "-init", a.extend({}, d.settings, c || b, d.data_options(f(this)))), e && d.events(this)
        }), void 0)
    }
}
}, a.fn.foundation = function() {
    var a = Array.prototype.slice.call(arguments, 0);
    return this.each(function() {
        return Foundation.init.apply(Foundation, [this].concat(a)), this
    })
}
}(jQuery, this, this.document), function(a, b, c) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.1.0",
        settings: {
            focus_on_invalid: !0,
            error_labels: !0,
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^\d+$/,
                number: /-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,
                password: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                url: /(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                datetime: /([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,
                time: /(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}/,
                dateISO: /\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,
                month_day_year: /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            }
        },
        timer: null,
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(b) {
            {
                var c = this, d = a(b).attr("novalidate", "novalidate");
                d.data("abide-init")
            }
            d.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(b) {
                var d = /ajax/i.test(a(this).attr("data-abide"));
                return c.validate(a(this).find("input, textarea, select").get(), b, d)
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                c.validate([this], a)
            }).on("keydown.fndtn.abide", function(b) {
                var d = a(this).closest("form").data("abide-init");
                clearTimeout(c.timer), c.timer = setTimeout(function() {
                    c.validate([this], b)
                }.bind(this), d.timeout)
            })
        },
        validate: function(b, c, d) {
            for (var e = this.parse_patterns(b), f = e.length, g = a(b[0]).closest("form"), h = /submit/.test(c.type), i = 0; f > i; i++)
                if (!e[i] && (h || d))
                    return this.settings.focus_on_invalid && b[i].focus(), g.trigger("invalid"), a(b[i]).closest("form").attr("data-invalid", ""), !1;
            return (h || d) && g.trigger("valid"), g.removeAttr("data-invalid"), d?!1 : !0
        },
        parse_patterns: function(a) {
            for (var b = a.length, c = [], d = b-1; d >= 0; d--)
                c.push(this.pattern(a[d]));
            return this.check_validation_and_apply_styles(c)
        },
        pattern: function(a) {
            var b = a.getAttribute("type"), c = "string" == typeof a.getAttribute("required"), d = a.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(d) && d.length > 0 ? [a, this.settings.patterns[d], c] : d.length > 0 ? [a, new RegExp(d), c] : this.settings.patterns.hasOwnProperty(b) ? [a, this.settings.patterns[b], c] : (d = /.*/, [a, d, c])
        },
        check_validation_and_apply_styles: function(b) {
            for (var c = b.length, d = [], e = c-1; e >= 0; e--) {
                var f = b[e][0], g = b[e][2], h = f.value, i = f.getAttribute("data-equalto"), j = "radio" === f.type, k = "checkbox" === f.type, l = a('label[for="' + f.getAttribute("id") + '"]'), m = g ? f.value.length > 0: !0;
                j && g ? d.push(this.valid_radio(f, g)) : k && g ? d.push(this.valid_checkbox(f, g)) : i && g ? d.push(this.valid_equal(f, g)) : b[e][1].test(h) && m ||!g && f.value.length < 1 ? (a(f).removeAttr("data-invalid").parent().removeClass("error"), l.length > 0 && this.settings.error_labels && l.removeClass("error"), d.push(!0)) : (a(f).attr("data-invalid", "").parent().addClass("error"), l.length > 0 && this.settings.error_labels && l.addClass("error"), d.push(!1))
            }
            return d
        },
        valid_checkbox: function(b, c) {
            var b = a(b), d = b.is(":checked") ||!c;
            return d ? b.removeAttr("data-invalid").parent().removeClass("error") : b.attr("data-invalid", "").parent().addClass("error"), d
        },
        valid_radio: function(b) {
            for (var d = b.getAttribute("name"), e = c.getElementsByName(d), f = e.length, g=!1, h = 0; f > h; h++)
                e[h].checked && (g=!0);
            for (var h = 0; f > h; h++)
                g ? a(e[h]).removeAttr("data-invalid").parent().removeClass("error") : a(e[h]).attr("data-invalid", "").parent().addClass("error");
            return g
        },
        valid_equal: function(b) {
            var d = c.getElementById(b.getAttribute("data-equalto")).value, e = b.value, f = d === e;
            return f ? a(b).removeAttr("data-invalid").parent().removeClass("error") : a(b).attr("data-invalid", "").parent().addClass("error"), f
        }
    }
}(jQuery, this, this.document), function(a) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.0.3",
        settings: {
            active_class: "active",
            toggleable: !0
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            a(this.scope).off(".accordion").on("click.fndtn.accordion", "[data-accordion] > dd > a", function(b) {
                var c = a(this).parent(), d = a("#" + this.href.split("#")[1]), e = a("> dd > .content", d.closest("[data-accordion]")), f = c.parent().data("accordion-init"), g = a("> dd > .content." + f.active_class, c.parent());
                return b.preventDefault(), g[0] == d[0] && f.toggleable ? d.toggleClass(f.active_class) : (e.removeClass(f.active_class), d.addClass(f.active_class), void 0)
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, this, this.document), function(a) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.0.3",
        settings: {
            animation: "fadeOut",
            speed: 300,
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            a(this.scope).off(".alert").on("click.fndtn.alert", "[data-alert] a.close", function(b) {
                var c = a(this).closest("[data-alert]"), d = c.data("alert-init") || Foundation.libs.alert.settings;
                b.preventDefault(), c[d.animation](d.speed, function() {
                    a(this).trigger("closed").remove(), d.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, this, this.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.0.3",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
            },
            close_selectors: ".clearing-close",
            init: !1,
            locked: !1
        },
        init: function(b, c, d) {
            var e = this;
            Foundation.inherit(this, "throttle loaded"), this.bindings(c, d), a(this.scope).is("[data-clearing]") ? this.assemble(a("li", this.scope)) : a("[data-clearing]", this.scope).each(function() {
                e.assemble(a("li", this))
            })
        },
        events: function(c) {
            var d = this;
            a(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[data-clearing] li", function(b, c, e) {
                var c = c || a(this), e = e || c, f = c.next("li"), g = c.closest("[data-clearing]").data("clearing-init"), h = a(b.target);
                b.preventDefault(), g || (d.init(), g = c.closest("[data-clearing]").data("clearing-init")), e.hasClass("visible") && c[0] === e[0] && f.length > 0 && d.is_open(c) && (e = f, h = a("img", e)), d.open(h, c, e), d.update_paddles(e)
            }).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
                d.nav(a, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
                d.nav(a, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
                Foundation.libs.clearing.close(a, this)
            }).on("keydown.fndtn.clearing", function(a) {
                d.keydown(a)
            }), a(b).off(".clearing").on("resize.fndtn.clearing", function() {
                d.resize()
            }), this.swipe_events(c)
        },
        swipe_events: function() {
            var b = this;
            a(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(b) {
                b.touches || (b = b.originalEvent);
                var c = {
                    start_page_x: b.touches[0].pageX,
                    start_page_y: b.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                a(this).data("swipe-transition", c), b.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function(c) {
                if (c.touches || (c = c.originalEvent), !(c.touches.length > 1 || c.scale && 1 !== c.scale)
                    ) {
                    var d = a(this).data("swipe-transition");
                    if ("undefined" == typeof d && (d = {}), d.delta_x = c.touches[0].pageX - d.start_page_x, "undefined" == typeof d.is_scrolling && (d.is_scrolling=!!(d.is_scrolling || Math.abs(d.delta_x) < Math.abs(c.touches[0].pageY - d.start_page_y)
                        )), !d.is_scrolling&&!d.active) {
                        c.preventDefault();
                        var e = d.delta_x < 0 ? "next": "prev";
                        d.active=!0, b.nav(c, e)
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(b) {
                a(this).data("swipe-transition", {}), b.stopPropagation()
            })
        },
        assemble: function(b) {
            var c = b.parent();
            if (!c.parent().hasClass("carousel")) {
                c.after('<div id="foundationClearingHolder"></div>');
                var d = a("#foundationClearingHolder"), e = c.data("clearing-init"), f = c.detach(), g = {
                    grid: '<div class="carousel">' + f[0].outerHTML + "</div>",
                    viewing: e.templates.viewing
                }, h = '<div class="clearing-assembled"><div>' + g.viewing + g.grid + "</div></div>";
                return d.after(h).remove()
            }
        },
        open: function(b, c, d) {
            var e = d.closest(".clearing-assembled"), f = a("div", e).first(), g = a(".visible-img", f), h = a("img", g).not(b);
            this.locked() || (h.attr("src", this.load(b)).css("visibility", "hidden"), this.loaded(h, function() {
                h.css("visibility", "visible"), e.addClass("clearing-blackout"), f.addClass("clearing-container"), g.show(), this.fix_height(d).caption(a(".clearing-caption", g), b).center(h).shift(c, d, function() {
                    d.siblings().removeClass("visible"), d.addClass("visible")
                })
            }.bind(this)))
        },
        close: function(b, c) {
            b.preventDefault();
            var d, e, f = function(a) {
                return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout")
            }(a(c));
            return c === b.target && f && (d = a("div", f).first(), e = a(".visible-img", d), this.settings.prev_index = 0, a("ul[data-clearing]", f).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), d.removeClass("clearing-container"), e.hide()), !1
        },
        is_open: function(a) {
            return a.parent().prop("style").length > 0
        },
        keydown: function(b) {
            var c = a("ul[data-clearing]", ".clearing-blackout"), d = this.rtl ? 37: 39, e = this.rtl ? 39: 37, f = 27;
            b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && a("a.clearing-close").trigger("click")
        },
        nav: function(b, c) {
            var d = a("ul[data-clearing]", ".clearing-blackout");
            b.preventDefault(), this.go(d, c)
        },
        resize: function() {
            var b = a("img", ".clearing-blackout .visible-img");
            b.length && this.center(b)
        },
        fix_height: function(b) {
            var c = b.parent().children();
            return c.each(function() {
                var b = a(this), c = b.find("img");
                b.height() > c.outerHeight() && b.addClass("fix-height")
            }).closest("ul").width(100 * c.length + "%"), this
        },
        update_paddles: function(b) {
            var c = b.closest(".carousel").siblings(".visible-img");
            b.next().length > 0 ? a(".clearing-main-next", c).removeClass("disabled") : a(".clearing-main-next", c).addClass("disabled"), b.prev().length > 0 ? a(".clearing-main-prev", c).removeClass("disabled") : a(".clearing-main-prev", c).addClass("disabled")
        },
        center: function(a) {
            return this.rtl ? a.css({
                marginRight: - (a.outerWidth() / 2),
                marginTop: - (a.outerHeight() / 2),
                left: "auto",
                right: "50%"
            }) : a.css({
                marginLeft: - (a.outerWidth() / 2),
                marginTop: - (a.outerHeight() / 2)
            }), this
        },
        load: function(a) {
            if ("A" === a[0].nodeName)
                var b = a.attr("href");
            else 
                var b = a.parent().attr("href");
            return this.preload(a), b ? b : a.attr("src")
        },
        preload: function(a) {
            this.img(a.closest("li").next()).img(a.closest("li").prev())
        },
        img: function(b) {
            if (b.length) {
                var c = new Image, d = a("a", b);
                c.src = d.length ? d.attr("href") : a("img", b).attr("src")
            }
            return this
        },
        caption: function(a, b) {
            var c = b.data("caption");
            return c ? a.html(c).show() : a.text("").hide(), this
        },
        go: function(b, c) {
            var d = a(".visible", b), e = d[c]();
            e.length && a("img", e).trigger("click", [d, e])
        },
        shift: function(a, b, c) {
            var d, e = b.parent(), f = this.settings.prev_index || b.index(), g = this.direction(e, a, b), h = this.rtl ? "right": "left", i = parseInt(e.css("left"), 10), j = b.outerWidth(), k = {};
            b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, this.lock(), d > 0 ? (k[h] =- (d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, e.animate(k, 300, this.unlock())), c()
        },
        direction: function(b, c, d) {
            var e, f = a("li", b), g = f.outerWidth() + f.outerWidth() / 4, h = Math.floor(a(".clearing-container").outerWidth() / g)-1, i = f.index(d);
            return this.settings.up_count = h, e = this.adjacent(this.settings.prev_index, i) ? i > h && i > this.settings.prev_index ? "right" : i > h-1 && i <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = i, e
        },
        adjacent: function(a, b) {
            for (var c = b + 1; c >= b-1; c--)
                if (c === a)
                    return !0;
            return !1
        },
        lock: function() {
            this.settings.locked=!0
        },
        unlock: function() {
            this.settings.locked=!1
        },
        locked: function() {
            return this.settings.locked
        },
        off: function() {
            a(this.scope).off(".fndtn.clearing"), a(b).off(".fndtn.clearing")
        },
        reflow: function() {
            this.init()
        }
    }
}(jQuery, this, this.document), function(a, b) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.0.3",
        settings: {
            active_class: "open",
            is_hover: !1,
            opened: function() {},
            closed: function() {}
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c)
        },
        events: function() {
            var c = this;
            a(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[data-dropdown]", function(b) {
                var d = a(this).data("dropdown-init") || c.settings;
                b.preventDefault(), c.closeall.call(c), (!d.is_hover || Modernizr.touch) && c.toggle(a(this))
            }).on("mouseenter.fndtn.dropdown", "[data-dropdown], [data-dropdown-content]", function(b) {
                var d = a(this);
                if (clearTimeout(c.timeout), d.data("dropdown")
                    )var e = a("#" + d.data("dropdown")), f = d;
                else {
                    var e = d;
                    f = a("[data-dropdown='" + e.attr("id") + "']")
                }
                var g = f.data("dropdown-init") || c.settings;
                a(b.target).data("dropdown") && g.is_hover && c.closeall.call(c), g.is_hover && c.open.apply(c, [e, f])
            }).on("mouseleave.fndtn.dropdown", "[data-dropdown], [data-dropdown-content]", function() {
                var b = a(this);
                c.timeout = setTimeout(function() {
                    if (b.data("dropdown")) {
                        var d = b.data("dropdown-init") || c.settings;
                        d.is_hover && c.close.call(c, a("#" + b.data("dropdown")))
                    } else {
                        var e = a('[data-dropdown="' + a(this).attr("id") + '"]'), d = e.data("dropdown-init") || c.settings;
                        d.is_hover && c.close.call(c, b)
                    }
                }.bind(this), 150)
            }).on("click.fndtn.dropdown", function(b) {
                var d = a(b.target).closest("[data-dropdown-content]");
                if (!a(b.target).data("dropdown")&&!a(b.target).parent().data("dropdown"))
                    return !a(b.target).data("revealId") && d.length > 0 && (a(b.target).is("[data-dropdown-content]") || a.contains(d.first()[0], b.target)) ? (b.stopPropagation(), void 0) : (c.close.call(c, a("[data-dropdown-content]")), void 0)
            }).on("opened.fndtn.dropdown", "[data-dropdown-content]", function() {
                c.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[data-dropdown-content]", function() {
                c.settings.closed.call(this)
            }), a(b).off(".dropdown").on("resize.fndtn.dropdown", c.throttle(function() {
                c.resize.call(c)
            }, 50)).trigger("resize")
        },
        close: function(b) {
            var c = this;
            b.each(function() {
                a(this).hasClass(c.settings.active_class) && (a(this).css(Foundation.rtl ? "right" : "left", "-99999px").removeClass(c.settings.active_class), a(this).trigger("closed"))
            })
        },
        closeall: function() {
            var b = this;
            a.each(a("[data-dropdown-content]"), function() {
                b.close.call(b, a(this))
            })
        },
        open: function(a, b) {
            this.css(a.addClass(this.settings.active_class), b), a.trigger("opened")
        },
        toggle: function(b) {
            var c = a("#" + b.data("dropdown"));
            0 !== c.length && (this.close.call(this, a("[data-dropdown-content]").not(c)), c.hasClass(this.settings.active_class) ? this.close.call(this, c) : (this.close.call(this, a("[data-dropdown-content]")), this.open.call(this, c, b)))
        },
        resize: function() {
            var b = a("[data-dropdown-content].open"), c = a("[data-dropdown='" + b.attr("id") + "']");
            b.length && c.length && this.css(b, c)
        },
        css: function(c, d) {
            var e = c.offsetParent(), f = d.offset();
            if (f.top -= e.offset().top, f.left -= e.offset().left, this.small())c.css({
                position: "absolute",
                width: "95%",
                "max-width": "none",
                top: f.top + d.outerHeight()
            }), c.css(Foundation.rtl ? "right" : "left", "2.5%");
            else {
                if (!Foundation.rtl && a(b).width() > c.outerWidth() + d.offset().left) {
                    var g = f.left;
                    c.hasClass("right") && c.removeClass("right")
                } else {
                    c.hasClass("right") || c.addClass("right");
                    var g = f.left - (c.outerWidth() - d.outerWidth())
                }
                c.attr("style", "").css({
                    position: "absolute",
                    top: f.top + d.outerHeight(),
                    left: g
                })
            }
            return c
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            a(this.scope).off(".fndtn.dropdown"), a("html, body").off(".fndtn.dropdown"), a(b).off(".fndtn.dropdown"), a("[data-dropdown-content]").off(".fndtn.dropdown"), this.settings.init=!1
        },
        reflow: function() {}
    }
}(jQuery, this, this.document), function(a, b) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.0.3",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                medium: Foundation.media_queries.medium,
                large: Foundation.media_queries.large,
                xlarge: Foundation.media_queries.xlarge,
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(b, c, d) {
                    if (/IMG/.test(b[0].nodeName)) {
                        var e = b[0].src;
                        if (new RegExp(c, "i").test(e))
                            return;
                        return b[0].src = c, d(b[0].src)
                    }
                    var f = b.data("interchange-last-path");
                    if (f != c)
                        return a.get(c, function(a) {
                            b.html(a), b.data("interchange-last-path", c), d()
                        })
                }
            }
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle"), this.data_attr = "data-" + this.settings.load_attr, a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes")
        },
        events: function() {
            var c = this;
            return a(b).off(".interchange").on("resize.fndtn.interchange", c.throttle(function() {
                c.resize.call(c)
            }, 50)), this
        },
        resize: function() {
            var b = this.cache;
            if (!this.images_loaded ||!this.nodes_loaded)
                return setTimeout(a.proxy(this.resize, this), 50), void 0;
            for (var c in b)
                if (b.hasOwnProperty(c)) {
                    var d = this.results(c, b[c]);
                    d && this.settings.directives[d.scenario[1]](d.el, d.scenario[0], function() {
                        if (arguments[0]instanceof Array)
                            var a = arguments[0];
                        else 
                            var a = Array.prototype.slice.call(arguments, 0);
                            d.el.trigger(d.scenario[1], a)
                        })
                }
        },
        results: function(a, b) {
            var c = b.length;
            if (c > 0)
                for (var d = this.S('[data-uuid="' + a + '"]'), e = c-1; e >= 0; e--) {
                    var f, g = b[e][2];
                    if (f = this.settings.named_queries.hasOwnProperty(g) ? matchMedia(this.settings.named_queries[g]) : matchMedia(g), f.matches)
                        return {
                            el: d,
                            scenario: b[e]
                        }
                }
            return !1
        },
        load: function(a, b) {
            return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), this["cached_" + a]
        },
        update_images: function() {
            var a = this.S("img[" + this.data_attr + "]"), b = a.length, c = 0, d = this.data_attr;
            this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b;
            for (var e = b-1; e >= 0; e--) {
                if (c++, a[e]) {
                    var f = a[e].getAttribute(d) || "";
                    f.length > 0 && this.cached_images.push(a[e])
                }
                c === b && (this.images_loaded=!0, this.enhance("images"))
            }
            return this
        },
        update_nodes: function() {
            var a = this.S("[" + this.data_attr + "]").not("img"), b = a.length, c = 0, d = this.data_attr;
            this.cached_nodes = [], this.nodes_loaded = 0 === b;
            for (var e = b-1; e >= 0; e--) {
                c++;
                var f = a[e].getAttribute(d) || "";
                f.length > 0 && this.cached_nodes.push(a[e]), c === b && (this.nodes_loaded=!0, this.enhance("nodes"))
            }
            return this
        },
        enhance: function(c) {
            for (var d = this["cached_" + c].length, e = d-1; e >= 0; e--)
                this.object(a(this["cached_" + c][e]));
            return a(b).trigger("resize")
        },
        parse_params: function(a, b, c) {
            return [this.trim(a), this.convert_directive(b), this.trim(c)]
        },
        convert_directive: function(a) {
            var b = this.trim(a);
            return b.length > 0 ? b : "replace"
        },
        object: function(a) {
            var b = this.parse_data_attr(a), c = [], d = b.length;
            if (d > 0)
                for (var e = d-1; e >= 0; e--) {
                    var f = b[e].split(/\((.*?)(\))$/);
                    if (f.length > 1) {
                        var g = f[0].split(","), h = this.parse_params(g[0], g[1], f[1]);
                        c.push(h)
                    }
                }
            return this.store(a, c)
        },
        uuid: function(a) {
            function b() {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }
            var c = a || "-";
            return b() + b() + c + b() + c + b() + c + b() + c + b() + b() + b()
        },
        store: function(a, b) {
            var c = this.uuid(), d = a.data("uuid");
            return this.cache[d] ? this.cache[d] : (a.attr("data-uuid", c), this.cache[c] = b)
        },
        trim: function(b) {
            return "string" == typeof b ? a.trim(b) : b
        },
        parse_data_attr: function(a) {
            for (var b = a.data(this.settings.load_attr).split(/\[(.*?)\]/), c = b.length, d = [], e = c-1; e >= 0; e--)
                b[e].replace(/[\W\d]+/, "").length > 4 && d.push(b[e]);
            return d
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0)
        }
    }
}(jQuery, this, this.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.0.3",
        defaults: {
            expose: !1,
            modal: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            tip_location_patterns: {
                top: ["bottom"],
                bottom: [],
                left: ["right", "top", "bottom"],
                right: ["left", "top", "bottom"]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle delay"), this.settings = this.defaults, this.bindings(b, c)
        },
        events: function() {
            var c = this;
            a(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(a) {
                a.preventDefault(), this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(a) {
                a.preventDefault(), this.end()
            }.bind(this)), a(b).off(".joyride").on("resize.fndtn.joyride", c.throttle(function() {
                if (a("[data-joyride]").length > 0 && c.settings.$next_tip) {
                    if (c.settings.exposed.length > 0) {
                        var b = a(c.settings.exposed);
                        b.each(function() {
                            var b = a(this);
                            c.un_expose(b), c.expose(b)
                        })
                    }
                    c.is_phone() ? c.pos_phone() : c.pos_default(!1, !0)
                }
            }, 100))
        },
        start: function() {
            var b = this, c = a("[data-joyride]", this.scope), d = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"], e = d.length;
            !c.length > 0 || (this.settings.init || this.events(), this.settings = c.data("joyride-init"), this.settings.$content_el = c, this.settings.$body = a(this.settings.tip_container), this.settings.body_offset = a(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused=!1, this.settings.attempts = 0, "function" != typeof a.cookie && (this.settings.cookie_monster=!1), (!this.settings.cookie_monster || this.settings.cookie_monster&&!a.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(c) {
                var f = a(this);
                this.settings = a.extend({}, b.defaults, b.data_options(f));
                for (var g = e-1; g >= 0; g--)
                    b.settings[d[g]] = parseInt(b.settings[d[g]], 10);
                b.create({
                    $li: f,
                    index: c
                })
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
        },
        resume: function() {
            this.set_li(), this.show()
        },
        tip_template: function(b) {
            var c, d;
            return b.tip_class = b.tip_class || "", c = a(this.settings.template.tip).addClass(b.tip_class), d = a.trim(a(b.li).html()) + this.button_text(b.button_text) + this.settings.template.link + this.timer_instance(b.index), c.append(a(this.settings.template.wrapper)), c.first().attr("data-index", b.index), a(".joyride-content-wrapper", c).append(d), c[0]
        },
        timer_instance: function(b) {
            var c;
            return c = 0 === b && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : a(this.settings.template.timer)[0].outerHTML
        },
        button_text: function(b) {
            return this.settings.next_button ? (b = a.trim(b) || "Next", b = a(this.settings.template.button).append(b)[0].outerHTML) : b = "", b
        },
        create: function(b) {
            var c = b.$li.attr("data-button") || b.$li.attr("data-text"), d = b.$li.attr("class"), e = a(this.tip_template({
                tip_class: d,
                index: b.index,
                button_text: c,
                li: b.$li
            }));
            a(this.settings.tip_container).append(e)
        },
        show: function(b) {
            var c = null;
            this.settings.$li === d||-1 === a.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused=!1 : this.set_li(b), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (b && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = a.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), c = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (c.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), this.delay(function() {
                c.animate({
                    width : c.parent().width()
                },
                this.settings.timer,
                "linear")
            }.bind(this),
            this.settings.tip_animation_fade_speed)): this.settings.$next_tip.show()): /fade/i.test(this.settings.tip_animation) && (c.width(0),
            this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),
            this.delay(function() {
                c.animate({
                    width: c.parent().width()
                }, this.settings.timer, "linear")
            }.bind(this), this.settings.tip_animation_fadeSpeed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused=!0
        }, is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches
        }, hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || a(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(a.proxy(function() {
                this.hide(), this.css("visibility", "visible")
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        }, set_li: function(a) {
            a ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = this.settings.$li.next(), this.set_next_tip()), this.set_target()
        }, set_next_tip: function() {
            this.settings.$next_tip = a(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
        }, set_target: function() {
            var b = this.settings.$li.attr("data-class"), d = this.settings.$li.attr("data-id"), e = function() {
                return d ? a(c.getElementById(d)) : b ? a("." + b).first() : a("body")
            };
            this.settings.$target = e()
        }, scroll_to: function() {
            var c, d;
            c = a(b).height() / 2, d = Math.ceil(this.settings.$target.offset().top - c + this.settings.$next_tip.outerHeight()), 0 != d && a("html, body").animate({
                scrollTop: d
            }, this.settings.scroll_speed, "swing")
        }, paused: function() {
            return -1 === a.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        }, restart: function() {
            this.hide(), this.settings.$li = d, this.show("init")
        }, pos_default: function(c, d) {
            var e = (Math.ceil(a(b).height() / 2), this.settings.$next_tip.offset(), this.settings.$next_tip.find(".joyride-nub")), f = Math.ceil(e.outerWidth() / 2), g = Math.ceil(e.outerHeight() / 2), h = c ||!1;
            h && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), "undefined" == typeof d && (d=!1), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(e) : (this.bottom() ? (this.rtl ? this.settings.$next_tip.css({
                top: this.settings.$target.offset().top + g + this.settings.$target.outerHeight(),
                left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
            }) : this.settings.$next_tip.css({
                top: this.settings.$target.offset().top + g + this.settings.$target.outerHeight(),
                left: this.settings.$target.offset().left
            }), this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.rtl ? this.settings.$next_tip.css({
                top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - g,
                left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
            }) : this.settings.$next_tip.css({
                top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - g,
                left: this.settings.$target.offset().left
            }), this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                top: this.settings.$target.offset().top,
                left: this.outerWidth(this.settings.$target) + this.settings.$target.offset().left + f
            }), this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                top: this.settings.$target.offset().top,
                left: this.settings.$target.offset().left - this.outerWidth(this.settings.$next_tip) - f
            }), this.nub_position(e, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())), h && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        }, pos_phone: function(b) {
            var c = this.settings.$next_tip.outerHeight(), d = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()), e = a(".joyride-nub", this.settings.$next_tip), f = Math.ceil(e.outerHeight() / 2), g = b ||!1;
            e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), g && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(e) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - c - f
            }), e.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + d + f
            }), e.addClass("top")), g && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        }, pos_modal: function(a) {
            this.center(), a.hide(), this.show_modal()
        }, show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var b = a(".joyride-modal-bg");
                b.length < 1 && a("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? b.show() : b.fadeIn(this.settings.tip_animation_fade_speed)
            }
        }, expose: function() {
            var c, d, e, f, g, h = "expose-" + Math.floor(1e4 * Math.random());
            if (arguments.length > 0 && arguments[0]instanceof a)
                e = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector))
                    return !1;
                e = this.settings.$target
            }
            return e.length < 1 ? (b.console && console.error("element not valid", e), !1) : (c = a(this.settings.template.expose), this.settings.$body.append(c), c.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), d = a(this.settings.template.expose_cover), f = {
                zIndex: e.css("z-index"),
                position: e.css("position")
            }, g = null == e.attr("class") ? "" : e.attr("class"), e.css("z-index", parseInt(c.css("z-index")) + 1), "static" == f.position && e.css("position", "relative"), e.data("expose-css", f), e.data("orig-class", g), e.attr("class", g + " " + this.settings.expose_add_class), d.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(d), c.addClass(h), d.addClass(h), e.data("expose", h), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, e), this.add_exposed(e), void 0)
        }, un_expose: function() {
            var c, d, e, f, g, h=!1;
            if (arguments.length > 0 && arguments[0]instanceof a)
                d = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector))
                    return !1;
                d = this.settings.$target
            }
            return d.length < 1 ? (b.console && console.error("element not valid", d), !1) : (c = d.data("expose"), e = a("." + c), arguments.length > 1 && (h = arguments[1]), h===!0 ? a(".joyride-expose-wrapper,.joyride-expose-cover").remove() : e.remove(), f = d.data("expose-css"), "auto" == f.zIndex ? d.css("z-index", "") : d.css("z-index", f.zIndex), f.position != d.css("position") && ("static" == f.position ? d.css("position", "") : d.css("position", f.position)), g = d.data("orig-class"), d.attr("class", g), d.removeData("orig-classes"), d.removeData("expose"), d.removeData("expose-z-index"), this.remove_exposed(d), void 0)
        }, add_exposed: function(b) {
            this.settings.exposed = this.settings.exposed || [], b instanceof a || "object" == typeof b ? this.settings.exposed.push(b[0]) : "string" == typeof b && this.settings.exposed.push(b)
        }, remove_exposed: function(b) {
            var c, d;
            b instanceof a ? c = b[0] : "string" == typeof b && (c = b), this.settings.exposed = this.settings.exposed || [], d = this.settings.exposed.length;
            for (var e = 0; d > e; e++)
                if (this.settings.exposed[e] == c)
                    return this.settings.exposed.splice(e, 1), void 0
        }, center: function() {
            var c = a(b);
            return this.settings.$next_tip.css({
                top: (c.height() - this.settings.$next_tip.outerHeight()) / 2 + c.scrollTop(),
                left: (c.width() - this.settings.$next_tip.outerWidth()) / 2 + c.scrollLeft()
            }), !0
        }, bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location)
        }, top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location)
        }, right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location)
        }, left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location)
        }, corners: function(c) {
            var d = a(b), e = d.height() / 2, f = Math.ceil(this.settings.$target.offset().top - e + this.settings.$next_tip.outerHeight()), g = d.width() + d.scrollLeft(), h = d.height() + f, i = d.height() + d.scrollTop(), j = d.scrollTop();
            return j > f && (j = 0 > f ? 0 : f), h > i && (i = h), [c.offset().top < j, g < c.offset().left + c.outerWidth(), i < c.offset().top + c.outerHeight(), d.scrollLeft() > c.offset().left]
        }, visible: function(a) {
            for (var b = a.length; b--;)
                if (a[b])
                    return !1;
            return !0
        }, nub_position: function(a, b, c) {
            "auto" === b ? a.addClass(c) : a.addClass(b)
        }, startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        }, end: function() {
            this.settings.cookie_monster && a.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), this.settings.$next_tip.data("closed", !0), a(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip), a(".joyride-tip-guide").remove()
        }, off: function() {
            a(this.scope).off(".joyride"), a(b).off(".joyride"), a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), a(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        }, reflow: function() {}
    }
}(jQuery, this, this.document), function(a, b) {
    "use strict";
    Foundation.libs.magellan = {
        name: "magellan",
        version: "5.0.3",
        settings: {
            active_class: "active",
            threshold: 0
        },
        init: function(b, c) {
            this.fixed_magellan = a("[data-magellan-expedition]"), this.magellan_placeholder = a("<div></div>").css({
                height: this.fixed_magellan.outerHeight(!0)
            }).hide().insertAfter(this.fixed_magellan), this.set_threshold(), this.set_active_class(c), this.last_destination = a("[data-magellan-destination]").last(), this.events()
        },
        events: function() {
            var c = this;
            a(this.scope).off(".magellan").on("arrival.fndtn.magellan", "[data-magellan-arrival]", function() {
                var b = a(this), d = b.closest("[data-magellan-expedition]"), e = d.attr("data-magellan-active-class") || c.settings.active_class;
                b.closest("[data-magellan-expedition]").find("[data-magellan-arrival]").not(b).removeClass(e), b.addClass(e)
            }), this.fixed_magellan.off(".magellan").on("update-position.fndtn.magellan", function() {
                a(this)
            }).trigger("update-position"), a(b).off(".magellan").on("resize.fndtn.magellan", function() {
                this.fixed_magellan.trigger("update-position")
            }.bind(this)).on("scroll.fndtn.magellan", function() {
                var d = a(b).scrollTop();
                c.fixed_magellan.each(function() {
                    var b = a(this);
                    "undefined" == typeof b.data("magellan-top-offset") && b.data("magellan-top-offset", b.offset().top), "undefined" == typeof b.data("magellan-fixed-position") && b.data("magellan-fixed-position", !1);
                    var e = d + c.settings.threshold > b.data("magellan-top-offset"), f = b.attr("data-magellan-top-offset");
                    b.data("magellan-fixed-position") != e && (b.data("magellan-fixed-position", e), e ? (b.addClass("fixed"), b.css({
                        position: "fixed",
                        top: 0
                    }), c.magellan_placeholder.show()) : (b.removeClass("fixed"), b.css({
                        position : "", top : ""
                    }), c.magellan_placeholder.hide()), e && "undefined" != typeof f && 0 != f && b.css({
                        position: "fixed",
                        top: f + "px"
                    }))
                })
            }), this.last_destination.length > 0 && a(b).on("scroll.fndtn.magellan", function() {
                var d = a(b).scrollTop(), e = d + a(b).height(), f = Math.ceil(c.last_destination.offset().top);
                a("[data-magellan-destination]").each(function() {
                    var b = a(this), g = b.attr("data-magellan-destination"), h = b.offset().top - b.outerHeight(!0) - d;
                    h <= c.settings.threshold && a("[data-magellan-arrival='" + g + "']").trigger("arrival"), e >= a(c.scope).height() && f > d && e > f && a("[data-magellan-arrival]").last().trigger("arrival")
                })
            })
        },
        set_threshold: function() {
            "number" != typeof this.settings.threshold && (this.settings.threshold = this.fixed_magellan.length > 0 ? this.fixed_magellan.outerHeight(!0) : 0)
        },
        set_active_class: function(a) {
            a && a.active_class && "string" == typeof a.active_class && (this.settings.active_class = a.active_class)
        },
        off: function() {
            a(this.scope).off(".fndtn.magellan"), a(b).off(".fndtn.magellan")
        },
        reflow: function() {}
    }
}(jQuery, this, this.document), function(a) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.0.3",
        settings: {},
        init: function() {
            this.events()
        },
        events: function() {
            a(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(b) {
                b.preventDefault(), a(this).closest(".off-canvas-wrap").toggleClass("move-right")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(b) {
                b.preventDefault(), a(".off-canvas-wrap").removeClass("move-right")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(b) {
                b.preventDefault(), a(this).closest(".off-canvas-wrap").toggleClass("move-left")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(b) {
                b.preventDefault(), a(".off-canvas-wrap").removeClass("move-left")
            })
        },
        reflow: function() {}
    }
}(jQuery, this, this.document), function(a, b, c, d) {
    "use strict";
    var e = function() {}, f = function(e, f) {
        if (e.hasClass(f.slides_container_class))
            return this;
        var j, k, l, m, n, o, p = this, q = e, r = 0, s=!1;
        p.slides = function() {
            return q.children(f.slide_selector)
        }, p.slides().first().addClass(f.active_slide_class), p.update_slide_number = function(b) {
            f.slide_number && (k.find("span:first").text(parseInt(b) + 1), k.find("span:last").text(p.slides().length)), f.bullets && (l.children().removeClass(f.bullets_active_class), a(l.children().get(b)).addClass(f.bullets_active_class))
        }, p.update_active_link = function(b) {
            var c = a('a[data-orbit-link="' + p.slides().eq(b).attr("data-orbit-slide") + '"]');
            c.siblings().removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class)
        }, p.build_markup = function() {
            q.wrap('<div class="' + f.container_class + '"></div>'), j = q.parent(), q.addClass(f.slides_container_class), f.navigation_arrows && (j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)), j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))), f.timer && (m = a("<div>").addClass(f.timer_container_class), m.append("<span>"), m.append(a("<div>").addClass(f.timer_progress_class)), m.addClass(f.timer_paused_class), j.append(m)), f.slide_number && (k = a("<div>").addClass(f.slide_number_class), k.append("<span></span> " + f.slide_number_text + " <span></span>"), j.append(k)), f.bullets && (l = a("<ol>").addClass(f.bullets_container_class), j.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), p.slides().each(function(b) {
                var c = a("<li>").attr("data-orbit-slide", b);
                l.append(c)
            })), f.stack_on_small && j.addClass(f.stack_on_small_class), p.update_slide_number(0), p.update_active_link(0)
        }, p._goto = function(b, c) {
            if (b === r)
                return !1;
            "object" == typeof o && o.restart();
            var d = p.slides(), e = "next";
            if (s=!0, r > b && (e = "prev")
                , b >= d.length) {
                if (!f.circular)
                    return !1;
                b = 0
            } else if (0 > b) {
                if (!f.circular)
                    return !1;
                    b = d.length-1
            }
            var g = a(d.get(r)), h = a(d.get(b));
            g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), q.trigger("before-slide-change.fndtn.orbit"), f.before_slide_change(), p.update_active_link(b);
            var i = function() {
                var a = function() {
                    r = b, s=!1, c===!0 && (o = p.create_timer(), o.start()), p.update_slide_number(r), q.trigger("after-slide-change.fndtn.orbit", [{
                        slide_number: r,
                        total_slides: d.length
                    }
                    ]), f.after_slide_change(r, d.length)
                };
                q.height() != h.height() && f.variable_height ? q.animate({
                    height: h.height()
                }, 250, "linear", a) : a()
            };
            if (1 === d.length)
                return i(), !1;
            var j = function() {
                "next" === e && n.next(g, h, i), "prev" === e && n.prev(g, h, i)
            };
            h.height() > q.height() && f.variable_height ? q.animate({
                height: h.height()
            }, 250, "linear", j) : j()
        }, p.next = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), p._goto(r + 1)
        }, p.prev = function(a) {
            a.stopImmediatePropagation(), a.preventDefault(), p._goto(r-1)
        }, p.link_custom = function(b) {
            b.preventDefault();
            var c = a(this).attr("data-orbit-link");
            if ("string" == typeof c && "" != (c = a.trim(c))) {
                var d = j.find("[data-orbit-slide=" + c + "]");
                -1 != d.index() && p._goto(d.index())
            }
        }, p.link_bullet = function() {
            var b = a(this).attr("data-orbit-slide");
            if ("string" == typeof b && "" != (b = a.trim(b)))
                if (isNaN(parseInt(b))) {
                    var c = j.find("[data-orbit-slide=" + b + "]");
                    -1 != c.index() && p._goto(c.index() + 1)
                } else 
                    p._goto(parseInt(b))
        }, p.timer_callback = function() {
            p._goto(r + 1, !0)
        }, p.compute_dimensions = function() {
            var b = a(p.slides().get(r)), c = b.height();
            f.variable_height || p.slides().each(function() {
                a(this).height() > c && (c = a(this).height())
            }), q.height(c)
        }, p.create_timer = function() {
            var a = new g(j.find("." + f.timer_container_class), f, p.timer_callback);
            return a
        }, p.stop_timer = function() {
            "object" == typeof o && o.stop()
        }, p.toggle_timer = function() {
            var a = j.find("." + f.timer_container_class);
            a.hasClass(f.timer_paused_class) ? ("undefined" == typeof o && (o = p.create_timer()), o.start()) : "object" == typeof o && o.stop()
        }, p.init = function() {
            p.build_markup(), f.timer && (o = p.create_timer(), o.start()), n = new i(f, q), "slide" === f.animation && (n = new h(f, q)), j.on("click", "." + f.next_class, p.next), j.on("click", "." + f.prev_class, p.prev), j.on("click", "[data-orbit-slide]", p.link_bullet), j.on("click", p.toggle_timer), f.swipe && j.on("touchstart.fndtn.orbit", function(a) {
                a.touches || (a = a.originalEvent);
                var b = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                j.data("swipe-transition", b), a.stopPropagation()
            }).on("touchmove.fndtn.orbit", function(a) {
                if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)
                    ) {
                    var b = j.data("swipe-transition");
                    if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, "undefined" == typeof b.is_scrolling && (b.is_scrolling=!!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y)
                        )), !b.is_scrolling&&!b.active) {
                        a.preventDefault();
                        var c = b.delta_x < 0 ? r + 1: r-1;
                        b.active=!0, p._goto(c)
                    }
                }
            }).on("touchend.fndtn.orbit", function(a) {
                j.data("swipe-transition", {}), a.stopPropagation()
            }), j.on("mouseenter.fndtn.orbit", function() {
                f.timer && f.pause_on_hover && p.stop_timer()
            }).on("mouseleave.fndtn.orbit", function() {
                f.timer && f.resume_on_mouseout && o.start()
            }), a(c).on("click", "[data-orbit-link]", p.link_custom), a(b).on("resize", p.compute_dimensions), a(b).on("load", p.compute_dimensions), a(b).on("load", function() {
                j.prev(".preloader").css("display", "none")
            }), q.trigger("ready.fndtn.orbit")
        }, p.init()
    }, g = function(a, b, c) {
        var d, e, f = this, g = b.timer_speed, h = a.find("." + b.timer_progress_class), i =- 1;
        this.update_progress = function(a) {
            var b = h.clone();
            b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b
        }, this.restart = function() {
            clearTimeout(e), a.addClass(b.timer_paused_class), i =- 1, f.update_progress(0)
        }, this.start = function() {
            return a.hasClass(b.timer_paused_class) ? (i =- 1 === i ? g : i, a.removeClass(b.timer_paused_class), d = (new Date).getTime(), h.animate({
                width : "100%"
            }, i, "linear"), e = setTimeout(function() {
                f.restart(), c()
            }, i), a.trigger("timer-started.fndtn.orbit"), void 0) : !0
        }, this.stop = function() {
            if (a.hasClass(b.timer_paused_class))
                return !0;
            clearTimeout(e), a.addClass(b.timer_paused_class);
            var c = (new Date).getTime();
            i -= c - d;
            var h = 100 - i / g * 100;
            f.update_progress(h), a.trigger("timer-stopped.fndtn.orbit")
        }
    }, h = function(b) {
        var c = b.animation_speed, d = 1 === a("html[dir=rtl]").length, e = d ? "marginRight": "marginLeft", f = {};
        f[e] = "0%", this.next = function(a, b, d) {
            a.animate({
                marginLeft: "-100%"
            }, c), b.animate(f, c, function() {
                a.css(e, "100%"), d()
            })
        }, this.prev = function(a, b, d) {
            a.animate({
                marginLeft: "100%"
            }, c), b.css(e, "-100%"), b.animate(f, c, function() {
                a.css(e, "100%"), d()
            })
        }
    }, i = function(b) {
        {
            var c = b.animation_speed;
            1 === a("html[dir=rtl]").length
        }
        this.next = function(a, b, d) {
            b.css({
                margin: "0%",
                opacity: "0.01"
            }), b.animate({
                opacity: "1"
            }, c, "linear", function() {
                a.css("margin", "100%"), d()
            })
        }, this.prev = function(a, b, d) {
            b.css({
                margin: "0%",
                opacity: "0.01"
            }), b.animate({
                opacity: "1"
            }, c, "linear", function() {
                a.css("margin", "100%"), d()
            })
        }
    };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.0.3",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: e,
            after_slide_change: e
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(b) {
            var c = new f(a(b), a(b).data("orbit-init"));
            a(b).data(self.name + "-instance", c)
        },
        reflow: function() {
            var b = this;
            if (a(b.scope).is("[data-orbit]")) {
                var c = a(b.scope), d = c.data(b.name + "-instance");
                d.compute_dimensions()
            } else 
                a("[data-orbit]", b.scope).each(function(c, d) {
                    var e = a(d), f = (b.data_options(e), e.data(b.name + "-instance"));
                    f.compute_dimensions()
                })
        }
    }
}(jQuery, this, this.document), function(a, b, c, d) {
    "use strict";
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.0.3",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            bg_class: "reveal-modal-bg",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "delay"), a.extend(!0, this.settings, c, d), this.bindings(c, d)
        },
        events: function() {
            var b = this;
            return a("[data-reveal-id]", this.scope).off(".reveal").on("click.fndtn.reveal", function(c) {
                if (c.preventDefault(), !b.locked) {
                    var d = a(this), e = d.data("reveal-ajax");
                    if (b.locked=!0, "undefined" == typeof e)
                        b.open.call(b, d);
                    else {
                        var f = e===!0 ? d.attr("href"): e;
                        b.open.call(b, d, {
                            url: f
                        })
                    }
                }
            }), a(this.scope).off(".reveal"), a(c).on("click.fndtn.reveal", this.close_targets(), function(c) {
                if (c.preventDefault(), !b.locked) {
                    var d = a("[data-reveal].open").data("reveal-init"), e = a(c.target)[0] === a("." + d.bg_class)[0];
                    if (e&&!d.close_on_background_click)
                        return;
                    b.locked=!0, b.close.call(b, e ? a("[data-reveal].open") : a(this).closest("[data-reveal]"))
                }
            }), a("[data-reveal]", this.scope).length > 0 ? a(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : a(this.scope).on("open.fndtn.reveal", "[data-reveal]", this.settings.open).on("opened.fndtn.reveal", "[data-reveal]", this.settings.opened).on("opened.fndtn.reveal", "[data-reveal]", this.open_video).on("close.fndtn.reveal", "[data-reveal]", this.settings.close).on("closed.fndtn.reveal", "[data-reveal]", this.settings.closed).on("closed.fndtn.reveal", "[data-reveal]", this.close_video), !0
        },
        key_up_on: function() {
            var b = this;
            return a("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(c) {
                var d = a("[data-reveal].open"), e = d.data("reveal-init");
                e && 27 === c.which && e.close_on_esc&&!b.locked && b.close.call(b, d)
            }), !0
        },
        key_up_off: function() {
            return a("body").off("keyup.fndtn.reveal"), !0
        },
        open: function(b, c) {
            var d = this;
            if (b)
                if ("undefined" != typeof b.selector)
                    var e = a("#" + b.data("reveal-id"));
                else {
                    var e = a(this.scope);
                    c = b
                } else 
                    var e = a(this.scope);
            var f = e.data("reveal-init");
            if (!e.hasClass("open")) {
                var g = a("[data-reveal].open");
                if ("undefined" == typeof e.data("css-top") && e.data("css-top", parseInt(e.css("top"), 10)).data("offset", this.cache_offset(e)), this.key_up_on(e)
                    , e.trigger("open"), g.length < 1 && this.toggle_bg(e), "string" == typeof c && (c = {
                    url: c
                }), "undefined" != typeof c && c.url) {
                    var h = "undefined" != typeof c.success ? c.success: null;
                    a.extend(c, {
                        success: function(b, c, i) {
                            if (a.isFunction(h) && h(b, c, i), e.html(b)
                                , a(e).foundation("section", "reflow"), g.length > 0) {
                                var j = g.data("reveal-init");
                                d.hide(g, j.css.close)
                            }
                            d.show(e, f.css.open)
                        }
                    }), a.ajax(c)
                } else {
                    if (g.length > 0) {
                        var i = g.data("reveal-init");
                        this.hide(g, i.css.close)
                    }
                    this.show(e, f.css.open)
                }
            }
        },
        close: function(b) {
            var b = b && b.length ? b: a(this.scope), c = a("[data-reveal].open"), d = b.data("reveal-init");
            c.length > 0 && (this.locked=!0, this.key_up_off(b), b.trigger("close"), this.toggle_bg(b), this.hide(c, d.css.close, d))
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function(b) {
            b.data("reveal-init");
            0 === a("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body")), this.settings.bg.filter(":visible").length > 0 ? this.hide(this.settings.bg) : this.show(this.settings.bg)
        },
        show: function(c, d) {
            if (d) {
                var e = c.data("reveal-init");
                if (0 === c.parent("body").length) {
                    var f = c.wrap('<div style="display: none;" />').parent(), g = this.settings.rootElement || "body";
                    c.on("closed.fndtn.reveal.wrapped", function() {
                        c.detach().appendTo(f), c.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), c.detach().appendTo(g)
                }
                if (/pop/i.test(e.animation)) {
                    d.top = a(b).scrollTop() - c.data("offset") + "px";
                    var h = {
                        top: a(b).scrollTop() + c.data("css-top") + "px",
                        opacity: 1
                    };
                    return this.delay(function() {
                        return c.css(d).animate(h, e.animation_speed, "linear", function() {
                            this.locked=!1, c.trigger("opened")
                        }.bind(this)).addClass("open")
                    }.bind(this), e.animation_speed / 2)
                }
                if (/fade/i.test(e.animation)) {
                    var h = {
                        opacity: 1
                    };
                    return this.delay(function() {
                        return c.css(d).animate(h, e.animation_speed, "linear", function() {
                            this.locked=!1, c.trigger("opened")
                        }.bind(this)).addClass("open")
                    }.bind(this), e.animation_speed / 2)
                }
                return c.css(d).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened")
            }
            var e = this.settings;
            return /fade/i.test(e.animation) ? c.fadeIn(e.animation_speed / 2) : c.show()
        },
        hide: function(c, d) {
            if (d) {
                var e = c.data("reveal-init");
                if (/pop/i.test(e.animation)) {
                    var f = {
                        top: - a(b).scrollTop() - c.data("offset") + "px",
                        opacity: 0
                    };
                    return this.delay(function() {
                        return c.animate(f, e.animation_speed, "linear", function() {
                            this.locked=!1, c.css(d).trigger("closed")
                        }.bind(this)).removeClass("open")
                    }.bind(this), e.animation_speed / 2)
                }
                if (/fade/i.test(e.animation)) {
                    var f = {
                        opacity: 0
                    };
                    return this.delay(function() {
                        return c.animate(f, e.animation_speed, "linear", function() {
                            this.locked=!1, c.css(d).trigger("closed")
                        }.bind(this)).removeClass("open")
                    }.bind(this), e.animation_speed / 2)
                }
                return c.hide().css(d).removeClass("open").trigger("closed")
            }
            var e = this.settings;
            return /fade/i.test(e.animation) ? c.fadeOut(e.animation_speed / 2) : c.hide()
        },
        close_video: function() {
            var b = a(this).find(".flex-video"), c = b.find("iframe");
            c.length > 0 && (c.attr("data-src", c[0].src), c.attr("src", "about:blank"), b.hide())
        },
        open_video: function() {
            var b = a(this).find(".flex-video"), c = b.find("iframe");
            if (c.length > 0) {
                var e = c.attr("data-src");
                if ("string" == typeof e)
                    c[0].src = c.attr("data-src");
                else {
                    var f = c[0].src;
                    c[0].src = d, c[0].src = f
                }
                b.show()
            }
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10);
            return a.hide(), b
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, this, this.document), function(a) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.0.3",
        settings: {
            active_class: "active",
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            a(this.scope).off(".tab").on("click.fndtn.tab", "[data-tab] > dd > a", function(b) {
                b.preventDefault();
                var c = a(this).parent(), d = c.closest("[data-tab]"), e = a("#" + this.href.split("#")[1]), f = c.siblings(), g = d.data("tab-init");
                a(this).data("tab-content") && (e = a("#" + a(this).data("tab-content").split("#")[1])), c.addClass(g.active_class).trigger("opened"), f.removeClass(g.active_class), e.siblings().removeClass(g.active_class).end().addClass(g.active_class), g.callback(c), d.trigger("toggled", [c])
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, this, this.document), function(a) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.0.3",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            tip_template: function(a, b) {
                return '<span data-selector="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '">' + b + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this;
            Modernizr.touch ? a(this.scope).off(".tooltip").on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", "[data-tooltip]", function(c) {
                var d = a.extend({}, b.settings, b.data_options(a(this)));
                d.disable_for_touch || (c.preventDefault(), a(d.tooltip_class).hide(), b.showOrCreateTip(a(this)))
            }).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip", this.settings.tooltip_class, function(b) {
                b.preventDefault(), a(this).fadeOut(150)
            }) : a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip", "[data-tooltip]", function(c) {
                var d = a(this);
                /enter|over/i.test(c.type) ? b.showOrCreateTip(d) : ("mouseout" === c.type || "mouseleave" === c.type) && b.hide(d)
            })
        },
        showOrCreateTip: function(a) {
            var b = this.getTip(a);
            return b && b.length > 0 ? this.show(a) : this.create(a)
        },
        getTip: function(b) {
            var c = this.selector(b), d = null;
            return c && (d = a('span[data-selector="' + c + '"]' + this.settings.tooltip_class)), "object" == typeof d ? d : !1
        },
        selector: function(a) {
            var b = a.attr("id"), c = a.attr("data-tooltip") || a.attr("data-selector");
            return (b && b.length < 1 ||!b) && "string" != typeof c && (c = "tooltip" + Math.random().toString(36).substring(7), a.attr("data-selector", c)), b && b.length > 0 ? b : c
        },
        create: function(b) {
            var c = a(this.settings.tip_template(this.selector(b), a("<div></div>").html(b.attr("title")).html())), d = this.inheritable_classes(b);
            c.addClass(d).appendTo(this.settings.append_to), Modernizr.touch && c.append('<span class="tap-to-close">' + this.settings.touch_close_text + "</span>"), b.removeAttr("title").attr("title", ""), this.show(b)
        },
        reposition: function(b, c, d) {
            var e, f, g, h, i;
            if (c.css("visibility", "hidden").show(), e = b.data("width")
                , f = c.children(".nub"), g = f.outerHeight(), h = f.outerHeight(), c.css({
                width: e ? e: "auto"
            }), i = function(a, b, c, d, e) {
                return a.css({
                    top: b ? b: "auto",
                    bottom: d ? d: "auto",
                    left: e ? e: "auto",
                    right: c ? c: "auto"
                }).end()
            }, i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", b.offset().left), this.small())i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", 12.5, a(this.scope).width()), c.addClass("tip-override"), i(f, - g, "auto", "auto", b.offset().left);
            else {
                var j = b.offset().left;
                Foundation.rtl && (j = b.offset().left + b.offset().width - c.outerWidth()), i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", j), c.removeClass("tip-override"), d && d.indexOf("tip-top")>-1 ? i(c, b.offset().top - c.outerHeight()-10, "auto", "auto", j).removeClass("tip-override") : d && d.indexOf("tip-left")>-1 ? i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left - c.outerWidth() - g).removeClass("tip-override") : d && d.indexOf("tip-right")>-1 && i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left + b.outerWidth() + g).removeClass("tip-override")
            }
            c.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches
        },
        inheritable_classes: function(b) {
            var c = ["tip-top", "tip-left", "tip-bottom", "tip-right", "noradius"].concat(this.settings.additional_inheritable_classes), d = b.attr("class"), e = d ? a.map(d.split(" "), function(b) {
                return -1 !== a.inArray(b, c) ? b : void 0
            }).join(" "): "";
            return a.trim(e)
        },
        show: function(a) {
            var b = this.getTip(a);
            this.reposition(a, b, a.attr("class")), b.fadeIn(150)
        },
        hide: function(a) {
            var b = this.getTip(a);
            b.fadeOut(150)
        },
        reload: function() {
            var b = a(this);
            return b.data("fndtn-tooltips") ? b.foundationTooltips("destroy").foundationTooltips("init") : b.foundationTooltips("init")
        },
        off: function() {
            a(this.scope).off(".fndtn.tooltip"), a(this.settings.tooltip_class).each(function(b) {
                a("[data-tooltip]").get(b).attr("title", a(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, this, this.document), function(a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.0.3",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Back",
            is_hover: !0,
            mobile_show_parent_link: !1,
            scrolltop: !0
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "addCustomRule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), a("[data-topbar]", this.scope).each(function() {
                {
                    var b = a(this), c = b.data("topbar-init");
                    a("section", this), a("> ul", this).first()
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || d.hasClass(c.sticky_class) ? (e.settings.sticky_class = c.sticky_class, e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), c.assembled || e.assemble(b), c.is_hover ? a(".has-dropdown", b).addClass("not-click") : a(".has-dropdown", b).removeClass("not-click"), e.addCustomRule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), d.hasClass("fixed") && a("body").addClass("f-topbar-fixed")
            })
        },
        toggle: function(c) {
            var d = this;
            if (c)
                var e = a(c).closest("[data-topbar]");
            else 
                var e = a("[data-topbar]");
            var f = e.data("topbar-init"), g = a("section, .section", e);
            d.breakpoint() && (d.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), a("li.moved", g).removeClass("moved"), e.data("index", 0), e.toggleClass("expanded").css("height", "")), f.scrolltop ? e.hasClass("expanded") ? e.parent().hasClass("fixed") && (f.scrolltop ? (e.parent().removeClass("fixed"), e.addClass("fixed"), a("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : e.parent().removeClass("expanded")) : e.hasClass("fixed") && (e.parent().addClass("fixed"), e.removeClass("fixed"), a("body").addClass("f-topbar-fixed")) : (e.parent().hasClass(d.settings.sticky_class) && e.parent().addClass("fixed"), e.parent().hasClass("fixed") && (e.hasClass("expanded") ? (e.addClass("fixed"), e.parent().addClass("expanded"), a("body").addClass("f-topbar-fixed")) : (e.removeClass("fixed"), e.parent().removeClass("expanded"), d.update_sticky_positioning())))
        },
        timer: null,
        events: function() {
            var c = this;
            a(this.scope).off(".topbar").on("click.fndtn.topbar", "[data-topbar] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this)
            }).on("click.fndtn.topbar", "[data-topbar] li.has-dropdown", function(b) {
                var d = a(this), e = a(b.target), f = d.closest("[data-topbar]"), g = f.data("topbar-init");
                return e.data("revealId") ? (c.toggle(), void 0) : (c.breakpoint() || (!g.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), d.hasClass("hover") ? (d.removeClass("hover").find("li").removeClass("hover"), d.parents("li.hover").removeClass("hover")) : (d.addClass("hover"), "A" === e[0].nodeName && e.parent().hasClass("has-dropdown") && b.preventDefault())), void 0)
            }).on("click.fndtn.topbar", "[data-topbar] .has-dropdown>a", function(b) {
                if (c.breakpoint()) {
                    b.preventDefault();
                    var d = a(this), e = d.closest("[data-topbar]"), f = e.find("section, .section"), g = (d.next(".dropdown").outerHeight(), d.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: - (100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: - (100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", d.siblings("ul").outerHeight(!0) + e.data("height"))
                }
            }), a(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c)
            }, 50)).trigger("resize"), a("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar", function(b) {
                var c = a(b.target).closest("li").closest("li.hover");
                c.length > 0 || a("[data-topbar] li").removeClass("hover")
            }), a(this.scope).on("click.fndtn.topbar", "[data-topbar] .has-dropdown .back", function(b) {
                b.preventDefault();
                var d = a(this), e = d.closest("[data-topbar]"), f = e.find("section, .section"), g = (e.data("topbar-init"), d.closest("li.moved")), h = g.parent();
                e.data("index", e.data("index")-1), c.rtl ? (f.css({
                    right: - (100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: - (100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), setTimeout(function() {
                    g.removeClass("moved")
                }, 300)
            })
        },
        resize: function() {
            var b = this;
            a("[data-topbar]").each(function() {
                var d, e = a(this), f = (e.data("topbar-init"), e.parent("." + b.settings.sticky_class));
                if (!b.breakpoint()) {
                    var g = e.hasClass("expanded");
                    e.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && b.toggle(e)
                }
                f.length > 0 && (f.hasClass("fixed") ? (f.removeClass("fixed"), d = f.offset().top, a(c.body).hasClass("f-topbar-fixed") && (d -= e.data("height")), e.data("stickyoffset", d), f.addClass("fixed")) : (d = f.offset().top, e.data("stickyoffset", d)))
            })
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        assemble: function(b) {
            {
                var c = b.data("topbar-init"), d = a("section", b);
                a("> ul", b).first()
            }
            d.detach(), a(".has-dropdown>a", d).each(function() {
                var b = a(this), d = b.siblings(".dropdown"), e = b.attr("href");
                if (c.mobile_show_parent_link && e && e.length > 1)
                    var f = a('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' + e + '">' + b.text() + "</a></li>");
                else 
                    var f = a('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>');
                1 == c.custom_back_text ? a("h5>a", f).html(c.back_text) : a("h5>a", f).html("&laquo; " + b.html()), d.prepend(f)
            }), d.appendTo(b), this.sticky(), this.assembled(b)
        },
        assembled: function(b) {
            b.data("topbar-init", a.extend({}, b.data("topbar-init"), {
                assembled: !0
            }))
        },
        height: function(b) {
            var c = 0;
            return a("> li", b).each(function() {
                c += a(this).outerHeight(!0)
            }), c
        },
        sticky: function() {
            var c = (a(b), this);
            a(b).on("scroll", function() {
                c.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function() {
            var c = "." + this.settings.sticky_class, d = a(b);
            if (a(c).length > 0) {
                var e = this.settings.sticky_topbar.data("stickyoffset");
                a(c).hasClass("expanded") || (d.scrollTop() > e ? a(c).hasClass("fixed") || (a(c).addClass("fixed"), a("body").addClass("f-topbar-fixed")) : d.scrollTop() <= e && a(c).hasClass("fixed") && (a(c).removeClass("fixed"), a("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function() {
            a(this.scope).off(".fndtn.topbar"), a(b).off(".fndtn.topbar")
        },
        reflow: function() {}
    }
}(jQuery, this, this.document);
var components = [];
$("[data-search]").each(function() {
    {
        var a = $(this), b = a.text().trim(), c = a.data("search").trim();
        a.attr("href")
    }
    components.push({
        value: b,
        data: a.attr("href")
    }), "" !== c && $.each(c.split(","), function(b, c) {
        components.push({
            value: c,
            data: a.attr("href")
        })
    })
}), $("#autocomplete").autocomplete({
    lookup: components,
    autoSelectFirst: !0,
    onSelect: function(a) {
        window.location = a.data
    }
}), $("#interchangeMarkup").on("replace", function() {
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyASm3CwaK9qtcZEWYa-iQwHaGi3gcosAJc&sensor=false&callback=initializeMaps")
});
var currentUrl = window.location.href;
if (partial = currentUrl.split("docs")[1].split("/"), page = partial[partial.length-1], sidenav_links = $(".side-nav a")
    , sidenav_links.each(function() {
    var a = $(this);
    page == a.attr("href") && a.closest("li").addClass("active")
}), $("[data-forum-posts]").length > 0) {
    var cb = function(a) {
        var b = "";
        $.each(a, function(a, c) {
            b += JST["doc/templates/forum_post.html"](c)
        }), $("[data-forum-posts]").each(function() {
            $(this).html(b)
        })
    };
    $.ajax({
        url: "http://foundation.zurb.com/forum/api/v1/posts.json",
        dataType: "jsonp",
        success: cb
    })
}
