/*
	Copyright 2022 Michael Dayah - All Rights Reserved.
	Ptable® is a registered trademark of Michael Dayah
	Electronic redistribution in any form is strictly prohibited.

	Learn from this clean, library-free, framework-free code,
	but use what you learn to create something original.
*/
function e(e, t) {
    return (
        t.forEach(function (t) {
            t &&
                "string" != typeof t &&
                !Array.isArray(t) &&
                Object.keys(t).forEach(function (n) {
                    if ("default" !== n && !(n in e)) {
                        var r = Object.getOwnPropertyDescriptor(t, n);
                        Object.defineProperty(
                            e,
                            n,
                            r.get
                                ? r
                                : {
                                      enumerable: !0,
                                      get: function () {
                                          return t[n];
                                      },
                                  }
                        );
                    }
                });
        }),
        Object.freeze(e)
    );
}
var t = {},
    n = { exports: {} },
    r = { exports: {} };
(r.exports = (function () {
    var e = ["navigation", "request", "process", "log", "user", "state", "error", "manual"],
        t = function (e, t, n) {
            for (var r = n, a = 0, o = e.length; a < o; a++) r = t(r, e[a], a, e);
            return r;
        },
        n = function (e, n) {
            return t(
                e,
                function (e, t, r, a) {
                    return n(t, r, a) ? e.concat(t) : e;
                },
                []
            );
        },
        r = function (e, n) {
            return t(
                e,
                function (e, t, r, a) {
                    return !0 === e || t === n;
                },
                !1
            );
        },
        a = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
        },
        o = !{ toString: null }.propertyIsEnumerable("toString"),
        i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        s = function (e) {
            var t,
                n = [];
            for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
            if (!o) return n;
            for (var r = 0, a = i.length; r < a; r++) Object.prototype.hasOwnProperty.call(e, i[r]) && n.push(i[r]);
            return n;
        },
        u = function (e, t) {
            return (
                void 0 === e && (e = 1),
                void 0 === t && (t = 1 / 0),
                function (n) {
                    return "number" == typeof n && parseInt("" + n, 10) === n && n >= e && n <= t;
                }
            );
        },
        c = function (e) {
            return (
                "function" == typeof e ||
                (a(e) &&
                    n(e, function (e) {
                        return "function" == typeof e;
                    }).length === e.length)
            );
        },
        l = function (e) {
            return "string" == typeof e && !!e.length;
        },
        f = {},
        d = function () {
            return { unhandledExceptions: !0, unhandledRejections: !0 };
        };
    f.schema = {
        apiKey: {
            defaultValue: function () {
                return null;
            },
            message: "is required",
            validate: l,
        },
        appVersion: {
            defaultValue: function () {},
            message: "should be a string",
            validate: function (e) {
                return void 0 === e || l(e);
            },
        },
        appType: {
            defaultValue: function () {},
            message: "should be a string",
            validate: function (e) {
                return void 0 === e || l(e);
            },
        },
        autoDetectErrors: {
            defaultValue: function () {
                return !0;
            },
            message: "should be true|false",
            validate: function (e) {
                return !0 === e || !1 === e;
            },
        },
        enabledErrorTypes: {
            defaultValue: function () {
                return d();
            },
            message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
            allowPartialObject: !0,
            validate: function (e) {
                if ("object" != typeof e || !e) return !1;
                var t = s(e),
                    a = s(d());
                return !(
                    n(t, function (e) {
                        return r(a, e);
                    }).length < t.length ||
                    n(s(e), function (t) {
                        return "boolean" != typeof e[t];
                    }).length > 0
                );
            },
        },
        onError: {
            defaultValue: function () {
                return [];
            },
            message: "should be a function or array of functions",
            validate: c,
        },
        onSession: {
            defaultValue: function () {
                return [];
            },
            message: "should be a function or array of functions",
            validate: c,
        },
        onBreadcrumb: {
            defaultValue: function () {
                return [];
            },
            message: "should be a function or array of functions",
            validate: c,
        },
        endpoints: {
            defaultValue: function () {
                return { notify: "https://notify.bugsnag.com", sessions: "https://sessions.bugsnag.com" };
            },
            message: "should be an object containing endpoint URLs { notify, sessions }",
            validate: function (e) {
                return (
                    e &&
                    "object" == typeof e &&
                    l(e.notify) &&
                    l(e.sessions) &&
                    0 ===
                        n(s(e), function (e) {
                            return !r(["notify", "sessions"], e);
                        }).length
                );
            },
        },
        autoTrackSessions: {
            defaultValue: function (e) {
                return !0;
            },
            message: "should be true|false",
            validate: function (e) {
                return !0 === e || !1 === e;
            },
        },
        enabledReleaseStages: {
            defaultValue: function () {
                return null;
            },
            message: "should be an array of strings",
            validate: function (e) {
                return (
                    null === e ||
                    (a(e) &&
                        n(e, function (e) {
                            return "string" == typeof e;
                        }).length === e.length)
                );
            },
        },
        releaseStage: {
            defaultValue: function () {
                return "production";
            },
            message: "should be a string",
            validate: function (e) {
                return "string" == typeof e && e.length;
            },
        },
        maxBreadcrumbs: {
            defaultValue: function () {
                return 25;
            },
            message: "should be a number \u2264100",
            validate: function (e) {
                return u(0, 100)(e);
            },
        },
        enabledBreadcrumbTypes: {
            defaultValue: function () {
                return e;
            },
            message: "should be null or a list of available breadcrumb types (" + e.join(",") + ")",
            validate: function (n) {
                return (
                    null === n ||
                    (a(n) &&
                        t(
                            n,
                            function (t, n) {
                                return !1 === t ? t : r(e, n);
                            },
                            !0
                        ))
                );
            },
        },
        context: {
            defaultValue: function () {},
            message: "should be a string",
            validate: function (e) {
                return void 0 === e || "string" == typeof e;
            },
        },
        user: {
            defaultValue: function () {
                return {};
            },
            message: "should be an object with { id, email, name } properties",
            validate: function (e) {
                return (
                    null === e ||
                    (e &&
                        t(
                            s(e),
                            function (e, t) {
                                return e && r(["id", "email", "name"], t);
                            },
                            !0
                        ))
                );
            },
        },
        metadata: {
            defaultValue: function () {
                return {};
            },
            message: "should be an object",
            validate: function (e) {
                return "object" == typeof e && null !== e;
            },
        },
        logger: {
            defaultValue: function () {},
            message: "should be null or an object with methods { debug, info, warn, error }",
            validate: function (e) {
                return (
                    !e ||
                    (e &&
                        t(
                            ["debug", "info", "warn", "error"],
                            function (t, n) {
                                return t && "function" == typeof e[n];
                            },
                            !0
                        ))
                );
            },
        },
        redactedKeys: {
            defaultValue: function () {
                return ["password"];
            },
            message: "should be an array of strings|regexes",
            validate: function (e) {
                return (
                    a(e) &&
                    e.length ===
                        n(e, function (e) {
                            return "string" == typeof e || (e && "function" == typeof e.test);
                        }).length
                );
            },
        },
        plugins: {
            defaultValue: function () {
                return [];
            },
            message: "should be an array of plugin objects",
            validate: function (e) {
                return (
                    a(e) &&
                    e.length ===
                        n(e, function (e) {
                            return e && "object" == typeof e && "function" == typeof e.load;
                        }).length
                );
            },
        },
        featureFlags: {
            defaultValue: function () {
                return [];
            },
            message: 'should be an array of objects that have a "name" property',
            validate: function (e) {
                return (
                    a(e) &&
                    e.length ===
                        n(e, function (e) {
                            return e && "object" == typeof e && "string" == typeof e.name;
                        }).length
                );
            },
        },
    };
    var g = function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
        h = function (e, n) {
            return t(
                e,
                function (e, t, r, a) {
                    return e.concat(n(t, r, a));
                },
                []
            );
        };
    function p() {
        return (
            (p =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                    }
                    return e;
                }),
            p.apply(this, arguments)
        );
    }
    var v,
        m,
        y = f.schema,
        b = {
            releaseStage: g({}, y.releaseStage, {
                defaultValue: function () {
                    return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production";
                },
            }),
            appType: p({}, y.appType, {
                defaultValue: function () {
                    return "browser";
                },
            }),
            logger: g({}, y.logger, {
                defaultValue: function () {
                    return "undefined" != typeof console && "function" == typeof console.debug ? _() : void 0;
                },
            }),
        },
        _ = function () {
            var e = {},
                t = console.log;
            return (
                h(["debug", "info", "warn", "error"], function (n) {
                    var r = console[n];
                    e[n] = "function" == typeof r ? r.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]");
                }),
                e
            );
        },
        S = (function () {
            function e(e, t, n, r) {
                void 0 === r && (r = new Date()), (this.type = n), (this.message = e), (this.metadata = t), (this.timestamp = r);
            }
            return (
                (e.prototype.toJSON = function () {
                    return { type: this.type, name: this.message, timestamp: this.timestamp, metaData: this.metadata };
                }),
                e
            );
        })(),
        w = {};
    (v = this),
        (m = function () {
            function e(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            }
            function t(e) {
                return e.charAt(0).toUpperCase() + e.substring(1);
            }
            function n(e) {
                return function () {
                    return this[e];
                };
            }
            var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                a = ["columnNumber", "lineNumber"],
                o = ["fileName", "functionName", "source"],
                i = ["args"],
                s = r.concat(a, o, i);
            function u(e) {
                if (e instanceof Object) for (var n = 0; n < s.length; n++) e.hasOwnProperty(s[n]) && void 0 !== e[s[n]] && this["set" + t(s[n])](e[s[n]]);
            }
            u.prototype = {
                getArgs: function () {
                    return this.args;
                },
                setArgs: function (e) {
                    if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                    this.args = e;
                },
                getEvalOrigin: function () {
                    return this.evalOrigin;
                },
                setEvalOrigin: function (e) {
                    if (e instanceof u) this.evalOrigin = e;
                    else {
                        if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                        this.evalOrigin = new u(e);
                    }
                },
                toString: function () {
                    return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() : "") + (e(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "");
                },
            };
            for (var c = 0; c < r.length; c++)
                (u.prototype["get" + t(r[c])] = n(r[c])),
                    (u.prototype["set" + t(r[c])] = (function (e) {
                        return function (t) {
                            this[e] = Boolean(t);
                        };
                    })(r[c]));
            for (var l = 0; l < a.length; l++)
                (u.prototype["get" + t(a[l])] = n(a[l])),
                    (u.prototype["set" + t(a[l])] = (function (t) {
                        return function (n) {
                            if (!e(n)) throw new TypeError(t + " must be a Number");
                            this[t] = Number(n);
                        };
                    })(a[l]));
            for (var f = 0; f < o.length; f++)
                (u.prototype["get" + t(o[f])] = n(o[f])),
                    (u.prototype["set" + t(o[f])] = (function (e) {
                        return function (t) {
                            this[e] = String(t);
                        };
                    })(o[f]));
            return u;
        }),
        "object" == typeof w ? (w = m()) : (v.StackFrame = m());
    var E = {};
    !(function (e, t) {
        "object" == typeof E ? (E = t(w)) : (e.ErrorStackParser = t(e.StackFrame));
    })(this, function (e) {
        var t = /(^|@)\S+\:\d+/,
            n = /^\s*at .*(\S+\:\d+|\(native\))/m,
            r = /^(eval@)?(\[native code\])?$/;
        return {
            parse: function (e) {
                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                if (e.stack) return this.parseFFOrSafari(e);
                throw new Error("Cannot parse given Error object");
            },
            extractLocation: function (e) {
                if (-1 === e.indexOf(":")) return [e];
                var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                return [t[1], t[2] || void 0, t[3] || void 0];
            },
            parseV8OrIE: function (t) {
                return t.stack
                    .split("\n")
                    .filter(function (e) {
                        return !!e.match(n);
                    }, this)
                    .map(function (t) {
                        t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                        var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                            r = n.match(/ (\((.+):(\d+):(\d+)\)$)/),
                            a = (n = r ? n.replace(r[0], "") : n).split(/\s+/).slice(1),
                            o = this.extractLocation(r ? r[1] : a.pop()),
                            i = a.join(" ") || void 0,
                            s = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                        return new e({ functionName: i, fileName: s, lineNumber: o[1], columnNumber: o[2], source: t });
                    }, this);
            },
            parseFFOrSafari: function (t) {
                return t.stack
                    .split("\n")
                    .filter(function (e) {
                        return !e.match(r);
                    }, this)
                    .map(function (t) {
                        if ((t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":"))) return new e({ functionName: t });
                        var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            r = t.match(n),
                            a = r && r[1] ? r[1] : void 0,
                            o = this.extractLocation(t.replace(n, ""));
                        return new e({ functionName: a, fileName: o[0], lineNumber: o[1], columnNumber: o[2], source: t });
                    }, this);
            },
            parseOpera: function (e) {
                return !e.stacktrace || (e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
            },
            parseOpera9: function (t) {
                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), a = [], o = 2, i = r.length; o < i; o += 2) {
                    var s = n.exec(r[o]);
                    s && a.push(new e({ fileName: s[2], lineNumber: s[1], source: r[o] }));
                }
                return a;
            },
            parseOpera10: function (t) {
                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), a = [], o = 0, i = r.length; o < i; o += 2) {
                    var s = n.exec(r[o]);
                    s && a.push(new e({ functionName: s[3] || void 0, fileName: s[2], lineNumber: s[1], source: r[o] }));
                }
                return a;
            },
            parseOpera11: function (n) {
                return n.stack
                    .split("\n")
                    .filter(function (e) {
                        return !!e.match(t) && !e.match(/^Error created at/);
                    }, this)
                    .map(function (t) {
                        var n,
                            r = t.split("@"),
                            a = this.extractLocation(r.pop()),
                            o = r.shift() || "",
                            i = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                        o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                        var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                        return new e({ functionName: i, args: s, fileName: a[0], lineNumber: a[1], columnNumber: a[2], source: t });
                    }, this);
            },
        };
    });
    var O = E,
        j = function (e, t, n, r) {
            var a = r && r.redactedKeys ? r.redactedKeys : [],
                o = r && r.redactedPaths ? r.redactedPaths : [];
            return JSON.stringify(I(e, a, o), t, n);
        },
        x = 20,
        N = 25e3,
        k = 8,
        T = "...";
    function L(e) {
        return e instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(e));
    }
    function R(e) {
        return "[Throws: " + (e ? e.message : "?") + "]";
    }
    function B(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
        return !1;
    }
    function q(e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (0 === t.indexOf(e[n])) return !0;
        return !1;
    }
    function M(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
            if ("string" == typeof e[n] && e[n].toLowerCase() === t.toLowerCase()) return !0;
            if (e[n] && "function" == typeof e[n].test && e[n].test(t)) return !0;
        }
        return !1;
    }
    function A(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    }
    function C(e, t) {
        try {
            return e[t];
        } catch (e) {
            return R(e);
        }
    }
    function I(e, t, n) {
        var r = [],
            a = 0;
        function o(e, i) {
            function s() {
                return i.length > k && a > N;
            }
            if ((a++, i.length > x)) return T;
            if (s()) return T;
            if (null === e || "object" != typeof e) return e;
            if (B(r, e)) return "[Circular]";
            if ((r.push(e), "function" == typeof e.toJSON))
                try {
                    a--;
                    var u = o(e.toJSON(), i);
                    return r.pop(), u;
                } catch (e) {
                    return R(e);
                }
            if (L(e)) {
                a--;
                var c = o({ name: e.name, message: e.message }, i);
                return r.pop(), c;
            }
            if (A(e)) {
                for (var l = [], f = 0, d = e.length; f < d; f++) {
                    if (s()) {
                        l.push(T);
                        break;
                    }
                    l.push(o(e[f], i.concat("[]")));
                }
                return r.pop(), l;
            }
            var g = {};
            try {
                for (var h in e)
                    if (Object.prototype.hasOwnProperty.call(e, h))
                        if (q(n, i.join(".")) && M(t, h)) g[h] = "[REDACTED]";
                        else {
                            if (s()) {
                                g[h] = T;
                                break;
                            }
                            g[h] = o(C(e, h), i.concat(h));
                        }
            } catch (e) {}
            return r.pop(), g;
        }
        return o(e, []);
    }
    function D(e, t, n, r) {
        if ("string" == typeof n) {
            void 0 === r ? (r = null) : null !== r && "string" != typeof r && (r = j(r));
            var a = t[n];
            "number" != typeof a ? (e.push({ name: n, variant: r }), (t[n] = e.length - 1)) : (e[a] = { name: n, variant: r });
        }
    }
    function P(e, t, n) {
        if (a(t)) {
            for (var r = 0; r < t.length; ++r) {
                var o = t[r];
                null !== o && "object" == typeof o && D(e, n, o.name, o.variant);
            }
            return e;
        }
    }
    function V(e) {
        return h(n(e, Boolean), function (e) {
            var t = e.name,
                n = e.variant,
                r = { featureFlag: t };
            return "string" == typeof n && (r.variant = n), r;
        });
    }
    function F(e, t, n) {
        var r = t[n];
        "number" == typeof r && ((e[r] = null), delete t[n]);
    }
    var H = { add: D, clear: F, merge: P, toEventApi: V },
        K = function (e) {
            return !(!e || (!e.stack && !e.stacktrace && !e["opera#sourceloc"]) || "string" != typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) || e.stack === e.name + ": " + e.message);
        };
    function $(e) {
        switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return e instanceof Error;
        }
    }
    var U = $,
        X = function (e, t, n, r) {
            var a;
            if (t) {
                var o;
                if (null === n) return J(e, t);
                "object" == typeof n && (o = n), "string" == typeof n && (((a = {})[n] = r), (o = a)), o && (e[t] || (e[t] = {}), (e[t] = g({}, e[t], o)));
            }
        },
        J = function (e, t, n) {
            "string" == typeof t && (n ? e[t] && delete e[t][n] : delete e[t]);
        },
        W = {
            add: X,
            get: function (e, t, n) {
                if ("string" == typeof t) return n ? (e[t] ? e[t][n] : void 0) : e[t];
            },
            clear: J,
        },
        z = {};
    !(function (e, t) {
        "object" == typeof z ? (z = t(w)) : (e.StackGenerator = t(e.StackFrame));
    })(this, function (e) {
        return {
            backtrace: function (t) {
                var n = [],
                    r = 10;
                "object" == typeof t && "number" == typeof t.maxStackSize && (r = t.maxStackSize);
                for (var a = arguments.callee; a && n.length < r && a.arguments; ) {
                    for (var o = new Array(a.arguments.length), i = 0; i < o.length; ++i) o[i] = a.arguments[i];
                    /function(?:\s+([\w$]+))+\s*\(/.test(a.toString()) ? n.push(new e({ functionName: RegExp.$1 || void 0, args: o })) : n.push(new e({ args: o }));
                    try {
                        a = a.caller;
                    } catch (e) {
                        break;
                    }
                }
                return n;
            },
        };
    });
    var G = (function () {
            function e(t, n, r, a, o) {
                void 0 === r && (r = []), void 0 === a && (a = Z()), (this.apiKey = void 0), (this.context = void 0), (this.groupingHash = void 0), (this.originalError = o), (this._handledState = a), (this.severity = this._handledState.severity), (this.unhandled = this._handledState.unhandled), (this.app = {}), (this.device = {}), (this.request = {}), (this.breadcrumbs = []), (this.threads = []), (this._metadata = {}), (this._features = []), (this._featuresIndex = {}), (this._user = {}), (this._session = void 0), (this.errors = [te(t, n, e.__type, r)]);
            }
            var t = e.prototype;
            return (
                (t.addMetadata = function (e, t, n) {
                    return W.add(this._metadata, e, t, n);
                }),
                (t.getMetadata = function (e, t) {
                    return W.get(this._metadata, e, t);
                }),
                (t.clearMetadata = function (e, t) {
                    return W.clear(this._metadata, e, t);
                }),
                (t.addFeatureFlag = function (e, t) {
                    void 0 === t && (t = null), H.add(this._features, this._featuresIndex, e, t);
                }),
                (t.addFeatureFlags = function (e) {
                    H.merge(this._features, e, this._featuresIndex);
                }),
                (t.clearFeatureFlag = function (e) {
                    H.clear(this._features, this._featuresIndex, e);
                }),
                (t.clearFeatureFlags = function () {
                    (this._features = []), (this._featuresIndex = {});
                }),
                (t.getUser = function () {
                    return this._user;
                }),
                (t.setUser = function (e, t, n) {
                    this._user = { id: e, email: t, name: n };
                }),
                (t.toJSON = function () {
                    return {
                        payloadVersion: "4",
                        exceptions: h(this.errors, function (e) {
                            return g({}, e, { message: e.errorMessage });
                        }),
                        severity: this.severity,
                        unhandled: this._handledState.unhandled,
                        severityReason: this._handledState.severityReason,
                        app: this.app,
                        device: this.device,
                        request: this.request,
                        breadcrumbs: this.breadcrumbs,
                        context: this.context,
                        groupingHash: this.groupingHash,
                        metaData: this._metadata,
                        user: this._user,
                        session: this._session,
                        featureFlags: H.toEventApi(this._features),
                    };
                }),
                e
            );
        })(),
        Q = function (e) {
            var t = { file: e.fileName, method: Y(e.functionName), lineNumber: e.lineNumber, columnNumber: e.columnNumber, code: void 0, inProject: void 0 };
            return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"), t;
        },
        Y = function (e) {
            return /^global code$/i.test(e) ? "global code" : e;
        },
        Z = function () {
            return { unhandled: !1, severity: "warning", severityReason: { type: "handledException" } };
        },
        ee = function (e) {
            return "string" == typeof e ? e : "";
        };
    function te(e, n, r, a) {
        return {
            errorClass: ee(e),
            errorMessage: ee(n),
            type: r,
            stacktrace: t(
                a,
                function (e, t) {
                    var n = Q(t);
                    try {
                        return "{}" === JSON.stringify(n) ? e : e.concat(n);
                    } catch (t) {
                        return e;
                    }
                },
                []
            ),
        };
    }
    function ne(e) {
        return e.cause ? [e].concat(ne(e.cause)) : [e];
    }
    (G.getStacktrace = function (e, t, r) {
        if (K(e)) return O.parse(e).slice(t);
        try {
            return n(z.backtrace(), function (e) {
                return -1 === (e.functionName || "").indexOf("StackGenerator$$");
            }).slice(1 + r);
        } catch (e) {
            return [];
        }
    }),
        (G.create = function (e, t, n, r, a, o) {
            void 0 === a && (a = 0);
            var i,
                s = ae(e, t, r, o),
                u = s[0],
                c = s[1];
            try {
                var l = G.getStacktrace(u, c > 0 ? 1 + c + a : 0, 1 + a);
                i = new G(u.name, u.message, l, n, e);
            } catch (t) {
                i = new G(u.name, u.message, [], n, e);
            }
            if (("InvalidError" === u.name && i.addMetadata("" + r, "non-error parameter", re(e)), u.cause)) {
                var f,
                    d = ne(u).slice(1),
                    g = h(d, function (e) {
                        var t = U(e) && K(e) ? O.parse(e) : [],
                            n = ae(e, !0, "error cause")[0];
                        return "InvalidError" === n.name && i.addMetadata("error cause", re(e)), te(n.name, n.message, G.__type, t);
                    });
                (f = i.errors).push.apply(f, g);
            }
            return i;
        });
    var re = function (e) {
            return null === e ? "null" : void 0 === e ? "undefined" : e;
        },
        ae = function (e, t, n, r) {
            var a,
                o = 0,
                i = function (e) {
                    var t = "error cause" === n ? "was" : "received";
                    r && r.warn(n + " " + t + ' a non-error: "' + e + '"');
                    var a = new Error(n + " " + t + ' a non-error. See "' + n + '" tab for more detail.');
                    return (a.name = "InvalidError"), a;
                };
            if (t)
                switch (typeof e) {
                    case "string":
                    case "number":
                    case "boolean":
                        (a = new Error(String(e))), (o += 1);
                        break;
                    case "function":
                        (a = i("function")), (o += 2);
                        break;
                    case "object":
                        null !== e && U(e) ? (a = e) : null !== e && oe(e) ? (((a = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass), (o += 1)) : ((a = i(null === e ? "null" : "unsupported object")), (o += 2));
                        break;
                    default:
                        (a = i("nothing")), (o += 2);
                }
            else U(e) ? (a = e) : ((a = i(typeof e)), (o += 2));
            if (!K(a))
                try {
                    throw a;
                } catch (e) {
                    K(e) && ((a = e), (o = 1));
                }
            return [a, o];
        };
    G.__type = "browserjs";
    var oe = function (e) {
            return !(("string" != typeof e.name && "string" != typeof e.errorClass) || ("string" != typeof e.message && "string" != typeof e.errorMessage));
        },
        ie = G,
        se = function (e, t, n) {
            var r = 0,
                a = function () {
                    if (r >= e.length) return n(null, !0);
                    t(e[r], function (e, t) {
                        return e ? n(e) : !1 === t ? n(null, !1) : (r++, void a());
                    });
                };
            a();
        },
        ue = function (e, t, n, r) {
            var a = function (e, r) {
                if ("function" != typeof e) return r(null);
                try {
                    if (2 !== e.length) {
                        var a = e(t);
                        return a && "function" == typeof a.then
                            ? a.then(
                                  function (e) {
                                      return setTimeout(function () {
                                          return r(null, e);
                                      });
                                  },
                                  function (e) {
                                      setTimeout(function () {
                                          return n(e), r(null, !0);
                                      });
                                  }
                              )
                            : r(null, a);
                    }
                    e(t, function (e, t) {
                        if (e) return n(e), r(null);
                        r(null, t);
                    });
                } catch (e) {
                    n(e), r(null);
                }
            };
            se(e, a, r);
        },
        ce = function (e, t, n, r) {
            for (var a = !1, o = e.slice(); !a && o.length; )
                try {
                    a = !1 === o.pop()(t);
                } catch (e) {
                    r.error("Error occurred in " + n + " callback, continuing anyway\u2026"), r.error(e);
                }
            return a;
        },
        le = function (e, t) {
            var n = "000000000" + e;
            return n.substr(n.length - t);
        },
        fe = "object" == typeof window ? window : self,
        de = 0;
    for (var ge in fe) Object.hasOwnProperty.call(fe, ge) && de++;
    var he = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        pe = le((he + navigator.userAgent.length).toString(36) + de.toString(36), 4),
        ve = function () {
            return pe;
        },
        me = 0,
        ye = 4,
        be = 36,
        _e = Math.pow(be, ye);
    function Se() {
        return le(((Math.random() * _e) << 0).toString(be), ye);
    }
    function we() {
        return (me = me < _e ? me : 0), ++me - 1;
    }
    function Ee() {
        return "c" + new Date().getTime().toString(be) + le(we().toString(be), ye) + ve() + (Se() + Se());
    }
    Ee.fingerprint = ve;
    var Oe = Ee,
        je = (function () {
            function e() {
                (this.id = Oe()), (this.startedAt = new Date()), (this._handled = 0), (this._unhandled = 0), (this._user = {}), (this.app = {}), (this.device = {});
            }
            var t = e.prototype;
            return (
                (t.getUser = function () {
                    return this._user;
                }),
                (t.setUser = function (e, t, n) {
                    this._user = { id: e, email: t, name: n };
                }),
                (t.toJSON = function () {
                    return { id: this.id, startedAt: this.startedAt, events: { handled: this._handled, unhandled: this._unhandled } };
                }),
                (t._track = function (e) {
                    this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
                }),
                e
            );
        })(),
        xe = je,
        Ne = H.add,
        ke = H.clear,
        Te = H.merge,
        Le = function () {},
        Re = (function () {
            function a(e, t, n, r) {
                var o = this;
                void 0 === t && (t = f.schema),
                    void 0 === n && (n = []),
                    (this._notifier = r),
                    (this._config = {}),
                    (this._schema = t),
                    (this._delivery = { sendSession: Le, sendEvent: Le }),
                    (this._logger = { debug: Le, info: Le, warn: Le, error: Le }),
                    (this._plugins = {}),
                    (this._breadcrumbs = []),
                    (this._session = null),
                    (this._metadata = {}),
                    (this._featuresIndex = {}),
                    (this._features = []),
                    (this._context = void 0),
                    (this._user = {}),
                    (this._cbs = { e: [], s: [], sp: [], b: [] }),
                    (this.Client = a),
                    (this.Event = ie),
                    (this.Breadcrumb = S),
                    (this.Session = xe),
                    (this._config = this._configure(e, n)),
                    h(n.concat(this._config.plugins), function (e) {
                        e && o._loadPlugin(e);
                    }),
                    (this._depth = 1);
                var i = this,
                    s = this.notify;
                this.notify = function () {
                    return s.apply(i, arguments);
                };
            }
            var o = a.prototype;
            return (
                (o.addMetadata = function (e, t, n) {
                    return W.add(this._metadata, e, t, n);
                }),
                (o.getMetadata = function (e, t) {
                    return W.get(this._metadata, e, t);
                }),
                (o.clearMetadata = function (e, t) {
                    return W.clear(this._metadata, e, t);
                }),
                (o.addFeatureFlag = function (e, t) {
                    void 0 === t && (t = null), Ne(this._features, this._featuresIndex, e, t);
                }),
                (o.addFeatureFlags = function (e) {
                    Te(this._features, e, this._featuresIndex);
                }),
                (o.clearFeatureFlag = function (e) {
                    ke(this._features, this._featuresIndex, e);
                }),
                (o.clearFeatureFlags = function () {
                    (this._features = []), (this._featuresIndex = {});
                }),
                (o.getContext = function () {
                    return this._context;
                }),
                (o.setContext = function (e) {
                    this._context = e;
                }),
                (o._configure = function (e, n) {
                    var r = t(
                            n,
                            function (e, t) {
                                return t && t.configSchema ? g({}, e, t.configSchema) : e;
                            },
                            this._schema
                        ),
                        a = t(
                            s(r),
                            function (t, n) {
                                var a = r[n].defaultValue(e[n]);
                                return void 0 !== e[n] ? (r[n].validate(e[n]) ? (r[n].allowPartialObject ? (t.config[n] = g(a, e[n])) : (t.config[n] = e[n])) : ((t.errors[n] = r[n].message), (t.config[n] = a))) : (t.config[n] = a), t;
                            },
                            { errors: {}, config: {} }
                        ),
                        o = a.errors,
                        i = a.config;
                    if (r.apiKey) {
                        if (!i.apiKey) throw new Error("No Bugsnag API Key set");
                        /^[0-9a-f]{32}$/i.test(i.apiKey) || (o.apiKey = "should be a string of 32 hexadecimal characters");
                    }
                    return (this._metadata = g({}, i.metadata)), Te(this._features, i.featureFlags, this._featuresIndex), (this._user = g({}, i.user)), (this._context = i.context), i.logger && (this._logger = i.logger), i.onError && (this._cbs.e = this._cbs.e.concat(i.onError)), i.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(i.onBreadcrumb)), i.onSession && (this._cbs.s = this._cbs.s.concat(i.onSession)), s(o).length && this._logger.warn(Be(o, e)), i;
                }),
                (o.getUser = function () {
                    return this._user;
                }),
                (o.setUser = function (e, t, n) {
                    this._user = { id: e, email: t, name: n };
                }),
                (o._loadPlugin = function (e) {
                    var t = e.load(this);
                    return e.name && (this._plugins["~" + e.name + "~"] = t), this;
                }),
                (o.getPlugin = function (e) {
                    return this._plugins["~" + e + "~"];
                }),
                (o._setDelivery = function (e) {
                    this._delivery = e(this);
                }),
                (o.startSession = function () {
                    var e = new xe();
                    return (e.app.releaseStage = this._config.releaseStage), (e.app.version = this._config.appVersion), (e.app.type = this._config.appType), (e._user = g({}, this._user)), ce(this._cbs.s, e, "onSession", this._logger) ? (this._logger.debug("Session not started due to onSession callback"), this) : this._sessionDelegate.startSession(this, e);
                }),
                (o.addOnError = function (e, t) {
                    void 0 === t && (t = !1), this._cbs.e[t ? "unshift" : "push"](e);
                }),
                (o.removeOnError = function (e) {
                    this._cbs.e = n(this._cbs.e, function (t) {
                        return t !== e;
                    });
                }),
                (o._addOnSessionPayload = function (e) {
                    this._cbs.sp.push(e);
                }),
                (o.addOnSession = function (e) {
                    this._cbs.s.push(e);
                }),
                (o.removeOnSession = function (e) {
                    this._cbs.s = n(this._cbs.s, function (t) {
                        return t !== e;
                    });
                }),
                (o.addOnBreadcrumb = function (e, t) {
                    void 0 === t && (t = !1), this._cbs.b[t ? "unshift" : "push"](e);
                }),
                (o.removeOnBreadcrumb = function (e) {
                    this._cbs.b = n(this._cbs.b, function (t) {
                        return t !== e;
                    });
                }),
                (o.pauseSession = function () {
                    return this._sessionDelegate.pauseSession(this);
                }),
                (o.resumeSession = function () {
                    return this._sessionDelegate.resumeSession(this);
                }),
                (o.leaveBreadcrumb = function (t, n, a) {
                    if (((t = "string" == typeof t ? t : ""), (a = "string" == typeof a && r(e, a) ? a : "manual"), (n = "object" == typeof n && null !== n ? n : {}), t)) {
                        var o = new S(t, n, a);
                        ce(this._cbs.b, o, "onBreadcrumb", this._logger) ? this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback") : (this._breadcrumbs.push(o), this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs)));
                    }
                }),
                (o._isBreadcrumbTypeEnabled = function (e) {
                    var t = this._config.enabledBreadcrumbTypes;
                    return null === t || r(t, e);
                }),
                (o.notify = function (e, t, n) {
                    void 0 === n && (n = Le);
                    var r = ie.create(e, !0, void 0, "notify()", this._depth + 1, this._logger);
                    this._notify(r, t, n);
                }),
                (o._notify = function (e, t, n) {
                    var o = this;
                    if ((void 0 === n && (n = Le), (e.app = g({}, e.app, { releaseStage: this._config.releaseStage, version: this._config.appVersion, type: this._config.appType })), (e.context = e.context || this._context), (e._metadata = g({}, e._metadata, this._metadata)), (e._user = g({}, e._user, this._user)), (e.breadcrumbs = this._breadcrumbs.slice()), Te(e._features, this._features, e._featuresIndex), null !== this._config.enabledReleaseStages && !r(this._config.enabledReleaseStages, this._config.releaseStage))) return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"), n(null, e);
                    var i = e.severity,
                        s = function (e) {
                            o._logger.error("Error occurred in onError callback, continuing anyway\u2026"), o._logger.error(e);
                        },
                        u = [].concat(this._cbs.e).concat(t);
                    ue(u, e, s, function (t, r) {
                        if ((t && s(t), !r)) return o._logger.debug("Event not sent due to onError callback"), n(null, e);
                        o._isBreadcrumbTypeEnabled("error") && a.prototype.leaveBreadcrumb.call(o, e.errors[0].errorClass, { errorClass: e.errors[0].errorClass, errorMessage: e.errors[0].errorMessage, severity: e.severity }, "error"),
                            i !== e.severity && (e._handledState.severityReason = { type: "userCallbackSetSeverity" }),
                            e.unhandled !== e._handledState.unhandled && ((e._handledState.severityReason.unhandledOverridden = !0), (e._handledState.unhandled = e.unhandled)),
                            o._session && (o._session._track(e), (e._session = o._session)),
                            o._delivery.sendEvent({ apiKey: e.apiKey || o._config.apiKey, notifier: o._notifier, events: [e] }, function (t) {
                                return n(t, e);
                            });
                    });
                }),
                a
            );
        })(),
        Be = function (e, t) {
            return new Error(
                "Invalid configuration\n" +
                    h(s(e), function (n) {
                        return "  - " + n + " " + e[n] + ", got " + qe(t[n]);
                    }).join("\n\n")
            );
        },
        qe = function (e) {
            switch (typeof e) {
                case "string":
                case "number":
                case "object":
                    return JSON.stringify(e);
                default:
                    return String(e);
            }
        },
        Me = Re,
        Ae = {},
        Ce = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
    (Ae.event = function (e, t) {
        var n = j(e, null, null, { redactedPaths: Ce, redactedKeys: t });
        if (n.length > 1e6 && ((e.events[0]._metadata = { notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed" }), (n = j(e, null, null, { redactedPaths: Ce, redactedKeys: t })).length > 1e6)) throw new Error("payload exceeded 1MB limit");
        return n;
    }),
        (Ae.session = function (e, t) {
            var n = j(e, null, null);
            if (n.length > 1e6) throw new Error("payload exceeded 1MB limit");
            return n;
        });
    var Ie = {};
    Ie = function (e, t) {
        return (
            void 0 === t && (t = window),
            {
                sendEvent: function (n, r) {
                    void 0 === r && (r = function () {});
                    var a = De(e._config, "notify", "4", t),
                        o = new t.XDomainRequest();
                    (o.onload = function () {
                        r(null);
                    }),
                        o.open("POST", a),
                        setTimeout(function () {
                            try {
                                o.send(Ae.event(n, e._config.redactedKeys));
                            } catch (t) {
                                e._logger.error(t), r(t);
                            }
                        }, 0);
                },
                sendSession: function (n, r) {
                    void 0 === r && (r = function () {});
                    var a = De(e._config, "sessions", "1", t),
                        o = new t.XDomainRequest();
                    (o.onload = function () {
                        r(null);
                    }),
                        o.open("POST", a),
                        setTimeout(function () {
                            try {
                                o.send(Ae.session(n, e._config.redactedKeys));
                            } catch (t) {
                                e._logger.error(t), r(t);
                            }
                        }, 0);
                },
            }
        );
    };
    var De = function (e, t, n, r) {
            var a = JSON.parse(JSON.stringify(new Date()));
            return Pe(e.endpoints[t], r.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(a);
        },
        Pe = (Ie._matchPageProtocol = function (e, t) {
            return "http:" === t ? e.replace(/^https:/, "http:") : e;
        }),
        Ve = function (e, t) {
            return (
                void 0 === t && (t = window),
                {
                    sendEvent: function (n, r) {
                        void 0 === r && (r = function () {});
                        try {
                            var a = e._config.endpoints.notify,
                                o = new t.XMLHttpRequest();
                            (o.onreadystatechange = function () {
                                o.readyState === t.XMLHttpRequest.DONE && r(null);
                            }),
                                o.open("POST", a),
                                o.setRequestHeader("Content-Type", "application/json"),
                                o.setRequestHeader("Bugsnag-Api-Key", n.apiKey || e._config.apiKey),
                                o.setRequestHeader("Bugsnag-Payload-Version", "4"),
                                o.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()),
                                o.send(Ae.event(n, e._config.redactedKeys));
                        } catch (t) {
                            e._logger.error(t);
                        }
                    },
                    sendSession: function (n, r) {
                        void 0 === r && (r = function () {});
                        try {
                            var a = e._config.endpoints.sessions,
                                o = new t.XMLHttpRequest();
                            (o.onreadystatechange = function () {
                                o.readyState === t.XMLHttpRequest.DONE && r(null);
                            }),
                                o.open("POST", a),
                                o.setRequestHeader("Content-Type", "application/json"),
                                o.setRequestHeader("Bugsnag-Api-Key", e._config.apiKey),
                                o.setRequestHeader("Bugsnag-Payload-Version", "1"),
                                o.setRequestHeader("Bugsnag-Sent-At", new Date().toISOString()),
                                o.send(Ae.session(n, e._config.redactedKeys));
                        } catch (t) {
                            e._logger.error(t);
                        }
                    },
                }
            );
        },
        Fe = new Date(),
        He = function () {
            Fe = new Date();
        },
        Ke = {
            name: "appDuration",
            load: function (e) {
                return (
                    e.addOnError(function (e) {
                        var t = new Date();
                        e.app.duration = t - Fe;
                    }, !0),
                    { reset: He }
                );
            },
        },
        $e = function (e) {
            return (
                void 0 === e && (e = window),
                {
                    load: function (t) {
                        t.addOnError(function (t) {
                            void 0 === t.context && (t.context = e.location.pathname);
                        }, !0);
                    },
                }
            );
        },
        Ue = function (e, t) {
            var n = "000000000" + e;
            return n.substr(n.length - t);
        },
        Xe = "object" == typeof window ? window : self,
        Je = 0;
    for (var We in Xe) Object.hasOwnProperty.call(Xe, We) && Je++;
    var ze = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
        Ge = Ue((ze + navigator.userAgent.length).toString(36) + Je.toString(36), 4),
        Qe = function () {
            return Ge;
        },
        Ye = 0,
        Ze = 4,
        et = 36,
        tt = Math.pow(et, Ze);
    function nt() {
        return Ue(((Math.random() * tt) << 0).toString(et), Ze);
    }
    function rt() {
        return (Ye = Ye < tt ? Ye : 0), ++Ye - 1;
    }
    function at() {
        return "c" + new Date().getTime().toString(et) + Ue(rt().toString(et), Ze) + Qe() + (nt() + nt());
    }
    at.fingerprint = Qe;
    var ot = at,
        it = "bugsnag-anonymous-id",
        st = function () {
            try {
                var e = window.localStorage,
                    t = e.getItem(it);
                return (t && /^c[a-z0-9]{20,32}$/.test(t)) || ((t = ot()), e.setItem(it, t)), t;
            } catch (e) {}
        },
        ut = function (e, t) {
            return (
                void 0 === e && (e = navigator),
                void 0 === t && (t = window.screen),
                {
                    load: function (n) {
                        var r = { locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language, userAgent: e.userAgent };
                        t && t.orientation && t.orientation.type ? (r.orientation = t.orientation.type) : (r.orientation = document.documentElement.clientWidth > document.documentElement.clientHeight ? "landscape" : "portrait"),
                            n._config.generateAnonymousId && (r.id = st()),
                            n.addOnSession(function (e) {
                                (e.device = g({}, e.device, r)), n._config.collectUserIp || ct(e);
                            }),
                            n.addOnError(function (e) {
                                (e.device = g({}, e.device, r, { time: new Date() })), n._config.collectUserIp || ct(e);
                            }, !0);
                    },
                    configSchema: {
                        generateAnonymousId: {
                            validate: function (e) {
                                return !0 === e || !1 === e;
                            },
                            defaultValue: function () {
                                return !0;
                            },
                            message: "should be true|false",
                        },
                    },
                }
            );
        },
        ct = function (e) {
            var t = e.getUser();
            (t && t.id) || e.setUser(e.device.id);
        },
        lt = function (e) {
            return (
                void 0 === e && (e = window),
                {
                    load: function (t) {
                        t.addOnError(function (t) {
                            (t.request && t.request.url) || (t.request = g({}, t.request, { url: e.location.href }));
                        }, !0);
                    },
                }
            );
        },
        ft = {
            load: function (e) {
                e._sessionDelegate = dt;
            },
        },
        dt = {
            startSession: function (e, t) {
                var n = e;
                return (n._session = t), (n._pausedSession = null), null === n._config.enabledReleaseStages || r(n._config.enabledReleaseStages, n._config.releaseStage) ? (n._delivery.sendSession({ notifier: n._notifier, device: t.device, app: t.app, sessions: [{ id: t.id, startedAt: t.startedAt, user: t._user }] }), n) : (n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"), n);
            },
            resumeSession: function (e) {
                return e._session ? e : e._pausedSession ? ((e._session = e._pausedSession), (e._pausedSession = null), e) : e.startSession();
            },
            pauseSession: function (e) {
                (e._pausedSession = e._session), (e._session = null);
            },
        },
        gt = {
            load: function (e) {
                e._config.collectUserIp ||
                    e.addOnError(function (e) {
                        e._user && void 0 === e._user.id && delete e._user.id, (e._user = g({ id: "[REDACTED]" }, e._user)), (e.request = g({ clientIp: "[REDACTED]" }, e.request));
                    });
            },
            configSchema: {
                collectUserIp: {
                    defaultValue: function () {
                        return !0;
                    },
                    message: "should be true|false",
                    validate: function (e) {
                        return !0 === e || !1 === e;
                    },
                },
            },
        },
        ht = {
            load: function (e) {
                !/^(local-)?dev(elopment)?$/.test(e._config.releaseStage) &&
                    e._isBreadcrumbTypeEnabled("log") &&
                    h(pt, function (n) {
                        var r = console[n];
                        (console[n] = function () {
                            for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++) o[i] = arguments[i];
                            e.leaveBreadcrumb(
                                "Console output",
                                t(
                                    o,
                                    function (e, t, n) {
                                        var r = "[Unknown value]";
                                        try {
                                            r = String(t);
                                        } catch (e) {}
                                        if ("[object Object]" === r)
                                            try {
                                                r = JSON.stringify(t);
                                            } catch (e) {}
                                        return (e["[" + n + "]"] = r), e;
                                    },
                                    { severity: 0 === n.indexOf("group") ? "log" : n }
                                ),
                                "log"
                            ),
                                r.apply(console, o);
                        }),
                            (console[n]._restore = function () {
                                console[n] = r;
                            });
                    });
            },
        },
        pt = n(["log", "debug", "info", "warn", "error"], function (e) {
            return "undefined" != typeof console && "function" == typeof console[e];
        }),
        vt = 200,
        mt = 5e5,
        yt = function (e, r) {
            return (
                void 0 === e && (e = document),
                void 0 === r && (r = window),
                {
                    load: function (a) {
                        if (a._config.trackInlineScripts) {
                            var o = r.location.href,
                                i = "",
                                s = e.attachEvent ? "complete" === e.readyState : "loading" !== e.readyState,
                                u = function () {
                                    return e.documentElement.outerHTML;
                                };
                            i = u();
                            var c = e.onreadystatechange;
                            e.onreadystatechange = function () {
                                "interactive" === e.readyState && ((i = u()), (s = !0));
                                try {
                                    c.apply(this, arguments);
                                } catch (e) {}
                            };
                            var l = null,
                                f = function (e) {
                                    l = e;
                                },
                                d = function () {
                                    var t = e.currentScript || l;
                                    if (!t && !s) {
                                        var n = e.scripts || e.getElementsByTagName("script");
                                        t = n[n.length - 1];
                                    }
                                    return t;
                                },
                                g = function (e) {
                                    (s && i) || (i = u());
                                    var n = ["\x3c!-- DOC START --\x3e"].concat(i.split("\n")),
                                        r = e - 1,
                                        a = Math.max(r - 3, 0),
                                        o = Math.min(r + 3, n.length);
                                    return t(
                                        n.slice(a, o),
                                        function (e, t, n) {
                                            return (e[a + 1 + n] = t.length <= vt ? t : t.substr(0, vt)), e;
                                        },
                                        {}
                                    );
                                };
                            a.addOnError(function (e) {
                                e.errors[0].stacktrace = n(e.errors[0].stacktrace, function (e) {
                                    return !/__trace__$/.test(e.method);
                                });
                                var t = e.errors[0].stacktrace[0];
                                if (!t || !t.file || t.file.replace(/#.*$/, "") === o.replace(/#.*$/, "")) {
                                    var r = d();
                                    if (r) {
                                        var a = r.innerHTML;
                                        e.addMetadata("script", "content", a.length <= mt ? a : a.substr(0, mt)), t && t.lineNumber && (t.code = g(t.lineNumber));
                                    }
                                }
                            }, !0);
                            var p = h(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], function (e) {
                                return bt(r, e, function (e) {
                                    return v(e, function (e) {
                                        return {
                                            get: function () {
                                                return e[0];
                                            },
                                            replace: function (t) {
                                                e[0] = t;
                                            },
                                        };
                                    });
                                });
                            })[0];
                            h(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], function (e) {
                                r[e] &&
                                    r[e].prototype &&
                                    Object.prototype.hasOwnProperty.call(r[e].prototype, "addEventListener") &&
                                    (bt(r[e].prototype, "addEventListener", function (e) {
                                        return v(e, _t);
                                    }),
                                    bt(r[e].prototype, "removeEventListener", function (e) {
                                        return v(e, _t, !0);
                                    }));
                            });
                        }
                        function v(e, t, n) {
                            return (
                                void 0 === n && (n = !1),
                                function () {
                                    var r = [].slice.call(arguments);
                                    try {
                                        var a = t(r),
                                            o = a.get();
                                        if ((n && e.apply(this, r), "function" != typeof o)) return e.apply(this, r);
                                        if (o.__trace__) a.replace(o.__trace__);
                                        else {
                                            var i = d();
                                            (o.__trace__ = function () {
                                                f(i),
                                                    p(function () {
                                                        f(null);
                                                    }, 0);
                                                var e = o.apply(this, arguments);
                                                return f(null), e;
                                            }),
                                                (o.__trace__.__trace__ = o.__trace__),
                                                a.replace(o.__trace__);
                                        }
                                    } catch (e) {}
                                    if (e.apply) return e.apply(this, r);
                                    switch (r.length) {
                                        case 1:
                                            return e(r[0]);
                                        case 2:
                                            return e(r[0], r[1]);
                                        default:
                                            return e();
                                    }
                                }
                            );
                        }
                    },
                    configSchema: {
                        trackInlineScripts: {
                            validate: function (e) {
                                return !0 === e || !1 === e;
                            },
                            defaultValue: function () {
                                return !0;
                            },
                            message: "should be true|false",
                        },
                    },
                }
            );
        };
    function bt(e, t, n) {
        var r = e[t];
        if (!r) return r;
        var a = n(r);
        return (e[t] = a), r;
    }
    function _t(e) {
        var t = !!e[1] && "function" == typeof e[1].handleEvent;
        return {
            get: function () {
                return t ? e[1].handleEvent : e[1];
            },
            replace: function (n) {
                t ? (e[1].handleEvent = n) : (e[1] = n);
            },
        };
    }
    var St = function (e) {
            return (
                void 0 === e && (e = window),
                {
                    load: function (t) {
                        "addEventListener" in e &&
                            t._isBreadcrumbTypeEnabled("user") &&
                            e.addEventListener(
                                "click",
                                function (n) {
                                    var r, a;
                                    try {
                                        (r = wt(n.target)), (a = Et(n.target, e));
                                    } catch (e) {
                                        (r = "[hidden]"), (a = "[hidden]"), t._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z");
                                    }
                                    t.leaveBreadcrumb("UI click", { targetText: r, targetSelector: a }, "user");
                                },
                                !0
                            );
                    },
                }
            );
        },
        wt = function (e) {
            var t = e.textContent || e.innerText || "";
            return t || ("submit" !== e.type && "button" !== e.type) || (t = e.value), Ot((t = t.replace(/^\s+|\s+$/g, "")), 140);
        };
    function Et(e, t) {
        var n = [e.tagName];
        if ((e.id && n.push("#" + e.id), e.className && e.className.length && n.push("." + e.className.split(" ").join(".")), !t.document.querySelectorAll || !Array.prototype.indexOf)) return n.join("");
        try {
            if (1 === t.document.querySelectorAll(n.join("")).length) return n.join("");
        } catch (e) {
            return n.join("");
        }
        if (e.parentNode.childNodes.length > 1) {
            var r = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
            n.push(":nth-child(" + r + ")");
        }
        return 1 === t.document.querySelectorAll(n.join("")).length ? n.join("") : e.parentNode ? Et(e.parentNode, t) + " > " + n.join("") : n.join("");
    }
    function Ot(e, t) {
        var n = "(...)";
        return e && e.length <= t ? e : e.slice(0, t - n.length) + n;
    }
    var jt = {};
    jt = function (e) {
        void 0 === e && (e = window);
        var t = {
            load: function (t) {
                if ("addEventListener" in e && t._isBreadcrumbTypeEnabled("navigation")) {
                    var n = function (e) {
                        return function () {
                            return t.leaveBreadcrumb(e, {}, "navigation");
                        };
                    };
                    e.addEventListener("pagehide", n("Page hidden"), !0),
                        e.addEventListener("pageshow", n("Page shown"), !0),
                        e.addEventListener("load", n("Page loaded"), !0),
                        e.document.addEventListener("DOMContentLoaded", n("DOMContentLoaded"), !0),
                        e.addEventListener("load", function () {
                            return e.addEventListener("popstate", n("Navigated back"), !0);
                        }),
                        e.addEventListener(
                            "hashchange",
                            function (n) {
                                var r = n.oldURL ? { from: xt(n.oldURL, e), to: xt(n.newURL, e), state: Tt(e) } : { to: xt(e.location.href, e) };
                                t.leaveBreadcrumb("Hash changed", r, "navigation");
                            },
                            !0
                        ),
                        e.history.replaceState && kt(t, e.history, "replaceState", e),
                        e.history.pushState && kt(t, e.history, "pushState", e);
                }
            },
        };
        return t;
    };
    var xt = function (e, t) {
            var n = t.document.createElement("A");
            return (n.href = e), "" + n.pathname + n.search + n.hash;
        },
        Nt = function (e, t, n, r) {
            var a = xt(e.location.href, e);
            return { title: n, state: t, prevState: Tt(e), to: r || a, from: a };
        },
        kt = function (e, t, n, r) {
            var a = t[n];
            t[n] = function (o, i, s) {
                e.leaveBreadcrumb("History " + n, Nt(r, o, i, s), "navigation"), "function" == typeof e.resetEventCount && e.resetEventCount(), e._config.autoTrackSessions && e.startSession(), a.apply(t, [o, i].concat(void 0 !== s ? s : []));
            };
        },
        Tt = function (e) {
            try {
                return e.history.state;
            } catch (e) {}
        },
        Lt = "request",
        Rt = function (e, t) {
            void 0 === e && (e = []), void 0 === t && (t = window);
            var n = {
                load: function (n) {
                    if (n._isBreadcrumbTypeEnabled("request")) {
                        var a = [n._config.endpoints.notify, n._config.endpoints.sessions].concat(e);
                        s(), l();
                        var o = function (e, t, r) {
                                var a = { status: e.status, request: t + " " + r };
                                e.status >= 400 ? n.leaveBreadcrumb("fetch() failed", a, Lt) : n.leaveBreadcrumb("fetch() succeeded", a, Lt);
                            },
                            i = function (e, t) {
                                n.leaveBreadcrumb("fetch() error", { request: e + " " + t }, Lt);
                            };
                    }
                    function s() {
                        if ("addEventListener" in t.XMLHttpRequest.prototype) {
                            var e = t.XMLHttpRequest.prototype.open;
                            t.XMLHttpRequest.prototype.open = function (t, n) {
                                var r = this,
                                    a = !1,
                                    o = function () {
                                        return c(t, n);
                                    },
                                    i = function () {
                                        return u(t, n, r.status);
                                    };
                                a && (this.removeEventListener("load", i), this.removeEventListener("error", o)), this.addEventListener("load", i), this.addEventListener("error", o), (a = !0), e.apply(this, arguments);
                            };
                        }
                    }
                    function u(e, t, o) {
                        if (void 0 !== t) {
                            if ("string" != typeof t || !r(a, t.replace(/\?.*$/, ""))) {
                                var i = { status: o, request: e + " " + t };
                                o >= 400 ? n.leaveBreadcrumb("XMLHttpRequest failed", i, Lt) : n.leaveBreadcrumb("XMLHttpRequest succeeded", i, Lt);
                            }
                        } else n._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
                    }
                    function c(e, t) {
                        void 0 !== t ? ("string" == typeof t && r(a, t.replace(/\?.*$/, ""))) || n.leaveBreadcrumb("XMLHttpRequest error", { request: e + " " + t }, Lt) : n._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.");
                    }
                    function l() {
                        if ("fetch" in t && !t.fetch.polyfill) {
                            var e = t.fetch;
                            t.fetch = function () {
                                var t,
                                    n = arguments,
                                    r = arguments[0],
                                    a = arguments[1],
                                    s = null;
                                return (
                                    r && "object" == typeof r ? ((s = r.url), a && "method" in a ? (t = a.method) : r && "method" in r && (t = r.method)) : ((s = r), a && "method" in a && (t = a.method)),
                                    void 0 === t && (t = "GET"),
                                    new Promise(function (r, a) {
                                        e.apply(void 0, n)
                                            .then(function (e) {
                                                o(e, t, s), r(e);
                                            })
                                            .catch(function (e) {
                                                i(t, s), a(e);
                                            });
                                    })
                                );
                            };
                        }
                    }
                },
            };
            return n;
        },
        Bt = {
            load: function (e) {
                var t = 0;
                e.addOnError(function (n) {
                    if (t >= e._config.maxEvents) return e._logger.warn("Cancelling event send due to maxEvents per session limit of " + e._config.maxEvents + " being reached"), !1;
                    t++;
                }),
                    (e.resetEventCount = function () {
                        t = 0;
                    });
            },
            configSchema: {
                maxEvents: {
                    defaultValue: function () {
                        return 10;
                    },
                    message: "should be a positive integer \u2264100",
                    validate: function (e) {
                        return u(1, 100)(e);
                    },
                },
            },
        },
        qt = {},
        Mt = ((qt = {
            load: function (e) {
                e.addOnError(function (e) {
                    var n = t(
                        e.errors,
                        function (e, t) {
                            return e.concat(t.stacktrace);
                        },
                        []
                    );
                    h(n, function (e) {
                        e.file = Mt(e.file);
                    });
                });
            },
        })._strip = function (e) {
            return "string" == typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e;
        }),
        At = function (e) {
            return (
                void 0 === e && (e = window),
                {
                    load: function (t) {
                        if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledExceptions) {
                            var n = e.onerror;
                            e.onerror = r;
                        }
                        function r(e, r, a, o, i) {
                            if (0 === a && /Script error\.?/.test(e)) t._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");
                            else {
                                var s,
                                    u = { severity: "error", unhandled: !0, severityReason: { type: "unhandledException" } };
                                if (i) (s = t.Event.create(i, !0, u, "window onerror", 1)), Ct(s.errors[0].stacktrace, r, a, o);
                                else if ("object" != typeof e || null === e || (r && "string" == typeof r) || a || o || i) (s = t.Event.create(e, !0, u, "window onerror", 1)), Ct(s.errors[0].stacktrace, r, a, o);
                                else {
                                    var c = e.type ? "Event: " + e.type : "Error",
                                        l = e.message || e.detail || "";
                                    ((s = t.Event.create({ name: c, message: l }, !0, u, "window onerror", 1)).originalError = e), s.addMetadata("window onerror", { event: e, extraParameters: r });
                                }
                                t._notify(s);
                            }
                            "function" == typeof n && n.apply(this, arguments);
                        }
                    },
                }
            );
        },
        Ct = function (e, t, n, r) {
            e[0] || e.push({});
            var a = e[0];
            a.file || "string" != typeof t || (a.file = t), !a.lineNumber && It(n) && (a.lineNumber = n), a.columnNumber || (It(r) ? (a.columnNumber = r) : window.event && It(window.event.errorCharacter) && (a.columnNumber = window.event.errorCharacter));
        },
        It = function (e) {
            return "number" == typeof e && "NaN" !== String.call(e);
        },
        Dt = function (e) {
            return (
                void 0 === e && (e = window),
                {
                    load: function (t) {
                        if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledRejections) {
                            var n = function (e) {
                                var n = e.reason,
                                    r = !1;
                                try {
                                    e.detail && e.detail.reason && ((n = e.detail.reason), (r = !0));
                                } catch (e) {}
                                var a = t.Event.create(n, !1, { severity: "error", unhandled: !0, severityReason: { type: "unhandledPromiseRejection" } }, "unhandledrejection handler", 1, t._logger);
                                r && h(a.errors[0].stacktrace, Pt(n)),
                                    t._notify(a, function (e) {
                                        var t;
                                        U(e.originalError) && !e.originalError.stack && e.addMetadata("unhandledRejection handler", (((t = {})[Object.prototype.toString.call(e.originalError)] = { name: e.originalError.name, message: e.originalError.message, code: e.originalError.code }), t));
                                    });
                            };
                            "addEventListener" in e
                                ? e.addEventListener("unhandledrejection", n)
                                : (e.onunhandledrejection = function (e, t) {
                                      n({ detail: { reason: e, promise: t } });
                                  });
                        }
                    },
                }
            );
        },
        Pt = function (e) {
            return function (t) {
                t.file !== e.toString() && t.method && (t.method = t.method.replace(/^\s+/, ""));
            };
        },
        Vt = {},
        Ft = "Bugsnag JavaScript",
        Ht = "7.17.0",
        Kt = "https://github.com/bugsnag/bugsnag-js",
        $t = g({}, f.schema, b),
        Ut = {
            _client: null,
            createClient: function (e) {
                "string" == typeof e && (e = { apiKey: e }), e || (e = {});
                var t = [Ke, ut(), $e(), lt(), Bt, ft, gt, qt, At(), Dt(), jt(), St(), Rt(), ht, yt()],
                    n = new Me(e, $t, t, { name: Ft, version: Ht, url: Kt });
                return n._setDelivery(window.XDomainRequest ? Ie : Ve), n._logger.debug("Loaded!"), n.leaveBreadcrumb("Bugsnag loaded", {}, "state"), n._config.autoTrackSessions ? n.startSession() : n;
            },
            start: function (e) {
                return Ut._client ? (Ut._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."), Ut._client) : ((Ut._client = Ut.createClient(e)), Ut._client);
            },
            isStarted: function () {
                return null != Ut._client;
            },
        };
    return (
        h(["resetEventCount"].concat(s(Me.prototype)), function (e) {
            /^_/.test(e) ||
                (Ut[e] = function () {
                    if (!Ut._client) return console.log("Bugsnag." + e + "() was called before Bugsnag.start()");
                    Ut._client._depth += 1;
                    var t = Ut._client[e].apply(Ut._client, arguments);
                    return (Ut._client._depth -= 1), t;
                });
        }),
        ((Vt = Ut).Client = Me),
        (Vt.Event = ie),
        (Vt.Session = xe),
        (Vt.Breadcrumb = S),
        (Vt.default = Ut),
        Vt
    );
})()),
    (n.exports = r.exports),
    (window.Bugsnag = n.exports),
    window.Bugsnag.start({ apiKey: "89a7744f0a74c197fd23f560afed1170", releaseStage: window.releaseStage, appVersion: `new-${window.CACHE_NAME}`, metadata: { lang: document.documentElement.dataset.wiki } });
var a = e({ __proto__: null, default: t }, [t]);
export { a as b };
