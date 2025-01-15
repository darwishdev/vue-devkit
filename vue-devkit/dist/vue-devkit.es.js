var Xu = Object.defineProperty;
var Ia = (e) => {
  throw TypeError(e);
};
var Ju = (e, r, t) => r in e ? Xu(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var ao = (e, r, t) => Ju(e, typeof r != "symbol" ? r + "" : r, t), hi = (e, r, t) => r.has(e) || Ia("Cannot " + t);
var D = (e, r, t) => (hi(e, r, "read from private field"), t ? t.call(e) : r.get(e)), be = (e, r, t) => r.has(e) ? Ia("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), te = (e, r, t, o) => (hi(e, r, "write to private field"), o ? o.call(e, t) : r.set(e, t), t), je = (e, r, t) => (hi(e, r, "access private method"), t);
var so = (e, r, t, o) => ({
  set _(a) {
    te(e, r, a, t);
  },
  get _() {
    return D(e, r, o);
  }
});
import { ref as jr, readonly as ec, getCurrentInstance as rc, onMounted as tc, nextTick as Rs, watch as cn, reactive as nc, openBlock as fe, createElementBlock as xe, defineComponent as Es, inject as oc, useSlots as ic, computed as ac, h as sn, createBlock as wr, resolveDynamicComponent as Xr, mergeProps as le, createElementVNode as fr, resolveComponent as Fi, resolveDirective as sc, normalizeClass as _i, Fragment as Tt, renderList as Ds, withDirectives as Ci, createCommentVNode as Er, toDisplayString as qi, createVNode as Rt, Transition as js, withCtx as Ns, vShow as Ms, renderSlot as uc, unref as ln, isRef as Ls } from "vue";
import { Chip as cc, InputText as lc } from "primevue";
import { plugin as dc, defaultConfig as fc } from "@formkit/vue";
var hc = Object.defineProperty, Oa = Object.getOwnPropertySymbols, pc = Object.prototype.hasOwnProperty, mc = Object.prototype.propertyIsEnumerable, Ba = (e, r, t) => r in e ? hc(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, gc = (e, r) => {
  for (var t in r || (r = {}))
    pc.call(r, t) && Ba(e, t, r[t]);
  if (Oa)
    for (var t of Oa(r))
      mc.call(r, t) && Ba(e, t, r[t]);
  return e;
};
function et(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function xi(e, r, t = /* @__PURE__ */ new WeakSet()) {
  if (e === r) return !0;
  if (!e || !r || typeof e != "object" || typeof r != "object" || t.has(e) || t.has(r)) return !1;
  t.add(e).add(r);
  let o = Array.isArray(e), a = Array.isArray(r), u, f, d;
  if (o && a) {
    if (f = e.length, f != r.length) return !1;
    for (u = f; u-- !== 0; ) if (!xi(e[u], r[u], t)) return !1;
    return !0;
  }
  if (o != a) return !1;
  let p = e instanceof Date, y = r instanceof Date;
  if (p != y) return !1;
  if (p && y) return e.getTime() == r.getTime();
  let k = e instanceof RegExp, S = r instanceof RegExp;
  if (k != S) return !1;
  if (k && S) return e.toString() == r.toString();
  let $ = Object.keys(e);
  if (f = $.length, f !== Object.keys(r).length) return !1;
  for (u = f; u-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, $[u])) return !1;
  for (u = f; u-- !== 0; )
    if (d = $[u], !xi(e[d], r[d], t)) return !1;
  return !0;
}
function bc(e, r) {
  return xi(e, r);
}
function Vi(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function ne(e) {
  return !et(e);
}
function It(e, r, t) {
  return bc(e, r);
}
function $a(e, r) {
  let t;
  if (ne(e))
    try {
      t = e.findLast(r);
    } catch {
      t = [...e].reverse().find(r);
    }
  return t;
}
function _r(e, r = !0) {
  return e instanceof Object && e.constructor === Object && (r || Object.keys(e).length !== 0);
}
function Ve(e, ...r) {
  return Vi(e) ? e(...r) : e;
}
function We(e, r = !0) {
  return typeof e == "string" && (r || e !== "");
}
function cr(e) {
  return We(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function Hi(e, r = "", t = {}) {
  const o = cr(r).split("."), a = o.shift();
  return a ? _r(e) ? Hi(Ve(e[Object.keys(e).find((u) => cr(u) === a) || ""], t), o.join("."), t) : void 0 : Ve(e, t);
}
function wo(e, r = !0) {
  return Array.isArray(e) && (r || e.length !== 0);
}
function yc(e) {
  return ne(e) && !isNaN(e);
}
function vc(e = "") {
  return ne(e) && e.length === 1 && !!e.match(/\S| /);
}
function Dr(e, r) {
  if (r) {
    const t = r.test(e);
    return r.lastIndex = 0, t;
  }
  return !1;
}
function kc(...e) {
  const r = (t = {}, o = {}) => {
    const a = gc({}, t);
    return Object.keys(o).forEach((u) => {
      _r(o[u]) && u in t && _r(t[u]) ? a[u] = r(t[u], o[u]) : a[u] = o[u];
    }), a;
  };
  return e.reduce((t, o, a) => a === 0 ? o : r(t, o), {});
}
function pn(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function wc(e) {
  return We(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Ks(e) {
  return We(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (r, t) => t === 0 ? r : "-" + r.toLowerCase()).toLowerCase() : e;
}
function Aa(e) {
  return We(e) ? e.replace(/[A-Z]/g, (r, t) => t === 0 ? r : "." + r.toLowerCase()).toLowerCase() : e;
}
function Fs() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(r, t) {
      let o = e.get(r);
      return o ? o.push(t) : o = [t], e.set(r, o), this;
    },
    off(r, t) {
      let o = e.get(r);
      return o && o.splice(o.indexOf(t) >>> 0, 1), this;
    },
    emit(r, t) {
      let o = e.get(r);
      o && o.slice().map((a) => {
        a(t);
      });
    },
    clear() {
      e.clear();
    }
  };
}
var _c = Object.defineProperty, Cc = Object.defineProperties, xc = Object.getOwnPropertyDescriptors, mo = Object.getOwnPropertySymbols, qs = Object.prototype.hasOwnProperty, Vs = Object.prototype.propertyIsEnumerable, Ta = (e, r, t) => r in e ? _c(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, lr = (e, r) => {
  for (var t in r || (r = {}))
    qs.call(r, t) && Ta(e, t, r[t]);
  if (mo)
    for (var t of mo(r))
      Vs.call(r, t) && Ta(e, t, r[t]);
  return e;
}, pi = (e, r) => Cc(e, xc(r)), Ar = (e, r) => {
  var t = {};
  for (var o in e)
    qs.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && mo)
    for (var o of mo(e))
      r.indexOf(o) < 0 && Vs.call(e, o) && (t[o] = e[o]);
  return t;
}, Sc = Fs(), ur = Sc;
function Ra(e, r) {
  wo(e) ? e.push(...r || []) : _r(e) && Object.assign(e, r);
}
function Pc(e) {
  return _r(e) && e.hasOwnProperty("value") && e.hasOwnProperty("type") ? e.value : e;
}
function Ic(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Si(e = "", r = "") {
  return Ic(`${We(e, !1) && We(r, !1) ? `${e}-` : e}${r}`);
}
function Hs(e = "", r = "") {
  return `--${Si(e, r)}`;
}
function Oc(e = "") {
  const r = (e.match(/{/g) || []).length, t = (e.match(/}/g) || []).length;
  return (r + t) % 2 !== 0;
}
function zs(e, r = "", t = "", o = [], a) {
  if (We(e)) {
    const u = /{([^}]*)}/g, f = e.trim();
    if (Oc(f))
      return;
    if (Dr(f, u)) {
      const d = f.replaceAll(u, (k) => {
        const $ = k.replace(/{|}/g, "").split(".").filter((E) => !o.some((j) => Dr(E, j)));
        return `var(${Hs(t, Ks($.join("-")))}${ne(a) ? `, ${a}` : ""})`;
      }), p = /(\d+\s+[\+\-\*\/]\s+\d+)/g, y = /var\([^)]+\)/g;
      return Dr(d.replace(y, "0"), p) ? `calc(${d})` : d;
    }
    return f;
  } else if (yc(e))
    return e;
}
function Bc(e, r, t) {
  We(r, !1) && e.push(`${r}:${t};`);
}
function Bt(e, r) {
  return e ? `${e}{${r}}` : "";
}
var mn = (...e) => $c(ke.getTheme(), ...e), $c = (e = {}, r, t, o) => {
  if (r) {
    const { variable: a, options: u } = ke.defaults || {}, { prefix: f, transform: d } = (e == null ? void 0 : e.options) || u || {}, y = Dr(r, /{([^}]*)}/g) ? r : `{${r}}`;
    return o === "value" || et(o) && d === "strict" ? ke.getTokenValue(r) : zs(y, void 0, f, [a.excludedKeyRegex], t);
  }
  return "";
};
function Ac(e, r = {}) {
  const t = ke.defaults.variable, { prefix: o = t.prefix, selector: a = t.selector, excludedKeyRegex: u = t.excludedKeyRegex } = r, f = (y, k = "") => Object.entries(y).reduce(
    (S, [$, E]) => {
      const j = Dr($, u) ? Si(k) : Si(k, Ks($)), N = Pc(E);
      if (_r(N)) {
        const { variables: G, tokens: J } = f(N, j);
        Ra(S.tokens, J), Ra(S.variables, G);
      } else
        S.tokens.push((o ? j.replace(`${o}-`, "") : j).replaceAll("-", ".")), Bc(S.variables, Hs(j), zs(N, j, o, [u]));
      return S;
    },
    { variables: [], tokens: [] }
  ), { variables: d, tokens: p } = f(e, o);
  return {
    value: d,
    tokens: p,
    declarations: d.join(""),
    css: Bt(a, d.join(""))
  };
}
var or = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const r = Object.keys(this.rules).filter((t) => t !== "custom").map((t) => this.rules[t]);
      return [e].flat().map((t) => {
        var o;
        return (o = r.map((a) => a.resolve(t)).find((a) => a.matched)) != null ? o : this.rules.custom.resolve(t);
      });
    }
  },
  _toVariables(e, r) {
    return Ac(e, { prefix: r == null ? void 0 : r.prefix });
  },
  getCommon({ name: e = "", theme: r = {}, params: t, set: o, defaults: a }) {
    var u, f, d, p, y, k, S;
    const { preset: $, options: E } = r;
    let j, N, G, J, X, M, W;
    if (ne($) && E.transform !== "strict") {
      const { primitive: me, semantic: de, extend: we } = $, ye = de || {}, { colorScheme: $e } = ye, hr = Ar(ye, ["colorScheme"]), rr = we || {}, { colorScheme: Qe } = rr, Le = Ar(rr, ["colorScheme"]), pr = $e || {}, { dark: tr } = pr, mr = Ar(pr, ["dark"]), Cr = Qe || {}, { dark: He } = Cr, Ge = Ar(Cr, ["dark"]), Be = ne(me) ? this._toVariables({ primitive: me }, E) : {}, ze = ne(hr) ? this._toVariables({ semantic: hr }, E) : {}, xr = ne(mr) ? this._toVariables({ light: mr }, E) : {}, nr = ne(tr) ? this._toVariables({ dark: tr }, E) : {}, Sr = ne(Le) ? this._toVariables({ semantic: Le }, E) : {}, rt = ne(Ge) ? this._toVariables({ light: Ge }, E) : {}, Pr = ne(He) ? this._toVariables({ dark: He }, E) : {}, [Ut, Po] = [(u = Be.declarations) != null ? u : "", Be.tokens], [Z, An] = [(f = ze.declarations) != null ? f : "", ze.tokens || []], [vt, ve] = [(d = xr.declarations) != null ? d : "", xr.tokens || []], [tt, Io] = [(p = nr.declarations) != null ? p : "", nr.tokens || []], [Ir, Oo] = [(y = Sr.declarations) != null ? y : "", Sr.tokens || []], [Bo, $o] = [(k = rt.declarations) != null ? k : "", rt.tokens || []], [Ao, Wt] = [(S = Pr.declarations) != null ? S : "", Pr.tokens || []];
      j = this.transformCSS(e, Ut, "light", "variable", E, o, a), N = Po;
      const Xe = this.transformCSS(e, `${Z}${vt}`, "light", "variable", E, o, a), Tn = this.transformCSS(e, `${tt}`, "dark", "variable", E, o, a);
      G = `${Xe}${Tn}`, J = [.../* @__PURE__ */ new Set([...An, ...ve, ...Io])];
      const nt = this.transformCSS(e, `${Ir}${Bo}color-scheme:light`, "light", "variable", E, o, a), Rn = this.transformCSS(e, `${Ao}color-scheme:dark`, "dark", "variable", E, o, a);
      X = `${nt}${Rn}`, M = [.../* @__PURE__ */ new Set([...Oo, ...$o, ...Wt])], W = Ve($.css, { dt: mn });
    }
    return {
      primitive: {
        css: j,
        tokens: N
      },
      semantic: {
        css: G,
        tokens: J
      },
      global: {
        css: X,
        tokens: M
      },
      style: W
    };
  },
  getPreset({ name: e = "", preset: r = {}, options: t, params: o, set: a, defaults: u, selector: f }) {
    var d, p, y;
    let k, S, $;
    if (ne(r) && t.transform !== "strict") {
      const E = e.replace("-directive", ""), j = r, { colorScheme: N, extend: G, css: J } = j, X = Ar(j, ["colorScheme", "extend", "css"]), M = G || {}, { colorScheme: W } = M, me = Ar(M, ["colorScheme"]), de = N || {}, { dark: we } = de, ye = Ar(de, ["dark"]), $e = W || {}, { dark: hr } = $e, rr = Ar($e, ["dark"]), Qe = ne(X) ? this._toVariables({ [E]: lr(lr({}, X), me) }, t) : {}, Le = ne(ye) ? this._toVariables({ [E]: lr(lr({}, ye), rr) }, t) : {}, pr = ne(we) ? this._toVariables({ [E]: lr(lr({}, we), hr) }, t) : {}, [tr, mr] = [(d = Qe.declarations) != null ? d : "", Qe.tokens || []], [Cr, He] = [(p = Le.declarations) != null ? p : "", Le.tokens || []], [Ge, Be] = [(y = pr.declarations) != null ? y : "", pr.tokens || []], ze = this.transformCSS(E, `${tr}${Cr}`, "light", "variable", t, a, u, f), xr = this.transformCSS(E, Ge, "dark", "variable", t, a, u, f);
      k = `${ze}${xr}`, S = [.../* @__PURE__ */ new Set([...mr, ...He, ...Be])], $ = Ve(J, { dt: mn });
    }
    return {
      css: k,
      tokens: S,
      style: $
    };
  },
  getPresetC({ name: e = "", theme: r = {}, params: t, set: o, defaults: a }) {
    var u;
    const { preset: f, options: d } = r, p = (u = f == null ? void 0 : f.components) == null ? void 0 : u[e];
    return this.getPreset({ name: e, preset: p, options: d, params: t, set: o, defaults: a });
  },
  getPresetD({ name: e = "", theme: r = {}, params: t, set: o, defaults: a }) {
    var u;
    const f = e.replace("-directive", ""), { preset: d, options: p } = r, y = (u = d == null ? void 0 : d.directives) == null ? void 0 : u[f];
    return this.getPreset({ name: f, preset: y, options: p, params: t, set: o, defaults: a });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, r) {
    var t;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? r.options.darkModeSelector : (t = e.darkModeSelector) != null ? t : r.options.darkModeSelector) : [];
  },
  getLayerOrder(e, r = {}, t, o) {
    const { cssLayer: a } = r;
    return a ? `@layer ${Ve(a.order || "primeui", t)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: r = {}, params: t, props: o = {}, set: a, defaults: u }) {
    const f = this.getCommon({ name: e, theme: r, params: t, set: a, defaults: u }), d = Object.entries(o).reduce((p, [y, k]) => p.push(`${y}="${k}"`) && p, []).join(" ");
    return Object.entries(f || {}).reduce((p, [y, k]) => {
      if (k != null && k.css) {
        const S = pn(k == null ? void 0 : k.css), $ = `${y}-variables`;
        p.push(`<style type="text/css" data-primevue-style-id="${$}" ${d}>${S}</style>`);
      }
      return p;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: r = {}, params: t, props: o = {}, set: a, defaults: u }) {
    var f;
    const d = { name: e, theme: r, params: t, set: a, defaults: u }, p = (f = e.includes("-directive") ? this.getPresetD(d) : this.getPresetC(d)) == null ? void 0 : f.css, y = Object.entries(o).reduce((k, [S, $]) => k.push(`${S}="${$}"`) && k, []).join(" ");
    return p ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${y}>${pn(p)}</style>` : "";
  },
  createTokens(e = {}, r, t = "", o = "", a = {}) {
    return Object.entries(e).forEach(([u, f]) => {
      const d = Dr(u, r.variable.excludedKeyRegex) ? t : t ? `${t}.${Aa(u)}` : Aa(u), p = o ? `${o}.${u}` : u;
      _r(f) ? this.createTokens(f, r, d, p, a) : (a[d] || (a[d] = {
        paths: [],
        computed(y, k = {}) {
          var S, $;
          return this.paths.length === 1 ? (S = this.paths[0]) == null ? void 0 : S.computed(this.paths[0].scheme, k.binding) : y && y !== "none" ? ($ = this.paths.find((E) => E.scheme === y)) == null ? void 0 : $.computed(y, k.binding) : this.paths.map((E) => E.computed(E.scheme, k[E.scheme]));
        }
      }), a[d].paths.push({
        path: p,
        value: f,
        scheme: p.includes("colorScheme.light") ? "light" : p.includes("colorScheme.dark") ? "dark" : "none",
        computed(y, k = {}) {
          const S = /{([^}]*)}/g;
          let $ = f;
          if (k.name = this.path, k.binding || (k.binding = {}), Dr(f, S)) {
            const j = f.trim().replaceAll(S, (J) => {
              var X;
              const M = J.replace(/{|}/g, ""), W = (X = a[M]) == null ? void 0 : X.computed(y, k);
              return wo(W) && W.length === 2 ? `light-dark(${W[0].value},${W[1].value})` : W == null ? void 0 : W.value;
            }), N = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, G = /var\([^)]+\)/g;
            $ = Dr(j.replace(G, "0"), N) ? `calc(${j})` : j;
          }
          return et(k.binding) && delete k.binding, {
            colorScheme: y,
            path: this.path,
            paths: k,
            value: $.includes("undefined") ? void 0 : $
          };
        }
      }));
    }), a;
  },
  getTokenValue(e, r, t) {
    var o;
    const u = ((p) => p.split(".").filter((k) => !Dr(k.toLowerCase(), t.variable.excludedKeyRegex)).join("."))(r), f = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, d = [(o = e[u]) == null ? void 0 : o.computed(f)].flat().filter((p) => p);
    return d.length === 1 ? d[0].value : d.reduce((p = {}, y) => {
      const k = y, { colorScheme: S } = k, $ = Ar(k, ["colorScheme"]);
      return p[S] = $, p;
    }, void 0);
  },
  getSelectorRule(e, r, t, o) {
    return t === "class" || t === "attr" ? Bt(ne(r) ? `${e}${r},${e} ${r}` : e, o) : Bt(e, ne(r) ? Bt(r, o) : o);
  },
  transformCSS(e, r, t, o, a = {}, u, f, d) {
    if (ne(r)) {
      const { cssLayer: p } = a;
      if (o !== "style") {
        const y = this.getColorSchemeOption(a, f);
        r = t === "dark" ? y.reduce((k, { type: S, selector: $ }) => (ne($) && (k += $.includes("[CSS]") ? $.replace("[CSS]", r) : this.getSelectorRule($, d, S, r)), k), "") : Bt(d ?? ":root", r);
      }
      if (p) {
        const y = {
          name: "primeui",
          order: "primeui"
        };
        _r(p) && (y.name = Ve(p.name, { name: e, type: o })), ne(y.name) && (r = Bt(`@layer ${y.name}`, r), u == null || u.layerNames(y.name));
      }
      return r;
    }
    return "";
  }
}, ke = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(e = {}) {
    const { theme: r } = e;
    r && (this._theme = pi(lr({}, r), {
      options: lr(lr({}, this.defaults.options), r.options)
    }), this._tokens = or.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), ur.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = pi(lr({}, this.theme), { preset: e }), this._tokens = or.createTokens(e, this.defaults), this.clearLoadedStyleNames(), ur.emit("preset:change", e), ur.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = pi(lr({}, this.theme), { options: e }), this.clearLoadedStyleNames(), ur.emit("options:change", e), ur.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return or.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", r) {
    return or.getCommon({ name: e, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", r) {
    const t = { name: e, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return or.getPresetC(t);
  },
  getDirective(e = "", r) {
    const t = { name: e, theme: this.theme, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return or.getPresetD(t);
  },
  getCustomPreset(e = "", r, t, o) {
    const a = { name: e, preset: r, options: this.options, selector: t, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return or.getPreset(a);
  },
  getLayerOrderCSS(e = "") {
    return or.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", r, t = "style", o) {
    return or.transformCSS(e, r, o, t, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", r, t = {}) {
    return or.getCommonStyleSheet({ name: e, theme: this.theme, params: r, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, r, t = {}) {
    return or.getStyleSheet({ name: e, theme: this.theme, params: r, props: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: r }) {
    this._loadingStyles.size && (this._loadingStyles.delete(r), ur.emit(`theme:${r}:load`, e), !this._loadingStyles.size && ur.emit("theme:load"));
  }
};
function Tc(e, r) {
  return e ? e.classList ? e.classList.contains(r) : new RegExp("(^| )" + r + "( |$)", "gi").test(e.className) : !1;
}
function Rc(e, r) {
  if (e && r) {
    const t = (o) => {
      Tc(e, o) || (e.classList ? e.classList.add(o) : e.className += " " + o);
    };
    [r].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(t));
  }
}
function mi(e, r) {
  if (e && r) {
    const t = (o) => {
      e.classList ? e.classList.remove(o) : e.className = e.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [r].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(t));
  }
}
function Ec(e, r) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function _o(e) {
  return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
}
function go(e, r = {}) {
  if (_o(e)) {
    const t = (o, a) => {
      var u, f;
      const d = (u = e == null ? void 0 : e.$attrs) != null && u[o] ? [(f = e == null ? void 0 : e.$attrs) == null ? void 0 : f[o]] : [];
      return [a].flat().reduce((p, y) => {
        if (y != null) {
          const k = typeof y;
          if (k === "string" || k === "number")
            p.push(y);
          else if (k === "object") {
            const S = Array.isArray(y) ? t(o, y) : Object.entries(y).map(([$, E]) => o === "style" && (E || E === 0) ? `${$.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${E}` : E ? $ : void 0);
            p = S.length ? p.concat(S.filter(($) => !!$)) : p;
          }
        }
        return p;
      }, d);
    };
    Object.entries(r).forEach(([o, a]) => {
      if (a != null) {
        const u = o.match(/^on(.+)/);
        u ? e.addEventListener(u[1].toLowerCase(), a) : o === "p-bind" || o === "pBind" ? go(e, a) : (a = o === "class" ? [...new Set(t("class", a))].join(" ").trim() : o === "style" ? t("style", a).join(";").trim() : a, (e.$attrs = e.$attrs || {}) && (e.$attrs[o] = a), e.setAttribute(o, a));
      }
    });
  }
}
function Dc(e, r = {}, ...t) {
  {
    const o = document.createElement(e);
    return go(o, r), o.append(...t), o;
  }
}
function dr(e, r) {
  return _o(e) ? e.matches(r) ? e : e.querySelector(r) : null;
}
function dn(e, r) {
  e && document.activeElement !== e && e.focus(r);
}
function fn(e, r) {
  if (_o(e)) {
    const t = e.getAttribute(r);
    return isNaN(t) ? t === "true" || t === "false" ? t === "true" : t : +t;
  }
}
function Ea(e) {
  if (e) {
    let r = e.offsetHeight, t = getComputedStyle(e);
    return r -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom) + parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), r;
  }
  return 0;
}
function jc(e) {
  if (e) {
    let r = e.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function Nc(e) {
  if (e) {
    let r = e.getBoundingClientRect();
    return {
      top: r.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: r.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Mc(e, r) {
  return e ? e.offsetHeight : 0;
}
function Lc(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && jc(e));
}
function Da(e) {
  if (e) {
    let r = e.offsetWidth, t = getComputedStyle(e);
    return r -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight) + parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth), r;
  }
  return 0;
}
function Us() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Kc(e, r = "", t) {
  _o(e) && t !== null && t !== void 0 && e.setAttribute(r, t);
}
var uo = {};
function zi(e = "pui_id_") {
  return uo.hasOwnProperty(e) || (uo[e] = 0), uo[e]++, `${e}${uo[e]}`;
}
var Ne = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
function gn(e) {
  "@babel/helpers - typeof";
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, gn(e);
}
function ja(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Na(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ja(Object(t), !0).forEach(function(o) {
      Fc(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ja(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Fc(e, r, t) {
  return (r = qc(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function qc(e) {
  var r = Vc(e, "string");
  return gn(r) == "symbol" ? r : r + "";
}
function Vc(e, r) {
  if (gn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (gn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Hc(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  rc() ? tc(e) : r ? e() : Rs(e);
}
var zc = 0;
function Uc(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = jr(!1), o = jr(e), a = jr(null), u = Us() ? window.document : void 0, f = r.document, d = f === void 0 ? u : f, p = r.immediate, y = p === void 0 ? !0 : p, k = r.manual, S = k === void 0 ? !1 : k, $ = r.name, E = $ === void 0 ? "style_".concat(++zc) : $, j = r.id, N = j === void 0 ? void 0 : j, G = r.media, J = G === void 0 ? void 0 : G, X = r.nonce, M = X === void 0 ? void 0 : X, W = r.first, me = W === void 0 ? !1 : W, de = r.onMounted, we = de === void 0 ? void 0 : de, ye = r.onUpdated, $e = ye === void 0 ? void 0 : ye, hr = r.onLoad, rr = hr === void 0 ? void 0 : hr, Qe = r.props, Le = Qe === void 0 ? {} : Qe, pr = function() {
  }, tr = function(He) {
    var Ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (d) {
      var Be = Na(Na({}, Le), Ge), ze = Be.name || E, xr = Be.id || N, nr = Be.nonce || M;
      a.value = d.querySelector('style[data-primevue-style-id="'.concat(ze, '"]')) || d.getElementById(xr) || d.createElement("style"), a.value.isConnected || (o.value = He || e, go(a.value, {
        type: "text/css",
        id: xr,
        media: J,
        nonce: nr
      }), me ? d.head.prepend(a.value) : d.head.appendChild(a.value), Kc(a.value, "data-primevue-style-id", ze), go(a.value, Be), a.value.onload = function(Sr) {
        return rr == null ? void 0 : rr(Sr, {
          name: ze
        });
      }, we == null || we(ze)), !t.value && (pr = cn(o, function(Sr) {
        a.value.textContent = Sr, $e == null || $e(ze);
      }, {
        immediate: !0
      }), t.value = !0);
    }
  }, mr = function() {
    !d || !t.value || (pr(), Lc(a.value) && d.head.removeChild(a.value), t.value = !1);
  };
  return y && !S && Hc(tr), {
    id: N,
    name: E,
    el: a,
    css: o,
    unload: mr,
    load: tr,
    isLoaded: ec(t)
  };
}
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, bn(e);
}
function Ma(e, r) {
  return Yc(e) || Gc(e, r) || Qc(e, r) || Wc();
}
function Wc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qc(e, r) {
  if (e) {
    if (typeof e == "string") return La(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? La(e, r) : void 0;
  }
}
function La(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function Gc(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, a, u, f, d = [], p = !0, y = !1;
    try {
      if (u = (t = t.call(e)).next, r !== 0) for (; !(p = (o = u.call(t)).done) && (d.push(o.value), d.length !== r); p = !0) ;
    } catch (k) {
      y = !0, a = k;
    } finally {
      try {
        if (!p && t.return != null && (f = t.return(), Object(f) !== f)) return;
      } finally {
        if (y) throw a;
      }
    }
    return d;
  }
}
function Yc(e) {
  if (Array.isArray(e)) return e;
}
function Ka(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function gi(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ka(Object(t), !0).forEach(function(o) {
      Zc(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ka(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Zc(e, r, t) {
  return (r = Xc(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Xc(e) {
  var r = Jc(e, "string");
  return bn(r) == "symbol" ? r : r + "";
}
function Jc(e, r) {
  if (bn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (bn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var el = function(r) {
  var t = r.dt;
  return `
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(t("disabled.opacity"), `;
}

.pi {
    font-size: `).concat(t("icon.size"), `;
}

.p-icon {
    width: `).concat(t("icon.size"), `;
    height: `).concat(t("icon.size"), `;
}

.p-overlay-mask {
    background: `).concat(t("mask.background"), `;
    color: `).concat(t("mask.color"), `;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(t("mask.transition.duration"), ` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(t("mask.transition.duration"), ` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(t("mask.background"), `;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(t("mask.background"), `;
    }
    to {
        background: transparent;
    }
}
`);
}, rl = function(r) {
  var t = r.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(t("scrollbar.width"), `;
}
`);
}, tl = {}, nl = {}, Se = {
  name: "base",
  css: rl,
  theme: el,
  classes: tl,
  inlineStyles: nl,
  load: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(u) {
      return u;
    }, a = o(Ve(r, {
      dt: mn
    }));
    return ne(a) ? Uc(pn(a), gi({
      name: this.name
    }, t)) : {};
  },
  loadCSS: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, r);
  },
  loadTheme: function() {
    var r = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.theme, t, function() {
      var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return ke.transformCSS(t.name || r.name, "".concat(a).concat(o));
    });
  },
  getCommonTheme: function(r) {
    return ke.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return ke.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return ke.getDirective(this.name, r);
  },
  getPresetTheme: function(r, t, o) {
    return ke.getCustomPreset(this.name, r, t, o);
  },
  getLayerOrderThemeCSS: function() {
    return ke.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var o = Ve(this.css, {
        dt: mn
      }) || "", a = pn("".concat(o).concat(r)), u = Object.entries(t).reduce(function(f, d) {
        var p = Ma(d, 2), y = p[0], k = p[1];
        return f.push("".concat(y, '="').concat(k, '"')) && f;
      }, []).join(" ");
      return ne(a) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(u, ">").concat(a, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ke.getCommonStyleSheet(this.name, r, t);
  },
  getThemeStyleSheet: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [ke.getStyleSheet(this.name, r, t)];
    if (this.theme) {
      var a = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), u = Ve(this.theme, {
        dt: mn
      }), f = pn(ke.transformCSS(a, u)), d = Object.entries(t).reduce(function(p, y) {
        var k = Ma(y, 2), S = k[0], $ = k[1];
        return p.push("".concat(S, '="').concat($, '"')) && p;
      }, []).join(" ");
      ne(f) && o.push('<style type="text/css" data-primevue-style-id="'.concat(a, '" ').concat(d, ">").concat(f, "</style>"));
    }
    return o.join("");
  },
  extend: function(r) {
    return gi(gi({}, this), {}, {
      css: void 0,
      theme: void 0
    }, r);
  }
}, $t = Fs();
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, yn(e);
}
function Fa(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function co(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Fa(Object(t), !0).forEach(function(o) {
      ol(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Fa(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function ol(e, r, t) {
  return (r = il(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function il(e) {
  var r = al(e, "string");
  return yn(r) == "symbol" ? r : r + "";
}
function al(e, r) {
  if (yn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (yn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var sl = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [Ne.STARTS_WITH, Ne.CONTAINS, Ne.NOT_CONTAINS, Ne.ENDS_WITH, Ne.EQUALS, Ne.NOT_EQUALS],
    numeric: [Ne.EQUALS, Ne.NOT_EQUALS, Ne.LESS_THAN, Ne.LESS_THAN_OR_EQUAL_TO, Ne.GREATER_THAN, Ne.GREATER_THAN_OR_EQUAL_TO],
    date: [Ne.DATE_IS, Ne.DATE_IS_NOT, Ne.DATE_BEFORE, Ne.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, ul = Symbol();
function cl(e, r) {
  var t = {
    config: nc(r)
  };
  return e.config.globalProperties.$primevue = t, e.provide(ul, t), ll(), dl(e, t), t;
}
var At = [];
function ll() {
  ur.clear(), At.forEach(function(e) {
    return e == null ? void 0 : e();
  }), At = [];
}
function dl(e, r) {
  var t = jr(!1), o = function() {
    var y;
    if (((y = r.config) === null || y === void 0 ? void 0 : y.theme) !== "none" && !ke.isStyleNameLoaded("common")) {
      var k, S, $ = ((k = Se.getCommonTheme) === null || k === void 0 ? void 0 : k.call(Se)) || {}, E = $.primitive, j = $.semantic, N = $.global, G = $.style, J = {
        nonce: (S = r.config) === null || S === void 0 || (S = S.csp) === null || S === void 0 ? void 0 : S.nonce
      };
      Se.load(E == null ? void 0 : E.css, co({
        name: "primitive-variables"
      }, J)), Se.load(j == null ? void 0 : j.css, co({
        name: "semantic-variables"
      }, J)), Se.load(N == null ? void 0 : N.css, co({
        name: "global-variables"
      }, J)), Se.loadTheme(co({
        name: "global-style"
      }, J), G), ke.setLoadedStyleName("common");
    }
  };
  ur.on("theme:change", function(p) {
    t.value || (e.config.globalProperties.$primevue.config.theme = p, t.value = !0);
  });
  var a = cn(r.config, function(p, y) {
    $t.emit("config:change", {
      newValue: p,
      oldValue: y
    });
  }, {
    immediate: !0,
    deep: !0
  }), u = cn(function() {
    return r.config.ripple;
  }, function(p, y) {
    $t.emit("config:ripple:change", {
      newValue: p,
      oldValue: y
    });
  }, {
    immediate: !0,
    deep: !0
  }), f = cn(function() {
    return r.config.theme;
  }, function(p, y) {
    t.value || ke.setTheme(p), r.config.unstyled || o(), t.value = !1, $t.emit("config:theme:change", {
      newValue: p,
      oldValue: y
    });
  }, {
    immediate: !0,
    deep: !1
  }), d = cn(function() {
    return r.config.unstyled;
  }, function(p, y) {
    !p && r.config.theme && o(), $t.emit("config:unstyled:change", {
      newValue: p,
      oldValue: y
    });
  }, {
    immediate: !0,
    deep: !0
  });
  At.push(a), At.push(u), At.push(f), At.push(d);
}
var fl = {
  install: function(r, t) {
    var o = kc(sl, t);
    cl(r, o);
  }
};
const zt = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of r)
    t[o] = a;
  return t;
}, hl = {};
function pl(e, r) {
  return fe(), xe("h2", null, "app btn");
}
const tg = /* @__PURE__ */ zt(hl, [["render", pl]]);
var ml = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fo = { exports: {} }, bl = fo.exports, qa;
function yl() {
  return qa || (qa = 1, function(e, r) {
    (function(t, o) {
      e.exports = o();
    })(bl, function() {
      var t = function(n, i) {
        return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
          s.__proto__ = c;
        } || function(s, c) {
          for (var l in c) Object.prototype.hasOwnProperty.call(c, l) && (s[l] = c[l]);
        })(n, i);
      }, o = function() {
        return (o = Object.assign || function(n) {
          for (var i, s = 1, c = arguments.length; s < c; s++) for (var l in i = arguments[s]) Object.prototype.hasOwnProperty.call(i, l) && (n[l] = i[l]);
          return n;
        }).apply(this, arguments);
      };
      function a(n, i, s) {
        for (var c, l = 0, h = i.length; l < h; l++) !c && l in i || ((c = c || Array.prototype.slice.call(i, 0, l))[l] = i[l]);
        return n.concat(c || Array.prototype.slice.call(i));
      }
      var u = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ml, f = Object.keys, d = Array.isArray;
      function p(n, i) {
        return typeof i != "object" || f(i).forEach(function(s) {
          n[s] = i[s];
        }), n;
      }
      typeof Promise > "u" || u.Promise || (u.Promise = Promise);
      var y = Object.getPrototypeOf, k = {}.hasOwnProperty;
      function S(n, i) {
        return k.call(n, i);
      }
      function $(n, i) {
        typeof i == "function" && (i = i(y(n))), (typeof Reflect > "u" ? f : Reflect.ownKeys)(i).forEach(function(s) {
          j(n, s, i[s]);
        });
      }
      var E = Object.defineProperty;
      function j(n, i, s, c) {
        E(n, i, p(s && S(s, "get") && typeof s.get == "function" ? { get: s.get, set: s.set, configurable: !0 } : { value: s, configurable: !0, writable: !0 }, c));
      }
      function N(n) {
        return { from: function(i) {
          return n.prototype = Object.create(i.prototype), j(n.prototype, "constructor", n), { extend: $.bind(null, n.prototype) };
        } };
      }
      var G = Object.getOwnPropertyDescriptor, J = [].slice;
      function X(n, i, s) {
        return J.call(n, i, s);
      }
      function M(n, i) {
        return i(n);
      }
      function W(n) {
        if (!n) throw new Error("Assertion Failed");
      }
      function me(n) {
        u.setImmediate ? setImmediate(n) : setTimeout(n, 0);
      }
      function de(n, i) {
        if (typeof i == "string" && S(n, i)) return n[i];
        if (!i) return n;
        if (typeof i != "string") {
          for (var s = [], c = 0, l = i.length; c < l; ++c) {
            var h = de(n, i[c]);
            s.push(h);
          }
          return s;
        }
        var m = i.indexOf(".");
        if (m !== -1) {
          var g = n[i.substr(0, m)];
          return g == null ? void 0 : de(g, i.substr(m + 1));
        }
      }
      function we(n, i, s) {
        if (n && i !== void 0 && !("isFrozen" in Object && Object.isFrozen(n))) if (typeof i != "string" && "length" in i) {
          W(typeof s != "string" && "length" in s);
          for (var c = 0, l = i.length; c < l; ++c) we(n, i[c], s[c]);
        } else {
          var h, m, g = i.indexOf(".");
          g !== -1 ? (h = i.substr(0, g), (m = i.substr(g + 1)) === "" ? s === void 0 ? d(n) && !isNaN(parseInt(h)) ? n.splice(h, 1) : delete n[h] : n[h] = s : we(g = !(g = n[h]) || !S(n, h) ? n[h] = {} : g, m, s)) : s === void 0 ? d(n) && !isNaN(parseInt(i)) ? n.splice(i, 1) : delete n[i] : n[i] = s;
        }
      }
      function ye(n) {
        var i, s = {};
        for (i in n) S(n, i) && (s[i] = n[i]);
        return s;
      }
      var $e = [].concat;
      function hr(n) {
        return $e.apply([], n);
      }
      var Br = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(hr([8, 16, 32, 64].map(function(n) {
        return ["Int", "Uint", "Float"].map(function(i) {
          return i + n + "Array";
        });
      }))).filter(function(n) {
        return u[n];
      }), rr = new Set(Br.map(function(n) {
        return u[n];
      })), Qe = null;
      function Le(n) {
        return Qe = /* @__PURE__ */ new WeakMap(), n = function i(s) {
          if (!s || typeof s != "object") return s;
          var c = Qe.get(s);
          if (c) return c;
          if (d(s)) {
            c = [], Qe.set(s, c);
            for (var l = 0, h = s.length; l < h; ++l) c.push(i(s[l]));
          } else if (rr.has(s.constructor)) c = s;
          else {
            var m, g = y(s);
            for (m in c = g === Object.prototype ? {} : Object.create(g), Qe.set(s, c), s) S(s, m) && (c[m] = i(s[m]));
          }
          return c;
        }(n), Qe = null, n;
      }
      var pr = {}.toString;
      function tr(n) {
        return pr.call(n).slice(8, -1);
      }
      var mr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Cr = typeof mr == "symbol" ? function(n) {
        var i;
        return n != null && (i = n[mr]) && i.apply(n);
      } : function() {
        return null;
      };
      function He(n, i) {
        return i = n.indexOf(i), 0 <= i && n.splice(i, 1), 0 <= i;
      }
      var Ge = {};
      function Be(n) {
        var i, s, c, l;
        if (arguments.length === 1) {
          if (d(n)) return n.slice();
          if (this === Ge && typeof n == "string") return [n];
          if (l = Cr(n)) {
            for (s = []; !(c = l.next()).done; ) s.push(c.value);
            return s;
          }
          if (n == null) return [n];
          if (typeof (i = n.length) != "number") return [n];
          for (s = new Array(i); i--; ) s[i] = n[i];
          return s;
        }
        for (i = arguments.length, s = new Array(i); i--; ) s[i] = arguments[i];
        return s;
      }
      var ze = typeof Symbol < "u" ? function(n) {
        return n[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Qt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Je = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Qt), xr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function nr(n, i) {
        this.name = n, this.message = i;
      }
      function Sr(n, i) {
        return n + ". Errors: " + Object.keys(i).map(function(s) {
          return i[s].toString();
        }).filter(function(s, c, l) {
          return l.indexOf(s) === c;
        }).join(`
`);
      }
      function rt(n, i, s, c) {
        this.failures = i, this.failedKeys = c, this.successCount = s, this.message = Sr(n, i);
      }
      function Pr(n, i) {
        this.name = "BulkError", this.failures = Object.keys(i).map(function(s) {
          return i[s];
        }), this.failuresByPos = i, this.message = Sr(n, this.failures);
      }
      N(nr).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), N(rt).from(nr), N(Pr).from(nr);
      var Ut = Je.reduce(function(n, i) {
        return n[i] = i + "Error", n;
      }, {}), Po = nr, Z = Je.reduce(function(n, i) {
        var s = i + "Error";
        function c(l, h) {
          this.name = s, l ? typeof l == "string" ? (this.message = "".concat(l).concat(h ? `
 ` + h : ""), this.inner = h || null) : typeof l == "object" && (this.message = "".concat(l.name, " ").concat(l.message), this.inner = l) : (this.message = xr[i] || s, this.inner = null);
        }
        return N(c).from(Po), n[i] = c, n;
      }, {});
      Z.Syntax = SyntaxError, Z.Type = TypeError, Z.Range = RangeError;
      var An = Qt.reduce(function(n, i) {
        return n[i + "Error"] = Z[i], n;
      }, {}), vt = Je.reduce(function(n, i) {
        return ["Syntax", "Type", "Range"].indexOf(i) === -1 && (n[i + "Error"] = Z[i]), n;
      }, {});
      function ve() {
      }
      function tt(n) {
        return n;
      }
      function Io(n, i) {
        return n == null || n === tt ? i : function(s) {
          return i(n(s));
        };
      }
      function Ir(n, i) {
        return function() {
          n.apply(this, arguments), i.apply(this, arguments);
        };
      }
      function Oo(n, i) {
        return n === ve ? i : function() {
          var s = n.apply(this, arguments);
          s !== void 0 && (arguments[0] = s);
          var c = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var h = i.apply(this, arguments);
          return c && (this.onsuccess = this.onsuccess ? Ir(c, this.onsuccess) : c), l && (this.onerror = this.onerror ? Ir(l, this.onerror) : l), h !== void 0 ? h : s;
        };
      }
      function Bo(n, i) {
        return n === ve ? i : function() {
          n.apply(this, arguments);
          var s = this.onsuccess, c = this.onerror;
          this.onsuccess = this.onerror = null, i.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? Ir(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? Ir(c, this.onerror) : c);
        };
      }
      function $o(n, i) {
        return n === ve ? i : function(s) {
          var c = n.apply(this, arguments);
          p(s, c);
          var l = this.onsuccess, h = this.onerror;
          return this.onsuccess = null, this.onerror = null, s = i.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? Ir(l, this.onsuccess) : l), h && (this.onerror = this.onerror ? Ir(h, this.onerror) : h), c === void 0 ? s === void 0 ? void 0 : s : p(c, s);
        };
      }
      function Ao(n, i) {
        return n === ve ? i : function() {
          return i.apply(this, arguments) !== !1 && n.apply(this, arguments);
        };
      }
      function Wt(n, i) {
        return n === ve ? i : function() {
          var s = n.apply(this, arguments);
          if (s && typeof s.then == "function") {
            for (var c = this, l = arguments.length, h = new Array(l); l--; ) h[l] = arguments[l];
            return s.then(function() {
              return i.apply(c, h);
            });
          }
          return i.apply(this, arguments);
        };
      }
      vt.ModifyError = rt, vt.DexieError = nr, vt.BulkError = Pr;
      var Xe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Tn(n) {
        Xe = n;
      }
      var nt = {}, Rn = 100, Br = typeof Promise > "u" ? [] : function() {
        var n = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [n, y(n), n];
        var i = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [i, y(i), n];
      }(), Qt = Br[0], Je = Br[1], Br = Br[2], Je = Je && Je.then, ot = Qt && Qt.constructor, To = !!Br, Gt = function(n, i) {
        Yt.push([n, i]), En && (queueMicrotask(Ou), En = !1);
      }, Ro = !0, En = !0, it = [], Dn = [], Eo = tt, Nr = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: ve, pgp: !1, env: {}, finalize: ve }, Y = Nr, Yt = [], at = 0, jn = [];
      function z(n) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var i = this._PSD = Y;
        if (typeof n != "function") {
          if (n !== nt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && jo(this, this._value));
        }
        this._state = null, this._value = null, ++i.ref, function s(c, l) {
          try {
            l(function(h) {
              if (c._state === null) {
                if (h === c) throw new TypeError("A promise cannot be resolved with itself.");
                var m = c._lib && kt();
                h && typeof h.then == "function" ? s(c, function(g, v) {
                  h instanceof z ? h._then(g, v) : h.then(g, v);
                }) : (c._state = !0, c._value = h, Zi(c)), m && wt();
              }
            }, jo.bind(null, c));
          } catch (h) {
            jo(c, h);
          }
        }(this, n);
      }
      var Do = { get: function() {
        var n = Y, i = Kn;
        function s(c, l) {
          var h = this, m = !n.global && (n !== Y || i !== Kn), g = m && !Lr(), v = new z(function(_, P) {
            No(h, new Yi(Ji(c, n, m, g), Ji(l, n, m, g), _, P, n));
          });
          return this._consoleTask && (v._consoleTask = this._consoleTask), v;
        }
        return s.prototype = nt, s;
      }, set: function(n) {
        j(this, "then", n && n.prototype === nt ? Do : { get: function() {
          return n;
        }, set: Do.set });
      } };
      function Yi(n, i, s, c, l) {
        this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof i == "function" ? i : null, this.resolve = s, this.reject = c, this.psd = l;
      }
      function jo(n, i) {
        var s, c;
        Dn.push(i), n._state === null && (s = n._lib && kt(), i = Eo(i), n._state = !1, n._value = i, c = n, it.some(function(l) {
          return l._value === c._value;
        }) || it.push(c), Zi(n), s && wt());
      }
      function Zi(n) {
        var i = n._listeners;
        n._listeners = [];
        for (var s = 0, c = i.length; s < c; ++s) No(n, i[s]);
        var l = n._PSD;
        --l.ref || l.finalize(), at === 0 && (++at, Gt(function() {
          --at == 0 && Mo();
        }, []));
      }
      function No(n, i) {
        if (n._state !== null) {
          var s = n._state ? i.onFulfilled : i.onRejected;
          if (s === null) return (n._state ? i.resolve : i.reject)(n._value);
          ++i.psd.ref, ++at, Gt(Iu, [s, n, i]);
        } else n._listeners.push(i);
      }
      function Iu(n, i, s) {
        try {
          var c, l = i._value;
          !i._state && Dn.length && (Dn = []), c = Xe && i._consoleTask ? i._consoleTask.run(function() {
            return n(l);
          }) : n(l), i._state || Dn.indexOf(l) !== -1 || function(h) {
            for (var m = it.length; m; ) if (it[--m]._value === h._value) return it.splice(m, 1);
          }(i), s.resolve(c);
        } catch (h) {
          s.reject(h);
        } finally {
          --at == 0 && Mo(), --s.psd.ref || s.psd.finalize();
        }
      }
      function Ou() {
        st(Nr, function() {
          kt() && wt();
        });
      }
      function kt() {
        var n = Ro;
        return En = Ro = !1, n;
      }
      function wt() {
        var n, i, s;
        do
          for (; 0 < Yt.length; ) for (n = Yt, Yt = [], s = n.length, i = 0; i < s; ++i) {
            var c = n[i];
            c[0].apply(null, c[1]);
          }
        while (0 < Yt.length);
        En = Ro = !0;
      }
      function Mo() {
        var n = it;
        it = [], n.forEach(function(c) {
          c._PSD.onunhandled.call(null, c._value, c);
        });
        for (var i = jn.slice(0), s = i.length; s; ) i[--s]();
      }
      function Nn(n) {
        return new z(nt, !1, n);
      }
      function Ce(n, i) {
        var s = Y;
        return function() {
          var c = kt(), l = Y;
          try {
            return Kr(s, !0), n.apply(this, arguments);
          } catch (h) {
            i && i(h);
          } finally {
            Kr(l, !1), c && wt();
          }
        };
      }
      $(z.prototype, { then: Do, _then: function(n, i) {
        No(this, new Yi(null, null, n, i, Y));
      }, catch: function(n) {
        if (arguments.length === 1) return this.then(null, n);
        var i = n, s = arguments[1];
        return typeof i == "function" ? this.then(null, function(c) {
          return (c instanceof i ? s : Nn)(c);
        }) : this.then(null, function(c) {
          return (c && c.name === i ? s : Nn)(c);
        });
      }, finally: function(n) {
        return this.then(function(i) {
          return z.resolve(n()).then(function() {
            return i;
          });
        }, function(i) {
          return z.resolve(n()).then(function() {
            return Nn(i);
          });
        });
      }, timeout: function(n, i) {
        var s = this;
        return n < 1 / 0 ? new z(function(c, l) {
          var h = setTimeout(function() {
            return l(new Z.Timeout(i));
          }, n);
          s.then(c, l).finally(clearTimeout.bind(null, h));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && j(z.prototype, Symbol.toStringTag, "Dexie.Promise"), Nr.env = Xi(), $(z, { all: function() {
        var n = Be.apply(null, arguments).map(Fn);
        return new z(function(i, s) {
          n.length === 0 && i([]);
          var c = n.length;
          n.forEach(function(l, h) {
            return z.resolve(l).then(function(m) {
              n[h] = m, --c || i(n);
            }, s);
          });
        });
      }, resolve: function(n) {
        return n instanceof z ? n : n && typeof n.then == "function" ? new z(function(i, s) {
          n.then(i, s);
        }) : new z(nt, !0, n);
      }, reject: Nn, race: function() {
        var n = Be.apply(null, arguments).map(Fn);
        return new z(function(i, s) {
          n.map(function(c) {
            return z.resolve(c).then(i, s);
          });
        });
      }, PSD: { get: function() {
        return Y;
      }, set: function(n) {
        return Y = n;
      } }, totalEchoes: { get: function() {
        return Kn;
      } }, newPSD: Mr, usePSD: st, scheduler: { get: function() {
        return Gt;
      }, set: function(n) {
        Gt = n;
      } }, rejectionMapper: { get: function() {
        return Eo;
      }, set: function(n) {
        Eo = n;
      } }, follow: function(n, i) {
        return new z(function(s, c) {
          return Mr(function(l, h) {
            var m = Y;
            m.unhandleds = [], m.onunhandled = h, m.finalize = Ir(function() {
              var g, v = this;
              g = function() {
                v.unhandleds.length === 0 ? l() : h(v.unhandleds[0]);
              }, jn.push(function _() {
                g(), jn.splice(jn.indexOf(_), 1);
              }), ++at, Gt(function() {
                --at == 0 && Mo();
              }, []);
            }, m.finalize), n();
          }, i, s, c);
        });
      } }), ot && (ot.allSettled && j(z, "allSettled", function() {
        var n = Be.apply(null, arguments).map(Fn);
        return new z(function(i) {
          n.length === 0 && i([]);
          var s = n.length, c = new Array(s);
          n.forEach(function(l, h) {
            return z.resolve(l).then(function(m) {
              return c[h] = { status: "fulfilled", value: m };
            }, function(m) {
              return c[h] = { status: "rejected", reason: m };
            }).then(function() {
              return --s || i(c);
            });
          });
        });
      }), ot.any && typeof AggregateError < "u" && j(z, "any", function() {
        var n = Be.apply(null, arguments).map(Fn);
        return new z(function(i, s) {
          n.length === 0 && s(new AggregateError([]));
          var c = n.length, l = new Array(c);
          n.forEach(function(h, m) {
            return z.resolve(h).then(function(g) {
              return i(g);
            }, function(g) {
              l[m] = g, --c || s(new AggregateError(l));
            });
          });
        });
      }), ot.withResolvers && (z.withResolvers = ot.withResolvers));
      var Ae = { awaits: 0, echoes: 0, id: 0 }, Bu = 0, Mn = [], Ln = 0, Kn = 0, $u = 0;
      function Mr(n, i, s, c) {
        var l = Y, h = Object.create(l);
        return h.parent = l, h.ref = 0, h.global = !1, h.id = ++$u, Nr.env, h.env = To ? { Promise: z, PromiseProp: { value: z, configurable: !0, writable: !0 }, all: z.all, race: z.race, allSettled: z.allSettled, any: z.any, resolve: z.resolve, reject: z.reject } : {}, i && p(h, i), ++l.ref, h.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, c = st(h, n, s, c), h.ref === 0 && h.finalize(), c;
      }
      function _t() {
        return Ae.id || (Ae.id = ++Bu), ++Ae.awaits, Ae.echoes += Rn, Ae.id;
      }
      function Lr() {
        return !!Ae.awaits && (--Ae.awaits == 0 && (Ae.id = 0), Ae.echoes = Ae.awaits * Rn, !0);
      }
      function Fn(n) {
        return Ae.echoes && n && n.constructor === ot ? (_t(), n.then(function(i) {
          return Lr(), i;
        }, function(i) {
          return Lr(), Ie(i);
        })) : n;
      }
      function Au() {
        var n = Mn[Mn.length - 1];
        Mn.pop(), Kr(n, !1);
      }
      function Kr(n, i) {
        var s, c = Y;
        (i ? !Ae.echoes || Ln++ && n === Y : !Ln || --Ln && n === Y) || queueMicrotask(i ? (function(l) {
          ++Kn, Ae.echoes && --Ae.echoes != 0 || (Ae.echoes = Ae.awaits = Ae.id = 0), Mn.push(Y), Kr(l, !0);
        }).bind(null, n) : Au), n !== Y && (Y = n, c === Nr && (Nr.env = Xi()), To && (s = Nr.env.Promise, i = n.env, (c.global || n.global) && (Object.defineProperty(u, "Promise", i.PromiseProp), s.all = i.all, s.race = i.race, s.resolve = i.resolve, s.reject = i.reject, i.allSettled && (s.allSettled = i.allSettled), i.any && (s.any = i.any))));
      }
      function Xi() {
        var n = u.Promise;
        return To ? { Promise: n, PromiseProp: Object.getOwnPropertyDescriptor(u, "Promise"), all: n.all, race: n.race, allSettled: n.allSettled, any: n.any, resolve: n.resolve, reject: n.reject } : {};
      }
      function st(n, i, s, c, l) {
        var h = Y;
        try {
          return Kr(n, !0), i(s, c, l);
        } finally {
          Kr(h, !1);
        }
      }
      function Ji(n, i, s, c) {
        return typeof n != "function" ? n : function() {
          var l = Y;
          s && _t(), Kr(i, !0);
          try {
            return n.apply(this, arguments);
          } finally {
            Kr(l, !1), c && queueMicrotask(Lr);
          }
        };
      }
      function Lo(n) {
        Promise === ot && Ae.echoes === 0 ? Ln === 0 ? n() : enqueueNativeMicroTask(n) : setTimeout(n, 0);
      }
      ("" + Je).indexOf("[native code]") === -1 && (_t = Lr = ve);
      var Ie = z.reject, ut = "￿", Or = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ea = "String expected.", Ct = [], qn = "__dbnames", Ko = "readonly", Fo = "readwrite";
      function ct(n, i) {
        return n ? i ? function() {
          return n.apply(this, arguments) && i.apply(this, arguments);
        } : n : i;
      }
      var ra = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Vn(n) {
        return typeof n != "string" || /\./.test(n) ? function(i) {
          return i;
        } : function(i) {
          return i[n] === void 0 && n in i && delete (i = Le(i))[n], i;
        };
      }
      function ta() {
        throw Z.Type();
      }
      function ce(n, i) {
        try {
          var s = na(n), c = na(i);
          if (s !== c) return s === "Array" ? 1 : c === "Array" ? -1 : s === "binary" ? 1 : c === "binary" ? -1 : s === "string" ? 1 : c === "string" ? -1 : s === "Date" ? 1 : c !== "Date" ? NaN : -1;
          switch (s) {
            case "number":
            case "Date":
            case "string":
              return i < n ? 1 : n < i ? -1 : 0;
            case "binary":
              return function(l, h) {
                for (var m = l.length, g = h.length, v = m < g ? m : g, _ = 0; _ < v; ++_) if (l[_] !== h[_]) return l[_] < h[_] ? -1 : 1;
                return m === g ? 0 : m < g ? -1 : 1;
              }(oa(n), oa(i));
            case "Array":
              return function(l, h) {
                for (var m = l.length, g = h.length, v = m < g ? m : g, _ = 0; _ < v; ++_) {
                  var P = ce(l[_], h[_]);
                  if (P !== 0) return P;
                }
                return m === g ? 0 : m < g ? -1 : 1;
              }(n, i);
          }
        } catch {
        }
        return NaN;
      }
      function na(n) {
        var i = typeof n;
        return i != "object" ? i : ArrayBuffer.isView(n) ? "binary" : (n = tr(n), n === "ArrayBuffer" ? "binary" : n);
      }
      function oa(n) {
        return n instanceof Uint8Array ? n : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n);
      }
      var ia = (_e.prototype._trans = function(n, i, s) {
        var c = this._tx || Y.trans, l = this.name, h = Xe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(n === "readonly" ? "read" : "write", " ").concat(this.name));
        function m(_, P, b) {
          if (!b.schema[l]) throw new Z.NotFound("Table " + l + " not part of transaction");
          return i(b.idbtrans, b);
        }
        var g = kt();
        try {
          var v = c && c.db._novip === this.db._novip ? c === Y.trans ? c._promise(n, m, s) : Mr(function() {
            return c._promise(n, m, s);
          }, { trans: c, transless: Y.transless || Y }) : function _(P, b, O, w) {
            if (P.idbdb && (P._state.openComplete || Y.letThrough || P._vip)) {
              var x = P._createTransaction(b, O, P._dbSchema);
              try {
                x.create(), P._state.PR1398_maxLoop = 3;
              } catch (I) {
                return I.name === Ut.InvalidState && P.isOpen() && 0 < --P._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), P.close({ disableAutoOpen: !1 }), P.open().then(function() {
                  return _(P, b, O, w);
                })) : Ie(I);
              }
              return x._promise(b, function(I, C) {
                return Mr(function() {
                  return Y.trans = x, w(I, C, x);
                });
              }).then(function(I) {
                if (b === "readwrite") try {
                  x.idbtrans.commit();
                } catch {
                }
                return b === "readonly" ? I : x._completion.then(function() {
                  return I;
                });
              });
            }
            if (P._state.openComplete) return Ie(new Z.DatabaseClosed(P._state.dbOpenError));
            if (!P._state.isBeingOpened) {
              if (!P._state.autoOpen) return Ie(new Z.DatabaseClosed());
              P.open().catch(ve);
            }
            return P._state.dbReadyPromise.then(function() {
              return _(P, b, O, w);
            });
          }(this.db, n, [this.name], m);
          return h && (v._consoleTask = h, v = v.catch(function(_) {
            return console.trace(_), Ie(_);
          })), v;
        } finally {
          g && wt();
        }
      }, _e.prototype.get = function(n, i) {
        var s = this;
        return n && n.constructor === Object ? this.where(n).first(i) : n == null ? Ie(new Z.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(c) {
          return s.core.get({ trans: c, key: n }).then(function(l) {
            return s.hook.reading.fire(l);
          });
        }).then(i);
      }, _e.prototype.where = function(n) {
        if (typeof n == "string") return new this.db.WhereClause(this, n);
        if (d(n)) return new this.db.WhereClause(this, "[".concat(n.join("+"), "]"));
        var i = f(n);
        if (i.length === 1) return this.where(i[0]).equals(n[i[0]]);
        var s = this.schema.indexes.concat(this.schema.primKey).filter(function(g) {
          if (g.compound && i.every(function(_) {
            return 0 <= g.keyPath.indexOf(_);
          })) {
            for (var v = 0; v < i.length; ++v) if (i.indexOf(g.keyPath[v]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(g, v) {
          return g.keyPath.length - v.keyPath.length;
        })[0];
        if (s && this.db._maxKey !== ut) {
          var h = s.keyPath.slice(0, i.length);
          return this.where(h).equals(h.map(function(v) {
            return n[v];
          }));
        }
        !s && Xe && console.warn("The query ".concat(JSON.stringify(n), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(i.join("+"), "]"));
        var c = this.schema.idxByName;
        function l(g, v) {
          return ce(g, v) === 0;
        }
        var m = i.reduce(function(b, v) {
          var _ = b[0], P = b[1], b = c[v], O = n[v];
          return [_ || b, _ || !b ? ct(P, b && b.multi ? function(w) {
            return w = de(w, v), d(w) && w.some(function(x) {
              return l(O, x);
            });
          } : function(w) {
            return l(O, de(w, v));
          }) : P];
        }, [null, null]), h = m[0], m = m[1];
        return h ? this.where(h.name).equals(n[h.keyPath]).filter(m) : s ? this.filter(m) : this.where(i).equals("");
      }, _e.prototype.filter = function(n) {
        return this.toCollection().and(n);
      }, _e.prototype.count = function(n) {
        return this.toCollection().count(n);
      }, _e.prototype.offset = function(n) {
        return this.toCollection().offset(n);
      }, _e.prototype.limit = function(n) {
        return this.toCollection().limit(n);
      }, _e.prototype.each = function(n) {
        return this.toCollection().each(n);
      }, _e.prototype.toArray = function(n) {
        return this.toCollection().toArray(n);
      }, _e.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, _e.prototype.orderBy = function(n) {
        return new this.db.Collection(new this.db.WhereClause(this, d(n) ? "[".concat(n.join("+"), "]") : n));
      }, _e.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, _e.prototype.mapToClass = function(n) {
        var i, s = this.db, c = this.name;
        function l() {
          return i !== null && i.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = n).prototype instanceof ta && (function(v, _) {
          if (typeof _ != "function" && _ !== null) throw new TypeError("Class extends value " + String(_) + " is not a constructor or null");
          function P() {
            this.constructor = v;
          }
          t(v, _), v.prototype = _ === null ? Object.create(_) : (P.prototype = _.prototype, new P());
        }(l, i = n), Object.defineProperty(l.prototype, "db", { get: function() {
          return s;
        }, enumerable: !1, configurable: !0 }), l.prototype.table = function() {
          return c;
        }, n = l);
        for (var h = /* @__PURE__ */ new Set(), m = n.prototype; m; m = y(m)) Object.getOwnPropertyNames(m).forEach(function(v) {
          return h.add(v);
        });
        function g(v) {
          if (!v) return v;
          var _, P = Object.create(n.prototype);
          for (_ in v) if (!h.has(_)) try {
            P[_] = v[_];
          } catch {
          }
          return P;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = g, this.hook("reading", g), n;
      }, _e.prototype.defineClass = function() {
        return this.mapToClass(function(n) {
          p(this, n);
        });
      }, _e.prototype.add = function(n, i) {
        var s = this, c = this.schema.primKey, l = c.auto, h = c.keyPath, m = n;
        return h && l && (m = Vn(h)(n)), this._trans("readwrite", function(g) {
          return s.core.mutate({ trans: g, type: "add", keys: i != null ? [i] : null, values: [m] });
        }).then(function(g) {
          return g.numFailures ? z.reject(g.failures[0]) : g.lastResult;
        }).then(function(g) {
          if (h) try {
            we(n, h, g);
          } catch {
          }
          return g;
        });
      }, _e.prototype.update = function(n, i) {
        return typeof n != "object" || d(n) ? this.where(":id").equals(n).modify(i) : (n = de(n, this.schema.primKey.keyPath), n === void 0 ? Ie(new Z.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(i));
      }, _e.prototype.put = function(n, i) {
        var s = this, c = this.schema.primKey, l = c.auto, h = c.keyPath, m = n;
        return h && l && (m = Vn(h)(n)), this._trans("readwrite", function(g) {
          return s.core.mutate({ trans: g, type: "put", values: [m], keys: i != null ? [i] : null });
        }).then(function(g) {
          return g.numFailures ? z.reject(g.failures[0]) : g.lastResult;
        }).then(function(g) {
          if (h) try {
            we(n, h, g);
          } catch {
          }
          return g;
        });
      }, _e.prototype.delete = function(n) {
        var i = this;
        return this._trans("readwrite", function(s) {
          return i.core.mutate({ trans: s, type: "delete", keys: [n] });
        }).then(function(s) {
          return s.numFailures ? z.reject(s.failures[0]) : void 0;
        });
      }, _e.prototype.clear = function() {
        var n = this;
        return this._trans("readwrite", function(i) {
          return n.core.mutate({ trans: i, type: "deleteRange", range: ra });
        }).then(function(i) {
          return i.numFailures ? z.reject(i.failures[0]) : void 0;
        });
      }, _e.prototype.bulkGet = function(n) {
        var i = this;
        return this._trans("readonly", function(s) {
          return i.core.getMany({ keys: n, trans: s }).then(function(c) {
            return c.map(function(l) {
              return i.hook.reading.fire(l);
            });
          });
        });
      }, _e.prototype.bulkAdd = function(n, i, s) {
        var c = this, l = Array.isArray(i) ? i : void 0, h = (s = s || (l ? void 0 : i)) ? s.allKeys : void 0;
        return this._trans("readwrite", function(m) {
          var _ = c.schema.primKey, g = _.auto, _ = _.keyPath;
          if (_ && l) throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== n.length) throw new Z.InvalidArgument("Arguments objects and keys must have the same length");
          var v = n.length, _ = _ && g ? n.map(Vn(_)) : n;
          return c.core.mutate({ trans: m, type: "add", keys: l, values: _, wantResults: h }).then(function(x) {
            var b = x.numFailures, O = x.results, w = x.lastResult, x = x.failures;
            if (b === 0) return h ? O : w;
            throw new Pr("".concat(c.name, ".bulkAdd(): ").concat(b, " of ").concat(v, " operations failed"), x);
          });
        });
      }, _e.prototype.bulkPut = function(n, i, s) {
        var c = this, l = Array.isArray(i) ? i : void 0, h = (s = s || (l ? void 0 : i)) ? s.allKeys : void 0;
        return this._trans("readwrite", function(m) {
          var _ = c.schema.primKey, g = _.auto, _ = _.keyPath;
          if (_ && l) throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== n.length) throw new Z.InvalidArgument("Arguments objects and keys must have the same length");
          var v = n.length, _ = _ && g ? n.map(Vn(_)) : n;
          return c.core.mutate({ trans: m, type: "put", keys: l, values: _, wantResults: h }).then(function(x) {
            var b = x.numFailures, O = x.results, w = x.lastResult, x = x.failures;
            if (b === 0) return h ? O : w;
            throw new Pr("".concat(c.name, ".bulkPut(): ").concat(b, " of ").concat(v, " operations failed"), x);
          });
        });
      }, _e.prototype.bulkUpdate = function(n) {
        var i = this, s = this.core, c = n.map(function(m) {
          return m.key;
        }), l = n.map(function(m) {
          return m.changes;
        }), h = [];
        return this._trans("readwrite", function(m) {
          return s.getMany({ trans: m, keys: c, cache: "clone" }).then(function(g) {
            var v = [], _ = [];
            n.forEach(function(b, O) {
              var w = b.key, x = b.changes, I = g[O];
              if (I) {
                for (var C = 0, B = Object.keys(x); C < B.length; C++) {
                  var A = B[C], T = x[A];
                  if (A === i.schema.primKey.keyPath) {
                    if (ce(T, w) !== 0) throw new Z.Constraint("Cannot update primary key in bulkUpdate()");
                  } else we(I, A, T);
                }
                h.push(O), v.push(w), _.push(I);
              }
            });
            var P = v.length;
            return s.mutate({ trans: m, type: "put", keys: v, values: _, updates: { keys: c, changeSpecs: l } }).then(function(b) {
              var O = b.numFailures, w = b.failures;
              if (O === 0) return P;
              for (var x = 0, I = Object.keys(w); x < I.length; x++) {
                var C, B = I[x], A = h[Number(B)];
                A != null && (C = w[B], delete w[B], w[A] = C);
              }
              throw new Pr("".concat(i.name, ".bulkUpdate(): ").concat(O, " of ").concat(P, " operations failed"), w);
            });
          });
        });
      }, _e.prototype.bulkDelete = function(n) {
        var i = this, s = n.length;
        return this._trans("readwrite", function(c) {
          return i.core.mutate({ trans: c, type: "delete", keys: n });
        }).then(function(m) {
          var l = m.numFailures, h = m.lastResult, m = m.failures;
          if (l === 0) return h;
          throw new Pr("".concat(i.name, ".bulkDelete(): ").concat(l, " of ").concat(s, " operations failed"), m);
        });
      }, _e);
      function _e() {
      }
      function Zt(n) {
        function i(m, g) {
          if (g) {
            for (var v = arguments.length, _ = new Array(v - 1); --v; ) _[v - 1] = arguments[v];
            return s[m].subscribe.apply(null, _), n;
          }
          if (typeof m == "string") return s[m];
        }
        var s = {};
        i.addEventType = h;
        for (var c = 1, l = arguments.length; c < l; ++c) h(arguments[c]);
        return i;
        function h(m, g, v) {
          if (typeof m != "object") {
            var _;
            g = g || Ao;
            var P = { subscribers: [], fire: v = v || ve, subscribe: function(b) {
              P.subscribers.indexOf(b) === -1 && (P.subscribers.push(b), P.fire = g(P.fire, b));
            }, unsubscribe: function(b) {
              P.subscribers = P.subscribers.filter(function(O) {
                return O !== b;
              }), P.fire = P.subscribers.reduce(g, v);
            } };
            return s[m] = i[m] = P;
          }
          f(_ = m).forEach(function(b) {
            var O = _[b];
            if (d(O)) h(b, _[b][0], _[b][1]);
            else {
              if (O !== "asap") throw new Z.InvalidArgument("Invalid event config");
              var w = h(b, tt, function() {
                for (var x = arguments.length, I = new Array(x); x--; ) I[x] = arguments[x];
                w.subscribers.forEach(function(C) {
                  me(function() {
                    C.apply(null, I);
                  });
                });
              });
            }
          });
        }
      }
      function Xt(n, i) {
        return N(i).from({ prototype: n }), i;
      }
      function xt(n, i) {
        return !(n.filter || n.algorithm || n.or) && (i ? n.justLimit : !n.replayFilter);
      }
      function qo(n, i) {
        n.filter = ct(n.filter, i);
      }
      function Vo(n, i, s) {
        var c = n.replayFilter;
        n.replayFilter = c ? function() {
          return ct(c(), i());
        } : i, n.justLimit = s && !c;
      }
      function Hn(n, i) {
        if (n.isPrimKey) return i.primaryKey;
        var s = i.getIndexByKeyPath(n.index);
        if (!s) throw new Z.Schema("KeyPath " + n.index + " on object store " + i.name + " is not indexed");
        return s;
      }
      function aa(n, i, s) {
        var c = Hn(n, i.schema);
        return i.openCursor({ trans: s, values: !n.keysOnly, reverse: n.dir === "prev", unique: !!n.unique, query: { index: c, range: n.range } });
      }
      function zn(n, i, s, c) {
        var l = n.replayFilter ? ct(n.filter, n.replayFilter()) : n.filter;
        if (n.or) {
          var h = {}, m = function(g, v, _) {
            var P, b;
            l && !l(v, _, function(O) {
              return v.stop(O);
            }, function(O) {
              return v.fail(O);
            }) || ((b = "" + (P = v.primaryKey)) == "[object ArrayBuffer]" && (b = "" + new Uint8Array(P)), S(h, b) || (h[b] = !0, i(g, v, _)));
          };
          return Promise.all([n.or._iterate(m, s), sa(aa(n, c, s), n.algorithm, m, !n.keysOnly && n.valueMapper)]);
        }
        return sa(aa(n, c, s), ct(n.algorithm, l), i, !n.keysOnly && n.valueMapper);
      }
      function sa(n, i, s, c) {
        var l = Ce(c ? function(h, m, g) {
          return s(c(h), m, g);
        } : s);
        return n.then(function(h) {
          if (h) return h.start(function() {
            var m = function() {
              return h.continue();
            };
            i && !i(h, function(g) {
              return m = g;
            }, function(g) {
              h.stop(g), m = ve;
            }, function(g) {
              h.fail(g), m = ve;
            }) || l(h.value, h, function(g) {
              return m = g;
            }), m();
          });
        });
      }
      var Br = Symbol(), Jt = (ua.prototype.execute = function(n) {
        if (this.add !== void 0) {
          var i = this.add;
          if (d(i)) return a(a([], d(n) ? n : [], !0), i).sort();
          if (typeof i == "number") return (Number(n) || 0) + i;
          if (typeof i == "bigint") try {
            return BigInt(n) + i;
          } catch {
            return BigInt(0) + i;
          }
          throw new TypeError("Invalid term ".concat(i));
        }
        if (this.remove !== void 0) {
          var s = this.remove;
          if (d(s)) return d(n) ? n.filter(function(c) {
            return !s.includes(c);
          }).sort() : [];
          if (typeof s == "number") return Number(n) - s;
          if (typeof s == "bigint") try {
            return BigInt(n) - s;
          } catch {
            return BigInt(0) - s;
          }
          throw new TypeError("Invalid subtrahend ".concat(s));
        }
        return i = (i = this.replacePrefix) === null || i === void 0 ? void 0 : i[0], i && typeof n == "string" && n.startsWith(i) ? this.replacePrefix[1] + n.substring(i.length) : n;
      }, ua);
      function ua(n) {
        Object.assign(this, n);
      }
      var Tu = (ge.prototype._read = function(n, i) {
        var s = this._ctx;
        return s.error ? s.table._trans(null, Ie.bind(null, s.error)) : s.table._trans("readonly", n).then(i);
      }, ge.prototype._write = function(n) {
        var i = this._ctx;
        return i.error ? i.table._trans(null, Ie.bind(null, i.error)) : i.table._trans("readwrite", n, "locked");
      }, ge.prototype._addAlgorithm = function(n) {
        var i = this._ctx;
        i.algorithm = ct(i.algorithm, n);
      }, ge.prototype._iterate = function(n, i) {
        return zn(this._ctx, n, i, this._ctx.table.core);
      }, ge.prototype.clone = function(n) {
        var i = Object.create(this.constructor.prototype), s = Object.create(this._ctx);
        return n && p(s, n), i._ctx = s, i;
      }, ge.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ge.prototype.each = function(n) {
        var i = this._ctx;
        return this._read(function(s) {
          return zn(i, n, s, i.table.core);
        });
      }, ge.prototype.count = function(n) {
        var i = this;
        return this._read(function(s) {
          var c = i._ctx, l = c.table.core;
          if (xt(c, !0)) return l.count({ trans: s, query: { index: Hn(c, l.schema), range: c.range } }).then(function(m) {
            return Math.min(m, c.limit);
          });
          var h = 0;
          return zn(c, function() {
            return ++h, !1;
          }, s, l).then(function() {
            return h;
          });
        }).then(n);
      }, ge.prototype.sortBy = function(n, i) {
        var s = n.split(".").reverse(), c = s[0], l = s.length - 1;
        function h(v, _) {
          return _ ? h(v[s[_]], _ - 1) : v[c];
        }
        var m = this._ctx.dir === "next" ? 1 : -1;
        function g(v, _) {
          return ce(h(v, l), h(_, l)) * m;
        }
        return this.toArray(function(v) {
          return v.sort(g);
        }).then(i);
      }, ge.prototype.toArray = function(n) {
        var i = this;
        return this._read(function(s) {
          var c = i._ctx;
          if (c.dir === "next" && xt(c, !0) && 0 < c.limit) {
            var l = c.valueMapper, h = Hn(c, c.table.core.schema);
            return c.table.core.query({ trans: s, limit: c.limit, values: !0, query: { index: h, range: c.range } }).then(function(g) {
              return g = g.result, l ? g.map(l) : g;
            });
          }
          var m = [];
          return zn(c, function(g) {
            return m.push(g);
          }, s, c.table.core).then(function() {
            return m;
          });
        }, n);
      }, ge.prototype.offset = function(n) {
        var i = this._ctx;
        return n <= 0 || (i.offset += n, xt(i) ? Vo(i, function() {
          var s = n;
          return function(c, l) {
            return s === 0 || (s === 1 ? --s : l(function() {
              c.advance(s), s = 0;
            }), !1);
          };
        }) : Vo(i, function() {
          var s = n;
          return function() {
            return --s < 0;
          };
        })), this;
      }, ge.prototype.limit = function(n) {
        return this._ctx.limit = Math.min(this._ctx.limit, n), Vo(this._ctx, function() {
          var i = n;
          return function(s, c, l) {
            return --i <= 0 && c(l), 0 <= i;
          };
        }, !0), this;
      }, ge.prototype.until = function(n, i) {
        return qo(this._ctx, function(s, c, l) {
          return !n(s.value) || (c(l), i);
        }), this;
      }, ge.prototype.first = function(n) {
        return this.limit(1).toArray(function(i) {
          return i[0];
        }).then(n);
      }, ge.prototype.last = function(n) {
        return this.reverse().first(n);
      }, ge.prototype.filter = function(n) {
        var i;
        return qo(this._ctx, function(s) {
          return n(s.value);
        }), (i = this._ctx).isMatch = ct(i.isMatch, n), this;
      }, ge.prototype.and = function(n) {
        return this.filter(n);
      }, ge.prototype.or = function(n) {
        return new this.db.WhereClause(this._ctx.table, n, this);
      }, ge.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ge.prototype.desc = function() {
        return this.reverse();
      }, ge.prototype.eachKey = function(n) {
        var i = this._ctx;
        return i.keysOnly = !i.isMatch, this.each(function(s, c) {
          n(c.key, c);
        });
      }, ge.prototype.eachUniqueKey = function(n) {
        return this._ctx.unique = "unique", this.eachKey(n);
      }, ge.prototype.eachPrimaryKey = function(n) {
        var i = this._ctx;
        return i.keysOnly = !i.isMatch, this.each(function(s, c) {
          n(c.primaryKey, c);
        });
      }, ge.prototype.keys = function(n) {
        var i = this._ctx;
        i.keysOnly = !i.isMatch;
        var s = [];
        return this.each(function(c, l) {
          s.push(l.key);
        }).then(function() {
          return s;
        }).then(n);
      }, ge.prototype.primaryKeys = function(n) {
        var i = this._ctx;
        if (i.dir === "next" && xt(i, !0) && 0 < i.limit) return this._read(function(c) {
          var l = Hn(i, i.table.core.schema);
          return i.table.core.query({ trans: c, values: !1, limit: i.limit, query: { index: l, range: i.range } });
        }).then(function(c) {
          return c.result;
        }).then(n);
        i.keysOnly = !i.isMatch;
        var s = [];
        return this.each(function(c, l) {
          s.push(l.primaryKey);
        }).then(function() {
          return s;
        }).then(n);
      }, ge.prototype.uniqueKeys = function(n) {
        return this._ctx.unique = "unique", this.keys(n);
      }, ge.prototype.firstKey = function(n) {
        return this.limit(1).keys(function(i) {
          return i[0];
        }).then(n);
      }, ge.prototype.lastKey = function(n) {
        return this.reverse().firstKey(n);
      }, ge.prototype.distinct = function() {
        var n = this._ctx, n = n.index && n.table.schema.idxByName[n.index];
        if (!n || !n.multi) return this;
        var i = {};
        return qo(this._ctx, function(l) {
          var c = l.primaryKey.toString(), l = S(i, c);
          return i[c] = !0, !l;
        }), this;
      }, ge.prototype.modify = function(n) {
        var i = this, s = this._ctx;
        return this._write(function(c) {
          var l, h, m;
          m = typeof n == "function" ? n : (l = f(n), h = l.length, function(C) {
            for (var B = !1, A = 0; A < h; ++A) {
              var T = l[A], R = n[T], L = de(C, T);
              R instanceof Jt ? (we(C, T, R.execute(L)), B = !0) : L !== R && (we(C, T, R), B = !0);
            }
            return B;
          });
          var g = s.table.core, b = g.schema.primaryKey, v = b.outbound, _ = b.extractKey, P = 200, b = i.db._options.modifyChunkSize;
          b && (P = typeof b == "object" ? b[g.name] || b["*"] || 200 : b);
          function O(C, T) {
            var A = T.failures, T = T.numFailures;
            x += C - T;
            for (var R = 0, L = f(A); R < L.length; R++) {
              var V = L[R];
              w.push(A[V]);
            }
          }
          var w = [], x = 0, I = [];
          return i.clone().primaryKeys().then(function(C) {
            function B(T) {
              var R = Math.min(P, C.length - T);
              return g.getMany({ trans: c, keys: C.slice(T, T + R), cache: "immutable" }).then(function(L) {
                for (var V = [], K = [], F = v ? [] : null, H = [], q = 0; q < R; ++q) {
                  var Q = L[q], re = { value: Le(Q), primKey: C[T + q] };
                  m.call(re, re.value, re) !== !1 && (re.value == null ? H.push(C[T + q]) : v || ce(_(Q), _(re.value)) === 0 ? (K.push(re.value), v && F.push(C[T + q])) : (H.push(C[T + q]), V.push(re.value)));
                }
                return Promise.resolve(0 < V.length && g.mutate({ trans: c, type: "add", values: V }).then(function(oe) {
                  for (var ie in oe.failures) H.splice(parseInt(ie), 1);
                  O(V.length, oe);
                })).then(function() {
                  return (0 < K.length || A && typeof n == "object") && g.mutate({ trans: c, type: "put", keys: F, values: K, criteria: A, changeSpec: typeof n != "function" && n, isAdditionalChunk: 0 < T }).then(function(oe) {
                    return O(K.length, oe);
                  });
                }).then(function() {
                  return (0 < H.length || A && n === Ho) && g.mutate({ trans: c, type: "delete", keys: H, criteria: A, isAdditionalChunk: 0 < T }).then(function(oe) {
                    return O(H.length, oe);
                  });
                }).then(function() {
                  return C.length > T + R && B(T + P);
                });
              });
            }
            var A = xt(s) && s.limit === 1 / 0 && (typeof n != "function" || n === Ho) && { index: s.index, range: s.range };
            return B(0).then(function() {
              if (0 < w.length) throw new rt("Error modifying one or more objects", w, x, I);
              return C.length;
            });
          });
        });
      }, ge.prototype.delete = function() {
        var n = this._ctx, i = n.range;
        return xt(n) && (n.isPrimKey || i.type === 3) ? this._write(function(s) {
          var c = n.table.core.schema.primaryKey, l = i;
          return n.table.core.count({ trans: s, query: { index: c, range: l } }).then(function(h) {
            return n.table.core.mutate({ trans: s, type: "deleteRange", range: l }).then(function(m) {
              var g = m.failures;
              if (m.lastResult, m.results, m = m.numFailures, m) throw new rt("Could not delete some values", Object.keys(g).map(function(v) {
                return g[v];
              }), h - m);
              return h - m;
            });
          });
        }) : this.modify(Ho);
      }, ge);
      function ge() {
      }
      var Ho = function(n, i) {
        return i.value = null;
      };
      function Ru(n, i) {
        return n < i ? -1 : n === i ? 0 : 1;
      }
      function Eu(n, i) {
        return i < n ? -1 : n === i ? 0 : 1;
      }
      function Ye(n, i, s) {
        return n = n instanceof la ? new n.Collection(n) : n, n._ctx.error = new (s || TypeError)(i), n;
      }
      function St(n) {
        return new n.Collection(n, function() {
          return ca("");
        }).limit(0);
      }
      function Un(n, i, s, c) {
        var l, h, m, g, v, _, P, b = s.length;
        if (!s.every(function(x) {
          return typeof x == "string";
        })) return Ye(n, ea);
        function O(x) {
          l = x === "next" ? function(C) {
            return C.toUpperCase();
          } : function(C) {
            return C.toLowerCase();
          }, h = x === "next" ? function(C) {
            return C.toLowerCase();
          } : function(C) {
            return C.toUpperCase();
          }, m = x === "next" ? Ru : Eu;
          var I = s.map(function(C) {
            return { lower: h(C), upper: l(C) };
          }).sort(function(C, B) {
            return m(C.lower, B.lower);
          });
          g = I.map(function(C) {
            return C.upper;
          }), v = I.map(function(C) {
            return C.lower;
          }), P = (_ = x) === "next" ? "" : c;
        }
        O("next"), n = new n.Collection(n, function() {
          return Fr(g[0], v[b - 1] + c);
        }), n._ondirectionchange = function(x) {
          O(x);
        };
        var w = 0;
        return n._addAlgorithm(function(x, I, C) {
          var B = x.key;
          if (typeof B != "string") return !1;
          var A = h(B);
          if (i(A, v, w)) return !0;
          for (var T = null, R = w; R < b; ++R) {
            var L = function(V, K, F, H, q, Q) {
              for (var re = Math.min(V.length, H.length), oe = -1, ie = 0; ie < re; ++ie) {
                var Ze = K[ie];
                if (Ze !== H[ie]) return q(V[ie], F[ie]) < 0 ? V.substr(0, ie) + F[ie] + F.substr(ie + 1) : q(V[ie], H[ie]) < 0 ? V.substr(0, ie) + H[ie] + F.substr(ie + 1) : 0 <= oe ? V.substr(0, oe) + K[oe] + F.substr(oe + 1) : null;
                q(V[ie], Ze) < 0 && (oe = ie);
              }
              return re < H.length && Q === "next" ? V + F.substr(V.length) : re < V.length && Q === "prev" ? V.substr(0, F.length) : oe < 0 ? null : V.substr(0, oe) + H[oe] + F.substr(oe + 1);
            }(B, A, g[R], v[R], m, _);
            L === null && T === null ? w = R + 1 : (T === null || 0 < m(T, L)) && (T = L);
          }
          return I(T !== null ? function() {
            x.continue(T + P);
          } : C), !1;
        }), n;
      }
      function Fr(n, i, s, c) {
        return { type: 2, lower: n, upper: i, lowerOpen: s, upperOpen: c };
      }
      function ca(n) {
        return { type: 1, lower: n, upper: n };
      }
      var la = (Object.defineProperty(Te.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Te.prototype.between = function(n, i, s, c) {
        s = s !== !1, c = c === !0;
        try {
          return 0 < this._cmp(n, i) || this._cmp(n, i) === 0 && (s || c) && (!s || !c) ? St(this) : new this.Collection(this, function() {
            return Fr(n, i, !s, !c);
          });
        } catch {
          return Ye(this, Or);
        }
      }, Te.prototype.equals = function(n) {
        return n == null ? Ye(this, Or) : new this.Collection(this, function() {
          return ca(n);
        });
      }, Te.prototype.above = function(n) {
        return n == null ? Ye(this, Or) : new this.Collection(this, function() {
          return Fr(n, void 0, !0);
        });
      }, Te.prototype.aboveOrEqual = function(n) {
        return n == null ? Ye(this, Or) : new this.Collection(this, function() {
          return Fr(n, void 0, !1);
        });
      }, Te.prototype.below = function(n) {
        return n == null ? Ye(this, Or) : new this.Collection(this, function() {
          return Fr(void 0, n, !1, !0);
        });
      }, Te.prototype.belowOrEqual = function(n) {
        return n == null ? Ye(this, Or) : new this.Collection(this, function() {
          return Fr(void 0, n);
        });
      }, Te.prototype.startsWith = function(n) {
        return typeof n != "string" ? Ye(this, ea) : this.between(n, n + ut, !0, !0);
      }, Te.prototype.startsWithIgnoreCase = function(n) {
        return n === "" ? this.startsWith(n) : Un(this, function(i, s) {
          return i.indexOf(s[0]) === 0;
        }, [n], ut);
      }, Te.prototype.equalsIgnoreCase = function(n) {
        return Un(this, function(i, s) {
          return i === s[0];
        }, [n], "");
      }, Te.prototype.anyOfIgnoreCase = function() {
        var n = Be.apply(Ge, arguments);
        return n.length === 0 ? St(this) : Un(this, function(i, s) {
          return s.indexOf(i) !== -1;
        }, n, "");
      }, Te.prototype.startsWithAnyOfIgnoreCase = function() {
        var n = Be.apply(Ge, arguments);
        return n.length === 0 ? St(this) : Un(this, function(i, s) {
          return s.some(function(c) {
            return i.indexOf(c) === 0;
          });
        }, n, ut);
      }, Te.prototype.anyOf = function() {
        var n = this, i = Be.apply(Ge, arguments), s = this._cmp;
        try {
          i.sort(s);
        } catch {
          return Ye(this, Or);
        }
        if (i.length === 0) return St(this);
        var c = new this.Collection(this, function() {
          return Fr(i[0], i[i.length - 1]);
        });
        c._ondirectionchange = function(h) {
          s = h === "next" ? n._ascending : n._descending, i.sort(s);
        };
        var l = 0;
        return c._addAlgorithm(function(h, m, g) {
          for (var v = h.key; 0 < s(v, i[l]); ) if (++l === i.length) return m(g), !1;
          return s(v, i[l]) === 0 || (m(function() {
            h.continue(i[l]);
          }), !1);
        }), c;
      }, Te.prototype.notEqual = function(n) {
        return this.inAnyRange([[-1 / 0, n], [n, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Te.prototype.noneOf = function() {
        var n = Be.apply(Ge, arguments);
        if (n.length === 0) return new this.Collection(this);
        try {
          n.sort(this._ascending);
        } catch {
          return Ye(this, Or);
        }
        var i = n.reduce(function(s, c) {
          return s ? s.concat([[s[s.length - 1][1], c]]) : [[-1 / 0, c]];
        }, null);
        return i.push([n[n.length - 1], this.db._maxKey]), this.inAnyRange(i, { includeLowers: !1, includeUppers: !1 });
      }, Te.prototype.inAnyRange = function(B, i) {
        var s = this, c = this._cmp, l = this._ascending, h = this._descending, m = this._min, g = this._max;
        if (B.length === 0) return St(this);
        if (!B.every(function(A) {
          return A[0] !== void 0 && A[1] !== void 0 && l(A[0], A[1]) <= 0;
        })) return Ye(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Z.InvalidArgument);
        var v = !i || i.includeLowers !== !1, _ = i && i.includeUppers === !0, P, b = l;
        function O(A, T) {
          return b(A[0], T[0]);
        }
        try {
          (P = B.reduce(function(A, T) {
            for (var R = 0, L = A.length; R < L; ++R) {
              var V = A[R];
              if (c(T[0], V[1]) < 0 && 0 < c(T[1], V[0])) {
                V[0] = m(V[0], T[0]), V[1] = g(V[1], T[1]);
                break;
              }
            }
            return R === L && A.push(T), A;
          }, [])).sort(O);
        } catch {
          return Ye(this, Or);
        }
        var w = 0, x = _ ? function(A) {
          return 0 < l(A, P[w][1]);
        } : function(A) {
          return 0 <= l(A, P[w][1]);
        }, I = v ? function(A) {
          return 0 < h(A, P[w][0]);
        } : function(A) {
          return 0 <= h(A, P[w][0]);
        }, C = x, B = new this.Collection(this, function() {
          return Fr(P[0][0], P[P.length - 1][1], !v, !_);
        });
        return B._ondirectionchange = function(A) {
          b = A === "next" ? (C = x, l) : (C = I, h), P.sort(O);
        }, B._addAlgorithm(function(A, T, R) {
          for (var L, V = A.key; C(V); ) if (++w === P.length) return T(R), !1;
          return !x(L = V) && !I(L) || (s._cmp(V, P[w][1]) === 0 || s._cmp(V, P[w][0]) === 0 || T(function() {
            b === l ? A.continue(P[w][0]) : A.continue(P[w][1]);
          }), !1);
        }), B;
      }, Te.prototype.startsWithAnyOf = function() {
        var n = Be.apply(Ge, arguments);
        return n.every(function(i) {
          return typeof i == "string";
        }) ? n.length === 0 ? St(this) : this.inAnyRange(n.map(function(i) {
          return [i, i + ut];
        })) : Ye(this, "startsWithAnyOf() only works with strings");
      }, Te);
      function Te() {
      }
      function gr(n) {
        return Ce(function(i) {
          return en(i), n(i.target.error), !1;
        });
      }
      function en(n) {
        n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault();
      }
      var rn = "storagemutated", zo = "x-storagemutated-1", qr = Zt(null, rn), Du = (br.prototype._lock = function() {
        return W(!Y.global), ++this._reculock, this._reculock !== 1 || Y.global || (Y.lockOwnerFor = this), this;
      }, br.prototype._unlock = function() {
        if (W(!Y.global), --this._reculock == 0) for (Y.global || (Y.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var n = this._blockedFuncs.shift();
          try {
            st(n[1], n[0]);
          } catch {
          }
        }
        return this;
      }, br.prototype._locked = function() {
        return this._reculock && Y.lockOwnerFor !== this;
      }, br.prototype.create = function(n) {
        var i = this;
        if (!this.mode) return this;
        var s = this.db.idbdb, c = this.db._state.dbOpenError;
        if (W(!this.idbtrans), !n && !s) switch (c && c.name) {
          case "DatabaseClosedError":
            throw new Z.DatabaseClosed(c);
          case "MissingAPIError":
            throw new Z.MissingAPI(c.message, c);
          default:
            throw new Z.OpenFailed(c);
        }
        if (!this.active) throw new Z.TransactionInactive();
        return W(this._completion._state === null), (n = this.idbtrans = n || (this.db.core || s).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ce(function(l) {
          en(l), i._reject(n.error);
        }), n.onabort = Ce(function(l) {
          en(l), i.active && i._reject(new Z.Abort(n.error)), i.active = !1, i.on("abort").fire(l);
        }), n.oncomplete = Ce(function() {
          i.active = !1, i._resolve(), "mutatedParts" in n && qr.storagemutated.fire(n.mutatedParts);
        }), this;
      }, br.prototype._promise = function(n, i, s) {
        var c = this;
        if (n === "readwrite" && this.mode !== "readwrite") return Ie(new Z.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ie(new Z.TransactionInactive());
        if (this._locked()) return new z(function(h, m) {
          c._blockedFuncs.push([function() {
            c._promise(n, i, s).then(h, m);
          }, Y]);
        });
        if (s) return Mr(function() {
          var h = new z(function(m, g) {
            c._lock();
            var v = i(m, g, c);
            v && v.then && v.then(m, g);
          });
          return h.finally(function() {
            return c._unlock();
          }), h._lib = !0, h;
        });
        var l = new z(function(h, m) {
          var g = i(h, m, c);
          g && g.then && g.then(h, m);
        });
        return l._lib = !0, l;
      }, br.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, br.prototype.waitFor = function(n) {
        var i, s = this._root(), c = z.resolve(n);
        s._waitingFor ? s._waitingFor = s._waitingFor.then(function() {
          return c;
        }) : (s._waitingFor = c, s._waitingQueue = [], i = s.idbtrans.objectStore(s.storeNames[0]), function h() {
          for (++s._spinCount; s._waitingQueue.length; ) s._waitingQueue.shift()();
          s._waitingFor && (i.get(-1 / 0).onsuccess = h);
        }());
        var l = s._waitingFor;
        return new z(function(h, m) {
          c.then(function(g) {
            return s._waitingQueue.push(Ce(h.bind(null, g)));
          }, function(g) {
            return s._waitingQueue.push(Ce(m.bind(null, g)));
          }).finally(function() {
            s._waitingFor === l && (s._waitingFor = null);
          });
        });
      }, br.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new Z.Abort()));
      }, br.prototype.table = function(n) {
        var i = this._memoizedTables || (this._memoizedTables = {});
        if (S(i, n)) return i[n];
        var s = this.schema[n];
        if (!s) throw new Z.NotFound("Table " + n + " not part of transaction");
        return s = new this.db.Table(n, s, this), s.core = this.db.core.table(n), i[n] = s;
      }, br);
      function br() {
      }
      function Uo(n, i, s, c, l, h, m) {
        return { name: n, keyPath: i, unique: s, multi: c, auto: l, compound: h, src: (s && !m ? "&" : "") + (c ? "*" : "") + (l ? "++" : "") + da(i) };
      }
      function da(n) {
        return typeof n == "string" ? n : n ? "[" + [].join.call(n, "+") + "]" : "";
      }
      function Wo(n, i, s) {
        return { name: n, primKey: i, indexes: s, mappedClass: null, idxByName: (c = function(l) {
          return [l.name, l];
        }, s.reduce(function(l, h, m) {
          return m = c(h, m), m && (l[m[0]] = m[1]), l;
        }, {})) };
        var c;
      }
      var tn = function(n) {
        try {
          return n.only([[]]), tn = function() {
            return [[]];
          }, [[]];
        } catch {
          return tn = function() {
            return ut;
          }, ut;
        }
      };
      function Qo(n) {
        return n == null ? function() {
        } : typeof n == "string" ? (i = n).split(".").length === 1 ? function(s) {
          return s[i];
        } : function(s) {
          return de(s, i);
        } : function(s) {
          return de(s, n);
        };
        var i;
      }
      function fa(n) {
        return [].slice.call(n);
      }
      var ju = 0;
      function nn(n) {
        return n == null ? ":id" : typeof n == "string" ? n : "[".concat(n.join("+"), "]");
      }
      function Nu(n, i, v) {
        function c(C) {
          if (C.type === 3) return null;
          if (C.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = C.lower, x = C.upper, I = C.lowerOpen, C = C.upperOpen;
          return w === void 0 ? x === void 0 ? null : i.upperBound(x, !!C) : x === void 0 ? i.lowerBound(w, !!I) : i.bound(w, x, !!I, !!C);
        }
        function l(O) {
          var w, x = O.name;
          return { name: x, schema: O, mutate: function(I) {
            var C = I.trans, B = I.type, A = I.keys, T = I.values, R = I.range;
            return new Promise(function(L, V) {
              L = Ce(L);
              var K = C.objectStore(x), F = K.keyPath == null, H = B === "put" || B === "add";
              if (!H && B !== "delete" && B !== "deleteRange") throw new Error("Invalid operation type: " + B);
              var q, Q = (A || T || { length: 1 }).length;
              if (A && T && A.length !== T.length) throw new Error("Given keys array must have same length as given values array.");
              if (Q === 0) return L({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function re(Ke) {
                ++Ze, en(Ke);
              }
              var oe = [], ie = [], Ze = 0;
              if (B === "deleteRange") {
                if (R.type === 4) return L({ numFailures: Ze, failures: ie, results: [], lastResult: void 0 });
                R.type === 3 ? oe.push(q = K.clear()) : oe.push(q = K.delete(c(R)));
              } else {
                var F = H ? F ? [T, A] : [T, null] : [A, null], ee = F[0], Ee = F[1];
                if (H) for (var De = 0; De < Q; ++De) oe.push(q = Ee && Ee[De] !== void 0 ? K[B](ee[De], Ee[De]) : K[B](ee[De])), q.onerror = re;
                else for (De = 0; De < Q; ++De) oe.push(q = K[B](ee[De])), q.onerror = re;
              }
              function io(Ke) {
                Ke = Ke.target.result, oe.forEach(function(ft, fi) {
                  return ft.error != null && (ie[fi] = ft.error);
                }), L({ numFailures: Ze, failures: ie, results: B === "delete" ? A : oe.map(function(ft) {
                  return ft.result;
                }), lastResult: Ke });
              }
              q.onerror = function(Ke) {
                re(Ke), io(Ke);
              }, q.onsuccess = io;
            });
          }, getMany: function(I) {
            var C = I.trans, B = I.keys;
            return new Promise(function(A, T) {
              A = Ce(A);
              for (var R, L = C.objectStore(x), V = B.length, K = new Array(V), F = 0, H = 0, q = function(oe) {
                oe = oe.target, K[oe._pos] = oe.result, ++H === F && A(K);
              }, Q = gr(T), re = 0; re < V; ++re) B[re] != null && ((R = L.get(B[re]))._pos = re, R.onsuccess = q, R.onerror = Q, ++F);
              F === 0 && A(K);
            });
          }, get: function(I) {
            var C = I.trans, B = I.key;
            return new Promise(function(A, T) {
              A = Ce(A);
              var R = C.objectStore(x).get(B);
              R.onsuccess = function(L) {
                return A(L.target.result);
              }, R.onerror = gr(T);
            });
          }, query: (w = _, function(I) {
            return new Promise(function(C, B) {
              C = Ce(C);
              var A, T, R, F = I.trans, L = I.values, V = I.limit, q = I.query, K = V === 1 / 0 ? void 0 : V, H = q.index, q = q.range, F = F.objectStore(x), H = H.isPrimaryKey ? F : F.index(H.name), q = c(q);
              if (V === 0) return C({ result: [] });
              w ? ((K = L ? H.getAll(q, K) : H.getAllKeys(q, K)).onsuccess = function(Q) {
                return C({ result: Q.target.result });
              }, K.onerror = gr(B)) : (A = 0, T = !L && "openKeyCursor" in H ? H.openKeyCursor(q) : H.openCursor(q), R = [], T.onsuccess = function(Q) {
                var re = T.result;
                return re ? (R.push(L ? re.value : re.primaryKey), ++A === V ? C({ result: R }) : void re.continue()) : C({ result: R });
              }, T.onerror = gr(B));
            });
          }), openCursor: function(I) {
            var C = I.trans, B = I.values, A = I.query, T = I.reverse, R = I.unique;
            return new Promise(function(L, V) {
              L = Ce(L);
              var H = A.index, K = A.range, F = C.objectStore(x), F = H.isPrimaryKey ? F : F.index(H.name), H = T ? R ? "prevunique" : "prev" : R ? "nextunique" : "next", q = !B && "openKeyCursor" in F ? F.openKeyCursor(c(K), H) : F.openCursor(c(K), H);
              q.onerror = gr(V), q.onsuccess = Ce(function(Q) {
                var re, oe, ie, Ze, ee = q.result;
                ee ? (ee.___id = ++ju, ee.done = !1, re = ee.continue.bind(ee), oe = (oe = ee.continuePrimaryKey) && oe.bind(ee), ie = ee.advance.bind(ee), Ze = function() {
                  throw new Error("Cursor not stopped");
                }, ee.trans = C, ee.stop = ee.continue = ee.continuePrimaryKey = ee.advance = function() {
                  throw new Error("Cursor not started");
                }, ee.fail = Ce(V), ee.next = function() {
                  var Ee = this, De = 1;
                  return this.start(function() {
                    return De-- ? Ee.continue() : Ee.stop();
                  }).then(function() {
                    return Ee;
                  });
                }, ee.start = function(Ee) {
                  function De() {
                    if (q.result) try {
                      Ee();
                    } catch (Ke) {
                      ee.fail(Ke);
                    }
                    else ee.done = !0, ee.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ee.stop();
                  }
                  var io = new Promise(function(Ke, ft) {
                    Ke = Ce(Ke), q.onerror = gr(ft), ee.fail = ft, ee.stop = function(fi) {
                      ee.stop = ee.continue = ee.continuePrimaryKey = ee.advance = Ze, Ke(fi);
                    };
                  });
                  return q.onsuccess = Ce(function(Ke) {
                    q.onsuccess = De, De();
                  }), ee.continue = re, ee.continuePrimaryKey = oe, ee.advance = ie, De(), io;
                }, L(ee)) : L(null);
              }, V);
            });
          }, count: function(I) {
            var C = I.query, B = I.trans, A = C.index, T = C.range;
            return new Promise(function(R, L) {
              var V = B.objectStore(x), K = A.isPrimaryKey ? V : V.index(A.name), V = c(T), K = V ? K.count(V) : K.count();
              K.onsuccess = Ce(function(F) {
                return R(F.target.result);
              }), K.onerror = gr(L);
            });
          } };
        }
        var h, m, g, P = (m = v, g = fa((h = n).objectStoreNames), { schema: { name: h.name, tables: g.map(function(O) {
          return m.objectStore(O);
        }).map(function(O) {
          var w = O.keyPath, C = O.autoIncrement, x = d(w), I = {}, C = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: x, keyPath: w, autoIncrement: C, unique: !0, extractKey: Qo(w) }, indexes: fa(O.indexNames).map(function(B) {
            return O.index(B);
          }).map(function(R) {
            var A = R.name, T = R.unique, L = R.multiEntry, R = R.keyPath, L = { name: A, compound: d(R), keyPath: R, unique: T, multiEntry: L, extractKey: Qo(R) };
            return I[nn(R)] = L;
          }), getIndexByKeyPath: function(B) {
            return I[nn(B)];
          } };
          return I[":id"] = C.primaryKey, w != null && (I[nn(w)] = C.primaryKey), C;
        }) }, hasGetAll: 0 < g.length && "getAll" in m.objectStore(g[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), v = P.schema, _ = P.hasGetAll, P = v.tables.map(l), b = {};
        return P.forEach(function(O) {
          return b[O.name] = O;
        }), { stack: "dbcore", transaction: n.transaction.bind(n), table: function(O) {
          if (!b[O]) throw new Error("Table '".concat(O, "' not found"));
          return b[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: tn(i), schema: v };
      }
      function Mu(n, i, s, c) {
        var l = s.IDBKeyRange;
        return s.indexedDB, { dbcore: (c = Nu(i, l, c), n.dbcore.reduce(function(h, m) {
          return m = m.create, o(o({}, h), m(h));
        }, c)) };
      }
      function Wn(n, c) {
        var s = c.db, c = Mu(n._middlewares, s, n._deps, c);
        n.core = c.dbcore, n.tables.forEach(function(l) {
          var h = l.name;
          n.core.schema.tables.some(function(m) {
            return m.name === h;
          }) && (l.core = n.core.table(h), n[h] instanceof n.Table && (n[h].core = l.core));
        });
      }
      function Qn(n, i, s, c) {
        s.forEach(function(l) {
          var h = c[l];
          i.forEach(function(m) {
            var g = function v(_, P) {
              return G(_, P) || (_ = y(_)) && v(_, P);
            }(m, l);
            (!g || "value" in g && g.value === void 0) && (m === n.Transaction.prototype || m instanceof n.Transaction ? j(m, l, { get: function() {
              return this.table(l);
            }, set: function(v) {
              E(this, l, { value: v, writable: !0, configurable: !0, enumerable: !0 });
            } }) : m[l] = new n.Table(l, h));
          });
        });
      }
      function Go(n, i) {
        i.forEach(function(s) {
          for (var c in s) s[c] instanceof n.Table && delete s[c];
        });
      }
      function Lu(n, i) {
        return n._cfg.version - i._cfg.version;
      }
      function Ku(n, i, s, c) {
        var l = n._dbSchema;
        s.objectStoreNames.contains("$meta") && !l.$meta && (l.$meta = Wo("$meta", pa("")[0], []), n._storeNames.push("$meta"));
        var h = n._createTransaction("readwrite", n._storeNames, l);
        h.create(s), h._completion.catch(c);
        var m = h._reject.bind(h), g = Y.transless || Y;
        Mr(function() {
          return Y.trans = h, Y.transless = g, i !== 0 ? (Wn(n, s), _ = i, ((v = h).storeNames.includes("$meta") ? v.table("$meta").get("version").then(function(P) {
            return P ?? _;
          }) : z.resolve(_)).then(function(P) {
            return O = P, w = h, x = s, I = [], P = (b = n)._versions, C = b._dbSchema = Yn(0, b.idbdb, x), (P = P.filter(function(B) {
              return B._cfg.version >= O;
            })).length !== 0 ? (P.forEach(function(B) {
              I.push(function() {
                var A = C, T = B._cfg.dbschema;
                Zn(b, A, x), Zn(b, T, x), C = b._dbSchema = T;
                var R = Yo(A, T);
                R.add.forEach(function(H) {
                  Zo(x, H[0], H[1].primKey, H[1].indexes);
                }), R.change.forEach(function(H) {
                  if (H.recreate) throw new Z.Upgrade("Not yet support for changing primary key");
                  var q = x.objectStore(H.name);
                  H.add.forEach(function(Q) {
                    return Gn(q, Q);
                  }), H.change.forEach(function(Q) {
                    q.deleteIndex(Q.name), Gn(q, Q);
                  }), H.del.forEach(function(Q) {
                    return q.deleteIndex(Q);
                  });
                });
                var L = B._cfg.contentUpgrade;
                if (L && B._cfg.version > O) {
                  Wn(b, x), w._memoizedTables = {};
                  var V = ye(T);
                  R.del.forEach(function(H) {
                    V[H] = A[H];
                  }), Go(b, [b.Transaction.prototype]), Qn(b, [b.Transaction.prototype], f(V), V), w.schema = V;
                  var K, F = ze(L);
                  return F && _t(), R = z.follow(function() {
                    var H;
                    (K = L(w)) && F && (H = Lr.bind(null, null), K.then(H, H));
                  }), K && typeof K.then == "function" ? z.resolve(K) : R.then(function() {
                    return K;
                  });
                }
              }), I.push(function(A) {
                var T, R, L = B._cfg.dbschema;
                T = L, R = A, [].slice.call(R.db.objectStoreNames).forEach(function(V) {
                  return T[V] == null && R.db.deleteObjectStore(V);
                }), Go(b, [b.Transaction.prototype]), Qn(b, [b.Transaction.prototype], b._storeNames, b._dbSchema), w.schema = b._dbSchema;
              }), I.push(function(A) {
                b.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(b.idbdb.version / 10) === B._cfg.version ? (b.idbdb.deleteObjectStore("$meta"), delete b._dbSchema.$meta, b._storeNames = b._storeNames.filter(function(T) {
                  return T !== "$meta";
                })) : A.objectStore("$meta").put(B._cfg.version, "version"));
              });
            }), function B() {
              return I.length ? z.resolve(I.shift()(w.idbtrans)).then(B) : z.resolve();
            }().then(function() {
              ha(C, x);
            })) : z.resolve();
            var b, O, w, x, I, C;
          }).catch(m)) : (f(l).forEach(function(P) {
            Zo(s, P, l[P].primKey, l[P].indexes);
          }), Wn(n, s), void z.follow(function() {
            return n.on.populate.fire(h);
          }).catch(m));
          var v, _;
        });
      }
      function Fu(n, i) {
        ha(n._dbSchema, i), i.db.version % 10 != 0 || i.objectStoreNames.contains("$meta") || i.db.createObjectStore("$meta").add(Math.ceil(i.db.version / 10 - 1), "version");
        var s = Yn(0, n.idbdb, i);
        Zn(n, n._dbSchema, i);
        for (var c = 0, l = Yo(s, n._dbSchema).change; c < l.length; c++) {
          var h = function(m) {
            if (m.change.length || m.recreate) return console.warn("Unable to patch indexes of table ".concat(m.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var g = i.objectStore(m.name);
            m.add.forEach(function(v) {
              Xe && console.debug("Dexie upgrade patch: Creating missing index ".concat(m.name, ".").concat(v.src)), Gn(g, v);
            });
          }(l[c]);
          if (typeof h == "object") return h.value;
        }
      }
      function Yo(n, i) {
        var s, c = { del: [], add: [], change: [] };
        for (s in n) i[s] || c.del.push(s);
        for (s in i) {
          var l = n[s], h = i[s];
          if (l) {
            var m = { name: s, def: h, recreate: !1, del: [], add: [], change: [] };
            if ("" + (l.primKey.keyPath || "") != "" + (h.primKey.keyPath || "") || l.primKey.auto !== h.primKey.auto) m.recreate = !0, c.change.push(m);
            else {
              var g = l.idxByName, v = h.idxByName, _ = void 0;
              for (_ in g) v[_] || m.del.push(_);
              for (_ in v) {
                var P = g[_], b = v[_];
                P ? P.src !== b.src && m.change.push(b) : m.add.push(b);
              }
              (0 < m.del.length || 0 < m.add.length || 0 < m.change.length) && c.change.push(m);
            }
          } else c.add.push([s, h]);
        }
        return c;
      }
      function Zo(n, i, s, c) {
        var l = n.db.createObjectStore(i, s.keyPath ? { keyPath: s.keyPath, autoIncrement: s.auto } : { autoIncrement: s.auto });
        return c.forEach(function(h) {
          return Gn(l, h);
        }), l;
      }
      function ha(n, i) {
        f(n).forEach(function(s) {
          i.db.objectStoreNames.contains(s) || (Xe && console.debug("Dexie: Creating missing table", s), Zo(i, s, n[s].primKey, n[s].indexes));
        });
      }
      function Gn(n, i) {
        n.createIndex(i.name, i.keyPath, { unique: i.unique, multiEntry: i.multi });
      }
      function Yn(n, i, s) {
        var c = {};
        return X(i.objectStoreNames, 0).forEach(function(l) {
          for (var h = s.objectStore(l), m = Uo(da(_ = h.keyPath), _ || "", !0, !1, !!h.autoIncrement, _ && typeof _ != "string", !0), g = [], v = 0; v < h.indexNames.length; ++v) {
            var P = h.index(h.indexNames[v]), _ = P.keyPath, P = Uo(P.name, _, !!P.unique, !!P.multiEntry, !1, _ && typeof _ != "string", !1);
            g.push(P);
          }
          c[l] = Wo(l, m, g);
        }), c;
      }
      function Zn(n, i, s) {
        for (var c = s.db.objectStoreNames, l = 0; l < c.length; ++l) {
          var h = c[l], m = s.objectStore(h);
          n._hasGetAll = "getAll" in m;
          for (var g = 0; g < m.indexNames.length; ++g) {
            var v = m.indexNames[g], _ = m.index(v).keyPath, P = typeof _ == "string" ? _ : "[" + X(_).join("+") + "]";
            !i[h] || (_ = i[h].idxByName[P]) && (_.name = v, delete i[h].idxByName[P], i[h].idxByName[v] = _);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && u.WorkerGlobalScope && u instanceof u.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (n._hasGetAll = !1);
      }
      function pa(n) {
        return n.split(",").map(function(i, s) {
          var c = (i = i.trim()).replace(/([&*]|\+\+)/g, ""), l = /^\[/.test(c) ? c.match(/^\[(.*)\]$/)[1].split("+") : c;
          return Uo(c, l || null, /\&/.test(i), /\*/.test(i), /\+\+/.test(i), d(l), s === 0);
        });
      }
      var qu = (Xn.prototype._parseStoresSpec = function(n, i) {
        f(n).forEach(function(s) {
          if (n[s] !== null) {
            var c = pa(n[s]), l = c.shift();
            if (l.unique = !0, l.multi) throw new Z.Schema("Primary key cannot be multi-valued");
            c.forEach(function(h) {
              if (h.auto) throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new Z.Schema("Index must have a name and cannot be an empty string");
            }), i[s] = Wo(s, l, c);
          }
        });
      }, Xn.prototype.stores = function(s) {
        var i = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? p(this._cfg.storesSource, s) : s;
        var s = i._versions, c = {}, l = {};
        return s.forEach(function(h) {
          p(c, h._cfg.storesSource), l = h._cfg.dbschema = {}, h._parseStoresSpec(c, l);
        }), i._dbSchema = l, Go(i, [i._allTables, i, i.Transaction.prototype]), Qn(i, [i._allTables, i, i.Transaction.prototype, this._cfg.tables], f(l), l), i._storeNames = f(l), this;
      }, Xn.prototype.upgrade = function(n) {
        return this._cfg.contentUpgrade = Wt(this._cfg.contentUpgrade || ve, n), this;
      }, Xn);
      function Xn() {
      }
      function Xo(n, i) {
        var s = n._dbNamesDB;
        return s || (s = n._dbNamesDB = new $r(qn, { addons: [], indexedDB: n, IDBKeyRange: i })).version(1).stores({ dbnames: "name" }), s.table("dbnames");
      }
      function Jo(n) {
        return n && typeof n.databases == "function";
      }
      function ei(n) {
        return Mr(function() {
          return Y.letThrough = !0, n();
        });
      }
      function ri(n) {
        return !("from" in n);
      }
      var Re = function(n, i) {
        if (!this) {
          var s = new Re();
          return n && "d" in n && p(s, n), s;
        }
        p(this, arguments.length ? { d: 1, from: n, to: 1 < arguments.length ? i : n } : { d: 0 });
      };
      function on(n, i, s) {
        var c = ce(i, s);
        if (!isNaN(c)) {
          if (0 < c) throw RangeError();
          if (ri(n)) return p(n, { from: i, to: s, d: 1 });
          var l = n.l, c = n.r;
          if (ce(s, n.from) < 0) return l ? on(l, i, s) : n.l = { from: i, to: s, d: 1, l: null, r: null }, ga(n);
          if (0 < ce(i, n.to)) return c ? on(c, i, s) : n.r = { from: i, to: s, d: 1, l: null, r: null }, ga(n);
          ce(i, n.from) < 0 && (n.from = i, n.l = null, n.d = c ? c.d + 1 : 1), 0 < ce(s, n.to) && (n.to = s, n.r = null, n.d = n.l ? n.l.d + 1 : 1), s = !n.r, l && !n.l && an(n, l), c && s && an(n, c);
        }
      }
      function an(n, i) {
        ri(i) || function s(c, v) {
          var h = v.from, m = v.to, g = v.l, v = v.r;
          on(c, h, m), g && s(c, g), v && s(c, v);
        }(n, i);
      }
      function ma(n, i) {
        var s = Jn(i), c = s.next();
        if (c.done) return !1;
        for (var l = c.value, h = Jn(n), m = h.next(l.from), g = m.value; !c.done && !m.done; ) {
          if (ce(g.from, l.to) <= 0 && 0 <= ce(g.to, l.from)) return !0;
          ce(l.from, g.from) < 0 ? l = (c = s.next(g.from)).value : g = (m = h.next(l.from)).value;
        }
        return !1;
      }
      function Jn(n) {
        var i = ri(n) ? null : { s: 0, n };
        return { next: function(s) {
          for (var c = 0 < arguments.length; i; ) switch (i.s) {
            case 0:
              if (i.s = 1, c) for (; i.n.l && ce(s, i.n.from) < 0; ) i = { up: i, n: i.n.l, s: 1 };
              else for (; i.n.l; ) i = { up: i, n: i.n.l, s: 1 };
            case 1:
              if (i.s = 2, !c || ce(s, i.n.to) <= 0) return { value: i.n, done: !1 };
            case 2:
              if (i.n.r) {
                i.s = 3, i = { up: i, n: i.n.r, s: 0 };
                continue;
              }
            case 3:
              i = i.up;
          }
          return { done: !0 };
        } };
      }
      function ga(n) {
        var i, s, c = (((i = n.r) === null || i === void 0 ? void 0 : i.d) || 0) - (((s = n.l) === null || s === void 0 ? void 0 : s.d) || 0), l = 1 < c ? "r" : c < -1 ? "l" : "";
        l && (i = l == "r" ? "l" : "r", s = o({}, n), c = n[l], n.from = c.from, n.to = c.to, n[l] = c[l], s[l] = c[i], (n[i] = s).d = ba(s)), n.d = ba(n);
      }
      function ba(s) {
        var i = s.r, s = s.l;
        return (i ? s ? Math.max(i.d, s.d) : i.d : s ? s.d : 0) + 1;
      }
      function eo(n, i) {
        return f(i).forEach(function(s) {
          n[s] ? an(n[s], i[s]) : n[s] = function c(l) {
            var h, m, g = {};
            for (h in l) S(l, h) && (m = l[h], g[h] = !m || typeof m != "object" || rr.has(m.constructor) ? m : c(m));
            return g;
          }(i[s]);
        }), n;
      }
      function ti(n, i) {
        return n.all || i.all || Object.keys(n).some(function(s) {
          return i[s] && ma(i[s], n[s]);
        });
      }
      $(Re.prototype, ((Je = { add: function(n) {
        return an(this, n), this;
      }, addKey: function(n) {
        return on(this, n, n), this;
      }, addKeys: function(n) {
        var i = this;
        return n.forEach(function(s) {
          return on(i, s, s);
        }), this;
      }, hasKey: function(n) {
        var i = Jn(this).next(n).value;
        return i && ce(i.from, n) <= 0 && 0 <= ce(i.to, n);
      } })[mr] = function() {
        return Jn(this);
      }, Je));
      var lt = {}, ni = {}, oi = !1;
      function ro(n) {
        eo(ni, n), oi || (oi = !0, setTimeout(function() {
          oi = !1, ii(ni, !(ni = {}));
        }, 0));
      }
      function ii(n, i) {
        i === void 0 && (i = !1);
        var s = /* @__PURE__ */ new Set();
        if (n.all) for (var c = 0, l = Object.values(lt); c < l.length; c++) ya(m = l[c], n, s, i);
        else for (var h in n) {
          var m, g = /^idb\:\/\/(.*)\/(.*)\//.exec(h);
          g && (h = g[1], g = g[2], (m = lt["idb://".concat(h, "/").concat(g)]) && ya(m, n, s, i));
        }
        s.forEach(function(v) {
          return v();
        });
      }
      function ya(n, i, s, c) {
        for (var l = [], h = 0, m = Object.entries(n.queries.query); h < m.length; h++) {
          for (var g = m[h], v = g[0], _ = [], P = 0, b = g[1]; P < b.length; P++) {
            var O = b[P];
            ti(i, O.obsSet) ? O.subscribers.forEach(function(C) {
              return s.add(C);
            }) : c && _.push(O);
          }
          c && l.push([v, _]);
        }
        if (c) for (var w = 0, x = l; w < x.length; w++) {
          var I = x[w], v = I[0], _ = I[1];
          n.queries.query[v] = _;
        }
      }
      function Vu(n) {
        var i = n._state, s = n._deps.indexedDB;
        if (i.isBeingOpened || n.idbdb) return i.dbReadyPromise.then(function() {
          return i.dbOpenError ? Ie(i.dbOpenError) : n;
        });
        i.isBeingOpened = !0, i.dbOpenError = null, i.openComplete = !1;
        var c = i.openCanceller, l = Math.round(10 * n.verno), h = !1;
        function m() {
          if (i.openCanceller !== c) throw new Z.DatabaseClosed("db.open() was cancelled");
        }
        function g() {
          return new z(function(O, w) {
            if (m(), !s) throw new Z.MissingAPI();
            var x = n.name, I = i.autoSchema || !l ? s.open(x) : s.open(x, l);
            if (!I) throw new Z.MissingAPI();
            I.onerror = gr(w), I.onblocked = Ce(n._fireOnBlocked), I.onupgradeneeded = Ce(function(C) {
              var B;
              P = I.transaction, i.autoSchema && !n._options.allowEmptyDB ? (I.onerror = en, P.abort(), I.result.close(), (B = s.deleteDatabase(x)).onsuccess = B.onerror = Ce(function() {
                w(new Z.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (P.onerror = gr(w), C = C.oldVersion > Math.pow(2, 62) ? 0 : C.oldVersion, b = C < 1, n.idbdb = I.result, h && Fu(n, P), Ku(n, C / 10, P, w));
            }, w), I.onsuccess = Ce(function() {
              P = null;
              var C, B, A, T, R, L = n.idbdb = I.result, V = X(L.objectStoreNames);
              if (0 < V.length) try {
                var K = L.transaction((T = V).length === 1 ? T[0] : T, "readonly");
                if (i.autoSchema) B = L, A = K, (C = n).verno = B.version / 10, A = C._dbSchema = Yn(0, B, A), C._storeNames = X(B.objectStoreNames, 0), Qn(C, [C._allTables], f(A), A);
                else if (Zn(n, n._dbSchema, K), ((R = Yo(Yn(0, (R = n).idbdb, K), R._dbSchema)).add.length || R.change.some(function(F) {
                  return F.add.length || F.change.length;
                })) && !h) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), L.close(), l = L.version + 1, h = !0, O(g());
                Wn(n, K);
              } catch {
              }
              Ct.push(n), L.onversionchange = Ce(function(F) {
                i.vcFired = !0, n.on("versionchange").fire(F);
              }), L.onclose = Ce(function(F) {
                n.on("close").fire(F);
              }), b && (R = n._deps, K = x, L = R.indexedDB, R = R.IDBKeyRange, Jo(L) || K === qn || Xo(L, R).put({ name: K }).catch(ve)), O();
            }, w);
          }).catch(function(O) {
            switch (O == null ? void 0 : O.name) {
              case "UnknownError":
                if (0 < i.PR1398_maxLoop) return i.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), g();
                break;
              case "VersionError":
                if (0 < l) return l = 0, g();
            }
            return z.reject(O);
          });
        }
        var v, _ = i.dbReadyResolve, P = null, b = !1;
        return z.race([c, (typeof navigator > "u" ? z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function w() {
            return indexedDB.databases().finally(O);
          }
          v = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(v);
        }) : Promise.resolve()).then(g)]).then(function() {
          return m(), i.onReadyBeingFired = [], z.resolve(ei(function() {
            return n.on.ready.fire(n.vip);
          })).then(function O() {
            if (0 < i.onReadyBeingFired.length) {
              var w = i.onReadyBeingFired.reduce(Wt, ve);
              return i.onReadyBeingFired = [], z.resolve(ei(function() {
                return w(n.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          i.openCanceller === c && (i.onReadyBeingFired = null, i.isBeingOpened = !1);
        }).catch(function(O) {
          i.dbOpenError = O;
          try {
            P && P.abort();
          } catch {
          }
          return c === i.openCanceller && n._close(), Ie(O);
        }).finally(function() {
          i.openComplete = !0, _();
        }).then(function() {
          var O;
          return b && (O = {}, n.tables.forEach(function(w) {
            w.schema.indexes.forEach(function(x) {
              x.name && (O["idb://".concat(n.name, "/").concat(w.name, "/").concat(x.name)] = new Re(-1 / 0, [[[]]]));
            }), O["idb://".concat(n.name, "/").concat(w.name, "/")] = O["idb://".concat(n.name, "/").concat(w.name, "/:dels")] = new Re(-1 / 0, [[[]]]);
          }), qr(rn).fire(O), ii(O, !0)), n;
        });
      }
      function ai(n) {
        function i(h) {
          return n.next(h);
        }
        var s = l(i), c = l(function(h) {
          return n.throw(h);
        });
        function l(h) {
          return function(v) {
            var g = h(v), v = g.value;
            return g.done ? v : v && typeof v.then == "function" ? v.then(s, c) : d(v) ? Promise.all(v).then(s, c) : s(v);
          };
        }
        return l(i)();
      }
      function to(n, i, s) {
        for (var c = d(n) ? n.slice() : [n], l = 0; l < s; ++l) c.push(i);
        return c;
      }
      var Hu = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(n) {
        return o(o({}, n), { table: function(i) {
          var s = n.table(i), c = s.schema, l = {}, h = [];
          function m(b, O, w) {
            var x = nn(b), I = l[x] = l[x] || [], C = b == null ? 0 : typeof b == "string" ? 1 : b.length, B = 0 < O, B = o(o({}, w), { name: B ? "".concat(x, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: B, keyTail: O, keyLength: C, extractKey: Qo(b), unique: !B && w.unique });
            return I.push(B), B.isPrimaryKey || h.push(B), 1 < C && m(C === 2 ? b[0] : b.slice(0, C - 1), O + 1, w), I.sort(function(A, T) {
              return A.keyTail - T.keyTail;
            }), B;
          }
          i = m(c.primaryKey.keyPath, 0, c.primaryKey), l[":id"] = [i];
          for (var g = 0, v = c.indexes; g < v.length; g++) {
            var _ = v[g];
            m(_.keyPath, 0, _);
          }
          function P(b) {
            var O, w = b.query.index;
            return w.isVirtual ? o(o({}, b), { query: { index: w.lowLevelIndex, range: (O = b.query.range, w = w.keyTail, { type: O.type === 1 ? 2 : O.type, lower: to(O.lower, O.lowerOpen ? n.MAX_KEY : n.MIN_KEY, w), lowerOpen: !0, upper: to(O.upper, O.upperOpen ? n.MIN_KEY : n.MAX_KEY, w), upperOpen: !0 }) } }) : b;
          }
          return o(o({}, s), { schema: o(o({}, c), { primaryKey: i, indexes: h, getIndexByKeyPath: function(b) {
            return (b = l[nn(b)]) && b[0];
          } }), count: function(b) {
            return s.count(P(b));
          }, query: function(b) {
            return s.query(P(b));
          }, openCursor: function(b) {
            var O = b.query.index, w = O.keyTail, x = O.isVirtual, I = O.keyLength;
            return x ? s.openCursor(P(b)).then(function(B) {
              return B && C(B);
            }) : s.openCursor(b);
            function C(B) {
              return Object.create(B, { continue: { value: function(A) {
                A != null ? B.continue(to(A, b.reverse ? n.MAX_KEY : n.MIN_KEY, w)) : b.unique ? B.continue(B.key.slice(0, I).concat(b.reverse ? n.MIN_KEY : n.MAX_KEY, w)) : B.continue();
              } }, continuePrimaryKey: { value: function(A, T) {
                B.continuePrimaryKey(to(A, n.MAX_KEY, w), T);
              } }, primaryKey: { get: function() {
                return B.primaryKey;
              } }, key: { get: function() {
                var A = B.key;
                return I === 1 ? A[0] : A.slice(0, I);
              } }, value: { get: function() {
                return B.value;
              } } });
            }
          } });
        } });
      } };
      function si(n, i, s, c) {
        return s = s || {}, c = c || "", f(n).forEach(function(l) {
          var h, m, g;
          S(i, l) ? (h = n[l], m = i[l], typeof h == "object" && typeof m == "object" && h && m ? (g = tr(h)) !== tr(m) ? s[c + l] = i[l] : g === "Object" ? si(h, m, s, c + l + ".") : h !== m && (s[c + l] = i[l]) : h !== m && (s[c + l] = i[l])) : s[c + l] = void 0;
        }), f(i).forEach(function(l) {
          S(n, l) || (s[c + l] = i[l]);
        }), s;
      }
      function ui(n, i) {
        return i.type === "delete" ? i.keys : i.keys || i.values.map(n.extractKey);
      }
      var zu = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(n) {
        return o(o({}, n), { table: function(i) {
          var s = n.table(i), c = s.schema.primaryKey;
          return o(o({}, s), { mutate: function(l) {
            var h = Y.trans, m = h.table(i).hook, g = m.deleting, v = m.creating, _ = m.updating;
            switch (l.type) {
              case "add":
                if (v.fire === ve) break;
                return h._promise("readwrite", function() {
                  return P(l);
                }, !0);
              case "put":
                if (v.fire === ve && _.fire === ve) break;
                return h._promise("readwrite", function() {
                  return P(l);
                }, !0);
              case "delete":
                if (g.fire === ve) break;
                return h._promise("readwrite", function() {
                  return P(l);
                }, !0);
              case "deleteRange":
                if (g.fire === ve) break;
                return h._promise("readwrite", function() {
                  return function b(O, w, x) {
                    return s.query({ trans: O, values: !1, query: { index: c, range: w }, limit: x }).then(function(I) {
                      var C = I.result;
                      return P({ type: "delete", keys: C, trans: O }).then(function(B) {
                        return 0 < B.numFailures ? Promise.reject(B.failures[0]) : C.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : b(O, o(o({}, w), { lower: C[C.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(l.trans, l.range, 1e4);
                }, !0);
            }
            return s.mutate(l);
            function P(b) {
              var O, w, x, I = Y.trans, C = b.keys || ui(c, b);
              if (!C) throw new Error("Keys missing");
              return (b = b.type === "add" || b.type === "put" ? o(o({}, b), { keys: C }) : o({}, b)).type !== "delete" && (b.values = a([], b.values)), b.keys && (b.keys = a([], b.keys)), O = s, x = C, ((w = b).type === "add" ? Promise.resolve([]) : O.getMany({ trans: w.trans, keys: x, cache: "immutable" })).then(function(B) {
                var A = C.map(function(T, R) {
                  var L, V, K, F = B[R], H = { onerror: null, onsuccess: null };
                  return b.type === "delete" ? g.fire.call(H, T, F, I) : b.type === "add" || F === void 0 ? (L = v.fire.call(H, T, b.values[R], I), T == null && L != null && (b.keys[R] = T = L, c.outbound || we(b.values[R], c.keyPath, T))) : (L = si(F, b.values[R]), (V = _.fire.call(H, L, T, F, I)) && (K = b.values[R], Object.keys(V).forEach(function(q) {
                    S(K, q) ? K[q] = V[q] : we(K, q, V[q]);
                  }))), H;
                });
                return s.mutate(b).then(function(T) {
                  for (var R = T.failures, L = T.results, V = T.numFailures, T = T.lastResult, K = 0; K < C.length; ++K) {
                    var F = (L || C)[K], H = A[K];
                    F == null ? H.onerror && H.onerror(R[K]) : H.onsuccess && H.onsuccess(b.type === "put" && B[K] ? b.values[K] : F);
                  }
                  return { failures: R, results: L, numFailures: V, lastResult: T };
                }).catch(function(T) {
                  return A.forEach(function(R) {
                    return R.onerror && R.onerror(T);
                  }), Promise.reject(T);
                });
              });
            }
          } });
        } });
      } };
      function va(n, i, s) {
        try {
          if (!i || i.keys.length < n.length) return null;
          for (var c = [], l = 0, h = 0; l < i.keys.length && h < n.length; ++l) ce(i.keys[l], n[h]) === 0 && (c.push(s ? Le(i.values[l]) : i.values[l]), ++h);
          return c.length === n.length ? c : null;
        } catch {
          return null;
        }
      }
      var Uu = { stack: "dbcore", level: -1, create: function(n) {
        return { table: function(i) {
          var s = n.table(i);
          return o(o({}, s), { getMany: function(c) {
            if (!c.cache) return s.getMany(c);
            var l = va(c.keys, c.trans._cache, c.cache === "clone");
            return l ? z.resolve(l) : s.getMany(c).then(function(h) {
              return c.trans._cache = { keys: c.keys, values: c.cache === "clone" ? Le(h) : h }, h;
            });
          }, mutate: function(c) {
            return c.type !== "add" && (c.trans._cache = null), s.mutate(c);
          } });
        } };
      } };
      function ka(n, i) {
        return n.trans.mode === "readonly" && !!n.subscr && !n.trans.explicit && n.trans.db._options.cache !== "disabled" && !i.schema.primaryKey.outbound;
      }
      function wa(n, i) {
        switch (n) {
          case "query":
            return i.values && !i.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Wu = { stack: "dbcore", level: 0, name: "Observability", create: function(n) {
        var i = n.schema.name, s = new Re(n.MIN_KEY, n.MAX_KEY);
        return o(o({}, n), { transaction: function(c, l, h) {
          if (Y.subscr && l !== "readonly") throw new Z.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Y.querier));
          return n.transaction(c, l, h);
        }, table: function(c) {
          var l = n.table(c), h = l.schema, m = h.primaryKey, b = h.indexes, g = m.extractKey, v = m.outbound, _ = m.autoIncrement && b.filter(function(w) {
            return w.compound && w.keyPath.includes(m.keyPath);
          }), P = o(o({}, l), { mutate: function(w) {
            function x(q) {
              return q = "idb://".concat(i, "/").concat(c, "/").concat(q), T[q] || (T[q] = new Re());
            }
            var I, C, B, A = w.trans, T = w.mutatedParts || (w.mutatedParts = {}), R = x(""), L = x(":dels"), V = w.type, H = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [ui(m, w).filter(function(q) {
              return q;
            }), w.values] : [], K = H[0], F = H[1], H = w.trans._cache;
            return d(K) ? (R.addKeys(K), (H = V === "delete" || K.length === F.length ? va(K, H) : null) || L.addKeys(K), (H || F) && (I = x, C = H, B = F, h.indexes.forEach(function(q) {
              var Q = I(q.name || "");
              function re(ie) {
                return ie != null ? q.extractKey(ie) : null;
              }
              function oe(ie) {
                return q.multiEntry && d(ie) ? ie.forEach(function(Ze) {
                  return Q.addKey(Ze);
                }) : Q.addKey(ie);
              }
              (C || B).forEach(function(ie, Ee) {
                var ee = C && re(C[Ee]), Ee = B && re(B[Ee]);
                ce(ee, Ee) !== 0 && (ee != null && oe(ee), Ee != null && oe(Ee));
              });
            }))) : K ? (F = { from: (F = K.lower) !== null && F !== void 0 ? F : n.MIN_KEY, to: (F = K.upper) !== null && F !== void 0 ? F : n.MAX_KEY }, L.add(F), R.add(F)) : (R.add(s), L.add(s), h.indexes.forEach(function(q) {
              return x(q.name).add(s);
            })), l.mutate(w).then(function(q) {
              return !K || w.type !== "add" && w.type !== "put" || (R.addKeys(q.results), _ && _.forEach(function(Q) {
                for (var re = w.values.map(function(ee) {
                  return Q.extractKey(ee);
                }), oe = Q.keyPath.findIndex(function(ee) {
                  return ee === m.keyPath;
                }), ie = 0, Ze = q.results.length; ie < Ze; ++ie) re[ie][oe] = q.results[ie];
                x(Q.name).addKeys(re);
              })), A.mutatedParts = eo(A.mutatedParts || {}, T), q;
            });
          } }), b = function(x) {
            var I = x.query, x = I.index, I = I.range;
            return [x, new Re((x = I.lower) !== null && x !== void 0 ? x : n.MIN_KEY, (I = I.upper) !== null && I !== void 0 ? I : n.MAX_KEY)];
          }, O = { get: function(w) {
            return [m, new Re(w.key)];
          }, getMany: function(w) {
            return [m, new Re().addKeys(w.keys)];
          }, count: b, query: b, openCursor: b };
          return f(O).forEach(function(w) {
            P[w] = function(x) {
              var I = Y.subscr, C = !!I, B = ka(Y, l) && wa(w, x) ? x.obsSet = {} : I;
              if (C) {
                var A = function(F) {
                  return F = "idb://".concat(i, "/").concat(c, "/").concat(F), B[F] || (B[F] = new Re());
                }, T = A(""), R = A(":dels"), I = O[w](x), C = I[0], I = I[1];
                if ((w === "query" && C.isPrimaryKey && !x.values ? R : A(C.name || "")).add(I), !C.isPrimaryKey) {
                  if (w !== "count") {
                    var L = w === "query" && v && x.values && l.query(o(o({}, x), { values: !1 }));
                    return l[w].apply(this, arguments).then(function(F) {
                      if (w === "query") {
                        if (v && x.values) return L.then(function(re) {
                          return re = re.result, T.addKeys(re), F;
                        });
                        var H = x.values ? F.result.map(g) : F.result;
                        (x.values ? T : R).addKeys(H);
                      } else if (w === "openCursor") {
                        var q = F, Q = x.values;
                        return q && Object.create(q, { key: { get: function() {
                          return R.addKey(q.primaryKey), q.key;
                        } }, primaryKey: { get: function() {
                          var re = q.primaryKey;
                          return R.addKey(re), re;
                        } }, value: { get: function() {
                          return Q && T.addKey(q.primaryKey), q.value;
                        } } });
                      }
                      return F;
                    });
                  }
                  R.add(s);
                }
              }
              return l[w].apply(this, arguments);
            };
          }), P;
        } });
      } };
      function _a(n, i, s) {
        if (s.numFailures === 0) return i;
        if (i.type === "deleteRange") return null;
        var c = i.keys ? i.keys.length : "values" in i && i.values ? i.values.length : 1;
        return s.numFailures === c ? null : (i = o({}, i), d(i.keys) && (i.keys = i.keys.filter(function(l, h) {
          return !(h in s.failures);
        })), "values" in i && d(i.values) && (i.values = i.values.filter(function(l, h) {
          return !(h in s.failures);
        })), i);
      }
      function ci(n, i) {
        return s = n, ((c = i).lower === void 0 || (c.lowerOpen ? 0 < ce(s, c.lower) : 0 <= ce(s, c.lower))) && (n = n, (i = i).upper === void 0 || (i.upperOpen ? ce(n, i.upper) < 0 : ce(n, i.upper) <= 0));
        var s, c;
      }
      function Ca(n, i, O, c, l, h) {
        if (!O || O.length === 0) return n;
        var m = i.query.index, g = m.multiEntry, v = i.query.range, _ = c.schema.primaryKey.extractKey, P = m.extractKey, b = (m.lowLevelIndex || m).extractKey, O = O.reduce(function(w, x) {
          var I = w, C = [];
          if (x.type === "add" || x.type === "put") for (var B = new Re(), A = x.values.length - 1; 0 <= A; --A) {
            var T, R = x.values[A], L = _(R);
            B.hasKey(L) || (T = P(R), (g && d(T) ? T.some(function(q) {
              return ci(q, v);
            }) : ci(T, v)) && (B.addKey(L), C.push(R)));
          }
          switch (x.type) {
            case "add":
              var V = new Re().addKeys(i.values ? w.map(function(Q) {
                return _(Q);
              }) : w), I = w.concat(i.values ? C.filter(function(Q) {
                return Q = _(Q), !V.hasKey(Q) && (V.addKey(Q), !0);
              }) : C.map(function(Q) {
                return _(Q);
              }).filter(function(Q) {
                return !V.hasKey(Q) && (V.addKey(Q), !0);
              }));
              break;
            case "put":
              var K = new Re().addKeys(x.values.map(function(Q) {
                return _(Q);
              }));
              I = w.filter(function(Q) {
                return !K.hasKey(i.values ? _(Q) : Q);
              }).concat(i.values ? C : C.map(function(Q) {
                return _(Q);
              }));
              break;
            case "delete":
              var F = new Re().addKeys(x.keys);
              I = w.filter(function(Q) {
                return !F.hasKey(i.values ? _(Q) : Q);
              });
              break;
            case "deleteRange":
              var H = x.range;
              I = w.filter(function(Q) {
                return !ci(_(Q), H);
              });
          }
          return I;
        }, n);
        return O === n ? n : (O.sort(function(w, x) {
          return ce(b(w), b(x)) || ce(_(w), _(x));
        }), i.limit && i.limit < 1 / 0 && (O.length > i.limit ? O.length = i.limit : n.length === i.limit && O.length < i.limit && (l.dirty = !0)), h ? Object.freeze(O) : O);
      }
      function xa(n, i) {
        return ce(n.lower, i.lower) === 0 && ce(n.upper, i.upper) === 0 && !!n.lowerOpen == !!i.lowerOpen && !!n.upperOpen == !!i.upperOpen;
      }
      function Qu(n, i) {
        return function(s, c, l, h) {
          if (s === void 0) return c !== void 0 ? -1 : 0;
          if (c === void 0) return 1;
          if ((c = ce(s, c)) === 0) {
            if (l && h) return 0;
            if (l) return 1;
            if (h) return -1;
          }
          return c;
        }(n.lower, i.lower, n.lowerOpen, i.lowerOpen) <= 0 && 0 <= function(s, c, l, h) {
          if (s === void 0) return c !== void 0 ? 1 : 0;
          if (c === void 0) return -1;
          if ((c = ce(s, c)) === 0) {
            if (l && h) return 0;
            if (l) return -1;
            if (h) return 1;
          }
          return c;
        }(n.upper, i.upper, n.upperOpen, i.upperOpen);
      }
      function Gu(n, i, s, c) {
        n.subscribers.add(s), c.addEventListener("abort", function() {
          var l, h;
          n.subscribers.delete(s), n.subscribers.size === 0 && (l = n, h = i, setTimeout(function() {
            l.subscribers.size === 0 && He(h, l);
          }, 3e3));
        });
      }
      var Yu = { stack: "dbcore", level: 0, name: "Cache", create: function(n) {
        var i = n.schema.name;
        return o(o({}, n), { transaction: function(s, c, l) {
          var h, m, g = n.transaction(s, c, l);
          return c === "readwrite" && (m = (h = new AbortController()).signal, l = function(v) {
            return function() {
              if (h.abort(), c === "readwrite") {
                for (var _ = /* @__PURE__ */ new Set(), P = 0, b = s; P < b.length; P++) {
                  var O = b[P], w = lt["idb://".concat(i, "/").concat(O)];
                  if (w) {
                    var x = n.table(O), I = w.optimisticOps.filter(function(Q) {
                      return Q.trans === g;
                    });
                    if (g._explicit && v && g.mutatedParts) for (var C = 0, B = Object.values(w.queries.query); C < B.length; C++) for (var A = 0, T = (V = B[C]).slice(); A < T.length; A++) ti((K = T[A]).obsSet, g.mutatedParts) && (He(V, K), K.subscribers.forEach(function(Q) {
                      return _.add(Q);
                    }));
                    else if (0 < I.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(Q) {
                        return Q.trans !== g;
                      });
                      for (var R = 0, L = Object.values(w.queries.query); R < L.length; R++) for (var V, K, F, H = 0, q = (V = L[R]).slice(); H < q.length; H++) (K = q[H]).res != null && g.mutatedParts && (v && !K.dirty ? (F = Object.isFrozen(K.res), F = Ca(K.res, K.req, I, x, K, F), K.dirty ? (He(V, K), K.subscribers.forEach(function(Q) {
                        return _.add(Q);
                      })) : F !== K.res && (K.res = F, K.promise = z.resolve({ result: F }))) : (K.dirty && He(V, K), K.subscribers.forEach(function(Q) {
                        return _.add(Q);
                      })));
                    }
                  }
                }
                _.forEach(function(Q) {
                  return Q();
                });
              }
            };
          }, g.addEventListener("abort", l(!1), { signal: m }), g.addEventListener("error", l(!1), { signal: m }), g.addEventListener("complete", l(!0), { signal: m })), g;
        }, table: function(s) {
          var c = n.table(s), l = c.schema.primaryKey;
          return o(o({}, c), { mutate: function(h) {
            var m = Y.trans;
            if (l.outbound || m.db._options.cache === "disabled" || m.explicit || m.idbtrans.mode !== "readwrite") return c.mutate(h);
            var g = lt["idb://".concat(i, "/").concat(s)];
            return g ? (m = c.mutate(h), h.type !== "add" && h.type !== "put" || !(50 <= h.values.length || ui(l, h).some(function(v) {
              return v == null;
            })) ? (g.optimisticOps.push(h), h.mutatedParts && ro(h.mutatedParts), m.then(function(v) {
              0 < v.numFailures && (He(g.optimisticOps, h), (v = _a(0, h, v)) && g.optimisticOps.push(v), h.mutatedParts && ro(h.mutatedParts));
            }), m.catch(function() {
              He(g.optimisticOps, h), h.mutatedParts && ro(h.mutatedParts);
            })) : m.then(function(v) {
              var _ = _a(0, o(o({}, h), { values: h.values.map(function(P, b) {
                var O;
                return v.failures[b] ? P : (P = (O = l.keyPath) !== null && O !== void 0 && O.includes(".") ? Le(P) : o({}, P), we(P, l.keyPath, v.results[b]), P);
              }) }), v);
              g.optimisticOps.push(_), queueMicrotask(function() {
                return h.mutatedParts && ro(h.mutatedParts);
              });
            }), m) : c.mutate(h);
          }, query: function(h) {
            if (!ka(Y, c) || !wa("query", h)) return c.query(h);
            var m = ((_ = Y.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", b = Y, g = b.requery, v = b.signal, _ = function(x, I, C, B) {
              var A = lt["idb://".concat(x, "/").concat(I)];
              if (!A) return [];
              if (!(I = A.queries[C])) return [null, !1, A, null];
              var T = I[(B.query ? B.query.index.name : null) || ""];
              if (!T) return [null, !1, A, null];
              switch (C) {
                case "query":
                  var R = T.find(function(L) {
                    return L.req.limit === B.limit && L.req.values === B.values && xa(L.req.query.range, B.query.range);
                  });
                  return R ? [R, !0, A, T] : [T.find(function(L) {
                    return ("limit" in L.req ? L.req.limit : 1 / 0) >= B.limit && (!B.values || L.req.values) && Qu(L.req.query.range, B.query.range);
                  }), !1, A, T];
                case "count":
                  return R = T.find(function(L) {
                    return xa(L.req.query.range, B.query.range);
                  }), [R, !!R, A, T];
              }
            }(i, s, "query", h), P = _[0], b = _[1], O = _[2], w = _[3];
            return P && b ? P.obsSet = h.obsSet : (b = c.query(h).then(function(x) {
              var I = x.result;
              if (P && (P.res = I), m) {
                for (var C = 0, B = I.length; C < B; ++C) Object.freeze(I[C]);
                Object.freeze(I);
              } else x.result = Le(I);
              return x;
            }).catch(function(x) {
              return w && P && He(w, P), Promise.reject(x);
            }), P = { obsSet: h.obsSet, promise: b, subscribers: /* @__PURE__ */ new Set(), type: "query", req: h, dirty: !1 }, w ? w.push(P) : (w = [P], (O = O || (lt["idb://".concat(i, "/").concat(s)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[h.query.index.name || ""] = w)), Gu(P, w, g, v), P.promise.then(function(x) {
              return { result: Ca(x.result, h, O == null ? void 0 : O.optimisticOps, c, P, m) };
            });
          } });
        } });
      } };
      function no(n, i) {
        return new Proxy(n, { get: function(s, c, l) {
          return c === "db" ? i : Reflect.get(s, c, l);
        } });
      }
      var $r = (Oe.prototype.version = function(n) {
        if (isNaN(n) || n < 0.1) throw new Z.Type("Given version is not a positive number");
        if (n = Math.round(10 * n) / 10, this.idbdb || this._state.isBeingOpened) throw new Z.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, n);
        var i = this._versions, s = i.filter(function(c) {
          return c._cfg.version === n;
        })[0];
        return s || (s = new this.Version(n), i.push(s), i.sort(Lu), s.stores({}), this._state.autoSchema = !1, s);
      }, Oe.prototype._whenReady = function(n) {
        var i = this;
        return this.idbdb && (this._state.openComplete || Y.letThrough || this._vip) ? n() : new z(function(s, c) {
          if (i._state.openComplete) return c(new Z.DatabaseClosed(i._state.dbOpenError));
          if (!i._state.isBeingOpened) {
            if (!i._state.autoOpen) return void c(new Z.DatabaseClosed());
            i.open().catch(ve);
          }
          i._state.dbReadyPromise.then(s, c);
        }).then(n);
      }, Oe.prototype.use = function(n) {
        var i = n.stack, s = n.create, c = n.level, l = n.name;
        return l && this.unuse({ stack: i, name: l }), n = this._middlewares[i] || (this._middlewares[i] = []), n.push({ stack: i, create: s, level: c ?? 10, name: l }), n.sort(function(h, m) {
          return h.level - m.level;
        }), this;
      }, Oe.prototype.unuse = function(n) {
        var i = n.stack, s = n.name, c = n.create;
        return i && this._middlewares[i] && (this._middlewares[i] = this._middlewares[i].filter(function(l) {
          return c ? l.create !== c : !!s && l.name !== s;
        })), this;
      }, Oe.prototype.open = function() {
        var n = this;
        return st(Nr, function() {
          return Vu(n);
        });
      }, Oe.prototype._close = function() {
        var n = this._state, i = Ct.indexOf(this);
        if (0 <= i && Ct.splice(i, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        n.isBeingOpened || (n.dbReadyPromise = new z(function(s) {
          n.dbReadyResolve = s;
        }), n.openCanceller = new z(function(s, c) {
          n.cancelOpen = c;
        }));
      }, Oe.prototype.close = function(s) {
        var i = (s === void 0 ? { disableAutoOpen: !0 } : s).disableAutoOpen, s = this._state;
        i ? (s.isBeingOpened && s.cancelOpen(new Z.DatabaseClosed()), this._close(), s.autoOpen = !1, s.dbOpenError = new Z.DatabaseClosed()) : (this._close(), s.autoOpen = this._options.autoOpen || s.isBeingOpened, s.openComplete = !1, s.dbOpenError = null);
      }, Oe.prototype.delete = function(n) {
        var i = this;
        n === void 0 && (n = { disableAutoOpen: !0 });
        var s = 0 < arguments.length && typeof arguments[0] != "object", c = this._state;
        return new z(function(l, h) {
          function m() {
            i.close(n);
            var g = i._deps.indexedDB.deleteDatabase(i.name);
            g.onsuccess = Ce(function() {
              var v, _, P;
              v = i._deps, _ = i.name, P = v.indexedDB, v = v.IDBKeyRange, Jo(P) || _ === qn || Xo(P, v).delete(_).catch(ve), l();
            }), g.onerror = gr(h), g.onblocked = i._fireOnBlocked;
          }
          if (s) throw new Z.InvalidArgument("Invalid closeOptions argument to db.delete()");
          c.isBeingOpened ? c.dbReadyPromise.then(m) : m();
        });
      }, Oe.prototype.backendDB = function() {
        return this.idbdb;
      }, Oe.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Oe.prototype.hasBeenClosed = function() {
        var n = this._state.dbOpenError;
        return n && n.name === "DatabaseClosed";
      }, Oe.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Oe.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Oe.prototype, "tables", { get: function() {
        var n = this;
        return f(this._allTables).map(function(i) {
          return n._allTables[i];
        });
      }, enumerable: !1, configurable: !0 }), Oe.prototype.transaction = function() {
        var n = (function(i, s, c) {
          var l = arguments.length;
          if (l < 2) throw new Z.InvalidArgument("Too few arguments");
          for (var h = new Array(l - 1); --l; ) h[l - 1] = arguments[l];
          return c = h.pop(), [i, hr(h), c];
        }).apply(this, arguments);
        return this._transaction.apply(this, n);
      }, Oe.prototype._transaction = function(n, i, s) {
        var c = this, l = Y.trans;
        l && l.db === this && n.indexOf("!") === -1 || (l = null);
        var h, m, g = n.indexOf("?") !== -1;
        n = n.replace("!", "").replace("?", "");
        try {
          if (m = i.map(function(_) {
            if (_ = _ instanceof c.Table ? _.name : _, typeof _ != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return _;
          }), n == "r" || n === Ko) h = Ko;
          else {
            if (n != "rw" && n != Fo) throw new Z.InvalidArgument("Invalid transaction mode: " + n);
            h = Fo;
          }
          if (l) {
            if (l.mode === Ko && h === Fo) {
              if (!g) throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              l = null;
            }
            l && m.forEach(function(_) {
              if (l && l.storeNames.indexOf(_) === -1) {
                if (!g) throw new Z.SubTransaction("Table " + _ + " not included in parent transaction.");
                l = null;
              }
            }), g && l && !l.active && (l = null);
          }
        } catch (_) {
          return l ? l._promise(null, function(P, b) {
            b(_);
          }) : Ie(_);
        }
        var v = (function _(P, b, O, w, x) {
          return z.resolve().then(function() {
            var I = Y.transless || Y, C = P._createTransaction(b, O, P._dbSchema, w);
            if (C.explicit = !0, I = { trans: C, transless: I }, w) C.idbtrans = w.idbtrans;
            else try {
              C.create(), C.idbtrans._explicit = !0, P._state.PR1398_maxLoop = 3;
            } catch (T) {
              return T.name === Ut.InvalidState && P.isOpen() && 0 < --P._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), P.close({ disableAutoOpen: !1 }), P.open().then(function() {
                return _(P, b, O, null, x);
              })) : Ie(T);
            }
            var B, A = ze(x);
            return A && _t(), I = z.follow(function() {
              var T;
              (B = x.call(C, C)) && (A ? (T = Lr.bind(null, null), B.then(T, T)) : typeof B.next == "function" && typeof B.throw == "function" && (B = ai(B)));
            }, I), (B && typeof B.then == "function" ? z.resolve(B).then(function(T) {
              return C.active ? T : Ie(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : I.then(function() {
              return B;
            })).then(function(T) {
              return w && C._resolve(), C._completion.then(function() {
                return T;
              });
            }).catch(function(T) {
              return C._reject(T), Ie(T);
            });
          });
        }).bind(null, this, h, m, l, s);
        return l ? l._promise(h, v, "lock") : Y.trans ? st(Y.transless, function() {
          return c._whenReady(v);
        }) : this._whenReady(v);
      }, Oe.prototype.table = function(n) {
        if (!S(this._allTables, n)) throw new Z.InvalidTable("Table ".concat(n, " does not exist"));
        return this._allTables[n];
      }, Oe);
      function Oe(n, i) {
        var s = this;
        this._middlewares = {}, this.verno = 0;
        var c = Oe.dependencies;
        this._options = i = o({ addons: Oe.addons, autoOpen: !0, indexedDB: c.indexedDB, IDBKeyRange: c.IDBKeyRange, cache: "cloned" }, i), this._deps = { indexedDB: i.indexedDB, IDBKeyRange: i.IDBKeyRange }, c = i.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, h, m, g, v, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: ve, dbReadyPromise: null, cancelOpen: ve, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: i.autoOpen };
        _.dbReadyPromise = new z(function(b) {
          _.dbReadyResolve = b;
        }), _.openCanceller = new z(function(b, O) {
          _.cancelOpen = O;
        }), this._state = _, this.name = n, this.on = Zt(this, "populate", "blocked", "versionchange", "close", { ready: [Wt, ve] }), this.on.ready.subscribe = M(this.on.ready.subscribe, function(b) {
          return function(O, w) {
            Oe.vip(function() {
              var x, I = s._state;
              I.openComplete ? (I.dbOpenError || z.resolve().then(O), w && b(O)) : I.onReadyBeingFired ? (I.onReadyBeingFired.push(O), w && b(O)) : (b(O), x = s, w || b(function C() {
                x.on.ready.unsubscribe(O), x.on.ready.unsubscribe(C);
              }));
            });
          };
        }), this.Collection = (l = this, Xt(Tu.prototype, function(B, C) {
          this.db = l;
          var w = ra, x = null;
          if (C) try {
            w = C();
          } catch (A) {
            x = A;
          }
          var I = B._ctx, C = I.table, B = C.hook.reading.fire;
          this._ctx = { table: C, index: I.index, isPrimKey: !I.index || C.schema.primKey.keyPath && I.index === C.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: I.or, valueMapper: B !== tt ? B : null };
        })), this.Table = (h = this, Xt(ia.prototype, function(b, O, w) {
          this.db = h, this._tx = w, this.name = b, this.schema = O, this.hook = h._allTables[b] ? h._allTables[b].hook : Zt(null, { creating: [Oo, ve], reading: [Io, tt], updating: [$o, ve], deleting: [Bo, ve] });
        })), this.Transaction = (m = this, Xt(Du.prototype, function(b, O, w, x, I) {
          var C = this;
          this.db = m, this.mode = b, this.storeNames = O, this.schema = w, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Zt(this, "complete", "error", "abort"), this.parent = I || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new z(function(B, A) {
            C._resolve = B, C._reject = A;
          }), this._completion.then(function() {
            C.active = !1, C.on.complete.fire();
          }, function(B) {
            var A = C.active;
            return C.active = !1, C.on.error.fire(B), C.parent ? C.parent._reject(B) : A && C.idbtrans && C.idbtrans.abort(), Ie(B);
          });
        })), this.Version = (g = this, Xt(qu.prototype, function(b) {
          this.db = g, this._cfg = { version: b, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (v = this, Xt(la.prototype, function(b, O, w) {
          if (this.db = v, this._ctx = { table: b, index: O === ":id" ? null : O, or: w }, this._cmp = this._ascending = ce, this._descending = function(x, I) {
            return ce(I, x);
          }, this._max = function(x, I) {
            return 0 < ce(x, I) ? x : I;
          }, this._min = function(x, I) {
            return ce(x, I) < 0 ? x : I;
          }, this._IDBKeyRange = v._deps.IDBKeyRange, !this._IDBKeyRange) throw new Z.MissingAPI();
        })), this.on("versionchange", function(b) {
          0 < b.newVersion ? console.warn("Another connection wants to upgrade database '".concat(s.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(s.name, "'. Closing db now to resume the delete request.")), s.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(b) {
          !b.newVersion || b.newVersion < b.oldVersion ? console.warn("Dexie.delete('".concat(s.name, "') was blocked")) : console.warn("Upgrade '".concat(s.name, "' blocked by other connection holding version ").concat(b.oldVersion / 10));
        }), this._maxKey = tn(i.IDBKeyRange), this._createTransaction = function(b, O, w, x) {
          return new s.Transaction(b, O, w, s._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(b) {
          s.on("blocked").fire(b), Ct.filter(function(O) {
            return O.name === s.name && O !== s && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(b);
          });
        }, this.use(Uu), this.use(Yu), this.use(Wu), this.use(Hu), this.use(zu);
        var P = new Proxy(this, { get: function(b, O, w) {
          if (O === "_vip") return !0;
          if (O === "table") return function(I) {
            return no(s.table(I), P);
          };
          var x = Reflect.get(b, O, w);
          return x instanceof ia ? no(x, P) : O === "tables" ? x.map(function(I) {
            return no(I, P);
          }) : O === "_createTransaction" ? function() {
            return no(x.apply(this, arguments), P);
          } : x;
        } });
        this.vip = P, c.forEach(function(b) {
          return b(s);
        });
      }
      var oo, Je = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Zu = (li.prototype.subscribe = function(n, i, s) {
        return this._subscribe(n && typeof n != "function" ? n : { next: n, error: i, complete: s });
      }, li.prototype[Je] = function() {
        return this;
      }, li);
      function li(n) {
        this._subscribe = n;
      }
      try {
        oo = { indexedDB: u.indexedDB || u.mozIndexedDB || u.webkitIndexedDB || u.msIndexedDB, IDBKeyRange: u.IDBKeyRange || u.webkitIDBKeyRange };
      } catch {
        oo = { indexedDB: null, IDBKeyRange: null };
      }
      function Sa(n) {
        var i, s = !1, c = new Zu(function(l) {
          var h = ze(n), m, g = !1, v = {}, _ = {}, P = { get closed() {
            return g;
          }, unsubscribe: function() {
            g || (g = !0, m && m.abort(), b && qr.storagemutated.unsubscribe(w));
          } };
          l.start && l.start(P);
          var b = !1, O = function() {
            return Lo(x);
          }, w = function(I) {
            eo(v, I), ti(_, v) && O();
          }, x = function() {
            var I, C, B;
            !g && oo.indexedDB && (v = {}, I = {}, m && m.abort(), m = new AbortController(), B = function(A) {
              var T = kt();
              try {
                h && _t();
                var R = Mr(n, A);
                return R = h ? R.finally(Lr) : R;
              } finally {
                T && wt();
              }
            }(C = { subscr: I, signal: m.signal, requery: O, querier: n, trans: null }), Promise.resolve(B).then(function(A) {
              s = !0, i = A, g || C.signal.aborted || (v = {}, function(T) {
                for (var R in T) if (S(T, R)) return;
                return 1;
              }(_ = I) || b || (qr(rn, w), b = !0), Lo(function() {
                return !g && l.next && l.next(A);
              }));
            }, function(A) {
              s = !1, ["DatabaseClosedError", "AbortError"].includes(A == null ? void 0 : A.name) || g || Lo(function() {
                g || l.error && l.error(A);
              });
            }));
          };
          return setTimeout(O, 0), P;
        });
        return c.hasValue = function() {
          return s;
        }, c.getValue = function() {
          return i;
        }, c;
      }
      var dt = $r;
      function di(n) {
        var i = Vr;
        try {
          Vr = !0, qr.storagemutated.fire(n), ii(n, !0);
        } finally {
          Vr = i;
        }
      }
      $(dt, o(o({}, vt), { delete: function(n) {
        return new dt(n, { addons: [] }).delete();
      }, exists: function(n) {
        return new dt(n, { addons: [] }).open().then(function(i) {
          return i.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(n) {
        try {
          return i = dt.dependencies, s = i.indexedDB, i = i.IDBKeyRange, (Jo(s) ? Promise.resolve(s.databases()).then(function(c) {
            return c.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== qn;
            });
          }) : Xo(s, i).toCollection().primaryKeys()).then(n);
        } catch {
          return Ie(new Z.MissingAPI());
        }
        var i, s;
      }, defineClass: function() {
        return function(n) {
          p(this, n);
        };
      }, ignoreTransaction: function(n) {
        return Y.trans ? st(Y.transless, n) : n();
      }, vip: ei, async: function(n) {
        return function() {
          try {
            var i = ai(n.apply(this, arguments));
            return i && typeof i.then == "function" ? i : z.resolve(i);
          } catch (s) {
            return Ie(s);
          }
        };
      }, spawn: function(n, i, s) {
        try {
          var c = ai(n.apply(s, i || []));
          return c && typeof c.then == "function" ? c : z.resolve(c);
        } catch (l) {
          return Ie(l);
        }
      }, currentTransaction: { get: function() {
        return Y.trans || null;
      } }, waitFor: function(n, i) {
        return i = z.resolve(typeof n == "function" ? dt.ignoreTransaction(n) : n).timeout(i || 6e4), Y.trans ? Y.trans.waitFor(i) : i;
      }, Promise: z, debug: { get: function() {
        return Xe;
      }, set: function(n) {
        Tn(n);
      } }, derive: N, extend: p, props: $, override: M, Events: Zt, on: qr, liveQuery: Sa, extendObservabilitySet: eo, getByKeyPath: de, setByKeyPath: we, delByKeyPath: function(n, i) {
        typeof i == "string" ? we(n, i, void 0) : "length" in i && [].map.call(i, function(s) {
          we(n, s, void 0);
        });
      }, shallowClone: ye, deepClone: Le, getObjectDiff: si, cmp: ce, asap: me, minKey: -1 / 0, addons: [], connections: Ct, errnames: Ut, dependencies: oo, cache: lt, semVer: "4.0.10", version: "4.0.10".split(".").map(function(n) {
        return parseInt(n);
      }).reduce(function(n, i, s) {
        return n + i / Math.pow(10, 2 * s);
      }) })), dt.maxKey = tn(dt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (qr(rn, function(n) {
        Vr || (n = new CustomEvent(zo, { detail: n }), Vr = !0, dispatchEvent(n), Vr = !1);
      }), addEventListener(zo, function(n) {
        n = n.detail, Vr || di(n);
      }));
      var Pt, Vr = !1, Pa = function() {
      };
      return typeof BroadcastChannel < "u" && ((Pa = function() {
        (Pt = new BroadcastChannel(zo)).onmessage = function(n) {
          return n.data && di(n.data);
        };
      })(), typeof Pt.unref == "function" && Pt.unref(), qr(rn, function(n) {
        Vr || Pt.postMessage(n);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(n) {
        if (!$r.disableBfCache && n.persisted) {
          Xe && console.debug("Dexie: handling persisted pagehide"), Pt != null && Pt.close();
          for (var i = 0, s = Ct; i < s.length; i++) s[i].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(n) {
        !$r.disableBfCache && n.persisted && (Xe && console.debug("Dexie: handling persisted pageshow"), Pa(), di({ all: new Re(-1 / 0, [[]]) }));
      })), z.rejectionMapper = function(n, i) {
        return !n || n instanceof nr || n instanceof TypeError || n instanceof SyntaxError || !n.name || !An[n.name] ? n : (i = new An[n.name](i || n.message, n), "stack" in n && j(i, "stack", { get: function() {
          return this.inner.stack;
        } }), i);
      }, Tn(Xe), o($r, Object.freeze({ __proto__: null, Dexie: $r, liveQuery: Sa, Entity: ta, cmp: ce, PropModSymbol: Br, PropModification: Jt, replacePrefix: function(n, i) {
        return new Jt({ replacePrefix: [n, i] });
      }, add: function(n) {
        return new Jt({ add: n });
      }, remove: function(n) {
        return new Jt({ remove: n });
      }, default: $r, RangeSet: Re, mergeRanges: an, rangesOverlap: ma }), { default: $r }), $r;
    });
  }(fo)), fo.exports;
}
var vl = yl();
const Pi = /* @__PURE__ */ gl(vl), Va = Symbol.for("Dexie"), Ii = globalThis[Va] || (globalThis[Va] = Pi);
if (Pi.semVer !== Ii.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Pi.semVer} and ${Ii.semVer}`);
const ht = class ht extends Ii {
  constructor() {
    super("devkit_db");
    ao(this, "icon");
    ao(this, "translation");
    this.version(1).stores({
      icon: "&iconName , iconContent",
      translation: "&localeKey , messages"
    });
  }
  static getInstance() {
    return ht.instance || (ht.instance = new ht()), ht.instance;
  }
};
ao(ht, "instance", null);
let Oi = ht;
const Bi = Oi.getInstance(), ng = /* @__PURE__ */ Es({
  __name: "AppIcon",
  props: {
    icon: { default: "default" },
    size: { default: "small" },
    iconType: { default: "svg" },
    color: { default: "var(--p-primary-contrast-color)" }
  },
  setup(e) {
    const r = oc("isIconsLoaded") || jr(!1), t = e;
    ic();
    const o = {
      small: "1.5rem",
      medium: "2.25rem",
      large: "3rem"
    }, a = ac(() => {
      if (f.value == "default" || f.value == "") return f.value;
      try {
        const E = new DOMParser().parseFromString(f.value, "image/svg+xml").querySelector("svg");
        return E ? (E.setAttribute("width", o[t.size]), E.setAttribute("height", o[t.size]), t.color && E.setAttribute("fill", t.color), E.setAttribute("stroke", t.color || "currentColor"), E.outerHTML) : f.value;
      } catch {
        return f.value;
      }
    }), u = sn("span", {
      key: t.icon,
      class: `pi pi-${t.icon}`,
      style: {
        fontSize: o[t.size],
        key: t.icon,
        color: t.color || "currentColor"
      }
    }), f = jr(""), d = () => {
      console.log("getting from db"), Bi.icon.get(t.icon).then((S) => {
        if (!S) {
          f.value = "default";
          return;
        }
        f.value = S.iconContent, console.log("icon is", S);
      }).catch((S) => {
        f.value = "default";
      });
    }, p = () => (d(), sn("span", {
      class: `app-icon ${t.size}`,
      attrs: t.color,
      key: t.icon,
      innerHTML: a.value
    })), y = () => r.value ? p() : sn("h2", "loading"), k = () => [
      sn("h2", f.value),
      sn("h2", "hello"),
      t.iconType == "primevue" ? u : y()
    ];
    return (S, $) => (fe(), wr(Xr(k)));
  }
}), kl = {};
function wl(e, r) {
  return fe(), xe("h2", null, "app image again");
}
const og = /* @__PURE__ */ zt(kl, [["render", wl]]);
function Ha() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return zi(e);
}
var Ur = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(r) {
    return this._loadedStyleNames.has(r);
  },
  setLoadedStyleName: function(r) {
    this._loadedStyleNames.add(r);
  },
  deleteLoadedStyleName: function(r) {
    this._loadedStyleNames.delete(r);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
}, za = Se.extend({
  name: "common"
});
function vn(e) {
  "@babel/helpers - typeof";
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, vn(e);
}
function _l(e) {
  return Gs(e) || Cl(e) || Qs(e) || Ws();
}
function Cl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function un(e, r) {
  return Gs(e) || xl(e, r) || Qs(e, r) || Ws();
}
function Ws() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Qs(e, r) {
  if (e) {
    if (typeof e == "string") return Ua(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ua(e, r) : void 0;
  }
}
function Ua(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function xl(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, a, u, f, d = [], p = !0, y = !1;
    try {
      if (u = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t) return;
        p = !1;
      } else for (; !(p = (o = u.call(t)).done) && (d.push(o.value), d.length !== r); p = !0) ;
    } catch (k) {
      y = !0, a = k;
    } finally {
      try {
        if (!p && t.return != null && (f = t.return(), Object(f) !== f)) return;
      } finally {
        if (y) throw a;
      }
    }
    return d;
  }
}
function Gs(e) {
  if (Array.isArray(e)) return e;
}
function Wa(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ue(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Wa(Object(t), !0).forEach(function(o) {
      hn(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Wa(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function hn(e, r, t) {
  return (r = Sl(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Sl(e) {
  var r = Pl(e, "string");
  return vn(r) == "symbol" ? r : r + "";
}
function Pl(e, r) {
  if (vn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (vn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Co = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(r) {
        r || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(r) {
        var t = this;
        r ? (this._loadScopedThemeStyles(r), this._themeChangeListener(function() {
          return t._loadScopedThemeStyles(r);
        })) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  $attrSelector: void 0,
  beforeCreate: function() {
    var r, t, o, a, u, f, d, p, y, k, S, $ = (r = this.pt) === null || r === void 0 ? void 0 : r._usept, E = $ ? (t = this.pt) === null || t === void 0 || (t = t.originalValue) === null || t === void 0 ? void 0 : t[this.$.type.name] : void 0, j = $ ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (a = j || E) === null || a === void 0 || (a = a.hooks) === null || a === void 0 || (u = a.onBeforeCreate) === null || u === void 0 || u.call(a);
    var N = (f = this.$primevueConfig) === null || f === void 0 || (f = f.pt) === null || f === void 0 ? void 0 : f._usept, G = N ? (d = this.$primevue) === null || d === void 0 || (d = d.config) === null || d === void 0 || (d = d.pt) === null || d === void 0 ? void 0 : d.originalValue : void 0, J = N ? (p = this.$primevue) === null || p === void 0 || (p = p.config) === null || p === void 0 || (p = p.pt) === null || p === void 0 ? void 0 : p.value : (y = this.$primevue) === null || y === void 0 || (y = y.config) === null || y === void 0 ? void 0 : y.pt;
    (k = J || G) === null || k === void 0 || (k = k[this.$.type.name]) === null || k === void 0 || (k = k.hooks) === null || k === void 0 || (S = k.onBeforeCreate) === null || S === void 0 || S.call(k), this.$attrSelector = zi("pc");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this.rootEl = dr(this.$el, '[data-pc-name="'.concat(cr(this.$.type.name), '"]')), this.rootEl && (this.$attrSelector && !this.rootEl.hasAttribute(this.$attrSelector) && this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = ue({
      name: this.$.type.name,
      attrSelector: this.$attrSelector
    }, this.$params)), this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(r) {
      if (!this.$options.hostName) {
        var t = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(r)), o = this._useDefaultPT(this._getOptionValue, "hooks.".concat(r));
        t == null || t(), o == null || o();
      }
    },
    _mergeProps: function(r) {
      for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        o[a - 1] = arguments[a];
      return Vi(r) ? r.apply(void 0, o) : le.apply(void 0, o);
    },
    _loadStyles: function() {
      var r = this, t = function() {
        Ur.isStyleNameLoaded("base") || (Se.loadCSS(r.$styleOptions), r._loadGlobalStyles(), Ur.setLoadedStyleName("base")), r._loadThemeStyles();
      };
      t(), this._themeChangeListener(t);
    },
    _loadCoreStyles: function() {
      var r, t;
      !Ur.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (t = this.$style) !== null && t !== void 0 && t.name && (za.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), Ur.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var r = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      ne(r) && Se.load(r, ue({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var r, t;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!ke.isStyleNameLoaded("common")) {
          var o, a, u = ((o = this.$style) === null || o === void 0 || (a = o.getCommonTheme) === null || a === void 0 ? void 0 : a.call(o)) || {}, f = u.primitive, d = u.semantic, p = u.global, y = u.style;
          Se.load(f == null ? void 0 : f.css, ue({
            name: "primitive-variables"
          }, this.$styleOptions)), Se.load(d == null ? void 0 : d.css, ue({
            name: "semantic-variables"
          }, this.$styleOptions)), Se.load(p == null ? void 0 : p.css, ue({
            name: "global-variables"
          }, this.$styleOptions)), Se.loadTheme(ue({
            name: "global-style"
          }, this.$styleOptions), y), ke.setLoadedStyleName("common");
        }
        if (!ke.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (t = this.$style) !== null && t !== void 0 && t.name) {
          var k, S, $, E, j = ((k = this.$style) === null || k === void 0 || (S = k.getComponentTheme) === null || S === void 0 ? void 0 : S.call(k)) || {}, N = j.css, G = j.style;
          ($ = this.$style) === null || $ === void 0 || $.load(N, ue({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (E = this.$style) === null || E === void 0 || E.loadTheme(ue({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), G), ke.setLoadedStyleName(this.$style.name);
        }
        if (!ke.isStyleNameLoaded("layer-order")) {
          var J, X, M = (J = this.$style) === null || J === void 0 || (X = J.getLayerOrderThemeCSS) === null || X === void 0 ? void 0 : X.call(J);
          Se.load(M, ue({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), ke.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(r) {
      var t, o, a, u = ((t = this.$style) === null || t === void 0 || (o = t.getPresetTheme) === null || o === void 0 ? void 0 : o.call(t, r, "[".concat(this.$attrSelector, "]"))) || {}, f = u.css, d = (a = this.$style) === null || a === void 0 ? void 0 : a.load(f, ue({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = d.el;
    },
    _unloadScopedThemeStyles: function() {
      var r;
      (r = this.scopedStyleEl) === null || r === void 0 || (r = r.value) === null || r === void 0 || r.remove();
    },
    _themeChangeListener: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Ur.clearLoadedStyleNames(), ur.on("theme:change", r);
    },
    _getHostInstance: function(r) {
      return r ? this.$options.hostName ? r.$.type.name === this.$options.hostName ? r : this._getHostInstance(r.$parentInstance) : r.$parentInstance : void 0;
    },
    _getPropValue: function(r) {
      var t;
      return this[r] || ((t = this._getHostInstance(this)) === null || t === void 0 ? void 0 : t[r]);
    },
    _getOptionValue: function(r) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Hi(r, t, o);
    },
    _getPTValue: function() {
      var r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, f = /./g.test(o) && !!a[o.split(".")[0]], d = this._getPropValue("ptOptions") || ((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, p = d.mergeSections, y = p === void 0 ? !0 : p, k = d.mergeProps, S = k === void 0 ? !1 : k, $ = u ? f ? this._useGlobalPT(this._getPTClassValue, o, a) : this._useDefaultPT(this._getPTClassValue, o, a) : void 0, E = f ? void 0 : this._getPTSelf(t, this._getPTClassValue, o, ue(ue({}, a), {}, {
        global: $ || {}
      })), j = this._getPTDatasets(o);
      return y || !y && E ? S ? this._mergeProps(S, $, E, j) : ue(ue(ue({}, $), E), j) : ue(ue({}, E), j);
    },
    _getPTSelf: function() {
      for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
        o[a - 1] = arguments[a];
      return le(
        this._usePT.apply(this, [this._getPT(r, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", a = "data-pc-", u = o === "root" && ne((r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"]);
      return o !== "transition" && ue(ue({}, o === "root" && ue(ue(hn({}, "".concat(a, "name"), cr(u ? (t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"] : this.$.type.name)), u && hn({}, "".concat(a, "extend"), cr(this.$.type.name))), Us() && hn({}, "".concat(this.$attrSelector), ""))), {}, hn({}, "".concat(a, "section"), cr(o)));
    },
    _getPTClassValue: function() {
      var r = this._getOptionValue.apply(this, arguments);
      return We(r) || wo(r) ? {
        class: r
      } : r;
    },
    _getPT: function(r) {
      var t = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", a = arguments.length > 2 ? arguments[2] : void 0, u = function(d) {
        var p, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, k = a ? a(d) : d, S = cr(o), $ = cr(t.$name);
        return (p = y ? S !== $ ? k == null ? void 0 : k[S] : void 0 : k == null ? void 0 : k[S]) !== null && p !== void 0 ? p : k;
      };
      return r != null && r.hasOwnProperty("_usept") ? {
        _usept: r._usept,
        originalValue: u(r.originalValue),
        value: u(r.value)
      } : u(r, !0);
    },
    _usePT: function(r, t, o, a) {
      var u = function(N) {
        return t(N, o, a);
      };
      if (r != null && r.hasOwnProperty("_usept")) {
        var f, d = r._usept || ((f = this.$primevueConfig) === null || f === void 0 ? void 0 : f.ptOptions) || {}, p = d.mergeSections, y = p === void 0 ? !0 : p, k = d.mergeProps, S = k === void 0 ? !1 : k, $ = u(r.originalValue), E = u(r.value);
        return $ === void 0 && E === void 0 ? void 0 : We(E) ? E : We($) ? $ : y || !y && E ? S ? this._mergeProps(S, $, E) : ue(ue({}, $), E) : E;
      }
      return u(r);
    },
    _useGlobalPT: function(r, t, o) {
      return this._usePT(this.globalPT, r, t, o);
    },
    _useDefaultPT: function(r, t, o) {
      return this._usePT(this.defaultPT, r, t, o);
    },
    ptm: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, r, ue(ue({}, this.$params), t));
    },
    ptmi: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return le(this.$_attrsWithoutPT, this.ptm(r, t));
    },
    ptmo: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(r, t, ue({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, r, ue(ue({}, this.$params), t));
    },
    sx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (t) {
        var a = this._getOptionValue(this.$style.inlineStyles, r, ue(ue({}, this.$params), o)), u = this._getOptionValue(za.inlineStyles, r, ue(ue({}, this.$params), o));
        return [u, a];
      }
    }
  },
  computed: {
    globalPT: function() {
      var r, t = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(o) {
        return Ve(o, {
          instance: t
        });
      });
    },
    defaultPT: function() {
      var r, t = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(o) {
        return t._getOptionValue(o, t.$name, ue({}, t.$params)) || Ve(o, ue({}, t.$params));
      });
    },
    isUnstyled: function() {
      var r;
      return this.unstyled !== void 0 ? this.unstyled : (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.unstyled;
    },
    $inProps: function() {
      var r, t = Object.keys(((r = this.$.vnode) === null || r === void 0 ? void 0 : r.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var a = un(o, 1), u = a[0];
        return t == null ? void 0 : t.includes(u);
      }));
    },
    $theme: function() {
      var r;
      return (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.theme;
    },
    $style: function() {
      return ue(ue({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadTheme: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var r;
      return {
        nonce: (r = this.$primevueConfig) === null || r === void 0 || (r = r.csp) === null || r === void 0 ? void 0 : r.nonce
      };
    },
    $primevueConfig: function() {
      var r;
      return (r = this.$primevue) === null || r === void 0 ? void 0 : r.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var r = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: r,
          props: r == null ? void 0 : r.$props,
          state: r == null ? void 0 : r.$data,
          attrs: r == null ? void 0 : r.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var t = un(r, 1), o = t[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(r, t) {
        var o = un(t, 2), a = o[0], u = o[1], f = a.split(":"), d = _l(f), p = d.slice(1);
        return p == null || p.reduce(function(y, k, S, $) {
          return !y[k] && (y[k] = S === $.length - 1 ? u : {}), y[k];
        }, r), r;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var t = un(r, 1), o = t[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(r, t) {
        var o = un(t, 2), a = o[0], u = o[1];
        return r[a] = u, r;
      }, {});
    }
  }
}, Il = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, Ol = Se.extend({
  name: "baseicon",
  css: Il
});
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, kn(e);
}
function Qa(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Ga(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Qa(Object(t), !0).forEach(function(o) {
      Bl(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qa(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Bl(e, r, t) {
  return (r = $l(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function $l(e) {
  var r = Al(e, "string");
  return kn(r) == "symbol" ? r : r + "";
}
function Al(e, r) {
  if (kn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (kn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Ys = {
  name: "BaseIcon",
  extends: Co,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: Ol,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var r = et(this.label);
      return Ga(Ga({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: r ? void 0 : "img",
        "aria-label": r ? void 0 : this.label,
        "aria-hidden": r
      });
    }
  }
}, Ui = {
  name: "ChevronDownIcon",
  extends: Ys
};
function Tl(e, r, t, o, a, u) {
  return fe(), xe("svg", le({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), r[0] || (r[0] = [fr("path", {
    d: "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Ui.render = Tl;
var Wi = {
  name: "ChevronRightIcon",
  extends: Ys
};
function Rl(e, r, t, o, a, u) {
  return fe(), xe("svg", le({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), r[0] || (r[0] = [fr("path", {
    d: "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",
    fill: "currentColor"
  }, null, -1)]), 16);
}
Wi.render = Rl;
var El = function(r) {
  var t = r.dt;
  return `
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: `.concat(t("panelmenu.gap"), `;
}

.p-panelmenu-panel {
    background: `).concat(t("panelmenu.panel.background"), `;
    border-width: `).concat(t("panelmenu.panel.border.width"), `;
    border-style: solid;
    border-color: `).concat(t("panelmenu.panel.border.color"), `;
    color: `).concat(t("panelmenu.panel.color"), `;
    border-radius: `).concat(t("panelmenu.panel.border.radius"), `;
    padding: `).concat(t("panelmenu.panel.padding"), `;
}

.p-panelmenu-panel:first-child {
    border-width: `).concat(t("panelmenu.panel.first.border.width"), `;
    border-start-start-radius: `).concat(t("panelmenu.panel.first.top.border.radius"), `;
    border-start-end-radius: `).concat(t("panelmenu.panel.first.top.border.radius"), `;
}

.p-panelmenu-panel:last-child {
    border-width: `).concat(t("panelmenu.panel.last.border.width"), `;
    border-end-start-radius: `).concat(t("panelmenu.panel.last.bottom.border.radius"), `;
    border-end-end-radius: `).concat(t("panelmenu.panel.last.bottom.border.radius"), `;
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: `).concat(t("panelmenu.item.border.radius"), `;
    transition: background `).concat(t("panelmenu.transition.duration"), ", color ").concat(t("panelmenu.transition.duration"), ", outline-color ").concat(t("panelmenu.transition.duration"), ", box-shadow ").concat(t("panelmenu.transition.duration"), `;
    outline-color: transparent;
    color: `).concat(t("panelmenu.item.color"), `;
}

.p-panelmenu-header-link {
    display: flex;
    gap: `).concat(t("panelmenu.item.gap"), `;
    padding: `).concat(t("panelmenu.item.padding"), `;
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.icon.color"), `;
}

.p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.color"), `;
}

.p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: `).concat(t("panelmenu.item.focus.background"), `;
    color: `).concat(t("panelmenu.item.focus.color"), `;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"), `;
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"), `;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: `).concat(t("panelmenu.item.focus.background"), `;
    color: `).concat(t("panelmenu.item.focus.color"), `;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"), `;
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"), `;
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 `).concat(t("panelmenu.submenu.indent"), `;
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 `).concat(t("panelmenu.submenu.indent"), ` 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: `).concat(t("panelmenu.item.gap"), `;
    padding: `).concat(t("panelmenu.item.padding"), `;
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: `).concat(t("panelmenu.item.border.radius"), `;
    transition: background `).concat(t("panelmenu.transition.duration"), ", color ").concat(t("panelmenu.transition.duration"), ", outline-color ").concat(t("panelmenu.transition.duration"), ", box-shadow ").concat(t("panelmenu.transition.duration"), `;
    color: `).concat(t("panelmenu.item.color"), `;
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: `).concat(t("panelmenu.item.focus.background"), `;
    color: `).concat(t("panelmenu.item.focus.color"), `;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.focus.color"), `;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"), `;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: `).concat(t("panelmenu.item.focus.background"), `;
    color: `).concat(t("panelmenu.item.focus.color"), `;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: `).concat(t("panelmenu.item.icon.focus.color"), `;
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: `).concat(t("panelmenu.submenu.icon.focus.color"), `;
}
`);
}, Dl = {
  root: "p-panelmenu p-component",
  panel: "p-panelmenu-panel",
  header: function(r) {
    var t = r.instance, o = r.item;
    return ["p-panelmenu-header", {
      "p-panelmenu-header-active": t.isItemActive(o) && !!o.items,
      "p-disabled": t.isItemDisabled(o)
    }];
  },
  headerContent: "p-panelmenu-header-content",
  headerLink: "p-panelmenu-header-link",
  headerIcon: "p-panelmenu-header-icon",
  headerLabel: "p-panelmenu-header-label",
  contentContainer: "p-panelmenu-content-container",
  content: "p-panelmenu-content",
  rootList: "p-panelmenu-root-list",
  item: function(r) {
    var t = r.instance, o = r.processedItem;
    return ["p-panelmenu-item", {
      "p-focus": t.isItemFocused(o),
      "p-disabled": t.isItemDisabled(o)
    }];
  },
  itemContent: "p-panelmenu-item-content",
  itemLink: "p-panelmenu-item-link",
  itemIcon: "p-panelmenu-item-icon",
  itemLabel: "p-panelmenu-item-label",
  submenuIcon: "p-panelmenu-submenu-icon",
  submenu: "p-panelmenu-submenu",
  separator: "p-menuitem-separator"
}, jl = Se.extend({
  name: "panelmenu",
  theme: El,
  classes: Dl
});
function wn(e) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, wn(e);
}
function Ya(e, r) {
  return Kl(e) || Ll(e, r) || Ml(e, r) || Nl();
}
function Nl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ml(e, r) {
  if (e) {
    if (typeof e == "string") return Za(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Za(e, r) : void 0;
  }
}
function Za(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function Ll(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, a, u, f, d = [], p = !0, y = !1;
    try {
      if (u = (t = t.call(e)).next, r !== 0) for (; !(p = (o = u.call(t)).done) && (d.push(o.value), d.length !== r); p = !0) ;
    } catch (k) {
      y = !0, a = k;
    } finally {
      try {
        if (!p && t.return != null && (f = t.return(), Object(f) !== f)) return;
      } finally {
        if (y) throw a;
      }
    }
    return d;
  }
}
function Kl(e) {
  if (Array.isArray(e)) return e;
}
function Xa(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function he(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Xa(Object(t), !0).forEach(function(o) {
      $i(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xa(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function $i(e, r, t) {
  return (r = Fl(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Fl(e) {
  var r = ql(e, "string");
  return wn(r) == "symbol" ? r : r + "";
}
function ql(e, r) {
  if (wn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (wn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var ae = {
  _getMeta: function() {
    return [_r(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], Ve(_r(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(r, t) {
    var o, a, u;
    return (o = (r == null || (a = r.instance) === null || a === void 0 ? void 0 : a.$primevue) || (t == null || (u = t.ctx) === null || u === void 0 || (u = u.appContext) === null || u === void 0 || (u = u.config) === null || u === void 0 || (u = u.globalProperties) === null || u === void 0 ? void 0 : u.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: Hi,
  _getPTValue: function() {
    var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, d = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, p = function() {
      var X = ae._getOptionValue.apply(ae, arguments);
      return We(X) || wo(X) ? {
        class: X
      } : X;
    }, y = ((r = o.binding) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r.ptOptions) || ((t = o.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, k = y.mergeSections, S = k === void 0 ? !0 : k, $ = y.mergeProps, E = $ === void 0 ? !1 : $, j = d ? ae._useDefaultPT(o, o.defaultPT(), p, u, f) : void 0, N = ae._usePT(o, ae._getPT(a, o.$name), p, u, he(he({}, f), {}, {
      global: j || {}
    })), G = ae._getPTDatasets(o, u);
    return S || !S && N ? E ? ae._mergeProps(o, E, j, N, G) : he(he(he({}, j), N), G) : he(he({}, N), G);
  },
  _getPTDatasets: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return he(he({}, t === "root" && $i({}, "".concat(o, "name"), cr(r.$name))), {}, $i({}, "".concat(o, "section"), cr(t)));
  },
  _getPT: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, a = function(f) {
      var d, p = o ? o(f) : f, y = cr(t);
      return (d = p == null ? void 0 : p[y]) !== null && d !== void 0 ? d : p;
    };
    return r != null && r.hasOwnProperty("_usept") ? {
      _usept: r._usept,
      originalValue: a(r.originalValue),
      value: a(r.value)
    } : a(r);
  },
  _usePT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 ? arguments[4] : void 0, f = function(G) {
      return o(G, a, u);
    };
    if (t != null && t.hasOwnProperty("_usept")) {
      var d, p = t._usept || ((d = r.$primevueConfig) === null || d === void 0 ? void 0 : d.ptOptions) || {}, y = p.mergeSections, k = y === void 0 ? !0 : y, S = p.mergeProps, $ = S === void 0 ? !1 : S, E = f(t.originalValue), j = f(t.value);
      return E === void 0 && j === void 0 ? void 0 : We(j) ? j : We(E) ? E : k || !k && j ? $ ? ae._mergeProps(r, $, E, j) : he(he({}, E), j) : j;
    }
    return f(t);
  },
  _useDefaultPT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, u = arguments.length > 4 ? arguments[4] : void 0;
    return ae._usePT(r, t, o, a, u);
  },
  _loadStyles: function(r, t, o) {
    var a, u = ae._getConfig(t, o), f = {
      nonce: u == null || (a = u.csp) === null || a === void 0 ? void 0 : a.nonce
    };
    ae._loadCoreStyles(r.$instance, f), ae._loadThemeStyles(r.$instance, f), ae._loadScopedThemeStyles(r.$instance, f), ae._themeChangeListener(function() {
      return ae._loadThemeStyles(r.$instance, f);
    });
  },
  _loadCoreStyles: function() {
    var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    if (!Ur.isStyleNameLoaded((r = o.$style) === null || r === void 0 ? void 0 : r.name) && (t = o.$style) !== null && t !== void 0 && t.name) {
      var u;
      Se.loadCSS(a), (u = o.$style) === null || u === void 0 || u.loadCSS(a), Ur.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var r, t, o, a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    if (!(a != null && a.isUnstyled() || (a == null || (r = a.theme) === null || r === void 0 ? void 0 : r.call(a)) === "none")) {
      if (!ke.isStyleNameLoaded("common")) {
        var f, d, p = ((f = a.$style) === null || f === void 0 || (d = f.getCommonTheme) === null || d === void 0 ? void 0 : d.call(f)) || {}, y = p.primitive, k = p.semantic, S = p.global, $ = p.style;
        Se.load(y == null ? void 0 : y.css, he({
          name: "primitive-variables"
        }, u)), Se.load(k == null ? void 0 : k.css, he({
          name: "semantic-variables"
        }, u)), Se.load(S == null ? void 0 : S.css, he({
          name: "global-variables"
        }, u)), Se.loadTheme(he({
          name: "global-style"
        }, u), $), ke.setLoadedStyleName("common");
      }
      if (!ke.isStyleNameLoaded((t = a.$style) === null || t === void 0 ? void 0 : t.name) && (o = a.$style) !== null && o !== void 0 && o.name) {
        var E, j, N, G, J = ((E = a.$style) === null || E === void 0 || (j = E.getDirectiveTheme) === null || j === void 0 ? void 0 : j.call(E)) || {}, X = J.css, M = J.style;
        (N = a.$style) === null || N === void 0 || N.load(X, he({
          name: "".concat(a.$style.name, "-variables")
        }, u)), (G = a.$style) === null || G === void 0 || G.loadTheme(he({
          name: "".concat(a.$style.name, "-style")
        }, u), M), ke.setLoadedStyleName(a.$style.name);
      }
      if (!ke.isStyleNameLoaded("layer-order")) {
        var W, me, de = (W = a.$style) === null || W === void 0 || (me = W.getLayerOrderThemeCSS) === null || me === void 0 ? void 0 : me.call(W);
        Se.load(de, he({
          name: "layer-order",
          first: !0
        }, u)), ke.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, o = r.preset();
    if (o && r.$attrSelector) {
      var a, u, f, d = ((a = r.$style) === null || a === void 0 || (u = a.getPresetTheme) === null || u === void 0 ? void 0 : u.call(a, o, "[".concat(r.$attrSelector, "]"))) || {}, p = d.css, y = (f = r.$style) === null || f === void 0 ? void 0 : f.load(p, he({
        name: "".concat(r.$attrSelector, "-").concat(r.$style.name)
      }, t));
      r.scopedStyleEl = y.el;
    }
  },
  _themeChangeListener: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    Ur.clearLoadedStyleNames(), ur.on("theme:change", r);
  },
  _hook: function(r, t, o, a, u, f) {
    var d, p, y = "on".concat(wc(t)), k = ae._getConfig(a, u), S = o == null ? void 0 : o.$instance, $ = ae._usePT(S, ae._getPT(a == null || (d = a.value) === null || d === void 0 ? void 0 : d.pt, r), ae._getOptionValue, "hooks.".concat(y)), E = ae._useDefaultPT(S, k == null || (p = k.pt) === null || p === void 0 || (p = p.directives) === null || p === void 0 ? void 0 : p[r], ae._getOptionValue, "hooks.".concat(y)), j = {
      el: o,
      binding: a,
      vnode: u,
      prevVnode: f
    };
    $ == null || $(S, j), E == null || E(S, j);
  },
  _mergeProps: function() {
    for (var r = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++)
      o[a - 2] = arguments[a];
    return Vi(r) ? r.apply(void 0, o) : le.apply(void 0, o);
  },
  _extend: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(f, d, p, y, k) {
      var S, $, E, j;
      d._$instances = d._$instances || {};
      var N = ae._getConfig(p, y), G = d._$instances[r] || {}, J = et(G) ? he(he({}, t), t == null ? void 0 : t.methods) : {};
      d._$instances[r] = he(he({}, G), {}, {
        /* new instance variables to pass in directive methods */
        $name: r,
        $host: d,
        $binding: p,
        $modifiers: p == null ? void 0 : p.modifiers,
        $value: p == null ? void 0 : p.value,
        $el: G.$el || d || void 0,
        $style: he({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, t == null ? void 0 : t.style),
        $primevueConfig: N,
        $attrSelector: (S = d.$pd) === null || S === void 0 || (S = S[r]) === null || S === void 0 ? void 0 : S.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return ae._getPT(N == null ? void 0 : N.pt, void 0, function(M) {
            var W;
            return M == null || (W = M.directives) === null || W === void 0 ? void 0 : W[r];
          });
        },
        isUnstyled: function() {
          var M, W;
          return ((M = d.$instance) === null || M === void 0 || (M = M.$binding) === null || M === void 0 || (M = M.value) === null || M === void 0 ? void 0 : M.unstyled) !== void 0 ? (W = d.$instance) === null || W === void 0 || (W = W.$binding) === null || W === void 0 || (W = W.value) === null || W === void 0 ? void 0 : W.unstyled : N == null ? void 0 : N.unstyled;
        },
        theme: function() {
          var M;
          return (M = d.$instance) === null || M === void 0 || (M = M.$primevueConfig) === null || M === void 0 ? void 0 : M.theme;
        },
        preset: function() {
          var M;
          return (M = d.$instance) === null || M === void 0 || (M = M.$binding) === null || M === void 0 || (M = M.value) === null || M === void 0 ? void 0 : M.dt;
        },
        /* instance's methods */
        ptm: function() {
          var M, W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return ae._getPTValue(d.$instance, (M = d.$instance) === null || M === void 0 || (M = M.$binding) === null || M === void 0 || (M = M.value) === null || M === void 0 ? void 0 : M.pt, W, he({}, me));
        },
        ptmo: function() {
          var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", me = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return ae._getPTValue(d.$instance, M, W, me, !1);
        },
        cx: function() {
          var M, W, me = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", de = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (M = d.$instance) !== null && M !== void 0 && M.isUnstyled() ? void 0 : ae._getOptionValue((W = d.$instance) === null || W === void 0 || (W = W.$style) === null || W === void 0 ? void 0 : W.classes, me, he({}, de));
        },
        sx: function() {
          var M, W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, de = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return me ? ae._getOptionValue((M = d.$instance) === null || M === void 0 || (M = M.$style) === null || M === void 0 ? void 0 : M.inlineStyles, W, he({}, de)) : void 0;
        }
      }, J), d.$instance = d._$instances[r], ($ = (E = d.$instance)[f]) === null || $ === void 0 || $.call(E, d, p, y, k), d["$".concat(r)] = d.$instance, ae._hook(r, f, d, p, y, k), d.$pd || (d.$pd = {}), d.$pd[r] = he(he({}, (j = d.$pd) === null || j === void 0 ? void 0 : j[r]), {}, {
        name: r,
        instance: d.$instance
      });
    }, a = function(f) {
      var d, p, y, k, S, $ = (d = f.$instance) === null || d === void 0 ? void 0 : d.watch;
      $ == null || (p = $.config) === null || p === void 0 || p.call(f.$instance, (y = f.$instance) === null || y === void 0 ? void 0 : y.$primevueConfig), $t.on("config:change", function(E) {
        var j, N = E.newValue, G = E.oldValue;
        return $ == null || (j = $.config) === null || j === void 0 ? void 0 : j.call(f.$instance, N, G);
      }), $ == null || (k = $["config.ripple"]) === null || k === void 0 || k.call(f.$instance, (S = f.$instance) === null || S === void 0 || (S = S.$primevueConfig) === null || S === void 0 ? void 0 : S.ripple), $t.on("config:ripple:change", function(E) {
        var j, N = E.newValue, G = E.oldValue;
        return $ == null || (j = $["config.ripple"]) === null || j === void 0 ? void 0 : j.call(f.$instance, N, G);
      });
    };
    return {
      created: function(f, d, p, y) {
        f.$pd || (f.$pd = {}), f.$pd[r] = {
          name: r,
          attrSelector: zi("pd")
        }, o("created", f, d, p, y);
      },
      beforeMount: function(f, d, p, y) {
        ae._loadStyles(f, d, p), o("beforeMount", f, d, p, y), a(f);
      },
      mounted: function(f, d, p, y) {
        ae._loadStyles(f, d, p), o("mounted", f, d, p, y);
      },
      beforeUpdate: function(f, d, p, y) {
        o("beforeUpdate", f, d, p, y);
      },
      updated: function(f, d, p, y) {
        ae._loadStyles(f, d, p), o("updated", f, d, p, y);
      },
      beforeUnmount: function(f, d, p, y) {
        o("beforeUnmount", f, d, p, y);
      },
      unmounted: function(f, d, p, y) {
        var k;
        (k = f.$instance) === null || k === void 0 || (k = k.scopedStyleEl) === null || k === void 0 || (k = k.value) === null || k === void 0 || k.remove(), o("unmounted", f, d, p, y);
      }
    };
  },
  extend: function() {
    var r = ae._getMeta.apply(ae, arguments), t = Ya(r, 2), o = t[0], a = t[1];
    return he({
      extend: function() {
        var f = ae._getMeta.apply(ae, arguments), d = Ya(f, 2), p = d[0], y = d[1];
        return ae.extend(p, he(he(he({}, a), a == null ? void 0 : a.methods), y));
      }
    }, ae._extend(o, a));
  }
}, Vl = function(r) {
  var t = r.dt;
  return `
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(t("ripple.background"), `;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`);
}, Hl = {
  root: "p-ink"
}, zl = Se.extend({
  name: "ripple-directive",
  theme: Vl,
  classes: Hl
}), Ul = ae.extend({
  style: zl
});
function _n(e) {
  "@babel/helpers - typeof";
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, _n(e);
}
function Wl(e) {
  return Zl(e) || Yl(e) || Gl(e) || Ql();
}
function Ql() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gl(e, r) {
  if (e) {
    if (typeof e == "string") return Ai(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ai(e, r) : void 0;
  }
}
function Yl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zl(e) {
  if (Array.isArray(e)) return Ai(e);
}
function Ai(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function Ja(e, r, t) {
  return (r = Xl(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Xl(e) {
  var r = Jl(e, "string");
  return _n(r) == "symbol" ? r : r + "";
}
function Jl(e, r) {
  if (_n(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (_n(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var ed = Ul.extend("ripple", {
  watch: {
    "config.ripple": function(r) {
      r ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(r) {
    this.remove(r);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(r) {
      r.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(r) {
      r.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(r) {
      var t = Dc("span", Ja(Ja({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
      r.appendChild(t), this.$el = t;
    },
    remove: function(r) {
      var t = this.getInk(r);
      t && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(r), t.removeEventListener("animationend", this.onAnimationEnd), t.remove());
    },
    onMouseDown: function(r) {
      var t = this, o = r.currentTarget, a = this.getInk(o);
      if (!(!a || getComputedStyle(a, null).display === "none")) {
        if (!this.isUnstyled() && mi(a, "p-ink-active"), a.setAttribute("data-p-ink-active", "false"), !Ea(a) && !Da(a)) {
          var u = Math.max(Ec(o), Mc(o));
          a.style.height = u + "px", a.style.width = u + "px";
        }
        var f = Nc(o), d = r.pageX - f.left + document.body.scrollTop - Da(a) / 2, p = r.pageY - f.top + document.body.scrollLeft - Ea(a) / 2;
        a.style.top = p + "px", a.style.left = d + "px", !this.isUnstyled() && Rc(a, "p-ink-active"), a.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          a && (!t.isUnstyled() && mi(a, "p-ink-active"), a.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(r) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && mi(r.currentTarget, "p-ink-active"), r.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(r) {
      return r && r.children ? Wl(r.children).find(function(t) {
        return fn(t, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), rd = {
  name: "BasePanelMenu",
  extends: Co,
  props: {
    model: {
      type: Array,
      default: null
    },
    expandedKeys: {
      type: Object,
      default: null
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  style: jl,
  provide: function() {
    return {
      $pcPanelMenu: this,
      $parentInstance: this
    };
  }
}, Zs = {
  name: "PanelMenuSub",
  hostName: "PanelMenu",
  extends: Co,
  emits: ["item-toggle", "item-mousemove"],
  props: {
    panelId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    templates: {
      type: Object,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    },
    tabindex: {
      type: Number,
      default: -1
    }
  },
  methods: {
    getItemId: function(r) {
      return "".concat(this.panelId, "_").concat(r.key);
    },
    getItemKey: function(r) {
      return this.getItemId(r);
    },
    getItemProp: function(r, t, o) {
      return r && r.item ? Ve(r.item[t], o) : void 0;
    },
    getItemLabel: function(r) {
      return this.getItemProp(r, "label");
    },
    getPTOptions: function(r, t, o) {
      return this.ptm(r, {
        context: {
          item: t.item,
          index: o,
          active: this.isItemActive(t),
          focused: this.isItemFocused(t),
          disabled: this.isItemDisabled(t)
        }
      });
    },
    isItemActive: function(r) {
      return this.activeItemPath.some(function(t) {
        return t.key === r.key;
      });
    },
    isItemVisible: function(r) {
      return this.getItemProp(r, "visible") !== !1;
    },
    isItemDisabled: function(r) {
      return this.getItemProp(r, "disabled");
    },
    isItemFocused: function(r) {
      return this.focusedItemId === this.getItemId(r);
    },
    isItemGroup: function(r) {
      return ne(r.items);
    },
    onItemClick: function(r, t) {
      this.getItemProp(t, "command", {
        originalEvent: r,
        item: t.item
      }), this.$emit("item-toggle", {
        processedItem: t,
        expanded: !this.isItemActive(t)
      });
    },
    onItemToggle: function(r) {
      this.$emit("item-toggle", r);
    },
    onItemMouseMove: function(r, t) {
      this.$emit("item-mousemove", {
        originalEvent: r,
        processedItem: t
      });
    },
    getAriaSetSize: function() {
      var r = this;
      return this.items.filter(function(t) {
        return r.isItemVisible(t) && !r.getItemProp(t, "separator");
      }).length;
    },
    getAriaPosInset: function(r) {
      var t = this;
      return r - this.items.slice(0, r).filter(function(o) {
        return t.isItemVisible(o) && t.getItemProp(o, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(r, t) {
      return {
        action: le({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions("itemLink", r, t)),
        icon: le({
          class: [this.cx("itemIcon"), this.getItemProp(r, "icon")]
        }, this.getPTOptions("itemIcon", r, t)),
        label: le({
          class: this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", r, t)),
        submenuicon: le({
          class: this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", r, t))
      };
    }
  },
  components: {
    ChevronRightIcon: Wi,
    ChevronDownIcon: Ui
  },
  directives: {
    ripple: ed
  }
}, td = ["tabindex"], nd = ["id", "aria-label", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-focused", "data-p-disabled"], od = ["onClick", "onMousemove"], id = ["href", "target"];
function ad(e, r, t, o, a, u) {
  var f = Fi("PanelMenuSub", !0), d = sc("ripple");
  return fe(), xe("ul", {
    class: _i(e.cx("submenu")),
    tabindex: t.tabindex
  }, [(fe(!0), xe(Tt, null, Ds(t.items, function(p, y) {
    return fe(), xe(Tt, {
      key: u.getItemKey(p)
    }, [u.isItemVisible(p) && !u.getItemProp(p, "separator") ? (fe(), xe("li", le({
      key: 0,
      id: u.getItemId(p),
      class: [e.cx("item", {
        processedItem: p
      }), u.getItemProp(p, "class")],
      style: u.getItemProp(p, "style"),
      role: "treeitem",
      "aria-label": u.getItemLabel(p),
      "aria-expanded": u.isItemGroup(p) ? u.isItemActive(p) : void 0,
      "aria-level": t.level + 1,
      "aria-setsize": u.getAriaSetSize(),
      "aria-posinset": u.getAriaPosInset(y),
      ref_for: !0
    }, u.getPTOptions("item", p, y), {
      "data-p-focused": u.isItemFocused(p),
      "data-p-disabled": u.isItemDisabled(p)
    }), [fr("div", le({
      class: e.cx("itemContent"),
      onClick: function(S) {
        return u.onItemClick(S, p);
      },
      onMousemove: function(S) {
        return u.onItemMouseMove(S, p);
      },
      ref_for: !0
    }, u.getPTOptions("itemContent", p, y)), [t.templates.item ? (fe(), wr(Xr(t.templates.item), {
      key: 1,
      item: p.item,
      root: !1,
      active: u.isItemActive(p),
      hasSubmenu: u.isItemGroup(p),
      label: u.getItemLabel(p),
      props: u.getMenuItemProps(p, y)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"])) : Ci((fe(), xe("a", le({
      key: 0,
      href: u.getItemProp(p, "url"),
      class: e.cx("itemLink"),
      target: u.getItemProp(p, "target"),
      tabindex: "-1",
      ref_for: !0
    }, u.getPTOptions("itemLink", p, y)), [u.isItemGroup(p) ? (fe(), xe(Tt, {
      key: 0
    }, [t.templates.submenuicon ? (fe(), wr(Xr(t.templates.submenuicon), le({
      key: 0,
      class: e.cx("submenuIcon"),
      active: u.isItemActive(p),
      ref_for: !0
    }, u.getPTOptions("submenuIcon", p, y)), null, 16, ["class", "active"])) : (fe(), wr(Xr(u.isItemActive(p) ? "ChevronDownIcon" : "ChevronRightIcon"), le({
      key: 1,
      class: e.cx("submenuIcon"),
      ref_for: !0
    }, u.getPTOptions("submenuIcon", p, y)), null, 16, ["class"]))], 64)) : Er("", !0), t.templates.itemicon ? (fe(), wr(Xr(t.templates.itemicon), {
      key: 1,
      item: p.item,
      class: _i(e.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : u.getItemProp(p, "icon") ? (fe(), xe("span", le({
      key: 2,
      class: [e.cx("itemIcon"), u.getItemProp(p, "icon")],
      ref_for: !0
    }, u.getPTOptions("itemIcon", p, y)), null, 16)) : Er("", !0), fr("span", le({
      class: e.cx("itemLabel"),
      ref_for: !0
    }, u.getPTOptions("itemLabel", p, y)), qi(u.getItemLabel(p)), 17)], 16, id)), [[d]])], 16, od), Rt(js, le({
      name: "p-toggleable-content",
      ref_for: !0
    }, e.ptm("transition")), {
      default: Ns(function() {
        return [Ci(fr("div", le({
          class: e.cx("contentContainer"),
          ref_for: !0
        }, e.ptm("contentContainer")), [u.isItemVisible(p) && u.isItemGroup(p) ? (fe(), wr(f, le({
          key: 0,
          id: u.getItemId(p) + "_list",
          role: "group",
          panelId: t.panelId,
          focusedItemId: t.focusedItemId,
          items: p.items,
          level: t.level + 1,
          templates: t.templates,
          activeItemPath: t.activeItemPath,
          onItemToggle: u.onItemToggle,
          onItemMousemove: r[0] || (r[0] = function(k) {
            return e.$emit("item-mousemove", k);
          }),
          pt: e.pt,
          unstyled: e.unstyled,
          ref_for: !0
        }, e.ptm("submenu")), null, 16, ["id", "panelId", "focusedItemId", "items", "level", "templates", "activeItemPath", "onItemToggle", "pt", "unstyled"])) : Er("", !0)], 16), [[Ms, u.isItemActive(p)]])];
      }),
      _: 2
    }, 1040)], 16, nd)) : Er("", !0), u.isItemVisible(p) && u.getItemProp(p, "separator") ? (fe(), xe("li", le({
      key: 1,
      style: u.getItemProp(p, "style"),
      class: [e.cx("separator"), u.getItemProp(p, "class")],
      role: "separator",
      ref_for: !0
    }, e.ptm("separator")), null, 16)) : Er("", !0)], 64);
  }), 128))], 10, td);
}
Zs.render = ad;
function sd(e, r) {
  return dd(e) || ld(e, r) || cd(e, r) || ud();
}
function ud() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cd(e, r) {
  if (e) {
    if (typeof e == "string") return es(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? es(e, r) : void 0;
  }
}
function es(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function ld(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, a, u, f, d = [], p = !0, y = !1;
    try {
      if (u = (t = t.call(e)).next, r !== 0) for (; !(p = (o = u.call(t)).done) && (d.push(o.value), d.length !== r); p = !0) ;
    } catch (k) {
      y = !0, a = k;
    } finally {
      try {
        if (!p && t.return != null && (f = t.return(), Object(f) !== f)) return;
      } finally {
        if (y) throw a;
      }
    }
    return d;
  }
}
function dd(e) {
  if (Array.isArray(e)) return e;
}
var Xs = {
  name: "PanelMenuList",
  hostName: "PanelMenu",
  extends: Co,
  emits: ["item-toggle", "header-focus"],
  props: {
    panelId: {
      type: String,
      default: null
    },
    items: {
      type: Array,
      default: null
    },
    templates: {
      type: Object,
      default: null
    },
    expandedKeys: {
      type: Object,
      default: null
    }
  },
  searchTimeout: null,
  searchValue: null,
  data: function() {
    return {
      focused: !1,
      focusedItem: null,
      activeItemPath: []
    };
  },
  watch: {
    expandedKeys: function(r) {
      this.autoUpdateActiveItemPath(r);
    }
  },
  mounted: function() {
    this.autoUpdateActiveItemPath(this.expandedKeys);
  },
  methods: {
    getItemProp: function(r, t) {
      return r && r.item ? Ve(r.item[t]) : void 0;
    },
    getItemLabel: function(r) {
      return this.getItemProp(r, "label");
    },
    isItemVisible: function(r) {
      return this.getItemProp(r, "visible") !== !1;
    },
    isItemDisabled: function(r) {
      return this.getItemProp(r, "disabled");
    },
    isItemActive: function(r) {
      return this.activeItemPath.some(function(t) {
        return t.key === r.parentKey;
      });
    },
    isItemGroup: function(r) {
      return ne(r.items);
    },
    onFocus: function(r) {
      this.focused = !0, this.focusedItem = this.focusedItem || (this.isElementInPanel(r, r.relatedTarget) ? this.findFirstItem() : this.findLastItem());
    },
    onBlur: function() {
      this.focused = !1, this.focusedItem = null, this.searchValue = "";
    },
    onKeyDown: function(r) {
      var t = r.metaKey || r.ctrlKey;
      switch (r.code) {
        case "ArrowDown":
          this.onArrowDownKey(r);
          break;
        case "ArrowUp":
          this.onArrowUpKey(r);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(r);
          break;
        case "ArrowRight":
          this.onArrowRightKey(r);
          break;
        case "Home":
          this.onHomeKey(r);
          break;
        case "End":
          this.onEndKey(r);
          break;
        case "Space":
          this.onSpaceKey(r);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(r);
          break;
        case "Escape":
        case "Tab":
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !t && vc(r.key) && this.searchItems(r, r.key);
          break;
      }
    },
    onArrowDownKey: function(r) {
      var t = ne(this.focusedItem) ? this.findNextItem(this.focusedItem) : this.findFirstItem();
      this.changeFocusedItem({
        originalEvent: r,
        processedItem: t,
        focusOnNext: !0
      }), r.preventDefault();
    },
    onArrowUpKey: function(r) {
      var t = ne(this.focusedItem) ? this.findPrevItem(this.focusedItem) : this.findLastItem();
      this.changeFocusedItem({
        originalEvent: r,
        processedItem: t,
        selfCheck: !0
      }), r.preventDefault();
    },
    onArrowLeftKey: function(r) {
      var t = this;
      if (ne(this.focusedItem)) {
        var o = this.activeItemPath.some(function(a) {
          return a.key === t.focusedItem.key;
        });
        o ? this.activeItemPath = this.activeItemPath.filter(function(a) {
          return a.key !== t.focusedItem.key;
        }) : this.focusedItem = ne(this.focusedItem.parent) ? this.focusedItem.parent : this.focusedItem, r.preventDefault();
      }
    },
    onArrowRightKey: function(r) {
      var t = this;
      if (ne(this.focusedItem)) {
        var o = this.isItemGroup(this.focusedItem);
        if (o) {
          var a = this.activeItemPath.some(function(u) {
            return u.key === t.focusedItem.key;
          });
          a ? this.onArrowDownKey(r) : (this.activeItemPath = this.activeItemPath.filter(function(u) {
            return u.parentKey !== t.focusedItem.parentKey;
          }), this.activeItemPath.push(this.focusedItem));
        }
        r.preventDefault();
      }
    },
    onHomeKey: function(r) {
      this.changeFocusedItem({
        originalEvent: r,
        processedItem: this.findFirstItem(),
        allowHeaderFocus: !1
      }), r.preventDefault();
    },
    onEndKey: function(r) {
      this.changeFocusedItem({
        originalEvent: r,
        processedItem: this.findLastItem(),
        focusOnNext: !0,
        allowHeaderFocus: !1
      }), r.preventDefault();
    },
    onEnterKey: function(r) {
      if (ne(this.focusedItem)) {
        var t = dr(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), o = t && (dr(t, '[data-pc-section="itemlink"]') || dr(t, "a,button"));
        o ? o.click() : t && t.click();
      }
      r.preventDefault();
    },
    onSpaceKey: function(r) {
      this.onEnterKey(r);
    },
    onItemToggle: function(r) {
      var t = r.processedItem, o = r.expanded;
      this.expandedKeys ? this.$emit("item-toggle", {
        item: t.item,
        expanded: o
      }) : (this.activeItemPath = this.activeItemPath.filter(function(a) {
        return a.parentKey !== t.parentKey;
      }), o && this.activeItemPath.push(t)), this.focusedItem = t, dn(this.$el);
    },
    onItemMouseMove: function(r) {
      this.focused && (this.focusedItem = r.processedItem);
    },
    isElementInPanel: function(r, t) {
      var o = r.currentTarget.closest('[data-pc-section="panel"]');
      return o && o.contains(t);
    },
    isItemMatched: function(r) {
      var t;
      return this.isValidItem(r) && ((t = this.getItemLabel(r)) === null || t === void 0 ? void 0 : t.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)));
    },
    isVisibleItem: function(r) {
      return !!r && (r.level === 0 || this.isItemActive(r)) && this.isItemVisible(r);
    },
    isValidItem: function(r) {
      return !!r && !this.isItemDisabled(r) && !this.getItemProp(r, "separator");
    },
    findFirstItem: function() {
      var r = this;
      return this.visibleItems.find(function(t) {
        return r.isValidItem(t);
      });
    },
    findLastItem: function() {
      var r = this;
      return $a(this.visibleItems, function(t) {
        return r.isValidItem(t);
      });
    },
    findNextItem: function(r) {
      var t = this, o = this.visibleItems.findIndex(function(u) {
        return u.key === r.key;
      }), a = o < this.visibleItems.length - 1 ? this.visibleItems.slice(o + 1).find(function(u) {
        return t.isValidItem(u);
      }) : void 0;
      return a || r;
    },
    findPrevItem: function(r) {
      var t = this, o = this.visibleItems.findIndex(function(u) {
        return u.key === r.key;
      }), a = o > 0 ? $a(this.visibleItems.slice(0, o), function(u) {
        return t.isValidItem(u);
      }) : void 0;
      return a || r;
    },
    searchItems: function(r, t) {
      var o = this;
      this.searchValue = (this.searchValue || "") + t;
      var a = null, u = !1;
      if (ne(this.focusedItem)) {
        var f = this.visibleItems.findIndex(function(d) {
          return d.key === o.focusedItem.key;
        });
        a = this.visibleItems.slice(f).find(function(d) {
          return o.isItemMatched(d);
        }), a = et(a) ? this.visibleItems.slice(0, f).find(function(d) {
          return o.isItemMatched(d);
        }) : a;
      } else
        a = this.visibleItems.find(function(d) {
          return o.isItemMatched(d);
        });
      return ne(a) && (u = !0), et(a) && et(this.focusedItem) && (a = this.findFirstItem()), ne(a) && this.changeFocusedItem({
        originalEvent: r,
        processedItem: a,
        allowHeaderFocus: !1
      }), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), u;
    },
    changeFocusedItem: function(r) {
      var t = r.originalEvent, o = r.processedItem, a = r.focusOnNext, u = r.selfCheck, f = r.allowHeaderFocus, d = f === void 0 ? !0 : f;
      ne(this.focusedItem) && this.focusedItem.key !== o.key ? (this.focusedItem = o, this.scrollInView()) : d && this.$emit("header-focus", {
        originalEvent: t,
        focusOnNext: a,
        selfCheck: u
      });
    },
    scrollInView: function() {
      var r = dr(this.$el, 'li[id="'.concat("".concat(this.focusedItemId), '"]'));
      r && r.scrollIntoView && r.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    autoUpdateActiveItemPath: function(r) {
      var t = this;
      this.activeItemPath = Object.entries(r || {}).reduce(function(o, a) {
        var u = sd(a, 2), f = u[0], d = u[1];
        if (d) {
          var p = t.findProcessedItemByItemKey(f);
          p && o.push(p);
        }
        return o;
      }, []);
    },
    findProcessedItemByItemKey: function(r, t) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      if (t = t || o === 0 && this.processedItems, !t) return null;
      for (var a = 0; a < t.length; a++) {
        var u = t[a];
        if (this.getItemProp(u, "key") === r) return u;
        var f = this.findProcessedItemByItemKey(r, u.items, o + 1);
        if (f) return f;
      }
    },
    createProcessedItems: function(r) {
      var t = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", f = [];
      return r && r.forEach(function(d, p) {
        var y = (u !== "" ? u + "_" : "") + p, k = {
          item: d,
          index: p,
          level: o,
          key: y,
          parent: a,
          parentKey: u
        };
        k.items = t.createProcessedItems(d.items, o + 1, k, y), f.push(k);
      }), f;
    },
    flatItems: function(r) {
      var t = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return r && r.forEach(function(a) {
        t.isVisibleItem(a) && (o.push(a), t.flatItems(a.items, o));
      }), o;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.items || []);
    },
    visibleItems: function() {
      return this.flatItems(this.processedItems);
    },
    focusedItemId: function() {
      return ne(this.focusedItem) ? "".concat(this.panelId, "_").concat(this.focusedItem.key) : null;
    }
  },
  components: {
    PanelMenuSub: Zs
  }
};
function fd(e, r, t, o, a, u) {
  var f = Fi("PanelMenuSub");
  return fe(), wr(f, le({
    id: t.panelId + "_list",
    class: e.cx("rootList"),
    role: "tree",
    tabindex: -1,
    "aria-activedescendant": a.focused ? u.focusedItemId : void 0,
    panelId: t.panelId,
    focusedItemId: a.focused ? u.focusedItemId : void 0,
    items: u.processedItems,
    templates: t.templates,
    activeItemPath: a.activeItemPath,
    onFocus: u.onFocus,
    onBlur: u.onBlur,
    onKeydown: u.onKeyDown,
    onItemToggle: u.onItemToggle,
    onItemMousemove: u.onItemMouseMove,
    pt: e.pt,
    unstyled: e.unstyled
  }, e.ptm("rootList")), null, 16, ["id", "class", "aria-activedescendant", "panelId", "focusedItemId", "items", "templates", "activeItemPath", "onFocus", "onBlur", "onKeydown", "onItemToggle", "onItemMousemove", "pt", "unstyled"]);
}
Xs.render = fd;
function Cn(e) {
  "@babel/helpers - typeof";
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Cn(e);
}
function rs(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function hd(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? rs(Object(t), !0).forEach(function(o) {
      pd(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : rs(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function pd(e, r, t) {
  return (r = md(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function md(e) {
  var r = gd(e, "string");
  return Cn(r) == "symbol" ? r : r + "";
}
function gd(e, r) {
  if (Cn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (Cn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Js = {
  name: "PanelMenu",
  extends: rd,
  inheritAttrs: !1,
  emits: ["update:expandedKeys", "panel-open", "panel-close"],
  data: function() {
    return {
      id: this.$attrs.id,
      activeItem: null,
      activeItems: []
    };
  },
  watch: {
    "$attrs.id": function(r) {
      this.id = r || Ha();
    }
  },
  mounted: function() {
    this.id = this.id || Ha();
  },
  methods: {
    getItemProp: function(r, t) {
      return r ? Ve(r[t]) : void 0;
    },
    getItemLabel: function(r) {
      return this.getItemProp(r, "label");
    },
    getPTOptions: function(r, t, o) {
      return this.ptm(r, {
        context: {
          index: o,
          active: this.isItemActive(t),
          focused: this.isItemFocused(t),
          disabled: this.isItemDisabled(t)
        }
      });
    },
    isItemActive: function(r) {
      return this.expandedKeys ? this.expandedKeys[this.getItemProp(r, "key")] : this.multiple ? this.activeItems.some(function(t) {
        return It(r, t);
      }) : It(r, this.activeItem);
    },
    isItemVisible: function(r) {
      return this.getItemProp(r, "visible") !== !1;
    },
    isItemDisabled: function(r) {
      return this.getItemProp(r, "disabled");
    },
    isItemFocused: function(r) {
      return It(r, this.activeItem);
    },
    isItemGroup: function(r) {
      return ne(r.items);
    },
    getPanelId: function(r) {
      return "".concat(this.id, "_").concat(r);
    },
    getPanelKey: function(r) {
      return this.getPanelId(r);
    },
    getHeaderId: function(r) {
      return "".concat(this.getPanelId(r), "_header");
    },
    getContentId: function(r) {
      return "".concat(this.getPanelId(r), "_content");
    },
    onHeaderClick: function(r, t) {
      if (this.isItemDisabled(t)) {
        r.preventDefault();
        return;
      }
      t.command && t.command({
        originalEvent: r,
        item: t
      }), this.changeActiveItem(r, t), dn(r.currentTarget);
    },
    onHeaderKeyDown: function(r, t) {
      switch (r.code) {
        case "ArrowDown":
          this.onHeaderArrowDownKey(r);
          break;
        case "ArrowUp":
          this.onHeaderArrowUpKey(r);
          break;
        case "Home":
          this.onHeaderHomeKey(r);
          break;
        case "End":
          this.onHeaderEndKey(r);
          break;
        case "Enter":
        case "NumpadEnter":
        case "Space":
          this.onHeaderEnterKey(r, t);
          break;
      }
    },
    onHeaderArrowDownKey: function(r) {
      var t = fn(r.currentTarget, "data-p-active") === !0 ? dr(r.currentTarget.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      t ? dn(t) : this.updateFocusedHeader({
        originalEvent: r,
        focusOnNext: !0
      }), r.preventDefault();
    },
    onHeaderArrowUpKey: function(r) {
      var t = this.findPrevHeader(r.currentTarget.parentElement) || this.findLastHeader(), o = fn(t, "data-p-active") === !0 ? dr(t.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      o ? dn(o) : this.updateFocusedHeader({
        originalEvent: r,
        focusOnNext: !1
      }), r.preventDefault();
    },
    onHeaderHomeKey: function(r) {
      this.changeFocusedHeader(r, this.findFirstHeader()), r.preventDefault();
    },
    onHeaderEndKey: function(r) {
      this.changeFocusedHeader(r, this.findLastHeader()), r.preventDefault();
    },
    onHeaderEnterKey: function(r, t) {
      var o = dr(r.currentTarget, '[data-pc-section="headerlink"]');
      o ? o.click() : this.onHeaderClick(r, t), r.preventDefault();
    },
    findNextHeader: function(r) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = t ? r : r.nextElementSibling, a = dr(o, '[data-pc-section="header"]');
      return a ? fn(a, "data-p-disabled") ? this.findNextHeader(a.parentElement) : a : null;
    },
    findPrevHeader: function(r) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = t ? r : r.previousElementSibling, a = dr(o, '[data-pc-section="header"]');
      return a ? fn(a, "data-p-disabled") ? this.findPrevHeader(a.parentElement) : a : null;
    },
    findFirstHeader: function() {
      return this.findNextHeader(this.$el.firstElementChild, !0);
    },
    findLastHeader: function() {
      return this.findPrevHeader(this.$el.lastElementChild, !0);
    },
    updateFocusedHeader: function(r) {
      var t = r.originalEvent, o = r.focusOnNext, a = r.selfCheck, u = t.currentTarget.closest('[data-pc-section="panel"]'), f = a ? dr(u, '[data-pc-section="header"]') : o ? this.findNextHeader(u) : this.findPrevHeader(u);
      f ? this.changeFocusedHeader(t, f) : o ? this.onHeaderHomeKey(t) : this.onHeaderEndKey(t);
    },
    changeActiveItem: function(r, t) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      if (!this.isItemDisabled(t)) {
        var a = this.isItemActive(t), u = a ? "panel-close" : "panel-open";
        this.activeItem = o ? t : this.activeItem && It(t, this.activeItem) ? null : t, this.multiple && (this.activeItems.some(function(f) {
          return It(t, f);
        }) ? this.activeItems = this.activeItems.filter(function(f) {
          return !It(t, f);
        }) : this.activeItems.push(t)), this.changeExpandedKeys({
          item: t,
          expanded: !a
        }), this.$emit(u, {
          originalEvent: r,
          item: t
        });
      }
    },
    changeExpandedKeys: function(r) {
      var t = r.item, o = r.expanded, a = o === void 0 ? !1 : o;
      if (this.expandedKeys) {
        var u = hd({}, this.expandedKeys);
        a ? u[t.key] = !0 : delete u[t.key], this.$emit("update:expandedKeys", u);
      }
    },
    changeFocusedHeader: function(r, t) {
      t && dn(t);
    },
    getMenuItemProps: function(r, t) {
      return {
        icon: le({
          class: [this.cx("headerIcon"), this.getItemProp(r, "icon")]
        }, this.getPTOptions("headerIcon", r, t)),
        label: le({
          class: this.cx("headerLabel")
        }, this.getPTOptions("headerLabel", r, t))
      };
    }
  },
  components: {
    PanelMenuList: Xs,
    ChevronRightIcon: Wi,
    ChevronDownIcon: Ui
  }
}, bd = ["id"], yd = ["id", "tabindex", "aria-label", "aria-expanded", "aria-controls", "aria-disabled", "onClick", "onKeydown", "data-p-active", "data-p-disabled"], vd = ["href"], kd = ["id", "aria-labelledby"];
function wd(e, r, t, o, a, u) {
  var f = Fi("PanelMenuList");
  return fe(), xe("div", le({
    id: a.id,
    class: e.cx("root")
  }, e.ptmi("root")), [(fe(!0), xe(Tt, null, Ds(e.model, function(d, p) {
    return fe(), xe(Tt, {
      key: u.getPanelKey(p)
    }, [u.isItemVisible(d) ? (fe(), xe("div", le({
      key: 0,
      style: u.getItemProp(d, "style"),
      class: [e.cx("panel"), u.getItemProp(d, "class")],
      ref_for: !0
    }, e.ptm("panel")), [fr("div", le({
      id: u.getHeaderId(p),
      class: [e.cx("header", {
        item: d
      }), u.getItemProp(d, "headerClass")],
      tabindex: u.isItemDisabled(d) ? -1 : e.tabindex,
      role: "button",
      "aria-label": u.getItemLabel(d),
      "aria-expanded": u.isItemActive(d),
      "aria-controls": u.getContentId(p),
      "aria-disabled": u.isItemDisabled(d),
      onClick: function(k) {
        return u.onHeaderClick(k, d);
      },
      onKeydown: function(k) {
        return u.onHeaderKeyDown(k, d);
      },
      ref_for: !0
    }, u.getPTOptions("header", d, p), {
      "data-p-active": u.isItemActive(d),
      "data-p-disabled": u.isItemDisabled(d)
    }), [fr("div", le({
      class: e.cx("headerContent"),
      ref_for: !0
    }, u.getPTOptions("headerContent", d, p)), [e.$slots.item ? (fe(), wr(Xr(e.$slots.item), {
      key: 1,
      item: d,
      root: !0,
      active: u.isItemActive(d),
      hasSubmenu: u.isItemGroup(d),
      label: u.getItemLabel(d),
      props: u.getMenuItemProps(d, p)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"])) : (fe(), xe("a", le({
      key: 0,
      href: u.getItemProp(d, "url"),
      class: e.cx("headerLink"),
      tabindex: -1,
      ref_for: !0
    }, u.getPTOptions("headerLink", d, p)), [u.getItemProp(d, "items") ? uc(e.$slots, "submenuicon", {
      key: 0,
      active: u.isItemActive(d)
    }, function() {
      return [(fe(), wr(Xr(u.isItemActive(d) ? "ChevronDownIcon" : "ChevronRightIcon"), le({
        class: e.cx("submenuIcon"),
        ref_for: !0
      }, u.getPTOptions("submenuIcon", d, p)), null, 16, ["class"]))];
    }) : Er("", !0), e.$slots.headericon ? (fe(), wr(Xr(e.$slots.headericon), {
      key: 1,
      item: d,
      class: _i([e.cx("headerIcon"), u.getItemProp(d, "icon")])
    }, null, 8, ["item", "class"])) : u.getItemProp(d, "icon") ? (fe(), xe("span", le({
      key: 2,
      class: [e.cx("headerIcon"), u.getItemProp(d, "icon")],
      ref_for: !0
    }, u.getPTOptions("headerIcon", d, p)), null, 16)) : Er("", !0), fr("span", le({
      class: e.cx("headerLabel"),
      ref_for: !0
    }, u.getPTOptions("headerLabel", d, p)), qi(u.getItemLabel(d)), 17)], 16, vd))], 16)], 16, yd), Rt(js, le({
      name: "p-toggleable-content",
      ref_for: !0
    }, e.ptm("transition")), {
      default: Ns(function() {
        return [Ci(fr("div", le({
          id: u.getContentId(p),
          class: e.cx("contentContainer"),
          role: "region",
          "aria-labelledby": u.getHeaderId(p),
          ref_for: !0
        }, e.ptm("contentContainer")), [u.getItemProp(d, "items") ? (fe(), xe("div", le({
          key: 0,
          class: e.cx("content"),
          ref_for: !0
        }, e.ptm("content")), [Rt(f, {
          panelId: u.getPanelId(p),
          items: u.getItemProp(d, "items"),
          templates: e.$slots,
          expandedKeys: e.expandedKeys,
          onItemToggle: u.changeExpandedKeys,
          onHeaderFocus: u.updateFocusedHeader,
          pt: e.pt,
          unstyled: e.unstyled
        }, null, 8, ["panelId", "items", "templates", "expandedKeys", "onItemToggle", "onHeaderFocus", "pt", "unstyled"])], 16)) : Er("", !0)], 16, kd), [[Ms, u.isItemActive(d)]])];
      }),
      _: 2
    }, 1040)], 16)) : Er("", !0)], 64);
  }), 128))], 16, bd);
}
Js.render = wd;
const ig = /* @__PURE__ */ Es({
  __name: "AppNavigation",
  props: {
    id: {}
  },
  setup(e) {
    const r = JSON.parse('[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":3,"parentId":0,"key":"03_system","label":"System","labelAr":"النظام","icon":"settings","route":"","level":1,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":9,"parentId":3,"key":"03_buckets","label":"Buckets","labelAr":"المجلدات","icon":"folder","route":"/system/bucket","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":10,"parentId":3,"key":"04_files","label":"Objects","labelAr":"الملفات","icon":"file","route":"/system/object","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":11,"parentId":3,"key":"05_settings","label":"Settings","labelAr":"الإعدادات","icon":"settings_icon","route":"/system/setting","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":7,"parentId":3,"key":"01_translations","label":"Translations","labelAr":"الترجمات","icon":"globe","route":"/system/translation","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":8,"parentId":3,"key":"02_icons","label":"Icons","labelAr":"الأيقونات","icon":"design","route":"/system/icon","level":2,"items":[]}]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":1,"parentId":0,"key":"01_dashboard","label":"Dashboard","labelAr":"لوحة التحكم","icon":"dashboard","route":"/dashboard","level":1,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":2,"parentId":0,"key":"02_accounts","label":"Accounts","labelAr":"الحسابات","icon":"people","route":"","level":1,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":6,"parentId":2,"key":"03_navigation","label":"Navigation","labelAr":"القوائم","icon":"maps","route":"/accounts/navigation","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":4,"parentId":2,"key":"01_roles","label":"Roles","labelAr":"الأدوار","icon":"group_users","route":"/accounts/role","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":5,"parentId":2,"key":"02_users","label":"Users","labelAr":"المستخدمين","icon":"user_add","route":"/accounts/user","level":2,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":12,"parentId":5,"key":"02_users_create","label":"Users Create","labelAr":"المستخدمين","icon":"user_verified","route":"/accounts/users/create","level":3,"items":[]}]}]}]'), t = e, o = jr("");
    return (a, u) => (fe(), xe(Tt, null, [
      fr("h2", null, qi(t.id), 1),
      u[1] || (u[1] = fr("h2", null, "hello", -1)),
      Rt(ln(cc), { label: "hello" }),
      Rt(ln(lc), {
        id: "basic",
        modelValue: o.value,
        "onUpdate:modelValue": u[0] || (u[0] = (f) => o.value = f),
        placeholder: "99-999999"
      }, null, 8, ["modelValue"]),
      Rt(ln(Js), {
        model: ln(r),
        class: "app-navigation"
      }, null, 8, ["model"])
    ], 64));
  }
}), _d = {};
function Cd(e, r) {
  return fe(), xe("h2", null, "app sidebar");
}
const ag = /* @__PURE__ */ zt(_d, [["render", Cd]]), xd = {};
function Sd(e, r) {
  return fe(), xe("h2", null, "app header");
}
const sg = /* @__PURE__ */ zt(xd, [["render", Sd]]), Pd = {};
function Id(e, r) {
  return fe(), xe("h2", null, "app form component changed again");
}
const ug = /* @__PURE__ */ zt(Pd, [["render", Id]]), Od = {};
function Bd(e, r) {
  return fe(), xe("h2", null, "app btn");
}
const cg = /* @__PURE__ */ zt(Od, [["render", Bd]]);
function $d(e) {
  return typeof e == "string";
}
function Ad(e) {
  return typeof e == "function";
}
async function Td(e, r, t) {
  return $d(e) ? r[e](t) : Ad(e) ? e(t) : e;
}
var Rd = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  panel: {
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}"
  },
  header: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{text.color}",
    padding: "1.125rem",
    fontWeight: "600",
    borderRadius: "0",
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    hoverBackground: "{content.background}",
    activeBackground: "{content.background}",
    activeHoverBackground: "{content.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    toggleIcon: {
      color: "{text.muted.color}",
      hoverColor: "{text.color}",
      activeColor: "{text.color}",
      activeHoverColor: "{text.color}"
    },
    first: {
      topBorderRadius: "{content.border.radius}",
      borderWidth: "0"
    },
    last: {
      bottomBorderRadius: "{content.border.radius}",
      activeBottomBorderRadius: "0"
    }
  },
  content: {
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    color: "{text.color}",
    padding: "0 1.125rem 1.125rem 1.125rem"
  }
}, Ed = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}"
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  dropdown: {
    width: "2.5rem",
    sm: {
      width: "2rem"
    },
    lg: {
      width: "3rem"
    },
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  colorScheme: {
    light: {
      chip: {
        focusBackground: "{surface.200}",
        focusColor: "{surface.800}"
      },
      dropdown: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.700}",
        focusColor: "{surface.0}"
      },
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      }
    }
  }
}, Dd = {
  root: {
    width: "2rem",
    height: "2rem",
    fontSize: "1rem",
    background: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  },
  icon: {
    size: "1rem"
  },
  group: {
    borderColor: "{content.background}",
    offset: "-0.75rem"
  },
  lg: {
    width: "3rem",
    height: "3rem",
    fontSize: "1.5rem",
    icon: {
      size: "1.5rem"
    },
    group: {
      offset: "-1rem"
    }
  },
  xl: {
    width: "4rem",
    height: "4rem",
    fontSize: "2rem",
    icon: {
      size: "2rem"
    },
    group: {
      offset: "-1.5rem"
    }
  }
}, jd = {
  root: {
    borderRadius: "{border.radius.md}",
    padding: "0 0.5rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    minWidth: "1.5rem",
    height: "1.5rem"
  },
  dot: {
    size: "0.5rem"
  },
  sm: {
    fontSize: "0.625rem",
    minWidth: "1.25rem",
    height: "1.25rem"
  },
  lg: {
    fontSize: "0.875rem",
    minWidth: "1.75rem",
    height: "1.75rem"
  },
  xl: {
    fontSize: "1rem",
    minWidth: "2rem",
    height: "2rem"
  },
  colorScheme: {
    light: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.500}",
        color: "{surface.0}"
      },
      info: {
        background: "{sky.500}",
        color: "{surface.0}"
      },
      warn: {
        background: "{orange.500}",
        color: "{surface.0}"
      },
      danger: {
        background: "{red.500}",
        color: "{surface.0}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "{green.400}",
        color: "{green.950}"
      },
      info: {
        background: "{sky.400}",
        color: "{sky.950}"
      },
      warn: {
        background: "{orange.400}",
        color: "{orange.950}"
      },
      danger: {
        background: "{red.400}",
        color: "{red.950}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  }
}, Nd = {
  primitive: {
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    }
  },
  semantic: {
    transitionDuration: "0.2s",
    focusRing: {
      width: "1px",
      style: "solid",
      color: "{primary.color}",
      offset: "2px",
      shadow: "none"
    },
    disabledOpacity: "0.6",
    iconSize: "1rem",
    anchorGutter: "2px",
    primary: {
      50: "{emerald.50}",
      100: "{emerald.100}",
      200: "{emerald.200}",
      300: "{emerald.300}",
      400: "{emerald.400}",
      500: "{emerald.500}",
      600: "{emerald.600}",
      700: "{emerald.700}",
      800: "{emerald.800}",
      900: "{emerald.900}",
      950: "{emerald.950}"
    },
    formField: {
      paddingX: "0.75rem",
      paddingY: "0.5rem",
      sm: {
        fontSize: "0.875rem",
        paddingX: "0.625rem",
        paddingY: "0.375rem"
      },
      lg: {
        fontSize: "1.125rem",
        paddingX: "0.875rem",
        paddingY: "0.625rem"
      },
      borderRadius: "{border.radius.md}",
      focusRing: {
        width: "0",
        style: "none",
        color: "transparent",
        offset: "0",
        shadow: "none"
      },
      transitionDuration: "{transition.duration}"
    },
    list: {
      padding: "0.25rem 0.25rem",
      gap: "2px",
      header: {
        padding: "0.5rem 1rem 0.25rem 1rem"
      },
      option: {
        padding: "0.5rem 0.75rem",
        borderRadius: "{border.radius.sm}"
      },
      optionGroup: {
        padding: "0.5rem 0.75rem",
        fontWeight: "600"
      }
    },
    content: {
      borderRadius: "{border.radius.md}"
    },
    mask: {
      transitionDuration: "0.15s"
    },
    navigation: {
      list: {
        padding: "0.25rem 0.25rem",
        gap: "2px"
      },
      item: {
        padding: "0.5rem 0.75rem",
        borderRadius: "{border.radius.sm}",
        gap: "0.5rem"
      },
      submenuLabel: {
        padding: "0.5rem 0.75rem",
        fontWeight: "600"
      },
      submenuIcon: {
        size: "0.875rem"
      }
    },
    overlay: {
      select: {
        borderRadius: "{border.radius.md}",
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      },
      popover: {
        borderRadius: "{border.radius.md}",
        padding: "0.75rem",
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      },
      modal: {
        borderRadius: "{border.radius.xl}",
        padding: "1.25rem",
        shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
      },
      navigation: {
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      }
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{slate.50}",
          100: "{slate.100}",
          200: "{slate.200}",
          300: "{slate.300}",
          400: "{slate.400}",
          500: "{slate.500}",
          600: "{slate.600}",
          700: "{slate.700}",
          800: "{slate.800}",
          900: "{slate.900}",
          950: "{slate.950}"
        },
        primary: {
          color: "{primary.500}",
          contrastColor: "#ffffff",
          hoverColor: "{primary.600}",
          activeColor: "{primary.700}"
        },
        highlight: {
          background: "{primary.50}",
          focusBackground: "{primary.100}",
          color: "{primary.700}",
          focusColor: "{primary.800}"
        },
        mask: {
          background: "rgba(0,0,0,0.4)",
          color: "{surface.200}"
        },
        formField: {
          background: "{surface.0}",
          disabledBackground: "{surface.200}",
          filledBackground: "{surface.50}",
          filledHoverBackground: "{surface.50}",
          filledFocusBackground: "{surface.50}",
          borderColor: "{surface.300}",
          hoverBorderColor: "{surface.400}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.400}",
          color: "{surface.700}",
          disabledColor: "{surface.500}",
          placeholderColor: "{surface.500}",
          invalidPlaceholderColor: "{red.600}",
          floatLabelColor: "{surface.500}",
          floatLabelFocusColor: "{primary.600}",
          floatLabelActiveColor: "{surface.500}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{surface.400}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
        },
        text: {
          color: "{surface.700}",
          hoverColor: "{surface.800}",
          mutedColor: "{surface.500}",
          hoverMutedColor: "{surface.600}"
        },
        content: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}"
        },
        overlay: {
          select: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          },
          popover: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          },
          modal: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          }
        },
        list: {
          option: {
            focusBackground: "{surface.100}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "{surface.100}",
            activeBackground: "{surface.100}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}",
              activeColor: "{surface.500}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}"
          },
          submenuIcon: {
            color: "{surface.400}",
            focusColor: "{surface.500}",
            activeColor: "{surface.500}"
          }
        }
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{zinc.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}"
        },
        primary: {
          color: "{primary.400}",
          contrastColor: "{surface.900}",
          hoverColor: "{primary.300}",
          activeColor: "{primary.200}"
        },
        highlight: {
          background: "color-mix(in srgb, {primary.400}, transparent 84%)",
          focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)"
        },
        mask: {
          background: "rgba(0,0,0,0.6)",
          color: "{surface.200}"
        },
        formField: {
          background: "{surface.950}",
          disabledBackground: "{surface.700}",
          filledBackground: "{surface.800}",
          filledHoverBackground: "{surface.800}",
          filledFocusBackground: "{surface.800}",
          borderColor: "{surface.600}",
          hoverBorderColor: "{surface.500}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.300}",
          color: "{surface.0}",
          disabledColor: "{surface.400}",
          placeholderColor: "{surface.400}",
          invalidPlaceholderColor: "{red.400}",
          floatLabelColor: "{surface.400}",
          floatLabelFocusColor: "{primary.color}",
          floatLabelActiveColor: "{surface.400}",
          floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
          iconColor: "{surface.400}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
        },
        text: {
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          mutedColor: "{surface.400}",
          hoverMutedColor: "{surface.300}"
        },
        content: {
          background: "{surface.900}",
          hoverBackground: "{surface.800}",
          borderColor: "{surface.700}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}"
        },
        overlay: {
          select: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          },
          popover: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          },
          modal: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          }
        },
        list: {
          option: {
            focusBackground: "{surface.800}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.500}",
              focusColor: "{surface.400}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "{surface.800}",
            activeBackground: "{surface.800}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.500}",
              focusColor: "{surface.400}",
              activeColor: "{surface.400}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}"
          },
          submenuIcon: {
            color: "{surface.500}",
            focusColor: "{surface.400}",
            activeColor: "{surface.400}"
          }
        }
      }
    }
  }
}, Md = {
  root: {
    borderRadius: "{content.border.radius}"
  }
}, Ld = {
  root: {
    padding: "1rem",
    background: "{content.background}",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  item: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    borderRadius: "{content.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      hoverColor: "{navigation.item.icon.focus.color}"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  separator: {
    color: "{navigation.item.icon.color}"
  }
}, Kd = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    gap: "0.5rem",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    iconOnlyWidth: "2.5rem",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    },
    label: {
      fontWeight: "500"
    },
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    },
    badgeSize: "1rem",
    transitionDuration: "{form.field.transition.duration}"
  },
  colorScheme: {
    light: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.100}",
          hoverBackground: "{surface.200}",
          activeBackground: "{surface.300}",
          borderColor: "{surface.100}",
          hoverBorderColor: "{surface.200}",
          activeBorderColor: "{surface.300}",
          color: "{surface.600}",
          hoverColor: "{surface.700}",
          activeColor: "{surface.800}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.500}",
          hoverBackground: "{sky.600}",
          activeBackground: "{sky.700}",
          borderColor: "{sky.500}",
          hoverBorderColor: "{sky.600}",
          activeBorderColor: "{sky.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{sky.500}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.500}",
          hoverBackground: "{green.600}",
          activeBackground: "{green.700}",
          borderColor: "{green.500}",
          hoverBorderColor: "{green.600}",
          activeBorderColor: "{green.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.500}",
          hoverBackground: "{orange.600}",
          activeBackground: "{orange.700}",
          borderColor: "{orange.500}",
          hoverBorderColor: "{orange.600}",
          activeBorderColor: "{orange.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{orange.500}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.500}",
          hoverBackground: "{purple.600}",
          activeBackground: "{purple.700}",
          borderColor: "{purple.500}",
          hoverBorderColor: "{purple.600}",
          activeBorderColor: "{purple.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{purple.500}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.500}",
          hoverBackground: "{red.600}",
          activeBackground: "{red.700}",
          borderColor: "{red.500}",
          hoverBorderColor: "{red.600}",
          activeBorderColor: "{red.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        },
        contrast: {
          background: "{surface.950}",
          hoverBackground: "{surface.900}",
          activeBackground: "{surface.800}",
          borderColor: "{surface.950}",
          hoverBorderColor: "{surface.900}",
          activeBorderColor: "{surface.800}",
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          activeColor: "{surface.0}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          borderColor: "{primary.200}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{surface.500}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          borderColor: "{green.200}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          borderColor: "{sky.200}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          borderColor: "{orange.200}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          borderColor: "{purple.200}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          borderColor: "{red.200}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.700}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{surface.700}"
        }
      },
      text: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.500}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.700}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    },
    dark: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.800}",
          hoverBackground: "{surface.700}",
          activeBackground: "{surface.600}",
          borderColor: "{surface.800}",
          hoverBorderColor: "{surface.700}",
          activeBorderColor: "{surface.600}",
          color: "{surface.300}",
          hoverColor: "{surface.200}",
          activeColor: "{surface.100}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.400}",
          hoverBackground: "{sky.300}",
          activeBackground: "{sky.200}",
          borderColor: "{sky.400}",
          hoverBorderColor: "{sky.300}",
          activeBorderColor: "{sky.200}",
          color: "{sky.950}",
          hoverColor: "{sky.950}",
          activeColor: "{sky.950}",
          focusRing: {
            color: "{sky.400}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.400}",
          hoverBackground: "{green.300}",
          activeBackground: "{green.200}",
          borderColor: "{green.400}",
          hoverBorderColor: "{green.300}",
          activeBorderColor: "{green.200}",
          color: "{green.950}",
          hoverColor: "{green.950}",
          activeColor: "{green.950}",
          focusRing: {
            color: "{green.400}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.400}",
          hoverBackground: "{orange.300}",
          activeBackground: "{orange.200}",
          borderColor: "{orange.400}",
          hoverBorderColor: "{orange.300}",
          activeBorderColor: "{orange.200}",
          color: "{orange.950}",
          hoverColor: "{orange.950}",
          activeColor: "{orange.950}",
          focusRing: {
            color: "{orange.400}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.400}",
          hoverBackground: "{purple.300}",
          activeBackground: "{purple.200}",
          borderColor: "{purple.400}",
          hoverBorderColor: "{purple.300}",
          activeBorderColor: "{purple.200}",
          color: "{purple.950}",
          hoverColor: "{purple.950}",
          activeColor: "{purple.950}",
          focusRing: {
            color: "{purple.400}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.400}",
          hoverBackground: "{red.300}",
          activeBackground: "{red.200}",
          borderColor: "{red.400}",
          hoverBorderColor: "{red.300}",
          activeBorderColor: "{red.200}",
          color: "{red.950}",
          hoverColor: "{red.950}",
          activeColor: "{red.950}",
          focusRing: {
            color: "{red.400}",
            shadow: "none"
          }
        },
        contrast: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          activeBackground: "{surface.200}",
          borderColor: "{surface.0}",
          hoverBorderColor: "{surface.100}",
          activeBorderColor: "{surface.200}",
          color: "{surface.950}",
          hoverColor: "{surface.950}",
          activeColor: "{surface.950}",
          focusRing: {
            color: "{surface.0}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          borderColor: "{primary.700}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "rgba(255,255,255,0.04)",
          activeBackground: "rgba(255,255,255,0.16)",
          borderColor: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          borderColor: "{green.700}",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          borderColor: "{sky.700}",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          borderColor: "{orange.700}",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          borderColor: "{purple.700}",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          borderColor: "{red.700}",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.500}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.600}",
          color: "{surface.0}"
        }
      },
      text: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    }
  }
}, Fd = {
  root: {
    background: "{content.background}",
    borderRadius: "{border.radius.xl}",
    color: "{content.color}",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
  },
  body: {
    padding: "1.25rem",
    gap: "0.5rem"
  },
  caption: {
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "500"
  },
  subtitle: {
    color: "{text.muted.color}"
  }
}, qd = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  content: {
    gap: "0.25rem"
  },
  indicatorList: {
    padding: "1rem",
    gap: "0.5rem"
  },
  indicator: {
    width: "2rem",
    height: "0.5rem",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      indicator: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}",
        activeBackground: "{primary.color}"
      }
    },
    dark: {
      indicator: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}",
        activeBackground: "{primary.color}"
      }
    }
  }
}, Vd = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    mobileIndent: "1rem"
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    icon: {
      color: "{list.option.icon.color}",
      focusColor: "{list.option.icon.focus.color}",
      size: "0.875rem"
    }
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  }
}, Hd = {
  root: {
    borderRadius: "{border.radius.sm}",
    width: "1.25rem",
    height: "1.25rem",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.hover.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.hover.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      width: "1rem",
      height: "1rem"
    },
    lg: {
      width: "1.5rem",
      height: "1.5rem"
    }
  },
  icon: {
    size: "0.875rem",
    color: "{form.field.color}",
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
    disabledColor: "{form.field.disabled.color}",
    sm: {
      size: "0.75rem"
    },
    lg: {
      size: "1rem"
    }
  }
}, zd = {
  root: {
    borderRadius: "16px",
    paddingX: "0.75rem",
    paddingY: "0.5rem",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  image: {
    width: "2rem",
    height: "2rem"
  },
  icon: {
    size: "1rem"
  },
  removeIcon: {
    size: "1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.100}",
        color: "{surface.800}"
      },
      icon: {
        color: "{surface.800}"
      },
      removeIcon: {
        color: "{surface.800}"
      }
    },
    dark: {
      root: {
        background: "{surface.800}",
        color: "{surface.0}"
      },
      icon: {
        color: "{surface.0}"
      },
      removeIcon: {
        color: "{surface.0}"
      }
    }
  }
}, Ud = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  preview: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  panel: {
    shadow: "{overlay.popover.shadow}",
    borderRadius: "{overlay.popover.borderRadius}"
  },
  colorScheme: {
    light: {
      panel: {
        background: "{surface.800}",
        borderColor: "{surface.900}"
      },
      handle: {
        color: "{surface.0}"
      }
    },
    dark: {
      panel: {
        background: "{surface.900}",
        borderColor: "{surface.700}"
      },
      handle: {
        color: "{surface.0}"
      }
    }
  }
}, Wd = {
  icon: {
    size: "2rem",
    color: "{overlay.modal.color}"
  },
  content: {
    gap: "1rem"
  }
}, Qd = {
  root: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    color: "{overlay.popover.color}",
    borderRadius: "{overlay.popover.border.radius}",
    shadow: "{overlay.popover.shadow}",
    gutter: "10px",
    arrowOffset: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}",
    gap: "1rem"
  },
  icon: {
    size: "1.5rem",
    color: "{overlay.popover.color}"
  },
  footer: {
    gap: "0.5rem",
    padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
  }
}, Gd = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    mobileIndent: "1rem"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
}, Yd = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  headerCell: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  columnTitle: {
    fontWeight: "600"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{datatable.border.color}",
    padding: "0.75rem 1rem"
  },
  footerCell: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem"
  },
  columnFooter: {
    fontWeight: "600"
  },
  footer: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  dropPoint: {
    color: "{primary.color}"
  },
  columnResizerWidth: "0.5rem",
  resizeIndicator: {
    width: "1px",
    color: "{primary.color}"
  },
  sortIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    size: "0.875rem"
  },
  loadingIcon: {
    size: "2rem"
  },
  rowToggleButton: {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  filter: {
    inlineGap: "0.5rem",
    overlaySelect: {
      background: "{overlay.select.background}",
      borderColor: "{overlay.select.border.color}",
      borderRadius: "{overlay.select.border.radius}",
      color: "{overlay.select.color}",
      shadow: "{overlay.select.shadow}"
    },
    overlayPopover: {
      background: "{overlay.popover.background}",
      borderColor: "{overlay.popover.border.color}",
      borderRadius: "{overlay.popover.border.radius}",
      color: "{overlay.popover.color}",
      shadow: "{overlay.popover.shadow}",
      padding: "{overlay.popover.padding}",
      gap: "0.5rem"
    },
    rule: {
      borderColor: "{content.border.color}"
    },
    constraintList: {
      padding: "{list.padding}",
      gap: "{list.gap}"
    },
    constraint: {
      focusBackground: "{list.option.focus.background}",
      selectedBackground: "{list.option.selected.background}",
      selectedFocusBackground: "{list.option.selected.focus.background}",
      color: "{list.option.color}",
      focusColor: "{list.option.focus.color}",
      selectedColor: "{list.option.selected.color}",
      selectedFocusColor: "{list.option.selected.focus.color}",
      separator: {
        borderColor: "{content.border.color}"
      },
      padding: "{list.option.padding}",
      borderRadius: "{list.option.border.radius}"
    }
  },
  paginatorTop: {
    borderColor: "{datatable.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{datatable.border.color}",
    borderWidth: "0 0 1px 0"
  },
  colorScheme: {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      row: {
        stripedBackground: "{surface.50}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      row: {
        stripedBackground: "{surface.950}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  }
}, Zd = {
  root: {
    borderColor: "transparent",
    borderWidth: "0",
    borderRadius: "0",
    padding: "0"
  },
  header: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem",
    borderRadius: "0"
  },
  content: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "transparent",
    borderWidth: "0",
    padding: "0",
    borderRadius: "0"
  },
  footer: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0",
    padding: "0.75rem 1rem",
    borderRadius: "0"
  },
  paginatorTop: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0"
  }
}, Xd = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.popover.shadow}",
    padding: "{overlay.popover.padding}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    padding: "0 0 0.5rem 0"
  },
  title: {
    gap: "0.5rem",
    fontWeight: "500"
  },
  dropdown: {
    width: "2.5rem",
    sm: {
      width: "2rem"
    },
    lg: {
      width: "3rem"
    },
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  inputIcon: {
    color: "{form.field.icon.color}"
  },
  selectMonth: {
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}"
  },
  selectYear: {
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}"
  },
  group: {
    borderColor: "{content.border.color}",
    gap: "{overlay.popover.padding}"
  },
  dayView: {
    margin: "0.5rem 0 0 0"
  },
  weekDay: {
    padding: "0.25rem",
    fontWeight: "500",
    color: "{content.color}"
  },
  date: {
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{primary.color}",
    rangeSelectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{primary.contrast.color}",
    rangeSelectedColor: "{highlight.color}",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    padding: "0.25rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  monthView: {
    margin: "0.5rem 0 0 0"
  },
  month: {
    padding: "0.375rem",
    borderRadius: "{content.border.radius}"
  },
  yearView: {
    margin: "0.5rem 0 0 0"
  },
  year: {
    padding: "0.375rem",
    borderRadius: "{content.border.radius}"
  },
  buttonbar: {
    padding: "0.5rem 0 0 0",
    borderColor: "{content.border.color}"
  },
  timePicker: {
    padding: "0.5rem 0 0 0",
    borderColor: "{content.border.color}",
    gap: "0.5rem",
    buttonGap: "0.25rem"
  },
  colorScheme: {
    light: {
      dropdown: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      },
      today: {
        background: "{surface.200}",
        color: "{surface.900}"
      }
    },
    dark: {
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      },
      today: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
}, Jd = {
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.border.color}",
    color: "{overlay.modal.color}",
    borderRadius: "{overlay.modal.border.radius}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding}",
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600"
  },
  content: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
  },
  footer: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
    gap: "0.5rem"
  }
}, ef = {
  root: {
    borderColor: "{content.border.color}"
  },
  content: {
    background: "{content.background}",
    color: "{text.color}"
  },
  horizontal: {
    margin: "1rem 0",
    padding: "0 1rem",
    content: {
      padding: "0 0.5rem"
    }
  },
  vertical: {
    margin: "0 1rem",
    padding: "0.5rem 0",
    content: {
      padding: "0.5rem 0"
    }
  }
}, rf = {
  root: {
    background: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    padding: "0.5rem",
    borderRadius: "{border.radius.xl}"
  },
  item: {
    borderRadius: "{content.border.radius}",
    padding: "0.5rem",
    size: "3rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, tf = {
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.border.color}",
    color: "{overlay.modal.color}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding}"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600"
  },
  content: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
  },
  footer: {
    padding: "{overlay.modal.padding}"
  }
}, nf = {
  toolbar: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}"
  },
  toolbarItem: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}",
    padding: "{list.padding}"
  },
  overlayOption: {
    focusBackground: "{list.option.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  content: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  }
}, of = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    padding: "0 1.125rem 1.125rem 1.125rem",
    transitionDuration: "{transition.duration}"
  },
  legend: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    borderColor: "transparent",
    padding: "0.5rem 0.75rem",
    gap: "0.5rem",
    fontWeight: "600",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  toggleIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}"
  },
  content: {
    padding: "0"
  }
}, af = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "transparent",
    color: "{text.color}",
    padding: "1.125rem",
    borderColor: "unset",
    borderWidth: "0",
    borderRadius: "0",
    gap: "0.5rem"
  },
  content: {
    highlightBorderColor: "{primary.color}",
    padding: "0 1.125rem 1.125rem 1.125rem",
    gap: "1rem"
  },
  file: {
    padding: "1rem",
    gap: "1rem",
    borderColor: "{content.border.color}",
    info: {
      gap: "0.5rem"
    }
  },
  fileList: {
    gap: "0.5rem"
  },
  progressbar: {
    height: "0.25rem"
  },
  basic: {
    gap: "0.5rem"
  }
}, sf = {
  root: {
    color: "{form.field.float.label.color}",
    focusColor: "{form.field.float.label.focus.color}",
    activeColor: "{form.field.float.label.active.color}",
    invalidColor: "{form.field.float.label.invalid.color}",
    transitionDuration: "0.2s",
    positionX: "{form.field.padding.x}",
    positionY: "{form.field.padding.y}",
    fontWeight: "500",
    active: {
      fontSize: "0.75rem",
      fontWeight: "400"
    }
  },
  over: {
    active: {
      top: "-1.25rem"
    }
  },
  in: {
    input: {
      paddingTop: "1.5rem",
      paddingBottom: "{form.field.padding.y}"
    },
    active: {
      top: "{form.field.padding.y}"
    }
  },
  on: {
    borderRadius: "{border.radius.xs}",
    active: {
      background: "{form.field.background}",
      padding: "0 0.125rem"
    }
  }
}, uf = {
  root: {
    borderWidth: "1px",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  navButton: {
    background: "rgba(255, 255, 255, 0.1)",
    hoverBackground: "rgba(255, 255, 255, 0.2)",
    color: "{surface.100}",
    hoverColor: "{surface.0}",
    size: "3rem",
    gutter: "0.5rem",
    prev: {
      borderRadius: "50%"
    },
    next: {
      borderRadius: "50%"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  navIcon: {
    size: "1.5rem"
  },
  thumbnailsContent: {
    background: "{content.background}",
    padding: "1rem 0.25rem"
  },
  thumbnailNavButton: {
    size: "2rem",
    borderRadius: "{content.border.radius}",
    gutter: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  thumbnailNavButtonIcon: {
    size: "1rem"
  },
  caption: {
    background: "rgba(0, 0, 0, 0.5)",
    color: "{surface.100}",
    padding: "1rem"
  },
  indicatorList: {
    gap: "0.5rem",
    padding: "1rem"
  },
  indicatorButton: {
    width: "1rem",
    height: "1rem",
    activeBackground: "{primary.color}",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  insetIndicatorList: {
    background: "rgba(0, 0, 0, 0.5)"
  },
  insetIndicatorButton: {
    background: "rgba(255, 255, 255, 0.4)",
    hoverBackground: "rgba(255, 255, 255, 0.6)",
    activeBackground: "rgba(255, 255, 255, 0.9)"
  },
  closeButton: {
    size: "3rem",
    gutter: "0.5rem",
    background: "rgba(255, 255, 255, 0.1)",
    hoverBackground: "rgba(255, 255, 255, 0.2)",
    color: "{surface.50}",
    hoverColor: "{surface.0}",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  closeButtonIcon: {
    size: "1.5rem"
  },
  colorScheme: {
    light: {
      thumbnailNavButton: {
        hoverBackground: "{surface.100}",
        color: "{surface.600}",
        hoverColor: "{surface.700}"
      },
      indicatorButton: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}"
      }
    },
    dark: {
      thumbnailNavButton: {
        hoverBackground: "{surface.700}",
        color: "{surface.400}",
        hoverColor: "{surface.0}"
      },
      indicatorButton: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}"
      }
    }
  }
}, cf = {
  icon: {
    color: "{form.field.icon.color}"
  }
}, lf = {
  root: {
    color: "{form.field.float.label.color}",
    focusColor: "{form.field.float.label.focus.color}",
    invalidColor: "{form.field.float.label.invalid.color}",
    transitionDuration: "0.2s",
    positionX: "{form.field.padding.x}",
    top: "{form.field.padding.y}",
    fontSize: "0.75rem",
    fontWeight: "400"
  },
  input: {
    paddingTop: "1.5rem",
    paddingBottom: "{form.field.padding.y}"
  }
}, df = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  preview: {
    icon: {
      size: "1.5rem"
    },
    mask: {
      background: "{mask.background}",
      color: "{mask.color}"
    }
  },
  toolbar: {
    position: {
      left: "auto",
      right: "1rem",
      top: "1rem",
      bottom: "auto"
    },
    blur: "8px",
    background: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: "1px",
    borderRadius: "30px",
    padding: ".5rem",
    gap: "0.5rem"
  },
  action: {
    hoverBackground: "rgba(255,255,255,0.1)",
    color: "{surface.50}",
    hoverColor: "{surface.0}",
    size: "3rem",
    iconSize: "1.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, ff = {
  handle: {
    size: "15px",
    hoverSize: "30px",
    background: "rgba(255,255,255,0.3)",
    hoverBackground: "rgba(255,255,255,0.3)",
    borderColor: "unset",
    hoverBorderColor: "unset",
    borderWidth: "0",
    borderRadius: "50%",
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "rgba(255,255,255,0.3)",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, hf = {
  root: {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem"
  },
  text: {
    fontWeight: "500"
  },
  icon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    }
  }
}, pf = {
  root: {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{transition.duration}"
  },
  display: {
    hoverBackground: "{content.hover.background}",
    hoverColor: "{content.hover.color}"
  }
}, mf = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  colorScheme: {
    light: {
      chip: {
        focusBackground: "{surface.200}",
        color: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
}, gf = {
  addon: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.icon.color}",
    borderRadius: "{form.field.border.radius}",
    padding: "0.5rem",
    minWidth: "2.5rem"
  }
}, bf = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  button: {
    width: "2.5rem",
    borderRadius: "{form.field.border.radius}",
    verticalPadding: "{form.field.padding.y}"
  },
  colorScheme: {
    light: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.200}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.500}",
        activeColor: "{surface.600}"
      }
    },
    dark: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        activeColor: "{surface.200}"
      }
    }
  }
}, yf = {
  root: {
    gap: "0.5rem"
  },
  input: {
    width: "2.5rem",
    sm: {
      width: "2rem"
    },
    lg: {
      width: "3rem"
    }
  }
}, vf = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  }
}, kf = {
  root: {
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  value: {
    background: "{primary.color}"
  },
  range: {
    background: "{content.border.color}"
  },
  text: {
    color: "{text.muted.color}"
  }
}, wf = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    borderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    shadow: "{form.field.shadow}",
    borderRadius: "{form.field.border.radius}",
    transitionDuration: "{form.field.transition.duration}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.375rem",
    gutterEnd: "0.375rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  colorScheme: {
    light: {
      option: {
        stripedBackground: "{surface.50}"
      }
    },
    dark: {
      option: {
        stripedBackground: "{surface.900}"
      }
    }
  }
}, _f = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    verticalOrientation: {
      padding: "{navigation.list.padding}",
      gap: "{navigation.list.gap}"
    },
    horizontalOrientation: {
      padding: "0.5rem 0.75rem",
      gap: "0.5rem"
    },
    transitionDuration: "{transition.duration}"
  },
  baseItem: {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  overlay: {
    padding: "0",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    shadow: "{overlay.navigation.shadow}",
    gap: "0.5rem"
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background.}",
    color: "{navigation.submenu.label.color}"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  mobileButton: {
    borderRadius: "50%",
    size: "1.75rem",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, Cf = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background}",
    color: "{navigation.submenu.label.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
}, xf = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.5rem 0.75rem",
    transitionDuration: "{transition.duration}"
  },
  baseItem: {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    mobileIndent: "1rem",
    icon: {
      size: "{navigation.submenu.icon.size}",
      color: "{navigation.submenu.icon.color}",
      focusColor: "{navigation.submenu.icon.focus.color}",
      activeColor: "{navigation.submenu.icon.active.color}"
    }
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  mobileButton: {
    borderRadius: "50%",
    size: "1.75rem",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, Sf = {
  root: {
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    transitionDuration: "{transition.duration}"
  },
  content: {
    padding: "0.5rem 0.75rem",
    gap: "0.5rem",
    sm: {
      padding: "0.375rem 0.625rem"
    },
    lg: {
      padding: "0.625rem 0.875rem"
    }
  },
  text: {
    fontSize: "1rem",
    fontWeight: "500",
    sm: {
      fontSize: "0.875rem"
    },
    lg: {
      fontSize: "1.125rem"
    }
  },
  icon: {
    size: "1.125rem",
    sm: {
      size: "1rem"
    },
    lg: {
      size: "1.25rem"
    }
  },
  closeButton: {
    width: "1.75rem",
    height: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  closeIcon: {
    size: "1rem",
    sm: {
      size: "0.875rem"
    },
    lg: {
      size: "1.125rem"
    }
  },
  outlined: {
    root: {
      borderWidth: "1px"
    }
  },
  simple: {
    content: {
      padding: "0"
    }
  },
  colorScheme: {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{blue.100}",
          focusRing: {
            color: "{blue.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{blue.600}",
          borderColor: "{blue.600}"
        },
        simple: {
          color: "{blue.600}"
        }
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{green.100}",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{green.600}",
          borderColor: "{green.600}"
        },
        simple: {
          color: "{green.600}"
        }
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{yellow.100}",
          focusRing: {
            color: "{yellow.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{yellow.600}",
          borderColor: "{yellow.600}"
        },
        simple: {
          color: "{yellow.600}"
        }
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{red.100}",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{red.600}",
          borderColor: "{red.600}"
        },
        simple: {
          color: "{red.600}"
        }
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.500}",
          borderColor: "{surface.500}"
        },
        simple: {
          color: "{surface.500}"
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.800}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.950}",
          borderColor: "{surface.950}"
        },
        simple: {
          color: "{surface.950}"
        }
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{blue.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{blue.500}",
          borderColor: "{blue.500}"
        },
        simple: {
          color: "{blue.500}"
        }
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{green.500}",
          borderColor: "{green.500}"
        },
        simple: {
          color: "{green.500}"
        }
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{yellow.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{yellow.500}",
          borderColor: "{yellow.500}"
        },
        simple: {
          color: "{yellow.500}"
        }
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{red.500}",
          borderColor: "{red.500}"
        },
        simple: {
          color: "{red.500}"
        }
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.400}",
          borderColor: "{surface.400}"
        },
        simple: {
          color: "{surface.400}"
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.100}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        },
        outlined: {
          color: "{surface.0}",
          borderColor: "{surface.0}"
        },
        simple: {
          color: "{surface.0}"
        }
      }
    }
  }
}, Pf = {
  root: {
    borderRadius: "{content.border.radius}",
    gap: "1rem"
  },
  meters: {
    background: "{content.border.color}",
    size: "0.5rem"
  },
  label: {
    gap: "0.5rem"
  },
  labelMarker: {
    size: "0.5rem"
  },
  labelIcon: {
    size: "1rem"
  },
  labelList: {
    verticalGap: "0.5rem",
    horizontalGap: "1rem"
  }
}, If = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    gap: "0.5rem"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
}, Of = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
}, Bf = {
  root: {
    gutter: "0.75rem",
    transitionDuration: "{transition.duration}"
  },
  node: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    selectedColor: "{highlight.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.75rem 1rem",
    toggleablePadding: "0.75rem 1rem 1.25rem 1rem",
    borderRadius: "{content.border.radius}"
  },
  nodeToggleButton: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    borderColor: "{content.border.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    size: "1.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  connector: {
    color: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "24px"
  }
}, $f = {
  root: {
    outline: {
      width: "2px",
      color: "{content.background}"
    }
  }
}, Af = {
  root: {
    padding: "0.5rem 1rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    background: "{content.background}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  navButton: {
    background: "transparent",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  currentPageReport: {
    color: "{text.muted.color}"
  },
  jumpToPageInput: {
    maxWidth: "2.5rem"
  }
}, Tf = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  },
  header: {
    background: "transparent",
    color: "{text.color}",
    padding: "1.125rem",
    borderColor: "{content.border.color}",
    borderWidth: "0",
    borderRadius: "0"
  },
  toggleableHeader: {
    padding: "0.375rem 1.125rem"
  },
  title: {
    fontWeight: "600"
  },
  content: {
    padding: "0 1.125rem 1.125rem 1.125rem"
  },
  footer: {
    padding: "0 1.125rem 1.125rem 1.125rem"
  }
}, Rf = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderWidth: "1px",
    color: "{content.color}",
    padding: "0.25rem 0.25rem",
    borderRadius: "{content.border.radius}",
    first: {
      borderWidth: "1px",
      topBorderRadius: "{content.border.radius}"
    },
    last: {
      borderWidth: "1px",
      bottomBorderRadius: "{content.border.radius}"
    }
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    gap: "0.5rem",
    padding: "{navigation.item.padding}",
    borderRadius: "{content.border.radius}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  submenu: {
    indent: "1rem"
  },
  submenuIcon: {
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}"
  }
}, Ef = {
  meter: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: ".75rem"
  },
  icon: {
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    borderRadius: "{overlay.popover.border.radius}",
    color: "{overlay.popover.color}",
    padding: "{overlay.popover.padding}",
    shadow: "{overlay.popover.shadow}"
  },
  content: {
    gap: "0.5rem"
  },
  colorScheme: {
    light: {
      strength: {
        weakBackground: "{red.500}",
        mediumBackground: "{amber.500}",
        strongBackground: "{green.500}"
      }
    },
    dark: {
      strength: {
        weakBackground: "{red.400}",
        mediumBackground: "{amber.400}",
        strongBackground: "{green.400}"
      }
    }
  }
}, Df = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
}, jf = {
  root: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    color: "{overlay.popover.color}",
    borderRadius: "{overlay.popover.border.radius}",
    shadow: "{overlay.popover.shadow}",
    gutter: "10px",
    arrowOffset: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}"
  }
}, Nf = {
  root: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "1.25rem"
  },
  value: {
    background: "{primary.color}"
  },
  label: {
    color: "{primary.contrast.color}",
    fontSize: "0.75rem",
    fontWeight: "600"
  }
}, Mf = {
  colorScheme: {
    light: {
      root: {
        "color.1": "{red.500}",
        "color.2": "{blue.500}",
        "color.3": "{green.500}",
        "color.4": "{yellow.500}"
      }
    },
    dark: {
      root: {
        "color.1": "{red.400}",
        "color.2": "{blue.400}",
        "color.3": "{green.400}",
        "color.4": "{yellow.400}"
      }
    }
  }
}, Lf = {
  root: {
    width: "1.25rem",
    height: "1.25rem",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.hover.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.hover.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      width: "1rem",
      height: "1rem"
    },
    lg: {
      width: "1.5rem",
      height: "1.5rem"
    }
  },
  icon: {
    size: "0.75rem",
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
    disabledColor: "{form.field.disabled.color}",
    sm: {
      size: "0.5rem"
    },
    lg: {
      size: "1rem"
    }
  }
}, Kf = {
  root: {
    gap: "0.25rem",
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  icon: {
    size: "1rem",
    color: "{text.muted.color}",
    hoverColor: "{primary.color}",
    activeColor: "{primary.color}"
  }
}, Ff = {
  colorScheme: {
    light: {
      root: {
        background: "rgba(0,0,0,0.1)"
      }
    },
    dark: {
      root: {
        background: "rgba(255,255,255,0.3)"
      }
    }
  }
}, qf = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  bar: {
    size: "9px",
    borderRadius: "{border.radius.sm}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      bar: {
        background: "{surface.100}"
      }
    },
    dark: {
      bar: {
        background: "{surface.800}"
      }
    }
  }
}, Vf = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.375rem",
    gutterEnd: "0.375rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
}, Hf = {
  root: {
    borderRadius: "{form.field.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        invalidBorderColor: "{form.field.invalid.border.color}"
      }
    },
    dark: {
      root: {
        invalidBorderColor: "{form.field.invalid.border.color}"
      }
    }
  }
}, zf = {
  root: {
    borderRadius: "{content.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.200}",
        animationBackground: "rgba(255,255,255,0.4)"
      }
    },
    dark: {
      root: {
        background: "rgba(255, 255, 255, 0.06)",
        animationBackground: "rgba(255, 255, 255, 0.04)"
      }
    }
  }
}, Uf = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  track: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    size: "3px"
  },
  range: {
    background: "{primary.color}"
  },
  handle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "{content.border.color}",
    hoverBackground: "{content.border.color}",
    content: {
      borderRadius: "50%",
      hoverBackground: "{content.background}",
      width: "16px",
      height: "16px",
      shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      handle: {
        contentBackground: "{surface.0}"
      }
    },
    dark: {
      handle: {
        contentBackground: "{surface.950}"
      }
    }
  }
}, Wf = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  }
}, Qf = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
  }
}, Gf = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  gutter: {
    background: "{content.border.color}"
  },
  handle: {
    size: "24px",
    background: "transparent",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, Yf = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  separator: {
    background: "{content.border.color}",
    activeBackground: "{primary.color}",
    margin: "0 0 0 1.625rem",
    size: "2px"
  },
  step: {
    padding: "0.5rem",
    gap: "1rem"
  },
  stepHeader: {
    padding: "0",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.5rem"
  },
  stepTitle: {
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    fontWeight: "500"
  },
  stepNumber: {
    background: "{content.background}",
    activeBackground: "{content.background}",
    borderColor: "{content.border.color}",
    activeBorderColor: "{content.border.color}",
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    size: "2rem",
    fontSize: "1.143rem",
    fontWeight: "500",
    borderRadius: "50%",
    shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
  },
  steppanels: {
    padding: "0.875rem 0.5rem 1.125rem 0.5rem"
  },
  steppanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0",
    indent: "1rem"
  }
}, Zf = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  separator: {
    background: "{content.border.color}"
  },
  itemLink: {
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.5rem"
  },
  itemLabel: {
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    fontWeight: "500"
  },
  itemNumber: {
    background: "{content.background}",
    activeBackground: "{content.background}",
    borderColor: "{content.border.color}",
    activeBorderColor: "{content.border.color}",
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    size: "2rem",
    fontSize: "1.143rem",
    fontWeight: "500",
    borderRadius: "50%",
    shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
  }
}, Xf = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tablist: {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  item: {
    background: "transparent",
    hoverBackground: "transparent",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.125rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  itemIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  activeBar: {
    height: "1px",
    bottom: "-1px",
    background: "{primary.color}"
  }
}, Jf = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tablist: {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  tab: {
    background: "transparent",
    hoverBackground: "transparent",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.125rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  tabpanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0.875rem 1.125rem 1.125rem 1.125rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
    }
  },
  navButton: {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    width: "2.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  activeBar: {
    height: "1px",
    bottom: "-1px",
    background: "{primary.color}"
  },
  colorScheme: {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      }
    }
  }
}, eh = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tabList: {
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  tab: {
    borderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  tabPanel: {
    background: "{content.background}",
    color: "{content.color}"
  },
  navButton: {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}"
  },
  colorScheme: {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      }
    }
  }
}, rh = {
  root: {
    fontSize: "0.875rem",
    fontWeight: "700",
    padding: "0.25rem 0.5rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    roundedBorderRadius: "{border.radius.xl}"
  },
  icon: {
    size: "0.75rem"
  },
  colorScheme: {
    light: {
      primary: {
        background: "{primary.100}",
        color: "{primary.700}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.100}",
        color: "{green.700}"
      },
      info: {
        background: "{sky.100}",
        color: "{sky.700}"
      },
      warn: {
        background: "{orange.100}",
        color: "{orange.700}"
      },
      danger: {
        background: "{red.100}",
        color: "{red.700}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "color-mix(in srgb, {primary.500}, transparent 84%)",
        color: "{primary.300}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        color: "{green.300}"
      },
      info: {
        background: "color-mix(in srgb, {sky.500}, transparent 84%)",
        color: "{sky.300}"
      },
      warn: {
        background: "color-mix(in srgb, {orange.500}, transparent 84%)",
        color: "{orange.300}"
      },
      danger: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        color: "{red.300}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  }
}, th = {
  root: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.color}",
    height: "18rem",
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{form.field.border.radius}"
  },
  prompt: {
    gap: "0.25rem"
  },
  commandResponse: {
    margin: "2px 0"
  }
}, nh = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  }
}, oh = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    mobileIndent: "1rem"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
}, ih = {
  event: {
    minHeight: "5rem"
  },
  horizontal: {
    eventContent: {
      padding: "1rem 0"
    }
  },
  vertical: {
    eventContent: {
      padding: "0 1rem"
    }
  },
  eventMarker: {
    size: "1.125rem",
    borderRadius: "50%",
    borderWidth: "2px",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    content: {
      borderRadius: "50%",
      size: "0.375rem",
      background: "{primary.color}",
      insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
    }
  },
  eventConnector: {
    color: "{content.border.color}",
    size: "2px"
  }
}, ah = {
  root: {
    width: "25rem",
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    transitionDuration: "{transition.duration}"
  },
  icon: {
    size: "1.125rem"
  },
  content: {
    padding: "{overlay.popover.padding}",
    gap: "0.5rem"
  },
  text: {
    gap: "0.5rem"
  },
  summary: {
    fontWeight: "500",
    fontSize: "1rem"
  },
  detail: {
    fontWeight: "500",
    fontSize: "0.875rem"
  },
  closeButton: {
    width: "1.75rem",
    height: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  closeIcon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      blur: "1.5px",
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{blue.100}",
          focusRing: {
            color: "{blue.600}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{green.100}",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{yellow.100}",
          focusRing: {
            color: "{yellow.600}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{red.100}",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.800}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        }
      }
    },
    dark: {
      blur: "10px",
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{blue.500}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{yellow.500}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        detailColor: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.100}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      }
    }
  }
}, sh = {
  root: {
    padding: "0.5rem 1rem",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem",
    fontWeight: "500",
    disabledBackground: "{form.field.disabled.background}",
    disabledBorderColor: "{form.field.disabled.background}",
    disabledColor: "{form.field.disabled.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      padding: "0.375rem 0.75rem"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      padding: "0.625rem 1.25rem"
    }
  },
  icon: {
    disabledColor: "{form.field.disabled.color}"
  },
  content: {
    left: "0.25rem",
    top: "0.25rem",
    checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.100}",
        checkedBackground: "{surface.100}",
        hoverBackground: "{surface.100}",
        borderColor: "{surface.100}",
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        checkedColor: "{surface.900}",
        checkedBorderColor: "{surface.100}"
      },
      content: {
        checkedBackground: "{surface.0}"
      },
      icon: {
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        checkedColor: "{surface.900}"
      }
    },
    dark: {
      root: {
        background: "{surface.950}",
        checkedBackground: "{surface.950}",
        hoverBackground: "{surface.950}",
        borderColor: "{surface.950}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        checkedColor: "{surface.0}",
        checkedBorderColor: "{surface.950}"
      },
      content: {
        checkedBackground: "{surface.800}"
      },
      icon: {
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        checkedColor: "{surface.0}"
      }
    }
  }
}, uh = {
  root: {
    width: "2.5rem",
    height: "1.5rem",
    borderRadius: "30px",
    gap: "0.25rem",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    borderWidth: "1px",
    borderColor: "transparent",
    hoverBorderColor: "transparent",
    checkedBorderColor: "transparent",
    checkedHoverBorderColor: "transparent",
    invalidBorderColor: "{form.field.invalid.border.color}",
    transitionDuration: "{form.field.transition.duration}",
    slideDuration: "0.2s"
  },
  handle: {
    borderRadius: "50%",
    size: "1rem"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.300}",
        disabledBackground: "{form.field.disabled.background}",
        hoverBackground: "{surface.400}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}"
      },
      handle: {
        background: "{surface.0}",
        disabledBackground: "{form.field.disabled.color}",
        hoverBackground: "{surface.0}",
        checkedBackground: "{surface.0}",
        checkedHoverBackground: "{surface.0}",
        color: "{text.muted.color}",
        hoverColor: "{text.color}",
        checkedColor: "{primary.color}",
        checkedHoverColor: "{primary.hover.color}"
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        disabledBackground: "{surface.600}",
        hoverBackground: "{surface.600}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}"
      },
      handle: {
        background: "{surface.400}",
        disabledBackground: "{surface.900}",
        hoverBackground: "{surface.300}",
        checkedBackground: "{surface.900}",
        checkedHoverBackground: "{surface.900}",
        color: "{surface.900}",
        hoverColor: "{surface.800}",
        checkedColor: "{primary.color}",
        checkedHoverColor: "{primary.hover.color}"
      }
    }
  }
}, ch = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.75rem"
  }
}, lh = {
  root: {
    maxWidth: "12.5rem",
    gutter: "0.25rem",
    shadow: "{overlay.popover.shadow}",
    padding: "0.5rem 0.75rem",
    borderRadius: "{overlay.popover.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
}, dh = {
  root: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "1rem",
    gap: "2px",
    indent: "1rem",
    transitionDuration: "{transition.duration}"
  },
  node: {
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.color}",
    hoverColor: "{text.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.25rem"
  },
  nodeIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}"
  },
  nodeToggleButton: {
    borderRadius: "50%",
    size: "1.75rem",
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedHoverColor: "{primary.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  loadingIcon: {
    size: "2rem"
  },
  filter: {
    margin: "0 0 0.5rem 0"
  }
}, fh = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledHoverBackground: "{form.field.filled.hover.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    invalidPlaceholderColor: "{form.field.invalid.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "{form.field.sm.font.size}",
      paddingX: "{form.field.sm.padding.x}",
      paddingY: "{form.field.sm.padding.y}"
    },
    lg: {
      fontSize: "{form.field.lg.font.size}",
      paddingX: "{form.field.lg.padding.x}",
      paddingY: "{form.field.lg.padding.y}"
    }
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  tree: {
    padding: "{list.padding}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  }
}, hh = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  headerCell: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  columnTitle: {
    fontWeight: "600"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{treetable.border.color}",
    padding: "0.75rem 1rem",
    gap: "0.5rem"
  },
  footerCell: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem"
  },
  columnFooter: {
    fontWeight: "600"
  },
  footer: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  columnResizerWidth: "0.5rem",
  resizeIndicator: {
    width: "1px",
    color: "{primary.color}"
  },
  sortIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    size: "0.875rem"
  },
  loadingIcon: {
    size: "2rem"
  },
  nodeToggleButton: {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  paginatorTop: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  colorScheme: {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  }
}, ph = {
  loader: {
    mask: {
      background: "{content.background}",
      color: "{text.muted.color}"
    },
    icon: {
      size: "2rem"
    }
  }
};
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xn(e);
}
function ts(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ns(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ts(Object(t), !0).forEach(function(o) {
      mh(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ts(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function mh(e, r, t) {
  return (r = gh(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function gh(e) {
  var r = bh(e, "string");
  return xn(r) == "symbol" ? r : r + "";
}
function bh(e, r) {
  if (xn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (xn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var yh = ns(ns({}, Nd), {}, {
  components: {
    accordion: Rd,
    autocomplete: Ed,
    avatar: Dd,
    badge: jd,
    blockui: Md,
    breadcrumb: Ld,
    button: Kd,
    datepicker: Xd,
    card: Fd,
    carousel: qd,
    cascadeselect: Vd,
    checkbox: Hd,
    chip: zd,
    colorpicker: Ud,
    confirmdialog: Wd,
    confirmpopup: Qd,
    contextmenu: Gd,
    dataview: Zd,
    datatable: Yd,
    dialog: Jd,
    divider: ef,
    dock: rf,
    drawer: tf,
    editor: nf,
    fieldset: of,
    fileupload: af,
    iftalabel: lf,
    floatlabel: sf,
    galleria: uf,
    iconfield: cf,
    image: df,
    imagecompare: ff,
    inlinemessage: hf,
    inplace: pf,
    inputchips: mf,
    inputgroup: gf,
    inputnumber: bf,
    inputotp: yf,
    inputtext: vf,
    knob: kf,
    listbox: wf,
    megamenu: _f,
    menu: Cf,
    menubar: xf,
    message: Sf,
    metergroup: Pf,
    multiselect: If,
    orderlist: Of,
    organizationchart: Bf,
    overlaybadge: $f,
    popover: jf,
    paginator: Af,
    password: Ef,
    panel: Tf,
    panelmenu: Rf,
    picklist: Df,
    progressbar: Nf,
    progressspinner: Mf,
    radiobutton: Lf,
    rating: Kf,
    scrollpanel: qf,
    select: Vf,
    selectbutton: Hf,
    skeleton: zf,
    slider: Uf,
    speeddial: Wf,
    splitter: Gf,
    splitbutton: Qf,
    stepper: Yf,
    steps: Zf,
    tabmenu: Xf,
    tabs: Jf,
    tabview: eh,
    textarea: nh,
    tieredmenu: oh,
    tag: rh,
    terminal: th,
    timeline: ih,
    togglebutton: sh,
    toggleswitch: uh,
    tree: dh,
    treeselect: fh,
    treetable: hh,
    toast: ah,
    toolbar: ch,
    virtualscroller: ph
  },
  directives: {
    tooltip: lh,
    ripple: Ff
  }
}), vh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,15c-3.86,0-7-3.14-7-7S4.14,1,8,1s7,3.14,7,7-3.14,7-7,7Zm0-13c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Z" fill="currentColor"/><path d="M8,11.5c-.28,0-.5-.22-.5-.5V5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v6c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11,8.5H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h6c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', os = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 27"><polygon fill="currentColor" points="26.99 0 10.13 17.17 4.69 11.63 0 16.41 10.4 27 15.05 22.27 15.09 22.31 32 5.1 26.99 0"/></svg>', kh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle fill="currentColor" cx="16" cy="16" r="16"/></svg>', is = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/><path d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', wh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 80" fill="currentColor"><path d="M0,72c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM0,40c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8S0,44.4,0,40ZM0,8C0,3.6,3.6,0,8,0s8,3.6,8,8-3.6,8-8,8S0,12.4,0,8ZM30,72c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM30,40c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM30,8c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8Z"/></svg>', _h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="M7.56,13.88c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5c2.96,0,5.38-2.41,5.38-5.38S10.53,2.12,7.56,2.12c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5c3.52,0,6.38,2.86,6.38,6.38s-2.86,6.38-6.38,6.38Z"/></svg>', Ch = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="M11.41,8.41h0l1.14-.93,1.14-.93c.48-.39,.37-.74-.25-.77l-1.58-.09-2.5-.14-.41-1.05s0,0,0,0l-.53-1.38-.53-1.38c-.22-.58-.59-.58-.81,0l-1.07,2.75s0,0,0,0l-.41,1.05-2.5,.14-1.58,.09c-.62,.03-.73,.38-.25,.77l1.14,.93,1.14,.93h0l.87,.71-.57,2.15-.47,1.79c-.16,.6,.14,.81,.66,.48l2.48-1.6h0s.94-.61,.94-.61l.94,.61h0s1.24,.8,1.24,.8l1.24,.8c.52,.33,.82,.12,.66-.48l-.47-1.79-.57-2.15,.87-.71Z"/></svg>', xh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.5,4H1.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H14.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11.02,3.81l-.44-1.46c-.06-.21-.26-.36-.48-.36H5.9c-.22,0-.41,.14-.48,.36l-.44,1.46-.96-.29,.44-1.46c.19-.64,.77-1.07,1.44-1.07h4.2c.67,0,1.24,.43,1.44,1.07l.44,1.46-.96,.29Z" fill="currentColor"/><path d="M11.53,15H4.47c-.81,0-1.47-.64-1.5-1.45l-.34-9.87,1-.03,.34,9.87c0,.27,.23,.48,.5,.48h7.07c.27,0,.49-.21,.5-.48l.34-9.87,1,.03-.34,9.87c-.03,.81-.69,1.45-1.5,1.45Z" fill="currentColor"/><path d="M6.5,11.62c-.28,0-.5-.22-.5-.5V7.12c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M9.5,11.62c-.28,0-.5-.22-.5-.5V7.12c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4c0,.28-.22,.5-.5,.5Z" fill="currentColor"/></svg>', Sh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"><path d="M3.09,11.01c-.18,0-.36-.05-.53-.14-.35-.19-.57-.56-.57-.96V2.09c0-.4,.22-.77,.57-.96,.35-.19,.78-.18,1.12,.03l3.03,1.92c.23,.15,.3,.46,.15,.69-.15,.23-.46,.3-.69,.15l-3.03-1.92s-.07-.02-.1,0-.05,.05-.05,.09v7.82s.02,.07,.05,.09c.03,.02,.07,.02,.1,0l3.03-1.92c.23-.15,.54-.08,.69,.15,.15,.23,.08,.54-.15,.69l-3.03,1.92c-.18,.11-.38,.17-.59,.17Z" fill="currentColor"/><path d="M7.04,10.98c-.18,0-.36-.04-.52-.13-.36-.19-.58-.56-.58-.97V2.11c0-.41,.22-.78,.58-.97,.36-.19,.79-.17,1.13,.05l5.87,3.89c.31,.2,.49,.55,.49,.92,0,.37-.18,.71-.49,.92l-5.87,3.89c-.18,.12-.39,.18-.61,.18Zm0-8.97s-.03,0-.05,.01c-.03,.02-.05,.05-.05,.09v7.77s.02,.07,.05,.09c.03,.02,.07,.02,.1,0l5.87-3.89,.28-.58-.28,.42L7.09,2.03s-.04-.02-.05-.02Z" fill="currentColor"/></svg>', Ph = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"><path d="M12.91,11.01c-.2,0-.41-.06-.59-.17l-3.03-1.92c-.23-.15-.3-.46-.15-.69,.15-.23,.46-.3,.69-.15l3.03,1.92s.07,.02,.1,0,.05-.05,.05-.09V2.09s-.02-.07-.05-.09c-.03-.02-.07-.02-.1,0l-3.03,1.92c-.23,.15-.54,.08-.69-.15-.15-.23-.08-.54,.15-.69l3.03-1.92c.34-.21,.77-.23,1.12-.03,.35,.19,.57,.56,.57,.96v7.82c0,.4-.22,.77-.57,.96-.17,.09-.35,.14-.53,.14Z" fill="currentColor"/><path d="M8.96,10.98c-.21,0-.42-.06-.61-.18L2.49,6.92c-.31-.2-.49-.55-.49-.92,0-.37,.18-.71,.49-.92L8.36,1.2c.34-.22,.77-.24,1.13-.05,.36,.19,.58,.56,.58,.97v7.77c0,.41-.22,.78-.58,.97-.16,.09-.34,.13-.52,.13ZM2.76,5.5l.28,.42s-.04,.06-.04,.08l5.92,3.97s.07,.02,.1,0c.03-.02,.05-.05,.05-.09V2.11s-.02-.07-.05-.09c-.03-.02-.07-.02-.1,0L3.04,5.92l-.28-.42Z" fill="currentColor"/></svg>', Ih = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"><path d="M4.5,13c-.28,0-.5-.22-.5-.5V3.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V12.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M4.5,14c-.13,0-.26-.05-.35-.15L.65,10.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l3.15,3.15,3.15-3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-3.5,3.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Oh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"><path d="M4.5,14c-.28,0-.5-.22-.5-.5V4.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V13.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M8,7.5c-.13,0-.26-.05-.35-.15l-3.15-3.15L1.35,7.35c-.2,.2-.51,.2-.71,0-.2-.2-.2-.51,0-.71l3.5-3.5c.2-.2,.51-.2,.71,0l3.5,3.5c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Bh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 7"><path d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', $h = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16"><path d="M5.5,13c-.13,0-.26-.05-.35-.15L.65,8.35c-.2-.2-.2-.51,0-.71L5.15,3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L1.71,8l4.15,4.15c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Ah = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16"><path d="M1.5,13c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71l4.15-4.15L1.15,3.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L6.35,7.65c.2,.2,.2,.51,0,.71L1.85,12.85c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', as = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16"><path d="M12.5,16H2.5c-.83,0-1.5-.67-1.5-1.5V1.5c0-.83,.67-1.5,1.5-1.5h7.09c.4,0,.78,.16,1.06,.44l2.91,2.91c.28,.28,.44,.66,.44,1.06V14.5c0,.83-.67,1.5-1.5,1.5ZM2.5,1c-.28,0-.5,.22-.5,.5V14.5c0,.28,.22,.5,.5,.5H12.5c.28,0,.5-.22,.5-.5V4.41c0-.13-.05-.26-.15-.35l-2.91-2.91c-.09-.09-.22-.15-.35-.15H2.5Z" fill="currentColor"/><path d="M13.38,5h-2.91c-.81,0-1.47-.66-1.47-1.47V.62c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.53c0,.26,.21,.47,.47,.47h2.91c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M10,13H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M10,10H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M7,7h-2c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h2c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', Th = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.5,14H2.5c-.28,0-.5-.22-.5-.5v-3c0-.13,.05-.26,.15-.35L7.15,5.15c.2-.2,.51-.2,.71,0l3,3c.2,.2,.2,.51,0,.71l-5,5c-.09,.09-.22,.15-.35,.15Zm-2.5-1h2.29l4.5-4.5-2.29-2.29L3,10.71v2.29Z" fill="currentColor"/><path d="M13.37,5.62l-1.38,1.38-3-3,1.38-1.38c.42-.42,.96-.62,1.5-.62s1.08,.2,1.5,.62c.83,.83,.83,2.17,0,3Z" fill="currentColor"/><path d="M12.5,8c-.13,0-.26-.05-.35-.15L8.15,3.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4,4c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Rh = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.5,16H1.5c-.83,0-1.5-.67-1.5-1.5V2.5c0-.83,.67-1.5,1.5-1.5H14.5c.83,0,1.5,.67,1.5,1.5V14.5c0,.83-.67,1.5-1.5,1.5ZM1.5,2c-.28,0-.5,.22-.5,.5V14.5c0,.28,.22,.5,.5,.5H14.5c.28,0,.5-.22,.5-.5V2.5c0-.28-.22-.5-.5-.5H1.5Z" fill="currentColor"/><path d="M4.5,4c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11.5,4c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M15.5,6H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H15.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', Eh = {
  add: vh,
  arrowDown: Ih,
  arrowUp: Oh,
  check: os,
  close: is,
  checkboxDecorator: os,
  date: Rh,
  dragHandle: wh,
  fileItem: as,
  fileRemove: is,
  noFiles: as,
  radioDecorator: kh,
  select: Bh,
  spinner: _h,
  star: Ch,
  trash: xh,
  fastForward: Sh,
  right: Ah,
  left: $h,
  rewind: Ph,
  color: Th
}, Dh = [
  "__key",
  "__init",
  "__shim",
  "__original",
  "__index",
  "__prevKey"
];
function eu() {
  return Math.random().toString(36).substring(2, 15);
}
function ss(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
function xo(e, r, t = !0, o = ["__key"]) {
  if (e === r)
    return !0;
  if (typeof r == "object" && typeof e == "object") {
    if (e instanceof Map || e instanceof Set)
      return !1;
    if (e instanceof Date && r instanceof Date)
      return e.getTime() === r.getTime();
    if (e instanceof RegExp && r instanceof RegExp)
      return jh(e, r);
    if (e === null || r === null || Object.keys(e).length !== Object.keys(r).length)
      return !1;
    for (const a of o)
      if ((a in e || a in r) && e[a] !== r[a])
        return !1;
    for (const a in e)
      if (!(a in r) || e[a] !== r[a] && !t || t && !xo(e[a], r[a], t, o))
        return !1;
    return !0;
  }
  return !1;
}
function jh(e, r) {
  return e.source === r.source && e.flags.split("").sort().join("") === r.flags.split("").sort().join("");
}
function bi(e) {
  const r = typeof e;
  if (r === "number")
    return !1;
  if (e === void 0)
    return !0;
  if (r === "string")
    return e === "";
  if (r === "object") {
    if (e === null)
      return !0;
    for (const t in e)
      return !1;
    return !(e instanceof RegExp || e instanceof Date);
  }
  return !1;
}
function Ti(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ho(e) {
  return Ti(e) || Array.isArray(e);
}
function us(e) {
  if (Ti(e) === !1 || e.__FKNode__ || e.__POJO__ === !1)
    return !1;
  const r = e.constructor;
  if (r === void 0)
    return !0;
  const t = r.prototype;
  return !(Ti(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1);
}
var ru = /* @__NO_SIDE_EFFECTS__ */ (e, r, t = !1, o = !1) => {
  if (r === null)
    return null;
  const a = {};
  if (typeof r == "string")
    return r;
  for (const u in e)
    if (ss(r, u) && (r[u] !== void 0 || !o)) {
      if (t && Array.isArray(e[u]) && Array.isArray(r[u])) {
        a[u] = e[u].concat(r[u]);
        continue;
      }
      if (r[u] === void 0)
        continue;
      us(e[u]) && us(r[u]) ? a[u] = /* @__PURE__ */ ru(
        e[u],
        r[u],
        t,
        o
      ) : a[u] = r[u];
    } else
      a[u] = e[u];
  for (const u in r)
    !ss(a, u) && r[u] !== void 0 && (a[u] = r[u]);
  return a;
};
function Nh(e) {
  return e.replace(
    /-([a-z0-9])/gi,
    (r, t) => t.toUpperCase()
  );
}
function Mh(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (r, t, o) => t + "-" + o.toLowerCase()
  ).replace(" ", "-").toLowerCase();
}
function bo(e, r = Dh) {
  if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File)
    return e;
  let t;
  Array.isArray(e) ? t = e.map((o) => typeof o == "object" ? bo(o, r) : o) : t = Object.keys(e).reduce((o, a) => (o[a] = typeof e[a] == "object" ? bo(e[a], r) : e[a], o), {});
  for (const o of r)
    o in e && Object.defineProperty(t, o, {
      enumerable: !1,
      value: e[o]
    });
  return t;
}
function Ri(e) {
  return typeof e == "object" ? bo(e) : e;
}
function cs(e) {
  return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0;
}
function Vt(e) {
  return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
    enumerable: !1,
    value: !0
  });
}
function Lh(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-");
}
function tu() {
  const e = [];
  let r = 0;
  const t = (a) => e.push(a), o = (a) => {
    const u = e[r];
    return typeof u == "function" ? u(a, (f) => (r++, o(f))) : (r = 0, a);
  };
  return t.dispatch = o, t.unshift = (a) => e.unshift(a), t.remove = (a) => {
    const u = e.indexOf(a);
    u > -1 && e.splice(u, 1);
  }, t;
}
function Kh() {
  const e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  let t;
  const o = (a, u) => {
    if (t) {
      t.set(u.name, [a, u]);
      return;
    }
    e.has(u.name) && e.get(u.name).forEach((f) => {
      (u.origin === a || f.modifiers.includes("deep")) && f.listener(u);
    }), u.bubble && a.bubble(u);
  };
  return o.flush = () => {
    e.clear(), r.clear(), t == null || t.clear();
  }, o.on = (a, u, f = "push") => {
    const [d, ...p] = a.split("."), y = u.receipt || eu(), k = {
      modifiers: p,
      event: d,
      listener: u,
      receipt: y
    };
    return e.has(d) ? e.get(d)[f](k) : e.set(d, [k]), r.has(y) ? r.get(y)[f](d) : r.set(y, [d]), y;
  }, o.off = (a) => {
    var u;
    r.has(a) && ((u = r.get(a)) == null || u.forEach((f) => {
      const d = e.get(f);
      Array.isArray(d) && e.set(
        f,
        d.filter((p) => p.receipt !== a)
      );
    }), r.delete(a));
  }, o.pause = (a) => {
    t || (t = /* @__PURE__ */ new Map()), a && a.walk((u) => u._e.pause());
  }, o.play = (a) => {
    if (!t)
      return;
    const u = t;
    t = void 0, u.forEach(([f, d]) => o(f, d)), a && a.walk((f) => f._e.play());
  }, o;
}
function Fh(e, r, t, o, a = !0, u) {
  return r._e(e, {
    payload: o,
    name: t,
    bubble: a,
    origin: e,
    meta: u
  }), e;
}
function qh(e, r, t) {
  return Qi(e.parent) && e.parent._e(e.parent, t), e;
}
function Vh(e, r, t, o, a) {
  return r._e.on(t, o, a);
}
function Hh(e, r, t) {
  return r._e.off(t), e;
}
var nu = tu();
nu((e, r) => (e.message || (e.message = `E${e.code}`), r(e)));
var ou = tu();
ou((e, r) => {
  e.message || (e.message = `W${e.code}`);
  const t = r(e);
  return console && typeof console.warn == "function" && console.warn(t.message), t;
});
function iu(e, r = {}) {
  ou.dispatch({ code: e, data: r });
}
function Sn(e, r = {}) {
  throw Error(nu.dispatch({ code: e, data: r }).message);
}
function zh(e, r) {
  return {
    blocking: !1,
    key: eu(),
    meta: {},
    type: "state",
    visible: !0,
    ...e
  };
}
function Uh(e, ...r) {
  const t = `${e.name}-set`, o = (a) => /* @__PURE__ */ zh({
    key: Lh(a),
    type: "error",
    value: a,
    meta: { source: t, autoClear: !0 }
  });
  return r.filter((a) => !!a).map((a) => {
    if (typeof a == "string" && (a = [a]), Array.isArray(a))
      return a.map((u) => o(u));
    {
      const u = {};
      for (const f in a)
        Array.isArray(a[f]) ? u[f] = a[f].map(
          (d) => o(d)
        ) : u[f] = [o(a[f])];
      return u;
    }
  });
}
var au = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Map(), Wh = Kh();
function Qh(e) {
  if (yi.has(e)) {
    const r = yi.get(e);
    yi.delete(e), au.delete(r), Wh(e, {
      payload: null,
      name: r,
      bubble: !1,
      origin: e
    });
  }
}
function Gh(e) {
  return au.get(e);
}
function ls(e, r, t) {
  let o = !0;
  return r in e.config._t ? o = !1 : e.emit(`config:${r}`, t, !1), r in e.props || (e.emit("prop", { prop: r, value: t }), e.emit(`prop:${r}`, t)), o;
}
function Yh(e, r) {
  const t = (r || document).getElementById(e);
  if (t instanceof HTMLFormElement) {
    const o = new Event("submit", { cancelable: !0, bubbles: !0 });
    t.dispatchEvent(o);
    return;
  }
  iu(151, e);
}
function Zh(e) {
  const r = (t) => {
    for (const o in t.store) {
      const a = t.store[o];
      a.type === "error" || a.type === "ui" && o === "incomplete" ? t.store.remove(o) : a.type === "state" && t.store.set({ ...a, value: !1 });
    }
  };
  r(e), e.walk(r);
}
function Xh(e, r) {
  const t = typeof e == "string" ? Gh(e) : e;
  if (t) {
    const o = (f) => {
      const d = Ri(f.props.initial);
      return d !== void 0 ? d : f.type === "group" ? {} : f.type === "list" ? [] : void 0;
    };
    t._e.pause(t);
    const a = Ri(r);
    return r && !bi(r) && (t.props.initial = ho(a) ? Vt(a) : a, t.props._init = t.props.initial), t.input(o(t), !1), t.walk((f) => {
      f.type === "list" && f.sync || f.input(o(f), !1);
    }), t.input(
      bi(a) && a ? a : o(t),
      !1
    ), t.type !== "input" && r && !bi(r) && ho(r) && t.walk((f) => {
      f.props.initial = ho(f.value) ? Vt(f.value) : f.value, f.props._init = f.props.initial;
    }), t._e.play(t), Zh(t), t.emit("reset", t), t;
  }
  iu(152, e);
}
var Jh = {
  delimiter: ".",
  delay: 0,
  locale: "en",
  rootClasses: (e) => ({ [`formkit-${Mh(e)}`]: !0 })
}, ep = Symbol("index"), Ei = Symbol("removed"), Di = Symbol("moved"), su = Symbol("inserted");
function rp(e) {
  return e.type === "list" && Array.isArray(e._value);
}
function Qi(e) {
  return e && typeof e == "object" && e.__FKNode__ === !0;
}
var po = (e, r, t) => {
  Sn(102, [e, t]);
};
pe(wp, po, !1), pe(hp), pe(fp), pe(Cp, po, !1), pe(xp), pe(qh), pe(Ep), pe(cp), pe(!1), pe(dp), pe(up), pe(lp), pe(Dp), pe(ap), pe(kp, vp, !1), pe(op), pe(gp), pe(Fh), pe(Pp), pe(Vh), pe(Hh), pe(!1, pp), pe(!1), pe(mp), pe(Op, po, !1), pe(Tp), pe(yp), pe(Rp), pe(Ap), pe($p), pe(lu), pe(_p, !1, !1), pe(bp);
function pe(e, r, t = !0) {
  return {
    get: e ? (o, a) => t ? (...u) => e(o, a, ...u) : e(o, a) : !1,
    set: r !== void 0 ? r : po.bind(null)
  };
}
var tp = 0;
function np(e) {
  return e.type === "group" ? Vt(
    e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}
  ) : e.type === "list" ? Vt(Array.isArray(e.value) ? e.value : []) : e.value;
}
function op(e, r, t, o = !0) {
  return r._value = ip(e, e.hook.input.dispatch(t)), e.emit("input", r._value), e.isCreated && e.type === "input" && xo(r._value, r.value) && !e.props.mergeStrategy ? (e.emit("commitRaw", r.value), r.settled) : (r.isSettled && e.disturb(), o ? (r._tmo && clearTimeout(r._tmo), r._tmo = setTimeout(
    yo,
    e.props.delay,
    e,
    r
  )) : yo(e, r), r.settled);
}
function ip(e, r) {
  switch (e.type) {
    case "input":
      break;
    case "group":
      (!r || typeof r != "object") && Sn(107, [e, r]);
      break;
    case "list":
      Array.isArray(r) || Sn(108, [e, r]);
      break;
  }
  return r;
}
function yo(e, r, t = !0, o = !0) {
  r._value = r.value = e.hook.commit.dispatch(r._value), e.type !== "input" && o && e.hydrate(), e.emit("commitRaw", r.value), e.emit("commit", r.value), t && e.calm();
}
function uu(e, { name: r, value: t, from: o }) {
  if (!Object.isFrozen(e._value)) {
    if (rp(e)) {
      const a = t === Ei ? [] : t === Di && typeof o == "number" ? e._value.splice(o, 1) : [t];
      e._value.splice(
        r,
        t === Di || o === su ? 0 : 1,
        ...a
      );
      return;
    }
    t !== Ei ? e._value[r] = t : delete e._value[r];
  }
}
function ap(e, r) {
  const t = r._value;
  return e.type === "list" && e.sync && sp(e, r), r.children.forEach((o) => {
    if (typeof t == "object")
      if (o.name in t) {
        const a = o.type !== "input" || t[o.name] && typeof t[o.name] == "object" ? Vt(t[o.name]) : t[o.name];
        if (!o.isSettled || (!ho(a) || o.props.mergeStrategy) && xo(a, o._value))
          return;
        o.input(a, !1);
      } else
        (e.type !== "list" || typeof o.name == "number") && uu(r, { name: o.name, value: o.value }), t.__init || (o.type === "group" ? o.input({}, !1) : o.type === "list" ? o.input([], !1) : o.input(void 0, !1));
  }), e;
}
function sp(e, r) {
  const t = e._value;
  if (!Array.isArray(t))
    return;
  const o = [], a = new Set(r.children), u = /* @__PURE__ */ new Map();
  t.forEach((d, p) => {
    if (r.children[p] && r.children[p]._value === d)
      o.push(r.children[p]), a.delete(r.children[p]);
    else {
      o.push(null);
      const y = u.get(d) || [];
      y.push(p), u.set(d, y);
    }
  }), a.size && u.size && a.forEach((d) => {
    if (u.has(d._value)) {
      const p = u.get(d._value), y = p.shift();
      o[y] = d, a.delete(d), p.length || u.delete(d._value);
    }
  });
  const f = [];
  for (u.forEach((d) => {
    f.push(...d);
  }); a.size && f.length; ) {
    const d = a.values().next().value, p = f.shift();
    if (p === void 0)
      break;
    o[p] = d, a.delete(d);
  }
  f.forEach((d, p) => {
    o[d] = jp({ value: p });
  }), a.size && a.forEach((d) => {
    if (!("__FKP" in d)) {
      const p = d._c.parent;
      if (!p || Np(p))
        return;
      p.ledger.unmerge(d), d._c.parent = null, d.destroy();
    }
  }), r.children = o;
}
function up(e, r) {
  var t;
  return r._d <= 0 && (r.isSettled = !1, e.emit("settled", !1, !1), r.settled = new Promise((o) => {
    r._resolve = o;
  }), e.parent && ((t = e.parent) == null || t.disturb())), r._d++, e;
}
function cp(e, r, t) {
  var o;
  if (t !== void 0 && e.type !== "input") {
    uu(r, t);
    const a = !!(e.config.mergeStrategy && e.config.mergeStrategy[t.name]);
    return yo(e, r, !0, a);
  }
  r._d > 0 && r._d--, r._d === 0 && (r.isSettled = !0, e.emit("settled", !0, !1), e.parent && ((o = e.parent) == null || o.calm({ name: e.name, value: r.value })), r._resolve && r._resolve(r.value));
}
function lp(e, r) {
  e.emit("destroying", e), e.store.filter(() => !1), e.parent && e.parent.remove(e), Qh(e), e.emit("destroyed", e), r._e.flush(), r._value = r.value = void 0;
  for (const t in r.context)
    delete r.context[t];
  r.plugins.clear(), r.context = null;
}
function dp(e, r, t) {
  r.type = t.type;
  const o = bo(t);
  e.props.__propDefs = cu(
    e.props.__propDefs ?? [],
    (o == null ? void 0 : o.props) || []
  ), o.props = e.props.__propDefs, r.props.definition = o, r.value = r._value = np({
    type: e.type,
    value: r.value
  }), t.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), r.props.type = t.forceTypeProp), t.family && (r.props.family = t.family), t.features && t.features.forEach((a) => a(e)), t.props && e.addProps(t.props), e.emit("defined", t);
}
function fp(e, r, t) {
  const o = Array.isArray(t) ? t : Object.keys(t), a = Array.isArray(t) ? {} : o.reduce((f, d) => ("default" in t[d] && (f[d] = t[d].default), f), {});
  if (e.props.attrs) {
    const f = { ...e.props.attrs };
    e.props._emit = !1;
    for (const p in f) {
      const y = Nh(p);
      o.includes(y) && (e.props[y] = f[p], delete f[p]);
    }
    Array.isArray(t) || o.forEach((p) => {
      "default" in t[p] && e.props[p] === void 0 && (e.props[p] = a[p]);
    });
    const d = Ri(r._value);
    e.props.initial = e.type !== "input" ? Vt(d) : d, e.props._emit = !0, e.props.attrs = f;
  }
  const u = cu(e.props.__propDefs ?? [], t);
  return e.props.definition && (e.props.definition.props = u), e.props.__propDefs = u, e.emit("added-props", t), e;
}
function ds(e) {
  return Array.isArray(e) ? e.reduce((r, t) => (r[t] = {}, r), {}) : e;
}
function cu(e, r) {
  return Array.isArray(e) && Array.isArray(r) ? e.concat(r) : ru(ds(e), ds(r));
}
function hp(e, r, t, o) {
  if (e.type === "input" && Sn(100, e), t.parent && t.parent !== e && t.parent.remove(t), !r.children.includes(t)) {
    if (o !== void 0 && e.type === "list") {
      const a = r.children[o];
      a && "__FKP" in a ? (t._c.uid = a.uid, r.children.splice(o, 1, t)) : r.children.splice(o, 0, t), Array.isArray(e.value) && e.value.length < r.children.length && e.disturb().calm({
        name: o,
        value: t.value,
        from: su
      });
    } else
      r.children.push(t);
    t.isSettled || e.disturb();
  }
  if (t.parent !== e) {
    if (t.parent = e, t.parent !== e)
      return e.remove(t), t.parent.add(t), e;
  } else
    t.use(e.plugins);
  return yo(e, r, !1), e.ledger.merge(t), e.emit("child", t), e;
}
function pp(e, r, t, o) {
  return Qi(o) ? (e.parent && e.parent !== o && e.parent.remove(e), r.parent = o, e.resetConfig(), o.children.includes(e) ? e.use(o.plugins) : o.add(e), !0) : o === null ? (r.parent = null, !0) : !1;
}
function mp(e, r, t) {
  const o = r.children.indexOf(t);
  if (o !== -1) {
    t.isSettled && e.disturb(), r.children.splice(o, 1);
    let a = cs(t.props.preserve), u = t.parent;
    for (; a === void 0 && u; )
      a = cs(u.props.preserve), u = u.parent;
    a ? e.calm() : e.calm({
      name: e.type === "list" ? o : t.name,
      value: Ei
    }), t.parent = null, t.config._rmn = t;
  }
  return e.ledger.unmerge(t), e.emit("childRemoved", t), e;
}
function gp(e, r, t) {
  r.children.forEach((o) => !("__FKP" in o) && t(o));
}
function bp(e, r, t, o = !1, a = !1) {
  r.children.some((u) => {
    if ("__FKP" in u)
      return !1;
    const f = t(u);
    return o && f === !1 ? !0 : a && f === !1 ? !1 : u.walk(t, o, a);
  });
}
function yp(e, r) {
  const t = e.parent || void 0;
  r.config = Bp(e.config._t, t), e.walk((o) => o.resetConfig());
}
function lu(e, r, t, o = !0, a = !0) {
  return Array.isArray(t) || t instanceof Set ? (t.forEach((u) => lu(e, r, u)), e) : (r.plugins.has(t) || (a && typeof t.library == "function" && t.library(e), o && t(e) !== !1 && (r.plugins.add(t), e.children.forEach((u) => u.use(t)))), e);
}
function vp(e, r, t, o) {
  if (Qi(e.parent)) {
    const a = e.parent.children, u = o >= a.length ? a.length - 1 : o < 0 ? 0 : o, f = a.indexOf(e);
    return f === -1 ? !1 : (a.splice(f, 1), a.splice(u, 0, e), e.parent.children = a, e.parent.type === "list" && e.parent.disturb().calm({ name: u, value: Di, from: f }), !0);
  }
  return !1;
}
function kp(e) {
  if (e.parent) {
    const r = [...e.parent.children].indexOf(e);
    return r === -1 ? e.parent.children.length : r;
  }
  return -1;
}
function wp(e, r) {
  return r;
}
function _p(e, r) {
  var t;
  return ((t = e.parent) == null ? void 0 : t.type) === "list" ? e.index : r.name !== ep ? r.name : e.index;
}
function Cp(e, r) {
  return r.parent ? r.parent.address.concat([e.name]) : [e.name];
}
function xp(e, r, t) {
  const o = typeof t == "string" ? t.split(e.config.delimiter) : t;
  if (!o.length)
    return;
  const a = o[0];
  let u = e.parent;
  for (u || (String(o[0]) === String(e.name) && o.shift(), u = e), a === "$parent" && o.shift(); u && o.length; ) {
    const f = o.shift();
    switch (f) {
      case "$root":
        u = e.root;
        break;
      case "$parent":
        u = u.parent;
        break;
      case "$self":
        u = e;
        break;
      default:
        u = u.children.find(
          (d) => !("__FKP" in d) && String(d.name) === String(f)
        ) || Sp(u, f);
    }
  }
  return u || void 0;
}
function Sp(e, r) {
  const t = String(r).match(/^(find)\((.*)\)$/);
  if (t) {
    const [, o, a] = t, u = a.split(",").map((f) => f.trim());
    switch (o) {
      case "find":
        return e.find(u[0], u[1]);
      default:
        return;
    }
  }
}
function Pp(e, r, t, o) {
  return Ip(e, t, o);
}
function Ip(e, r, t = "name") {
  const o = typeof t == "string" ? (u) => u[t] == r : t, a = [e];
  for (; a.length; ) {
    const u = a.shift();
    if (!("__FKP" in u)) {
      if (o(u, r))
        return u;
      a.push(...u.children);
    }
  }
}
function Op(e) {
  let r = e;
  for (; r.parent; )
    r = r.parent;
  return r;
}
function Bp(e = {}, r) {
  let t;
  return new Proxy(e, {
    get(...o) {
      const a = o[1];
      if (a === "_t")
        return e;
      const u = Reflect.get(...o);
      if (u !== void 0)
        return u;
      if (r) {
        const f = r.config[a];
        if (f !== void 0)
          return f;
      }
      if (e.rootConfig && typeof a == "string") {
        const f = e.rootConfig[a];
        if (f !== void 0)
          return f;
      }
      return a === "delay" && (t == null ? void 0 : t.type) === "input" ? 20 : Jh[a];
    },
    set(...o) {
      const a = o[1], u = o[2];
      if (a === "_n")
        return t = u, e.rootConfig && e.rootConfig._add(t), !0;
      if (a === "_rmn")
        return e.rootConfig && e.rootConfig._rm(t), t = void 0, !0;
      if (!xo(e[a], u, !1)) {
        const f = Reflect.set(...o);
        return t && (t.emit(`config:${a}`, u, !1), ls(t, a, u), t.walk((d) => ls(d, a, u), !1, !0)), f;
      }
      return !0;
    }
  });
}
function $p(e, r, t, o = "ui") {
  const a = typeof t == "string" ? { key: t, value: t, type: o } : t, u = e.hook.text.dispatch(a);
  return e.emit("text", u, !1), u.value;
}
function Ap(e) {
  const r = e.name;
  do {
    if (e.props.isForm === !0)
      break;
    e.parent || Sn(106, r), e = e.parent;
  } while (e);
  e.props.id && Yh(e.props.id, e.props.__root);
}
function Tp(e, r, t) {
  return Xh(e, t);
}
function Rp(e, r, t, o) {
  const a = `${e.name}-set`, u = e.hook.setErrors.dispatch({ localErrors: t, childErrors: o });
  return Uh(e, u.localErrors, u.childErrors).forEach(
    (f) => {
      e.store.apply(f, (d) => d.meta.source === a);
    }
  ), e;
}
function Ep(e, r, t = !0, o) {
  return e.store.filter((a) => !(o === void 0 || a.meta.source === o), "error"), t && (o = o || `${e.name}-set`, e.walk((a) => {
    a.store.filter((u) => !(u.type === "error" && u.meta && u.meta.source === o));
  })), e;
}
function Dp(e, r, t, o) {
  return r.traps.set(t, o), e;
}
function jp(e) {
  return {
    __FKP: !0,
    uid: Symbol(),
    name: (e == null ? void 0 : e.name) ?? `p_${tp++}`,
    value: (e == null ? void 0 : e.value) ?? null,
    _value: (e == null ? void 0 : e.value) ?? null,
    type: (e == null ? void 0 : e.type) ?? "input",
    props: {},
    use: () => {
    },
    input(r) {
      return this._value = r, this.value = r, Promise.resolve();
    },
    isSettled: !0
  };
}
function Np(e) {
  return "__FKP" in e;
}
function du(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
function U(e) {
  return e[0].toUpperCase() + e.substr(1);
}
function vo(e, r = "or") {
  return e.reduce((t, o, a) => (t += o, a <= e.length - 2 && e.length > 2 && (t += ", "), a === e.length - 2 && (t += `${e.length === 2 ? " " : ""}${r} `), t), "");
}
function Jr(e) {
  const r = typeof e == "string" ? new Date(Date.parse(e)) : e;
  return r instanceof Date ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeZone: "UTC"
  }).format(r) : "(unknown)";
}
function fu(e, r) {
  return Number(e) >= Number(r) ? [r, e] : [e, r];
}
var Mp = {
  /**
   * Shown on buttons for adding new items.
   */
  add: "إضافة",
  /**
   * Shown when a button to remove items is visible.
   */
  remove: "إزالة",
  /**
   * Shown when there are multiple items to remove at the same time.
   */
  removeAll: "إزالة الكل",
  /**
   * Shown when all fields are not filled out correctly.
   */
  incomplete: "عذرا، لم يتم تعبئة جميع الحقول بشكل صحيح.",
  /**
   * Shown in a button inside a form to submit the form.
   */
  submit: "إرسال",
  /**
   * Shown when no files are selected.
   */
  noFiles: "لا يوجد ملف مختار",
  /**
   * Shown on buttons that move fields up in a list.
   */
  moveUp: "تحرك لأعلى",
  /**
   * Shown on buttons that move fields down in a list.
   */
  moveDown: "انتقل لأسفل",
  /**
   * Shown when something is actively loading.
   */
  isLoading: "يتم الآن التحميل...",
  /**
   * Shown when there is more to load.
   */
  loadMore: "تحميل المزيد",
  /**
   * Shown on buttons that navigate state forward
   */
  next: "التالي",
  /**
   * Shown on buttons that navigate state backward
   */
  prev: "السابق",
  /**
   * Shown when transferring items between lists.
   */
  addAllValues: "أضف جميع القيم",
  /**
   * Shown when adding selected values.
   */
  addSelectedValues: "إضافة قيم محددة",
  /**
   * Shown when removing all values.
   */
  removeAllValues: "قم بإزالة جميع القيم",
  /**
   * Shown when removing selected values.
   */
  removeSelectedValues: "إزالة القيم المحددة",
  /**
   * Shown when there is a date to choose.
   */
  chooseDate: "اختر التاريخ",
  /**
   * Shown when there is a date to change.
   */
  changeDate: "تاريخ التغيير",
  /**
   * Shown when there is something to close
   */
  close: "أغلق",
  /**
   * Shown when there is something to open.
   */
  open: "افتح"
}, Lp = {
  /**
   * The value is not an accepted value.
   * @see {@link https://formkit.com/essentials/validation#accepted}
   */
  accepted({ name: e }) {
    return `الرجاء قبول ${e}.`;
  },
  /**
   * The date is not after
   * @see {@link https://formkit.com/essentials/validation#date-after}
   */
  date_after({ name: e, args: r }) {
    return Array.isArray(r) && r.length ? `يجب أن يكون ${U(e)} بعد ${Jr(r[0])}.` : `يجب أن يكون ${U(e)} في المستقبل.`;
  },
  /**
   * The value is not a letter.
   * @see {@link https://formkit.com/essentials/validation#alpha}
   */
  alpha({ name: e }) {
    return `يمكن أن يحتوي ${U(e)} على أحرف أبجدية فقط.`;
  },
  /**
   * The value is not alphanumeric
   * @see {@link https://formkit.com/essentials/validation#alphanumeric}
   */
  alphanumeric({ name: e }) {
    return `يمكن أن يحتوي ${U(e)} على أحرف وأرقام فقط.`;
  },
  /**
   * The value is not letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
   */
  alpha_spaces({ name: e }) {
    return `يمكن أن تحتوي ${U(e)} على أحرف ومسافات فقط.`;
  },
  /**
   * The value have no letter.
   * @see {@link https://formkit.com/essentials/validation#contains_alpha}
   */
  contains_alpha({ name: e }) {
    return `يجب أن يحتوي ${U(e)} على أحرف أبجدية.`;
  },
  /**
   * The value have no alphanumeric
   * @see {@link https://formkit.com/essentials/validation#contains_alphanumeric}
   */
  contains_alphanumeric({ name: e }) {
    return `يجب أن يحتوي ${U(e)} على أحرف أو أرقام.`;
  },
  /**
   * The value have no letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#contains_alpha-spaces}
   */
  contains_alpha_spaces({ name: e }) {
    return `يجب أن يحتوي ${U(e)} على أحرف أو مسافات.`;
  },
  /**
   * The value have no symbol
   * @see {@link https://formkit.com/essentials/validation#contains_symbol}
   */
  contains_symbol({ name: e }) {
    return `يجب أن يحتوي ${U(e)} على رمز.`;
  },
  /**
   * The value have no uppercase
   * @see {@link https://formkit.com/essentials/validation#contains_uppercase}
   */
  contains_uppercase({ name: e }) {
    return `يجب أن يحتوي ${U(e)} على أحرف كبيرة.`;
  },
  /**
   * The value have no lowercase
   * @see {@link https://formkit.com/essentials/validation#contains_lowercase}
   */
  contains_lowercase({ name: e }) {
    return `يجب أن يحتوي ${U(e)} على أحرف صغيرة.`;
  },
  /**
   *  The value have no numeric
   * @see {@link https://formkit.com/essentials/validation#contains_numeric}
   */
  contains_numeric({ name: e }) {
    return `يجب أن يحتوي ${U(e)} على أرقام.`;
  },
  /**
   * The value is not symbol
   * @see {@link https://formkit.com/essentials/validation#symbol}
   */
  symbol({ name: e }) {
    return `يجب أن يكون ${U(e)} رمزًا.`;
  },
  /**
   * The value is not uppercase
   * @see {@link https://formkit.com/essentials/validation#uppercase}
   */
  uppercase({ name: e }) {
    return `يمكن أن يحتوي ${U(e)} على أحرف كبيرة فقط.`;
  },
  /**
   * The value is not lowercase
   * @see {@link https://formkit.com/essentials/validation#lowercase}
   */
  lowercase({ name: e }) {
    return `يمكن أن يحتوي ${U(e)} على أحرف صغيرة فقط.`;
  },
  /**
   * The date is not before
   * @see {@link https://formkit.com/essentials/validation#date-before}
   */
  date_before({ name: e, args: r }) {
    return Array.isArray(r) && r.length ? `يجب أن يكون ${U(e)} قبل ${Jr(r[0])}.` : `يجب أن يكون ${U(e)} في الماضي.`;
  },
  /**
   * The value is not between two numbers
   * @see {@link https://formkit.com/essentials/validation#between}
   */
  between({ name: e, args: r }) {
    if (isNaN(r[0]) || isNaN(r[1]))
      return "تمت تهيئة هذا الحقل بشكل غير صحيح ولا يمكن إرساله.";
    const [t, o] = fu(r[0], r[1]);
    return `يجب أن يكون ${U(e)} ما بين ${t} و ${o}.`;
  },
  /**
   * The confirmation field does not match
   * @see {@link https://formkit.com/essentials/validation#confirm}
   */
  confirm({ name: e }) {
    return `${U(e)} غير متطابق.`;
  },
  /**
   * The value is not a valid date
   * @see {@link https://formkit.com/essentials/validation#date-format}
   */
  date_format({ name: e, args: r }) {
    return Array.isArray(r) && r.length ? `${U(e)} ليس تاريخًا صالحًا ، يرجى استخدام التنسيق ${r[0]}` : "تمت تهيئة هذا الحقل بشكل غير صحيح ولا يمكن إرساله";
  },
  /**
   * Is not within expected date range
   * @see {@link https://formkit.com/essentials/validation#date-between}
   */
  date_between({ name: e, args: r }) {
    return `يجب أن يكون ${U(e)} بين ${Jr(r[0])} و ${Jr(r[1])}`;
  },
  /**
   * Shown when the user-provided value is not a valid email address.
   * @see {@link https://formkit.com/essentials/validation#email}
   */
  email: "الرجاء أدخال بريد إليكتروني صالح.",
  /**
   * Does not end with the specified value
   * @see {@link https://formkit.com/essentials/validation#ends-with}
   */
  ends_with({ name: e, args: r }) {
    return `لا ينتهي ${U(e)} بـ ${vo(r)}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#is}
   */
  is({ name: e }) {
    return `${U(e)} ليست قيمة مسموح بها.`;
  },
  /**
   * Does not match specified length
   * @see {@link https://formkit.com/essentials/validation#length}
   */
  length({ name: e, args: [r = 0, t = 1 / 0] }) {
    const o = Number(r) <= Number(t) ? r : t, a = Number(t) >= Number(r) ? t : r;
    return o == 1 && a === 1 / 0 ? `يجب أن يكون ${U(e)} حرفًا واحدًا على الأقل.` : o == 0 && a ? `يجب أن يكون ${U(e)} أقل من أو يساوي ${a} حرفًا.` : o === a ? `يجب أن يتكون ${U(e)} من الأحرف ${a}.` : o && a === 1 / 0 ? `يجب أن يكون ${U(e)} أكبر من أو يساوي ${o} حرفًا.` : `يجب أن يكون ${U(e)} بين ${o} و ${a} حرفًا.`;
  },
  /**
   * Value is not a match
   * @see {@link https://formkit.com/essentials/validation#matches}
   */
  matches({ name: e }) {
    return `${U(e)} ليست قيمة مسموح بها.`;
  },
  /**
   * Exceeds maximum allowed value
   * @see {@link https://formkit.com/essentials/validation#max}
   */
  max({ name: e, node: { value: r }, args: t }) {
    return Array.isArray(r) ? `لا يمكن أن يكون أكثر من ${t[0]} ${e}.` : `يجب أن يكون ${U(e)} أقل من أو يساوي ${t[0]}.`;
  },
  /**
   * The (field-level) value does not match specified mime type
   * @see {@link https://formkit.com/essentials/validation#mime}
   */
  mime({ name: e, args: r }) {
    return r[0] ? `يجب أن يكون ${U(e)} من النوع: ${r[0]}` : "لا يسمح بتنسيقات الملفات.";
  },
  /**
   * Does not fulfill minimum allowed value
   * @see {@link https://formkit.com/essentials/validation#min}
   */
  min({ name: e, node: { value: r }, args: t }) {
    return Array.isArray(r) ? `لا يمكن أن يكون أقل من ${t[0]} ${e}.` : `يجب أن يكون ${U(e)} على الأقل ${t[0]}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#not}
   */
  not({ name: e, node: { value: r } }) {
    return `“${r}” ليس ${e} مسموحًا به.`;
  },
  /**
   *  Is not a number
   * @see {@link https://formkit.com/essentials/validation#number}
   */
  number({ name: e }) {
    return `${U(e)} يجب ان يكون رقماً`;
  },
  /**
   * Require one field.
   * @see {@link https://formkit.com/essentials/validation#require-one}
   */
  require_one: ({ name: e, node: r, args: t }) => {
    const o = t.map((a) => {
      const u = r.at(a);
      return u ? du(u) : !1;
    }).filter((a) => !!a);
    return o.unshift(e), `${o.join(" أو ")} مطلوب.`;
  },
  /**
   * Required field.
   * @see {@link https://formkit.com/essentials/validation#required}
   */
  required({ name: e }) {
    return `${U(e)} مطلوب.`;
  },
  /**
   * Does not start with specified value
   * @see {@link https://formkit.com/essentials/validation#starts-with}
   */
  starts_with({ name: e, args: r }) {
    return `لا يبدأ ${U(e)} بـ ${vo(r)}.`;
  },
  /**
   * Is not a url
   * @see {@link https://formkit.com/essentials/validation#url}
   */
  url() {
    return "يرجى إدخال عنوان URL صالح.";
  },
  /**
   * Shown when the date is invalid.
   */
  invalidDate: "التاريخ المحدد غير صالح."
}, Kp = { ui: Mp, validation: Lp }, Fp = {
  /**
   * Shown on a button for adding additional items.
   */
  add: "Add",
  /**
   * Shown when a button to remove items is visible.
   */
  remove: "Remove",
  /**
   * Shown when there are multiple items to remove at the same time.
   */
  removeAll: "Remove all",
  /**
   * Shown when all fields are not filled out correctly.
   */
  incomplete: "Sorry, not all fields are filled out correctly.",
  /**
   * Shown in a button inside a form to submit the form.
   */
  submit: "Submit",
  /**
   * Shown when no files are selected.
   */
  noFiles: "No file chosen",
  /**
   * Shown on buttons that move fields up in a list.
   */
  moveUp: "Move up",
  /**
   * Shown on buttons that move fields down in a list.
   */
  moveDown: "Move down",
  /**
   * Shown when something is actively loading.
   */
  isLoading: "Loading...",
  /**
   * Shown when there is more to load.
   */
  loadMore: "Load more",
  /**
   * Show on buttons that navigate state forward
   */
  next: "Next",
  /**
   * Show on buttons that navigate state backward
   */
  prev: "Previous",
  /**
   * Shown when adding all values.
   */
  addAllValues: "Add all values",
  /**
   * Shown when adding selected values.
   */
  addSelectedValues: "Add selected values",
  /**
   * Shown when removing all values.
   */
  removeAllValues: "Remove all values",
  /**
   * Shown when removing selected values.
   */
  removeSelectedValues: "Remove selected values",
  /**
   * Shown when there is a date to choose.
   */
  chooseDate: "Choose date",
  /**
   * Shown when there is a date to change.
   */
  changeDate: "Change date",
  /**
   * Shown above error summaries when someone attempts to submit a form with
   * errors and the developer has implemented `<FormKitSummary />`.
   */
  summaryHeader: "There were errors in your form.",
  /*
   * Shown when there is something to close
   */
  close: "Close",
  /**
   * Shown when there is something to open.
   */
  open: "Open"
}, qp = {
  /**
   * The value is not an accepted value.
   * @see {@link https://formkit.com/essentials/validation#accepted}
   */
  accepted({ name: e }) {
    return `Please accept the ${e}.`;
  },
  /**
   * The date is not after
   * @see {@link https://formkit.com/essentials/validation#date-after}
   */
  date_after({ name: e, args: r }) {
    return Array.isArray(r) && r.length ? `${U(e)} must be after ${Jr(r[0])}.` : `${U(e)} must be in the future.`;
  },
  /**
   * The value is not a letter.
   * @see {@link https://formkit.com/essentials/validation#alpha}
   */
  alpha({ name: e }) {
    return `${U(e)} can only contain alphabetical characters.`;
  },
  /**
   * The value is not alphanumeric
   * @see {@link https://formkit.com/essentials/validation#alphanumeric}
   */
  alphanumeric({ name: e }) {
    return `${U(e)} can only contain letters and numbers.`;
  },
  /**
   * The value is not letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#alpha-spaces}
   */
  alpha_spaces({ name: e }) {
    return `${U(e)} can only contain letters and spaces.`;
  },
  /**
   * The value have no letter.
   * @see {@link https://formkit.com/essentials/validation#contains_alpha}
   */
  contains_alpha({ name: e }) {
    return `${U(e)} must contain alphabetical characters.`;
  },
  /**
   * The value have no alphanumeric
   * @see {@link https://formkit.com/essentials/validation#contains_alphanumeric}
   */
  contains_alphanumeric({ name: e }) {
    return `${U(e)} must contain letters or numbers.`;
  },
  /**
   * The value have no letter and/or spaces
   * @see {@link https://formkit.com/essentials/validation#contains_alpha-spaces}
   */
  contains_alpha_spaces({ name: e }) {
    return `${U(e)} must contain letters or spaces.`;
  },
  /**
   * The value have no symbol
   * @see {@link https://formkit.com/essentials/validation#contains_symbol}
   */
  contains_symbol({ name: e }) {
    return `${U(e)} must contain a symbol.`;
  },
  /**
   * The value have no uppercase
   * @see {@link https://formkit.com/essentials/validation#contains_uppercase}
   */
  contains_uppercase({ name: e }) {
    return `${U(e)} must contain an uppercase letter.`;
  },
  /**
   * The value have no lowercase
   * @see {@link https://formkit.com/essentials/validation#contains_lowercase}
   */
  contains_lowercase({ name: e }) {
    return `${U(e)} must contain a lowercase letter.`;
  },
  /**
   *  The value have no numeric
   * @see {@link https://formkit.com/essentials/validation#contains_numeric}
   */
  contains_numeric({ name: e }) {
    return `${U(e)} must contain numbers.`;
  },
  /**
   * The value is not symbol
   * @see {@link https://formkit.com/essentials/validation#symbol}
   */
  symbol({ name: e }) {
    return `${U(e)} must be a symbol.`;
  },
  /**
   * The value is not uppercase
   * @see {@link https://formkit.com/essentials/validation#uppercase}
   */
  uppercase({ name: e }) {
    return `${U(e)} can only contain uppercase letters.`;
  },
  /**
   * The value is not lowercase
   * @see {@link https://formkit.com/essentials/validation#lowercase}
   */
  lowercase({ name: e, args: r }) {
    let t = "";
    return Array.isArray(r) && r.length && (r[0] === "allow_non_alpha" && (t = ", numbers and symbols"), r[0] === "allow_numeric" && (t = " and numbers"), r[0] === "allow_numeric_dashes" && (t = ", numbers and dashes")), `${U(e)} can only contain lowercase letters${t}.`;
  },
  /**
   * The date is not before
   * @see {@link https://formkit.com/essentials/validation#date-before}
   */
  date_before({ name: e, args: r }) {
    return Array.isArray(r) && r.length ? `${U(e)} must be before ${Jr(r[0])}.` : `${U(e)} must be in the past.`;
  },
  /**
   * The value is not between two numbers
   * @see {@link https://formkit.com/essentials/validation#between}
   */
  between({ name: e, args: r }) {
    if (isNaN(r[0]) || isNaN(r[1]))
      return "This field was configured incorrectly and can’t be submitted.";
    const [t, o] = fu(r[0], r[1]);
    return `${U(e)} must be between ${t} and ${o}.`;
  },
  /**
   * The confirmation field does not match
   * @see {@link https://formkit.com/essentials/validation#confirm}
   */
  confirm({ name: e }) {
    return `${U(e)} does not match.`;
  },
  /**
   * The value is not a valid date
   * @see {@link https://formkit.com/essentials/validation#date-format}
   */
  date_format({ name: e, args: r }) {
    return Array.isArray(r) && r.length ? `${U(e)} is not a valid date, please use the format ${r[0]}` : "This field was configured incorrectly and can’t be submitted";
  },
  /**
   * Is not within expected date range
   * @see {@link https://formkit.com/essentials/validation#date-between}
   */
  date_between({ name: e, args: r }) {
    return `${U(e)} must be between ${Jr(r[0])} and ${Jr(r[1])}`;
  },
  /**
   * Shown when the user-provided value is not a valid email address.
   * @see {@link https://formkit.com/essentials/validation#email}
   */
  email: "Please enter a valid email address.",
  /**
   * Does not end with the specified value
   * @see {@link https://formkit.com/essentials/validation#ends-with}
   */
  ends_with({ name: e, args: r }) {
    return `${U(e)} doesn’t end with ${vo(r)}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#is}
   */
  is({ name: e }) {
    return `${U(e)} is not an allowed value.`;
  },
  /**
   * Does not match specified length
   * @see {@link https://formkit.com/essentials/validation#length}
   */
  length({ name: e, args: [r = 0, t = 1 / 0] }) {
    const o = Number(r) <= Number(t) ? r : t, a = Number(t) >= Number(r) ? t : r;
    return o == 1 && a === 1 / 0 ? `${U(e)} must be at least one character.` : o == 0 && a ? `${U(e)} must be less than or equal to ${a} characters.` : o === a ? `${U(e)} should be ${a} characters long.` : o && a === 1 / 0 ? `${U(e)} must be greater than or equal to ${o} characters.` : `${U(e)} must be between ${o} and ${a} characters.`;
  },
  /**
   * Value is not a match
   * @see {@link https://formkit.com/essentials/validation#matches}
   */
  matches({ name: e }) {
    return `${U(e)} is not an allowed value.`;
  },
  /**
   * Exceeds maximum allowed value
   * @see {@link https://formkit.com/essentials/validation#max}
   */
  max({ name: e, node: { value: r }, args: t }) {
    return Array.isArray(r) ? `Cannot have more than ${t[0]} ${e}.` : `${U(e)} must be no more than ${t[0]}.`;
  },
  /**
   * The (field-level) value does not match specified mime type
   * @see {@link https://formkit.com/essentials/validation#mime}
   */
  mime({ name: e, args: r }) {
    return r[0] ? `${U(e)} must be of the type: ${r[0]}` : "No file formats allowed.";
  },
  /**
   * Does not fulfill minimum allowed value
   * @see {@link https://formkit.com/essentials/validation#min}
   */
  min({ name: e, node: { value: r }, args: t }) {
    return Array.isArray(r) ? `Cannot have fewer than ${t[0]} ${e}.` : `${U(e)} must be at least ${t[0]}.`;
  },
  /**
   * Is not an allowed value
   * @see {@link https://formkit.com/essentials/validation#not}
   */
  not({ name: e, node: { value: r } }) {
    return `“${r}” is not an allowed ${e}.`;
  },
  /**
   *  Is not a number
   * @see {@link https://formkit.com/essentials/validation#number}
   */
  number({ name: e }) {
    return `${U(e)} must be a number.`;
  },
  /**
   * Require one field.
   * @see {@link https://formkit.com/essentials/validation#require-one}
   */
  require_one: ({ name: e, node: r, args: t }) => {
    const o = t.map((a) => {
      const u = r.at(a);
      return u ? du(u) : !1;
    }).filter((a) => !!a);
    return o.unshift(e), `${o.join(" or ")} is required.`;
  },
  /**
   * Required field.
   * @see {@link https://formkit.com/essentials/validation#required}
   */
  required({ name: e }) {
    return `${U(e)} is required.`;
  },
  /**
   * Does not start with specified value
   * @see {@link https://formkit.com/essentials/validation#starts-with}
   */
  starts_with({ name: e, args: r }) {
    return `${U(e)} doesn’t start with ${vo(r)}.`;
  },
  /**
   * Is not a url
   * @see {@link https://formkit.com/essentials/validation#url}
   */
  url() {
    return "Please enter a valid URL.";
  },
  /**
   * Shown when the date is invalid.
   */
  invalidDate: "The selected date is invalid."
}, Vp = { ui: Fp, validation: qp }, So = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, $n = typeof window > "u" || "Deno" in globalThis;
function ir() {
}
function Hp(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function zp(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Up(e, r) {
  return Math.max(e + (r || 0) - Date.now(), 0);
}
function fs(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Wp(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function hs(e, r) {
  const {
    type: t = "all",
    exact: o,
    fetchStatus: a,
    predicate: u,
    queryKey: f,
    stale: d
  } = e;
  if (f) {
    if (o) {
      if (r.queryHash !== Gi(f, r.options))
        return !1;
    } else if (!In(r.queryKey, f))
      return !1;
  }
  if (t !== "all") {
    const p = r.isActive();
    if (t === "active" && !p || t === "inactive" && p)
      return !1;
  }
  return !(typeof d == "boolean" && r.isStale() !== d || a && a !== r.state.fetchStatus || u && !u(r));
}
function ps(e, r) {
  const { exact: t, status: o, predicate: a, mutationKey: u } = e;
  if (u) {
    if (!r.options.mutationKey)
      return !1;
    if (t) {
      if (Pn(r.options.mutationKey) !== Pn(u))
        return !1;
    } else if (!In(r.options.mutationKey, u))
      return !1;
  }
  return !(o && r.state.status !== o || a && !a(r));
}
function Gi(e, r) {
  return ((r == null ? void 0 : r.queryKeyHashFn) || Pn)(e);
}
function Pn(e) {
  return JSON.stringify(
    e,
    (r, t) => Ni(t) ? Object.keys(t).sort().reduce((o, a) => (o[a] = t[a], o), {}) : t
  );
}
function In(e, r) {
  return e === r ? !0 : typeof e != typeof r ? !1 : e && r && typeof e == "object" && typeof r == "object" ? !Object.keys(r).some((t) => !In(e[t], r[t])) : !1;
}
function ji(e, r) {
  if (e === r)
    return e;
  const t = ms(e) && ms(r);
  if (t || Ni(e) && Ni(r)) {
    const o = t ? e : Object.keys(e), a = o.length, u = t ? r : Object.keys(r), f = u.length, d = t ? [] : {};
    let p = 0;
    for (let y = 0; y < f; y++) {
      const k = t ? y : u[y];
      (!t && o.includes(k) || t) && e[k] === void 0 && r[k] === void 0 ? (d[k] = void 0, p++) : (d[k] = ji(e[k], r[k]), d[k] === e[k] && e[k] !== void 0 && p++);
    }
    return a === f && p === a ? e : d;
  }
  return r;
}
function ms(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ni(e) {
  if (!gs(e))
    return !1;
  const r = e.constructor;
  if (r === void 0)
    return !0;
  const t = r.prototype;
  return !(!gs(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function gs(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Qp(e) {
  return new Promise((r) => {
    setTimeout(r, e);
  });
}
function Gp(e, r, t) {
  if (typeof t.structuralSharing == "function")
    return t.structuralSharing(e, r);
  if (t.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return ji(e, r);
      } catch (o) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${t.queryHash}]: ${o}`
        );
      }
    return ji(e, r);
  }
  return r;
}
function Yp(e, r, t = 0) {
  const o = [...e, r];
  return t && o.length > t ? o.slice(1) : o;
}
function Zp(e, r, t = 0) {
  const o = [r, ...e];
  return t && o.length > t ? o.slice(0, -1) : o;
}
var ko = Symbol();
function hu(e, r) {
  return process.env.NODE_ENV !== "production" && e.queryFn === ko && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (r != null && r.initialPromise) ? () => r.initialPromise : !e.queryFn || e.queryFn === ko ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var mt, Wr, Et, Ss, Xp = (Ss = class extends So {
  constructor() {
    super();
    be(this, mt);
    be(this, Wr);
    be(this, Et);
    te(this, Et, (r) => {
      if (!$n && window.addEventListener) {
        const t = () => r();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    D(this, Wr) || this.setEventListener(D(this, Et));
  }
  onUnsubscribe() {
    var r;
    this.hasListeners() || ((r = D(this, Wr)) == null || r.call(this), te(this, Wr, void 0));
  }
  setEventListener(r) {
    var t;
    te(this, Et, r), (t = D(this, Wr)) == null || t.call(this), te(this, Wr, r((o) => {
      typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
    }));
  }
  setFocused(r) {
    D(this, mt) !== r && (te(this, mt, r), this.onFocus());
  }
  onFocus() {
    const r = this.isFocused();
    this.listeners.forEach((t) => {
      t(r);
    });
  }
  isFocused() {
    var r;
    return typeof D(this, mt) == "boolean" ? D(this, mt) : ((r = globalThis.document) == null ? void 0 : r.visibilityState) !== "hidden";
  }
}, mt = new WeakMap(), Wr = new WeakMap(), Et = new WeakMap(), Ss), pu = new Xp(), Dt, Qr, jt, Ps, Jp = (Ps = class extends So {
  constructor() {
    super();
    be(this, Dt, !0);
    be(this, Qr);
    be(this, jt);
    te(this, jt, (r) => {
      if (!$n && window.addEventListener) {
        const t = () => r(!0), o = () => r(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", o, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", o);
        };
      }
    });
  }
  onSubscribe() {
    D(this, Qr) || this.setEventListener(D(this, jt));
  }
  onUnsubscribe() {
    var r;
    this.hasListeners() || ((r = D(this, Qr)) == null || r.call(this), te(this, Qr, void 0));
  }
  setEventListener(r) {
    var t;
    te(this, jt, r), (t = D(this, Qr)) == null || t.call(this), te(this, Qr, r(this.setOnline.bind(this)));
  }
  setOnline(r) {
    D(this, Dt) !== r && (te(this, Dt, r), this.listeners.forEach((o) => {
      o(r);
    }));
  }
  isOnline() {
    return D(this, Dt);
  }
}, Dt = new WeakMap(), Qr = new WeakMap(), jt = new WeakMap(), Ps), Ht = new Jp();
function em() {
  let e, r;
  const t = new Promise((a, u) => {
    e = a, r = u;
  });
  t.status = "pending", t.catch(() => {
  });
  function o(a) {
    Object.assign(t, a), delete t.resolve, delete t.reject;
  }
  return t.resolve = (a) => {
    o({
      status: "fulfilled",
      value: a
    }), e(a);
  }, t.reject = (a) => {
    o({
      status: "rejected",
      reason: a
    }), r(a);
  }, t;
}
function rm(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function mu(e) {
  return (e ?? "online") === "online" ? Ht.isOnline() : !0;
}
var gu = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function vi(e) {
  return e instanceof gu;
}
function bu(e) {
  let r = !1, t = 0, o = !1, a;
  const u = em(), f = (N) => {
    var G;
    o || ($(new gu(N)), (G = e.abort) == null || G.call(e));
  }, d = () => {
    r = !0;
  }, p = () => {
    r = !1;
  }, y = () => pu.isFocused() && (e.networkMode === "always" || Ht.isOnline()) && e.canRun(), k = () => mu(e.networkMode) && e.canRun(), S = (N) => {
    var G;
    o || (o = !0, (G = e.onSuccess) == null || G.call(e, N), a == null || a(), u.resolve(N));
  }, $ = (N) => {
    var G;
    o || (o = !0, (G = e.onError) == null || G.call(e, N), a == null || a(), u.reject(N));
  }, E = () => new Promise((N) => {
    var G;
    a = (J) => {
      (o || y()) && N(J);
    }, (G = e.onPause) == null || G.call(e);
  }).then(() => {
    var N;
    a = void 0, o || (N = e.onContinue) == null || N.call(e);
  }), j = () => {
    if (o)
      return;
    let N;
    const G = t === 0 ? e.initialPromise : void 0;
    try {
      N = G ?? e.fn();
    } catch (J) {
      N = Promise.reject(J);
    }
    Promise.resolve(N).then(S).catch((J) => {
      var de;
      if (o)
        return;
      const X = e.retry ?? ($n ? 0 : 3), M = e.retryDelay ?? rm, W = typeof M == "function" ? M(t, J) : M, me = X === !0 || typeof X == "number" && t < X || typeof X == "function" && X(t, J);
      if (r || !me) {
        $(J);
        return;
      }
      t++, (de = e.onFail) == null || de.call(e, t, J), Qp(W).then(() => y() ? void 0 : E()).then(() => {
        r ? $(J) : j();
      });
    });
  };
  return {
    promise: u,
    cancel: f,
    continue: () => (a == null || a(), u),
    cancelRetry: d,
    continueRetry: p,
    canStart: k,
    start: () => (k() ? j() : E().then(j), u)
  };
}
function tm() {
  let e = [], r = 0, t = (d) => {
    d();
  }, o = (d) => {
    d();
  }, a = (d) => setTimeout(d, 0);
  const u = (d) => {
    r ? e.push(d) : a(() => {
      t(d);
    });
  }, f = () => {
    const d = e;
    e = [], d.length && a(() => {
      o(() => {
        d.forEach((p) => {
          t(p);
        });
      });
    });
  };
  return {
    batch: (d) => {
      let p;
      r++;
      try {
        p = d();
      } finally {
        r--, r || f();
      }
      return p;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (d) => (...p) => {
      u(() => {
        d(...p);
      });
    },
    schedule: u,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (d) => {
      t = d;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (d) => {
      o = d;
    },
    setScheduler: (d) => {
      a = d;
    }
  };
}
var qe = tm(), gt, Is, yu = (Is = class {
  constructor() {
    be(this, gt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), zp(this.gcTime) && te(this, gt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? ($n ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    D(this, gt) && (clearTimeout(D(this, gt)), te(this, gt, void 0));
  }
}, gt = new WeakMap(), Is), Nt, Mt, er, Me, On, bt, ar, Tr, Os, nm = (Os = class extends yu {
  constructor(r) {
    super();
    be(this, ar);
    be(this, Nt);
    be(this, Mt);
    be(this, er);
    be(this, Me);
    be(this, On);
    be(this, bt);
    te(this, bt, !1), te(this, On, r.defaultOptions), this.setOptions(r.options), this.observers = [], te(this, er, r.cache), this.queryKey = r.queryKey, this.queryHash = r.queryHash, te(this, Nt, im(this.options)), this.state = r.state ?? D(this, Nt), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var r;
    return (r = D(this, Me)) == null ? void 0 : r.promise;
  }
  setOptions(r) {
    this.options = { ...D(this, On), ...r }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && D(this, er).remove(this);
  }
  setData(r, t) {
    const o = Gp(this.state.data, r, this.options);
    return je(this, ar, Tr).call(this, {
      data: o,
      type: "success",
      dataUpdatedAt: t == null ? void 0 : t.updatedAt,
      manual: t == null ? void 0 : t.manual
    }), o;
  }
  setState(r, t) {
    je(this, ar, Tr).call(this, { type: "setState", state: r, setStateOptions: t });
  }
  cancel(r) {
    var o, a;
    const t = (o = D(this, Me)) == null ? void 0 : o.promise;
    return (a = D(this, Me)) == null || a.cancel(r), t ? t.then(ir).catch(ir) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(D(this, Nt));
  }
  isActive() {
    return this.observers.some(
      (r) => Wp(r.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ko || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (r) => r.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(r = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Up(this.state.dataUpdatedAt, r);
  }
  onFocus() {
    var t;
    const r = this.observers.find((o) => o.shouldFetchOnWindowFocus());
    r == null || r.refetch({ cancelRefetch: !1 }), (t = D(this, Me)) == null || t.continue();
  }
  onOnline() {
    var t;
    const r = this.observers.find((o) => o.shouldFetchOnReconnect());
    r == null || r.refetch({ cancelRefetch: !1 }), (t = D(this, Me)) == null || t.continue();
  }
  addObserver(r) {
    this.observers.includes(r) || (this.observers.push(r), this.clearGcTimeout(), D(this, er).notify({ type: "observerAdded", query: this, observer: r }));
  }
  removeObserver(r) {
    this.observers.includes(r) && (this.observers = this.observers.filter((t) => t !== r), this.observers.length || (D(this, Me) && (D(this, bt) ? D(this, Me).cancel({ revert: !0 }) : D(this, Me).cancelRetry()), this.scheduleGc()), D(this, er).notify({ type: "observerRemoved", query: this, observer: r }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || je(this, ar, Tr).call(this, { type: "invalidate" });
  }
  fetch(r, t) {
    var p, y, k;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (t != null && t.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (D(this, Me))
        return D(this, Me).continueRetry(), D(this, Me).promise;
    }
    if (r && this.setOptions(r), !this.options.queryFn) {
      const S = this.observers.find(($) => $.options.queryFn);
      S && this.setOptions(S.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const o = new AbortController(), a = (S) => {
      Object.defineProperty(S, "signal", {
        enumerable: !0,
        get: () => (te(this, bt, !0), o.signal)
      });
    }, u = () => {
      const S = hu(this.options, t), $ = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return a($), te(this, bt, !1), this.options.persister ? this.options.persister(
        S,
        $,
        this
      ) : S($);
    }, f = {
      fetchOptions: t,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: u
    };
    a(f), (p = this.options.behavior) == null || p.onFetch(
      f,
      this
    ), te(this, Mt, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((y = f.fetchOptions) == null ? void 0 : y.meta)) && je(this, ar, Tr).call(this, { type: "fetch", meta: (k = f.fetchOptions) == null ? void 0 : k.meta });
    const d = (S) => {
      var $, E, j, N;
      vi(S) && S.silent || je(this, ar, Tr).call(this, {
        type: "error",
        error: S
      }), vi(S) || ((E = ($ = D(this, er).config).onError) == null || E.call(
        $,
        S,
        this
      ), (N = (j = D(this, er).config).onSettled) == null || N.call(
        j,
        this.state.data,
        S,
        this
      )), this.scheduleGc();
    };
    return te(this, Me, bu({
      initialPromise: t == null ? void 0 : t.initialPromise,
      fn: f.fetchFn,
      abort: o.abort.bind(o),
      onSuccess: (S) => {
        var $, E, j, N;
        if (S === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), d(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(S);
        } catch (G) {
          d(G);
          return;
        }
        (E = ($ = D(this, er).config).onSuccess) == null || E.call($, S, this), (N = (j = D(this, er).config).onSettled) == null || N.call(
          j,
          S,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: d,
      onFail: (S, $) => {
        je(this, ar, Tr).call(this, { type: "failed", failureCount: S, error: $ });
      },
      onPause: () => {
        je(this, ar, Tr).call(this, { type: "pause" });
      },
      onContinue: () => {
        je(this, ar, Tr).call(this, { type: "continue" });
      },
      retry: f.options.retry,
      retryDelay: f.options.retryDelay,
      networkMode: f.options.networkMode,
      canRun: () => !0
    })), D(this, Me).start();
  }
}, Nt = new WeakMap(), Mt = new WeakMap(), er = new WeakMap(), Me = new WeakMap(), On = new WeakMap(), bt = new WeakMap(), ar = new WeakSet(), Tr = function(r) {
  const t = (o) => {
    switch (r.type) {
      case "failed":
        return {
          ...o,
          fetchFailureCount: r.failureCount,
          fetchFailureReason: r.error
        };
      case "pause":
        return {
          ...o,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...o,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...o,
          ...om(o.data, this.options),
          fetchMeta: r.meta ?? null
        };
      case "success":
        return {
          ...o,
          data: r.data,
          dataUpdateCount: o.dataUpdateCount + 1,
          dataUpdatedAt: r.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!r.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const a = r.error;
        return vi(a) && a.revert && D(this, Mt) ? { ...D(this, Mt), fetchStatus: "idle" } : {
          ...o,
          error: a,
          errorUpdateCount: o.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: o.fetchFailureCount + 1,
          fetchFailureReason: a,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...o,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...o,
          ...r.state
        };
    }
  };
  this.state = t(this.state), qe.batch(() => {
    this.observers.forEach((o) => {
      o.onQueryUpdate();
    }), D(this, er).notify({ query: this, type: "updated", action: r });
  });
}, Os);
function om(e, r) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: mu(r.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function im(e) {
  const r = typeof e.initialData == "function" ? e.initialData() : e.initialData, t = r !== void 0, o = t ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: r,
    dataUpdateCount: 0,
    dataUpdatedAt: t ? o ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: t ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var yr, Bs, vu = (Bs = class extends So {
  constructor(t = {}) {
    super();
    be(this, yr);
    this.config = t, te(this, yr, /* @__PURE__ */ new Map());
  }
  build(t, o, a) {
    const u = o.queryKey, f = o.queryHash ?? Gi(u, o);
    let d = this.get(f);
    return d || (d = new nm({
      cache: this,
      queryKey: u,
      queryHash: f,
      options: t.defaultQueryOptions(o),
      state: a,
      defaultOptions: t.getQueryDefaults(u)
    }), this.add(d)), d;
  }
  add(t) {
    D(this, yr).has(t.queryHash) || (D(this, yr).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const o = D(this, yr).get(t.queryHash);
    o && (t.destroy(), o === t && D(this, yr).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    qe.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return D(this, yr).get(t);
  }
  getAll() {
    return [...D(this, yr).values()];
  }
  find(t) {
    const o = { exact: !0, ...t };
    return this.getAll().find(
      (a) => hs(o, a)
    );
  }
  findAll(t = {}) {
    const o = this.getAll();
    return Object.keys(t).length > 0 ? o.filter((a) => hs(t, a)) : o;
  }
  notify(t) {
    qe.batch(() => {
      this.listeners.forEach((o) => {
        o(t);
      });
    });
  }
  onFocus() {
    qe.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    qe.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, yr = new WeakMap(), Bs), vr, Fe, yt, kr, zr, $s, am = ($s = class extends yu {
  constructor(r) {
    super();
    be(this, kr);
    be(this, vr);
    be(this, Fe);
    be(this, yt);
    this.mutationId = r.mutationId, te(this, Fe, r.mutationCache), te(this, vr, []), this.state = r.state || sm(), this.setOptions(r.options), this.scheduleGc();
  }
  setOptions(r) {
    this.options = r, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(r) {
    D(this, vr).includes(r) || (D(this, vr).push(r), this.clearGcTimeout(), D(this, Fe).notify({
      type: "observerAdded",
      mutation: this,
      observer: r
    }));
  }
  removeObserver(r) {
    te(this, vr, D(this, vr).filter((t) => t !== r)), this.scheduleGc(), D(this, Fe).notify({
      type: "observerRemoved",
      mutation: this,
      observer: r
    });
  }
  optionalRemove() {
    D(this, vr).length || (this.state.status === "pending" ? this.scheduleGc() : D(this, Fe).remove(this));
  }
  continue() {
    var r;
    return ((r = D(this, yt)) == null ? void 0 : r.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(r) {
    var a, u, f, d, p, y, k, S, $, E, j, N, G, J, X, M, W, me, de, we;
    te(this, yt, bu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(r) : Promise.reject(new Error("No mutationFn found")),
      onFail: (ye, $e) => {
        je(this, kr, zr).call(this, { type: "failed", failureCount: ye, error: $e });
      },
      onPause: () => {
        je(this, kr, zr).call(this, { type: "pause" });
      },
      onContinue: () => {
        je(this, kr, zr).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => D(this, Fe).canRun(this)
    }));
    const t = this.state.status === "pending", o = !D(this, yt).canStart();
    try {
      if (!t) {
        je(this, kr, zr).call(this, { type: "pending", variables: r, isPaused: o }), await ((u = (a = D(this, Fe).config).onMutate) == null ? void 0 : u.call(
          a,
          r,
          this
        ));
        const $e = await ((d = (f = this.options).onMutate) == null ? void 0 : d.call(f, r));
        $e !== this.state.context && je(this, kr, zr).call(this, {
          type: "pending",
          context: $e,
          variables: r,
          isPaused: o
        });
      }
      const ye = await D(this, yt).start();
      return await ((y = (p = D(this, Fe).config).onSuccess) == null ? void 0 : y.call(
        p,
        ye,
        r,
        this.state.context,
        this
      )), await ((S = (k = this.options).onSuccess) == null ? void 0 : S.call(k, ye, r, this.state.context)), await ((E = ($ = D(this, Fe).config).onSettled) == null ? void 0 : E.call(
        $,
        ye,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((N = (j = this.options).onSettled) == null ? void 0 : N.call(j, ye, null, r, this.state.context)), je(this, kr, zr).call(this, { type: "success", data: ye }), ye;
    } catch (ye) {
      try {
        throw await ((J = (G = D(this, Fe).config).onError) == null ? void 0 : J.call(
          G,
          ye,
          r,
          this.state.context,
          this
        )), await ((M = (X = this.options).onError) == null ? void 0 : M.call(
          X,
          ye,
          r,
          this.state.context
        )), await ((me = (W = D(this, Fe).config).onSettled) == null ? void 0 : me.call(
          W,
          void 0,
          ye,
          this.state.variables,
          this.state.context,
          this
        )), await ((we = (de = this.options).onSettled) == null ? void 0 : we.call(
          de,
          void 0,
          ye,
          r,
          this.state.context
        )), ye;
      } finally {
        je(this, kr, zr).call(this, { type: "error", error: ye });
      }
    } finally {
      D(this, Fe).runNext(this);
    }
  }
}, vr = new WeakMap(), Fe = new WeakMap(), yt = new WeakMap(), kr = new WeakSet(), zr = function(r) {
  const t = (o) => {
    switch (r.type) {
      case "failed":
        return {
          ...o,
          failureCount: r.failureCount,
          failureReason: r.error
        };
      case "pause":
        return {
          ...o,
          isPaused: !0
        };
      case "continue":
        return {
          ...o,
          isPaused: !1
        };
      case "pending":
        return {
          ...o,
          context: r.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: r.isPaused,
          status: "pending",
          variables: r.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...o,
          data: r.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...o,
          data: void 0,
          error: r.error,
          failureCount: o.failureCount + 1,
          failureReason: r.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = t(this.state), qe.batch(() => {
    D(this, vr).forEach((o) => {
      o.onMutationUpdate(r);
    }), D(this, Fe).notify({
      mutation: this,
      type: "updated",
      action: r
    });
  });
}, $s);
function sm() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var Rr, sr, Bn, As, ku = (As = class extends So {
  constructor(t = {}) {
    super();
    be(this, Rr);
    be(this, sr);
    be(this, Bn);
    this.config = t, te(this, Rr, /* @__PURE__ */ new Set()), te(this, sr, /* @__PURE__ */ new Map()), te(this, Bn, 0);
  }
  build(t, o, a) {
    const u = new am({
      mutationCache: this,
      mutationId: ++so(this, Bn)._,
      options: t.defaultMutationOptions(o),
      state: a
    });
    return this.add(u), u;
  }
  add(t) {
    D(this, Rr).add(t);
    const o = lo(t);
    if (typeof o == "string") {
      const a = D(this, sr).get(o);
      a ? a.push(t) : D(this, sr).set(o, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (D(this, Rr).delete(t)) {
      const o = lo(t);
      if (typeof o == "string") {
        const a = D(this, sr).get(o);
        if (a)
          if (a.length > 1) {
            const u = a.indexOf(t);
            u !== -1 && a.splice(u, 1);
          } else a[0] === t && D(this, sr).delete(o);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const o = lo(t);
    if (typeof o == "string") {
      const a = D(this, sr).get(o), u = a == null ? void 0 : a.find(
        (f) => f.state.status === "pending"
      );
      return !u || u === t;
    } else
      return !0;
  }
  runNext(t) {
    var a;
    const o = lo(t);
    if (typeof o == "string") {
      const u = (a = D(this, sr).get(o)) == null ? void 0 : a.find((f) => f !== t && f.state.isPaused);
      return (u == null ? void 0 : u.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    qe.batch(() => {
      D(this, Rr).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), D(this, Rr).clear(), D(this, sr).clear();
    });
  }
  getAll() {
    return Array.from(D(this, Rr));
  }
  find(t) {
    const o = { exact: !0, ...t };
    return this.getAll().find(
      (a) => ps(o, a)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((o) => ps(t, o));
  }
  notify(t) {
    qe.batch(() => {
      this.listeners.forEach((o) => {
        o(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((o) => o.state.isPaused);
    return qe.batch(
      () => Promise.all(
        t.map((o) => o.continue().catch(ir))
      )
    );
  }
}, Rr = new WeakMap(), sr = new WeakMap(), Bn = new WeakMap(), As);
function lo(e) {
  var r;
  return (r = e.options.scope) == null ? void 0 : r.id;
}
function bs(e) {
  return {
    onFetch: (r, t) => {
      var k, S, $, E, j;
      const o = r.options, a = ($ = (S = (k = r.fetchOptions) == null ? void 0 : k.meta) == null ? void 0 : S.fetchMore) == null ? void 0 : $.direction, u = ((E = r.state.data) == null ? void 0 : E.pages) || [], f = ((j = r.state.data) == null ? void 0 : j.pageParams) || [];
      let d = { pages: [], pageParams: [] }, p = 0;
      const y = async () => {
        let N = !1;
        const G = (M) => {
          Object.defineProperty(M, "signal", {
            enumerable: !0,
            get: () => (r.signal.aborted ? N = !0 : r.signal.addEventListener("abort", () => {
              N = !0;
            }), r.signal)
          });
        }, J = hu(r.options, r.fetchOptions), X = async (M, W, me) => {
          if (N)
            return Promise.reject();
          if (W == null && M.pages.length)
            return Promise.resolve(M);
          const de = {
            queryKey: r.queryKey,
            pageParam: W,
            direction: me ? "backward" : "forward",
            meta: r.options.meta
          };
          G(de);
          const we = await J(
            de
          ), { maxPages: ye } = r.options, $e = me ? Zp : Yp;
          return {
            pages: $e(M.pages, we, ye),
            pageParams: $e(M.pageParams, W, ye)
          };
        };
        if (a && u.length) {
          const M = a === "backward", W = M ? um : ys, me = {
            pages: u,
            pageParams: f
          }, de = W(o, me);
          d = await X(me, de, M);
        } else {
          const M = e ?? u.length;
          do {
            const W = p === 0 ? f[0] ?? o.initialPageParam : ys(o, d);
            if (p > 0 && W == null)
              break;
            d = await X(d, W), p++;
          } while (p < M);
        }
        return d;
      };
      r.options.persister ? r.fetchFn = () => {
        var N, G;
        return (G = (N = r.options).persister) == null ? void 0 : G.call(
          N,
          y,
          {
            queryKey: r.queryKey,
            meta: r.options.meta,
            signal: r.signal
          },
          t
        );
      } : r.fetchFn = y;
    }
  };
}
function ys(e, { pages: r, pageParams: t }) {
  const o = r.length - 1;
  return r.length > 0 ? e.getNextPageParam(
    r[o],
    r,
    t[o],
    t
  ) : void 0;
}
function um(e, { pages: r, pageParams: t }) {
  var o;
  return r.length > 0 ? (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, r[0], r, t[0], t) : void 0;
}
var Pe, Gr, Yr, Lt, Kt, Zr, Ft, qt, Ts, cm = (Ts = class {
  constructor(r = {}) {
    be(this, Pe);
    be(this, Gr);
    be(this, Yr);
    be(this, Lt);
    be(this, Kt);
    be(this, Zr);
    be(this, Ft);
    be(this, qt);
    te(this, Pe, r.queryCache || new vu()), te(this, Gr, r.mutationCache || new ku()), te(this, Yr, r.defaultOptions || {}), te(this, Lt, /* @__PURE__ */ new Map()), te(this, Kt, /* @__PURE__ */ new Map()), te(this, Zr, 0);
  }
  mount() {
    so(this, Zr)._++, D(this, Zr) === 1 && (te(this, Ft, pu.subscribe(async (r) => {
      r && (await this.resumePausedMutations(), D(this, Pe).onFocus());
    })), te(this, qt, Ht.subscribe(async (r) => {
      r && (await this.resumePausedMutations(), D(this, Pe).onOnline());
    })));
  }
  unmount() {
    var r, t;
    so(this, Zr)._--, D(this, Zr) === 0 && ((r = D(this, Ft)) == null || r.call(this), te(this, Ft, void 0), (t = D(this, qt)) == null || t.call(this), te(this, qt, void 0));
  }
  isFetching(r) {
    return D(this, Pe).findAll({ ...r, fetchStatus: "fetching" }).length;
  }
  isMutating(r) {
    return D(this, Gr).findAll({ ...r, status: "pending" }).length;
  }
  getQueryData(r) {
    var o;
    const t = this.defaultQueryOptions({ queryKey: r });
    return (o = D(this, Pe).get(t.queryHash)) == null ? void 0 : o.state.data;
  }
  ensureQueryData(r) {
    const t = this.defaultQueryOptions(r), o = D(this, Pe).build(this, t), a = o.state.data;
    return a === void 0 ? this.fetchQuery(r) : (r.revalidateIfStale && o.isStaleByTime(fs(t.staleTime, o)) && this.prefetchQuery(t), Promise.resolve(a));
  }
  getQueriesData(r) {
    return D(this, Pe).findAll(r).map(({ queryKey: t, state: o }) => {
      const a = o.data;
      return [t, a];
    });
  }
  setQueryData(r, t, o) {
    const a = this.defaultQueryOptions({ queryKey: r }), u = D(this, Pe).get(
      a.queryHash
    ), f = u == null ? void 0 : u.state.data, d = Hp(t, f);
    if (d !== void 0)
      return D(this, Pe).build(this, a).setData(d, { ...o, manual: !0 });
  }
  setQueriesData(r, t, o) {
    return qe.batch(
      () => D(this, Pe).findAll(r).map(({ queryKey: a }) => [
        a,
        this.setQueryData(a, t, o)
      ])
    );
  }
  getQueryState(r) {
    var o;
    const t = this.defaultQueryOptions({ queryKey: r });
    return (o = D(this, Pe).get(
      t.queryHash
    )) == null ? void 0 : o.state;
  }
  removeQueries(r) {
    const t = D(this, Pe);
    qe.batch(() => {
      t.findAll(r).forEach((o) => {
        t.remove(o);
      });
    });
  }
  resetQueries(r, t) {
    const o = D(this, Pe), a = {
      type: "active",
      ...r
    };
    return qe.batch(() => (o.findAll(r).forEach((u) => {
      u.reset();
    }), this.refetchQueries(a, t)));
  }
  cancelQueries(r, t = {}) {
    const o = { revert: !0, ...t }, a = qe.batch(
      () => D(this, Pe).findAll(r).map((u) => u.cancel(o))
    );
    return Promise.all(a).then(ir).catch(ir);
  }
  invalidateQueries(r, t = {}) {
    return qe.batch(() => {
      if (D(this, Pe).findAll(r).forEach((a) => {
        a.invalidate();
      }), (r == null ? void 0 : r.refetchType) === "none")
        return Promise.resolve();
      const o = {
        ...r,
        type: (r == null ? void 0 : r.refetchType) ?? (r == null ? void 0 : r.type) ?? "active"
      };
      return this.refetchQueries(o, t);
    });
  }
  refetchQueries(r, t = {}) {
    const o = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, a = qe.batch(
      () => D(this, Pe).findAll(r).filter((u) => !u.isDisabled()).map((u) => {
        let f = u.fetch(void 0, o);
        return o.throwOnError || (f = f.catch(ir)), u.state.fetchStatus === "paused" ? Promise.resolve() : f;
      })
    );
    return Promise.all(a).then(ir);
  }
  fetchQuery(r) {
    const t = this.defaultQueryOptions(r);
    t.retry === void 0 && (t.retry = !1);
    const o = D(this, Pe).build(this, t);
    return o.isStaleByTime(
      fs(t.staleTime, o)
    ) ? o.fetch(t) : Promise.resolve(o.state.data);
  }
  prefetchQuery(r) {
    return this.fetchQuery(r).then(ir).catch(ir);
  }
  fetchInfiniteQuery(r) {
    return r.behavior = bs(r.pages), this.fetchQuery(r);
  }
  prefetchInfiniteQuery(r) {
    return this.fetchInfiniteQuery(r).then(ir).catch(ir);
  }
  ensureInfiniteQueryData(r) {
    return r.behavior = bs(r.pages), this.ensureQueryData(r);
  }
  resumePausedMutations() {
    return Ht.isOnline() ? D(this, Gr).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return D(this, Pe);
  }
  getMutationCache() {
    return D(this, Gr);
  }
  getDefaultOptions() {
    return D(this, Yr);
  }
  setDefaultOptions(r) {
    te(this, Yr, r);
  }
  setQueryDefaults(r, t) {
    D(this, Lt).set(Pn(r), {
      queryKey: r,
      defaultOptions: t
    });
  }
  getQueryDefaults(r) {
    const t = [...D(this, Lt).values()], o = {};
    return t.forEach((a) => {
      In(r, a.queryKey) && Object.assign(o, a.defaultOptions);
    }), o;
  }
  setMutationDefaults(r, t) {
    D(this, Kt).set(Pn(r), {
      mutationKey: r,
      defaultOptions: t
    });
  }
  getMutationDefaults(r) {
    const t = [...D(this, Kt).values()];
    let o = {};
    return t.forEach((a) => {
      In(r, a.mutationKey) && (o = { ...o, ...a.defaultOptions });
    }), o;
  }
  defaultQueryOptions(r) {
    if (r._defaulted)
      return r;
    const t = {
      ...D(this, Yr).queries,
      ...this.getQueryDefaults(r.queryKey),
      ...r,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Gi(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === ko && (t.enabled = !1), t;
  }
  defaultMutationOptions(r) {
    return r != null && r._defaulted ? r : {
      ...D(this, Yr).mutations,
      ...(r == null ? void 0 : r.mutationKey) && this.getMutationDefaults(r.mutationKey),
      ...r,
      _defaulted: !0
    };
  }
  clear() {
    D(this, Pe).clear(), D(this, Gr).clear();
  }
}, Pe = new WeakMap(), Gr = new WeakMap(), Yr = new WeakMap(), Lt = new WeakMap(), Kt = new WeakMap(), Zr = new WeakMap(), Ft = new WeakMap(), qt = new WeakMap(), Ts);
function wu(e) {
  return e;
}
function lm(e) {
  return {
    mutationKey: e.options.mutationKey,
    state: e.state,
    ...e.options.scope && { scope: e.options.scope },
    ...e.meta && { meta: e.meta }
  };
}
function dm(e, r) {
  var t;
  return {
    state: {
      ...e.state,
      ...e.state.data !== void 0 && {
        data: r(e.state.data)
      }
    },
    queryKey: e.queryKey,
    queryHash: e.queryHash,
    ...e.state.status === "pending" && {
      promise: (t = e.promise) == null ? void 0 : t.then(r).catch((o) => (process.env.NODE_ENV !== "production" && console.error(
        `A query that was dehydrated as pending ended up rejecting. [${e.queryHash}]: ${o}; The error will be redacted in production builds`
      ), Promise.reject(new Error("redacted"))))
    },
    ...e.meta && { meta: e.meta }
  };
}
function fm(e) {
  return e.state.isPaused;
}
function hm(e) {
  return e.state.status === "success";
}
function pm(e, r = {}) {
  var d, p, y;
  const t = r.shouldDehydrateMutation ?? ((d = e.getDefaultOptions().dehydrate) == null ? void 0 : d.shouldDehydrateMutation) ?? fm, o = e.getMutationCache().getAll().flatMap(
    (k) => t(k) ? [lm(k)] : []
  ), a = r.shouldDehydrateQuery ?? ((p = e.getDefaultOptions().dehydrate) == null ? void 0 : p.shouldDehydrateQuery) ?? hm, u = r.serializeData ?? ((y = e.getDefaultOptions().dehydrate) == null ? void 0 : y.serializeData) ?? wu, f = e.getQueryCache().getAll().flatMap(
    (k) => a(k) ? [dm(k, u)] : []
  );
  return { mutations: o, queries: f };
}
function mm(e, r, t) {
  var p, y;
  if (typeof r != "object" || r === null)
    return;
  const o = e.getMutationCache(), a = e.getQueryCache(), u = ((p = t == null ? void 0 : t.defaultOptions) == null ? void 0 : p.deserializeData) ?? ((y = e.getDefaultOptions().hydrate) == null ? void 0 : y.deserializeData) ?? wu, f = r.mutations || [], d = r.queries || [];
  f.forEach(({ state: k, ...S }) => {
    var $, E;
    o.build(
      e,
      {
        ...($ = e.getDefaultOptions().hydrate) == null ? void 0 : $.mutations,
        ...(E = t == null ? void 0 : t.defaultOptions) == null ? void 0 : E.mutations,
        ...S
      },
      k
    );
  }), d.forEach(({ queryKey: k, state: S, queryHash: $, meta: E, promise: j }) => {
    var J, X;
    let N = a.get($);
    const G = S.data === void 0 ? S.data : u(S.data);
    if (N) {
      if (N.state.dataUpdatedAt < S.dataUpdatedAt) {
        const { fetchStatus: M, ...W } = S;
        N.setState({
          ...W,
          data: G
        });
      }
    } else
      N = a.build(
        e,
        {
          ...(J = e.getDefaultOptions().hydrate) == null ? void 0 : J.queries,
          ...(X = t == null ? void 0 : t.defaultOptions) == null ? void 0 : X.queries,
          queryKey: k,
          queryHash: $,
          meta: E
        },
        // Reset fetch status to idle to avoid
        // query being stuck in fetching state upon hydration
        {
          ...S,
          data: G,
          fetchStatus: "idle"
        }
      );
    if (j) {
      const M = Promise.resolve(j).then(u);
      N.fetch(void 0, { initialPromise: M });
    }
  });
}
var gm = "VUE_QUERY_CLIENT";
function bm(e) {
  const r = e ? `:${e}` : "";
  return `${gm}${r}`;
}
function Mi(e, r, t = "", o = 0) {
  if (r) {
    const a = r(e, t, o);
    if (a === void 0 && Ls(e) || a !== void 0)
      return a;
  }
  if (Array.isArray(e))
    return e.map(
      (a, u) => Mi(a, r, String(u), o + 1)
    );
  if (typeof e == "object" && vm(e)) {
    const a = Object.entries(e).map(([u, f]) => [
      u,
      Mi(f, r, u, o + 1)
    ]);
    return Object.fromEntries(a);
  }
  return e;
}
function ym(e, r) {
  return Mi(e, r);
}
function se(e, r = !1) {
  return ym(e, (t, o, a) => {
    if (a === 1 && o === "queryKey")
      return se(t, !0);
    if (r && km(t))
      return se(t(), r);
    if (Ls(t))
      return se(ln(t), r);
  });
}
function vm(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]")
    return !1;
  const r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
function km(e) {
  return typeof e == "function";
}
var wm = class extends vu {
  find(e) {
    return super.find(se(e));
  }
  findAll(e = {}) {
    return super.findAll(se(e));
  }
}, _m = class extends ku {
  find(e) {
    return super.find(se(e));
  }
  findAll(e = {}) {
    return super.findAll(se(e));
  }
}, _u = class extends cm {
  constructor(e = {}) {
    const r = {
      defaultOptions: e.defaultOptions,
      queryCache: e.queryCache || new wm(),
      mutationCache: e.mutationCache || new _m()
    };
    super(r), this.isRestoring = jr(!1);
  }
  isFetching(e = {}) {
    return super.isFetching(se(e));
  }
  isMutating(e = {}) {
    return super.isMutating(se(e));
  }
  getQueryData(e) {
    return super.getQueryData(se(e));
  }
  ensureQueryData(e) {
    return super.ensureQueryData(se(e));
  }
  getQueriesData(e) {
    return super.getQueriesData(se(e));
  }
  setQueryData(e, r, t = {}) {
    return super.setQueryData(
      se(e),
      r,
      se(t)
    );
  }
  setQueriesData(e, r, t = {}) {
    return super.setQueriesData(
      se(e),
      r,
      se(t)
    );
  }
  getQueryState(e) {
    return super.getQueryState(se(e));
  }
  removeQueries(e = {}) {
    return super.removeQueries(se(e));
  }
  resetQueries(e = {}, r = {}) {
    return super.resetQueries(se(e), se(r));
  }
  cancelQueries(e = {}, r = {}) {
    return super.cancelQueries(se(e), se(r));
  }
  invalidateQueries(e = {}, r = {}) {
    const t = se(e), o = se(r);
    if (super.invalidateQueries(
      { ...t, refetchType: "none" },
      o
    ), t.refetchType === "none")
      return Promise.resolve();
    const a = {
      ...t,
      type: t.refetchType ?? t.type ?? "active"
    };
    return Rs().then(() => super.refetchQueries(a, o));
  }
  refetchQueries(e = {}, r = {}) {
    return super.refetchQueries(
      se(e),
      se(r)
    );
  }
  fetchQuery(e) {
    return super.fetchQuery(se(e));
  }
  prefetchQuery(e) {
    return super.prefetchQuery(se(e));
  }
  fetchInfiniteQuery(e) {
    return super.fetchInfiniteQuery(se(e));
  }
  prefetchInfiniteQuery(e) {
    return super.prefetchInfiniteQuery(se(e));
  }
  setDefaultOptions(e) {
    super.setDefaultOptions(se(e));
  }
  setQueryDefaults(e, r) {
    super.setQueryDefaults(se(e), se(r));
  }
  getQueryDefaults(e) {
    return super.getQueryDefaults(se(e));
  }
  setMutationDefaults(e, r) {
    super.setMutationDefaults(
      se(e),
      se(r)
    );
  }
  getMutationDefaults(e) {
    return super.getMutationDefaults(se(e));
  }
};
function Cm() {
  return Cu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Cu() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const xm = typeof Proxy == "function", Sm = "devtools-plugin:setup", Pm = "plugin:settings:set";
let Ot, Li;
function Im() {
  var e;
  return Ot !== void 0 || (typeof window < "u" && window.performance ? (Ot = !0, Li = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Ot = !0, Li = globalThis.perf_hooks.performance) : Ot = !1), Ot;
}
function Om() {
  return Im() ? Li.now() : Date.now();
}
class Bm {
  constructor(r, t) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = r, this.hook = t;
    const o = {};
    if (r.settings)
      for (const f in r.settings) {
        const d = r.settings[f];
        o[f] = d.defaultValue;
      }
    const a = `__vue-devtools-plugin-settings__${r.id}`;
    let u = Object.assign({}, o);
    try {
      const f = localStorage.getItem(a), d = JSON.parse(f);
      Object.assign(u, d);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return u;
      },
      setSettings(f) {
        try {
          localStorage.setItem(a, JSON.stringify(f));
        } catch {
        }
        u = f;
      },
      now() {
        return Om();
      }
    }, t && t.on(Pm, (f, d) => {
      f === this.plugin.id && this.fallbacks.setSettings(d);
    }), this.proxiedOn = new Proxy({}, {
      get: (f, d) => this.target ? this.target.on[d] : (...p) => {
        this.onQueue.push({
          method: d,
          args: p
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (f, d) => this.target ? this.target[d] : d === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(d) ? (...p) => (this.targetQueue.push({
        method: d,
        args: p,
        resolve: () => {
        }
      }), this.fallbacks[d](...p)) : (...p) => new Promise((y) => {
        this.targetQueue.push({
          method: d,
          args: p,
          resolve: y
        });
      })
    });
  }
  async setRealTarget(r) {
    this.target = r;
    for (const t of this.onQueue)
      this.target.on[t.method](...t.args);
    for (const t of this.targetQueue)
      t.resolve(await this.target[t.method](...t.args));
  }
}
function $m(e, r) {
  const t = e, o = Cu(), a = Cm(), u = xm && t.enableEarlyProxy;
  if (a && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !u))
    a.emit(Sm, e, r);
  else {
    const f = u ? new Bm(t, a) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: t,
      setupFn: r,
      proxy: f
    }), f && r(f.proxiedTarget);
  }
}
/**
   * match-sorter-utils
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
const xu = {
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  Ấ: "A",
  Ắ: "A",
  Ẳ: "A",
  Ẵ: "A",
  Ặ: "A",
  Æ: "AE",
  Ầ: "A",
  Ằ: "A",
  Ȃ: "A",
  Ç: "C",
  Ḉ: "C",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  Ế: "E",
  Ḗ: "E",
  Ề: "E",
  Ḕ: "E",
  Ḝ: "E",
  Ȇ: "E",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  Ḯ: "I",
  Ȋ: "I",
  Ð: "D",
  Ñ: "N",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  Ố: "O",
  Ṍ: "O",
  Ṓ: "O",
  Ȏ: "O",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  Ý: "Y",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  ấ: "a",
  ắ: "a",
  ẳ: "a",
  ẵ: "a",
  ặ: "a",
  æ: "ae",
  ầ: "a",
  ằ: "a",
  ȃ: "a",
  ç: "c",
  ḉ: "c",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  ế: "e",
  ḗ: "e",
  ề: "e",
  ḕ: "e",
  ḝ: "e",
  ȇ: "e",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  ḯ: "i",
  ȋ: "i",
  ð: "d",
  ñ: "n",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  ố: "o",
  ṍ: "o",
  ṓ: "o",
  ȏ: "o",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  ý: "y",
  ÿ: "y",
  Ā: "A",
  ā: "a",
  Ă: "A",
  ă: "a",
  Ą: "A",
  ą: "a",
  Ć: "C",
  ć: "c",
  Ĉ: "C",
  ĉ: "c",
  Ċ: "C",
  ċ: "c",
  Č: "C",
  č: "c",
  C̆: "C",
  c̆: "c",
  Ď: "D",
  ď: "d",
  Đ: "D",
  đ: "d",
  Ē: "E",
  ē: "e",
  Ĕ: "E",
  ĕ: "e",
  Ė: "E",
  ė: "e",
  Ę: "E",
  ę: "e",
  Ě: "E",
  ě: "e",
  Ĝ: "G",
  Ǵ: "G",
  ĝ: "g",
  ǵ: "g",
  Ğ: "G",
  ğ: "g",
  Ġ: "G",
  ġ: "g",
  Ģ: "G",
  ģ: "g",
  Ĥ: "H",
  ĥ: "h",
  Ħ: "H",
  ħ: "h",
  Ḫ: "H",
  ḫ: "h",
  Ĩ: "I",
  ĩ: "i",
  Ī: "I",
  ī: "i",
  Ĭ: "I",
  ĭ: "i",
  Į: "I",
  į: "i",
  İ: "I",
  ı: "i",
  Ĳ: "IJ",
  ĳ: "ij",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  Ḱ: "K",
  ḱ: "k",
  K̆: "K",
  k̆: "k",
  Ĺ: "L",
  ĺ: "l",
  Ļ: "L",
  ļ: "l",
  Ľ: "L",
  ľ: "l",
  Ŀ: "L",
  ŀ: "l",
  Ł: "l",
  ł: "l",
  Ḿ: "M",
  ḿ: "m",
  M̆: "M",
  m̆: "m",
  Ń: "N",
  ń: "n",
  Ņ: "N",
  ņ: "n",
  Ň: "N",
  ň: "n",
  ŉ: "n",
  N̆: "N",
  n̆: "n",
  Ō: "O",
  ō: "o",
  Ŏ: "O",
  ŏ: "o",
  Ő: "O",
  ő: "o",
  Œ: "OE",
  œ: "oe",
  P̆: "P",
  p̆: "p",
  Ŕ: "R",
  ŕ: "r",
  Ŗ: "R",
  ŗ: "r",
  Ř: "R",
  ř: "r",
  R̆: "R",
  r̆: "r",
  Ȓ: "R",
  ȓ: "r",
  Ś: "S",
  ś: "s",
  Ŝ: "S",
  ŝ: "s",
  Ş: "S",
  Ș: "S",
  ș: "s",
  ş: "s",
  Š: "S",
  š: "s",
  Ţ: "T",
  ţ: "t",
  ț: "t",
  Ț: "T",
  Ť: "T",
  ť: "t",
  Ŧ: "T",
  ŧ: "t",
  T̆: "T",
  t̆: "t",
  Ũ: "U",
  ũ: "u",
  Ū: "U",
  ū: "u",
  Ŭ: "U",
  ŭ: "u",
  Ů: "U",
  ů: "u",
  Ű: "U",
  ű: "u",
  Ų: "U",
  ų: "u",
  Ȗ: "U",
  ȗ: "u",
  V̆: "V",
  v̆: "v",
  Ŵ: "W",
  ŵ: "w",
  Ẃ: "W",
  ẃ: "w",
  X̆: "X",
  x̆: "x",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Y̆: "Y",
  y̆: "y",
  Ź: "Z",
  ź: "z",
  Ż: "Z",
  ż: "z",
  Ž: "Z",
  ž: "z",
  ſ: "s",
  ƒ: "f",
  Ơ: "O",
  ơ: "o",
  Ư: "U",
  ư: "u",
  Ǎ: "A",
  ǎ: "a",
  Ǐ: "I",
  ǐ: "i",
  Ǒ: "O",
  ǒ: "o",
  Ǔ: "U",
  ǔ: "u",
  Ǖ: "U",
  ǖ: "u",
  Ǘ: "U",
  ǘ: "u",
  Ǚ: "U",
  ǚ: "u",
  Ǜ: "U",
  ǜ: "u",
  Ứ: "U",
  ứ: "u",
  Ṹ: "U",
  ṹ: "u",
  Ǻ: "A",
  ǻ: "a",
  Ǽ: "AE",
  ǽ: "ae",
  Ǿ: "O",
  ǿ: "o",
  Þ: "TH",
  þ: "th",
  Ṕ: "P",
  ṕ: "p",
  Ṥ: "S",
  ṥ: "s",
  X́: "X",
  x́: "x",
  Ѓ: "Г",
  ѓ: "г",
  Ќ: "К",
  ќ: "к",
  A̋: "A",
  a̋: "a",
  E̋: "E",
  e̋: "e",
  I̋: "I",
  i̋: "i",
  Ǹ: "N",
  ǹ: "n",
  Ồ: "O",
  ồ: "o",
  Ṑ: "O",
  ṑ: "o",
  Ừ: "U",
  ừ: "u",
  Ẁ: "W",
  ẁ: "w",
  Ỳ: "Y",
  ỳ: "y",
  Ȁ: "A",
  ȁ: "a",
  Ȅ: "E",
  ȅ: "e",
  Ȉ: "I",
  ȉ: "i",
  Ȍ: "O",
  ȍ: "o",
  Ȑ: "R",
  ȑ: "r",
  Ȕ: "U",
  ȕ: "u",
  B̌: "B",
  b̌: "b",
  Č̣: "C",
  č̣: "c",
  Ê̌: "E",
  ê̌: "e",
  F̌: "F",
  f̌: "f",
  Ǧ: "G",
  ǧ: "g",
  Ȟ: "H",
  ȟ: "h",
  J̌: "J",
  ǰ: "j",
  Ǩ: "K",
  ǩ: "k",
  M̌: "M",
  m̌: "m",
  P̌: "P",
  p̌: "p",
  Q̌: "Q",
  q̌: "q",
  Ř̩: "R",
  ř̩: "r",
  Ṧ: "S",
  ṧ: "s",
  V̌: "V",
  v̌: "v",
  W̌: "W",
  w̌: "w",
  X̌: "X",
  x̌: "x",
  Y̌: "Y",
  y̌: "y",
  A̧: "A",
  a̧: "a",
  B̧: "B",
  b̧: "b",
  Ḑ: "D",
  ḑ: "d",
  Ȩ: "E",
  ȩ: "e",
  Ɛ̧: "E",
  ɛ̧: "e",
  Ḩ: "H",
  ḩ: "h",
  I̧: "I",
  i̧: "i",
  Ɨ̧: "I",
  ɨ̧: "i",
  M̧: "M",
  m̧: "m",
  O̧: "O",
  o̧: "o",
  Q̧: "Q",
  q̧: "q",
  U̧: "U",
  u̧: "u",
  X̧: "X",
  x̧: "x",
  Z̧: "Z",
  z̧: "z"
}, Am = Object.keys(xu).join("|"), Tm = new RegExp(Am, "g");
function Rm(e) {
  return e.replace(Tm, (r) => xu[r]);
}
/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2099 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */
const Ue = {
  CASE_SENSITIVE_EQUAL: 7,
  EQUAL: 6,
  STARTS_WITH: 5,
  WORD_STARTS_WITH: 4,
  CONTAINS: 3,
  ACRONYM: 2,
  MATCHES: 1,
  NO_MATCH: 0
};
function Em(e, r, t) {
  var o;
  if (t = t || {}, t.threshold = (o = t.threshold) != null ? o : Ue.MATCHES, !t.accessors) {
    const f = vs(e, r, t);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: e,
      rank: f,
      accessorIndex: -1,
      accessorThreshold: t.threshold,
      passed: f >= t.threshold
    };
  }
  const a = Mm(e, t.accessors), u = {
    rankedValue: e,
    rank: Ue.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: t.threshold,
    passed: !1
  };
  for (let f = 0; f < a.length; f++) {
    const d = a[f];
    let p = vs(d.itemValue, r, t);
    const {
      minRanking: y,
      maxRanking: k,
      threshold: S = t.threshold
    } = d.attributes;
    p < y && p >= Ue.MATCHES ? p = y : p > k && (p = k), p = Math.min(p, k), p >= S && p > u.rank && (u.rank = p, u.passed = !0, u.accessorIndex = f, u.accessorThreshold = S, u.rankedValue = d.itemValue);
  }
  return u;
}
function vs(e, r, t) {
  return e = ks(e, t), r = ks(r, t), r.length > e.length ? Ue.NO_MATCH : e === r ? Ue.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), r = r.toLowerCase(), e === r ? Ue.EQUAL : e.startsWith(r) ? Ue.STARTS_WITH : e.includes(` ${r}`) ? Ue.WORD_STARTS_WITH : e.includes(r) ? Ue.CONTAINS : r.length === 1 ? Ue.NO_MATCH : Dm(e).includes(r) ? Ue.ACRONYM : jm(e, r));
}
function Dm(e) {
  let r = "";
  return e.split(" ").forEach((o) => {
    o.split("-").forEach((u) => {
      r += u.substr(0, 1);
    });
  }), r;
}
function jm(e, r) {
  let t = 0, o = 0;
  function a(p, y, k) {
    for (let S = k, $ = y.length; S < $; S++)
      if (y[S] === p)
        return t += 1, S + 1;
    return -1;
  }
  function u(p) {
    const y = 1 / p, k = t / r.length;
    return Ue.MATCHES + k * y;
  }
  const f = a(r[0], e, 0);
  if (f < 0)
    return Ue.NO_MATCH;
  o = f;
  for (let p = 1, y = r.length; p < y; p++) {
    const k = r[p];
    if (o = a(k, e, o), !(o > -1))
      return Ue.NO_MATCH;
  }
  const d = o - f;
  return u(d);
}
function ks(e, r) {
  let {
    keepDiacritics: t
  } = r;
  return e = `${e}`, t || (e = Rm(e)), e;
}
function Nm(e, r) {
  let t = r;
  typeof r == "object" && (t = r.accessor);
  const o = t(e);
  return o == null ? [] : Array.isArray(o) ? o : [String(o)];
}
function Mm(e, r) {
  const t = [];
  for (let o = 0, a = r.length; o < a; o++) {
    const u = r[o], f = Lm(u), d = Nm(e, u);
    for (let p = 0, y = d.length; p < y; p++)
      t.push({
        itemValue: d[p],
        attributes: f
      });
  }
  return t;
}
const ws = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function Lm(e) {
  return typeof e == "function" ? ws : {
    ...ws,
    ...e
  };
}
function pt(e) {
  return e.state.fetchStatus === "fetching" ? 0 : e.state.fetchStatus === "paused" ? 4 : e.getObserversCount() ? e.isStale() ? 2 : 1 : 3;
}
function _s(e) {
  const r = pt(e);
  return r === 0 ? "fetching" : r === 4 ? "paused" : r === 2 ? "stale" : r === 3 ? "inactive" : "fresh";
}
function Km(e) {
  return pt(e) === 2 ? 0 : 16777215;
}
function Fm(e) {
  const r = pt(e);
  return r === 0 ? 27647 : r === 4 ? 9193963 : r === 2 ? 16757248 : r === 3 ? 4148832 : 33575;
}
var qm = (e, r) => e.queryHash.localeCompare(r.queryHash), Su = (e, r) => e.state.dataUpdatedAt < r.state.dataUpdatedAt ? 1 : -1, Vm = (e, r) => pt(e) === pt(r) ? Su(e, r) : pt(e) > pt(r) ? 1 : -1, ki = {
  "Status > Last Updated": Vm,
  "Query Hash": qm,
  "Last Updated": Su
}, Hr = "vue-query", wi = "Vue Query";
function Hm(e, r) {
  $m(
    {
      id: Hr,
      label: wi,
      packageName: "vue-query",
      homepage: "https://tanstack.com/query/latest",
      logo: "https://raw.githubusercontent.com/TanStack/query/main/packages/vue-query/media/vue-query.svg",
      app: e,
      settings: {
        baseSort: {
          type: "choice",
          component: "button-group",
          label: "Sort Cache Entries",
          options: [
            {
              label: "ASC",
              value: 1
            },
            {
              label: "DESC",
              value: -1
            }
          ],
          defaultValue: 1
        },
        sortFn: {
          type: "choice",
          label: "Sort Function",
          options: Object.keys(ki).map((t) => ({
            label: t,
            value: t
          })),
          defaultValue: Object.keys(ki)[0]
        },
        onlineMode: {
          type: "choice",
          component: "button-group",
          label: "Online mode",
          options: [
            {
              label: "Online",
              value: 1
            },
            {
              label: "Offline",
              value: 0
            }
          ],
          defaultValue: 1
        }
      }
    },
    (t) => {
      const o = t.getSettings();
      Ht.setOnline(!!o.onlineMode.valueOf());
      const a = r.getQueryCache();
      t.addInspector({
        id: Hr,
        label: wi,
        icon: "api",
        nodeActions: [
          {
            icon: "file_download",
            tooltip: "Refetch",
            action: (u) => {
              var f;
              (f = a.get(u)) == null || f.fetch();
            }
          },
          {
            icon: "alarm",
            tooltip: "Invalidate",
            action: (u) => {
              const f = a.get(u);
              r.invalidateQueries(f);
            }
          },
          {
            icon: "settings_backup_restore",
            tooltip: "Reset",
            action: (u) => {
              var f;
              (f = a.get(u)) == null || f.reset();
            }
          },
          {
            icon: "delete",
            tooltip: "Remove",
            action: (u) => {
              const f = a.get(u);
              a.remove(f);
            }
          },
          {
            icon: "hourglass_empty",
            tooltip: "Force loading",
            action: (u) => {
              a.get(u).setState({
                data: void 0,
                status: "pending"
              });
            }
          },
          {
            icon: "error_outline",
            tooltip: "Force error",
            action: (u) => {
              a.get(u).setState({
                data: void 0,
                status: "error",
                error: new Error("Unknown error from devtools")
              });
            }
          }
        ]
      }), t.addTimelineLayer({
        id: Hr,
        label: wi,
        color: 16767308
      }), a.subscribe((u) => {
        t.sendInspectorTree(Hr), t.sendInspectorState(Hr), [
          "added",
          "removed",
          "updated"
        ].includes(u.type) && t.addTimelineEvent({
          layerId: Hr,
          event: {
            title: u.type,
            subtitle: u.query.queryHash,
            time: t.now(),
            data: {
              queryHash: u.query.queryHash,
              ...u
            }
          }
        });
      }), t.on.setPluginSettings((u) => {
        u.key === "onlineMode" && Ht.setOnline(!!u.newValue);
      }), t.on.getInspectorTree((u) => {
        if (u.inspectorId === Hr) {
          const f = a.getAll(), d = t.getSettings(), k = (u.filter ? f.filter(
            (S) => Em(S.queryHash, u.filter).passed
          ) : [...f]).sort(
            (S, $) => ki[d.sortFn](S, $) * d.baseSort
          ).map((S) => {
            const $ = _s(S);
            return {
              id: S.queryHash,
              label: S.queryHash,
              tags: [
                {
                  label: `${$} [${S.getObserversCount()}]`,
                  textColor: Km(S),
                  backgroundColor: Fm(S)
                }
              ]
            };
          });
          u.rootNodes = k;
        }
      }), t.on.getInspectorState((u) => {
        if (u.inspectorId === Hr) {
          const f = a.get(u.nodeId);
          if (!f)
            return;
          u.state = {
            " Query Details": [
              {
                key: "Query key",
                value: f.queryHash
              },
              {
                key: "Query status",
                value: _s(f)
              },
              {
                key: "Observers",
                value: f.getObserversCount()
              },
              {
                key: "Last Updated",
                value: new Date(f.state.dataUpdatedAt).toLocaleTimeString()
              }
            ],
            "Data Explorer": [
              {
                key: "Data",
                value: f.state.data
              }
            ],
            "Query Explorer": [
              {
                key: "Query",
                value: f
              }
            ]
          };
        }
      });
    }
  );
}
var zm = {
  install: (e, r = {}) => {
    const t = bm(r.queryClientKey);
    let o;
    if ("queryClient" in r && r.queryClient)
      o = r.queryClient;
    else {
      const f = "queryClientConfig" in r ? r.queryClientConfig : void 0;
      o = new _u(f);
    }
    $n || o.mount();
    let a = () => {
    };
    if (r.clientPersister) {
      o.isRestoring.value = !0;
      const [f, d] = r.clientPersister(o);
      a = f, d.then(() => {
        var p;
        o.isRestoring.value = !1, (p = r.clientPersisterOnSuccess) == null || p.call(r, o);
      });
    }
    const u = () => {
      o.unmount(), a();
    };
    if (e.onUnmount)
      e.onUnmount(u);
    else {
      const f = e.unmount;
      e.unmount = function() {
        u(), f();
      };
    }
    e.provide(t, o), process.env.NODE_ENV === "development" && r.enableDevtoolsV6Plugin && Hm(e, o);
  }
}, Um = ["added", "removed", "updated"];
function Cs(e) {
  return Um.includes(e);
}
async function Wm({
  queryClient: e,
  persister: r,
  maxAge: t = 1e3 * 60 * 60 * 24,
  buster: o = "",
  hydrateOptions: a
}) {
  try {
    const u = await r.restoreClient();
    if (u)
      if (u.timestamp) {
        const f = Date.now() - u.timestamp > t, d = u.buster !== o;
        f || d ? r.removeClient() : mm(e, u.clientState, a);
      } else
        r.removeClient();
  } catch (u) {
    process.env.NODE_ENV !== "production" && (console.error(u), console.warn(
      "Encountered an error attempting to restore client cache from persisted location. As a precaution, the persisted cache will be discarded."
    )), r.removeClient();
  }
}
async function xs({
  queryClient: e,
  persister: r,
  buster: t = "",
  dehydrateOptions: o
}) {
  const a = {
    buster: t,
    timestamp: Date.now(),
    clientState: pm(e, o)
  };
  await r.persistClient(a);
}
function Qm(e) {
  const r = e.queryClient.getQueryCache().subscribe((o) => {
    Cs(o.type) && xs(e);
  }), t = e.queryClient.getMutationCache().subscribe((o) => {
    Cs(o.type) && xs(e);
  });
  return () => {
    r(), t();
  };
}
function Gm(e) {
  let r = !1, t;
  const o = () => {
    r = !0, t == null || t();
  }, a = Wm(e).then(() => {
    r || (t = Qm(e));
  });
  return [o, a];
}
const Ym = {
  persistClient: async (e) => {
    localStorage.setItem("tanstack-query-cache", JSON.stringify(e));
  },
  restoreClient: async () => {
    localStorage.getItem("tanstack-query-cache");
  },
  removeClient: async () => {
    localStorage.removeItem("tanstack-query-cache");
  }
}, Pu = new _u({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1e3
      // 5 minutes
    }
  }
});
Gm({
  queryClient: Pu,
  persister: Ym,
  dehydrateOptions: {
    shouldDehydrateQuery: (e) => e.state.status === "success"
  }
});
function Ki(e, r) {
  if (!r) return e;
  const t = { ...e };
  for (const o in r)
    if (r.hasOwnProperty(o)) {
      const a = e[o], u = r[o];
      typeof a == "object" && a !== null && typeof u == "object" && u !== null && !Array.isArray(a) && !Array.isArray(u) ? t[o] = Ki(a, u) : t[o] = u;
    }
  return t;
}
const Zm = async (e, { apiClient: r, iconList: t, primevueConfig: o, formkitConfig: a }) => {
  const u = jr(!1);
  e.provide("isIconsLoaded", u);
  const f = {
    // Default theme configuration
    theme: {
      preset: yh,
      options: {
        prefix: "p",
        darkModeSelector: ".dark",
        cssLayer: {
          name: "primevue",
          order: "tailwind-base, primevue, tailwind-utilities"
        }
      }
    }
  }, d = {
    locales: { en: Vp, ar: Kp },
    locale: "en",
    icons: {
      ...Eh
    }
  };
  if (e.use(fl, Ki(f, o)), e.use(dc, fc(Ki(d, a))), !r || !t) return;
  if (await Bi.icon.count() > 0) {
    u.value = !0;
    return;
  }
  Td(t, r, {}).then(({ icons: y }) => {
    Bi.icon.bulkAdd(y).then(() => {
      setTimeout(() => u.value = !0, 3e3);
    });
  });
}, hg = {
  install(e, r) {
    Zm(e, r), console.log("config here", r.apiClient), e.use(zm, {
      queryClient: Pu
    }), console.log("plugin installed", e);
  }
};
export {
  tg as AppBtn,
  ug as AppForm,
  sg as AppHeader,
  ng as AppIcon,
  og as AppImage,
  ig as AppNavigation,
  ag as AppSidebar,
  cg as Datalist,
  hg as default
};
