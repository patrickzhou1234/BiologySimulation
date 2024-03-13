/*
	Copyright 2022 Michael Dayah - All Rights Reserved.
	Ptable® is a registered trademark of Michael Dayah
	Electronic redistribution in any form is strictly prohibited.

	Learn from this clean, library-free, framework-free code,
	but use what you learn to create something original.
*/
import { P as e, g as t, f as n } from "./required-558b88c3.js";
const o = (e) => document.getElementById(e),
    a = document.documentElement.dataset.wiki;
function c(e, t, n = e.target.href) {
    function o(e) {
        const t = e.target?.contentDocument?.documentElement;
        t && ((t.style.colorScheme = document.documentElement.style.colorScheme), (t.style.color = window.getComputedStyle(document.documentElement).getPropertyValue("color")));
    }
    if (screen.width * screen.height < 614400 || !navigator.onLine || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey || e?.button > 0) return;
    e.preventDefault(), i(e);
    const a = document.createElement("figure");
    a.id = "Clone";
    const c = function () {
        const e = this.getBoundingClientRect();
        return { top: e.top, left: e.left, bottom: document.documentElement.clientHeight - e.bottom, right: document.documentElement.clientWidth - e.right };
    }.call(t);
    for (const e in c) a.style[e] = c[e] + "px";
    a.classList.add("Clone", ...t.classList);
    const s = document.createElement("button");
    s.addEventListener("click", i, { capture: !0 }), a.appendChild(s), document.body.appendChild(a), a.offsetWidth;
    const r = document.createElement("iframe");
    r.sandbox = "allow-same-origin allow-popups allow-popups-to-escape-sandbox";
    const l = (n = n.split("#"))[0].replace(/ /g, "_").replace(/^.*\/\/([a-z-]+).wikipedia.org\/wiki\//, "/wiki/$1/A/"),
        d = n[1] ? `#${n[1]}` : "";
    (r.src = `${l}${d}`),
        (r.onload = function (e) {
            o({ target: this });
            const t = this.contentDocument?.documentElement;
            t && (document.documentElement.classList.contains("FullScreen") ? t.querySelectorAll("a[href^=http]").forEach((e) => e.removeAttribute("href")) : t.querySelectorAll("a[href^=http]").forEach((e) => e.setAttribute("target", "_blank")));
        }),
        r.addEventListener("syncThemes", o),
        a.appendChild(r),
        a.addEventListener(
            "transitionend",
            function (e) {
                "top" === e.propertyName && (this.classList.add("ExpandDone"), o({ target: r }));
            },
            !0
        );
    for (const e in c) a.style[e] = "";
    (a.style.backgroundColor = ""), document.body.classList.add("Overlay"), a.classList.add("Expand");
}
function i(t) {
    if (t.key && "Escape" !== t.key) return;
    document.body.classList.remove("Overlay");
    const n = o("Clone");
    if (n) {
        n.classList.add("Disappear"), n.addEventListener("transitionend", () => n.remove());
        const t = document.querySelector(".name ol > li.Active");
        t && e.atomic_map.get(Number(t.dataset.atomic)).dispatchEvent(new Event("pointerdown"));
    }
}
o("CloseUp")
    .querySelector("a")
    .addEventListener("click", (e) => {
        let t;
        o("CloseUp").classList.contains("Tope") && (t = e.target.href.replace("//en.", "//isotopes.")), c(e, o("CloseUp"), t);
    }),
    o("Series")
        .querySelectorAll("a")
        .forEach((e) => e.addEventListener("click", (t) => c(t, e.closest("dt, dd")))),
    o("StateOfMatter")
        .querySelectorAll("a")
        .forEach((e) => e.addEventListener("click", (t) => c(t, e.closest("div")))),
    o("DecayModes")
        .querySelectorAll("a")
        .forEach((e) => e.addEventListener("click", (t) => c(t, e.closest("div")))),
    document.querySelector('[value="name"] + li').addEventListener("click", (e) => {
        "A" === e.target.nodeName && c(e, o("CloseUp"));
    }),
    document.querySelector('[value="isoname"] + li').addEventListener("click", (e) => {
        if ("A" === e.target.nodeName) {
            const t = e.target.href.replace("//en.", "//isotopes.");
            c(e, o("CloseUp"), t);
        }
    }),
    o("Ptable")
        .querySelectorAll(".Group > a")
        .forEach((e) => e.addEventListener("click", (t) => c(t, e.closest(".Group")))),
    o("CompoundResults").addEventListener("click", (e) => {
        if ("A" === e.target.nodeName && "" !== e.target.href) {
            const t = e.target.href.replace("//en.", "//compounds.");
            c(e, e.target.closest("li"), t);
        }
    }),
    o("Ptable").addEventListener("activateElement", async (t) => {
        if (document.querySelector(".Property .name")) {
            const n = await e.value(t.target.dataset.atomic, void 0, "wiki"),
                o = `https://${a}.wikipedia.org/wiki/${n}`;
            c(t, t.target, o);
        }
        if (t.target.classList.contains("Tope") && document.querySelector(".Isotope .isoname")) {
            const n = `https://isotopes.wikipedia.org/wiki/${await e.value(t.target.dataset.atomic, t.target.dataset.neutrons, "isowiki")}`;
            c(t, t.target, n);
        }
    }),
    document.addEventListener("keydown", i);
const s = (e) => document.getElementById(e);
let r, l;
function d() {
    window.addEventListener("pointerup", function e() {
        clearInterval(r), window.removeEventListener("pointerup", e);
    });
    const e = this.closest(".Slider").querySelector('input[type="range"]');
    (e.value = Number(e.value) + Number(this.dataset.skip)), (r = setTimeout(() => d.call(this), 125)), e.dispatchEvent(new Event("input"));
}
function u(t) {
    cancelAnimationFrame(l),
        (l = requestAnimationFrame(() =>
            (function (t) {
                const n = t.target;
                async function o(t) {
                    const n = (await e.value(void 0, void 0, "discover")).map(Number);
                    e.atomic_map.forEach((e, o) => {
                        const a = !n[o] || n[o] <= t;
                        e.classList.toggle("Undiscovered", !a);
                    });
                }
                const a = parseInt(n.value, 10);
                isNaN(a) || (s("Year").value = s("YearRange").value = a);
                o(a);
            })(t)
        ));
}
function m() {
    const e = s("YearRange");
    (e.value = e.getAttribute("max")), e.dispatchEvent(new Event("input"));
}
(s("YearRange").oninput = s("Year").oninput = u), s("YearAdd").addEventListener("pointerdown", d), s("YearSub").addEventListener("pointerdown", d), (document.querySelector("#SliderYear > label").onclick = m), document.querySelector("#ResetTab + label").addEventListener("click", m);
const h = (e) => document.getElementById(e);
function p() {
    return "requestIdleCallback" in window ? new Promise(requestIdleCallback) : new Promise((e) => setTimeout(e, 1));
}
async function g(e) {
    function t(e) {
        this.classList.toggle("NoSelect", !e), this.querySelectorAll("a, input, select, [tabindex]").forEach((t) => (t.tabIndex = e ? 0 : -1)), this.querySelectorAll("select").forEach((e) => (e.disabled = !Boolean(e.options.length - 1)));
    }
    await p(), e.forEach((e) => t.call(e.target, e.isIntersecting));
}
function f(e, t) {
    const n = new IntersectionObserver(t, { root: e, threshold: 1, rootMargin: "10px" });
    [...e.children].forEach((e) => n.observe(e));
}
!(async function () {
    await p(), "IntersectionObserver" in window && (f(h("KeyRegion"), g), f(h("DataRegion"), g));
})();
const v = (e) => document.getElementById(e),
    E = v("SearchBox");
let y;
function L() {
    document.removeEventListener("keydown", w), y && y.disconnect(), document.querySelector("aside").removeEventListener("changeProperty", S), document.body.classList.remove("SearchActive"), (v("SearchButton").checked = !1), (E.value = ""), k();
}
function b(e) {
    "visibility" === e.propertyName && E.focus();
}
function w(e) {
    "Escape" === e.key && L();
}
function S() {
    v("SearchButton").checked && E.dispatchEvent(new Event("input"));
}
async function k() {
    const n = document.querySelector('[name="searchtype"]:checked').value,
        o = E.value || "MichaelDayah";
    E.setAttribute("placeholder", E.dataset[`placeholder${n}`]);
    let a = document.querySelector(e.activeProperty);
    ["name", "series"].includes(a.value) && (a = document.querySelector('input[value="weight"]'));
    const c = await t(a, "search");
    let i, s, r;
    if (e.atomic_map.has(Number(o))) i = e.atomic_map.get(Number(o));
    else {
        let e = [...c].filter(([e, t]) => e.children[0].textContent.toLowerCase() === o);
        e.length && (i = e[0][0]);
    }
    "-" === o.charAt(0) ? ((r = "~"), (s = Number(o))) : [">", "<", "=", "~"].includes(o.charAt(0)) ? ((r = o.charAt(0)), (s = Number(o.substring(1)))) : o.substring(1).includes("-") || o.includes("..") ? ((r = "-"), (s = o.split(/-|\.\./))) : isNaN(o) ? ((r = "S"), (s = o.toLowerCase())) : ((r = "~"), (s = Number(o))), ["oxidation"].includes(a.value) && (r = "S");
    let l = [];
    if ("=" === r) l = [...c].filter(([e, t]) => t == s);
    else if ("<" === r) l = [...c].filter(([e, t]) => Number(t) < s);
    else if (">" === r) l = [...c].filter(([e, t]) => Number(t) > s);
    else if ("-" === r && 2 === s.length) l = [...c].filter(([e, t]) => t >= Number(s[0] || Number.MIN_VALUE) && t <= Number(s[1] || Number.MAX_VALUE));
    else if ("~" === r) {
        let e = [...c.values()].filter((e) => null != e).reduce((e, t) => Math.min(Math.abs(t - s), e), Number.MAX_VALUE);
        l = [...c].filter(([t, n]) => Math.abs(n - s) <= e);
    } else "S" === r && (l = [...c].filter(([e, t]) => String(t).toLowerCase().includes(s)));
    l.length || (l = [...c].filter(([e, t]) => e.children[1].textContent.toLowerCase() === s)),
        l.length || (l = [...c].filter(([e, t]) => e.children[2].textContent.toLowerCase().includes(s))),
        (l = l.map((e) => e[0])),
        l.length ? (i && (l[0] !== i || l.length > 1) ? ("atomic" === n && (l = [i]), v("SearchType").classList.add("Ambiguous")) : v("SearchType").classList.remove("Ambiguous")) : (i && l.push(i), v("SearchType").classList.remove("Ambiguous")),
        (function (t) {
            document.querySelectorAll("ol > li").forEach((e) => e.classList.toggle("Dim", !t.includes(e))), 1 === t.length && (t[0].dispatchEvent(e.hoverElement), t[0].scrollIntoView(!1));
        })(l);
}
v("SearchButton").addEventListener("click", (e) =>
    e.currentTarget.checked
        ? (document.addEventListener("keydown", w),
          document.body.classList.add("SearchActive"),
          document.querySelector("aside").addEventListener("changeProperty", S),
          (y = (function (e, t) {
              const n = new MutationObserver(t);
              return n.observe(e, { childList: !0 }), n;
          })(v("Ptable"), S)),
          E.dispatchEvent(new Event("input")),
          void v("SearchConsole").addEventListener("transitionend", b))
        : L()
),
    document.querySelector("#ResetTab + label").addEventListener("click", L),
    E.addEventListener("input", k),
    v("AtomicSearch").addEventListener("change", k),
    v("PropertySearch").addEventListener("change", k);
function A(t) {
    const n = document.activeElement.dataset.atomic,
        o = Number(Array.from(e.atomic_map.values()).pop().dataset.atomic),
        a = { ArrowDown: (e) => q(e, 1), ArrowUp: (e) => q(e, -1), ArrowLeft: (e) => Math.max(1, --e), ArrowRight: (e) => Math.min(++e, o) };
    if (!n || !a[t.key]) return;
    const c = Number(n),
        i = a[t.key](c);
    e.atomic_map.get(i).focus();
}
function q(t, o) {
    const a = ((e) => document.getElementById(e))("Wide").checked ? e.table_map.wide : e.table_map.traditional,
        c = n(t, a);
    let i;
    return (c[1] += o), 7 === c[1] && (c[1] += o), c[1] >= 0 && c[1] < a.length && (i = a[c[1]][c[0]]), i || t;
}
document.addEventListener("keydown", A);
const N = (e) => document.getElementById(e),
    T = N("Ptable").dataset.classes.split(" ");
function P() {
    N("Ptable").classList.add(...T);
}
function C() {
    N("Ptable").classList.remove(...T), N("Ptable").classList.add(this.classList.value);
}
N("Blocks")
    .querySelectorAll("dt")
    .forEach((e) => e.addEventListener("pointerenter", C)),
    N("Blocks").addEventListener("pointerleave", P);
const I = (e) => document.getElementById(e);
let M = [];
function B() {
    I("Ptable").classList.remove(...M);
}
function x(e) {
    B(), I("Ptable").classList.add(e.split(" ")[0]);
}
[...document.querySelectorAll("#StateOfMatter dt")].forEach((e) => {
    M.push(e.className), e.addEventListener("pointerenter", () => x(e.className)), e.nextElementSibling.addEventListener("focusin", () => x(e.className)), e.nextElementSibling.addEventListener("focusout", () => B(e.className));
}),
    I("StateOfMatter").addEventListener("pointerleave", B);
const D = (e) => document.getElementById(e),
    _ = D("Ptable").dataset.classes.split(" ");
function R() {
    D("Ptable").classList.add(..._);
}
function W() {
    D("Ptable").classList.remove(..._), this.dataset.classes ? D("Ptable").classList.add(...this.dataset.classes.split(" ")) : D("Ptable").classList.add(...this.classList);
}
[...D("Series").children].forEach((e) => {
    e.addEventListener("pointerenter", W), e.addEventListener("focusin", W), e.addEventListener("focusout", R);
}),
    D("Series").addEventListener("pointerleave", R);
const $ = (e) => document.getElementById(e);
function O(t) {
    document.documentElement.classList.add("NoTransitions"), document.documentElement.classList.toggle("Dark", this.checked);
    const n = this.checked ? "dark" : "light";
    document.documentElement.style.colorScheme = n;
    const o = document.querySelector("figure > iframe");
    o && o.dispatchEvent(e.syncThemes), ($("DarkButton").checked = this.checked), ($("DarkButtonFooter").checked = this.checked), t.isTrusted && localStorage.setItem("Theme", this.checked ? "Dark" : "Light");
    const a = document.querySelector(e.activeProperty);
    a && a.dispatchEvent(e.recolorTable), document.documentElement.offsetHeight, document.documentElement.classList.remove("NoTransitions");
}
$("DarkButton").addEventListener("change", O), $("DarkButtonFooter").addEventListener("change", O), ($("DarkButton").checked = $("DarkButtonFooter").checked = document.documentElement.classList.contains("Dark"));
const F = (e) => document.getElementById(e);
let H;
function U(e) {
    (e.key && "Enter" !== e.key) || ((F("Wide").checked = !0), j.call(F("Wide"), { isTrusted: !0 }));
}
function j(e) {
    (F("Wide").checked = this.checked), (F("WideFooter").checked = this.checked), clearTimeout(H);
    const t = this.checked ? 1 : -1;
    e.isTrusted ? (H = setTimeout(() => z(t), 120)) : z(15 * t);
}
async function z(e) {
    const t = Number(document.documentElement.dataset.wide) + e;
    t >= 0 && t <= 15 && (await new Promise(requestAnimationFrame), (document.documentElement.dataset.wide = t), document.documentElement.style.setProperty("--groups", Math.min(32, t + 18)), (H = setTimeout(() => z(e), 120)));
}
!(function () {
    F("Wide").addEventListener("change", j), F("WideFooter").addEventListener("change", j), F("Wide").dispatchEvent(new Event("change")), F("VerticalInner").addEventListener("click", U), document.querySelectorAll(".Label57to71, .Label89to103").forEach((e) => e.addEventListener("keypress", U));
    const t = Array(15)
        .fill()
        .map((e, t) => t + 1);
    for (let n = 0; n < 15; n++) (e.atomic_map.get(103 - n).dataset.wide = t.slice(n).join(" ")), (e.atomic_map.get(71 - n).dataset.wide = t.slice(n).join(" "));
})();
function Y() {
    document.querySelector("footer").classList.toggle("Menu", this.checked);
}
((e) => document.getElementById(e))("Menu").addEventListener("change", Y);
const V = (e) => document.getElementById(e),
    K = document.getElementsByTagName("aside")[0];
function X(e) {
    e.matches && V("SidebarToggle").checked && (document.documentElement.classList.toggle("Sidebar", !1), (V("TopbarToggle").checked = !0));
}
function J() {
    K.removeEventListener("transitionend", Q), K.removeEventListener("transitionend", Z), document.documentElement.classList.remove("Collapse", "SmoothResize"), document.documentElement.offsetHeight, document.documentElement.classList.contains("Reset") ? G() : (document.documentElement.classList.add("SmoothResize", "Collapse"), K.addEventListener("transitionend", Q));
}
function G() {
    document.documentElement.classList.toggle("Sidebar", V("SidebarToggle").checked), localStorage.setItem("Layout", V("SidebarToggle").checked ? "Sidebar" : "Topbar");
}
function Q(e) {
    e.target === this && e.propertyName.startsWith("flex") && (this.removeEventListener("transitionend", Q), G(), document.documentElement.classList.remove("Collapse"), K.addEventListener("transitionend", Z));
}
function Z(e) {
    e.target === this && e.propertyName.startsWith("flex") && (this.removeEventListener("transitionend", Z), document.documentElement.classList.remove("SmoothResize"));
}
!(function () {
    (V("SidebarToggle").checked = document.documentElement.classList.contains("Sidebar")),
        V("SidebarToggle").addEventListener("change", J),
        V("TopbarToggle").addEventListener("change", J),
        document.querySelector("#ResetTab + label").addEventListener("click", () => {
            document.documentElement.classList.contains("Reset") && localStorage.removeItem("Layout");
        });
    const e = window.matchMedia("(max-width: 550px)");
    e.addListener(X), X({ matches: e.matches });
})();
function ee() {
    this.closest("form").submit();
}
((e) => document.getElementById(e))("Lang").addEventListener("change", ee);
const te = (e) => document.getElementById(e);
function ne() {
    window.adsbygoogle = [{}];
    const e = document.createElement("script");
    (e.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1899956715581914"), e.setAttribute("crossorigin", "anonymous"), e.setAttribute("defer", ""), document.head.appendChild(e);
    const t = document.querySelector(".Notice > div > button");
    t &&
        t.addEventListener("click", function (e) {
            const t = document.querySelector(".adsbygoogle");
            t && ((t.dataset.adsbygoogleStatus = ""), (t.style.display = e.target.parentNode.style.display = "none"), (t.parentNode.style.minHeight = 0));
        });
}
function oe(e) {
    const t = te("Notice");
    switch (Number(e)) {
        case 1500:
            setTimeout(() => location.reload(!0), 60 * 120 * 1e3), document.documentElement.classList.add("FullScreen");
        case 500:
        case 100:
            t && (t.style.display = "none");
    }
}
!(function () {
    let e = !0;
    window.Windows && (e = !1), document.monetization && ("started" === document.monetization.state ? ((e = !1), oe(100)) : document.monetization.addEventListener("monetizationstart", () => oe(100)));
    const t = ((n = "PatreonSubscription"), new Map(document.cookie.split(";").map((e) => e.trim().split("="))).get(n));
    var n;
    t ? oe(t) : te("Notice") && e && ("complete" === document.readyState ? ne() : window.addEventListener("load", ne));
})();
const ae = (e) => document.getElementById(e);
function ce() {
    ae("Ptable").classList.remove("Shine", "Delay"), document.removeEventListener("pointerdown", ce);
}
function ie(e) {
    const t = [`/?lang=${e}`, "/JSON/isotope/all.json", "/JSON/compounds.json", ...[...document.querySelectorAll('footer [href$=".svg"]')].map((e) => new URL(e.href).pathname)];
    caches
        .open(window.CACHE_NAME)
        .then((e) => e.addAll(t))
        .catch(reportError);
}
Array.from(e.atomic_map.values())
    .pop()
    .addEventListener("animationend", (e) => {
        "shine" === e.animationName && ce();
    }),
    document.querySelector("#ResetTab + label").addEventListener("click", () => {
        document.documentElement.classList.contains("Reset") &&
            ((function () {
                const t = (function (e) {
                    const t = [];
                    for (let n = 0; n <= e.length - 1 + e[0].length - 1; n++) {
                        t[n] = [];
                        for (let o = 0; o <= n; o++) {
                            const a = o,
                                c = n - o;
                            if (c < e.length && a < e[c].length) {
                                const o = e[c][a];
                                void 0 !== o && t[n].push(o);
                            }
                        }
                    }
                    return t;
                })(ae("Wide").checked ? e.table_map.wide : e.table_map.traditional);
                for (let n = 0; n < t.length; n++)
                    for (let o = 0; o < t[n].length; o++) {
                        const a = 0.05 * n;
                        e.atomic_map.get(t[n][o]).style.setProperty("--shine", `${a}s`);
                    }
            })(),
            ae("Ptable").classList.remove("Delay"),
            ae("Ptable").classList.add("Shine"),
            document.addEventListener("pointerdown", ce));
    }),
    (function () {
        const e = document.documentElement.dataset.iso;
        "caches" in window &&
            (function (e) {
                let t = "/";
                new URLSearchParams(window.location.search).get("lang") && (t = `/?lang=${e}`);
                const n = [t, `/manifest/ptable.${e}.webmanifest`];
                caches
                    .open(window.CACHE_NAME)
                    .then((e) => e.addAll(n))
                    .catch(reportError);
            })(e),
            "serviceWorker" in navigator && navigator.serviceWorker.register("/service-worker.js").catch(reportError),
            window.addEventListener("appinstalled", () => ie(e)),
            navigator.standalone && "caches" in window && ie(e);
    })();
function se(e) {
    const t = { title: document.querySelector("title").textContent, text: document.querySelector('meta[name="description"]').getAttribute("content"), url: document.querySelector('link[rel="canonical"]').getAttribute("href") };
    e.preventDefault(), navigator.share && navigator.share(t).catch(reportError);
}
function re(e) {
    const t = (t, n, o) => {
            !(function (e, t, n) {
                const o = /^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*:)*?:?0*1$/.test(location.hostname) || "file:" === location.protocol;
                if (!t.trackLocalhost && o) return console.warn("[Plausible] Ignoring event because website is running locally");
                try {
                    if ("true" === window.localStorage.plausible_ignore) return console.warn('[Plausible] Ignoring event because "plausible_ignore" is set to "true" in localStorage');
                } catch (e) {}
                const a = { n: e, u: t.url, d: t.domain, r: t.referrer, w: t.deviceWidth, h: t.hashMode ? 1 : 0, p: n && n.props ? JSON.stringify(n.props) : void 0 },
                    c = new XMLHttpRequest();
                c.open("POST", `${t.apiHost}/api/event`, !0),
                    c.setRequestHeader("Content-Type", "text/plain"),
                    c.send(JSON.stringify(a)),
                    (c.onreadystatechange = () => {
                        4 === c.readyState && n && n.callback && n.callback();
                    });
            })(t, { ...{ hashMode: !1, trackLocalhost: !1, url: location.href, domain: location.hostname, referrer: document.referrer || null, deviceWidth: window.innerWidth, apiHost: "https://plausible.io", ...e }, ...o }, n);
        },
        n = (e, n) => {
            t("pageview", n, e);
        };
    return {
        trackEvent: t,
        trackPageview: n,
        enableAutoPageviews: () => {
            const t = () => n(),
                o = history.pushState;
            return (
                o &&
                    ((history.pushState = function (e, n, a) {
                        o.apply(this, [e, n, a]), t();
                    }),
                    addEventListener("popstate", t)),
                e && e.hashMode && addEventListener("hashchange", t),
                n(),
                function () {
                    o && ((history.pushState = o), removeEventListener("popstate", t)), e && e.hashMode && removeEventListener("hashchange", t);
                }
            );
        },
        enableAutoOutboundTracking: (e = document, n = { subtree: !0, childList: !0, attributes: !0, attributeFilter: ["href"] }) => {
            function o(e) {
                t("Outbound Link: Click", { props: { url: this.href } }),
                    ("undefined" != typeof process && process && "test" === process.env.NODE_ENV) ||
                        setTimeout(() => {
                            location.href = this.href;
                        }, 150),
                    e.preventDefault();
            }
            const a = new Set();
            function c(e) {
                e instanceof HTMLAnchorElement ? e.host !== location.host && (e.addEventListener("click", o), a.add(e)) : "querySelectorAll" in e && e.querySelectorAll("a").forEach(c);
            }
            function i(e) {
                e instanceof HTMLAnchorElement ? (e.removeEventListener("click", o), a.delete(e)) : "querySelectorAll" in e && e.querySelectorAll("a").forEach(i);
            }
            const s = new MutationObserver((e) => {
                e.forEach((e) => {
                    "attributes" === e.type ? (i(e.target), c(e.target)) : "childList" === e.type && (e.addedNodes.forEach(c), e.removedNodes.forEach(i));
                });
            });
            return (
                e.querySelectorAll("a").forEach(c),
                s.observe(e, n),
                function () {
                    a.forEach((e) => {
                        e.removeEventListener("click", o);
                    }),
                        a.clear(),
                        s.disconnect();
                }
            );
        },
    };
}
async function le() {
    await ("requestIdleCallback" in window ? new Promise(requestIdleCallback) : new Promise((e) => setTimeout(e, 1))),
        (function () {
            const e = document.documentElement.dataset.iso,
                t = document.location.hostname.includes(".dev") ? "ptable.dev" : "ptable.com",
                { trackPageview: n } = re({ domain: t, hashMode: !1 });
            n({ url: `https://${t}/${e}` });
        })();
}
((e) => document.getElementById(e))("Share").addEventListener("click", se), "complete" === document.readyState ? le() : window.addEventListener("load", le);
function de() {
    return "requestIdleCallback" in window ? new Promise(requestIdleCallback) : new Promise((e) => setTimeout(e, 1));
}
function ue() {
    return new Promise(requestAnimationFrame);
}
function me(e) {
    if (!e) return;
    const t = Math.max(-1, e / [...this.textContent].length);
    this.style.letterSpacing = t * (1 / 12) + "em";
}
function he(e, t) {
    if (!e) return;
    const n = e / t;
    this.style.transform = `translateX(${(100 * n) / 2}%) scaleX(${1 + n})`;
}
async function pe(e) {
    const t = (e) => e.offsetWidth - e.scrollWidth;
    let n;
    await de(), (n = e.map((e) => t(e.children[2]))), await ue(), e.forEach((e, t) => me.call(e.children[2], n[t])), await de(), (n = e.map((e) => t(e.children[2])));
    const o = e.map((e) => e.children[2].scrollWidth);
    await ue(), e.forEach((e, t) => he.call(e.children[2], n[t], o[t]));
}
pe([...document.querySelectorAll("ol > li")]);
document.querySelector("#Notice").remove();
document.querySelector("footer").style.display = "none";
document.body.style.overflow = "hidden";
