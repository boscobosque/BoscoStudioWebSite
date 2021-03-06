! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = "length" in t && t.length,
            i = J.type(t);
        return "function" === i || J.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function n(t, e, i) {
        if (J.isFunction(e)) return J.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        });
        if (e.nodeType) return J.grep(t, function(t) {
            return t === e !== i
        });
        if ("string" == typeof e) {
            if (at.test(e)) return J.filter(e, t, i);
            e = J.filter(e, t)
        }
        return J.grep(t, function(t) {
            return Y.call(e, t) >= 0 !== i
        })
    }

    function r(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = dt[t] = {};
        return J.each(t.match(ft) || [], function(t, i) {
            e[i] = !0
        }), e
    }

    function s() {
        Z.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), J.ready()
    }

    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = J.expando + a.uid++
    }

    function l(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(xt, "-$1").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : _t.test(i) ? J.parseJSON(i) : i
                } catch (r) {}
                yt.set(t, e, i)
            } else i = void 0;
        return i
    }

    function u() {
        return !0
    }

    function h() {
        return !1
    }

    function c() {
        try {
            return Z.activeElement
        } catch (t) {}
    }

    function p(t, e) {
        return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function f(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function d(t) {
        var e = Mt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function m(t, e) {
        for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
    }

    function g(t, e) {
        var i, n, r, o, s, a, l, u;
        if (1 === e.nodeType) {
            if (vt.hasData(t) && (o = vt.access(t), s = vt.set(e, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u)
                    for (i = 0, n = u[r].length; n > i; i++) J.event.add(e, r, u[r][i])
            }
            yt.hasData(t) && (a = yt.access(t), l = J.extend({}, a), yt.set(e, l))
        }
    }

    function v(t, e) {
        var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], i) : i
    }

    function y(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && St.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
    }

    function _(e, i) {
        var n, r = J(i.createElement(e)).appendTo(i.body),
            o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0])) ? n.display : J.css(r[0], "display");
        return r.detach(), o
    }

    function x(t) {
        var e = Z,
            i = Ft[t];
        return i || (i = _(t, e), "none" !== i && i || (qt = (qt || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = qt[0].contentDocument, e.write(), e.close(), i = _(t, e), qt.detach()), Ft[t] = i), i
    }

    function b(t, e, i) {
        var n, r, o, s, a = t.style;
        return i = i || Ht(t), i && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || J.contains(t.ownerDocument, t) || (s = J.style(t, e)), Bt.test(s) && Wt.test(e) && (n = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function w(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function T(t, e) {
        if (e in t) return e;
        for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Qt.length; r--;)
            if (e = Qt[r] + i, e in t) return e;
        return n
    }

    function S(t, e, i) {
        var n = Xt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function C(t, e, i, n, r) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === i && (s += J.css(t, i + wt[o], !0, r)), n ? ("content" === i && (s -= J.css(t, "padding" + wt[o], !0, r)), "margin" !== i && (s -= J.css(t, "border" + wt[o] + "Width", !0, r))) : (s += J.css(t, "padding" + wt[o], !0, r), "padding" !== i && (s += J.css(t, "border" + wt[o] + "Width", !0, r)));
        return s
    }

    function E(t, e, i) {
        var n = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Ht(t),
            s = "border-box" === J.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = b(t, e, o), (0 > r || null == r) && (r = t.style[e]), Bt.test(r)) return r;
            n = s && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + C(t, e, i || (s ? "border" : "content"), n, o) + "px"
    }

    function P(t, e) {
        for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (o[s] = vt.get(n, "olddisplay"), i = n.style.display, e ? (o[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && Tt(n) && (o[s] = vt.access(n, "olddisplay", x(n.nodeName)))) : (r = Tt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : J.css(n, "display"))));
        for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function k(t, e, i, n, r) {
        return new k.prototype.init(t, e, i, n, r)
    }

    function A() {
        return setTimeout(function() {
            Gt = void 0
        }), Gt = J.now()
    }

    function L(t, e) {
        var i, n = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = wt[n], r["margin" + i] = r["padding" + i] = t;
        return e && (r.opacity = r.width = t), r
    }

    function z(t, e, i) {
        for (var n, r = (ie[e] || []).concat(ie["*"]), o = 0, s = r.length; s > o; o++)
            if (n = r[o].call(i, e, t)) return n
    }

    function O(t, e, i) {
        var n, r, o, s, a, l, u, h, c = this,
            p = {},
            f = t.style,
            d = t.nodeType && Tt(t),
            m = vt.get(t, "fxshow");
        i.queue || (a = J._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [f.overflow, f.overflowX, f.overflowY], u = J.css(t, "display"), h = "none" === u ? vt.get(t, "olddisplay") || x(t.nodeName) : u, "inline" === h && "none" === J.css(t, "float") && (f.display = "inline-block")), i.overflow && (f.overflow = "hidden", c.always(function() {
            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
        }));
        for (n in e)
            if (r = e[n], Kt.exec(r)) {
                if (delete e[n], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n]) continue;
                    d = !0
                }
                p[n] = m && m[n] || J.style(t, n)
            } else u = void 0;
        if (J.isEmptyObject(p)) "inline" === ("none" === u ? x(t.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden" in m && (d = m.hidden) : m = vt.access(t, "fxshow", {}), o && (m.hidden = !d), d ? J(t).show() : c.done(function() {
                J(t).hide()
            }), c.done(function() {
                var e;
                vt.remove(t, "fxshow");
                for (e in p) J.style(t, e, p[e])
            });
            for (n in p) s = z(d ? m[n] : 0, n, c), n in m || (m[n] = s.start, d && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }
    }

    function R(t, e) {
        var i, n, r, o, s;
        for (i in t)
            if (n = J.camelCase(i), r = e[n], o = t[i], J.isArray(o) && (r = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), s = J.cssHooks[n], s && "expand" in s) {
                o = s.expand(o), delete t[n];
                for (i in o) i in t || (t[i] = o[i], e[i] = r)
            } else e[n] = r
    }

    function D(t, e, i) {
        var n, r, o = 0,
            s = ee.length,
            a = J.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var e = Gt || A(), i = Math.max(0, u.startTime + u.duration - e), n = i / u.duration || 0, o = 1 - n, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                return a.notifyWith(t, [u, o, i]), 1 > o && l ? i : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: J.extend({}, e),
                opts: J.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Gt || A(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = J.Tween(t, u.opts, e, i, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n > i; i++) u.tweens[i].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            h = u.props;
        for (R(h, u.opts.specialEasing); s > o; o++)
            if (n = ee[o].call(u, t, h, u.opts)) return n;
        return J.map(h, z, u), J.isFunction(u.opts.start) && u.opts.start.call(t, u), J.fx.timer(J.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function I(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, r = 0,
                o = e.toLowerCase().match(ft) || [];
            if (J.isFunction(i))
                for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function M(t, e, i, n) {
        function r(a) {
            var l;
            return o[a] = !0, J.each(t[a] || [], function(t, a) {
                var u = a(e, i, n);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = t === _e;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function N(t, e) {
        var i, n, r = J.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && J.extend(!0, t, n), t
    }

    function j(t, e, i) {
        for (var n, r, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
        if (n)
            for (r in a)
                if (a[r] && a[r].test(n)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in i) o = l[0];
        else {
            for (r in i) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
    }

    function q(t, e, i, n) {
        var r, o, s, a, l, u = {},
            h = t.dataTypes.slice();
        if (h[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (o = h.shift(); o;)
            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (r in u)
                    if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], h.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (c) {
                    return {
                        state: "parsererror",
                        error: s ? c : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function F(t, e, i, n) {
        var r;
        if (J.isArray(e)) J.each(e, function(e, r) {
            i || Se.test(t) ? n(t, r) : F(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n)
        });
        else if (i || "object" !== J.type(e)) n(t, e);
        else
            for (r in e) F(t + "[" + r + "]", e[r], i, n)
    }

    function W(t) {
        return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var B = [],
        H = B.slice,
        U = B.concat,
        X = B.push,
        Y = B.indexOf,
        V = {},
        $ = V.toString,
        Q = V.hasOwnProperty,
        G = {},
        Z = t.document,
        K = "2.1.4",
        J = function(t, e) {
            return new J.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        it = /-([\da-z])/gi,
        nt = function(t, e) {
            return e.toUpperCase()
        };
    J.fn = J.prototype = {
        jquery: K,
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return H.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : H.call(this)
        },
        pushStack: function(t) {
            var e = J.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return J.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(J.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(H.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (0 > t ? e : 0);
            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: B.sort,
        splice: B.splice
    }, J.extend = J.fn.extend = function() {
        var t, e, i, n, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || J.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) i = s[e], n = t[e], s !== n && (u && n && (J.isPlainObject(n) || (r = J.isArray(n))) ? (r ? (r = !1, o = i && J.isArray(i) ? i : []) : o = i && J.isPlainObject(i) ? i : {}, s[e] = J.extend(u, o, n)) : void 0 !== n && (s[e] = n));
        return s
    }, J.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === J.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !J.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(t) {
            return "object" !== J.type(t) || t.nodeType || J.isWindow(t) ? !1 : t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? V[$.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, i = eval;
            t = J.trim(t), t && (1 === t.indexOf("use strict") ? (e = Z.createElement("script"), e.text = t, Z.head.appendChild(e).parentNode.removeChild(e)) : i(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(it, nt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var r, o = 0,
                s = t.length,
                a = i(t);
            if (n) {
                if (a)
                    for (; s > o && (r = e.apply(t[o], n), r !== !1); o++);
                else
                    for (o in t)
                        if (r = e.apply(t[o], n), r === !1) break
            } else if (a)
                for (; s > o && (r = e.call(t[o], o, t[o]), r !== !1); o++);
            else
                for (o in t)
                    if (r = e.call(t[o], o, t[o]), r === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : X.call(n, t)), n
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : Y.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
            return t.length = r, t
        },
        grep: function(t, e, i) {
            for (var n, r = [], o = 0, s = t.length, a = !i; s > o; o++) n = !e(t[o], o), n !== a && r.push(t[o]);
            return r
        },
        map: function(t, e, n) {
            var r, o = 0,
                s = t.length,
                a = i(t),
                l = [];
            if (a)
                for (; s > o; o++) r = e(t[o], o, n), null != r && l.push(r);
            else
                for (o in t) r = e(t[o], o, n), null != r && l.push(r);
            return U.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, r;
            return "string" == typeof e && (i = t[e], e = t, t = i), J.isFunction(t) ? (n = H.call(arguments, 2), r = function() {
                return t.apply(e || this, n.concat(H.call(arguments)))
            }, r.guid = t.guid = t.guid || J.guid++, r) : void 0
        },
        now: Date.now,
        support: G
    }), J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        V["[object " + e + "]"] = e.toLowerCase()
    });
    var rt = function(t) {
        function e(t, e, i, n) {
            var r, o, s, a, l, u, c, f, d, m;
            if ((e ? e.ownerDocument || e : F) !== O && z(e), e = e || O, i = i || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
            if (!n && D) {
                if (11 !== a && (r = yt.exec(t)))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s), !o || !o.parentNode) return i;
                            if (o.id === s) return i.push(o), i
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && j(e, o) && o.id === s) return i.push(o), i
                    } else {
                        if (r[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                        if ((s = r[3]) && b.getElementsByClassName) return K.apply(i, e.getElementsByClassName(s)), i
                    }
                if (b.qsa && (!I || !I.test(t))) {
                    if (f = c = q, d = e, m = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = C(t), (c = e.getAttribute("id")) ? f = c.replace(xt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
                        d = _t.test(t) && h(e.parentNode) || e, m = u.join(",")
                    }
                    if (m) try {
                        return K.apply(i, d.querySelectorAll(m)), i
                    } catch (g) {} finally {
                        c || e.removeAttribute("id")
                    }
                }
            }
            return P(t.replace(lt, "$1"), e, i, n)
        }

        function i() {
            function t(i, n) {
                return e.push(i + " ") > w.cacheLength && delete t[e.shift()], t[i + " "] = n
            }
            var e = [];
            return t
        }

        function n(t) {
            return t[q] = !0, t
        }

        function r(t) {
            var e = O.createElement("div");
            try {
                return !!t(e)
            } catch (i) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
        }

        function s(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return "input" === i && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function u(t) {
            return n(function(e) {
                return e = +e, n(function(i, n) {
                    for (var r, o = t([], i.length, e), s = o.length; s--;) i[r = o[s]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function c() {}

        function p(t) {
            for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
            return n
        }

        function f(t, e, i) {
            var n = e.dir,
                r = i && "parentNode" === n,
                o = B++;
            return e.first ? function(e, i, o) {
                for (; e = e[n];)
                    if (1 === e.nodeType || r) return t(e, i, o)
            } : function(e, i, s) {
                var a, l, u = [W, o];
                if (s) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || r) && t(e, i, s)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) {
                            if (l = e[q] || (e[q] = {}), (a = l[n]) && a[0] === W && a[1] === o) return u[2] = a[2];
                            if (l[n] = u, u[2] = t(e, i, s)) return !0
                        }
            }
        }

        function d(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var r = t.length; r--;)
                    if (!t[r](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function m(t, i, n) {
            for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
            return n
        }

        function g(t, e, i, n, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!i || i(o, n, r)) && (s.push(o), u && e.push(a));
            return s
        }

        function v(t, e, i, r, o, s) {
            return r && !r[q] && (r = v(r)), o && !o[q] && (o = v(o, s)), n(function(n, s, a, l) {
                var u, h, c, p = [],
                    f = [],
                    d = s.length,
                    v = n || m(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !n && e ? v : g(v, p, t, a, l),
                    _ = i ? o || (n ? t : d || r) ? [] : s : y;
                if (i && i(y, _, a, l), r)
                    for (u = g(_, f), r(u, [], a, l), h = u.length; h--;)(c = u[h]) && (_[f[h]] = !(y[f[h]] = c));
                if (n) {
                    if (o || t) {
                        if (o) {
                            for (u = [], h = _.length; h--;)(c = _[h]) && u.push(y[h] = c);
                            o(null, _ = [], u, l)
                        }
                        for (h = _.length; h--;)(c = _[h]) && (u = o ? tt(n, c) : p[h]) > -1 && (n[u] = !(s[u] = c))
                    }
                } else _ = g(_ === s ? _.splice(d, _.length) : _), o ? o(null, s, _, l) : K.apply(s, _)
            })
        }

        function y(t) {
            for (var e, i, n, r = t.length, o = w.relative[t[0].type], s = o || w.relative[" "], a = o ? 1 : 0, l = f(function(t) {
                    return t === e
                }, s, !0), u = f(function(t) {
                    return tt(e, t) > -1
                }, s, !0), h = [function(t, i, n) {
                    var r = !o && (n || i !== k) || ((e = i).nodeType ? l(t, i, n) : u(t, i, n));
                    return e = null, r
                }]; r > a; a++)
                if (i = w.relative[t[a].type]) h = [f(d(h), i)];
                else {
                    if (i = w.filter[t[a].type].apply(null, t[a].matches), i[q]) {
                        for (n = ++a; r > n && !w.relative[t[n].type]; n++);
                        return v(a > 1 && d(h), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), i, n > a && y(t.slice(a, n)), r > n && y(t = t.slice(n)), r > n && p(t))
                    }
                    h.push(i)
                }
            return d(h)
        }

        function _(t, i) {
            var r = i.length > 0,
                o = t.length > 0,
                s = function(n, s, a, l, u) {
                    var h, c, p, f = 0,
                        d = "0",
                        m = n && [],
                        v = [],
                        y = k,
                        _ = n || o && w.find.TAG("*", u),
                        x = W += null == y ? 1 : Math.random() || .1,
                        b = _.length;
                    for (u && (k = s !== O && s); d !== b && null != (h = _[d]); d++) {
                        if (o && h) {
                            for (c = 0; p = t[c++];)
                                if (p(h, s, a)) {
                                    l.push(h);
                                    break
                                }
                            u && (W = x)
                        }
                        r && ((h = !p && h) && f--, n && m.push(h))
                    }
                    if (f += d, r && d !== f) {
                        for (c = 0; p = i[c++];) p(m, v, s, a);
                        if (n) {
                            if (f > 0)
                                for (; d--;) m[d] || v[d] || (v[d] = G.call(l));
                            v = g(v)
                        }
                        K.apply(l, v), u && !n && v.length > 0 && f + i.length > 1 && e.uniqueSort(l)
                    }
                    return u && (W = x, k = y), m
                };
            return r ? n(s) : s
        }
        var x, b, w, T, S, C, E, P, k, A, L, z, O, R, D, I, M, N, j, q = "sizzle" + 1 * new Date,
            F = t.document,
            W = 0,
            B = 0,
            H = i(),
            U = i(),
            X = i(),
            Y = function(t, e) {
                return t === e && (L = !0), 0
            },
            V = 1 << 31,
            $ = {}.hasOwnProperty,
            Q = [],
            G = Q.pop,
            Z = Q.push,
            K = Q.push,
            J = Q.slice,
            tt = function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = nt.replace("w", "w#"),
            ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + it + "*\\]",
            st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
            at = new RegExp(it + "+", "g"),
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ut = new RegExp("^" + it + "*," + it + "*"),
            ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ct = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            pt = new RegExp(st),
            ft = new RegExp("^" + rt + "$"),
            dt = {
                ID: new RegExp("^#(" + nt + ")"),
                CLASS: new RegExp("^\\.(" + nt + ")"),
                TAG: new RegExp("^(" + nt.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + ot),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _t = /[+~]/,
            xt = /'|\\/g,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            wt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            Tt = function() {
                z()
            };
        try {
            K.apply(Q = J.call(F.childNodes), F.childNodes), Q[F.childNodes.length].nodeType
        } catch (St) {
            K = {
                apply: Q.length ? function(t, e) {
                    Z.apply(t, J.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }
        b = e.support = {}, S = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, z = e.setDocument = function(t) {
            var e, i, n = t ? t.ownerDocument || t : F;
            return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, R = n.documentElement, i = n.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", Tt, !1) : i.attachEvent && i.attachEvent("onunload", Tt)), D = !S(n), b.attributes = r(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), b.getElementsByTagName = r(function(t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), b.getElementsByClassName = vt.test(n.getElementsByClassName), b.getById = r(function(t) {
                return R.appendChild(t).id = q, !n.getElementsByName || !n.getElementsByName(q).length
            }), b.getById ? (w.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && D) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : []
                }
            }, w.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete w.find.ID, w.filter.ID = function(t) {
                var e = t.replace(bt, wt);
                return function(t) {
                    var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return i && i.value === e
                }
            }), w.find.TAG = b.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var i, n = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; i = o[r++];) 1 === i.nodeType && n.push(i);
                    return n
                }
                return o
            }, w.find.CLASS = b.getElementsByClassName && function(t, e) {
                return D ? e.getElementsByClassName(t) : void 0
            }, M = [], I = [], (b.qsa = vt.test(n.querySelectorAll)) && (r(function(t) {
                R.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || I.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || I.push("~="), t.querySelectorAll(":checked").length || I.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || I.push(".#.+[+~]")
            }), r(function(t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && I.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), I.push(",.*:")
            })), (b.matchesSelector = vt.test(N = R.matches || R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && r(function(t) {
                b.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), M.push("!=", st)
            }), I = I.length && new RegExp(I.join("|")), M = M.length && new RegExp(M.join("|")), e = vt.test(R.compareDocumentPosition), j = e || vt.test(R.contains) ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function(t, e) {
                if (t === e) return L = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === F && j(F, t) ? -1 : e === n || e.ownerDocument === F && j(F, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & i ? -1 : 1)
            } : function(t, e) {
                if (t === e) return L = !0, 0;
                var i, r = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    u = [e];
                if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                if (o === a) return s(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (; l[r] === u[r];) r++;
                return r ? s(l[r], u[r]) : l[r] === F ? -1 : u[r] === F ? 1 : 0
            }, n) : O
        }, e.matches = function(t, i) {
            return e(t, null, null, i)
        }, e.matchesSelector = function(t, i) {
            if ((t.ownerDocument || t) !== O && z(t), i = i.replace(ct, "='$1']"), !(!b.matchesSelector || !D || M && M.test(i) || I && I.test(i))) try {
                var n = N.call(t, i);
                if (n || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
            } catch (r) {}
            return e(i, O, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== O && z(t), j(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== O && z(t);
            var i = w.attrHandle[e.toLowerCase()],
                n = i && $.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
            return void 0 !== n ? n : b.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, i = [],
                n = 0,
                r = 0;
            if (L = !b.detectDuplicates, A = !b.sortStable && t.slice(0), t.sort(Y), L) {
                for (; e = t[r++];) e === t[r] && (n = i.push(r));
                for (; n--;) t.splice(i[n], 1)
            }
            return A = null, t
        }, T = e.getText = function(t) {
            var e, i = "",
                n = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) i += T(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[n++];) i += T(e);
            return i
        }, w = e.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: dt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(bt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, i = !t[6] && t[2];
                    return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && pt.test(i) && (e = C(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(bt, wt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = H[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && H(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, i, n) {
                    return function(r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o.replace(at, " ") + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(t, e, i, n, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === n && 0 === r ? function(t) {
                        return !!t.parentNode
                    } : function(e, i, l) {
                        var u, h, c, p, f, d, m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (c = e; c = c[m];)
                                        if (a ? c.nodeName.toLowerCase() === v : 1 === c.nodeType) return !1;
                                    d = m = "only" === t && !d && "nextSibling"
                                }
                                return !0
                            }
                            if (d = [s ? g.firstChild : g.lastChild], s && y) {
                                for (h = g[q] || (g[q] = {}), u = h[t] || [], f = u[0] === W && u[1], p = u[0] === W && u[2], c = f && g.childNodes[f]; c = ++f && c && c[m] || (p = f = 0) || d.pop();)
                                    if (1 === c.nodeType && ++p && c === e) {
                                        h[t] = [W, f, p];
                                        break
                                    }
                            } else if (y && (u = (e[q] || (e[q] = {}))[t]) && u[0] === W) p = u[1];
                            else
                                for (;
                                    (c = ++f && c && c[m] || (p = f = 0) || d.pop()) && ((a ? c.nodeName.toLowerCase() !== v : 1 !== c.nodeType) || !++p || (y && ((c[q] || (c[q] = {}))[t] = [W, p]), c !== e)););
                            return p -= r, p === n || p % n === 0 && p / n >= 0
                        }
                    }
                },
                PSEUDO: function(t, i) {
                    var r, o = w.pseudos[t] || w.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[q] ? o(i) : o.length > 1 ? (r = [t, t, "", i], w.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                        for (var n, r = o(t, i), s = r.length; s--;) n = tt(t, r[s]), t[n] = !(e[n] = r[s])
                    }) : function(t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: n(function(t) {
                    var e = [],
                        i = [],
                        r = E(t.replace(lt, "$1"));
                    return r[q] ? n(function(t, e, i, n) {
                        for (var o, s = r(t, null, n, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function(t, n, o) {
                        return e[0] = t, r(e, null, o, i), e[0] = null, !i.pop()
                    }
                }),
                has: n(function(t) {
                    return function(i) {
                        return e(t, i).length > 0
                    }
                }),
                contains: n(function(t) {
                    return t = t.replace(bt, wt),
                        function(e) {
                            return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                        }
                }),
                lang: n(function(t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, wt).toLowerCase(),
                        function(e) {
                            var i;
                            do
                                if (i = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var i = t.location && t.location.hash;
                    return i && i.slice(1) === e.id
                },
                root: function(t) {
                    return t === R
                },
                focus: function(t) {
                    return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !w.pseudos.empty(t)
                },
                header: function(t) {
                    return gt.test(t.nodeName)
                },
                input: function(t) {
                    return mt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(t, e) {
                    return [e - 1]
                }),
                eq: u(function(t, e, i) {
                    return [0 > i ? i + e : i]
                }),
                even: u(function(t, e) {
                    for (var i = 0; e > i; i += 2) t.push(i);
                    return t
                }),
                odd: u(function(t, e) {
                    for (var i = 1; e > i; i += 2) t.push(i);
                    return t
                }),
                lt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                    return t
                }),
                gt: u(function(t, e, i) {
                    for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                    return t
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[x] = a(x);
        for (x in {
                submit: !0,
                reset: !0
            }) w.pseudos[x] = l(x);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, C = e.tokenize = function(t, i) {
            var n, r, o, s, a, l, u, h = U[t + " "];
            if (h) return i ? 0 : h.slice(0);
            for (a = t, l = [], u = w.preFilter; a;) {
                (!n || (r = ut.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = ht.exec(a)) && (n = r.shift(), o.push({
                    value: n,
                    type: r[0].replace(lt, " ")
                }), a = a.slice(n.length));
                for (s in w.filter) !(r = dt[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                    value: n,
                    type: s,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return i ? a.length : a ? e.error(t) : U(t, l).slice(0)
        }, E = e.compile = function(t, e) {
            var i, n = [],
                r = [],
                o = X[t + " "];
            if (!o) {
                for (e || (e = C(t)), i = e.length; i--;) o = y(e[i]), o[q] ? n.push(o) : r.push(o);
                o = X(t, _(r, n)), o.selector = t
            }
            return o
        }, P = e.select = function(t, e, i, n) {
            var r, o, s, a, l, u = "function" == typeof t && t,
                c = !n && C(t = u.selector || t);
            if (i = i || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && D && w.relative[o[1].type]) {
                    if (e = (w.find.ID(s.matches[0].replace(bt, wt), e) || [])[0], !e) return i;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !w.relative[a = s.type]);)
                    if ((l = w.find[a]) && (n = l(s.matches[0].replace(bt, wt), _t.test(o[0].type) && h(e.parentNode) || e))) {
                        if (o.splice(r, 1), t = n.length && p(o), !t) return K.apply(i, n), i;
                        break
                    }
            }
            return (u || E(t, c))(n, e, !D, i, _t.test(t) && h(e.parentNode) || e), i
        }, b.sortStable = q.split("").sort(Y).join("") === q, b.detectDuplicates = !!L, z(), b.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(O.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, i) {
            var n;
            return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), e
    }(t);
    J.find = rt, J.expr = rt.selectors, J.expr[":"] = J.expr.pseudos, J.unique = rt.uniqueSort, J.text = rt.getText, J.isXMLDoc = rt.isXML, J.contains = rt.contains;
    var ot = J.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    J.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? J.find.matchesSelector(n, t) ? [n] : [] : J.find.matches(t, J.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, J.fn.extend({
        find: function(t) {
            var e, i = this.length,
                n = [],
                r = this;

            if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                for (e = 0; i > e; e++)
                    if (J.contains(r[e], this)) return !0
            }));
            for (e = 0; i > e; e++) J.find(t, r[e], n);
            return n = this.pushStack(i > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(n(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(n(this, t || [], !0))
        },
        is: function(t) {
            return !!n(this, "string" == typeof t && ot.test(t) ? J(t) : t || [], !1).length
        }
    });
    var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ht = J.fn.init = function(t, e) {
            var i, n;
            if (!t) return this;
            if ("string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), st.test(i[1]) && J.isPlainObject(e))
                        for (i in e) J.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return n = Z.getElementById(i[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = Z, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? "undefined" != typeof lt.ready ? lt.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        };
    ht.prototype = J.fn, lt = J(Z);
    var ct = /^(?:parents|prev(?:Until|All))/,
        pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    J.extend({
        dir: function(t, e, i) {
            for (var n = [], r = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && J(t).is(i)) break;
                    n.push(t)
                }
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    }), J.fn.extend({
        has: function(t) {
            var e = J(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; i > t; t++)
                    if (J.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var i, n = 0, r = this.length, o = [], s = ot.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== e; i = i.parentNode)
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) {
                        o.push(i);
                        break
                    }
            return this.pushStack(o.length > 1 ? J.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? Y.call(J(t), this[0]) : Y.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(J.unique(J.merge(this.get(), J(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), J.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return J.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return J.dir(t, "parentNode", i)
        },
        next: function(t) {
            return r(t, "nextSibling")
        },
        prev: function(t) {
            return r(t, "previousSibling")
        },
        nextAll: function(t) {
            return J.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return J.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return J.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return J.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return J.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return J.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || J.merge([], t.childNodes)
        }
    }, function(t, e) {
        J.fn[t] = function(i, n) {
            var r = J.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = J.filter(n, r)), this.length > 1 && (pt[t] || J.unique(r), ct.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var ft = /\S+/g,
        dt = {};
    J.Callbacks = function(t) {
        t = "string" == typeof t ? dt[t] || o(t) : J.extend({}, t);
        var e, i, n, r, s, a, l = [],
            u = !t.once && [],
            h = function(o) {
                for (e = t.memory && o, i = !0, a = r || 0, r = 0, s = l.length, n = !0; l && s > a; a++)
                    if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                n = !1, l && (u ? u.length && h(u.shift()) : e ? l = [] : c.disable())
            },
            c = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function o(e) {
                            J.each(e, function(e, i) {
                                var n = J.type(i);
                                "function" === n ? t.unique && c.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                            })
                        }(arguments), n ? s = l.length : e && (r = i, h(e))
                    }
                    return this
                },
                remove: function() {
                    return l && J.each(arguments, function(t, e) {
                        for (var i;
                            (i = J.inArray(e, l, i)) > -1;) l.splice(i, 1), n && (s >= i && s--, a >= i && a--)
                    }), this
                },
                has: function(t) {
                    return t ? J.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], s = 0, this
                },
                disable: function() {
                    return l = u = e = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = void 0, e || c.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, e) {
                    return !l || i && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], n ? u.push(e) : h(e)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return c
    }, J.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", J.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return J.Deferred(function(i) {
                            J.each(e, function(e, o) {
                                var s = J.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && J.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? J.extend(t, n) : n
                    }
                },
                r = {};
            return n.pipe = n.then, J.each(e, function(t, o) {
                var s = o[2],
                    a = o[3];
                n[o[1]] = s.add, a && s.add(function() {
                    i = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? n : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), n.promise(r), t && t.call(r, r), r
        },
        when: function(t) {
            var e, i, n, r = 0,
                o = H.call(arguments),
                s = o.length,
                a = 1 !== s || t && J.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : J.Deferred(),
                u = function(t, i, n) {
                    return function(r) {
                        i[t] = this, n[t] = arguments.length > 1 ? H.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (s > 1)
                for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(u(r, n, o)).fail(l.reject).progress(u(r, i, e)) : --a;
            return a || l.resolveWith(n, o), l.promise()
        }
    });
    var mt;
    J.fn.ready = function(t) {
        return J.ready.promise().done(t), this
    }, J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? J.readyWait++ : J.ready(!0)
        },
        ready: function(t) {
            (t === !0 ? --J.readyWait : J.isReady) || (J.isReady = !0, t !== !0 && --J.readyWait > 0 || (mt.resolveWith(Z, [J]), J.fn.triggerHandler && (J(Z).triggerHandler("ready"), J(Z).off("ready"))))
        }
    }), J.ready.promise = function(e) {
        return mt || (mt = J.Deferred(), "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), mt.promise(e)
    }, J.ready.promise();
    var gt = J.access = function(t, e, i, n, r, o, s) {
        var a = 0,
            l = t.length,
            u = null == i;
        if ("object" === J.type(i)) {
            r = !0;
            for (a in i) J.access(t, e, a, i[a], !0, o, s)
        } else if (void 0 !== n && (r = !0, J.isFunction(n) || (s = !0), u && (s ? (e.call(t, n), e = null) : (u = e, e = function(t, e, i) {
                return u.call(J(t), i)
            })), e))
            for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
        return r ? t : u ? e.call(t) : l ? e(t[0], i) : o
    };
    J.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, a.uid = 1, a.accepts = J.acceptData, a.prototype = {
        key: function(t) {
            if (!a.accepts(t)) return 0;
            var e = {},
                i = t[this.expando];
            if (!i) {
                i = a.uid++;
                try {
                    e[this.expando] = {
                        value: i
                    }, Object.defineProperties(t, e)
                } catch (n) {
                    e[this.expando] = i, J.extend(t, e)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(t, e, i) {
            var n, r = this.key(t),
                o = this.cache[r];
            if ("string" == typeof e) o[e] = i;
            else if (J.isEmptyObject(o)) J.extend(this.cache[r], e);
            else
                for (n in e) o[n] = e[n];
            return o
        },
        get: function(t, e) {
            var i = this.cache[this.key(t)];
            return void 0 === e ? i : i[e]
        },
        access: function(t, e, i) {
            var n;
            return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, J.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n, r, o = this.key(t),
                s = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                J.isArray(e) ? n = e.concat(e.map(J.camelCase)) : (r = J.camelCase(e), e in s ? n = [e, r] : (n = r, n = n in s ? [n] : n.match(ft) || [])), i = n.length;
                for (; i--;) delete s[n[i]]
            }
        },
        hasData: function(t) {
            return !J.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var vt = new a,
        yt = new a,
        _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        xt = /([A-Z])/g;
    J.extend({
        hasData: function(t) {
            return yt.hasData(t) || vt.hasData(t)
        },
        data: function(t, e, i) {
            return yt.access(t, e, i)
        },
        removeData: function(t, e) {
            yt.remove(t, e)
        },
        _data: function(t, e, i) {
            return vt.access(t, e, i)
        },
        _removeData: function(t, e) {
            vt.remove(t, e)
        }
    }), J.fn.extend({
        data: function(t, e) {
            var i, n, r, o = this[0],
                s = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (r = yt.get(o), 1 === o.nodeType && !vt.get(o, "hasDataAttrs"))) {
                    for (i = s.length; i--;) s[i] && (n = s[i].name, 0 === n.indexOf("data-") && (n = J.camelCase(n.slice(5)), l(o, n, r[n])));
                    vt.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                yt.set(this, t)
            }) : gt(this, function(e) {
                var i, n = J.camelCase(t);
                if (o && void 0 === e) {
                    if (i = yt.get(o, t), void 0 !== i) return i;
                    if (i = yt.get(o, n), void 0 !== i) return i;
                    if (i = l(o, n, void 0), void 0 !== i) return i
                } else this.each(function() {
                    var i = yt.get(this, n);
                    yt.set(this, n, e), -1 !== t.indexOf("-") && void 0 !== i && yt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                yt.remove(this, t)
            })
        }
    }), J.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || J.isArray(i) ? n = vt.access(t, e, J.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = J.queue(t, e),
                n = i.length,
                r = i.shift(),
                o = J._queueHooks(t, e),
                s = function() {
                    J.dequeue(t, e)
                };
            "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return vt.get(t, i) || vt.access(t, i, {
                empty: J.Callbacks("once memory").add(function() {
                    vt.remove(t, [e + "queue", i])
                })
            })
        }
    }), J.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = J.queue(this, t, e);
                J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                J.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                r = J.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --n || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) i = vt.get(o[s], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wt = ["Top", "Right", "Bottom", "Left"],
        Tt = function(t, e) {
            return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
        },
        St = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = Z.createDocumentFragment(),
            e = t.appendChild(Z.createElement("div")),
            i = Z.createElement("input");
        i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ct = "undefined";
    G.focusinBubbles = "onfocusin" in t;
    var Et = /^key/,
        Pt = /^(?:mouse|pointer|contextmenu)|click/,
        kt = /^(?:focusinfocus|focusoutblur)$/,
        At = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(t, e, i, n, r) {
            var o, s, a, l, u, h, c, p, f, d, m, g = vt.get(t);
            if (g)
                for (i.handler && (o = i, i = o.handler, r = o.selector), i.guid || (i.guid = J.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                        return typeof J !== Ct && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(ft) || [""], u = e.length; u--;) a = At.exec(e[u]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f && (c = J.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = J.event.special[f] || {}, h = J.extend({
                    type: f,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: r,
                    needsContext: r && J.expr.match.needsContext.test(r),
                    namespace: d.join(".")
                }, o), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, c.setup && c.setup.call(t, n, d, s) !== !1 || t.addEventListener && t.addEventListener(f, s, !1)), c.add && (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, h) : p.push(h), J.event.global[f] = !0)
        },
        remove: function(t, e, i, n, r) {
            var o, s, a, l, u, h, c, p, f, d, m, g = vt.hasData(t) && vt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(ft) || [""], u = e.length; u--;)
                    if (a = At.exec(e[u]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
                        for (c = J.event.special[f] || {}, f = (n ? c.delegateType : c.bindType) || f, p = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) h = p[o], !r && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (p.splice(o, 1), h.selector && p.delegateCount--, c.remove && c.remove.call(t, h));
                        s && !p.length && (c.teardown && c.teardown.call(t, d, g.handle) !== !1 || J.removeEvent(t, f, g.handle), delete l[f])
                    } else
                        for (f in l) J.event.remove(t, f + e[u], i, n, !0);
                J.isEmptyObject(l) && (delete g.handle, vt.remove(t, "events"))
            }
        },
        trigger: function(e, i, n, r) {
            var o, s, a, l, u, h, c, p = [n || Z],
                f = Q.call(e, "type") ? e.type : e,
                d = Q.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = n = n || Z, 3 !== n.nodeType && 8 !== n.nodeType && !kt.test(f + J.event.triggered) && (f.indexOf(".") >= 0 && (d = f.split("."), f = d.shift(), d.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : J.makeArray(i, [e]), c = J.event.special[f] || {}, r || !c.trigger || c.trigger.apply(n, i) !== !1)) {
                if (!r && !c.noBubble && !J.isWindow(n)) {
                    for (l = c.delegateType || f, kt.test(l + f) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (n.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0;
                    (s = p[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : c.bindType || f, h = (vt.get(s, "events") || {})[e.type] && vt.get(s, "handle"), h && h.apply(s, i), h = u && s[u], h && h.apply && J.acceptData(s) && (e.result = h.apply(s, i), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || c._default && c._default.apply(p.pop(), i) !== !1 || !J.acceptData(n) || u && J.isFunction(n[f]) && !J.isWindow(n) && (a = n[u], a && (n[u] = null), J.event.triggered = f, n[f](), J.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        dispatch: function(t) {
            t = J.event.fix(t);
            var e, i, n, r, o, s = [],
                a = H.call(arguments),
                l = (vt.get(this, "events") || {})[t.type] || [],
                u = J.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (s = J.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, i = 0;
                        (o = r.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, n = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var i, n, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l !== this; l = l.parentNode || this)
                    if (l.disabled !== !0 || "click" !== t.type) {
                        for (n = [], i = 0; a > i; i++) o = e[i], r = o.selector + " ", void 0 === n[r] && (n[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length), n[r] && n.push(o);
                        n.length && s.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var i, n, r, o = e.button;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Z, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[J.expando]) return t;
            var e, i, n, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Pt.test(r) ? this.mouseHooks : Et.test(r) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new J.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
            return t.target || (t.target = Z), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== c() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === c() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return J.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, i, n) {
            var r = J.extend(new J.Event, i, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? J.event.trigger(r, null, e) : J.event.dispatch.call(e, r), r.isDefaultPrevented() && i.preventDefault()
        }
    }, J.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i, !1)
    }, J.Event = function(t, e) {
        return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? u : h) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
    }, J.Event.prototype = {
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        J.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return (!r || r !== n && !J.contains(n, r)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), G.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            J.event.simulate(e, t.target, J.event.fix(t), !0)
        };
        J.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    r = vt.access(n, e);
                r || n.addEventListener(t, i, !0), vt.access(n, e, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    r = vt.access(n, e) - 1;
                r ? vt.access(n, e, r) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
            }
        }
    }), J.fn.extend({
        on: function(t, e, i, n, r) {
            var o, s;
            if ("object" == typeof t) {
                "string" != typeof e && (i = i || e, e = void 0);
                for (s in t) this.on(s, e, i, t[s], r);
                return this
            }
            if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = h;
            else if (!n) return this;
            return 1 === r && (o = n, n = function(t) {
                return J().off(t), o.apply(this, arguments)
            }, n.guid = o.guid || (o.guid = J.guid++)), this.each(function() {
                J.event.add(this, t, n, i, e)
            })
        },
        one: function(t, e, i, n) {
            return this.on(t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, r;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = h), this.each(function() {
                J.event.remove(this, t, i, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                J.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? J.event.trigger(t, e, i, !0) : void 0
        }
    });
    var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        zt = /<([\w:]+)/,
        Ot = /<|&#?\w+;/,
        Rt = /<(?:script|style|link)/i,
        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        It = /^$|\/(?:java|ecma)script/i,
        Mt = /^true\/(.*)/,
        Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        jt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    jt.optgroup = jt.option, jt.tbody = jt.tfoot = jt.colgroup = jt.caption = jt.thead, jt.th = jt.td, J.extend({
        clone: function(t, e, i) {
            var n, r, o, s, a = t.cloneNode(!0),
                l = J.contains(t.ownerDocument, t);
            if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                for (s = v(a), o = v(t), n = 0, r = o.length; r > n; n++) y(o[n], s[n]);
            if (e)
                if (i)
                    for (o = o || v(t), s = s || v(a), n = 0, r = o.length; r > n; n++) g(o[n], s[n]);
                else g(t, a);
            return s = v(a, "script"), s.length > 0 && m(s, !l && v(t, "script")), a
        },
        buildFragment: function(t, e, i, n) {
            for (var r, o, s, a, l, u, h = e.createDocumentFragment(), c = [], p = 0, f = t.length; f > p; p++)
                if (r = t[p], r || 0 === r)
                    if ("object" === J.type(r)) J.merge(c, r.nodeType ? [r] : r);
                    else if (Ot.test(r)) {
                for (o = o || h.appendChild(e.createElement("div")), s = (zt.exec(r) || ["", ""])[1].toLowerCase(), a = jt[s] || jt._default, o.innerHTML = a[1] + r.replace(Lt, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
                J.merge(c, o.childNodes), o = h.firstChild, o.textContent = ""
            } else c.push(e.createTextNode(r));
            for (h.textContent = "", p = 0; r = c[p++];)
                if ((!n || -1 === J.inArray(r, n)) && (l = J.contains(r.ownerDocument, r), o = v(h.appendChild(r), "script"), l && m(o), i))
                    for (u = 0; r = o[u++];) It.test(r.type || "") && i.push(r);
            return h
        },
        cleanData: function(t) {
            for (var e, i, n, r, o = J.event.special, s = 0; void 0 !== (i = t[s]); s++) {
                if (J.acceptData(i) && (r = i[vt.expando], r && (e = vt.cache[r]))) {
                    if (e.events)
                        for (n in e.events) o[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
                    vt.cache[r] && delete vt.cache[r]
                }
                delete yt.cache[i[yt.expando]]
            }
        }
    }), J.fn.extend({
        text: function(t) {
            return gt(this, function(t) {
                return void 0 === t ? J.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = p(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = t ? J.filter(t, this) : this, r = 0; null != (i = n[r]); r++) e || 1 !== i.nodeType || J.cleanData(v(i)), i.parentNode && (e && J.contains(i.ownerDocument, i) && m(v(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(v(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                return J.clone(this, t, e)
            })
        },
        html: function(t) {
            return gt(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Rt.test(t) && !jt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Lt, "<$1></$2>");
                    try {
                        for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (J.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, J.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = U.apply([], t);
            var i, n, r, o, s, a, l = 0,
                u = this.length,
                h = this,
                c = u - 1,
                p = t[0],
                m = J.isFunction(p);
            if (m || u > 1 && "string" == typeof p && !G.checkClone && Dt.test(p)) return this.each(function(i) {
                var n = h.eq(i);
                m && (t[0] = p.call(this, i, n.html())), n.domManip(t, e)
            });
            if (u && (i = J.buildFragment(t, this[0].ownerDocument, !1, this), n = i.firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (r = J.map(v(i, "script"), f), o = r.length; u > l; l++) s = i, l !== c && (s = J.clone(s, !0, !0), o && J.merge(r, v(s, "script"))), e.call(this[l], s, l);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, J.map(r, d), l = 0; o > l; l++) s = r[l], It.test(s.type || "") && !vt.access(s, "globalEval") && J.contains(a, s) && (s.src ? J._evalUrl && J._evalUrl(s.src) : J.globalEval(s.textContent.replace(Nt, "")))
            }
            return this
        }
    }), J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        J.fn[t] = function(t) {
            for (var i, n = [], r = J(t), o = r.length - 1, s = 0; o >= s; s++) i = s === o ? this : this.clone(!0), J(r[s])[e](i), X.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var qt, Ft = {},
        Wt = /^margin/,
        Bt = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
        Ht = function(e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        };
    ! function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
            var e = t.getComputedStyle(s, null);
            i = "1%" !== e.top, n = "4px" === e.width, r.removeChild(o)
        }
        var i, n, r = Z.documentElement,
            o = Z.createElement("div"),
            s = Z.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && J.extend(G, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return null == n && e(), n
            },
            reliableMarginRight: function() {
                var e, i = s.appendChild(Z.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(i, null).marginRight), r.removeChild(o), s.removeChild(i), e
            }
        }))
    }(), J.swap = function(t, e, i, n) {
        var r, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        r = i.apply(t, n || []);
        for (o in e) t.style[o] = s[o];
        return r
    };
    var Ut = /^(none|table(?!-c[ea]).+)/,
        Xt = new RegExp("^(" + bt + ")(.*)$", "i"),
        Yt = new RegExp("^([+-])=(" + bt + ")", "i"),
        Vt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $t = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Qt = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = b(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = J.camelCase(e),
                    l = t.style;
                return e = J.cssProps[a] || (J.cssProps[a] = T(l, a)), s = J.cssHooks[e] || J.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (r = s.get(t, !1, n)) ? r : l[e] : (o = typeof i, "string" === o && (r = Yt.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(J.css(t, e)), o = "number"), void(null != i && i === i && ("number" !== o || J.cssNumber[a] || (i += "px"), G.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var r, o, s, a = J.camelCase(e);
            return e = J.cssProps[a] || (J.cssProps[a] = T(t.style, a)), s = J.cssHooks[e] || J.cssHooks[a], s && "get" in s && (r = s.get(t, !0, i)), void 0 === r && (r = b(t, e, n)), "normal" === r && e in $t && (r = $t[e]), "" === i || i ? (o = parseFloat(r), i === !0 || J.isNumeric(o) ? o || 0 : r) : r
        }
    }), J.each(["height", "width"], function(t, e) {
        J.cssHooks[e] = {
            get: function(t, i, n) {
                return i ? Ut.test(J.css(t, "display")) && 0 === t.offsetWidth ? J.swap(t, Vt, function() {
                    return E(t, e, n)
                }) : E(t, e, n) : void 0
            },
            set: function(t, i, n) {
                var r = n && Ht(t);
                return S(t, i, n ? C(t, e, n, "border-box" === J.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), J.cssHooks.marginRight = w(G.reliableMarginRight, function(t, e) {
        return e ? J.swap(t, {
            display: "inline-block"
        }, b, [t, "marginRight"]) : void 0
    }), J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        J.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + wt[n] + e] = o[n] || o[n - 2] || o[0];
                return r
            }
        }, Wt.test(t) || (J.cssHooks[t + e].set = S)
    }), J.fn.extend({
        css: function(t, e) {
            return gt(this, function(t, e, i) {
                var n, r, o = {},
                    s = 0;
                if (J.isArray(e)) {
                    for (n = Ht(t), r = e.length; r > s; s++) o[e[s]] = J.css(t, e[s], !1, n);
                    return o
                }
                return void 0 !== i ? J.style(t, e, i) : J.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? J(this).show() : J(this).hide()
            })
        }
    }), J.Tween = k, k.prototype = {
        constructor: k,
        init: function(t, e, i, n, r, o) {
            this.elem = t, this.prop = i, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (J.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = k.propHooks[this.prop];
            return t && t.get ? t.get(this) : k.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = k.propHooks[this.prop];
            return this.pos = e = this.options.duration ? J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : k.propHooks._default.set(this), this
        }
    }, k.prototype.init.prototype = k.prototype, k.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = J.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                J.fx.step[t.prop] ? J.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop]) ? J.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, k.propHooks.scrollTop = k.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, J.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, J.fx = k.prototype.init, J.fx.step = {};
    var Gt, Zt, Kt = /^(?:toggle|show|hide)$/,
        Jt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$", "i"),
        te = /queueHooks$/,
        ee = [O],
        ie = {
            "*": [function(t, e) {
                var i = this.createTween(t, e),
                    n = i.cur(),
                    r = Jt.exec(e),
                    o = r && r[3] || (J.cssNumber[t] ? "" : "px"),
                    s = (J.cssNumber[t] || "px" !== o && +n) && Jt.exec(J.css(i.elem, t)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], r = r || [], s = +n || 1;
                    do a = a || ".5", s /= a, J.style(i.elem, t, s + o); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                }
                return r && (s = i.start = +s || +n || 0, i.unit = o, i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), i
            }]
        };
    J.Animation = J.extend(D, {
            tweener: function(t, e) {
                J.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, r = t.length; r > n; n++) i = t[n], ie[i] = ie[i] || [], ie[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ee.unshift(t) : ee.push(t)
            }
        }), J.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? J.extend({}, t) : {
                complete: i || !i && e || J.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !J.isFunction(e) && e
            };
            return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
            }, n
        }, J.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(Tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var r = J.isEmptyObject(t),
                    o = J.speed(e, i, n),
                    s = function() {
                        var e = D(this, J.extend({}, t), o);
                        (r || vt.get(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = J.timers,
                        s = vt.get(this);
                    if (r) s[r] && s[r].stop && n(s[r]);
                    else
                        for (r in s) s[r] && s[r].stop && te.test(r) && n(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(i), e = !1, o.splice(r, 1));
                    (e || !i) && J.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = vt.get(this),
                        n = i[t + "queue"],
                        r = i[t + "queueHooks"],
                        o = J.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, J.queue(this, t, []), r && r.stop && r.stop.call(this, !0),
                        e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), J.each(["toggle", "show", "hide"], function(t, e) {
            var i = J.fn[e];
            J.fn[e] = function(t, n, r) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(L(e, !0), t, n, r)
            }
        }), J.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            J.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), J.timers = [], J.fx.tick = function() {
            var t, e = 0,
                i = J.timers;
            for (Gt = J.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
            i.length || J.fx.stop(), Gt = void 0
        }, J.fx.timer = function(t) {
            J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
        }, J.fx.interval = 13, J.fx.start = function() {
            Zt || (Zt = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.stop = function() {
            clearInterval(Zt), Zt = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fn.delay = function(t, e) {
            return t = J.fx ? J.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        function() {
            var t = Z.createElement("input"),
                e = Z.createElement("select"),
                i = e.appendChild(Z.createElement("option"));
            t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = i.selected, e.disabled = !0, G.optDisabled = !i.disabled, t = Z.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
        }();
    var ne, re, oe = J.expr.attrHandle;
    J.fn.extend({
        attr: function(t, e) {
            return gt(this, J.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                J.removeAttr(this, t)
            })
        }
    }), J.extend({
        attr: function(t, e, i) {
            var n, r, o = t.nodeType;
            return t && 3 !== o && 8 !== o && 2 !== o ? typeof t.getAttribute === Ct ? J.prop(t, e, i) : (1 === o && J.isXMLDoc(t) || (e = e.toLowerCase(), n = J.attrHooks[e] || (J.expr.match.bool.test(e) ? re : ne)), void 0 === i ? n && "get" in n && null !== (r = n.get(t, e)) ? r : (r = J.find.attr(t, e), null == r ? void 0 : r) : null !== i ? n && "set" in n && void 0 !== (r = n.set(t, i, e)) ? r : (t.setAttribute(e, i + ""), i) : void J.removeAttr(t, e)) : void 0
        },
        removeAttr: function(t, e) {
            var i, n, r = 0,
                o = e && e.match(ft);
            if (o && 1 === t.nodeType)
                for (; i = o[r++];) n = J.propFix[i] || i, J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!G.radioValue && "radio" === e && J.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        }
    }), re = {
        set: function(t, e, i) {
            return e === !1 ? J.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = oe[e] || J.find.attr;
        oe[e] = function(t, e, n) {
            var r, o;
            return n || (o = oe[e], oe[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, oe[e] = o), r
        }
    });
    var se = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(t, e) {
            return gt(this, J.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[J.propFix[t] || t]
            })
        }
    }), J.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, i) {
            var n, r, o, s = t.nodeType;
            return t && 3 !== s && 8 !== s && 2 !== s ? (o = 1 !== s || !J.isXMLDoc(t), o && (e = J.propFix[e] || e, r = J.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), G.optSelected || (J.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    var ae = /[\t\r\n\f]/g;
    J.fn.extend({
        addClass: function(t) {
            var e, i, n, r, o, s, a = "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).addClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(ft) || []; u > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")) {
                        for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        s = J.trim(n), i.className !== s && (i.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, r, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                l = 0,
                u = this.length;
            if (J.isFunction(t)) return this.each(function(e) {
                J(this).removeClass(t.call(this, e, this.className))
            });
            if (a)
                for (e = (t || "").match(ft) || []; u > l; l++)
                    if (i = this[l], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(ae, " ") : "")) {
                        for (o = 0; r = e[o++];)
                            for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
                        s = t ? J.trim(n) : "", i.className !== s && (i.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(J.isFunction(t) ? function(i) {
                J(this).toggleClass(t.call(this, i, this.className, e), e)
            } : function() {
                if ("string" === i)
                    for (var e, n = 0, r = J(this), o = t.match(ft) || []; e = o[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else(i === Ct || "boolean" === i) && (this.className && vt.set(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : vt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(ae, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    });
    var le = /\r/g;
    J.fn.extend({
        val: function(t) {
            var e, i, n, r = this[0];
            return arguments.length ? (n = J.isFunction(t), this.each(function(i) {
                var r;
                1 === this.nodeType && (r = n ? t.call(this, i, J(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(t) {
                    return null == t ? "" : t + ""
                })), e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : (i = r.value, "string" == typeof i ? i.replace(le, "") : null == i ? "" : i)) : void 0
        }
    }), J.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = J.find.attr(t, "value");
                    return null != e ? e : J.trim(J.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : n.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                        if (i = n[l], !(!i.selected && l !== r || (G.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && J.nodeName(i.parentNode, "optgroup"))) {
                            if (e = J(i).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var i, n, r = t.options, o = J.makeArray(e), s = r.length; s--;) n = r[s], (n.selected = J.inArray(n.value, o) >= 0) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(t, e) {
                return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) >= 0 : void 0
            }
        }, G.checkOn || (J.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        J.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), J.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    });
    var ue = J.now(),
        he = /\?/;
    J.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, J.parseXML = function(t) {
        var e, i;
        if (!t || "string" != typeof t) return null;
        try {
            i = new DOMParser, e = i.parseFromString(t, "text/xml")
        } catch (n) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && J.error("Invalid XML: " + t), e
    };
    var ce = /#.*$/,
        pe = /([?&])_=[^&]*/,
        fe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        de = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        me = /^(?:GET|HEAD)$/,
        ge = /^\/\//,
        ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ye = {},
        _e = {},
        xe = "*/".concat("*"),
        be = t.location.href,
        we = ve.exec(be.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: be,
            type: "GET",
            isLocal: de.test(we[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": xe,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? N(N(t, J.ajaxSettings), e) : N(J.ajaxSettings, t)
        },
        ajaxPrefilter: I(ye),
        ajaxTransport: I(_e),
        ajax: function(t, e) {
            function i(t, e, i, s) {
                var l, h, v, y, x, w = e;
                2 !== _ && (_ = 2, a && clearTimeout(a), n = void 0, o = s || "", b.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, i && (y = j(c, b, i)), y = q(c, y, b, l), l ? (c.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (J.lastModified[r] = x), x = b.getResponseHeader("etag"), x && (J.etag[r] = x)), 204 === t || "HEAD" === c.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = y.state, h = y.data, v = y.error, l = !v)) : (v = w, (t || !w) && (w = "error", 0 > t && (t = 0))), b.status = t, b.statusText = (e || w) + "", l ? d.resolveWith(p, [h, w, b]) : d.rejectWith(p, [b, w, v]), b.statusCode(g), g = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [b, c, l ? h : v]), m.fireWith(p, [b, w]), u && (f.trigger("ajaxComplete", [b, c]), --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, r, o, s, a, l, u, h, c = J.ajaxSetup({}, e),
                p = c.context || c,
                f = c.context && (p.nodeType || p.jquery) ? J(p) : J.event,
                d = J.Deferred(),
                m = J.Callbacks("once memory"),
                g = c.statusCode || {},
                v = {},
                y = {},
                _ = 0,
                x = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === _) {
                            if (!s)
                                for (s = {}; e = fe.exec(o);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === _ ? o : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return _ || (t = y[i] = y[i] || t, v[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return _ || (c.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > _)
                                for (e in t) g[e] = [g[e], t[e]];
                            else b.always(t[b.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return n && n.abort(e), i(0, e), this
                    }
                };
            if (d.promise(b).complete = m.add, b.success = b.done, b.error = b.fail, c.url = ((t || c.url || be) + "").replace(ce, "").replace(ge, we[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = J.trim(c.dataType || "*").toLowerCase().match(ft) || [""], null == c.crossDomain && (l = ve.exec(c.url.toLowerCase()), c.crossDomain = !(!l || l[1] === we[1] && l[2] === we[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (we[3] || ("http:" === we[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = J.param(c.data, c.traditional)), M(ye, c, e, b), 2 === _) return b;
            u = J.event && c.global, u && 0 === J.active++ && J.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !me.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (he.test(r) ? "&" : "?") + c.data, delete c.data), c.cache === !1 && (c.url = pe.test(r) ? r.replace(pe, "$1_=" + ue++) : r + (he.test(r) ? "&" : "?") + "_=" + ue++)), c.ifModified && (J.lastModified[r] && b.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && b.setRequestHeader("If-None-Match", J.etag[r])), (c.data && c.hasContent && c.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", c.contentType), b.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + xe + "; q=0.01" : "") : c.accepts["*"]);
            for (h in c.headers) b.setRequestHeader(h, c.headers[h]);
            if (c.beforeSend && (c.beforeSend.call(p, b, c) === !1 || 2 === _)) return b.abort();
            x = "abort";
            for (h in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) b[h](c[h]);
            if (n = M(_e, c, e, b)) {
                b.readyState = 1, u && f.trigger("ajaxSend", [b, c]), c.async && c.timeout > 0 && (a = setTimeout(function() {
                    b.abort("timeout")
                }, c.timeout));
                try {
                    _ = 1, n.send(v, i)
                } catch (w) {
                    if (!(2 > _)) throw w;
                    i(-1, w)
                }
            } else i(-1, "No Transport");
            return b
        },
        getJSON: function(t, e, i) {
            return J.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return J.get(t, void 0, e, "script")
        }
    }), J.each(["get", "post"], function(t, e) {
        J[e] = function(t, i, n, r) {
            return J.isFunction(i) && (r = r || n, n = i, i = void 0), J.ajax({
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n
            })
        }
    }), J._evalUrl = function(t) {
        return J.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, J.fn.extend({
        wrapAll: function(t) {
            var e;
            return J.isFunction(t) ? this.each(function(e) {
                J(this).wrapAll(t.call(this, e))
            }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(t) {
            return this.each(J.isFunction(t) ? function(e) {
                J(this).wrapInner(t.call(this, e))
            } : function() {
                var e = J(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = J.isFunction(t);
            return this.each(function(i) {
                J(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }), J.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, J.expr.filters.visible = function(t) {
        return !J.expr.filters.hidden(t)
    };
    var Te = /%20/g,
        Se = /\[\]$/,
        Ce = /\r?\n/g,
        Ee = /^(?:submit|button|image|reset|file)$/i,
        Pe = /^(?:input|select|textarea|keygen)/i;
    J.param = function(t, e) {
        var i, n = [],
            r = function(t, e) {
                e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) F(i, t[i], e, r);
        return n.join("&").replace(Te, "+")
    }, J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = J.prop(this, "elements");
                return t ? J.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !J(this).is(":disabled") && Pe.test(this.nodeName) && !Ee.test(t) && (this.checked || !St.test(t))
            }).map(function(t, e) {
                var i = J(this).val();
                return null == i ? null : J.isArray(i) ? J.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ce, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(Ce, "\r\n")
                }
            }).get()
        }
    }), J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (t) {}
    };
    var ke = 0,
        Ae = {},
        Le = {
            0: 200,
            1223: 204
        },
        ze = J.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ae) Ae[t]()
    }), G.cors = !!ze && "withCredentials" in ze, G.ajax = ze = !!ze, J.ajaxTransport(function(t) {
        var e;
        return G.cors || ze && !t.crossDomain ? {
            send: function(i, n) {
                var r, o = t.xhr(),
                    s = ++ke;
                if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (r in t.xhrFields) o[r] = t.xhrFields[r];
                t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (r in i) o.setRequestHeader(r, i[r]);
                e = function(t) {
                    return function() {
                        e && (delete Ae[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? n(o.status, o.statusText) : n(Le[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                            text: o.responseText
                        } : void 0, o.getAllResponseHeaders()))
                    }
                }, o.onload = e(), o.onerror = e("error"), e = Ae[s] = e("abort");
                try {
                    o.send(t.hasContent && t.data || null)
                } catch (a) {
                    if (e) throw a
                }
            },
            abort: function() {
                e && e()
            }
        } : void 0
    }), J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return J.globalEval(t), t
            }
        }
    }), J.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), J.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, i;
            return {
                send: function(n, r) {
                    e = J("<script>").prop({
                        async: !0,
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Oe = [],
        Re = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Oe.pop() || J.expando + "_" + ue++;
            return this[t] = !0, t
        }
    }), J.ajaxPrefilter("json jsonp", function(e, i, n) {
        var r, o, s, a = e.jsonp !== !1 && (Re.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Re, "$1" + r) : e.jsonp !== !1 && (e.url += (he.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return s || J.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
            s = arguments
        }, n.always(function() {
            t[r] = o, e[r] && (e.jsonpCallback = i.jsonpCallback, Oe.push(r)), s && J.isFunction(o) && o(s[0]), s = o = void 0
        }), "script") : void 0
    }), J.parseHTML = function(t, e, i) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (i = e, e = !1), e = e || Z;
        var n = st.exec(t),
            r = !i && [];
        return n ? [e.createElement(n[1])] : (n = J.buildFragment([t], e, r), r && r.length && J(r).remove(), J.merge([], n.childNodes))
    };
    var De = J.fn.load;
    J.fn.load = function(t, e, i) {
        if ("string" != typeof t && De) return De.apply(this, arguments);
        var n, r, o, s = this,
            a = t.indexOf(" ");
        return a >= 0 && (n = J.trim(t.slice(a)), t = t.slice(0, a)), J.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && J.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            s.each(i, o || [t.responseText, e, t])
        }), this
    }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        J.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), J.expr.filters.animated = function(t) {
        return J.grep(J.timers, function(e) {
            return t === e.elem
        }).length
    };
    var Ie = t.document.documentElement;
    J.offset = {
        setOffset: function(t, e, i) {
            var n, r, o, s, a, l, u, h = J.css(t, "position"),
                c = J(t),
                p = {};
            "static" === h && (t.style.position = "relative"), a = c.offset(), o = J.css(t, "top"), l = J.css(t, "left"), u = ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1, u ? (n = c.position(), s = n.top, r = n.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (p.top = e.top - a.top + s), null != e.left && (p.left = e.left - a.left + r), "using" in e ? e.using.call(t, p) : c.css(p)
        }
    }, J.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                J.offset.setOffset(this, t, e)
            });
            var e, i, n = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = n && n.ownerDocument;
            return o ? (e = o.documentElement, J.contains(e, n) ? (typeof n.getBoundingClientRect !== Ct && (r = n.getBoundingClientRect()), i = W(o), {
                top: r.top + i.pageYOffset - e.clientTop,
                left: r.left + i.pageXOffset - e.clientLeft
            }) : r) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === J.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (n = t.offset()), n.top += J.css(t[0], "borderTopWidth", !0), n.left += J.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - J.css(i, "marginTop", !0),
                    left: e.left - n.left - J.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Ie; t && !J.nodeName(t, "html") && "static" === J.css(t, "position");) t = t.offsetParent;
                return t || Ie
            })
        }
    }), J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = "pageYOffset" === i;
        J.fn[e] = function(r) {
            return gt(this, function(e, r, o) {
                var s = W(e);
                return void 0 === o ? s ? s[i] : e[r] : void(s ? s.scrollTo(n ? t.pageXOffset : o, n ? o : t.pageYOffset) : e[r] = o)
            }, e, r, arguments.length, null)
        }
    }), J.each(["top", "left"], function(t, e) {
        J.cssHooks[e] = w(G.pixelPosition, function(t, i) {
            return i ? (i = b(t, e), Bt.test(i) ? J(t).position()[e] + "px" : i) : void 0
        })
    }), J.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        J.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            J.fn[n] = function(n, r) {
                var o = arguments.length && (i || "boolean" != typeof n),
                    s = i || (n === !0 || r === !0 ? "margin" : "border");
                return gt(this, function(e, i, n) {
                    var r;
                    return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? J.css(e, i, s) : J.style(e, i, n, s)
                }, e, o ? n : void 0, o, null)
            }
        })
    }), J.fn.size = function() {
        return this.length
    }, J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var Me = t.jQuery,
        Ne = t.$;
    return J.noConflict = function(e) {
        return t.$ === J && (t.$ = Ne), e && t.jQuery === J && (t.jQuery = Me), J
    }, typeof e === Ct && (t.jQuery = t.$ = J), J
}), ! function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function r(e, i) {
            t.fn[e] = function(r) {
                if ("string" == typeof r) {
                    for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                        var u = this[a],
                            h = t.data(u, e);
                        if (h)
                            if (t.isFunction(h[r]) && "_" !== r.charAt(0)) {
                                var c = h[r].apply(h, s);
                                if (void 0 !== c) return c
                            } else o("no such method '" + r + "' for " + e + " instance");
                        else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var o = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), r(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
}(window),
function(t) {
    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? o : r;
        i(t, e)
    }
    var n, r, o;
    "classList" in document.documentElement ? (n = function(t, e) {
        return t.classList.contains(e)
    }, r = function(t, e) {
        t.classList.add(e)
    }, o = function(t, e) {
        t.classList.remove(e)
    }) : (n = function(t, i) {
        return e(i).test(t.className)
    }, r = function(t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, o = function(t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var s = {
        hasClass: n,
        addClass: r,
        removeClass: o,
        toggleClass: i,
        has: n,
        add: r,
        remove: o,
        toggle: i
    };
    "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        r = this,
        o = r.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, r = this.getListenersAsObject(t),
            o = "object" == typeof i;
        for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(o ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, r, o = this.getListenersAsObject(t);
        for (r in o) o.hasOwnProperty(r) && (n = e(o[r], i), -1 !== n && o[r].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, r, o = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) o.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? o.call(this, n, r) : s.call(this, n, r));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, r, o, s = this.getListenersAsObject(t);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (n = s[r].length; n--;) i = s[r][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return r.EventEmitter = o, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
}.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : t.eventie = o
    }(window),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, r = 0, o = i.length; o > r; r++)
                    if (e = i[r] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {}

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var n = s[e];
                t[n] = 0
            }
            return t
        }

        function r(i) {
            function r() {
                if (!p) {
                    p = !0;
                    var n = t.getComputedStyle;
                    if (u = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || o("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), h = i("boxSizing")) {
                        var r = document.createElement("div");
                        r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[h] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(r);
                        var a = u(r);
                        c = 200 === e(a.width), s.removeChild(r)
                    }
                }
            }

            function a(t) {
                if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = u(t);
                    if ("none" === i.display) return n();
                    var o = {};
                    o.width = t.offsetWidth, o.height = t.offsetHeight;
                    for (var a = o.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), p = 0, f = s.length; f > p; p++) {
                        var d = s[p],
                            m = i[d];
                        m = l(t, m);
                        var g = parseFloat(m);
                        o[d] = isNaN(g) ? 0 : g
                    }
                    var v = o.paddingLeft + o.paddingRight,
                        y = o.paddingTop + o.paddingBottom,
                        _ = o.marginLeft + o.marginRight,
                        x = o.marginTop + o.marginBottom,
                        b = o.borderLeftWidth + o.borderRightWidth,
                        w = o.borderTopWidth + o.borderBottomWidth,
                        T = a && c,
                        S = e(i.width);
                    S !== !1 && (o.width = S + (T ? 0 : v + b));
                    var C = e(i.height);
                    return C !== !1 && (o.height = C + (T ? 0 : y + w)), o.innerWidth = o.width - (v + b), o.innerHeight = o.height - (y + w), o.outerWidth = o.width + _, o.outerHeight = o.height + x, o
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    r = n.left,
                    o = e.runtimeStyle,
                    s = o && o.left;
                return s && (o.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = r, s && (o.left = s), i
            }
            var u, h, c, p = !1;
            return a
        }
        var o = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== o.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var n = s[t];
                n()
            }
        }

        function r(r) {
            return "complete" === o.readyState ? n() : (r.bind(o, "DOMContentLoaded", i), r.bind(o, "readystatechange", i), r.bind(t, "load", i)), e
        }
        var o = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], r) : "object" == typeof exports ? module.exports = r(require("eventie")) : t.docReady = r(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), r = 0, o = n.length; o > r; r++)
                if (n[r] === t) return !0;
            return !1
        }

        function r(t, n) {
            return i(t), e(t, n)
        }
        var o, s = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var r = e[i],
                    o = r + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                l = e(a, "div");
            o = l ? e : r
        } else o = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return o
        }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var r = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == r.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var r = [], o = 0, s = t.length; s > o; o++) {
                var a = t[o];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && r.push(a);
                        for (var l = a.querySelectorAll(e), u = 0, h = l.length; h > u; u++) r.push(l[u])
                    } else r.push(a)
            }
            return r
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function() {
                    n.apply(o, e), delete o[r]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var o = t.console;
        return n.htmlInit = function(i, r) {
            e(function() {
                for (var e = n.toDashed(r), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                    var h, c = s[l],
                        p = c.getAttribute(a);
                    try {
                        h = p && JSON.parse(p)
                    } catch (f) {
                        o && o.error("Error parsing " + a + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + f);
                        continue
                    }
                    var d = new i(c, h),
                        m = t.jQuery;
                    m && m.data(c, r, d)
                }
            })
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
            return e(t, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
    }(window, function(t, e) {
        function i(t, e) {
            this.element = t, this.parent = e, this.create()
        }
        var n = "attachEvent" in t;
        return i.prototype.create = function() {
            this.element.style.position = "absolute", n && this.element.setAttribute("unselectable", "on"), this.x = 0, this.shift = 0
        }, i.prototype.destroy = function() {
            this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.style[t] = ""
        }, i.prototype.getSize = function() {
            this.size = e(this.element)
        }, i.prototype.setPosition = function(t) {
            this.x = t, this.setDefaultTarget(), this.renderPosition(t)
        }, i.prototype.setDefaultTarget = function() {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, i.prototype.renderPosition = function(t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }, i.prototype.wrapShift = function(t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, i.prototype.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i) {
        for (var n, r = 0, o = "webkit moz ms o".split(" "), s = t.requestAnimationFrame, a = t.cancelAnimationFrame, l = 0; l < o.length && (!s || !a); l++) n = o[l], s = s || t[n + "RequestAnimationFrame"], a = a || t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"];
        s && a || (s = function(e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - r)),
                o = t.setTimeout(function() {
                    e(i + n)
                }, n);
            return r = i + n, o
        }, a = function(e) {
            t.clearTimeout(e)
        });
        var u = {};
        u.startAnimation = function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        }, u.animate = function() {
            this.applyDragForce(), this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                s(function() {
                    e.animate()
                })
            }
        };
        var h = e("transform"),
            c = !!e("perspective");
        return u.positionSlider = function() {
            var t = this.x;
            this.options.wrapAround && this.cells.length > 1 && (t = i.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && h ? -t : t;
            var e = this.getPositionValue(t);
            h ? this.slider.style[h] = c && this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")" : this.slider.style[this.originSide] = e
        }, u.positionSliderAtSelected = function() {
            if (this.cells.length) {
                var t = this.cells[this.selectedIndex];
                this.x = -t.target, this.positionSlider()
            }
        }, u.getPositionValue = function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        }, u.settle = function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, c && this.positionSlider(), this.dispatchEvent("settle"))
        }, u.shiftWrapCells = function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        }, u._shiftCells = function(t, e, i) {
            for (var n = 0, r = t.length; r > n; n++) {
                var o = t[n],
                    s = e > 0 ? i : 0;
                o.wrapShift(s), e -= o.size.outerWidth
            }
        }, u._unshiftCells = function(t) {
            if (t && t.length)
                for (var e = 0, i = t.length; i > e; e++) t[e].wrapShift(0)
        }, u.integratePhysics = function() {
            this.velocity += this.accel, this.x += this.velocity, this.velocity *= this.getFrictionFactor(), this.accel = 0
        }, u.applyForce = function(t) {
            this.accel += t
        }, u.getFrictionFactor = function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        }, u.getRestingPosition = function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        }, u.applyDragForce = function() {
            if (this.isPointerDown) {
                var t = this.dragX - this.x,
                    e = t - this.velocity;
                this.applyForce(e)
            }
        }, u.applySelectedAttraction = function() {
            var t = this.cells.length;
            if (!this.isPointerDown && !this.isFreeScrolling && t) {
                var e = this.cells[this.selectedIndex],
                    i = this.options.wrapAround && t > 1 ? this.slideableWidth * Math.floor(this.selectedIndex / t) : 0,
                    n = -1 * (e.target + i) - this.x,
                    r = n * this.options.selectedAttraction;
                this.applyForce(r)
            }
        }, u
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./animate"], function(i, n, r, o, s, a, l) {
            return e(t, i, n, r, o, s, a, l)
        });
        else if ("object" == typeof exports) module.exports = e(t, require("desandro-classie"), require("wolfy87-eventemitter"), require("eventie"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./animate"));
        else {
            var i = t.Flickity;
            t.Flickity = e(t, t.classie, t.EventEmitter, t.eventie, t.getSize, t.fizzyUIUtils, i.Cell, i.animatePrototype)
        }
    }(window, function(t, e, i, n, r, o, s, a) {
        function l(t, e) {
            for (t = o.makeArray(t); t.length;) e.appendChild(t.shift())
        }

        function u(t, e) {
            var i = o.getQueryElement(t);
            return i ? (this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e), void this._create()) : void(p && p.error("Bad element for Flickity: " + (i || t)))
        }
        var h = t.jQuery,
            c = t.getComputedStyle,
            p = t.console,
            f = 0,
            d = {};
        u.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, u.createMethods = [], o.extend(u.prototype, i.prototype), u.prototype._create = function() {
            var e = this.guid = ++f;
            this.element.flickityGUID = e, d[e] = this, this.selectedIndex = this.options.initialIndex || 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.accel = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", u.setUnselectable(this.viewport), this._createSlider(), (this.options.resize || this.options.watchCSS) && (n.bind(t, "resize", this), this.isResizeBound = !0);
            for (var i = 0, r = u.createMethods.length; r > i; i++) {
                var o = u.createMethods[i];
                this[o]()
            }
            this.options.watchCSS ? this.watchCSS() : this.activate()
        }, u.prototype.option = function(t) {
            o.extend(this.options, t)
        }, u.prototype.activate = function() {
            if (!this.isActive) {
                this.isActive = !0, e.add(this.element, "flickity-enabled"), this.options.rightToLeft && e.add(this.element, "flickity-rtl"), this.getSize();
                var t = this._filterFindCellElements(this.element.children);
                l(t, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, n.bind(this.element, "keydown", this)), this.emit("activate"), this.positionSliderAtSelected(), this.select(this.selectedIndex)
            }
        }, u.prototype._createSlider = function() {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, u.prototype._filterFindCellElements = function(t) {
            return o.filterFindElements(t, this.options.cellSelector)
        }, u.prototype.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, u.prototype._makeCells = function(t) {
            for (var e = this._filterFindCellElements(t), i = [], n = 0, r = e.length; r > n; n++) {
                var o = e[n],
                    a = new s(o, this);
                i.push(a)
            }
            return i
        }, u.prototype.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, u.prototype.positionCells = function() {
            this._sizeCells(this.cells), this._positionCells(0)
        }, u.prototype._positionCells = function(t) {
            t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
            var e = 0;
            if (t > 0) {
                var i = this.cells[t - 1];
                e = i.x + i.size.outerWidth
            }
            for (var n, r = this.cells.length, o = t; r > o; o++) n = this.cells[o], n.setPosition(e), e += n.size.outerWidth, this.maxCellHeight = Math.max(n.size.outerHeight, this.maxCellHeight);
            this.slideableWidth = e, this._containCells()
        }, u.prototype._sizeCells = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                n.getSize()
            }
        }, u.prototype._init = u.prototype.reposition = function() {
            this.positionCells(), this.positionSliderAtSelected()
        }, u.prototype.getSize = function() {
            this.size = r(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var m = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        u.prototype.setCellAlign = function() {
            var t = m[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, u.prototype.setGallerySize = function() {
            this.options.setGallerySize && (this.viewport.style.height = this.maxCellHeight + "px")
        }, u.prototype._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition,
                    e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, u.prototype._getGapCells = function(t, e, i) {
            for (var n = []; t > 0;) {
                var r = this.cells[e];
                if (!r) break;
                n.push(r), e += i, t -= r.size.outerWidth
            }
            return n
        }, u.prototype._containCells = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length)
                for (var t = this.options.rightToLeft ? "marginRight" : "marginLeft", e = this.options.rightToLeft ? "marginLeft" : "marginRight", i = this.cells[0].size[t], n = this.getLastCell(), r = this.slideableWidth - n.size[e], o = r - this.size.innerWidth * (1 - this.cellAlign), s = r < this.size.innerWidth, a = 0, l = this.cells.length; l > a; a++) {
                    var u = this.cells[a];
                    u.setDefaultTarget(), s ? u.target = r * this.cellAlign : (u.target = Math.max(u.target, this.cursorPosition + i), u.target = Math.min(u.target, o))
                }
        }, u.prototype.dispatchEvent = function(t, e, i) {
            var n = [e].concat(i);
            if (this.emitEvent(t, n), h && this.$element)
                if (e) {
                    var r = h.Event(e);
                    r.type = t, this.$element.trigger(r, i)
                } else this.$element.trigger(t, i)
        }, u.prototype.select = function(t, e) {
            if (this.isActive) {
                var i = this.cells.length;
                this.options.wrapAround && i > 1 && (0 > t ? this.x -= this.slideableWidth : t >= i && (this.x += this.slideableWidth)), (this.options.wrapAround || e) && (t = o.modulo(t, i)), this.cells[t] && (this.selectedIndex = t, this.setSelectedCell(), this.startAnimation(), this.dispatchEvent("cellSelect"))
            }
        }, u.prototype.previous = function(t) {
            this.select(this.selectedIndex - 1, t)
        }, u.prototype.next = function(t) {
            this.select(this.selectedIndex + 1, t)
        }, u.prototype.setSelectedCell = function() {
            this._removeSelectedCellClass(), this.selectedCell = this.cells[this.selectedIndex], this.selectedElement = this.selectedCell.element, e.add(this.selectedElement, "is-selected")
        }, u.prototype._removeSelectedCellClass = function() {
            this.selectedCell && e.remove(this.selectedCell.element, "is-selected")
        }, u.prototype.getCell = function(t) {
            for (var e = 0, i = this.cells.length; i > e; e++) {
                var n = this.cells[e];
                if (n.element == t) return n
            }
        }, u.prototype.getCells = function(t) {
            t = o.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var r = t[i],
                    s = this.getCell(r);
                s && e.push(s)
            }
            return e
        }, u.prototype.getCellElements = function() {
            for (var t = [], e = 0, i = this.cells.length; i > e; e++) t.push(this.cells[e].element);
            return t
        }, u.prototype.getParentCell = function(t) {
            var e = this.getCell(t);
            return e ? e : (t = o.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, u.prototype.getAdjacentCellElements = function(t, e) {
            if (!t) return [this.selectedElement];
            e = void 0 === e ? this.selectedIndex : e;
            var i = this.cells.length;
            if (1 + 2 * t >= i) return this.getCellElements();
            for (var n = [], r = e - t; e + t >= r; r++) {
                var s = this.options.wrapAround ? o.modulo(r, i) : r,
                    a = this.cells[s];
                a && n.push(a.element)
            }
            return n
        }, u.prototype.uiChange = function() {
            this.emit("uiChange")
        }, u.prototype.childUIPointerDown = function(t) {
            this.emitEvent("childUIPointerDown", [t])
        }, u.prototype.onresize = function() {
            this.watchCSS(), this.resize()
        }, o.debounceMethod(u, "onresize", 150), u.prototype.resize = function() {
            this.isActive && (this.getSize(), this.options.wrapAround && (this.x = o.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.positionSliderAtSelected())
        };
        var g = u.supportsConditionalCSS = function() {
            var t;
            return function() {
                if (void 0 !== t) return t;
                if (!c) return void(t = !1);
                var e = document.createElement("style"),
                    i = document.createTextNode('body:after { content: "foo"; display: none; }');
                e.appendChild(i), document.head.appendChild(e);
                var n = c(document.body, ":after").content;
                return t = -1 != n.indexOf("foo"), document.head.removeChild(e), t
            }
        }();
        u.prototype.watchCSS = function() {
            var t = this.options.watchCSS;
            if (t) {
                var e = g();
                if (!e) {
                    var i = "fallbackOn" == t ? "activate" : "deactivate";
                    return void this[i]()
                }
                var n = c(this.element, ":after").content; - 1 != n.indexOf("flickity") ? this.activate() : this.deactivate()
            }
        }, u.prototype.onkeydown = function(t) {
            if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
                if (37 == t.keyCode) {
                    var e = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[e]()
                } else if (39 == t.keyCode) {
                var i = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[i]()
            }
        }, u.prototype.deactivate = function() {
            if (this.isActive) {
                e.remove(this.element, "flickity-enabled"), e.remove(this.element, "flickity-rtl");
                for (var t = 0, i = this.cells.length; i > t; t++) {
                    var r = this.cells[t];
                    r.destroy()
                }
                this._removeSelectedCellClass(), this.element.removeChild(this.viewport), l(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), n.unbind(this.element, "keydown", this)), this.isActive = !1, this.emit("deactivate")
            }
        }, u.prototype.destroy = function() {
            this.deactivate(), this.isResizeBound && n.unbind(t, "resize", this), this.emit("destroy"), h && this.$element && h.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete d[this.guid]
        }, o.extend(u.prototype, a);
        var v = "attachEvent" in t;
        return u.setUnselectable = function(t) {
            v && t.setAttribute("unselectable", "on")
        }, u.data = function(t) {
            t = o.getQueryElement(t);
            var e = t && t.flickityGUID;
            return e && d[e]
        }, o.htmlInit(u, "flickity"), h && h.bridget && h.bridget("flickity", u), u.Cell = s, u
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.Unipointer = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n() {}

        function r() {}
        r.prototype = new e, r.prototype.bindStartEvent = function(t) {
            this._bindStartEvent(t, !0)
        }, r.prototype.unbindStartEvent = function(t) {
            this._bindStartEvent(t, !1)
        }, r.prototype._bindStartEvent = function(e, n) {
            n = void 0 === n ? !0 : !!n;
            var r = n ? "bind" : "unbind";
            t.navigator.pointerEnabled ? i[r](e, "pointerdown", this) : t.navigator.msPointerEnabled ? i[r](e, "MSPointerDown", this) : (i[r](e, "mousedown", this), i[r](e, "touchstart", this))
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.getTouch = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                if (n.identifier == this.pointerIdentifier) return n
            }
        }, r.prototype.onmousedown = function(t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, r.prototype.ontouchstart = function(t) {
            this._pointerDown(t, t.changedTouches[0])
        }, r.prototype.onMSPointerDown = r.prototype.onpointerdown = function(t) {
            this._pointerDown(t, t)
        }, r.prototype._pointerDown = function(t, e) {
            this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, r.prototype.pointerDown = function(t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var o = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"],
            MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
        };
        return r.prototype._bindPostStartEvents = function(e) {
            if (e) {
                for (var n = o[e.type], r = e.preventDefault ? t : document, s = 0, a = n.length; a > s; s++) {
                    var l = n[s];
                    i.bind(r, l, this)
                }
                this._boundPointerEvents = {
                    events: n,
                    node: r
                }
            }
        }, r.prototype._unbindPostStartEvents = function() {
            var t = this._boundPointerEvents;
            if (t && t.events) {
                for (var e = 0, n = t.events.length; n > e; e++) {
                    var r = t.events[e];
                    i.unbind(t.node, r, this)
                }
                delete this._boundPointerEvents
            }
        }, r.prototype.onmousemove = function(t) {
            this._pointerMove(t, t)
        }, r.prototype.onMSPointerMove = r.prototype.onpointermove = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, r.prototype.ontouchmove = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, r.prototype._pointerMove = function(t, e) {
            this.pointerMove(t, e)
        }, r.prototype.pointerMove = function(t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, r.prototype.onmouseup = function(t) {
            this._pointerUp(t, t)
        }, r.prototype.onMSPointerUp = r.prototype.onpointerup = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, r.prototype.ontouchend = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, r.prototype._pointerUp = function(t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, r.prototype.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, r.prototype._pointerDone = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
        }, r.prototype.pointerDone = n, r.prototype.onMSPointerCancel = r.prototype.onpointercancel = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, r.prototype.ontouchcancel = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, r.prototype._pointerCancel = function(t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, r.prototype.pointerCancel = function(t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, r.getPointerPoint = function(t) {
            return {
                x: void 0 !== t.pageX ? t.pageX : t.clientX,
                y: void 0 !== t.pageY ? t.pageY : t.clientY
            }
        }, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["eventie/eventie", "unipointer/unipointer"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("unipointer")) : t.Unidragger = e(t, t.eventie, t.Unipointer)
    }(window, function(t, e, i) {
        function n() {}

        function r(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function o() {}

        function s() {
            return !1
        }
        o.prototype = new i, o.prototype.bindHandles = function() {
            this._bindHandles(!0)
        }, o.prototype.unbindHandles = function() {
            this._bindHandles(!1)
        };
        var a = t.navigator;
        o.prototype._bindHandles = function(t) {
            t = void 0 === t ? !0 : !!t;
            var i;
            i = a.pointerEnabled ? function(e) {
                e.style.touchAction = t ? "none" : ""
            } : a.msPointerEnabled ? function(e) {
                e.style.msTouchAction = t ? "none" : ""
            } : function() {
                t && u(s)
            };
            for (var n = t ? "bind" : "unbind", r = 0, o = this.handles.length; o > r; r++) {
                var s = this.handles[r];
                this._bindStartEvent(s, t), i(s), e[n](s, "click", this)
            }
        };
        var l = "attachEvent" in document.documentElement,
            u = l ? function(t) {
                "IMG" == t.nodeName && (t.ondragstart = s);
                for (var e = t.querySelectorAll("img"), i = 0, n = e.length; n > i; i++) {
                    var r = e[i];
                    r.ondragstart = s
                }
            } : n;
        o.prototype.pointerDown = function(i, n) {
            if ("INPUT" == i.target.nodeName && "range" == i.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(i, n);
            var r = document.activeElement;
            r && r.blur && r.blur(), this._bindPostStartEvents(i), this.pointerDownScroll = o.getScrollPosition(), e.bind(t, "scroll", this), this.emitEvent("pointerDown", [i, n])
        }, o.prototype._dragPointerDown = function(t, e) {
            this.pointerDownPoint = i.getPointerPoint(e);
            var n = "touchstart" == t.type,
                o = t.target.nodeName;
            n || "SELECT" == o || r(t)
        }, o.prototype.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
        }, o.prototype._dragPointerMove = function(t, e) {
            var n = i.getPointerPoint(e),
                r = {
                    x: n.x - this.pointerDownPoint.x,
                    y: n.y - this.pointerDownPoint.y
                };
            return !this.isDragging && this.hasDragStarted(r) && this._dragStart(t, e), r
        }, o.prototype.hasDragStarted = function(t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }, o.prototype.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, o.prototype._dragPointerUp = function(t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, i.prototype.pointerDone = function() {
            e.unbind(t, "scroll", this)
        }, o.prototype._dragStart = function(t, e) {
            this.isDragging = !0, this.dragStartPoint = o.getPointerPoint(e), this.isPreventingClicks = !0, this.dragStart(t, e)
        }, o.prototype.dragStart = function(t, e) {
            this.emitEvent("dragStart", [t, e])
        }, o.prototype._dragMove = function(t, e, i) {
            this.isDragging && this.dragMove(t, e, i)
        }, o.prototype.dragMove = function(t, e, i) {
            r(t), this.emitEvent("dragMove", [t, e, i])
        }, o.prototype._dragEnd = function(t, e) {
            this.isDragging = !1;
            var i = this;
            setTimeout(function() {
                delete i.isPreventingClicks
            }), this.dragEnd(t, e)
        }, o.prototype.dragEnd = function(t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, o.prototype.pointerDone = function() {
            e.unbind(t, "scroll", this), delete this.pointerDownScroll
        }, o.prototype.onclick = function(t) {
            this.isPreventingClicks && r(t)
        }, o.prototype._staticClick = function(t, e) {
            if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
                var i = t.target.nodeName;
                if (("INPUT" == i || "TEXTAREA" == i) && t.target.focus(), this.staticClick(t, e), "mouseup" != t.type) {
                    this.isIgnoringMouseUp = !0;
                    var n = this;
                    setTimeout(function() {
                        delete n.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, o.prototype.staticClick = function(t, e) {
            this.emitEvent("staticClick", [t, e])
        }, o.prototype.onscroll = function() {
            var t = o.getScrollPosition(),
                e = this.pointerDownScroll.x - t.x,
                i = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
        }, o.getPointerPoint = function(t) {
            return {
                x: void 0 !== t.pageX ? t.pageX : t.clientX,
                y: void 0 !== t.pageY ? t.pageY : t.clientY
            }
        };
        var h = void 0 !== t.pageYOffset;
        return o.getScrollPosition = function() {
            return {
                x: h ? t.pageXOffset : document.body.scrollLeft,
                y: h ? t.pageYOffset : document.body.scrollTop
            }
        }, o.getPointerPoint = i.getPointerPoint, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["classie/classie", "eventie/eventie", "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, r, o, s) {
            return e(t, i, n, r, o, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.eventie, t.Flickity, t.Unidragger, t.fizzyUIUtils)
    }(window, function(t, e, i, n, r, o) {
        function s(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function a(e) {
            var i = r.getPointerPoint(e);
            return i.y - t.pageYOffset
        }
        o.extend(n.defaults, {
            draggable: !0,
            touchVerticalScroll: !0
        }), n.createMethods.push("_createDrag"), o.extend(n.prototype, r.prototype), n.prototype._createDrag = function() {
            this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag)
        }, n.prototype.bindDrag = function() {
            this.options.draggable && !this.isDragBound && (e.add(this.element, "is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
        }, n.prototype.unbindDrag = function() {
            this.isDragBound && (e.remove(this.element, "is-draggable"), this.unbindHandles(), delete this.isDragBound)
        }, n.prototype._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }, n.prototype._childUIPointerDownDrag = function(t) {
            s(t), this.pointerDownFocus(t)
        }, n.prototype.pointerDown = function(n, o) {
            if ("INPUT" == n.target.nodeName && "range" == n.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(n, o);
            var s = document.activeElement;
            s && s.blur && s != this.element && s != document.body && s.blur(), this.pointerDownFocus(n), this.dragX = this.x, e.add(this.viewport, "is-pointer-down"), this._bindPostStartEvents(n), this.pointerDownScroll = r.getScrollPosition(), i.bind(t, "scroll", this), this.dispatchEvent("pointerDown", n, [o])
        };
        var l = {
                touchstart: !0,
                MSPointerDown: !0
            },
            u = {
                INPUT: !0,
                SELECT: !0
            };
        n.prototype.pointerDownFocus = function(t) {
            !this.options.accessibility || l[t.type] || u[t.target.nodeName] || this.element.focus()
        }, n.prototype.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.touchVerticalScrollMove(t, e, i), this._dragMove(t, e, i), this.dispatchEvent("pointerMove", t, [e, i])
        }, n.prototype.hasDragStarted = function(t) {
            return !this.isTouchScrolling && Math.abs(t.x) > 3
        }, n.prototype.pointerUp = function(t, i) {
            delete this.isTouchScrolling, e.remove(this.viewport, "is-pointer-down"), this.dispatchEvent("pointerUp", t, [i]), this._dragPointerUp(t, i)
        };
        var h = {
            touchmove: !0,
            MSPointerMove: !0
        };
        return n.prototype.touchVerticalScrollMove = function(e, i, n) {
            var r = this.options.touchVerticalScroll,
                o = "withDrag" == r ? !r : this.isDragging || !r;
            !o && h[e.type] && !this.isTouchScrolling && Math.abs(n.y) > 10 && (this.startScrollY = t.pageYOffset, this.pointerWindowStartY = a(i), this.isTouchScrolling = !0)
        }, n.prototype.dragStart = function(t, e) {
            this.dragStartPosition = this.x, this.startAnimation(), this.dispatchEvent("dragStart", t, [e])
        }, n.prototype.dragMove = function(t, e, i) {
            s(t), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1,
                r = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.cells.length) {
                var o = Math.max(-this.cells[0].target, this.dragStartPosition);
                r = r > o ? .5 * (r + o) : r;
                var a = Math.min(-this.getLastCell().target, this.dragStartPosition);
                r = a > r ? .5 * (r + a) : r
            }
            this.dragX = r, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
        }, n.prototype.dragEnd = function(t, e) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.cells[0].target && -n < this.getLastCell().target
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.select(i), this.dispatchEvent("dragEnd", t, [e])
        }, n.prototype.dragEndRestingSelect = function() {
            var t = this.getRestingPosition(),
                e = Math.abs(this.getCellDistance(-t, this.selectedIndex)),
                i = this._getClosestResting(t, e, 1),
                n = this._getClosestResting(t, e, -1),
                r = i.distance < n.distance ? i.index : n.index;
            return r
        }, n.prototype._getClosestResting = function(t, e, i) {
            for (var n = this.selectedIndex, r = 1 / 0, o = this.options.contain && !this.options.wrapAround ? function(t, e) {
                    return e >= t
                } : function(t, e) {
                    return e > t
                }; o(e, r) && (n += i, r = e, e = this.getCellDistance(-t, n), null !== e);) e = Math.abs(e);
            return {
                distance: r,
                index: n - i
            }
        }, n.prototype.getCellDistance = function(t, e) {
            var i = this.cells.length,
                n = this.options.wrapAround && i > 1,
                r = n ? o.modulo(e, i) : e,
                s = this.cells[r];
            if (!s) return null;
            var a = n ? this.slideableWidth * Math.floor(e / i) : 0;
            return t - (s.target + a)
        }, n.prototype.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getCellDistance(-this.dragX, this.selectedIndex),
                e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : 0 > t && 0 > e ? -1 : 0
        }, n.prototype.staticClick = function(t, e) {
            var i = this.getParentCell(t.target),
                n = i && i.element,
                r = i && o.indexOf(this.cells, i);
            this.dispatchEvent("staticClick", t, [e, n, r])
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
    }(window, function(t, e) {
        function i(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function n(t) {
            this.bindTap(t)
        }
        n.prototype = new e, n.prototype.bindTap = function(t) {
            t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
        }, n.prototype.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        };
        var r = n.prototype.pointerDown;
        n.prototype.pointerDown = function(t) {
            "touchstart" == t.type && i(t), r.apply(this, arguments)
        };
        var o = void 0 !== t.pageYOffset;
        return n.prototype.pointerUp = function(i, n) {
            var r = e.getPointerPoint(n),
                s = this.tapElement.getBoundingClientRect(),
                a = o ? t.pageXOffset : document.body.scrollLeft,
                l = o ? t.pageYOffset : document.body.scrollTop,
                u = r.x >= s.left + a && r.x <= s.right + a && r.y >= s.top + l && r.y <= s.bottom + l;
            u && this.emitEvent("tap", [i, n])
        }, n.prototype.destroy = function() {
            this.pointerDone(), this.unbindTap()
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, r, o) {
            return e(t, i, n, r, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function(t, e, i, n, r) {
        function o(t, e) {
            this.direction = t, this.parent = e, this._create()
        }

        function s(t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
        }
        var a = "http://www.w3.org/2000/svg",
            l = function() {
                function t() {
                    if (void 0 !== e) return e;
                    var t = document.createElement("div");
                    return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == a
                }
                var e;
                return t
            }();
        return o.prototype = new n, o.prototype._create = function() {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            if (e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), i.setUnselectable(e), l()) {
                var n = this.createSVG();
                e.appendChild(n)
            } else this.setArrowText(), e.className += " no-svg";
            var r = this;
            this.onCellSelect = function() {
                r.update()
            }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(t, e) {
                r.parent.childUIPointerDown(e)
            })
        }, o.prototype.activate = function() {
            this.update(), this.bindTap(this.element), e.bind(this.element, "click", this), this.parent.element.appendChild(this.element)
        }, o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), e.unbind(this.element, "click", this)
        }, o.prototype.createSVG = function() {
            var t = document.createElementNS(a, "svg");
            t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(a, "path"),
                i = s(this.parent.options.arrowShape);
            return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, o.prototype.setArrowText = function() {
            var t = this.parent.options,
                e = this.isLeft ? t.leftArrowText : t.rightArrowText;
            r.setText(this.element, e)
        }, o.prototype.onTap = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, o.prototype.handleEvent = r.handleEvent, o.prototype.onclick = function() {
            var t = document.activeElement;
            t && t == this.element && this.onTap()
        }, o.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, o.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, o.prototype.update = function() {
            var t = this.parent.cells;
            if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
            var e = t.length ? t.length - 1 : 0,
                i = this.isPrevious ? 0 : e,
                n = this.parent.selectedIndex == i ? "disable" : "enable";
            this[n]()
        }, o.prototype.destroy = function() {
            this.deactivate()
        }, r.extend(i.defaults, {
            prevNextButtons: !0,
            leftArrowText: "‹",
            rightArrowText: "›",
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), i.createMethods.push("_createPrevNextButtons"), i.prototype._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new o(-1, this), this.nextButton = new o(1, this), this.on("activate", this.activatePrevNextButtons))
        }, i.prototype.activatePrevNextButtons = function() {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, i.prototype.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, i.PrevNextButton = o, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, r, o) {
            return e(t, i, n, r, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function(t, e, i, n, r) {
        function o(t) {
            this.parent = t, this._create()
        }
        return o.prototype = new n, o.prototype._create = function() {
            this.holder = document.createElement("ol"),
                this.holder.className = "flickity-page-dots", i.setUnselectable(this.holder), this.dots = [];
            var t = this;
            this.onCellSelect = function() {
                t.updateSelected()
            }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(e, i) {
                t.parent.childUIPointerDown(i)
            })
        }, o.prototype.activate = function() {
            this.setDots(), this.updateSelected(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
        }, o.prototype.deactivate = function() {
            this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this)
        }, o.prototype.setDots = function() {
            var t = this.parent.cells.length - this.dots.length;
            t > 0 ? this.addDots(t) : 0 > t && this.removeDots(-t)
        }, o.prototype.addDots = function(t) {
            for (var e = document.createDocumentFragment(), i = []; t;) {
                var n = document.createElement("li");
                n.className = "dot", e.appendChild(n), i.push(n), t--
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(i)
        }, o.prototype.removeDots = function(t) {
            for (var e = this.dots.splice(this.dots.length - t, t), i = 0, n = e.length; n > i; i++) {
                var r = e[i];
                this.holder.removeChild(r)
            }
        }, o.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
        }, o.prototype.onTap = function(t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var i = r.indexOf(this.dots, e);
                this.parent.select(i)
            }
        }, o.prototype.destroy = function() {
            this.deactivate()
        }, i.PageDots = o, r.extend(i.defaults, {
            pageDots: !0
        }), i.createMethods.push("_createPageDots"), i.prototype._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new o(this), this.on("activate", this.activatePageDots), this.on("cellAddedRemoved", this.onCellAddedRemovedPageDots), this.on("deactivate", this.deactivatePageDots))
        }, i.prototype.activatePageDots = function() {
            this.pageDots.activate()
        }, i.prototype.onCellAddedRemovedPageDots = function() {
            this.pageDots.setDots()
        }, i.prototype.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }, i.PageDots = o, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["eventEmitter/EventEmitter", "eventie/eventie", "./flickity"], function(t, i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("eventie"), require("./flickity")) : e(t.EventEmitter, t.eventie, t.Flickity)
    }(window, function(t, e, i) {
        function n(t) {
            if (this.isPlaying = !1, this.parent = t, o) {
                var e = this;
                this.onVisibilityChange = function() {
                    e.visibilityChange()
                }
            }
        }
        var r, o;
        return "hidden" in document ? (r = "hidden", o = "visibilitychange") : "webkitHidden" in document && (r = "webkitHidden", o = "webkitvisibilitychange"), n.prototype = new t, n.prototype.play = function() {
            this.isPlaying = !0, delete this.isPaused, o && document.addEventListener(o, this.onVisibilityChange, !1), this.tick()
        }, n.prototype.tick = function() {
            if (this.isPlaying && !this.isPaused) {
                this.tickTime = new Date;
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.timeout = setTimeout(function() {
                    e.parent.next(!0), e.tick()
                }, t)
            }
        }, n.prototype.stop = function() {
            this.isPlaying = !1, delete this.isPaused, this.clear(), o && document.removeEventListener(o, this.onVisibilityChange, !1)
        }, n.prototype.clear = function() {
            clearTimeout(this.timeout)
        }, n.prototype.pause = function() {
            this.isPlaying && (this.isPaused = !0, this.clear())
        }, n.prototype.unpause = function() {
            this.isPaused && this.play()
        }, n.prototype.visibilityChange = function() {
            var t = document[r];
            this[t ? "pause" : "unpause"]()
        }, i.createMethods.push("_createPlayer"), i.prototype._createPlayer = function() {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, i.prototype.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(), e.bind(this.element, "mouseenter", this), this.isMouseenterBound = !0)
        }, i.prototype.stopPlayer = function() {
            this.player.stop()
        }, i.prototype.deactivatePlayer = function() {
            this.player.stop(), this.isMouseenterBound && (e.unbind(this.element, "mouseenter", this), delete this.isMouseenterBound)
        }, i.prototype.onmouseenter = function() {
            this.player.pause(), e.bind(this.element, "mouseleave", this)
        }, i.prototype.onmouseleave = function() {
            this.player.unpause(), e.unbind(this.element, "mouseleave", this)
        }, i.Player = n, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        function n(t) {
            for (var e = document.createDocumentFragment(), i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                e.appendChild(r.element)
            }
            return e
        }
        return e.prototype.insert = function(t, e) {
            var i = this._makeCells(t);
            if (i && i.length) {
                var r = this.cells.length;
                e = void 0 === e ? r : e;
                var o = n(i),
                    s = e == r;
                if (s) this.slider.appendChild(o);
                else {
                    var a = this.cells[e].element;
                    this.slider.insertBefore(o, a)
                }
                if (0 === e) this.cells = i.concat(this.cells);
                else if (s) this.cells = this.cells.concat(i);
                else {
                    var l = this.cells.splice(e, r - e);
                    this.cells = this.cells.concat(i).concat(l)
                }
                this._sizeCells(i);
                var u = e > this.selectedIndex ? 0 : i.length;
                this._cellAddedRemoved(e, u)
            }
        }, e.prototype.append = function(t) {
            this.insert(t, this.cells.length)
        }, e.prototype.prepend = function(t) {
            this.insert(t, 0)
        }, e.prototype.remove = function(t) {
            var e, n, r, o = this.getCells(t),
                s = 0;
            for (e = 0, n = o.length; n > e; e++) {
                r = o[e];
                var a = i.indexOf(this.cells, r) < this.selectedIndex;
                s -= a ? 1 : 0
            }
            for (e = 0, n = o.length; n > e; e++) r = o[e], r.remove(), i.removeFrom(this.cells, r);
            o.length && this._cellAddedRemoved(0, s)
        }, e.prototype._cellAddedRemoved = function(t, e) {
            e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.cells.length - 1, this.selectedIndex)), this.emitEvent("cellAddedRemoved", [t, e]), this.cellChange(t, !0)
        }, e.prototype.cellSizeChange = function(t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var n = i.indexOf(this.cells, e);
                this.cellChange(n)
            }
        }, e.prototype.cellChange = function(t, e) {
            var i = this.slideableWidth;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.options.freeScroll ? (this.x += i - this.slideableWidth, this.positionSlider()) : (e && this.positionSliderAtSelected(), this.select(this.selectedIndex))
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["classie/classie", "eventie/eventie", "./flickity", "fizzy-ui-utils/utils"], function(i, n, r, o) {
            return e(t, i, n, r, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("fizzy-ui-utils")) : e(t, t.classie, t.eventie, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i, n, r) {
        function o(t) {
            if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [t];
            var e = t.querySelectorAll("img[data-flickity-lazyload]");
            return r.makeArray(e)
        }

        function s(t, e) {
            this.img = t, this.flickity = e, this.load()
        }
        return n.createMethods.push("_createLazyload"), n.prototype._createLazyload = function() {
            this.on("cellSelect", this.lazyLoad)
        }, n.prototype.lazyLoad = function() {
            var t = this.options.lazyLoad;
            if (t) {
                for (var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = [], r = 0, a = i.length; a > r; r++) {
                    var l = i[r],
                        u = o(l);
                    n = n.concat(u)
                }
                for (r = 0, a = n.length; a > r; r++) {
                    var h = n[r];
                    new s(h, this)
                }
            }
        }, s.prototype.handleEvent = r.handleEvent, s.prototype.load = function() {
            i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload")
        }, s.prototype.onload = function(t) {
            this.complete(t, "flickity-lazyloaded")
        }, s.prototype.onerror = function() {
            this.complete(event, "flickity-lazyerror")
        }, s.prototype.complete = function(t, n) {
            i.unbind(this.img, "load", this), i.unbind(this.img, "error", this);
            var r = this.flickity.getParentCell(this.img),
                o = r && r.element;
            this.flickity.cellSizeChange(o), e.add(this.img, n), this.flickity.dispatchEvent("lazyLoad", t, o)
        }, n.LazyLoader = s, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, function(t) {
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["classie/classie", "flickity/js/index", "fizzy-ui-utils/utils"], function(i, n, r) {
            return e(t, i, n, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        return i.createMethods.push("_createAsNavFor"), i.prototype._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout(function() {
                    e.setNavCompanion(t)
                })
            }
        }, i.prototype.setNavCompanion = function(t) {
            t = n.getQueryElement(t);
            var e = i.data(t);
            if (e && e != this) {
                this.navCompanion = e;
                var r = this;
                this.onNavCompanionSelect = function() {
                    r.navCompanionSelect()
                }, e.on("cellSelect", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect()
            }
        }, i.prototype.navCompanionSelect = function() {
            if (this.navCompanion) {
                var t = this.navCompanion.selectedIndex;
                this.select(t), this.removeNavSelectedElement(), this.selectedIndex == t && (this.navSelectedElement = this.cells[t].element, e.add(this.navSelectedElement, "is-nav-selected"))
            }
        }, i.prototype.activateAsNavFor = function() {
            this.navCompanionSelect()
        }, i.prototype.removeNavSelectedElement = function() {
            this.navSelectedElement && (e.remove(this.navSelectedElement, "is-nav-selected"), delete this.navSelectedElement)
        }, i.prototype.onNavStaticClick = function(t, e, i, n) {
            "number" == typeof n && this.navCompanion.select(n)
        }, i.prototype.deactivateAsNavFor = function() {
            this.removeNavSelectedElement()
        }, i.prototype.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("cellSelect", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function r(t) {
            return "[object Array]" === p.call(t)
        }

        function o(t) {
            var e = [];
            if (r(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, i) {
            if (!(this instanceof s)) return new s(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var u = t.jQuery,
            h = t.console,
            c = "undefined" != typeof h,
            p = Object.prototype.toString;
        s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var r = i.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var a = r[o];
                        this.addImage(a)
                    }
            }
        }, s.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, s.prototype.check = function() {
            function t(t, r) {
                return e.options.debug && c && h.log("confirm", t, r), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var r = 0; n > r; r++) {
                var o = this.images[r];
                o.on("confirm", t), o.check()
            }
        }, s.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, s.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, u && (u.fn.imagesLoaded = function(t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(u(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
    }(window, function(t, e, i) {
        return e.createMethods.push("_createImagesLoaded"), e.prototype._createImagesLoaded = function() {
            this.on("activate", this.imagesLoaded)
        }, e.prototype.imagesLoaded = function() {
            function t(t, i) {
                var n = e.getParentCell(i.img);
                e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected()
            }
            if (this.options.imagesLoaded) {
                var e = this;
                i(this.slider).on("progress", t)
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], function(i) {
            return e(i, t, t.document, t.Math)
        }) : "undefined" != typeof exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
    }("undefined" != typeof window ? window : this, function(t, e, i, n, r) {
        var o = t(e),
            s = t(i);
        t.fn.fullpage = function(a) {
            function l(t) {
                t.find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != a.controlArrowColor && (t.find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + a.controlArrowColor), t.find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + a.controlArrowColor + " transparent transparent")), a.loopHorizontal || t.find(".fp-controlArrow.fp-prev").hide()
            }

            function u() {
                ct.append('<div id="fp-nav"><ul></ul></div>'), mt = t("#fp-nav"), mt.addClass(function() {
                    return a.showActiveTooltip ? "fp-show-active " + a.navigationPosition : a.navigationPosition
                });
                for (var e = 0; e < t(".fp-section").length; e++) {
                    var i = "";
                    a.anchors.length && (i = a.anchors[e]);
                    var i = '<li><a href="#' + i + '"><span></span></a>',
                        n = a.navigationTooltips[e];
                    "undefined" != typeof n && "" !== n && (i += '<div class="fp-tooltip ' + a.navigationPosition + '">' + n + "</div>"), i += "</li>", mt.find("ul").append(i)
                }
            }

            function h() {
                t(".fp-section").each(function() {
                    var e = t(this).find(".fp-slide");
                    e.length ? e.each(function() {
                        q(t(this))
                    }) : q(t(this))
                }), c()
            }

            function c() {
                var e = t(".fp-section.active"),
                    i = e.find("SLIDES_WRAPPER"),
                    n = e.find(".fp-scrollable");
                i.length && (n = i.find(".fp-slide.active")), n.mouseover(), P(e), k(e), t.isFunction(a.afterLoad) && a.afterLoad.call(e, e.data("anchor"), e.index(".fp-section") + 1), t.isFunction(a.afterRender) && a.afterRender.call(xt)
            }

            function p() {
                var e;
                if (!a.autoScrolling || a.scrollBar) {
                    for (var r = o.scrollTop(), s = 0, l = n.abs(r - i.querySelectorAll(".fp-section")[0].offsetTop), u = i.querySelectorAll(".fp-section"), h = 0; h < u.length; ++h) {
                        var c = n.abs(r - u[h].offsetTop);
                        l > c && (s = h, l = c)
                    }
                    e = t(u).eq(s)
                }
                if (!a.autoScrolling || a.scrollBar) {
                    if (!e.hasClass("active")) {
                        if (Rt = !0, r = t(".fp-section.active"), s = r.index(".fp-section") + 1, l = j(e), u = e.data("anchor"), h = e.index(".fp-section") + 1, c = e.find(".fp-slide.active"), c.length) var p = c.data("anchor"),
                            f = c.index();
                        Tt && (e.addClass("active").siblings().removeClass("active"), t.isFunction(a.onLeave) && a.onLeave.call(r, s, h, l), t.isFunction(a.afterLoad) && a.afterLoad.call(e, u, h), P(e), N(u, h - 1), a.anchors.length && (ft = u, $(f, p, u, h))), clearTimeout(At), At = setTimeout(function() {
                            Rt = !1
                        }, 100)
                    }
                    a.fitToSection && (clearTimeout(Lt), Lt = setTimeout(function() {
                        Tt && (t(".fp-section.active").is(e) && (wt = !0), T(e), wt = !1)
                    }, 1e3))
                }
            }

            function f(t) {
                return t.find(".fp-slides").length ? t.find(".fp-slide.active").find(".fp-scrollable") : t.find(".fp-scrollable")
            }

            function d(t, e) {
                if (Ct.m[t]) {
                    var i, n;
                    if ("down" == t ? (i = "bottom", n = pt.moveSectionDown) : (i = "top", n = pt.moveSectionUp), 0 < e.length) {
                        if (!(i = "top" === i ? !e.scrollTop() : "bottom" === i ? e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0)) return !0;
                        n()
                    } else n()
                }
            }

            function m(e) {
                var i = e.originalEvent;
                if (!g(e.target) && v(i)) {
                    a.autoScrolling && e.preventDefault(), e = t(".fp-section.active");
                    var r = f(e);
                    Tt && !vt && (i = it(i), Mt = i.y, Nt = i.x, e.find(".fp-slides").length && n.abs(It - Nt) > n.abs(Dt - Mt) ? n.abs(It - Nt) > o.width() / 100 * a.touchSensitivity && (It > Nt ? Ct.m.right && pt.moveSlideRight() : Ct.m.left && pt.moveSlideLeft()) : a.autoScrolling && n.abs(Dt - Mt) > o.height() / 100 * a.touchSensitivity && (Dt > Mt ? d("down", r) : Mt > Dt && d("up", r)))
                }
            }

            function g(e, i) {
                i = i || 0;
                var n = t(e).parent();
                return i < a.normalScrollElementTouchThreshold && n.is(a.normalScrollElements) ? !0 : i == a.normalScrollElementTouchThreshold ? !1 : g(n, ++i)
            }

            function v(t) {
                return "undefined" == typeof t.pointerType || "mouse" != t.pointerType
            }

            function y(t) {
                t = t.originalEvent, a.fitToSection && ht.stop(), v(t) && (t = it(t), Dt = t.y, It = t.x)
            }

            function _(t, e) {
                for (var i = 0, r = t.slice(n.max(t.length - e, 1)), o = 0; o < r.length; o++) i += r[o];
                return n.ceil(i / e)
            }

            function x(i) {
                var r = (new Date).getTime();
                if (a.autoScrolling && !gt) {
                    i = i || e.event;
                    var o = i.wheelDelta || -i.deltaY || -i.detail,
                        s = n.max(-1, n.min(1, o));
                    return 149 < St.length && St.shift(), St.push(n.abs(o)), a.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1), i = t(".fp-section.active"), i = f(i), o = r - jt, jt = r, o > 200 && (St = []), Tt && (r = _(St, 10), o = _(St, 70), r >= o && (0 > s ? d("down", i) : d("up", i))), !1
                }
                a.fitToSection && ht.stop()
            }

            function b(e) {
                var i = t(".fp-section.active").find(".fp-slides"),
                    n = i.find(".fp-slide").length;
                if (!(!i.length || vt || 2 > n)) {
                    var n = i.find(".fp-slide.active"),
                        r = null,
                        r = "prev" === e ? n.prev(".fp-slide") : n.next(".fp-slide");
                    if (!r.length) {
                        if (!a.loopHorizontal) return;
                        r = n.siblings("prev" === e ? ":last" : ":first")
                    }
                    vt = !0, O(i, r)
                }
            }

            function w() {
                t(".fp-slide.active").each(function() {
                    nt(t(this), "internal")
                })
            }

            function T(e, i, n) {
                var r = e.position();
                if ("undefined" != typeof r && (i = {
                        element: e,
                        callback: i,
                        isMovementUp: n,
                        dest: r,
                        dtop: r.top,
                        yMovement: j(e),
                        anchorLink: e.data("anchor"),
                        sectionIndex: e.index(".fp-section"),
                        activeSlide: e.find(".fp-slide.active"),
                        activeSection: t(".fp-section.active"),
                        leavingSection: t(".fp-section.active").index(".fp-section") + 1,
                        localIsResizing: wt
                    }, !(i.activeSection.is(e) && !wt || a.scrollBar && o.scrollTop() === i.dtop))) {
                    if (i.activeSlide.length) var s = i.activeSlide.data("anchor"),
                        l = i.activeSlide.index();
                    if (a.autoScrolling && a.continuousVertical && "undefined" != typeof i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && (i.isMovementUp ? t(".fp-section.active").before(i.activeSection.nextAll(".fp-section")) : t(".fp-section.active").after(i.activeSection.prevAll(".fp-section").get().reverse()), rt(t(".fp-section.active").position().top), w(), i.wrapAroundElements = i.activeSection, i.dest = i.element.position(), i.dtop = i.dest.top, i.yMovement = j(i.element)), t.isFunction(a.onLeave) && !i.localIsResizing) {
                        if (!1 === a.onLeave.call(i.activeSection, i.leavingSection, i.sectionIndex + 1, i.yMovement)) return;
                        A(i.activeSection)
                    }
                    e.addClass("active").siblings().removeClass("active"), Tt = !1, $(l, s, i.anchorLink, i.sectionIndex), S(i), ft = i.anchorLink, N(i.anchorLink, i.sectionIndex)
                }
            }

            function S(e) {
                if (a.css3 && a.autoScrolling && !a.scrollBar) H("translate3d(0px, -" + e.dtop + "px, 0px)", !0), a.scrollingSpeed ? Pt = setTimeout(function() {
                    E(e)
                }, a.scrollingSpeed) : E(e);
                else {
                    var i = C(e);
                    t(i.element).animate(i.options, a.scrollingSpeed, a.easing).promise().done(function() {
                        E(e)
                    })
                }
            }

            function C(t) {
                var e = {};
                return a.autoScrolling && !a.scrollBar ? (e.options = {
                    top: -t.dtop
                }, e.element = ".fullpage-wrapper") : (e.options = {
                    scrollTop: t.dtop
                }, e.element = "html, body"), e
            }

            function E(e) {
                e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(".fp-section:first").before(e.wrapAroundElements) : t(".fp-section:last").after(e.wrapAroundElements), rt(t(".fp-section.active").position().top), w()), e.element.find(".fp-scrollable").mouseover(), t.isFunction(a.afterLoad) && !e.localIsResizing && a.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), P(e.element), k(e.element), Tt = !0, t.isFunction(e.callback) && e.callback.call(this)
            }

            function P(e) {
                var i = e.find(".fp-slide.active");
                i.length && (e = t(i)), e.find("img[data-src], video[data-src], audio[data-src]").each(function() {
                    t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src")
                })
            }

            function k(e) {
                e.find("video, audio").each(function() {
                    var e = t(this).get(0);
                    e.hasAttribute("autoplay") && "function" == typeof e.play && e.play()
                })
            }

            function A(e) {
                e.find("video, audio").each(function() {
                    var e = t(this).get(0);
                    e.hasAttribute("data-ignore") || "function" != typeof e.pause || e.pause()
                })
            }

            function L() {
                if (!Rt && !a.lockAnchors) {
                    var t = e.location.hash.replace("#", "").split("/"),
                        i = t[0],
                        t = t[1];
                    if (i.length) {
                        var n = "undefined" == typeof ft,
                            r = "undefined" == typeof ft && "undefined" == typeof t && !vt;
                        (i && i !== ft && !n || r || !vt && dt != t) && X(i, t)
                    }
                }
            }

            function z(t) {
                Tt && (t.pageY < qt ? pt.moveSectionUp() : t.pageY > qt && pt.moveSectionDown()), qt = t.pageY
            }

            function O(e, i) {
                var r = i.position(),
                    o = i.index(),
                    s = e.closest(".fp-section"),
                    l = s.index(".fp-section"),
                    u = s.data("anchor"),
                    h = s.find(".fp-slidesNav"),
                    c = G(i),
                    p = wt;
                if (a.onSlideLeave) {
                    var f, d = s.find(".fp-slide.active"),
                        m = d.index();
                    if (f = m == o ? "none" : m > o ? "left" : "right", !p && "none" !== f && t.isFunction(a.onSlideLeave) && !1 === a.onSlideLeave.call(d, u, l + 1, m, f, o)) return void(vt = !1)
                }
                i.addClass("active").siblings().removeClass("active"), P(i), !a.loopHorizontal && a.controlArrows && (s.find(".fp-controlArrow.fp-prev").toggle(0 !== o), s.find(".fp-controlArrow.fp-next").toggle(!i.is(":last-child"))), s.hasClass("active") && $(o, c, u, l);
                var g = function() {
                    p || t.isFunction(a.afterSlideLoad) && a.afterSlideLoad.call(i, u, l + 1, c, o), vt = !1
                };
                a.css3 ? (r = "translate3d(-" + n.round(r.left) + "px, 0px, 0px)", I(e.find(".fp-slidesContainer"), 0 < a.scrollingSpeed).css(ot(r)), kt = setTimeout(function() {
                    g()
                }, a.scrollingSpeed, a.easing)) : e.animate({
                    scrollLeft: n.round(r.left)
                }, a.scrollingSpeed, a.easing, function() {
                    g()
                }), h.find(".active").removeClass("active"), h.find("li").eq(o).find("a").addClass("active")
            }

            function R() {
                if (D(), yt) {
                    var e = t(i.activeElement);
                    e.is("textarea") || e.is("input") || e.is("select") || (e = o.height(), n.abs(e - Ft) > 20 * n.max(Ft, e) / 100 && (pt.reBuild(!0), Ft = e))
                } else clearTimeout(Et), Et = setTimeout(function() {
                    pt.reBuild(!0)
                }, 350)
            }

            function D() {
                var t = a.responsive || a.responsiveWidth,
                    e = a.responsiveHeight;
                t && pt.setResponsive(o.width() < t), e && (xt.hasClass("fp-responsive") || pt.setResponsive(o.height() < e))
            }

            function I(t) {
                var e = "all " + a.scrollingSpeed + "ms " + a.easingcss3;
                return t.removeClass("fp-notransition"), t.css({
                    "-webkit-transition": e,
                    transition: e
                })
            }

            function M(t, e) {
                if (825 > t || 900 > e) {
                    var i = n.min(100 * t / 825, 100 * e / 900).toFixed(2);
                    ct.css("font-size", i + "%")
                } else ct.css("font-size", "100%")
            }

            function N(e, i) {
                a.menu && (t(a.menu).find(".active").removeClass("active"), t(a.menu).find('[data-menuanchor="' + e + '"]').addClass("active")), a.navigation && (t("#fp-nav").find(".active").removeClass("active"), e ? t("#fp-nav").find('a[href="#' + e + '"]').addClass("active") : t("#fp-nav").find("li").eq(i).find("a").addClass("active"))
            }

            function j(e) {
                var i = t(".fp-section.active").index(".fp-section");
                return e = e.index(".fp-section"), i == e ? "none" : i > e ? "up" : "down"
            }

            function q(t) {
                t.css("overflow", "hidden");
                var e, i = t.closest(".fp-section"),
                    n = t.find(".fp-scrollable");
                n.length ? e = n.get(0).scrollHeight : (e = t.get(0).scrollHeight, a.verticalCentered && (e = t.find(".fp-tableCell").get(0).scrollHeight)), i = bt - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top")), e > i ? n.length ? n.css("height", i + "px").parent().css("height", i + "px") : (a.verticalCentered ? t.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : t.wrapInner('<div class="fp-scrollable" />'), t.find(".fp-scrollable").slimScroll({
                    allowPageScroll: !0,
                    height: i + "px",
                    size: "10px",
                    alwaysVisible: !0
                })) : F(t), t.css("overflow", "")
            }

            function F(t) {
                t.find(".fp-scrollable").children().first().unwrap().unwrap(), t.find(".slimScrollBar").remove(), t.find(".slimScrollRail").remove()
            }

            function W(t) {
                t.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + B(t) + 'px;" />')
            }

            function B(t) {
                var e = bt;
                return (a.paddingTop || a.paddingBottom) && (e = t, e.hasClass("fp-section") || (e = t.closest(".fp-section")), t = parseInt(e.css("padding-top")) + parseInt(e.css("padding-bottom")), e = bt - t), e
            }

            function H(t, e) {
                e ? I(xt) : xt.addClass("fp-notransition"), xt.css(ot(t)), setTimeout(function() {
                    xt.removeClass("fp-notransition")
                }, 10)
            }

            function U(e) {
                var i = t('.fp-section[data-anchor="' + e + '"]');
                return i.length || (i = t(".fp-section").eq(e - 1)), i
            }

            function X(t, e) {
                var i = U(t);
                "undefined" == typeof e && (e = 0), t === ft || i.hasClass("active") ? Y(i, e) : T(i, function() {
                    Y(i, e)
                })
            }

            function Y(t, e) {
                if ("undefined" != typeof e) {
                    var i, n = t.find(".fp-slides");
                    i = t.find(".fp-slides");
                    var r = i.find('.fp-slide[data-anchor="' + e + '"]');
                    r.length || (r = i.find(".fp-slide").eq(e)), i = r, i.length && O(n, i)
                }
            }

            function V(t, e) {
                t.append('<div class="fp-slidesNav"><ul></ul></div>');
                var i = t.find(".fp-slidesNav");
                i.addClass(a.slidesNavPosition);
                for (var n = 0; e > n; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
                i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass("active")
            }

            function $(t, e, i, n) {
                n = "", a.anchors.length && !a.lockAnchors && (t ? ("undefined" != typeof i && (n = i), "undefined" == typeof e && (e = t), dt = e, Q(n + "/" + e)) : ("undefined" != typeof t && (dt = e), Q(i))), Z()
            }

            function Q(t) {
                if (a.recordHistory) location.hash = t;
                else if (yt || _t) history.replaceState(r, r, "#" + t);
                else {
                    var i = e.location.href.split("#")[0];
                    e.location.replace(i + "#" + t)
                }
            }

            function G(t) {
                var e = t.data("anchor");
                return t = t.index(), "undefined" == typeof e && (e = t), e
            }

            function Z() {
                var e = t(".fp-section.active"),
                    i = e.find(".fp-slide.active"),
                    n = e.data("anchor"),
                    r = G(i),
                    e = e.index(".fp-section"),
                    e = String(e);
                a.anchors.length && (e = n), i.length && (e = e + "-" + r), e = e.replace("/", "-").replace("#", ""), ct[0].className = ct[0].className.replace(RegExp("\\b\\s?fp-viewing-[^\\s]+\\b", "g"), ""), ct.addClass("fp-viewing-" + e)
            }

            function K() {
                var t, n = i.createElement("p"),
                    o = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                i.body.insertBefore(n, null);
                for (var s in o) n.style[s] !== r && (n.style[s] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(o[s]));
                return i.body.removeChild(n), t !== r && 0 < t.length && "none" !== t
            }

            function J() {
                if (yt || _t) {
                    var e = et();
                    t(".fullpage-wrapper").off("touchstart " + e.down).on("touchstart " + e.down, y), t(".fullpage-wrapper").off("touchmove " + e.move).on("touchmove " + e.move, m)
                }
            }

            function tt() {
                if (yt || _t) {
                    var e = et();
                    t(".fullpage-wrapper").off("touchstart " + e.down), t(".fullpage-wrapper").off("touchmove " + e.move)
                }
            }

            function et() {
                return e.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }

            function it(t) {
                var e = [];
                return e.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, _t && v(t) && a.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
            }

            function nt(t, e) {
                pt.setScrollingSpeed(0, "internal"), "undefined" != typeof e && (wt = !0), O(t.closest(".fp-slides"), t), "undefined" != typeof e && (wt = !1), pt.setScrollingSpeed(Ot.scrollingSpeed, "internal")
            }

            function rt(t) {
                a.scrollBar ? xt.scrollTop(t) : a.css3 ? H("translate3d(0px, -" + t + "px, 0px)", !1) : xt.css("top", -t)
            }

            function ot(t) {
                return {
                    "-webkit-transform": t,
                    "-moz-transform": t,
                    "-ms-transform": t,
                    transform: t
                }
            }

            function st(t, e, i) {
                switch (e) {
                    case "up":
                        Ct[i].up = t;
                        break;
                    case "down":
                        Ct[i].down = t;
                        break;
                    case "left":
                        Ct[i].left = t;
                        break;
                    case "right":
                        Ct[i].right = t;
                        break;
                    case "all":
                        "m" == i ? pt.setAllowScrolling(t) : pt.setKeyboardScrolling(t)
                }
            }

            function at() {
                rt(0), t("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove(), t(".fp-section").css({
                    height: "",
                    "background-color": "",
                    padding: ""
                }), t(".fp-slide").css({
                    width: ""
                }), xt.css({
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), t(".fp-section, .fp-slide").each(function() {
                    F(t(this)), t(this).removeClass("fp-table active")
                }), xt.addClass("fp-notransition"), xt.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function() {
                    t(this).replaceWith(this.childNodes)
                }), ht.scrollTop(0)
            }

            function lt(t, e, i) {
                a[t] = e, "internal" !== i && (Ot[t] = e)
            }

            function ut(t, e) {
                console && console[t] && console[t]("fullPage: " + e)
            }
            var ht = t("html, body"),
                ct = t("body"),
                pt = t.fn.fullpage;
            a = t.extend({
                    menu: !1,
                    anchors: [],
                    lockAnchors: !1,
                    navigation: !1,
                    navigationPosition: "right",
                    navigationTooltips: [],
                    showActiveTooltip: !1,
                    slidesNavigation: !1,
                    slidesNavPosition: "bottom",
                    scrollBar: !1,
                    css3: !0,
                    scrollingSpeed: 700,
                    autoScrolling: !0,
                    fitToSection: !0,
                    easing: "easeInOutCubic",
                    easingcss3: "ease",
                    loopBottom: !1,
                    loopTop: !1,
                    loopHorizontal: !0,
                    continuousVertical: !1,
                    normalScrollElements: null,
                    scrollOverflow: !1,
                    touchSensitivity: 5,
                    normalScrollElementTouchThreshold: 5,
                    keyboardScrolling: !0,
                    animateAnchor: !0,
                    recordHistory: !0,
                    controlArrows: !0,
                    controlArrowColor: "#fff",
                    verticalCentered: !0,
                    resize: !1,
                    sectionsColor: [],
                    paddingTop: 0,
                    paddingBottom: 0,
                    fixedElements: null,
                    responsive: 0,
                    responsiveWidth: 0,
                    responsiveHeight: 0,
                    sectionSelector: ".section",
                    slideSelector: ".slide",
                    afterLoad: null,
                    onLeave: null,
                    afterRender: null,
                    afterResize: null,
                    afterReBuild: null,
                    afterSlideLoad: null,
                    onSlideLeave: null
                }, a),
                function() {
                    a.continuousVertical && (a.loopTop || a.loopBottom) && (a.continuousVertical = !1, ut("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.scrollBar && a.scrollOverflow && ut("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), a.continuousVertical && a.scrollBar && (a.continuousVertical = !1, ut("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), t.each(a.anchors, function(e, i) {
                        (t("#" + i).length || t('[name="' + i + '"]').length) && ut("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).")
                    })
                }(), t.extend(t.easing, {
                    easeInOutCubic: function(t, e, i, n, r) {
                        return 1 > (e /= r / 2) ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
                    }
                }), t.extend(t.easing, {
                    easeInQuart: function(t, e, i, n, r) {
                        return n * (e /= r) * e * e * e + i
                    }
                }), pt.setAutoScrolling = function(e, i) {
                    lt("autoScrolling", e, i);
                    var n = t(".fp-section.active");
                    a.autoScrolling && !a.scrollBar ? (ht.css({
                        overflow: "hidden",
                        height: "100%"
                    }), pt.setRecordHistory(a.recordHistory, "internal"), xt.css({
                        "-ms-touch-action": "none",
                        "touch-action": "none"
                    }), n.length && rt(n.position().top)) : (ht.css({
                        overflow: "visible",
                        height: "initial"
                    }), pt.setRecordHistory(!1, "internal"), xt.css({
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), rt(0), n.length && ht.scrollTop(n.position().top))
                }, pt.setRecordHistory = function(t, e) {
                    lt("recordHistory", t, e)
                }, pt.setScrollingSpeed = function(t, e) {
                    lt("scrollingSpeed", t, e)
                }, pt.setFitToSection = function(t, e) {
                    lt("fitToSection", t, e)
                }, pt.setLockAnchors = function(t) {
                    a.lockAnchors = t
                }, pt.setMouseWheelScrolling = function(t) {
                    t ? i.addEventListener ? (i.addEventListener("mousewheel", x, !1), i.addEventListener("wheel", x, !1), i.addEventListener("DOMMouseScroll", x, !1)) : i.attachEvent("onmousewheel", x) : i.addEventListener ? (i.removeEventListener("mousewheel", x, !1), i.removeEventListener("wheel", x, !1), i.removeEventListener("DOMMouseScroll", x, !1)) : i.detachEvent("onmousewheel", x)
                }, pt.setAllowScrolling = function(e, i) {
                    "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
                        st(e, i, "m")
                    })) : e ? (pt.setMouseWheelScrolling(!0), J()) : (pt.setMouseWheelScrolling(!1), tt())
                }, pt.setKeyboardScrolling = function(e, i) {
                    "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function(t, i) {
                        st(e, i, "k")
                    })) : a.keyboardScrolling = e
                }, pt.moveSectionUp = function() {
                    var e = t(".fp-section.active").prev(".fp-section");
                    e.length || !a.loopTop && !a.continuousVertical || (e = t(".fp-section").last()), e.length && T(e, null, !0)
                }, pt.moveSectionDown = function() {
                    var e = t(".fp-section.active").next(".fp-section");
                    e.length || !a.loopBottom && !a.continuousVertical || (e = t(".fp-section").first()), !e.length || a.onBeforeMoveSection && t.isFunction(a.onBeforeMoveSection) && !1 === a.onBeforeMoveSection.call(this, direction, currentSlide, destiny, slides, activeSection) || T(e, null, !1)
                }, pt.silentMoveTo = function(t, e) {
                    pt.setScrollingSpeed(0, "internal"), pt.moveTo(t, e), pt.setScrollingSpeed(Ot.scrollingSpeed, "internal")
                }, pt.moveTo = function(t, e) {
                    var i = U(t);
                    "undefined" != typeof e ? X(t, e) : 0 < i.length && T(i)
                }, pt.moveSlideRight = function() {
                    b("next")
                }, pt.moveSlideLeft = function() {
                    b("prev")
                }, pt.reBuild = function(e) {
                    if (!xt.hasClass("fp-destroyed")) {
                        wt = !0;
                        var i = o.width();
                        bt = o.height(), a.resize && M(bt, i), t(".fp-section").each(function() {
                            var e = t(this).find(".fp-slides"),
                                i = t(this).find(".fp-slide");
                            a.verticalCentered && t(this).find(".fp-tableCell").css("height", B(t(this)) + "px"), t(this).css("height", bt + "px"), a.scrollOverflow && (i.length ? i.each(function() {
                                q(t(this))
                            }) : q(t(this))), 1 < i.length && O(e, e.find(".fp-slide.active"))
                        }), (i = t(".fp-section.active").index(".fp-section")) && pt.silentMoveTo(i + 1), wt = !1, t.isFunction(a.afterResize) && e && a.afterResize.call(xt), t.isFunction(a.afterReBuild) && !e && a.afterReBuild.call(xt)
                    }
                }, pt.setResponsive = function(e) {
                    var i = xt.hasClass("fp-responsive");
                    e ? i || (pt.setAutoScrolling(!1, "internal"), pt.setFitToSection(!1, "internal"), t("#fp-nav").hide(), xt.addClass("fp-responsive")) : i && (pt.setAutoScrolling(Ot.autoScrolling, "internal"), pt.setFitToSection(Ot.autoScrolling, "internal"), t("#fp-nav").show(), xt.removeClass("fp-responsive"))
                };
            var ft, dt, mt, gt, vt = !1,
                yt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                _t = "ontouchstart" in e || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                xt = t(this),
                bt = o.height(),
                wt = !1,
                Tt = !0,
                St = [],
                Ct = {
                    m: {
                        up: !0,
                        down: !0,
                        left: !0,
                        right: !0
                    }
                };
            Ct.k = t.extend(!0, {}, Ct.m);
            var Et, Pt, kt, At, Lt, zt, Ot = t.extend(!0, {}, a);
            t(this).length && (xt.css({
                height: "100%",
                position: "relative"
            }), xt.addClass("fullpage-wrapper"), t("html").addClass("fp-enabled")), a.css3 && (a.css3 = K()), pt.setAllowScrolling(!0), xt.removeClass("fp-destroyed"), t(a.sectionSelector).each(function() {
                t(this).addClass("fp-section")
            }), t(a.slideSelector).each(function() {
                t(this).addClass("fp-slide")
            }), a.navigation && u(), t(".fp-section").each(function(e) {
                var i = t(this),
                    n = t(this).find(".fp-slide"),
                    r = n.length;
                if (e || 0 !== t(".fp-section.active").length || t(this).addClass("active"), t(this).css("height", bt + "px"), a.paddingTop && t(this).css("padding-top", a.paddingTop), a.paddingBottom && t(this).css("padding-bottom", a.paddingBottom), "undefined" != typeof a.sectionsColor[e] && t(this).css("background-color", a.sectionsColor[e]), "undefined" != typeof a.anchors[e] && (t(this).attr("data-anchor", a.anchors[e]), t(this).hasClass("active") && N(a.anchors[e], e)), r > 0) {
                    e = 100 * r;
                    var o = 100 / r;
                    n.wrapAll('<div class="fp-slidesContainer" />'), n.parent().wrap('<div class="fp-slides" />'), t(this).find(".fp-slidesContainer").css("width", e + "%"), r > 1 && (a.controlArrows && l(t(this)), a.slidesNavigation && V(t(this), r)), n.each(function(e) {
                        t(this).css("width", o + "%"), a.verticalCentered && W(t(this))
                    }), i = i.find(".fp-slide.active"), i.length ? nt(i) : n.eq(0).addClass("active")
                } else a.verticalCentered && W(t(this))
            }).promise().done(function() {
                pt.setAutoScrolling(a.autoScrolling, "internal");
                var n = t(".fp-section.active").find(".fp-slide.active");
                if (n.length && (0 !== t(".fp-section.active").index(".fp-section") || 0 === t(".fp-section.active").index(".fp-section") && 0 !== n.index()) && nt(n), a.fixedElements && a.css3 && t(a.fixedElements).appendTo(ct), a.navigation && (mt.css("margin-top", "-" + mt.height() / 2 + "px"), mt.find("li").eq(t(".fp-section.active").index(".fp-section")).find("a").addClass("active")), a.menu && a.css3 && t(a.menu).closest(".fullpage-wrapper").length && t(a.menu).appendTo(ct), a.scrollOverflow ? ("complete" === i.readyState && h(), o.on("load", h)) : c(), D(), !a.animateAnchor && (n = e.location.hash.replace("#", "").split("/")[0], n.length)) {
                    var r = t('[data-anchor="' + n + '"]');
                    r.length && (a.autoScrolling ? rt(r.position().top) : (rt(0), ht.scrollTop(r.position().top)), N(n, null), t.isFunction(a.afterLoad) && a.afterLoad.call(r, n, r.index(".fp-section") + 1), r.addClass("active").siblings().removeClass("active"))
                }
                Z(), o.on("load", function() {
                    var t = e.location.hash.replace("#", "").split("/"),
                        i = t[0],
                        t = t[1];
                    i && X(i, t)
                })
            });
            var Rt = !1;
            o.on("scroll", p);
            var Dt = 0,
                It = 0,
                Mt = 0,
                Nt = 0,
                jt = (new Date).getTime();
            o.on("hashchange", L), s.keydown(function(e) {
                clearTimeout(zt);
                var i = t(":focus");
                i.is("textarea") || i.is("input") || i.is("select") || !a.keyboardScrolling || !a.autoScrolling || (-1 < t.inArray(e.which, [40, 38, 32, 33, 34]) && e.preventDefault(), zt = setTimeout(function() {
                    var i = e.shiftKey;
                    switch (gt = e.ctrlKey, e.which) {
                        case 38:
                        case 33:
                            Ct.k.up && pt.moveSectionUp();
                            break;
                        case 32:
                            if (i && Ct.k.up) {
                                pt.moveSectionUp();
                                break
                            }
                        case 40:
                        case 34:
                            Ct.k.down && pt.moveSectionDown();
                            break;
                        case 36:
                            Ct.k.up && pt.moveTo(1);
                            break;
                        case 35:
                            Ct.k.down && pt.moveTo(t(".fp-section").length);
                            break;
                        case 37:
                            Ct.k.left && pt.moveSlideLeft();
                            break;
                        case 39:
                            Ct.k.right && pt.moveSlideRight()
                    }
                }, 150))
            }), s.keyup(function(t) {
                gt = t.ctrlKey
            }), t(e).blur(function() {
                gt = !1
            }), xt.mousedown(function(t) {
                2 == t.which && (qt = t.pageY, xt.on("mousemove", z))
            }), xt.mouseup(function(t) {
                2 == t.which && xt.off("mousemove")
            });
            var qt = 0;
            s.on("click touchstart", "#fp-nav a", function(e) {
                e.preventDefault(), e = t(this).parent().index(), T(t(".fp-section").eq(e))
            }), s.on("click touchstart", ".fp-slidesNav a", function(e) {
                e.preventDefault(), e = t(this).closest(".fp-section").find(".fp-slides");
                var i = e.find(".fp-slide").eq(t(this).closest("li").index());
                O(e, i)
            }), a.normalScrollElements && (s.on("mouseenter", a.normalScrollElements, function() {
                pt.setMouseWheelScrolling(!1)
            }), s.on("mouseleave", a.normalScrollElements, function() {
                pt.setMouseWheelScrolling(!0)
            })), t(".fp-section").on("click touchstart", ".fp-controlArrow", function() {
                t(this).hasClass("fp-prev") ? Ct.m.left && pt.moveSlideLeft() : Ct.m.right && pt.moveSlideRight()
            }), o.resize(R);
            var Ft = bt;
            pt.destroy = function(e) {
                pt.setAutoScrolling(!1, "internal"), pt.setAllowScrolling(!1), pt.setKeyboardScrolling(!1), xt.addClass("fp-destroyed"), clearTimeout(kt), clearTimeout(Pt), clearTimeout(Et), clearTimeout(At), clearTimeout(Lt), o.off("scroll", p).off("hashchange", L).off("resize", R), s.off("click", "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", a.normalScrollElements).off("mouseout", a.normalScrollElements), t(".fp-section").off("click", ".fp-controlArrow"), e && at()
            }
        }
    }),
    function(e) {
        jQuery.fn.extend({
            slimScroll: function(i) {
                var n = e.extend({
                    width: "auto",
                    height: "250px",
                    size: "7px",
                    color: "#000",
                    position: "right",
                    distance: "1px",
                    start: "top",
                    opacity: .4,
                    alwaysVisible: !1,
                    disableFadeOut: !1,
                    railVisible: !1,
                    railColor: "#333",
                    railOpacity: .2,
                    railDraggable: !0,
                    railClass: "slimScrollRail",
                    barClass: "slimScrollBar",
                    wrapperClass: "slimScrollDiv",
                    allowPageScroll: !1,
                    wheelStep: 20,
                    touchScrollStep: 200,
                    borderRadius: "7px",
                    railBorderRadius: "7px"
                }, i);
                return this.each(function() {
                    function r(t) {
                        if (c) {
                            t = t || window.event;
                            var i = 0;
                            t.wheelDelta && (i = -t.wheelDelta / 120), t.detail && (i = t.detail / 3), e(t.target || t.srcTarget || t.srcElement).closest("." + n.wrapperClass).is(x.parent()) && o(i, !0), t.preventDefault && !_ && t.preventDefault(), _ || (t.returnValue = !1)
                        }
                    }

                    function o(t, e, i) {
                        _ = !1;
                        var r = t,
                            o = x.outerHeight() - w.outerHeight();
                        e && (r = parseInt(w.css("top")) + t * parseInt(n.wheelStep) / 100 * w.outerHeight(), r = Math.min(Math.max(r, 0), o), r = t > 0 ? Math.ceil(r) : Math.floor(r), w.css({
                            top: r + "px"
                        })), v = parseInt(w.css("top")) / (x.outerHeight() - w.outerHeight()), r = v * (x[0].scrollHeight - x.outerHeight()), i && (r = t, t = r / x[0].scrollHeight * x.outerHeight(), t = Math.min(Math.max(t, 0), o), w.css({
                            top: t + "px"
                        })), x.scrollTop(r), x.trigger("slimscrolling", ~~r), u(), h()
                    }

                    function s() {
                        window.addEventListener ? (this.addEventListener("DOMMouseScroll", r, !1), this.addEventListener("mousewheel", r, !1)) : document.attachEvent("onmousewheel", r)
                    }

                    function a() {
                        window.removeEventListener ? (this.removeEventListener("DOMMouseScroll", r), this.removeEventListener("mousewheel", r)) : document.detachEvent("onmousewheel", r)
                    }

                    function l() {
                        g = Math.max(x.outerHeight() / x[0].scrollHeight * x.outerHeight(), 30), w.css({
                            height: g + "px"
                        });
                        var t = g == x.outerHeight() ? "none" : "block";
                        w.css({
                            display: t
                        })
                    }

                    function u() {
                        l(), clearTimeout(d), v == ~~v ? (_ = n.allowPageScroll, y != v && x.trigger("slimscroll", 0 == ~~v ? "top" : "bottom")) : _ = !1, y = v, g >= x.outerHeight() ? _ = !0 : (w.stop(!0, !0).fadeIn("fast"), n.railVisible && T.stop(!0, !0).fadeIn("fast"))
                    }

                    function h() {
                        n.alwaysVisible || (d = setTimeout(function() {
                            n.disableFadeOut && c || p || f || (w.fadeOut("slow"), T.fadeOut("slow"))
                        }, 1e3))
                    }
                    var c, p, f, d, m, g, v, y, _ = !1,
                        x = e(this);
                    if (x.parent().hasClass(n.wrapperClass)) {
                        var b = x.scrollTop(),
                            w = x.parent().find("." + n.barClass),
                            T = x.parent().find("." + n.railClass);
                        if (l(), e.isPlainObject(i)) {
                            if ("height" in i && "auto" == i.height) {
                                x.parent().css("height", "auto"), x.css("height", "auto");
                                var S = x.parent().parent().height();
                                x.parent().css("height", S), x.css("height", S)
                            }
                            if ("scrollTo" in i) b = parseInt(n.scrollTo);
                            else if ("scrollBy" in i) b += parseInt(n.scrollBy);
                            else if ("destroy" in i) return a(), w.remove(), T.remove(), void x.unwrap();
                            o(b, !1, !0)
                        }
                    } else {
                        n.height = "auto" == i.height ? x.parent().height() : i.height, b = e("<div></div>").addClass(n.wrapperClass).css({
                            position: "relative",
                            overflow: "hidden",
                            width: n.width,
                            height: n.height
                        }), x.css({
                            overflow: "hidden",
                            width: n.width,
                            height: n.height
                        });
                        var T = e("<div></div>").addClass(n.railClass).css({
                                width: n.size,
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                display: n.alwaysVisible && n.railVisible ? "block" : "none",
                                "border-radius": n.railBorderRadius,
                                background: n.railColor,
                                opacity: n.railOpacity,
                                zIndex: 90
                            }),
                            w = e("<div></div>").addClass(n.barClass).css({
                                background: n.color,
                                width: n.size,
                                position: "absolute",
                                top: 0,
                                opacity: n.opacity,
                                display: n.alwaysVisible ? "block" : "none",
                                "border-radius": n.borderRadius,
                                BorderRadius: n.borderRadius,
                                MozBorderRadius: n.borderRadius,
                                WebkitBorderRadius: n.borderRadius,
                                zIndex: 99
                            }),
                            S = "right" == n.position ? {
                                right: n.distance
                            } : {
                                left: n.distance
                            };
                        T.css(S), w.css(S), x.wrap(b), x.parent().append(w), x.parent().append(T), n.railDraggable && w.bind("mousedown", function(i) {
                            var n = e(document);
                            return f = !0, t = parseFloat(w.css("top")), pageY = i.pageY, n.bind("mousemove.slimscroll", function(e) {
                                currTop = t + e.pageY - pageY, w.css("top", currTop), o(0, w.position().top, !1)
                            }), n.bind("mouseup.slimscroll", function(t) {
                                f = !1, h(), n.unbind(".slimscroll")
                            }), !1
                        }).bind("selectstart.slimscroll", function(t) {
                            return t.stopPropagation(), t.preventDefault(), !1
                        }), T.hover(function() {
                            u()
                        }, function() {
                            h()
                        }), w.hover(function() {
                            p = !0
                        }, function() {
                            p = !1
                        }), x.hover(function() {
                            c = !0, u(), h()
                        }, function() {
                            c = !1, h()
                        }), x.bind("touchstart", function(t, e) {
                            t.originalEvent.touches.length && (m = t.originalEvent.touches[0].pageY)
                        }), x.bind("touchmove", function(t) {
                            _ || t.originalEvent.preventDefault(), t.originalEvent.touches.length && (o((m - t.originalEvent.touches[0].pageY) / n.touchScrollStep, !0), m = t.originalEvent.touches[0].pageY)
                        }), l(), "bottom" === n.start ? (w.css({
                            top: x.outerHeight() - w.outerHeight()
                        }), o(0, !0)) : "top" !== n.start && (o(e(n.start).position().top, null, !0), n.alwaysVisible || w.hide()), s()
                    }
                }), this
            }
        }), jQuery.fn.extend({
            slimscroll: jQuery.fn.slimScroll
        })
    }(jQuery);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    o = 1e-10,
                    s = i._internals,
                    a = s.isSelector,
                    l = s.isArray,
                    u = r.prototype = i.to({}, .1, {}),
                    h = [];
                r.version = "1.17.0", u.constructor = r, u.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, u.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        o = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || o)
                        if (e) this._initted = !1, o && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var s = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._time > 0 || o) {
                        this._initted = !1, this._init();
                        for (var a, l = 1 / (1 - r), u = this._firstPT; u;) a = u.s + u.c, u.c *= l, u.s = a - u.c, u = u._next
                    }
                    return this
                }, u.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, a, l, u, h, c, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === o) && y !== t && (i = !0, y > o && (r = "onReverseComplete")), this._rawPrevTime = p = !e || t || y === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = p = !e || t || y === t ? t : o)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (u = this._time / v, h = this._easeType, c = this._easePower, (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : this._time / v < .5 ? u / 2 : 1 - u / 2) : this.ratio = this._ease.getRatio(this._time / v)), d === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === v && this._rawPrevTime === o && p !== o && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, o, s, u, c, p) {
                    s = s || 0;
                    var f, d, m, g, v = o.delay || 0,
                        y = [],
                        _ = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), u.apply(p || o.callbackScope || this, c || h)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > s && (t = n(t), t.reverse(), s *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                        d = {};
                        for (g in o) d[g] = o[g];
                        d.delay = v, m === f && u && (d.onComplete = _), y[m] = new r(t[m], e, d), v += s
                    }
                    return y
                }, r.staggerFrom = r.allFrom = function(t, e, i, n, o, s, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, o, s, a)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, o, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, o, s, a, l)
                }, r.delayedCall = function(t, e, i, n, o) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: o,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var c = function(t, e) {
                        for (var n = [], r = 0, o = t._first; o;) o instanceof i ? n[r++] = o : (e && (n[r++] = o), n = n.concat(c(o, e)), r = n.length), o = o._next;
                        return n
                    },
                    p = r.getAllTweens = function(e) {
                        return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var o, s, a, l = p(0 != r),
                        u = l.length,
                        h = i && n && r;
                    for (a = 0; u > a; a++) s = l[a], (h || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var o, u, h, c, p, f = s.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                            for (c = t.length; --c > -1;) r.killChildTweensOf(t[c], e);
                        else {
                            o = [];
                            for (h in f)
                                for (u = f[h].target.parentNode; u;) u === t && (o = o.concat(f[h].tweens)), u = u.parentNode;
                            for (p = o.length, c = 0; p > c; c++) e && o[c].totalTime(o[c].totalDuration()), o[c]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var o, s, a = p(r), l = i && n && r, u = a.length; --u > -1;) s = a[u], (l || s instanceof e || (o = s.target === s.vars.onComplete) && n || i && !o) && s.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, u.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, u.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, u.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    o = i._internals,
                    s = n._internals = {},
                    a = o.isSelector,
                    l = o.isArray,
                    u = o.lazyTweens,
                    h = o.lazyRender,
                    c = [],
                    p = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    d = s.pauseCallback = function(t, e, i, n) {
                        var o, s = t._timeline,
                            a = s._totalTime,
                            l = t._startTime,
                            u = t._rawPrevTime < 0 || 0 === t._rawPrevTime && s._reversed,
                            h = u ? 0 : r,
                            p = u ? r : 0;
                        if (e || !this._forcingPlayhead) {
                            for (s.pause(l), o = t._prev; o && o._startTime === l;) o._rawPrevTime = p, o = o._prev;
                            for (o = t._next; o && o._startTime === l;) o._rawPrevTime = h, o = o._next;
                            e && e.apply(n || s.vars.callbackScope || s, i || c), (this._forcingPlayhead || !s._paused) && s.seek(a)
                        }
                    },
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.17.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(t, e, n, r) {
                    var o = n.repeat && p.TweenMax || i;
                    return e ? this.add(new o(t, e, n), r) : this.set(t, n, r)
                }, g.from = function(t, e, n, r) {
                    return this.add((n.repeat && p.TweenMax || i).from(t, e, n), r)
                }, g.fromTo = function(t, e, n, r, o) {
                    var s = r.repeat && p.TweenMax || i;
                    return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o)
                }, g.staggerTo = function(t, e, r, o, s, l, u, h) {
                    var c, p = new n({
                        onComplete: l,
                        onCompleteParams: u,
                        callbackScope: h,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), o = o || 0, 0 > o && (t = m(t), t.reverse(), o *= -1), c = 0; c < t.length; c++) r.startAt && (r.startAt = f(r.startAt)), p.to(t[c], e, f(r), c * o);
                    return this.add(p, s)
                }, g.staggerFrom = function(t, e, i, n, r, o, s, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, o, s, a)
                }, g.staggerFromTo = function(t, e, i, n, r, o, s, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, o, s, a, l)
                }, g.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, o, s = new n(t),
                        a = s._timeline;
                    for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, r = a._first; r;) o = r._next, e && r instanceof i && r.target === r.vars.onComplete || s.add(r, r._startTime - r._delay), r = o;
                    return a.add(s, 0), s
                }, g.add = function(r, o, s, a) {
                    var u, h, c, p, f, d;
                    if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (s = s || "normal", a = a || 0, u = o, h = r.length, c = 0; h > c; c++) l(p = r[c]) && (p = new n({
                                tweens: p
                            })), this.add(p, u), "string" != typeof p && "function" != typeof p && ("sequence" === s ? u = p._startTime + p.totalDuration() / p._timeScale : "start" === s && (p._startTime -= p.delay())), u += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, o);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, d = f.rawTime() > r._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, n, r) {
                    var o = i.delayedCall(0, d, ["{self}", e, n, r], this);
                    return o.data = "isPause", this.add(o, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, r) {
                    var o;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (o = e.indexOf("="), -1 === o) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, s, a, l, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        p = this._time,
                        f = this._startTime,
                        d = this._timeScale,
                        m = this._paused;
                    if (t >= c) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (o = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = c + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== p || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = o = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== p && this._first || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== p && t > 0 && (this._active = !0), 0 === p && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= p)
                            for (n = this._first; n && (s = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        else
                            for (n = this._last; n && (s = n._prev, !this._paused || m);)(n._active || n._startTime <= p && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        this._onUpdate && (e || (u.length && h(), this._callback("onUpdate"))), a && (this._gc || (f === this._startTime || d !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (o && (u.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var o = [], s = this._first, a = 0; s;) s._startTime < r || (s instanceof i ? e !== !1 && (o[a++] = s) : (n !== !1 && (o[a++] = s), t !== !1 && (o = o.concat(s.getChildren(!0, e, n)), a = o.length))), s = s._next;
                    return o
                }, g.getTweensOf = function(t, e) {
                    var n, r, o = this._gc,
                        s = [],
                        a = 0;
                    for (o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (s[a++] = n[r]);
                    return o && this._enabled(!1, !0), s
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, o = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in o) o[n] >= i && (o[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, o = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > o && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : o = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), o = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, g.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    o = e._internals,
                    s = o.lazyTweens,
                    a = o.lazyRender,
                    l = new i(null, null, 1, 0),
                    u = n.prototype = new t;
                return u.constructor = n, u.kill()._gc = !1, n.version = "1.17.0", u.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, u.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, u.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, u.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, u.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, o, s = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) s[r] = i[r];
                    return s.time = this._parseTimeOrLabel(t), n = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new e(this, n, s), s.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && n === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && o._callback("onStart")
                    }, o
                }, u.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, u.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, o, l, u, h, c, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        d = this._time,
                        m = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        _ = this._paused,
                        x = this._cycle;
                    if (t >= p) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (o = !0, u = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (h = !0, y > r && (u = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (u = "onReverseComplete", o = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = o = !0, u = "onReverseComplete") : y >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, 0 === t && o)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (o = !1), n = n._next;
                            t = 0, this._initted || (h = !0)
                        } else 0 === f && 0 > y && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = f + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
                    if (this._cycle !== x && !this._locked) {
                        var b = this._yoyo && 0 !== (1 & x),
                            w = b === (this._yoyo && 0 !== (1 & this._cycle)),
                            T = this._totalTime,
                            S = this._cycle,
                            C = this._rawPrevTime,
                            E = this._time;
                        if (this._totalTime = x * f, this._cycle < x ? b = !b : this._totalTime += f, this._time = d, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = x, this._locked = !0, d = b ? 0 : f, this.render(d, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), w && (d = b ? f + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !_) return;
                        this._time = E, this._totalTime = T, this._cycle = S, this._rawPrevTime = C
                    }
                    if (!(this._time !== d && this._first || i || h)) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= d)
                        for (n = this._first; n && (l = n._next, !this._paused || _);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, !this._paused || _);)(n._active || n._startTime <= d && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    this._onUpdate && (e || (s.length && a(), this._callback("onUpdate"))), u && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (o && (s.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[u] && this._callback(u)))
                }, u.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, o = [],
                        s = this.getChildren(t, e, i),
                        a = 0,
                        l = s.length;
                    for (n = 0; l > n; n++) r = s[n], r.isActive() && (o[a++] = r);
                    return o
                }, u.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, u.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, u.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, u.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, u.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, u.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, u.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, u.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, u.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, u.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, u.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    o = _gsScope._gsDefine.globals,
                    s = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            o = {},
                            s = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            u = (e + i) / 2,
                            h = (i + n) / 2,
                            c = (l + u) / 2,
                            p = (u + h) / 2,
                            f = (p - c) / 8;
                        return r.b = l + (t - l) / 4, o.b = c + f, r.c = o.a = (r.b + o.b) / 2, o.c = s.a = (c + p) / 2, s.b = p - f, a.b = h + (n - h) / 4, s.c = a.a = (s.b + a.b) / 2, [r, o, s, a]
                    },
                    u = function(t, r, o, s, a) {
                        var u, h, c, p, f, d, m, g, v, y, _, x, b, w = t.length - 1,
                            T = 0,
                            S = t[0].a;
                        for (u = 0; w > u; u++) f = t[T], h = f.a, c = f.d, p = t[T + 1].d, a ? (_ = e[u], x = i[u], b = (x + _) * r * .25 / (s ? .5 : n[u] || .5), d = c - (c - h) * (s ? .5 * r : 0 !== _ ? b / _ : 0), m = c + (p - c) * (s ? .5 * r : 0 !== x ? b / x : 0), g = c - (d + ((m - d) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (d = c - (c - h) * r * .5, m = c + (p - c) * r * .5, g = c - (d + m) / 2), d += g, m += g, f.c = v = d, f.b = 0 !== u ? S : S = f.a + .6 * (f.c - f.a), f.da = c - h, f.ca = v - h, f.ba = S - h, o ? (y = l(h, S, v, c), t.splice(T, 1, y[0], y[1], y[2], y[3]), T += 4) : T++, S = m;
                        f = t[T], f.b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, o && (y = l(f.a, S, f.c, f.d), t.splice(T, 1, y[0], y[1], y[2], y[3]))
                    },
                    h = function(t, n, r, o) {
                        var a, l, u, h, c, p, f = [];
                        if (o)
                            for (t = [o].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = o[n] + Number(p.charAt(0) + p.substr(2)));
                        if (a = t.length - 2, 0 > a) return f[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), f;
                        for (l = 0; a > l; l++) u = t[l][n], h = t[l + 1][n], f[l] = new s(u, 0, 0, h), r && (c = t[l + 2][n], e[l] = (e[l] || 0) + (h - u) * (h - u), i[l] = (i[l] || 0) + (c - h) * (c - h));
                        return f[l] = new s(t[l][n], 0, 0, t[l + 1][n]), f
                    },
                    c = function(t, o, s, l, c, p) {
                        var f, d, m, g, v, y, _, x, b = {},
                            w = [],
                            T = p || t[0];
                        c = "string" == typeof c ? "," + c + "," : a, null == o && (o = 1);
                        for (d in t[0]) w.push(d);
                        if (t.length > 1) {
                            for (x = t[t.length - 1], _ = !0, f = w.length; --f > -1;)
                                if (d = w[f], Math.abs(T[d] - x[d]) > .05) {
                                    _ = !1;
                                    break
                                }
                            _ && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, f = w.length; --f > -1;) d = w[f], r[d] = -1 !== c.indexOf("," + d + ","), b[d] = h(t, d, r[d], p);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!l) {
                            for (f = w.length; --f > -1;)
                                if (r[d])
                                    for (m = b[w[f]], y = m.length - 1, g = 0; y > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + v * v;
                            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                        }
                        for (f = w.length, g = s ? 4 : 1; --f > -1;) d = w[f], m = b[d], u(m, o, s, l, r[d]), _ && (m.splice(0, g), m.splice(m.length - g, g));
                        return b
                    },
                    p = function(t, e, i) {
                        e = e || "soft";
                        var n, r, o, a, l, u, h, c, p, f, d, m = {},
                            g = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            y = [];
                        if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                        for (p in t[0]) y.push(p);
                        for (u = y.length; --u > -1;) {
                            for (p = y[u], m[p] = l = [], f = 0, c = t.length, h = 0; c > h; h++) n = null == i ? t[h][p] : "string" == typeof(d = t[h][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d), v && h > 1 && c - 1 > h && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                            for (c = f - g + 1, f = 0, h = 0; c > h; h += g) n = l[h], r = l[h + 1], o = l[h + 2], a = 2 === g ? 0 : l[h + 3], l[f++] = d = 3 === g ? new s(n, r, o, a) : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o);
                            l.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var n, r, o, s, a, l, u, h, c, p, f, d = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], o = p.a, s = p.d - o, a = p.c - o, l = p.b - o, n = r = 0, h = 1; i >= h; h++) u = d * h, c = 1 - u, n = r - (r = (u * u * s + 3 * c * (u * a + c * l)) * u), f = m * i + h - 1, e[f] = (e[f] || 0) + n * n
                    },
                    d = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, o, s = [],
                            a = [],
                            l = 0,
                            u = 0,
                            h = e - 1,
                            c = [],
                            p = [];
                        for (i in t) f(t[i], s, e);
                        for (r = s.length, n = 0; r > n; n++) l += Math.sqrt(s[n]), o = n % e, p[o] = l, o === h && (u += l, o = n / e >> 0, c[o] = p, a[o] = u, l = 0, p = []);
                        return {
                            length: u,
                            lengths: a,
                            segments: c
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, o, s, a, l = e.values || [],
                                u = {},
                                h = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in h) this._props.push(n);
                            for (o = this._props.length; --o > -1;) n = this._props[o], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], u[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || u[n] !== l[0][n] && (a = u);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : p(l, e.type, u), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = d(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), o = f.length; --o > -1;) {
                                    for (s = 0; 3 > s; s++) n = f[o][s], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                                    n = f[o][2], this._initialRotations[o] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, o, s, a, l, u, h, c, p = this._segCount,
                                f = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (h = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (u = p - 1; u > r && (this._l2 = h[++r]) <= e;);
                                    this._l1 = h[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = h[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) {
                                    for (u = c.length - 1; u > r && (this._s2 = c[++r]) <= e;);
                                    this._s1 = c[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = c[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                            for (n = 1 - a, r = this._props.length; --r > -1;) o = this._props[r], s = this._beziers[o][i], l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a, this._round[o] && (l = Math.round(l)), f[o] ? d[o](l) : d[o] = l;
                            if (this._autoRotate) {
                                var g, v, y, _, x, b, w, T = this._autoRotate;
                                for (r = T.length; --r > -1;) o = T[r][2], b = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, s = this._beziers[T[r][0]], g = this._beziers[T[r][1]], s && g && (s = s[i], g = g[i], v = s.a + (s.b - s.a) * a, _ = s.b + (s.c - s.b) * a, v += (_ - v) * a, _ += (s.c + (s.d - s.c) * a - _) * a, y = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, y += (x - y) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - y, _ - v) * w + b : this._initialRotations[r], f[o] ? d[o](l) : d[o] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = c, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = o.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, o, s, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var u, h, c, p = e.values,
                                    f = p.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > f) return a;
                                for (u = 0; f >= u; u++) c = i(t, p[u], s, a, l, f !== u), d[u] = c.end;
                                for (h in e) g[h] = e[h];
                                return g.values = d, a = new r(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (u = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != c.end.left ? [
                                    ["left", "top", "rotation", u, !1]
                                ] : null != c.end.x ? [
                                    ["x", "y", "rotation", u, !1]
                                ] : !1), g.autoRotate && (s._transform || s._enableTransforms(!1), c.autoRotate = s._target._gsTransform), l._onInitTween(c.proxy, g, s._tween), a
                            }
                        })
                    }
                }, g._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, g._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, o, s = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = s.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    u = s.prototype = new t("css");
                u.constructor = s, s.version = "1.17.0", s.API = 2, s.defaultTransformPerspective = 0, s.defaultSkewType = "compensated", s.defaultSmoothOrigin = !0, u = "px", s.suffixMap = {
                    top: u,
                    right: u,
                    bottom: u,
                    left: u,
                    width: u,
                    height: u,
                    fontSize: u,
                    padding: u,
                    margin: u,
                    perspective: u,
                    lineHeight: ""
                };
                var h, c, p, f, d, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    E = /-([a-z])/gi,
                    P = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    k = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    L = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    O = /,(?=[^\)]*(?:\(|$))/gi,
                    R = Math.PI / 180,
                    D = 180 / Math.PI,
                    I = {},
                    M = document,
                    N = function(t) {
                        return M.createElementNS ? M.createElementNS("http://www.w3.org/1999/xhtml", t) : M.createElement(t)
                    },
                    j = N("div"),
                    q = N("img"),
                    F = s._internals = {
                        _specialProps: l
                    },
                    W = navigator.userAgent,
                    B = function() {
                        var t = W.indexOf("Android"),
                            e = N("a");
                        return p = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || Number(W.substr(t + 8, 1)) > 3), d = p && Number(W.substr(W.indexOf("Version/") + 8, 1)) < 6, f = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    H = function(t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    U = function(t) {
                        window.console && console.log(t)
                    },
                    X = "",
                    Y = "",
                    V = function(t, e) {
                        e = e || j;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (Y = 3 === n ? "ms" : i[n], X = "-" + Y.toLowerCase() + "-", Y + t) : null
                    },
                    $ = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                    Q = s.getStyle = function(t, e, i, n, r) {
                        var o;
                        return B || "opacity" !== e ? (!n && t.style[e] ? o = t.style[e] : (i = i || $(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == r || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : r) : H(t)
                    },
                    G = F.convertToPixels = function(t, i, n, r, o) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, u, h = A.test(i),
                            c = t,
                            p = j.style,
                            f = 0 > n;
                        if (f && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (h ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== r && c.appendChild) p[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (c = t.parentNode || M.body, l = c._gsCache, u = e.ticker.frame, l && h && l.time === u) return l.width * n / 100;
                                p[h ? "width" : "height"] = n + r
                            }
                            c.appendChild(j), a = parseFloat(j[h ? "offsetWidth" : "offsetHeight"]), c.removeChild(j), h && "%" === r && s.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {}, l.time = u, l.width = a / n * 100), 0 !== a || o || (a = G(t, i, n, r, !0))
                        }
                        return f ? -a : a
                    },
                    Z = F.calculateOffset = function(t, e, i) {
                        if ("absolute" !== Q(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = Q(t, "margin" + n, i);
                        return t["offset" + n] - (G(t, e, parseFloat(r), r.replace(x, "")) || 0)
                    },
                    K = function(t, e) {
                        var i, n, r, o = {};
                        if (e = e || $(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || St === r) && (o[r.replace(E, k)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (o[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(E, k)] = e[i]);
                        return B || (o.opacity = H(t)), n = Mt(t, e, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, Et && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                    },
                    J = function(t, e, i, n, r) {
                        var o, s, a, l = {},
                            u = t.style;
                        for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || r && r[s]) && -1 === s.indexOf("Origin") && ("number" == typeof o || "string" == typeof o) && (l[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(_, "") ? o : 0 : Z(t, s), void 0 !== u[s] && (a = new ft(u, s, u[s], a)));
                        if (n)
                            for (s in n) "className" !== s && (l[s] = n[s]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            o = r.length;
                        for (i = i || $(t, null); --o > -1;) n -= parseFloat(Q(t, "padding" + r[o], i, !0)) || 0, n -= parseFloat(Q(t, "border" + r[o] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(r.replace(_, "")), e.v = t), e || t
                    },
                    rt = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    ot = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    st = function(t, e, i, n) {
                        var r, o, s, a, l, u = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, o = t.split("_"), l = "=" === t.charAt(1), s = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (l ? 0 : e), o.length && (n && (n[i] = e + s), -1 !== t.indexOf("short") && (s %= r, s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)), -1 !== t.indexOf("_cw") && 0 > s ? s = (s + 9999999999 * r) % r - (s / r | 0) * r : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * r) % r - (s / r | 0) * r)), a = e + s), u > a && a > -u && (a = 0), a
                    },
                    at = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ut = s.parseColor = function(t) {
                        var e, i, n, r, o, s;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, t >> 8 & 255, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t] ? at[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, t >> 8 & 255, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, o = Number(t[1]) / 100, s = Number(t[2]) / 100, i = .5 >= s ? s * (o + 1) : s + o - s * o, e = 2 * s - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(r + 1 / 3, e, i), t[1] = lt(r, e, i), t[2] = lt(r - 1 / 3, e, i), t) : (t = t.match(g) || at.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : at.black
                    },
                    ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (u in at) ht += "|" + u + "\\b";
                ht = new RegExp(ht + ")", "gi");
                var ct = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, o = e ? (t.match(ht) || [""])[0] : "",
                            s = t.split(o).join("").match(y) || [],
                            a = t.substr(0, t.indexOf(s[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            u = -1 !== t.indexOf(" ") ? " " : ",",
                            h = s.length,
                            c = h > 0 ? s[0].replace(g, "") : "";
                        return h ? r = e ? function(t) {
                            var e, p, f, d;
                            if ("number" == typeof t) t += c;
                            else if (n && O.test(t)) {
                                for (d = t.replace(O, "|").split("|"), f = 0; f < d.length; f++) d[f] = r(d[f]);
                                return d.join(",")
                            }
                            if (e = (t.match(ht) || [o])[0], p = t.split(e).join("").match(y) || [], f = p.length, h > f--)
                                for (; ++f < h;) p[f] = i ? p[(f - 1) / 2 | 0] : s[f];
                            return a + p.join(u) + u + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, o, p;
                            if ("number" == typeof t) t += c;
                            else if (n && O.test(t)) {
                                for (o = t.replace(O, "|").split("|"), p = 0; p < o.length; p++) o[p] = r(o[p]);
                                return o.join(",")
                            }
                            if (e = t.match(y) || [], p = e.length, h > p--)
                                for (; ++p < h;) e[p] = i ? e[(p - 1) / 2 | 0] : s[p];
                            return a + e.join(u) + l
                        } : function(t) {
                            return t
                        }
                    },
                    pt = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, o, s, a) {
                                var l, u = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = u[l] = u[l] || u[(l - 1) / 2 >> 0];
                                return r.parse(e, a, o, s)
                            }
                    },
                    ft = (F._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, o = this.data, s = o.proxy, a = o.firstMPT, l = 1e-6; a;) e = s[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (o.autoRotate && (o.autoRotate.rotation = s.rotation), 1 === t)
                            for (a = o.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    dt = (F._parseToProxy = function(t, e, i, n, r, o) {
                        var s, a, l, u, h, c = n,
                            p = {},
                            f = {},
                            d = i._transform,
                            m = I;
                        for (i._transform = null, I = e, n = h = i.parse(t, e, n, r), I = m, o && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) {
                            if (n.type <= 1 && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, o || (u = new ft(n, "s", a, u, n.r), n.c = 0), 1 === n.type))
                                for (s = n.l; --s > 0;) l = "xn" + s, a = n.p + "_" + l, f[a] = n.data[l], p[a] = n[l], o || (u = new ft(n, l, a, u, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: u,
                            pt: h
                        }
                    }, F.CSSPropTween = function(t, e, n, r, s, a, l, u, h, c, p) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof dt || o.push(this.n), this.r = u, this.type = a || 0, h && (this.pr = h, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === p ? n + r : p, s && (this._next = s, s._prev = this)
                    }),
                    mt = function(t, e, i, n, r, o) {
                        var s = new dt(t, e, i, n - i, r, -1, o);
                        return s.b = i, s.e = s.xs0 = n, s
                    },
                    gt = s.parseComplex = function(t, e, i, n, r, o, s, a, l, u) {
                        i = i || o || "", s = new dt(t, e, 0, 0, s, u ? 2 : 1, null, !1, a, i, n), n += "";
                        var c, p, f, d, m, y, _, x, b, w, T, C, E = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            k = E.length,
                            A = h !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(O, ", ").split(" "), P = P.join(" ").replace(O, ", ").split(" "), k = E.length), k !== P.length && (E = (o || "").split(" "), k = E.length), s.plugin = l, s.setRatio = u, c = 0; k > c; c++)
                            if (d = E[c], m = P[c], x = parseFloat(d), x || 0 === x) s.appendXtra("", x, rt(m, x), m.replace(v, ""), A && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === d.charAt(0) || at[d] || S.test(d))) C = "," === m.charAt(m.length - 1) ? ")," : ")", d = ut(d), m = ut(m), b = d.length + m.length > 6, b && !B && 0 === m[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(P[c]).join("transparent")) : (B || (b = !1), s.appendXtra(b ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], b ? "," : C, !0), b && (d = d.length < 4 ? 1 : d[3], s.appendXtra("", d, (m.length < 4 ? 1 : m[3]) - d, C, !1)));
                        else if (y = d.match(g)) {
                            if (_ = m.match(v), !_ || _.length !== y.length) return s;
                            for (f = 0, p = 0; p < y.length; p++) T = y[p], w = d.indexOf(T, f), s.appendXtra(d.substr(f, w - f), Number(T), rt(_[p], T), "", A && "px" === d.substr(w + T.length, 2), 0 === p), f = w + T.length;
                            s["xs" + s.l] += d.substr(f)
                        } else s["xs" + s.l] += s.l ? " " + d : d;
                        if (-1 !== n.indexOf("=") && s.data) {
                            for (C = s.xs0 + s.data.s, c = 1; c < s.l; c++) C += s["xs" + c] + s.data["xn" + c];
                            s.e = C + s["xs" + c]
                        }
                        return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                    },
                    vt = 9;
                for (u = dt.prototype, u.l = u.pr = 0; --vt > 0;) u["xn" + vt] = 0, u["xs" + vt] = "";
                u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function(t, e, i, n, r, o) {
                    var s = this,
                        a = s.l;
                    return s["xs" + a] += o && a ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = n || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = r, s["xn" + a] = e, s.plugin || (s.xfirst = new dt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, r, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                        s: e + i
                    }, s.rxp = {}, s.s = e, s.c = i, s.r = r, s)) : (s["xs" + a] += e + (n || ""), s)
                };
                var yt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? V(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ct(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    _t = F._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, o = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; n < o.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, r = new yt(o[n], e)
                    },
                    xt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            _t(t, {
                                parser: function(t, i, n, r, o, s, u) {
                                    var h = a.com.greensock.plugins[e];
                                    return h ? (h._cssRegister(), l[n].parse(t, i, n, r, o, s, u)) : (U("Error: " + e + " js file not loaded."), o)
                                }
                            })
                        }
                    };
                u = yt.prototype, u.parseComplex = function(t, e, i, n, r, o) {
                    var s, a, l, u, h, c, p = this.keyword;
                    if (this.multi && (O.test(i) || O.test(e) ? (a = e.replace(O, "|").split("|"), l = i.replace(O, "|").split("|")) : p && (a = [e], l = [i])), l) {
                        for (u = l.length > a.length ? l.length : a.length, s = 0; u > s; s++) e = a[s] = a[s] || this.dflt, i = l[s] = l[s] || this.dflt, p && (h = e.indexOf(p), c = i.indexOf(p), h !== c && (-1 === c ? a[s] = a[s].split(p).join("") : -1 === h && (a[s] += " " + p)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o)
                }, u.parse = function(t, e, i, n, o, s, a) {
                    return this.parseComplex(t.style, this.format(Q(t, this.p, r, !1, this.dflt)), this.format(e), o, s)
                }, s.registerSpecialProp = function(t, e, i) {
                    _t(t, {
                        parser: function(t, n, r, o, s, a, l) {
                            var u = new dt(t, r, 0, 0, s, 2, r, !1, i);
                            return u.plugin = a, u.setRatio = e(t, n, o._tween, r), u
                        },
                        priority: i
                    })
                }, s.useSVGTransformAttr = p || f;
                var bt, wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Tt = V("transform"),
                    St = X + "transform",
                    Ct = V("transformOrigin"),
                    Et = null !== V("perspective"),
                    Pt = F.Transform = function() {
                        this.perspective = parseFloat(s.defaultTransformPerspective) || 0, this.force3D = s.defaultForce3D !== !1 && Et ? s.defaultForce3D || "auto" : !1
                    },
                    kt = window.SVGElement,
                    At = function(t, e, i) {
                        var n, r = M.createElementNS("http://www.w3.org/2000/svg", t),
                            o = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Lt = M.documentElement,
                    zt = function() {
                        var t, e, i, n = m || /Android/i.test(W) && !window.chrome;
                        return M.createElementNS && !n && (t = At("svg", Lt), e = At("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Ct] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Et), Lt.removeChild(t)), n
                    }(),
                    Ot = function(t, e, i, n, r) {
                        var o, a, l, u, h, c, p, f, d, m, g, v, y, _, x = t._gsTransform,
                            b = It(t, !0);
                        x && (y = x.xOrigin, _ = x.yOrigin), (!n || (o = n.split(" ")).length < 2) && (p = t.getBBox(), e = nt(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = h = parseFloat(o[1]), n && b !== Dt && (c = b[0], p = b[1], f = b[2], d = b[3], m = b[4], g = b[5], v = c * d - p * f, a = u * (d / v) + h * (-f / v) + (f * g - d * m) / v, l = u * (-p / v) + h * (c / v) - (c * g - p * m) / v, u = i.xOrigin = o[0] = a, h = i.yOrigin = o[1] = l), x && (r || r !== !1 && s.defaultSmoothOrigin !== !1 ? (a = u - y, l = h - _, x.xOffset += a * b[0] + l * b[2] - a, x.yOffset += a * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", o.join(" "))
                    },
                    Rt = function(t) {
                        return !!(kt && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Dt = [1, 0, 0, 1, 0, 0],
                    It = function(t, e) {
                        var i, n, r, o, s, a = t._gsTransform || new Pt,
                            l = 1e5;
                        if (Tt ? n = Q(t, St, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(L), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && Rt(t)) && (i && -1 !== (t.style[Tt] + "").indexOf("matrix") && (n = t.style[Tt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Dt;
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], vt = r.length; --vt > -1;) o = Number(r[vt]), r[vt] = (s = o - (o |= 0)) ? (s * l + (0 > s ? -.5 : .5) | 0) / l + o : o;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Mt = F.getTransform = function(t, i, n, o) {
                        if (t._gsTransform && n && !o) return t._gsTransform;
                        var a, l, u, h, c, p, f = n ? t._gsTransform || new Pt : new Pt,
                            d = f.scaleX < 0,
                            m = 2e-5,
                            g = 1e5,
                            v = Et ? parseFloat(Q(t, Ct, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            y = parseFloat(s.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !Rt(t)), f.svg && (Ot(t, Q(t, Ct, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), bt = s.useSVGTransformAttr || zt), a = It(t), a !== Dt) {
                            if (16 === a.length) {
                                var _, x, b, w, T, S = a[0],
                                    C = a[1],
                                    E = a[2],
                                    P = a[3],
                                    k = a[4],
                                    A = a[5],
                                    L = a[6],
                                    z = a[7],
                                    O = a[8],
                                    R = a[9],
                                    I = a[10],
                                    M = a[12],
                                    N = a[13],
                                    j = a[14],
                                    q = a[11],
                                    F = Math.atan2(L, I);
                                f.zOrigin && (j = -f.zOrigin, M = O * j - a[12], N = R * j - a[13], j = I * j + f.zOrigin - a[14]), f.rotationX = F * D, F && (w = Math.cos(-F), T = Math.sin(-F), _ = k * w + O * T, x = A * w + R * T, b = L * w + I * T, O = k * -T + O * w, R = A * -T + R * w, I = L * -T + I * w, q = z * -T + q * w, k = _, A = x, L = b), F = Math.atan2(O, I), f.rotationY = F * D, F && (w = Math.cos(-F), T = Math.sin(-F), _ = S * w - O * T, x = C * w - R * T, b = E * w - I * T, R = C * T + R * w, I = E * T + I * w, q = P * T + q * w, S = _, C = x, E = b), F = Math.atan2(C, S), f.rotation = F * D, F && (w = Math.cos(-F), T = Math.sin(-F), S = S * w + k * T, x = C * w + A * T, A = C * -T + A * w, L = E * -T + L * w, C = x), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (Math.sqrt(S * S + C * C) * g + .5 | 0) / g, f.scaleY = (Math.sqrt(A * A + R * R) * g + .5 | 0) / g, f.scaleZ = (Math.sqrt(L * L + I * I) * g + .5 | 0) / g, f.skewX = 0, f.perspective = q ? 1 / (0 > q ? -q : q) : 0, f.x = M, f.y = N, f.z = j, f.svg && (f.x -= f.xOrigin - (f.xOrigin * S - f.yOrigin * k), f.y -= f.yOrigin - (f.yOrigin * C - f.xOrigin * A))
                            } else if (!(Et && !o && a.length && f.x === a[4] && f.y === a[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === Q(t, "display", i))) {
                                var W = a.length >= 6,
                                    B = W ? a[0] : 1,
                                    H = a[1] || 0,
                                    U = a[2] || 0,
                                    X = W ? a[3] : 1;
                                f.x = a[4] || 0, f.y = a[5] || 0, u = Math.sqrt(B * B + H * H), h = Math.sqrt(X * X + U * U), c = B || H ? Math.atan2(H, B) * D : f.rotation || 0, p = U || X ? Math.atan2(U, X) * D + c : f.skewX || 0, Math.abs(p) > 90 && Math.abs(p) < 270 && (d ? (u *= -1, p += 0 >= c ? 180 : -180, c += 0 >= c ? 180 : -180) : (h *= -1, p += 0 >= p ? 180 : -180)), f.scaleX = u, f.scaleY = h, f.rotation = c, f.skewX = p, Et && (f.rotationX = f.rotationY = f.z = 0, f.perspective = y, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * B + f.yOrigin * U), f.y -= f.yOrigin - (f.xOrigin * H + f.yOrigin * X))
                            }
                            f.zOrigin = v;
                            for (l in f) f[l] < m && f[l] > -m && (f[l] = 0)
                        }
                        return n && (t._gsTransform = f, f.svg && (bt && t.style[Tt] ? e.delayedCall(.001, function() {
                            Ft(t.style, Tt);

                        }) : !bt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Nt = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * R,
                            o = r + n.skewX * R,
                            s = 1e5,
                            a = (Math.cos(r) * n.scaleX * s | 0) / s,
                            l = (Math.sin(r) * n.scaleX * s | 0) / s,
                            u = (Math.sin(o) * -n.scaleY * s | 0) / s,
                            h = (Math.cos(o) * n.scaleY * s | 0) / s,
                            c = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = l, l = -u, u = -i, e = p.filter, c.filter = "";
                            var f, d, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                y = "absolute" !== p.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + u + ", M22=" + h,
                                w = n.x + g * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (f = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, d = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, w += f - (f * a + d * l), T += d - (f * u + d * h)), y ? (f = g / 2, d = v / 2, _ += ", Dx=" + (f - (f * a + d * l) + w) + ", Dy=" + (d - (f * u + d * h) + T) + ")") : _ += ", sizingMethod='auto expand')", c.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(z, _) : _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === u && 1 === h && (y && -1 === _.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && c.removeAttribute("filter")), !y) {
                                var S, C, E, P = 8 > m ? 1 : -1;
                                for (f = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + w), n.ieOffsetY = Math.round((v - ((0 > h ? -h : h) * v + (0 > u ? -u : u) * g)) / 2 + T), vt = 0; 4 > vt; vt++) C = et[vt], S = p[C], i = -1 !== S.indexOf("px") ? parseFloat(S) : G(this.t, C, parseFloat(S), S.replace(x, "")) || 0, E = i !== n[C] ? 2 > vt ? -n.ieOffsetX : -n.ieOffsetY : 2 > vt ? f - n.ieOffsetX : d - n.ieOffsetY, c[C] = (n[C] = Math.round(i - E * (0 === vt || 2 === vt ? 1 : P))) + "px"
                            }
                        }
                    },
                    jt = F.set3DTransformRatio = F.setTransformRatio = function(t) {
                        var e, i, n, r, o, s, a, l, u, h, c, p, d, m, g, v, y, _, x, b, w, T, S, C = this.data,
                            E = this.t.style,
                            P = C.rotation,
                            k = C.rotationX,
                            A = C.rotationY,
                            L = C.scaleX,
                            z = C.scaleY,
                            O = C.scaleZ,
                            D = C.x,
                            I = C.y,
                            M = C.z,
                            N = C.svg,
                            j = C.perspective,
                            q = C.force3D;
                        if (!(((1 !== t && 0 !== t || "auto" !== q || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && q || M || j || A || k) && (!bt || !N) && Et)) return void(P || C.skewX || N ? (P *= R, T = C.skewX * R, S = 1e5, e = Math.cos(P) * L, r = Math.sin(P) * L, i = Math.sin(P - T) * -z, o = Math.cos(P - T) * z, T && "simple" === C.skewType && (y = Math.tan(T), y = Math.sqrt(1 + y * y), i *= y, o *= y, C.skewY && (e *= y, r *= y)), N && (D += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, I += C.yOrigin - (C.xOrigin * r + C.yOrigin * o) + C.yOffset, bt && (C.xPercent || C.yPercent) && (m = this.t.getBBox(), D += .01 * C.xPercent * m.width, I += .01 * C.yPercent * m.height), m = 1e-6, m > D && D > -m && (D = 0), m > I && I > -m && (I = 0)), x = (e * S | 0) / S + "," + (r * S | 0) / S + "," + (i * S | 0) / S + "," + (o * S | 0) / S + "," + D + "," + I + ")", N && bt ? this.t.setAttribute("transform", "matrix(" + x) : E[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + x) : E[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + L + ",0,0," + z + "," + D + "," + I + ")");
                        if (f && (m = 1e-4, m > L && L > -m && (L = O = 2e-5), m > z && z > -m && (z = O = 2e-5), !j || C.z || C.rotationX || C.rotationY || (j = 0)), P || C.skewX) P *= R, g = e = Math.cos(P), v = r = Math.sin(P), C.skewX && (P -= C.skewX * R, g = Math.cos(P), v = Math.sin(P), "simple" === C.skewType && (y = Math.tan(C.skewX * R), y = Math.sqrt(1 + y * y), g *= y, v *= y, C.skewY && (e *= y, r *= y))), i = -v, o = g;
                        else {
                            if (!(A || k || 1 !== O || j || N)) return void(E[Tt] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + I + "px," + M + "px)" + (1 !== L || 1 !== z ? " scale(" + L + "," + z + ")" : ""));
                            e = o = 1, i = r = 0
                        }
                        u = 1, n = s = a = l = h = c = 0, p = j ? -1 / j : 0, d = C.zOrigin, m = 1e-6, b = ",", w = "0", P = A * R, P && (g = Math.cos(P), v = Math.sin(P), a = -v, h = p * -v, n = e * v, s = r * v, u = g, p *= g, e *= g, r *= g), P = k * R, P && (g = Math.cos(P), v = Math.sin(P), y = i * g + n * v, _ = o * g + s * v, l = u * v, c = p * v, n = i * -v + n * g, s = o * -v + s * g, u *= g, p *= g, i = y, o = _), 1 !== O && (n *= O, s *= O, u *= O, p *= O), 1 !== z && (i *= z, o *= z, l *= z, c *= z), 1 !== L && (e *= L, r *= L, a *= L, h *= L), (d || N) && (d && (D += n * -d, I += s * -d, M += u * -d + d), N && (D += C.xOrigin - (C.xOrigin * e + C.yOrigin * i) + C.xOffset, I += C.yOrigin - (C.xOrigin * r + C.yOrigin * o) + C.yOffset), m > D && D > -m && (D = w), m > I && I > -m && (I = w), m > M && M > -m && (M = 0)), x = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? w : e) + b + (m > r && r > -m ? w : r) + b + (m > a && a > -m ? w : a), x += b + (m > h && h > -m ? w : h) + b + (m > i && i > -m ? w : i) + b + (m > o && o > -m ? w : o), k || A ? (x += b + (m > l && l > -m ? w : l) + b + (m > c && c > -m ? w : c) + b + (m > n && n > -m ? w : n), x += b + (m > s && s > -m ? w : s) + b + (m > u && u > -m ? w : u) + b + (m > p && p > -m ? w : p) + b) : x += ",0,0,0,0,1,0,", x += D + b + I + b + M + b + (j ? 1 + -M / j : 1) + ")", E[Tt] = x
                    };
                u = Pt.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, o, a, l) {
                        if (n._lastParsedTransform === l) return o;
                        n._lastParsedTransform = l;
                        var u, h, c, p, f, d, m, g, v, y = t._gsTransform,
                            _ = n._transform = Mt(t, r, !0, l.parseTransform),
                            x = t.style,
                            b = 1e-6,
                            w = wt.length,
                            T = l,
                            S = {},
                            C = "transformOrigin";
                        if ("string" == typeof T.transform && Tt) c = j.style, c[Tt] = T.transform, c.display = "block", c.position = "absolute", M.body.appendChild(j), u = Mt(j, null, !1), M.body.removeChild(j), null != T.xPercent && (u.xPercent = ot(T.xPercent, _.xPercent)), null != T.yPercent && (u.yPercent = ot(T.yPercent, _.yPercent));
                        else if ("object" == typeof T) {
                            if (u = {
                                    scaleX: ot(null != T.scaleX ? T.scaleX : T.scale, _.scaleX),
                                    scaleY: ot(null != T.scaleY ? T.scaleY : T.scale, _.scaleY),
                                    scaleZ: ot(T.scaleZ, _.scaleZ),
                                    x: ot(T.x, _.x),
                                    y: ot(T.y, _.y),
                                    z: ot(T.z, _.z),
                                    xPercent: ot(T.xPercent, _.xPercent),
                                    yPercent: ot(T.yPercent, _.yPercent),
                                    perspective: ot(T.transformPerspective, _.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (c in m) T[c] = m[c];
                                else T.rotation = m;
                                "string" == typeof T.x && -1 !== T.x.indexOf("%") && (u.x = 0, u.xPercent = ot(T.x, _.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (u.y = 0, u.yPercent = ot(T.y, _.yPercent)), u.rotation = st("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : _.rotation, _.rotation, "rotation", S), Et && (u.rotationX = st("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", S), u.rotationY = st("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", S)), u.skewX = null == T.skewX ? _.skewX : st(T.skewX, _.skewX), u.skewY = null == T.skewY ? _.skewY : st(T.skewY, _.skewY), (h = u.skewY - _.skewY) && (u.skewX += h, u.rotation += h)
                        }
                        for (Et && null != T.force3D && (_.force3D = T.force3D, d = !0), _.skewType = T.skewType || _.skewType || s.defaultSkewType, f = _.force3D || _.z || _.rotationX || _.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, f || null == T.scale || (u.scaleZ = 1); --w > -1;) i = wt[w], p = u[i] - _[i], (p > b || -b > p || null != T[i] || null != I[i]) && (d = !0, o = new dt(_, i, _[i], p, o), i in S && (o.e = S[i]), o.xs0 = 0, o.plugin = a, n._overwriteProps.push(o.n));
                        return p = T.transformOrigin, _.svg && (p || T.svgOrigin) && (g = _.xOffset, v = _.yOffset, Ot(t, nt(p), u, T.svgOrigin, T.smoothOrigin), o = mt(_, "xOrigin", (y ? _ : u).xOrigin, u.xOrigin, o, C), o = mt(_, "yOrigin", (y ? _ : u).yOrigin, u.yOrigin, o, C), (g !== _.xOffset || v !== _.yOffset) && (o = mt(_, "xOffset", y ? g : _.xOffset, _.xOffset, o, C), o = mt(_, "yOffset", y ? v : _.yOffset, _.yOffset, o, C)), p = bt ? null : "0px 0px"), (p || Et && f && _.zOrigin) && (Tt ? (d = !0, i = Ct, p = (p || Q(t, i, r, !1, "50% 50%")) + "", o = new dt(x, i, 0, 0, o, -1, C), o.b = x[i], o.plugin = a, Et ? (c = _.zOrigin, p = p.split(" "), _.zOrigin = (p.length > 2 && (0 === c || "0px" !== p[2]) ? parseFloat(p[2]) : c) || 0, o.xs0 = o.e = p[0] + " " + (p[1] || "50%") + " 0px", o = new dt(_, "zOrigin", 0, 0, o, -1, o.n), o.b = c, o.xs0 = o.e = _.zOrigin) : o.xs0 = o.e = p) : nt(p + "", _)), d && (n._transformType = _.svg && bt || !f && 3 !== this._transformType ? 2 : 3), o
                    },
                    prefix: !0
                }), _t("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), _t("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, o, s, a) {
                        e = this.format(e);
                        var l, u, h, c, p, f, d, m, g, v, y, _, x, b, w, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            C = t.style;
                        for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), u = 0; u < S.length; u++) this.p.indexOf("border") && (S[u] = V(S[u])), p = c = Q(t, S[u], r, !1, "0px"), -1 !== p.indexOf(" ") && (c = p.split(" "), p = c[0], c = c[1]), f = h = l[u], d = parseFloat(p), _ = p.substr((d + "").length), x = "=" === f.charAt(1), x ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), y = f.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(f), y = f.substr((m + "").length)), "" === y && (y = n[i] || _), y !== _ && (b = G(t, "borderLeft", d, _), w = G(t, "borderTop", d, _), "%" === y ? (p = b / g * 100 + "%", c = w / v * 100 + "%") : "em" === y ? (T = G(t, "borderLeft", 1, "em"), p = b / T + "em", c = w / T + "em") : (p = b + "px", c = w + "px"), x && (f = parseFloat(p) + m + y, h = parseFloat(c) + m + y)), s = gt(C, S[u], p + " " + c, f + " " + h, !1, "0px", s);
                        return s
                    },
                    prefix: !0,
                    formatter: ct("0px 0px 0px 0px", !1, !0)
                }), _t("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, u, h, c, p, f = "background-position",
                            d = r || $(t, null),
                            g = this.format((d ? m ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (p = Q(t, "backgroundImage").replace(P, ""), p && "none" !== p)) {
                            for (a = g.split(" "), l = v.split(" "), q.setAttribute("src", p), u = 2; --u > -1;) g = a[u], h = -1 !== g.indexOf("%"), h !== (-1 !== l[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - q.width : t.offsetHeight - q.height, a[u] = h ? parseFloat(g) / 100 * c + "px" : parseFloat(g) / c * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, o, s)
                    },
                    formatter: nt
                }), _t("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), _t("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), _t("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), _t("transformStyle", {
                    prefix: !0
                }), _t("backfaceVisibility", {
                    prefix: !0
                }), _t("userSelect", {
                    prefix: !0
                }), _t("margin", {
                    parser: pt("marginTop,marginRight,marginBottom,marginLeft")
                }), _t("padding", {
                    parser: pt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), _t("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, o, s) {
                        var a, l, u;
                        return 9 > m ? (l = t.currentStyle, u = 8 > m ? " " : ",", a = "rect(" + l.clipTop + u + l.clipRight + u + l.clipBottom + u + l.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(Q(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                    }
                }), _t("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), _t("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), _t("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, o, s) {
                        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", r, !1, "0px") + " " + Q(t, "borderTopStyle", r, !1, "solid") + " " + Q(t, "borderTopColor", r, !1, "#000")), this.format(e), o, s)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ht) || ["#000"])[0]
                    }
                }), _t("borderWidth", {
                    parser: pt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), _t("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, o) {
                        var s = t.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new dt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e)
                    }
                });
                var qt = function(t) {
                    var e, i = this.t,
                        n = i.filter || Q(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
                };
                _t("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, o, s) {
                        var a = parseFloat(Q(t, "opacity", r, !1, "1")),
                            l = t.style,
                            u = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === Q(t, "visibility", r) && 0 !== e && (a = 0), B ? o = new dt(l, "opacity", a, e - a, o) : (o = new dt(l, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = u ? 1 : 0, l.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = qt), u && (o = new dt(l, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", n._overwriteProps.push(o.n), n._overwriteProps.push(i)), o
                    }
                });
                var Ft = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Wt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ft(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                _t("className", {
                    parser: function(t, e, n, o, s, a, l) {
                        var u, h, c, p, f, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (s = o._classNamePT = new dt(t, n, 0, 0, s, 2), s.setRatio = Wt, s.pr = -11, i = !0, s.b = d, h = K(t, r), c = t._gsClassPT) {
                            for (p = {}, f = c.data; f;) p[f.p] = 1, f = f._next;
                            c.setRatio(1)
                        }
                        return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), u = J(t, h, K(t), l, p), t.setAttribute("class", d), s.data = u.firstMPT, t.style.cssText = m, s = s.xfirst = o.parse(t, u.difs, s, a)
                    }
                });
                var Bt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, o, s = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) s.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ct : l[i].p), Ft(s, i);
                        r && (Ft(s, Tt), o = this.t._gsTransform, o && (o.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (_t("clearProps", {
                        parser: function(t, e, n, r, o) {
                            return o = new dt(t, n, 0, 0, o, 2), o.setRatio = Bt, o.e = e, o.pr = -10, o.data = r._tween, i = !0, o
                        }
                    }), u = "bezier,throwProps,physicsProps,physics2D".split(","), vt = u.length; vt--;) xt(u[vt]);
                u = s.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || s.suffixMap, r = $(t, ""), o = this._overwriteProps;
                    var u, f, m, g, v, y, _, x, b, T = t.style;
                    if (c && "" === T.zIndex && (u = Q(t, "zIndex", r), ("auto" === u || "" === u) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (g = T.cssText, u = K(t, r), T.cssText = g + ";" + e, u = J(t, u, K(t)).difs, !B && w.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, T.cssText = g), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, Tt ? p && (c = !0, "" === T.zIndex && (_ = Q(t, "zIndex", r), ("auto" === _ || "" === _) && this._addLazySet(T, "zIndex", 0)), d && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : T.zoom = 1, m = f; m && m._next;) m = m._next;
                        x = new dt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, m), x.setRatio = Tt ? jt : Nt, x.data = this._transform || Mt(t, r, !0), x.tween = a, x.pr = -1, o.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (y = f._next, m = g; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : v) ? f._prev._next = f: g = f, (f._next = m) ? m._prev = f : v = f, f = y
                        }
                        this._firstPT = g
                    }
                    return !0
                }, u.parse = function(t, e, i, o) {
                    var s, a, u, c, p, f, d, m, g, v, y = t.style;
                    for (s in e) f = e[s], a = l[s], a ? i = a.parse(t, f, s, this, i, o, e) : (p = Q(t, s, r) + "", g = "string" == typeof f, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || g && S.test(f) ? (g || (f = ut(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = gt(y, s, p, f, !0, "transparent", i, 0, o)) : !g || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (u = parseFloat(p), d = u || 0 === u ? p.substr((u + "").length) : "", ("" === p || "auto" === p) && ("width" === s || "height" === s ? (u = it(t, s, r), d = "px") : "left" === s || "top" === s ? (u = Z(t, s, r), d = "px") : (u = "opacity" !== s ? 0 : 1, d = "")), v = g && "=" === f.charAt(1), v ? (c = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), c *= parseFloat(f), m = f.replace(x, "")) : (c = parseFloat(f), m = g ? f.replace(x, "") : ""), "" === m && (m = s in n ? n[s] : d), f = c || 0 === c ? (v ? c + u : c) + m : e[s], d !== m && "" !== m && (c || 0 === c) && u && (u = G(t, s, u, d), "%" === m ? (u /= G(t, s, 100, "%") / 100, e.strictUnits !== !0 && (p = u + "%")) : "em" === m ? u /= G(t, s, 1, "em") : "px" !== m && (c = G(t, s, c, m), m = "px"), v && (c || 0 === c) && (f = c + u + m)), v && (c += u), !u && 0 !== u || !c && 0 !== c ? void 0 !== y[s] && (f || f + "" != "NaN" && null != f) ? (i = new dt(y, s, c || u || 0, 0, i, -1, s, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== s && -1 === s.indexOf("Style") ? f : p) : U("invalid " + s + " tween value: " + e[s]) : (i = new dt(y, s, u, c - u, i, 0, s, h !== !1 && ("px" === m || "zIndex" === s), 0, p, f), i.xs0 = m)) : i = gt(y, s, p, f, !0, null, i, 0, o)), o && i && !i.plugin && (i.plugin = o);
                    return i
                }, u.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        o = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : o > e && e > -o && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, u._enableTransforms = function(t) {
                    this._transform = this._transform || Mt(this._target, r, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Ht = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                u._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Ht, n.data = this
                }, u._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, u._kill = function(e) {
                    var i, n, r, o = e;
                    if (e.autoAlpha || e.alpha) {
                        o = {};
                        for (n in e) o[n] = e[n];
                        o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, o)
                };
                var Ut = function(t, e, i) {
                    var n, r, o, s;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Ut(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) o = n[r], s = o.type, o.style && (e.push(K(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Ut(o, e, i)
                };
                return s.cascadeTo = function(t, i, n) {
                    var r, o, s, a, l = e.to(t, i, n),
                        u = [l],
                        h = [],
                        c = [],
                        p = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Ut(t, h, p), l.render(i, !0, !0), Ut(t, c), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;)
                        if (o = J(p[r], h[r], c[r]), o.firstMPT) {
                            o = o.difs;
                            for (s in n) f[s] && (o[s] = n[s]);
                            a = {};
                            for (s in o) a[s] = h[r][s];
                            u.push(e.fromTo(p[r], i, a, o))
                        }
                    return u
                }, t.activate([s]), s
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), o = r.length, s = {}, a = n._propLookup.roundProps; --o > -1;) s[r[o]] = 1;
                    for (o = r.length; --o > -1;)
                        for (t = r[o], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(s, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
                    return !1
                }, e._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                var t = /(?:\d|\-|\+|=|#|\.)*/g,
                    e = /[A-Za-z%]/g;
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.4.0",
                    init: function(i, n, r) {
                        var o, s, a, l, u;
                        if ("function" != typeof i.setAttribute) return !1;
                        this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};
                        for (o in n) this._start[o] = this._proxy[o] = s = i.getAttribute(o) + "", this._end[o] = a = n[o] + "", this._suffix[o] = l = e.test(a) ? a.replace(t, "") : e.test(s) ? s.replace(t, "") : "", l && (u = a.indexOf(l), -1 !== u && (a = a.substr(0, u))), this._addTween(this._proxy, o, parseFloat(s), a, o) || (this._suffix[o] = ""), "=" === a.charAt(1) && (this._end[o] = this._firstPT.s + this._firstPT.c + l), this._overwriteProps.push(o);
                        return !0
                    },
                    set: function(t) {
                        this._super.setRatio.call(this, t);
                        for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start, o = r === this._proxy; --n > -1;) e = i[n], this._target.setAttribute(e, r[e] + (o ? this._suffix[e] : ""))
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, r, o, s, a, l, u = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), r = l[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), s = this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? o + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0, a = s - o, l.length && (r = l.join("_"), -1 !== r.indexOf("short") && (a %= u, a !== a % (u / 2) && (a = 0 > a ? a + u : a - u)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * u) % u - (a / u | 0) * u : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * u) % u - (a / u | 0) * u)), (a > h || -h > a) && (this._addTween(t, n, o, o + a, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    o = r.com.greensock,
                    s = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = o._class,
                    u = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    h = t.register || function() {},
                    c = function(t, e, i, n, r) {
                        var o = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return h(o, t), o
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    d = c("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, o, s, a, l = e.taper || "none", u = [], h = 0, c = 0 | (e.points || 20), f = c, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / c * f, n = g ? g.getRatio(i) : i, "none" === l ? r = v : "out" === l ? (o = 1 - i, r = o * o * v) : "in" === l ? r = i * i * v : .5 > i ? (o = 2 * i, r = o * o * .5 * v) : (o = 2 * (1 - i), r = o * o * .5 * v), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), u[h++] = {
                        x: i,
                        y: n
                    };
                    for (u.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), f = c; --f > -1;) s = u[f], a = new p(s.x, s.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, c("Bounce", u("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), u("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), u("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), c("Circ", u("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), u("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), u("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / s * (Math.asin(1 / this._p1) || 0), this._p2 = s / this._p2
                        }, !0),
                        o = r.prototype = new t;
                    return o.constructor = r, o.getRatio = i, o.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, c("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), c("Expo", u("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), u("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), u("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), c("Sine", u("SineOut", function(t) {
                    return Math.sin(t * a)
                }), u("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), u("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), h(r.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, o, s, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; e < n.length; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                u = l("com.greensock"),
                h = 1e-10,
                c = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                p = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                m = function(n, r, o, s) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = o;
                    var a = [];
                    this.check = function(u) {
                        for (var h, c, p, f, g = r.length, v = g; --g > -1;)(h = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = h.gsClass, v--) : u && h.sc.push(this);
                        if (0 === v && o)
                            for (c = ("com.greensock." + n).split("."), p = c.pop(), f = l(c.join("."))[p] = this.gsClass = o.apply(o, a), s && (i[p] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return f
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = f)), g = 0; g < this.sc.length; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                v = u._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var y = [0, 0, 1, 1],
                _ = [],
                x = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                b = x.map = {},
                w = x.register = function(t, e, i, n) {
                    for (var r, o, s, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (o = l[h], r = n ? v("easing." + o, null, !0) : u.easing[o] || {}, s = c.length; --s > -1;) a = c[s], b[o + "." + a] = b[a + o] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (o = x.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) o = n[r] + ",Power" + r, w(new x(null, null, 1, r), o, "easeOut", !0), w(new x(null, null, 2, r), o, "easeIn" + (0 === r ? ",easeNone" : "")), w(new x(null, null, 3, r), o, "easeInOut");
            b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = T.prototype, o.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var o, l, u = this._listeners[t],
                    h = 0;
                for (null == u && (this._listeners[t] = u = []), l = u.length; --l > -1;) o = u[l], o.c === e && o.s === i ? u.splice(l, 1) : 0 === h && o.pr < r && (h = l + 1);
                u.splice(h, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== s || a || s.wake()
            }, o.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var S = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                E = Date.now || function() {
                    return (new Date).getTime()
                },
                P = E();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = t[n[r] + "RequestAnimationFrame"], C = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, r, o, l, u = this,
                    c = E(),
                    f = e !== !1 && S,
                    d = 500,
                    m = 33,
                    g = "tick",
                    v = function(t) {
                        var e, s, a = E() - P;
                        a > d && (c += a - m), P += a, u.time = (P - c) / 1e3, e = u.time - l, (!i || e > 0 || t === !0) && (u.frame++, l += e + (e >= o ? .004 : o - e), s = !0), t !== !0 && (r = n(v)), s && u.dispatchEvent(g)
                    };
                T.call(u), u.time = u.frame = 0, u.tick = function() {
                    v(!0)
                }, u.lagSmoothing = function(t, e) {
                    d = t || 1 / h, m = Math.min(e, d, 0)
                }, u.sleep = function() {
                    null != r && (f && C ? C(r) : clearTimeout(r), n = p, r = null, u === s && (a = !1))
                }, u.wake = function() {
                    null !== r ? u.sleep() : u.frame > 10 && (P = E() - d + 5), n = 0 === i ? p : f && S ? S : function(t) {
                        return setTimeout(t, 1e3 * (l - u.time) + 1 | 0)
                    }, u === s && (a = !0), v(2)
                }, u.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void u.wake()) : i
                }, u.useRAF = function(t) {
                    return arguments.length ? (u.sleep(), f = t, void u.fps(i)) : f
                }, u.fps(t), setTimeout(function() {
                    f && u.frame < 5 && u.useRAF(!1)
                }, 1500)
            }), o = u.Ticker.prototype = new u.events.EventDispatcher, o.constructor = u.Ticker;
            var k = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, H) {
                    a || s.wake();
                    var i = this.vars.useFrames ? B : H;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            s = k.ticker = new u.Ticker, o = k.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var A = function() {
                a && E() - P > 2e3 && s.wake(), setTimeout(A, 2e3)
            };
            A(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function(t, e, i) {}, o.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, o._enabled = function(t, e) {
                return a || s.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0,
                    e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || _)
            }, o.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (a || s.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), D.length && X())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || h, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (a || t || s.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
            };
            var L = v("core.SimpleTimeline", function(t) {
                k.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = L.prototype = new k, o.constructor = L, o.kill()._gc = !1, o._first = o._last = o._recent = null, o._sortChildren = !1, o.add = o.insert = function(t, e, i, n) {
                var r, o;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (o = t._startTime; r && r._startTime > o;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, o.rawTime = function() {
                return a || s.wake(), this._totalTime
            };
            var z = v("TweenLite", function(e, i, n) {
                    if (k.call(this, i, n), this.render = z.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : z.selector(e) || e;
                    var r, o, s, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = s = c(e), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++) o = s[r], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(c(o))) : (this._siblings[r] = Y(o, this, !1), 1 === l && this._siblings[r].length > 1 && $(o, this, null, 1, this._siblings[r])) : (o = s[r--] = z.selector(o), "string" == typeof o && s.splice(r + 1, 1)) : s.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && $(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -h, this.render(-this._delay))
                }, !0),
                O = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                R = function(t, e) {
                    var i, n = {};
                    for (i in t) F[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            o = z.prototype = new k, o.constructor = z, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, z.version = "1.17.0", z.defaultEase = o._ease = new x(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = s, z.autoSleep = 120, z.lagSmoothing = function(t, e) {
                s.lagSmoothing(t, e)
            }, z.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (z.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var D = [],
                I = {},
                M = z._internals = {
                    isArray: f,
                    isSelector: O,
                    lazyTweens: D
                },
                N = z._plugins = {},
                j = M.tweenLookup = {},
                q = 0,
                F = M.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                B = k._rootFramesTimeline = new L,
                H = k._rootTimeline = new L,
                U = 30,
                X = M.lazyRender = function() {
                    var t, e = D.length;
                    for (I = {}; --e > -1;) t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    D.length = 0
                };
            H._startTime = s.time, B._startTime = s.frame, H._active = B._active = !0, setTimeout(X, 1), k._updateRoot = z.render = function() {
                var t, e, i;
                if (D.length && X(), H.render((s.time - H._startTime) * H._timeScale, !1, !1), B.render((s.frame - B._startTime) * B._timeScale, !1, !1), D.length && X(), s.frame >= U) {
                    U = s.frame + (parseInt(z.autoSleep, 10) || 120);
                    for (i in j) {
                        for (e = j[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete j[i]
                    }
                    if (i = H._first, (!i || i._paused) && z.autoSleep && !B._first && 1 === s._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || s.sleep()
                    }
                }
            }, s.addEventListener("tick", k._updateRoot);
            var Y = function(t, e, i) {
                    var n, r, o = t._gsTweenID;
                    if (j[o || (t._gsTweenID = o = "t" + q++)] || (j[o] = {
                            target: t,
                            tweens: []
                        }), e && (n = j[o].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return j[o].tweens
                },
                V = function(t, e, i, n) {
                    var r, o, s = t.vars.onOverwrite;
                    return s && (r = s(t, e, i, n)), s = z.onOverwrite, s && (o = s(t, e, i, n)), r !== !1 && o !== !1
                },
                $ = function(t, e, i, n, r) {
                    var o, s, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, o = 0; l > o; o++)
                            if ((a = r[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                            else if (5 === n) break;
                        return s
                    }
                    var u, c = e._startTime + h,
                        p = [],
                        f = 0,
                        d = 0 === e._duration;
                    for (o = r.length; --o > -1;)(a = r[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || Q(e, 0, d), 0 === Q(a, u, d) && (p[f++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((d || !a._initted) && c - a._startTime <= 2e-10 || (p[f++] = a)));
                    for (o = f; --o > -1;)
                        if (a = p[o], 2 === n && a._kill(i, t, e) && (s = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !V(a, e)) continue;
                            a._enabled(!1, !1) && (s = !0)
                        }
                    return s
                },
                Q = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= r, o > e ? o - e : i && o === e || !t._initted && 2 * h > o - e ? h : (o += t.totalDuration() / t._timeScale / r) > e + h ? 0 : o - e - h
                };
            o._init = function() {
                var t, e, i, n, r, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    l = !!o.immediateRender,
                    u = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && o.lazy !== !1, r.startAt = r.delay = null, this._startAt = z.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in o) F[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = z.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = u = u ? u instanceof x ? u : "function" == typeof u ? new x(u, o.easeParams) : b[u] || z.defaultEase : z.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (e && z._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, n, r) {
                var o, s, a, l, u, h;
                if (null == e) return !1;
                I[e._gsTweenID] && X(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && R(this.vars, e);
                for (o in this.vars) {
                    if (h = this.vars[o], F[o]) h && (h instanceof Array || h.push && f(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[o] = h = this._swapSelfInParams(h, this));
                    else if (N[o] && (l = new N[o])._onInitTween(e, this.vars[o], this)) {
                        for (this._firstPT = u = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: o,
                                pg: !0,
                                pr: l._priority
                            }, s = l._overwriteProps.length; --s > -1;) i[l._overwriteProps[s]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[o] = u = {
                        _next: this._firstPT,
                        t: e,
                        p: o,
                        f: "function" == typeof e[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, u.s = u.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), u.c = "string" == typeof h && "=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2)) : Number(h) - u.s || 0;
                    u && u._next && (u._next._prev = u)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && $(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (I[e._gsTweenID] = !0), a)
            }, o.render = function(t, e, i) {
                var n, r, o, s, a = this._time,
                    l = this._duration,
                    u = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > u || u === h && "isPause" !== this.data) && u !== t && (i = !0, u > h && (r = "onReverseComplete")), this._rawPrevTime = s = !e || t || u === t ? t : h);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && u > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (u >= 0 && (u !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || u === t ? t : h)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        p = this._easeType,
                        f = this._easePower;
                    (1 === p || 3 === p && c >= .5) && (c = 1 - c), 3 === p && (c *= 2), 1 === f ? c *= c : 2 === f ? c *= c * c : 3 === f ? c *= c * c * c : 4 === f && (c *= c * c * c * c), this.ratio = 1 === p ? 1 - c : 2 === p ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, D.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === h && s !== h && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
                var n, r, o, s, a, l, u, h, c, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || O(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (u = t || a, h = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                            for (o in u) a[o] && (c || (c = []), c.push(o));
                            if ((c || !t) && !V(this, i, e, c)) return !1
                        }
                        for (o in u)(s = a[o]) && (p && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, l = !0), s.pg && s.t._kill(u) && (l = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), h && (r[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], k.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -h, this.render(-this._delay)), this
            }, o._enabled = function(t, e) {
                if (a || s.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Y(n[i], this, !0);
                    else this._siblings = Y(this.target, this, !0)
                }
                return k.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? z._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, z.to = function(t, e, i) {
                return new z(t, e, i)
            }, z.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
            }, z.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new z(t, e, n)
            }, z.delayedCall = function(t, e, i, n, r) {
                return new z(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, z.set = function(t, e) {
                return new z(t, 0, e)
            }, z.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : z.selector(t) || t;
                var i, n, r, o;
                if ((f(t) || O(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(z.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], r = i; --r > -1;) o === n[r] && n.splice(i, 1)
                } else
                    for (n = Y(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, z.killTweensOf = z.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = z.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var G = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = G.prototype
            }, !0);
            if (o = G.prototype, G.version = "1.10.1", G.API = 2, o._firstPT = null, o._addTween = function(t, e, i, n, r, o) {
                    var s, a;
                    return null != n && (s = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: s,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: o
                    }, a._next && (a._next._prev = a), a) : void 0
                }, o.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, o._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, o._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, z._onPluginEvent = function(t, e) {
                    var i, n, r, o, s, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (s = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : o) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : o = a, a = s
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, G.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === G.API && (N[(new t[e])._propName] = t[e]);
                    return !0
                }, g.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        s = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            G.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = s.prototype = new G(i);
                    a.constructor = s, s.API = t.API;
                    for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                    return s.version = t.version, G.activate([s]), s
                }, n = t._gsQueue) {
                for (r = 0; r < n.length; r++) n[r]();
                for (o in d) d[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            o = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                o = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(o ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, o = this.getListenersAsObject(t);
            for (r in o) o.hasOwnProperty(r) && (n = e(o[r], i), -1 !== n && o[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, o = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) o.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? o.call(this, n, r) : s.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, o, s = this.getListenersAsObject(t);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (n = s[r].length; n--;) i = s[r][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = o, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : t.eventie = o
    }(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function r(t) {
            return "[object Array]" === p.call(t)
        }

        function o(t) {
            var e = [];
            if (r(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function s(t, e, i) {
            if (!(this instanceof s)) return new s(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = o(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), u && (this.jqDeferred = new u.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var u = t.jQuery,
            h = t.console,
            c = void 0 !== h,
            p = Object.prototype.toString;
        s.prototype = new e, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var r = i.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var a = r[o];
                        this.addImage(a)
                    }
            }
        }, s.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, s.prototype.check = function() {
            function t(t, r) {
                return e.options.debug && c && h.log("confirm", t, r), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var r = 0; n > r; r++) {
                var o = this.images[r];
                o.on("confirm", t), o.check()
            }
        }, s.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, s.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, u && (u.fn.imagesLoaded = function(t, e) {
            var i = new s(this, t, e);
            return i.jqDeferred.promise(u(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, s
    }), ! function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function r(e, i) {
                t.fn[e] = function(r) {
                    if ("string" == typeof r) {
                        for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var u = this[a],
                                h = t.data(u, e);
                            if (h)
                                if (t.isFunction(h[r]) && "_" !== r.charAt(0)) {
                                    var c = h[r].apply(h, s);
                                    if (void 0 !== c) return c
                                } else o("no such method '" + r + "' for " + e + " instance");
                            else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var o = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), r(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : t.eventie = o
    }(window),
    function() {
        "use strict";

        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            o = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                o = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(o ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, o = this.getListenersAsObject(t);
            for (r in o) o.hasOwnProperty(r) && (n = e(o[r], i), -1 !== n && o[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, o = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) o.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? o.call(this, n, r) : s.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, o, s = this.getListenersAsObject(t);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (n = s[r].length; n--;) i = s[r][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = o, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, r = 0, o = i.length; o > r; r++)
                    if (e = i[r] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t, e) {
        function i(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function n() {}

        function r() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = a.length; i > e; e++) {
                var n = a[e];
                t[n] = 0
            }
            return t
        }

        function o(e) {
            function n() {
                if (!p) {
                    p = !0;
                    var n = t.getComputedStyle;
                    if (u = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle;

                            };
                            return function(e) {
                                var i = t(e);
                                return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), h = e("boxSizing")) {
                        var r = document.createElement("div");
                        r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[h] = "border-box";
                        var o = document.body || document.documentElement;
                        o.appendChild(r);
                        var a = u(r);
                        c = 200 === i(a.width), o.removeChild(r)
                    }
                }
            }

            function o(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var e = u(t);
                    if ("none" === e.display) return r();
                    var o = {};
                    o.width = t.offsetWidth, o.height = t.offsetHeight;
                    for (var s = o.isBorderBox = !(!h || !e[h] || "border-box" !== e[h]), p = 0, f = a.length; f > p; p++) {
                        var d = a[p],
                            m = e[d];
                        m = l(t, m);
                        var g = parseFloat(m);
                        o[d] = isNaN(g) ? 0 : g
                    }
                    var v = o.paddingLeft + o.paddingRight,
                        y = o.paddingTop + o.paddingBottom,
                        _ = o.marginLeft + o.marginRight,
                        x = o.marginTop + o.marginBottom,
                        b = o.borderLeftWidth + o.borderRightWidth,
                        w = o.borderTopWidth + o.borderBottomWidth,
                        T = s && c,
                        S = i(e.width);
                    S !== !1 && (o.width = S + (T ? 0 : v + b));
                    var C = i(e.height);
                    return C !== !1 && (o.height = C + (T ? 0 : y + w)), o.innerWidth = o.width - (v + b), o.innerHeight = o.height - (y + w), o.outerWidth = o.width + _, o.outerHeight = o.height + x, o
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    r = n.left,
                    o = e.runtimeStyle,
                    s = o && o.left;
                return s && (o.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = r, s && (o.left = s), i
            }
            var u, h, c, p = !1;
            return o
        }
        var s = "undefined" == typeof console ? n : function(t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== o.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var n = s[t];
                n()
            }
        }

        function r(r) {
            return "complete" === o.readyState ? n() : (r.bind(o, "DOMContentLoaded", i), r.bind(o, "readystatechange", i), r.bind(t, "load", i)), e
        }
        var o = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], r) : "object" == typeof exports ? module.exports = r(require("eventie")) : t.docReady = r(t.eventie)
    }(window),
    function(t) {
        "use strict";

        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), r = 0, o = n.length; o > r; r++)
                if (n[r] === t) return !0;
            return !1
        }

        function r(t, n) {
            return i(t), e(t, n)
        }
        var o, s = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var r = e[i],
                    o = r + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                l = e(a, "div");
            o = l ? e : r
        } else o = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return o
        }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
    }(Element.prototype),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var r = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == r.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var r = [], o = 0, s = t.length; s > o; o++) {
                var a = t[o];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && r.push(a);
                        for (var l = a.querySelectorAll(e), u = 0, h = l.length; h > u; u++) r.push(l[u])
                    } else r.push(a)
            }
            return r
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function() {
                    n.apply(o, e), delete o[r]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var o = t.console;
        return n.htmlInit = function(i, r) {
            e(function() {
                for (var e = n.toDashed(r), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                    var h, c = s[l],
                        p = c.getAttribute(a);
                    try {
                        h = p && JSON.parse(p)
                    } catch (f) {
                        o && o.error("Error parsing " + a + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + f);
                        continue
                    }
                    var d = new i(c, h),
                        m = t.jQuery;
                    m && m.data(c, r, d)
                }
            })
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, r, o) {
            return e(t, i, n, r, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, n, r) {
        "use strict";

        function o(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function s(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function a(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var l = t.getComputedStyle,
            u = l ? function(t) {
                return l(t, null)
            } : function(t) {
                return t.currentStyle
            },
            h = n("transition"),
            c = n("transform"),
            p = h && c,
            f = !!n("perspective"),
            d = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[h],
            m = ["transform", "transition", "transitionDuration", "transitionProperty"],
            g = function() {
                for (var t = {}, e = 0, i = m.length; i > e; e++) {
                    var r = m[e],
                        o = n(r);
                    o && o !== r && (t[r] = o)
                }
                return t
            }();
        r.extend(s.prototype, e.prototype), s.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.getSize = function() {
            this.size = i(this.element)
        }, s.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = g[i] || i;
                e[n] = t[i]
            }
        }, s.prototype.getPosition = function() {
            var t = u(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                r = t[i ? "left" : "right"],
                o = t[n ? "top" : "bottom"],
                s = this.layout.size,
                a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.width : parseInt(r, 10),
                l = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
            a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? s.paddingLeft : s.paddingRight, l -= n ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = l
        }, s.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                r = e.isOriginLeft ? "left" : "right",
                o = e.isOriginLeft ? "right" : "left",
                s = this.position.x + t[n];
            i[r] = this.getXValue(s), i[o] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                u = e.isOriginTop ? "bottom" : "top",
                h = this.position.y + t[a];
            i[l] = this.getYValue(h), i[u] = "", this.css(i), this.emitEvent("layout", [this])
        }, s.prototype.getXValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, s.prototype.getYValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, s.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                u = {};
            u.transform = this.getTranslate(a, l), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, s.prototype.getTranslate = function(t, e) {
            var i = this.layout.options;
            return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, f ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
        }, s.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, s.prototype.moveTo = p ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, s.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, s.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var v = "opacity," + a(g.transform || "transform");
        s.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: v,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(d, this, !1))
        }, s.prototype.transition = s.prototype[h ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, s.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var y = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        s.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = y[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], o(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var n = e.onEnd[i];
                    n.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, s.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
        }, s.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var _ = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return s.prototype.removeTransitionStyles = function() {
            this.css(_)
        }, s.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, s.prototype.remove = function() {
            if (!h || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, s.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, s.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, s.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, s.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, s
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, r, o, s) {
            return e(t, i, n, r, o, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, r, o) {
        "use strict";

        function s(t, e) {
            var i = r.getQueryElement(t);
            if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, l && (this.$element = l(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
            var n = ++h;
            this.element.outlayerGUID = n, c[n] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            l = t.jQuery,
            u = function() {},
            h = 0,
            c = {};
        return s.namespace = "outlayer", s.Item = o, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, r.extend(s.prototype, i.prototype), s.prototype.option = function(t) {
            r.extend(this.options, t)
        }, s.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, s.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, s.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0, o = e.length; o > r; r++) {
                var s = e[r],
                    a = new i(s, this);
                n.push(a)
            }
            return n
        }, s.prototype._filterFindItemElements = function(t) {
            return r.filterFindElements(t, this.options.itemSelector)
        }, s.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, s.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function() {
            this.getSize()
        }, s.prototype.getSize = function() {
            this.size = n(this.element)
        }, s.prototype._getMeasurement = function(t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : r.isElement(o) && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
        }, s.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, s.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                r.isIgnored || e.push(r)
            }
            return e
        }, s.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, r = t.length; r > n; n++) {
                    var o = t[n],
                        s = this._getItemLayoutPosition(o);
                    s.item = o, s.isInstant = e || o.isLayoutInstant, i.push(s)
                }
                this._processLayoutQueue(i)
            }
        }, s.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, s.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, s.prototype._positionItem = function(t, e, i, n) {
            n ? t.goTo(e, i) : t.moveTo(e, i)
        }, s.prototype._postLayout = function() {
            this.resizeContainer()
        }, s.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, s.prototype._getContainerSize = u, s.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, s.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                r.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                s++, s === o && i()
            }
            var r = this,
                o = e.length;
            if (!e || !o) return void i();
            for (var s = 0, a = 0, l = e.length; l > a; a++) {
                var u = e[a];
                u.once(t, n)
            }
        }, s.prototype.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var r = l.Event(e);
                    r.type = t, this.$element.trigger(r, i)
                } else this.$element.trigger(t, i)
        }, s.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, s.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, s.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, s.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    r.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, s.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
        }, s.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, s.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, s.prototype._manageStamp = u, s.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t),
                o = {
                    left: e.left - i.left - r.marginLeft,
                    top: e.top - i.top - r.marginTop,
                    right: i.right - e.right - r.marginRight,
                    bottom: i.bottom - e.bottom - r.marginBottom
                };
            return o
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, s.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, s.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, s.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, s.prototype.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, s.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, s.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, s.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, s.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.reveal()
            }
        }, s.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.hide()
            }
        }, s.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, s.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, s.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                if (n.element === t) return n
            }
        }, s.prototype.getItems = function(t) {
            t = r.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var o = t[i],
                    s = this.getItem(o);
                s && e.push(s)
            }
            return e
        }, s.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var o = e[i];
                    o.remove(), r.removeFrom(this.items, o)
                }
        }, s.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                n.destroy()
            }
            this.unbindResize();
            var r = this.element.outlayerGUID;
            delete c[r], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            t = r.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && c[e]
        }, s.create = function(t, e) {
            function i() {
                s.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(s.prototype) : r.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = r.extend({}, s.defaults), r.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function() {
                o.apply(this, arguments)
            }, i.Item.prototype = new o, r.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        }, s.Item = o, s
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function() {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], r = 0, o = n.length; o > r; r++) {
                var s = n[r];
                i.prototype[s] = t(s)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var r = this.getFirstItemSize();
                this[i] = r && r[n] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function n() {
                i.apply(this, arguments)
            }
            return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                o = r / n,
                s = n - r % n,
                a = s && 1 > s ? "round" : "floor";
            o = Math[a](o), this.cols = Math.max(o, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && 1 > e ? "round" : "ceil",
                r = Math[n](t.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            for (var o = this._getColGroup(r), s = Math.min.apply(Math, o), a = i.indexOf(o, s), l = {
                    x: this.columnWidth * a,
                    y: s
                }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, c = 0; h > c; c++) this.colYs[a + c] = u;
            return l
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var r = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, r)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                r = this.options.isOriginLeft ? n.left : n.right,
                o = r + i.outerWidth,
                s = Math.floor(r / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(o / this.columnWidth);
            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
        }, n.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";

        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }
        var n = t.create("masonry"),
            r = n.prototype._getElementOffset,
            o = n.prototype.layout,
            s = n.prototype._getMeasurement;
        i(n.prototype, e.prototype), n.prototype._getElementOffset = r, n.prototype.layout = o, n.prototype._getMeasurement = s;
        var a = n.prototype.measureColumns;
        n.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var l = n.prototype._manageStamp;
        return n.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, r, o, s, a) {
            return e(t, i, n, r, o, s, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, n, r, o, s) {
        function a(t, e) {
            return function(i, n) {
                for (var r = 0, o = t.length; o > r; r++) {
                    var s = t[r],
                        a = i.sortData[s],
                        l = n.sortData[s];
                    if (a > l || l > a) {
                        var u = void 0 !== e[s] ? e[s] : e,
                            h = u ? 1 : -1;
                        return (a > l ? 1 : -1) * h
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            u = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            h = document.documentElement,
            c = h.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            p = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        p.Item = o, p.LayoutMode = s, p.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in s.modes) this._initLayoutMode(t)
        }, p.prototype.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, p.prototype._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                r.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, p.prototype._initLayoutMode = function(t) {
            var e = s.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? r.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, p.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, p.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, p.prototype.arrange = function(t) {
            function e() {
                n.reveal(i.needReveal), n.hide(i.needHide)
            }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var n = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, p.prototype._init = p.prototype.arrange, p.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, p.prototype._bindArrangeComplete = function() {
            function t() {
                e && i && n && r.dispatchEvent("arrangeComplete", null, [r.filteredItems])
            }
            var e, i, n, r = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                n = !0, t()
            })
        }, p.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], r = [], o = this._getFilterTest(e), s = 0, a = t.length; a > s; s++) {
                var l = t[s];
                if (!l.isIgnored) {
                    var u = o(l);
                    u && i.push(l), u && l.isHidden ? n.push(l) : u || l.isHidden || r.push(l)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: r
            }
        }, p.prototype._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                return l(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return n(e.element, t);

            }
        }, p.prototype.updateSortData = function(t) {
            var e;
            t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, p.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = f(i)
            }
        }, p.prototype._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
        var f = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = u(t).split(" "),
                    n = i[0],
                    r = n.match(/^\[(.+)\]$/),
                    o = r && r[1],
                    s = e(o, n),
                    a = p.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(s(t))
                } : function(t) {
                    return t && s(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && c(i)
                }
            }
            return t
        }();
        p.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, p.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, p.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, p.prototype._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, p.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, p.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, p.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, p.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, p.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, p.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, p.prototype._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, p.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, r = e.length;
                for (i = 0; r > i; i++) n = e[i], this.element.appendChild(n.element);
                var o = this._filter(e).matches;
                for (i = 0; r > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; r > i; i++) delete e[i].isLayoutInstant;
                this.reveal(o)
            }
        };
        var d = p.prototype.remove;
        return p.prototype.remove = function(t) {
            t = r.makeArray(t);
            var e = this.getItems(t);
            d.call(this, t);
            var i = e && e.length;
            if (i)
                for (var n = 0; i > n; n++) {
                    var o = e[n];
                    r.removeFrom(this.filteredItems, o)
                }
        }, p.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var i = this.items[t];
                i.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, p.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, p.prototype.getFilteredItemElements = function() {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
            return t
        }, p
    }), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, r) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, r)
        },
        easeInQuad: function(t, e, i, n, r) {
            return n * (e /= r) * e + i
        },
        easeOutQuad: function(t, e, i, n, r) {
            return -n * (e /= r) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, r) {
            return n * (e /= r) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, r) {
            return n * ((e = e / r - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, r) {
            return n * (e /= r) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, r) {
            return -n * ((e = e / r - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, r) {
            return n * (e /= r) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, r) {
            return n * ((e = e / r - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, r) {
            return -n * Math.cos(e / r * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, r) {
            return n * Math.sin(e / r * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, r) {
            return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + i
        },
        easeInExpo: function(t, e, i, n, r) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / r - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, r) {
            return e == r ? i + n : n * (-Math.pow(2, -10 * e / r) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, r) {
            return 0 == e ? i : e == r ? i + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, r) {
            return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, r) {
            return n * Math.sqrt(1 - (e = e / r - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, r) {
            return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= r)) return i + n;
            if (s || (s = .3 * r), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s)) + i
        },
        easeOutElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= r)) return i + n;
            if (s || (s = .3 * r), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin(2 * (e * r - o) * Math.PI / s) + n + i
        },
        easeInOutElastic: function(t, e, i, n, r) {
            var o = 1.70158,
                s = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= r / 2)) return i + n;
            if (s || (s = .3 * r * 1.5), a < Math.abs(n)) {
                a = n;
                var o = s / 4
            } else var o = s / (2 * Math.PI) * Math.asin(n / a);
            return 1 > e ? -.5 * a * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * r - o) * Math.PI / s) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), n * (e /= r) * e * ((o + 1) * e - o) + i
        },
        easeOutBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), n * ((e = e / r - 1) * e * ((o + 1) * e + o) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, r, o) {
            return void 0 == o && (o = 1.70158), (e /= r / 2) < 1 ? n / 2 * e * e * (((o *= 1.525) + 1) * e - o) + i : n / 2 * ((e -= 2) * e * (((o *= 1.525) + 1) * e + o) + 2) + i
        },
        easeInBounce: function(t, e, i, n, r) {
            return n - jQuery.easing.easeOutBounce(t, r - e, 0, n, r) + i
        },
        easeOutBounce: function(t, e, i, n, r) {
            return (e /= r) < 1 / 2.75 ? 7.5625 * n * e * e + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, r) {
            return r / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - r, 0, n, r) + .5 * n + i
        }
    }), ! function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function r(e, i) {
                t.fn[e] = function(r) {
                    if ("string" == typeof r) {
                        for (var s = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var u = this[a],
                                h = t.data(u, e);
                            if (h)
                                if (t.isFunction(h[r]) && "_" !== r.charAt(0)) {
                                    var c = h[r].apply(h, s);
                                    if (void 0 !== c) return c
                                } else o("no such method '" + r + "' for " + e + " instance");
                            else o("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var o = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), r(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var o = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : "object" == typeof exports ? module.exports = o : t.eventie = o
    }(window),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            o = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                o = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(o ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, o = this.getListenersAsObject(t);
            for (r in o) o.hasOwnProperty(r) && (n = e(o[r], i), -1 !== n && o[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, o = t ? this.removeListener : this.addListener,
                s = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) o.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? o.call(this, n, r) : s.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, o, s = this.getListenersAsObject(t);
            for (r in s)
                if (s.hasOwnProperty(r))
                    for (n = s[r].length; n--;) i = s[r][n], i.once === !0 && this.removeListener(t, i.listener), o = i.listener.apply(this, e || []), o === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = o, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, r = 0, o = i.length; o > r; r++)
                    if (e = i[r] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {}

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = s.length; i > e; e++) {
                var n = s[e];
                t[n] = 0
            }
            return t
        }

        function r(i) {
            function r() {
                if (!p) {
                    p = !0;
                    var n = t.getComputedStyle;
                    if (u = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || o("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), h = i("boxSizing")) {
                        var r = document.createElement("div");
                        r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[h] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(r);
                        var a = u(r);
                        c = 200 === e(a.width), s.removeChild(r)
                    }
                }
            }

            function a(t) {
                if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = u(t);
                    if ("none" === i.display) return n();
                    var o = {};
                    o.width = t.offsetWidth, o.height = t.offsetHeight;
                    for (var a = o.isBorderBox = !(!h || !i[h] || "border-box" !== i[h]), p = 0, f = s.length; f > p; p++) {
                        var d = s[p],
                            m = i[d];
                        m = l(t, m);
                        var g = parseFloat(m);
                        o[d] = isNaN(g) ? 0 : g
                    }
                    var v = o.paddingLeft + o.paddingRight,
                        y = o.paddingTop + o.paddingBottom,
                        _ = o.marginLeft + o.marginRight,
                        x = o.marginTop + o.marginBottom,
                        b = o.borderLeftWidth + o.borderRightWidth,
                        w = o.borderTopWidth + o.borderBottomWidth,
                        T = a && c,
                        S = e(i.width);
                    S !== !1 && (o.width = S + (T ? 0 : v + b));
                    var C = e(i.height);
                    return C !== !1 && (o.height = C + (T ? 0 : y + w)), o.innerWidth = o.width - (v + b), o.innerHeight = o.height - (y + w), o.outerWidth = o.width + _, o.outerHeight = o.height + x, o
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    r = n.left,
                    o = e.runtimeStyle,
                    s = o && o.left;
                return s && (o.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = r, s && (o.left = s), i
            }
            var u, h, c, p = !1;
            return a
        }
        var o = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            },
            s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : s.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== o.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = s.length; i > t; t++) {
                var n = s[t];
                n()
            }
        }

        function r(r) {
            return "complete" === o.readyState ? n() : (r.bind(o, "DOMContentLoaded", i), r.bind(o, "readystatechange", i), r.bind(t, "load", i)), e
        }
        var o = t.document,
            s = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], r) : "object" == typeof exports ? module.exports = r(require("eventie")) : t.docReady = r(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), r = 0, o = n.length; o > r; r++)
                if (n[r] === t) return !0;
            return !1
        }

        function r(t, n) {
            return i(t), e(t, n)
        }
        var o, s = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var r = e[i],
                    o = r + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                l = e(a, "div");
            o = l ? e : r
        } else o = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return o
        }) : "object" == typeof exports ? module.exports = o : window.matchesSelector = o
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var r = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == r.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var r = [], o = 0, s = t.length; s > o; o++) {
                var a = t[o];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && r.push(a);
                        for (var l = a.querySelectorAll(e), u = 0, h = l.length; h > u; u++) r.push(l[u])
                    } else r.push(a)
            }
            return r
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function() {
                    n.apply(o, e), delete o[r]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var o = t.console;
        return n.htmlInit = function(i, r) {
            e(function() {
                for (var e = n.toDashed(r), s = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, u = s.length; u > l; l++) {
                    var h, c = s[l],
                        p = c.getAttribute(a);
                    try {
                        h = p && JSON.parse(p)
                    } catch (f) {
                        o && o.error("Error parsing " + a + " on " + c.nodeName.toLowerCase() + (c.id ? "#" + c.id : "") + ": " + f);
                        continue
                    }
                    var d = new i(c, h),
                        m = t.jQuery;
                    m && m.data(c, r, d)
                }
            })
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, r, o) {
            return e(t, i, n, r, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, n, r) {
        function o(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function s(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function a(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var l = t.getComputedStyle,
            u = l ? function(t) {
                return l(t, null)
            } : function(t) {
                return t.currentStyle
            },
            h = n("transition"),
            c = n("transform"),
            p = h && c,
            f = !!n("perspective"),
            d = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[h],
            m = ["transform", "transition", "transitionDuration", "transitionProperty"],
            g = function() {
                for (var t = {}, e = 0, i = m.length; i > e; e++) {
                    var r = m[e],
                        o = n(r);
                    o && o !== r && (t[r] = o)
                }
                return t
            }();
        r.extend(s.prototype, e.prototype), s.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.getSize = function() {
            this.size = i(this.element)
        }, s.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = g[i] || i;
                e[n] = t[i]
            }
        }, s.prototype.getPosition = function() {
            var t = u(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                r = t[i ? "left" : "right"],
                o = t[n ? "top" : "bottom"],
                s = parseInt(r, 10),
                a = parseInt(o, 10),
                l = this.layout.size;
            s = -1 != r.indexOf("%") ? s / 100 * l.width : s, a = -1 != o.indexOf("%") ? a / 100 * l.height : a, s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= i ? l.paddingLeft : l.paddingRight, a -= n ? l.paddingTop : l.paddingBottom, this.position.x = s, this.position.y = a
        }, s.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                r = e.isOriginLeft ? "left" : "right",
                o = e.isOriginLeft ? "right" : "left",
                s = this.position.x + t[n];
            i[r] = this.getXValue(s), i[o] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                u = e.isOriginTop ? "bottom" : "top",
                h = this.position.y + t[a];
            i[l] = this.getYValue(h), i[u] = "", this.css(i), this.emitEvent("layout", [this])
        }, s.prototype.getXValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, s.prototype.getYValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, s.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                u = {};
            u.transform = this.getTranslate(a, l), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, s.prototype.getTranslate = function(t, e) {
            var i = this.layout.options;
            return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, t = this.getXValue(t), e = this.getYValue(e), f ? "translate3d(" + t + ", " + e + ", 0)" : "translate(" + t + ", " + e + ")"
        }, s.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, s.prototype.moveTo = p ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, s.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, s.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var v = "opacity," + a(g.transform || "transform");
        s.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: v,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(d, this, !1))
        }, s.prototype.transition = s.prototype[h ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, s.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var y = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        s.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = y[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], o(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var n = e.onEnd[i];
                    n.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, s.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
        }, s.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var _ = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return s.prototype.removeTransitionStyles = function() {
            this.css(_)
        }, s.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, s.prototype.remove = function() {
            if (!h || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, s.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, s.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, s.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, s.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, s.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, r, o, s) {
            return e(t, i, n, r, o, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, r, o) {
        function s(t, e) {
            var i = r.getQueryElement(t);
            if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, l && (this.$element = l(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
            var n = ++h;
            this.element.outlayerGUID = n, c[n] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            l = t.jQuery,
            u = function() {},
            h = 0,
            c = {};
        return s.namespace = "outlayer", s.Item = o, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, r.extend(s.prototype, i.prototype), s.prototype.option = function(t) {
            r.extend(this.options, t)
        }, s.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, s.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, s.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0, o = e.length; o > r; r++) {
                var s = e[r],
                    a = new i(s, this);
                n.push(a)
            }
            return n
        }, s.prototype._filterFindItemElements = function(t) {
            return r.filterFindElements(t, this.options.itemSelector)
        }, s.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, s.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, s.prototype._init = s.prototype.layout, s.prototype._resetLayout = function() {
            this.getSize()
        }, s.prototype.getSize = function() {
            this.size = n(this.element)
        }, s.prototype._getMeasurement = function(t, e) {
            var i, o = this.options[t];
            o ? ("string" == typeof o ? i = this.element.querySelector(o) : r.isElement(o) && (i = o), this[t] = i ? n(i)[e] : o) : this[t] = 0
        }, s.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, s.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                r.isIgnored || e.push(r)
            }
            return e
        }, s.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, r = t.length; r > n; n++) {
                    var o = t[n],
                        s = this._getItemLayoutPosition(o);
                    s.item = o, s.isInstant = e || o.isLayoutInstant, i.push(s)
                }
                this._processLayoutQueue(i)
            }
        }, s.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, s.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, s.prototype._positionItem = function(t, e, i, n) {
            n ? t.goTo(e, i) : t.moveTo(e, i)
        }, s.prototype._postLayout = function() {
            this.resizeContainer()
        }, s.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, s.prototype._getContainerSize = u, s.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, s.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                r.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                s++, s === o && i()
            }
            var r = this,
                o = e.length;
            if (!e || !o) return void i();
            for (var s = 0, a = 0, l = e.length; l > a; a++) {
                var u = e[a];
                u.once(t, n)
            }
        }, s.prototype.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var r = l.Event(e);
                    r.type = t, this.$element.trigger(r, i)
                } else this.$element.trigger(t, i)
        }, s.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, s.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, s.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, s.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    r.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, s.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
        }, s.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, s.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, s.prototype._manageStamp = u, s.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t),
                o = {
                    left: e.left - i.left - r.marginLeft,
                    top: e.top - i.top - r.marginTop,
                    right: i.right - e.right - r.marginRight,
                    bottom: i.bottom - e.bottom - r.marginBottom
                };
            return o
        }, s.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, s.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, s.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, s.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, s.prototype.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, s.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, s.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, s.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, s.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.reveal()
            }
        }, s.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.hide()
            }
        }, s.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, s.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, s.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                if (n.element === t) return n
            }
        }, s.prototype.getItems = function(t) {
            t = r.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var o = t[i],
                    s = this.getItem(o);
                s && e.push(s)
            }
            return e
        }, s.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e),
                e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var o = e[i];
                    o.remove(), r.removeFrom(this.items, o)
                }
        }, s.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                n.destroy()
            }
            this.unbindResize();
            var r = this.element.outlayerGUID;
            delete c[r], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            t = r.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && c[e]
        }, s.create = function(t, e) {
            function i() {
                s.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(s.prototype) : r.extend(i.prototype, s.prototype), i.prototype.constructor = i, i.defaults = r.extend({}, s.defaults), r.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = s.data, i.Item = function() {
                o.apply(this, arguments)
            }, i.Item.prototype = new o, r.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        }, s.Item = o, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                o = r / n,
                s = n - r % n,
                a = s && 1 > s ? "round" : "floor";
            o = Math[a](o), this.cols = Math.max(o, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && 1 > e ? "round" : "ceil",
                r = Math[n](t.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            for (var o = this._getColGroup(r), s = Math.min.apply(Math, o), a = i.indexOf(o, s), l = {
                    x: this.columnWidth * a,
                    y: s
                }, u = s + t.size.outerHeight, h = this.cols + 1 - o.length, c = 0; h > c; c++) this.colYs[a + c] = u;
            return l
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var r = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, r)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                r = this.options.isOriginLeft ? n.left : n.right,
                o = r + i.outerWidth,
                s = Math.floor(r / this.columnWidth);
            s = Math.max(0, s);
            var a = Math.floor(o / this.columnWidth);
            a -= o % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, u = s; a >= u; u++) this.colYs[u] = Math.max(l, this.colYs[u])
        }, n.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, n
    }), ! function() {
        "use strict";

        function t(n) {
            if (!n) throw new Error("No options passed to Waypoint constructor");
            if (!n.element) throw new Error("No element option passed to Waypoint constructor");
            if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
        }
        var e = 0,
            i = {};
        t.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }, t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, t.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete i[this.key]
        }, t.prototype.disable = function() {
            return this.enabled = !1, this
        }, t.prototype.enable = function() {
            return this.context.refresh(), this.enabled = !0, this
        }, t.prototype.next = function() {
            return this.group.next(this)
        }, t.prototype.previous = function() {
            return this.group.previous(this)
        }, t.invokeAll = function(t) {
            var e = [];
            for (var n in i) e.push(i[n]);
            for (var r = 0, o = e.length; o > r; r++) e[r][t]()
        }, t.destroyAll = function() {
            t.invokeAll("destroy")
        }, t.disableAll = function() {
            t.invokeAll("disable")
        }, t.enableAll = function() {
            t.invokeAll("enable")
        }, t.refreshAll = function() {
            t.Context.refreshAll()
        }, t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }, t.viewportWidth = function() {
            return document.documentElement.clientWidth
        }, t.adapters = [], t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = t
    }(),
    function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }

        function e(t) {
            this.element = t, this.Adapter = r.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, n[t.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }
        var i = 0,
            n = {},
            r = window.Waypoint,
            o = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete n[this.key])
        }, e.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(), e.didResize = !1
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0, r.requestAnimationFrame(t))
            })
        }, e.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(), e.didScroll = !1
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || r.isTouch) && (e.didScroll = !0, r.requestAnimationFrame(t))
            })
        }, e.prototype.handleResize = function() {
            r.Context.refreshAll()
        }, e.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
            for (var i in e) {
                var n = e[i],
                    r = n.newScroll > n.oldScroll,
                    o = r ? n.forward : n.backward;
                for (var s in this.waypoints[i]) {
                    var a = this.waypoints[i][s],
                        l = n.oldScroll < a.triggerPoint,
                        u = n.newScroll >= a.triggerPoint,
                        h = l && u,
                        c = !l && !u;
                    (h || c) && (a.queueTrigger(o), t[a.group.id] = a.group)
                }
            }
            for (var p in t) t[p].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }, e.prototype.innerHeight = function() {
            return this.element == this.element.window ? r.viewportHeight() : this.adapter.innerHeight()
        }, e.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, e.prototype.innerWidth = function() {
            return this.element == this.element.window ? r.viewportWidth() : this.adapter.innerWidth()
        }, e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var n = 0, r = t.length; r > n; n++) t[n].destroy()
        }, e.prototype.refresh = function() {
            var t, e = this.element == this.element.window,
                i = this.adapter.offset(),
                n = {};
            this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : i.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : i.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in t) {
                var o = t[r];
                for (var s in this.waypoints[r]) {
                    var a, l, u, h, c, p = this.waypoints[r][s],
                        f = p.options.offset,
                        d = p.triggerPoint,
                        m = 0,
                        g = null == d;
                    p.element !== p.element.window && (m = p.adapter.offset()[o.offsetProp]), "function" == typeof f ? f = f.apply(p) : "string" == typeof f && (f = parseFloat(f), p.options.offset.indexOf("%") > -1 && (f = Math.ceil(o.contextDimension * f / 100))), a = o.contextScroll - o.contextOffset, p.triggerPoint = m + a - f, l = d < o.oldScroll, u = p.triggerPoint >= o.oldScroll, h = l && u, c = !l && !u, !g && h ? (p.queueTrigger(o.backward), n[p.group.id] = p.group) : !g && c ? (p.queueTrigger(o.forward), n[p.group.id] = p.group) : g && o.oldScroll >= p.triggerPoint && (p.queueTrigger(o.forward), n[p.group.id] = p.group)
                }
            }
            for (var v in n) n[v].flushTriggers();
            return this
        }, e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t)
        }, e.refreshAll = function() {
            for (var t in n) n[t].refresh()
        }, e.findByElement = function(t) {
            return n[t.waypointContextKey]
        }, window.onload = function() {
            o && o(), e.refreshAll()
        }, r.requestAnimationFrame = function(e) {
            var i = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            i.call(window, e)
        }, r.Context = e
    }(),
    function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }

        function i(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
        }
        var n = {
                vertical: {},
                horizontal: {}
            },
            r = window.Waypoint;
        i.prototype.add = function(t) {
            this.waypoints.push(t)
        }, i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }, i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var n = this.triggerQueues[i],
                    r = "up" === i || "left" === i;
                n.sort(r ? e : t);
                for (var o = 0, s = n.length; s > o; o += 1) {
                    var a = n[o];
                    (a.options.continuous || o === n.length - 1) && a.trigger([i])
                }
            }
            this.clearTriggerQueues()
        }, i.prototype.next = function(e) {
            this.waypoints.sort(t);
            var i = r.Adapter.inArray(e, this.waypoints),
                n = i === this.waypoints.length - 1;
            return n ? null : this.waypoints[i + 1]
        }, i.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var i = r.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null
        }, i.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }, i.prototype.remove = function(t) {
            var e = r.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, i.prototype.first = function() {
            return this.waypoints[0]
        }, i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }, i.findOrCreate = function(t) {
            return n[t.axis][t.name] || new i(t)
        }, r.Group = i
    }(),
    function() {
        "use strict";

        function t(t) {
            this.$element = e(t)
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, i) {
            t.prototype[i] = function() {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[i].apply(this.$element, t)
            }
        }), e.each(["extend", "inArray", "isEmptyObject"], function(i, n) {
            t[n] = e[n]
        }), i.adapters.push({
            name: "jquery",
            Adapter: t
        }), i.Adapter = t
    }(),
    function() {
        "use strict";

        function t(t) {
            return function() {
                var i = [],
                    n = arguments[0];
                return t.isFunction(arguments[0]) && (n = t.extend({}, arguments[1]), n.handler = arguments[0]), this.each(function() {
                    var r = t.extend({}, n, {
                        element: this
                    });
                    "string" == typeof r.context && (r.context = t(this).closest(r.context)[0]), i.push(new e(r))
                }), i
            }
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }(),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = t.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target), t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function(e) {
                    function n() {
                        var n, r;
                        return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), void 0 !== r ? r : !1) : !0
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
                })), i)
            },
            valid: function() {
                var e, i, n;
                return t(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, i = t(this[0].form).validate(), this.each(function() {
                    e = i.element(this) && e, n = n.concat(i.errorList)
                }), i.errorList = n), e
            },
            rules: function(e, i) {
                var n, r, o, s, a, l, u = this[0];
                if (e) switch (n = t.data(u.form, "validator").settings, r = n.rules, o = t.validator.staticRules(u), e) {
                    case "add":
                        t.extend(o, t.validator.normalizeRule(i)), delete o.messages, r[u.name] = o, i.messages && (n.messages[u.name] = t.extend(n.messages[u.name], i.messages));
                        break;
                    case "remove":
                        return i ? (l = {}, t.each(i.split(/\s/), function(e, i) {
                            l[i] = o[i], delete o[i], "required" === i && t(u).removeAttr("aria-required")
                        }), l) : (delete r[u.name], o)
                }
                return s = t.validator.normalizeRules(t.extend({}, t.validator.classRules(u), t.validator.attributeRules(u), t.validator.dataRules(u), t.validator.staticRules(u)), u), s.required && (a = s.required, delete s.required, s = t.extend({
                    required: a
                }, s), t(u).attr("aria-required", "true")), s.remote && (a = s.remote, delete s.remote, s = t.extend(s, {
                    remote: a
                })), s
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                return !!t.trim("" + t(e).val())
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, i) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
        }, t.validator.format = function(e, i) {
            return 1 === arguments.length ? function() {
                var i = t.makeArray(arguments);
                return i.unshift(e), t.validator.format.apply(this, i)
            } : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return i
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(e, i) {
                    var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, n) || (e.name in this.submitted || e === this.lastElement) && this.element(e)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, i, n) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
                },
                unhighlight: function(e, i, n) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var i = t.data(this.form, "validator"),
                            n = "on" + e.type.replace(/^validate/, ""),
                            r = i.settings;
                        r[n] && !t(this).is(r.ignore) && r[n].call(i, this, e)
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i, n = this.groups = {};
                    t.each(this.settings.groups, function(e, i) {
                        "string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) {
                            n[i] = e
                        })
                    }), i = this.settings.rules, t.each(i, function(e, n) {
                        i[e] = t.validator.normalizeRule(n)
                    }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    var i = this.clean(e),
                        n = this.validationTargetFor(i),
                        r = !0;
                    return this.lastElement = n, void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n), this.currentElements = t(n), r = this.check(n) !== !1, r ? delete this.invalid[n.name] : this.invalid[n.name] = !0), t(e).attr("aria-invalid", !r), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
                },
                showErrors: function(e) {
                    if (e) {
                        t.extend(this.errorMap, e), this.errorList = [];
                        for (var i in e) this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                        this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                    var e, i = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    if (this.settings.unhighlight)
                        for (e = 0; i[e]; e++) this.settings.unhighlight.call(this, i[e], this.settings.errorClass, "");
                    else i.removeClass(this.settings.errorClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, i = 0;
                    for (e in t) i++;
                    return i
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var i, n = t(e),
                        r = e.type;
                    return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && "undefined" != typeof e.validity ? e.validity.badInput ? !1 : n.val() : (i = n.val(), "string" == typeof i ? i.replace(/\r/g, "") : i)
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i, n, r, o = t(e).rules(),
                        s = t.map(o, function(t, e) {
                            return e
                        }).length,
                        a = !1,
                        l = this.elementValue(e);
                    for (n in o) {
                        r = {
                            method: n,
                            parameters: o[n]
                        };
                        try {
                            if (i = t.validator.methods[n].call(this, l, e, r.parameters), "dependency-mismatch" === i && 1 === s) {
                                a = !0;
                                continue
                            }
                            if (a = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!i) return this.formatAndAdd(e, r), !1
                        } catch (u) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", u), u instanceof TypeError && (u.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."), u
                        }
                    }
                    if (!a) return this.objectLength(o) && this.successList.push(e), !0
                },
                customDataMessage: function(e, i) {
                    return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t];
                    return void 0
                },
                defaultMessage: function(e, i) {
                    return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
                },
                formatAndAdd: function(e, i) {
                    var n = this.defaultMessage(e, i.method),
                        r = /\$?\{(\d+)\}/g;
                    "function" == typeof n ? n = n.call(this, i.parameters, e) : r.test(n) && (n = t.validator.format(n.replace(r, "{$1}"), i.parameters)), this.errorList.push({
                        message: n,
                        element: e,
                        method: i.method
                    }), this.errorMap[e.name] = n, this.submitted[e.name] = n
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, i;
                    for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, i) {
                    var n, r, o, s = this.errorsFor(e),
                        a = this.idOrName(e),
                        l = t(e).attr("aria-describedby");
                    s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(i || ""), n = s, this.settings.wrapper && (n = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e), s.is("label") ? s.attr("for", a) : 0 === s.parents("label[for='" + a + "']").length && (o = s.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), l ? l.match(new RegExp("\\b" + o + "\\b")) || (l += " " + o) : l = o, t(e).attr("aria-describedby", l), r = this.groups[e.name], r && t.each(this.groups, function(e, i) {
                        i === r && t("[name='" + e + "']", this.currentForm).attr("aria-describedby", s.attr("id"))
                    }))), !i && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s)
                },
                errorsFor: function(e) {
                    var i = this.idOrName(e),
                        n = t(e).attr("aria-describedby"),
                        r = "label[for='" + i + "'], label[for='" + i + "'] *";
                    return n && (r = r + ", #" + n.replace(/\s+/g, ", #")), this.errors().filter(r)
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + e + "']")
                },
                getLength: function(e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
                },
                dependTypes: {
                    "boolean": function(t) {
                        return t
                    },
                    string: function(e, i) {
                        return !!t(e, i.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var i = this.elementValue(e);
                    return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(e, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
                },
                destroy: function() {
                    this.resetForm(), t(this.currentForm).off(".validate").removeData("validator")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, i) {
                e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var i = {},
                    n = t(e).attr("class");
                return n && t.each(n.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
                }), i
            },
            normalizeAttributeRule: function(t, e, i, n) {
                /min|max/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
            },
            attributeRules: function(e) {
                var i, n, r = {},
                    o = t(e),
                    s = e.getAttribute("type");
                for (i in t.validator.methods) "required" === i ? (n = e.getAttribute(i), "" === n && (n = !0), n = !!n) : n = o.attr(i), this.normalizeAttributeRule(r, s, i, n);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function(e) {
                var i, n, r = {},
                    o = t(e),
                    s = e.getAttribute("type");
                for (i in t.validator.methods) n = o.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, s, i, n);
                return r
            },
            staticRules: function(e) {
                var i = {},
                    n = t.data(e.form, "validator");
                return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
            },
            normalizeRules: function(e, i) {
                return t.each(e, function(n, r) {
                    if (r === !1) return void delete e[n];
                    if (r.param || r.depends) {
                        var o = !0;
                        switch (typeof r.depends) {
                            case "string":
                                o = !!t(r.depends, i.form).length;
                                break;
                            case "function":
                                o = r.depends.call(i, i)
                        }
                        o ? e[n] = void 0 !== r.param ? r.param : !0 : delete e[n]
                    }
                }), t.each(e, function(n, r) {
                    e[n] = t.isFunction(r) ? r(i) : r
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var i;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
                }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function() {
                        i[this] = !0
                    }), e = i
                }
                return e
            },
            addMethod: function(e, i, n) {
                t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, i, n) {
                    if (!this.depend(n, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var r = t(i).val();
                        return r && r.length > 0
                    }
                    return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    var i, n, r = 0,
                        o = 0,
                        s = !1;
                    if (t = t.replace(/\D/g, ""), t.length < 13 || t.length > 19) return !1;
                    for (i = t.length - 1; i >= 0; i--) n = t.charAt(i), o = parseInt(n, 10), s && (o *= 2) > 9 && (o -= 9), r += o, s = !s;
                    return r % 10 === 0
                },
                minlength: function(e, i, n) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || r >= n
                },
                maxlength: function(e, i, n) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || n >= r
                },
                rangelength: function(e, i, n) {
                    var r = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || r >= n[0] && r <= n[1]
                },
                min: function(t, e, i) {
                    return this.optional(e) || t >= i
                },
                max: function(t, e, i) {
                    return this.optional(e) || i >= t
                },
                range: function(t, e, i) {
                    return this.optional(e) || t >= i[0] && t <= i[1]
                },
                equalTo: function(e, i, n) {
                    var r = t(n);
                    return this.settings.onfocusout && r.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                        t(i).valid()
                    }), e === r.val()
                },
                remote: function(e, i, n) {
                    if (this.optional(i)) return "dependency-mismatch";
                    var r, o, s = this.previousValue(i);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), s.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = s.message,
                        n = "string" == typeof n && {
                            url: n
                        } || n, s.old === e ? s.valid : (s.old = e, r = this, this.startRequest(i), o = {}, o[i.name] = e, t.ajax(t.extend(!0, {
                            mode: "abort",
                            port: "validate" + i.name,
                            dataType: "json",
                            data: o,
                            context: r.currentForm,
                            success: function(n) {
                                var o, a, l, u = n === !0 || "true" === n;
                                r.settings.messages[i.name].remote = s.originalMessage, u ? (l = r.formSubmitted, r.prepareElement(i), r.formSubmitted = l, r.successList.push(i), delete r.invalid[i.name], r.showErrors()) : (o = {}, a = n || r.defaultMessage(i, "remote"), o[i.name] = s.message = t.isFunction(a) ? a(e) : a, r.invalid[i.name] = !0, r.showErrors(o)), s.valid = u, r.stopRequest(i, u)
                            }
                        }, n)), "pending")
                }
            }
        });
        var e, i = {};
        t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
            var r = t.port;
            "abort" === t.mode && (i[r] && i[r].abort(), i[r] = n)
        }) : (e = t.ajax, t.ajax = function(n) {
            var r = ("mode" in n ? n : t.ajaxSettings).mode,
                o = ("port" in n ? n : t.ajaxSettings).port;
            return "abort" === r ? (i[o] && i[o].abort(), i[o] = e.apply(this, arguments), i[o]) : e.apply(this, arguments)
        })
    }),
    function(t) {
        "use strict";

        function e(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function i(t, e) {
            var i = n(t, e) ? o : r;
            i(t, e)
        }
        var n, r, o;
        "classList" in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }, r = function(t, e) {
            t.classList.add(e)
        }, o = function(t, e) {
            t.classList.remove(e)
        }) : (n = function(t, i) {
            return e(i).test(t.className)
        }, r = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }, o = function(t, i) {
            t.className = t.className.replace(e(i), " ")
        });
        var s = {
            hasClass: n,
            addClass: r,
            removeClass: o,
            toggleClass: i,
            has: n,
            add: r,
            remove: o,
            toggle: i
        };
        "function" == typeof define && define.amd ? define(s) : "object" == typeof exports ? module.exports = s : t.classie = s
    }(window);