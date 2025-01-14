var Js = Object.defineProperty;
var Ou = (e) => {
  throw TypeError(e);
};
var el = (e, r, t) => r in e ? Js(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var io = (e, r, t) => el(e, typeof r != "symbol" ? r + "" : r, t), ma = (e, r, t) => r.has(e) || Ou("Cannot " + t);
var D = (e, r, t) => (ma(e, r, "read from private field"), t ? t.call(e) : r.get(e)), be = (e, r, t) => r.has(e) ? Ou("Cannot add the same private member more than once") : r instanceof WeakSet ? r.add(e) : r.set(e, t), te = (e, r, t, o) => (ma(e, r, "write to private field"), o ? o.call(e, t) : r.set(e, t), t), je = (e, r, t) => (ma(e, r, "access private method"), t);
var so = (e, r, t, o) => ({
  set _(u) {
    te(e, r, u, t);
  },
  get _() {
    return D(e, r, o);
  }
});
import { ref as jr, readonly as rl, getCurrentInstance as tl, onMounted as nl, nextTick as Ei, watch as cn, reactive as ol, openBlock as fe, createElementBlock as Ce, defineComponent as Di, inject as al, useSlots as ul, computed as il, h as sn, createBlock as xr, resolveDynamicComponent as Xr, mergeProps as ce, createElementVNode as fr, resolveComponent as za, resolveDirective as sl, normalizeClass as ka, Fragment as Tt, renderList as ji, withDirectives as Ca, createCommentVNode as Er, toDisplayString as Ha, createVNode as Et, Transition as Li, withCtx as Mi, vShow as Ni, renderSlot as ll, unref as dn, isRef as Ki } from "vue";
import { Chip as cl, InputText as dl } from "primevue";
import { plugin as fl, defaultConfig as pl } from "@formkit/vue";
var ml = Object.defineProperty, Bu = Object.getOwnPropertySymbols, gl = Object.prototype.hasOwnProperty, hl = Object.prototype.propertyIsEnumerable, $u = (e, r, t) => r in e ? ml(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, bl = (e, r) => {
  for (var t in r || (r = {}))
    gl.call(r, t) && $u(e, t, r[t]);
  if (Bu)
    for (var t of Bu(r))
      hl.call(r, t) && $u(e, t, r[t]);
  return e;
};
function et(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Sa(e, r, t = /* @__PURE__ */ new WeakSet()) {
  if (e === r) return !0;
  if (!e || !r || typeof e != "object" || typeof r != "object" || t.has(e) || t.has(r)) return !1;
  t.add(e).add(r);
  let o = Array.isArray(e), u = Array.isArray(r), s, d, f;
  if (o && u) {
    if (d = e.length, d != r.length) return !1;
    for (s = d; s-- !== 0; ) if (!Sa(e[s], r[s], t)) return !1;
    return !0;
  }
  if (o != u) return !1;
  let m = e instanceof Date, y = r instanceof Date;
  if (m != y) return !1;
  if (m && y) return e.getTime() == r.getTime();
  let _ = e instanceof RegExp, S = r instanceof RegExp;
  if (_ != S) return !1;
  if (_ && S) return e.toString() == r.toString();
  let $ = Object.keys(e);
  if (d = $.length, d !== Object.keys(r).length) return !1;
  for (s = d; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, $[s])) return !1;
  for (s = d; s-- !== 0; )
    if (f = $[s], !Sa(e[f], r[f], t)) return !1;
  return !0;
}
function yl(e, r) {
  return Sa(e, r);
}
function qa(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function ne(e) {
  return !et(e);
}
function Ot(e, r, t) {
  return yl(e, r);
}
function Au(e, r) {
  let t;
  if (ne(e))
    try {
      t = e.findLast(r);
    } catch {
      t = [...e].reverse().find(r);
    }
  return t;
}
function wr(e, r = !0) {
  return e instanceof Object && e.constructor === Object && (r || Object.keys(e).length !== 0);
}
function He(e, ...r) {
  return qa(e) ? e(...r) : e;
}
function We(e, r = !0) {
  return typeof e == "string" && (r || e !== "");
}
function lr(e) {
  return We(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function Va(e, r = "", t = {}) {
  const o = lr(r).split("."), u = o.shift();
  return u ? wr(e) ? Va(He(e[Object.keys(e).find((s) => lr(s) === u) || ""], t), o.join("."), t) : void 0 : He(e, t);
}
function wo(e, r = !0) {
  return Array.isArray(e) && (r || e.length !== 0);
}
function vl(e) {
  return ne(e) && !isNaN(e);
}
function _l(e = "") {
  return ne(e) && e.length === 1 && !!e.match(/\S| /);
}
function Dr(e, r) {
  if (r) {
    const t = r.test(e);
    return r.lastIndex = 0, t;
  }
  return !1;
}
function xl(...e) {
  const r = (t = {}, o = {}) => {
    const u = bl({}, t);
    return Object.keys(o).forEach((s) => {
      wr(o[s]) && s in t && wr(t[s]) ? u[s] = r(t[s], o[s]) : u[s] = o[s];
    }), u;
  };
  return e.reduce((t, o, u) => u === 0 ? o : r(t, o), {});
}
function gn(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function wl(e) {
  return We(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Fi(e) {
  return We(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (r, t) => t === 0 ? r : "-" + r.toLowerCase()).toLowerCase() : e;
}
function Ru(e) {
  return We(e) ? e.replace(/[A-Z]/g, (r, t) => t === 0 ? r : "." + r.toLowerCase()).toLowerCase() : e;
}
function zi() {
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
      o && o.slice().map((u) => {
        u(t);
      });
    },
    clear() {
      e.clear();
    }
  };
}
var kl = Object.defineProperty, Cl = Object.defineProperties, Sl = Object.getOwnPropertyDescriptors, ho = Object.getOwnPropertySymbols, Hi = Object.prototype.hasOwnProperty, qi = Object.prototype.propertyIsEnumerable, Tu = (e, r, t) => r in e ? kl(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t, cr = (e, r) => {
  for (var t in r || (r = {}))
    Hi.call(r, t) && Tu(e, t, r[t]);
  if (ho)
    for (var t of ho(r))
      qi.call(r, t) && Tu(e, t, r[t]);
  return e;
}, ga = (e, r) => Cl(e, Sl(r)), Ar = (e, r) => {
  var t = {};
  for (var o in e)
    Hi.call(e, o) && r.indexOf(o) < 0 && (t[o] = e[o]);
  if (e != null && ho)
    for (var o of ho(e))
      r.indexOf(o) < 0 && qi.call(e, o) && (t[o] = e[o]);
  return t;
}, Il = zi(), sr = Il;
function Eu(e, r) {
  wo(e) ? e.push(...r || []) : wr(e) && Object.assign(e, r);
}
function Pl(e) {
  return wr(e) && e.hasOwnProperty("value") && e.hasOwnProperty("type") ? e.value : e;
}
function Ol(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Ia(e = "", r = "") {
  return Ol(`${We(e, !1) && We(r, !1) ? `${e}-` : e}${r}`);
}
function Vi(e = "", r = "") {
  return `--${Ia(e, r)}`;
}
function Bl(e = "") {
  const r = (e.match(/{/g) || []).length, t = (e.match(/}/g) || []).length;
  return (r + t) % 2 !== 0;
}
function Ui(e, r = "", t = "", o = [], u) {
  if (We(e)) {
    const s = /{([^}]*)}/g, d = e.trim();
    if (Bl(d))
      return;
    if (Dr(d, s)) {
      const f = d.replaceAll(s, (_) => {
        const $ = _.replace(/{|}/g, "").split(".").filter((E) => !o.some((j) => Dr(E, j)));
        return `var(${Vi(t, Fi($.join("-")))}${ne(u) ? `, ${u}` : ""})`;
      }), m = /(\d+\s+[\+\-\*\/]\s+\d+)/g, y = /var\([^)]+\)/g;
      return Dr(f.replace(y, "0"), m) ? `calc(${f})` : f;
    }
    return d;
  } else if (vl(e))
    return e;
}
function $l(e, r, t) {
  We(r, !1) && e.push(`${r}:${t};`);
}
function $t(e, r) {
  return e ? `${e}{${r}}` : "";
}
var hn = (...e) => Al(_e.getTheme(), ...e), Al = (e = {}, r, t, o) => {
  if (r) {
    const { variable: u, options: s } = _e.defaults || {}, { prefix: d, transform: f } = (e == null ? void 0 : e.options) || s || {}, y = Dr(r, /{([^}]*)}/g) ? r : `{${r}}`;
    return o === "value" || et(o) && f === "strict" ? _e.getTokenValue(r) : Ui(y, void 0, d, [u.excludedKeyRegex], t);
  }
  return "";
};
function Rl(e, r = {}) {
  const t = _e.defaults.variable, { prefix: o = t.prefix, selector: u = t.selector, excludedKeyRegex: s = t.excludedKeyRegex } = r, d = (y, _ = "") => Object.entries(y).reduce(
    (S, [$, E]) => {
      const j = Dr($, s) ? Ia(_) : Ia(_, Fi($)), L = Pl(E);
      if (wr(L)) {
        const { variables: G, tokens: J } = d(L, j);
        Eu(S.tokens, J), Eu(S.variables, G);
      } else
        S.tokens.push((o ? j.replace(`${o}-`, "") : j).replaceAll("-", ".")), $l(S.variables, Vi(j), Ui(L, j, o, [s]));
      return S;
    },
    { variables: [], tokens: [] }
  ), { variables: f, tokens: m } = d(e, o);
  return {
    value: f,
    tokens: m,
    declarations: f.join(""),
    css: $t(u, f.join(""))
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
        return (o = r.map((u) => u.resolve(t)).find((u) => u.matched)) != null ? o : this.rules.custom.resolve(t);
      });
    }
  },
  _toVariables(e, r) {
    return Rl(e, { prefix: r == null ? void 0 : r.prefix });
  },
  getCommon({ name: e = "", theme: r = {}, params: t, set: o, defaults: u }) {
    var s, d, f, m, y, _, S;
    const { preset: $, options: E } = r;
    let j, L, G, J, X, M, W;
    if (ne($) && E.transform !== "strict") {
      const { primitive: ge, semantic: de, extend: xe } = $, ye = de || {}, { colorScheme: $e } = ye, pr = Ar(ye, ["colorScheme"]), rr = xe || {}, { colorScheme: Qe } = rr, Ne = Ar(rr, ["colorScheme"]), mr = $e || {}, { dark: tr } = mr, gr = Ar(mr, ["dark"]), kr = Qe || {}, { dark: qe } = kr, Ge = Ar(kr, ["dark"]), Be = ne(ge) ? this._toVariables({ primitive: ge }, E) : {}, Ve = ne(pr) ? this._toVariables({ semantic: pr }, E) : {}, Cr = ne(gr) ? this._toVariables({ light: gr }, E) : {}, nr = ne(tr) ? this._toVariables({ dark: tr }, E) : {}, Sr = ne(Ne) ? this._toVariables({ semantic: Ne }, E) : {}, rt = ne(Ge) ? this._toVariables({ light: Ge }, E) : {}, Ir = ne(qe) ? this._toVariables({ dark: qe }, E) : {}, [Wt, Po] = [(s = Be.declarations) != null ? s : "", Be.tokens], [Y, Rn] = [(d = Ve.declarations) != null ? d : "", Ve.tokens || []], [_t, ve] = [(f = Cr.declarations) != null ? f : "", Cr.tokens || []], [tt, Oo] = [(m = nr.declarations) != null ? m : "", nr.tokens || []], [Pr, Bo] = [(y = Sr.declarations) != null ? y : "", Sr.tokens || []], [$o, Ao] = [(_ = rt.declarations) != null ? _ : "", rt.tokens || []], [Ro, Qt] = [(S = Ir.declarations) != null ? S : "", Ir.tokens || []];
      j = this.transformCSS(e, Wt, "light", "variable", E, o, u), L = Po;
      const Xe = this.transformCSS(e, `${Y}${_t}`, "light", "variable", E, o, u), Tn = this.transformCSS(e, `${tt}`, "dark", "variable", E, o, u);
      G = `${Xe}${Tn}`, J = [.../* @__PURE__ */ new Set([...Rn, ...ve, ...Oo])];
      const nt = this.transformCSS(e, `${Pr}${$o}color-scheme:light`, "light", "variable", E, o, u), En = this.transformCSS(e, `${Ro}color-scheme:dark`, "dark", "variable", E, o, u);
      X = `${nt}${En}`, M = [.../* @__PURE__ */ new Set([...Bo, ...Ao, ...Qt])], W = He($.css, { dt: hn });
    }
    return {
      primitive: {
        css: j,
        tokens: L
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
  getPreset({ name: e = "", preset: r = {}, options: t, params: o, set: u, defaults: s, selector: d }) {
    var f, m, y;
    let _, S, $;
    if (ne(r) && t.transform !== "strict") {
      const E = e.replace("-directive", ""), j = r, { colorScheme: L, extend: G, css: J } = j, X = Ar(j, ["colorScheme", "extend", "css"]), M = G || {}, { colorScheme: W } = M, ge = Ar(M, ["colorScheme"]), de = L || {}, { dark: xe } = de, ye = Ar(de, ["dark"]), $e = W || {}, { dark: pr } = $e, rr = Ar($e, ["dark"]), Qe = ne(X) ? this._toVariables({ [E]: cr(cr({}, X), ge) }, t) : {}, Ne = ne(ye) ? this._toVariables({ [E]: cr(cr({}, ye), rr) }, t) : {}, mr = ne(xe) ? this._toVariables({ [E]: cr(cr({}, xe), pr) }, t) : {}, [tr, gr] = [(f = Qe.declarations) != null ? f : "", Qe.tokens || []], [kr, qe] = [(m = Ne.declarations) != null ? m : "", Ne.tokens || []], [Ge, Be] = [(y = mr.declarations) != null ? y : "", mr.tokens || []], Ve = this.transformCSS(E, `${tr}${kr}`, "light", "variable", t, u, s, d), Cr = this.transformCSS(E, Ge, "dark", "variable", t, u, s, d);
      _ = `${Ve}${Cr}`, S = [.../* @__PURE__ */ new Set([...gr, ...qe, ...Be])], $ = He(J, { dt: hn });
    }
    return {
      css: _,
      tokens: S,
      style: $
    };
  },
  getPresetC({ name: e = "", theme: r = {}, params: t, set: o, defaults: u }) {
    var s;
    const { preset: d, options: f } = r, m = (s = d == null ? void 0 : d.components) == null ? void 0 : s[e];
    return this.getPreset({ name: e, preset: m, options: f, params: t, set: o, defaults: u });
  },
  getPresetD({ name: e = "", theme: r = {}, params: t, set: o, defaults: u }) {
    var s;
    const d = e.replace("-directive", ""), { preset: f, options: m } = r, y = (s = f == null ? void 0 : f.directives) == null ? void 0 : s[d];
    return this.getPreset({ name: d, preset: y, options: m, params: t, set: o, defaults: u });
  },
  applyDarkColorScheme(e) {
    return !(e.darkModeSelector === "none" || e.darkModeSelector === !1);
  },
  getColorSchemeOption(e, r) {
    var t;
    return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === !0 ? r.options.darkModeSelector : (t = e.darkModeSelector) != null ? t : r.options.darkModeSelector) : [];
  },
  getLayerOrder(e, r = {}, t, o) {
    const { cssLayer: u } = r;
    return u ? `@layer ${He(u.order || "primeui", t)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: r = {}, params: t, props: o = {}, set: u, defaults: s }) {
    const d = this.getCommon({ name: e, theme: r, params: t, set: u, defaults: s }), f = Object.entries(o).reduce((m, [y, _]) => m.push(`${y}="${_}"`) && m, []).join(" ");
    return Object.entries(d || {}).reduce((m, [y, _]) => {
      if (_ != null && _.css) {
        const S = gn(_ == null ? void 0 : _.css), $ = `${y}-variables`;
        m.push(`<style type="text/css" data-primevue-style-id="${$}" ${f}>${S}</style>`);
      }
      return m;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: r = {}, params: t, props: o = {}, set: u, defaults: s }) {
    var d;
    const f = { name: e, theme: r, params: t, set: u, defaults: s }, m = (d = e.includes("-directive") ? this.getPresetD(f) : this.getPresetC(f)) == null ? void 0 : d.css, y = Object.entries(o).reduce((_, [S, $]) => _.push(`${S}="${$}"`) && _, []).join(" ");
    return m ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${y}>${gn(m)}</style>` : "";
  },
  createTokens(e = {}, r, t = "", o = "", u = {}) {
    return Object.entries(e).forEach(([s, d]) => {
      const f = Dr(s, r.variable.excludedKeyRegex) ? t : t ? `${t}.${Ru(s)}` : Ru(s), m = o ? `${o}.${s}` : s;
      wr(d) ? this.createTokens(d, r, f, m, u) : (u[f] || (u[f] = {
        paths: [],
        computed(y, _ = {}) {
          var S, $;
          return this.paths.length === 1 ? (S = this.paths[0]) == null ? void 0 : S.computed(this.paths[0].scheme, _.binding) : y && y !== "none" ? ($ = this.paths.find((E) => E.scheme === y)) == null ? void 0 : $.computed(y, _.binding) : this.paths.map((E) => E.computed(E.scheme, _[E.scheme]));
        }
      }), u[f].paths.push({
        path: m,
        value: d,
        scheme: m.includes("colorScheme.light") ? "light" : m.includes("colorScheme.dark") ? "dark" : "none",
        computed(y, _ = {}) {
          const S = /{([^}]*)}/g;
          let $ = d;
          if (_.name = this.path, _.binding || (_.binding = {}), Dr(d, S)) {
            const j = d.trim().replaceAll(S, (J) => {
              var X;
              const M = J.replace(/{|}/g, ""), W = (X = u[M]) == null ? void 0 : X.computed(y, _);
              return wo(W) && W.length === 2 ? `light-dark(${W[0].value},${W[1].value})` : W == null ? void 0 : W.value;
            }), L = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, G = /var\([^)]+\)/g;
            $ = Dr(j.replace(G, "0"), L) ? `calc(${j})` : j;
          }
          return et(_.binding) && delete _.binding, {
            colorScheme: y,
            path: this.path,
            paths: _,
            value: $.includes("undefined") ? void 0 : $
          };
        }
      }));
    }), u;
  },
  getTokenValue(e, r, t) {
    var o;
    const s = ((m) => m.split(".").filter((_) => !Dr(_.toLowerCase(), t.variable.excludedKeyRegex)).join("."))(r), d = r.includes("colorScheme.light") ? "light" : r.includes("colorScheme.dark") ? "dark" : void 0, f = [(o = e[s]) == null ? void 0 : o.computed(d)].flat().filter((m) => m);
    return f.length === 1 ? f[0].value : f.reduce((m = {}, y) => {
      const _ = y, { colorScheme: S } = _, $ = Ar(_, ["colorScheme"]);
      return m[S] = $, m;
    }, void 0);
  },
  getSelectorRule(e, r, t, o) {
    return t === "class" || t === "attr" ? $t(ne(r) ? `${e}${r},${e} ${r}` : e, o) : $t(e, ne(r) ? $t(r, o) : o);
  },
  transformCSS(e, r, t, o, u = {}, s, d, f) {
    if (ne(r)) {
      const { cssLayer: m } = u;
      if (o !== "style") {
        const y = this.getColorSchemeOption(u, d);
        r = t === "dark" ? y.reduce((_, { type: S, selector: $ }) => (ne($) && (_ += $.includes("[CSS]") ? $.replace("[CSS]", r) : this.getSelectorRule($, f, S, r)), _), "") : $t(f ?? ":root", r);
      }
      if (m) {
        const y = {
          name: "primeui",
          order: "primeui"
        };
        wr(m) && (y.name = He(m.name, { name: e, type: o })), ne(y.name) && (r = $t(`@layer ${y.name}`, r), s == null || s.layerNames(y.name));
      }
      return r;
    }
    return "";
  }
}, _e = {
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
    r && (this._theme = ga(cr({}, r), {
      options: cr(cr({}, this.defaults.options), r.options)
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
    this.update({ theme: e }), sr.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = ga(cr({}, this.theme), { preset: e }), this._tokens = or.createTokens(e, this.defaults), this.clearLoadedStyleNames(), sr.emit("preset:change", e), sr.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = ga(cr({}, this.theme), { options: e }), this.clearLoadedStyleNames(), sr.emit("options:change", e), sr.emit("theme:change", this.theme);
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
    const u = { name: e, preset: r, options: this.options, selector: t, params: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return or.getPreset(u);
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
    this._loadingStyles.size && (this._loadingStyles.delete(r), sr.emit(`theme:${r}:load`, e), !this._loadingStyles.size && sr.emit("theme:load"));
  }
};
function Tl(e, r) {
  return e ? e.classList ? e.classList.contains(r) : new RegExp("(^| )" + r + "( |$)", "gi").test(e.className) : !1;
}
function El(e, r) {
  if (e && r) {
    const t = (o) => {
      Tl(e, o) || (e.classList ? e.classList.add(o) : e.className += " " + o);
    };
    [r].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(t));
  }
}
function ha(e, r) {
  if (e && r) {
    const t = (o) => {
      e.classList ? e.classList.remove(o) : e.className = e.className.replace(new RegExp("(^|\\b)" + o.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [r].flat().filter(Boolean).forEach((o) => o.split(" ").forEach(t));
  }
}
function Dl(e, r) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function ko(e) {
  return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
}
function bo(e, r = {}) {
  if (ko(e)) {
    const t = (o, u) => {
      var s, d;
      const f = (s = e == null ? void 0 : e.$attrs) != null && s[o] ? [(d = e == null ? void 0 : e.$attrs) == null ? void 0 : d[o]] : [];
      return [u].flat().reduce((m, y) => {
        if (y != null) {
          const _ = typeof y;
          if (_ === "string" || _ === "number")
            m.push(y);
          else if (_ === "object") {
            const S = Array.isArray(y) ? t(o, y) : Object.entries(y).map(([$, E]) => o === "style" && (E || E === 0) ? `${$.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${E}` : E ? $ : void 0);
            m = S.length ? m.concat(S.filter(($) => !!$)) : m;
          }
        }
        return m;
      }, f);
    };
    Object.entries(r).forEach(([o, u]) => {
      if (u != null) {
        const s = o.match(/^on(.+)/);
        s ? e.addEventListener(s[1].toLowerCase(), u) : o === "p-bind" || o === "pBind" ? bo(e, u) : (u = o === "class" ? [...new Set(t("class", u))].join(" ").trim() : o === "style" ? t("style", u).join(";").trim() : u, (e.$attrs = e.$attrs || {}) && (e.$attrs[o] = u), e.setAttribute(o, u));
      }
    });
  }
}
function jl(e, r = {}, ...t) {
  {
    const o = document.createElement(e);
    return bo(o, r), o.append(...t), o;
  }
}
function dr(e, r) {
  return ko(e) ? e.matches(r) ? e : e.querySelector(r) : null;
}
function fn(e, r) {
  e && document.activeElement !== e && e.focus(r);
}
function pn(e, r) {
  if (ko(e)) {
    const t = e.getAttribute(r);
    return isNaN(t) ? t === "true" || t === "false" ? t === "true" : t : +t;
  }
}
function Du(e) {
  if (e) {
    let r = e.offsetHeight, t = getComputedStyle(e);
    return r -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom) + parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), r;
  }
  return 0;
}
function Ll(e) {
  if (e) {
    let r = e.parentNode;
    return r && r instanceof ShadowRoot && r.host && (r = r.host), r;
  }
  return null;
}
function Ml(e) {
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
function Nl(e, r) {
  return e ? e.offsetHeight : 0;
}
function Kl(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Ll(e));
}
function ju(e) {
  if (e) {
    let r = e.offsetWidth, t = getComputedStyle(e);
    return r -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight) + parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth), r;
  }
  return 0;
}
function Wi() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Fl(e, r = "", t) {
  ko(e) && t !== null && t !== void 0 && e.setAttribute(r, t);
}
var lo = {};
function Ua(e = "pui_id_") {
  return lo.hasOwnProperty(e) || (lo[e] = 0), lo[e]++, `${e}${lo[e]}`;
}
var Le = {
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
function bn(e) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, bn(e);
}
function Lu(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Mu(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Lu(Object(t), !0).forEach(function(o) {
      zl(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Lu(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function zl(e, r, t) {
  return (r = Hl(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Hl(e) {
  var r = ql(e, "string");
  return bn(r) == "symbol" ? r : r + "";
}
function ql(e, r) {
  if (bn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (bn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
function Vl(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  tl() ? nl(e) : r ? e() : Ei(e);
}
var Ul = 0;
function Wl(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = jr(!1), o = jr(e), u = jr(null), s = Wi() ? window.document : void 0, d = r.document, f = d === void 0 ? s : d, m = r.immediate, y = m === void 0 ? !0 : m, _ = r.manual, S = _ === void 0 ? !1 : _, $ = r.name, E = $ === void 0 ? "style_".concat(++Ul) : $, j = r.id, L = j === void 0 ? void 0 : j, G = r.media, J = G === void 0 ? void 0 : G, X = r.nonce, M = X === void 0 ? void 0 : X, W = r.first, ge = W === void 0 ? !1 : W, de = r.onMounted, xe = de === void 0 ? void 0 : de, ye = r.onUpdated, $e = ye === void 0 ? void 0 : ye, pr = r.onLoad, rr = pr === void 0 ? void 0 : pr, Qe = r.props, Ne = Qe === void 0 ? {} : Qe, mr = function() {
  }, tr = function(qe) {
    var Ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (f) {
      var Be = Mu(Mu({}, Ne), Ge), Ve = Be.name || E, Cr = Be.id || L, nr = Be.nonce || M;
      u.value = f.querySelector('style[data-primevue-style-id="'.concat(Ve, '"]')) || f.getElementById(Cr) || f.createElement("style"), u.value.isConnected || (o.value = qe || e, bo(u.value, {
        type: "text/css",
        id: Cr,
        media: J,
        nonce: nr
      }), ge ? f.head.prepend(u.value) : f.head.appendChild(u.value), Fl(u.value, "data-primevue-style-id", Ve), bo(u.value, Be), u.value.onload = function(Sr) {
        return rr == null ? void 0 : rr(Sr, {
          name: Ve
        });
      }, xe == null || xe(Ve)), !t.value && (mr = cn(o, function(Sr) {
        u.value.textContent = Sr, $e == null || $e(Ve);
      }, {
        immediate: !0
      }), t.value = !0);
    }
  }, gr = function() {
    !f || !t.value || (mr(), Kl(u.value) && f.head.removeChild(u.value), t.value = !1);
  };
  return y && !S && Vl(tr), {
    id: L,
    name: E,
    el: u,
    css: o,
    unload: gr,
    load: tr,
    isLoaded: rl(t)
  };
}
function yn(e) {
  "@babel/helpers - typeof";
  return yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, yn(e);
}
function Nu(e, r) {
  return Yl(e) || Zl(e, r) || Gl(e, r) || Ql();
}
function Ql() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gl(e, r) {
  if (e) {
    if (typeof e == "string") return Ku(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ku(e, r) : void 0;
  }
}
function Ku(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function Zl(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, u, s, d, f = [], m = !0, y = !1;
    try {
      if (s = (t = t.call(e)).next, r !== 0) for (; !(m = (o = s.call(t)).done) && (f.push(o.value), f.length !== r); m = !0) ;
    } catch (_) {
      y = !0, u = _;
    } finally {
      try {
        if (!m && t.return != null && (d = t.return(), Object(d) !== d)) return;
      } finally {
        if (y) throw u;
      }
    }
    return f;
  }
}
function Yl(e) {
  if (Array.isArray(e)) return e;
}
function Fu(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ba(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Fu(Object(t), !0).forEach(function(o) {
      Xl(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Fu(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Xl(e, r, t) {
  return (r = Jl(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Jl(e) {
  var r = ec(e, "string");
  return yn(r) == "symbol" ? r : r + "";
}
function ec(e, r) {
  if (yn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (yn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var rc = function(r) {
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
}, tc = function(r) {
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
}, nc = {}, oc = {}, Se = {
  name: "base",
  css: tc,
  theme: rc,
  classes: nc,
  inlineStyles: oc,
  load: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(s) {
      return s;
    }, u = o(He(r, {
      dt: hn
    }));
    return ne(u) ? Wl(gn(u), ba({
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
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return _e.transformCSS(t.name || r.name, "".concat(u).concat(o));
    });
  },
  getCommonTheme: function(r) {
    return _e.getCommon(this.name, r);
  },
  getComponentTheme: function(r) {
    return _e.getComponent(this.name, r);
  },
  getDirectiveTheme: function(r) {
    return _e.getDirective(this.name, r);
  },
  getPresetTheme: function(r, t, o) {
    return _e.getCustomPreset(this.name, r, t, o);
  },
  getLayerOrderThemeCSS: function() {
    return _e.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var o = He(this.css, {
        dt: hn
      }) || "", u = gn("".concat(o).concat(r)), s = Object.entries(t).reduce(function(d, f) {
        var m = Nu(f, 2), y = m[0], _ = m[1];
        return d.push("".concat(y, '="').concat(_, '"')) && d;
      }, []).join(" ");
      return ne(u) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(s, ">").concat(u, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return _e.getCommonStyleSheet(this.name, r, t);
  },
  getThemeStyleSheet: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = [_e.getStyleSheet(this.name, r, t)];
    if (this.theme) {
      var u = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), s = He(this.theme, {
        dt: hn
      }), d = gn(_e.transformCSS(u, s)), f = Object.entries(t).reduce(function(m, y) {
        var _ = Nu(y, 2), S = _[0], $ = _[1];
        return m.push("".concat(S, '="').concat($, '"')) && m;
      }, []).join(" ");
      ne(d) && o.push('<style type="text/css" data-primevue-style-id="'.concat(u, '" ').concat(f, ">").concat(d, "</style>"));
    }
    return o.join("");
  },
  extend: function(r) {
    return ba(ba({}, this), {}, {
      css: void 0,
      theme: void 0
    }, r);
  }
}, At = zi();
function vn(e) {
  "@babel/helpers - typeof";
  return vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, vn(e);
}
function zu(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function co(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? zu(Object(t), !0).forEach(function(o) {
      ac(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : zu(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function ac(e, r, t) {
  return (r = uc(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function uc(e) {
  var r = ic(e, "string");
  return vn(r) == "symbol" ? r : r + "";
}
function ic(e, r) {
  if (vn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (vn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var sc = {
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
    text: [Le.STARTS_WITH, Le.CONTAINS, Le.NOT_CONTAINS, Le.ENDS_WITH, Le.EQUALS, Le.NOT_EQUALS],
    numeric: [Le.EQUALS, Le.NOT_EQUALS, Le.LESS_THAN, Le.LESS_THAN_OR_EQUAL_TO, Le.GREATER_THAN, Le.GREATER_THAN_OR_EQUAL_TO],
    date: [Le.DATE_IS, Le.DATE_IS_NOT, Le.DATE_BEFORE, Le.DATE_AFTER]
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
}, lc = Symbol();
function cc(e, r) {
  var t = {
    config: ol(r)
  };
  return e.config.globalProperties.$primevue = t, e.provide(lc, t), dc(), fc(e, t), t;
}
var Rt = [];
function dc() {
  sr.clear(), Rt.forEach(function(e) {
    return e == null ? void 0 : e();
  }), Rt = [];
}
function fc(e, r) {
  var t = jr(!1), o = function() {
    var y;
    if (((y = r.config) === null || y === void 0 ? void 0 : y.theme) !== "none" && !_e.isStyleNameLoaded("common")) {
      var _, S, $ = ((_ = Se.getCommonTheme) === null || _ === void 0 ? void 0 : _.call(Se)) || {}, E = $.primitive, j = $.semantic, L = $.global, G = $.style, J = {
        nonce: (S = r.config) === null || S === void 0 || (S = S.csp) === null || S === void 0 ? void 0 : S.nonce
      };
      Se.load(E == null ? void 0 : E.css, co({
        name: "primitive-variables"
      }, J)), Se.load(j == null ? void 0 : j.css, co({
        name: "semantic-variables"
      }, J)), Se.load(L == null ? void 0 : L.css, co({
        name: "global-variables"
      }, J)), Se.loadTheme(co({
        name: "global-style"
      }, J), G), _e.setLoadedStyleName("common");
    }
  };
  sr.on("theme:change", function(m) {
    t.value || (e.config.globalProperties.$primevue.config.theme = m, t.value = !0);
  });
  var u = cn(r.config, function(m, y) {
    At.emit("config:change", {
      newValue: m,
      oldValue: y
    });
  }, {
    immediate: !0,
    deep: !0
  }), s = cn(function() {
    return r.config.ripple;
  }, function(m, y) {
    At.emit("config:ripple:change", {
      newValue: m,
      oldValue: y
    });
  }, {
    immediate: !0,
    deep: !0
  }), d = cn(function() {
    return r.config.theme;
  }, function(m, y) {
    t.value || _e.setTheme(m), r.config.unstyled || o(), t.value = !1, At.emit("config:theme:change", {
      newValue: m,
      oldValue: y
    });
  }, {
    immediate: !0,
    deep: !1
  }), f = cn(function() {
    return r.config.unstyled;
  }, function(m, y) {
    !m && r.config.theme && o(), At.emit("config:unstyled:change", {
      newValue: m,
      oldValue: y
    });
  }, {
    immediate: !0,
    deep: !0
  });
  Rt.push(u), Rt.push(s), Rt.push(d), Rt.push(f);
}
var pc = {
  install: function(r, t) {
    var o = xl(sc, t);
    cc(r, o);
  }
};
const Ut = (e, r) => {
  const t = e.__vccOpts || e;
  for (const [o, u] of r)
    t[o] = u;
  return t;
}, mc = {};
function gc(e, r) {
  return fe(), Ce("h2", null, "app btn");
}
const ag = /* @__PURE__ */ Ut(mc, [["render", gc]]);
var hc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function bc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var po = { exports: {} }, yc = po.exports, Hu;
function vc() {
  return Hu || (Hu = 1, function(e, r) {
    (function(t, o) {
      e.exports = o();
    })(yc, function() {
      var t = function(n, a) {
        return (t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, l) {
          i.__proto__ = l;
        } || function(i, l) {
          for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (i[c] = l[c]);
        })(n, a);
      }, o = function() {
        return (o = Object.assign || function(n) {
          for (var a, i = 1, l = arguments.length; i < l; i++) for (var c in a = arguments[i]) Object.prototype.hasOwnProperty.call(a, c) && (n[c] = a[c]);
          return n;
        }).apply(this, arguments);
      };
      function u(n, a, i) {
        for (var l, c = 0, p = a.length; c < p; c++) !l && c in a || ((l = l || Array.prototype.slice.call(a, 0, c))[c] = a[c]);
        return n.concat(l || Array.prototype.slice.call(a));
      }
      var s = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : hc, d = Object.keys, f = Array.isArray;
      function m(n, a) {
        return typeof a != "object" || d(a).forEach(function(i) {
          n[i] = a[i];
        }), n;
      }
      typeof Promise > "u" || s.Promise || (s.Promise = Promise);
      var y = Object.getPrototypeOf, _ = {}.hasOwnProperty;
      function S(n, a) {
        return _.call(n, a);
      }
      function $(n, a) {
        typeof a == "function" && (a = a(y(n))), (typeof Reflect > "u" ? d : Reflect.ownKeys)(a).forEach(function(i) {
          j(n, i, a[i]);
        });
      }
      var E = Object.defineProperty;
      function j(n, a, i, l) {
        E(n, a, m(i && S(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, l));
      }
      function L(n) {
        return { from: function(a) {
          return n.prototype = Object.create(a.prototype), j(n.prototype, "constructor", n), { extend: $.bind(null, n.prototype) };
        } };
      }
      var G = Object.getOwnPropertyDescriptor, J = [].slice;
      function X(n, a, i) {
        return J.call(n, a, i);
      }
      function M(n, a) {
        return a(n);
      }
      function W(n) {
        if (!n) throw new Error("Assertion Failed");
      }
      function ge(n) {
        s.setImmediate ? setImmediate(n) : setTimeout(n, 0);
      }
      function de(n, a) {
        if (typeof a == "string" && S(n, a)) return n[a];
        if (!a) return n;
        if (typeof a != "string") {
          for (var i = [], l = 0, c = a.length; l < c; ++l) {
            var p = de(n, a[l]);
            i.push(p);
          }
          return i;
        }
        var g = a.indexOf(".");
        if (g !== -1) {
          var h = n[a.substr(0, g)];
          return h == null ? void 0 : de(h, a.substr(g + 1));
        }
      }
      function xe(n, a, i) {
        if (n && a !== void 0 && !("isFrozen" in Object && Object.isFrozen(n))) if (typeof a != "string" && "length" in a) {
          W(typeof i != "string" && "length" in i);
          for (var l = 0, c = a.length; l < c; ++l) xe(n, a[l], i[l]);
        } else {
          var p, g, h = a.indexOf(".");
          h !== -1 ? (p = a.substr(0, h), (g = a.substr(h + 1)) === "" ? i === void 0 ? f(n) && !isNaN(parseInt(p)) ? n.splice(p, 1) : delete n[p] : n[p] = i : xe(h = !(h = n[p]) || !S(n, p) ? n[p] = {} : h, g, i)) : i === void 0 ? f(n) && !isNaN(parseInt(a)) ? n.splice(a, 1) : delete n[a] : n[a] = i;
        }
      }
      function ye(n) {
        var a, i = {};
        for (a in n) S(n, a) && (i[a] = n[a]);
        return i;
      }
      var $e = [].concat;
      function pr(n) {
        return $e.apply([], n);
      }
      var Br = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(pr([8, 16, 32, 64].map(function(n) {
        return ["Int", "Uint", "Float"].map(function(a) {
          return a + n + "Array";
        });
      }))).filter(function(n) {
        return s[n];
      }), rr = new Set(Br.map(function(n) {
        return s[n];
      })), Qe = null;
      function Ne(n) {
        return Qe = /* @__PURE__ */ new WeakMap(), n = function a(i) {
          if (!i || typeof i != "object") return i;
          var l = Qe.get(i);
          if (l) return l;
          if (f(i)) {
            l = [], Qe.set(i, l);
            for (var c = 0, p = i.length; c < p; ++c) l.push(a(i[c]));
          } else if (rr.has(i.constructor)) l = i;
          else {
            var g, h = y(i);
            for (g in l = h === Object.prototype ? {} : Object.create(h), Qe.set(i, l), i) S(i, g) && (l[g] = a(i[g]));
          }
          return l;
        }(n), Qe = null, n;
      }
      var mr = {}.toString;
      function tr(n) {
        return mr.call(n).slice(8, -1);
      }
      var gr = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", kr = typeof gr == "symbol" ? function(n) {
        var a;
        return n != null && (a = n[gr]) && a.apply(n);
      } : function() {
        return null;
      };
      function qe(n, a) {
        return a = n.indexOf(a), 0 <= a && n.splice(a, 1), 0 <= a;
      }
      var Ge = {};
      function Be(n) {
        var a, i, l, c;
        if (arguments.length === 1) {
          if (f(n)) return n.slice();
          if (this === Ge && typeof n == "string") return [n];
          if (c = kr(n)) {
            for (i = []; !(l = c.next()).done; ) i.push(l.value);
            return i;
          }
          if (n == null) return [n];
          if (typeof (a = n.length) != "number") return [n];
          for (i = new Array(a); a--; ) i[a] = n[a];
          return i;
        }
        for (a = arguments.length, i = new Array(a); a--; ) i[a] = arguments[a];
        return i;
      }
      var Ve = typeof Symbol < "u" ? function(n) {
        return n[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Gt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Je = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Gt), Cr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function nr(n, a) {
        this.name = n, this.message = a;
      }
      function Sr(n, a) {
        return n + ". Errors: " + Object.keys(a).map(function(i) {
          return a[i].toString();
        }).filter(function(i, l, c) {
          return c.indexOf(i) === l;
        }).join(`
`);
      }
      function rt(n, a, i, l) {
        this.failures = a, this.failedKeys = l, this.successCount = i, this.message = Sr(n, a);
      }
      function Ir(n, a) {
        this.name = "BulkError", this.failures = Object.keys(a).map(function(i) {
          return a[i];
        }), this.failuresByPos = a, this.message = Sr(n, this.failures);
      }
      L(nr).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), L(rt).from(nr), L(Ir).from(nr);
      var Wt = Je.reduce(function(n, a) {
        return n[a] = a + "Error", n;
      }, {}), Po = nr, Y = Je.reduce(function(n, a) {
        var i = a + "Error";
        function l(c, p) {
          this.name = i, c ? typeof c == "string" ? (this.message = "".concat(c).concat(p ? `
 ` + p : ""), this.inner = p || null) : typeof c == "object" && (this.message = "".concat(c.name, " ").concat(c.message), this.inner = c) : (this.message = Cr[a] || i, this.inner = null);
        }
        return L(l).from(Po), n[a] = l, n;
      }, {});
      Y.Syntax = SyntaxError, Y.Type = TypeError, Y.Range = RangeError;
      var Rn = Gt.reduce(function(n, a) {
        return n[a + "Error"] = Y[a], n;
      }, {}), _t = Je.reduce(function(n, a) {
        return ["Syntax", "Type", "Range"].indexOf(a) === -1 && (n[a + "Error"] = Y[a]), n;
      }, {});
      function ve() {
      }
      function tt(n) {
        return n;
      }
      function Oo(n, a) {
        return n == null || n === tt ? a : function(i) {
          return a(n(i));
        };
      }
      function Pr(n, a) {
        return function() {
          n.apply(this, arguments), a.apply(this, arguments);
        };
      }
      function Bo(n, a) {
        return n === ve ? a : function() {
          var i = n.apply(this, arguments);
          i !== void 0 && (arguments[0] = i);
          var l = this.onsuccess, c = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var p = a.apply(this, arguments);
          return l && (this.onsuccess = this.onsuccess ? Pr(l, this.onsuccess) : l), c && (this.onerror = this.onerror ? Pr(c, this.onerror) : c), p !== void 0 ? p : i;
        };
      }
      function $o(n, a) {
        return n === ve ? a : function() {
          n.apply(this, arguments);
          var i = this.onsuccess, l = this.onerror;
          this.onsuccess = this.onerror = null, a.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? Pr(i, this.onsuccess) : i), l && (this.onerror = this.onerror ? Pr(l, this.onerror) : l);
        };
      }
      function Ao(n, a) {
        return n === ve ? a : function(i) {
          var l = n.apply(this, arguments);
          m(i, l);
          var c = this.onsuccess, p = this.onerror;
          return this.onsuccess = null, this.onerror = null, i = a.apply(this, arguments), c && (this.onsuccess = this.onsuccess ? Pr(c, this.onsuccess) : c), p && (this.onerror = this.onerror ? Pr(p, this.onerror) : p), l === void 0 ? i === void 0 ? void 0 : i : m(l, i);
        };
      }
      function Ro(n, a) {
        return n === ve ? a : function() {
          return a.apply(this, arguments) !== !1 && n.apply(this, arguments);
        };
      }
      function Qt(n, a) {
        return n === ve ? a : function() {
          var i = n.apply(this, arguments);
          if (i && typeof i.then == "function") {
            for (var l = this, c = arguments.length, p = new Array(c); c--; ) p[c] = arguments[c];
            return i.then(function() {
              return a.apply(l, p);
            });
          }
          return a.apply(this, arguments);
        };
      }
      _t.ModifyError = rt, _t.DexieError = nr, _t.BulkError = Ir;
      var Xe = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Tn(n) {
        Xe = n;
      }
      var nt = {}, En = 100, Br = typeof Promise > "u" ? [] : function() {
        var n = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [n, y(n), n];
        var a = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [a, y(a), n];
      }(), Gt = Br[0], Je = Br[1], Br = Br[2], Je = Je && Je.then, ot = Gt && Gt.constructor, To = !!Br, Zt = function(n, a) {
        Yt.push([n, a]), Dn && (queueMicrotask(Bs), Dn = !1);
      }, Eo = !0, Dn = !0, at = [], jn = [], Do = tt, Lr = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: ve, pgp: !1, env: {}, finalize: ve }, Z = Lr, Yt = [], ut = 0, Ln = [];
      function V(n) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var a = this._PSD = Z;
        if (typeof n != "function") {
          if (n !== nt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Lo(this, this._value));
        }
        this._state = null, this._value = null, ++a.ref, function i(l, c) {
          try {
            c(function(p) {
              if (l._state === null) {
                if (p === l) throw new TypeError("A promise cannot be resolved with itself.");
                var g = l._lib && xt();
                p && typeof p.then == "function" ? i(l, function(h, v) {
                  p instanceof V ? p._then(h, v) : p.then(h, v);
                }) : (l._state = !0, l._value = p, Xa(l)), g && wt();
              }
            }, Lo.bind(null, l));
          } catch (p) {
            Lo(l, p);
          }
        }(this, n);
      }
      var jo = { get: function() {
        var n = Z, a = Fn;
        function i(l, c) {
          var p = this, g = !n.global && (n !== Z || a !== Fn), h = g && !Nr(), v = new V(function(w, I) {
            Mo(p, new Ya(eu(l, n, g, h), eu(c, n, g, h), w, I, n));
          });
          return this._consoleTask && (v._consoleTask = this._consoleTask), v;
        }
        return i.prototype = nt, i;
      }, set: function(n) {
        j(this, "then", n && n.prototype === nt ? jo : { get: function() {
          return n;
        }, set: jo.set });
      } };
      function Ya(n, a, i, l, c) {
        this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof a == "function" ? a : null, this.resolve = i, this.reject = l, this.psd = c;
      }
      function Lo(n, a) {
        var i, l;
        jn.push(a), n._state === null && (i = n._lib && xt(), a = Do(a), n._state = !1, n._value = a, l = n, at.some(function(c) {
          return c._value === l._value;
        }) || at.push(l), Xa(n), i && wt());
      }
      function Xa(n) {
        var a = n._listeners;
        n._listeners = [];
        for (var i = 0, l = a.length; i < l; ++i) Mo(n, a[i]);
        var c = n._PSD;
        --c.ref || c.finalize(), ut === 0 && (++ut, Zt(function() {
          --ut == 0 && No();
        }, []));
      }
      function Mo(n, a) {
        if (n._state !== null) {
          var i = n._state ? a.onFulfilled : a.onRejected;
          if (i === null) return (n._state ? a.resolve : a.reject)(n._value);
          ++a.psd.ref, ++ut, Zt(Os, [i, n, a]);
        } else n._listeners.push(a);
      }
      function Os(n, a, i) {
        try {
          var l, c = a._value;
          !a._state && jn.length && (jn = []), l = Xe && a._consoleTask ? a._consoleTask.run(function() {
            return n(c);
          }) : n(c), a._state || jn.indexOf(c) !== -1 || function(p) {
            for (var g = at.length; g; ) if (at[--g]._value === p._value) return at.splice(g, 1);
          }(a), i.resolve(l);
        } catch (p) {
          i.reject(p);
        } finally {
          --ut == 0 && No(), --i.psd.ref || i.psd.finalize();
        }
      }
      function Bs() {
        it(Lr, function() {
          xt() && wt();
        });
      }
      function xt() {
        var n = Eo;
        return Dn = Eo = !1, n;
      }
      function wt() {
        var n, a, i;
        do
          for (; 0 < Yt.length; ) for (n = Yt, Yt = [], i = n.length, a = 0; a < i; ++a) {
            var l = n[a];
            l[0].apply(null, l[1]);
          }
        while (0 < Yt.length);
        Dn = Eo = !0;
      }
      function No() {
        var n = at;
        at = [], n.forEach(function(l) {
          l._PSD.onunhandled.call(null, l._value, l);
        });
        for (var a = Ln.slice(0), i = a.length; i; ) a[--i]();
      }
      function Mn(n) {
        return new V(nt, !1, n);
      }
      function ke(n, a) {
        var i = Z;
        return function() {
          var l = xt(), c = Z;
          try {
            return Kr(i, !0), n.apply(this, arguments);
          } catch (p) {
            a && a(p);
          } finally {
            Kr(c, !1), l && wt();
          }
        };
      }
      $(V.prototype, { then: jo, _then: function(n, a) {
        Mo(this, new Ya(null, null, n, a, Z));
      }, catch: function(n) {
        if (arguments.length === 1) return this.then(null, n);
        var a = n, i = arguments[1];
        return typeof a == "function" ? this.then(null, function(l) {
          return (l instanceof a ? i : Mn)(l);
        }) : this.then(null, function(l) {
          return (l && l.name === a ? i : Mn)(l);
        });
      }, finally: function(n) {
        return this.then(function(a) {
          return V.resolve(n()).then(function() {
            return a;
          });
        }, function(a) {
          return V.resolve(n()).then(function() {
            return Mn(a);
          });
        });
      }, timeout: function(n, a) {
        var i = this;
        return n < 1 / 0 ? new V(function(l, c) {
          var p = setTimeout(function() {
            return c(new Y.Timeout(a));
          }, n);
          i.then(l, c).finally(clearTimeout.bind(null, p));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && j(V.prototype, Symbol.toStringTag, "Dexie.Promise"), Lr.env = Ja(), $(V, { all: function() {
        var n = Be.apply(null, arguments).map(zn);
        return new V(function(a, i) {
          n.length === 0 && a([]);
          var l = n.length;
          n.forEach(function(c, p) {
            return V.resolve(c).then(function(g) {
              n[p] = g, --l || a(n);
            }, i);
          });
        });
      }, resolve: function(n) {
        return n instanceof V ? n : n && typeof n.then == "function" ? new V(function(a, i) {
          n.then(a, i);
        }) : new V(nt, !0, n);
      }, reject: Mn, race: function() {
        var n = Be.apply(null, arguments).map(zn);
        return new V(function(a, i) {
          n.map(function(l) {
            return V.resolve(l).then(a, i);
          });
        });
      }, PSD: { get: function() {
        return Z;
      }, set: function(n) {
        return Z = n;
      } }, totalEchoes: { get: function() {
        return Fn;
      } }, newPSD: Mr, usePSD: it, scheduler: { get: function() {
        return Zt;
      }, set: function(n) {
        Zt = n;
      } }, rejectionMapper: { get: function() {
        return Do;
      }, set: function(n) {
        Do = n;
      } }, follow: function(n, a) {
        return new V(function(i, l) {
          return Mr(function(c, p) {
            var g = Z;
            g.unhandleds = [], g.onunhandled = p, g.finalize = Pr(function() {
              var h, v = this;
              h = function() {
                v.unhandleds.length === 0 ? c() : p(v.unhandleds[0]);
              }, Ln.push(function w() {
                h(), Ln.splice(Ln.indexOf(w), 1);
              }), ++ut, Zt(function() {
                --ut == 0 && No();
              }, []);
            }, g.finalize), n();
          }, a, i, l);
        });
      } }), ot && (ot.allSettled && j(V, "allSettled", function() {
        var n = Be.apply(null, arguments).map(zn);
        return new V(function(a) {
          n.length === 0 && a([]);
          var i = n.length, l = new Array(i);
          n.forEach(function(c, p) {
            return V.resolve(c).then(function(g) {
              return l[p] = { status: "fulfilled", value: g };
            }, function(g) {
              return l[p] = { status: "rejected", reason: g };
            }).then(function() {
              return --i || a(l);
            });
          });
        });
      }), ot.any && typeof AggregateError < "u" && j(V, "any", function() {
        var n = Be.apply(null, arguments).map(zn);
        return new V(function(a, i) {
          n.length === 0 && i(new AggregateError([]));
          var l = n.length, c = new Array(l);
          n.forEach(function(p, g) {
            return V.resolve(p).then(function(h) {
              return a(h);
            }, function(h) {
              c[g] = h, --l || i(new AggregateError(c));
            });
          });
        });
      }), ot.withResolvers && (V.withResolvers = ot.withResolvers));
      var Ae = { awaits: 0, echoes: 0, id: 0 }, $s = 0, Nn = [], Kn = 0, Fn = 0, As = 0;
      function Mr(n, a, i, l) {
        var c = Z, p = Object.create(c);
        return p.parent = c, p.ref = 0, p.global = !1, p.id = ++As, Lr.env, p.env = To ? { Promise: V, PromiseProp: { value: V, configurable: !0, writable: !0 }, all: V.all, race: V.race, allSettled: V.allSettled, any: V.any, resolve: V.resolve, reject: V.reject } : {}, a && m(p, a), ++c.ref, p.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, l = it(p, n, i, l), p.ref === 0 && p.finalize(), l;
      }
      function kt() {
        return Ae.id || (Ae.id = ++$s), ++Ae.awaits, Ae.echoes += En, Ae.id;
      }
      function Nr() {
        return !!Ae.awaits && (--Ae.awaits == 0 && (Ae.id = 0), Ae.echoes = Ae.awaits * En, !0);
      }
      function zn(n) {
        return Ae.echoes && n && n.constructor === ot ? (kt(), n.then(function(a) {
          return Nr(), a;
        }, function(a) {
          return Nr(), Pe(a);
        })) : n;
      }
      function Rs() {
        var n = Nn[Nn.length - 1];
        Nn.pop(), Kr(n, !1);
      }
      function Kr(n, a) {
        var i, l = Z;
        (a ? !Ae.echoes || Kn++ && n === Z : !Kn || --Kn && n === Z) || queueMicrotask(a ? (function(c) {
          ++Fn, Ae.echoes && --Ae.echoes != 0 || (Ae.echoes = Ae.awaits = Ae.id = 0), Nn.push(Z), Kr(c, !0);
        }).bind(null, n) : Rs), n !== Z && (Z = n, l === Lr && (Lr.env = Ja()), To && (i = Lr.env.Promise, a = n.env, (l.global || n.global) && (Object.defineProperty(s, "Promise", a.PromiseProp), i.all = a.all, i.race = a.race, i.resolve = a.resolve, i.reject = a.reject, a.allSettled && (i.allSettled = a.allSettled), a.any && (i.any = a.any))));
      }
      function Ja() {
        var n = s.Promise;
        return To ? { Promise: n, PromiseProp: Object.getOwnPropertyDescriptor(s, "Promise"), all: n.all, race: n.race, allSettled: n.allSettled, any: n.any, resolve: n.resolve, reject: n.reject } : {};
      }
      function it(n, a, i, l, c) {
        var p = Z;
        try {
          return Kr(n, !0), a(i, l, c);
        } finally {
          Kr(p, !1);
        }
      }
      function eu(n, a, i, l) {
        return typeof n != "function" ? n : function() {
          var c = Z;
          i && kt(), Kr(a, !0);
          try {
            return n.apply(this, arguments);
          } finally {
            Kr(c, !1), l && queueMicrotask(Nr);
          }
        };
      }
      function Ko(n) {
        Promise === ot && Ae.echoes === 0 ? Kn === 0 ? n() : enqueueNativeMicroTask(n) : setTimeout(n, 0);
      }
      ("" + Je).indexOf("[native code]") === -1 && (kt = Nr = ve);
      var Pe = V.reject, st = "￿", Or = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ru = "String expected.", Ct = [], Hn = "__dbnames", Fo = "readonly", zo = "readwrite";
      function lt(n, a) {
        return n ? a ? function() {
          return n.apply(this, arguments) && a.apply(this, arguments);
        } : n : a;
      }
      var tu = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function qn(n) {
        return typeof n != "string" || /\./.test(n) ? function(a) {
          return a;
        } : function(a) {
          return a[n] === void 0 && n in a && delete (a = Ne(a))[n], a;
        };
      }
      function nu() {
        throw Y.Type();
      }
      function le(n, a) {
        try {
          var i = ou(n), l = ou(a);
          if (i !== l) return i === "Array" ? 1 : l === "Array" ? -1 : i === "binary" ? 1 : l === "binary" ? -1 : i === "string" ? 1 : l === "string" ? -1 : i === "Date" ? 1 : l !== "Date" ? NaN : -1;
          switch (i) {
            case "number":
            case "Date":
            case "string":
              return a < n ? 1 : n < a ? -1 : 0;
            case "binary":
              return function(c, p) {
                for (var g = c.length, h = p.length, v = g < h ? g : h, w = 0; w < v; ++w) if (c[w] !== p[w]) return c[w] < p[w] ? -1 : 1;
                return g === h ? 0 : g < h ? -1 : 1;
              }(au(n), au(a));
            case "Array":
              return function(c, p) {
                for (var g = c.length, h = p.length, v = g < h ? g : h, w = 0; w < v; ++w) {
                  var I = le(c[w], p[w]);
                  if (I !== 0) return I;
                }
                return g === h ? 0 : g < h ? -1 : 1;
              }(n, a);
          }
        } catch {
        }
        return NaN;
      }
      function ou(n) {
        var a = typeof n;
        return a != "object" ? a : ArrayBuffer.isView(n) ? "binary" : (n = tr(n), n === "ArrayBuffer" ? "binary" : n);
      }
      function au(n) {
        return n instanceof Uint8Array ? n : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n);
      }
      var uu = (we.prototype._trans = function(n, a, i) {
        var l = this._tx || Z.trans, c = this.name, p = Xe && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(n === "readonly" ? "read" : "write", " ").concat(this.name));
        function g(w, I, b) {
          if (!b.schema[c]) throw new Y.NotFound("Table " + c + " not part of transaction");
          return a(b.idbtrans, b);
        }
        var h = xt();
        try {
          var v = l && l.db._novip === this.db._novip ? l === Z.trans ? l._promise(n, g, i) : Mr(function() {
            return l._promise(n, g, i);
          }, { trans: l, transless: Z.transless || Z }) : function w(I, b, O, x) {
            if (I.idbdb && (I._state.openComplete || Z.letThrough || I._vip)) {
              var C = I._createTransaction(b, O, I._dbSchema);
              try {
                C.create(), I._state.PR1398_maxLoop = 3;
              } catch (P) {
                return P.name === Wt.InvalidState && I.isOpen() && 0 < --I._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), I.close({ disableAutoOpen: !1 }), I.open().then(function() {
                  return w(I, b, O, x);
                })) : Pe(P);
              }
              return C._promise(b, function(P, k) {
                return Mr(function() {
                  return Z.trans = C, x(P, k, C);
                });
              }).then(function(P) {
                if (b === "readwrite") try {
                  C.idbtrans.commit();
                } catch {
                }
                return b === "readonly" ? P : C._completion.then(function() {
                  return P;
                });
              });
            }
            if (I._state.openComplete) return Pe(new Y.DatabaseClosed(I._state.dbOpenError));
            if (!I._state.isBeingOpened) {
              if (!I._state.autoOpen) return Pe(new Y.DatabaseClosed());
              I.open().catch(ve);
            }
            return I._state.dbReadyPromise.then(function() {
              return w(I, b, O, x);
            });
          }(this.db, n, [this.name], g);
          return p && (v._consoleTask = p, v = v.catch(function(w) {
            return console.trace(w), Pe(w);
          })), v;
        } finally {
          h && wt();
        }
      }, we.prototype.get = function(n, a) {
        var i = this;
        return n && n.constructor === Object ? this.where(n).first(a) : n == null ? Pe(new Y.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(l) {
          return i.core.get({ trans: l, key: n }).then(function(c) {
            return i.hook.reading.fire(c);
          });
        }).then(a);
      }, we.prototype.where = function(n) {
        if (typeof n == "string") return new this.db.WhereClause(this, n);
        if (f(n)) return new this.db.WhereClause(this, "[".concat(n.join("+"), "]"));
        var a = d(n);
        if (a.length === 1) return this.where(a[0]).equals(n[a[0]]);
        var i = this.schema.indexes.concat(this.schema.primKey).filter(function(h) {
          if (h.compound && a.every(function(w) {
            return 0 <= h.keyPath.indexOf(w);
          })) {
            for (var v = 0; v < a.length; ++v) if (a.indexOf(h.keyPath[v]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(h, v) {
          return h.keyPath.length - v.keyPath.length;
        })[0];
        if (i && this.db._maxKey !== st) {
          var p = i.keyPath.slice(0, a.length);
          return this.where(p).equals(p.map(function(v) {
            return n[v];
          }));
        }
        !i && Xe && console.warn("The query ".concat(JSON.stringify(n), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(a.join("+"), "]"));
        var l = this.schema.idxByName;
        function c(h, v) {
          return le(h, v) === 0;
        }
        var g = a.reduce(function(b, v) {
          var w = b[0], I = b[1], b = l[v], O = n[v];
          return [w || b, w || !b ? lt(I, b && b.multi ? function(x) {
            return x = de(x, v), f(x) && x.some(function(C) {
              return c(O, C);
            });
          } : function(x) {
            return c(O, de(x, v));
          }) : I];
        }, [null, null]), p = g[0], g = g[1];
        return p ? this.where(p.name).equals(n[p.keyPath]).filter(g) : i ? this.filter(g) : this.where(a).equals("");
      }, we.prototype.filter = function(n) {
        return this.toCollection().and(n);
      }, we.prototype.count = function(n) {
        return this.toCollection().count(n);
      }, we.prototype.offset = function(n) {
        return this.toCollection().offset(n);
      }, we.prototype.limit = function(n) {
        return this.toCollection().limit(n);
      }, we.prototype.each = function(n) {
        return this.toCollection().each(n);
      }, we.prototype.toArray = function(n) {
        return this.toCollection().toArray(n);
      }, we.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, we.prototype.orderBy = function(n) {
        return new this.db.Collection(new this.db.WhereClause(this, f(n) ? "[".concat(n.join("+"), "]") : n));
      }, we.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, we.prototype.mapToClass = function(n) {
        var a, i = this.db, l = this.name;
        function c() {
          return a !== null && a.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = n).prototype instanceof nu && (function(v, w) {
          if (typeof w != "function" && w !== null) throw new TypeError("Class extends value " + String(w) + " is not a constructor or null");
          function I() {
            this.constructor = v;
          }
          t(v, w), v.prototype = w === null ? Object.create(w) : (I.prototype = w.prototype, new I());
        }(c, a = n), Object.defineProperty(c.prototype, "db", { get: function() {
          return i;
        }, enumerable: !1, configurable: !0 }), c.prototype.table = function() {
          return l;
        }, n = c);
        for (var p = /* @__PURE__ */ new Set(), g = n.prototype; g; g = y(g)) Object.getOwnPropertyNames(g).forEach(function(v) {
          return p.add(v);
        });
        function h(v) {
          if (!v) return v;
          var w, I = Object.create(n.prototype);
          for (w in v) if (!p.has(w)) try {
            I[w] = v[w];
          } catch {
          }
          return I;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = h, this.hook("reading", h), n;
      }, we.prototype.defineClass = function() {
        return this.mapToClass(function(n) {
          m(this, n);
        });
      }, we.prototype.add = function(n, a) {
        var i = this, l = this.schema.primKey, c = l.auto, p = l.keyPath, g = n;
        return p && c && (g = qn(p)(n)), this._trans("readwrite", function(h) {
          return i.core.mutate({ trans: h, type: "add", keys: a != null ? [a] : null, values: [g] });
        }).then(function(h) {
          return h.numFailures ? V.reject(h.failures[0]) : h.lastResult;
        }).then(function(h) {
          if (p) try {
            xe(n, p, h);
          } catch {
          }
          return h;
        });
      }, we.prototype.update = function(n, a) {
        return typeof n != "object" || f(n) ? this.where(":id").equals(n).modify(a) : (n = de(n, this.schema.primKey.keyPath), n === void 0 ? Pe(new Y.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(a));
      }, we.prototype.put = function(n, a) {
        var i = this, l = this.schema.primKey, c = l.auto, p = l.keyPath, g = n;
        return p && c && (g = qn(p)(n)), this._trans("readwrite", function(h) {
          return i.core.mutate({ trans: h, type: "put", values: [g], keys: a != null ? [a] : null });
        }).then(function(h) {
          return h.numFailures ? V.reject(h.failures[0]) : h.lastResult;
        }).then(function(h) {
          if (p) try {
            xe(n, p, h);
          } catch {
          }
          return h;
        });
      }, we.prototype.delete = function(n) {
        var a = this;
        return this._trans("readwrite", function(i) {
          return a.core.mutate({ trans: i, type: "delete", keys: [n] });
        }).then(function(i) {
          return i.numFailures ? V.reject(i.failures[0]) : void 0;
        });
      }, we.prototype.clear = function() {
        var n = this;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "deleteRange", range: tu });
        }).then(function(a) {
          return a.numFailures ? V.reject(a.failures[0]) : void 0;
        });
      }, we.prototype.bulkGet = function(n) {
        var a = this;
        return this._trans("readonly", function(i) {
          return a.core.getMany({ keys: n, trans: i }).then(function(l) {
            return l.map(function(c) {
              return a.hook.reading.fire(c);
            });
          });
        });
      }, we.prototype.bulkAdd = function(n, a, i) {
        var l = this, c = Array.isArray(a) ? a : void 0, p = (i = i || (c ? void 0 : a)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(g) {
          var w = l.schema.primKey, h = w.auto, w = w.keyPath;
          if (w && c) throw new Y.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== n.length) throw new Y.InvalidArgument("Arguments objects and keys must have the same length");
          var v = n.length, w = w && h ? n.map(qn(w)) : n;
          return l.core.mutate({ trans: g, type: "add", keys: c, values: w, wantResults: p }).then(function(C) {
            var b = C.numFailures, O = C.results, x = C.lastResult, C = C.failures;
            if (b === 0) return p ? O : x;
            throw new Ir("".concat(l.name, ".bulkAdd(): ").concat(b, " of ").concat(v, " operations failed"), C);
          });
        });
      }, we.prototype.bulkPut = function(n, a, i) {
        var l = this, c = Array.isArray(a) ? a : void 0, p = (i = i || (c ? void 0 : a)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(g) {
          var w = l.schema.primKey, h = w.auto, w = w.keyPath;
          if (w && c) throw new Y.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== n.length) throw new Y.InvalidArgument("Arguments objects and keys must have the same length");
          var v = n.length, w = w && h ? n.map(qn(w)) : n;
          return l.core.mutate({ trans: g, type: "put", keys: c, values: w, wantResults: p }).then(function(C) {
            var b = C.numFailures, O = C.results, x = C.lastResult, C = C.failures;
            if (b === 0) return p ? O : x;
            throw new Ir("".concat(l.name, ".bulkPut(): ").concat(b, " of ").concat(v, " operations failed"), C);
          });
        });
      }, we.prototype.bulkUpdate = function(n) {
        var a = this, i = this.core, l = n.map(function(g) {
          return g.key;
        }), c = n.map(function(g) {
          return g.changes;
        }), p = [];
        return this._trans("readwrite", function(g) {
          return i.getMany({ trans: g, keys: l, cache: "clone" }).then(function(h) {
            var v = [], w = [];
            n.forEach(function(b, O) {
              var x = b.key, C = b.changes, P = h[O];
              if (P) {
                for (var k = 0, B = Object.keys(C); k < B.length; k++) {
                  var A = B[k], R = C[A];
                  if (A === a.schema.primKey.keyPath) {
                    if (le(R, x) !== 0) throw new Y.Constraint("Cannot update primary key in bulkUpdate()");
                  } else xe(P, A, R);
                }
                p.push(O), v.push(x), w.push(P);
              }
            });
            var I = v.length;
            return i.mutate({ trans: g, type: "put", keys: v, values: w, updates: { keys: l, changeSpecs: c } }).then(function(b) {
              var O = b.numFailures, x = b.failures;
              if (O === 0) return I;
              for (var C = 0, P = Object.keys(x); C < P.length; C++) {
                var k, B = P[C], A = p[Number(B)];
                A != null && (k = x[B], delete x[B], x[A] = k);
              }
              throw new Ir("".concat(a.name, ".bulkUpdate(): ").concat(O, " of ").concat(I, " operations failed"), x);
            });
          });
        });
      }, we.prototype.bulkDelete = function(n) {
        var a = this, i = n.length;
        return this._trans("readwrite", function(l) {
          return a.core.mutate({ trans: l, type: "delete", keys: n });
        }).then(function(g) {
          var c = g.numFailures, p = g.lastResult, g = g.failures;
          if (c === 0) return p;
          throw new Ir("".concat(a.name, ".bulkDelete(): ").concat(c, " of ").concat(i, " operations failed"), g);
        });
      }, we);
      function we() {
      }
      function Xt(n) {
        function a(g, h) {
          if (h) {
            for (var v = arguments.length, w = new Array(v - 1); --v; ) w[v - 1] = arguments[v];
            return i[g].subscribe.apply(null, w), n;
          }
          if (typeof g == "string") return i[g];
        }
        var i = {};
        a.addEventType = p;
        for (var l = 1, c = arguments.length; l < c; ++l) p(arguments[l]);
        return a;
        function p(g, h, v) {
          if (typeof g != "object") {
            var w;
            h = h || Ro;
            var I = { subscribers: [], fire: v = v || ve, subscribe: function(b) {
              I.subscribers.indexOf(b) === -1 && (I.subscribers.push(b), I.fire = h(I.fire, b));
            }, unsubscribe: function(b) {
              I.subscribers = I.subscribers.filter(function(O) {
                return O !== b;
              }), I.fire = I.subscribers.reduce(h, v);
            } };
            return i[g] = a[g] = I;
          }
          d(w = g).forEach(function(b) {
            var O = w[b];
            if (f(O)) p(b, w[b][0], w[b][1]);
            else {
              if (O !== "asap") throw new Y.InvalidArgument("Invalid event config");
              var x = p(b, tt, function() {
                for (var C = arguments.length, P = new Array(C); C--; ) P[C] = arguments[C];
                x.subscribers.forEach(function(k) {
                  ge(function() {
                    k.apply(null, P);
                  });
                });
              });
            }
          });
        }
      }
      function Jt(n, a) {
        return L(a).from({ prototype: n }), a;
      }
      function St(n, a) {
        return !(n.filter || n.algorithm || n.or) && (a ? n.justLimit : !n.replayFilter);
      }
      function Ho(n, a) {
        n.filter = lt(n.filter, a);
      }
      function qo(n, a, i) {
        var l = n.replayFilter;
        n.replayFilter = l ? function() {
          return lt(l(), a());
        } : a, n.justLimit = i && !l;
      }
      function Vn(n, a) {
        if (n.isPrimKey) return a.primaryKey;
        var i = a.getIndexByKeyPath(n.index);
        if (!i) throw new Y.Schema("KeyPath " + n.index + " on object store " + a.name + " is not indexed");
        return i;
      }
      function iu(n, a, i) {
        var l = Vn(n, a.schema);
        return a.openCursor({ trans: i, values: !n.keysOnly, reverse: n.dir === "prev", unique: !!n.unique, query: { index: l, range: n.range } });
      }
      function Un(n, a, i, l) {
        var c = n.replayFilter ? lt(n.filter, n.replayFilter()) : n.filter;
        if (n.or) {
          var p = {}, g = function(h, v, w) {
            var I, b;
            c && !c(v, w, function(O) {
              return v.stop(O);
            }, function(O) {
              return v.fail(O);
            }) || ((b = "" + (I = v.primaryKey)) == "[object ArrayBuffer]" && (b = "" + new Uint8Array(I)), S(p, b) || (p[b] = !0, a(h, v, w)));
          };
          return Promise.all([n.or._iterate(g, i), su(iu(n, l, i), n.algorithm, g, !n.keysOnly && n.valueMapper)]);
        }
        return su(iu(n, l, i), lt(n.algorithm, c), a, !n.keysOnly && n.valueMapper);
      }
      function su(n, a, i, l) {
        var c = ke(l ? function(p, g, h) {
          return i(l(p), g, h);
        } : i);
        return n.then(function(p) {
          if (p) return p.start(function() {
            var g = function() {
              return p.continue();
            };
            a && !a(p, function(h) {
              return g = h;
            }, function(h) {
              p.stop(h), g = ve;
            }, function(h) {
              p.fail(h), g = ve;
            }) || c(p.value, p, function(h) {
              return g = h;
            }), g();
          });
        });
      }
      var Br = Symbol(), en = (lu.prototype.execute = function(n) {
        if (this.add !== void 0) {
          var a = this.add;
          if (f(a)) return u(u([], f(n) ? n : [], !0), a).sort();
          if (typeof a == "number") return (Number(n) || 0) + a;
          if (typeof a == "bigint") try {
            return BigInt(n) + a;
          } catch {
            return BigInt(0) + a;
          }
          throw new TypeError("Invalid term ".concat(a));
        }
        if (this.remove !== void 0) {
          var i = this.remove;
          if (f(i)) return f(n) ? n.filter(function(l) {
            return !i.includes(l);
          }).sort() : [];
          if (typeof i == "number") return Number(n) - i;
          if (typeof i == "bigint") try {
            return BigInt(n) - i;
          } catch {
            return BigInt(0) - i;
          }
          throw new TypeError("Invalid subtrahend ".concat(i));
        }
        return a = (a = this.replacePrefix) === null || a === void 0 ? void 0 : a[0], a && typeof n == "string" && n.startsWith(a) ? this.replacePrefix[1] + n.substring(a.length) : n;
      }, lu);
      function lu(n) {
        Object.assign(this, n);
      }
      var Ts = (he.prototype._read = function(n, a) {
        var i = this._ctx;
        return i.error ? i.table._trans(null, Pe.bind(null, i.error)) : i.table._trans("readonly", n).then(a);
      }, he.prototype._write = function(n) {
        var a = this._ctx;
        return a.error ? a.table._trans(null, Pe.bind(null, a.error)) : a.table._trans("readwrite", n, "locked");
      }, he.prototype._addAlgorithm = function(n) {
        var a = this._ctx;
        a.algorithm = lt(a.algorithm, n);
      }, he.prototype._iterate = function(n, a) {
        return Un(this._ctx, n, a, this._ctx.table.core);
      }, he.prototype.clone = function(n) {
        var a = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
        return n && m(i, n), a._ctx = i, a;
      }, he.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, he.prototype.each = function(n) {
        var a = this._ctx;
        return this._read(function(i) {
          return Un(a, n, i, a.table.core);
        });
      }, he.prototype.count = function(n) {
        var a = this;
        return this._read(function(i) {
          var l = a._ctx, c = l.table.core;
          if (St(l, !0)) return c.count({ trans: i, query: { index: Vn(l, c.schema), range: l.range } }).then(function(g) {
            return Math.min(g, l.limit);
          });
          var p = 0;
          return Un(l, function() {
            return ++p, !1;
          }, i, c).then(function() {
            return p;
          });
        }).then(n);
      }, he.prototype.sortBy = function(n, a) {
        var i = n.split(".").reverse(), l = i[0], c = i.length - 1;
        function p(v, w) {
          return w ? p(v[i[w]], w - 1) : v[l];
        }
        var g = this._ctx.dir === "next" ? 1 : -1;
        function h(v, w) {
          return le(p(v, c), p(w, c)) * g;
        }
        return this.toArray(function(v) {
          return v.sort(h);
        }).then(a);
      }, he.prototype.toArray = function(n) {
        var a = this;
        return this._read(function(i) {
          var l = a._ctx;
          if (l.dir === "next" && St(l, !0) && 0 < l.limit) {
            var c = l.valueMapper, p = Vn(l, l.table.core.schema);
            return l.table.core.query({ trans: i, limit: l.limit, values: !0, query: { index: p, range: l.range } }).then(function(h) {
              return h = h.result, c ? h.map(c) : h;
            });
          }
          var g = [];
          return Un(l, function(h) {
            return g.push(h);
          }, i, l.table.core).then(function() {
            return g;
          });
        }, n);
      }, he.prototype.offset = function(n) {
        var a = this._ctx;
        return n <= 0 || (a.offset += n, St(a) ? qo(a, function() {
          var i = n;
          return function(l, c) {
            return i === 0 || (i === 1 ? --i : c(function() {
              l.advance(i), i = 0;
            }), !1);
          };
        }) : qo(a, function() {
          var i = n;
          return function() {
            return --i < 0;
          };
        })), this;
      }, he.prototype.limit = function(n) {
        return this._ctx.limit = Math.min(this._ctx.limit, n), qo(this._ctx, function() {
          var a = n;
          return function(i, l, c) {
            return --a <= 0 && l(c), 0 <= a;
          };
        }, !0), this;
      }, he.prototype.until = function(n, a) {
        return Ho(this._ctx, function(i, l, c) {
          return !n(i.value) || (l(c), a);
        }), this;
      }, he.prototype.first = function(n) {
        return this.limit(1).toArray(function(a) {
          return a[0];
        }).then(n);
      }, he.prototype.last = function(n) {
        return this.reverse().first(n);
      }, he.prototype.filter = function(n) {
        var a;
        return Ho(this._ctx, function(i) {
          return n(i.value);
        }), (a = this._ctx).isMatch = lt(a.isMatch, n), this;
      }, he.prototype.and = function(n) {
        return this.filter(n);
      }, he.prototype.or = function(n) {
        return new this.db.WhereClause(this._ctx.table, n, this);
      }, he.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, he.prototype.desc = function() {
        return this.reverse();
      }, he.prototype.eachKey = function(n) {
        var a = this._ctx;
        return a.keysOnly = !a.isMatch, this.each(function(i, l) {
          n(l.key, l);
        });
      }, he.prototype.eachUniqueKey = function(n) {
        return this._ctx.unique = "unique", this.eachKey(n);
      }, he.prototype.eachPrimaryKey = function(n) {
        var a = this._ctx;
        return a.keysOnly = !a.isMatch, this.each(function(i, l) {
          n(l.primaryKey, l);
        });
      }, he.prototype.keys = function(n) {
        var a = this._ctx;
        a.keysOnly = !a.isMatch;
        var i = [];
        return this.each(function(l, c) {
          i.push(c.key);
        }).then(function() {
          return i;
        }).then(n);
      }, he.prototype.primaryKeys = function(n) {
        var a = this._ctx;
        if (a.dir === "next" && St(a, !0) && 0 < a.limit) return this._read(function(l) {
          var c = Vn(a, a.table.core.schema);
          return a.table.core.query({ trans: l, values: !1, limit: a.limit, query: { index: c, range: a.range } });
        }).then(function(l) {
          return l.result;
        }).then(n);
        a.keysOnly = !a.isMatch;
        var i = [];
        return this.each(function(l, c) {
          i.push(c.primaryKey);
        }).then(function() {
          return i;
        }).then(n);
      }, he.prototype.uniqueKeys = function(n) {
        return this._ctx.unique = "unique", this.keys(n);
      }, he.prototype.firstKey = function(n) {
        return this.limit(1).keys(function(a) {
          return a[0];
        }).then(n);
      }, he.prototype.lastKey = function(n) {
        return this.reverse().firstKey(n);
      }, he.prototype.distinct = function() {
        var n = this._ctx, n = n.index && n.table.schema.idxByName[n.index];
        if (!n || !n.multi) return this;
        var a = {};
        return Ho(this._ctx, function(c) {
          var l = c.primaryKey.toString(), c = S(a, l);
          return a[l] = !0, !c;
        }), this;
      }, he.prototype.modify = function(n) {
        var a = this, i = this._ctx;
        return this._write(function(l) {
          var c, p, g;
          g = typeof n == "function" ? n : (c = d(n), p = c.length, function(k) {
            for (var B = !1, A = 0; A < p; ++A) {
              var R = c[A], T = n[R], N = de(k, R);
              T instanceof en ? (xe(k, R, T.execute(N)), B = !0) : N !== T && (xe(k, R, T), B = !0);
            }
            return B;
          });
          var h = i.table.core, b = h.schema.primaryKey, v = b.outbound, w = b.extractKey, I = 200, b = a.db._options.modifyChunkSize;
          b && (I = typeof b == "object" ? b[h.name] || b["*"] || 200 : b);
          function O(k, R) {
            var A = R.failures, R = R.numFailures;
            C += k - R;
            for (var T = 0, N = d(A); T < N.length; T++) {
              var H = N[T];
              x.push(A[H]);
            }
          }
          var x = [], C = 0, P = [];
          return a.clone().primaryKeys().then(function(k) {
            function B(R) {
              var T = Math.min(I, k.length - R);
              return h.getMany({ trans: l, keys: k.slice(R, R + T), cache: "immutable" }).then(function(N) {
                for (var H = [], K = [], F = v ? [] : null, q = [], z = 0; z < T; ++z) {
                  var Q = N[z], re = { value: Ne(Q), primKey: k[R + z] };
                  g.call(re, re.value, re) !== !1 && (re.value == null ? q.push(k[R + z]) : v || le(w(Q), w(re.value)) === 0 ? (K.push(re.value), v && F.push(k[R + z])) : (q.push(k[R + z]), H.push(re.value)));
                }
                return Promise.resolve(0 < H.length && h.mutate({ trans: l, type: "add", values: H }).then(function(oe) {
                  for (var ae in oe.failures) q.splice(parseInt(ae), 1);
                  O(H.length, oe);
                })).then(function() {
                  return (0 < K.length || A && typeof n == "object") && h.mutate({ trans: l, type: "put", keys: F, values: K, criteria: A, changeSpec: typeof n != "function" && n, isAdditionalChunk: 0 < R }).then(function(oe) {
                    return O(K.length, oe);
                  });
                }).then(function() {
                  return (0 < q.length || A && n === Vo) && h.mutate({ trans: l, type: "delete", keys: q, criteria: A, isAdditionalChunk: 0 < R }).then(function(oe) {
                    return O(q.length, oe);
                  });
                }).then(function() {
                  return k.length > R + T && B(R + I);
                });
              });
            }
            var A = St(i) && i.limit === 1 / 0 && (typeof n != "function" || n === Vo) && { index: i.index, range: i.range };
            return B(0).then(function() {
              if (0 < x.length) throw new rt("Error modifying one or more objects", x, C, P);
              return k.length;
            });
          });
        });
      }, he.prototype.delete = function() {
        var n = this._ctx, a = n.range;
        return St(n) && (n.isPrimKey || a.type === 3) ? this._write(function(i) {
          var l = n.table.core.schema.primaryKey, c = a;
          return n.table.core.count({ trans: i, query: { index: l, range: c } }).then(function(p) {
            return n.table.core.mutate({ trans: i, type: "deleteRange", range: c }).then(function(g) {
              var h = g.failures;
              if (g.lastResult, g.results, g = g.numFailures, g) throw new rt("Could not delete some values", Object.keys(h).map(function(v) {
                return h[v];
              }), p - g);
              return p - g;
            });
          });
        }) : this.modify(Vo);
      }, he);
      function he() {
      }
      var Vo = function(n, a) {
        return a.value = null;
      };
      function Es(n, a) {
        return n < a ? -1 : n === a ? 0 : 1;
      }
      function Ds(n, a) {
        return a < n ? -1 : n === a ? 0 : 1;
      }
      function Ze(n, a, i) {
        return n = n instanceof du ? new n.Collection(n) : n, n._ctx.error = new (i || TypeError)(a), n;
      }
      function It(n) {
        return new n.Collection(n, function() {
          return cu("");
        }).limit(0);
      }
      function Wn(n, a, i, l) {
        var c, p, g, h, v, w, I, b = i.length;
        if (!i.every(function(C) {
          return typeof C == "string";
        })) return Ze(n, ru);
        function O(C) {
          c = C === "next" ? function(k) {
            return k.toUpperCase();
          } : function(k) {
            return k.toLowerCase();
          }, p = C === "next" ? function(k) {
            return k.toLowerCase();
          } : function(k) {
            return k.toUpperCase();
          }, g = C === "next" ? Es : Ds;
          var P = i.map(function(k) {
            return { lower: p(k), upper: c(k) };
          }).sort(function(k, B) {
            return g(k.lower, B.lower);
          });
          h = P.map(function(k) {
            return k.upper;
          }), v = P.map(function(k) {
            return k.lower;
          }), I = (w = C) === "next" ? "" : l;
        }
        O("next"), n = new n.Collection(n, function() {
          return Fr(h[0], v[b - 1] + l);
        }), n._ondirectionchange = function(C) {
          O(C);
        };
        var x = 0;
        return n._addAlgorithm(function(C, P, k) {
          var B = C.key;
          if (typeof B != "string") return !1;
          var A = p(B);
          if (a(A, v, x)) return !0;
          for (var R = null, T = x; T < b; ++T) {
            var N = function(H, K, F, q, z, Q) {
              for (var re = Math.min(H.length, q.length), oe = -1, ae = 0; ae < re; ++ae) {
                var Ye = K[ae];
                if (Ye !== q[ae]) return z(H[ae], F[ae]) < 0 ? H.substr(0, ae) + F[ae] + F.substr(ae + 1) : z(H[ae], q[ae]) < 0 ? H.substr(0, ae) + q[ae] + F.substr(ae + 1) : 0 <= oe ? H.substr(0, oe) + K[oe] + F.substr(oe + 1) : null;
                z(H[ae], Ye) < 0 && (oe = ae);
              }
              return re < q.length && Q === "next" ? H + F.substr(H.length) : re < H.length && Q === "prev" ? H.substr(0, F.length) : oe < 0 ? null : H.substr(0, oe) + q[oe] + F.substr(oe + 1);
            }(B, A, h[T], v[T], g, w);
            N === null && R === null ? x = T + 1 : (R === null || 0 < g(R, N)) && (R = N);
          }
          return P(R !== null ? function() {
            C.continue(R + I);
          } : k), !1;
        }), n;
      }
      function Fr(n, a, i, l) {
        return { type: 2, lower: n, upper: a, lowerOpen: i, upperOpen: l };
      }
      function cu(n) {
        return { type: 1, lower: n, upper: n };
      }
      var du = (Object.defineProperty(Re.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Re.prototype.between = function(n, a, i, l) {
        i = i !== !1, l = l === !0;
        try {
          return 0 < this._cmp(n, a) || this._cmp(n, a) === 0 && (i || l) && (!i || !l) ? It(this) : new this.Collection(this, function() {
            return Fr(n, a, !i, !l);
          });
        } catch {
          return Ze(this, Or);
        }
      }, Re.prototype.equals = function(n) {
        return n == null ? Ze(this, Or) : new this.Collection(this, function() {
          return cu(n);
        });
      }, Re.prototype.above = function(n) {
        return n == null ? Ze(this, Or) : new this.Collection(this, function() {
          return Fr(n, void 0, !0);
        });
      }, Re.prototype.aboveOrEqual = function(n) {
        return n == null ? Ze(this, Or) : new this.Collection(this, function() {
          return Fr(n, void 0, !1);
        });
      }, Re.prototype.below = function(n) {
        return n == null ? Ze(this, Or) : new this.Collection(this, function() {
          return Fr(void 0, n, !1, !0);
        });
      }, Re.prototype.belowOrEqual = function(n) {
        return n == null ? Ze(this, Or) : new this.Collection(this, function() {
          return Fr(void 0, n);
        });
      }, Re.prototype.startsWith = function(n) {
        return typeof n != "string" ? Ze(this, ru) : this.between(n, n + st, !0, !0);
      }, Re.prototype.startsWithIgnoreCase = function(n) {
        return n === "" ? this.startsWith(n) : Wn(this, function(a, i) {
          return a.indexOf(i[0]) === 0;
        }, [n], st);
      }, Re.prototype.equalsIgnoreCase = function(n) {
        return Wn(this, function(a, i) {
          return a === i[0];
        }, [n], "");
      }, Re.prototype.anyOfIgnoreCase = function() {
        var n = Be.apply(Ge, arguments);
        return n.length === 0 ? It(this) : Wn(this, function(a, i) {
          return i.indexOf(a) !== -1;
        }, n, "");
      }, Re.prototype.startsWithAnyOfIgnoreCase = function() {
        var n = Be.apply(Ge, arguments);
        return n.length === 0 ? It(this) : Wn(this, function(a, i) {
          return i.some(function(l) {
            return a.indexOf(l) === 0;
          });
        }, n, st);
      }, Re.prototype.anyOf = function() {
        var n = this, a = Be.apply(Ge, arguments), i = this._cmp;
        try {
          a.sort(i);
        } catch {
          return Ze(this, Or);
        }
        if (a.length === 0) return It(this);
        var l = new this.Collection(this, function() {
          return Fr(a[0], a[a.length - 1]);
        });
        l._ondirectionchange = function(p) {
          i = p === "next" ? n._ascending : n._descending, a.sort(i);
        };
        var c = 0;
        return l._addAlgorithm(function(p, g, h) {
          for (var v = p.key; 0 < i(v, a[c]); ) if (++c === a.length) return g(h), !1;
          return i(v, a[c]) === 0 || (g(function() {
            p.continue(a[c]);
          }), !1);
        }), l;
      }, Re.prototype.notEqual = function(n) {
        return this.inAnyRange([[-1 / 0, n], [n, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Re.prototype.noneOf = function() {
        var n = Be.apply(Ge, arguments);
        if (n.length === 0) return new this.Collection(this);
        try {
          n.sort(this._ascending);
        } catch {
          return Ze(this, Or);
        }
        var a = n.reduce(function(i, l) {
          return i ? i.concat([[i[i.length - 1][1], l]]) : [[-1 / 0, l]];
        }, null);
        return a.push([n[n.length - 1], this.db._maxKey]), this.inAnyRange(a, { includeLowers: !1, includeUppers: !1 });
      }, Re.prototype.inAnyRange = function(B, a) {
        var i = this, l = this._cmp, c = this._ascending, p = this._descending, g = this._min, h = this._max;
        if (B.length === 0) return It(this);
        if (!B.every(function(A) {
          return A[0] !== void 0 && A[1] !== void 0 && c(A[0], A[1]) <= 0;
        })) return Ze(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", Y.InvalidArgument);
        var v = !a || a.includeLowers !== !1, w = a && a.includeUppers === !0, I, b = c;
        function O(A, R) {
          return b(A[0], R[0]);
        }
        try {
          (I = B.reduce(function(A, R) {
            for (var T = 0, N = A.length; T < N; ++T) {
              var H = A[T];
              if (l(R[0], H[1]) < 0 && 0 < l(R[1], H[0])) {
                H[0] = g(H[0], R[0]), H[1] = h(H[1], R[1]);
                break;
              }
            }
            return T === N && A.push(R), A;
          }, [])).sort(O);
        } catch {
          return Ze(this, Or);
        }
        var x = 0, C = w ? function(A) {
          return 0 < c(A, I[x][1]);
        } : function(A) {
          return 0 <= c(A, I[x][1]);
        }, P = v ? function(A) {
          return 0 < p(A, I[x][0]);
        } : function(A) {
          return 0 <= p(A, I[x][0]);
        }, k = C, B = new this.Collection(this, function() {
          return Fr(I[0][0], I[I.length - 1][1], !v, !w);
        });
        return B._ondirectionchange = function(A) {
          b = A === "next" ? (k = C, c) : (k = P, p), I.sort(O);
        }, B._addAlgorithm(function(A, R, T) {
          for (var N, H = A.key; k(H); ) if (++x === I.length) return R(T), !1;
          return !C(N = H) && !P(N) || (i._cmp(H, I[x][1]) === 0 || i._cmp(H, I[x][0]) === 0 || R(function() {
            b === c ? A.continue(I[x][0]) : A.continue(I[x][1]);
          }), !1);
        }), B;
      }, Re.prototype.startsWithAnyOf = function() {
        var n = Be.apply(Ge, arguments);
        return n.every(function(a) {
          return typeof a == "string";
        }) ? n.length === 0 ? It(this) : this.inAnyRange(n.map(function(a) {
          return [a, a + st];
        })) : Ze(this, "startsWithAnyOf() only works with strings");
      }, Re);
      function Re() {
      }
      function hr(n) {
        return ke(function(a) {
          return rn(a), n(a.target.error), !1;
        });
      }
      function rn(n) {
        n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault();
      }
      var tn = "storagemutated", Uo = "x-storagemutated-1", zr = Xt(null, tn), js = (br.prototype._lock = function() {
        return W(!Z.global), ++this._reculock, this._reculock !== 1 || Z.global || (Z.lockOwnerFor = this), this;
      }, br.prototype._unlock = function() {
        if (W(!Z.global), --this._reculock == 0) for (Z.global || (Z.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var n = this._blockedFuncs.shift();
          try {
            it(n[1], n[0]);
          } catch {
          }
        }
        return this;
      }, br.prototype._locked = function() {
        return this._reculock && Z.lockOwnerFor !== this;
      }, br.prototype.create = function(n) {
        var a = this;
        if (!this.mode) return this;
        var i = this.db.idbdb, l = this.db._state.dbOpenError;
        if (W(!this.idbtrans), !n && !i) switch (l && l.name) {
          case "DatabaseClosedError":
            throw new Y.DatabaseClosed(l);
          case "MissingAPIError":
            throw new Y.MissingAPI(l.message, l);
          default:
            throw new Y.OpenFailed(l);
        }
        if (!this.active) throw new Y.TransactionInactive();
        return W(this._completion._state === null), (n = this.idbtrans = n || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = ke(function(c) {
          rn(c), a._reject(n.error);
        }), n.onabort = ke(function(c) {
          rn(c), a.active && a._reject(new Y.Abort(n.error)), a.active = !1, a.on("abort").fire(c);
        }), n.oncomplete = ke(function() {
          a.active = !1, a._resolve(), "mutatedParts" in n && zr.storagemutated.fire(n.mutatedParts);
        }), this;
      }, br.prototype._promise = function(n, a, i) {
        var l = this;
        if (n === "readwrite" && this.mode !== "readwrite") return Pe(new Y.ReadOnly("Transaction is readonly"));
        if (!this.active) return Pe(new Y.TransactionInactive());
        if (this._locked()) return new V(function(p, g) {
          l._blockedFuncs.push([function() {
            l._promise(n, a, i).then(p, g);
          }, Z]);
        });
        if (i) return Mr(function() {
          var p = new V(function(g, h) {
            l._lock();
            var v = a(g, h, l);
            v && v.then && v.then(g, h);
          });
          return p.finally(function() {
            return l._unlock();
          }), p._lib = !0, p;
        });
        var c = new V(function(p, g) {
          var h = a(p, g, l);
          h && h.then && h.then(p, g);
        });
        return c._lib = !0, c;
      }, br.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, br.prototype.waitFor = function(n) {
        var a, i = this._root(), l = V.resolve(n);
        i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
          return l;
        }) : (i._waitingFor = l, i._waitingQueue = [], a = i.idbtrans.objectStore(i.storeNames[0]), function p() {
          for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
          i._waitingFor && (a.get(-1 / 0).onsuccess = p);
        }());
        var c = i._waitingFor;
        return new V(function(p, g) {
          l.then(function(h) {
            return i._waitingQueue.push(ke(p.bind(null, h)));
          }, function(h) {
            return i._waitingQueue.push(ke(g.bind(null, h)));
          }).finally(function() {
            i._waitingFor === c && (i._waitingFor = null);
          });
        });
      }, br.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new Y.Abort()));
      }, br.prototype.table = function(n) {
        var a = this._memoizedTables || (this._memoizedTables = {});
        if (S(a, n)) return a[n];
        var i = this.schema[n];
        if (!i) throw new Y.NotFound("Table " + n + " not part of transaction");
        return i = new this.db.Table(n, i, this), i.core = this.db.core.table(n), a[n] = i;
      }, br);
      function br() {
      }
      function Wo(n, a, i, l, c, p, g) {
        return { name: n, keyPath: a, unique: i, multi: l, auto: c, compound: p, src: (i && !g ? "&" : "") + (l ? "*" : "") + (c ? "++" : "") + fu(a) };
      }
      function fu(n) {
        return typeof n == "string" ? n : n ? "[" + [].join.call(n, "+") + "]" : "";
      }
      function Qo(n, a, i) {
        return { name: n, primKey: a, indexes: i, mappedClass: null, idxByName: (l = function(c) {
          return [c.name, c];
        }, i.reduce(function(c, p, g) {
          return g = l(p, g), g && (c[g[0]] = g[1]), c;
        }, {})) };
        var l;
      }
      var nn = function(n) {
        try {
          return n.only([[]]), nn = function() {
            return [[]];
          }, [[]];
        } catch {
          return nn = function() {
            return st;
          }, st;
        }
      };
      function Go(n) {
        return n == null ? function() {
        } : typeof n == "string" ? (a = n).split(".").length === 1 ? function(i) {
          return i[a];
        } : function(i) {
          return de(i, a);
        } : function(i) {
          return de(i, n);
        };
        var a;
      }
      function pu(n) {
        return [].slice.call(n);
      }
      var Ls = 0;
      function on(n) {
        return n == null ? ":id" : typeof n == "string" ? n : "[".concat(n.join("+"), "]");
      }
      function Ms(n, a, v) {
        function l(k) {
          if (k.type === 3) return null;
          if (k.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var x = k.lower, C = k.upper, P = k.lowerOpen, k = k.upperOpen;
          return x === void 0 ? C === void 0 ? null : a.upperBound(C, !!k) : C === void 0 ? a.lowerBound(x, !!P) : a.bound(x, C, !!P, !!k);
        }
        function c(O) {
          var x, C = O.name;
          return { name: C, schema: O, mutate: function(P) {
            var k = P.trans, B = P.type, A = P.keys, R = P.values, T = P.range;
            return new Promise(function(N, H) {
              N = ke(N);
              var K = k.objectStore(C), F = K.keyPath == null, q = B === "put" || B === "add";
              if (!q && B !== "delete" && B !== "deleteRange") throw new Error("Invalid operation type: " + B);
              var z, Q = (A || R || { length: 1 }).length;
              if (A && R && A.length !== R.length) throw new Error("Given keys array must have same length as given values array.");
              if (Q === 0) return N({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function re(Ke) {
                ++Ye, rn(Ke);
              }
              var oe = [], ae = [], Ye = 0;
              if (B === "deleteRange") {
                if (T.type === 4) return N({ numFailures: Ye, failures: ae, results: [], lastResult: void 0 });
                T.type === 3 ? oe.push(z = K.clear()) : oe.push(z = K.delete(l(T)));
              } else {
                var F = q ? F ? [R, A] : [R, null] : [A, null], ee = F[0], Ee = F[1];
                if (q) for (var De = 0; De < Q; ++De) oe.push(z = Ee && Ee[De] !== void 0 ? K[B](ee[De], Ee[De]) : K[B](ee[De])), z.onerror = re;
                else for (De = 0; De < Q; ++De) oe.push(z = K[B](ee[De])), z.onerror = re;
              }
              function uo(Ke) {
                Ke = Ke.target.result, oe.forEach(function(ft, pa) {
                  return ft.error != null && (ae[pa] = ft.error);
                }), N({ numFailures: Ye, failures: ae, results: B === "delete" ? A : oe.map(function(ft) {
                  return ft.result;
                }), lastResult: Ke });
              }
              z.onerror = function(Ke) {
                re(Ke), uo(Ke);
              }, z.onsuccess = uo;
            });
          }, getMany: function(P) {
            var k = P.trans, B = P.keys;
            return new Promise(function(A, R) {
              A = ke(A);
              for (var T, N = k.objectStore(C), H = B.length, K = new Array(H), F = 0, q = 0, z = function(oe) {
                oe = oe.target, K[oe._pos] = oe.result, ++q === F && A(K);
              }, Q = hr(R), re = 0; re < H; ++re) B[re] != null && ((T = N.get(B[re]))._pos = re, T.onsuccess = z, T.onerror = Q, ++F);
              F === 0 && A(K);
            });
          }, get: function(P) {
            var k = P.trans, B = P.key;
            return new Promise(function(A, R) {
              A = ke(A);
              var T = k.objectStore(C).get(B);
              T.onsuccess = function(N) {
                return A(N.target.result);
              }, T.onerror = hr(R);
            });
          }, query: (x = w, function(P) {
            return new Promise(function(k, B) {
              k = ke(k);
              var A, R, T, F = P.trans, N = P.values, H = P.limit, z = P.query, K = H === 1 / 0 ? void 0 : H, q = z.index, z = z.range, F = F.objectStore(C), q = q.isPrimaryKey ? F : F.index(q.name), z = l(z);
              if (H === 0) return k({ result: [] });
              x ? ((K = N ? q.getAll(z, K) : q.getAllKeys(z, K)).onsuccess = function(Q) {
                return k({ result: Q.target.result });
              }, K.onerror = hr(B)) : (A = 0, R = !N && "openKeyCursor" in q ? q.openKeyCursor(z) : q.openCursor(z), T = [], R.onsuccess = function(Q) {
                var re = R.result;
                return re ? (T.push(N ? re.value : re.primaryKey), ++A === H ? k({ result: T }) : void re.continue()) : k({ result: T });
              }, R.onerror = hr(B));
            });
          }), openCursor: function(P) {
            var k = P.trans, B = P.values, A = P.query, R = P.reverse, T = P.unique;
            return new Promise(function(N, H) {
              N = ke(N);
              var q = A.index, K = A.range, F = k.objectStore(C), F = q.isPrimaryKey ? F : F.index(q.name), q = R ? T ? "prevunique" : "prev" : T ? "nextunique" : "next", z = !B && "openKeyCursor" in F ? F.openKeyCursor(l(K), q) : F.openCursor(l(K), q);
              z.onerror = hr(H), z.onsuccess = ke(function(Q) {
                var re, oe, ae, Ye, ee = z.result;
                ee ? (ee.___id = ++Ls, ee.done = !1, re = ee.continue.bind(ee), oe = (oe = ee.continuePrimaryKey) && oe.bind(ee), ae = ee.advance.bind(ee), Ye = function() {
                  throw new Error("Cursor not stopped");
                }, ee.trans = k, ee.stop = ee.continue = ee.continuePrimaryKey = ee.advance = function() {
                  throw new Error("Cursor not started");
                }, ee.fail = ke(H), ee.next = function() {
                  var Ee = this, De = 1;
                  return this.start(function() {
                    return De-- ? Ee.continue() : Ee.stop();
                  }).then(function() {
                    return Ee;
                  });
                }, ee.start = function(Ee) {
                  function De() {
                    if (z.result) try {
                      Ee();
                    } catch (Ke) {
                      ee.fail(Ke);
                    }
                    else ee.done = !0, ee.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ee.stop();
                  }
                  var uo = new Promise(function(Ke, ft) {
                    Ke = ke(Ke), z.onerror = hr(ft), ee.fail = ft, ee.stop = function(pa) {
                      ee.stop = ee.continue = ee.continuePrimaryKey = ee.advance = Ye, Ke(pa);
                    };
                  });
                  return z.onsuccess = ke(function(Ke) {
                    z.onsuccess = De, De();
                  }), ee.continue = re, ee.continuePrimaryKey = oe, ee.advance = ae, De(), uo;
                }, N(ee)) : N(null);
              }, H);
            });
          }, count: function(P) {
            var k = P.query, B = P.trans, A = k.index, R = k.range;
            return new Promise(function(T, N) {
              var H = B.objectStore(C), K = A.isPrimaryKey ? H : H.index(A.name), H = l(R), K = H ? K.count(H) : K.count();
              K.onsuccess = ke(function(F) {
                return T(F.target.result);
              }), K.onerror = hr(N);
            });
          } };
        }
        var p, g, h, I = (g = v, h = pu((p = n).objectStoreNames), { schema: { name: p.name, tables: h.map(function(O) {
          return g.objectStore(O);
        }).map(function(O) {
          var x = O.keyPath, k = O.autoIncrement, C = f(x), P = {}, k = { name: O.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: x == null, compound: C, keyPath: x, autoIncrement: k, unique: !0, extractKey: Go(x) }, indexes: pu(O.indexNames).map(function(B) {
            return O.index(B);
          }).map(function(T) {
            var A = T.name, R = T.unique, N = T.multiEntry, T = T.keyPath, N = { name: A, compound: f(T), keyPath: T, unique: R, multiEntry: N, extractKey: Go(T) };
            return P[on(T)] = N;
          }), getIndexByKeyPath: function(B) {
            return P[on(B)];
          } };
          return P[":id"] = k.primaryKey, x != null && (P[on(x)] = k.primaryKey), k;
        }) }, hasGetAll: 0 < h.length && "getAll" in g.objectStore(h[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), v = I.schema, w = I.hasGetAll, I = v.tables.map(c), b = {};
        return I.forEach(function(O) {
          return b[O.name] = O;
        }), { stack: "dbcore", transaction: n.transaction.bind(n), table: function(O) {
          if (!b[O]) throw new Error("Table '".concat(O, "' not found"));
          return b[O];
        }, MIN_KEY: -1 / 0, MAX_KEY: nn(a), schema: v };
      }
      function Ns(n, a, i, l) {
        var c = i.IDBKeyRange;
        return i.indexedDB, { dbcore: (l = Ms(a, c, l), n.dbcore.reduce(function(p, g) {
          return g = g.create, o(o({}, p), g(p));
        }, l)) };
      }
      function Qn(n, l) {
        var i = l.db, l = Ns(n._middlewares, i, n._deps, l);
        n.core = l.dbcore, n.tables.forEach(function(c) {
          var p = c.name;
          n.core.schema.tables.some(function(g) {
            return g.name === p;
          }) && (c.core = n.core.table(p), n[p] instanceof n.Table && (n[p].core = c.core));
        });
      }
      function Gn(n, a, i, l) {
        i.forEach(function(c) {
          var p = l[c];
          a.forEach(function(g) {
            var h = function v(w, I) {
              return G(w, I) || (w = y(w)) && v(w, I);
            }(g, c);
            (!h || "value" in h && h.value === void 0) && (g === n.Transaction.prototype || g instanceof n.Transaction ? j(g, c, { get: function() {
              return this.table(c);
            }, set: function(v) {
              E(this, c, { value: v, writable: !0, configurable: !0, enumerable: !0 });
            } }) : g[c] = new n.Table(c, p));
          });
        });
      }
      function Zo(n, a) {
        a.forEach(function(i) {
          for (var l in i) i[l] instanceof n.Table && delete i[l];
        });
      }
      function Ks(n, a) {
        return n._cfg.version - a._cfg.version;
      }
      function Fs(n, a, i, l) {
        var c = n._dbSchema;
        i.objectStoreNames.contains("$meta") && !c.$meta && (c.$meta = Qo("$meta", gu("")[0], []), n._storeNames.push("$meta"));
        var p = n._createTransaction("readwrite", n._storeNames, c);
        p.create(i), p._completion.catch(l);
        var g = p._reject.bind(p), h = Z.transless || Z;
        Mr(function() {
          return Z.trans = p, Z.transless = h, a !== 0 ? (Qn(n, i), w = a, ((v = p).storeNames.includes("$meta") ? v.table("$meta").get("version").then(function(I) {
            return I ?? w;
          }) : V.resolve(w)).then(function(I) {
            return O = I, x = p, C = i, P = [], I = (b = n)._versions, k = b._dbSchema = Yn(0, b.idbdb, C), (I = I.filter(function(B) {
              return B._cfg.version >= O;
            })).length !== 0 ? (I.forEach(function(B) {
              P.push(function() {
                var A = k, R = B._cfg.dbschema;
                Xn(b, A, C), Xn(b, R, C), k = b._dbSchema = R;
                var T = Yo(A, R);
                T.add.forEach(function(q) {
                  Xo(C, q[0], q[1].primKey, q[1].indexes);
                }), T.change.forEach(function(q) {
                  if (q.recreate) throw new Y.Upgrade("Not yet support for changing primary key");
                  var z = C.objectStore(q.name);
                  q.add.forEach(function(Q) {
                    return Zn(z, Q);
                  }), q.change.forEach(function(Q) {
                    z.deleteIndex(Q.name), Zn(z, Q);
                  }), q.del.forEach(function(Q) {
                    return z.deleteIndex(Q);
                  });
                });
                var N = B._cfg.contentUpgrade;
                if (N && B._cfg.version > O) {
                  Qn(b, C), x._memoizedTables = {};
                  var H = ye(R);
                  T.del.forEach(function(q) {
                    H[q] = A[q];
                  }), Zo(b, [b.Transaction.prototype]), Gn(b, [b.Transaction.prototype], d(H), H), x.schema = H;
                  var K, F = Ve(N);
                  return F && kt(), T = V.follow(function() {
                    var q;
                    (K = N(x)) && F && (q = Nr.bind(null, null), K.then(q, q));
                  }), K && typeof K.then == "function" ? V.resolve(K) : T.then(function() {
                    return K;
                  });
                }
              }), P.push(function(A) {
                var R, T, N = B._cfg.dbschema;
                R = N, T = A, [].slice.call(T.db.objectStoreNames).forEach(function(H) {
                  return R[H] == null && T.db.deleteObjectStore(H);
                }), Zo(b, [b.Transaction.prototype]), Gn(b, [b.Transaction.prototype], b._storeNames, b._dbSchema), x.schema = b._dbSchema;
              }), P.push(function(A) {
                b.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(b.idbdb.version / 10) === B._cfg.version ? (b.idbdb.deleteObjectStore("$meta"), delete b._dbSchema.$meta, b._storeNames = b._storeNames.filter(function(R) {
                  return R !== "$meta";
                })) : A.objectStore("$meta").put(B._cfg.version, "version"));
              });
            }), function B() {
              return P.length ? V.resolve(P.shift()(x.idbtrans)).then(B) : V.resolve();
            }().then(function() {
              mu(k, C);
            })) : V.resolve();
            var b, O, x, C, P, k;
          }).catch(g)) : (d(c).forEach(function(I) {
            Xo(i, I, c[I].primKey, c[I].indexes);
          }), Qn(n, i), void V.follow(function() {
            return n.on.populate.fire(p);
          }).catch(g));
          var v, w;
        });
      }
      function zs(n, a) {
        mu(n._dbSchema, a), a.db.version % 10 != 0 || a.objectStoreNames.contains("$meta") || a.db.createObjectStore("$meta").add(Math.ceil(a.db.version / 10 - 1), "version");
        var i = Yn(0, n.idbdb, a);
        Xn(n, n._dbSchema, a);
        for (var l = 0, c = Yo(i, n._dbSchema).change; l < c.length; l++) {
          var p = function(g) {
            if (g.change.length || g.recreate) return console.warn("Unable to patch indexes of table ".concat(g.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var h = a.objectStore(g.name);
            g.add.forEach(function(v) {
              Xe && console.debug("Dexie upgrade patch: Creating missing index ".concat(g.name, ".").concat(v.src)), Zn(h, v);
            });
          }(c[l]);
          if (typeof p == "object") return p.value;
        }
      }
      function Yo(n, a) {
        var i, l = { del: [], add: [], change: [] };
        for (i in n) a[i] || l.del.push(i);
        for (i in a) {
          var c = n[i], p = a[i];
          if (c) {
            var g = { name: i, def: p, recreate: !1, del: [], add: [], change: [] };
            if ("" + (c.primKey.keyPath || "") != "" + (p.primKey.keyPath || "") || c.primKey.auto !== p.primKey.auto) g.recreate = !0, l.change.push(g);
            else {
              var h = c.idxByName, v = p.idxByName, w = void 0;
              for (w in h) v[w] || g.del.push(w);
              for (w in v) {
                var I = h[w], b = v[w];
                I ? I.src !== b.src && g.change.push(b) : g.add.push(b);
              }
              (0 < g.del.length || 0 < g.add.length || 0 < g.change.length) && l.change.push(g);
            }
          } else l.add.push([i, p]);
        }
        return l;
      }
      function Xo(n, a, i, l) {
        var c = n.db.createObjectStore(a, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
        return l.forEach(function(p) {
          return Zn(c, p);
        }), c;
      }
      function mu(n, a) {
        d(n).forEach(function(i) {
          a.db.objectStoreNames.contains(i) || (Xe && console.debug("Dexie: Creating missing table", i), Xo(a, i, n[i].primKey, n[i].indexes));
        });
      }
      function Zn(n, a) {
        n.createIndex(a.name, a.keyPath, { unique: a.unique, multiEntry: a.multi });
      }
      function Yn(n, a, i) {
        var l = {};
        return X(a.objectStoreNames, 0).forEach(function(c) {
          for (var p = i.objectStore(c), g = Wo(fu(w = p.keyPath), w || "", !0, !1, !!p.autoIncrement, w && typeof w != "string", !0), h = [], v = 0; v < p.indexNames.length; ++v) {
            var I = p.index(p.indexNames[v]), w = I.keyPath, I = Wo(I.name, w, !!I.unique, !!I.multiEntry, !1, w && typeof w != "string", !1);
            h.push(I);
          }
          l[c] = Qo(c, g, h);
        }), l;
      }
      function Xn(n, a, i) {
        for (var l = i.db.objectStoreNames, c = 0; c < l.length; ++c) {
          var p = l[c], g = i.objectStore(p);
          n._hasGetAll = "getAll" in g;
          for (var h = 0; h < g.indexNames.length; ++h) {
            var v = g.indexNames[h], w = g.index(v).keyPath, I = typeof w == "string" ? w : "[" + X(w).join("+") + "]";
            !a[p] || (w = a[p].idxByName[I]) && (w.name = v, delete a[p].idxByName[I], a[p].idxByName[v] = w);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && s.WorkerGlobalScope && s instanceof s.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (n._hasGetAll = !1);
      }
      function gu(n) {
        return n.split(",").map(function(a, i) {
          var l = (a = a.trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split("+") : l;
          return Wo(l, c || null, /\&/.test(a), /\*/.test(a), /\+\+/.test(a), f(c), i === 0);
        });
      }
      var Hs = (Jn.prototype._parseStoresSpec = function(n, a) {
        d(n).forEach(function(i) {
          if (n[i] !== null) {
            var l = gu(n[i]), c = l.shift();
            if (c.unique = !0, c.multi) throw new Y.Schema("Primary key cannot be multi-valued");
            l.forEach(function(p) {
              if (p.auto) throw new Y.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!p.keyPath) throw new Y.Schema("Index must have a name and cannot be an empty string");
            }), a[i] = Qo(i, c, l);
          }
        });
      }, Jn.prototype.stores = function(i) {
        var a = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, i) : i;
        var i = a._versions, l = {}, c = {};
        return i.forEach(function(p) {
          m(l, p._cfg.storesSource), c = p._cfg.dbschema = {}, p._parseStoresSpec(l, c);
        }), a._dbSchema = c, Zo(a, [a._allTables, a, a.Transaction.prototype]), Gn(a, [a._allTables, a, a.Transaction.prototype, this._cfg.tables], d(c), c), a._storeNames = d(c), this;
      }, Jn.prototype.upgrade = function(n) {
        return this._cfg.contentUpgrade = Qt(this._cfg.contentUpgrade || ve, n), this;
      }, Jn);
      function Jn() {
      }
      function Jo(n, a) {
        var i = n._dbNamesDB;
        return i || (i = n._dbNamesDB = new $r(Hn, { addons: [], indexedDB: n, IDBKeyRange: a })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
      }
      function ea(n) {
        return n && typeof n.databases == "function";
      }
      function ra(n) {
        return Mr(function() {
          return Z.letThrough = !0, n();
        });
      }
      function ta(n) {
        return !("from" in n);
      }
      var Te = function(n, a) {
        if (!this) {
          var i = new Te();
          return n && "d" in n && m(i, n), i;
        }
        m(this, arguments.length ? { d: 1, from: n, to: 1 < arguments.length ? a : n } : { d: 0 });
      };
      function an(n, a, i) {
        var l = le(a, i);
        if (!isNaN(l)) {
          if (0 < l) throw RangeError();
          if (ta(n)) return m(n, { from: a, to: i, d: 1 });
          var c = n.l, l = n.r;
          if (le(i, n.from) < 0) return c ? an(c, a, i) : n.l = { from: a, to: i, d: 1, l: null, r: null }, bu(n);
          if (0 < le(a, n.to)) return l ? an(l, a, i) : n.r = { from: a, to: i, d: 1, l: null, r: null }, bu(n);
          le(a, n.from) < 0 && (n.from = a, n.l = null, n.d = l ? l.d + 1 : 1), 0 < le(i, n.to) && (n.to = i, n.r = null, n.d = n.l ? n.l.d + 1 : 1), i = !n.r, c && !n.l && un(n, c), l && i && un(n, l);
        }
      }
      function un(n, a) {
        ta(a) || function i(l, v) {
          var p = v.from, g = v.to, h = v.l, v = v.r;
          an(l, p, g), h && i(l, h), v && i(l, v);
        }(n, a);
      }
      function hu(n, a) {
        var i = eo(a), l = i.next();
        if (l.done) return !1;
        for (var c = l.value, p = eo(n), g = p.next(c.from), h = g.value; !l.done && !g.done; ) {
          if (le(h.from, c.to) <= 0 && 0 <= le(h.to, c.from)) return !0;
          le(c.from, h.from) < 0 ? c = (l = i.next(h.from)).value : h = (g = p.next(c.from)).value;
        }
        return !1;
      }
      function eo(n) {
        var a = ta(n) ? null : { s: 0, n };
        return { next: function(i) {
          for (var l = 0 < arguments.length; a; ) switch (a.s) {
            case 0:
              if (a.s = 1, l) for (; a.n.l && le(i, a.n.from) < 0; ) a = { up: a, n: a.n.l, s: 1 };
              else for (; a.n.l; ) a = { up: a, n: a.n.l, s: 1 };
            case 1:
              if (a.s = 2, !l || le(i, a.n.to) <= 0) return { value: a.n, done: !1 };
            case 2:
              if (a.n.r) {
                a.s = 3, a = { up: a, n: a.n.r, s: 0 };
                continue;
              }
            case 3:
              a = a.up;
          }
          return { done: !0 };
        } };
      }
      function bu(n) {
        var a, i, l = (((a = n.r) === null || a === void 0 ? void 0 : a.d) || 0) - (((i = n.l) === null || i === void 0 ? void 0 : i.d) || 0), c = 1 < l ? "r" : l < -1 ? "l" : "";
        c && (a = c == "r" ? "l" : "r", i = o({}, n), l = n[c], n.from = l.from, n.to = l.to, n[c] = l[c], i[c] = l[a], (n[a] = i).d = yu(i)), n.d = yu(n);
      }
      function yu(i) {
        var a = i.r, i = i.l;
        return (a ? i ? Math.max(a.d, i.d) : a.d : i ? i.d : 0) + 1;
      }
      function ro(n, a) {
        return d(a).forEach(function(i) {
          n[i] ? un(n[i], a[i]) : n[i] = function l(c) {
            var p, g, h = {};
            for (p in c) S(c, p) && (g = c[p], h[p] = !g || typeof g != "object" || rr.has(g.constructor) ? g : l(g));
            return h;
          }(a[i]);
        }), n;
      }
      function na(n, a) {
        return n.all || a.all || Object.keys(n).some(function(i) {
          return a[i] && hu(a[i], n[i]);
        });
      }
      $(Te.prototype, ((Je = { add: function(n) {
        return un(this, n), this;
      }, addKey: function(n) {
        return an(this, n, n), this;
      }, addKeys: function(n) {
        var a = this;
        return n.forEach(function(i) {
          return an(a, i, i);
        }), this;
      }, hasKey: function(n) {
        var a = eo(this).next(n).value;
        return a && le(a.from, n) <= 0 && 0 <= le(a.to, n);
      } })[gr] = function() {
        return eo(this);
      }, Je));
      var ct = {}, oa = {}, aa = !1;
      function to(n) {
        ro(oa, n), aa || (aa = !0, setTimeout(function() {
          aa = !1, ua(oa, !(oa = {}));
        }, 0));
      }
      function ua(n, a) {
        a === void 0 && (a = !1);
        var i = /* @__PURE__ */ new Set();
        if (n.all) for (var l = 0, c = Object.values(ct); l < c.length; l++) vu(g = c[l], n, i, a);
        else for (var p in n) {
          var g, h = /^idb\:\/\/(.*)\/(.*)\//.exec(p);
          h && (p = h[1], h = h[2], (g = ct["idb://".concat(p, "/").concat(h)]) && vu(g, n, i, a));
        }
        i.forEach(function(v) {
          return v();
        });
      }
      function vu(n, a, i, l) {
        for (var c = [], p = 0, g = Object.entries(n.queries.query); p < g.length; p++) {
          for (var h = g[p], v = h[0], w = [], I = 0, b = h[1]; I < b.length; I++) {
            var O = b[I];
            na(a, O.obsSet) ? O.subscribers.forEach(function(k) {
              return i.add(k);
            }) : l && w.push(O);
          }
          l && c.push([v, w]);
        }
        if (l) for (var x = 0, C = c; x < C.length; x++) {
          var P = C[x], v = P[0], w = P[1];
          n.queries.query[v] = w;
        }
      }
      function qs(n) {
        var a = n._state, i = n._deps.indexedDB;
        if (a.isBeingOpened || n.idbdb) return a.dbReadyPromise.then(function() {
          return a.dbOpenError ? Pe(a.dbOpenError) : n;
        });
        a.isBeingOpened = !0, a.dbOpenError = null, a.openComplete = !1;
        var l = a.openCanceller, c = Math.round(10 * n.verno), p = !1;
        function g() {
          if (a.openCanceller !== l) throw new Y.DatabaseClosed("db.open() was cancelled");
        }
        function h() {
          return new V(function(O, x) {
            if (g(), !i) throw new Y.MissingAPI();
            var C = n.name, P = a.autoSchema || !c ? i.open(C) : i.open(C, c);
            if (!P) throw new Y.MissingAPI();
            P.onerror = hr(x), P.onblocked = ke(n._fireOnBlocked), P.onupgradeneeded = ke(function(k) {
              var B;
              I = P.transaction, a.autoSchema && !n._options.allowEmptyDB ? (P.onerror = rn, I.abort(), P.result.close(), (B = i.deleteDatabase(C)).onsuccess = B.onerror = ke(function() {
                x(new Y.NoSuchDatabase("Database ".concat(C, " doesnt exist")));
              })) : (I.onerror = hr(x), k = k.oldVersion > Math.pow(2, 62) ? 0 : k.oldVersion, b = k < 1, n.idbdb = P.result, p && zs(n, I), Fs(n, k / 10, I, x));
            }, x), P.onsuccess = ke(function() {
              I = null;
              var k, B, A, R, T, N = n.idbdb = P.result, H = X(N.objectStoreNames);
              if (0 < H.length) try {
                var K = N.transaction((R = H).length === 1 ? R[0] : R, "readonly");
                if (a.autoSchema) B = N, A = K, (k = n).verno = B.version / 10, A = k._dbSchema = Yn(0, B, A), k._storeNames = X(B.objectStoreNames, 0), Gn(k, [k._allTables], d(A), A);
                else if (Xn(n, n._dbSchema, K), ((T = Yo(Yn(0, (T = n).idbdb, K), T._dbSchema)).add.length || T.change.some(function(F) {
                  return F.add.length || F.change.length;
                })) && !p) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), N.close(), c = N.version + 1, p = !0, O(h());
                Qn(n, K);
              } catch {
              }
              Ct.push(n), N.onversionchange = ke(function(F) {
                a.vcFired = !0, n.on("versionchange").fire(F);
              }), N.onclose = ke(function(F) {
                n.on("close").fire(F);
              }), b && (T = n._deps, K = C, N = T.indexedDB, T = T.IDBKeyRange, ea(N) || K === Hn || Jo(N, T).put({ name: K }).catch(ve)), O();
            }, x);
          }).catch(function(O) {
            switch (O == null ? void 0 : O.name) {
              case "UnknownError":
                if (0 < a.PR1398_maxLoop) return a.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), h();
                break;
              case "VersionError":
                if (0 < c) return c = 0, h();
            }
            return V.reject(O);
          });
        }
        var v, w = a.dbReadyResolve, I = null, b = !1;
        return V.race([l, (typeof navigator > "u" ? V.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(O) {
          function x() {
            return indexedDB.databases().finally(O);
          }
          v = setInterval(x, 100), x();
        }).finally(function() {
          return clearInterval(v);
        }) : Promise.resolve()).then(h)]).then(function() {
          return g(), a.onReadyBeingFired = [], V.resolve(ra(function() {
            return n.on.ready.fire(n.vip);
          })).then(function O() {
            if (0 < a.onReadyBeingFired.length) {
              var x = a.onReadyBeingFired.reduce(Qt, ve);
              return a.onReadyBeingFired = [], V.resolve(ra(function() {
                return x(n.vip);
              })).then(O);
            }
          });
        }).finally(function() {
          a.openCanceller === l && (a.onReadyBeingFired = null, a.isBeingOpened = !1);
        }).catch(function(O) {
          a.dbOpenError = O;
          try {
            I && I.abort();
          } catch {
          }
          return l === a.openCanceller && n._close(), Pe(O);
        }).finally(function() {
          a.openComplete = !0, w();
        }).then(function() {
          var O;
          return b && (O = {}, n.tables.forEach(function(x) {
            x.schema.indexes.forEach(function(C) {
              C.name && (O["idb://".concat(n.name, "/").concat(x.name, "/").concat(C.name)] = new Te(-1 / 0, [[[]]]));
            }), O["idb://".concat(n.name, "/").concat(x.name, "/")] = O["idb://".concat(n.name, "/").concat(x.name, "/:dels")] = new Te(-1 / 0, [[[]]]);
          }), zr(tn).fire(O), ua(O, !0)), n;
        });
      }
      function ia(n) {
        function a(p) {
          return n.next(p);
        }
        var i = c(a), l = c(function(p) {
          return n.throw(p);
        });
        function c(p) {
          return function(v) {
            var h = p(v), v = h.value;
            return h.done ? v : v && typeof v.then == "function" ? v.then(i, l) : f(v) ? Promise.all(v).then(i, l) : i(v);
          };
        }
        return c(a)();
      }
      function no(n, a, i) {
        for (var l = f(n) ? n.slice() : [n], c = 0; c < i; ++c) l.push(a);
        return l;
      }
      var Vs = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(n) {
        return o(o({}, n), { table: function(a) {
          var i = n.table(a), l = i.schema, c = {}, p = [];
          function g(b, O, x) {
            var C = on(b), P = c[C] = c[C] || [], k = b == null ? 0 : typeof b == "string" ? 1 : b.length, B = 0 < O, B = o(o({}, x), { name: B ? "".concat(C, "(virtual-from:").concat(x.name, ")") : x.name, lowLevelIndex: x, isVirtual: B, keyTail: O, keyLength: k, extractKey: Go(b), unique: !B && x.unique });
            return P.push(B), B.isPrimaryKey || p.push(B), 1 < k && g(k === 2 ? b[0] : b.slice(0, k - 1), O + 1, x), P.sort(function(A, R) {
              return A.keyTail - R.keyTail;
            }), B;
          }
          a = g(l.primaryKey.keyPath, 0, l.primaryKey), c[":id"] = [a];
          for (var h = 0, v = l.indexes; h < v.length; h++) {
            var w = v[h];
            g(w.keyPath, 0, w);
          }
          function I(b) {
            var O, x = b.query.index;
            return x.isVirtual ? o(o({}, b), { query: { index: x.lowLevelIndex, range: (O = b.query.range, x = x.keyTail, { type: O.type === 1 ? 2 : O.type, lower: no(O.lower, O.lowerOpen ? n.MAX_KEY : n.MIN_KEY, x), lowerOpen: !0, upper: no(O.upper, O.upperOpen ? n.MIN_KEY : n.MAX_KEY, x), upperOpen: !0 }) } }) : b;
          }
          return o(o({}, i), { schema: o(o({}, l), { primaryKey: a, indexes: p, getIndexByKeyPath: function(b) {
            return (b = c[on(b)]) && b[0];
          } }), count: function(b) {
            return i.count(I(b));
          }, query: function(b) {
            return i.query(I(b));
          }, openCursor: function(b) {
            var O = b.query.index, x = O.keyTail, C = O.isVirtual, P = O.keyLength;
            return C ? i.openCursor(I(b)).then(function(B) {
              return B && k(B);
            }) : i.openCursor(b);
            function k(B) {
              return Object.create(B, { continue: { value: function(A) {
                A != null ? B.continue(no(A, b.reverse ? n.MAX_KEY : n.MIN_KEY, x)) : b.unique ? B.continue(B.key.slice(0, P).concat(b.reverse ? n.MIN_KEY : n.MAX_KEY, x)) : B.continue();
              } }, continuePrimaryKey: { value: function(A, R) {
                B.continuePrimaryKey(no(A, n.MAX_KEY, x), R);
              } }, primaryKey: { get: function() {
                return B.primaryKey;
              } }, key: { get: function() {
                var A = B.key;
                return P === 1 ? A[0] : A.slice(0, P);
              } }, value: { get: function() {
                return B.value;
              } } });
            }
          } });
        } });
      } };
      function sa(n, a, i, l) {
        return i = i || {}, l = l || "", d(n).forEach(function(c) {
          var p, g, h;
          S(a, c) ? (p = n[c], g = a[c], typeof p == "object" && typeof g == "object" && p && g ? (h = tr(p)) !== tr(g) ? i[l + c] = a[c] : h === "Object" ? sa(p, g, i, l + c + ".") : p !== g && (i[l + c] = a[c]) : p !== g && (i[l + c] = a[c])) : i[l + c] = void 0;
        }), d(a).forEach(function(c) {
          S(n, c) || (i[l + c] = a[c]);
        }), i;
      }
      function la(n, a) {
        return a.type === "delete" ? a.keys : a.keys || a.values.map(n.extractKey);
      }
      var Us = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(n) {
        return o(o({}, n), { table: function(a) {
          var i = n.table(a), l = i.schema.primaryKey;
          return o(o({}, i), { mutate: function(c) {
            var p = Z.trans, g = p.table(a).hook, h = g.deleting, v = g.creating, w = g.updating;
            switch (c.type) {
              case "add":
                if (v.fire === ve) break;
                return p._promise("readwrite", function() {
                  return I(c);
                }, !0);
              case "put":
                if (v.fire === ve && w.fire === ve) break;
                return p._promise("readwrite", function() {
                  return I(c);
                }, !0);
              case "delete":
                if (h.fire === ve) break;
                return p._promise("readwrite", function() {
                  return I(c);
                }, !0);
              case "deleteRange":
                if (h.fire === ve) break;
                return p._promise("readwrite", function() {
                  return function b(O, x, C) {
                    return i.query({ trans: O, values: !1, query: { index: l, range: x }, limit: C }).then(function(P) {
                      var k = P.result;
                      return I({ type: "delete", keys: k, trans: O }).then(function(B) {
                        return 0 < B.numFailures ? Promise.reject(B.failures[0]) : k.length < C ? { failures: [], numFailures: 0, lastResult: void 0 } : b(O, o(o({}, x), { lower: k[k.length - 1], lowerOpen: !0 }), C);
                      });
                    });
                  }(c.trans, c.range, 1e4);
                }, !0);
            }
            return i.mutate(c);
            function I(b) {
              var O, x, C, P = Z.trans, k = b.keys || la(l, b);
              if (!k) throw new Error("Keys missing");
              return (b = b.type === "add" || b.type === "put" ? o(o({}, b), { keys: k }) : o({}, b)).type !== "delete" && (b.values = u([], b.values)), b.keys && (b.keys = u([], b.keys)), O = i, C = k, ((x = b).type === "add" ? Promise.resolve([]) : O.getMany({ trans: x.trans, keys: C, cache: "immutable" })).then(function(B) {
                var A = k.map(function(R, T) {
                  var N, H, K, F = B[T], q = { onerror: null, onsuccess: null };
                  return b.type === "delete" ? h.fire.call(q, R, F, P) : b.type === "add" || F === void 0 ? (N = v.fire.call(q, R, b.values[T], P), R == null && N != null && (b.keys[T] = R = N, l.outbound || xe(b.values[T], l.keyPath, R))) : (N = sa(F, b.values[T]), (H = w.fire.call(q, N, R, F, P)) && (K = b.values[T], Object.keys(H).forEach(function(z) {
                    S(K, z) ? K[z] = H[z] : xe(K, z, H[z]);
                  }))), q;
                });
                return i.mutate(b).then(function(R) {
                  for (var T = R.failures, N = R.results, H = R.numFailures, R = R.lastResult, K = 0; K < k.length; ++K) {
                    var F = (N || k)[K], q = A[K];
                    F == null ? q.onerror && q.onerror(T[K]) : q.onsuccess && q.onsuccess(b.type === "put" && B[K] ? b.values[K] : F);
                  }
                  return { failures: T, results: N, numFailures: H, lastResult: R };
                }).catch(function(R) {
                  return A.forEach(function(T) {
                    return T.onerror && T.onerror(R);
                  }), Promise.reject(R);
                });
              });
            }
          } });
        } });
      } };
      function _u(n, a, i) {
        try {
          if (!a || a.keys.length < n.length) return null;
          for (var l = [], c = 0, p = 0; c < a.keys.length && p < n.length; ++c) le(a.keys[c], n[p]) === 0 && (l.push(i ? Ne(a.values[c]) : a.values[c]), ++p);
          return l.length === n.length ? l : null;
        } catch {
          return null;
        }
      }
      var Ws = { stack: "dbcore", level: -1, create: function(n) {
        return { table: function(a) {
          var i = n.table(a);
          return o(o({}, i), { getMany: function(l) {
            if (!l.cache) return i.getMany(l);
            var c = _u(l.keys, l.trans._cache, l.cache === "clone");
            return c ? V.resolve(c) : i.getMany(l).then(function(p) {
              return l.trans._cache = { keys: l.keys, values: l.cache === "clone" ? Ne(p) : p }, p;
            });
          }, mutate: function(l) {
            return l.type !== "add" && (l.trans._cache = null), i.mutate(l);
          } });
        } };
      } };
      function xu(n, a) {
        return n.trans.mode === "readonly" && !!n.subscr && !n.trans.explicit && n.trans.db._options.cache !== "disabled" && !a.schema.primaryKey.outbound;
      }
      function wu(n, a) {
        switch (n) {
          case "query":
            return a.values && !a.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Qs = { stack: "dbcore", level: 0, name: "Observability", create: function(n) {
        var a = n.schema.name, i = new Te(n.MIN_KEY, n.MAX_KEY);
        return o(o({}, n), { transaction: function(l, c, p) {
          if (Z.subscr && c !== "readonly") throw new Y.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Z.querier));
          return n.transaction(l, c, p);
        }, table: function(l) {
          var c = n.table(l), p = c.schema, g = p.primaryKey, b = p.indexes, h = g.extractKey, v = g.outbound, w = g.autoIncrement && b.filter(function(x) {
            return x.compound && x.keyPath.includes(g.keyPath);
          }), I = o(o({}, c), { mutate: function(x) {
            function C(z) {
              return z = "idb://".concat(a, "/").concat(l, "/").concat(z), R[z] || (R[z] = new Te());
            }
            var P, k, B, A = x.trans, R = x.mutatedParts || (x.mutatedParts = {}), T = C(""), N = C(":dels"), H = x.type, q = x.type === "deleteRange" ? [x.range] : x.type === "delete" ? [x.keys] : x.values.length < 50 ? [la(g, x).filter(function(z) {
              return z;
            }), x.values] : [], K = q[0], F = q[1], q = x.trans._cache;
            return f(K) ? (T.addKeys(K), (q = H === "delete" || K.length === F.length ? _u(K, q) : null) || N.addKeys(K), (q || F) && (P = C, k = q, B = F, p.indexes.forEach(function(z) {
              var Q = P(z.name || "");
              function re(ae) {
                return ae != null ? z.extractKey(ae) : null;
              }
              function oe(ae) {
                return z.multiEntry && f(ae) ? ae.forEach(function(Ye) {
                  return Q.addKey(Ye);
                }) : Q.addKey(ae);
              }
              (k || B).forEach(function(ae, Ee) {
                var ee = k && re(k[Ee]), Ee = B && re(B[Ee]);
                le(ee, Ee) !== 0 && (ee != null && oe(ee), Ee != null && oe(Ee));
              });
            }))) : K ? (F = { from: (F = K.lower) !== null && F !== void 0 ? F : n.MIN_KEY, to: (F = K.upper) !== null && F !== void 0 ? F : n.MAX_KEY }, N.add(F), T.add(F)) : (T.add(i), N.add(i), p.indexes.forEach(function(z) {
              return C(z.name).add(i);
            })), c.mutate(x).then(function(z) {
              return !K || x.type !== "add" && x.type !== "put" || (T.addKeys(z.results), w && w.forEach(function(Q) {
                for (var re = x.values.map(function(ee) {
                  return Q.extractKey(ee);
                }), oe = Q.keyPath.findIndex(function(ee) {
                  return ee === g.keyPath;
                }), ae = 0, Ye = z.results.length; ae < Ye; ++ae) re[ae][oe] = z.results[ae];
                C(Q.name).addKeys(re);
              })), A.mutatedParts = ro(A.mutatedParts || {}, R), z;
            });
          } }), b = function(C) {
            var P = C.query, C = P.index, P = P.range;
            return [C, new Te((C = P.lower) !== null && C !== void 0 ? C : n.MIN_KEY, (P = P.upper) !== null && P !== void 0 ? P : n.MAX_KEY)];
          }, O = { get: function(x) {
            return [g, new Te(x.key)];
          }, getMany: function(x) {
            return [g, new Te().addKeys(x.keys)];
          }, count: b, query: b, openCursor: b };
          return d(O).forEach(function(x) {
            I[x] = function(C) {
              var P = Z.subscr, k = !!P, B = xu(Z, c) && wu(x, C) ? C.obsSet = {} : P;
              if (k) {
                var A = function(F) {
                  return F = "idb://".concat(a, "/").concat(l, "/").concat(F), B[F] || (B[F] = new Te());
                }, R = A(""), T = A(":dels"), P = O[x](C), k = P[0], P = P[1];
                if ((x === "query" && k.isPrimaryKey && !C.values ? T : A(k.name || "")).add(P), !k.isPrimaryKey) {
                  if (x !== "count") {
                    var N = x === "query" && v && C.values && c.query(o(o({}, C), { values: !1 }));
                    return c[x].apply(this, arguments).then(function(F) {
                      if (x === "query") {
                        if (v && C.values) return N.then(function(re) {
                          return re = re.result, R.addKeys(re), F;
                        });
                        var q = C.values ? F.result.map(h) : F.result;
                        (C.values ? R : T).addKeys(q);
                      } else if (x === "openCursor") {
                        var z = F, Q = C.values;
                        return z && Object.create(z, { key: { get: function() {
                          return T.addKey(z.primaryKey), z.key;
                        } }, primaryKey: { get: function() {
                          var re = z.primaryKey;
                          return T.addKey(re), re;
                        } }, value: { get: function() {
                          return Q && R.addKey(z.primaryKey), z.value;
                        } } });
                      }
                      return F;
                    });
                  }
                  T.add(i);
                }
              }
              return c[x].apply(this, arguments);
            };
          }), I;
        } });
      } };
      function ku(n, a, i) {
        if (i.numFailures === 0) return a;
        if (a.type === "deleteRange") return null;
        var l = a.keys ? a.keys.length : "values" in a && a.values ? a.values.length : 1;
        return i.numFailures === l ? null : (a = o({}, a), f(a.keys) && (a.keys = a.keys.filter(function(c, p) {
          return !(p in i.failures);
        })), "values" in a && f(a.values) && (a.values = a.values.filter(function(c, p) {
          return !(p in i.failures);
        })), a);
      }
      function ca(n, a) {
        return i = n, ((l = a).lower === void 0 || (l.lowerOpen ? 0 < le(i, l.lower) : 0 <= le(i, l.lower))) && (n = n, (a = a).upper === void 0 || (a.upperOpen ? le(n, a.upper) < 0 : le(n, a.upper) <= 0));
        var i, l;
      }
      function Cu(n, a, O, l, c, p) {
        if (!O || O.length === 0) return n;
        var g = a.query.index, h = g.multiEntry, v = a.query.range, w = l.schema.primaryKey.extractKey, I = g.extractKey, b = (g.lowLevelIndex || g).extractKey, O = O.reduce(function(x, C) {
          var P = x, k = [];
          if (C.type === "add" || C.type === "put") for (var B = new Te(), A = C.values.length - 1; 0 <= A; --A) {
            var R, T = C.values[A], N = w(T);
            B.hasKey(N) || (R = I(T), (h && f(R) ? R.some(function(z) {
              return ca(z, v);
            }) : ca(R, v)) && (B.addKey(N), k.push(T)));
          }
          switch (C.type) {
            case "add":
              var H = new Te().addKeys(a.values ? x.map(function(Q) {
                return w(Q);
              }) : x), P = x.concat(a.values ? k.filter(function(Q) {
                return Q = w(Q), !H.hasKey(Q) && (H.addKey(Q), !0);
              }) : k.map(function(Q) {
                return w(Q);
              }).filter(function(Q) {
                return !H.hasKey(Q) && (H.addKey(Q), !0);
              }));
              break;
            case "put":
              var K = new Te().addKeys(C.values.map(function(Q) {
                return w(Q);
              }));
              P = x.filter(function(Q) {
                return !K.hasKey(a.values ? w(Q) : Q);
              }).concat(a.values ? k : k.map(function(Q) {
                return w(Q);
              }));
              break;
            case "delete":
              var F = new Te().addKeys(C.keys);
              P = x.filter(function(Q) {
                return !F.hasKey(a.values ? w(Q) : Q);
              });
              break;
            case "deleteRange":
              var q = C.range;
              P = x.filter(function(Q) {
                return !ca(w(Q), q);
              });
          }
          return P;
        }, n);
        return O === n ? n : (O.sort(function(x, C) {
          return le(b(x), b(C)) || le(w(x), w(C));
        }), a.limit && a.limit < 1 / 0 && (O.length > a.limit ? O.length = a.limit : n.length === a.limit && O.length < a.limit && (c.dirty = !0)), p ? Object.freeze(O) : O);
      }
      function Su(n, a) {
        return le(n.lower, a.lower) === 0 && le(n.upper, a.upper) === 0 && !!n.lowerOpen == !!a.lowerOpen && !!n.upperOpen == !!a.upperOpen;
      }
      function Gs(n, a) {
        return function(i, l, c, p) {
          if (i === void 0) return l !== void 0 ? -1 : 0;
          if (l === void 0) return 1;
          if ((l = le(i, l)) === 0) {
            if (c && p) return 0;
            if (c) return 1;
            if (p) return -1;
          }
          return l;
        }(n.lower, a.lower, n.lowerOpen, a.lowerOpen) <= 0 && 0 <= function(i, l, c, p) {
          if (i === void 0) return l !== void 0 ? 1 : 0;
          if (l === void 0) return -1;
          if ((l = le(i, l)) === 0) {
            if (c && p) return 0;
            if (c) return -1;
            if (p) return 1;
          }
          return l;
        }(n.upper, a.upper, n.upperOpen, a.upperOpen);
      }
      function Zs(n, a, i, l) {
        n.subscribers.add(i), l.addEventListener("abort", function() {
          var c, p;
          n.subscribers.delete(i), n.subscribers.size === 0 && (c = n, p = a, setTimeout(function() {
            c.subscribers.size === 0 && qe(p, c);
          }, 3e3));
        });
      }
      var Ys = { stack: "dbcore", level: 0, name: "Cache", create: function(n) {
        var a = n.schema.name;
        return o(o({}, n), { transaction: function(i, l, c) {
          var p, g, h = n.transaction(i, l, c);
          return l === "readwrite" && (g = (p = new AbortController()).signal, c = function(v) {
            return function() {
              if (p.abort(), l === "readwrite") {
                for (var w = /* @__PURE__ */ new Set(), I = 0, b = i; I < b.length; I++) {
                  var O = b[I], x = ct["idb://".concat(a, "/").concat(O)];
                  if (x) {
                    var C = n.table(O), P = x.optimisticOps.filter(function(Q) {
                      return Q.trans === h;
                    });
                    if (h._explicit && v && h.mutatedParts) for (var k = 0, B = Object.values(x.queries.query); k < B.length; k++) for (var A = 0, R = (H = B[k]).slice(); A < R.length; A++) na((K = R[A]).obsSet, h.mutatedParts) && (qe(H, K), K.subscribers.forEach(function(Q) {
                      return w.add(Q);
                    }));
                    else if (0 < P.length) {
                      x.optimisticOps = x.optimisticOps.filter(function(Q) {
                        return Q.trans !== h;
                      });
                      for (var T = 0, N = Object.values(x.queries.query); T < N.length; T++) for (var H, K, F, q = 0, z = (H = N[T]).slice(); q < z.length; q++) (K = z[q]).res != null && h.mutatedParts && (v && !K.dirty ? (F = Object.isFrozen(K.res), F = Cu(K.res, K.req, P, C, K, F), K.dirty ? (qe(H, K), K.subscribers.forEach(function(Q) {
                        return w.add(Q);
                      })) : F !== K.res && (K.res = F, K.promise = V.resolve({ result: F }))) : (K.dirty && qe(H, K), K.subscribers.forEach(function(Q) {
                        return w.add(Q);
                      })));
                    }
                  }
                }
                w.forEach(function(Q) {
                  return Q();
                });
              }
            };
          }, h.addEventListener("abort", c(!1), { signal: g }), h.addEventListener("error", c(!1), { signal: g }), h.addEventListener("complete", c(!0), { signal: g })), h;
        }, table: function(i) {
          var l = n.table(i), c = l.schema.primaryKey;
          return o(o({}, l), { mutate: function(p) {
            var g = Z.trans;
            if (c.outbound || g.db._options.cache === "disabled" || g.explicit || g.idbtrans.mode !== "readwrite") return l.mutate(p);
            var h = ct["idb://".concat(a, "/").concat(i)];
            return h ? (g = l.mutate(p), p.type !== "add" && p.type !== "put" || !(50 <= p.values.length || la(c, p).some(function(v) {
              return v == null;
            })) ? (h.optimisticOps.push(p), p.mutatedParts && to(p.mutatedParts), g.then(function(v) {
              0 < v.numFailures && (qe(h.optimisticOps, p), (v = ku(0, p, v)) && h.optimisticOps.push(v), p.mutatedParts && to(p.mutatedParts));
            }), g.catch(function() {
              qe(h.optimisticOps, p), p.mutatedParts && to(p.mutatedParts);
            })) : g.then(function(v) {
              var w = ku(0, o(o({}, p), { values: p.values.map(function(I, b) {
                var O;
                return v.failures[b] ? I : (I = (O = c.keyPath) !== null && O !== void 0 && O.includes(".") ? Ne(I) : o({}, I), xe(I, c.keyPath, v.results[b]), I);
              }) }), v);
              h.optimisticOps.push(w), queueMicrotask(function() {
                return p.mutatedParts && to(p.mutatedParts);
              });
            }), g) : l.mutate(p);
          }, query: function(p) {
            if (!xu(Z, l) || !wu("query", p)) return l.query(p);
            var g = ((w = Z.trans) === null || w === void 0 ? void 0 : w.db._options.cache) === "immutable", b = Z, h = b.requery, v = b.signal, w = function(C, P, k, B) {
              var A = ct["idb://".concat(C, "/").concat(P)];
              if (!A) return [];
              if (!(P = A.queries[k])) return [null, !1, A, null];
              var R = P[(B.query ? B.query.index.name : null) || ""];
              if (!R) return [null, !1, A, null];
              switch (k) {
                case "query":
                  var T = R.find(function(N) {
                    return N.req.limit === B.limit && N.req.values === B.values && Su(N.req.query.range, B.query.range);
                  });
                  return T ? [T, !0, A, R] : [R.find(function(N) {
                    return ("limit" in N.req ? N.req.limit : 1 / 0) >= B.limit && (!B.values || N.req.values) && Gs(N.req.query.range, B.query.range);
                  }), !1, A, R];
                case "count":
                  return T = R.find(function(N) {
                    return Su(N.req.query.range, B.query.range);
                  }), [T, !!T, A, R];
              }
            }(a, i, "query", p), I = w[0], b = w[1], O = w[2], x = w[3];
            return I && b ? I.obsSet = p.obsSet : (b = l.query(p).then(function(C) {
              var P = C.result;
              if (I && (I.res = P), g) {
                for (var k = 0, B = P.length; k < B; ++k) Object.freeze(P[k]);
                Object.freeze(P);
              } else C.result = Ne(P);
              return C;
            }).catch(function(C) {
              return x && I && qe(x, I), Promise.reject(C);
            }), I = { obsSet: p.obsSet, promise: b, subscribers: /* @__PURE__ */ new Set(), type: "query", req: p, dirty: !1 }, x ? x.push(I) : (x = [I], (O = O || (ct["idb://".concat(a, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[p.query.index.name || ""] = x)), Zs(I, x, h, v), I.promise.then(function(C) {
              return { result: Cu(C.result, p, O == null ? void 0 : O.optimisticOps, l, I, g) };
            });
          } });
        } });
      } };
      function oo(n, a) {
        return new Proxy(n, { get: function(i, l, c) {
          return l === "db" ? a : Reflect.get(i, l, c);
        } });
      }
      var $r = (Oe.prototype.version = function(n) {
        if (isNaN(n) || n < 0.1) throw new Y.Type("Given version is not a positive number");
        if (n = Math.round(10 * n) / 10, this.idbdb || this._state.isBeingOpened) throw new Y.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, n);
        var a = this._versions, i = a.filter(function(l) {
          return l._cfg.version === n;
        })[0];
        return i || (i = new this.Version(n), a.push(i), a.sort(Ks), i.stores({}), this._state.autoSchema = !1, i);
      }, Oe.prototype._whenReady = function(n) {
        var a = this;
        return this.idbdb && (this._state.openComplete || Z.letThrough || this._vip) ? n() : new V(function(i, l) {
          if (a._state.openComplete) return l(new Y.DatabaseClosed(a._state.dbOpenError));
          if (!a._state.isBeingOpened) {
            if (!a._state.autoOpen) return void l(new Y.DatabaseClosed());
            a.open().catch(ve);
          }
          a._state.dbReadyPromise.then(i, l);
        }).then(n);
      }, Oe.prototype.use = function(n) {
        var a = n.stack, i = n.create, l = n.level, c = n.name;
        return c && this.unuse({ stack: a, name: c }), n = this._middlewares[a] || (this._middlewares[a] = []), n.push({ stack: a, create: i, level: l ?? 10, name: c }), n.sort(function(p, g) {
          return p.level - g.level;
        }), this;
      }, Oe.prototype.unuse = function(n) {
        var a = n.stack, i = n.name, l = n.create;
        return a && this._middlewares[a] && (this._middlewares[a] = this._middlewares[a].filter(function(c) {
          return l ? c.create !== l : !!i && c.name !== i;
        })), this;
      }, Oe.prototype.open = function() {
        var n = this;
        return it(Lr, function() {
          return qs(n);
        });
      }, Oe.prototype._close = function() {
        var n = this._state, a = Ct.indexOf(this);
        if (0 <= a && Ct.splice(a, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        n.isBeingOpened || (n.dbReadyPromise = new V(function(i) {
          n.dbReadyResolve = i;
        }), n.openCanceller = new V(function(i, l) {
          n.cancelOpen = l;
        }));
      }, Oe.prototype.close = function(i) {
        var a = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
        a ? (i.isBeingOpened && i.cancelOpen(new Y.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new Y.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
      }, Oe.prototype.delete = function(n) {
        var a = this;
        n === void 0 && (n = { disableAutoOpen: !0 });
        var i = 0 < arguments.length && typeof arguments[0] != "object", l = this._state;
        return new V(function(c, p) {
          function g() {
            a.close(n);
            var h = a._deps.indexedDB.deleteDatabase(a.name);
            h.onsuccess = ke(function() {
              var v, w, I;
              v = a._deps, w = a.name, I = v.indexedDB, v = v.IDBKeyRange, ea(I) || w === Hn || Jo(I, v).delete(w).catch(ve), c();
            }), h.onerror = hr(p), h.onblocked = a._fireOnBlocked;
          }
          if (i) throw new Y.InvalidArgument("Invalid closeOptions argument to db.delete()");
          l.isBeingOpened ? l.dbReadyPromise.then(g) : g();
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
        return d(this._allTables).map(function(a) {
          return n._allTables[a];
        });
      }, enumerable: !1, configurable: !0 }), Oe.prototype.transaction = function() {
        var n = (function(a, i, l) {
          var c = arguments.length;
          if (c < 2) throw new Y.InvalidArgument("Too few arguments");
          for (var p = new Array(c - 1); --c; ) p[c - 1] = arguments[c];
          return l = p.pop(), [a, pr(p), l];
        }).apply(this, arguments);
        return this._transaction.apply(this, n);
      }, Oe.prototype._transaction = function(n, a, i) {
        var l = this, c = Z.trans;
        c && c.db === this && n.indexOf("!") === -1 || (c = null);
        var p, g, h = n.indexOf("?") !== -1;
        n = n.replace("!", "").replace("?", "");
        try {
          if (g = a.map(function(w) {
            if (w = w instanceof l.Table ? w.name : w, typeof w != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return w;
          }), n == "r" || n === Fo) p = Fo;
          else {
            if (n != "rw" && n != zo) throw new Y.InvalidArgument("Invalid transaction mode: " + n);
            p = zo;
          }
          if (c) {
            if (c.mode === Fo && p === zo) {
              if (!h) throw new Y.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              c = null;
            }
            c && g.forEach(function(w) {
              if (c && c.storeNames.indexOf(w) === -1) {
                if (!h) throw new Y.SubTransaction("Table " + w + " not included in parent transaction.");
                c = null;
              }
            }), h && c && !c.active && (c = null);
          }
        } catch (w) {
          return c ? c._promise(null, function(I, b) {
            b(w);
          }) : Pe(w);
        }
        var v = (function w(I, b, O, x, C) {
          return V.resolve().then(function() {
            var P = Z.transless || Z, k = I._createTransaction(b, O, I._dbSchema, x);
            if (k.explicit = !0, P = { trans: k, transless: P }, x) k.idbtrans = x.idbtrans;
            else try {
              k.create(), k.idbtrans._explicit = !0, I._state.PR1398_maxLoop = 3;
            } catch (R) {
              return R.name === Wt.InvalidState && I.isOpen() && 0 < --I._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), I.close({ disableAutoOpen: !1 }), I.open().then(function() {
                return w(I, b, O, null, C);
              })) : Pe(R);
            }
            var B, A = Ve(C);
            return A && kt(), P = V.follow(function() {
              var R;
              (B = C.call(k, k)) && (A ? (R = Nr.bind(null, null), B.then(R, R)) : typeof B.next == "function" && typeof B.throw == "function" && (B = ia(B)));
            }, P), (B && typeof B.then == "function" ? V.resolve(B).then(function(R) {
              return k.active ? R : Pe(new Y.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : P.then(function() {
              return B;
            })).then(function(R) {
              return x && k._resolve(), k._completion.then(function() {
                return R;
              });
            }).catch(function(R) {
              return k._reject(R), Pe(R);
            });
          });
        }).bind(null, this, p, g, c, i);
        return c ? c._promise(p, v, "lock") : Z.trans ? it(Z.transless, function() {
          return l._whenReady(v);
        }) : this._whenReady(v);
      }, Oe.prototype.table = function(n) {
        if (!S(this._allTables, n)) throw new Y.InvalidTable("Table ".concat(n, " does not exist"));
        return this._allTables[n];
      }, Oe);
      function Oe(n, a) {
        var i = this;
        this._middlewares = {}, this.verno = 0;
        var l = Oe.dependencies;
        this._options = a = o({ addons: Oe.addons, autoOpen: !0, indexedDB: l.indexedDB, IDBKeyRange: l.IDBKeyRange, cache: "cloned" }, a), this._deps = { indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange }, l = a.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var c, p, g, h, v, w = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: ve, dbReadyPromise: null, cancelOpen: ve, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: a.autoOpen };
        w.dbReadyPromise = new V(function(b) {
          w.dbReadyResolve = b;
        }), w.openCanceller = new V(function(b, O) {
          w.cancelOpen = O;
        }), this._state = w, this.name = n, this.on = Xt(this, "populate", "blocked", "versionchange", "close", { ready: [Qt, ve] }), this.on.ready.subscribe = M(this.on.ready.subscribe, function(b) {
          return function(O, x) {
            Oe.vip(function() {
              var C, P = i._state;
              P.openComplete ? (P.dbOpenError || V.resolve().then(O), x && b(O)) : P.onReadyBeingFired ? (P.onReadyBeingFired.push(O), x && b(O)) : (b(O), C = i, x || b(function k() {
                C.on.ready.unsubscribe(O), C.on.ready.unsubscribe(k);
              }));
            });
          };
        }), this.Collection = (c = this, Jt(Ts.prototype, function(B, k) {
          this.db = c;
          var x = tu, C = null;
          if (k) try {
            x = k();
          } catch (A) {
            C = A;
          }
          var P = B._ctx, k = P.table, B = k.hook.reading.fire;
          this._ctx = { table: k, index: P.index, isPrimKey: !P.index || k.schema.primKey.keyPath && P.index === k.schema.primKey.name, range: x, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: C, or: P.or, valueMapper: B !== tt ? B : null };
        })), this.Table = (p = this, Jt(uu.prototype, function(b, O, x) {
          this.db = p, this._tx = x, this.name = b, this.schema = O, this.hook = p._allTables[b] ? p._allTables[b].hook : Xt(null, { creating: [Bo, ve], reading: [Oo, tt], updating: [Ao, ve], deleting: [$o, ve] });
        })), this.Transaction = (g = this, Jt(js.prototype, function(b, O, x, C, P) {
          var k = this;
          this.db = g, this.mode = b, this.storeNames = O, this.schema = x, this.chromeTransactionDurability = C, this.idbtrans = null, this.on = Xt(this, "complete", "error", "abort"), this.parent = P || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new V(function(B, A) {
            k._resolve = B, k._reject = A;
          }), this._completion.then(function() {
            k.active = !1, k.on.complete.fire();
          }, function(B) {
            var A = k.active;
            return k.active = !1, k.on.error.fire(B), k.parent ? k.parent._reject(B) : A && k.idbtrans && k.idbtrans.abort(), Pe(B);
          });
        })), this.Version = (h = this, Jt(Hs.prototype, function(b) {
          this.db = h, this._cfg = { version: b, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (v = this, Jt(du.prototype, function(b, O, x) {
          if (this.db = v, this._ctx = { table: b, index: O === ":id" ? null : O, or: x }, this._cmp = this._ascending = le, this._descending = function(C, P) {
            return le(P, C);
          }, this._max = function(C, P) {
            return 0 < le(C, P) ? C : P;
          }, this._min = function(C, P) {
            return le(C, P) < 0 ? C : P;
          }, this._IDBKeyRange = v._deps.IDBKeyRange, !this._IDBKeyRange) throw new Y.MissingAPI();
        })), this.on("versionchange", function(b) {
          0 < b.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(b) {
          !b.newVersion || b.newVersion < b.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(b.oldVersion / 10));
        }), this._maxKey = nn(a.IDBKeyRange), this._createTransaction = function(b, O, x, C) {
          return new i.Transaction(b, O, x, i._options.chromeTransactionDurability, C);
        }, this._fireOnBlocked = function(b) {
          i.on("blocked").fire(b), Ct.filter(function(O) {
            return O.name === i.name && O !== i && !O._state.vcFired;
          }).map(function(O) {
            return O.on("versionchange").fire(b);
          });
        }, this.use(Ws), this.use(Ys), this.use(Qs), this.use(Vs), this.use(Us);
        var I = new Proxy(this, { get: function(b, O, x) {
          if (O === "_vip") return !0;
          if (O === "table") return function(P) {
            return oo(i.table(P), I);
          };
          var C = Reflect.get(b, O, x);
          return C instanceof uu ? oo(C, I) : O === "tables" ? C.map(function(P) {
            return oo(P, I);
          }) : O === "_createTransaction" ? function() {
            return oo(C.apply(this, arguments), I);
          } : C;
        } });
        this.vip = I, l.forEach(function(b) {
          return b(i);
        });
      }
      var ao, Je = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Xs = (da.prototype.subscribe = function(n, a, i) {
        return this._subscribe(n && typeof n != "function" ? n : { next: n, error: a, complete: i });
      }, da.prototype[Je] = function() {
        return this;
      }, da);
      function da(n) {
        this._subscribe = n;
      }
      try {
        ao = { indexedDB: s.indexedDB || s.mozIndexedDB || s.webkitIndexedDB || s.msIndexedDB, IDBKeyRange: s.IDBKeyRange || s.webkitIDBKeyRange };
      } catch {
        ao = { indexedDB: null, IDBKeyRange: null };
      }
      function Iu(n) {
        var a, i = !1, l = new Xs(function(c) {
          var p = Ve(n), g, h = !1, v = {}, w = {}, I = { get closed() {
            return h;
          }, unsubscribe: function() {
            h || (h = !0, g && g.abort(), b && zr.storagemutated.unsubscribe(x));
          } };
          c.start && c.start(I);
          var b = !1, O = function() {
            return Ko(C);
          }, x = function(P) {
            ro(v, P), na(w, v) && O();
          }, C = function() {
            var P, k, B;
            !h && ao.indexedDB && (v = {}, P = {}, g && g.abort(), g = new AbortController(), B = function(A) {
              var R = xt();
              try {
                p && kt();
                var T = Mr(n, A);
                return T = p ? T.finally(Nr) : T;
              } finally {
                R && wt();
              }
            }(k = { subscr: P, signal: g.signal, requery: O, querier: n, trans: null }), Promise.resolve(B).then(function(A) {
              i = !0, a = A, h || k.signal.aborted || (v = {}, function(R) {
                for (var T in R) if (S(R, T)) return;
                return 1;
              }(w = P) || b || (zr(tn, x), b = !0), Ko(function() {
                return !h && c.next && c.next(A);
              }));
            }, function(A) {
              i = !1, ["DatabaseClosedError", "AbortError"].includes(A == null ? void 0 : A.name) || h || Ko(function() {
                h || c.error && c.error(A);
              });
            }));
          };
          return setTimeout(O, 0), I;
        });
        return l.hasValue = function() {
          return i;
        }, l.getValue = function() {
          return a;
        }, l;
      }
      var dt = $r;
      function fa(n) {
        var a = Hr;
        try {
          Hr = !0, zr.storagemutated.fire(n), ua(n, !0);
        } finally {
          Hr = a;
        }
      }
      $(dt, o(o({}, _t), { delete: function(n) {
        return new dt(n, { addons: [] }).delete();
      }, exists: function(n) {
        return new dt(n, { addons: [] }).open().then(function(a) {
          return a.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(n) {
        try {
          return a = dt.dependencies, i = a.indexedDB, a = a.IDBKeyRange, (ea(i) ? Promise.resolve(i.databases()).then(function(l) {
            return l.map(function(c) {
              return c.name;
            }).filter(function(c) {
              return c !== Hn;
            });
          }) : Jo(i, a).toCollection().primaryKeys()).then(n);
        } catch {
          return Pe(new Y.MissingAPI());
        }
        var a, i;
      }, defineClass: function() {
        return function(n) {
          m(this, n);
        };
      }, ignoreTransaction: function(n) {
        return Z.trans ? it(Z.transless, n) : n();
      }, vip: ra, async: function(n) {
        return function() {
          try {
            var a = ia(n.apply(this, arguments));
            return a && typeof a.then == "function" ? a : V.resolve(a);
          } catch (i) {
            return Pe(i);
          }
        };
      }, spawn: function(n, a, i) {
        try {
          var l = ia(n.apply(i, a || []));
          return l && typeof l.then == "function" ? l : V.resolve(l);
        } catch (c) {
          return Pe(c);
        }
      }, currentTransaction: { get: function() {
        return Z.trans || null;
      } }, waitFor: function(n, a) {
        return a = V.resolve(typeof n == "function" ? dt.ignoreTransaction(n) : n).timeout(a || 6e4), Z.trans ? Z.trans.waitFor(a) : a;
      }, Promise: V, debug: { get: function() {
        return Xe;
      }, set: function(n) {
        Tn(n);
      } }, derive: L, extend: m, props: $, override: M, Events: Xt, on: zr, liveQuery: Iu, extendObservabilitySet: ro, getByKeyPath: de, setByKeyPath: xe, delByKeyPath: function(n, a) {
        typeof a == "string" ? xe(n, a, void 0) : "length" in a && [].map.call(a, function(i) {
          xe(n, i, void 0);
        });
      }, shallowClone: ye, deepClone: Ne, getObjectDiff: sa, cmp: le, asap: ge, minKey: -1 / 0, addons: [], connections: Ct, errnames: Wt, dependencies: ao, cache: ct, semVer: "4.0.10", version: "4.0.10".split(".").map(function(n) {
        return parseInt(n);
      }).reduce(function(n, a, i) {
        return n + a / Math.pow(10, 2 * i);
      }) })), dt.maxKey = nn(dt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (zr(tn, function(n) {
        Hr || (n = new CustomEvent(Uo, { detail: n }), Hr = !0, dispatchEvent(n), Hr = !1);
      }), addEventListener(Uo, function(n) {
        n = n.detail, Hr || fa(n);
      }));
      var Pt, Hr = !1, Pu = function() {
      };
      return typeof BroadcastChannel < "u" && ((Pu = function() {
        (Pt = new BroadcastChannel(Uo)).onmessage = function(n) {
          return n.data && fa(n.data);
        };
      })(), typeof Pt.unref == "function" && Pt.unref(), zr(tn, function(n) {
        Hr || Pt.postMessage(n);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(n) {
        if (!$r.disableBfCache && n.persisted) {
          Xe && console.debug("Dexie: handling persisted pagehide"), Pt != null && Pt.close();
          for (var a = 0, i = Ct; a < i.length; a++) i[a].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(n) {
        !$r.disableBfCache && n.persisted && (Xe && console.debug("Dexie: handling persisted pageshow"), Pu(), fa({ all: new Te(-1 / 0, [[]]) }));
      })), V.rejectionMapper = function(n, a) {
        return !n || n instanceof nr || n instanceof TypeError || n instanceof SyntaxError || !n.name || !Rn[n.name] ? n : (a = new Rn[n.name](a || n.message, n), "stack" in n && j(a, "stack", { get: function() {
          return this.inner.stack;
        } }), a);
      }, Tn(Xe), o($r, Object.freeze({ __proto__: null, Dexie: $r, liveQuery: Iu, Entity: nu, cmp: le, PropModSymbol: Br, PropModification: en, replacePrefix: function(n, a) {
        return new en({ replacePrefix: [n, a] });
      }, add: function(n) {
        return new en({ add: n });
      }, remove: function(n) {
        return new en({ remove: n });
      }, default: $r, RangeSet: Te, mergeRanges: un, rangesOverlap: hu }), { default: $r }), $r;
    });
  }(po)), po.exports;
}
var _c = vc();
const Pa = /* @__PURE__ */ bc(_c), qu = Symbol.for("Dexie"), Oa = globalThis[qu] || (globalThis[qu] = Pa);
if (Pa.semVer !== Oa.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Pa.semVer} and ${Oa.semVer}`);
const mt = class mt extends Oa {
  constructor() {
    super("devkit_db");
    io(this, "icon");
    io(this, "translation");
    this.version(1).stores({
      icon: "&iconName , iconContent",
      translation: "&localeKey , messages"
    });
  }
  static getInstance() {
    return mt.instance || (mt.instance = new mt()), mt.instance;
  }
};
io(mt, "instance", null);
let Ba = mt;
const $a = Ba.getInstance(), ug = /* @__PURE__ */ Di({
  __name: "AppIcon",
  props: {
    icon: { default: "default" },
    size: { default: "small" },
    iconType: { default: "svg" },
    color: { default: "var(--p-primary-contrast-color)" }
  },
  setup(e) {
    const r = al("isIconsLoaded") || jr(!1), t = e;
    ul();
    const o = {
      small: "1.5rem",
      medium: "2.25rem",
      large: "3rem"
    }, u = il(() => {
      if (d.value == "default" || d.value == "") return d.value;
      try {
        const E = new DOMParser().parseFromString(d.value, "image/svg+xml").querySelector("svg");
        return E ? (E.setAttribute("width", o[t.size]), E.setAttribute("height", o[t.size]), t.color && E.setAttribute("fill", t.color), E.setAttribute("stroke", t.color || "currentColor"), E.outerHTML) : d.value;
      } catch {
        return d.value;
      }
    }), s = sn("span", {
      key: t.icon,
      class: `pi pi-${t.icon}`,
      style: {
        fontSize: o[t.size],
        key: t.icon,
        color: t.color || "currentColor"
      }
    }), d = jr(""), f = () => {
      console.log("getting from db"), $a.icon.get(t.icon).then((S) => {
        if (!S) {
          d.value = "default";
          return;
        }
        d.value = S.iconContent, console.log("icon is", S);
      }).catch((S) => {
        d.value = "default";
      });
    }, m = () => (f(), sn("span", {
      class: `app-icon ${t.size}`,
      attrs: t.color,
      key: t.icon,
      innerHTML: u.value
    })), y = () => r.value ? m() : sn("h2", "loading"), _ = () => [
      sn("h2", d.value),
      sn("h2", "hello"),
      t.iconType == "primevue" ? s : y()
    ];
    return (S, $) => (fe(), xr(Xr(_)));
  }
}), xc = {};
function wc(e, r) {
  return fe(), Ce("h2", null, "app image again");
}
const ig = /* @__PURE__ */ Ut(xc, [["render", wc]]);
function Vu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return Ua(e);
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
}, Uu = Se.extend({
  name: "common"
});
function _n(e) {
  "@babel/helpers - typeof";
  return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, _n(e);
}
function kc(e) {
  return Zi(e) || Cc(e) || Gi(e) || Qi();
}
function Cc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ln(e, r) {
  return Zi(e) || Sc(e, r) || Gi(e, r) || Qi();
}
function Qi() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gi(e, r) {
  if (e) {
    if (typeof e == "string") return Wu(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Wu(e, r) : void 0;
  }
}
function Wu(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function Sc(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, u, s, d, f = [], m = !0, y = !1;
    try {
      if (s = (t = t.call(e)).next, r === 0) {
        if (Object(t) !== t) return;
        m = !1;
      } else for (; !(m = (o = s.call(t)).done) && (f.push(o.value), f.length !== r); m = !0) ;
    } catch (_) {
      y = !0, u = _;
    } finally {
      try {
        if (!m && t.return != null && (d = t.return(), Object(d) !== d)) return;
      } finally {
        if (y) throw u;
      }
    }
    return f;
  }
}
function Zi(e) {
  if (Array.isArray(e)) return e;
}
function Qu(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function se(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Qu(Object(t), !0).forEach(function(o) {
      mn(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Qu(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function mn(e, r, t) {
  return (r = Ic(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Ic(e) {
  var r = Pc(e, "string");
  return _n(r) == "symbol" ? r : r + "";
}
function Pc(e, r) {
  if (_n(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (_n(o) != "object") return o;
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
    var r, t, o, u, s, d, f, m, y, _, S, $ = (r = this.pt) === null || r === void 0 ? void 0 : r._usept, E = $ ? (t = this.pt) === null || t === void 0 || (t = t.originalValue) === null || t === void 0 ? void 0 : t[this.$.type.name] : void 0, j = $ ? (o = this.pt) === null || o === void 0 || (o = o.value) === null || o === void 0 ? void 0 : o[this.$.type.name] : this.pt;
    (u = j || E) === null || u === void 0 || (u = u.hooks) === null || u === void 0 || (s = u.onBeforeCreate) === null || s === void 0 || s.call(u);
    var L = (d = this.$primevueConfig) === null || d === void 0 || (d = d.pt) === null || d === void 0 ? void 0 : d._usept, G = L ? (f = this.$primevue) === null || f === void 0 || (f = f.config) === null || f === void 0 || (f = f.pt) === null || f === void 0 ? void 0 : f.originalValue : void 0, J = L ? (m = this.$primevue) === null || m === void 0 || (m = m.config) === null || m === void 0 || (m = m.pt) === null || m === void 0 ? void 0 : m.value : (y = this.$primevue) === null || y === void 0 || (y = y.config) === null || y === void 0 ? void 0 : y.pt;
    (_ = J || G) === null || _ === void 0 || (_ = _[this.$.type.name]) === null || _ === void 0 || (_ = _.hooks) === null || _ === void 0 || (S = _.onBeforeCreate) === null || S === void 0 || S.call(_), this.$attrSelector = Ua("pc");
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this.rootEl = dr(this.$el, '[data-pc-name="'.concat(lr(this.$.type.name), '"]')), this.rootEl && (this.$attrSelector && !this.rootEl.hasAttribute(this.$attrSelector) && this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = se({
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
      for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
        o[u - 1] = arguments[u];
      return qa(r) ? r.apply(void 0, o) : ce.apply(void 0, o);
    },
    _loadStyles: function() {
      var r = this, t = function() {
        Ur.isStyleNameLoaded("base") || (Se.loadCSS(r.$styleOptions), r._loadGlobalStyles(), Ur.setLoadedStyleName("base")), r._loadThemeStyles();
      };
      t(), this._themeChangeListener(t);
    },
    _loadCoreStyles: function() {
      var r, t;
      !Ur.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (t = this.$style) !== null && t !== void 0 && t.name && (Uu.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), Ur.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var r = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      ne(r) && Se.load(r, se({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var r, t;
      if (!(this.isUnstyled || this.$theme === "none")) {
        if (!_e.isStyleNameLoaded("common")) {
          var o, u, s = ((o = this.$style) === null || o === void 0 || (u = o.getCommonTheme) === null || u === void 0 ? void 0 : u.call(o)) || {}, d = s.primitive, f = s.semantic, m = s.global, y = s.style;
          Se.load(d == null ? void 0 : d.css, se({
            name: "primitive-variables"
          }, this.$styleOptions)), Se.load(f == null ? void 0 : f.css, se({
            name: "semantic-variables"
          }, this.$styleOptions)), Se.load(m == null ? void 0 : m.css, se({
            name: "global-variables"
          }, this.$styleOptions)), Se.loadTheme(se({
            name: "global-style"
          }, this.$styleOptions), y), _e.setLoadedStyleName("common");
        }
        if (!_e.isStyleNameLoaded((r = this.$style) === null || r === void 0 ? void 0 : r.name) && (t = this.$style) !== null && t !== void 0 && t.name) {
          var _, S, $, E, j = ((_ = this.$style) === null || _ === void 0 || (S = _.getComponentTheme) === null || S === void 0 ? void 0 : S.call(_)) || {}, L = j.css, G = j.style;
          ($ = this.$style) === null || $ === void 0 || $.load(L, se({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (E = this.$style) === null || E === void 0 || E.loadTheme(se({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions), G), _e.setLoadedStyleName(this.$style.name);
        }
        if (!_e.isStyleNameLoaded("layer-order")) {
          var J, X, M = (J = this.$style) === null || J === void 0 || (X = J.getLayerOrderThemeCSS) === null || X === void 0 ? void 0 : X.call(J);
          Se.load(M, se({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), _e.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(r) {
      var t, o, u, s = ((t = this.$style) === null || t === void 0 || (o = t.getPresetTheme) === null || o === void 0 ? void 0 : o.call(t, r, "[".concat(this.$attrSelector, "]"))) || {}, d = s.css, f = (u = this.$style) === null || u === void 0 ? void 0 : u.load(d, se({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = f.el;
    },
    _unloadScopedThemeStyles: function() {
      var r;
      (r = this.scopedStyleEl) === null || r === void 0 || (r = r.value) === null || r === void 0 || r.remove();
    },
    _themeChangeListener: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      Ur.clearLoadedStyleNames(), sr.on("theme:change", r);
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
      return Va(r, t, o);
    },
    _getPTValue: function() {
      var r, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, d = /./g.test(o) && !!u[o.split(".")[0]], f = this._getPropValue("ptOptions") || ((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.ptOptions) || {}, m = f.mergeSections, y = m === void 0 ? !0 : m, _ = f.mergeProps, S = _ === void 0 ? !1 : _, $ = s ? d ? this._useGlobalPT(this._getPTClassValue, o, u) : this._useDefaultPT(this._getPTClassValue, o, u) : void 0, E = d ? void 0 : this._getPTSelf(t, this._getPTClassValue, o, se(se({}, u), {}, {
        global: $ || {}
      })), j = this._getPTDatasets(o);
      return y || !y && E ? S ? this._mergeProps(S, $, E, j) : se(se(se({}, $), E), j) : se(se({}, E), j);
    },
    _getPTSelf: function() {
      for (var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
        o[u - 1] = arguments[u];
      return ce(
        this._usePT.apply(this, [this._getPT(r, this.$name)].concat(o)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(o))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", u = "data-pc-", s = o === "root" && ne((r = this.pt) === null || r === void 0 ? void 0 : r["data-pc-section"]);
      return o !== "transition" && se(se({}, o === "root" && se(se(mn({}, "".concat(u, "name"), lr(s ? (t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"] : this.$.type.name)), s && mn({}, "".concat(u, "extend"), lr(this.$.type.name))), Wi() && mn({}, "".concat(this.$attrSelector), ""))), {}, mn({}, "".concat(u, "section"), lr(o)));
    },
    _getPTClassValue: function() {
      var r = this._getOptionValue.apply(this, arguments);
      return We(r) || wo(r) ? {
        class: r
      } : r;
    },
    _getPT: function(r) {
      var t = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", u = arguments.length > 2 ? arguments[2] : void 0, s = function(f) {
        var m, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _ = u ? u(f) : f, S = lr(o), $ = lr(t.$name);
        return (m = y ? S !== $ ? _ == null ? void 0 : _[S] : void 0 : _ == null ? void 0 : _[S]) !== null && m !== void 0 ? m : _;
      };
      return r != null && r.hasOwnProperty("_usept") ? {
        _usept: r._usept,
        originalValue: s(r.originalValue),
        value: s(r.value)
      } : s(r, !0);
    },
    _usePT: function(r, t, o, u) {
      var s = function(L) {
        return t(L, o, u);
      };
      if (r != null && r.hasOwnProperty("_usept")) {
        var d, f = r._usept || ((d = this.$primevueConfig) === null || d === void 0 ? void 0 : d.ptOptions) || {}, m = f.mergeSections, y = m === void 0 ? !0 : m, _ = f.mergeProps, S = _ === void 0 ? !1 : _, $ = s(r.originalValue), E = s(r.value);
        return $ === void 0 && E === void 0 ? void 0 : We(E) ? E : We($) ? $ : y || !y && E ? S ? this._mergeProps(S, $, E) : se(se({}, $), E) : E;
      }
      return s(r);
    },
    _useGlobalPT: function(r, t, o) {
      return this._usePT(this.globalPT, r, t, o);
    },
    _useDefaultPT: function(r, t, o) {
      return this._usePT(this.defaultPT, r, t, o);
    },
    ptm: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, r, se(se({}, this.$params), t));
    },
    ptmi: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return ce(this.$_attrsWithoutPT, this.ptm(r, t));
    },
    ptmo: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(r, t, se({
        instance: this
      }, o), !1);
    },
    cx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, r, se(se({}, this.$params), t));
    },
    sx: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (t) {
        var u = this._getOptionValue(this.$style.inlineStyles, r, se(se({}, this.$params), o)), s = this._getOptionValue(Uu.inlineStyles, r, se(se({}, this.$params), o));
        return [s, u];
      }
    }
  },
  computed: {
    globalPT: function() {
      var r, t = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(o) {
        return He(o, {
          instance: t
        });
      });
    },
    defaultPT: function() {
      var r, t = this;
      return this._getPT((r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.pt, void 0, function(o) {
        return t._getOptionValue(o, t.$name, se({}, t.$params)) || He(o, se({}, t.$params));
      });
    },
    isUnstyled: function() {
      var r;
      return this.unstyled !== void 0 ? this.unstyled : (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.unstyled;
    },
    $inProps: function() {
      var r, t = Object.keys(((r = this.$.vnode) === null || r === void 0 ? void 0 : r.props) || {});
      return Object.fromEntries(Object.entries(this.$props).filter(function(o) {
        var u = ln(o, 1), s = u[0];
        return t == null ? void 0 : t.includes(s);
      }));
    },
    $theme: function() {
      var r;
      return (r = this.$primevueConfig) === null || r === void 0 ? void 0 : r.theme;
    },
    $style: function() {
      return se(se({
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
        var t = ln(r, 1), o = t[0];
        return o == null ? void 0 : o.startsWith("pt:");
      }).reduce(function(r, t) {
        var o = ln(t, 2), u = o[0], s = o[1], d = u.split(":"), f = kc(d), m = f.slice(1);
        return m == null || m.reduce(function(y, _, S, $) {
          return !y[_] && (y[_] = S === $.length - 1 ? s : {}), y[_];
        }, r), r;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(r) {
        var t = ln(r, 1), o = t[0];
        return !(o != null && o.startsWith("pt:"));
      }).reduce(function(r, t) {
        var o = ln(t, 2), u = o[0], s = o[1];
        return r[u] = s, r;
      }, {});
    }
  }
}, Oc = `
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
`, Bc = Se.extend({
  name: "baseicon",
  css: Oc
});
function xn(e) {
  "@babel/helpers - typeof";
  return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, xn(e);
}
function Gu(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function Zu(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Gu(Object(t), !0).forEach(function(o) {
      $c(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Gu(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function $c(e, r, t) {
  return (r = Ac(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Ac(e) {
  var r = Rc(e, "string");
  return xn(r) == "symbol" ? r : r + "";
}
function Rc(e, r) {
  if (xn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (xn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var Yi = {
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
  style: Bc,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var r = et(this.label);
      return Zu(Zu({}, !this.isUnstyled && {
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
}, Wa = {
  name: "ChevronDownIcon",
  extends: Yi
};
function Tc(e, r, t, o, u, s) {
  return fe(), Ce("svg", ce({
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
Wa.render = Tc;
var Qa = {
  name: "ChevronRightIcon",
  extends: Yi
};
function Ec(e, r, t, o, u, s) {
  return fe(), Ce("svg", ce({
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
Qa.render = Ec;
var Dc = function(r) {
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
}, jc = {
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
}, Lc = Se.extend({
  name: "panelmenu",
  theme: Dc,
  classes: jc
});
function wn(e) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, wn(e);
}
function Yu(e, r) {
  return Fc(e) || Kc(e, r) || Nc(e, r) || Mc();
}
function Mc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Nc(e, r) {
  if (e) {
    if (typeof e == "string") return Xu(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Xu(e, r) : void 0;
  }
}
function Xu(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function Kc(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, u, s, d, f = [], m = !0, y = !1;
    try {
      if (s = (t = t.call(e)).next, r !== 0) for (; !(m = (o = s.call(t)).done) && (f.push(o.value), f.length !== r); m = !0) ;
    } catch (_) {
      y = !0, u = _;
    } finally {
      try {
        if (!m && t.return != null && (d = t.return(), Object(d) !== d)) return;
      } finally {
        if (y) throw u;
      }
    }
    return f;
  }
}
function Fc(e) {
  if (Array.isArray(e)) return e;
}
function Ju(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function pe(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ju(Object(t), !0).forEach(function(o) {
      Aa(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ju(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function Aa(e, r, t) {
  return (r = zc(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function zc(e) {
  var r = Hc(e, "string");
  return wn(r) == "symbol" ? r : r + "";
}
function Hc(e, r) {
  if (wn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (wn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var ue = {
  _getMeta: function() {
    return [wr(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], He(wr(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(r, t) {
    var o, u, s;
    return (o = (r == null || (u = r.instance) === null || u === void 0 ? void 0 : u.$primevue) || (t == null || (s = t.ctx) === null || s === void 0 || (s = s.appContext) === null || s === void 0 || (s = s.config) === null || s === void 0 || (s = s.globalProperties) === null || s === void 0 ? void 0 : s.$primevue)) === null || o === void 0 ? void 0 : o.config;
  },
  _getOptionValue: Va,
  _getPTValue: function() {
    var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, m = function() {
      var X = ue._getOptionValue.apply(ue, arguments);
      return We(X) || wo(X) ? {
        class: X
      } : X;
    }, y = ((r = o.binding) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r.ptOptions) || ((t = o.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, _ = y.mergeSections, S = _ === void 0 ? !0 : _, $ = y.mergeProps, E = $ === void 0 ? !1 : $, j = f ? ue._useDefaultPT(o, o.defaultPT(), m, s, d) : void 0, L = ue._usePT(o, ue._getPT(u, o.$name), m, s, pe(pe({}, d), {}, {
      global: j || {}
    })), G = ue._getPTDatasets(o, s);
    return S || !S && L ? E ? ue._mergeProps(o, E, j, L, G) : pe(pe(pe({}, j), L), G) : pe(pe({}, L), G);
  },
  _getPTDatasets: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = "data-pc-";
    return pe(pe({}, t === "root" && Aa({}, "".concat(o, "name"), lr(r.$name))), {}, Aa({}, "".concat(o, "section"), lr(t)));
  },
  _getPT: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", o = arguments.length > 2 ? arguments[2] : void 0, u = function(d) {
      var f, m = o ? o(d) : d, y = lr(t);
      return (f = m == null ? void 0 : m[y]) !== null && f !== void 0 ? f : m;
    };
    return r != null && r.hasOwnProperty("_usept") ? {
      _usept: r._usept,
      originalValue: u(r.originalValue),
      value: u(r.value)
    } : u(r);
  },
  _usePT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length > 2 ? arguments[2] : void 0, u = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0, d = function(G) {
      return o(G, u, s);
    };
    if (t != null && t.hasOwnProperty("_usept")) {
      var f, m = t._usept || ((f = r.$primevueConfig) === null || f === void 0 ? void 0 : f.ptOptions) || {}, y = m.mergeSections, _ = y === void 0 ? !0 : y, S = m.mergeProps, $ = S === void 0 ? !1 : S, E = d(t.originalValue), j = d(t.value);
      return E === void 0 && j === void 0 ? void 0 : We(j) ? j : We(E) ? E : _ || !_ && j ? $ ? ue._mergeProps(r, $, E, j) : pe(pe({}, E), j) : j;
    }
    return d(t);
  },
  _useDefaultPT: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 ? arguments[2] : void 0, u = arguments.length > 3 ? arguments[3] : void 0, s = arguments.length > 4 ? arguments[4] : void 0;
    return ue._usePT(r, t, o, u, s);
  },
  _loadStyles: function(r, t, o) {
    var u, s = ue._getConfig(t, o), d = {
      nonce: s == null || (u = s.csp) === null || u === void 0 ? void 0 : u.nonce
    };
    ue._loadCoreStyles(r.$instance, d), ue._loadThemeStyles(r.$instance, d), ue._loadScopedThemeStyles(r.$instance, d), ue._themeChangeListener(function() {
      return ue._loadThemeStyles(r.$instance, d);
    });
  },
  _loadCoreStyles: function() {
    var r, t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    if (!Ur.isStyleNameLoaded((r = o.$style) === null || r === void 0 ? void 0 : r.name) && (t = o.$style) !== null && t !== void 0 && t.name) {
      var s;
      Se.loadCSS(u), (s = o.$style) === null || s === void 0 || s.loadCSS(u), Ur.setLoadedStyleName(o.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var r, t, o, u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, s = arguments.length > 1 ? arguments[1] : void 0;
    if (!(u != null && u.isUnstyled() || (u == null || (r = u.theme) === null || r === void 0 ? void 0 : r.call(u)) === "none")) {
      if (!_e.isStyleNameLoaded("common")) {
        var d, f, m = ((d = u.$style) === null || d === void 0 || (f = d.getCommonTheme) === null || f === void 0 ? void 0 : f.call(d)) || {}, y = m.primitive, _ = m.semantic, S = m.global, $ = m.style;
        Se.load(y == null ? void 0 : y.css, pe({
          name: "primitive-variables"
        }, s)), Se.load(_ == null ? void 0 : _.css, pe({
          name: "semantic-variables"
        }, s)), Se.load(S == null ? void 0 : S.css, pe({
          name: "global-variables"
        }, s)), Se.loadTheme(pe({
          name: "global-style"
        }, s), $), _e.setLoadedStyleName("common");
      }
      if (!_e.isStyleNameLoaded((t = u.$style) === null || t === void 0 ? void 0 : t.name) && (o = u.$style) !== null && o !== void 0 && o.name) {
        var E, j, L, G, J = ((E = u.$style) === null || E === void 0 || (j = E.getDirectiveTheme) === null || j === void 0 ? void 0 : j.call(E)) || {}, X = J.css, M = J.style;
        (L = u.$style) === null || L === void 0 || L.load(X, pe({
          name: "".concat(u.$style.name, "-variables")
        }, s)), (G = u.$style) === null || G === void 0 || G.loadTheme(pe({
          name: "".concat(u.$style.name, "-style")
        }, s), M), _e.setLoadedStyleName(u.$style.name);
      }
      if (!_e.isStyleNameLoaded("layer-order")) {
        var W, ge, de = (W = u.$style) === null || W === void 0 || (ge = W.getLayerOrderThemeCSS) === null || ge === void 0 ? void 0 : ge.call(W);
        Se.load(de, pe({
          name: "layer-order",
          first: !0
        }, s)), _e.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, o = r.preset();
    if (o && r.$attrSelector) {
      var u, s, d, f = ((u = r.$style) === null || u === void 0 || (s = u.getPresetTheme) === null || s === void 0 ? void 0 : s.call(u, o, "[".concat(r.$attrSelector, "]"))) || {}, m = f.css, y = (d = r.$style) === null || d === void 0 ? void 0 : d.load(m, pe({
        name: "".concat(r.$attrSelector, "-").concat(r.$style.name)
      }, t));
      r.scopedStyleEl = y.el;
    }
  },
  _themeChangeListener: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    Ur.clearLoadedStyleNames(), sr.on("theme:change", r);
  },
  _hook: function(r, t, o, u, s, d) {
    var f, m, y = "on".concat(wl(t)), _ = ue._getConfig(u, s), S = o == null ? void 0 : o.$instance, $ = ue._usePT(S, ue._getPT(u == null || (f = u.value) === null || f === void 0 ? void 0 : f.pt, r), ue._getOptionValue, "hooks.".concat(y)), E = ue._useDefaultPT(S, _ == null || (m = _.pt) === null || m === void 0 || (m = m.directives) === null || m === void 0 ? void 0 : m[r], ue._getOptionValue, "hooks.".concat(y)), j = {
      el: o,
      binding: u,
      vnode: s,
      prevVnode: d
    };
    $ == null || $(S, j), E == null || E(S, j);
  },
  _mergeProps: function() {
    for (var r = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), u = 2; u < t; u++)
      o[u - 2] = arguments[u];
    return qa(r) ? r.apply(void 0, o) : ce.apply(void 0, o);
  },
  _extend: function(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = function(d, f, m, y, _) {
      var S, $, E, j;
      f._$instances = f._$instances || {};
      var L = ue._getConfig(m, y), G = f._$instances[r] || {}, J = et(G) ? pe(pe({}, t), t == null ? void 0 : t.methods) : {};
      f._$instances[r] = pe(pe({}, G), {}, {
        /* new instance variables to pass in directive methods */
        $name: r,
        $host: f,
        $binding: m,
        $modifiers: m == null ? void 0 : m.modifiers,
        $value: m == null ? void 0 : m.value,
        $el: G.$el || f || void 0,
        $style: pe({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, t == null ? void 0 : t.style),
        $primevueConfig: L,
        $attrSelector: (S = f.$pd) === null || S === void 0 || (S = S[r]) === null || S === void 0 ? void 0 : S.attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return ue._getPT(L == null ? void 0 : L.pt, void 0, function(M) {
            var W;
            return M == null || (W = M.directives) === null || W === void 0 ? void 0 : W[r];
          });
        },
        isUnstyled: function() {
          var M, W;
          return ((M = f.$instance) === null || M === void 0 || (M = M.$binding) === null || M === void 0 || (M = M.value) === null || M === void 0 ? void 0 : M.unstyled) !== void 0 ? (W = f.$instance) === null || W === void 0 || (W = W.$binding) === null || W === void 0 || (W = W.value) === null || W === void 0 ? void 0 : W.unstyled : L == null ? void 0 : L.unstyled;
        },
        theme: function() {
          var M;
          return (M = f.$instance) === null || M === void 0 || (M = M.$primevueConfig) === null || M === void 0 ? void 0 : M.theme;
        },
        preset: function() {
          var M;
          return (M = f.$instance) === null || M === void 0 || (M = M.$binding) === null || M === void 0 || (M = M.value) === null || M === void 0 ? void 0 : M.dt;
        },
        /* instance's methods */
        ptm: function() {
          var M, W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return ue._getPTValue(f.$instance, (M = f.$instance) === null || M === void 0 || (M = M.$binding) === null || M === void 0 || (M = M.value) === null || M === void 0 ? void 0 : M.pt, W, pe({}, ge));
        },
        ptmo: function() {
          var M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", ge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return ue._getPTValue(f.$instance, M, W, ge, !1);
        },
        cx: function() {
          var M, W, ge = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", de = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (M = f.$instance) !== null && M !== void 0 && M.isUnstyled() ? void 0 : ue._getOptionValue((W = f.$instance) === null || W === void 0 || (W = W.$style) === null || W === void 0 ? void 0 : W.classes, ge, pe({}, de));
        },
        sx: function() {
          var M, W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", ge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, de = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return ge ? ue._getOptionValue((M = f.$instance) === null || M === void 0 || (M = M.$style) === null || M === void 0 ? void 0 : M.inlineStyles, W, pe({}, de)) : void 0;
        }
      }, J), f.$instance = f._$instances[r], ($ = (E = f.$instance)[d]) === null || $ === void 0 || $.call(E, f, m, y, _), f["$".concat(r)] = f.$instance, ue._hook(r, d, f, m, y, _), f.$pd || (f.$pd = {}), f.$pd[r] = pe(pe({}, (j = f.$pd) === null || j === void 0 ? void 0 : j[r]), {}, {
        name: r,
        instance: f.$instance
      });
    }, u = function(d) {
      var f, m, y, _, S, $ = (f = d.$instance) === null || f === void 0 ? void 0 : f.watch;
      $ == null || (m = $.config) === null || m === void 0 || m.call(d.$instance, (y = d.$instance) === null || y === void 0 ? void 0 : y.$primevueConfig), At.on("config:change", function(E) {
        var j, L = E.newValue, G = E.oldValue;
        return $ == null || (j = $.config) === null || j === void 0 ? void 0 : j.call(d.$instance, L, G);
      }), $ == null || (_ = $["config.ripple"]) === null || _ === void 0 || _.call(d.$instance, (S = d.$instance) === null || S === void 0 || (S = S.$primevueConfig) === null || S === void 0 ? void 0 : S.ripple), At.on("config:ripple:change", function(E) {
        var j, L = E.newValue, G = E.oldValue;
        return $ == null || (j = $["config.ripple"]) === null || j === void 0 ? void 0 : j.call(d.$instance, L, G);
      });
    };
    return {
      created: function(d, f, m, y) {
        d.$pd || (d.$pd = {}), d.$pd[r] = {
          name: r,
          attrSelector: Ua("pd")
        }, o("created", d, f, m, y);
      },
      beforeMount: function(d, f, m, y) {
        ue._loadStyles(d, f, m), o("beforeMount", d, f, m, y), u(d);
      },
      mounted: function(d, f, m, y) {
        ue._loadStyles(d, f, m), o("mounted", d, f, m, y);
      },
      beforeUpdate: function(d, f, m, y) {
        o("beforeUpdate", d, f, m, y);
      },
      updated: function(d, f, m, y) {
        ue._loadStyles(d, f, m), o("updated", d, f, m, y);
      },
      beforeUnmount: function(d, f, m, y) {
        o("beforeUnmount", d, f, m, y);
      },
      unmounted: function(d, f, m, y) {
        var _;
        (_ = d.$instance) === null || _ === void 0 || (_ = _.scopedStyleEl) === null || _ === void 0 || (_ = _.value) === null || _ === void 0 || _.remove(), o("unmounted", d, f, m, y);
      }
    };
  },
  extend: function() {
    var r = ue._getMeta.apply(ue, arguments), t = Yu(r, 2), o = t[0], u = t[1];
    return pe({
      extend: function() {
        var d = ue._getMeta.apply(ue, arguments), f = Yu(d, 2), m = f[0], y = f[1];
        return ue.extend(m, pe(pe(pe({}, u), u == null ? void 0 : u.methods), y));
      }
    }, ue._extend(o, u));
  }
}, qc = function(r) {
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
}, Vc = {
  root: "p-ink"
}, Uc = Se.extend({
  name: "ripple-directive",
  theme: qc,
  classes: Vc
}), Wc = ue.extend({
  style: Uc
});
function kn(e) {
  "@babel/helpers - typeof";
  return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, kn(e);
}
function Qc(e) {
  return Xc(e) || Yc(e) || Zc(e) || Gc();
}
function Gc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zc(e, r) {
  if (e) {
    if (typeof e == "string") return Ra(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ra(e, r) : void 0;
  }
}
function Yc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Xc(e) {
  if (Array.isArray(e)) return Ra(e);
}
function Ra(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function ei(e, r, t) {
  return (r = Jc(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function Jc(e) {
  var r = ed(e, "string");
  return kn(r) == "symbol" ? r : r + "";
}
function ed(e, r) {
  if (kn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (kn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var rd = Wc.extend("ripple", {
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
      var t = jl("span", ei(ei({
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
      var t = this, o = r.currentTarget, u = this.getInk(o);
      if (!(!u || getComputedStyle(u, null).display === "none")) {
        if (!this.isUnstyled() && ha(u, "p-ink-active"), u.setAttribute("data-p-ink-active", "false"), !Du(u) && !ju(u)) {
          var s = Math.max(Dl(o), Nl(o));
          u.style.height = s + "px", u.style.width = s + "px";
        }
        var d = Ml(o), f = r.pageX - d.left + document.body.scrollTop - ju(u) / 2, m = r.pageY - d.top + document.body.scrollLeft - Du(u) / 2;
        u.style.top = m + "px", u.style.left = f + "px", !this.isUnstyled() && El(u, "p-ink-active"), u.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          u && (!t.isUnstyled() && ha(u, "p-ink-active"), u.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(r) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && ha(r.currentTarget, "p-ink-active"), r.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(r) {
      return r && r.children ? Qc(r.children).find(function(t) {
        return pn(t, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), td = {
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
  style: Lc,
  provide: function() {
    return {
      $pcPanelMenu: this,
      $parentInstance: this
    };
  }
}, Xi = {
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
      return r && r.item ? He(r.item[t], o) : void 0;
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
        action: ce({
          class: this.cx("itemLink"),
          tabindex: -1
        }, this.getPTOptions("itemLink", r, t)),
        icon: ce({
          class: [this.cx("itemIcon"), this.getItemProp(r, "icon")]
        }, this.getPTOptions("itemIcon", r, t)),
        label: ce({
          class: this.cx("itemLabel")
        }, this.getPTOptions("itemLabel", r, t)),
        submenuicon: ce({
          class: this.cx("submenuIcon")
        }, this.getPTOptions("submenuicon", r, t))
      };
    }
  },
  components: {
    ChevronRightIcon: Qa,
    ChevronDownIcon: Wa
  },
  directives: {
    ripple: rd
  }
}, nd = ["tabindex"], od = ["id", "aria-label", "aria-expanded", "aria-level", "aria-setsize", "aria-posinset", "data-p-focused", "data-p-disabled"], ad = ["onClick", "onMousemove"], ud = ["href", "target"];
function id(e, r, t, o, u, s) {
  var d = za("PanelMenuSub", !0), f = sl("ripple");
  return fe(), Ce("ul", {
    class: ka(e.cx("submenu")),
    tabindex: t.tabindex
  }, [(fe(!0), Ce(Tt, null, ji(t.items, function(m, y) {
    return fe(), Ce(Tt, {
      key: s.getItemKey(m)
    }, [s.isItemVisible(m) && !s.getItemProp(m, "separator") ? (fe(), Ce("li", ce({
      key: 0,
      id: s.getItemId(m),
      class: [e.cx("item", {
        processedItem: m
      }), s.getItemProp(m, "class")],
      style: s.getItemProp(m, "style"),
      role: "treeitem",
      "aria-label": s.getItemLabel(m),
      "aria-expanded": s.isItemGroup(m) ? s.isItemActive(m) : void 0,
      "aria-level": t.level + 1,
      "aria-setsize": s.getAriaSetSize(),
      "aria-posinset": s.getAriaPosInset(y),
      ref_for: !0
    }, s.getPTOptions("item", m, y), {
      "data-p-focused": s.isItemFocused(m),
      "data-p-disabled": s.isItemDisabled(m)
    }), [fr("div", ce({
      class: e.cx("itemContent"),
      onClick: function(S) {
        return s.onItemClick(S, m);
      },
      onMousemove: function(S) {
        return s.onItemMouseMove(S, m);
      },
      ref_for: !0
    }, s.getPTOptions("itemContent", m, y)), [t.templates.item ? (fe(), xr(Xr(t.templates.item), {
      key: 1,
      item: m.item,
      root: !1,
      active: s.isItemActive(m),
      hasSubmenu: s.isItemGroup(m),
      label: s.getItemLabel(m),
      props: s.getMenuItemProps(m, y)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"])) : Ca((fe(), Ce("a", ce({
      key: 0,
      href: s.getItemProp(m, "url"),
      class: e.cx("itemLink"),
      target: s.getItemProp(m, "target"),
      tabindex: "-1",
      ref_for: !0
    }, s.getPTOptions("itemLink", m, y)), [s.isItemGroup(m) ? (fe(), Ce(Tt, {
      key: 0
    }, [t.templates.submenuicon ? (fe(), xr(Xr(t.templates.submenuicon), ce({
      key: 0,
      class: e.cx("submenuIcon"),
      active: s.isItemActive(m),
      ref_for: !0
    }, s.getPTOptions("submenuIcon", m, y)), null, 16, ["class", "active"])) : (fe(), xr(Xr(s.isItemActive(m) ? "ChevronDownIcon" : "ChevronRightIcon"), ce({
      key: 1,
      class: e.cx("submenuIcon"),
      ref_for: !0
    }, s.getPTOptions("submenuIcon", m, y)), null, 16, ["class"]))], 64)) : Er("", !0), t.templates.itemicon ? (fe(), xr(Xr(t.templates.itemicon), {
      key: 1,
      item: m.item,
      class: ka(e.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : s.getItemProp(m, "icon") ? (fe(), Ce("span", ce({
      key: 2,
      class: [e.cx("itemIcon"), s.getItemProp(m, "icon")],
      ref_for: !0
    }, s.getPTOptions("itemIcon", m, y)), null, 16)) : Er("", !0), fr("span", ce({
      class: e.cx("itemLabel"),
      ref_for: !0
    }, s.getPTOptions("itemLabel", m, y)), Ha(s.getItemLabel(m)), 17)], 16, ud)), [[f]])], 16, ad), Et(Li, ce({
      name: "p-toggleable-content",
      ref_for: !0
    }, e.ptm("transition")), {
      default: Mi(function() {
        return [Ca(fr("div", ce({
          class: e.cx("contentContainer"),
          ref_for: !0
        }, e.ptm("contentContainer")), [s.isItemVisible(m) && s.isItemGroup(m) ? (fe(), xr(d, ce({
          key: 0,
          id: s.getItemId(m) + "_list",
          role: "group",
          panelId: t.panelId,
          focusedItemId: t.focusedItemId,
          items: m.items,
          level: t.level + 1,
          templates: t.templates,
          activeItemPath: t.activeItemPath,
          onItemToggle: s.onItemToggle,
          onItemMousemove: r[0] || (r[0] = function(_) {
            return e.$emit("item-mousemove", _);
          }),
          pt: e.pt,
          unstyled: e.unstyled,
          ref_for: !0
        }, e.ptm("submenu")), null, 16, ["id", "panelId", "focusedItemId", "items", "level", "templates", "activeItemPath", "onItemToggle", "pt", "unstyled"])) : Er("", !0)], 16), [[Ni, s.isItemActive(m)]])];
      }),
      _: 2
    }, 1040)], 16, od)) : Er("", !0), s.isItemVisible(m) && s.getItemProp(m, "separator") ? (fe(), Ce("li", ce({
      key: 1,
      style: s.getItemProp(m, "style"),
      class: [e.cx("separator"), s.getItemProp(m, "class")],
      role: "separator",
      ref_for: !0
    }, e.ptm("separator")), null, 16)) : Er("", !0)], 64);
  }), 128))], 10, nd);
}
Xi.render = id;
function sd(e, r) {
  return fd(e) || dd(e, r) || cd(e, r) || ld();
}
function ld() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cd(e, r) {
  if (e) {
    if (typeof e == "string") return ri(e, r);
    var t = {}.toString.call(e).slice(8, -1);
    return t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set" ? Array.from(e) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ri(e, r) : void 0;
  }
}
function ri(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, o = Array(r); t < r; t++) o[t] = e[t];
  return o;
}
function dd(e, r) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var o, u, s, d, f = [], m = !0, y = !1;
    try {
      if (s = (t = t.call(e)).next, r !== 0) for (; !(m = (o = s.call(t)).done) && (f.push(o.value), f.length !== r); m = !0) ;
    } catch (_) {
      y = !0, u = _;
    } finally {
      try {
        if (!m && t.return != null && (d = t.return(), Object(d) !== d)) return;
      } finally {
        if (y) throw u;
      }
    }
    return f;
  }
}
function fd(e) {
  if (Array.isArray(e)) return e;
}
var Ji = {
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
      return r && r.item ? He(r.item[t]) : void 0;
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
          !t && _l(r.key) && this.searchItems(r, r.key);
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
        var o = this.activeItemPath.some(function(u) {
          return u.key === t.focusedItem.key;
        });
        o ? this.activeItemPath = this.activeItemPath.filter(function(u) {
          return u.key !== t.focusedItem.key;
        }) : this.focusedItem = ne(this.focusedItem.parent) ? this.focusedItem.parent : this.focusedItem, r.preventDefault();
      }
    },
    onArrowRightKey: function(r) {
      var t = this;
      if (ne(this.focusedItem)) {
        var o = this.isItemGroup(this.focusedItem);
        if (o) {
          var u = this.activeItemPath.some(function(s) {
            return s.key === t.focusedItem.key;
          });
          u ? this.onArrowDownKey(r) : (this.activeItemPath = this.activeItemPath.filter(function(s) {
            return s.parentKey !== t.focusedItem.parentKey;
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
      }) : (this.activeItemPath = this.activeItemPath.filter(function(u) {
        return u.parentKey !== t.parentKey;
      }), o && this.activeItemPath.push(t)), this.focusedItem = t, fn(this.$el);
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
      return Au(this.visibleItems, function(t) {
        return r.isValidItem(t);
      });
    },
    findNextItem: function(r) {
      var t = this, o = this.visibleItems.findIndex(function(s) {
        return s.key === r.key;
      }), u = o < this.visibleItems.length - 1 ? this.visibleItems.slice(o + 1).find(function(s) {
        return t.isValidItem(s);
      }) : void 0;
      return u || r;
    },
    findPrevItem: function(r) {
      var t = this, o = this.visibleItems.findIndex(function(s) {
        return s.key === r.key;
      }), u = o > 0 ? Au(this.visibleItems.slice(0, o), function(s) {
        return t.isValidItem(s);
      }) : void 0;
      return u || r;
    },
    searchItems: function(r, t) {
      var o = this;
      this.searchValue = (this.searchValue || "") + t;
      var u = null, s = !1;
      if (ne(this.focusedItem)) {
        var d = this.visibleItems.findIndex(function(f) {
          return f.key === o.focusedItem.key;
        });
        u = this.visibleItems.slice(d).find(function(f) {
          return o.isItemMatched(f);
        }), u = et(u) ? this.visibleItems.slice(0, d).find(function(f) {
          return o.isItemMatched(f);
        }) : u;
      } else
        u = this.visibleItems.find(function(f) {
          return o.isItemMatched(f);
        });
      return ne(u) && (s = !0), et(u) && et(this.focusedItem) && (u = this.findFirstItem()), ne(u) && this.changeFocusedItem({
        originalEvent: r,
        processedItem: u,
        allowHeaderFocus: !1
      }), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        o.searchValue = "", o.searchTimeout = null;
      }, 500), s;
    },
    changeFocusedItem: function(r) {
      var t = r.originalEvent, o = r.processedItem, u = r.focusOnNext, s = r.selfCheck, d = r.allowHeaderFocus, f = d === void 0 ? !0 : d;
      ne(this.focusedItem) && this.focusedItem.key !== o.key ? (this.focusedItem = o, this.scrollInView()) : f && this.$emit("header-focus", {
        originalEvent: t,
        focusOnNext: u,
        selfCheck: s
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
      this.activeItemPath = Object.entries(r || {}).reduce(function(o, u) {
        var s = sd(u, 2), d = s[0], f = s[1];
        if (f) {
          var m = t.findProcessedItemByItemKey(d);
          m && o.push(m);
        }
        return o;
      }, []);
    },
    findProcessedItemByItemKey: function(r, t) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      if (t = t || o === 0 && this.processedItems, !t) return null;
      for (var u = 0; u < t.length; u++) {
        var s = t[u];
        if (this.getItemProp(s, "key") === r) return s;
        var d = this.findProcessedItemByItemKey(r, s.items, o + 1);
        if (d) return d;
      }
    },
    createProcessedItems: function(r) {
      var t = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", d = [];
      return r && r.forEach(function(f, m) {
        var y = (s !== "" ? s + "_" : "") + m, _ = {
          item: f,
          index: m,
          level: o,
          key: y,
          parent: u,
          parentKey: s
        };
        _.items = t.createProcessedItems(f.items, o + 1, _, y), d.push(_);
      }), d;
    },
    flatItems: function(r) {
      var t = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
      return r && r.forEach(function(u) {
        t.isVisibleItem(u) && (o.push(u), t.flatItems(u.items, o));
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
    PanelMenuSub: Xi
  }
};
function pd(e, r, t, o, u, s) {
  var d = za("PanelMenuSub");
  return fe(), xr(d, ce({
    id: t.panelId + "_list",
    class: e.cx("rootList"),
    role: "tree",
    tabindex: -1,
    "aria-activedescendant": u.focused ? s.focusedItemId : void 0,
    panelId: t.panelId,
    focusedItemId: u.focused ? s.focusedItemId : void 0,
    items: s.processedItems,
    templates: t.templates,
    activeItemPath: u.activeItemPath,
    onFocus: s.onFocus,
    onBlur: s.onBlur,
    onKeydown: s.onKeyDown,
    onItemToggle: s.onItemToggle,
    onItemMousemove: s.onItemMouseMove,
    pt: e.pt,
    unstyled: e.unstyled
  }, e.ptm("rootList")), null, 16, ["id", "class", "aria-activedescendant", "panelId", "focusedItemId", "items", "templates", "activeItemPath", "onFocus", "onBlur", "onKeydown", "onItemToggle", "onItemMousemove", "pt", "unstyled"]);
}
Ji.render = pd;
function Cn(e) {
  "@babel/helpers - typeof";
  return Cn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Cn(e);
}
function ti(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function md(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ti(Object(t), !0).forEach(function(o) {
      gd(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ti(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function gd(e, r, t) {
  return (r = hd(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function hd(e) {
  var r = bd(e, "string");
  return Cn(r) == "symbol" ? r : r + "";
}
function bd(e, r) {
  if (Cn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (Cn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var es = {
  name: "PanelMenu",
  extends: td,
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
      this.id = r || Vu();
    }
  },
  mounted: function() {
    this.id = this.id || Vu();
  },
  methods: {
    getItemProp: function(r, t) {
      return r ? He(r[t]) : void 0;
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
        return Ot(r, t);
      }) : Ot(r, this.activeItem);
    },
    isItemVisible: function(r) {
      return this.getItemProp(r, "visible") !== !1;
    },
    isItemDisabled: function(r) {
      return this.getItemProp(r, "disabled");
    },
    isItemFocused: function(r) {
      return Ot(r, this.activeItem);
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
      }), this.changeActiveItem(r, t), fn(r.currentTarget);
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
      var t = pn(r.currentTarget, "data-p-active") === !0 ? dr(r.currentTarget.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      t ? fn(t) : this.updateFocusedHeader({
        originalEvent: r,
        focusOnNext: !0
      }), r.preventDefault();
    },
    onHeaderArrowUpKey: function(r) {
      var t = this.findPrevHeader(r.currentTarget.parentElement) || this.findLastHeader(), o = pn(t, "data-p-active") === !0 ? dr(t.nextElementSibling, '[data-pc-section="rootlist"]') : null;
      o ? fn(o) : this.updateFocusedHeader({
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
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = t ? r : r.nextElementSibling, u = dr(o, '[data-pc-section="header"]');
      return u ? pn(u, "data-p-disabled") ? this.findNextHeader(u.parentElement) : u : null;
    },
    findPrevHeader: function(r) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = t ? r : r.previousElementSibling, u = dr(o, '[data-pc-section="header"]');
      return u ? pn(u, "data-p-disabled") ? this.findPrevHeader(u.parentElement) : u : null;
    },
    findFirstHeader: function() {
      return this.findNextHeader(this.$el.firstElementChild, !0);
    },
    findLastHeader: function() {
      return this.findPrevHeader(this.$el.lastElementChild, !0);
    },
    updateFocusedHeader: function(r) {
      var t = r.originalEvent, o = r.focusOnNext, u = r.selfCheck, s = t.currentTarget.closest('[data-pc-section="panel"]'), d = u ? dr(s, '[data-pc-section="header"]') : o ? this.findNextHeader(s) : this.findPrevHeader(s);
      d ? this.changeFocusedHeader(t, d) : o ? this.onHeaderHomeKey(t) : this.onHeaderEndKey(t);
    },
    changeActiveItem: function(r, t) {
      var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
      if (!this.isItemDisabled(t)) {
        var u = this.isItemActive(t), s = u ? "panel-close" : "panel-open";
        this.activeItem = o ? t : this.activeItem && Ot(t, this.activeItem) ? null : t, this.multiple && (this.activeItems.some(function(d) {
          return Ot(t, d);
        }) ? this.activeItems = this.activeItems.filter(function(d) {
          return !Ot(t, d);
        }) : this.activeItems.push(t)), this.changeExpandedKeys({
          item: t,
          expanded: !u
        }), this.$emit(s, {
          originalEvent: r,
          item: t
        });
      }
    },
    changeExpandedKeys: function(r) {
      var t = r.item, o = r.expanded, u = o === void 0 ? !1 : o;
      if (this.expandedKeys) {
        var s = md({}, this.expandedKeys);
        u ? s[t.key] = !0 : delete s[t.key], this.$emit("update:expandedKeys", s);
      }
    },
    changeFocusedHeader: function(r, t) {
      t && fn(t);
    },
    getMenuItemProps: function(r, t) {
      return {
        icon: ce({
          class: [this.cx("headerIcon"), this.getItemProp(r, "icon")]
        }, this.getPTOptions("headerIcon", r, t)),
        label: ce({
          class: this.cx("headerLabel")
        }, this.getPTOptions("headerLabel", r, t))
      };
    }
  },
  components: {
    PanelMenuList: Ji,
    ChevronRightIcon: Qa,
    ChevronDownIcon: Wa
  }
}, yd = ["id"], vd = ["id", "tabindex", "aria-label", "aria-expanded", "aria-controls", "aria-disabled", "onClick", "onKeydown", "data-p-active", "data-p-disabled"], _d = ["href"], xd = ["id", "aria-labelledby"];
function wd(e, r, t, o, u, s) {
  var d = za("PanelMenuList");
  return fe(), Ce("div", ce({
    id: u.id,
    class: e.cx("root")
  }, e.ptmi("root")), [(fe(!0), Ce(Tt, null, ji(e.model, function(f, m) {
    return fe(), Ce(Tt, {
      key: s.getPanelKey(m)
    }, [s.isItemVisible(f) ? (fe(), Ce("div", ce({
      key: 0,
      style: s.getItemProp(f, "style"),
      class: [e.cx("panel"), s.getItemProp(f, "class")],
      ref_for: !0
    }, e.ptm("panel")), [fr("div", ce({
      id: s.getHeaderId(m),
      class: [e.cx("header", {
        item: f
      }), s.getItemProp(f, "headerClass")],
      tabindex: s.isItemDisabled(f) ? -1 : e.tabindex,
      role: "button",
      "aria-label": s.getItemLabel(f),
      "aria-expanded": s.isItemActive(f),
      "aria-controls": s.getContentId(m),
      "aria-disabled": s.isItemDisabled(f),
      onClick: function(_) {
        return s.onHeaderClick(_, f);
      },
      onKeydown: function(_) {
        return s.onHeaderKeyDown(_, f);
      },
      ref_for: !0
    }, s.getPTOptions("header", f, m), {
      "data-p-active": s.isItemActive(f),
      "data-p-disabled": s.isItemDisabled(f)
    }), [fr("div", ce({
      class: e.cx("headerContent"),
      ref_for: !0
    }, s.getPTOptions("headerContent", f, m)), [e.$slots.item ? (fe(), xr(Xr(e.$slots.item), {
      key: 1,
      item: f,
      root: !0,
      active: s.isItemActive(f),
      hasSubmenu: s.isItemGroup(f),
      label: s.getItemLabel(f),
      props: s.getMenuItemProps(f, m)
    }, null, 8, ["item", "active", "hasSubmenu", "label", "props"])) : (fe(), Ce("a", ce({
      key: 0,
      href: s.getItemProp(f, "url"),
      class: e.cx("headerLink"),
      tabindex: -1,
      ref_for: !0
    }, s.getPTOptions("headerLink", f, m)), [s.getItemProp(f, "items") ? ll(e.$slots, "submenuicon", {
      key: 0,
      active: s.isItemActive(f)
    }, function() {
      return [(fe(), xr(Xr(s.isItemActive(f) ? "ChevronDownIcon" : "ChevronRightIcon"), ce({
        class: e.cx("submenuIcon"),
        ref_for: !0
      }, s.getPTOptions("submenuIcon", f, m)), null, 16, ["class"]))];
    }) : Er("", !0), e.$slots.headericon ? (fe(), xr(Xr(e.$slots.headericon), {
      key: 1,
      item: f,
      class: ka([e.cx("headerIcon"), s.getItemProp(f, "icon")])
    }, null, 8, ["item", "class"])) : s.getItemProp(f, "icon") ? (fe(), Ce("span", ce({
      key: 2,
      class: [e.cx("headerIcon"), s.getItemProp(f, "icon")],
      ref_for: !0
    }, s.getPTOptions("headerIcon", f, m)), null, 16)) : Er("", !0), fr("span", ce({
      class: e.cx("headerLabel"),
      ref_for: !0
    }, s.getPTOptions("headerLabel", f, m)), Ha(s.getItemLabel(f)), 17)], 16, _d))], 16)], 16, vd), Et(Li, ce({
      name: "p-toggleable-content",
      ref_for: !0
    }, e.ptm("transition")), {
      default: Mi(function() {
        return [Ca(fr("div", ce({
          id: s.getContentId(m),
          class: e.cx("contentContainer"),
          role: "region",
          "aria-labelledby": s.getHeaderId(m),
          ref_for: !0
        }, e.ptm("contentContainer")), [s.getItemProp(f, "items") ? (fe(), Ce("div", ce({
          key: 0,
          class: e.cx("content"),
          ref_for: !0
        }, e.ptm("content")), [Et(d, {
          panelId: s.getPanelId(m),
          items: s.getItemProp(f, "items"),
          templates: e.$slots,
          expandedKeys: e.expandedKeys,
          onItemToggle: s.changeExpandedKeys,
          onHeaderFocus: s.updateFocusedHeader,
          pt: e.pt,
          unstyled: e.unstyled
        }, null, 8, ["panelId", "items", "templates", "expandedKeys", "onItemToggle", "onHeaderFocus", "pt", "unstyled"])], 16)) : Er("", !0)], 16, xd), [[Ni, s.isItemActive(f)]])];
      }),
      _: 2
    }, 1040)], 16)) : Er("", !0)], 64);
  }), 128))], 16, yd);
}
es.render = wd;
const sg = /* @__PURE__ */ Di({
  __name: "AppNavigation",
  props: {
    id: {}
  },
  setup(e) {
    const r = JSON.parse('[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":3,"parentId":0,"key":"03_system","label":"System","labelAr":"النظام","icon":"settings","route":"","level":1,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":9,"parentId":3,"key":"03_buckets","label":"Buckets","labelAr":"المجلدات","icon":"folder","route":"/system/bucket","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":10,"parentId":3,"key":"04_files","label":"Objects","labelAr":"الملفات","icon":"file","route":"/system/object","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":11,"parentId":3,"key":"05_settings","label":"Settings","labelAr":"الإعدادات","icon":"settings_icon","route":"/system/setting","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":7,"parentId":3,"key":"01_translations","label":"Translations","labelAr":"الترجمات","icon":"globe","route":"/system/translation","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":8,"parentId":3,"key":"02_icons","label":"Icons","labelAr":"الأيقونات","icon":"design","route":"/system/icon","level":2,"items":[]}]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":1,"parentId":0,"key":"01_dashboard","label":"Dashboard","labelAr":"لوحة التحكم","icon":"dashboard","route":"/dashboard","level":1,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":2,"parentId":0,"key":"02_accounts","label":"Accounts","labelAr":"الحسابات","icon":"people","route":"","level":1,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":6,"parentId":2,"key":"03_navigation","label":"Navigation","labelAr":"القوائم","icon":"maps","route":"/accounts/navigation","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":4,"parentId":2,"key":"01_roles","label":"Roles","labelAr":"الأدوار","icon":"group_users","route":"/accounts/role","level":2,"items":[]},{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":5,"parentId":2,"key":"02_users","label":"Users","labelAr":"المستخدمين","icon":"user_add","route":"/accounts/user","level":2,"items":[{"$typeName":"devkit.v1.NavigationBarItem","navigationBarItemId":12,"parentId":5,"key":"02_users_create","label":"Users Create","labelAr":"المستخدمين","icon":"user_verified","route":"/accounts/users/create","level":3,"items":[]}]}]}]'), t = e, o = jr("");
    return (u, s) => (fe(), Ce(Tt, null, [
      fr("h2", null, Ha(t.id), 1),
      s[1] || (s[1] = fr("h2", null, "hello", -1)),
      Et(dn(cl), { label: "hello" }),
      Et(dn(dl), {
        id: "basic",
        modelValue: o.value,
        "onUpdate:modelValue": s[0] || (s[0] = (d) => o.value = d),
        placeholder: "99-999999"
      }, null, 8, ["modelValue"]),
      Et(dn(es), {
        model: dn(r),
        class: "app-navigation"
      }, null, 8, ["model"])
    ], 64));
  }
}), kd = {};
function Cd(e, r) {
  return fe(), Ce("h2", null, "app sidebar");
}
const lg = /* @__PURE__ */ Ut(kd, [["render", Cd]]), Sd = {};
function Id(e, r) {
  return fe(), Ce("h2", null, "app header");
}
const cg = /* @__PURE__ */ Ut(Sd, [["render", Id]]), Pd = {};
function Od(e, r) {
  return fe(), Ce("h2", null, "app form component changed again");
}
const dg = /* @__PURE__ */ Ut(Pd, [["render", Od]]), Bd = {};
function $d(e, r) {
  return fe(), Ce("h2", null, "app btn");
}
const fg = /* @__PURE__ */ Ut(Bd, [["render", $d]]);
function Ad(e) {
  return typeof e == "string";
}
function Rd(e) {
  return typeof e == "function";
}
async function Td(e, r, t) {
  return Ad(e) ? r[e](t) : Rd(e) ? e(t) : e;
}
var Ed = {
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
}, Dd = {
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
}, jd = {
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
}, Ld = {
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
}, Md = {
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
}, Nd = {
  root: {
    borderRadius: "{content.border.radius}"
  }
}, Kd = {
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
}, Fd = {
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
}, zd = {
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
}, Hd = {
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
}, qd = {
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
}, Vd = {
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
}, Ud = {
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
}, Wd = {
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
}, Qd = {
  icon: {
    size: "2rem",
    color: "{overlay.modal.color}"
  },
  content: {
    gap: "1rem"
  }
}, Gd = {
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
}, Zd = {
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
}, Xd = {
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
}, Jd = {
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
}, ef = {
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
}, rf = {
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
}, tf = {
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
}, nf = {
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
}, of = {
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
}, af = {
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
}, uf = {
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
}, lf = {
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
}, df = {
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
}, ff = {
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
}, pf = {
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
}, mf = {
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
}, gf = {
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
}, hf = {
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
}, bf = {
  addon: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.icon.color}",
    borderRadius: "{form.field.border.radius}",
    padding: "0.5rem",
    minWidth: "2.5rem"
  }
}, yf = {
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
}, vf = {
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
}, _f = {
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
}, xf = {
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
}, kf = {
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
}, Sf = {
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
}, If = {
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
}, Of = {
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
}, Bf = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
}, $f = {
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
}, Af = {
  root: {
    outline: {
      width: "2px",
      color: "{content.background}"
    }
  }
}, Rf = {
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
}, Ef = {
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
}, Df = {
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
}, jf = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
}, Lf = {
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
}, Mf = {
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
}, Nf = {
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
}, Kf = {
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
}, Ff = {
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
}, zf = {
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
}, Hf = {
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
}, qf = {
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
}, Vf = {
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
}, Uf = {
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
}, Wf = {
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
}, Qf = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  }
}, Gf = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
  }
}, Zf = {
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
}, Xf = {
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
}, Jf = {
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
}, ep = {
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
}, rp = {
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
}, tp = {
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
}, np = {
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
}, op = {
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
}, ap = {
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
}, up = {
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
}, ip = {
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
}, sp = {
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
}, lp = {
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
}, cp = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.75rem"
  }
}, dp = {
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
}, fp = {
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
}, pp = {
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
}, mp = {
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
}, gp = {
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
function Sn(e) {
  "@babel/helpers - typeof";
  return Sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Sn(e);
}
function ni(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(u) {
      return Object.getOwnPropertyDescriptor(e, u).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function oi(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? ni(Object(t), !0).forEach(function(o) {
      hp(e, o, t[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ni(Object(t)).forEach(function(o) {
      Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
    });
  }
  return e;
}
function hp(e, r, t) {
  return (r = bp(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e;
}
function bp(e) {
  var r = yp(e, "string");
  return Sn(r) == "symbol" ? r : r + "";
}
function yp(e, r) {
  if (Sn(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var o = t.call(e, r || "default");
    if (Sn(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(e);
}
var vp = oi(oi({}, Md), {}, {
  components: {
    accordion: Ed,
    autocomplete: Dd,
    avatar: jd,
    badge: Ld,
    blockui: Nd,
    breadcrumb: Kd,
    button: Fd,
    datepicker: Jd,
    card: zd,
    carousel: Hd,
    cascadeselect: qd,
    checkbox: Vd,
    chip: Ud,
    colorpicker: Wd,
    confirmdialog: Qd,
    confirmpopup: Gd,
    contextmenu: Zd,
    dataview: Xd,
    datatable: Yd,
    dialog: ef,
    divider: rf,
    dock: tf,
    drawer: nf,
    editor: of,
    fieldset: af,
    fileupload: uf,
    iftalabel: df,
    floatlabel: sf,
    galleria: lf,
    iconfield: cf,
    image: ff,
    imagecompare: pf,
    inlinemessage: mf,
    inplace: gf,
    inputchips: hf,
    inputgroup: bf,
    inputnumber: yf,
    inputotp: vf,
    inputtext: _f,
    knob: xf,
    listbox: wf,
    megamenu: kf,
    menu: Cf,
    menubar: Sf,
    message: If,
    metergroup: Pf,
    multiselect: Of,
    orderlist: Bf,
    organizationchart: $f,
    overlaybadge: Af,
    popover: Lf,
    paginator: Rf,
    password: Df,
    panel: Tf,
    panelmenu: Ef,
    picklist: jf,
    progressbar: Mf,
    progressspinner: Nf,
    radiobutton: Kf,
    rating: Ff,
    scrollpanel: Hf,
    select: qf,
    selectbutton: Vf,
    skeleton: Uf,
    slider: Wf,
    speeddial: Qf,
    splitter: Zf,
    splitbutton: Gf,
    stepper: Yf,
    steps: Xf,
    tabmenu: Jf,
    tabs: ep,
    tabview: rp,
    textarea: op,
    tieredmenu: ap,
    tag: tp,
    terminal: np,
    timeline: up,
    togglebutton: sp,
    toggleswitch: lp,
    tree: fp,
    treeselect: pp,
    treetable: mp,
    toast: ip,
    toolbar: cp,
    virtualscroller: gp
  },
  directives: {
    tooltip: dp,
    ripple: zf
  }
}), _p = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,15c-3.86,0-7-3.14-7-7S4.14,1,8,1s7,3.14,7,7-3.14,7-7,7Zm0-13c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Z" fill="currentColor"/><path d="M8,11.5c-.28,0-.5-.22-.5-.5V5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v6c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11,8.5H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h6c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', ai = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 27"><polygon fill="currentColor" points="26.99 0 10.13 17.17 4.69 11.63 0 16.41 10.4 27 15.05 22.27 15.09 22.31 32 5.1 26.99 0"/></svg>', xp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle fill="currentColor" cx="16" cy="16" r="16"/></svg>', ui = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/><path d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', wp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 80" fill="currentColor"><path d="M0,72c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM0,40c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8S0,44.4,0,40ZM0,8C0,3.6,3.6,0,8,0s8,3.6,8,8-3.6,8-8,8S0,12.4,0,8ZM30,72c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM30,40c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8ZM30,8c0-4.4,3.6-8,8-8s8,3.6,8,8-3.6,8-8,8-8-3.6-8-8Z"/></svg>', kp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="M7.56,13.88c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5c2.96,0,5.38-2.41,5.38-5.38S10.53,2.12,7.56,2.12c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5c3.52,0,6.38,2.86,6.38,6.38s-2.86,6.38-6.38,6.38Z"/></svg>', Cp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path fill="currentColor" d="M11.41,8.41h0l1.14-.93,1.14-.93c.48-.39,.37-.74-.25-.77l-1.58-.09-2.5-.14-.41-1.05s0,0,0,0l-.53-1.38-.53-1.38c-.22-.58-.59-.58-.81,0l-1.07,2.75s0,0,0,0l-.41,1.05-2.5,.14-1.58,.09c-.62,.03-.73,.38-.25,.77l1.14,.93,1.14,.93h0l.87,.71-.57,2.15-.47,1.79c-.16,.6,.14,.81,.66,.48l2.48-1.6h0s.94-.61,.94-.61l.94,.61h0s1.24,.8,1.24,.8l1.24,.8c.52,.33,.82,.12,.66-.48l-.47-1.79-.57-2.15,.87-.71Z"/></svg>', Sp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.5,4H1.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H14.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11.02,3.81l-.44-1.46c-.06-.21-.26-.36-.48-.36H5.9c-.22,0-.41,.14-.48,.36l-.44,1.46-.96-.29,.44-1.46c.19-.64,.77-1.07,1.44-1.07h4.2c.67,0,1.24,.43,1.44,1.07l.44,1.46-.96,.29Z" fill="currentColor"/><path d="M11.53,15H4.47c-.81,0-1.47-.64-1.5-1.45l-.34-9.87,1-.03,.34,9.87c0,.27,.23,.48,.5,.48h7.07c.27,0,.49-.21,.5-.48l.34-9.87,1,.03-.34,9.87c-.03,.81-.69,1.45-1.5,1.45Z" fill="currentColor"/><path d="M6.5,11.62c-.28,0-.5-.22-.5-.5V7.12c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M9.5,11.62c-.28,0-.5-.22-.5-.5V7.12c0-.28,.22-.5,.5-.5s.5,.22,.5,.5v4c0,.28-.22,.5-.5,.5Z" fill="currentColor"/></svg>', Ip = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"><path d="M3.09,11.01c-.18,0-.36-.05-.53-.14-.35-.19-.57-.56-.57-.96V2.09c0-.4,.22-.77,.57-.96,.35-.19,.78-.18,1.12,.03l3.03,1.92c.23,.15,.3,.46,.15,.69-.15,.23-.46,.3-.69,.15l-3.03-1.92s-.07-.02-.1,0-.05,.05-.05,.09v7.82s.02,.07,.05,.09c.03,.02,.07,.02,.1,0l3.03-1.92c.23-.15,.54-.08,.69,.15,.15,.23,.08,.54-.15,.69l-3.03,1.92c-.18,.11-.38,.17-.59,.17Z" fill="currentColor"/><path d="M7.04,10.98c-.18,0-.36-.04-.52-.13-.36-.19-.58-.56-.58-.97V2.11c0-.41,.22-.78,.58-.97,.36-.19,.79-.17,1.13,.05l5.87,3.89c.31,.2,.49,.55,.49,.92,0,.37-.18,.71-.49,.92l-5.87,3.89c-.18,.12-.39,.18-.61,.18Zm0-8.97s-.03,0-.05,.01c-.03,.02-.05,.05-.05,.09v7.77s.02,.07,.05,.09c.03,.02,.07,.02,.1,0l5.87-3.89,.28-.58-.28,.42L7.09,2.03s-.04-.02-.05-.02Z" fill="currentColor"/></svg>', Pp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12"><path d="M12.91,11.01c-.2,0-.41-.06-.59-.17l-3.03-1.92c-.23-.15-.3-.46-.15-.69,.15-.23,.46-.3,.69-.15l3.03,1.92s.07,.02,.1,0,.05-.05,.05-.09V2.09s-.02-.07-.05-.09c-.03-.02-.07-.02-.1,0l-3.03,1.92c-.23,.15-.54,.08-.69-.15-.15-.23-.08-.54,.15-.69l3.03-1.92c.34-.21,.77-.23,1.12-.03,.35,.19,.57,.56,.57,.96v7.82c0,.4-.22,.77-.57,.96-.17,.09-.35,.14-.53,.14Z" fill="currentColor"/><path d="M8.96,10.98c-.21,0-.42-.06-.61-.18L2.49,6.92c-.31-.2-.49-.55-.49-.92,0-.37,.18-.71,.49-.92L8.36,1.2c.34-.22,.77-.24,1.13-.05,.36,.19,.58,.56,.58,.97v7.77c0,.41-.22,.78-.58,.97-.16,.09-.34,.13-.52,.13ZM2.76,5.5l.28,.42s-.04,.06-.04,.08l5.92,3.97s.07,.02,.1,0c.03-.02,.05-.05,.05-.09V2.11s-.02-.07-.05-.09c-.03-.02-.07-.02-.1,0L3.04,5.92l-.28-.42Z" fill="currentColor"/></svg>', Op = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"><path d="M4.5,13c-.28,0-.5-.22-.5-.5V3.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V12.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M4.5,14c-.13,0-.26-.05-.35-.15L.65,10.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l3.15,3.15,3.15-3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-3.5,3.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Bp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 16"><path d="M4.5,14c-.28,0-.5-.22-.5-.5V4.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V13.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M8,7.5c-.13,0-.26-.05-.35-.15l-3.15-3.15L1.35,7.35c-.2,.2-.51,.2-.71,0-.2-.2-.2-.51,0-.71l3.5-3.5c.2-.2,.51-.2,.71,0l3.5,3.5c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', $p = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 7"><path d="M8,6.5c-.13,0-.26-.05-.35-.15L3.15,1.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4.15,4.15L12.15,1.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71l-4.5,4.5c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Ap = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16"><path d="M5.5,13c-.13,0-.26-.05-.35-.15L.65,8.35c-.2-.2-.2-.51,0-.71L5.15,3.15c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L1.71,8l4.15,4.15c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Rp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 16"><path d="M1.5,13c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71l4.15-4.15L1.15,3.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L6.35,7.65c.2,.2,.2,.51,0,.71L1.85,12.85c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', ii = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16"><path d="M12.5,16H2.5c-.83,0-1.5-.67-1.5-1.5V1.5c0-.83,.67-1.5,1.5-1.5h7.09c.4,0,.78,.16,1.06,.44l2.91,2.91c.28,.28,.44,.66,.44,1.06V14.5c0,.83-.67,1.5-1.5,1.5ZM2.5,1c-.28,0-.5,.22-.5,.5V14.5c0,.28,.22,.5,.5,.5H12.5c.28,0,.5-.22,.5-.5V4.41c0-.13-.05-.26-.15-.35l-2.91-2.91c-.09-.09-.22-.15-.35-.15H2.5Z" fill="currentColor"/><path d="M13.38,5h-2.91c-.81,0-1.47-.66-1.47-1.47V.62c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.53c0,.26,.21,.47,.47,.47h2.91c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M10,13H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M10,10H5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/><path d="M7,7h-2c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h2c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', Tp = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M5.5,14H2.5c-.28,0-.5-.22-.5-.5v-3c0-.13,.05-.26,.15-.35L7.15,5.15c.2-.2,.51-.2,.71,0l3,3c.2,.2,.2,.51,0,.71l-5,5c-.09,.09-.22,.15-.35,.15Zm-2.5-1h2.29l4.5-4.5-2.29-2.29L3,10.71v2.29Z" fill="currentColor"/><path d="M13.37,5.62l-1.38,1.38-3-3,1.38-1.38c.42-.42,.96-.62,1.5-.62s1.08,.2,1.5,.62c.83,.83,.83,2.17,0,3Z" fill="currentColor"/><path d="M12.5,8c-.13,0-.26-.05-.35-.15L8.15,3.85c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0l4,4c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"/></svg>', Ep = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M14.5,16H1.5c-.83,0-1.5-.67-1.5-1.5V2.5c0-.83,.67-1.5,1.5-1.5H14.5c.83,0,1.5,.67,1.5,1.5V14.5c0,.83-.67,1.5-1.5,1.5ZM1.5,2c-.28,0-.5,.22-.5,.5V14.5c0,.28,.22,.5,.5,.5H14.5c.28,0,.5-.22,.5-.5V2.5c0-.28-.22-.5-.5-.5H1.5Z" fill="currentColor"/><path d="M4.5,4c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M11.5,4c-.28,0-.5-.22-.5-.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V3.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/><path d="M15.5,6H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H15.5c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5Z" fill="currentColor"/></svg>', Dp = {
  add: _p,
  arrowDown: Op,
  arrowUp: Bp,
  check: ai,
  close: ui,
  checkboxDecorator: ai,
  date: Ep,
  dragHandle: wp,
  fileItem: ii,
  fileRemove: ui,
  noFiles: ii,
  radioDecorator: xp,
  select: $p,
  spinner: kp,
  star: Cp,
  trash: Sp,
  fastForward: Ip,
  right: Rp,
  left: Ap,
  rewind: Pp,
  color: Tp
}, jp = [
  "__key",
  "__init",
  "__shim",
  "__original",
  "__index",
  "__prevKey"
];
function rs() {
  return Math.random().toString(36).substring(2, 15);
}
function si(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
function So(e, r, t = !0, o = ["__key"]) {
  if (e === r)
    return !0;
  if (typeof r == "object" && typeof e == "object") {
    if (e instanceof Map || e instanceof Set)
      return !1;
    if (e instanceof Date && r instanceof Date)
      return e.getTime() === r.getTime();
    if (e instanceof RegExp && r instanceof RegExp)
      return Lp(e, r);
    if (e === null || r === null || Object.keys(e).length !== Object.keys(r).length)
      return !1;
    for (const u of o)
      if ((u in e || u in r) && e[u] !== r[u])
        return !1;
    for (const u in e)
      if (!(u in r) || e[u] !== r[u] && !t || t && !So(e[u], r[u], t, o))
        return !1;
    return !0;
  }
  return !1;
}
function Lp(e, r) {
  return e.source === r.source && e.flags.split("").sort().join("") === r.flags.split("").sort().join("");
}
function ya(e) {
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
function Ta(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function mo(e) {
  return Ta(e) || Array.isArray(e);
}
function li(e) {
  if (Ta(e) === !1 || e.__FKNode__ || e.__POJO__ === !1)
    return !1;
  const r = e.constructor;
  if (r === void 0)
    return !0;
  const t = r.prototype;
  return !(Ta(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1);
}
var ts = /* @__NO_SIDE_EFFECTS__ */ (e, r, t = !1, o = !1) => {
  if (r === null)
    return null;
  const u = {};
  if (typeof r == "string")
    return r;
  for (const s in e)
    if (si(r, s) && (r[s] !== void 0 || !o)) {
      if (t && Array.isArray(e[s]) && Array.isArray(r[s])) {
        u[s] = e[s].concat(r[s]);
        continue;
      }
      if (r[s] === void 0)
        continue;
      li(e[s]) && li(r[s]) ? u[s] = /* @__PURE__ */ ts(
        e[s],
        r[s],
        t,
        o
      ) : u[s] = r[s];
    } else
      u[s] = e[s];
  for (const s in r)
    !si(u, s) && r[s] !== void 0 && (u[s] = r[s]);
  return u;
};
function Mp(e) {
  return e.replace(
    /-([a-z0-9])/gi,
    (r, t) => t.toUpperCase()
  );
}
function Np(e) {
  return e.replace(
    /([a-z0-9])([A-Z])/g,
    (r, t, o) => t + "-" + o.toLowerCase()
  ).replace(" ", "-").toLowerCase();
}
function yo(e, r = jp) {
  if (e === null || e instanceof RegExp || e instanceof Date || e instanceof Map || e instanceof Set || typeof File == "function" && e instanceof File)
    return e;
  let t;
  Array.isArray(e) ? t = e.map((o) => typeof o == "object" ? yo(o, r) : o) : t = Object.keys(e).reduce((o, u) => (o[u] = typeof e[u] == "object" ? yo(e[u], r) : e[u], o), {});
  for (const o of r)
    o in e && Object.defineProperty(t, o, {
      enumerable: !1,
      value: e[o]
    });
  return t;
}
function Ea(e) {
  return typeof e == "object" ? yo(e) : e;
}
function ci(e) {
  return e !== void 0 && e !== "false" && e !== !1 ? !0 : void 0;
}
function qt(e) {
  return Object.isFrozen(e) ? e : Object.defineProperty(e, "__init", {
    enumerable: !1,
    value: !0
  });
}
function Kp(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]/g, " ").trim().replace(/\s+/g, "-");
}
function ns() {
  const e = [];
  let r = 0;
  const t = (u) => e.push(u), o = (u) => {
    const s = e[r];
    return typeof s == "function" ? s(u, (d) => (r++, o(d))) : (r = 0, u);
  };
  return t.dispatch = o, t.unshift = (u) => e.unshift(u), t.remove = (u) => {
    const s = e.indexOf(u);
    s > -1 && e.splice(s, 1);
  }, t;
}
function Fp() {
  const e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  let t;
  const o = (u, s) => {
    if (t) {
      t.set(s.name, [u, s]);
      return;
    }
    e.has(s.name) && e.get(s.name).forEach((d) => {
      (s.origin === u || d.modifiers.includes("deep")) && d.listener(s);
    }), s.bubble && u.bubble(s);
  };
  return o.flush = () => {
    e.clear(), r.clear(), t == null || t.clear();
  }, o.on = (u, s, d = "push") => {
    const [f, ...m] = u.split("."), y = s.receipt || rs(), _ = {
      modifiers: m,
      event: f,
      listener: s,
      receipt: y
    };
    return e.has(f) ? e.get(f)[d](_) : e.set(f, [_]), r.has(y) ? r.get(y)[d](f) : r.set(y, [f]), y;
  }, o.off = (u) => {
    var s;
    r.has(u) && ((s = r.get(u)) == null || s.forEach((d) => {
      const f = e.get(d);
      Array.isArray(f) && e.set(
        d,
        f.filter((m) => m.receipt !== u)
      );
    }), r.delete(u));
  }, o.pause = (u) => {
    t || (t = /* @__PURE__ */ new Map()), u && u.walk((s) => s._e.pause());
  }, o.play = (u) => {
    if (!t)
      return;
    const s = t;
    t = void 0, s.forEach(([d, f]) => o(d, f)), u && u.walk((d) => d._e.play());
  }, o;
}
function zp(e, r, t, o, u = !0, s) {
  return r._e(e, {
    payload: o,
    name: t,
    bubble: u,
    origin: e,
    meta: s
  }), e;
}
function Hp(e, r, t) {
  return Ga(e.parent) && e.parent._e(e.parent, t), e;
}
function qp(e, r, t, o, u) {
  return r._e.on(t, o, u);
}
function Vp(e, r, t) {
  return r._e.off(t), e;
}
var os = ns();
os((e, r) => (e.message || (e.message = `E${e.code}`), r(e)));
var as = ns();
as((e, r) => {
  e.message || (e.message = `W${e.code}`);
  const t = r(e);
  return console && typeof console.warn == "function" && console.warn(t.message), t;
});
function us(e, r = {}) {
  as.dispatch({ code: e, data: r });
}
function In(e, r = {}) {
  throw Error(os.dispatch({ code: e, data: r }).message);
}
function Up(e, r) {
  return {
    blocking: !1,
    key: rs(),
    meta: {},
    type: "state",
    visible: !0,
    ...e
  };
}
function Wp(e, ...r) {
  const t = `${e.name}-set`, o = (u) => /* @__PURE__ */ Up({
    key: Kp(u),
    type: "error",
    value: u,
    meta: { source: t, autoClear: !0 }
  });
  return r.filter((u) => !!u).map((u) => {
    if (typeof u == "string" && (u = [u]), Array.isArray(u))
      return u.map((s) => o(s));
    {
      const s = {};
      for (const d in u)
        Array.isArray(u[d]) ? s[d] = u[d].map(
          (f) => o(f)
        ) : s[d] = [o(u[d])];
      return s;
    }
  });
}
var is = /* @__PURE__ */ new Map(), va = /* @__PURE__ */ new Map(), Qp = Fp();
function Gp(e) {
  if (va.has(e)) {
    const r = va.get(e);
    va.delete(e), is.delete(r), Qp(e, {
      payload: null,
      name: r,
      bubble: !1,
      origin: e
    });
  }
}
function Zp(e) {
  return is.get(e);
}
function di(e, r, t) {
  let o = !0;
  return r in e.config._t ? o = !1 : e.emit(`config:${r}`, t, !1), r in e.props || (e.emit("prop", { prop: r, value: t }), e.emit(`prop:${r}`, t)), o;
}
function Yp(e, r) {
  const t = (r || document).getElementById(e);
  if (t instanceof HTMLFormElement) {
    const o = new Event("submit", { cancelable: !0, bubbles: !0 });
    t.dispatchEvent(o);
    return;
  }
  us(151, e);
}
function Xp(e) {
  const r = (t) => {
    for (const o in t.store) {
      const u = t.store[o];
      u.type === "error" || u.type === "ui" && o === "incomplete" ? t.store.remove(o) : u.type === "state" && t.store.set({ ...u, value: !1 });
    }
  };
  r(e), e.walk(r);
}
function Jp(e, r) {
  const t = typeof e == "string" ? Zp(e) : e;
  if (t) {
    const o = (d) => {
      const f = Ea(d.props.initial);
      return f !== void 0 ? f : d.type === "group" ? {} : d.type === "list" ? [] : void 0;
    };
    t._e.pause(t);
    const u = Ea(r);
    return r && !ya(r) && (t.props.initial = mo(u) ? qt(u) : u, t.props._init = t.props.initial), t.input(o(t), !1), t.walk((d) => {
      d.type === "list" && d.sync || d.input(o(d), !1);
    }), t.input(
      ya(u) && u ? u : o(t),
      !1
    ), t.type !== "input" && r && !ya(r) && mo(r) && t.walk((d) => {
      d.props.initial = mo(d.value) ? qt(d.value) : d.value, d.props._init = d.props.initial;
    }), t._e.play(t), Xp(t), t.emit("reset", t), t;
  }
  us(152, e);
}
var em = {
  delimiter: ".",
  delay: 0,
  locale: "en",
  rootClasses: (e) => ({ [`formkit-${Np(e)}`]: !0 })
}, rm = Symbol("index"), Da = Symbol("removed"), ja = Symbol("moved"), ss = Symbol("inserted");
function tm(e) {
  return e.type === "list" && Array.isArray(e._value);
}
function Ga(e) {
  return e && typeof e == "object" && e.__FKNode__ === !0;
}
var go = (e, r, t) => {
  In(102, [e, t]);
};
me(wm, go, !1), me(mm), me(pm), me(Cm, go, !1), me(Sm), me(Hp), me(Dm), me(cm), me(!1), me(fm), me(lm), me(dm), me(jm), me(im), me(xm, _m, !1), me(am), me(bm), me(zp), me(Pm), me(qp), me(Vp), me(!1, gm), me(!1), me(hm), me(Bm, go, !1), me(Tm), me(vm), me(Em), me(Rm), me(Am), me(ds), me(km, !1, !1), me(ym);
function me(e, r, t = !0) {
  return {
    get: e ? (o, u) => t ? (...s) => e(o, u, ...s) : e(o, u) : !1,
    set: r !== void 0 ? r : go.bind(null)
  };
}
var nm = 0;
function om(e) {
  return e.type === "group" ? qt(
    e.value && typeof e.value == "object" && !Array.isArray(e.value) ? e.value : {}
  ) : e.type === "list" ? qt(Array.isArray(e.value) ? e.value : []) : e.value;
}
function am(e, r, t, o = !0) {
  return r._value = um(e, e.hook.input.dispatch(t)), e.emit("input", r._value), e.isCreated && e.type === "input" && So(r._value, r.value) && !e.props.mergeStrategy ? (e.emit("commitRaw", r.value), r.settled) : (r.isSettled && e.disturb(), o ? (r._tmo && clearTimeout(r._tmo), r._tmo = setTimeout(
    vo,
    e.props.delay,
    e,
    r
  )) : vo(e, r), r.settled);
}
function um(e, r) {
  switch (e.type) {
    case "input":
      break;
    case "group":
      (!r || typeof r != "object") && In(107, [e, r]);
      break;
    case "list":
      Array.isArray(r) || In(108, [e, r]);
      break;
  }
  return r;
}
function vo(e, r, t = !0, o = !0) {
  r._value = r.value = e.hook.commit.dispatch(r._value), e.type !== "input" && o && e.hydrate(), e.emit("commitRaw", r.value), e.emit("commit", r.value), t && e.calm();
}
function ls(e, { name: r, value: t, from: o }) {
  if (!Object.isFrozen(e._value)) {
    if (tm(e)) {
      const u = t === Da ? [] : t === ja && typeof o == "number" ? e._value.splice(o, 1) : [t];
      e._value.splice(
        r,
        t === ja || o === ss ? 0 : 1,
        ...u
      );
      return;
    }
    t !== Da ? e._value[r] = t : delete e._value[r];
  }
}
function im(e, r) {
  const t = r._value;
  return e.type === "list" && e.sync && sm(e, r), r.children.forEach((o) => {
    if (typeof t == "object")
      if (o.name in t) {
        const u = o.type !== "input" || t[o.name] && typeof t[o.name] == "object" ? qt(t[o.name]) : t[o.name];
        if (!o.isSettled || (!mo(u) || o.props.mergeStrategy) && So(u, o._value))
          return;
        o.input(u, !1);
      } else
        (e.type !== "list" || typeof o.name == "number") && ls(r, { name: o.name, value: o.value }), t.__init || (o.type === "group" ? o.input({}, !1) : o.type === "list" ? o.input([], !1) : o.input(void 0, !1));
  }), e;
}
function sm(e, r) {
  const t = e._value;
  if (!Array.isArray(t))
    return;
  const o = [], u = new Set(r.children), s = /* @__PURE__ */ new Map();
  t.forEach((f, m) => {
    if (r.children[m] && r.children[m]._value === f)
      o.push(r.children[m]), u.delete(r.children[m]);
    else {
      o.push(null);
      const y = s.get(f) || [];
      y.push(m), s.set(f, y);
    }
  }), u.size && s.size && u.forEach((f) => {
    if (s.has(f._value)) {
      const m = s.get(f._value), y = m.shift();
      o[y] = f, u.delete(f), m.length || s.delete(f._value);
    }
  });
  const d = [];
  for (s.forEach((f) => {
    d.push(...f);
  }); u.size && d.length; ) {
    const f = u.values().next().value, m = d.shift();
    if (m === void 0)
      break;
    o[m] = f, u.delete(f);
  }
  d.forEach((f, m) => {
    o[f] = Lm({ value: m });
  }), u.size && u.forEach((f) => {
    if (!("__FKP" in f)) {
      const m = f._c.parent;
      if (!m || Mm(m))
        return;
      m.ledger.unmerge(f), f._c.parent = null, f.destroy();
    }
  }), r.children = o;
}
function lm(e, r) {
  var t;
  return r._d <= 0 && (r.isSettled = !1, e.emit("settled", !1, !1), r.settled = new Promise((o) => {
    r._resolve = o;
  }), e.parent && ((t = e.parent) == null || t.disturb())), r._d++, e;
}
function cm(e, r, t) {
  var o;
  if (t !== void 0 && e.type !== "input") {
    ls(r, t);
    const u = !!(e.config.mergeStrategy && e.config.mergeStrategy[t.name]);
    return vo(e, r, !0, u);
  }
  r._d > 0 && r._d--, r._d === 0 && (r.isSettled = !0, e.emit("settled", !0, !1), e.parent && ((o = e.parent) == null || o.calm({ name: e.name, value: r.value })), r._resolve && r._resolve(r.value));
}
function dm(e, r) {
  e.emit("destroying", e), e.store.filter(() => !1), e.parent && e.parent.remove(e), Gp(e), e.emit("destroyed", e), r._e.flush(), r._value = r.value = void 0;
  for (const t in r.context)
    delete r.context[t];
  r.plugins.clear(), r.context = null;
}
function fm(e, r, t) {
  r.type = t.type;
  const o = yo(t);
  e.props.__propDefs = cs(
    e.props.__propDefs ?? [],
    (o == null ? void 0 : o.props) || []
  ), o.props = e.props.__propDefs, r.props.definition = o, r.value = r._value = om({
    type: e.type,
    value: r.value
  }), t.forceTypeProp && (e.props.type && (e.props.originalType = e.props.type), r.props.type = t.forceTypeProp), t.family && (r.props.family = t.family), t.features && t.features.forEach((u) => u(e)), t.props && e.addProps(t.props), e.emit("defined", t);
}
function pm(e, r, t) {
  const o = Array.isArray(t) ? t : Object.keys(t), u = Array.isArray(t) ? {} : o.reduce((d, f) => ("default" in t[f] && (d[f] = t[f].default), d), {});
  if (e.props.attrs) {
    const d = { ...e.props.attrs };
    e.props._emit = !1;
    for (const m in d) {
      const y = Mp(m);
      o.includes(y) && (e.props[y] = d[m], delete d[m]);
    }
    Array.isArray(t) || o.forEach((m) => {
      "default" in t[m] && e.props[m] === void 0 && (e.props[m] = u[m]);
    });
    const f = Ea(r._value);
    e.props.initial = e.type !== "input" ? qt(f) : f, e.props._emit = !0, e.props.attrs = d;
  }
  const s = cs(e.props.__propDefs ?? [], t);
  return e.props.definition && (e.props.definition.props = s), e.props.__propDefs = s, e.emit("added-props", t), e;
}
function fi(e) {
  return Array.isArray(e) ? e.reduce((r, t) => (r[t] = {}, r), {}) : e;
}
function cs(e, r) {
  return Array.isArray(e) && Array.isArray(r) ? e.concat(r) : ts(fi(e), fi(r));
}
function mm(e, r, t, o) {
  if (e.type === "input" && In(100, e), t.parent && t.parent !== e && t.parent.remove(t), !r.children.includes(t)) {
    if (o !== void 0 && e.type === "list") {
      const u = r.children[o];
      u && "__FKP" in u ? (t._c.uid = u.uid, r.children.splice(o, 1, t)) : r.children.splice(o, 0, t), Array.isArray(e.value) && e.value.length < r.children.length && e.disturb().calm({
        name: o,
        value: t.value,
        from: ss
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
  return vo(e, r, !1), e.ledger.merge(t), e.emit("child", t), e;
}
function gm(e, r, t, o) {
  return Ga(o) ? (e.parent && e.parent !== o && e.parent.remove(e), r.parent = o, e.resetConfig(), o.children.includes(e) ? e.use(o.plugins) : o.add(e), !0) : o === null ? (r.parent = null, !0) : !1;
}
function hm(e, r, t) {
  const o = r.children.indexOf(t);
  if (o !== -1) {
    t.isSettled && e.disturb(), r.children.splice(o, 1);
    let u = ci(t.props.preserve), s = t.parent;
    for (; u === void 0 && s; )
      u = ci(s.props.preserve), s = s.parent;
    u ? e.calm() : e.calm({
      name: e.type === "list" ? o : t.name,
      value: Da
    }), t.parent = null, t.config._rmn = t;
  }
  return e.ledger.unmerge(t), e.emit("childRemoved", t), e;
}
function bm(e, r, t) {
  r.children.forEach((o) => !("__FKP" in o) && t(o));
}
function ym(e, r, t, o = !1, u = !1) {
  r.children.some((s) => {
    if ("__FKP" in s)
      return !1;
    const d = t(s);
    return o && d === !1 ? !0 : u && d === !1 ? !1 : s.walk(t, o, u);
  });
}
function vm(e, r) {
  const t = e.parent || void 0;
  r.config = $m(e.config._t, t), e.walk((o) => o.resetConfig());
}
function ds(e, r, t, o = !0, u = !0) {
  return Array.isArray(t) || t instanceof Set ? (t.forEach((s) => ds(e, r, s)), e) : (r.plugins.has(t) || (u && typeof t.library == "function" && t.library(e), o && t(e) !== !1 && (r.plugins.add(t), e.children.forEach((s) => s.use(t)))), e);
}
function _m(e, r, t, o) {
  if (Ga(e.parent)) {
    const u = e.parent.children, s = o >= u.length ? u.length - 1 : o < 0 ? 0 : o, d = u.indexOf(e);
    return d === -1 ? !1 : (u.splice(d, 1), u.splice(s, 0, e), e.parent.children = u, e.parent.type === "list" && e.parent.disturb().calm({ name: s, value: ja, from: d }), !0);
  }
  return !1;
}
function xm(e) {
  if (e.parent) {
    const r = [...e.parent.children].indexOf(e);
    return r === -1 ? e.parent.children.length : r;
  }
  return -1;
}
function wm(e, r) {
  return r;
}
function km(e, r) {
  var t;
  return ((t = e.parent) == null ? void 0 : t.type) === "list" ? e.index : r.name !== rm ? r.name : e.index;
}
function Cm(e, r) {
  return r.parent ? r.parent.address.concat([e.name]) : [e.name];
}
function Sm(e, r, t) {
  const o = typeof t == "string" ? t.split(e.config.delimiter) : t;
  if (!o.length)
    return;
  const u = o[0];
  let s = e.parent;
  for (s || (String(o[0]) === String(e.name) && o.shift(), s = e), u === "$parent" && o.shift(); s && o.length; ) {
    const d = o.shift();
    switch (d) {
      case "$root":
        s = e.root;
        break;
      case "$parent":
        s = s.parent;
        break;
      case "$self":
        s = e;
        break;
      default:
        s = s.children.find(
          (f) => !("__FKP" in f) && String(f.name) === String(d)
        ) || Im(s, d);
    }
  }
  return s || void 0;
}
function Im(e, r) {
  const t = String(r).match(/^(find)\((.*)\)$/);
  if (t) {
    const [, o, u] = t, s = u.split(",").map((d) => d.trim());
    switch (o) {
      case "find":
        return e.find(s[0], s[1]);
      default:
        return;
    }
  }
}
function Pm(e, r, t, o) {
  return Om(e, t, o);
}
function Om(e, r, t = "name") {
  const o = typeof t == "string" ? (s) => s[t] == r : t, u = [e];
  for (; u.length; ) {
    const s = u.shift();
    if (!("__FKP" in s)) {
      if (o(s, r))
        return s;
      u.push(...s.children);
    }
  }
}
function Bm(e) {
  let r = e;
  for (; r.parent; )
    r = r.parent;
  return r;
}
function $m(e = {}, r) {
  let t;
  return new Proxy(e, {
    get(...o) {
      const u = o[1];
      if (u === "_t")
        return e;
      const s = Reflect.get(...o);
      if (s !== void 0)
        return s;
      if (r) {
        const d = r.config[u];
        if (d !== void 0)
          return d;
      }
      if (e.rootConfig && typeof u == "string") {
        const d = e.rootConfig[u];
        if (d !== void 0)
          return d;
      }
      return u === "delay" && (t == null ? void 0 : t.type) === "input" ? 20 : em[u];
    },
    set(...o) {
      const u = o[1], s = o[2];
      if (u === "_n")
        return t = s, e.rootConfig && e.rootConfig._add(t), !0;
      if (u === "_rmn")
        return e.rootConfig && e.rootConfig._rm(t), t = void 0, !0;
      if (!So(e[u], s, !1)) {
        const d = Reflect.set(...o);
        return t && (t.emit(`config:${u}`, s, !1), di(t, u, s), t.walk((f) => di(f, u, s), !1, !0)), d;
      }
      return !0;
    }
  });
}
function Am(e, r, t, o = "ui") {
  const u = typeof t == "string" ? { key: t, value: t, type: o } : t, s = e.hook.text.dispatch(u);
  return e.emit("text", s, !1), s.value;
}
function Rm(e) {
  const r = e.name;
  do {
    if (e.props.isForm === !0)
      break;
    e.parent || In(106, r), e = e.parent;
  } while (e);
  e.props.id && Yp(e.props.id, e.props.__root);
}
function Tm(e, r, t) {
  return Jp(e, t);
}
function Em(e, r, t, o) {
  const u = `${e.name}-set`, s = e.hook.setErrors.dispatch({ localErrors: t, childErrors: o });
  return Wp(e, s.localErrors, s.childErrors).forEach(
    (d) => {
      e.store.apply(d, (f) => f.meta.source === u);
    }
  ), e;
}
function Dm(e, r, t = !0, o) {
  return e.store.filter((u) => !(o === void 0 || u.meta.source === o), "error"), t && (o = o || `${e.name}-set`, e.walk((u) => {
    u.store.filter((s) => !(s.type === "error" && s.meta && s.meta.source === o));
  })), e;
}
function jm(e, r, t, o) {
  return r.traps.set(t, o), e;
}
function Lm(e) {
  return {
    __FKP: !0,
    uid: Symbol(),
    name: (e == null ? void 0 : e.name) ?? `p_${nm++}`,
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
function Mm(e) {
  return "__FKP" in e;
}
function fs(e) {
  return typeof e.props.validationLabel == "function" ? e.props.validationLabel(e) : e.props.validationLabel || e.props.label || e.props.name || String(e.name);
}
function U(e) {
  return e[0].toUpperCase() + e.substr(1);
}
function _o(e, r = "or") {
  return e.reduce((t, o, u) => (t += o, u <= e.length - 2 && e.length > 2 && (t += ", "), u === e.length - 2 && (t += `${e.length === 2 ? " " : ""}${r} `), t), "");
}
function Jr(e) {
  const r = typeof e == "string" ? new Date(Date.parse(e)) : e;
  return r instanceof Date ? new Intl.DateTimeFormat(void 0, {
    dateStyle: "medium",
    timeZone: "UTC"
  }).format(r) : "(unknown)";
}
function ps(e, r) {
  return Number(e) >= Number(r) ? [r, e] : [e, r];
}
var Nm = {
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
}, Km = {
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
    const [t, o] = ps(r[0], r[1]);
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
    return `لا ينتهي ${U(e)} بـ ${_o(r)}.`;
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
    const o = Number(r) <= Number(t) ? r : t, u = Number(t) >= Number(r) ? t : r;
    return o == 1 && u === 1 / 0 ? `يجب أن يكون ${U(e)} حرفًا واحدًا على الأقل.` : o == 0 && u ? `يجب أن يكون ${U(e)} أقل من أو يساوي ${u} حرفًا.` : o === u ? `يجب أن يتكون ${U(e)} من الأحرف ${u}.` : o && u === 1 / 0 ? `يجب أن يكون ${U(e)} أكبر من أو يساوي ${o} حرفًا.` : `يجب أن يكون ${U(e)} بين ${o} و ${u} حرفًا.`;
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
    const o = t.map((u) => {
      const s = r.at(u);
      return s ? fs(s) : !1;
    }).filter((u) => !!u);
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
    return `لا يبدأ ${U(e)} بـ ${_o(r)}.`;
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
}, Fm = { ui: Nm, validation: Km }, zm = {
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
}, Hm = {
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
    const [t, o] = ps(r[0], r[1]);
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
    return `${U(e)} doesn’t end with ${_o(r)}.`;
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
    const o = Number(r) <= Number(t) ? r : t, u = Number(t) >= Number(r) ? t : r;
    return o == 1 && u === 1 / 0 ? `${U(e)} must be at least one character.` : o == 0 && u ? `${U(e)} must be less than or equal to ${u} characters.` : o === u ? `${U(e)} should be ${u} characters long.` : o && u === 1 / 0 ? `${U(e)} must be greater than or equal to ${o} characters.` : `${U(e)} must be between ${o} and ${u} characters.`;
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
    const o = t.map((u) => {
      const s = r.at(u);
      return s ? fs(s) : !1;
    }).filter((u) => !!u);
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
    return `${U(e)} doesn’t start with ${_o(r)}.`;
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
}, qm = { ui: zm, validation: Hm };
function Vm(e, r) {
  const t = `${r.props.type}__${e}`, o = `formkit-${e}`, u = r.props.family ? `family:${r.props.family}__${e}` : "", s = `${t}__${u}`;
  if (!(s in pt)) {
    const d = pt[t] ?? Um[e] ?? {};
    d[o] = !0, u in pt ? pt[s] = { ...pt[u], ...d } : pt[s] = d;
  }
  return pt[s] ?? { [o]: !0 };
}
const pt = {
  "family:button__outer": {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  "family:button__wrapper": {
    "mb-1.5": !0
  },
  "family:button__label": {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  "family:button__prefixIcon": {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !1,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  "family:button__suffixIcon": {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  "family:button__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    flex: !0,
    "items-center": !0,
    "rounded-none": !0,
    "px-7": !0,
    "py-3": !0,
    "outline-none": !0,
    "text-neutral-900": !0,
    border: !0,
    "border-neutral-900": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "group-data-[prefix-icon]:pl-5": !0,
    "group-data-[suffix-icon]:pr-5": !0,
    "focus:ring-2": !0,
    "dark:border-neutral-100": !0,
    "dark:text-neutral-100": !0
  },
  "family:button__help": {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  "family:button__messages": {
    "": !0
  },
  "family:button__message": {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  "family:box__outer": {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  "family:box__wrapper": {
    "inline-flex": !0,
    "items-center": !0,
    "mb-1": !0,
    "group-data-[multiple]:mb-0": !0
  },
  "family:box__fieldset": {
    "": !0
  },
  "family:box__legend": {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "dark:text-neutral-100": !0,
    "mb-2": !0
  },
  "family:box__help": {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0,
    "mb-1": !0,
    "group-data-[multiple]:mb-2": !0,
    "group-data-[multiple]:-mt-1.5": !0
  },
  "family:box__inner": {
    "": !0
  },
  "family:box__input": {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    peer: !0,
    absolute: !0,
    "h-0": !0,
    "w-0": !0,
    "overflow-hidden": !0,
    "opacity-0": !0
  },
  "family:box__decorator": {
    relative: !0,
    block: !0,
    "select-none": !0,
    "w-[1em]": !0,
    "aspect-[1/1]": !0,
    border: !0,
    "border-neutral-900": !0,
    "mr-1.5": !0,
    "text-transparent": !0,
    "peer-checked:text-neutral-900": !0,
    "peer-disabled:cursor-not-allowed": !0,
    "peer-focus:ring-2": !0,
    "dark:border-neutral-100": !0,
    "dark:peer-checked:text-neutral-100": !0
  },
  "family:box__decoratorIcon": {
    absolute: !0,
    "left-1/2": !0,
    "top-1/2": !0,
    flex: !0,
    "h-full": !0,
    "w-full": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0
  },
  "family:box__options": {
    "": !0
  },
  "family:box__option": {
    "mb-1.5": !0,
    "last:mb-0": !0,
    "data-[disabled]:opacity-50": !0,
    "group-data-[disabled]:data-[disabled]:opacity-100": !0
  },
  "family:box__label": {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0,
    "!mb-0": !0
  },
  "family:box__optionHelp": {
    "text-neutral-600": !0,
    "text-xs": !0,
    "-mt-1": !0,
    "mb-1": !0,
    "dark:text-neutral-400": !0
  },
  "family:box__messages": {
    "": !0
  },
  "family:box__message": {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  "family:text__outer": {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  "family:text__wrapper": {
    "mb-1.5": !0,
    flex: !0,
    "flex-col": !0,
    "items-start": !0,
    "justify-start": !0,
    "last:mb-0": !0
  },
  "family:text__label": {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  "family:text__prefixIcon": {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-400": !0
  },
  "family:text__suffixIcon": {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-400": !0
  },
  "family:text__inner": {
    "text-base": !0,
    "w-full": !0,
    "py-2": !0,
    "px-3": !0,
    "rounded-none": !0,
    border: !0,
    "border-neutral-900": !0,
    flex: !0,
    "items-center": !0,
    "focus-within:ring-2": !0,
    "group-data-[disabled]:!cursor-not-allowed": !0,
    "dark:border-neutral-100": !0
  },
  "family:text__input": {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "text-base": !0,
    "text-neutral-900": !0,
    "min-h-[1.5em]": !0,
    "bg-transparent": !0,
    grow: !0,
    "border-none": !0,
    "p-0": !0,
    "focus:ring-0": !0,
    "dark:text-neutral-100": !0
  },
  "family:text__help": {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  "family:text__messages": {
    "": !0
  },
  "family:text__message": {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  "family:dropdown__outer": {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  "family:dropdown__wrapper": {
    "mb-1.5": !0
  },
  "family:dropdown__label": {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__inner": {
    relative: !0,
    flex: !0,
    "items-center": !0,
    border: !0,
    "border-neutral-900": !0,
    "focus-within:ring-2": !0,
    "rounded-none": !0,
    "group-data-[is-multiline]:!rounded-none": !0,
    "dark:border-neutral-100": !0
  },
  "family:dropdown__prefixIcon": {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0,
    "!ml-2": !0,
    "!mr-0": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__suffixIcon": {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!mr-2": !0,
    "!ml-0": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__input": {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    grow: !0,
    "p-2": !0,
    "pr-0": !0,
    "pl-3": !0,
    "text-base": !0,
    "text-neutral-900": !0,
    "text-ellipsis": !0,
    "min-w-0": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "border-none": !0,
    "focus:ring-0": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__selectionWrapper": {
    grow: !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__selection": {
    grow: !0,
    "text-neutral-900": !0,
    "group-data-[multiple]:p-2": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__tagsWrapper": {
    "w-full": !0
  },
  "family:dropdown__tags": {
    "inline-flex": !0,
    "flex-wrap": !0,
    "items-center": !0,
    "w-full": !0,
    "-mb-1": !0,
    "empty:mb-0": !0
  },
  "family:dropdown__tagWrapper": {
    "group/tag": !0,
    "mr-1": !0,
    "mb-1": !0,
    "outline-none": !0,
    "data-[active-selection=true]:ring-2": !0
  },
  "family:dropdown__tag": {
    relative: !0,
    flex: !0,
    "items-center": !0,
    "text-sm": !0,
    "pl-2": !0,
    "pr-[1.5em]": !0,
    "py-2": !0,
    "h-[1.66em]": !0,
    "bg-neutral-900": !0,
    "rounded-none": !0,
    "text-white": !0,
    "dark:bg-neutral-100": !0,
    "dark:text-black": !0
  },
  "family:dropdown__tagLabel": {
    "": !0
  },
  "family:dropdown__controlLabel": {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  "family:dropdown__listboxButton": {
    "w-[2.5em]": !0,
    "self-stretch": !0,
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-900": !0,
    "z-10": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__removeSelection": {
    "w-[2.5em]": !0,
    "self-stretch": !0,
    "text-base": !0,
    flex: !0,
    "items-center": !0,
    "text-neutral-900": !0,
    "z-10": !0,
    "dark:text-neutral-100": !0,
    "group-[]/tag:absolute": !0,
    "group-[]/tag:top-1/2": !0,
    "group-[]/tag:right-[0.5em]": !0,
    "group-[]/tag:-translate-y-1/2": !0,
    "group-[]/tag:!w-[0.5em]": !0,
    "group-[]/tag:aspect-[1/1]": !0,
    "group-[]/tag:!text-inherit": !0
  },
  "family:dropdown__selectIcon": {
    "text-base": !0,
    "inline-flex": !0,
    "justify-center": !0,
    "w-[2.5em]": !0,
    relative: !0,
    "my-auto": !0,
    "[&>svg]:w-[1em]": !0,
    "[&>svg]:mx-auto": !0
  },
  "family:dropdown__closeIcon": {
    "text-base": !0,
    "w-[0.75em]": !0,
    relative: !0,
    "m-auto": !0
  },
  "family:dropdown__loaderIcon": {
    "animate-spin": !0,
    flex: !0,
    "items-center": !0,
    "my-auto": !0,
    "ml-2": !0,
    "text-base": !0,
    "text-neutral-900": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__loadMore": {
    "data-[is-active]:bg-neutral-100": !0
  },
  "family:dropdown__dropdownWrapper": {
    "rounded-none": !0,
    "empty:hidden": !0,
    border: !0,
    "border-neutral-900": !0,
    "dark:border-neutral-100": !0,
    "group-data-[overscroll]:shadow-none": !0,
    "group-data-[overscroll]:border-none": !0
  },
  "family:dropdown__listbox": {
    "bg-white": !0,
    "rounded-none": !0,
    "overflow-clip": !0,
    "empty:hidden": !0,
    "dark:bg-neutral-900": !0,
    "group-data-[overscroll]:border": !0,
    "group-data-[overscroll]:border-neutral-900": !0,
    "group-data-[overscroll]:dark:border-neutral-100": !0
  },
  "family:dropdown__listitemGroup": {
    "group/optgroup": !0,
    "first:border-t-0": !0,
    "last:border-b-0": !0,
    "border-t": !0,
    "border-b": !0,
    "-mb-px": !0,
    "border-neutral-900": !0,
    "dark:border-neutral-100": !0
  },
  "family:dropdown__groupLabel": {
    block: !0,
    "pt-1.5": !0,
    "pb-1": !0,
    "px-2.5": !0,
    "font-bold": !0,
    "pointer-events-none": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__listitem": {
    relative: !0,
    flex: !0,
    "items-center": !0,
    "px-2": !0,
    "py-1.5": !0,
    "first:pt-2": !0,
    "last:pb-2": !0,
    "text-neutral-900": !0,
    "text-base": !0,
    "data-[is-active]:bg-neutral-100": !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "data-[is-active]:before:ring-1": !0,
    "data-[is-active]:before:ring-inset": !0,
    "data-[is-active]:before:ring-neutral-300": !0,
    "data-[is-active]:first:before:rounded-none": !0,
    "data-[is-active]:first:before:rounded-b-none": !0,
    "data-[is-active]:last:before:rounded-none": !0,
    "data-[is-active]:last:before:rounded-t-none": !0,
    "data-[is-active]:first:last:before:rounded-none": !0,
    "dark:text-neutral-100": !0,
    "dark:data-[is-active]:bg-neutral-700": !0,
    "dark:data-[is-active]:before:ring-neutral-400": !0,
    "group-[]/optgroup:first:before:!rounded-none": !0,
    "group-[]/optgroup:last:before:!rounded-none": !0
  },
  "family:dropdown__selectedIcon": {
    flex: !0,
    absolute: !0,
    "items-center": !0,
    "text-neutral-600": !0,
    "left-2": !0,
    "text-base": !0,
    "h-[0.75em]": !0,
    "w-[0.75em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-400": !0
  },
  "family:dropdown__option": {
    "ml-[1.25em]": !0
  },
  "family:dropdown__optionLoading": {
    "": !0
  },
  "family:dropdown__emptyMessage": {
    flex: !0,
    "items-center": !0,
    "px-2": !0,
    "py-1.5": !0,
    "first:pt-2": !0,
    "last:pb-2": !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__emptyMessageInner": {
    "": !0
  },
  "family:dropdown__help": {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  "family:dropdown__messages": {
    "": !0
  },
  "family:dropdown__message": {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  button__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  button__wrapper: {
    "mb-1.5": !0
  },
  button__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  button__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  button__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  button__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  button__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  button__messages: {
    "": !0
  },
  button__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  checkbox__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  checkbox__wrapper: {
    "mb-1.5": !0
  },
  checkbox__fieldset: {
    "": !0
  },
  checkbox__legend: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "dark:text-neutral-100": !0
  },
  checkbox__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  checkbox__inner: {
    "": !0
  },
  checkbox__options: {
    "": !0
  },
  checkbox__option: {
    "": !0
  },
  checkbox__decorator: {
    "rounded-none": !0
  },
  checkbox__decoratorIcon: {
    "max-w-[66.66%]": !0
  },
  checkbox__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  checkbox__optionHelp: {
    "": !0
  },
  checkbox__messages: {
    "": !0
  },
  checkbox__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  color__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  color__wrapper: {
    "mb-1.5": !0
  },
  color__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  color__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  color__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  color__inner: {
    "!w-auto": !0
  },
  color__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "rounded-none": !0,
    "overflow-clip": !0,
    "[&::-webkit-color-swatch-wrapper]:p-0": !0,
    "[&::-webkit-color-swatch]:border-none": !0,
    "[&::-moz-color-swatch]:border-none": !0
  },
  color__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  color__messages: {
    "": !0
  },
  color__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  date__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  date__wrapper: {
    "mb-1.5": !0
  },
  date__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  date__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  date__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  date__inner: {
    "": !0
  },
  date__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  date__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  date__messages: {
    "": !0
  },
  date__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  "datetime-local__outer": {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  "datetime-local__wrapper": {
    "mb-1.5": !0
  },
  "datetime-local__label": {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  "datetime-local__prefixIcon": {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  "datetime-local__suffixIcon": {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  "datetime-local__inner": {
    "": !0
  },
  "datetime-local__input": {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  "datetime-local__help": {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  "datetime-local__messages": {
    "": !0
  },
  "datetime-local__message": {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  email__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  email__wrapper: {
    "mb-1.5": !0
  },
  email__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  email__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  email__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  email__inner: {
    "": !0
  },
  email__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  email__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  email__messages: {
    "": !0
  },
  email__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  file__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  file__wrapper: {
    "mb-1.5": !0
  },
  file__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  file__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  file__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  file__inner: {
    relative: !0,
    "group-data-[multiple]:rounded-none": !0
  },
  file__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "text-transparent": !0,
    absolute: !0,
    "inset-0": !0,
    "opacity-0": !0,
    "z-10": !0,
    "file:pointer-events-none": !0,
    "file:w-0": !0,
    "file:h-0": !0,
    "file:overflow-hidden": !0
  },
  file__fileList: {
    "group/list": !0,
    peer: !0,
    grow: !0,
    "min-w-0": !0
  },
  file__fileItemIcon: {
    "h-[1em]": !0,
    "w-[1em]": !0,
    "mr-2": !0,
    "shrink-0": !0
  },
  file__fileItem: {
    flex: !0,
    "min-w-0": !0,
    "items-center": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  file__fileName: {
    truncate: !0,
    "min-w-0": !0,
    "w-full": !0,
    shrink: !0
  },
  file__fileRemove: {
    flex: !0,
    "items-center": !0,
    "text-neutral-900": !0,
    "text-[0px]": !0,
    "peer-data-[has-multiple]:text-xs": !0,
    "peer-data-[has-multiple]:shrink-0": !0,
    "appearance-none": !0,
    "outline-none": !0,
    relative: !0,
    "z-20": !0,
    "dark:text-neutral-100": !0
  },
  file__fileRemoveIcon: {
    block: !0,
    "text-base": !0,
    "w-[0.75em]": !0
  },
  file__noFiles: {
    flex: !0,
    "w-full": !0,
    "items-center": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  file__noFilesIcon: {
    "w-[1em]": !0,
    "mr-2": !0
  },
  file__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  file__messages: {
    "": !0
  },
  file__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  form__form: {
    "": !0
  },
  form__actions: {
    "": !0
  },
  form__summaryInner: {
    "group/summary": !0,
    border: !0,
    "border-neutral-900": !0,
    "rounded-none": !0,
    "py-2": !0,
    "px-3": !0,
    "dark:border-neutral-100": !0
  },
  form__summaryHeader: {
    "text-lg": !0,
    "text-neutral-900": !0,
    "mb-2": !0,
    "dark:text-neutral-100": !0
  },
  form__messages: {
    "": !0
  },
  form__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0,
    "group-[]/summary:text-sm": !0
  },
  month__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  month__wrapper: {
    "mb-1.5": !0
  },
  month__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  month__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  month__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  month__inner: {
    "": !0
  },
  month__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  month__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  month__messages: {
    "": !0
  },
  month__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  number__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  number__wrapper: {
    "mb-1.5": !0
  },
  number__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  number__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  number__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  number__inner: {
    "": !0
  },
  number__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  number__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  number__messages: {
    "": !0
  },
  number__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  password__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  password__wrapper: {
    "mb-1.5": !0
  },
  password__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  password__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  password__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  password__inner: {
    "": !0
  },
  password__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  password__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  password__messages: {
    "": !0
  },
  password__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  radio__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  radio__wrapper: {
    "mb-1.5": !0
  },
  radio__fieldset: {
    "": !0
  },
  radio__legend: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "dark:text-neutral-100": !0
  },
  radio__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  radio__inner: {
    "": !0
  },
  radio__options: {
    "": !0
  },
  radio__option: {
    "": !0
  },
  radio__decorator: {
    "rounded-full": !0
  },
  radio__decoratorIcon: {
    "max-w-[50%]": !0
  },
  radio__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  radio__optionHelp: {
    "": !0
  },
  radio__messages: {
    "": !0
  },
  radio__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  range__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  range__wrapper: {
    "mb-1.5": !0
  },
  range__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  range__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  range__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  range__inner: {
    relative: !0,
    "!border-none": !0,
    "!ring-0": !0,
    "!px-0": !0,
    "!bg-transparent": !0
  },
  range__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "[&::-webkit-slider-runnable-track]:bg-neutral-300": !0,
    "[&::-webkit-slider-runnable-track]:h-1.5": !0,
    "[&::-webkit-slider-runnable-track]:rounded-none": !0,
    "dark:[&::-webkit-slider-runnable-track]:bg-neutral-700": !0,
    "[&::-moz-range-track]:bg-neutral-300": !0,
    "[&::-moz-range-track]:h-1.5": !0,
    "[&::-moz-range-track]:rounded-none": !0,
    "dark:[&::-moz-range-track]:bg-neutral-700": !0,
    "[&::-webkit-slider-thumb]:appearance-none": !0,
    "[&::-webkit-slider-thumb]:w-3.5": !0,
    "[&::-webkit-slider-thumb]:h-3.5": !0,
    "[&::-webkit-slider-thumb]:bg-neutral-600": !0,
    "[&::-webkit-slider-thumb]:rounded-full": !0,
    "[&::-webkit-slider-thumb]:relative": !0,
    "[&::-webkit-slider-thumb]:top-1/2": !0,
    "[&::-webkit-slider-thumb]:-translate-y-1/2": !0,
    "[&::-webkit-slider-thumb]:focus-visible:ring-2": !0,
    "dark:[&::-webkit-slider-thumb]:bg-neutral-400": !0,
    "[&::-moz-range-thumb]:appearance-none": !0,
    "[&::-moz-range-thumb]:border-none": !0,
    "[&::-moz-range-thumb]:w-3.5": !0,
    "[&::-moz-range-thumb]:h-3.5": !0,
    "[&::-moz-range-thumb]:bg-neutral-600": !0,
    "[&::-moz-range-thumb]:rounded-full": !0,
    "[&::-moz-range-thumb]:focus-visible:ring-2": !0,
    "dark:[&::-moz-range-thumb]:bg-neutral-400": !0
  },
  range__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  range__messages: {
    "": !0
  },
  range__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  search__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  search__wrapper: {
    "mb-1.5": !0
  },
  search__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  search__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  search__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  search__inner: {
    "": !0
  },
  search__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  search__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  search__messages: {
    "": !0
  },
  search__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  select__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  select__wrapper: {
    "mb-1.5": !0
  },
  select__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  select__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0,
    "ml-2": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  select__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "mr-2": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  select__inner: {
    relative: !0,
    flex: !0,
    "items-center": !0,
    border: !0,
    "border-neutral-900": !0,
    "rounded-none": !0,
    "focus-within:ring-2": !0,
    "group-data-[multiple]:rounded-none": !0,
    "dark:border-neutral-100": !0
  },
  select__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    grow: !0,
    "py-2": !0,
    "pl-3": !0,
    "pr-[2em]": !0,
    "text-base": !0,
    "text-neutral-900": !0,
    "text-ellipsis": !0,
    "min-w-0": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "data-[placeholder]:text-neutral-900": !0,
    "dark:text-neutral-100": !0,
    "dark:data-[placeholder]:text-neutral-100": !0,
    "border-none": !0,
    "focus:ring-0": !0,
    "bg-none": !0
  },
  select__selectIcon: {
    absolute: !0,
    "w-[1em]": !0,
    "text-neutral-900": !0,
    "pointer-events-none": !0,
    "right-2": !0,
    "group-data-[suffix-icon]:mr-[1.5em]": !0,
    "dark:text-neutral-100": !0
  },
  select__optGroup: {
    "group/optgroup": !0,
    "bg-white": !0,
    "text-neutral-900": !0,
    "font-bold": !0,
    "text-sm": !0,
    "dark:text-neutral-100": !0,
    "dark:bg-neutral-900": !0
  },
  select__option: {
    "text-neutral-900": !0,
    "group-data-[multiple]:text-sm": !0,
    "group-data-[multiple]:outline-none": !0,
    "group-data-[multiple]:border-none": !0,
    "group-data-[multiple]:py-1.5": !0,
    "group-data-[multiple]:px-2": !0,
    "dark:text-neutral-100": !0,
    "dark:bg-neutral-900": !0
  },
  select__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  select__messages: {
    "": !0
  },
  select__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  submit__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  submit__wrapper: {
    "mb-1.5": !0
  },
  submit__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  submit__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  submit__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  submit__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  submit__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  submit__messages: {
    "": !0
  },
  submit__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  tel__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  tel__wrapper: {
    "mb-1.5": !0
  },
  tel__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  tel__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  tel__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  tel__inner: {
    "": !0
  },
  tel__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  tel__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  tel__messages: {
    "": !0
  },
  tel__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  text__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  text__wrapper: {
    "mb-1.5": !0
  },
  text__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  text__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  text__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  text__inner: {
    "": !0
  },
  text__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  text__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  text__messages: {
    "": !0
  },
  text__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  textarea__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  textarea__wrapper: {
    "mb-1.5": !0
  },
  textarea__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  textarea__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0,
    "!ml-2": !0,
    "!mr-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-400": !0
  },
  textarea__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "!mr-2": !0,
    "!ml-0": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-400": !0
  },
  textarea__inner: {
    flex: !0,
    "items-center": !0,
    "mb-1.5": !0,
    border: !0,
    "border-neutral-900": !0,
    "rounded-none": !0,
    "focus-within:ring-2": !0,
    "dark:border-neutral-100": !0
  },
  textarea__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "text-base": !0,
    "h-24": !0,
    "text-neutral-900": !0,
    "min-w-0": !0,
    grow: !0,
    shrink: !0,
    "!py-2": !0,
    "!px-3": !0,
    "outline-none": !0,
    "bg-transparent": !0,
    "dark:text-neutral-100": !0,
    "p-0": !0,
    "border-none": !0,
    "focus:ring-0": !0
  },
  textarea__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  textarea__messages: {
    "": !0
  },
  textarea__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  time__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  time__wrapper: {
    "mb-1.5": !0
  },
  time__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  time__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  time__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  time__inner: {
    "": !0
  },
  time__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  time__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  time__messages: {
    "": !0
  },
  time__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  url__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  url__wrapper: {
    "mb-1.5": !0
  },
  url__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  url__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  url__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  url__inner: {
    "": !0
  },
  url__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  url__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  url__messages: {
    "": !0
  },
  url__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  week__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  week__wrapper: {
    "mb-1.5": !0
  },
  week__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  week__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  week__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  week__inner: {
    "": !0
  },
  week__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  week__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  week__messages: {
    "": !0
  },
  week__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  autocomplete__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  autocomplete__wrapper: {
    "mb-1.5": !0
  },
  autocomplete__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  autocomplete__inner: {
    "": !0
  },
  autocomplete__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  autocomplete__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  autocomplete__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  autocomplete__selections: {
    flex: !0,
    absolute: !0,
    "inset-0": !0,
    "group-data-[multiple]:static": !0,
    "group-data-[multiple]:block": !0,
    "group-data-[empty]:hidden": !0,
    "group-data-[multiple]:mt-1.5": !0
  },
  autocomplete__selectionWrapper: {
    "bg-neutral-100": !0,
    "rounded-none": !0,
    "group-data-[multiple]:border": !0,
    "group-data-[multiple]:border-neutral-900": !0,
    "group-data-[multiple]:mb-1.5": !0,
    "outline-none": !0,
    "data-[active-selection=true]:ring-2": !0,
    "dark:bg-neutral-700": !0,
    "dark:group-data-[multiple]:border-neutral-100": !0,
    "[&.formkit-dropZone]:opacity-50": !0,
    "[&.formkit-touchDropZone]:opacity-50": !0,
    "[&.formkit-touchDragging]:!flex": !0,
    "[&.formkit-longTouch]:opacity-50": !0
  },
  autocomplete__selection: {
    "rounded-none": !0,
    "pl-2": !0,
    "[&>*]:ml-0": !0
  },
  autocomplete__loaderIcon: {
    "animate-spin": !0,
    flex: !0,
    "items-center": !0,
    "my-auto": !0,
    "ml-2": !0,
    "text-base": !0,
    "text-neutral-900": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-100": !0
  },
  autocomplete__removeSelection: {
    "": !0
  },
  autocomplete__listboxButton: {
    "": !0
  },
  autocomplete__selectIcon: {
    "": !0
  },
  autocomplete__dropdownWrapper: {
    "": !0
  },
  autocomplete__listbox: {
    "": !0
  },
  autocomplete__listitem: {
    "": !0
  },
  autocomplete__selectedIcon: {
    "": !0
  },
  autocomplete__option: {
    "": !0
  },
  autocomplete__emptyMessage: {
    "": !0
  },
  autocomplete__emptyMessageInner: {
    "": !0
  },
  autocomplete__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  autocomplete__messages: {
    "": !0
  },
  autocomplete__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  colorpicker__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  colorpicker__wrapper: {
    "mb-1.5": !0
  },
  colorpicker__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  colorpicker__inner: {
    relative: !0,
    "inline-flex": !0,
    "!w-auto": !0,
    "pl-2": !0,
    "group-data-[inline]:border-none": !0,
    "group-data-[inline]:p-0": !0,
    "group-data-[inline]:outline-none": !0,
    "group-data-[inline]:!ring-0": !0,
    "group-data-[inline]:!w-full": !0,
    "group-data-[inline]:rounded-none": !0
  },
  colorpicker__swatchPreview: {
    flex: !0,
    "items-center": !0,
    "rounded-none": !0
  },
  colorpicker__canvasSwatchPreviewWrapper: {
    "mr-2": !0,
    relative: !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "before:rounded-none": !0,
    "before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0,
    "before:z-[2]": !0
  },
  colorpicker__canvas: {
    block: !0,
    "w-full": !0
  },
  colorpicker__canvasSwatchPreview: {
    "text-base": !0,
    "rounded-none": !0,
    "aspect-[1/1]": !0,
    "shrink-0": !0,
    grow: !0,
    "!w-[1.5em]": !0
  },
  colorpicker__valueString: {
    "inline-block": !0,
    "text-sm": !0,
    "text-neutral-900": !0,
    "font-mono": !0,
    "dark:text-neutral-100": !0
  },
  colorpicker__panel: {
    absolute: !0,
    "top-full": !0,
    "left-0": !0,
    "z-[99]": !0,
    flex: !0,
    "w-[100vw]": !0,
    "max-w-[18.5em]": !0,
    "touch-manipulation": !0,
    "flex-col": !0,
    "rounded-none": !0,
    border: !0,
    "bg-white": !0,
    "p-2": !0,
    "dark:bg-neutral-900": !0,
    "group-data-[inline]:static": !0,
    "group-data-[inline]:z-auto": !0,
    "group-data-[inline]:w-full": !0,
    "group-data-[inline]:max-w-none": !0,
    "group-data-[inline]:bg-transparent": !0,
    "group-data-[inline]:border": !0,
    "border-neutral-900": !0,
    "dark:border-neutral-100": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none": !0
  },
  colorpicker__panelClose: {
    flex: !0,
    "justify-end": !0,
    "items-center": !0,
    "text-neutral-900": !0,
    "mb-1.5": !0,
    "border-b": !0,
    "border-neutral-900": !0,
    "pb-2": !0,
    "dark:text-neutral-100": !0,
    "dark:border-neutral-100": !0
  },
  colorpicker__closeIcon: {
    "w-[1.75rem]": !0,
    "aspect-[1/1]": !0,
    "p-1": !0,
    "rounded-none": !0,
    border: !0,
    "border-neutral-900": !0,
    "dark:border-neutral-100": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:aspect-[1/1]": !0,
    "[&>svg]:max-w-none": !0,
    "[&>svg]:max-h-none": !0
  },
  colorpicker__control: {
    absolute: !0,
    "bg-white": !0,
    "shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]": !0,
    "-translate-y-1/2": !0,
    "-translate-x-1/2": !0,
    "pointer-events-none": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "dark:bg-neutral-900": !0,
    "data-[prevent-focus-style]:outline-none": !0,
    "data-[prevent-focus-style]:ring-0": !0,
    "data-[prevent-focus-style]:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_3px_rgba(0,0,0,0.2)]": !0
  },
  colorpicker__controlGroup: {
    grid: !0,
    "[grid-template-areas:'a_a_a'_'b_c_e'_'b_d_e']": !0,
    "mb-2": !0
  },
  colorpicker__LS: {
    "[grid-area:a]": !0,
    relative: !0,
    "mb-2": !0
  },
  colorpicker__canvasLS: {
    "aspect-[2/1]": !0,
    "cursor-pointer": !0,
    "rounded-none": !0
  },
  colorpicker__controlLS: {
    "w-[10px]": !0,
    "h-[10px]": !0,
    "rounded-full": !0
  },
  colorpicker__preview: {
    "[grid-area:b]": !0,
    relative: !0,
    "inline-flex": !0,
    "w-[2em]": !0,
    "aspect-[1/1]": !0,
    "overflow-hidden": !0,
    "rounded-none": !0,
    "after:content-['']": !0,
    "after:absolute": !0,
    "after:inset-0": !0,
    "after:rounded-none": !0,
    "after:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0
  },
  colorpicker__hue: {
    "[grid-area:c]": !0,
    relative: !0,
    "inline-flex": !0,
    "h-3/4": !0,
    "ml-2": !0
  },
  colorpicker__canvasHue: {
    "rounded-none": !0
  },
  colorpicker__controlHue: {
    "w-[4px]": !0,
    "top-1/2": !0,
    "h-[calc(100%-2px)]": !0,
    "rounded-none": !0
  },
  colorpicker__alpha: {
    "[grid-area:d]": !0,
    relative: !0,
    "inline-flex": !0,
    "h-3/4": !0,
    "ml-2": !0
  },
  colorpicker__canvasAlpha: {
    "rounded-none": !0
  },
  colorpicker__controlAlpha: {
    "w-[4px]": !0,
    "top-1/2": !0,
    "h-[calc(100%-2px)]": !0,
    "rounded-none": !0
  },
  colorpicker__eyeDropper: {
    "[grid-area:e]": !0,
    "w-[2em]": !0,
    "ml-2": !0,
    "self-center": !0,
    "justify-center": !0,
    "justify-self-center": !0,
    "inline-flex": !0,
    "content-center": !0,
    "items-center": !0,
    "aspect-[1/1]": !0,
    "cursor-pointer": !0,
    "rounded-none": !0,
    border: !0,
    "border-neutral-900": !0,
    "text-neutral-900": !0,
    "dark:border-neutral-100": !0,
    "dark:text-neutral-100": !0
  },
  colorpicker__eyeDropperIcon: {
    "w-auto": !0,
    "[&>svg]:w-[1em]": !0
  },
  colorpicker__formatField: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    grow: !0
  },
  colorpicker__colorInputGroup: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    grow: !0
  },
  colorpicker__fieldGroup: {
    flex: !0,
    "flex-col": !0,
    "items-center": !0,
    "justify-center": !0,
    "w-full": !0,
    "mr-1": !0,
    "[&>input]:p-1": !0,
    "[&>input]:text-sm": !0,
    "[&>input]:text-neutral-900": !0,
    "[&>input]:m-0": !0,
    "[&>input]:grow": !0,
    "[&>input]:shrink": !0,
    "[&>input]:w-full": !0,
    "[&>input]:border": !0,
    "[&>input]:border-neutral-900": !0,
    "[&>input]:rounded-none": !0,
    "[&>input]:text-center": !0,
    "[&>input]:appearance-none": !0,
    "[&>input::-webkit-outer-spin-button]:appearance-none": !0,
    "[&>input::-webkit-inner-spin-button]:appearance-none": !0,
    "[&>input::-webkit-inner-spin-button]:m-0": !0,
    "[&>input:focus]:outline-none": !0,
    "[&>input:focus]:ring-2": !0,
    "max-[431px]:[&>input]:text-base": !0,
    "dark:[&>input]:text-neutral-100": !0,
    "dark:[&>input]:border-neutral-100": !0
  },
  colorpicker__colorField: {
    "bg-transparent": !0,
    "text-neutral-900": !0,
    border: !0,
    "border-neutral-900": !0,
    "dark:text-neutral-100": !0,
    "dark:border-neutral-100": !0
  },
  colorpicker__fieldLabel: {
    "text-xs": !0,
    "text-neutral-900": !0,
    "mt-2": !0,
    "dark:text-neutral-100": !0
  },
  colorpicker__formatSwitcher: {
    flex: !0,
    "justify-end": !0,
    "self-start": !0,
    "shrink-0": !0,
    "p-1": !0,
    "mt-0.5": !0,
    "text-neutral-900": !0,
    "select-none": !0,
    "dark:text-neutral-100": !0
  },
  colorpicker__switchIcon: {
    "[&>svg]:w-3": !0
  },
  colorpicker__swatches: {
    "inline-flex": !0,
    "flex-wrap": !0,
    "w-full": !0,
    "justify-self-center": !0,
    "mx-auto": !0,
    "pt-2": !0,
    "pb-2": !0,
    "mt-2": !0,
    "-mb-2": !0,
    "border-t": !0,
    "border-neutral-900": !0,
    "overflow-auto": !0,
    "max-h-[200px]": !0,
    "select-none": !0,
    "dark:border-neutral-100": !0,
    "first:-mt-2": !0,
    "first:last:-mb-2": !0,
    "first:border-t-0": !0
  },
  colorpicker__swatchGroup: {
    flex: !0,
    "flex-wrap": !0,
    "w-full": !0,
    "mb-2": !0,
    "last:mb-0": !0
  },
  colorpicker__swatchGroupLabel: {
    "ml-1": !0,
    block: !0,
    "w-full": !0,
    "text-sm": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  colorpicker__swatch: {
    relative: !0,
    "text-base": !0,
    "w-[calc((100%/10)-0.5em)]": !0,
    "max-w-[22px]": !0,
    "m-[0.16em]": !0,
    "cursor-pointer": !0,
    "before:content-['']": !0,
    "before:absolute": !0,
    "before:inset-0": !0,
    "before:shadow-[inset_0_0_0_1px_rgba(0,0,0,0.2)]": !0,
    "before:pointer-events-none": !0,
    "before:z-[2]": !0,
    "dark:before:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]": !0,
    "data-[active=true]:after:content-['']": !0,
    "data-[active=true]:after:block": !0,
    "data-[active=true]:after:absolute": !0,
    "data-[active=true]:after:w-1.5": !0,
    "data-[active=true]:after:h-1.5": !0,
    "data-[active=true]:after:top-1/2": !0,
    "data-[active=true]:after:left-1/2": !0,
    "data-[active=true]:after:pointer-events-none": !0,
    "data-[active=true]:after:rounded-full": !0,
    "data-[active=true]:after:-translate-x-1/2": !0,
    "data-[active=true]:after:-translate-y-1/2": !0,
    "data-[active=true]:after:bg-white": !0,
    "data-[active=true]:after:z-[2]": !0,
    "data-[active=true]:after:shadow-[0_0_0_1px_rgba(0,0,0,0.33)]": !0,
    "[&>canvas]:block": !0,
    "[&>canvas]:w-full": !0,
    "[&>canvas]:aspect-[1/1]": !0,
    "[&>canvas:focus-visible]:outline-none": !0,
    "[&>canvas:focus-visible]:ring-2": !0
  },
  colorpicker__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0,
    "mt-1.5": !0,
    "group-data-[inline]:-mt-1": !0,
    "group-data-[inline]:mb-2": !0
  },
  colorpicker__messages: {
    "": !0
  },
  colorpicker__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  datepicker__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  datepicker__wrapper: {
    "mb-1.5": !0
  },
  datepicker__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__inner: {
    relative: !0
  },
  datepicker__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  datepicker__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  datepicker__removeSelection: {
    "": !0
  },
  datepicker__clearIcon: {
    flex: !0,
    "items-center": !0,
    "ml-1": !0,
    "mr-2": !0,
    "text-neutral-900": !0,
    "text-base": !0,
    "w-[0.75em]": !0,
    "h-[0.75em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  datepicker__overlay: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__overlayInner: {
    "": !0
  },
  datepicker__overlayPlaceholder: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__overlayChar: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__overlayEnum: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__overlayLiteral: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  datepicker__openButton: {
    "appearance-none": !0,
    "border-0": !0,
    "bg-transparent": !0,
    flex: !0,
    "p-0": !0,
    "self-stretch": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0
  },
  datepicker__calendarIcon: {
    "text-neutral-600": !0,
    "focus-visible:text-neutral-900": !0,
    flex: !0,
    "w-[1em]": !0,
    "grow-0": !0,
    "shrink-0": !0,
    "self-stretch": !0,
    "select-none": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:max-h-[1em]": !0,
    "[&>svg]:max-w-[1em]": !0,
    "dark:text-neutral-400": !0,
    "dark:focus-visible:text-neutral-100": !0
  },
  datepicker__panelWrapper: {
    "group/panel": !0,
    absolute: !0,
    "min-w-[20em]": !0,
    "top-full": !0,
    "left-0": !0,
    "rounded-none": !0,
    "p-4": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-900": !0,
    "z-[99]": !0,
    "dark:bg-neutral-900": !0,
    "dark:border-neutral-100": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:!fixed": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:top-auto": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:max-w-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:bottom-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:left-0": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:rounded-none": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:w-full": !0
  },
  datepicker__panelHeader: {
    grid: !0,
    "grid-cols-[2.5em_1fr_2.5em]": !0,
    "justify-center": !0,
    "items-center": !0,
    "border-b-2": !0,
    "border-neutral-900": !0,
    "mb-2": !0,
    "pb-2.5": !0,
    "dark:border-neutral-100": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:grid-cols-[2.5em_1fr_2.5em_2.5em]": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=time]/panel:grid-cols-[2.5em_1fr_2.5em]": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-[&:not([data-inline])]:group-data-[panel=month]/panel:grid-cols-[2.5em_1fr_2.5em]": !0
  },
  datepicker__panelClose: {
    "aspect-[1/1]": !0,
    border: !0,
    "border-neutral-400": !0,
    "rounded-none": !0,
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-neutral-900": !0,
    "[&_svg]:w-[1.25em]": !0,
    "dark:border-neutral-600": !0,
    "dark:text-neutral-100": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-data-[panel=time]/panel:col-start-3": !0,
    "[@media(max-width:431px)_and_(hover:none)]:group-data-[panel=month]/panel:col-start-3": !0
  },
  datepicker__monthsHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "col-start-2": !0,
    "col-end-2": !0
  },
  datepicker__yearsHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-neutral-900": !0,
    "col-start-2": !0,
    "col-end-2": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__timeHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "col-start-2": !0,
    "col-end-2": !0
  },
  datepicker__daysHeader: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0
  },
  datepicker__prev: {
    "mr-auto": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "col-start-1": !0,
    "col-end-1": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0
  },
  datepicker__next: {
    "ml-auto": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "col-start-3": !0,
    "col-end-3": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0
  },
  datepicker__prevLabel: {
    hidden: !0
  },
  datepicker__nextLabel: {
    hidden: !0
  },
  datepicker__prevIcon: {
    flex: !0,
    "w-[0.75em]": !0,
    "select-none": !0,
    "text-neutral-900": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__nextIcon: {
    flex: !0,
    "w-[0.75em]": !0,
    "select-none": !0,
    "text-neutral-900": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__panel: {
    flex: !0,
    "justify-center": !0
  },
  datepicker__months: {
    grid: !0,
    "grid-cols-3": !0,
    "w-full": !0
  },
  datepicker__month: {
    "m-2": !0,
    "p-2": !0,
    "text-center": !0,
    "text-neutral-900": !0,
    "bg-transparent": !0,
    "aria-selected:!bg-neutral-900": !0,
    "aria-selected:!text-white": !0,
    "focus:outline-none": !0,
    "focus:ring-2": !0,
    "focus:bg-white": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:pointer-events-none": !0,
    "dark:text-neutral-100": !0,
    "dark:aria-selected:!bg-neutral-100": !0,
    "dark:aria-selected:!text-black": !0,
    "dark:focus:bg-black": !0
  },
  datepicker__years: {
    grid: !0,
    "grid-cols-5": !0,
    "w-full": !0
  },
  datepicker__year: {
    "text-sm": !0,
    "text-center": !0,
    "text-neutral-900": !0,
    "items-center": !0,
    "m-1": !0,
    "p-1": !0,
    "aria-selected:!bg-neutral-900": !0,
    "aria-selected:!text-white": !0,
    "focus:outline-none": !0,
    "focus:ring-2": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:pointer-events-none": !0,
    "dark:text-neutral-100": !0,
    "dark:aria-selected:!bg-neutral-100": !0,
    "dark:aria-selected:!text-black": !0,
    "dark:focus:bg-black": !0
  },
  datepicker__weekDays: {
    grid: !0,
    "grid-cols-7": !0
  },
  datepicker__weekDay: {
    "text-neutral-900": !0,
    "m-1.5": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__week: {
    grid: !0,
    "grid-cols-7": !0,
    "group-data-[disabled=true]:opacity-50": !0,
    "group-data-[disabled=true]:pointer-events-none": !0
  },
  datepicker__dayCell: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "text-center": !0,
    "text-neutral-900": !0,
    "w-[2.25em]": !0,
    "h-[2.25em]": !0,
    "m-1": !0,
    "p-2": !0,
    "bg-neutral-100": !0,
    "aria-selected:bg-neutral-900": !0,
    "aria-selected:text-white": !0,
    "focus:outline-none": !0,
    "focus:ring-2": !0,
    "focus:bg-white": !0,
    "data-[disabled=true]:opacity-50": !0,
    "data-[disabled=true]:pointer-events-none": !0,
    "dark:text-neutral-100": !0,
    "dark:bg-neutral-700": !0,
    "dark:aria-selected:bg-neutral-100": !0,
    "dark:aria-selected:text-black": !0,
    "dark:focus:bg-black": !0
  },
  datepicker__timeInput: {
    "w-full": !0,
    "border-2": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "text-neutral-900": !0,
    "border-neutral-900": !0,
    "rounded-none": !0,
    "py-2": !0,
    "px-3": !0,
    "my-2.5": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "dark:text-neutral-100": !0,
    "dark:border-neutral-100": !0
  },
  datepicker__dayButton: {
    "appearance-none": !0,
    "text-neutral-900": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-900": !0,
    "mx-1": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "dark:text-neutral-100": !0,
    "dark:border-neutral-100": !0
  },
  datepicker__monthButton: {
    "appearance-none": !0,
    "text-neutral-900": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-900": !0,
    "mx-1": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "dark:text-neutral-100": !0,
    "dark:border-neutral-100": !0
  },
  datepicker__yearButton: {
    "appearance-none": !0,
    "text-neutral-900": !0,
    "px-2.5": !0,
    "py-0.5": !0,
    "border-2": !0,
    "border-neutral-900": !0,
    "mx-1": !0,
    "focus-visible:outline-none": !0,
    "focus-visible:ring-2": !0,
    "dark:text-neutral-100": !0,
    "dark:border-neutral-100": !0
  },
  datepicker__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  datepicker__messages: {
    "": !0
  },
  datepicker__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  dropdown__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  dropdown__wrapper: {
    "mb-1.5": !0
  },
  dropdown__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  dropdown__inner: {
    "": !0
  },
  dropdown__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  dropdown__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  dropdown__selector: {
    flex: !0,
    grow: !0,
    "justify-between": !0,
    "w-full": !0,
    "py-2": !0,
    "pl-3": !0,
    "pr-0": !0,
    "text-base": !0,
    "text-neutral-900": !0,
    "text-left": !0,
    "group-data-[prefix-icon]:!pl-0": !0,
    "group-data-[suffix-icon]:!pr-0": !0,
    "data-[placeholder]:text-neutral-400": !0,
    "dark:text-neutral-100": !0,
    "dark:data-[placeholder]:text-neutral-500": !0
  },
  dropdown__placeholder: {
    "text-neutral-400": !0,
    "dark:text-neutral-500": !0,
    grow: !0
  },
  dropdown__optionLoading: {
    "": !0
  },
  dropdown__selectionWrapper: {
    "": !0
  },
  dropdown__selection: {
    "[&>*]:ml-0": !0
  },
  dropdown__selectionsWrapper: {
    "w-[85%]": !0,
    "overflow-hidden": !0
  },
  dropdown__selections: {
    "inline-flex": !0,
    "items-center": !0
  },
  dropdown__selectionsItem: {
    "whitespace-nowrap": !0,
    "mr-1": !0
  },
  dropdown__truncationCount: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "h-[1.5em]": !0,
    "bg-neutral-900": !0,
    "text-white": !0,
    "whitespace-nowrap": !0,
    "text-[11px]": !0,
    "[line-height:1em]": !0,
    "tracking-tighter": !0,
    "leading-0": !0,
    "py-px": !0,
    "px-1": !0,
    "shrink-0": !0,
    "my-auto": !0,
    "dark:bg-neutral-100": !0,
    "dark:text-neutral-900": !0
  },
  dropdown__tagsWrapper: {
    "": !0
  },
  dropdown__tags: {
    "": !0
  },
  dropdown__tagWrapper: {
    "[&.formkit-dropZone_.formkit-tag]:opacity-50": !0,
    "[&.formkit-touchDropZone_.formkit-tag]:opacity-50": !0
  },
  dropdown__tag: {
    "": !0
  },
  dropdown__tagLabel: {
    "": !0
  },
  dropdown__removeSelection: {
    "": !0
  },
  dropdown__selectIcon: {
    "shrink-0": !0
  },
  dropdown__dropdownWrapper: {
    "group-data-[overscroll]:m-0": !0,
    "group-data-[overscroll]:shadow-none": !0
  },
  dropdown__listbox: {
    "": !0
  },
  dropdown__emptyMessage: {
    "": !0
  },
  dropdown__emptyMessageInner: {
    "": !0
  },
  dropdown__listItem: {
    "": !0
  },
  dropdown__selectedIcon: {
    "": !0
  },
  dropdown__option: {
    "": !0
  },
  dropdown__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  dropdown__messages: {
    "": !0
  },
  dropdown__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  mask__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  mask__wrapper: {
    "mb-1.5": !0
  },
  mask__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  mask__inner: {
    relative: !0
  },
  mask__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  mask__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  mask__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "group-data-[has-overlay]:!caret-neutral-900": !0,
    "dark:group-data-[has-overlay]:!caret-neutral-100": !0
  },
  mask__overlay: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  mask__overlayInner: {
    "": !0
  },
  mask__overlayPlaceholder: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  mask__overlayChar: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  mask__overlayEnum: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  mask__overlayLiteral: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  mask__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  mask__messages: {
    "": !0
  },
  mask__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  rating__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  rating__wrapper: {
    "mb-1.5": !0
  },
  rating__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  rating__inner: {
    flex: !0,
    "w-[130px]": !0,
    "items-center": !0,
    relative: !0
  },
  rating__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  rating__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  rating__itemsWrapper: {
    relative: !0,
    "inline-flex": !0,
    "focus:outline-2": !0,
    "focus:outline-neutral-900": !0
  },
  rating__onItemRow: {
    "h-full": !0,
    "w-full": !0
  },
  rating__offItemRow: {
    "h-full": !0,
    "w-full": !0
  },
  rating__onItemWrapper: {
    "[&>*]:w-full": !0,
    "[&>*]:h-full": !0,
    "w-full": !0,
    "h-full": !0,
    "text-yellow-400": !0
  },
  rating__offItemWrapper: {
    "[&>*]:w-full": !0,
    "[&>*]:h-full": !0,
    "w-full": !0,
    "h-full": !0,
    "text-neutral-400": !0,
    "dark:text-neutral-500": !0
  },
  rating__ratingItem: {
    relative: !0,
    "focus-within:outline": !0,
    "focus-within:outline-2": !0,
    "focus-within:outline-neutral-900": !0,
    "w-[1.5em]": !0,
    "h-[1.5em]": !0
  },
  rating__itemLabelInner: {
    "h-px": !0,
    "w-px": !0,
    "overflow-hidden": !0,
    absolute: !0,
    "white-space-nowrap": !0
  },
  rating__itemLabel: {
    absolute: !0,
    "h-full": !0
  },
  rating__ratingIcon: {
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    flex: !0
  },
  rating__input: {
    "appearance-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "outline-none": !0
  },
  rating__messages: {
    "mt-1.5": !0
  },
  repeater__outer: {
    "flex-grow": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "group/repeater": !0,
    "max-w-full": !0
  },
  repeater__fieldset: {
    "min-w-0": !0
  },
  repeater__legend: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "dark:text-neutral-100": !0,
    "mb-2": !0
  },
  repeater__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0,
    "mb-2": !0,
    "-mt-1": !0
  },
  repeater__inner: {
    "": !0
  },
  repeater__items: {
    "": !0
  },
  repeater__item: {
    flex: !0,
    "w-full": !0,
    "mb-2": !0,
    border: !0,
    "border-neutral-900": !0,
    "rounded-none": !0,
    "dark:border-neutral-100": !0,
    "[&.formkit-dropZone]:opacity-30": !0
  },
  repeater__dragHandleWrapper: {
    relative: !0,
    "w-8": !0,
    "rounded-none": !0,
    "rounded-tr-none": !0,
    "rounded-br-none": !0
  },
  repeater__dragHandle: {
    "w-full": !0,
    "h-full": !0,
    flex: !0,
    absolute: !0,
    "top-0": !0,
    "left-0": !0,
    "cursor-grab": !0,
    "active:cursor-grabbing": !0
  },
  repeater__dragHandleIcon: {
    "w-2": !0,
    "m-auto": !0,
    "text-neutral-500": !0,
    "[&>svg>path]:fill-current": !0
  },
  repeater__content: {
    "min-w-0": !0,
    grow: !0,
    "p-5": !0,
    flex: !0,
    "flex-col": !0,
    "align-center": !0,
    "[&>div[data-type]]:max-w-none": !0,
    "[&>div[data-type]:last-child]:mb-0": !0
  },
  repeater__controls: {
    flex: !0,
    "flex-col": !0,
    "items-center": !0,
    "justify-center": !0,
    "p-2": !0,
    "[&>li]:w-[1.5em]": !0,
    "[&>li]:h-[1.5em]": !0,
    "[&>li]:my-1": !0,
    "[&>li]:mx-auto": !0,
    "[&>li]:flex": !0,
    "[&>li]:items-center": !0,
    "[&>li]:appearance-none": !0,
    "[&>li]:justify-center": !0,
    "[&>li]:aspect-[1/1]": !0,
    "[&>li]:text-neutral-500": !0,
    "[&>li:hover]:text-neutral-600": !0,
    "group-data-[disabled]/repeater:[&>li_button]:opacity-50": !0,
    "group-data-[disabled]/repeater:[&>li_button]:!text-neutral-500": !0,
    "group-data-[disabled]/repeater:[&>li_button]:pointer-events-none": !0,
    "dark:[&>li]:text-neutral-500": !0,
    "dark:[&>li:hover]:text-neutral-200": !0
  },
  repeater__upControl: {
    "": !0
  },
  repeater__removeControl: {
    "": !0
  },
  repeater__insertControl: {
    "": !0
  },
  repeater__downControl: {
    "": !0
  },
  repeater__controlLabel: {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  repeater__moveDownIcon: {
    block: !0,
    "w-[0.75em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__moveUpIcon: {
    block: !0,
    "w-[0.75em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__removeIcon: {
    block: !0,
    "w-[1.25em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__addIcon: {
    block: !0,
    "w-[1.25em]": !0,
    "aspect-[1/1]": !0
  },
  repeater__addButton: {
    "!mb-0": !0,
    "group-data-[disabled]/repeater:pointer-events-none": !0,
    "group-data-[disabled]/repeater:opacity-50": !0,
    "group-data-[disabled]/repeater:grayscale": !0
  },
  repeater__messages: {
    "": !0
  },
  repeater__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  slider__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  slider__wrapper: {
    "mb-1.5": !0
  },
  slider__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  slider__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0,
    "mb-1": !0
  },
  slider__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-400": !0
  },
  slider__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "text-neutral-600": !0,
    "dark:text-neutral-400": !0
  },
  slider__sliderInner: {
    flex: !0,
    "items-center": !0,
    "[&>[data-type=number]]:mb-0": !0,
    "[&>[data-type=number]]:ml-3": !0,
    "[&>[data-type=number]]:shrink": !0,
    "[&>[data-type=number]]:grow-0": !0,
    "[&[data-has-mark-labels=true]_[id^=track]]:mb-3": !0
  },
  slider__track: {
    grow: !0,
    relative: !0,
    "z-20": !0,
    "py-2.5": !0,
    "select-none": !0
  },
  slider__chart: {
    relative: !0,
    "w-full": !0,
    flex: !0,
    "items-center": !0,
    "justify-between": !0,
    "aspect-[3/1]": !0,
    "mb-2": !0,
    "z-20": !0
  },
  slider__chartBar: {
    absolute: !0,
    "bottom-0": !0,
    "h-full": !0,
    "bg-neutral-400": !0,
    "data-[active=true]:bg-neutral-900": !0,
    "dark:bg-neutral-700": !0,
    "dark:data-[active=true]:bg-neutral-100": !0
  },
  slider__trackWrapper: {
    "rounded-none": !0,
    "bg-neutral-200": !0,
    "px-1": !0,
    "dark:bg-neutral-700": !0
  },
  slider__trackInner: {
    relative: !0,
    "h-1.5": !0
  },
  slider__fill: {
    "h-full": !0,
    "rounded-none": !0,
    absolute: !0,
    "top-0": !0,
    "-mx-1": !0,
    "bg-neutral-900": !0,
    "dark:bg-neutral-100": !0
  },
  slider__marks: {
    absolute: !0,
    "pointer-events-none": !0,
    "inset-0": !0
  },
  slider__mark: {
    absolute: !0,
    "top-1/2": !0,
    "w-[3px]": !0,
    "h-[3px]": !0,
    "rounded-full": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    "bg-neutral-900": !0,
    "data-[active=true]:bg-white": !0,
    "dark:bg-neutral-400": !0,
    "dark:data-[active=true]:bg-neutral-600": !0
  },
  slider__markLabel: {
    absolute: !0,
    "top-[calc(100%+0.5em)]": !0,
    "left-1/2": !0,
    "text-neutral-900": !0,
    "text-xs": !0,
    "-translate-x-1/2": !0,
    "dark:text-neutral-400": !0
  },
  slider__handles: {
    "": !0
  },
  slider__handle: {
    "group/handle": !0,
    "select-none": !0,
    "w-4": !0,
    "h-4": !0,
    "rounded-full": !0,
    "bg-white": !0,
    absolute: !0,
    "top-1/2": !0,
    "left-0": !0,
    "z-30": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    "border-2": !0,
    "border-neutral-900": !0,
    "focus-visible:outline-0": !0,
    "focus-visible:ring-2": !0,
    "data-[is-target=true]:z-20": !0
  },
  slider__handleInner: {
    "": !0
  },
  slider__tooltip: {
    absolute: !0,
    "bottom-full": !0,
    "left-1/2": !0,
    "-translate-x-1/2": !0,
    "-translate-y-[4px]": !0,
    "bg-neutral-900": !0,
    "text-white": !0,
    "py-1": !0,
    "px-1.5": !0,
    "text-xs": !0,
    "leading-none": !0,
    "whitespace-nowrap": !0,
    "rounded-none": !0,
    "opacity-0": !0,
    "transition-opacity": !0,
    "group-hover:opacity-100": !0,
    "group-focus-visible/handle:opacity-100": !0,
    "group-data-[show-tooltip=true]/handle:opacity-100": !0,
    "dark:bg-neutral-100": !0,
    "dark:text-neutral-900": !0,
    'after:content-[""]': !0,
    "after:absolute": !0,
    "after:top-full": !0,
    "after:left-1/2": !0,
    "after:-translate-x-1/2": !0,
    "after:-translate-y-[1px]": !0,
    "after:border-4": !0,
    "after:border-transparent": !0,
    "after:border-t-neutral-900": !0,
    "dark:after:border-t-neutral-100": !0
  },
  slider__linkedValues: {
    flex: !0,
    "items-start": !0,
    "justify-between": !0
  },
  slider__minValue: {
    relative: !0,
    grow: !0,
    "!max-w-[45%]": !0,
    "mb-0": !0,
    '[&>div::after]:content-[""]': !0,
    "[&>div::after]:absolute": !0,
    "[&>div::after]:top-1/2": !0,
    "[&>div::after]:left-[105%]": !0,
    "[&>div::after]:-translate-y-1/2": !0,
    "[&>div::after]:w-[12%]": !0,
    "[&>div::after]:h-[1px]": !0,
    "[&>div::after]:bg-neutral-900": !0
  },
  slider__maxValue: {
    relative: !0,
    grow: !0,
    "!max-w-[45%]": !0,
    "mb-0": !0
  },
  slider__messages: {
    "": !0
  },
  slider__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  taglist__outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  taglist__wrapper: {
    "mb-1.5": !0
  },
  taglist__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  taglist__inner: {
    "py-2": !0,
    "pr-0": !0,
    "pl-0": !0
  },
  taglist__prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  taglist__suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  taglist__tags: {
    "pl-3": !0
  },
  taglist__tagWrapper: {
    "[&.formkit-dropZone_.formkit-tag]:opacity-50": !0,
    "[&.formkit-touchDropZone_.formkit-tag]:opacity-50": !0
  },
  taglist__tag: {
    "": !0
  },
  taglist__tagLabel: {
    "": !0
  },
  taglist__removeSelection: {
    "": !0
  },
  taglist__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "!p-0": !0,
    "!w-[0%]": !0,
    "min-w-[1em]": !0,
    "inline-block": !0,
    "mb-1": !0
  },
  taglist__loaderIcon: {
    "animate-spin": !0,
    flex: !0,
    "items-center": !0,
    "my-auto": !0,
    "ml-2": !0,
    "text-base": !0,
    "text-neutral-900": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-100": !0
  },
  taglist__listboxButton: {
    "ml-auto": !0,
    "shrink-0": !0
  },
  taglist__selectIcon: {
    "": !0
  },
  taglist__dropdownWrapper: {
    "": !0
  },
  taglist__listbox: {
    "": !0
  },
  taglist__emptyMessage: {
    "": !0
  },
  taglist__emptyMessageInner: {
    "": !0
  },
  taglist__listItem: {
    "": !0
  },
  taglist__selectedIcon: {
    "": !0
  },
  taglist__option: {
    "": !0
  },
  taglist__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  taglist__messages: {
    "": !0
  },
  taglist__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  toggle__outer: {
    group: !0,
    "flex-grow": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0,
    "max-w-none": !0
  },
  toggle__wrapper: {
    flex: !0,
    "flex-wrap": !0,
    "items-center": !0,
    "mb-1": !0
  },
  toggle__altLabel: {
    block: !0,
    "w-full": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  toggle__inner: {
    "inline-block": !0,
    "mr-2": !0
  },
  toggle__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    peer: !0,
    absolute: !0,
    "opacity-0": !0,
    "w-0": !0,
    "h-0": !0
  },
  toggle__track: {
    relative: !0,
    "min-w-[3em]": !0,
    "p-0.5": !0,
    "select-none": !0,
    "rounded-full": !0,
    "transition-all": !0,
    "bg-neutral-400": !0,
    "peer-focus-visible:ring-2": !0,
    "peer-checked:bg-neutral-900": !0,
    "peer-checked:[&>div:last-child]:left-full": !0,
    "peer-checked:[&>div:last-child]:-translate-x-full": !0,
    "peer-checked:[&>div:first-child:not(:last-child)]:left-0": !0,
    "peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0": !0,
    "dark:bg-neutral-600": !0,
    "dark:peer-checked:bg-neutral-100": !0
  },
  toggle__innerLabel: {
    absolute: !0,
    "text-white": !0,
    "text-[10px]": !0,
    "left-full": !0,
    "top-1/2": !0,
    "-translate-x-full": !0,
    "-translate-y-1/2": !0,
    "px-1": !0,
    "dark:text-neutral-900": !0
  },
  toggle__thumb: {
    relative: !0,
    "w-[50%]": !0,
    "aspect-[1/1]": !0,
    "p-0.5": !0,
    "left-0": !0,
    "rounded-full": !0,
    "transition-all": !0,
    "bg-white": !0,
    "text-neutral-900": !0,
    "dark:bg-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  toggle__thumbIcon: {
    "": !0
  },
  toggle__valueLabel: {
    "font-bold": !0,
    "text-xs": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  toggle__label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0,
    "peer-first:mb-0": !0
  },
  toggle__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  toggle__messages: {
    "": !0
  },
  toggle__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  togglebuttons__options: {
    "group/options": !0,
    "inline-flex": !0,
    "data-[vertical=true]:flex-col": !0
  },
  togglebuttons__option: {
    "group/option": !0
  },
  togglebuttons__input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0,
    "!px-4": !0,
    "group-data-[vertical=true]/options:w-full": !0,
    "justify-center": !0,
    "disabled:opacity-50": !0,
    "disabled:cursor-not-allowed": !0,
    "group-data-[disabled]:disabled:opacity-100": !0,
    "aria-[pressed=true]:bg-neutral-900": !0,
    "aria-[pressed=true]:text-white": !0,
    "dark:aria-[pressed=true]:bg-neutral-100": !0,
    "dark:aria-[pressed=true]:text-black": !0,
    "group-[]/option:!rounded-none": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded-none": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded-none": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded-tr-none": !0,
    "group-data-[vertical=false]/options:group-first/option:!rounded-br-none": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded-bl-none": !0,
    "group-data-[vertical=true]/options:group-first/option:!rounded-br-none": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded-none": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded-none": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded-tl-none": !0,
    "group-data-[vertical=false]/options:group-last/option:!rounded-bl-none": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded-tl-none": !0,
    "group-data-[vertical=true]/options:group-last/option:!rounded-tr-none": !0,
    "group-data-[vertical=false]/options:group-[]/option:!border-r-0": !0,
    "group-data-[vertical=false]/options:group-last/option:!border-r": !0,
    "group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-neutral-100": !0,
    "group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-neutral-900": !0,
    "group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-neutral-900": !0,
    "dark:group-data-[vertical=false]/options:group-[]/option:aria-[pressed=true]:border-x-neutral-900": !0,
    "dark:group-data-[vertical=false]/options:group-first/option:aria-[pressed=true]:border-l-neutral-100": !0,
    "dark:group-data-[vertical=false]/options:group-last/option:aria-[pressed=true]:border-r-neutral-100": !0,
    "group-data-[vertical=true]/options:group-[]/option:!border-b-0": !0,
    "group-data-[vertical=true]/options:group-last/option:!border-b": !0,
    "group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-neutral-100": !0,
    "group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-neutral-900": !0,
    "group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-neutral-900": !0,
    "dark:group-data-[vertical=true]/options:group-[]/option:aria-[pressed=true]:border-y-neutral-900": !0,
    "dark:group-data-[vertical=true]/options:group-first/option:aria-[pressed=true]:border-t-neutral-100": !0,
    "dark:group-data-[vertical=true]/options:group-last/option:aria-[pressed=true]:border-b-neutral-100": !0
  },
  transferlist__outer: {
    group: !0,
    "flex-grow": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0,
    "max-w-none": !0,
    "[&_.dnd-placeholder]:bg-neutral-900": !0,
    "&_.dnd-placeholder]:text-white": !0,
    "dark:[&_.dnd-placeholder]:bg-neutral-100": !0,
    "dark:[&_.dnd-placeholder]:text-neutral-900": !0
  },
  transferlist__fieldset: {
    "": !0
  },
  transferlist__legend: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "dark:text-neutral-100": !0
  },
  transferlist__help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0,
    "pb-2": !0
  },
  transferlist__wrapper: {
    "mb-1.5": !0,
    flex: !0,
    "flex-col": !0,
    "sm:flex-row": !0,
    "justify-between": !0,
    "w-full": !0,
    "max-w-none": !0
  },
  transferlist__transferlist: {
    grow: !0,
    shrink: !0,
    "min-w-0": !0,
    "aspect-[4/5]": !0,
    "h-[350px]": !0,
    "overflow-hidden": !0,
    flex: !0,
    "flex-col": !0,
    border: !0,
    "border-neutral-900": !0,
    "rounded-none": !0,
    "select-none": !0,
    "dark:border-neutral-100": !0
  },
  transferlist__transferlistHeader: {
    flex: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "justify-between": !0,
    "items-center": !0,
    "border-b": !0,
    "border-neutral-900": !0,
    "py-2": !0,
    "px-2.5": !0,
    "dark:border-neutral-100": !0,
    "dark:text-neutral-100": !0
  },
  transferlist__transferlistHeaderLabel: {
    "": !0
  },
  transferlist__transferlistHeaderItemCount: {
    "ml-auto": !0,
    "text-xs": !0,
    "text-center": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  transferlist__transferlistControls: {
    "p-2": !0,
    "border-b": !0,
    "border-neutral-900": !0,
    "dark:border-neutral-100": !0
  },
  transferlist__transferlistSearch: {
    border: !0,
    "rounded-none": !0,
    "border-neutral-900": !0,
    "text-neutral-900": !0,
    "px-2.5": !0,
    "py-2": !0,
    "dark:text-neutral-100": !0,
    "dark:border-neutral-100": !0
  },
  transferlist__transferlistSearchInput: {
    "w-full": !0,
    "bg-transparent": !0,
    "outline-none": !0,
    "text-sm": !0,
    "cursor-pointer": !0
  },
  transferlist__transferlistSearchClear: {
    "m-auto": !0
  },
  transferlist__closeIcon: {
    "ml-2": !0,
    "text-neutral-900": !0,
    "select-none": !0,
    flex: !0,
    "text-base": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1em]": !0
  },
  transferlist__transferlistListItems: {
    "h-full": !0,
    "overflow-y-auto": !0
  },
  transferlist__transferlistListItem: {
    "bg-white": !0,
    "py-2": !0,
    "px-2": !0,
    "text-neutral-900": !0,
    "ring-1": !0,
    "ring-neutral-900": !0,
    "aria-selected:bg-neutral-100": !0,
    "data-[is-active=true]:bg-neutral-100": !0,
    relative: !0,
    flex: !0,
    "items-center": !0,
    "pl-[1.5em]": !0,
    "[&.formkit-dropZone]:bg-neutral-100": !0,
    "[&.formkit-selectionDropZone]:bg-neutral-100": !0,
    "[&.formkit-touchDropZone]:bg-neutral-100": !0,
    "[&.formkit-touchSelectionDropZone]:bg-neutral-100": !0,
    "[&.formkit-longTouch]:bg-neutral-100": !0,
    "dark:bg-neutral-900": !0,
    "dark:text-neutral-100": !0,
    "dark:aria-selected:bg-neutral-700": !0,
    "dark:data-[is-active=true]:bg-neutral-700": !0,
    "dark:ring-neutral-100": !0
  },
  transferlist__selectedIcon: {
    absolute: !0,
    "w-[0.75em]": !0,
    "left-[0.5em]": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  transferlist__transferlistOption: {
    "text-sm": !0
  },
  transferlist__transferListLoadMore: {
    "": !0
  },
  transferlist__source: {
    "": !0
  },
  transferlist__sourceHeader: {
    "": !0
  },
  transferlist__sourceHeaderLabel: {
    "": !0
  },
  transferlist__sourceHeaderItemCount: {
    "": !0
  },
  transferlist__sourceControls: {
    "": !0
  },
  transferlist__sourceSearch: {
    flex: !0,
    "items-center": !0
  },
  transferlist__sourceSearchInput: {
    "": !0
  },
  transferlist__sourceSearchClear: {
    "": !0
  },
  transferlist__sourceListItems: {
    "group-data-[is-max=true]:opacity-50": !0
  },
  transferlist__sourceListItem: {
    "": !0
  },
  transferlist__sourceOption: {
    "": !0
  },
  transferlist__sourceEmptyMessage: {
    "my-2": !0,
    "text-center": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  transferlist__sourceLoadMore: {
    "": !0
  },
  transferlist__sourceLoadMoreInner: {
    "": !0
  },
  transferlist__target: {
    "": !0
  },
  transferlist__targetHeader: {
    "": !0
  },
  transferlist__targetHeaderLabel: {
    "": !0
  },
  transferlist__targetHeaderItemCount: {
    "": !0
  },
  transferlist__targetListItems: {
    "": !0
  },
  transferlist__targetListItem: {
    "": !0
  },
  transferlist__targetOption: {
    "": !0
  },
  transferlist__targetEmptyMessage: {
    "my-2": !0,
    "text-center": !0,
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  transferlist__targetLoadMore: {
    "": !0
  },
  transferlist__emptyMessageInner: {
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "p-2": !0,
    "text-sm": !0
  },
  transferlist__loadMoreInner: {
    flex: !0,
    "text-sm": !0,
    "text-neutral-900": !0,
    "p-2": !0,
    "[&>span]:mr-2": !0,
    "dark:text-neutral-100": !0
  },
  transferlist__transferControls: {
    "inline-flex": !0,
    "flex-row": !0,
    "justify-center": !0,
    "grow-0": !0,
    shrink: !0,
    border: !0,
    "border-neutral-900": !0,
    "rounded-none": !0,
    "overflow-clip": !0,
    "my-2": !0,
    "mx-auto": !0,
    "dark:border-neutral-100": !0,
    "sm:flex-col": !0,
    "sm:my-auto": !0,
    "sm:mx-2": !0
  },
  transferlist__controlLabel: {
    absolute: !0,
    "opacity-0": !0,
    "pointer-events-none": !0,
    "text-[0px]": !0
  },
  transferlist__transferlistButton: {
    "appearance-none": !0,
    "border-none": !0,
    flex: !0,
    "justify-center": !0,
    "text-sm": !0,
    "shrink-0": !0,
    "box-content": !0,
    "text-neutral-900": !0,
    "disabled:!text-neutral-400": !0,
    "p-3": !0,
    "disabled:opacity-50": !0,
    "dark:text-neutral-100": !0,
    "dark:disabled:!text-neutral-500": !0
  },
  transferlist__transferButtonForwardAll: {
    "": !0
  },
  transferlist__transferButtonForward: {
    "": !0
  },
  transferlist__transferButtonBackward: {
    "": !0
  },
  transferlist__transferButtonBackwardAll: {
    "": !0
  },
  transferlist__fastForwardIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__moveRightIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__moveLeftIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__rewindIcon: {
    "w-4": !0,
    flex: !0,
    "select-none": !0,
    "[&>svg]:m-auto": !0,
    "[&>svg]:w-full": !0,
    "[&>svg]:max-w-[1rem]": !0,
    "[&>svg]:max-h-[1rem]": !0,
    "rotate-90": !0,
    "sm:rotate-0": !0
  },
  transferlist__messages: {
    "mt-2": !0
  },
  transferlist__message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  barcode__barcodeIcon: {
    "w-[1.5em]": !0,
    "text-neutral-700": !0,
    "cursor-pointer": !0,
    "dark:text-neutral-300": !0
  },
  barcode__dialog: {
    "border-none": !0,
    "outline-none": !0,
    "overflow-clip": !0,
    "p-0": !0,
    "bg-black": !0,
    "rounded-none": !0,
    "w-[100%-2rem]": !0,
    "max-w-[30rem]": !0,
    "[&::backdrop]:bg-neutral-800/50": !0
  },
  barcode__video: {
    "w-full": !0,
    "aspect-[1/1]": !0,
    "object-cover": !0,
    block: !0,
    "pointer-events-none": !0
  },
  barcode__closeIcon: {
    "cursor-pointer": !0,
    absolute: !0,
    "bg-white": !0,
    "color-neutral-700": !0,
    "w-[1.5em]": !0,
    "h-[1.5em]": !0,
    "rounded-none": !0,
    flex: !0,
    "top-2": !0,
    "right-2": !0,
    "z-20": !0,
    "[&>svg]:w-[1.25em]": !0,
    "[&>svg]:h-[1.25em]": !0,
    "[&>svg]:m-auto": !0
  },
  barcode__overlay: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0,
    absolute: !0,
    "top-1/2": !0,
    "left-1/2": !0,
    "w-[min(20em,75%)]": !0,
    "aspect-[1/1]": !0,
    "-translate-x-1/2": !0,
    "-translate-y-1/2": !0,
    "rounded-none": !0,
    "pointer-events-none": !0,
    "shadow-[0_0_0_999em_rgba(0,0,0,0.5)]": !0
  },
  barcode__overlayDecorators: {
    absolute: !0,
    "inset-0": !0,
    "z-10": !0
  },
  barcode__overlayDecoratorTopLeft: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    "rounded-none": !0,
    "top-0": !0,
    "left-0": !0,
    "border-l-4": !0,
    "border-t-4": !0,
    "rounded-tr-none": !0,
    "rounded-bl-none": !0
  },
  barcode__overlayDecoratorTopRight: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    "rounded-none": !0,
    "top-0": !0,
    "right-0": !0,
    "border-r-4": !0,
    "border-t-4": !0,
    "rounded-tl-none": !0,
    "rounded-br-none": !0
  },
  barcode__overlayDecoratorBottomRight: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    "rounded-none": !0,
    "bottom-0": !0,
    "right-0": !0,
    "border-r-4": !0,
    "border-b-4": !0,
    "rounded-tr-none": !0,
    "rounded-bl-none": !0
  },
  barcode__overlayDecoratorBottomLeft: {
    absolute: !0,
    "w-[1.5rem]": !0,
    "h-[1.5rem]": !0,
    "rounded-none": !0,
    "bottom-0": !0,
    "left-0": !0,
    "border-l-4": !0,
    "border-b-4": !0,
    "rounded-tl-none": !0,
    "rounded-br-none": !0
  },
  "multi-step__outer": {
    group: !0,
    "flex-grow": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0,
    "group/multistep": !0,
    "max-w-[32rem]": !0
  },
  "multi-step__wrapper": {
    "mb-1.5": !0,
    "group/wrapper": !0,
    "data-[tab-style=tab]:rounded-none": !0
  },
  "multi-step__tabs": {
    flex: !0,
    "items-center": !0,
    "group-data-[tab-style=tab]/wrapper:overflow-auto": !0,
    "group-data-[tab-style=tab]/wrapper:border": !0,
    "group-data-[tab-style=tab]/wrapper:border-b-0": !0,
    "group-data-[tab-style=tab]/wrapper:border-neutral-900": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-none": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-bl-none": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-br-none": !0,
    "dark:group-data-[tab-style=tab]/wrapper:border-neutral-100": !0,
    "group-data-[tab-style=progress]/wrapper:my-6": !0,
    "group-data-[tab-style=progress]/wrapper:justify-around": !0,
    "group-data-[tab-style=progress]/wrapper:overflow-visible": !0,
    "group-data-[tab-style=progress]/wrapper:group-data-[hide-labels=true]/wrapper:mb-3.5": !0
  },
  "multi-step__tab": {
    "group/tab": !0,
    "group-data-[tab-style=tab]/wrapper:relative": !0,
    "group-data-[tab-style=tab]/wrapper:flex": !0,
    "group-data-[tab-style=tab]/wrapper:grow": !0,
    "group-data-[tab-style=tab]/wrapper:text-sm": !0,
    "group-data-[tab-style=tab]/wrapper:items-center": !0,
    "group-data-[tab-style=tab]/wrapper:justify-center": !0,
    "group-data-[tab-style=tab]/wrapper:cursor-pointer": !0,
    "group-data-[tab-style=tab]/wrapper:text-neutral-700": !0,
    "group-data-[tab-style=tab]/wrapper:bg-neutral-50": !0,
    "group-data-[tab-style=tab]/wrapper:py-3.5": !0,
    "group-data-[tab-style=tab]/wrapper:px-4": !0,
    "group-data-[tab-style=tab]/wrapper:border-r": !0,
    "group-data-[tab-style=tab]/wrapper:border-b": !0,
    "group-data-[tab-style=tab]/wrapper:border-neutral-900": !0,
    "group-data-[tab-style=tab]/wrapper:last:border-r-0": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:bg-white": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:border-b-transparent": !0,
    "group-data-[tab-style=tab]/wrapper:data-[active=true]:z-10": !0,
    "dark:group-data-[tab-style=tab]/wrapper:text-neutral-300": !0,
    "dark:group-data-[tab-style=tab]/wrapper:bg-neutral-950/20": !0,
    "dark:group-data-[tab-style=tab]/wrapper:data-[active=true]:bg-transparent": !0,
    "dark:group-data-[tab-style=tab]/wrapper:data-[active=true]:border-b-transparent": !0,
    "dark:group-data-[tab-style=tab]/wrapper:border-neutral-100": !0,
    "group-data-[tab-style=progress]/wrapper:flex": !0,
    "group-data-[tab-style=progress]/wrapper:flex-col": !0,
    "group-data-[tab-style=progress]/wrapper:items-center": !0,
    "group-data-[tab-style=progress]/wrapper:grow": !0,
    "group-data-[tab-style=progress]/wrapper:shrink-0": !0,
    "group-data-[tab-style=progress]/wrapper:relative": !0,
    "group-data-[tab-style=progress]/wrapper:before:block": !0,
    "group-data-[tab-style=progress]/wrapper:before:text-sm": !0,
    "group-data-[tab-style=progress]/wrapper:before:w-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:before:h-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:before:border-4": !0,
    "group-data-[tab-style=progress]/wrapper:before:border-neutral-300": !0,
    "group-data-[tab-style=progress]/wrapper:before:rounded-full": !0,
    "group-data-[tab-style=progress]/wrapper:before:bg-white": !0,
    "group-data-[tab-style=progress]/wrapper:before:z-10": !0,
    "dark:group-data-[tab-style=progress]/wrapper:before:border-neutral-700": !0,
    "dark:group-data-[tab-style=progress]/wrapper:before:bg-neutral-950": !0,
    "group-data-[tab-style=progress]/wrapper:after:block": !0,
    "group-data-[tab-style=progress]/wrapper:after:h-1": !0,
    "group-data-[tab-style=progress]/wrapper:after:w-full": !0,
    "group-data-[tab-style=progress]/wrapper:after:absolute": !0,
    "group-data-[tab-style=progress]/wrapper:after:top-[0.5em]": !0,
    "group-data-[tab-style=progress]/wrapper:after:left-[calc(50%+0.5em)]": !0,
    "group-data-[tab-style=progress]/wrapper:after:bg-neutral-300": !0,
    "group-data-[tab-style=progress]/wrapper:data-[valid=true]:data-[visited=true]:after:bg-neutral-900": !0,
    "group-data-[tab-style=progress]/wrapper:last:after:hidden": !0,
    "dark:group-data-[tab-style=progress]/wrapper:after:bg-neutral-700": !0,
    "dark:group-data-[tab-style=progress]/wrapper:data-[valid=true]:data-[visited=true]:after:bg-neutral-300": !0
  },
  "multi-step__tabLabel": {
    "group-data-[tab-style=progress]/wrapper:absolute": !0,
    "group-data-[tab-style=progress]/wrapper:text-neutral-800": !0,
    "group-data-[tab-style=progress]/wrapper:top-full": !0,
    "group-data-[tab-style=progress]/wrapper:w-full": !0,
    "group-data-[tab-style=progress]/wrapper:whitespace-nowrap": !0,
    "group-data-[tab-style=progress]/wrapper:text-xs": !0,
    "dark:group-data-[tab-style=progress]/wrapper:text-neutral-300": !0
  },
  "multi-step__badge": {
    "bg-neutral-900": !0,
    absolute: !0,
    "font-mono": !0,
    "font-bold": !0,
    flex: !0,
    "items-center": !0,
    "justify-center": !0,
    "aspect-[1/1]": !0,
    "[line-height:1.25rem]": !0,
    "text-white": !0,
    "rounded-full": !0,
    "dark:bg-neutral-300": !0,
    "dark:text-neutral-900": !0,
    "group-data-[tab-style=tab]/wrapper:text-[0.66rem]": !0,
    "group-data-[tab-style=tab]/wrapper:p-1.5": !0,
    "group-data-[tab-style=tab]/wrapper:w-5": !0,
    "group-data-[tab-style=tab]/wrapper:h-5": !0,
    "group-data-[tab-style=tab]/wrapper:top-1.5": !0,
    "group-data-[tab-style=tab]/wrapper:right-1.5": !0,
    "group-data-[tab-style=progress]/wrapper:w-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:h-[1.25rem]": !0,
    "group-data-[tab-style=progress]/wrapper:p-1": !0,
    "group-data-[tab-style=progress]/wrapper:text-[10px]": !0,
    "group-data-[tab-style=progress]/wrapper:[line-height:0]": !0,
    "group-data-[tab-style=progress]/wrapper:z-10": !0
  },
  "multi-step__validStepIcon": {
    "w-full": !0,
    "h-full": !0,
    "mt-0.5": !0
  },
  "multi-step__steps": {
    "px-10": !0,
    "pt-8": !0,
    "pb-4": !0,
    "bg-white": !0,
    border: !0,
    "border-neutral-900": !0,
    "rounded-none": !0,
    "dark:bg-transparent": !0,
    "dark:border-neutral-100": !0,
    "group-data-[tab-style=tab]/wrapper:border-t-0": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-tl-none": !0,
    "group-data-[tab-style=tab]/wrapper:rounded-tr-none": !0,
    "[&_[data-type]]:max-w-none": !0
  },
  step__stepActions: {
    flex: !0,
    "justify-between": !0,
    "[&>*]:grow-0": !0
  },
  step__stepPrevious: {
    "mr-1.5": !0
  },
  step__stepNext: {
    "ml-auto": !0
  }
}, Um = {
  outer: {
    group: !0,
    "flex-grow": !0,
    "max-w-[20em]": !0,
    "min-w-0": !0,
    "text-base": !0,
    "mb-4": !0,
    "data-[disabled]:select-none": !0,
    "data-[disabled]:opacity-50": !0,
    "data-[disabled]:pointer-events-none": !0
  },
  wrapper: {
    "mb-1.5": !0
  },
  label: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "mb-1": !0,
    "dark:text-neutral-100": !0
  },
  legend: {
    block: !0,
    "text-neutral-900": !0,
    "text-sm": !0,
    "dark:text-neutral-100": !0
  },
  input: {
    "appearance-none": !0,
    "outline-none": !0,
    "[color-scheme:light]": !0,
    "dark:[color-scheme:dark]": !0,
    "placeholder:text-neutral-400": !0,
    "dark:placeholder:text-neutral-500": !0
  },
  placeholder: {
    "text-neutral-400": !0,
    "dark:text-neutral-500": !0
  },
  prefixIcon: {
    flex: !0,
    "shrink-0": !0,
    "items-center": !0,
    "-ml-1": !0,
    "mr-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "[&>svg]:w-full": !0
  },
  suffixIcon: {
    flex: !0,
    "items-center": !0,
    "-mr-1": !0,
    "ml-2": !0,
    "text-base": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0
  },
  loaderIcon: {
    "animate-spin": !0,
    flex: !0,
    "items-center": !0,
    "my-auto": !0,
    "ml-2": !0,
    "text-base": !0,
    "text-neutral-900": !0,
    "h-[1em]": !0,
    "w-[1em]": !0,
    "shrink-0": !0,
    "[&>svg]:w-full": !0,
    "dark:text-neutral-100": !0
  },
  loadMoreInner: {
    flex: !0,
    "text-sm": !0,
    "text-neutral-900": !0,
    "p-2": !0,
    "[&>span]:mr-2": !0,
    "dark:text-neutral-100": !0
  },
  help: {
    "text-neutral-900": !0,
    "text-xs": !0,
    "dark:text-neutral-100": !0
  },
  messages: {
    "": !0
  },
  message: {
    "text-red-600": !0,
    "mb-1.5": !0,
    "text-xs": !0,
    "dark:text-red-400": !0
  },
  overlay: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  overlayPlaceholder: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  overlayLiteral: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  overlayChar: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  },
  overlayEnum: {
    "text-neutral-900": !0,
    "dark:text-neutral-100": !0
  }
};
var Io = class {
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
}, An = typeof window > "u" || "Deno" in globalThis;
function ar() {
}
function Wm(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Qm(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Gm(e, r) {
  return Math.max(e + (r || 0) - Date.now(), 0);
}
function pi(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Zm(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function mi(e, r) {
  const {
    type: t = "all",
    exact: o,
    fetchStatus: u,
    predicate: s,
    queryKey: d,
    stale: f
  } = e;
  if (d) {
    if (o) {
      if (r.queryHash !== Za(d, r.options))
        return !1;
    } else if (!On(r.queryKey, d))
      return !1;
  }
  if (t !== "all") {
    const m = r.isActive();
    if (t === "active" && !m || t === "inactive" && m)
      return !1;
  }
  return !(typeof f == "boolean" && r.isStale() !== f || u && u !== r.state.fetchStatus || s && !s(r));
}
function gi(e, r) {
  const { exact: t, status: o, predicate: u, mutationKey: s } = e;
  if (s) {
    if (!r.options.mutationKey)
      return !1;
    if (t) {
      if (Pn(r.options.mutationKey) !== Pn(s))
        return !1;
    } else if (!On(r.options.mutationKey, s))
      return !1;
  }
  return !(o && r.state.status !== o || u && !u(r));
}
function Za(e, r) {
  return ((r == null ? void 0 : r.queryKeyHashFn) || Pn)(e);
}
function Pn(e) {
  return JSON.stringify(
    e,
    (r, t) => Ma(t) ? Object.keys(t).sort().reduce((o, u) => (o[u] = t[u], o), {}) : t
  );
}
function On(e, r) {
  return e === r ? !0 : typeof e != typeof r ? !1 : e && r && typeof e == "object" && typeof r == "object" ? !Object.keys(r).some((t) => !On(e[t], r[t])) : !1;
}
function La(e, r) {
  if (e === r)
    return e;
  const t = hi(e) && hi(r);
  if (t || Ma(e) && Ma(r)) {
    const o = t ? e : Object.keys(e), u = o.length, s = t ? r : Object.keys(r), d = s.length, f = t ? [] : {};
    let m = 0;
    for (let y = 0; y < d; y++) {
      const _ = t ? y : s[y];
      (!t && o.includes(_) || t) && e[_] === void 0 && r[_] === void 0 ? (f[_] = void 0, m++) : (f[_] = La(e[_], r[_]), f[_] === e[_] && e[_] !== void 0 && m++);
    }
    return u === d && m === u ? e : f;
  }
  return r;
}
function hi(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Ma(e) {
  if (!bi(e))
    return !1;
  const r = e.constructor;
  if (r === void 0)
    return !0;
  const t = r.prototype;
  return !(!bi(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function bi(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Ym(e) {
  return new Promise((r) => {
    setTimeout(r, e);
  });
}
function Xm(e, r, t) {
  if (typeof t.structuralSharing == "function")
    return t.structuralSharing(e, r);
  if (t.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return La(e, r);
      } catch (o) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${t.queryHash}]: ${o}`
        );
      }
    return La(e, r);
  }
  return r;
}
function Jm(e, r, t = 0) {
  const o = [...e, r];
  return t && o.length > t ? o.slice(1) : o;
}
function e0(e, r, t = 0) {
  const o = [r, ...e];
  return t && o.length > t ? o.slice(0, -1) : o;
}
var xo = Symbol();
function ms(e, r) {
  return process.env.NODE_ENV !== "production" && e.queryFn === xo && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (r != null && r.initialPromise) ? () => r.initialPromise : !e.queryFn || e.queryFn === xo ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var ht, Wr, Dt, Ii, r0 = (Ii = class extends Io {
  constructor() {
    super();
    be(this, ht);
    be(this, Wr);
    be(this, Dt);
    te(this, Dt, (r) => {
      if (!An && window.addEventListener) {
        const t = () => r();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    D(this, Wr) || this.setEventListener(D(this, Dt));
  }
  onUnsubscribe() {
    var r;
    this.hasListeners() || ((r = D(this, Wr)) == null || r.call(this), te(this, Wr, void 0));
  }
  setEventListener(r) {
    var t;
    te(this, Dt, r), (t = D(this, Wr)) == null || t.call(this), te(this, Wr, r((o) => {
      typeof o == "boolean" ? this.setFocused(o) : this.onFocus();
    }));
  }
  setFocused(r) {
    D(this, ht) !== r && (te(this, ht, r), this.onFocus());
  }
  onFocus() {
    const r = this.isFocused();
    this.listeners.forEach((t) => {
      t(r);
    });
  }
  isFocused() {
    var r;
    return typeof D(this, ht) == "boolean" ? D(this, ht) : ((r = globalThis.document) == null ? void 0 : r.visibilityState) !== "hidden";
  }
}, ht = new WeakMap(), Wr = new WeakMap(), Dt = new WeakMap(), Ii), gs = new r0(), jt, Qr, Lt, Pi, t0 = (Pi = class extends Io {
  constructor() {
    super();
    be(this, jt, !0);
    be(this, Qr);
    be(this, Lt);
    te(this, Lt, (r) => {
      if (!An && window.addEventListener) {
        const t = () => r(!0), o = () => r(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", o, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", o);
        };
      }
    });
  }
  onSubscribe() {
    D(this, Qr) || this.setEventListener(D(this, Lt));
  }
  onUnsubscribe() {
    var r;
    this.hasListeners() || ((r = D(this, Qr)) == null || r.call(this), te(this, Qr, void 0));
  }
  setEventListener(r) {
    var t;
    te(this, Lt, r), (t = D(this, Qr)) == null || t.call(this), te(this, Qr, r(this.setOnline.bind(this)));
  }
  setOnline(r) {
    D(this, jt) !== r && (te(this, jt, r), this.listeners.forEach((o) => {
      o(r);
    }));
  }
  isOnline() {
    return D(this, jt);
  }
}, jt = new WeakMap(), Qr = new WeakMap(), Lt = new WeakMap(), Pi), Vt = new t0();
function n0() {
  let e, r;
  const t = new Promise((u, s) => {
    e = u, r = s;
  });
  t.status = "pending", t.catch(() => {
  });
  function o(u) {
    Object.assign(t, u), delete t.resolve, delete t.reject;
  }
  return t.resolve = (u) => {
    o({
      status: "fulfilled",
      value: u
    }), e(u);
  }, t.reject = (u) => {
    o({
      status: "rejected",
      reason: u
    }), r(u);
  }, t;
}
function o0(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function hs(e) {
  return (e ?? "online") === "online" ? Vt.isOnline() : !0;
}
var bs = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function _a(e) {
  return e instanceof bs;
}
function ys(e) {
  let r = !1, t = 0, o = !1, u;
  const s = n0(), d = (L) => {
    var G;
    o || ($(new bs(L)), (G = e.abort) == null || G.call(e));
  }, f = () => {
    r = !0;
  }, m = () => {
    r = !1;
  }, y = () => gs.isFocused() && (e.networkMode === "always" || Vt.isOnline()) && e.canRun(), _ = () => hs(e.networkMode) && e.canRun(), S = (L) => {
    var G;
    o || (o = !0, (G = e.onSuccess) == null || G.call(e, L), u == null || u(), s.resolve(L));
  }, $ = (L) => {
    var G;
    o || (o = !0, (G = e.onError) == null || G.call(e, L), u == null || u(), s.reject(L));
  }, E = () => new Promise((L) => {
    var G;
    u = (J) => {
      (o || y()) && L(J);
    }, (G = e.onPause) == null || G.call(e);
  }).then(() => {
    var L;
    u = void 0, o || (L = e.onContinue) == null || L.call(e);
  }), j = () => {
    if (o)
      return;
    let L;
    const G = t === 0 ? e.initialPromise : void 0;
    try {
      L = G ?? e.fn();
    } catch (J) {
      L = Promise.reject(J);
    }
    Promise.resolve(L).then(S).catch((J) => {
      var de;
      if (o)
        return;
      const X = e.retry ?? (An ? 0 : 3), M = e.retryDelay ?? o0, W = typeof M == "function" ? M(t, J) : M, ge = X === !0 || typeof X == "number" && t < X || typeof X == "function" && X(t, J);
      if (r || !ge) {
        $(J);
        return;
      }
      t++, (de = e.onFail) == null || de.call(e, t, J), Ym(W).then(() => y() ? void 0 : E()).then(() => {
        r ? $(J) : j();
      });
    });
  };
  return {
    promise: s,
    cancel: d,
    continue: () => (u == null || u(), s),
    cancelRetry: f,
    continueRetry: m,
    canStart: _,
    start: () => (_() ? j() : E().then(j), s)
  };
}
function a0() {
  let e = [], r = 0, t = (f) => {
    f();
  }, o = (f) => {
    f();
  }, u = (f) => setTimeout(f, 0);
  const s = (f) => {
    r ? e.push(f) : u(() => {
      t(f);
    });
  }, d = () => {
    const f = e;
    e = [], f.length && u(() => {
      o(() => {
        f.forEach((m) => {
          t(m);
        });
      });
    });
  };
  return {
    batch: (f) => {
      let m;
      r++;
      try {
        m = f();
      } finally {
        r--, r || d();
      }
      return m;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (f) => (...m) => {
      s(() => {
        f(...m);
      });
    },
    schedule: s,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (f) => {
      t = f;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (f) => {
      o = f;
    },
    setScheduler: (f) => {
      u = f;
    }
  };
}
var ze = a0(), bt, Oi, vs = (Oi = class {
  constructor() {
    be(this, bt);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Qm(this.gcTime) && te(this, bt, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (An ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    D(this, bt) && (clearTimeout(D(this, bt)), te(this, bt, void 0));
  }
}, bt = new WeakMap(), Oi), Mt, Nt, er, Me, Bn, yt, ur, Rr, Bi, u0 = (Bi = class extends vs {
  constructor(r) {
    super();
    be(this, ur);
    be(this, Mt);
    be(this, Nt);
    be(this, er);
    be(this, Me);
    be(this, Bn);
    be(this, yt);
    te(this, yt, !1), te(this, Bn, r.defaultOptions), this.setOptions(r.options), this.observers = [], te(this, er, r.cache), this.queryKey = r.queryKey, this.queryHash = r.queryHash, te(this, Mt, s0(this.options)), this.state = r.state ?? D(this, Mt), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var r;
    return (r = D(this, Me)) == null ? void 0 : r.promise;
  }
  setOptions(r) {
    this.options = { ...D(this, Bn), ...r }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && D(this, er).remove(this);
  }
  setData(r, t) {
    const o = Xm(this.state.data, r, this.options);
    return je(this, ur, Rr).call(this, {
      data: o,
      type: "success",
      dataUpdatedAt: t == null ? void 0 : t.updatedAt,
      manual: t == null ? void 0 : t.manual
    }), o;
  }
  setState(r, t) {
    je(this, ur, Rr).call(this, { type: "setState", state: r, setStateOptions: t });
  }
  cancel(r) {
    var o, u;
    const t = (o = D(this, Me)) == null ? void 0 : o.promise;
    return (u = D(this, Me)) == null || u.cancel(r), t ? t.then(ar).catch(ar) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(D(this, Mt));
  }
  isActive() {
    return this.observers.some(
      (r) => Zm(r.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === xo || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (r) => r.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(r = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Gm(this.state.dataUpdatedAt, r);
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
    this.observers.includes(r) && (this.observers = this.observers.filter((t) => t !== r), this.observers.length || (D(this, Me) && (D(this, yt) ? D(this, Me).cancel({ revert: !0 }) : D(this, Me).cancelRetry()), this.scheduleGc()), D(this, er).notify({ type: "observerRemoved", query: this, observer: r }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || je(this, ur, Rr).call(this, { type: "invalidate" });
  }
  fetch(r, t) {
    var m, y, _;
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
    const o = new AbortController(), u = (S) => {
      Object.defineProperty(S, "signal", {
        enumerable: !0,
        get: () => (te(this, yt, !0), o.signal)
      });
    }, s = () => {
      const S = ms(this.options, t), $ = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return u($), te(this, yt, !1), this.options.persister ? this.options.persister(
        S,
        $,
        this
      ) : S($);
    }, d = {
      fetchOptions: t,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: s
    };
    u(d), (m = this.options.behavior) == null || m.onFetch(
      d,
      this
    ), te(this, Nt, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((y = d.fetchOptions) == null ? void 0 : y.meta)) && je(this, ur, Rr).call(this, { type: "fetch", meta: (_ = d.fetchOptions) == null ? void 0 : _.meta });
    const f = (S) => {
      var $, E, j, L;
      _a(S) && S.silent || je(this, ur, Rr).call(this, {
        type: "error",
        error: S
      }), _a(S) || ((E = ($ = D(this, er).config).onError) == null || E.call(
        $,
        S,
        this
      ), (L = (j = D(this, er).config).onSettled) == null || L.call(
        j,
        this.state.data,
        S,
        this
      )), this.scheduleGc();
    };
    return te(this, Me, ys({
      initialPromise: t == null ? void 0 : t.initialPromise,
      fn: d.fetchFn,
      abort: o.abort.bind(o),
      onSuccess: (S) => {
        var $, E, j, L;
        if (S === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), f(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(S);
        } catch (G) {
          f(G);
          return;
        }
        (E = ($ = D(this, er).config).onSuccess) == null || E.call($, S, this), (L = (j = D(this, er).config).onSettled) == null || L.call(
          j,
          S,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: f,
      onFail: (S, $) => {
        je(this, ur, Rr).call(this, { type: "failed", failureCount: S, error: $ });
      },
      onPause: () => {
        je(this, ur, Rr).call(this, { type: "pause" });
      },
      onContinue: () => {
        je(this, ur, Rr).call(this, { type: "continue" });
      },
      retry: d.options.retry,
      retryDelay: d.options.retryDelay,
      networkMode: d.options.networkMode,
      canRun: () => !0
    })), D(this, Me).start();
  }
}, Mt = new WeakMap(), Nt = new WeakMap(), er = new WeakMap(), Me = new WeakMap(), Bn = new WeakMap(), yt = new WeakMap(), ur = new WeakSet(), Rr = function(r) {
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
          ...i0(o.data, this.options),
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
        const u = r.error;
        return _a(u) && u.revert && D(this, Nt) ? { ...D(this, Nt), fetchStatus: "idle" } : {
          ...o,
          error: u,
          errorUpdateCount: o.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: o.fetchFailureCount + 1,
          fetchFailureReason: u,
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
  this.state = t(this.state), ze.batch(() => {
    this.observers.forEach((o) => {
      o.onQueryUpdate();
    }), D(this, er).notify({ query: this, type: "updated", action: r });
  });
}, Bi);
function i0(e, r) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: hs(r.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function s0(e) {
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
var yr, $i, _s = ($i = class extends Io {
  constructor(t = {}) {
    super();
    be(this, yr);
    this.config = t, te(this, yr, /* @__PURE__ */ new Map());
  }
  build(t, o, u) {
    const s = o.queryKey, d = o.queryHash ?? Za(s, o);
    let f = this.get(d);
    return f || (f = new u0({
      cache: this,
      queryKey: s,
      queryHash: d,
      options: t.defaultQueryOptions(o),
      state: u,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(f)), f;
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
    ze.batch(() => {
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
      (u) => mi(o, u)
    );
  }
  findAll(t = {}) {
    const o = this.getAll();
    return Object.keys(t).length > 0 ? o.filter((u) => mi(t, u)) : o;
  }
  notify(t) {
    ze.batch(() => {
      this.listeners.forEach((o) => {
        o(t);
      });
    });
  }
  onFocus() {
    ze.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    ze.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, yr = new WeakMap(), $i), vr, Fe, vt, _r, Vr, Ai, l0 = (Ai = class extends vs {
  constructor(r) {
    super();
    be(this, _r);
    be(this, vr);
    be(this, Fe);
    be(this, vt);
    this.mutationId = r.mutationId, te(this, Fe, r.mutationCache), te(this, vr, []), this.state = r.state || c0(), this.setOptions(r.options), this.scheduleGc();
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
    return ((r = D(this, vt)) == null ? void 0 : r.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(r) {
    var u, s, d, f, m, y, _, S, $, E, j, L, G, J, X, M, W, ge, de, xe;
    te(this, vt, ys({
      fn: () => this.options.mutationFn ? this.options.mutationFn(r) : Promise.reject(new Error("No mutationFn found")),
      onFail: (ye, $e) => {
        je(this, _r, Vr).call(this, { type: "failed", failureCount: ye, error: $e });
      },
      onPause: () => {
        je(this, _r, Vr).call(this, { type: "pause" });
      },
      onContinue: () => {
        je(this, _r, Vr).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => D(this, Fe).canRun(this)
    }));
    const t = this.state.status === "pending", o = !D(this, vt).canStart();
    try {
      if (!t) {
        je(this, _r, Vr).call(this, { type: "pending", variables: r, isPaused: o }), await ((s = (u = D(this, Fe).config).onMutate) == null ? void 0 : s.call(
          u,
          r,
          this
        ));
        const $e = await ((f = (d = this.options).onMutate) == null ? void 0 : f.call(d, r));
        $e !== this.state.context && je(this, _r, Vr).call(this, {
          type: "pending",
          context: $e,
          variables: r,
          isPaused: o
        });
      }
      const ye = await D(this, vt).start();
      return await ((y = (m = D(this, Fe).config).onSuccess) == null ? void 0 : y.call(
        m,
        ye,
        r,
        this.state.context,
        this
      )), await ((S = (_ = this.options).onSuccess) == null ? void 0 : S.call(_, ye, r, this.state.context)), await ((E = ($ = D(this, Fe).config).onSettled) == null ? void 0 : E.call(
        $,
        ye,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((L = (j = this.options).onSettled) == null ? void 0 : L.call(j, ye, null, r, this.state.context)), je(this, _r, Vr).call(this, { type: "success", data: ye }), ye;
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
        )), await ((ge = (W = D(this, Fe).config).onSettled) == null ? void 0 : ge.call(
          W,
          void 0,
          ye,
          this.state.variables,
          this.state.context,
          this
        )), await ((xe = (de = this.options).onSettled) == null ? void 0 : xe.call(
          de,
          void 0,
          ye,
          r,
          this.state.context
        )), ye;
      } finally {
        je(this, _r, Vr).call(this, { type: "error", error: ye });
      }
    } finally {
      D(this, Fe).runNext(this);
    }
  }
}, vr = new WeakMap(), Fe = new WeakMap(), vt = new WeakMap(), _r = new WeakSet(), Vr = function(r) {
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
  this.state = t(this.state), ze.batch(() => {
    D(this, vr).forEach((o) => {
      o.onMutationUpdate(r);
    }), D(this, Fe).notify({
      mutation: this,
      type: "updated",
      action: r
    });
  });
}, Ai);
function c0() {
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
var Tr, ir, $n, Ri, xs = (Ri = class extends Io {
  constructor(t = {}) {
    super();
    be(this, Tr);
    be(this, ir);
    be(this, $n);
    this.config = t, te(this, Tr, /* @__PURE__ */ new Set()), te(this, ir, /* @__PURE__ */ new Map()), te(this, $n, 0);
  }
  build(t, o, u) {
    const s = new l0({
      mutationCache: this,
      mutationId: ++so(this, $n)._,
      options: t.defaultMutationOptions(o),
      state: u
    });
    return this.add(s), s;
  }
  add(t) {
    D(this, Tr).add(t);
    const o = fo(t);
    if (typeof o == "string") {
      const u = D(this, ir).get(o);
      u ? u.push(t) : D(this, ir).set(o, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (D(this, Tr).delete(t)) {
      const o = fo(t);
      if (typeof o == "string") {
        const u = D(this, ir).get(o);
        if (u)
          if (u.length > 1) {
            const s = u.indexOf(t);
            s !== -1 && u.splice(s, 1);
          } else u[0] === t && D(this, ir).delete(o);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const o = fo(t);
    if (typeof o == "string") {
      const u = D(this, ir).get(o), s = u == null ? void 0 : u.find(
        (d) => d.state.status === "pending"
      );
      return !s || s === t;
    } else
      return !0;
  }
  runNext(t) {
    var u;
    const o = fo(t);
    if (typeof o == "string") {
      const s = (u = D(this, ir).get(o)) == null ? void 0 : u.find((d) => d !== t && d.state.isPaused);
      return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    ze.batch(() => {
      D(this, Tr).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), D(this, Tr).clear(), D(this, ir).clear();
    });
  }
  getAll() {
    return Array.from(D(this, Tr));
  }
  find(t) {
    const o = { exact: !0, ...t };
    return this.getAll().find(
      (u) => gi(o, u)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((o) => gi(t, o));
  }
  notify(t) {
    ze.batch(() => {
      this.listeners.forEach((o) => {
        o(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((o) => o.state.isPaused);
    return ze.batch(
      () => Promise.all(
        t.map((o) => o.continue().catch(ar))
      )
    );
  }
}, Tr = new WeakMap(), ir = new WeakMap(), $n = new WeakMap(), Ri);
function fo(e) {
  var r;
  return (r = e.options.scope) == null ? void 0 : r.id;
}
function yi(e) {
  return {
    onFetch: (r, t) => {
      var _, S, $, E, j;
      const o = r.options, u = ($ = (S = (_ = r.fetchOptions) == null ? void 0 : _.meta) == null ? void 0 : S.fetchMore) == null ? void 0 : $.direction, s = ((E = r.state.data) == null ? void 0 : E.pages) || [], d = ((j = r.state.data) == null ? void 0 : j.pageParams) || [];
      let f = { pages: [], pageParams: [] }, m = 0;
      const y = async () => {
        let L = !1;
        const G = (M) => {
          Object.defineProperty(M, "signal", {
            enumerable: !0,
            get: () => (r.signal.aborted ? L = !0 : r.signal.addEventListener("abort", () => {
              L = !0;
            }), r.signal)
          });
        }, J = ms(r.options, r.fetchOptions), X = async (M, W, ge) => {
          if (L)
            return Promise.reject();
          if (W == null && M.pages.length)
            return Promise.resolve(M);
          const de = {
            queryKey: r.queryKey,
            pageParam: W,
            direction: ge ? "backward" : "forward",
            meta: r.options.meta
          };
          G(de);
          const xe = await J(
            de
          ), { maxPages: ye } = r.options, $e = ge ? e0 : Jm;
          return {
            pages: $e(M.pages, xe, ye),
            pageParams: $e(M.pageParams, W, ye)
          };
        };
        if (u && s.length) {
          const M = u === "backward", W = M ? d0 : vi, ge = {
            pages: s,
            pageParams: d
          }, de = W(o, ge);
          f = await X(ge, de, M);
        } else {
          const M = e ?? s.length;
          do {
            const W = m === 0 ? d[0] ?? o.initialPageParam : vi(o, f);
            if (m > 0 && W == null)
              break;
            f = await X(f, W), m++;
          } while (m < M);
        }
        return f;
      };
      r.options.persister ? r.fetchFn = () => {
        var L, G;
        return (G = (L = r.options).persister) == null ? void 0 : G.call(
          L,
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
function vi(e, { pages: r, pageParams: t }) {
  const o = r.length - 1;
  return r.length > 0 ? e.getNextPageParam(
    r[o],
    r,
    t[o],
    t
  ) : void 0;
}
function d0(e, { pages: r, pageParams: t }) {
  var o;
  return r.length > 0 ? (o = e.getPreviousPageParam) == null ? void 0 : o.call(e, r[0], r, t[0], t) : void 0;
}
var Ie, Gr, Zr, Kt, Ft, Yr, zt, Ht, Ti, f0 = (Ti = class {
  constructor(r = {}) {
    be(this, Ie);
    be(this, Gr);
    be(this, Zr);
    be(this, Kt);
    be(this, Ft);
    be(this, Yr);
    be(this, zt);
    be(this, Ht);
    te(this, Ie, r.queryCache || new _s()), te(this, Gr, r.mutationCache || new xs()), te(this, Zr, r.defaultOptions || {}), te(this, Kt, /* @__PURE__ */ new Map()), te(this, Ft, /* @__PURE__ */ new Map()), te(this, Yr, 0);
  }
  mount() {
    so(this, Yr)._++, D(this, Yr) === 1 && (te(this, zt, gs.subscribe(async (r) => {
      r && (await this.resumePausedMutations(), D(this, Ie).onFocus());
    })), te(this, Ht, Vt.subscribe(async (r) => {
      r && (await this.resumePausedMutations(), D(this, Ie).onOnline());
    })));
  }
  unmount() {
    var r, t;
    so(this, Yr)._--, D(this, Yr) === 0 && ((r = D(this, zt)) == null || r.call(this), te(this, zt, void 0), (t = D(this, Ht)) == null || t.call(this), te(this, Ht, void 0));
  }
  isFetching(r) {
    return D(this, Ie).findAll({ ...r, fetchStatus: "fetching" }).length;
  }
  isMutating(r) {
    return D(this, Gr).findAll({ ...r, status: "pending" }).length;
  }
  getQueryData(r) {
    var o;
    const t = this.defaultQueryOptions({ queryKey: r });
    return (o = D(this, Ie).get(t.queryHash)) == null ? void 0 : o.state.data;
  }
  ensureQueryData(r) {
    const t = this.defaultQueryOptions(r), o = D(this, Ie).build(this, t), u = o.state.data;
    return u === void 0 ? this.fetchQuery(r) : (r.revalidateIfStale && o.isStaleByTime(pi(t.staleTime, o)) && this.prefetchQuery(t), Promise.resolve(u));
  }
  getQueriesData(r) {
    return D(this, Ie).findAll(r).map(({ queryKey: t, state: o }) => {
      const u = o.data;
      return [t, u];
    });
  }
  setQueryData(r, t, o) {
    const u = this.defaultQueryOptions({ queryKey: r }), s = D(this, Ie).get(
      u.queryHash
    ), d = s == null ? void 0 : s.state.data, f = Wm(t, d);
    if (f !== void 0)
      return D(this, Ie).build(this, u).setData(f, { ...o, manual: !0 });
  }
  setQueriesData(r, t, o) {
    return ze.batch(
      () => D(this, Ie).findAll(r).map(({ queryKey: u }) => [
        u,
        this.setQueryData(u, t, o)
      ])
    );
  }
  getQueryState(r) {
    var o;
    const t = this.defaultQueryOptions({ queryKey: r });
    return (o = D(this, Ie).get(
      t.queryHash
    )) == null ? void 0 : o.state;
  }
  removeQueries(r) {
    const t = D(this, Ie);
    ze.batch(() => {
      t.findAll(r).forEach((o) => {
        t.remove(o);
      });
    });
  }
  resetQueries(r, t) {
    const o = D(this, Ie), u = {
      type: "active",
      ...r
    };
    return ze.batch(() => (o.findAll(r).forEach((s) => {
      s.reset();
    }), this.refetchQueries(u, t)));
  }
  cancelQueries(r, t = {}) {
    const o = { revert: !0, ...t }, u = ze.batch(
      () => D(this, Ie).findAll(r).map((s) => s.cancel(o))
    );
    return Promise.all(u).then(ar).catch(ar);
  }
  invalidateQueries(r, t = {}) {
    return ze.batch(() => {
      if (D(this, Ie).findAll(r).forEach((u) => {
        u.invalidate();
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
    }, u = ze.batch(
      () => D(this, Ie).findAll(r).filter((s) => !s.isDisabled()).map((s) => {
        let d = s.fetch(void 0, o);
        return o.throwOnError || (d = d.catch(ar)), s.state.fetchStatus === "paused" ? Promise.resolve() : d;
      })
    );
    return Promise.all(u).then(ar);
  }
  fetchQuery(r) {
    const t = this.defaultQueryOptions(r);
    t.retry === void 0 && (t.retry = !1);
    const o = D(this, Ie).build(this, t);
    return o.isStaleByTime(
      pi(t.staleTime, o)
    ) ? o.fetch(t) : Promise.resolve(o.state.data);
  }
  prefetchQuery(r) {
    return this.fetchQuery(r).then(ar).catch(ar);
  }
  fetchInfiniteQuery(r) {
    return r.behavior = yi(r.pages), this.fetchQuery(r);
  }
  prefetchInfiniteQuery(r) {
    return this.fetchInfiniteQuery(r).then(ar).catch(ar);
  }
  ensureInfiniteQueryData(r) {
    return r.behavior = yi(r.pages), this.ensureQueryData(r);
  }
  resumePausedMutations() {
    return Vt.isOnline() ? D(this, Gr).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return D(this, Ie);
  }
  getMutationCache() {
    return D(this, Gr);
  }
  getDefaultOptions() {
    return D(this, Zr);
  }
  setDefaultOptions(r) {
    te(this, Zr, r);
  }
  setQueryDefaults(r, t) {
    D(this, Kt).set(Pn(r), {
      queryKey: r,
      defaultOptions: t
    });
  }
  getQueryDefaults(r) {
    const t = [...D(this, Kt).values()], o = {};
    return t.forEach((u) => {
      On(r, u.queryKey) && Object.assign(o, u.defaultOptions);
    }), o;
  }
  setMutationDefaults(r, t) {
    D(this, Ft).set(Pn(r), {
      mutationKey: r,
      defaultOptions: t
    });
  }
  getMutationDefaults(r) {
    const t = [...D(this, Ft).values()];
    let o = {};
    return t.forEach((u) => {
      On(r, u.mutationKey) && (o = { ...o, ...u.defaultOptions });
    }), o;
  }
  defaultQueryOptions(r) {
    if (r._defaulted)
      return r;
    const t = {
      ...D(this, Zr).queries,
      ...this.getQueryDefaults(r.queryKey),
      ...r,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Za(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === xo && (t.enabled = !1), t;
  }
  defaultMutationOptions(r) {
    return r != null && r._defaulted ? r : {
      ...D(this, Zr).mutations,
      ...(r == null ? void 0 : r.mutationKey) && this.getMutationDefaults(r.mutationKey),
      ...r,
      _defaulted: !0
    };
  }
  clear() {
    D(this, Ie).clear(), D(this, Gr).clear();
  }
}, Ie = new WeakMap(), Gr = new WeakMap(), Zr = new WeakMap(), Kt = new WeakMap(), Ft = new WeakMap(), Yr = new WeakMap(), zt = new WeakMap(), Ht = new WeakMap(), Ti);
function ws(e) {
  return e;
}
function p0(e) {
  return {
    mutationKey: e.options.mutationKey,
    state: e.state,
    ...e.options.scope && { scope: e.options.scope },
    ...e.meta && { meta: e.meta }
  };
}
function m0(e, r) {
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
function g0(e) {
  return e.state.isPaused;
}
function h0(e) {
  return e.state.status === "success";
}
function b0(e, r = {}) {
  var f, m, y;
  const t = r.shouldDehydrateMutation ?? ((f = e.getDefaultOptions().dehydrate) == null ? void 0 : f.shouldDehydrateMutation) ?? g0, o = e.getMutationCache().getAll().flatMap(
    (_) => t(_) ? [p0(_)] : []
  ), u = r.shouldDehydrateQuery ?? ((m = e.getDefaultOptions().dehydrate) == null ? void 0 : m.shouldDehydrateQuery) ?? h0, s = r.serializeData ?? ((y = e.getDefaultOptions().dehydrate) == null ? void 0 : y.serializeData) ?? ws, d = e.getQueryCache().getAll().flatMap(
    (_) => u(_) ? [m0(_, s)] : []
  );
  return { mutations: o, queries: d };
}
function y0(e, r, t) {
  var m, y;
  if (typeof r != "object" || r === null)
    return;
  const o = e.getMutationCache(), u = e.getQueryCache(), s = ((m = t == null ? void 0 : t.defaultOptions) == null ? void 0 : m.deserializeData) ?? ((y = e.getDefaultOptions().hydrate) == null ? void 0 : y.deserializeData) ?? ws, d = r.mutations || [], f = r.queries || [];
  d.forEach(({ state: _, ...S }) => {
    var $, E;
    o.build(
      e,
      {
        ...($ = e.getDefaultOptions().hydrate) == null ? void 0 : $.mutations,
        ...(E = t == null ? void 0 : t.defaultOptions) == null ? void 0 : E.mutations,
        ...S
      },
      _
    );
  }), f.forEach(({ queryKey: _, state: S, queryHash: $, meta: E, promise: j }) => {
    var J, X;
    let L = u.get($);
    const G = S.data === void 0 ? S.data : s(S.data);
    if (L) {
      if (L.state.dataUpdatedAt < S.dataUpdatedAt) {
        const { fetchStatus: M, ...W } = S;
        L.setState({
          ...W,
          data: G
        });
      }
    } else
      L = u.build(
        e,
        {
          ...(J = e.getDefaultOptions().hydrate) == null ? void 0 : J.queries,
          ...(X = t == null ? void 0 : t.defaultOptions) == null ? void 0 : X.queries,
          queryKey: _,
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
      const M = Promise.resolve(j).then(s);
      L.fetch(void 0, { initialPromise: M });
    }
  });
}
var v0 = "VUE_QUERY_CLIENT";
function _0(e) {
  const r = e ? `:${e}` : "";
  return `${v0}${r}`;
}
function Na(e, r, t = "", o = 0) {
  if (r) {
    const u = r(e, t, o);
    if (u === void 0 && Ki(e) || u !== void 0)
      return u;
  }
  if (Array.isArray(e))
    return e.map(
      (u, s) => Na(u, r, String(s), o + 1)
    );
  if (typeof e == "object" && w0(e)) {
    const u = Object.entries(e).map(([s, d]) => [
      s,
      Na(d, r, s, o + 1)
    ]);
    return Object.fromEntries(u);
  }
  return e;
}
function x0(e, r) {
  return Na(e, r);
}
function ie(e, r = !1) {
  return x0(e, (t, o, u) => {
    if (u === 1 && o === "queryKey")
      return ie(t, !0);
    if (r && k0(t))
      return ie(t(), r);
    if (Ki(t))
      return ie(dn(t), r);
  });
}
function w0(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]")
    return !1;
  const r = Object.getPrototypeOf(e);
  return r === null || r === Object.prototype;
}
function k0(e) {
  return typeof e == "function";
}
var C0 = class extends _s {
  find(e) {
    return super.find(ie(e));
  }
  findAll(e = {}) {
    return super.findAll(ie(e));
  }
}, S0 = class extends xs {
  find(e) {
    return super.find(ie(e));
  }
  findAll(e = {}) {
    return super.findAll(ie(e));
  }
}, ks = class extends f0 {
  constructor(e = {}) {
    const r = {
      defaultOptions: e.defaultOptions,
      queryCache: e.queryCache || new C0(),
      mutationCache: e.mutationCache || new S0()
    };
    super(r), this.isRestoring = jr(!1);
  }
  isFetching(e = {}) {
    return super.isFetching(ie(e));
  }
  isMutating(e = {}) {
    return super.isMutating(ie(e));
  }
  getQueryData(e) {
    return super.getQueryData(ie(e));
  }
  ensureQueryData(e) {
    return super.ensureQueryData(ie(e));
  }
  getQueriesData(e) {
    return super.getQueriesData(ie(e));
  }
  setQueryData(e, r, t = {}) {
    return super.setQueryData(
      ie(e),
      r,
      ie(t)
    );
  }
  setQueriesData(e, r, t = {}) {
    return super.setQueriesData(
      ie(e),
      r,
      ie(t)
    );
  }
  getQueryState(e) {
    return super.getQueryState(ie(e));
  }
  removeQueries(e = {}) {
    return super.removeQueries(ie(e));
  }
  resetQueries(e = {}, r = {}) {
    return super.resetQueries(ie(e), ie(r));
  }
  cancelQueries(e = {}, r = {}) {
    return super.cancelQueries(ie(e), ie(r));
  }
  invalidateQueries(e = {}, r = {}) {
    const t = ie(e), o = ie(r);
    if (super.invalidateQueries(
      { ...t, refetchType: "none" },
      o
    ), t.refetchType === "none")
      return Promise.resolve();
    const u = {
      ...t,
      type: t.refetchType ?? t.type ?? "active"
    };
    return Ei().then(() => super.refetchQueries(u, o));
  }
  refetchQueries(e = {}, r = {}) {
    return super.refetchQueries(
      ie(e),
      ie(r)
    );
  }
  fetchQuery(e) {
    return super.fetchQuery(ie(e));
  }
  prefetchQuery(e) {
    return super.prefetchQuery(ie(e));
  }
  fetchInfiniteQuery(e) {
    return super.fetchInfiniteQuery(ie(e));
  }
  prefetchInfiniteQuery(e) {
    return super.prefetchInfiniteQuery(ie(e));
  }
  setDefaultOptions(e) {
    super.setDefaultOptions(ie(e));
  }
  setQueryDefaults(e, r) {
    super.setQueryDefaults(ie(e), ie(r));
  }
  getQueryDefaults(e) {
    return super.getQueryDefaults(ie(e));
  }
  setMutationDefaults(e, r) {
    super.setMutationDefaults(
      ie(e),
      ie(r)
    );
  }
  getMutationDefaults(e) {
    return super.getMutationDefaults(ie(e));
  }
};
function I0() {
  return Cs().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function Cs() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const P0 = typeof Proxy == "function", O0 = "devtools-plugin:setup", B0 = "plugin:settings:set";
let Bt, Ka;
function $0() {
  var e;
  return Bt !== void 0 || (typeof window < "u" && window.performance ? (Bt = !0, Ka = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Bt = !0, Ka = globalThis.perf_hooks.performance) : Bt = !1), Bt;
}
function A0() {
  return $0() ? Ka.now() : Date.now();
}
class R0 {
  constructor(r, t) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = r, this.hook = t;
    const o = {};
    if (r.settings)
      for (const d in r.settings) {
        const f = r.settings[d];
        o[d] = f.defaultValue;
      }
    const u = `__vue-devtools-plugin-settings__${r.id}`;
    let s = Object.assign({}, o);
    try {
      const d = localStorage.getItem(u), f = JSON.parse(d);
      Object.assign(s, f);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return s;
      },
      setSettings(d) {
        try {
          localStorage.setItem(u, JSON.stringify(d));
        } catch {
        }
        s = d;
      },
      now() {
        return A0();
      }
    }, t && t.on(B0, (d, f) => {
      d === this.plugin.id && this.fallbacks.setSettings(f);
    }), this.proxiedOn = new Proxy({}, {
      get: (d, f) => this.target ? this.target.on[f] : (...m) => {
        this.onQueue.push({
          method: f,
          args: m
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (d, f) => this.target ? this.target[f] : f === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(f) ? (...m) => (this.targetQueue.push({
        method: f,
        args: m,
        resolve: () => {
        }
      }), this.fallbacks[f](...m)) : (...m) => new Promise((y) => {
        this.targetQueue.push({
          method: f,
          args: m,
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
function T0(e, r) {
  const t = e, o = Cs(), u = I0(), s = P0 && t.enableEarlyProxy;
  if (u && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !s))
    u.emit(O0, e, r);
  else {
    const d = s ? new R0(t, u) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: t,
      setupFn: r,
      proxy: d
    }), d && r(d.proxiedTarget);
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
const Ss = {
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
}, E0 = Object.keys(Ss).join("|"), D0 = new RegExp(E0, "g");
function j0(e) {
  return e.replace(D0, (r) => Ss[r]);
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
function L0(e, r, t) {
  var o;
  if (t = t || {}, t.threshold = (o = t.threshold) != null ? o : Ue.MATCHES, !t.accessors) {
    const d = _i(e, r, t);
    return {
      // ends up being duplicate of 'item' in matches but consistent
      rankedValue: e,
      rank: d,
      accessorIndex: -1,
      accessorThreshold: t.threshold,
      passed: d >= t.threshold
    };
  }
  const u = F0(e, t.accessors), s = {
    rankedValue: e,
    rank: Ue.NO_MATCH,
    accessorIndex: -1,
    accessorThreshold: t.threshold,
    passed: !1
  };
  for (let d = 0; d < u.length; d++) {
    const f = u[d];
    let m = _i(f.itemValue, r, t);
    const {
      minRanking: y,
      maxRanking: _,
      threshold: S = t.threshold
    } = f.attributes;
    m < y && m >= Ue.MATCHES ? m = y : m > _ && (m = _), m = Math.min(m, _), m >= S && m > s.rank && (s.rank = m, s.passed = !0, s.accessorIndex = d, s.accessorThreshold = S, s.rankedValue = f.itemValue);
  }
  return s;
}
function _i(e, r, t) {
  return e = xi(e, t), r = xi(r, t), r.length > e.length ? Ue.NO_MATCH : e === r ? Ue.CASE_SENSITIVE_EQUAL : (e = e.toLowerCase(), r = r.toLowerCase(), e === r ? Ue.EQUAL : e.startsWith(r) ? Ue.STARTS_WITH : e.includes(` ${r}`) ? Ue.WORD_STARTS_WITH : e.includes(r) ? Ue.CONTAINS : r.length === 1 ? Ue.NO_MATCH : M0(e).includes(r) ? Ue.ACRONYM : N0(e, r));
}
function M0(e) {
  let r = "";
  return e.split(" ").forEach((o) => {
    o.split("-").forEach((s) => {
      r += s.substr(0, 1);
    });
  }), r;
}
function N0(e, r) {
  let t = 0, o = 0;
  function u(m, y, _) {
    for (let S = _, $ = y.length; S < $; S++)
      if (y[S] === m)
        return t += 1, S + 1;
    return -1;
  }
  function s(m) {
    const y = 1 / m, _ = t / r.length;
    return Ue.MATCHES + _ * y;
  }
  const d = u(r[0], e, 0);
  if (d < 0)
    return Ue.NO_MATCH;
  o = d;
  for (let m = 1, y = r.length; m < y; m++) {
    const _ = r[m];
    if (o = u(_, e, o), !(o > -1))
      return Ue.NO_MATCH;
  }
  const f = o - d;
  return s(f);
}
function xi(e, r) {
  let {
    keepDiacritics: t
  } = r;
  return e = `${e}`, t || (e = j0(e)), e;
}
function K0(e, r) {
  let t = r;
  typeof r == "object" && (t = r.accessor);
  const o = t(e);
  return o == null ? [] : Array.isArray(o) ? o : [String(o)];
}
function F0(e, r) {
  const t = [];
  for (let o = 0, u = r.length; o < u; o++) {
    const s = r[o], d = z0(s), f = K0(e, s);
    for (let m = 0, y = f.length; m < y; m++)
      t.push({
        itemValue: f[m],
        attributes: d
      });
  }
  return t;
}
const wi = {
  maxRanking: 1 / 0,
  minRanking: -1 / 0
};
function z0(e) {
  return typeof e == "function" ? wi : {
    ...wi,
    ...e
  };
}
function gt(e) {
  return e.state.fetchStatus === "fetching" ? 0 : e.state.fetchStatus === "paused" ? 4 : e.getObserversCount() ? e.isStale() ? 2 : 1 : 3;
}
function ki(e) {
  const r = gt(e);
  return r === 0 ? "fetching" : r === 4 ? "paused" : r === 2 ? "stale" : r === 3 ? "inactive" : "fresh";
}
function H0(e) {
  return gt(e) === 2 ? 0 : 16777215;
}
function q0(e) {
  const r = gt(e);
  return r === 0 ? 27647 : r === 4 ? 9193963 : r === 2 ? 16757248 : r === 3 ? 4148832 : 33575;
}
var V0 = (e, r) => e.queryHash.localeCompare(r.queryHash), Is = (e, r) => e.state.dataUpdatedAt < r.state.dataUpdatedAt ? 1 : -1, U0 = (e, r) => gt(e) === gt(r) ? Is(e, r) : gt(e) > gt(r) ? 1 : -1, xa = {
  "Status > Last Updated": U0,
  "Query Hash": V0,
  "Last Updated": Is
}, qr = "vue-query", wa = "Vue Query";
function W0(e, r) {
  T0(
    {
      id: qr,
      label: wa,
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
          options: Object.keys(xa).map((t) => ({
            label: t,
            value: t
          })),
          defaultValue: Object.keys(xa)[0]
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
      Vt.setOnline(!!o.onlineMode.valueOf());
      const u = r.getQueryCache();
      t.addInspector({
        id: qr,
        label: wa,
        icon: "api",
        nodeActions: [
          {
            icon: "file_download",
            tooltip: "Refetch",
            action: (s) => {
              var d;
              (d = u.get(s)) == null || d.fetch();
            }
          },
          {
            icon: "alarm",
            tooltip: "Invalidate",
            action: (s) => {
              const d = u.get(s);
              r.invalidateQueries(d);
            }
          },
          {
            icon: "settings_backup_restore",
            tooltip: "Reset",
            action: (s) => {
              var d;
              (d = u.get(s)) == null || d.reset();
            }
          },
          {
            icon: "delete",
            tooltip: "Remove",
            action: (s) => {
              const d = u.get(s);
              u.remove(d);
            }
          },
          {
            icon: "hourglass_empty",
            tooltip: "Force loading",
            action: (s) => {
              u.get(s).setState({
                data: void 0,
                status: "pending"
              });
            }
          },
          {
            icon: "error_outline",
            tooltip: "Force error",
            action: (s) => {
              u.get(s).setState({
                data: void 0,
                status: "error",
                error: new Error("Unknown error from devtools")
              });
            }
          }
        ]
      }), t.addTimelineLayer({
        id: qr,
        label: wa,
        color: 16767308
      }), u.subscribe((s) => {
        t.sendInspectorTree(qr), t.sendInspectorState(qr), [
          "added",
          "removed",
          "updated"
        ].includes(s.type) && t.addTimelineEvent({
          layerId: qr,
          event: {
            title: s.type,
            subtitle: s.query.queryHash,
            time: t.now(),
            data: {
              queryHash: s.query.queryHash,
              ...s
            }
          }
        });
      }), t.on.setPluginSettings((s) => {
        s.key === "onlineMode" && Vt.setOnline(!!s.newValue);
      }), t.on.getInspectorTree((s) => {
        if (s.inspectorId === qr) {
          const d = u.getAll(), f = t.getSettings(), _ = (s.filter ? d.filter(
            (S) => L0(S.queryHash, s.filter).passed
          ) : [...d]).sort(
            (S, $) => xa[f.sortFn](S, $) * f.baseSort
          ).map((S) => {
            const $ = ki(S);
            return {
              id: S.queryHash,
              label: S.queryHash,
              tags: [
                {
                  label: `${$} [${S.getObserversCount()}]`,
                  textColor: H0(S),
                  backgroundColor: q0(S)
                }
              ]
            };
          });
          s.rootNodes = _;
        }
      }), t.on.getInspectorState((s) => {
        if (s.inspectorId === qr) {
          const d = u.get(s.nodeId);
          if (!d)
            return;
          s.state = {
            " Query Details": [
              {
                key: "Query key",
                value: d.queryHash
              },
              {
                key: "Query status",
                value: ki(d)
              },
              {
                key: "Observers",
                value: d.getObserversCount()
              },
              {
                key: "Last Updated",
                value: new Date(d.state.dataUpdatedAt).toLocaleTimeString()
              }
            ],
            "Data Explorer": [
              {
                key: "Data",
                value: d.state.data
              }
            ],
            "Query Explorer": [
              {
                key: "Query",
                value: d
              }
            ]
          };
        }
      });
    }
  );
}
var Q0 = {
  install: (e, r = {}) => {
    const t = _0(r.queryClientKey);
    let o;
    if ("queryClient" in r && r.queryClient)
      o = r.queryClient;
    else {
      const d = "queryClientConfig" in r ? r.queryClientConfig : void 0;
      o = new ks(d);
    }
    An || o.mount();
    let u = () => {
    };
    if (r.clientPersister) {
      o.isRestoring.value = !0;
      const [d, f] = r.clientPersister(o);
      u = d, f.then(() => {
        var m;
        o.isRestoring.value = !1, (m = r.clientPersisterOnSuccess) == null || m.call(r, o);
      });
    }
    const s = () => {
      o.unmount(), u();
    };
    if (e.onUnmount)
      e.onUnmount(s);
    else {
      const d = e.unmount;
      e.unmount = function() {
        s(), d();
      };
    }
    e.provide(t, o), process.env.NODE_ENV === "development" && r.enableDevtoolsV6Plugin && W0(e, o);
  }
}, G0 = ["added", "removed", "updated"];
function Ci(e) {
  return G0.includes(e);
}
async function Z0({
  queryClient: e,
  persister: r,
  maxAge: t = 1e3 * 60 * 60 * 24,
  buster: o = "",
  hydrateOptions: u
}) {
  try {
    const s = await r.restoreClient();
    if (s)
      if (s.timestamp) {
        const d = Date.now() - s.timestamp > t, f = s.buster !== o;
        d || f ? r.removeClient() : y0(e, s.clientState, u);
      } else
        r.removeClient();
  } catch (s) {
    process.env.NODE_ENV !== "production" && (console.error(s), console.warn(
      "Encountered an error attempting to restore client cache from persisted location. As a precaution, the persisted cache will be discarded."
    )), r.removeClient();
  }
}
async function Si({
  queryClient: e,
  persister: r,
  buster: t = "",
  dehydrateOptions: o
}) {
  const u = {
    buster: t,
    timestamp: Date.now(),
    clientState: b0(e, o)
  };
  await r.persistClient(u);
}
function Y0(e) {
  const r = e.queryClient.getQueryCache().subscribe((o) => {
    Ci(o.type) && Si(e);
  }), t = e.queryClient.getMutationCache().subscribe((o) => {
    Ci(o.type) && Si(e);
  });
  return () => {
    r(), t();
  };
}
function X0(e) {
  let r = !1, t;
  const o = () => {
    r = !0, t == null || t();
  }, u = Z0(e).then(() => {
    r || (t = Y0(e));
  });
  return [o, u];
}
const J0 = {
  persistClient: async (e) => {
    localStorage.setItem("tanstack-query-cache", JSON.stringify(e));
  },
  restoreClient: async () => {
    localStorage.getItem("tanstack-query-cache");
  },
  removeClient: async () => {
    localStorage.removeItem("tanstack-query-cache");
  }
}, Ps = new ks({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1e3
      // 5 minutes
    }
  }
});
X0({
  queryClient: Ps,
  persister: J0,
  dehydrateOptions: {
    shouldDehydrateQuery: (e) => e.state.status === "success"
  }
});
function Fa(e, r) {
  if (!r) return e;
  const t = { ...e };
  for (const o in r)
    if (r.hasOwnProperty(o)) {
      const u = e[o], s = r[o];
      typeof u == "object" && u !== null && typeof s == "object" && s !== null && !Array.isArray(u) && !Array.isArray(s) ? t[o] = Fa(u, s) : t[o] = s;
    }
  return t;
}
const eg = async (e, { apiClient: r, iconList: t, primevueConfig: o, formkitConfig: u }) => {
  const s = jr(!1);
  e.provide("isIconsLoaded", s);
  const d = {
    // Default theme configuration
    theme: {
      preset: vp,
      options: {
        prefix: "p",
        darkModeSelector: ".dark-mode",
        cssLayer: {
          name: "primevue",
          order: "tailwind-base, primevue, tailwind-utilities"
        }
      }
    }
  }, f = {
    locales: { en: qm, ar: Fm },
    locale: "en",
    icons: {
      ...Dp
    },
    config: {
      rootClasses: Vm
    }
  };
  if (e.use(pc, Fa(d, o)), e.use(fl, pl(Fa(f, u))), !r || !t) return;
  if (await $a.icon.count() > 0) {
    s.value = !0;
    return;
  }
  Td(t, r, {}).then(({ icons: y }) => {
    $a.icon.bulkAdd(y).then(() => {
      setTimeout(() => s.value = !0, 3e3);
    });
  });
}, hg = {
  install(e, r) {
    eg(e, r), console.log("config here", r.apiClient), e.use(Q0, {
      queryClient: Ps
    }), console.log("plugin installed", e);
  }
};
export {
  ag as AppBtn,
  dg as AppForm,
  cg as AppHeader,
  ug as AppIcon,
  ig as AppImage,
  sg as AppNavigation,
  lg as AppSidebar,
  fg as Datalist,
  hg as default
};
